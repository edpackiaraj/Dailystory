// scripts/apply-all-debates.mjs
import fs from 'fs';
import path from 'path';

import { part1Stories } from './data-debates-part1.mjs';
import { part1bStories } from './data-debates-part1b.mjs';
import { part2Stories } from './data-debates-part2.mjs';
import { part2bStories } from './data-debates-part2b.mjs';
import { part3Stories } from './data-debates-part3.mjs';
import { part3bStories } from './data-debates-part3b.mjs';

const all93 = [
  ...part1Stories,
  ...part1bStories,
  ...part2Stories,
  ...part2bStories,
  ...part3Stories,
  ...part3bStories
];

console.log(`Total new/replacement stories to apply: ${all93.length}`);

// Build lookup by idx
const byIdx = new Map();
all93.forEach(s => byIdx.set(s.idx, s));

// Collect redirects
const redirectsToAdd = [];
all93.forEach(s => {
  if (s.oldSlug && s.slug && s.oldSlug !== s.slug) {
    redirectsToAdd.push({
      from: s.oldSlug,
      to: s.slug
    });
  }
});

// Helper to update a collection list
function updateDebatesList(list, lang) {
  let count = 0;
  list.forEach((story, index) => {
    if (story.collection !== 'witty-debates') return;
    count++;
    const patch = byIdx.get(count);
    
    // Ensure audience/age_group is teens/adults for all debates
    if (lang === 'ta') {
      story.age_group = 'இளைஞர்கள் & பெரியவர்கள் (13+)';
      story.culture_region = 'வரலாற்றுப் பதிவுகள் & உலக அரசியல்';
    } else {
      story.age_group = 'Teens & Adults (13+)';
      story.culture_region = 'Historical Chronicles & Global Statecraft';
    }
    story.image = '/images/stories/witty-debates.webp';
    story.collection = 'witty-debates';
    story.genre = 'Witty Debates';

    if (patch) {
      story.id = patch.id;
      story.slug = patch.slug;
      if (lang === 'ta') {
        story.title = patch.title_ta;
        story.summary = patch.summary_ta;
        story.content = patch.content_ta;
        story.full_text = patch.content_ta;
        story.moral = patch.moral_ta;
        story.source = patch.source_ta;
        story.credit = patch.source_ta;
        story.word_count = patch.content_ta.split(/\s+/).length;
        story.reading_time = Math.max(3, Math.ceil(story.word_count / 150));
        story.listen_time = Math.max(4, Math.ceil(story.word_count / 130));
      } else {
        story.title = patch.title_en;
        story.summary = patch.summary_en;
        story.content = patch.content_en;
        story.full_text = patch.content_en;
        story.moral = patch.moral_en;
        story.source = patch.source_en;
        story.credit = patch.source_en;
        story.word_count = patch.content_en.split(/\s+/).length;
        story.reading_time = Math.max(3, Math.ceil(story.word_count / 180));
        story.listen_time = Math.max(4, Math.ceil(story.word_count / 150));
      }
    }
  });
  console.log(`Updated ${count} witty-debates in ${lang}`);
}

// 1. Update data/ta/stories-ta.json
const taFile = 'data/ta/stories-ta.json';
const taStories = JSON.parse(fs.readFileSync(taFile, 'utf8'));
updateDebatesList(taStories, 'ta');
fs.writeFileSync(taFile, JSON.stringify(taStories, null, 2), 'utf8');

// 2. Update data/en/stories-en.json
const enFile = 'data/en/stories-en.json';
const enStories = JSON.parse(fs.readFileSync(enFile, 'utf8'));
updateDebatesList(enStories, 'en');
fs.writeFileSync(enFile, JSON.stringify(enStories, null, 2), 'utf8');

// 3. Update public/data/collections/ta_witty-debates.json
const pubTaFile = 'public/data/collections/ta_witty-debates.json';
if (fs.existsSync(pubTaFile)) {
  const pubTa = JSON.parse(fs.readFileSync(pubTaFile, 'utf8'));
  const list = Array.isArray(pubTa) ? pubTa : pubTa.stories;
  updateDebatesList(list, 'ta');
  fs.writeFileSync(pubTaFile, JSON.stringify(pubTa, null, 2), 'utf8');
}

// 4. Update public/data/collections/en_witty-debates.json
const pubEnFile = 'public/data/collections/en_witty-debates.json';
if (fs.existsSync(pubEnFile)) {
  const pubEn = JSON.parse(fs.readFileSync(pubEnFile, 'utf8'));
  const list = Array.isArray(pubEn) ? pubEn : pubEn.stories;
  updateDebatesList(list, 'en');
  fs.writeFileSync(pubEnFile, JSON.stringify(pubEn, null, 2), 'utf8');
}

// 5. Update public/_redirects with 301 redirects for changed slugs
const redirectsPath = 'public/_redirects';
let redirectsContent = fs.readFileSync(redirectsPath, 'utf8');

let newRedirectsAdded = 0;
redirectsToAdd.forEach(r => {
  const rulePattern = new RegExp(`/:lang/witty-debates/${r.from}/?`);
  if (!rulePattern.test(redirectsContent)) {
    redirectsContent += `\n/:lang/witty-debates/${r.from}/ /:lang/witty-debates/${r.to}/ 301`;
    redirectsContent += `\n/:lang/witty-debates/${r.from} /:lang/witty-debates/${r.to}/ 301`;
    newRedirectsAdded += 2;
  }
});

fs.writeFileSync(redirectsPath, redirectsContent, 'utf8');
console.log(`Successfully added ${newRedirectsAdded} new 301 redirect rules in ${redirectsPath}`);
console.log('All 225 witty debates in Tamil and English successfully updated!');
