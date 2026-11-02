import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const languages = ['en', 'es', 'hi', 'kn', 'ml', 'mr', 'pt', 'ta', 'te', 'zh'];

console.log('=== STARTING THOROUGH STORIES & HYPERLINKS AUDIT ===\n');

// 1. Check all collections defined in [collection].astro
const allCollectionsInCode = [
  "Cinderella Stories", "Akbar–Birbal", "Panchatantra", "Tenali Rama",
  "Aesop's Fables", "Grimm Fairy Tales", "Hans Christian Andersen", "Mulla Nasruddin",
  "Jataka Tales", "Charles Perrault", "Chinese Folktales and Fables", "Arabian Nights",
  "Vikram–Vetal", "Simhasana Battisi", "Sheikh Chilli", "Paramartha Guru",
  "Mariyadai Raman", "African Folktales", "Latin American Folktales",
  "Tamil Folk", "Tamil Folk Humor", "La Fontaine"
];

function getCollectionSlug(collection) {
  if (!collection) return 'world-folktales';
  return collection.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const validCollectionSlugs = new Set(allCollectionsInCode.map(getCollectionSlug));

console.log(`Valid collection slugs in route [collection].astro (${validCollectionSlugs.size}):`);
console.log(Array.from(validCollectionSlugs).join(', '));
console.log('\n--- Checking Stories by Language ---');

const storyStats = {};
const unknownCollections = new Map();
const unknownGenres = new Map();
const missingFields = [];
const duplicateIds = new Map();
const duplicateSlugs = new Map();

for (const lang of languages) {
  const filePath = path.join(rootDir, 'data', lang, `stories-${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] Missing stories file for language: ${lang}`);
    continue;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  let stories = [];
  try {
    stories = JSON.parse(raw);
  } catch (e) {
    console.error(`[ERROR] Failed to parse JSON for language: ${lang}`, e);
    continue;
  }

  storyStats[lang] = {
    total: stories.length,
    reviewed: stories.filter(s => s.reviewed !== false).length,
    collections: new Set(),
    genres: new Set(),
  };

  const idSet = new Set();
  const slugSet = new Set();

  for (const s of stories) {
    if (!s.id) missingFields.push(`${lang}: Story missing id`);
    if (!s.title) missingFields.push(`${lang}: Story ${s.id} missing title`);
    if (!s.slug) missingFields.push(`${lang}: Story ${s.id} missing slug`);
    if (!s.collection) missingFields.push(`${lang}: Story ${s.id} missing collection`);
    if (!s.full_text) missingFields.push(`${lang}: Story ${s.id} missing full_text`);

    if (idSet.has(s.id)) {
      if (!duplicateIds.has(lang)) duplicateIds.set(lang, new Set());
      duplicateIds.get(lang).add(s.id);
    }
    idSet.add(s.id);

    if (slugSet.has(s.slug)) {
      if (!duplicateSlugs.has(lang)) duplicateSlugs.set(lang, new Set());
      duplicateSlugs.get(lang).add(s.slug);
    }
    slugSet.add(s.slug);

    const cSlug = getCollectionSlug(s.collection);
    storyStats[lang].collections.add(s.collection);
    storyStats[lang].genres.add(s.genre);

    if (!validCollectionSlugs.has(cSlug)) {
      if (!unknownCollections.has(s.collection)) {
        unknownCollections.set(s.collection, { count: 0, languages: new Set() });
      }
      const entry = unknownCollections.get(s.collection);
      entry.count++;
      entry.languages.add(lang);
    }
  }

  console.log(`[${lang.toUpperCase()}] Total: ${stories.length} stories | Reviewed: ${storyStats[lang].reviewed} | Collections: ${storyStats[lang].collections.size} | Genres: ${storyStats[lang].genres.size}`);
}

console.log('\n--- Collection Routing Audit ---');
if (unknownCollections.size === 0) {
  console.log('[PASS] All story collections match the routes generated in [collection].astro!');
} else {
  console.log(`[FAIL] Found ${unknownCollections.size} collections in stories that do NOT exist in [collection].astro:`);
  for (const [col, info] of unknownCollections) {
    console.log(`  - "${col}" (${info.count} stories across [${Array.from(info.languages).join(', ')}])`);
  }
}

console.log('\n--- Data Integrity Audit ---');
if (missingFields.length === 0) {
  console.log('[PASS] No missing essential fields (id, title, slug, collection, full_text).');
} else {
  console.log(`[FAIL] Found ${missingFields.length} missing field issues:`);
  missingFields.slice(0, 10).forEach(m => console.log('  ' + m));
}

if (duplicateIds.size === 0) {
  console.log('[PASS] Zero duplicate story IDs within each language.');
} else {
  console.log(`[FAIL] Duplicate IDs found in:`);
  for (const [lang, ids] of duplicateIds) {
    console.log(`  ${lang}: ${ids.size} duplicate IDs`);
  }
}

if (duplicateSlugs.size === 0) {
  console.log('[PASS] Zero duplicate story slugs within each language.');
} else {
  console.log(`[FAIL] Duplicate slugs found in:`);
  for (const [lang, slugs] of duplicateSlugs) {
    console.log(`  ${lang}: ${slugs.size} duplicate slugs`);
  }
}
