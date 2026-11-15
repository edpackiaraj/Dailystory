import fs from 'fs';

// 1. Update data/legal/en.json
const enPath = 'data/legal/en.json';
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

en.lastUpdated = '2026-11-15';

en.pages.copyright = {
  title: "Copyright & Intellectual Property Policy",
  h1: "Intellectual Property, Public Domain, and Fair Use Policy",
  metaDescription: "Daily Tale's comprehensive copyright policy covering public domain folklore, historical fair use for science and leader debates, and creative commons educational licenses.",
  sections: [
    {
      "heading": "1. Public Domain Folklore and Classical Heritage",
      "content": "Traditional folktales, fables, and ancient literatures featured on Daily Tale—including Aesop's Fables, Panchatantra, Jataka Tales, Vikram & Vetal, Tenali Rama, Birbal anecdotes, Grimm's Fairy Tales, Hans Christian Andersen tales, and Arabian Nights—belong to the worldwide public domain. These foundational world stories are freely retold and adapted for modern educational and cultural literacy."
    },
    {
      "heading": "2. Historical Science Chronicles & Leader Debates (Fair Use & OER)",
      "content": "The chronicles in '200 Authentic Science Stories' and 'Witty Debates & Historic Repartees' are educational historical non-fiction accounts based on documented public records, speeches, biographies, and academic archives. These retellings are authored under academic Fair Use principles and Open Educational Resources (OER) frameworks, designed to cultivate scientific curiosity, moral reasoning, and parliamentary eloquence among students and lifelong learners worldwide."
    },
    {
      "heading": "3. Pedagogical Content and Creative Commons Licensing",
      "content": "The original literary adaptations, modern translations across 9 languages, curated pedagogical quizzes, vocabulary glossaries, classroom discussion prompts, editorial essays, and responsive UI components are the creative works of Daily Tale and its Chief Editor, Dr. S. Edward Packiaraj. Educational non-commercial reuse is encouraged under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)."
    },
    {
      "heading": "4. Notice and Takedown Procedure (DMCA & Global Standards)",
      "content": "Daily Tale adheres strictly to copyright laws and respects intellectual property rights. If you are a copyright holder or designated agent and believe that any text, image, or audio on our site infringes your rights, please send a formal notice to our editorial office at edpackiaraj@gmail.com or editor@dailystory.pages.dev. Please include: (a) Identification of the work claimed to be infringed; (b) The specific URL on Daily Tale; (c) Your full contact details; and (d) A statement of good faith belief. Legitimate inquiries receive an immediate acknowledgement within 24 hours and resolution within 48 hours."
    }
  ]
};

