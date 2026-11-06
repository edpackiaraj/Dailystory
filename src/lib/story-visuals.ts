export interface StoryVisual {
  motif: string;
  icon: string;
  theme: 'royal_indigo' | 'emerald_forest' | 'amber_gold' | 'starlight_violet' | 'river_cyan' | 'rustic_lime' | 'crimson_rose' | 'slate_stone';
  bgGradient: string;
  accentColor: string;
  decorType: 'palace' | 'forest' | 'stars' | 'waves' | 'village' | 'castle' | 'scroll';
  label: Record<string, string>;
}

export function getStoryVisual(story: {
  slug?: string;
  id?: string;
  title?: string;
  summary?: string;
  collection?: string;
  keywords?: string[] | string;
}): StoryVisual {
  const kw = Array.isArray(story.keywords)
    ? story.keywords.join(' ')
    : (typeof story.keywords === 'string' ? story.keywords : '');

  const text = (
    (story.slug || '') + ' ' +
    (story.id || '') + ' ' +
    (story.title || '') + ' ' +
    (story.summary || '') + ' ' +
    kw
  ).toLowerCase();

  // 1. SPECIFIC FAMOUS FABLES & TALES
  if (text.includes('tortoise') && (text.includes('hare') || text.includes('rabbit'))) {
    return {
      motif: 'tortoise_hare',
      icon: '🐢 💨 🐇',
      theme: 'emerald_forest',
      bgGradient: 'from-emerald-950 via-emerald-900 to-teal-800',
      accentColor: '#10B981',
      decorType: 'forest',
      label: {
        en: 'The Tortoise & The Hare',
        ta: 'ஆமையும் முயலும் ஓட்டப்பந்தயம்',
        hi: 'कछुआ और खरगोश की दौड़'
      }
    };
  }

  if (text.includes('fox') && text.includes('grape')) {
    return {
      motif: 'fox_grapes',
      icon: '🦊 🍇 ✨',
      theme: 'starlight_violet',
      bgGradient: 'from-purple-950 via-indigo-950 to-slate-900',
      accentColor: '#A855F7',
      decorType: 'forest',
      label: {
        en: 'The Fox & The Sour Grapes',
        ta: 'நரியும் திராட்சைப் பழமும்',
        hi: 'लोमड़ी और अंगूर'
      }
    };
  }

  if (text.includes('lion') && text.includes('mouse')) {
    return {
      motif: 'lion_mouse',
      icon: '🦁 👑 🐭',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-orange-950 to-yellow-900',
      accentColor: '#F59E0B',
      decorType: 'forest',
      label: {
        en: 'The Lion & The Mouse',
        ta: 'சிங்கமும் சிறு எலியும்',
        hi: 'शेर और चूहा'
      }
    };
  }

  if (text.includes('crow') && (text.includes('pitcher') || text.includes('pebble') || text.includes('water') || text.includes('thirsty'))) {
    return {
      motif: 'crow_pitcher',
      icon: '🦅 🏺 💧',
      theme: 'river_cyan',
      bgGradient: 'from-sky-950 via-blue-950 to-indigo-900',
      accentColor: '#38BDF8',
      decorType: 'waves',
      label: {
        en: 'The Thirsty Crow & Pitcher',
        ta: 'தாகமுள்ள காகமும் கூழாங்கற்களும்',
        hi: 'प्यासा कौवा और घड़ा'
      }
    };
  }

  if (text.includes('boy') && text.includes('wolf')) {
    return {
      motif: 'boy_wolf',
      icon: '👦 📢 🐺',
      theme: 'crimson_rose',
      bgGradient: 'from-rose-950 via-red-950 to-amber-950',
      accentColor: '#F43F5E',
      decorType: 'village',
      label: {
        en: 'The Boy Who Cried Wolf',
        ta: 'பொய் சொன்ன ஆட்டு இடையன்',
        hi: 'गड़ेरिया और भेड़िया'
      }
    };
  }

  if (text.includes('golden egg') || (text.includes('goose') && text.includes('gold'))) {
    return {
      motif: 'golden_goose',
      icon: '🪿 🥚 ✨',
      theme: 'amber_gold',
      bgGradient: 'from-yellow-950 via-amber-900 to-amber-950',
      accentColor: '#FBBF24',
      decorType: 'village',
      label: {
        en: 'The Goose that Laid Golden Eggs',
        ta: 'பொன் முட்டையிட்ட வாத்து',
        hi: 'सोने का अंडा देने वाली मुर्गी'
      }
    };
  }

  if (text.includes('ant') && (text.includes('grasshopper') || text.includes('cricket'))) {
    return {
      motif: 'ant_grasshopper',
      icon: '🐜 🌾 🦗',
      theme: 'emerald_forest',
      bgGradient: 'from-emerald-950 via-green-950 to-amber-950',
      accentColor: '#22C55E',
      decorType: 'forest',
      label: {
        en: 'The Ant & The Grasshopper',
        ta: 'எறும்பும் வெட்டுக்கிளியும்',
        hi: 'चींटी और टिड्डा'
      }
    };
  }

  if (text.includes('wind') && text.includes('sun')) {
    return {
      motif: 'wind_sun',
      icon: '🌬️ 💨 ☀️',
      theme: 'amber_gold',
      bgGradient: 'from-sky-950 via-amber-950 to-orange-900',
      accentColor: '#F59E0B',
      decorType: 'scroll',
      label: {
        en: 'The North Wind & The Sun',
        ta: 'சூரியனும் வடகாற்றும்',
        hi: 'हवा और सूरज की शर्त'
      }
    };
  }

  if (text.includes('bamboo') || text.includes('magic stick') || (text.includes('birbal') && text.includes('thief')) || text.includes('diamond ring')) {
    return {
      motif: 'birbal_sticks',
      icon: '👑 🎋 💎',
      theme: 'royal_indigo',
      bgGradient: 'from-indigo-950 via-slate-900 to-blue-950',
      accentColor: '#F59E0B',
      decorType: 'palace',
      label: {
        en: 'Birbal & The Magic Bamboo Sticks',
        ta: 'மந்திரக் குச்சியும் திருடனும்',
        hi: 'जादुई छड़ी और चोर'
      }
    };
  }

  if (text.includes('crows in the kingdom') || (text.includes('count') && text.includes('crow') && text.includes('birbal'))) {
    return {
      motif: 'birbal_crows',
      icon: '👑 🦅 🏰',
      theme: 'royal_indigo',
      bgGradient: 'from-indigo-950 via-blue-950 to-slate-900',
      accentColor: '#38BDF8',
      decorType: 'palace',
      label: {
        en: 'The Crows in the Kingdom',
        ta: 'அரசவை காகங்களின் எண்ணிக்கை',
        hi: 'राज्य में कौवों की गिनती'
      }
    };
  }

  if (text.includes('khichdi') || text.includes('cook') || (text.includes('birbal') && text.includes('pot'))) {
    return {
      motif: 'birbal_pot',
      icon: '🍲 🔥 ❄️',
      theme: 'amber_gold',
      bgGradient: 'from-slate-950 via-amber-950 to-orange-950',
      accentColor: '#F97316',
      decorType: 'palace',
      label: {
        en: "Birbal's Khichdi & The Cold Lake",
        ta: 'பீர்பாலின் கிச்சடி சமையல்',
        hi: 'बीरबल की खिचड़ी'
      }
    };
  }

  if (text.includes('monkey') && text.includes('crocodile')) {
    return {
      motif: 'monkey_crocodile',
      icon: '🐒 🌴 🐊',
      theme: 'river_cyan',
      bgGradient: 'from-teal-950 via-cyan-950 to-emerald-950',
      accentColor: '#14B8A6',
      decorType: 'waves',
      label: {
        en: 'The Monkey & The Crocodile',
        ta: 'குரங்கும் முதலையும் நாவல்பழமும்',
        hi: 'बंदर और मगरमच्छ'
      }
    };
  }

  if (text.includes('glass slipper') || text.includes('cinderella')) {
    return {
      motif: 'cinderella_slipper',
      icon: '👠 🎃 ✨',
      theme: 'starlight_violet',
      bgGradient: 'from-violet-950 via-fuchsia-950 to-indigo-950',
      accentColor: '#EC4899',
      decorType: 'castle',
      label: {
        en: 'The Glass Slipper & Fairytale',
        ta: 'சிண்ட்ரெல்லா கண்ணாடி காலணி',
        hi: 'सिंड्रेला की काँच की जूती'
      }
    };
  }

  if (text.includes('genie') || text.includes('lamp') || text.includes('aladdin')) {
    return {
      motif: 'magic_lamp',
      icon: '🪔 🧞‍♂️ ✨',
      theme: 'starlight_violet',
      bgGradient: 'from-indigo-950 via-purple-950 to-slate-950',
      accentColor: '#FBBF24',
      decorType: 'stars',
      label: {
        en: 'The Magic Lamp & 1001 Nights',
        ta: 'அற்புத விளக்கும் பூதமும்',
        hi: 'जादुई चिराग और जिन्न'
      }
    };
  }

  if (text.includes('tenali') && (text.includes('thief') || text.includes('well') || text.includes('water'))) {
    return {
      motif: 'tenali_well',
      icon: '👳‍♂️ 💧 🏡',
      theme: 'emerald_forest',
      bgGradient: 'from-emerald-950 via-teal-950 to-slate-900',
      accentColor: '#10B981',
      decorType: 'village',
      label: {
        en: 'Tenali Rama & The Water Well',
        ta: 'தெனாலிராமனும் கிணற்றுத் திருடர்களும்',
        hi: 'तेनालीराम और कुएं के चोर'
      }
    };
  }

  if (text.includes('brahmin') && (text.includes('dream') || text.includes('pot') || text.includes('rice'))) {
    return {
      motif: 'brahmin_dream',
      icon: '🧘‍♂️ 💭 🏺',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-orange-950 to-slate-950',
      accentColor: '#F59E0B',
      decorType: 'scroll',
      label: {
        en: "The Brahmin's Daydream",
        ta: 'பிராமணரின் பகற்கனவு',
        hi: 'ब्राह्मण का सपना'
      }
    };
  }

  if (text.includes('nasruddin') && (text.includes('soup') || text.includes('smell'))) {
    return {
      motif: 'nasruddin_soup',
      icon: '👳 🍲 🪙',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-yellow-950 to-stone-900',
      accentColor: '#F59E0B',
      decorType: 'village',
      label: {
        en: 'The Smell of Soup & Sound of Money',
        ta: 'சூப்பின் வாசனையும் நாணயத்தின் ஓசையும்',
        hi: 'सूप की खुशबू और सिक्कों की खनक'
      }
    };
  }

  // 2. ANIMAL ARCHETYPES
  if (text.includes('lion') || text.includes('tiger') || text.includes('leopard')) {
    return {
      motif: 'feline_predator',
      icon: '🦁 👑 🐾',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-orange-950 to-stone-900',
      accentColor: '#F59E0B',
      decorType: 'forest',
      label: {
        en: 'The King of the Forest',
        ta: 'காட்டின் அரசன் சிங்கம்',
        hi: 'जंगल का राजा शेर'
      }
    };
  }

  if (text.includes('elephant')) {
    return {
      motif: 'elephant_wisdom',
      icon: '🐘 🌲 🌟',
      theme: 'slate_stone',
      bgGradient: 'from-slate-950 via-slate-900 to-emerald-950',
      accentColor: '#94A3B8',
      decorType: 'forest',
      label: {
        en: 'The Gentle & Mighty Elephant',
        ta: 'ஞானமிகு காட்டு யானை',
        hi: 'बुद्धिमान गजराज'
      }
    };
  }

  if (text.includes('monkey') || text.includes('ape')) {
    return {
      motif: 'clever_monkey',
      icon: '🐒 🌴 🍌',
      theme: 'emerald_forest',
      bgGradient: 'from-teal-950 via-emerald-950 to-slate-900',
      accentColor: '#10B981',
      decorType: 'forest',
      label: {
        en: 'The Clever Forest Monkey',
        ta: 'மரக்கிளையின் தந்திரக் குரங்கு',
        hi: 'चतुर बंदर'
      }
    };
  }

  if (text.includes('fox') || text.includes('jackal')) {
    return {
      motif: 'wily_fox',
      icon: '🦊 🍂 🌙',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-orange-950 to-slate-950',
      accentColor: '#FB923C',
      decorType: 'forest',
      label: {
        en: 'The Cunning Fox & Jackal',
        ta: 'தந்திர நரியின் கதை',
        hi: 'चालाक लोमड़ी'
      }
    };
  }

  if (text.includes('wolf')) {
    return {
      motif: 'forest_wolf',
      icon: '🐺 🌲 ❄️',
      theme: 'slate_stone',
      bgGradient: 'from-slate-950 via-zinc-900 to-indigo-950',
      accentColor: '#94A3B8',
      decorType: 'forest',
      label: {
        en: 'The Forest Wolf',
        ta: 'அடர்வன ஓநாய்',
        hi: 'जंगली भेड़िया'
      }
    };
  }

  if (text.includes('deer') || text.includes('stag') || text.includes('antelope')) {
    return {
      motif: 'graceful_deer',
      icon: '🦌 🌿 🌸',
      theme: 'emerald_forest',
      bgGradient: 'from-emerald-950 via-green-900 to-amber-950',
      accentColor: '#34D399',
      decorType: 'forest',
      label: {
        en: 'The Golden & Graceful Deer',
        ta: 'அழகிய புள்ளிமான்',
        hi: 'सुंदर हिरण'
      }
    };
  }

  if (text.includes('donkey') || text.includes('ass') || text.includes('mule')) {
    return {
      motif: 'patient_donkey',
      icon: '🫏 🌾 📦',
      theme: 'slate_stone',
      bgGradient: 'from-stone-950 via-amber-950 to-slate-900',
      accentColor: '#A8A29E',
      decorType: 'village',
      label: {
        en: 'The Hardworking Donkey',
        ta: 'பொதி சுமக்கும் உழைப்புக் கழுதை',
        hi: 'मेहनती गधा'
      }
    };
  }

  if (text.includes('horse') || text.includes('stallion') || text.includes('mare')) {
    return {
      motif: 'noble_steed',
      icon: '🐎 🌅 🌾',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-stone-900 to-slate-950',
      accentColor: '#F59E0B',
      decorType: 'village',
      label: {
        en: 'The Noble Royal Steed',
        ta: 'வீரப் புரவி குதிரை',
        hi: 'वीर अश्व'
      }
    };
  }

  if (text.includes('bull') || text.includes('ox') || text.includes('cow')) {
    return {
      motif: 'mighty_ox',
      icon: '🐂 🌾 🪵',
      theme: 'rustic_lime',
      bgGradient: 'from-stone-950 via-emerald-950 to-amber-950',
      accentColor: '#A3E635',
      decorType: 'village',
      label: {
        en: 'The Steadfast Bull & Ox',
        ta: 'உழவு மாடும் காளையும்',
        hi: 'बलशाली बैल'
      }
    };
  }

  if (text.includes('dog') || text.includes('hound')) {
    return {
      motif: 'faithful_hound',
      icon: '🐕 🍖 🏡',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-stone-900 to-slate-950',
      accentColor: '#FBBF24',
      decorType: 'village',
      label: {
        en: 'The Faithful Companion Dog',
        ta: 'நன்றியுள்ள தோழன் நாய்',
        hi: 'वफादार कुत्ता'
      }
    };
  }

  if (text.includes('cat') || text.includes('kitten')) {
    return {
      motif: 'cunning_cat',
      icon: '🐈 🥛 🐾',
      theme: 'slate_stone',
      bgGradient: 'from-slate-950 via-indigo-950 to-stone-900',
      accentColor: '#38BDF8',
      decorType: 'village',
      label: {
        en: 'The Witty & Curious Cat',
        ta: 'தந்திரப் பூனைக் கதை',
        hi: 'चतुर बिल्ली'
      }
    };
  }

  if (text.includes('mouse') || text.includes('rat') || text.includes('mice')) {
    return {
      motif: 'tiny_mouse',
      icon: '🐭 🧀 🌾',
      theme: 'slate_stone',
      bgGradient: 'from-stone-950 via-slate-900 to-amber-950',
      accentColor: '#CBD5E1',
      decorType: 'village',
      label: {
        en: 'The Clever Little Mouse',
        ta: 'சின்னஞ்சிறு விவேக எலி',
        hi: 'नन्हा बुद्धिमान चूहा'
      }
    };
  }

  if (text.includes('snake') || text.includes('serpent') || text.includes('cobra')) {
    return {
      motif: 'mystic_serpent',
      icon: '🐍 🌿 💎',
      theme: 'emerald_forest',
      bgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
      accentColor: '#34D399',
      decorType: 'forest',
      label: {
        en: 'The Ancient Serpent & Jewel',
        ta: 'புதையல் காக்கும் நாகம்',
        hi: 'रहस्यमयी नाग'
      }
    };
  }

  if (text.includes('bird') || text.includes('sparrow') || text.includes('parrot') || text.includes('peacock') || text.includes('eagle')) {
    return {
      motif: 'feathered_friend',
      icon: '🦚 🌳 🎶',
      theme: 'emerald_forest',
      bgGradient: 'from-teal-950 via-emerald-950 to-sky-950',
      accentColor: '#2DD4BF',
      decorType: 'forest',
      label: {
        en: 'The Birds of the Canopy',
        ta: 'மரக்கிளையின் வண்ணப் பறவைகள்',
        hi: 'जंगल के पक्षी'
      }
    };
  }

  if (text.includes('fish') || text.includes('ocean') || text.includes('river') || text.includes('lake') || text.includes('crab')) {
    return {
      motif: 'river_creature',
      icon: '🐟 🌊 🪸',
      theme: 'river_cyan',
      bgGradient: 'from-cyan-950 via-blue-950 to-slate-950',
      accentColor: '#38BDF8',
      decorType: 'waves',
      label: {
        en: 'The River & Ocean Depths',
        ta: 'நதிக்கரையும் நீர்வாழ் உலகமும்',
        hi: 'नदी और जलचर'
      }
    };
  }

  // 3. HUMAN FOLKLORE & CULTURAL ARCHETYPES
  if (text.includes('king') || text.includes('emperor') || text.includes('court') || text.includes('palace') || text.includes('throne')) {
    return {
      motif: 'royal_court',
      icon: '👑 🏛️ ✨',
      theme: 'royal_indigo',
      bgGradient: 'from-indigo-950 via-purple-950 to-slate-900',
      accentColor: '#F59E0B',
      decorType: 'palace',
      label: {
        en: 'The Royal Court & Throne',
        ta: 'மன்னரின் அரசவை விவேகம்',
        hi: 'शाही दरबार और न्याय'
      }
    };
  }

  if (text.includes('princess') || text.includes('queen') || text.includes('prince')) {
    return {
      motif: 'royal_heir',
      icon: '👸 🏰 🌸',
      theme: 'crimson_rose',
      bgGradient: 'from-rose-950 via-pink-950 to-indigo-950',
      accentColor: '#F43F5E',
      decorType: 'castle',
      label: {
        en: 'The Royal Palace & Princess',
        ta: 'அரண்மனை இளவரசியின் கதை',
        hi: 'राजकुमारी और महल'
      }
    };
  }

  if (text.includes('merchant') || text.includes('trader') || text.includes('gold') || text.includes('jewel') || text.includes('treasure')) {
    return {
      motif: 'merchant_wealth',
      icon: '💰 💎 ⚖️',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-yellow-950 to-slate-900',
      accentColor: '#FBBF24',
      decorType: 'scroll',
      label: {
        en: 'The Merchant & Honest Measure',
        ta: 'செல்வந்த வணிகனும் மாணிக்கமும்',
        hi: 'व्यापारी और खजाना'
      }
    };
  }

  if (text.includes('guru') || text.includes('scholar') || text.includes('teacher') || text.includes('sage') || text.includes('disciple')) {
    return {
      motif: 'wise_guru',
      icon: '📜 🪔 🧘‍♂️',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-orange-950 to-stone-900',
      accentColor: '#F97316',
      decorType: 'scroll',
      label: {
        en: 'The Ancient Sage & Disciples',
        ta: 'குருவின் உபதேசமும் சீடர்களும்',
        hi: 'गुरु और शिष्य'
      }
    };
  }

  if (text.includes('farmer') || text.includes('woodcutter') || text.includes('shepherd') || text.includes('village') || text.includes('potter')) {
    return {
      motif: 'village_life',
      icon: '🌾 🏡 🪵',
      theme: 'rustic_lime',
      bgGradient: 'from-lime-950 via-emerald-950 to-stone-900',
      accentColor: '#84CC16',
      decorType: 'village',
      label: {
        en: 'The Village & Honest Labor',
        ta: 'கிராமத்து உழைப்பாளியின் கதை',
        hi: 'मेहनती किसान और ग्रामीण'
      }
    };
  }

  if (text.includes('magic') || text.includes('fairy') || text.includes('witch') || text.includes('spell') || text.includes('ghost')) {
    return {
      motif: 'magic_realm',
      icon: '🪄 ✨ 🔮',
      theme: 'starlight_violet',
      bgGradient: 'from-purple-950 via-indigo-950 to-slate-950',
      accentColor: '#C084FC',
      decorType: 'stars',
      label: {
        en: 'Enchanted Realms & Wonders',
        ta: 'மாயமும் அதிசயங்களும்',
        hi: 'जादुई दुनिया और चमत्कार'
      }
    };
  }

  // 4. COLLECTION FALLBACKS
  const col = (story.collection || '').toLowerCase();
  if (col.includes('akbar')) {
    return {
      motif: 'akbar_birbal',
      icon: '👑 🏛️ 📜',
      theme: 'royal_indigo',
      bgGradient: 'from-indigo-950 via-blue-950 to-slate-900',
      accentColor: '#F59E0B',
      decorType: 'palace',
      label: {
        en: 'Akbar & Birbal Tales',
        ta: 'அக்பர்–பீர்பால் விவேகக் கதை',
        hi: 'अकबर–बीरबल की कहानियाँ'
      }
    };
  }

  if (col.includes('tenali')) {
    return {
      motif: 'tenali_rama',
      icon: '👳‍♂️ 🪷 🏛️',
      theme: 'emerald_forest',
      bgGradient: 'from-teal-950 via-emerald-950 to-slate-900',
      accentColor: '#10B981',
      decorType: 'palace',
      label: {
        en: 'Tenali Rama Tales',
        ta: 'தெனாலிராமன் நகைச்சுவைக் கதை',
        hi: 'तेनालीराम के किस्से'
      }
    };
  }

  if (col.includes('panchatantra')) {
    return {
      motif: 'panchatantra',
      icon: '📜 🐾 🌳',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-orange-950 to-emerald-950',
      accentColor: '#F59E0B',
      decorType: 'forest',
      label: {
        en: 'Panchatantra Animal Wisdom',
        ta: 'பஞ்சதந்திர வாழ்வியல் நீதி',
        hi: 'पंचतंत्र की नीति कथाएँ'
      }
    };
  }

  if (col.includes('jataka')) {
    return {
      motif: 'jataka_tales',
      icon: '🪷 🦌 🌟',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-yellow-950 to-stone-900',
      accentColor: '#FBBF24',
      decorType: 'scroll',
      label: {
        en: 'Jataka Tales of Compassion',
        ta: 'ஜாதகக் கதை – நற்பண்புகள்',
        hi: 'जातक कथाएँ'
      }
    };
  }

  if (col.includes('arabian')) {
    return {
      motif: 'arabian_nights',
      icon: '🌙 🕌 ⭐',
      theme: 'starlight_violet',
      bgGradient: 'from-indigo-950 via-slate-950 to-purple-950',
      accentColor: '#FBBF24',
      decorType: 'stars',
      label: {
        en: '1001 Arabian Nights',
        ta: 'ஆயிரத்தொரு இரவுகள் காவியம்',
        hi: 'अलिफ लैला की कहानियाँ'
      }
    };
  }

  if (col.includes('aesop')) {
    return {
      motif: 'aesops_fables',
      icon: '🏛️ 🦉 🍇',
      theme: 'emerald_forest',
      bgGradient: 'from-emerald-950 via-teal-950 to-stone-900',
      accentColor: '#10B981',
      decorType: 'forest',
      label: {
        en: "Aesop's Moral Fables",
        ta: 'ஈசாப் உலக நீதிக்கதை',
        hi: 'ईसप की नीतिकथाएँ'
      }
    };
  }

  if (col.includes('grimm')) {
    return {
      motif: 'grimm_fairy',
      icon: '🌲 🏰 ✨',
      theme: 'emerald_forest',
      bgGradient: 'from-emerald-950 via-slate-950 to-indigo-950',
      accentColor: '#34D399',
      decorType: 'castle',
      label: {
        en: 'Brothers Grimm Fairytales',
        ta: 'கிரிம் சகோதரர்கள் மாயக்கதை',
        hi: 'ग्रिम्स की परिकथाएँ'
      }
    };
  }

  if (col.includes('andersen')) {
    return {
      motif: 'andersen_tales',
      icon: '🦢 ❄️ 🏰',
      theme: 'river_cyan',
      bgGradient: 'from-sky-950 via-cyan-950 to-indigo-950',
      accentColor: '#38BDF8',
      decorType: 'castle',
      label: {
        en: 'Hans Christian Andersen Tales',
        ta: 'ஹான்ஸ் ஆண்டர்சன் இலக்கியக் கதை',
        hi: 'हंस एंडरसन की कहानियाँ'
      }
    };
  }

  if (col.includes('nasruddin')) {
    return {
      motif: 'nasruddin_tales',
      icon: '👳 🫏 💭',
      theme: 'amber_gold',
      bgGradient: 'from-amber-950 via-yellow-950 to-stone-900',
      accentColor: '#F59E0B',
      decorType: 'village',
      label: {
        en: 'Mulla Nasruddin Wit',
        ta: 'முல்லா நஸ்ருதீன் நகைச்சுவை',
        hi: 'मुल्ला नसरुद्दीन के किस्से'
      }
    };
  }

  if (col.includes('paramartha')) {
    return {
      motif: 'paramartha_tales',
      icon: '🥥 🌿 🌴',
      theme: 'rustic_lime',
      bgGradient: 'from-lime-950 via-emerald-950 to-amber-950',
      accentColor: '#84CC16',
      decorType: 'village',
      label: {
        en: 'Paramartha Guru Stories',
        ta: 'பரமார்த்த குருவின் நகைச்சுவை',
        hi: 'परमार्थ गुरु के किस्से'
      }
    };
  }

  if (col.includes('vikram')) {
    return {
      motif: 'vikram_vetal',
      icon: '🗡️ 💀 🌳',
      theme: 'slate_stone',
      bgGradient: 'from-slate-950 via-zinc-900 to-stone-950',
      accentColor: '#F59E0B',
      decorType: 'forest',
      label: {
        en: 'Vikram & Vetal Enigma',
        ta: 'விக்கிரமாதித்தன்–வேதாளம் நீதிப்புதிர்',
        hi: 'विक्रम और बेताल'
      }
    };
  }

  return {
    motif: 'world_folktale',
    icon: '📖 ✨ 🌍',
    theme: 'amber_gold',
    bgGradient: 'from-amber-950 via-stone-900 to-indigo-950',
    accentColor: '#F59E0B',
    decorType: 'scroll',
    label: {
      en: 'Timeless World Folktale',
      ta: 'அழியா உலக நீதிக்கதை',
      hi: 'विश्व प्रसिद्ध प्रेरक कथा'
    }
  };
}
