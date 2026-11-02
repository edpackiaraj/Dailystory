import fs from 'node:fs';
import path from 'node:path';

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getFiles(full));
    } else {
      results.push({ name: item.name, path: full });
    }
  }
  return results;
}

const files = getFiles('./dist');
console.log(`Total files in dist: ${files.length}`);

const map = new Map();
const duplicates = [];

for (const f of files) {
  if (map.has(f.name)) {
    duplicates.push({ name: f.name, path1: map.get(f.name), path2: f.path });
  } else {
    map.set(f.name, f.path);
  }
}

if (duplicates.length === 0) {
  console.log('SUCCESS: 0 duplicate filenames found! Every single file in dist has a 100% globally unique filename!');
} else {
  console.log(`FAIL: Found ${duplicates.length} duplicate filenames:`);
  duplicates.forEach(d => console.log(`  - ${d.name}\n      ${d.path1}\n      ${d.path2}`));
}
