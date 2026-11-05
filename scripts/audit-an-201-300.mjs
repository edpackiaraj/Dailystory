// scripts/audit-an-201-300.mjs
// Exhaustive Master Verification for Arabian Nights Stories 201 to 300 (100 stories)

import fs from 'fs';
import path from 'path';

const STORIES_TA_PATH = path.resolve('data/ta/stories-ta.json');
const STORIES_EN_PATH = path.resolve('data/en/stories-en.json');
const PARTITION_TA_PATH = path.resolve('data/ta/collections/ta_arabian-nights.json');

console.log("=== STARTING EXHAUSTIVE MASTER AUDIT FOR ARABIAN NIGHTS STORIES 201 TO 300 ===");

const rawTa = fs.readFileSync(STORIES_TA_PATH, 'utf8');
const allTaStories = JSON.parse(rawTa);

const rawEn = fs.readFileSync(STORIES_EN_PATH, 'utf8');
const allEnStories = JSON.parse(rawEn);

const rawPartition = fs.readFileSync(PARTITION_TA_PATH, 'utf8');
const partitionStories = JSON.parse(rawPartition);

const anEnStories = allEnStories.filter(s => s.id.startsWith('arabian-nights-'));
const anTaStories = allTaStories.filter(s => s.id.startsWith('arabian-nights-'));

console.log(`Total Arabian Nights in EN: ${anEnStories.length}`);
console.log(`Total Arabian Nights in TA: ${anTaStories.length}`);
console.log(`Total in Partition file: ${partitionStories.length}`);

if (anEnStories.length < 300) {
  throw new Error(`Insufficient EN stories: expected >= 300, got ${anEnStories.length}`);
}

// Slice stories 201 to 300 (indices 200 to 299)
const targetEnStories = anEnStories.slice(200, 300);
const targetIds = targetEnStories.map(s => s.id);

console.log(`Targeting 100 stories from: ${targetIds[0]} to ${targetIds[99]}`);

let errors = [];
let auditedCount = 0;

const BLOOM_TIERS = ["remembering", "understanding", "applying", "analyzing", "evaluating", "creating"];

targetIds.forEach((id, storyIndex) => {
  const storyNumber = 201 + storyIndex;
  const story = allTaStories.find(s => s.id === id);
  const partStory = partitionStories.find(s => s.id === id);

  if (!story) {
    errors.push(`[Story ${storyNumber}] ID ${id} not found in stories-ta.json`);
    return;
  }
  if (!partStory) {
    errors.push(`[Story ${storyNumber}] ID ${id} not found in partition file ta_arabian-nights.json`);
    return;
  }

  auditedCount++;

  // 1. Basic Fields
  if (!story.title || typeof story.title !== 'string' || story.title.trim().length < 5) {
    errors.push(`[Story ${storyNumber}] Empty or invalid title`);
  }
  if (!story.summary || typeof story.summary !== 'string' || story.summary.trim().length < 50) {
    errors.push(`[Story ${storyNumber}] Empty or too short summary`);
  }
  if (!story.moral || typeof story.moral !== 'string' || story.moral.trim().length < 15) {
    errors.push(`[Story ${storyNumber}] Empty or too short moral`);
  }
  if (!story.full_text || typeof story.full_text !== 'string' || story.full_text.trim().length < 200) {
    errors.push(`[Story ${storyNumber}] Empty or too short full_text`);
  }

  // Check for untranslated english remnants in title or moral
  if (/^[A-Za-z\s,.'"-]+$/.test(story.title)) {
    errors.push(`[Story ${storyNumber}] Title appears to be untranslated English: "${story.title}"`);
  }
  if (/^[A-Za-z\s,.'"-]+$/.test(story.moral)) {
    errors.push(`[Story ${storyNumber}] Moral appears to be untranslated English: "${story.moral}"`);
  }

  // 2. Vocabulary (exactly 4, all verbatim in full_text)
  if (!Array.isArray(story.vocabulary) || story.vocabulary.length !== 4) {
    errors.push(`[Story ${storyNumber}] Expected exactly 4 vocab items, got ${story.vocabulary ? story.vocabulary.length : 0}`);
  } else {
    story.vocabulary.forEach((v, vi) => {
      if (!v.word || !v.meaning || !v.gloss) {
        errors.push(`[Story ${storyNumber}] Vocab #${vi+1} incomplete: ${JSON.stringify(v)}`);
      } else {
        if (!story.full_text.includes(v.word)) {
          errors.push(`[Story ${storyNumber}] Vocab #${vi+1} "${v.word}" NOT found verbatim in full_text!`);
        }
      }
    });
  }

  // 3. Quizzes (exactly 3, options[answerIndex] === answer)
  if (!Array.isArray(story.quiz) || story.quiz.length !== 3) {
    errors.push(`[Story ${storyNumber}] Expected exactly 3 quiz questions, got ${story.quiz ? story.quiz.length : 0}`);
  } else {
    story.quiz.forEach((q, qi) => {
      if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || !q.answer || q.answerIndex === undefined || !q.hint || !q.explanation) {
        errors.push(`[Story ${storyNumber}] Quiz #${qi+1} missing required fields`);
      } else {
        if (q.options[q.answerIndex] !== q.answer) {
          errors.push(`[Story ${storyNumber}] Quiz #${qi+1} answerIndex mismatch: answer="${q.answer}" !== options[${q.answerIndex}]="${q.options[q.answerIndex]}"`);
        }
      }
    });
  }

  // 4. Discussion Questions (Bloom's Taxonomy, 6 tiers in order)
  if (!Array.isArray(story.discussion_questions) || story.discussion_questions.length !== 6) {
    errors.push(`[Story ${storyNumber}] Expected exactly 6 discussion questions, got ${story.discussion_questions ? story.discussion_questions.length : 0}`);
  } else {
    story.discussion_questions.forEach((dq, di) => {
      const expectedTier = BLOOM_TIERS[di];
      if (dq.tier !== expectedTier || dq.type !== expectedTier) {
        errors.push(`[Story ${storyNumber}] DQ #${di+1} tier mismatch: expected "${expectedTier}", got tier="${dq.tier}", type="${dq.type}"`);
      }
      if (!dq.prompt || !dq.question || dq.prompt !== dq.question) {
        errors.push(`[Story ${storyNumber}] DQ #${di+1} prompt/question mismatch: prompt="${dq.prompt}" vs question="${dq.question}"`);
      }
    });
  }

  // 5. Check partition match
  if (partStory.title !== story.title || partStory.full_text !== story.full_text) {
    errors.push(`[Story ${storyNumber}] Partition mismatch with stories-ta.json`);
  }
});

console.log("--------------------------------------------------");
console.log(`Audited Stories Count: ${auditedCount} / 100`);
console.log(`Total Errors Detected: ${errors.length}`);

if (errors.length > 0) {
  console.error("FAILED with the following errors:");
  errors.forEach(e => console.error("  - " + e));
  process.exit(1);
} else {
  console.log("SUCCESS! All 100 stories (Stories 201 to 300) passed exhaustive audit with 0 errors!");
}
