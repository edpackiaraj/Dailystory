import fs from 'fs';

const taFiles = ['data/ta/stories-ta.json', 'public/data/collections/ta_witty-debates.json'];
taFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const list = Array.isArray(data) ? data : data.stories;
  const s = list.find(x => x.id === 'debate-1-anna-yale-because-sentence');
  if (s) {
    s.content = s.content.replace(
      /அமெரிக்க ஜனாதிபதிகள், நோபல் அறிஞர்களுக்கு மட்டுமே வழங்கப்படும் அந்த விருதைப் பெறும் முதல் அமெரிக்கரல்லாத ஆசியத் தலைவர் அண்ணாதான்!/,
      'உலகத் தலைவர்களுக்கும் பொது நிர்வாக அறிஞர்களுக்கும் மாணவர்களிடையே ஆட்சி நெறியை வளர்க்க வழங்கப்படும் அந்த உயரிய கௌரவப் பொறுப்பை ஏற்று அங்கு உரையாற்ற அண்ணா சென்றிருந்தார். தமிழ்நாட்டின் முதல்வராகப் பொறுப்பேற்றிருந்த அண்ணாவின் ஆழ்ந்த ஆங்கிலப் புலமையும் எளிய தோற்றமும் அரங்கில் அனைவரையும் ஈர்த்தது.'
    );
    s.content = s.content.replace(
      /மெலிந்த உருவமும், தோளில் எளிமையான கதர் துண்டும் அணிந்து நின்ற அண்ணாவை சில அமெரிக்க மாணவர்கள் சற்று மேட்டிமைத்தனத்தோடு பார்த்தனர்\./,
      'எளிமையான தோற்றத்தில் கம்பீரமாக நின்ற அண்ணாவின் தர்க்க வாதத்தைக் கேட்க பேராசிரியர்களும் மாணவர்களும் மிகுந்த ஆர்வத்தோடு காத்திருந்தனர்.'
    );
    if (s.full_text) s.full_text = s.content;
    if (s.quiz && s.quiz[1]) {
      s.quiz[1].question = '1968-ல் பேரறிஞர் அண்ணா அமெரிக்க ஏல் பல்கலைக்கழகத்தில் பெற்ற புகழ்பெற்ற கௌரவம் எது?';
      s.quiz[1].options = ['Chubb Fellowship (சப் ஃபெல்லோஷிப்)', 'Fulbright Fellowship', 'Rhodes Scholarship', 'Rockefeller Fellowship'];
      s.quiz[1].answerIndex = 0;
      s.quiz[1].hint = '1968-ல் ஏல் பல்கலைக்கழகத்தின் திமோதி ட்வைட் கல்லூரியில் அண்ணாவுக்கு சப் ஃபெல்லோஷிப் கௌரவம் வழங்கப்பட்டது.';
    }
  }
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
});

const enFiles = ['data/en/stories-en.json', 'public/data/collections/en_witty-debates.json'];
enFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const list = Array.isArray(data) ? data : data.stories;
  const s = list.find(x => x.id === 'debate-1-anna-yale-because-sentence');
  if (s) {
    s.content = s.content.replace(
      /an honour traditionally reserved for US Presidents, Nobel laureates, and world-shaping diplomats\. Anna was the first non-American Asian statesman ever invited to hold the fellowship\./,
      'an appointment endowed at Yale\'s Timothy Dwight College to bring distinguished public leaders and international statesmen into direct intellectual exchange with university students.'
    );
    s.content = s.content.replace(
      /Some American students observed the diminutive, khadi-clad leader with curiosity, wondering whether this regional politician from the Global South possessed the sophisticated command of English grammar required to address an elite Ivy League gathering\./,
      'In Tamil oratorical history and public memory, this American tour is famously remembered for an extraordinary linguistic exchange celebrating Anna\'s effortless command of English grammar and classical wit.'
    );
    if (s.full_text) s.full_text = s.content;
    if (s.quiz && s.quiz[1]) {
      s.quiz[1].question = 'Which prestigious appointment was conferred upon Arignar Anna by Yale University in 1968?';
      s.quiz[1].options = ['Chubb Fellowship', 'Fulbright Fellowship', 'Rhodes Scholarship', 'MacArthur Fellowship'];
      s.quiz[1].answerIndex = 0;
      s.quiz[1].hint = 'Anna visited Yale University as a Chubb Fellow in 1968 to interact with faculty and students on public governance.';
    }
  }
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
});

console.log('Story 1 successfully fact-checked and updated in TA and EN.');
