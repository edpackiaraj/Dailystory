import fs from 'fs';
import path from 'path';
import { enrichedDebatesPart1 } from './enrichment-data-1.mjs';
import { enrichedDebatesPart2 } from './enrichment-data-2.mjs';
import { enrichedDebatesPart3 } from './enrichment-data-3.mjs';
import { enrichedDebatesPart4 } from './enrichment-data-4.mjs';

const allEnriched = {
  ...enrichedDebatesPart1,
  ...enrichedDebatesPart2,
  ...enrichedDebatesPart3,
  ...enrichedDebatesPart4
};

console.log(`Loaded ${Object.keys(allEnriched).length} enriched stories.`);

// 1. Load public/data/collections/ta_witty-debates.json
const pubPath = path.resolve('public/data/collections/ta_witty-debates.json');
const debates = JSON.parse(fs.readFileSync(pubPath, 'utf8'));

let updatedCount = 0;

debates.forEach((d, idx) => {
  // Always ensure collection image
  d.image = '/images/stories/witty-debates.webp';
  d.collection = 'witty-debates';

  const enriched = allEnriched[d.id];
  if (enriched) {
    d.title = enriched.title;
    d.summary = enriched.summary;
    d.full_text = enriched.full_text;
    d.content = enriched.full_text;
    if (enriched.moral) d.moral = enriched.moral;
    if (enriched.source_book) d.source_book = enriched.source_book;
    if (enriched.source_author) d.source_author = enriched.source_author;
    if (enriched.source_year) d.source_year = enriched.source_year;
    if (enriched.source_chapter) d.source_chapter = enriched.source_chapter;
    if (enriched.authenticity_note) d.authenticity_note = enriched.authenticity_note;

    // Recalculate word count and reading time
    const words = enriched.full_text.trim().split(/\s+/).length;
    d.word_count = words;
    d.reading_time = `${Math.max(2, Math.ceil(words / 130))} min`;

    updatedCount++;
  }
});

console.log(`Updated ${updatedCount} stories in public/data/collections/ta_witty-debates.json`);

// Save back to public/data/collections/ta_witty-debates.json
fs.writeFileSync(pubPath, JSON.stringify(debates, null, 2), 'utf8');

// 2. Sync to data/ta/collections/ta_witty-debates.json if exists
const dataColPath = path.resolve('data/ta/collections/ta_witty-debates.json');
if (fs.existsSync(dataColPath)) {
  fs.writeFileSync(dataColPath, JSON.stringify(debates, null, 2), 'utf8');
  console.log(`Synced to ${dataColPath}`);
}

// 3. Sync to data/ta/stories/ individual files
debates.forEach(d => {
  const storyFile = path.resolve(`data/ta/stories/${d.slug}_ta.json`);
  if (fs.existsSync(storyFile)) {
    fs.writeFileSync(storyFile, JSON.stringify(d, null, 2), 'utf8');
  }
});

// 4. Sync to data/ta/stories-ta.json
const allStoriesPath = path.resolve('data/ta/stories-ta.json');
if (fs.existsSync(allStoriesPath)) {
  console.log('Syncing into data/ta/stories-ta.json...');
  const allTaStories = JSON.parse(fs.readFileSync(allStoriesPath, 'utf8'));
  const debateMap = new Map(debates.map(d => [d.id, d]));

  let allUpdated = 0;
  allTaStories.forEach(s => {
    if (debateMap.has(s.id)) {
      const up = debateMap.get(s.id);
      Object.assign(s, up);
      allUpdated++;
    }
  });

  fs.writeFileSync(allStoriesPath, JSON.stringify(allTaStories, null, 2), 'utf8');
  console.log(`Updated ${allUpdated} stories in data/ta/stories-ta.json`);
}

// Stats verification
const lens = debates.map(d => (d.full_text || '').length);
const minLen = Math.min(...lens);
const maxLen = Math.max(...lens);
const avgLen = Math.round(lens.reduce((a, b) => a + b, 0) / lens.length);
const under1000 = debates.filter(d => (d.full_text || '').length < 1000).length;

console.log('=== VERIFICATION STATS ===');
console.log(`Total debates: ${debates.length}`);
console.log(`Min length: ${minLen} chars`);
console.log(`Avg length: ${avgLen} chars`);
console.log(`Max length: ${maxLen} chars`);
console.log(`Stories under 1000 chars: ${under1000}`);
