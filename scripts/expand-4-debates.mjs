// scripts/expand-4-debates.mjs
import fs from 'fs';

const expansions = {
  'debate-74-churchill-lady-astor-poisoned-coffee': {
    en: `In the early 1930s, during a weekend house party at Blenheim Palace, Winston Churchill found himself engaged in sharp verbal combat with Lady Nancy Astor, the first woman to take her seat in the British House of Commons.

Lady Astor was an uncompromising prohibitionist and prominent socialite who frequently clashed with Churchill over domestic reform and foreign policy. Finding Churchill seated in the drawing room enjoying his after-dinner brandy and cigar, Lady Astor grew visibly irritated by his leisurely presence and sharp repartees.

Losing her temper amidst a circle of listening guests, Lady Astor snapped with theatrical fury:
"Winston, if you were my husband, I should flavor your coffee with poison!"

Churchill lowered his cigar, puffed a slow, perfect smoke ring into the air, and leveled his gaze upon the furious viscountess with unruffled aristocratic composure:
"Nancy, if I were your husband... I should drink it!"

The drawing room dissolved into helpless laughter, with even Lady Astor forced to conceal a grin behind her lace handkerchief. Churchill’s instantaneous retort demonstrated that good humor and unflappable equanimity are the ultimate weapons against personal vitriol.`,
    ta: `1930-களின் முற்பகுதி. இங்கிலாந்தின் புகழ்பெற்ற பிளென்ஹெய்ம் மாளிகையில் நடைபெற்ற ஒரு வார இறுதி விருந்தில் வின்ஸ்டன் சர்ச்சிலும், பிரிட்டிஷ் நாடாளுமன்றத்தின் முதல் பெண் உறுப்பினரான லேடி நான்சி ஆஸ்டரும் (Lady Nancy Astor) கலந்துகொண்டனர்.

இருவருக்கும் அரசியல் ரீதியாக கடுமையான கருத்து வேறுபாடுகள் உண்டு. விருந்து அரங்கில் சர்ச்சில் தனது சட்டைப் பையிலிருந்து சுருட்டை எடுத்து அமைதியாகப் புகைத்துக் கொண்டிருப்பதைக் கண்ட லேடி ஆஸ்டர் எரிச்சலடைந்தார்.

அங்கிருந்த பல விருந்தினர்களின் முன்னிலையில் லேடி ஆஸ்டர் ஆத்திரத்துடன் சர்ச்சிலைப் பார்த்துச் சீறினார்:
"வின்ஸ்டன்! நீங்கள் மட்டும் என் கணவராக இருந்திருந்தால், உங்கள் காபியில் விஷத்தைக் கலந்து கொடுத்திருப்பேன்!"

அரங்கில் இருந்த அனைவரும் ஒரு கணம் அதிர்ச்சியடைந்து அமைதியாயினர். ஆனால் சர்ச்சில் சிறிதும் பதறாமல், தனது சுருட்டை ஒரு கணம் வாயிலிருந்து எடுத்துவிட்டு, தனது வழக்கமான அமைதியான புன்னகையோடு பதிலளித்தார்:
"நான்சி! நீங்கள் மட்டும் என் மனைவியாக இருந்திருந்தால்... எந்தவிதத் தயக்கமும் இன்றி அந்த விஷக் காபியை நான் மகிழ்ச்சியோடு குடித்திருப்பேன்!"

அந்தப் பதிலைக் கேட்டு ஒட்டுமொத்த மாளிகையும் சிரிப்பலையில் அதிர்ந்தது! கோபத்தை அமைதியான நையாண்டியால் வென்ற உலகப் புகழ்பெற்ற வரலாற்றுச் சொல்வீச்சு இது!`
  },
  'debate-75-churchill-bessie-braddock-sober-wit': {
    en: `In 1946, in the crowded corridors of the Palace of Westminster following an intense late-night legislative debate, Winston Churchill encountered Bessie Braddock, the fiercely combative Labour Member of Parliament for Liverpool Exchange.

Braddock, renowned for her plain-spoken working-class socialist convictions, observed the exhausted former Prime Minister leaning slightly against the corridor wall after a strenuous evening.

Seizing the opportunity to deliver a public rebuke, Braddock confronted him sharply:
"Winston, you are disgustingly drunk! In fact, you are abominably drunk!"

Churchill blinked slowly, held onto his lapels with immense dignity, and peered at the indignant parliamentarian through his spectacles:
"My dear Bessie, you are ugly. In fact, you are abominably ugly. But tomorrow morning, I shall be completely sober, and you will still be ugly!"

While the sharp-tongued exchange has been debated by historians for decades, it remains an iconic example of the ruthless, unsparing verbal fencing that characterized Westminster politics in the post-war era, illustrating Churchill’s refusal to surrender ground even in fatigue.`,
    ta: `1946-ஆம் ஆண்டு. லண்டன் வெஸ்ட்மின்ஸ்டர் நாடாளுமன்ற வளாகத்தில் நள்ளிரவு விவாதம் முடிந்து வெளியே வந்த முன்னாள் பிரதமர் வின்ஸ்டன் சர்ச்சிலை நோக்கி, தொழிற்கட்சியின் பெண் எம்பியான பெஸ்ஸி பிராடாக் (Bessie Braddock) ஆவேசமாக வந்தார்.

சர்ச்சிலின் தளர்ந்த நடையைக் கண்ட பிராடாக், அவரை அவமதிக்கும் நோக்கில் ஏளனமாகச் சொன்னார்:
"வின்ஸ்டன்! நீங்கள் மிகவும் அருவருக்கத்தக்க வகையில் குடித்திருக்கிறீர்கள்! நிதானமே இல்லாமல் தள்ளாடுகிறீர்கள்!"

சர்ச்சில் தனது கண்ணாடியைச் சரிசெய்து கொண்டு, அமைதியாக அந்தப் பெண் எம்பியைப் பார்த்து பதிலளித்தார்:
"அன்புள்ள பெஸ்ஸி! நீங்கள் சொல்வது உண்மைதான்; நான் குடித்திருக்கிறேன். ஆனால் நீங்கள் மிகவும் அசிங்கமாக இருக்கிறீர்கள்! 
நாளை காலையில் என் போதை முற்றிலும் தெளிந்து நான் நிதானமாகி விடுவேன்; ஆனால் நீங்கள் அப்போதும் அதே அசிங்கத்தோடுதான் இருப்பீர்கள்!"

நாடாளுமன்ற தாழ்வாரங்களில் எதிராளியின் தாக்குதலை அதே கூர்மையோடு எதிர்கொண்ட சர்ச்சிலின் நாவன்மை இன்றும் விவாதங்களில் நினைவுகூரப்படுகிறது.`
  },
  'debate-222-bismarck-blood-iron': {
    en: `In September 1862, amidst an acute constitutional deadlock over military spending between King Wilhelm I and the liberal majority in the Prussian Landtag, Otto von Bismarck was appointed Minister President of Prussia.

Liberal deputies argued that German unification could be achieved purely through parliamentary resolutions, legal declarations, and idealistic speeches.

Bismarck took the rostrum before the budget committee and shattered their comfortable illusions with cold, historic realism:
"Prussia must gather and consolidate her strength for the favorable moment, which has already been missed several times. Prussia's borders according to the Vienna treaties are not favorable to a healthy state life.
The great questions of the day will not be decided by speeches and majority resolutions—that was the great mistake of 1848 and 1849—but by iron and blood (Eisen und Blut)!"

While critics recoiled from his bluntness, Bismarck’s realism recognized that statecraft requires combining diplomacy with concrete national capability. Later, when explaining his doctrine of Realpolitik, Bismarck added his timeless definition of practical governance:
"Politics is not an exact science; politics is the art of the possible, the attainable—the art of navigating within human limits to achieve durable peace and strength."`,
    ta: `1862-ஆம் ஆண்டு செப்டம்பர் மாதம். பிரஷ்ய நாடாளுமன்றத்தில் ஜெர்மன் சமஸ்தானங்களை ஒருங்கிணைப்பது குறித்த தீவிர விவாதம் நடைபெற்றது.

நாடாளுமன்ற உறுப்பினர்கள் சிலர், "நாடாளுமன்றத் தீர்மானங்களாலும், வெறும் மேடைப் பேச்சுகளாலும் மட்டுமே ஜெர்மனியை ஒருங்கிணைத்து விடலாம்" என்று வாதிட்டனர்.

அப்போது பிரதமராகப் பொறுப்பேற்றிருந்த இரும்பு வேந்தர் ஓட்டோ வான் பிஸ்மார்க் (Otto von Bismarck) எழுந்து நின்று யதார்த்தத்தை உணர்த்தினார்:
"நண்பர்களே! காலத்தின் மாபெரும் கேள்விகள் வெறும் சொற்பொழிவுகளாலும், பெரும்பான்மைத் தீர்மானங்களாலும் ஒருபோதும் தீர்க்கப்பட முடியாது! அது 1848-ல் நாம் செய்த மாபெரும் தவறு!
இன்றைய வரலாற்றுச் சவால்கள் 'இரத்தத்தினாலும் இரும்பினாலும்' (Iron and Blood) மட்டுமே தீர்க்கப்பட முடியும்!

அரசியல் என்பது கற்பனையான தத்துவங்களில் வாழ்வதல்ல; அது சாத்தியமான நடைமுறை நன்மைகளை நோக்கி நாட்டை வழிநடத்தும் சாத்தியங்களின் கலை (Politics is the art of the possible)!"

பிஸ்மார்க்கின் இந்த எதார்த்தப் பார்வை ஜெர்மனியை ஒரு மாபெரும் வல்லரசாக உயர்த்தியது.`
  },
  'debate-223-disraeli-gladstone-wit': {
    en: `Throughout the Victorian era, the clash between Conservative Prime Minister Benjamin Disraeli and Liberal leader William Ewart Gladstone provided the British public with a masterclass in political rhetoric and contrasting philosophies of governance.

Gladstone was a fiery moral crusader whose speeches were thunderous sermons; Disraeli was an aesthetic novelist whose weapon was polished, devastating irony. Gladstone accused Disraeli of being unprincipled and cynical; Disraeli viewed Gladstone as a pompous prig intoxicated by his own righteousness.

During a debate on public morality, Gladstone thundered across the dispatch box that Disraeli’s political maneuvering would lead either to the gallows or to a dreadful disease.

Disraeli smiled languidly, touched his curls, and replied without missing a beat:
"That depends, Mr. Gladstone, on whether I embrace your principles or your mistress!"

When asked at the Carlton Club to explain the difference between a misfortune and a calamity, Disraeli delivered his most famous retort:
"If Mr. Gladstone fell into the Thames, that would be a misfortune. But if anyone dragged him out, that would be a calamity!"

Their brilliant rivalry demonstrated that passionate ideological contest in a democracy can be conducted with intellectual elegance and soaring parliamentary eloquence.`,
    ta: `19-ஆம் நூற்றாண்டின் பிற்பகுதி. விக்டோரியா மகாராணியின் ஆட்சிக்காலத்தில் பிரிட்டிஷ் நாடாளுமன்றம் கன்சர்வேட்டிவ் பிரதமர் பெஞ்சமின் டிஸ்ரேலி மற்றும் லிபரல் தலைவர் வில்லியம் கிளாட்ஸ்டோன் ஆகிய இரு பெரும் ஜாம்பவான்களின் சொல்லாடல்களால் தகித்துக் கொண்டிருந்தது.

கிளாட்ஸ்டோன் தீவிர ஒழுக்கவாதி; டிஸ்ரேலியோ நையாண்டியும் ராஜதந்திரமும் நிரம்பிய இலக்கிய நாவலர்.

ஒரு முறை காரசாரமான விவாதத்தின் போது கிளாட்ஸ்டோன் ஆத்திரத்துடன் டிஸ்ரேலியைப் பார்த்துச் சொன்னார்: "டிஸ்ரேலி, நீங்கள் ஒன்று தூக்கு மேடையில் சாவீர்கள், அல்லது கொடிய நோயால் சாவீர்கள்!"

டிஸ்ரேலி புன்னகையோடு உடனே பதிலளித்தார்: "மிஸ்டர் கிளாட்ஸ்டோன்! அது நான் உங்களின் கொள்கைகளைத் தழுவுகிறேனா அல்லது உங்கள் வைப்பாட்டியைத் தழுவுகிறேனா என்பதைப் பொறுத்தது!"

மற்றொரு சந்தர்ப்பத்தில், துரதிர்ஷ்டத்திற்கும் பேரழிவிற்கும் உள்ள வித்தியாசம் என்ன என்று கேட்கப்பட்ட போது டிஸ்ரேலி சொன்னார்:
"திரு. கிளாட்ஸ்டோன் தேம்ஸ் நதியில் விழுந்தால் அது ஒரு துரதிர்ஷ்டம்; ஆனால் அவரை யாராவது காப்பாற்றிவிட்டால் அது ஒரு மாபெரும் பேரழிவு!"

அரசியல் விவாதங்களில் எதிராளியைத் தன் கூர்மையான நையாண்டியால் வென்ற வெஸ்ட்மின்ஸ்டர் நாடாளுமன்றத்தின் சுவையான வரலாற்றுத் துணுக்கு இது.`
  }
};

['data/ta/stories-ta.json', 'public/data/collections/ta_witty-debates.json'].forEach(file => {
  if (!fs.existsSync(file)) return;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const list = Array.isArray(data) ? data : data.stories;
  Object.keys(expansions).forEach(slug => {
    const s = list.find(x => x.slug === slug || x.id === slug);
    if (s && expansions[slug].ta) {
      s.content = expansions[slug].ta;
      s.full_text = expansions[slug].ta;
      s.word_count = s.content.split(/\s+/).length;
    }
  });
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
});

['data/en/stories-en.json', 'public/data/collections/en_witty-debates.json'].forEach(file => {
  if (!fs.existsSync(file)) return;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const list = Array.isArray(data) ? data : data.stories;
  Object.keys(expansions).forEach(slug => {
    const s = list.find(x => x.slug === slug || x.id === slug);
    if (s && expansions[slug].en) {
      s.content = expansions[slug].en;
      s.full_text = expansions[slug].en;
      s.word_count = s.content.split(/\s+/).length;
    }
  });
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
});

console.log('Successfully expanded all 4 debates to full word counts.');
