import fs from 'node:fs';
import path from 'node:path';

const storiesPath = path.resolve(process.cwd(), 'data', 'ta', 'stories-ta.json');
const stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

function normalizeBloom(tag) {
  if (!tag) return 'சிந்தனை';
  const t = tag.toLowerCase();
  if (t.includes('remember') || t.includes('ஞாபக') || t.includes('நினைவு')) return 'நினைவுகூருதல்';
  if (t.includes('understand') || t.includes('புரி')) return 'புரிந்துகொள்ளுதல்';
  if (t.includes('apply') || t.includes('பயன்பா') || t.includes('பயன்படு')) return 'பயன்படுத்துதல்';
  if (t.includes('analy') || t.includes('பகுப்')) return 'பகுப்பாய்வு';
  if (t.includes('eval') || t.includes('மதிப்')) return 'மதிப்பீடு';
  if (t.includes('creat') || t.includes('படை') || t.includes('உருவாக்')) return 'படைப்பாக்கம்';
  return 'சிந்தனை';
}

let count = 0;
for (const story of stories) {
  if (Array.isArray(story.discussion_questions)) {
    for (const q of story.discussion_questions) {
      if (q.type) {
        q.type = normalizeBloom(q.type);
        count++;
      }
      if (q.tier) {
        q.tier = normalizeBloom(q.tier);
      }
    }
  }
}

console.log(`Normalized ${count} discussion questions.`);
fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
console.log('Saved data/ta/stories-ta.json successfully.');
