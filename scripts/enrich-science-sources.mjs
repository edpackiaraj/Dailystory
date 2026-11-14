import fs from 'fs';
import path from 'path';

const sourcesEn = {
  'science-1-archimedes-golden-crown': {
    source_book: 'De Architectura (Ten Books on Architecture), Book IX',
    source_author: 'Marcus Vitruvius Pollio',
    source_year: 'c. 15 BCE',
    source_chapter: 'Book IX, Preface, Paragraphs 9–12',
    source_edition: 'Loeb Classical Library, Harvard University Press; Frank Granger translation',
    authenticity_note: 'The primary classical historical chronicle documenting Archimedes of Syracuse, King Hiero II, the goldsmith\'s crown, and the discovery of hydrostatic water displacement in the public baths.'
  },
  'science-2-eratosthenes-measuring-earth': {
    source_book: 'De motu circulari corporum caelestium (On the Circular Motions of the Celestial Bodies), Book I & Strabo\'s Geographica, Book II',
    source_author: 'Cleomedes & Strabo (preserving Eratosthenes of Cyrene\'s treatise On the Measure of the Earth)',
    source_year: 'c. 1st Century CE (Original calculation c. 240 BCE)',
    source_chapter: 'Cleomedes Book I, Chapter 10; Strabo Geographica 2.5.7',
    source_edition: 'Robert Todd (Cleomedes, Teubner edition); H.L. Jones (Strabo, Loeb Classical Library)',
    authenticity_note: 'The foundational surviving astronomical treatise recording Eratosthenes\' exact geometric method: the sun shining directly down the Syene well at summer solstice noon, the 7.2° shadow of the Alexandria gnomon, and calculating Earth\'s circumference to within ~1% of modern satellite measurements.'
  },
  'science-3-newton-apple-and-prism': {
    source_book: 'Opticks: or, A Treatise of the Reflections, Refractions, Inflections and Colours of Light (1704) & Memoirs of Sir Isaac Newton\'s Life (1752)',
    source_author: 'Sir Isaac Newton, PRS & Dr. William Stukeley, FRS',
    source_year: '1704 / 1752 (Memoir of April 15, 1726 conversation)',
    source_chapter: 'Opticks: Book I, Part 1, Experiment 6 (Experimentum Crucis); Stukeley: Royal Society Manuscript MS/142',
    source_edition: 'Royal Society of London Historical Archives; Dover Books on Physics edition (Opticks)',
    authenticity_note: 'Authentic firsthand primary accounts. Dr. Stukeley personally recorded Newton reflecting in the garden at Kensington on how falling apples provoked the gravitation inquiry (refuting the cartoon myth of an apple striking his head). Newton\'s Opticks records the two-prism Experimentum Crucis proving white sunlight is a composite spectrum.'
  },
  'science-4-galileo-swinging-chandelier': {
    source_book: 'Racconto istorico della vita di Galileo Galilei (Historical Account of the Life of Galileo Galilei) & Two New Sciences',
    source_author: 'Vincenzo Viviani (Galileo\'s student & amanuensis) & Galileo Galilei',
    source_year: '1654 / 1638',
    source_chapter: 'Viviani: Vita di Galileo, §4; Galileo: Two New Sciences, First Day (Leiden: Louis Elzevir, 1638)',
    source_edition: 'National Edition of Galileo\'s Works (Le Opere di Galileo Galilei, Edizione Nazionale, ed. Antonio Favaro)',
    authenticity_note: 'Documented by Galileo\'s devoted assistant Vincenzo Viviani, recording the 17-year-old Galileo observing the bronze hanging lamp in the Cathedral of Pisa and timing its swings with his own arterial pulse, establishing the isochronism of the pendulum.'
  },
  'science-5-fleming-miracle-mold': {
    source_book: 'British Journal of Experimental Pathology (1929) & Nobel Memorial Lecture in Physiology or Medicine (1945)',
    source_author: 'Sir Alexander Fleming, FRS, FRCS',
    source_year: '1929 / 1945',
    source_chapter: 'British Journal of Experimental Pathology, Vol. 10, No. 3, pp. 226–236; Nobel Lecture (Dec 11, 1945)',
    source_edition: 'Primary Medical Research Publication, St. Mary\'s Hospital Medical School, London; Nobel Foundation Archives',
    authenticity_note: 'Primary laboratory research papers and Nobel Foundation presentation detailing the August–September 1928 observation: accidental Penicillium notatum spore drift onto Staphylococcus aureus culture plates, the clear lysis ring of dissolving bacteria, and the isolation of natural penicillin.'
  }
};

