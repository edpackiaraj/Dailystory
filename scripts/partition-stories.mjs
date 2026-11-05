import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const languages = ['en', 'hi', 'kn', 'ml', 'mr', 'ta', 'te', 'zh'];

function getCollectionSlug(collection) {
  if (!collection) return 'world-folktales';
  return collection.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

console.log('=== PARTITIONING 25,000 STORIES ACROSS 10 LANGUAGES INTO OPTIMIZED COLLECTION FILES ===\n');

let grandTotalStories = 0;
let grandTotalFiles = 0;

for (const lang of languages) {
  const langDir = path.join(rootDir, 'data', lang);
  const langStoriesFile = path.join(langDir, `stories-${lang}.json`);
  const legacyStoriesFile = path.join(langDir, 'stories.json');
  const storiesFile = fs.existsSync(langStoriesFile) ? langStoriesFile : legacyStoriesFile;
  
  if (!fs.existsSync(storiesFile)) {
    console.warn(`[WARN] ${storiesFile} not found, skipping.`);
    continue;
  }

  const stories = JSON.parse(fs.readFileSync(storiesFile, 'utf8'));
  const collectionsDir = path.join(langDir, 'collections');
  if (!fs.existsSync(collectionsDir)) {
    fs.mkdirSync(collectionsDir, { recursive: true });
  }

  // Group stories by collection
  const groups = new Map();
  const manifest = [];

  for (const story of stories) {
    const colSlug = getCollectionSlug(story.collection);
    if (!groups.has(colSlug)) {
      groups.set(colSlug, []);
    }
    groups.get(colSlug).push(story);

    // Lightweight manifest entry
    manifest.push({
      id: story.id,
      slug: story.slug,
      title: story.title,
      genre: story.genre,
      collection: story.collection,
      collection_slug: colSlug,
      culture_region: story.culture_region,
      age_group: story.age_group,
      summary: story.summary,
      reading_time: story.reading_time,
      is_bedtime: story.is_bedtime,
      word_count: story.word_count,
      status: story.status,
      reviewed: story.reviewed
    });
  }

  // Clean old files in collectionsDir to prevent duplicate names
  if (fs.existsSync(collectionsDir)) {
    const existing = fs.readdirSync(collectionsDir);
    for (const f of existing) {
      fs.unlinkSync(path.join(collectionsDir, f));
    }
  } else {
    fs.mkdirSync(collectionsDir, { recursive: true });
  }

  // Write individual collection files with unique lang prefix
  let langFilesCount = 0;
  for (const [colSlug, colStories] of groups.entries()) {
    const colPath = path.join(collectionsDir, `${lang}_${colSlug}.json`);
    fs.writeFileSync(colPath, JSON.stringify(colStories, null, 2), 'utf8');
    langFilesCount++;
  }

  // Write manifest file
  const manifestPath = path.join(langDir, `manifest-${lang}.json`);
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

  console.log(`[${lang.toUpperCase()}] ${stories.length} stories divided into ${langFilesCount} collection files + manifest-${lang}.json`);
  grandTotalStories += stories.length;
  grandTotalFiles += langFilesCount;
}

console.log(`\n=== PARTITION COMPLETE ===`);
console.log(`Total stories partitioned: ${grandTotalStories}`);
console.log(`Total collection files created: ${grandTotalFiles} across 10 languages`);
