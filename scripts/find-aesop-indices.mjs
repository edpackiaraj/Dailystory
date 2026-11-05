import fs from 'fs';

const en = JSON.parse(fs.readFileSync('data/en/stories-en.json', 'utf8'));
const aesop = [];

en.forEach((s, idx) => {
  if (s.collection === "Aesop's Fables") {
    aesop.push({ globalIdx: idx, aesopIdx: aesop.length + 1, id: s.id, title: s.title });
  }
});

console.log('Total Aesop stories:', aesop.length);
console.log('Aesop Story 1:', aesop[0]);
console.log('Aesop Story 59:', aesop[58]);
console.log('Aesop Story 120:', aesop[119]);
console.log('Aesop Story 121:', aesop[120]);
console.log('Aesop Story 200:', aesop[199]);
console.log('Aesop Story 201:', aesop[200]);
console.log('Aesop Story 245:', aesop[244]);
