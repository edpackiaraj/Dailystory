import fs from 'fs';

const storiesPath = 'data/ta/stories-ta.json';
const colPath = 'data/ta/collections/ta_jataka-tales.json';

const allStories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));
const colStories = JSON.parse(fs.readFileSync(colPath, 'utf8'));

console.log('=== MASTER AUDIT FOR JATAKA TALES 401 TO 547 ===\n');

const bloomTiers = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];

function auditStories(stories, startIdx, endIdx, label) {
  console.log(`--- Auditing ${label} (indices ${startIdx} to ${endIdx}, Stories 401 to 547) ---`);
  let errors = 0;
  let count = 0;

  for (let i = startIdx; i <= endIdx; i++) {
    count++;
    const s = stories[i];
    const storyNum = 401 + (i - startIdx);

    if (!s) {
      console.error(`Story ${storyNum} missing at index ${i}`);
      errors++;
      continue;
    }

    if (s.language !== 'ta') {
      console.error(`Story ${storyNum} language is not 'ta'`);
      errors++;
    }

    if (!s.title || s.title.trim() === '') {
      console.error(`Story ${storyNum} title missing`);
      errors++;
    }

    if (!s.summary || s.summary.trim() === '') {
      console.error(`Story ${storyNum} summary missing`);
      errors++;
    }

    if (!s.moral || s.moral.trim() === '') {
      console.error(`Story ${storyNum} moral missing`);
      errors++;
    }

    if (!s.full_text || s.full_text.trim() === '') {
      console.error(`Story ${storyNum} full_text missing`);
      errors++;
    }

    const words = s.full_text.trim().split(/\s+/).length;
    if (words < 160) {
      console.error(`Story ${storyNum} word count too low: ${words}`);
      errors++;
    }

    if (!s.vocabulary || s.vocabulary.length !== 4) {
      console.error(`Story ${storyNum} vocabulary must have 4 items, has ${s.vocabulary?.length}`);
      errors++;
    } else {
      s.vocabulary.forEach((v, vIdx) => {
        if (!v.word || !s.full_text.includes(v.word)) {
          console.error(`Story ${storyNum} vocab [${vIdx}] '${v.word}' not in full_text`);
          errors++;
        }
        if (!v.meaning || v.meaning.trim() === '') {
          console.error(`Story ${storyNum} vocab [${vIdx}] missing meaning`);
          errors++;
        }
        if (!v.gloss || v.gloss.trim() === '') {
          console.error(`Story ${storyNum} vocab [${vIdx}] missing gloss`);
          errors++;
        }
      });
    }

    if (!s.quiz || s.quiz.length !== 3) {
      console.error(`Story ${storyNum} quiz must have 3 items, has ${s.quiz?.length}`);
      errors++;
    } else {
      s.quiz.forEach((q, qIdx) => {
        if (!q.question || q.question.trim() === '') {
          console.error(`Story ${storyNum} quiz [${qIdx}] missing question`);
          errors++;
        }
        if (!q.options || q.options.length !== 4) {
          console.error(`Story ${storyNum} quiz [${qIdx}] must have 4 options`);
          errors++;
        }
        if (q.answerIndex < 0 || q.answerIndex > 3) {
          console.error(`Story ${storyNum} quiz [${qIdx}] invalid answerIndex: ${q.answerIndex}`);
          errors++;
        }
        if (!q.hint || q.hint.trim() === '') {
          console.error(`Story ${storyNum} quiz [${qIdx}] missing hint`);
          errors++;
        }
        if (!q.explanation || q.explanation.trim() === '') {
          console.error(`Story ${storyNum} quiz [${qIdx}] missing explanation`);
          errors++;
        }
      });
    }

    if (!s.discussion_questions || s.discussion_questions.length !== 6) {
      console.error(`Story ${storyNum} discussion_questions must have 6 items, has ${s.discussion_questions?.length}`);
      errors++;
    } else {
      s.discussion_questions.forEach((dq, dIdx) => {
        const expectedTier = bloomTiers[dIdx];
        if (dq.tier !== expectedTier || dq.type !== expectedTier) {
          console.error(`Story ${storyNum} dq [${dIdx}] tier/type mismatch: got tier '${dq.tier}', type '${dq.type}', expected '${expectedTier}'`);
          errors++;
        }
        if (!dq.prompt || dq.prompt.trim() === '' || dq.prompt !== dq.question) {
          console.error(`Story ${storyNum} dq [${dIdx}] prompt/question empty or mismatch`);
          errors++;
        }
      });
    }
  }

  if (errors === 0) {
    console.log(`[PASS] Audited ${count} stories in ${label} - 0 ERRORS!\n`);
  } else {
    console.error(`[FAIL] ${errors} errors found in ${label}!\n`);
  }

  return errors;
}

const err1 = auditStories(allStories, 1592, 1738, 'data/ta/stories-ta.json');
const err2 = auditStories(colStories, 400, 546, 'data/ta/collections/ta_jataka-tales.json');

if (err1 === 0 && err2 === 0) {
  console.log('=======================================');
  console.log('JATAKA TALES 401 TO 547 AUDIT PASSED!');
  console.log('All 147 stories (Jataka Tales 401 to 547) are 100% compliant with 0 errors in both master and collection files!');
  console.log('=======================================');
} else {
  process.exit(1);
}
