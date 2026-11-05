// scripts/normalize-an-101-200.mjs
// Normalizes tier/type casing and prompt/question symmetry for Arabian Nights stories 101-200.

import fs from 'fs';
import path from 'path';

const STORIES_PATH = path.resolve('data/ta/stories-ta.json');
const raw = fs.readFileSync(STORIES_PATH, 'utf8');
const stories = JSON.parse(raw);

const anStories = stories.filter(s => s.id && s.id.startsWith('arabian-nights'));
const targetStories = anStories.slice(100, 200);

let fixedCount = 0;

for (const story of targetStories) {
  let changed = false;
  if (Array.isArray(story.discussion_questions)) {
    for (const dq of story.discussion_questions) {
      if (dq.tier && dq.tier !== dq.tier.toLowerCase()) {
        dq.tier = dq.tier.toLowerCase();
        changed = true;
      }
      if (dq.type && dq.type !== dq.type.toLowerCase()) {
        dq.type = dq.type.toLowerCase();
        changed = true;
      }
      if (dq.prompt && dq.question && dq.prompt !== dq.question) {
        // Set both to prompt
        dq.question = dq.prompt;
        changed = true;
      }
    }
  }
  if (changed) {
    const idx = stories.findIndex(s => s.id === story.id);
    stories[idx] = story;
    fixedCount++;
  }
}

console.log(`Normalized discussion questions in ${fixedCount} stories.`);

let written = false;
for (let attempt = 1; attempt <= 5; attempt++) {
  try {
    fs.writeFileSync(STORIES_PATH, JSON.stringify(stories, null, 2), 'utf8');
    written = true;
    break;
  } catch (err) {
    console.log(`Attempt ${attempt} failed: ${err.message}. Retrying in 1s...`);
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
  }
}

if (!written) {
  throw new Error("Failed to write to stories-ta.json after 5 attempts");
}

console.log("Successfully updated stories-ta.json!");