const sourcesTa = {
  'science-1-archimedes-golden-crown': {
    source_book: 'டி ஆர்கிடெக்சுரா (De Architectura - கட்டிடக்கலையின் பத்து நூல்கள்), பாகம் IX',
    source_author: 'மார்கஸ் விட்ரூவியஸ் போலியோ (Marcus Vitruvius Pollio)',
    source_year: 'பொ.ஆ.மு. 15 (கி.மு. 15)',
    source_chapter: 'ஒன்பதாம் பாகம், முன்னுரை பத்திகள் 9–12',
    source_edition: 'ஹார்வர்ட் பல்கலைக்கழக லோயப் செவ்வியல் பதிப்பு (Loeb Classical Library)',
    authenticity_note: 'ரோமானிய கட்டிடக்கலை அறிஞர் விட்ரூவியஸ் எழுதிய \'டி ஆர்கிடெக்சுரா\' நூலின் ஒன்பதாம் பகுதியில் பதிவு செய்யப்பட்டுள்ள முதன்மை வரலாற்று ஆவணம். சீரகுசா மன்னர் இரண்டாம் ஹியெரோ, தங்கக் கிரீடம் மற்றும் குளியல் தொட்டியில் ஆர்க்கிமிடீஸ் கண்டறிந்த நீர் இடப்பெயர்ச்சி விதி குறித்த ஆகப் பழமையான வரலாற்றுப் பதிவு இதுவேயாகும்.'
  },
  'science-2-eratosthenes-measuring-earth': {
    source_book: 'வான் பொருட்களின் வட்ட இயக்கம் (De motu circulari corporum caelestium), பாகம் I & ஸ்ட்ராபோவின் புவியியல் நூல் (Geographica, பாகம் II)',
    source_author: 'கிளியோமெடிஸ் மற்றும் ஸ்ட்ராபோ (எரடோஸ்தனீஸின் மூலக் கணக்கீடுகளைப் பாதுகாத்த வரலாற்று அறிஞர்கள்)',
    source_year: 'பொ.ஆ. 1-ஆம் நூற்றாண்டு (மூலக் கண்டுபிடிப்பு: பொ.ஆ.மு. 240)',
    source_chapter: 'கிளியோமெடிஸ் பாகம் I, அத்தியாயம் 10; ஸ்ட்ராபோ 2.5.7',
    source_edition: 'டூப்னர் செவ்வியல் பதிப்பு & லோயப் கிளாசிக்கல் லைப்ரரி பதிப்பு',
    authenticity_note: 'அலெக்ஸாண்ட்ரியாவின் மாபெரும் நூலகராக இருந்த எரடோஸ்தனீஸ், கோடைக்கால நீண்ட பகலில் சியீன் (அஸ்வான்) ஆழக்கிணற்றில் நிழல் விழாததையும், அலெக்ஸாண்ட்ரியாவில் தூண் காட்டிய 7.2 பாகை நிழலையும் கொண்டு பூமியின் சுற்றளவைத் துல்லியமாகக் கணக்கிட்ட முறையை கிளியோமெடிஸ் தனது வான்நூலில் பதிவு செய்துள்ளார்.'
  },
  'science-3-newton-apple-and-prism': {
    source_book: 'ஆப்டிக்ஸ் (Opticks - ஒளியியல் ஆராய்ச்சி நூல், 1704) & சர் ஐசக் நியூட்டனின் வாழ்க்கை நினைவுக்குறிப்புகள் (1752)',
    source_author: 'சர் ஐசக் நியூட்டன் & டாக்டர் வில்லியம் ஸ்டூக்லி (இலண்டன் ராயல் சொசைட்டி)',
    source_year: '1704 / 1752 (1726-இல் நியூட்டன் நேரில் பகிர்ந்த உரையாடல் பதிவு)',
    source_chapter: 'ஒளியியல்: பாகம் I, சோதனை 6 (Experimentum Crucis); ராயல் சொசைட்டி கையெழுத்துப் பிரதி MS/142',
    source_edition: 'இலண்டன் ராயல் சொசைட்டி வரலாற்று ஆவணக் காப்பகம்',
    authenticity_note: 'நியூட்டன் தலைமீது ஆப்பிள் விழுந்தது என்ற புனையப்பட்ட கட்டுக்கதையை மறுத்து, 1726-இல் கென்சிங்டன் தோட்டத்தில் நியூட்டன் அமர்ந்து யோசித்தபோது ஆப்பிள்கள் கீழே விழுவதைக் கண்டு ஈர்ப்பு விசை பற்றிய சிந்தனை உதித்ததை டாக்டர் வில்லியம் ஸ்டூக்லி நேரில் பதிவு செய்துள்ளார். மேலும் வெள்ளை சூரிய ஒளியானது பல வண்ணங்களின் கலவை என்பதை நியூட்டனின் \'ஆப்டிக்ஸ்\' நூல் துல்லியமாக விவரிக்கிறது.'
  },
  'science-4-galileo-swinging-chandelier': {
    source_book: 'கலிலியோ கலிலியின் வாழ்க்கை வரலாறு (Racconto istorico della vita di Galileo Galilei, 1654) & இரு புதிய அறிவியல்கள் (1638)',
    source_author: 'வின்சென்சோ விவியானி (கலிலியோவின் முதன்மை மாணவர் & வாழ்க்கை வரலாற்று ஆசிரியர்) மற்றும் கலிலியோ கலிலி',
    source_year: '1654 / 1638',
    source_chapter: 'விவியானி: கலிலியோவின் வாழ்க்கை, பிரிவு 4; கலிலியோ: இரு புதிய அறிவியல்கள், முதல் நாள் (1638)',
    source_edition: 'கலிலியோ ஆவணங்களின் இத்தாலிய தேசியப் பதிப்பு (Antonio Favaro)',
    authenticity_note: 'கலிலியோவின் இறுதி நாட்களில் அவருடன் தங்கிப் பணிபுரிந்த விவியானி எழுதிய வாழ்க்கை வரலாற்று நூல். பீசா பெருங்கோவிலில் 17 வயதான கலிலியோ ஆடும் விளக்கை உற்று நோக்கி, தன் நாடித்துடிப்பைக் கொண்டு அலைவு நேரத்தை அளந்து ஊசல் விதியைக் கண்டறிந்த வரலாற்று நிகழ்வு இதில் பதிவு செய்யப்பட்டுள்ளது.'
  },
  'science-5-fleming-miracle-mold': {
    source_book: 'பிரிட்டிஷ் ஜர்னல் ஆஃப் எக்ஸ்பெரிமென்டல் பேத்தாலஜி (British Journal of Experimental Pathology, 1929) & நோபல் பரிசு விரிவுரை (1945)',
    source_author: 'சர் அலெக்சாண்டர் ஃபிளெமிங் (Sir Alexander Fleming, FRS, FRCS)',
    source_year: '1929 / 1945',
    source_chapter: 'ஆய்விதழ் தொகுதி 10, இதழ் 3, பக்கங்கள் 226–236; நோபல் பரிசு விரிவுரை (டிசம்பர் 11, 1945)',
    source_edition: 'செயிண்ட் மேரி மருத்துவமனை மருத்துவக் கல்லூரி ஆய்வுக் காப்பகம் & நோபல் அறக்கட்டளை ஆவணங்கள்',
    authenticity_note: '1928 ஆகஸ்ட்–செப்டம்பரில் லண்டன் செயிண்ட் மேரி மருத்துவமனை ஆய்வகத்தில் ஸ்டேஃபிளோகாக்கஸ் பாக்டீரியா தட்டில் தவறுதலாகப் படிந்த பென்சிலியம் நோட்டேட்டம் பூஞ்சை, பாக்டீரியாக்களை அழித்து வளையத்தை உருவாக்கியதை ஃபிளெமிங் தனது மூல ஆய்வுக் கட்டுரையாக 1929-இல் வெளியிட்டார். மனிதகுலத்தைக் காத்த பென்சிலின் மருந்து உருவான உண்மை வரலாறு இது.'
  }
};