en.pages.privacy = {
  title: "Privacy Policy & Reader Data Protection",
  h1: "Reader Privacy, COPPA Compliance, and Edge Telemetry",
  metaDescription: "Daily Tale's privacy policy: Zero cookies, no advertising, anonymous edge hit counter, COPPA reader protection, and commitment to student privacy.",
  sections: [
    {
      "heading": "1. Absolute Commitment to Reader Privacy",
      "content": "Daily Tale is designed from the ground up as a safe, distraction-free educational reading platform. We do not require account registration, do not collect personal names or phone numbers, and never sell or monetize reader data. We do not use third-party marketing cookies, behavioural trackers, or targeted advertising networks."
    },
    {
      "heading": "2. Edge Telemetry and Anonymous Hit Counter",
      "content": "Daily Tale is hosted on Cloudflare's global edge network (Cloudflare Pages and Workers). To display an aggregate, anonymous live reader count (Hit Counter), our edge worker registers an anonymous visit tally stored securely in Cloudflare KV. This process operates without persistent tracking cookies, without fingerprinting, and without logging personal IP addresses. The counter measures aggregate platform traffic strictly for server health and educational impact monitoring."
    },
    {
      "heading": "3. Child Protection & Student Privacy (COPPA & Global Standards)",
      "content": "Daily Tale is dedicated to the safety of young readers and fully complies with the Children's Online Privacy Protection Act (COPPA) and international student privacy norms. No personal identifiers are ever solicited from children. Local settings (such as text-to-speech voice preference, dark mode, font size, and bedtime reading mode) are saved solely inside the user's local browser storage (localStorage) and never transmitted to our servers."
    },
    {
      "heading": "4. Publisher & Editorial Contact",
      "content": "Daily Tale is published as an Open Educational Resource initiative curated by Dr. S. Edward Packiaraj, Consultant in Educational Media Technologies, Rosary e-Solutions, Tiruchirappalli, Tamil Nadu, India. For privacy inquiries or editorial questions, please contact edpackiaraj@gmail.com or editor@dailystory.pages.dev."
    }
  ]
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');

// 2. Update data/legal/ta.json
const taPath = 'data/legal/ta.json';
const ta = JSON.parse(fs.readFileSync(taPath, 'utf8'));

ta.lastUpdated = '2026-11-15';

ta.pages.copyright = {
  title: "பதிப்புரிமை & அறிவுசார் சொத்துரிமைக் கொள்கை",
  h1: "அறிவுசார் சொத்துரிமை, பொதுக் களம் மற்றும் நியாயப் பயன்பாட்டுக் கொள்கை",
  metaDescription: "Daily Tale தளத்தின் பதிப்புரிமைக் கொள்கை: பொதுக்கள நாடோடிக் கதைகள், வரலாற்று அறிவியல் மற்றும் விவாதப் பதிவுகளின் நியாயப் பயன்பாடு, கல்வி உரிமை உரிமங்கள்.",
  sections: [
    {
      "heading": "1. பொதுக் கள பாரம்பரியக் கதைகள்",
      "content": "Daily Tale தளத்தில் இடம்பெற்றுள்ள ஈசாப் கதைகள், பஞ்சதந்திரம், ஜாதகக் கதைகள், விக்கிரமாதித்தன்–வேதாளம், தெனாலிராமன், பீர்பால், கிரிம் சகோதரர்கள் மற்றும் ஆண்டர்சன் கதைகள் போன்ற தொன்மையான உலக இலக்கியங்கள் பொதுக் களத்தின் (Public Domain) கீழ் வருகின்றன. இவை மாணவர்களின் கல்வி மற்றும் சிந்தனை வளர்ச்சிக்காக உலகெங்கிலும் தடையின்றி மறுஆக்கம் செய்து பகிரப்படக்கூடியவை."
    },
    {
      "heading": "2. அறிவியல் வரலாறுகள் & தலைவர்களின் விவாதங்கள் (Fair Use & OER)",
      "content": "'200 அறிவியல் கண்டுபிடிப்புக் கதைகள்' மற்றும் 'விசித்திர விவாதங்கள்' ஆகிய தொகுப்புகளில் உள்ள பதிவுகள், வரலாற்று ஆவணங்கள், அதிகாரப்பூர்வ உரைகள் மற்றும் வாழ்க்கை வரலாற்றுப் பதிவுகளின் அடிப்படையில் மாணவர்களுக்கான கல்வி நோக்கத்துடன் மீளுருவாக்கம் செய்யப்பட்டுள்ளன. இவை கல்வி நியாயப் பயன்பாடு (Fair Use) மற்றும் திறந்த கல்வி வள (OER) நெறிமுறைகளுக்கு உட்பட்டு உருவாக்கப்பட்டுள்ளன."
    },
    {
      "heading": "3. கல்வி உள்ளடக்கமும் கிரியேட்டிவ் காமன்ஸ் உரிமமும்",
      "content": "இத்தளத்தில் உருவாக்கப்பட்டுள்ள அசல் தமிழ் உரைநடை, ஆங்கில மொழிபெயர்ப்புகள், கற்றல் வினாடி வினாக்கள், சொல்லகராதி, கலந்துரையாடல் வினாக்கள் மற்றும் வடிவமைப்பு ஆகியவை Daily Tale மற்றும் அதன் முதன்மை ஆசிரியர் முனைவர் எஸ். எட்வர்ட் பாக்கியராஜ் அவர்களின் அறிவுசார் பங்களிப்பாகும். இவை Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) உரிமத்தின் கீழ் பகிரப்படுகின்றன."
    },
    {
      "heading": "4. உரிமை கோரல் மற்றும் நீக்கல் நடைமுறை",
      "content": "பதிப்புரிமை குறித்த ஏதேனும் மாற்றுக் கருத்துக்கள் அல்லது கோரிக்கைகள் இருப்பின், எமது ஆசிரியர் குழுவை edpackiaraj@gmail.com அல்லது editor@dailystory.pages.dev என்ற மின்னஞ்சல் வழியே தொடர்பு கொள்ளலாம். உரிய விசாரணைகளுக்கு 24 மணி நேரத்திற்குள் பதில் அளிக்கப்பட்டு, 48 மணி நேரத்திற்குள் தீர்வு காணப்படும்."
    }
  ]
};

ta.pages.privacy = {
  title: "தனிநபர் தகவல் பாதுகாப்பு & வாசகர் நலக் கொள்கை",
  h1: "வாசகர் தகவல் பாதுகாப்பு, விளம்பரமின்மை மற்றும் எட்ஜ் கண்காணிப்பு நெறி",
  metaDescription: "Daily Tale தனியுரிமைக் கொள்கை: குக்கீகள் இல்லை, விளம்பரங்கள் இல்லை, அநாமதேய நேரலை வாசகர் எண்ணிக்கை, குழந்தைகள் தகவல் பாதுகாப்பு நெறிமுறைகள்.",
  sections: [
    {
      "heading": "1. வாசகர் தகவல் பாதுகாப்பிற்கான முழு உறுதி",
      "content": "Daily Tale தளம் வாசகர்களின் பாதுகாப்பான, கவனச்சிதறலற்ற வாசிப்பனுபவத்தை உறுதி செய்கிறது. பயனர்கள் தங்களின் பெயர், மின்னஞ்சல் அல்லது தொலைபேசி எண்ணைப் பதிவு செய்ய வேண்டிய அவசியமில்லை. வாசகர்களின் தனிப்பட்ட விவரங்கள் எதுவும் சேகரிக்கப்படுவதோ, விற்கப்படுவதோ அல்லது விளம்பர நிறுவனங்களுக்குப் பகிரப்படுவதோ இல்லை."
    },
    {
      "heading": "2. எட்ஜ் தொழில்நுட்பமும் அநாமதேய நேரலை எண்ணிக்கையும்",
      "content": "எமது தளம் Cloudflare Pages மற்றும் Cloudflare Edge Workers உள்கட்டமைப்பில் இயங்குகிறது. தளத்தின் நேரலை வாசகர் வருகை எண்ணிக்கையை (Hit Counter) பதிவு செய்ய, தனிநபர் அடையாளம் அறியப்படாத அநாமதேய எண்ணிக்கை மட்டுமே கிளவுட்ஃப்ளேர் கே.வி (Cloudflare KV) வழியே கணக்கிடப்படுகிறது. இதில் பயனர்களின் ஐபி முகவரியோ, குக்கீகளோ சேமிக்கப்படுவதில்லை."
    },
    {
      "heading": "3. மாணவர் மற்றும் குழந்தைகள் பாதுகாப்பு",
      "content": "Daily Tale தளம் குழந்தைகளுக்கான ஆன்லைன் பாதுகாப்பு நெறிமுறைகளை (COPPA) முழுமையாகப் பின்பற்றுகிறது. பயனரின் விருப்பத் தேர்வுகள் (எழுத்துரு அளவு, இரவு வாசிப்பு முறை, குரல் தேர்வு போன்றவை) பயனரின் சொந்த உலாவியிலேயே (localStorage) மட்டுமே தற்காலிகமாகச் சேமிக்கப்படுகின்றன."
    },
    {
      "heading": "4. ஆசிரியர் தொடர்பு விவரங்கள்",
      "content": "Daily Tale தளம் முனைவர் எஸ். எட்வர்ட் பாக்கியராஜ் (கல்வி ஊடகத் தொழில்நுட்ப ஆலோசகர், ரோசரி இ-சொல்யூஷன்ஸ், திருச்சிராப்பள்ளி, தமிழ்நாடு) அவர்களின் மேற்பார்வையில் திறந்த கல்வி வளமாக (OER) நிருவகிக்கப்படுகிறது. தொடர்புக்கு: edpackiaraj@gmail.com, editor@dailystory.pages.dev."
    }
  ]
};

fs.writeFileSync(taPath, JSON.stringify(ta, null, 2), 'utf8');
console.log('Successfully updated data/legal/en.json and data/legal/ta.json');
