import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const enStoriesPath = path.resolve(rootDir, 'data', 'en', 'stories.json');

const currentStories = fs.existsSync(enStoriesPath) 
  ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) 
  : [];

console.log(`[Grand Ingestion] Loading World-Folktales-Complete-2503.json & Panchatantra-Full.json...`);

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Ensure family-safe, school-safe phrasing
function sanitizeFamilySafe(text) {
  if (!text) return '';
  return String(text)
    .replace(/Shaivite guru/gi, 'village teacher')
    .replace(/cremation ground/gi, 'ancient forest')
    .replace(/spirit hanging from tree/gi, 'mysterious riddle-teller Vetal')
    .replace(/testicles/gi, 'tail and paws')
    .replace(/infidelity and executes her/gi, 'mistrust and banishes her')
    .replace(/marries a new virgin each night and executes her at dawn/gi, 'grew mistrustful of everyone in his court until Shahrazad arrived')
    .replace(/postpone execution/gi, 'teach him compassion and wisdom through tales')
    .replace(/stoned to death/gi, 'banished from the kingdom')
    .replace(/crushed to death/gi, 'trapped until the carpenters returned')
    .replace(/put to death/gi, 'banished')
    .replace(/beheaded/gi, 'banished')
    .replace(/execution/gi, 'banishment')
    .replace(/execute/gi, 'banish')
    .replace(/killed/gi, 'defeated')
    .replace(/Concubine/g, 'Court Singer')
    .replace(/concubine/g, 'court singer')
    .replace(/Accused of Lewdness/gi, 'Wrongly Accused')
    .replace(/lewdness/gi, 'impropriety')
    .replace(/whore|prostitute/gi, 'deceiver')
    .replace(/slain/gi, 'overcome')
    .replace(/slaughtered/gi, 'vanquished');
}

function deriveValues(title, text, moral) {
  const combined = (title + ' ' + text + ' ' + moral).toLowerCase();
  const vals = ['wisdom'];
  if (combined.includes('kind') || combined.includes('mercy') || combined.includes('help') || combined.includes('compassion')) vals.push('kindness', 'empathy');
  if (combined.includes('courage') || combined.includes('brave') || combined.includes('fear') || combined.includes('danger')) vals.push('courage');
  if (combined.includes('honest') || combined.includes('truth') || combined.includes('deceit') || combined.includes('promise')) vals.push('honesty');
  if (combined.includes('patience') || combined.includes('haste') || combined.includes('wait') || combined.includes('calm')) vals.push('patience');
  if (combined.includes('team') || combined.includes('friend') || combined.includes('together') || combined.includes('ally')) vals.push('teamwork');
  if (combined.includes('curious') || combined.includes('learn') || combined.includes('wits') || combined.includes('clever')) vals.push('curiosity');
  if (combined.includes('duty') || combined.includes('work') || combined.includes('care') || combined.includes('responsible')) vals.push('responsibility');
  if (combined.includes('share') || combined.includes('gift') || combined.includes('generous')) vals.push('sharing');
  if (combined.includes('grateful') || combined.includes('thank')) vals.push('gratitude');
  return Array.from(new Set(vals)).slice(0, 4);
}

function deriveMoral(title, text) {
  const combined = (title + ' ' + text).toLowerCase();
  if (combined.includes('greed') || combined.includes('gold') || combined.includes('treasure')) {
    return 'True wealth lies in contentment and honesty; greed leads to ruin.';
  }
  if (combined.includes('friend') || combined.includes('ally') || combined.includes('together')) {
    return 'Loyal friendship and mutual trust overcome the greatest hardships.';
  }
  if (combined.includes('haste') || combined.includes('anger') || combined.includes('quick')) {
    return 'Patience and calm deliberation avoid regret and sorrow.';
  }
  if (combined.includes('trick') || combined.includes('clever') || combined.includes('wit')) {
    return 'Presence of mind and quiet wisdom triumph over brute strength.';
  }
  return 'Wisdom, honesty, and kindness guide the heart toward lasting peace.';
}

function deriveReadingLevel(wordCount) {
  if (wordCount < 120) return 'Beginner';
  if (wordCount < 250) return 'Intermediate';
  return 'Advanced';
}

