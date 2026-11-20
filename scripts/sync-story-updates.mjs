import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const rootDir = process.cwd();
const storiesEnPath = path.join(rootDir, 'data', 'en', 'stories-en.json');
const storiesDir = path.join(rootDir, 'data', 'en', 'stories');

const modifiedFiles = [
  'science-stories_science-discovery_science-1-archimedes-golden-crown_en.json',
  'science-stories_science-discovery_science-4-galileo-swinging-chandelier_en.json',
  'witty-debates_historical_debate-1-anna-yale-because-sentence_en.json',
  'witty-debates_historical_debate-128-rajaji-mountbatten-independence-1947_en.json',
  'witty-debates_historical_debate-147-anna-american-press-federalism_en.json',
  'witty-debates_historical_debate-43-ambedkar-hindu-code-bill-resignation_en.json',
  'witty-debates_historical_debate-47-ambedkar-rbi-problem-of-the-rupee_en.json',
  'witty-debates_historical_debate-49-ambedkar-article-370-refusal_en.json',
  'witty-debates_historical_debate-63-lincoln-two-faced-retort_en.json',
  'witty-debates_historical_debate-73-churchill-shaw-opening-night-tickets_en.json',
  'witty-debates_historical_debate-74-churchill-lady-astor-poisoned-coffee_en.json',
  'witty-debates_historical_debate-91-patel-integration-565-princely-states_en.json',
  'witty-debates_historical_debate-98-mlk-i-have-a-dream-1963_en.json'
];

console.log('Syncing modified stories into data/en/stories-en.json...');
const allStories = JSON.parse(fs.readFileSync(storiesEnPath, 'utf8'));

let updatedCount = 0;
for (const file of modifiedFiles) {
  const filePath = path.join(storiesDir, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }

  const updatedStory = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const idx = allStories.findIndex(s => s.id === updatedStory.id || s.slug === updatedStory.slug);
  if (idx !== -1) {
    allStories[idx] = { ...allStories[idx], ...updatedStory };
    updatedCount++;
    console.log(`[SYNCED] ${updatedStory.slug} (${updatedStory.title})`);
  } else {
    console.warn(`[NOT FOUND IN stories-en.json] ${updatedStory.slug}`);
  }
}

fs.writeFileSync(storiesEnPath, JSON.stringify(allStories, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} stories in ${storiesEnPath}.`);

console.log('\nRunning partition-stories.mjs to update collections...');
let res = spawnSync('node', ['scripts/partition-stories.mjs'], { stdio: 'inherit' });
if (res.status !== 0) {
  console.error('Error running partition-stories.mjs');
  process.exit(1);
}

console.log('\nRunning generate-sitemaps.mjs...');
res = spawnSync('node', ['scripts/generate-sitemaps.mjs'], { stdio: 'inherit' });
if (res.status !== 0) {
  console.error('Error running generate-sitemaps.mjs');
  process.exit(1);
}

console.log('\n=== ALL STORIES AND SITEMAPS SYNCED SUCCESSFULLY ===');
