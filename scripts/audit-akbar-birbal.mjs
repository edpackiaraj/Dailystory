import fs from 'node:fs';

const stories = JSON.parse(fs.readFileSync('data/en/stories-en.json', 'utf8'));
const ab = stories.filter(s => s.collection === 'Akbar–Birbal');
console.log('Akbar-Birbal stories in stories-en.json:', ab.length);

ab.slice(0, 5).forEach((s, i) => {
  console.log(`Story ${i+1}: [${s.id}] "${s.title}"`);
  console.log('  Moral:', s.moral);
  console.log('  Summary:', s.summary);
  console.log('  Text length:', (s.full_text || s.content || '').length);
  console.log('  Vocab:', JSON.stringify(s.vocabulary));
  console.log('  Quiz Q1:', s.quiz?.[0]?.question);
  console.log('  Quiz Q1 options:', s.quiz?.[0]?.options);
  console.log('  Quiz Q1 answerIndex:', s.quiz?.[0]?.answerIndex);
});
