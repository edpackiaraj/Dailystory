import fs from 'node:fs';

// Update en.json
const enPath = 'data/legal/en.json';
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

en.pages.contact.founder.aboutFounder = `With over two decades of experience in educational technology, scriptwriting, instructional audio production, and digital curriculum development, Edward Packiaraj is dedicated to making quality educational resources and digital tools accessible to learners from diverse backgrounds.

His professional journey includes broadcasting and educational media contributions with All India Radio (AIR), IGNOU GyanVani FM, and the Department of Educational Technology at Bharathidasan University. Drawing on this multidisciplinary experience, he combines communication, instructional design, and emerging technologies to create meaningful and engaging learning experiences.

As an independent creator and developer, he also designs and develops free digital tools and web-based utilities that help people learn, create, and work more effectively. His focus is on building practical, accessible solutions that reduce barriers to technology and make useful digital resources available to everyone.

A strong advocate of Open Educational Resources (OER), Edward is passionate about harnessing Artificial Intelligence, e-learning, and digital content development to transform education and expand access to knowledge.

His vision is to build inclusive, learner-centred digital learning environments and freely accessible tools—without paywalls, subscription fees, or intrusive data tracking.

Through his work, he continues to champion the idea that quality education and useful technology should be open, accessible, engaging, and available to all.`;

// Add packiam.wordpress.com and edwardpackiaraj.blogspot.com to sisterProjects
const hasEdward = en.pages.contact.sisterProjects.some(p => p.url && p.url.includes('edwardpackiaraj'));
if (!hasEdward) {
  en.pages.contact.sisterProjects.unshift({
    name: "S. Edward Packiaraj — Personal Blog & Portfolio",
    url: "https://edwardpackiaraj.blogspot.com/",
    tagline: "Consultant – Educational Media Technologies, Trichy",
    description: "Personal academic portfolio, invited lectures, educational technology insights, publications, and consultancy services by Dr. S. Edward Packiaraj."
  });
}

const hasPackiam = en.pages.contact.sisterProjects.some(p => p.url && p.url.includes('packiam.wordpress'));
if (!hasPackiam) {
  en.pages.contact.sisterProjects.push({
    name: "Packiam Web Directory (OER)",
    url: "https://packiam.wordpress.com/",
    tagline: "6,000+ Curated Open Educational Resources",
    description: "A comprehensive, free directory of Open Educational Resources (OER) actively curated since 2008, featuring over 6,000 categorized web links for educators, researchers, and students."
  });
}

fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');
console.log('✓ Updated data/legal/en.json contact section');

// Update ta.json
const taPath = 'data/legal/ta.json';
const ta = JSON.parse(fs.readFileSync(taPath, 'utf8'));

