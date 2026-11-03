import fs from 'node:fs';

console.log('=== TEST 1: Akbar Birbal 1 (Tamil) ===');
const p1 = 'dist/ta/akbar-birbal/akbar-birbal-1-birbals-entry-to-akbars-court-ta/index.html';
if (fs.existsSync(p1)) {
  const html = fs.readFileSync(p1, 'utf8');
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  console.log('H1:', h1Match ? h1Match[1].trim() : 'NOT FOUND');
  console.log('Contains Tamil body text:', html.includes('ராஜா பீர்பால் என்று பாரத தேசம் முழுவதும் போற்றப்படுவதற்கு முன்பு'));
  console.log('Contains English body text:', html.includes('Long before he was known throughout Hindustan'));
}

console.log('\n=== TEST 2: Aesop 1 (Tamil) ===');
const p2 = 'dist/ta/aesop-s-fables/aesops-fables-1-the-fox-and-the-grapes-ta/index.html';
if (fs.existsSync(p2)) {
  const html = fs.readFileSync(p2, 'utf8');
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  console.log('H1:', h1Match ? h1Match[1].trim() : 'NOT FOUND');
  console.log('Contains Tamil body text:', html.includes('ஒரு வெயில் காலத்தில் காட்டில் சுற்றித் திரிந்த ஒரு நரிக்குக்'));
  console.log('Contains English body text:', html.includes('On a sweltering summer afternoon, a sly fox strolled'));
}

console.log('\n=== TEST 3: Untranslated Story Fallback in Tamil ===');
const p3 = 'dist/ta/cinderella-stories/cinderella-stories-1-yeh-shen-ye-xian-china-oldest-known-cinderella-ta/index.html';
if (fs.existsSync(p3)) {
  const html = fs.readFileSync(p3, 'utf8');
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  console.log('H1:', h1Match ? h1Match[1].trim() : 'NOT FOUND');
  console.log('Has untranslated notice:', html.includes('இக்கதை ஆங்கிலத்தில் மட்டுமே கிடைக்கிறது'));
  console.log('Has Read in English button:', html.includes('முழுக் கதையையும் ஆங்கிலத்தில் வாசிக்க'));
  console.log('Contains English body paragraphs in reader:', html.includes('id="story-body-content"'));
}

console.log('\n=== TEST 4: Collection Page (ta-collection-akbar-birbal) ===');
const p4 = 'dist/ta/collections/ta-collection-akbar-birbal/index.html';
if (fs.existsSync(p4)) {
  const html = fs.readFileSync(p4, 'utf8');
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  console.log('Collection H1:', h1Match ? h1Match[1].trim() : 'NOT FOUND');
  console.log('Contains localized intro:', html.includes('வரலாற்றுச் சிறப்புமிக்க கதைகள்'));
  console.log('Contains full translation badge:', html.includes('முழு தமிழாக்கம்'));
  console.log('Contains read button in Tamil:', html.includes('கதையை வாசிக்க'));
  console.log('Has any [TA] or (தமிழ்) in card titles:', /\(தமிழ்\)|\[TA\]/.test(html));
}
