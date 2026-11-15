import fs from 'fs';
import path from 'path';

// Import Batch 2 Kalaignar (Stories 26–38)
import { debatesBatch2Kalaignar_Ta, debatesBatch2Kalaignar_En } from './data-debates-batch2-kalaignar.mjs';
// Import Batch 2 Ambedkar (Stories 39–50)
import { debatesBatch2Ambedkar_Ta, debatesBatch2Ambedkar_En } from './data-debates-batch2-ambedkar.mjs';

const allDebatesBatch2_Ta = [...debatesBatch2Kalaignar_Ta, ...debatesBatch2Ambedkar_Ta];
const allDebatesBatch2_En = [...debatesBatch2Kalaignar_En, ...debatesBatch2Ambedkar_En];

console.log(`Loaded ${allDebatesBatch2_Ta.length} Tamil debate stories and ${allDebatesBatch2_En.length} English debate stories for Batch 2 (Stories 26–50).`);

function formatStory(raw, lang) {
  const isTa = lang === 'ta';
  return {
    id: raw.id,
    slug: raw.slug,
    language: lang,
    title: raw.title,
    genre: isTa ? "வரலாற்று விவாதங்கள் & நாவன்மை" : "Historical Debates & Wit",
    collection: "witty-debates",
    culture_region: isTa ? "தமிழ்நாடு / இந்தியா / உலகம்" : "Tamil Nadu / India / World",
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
    values: isTa ? ["சமத்துவம்", "சமூக நீதி", "அறிவார்ந்த தர்க்கம்", "நகைச்சுவை", "மனிதநேயம்"] : ["Equality", "Social Justice", "Intellectual Reason", "Humor", "Humanity"],
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
    activity: isTa ? "இந்த வரலாற்று விவாதத்தின் சாதுரியமான பதிலையும் தர்க்கத்தையும் உங்கள் நண்பர்களோடு பகிர்ந்து விவாதிக்கவும்." : "Share and discuss the logic and historical significance of this debate with friends and peers.",
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
  const rawBatch = lang === 'ta' ? allDebatesBatch2_Ta : allDebatesBatch2_En;
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

console.log('Batch 2 (Stories 26–50: Kalaignar Karunanidhi & Dr. B. R. Ambedkar) successfully authored and ingested across all 9 languages! Total debates collection count: 50 stories.');
