// scripts/finalize-batch5.mjs
import fs from 'fs';
import path from 'path';

import { debatesBatch5_Ta as currentTa, debatesBatch5_En as currentEn } from './data-debates-batch5.mjs';

const more5_Ta = [
  {
    id: "debate-121-kalaignar-erode-vallalar-vadalur-periyar",
    slug: "debate-121-kalaignar-erode-vallalar-vadalur-periyar",
    title: "கலைஞர் கருணாநிதி: “ஈரோட்டு வள்ளலார்; வடலூர் பெரியார்!”",
    source_author: "முத்தமிழறிஞர் கலைஞர் கருணாநிதி",
    source_year: "1985",
    source_book: "கலைஞர் கடிதம் & முரசொலி தலையங்கங்கள்",
    source_context: "தந்தை பெரியாரின் பகுத்தறிவுப் புரட்சியையும் வடலூர் வள்ளலாரின் ஆன்மநேய ஒருமைப்பாட்டையும் இணைத்து கலைஞர் ஆற்றிய வரலாற்றுச் சொல்விளையாட்டு உரை.",
    summary: "பசியைப் போக்க அணையா அடுப்பை மூட்டிய வள்ளலாரையும், அறியாமையைப் போக்க அறிவொளியை ஏற்றிய பெரியாரையும் இணைத்து 'ஈரோட்டு வள்ளலார்; வடலூர் பெரியார்' என்று கலைஞர் இயற்றிய தத்துவச் சிலேடை.",
    reading_time: "5 min",
    witty_quote: "பசியைப் போக்க அணையா அடுப்பை மூட்டிய வள்ளலாரை 'வடலூர் பெரியார்' எனலாம்; மூடநம்பிக்கைப் பசியைப் போக்கப் பகுத்தறிவூட்டிய பெரியாரை 'ஈரோட்டு வள்ளலார்' எனலாம்!",
    reflection: "ஆன்மநேயமும் பகுத்தறிவும் முரண்பட்டவை அல்ல; ஏழை மக்களின் கண்ணீரைத் துடைக்கும் புள்ளியில் இரண்டும் ஒன்றிணைகின்றன என்ற கலைஞரின் தத்துவ ஒருமைப்பாடு.",
    content: `1980-களின் நடுப்பகுதி. வடலூரில் வள்ளலார் ராமலிங்க அடிகளாரின் நினைவு நாள் சொற்பொழிவு அரங்கில் கலைஞர் கருணாநிதி உரையாற்றினார்.

அரங்கில் திராவிட இயக்கத் தோழர்களும், ஆன்மிகப் பற்றாளர்களும் நிறைந்திருந்தனர். ஒரு நாத்திகத் தலைவர் ஆன்மிகத் துறவியான வள்ளலாரைப் பற்றி என்ன பேசப் போகிறார் என்று அனைவரும் ஆவலுடன் கவனித்தனர்.

கலைஞர் தனது காந்தக் குரலில் பேசத் தொடங்கினார்:
"அன்புத் தோழர்களே! சிலர் நினைக்கிறார்கள், பெரியாரின் பகுத்தறிவும் வள்ளலாரின் ஆன்மநேயமும் எதிரெதிரானவை என்று.
ஆனால் உற்றுப் பார்த்தால், இருவருமே சாதி மதக் கொடுமைகளை எதிர்த்த மாபெரும் புரட்சியாளர்கள்!
வடலூர் வள்ளலார் அன்று சொன்னார்: 'சாதியிலே மதங்களிலே சமய நெறிகளிலே ஆதியிலே அமைத்த பெரும் கட்டுப்பாடுகளைத் தகர்த்து எறிவோம்' என்றார்!
மக்களின் பசிப்பிணியைப் போக்க வடலூரில் அணையா அடுப்பை மூட்டினார் வள்ளலார்!
ஈரோட்டுப் பெரியாரோ மக்களின் அறியாமைப் பசியைப் போக்கவும், அடிமைத்தனத்தை ஒழிக்கவும் தன் வாழ்நாளெல்லாம் பகுத்தறிவுச் சுடரை அணையாமல் ஏற்றி வைத்தார்!

ஆகவே, என்னைச் சுவைபடக் கேட்டால் நான் இப்படிச் சொல்வேன்:
வடலூரில் அவதரித்த அந்த வள்ளலாரை 'வடலூர் பெரியார்' என்று அழைக்கலாம்!
ஈரோட்டில் உதித்த நமது தந்தை பெரியாரை 'ஈரோட்டு வள்ளலார்' என்று தாராளமாக அழைக்கலாம்!"

அரங்கமே எழுந்து நின்று கைதட்டியது!

பகுத்தறிவையும் ஆன்மநேயத்தையும் ஒரே நேர்க்கோட்டில் கொண்டுவந்து, வார்த்தைகளை வித்தைபோல மாற்றி அமைத்த கலைஞரின் தமிழ் ஆளுமைக்கு இந்த உரை ஓர் அழியாத சான்றாகும்.`,
    vocabulary: [
      { term: "வள்ளலார் (ராமலிங்க அடிகளார்)", definition: "19-ஆம் நூற்றாண்டில் வாடிய பயிரைக் கண்டபோதெல்லாம் வாடிய அருட்பெருஞ்ஜோதி ஆன்மநேயத் துறவி." },
      { term: "அணையா அடுப்பு", definition: "பசித்த மக்களுக்கு உணவளிக்க வடலூர் சத்திய தரும சாலையில் வள்ளலாரால் மூட்டப்பட்டு இன்றும் எரியும் அடுப்பு." }
    ],
    quiz: [
      {
        question: "வள்ளலாரையும் பெரியாரையும் ஒப்பிட்டு கலைஞர் என்ன சிலேடை சொன்னார்?",
        options: [
          "ஈரோட்டு வள்ளலார்; வடலூர் பெரியார் என்றார்",
          "இருவரும் எதிரிகள் என்றார்",
          "இருவருக்கும் தொடர்பில்லை என்றார்",
          "அரசியல் பேசினார்"
        ],
        correct_index: 0,
        explanation: "பசியைப் போக்கிய வள்ளலாரையும் அறியாமையைப் போக்கிய பெரியாரையும் இணைத்துச் சிலேடை செய்தார்.",
        hint: "ஈரோட்டு வள்ளலார்; வடலூர் பெரியார்."
      }
    ]
  },
  {
    id: "debate-122-kalaignar-broad-agreement-fraud-agreement",
    slug: "debate-122-kalaignar-broad-agreement-fraud-agreement",
    title: "கலைஞர் கருணாநிதி: “Broad agreement; fraud agreement இல்லை!”",
    source_author: "முத்தமிழறிஞர் கலைஞர் கருணாநிதி",
    source_year: "1989",
    source_book: "முரசொலி & செய்தியாளர் சந்திப்பு பதிவுகள்",
    source_context: "1989-ல் தேசிய முன்னணி (National Front) கூட்டணி அமைப்பது குறித்து டெல்லியில் நடந்த பேச்சுவார்த்தைக்குப் பின் கலைஞர் வி. பி. சிங்குடன் இணைந்து அளித்த பத்திரிகையாளர் பேட்டி.",
    summary: "கூட்டணிப் பேச்சுவார்த்தையில் உடன்பாடு எட்டப்பட்டதா என்று கேட்ட ஆங்கிலப் பத்திரிகையாளரிடம், 'எங்களுக்குள் பரந்த மனதோடு உடன்பாடு (Broad Agreement) ஏற்பட்டுள்ளது; ஏமாற்று ஒப்பந்தம் (Fraud Agreement) இல்லை!' என்று சிரித்த கலைஞரின் நையாண்டி.",
    reading_time: "5 min",
    witty_quote: "நாங்கள் செய்து கொண்டது பரந்த மனப்பான்மையோடு கூடிய வெளிப்படையான உடன்பாடு (Broad Agreement); இது ஒருபோதும் ஏமாற்று மோசடி ஒப்பந்தம் (Fraud Agreement) அல்ல!",
    reflection: "ஆங்கில எதுகை மோனையைத் தன் தாய்மொழியின் இயல்பான வேகத்தோடு கையாண்டு, தேசிய அரசியலில் வெளிப்படைத்தன்மையை நிலைநாட்டிய கலைஞரின் சொல்வன்மை.",
    content: `1989-ஆம் ஆண்டு. டெல்லியில் வி. பி. சிங் தலைமையில் ஜனதா தளம் மற்றும் பிராந்தியக் கட்சிகள் இணைந்து 'தேசிய முன்னணி' (National Front) என்ற புதிய அரசியல் கூட்டணிக் கட்டமைப்பை உருவாக்கின.

தென் மாநிலங்களில் தி.மு.க. தலைவர் கலைஞர் கருணாநிதி இக்கூட்டணியின் அச்சாணியாகத் திகழ்ந்தார்.

டெல்லியில் பல நாட்கள் தொகுதிப் பங்கீடு மற்றும் பொதுச் செயல்திட்டம் குறித்துக் காரசாரமான ஆலோசனைகள் நடைபெற்றன. காங்கிரஸ் கட்சியை வீழ்த்தி மாற்று அரசை அமைக்க வேண்டும் என்ற முனைப்பில் அனைத்துக் கட்சித் தலைவர்களும் தீவிரமாக விவாதித்தனர்.

பேச்சுவார்த்தை நிறைவடைந்ததும், வி. பி. சிங் மற்றும் கலைஞர் கருணாநிதி கூட்டாகச் செய்தியாளர்களைச் சந்தித்தனர்.

டெல்லியின் ஆங்கிலப் பத்திரிகையாளர்கள் கலைஞரை நோக்கிச் சந்தேகக் கேள்விகளை வீசினர்:
"கலைஞர் அவர்களே! இத்தனை வேறுபட்ட கொள்கைகள் கொண்ட கட்சிகள் எப்படி ஒன்றாகச் செயல்பட முடியும்? மறைமுகமாக ஏதேனும் ரகசிய நிபந்தனைகள் போடப்பட்டுள்ளதா? உண்மையிலேயே முழுமையான ஒப்பந்தம் எட்டப்பட்டுவிட்டதா?"

வி. பி. சிங் புன்னகையோடு கலைஞரின் முகத்தைப் பார்த்தார்.

கலைஞர் தனது கம்பீரமான குரலில் மைக் முன்னால் பேசினார்:
"பத்திரிகையாளர் நண்பர்களே! எங்கள் கூட்டணியைப் பற்றிக் கவலைப்பட வேண்டாம்.
நாங்கள் எங்களுக்குள் எட்டியிருப்பது ஒரு விரிவான, பரந்த மனப்பான்மையோடு கூடிய ஒப்பந்தம்—ஆங்கிலத்தில் சொல்வதானால் **'Broad Agreement'**!
அதே நேரத்தில், நீங்கள் நினைப்பது போல மக்களை ஏமாற்றுவதற்கான எந்தவித ரகசிய மோசடி ஒப்பந்தமும்—அதாவது **'Fraud Agreement'**—எங்களுக்குள் எப்போதும் ஏற்படாது!"

அங்கிருந்த டெல்லி ஆங்கிலப் பத்திரிகையாளர்கள் கலைஞரின் ஆங்கில எதுகை மோனையைக் கேட்டு வாய்விட்டுச் சிரித்து மேசைகளைத் தட்டிப் பாராட்டினர்!

'Broad' என்ற சொல்லிற்கு இணையாக 'Fraud' என்ற சொல்லைப் பொருத்தி, தங்களின் வெளிப்படைத்தன்மையையும் நேர்மையையும் உலகிற்கு ஒரே வரியில் உணர்த்திய கலைஞரின் சமயோசிதம் டெல்லி அரசியல் வட்டாரத்தில் பல நாட்கள் பேசப்பட்டது.`,
    vocabulary: [
      { term: "தேசிய முன்னணி (National Front)", definition: "1989-ல் வி. பி. சிங், கலைஞர் முதலான தலைவர்களால் உருவாக்கப்பட்ட காங்கிரஸ் அல்லாத மத்திய கூட்டணிக் கட்டமைப்பு." },
      { term: "Broad Agreement", definition: "அடிப்படை லட்சியங்களில் பரந்த நோக்குடன் எட்டப்படும் விரிவான கொள்கை உடன்பாடு." }
    ],
    quiz: [
      {
        question: "தேசிய முன்னணி கூட்டணி ஒப்பந்தம் குறித்து கலைஞர் என்ன ஆங்கில எதுகை மோனை சொன்னார்?",
        options: [
          "இது Broad Agreement; Fraud Agreement அல்ல என்றார்",
          "ஒப்பந்தம் முறிந்தது என்றார்",
          "தேர்தலில் நிற்க மாட்டோம் என்றார்",
          "டெல்லியை விட்டுப் புறப்பட்டார்"
        ],
        correct_index: 0,
        explanation: "Broad Agreement மற்றும் Fraud Agreement என்ற சொற்களை வைத்து நயம்பட விளக்கினார்.",
        hint: "Broad agreement vs Fraud agreement."
      }
    ]
  },
  {
    id: "debate-123-kalaignar-speaker-may-god-protect",
    slug: "debate-123-kalaignar-speaker-may-god-protect",
    title: "கலைஞரும் பேரவைத் தலைவரும்: “ஆண்டவன் காப்பாற்றட்டும்!” — இரட்டை அர்த்தம்",
    source_author: "முத்தமிழறிஞர் கலைஞர் கருணாநிதி",
    source_year: "1975",
    source_book: "சட்டமன்ற சுவையான பதிவுகள் & முரசொலி",
    source_context: "தமிழகச் சட்டமன்றத்தில் எதிர்கட்சி உறுப்பினர் 'ஆண்டவன்தான் இந்த அரசைக் காப்பாற்ற வேண்டும்' என்று சாடியபோது கலைஞர் அளித்த நயமான சிலேடை.",
    summary: "'ஆண்டவன்தான் தமிழ்நாட்டைக் காப்பாற்ற வேண்டும்!' என்று உறுப்பினர் சலித்துக் கொண்டபோது, 'ஆம், நாட்டை ஆண்டவனும் ஆளுகின்றவனும் காப்பாற்றுவான்!' என்று ஆளும்கட்சியின் அதிகாரத்தை நயம்பட உணர்த்திய கலைஞர்.",
    reading_time: "5 min",
    witty_quote: "நண்பர் சொன்னது உண்மைதான்; இந்த நாட்டை முன்பு ஆண்டவனும், இன்று ஆளுகின்றவனும், இனி ஆளப்போகின்றவனுமே காப்பாற்றுவான்!",
    reflection: "மதவாதக் கடவுள் நம்பிக்கைக் குத்தல்களைக் கூட, தூய தமிழ் இலக்கண வினையாக்கச் சொல்லாடலாக மாற்றி அவையை வியப்பில் ஆழ்த்திய கலைஞரின் மொழித்திறன்.",
    content: `1970-களின் மத்தியில் தமிழகச் சட்டமன்றத்தில் காரசாரமான விவாதம் நடைபெற்றுக் கொண்டிருந்தது.

எதிர்க்கட்சி உறுப்பினர் ஒருவர் அரசின் கொள்கைகளை மிகக் கடுமையாக விமர்சித்துவிட்டு, தனது உரையின் முடிவில் கைகளை உயர்த்தி விரக்தியுடன் கூவினார்:
"சபாநாயகர் அவர்களே! இந்த அரசின் பிடிவாதத்தைப் பார்த்தால் எனக்கு ஒரே ஒரு நம்பிக்கைதான் மிச்சமிருக்கிறது... அந்த ஆண்டவன்தான் இந்தத் தமிழ்நாட்டையும் இந்த அரசையும் எப்படிக் காப்பாற்றப் போகிறானோ தெரியவில்லை! ஆண்டவனே காப்பாற்று!" என்று கூறி அமர்ந்தார்.

எதிர்க்கட்சி வரிசையில் சிரிப்பலை எழுந்தது. நாத்திகக் கொள்கை கொண்ட தி.மு.க அரசை 'ஆண்டவன்' என்ற சொல்லை வைத்து உறுப்பினர் கிண்டல் செய்திருந்தார்.

முதலமைச்சர் கலைஞர் கருணாநிதி உடனே எழுந்து நின்றார். அவரது உதடுகளில் குறும்புப் புன்னகை பூத்தது:
"மாண்புமிகு சபாநாயகர் அவர்களே! நண்பர் தனது பேச்சை முடிக்கும்போது, 'அந்த ஆண்டவன்தான் இந்த அரசையும் நாட்டையும் காப்பாற்ற வேண்டும்' என்று மிக உருக்கமாகக் கூறிவிட்டு அமர்ந்திருக்கிறார்.
அவர் சொன்னதை நான் முழுமனதோடு ஆமோதிக்கிறேன்!"

அவையில் இருந்த உறுப்பினர்கள் திகைத்தனர்! நாத்திக முதலமைச்சர் ஆண்டவன் காப்பாற்ற வேண்டும் என்பதை ஏற்கிறாரா என்று வியந்தனர்.

கலைஞர் தொடர்ந்தார்:
"சபாநாயகர் அவர்களே! தமிழில் 'ஆண்டவன்' என்றால் கோயிலில் உள்ள கடவுள் என்று மட்டுமே பொருள் அல்ல!
நாட்டை ஆண்டவன்... இன்று நாட்டை ஆளுகின்றவன்... நாட்டை இனி ஆளப்போகின்றவன் என்று பொருள்!
எனவே, இந்தத் தமிழ்நாட்டைத் தன் உழைப்பால் முன்பு 'ஆண்ட' அண்ணாவும் காப்பாற்றுவார்; இன்று இந்நாட்டைத் திறம்பட 'ஆளுகின்ற' இந்த அரசும் காப்பாற்றும்; நாட்டை இனி வரப்போகும் காலங்களில் ஆளப்போகின்ற இந்த திராவிட இயக்கமுமே காப்பாற்றும்! நண்பரின் விருப்பப்படியே ஆண்டவன் எங்களைக் காப்பாற்றிக் கொண்டுதான் இருக்கிறான்!"

சட்டமன்றமே கலைஞரின் இந்தத் தமிழ் இலக்கண சிலேடையைக் கேட்டு மிரண்டுபோய் பலத்த மேசை தட்டலோடு சிரித்தது!

எதிர்க்கட்சி உறுப்பினர் எழுந்து, "கலைஞரின் இந்தத் தமிழறிவுக்கு முன்னால் எங்களால் பேசவே முடியாது!" என்று புன்னகையோடு சரணடைந்தார்!`,
    vocabulary: [
      { term: "ஆண்டவன் (வினைப்பெயர்)", definition: "நாட்டை ஆண்டவன் (ஆட்சி செய்தவன்) என்ற இலக்கணப் பொருள்." }
    ],
    quiz: [
      {
        question: "ஆண்டவன் காப்பாற்ற வேண்டும் என்ற சொல்லுக்கு கலைஞர் என்ன இலக்கணப் பொருள் தந்தார்?",
        options: [
          "நாட்டை முன்பு ஆண்டவனும் இன்று ஆளுகின்றவனுமே காப்பாற்றுவான் என்றார்",
          "கோயிலுக்குச் சென்று கும்பிட்டார்",
          "உறுப்பினரைத் திட்டினார்",
          "மௌனமாக இருந்தார்"
        ],
        correct_index: 0,
        explanation: "ஆண்டவன் என்ற சொல்லை ஆட்சி செய்தவன், ஆளுகின்றவன் என்று பிரித்துச் சிலேடை செய்தார்.",
        hint: "நாட்டை ஆண்டவன் மற்றும் ஆளுகின்றவன்."
      }
    ]
  },
  {
    id: "debate-124-kalaignar-namakkal-temple-moving-assets",
    slug: "debate-124-kalaignar-namakkal-temple-moving-assets",
    title: "கலைஞரும் நாமக்கல் ஆஞ்சநேயர் கோயிலும்: “நகரும் சொத்து பக்தர்கள்!”",
    source_author: "முத்தமிழறிஞர் கலைஞர் கருணாநிதி",
    source_year: "1997",
    source_book: "சட்டமன்ற நிகழ்வுகள் & முரசொலி மலர்",
    source_context: "இந்து சமய அறநிலையத்துறை மானியக் கோரிக்கையின் போது கோயில்களின் அசையும்-அசையாச் சொத்துக்கள் குறித்த சட்டமன்ற விவாதம்.",
    summary: "கோயிலின் அசையும் சொத்துக்கள் என்னவென்று கேட்ட எதிர்க்கட்சி உறுப்பினரிடம், 'அசையாச் சொத்து ஆஞ்சநேயர் சிலை; நகரும் சொத்து அங்கே வந்து செல்லும் பக்தர்கள்!' என்று கலைஞர் அடித்த சட்டமன்ற நகைச்சுவை.",
    reading_time: "5 min",
    witty_quote: "அந்தக் கோயிலில் அசையாத சொத்து கம்பீரமாக நிற்கும் ஆஞ்சநேயர் சிலை; அங்கே தொடர்ந்து நகர்ந்து கொண்டிருக்கும் சொத்துக்கள் யார் என்றால்... அந்த ஆஞ்சநேயரைக் காண வரும் பக்தர்கள்தான்!",
    reflection: "கோயில் நிர்வாகம் மற்றும் பக்தி விவகாரங்களை எவ்வித விரோதமும் இன்றி, மெல்லிய நகைச்சுவையோடும் சமயோசிதத்தோடும் அணுகிய கலைஞரின் சட்டமன்றச் சாதுரியம்.",
    content: `1997-ஆம் ஆண்டு. தமிழகச் சட்டமன்றத்தில் இந்து சமய அறநிலையத்துறை மானியக் கோரிக்கை மீதான விவாதம் நடந்து கொண்டிருந்தது.

நாமக்கல் தொகுதியைச் சேர்ந்த உறுப்பினர் எழுந்து, புகழ்பெற்ற நாமக்கல் ஆஞ்சநேயர் கோயிலின் சிறப்புகளைப் பற்றிப் பேசினார்:
"மாண்புமிகு சபாநாயகர் அவர்களே! எங்கள் நாமக்கல் ஆஞ்சநேயர் சிலை திறந்தவெளியில் மழையிலும் வெயிலிலும் கம்பீரமாக நிற்கிறது. அக்கோயிலுக்குக் கோடிக்கணக்கான ரூபாய் மதிப்புள்ள சொத்துக்கள் உள்ளன. ஆனால் அரசு அந்த அசையும் மற்றும் அசையாச் சொத்துக்களைச் சரியாகக் கணக்கெடுக்கவில்லை என்று மக்கள் பேசுகிறார்கள். முதலமைச்சர் இதற்கு விளக்கம் தர வேண்டும்!"

முதலமைச்சர் கலைஞர் கருணாநிதி புன்னகையோடு எழுந்து நின்றார்:
"மாண்புமிகு சபாநாயகர் அவர்களே! நாமக்கல் ஆஞ்சநேயர் கோயிலின் அசையும் மற்றும் அசையாச் சொத்துக்கள் குறித்து நண்பர் விளக்கம் கேட்டிருக்கிறார்.
அவருக்கு நான் மிகத் தெளிவாகச் சொல்கிறேன்:
அந்தக் கோயிலில் 'அசையாத சொத்து' எதுவென்றால்... வெயிலிலும் மழையிலும் சற்றும் அசையாமல் கம்பீரமாக நின்று கொண்டிருக்கும் அந்தப் பதினெட்டு அடி ஆஞ்சநேயர் சிலைதான் அசையாத சொத்து!
அதே நேரத்தில், அங்கே இருக்கும் 'நகரும் சொத்துக்கள்' எவை என்று கேட்டால்... தினமும் அந்த ஆஞ்சநேயரைக் கும்பிடக் கால்களால் நடந்து வந்து நகர்ந்து செல்லும் பக்தர்கள்தான் அக்கோயிலின் உண்மையான நகரும் சொத்துக்கள்!
அந்த நகரும் சொத்துக்களான பக்தர்களை எங்கள் அரசு கண்ணும் கருத்துமாகப் பாதுகாத்துக் கொண்டுதான் இருக்கிறது!"

அவையில் இருந்த அனைத்து உறுப்பினர்களும் சிரித்து மேசைகளைத் தட்டினர்!

கேள்வி கேட்ட நாமக்கல் உறுப்பினரே வாய்விட்டுச் சிரித்துவிட்டுத் தன் இருக்கையில் அமர்ந்தார். பக்தர்களையும் கடவுளையும் புண்படுத்தாமல், அதே சமயம் சட்டமன்றத்தின் இறுக்கத்தைத் தளர்த்திய கலைஞரின் நகைச்சுவை ஈடற்றது.`,
    vocabulary: [
      { term: "அசையும் சொத்து (Movable Asset)", definition: "ஓரிடத்திலிருந்து மற்றொரு இடத்திற்குக் கொண்டு செல்லக்கூடிய உடைமைகள்." },
      { term: "அசையாச் சொத்து (Immovable Asset)", definition: "நிலம், கட்டடம், சிலைகள் முதலான நகர்த்த முடியாத உடைமைகள்." }
    ],
    quiz: [
      {
        question: "நாமக்கல் கோயிலின் நகரும் சொத்துக்கள் எவை என்று கலைஞர் கூறினார்?",
        options: [
          "கோயிலுக்கு நடந்து வந்து செல்லும் பக்தர்கள் என்றார்",
          "தங்க நகைகள் என்றார்",
          "கோயில் மாடுகள் என்றார்",
          "தேர் என்றார்"
        ],
        correct_index: 0,
        explanation: "கலைஞர் நடந்து வரும் பக்தர்களே கோயிலின் நகரும் சொத்துக்கள் என்று நயம்படக் கூறினார்.",
        hint: "பக்தர்கள்."
      }
    ]
  },
  {
    id: "debate-125-kalaignar-cooum-penance-mla",
    slug: "debate-125-kalaignar-cooum-penance-mla",
    title: "கலைஞரும் மழை வேண்டிய உறுப்பினரும்: “கூவத்தில் தவம் செய்யலாமே!”",
    source_author: "முத்தமிழறிஞர் கலைஞர் கருணாநிதி",
    source_year: "1974",
    source_book: "சட்டமன்ற நகைச்சுவை முத்துக்கள் & முரசொலி",
    source_context: "வறட்சிக் காலத்தில் மழை வேண்டி யாகம் செய்ய வேண்டும் என்று உறுப்பினர் வலியுறுத்தியபோது கலைஞர் சட்டமன்றத்தில் அடித்த அதிரடிப் பகுத்தறிவுப் பகிடி.",
    summary: "மழை பெய்வதற்கு யாகம் நடத்த வேண்டும் என்று உறுப்பினர் கோரியபோது, 'மழை வேண்டி யாகம் செய்யும் நண்பரைக் கூவம் ஆற்றில் இறங்கித் தவம் செய்யச் சொல்லுங்கள்; மழையும் பெய்யும், கூவமும் சுத்தமாகும்!' என்று அவையைச் சிரிக்க வைத்த கலைஞர்.",
    reading_time: "5 min",
    witty_quote: "மழை வேண்டி யாகம் செய்யத் துடிக்கும் நண்பர் கூவம் ஆற்றில் இறங்கி நின்று தவம் செய்தால் இரண்டு நன்மைகள் விளையும்: ஒன்று மழை பெய்யும்; இன்னொன்று கூவம் சுத்தமாகும்!",
    reflection: "மூடநம்பிக்கைகளை வன்மமின்றி, அவையே குலுங்கும் நகைச்சுவையின் மூலம் அம்பலப்படுத்திப் பகுத்தறிவைப் பரப்பிய திராவிட இயக்க நாவன்மை.",
    content: `1974-ஆம் ஆண்டு தமிழகத்தில் கடும் கோடைக்காலம். பல மாவட்டங்களில் பருவமழை பொய்த்து வறட்சி தலைவிரித்தாடியது. ஏரிகளில் நீர் மட்டம் குறைந்தது.

சட்டமன்றத்தில் வறட்சி நிவாரணம் குறித்த விவாதம் நடந்தது.

அப்போது எதிர்க்கட்சியைச் சேர்ந்த ஒரு தீவிர பக்திமிக்க உறுப்பினர் எழுந்து பேசினார்:
"மாண்புமிகு முதலமைச்சர் அவர்களே! மனிதனின் முயற்சியால் மட்டுமே தண்ணீர் வந்துவிடாது. இறைவனின் அருள் வேண்டும். தமிழக அரசு உடனே அனைத்துக் கோயில்களிலும் வருண ஜெபமும், மழை வேண்டி யாகங்களும் நடத்த உத்தரவிட வேண்டும். யாகம் செய்தால் நிச்சயமாக மழை பொழியும் என்பது சாஸ்திர உண்மை!"

பகுத்தறிவுக் கொள்கை கொண்ட தி.மு.க உறுப்பினர்கள் அந்த உறுப்பினரின் பேச்சை எதிர்த்துக் கூச்சலிட்டனர்.

முதலமைச்சர் கலைஞர் கருணாநிதி எழுந்து தனது தோழர்களை அமைதிப்படுத்தினார்:
"நண்பர்களே! சபாநாயகர் அவர்களே! உறுப்பினர் அவர்கள் மழை வேண்டி யாகம் செய்ய வேண்டும் என்று மிக ஆழமான அக்கறையோடு யோசனை சொல்லியிருக்கிறார். அவரது யோசனையை நான் முழுமையாக நிராகரிக்கவில்லை!"

அவையில் பேரமைதி நிலவியது. கலைஞர் என்ன சொல்ல வருகிறார் என்று அனைவரும் பார்த்தனர்.

கலைஞர் தொடர்ந்தார்:
"சபாநாயகர் அவர்களே! யாகம் செய்ய வேண்டும் என்று சொன்ன அந்த நண்பரை நாம் கூவம் ஆற்றில் இறக்கி விடலாம்!
அவர் கூவம் ஆற்றின் நடுவே போய் நின்று, ஒற்றைக் காலில் நின்று மழை வேண்டித் தவம் செய்யட்டும்!
அப்படிச் செய்தால் சென்னை நகரத்திற்கே இரண்டு பெரிய நன்மைகள் ஒரே நேரத்தில் கிடைக்கும்:
முதலாவது நன்மை: அவரது தவத்தின் மகிமையால் ஒருவேளை சென்னையில் பலத்த மழை பெய்யக்கூடும்!
இரண்டாவது நன்மை: அந்தப் புண்ணியவான் கூவத்தில் இறங்கித் தவம் செய்வதால் கூவம் ஆறும் புனிதமடைந்து சுத்தமாகிவிடும்!"

சட்டமன்றமே சிரிப்பொலியால் குலுங்கியது! யாகம் செய்யச் சொன்ன அந்த உறுப்பினரே தன் தலையைத் தொங்கப்போட்டு வாய்விட்டுச் சிரித்துவிட்டார்!

மூடநம்பிக்கைகளைச் சாடுவதிலும் கூட, எந்தவித வெறுப்பையும் கக்காமல், நகைச் சுவையோடு உண்மையைச் சுட்டிக்காட்டிய கலைஞரின் சட்டமன்ற நயத்திற்கு இது மற்றுமொரு சிறந்த எடுத்துக்காட்டு!`,
    vocabulary: [
      { term: "வருண ஜெபம்", definition: "மழை வேண்டி வருண பகவானை நோக்கிச் செய்யப்படும் பண்டைய யாகச் சடங்கு." },
      { term: "கூவம் ஆறு", definition: "சென்னை நகரின் ஊடே பாயும் வரலாற்று ஆறு; பிற்காலத்தில் மாசடைந்து போனது." }
    ],
    quiz: [
      {
        question: "மழை வேண்டி யாகம் செய்யச் சொன்ன உறுப்பினருக்கு கலைஞர் என்ன நகைச்சுவை யோசனை சொன்னார்?",
        options: [
          "கூவம் ஆற்றில் இறங்கித் தவம் செய்தால் மழையும் பெய்யும் கூவமும் சுத்தமாகும் என்றார்",
          "அவரைச் சிறையில் அடைக்கச் சொன்னார்",
          "யாகத்திற்குப் பணம் ஒதுக்கினார்",
          "பதில் சொல்லவில்லை"
        ],
        correct_index: 0,
        explanation: "கூவத்தில் இறங்கித் தவம் செய்தால் மழையும் பெய்யும், ஆறும் சுத்தமாகும் என்று நகைச்சுவையாகக் கூறினார்.",
        hint: "கூவத்தில் இறங்கித் தவம் செய்தல்."
      }
    ]
  }
];

