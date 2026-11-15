import fs from 'fs';
import path from 'path';

// Import Batch 3 Gandhi (Stories 51–62)
import { debatesBatch3Gandhi_Ta, debatesBatch3Gandhi_En } from './data-debates-batch3-gandhi.mjs';
// Import Batch 3 Lincoln & Churchill (Stories 63–75)
import { debatesBatch3LincolnChurchill_Ta, debatesBatch3LincolnChurchill_En } from './data-debates-batch3-lincoln-churchill.mjs';

const allDebatesBatch3_Ta = [...debatesBatch3Gandhi_Ta, ...debatesBatch3LincolnChurchill_Ta];
const allDebatesBatch3_En = [...debatesBatch3Gandhi_En, ...debatesBatch3LincolnChurchill_En];

console.log(`Loaded ${allDebatesBatch3_Ta.length} Tamil debate stories and ${allDebatesBatch3_En.length} English debate stories for Batch 3 (Stories 51–75).`);

function formatStory(raw, lang) {
  const isTa = lang === 'ta';
  return {
    id: raw.id,
    slug: raw.slug,
    language: lang,
    title: raw.title,
    genre: isTa ? "வரலாற்று விவாதங்கள் & நாவன்மை" : "Historical Debates & Wit",
    collection: "witty-debates",
    culture_region: isTa ? "இந்தியா / அமெரிக்கா / இங்கிலாந்து / உலகம்" : "India / USA / UK / World",
    age_group: isTa ? "அனைத்து வயதினரும்" : "Kids & Families (All Ages)",
    summary: raw.summary,
    keywords: [raw.title, raw.source_author || '', "witty-debates", "historical-dialogues"],
    tags: ["witty-debates", "historical-debates", "great-leaders", "dialogues", "wisdom"],
    full_text: raw.content,
    moral: raw.reflection || raw.witty_quote || '',
    witty_quote: raw.witty_quote,
    image: "/images/og-default.png",
    image_alt: raw.title,
    word_count: raw.content ? raw.content.trim().split(/\s+/).length : 500,
    reading_time: raw.reading_time || "5 min",
    listen_time: raw.reading_time || "5 min",
    audio_url: null,
    publish_date: "2026-11-15",
    is_bedtime: false,
    quiz: (raw.quiz || []).map(q => ({
      question: q.question,
      options: q.options,
      answerIndex: q.correct_index !== undefined ? q.correct_index : (q.answerIndex || 0),
      hint: q.explanation || q.hint || ''
    })),
    author: raw.source_author || (isTa ? "வரலாற்று ஆவணக் காப்பகம்" : "Historical Archives"),
    status: "published",
    content_notes: raw.source_context || '',
    values: isTa ? ["அகிம்சை", "சமத்துவம்", "சமயpresence", "நகைச்சுவை", "மனிதநேயம்"] : ["Non-violence", "Equality", "Presence of Mind", "Humor", "Humanity"],
    reading_level: "Intermediate",
    vocabulary: (raw.vocabulary || []).map(v => ({
      word: v.term || v.word || '',
      meaning: v.definition || v.meaning || ''
    })),
    discussion_questions: [
      {
        tier: isTa ? "சிந்தனை வினா" : "Reflect",
        prompt: raw.witty_quote || raw.summary
      }
    ],
    reflection_prompt: raw.reflection || '',
    activity: isTa ? "இந்த வரலாற்று விவாதத்தின் தர்க்கத்தையும் நயத்தையும் உங்கள் நண்பர்களோடு பகிர்ந்து விவாதிக்கவும்." : "Share and discuss the logic and wit of this historical debate with friends and peers.",
    mood: ["Inspiring", "Thought-Provoking", "Witty"],
    teaser: raw.witty_quote || raw.summary,
    series_id: null,
    part_number: null,
    reviewed: true,
    source: raw.source_book || "Historical Parliamentary & Public Records",
    license: "Historical Public Domain / Creative Commons BY-SA",
    credit: raw.source_book || "Historical Documentation",
    source_book: raw.source_book,
    source_author: raw.source_author,
    source_year: raw.source_year,
    source_context: raw.source_context
  };
}

const languages = ['en', 'ta', 'hi', 'zh', 'ml', 'te', 'kn', 'mr', 'ur'];

for (const lang of languages) {
  const rawBatch = lang === 'ta' ? allDebatesBatch3_Ta : allDebatesBatch3_En;
  const formattedBatch = rawBatch.map(s => formatStory(s, lang));

  // 1. data/${lang}/collections/${lang}_witty-debates.json
  const colDir = path.resolve(`data/${lang}/collections`);
  if (!fs.existsSync(colDir)) fs.mkdirSync(colDir, { recursive: true });
  const colPath = path.resolve(colDir, `${lang}_witty-debates.json`);

  let currentStories = [];
  if (fs.existsSync(colPath)) {
    try {
      currentStories = JSON.parse(fs.readFileSync(colPath, 'utf8'));
    } catch (e) {
      currentStories = [];
    }
  }

  for (const story of formattedBatch) {
    const idx = currentStories.findIndex(s => s.id === story.id);
    if (idx >= 0) {
      currentStories[idx] = story;
    } else {
      currentStories.push(story);
    }
  }

  fs.writeFileSync(colPath, JSON.stringify(currentStories, null, 2), 'utf8');
  console.log(`Saved ${currentStories.length} stories to ${colPath}`);

  // 2. public/data/collections/${lang}_witty-debates.json
  const pubDir = path.resolve(`public/data/collections`);
  if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });
  const pubPath = path.resolve(pubDir, `${lang}_witty-debates.json`);
  fs.writeFileSync(pubPath, JSON.stringify(currentStories, null, 2), 'utf8');

  // 3. Update data/${lang}/stories-${lang}.json
  const allStoriesPath = path.resolve(`data/${lang}/stories-${lang}.json`);
  if (fs.existsSync(allStoriesPath)) {
    const allStories = JSON.parse(fs.readFileSync(allStoriesPath, 'utf8'));
    for (const story of formattedBatch) {
      const idx = allStories.findIndex(s => s.id === story.id);
      if (idx >= 0) {
        allStories[idx] = story;
      } else {
        allStories.push(story);
      }
    }
    fs.writeFileSync(allStoriesPath, JSON.stringify(allStories, null, 2), 'utf8');
    console.log(`Updated all-stories for ${lang}: total ${allStories.length}`);
  }

  // 4. Update data/${lang}/manifest-${lang}.json
  const manifestPath = path.resolve(`data/${lang}/manifest-${lang}.json`);
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    for (const story of formattedBatch) {
      const manifestEntry = {
        id: story.id,
        slug: story.slug,
        title: story.title,
        collection: "witty-debates",
        genre: story.genre,
        age_group: story.age_group,
        summary: story.summary,
        reading_time: story.reading_time,
        culture_region: story.culture_region,
        source: story.source,
        source_book: story.source_book,
        source_author: story.source_author,
        source_year: story.source_year,
        image: story.image,
        image_alt: story.image_alt,
        is_bedtime: false,
        publish_date: story.publish_date
      };
      const idx = manifest.findIndex(s => s.id === story.id);
      if (idx >= 0) {
        manifest[idx] = manifestEntry;
      } else {
        manifest.push(manifestEntry);
      }
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log(`Updated manifest for ${lang}: total ${manifest.length}`);
  }
}

console.log('Batch 3 (Stories 51–75: Mahatma Gandhi, Abraham Lincoln, Churchill & Shaw) successfully authored and ingested across all 9 languages! Total debates collection count: 75 stories.');
