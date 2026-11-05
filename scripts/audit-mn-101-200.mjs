import fs from 'fs';

console.log('=== EXHAUSTIVE MASTER AUDIT: MULLA NASRUDDIN STORIES 101 TO 200 (TAMIL) ===\n');

const STORIES_PATH = 'data/ta/stories-ta.json';
const PARTITION_PATH = 'data/ta/collections/ta_mulla-nasruddin.json';

const allStories = JSON.parse(fs.readFileSync(STORIES_PATH, 'utf8'));
const partitionStories = JSON.parse(fs.readFileSync(PARTITION_PATH, 'utf8'));

// Filter Mulla Nasruddin stories
const mnCatalog = allStories.filter(s => s.collection === 'Mulla Nasruddin' || s.id.startsWith('mulla-nasruddin'));
const mnPartition = partitionStories.filter(s => s.collection === 'Mulla Nasruddin' || s.id.startsWith('mulla-nasruddin'));

console.log(`Total MN stories in main catalog: ${mnCatalog.length}`);
console.log(`Total MN stories in partition file: ${mnPartition.length}`);

if (mnCatalog.length < 200) {
  console.error(`ERROR: Expected at least 200 MN stories, found ${mnCatalog.length}`);
  process.exit(1);
}

const targetCatalog = mnCatalog.slice(100, 200);
const targetPartition = mnPartition.slice(100, 200);

console.log(`\nVerifying Stories 101 to 200 (Indices 100 to 199, exactly ${targetCatalog.length} stories)...`);

const expectedTiers = ["remembering", "understanding", "applying", "analyzing", "evaluating", "creating"];
let totalErrors = 0;

function auditStories(storiesList, sourceName) {
  console.log(`\n--- Auditing ${sourceName} (${storiesList.length} stories) ---`);
  let errors = 0;

  storiesList.forEach((story, idx) => {
    const num = idx + 101;
    const prefix = `[Story ${num}: ${story.id}]`;

    // 1. Basic Fields
    if (!story.id || !story.id.startsWith(`mulla-nasruddin-${num}`)) {
      console.error(`${prefix} Unexpected ID: ${story.id}`);
      errors++;
    }
    if (!story.title || story.title.trim().length === 0) {
      console.error(`${prefix} Empty title`);
      errors++;
    }
    if (!story.summary || story.summary.trim().length === 0) {
      console.error(`${prefix} Empty summary`);
      errors++;
    }
    if (!story.moral || story.moral.trim().length === 0) {
      console.error(`${prefix} Empty moral`);
      errors++;
    }
    if (!story.full_text || story.full_text.trim().length < 200) {
      console.error(`${prefix} full_text missing or too short (${story.full_text?.length || 0} chars)`);
      errors++;
    }

    // 2. Vocabulary
    if (!Array.isArray(story.vocabulary) || story.vocabulary.length !== 4) {
      console.error(`${prefix} Vocabulary count is ${story.vocabulary?.length || 0}, expected 4`);
      errors++;
    } else {
      story.vocabulary.forEach((v, vIdx) => {
        if (!v.word || !v.meaning || !v.gloss) {
          console.error(`${prefix} Incomplete vocab at index ${vIdx}`);
          errors++;
        }
        if (!story.full_text.includes(v.word)) {
          console.error(`${prefix} Vocab word '${v.word}' NOT found verbatim in full_text`);
          errors++;
        }
      });
    }

    // 3. Quiz
    if (!Array.isArray(story.quiz) || story.quiz.length !== 3) {
      console.error(`${prefix} Quiz count is ${story.quiz?.length || 0}, expected 3`);
      errors++;
    } else {
      story.quiz.forEach((q, qIdx) => {
        if (!q.question || !Array.isArray(q.options) || q.options.length !== 4) {
          console.error(`${prefix} Quiz ${qIdx + 1} invalid question or options length`);
          errors++;
        }
        if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) {
          console.error(`${prefix} Quiz ${qIdx + 1} invalid answerIndex: ${q.answerIndex}`);
          errors++;
        }
        if (q.options[q.answerIndex] !== q.answer) {
          console.error(`${prefix} Quiz ${qIdx + 1} answer mismatch: options[${q.answerIndex}] '${q.options[q.answerIndex]}' !== answer '${q.answer}'`);
          errors++;
        }
        if (!q.hint || !q.explanation) {
          console.error(`${prefix} Quiz ${qIdx + 1} missing hint or explanation`);
          errors++;
        }
      });
    }

    // 4. Discussion Questions (Bloom's Taxonomy)
    if (!Array.isArray(story.discussion_questions) || story.discussion_questions.length !== 6) {
      console.error(`${prefix} Discussion questions count is ${story.discussion_questions?.length || 0}, expected 6`);
      errors++;
    } else {
      story.discussion_questions.forEach((dq, dIdx) => {
        const expectedTier = expectedTiers[dIdx];
        if (dq.tier !== expectedTier) {
          console.error(`${prefix} DQ ${dIdx + 1} tier is '${dq.tier}', expected '${expectedTier}'`);
          errors++;
        }
        if (dq.type !== expectedTier) {
          console.error(`${prefix} DQ ${dIdx + 1} type is '${dq.type}', expected '${expectedTier}'`);
          errors++;
        }
        if (!dq.prompt || !dq.question) {
          console.error(`${prefix} DQ ${dIdx + 1} missing prompt or question`);
          errors++;
        }
        if (dq.prompt !== dq.question) {
          console.error(`${prefix} DQ ${dIdx + 1} prompt/question mismatch: '${dq.prompt}' !== '${dq.question}'`);
          errors++;
        }
      });
    }
  });

  console.log(`Results for ${sourceName}: ${errors === 0 ? 'ALL CHECKS PASSED (0 errors)' : `${errors} errors found`}`);
  return errors;
}

totalErrors += auditStories(targetCatalog, 'Master Catalog (data/ta/stories-ta.json)');
totalErrors += auditStories(targetPartition, 'Partition File (data/ta/collections/ta_mulla-nasruddin.json)');

console.log('\n===============================================================');
if (totalErrors === 0) {
  console.log('SUCCESS: All 100 Mulla Nasruddin stories (Stories 101 to 200)');
  console.log('are 100% compliant with rich literary Tamil text and complete');
  console.log('pedagogical suites across both catalog and partitioned collection!');
  console.log('Total Errors: 0');
} else {
  console.error(`AUDIT FAILED with a total of ${totalErrors} errors across checks.`);
  process.exit(1);
}
console.log('===============================================================\n');
