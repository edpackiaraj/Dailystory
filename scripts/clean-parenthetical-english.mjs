import fs from 'node:fs';

const storiesPath = 'data/ta/stories-ta.json';
const stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

const replacements = [
  { from: /\(Stilts\)/g, to: '(மரக்கால்)' },
  { from: /\(Ankus\)/g, to: '(அங்குசம்)' },
  { from: /\(Tolas\)/g, to: '(தொலா எடை)' },
  { from: /\(Touchstone\)/g, to: '(உரைக்கல்)' },
  { from: /\(Nitric Acid\)/g, to: '(அமிலச் சோதனை)' },
  { from: /\(Pungi\)/g, to: '(மகுடி)' },
  { from: /\(Common Sense\)/g, to: '(பொது அறிவு)' },
  { from: /\(Measure twice,? cut once\)/gi, to: '(இருமுறை அளந்து ஒருமுறை வெட்டு)' },
  { from: /\(Single\)/g, to: '(தனி ஒரு)' },
  { from: /\(Curved Mirror\)/g, to: '(வளைந்த கண்ணாடி)' },
  { from: /\(Flat Mirror\)/g, to: '(சமதளக் கண்ணாடி)' },
  { from: /\(Qazi\)/g, to: '(காஜி)' },
  { from: /\(Lodestone\)/g, to: '(இயற்கைக் காந்தக்கல்)' },
  { from: /\(Insomnia\)/g, to: '(தூக்கமின்மை)' },
  { from: /\(Sherwani\)/g, to: '(நீளங்கி)' },
  { from: /\(Leather Bellows\)/g, to: '(துருத்தி)' }
];

let replacedCount = 0;

for (const s of stories) {
  for (const { from, to } of replacements) {
    if (s.full_text && from.test(s.full_text)) {
      s.full_text = s.full_text.replace(from, to);
      replacedCount++;
    }
    if (s.summary && from.test(s.summary)) {
      s.summary = s.summary.replace(from, to);
      replacedCount++;
    }
    if (s.moral && from.test(s.moral)) {
      s.moral = s.moral.replace(from, to);
      replacedCount++;
    }
  }
}

console.log(`Replaced ${replacedCount} English parenthetical glosses in data/ta/stories-ta.json.`);
fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
