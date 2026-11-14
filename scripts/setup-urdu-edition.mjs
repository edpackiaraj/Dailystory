import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const enCollectionsDir = path.join(rootDir, 'data', 'en', 'collections');
const urCollectionsDir = path.join(rootDir, 'data', 'ur', 'collections');
const publicUrCollectionsDir = path.join(rootDir, 'public', 'data', 'collections');

fs.mkdirSync(urCollectionsDir, { recursive: true });
fs.mkdirSync(publicUrCollectionsDir, { recursive: true });

const files = fs.readdirSync(enCollectionsDir).filter(f => f.endsWith('.json'));

let allStories = [];
let manifest = [];

for (const file of files) {
  const enFilePath = path.join(enCollectionsDir, file);
  const rawData = fs.readFileSync(enFilePath, 'utf8');
  const stories = JSON.parse(rawData);

  const urStories = stories.map(s => ({
    ...s,
    language: 'ur'
  }));

  const urFileName = file.replace(/^en_/, 'ur_');
  const urFilePath = path.join(urCollectionsDir, urFileName);
  const publicUrFilePath = path.join(publicUrCollectionsDir, urFileName);

  const jsonStr = JSON.stringify(urStories, null, 2);
  fs.writeFileSync(urFilePath, jsonStr, 'utf8');
  fs.writeFileSync(publicUrFilePath, jsonStr, 'utf8');

  allStories.push(...urStories);

  for (const s of urStories) {
    manifest.push({
      id: s.id,
      slug: s.slug,
      title: s.title,
      genre: s.genre,
      collection: s.collection,
      collection_slug: (s.collection || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      culture_region: s.culture_region,
      age_group: s.age_group,
      summary: s.summary,
      reading_time: s.reading_time || '3 min',
      is_bedtime: !!s.is_bedtime,
      word_count: s.word_count || 400,
      status: s.status || 'published',
      reviewed: s.reviewed !== false,
      image: s.image || '/images/og-default.png'
    });
  }

  console.log(`Created ${urFileName} with ${urStories.length} stories`);
}

fs.writeFileSync(path.join(rootDir, 'data', 'ur', 'manifest-ur.json'), JSON.stringify(manifest, null, 2), 'utf8');
fs.writeFileSync(path.join(rootDir, 'data', 'ur', 'stories-ur.json'), JSON.stringify(allStories, null, 2), 'utf8');

console.log(`Total Urdu stories created: ${allStories.length}`);
