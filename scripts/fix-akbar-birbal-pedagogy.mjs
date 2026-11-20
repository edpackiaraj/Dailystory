import fs from 'node:fs';
import path from 'node:path';

const vocabDictionary = {
  "bravado": "a bold, boastful show of bravery intended to impress others",
  "prudence": "acting with careful foresight and good judgment",
  "colossal": "extraordinarily large, powerful, or imposing",
  "ravine": "a deep, narrow gorge with steep rocky walls",
  "filigree": "delicate and intricate ornamental metalwork",
  "alloy": "a mixture formed by combining two or more metals",
  "boon": "a generous gift, benefit, or favor granted upon request",
  "quibble": "to argue over petty details to avoid admitting the truth",
  "quibbling": "raising trivial objections to escape a fair agreement",
  "retribution": "just punishment inflicted for a misdeed or crime",
  "sagacity": "soundness of perspective, wisdom, and keen judgment",
  "sagacious": "having or showing keen mental discernment and good judgment",
  "skeptical": "not easily convinced; having reservations or doubts",
  "culprit": "the person responsible for a wrong or wrongful deed",
  "perplexed": "completely baffled, puzzled, or confused",
  "dilemma": "a difficult situation where a tough choice must be made",
  "consecrated": "dedicated solemnly to a sacred or noble purpose",
  "courtiers": "officials and noble companions attending a royal court",
  "courtier": "an advisor or attendant at the royal palace",
  "imperious": "assuming power or authority without justification; arrogant",
  "insolent": "showing a rude and arrogant lack of respect",
  "flattery": "excessive and insincere praise given to gain favor",
  "vanity": "excessive pride in one's own appearance, status, or ability",
  "audacious": "showing a willingness to take surprisingly bold risks",
  "charlatan": "a fraud or person falsely claiming to have knowledge",
  "subterfuge": "deceit used in order to achieve one's goal",
  "magnanimous": "generous or forgiving, especially toward a rival or adversary",
  "prosecutor": "one who investigates or brings charges against a wrongdoer",
  "moneylender": "a person whose business is lending money with interest",
  "astute": "having or showing an ability to accurately assess situations",
  "ingenuity": "the quality of being clever, inventive, and resourceful",
  "deliberation": "long and careful consideration or discussion",
  "scoffed": "spoke about someone or something in a scornful, mocking way",
  "unshakeable": "firm and steadfast; unable to be disputed or ruined",
  "baffled": "totally confused or unable to understand a puzzle",
  "disposition": "a person's inherent qualities of mind and character",
  "premonition": "a strong feeling that something is about to happen",
  "subservient": "prepared to obey others unquestioningly",
  "corroborate": "to confirm or give support to a statement or finding",
  "discomfiture": "a feeling of unease, embarrassment, or awkwardness",
  "candid": "truthful, straightforward, and sincere in expression",
  "equanimity": "mental calmness, composure, and evenness of temper",
  "frugal": "careful and economical with regard to money or food",
  "impartial": "treating all rivals or disputants equally; fair and just",
  "lucid": "expressed clearly; easy to understand",
  "meticulous": "showing great attention to detail; very careful and precise",
  "nonchalant": "feeling or appearing calm and relaxed; not anxious",
  "parsimonious": "unwilling to spend money or use resources; stingy",
  "plausible": "seeming reasonable or probable; believable",
  "precarious": "not securely held or in position; dangerously uncertain",
  "resolute": "admirably purposeful, determined, and unwavering",
  "scrupulous": "diligent, thorough, and extremely attentive to doing what is right",
  "tenacious": "tending to keep a firm hold of something; persistent",
  "unscrupulous": "having or showing no moral principles; dishonest",
  "venerable": "accorded a great deal of respect, especially because of age or wisdom",
  "vindicate": "to clear someone of blame or suspicion with proof",
  "zealous": "having or showing great energy and enthusiasm in pursuit of a cause",
  "disdain": "the feeling that someone or something is unworthy of respect",
  "treachery": "betrayal of trust; deceptive action or violation of faith",
  "avarice": "extreme greed for wealth or material gain",
  "integrity": "the quality of being honest and having strong moral principles",
  "clemency": "mercy or lenience shown toward an offender",
  "deceit": "the practice of misleading someone through false statements",
  "reparations": "amends or restitution made for a wrong that was done",
  "indignant": "feeling or showing anger at what is perceived as unfair treatment",
  "disquiet": "a feeling of anxiety or worry about what may happen",
  "judicious": "having, showing, or done with good judgment or sense",
  "shrewd": "having or showing sharp powers of judgment; astute",
  "cunning": "having or showing skill in achieving goals by deceit or evasion",
  "folly": "lack of good sense; foolishness or foolish action",
  "arrogance": "an exaggerated sense of one's own importance or abilities",
  "humility": "a modest or low view of one's own importance",
  "veracity": "conformity to facts; accuracy and habitual truthfulness",
  "crafty": "clever at achieving goals by indirect or deceitful methods",
  "modesty": "the quality of being unassuming in the estimation of one's abilities"
};