const languages = ['en', 'ta', 'hi', 'zh', 'ml', 'te', 'kn', 'mr', 'ur'];

for (const lang of languages) {
  const colPath = path.resolve(`data/${lang}/collections/${lang}_science-stories.json`);
  if (!fs.existsSync(colPath)) continue;

  const stories = JSON.parse(fs.readFileSync(colPath, 'utf8'));
  const updatedStories = stories.map(s => {
    const meta = lang === 'ta' ? sourcesTa[s.id] : sourcesEn[s.id];
    if (!meta) return s;

    return {
      ...s,
      source_book: meta.source_book,
      source_author: meta.source_author,
      source_year: meta.source_year,
      source_chapter: meta.source_chapter,
      source_edition: meta.source_edition,
      authenticity_note: meta.authenticity_note,
      source: `${meta.source_author}, ${meta.source_book} (${meta.source_year})`
    };
  });

  fs.writeFileSync(colPath, JSON.stringify(updatedStories, null, 2), 'utf8');
  console.log(`Updated ${colPath}`);

  // Also update public/data/collections
  const pubPath = path.resolve(`public/data/collections/${lang}_science-stories.json`);
  fs.writeFileSync(pubPath, JSON.stringify(updatedStories, null, 2), 'utf8');
  console.log(`Updated ${pubPath}`);

  // Update data/${lang}/stories-${lang}.json
  const allStoriesPath = path.resolve(`data/${lang}/stories-${lang}.json`);
  if (fs.existsSync(allStoriesPath)) {
    const allStories = JSON.parse(fs.readFileSync(allStoriesPath, 'utf8'));
    const allUpdated = allStories.map(s => {
      const found = updatedStories.find(us => us.id === s.id);
      return found ? { ...s, ...found } : s;
    });
    fs.writeFileSync(allStoriesPath, JSON.stringify(allUpdated, null, 2), 'utf8');
    console.log(`Updated ${allStoriesPath}`);
  }

  // Update data/${lang}/manifest-${lang}.json
  const manifestPath = path.resolve(`data/${lang}/manifest-${lang}.json`);
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    const manifestUpdated = manifest.map(s => {
      const found = updatedStories.find(us => us.id === s.id);
      if (found) {
        return {
          ...s,
          source_book: found.source_book,
          source_author: found.source_author,
          source_year: found.source_year,
          source_chapter: found.source_chapter,
          authenticity_note: found.authenticity_note,
          source: found.source
        };
      }
      return s;
    });
    fs.writeFileSync(manifestPath, JSON.stringify(manifestUpdated, null, 2), 'utf8');
    console.log(`Updated ${manifestPath}`);
  }
}

console.log('Successfully enriched all science stories with authentic book sources!');
