import fs from 'fs';

const stories = JSON.parse(fs.readFileSync('data/ta/stories-ta.json', 'utf8'));
console.log('Total stories in data/ta/stories-ta.json:', stories.length);

const collectionsMap = {};
const tamilRegex = /[\u0B80-\u0BFF]/;

stories.forEach((s, idx) => {
  const col = s.collection || 'unknown';
  if (!collectionsMap[col]) {
    collectionsMap[col] = { total: 0, tamil: 0, english: 0, firstPending: null, lastPending: null, sampleIndices: [] };
  }
  collectionsMap[col].total++;
  
  // Check if title and full_text have Tamil
  const isTa = tamilRegex.test(s.title) && tamilRegex.test(s.full_text);
  if (isTa) {
    collectionsMap[col].tamil++;
  } else {
    collectionsMap[col].english++;
    if (collectionsMap[col].firstPending === null) {
      collectionsMap[col].firstPending = { idx, id: s.id, title: s.title };
    }
    collectionsMap[col].lastPending = { idx, id: s.id, title: s.title };
    if (collectionsMap[col].sampleIndices.length < 5) {
      collectionsMap[col].sampleIndices.push({ idx, id: s.id, title: s.title });
    }
  }
});

console.log('=== COLLECTION BREAKDOWN IN data/ta/stories-ta.json ===\n');
for (const [col, stats] of Object.entries(collectionsMap)) {
  const pct = ((stats.tamil / stats.total) * 100).toFixed(1);
  console.log(`${col.padEnd(25)}: Total ${stats.total.toString().padStart(4)} | Tamil ${stats.tamil.toString().padStart(4)} (${pct.padStart(5)}%) | English (Pending) ${stats.english.toString().padStart(4)}`);
  if (stats.english > 0) {
    console.log(`   First pending: index ${stats.firstPending.idx} (${stats.firstPending.id})`);
    console.log(`   Last pending : index ${stats.lastPending.idx} (${stats.lastPending.id})`);
  }
}
