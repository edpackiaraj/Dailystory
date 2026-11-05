import fs from 'fs';

const en = JSON.parse(fs.readFileSync('data/en/stories-en.json', 'utf8'));
for (let i = 698; i <= 705; i++) {
  const s = en[i];
  console.log(`\n=== INDEX ${i}: ${s.id} (Story ${i - 570 + 1}) ===`);
  console.log(`Title: ${s.title}`);
  console.log(`Moral: ${s.moral}`);
  console.log(`Text:\n${s.full_text}\n`);
}
