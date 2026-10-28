import fs from 'node:fs';

const manifest = [
  { file: 'Aesop-Fables-Full.json', arrayKey: 'stories', col: "Aesop's Fables", region: 'Greece' },
  { file: 'Arabian-Nights-Full.json', arrayKey: 'stories', col: 'Arabian Nights', region: 'Middle East' },
  { file: 'Cinderella-World-Variants.json', arrayKey: 'variants', col: 'Cinderella Stories', region: 'World' },
  { file: 'Hans-Christian-Andersen-Full.json', arrayKey: 'stories', col: 'Hans Christian Andersen', region: 'Denmark' },
  { file: 'Jataka-Tales-Full.json', arrayKey: 'stories', col: 'Jataka Tales', region: 'India' },
  { file: 'Mulla-Nasruddin-Full.json', arrayKey: 'stories', col: 'Mulla Nasruddin', region: 'Middle East' },
  { file: 'Panchatantra-Full.json', isTantras: true, col: 'Panchatantra', region: 'India' },
  { file: 'Tenali-Raman-Full.json', arrayKey: 'stories', col: 'Tenali Rama', region: 'India' }
];

console.log('--- Checking All Story Blog JSON Files ---');
let grandTotal = 0;
for (const m of manifest) {
  const raw = JSON.parse(fs.readFileSync(m.file, 'utf8'));
  let stories = [];
  if (m.isTantras) {
    for (const t of raw.tantras) {
      for (const s of t.stories) {
        stories.push({ ...s, tantraId: t.id, tantraName: t.sanskrit_name });
      }
    }
  } else {
    stories = raw[m.arrayKey] || [];
  }
  let missingText = 0;
  let minLen = Infinity;
  let maxLen = 0;
  for (const s of stories) {
    const text = s.full_story || s.story || '';
    if (!text || text.length < 20) missingText++;
    if (text.length < minLen) minLen = text.length;
    if (text.length > maxLen) maxLen = text.length;
  }
  grandTotal += stories.length;
  console.log(`${m.file.padEnd(35)} -> ${m.col.padEnd(25)} | Total: ${String(stories.length).padStart(4)} | Missing Text: ${missingText} | Len: [${minLen} - ${maxLen}]`);
}
console.log(`Grand Total Stories across all files: ${grandTotal}`);