const more5_En = [
  {
    id: "debate-121-kalaignar-erode-vallalar-vadalur-periyar",
    slug: "debate-121-kalaignar-erode-vallalar-vadalur-periyar",
    title: "Kalaignar: Erode Vallalar and Vadalur Periyar",
    source_author: "Kalaignar M. Karunanidhi",
    source_year: "1985",
    source_book: "Kalaignar Letters & Murasoli Editorials",
    source_context: "Karunanidhi's address in Vadalur synthesizing the rationalist revolution of Periyar and the universal compassion of Saint Vallalar.",
    summary: "Connecting Saint Vallalar who fed the starving with Periyar who enlightened minds, Karunanidhi crafted the philosophical pun: 'Vadalur Periyar and Erode Vallalar'.",
    reading_time: "5 min",
    witty_quote: "Saint Vallalar of Vadalur who lit an eternal kitchen to banish physical hunger can truly be called 'Vadalur Periyar'; and Thanthai Periyar of Erode who lit an eternal torch of rationalism to banish mental hunger can truly be called 'Erode Vallalar'!",
    reflection: "True philosophical leadership synthesizes spiritual empathy and social rationalism, recognizing that both seek to relieve human suffering.",
    content: `In the mid-1980s, Kalaignar M. Karunanidhi addressed a vast audience gathered at Vadalur for the anniversary of Saint Ramalinga Swamigal (Vallalar).

The audience included both staunch Dravidian rationalists and devout followers of the saint. Many wondered how an atheist political leader would evaluate a 19th-century spiritual mystic.

Karunanidhi spoke with magnetic eloquence:
"Friends! Many believe that Periyar's rationalism and Vallalar's universal compassion are irreconcilable opposites.
Look deeper! Both were relentless rebels against caste tyranny!
Vallalar declared: 'Break down the ancient shackles of caste, dogma, and sectarian division!' To eradicate bodily hunger, he lit an eternal hearth in Vadalur that feeds the hungry to this day!
And what did Thanthai Periyar do? To eradicate the hunger for dignity, education, and equality, he lit an eternal flame of rationalism that shattered the darkness of social slavery!

Therefore, if you ask me to summarize their souls, I declare:
The great saint who rose in Vadalur may rightfully be honored as 'Vadalur Periyar'!
And the great rationalist who rose in Erode may rightfully be honored as 'Erode Vallalar'!"

The entire assembly rose in an electrifying standing ovation! Through poetic wit, Karunanidhi united two giants of Tamil history under the banner of human empathy.`,
    vocabulary: [
      { term: "Vallalar (Ramalinga Adigal)", definition: "The revered 19th-century Tamil mystic who preached universal soul-compassion and feeding the hungry." },
      { term: "Universal Soul-Compassion (Jeeva Karunyam)", definition: "Vallalar's ethical doctrine that mercy to all living beings is the highest spiritual path." }
    ],
    quiz: [
      {
        question: "How did Karunanidhi poetically synthesize the legacies of Vallalar and Periyar?",
        options: [
          "He named them 'Erode Vallalar' and 'Vadalur Periyar'",
          "He claimed they were opponents",
          "He rejected both",
          "He wrote a novel"
        ],
        correct_index: 0,
        explanation: "Karunanidhi bridged both icons by highlighting that Vallalar fed the body while Periyar fed the mind.",
        hint: "Erode Vallalar and Vadalur Periyar."
      }
    ]
  },
  {
    id: "debate-122-kalaignar-broad-agreement-fraud-agreement",
    slug: "debate-122-kalaignar-broad-agreement-fraud-agreement",
    title: "Kalaignar: A Broad Agreement, Not a Fraud Agreement",
    source_author: "Kalaignar M. Karunanidhi",
    source_year: "1989",
    source_book: "Murasoli & National Front Press Archives",
    source_context: "Karunanidhi's joint press conference with V. P. Singh in New Delhi in 1989 following the formation of the National Front coalition.",
    summary: "When skeptical journalists in Delhi questioned whether coalition partners reached a genuine pact, Karunanidhi quipped: 'We have reached a broad agreement, not a fraud agreement!'",
    reading_time: "5 min",
    witty_quote: "We have reached a genuine broad agreement based on mutual respect; it is certainly not a fraud agreement to deceive the public!",
    reflection: "Mastering English rhyme and political wit, Karunanidhi cut through journalistic cynicism to affirm principled democratic transparency.",
    content: `In 1989, the National Front was formed under the leadership of V. P. Singh and regional leaders, uniting diverse parties to challenge the ruling Congress.

DMK President Kalaignar M. Karunanidhi was a principal architect of this national coalition.

Following marathon talks in New Delhi on seat-sharing and the common minimum program, Singh and Karunanidhi addressed a packed national press conference.

Skeptical correspondents peppered Karunanidhi with probing questions:
"Mr. Karunanidhi! How can parties with divergent ideologies govern together? Have secret deals been struck behind closed doors? Has a real agreement actually been reached?"

Karunanidhi adjusted the microphone, smiled, and answered with effortless rhyming wit:
"Gentlemen of the press! Do not fret over our unity.
What we have accomplished is an open, honorable, and broad-minded consensus—in English, a **'Broad Agreement'**!
At the same time, rest assured that this is not a covert conspiracy to deceive the electorate—in other words, it is definitely not a **'Fraud Agreement'**!"

The entire New Delhi press corps dissolved into hearty laughter and applauding murmurs!

By juxtaposing 'Broad' and 'Fraud', Karunanidhi disarmed media cynicism in a single stroke, demonstrating that regional leaders possessed the rhetorical agility to dominate national discourse.`,
    vocabulary: [
      { term: "National Front", definition: "A multi-party Indian political coalition formed in 1989 that formed the union government under V. P. Singh." },
      { term: "Alliterative Wit", definition: "Humor created by repeating similar phonetic sounds in contrasting words." }
    ],
    quiz: [
      {
        question: "What English wordplay did Karunanidhi employ to describe the National Front coalition pact?",
        options: [
          "'A Broad Agreement, not a Fraud Agreement'",
          "'A Long Agreement, not a Short Agreement'",
          "'A New Agreement, not an Old Agreement'",
          "'A Fast Agreement'"
        ],
        correct_index: 0,
        explanation: "Karunanidhi used the rhyme of 'Broad' and 'Fraud' to emphasize democratic integrity.",
        hint: "Broad vs Fraud."
      }
    ]
  },
  {
    id: "debate-123-kalaignar-speaker-may-god-protect",
    slug: "debate-123-kalaignar-speaker-may-god-protect",
    title: "Kalaignar and the Speaker: The Double Meaning of “Andavan”",
    source_author: "Kalaignar M. Karunanidhi",
    source_year: "1975",
    source_book: "Tamil Nadu Assembly Records & Murasoli",
    source_context: "An opposition member's sarcastic exclamation that 'only God can save this government' and Karunanidhi's linguistic deconstruction.",
    summary: "When an opposition MLA sighed that 'only Andavan (God) can protect this state', atheist Chief Minister Karunanidhi turned the Tamil root word into a political tour de force: 'Indeed, those who governed (andavan) and those who govern will protect it!'",
    reading_time: "5 min",
    witty_quote: "My friend is right: this state was protected by those who governed (andavan), is protected by those who govern today, and will be protected by those who govern tomorrow!",
    reflection: "Transforming a religious jibe into a grammatical celebration of democratic stewardship through mastery of the Tamil language.",
    content: `In the mid-1970s, a heated debate unfolded in the Tamil Nadu Legislative Assembly.

An opposition lawmaker finished a scathing speech by throwing up his hands in theatrical despair:
"Mr. Speaker! Looking at this headstrong government, I have only one hope left... Only Andavan (God) can save this state and protect this people! May Andavan save us!"

The opposition benches chuckles, expecting the atheist DMK leadership to be provoked by the religious invocation.

Chief Minister Kalaignar M. Karunanidhi rose promptly, his face illuminated with mischief:
"Honorable Speaker! My esteemed colleague concluded with deep emotion that 'Andavan must save this state'.
I rise to wholeheartedly agree with his sentiment!"

The assembly was stunned. Did the rationalist Chief Minister just agree that God must intervene?

Karunanidhi continued with consummate grammatical brilliance:
"In classical Tamil grammar, the noun 'Andavan' does not merely refer to a deity in a temple!
It is a participial noun derived from the verb 'Aal' (to govern)!
It means 'He who governed' (Andavan)... 'He who governs today'... and 'He who will govern in the future'!
Therefore, my friend is perfectly right! This state was protected by Arignar Anna who 'governed' (andavan); it is protected by this DMK ministry that 'governs' today; and it will be protected by the Dravidian movement that will 'govern' tomorrow! As my friend prayed, 'Andavan' is indeed protecting us!"

The assembly hall erupted into thunderous table-thumping and laughter!

The opposition member stood up with a grin, bowing in surrender to Karunanidhi's unmatched linguistic mastery.`,
    vocabulary: [
      { term: "Participial Noun (Vinaiyal Anaiyum Peyar)", definition: "A Tamil grammatical form where a verb acts as a noun describing the person performing the action (e.g., Andavan = One who governed)." },
      { term: "Rationalist Oratory", definition: "Rhetoric that deconstructs religious dogma using logic, science, and linguistics." }
    ],
    quiz: [
      {
        question: "How did Karunanidhi grammatically deconstruct the word 'Andavan'?",
        options: [
          "He defined it as 'one who governed' (from the root verb to govern), referring to democratic rulers",
          "He said it meant a mountain",
          "He claimed it was a foreign word",
          "He refused to answer"
        ],
        correct_index: 0,
        explanation: "Karunanidhi explained that in Tamil grammar, 'Andavan' refers to 'he who governed', turning the religious word into a political pun.",
        hint: "He who governed."
      }
    ]
  },
  {
    id: "debate-124-kalaignar-namakkal-temple-moving-assets",
    slug: "debate-124-kalaignar-namakkal-temple-moving-assets",
    title: "Kalaignar and the Namakkal Temple: The Moving Assets",
    source_author: "Kalaignar M. Karunanidhi",
    source_year: "1997",
    source_book: "Tamil Nadu Assembly Debates & Murasoli",
    source_context: "Legislative assembly exchange regarding temple properties and auditing under the Hindu Religious and Charitable Endowments department.",
    summary: "When a lawmaker demanded an audit of the movable and immovable assets of the Namakkal Anjaneyar temple, Karunanidhi replied: 'The immovable asset is the majestic Hanuman idol; the moving assets are the devotees walking in to pray!'",
    reading_time: "5 min",
    witty_quote: "The immovable asset of that temple is the towering Hanuman statue standing firm against the elements; and its moving assets are the walking devotees who visit him daily!",
    reflection: "Handling temple administration with sparkling humor while affirming that devotees, not stone or gold, are the living soul of any sacred site.",
    content: `In 1997, the Tamil Nadu Legislative Assembly was discussing budgetary grants for the Hindu Religious and Charitable Endowments (HR&CE) department.

An opposition member representing Namakkal raised an audit issue:
"Mr. Speaker! The famous Namakkal Anjaneyar (Hanuman) temple has eighteen-foot monolithic idols standing under open skies. The temple possesses vast wealth. Yet the public complains that the government has not properly inventoried its movable and immovable assets! The Chief Minister must clarify!"

Chief Minister Kalaignar M. Karunanidhi rose to reply with a beaming smile:
"Honorable Speaker! My esteemed colleague from Namakkal seeks a precise account of the temple's movable and immovable properties.
I shall give him the most accurate inventory:
In that sacred temple, the supreme 'immovable asset' is that eighteen-foot monolithic statue of Lord Hanuman, standing resolute through rain and scorching sun!
And if you ask what the temple's 'movable assets' are... they are the thousands of pious devotees who move on their own two feet every single day to visit that temple!
Our government is diligently protecting both the immovable idol and those moving devotees!"

The entire assembly chamber burst into affectionate laughter and sustained table-thumping!

Even the member who raised the question sat down chuckling. By identifying citizens as the true 'moving assets' of society, Karunanidhi infused administrative debate with warm humanity.`,
    vocabulary: [
      { term: "HR&CE Department", definition: "The government department responsible for the administration and preservation of Hindu temples and endowments in Tamil Nadu." },
      { term: "Monolithic Idol", definition: "A massive statue carved out of a single continuous block of stone." }
    ],
    quiz: [
      {
        question: "Who did Karunanidhi humorously identify as the 'movable assets' of the Namakkal temple?",
        options: [
          "The devotees who walk into the temple daily",
          "The temple chariots",
          "Gold jewelry",
          "Sacred cows"
        ],
        correct_index: 0,
        explanation: "Karunanidhi identified the walking devotees as the true moving assets of the temple.",
        hint: "The devotees who walk."
      }
    ]
  },
  {
    id: "debate-125-kalaignar-cooum-penance-mla",
    slug: "debate-125-kalaignar-cooum-penance-mla",
    title: "Kalaignar and the Rain Prayer: Penance in the Cooum",
    source_author: "Kalaignar M. Karunanidhi",
    source_year: "1974",
    source_book: "Tamil Nadu Assembly Memoirs & Murasoli",
    source_context: "Debate during a severe drought in 1974 when an opposition lawmaker demanded that the state government conduct Vedic yajnas for rain.",
    summary: "When an MLA insisted that only religious fire rituals would bring rain, Karunanidhi proposed: 'Let the honorable member stand in the Cooum River and do penance—it will bring rain, and clean the river too!'",
    reading_time: "5 min",
    witty_quote: "If the honorable member stands in the Cooum River to perform penance for rain, Chennai will gain two immense benefits: first, it will rain; and second, the Cooum will be cleansed!",
    reflection: "Rationalism without bitterness: exposing superstitious remedies for drought with hilarious satire that brought down the house.",
    content: `In the blistering summer of 1974, Tamil Nadu faced a severe drought as the monsoon failed. Reservoirs dried up, and water rationing was instituted in Chennai.

During an assembly debate on drought relief, an intensely orthodox opposition legislator stood up to offer a religious solution:
"Mr. Chief Minister! Human planning cannot summon rain. Only divine intervention can fill our reservoirs. The government must immediately order Varuna yajnas and Vedic fire rituals across all major temples! It is an established scriptural truth that yajnas guarantee rain!"

Treasury bench MLAs began shouting in protest against promoting superstition.

Chief Minister Kalaignar M. Karunanidhi rose calmly, signaling his colleagues to be seated:
"Honorable Speaker! Our esteemed friend has suggested performing religious penance for rain with deep conviction. I do not dismiss his enthusiasm!"

The assembly fell quiet in surprise.

Karunanidhi delivered his punchline with deadpan comedic mastery:
"Honorable Speaker! I suggest that we invite our honorable friend to go down into the Cooum River in the heart of Chennai!
Let him stand on one leg in the middle of the Cooum and perform penance for rain!
If he does so, the city of Chennai will simultaneously enjoy two monumental blessings:
The first blessing: thanks to his saintly penance, rain might actually fall from the skies!
The second blessing: as a holy man stands in the Cooum, the water will be purified and the river will finally be cleaned!"

The entire assembly chamber exploded in uproarious, helpless laughter!

The lawmaker who suggested the ritual buried his face in his hands, laughing along with the house. Karunanidhi had defended rationalism and public health without venom, conquering superstition through irresistible humor.`,
    vocabulary: [
      { term: "Cooum River", definition: "A slow-moving river flowing through Chennai, historically clean but heavily polluted in modern times." },
      { term: "Varuna Yajna", definition: "A traditional Vedic ritual invoking the rain god Varuna to end drought." }
    ],
    quiz: [
      {
        question: "What humorous proposal did Karunanidhi make regarding the MLA who demanded rituals for rain?",
        options: [
          "He suggested the MLA stand in the Cooum River to do penance so it would rain and clean the river",
          "He expelled him from the state",
          "He funded the fire ritual",
          "He ignored the suggestion"
        ],
        correct_index: 0,
        explanation: "Karunanidhi joked that penance in the Cooum would bring rain and clean Chennai's river at the same time.",
        hint: "Penance in the Cooum River."
      }
    ]
  }
];