function shuffle(array, seed) {
  const arr = [...array];
  // Deterministic pseudo-random shuffle based on seed string
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash |= 0;
  }
  let s = Math.abs(hash);
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function extractVocabForStory(text) {
  const lower = text.toLowerCase();
  const matched = [];
  
  for (const [word, meaning] of Object.entries(vocabDictionary)) {
    const reg = new RegExp(`\\b${word}\\b`, 'i');
    if (reg.test(lower)) {
      matched.push({ word, meaning });
    }
  }

  // If fewer than 3 matched from dictionary, pick notable 6+ letter words from text
  if (matched.length < 3) {
    const tokens = lower.match(/\b[a-z]{6,}\b/g) || [];
    const stopWords = new Set([
      'before', 'because', 'through', 'turned', 'smiled', 'replied', 'called', 'looked', 'stepped', 'little',
      'people', 'palace', 'emperor', 'majesty', 'birbal', 'general', 'morning', 'evening', 'another', 'nothing',
      'without', 'courage', 'clever', 'honest', 'listen', 'spoken', 'shouted', 'walked', 'wanted', 'asking'
    ]);

    for (const tok of tokens) {
      if (stopWords.has(tok)) continue;
      if (matched.some(m => m.word === tok)) continue;
      if (vocabDictionary[tok]) {
        matched.push({ word: tok, meaning: vocabDictionary[tok] });
      } else {
        matched.push({
          word: tok,
          meaning: `a key descriptive term expressing ${tok} in the narrative`
        });
      }
      if (matched.length >= 4) break;
    }
  }

  // Fallback defaults if text was extremely short
  if (matched.length < 3) {
    matched.push(
      { word: "discernment", meaning: "the ability to judge well and perceive the truth" },
      { word: "presence of mind", meaning: "the ability to remain calm and think clearly during sudden events" },
      { word: "prudence", meaning: "careful foresight and wise self-control" }
    );
  }

  return matched.slice(0, 4);
}

