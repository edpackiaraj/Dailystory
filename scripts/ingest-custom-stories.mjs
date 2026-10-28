import fs from 'node:fs';
import path from 'node:path';

// Usage: node scripts/ingest-custom-stories.mjs [path-to-json-file]
// Default: custom-stories.json (or custom-stories-template.json)

const inputFile = process.argv[2] || 'custom-stories.json';
const inputPath = path.resolve(process.cwd(), inputFile);

if (!fs.existsSync(inputPath)) {
  console.log(`[Custom Ingest] File not found: ${inputFile}. Please create it using custom-stories-template.json as a guide.`);
  process.exit(0);
}

const enStoriesPath = path.resolve(process.cwd(), 'data', 'en', 'stories.json');
const currentStories = JSON.parse(fs.readFileSync(enStoriesPath, 'utf8'));

let incoming = [];
try {
  const raw = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  incoming = Array.isArray(raw) ? raw : (raw.stories || [raw]);
} catch (e) {
  console.error('[Custom Ingest] Error parsing JSON:', e.message);
  process.exit(1);
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

let addedCount = 0;
let updatedCount = 0;

for (const item of incoming) {
  if (!item.title || !item.full_text) {
    console.log('[Custom Ingest] Skipping item missing title or full_text');
    continue;
  }

  const title = item.title.trim();
  const slug = item.slug || slugify(title);
  const collection = item.collection || 'Folktales';
  const id = item.id || `${slugify(collection)}-${slug}`;
  const wordCount = item.full_text.split(/\s+/).length;
  const readMin = Math.max(2, Math.ceil(wordCount / 125));
  const listenMin = Math.max(2, Math.ceil(wordCount / 105));

  const storyObj = {
    id: id,
    slug: slug,
    language: 'en',
    title: title,
    genre: item.genre || 'Folktales',
    collection: collection,
    culture_region: item.culture_region || 'World',
    age_group: item.age_group || 'Below 13',
    summary: item.summary || item.full_text.slice(0, 160) + '...',
    keywords: item.keywords || [title.toLowerCase(), collection.toLowerCase(), 'moral stories for children'],
    tags: item.tags || [slugify(collection), 'folktale', 'values'],
    full_text: item.full_text,
    moral: item.moral || 'Patience, honesty, and kindness bring enduring happiness.',
    image: item.image || `/images/stories/${slugify(collection)}.webp`,
    image_alt: item.image_alt || `${title} illustration`,
    word_count: wordCount,
    reading_time: `${readMin} min`,
    listen_time: `${listenMin} min`,
    audio_url: item.audio_url || null,
    publish_date: item.publish_date || '2026-03-25',
    is_bedtime: item.is_bedtime ?? false,
    quiz: item.quiz || [
      {
        question: `What is the central lesson taught in "${title}"?`,
        options: [
          item.moral || 'Wisdom and honesty prevail.',
          'Anger solves every argument.',
          'Haste is better than planning.',
          'Never listen to good advice.'
        ],
        answerIndex: 0,
        hint: 'Look closely at the story’s moral.'
      },
      {
        question: 'How did the main character approach their challenge?',
        options: [
          'With calm thinking and presence of mind',
          'With shouting and panic',
          'By giving up immediately',
          'By blaming others'
        ],
        answerIndex: 0,
        hint: 'Consider the virtues praised in the story.'
      },
      {
        question: 'What happens when characters choose honesty and kindness?',
        options: [
          'They earn trust and resolve their dispute peacefully',
          'They lose all their friends',
          'Nothing ever changes',
          'Problems become worse'
        ],
        answerIndex: 0,
        hint: 'Reflect upon the happy resolution.'
      }
    ],
    author: item.author || 'Traditional',
    status: 'published',
    content_notes: item.content_notes || 'Family-safe educational story.',
    values: item.values || ['wisdom', 'honesty', 'empathy'],
    reading_level: item.reading_level || 'Beginner',
    vocabulary: item.vocabulary || [
      { word: 'diligence', meaning: 'careful and persistent work or effort' },
      { word: 'counsel', meaning: 'wise advice given to guide decisions' }
    ],
    discussion_questions: item.discussion_questions || [
      { tier: 'Remember', prompt: `What choice did the main character make in "${title}"?` },
      { tier: 'Understand', prompt: 'Why was that choice more effective than acting in anger?' },
      { tier: 'Apply', prompt: 'How could you use this lesson in your own life?' },
      { tier: 'Evaluate', prompt: 'Was the final decision fair to everyone involved?' },
      { tier: 'Create', prompt: 'Invent a new character who helps solve the problem even faster.' }
    ],
    reflection_prompt: item.reflection_prompt || 'What would you have done in the character’s place?',
    activity: item.activity || 'Draw your favorite scene or share this moral with someone in your family.',
    mood: item.mood || ['happy', 'calm', 'brave'],
    teaser: item.teaser || 'Tomorrow, discover another inspiring tale in our library.',
    series_id: item.series_id || null,
    part_number: item.part_number || null,
    reviewed: true,
    source: item.source || 'Traditional Folklore / Public Domain',
    license: item.license || 'Public Domain',
    credit: item.credit || 'Family Folklore Library'
  };

  const existingIdx = currentStories.findIndex(s => s.id === id || s.slug === slug);
  if (existingIdx !== -1) {
    currentStories[existingIdx] = storyObj;
    updatedCount++;
    console.log(`[Custom Ingest] Updated existing story: "${title}"`);
  } else {
    currentStories.push(storyObj);
    addedCount++;
    console.log(`[Custom Ingest] Added new story: "${title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(currentStories, null, 2), 'utf8');
console.log(`[Custom Ingest] Complete! Added: ${addedCount}, Updated: ${updatedCount}. Total English Stories: ${currentStories.length}`);
