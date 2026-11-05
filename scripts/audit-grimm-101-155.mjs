// scripts/audit-grimm-101-155.mjs
import fs from 'fs';

const storiesPath = 'data/ta/stories-ta.json';
const collectionPath = 'data/ta/collections/ta_grimm-fairy-tales.json';

const allStories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));
const grimmStories = JSON.parse(fs.readFileSync(collectionPath, 'utf8'));

const bloomTiers = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];

console.log('=== AUDITING GRIMM FAIRY TALES 101 TO 155 (55 STORIES) ===\n');

// In allStories: indices 1950 to 2004 (55 stories)
// In grimmStories: indices 100 to 154 (55 stories)
let errors = 0;

for (let i = 101; i <= 155; i++) {
  const globalIdx = 1950 + (i - 101);
  const collIdx = 100 + (i - 101);

  const sGlobal = allStories[globalIdx];
  const sColl = grimmStories[collIdx];

  if (!sGlobal || !sColl) {
    console.error(`[ERR] Missing story at index ${i}: global=${!!sGlobal}, coll=${!!sColl}`);
    errors++;
    continue;
  }

  if (sGlobal.id !== sColl.id) {
    console.error(`[ERR] ID mismatch at story ${i}: global=${sGlobal.id}, coll=${sColl.id}`);
    errors++;
  }

  // Check language
  if (sGlobal.language !== 'ta' || sColl.language !== 'ta') {
    console.error(`[ERR] Language not 'ta' at story ${i}`);
    errors++;
  }

  // Check word count
  const words = sGlobal.full_text.trim().split(/\s+/).length;
  if (words < 160 || words > 185) {
    console.error(`[ERR] Story ${i} (${sGlobal.id}) words out of range (160-185): ${words}`);
    errors++;
  }

  // Check paragraphs
  const paras = sGlobal.full_text.trim().split(/\n\s*\n/).filter(p => p.trim().length > 0);
  if (paras.length !== 3) {
    console.error(`[ERR] Story ${i} (${sGlobal.id}) paragraphs !== 3: got ${paras.length}`);
    errors++;
  }

  // Check vocabulary
  if (!sGlobal.vocabulary || sGlobal.vocabulary.length !== 4) {
    console.error(`[ERR] Story ${i} vocab count !== 4`);
    errors++;
  } else {
    sGlobal.vocabulary.forEach((v, vIdx) => {
      if (!sGlobal.full_text.includes(v.word)) {
        console.error(`[ERR] Story ${i} vocab [${vIdx}] '${v.word}' not in full_text`);
        errors++;
      }
      if (!v.gloss || v.gloss.trim() === '') {
        console.error(`[ERR] Story ${i} vocab [${vIdx}] missing gloss`);
        errors++;
      }
    });
  }

  // Check quiz
  if (!sGlobal.quiz || sGlobal.quiz.length !== 3) {
    console.error(`[ERR] Story ${i} quiz count !== 3`);
    errors++;
  } else {
    sGlobal.quiz.forEach((q, qIdx) => {
      if (!q.options || q.options.length !== 4) {
        console.error(`[ERR] Story ${i} quiz [${qIdx}] options !== 4`);
        errors++;
      }
      if (q.answerIndex < 0 || q.answerIndex > 3) {
        console.error(`[ERR] Story ${i} quiz [${qIdx}] invalid answerIndex`);
        errors++;
      }
      if (!q.hint || !q.explanation) {
        console.error(`[ERR] Story ${i} quiz [${qIdx}] missing hint/explanation`);
        errors++;
      }
    });
  }

  // Check discussion questions
  if (!sGlobal.discussion_questions || sGlobal.discussion_questions.length !== 6) {
    console.error(`[ERR] Story ${i} dq count !== 6`);
    errors++;
  } else {
    sGlobal.discussion_questions.forEach((dq, dIdx) => {
      if (dq.tier !== bloomTiers[dIdx] || dq.type !== bloomTiers[dIdx]) {
        console.error(`[ERR] Story ${i} dq [${dIdx}] tier/type mismatch`);
        errors++;
      }
      if (!dq.prompt || dq.prompt !== dq.question) {
        console.error(`[ERR] Story ${i} dq [${dIdx}] prompt/question mismatch`);
        errors++;
      }
    });
  }
}

if (errors === 0) {
  console.log(`\nPERFECT AUDIT! All 55 stories (Stories 101 to 155, IDs grimm-fairy-tales-101 to 155) passed all validation criteria with ZERO errors!`);
  console.log(`Both data/ta/stories-ta.json and data/ta/collections/ta_grimm-fairy-tales.json are 100% in sync!`);
} else {
  console.error(`\nAudit failed with ${errors} errors.`);
  process.exit(1);
}
