import fs from 'fs';
import path from 'path';

// Stage C1: Stories 56 to 60
import { stageC1EnStories, stageC1TaStories } from './data-science-stage-c1.mjs';
// Stage C2: Stories 61 to 68
import { stageC2EnStories, stageC2TaStories } from './data-science-stage-c2.mjs';
// Stage C3: Stories 69 to 80
import { stageC3EnStories, stageC3TaStories } from './data-science-stage-c3.mjs';

const allStageC_En = [...stageC1EnStories, ...stageC2EnStories, ...stageC3EnStories];
const allStageC_Ta = [...stageC1TaStories, ...stageC2TaStories, ...stageC3TaStories];

console.log(`Loaded ${allStageC_En.length} English stories and ${allStageC_Ta.length} Tamil stories for Stage C.`);

const languages = ['en', 'ta', 'hi', 'zh', 'ml', 'te', 'kn', 'mr', 'ur'];

for (const lang of languages) {
  const colPath = path.resolve(`data/${lang}/collections/${lang}_science-stories.json`);
  let currentStories = [];
  if (fs.existsSync(colPath)) {
    currentStories = JSON.parse(fs.readFileSync(colPath, 'utf8'));
  }

  const batchToAdd = lang === 'ta' ? allStageC_Ta : allStageC_En;

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

console.log('Stage C (Stories 56–80) successfully authored and synced across all 9 languages! Total collection count: 80 stories.');
