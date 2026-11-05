import fs from 'fs';

const en = JSON.parse(fs.readFileSync('data/en/stories-en.json', 'utf8'));
const start = parseInt(process.argv[2] || '628');
const end = parseInt(process.argv[3] || '634');

for (let i = start; i <= end; i++) {
  const s = en[i];
  console.log(`=== Index ${i}: ID: ${s.id} ===`);
  console.log(`Title: ${s.title}`);
  console.log(`Summary: ${s.summary}`);
  console.log(`Moral: ${s.moral}`);
  console.log(`Full Text:\n${s.full_text}\n`);
  console.log('--------------------------------------------------\n');
}
