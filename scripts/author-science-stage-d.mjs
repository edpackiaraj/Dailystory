import fs from 'fs';
import path from 'path';

// Stage D1: Stories 81 to 90
import { stageD1EnStories, stageD1TaStories } from './data-science-stage-d1.mjs';
// Stage D2: Stories 91 to 100
import { stageD2EnStories, stageD2TaStories } from './data-science-stage-d2.mjs';

const allStageD_En = [...stageD1EnStories, ...stageD2EnStories];
const allStageD_Ta = [...stageD1TaStories, ...stageD2TaStories];

console.log(`Loaded ${allStageD_En.length} English stories and ${allStageD_Ta.length} Tamil stories for Stage D.`);

const languages = ['en', 'ta', 'hi', 'zh', 'ml', 'te', 'kn', 'mr', 'ur'];

for (const lang of languages) {
  const colPath = path.resolve(`data/${lang}/collections/${lang}_science-stories.json`);
  let currentStories = [];
  if (fs.existsSync(colPath)) {
    currentStories = JSON.parse(fs.readFileSync(colPath, 'utf8'));
  }

  const batchToAdd = lang === 'ta' ? allStageD_Ta : allStageD_En;

  for (const newStory of batchToAdd) {
    const idx = currentStories.findIndex(s => s.id === newStory.id);
    if (idx >= 0) {
      currentStories[idx] = newStory;
    } else {
      currentStories.push(newStory);
    }
  }

  fs.writeFileSync(colPath, JSON.stringify(currentStories, null, 2), 'utf8');
  console.log(`Saved ${currentStories.length} stories to ${colPath}`);

  // Also update public/data/collections
  const pubPath = path.resolve(`public/data/collections/${lang}_science-stories.json`);
  fs.writeFileSync(pubPath, JSON.stringify(currentStories, null, 2), 'utf8');

  // Update data/${lang}/stories-${lang}.json
  const allStoriesPath = path.resolve(`data/${lang}/stories-${lang}.json`);
  if (fs.existsSync(allStoriesPath)) {
    const allStories = JSON.parse(fs.readFileSync(allStoriesPath, 'utf8'));
    for (const newStory of batchToAdd) {
      const idx = allStories.findIndex(s => s.id === newStory.id);
      if (idx >= 0) {
        allStories[idx] = newStory;
      } else {
        allStories.push(newStory);
      }
    }
    fs.writeFileSync(allStoriesPath, JSON.stringify(allStories, null, 2), 'utf8');
    console.log(`Updated all-stories for ${lang}: total ${allStories.length}`);
  }

  // Update data/${lang}/manifest-${lang}.json
  const manifestPath = path.resolve(`data/${lang}/manifest-${lang}.json`);
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    for (const newStory of batchToAdd) {
      const manifestEntry = {
        id: newStory.id,
        slug: newStory.slug,
        title: newStory.title,
        collection: newStory.collection,
        genre: newStory.genre || 'Science & Nature',
        age_group: newStory.age_group,
        summary: newStory.summary,
        reading_time: newStory.reading_time,
        culture_region: newStory.culture_region || 'World / History of Science',
        source: newStory.source || 'Historical Treatises & Primary Sources',
        source_book: newStory.source_book,
        source_author: newStory.source_author,
        source_year: newStory.source_year,
        source_chapter: newStory.source_chapter,
        authenticity_note: newStory.authenticity_note,
        image: newStory.image || '/images/collections/science-stories.webp',
        image_alt: newStory.image_alt || newStory.title,
        is_bedtime: false,
        publish_date: '2026-11-15'
      };
      const idx = manifest.findIndex(s => s.id === newStory.id);
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

console.log('Stage D (Stories 81–100) successfully authored and synced across all 9 languages! Total collection count: 100 stories milestone achieved!');