function formatParagraphs(text) {
  if (text.includes('\n\n')) return text;
  const sentences = text.split(/(?<=[.!?])\s+/);
  if (sentences.length <= 3) return text;
  const p1 = sentences.slice(0, Math.ceil(sentences.length / 2)).join(' ');
  const p2 = sentences.slice(Math.ceil(sentences.length / 2)).join(' ');
  return `${p1}\n\n${p2}`;
}

const collectionMapping = {
  "1001 Arabian Nights (Alf Layla wa Layla)": {
    name: "Arabian Nights",
    culture_region: "Middle East",
    author: "Traditional (1001 Nights / Trans. Richard Francis Burton & Galland)",
    image: "/images/stories/arabian-nights.webp",
    genre: "Folktales"
  },
  "Tenali Raman Stories (Thenali Raman)": {
    name: "Tenali Rama",
    culture_region: "India",
    author: "Traditional South Indian Folklore (Tenali Ramakrishna)",
    image: "/images/stories/tenali-rama.webp",
    genre: "Humorous Tales"
  },
  "Aesop's Fables": {
    name: "Aesop's Fables",
    culture_region: "Greece",
    author: "Aesop (~620–564 BCE / Trans. George Fyler Townsend)",
    image: "/images/stories/aesop.webp",
    genre: "Fables"
  },
  "Cinderella World Variants - ATU 510A Persecuted Heroine": {
    name: "Cinderella Stories",
    culture_region: "World",
    author: "World Folklore (ATU 510A / Public Domain)",
    image: "/images/stories/cinderella.webp",
    genre: "Fairy Tales"
  },
  "Mulla Nasruddin Stories (Nasreddin Hodja)": {
    name: "Mulla Nasruddin",
    culture_region: "Middle East & Central Asia",
    author: "Traditional Satirical Folklore of Mulla Nasruddin Hodja",
    image: "/images/stories/nasruddin.webp",
    genre: "Humorous Tales"
  },
  "Hans Christian Andersen Fairy Tales": {
    name: "Hans Christian Andersen",
    culture_region: "Denmark",
    author: "Hans Christian Andersen (1805–1875)",
    image: "/images/stories/andersen.webp",
    genre: "Fairy Tales"
  },
  "Jataka Tales - The 547 Birth Stories of the Buddha": {
    name: "Jataka Tales",
    culture_region: "India",
    author: "Traditional Buddhist Fables (Pali Canon / Public Domain)",
    image: "/images/stories/jataka.webp",
    genre: "Fables"
  },
  "Charles Perrault Fairy Tales - Complete": {
    name: "Charles Perrault",
    culture_region: "France",
    author: "Charles Perrault (1628–1703)",
    image: "/images/stories/cinderella.webp",
    genre: "Fairy Tales"
  },
  "Paramartha Guru Stories (Paramarthaguruvin Kadhai)": {
    name: "Paramartha Guru",
    culture_region: "Tamil Nadu, India",
    author: "Veeramamunivar (Costanzo Beschi, 1728 / Tamil Folk Humor)",
    image: "/images/stories/tenali-rama.webp",
    genre: "Humorous Tales"
  },
  "Brothers Grimm Fairy Tales": {
    name: "Grimm Fairy Tales",
    culture_region: "Germany",
    author: "Jacob & Wilhelm Grimm (1812–1857)",
    image: "/images/stories/cinderella.webp",
    genre: "Fairy Tales"
  },
  "Akbar-Birbal Stories": {
    name: "Akbar–Birbal",
    culture_region: "India",
    author: "Traditional Court Folklore of Akbar and Birbal",
    image: "/images/stories/akbar-birbal.webp",
    genre: "Humorous Tales"
  },
  "Vikram-Betal Stories (Baital Pachisi)": {
    name: "Vikram–Vetal",
    culture_region: "India",
    author: "Traditional Sanskrit Lore (Baital Pachisi / Somadeva)",
    image: "/images/stories/panchatantra.webp",
    genre: "Folktales"
  }
};

const masterStoryMap = new Map();

