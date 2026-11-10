import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const languages = ['en', 'hi', 'kn', 'ml', 'mr', 'ta', 'te', 'zh'];

const collectionSlugs = [
  "panchatantra",
  "vikram-vetal",
  "tenali-rama",
  "akbar-birbal",
  "jataka-tales",
  "aesop-s-fables",
  "arabian-nights",
  "paramartha-guru",
  "mulla-nasruddin",
  "grimm-fairy-tales",
  "hans-christian-andersen",
  "cinderella-stories",
  "charles-perrault"
];

function getCollectionSlug(collection) {
  if (!collection) return 'world-folktales';
  const norm = collection.toLowerCase();
  if (norm.includes('cinderella')) return 'cinderella-stories';
  return norm.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

console.log('=== GENERATING BEDTIME & CONTINUOUS NARRATOR PLAYLISTS ===\n');

let totalPlaylists = 0;

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
  const outDir = path.join(rootDir, 'public', 'playlists', lang);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const allMixed = [];

  for (const colSlug of collectionSlugs) {
    const colStories = stories.filter(s => getCollectionSlug(s.collection) === colSlug);
    // Take top 30 stories for smooth continuous listening
    const selected = colStories.slice(0, 30).map(s => ({
      id: s.id,
      slug: s.slug,
      title: s.title,
      collection: s.collection,
      reading_time: s.reading_time || '3m',
      full_text: s.full_text || '',
      moral: s.moral || '',
      vocabulary: (s.vocabulary || []).slice(0, 3),
      discussion_questions: (s.discussion_questions || []).slice(0, 2)
    }));

    if (selected.length > 0) {
      allMixed.push(...selected.slice(0, 3)); // 3 stories from each collection for the "all" playlist
    }

    const outFile = path.join(outDir, `${colSlug}.json`);
    fs.writeFileSync(outFile, JSON.stringify(selected), 'utf8');
    totalPlaylists++;
  }

  // Write "all" playlist
  const allOutFile = path.join(outDir, 'all.json');
  fs.writeFileSync(allOutFile, JSON.stringify(allMixed), 'utf8');
  totalPlaylists++;

  console.log(`[${lang.toUpperCase()}] Created ${collectionSlugs.length + 1} playlists (including 'all').`);
}

console.log(`\n=== PLAYLIST GENERATION COMPLETE: ${totalPlaylists} playlists generated. ===`);
