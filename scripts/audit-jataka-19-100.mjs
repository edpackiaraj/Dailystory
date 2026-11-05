import fs from 'fs';
import path from 'path';

const MASTER_PATH = path.resolve('data/ta/stories-ta.json');
const COLLECTION_PATH = path.resolve('data/ta/collections/ta_jataka-tales.json');

const masterStories = JSON.parse(fs.readFileSync(MASTER_PATH, 'utf8'));
const collectionStories = JSON.parse(fs.readFileSync(COLLECTION_PATH, 'utf8'));

const BLOOM_TIERS = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];
let totalErrors = 0;

function auditStory(story, locationName, storyNumber) {
  let errors = [];

  if (!story) {
    errors.push(`Story is missing/null`);
    return errors;
  }

  // Basic metadata
  if (story.language !== 'ta') {
    errors.push(`language is "${story.language}", expected "ta"`);
  }
  if (!story.title || !/[\u0B80-\u0BFF]/.test(story.title)) {
    errors.push(`title is missing or not in Tamil: "${story.title}"`);
  }
  if (!story.summary || !/[\u0B80-\u0BFF]/.test(story.summary) || story.summary.length < 40) {
    errors.push(`summary is missing, too short, or not in Tamil`);
  }
  if (!story.moral || !/[\u0B80-\u0BFF]/.test(story.moral) || story.moral.length < 20) {
    errors.push(`moral is missing, too short, or not in Tamil`);
  }
  if (!story.full_text || !/[\u0B80-\u0BFF]/.test(story.full_text) || story.full_text.length < 300) {
    errors.push(`full_text is missing, too short, or not in Tamil`);
  }

  // English boilerplate check
  if (/In ancient times|In that life, he appeared as/i.test(story.full_text)) {
    errors.push(`full_text contains English boilerplate text`);
  }

  // Vocabulary
  if (!story.vocabulary || story.vocabulary.length !== 4) {
    errors.push(`vocabulary count is ${story.vocabulary?.length}, expected 4`);
  } else {
    story.vocabulary.forEach((v, vIdx) => {
      if (!v.word || !v.meaning || !v.gloss) {
        errors.push(`vocab[${vIdx}] missing word, meaning, or gloss`);
      }
      if (v.word && !story.full_text.includes(v.word)) {
        errors.push(`vocab[${vIdx}] "${v.word}" not found verbatim in full_text`);
      }
    });
  }

  // Quiz
  if (!story.quiz || story.quiz.length !== 3) {
    errors.push(`quiz count is ${story.quiz?.length}, expected 3`);
  } else {
    story.quiz.forEach((q, qIdx) => {
      if (!q.question || !/[\u0B80-\u0BFF]/.test(q.question)) {
        errors.push(`quiz[${qIdx}] question missing or not Tamil`);
      }
      if (!q.options || q.options.length !== 4) {
        errors.push(`quiz[${qIdx}] options count is ${q.options?.length}, expected 4`);
      } else {
        q.options.forEach((opt, oIdx) => {
          if (!opt || !/[\u0B80-\u0BFF]/.test(opt)) {
            errors.push(`quiz[${qIdx}] option[${oIdx}] missing or not Tamil`);
          }
        });
      }
      if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) {
        errors.push(`quiz[${qIdx}] answerIndex invalid: ${q.answerIndex}`);
      }
      if (!q.hint || !/[\u0B80-\u0BFF]/.test(q.hint)) {
        errors.push(`quiz[${qIdx}] hint missing or not Tamil`);
      }
      if (!q.explanation || !/[\u0B80-\u0BFF]/.test(q.explanation)) {
        errors.push(`quiz[${qIdx}] explanation missing or not Tamil`);
      }
    });
  }

  // Discussion questions
  if (!story.discussion_questions || story.discussion_questions.length !== 6) {
    errors.push(`discussion_questions count is ${story.discussion_questions?.length}, expected 6`);
  } else {
    story.discussion_questions.forEach((dq, dqIdx) => {
      const expectedTier = BLOOM_TIERS[dqIdx];
      if (dq.tier !== expectedTier) {
        errors.push(`DQ[${dqIdx}] tier is "${dq.tier}", expected "${expectedTier}"`);
      }
      if (dq.type !== expectedTier) {
        errors.push(`DQ[${dqIdx}] type is "${dq.type}", expected "${expectedTier}"`);
      }
      if (!dq.prompt || !/[\u0B80-\u0BFF]/.test(dq.prompt)) {
        errors.push(`DQ[${dqIdx}] prompt missing or not Tamil`);
      }
      if (!dq.question || !/[\u0B80-\u0BFF]/.test(dq.question)) {
        errors.push(`DQ[${dqIdx}] question missing or not Tamil`);
      }
      if (dq.prompt !== dq.question) {
        errors.push(`DQ[${dqIdx}] prompt and question do not match exactly`);
      }
    });
  }

  return errors;
}

console.log('=== AUDITING JATAKA TALES 19 TO 100 IN MASTER (data/ta/stories-ta.json) ===');
for (let i = 1210; i <= 1291; i++) {
  const storyNumber = i - 1210 + 19;
  const story = masterStories[i];
  const errs = auditStory(story, 'master', storyNumber);
  if (errs.length > 0) {
    console.error(`[ERROR] Master Index ${i} (Story ${storyNumber}, slug: ${story?.slug}):`);
    errs.forEach(e => console.error(`  - ${e}`));
    totalErrors += errs.length;
  }
}

console.log('\n=== AUDITING JATAKA TALES 19 TO 100 IN COLLECTION (ta_jataka-tales.json) ===');
// Stories 19 to 100 are at collection indices 18 to 99
for (let cIdx = 18; cIdx <= 99; cIdx++) {
  const storyNumber = cIdx + 1;
  const story = collectionStories[cIdx];
  const errs = auditStory(story, 'collection', storyNumber);
  if (errs.length > 0) {
    console.error(`[ERROR] Collection Index ${cIdx} (Story ${storyNumber}, slug: ${story?.slug}):`);
    errs.forEach(e => console.error(`  - ${e}`));
    totalErrors += errs.length;
  }
}

console.log('\n========================================');
if (totalErrors === 0) {
  console.log('AUDIT PASSED! All 82 stories (Stories 19 to 100, indices 1210 to 1291) in both master and collection are 100% valid with 0 errors.');
} else {
  console.error(`AUDIT FAILED! Found ${totalErrors} errors across master and collection files.`);
  process.exit(1);
}