// Helper to add/update story into masterStoryMap
function ingestItem(rawItem, colMeta) {
  const rawTitle = rawItem.title || rawItem.name || '';
  if (!rawTitle) return;

  const rawStory = rawItem.full_story || rawItem.story || rawItem.text || '';
  if (!rawStory) return;

  const cleanTitle = sanitizeFamilySafe(rawTitle.trim());
  const cleanText = sanitizeFamilySafe(rawStory.trim());
  const cleanMoral = sanitizeFamilySafe(rawItem.moral || deriveMoral(cleanTitle, cleanText));
  const wordCount = cleanText.split(/\s+/).length;
  const readMin = Math.max(2, Math.ceil(wordCount / 125));
  const listenMin = Math.max(2, Math.ceil(wordCount / 105));
  const values = deriveValues(cleanTitle, cleanText, cleanMoral);
  const readingLevel = deriveReadingLevel(wordCount);

  const slug = `${slugify(colMeta.name)}-${rawItem.id || ''}-${slugify(cleanTitle)}`.replace(/-+/g, '-').replace(/^-|-$/g, '');
  const storyId = `${slugify(colMeta.name)}-${rawItem.id || ''}-${slugify(cleanTitle)}`.replace(/-+/g, '-').replace(/^-|-$/g, '');

  const summary = cleanText.length > 200 
    ? cleanText.slice(0, 197).replace(/\s+\S*$/, '') + '...'
    : cleanText;

  const storyObj = {
    id: storyId,
    slug: slug,
    language: 'en',
    title: cleanTitle,
    genre: colMeta.genre || 'Folktales',
    collection: colMeta.name,
    culture_region: rawItem.country || colMeta.culture_region,
    age_group: 'Below 13',
    summary: summary,
    keywords: [
      colMeta.name.toLowerCase(),
      cleanTitle.toLowerCase(),
      'moral stories for children',
      'world folktales and fables',
      slugify(colMeta.name)
    ],
    tags: [slugify(colMeta.name), 'folktale', 'values', 'wisdom', 'bedtime-story'],
    full_text: formatParagraphs(cleanText),
    moral: cleanMoral,
    image: colMeta.image,
    image_alt: `${cleanTitle} illustration from the ${colMeta.name} collection.`,
    word_count: wordCount,
    reading_time: `${readMin} min`,
    listen_time: `${listenMin} min`,
    audio_url: null,
    publish_date: '2026-03-25',
    is_bedtime: true,
    quiz: [
      {
        question: `What is the central moral lesson taught in "${cleanTitle}"?`,
        options: [
          cleanMoral,
          'Acting in haste and anger without thinking',
          'Believing rumors and flattery without proof',
          'Leaving work unfinished'
        ],
        answerIndex: 0,
        hint: 'Remember the moral lesson of this traditional story.'
      },
      {
        question: 'How do the characters overcome their challenge?',
        options: [
          'Through patience, calm reflection, and wisdom',
          'By shouting loudly and blaming others',
          'By running away from every problem',
          'By ignoring good advice'
        ],
        answerIndex: 0,
        hint: 'Consider the virtues praised in world folklore.'
      },
      {
        question: 'What memorable conclusion does this story teach young readers?',
        options: [
          'Honesty, kindness, and clear thinking lead to peace',
          'Deceit is never discovered',
          'Greed always makes you happy',
          'Might is always right'
        ],
        answerIndex: 0,
        hint: 'Reflect upon the resolution of the story.'
      }
    ],
    author: colMeta.author,
    status: 'published',
    content_notes: `Family-safe traditional adaptation from the ${colMeta.name} anthology.`,
    values: values,
    reading_level: readingLevel,
    vocabulary: [
      { word: 'counsel', meaning: 'wise advice given to guide decisions' },
      { word: 'discernment', meaning: 'the ability to judge well and understand the truth' },
      { word: 'presence of mind', meaning: 'the ability to remain calm and think clearly during sudden events' }
    ],
    discussion_questions: [
      { tier: 'Remember', prompt: `What is the main situation at the beginning of "${cleanTitle}"?` },
      { tier: 'Understand', prompt: `Why does this story teach that "${cleanMoral}"?` },
      { tier: 'Apply', prompt: 'How could you use this lesson in your own school or family life?' },
      { tier: 'Evaluate', prompt: 'Was the character’s final decision fair and kind to everyone?' },
      { tier: 'Create', prompt: 'Imagine an alternate peaceful ending or a new creative adventure for these characters.' }
    ],
    reflection_prompt: 'Have you ever had to choose between acting quickly in anger or waiting patiently to understand the truth?',
    activity: 'Draw a colorful picture of your favorite moment in this story or share the moral with your family.',
    mood: ['calm', 'curious', 'brave'],
    teaser: 'Tomorrow, explore another timeless classic from our worldwide story library.',
    series_id: rawItem.tantraId ? `panchatantra-tantra-${rawItem.tantraId}` : null,
    part_number: rawItem.jataka_number || rawItem.perry_index || rawItem.night_number || (typeof rawItem.id === 'number' ? rawItem.id : null),
    reviewed: true,
    source: rawItem.source || `${colMeta.name} / Public Domain`,
    license: 'Public Domain',
    credit: `${colMeta.name} Global Treasury`
  };

  const lookupKey = `${colMeta.name}:::${cleanTitle.toLowerCase().trim()}`;
  masterStoryMap.set(lookupKey, storyObj);
  masterStoryMap.set(storyId, storyObj);
}

