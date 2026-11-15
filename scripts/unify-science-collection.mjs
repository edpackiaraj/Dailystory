import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const languages = ['en', 'ta', 'hi', 'zh', 'ml', 'te', 'kn', 'mr', 'ur'];

function safeWriteFileSync(filePath, data, maxRetries = 10) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      fs.writeFileSync(filePath, data, 'utf8');
      return;
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      const waitMs = 200 * (i + 1);
      const start = Date.now();
      while (Date.now() - start < waitMs) {} // Synchronous spin wait
    }
  }
}

console.log('=== UNIFYING SCIENCE COLLECTION & NORMALIZING STORY FIELDS ===\n');

for (const lang of languages) {
  const langStoriesPath = path.join(rootDir, 'data', lang, `stories-${lang}.json`);
  if (!fs.existsSync(langStoriesPath)) {
    console.warn(`[WARN] ${langStoriesPath} not found`);
    continue;
  }

  const stories = JSON.parse(fs.readFileSync(langStoriesPath, 'utf8'));
  let sciCount = 0;
  let debCount = 0;
  let normalizedCount = 0;

  for (const story of stories) {
    const isSci = (story.id && story.id.startsWith('science-')) ||
                  story.collection === 'Science & Discovery' ||
                  story.collection === 'science-discovery' ||
                  story.collection === 'science-stories';

    const isDeb = (story.id && story.id.startsWith('debate-')) ||
                  story.collection === 'witty-debates';

    if (isSci) {
      story.collection = 'science-stories';
      story.status = 'published';
      story.reviewed = true;
      if (!story.genre) story.genre = 'Science & Discovery';
      if (story.is_bedtime === undefined) story.is_bedtime = false;
      story.image = '/images/stories/science-stories.webp';
      if (!story.image_alt) {
        story.image_alt = lang === 'ta' ? '100 அறிவியல் கண்டுபிடிப்புக் கதைகள்' : '100 Authentic Science Stories';
      }
      sciCount++;
    } else if (isDeb) {
      story.collection = 'witty-debates';
      story.status = 'published';
      story.reviewed = true;
      if (!story.genre) story.genre = 'Historical Wit';
      if (story.is_bedtime === undefined) story.is_bedtime = false;
      story.image = '/images/stories/witty-debates.webp';
      if (!story.image_alt) {
        story.image_alt = lang === 'ta' ? 'அறிவார்ந்த நகைச்சுவை விவாதங்கள்' : '125 Witty Debates & Intellectual Exchanges';
      }
      debCount++;
    }

    // Bidirectional normalization of text & moral fields
    const body = typeof story.full_text === 'string' && story.full_text.trim()
      ? story.full_text
      : (typeof story.content === 'string' ? story.content : '');
    story.full_text = body;
    story.content = body;

    let moralStr = '';
    if (typeof story.moral === 'string' && story.moral.trim()) {
      moralStr = story.moral.trim();
    } else if (story.moral && typeof story.moral === 'object') {
      const obj = story.moral;
      moralStr = obj.insight ? (obj.value ? `${obj.value}: ${obj.insight}` : obj.insight) : (obj.value || '');
    } else if (typeof story.moral_reflection === 'string' && story.moral_reflection.trim()) {
      moralStr = story.moral_reflection.trim();
    } else if (story.moral_reflection && typeof story.moral_reflection === 'object') {
      const obj = story.moral_reflection;
      moralStr = obj.insight ? (obj.value ? `${obj.value}: ${obj.insight}` : obj.insight) : (obj.value || '');
    }
    story.moral = moralStr;

    if (!story.status) story.status = 'published';
    if (story.reviewed === undefined) story.reviewed = true;
    if (!story.language) story.language = lang;

    normalizedCount++;
  }

  safeWriteFileSync(langStoriesPath, JSON.stringify(stories, null, 2));

  // Legacy fallback file if present
  const legacyPath = path.join(rootDir, 'data', lang, 'stories.json');
  if (fs.existsSync(legacyPath)) {
    safeWriteFileSync(legacyPath, JSON.stringify(stories, null, 2));
  }

  console.log(`[${lang.toUpperCase()}] Processed ${stories.length} stories (Science: ${sciCount}, Debates: ${debCount}, Normalized: ${normalizedCount})`);
}

console.log('\n=== UNIFICATION & NORMALIZATION COMPLETE ===\n');
