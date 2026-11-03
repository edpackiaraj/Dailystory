import fs from 'node:fs';

const en = JSON.parse(fs.readFileSync('data/en/stories-en.json', 'utf8'));

const singlePara = en.filter(s => (s.full_text || '').trim().split(/\n\s*\n/).filter(p => p.trim().length > 0).length <= 1);
const twoParasOrLess = en.filter(s => (s.full_text || '').trim().split(/\n\s*\n/).filter(p => p.trim().length > 0).length <= 2);
const sub120Words = en.filter(s => (s.full_text || '').trim().split(/\s+/).filter(Boolean).length < 120);
const sub150Words = en.filter(s => (s.full_text || '').trim().split(/\s+/).filter(Boolean).length < 150);

console.log('=== Quality Audit of data/en/stories-en.json (2,503 stories) ===');
console.log(`Single paragraph stories: ${singlePara.length}`);
console.log(`Two paragraphs or less: ${twoParasOrLess.length}`);
console.log(`Sub-120 words: ${sub120Words.length}`);
console.log(`Sub-150 words: ${sub150Words.length}`);

// Sample 5 random stories from the newly expanded ones
const sampleIds = [
  'aesops-fables-89-the-dog-and-the-shadow',
  'aesops-fables-116-the-fox-and-the-raven',
  'mulla-nasruddin-17-the-longer-beard',
  'mulla-nasruddin-51-the-itch',
  'arabian-nights-317-second-constables-history'
];

console.log('\n=== Verifying Sample Stories ===');
for (const id of sampleIds) {
  const s = en.find(item => item.id === id);
  const paras = s.full_text.split(/\n\s*\n/);
  console.log(`\n[${s.id}] "${s.title}" (${s.word_count} words, ${paras.length} paras):`);
  console.log(s.full_text);
  console.log('---');
}
