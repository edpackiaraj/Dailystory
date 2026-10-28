import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const enStoriesPath = path.resolve(rootDir, 'data', 'en', 'stories.json');

const currentStories = fs.existsSync(enStoriesPath) 
  ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) 
  : [];

console.log(`[Grand Ingestion] Current stories in English: ${currentStories.length}`);

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

function deriveGenre(collection, title, text) {
  const c = collection.toLowerCase();
  const t = (title + ' ' + text).toLowerCase();
  if (c.includes('aesop') || c.includes('panchatantra') || c.includes('jataka')) return 'Fables';
  if (c.includes('andersen') || c.includes('cinderella') || c.includes('perrault') || c.includes('grimm')) return 'Fairy Tales';
  if (c.includes('nasruddin') || c.includes('birbal') || c.includes('tenali')) return 'Humorous Tales';
  if (t.includes('voyage') || t.includes('journey') || t.includes('adventure') || t.includes('flight')) return 'Adventure Stories';
  if (t.includes('magic') || t.includes('jinni') || t.includes('fairy') || t.includes('dragon')) return 'Fantasy Stories';
  return 'Folktales';
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

// Master Manifest
const manifest = [
  {
    file: 'Aesop-Fables-Full.json',
    arrayKey: 'stories',
    collection: "Aesop's Fables",
    culture_region: 'Greece',
    author: 'Aesop (~620–564 BCE / Trans. George Fyler Townsend)',
    defaultSource: "Aesop's Fables / Perry Index / Public Domain",
    image: '/images/stories/aesop.webp'
  },
  {
    file: 'Arabian-Nights-Full.json',
    arrayKey: 'stories',
    collection: 'Arabian Nights',
    culture_region: 'Middle East',
    author: 'Traditional (1001 Nights / Trans. Richard Francis Burton & Galland)',
    defaultSource: '1001 Nights / Burton translation / Public Domain',
    image: '/images/stories/arabian-nights.webp'
  },
  {
    file: 'Cinderella-World-Variants.json',
    arrayKey: 'variants',
    collection: 'Cinderella Stories',
    culture_region: 'World',
    author: 'World Folklore (ATU 510A / Public Domain)',
    defaultSource: 'World Cinderella Folklore Traditions / Public Domain',
    image: '/images/stories/cinderella.webp'
  },
  {
    file: 'Hans-Christian-Andersen-Full.json',
    arrayKey: 'stories',
    collection: 'Hans Christian Andersen',
    culture_region: 'Denmark',
    author: 'Hans Christian Andersen (1805–1875)',
    defaultSource: 'Hans Christian Andersen Fairy Tales / Public Domain',
    image: '/images/stories/andersen.webp'
  },
  {
    file: 'Jataka-Tales-Full.json',
    arrayKey: 'stories',
    collection: 'Jataka Tales',
    culture_region: 'India',
    author: 'Traditional Buddhist Fables (Pali Canon / Public Domain)',
    defaultSource: 'The Jataka / E. B. Cowell translation / Public Domain',
    image: '/images/stories/jataka.webp'
  },
  {
    file: 'Mulla-Nasruddin-Full.json',
    arrayKey: 'stories',
    collection: 'Mulla Nasruddin',
    culture_region: 'Middle East & Central Asia',
    author: 'Traditional Satirical Folklore of Mulla Nasruddin Hodja',
    defaultSource: 'Mulla Nasruddin Folktales / Public Domain',
    image: '/images/stories/nasruddin.webp'
  },
  {
    file: 'Panchatantra-Full.json',
    isTantras: true,
    collection: 'Panchatantra',
    culture_region: 'India',
    author: 'Pandit Vishnu Sharma (~200 BCE – 300 CE)',
    defaultSource: 'Panchatantra / Arthur W. Ryder translation / Public Domain',
    image: '/images/stories/panchatantra.webp'
  },
  {
    file: 'Tenali-Raman-Full.json',
    arrayKey: 'stories',
    collection: 'Tenali Rama',
    culture_region: 'India',
    author: 'Traditional South Indian Folklore (Tenali Ramakrishna)',
    defaultSource: 'Tales of Tenali Rama / Vijayanagara Lore / Public Domain',
    image: '/images/stories/tenali-rama.webp'
  }
];

// Existing stories map for fast lookup and replacement of placeholders
const storyMap = new Map();
for (const s of currentStories) {
  storyMap.set(s.id, s);
  storyMap.set(`${s.collection}:::${s.title.toLowerCase().trim()}`, s);
}

let addedCount = 0;
let updatedCount = 0;

for (const m of manifest) {
  const filePath = path.resolve(rootDir, m.file);
  if (!fs.existsSync(filePath)) {
    console.log(`[Grand Ingest] Warning: File not found: ${m.file}`);
    continue;
  }

  const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let items = [];

  if (m.isTantras) {
    for (const t of rawData.tantras) {
      for (const s of t.stories) {
        items.push({
          ...s,
          tantraId: t.id,
          tantraName: t.sanskrit_name,
          tantraEnglish: t.english_name
        });
      }
    }
  } else {
    items = rawData[m.arrayKey] || [];
  }

  console.log(`[Grand Ingest] Processing ${items.length} stories from ${m.file}...`);

  for (const item of items) {
    const rawTitle = item.title || item.name || '';
    if (!rawTitle) continue;

    const rawStory = item.full_story || item.story || item.text || '';
    if (!rawStory) continue;

    const cleanTitle = sanitizeFamilySafe(rawTitle.trim());
    const cleanText = sanitizeFamilySafe(rawStory.trim());
    const cleanMoral = sanitizeFamilySafe(item.moral || 'Wisdom, patience, and kind conduct lead to peace and happiness.');
    const wordCount = cleanText.split(/\s+/).length;
    const readMin = Math.max(2, Math.ceil(wordCount / 125));
    const listenMin = Math.max(2, Math.ceil(wordCount / 105));
    const genre = deriveGenre(m.collection, cleanTitle, cleanText);
    const values = deriveValues(cleanTitle, cleanText, cleanMoral);
    const readingLevel = deriveReadingLevel(wordCount);

    const slug = `${slugify(m.collection)}-${item.id || ''}-${slugify(cleanTitle)}`.replace(/-+/g, '-').replace(/^-|-$/g, '');
    const storyId = `${slugify(m.collection)}-${item.id || ''}-${slugify(cleanTitle)}`.replace(/-+/g, '-').replace(/^-|-$/g, '');

    const summary = cleanText.length > 200 
      ? cleanText.slice(0, 197).replace(/\s+\S*$/, '') + '...'
      : cleanText;

    const newStory = {
      id: storyId,
      slug: slug,
      language: 'en',
      title: cleanTitle,
      genre: genre,
      collection: m.collection,
      culture_region: item.country || m.culture_region,
      age_group: 'Below 13',
      summary: summary,
      keywords: [
        m.collection.toLowerCase(),
        cleanTitle.toLowerCase(),
        'moral stories for children',
        'timeless folktales worldwide',
        slugify(m.collection)
      ],
      tags: [slugify(m.collection), 'folktale', 'values', 'bedtime-story', 'wisdom'],
      full_text: formatParagraphs(cleanText),
      moral: cleanMoral,
      image: m.image,
      image_alt: `${cleanTitle} illustration from the ${m.collection} collection.`,
      word_count: wordCount,
      reading_time: `${readMin} min`,
      listen_time: `${listenMin} min`,
      audio_url: null,
      publish_date: '2026-03-25',
      is_bedtime: true,
      quiz: [
        {
          question: `What fundamental virtue is highlighted in "${cleanTitle}"?`,
          options: [
            cleanMoral,
            'Acting in hasty anger without listening',
            'Trusting deceitful flattery blindly',
            'Leaving tasks undone'
          ],
          answerIndex: 0,
          hint: 'Remember the moral lesson of the story.'
        },
        {
          question: 'How does the central character approach their challenge?',
          options: [
            'Through thoughtful reflection, patience, and presence of mind',
            'By running away from responsibility',
            'By shouting loudly and blaming friends',
            'By ignoring good counsel'
          ],
          answerIndex: 0,
          hint: 'Consider the virtues praised in timeless fables.'
        },
        {
          question: 'What memorable conclusion does this story teach readers?',
          options: [
            'Patience, honesty, and humility lead to lasting harmony',
            'False appearances never get discovered',
            'Greed brings true happiness',
            'Might is always right'
          ],
          answerIndex: 0,
          hint: 'Think about how justice and truth prevail.'
        }
      ],
      author: m.author,
      status: 'published',
      content_notes: `Family-safe traditional adaptation from ${m.collection}.`,
      values: values,
      reading_level: readingLevel,
      vocabulary: [
        { word: 'counsel', meaning: 'wise advice given after thoughtful consideration' },
        { word: 'integrity', meaning: 'the quality of being honest and having strong moral principles' },
        { word: 'presence of mind', meaning: 'the ability to remain calm and make sound choices in unexpected situations' }
      ],
      discussion_questions: [
        { tier: 'Remember', prompt: `What central dilemma begins the tale of "${cleanTitle}"?` },
        { tier: 'Understand', prompt: `Why is the moral "${cleanMoral}" meaningful in daily life?` },
        { tier: 'Apply', prompt: 'How could you use the lesson from this story in a disagreement with friends or family?' },
        { tier: 'Evaluate', prompt: 'Was the character’s resolution fair and beneficial to everyone involved?' },
        { tier: 'Create', prompt: 'Imagine a creative new ending or a sequel where the characters face a new adventure.' }
      ],
      reflection_prompt: 'Have you ever faced a challenging choice where calm thinking helped you do the right thing?',
      activity: 'Retell this story to a friend or draw your favorite scene from the tale.',
      mood: ['calm', 'curious', 'brave'],
      teaser: 'Tomorrow, explore another heartwarming classic in our worldwide story treasury.',
      series_id: item.tantraId ? `panchatantra-tantra-${item.tantraId}` : (item.night_number ? '1001-arabian-nights' : null),
      part_number: item.jataka_number || item.perry_index || item.night_number || (typeof item.id === 'number' ? item.id : null),
      reviewed: true,
      source: item.source || m.defaultSource,
      license: 'Public Domain',
      credit: `${m.collection} Heritage Anthology`
    };

    // Check if this story already exists in our collection
    const key = `${m.collection}:::${cleanTitle.toLowerCase().trim()}`;
    const existing = storyMap.get(key) || storyMap.get(storyId);

    if (existing) {
      // If existing was a placeholder with shorter text, replace with the rich full story from the concern file!
      if (!existing.full_text || existing.full_text.length < cleanText.length) {
        existing.full_text = formatParagraphs(cleanText);
        existing.word_count = wordCount;
        existing.reading_time = `${readMin} min`;
        existing.listen_time = `${listenMin} min`;
        existing.summary = summary;
        existing.moral = cleanMoral;
        updatedCount++;
      }
    } else {
      currentStories.push(newStory);
      storyMap.set(key, newStory);
      storyMap.set(storyId, newStory);
      addedCount++;
    }
  }
}

// Write back to data/en/stories.json
fs.writeFileSync(enStoriesPath, JSON.stringify(currentStories, null, 2), 'utf8');

console.log('=== Grand Ingestion Complete ===');
console.log(`Newly Added Stories: ${addedCount}`);
console.log(`Updated with Full Text: ${updatedCount}`);
console.log(`Total English Stories in Catalog: ${currentStories.length}`);

// Print collection breakdown
const counts = {};
for (const s of currentStories) {
  counts[s.collection] = (counts[s.collection] || 0) + 1;
}
console.log('Collection Breakdown:');
for (const [col, count] of Object.entries(counts).sort((a,b) => b[1] - a[1])) {
  console.log(`  - ${col.padEnd(30)}: ${count} stories`);
}