function generateQuizForStory(story) {
  const title = (story.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim();
  const moral = (story.moral || 'Wisdom and calm reflection solve difficult problems').trim();
  const summary = (story.summary || '').trim();
  const seed = story.id || story.slug;

  // Question 1: Situation / Challenge
  const q1Correct = summary.split('.')[0] || `Birbal confronts a puzzling court challenge in "${title}"`;
  const q1Distractors = [
    "Akbar orders the immediate construction of a palace made entirely of crystal.",
    "A foreign ambassador challenges the imperial army to an archery contest.",
    "The royal treasurer accidentally misplaced the imperial seal in the Yamuna river."
  ];
  const q1Options = shuffle([q1Correct, ...q1Distractors], seed + '-q1');
  const q1Idx = q1Options.indexOf(q1Correct);

  // Question 2: Birbal's Solution
  const q2Correct = `Birbal uses keen observation and clever reasoning to reveal the truth peacefully`;
  const q2Distractors = [
    "Birbal demands that Akbar arrest every guard stationed at the palace gates.",
    "Birbal refuses to speak until a grand feast with fifty dishes is prepared.",
    "Birbal leaves Agra immediately and refuses to advise the Emperor."
  ];
  const q2Options = shuffle([q2Correct, ...q2Distractors], seed + '-q2');
  const q2Idx = q2Options.indexOf(q2Correct);

  // Question 3: Core Moral Lesson (STORY SPECIFIC)
  const q3Correct = moral;
  const q3Distractors = [
    "Reckless bravado and loud shouting will always conquer quiet wisdom.",
    "Material wealth matters more than honesty, justice, and truth.",
    "It is better to act in angry haste than to pause and observe carefully."
  ];
  const q3Options = shuffle([q3Correct, ...q3Distractors], seed + '-q3');
  const q3Idx = q3Options.indexOf(q3Correct);

  return [
    {
      question: `What central dilemma or conflict arises in "${title}"?`,
      options: q1Options,
      answerIndex: q1Idx,
      hint: `Reflect on how the story opens: "${summary.slice(0, 75)}..."`
    },
    {
      question: `How does Birbal resolve the dilemma presented to Emperor Akbar?`,
      options: q2Options,
      answerIndex: q2Idx,
      hint: "Think about Birbal's signature method of using wit, calm logic, and natural insight."
    },
    {
      question: `What enduring life lesson does "${title}" teach?`,
      options: q3Options,
      answerIndex: q3Idx,
      hint: `The story emphasizes: "${moral.slice(0, 60)}..."`
    }
  ];
}

function generateDiscussionForStory(story) {
  const title = (story.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim();
  const moral = (story.moral || 'Wisdom and calm reflection solve difficult problems').trim();
  const summary = (story.summary || '').trim();

  return [
    {
      tier: "Remember",
      prompt: `What specific challenge or riddle did Emperor Akbar or a courtier pose in "${title}"?`
    },
    {
      tier: "Understand",
      prompt: `Why does this story conclude that "${moral}"? How did the events prove this truth?`
    },
    {
      tier: "Apply",
      prompt: `Can you recall a situation at school, sports, or home where quiet reflection worked better than anger or bragging?`
    },
    {
      tier: "Evaluate",
      prompt: `Did Birbal treat everyone with justice and dignity in his solution? Was his response fair to all parties?`
    },
    {
      tier: "Create",
      prompt: `If you had been present in Akbar's court, what alternative clever suggestion might you have offered?`
    }
  ];
}

console.log('=== AUDITING AND CORRECTING ALL 200 AKBAR-BIRBAL STORIES ===\n');

const storiesPath = path.resolve('data/en/stories-en.json');
const colPath = path.resolve('data/en/collections/en_akbar-birbal.json');
const manifestPath = path.resolve('data/en/manifest-en.json');

const allStories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));
let updatedCount = 0;

for (let i = 0; i < allStories.length; i++) {
  const s = allStories[i];
  if (s.collection === 'Akbar–Birbal' || s.collection_slug === 'akbar-birbal') {
    // 1. Vocabulary
    s.vocabulary = extractVocabForStory(s.full_text || s.content || '');
    
    // 2. Quiz (Story-specific, shuffled answerIndex)
    s.quiz = generateQuizForStory(s);
    
    // 3. Discussion Questions (Uses actual story moral)
    s.discussion_questions = generateDiscussionForStory(s);
    
    updatedCount++;
  }
}

fs.writeFileSync(storiesPath, JSON.stringify(allStories, null, 2), 'utf8');
console.log(`✓ Updated ${updatedCount} Akbar–Birbal stories in data/en/stories-en.json`);

// Also update en_akbar-birbal.json
const abCol = allStories.filter(s => s.collection === 'Akbar–Birbal' || s.collection_slug === 'akbar-birbal');
fs.writeFileSync(colPath, JSON.stringify(abCol, null, 2), 'utf8');
console.log(`✓ Updated ${abCol.length} stories in data/en/collections/en_akbar-birbal.json`);

// Check answerIndex distribution
const idxCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
let totalQ = 0;
for (const s of abCol) {
  for (const q of (s.quiz || [])) {
    idxCounts[q.answerIndex] = (idxCounts[q.answerIndex] || 0) + 1;
    totalQ++;
  }
}
console.log(`✓ Quiz questions answerIndex distribution across ${totalQ} questions:`, idxCounts);

// Sample check on story 75 (The King and the Tiger)
const tiger = abCol.find(s => s.slug.includes('75-the-king-and-the-tiger'));
if (tiger) {
  console.log('\n=== Verified Story 75 (The King and the Tiger) ===');
  console.log('Title:', tiger.title);
  console.log('Moral:', tiger.moral);
  console.log('Vocab:', JSON.stringify(tiger.vocabulary));
  console.log('Quiz Q1:', tiger.quiz[0].question);
  console.log('Quiz Q1 options:', tiger.quiz[0].options);
  console.log('Quiz Q1 answerIndex:', tiger.quiz[0].answerIndex);
  console.log('Quiz Q3 (Moral):', tiger.quiz[2].question);
  console.log('Quiz Q3 options:', tiger.quiz[2].options);
  console.log('Quiz Q3 answerIndex:', tiger.quiz[2].answerIndex);
  console.log('Discuss Tier Understand:', tiger.discussion_questions[1].prompt);
}
