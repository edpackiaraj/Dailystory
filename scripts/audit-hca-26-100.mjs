import fs from "fs";

const taPath = "data/ta/stories-ta.json";
const collectionPath = "data/ta/collections/ta_hans-christian-andersen.json";

const stories = JSON.parse(fs.readFileSync(taPath, "utf8"));
const hcaStories = stories.filter(s => s.collection === "Hans Christian Andersen");

const partitioned = JSON.parse(fs.readFileSync(collectionPath, "utf8"));
const partHCA = partitioned.stories || partitioned;

console.log(`Total HCA stories in stories-ta.json: ${hcaStories.length}`);
console.log(`Checking HCA stories 26 to 100 (indices 25 to 99)...`);

const bloomTiers = ["remembering", "understanding", "applying", "analyzing", "evaluating", "creating"];
let errors = 0;

for (let i = 25; i <= 99; i++) {
  const story = hcaStories[i];
  const num = i + 1;
  if (!story) {
    console.error(`Story at index ${i} is missing!`);
    errors++;
    continue;
  }

  // Check required strings
  if (!story.title || story.title.length < 5) {
    console.error(`Story ${num} (${story.id}) invalid title`);
    errors++;
  }
  if (!story.summary || story.summary.length < 20) {
    console.error(`Story ${num} (${story.id}) invalid summary`);
    errors++;
  }
  if (!story.moral || story.moral.length < 10) {
    console.error(`Story ${num} (${story.id}) invalid moral`);
    errors++;
  }
  if (!story.full_text || story.full_text.length < 100) {
    console.error(`Story ${num} (${story.id}) invalid full_text`);
    errors++;
  }

  // Check vocabulary
  if (!story.vocabulary || story.vocabulary.length !== 4) {
    console.error(`Story ${num} (${story.id}) vocabulary count is ${story.vocabulary?.length}, expected 4`);
    errors++;
  } else {
    for (const v of story.vocabulary) {
      if (!v.word || !v.meaning || !v.gloss) {
        console.error(`Story ${num} (${story.id}) incomplete vocab: ${JSON.stringify(v)}`);
        errors++;
      }
      if (!story.full_text.includes(v.word)) {
        console.error(`Story ${num} (${story.id}) vocab word '${v.word}' not in full_text`);
        errors++;
      }
    }
  }

  // Check quiz
  if (!story.quiz || story.quiz.length !== 3) {
    console.error(`Story ${num} (${story.id}) quiz count is ${story.quiz?.length}, expected 3`);
    errors++;
  } else {
    for (const q of story.quiz) {
      if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || q.answerIndex === undefined || !q.answer || !q.hint || !q.explanation) {
        console.error(`Story ${num} (${story.id}) incomplete quiz`);
        errors++;
      }
      if (q.options[q.answerIndex] !== q.answer) {
        console.error(`Story ${num} (${story.id}) quiz answer mismatch`);
        errors++;
      }
    }
  }

  // Check discussion questions
  if (!story.discussion_questions || story.discussion_questions.length !== 6) {
    console.error(`Story ${num} (${story.id}) discussion_questions count is ${story.discussion_questions?.length}, expected 6`);
    errors++;
  } else {
    for (let j = 0; j < 6; j++) {
      const dq = story.discussion_questions[j];
      const expectedTier = bloomTiers[j];
      if (dq.tier !== expectedTier || dq.type !== expectedTier) {
        console.error(`Story ${num} (${story.id}) dq ${j} tier mismatch: ${dq.tier}/${dq.type} vs ${expectedTier}`);
        errors++;
      }
      if (!dq.prompt || !dq.question || dq.prompt !== dq.question) {
        console.error(`Story ${num} (${story.id}) dq ${j} prompt/question mismatch`);
        errors++;
      }
    }
  }

  // Check partition parity
  const partStory = partHCA.find(s => s.id === story.id);
  if (!partStory) {
    console.error(`Story ${num} (${story.id}) missing from partitioned collection file!`);
    errors++;
  } else if (partStory.title !== story.title) {
    console.error(`Story ${num} (${story.id}) title mismatch between main and partition!`);
    errors++;
  }
}

if (errors === 0) {
  console.log(`\n🎉 MASTER AUDIT SUCCESS: All 75 stories (HCA 26 to 100, indices 25 to 99) passed with ZERO errors!`);
} else {
  console.error(`\n❌ MASTER AUDIT FAILED with ${errors} errors.`);
  process.exit(1);
}
