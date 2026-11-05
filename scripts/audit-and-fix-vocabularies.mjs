import fs from 'fs';

const storiesPath = 'data/ta/stories-ta.json';
const stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

const taStories = stories.filter(s => s.language === 'ta' && s.full_text && s.full_text.match(/[\u0B80-\u0BFF]/));
const mismatched = taStories.filter(s => s.vocabulary && s.vocabulary.some(v => !s.full_text.includes(v.word)));

const stopWords = new Set([
  'என்று', 'என்ற', 'அவன்', 'அவள்', 'அவர்', 'அவர்கள்', 'அது', 'அவை', 'இந்த', 'அந்த',
  'ஒரு', 'இருந்த', 'இருந்தது', 'இருந்தார்', 'கொண்டு', 'வந்து', 'சென்று', 'பார்த்து',
  'கூறி', 'கூறினார்', 'செய்து', 'செய்தார்', 'தன்னுடைய', 'அவரது', 'அவனது', 'அவளது',
  'பின்னர்', 'பிறகு', 'உடனே', 'ஆனால்', 'எனவே', 'அப்போது', 'இப்போது', 'எப்போது'
]);

function cleanWord(w) {
  return w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'“”‘’]/g, "").trim();
}

for (const s of mismatched) {
  const wordsInText = s.full_text.split(/\s+/).map(cleanWord).filter(w => w.length >= 4 && !stopWords.has(w));
  
  for (const v of s.vocabulary) {
    if (!s.full_text.includes(v.word)) {
      const noSpace = v.word.replace(/\s+/g, '');
      const p3 = v.word.slice(0, 3);
      const p4 = v.word.slice(0, 4);
      const match = wordsInText.find(w => w.startsWith(p4) || (w.startsWith(p3) && w.length >= 4));
      
      if (!s.full_text.includes(noSpace) && !match) {
        console.log(`[${s.id}] '${v.word}' (meaning: ${v.meaning.slice(0, 40)})`);
      }
    }
  }
}
