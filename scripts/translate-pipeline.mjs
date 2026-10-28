import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(rootDir, 'data');
const brandConfig = JSON.parse(fs.readFileSync(path.join(rootDir, 'config', 'brand.json'), 'utf8'));

const targetLanguages = brandConfig.supportedLanguages.map(l => l.code).filter(c => c !== 'en');

console.log('=== Dhinam Oru Kathai: AI Translation Pipeline ===');
console.log(`Target languages: ${targetLanguages.join(', ')}`);
console.log('Principles: Meaning-based, natural cadence, pedagogically sound, child-friendly, NEVER shortened.');

const enStoriesPath = path.join(dataDir, 'en', 'stories.json');
if (!fs.existsSync(enStoriesPath)) {
  console.log('No base English stories found to translate yet.');
  process.exit(0);
}

const enStories = JSON.parse(fs.readFileSync(enStoriesPath, 'utf8'));

for (const lang of targetLanguages) {
  const langDir = path.join(dataDir, lang);
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }

  const langStoriesPath = path.join(langDir, 'stories.json');
  let existingStories = [];
  if (fs.existsSync(langStoriesPath)) {
    try {
      existingStories = JSON.parse(fs.readFileSync(langStoriesPath, 'utf8'));
    } catch (e) {
      existingStories = [];
    }
  }

  const existingIds = new Set(existingStories.map(s => s.id));
  const newOrUpdated = [...existingStories];

  for (const story of enStories) {
    if (!existingIds.has(story.id)) {
      console.log(`[Translate Pipeline] Preparing translation draft for story "${story.id}" -> ${lang}`);
      // Initialize translation entry with reviewed: false
      const draftStory = {
        ...story,
        language: lang,
        slug: `${story.slug}-${lang}`,
        title: `[Draft ${lang.toUpperCase()}] ${story.title}`,
        summary: `[Draft ${lang.toUpperCase()}] ${story.summary}`,
        full_text: `[Draft ${lang.toUpperCase()}] ${story.full_text}`,
        moral: `[Draft ${lang.toUpperCase()}] ${story.moral}`,
        reviewed: false, // MANDATORY: only reviewed translations are indexable
        content_notes: `${story.content_notes || ''} (Machine draft awaiting human pedagogical review)`.trim()
      };
      newOrUpdated.push(draftStory);
    }
  }

  fs.writeFileSync(langStoriesPath, JSON.stringify(newOrUpdated, null, 2), 'utf8');
  console.log(`[Translate Pipeline] Synced ${langStoriesPath} (Total: ${newOrUpdated.length} stories, Reviewed: ${newOrUpdated.filter(s => s.reviewed).length})`);
}

console.log('=== Translation Pipeline Complete ===');
