import fs from 'node:fs';

const testUrls = [
  'dist/en/aesop-s-fables/aesops-fables-89-the-dog-and-the-shadow/index.html',
  'dist/en/aesop-s-fables/aesops-fables-116-the-fox-and-the-raven/index.html',
  'dist/en/mulla-nasruddin/mulla-nasruddin-17-the-longer-beard/index.html',
  'dist/en/mulla-nasruddin/mulla-nasruddin-51-the-itch/index.html',
  'dist/en/arabian-nights/arabian-nights-317-second-constables-history/index.html'
];

for (const p of testUrls) {
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    // Extract story body content
    const bodyMatch = html.match(/id="story-body-content"[^>]*>([\s\S]*?)<\/div>/);
    if (bodyMatch) {
      const pMatches = bodyMatch[1].match(/<p[^>]*>[\s\S]*?<\/p>/g) || [];
      console.log(`\n=== Verified: ${p} ===`);
      console.log(`HTML Paragraphs rendered: ${pMatches.length}`);
      pMatches.forEach((pm, idx) => {
        console.log(`P${idx + 1}: ${pm.replace(/<[^>]+>/g, '').trim().substring(0, 80)}...`);
      });
    } else {
      console.log(`Story body not found in ${p}`);
    }
  } else {
    console.log(`File not found: ${p}`);
  }
}