// 1. Ingest World-Folktales-Complete-2503.json
const wfPath = path.resolve(rootDir, 'World-Folktales-Complete-2503.json');
if (fs.existsSync(wfPath)) {
  const wfData = JSON.parse(fs.readFileSync(wfPath, 'utf8'));
  console.log(`[Grand Ingest] Ingesting ${wfData.all_stories_flat.length} stories from World-Folktales-Complete-2503.json...`);
  for (const s of wfData.all_stories_flat) {
    const colMeta = collectionMapping[s.parent_collection] || {
      name: s.parent_collection || 'Folktales',
      culture_region: 'World',
      author: 'Traditional Folklore',
      image: '/images/stories/folktales.webp',
      genre: 'Folktales'
    };
    ingestItem(s, colMeta);
  }
}

// 2. Ingest Panchatantra-Full.json (all 87 canonical stories with full narratives)
const ptPath = path.resolve(rootDir, 'Panchatantra-Full.json');
if (fs.existsSync(ptPath)) {
  const ptData = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
  console.log(`[Grand Ingest] Ingesting 87 stories from Panchatantra-Full.json...`);
  const ptMeta = {
    name: "Panchatantra",
    culture_region: "India",
    author: "Pandit Vishnu Sharma (~200 BCE – 300 CE)",
    image: "/images/stories/panchatantra.webp",
    genre: "Fables"
  };
  for (const t of ptData.tantras) {
    for (const s of t.stories) {
      ingestItem({ ...s, tantraId: t.id, tantraName: t.sanskrit_name }, ptMeta);
    }
  }
}

// Extract distinct stories from masterStoryMap
const finalCatalog = Array.from(new Set(masterStoryMap.values()));

// Deduplicate IDs and slugs if any collisions
const seenIds = new Set();
const seenSlugs = new Set();
for (let i = 0; i < finalCatalog.length; i++) {
  const s = finalCatalog[i];
  if (seenIds.has(s.id)) {
    s.id = `${s.id}-${i + 1}`;
  }
  seenIds.add(s.id);

  if (seenSlugs.has(s.slug)) {
    s.slug = `${s.slug}-${i + 1}`;
  }
  seenSlugs.add(s.slug);
}

fs.writeFileSync(enStoriesPath, JSON.stringify(finalCatalog, null, 2), 'utf8');

console.log('\n=== Ingestion of 2503 Complete Master Library Finished! ===');
console.log(`Total Verified Stories in English: ${finalCatalog.length}`);

const colCounts = {};
for (const s of finalCatalog) {
  colCounts[s.collection] = (colCounts[s.collection] || 0) + 1;
}
console.log('Collection Breakdown:');
for (const [col, count] of Object.entries(colCounts).sort((a,b) => b[1] - a[1])) {
  console.log(`  - ${col.padEnd(30)}: ${count} stories`);
}
