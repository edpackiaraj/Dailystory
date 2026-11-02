import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const glossaryPath = path.join(rootDir, 'config', 'deity-glossary.json');
const dataDir = path.join(rootDir, 'data');

if (!fs.existsSync(glossaryPath)) {
  console.error(`[Neutralizer] Error: Glossary not found at ${glossaryPath}`);
  process.exit(1);
}

const glossary = JSON.parse(fs.readFileSync(glossaryPath, 'utf8'));
const { allowlist, forbiddenDeityTerms, genericTerms } = glossary;

console.log('------------------------------------------------------------');
console.log('[Neutralizer] Running build-time deity-name neutralization...');
console.log(`[Neutralizer] Loaded ${forbiddenDeityTerms.length} prohibited deity terms.`);
console.log(`[Neutralizer] Loaded ${allowlist.length} allow-listed cultural folklore names.`);

if (!fs.existsSync(dataDir)) {
  console.log('[Neutralizer] No data directory found yet. Skipping.');
  process.exit(0);
}

const languages = fs.readdirSync(dataDir).filter((d) => fs.statSync(path.join(dataDir, d)).isDirectory());
let totalReplacements = 0;
let violationsFound = 0;

for (const lang of languages) {
  const langStoriesFilePath = path.join(dataDir, lang, `stories-${lang}.json`);
  const legacyStoriesFilePath = path.join(dataDir, lang, 'stories.json');
  const storiesFilePath = fs.existsSync(langStoriesFilePath) ? langStoriesFilePath : legacyStoriesFilePath;
  if (!fs.existsSync(storiesFilePath)) continue;

  let stories = JSON.parse(fs.readFileSync(storiesFilePath, 'utf8'));
  let modified = false;

  stories = stories.map((story) => {
    let text = story.full_text || '';
    let summary = story.summary || '';
    let title = story.title || '';
    let moral = story.moral || '';

    for (const rule of forbiddenDeityTerms) {
      const term = rule.term;
      const replacement = rule.replace;

      // In Spanish/Portuguese, 'rama' means tree branch - must not replace lowercase common nouns!
      const isCaseSensitive = term.toLowerCase() === 'rama' || term.toLowerCase() === 'ra';
      const regex = new RegExp(`\\b${term}\\b`, isCaseSensitive ? 'g' : 'gi');

      // Check if text has any match
      const checkAndReplace = (sourceText, fieldName) => {
        if (!sourceText) return sourceText;
        return sourceText.replace(regex, (match, offset, str) => {
          // Check if surrounding context or story metadata contains allowlist
          const windowStart = Math.max(0, offset - 50);
          const windowEnd = Math.min(str.length, offset + term.length + 50);
          const surrounding = str.substring(windowStart, windowEnd);

          const isAllowed = allowlist.some((allowed) =>
            surrounding.toLowerCase().includes(allowed.toLowerCase()) ||
            (story.collection && story.collection.toLowerCase().includes(allowed.toLowerCase())) ||
            (story.title && story.title.toLowerCase().includes(allowed.toLowerCase()))
          );

          if (isAllowed) {
            return match; // preserve allowed folklore context
          }

          console.log(`[Neutralizer] Neutralized deity term "${match}" -> "${replacement}" in story ID "${story.id}" (${fieldName}) [lang: ${lang}]`);
          totalReplacements++;
          modified = true;
          return replacement;
        });
      };

      text = checkAndReplace(text, 'full_text');
      summary = checkAndReplace(summary, 'summary');
      title = checkAndReplace(title, 'title');
      moral = checkAndReplace(moral, 'moral');
    }

    return {
      ...story,
      title,
      summary,
      full_text: text,
      moral,
    };
  });

  // Verify no prohibited terms remain unhandled (unless allow-listed)
  for (const story of stories) {
    const combined = `${story.title} ${story.summary} ${story.full_text} ${story.moral}`;
    for (const rule of forbiddenDeityTerms) {
      const isCaseSensitive = rule.term.toLowerCase() === 'rama' || rule.term.toLowerCase() === 'ra';
      const regex = new RegExp(`\\b${rule.term}\\b`, isCaseSensitive ? 'g' : 'gi');
      let match;
      while ((match = regex.exec(combined)) !== null) {
        const offset = match.index;
        const windowStart = Math.max(0, offset - 50);
        const windowEnd = Math.min(combined.length, offset + rule.term.length + 50);
        const surrounding = combined.substring(windowStart, windowEnd);

        const isAllowed = allowlist.some((allowed) =>
          surrounding.toLowerCase().includes(allowed.toLowerCase()) ||
          (story.collection && story.collection.toLowerCase().includes(allowed.toLowerCase())) ||
          (story.title && story.title.toLowerCase().includes(allowed.toLowerCase()))
        );

        if (!isAllowed) {
          console.error(`[Neutralizer] VIOLATION: Leftover un-neutralized deity term "${match[0]}" detected in story "${story.id}" (${story.title})!`);
          violationsFound++;
        }
      }
    }
  }

  if (modified) {
    fs.writeFileSync(storiesFilePath, JSON.stringify(stories, null, 2), 'utf8');
    console.log(`[Neutralizer] Updated cleaned stories for language: ${lang}`);
  }
}

if (violationsFound > 0) {
  console.error(`[Neutralizer] BUILD FAILED: ${violationsFound} un-neutralized religious deity references found. See policy rules.`);
  process.exit(1);
}

console.log(`[Neutralizer] Completed cleanly. Total replacements: ${totalReplacements}.`);
console.log('------------------------------------------------------------');