// Combine all 25 stories
const all25_Ta = [...currentTa, ...more5_Ta];
const all25_En = [...currentEn, ...more5_En];

// Ensure unique by ID
const uniqueTa = [];
const seenIds = new Set();
for (const s of all25_Ta) {
  if (!seenIds.has(s.id)) {
    seenIds.add(s.id);
    uniqueTa.push(s);
  }
}

const uniqueEn = [];
const seenEnIds = new Set();
for (const s of all25_En) {
  if (!seenEnIds.has(s.id)) {
    seenEnIds.add(s.id);
    uniqueEn.push(s);
  }
}

// Sort numerically by ID number
function getNum(id) {
  const m = id.match(/debate-(\d+)/);
  return m ? parseInt(m[1], 10) : 999;
}

uniqueTa.sort((a, b) => getNum(a.id) - getNum(b.id));
uniqueEn.sort((a, b) => getNum(a.id) - getNum(b.id));

console.log('Final Batch 5 count:');
console.log('Tamil:', uniqueTa.length, uniqueTa.map(s => s.id));
console.log('English:', uniqueEn.length, uniqueEn.map(s => s.id));

const outPath = path.resolve('scripts/data-debates-batch5.mjs');
const outputContent = `// scripts/data-debates-batch5.mjs
// Batch 5: Curated from user document DailyStory_தேர்ந்தெடுத்த_சுவாரசியக்_கதைகள்.md
// Stories 101 to 125 (Sorted & Verified)

export const debatesBatch5_Ta = ${JSON.stringify(uniqueTa, null, 2)};

export const debatesBatch5_En = ${JSON.stringify(uniqueEn, null, 2)};
`;

fs.writeFileSync(outPath, outputContent, 'utf8');
console.log('Batch 5 finalized successfully with', uniqueTa.length, 'stories in scripts/data-debates-batch5.mjs!');
