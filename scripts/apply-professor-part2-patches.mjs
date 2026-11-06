import fs from 'node:fs';
import path from 'node:path';

const storiesPath = path.resolve(process.cwd(), 'data', 'ta', 'stories-ta.json');
console.log('Reading data/ta/stories-ta.json...');
const stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

let patchedCount = 0;

for (const story of stories) {
  let modified = false;

  // 1. PANCHATANTRA FIXES
  if (story.id === 'panchatantra-1.15-uglys-trust-abused') {
    story.summary = story.summary.replace('अभयம்', 'அபயமும் அடைக்கலமும்').replace('அடைக்கலம் தந்து அபயமும் அடைக்கலமும்', 'அடைக்கலமும் அபயமும்');
    story.full_text = story.full_text.replace(/अभय/g, 'அபயம்');
    modified = true;
  }

  if (story.id === 'panchatantra-1.13-the-blue-jackal') {
    story.full_text = story.full_text.replace(/சாயப் தொட்டி/g, 'சாயத் தொட்டி');
    story.summary = story.summary.replace(/சாயப் தொட்டி/g, 'சாயத் தொட்டி');
    modified = true;
  }

  if (story.id === 'panchatantra-2.4-self-defeating-forethought') {
    story.full_text = story.full_text.replace(/நால்வரின் உடல்கள் குட்டிக்கிடந்த/g, 'நால்வரின் உடல்களும் செத்துக் கிடந்த');
    story.summary = story.summary.replace(/நால்வரின் உடல்கள் குட்டிக்கிடந்த/g, 'நால்வரின் உடல்களும் செத்துக் கிடந்த');
    modified = true;
  }

  if (story.id === 'panchatantra-3.5-the-snake-and-the-ants') {
    story.full_text = story.full_text.replace(/உடலின் பருமட்டையாலும்/g, 'உடல் பருமனாலும்').replace(/பருமட்டையாலும்/g, 'பருமனாலும்');
    story.summary = story.summary.replace(/பருமட்டையாலும்/g, 'பருமனாலும்');
    modified = true;
  }

  if (story.id === 'panchatantra-3.4-the-brahmins-goat') {
    story.title = 'பிராமணரின் ஆட்டுக்குட்டியும் மூன்று திருடர்களும் – வதந்தியின் மாயை';
    modified = true;
  }

  if (story.id === 'panchatantra-1.8-the-heron-that-liked-crab-meat') {
    story.title = 'வஞ்சகக் கொக்கும் புத்திசாலி நண்டும்';
    modified = true;
  }

  if (story.id === 'panchatantra-1.1-the-wedge-pulling-monkey') {
    story.summary = story.summary.replace('தங்களுக்குத் தொடர்பில்லாத', 'தனக்குத் தொடர்பில்லாத');
    modified = true;
  }

  if (story.id === 'panchatantra-5.9-the-credulous-fiend') {
    story.full_text = story.full_text
      .replace(/ராக்ஷஸன்/g, 'அரக்கன்')
      .replace(/ராக்ஷஸர்களை/g, 'அரக்கர்களை')
      .replace(/ராக்ஷஸர்கள்/g, 'அரக்கர்கள்')
      .replace(/பயங்கர ராக்ஷஸனை/g, 'பயங்கர அரக்கனை')
      .replace(/ரத்தத்தைக்/g, 'இரத்தத்தைக்');
    modified = true;
  }

  if (story.id === 'panchatantra-1.17-the-plover-who-fought-the-ocean') {
    story.title = 'கடலோடு போரிட்ட ஆள்காட்டிக் குருவி';
    story.summary = story.summary.replace(/சிட்டுக் குருவி/g, 'ஆள்காட்டிக் குருவி');
    story.full_text = story.full_text.replace(/சிட்டுக் குருவி/g, 'ஆள்காட்டிக் குருவி');
    modified = true;
  }

  if (story.id?.includes('panchatantra-3.3')) {
    story.summary = story.summary.replace(/காடையும்/g, 'கௌதாரியும்').replace(/காடை/g, 'கௌதாரி');
    story.full_text = story.full_text.replace(/காடையும்/g, 'கௌதாரியும்').replace(/காடை/g, 'கௌதாரி');
    modified = true;
  }

  // Panchatantra vocabulary cleanup
  if (story.collection === 'Panchatantra') {
    story.title = story.title
      .replace(/தந்திர வரலாறு/g, 'தந்திரக் கதை')
      .replace(/சோக வரலாறு/g, 'சோக நிகழ்வு')
      .replace(/தத்துவ வரலாறு/g, 'தத்துவ நெறி')
      .replace(/பஞ்சதந்திரக் காவியம்/g, 'பஞ்சதந்திரக் கதை');
    story.summary = story.summary
      .replace(/தந்திர வரலாறு/g, 'தந்திரக் கதை')
      .replace(/சோக வரலாறு/g, 'சோக நிகழ்வு')
      .replace(/தத்துவ வரலாறு/g, 'தத்துவ நெறி')
      .replace(/பஞ்சதந்திரக் காவியம்/g, 'பஞ்சதந்திரக் கதை')
      .replace(/வதம் செய்த/g, 'கொன்ற')
      .replace(/வதம் செய்து/g, 'கொன்று');
    story.full_text = story.full_text
      .replace(/வதம் செய்த/g, 'கொன்ற')
      .replace(/வதம் செய்து/g, 'கொன்று');
  }

  // Age group updates for sensitive Panchatantra tales
  const maturePanchatantraIds = [
    'panchatantra-1.6-the-weaver-who-loved-a-princess',
    'panchatantra-3.9-the-shrewd-old-gander',
    'panchatantra-3.12-the-bird-and-the-sea',
    'panchatantra-3.17-the-brahmin-and-the-goat',
    'panchatantra-4.6-the-ungrateful-wife',
    'panchatantra-4.9-the-farmers-wife',
    'panchatantra-5.10-the-three-breasted-princess'
  ];
  if (maturePanchatantraIds.includes(story.id)) {
    story.age_group = '13-18';
    modified = true;
  }

  // 2. TENALI RAMA FIXES
  if (story.id === 'tenali-rama-6-tenali-and-the-dream-of-palace') {
    story.summary = story.summary.replace('அந்தரத்தில் அந்தரங்க மாளிகை', 'அந்தரத்தில் மிதக்கும் மாளிகை');
    story.full_text = story.full_text.replace(/அந்தரங்க மாளிகை/g, 'மிதக்கும் மாளிகை');
    modified = true;
  }

  if (story.id === 'tenali-rama-5-the-cat-and-the-milk') {
    story.summary = story.summary.replace('பூனைக்கு தினமும்', 'பூனைக்குத் தினமும்');
    story.full_text = story.full_text.replace(/பூனைக்கு தினமும்/g, 'பூனைக்குத் தினமும்');
    modified = true;
  }

  if (story.id === 'tenali-rama-36-the-king-and-the-dull-minister') {
    story.title = 'ஆமாம் சாமி அமைச்சர் – முகஸ்துதியும் தெனாலிராமனின் பாடமும்';
    story.summary = story.summary.replace(/ஆம் சாமி/g, 'ஆமாம் சாமி');
    story.full_text = story.full_text.replace(/ஆம் சாமி/g, 'ஆமாம் சாமி');
    modified = true;
  }

  if (story.id === 'tenali-rama-110-tenali-raman-tale-110' || story.id === 'tenali-rama-124-tenali-raman-tale-124') {
    story.summary = story.summary.replace(/நிருபித்த/g, 'நிரூபித்த').replace(/நிருபிக்க/g, 'நிரூபிக்க');
    story.full_text = story.full_text.replace(/நிருபித்த/g, 'நிரூபித்த').replace(/நிருபிக்க/g, 'நிரூபிக்க');
    modified = true;
  }

  if (story.id === 'tenali-rama-72-tenali-raman-tale-72' || story.id === 'tenali-rama-88-tenali-raman-tale-88') {
    story.full_text = story.full_text.replace(/மசாஜ்/g, 'தைலமிட்டு நீவி');
    story.summary = story.summary.replace(/மசாஜ்/g, 'பிடித்துவிடுதல்');
    modified = true;
  }

  if (story.id === 'tenali-rama-121-tenali-raman-tale-121' || story.id === 'tenali-rama-131-tenali-raman-tale-131') {
    story.full_text = story.full_text.replace(/பவுண்டு/g, 'பலம்').replace(/கேலன்/g, 'படி');
    story.summary = story.summary.replace(/பவுண்டு/g, 'பலம்').replace(/கேலன்/g, 'படி');
    modified = true;
  }

  // Tenali Anachronisms
  if (story.id === 'tenali-rama-54-tenali-and-the-mango-thief' || story.id === 'tenali-rama-82-tenali-raman-tale-82') {
    story.summary = story.summary.replace(/அல்போன்சா/g, 'சுவையான செங்கனி');
    story.full_text = story.full_text.replace(/அல்போன்சா/g, 'சுவையான செங்கனி');
    modified = true;
  }

  if (story.id === 'tenali-rama-83-tenali-raman-tale-83') {
    story.summary = story.summary.replace(/ஆர்க்கிமிடிஸ்/g, 'இயற்பியல்');
    story.full_text = story.full_text.replace(/ஆர்க்கிமிடிஸ்/g, 'இயற்பியல் தத்துவ');
    modified = true;
  }

  if (story.id === 'tenali-rama-100-tenali-raman-tale-100') {
    story.title = story.title.replace('ஹுக்கா', 'புகைப்பிடிக்கும் குழல்');
    story.summary = story.summary.replace(/ஹுக்கா/g, 'புகைப்பிடிக்கும் குழல்');
    story.full_text = story.full_text.replace(/ஹுக்கா/g, 'புகைப்பிடிக்கும் குழல்');
    modified = true;
  }

  // Tenali Modern buzzwords cleanup
  if (story.collection === 'Tenali Rama') {
    // Unify "தெனாலி ராமன்" to "தெனாலிராமன்"
    if (story.title.includes('தெனாலி ராமன்')) {
      story.title = story.title.replace(/தெனாலி ராமன்/g, 'தெனாலிராமன்');
      modified = true;
    }
    if (story.summary.includes('தெனாலி ராமன்')) {
      story.summary = story.summary.replace(/தெனாலி ராமன்/g, 'தெனாலிராமன்');
      modified = true;
    }
    if (story.full_text.includes('தெனாலி ராமன்')) {
      story.full_text = story.full_text.replace(/தெனாலி ராமன்/g, 'தெனாலிராமன்');
      modified = true;
    }

    // Buzzword replacements
    story.title = story.title
      .replace(/தடய அறிவியல்/g, 'தடயங்களின் சாட்சியம்')
      .replace(/பேரிடர் மேலாண்மை/g, 'ஆபத்து மேலாண்மை')
      .replace(/பொதுசுகாதாரப் புரட்சி/g, 'சுகாதார விழிப்புணர்வு')
      .replace(/வேதியியல் விவேகம்/g, 'இயற்கை மூலிகை விவேகம்')
      .replace(/உளவியல்/g, 'மனோதத்துவ');

    story.summary = story.summary
      .replace(/தடய அறிவியல்/g, 'தடயங்களின் சாட்சியம்')
      .replace(/பேரிடர் மேலாண்மை/g, 'ஆபத்து மேலாண்மை')
      .replace(/பொதுசுகாதாரப் புரட்சி/g, 'சுகாதார விழிப்புணர்வு')
      .replace(/வேதியியல்/g, 'இயற்கை மூலிகையியல்')
      .replace(/உளவியல்/g, 'மனோதத்துவ');
  }

  // Cross-folklore editorial attribution notes for Tenali Rama tales
  const crossFolkloreNotes = {
    'tenali-rama-115-tenali-raman-tale-115': ' (குறிப்பு: உலகப் புகழ்பெற்ற "மன்னரின் ஆடை" நாட்டார் கதை மரபில் தெனாலிராமன் பாணியில் சொல்லப்பட்டது)',
    'tenali-rama-48-tenali-and-the-golden-axe': ' (குறிப்பு: "பொன் கோடரி" உலக நீதிக்கதை மரபில் தெனாலிராமன் பாணியில் சொல்லப்பட்டது)',
    'tenali-rama-128-tenali-raman-tale-128': ' (குறிப்பு: ஈசாப் "கஞ்சனும் தங்கக் கட்டியும்" கதை மரபில் தெனாலிராமன் பாணியில் சொல்லப்பட்டது)',
    'tenali-rama-49-tenali-and-the-two-guards': ' (குறிப்பு: உலகப் புகழ்பெற்ற உண்மை–பொய் புதிர்க் கதை மரபில் தெனாலிராமன் பாணியில் சொல்லப்பட்டது)',
    'tenali-rama-43-tenali-and-the-pot-of-ghee': ' (குறிப்பு: பஞ்சதந்திர "பகற்கனவு" கதை மரபில் தெனாலிராமன் பாணியில் சொல்லப்பட்டது)',
    'tenali-rama-76-tenali-raman-tale-76': ' (குறிப்பு: அக்பர்–பீர்பால் அரசவை வழக்கில் வரும் "குளிர்கால விளக்கு" கதை மரபில் தெனாலிராமன் பாணியில் சொல்லப்பட்டது)',
    'tenali-rama-89-tenali-raman-tale-89': ' (குறிப்பு: அக்பர்–பீர்பால் அரசவை வழக்கில் வரும் "குளிர்கால விளக்கு" கதை மரபில் தெனாலிராமன் பாணியில் சொல்லப்பட்டது)'
  };
  if (crossFolkloreNotes[story.id]) {
    if (!story.moral.includes('குறிப்பு:')) {
      story.moral += crossFolkloreNotes[story.id];
      modified = true;
    }
  }

  // 3. CHARLES PERRAULT FIXES
  if (story.id === 'charles-perrault-6-cendrillon-ou-la-petite-pantoufle-de-verre-cinderella') {
    story.title = story.title.replace('கண்ணாடிப் பாதரட்சையும்', 'கண்ணாடிக் காலணியும்');
    story.summary = story.summary.replace(/பாதரட்சை/g, 'காலணி');
    story.full_text = story.full_text.replace(/பாதரட்சை/g, 'காலணி');
    modified = true;
  }

  if (story.id === 'charles-perrault-8-le-petit-poucet-little-thumbling-hop-o-my-thumb') {
    story.title = story.title.replace('ஏழு லீக் காலணியும்', 'ஏழு காதக் காலணியும்');
    story.summary = story.summary.replace(/ஏழு லீக்/g, 'ஏழு காத');
    story.full_text = story.full_text.replace(/ஏழு லீக்/g, 'ஏழு காத');
    story.age_group = '13-18';
    modified = true;
  }

  if (story.id === 'charles-perrault-3-la-barbe-bleue-blue-beard' || story.id === 'charles-perrault-9-griselidis-griselda-verse-tale') {
    story.age_group = '13-18';
    modified = true;
  }

  // 4. GENERAL TAMIL ORTHOGRAPHY & SANDHI FIXES
  if (story.summary.includes('அடம் பிடித்த')) {
    story.summary = story.summary.replace(/அடம் பிடித்த/g, 'அடம்பிடித்த');
    modified = true;
  }
  if (story.full_text.includes('அடம் பிடித்த')) {
    story.full_text = story.full_text.replace(/அடம் பிடித்த/g, 'அடம்பிடித்த');
    modified = true;
  }
  if (story.summary.includes('ஓநாய் வருது')) {
    story.summary = story.summary.replace(/ஓநாய் வருது/g, 'ஓநாய் வருகிறது');
    modified = true;
  }
  if (story.full_text.includes('ஓநாய் வருது')) {
    story.full_text = story.full_text.replace(/ஓநாய் வருது/g, 'ஓநாய் வருகிறது');
    modified = true;
  }

  if (modified) patchedCount++;
}

console.log(`Applied professor audit patches to ${patchedCount} stories.`);
fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
console.log('Saved data/ta/stories-ta.json successfully.');
