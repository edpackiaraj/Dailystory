import fs from 'node:fs';
import path from 'node:path';

const enStoriesPath = path.resolve('data', 'en', 'stories.json');
const stories = JSON.parse(fs.readFileSync(enStoriesPath, 'utf8'));

let count = 0;
for (const s of stories) {
  if (s.id.includes('cinderella') || s.slug.includes('cinderella') || (s.tags && s.tags.includes('Cinderella'))) {
    s.collection = "Cinderella Stories";
    count++;
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(stories, null, 2), 'utf8');
console.log(`Updated ${count} Cinderella stories to collection 'Cinderella Stories'.`);