ta.pages.contact = {
  title: "தொடர்பு கொள்ள – Daily Tale",
  h1: "எஸ். எட்வர்ட் பாக்கியராஜ் & Daily Tale ஆசிரியர் குழுவைத் தொடர்பு கொள்ள",
  metaDescription: "எஸ். எட்வர்ட் பாக்கியராஜ் மற்றும் Daily Tale குழுவினருடன் தொடர்பு கொள்ளவும். கல்வி ஊடகத் தொழில்நுட்ப ஆலோசகர், ரோசரி இ-சொல்யூஷன்ஸ், திருச்சி. Cell: +91 97864 24927, Email: edpackiaraj@gmail.com.",
  summary: "கேள்விகள், கருத்துகள் மற்றும் ஒத்துழைப்பு ஆலோசனைகள் எப்போதும் வரவேற்கப்படுகின்றன. உங்களது கல்வி மற்றும் கதைப் பயணத்தில் உதவ நாங்கள் எப்போதும் தயாராக உள்ளோம்!",
  aboutFounder: `கல்வித் தொழில்நுட்பம், திரைக்கதை எழுதுதல், கற்பித்தல் ஆடியோ உருவாக்கம் மற்றும் எண்ணிமப் பாடத்திட்ட வடிவமைப்பில் இருபது ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், பல்வேறு பின்னணிகளைக் கொண்ட கற்போருக்கும் உயர்தரக் கல்வி வளங்களையும் எண்ணிமக் கருவிகளையும் கொண்டு சேர்ப்பதில் எட்வர்ட் பாக்கியராஜ் அர்ப்பணிப்புடன் செயல்பட்டு வருகிறார்.

அவரது தொழில்முறைப் பயணத்தில் அகில இந்திய வானொலி (AIR), இந்திரா காந்தி தேசிய திறந்தநிலை பல்கலைக்கழகத்தின் ஞானவாணி எஃப்எம் (IGNOU GyanVani FM), மற்றும் பாரதிதாசன் பல்கலைக்கழகத்தின் கல்வித் தொழில்நுட்பத் துறை ஆகியவற்றின் வாயிலாக ஆற்றிய வானொலி ஒலிபரப்பு மற்றும் கல்வி ஊடகப் பங்களிப்புகள் அடங்கும். இத்தகைய பன்முக அனுபவத்தின் அடிப்படையில், தகவல் தொடர்பு, கற்பித்தல் வடிவமைப்பு மற்றும் வளர்ந்து வரும் தொழில்நுட்பங்களை இணைத்து ஆழமான மற்றும் ஈர்க்கக்கூடிய கற்றல் அனுபவங்களை உருவாக்குகிறார்.

ஒரு சுயாதீனப் படைப்பாளராகவும் மென்பொருள் உருவாக்குநராகவும், மக்கள் எளிதாகக் கற்கவும், படைக்கவும், பணியாற்றவும் உதவும் இலவச எண்ணிமக் கருவிகளையும் வலைத்தளப் பயன்பாடுகளையும் அவர் வடிவமைத்து வழங்கி வருகிறார். தொழில்நுட்பத் தடைகளைக் குறைத்து, அனைவருக்கும் பயனுள்ள எண்ணிம வளங்கள் இலவசமாகக் கிடைப்பதை உறுதி செய்வதே இவரது முக்கிய நோக்கமாகும்.

திறந்த கல்வி வளங்களின் (OER - Open Educational Resources) தீவிர ஆதரவாளரான எட்வர்ட், கல்வியை மறுசீரமைக்கவும் அறிவுக்கான வாய்ப்புகளை விரிவாக்கவும் செயற்கை நுண்ணறிவு (AI), மின்-கற்றல் (e-learning) மற்றும் எண்ணிம உள்ளடக்க உருவாக்கம் ஆகியவற்றைப் பயன்படுத்துவதில் மிகுந்த ஆர்வம் கொண்டவர்.

கட்டணச் சுவர்கள், சந்தாக் கட்டணங்கள் அல்லது பயனர்களின் தரவைக் கண்காணிக்கும் நிரல்கள் ஏதுமின்றி, அனைவரையும் உள்ளடக்கிய, மாணவர் மைய எண்ணிம கற்றல் சூழல்களையும் இலவசக் கருவிகளையும் உருவாக்குவதே இவரது தொலைநோக்குப் பார்வையாகும்.

தமது அரிய பணிகளின் வாயிலாக, தரமான கல்வியும் பயனுள்ள தொழில்நுட்பமும் திறந்ததாகவும், எளிதில் அணுகக்கூடியதாகவும், சுவாரஸ்யமானதாகவும், அனைவருக்கும் கிடைக்கக்கூடியதாகவும் இருக்க வேண்டும் என்ற உயரிய இலட்சியத்தை அவர் தொடர்ந்து முன்னெடுத்து வருகிறார்.`,
  founder: {
    name: "எஸ். எட்வர்ட் பாக்கியராஜ்",
    role: "கல்வி ஊடகத் தொழில்நுட்ப ஆலோசகர், ரோசரி இ-சொல்யூஷன்ஸ், திருச்சி",
    email: "edpackiaraj@gmail.com",
    phone: "+91 9786424927",
    location: "தமிழ்நாடு, இந்தியா"
  },
  sisterProjects: [
    {
      name: "எஸ். எட்வர்ட் பாக்கியராஜ் — தனிநபர் வலைப்பதிவு",
      url: "https://edwardpackiaraj.blogspot.com/",
      tagline: "கல்வி ஊடகத் தொழில்நுட்ப ஆலோசகர், திருச்சி",
      description: "முழுமையான தொழில்முறை சுயவிவரம், சிறப்புச் சொற்பொழிவுகள், கல்வித் தொழில்நுட்பக் கட்டுரைகள் மற்றும் ஆலோசனைகள்."
    },
    {
      name: "பாக்கியம் இணையக் களஞ்சியம் (OER)",
      url: "https://packiam.wordpress.com/",
      tagline: "6,000+ திறந்த கல்வி வளங்களின் களஞ்சியம்",
      description: "2008 முதல் தொடர்ந்து செயல்பட்டு வரும் 6,000-க்கும் மேற்பட்ட திறந்த கல்வி வளங்களின் (OER) இணையக் களஞ்சியம்."
    },
    {
      name: "இங்கிலீஷ் பேசலாம் (EnglishPesalaam)",
      url: "https://englishpesalaam.blogspot.com/",
      tagline: "இலவச உரையாடல் ஆங்கிலப் பயிற்சி கூடம்",
      description: "180+ நிஜ வாழ்க்கைச் சூழல்கள், 2,100+ வினாடி வினாக்கள் மற்றும் 24/7 உரையாடல் பயிற்சி."
    },
    {
      name: "விஞ்ஞாநம் (Vinganam)",
      url: "https://vinganam.blogspot.com/",
      tagline: "அறிவியல் கட்டுரைகள் & பாக்கியம் AI கருவிகள்",
      description: "அறிவியல், தமிழ் கலாச்சாரம் மற்றும் கல்வித் தொழில்நுட்பக் கட்டுரைகள், ஆசிரியர்களுக்கான 11 இலவச AI கருவிகள்."
    }
  ],
  sections: [
    {
      heading: "எமது அணுகுமுறை",
      content: "வகுப்பறைக்கான கதைகளைத் தேடும் ஆசிரியர்கள், பண்பாட்டு வழக்காறுகளை ஆராயும் ஆய்வாளர்கள், பெற்றோர்கள் என அனைவரது கருத்துகளையும் ஆலோசனைகளையும் நாங்கள் மனதார வரவேற்கிறோம்."
    },
    {
      heading: "நேரடித் தொடர்பு",
      content: "நிறுவனர் எஸ். எட்வர்ட் பாக்கியராஜ் அவர்களை edpackiaraj@gmail.com என்ற மின்னஞ்சல் அல்லது +91 9786424927 என்ற வாட்ஸ்அப் / தொலைபேசி எண்ணில் நேரடியாகத் தொடர்பு கொள்ளலாம்."
    }
  ]
};

fs.writeFileSync(taPath, JSON.stringify(ta, null, 2), 'utf8');
console.log('✓ Updated data/legal/ta.json contact section');
