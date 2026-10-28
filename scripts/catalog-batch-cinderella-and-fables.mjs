import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

export const cinderellaAndFablesStories = [
  // --- CHARLES PERRAULT ---
  {
    id: "perrault-puss-in-boots",
    slug: "puss-in-boots-and-the-clever-cat",
    language: "en",
    title: "Puss in Boots and the Gift of Loyalty",
    genre: "Fairy Tales",
    collection: "Charles Perrault",
    culture_region: "France / European Classic",
    age_group: "All",
    summary: "When a poor miller's son inherits only a small tomcat, the clever cat asks for a pair of leather boots and uses ingenuity and loyalty to transform his master's fortune.",
    keywords: ["puss in boots perrault", "clever cat fairy tale", "charles perrault tales for kids", "classic fairy tales loyalty"],
    tags: ["Fairy Tale", "Loyalty", "Wisdom", "Cleverness", "Friendship"],
    full_text: "Once upon a time, an old miller died and left all his earthly possessions to his three sons. The eldest received the flour mill, the second received the donkey, and the youngest son, Julien, received only the family tomcat.\n\nJulien was heartbroken. 'My brothers can join together and earn an honest living,' he sighed, 'but what can I do with a cat? Once I feed him, I shall starve!'\n\nThe cat, who was dozing by the fire, stood up on his hind legs, arched his back, and spoke in a refined, courteous voice: 'Do not despair, good master! You possess far greater wealth than you realize. Only grant me a sturdy pair of leather boots and a canvas sack with drawstrings, and you will see that your inheritance is not as meager as you believe.'\n\nJulien was astonished, but remembering the cat's remarkable cunning at catching mice, he spent his last few coins to commission a cobbler to craft a handsome pair of leather boots. The cat pulled on the boots with great pride, slung the sack over his shoulder, and strode out into the morning meadow like a gallant nobleman.\n\nFirst, Puss in Boots went to a grassy warren. He filled the sack with sweet bran and clover, laid it open upon the grass, and played dead. Soon, a plump young rabbit hopped inside to nibble the clover. Puss swiftly pulled the drawstrings tight! Instead of eating the rabbit himself, Puss marched straight to the King's royal palace.\n\nBowing low before the throne, Puss announced: 'Sire, I present you with this wild rabbit, sent with deep respect from my noble lord, the Marquess of Carabas' (a grand title Puss invented on the spot for his master).\n\nThe King was delighted and thanked the courteous cat. Over the next two months, Puss regularly brought partridges and fresh game to the palace, always presenting them as gifts from the Marquess of Carabas.\n\nOne sunny afternoon, knowing that the King and his daughter—the most kind-hearted princess in the realm—would be riding in their royal coach along the riverbank, Puss sprinted to his master: 'Quick! Take off your clothes and bathe in the river, and leave the rest to me!'\n\nJulien obeyed. As the King's golden carriage rolled past, Puss ran to the roadside screaming at the top of his lungs: 'Help! Help! The Marquess of Carabas is drowning! Thieves have stolen his clothes!'\n\nThe King recognized the famous cat and ordered his royal guards to rescue the young man. The King opened his royal wardrobe trunk and presented Julien with a splendid suit of embroidered silk and a feathered velvet hat. When Julien stepped forward, tall, handsome, and naturally polite, the princess smiled warmly, and the King invited him to ride inside the royal coach.\n\nPuss sprinted ahead. Coming upon meadows where farmers were mowing hay, Puss called out: 'Good people, tell the King that these meadows belong to the Marquess of Carabas, or you shall face trouble!' When the carriage passed, the happy farmers cheered that the lush lands belonged to the generous Marquess.\n\nFinally, Puss reached a magnificent stone castle belonging to a wealthy ogre who possessed the magical power of shape-shifting. Puss walked boldly into the great hall and bowed: 'Great lord, I have heard it said that you can transform into any creature at will, even a roaring lion!'\n\n'Indeed I can!' roared the boastful ogre. In a flash, he transformed into a terrifying lion with golden fangs. Puss scrambled up the curtains in fright!\n\nWhen the ogre returned to his normal shape, Puss bowed again: 'Magnificent! But surely it is impossible for one so colossal to turn into a creature as tiny as a mouse? That would be too difficult even for you.'\n\n'Impossible? Watch this!' scoffed the vain ogre. Instantly, the ogre transformed into a tiny brown mouse scampering across the stone floor. Puss leaped like lightning, pounced upon the mouse, and that was the end of the ogre's tyranny!\n\nWhen the King's carriage arrived at the castle gates, Puss opened the doors wide: 'Welcome, Your Majesty, to the castle of my master, the Marquess of Carabas!'\n\nThe King was enchanted by Julien's modesty, kindness, and fine castle. Seeing that Julien and the princess had fallen in love with mutual admiration, the King gave his blessing for their marriage. Julien never forgot that his happiness was born from loyalty, and Puss in Boots became a great lord, chasing mice only for recreation on sunny afternoons.",
    moral: "Resourcefulness, loyalty, and courtesy are more valuable than mere inherited wealth. A clever and faithful companion can turn hardship into triumph.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of Puss in Boots wearing leather boots and carrying his sack before the royal carriage",
    word_count: 850,
    reading_time: "5 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-12-05",
    is_bedtime: false,
    quiz: [
      {
        question: "What gift did the youngest son inherit from his father?",
        options: [
          "(Recommended) Only the family tomcat",
          "A windmill",
          "A chest of gold coins"
        ],
        answerIndex: 0,
        hint: "His older brothers got the mill and donkey, while he received the cat."
      },
      {
        question: "How did Puss defeat the boastful shape-shifting ogre?",
        options: [
          "(Recommended) By challenging the ogre to turn into a tiny mouse and then catching him",
          "By fighting him with a sword",
          "By singing a lullaby"
        ],
        answerIndex: 0,
        hint: "He used the ogre's own vanity to make him turn into a small mouse."
      },
      {
        question: "What name did Puss invent for his master?",
        options: [
          "The Marquess of Carabas",
          "The Duke of Paris",
          "The Count of Monte Cristo"
        ],
        answerIndex: 0,
        hint: "He gave his humble master a grand aristocratic title."
      }
    ],
    author: "Charles Perrault (French Fairy Tale Classic)",
    status: "published",
    content_notes: "World-famous classic fairy tale celebrating loyalty, clever strategy, and transformation. Safe for all.",
    values: ["loyalty", "cleverness", "friendship", "gratitude"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "meager", meaning: "lacking in quantity or quality; lean and thin" },
      { word: "gallant", meaning: "brave, heroic, and exceptionally polite and attentive" },
      { word: "warren", meaning: "a network of interconnected rabbit burrows" },
      { word: "tyranny", meaning: "cruel, unreasonable, or arbitrary use of power or control" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What two items did the cat ask his master to buy for him?" },
      { tier: "Understand", question: "Why did Puss bring gifts to the King over several months before introducing Julien?" },
      { tier: "Apply", question: "How can loyalty and encouragement from a good friend help someone who feels hopeless?" },
      { tier: "Evaluate", question: "Was Puss using his wit for good or for trickery? How was the outcome beneficial?" },
      { tier: "Create", question: "Draw a funny picture of Puss in Boots proudly adjusting his leather boots before a mirror." }
    ],
    reflection_prompt: "When you believe in a friend and stand loyally by their side, you help them see the noble strengths they carry within.",
    activity: "Tell a close friend or family member one specific thing you admire about their character.",
    mood: ["brave", "funny", "happy"],
    teaser: "Tomorrow, discover what happened when kind words brought forth pearls and diamonds from a gentle sister's lips!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "perrault-diamonds-and-toads",
    slug: "diamonds-and-toads-the-power-of-gentle-speech",
    language: "en",
    title: "The Two Sisters: Diamonds and Gentle Words",
    genre: "Fairy Tales",
    collection: "Charles Perrault",
    culture_region: "France / European Classic",
    age_group: "All",
    summary: "At a village spring, a gentle maiden offers fresh water to an elderly traveler, receiving a wondrous gift: whenever she speaks, flowers, pearls, and diamonds fall from her lips. A timeless parable on the power of kind words.",
    keywords: ["diamonds and toads perrault", "kind words fairy tale", "charles perrault moral stories", "pearls and flowers from mouth story"],
    tags: ["Fairy Tale", "Kindness", "Speech", "Politeness", "Bedtime"],
    full_text: "Once upon a time, there was a proud widow who had two daughters. The elder daughter looked exactly like her mother in temper and appearance: she was arrogant, quarrelsome, and selfish. The younger daughter, named Rose, was the true image of her late father: sweet-tempered, humble, extraordinarily kind, and as beautiful as the dawn.\n\nThe mother favored the haughty older daughter and made poor Rose do all the hard chores of the cottage. Twice every day, Rose had to walk a mile into the woods carrying a heavy clay pitcher to draw fresh water from a sparkling forest spring.\n\nOne warm afternoon, while Rose was filling her pitcher at the spring, a poor, frail old woman approached, leaning upon a walking staff. 'Dear child,' whispered the woman, 'would you give a thirsty traveler a drink from your fresh pitcher?'\n\n'With all my heart, good mother,' Rose replied with a warm, radiant smile. She immediately rinsed the clay jug, dipped it into the clearest, coolest depths of the spring, and held it up with both hands so the weary woman could drink with ease.\n\nWhen the woman had refreshed herself, a gentle golden light enveloped her figure. The humble traveler was, in truth, a wise and benevolent forest fairy who had taken the guise of a poor woman to test the girl's true heart.\n\n'You are so gentle, courteous, and good,' said the fairy with a tender smile, 'that I bestow upon you a gift: with every word you speak, there shall fall from your lips a fragrant rose, a pearl, or a sparkling diamond.'\n\nWhen Rose returned home, her mother scolded her sharply for taking so long. 'I beg your pardon, mother, for tarrying,' Rose answered softly.\n\nAs she spoke those gentle words, lo and behold! Two crimson roses, two luminous white pearls, and two sparkling diamonds tumbled from her lips onto the wooden table!\n\n'What is this I see?' gasped the mother in greedy astonishment. 'Pearls and diamonds falling from your mouth? How can this be, child?'\n\nRose innocently recounted her encounter with the old woman at the spring, and with every sentence she uttered, glistening rubies, fragrant lilies, and flawless diamonds cascaded across the room like a shower of jewels.\n\nThe mother ran to her haughty elder daughter: 'Fanny! Look at these riches! Go to the spring immediately with our silver jug! If an old woman asks for water, give her a drink so you may receive the same miraculous gift!'\n\nThe spoiled elder sister complained bitterly about walking into the woods, but her greed won out. She carried the heavy silver jug to the spring.\n\nShe had barely arrived when a magnificent lady dressed in shimmering silk gowns stepped out from the trees. It was the same fairy, who had now taken the appearance of a wealthy princess to test the older girl's courtesy.\n\n'Young maiden,' said the lady politely, 'would you give me a sip of water from your silver jug?'\n\nThe haughty girl sneered: 'Do you think I came all this way with a heavy silver jug just to serve you water? Bring your own cup if you are thirsty! I am not your servant!'\n\nThe fairy looked upon her with sorrowful disappointment: 'You have very little courtesy or kindness in your heart. Since you choose harshness, this shall be your gift: with every word you speak, there shall fall from your lips a toad, a serpent, or a creeping spider.'\n\nWhen the girl hurried back home, her mother greeted her at the door: 'Well, my dear daughter, did you receive the gift?'\n\n'I certainly did!' spat the angry daughter. But the moment she opened her mouth, two slimy toads and two hissing serpents tumbled out upon the floor!\n\n'Horror!' cried the mother, jumping back in terror. Furious, the mother blamed poor Rose and chased the gentle girl out into the peaceful forest. Rose wandered into the woodland, weeping soft tears.\n\nThere, the King's son, returning from a woodland ride, found Rose sitting among the bluebells. Struck by her modesty and grace, he asked why she was alone. Rose answered him in her sweet voice, and as she spoke, blossoms, pearls, and diamonds fell gently at her feet. The prince was enchanted not by the gems, but by the kindness, humility, and radiant truth that lived in every word she spoke.\n\nThe prince brought Rose to the palace, where they were married in joyful celebration. Rose used her gifts to establish gardens, schools, and care homes across the kingdom, reminding every child that kind words are the most precious jewels a human heart can ever offer.",
    moral: "Kind and polite words are like diamonds that beautify the world, while harsh and hateful speech brings poison and discord. The tongue reflects the true condition of the soul.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of the gentle maiden Rose speaking with flowers and diamonds falling gracefully from her lips",
    word_count: 820,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-12-06",
    is_bedtime: true,
    quiz: [
      {
        question: "What gift did the forest fairy bestow upon the gentle daughter Rose?",
        options: [
          "(Recommended) Roses, pearls, and diamonds would fall from her lips with every kind word",
          "A purse that never ran out of gold",
          "A pair of flying wings"
        ],
        answerIndex: 0,
        hint: "Her gentle speech brought forth flowers and precious jewels."
      },
      {
        question: "How did the elder sister treat the fairy when asked for water?",
        options: [
          "(Recommended) With rude, arrogant, and insulting words",
          "She gave her the whole jug",
          "She invited her home"
        ],
        answerIndex: 0,
        hint: "She refused coldly and rudely dismissed the lady."
      },
      {
        question: "What fell from the elder sister's mouth because of her harsh temper?",
        options: [
          "Toads, serpents, and spiders",
          "Cold ice cubes",
          "Dry leaves"
        ],
        answerIndex: 0,
        hint: "Her cruel words manifested as creeping and hissing creatures."
      }
    ],
    author: "Charles Perrault (French Fairy Tale Classic)",
    status: "published",
    content_notes: "Classic allegory on courtesy, kindness in speech, and the beauty of gentle manners. Safe for all.",
    values: ["kindness", "respect", "politeness", "humility", "empathy"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "haughty", meaning: "arrogantly superior and disdainful of others" },
      { word: "tarrying", meaning: "staying longer than intended; delaying leaving a place" },
      { word: "enveloped", meaning: "wrapped up, covered, or surrounded completely" },
      { word: "cascaded", meaning: "poured downward rapidly and in large quantities" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Where did the two sisters go to draw water?" },
      { tier: "Understand", question: "What do the 'diamonds' and 'toads' symbolize about how our words affect others?" },
      { tier: "Apply", question: "When someone is rude to you, how can choosing gentle words prevent an argument?" },
      { tier: "Evaluate", question: "Why is inner kindness more attractive than outward beauty or wealth?" },
      { tier: "Create", question: "Write five 'Diamond Words' (words of encouragement) you can say to someone who is having a tough day." }
    ],
    reflection_prompt: "Every word we speak leaves something behind in someone's heart—either a rose of encouragement or a thorn of hurt. What will you plant today?",
    activity: "Practice speaking only kind, polite, and encouraging words for the rest of the day. Notice how people smile back at you.",
    mood: ["calm", "comforting", "happy"],
    teaser: "Tomorrow, discover what happened when an old frontier farmer in ancient China lost his only horse!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- CHINESE FOLKTALES & FABLES ---
  {
    id: "chinese-frontier-horse",
    slug: "the-old-man-at-the-frontier-and-his-horse-sai-weng",
    language: "en",
    title: "The Old Man at the Frontier and His Horse (Sai Weng Shi Ma)",
    genre: "Folktales",
    collection: "Chinese Folktales and Fables",
    culture_region: "Ancient China",
    age_group: "All",
    summary: "When an old frontier farmer loses his prized horse, his neighbors offer condolences. But the wise old man replies: 'Who knows if this is bad luck?' A timeless classic on equanimity and life's hidden blessings.",
    keywords: ["sai weng shi ma story", "old man at frontier horse fable", "chinese wisdom stories for kids", "blessing in disguise folktale"],
    tags: ["Folktale", "Wisdom", "Patience", "Equanimity", "Bedtime"],
    full_text: "Long ago, near the northern frontier border of ancient China, lived a tranquil old farmer named Sai Weng. He lived in a simple wooden house with his only son. Sai Weng was known throughout the province for his serene mind and deep understanding of the natural ebb and flow of life.\n\nSai Weng owned one prized possession: a magnificent white mare with strong legs and a gentle temperament. One morning, the paddock gate broke open in the wind, and the white mare bolted into the wild northern grasslands beyond the Great Wall.\n\nWhen the village neighbors heard the news, they gathered at Sai Weng's porch with long faces: 'Oh, venerable Sai Weng! What terrible, tragic misfortune! Your only horse has vanished, and now your farm work will suffer! We are so sorry for your bad luck!'\n\nSai Weng poured hot jasmine tea for his neighbors and smiled with calm serenity: 'Thank you for your sympathy, good neighbors. But who knows whether this is truly bad luck or good fortune?'\n\nThe neighbors scratched their heads in bewilderment. *'How could losing one's only valuable horse ever be good fortune?'* they whispered among themselves, thinking the old man had lost his senses.\n\nA few months passed. One breezy autumn morning, the sound of galloping hooves echoed across the meadow. To everyone's astonishment, the white mare returned! And she was not alone: beside her galloped a magnificent, fiery black stallion from the northern steppe, one of the finest wild steeds in all the empire!\n\nThe neighbors rushed to Sai Weng's house, cheering and clapping: 'Sai Weng! You were right! What incredible, miraculous good luck! You lost one horse and now you have two, including a royal-quality stallion! You are truly blessed!'\n\nSai Weng smiled gently, offering them fresh tea: 'Thank you, dear friends. But who knows whether this is truly good luck or misfortune?'\n\nThe neighbors shook their heads in exasperation. *'The old man is impossible to satisfy!'* they muttered.\n\nSai Weng's son loved riding the spirited black stallion across the meadows. One afternoon, while galloping over rocky hills, the fiery stallion bucked unexpectedly. The young man fell heavily onto the stones and broke his leg in two places.\n\nThe village doctor set the bone, but declared that the son would walk with a limp for the rest of his days. The neighbors hurried to Sai Weng's cottage with tears in their eyes: 'Sai Weng, what a dreadful catastrophe! Your only son is crippled and cannot help you harvest the crops! This horse was a terrible curse!'\n\nSai Weng sat peacefully beside his son's bed, gently bathing the boy's brow with cool water. He turned to the neighbors and said quietly: 'Do not grieve, friends. Everything has its season and purpose. Who knows whether this is truly a tragedy or a blessing?'\n\nThe neighbors were utterly dumbfounded. A crippled son a blessing?\n\nJust one year later, a neighboring warlord launched a sudden, massive military invasion across the northern border. The Emperor issued an emergency imperial decree: every able-bodied young man in the province was conscripted immediately into the imperial army to march to the front lines.\n\nNine out of ten young men who marched into that fierce border war never returned home. But because Sai Weng's son had a broken leg and walked with a limp, the imperial recruiting officers passed him by. The son remained safely at home with his aging father, tending the farm, healing, and living to a ripe, peaceful old age.\n\nOnly then did the entire village finally understand Sai Weng's eternal wisdom: life is a tapestry woven of unexpected threads. What seems like a bitter misfortune today often conceals tomorrow's greatest salvation, and what appears to be shiny luck can carry unseen trials. A wise heart meets every turn of life with calm patience, gratitude, and peace.",
    moral: "Life is full of unexpected changes. Do not be overly distraught by misfortune or overly boastful in good times. Meet every season with equanimity, patience, and hope.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of wise old Sai Weng drinking tea peacefully as his white mare returns with the wild stallion",
    word_count: 730,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-12-07",
    is_bedtime: true,
    quiz: [
      {
        question: "What did Sai Weng say whenever something seemingly good or bad happened?",
        options: [
          "(Recommended) 'Who knows whether this is good fortune or misfortune?'",
          "Everything is ruined forever",
          "We must celebrate with fireworks"
        ],
        answerIndex: 0,
        hint: "He reminded everyone that the future remains unseen."
      },
      {
        question: "Why was the son spared from being conscripted into the dangerous war?",
        options: [
          "(Recommended) His broken leg made him unfit for military service, keeping him safe",
          "He hid in a cave",
          "He paid a bag of gold"
        ],
        answerIndex: 0,
        hint: "The injury from the horse accident saved his life when the army arrived."
      },
      {
        question: "What ancient Chinese proverb originates from this story?",
        options: [
          "Sai Weng Shi Ma (Blessing in disguise / The frontier old man's horse)",
          "A frog in the well",
          "Painting dragons with eyes"
        ],
        answerIndex: 0,
        hint: "The famous idiom refers to Sai Weng losing his horse."
      }
    ],
    author: "Huainanzi (Ancient Chinese Philosophical Classic)",
    status: "published",
    content_notes: "Classic Daoist parable on equanimity, perspective, and emotional resilience. Family safe.",
    values: ["patience", "wisdom", "gratitude", "peace", "resilience"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "equanimity", meaning: "mental calmness, composure, and evenness of temper, especially in difficult situations" },
      { word: "bewilderment", meaning: "a feeling of being completely perplexed and confused" },
      { word: "conscripted", meaning: "enlisted compulsorily into the armed services" },
      { word: "tapestry", meaning: "a complex combination of events, people, or elements woven together" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Where did Sai Weng live with his son?" },
      { tier: "Understand", question: "Why is it wise not to jump to conclusions when something disappointing happens?" },
      { tier: "Apply", question: "Can you think of a time when missing out on something turned out to be good for you later?" },
      { tier: "Evaluate", question: "How does staying calm like Sai Weng help our mental health during stressful times?" },
      { tier: "Create", question: "Write a short poem about the white horse galloping under the stars." }
    ],
    reflection_prompt: "When plans do not go the way you hoped, remind yourself: *A closed door often guides you to a better window.*",
    activity: "Whenever you feel frustrated today, pause and say: 'Let us see what good might come from this.'",
    mood: ["calm", "comforting", "brave"],
    teaser: "Tomorrow, discover what happened when a little frog living in a narrow well met a sea turtle from the vast Eastern Ocean!",
    series_id: null,
    part_number: null,
    reviewed: true
  }
];

let added = 0;
for (const story of cinderellaAndFablesStories) {
  if (!existingIds.has(story.id)) {
    existing.push(story);
    existingIds.add(story.id);
    added++;
    console.log(`[Cinderella & Fables Batch] Added: "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Cinderella & Fables Batch] Done! Added ${added} stories. Total stories in English: ${existing.length}`);
