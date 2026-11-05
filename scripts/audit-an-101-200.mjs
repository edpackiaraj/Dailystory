// scripts/audit-an-101-200.mjs
// Exhaustive audit for Arabian Nights stories 101 to 200 in Tamil.

import fs from 'fs';
import path from 'path';

const STORIES_PATH = path.resolve('data/ta/stories-ta.json');
const PARTITION_PATH = path.resolve('data/ta/collections/ta_arabian-nights.json');

const rawStories = fs.readFileSync(STORIES_PATH, 'utf8');
const allStories = JSON.parse(rawStories);

const rawPartition = fs.readFileSync(PARTITION_PATH, 'utf8');
const partitionStories = JSON.parse(rawPartition);

const anStories = allStories.filter(s => s.id && s.id.startsWith('arabian-nights'));
console.log(`Total Arabian Nights stories found in stories-ta.json: ${anStories.length}`);

// Slice stories 101 to 200 (indices 100 to 199)
const targetStories = anStories.slice(100, 200);

if (targetStories.length !== 100) {
  throw new Error(`Expected exactly 100 stories (101 to 200), but found ${targetStories.length}`);
}

const expectedTiers = ["remembering", "understanding", "applying", "analyzing", "evaluating", "creating"];
const errors = [];

targetStories.forEach((s, idx) => {
  const storyNum = 101 + idx;
  const tag = `[Story ${storyNum}: ${s.id}]`;

  // 1. Basic fields
  if (!s.title || !s.title.trim()) errors.push(`${tag} Missing title`);
  if (!s.summary || !s.summary.trim()) errors.push(`${tag} Missing summary`);
  if (!s.moral || !s.moral.trim()) errors.push(`${tag} Missing moral`);
  if (!s.full_text || !s.full_text.trim()) errors.push(`${tag} Missing full_text`);

  // Tamil script check
  const hasTamil = /[\u0B80-\u0BFF]/.test(s.full_text || '');
  if (!hasTamil) errors.push(`${tag} full_text does not contain Tamil characters`);

  // Word count check
  const wordCount = (s.full_text || '').split(/\s+/).filter(Boolean).length;
  if (wordCount < 120) {
    errors.push(`${tag} Story seems too short (${wordCount} words)`);
  }

  // 2. Vocabulary checks
  if (!Array.isArray(s.vocabulary) || s.vocabulary.length !== 4) {
    errors.push(`${tag} Vocabulary length must be 4, found: ${s.vocabulary ? s.vocabulary.length : 0}`);
  } else {
    s.vocabulary.forEach((v, vIdx) => {
      if (!v.word || !v.meaning || !v.gloss) {
        errors.push(`${tag} Vocab ${vIdx + 1} missing required fields`);
      } else if (!s.full_text.includes(v.word)) {
        errors.push(`${tag} Vocab word "${v.word}" not found verbatim in full_text`);
      }
    });
  }

  // 3. Quiz checks
  if (!Array.isArray(s.quiz) || s.quiz.length !== 3) {
    errors.push(`${tag} Quiz length must be 3, found: ${s.quiz ? s.quiz.length : 0}`);
  } else {
    s.quiz.forEach((q, qIdx) => {
      if (!q.question || !q.question.trim()) errors.push(`${tag} Quiz ${qIdx + 1} missing question`);
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        errors.push(`${tag} Quiz ${qIdx + 1} must have 4 options`);
      } else {
        if (q.options[q.answerIndex] !== q.answer) {
          errors.push(`${tag} Quiz ${qIdx + 1} answer mismatch: options[${q.answerIndex}] !== answer`);
        }
      }
      if (!q.hint || !q.hint.trim()) errors.push(`${tag} Quiz ${qIdx + 1} missing hint`);
      if (!q.explanation || !q.explanation.trim()) errors.push(`${tag} Quiz ${qIdx + 1} missing explanation`);
    });
  }

  // 4. Discussion questions (Bloom's Taxonomy) checks
  if (!Array.isArray(s.discussion_questions) || s.discussion_questions.length !== 6) {
    errors.push(`${tag} Discussion questions length must be 6, found: ${s.discussion_questions ? s.discussion_questions.length : 0}`);
  } else {
    s.discussion_questions.forEach((dq, dqIdx) => {
      const expTier = expectedTiers[dqIdx];
      if (dq.tier !== expTier || dq.type !== expTier) {
        errors.push(`${tag} Discussion question ${dqIdx + 1} tier mismatch: expected ${expTier}, got tier=${dq.tier}, type=${dq.type}`);
      }
      if (!dq.prompt || !dq.prompt.trim()) {
        errors.push(`${tag} Discussion question ${dqIdx + 1} missing prompt`);
      }
      if (!dq.question || !dq.question.trim()) {
        errors.push(`${tag} Discussion question ${dqIdx + 1} missing question`);
      }
      if (dq.prompt !== dq.question) {
        errors.push(`${tag} Discussion question ${dqIdx + 1} prompt does not match question`);
      }
    });
  }

  // 5. Partition check
  const pStory = partitionStories.find(p => p.id === s.id);
  if (!pStory) {
    errors.push(`${tag} Not found in partition file ta_arabian-nights.json`);
  } else if (pStory.title !== s.title) {
    errors.push(`${tag} Title mismatch between stories-ta.json and partition file`);
  }
});

console.log(`\n=== AUDIT RESULTS FOR ARABIAN NIGHTS STORIES 101 TO 200 ===`);
console.log(`Audited stories count: ${targetStories.length}`);
console.log(`First story: ${targetStories[0].id} (Story 101: ${targetStories[0].title})`);
console.log(`Last story: ${targetStories[99].id} (Story 200: ${targetStories[99].title})`);

if (errors.length === 0) {
  console.log(`\n🎉 PERFECT SCORE! 0 ERRORS DETECTED! ALL 100 STORIES FULLY COMPLIANT!`);
} else {
  console.error(`\n❌ FOUND ${errors.length} AUDIT ERRORS:`);
  errors.forEach(err => console.error(` - ${err}`));
  process.exit(1);
}
