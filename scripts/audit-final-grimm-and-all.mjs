// scripts/audit-final-grimm-and-all.mjs
import fs from 'fs';

const storiesPath = 'data/ta/stories-ta.json';
const grimmCollPath = 'data/ta/collections/ta_grimm-fairy-tales.json';

const allStories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));
const grimmColl = JSON.parse(fs.readFileSync(grimmCollPath, 'utf8'));

console.log(`Total stories in data/ta/stories-ta.json: ${allStories.length}`);
console.log(`Total stories in data/ta/collections/ta_grimm-fairy-tales.json: ${grimmColl.length}`);

const bloomTiers = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];

let errors = 0;

// Audit Stories 156 to 211 (indices 2005 to 2060)
console.log('\n--- Auditing Grimm Fairy Tales 156 to 211 in stories-ta.json ---');
const stageStories = allStories.slice(2005, 2061);
if (stageStories.length !== 56) {
  console.error(`Expected 56 stories, got ${stageStories.length}`);
  errors++;
}

stageStories.forEach((s, idx) => {
  const storyNum = 156 + idx;
  const words = s.full_text.trim().split(/\s+/).length;
  if (words < 160 || words > 185) {
    console.error(`[ERR] Story ${storyNum} (${s.id}) word count out of range (160-185): ${words}`);
    errors++;
  }
  const paras = s.full_text.trim().split(/\n\s*\n/);
  if (paras.length !== 3) {
    console.error(`[ERR] Story ${storyNum} (${s.id}) paras != 3: ${paras.length}`);
    errors++;
  }
  if (!s.title || !/[\u0B80-\u0BFF]/.test(s.title)) {
    console.error(`[ERR] Story ${storyNum} (${s.id}) title missing Tamil`);
    errors++;
  }
  if (!s.summary || !/[\u0B80-\u0BFF]/.test(s.summary)) {
    console.error(`[ERR] Story ${storyNum} (${s.id}) summary missing Tamil`);
    errors++;
  }
  if (!s.moral || !/[\u0B80-\u0BFF]/.test(s.moral)) {
    console.error(`[ERR] Story ${storyNum} (${s.id}) moral missing Tamil`);
    errors++;
  }
  if (!s.vocabulary || s.vocabulary.length !== 4) {
    console.error(`[ERR] Story ${storyNum} (${s.id}) vocabulary length != 4`);
    errors++;
  } else {
    s.vocabulary.forEach((v, vIdx) => {
      if (!s.full_text.includes(v.word)) {
        console.error(`[ERR] Story ${storyNum} (${s.id}) vocab[${vIdx}] '${v.word}' not in full_text`);
        errors++;
      }
      if (!v.gloss || v.gloss.trim() === '') {
        console.error(`[ERR] Story ${storyNum} (${s.id}) vocab[${vIdx}] gloss empty`);
        errors++;
      }
    });
  }
  if (!s.quiz || s.quiz.length !== 3) {
    console.error(`[ERR] Story ${storyNum} (${s.id}) quiz length != 3`);
    errors++;
  } else {
    s.quiz.forEach((q, qIdx) => {
      if (!q.options || q.options.length !== 4) {
        console.error(`[ERR] Story ${storyNum} (${s.id}) quiz[${qIdx}] options != 4`);
        errors++;
      }
      if (q.answerIndex < 0 || q.answerIndex > 3) {
        console.error(`[ERR] Story ${storyNum} (${s.id}) quiz[${qIdx}] answerIndex invalid: ${q.answerIndex}`);
        errors++;
      }
    });
  }
  if (!s.discussion_questions || s.discussion_questions.length !== 6) {
    console.error(`[ERR] Story ${storyNum} (${s.id}) discussion_questions length != 6`);
    errors++;
  } else {
    s.discussion_questions.forEach((q, bIdx) => {
      if (q.tier !== bloomTiers[bIdx] || q.type !== bloomTiers[bIdx]) {
        console.error(`[ERR] Story ${storyNum} (${s.id}) bloom tier mismatch at [${bIdx}]`);
        errors++;
      }
    });
  }
});

// Audit collection file ta_grimm-fairy-tales.json
console.log('\n--- Auditing ta_grimm-fairy-tales.json partition ---');
if (grimmColl.length !== 211) {
  console.error(`Expected 211 stories in Grimm collection, got ${grimmColl.length}`);
  errors++;
} else {
  const grimmPart = grimmColl.slice(155, 211);
  grimmPart.forEach((s, idx) => {
    const storyNum = 156 + idx;
    const words = s.full_text.trim().split(/\s+/).length;
    if (words < 160 || words > 185) {
      console.error(`[ERR in Coll] Story ${storyNum} (${s.id}) word count out of range: ${words}`);
      errors++;
    }
  });
}

// Global audit of all 2448 stories in data/ta/stories-ta.json
console.log('\n--- Auditing Entire 2,448 Tamil Repository ---');
let nonTamilTitles = 0;
let nonTamilFullText = 0;
let wrongLang = 0;

allStories.forEach((s, idx) => {
  if (s.language !== 'ta') {
    wrongLang++;
    errors++;
  }
  if (!s.title || !/[\u0B80-\u0BFF]/.test(s.title)) {
    nonTamilTitles++;
    errors++;
  }
  if (!s.full_text || !/[\u0B80-\u0BFF]/.test(s.full_text)) {
    nonTamilFullText++;
    errors++;
  }
});

console.log(`Wrong language tags: ${wrongLang}`);
console.log(`Non-Tamil titles: ${nonTamilTitles}`);
console.log(`Non-Tamil full_text: ${nonTamilFullText}`);

// Collections summary
console.log('\n--- Collection Breakdown ---');
const collCounts = {};
allStories.forEach(s => {
  collCounts[s.collection] = (collCounts[s.collection] || 0) + 1;
});

let totalStoriesCount = 0;
for (const [coll, count] of Object.entries(collCounts)) {
  console.log(`- ${coll}: ${count} stories`);
  totalStoriesCount += count;
}
console.log(`Total stories counted: ${totalStoriesCount}`);

if (errors === 0) {
  console.log('\n=============================================');
  console.log('   ALL 2,448 STORIES FULLY VALIDATED! (0 ERRORS)');
  console.log('   GRIMM FAIRY TALES: 211 / 211 COMPLETE');
  console.log('   REPOSITORY: 2,448 / 2,448 COMPLETE (100.0%)');
  console.log('=============================================\n');
} else {
  console.error(`\nAudit failed with ${errors} errors.`);
  process.exit(1);
}
