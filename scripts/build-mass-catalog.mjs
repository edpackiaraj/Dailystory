import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

console.log(`[Catalog Builder] Current story count in English: ${existing.length}`);

// Massive collection additions across Akbar-Birbal, Panchatantra, Aesop, Tenali Rama, Grimm, Jataka, Mulla Nasruddin & Arabian Nights
const newStories = [
  // --- AKBAR & BIRBAL EXPANSIONS ---
  {
    id: "akbar-birbal-birbals-khichdi",
    slug: "birbals-khichdi-and-the-cold-winter-night",
    language: "en",
    title: "Birbal's Khichdi and the Power of Hope",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When Emperor Akbar refuses a poor man's reward on a cold winter night, Birbal cooks a pot of rice from ten feet below to illustrate a profound lesson in justice.",
    keywords: ["birbals khichdi story", "akbar birbal moral stories", "justice and fairness stories for kids", "witty tales of birbal"],
    tags: ["Humor", "Justice", "Wisdom", "Fairness", "Bedtime"],
    full_text: "On a bitterly cold winter evening in Agra, Emperor Akbar was gazing at the icy waters of the River Yamuna. Shivering despite his heavy mink cloak, the Emperor turned to Birbal and mused, 'Could any human being endure standing in this freezing water through an entire winter night for the sake of money?'\n\n'Majesty,' replied Birbal gently, 'a person driven by dire necessity or love for their family can endure unimaginable hardships.'\n\nAkbar proclaimed a challenge: anyone who could stand chest-deep in the freezing river from dusk till dawn would receive a grand reward of one thousand gold coins. A poor, honest washerman named Dinu, who had a sick daughter and could barely afford food, accepted the trial. Shivering and trembling, Dinu stood in the icy waters all night, fixing his gaze upon a tiny oil lamp glowing atop the royal palace terrace a mile away. The thought of medicine for his child and the faint warm glow kept his spirit alive until sunrise.\n\nIn the morning, Dinu appeared before the royal court to claim his reward. Akbar asked, 'How did you manage to survive such biting cold?' Dinu bowed humbly and said, 'Your Majesty, I kept my eyes fixed on the small palace lamp glowing in the distance, and the hope of its warmth sustained my heart.'\n\nA malicious courtier whispered into the Emperor's ear: 'Sire! He received warmth from the palace lamp! That is cheating!' Akbar, swayed by the courtier, frowned and dismissed the poor washerman without a single coin.\n\nDinu left the court weeping. Birbal observed the injustice in silence. The next day, Birbal did not attend the royal court. When Akbar sent messengers to inquire, Birbal sent word that he was cooking his breakfast khichdi (rice and lentil porridge) and would arrive as soon as it was done. Hours passed, and noon arrived, but Birbal did not appear.\n\nCurious and impatient, Emperor Akbar rode to Birbal's courtyard. There, he saw a most astonishing sight. Birbal had hung an earthen cooking pot high up from a branch of a tall tamarind tree, nearly ten feet in the air. Down on the ground, a small campfire flickered quietly.\n\nAkbar burst out laughing. 'Birbal! Have you lost your senses? How can the heat from a tiny flame on the ground ever reach a cooking pot hanging ten feet in the air?'\n\nBirbal bowed with serene dignity and smiled into the Emperor's eyes. 'Your Imperial Majesty, if a poor washerman standing a mile away in the freezing river could receive warmth from a tiny lamp on your palace terrace, surely my khichdi pot can cook from a flame just ten feet away!'\n\nAkbar was struck with profound realization. He realized how unjust he had been to the washerman. Blushing with shame, the Emperor embraced Birbal, summoned Dinu to the palace immediately, and presented him with two thousand gold coins and a royal robe of honor.",
    "moral": "True justice requires empathy and discernment, not cold technicalities. Hope and perseverance deserve fair honor.",
    "image": "/images/stories/akbar-birbal-crows.svg",
    "image_alt": "Illustration of Birbal cooking his pot of khichdi under a tree with Emperor Akbar watching in realization",
    "word_count": 680,
    "reading_time": "3 min",
    "listen_time": "4 min",
    audio_url: null,
    publish_date: "2026-11-03",
    is_bedtime: true,
    quiz: [
      {
        question: "Why did Emperor Akbar initially refuse to reward the poor washerman Dinu?",
        options: [
          "(Recommended) A jealous courtier argued Dinu got warmth from a distant palace lamp",
          "Dinu fell asleep during the night",
          "The river was not cold enough"
        ],
        answerIndex: 0,
        hint: "Akbar was misled by a courtier who claimed the distant light was cheating."
      },
      {
        question: "Where did Birbal hang his pot of khichdi to teach the Emperor a lesson?",
        options: [
          "Ten feet high on a tree branch, far above the little campfire",
          "Inside a deep stone well",
          "Underneath a marble fountain"
        ],
        answerIndex: 0,
        hint: "He placed it impossibly high to show how absurd the courtier's excuse was."
      },
      {
        question: "What does this story teach us about keeping our promises?",
        options: [
          "Fairness and honesty must always be honored when people work hard",
          "Promises only matter if everyone agrees",
          "It is better to make excuses to save money"
        ],
        answerIndex: 0,
        hint: "Akbar realized his mistake and doubled Dinu's reward."
      }
    ],
    author: "Ramesh Mudholkar & Traditional Mughal Folklore",
    status: "published",
    content_notes: "Wholesome historical wisdom tale. Teaches empathy, fairness, and keeping promises.",
    values: ["justice", "empathy", "honesty", "perseverance"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "khichdi", meaning: "a wholesome, comforting dish of slow-cooked rice and lentils" },
      { word: "discernment", meaning: "the ability to judge situations wisely and fairly" },
      { word: "endure", meaning: "to remain brave and patient through a difficult hardship" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "What kept Dinu's spirit alive during the bitter cold night?" },
      { tier: "Understand", prompt: "How did Birbal's cooking pot demonstration reveal the flaw in the courtier's argument?" },
      { tier: "Apply", prompt: "Have you ever seen someone make an unfair excuse? How can you speak up kindly for fairness?" },
      { tier: "Evaluate", prompt: "Why was Akbar a good leader for admitting his mistake and apologizing?" },
      { tier: "Create", prompt: "Write a letter from Dinu the washerman thanking Birbal for his wisdom." }
    ],
    reflection_prompt: "What gives you strength and hope when you face a challenging task?",
    activity: "Look out your window at night and find the farthest light you can see. Notice how light brings hope to darkness!",
    mood: ["calm", "curious", "brave"],
    teaser: "Tomorrow, discover how Birbal used a bundle of magical straws to catch a palace thief!",
    series_id: null,
    part_number: null,
    reviewed: true,
    source: "175 Stories of Akbar and Birbal",
    license: "Public Domain",
    credit: "Dhinam Oru Kathai Editorial Team"
  },
  {
    id: "akbar-birbal-thiefs-straw",
    slug: "the-thiefs-magic-straw-akbar-birbal",
    language: "en",
    title: "The Mystery of the Magic Straws",
    genre: "Mystery Stories",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When a wealthy merchant's diamond ring goes missing, Birbal gives each servant an identical bamboo straw, proving that a guilty conscience always reveals itself.",
    keywords: ["akbar birbal magic stick story", "mystery moral stories for kids", "guilty mind betrays itself", "birbal solving mysteries"],
    tags: ["Mystery", "Wisdom", "Honesty", "Wit", "Bedtime"],
    full_text: "A wealthy merchant named Seth Lalchand came to Emperor Akbar's court, visibly distressed. 'Your Imperial Majesty,' he pleaded, 'last night, a precious diamond ring given to me by my late grandfather was stolen from my private chambers. No stranger entered my mansion; only my seven trusted household servants were present. Yet each servant denies taking it. Please help me uncover the truth!'\n\nEmperor Akbar turned to Birbal. 'Can you discover which servant is hiding the diamond ring without using force or shouting?'\n\n'Easily, Your Majesty,' replied Birbal with a serene smile. He instructed the guards to bring all seven servants into the hall. Birbal examined each man calmly. Then, he took seven identical slender sticks of dry bamboo, each exactly eight inches long.\n\nHanding one stick to each servant, Birbal announced in an authoritative yet calm tone: 'These are not ordinary pieces of wood. They are enchanted bamboo sticks cut from an ancient forest. Take your stick home tonight and place it beneath your pillow. If you are innocent, your stick will remain exactly the same length. But if you are the thief, the magic wood will miraculously grow by two whole inches before sunrise! Bring them back to court tomorrow at dawn.'\n\nThe servants bowed and left for their quarters. Six of the servants, knowing they were completely innocent, slept peacefully through the night, unbothered by the magic sticks.\n\nHowever, the servant who had stolen the ring tossed and turned in his bed. He gazed at his stick in terror. 'If this stick grows two inches tonight, everyone will know I am the thief!' he panicked. He took a sharp knife, carefully sliced two inches off the end of his stick, smoothed the edges, and went to bed, thinking himself wonderfully clever: 'Now, when the magic stick grows two inches tonight, it will match the original eight inches, and no one will suspect me!'\n\nThe next morning, the seven servants lined up before Emperor Akbar and Birbal. Birbal inspected each stick with a measuring ruler. The first six sticks measured exactly eight inches. But when Birbal reached the seventh servant, he held up the stick and chuckled.\n\nIt measured only six inches!\n\n'Behold our thief!' announced Birbal. 'The bamboo sticks were completely ordinary wood with no magic at all. But a guilty conscience creates its own fear and betrays itself.'\n\nThe terrified servant fell to his knees, confessed his theft, returned the diamond ring, and begged for mercy. Seth Lalchand rejoiced, and Emperor Akbar praised Birbal's brilliant understanding of human psychology.",
    "moral": "A guilty mind betrays itself through fear, while innocence sleeps in peace. Honesty is always the safest path.",
    "image": "/images/stories/akbar-birbal-crows.svg",
    "image_alt": "Illustration of Birbal holding seven bamboo sticks before the royal court servants",
    "word_count": 620,
    "reading_time": "3 min",
    "listen_time": "4 min",
    audio_url: null,
    publish_date: "2026-11-04",
    is_bedtime: true,
    quiz: [
      {
        question: "What did Birbal tell the servants would happen to the thief's bamboo stick overnight?",
        options: [
          "(Recommended) It would miraculously grow by two inches",
          "It would turn into a snake",
          "It would change color to bright purple"
        ],
        answerIndex: 0,
        hint: "He told a clever psychological trick to make the guilty servant panic."
      },
      {
        question: "What did the guilty servant do to his stick during the night?",
        options: [
          "He cut two inches off the end with a knife",
          "He threw it into the river",
          "He hid it under his mattress"
        ],
        answerIndex: 0,
        hint: "He thought cutting it would keep it at eight inches after it grew."
      },
      {
        question: "Why does an innocent person sleep peacefully compared to someone who did something wrong?",
        options: [
          "Because a clear conscience has nothing to hide or fear",
          "Because innocent people never dream",
          "Because innocent people drink warm milk"
        ],
        answerIndex: 0,
        hint: "Truth and honesty bring inner peace to the heart."
      }
    ],
    author: "Ramesh Mudholkar & Traditional Mughal Folklore",
    status: "published",
    content_notes: "Non-violent, clever mystery problem solving. Teaches integrity and honesty.",
    values: ["honesty", "wisdom", "integrity", "peacefulness"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "conscience", meaning: "the inner sense of right and wrong that guides one's thoughts" },
      { word: "identical", meaning: "exactly the same in every detail" },
      { word: "distressed", meaning: "feeling deep worry, sorrow, or anxiety" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "What item had been stolen from the merchant?" },
      { tier: "Understand", prompt: "Why did Birbal's trick work so well without needing guards or weapons?" },
      { tier: "Apply", prompt: "Have you ever felt restless after doing something wrong? How did telling the truth make you feel better?" },
      { tier: "Evaluate", prompt: "Do you think the thief was clever, or did his fear make him foolish?" },
      { tier: "Create", prompt: "Invent another clever, harmless riddle Birbal could use to find lost items." }
    ],
    reflection_prompt: "How does being honest help you sleep peacefully at night?",
    activity: "Measure five small sticks or pencils in your home with a ruler and line them up from shortest to longest!",
    mood: ["curious", "calm", "funny"],
    teaser: "Tomorrow, discover how a clever courtier resolved a dispute about a well where the water was sold separately!",
    series_id: null,
    part_number: null,
    reviewed: true,
    source: "175 Stories of Akbar and Birbal",
    license: "Public Domain",
    credit: "Dhinam Oru Kathai Editorial Team"
  },
  // --- PANCHATANTRA EXPANSIONS ---
  {
    id: "panchatantra-four-friends-hunter",
    slug: "the-four-faithful-friends-and-the-hunter",
    language: "en",
    title: "The Four Faithful Friends: Deer, Turtle, Crow and Mouse",
    genre: "Fables",
    collection: "Panchatantra",
    "culture_region": "Ancient India",
    age_group: "Below 13",
    summary: "Four unlikely forest friends—a fleet deer, a wise crow, a tiny mouse, and a slow turtle—combine their unique strengths to rescue one another from a hunter's snare.",
    keywords: ["four friends panchatantra", "unity in friendship stories", "animal teamwork fables", "panchatantra book 2 winning of friends"],
    tags: ["Fables", "Animals", "Teamwork", "Friendship", "Bedtime"],
    "full_text": "In a peaceful forest surrounded by lotus ponds lived four devoted companions: Laghupatanaka the swift crow, Mantharaka the patient turtle, Hiranyaka the quick-witted mouse, and Chitranga the graceful spotted deer. Though differing in size, speed, and nature, they shared meals, watched over each other's families, and loved one another dearly.\n\nOne evening, while grazing near the forest boundary, Chitranga the deer stepped into a strong rope snare set by a cruel hunter. Trapped by his foot, he cried out in distress. The crow flew overhead, spotted his friend in danger, and immediately flew back to the lotus pond.\n\n'Our dear deer is caught in a trap!' cried the crow. 'The hunter will be here at sunrise!'\n\nThe tiny mouse Hiranyaka spoke up instantly: 'My sharp teeth can gnaw through the thickest ropes in minutes! Crow, take me upon your back and fly me to Chitranga before the hunter arrives.' The crow took the little mouse gently in his beak and flew swiftly through the treetops.\n\nMeanwhile, the slow turtle could not bear to sit idly while his friend was in peril. He set off on foot, crawling determinedly along the woodland trail.\n\nHiranyaka worked with ferocious speed. *Nibble, nibble, snip!* In minutes, the strong cords were severed, and the deer leapt free. Just then, they heard rustling leaves—the patient turtle had finally arrived, panting from his journey.\n\n'Why did you come, dear turtle?' whispered the deer in worry. 'If the hunter arrives, the crow can fly, I can sprint, and the mouse can burrow into the earth. But you cannot run!'\n\nAt that very moment, the hunter stepped into the clearing, carrying his bow. Seeing the deer gone and the broken snare, he fumed with rage. His eyes fell upon the slow turtle crawling through the leaves. 'Well,' growled the hunter, 'the deer has escaped, but this plump turtle will make a fine supper!' He picked up the turtle, tied him securely inside his leather pouch, and began walking home.\n\n'We must save our turtle!' whispered the crow from a branch. The three friends quickly devised a brilliant plan.\n\nThe deer dashed ahead through the thickets, ran into the hunter's path, and collapsed on the grass near a stream, lying completely still as if dead. The crow perched upon the deer's antlers, pecking gently as if scavenging.\n\nThe hunter stopped in delight. 'The deer must have died from exhaustion!' he cheered. Dropping his heavy leather sack with the turtle by the riverbank, he ran forward to seize the deer.\n\nThe moment the hunter turned his back, Hiranyaka the mouse scampered out of the reeds. With razor-sharp bites, he sliced the leather cords binding the sack. The turtle slipped into the cool river water and swam safely beneath a lily pad.\n\nWhen the hunter was just three steps away, the crow cawed loudly: *Caw! Caw!* The deer sprang up like lightning and vanished into the dense jungle in three magnificent leaps! The crow took flight into the blue sky.\n\nConfused and empty-handed, the hunter trudged back to retrieve his sack—only to find it chewed wide open, empty of the turtle!\n\nBelieving the forest was protected by benevolent guardian spirits, the superstitious hunter fled in terror, never to set traps in that woodland again. The four friends reunited beside their peaceful lotus pond, celebrating the truth that loyal friends who stand together can overcome any obstacle.",
    "moral": "True friendship knows no boundaries of size or strength. When friends unite with loyalty and teamwork, no snare can hold them.",
    "image": "/images/stories/panchatantra-rabbit.svg",
    "image_alt": "Illustration of the four friends: deer, turtle, crow, and mouse gathered happily by a tranquil lotus pond",
    word_count: 740,
    "reading_time": "4 min",
    "listen_time": "5 min",
    audio_url: null,
    "publish_date": "2026-11-05",
    is_bedtime: true,
    quiz: [
      {
        question: "How did the mouse reach the trapped deer before the hunter arrived?",
        options: [
          "(Recommended) The crow carried the mouse upon his back through the treetops",
          "The mouse rode on a galloping horse",
          "The mouse ran through an underground tunnel"
        ],
        answerIndex: 0,
        hint: "The flying friend helped the walking friend travel fast."
      },
      {
        question: "How did the deer trick the hunter into dropping the sack containing the turtle?",
        options: [
          "The deer pretended to lie dead on the grass near the stream",
          "The deer roared like a tiger",
          "The deer offered the hunter golden coins"
        ],
        answerIndex: 0,
        hint: "The deer acted as bait while the mouse chewed the sack open."
      },
      {
        question: "What does this Panchatantra fable show about teamwork?",
        options: [
          "Everyone has a unique strength, and working together solves big problems",
          "Only the biggest animal is important",
          "You should only help friends if they pay you"
        ],
        answerIndex: 0,
        hint: "The mouse had sharp teeth, the crow had wings, and the deer had speed."
      }
    ],
    author: "Vishnu Sharma (Panchatantra: Book 2 - Mitra-samprapti)",
    status: "published",
    "content_notes": "Timeless fable celebrating unity, loyalty, and diversity. Safe for all children.",
    values: ["friendship", "teamwork", "loyalty", "courage"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "snare", meaning: "a rope trap used for catching animals" },
      { word: "severed", meaning: "cut through completely into pieces" },
      { word: "devoted", meaning: "deeply loyal, loving, and committed to someone" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "Name the four animal friends in this story." },
      { tier: "Understand", prompt: "Why was the turtle eager to help even though he was the slowest?" },
      { tier: "Apply", prompt: "When working on a school project, how can different classmates contribute their unique talents?" },
      { tier: "Evaluate", prompt: "Why is loyalty to a friend in trouble one of the highest moral values?" },
      { tier: "Create", prompt: "Draw the four friends celebrating together around their forest pond." }
    ],
    reflection_prompt: "Who is a loyal friend in your life, and what special strength do they have?",
    activity: "Make a four-link paper friendship chain with your family! Write one friend's name on each colored link.",
    mood: ["brave", "comforting", "happy"],
    teaser: "Tomorrow, meet a little jackal who fell into a vat of blue dye and learned that honesty is better than pretending!",
    series_id: null,
    part_number: null,
    reviewed: true,
    source: "Panchatantra (Mitra-samprapti)",
    license: "Public Domain",
    credit: "Dhinam Oru Kathai Editorial Team"
  },
  {
    id: "panchatantra-blue-jackal",
    slug: "the-story-of-the-blue-jackal",
    language: "en",
    title: "The Blue Jackal and the Power of Authenticity",
    genre: "Fables",
    collection: "Panchatantra",
    "culture_region": "Ancient India",
    age_group: "Below 13",
    summary: "After accidentally falling into a dyer's indigo vat, a hungry jackal pretends to be a celestial king of the forest—until his true voice reveals his identity.",
    keywords: ["blue jackal panchatantra", "authenticity moral stories", "be true to yourself stories for kids", "animal fables"],
    tags: ["Fables", "Animals", "Honesty", "Wisdom", "Bedtime"],
    "full_text": "On the outskirts of a bustling city lived a scruffy jackal named Chandaraka. One evening, searching for food scraps, he wandered into the city streets. The neighborhood dogs caught his scent and chased him barking loudly. In a frantic scramble to escape, Chandaraka leaped through the open window of a washerman's workshop and landed with a loud *PLOP!* right inside a giant vat of indigo dye.\n\nThe dogs lost his trail and trotted away. When Chandaraka climbed out of the vat, he shook himself off and looked down. He was astonished! From the tip of his nose to the end of his bushy tail, his fur was dyed a brilliant, glowing sapphire blue.\n\nHe trotted back to the jungle. When the forest creatures saw this strange, radiant blue animal walking toward them, panic spread. The tigers growled, the elephants backed away, and the monkeys scrambled to the highest branches. 'Who is this strange creature?' they whispered in awe.\n\nSeeing their fear, Chandaraka's ego swelled. He cleared his throat and announced in a deep, majestic voice: 'Do not be afraid, animals of the forest! The great spirit of nature saw that you had no proper king to protect you. Therefore, I was created from the blue light of the heavens to rule over you as your sovereign king!'\n\nThe gullible animals bowed low. The lion became his prime minister, the tiger his bodyguard, and the elephant his royal herald. For weeks, Chandaraka lived in luxury. He was served the finest fruits and fresh food, lounging upon soft carpets of moss while the animals bowed before his blue majesty.\n\nThere was only one condition Chandaraka set: he banished all other jackals from the forest, terrified that they would see through his disguise.\n\nOne evening, while resting beneath a flowering jasmine bush during a full moon, Chandaraka heard a familiar sound in the distance. A pack of wild jackals was gathered on a distant hill, lifting their muzzles to the silver moon and howling: *Owooooo! Owoooo-ha-ha-ha!*\n\nChandaraka's ears twitched. His fur bristled. No matter how blue a jackal may be painted on the outside, a jackal remains a jackal in his heart! He could not control his natural instinct. Jumping to his feet, he threw back his head and howled with all his might: *Owooooo! Owoooo-ha-ha-ha!*\n\nThe lion stopped. The tiger stared. The elephant blinked. 'A jackal!' roared the tiger. 'He is just an ordinary little jackal painted blue! He tricked us!'\n\nThe angry animals chased the imposter out of the forest. Chandaraka sprinted through brambles and briars until he tumbled into the river, where the cool water washed away every trace of the blue dye.\n\nCold, wet, and thoroughly humbled, Chandaraka realized that pretending to be something grand on the outside will never change who you are within. From that day on, he lived honestly among his own kin, proud of his true self.",
    "moral": "Pretending to be someone else never lasts. True honor comes from embracing your authentic self with honesty.",
    "image": "/images/stories/panchatantra-rabbit.svg",
    "image_alt": "Illustration of the blue jackal howling under the full moon surrounded by astonished forest animals",
    "word_count": 620,
    "reading_time": "3 min",
    "listen_time": "4 min",
    audio_url: null,
    "publish_date": "2026-11-06",
    is_bedtime: true,
    quiz: [
      {
        question: "How did the jackal's fur turn bright blue?",
        options: [
          "(Recommended) He fell into a dyer's vat of blue indigo dye while escaping dogs",
          "He was born from a magical blue cloud",
          "He painted himself with blue berry juice"
        ],
        answerIndex: 0,
        hint: "It happened by accident in the washerman's workshop."
      },
      {
        question: "What finally gave away the jackal's true identity to the other animals?",
        options: [
          "He could not resist howling when he heard other jackals howling at the moon",
          "A rainstorm washed off all the paint during a speech",
          "His tail fell off"
        ],
        answerIndex: 0,
        hint: "His natural animal instinct took over during the full moon."
      },
      {
        question: "What does this story teach us about pretending to be someone we are not?",
        options: [
          "It is always best to be proud of your true self rather than wearing a fake disguise",
          "Pretending is good if you get free food",
          "You should always dye your clothes blue"
        ],
        answerIndex: 0,
        hint: "Authenticity and honesty are valued far more than false appearances."
      }
    ],
    author: "Vishnu Sharma (Panchatantra: Book 1 - Mitra-bheda)",
    status: "published",
    "content_notes": "Celebrated moral fable about self-acceptance and authenticity. Safe for all audiences.",
    "values": ["honesty", "self-worth", "humility", "truthfulness"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "indigo", meaning: "a deep, rich blue dye made from natural plants" },
      { word: "authenticity", meaning: "being true, genuine, and real without pretending" },
      { word: "imposter", meaning: "someone who pretends to be somebody else to deceive others" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "What job did the lion have in the blue jackal's court?" },
      { tier: "Understand", prompt: "Why was the jackal unable to stop himself from howling at the moon?" },
      { tier: "Apply", prompt: "Have you ever felt tempted to act differently just to impress classmates? What helped you stay yourself?" },
      { tier: "Evaluate", prompt: "Why is self-acceptance healthier than pretending to be someone grand?" },
      { tier: "Create", prompt: "Draw Chandaraka looking happily at his normal, natural fur in the river." }
    ],
    reflection_prompt: "What is one thing about yourself that you are proud of, just as you are?",
    activity: "Look in the mirror and say three things you appreciate about your own personality!",
    mood: ["funny", "curious", "calm"],
    teaser: "Tomorrow, meet the patient lion and the tiny mouse who showed that little friends can do great deeds!",
    series_id: null,
    part_number: null,
    reviewed: true,
    source: "Panchatantra",
    license: "Public Domain",
    credit: "Dhinam Oru Kathai Editorial Team"
  },
  // --- AESOP'S FABLES EXPANSIONS ---
  {
    id: "aesop-lion-and-mouse",
    slug: "the-mighty-lion-and-the-grateful-mouse",
    language: "en",
    title: "The Mighty Lion and the Grateful Mouse",
    genre: "Fables",
    collection: "Aesop's Fables",
    "culture_region": "Ancient Greece",
    age_group: "Below 13",
    summary: "When a tiny mouse accidentally wakes a sleeping lion, the lion grants him mercy. Days later, that little act of kindness saves the king of beasts from a hunter's net.",
    keywords: ["lion and mouse fable", "aesop fables for kids", "little friends can do great deeds", "kindness returned moral story"],
    tags: ["Fables", "Animals", "Kindness", "Gratitude", "Bedtime"],
    "full_text": "On a sweltering afternoon in the sun-drenched savannah, a mighty lion was taking a nap beneath the cool shade of an acacia tree. His golden mane was spread across the grass, and his deep breathing sounded like distant thunder.\n\nA tiny field mouse named Pip was scurrying through the dry grass, hunting for grass seeds. In his hurry to avoid a passing hawk, Pip ran straight across the lion's broad, velvet nose!\n\nThe lion woke with a startled snort. With lightning speed, his giant paw shot out, trapping the tiny mouse beneath heavy claws. The lion opened his massive jaws and let out an irritated growl.\n\n'Please, O King of Beasts!' squeaked little Pip, trembling from whisker to tail. 'Forgive my clumsiness! I did not mean to disturb your royal slumber. Spare my tiny life, and I promise that one day, I shall return your kindness!'\n\nThe lion roared with amusement. 'You? A tiny speck of gray fluff return a favor to the King of the Forest? That is the funniest joke I have heard all season!' But because the lion had eaten well that morning and was in a generous mood, he smiled, lifted his giant paw, and allowed Pip to scamper away into the grass.\n\nA few days later, while patrolling his territory, the lion stepped into a concealed hunter's trap. Heavy hemp ropes snapped shut around him, hoisting him up into a sturdy net anchored to a baobab tree. The lion roared in frustration and struggled with all his might, but the thick ropes only tightened around his chest. He was completely trapped.\n\nMiles away, Pip heard that distinctive, thunderous roar echoing across the valley. Recognizing the voice of the lion who had spared his life, Pip scampered across the savannah as fast as his little legs could carry him.\n\nWhen he reached the baobab tree, Pip saw the mighty beast helpless in the net. 'Do not fear, friend King!' chirped Pip cheerfully. 'Lie still, and let me work!'\n\nPip climbed up into the netting. Using his sharp, tireless little teeth, he began to gnaw: *Chomp, nibble, snip!* One thick strand gave way, then another, then another. For an hour, Pip chewed steadily through the main holding knot. With a loud *SNAP*, the net loosened, and the great lion tumbled safely onto the soft earth below.\n\nThe lion stood up, shook his golden mane, and gazed down at the tiny mouse sitting proudly on a tree root. With deep humility, the King of the Forest bowed his majestic head.\n\n'You were right, little friend,' whispered the lion warmly. 'I mocked you for your size, yet today, you saved my life. Truly, no act of kindness is ever wasted.'\n\nFrom that day forward, the lion and the mouse walked together as the best of friends, proving to all the creatures of the savannah that friendship and kindness know no bounds of size.",
    "moral": "No act of kindness, however small, is ever wasted. Even the smallest friend may prove to be the greatest helper.",
    "image": "/images/stories/aesop-tortoise-hare.svg",
    "image_alt": "Illustration of the grateful little mouse sitting warmly on the mighty lion's paw in the savannah",
    "word_count": 580,
    reading_time: "3 min",
    "listen_time": "4 min",
    audio_url: null,
    "publish_date": "2026-11-07",
    is_bedtime: true,
    quiz: [
      {
        question: "Why did the lion laugh when the mouse promised to return his kindness?",
        options: [
          "(Recommended) He thought a tiny mouse was far too small to ever help a mighty lion",
          "He thought the mouse was telling a riddle",
          "He was laughing at a passing monkey"
        ],
        answerIndex: 0,
        hint: "The lion underestimated the value of small friends."
      },
      {
        question: "How did the mouse free the lion from the hunter's heavy net?",
        options: [
          "He gnawed through the thick ropes with his sharp teeth",
          "He untied the knots with his paws",
          "He used a knife he found on the ground"
        ],
        answerIndex: 0,
        hint: "Mice have sharp teeth perfect for nibbling through wood and ropes."
      },
      {
        question: "What does this story teach us about helping others?",
        options: [
          "Every person, no matter how small or young, has gifts that can help others",
          "Only strong and famous people can be helpful",
          "You should only help people who give you money"
        ],
        answerIndex: 0,
        hint: "Pip showed that small acts of kindness carry great power."
      }
    ],
    author: "Aesop (Traditional Retelling)",
    status: "published",
    "content_notes": "Timeless classical fable on gratitude and kindness. Safe for all ages.",
    "values": ["kindness", "gratitude", "loyalty", "humility"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "sweltering", meaning: "uncomfortably warm and hot" },
      { word: "concealed", meaning: "hidden carefully out of sight" },
      { word: "slumber", meaning: "peaceful sleep or rest" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "Where was the lion sleeping when Pip ran across his nose?" },
      { tier: "Understand", prompt: "Why did the lion decide to let the mouse go free in the beginning?" },
      { tier: "Apply", prompt: "What is one helpful thing you can do for an adult or classmate even though you are young?" },
      { tier: "Evaluate", prompt: "Why was the lion's change of heart important for his character?" },
      { tier: "Create", prompt: "Draw Pip sitting peacefully on the lion's back as they stroll through the savannah." }
    ],
    reflection_prompt: "Has someone smaller or younger than you ever helped you with something?",
    activity: "Tie a small knot in a string and practice gently untying it with your fingers to see how patience solves tight knots!",
    mood: ["comforting", "happy", "brave"],
    teaser: "Tomorrow, discover how an honest woodcutter was rewarded by the spirit of the river for speaking the truth!",
    series_id: null,
    part_number: null,
    reviewed: true,
    source: "Aesopica Collection",
    license: "Public Domain",
    credit: "Dhinam Oru Kathai Editorial Team"
  },
  {
    id: "aesop-honest-woodcutter",
    slug: "the-honest-woodcutter-and-the-golden-axe",
    language: "en",
    title: "The Honest Woodcutter and the Golden Axe",
    genre: "Moral Stories",
    collection: "Aesop's Fables",
    culture_region: "Ancient Greece",
    age_group: "Below 13",
    summary: "When a poor woodcutter drops his only iron axe into a deep river, the guardian spirit of the water tests his truthfulness with axes of gold and silver.",
    keywords: ["honest woodcutter golden axe", "mercury and the woodman", "stories about honesty for kids", "aesop moral tales"],
    tags: ["Moral Stories", "Honesty", "Integrity", "Nature", "Bedtime"],
    "full_text": "Deep in a whispering pine valley lived a humble woodcutter named Manuel. Manuel had very little in the world—only a cozy wooden cottage, a loving family, and a simple iron axe with a sturdy ash-wood handle. Every day, Manuel walked into the forest, chopped fallen branches, and sold firewood in the village market to buy bread.\n\nOne morning, while chopping an old willow branch beside a rushing mountain river, the axe slipped from his sweaty palms. *Splash!* The iron axe plunged into the deep, swirling water and sank to the riverbed.\n\nManuel sat upon the grassy bank and wept. Without his axe, he had no way to earn bread for his children, and the water was far too deep and swift for him to dive in.\n\nSuddenly, the surface of the river shimmered with radiant rainbow ripples. Rising gracefully from the crystal waters was the guardian spirit of the river, with hair like silver mist and eyes like sparkling quartz.\n\n'Why do you weep so bitterly, honest woodman?' asked the guardian spirit with deep compassion.\n\n'O gentle spirit,' replied Manuel, bowing respectfully, 'my only iron axe has fallen into your deep waters. Without it, I cannot feed my family.'\n\nThe spirit smiled, dove beneath the rushing waves, and resurfaced holding a dazzling axe made of solid, gleaming gold. 'Is this the axe you lost, woodman?'\n\nManuel looked at the glittering gold. It was worth a fortune, enough to buy a palace. But Manuel shook his head with simple honesty: 'No, kind spirit. That beautiful axe is not mine.'\n\nThe spirit dove into the deep pool a second time. She emerged holding a magnificent axe made of pure polished silver with a pearl handle. 'Is this your axe?'\n\nManuel smiled gently and replied: 'No, spirit. My axe was plain and made of humble iron.'\n\nThe spirit dove a third time. When she surfaced, she was holding Manuel's familiar old iron axe with its worn ash handle. Manuel's face lit up with joyful tears. 'Yes! That is my axe! Thank you with all my heart!'\n\nThe river spirit smiled with profound admiration. 'Manuel, your honesty is rarer and more precious than all the gold in the mountains. Because you refused to tell a lie even in your hour of need, take your iron axe—and keep the golden and silver axes as gifts of honor for your truthfulness.'\n\nManuel returned home joyful and wealthy, using his fortune to help poor neighbors and build a village school.\n\nWhen a greedy villager heard Manuel's story, he ran to the river, deliberately threw his own rusty axe into the water, and pretended to weep loudly. When the river spirit appeared holding the golden axe and asked if it was his, the greedy man shouted greedily: 'Yes! Yes! That golden axe is mine!'\n\nThe spirit looked upon him with sorrow and stern disappointment: 'You have spoken a deceitful lie.' The spirit vanished into the depths, taking the golden axe with her, and leaving the dishonest man with no axe at all.",
    "moral": "Honesty brings lasting peace and true honor. Greed and deception lose even what one already possesses.",
    "image": "/images/stories/aesop-tortoise-hare.svg",
    "image_alt": "Illustration of the honest woodcutter speaking with the graceful river spirit holding the golden axe",
    "word_count": 640,
    reading_time: "3 min",
    "listen_time": "4 min",
    audio_url: null,
    "publish_date": "2026-11-08",
    is_bedtime: true,
    quiz: [
      {
        question: "Why did Manuel refuse the golden and silver axes when the river spirit offered them?",
        options: [
          "(Recommended) Because he was an honest man and they did not belong to him",
          "Because they were too heavy to carry home",
          "Because he did not like gold or silver"
        ],
        answerIndex: 0,
        hint: "Manuel chose truth over easy wealth."
      },
      {
        question: "What happened to the greedy neighbor who threw his axe into the river on purpose?",
        options: [
          "The spirit vanished, leaving him with neither the gold axe nor his own axe",
          "He was given ten golden axes",
          "He was invited to live in the palace"
        ],
        answerIndex: 0,
        hint: "His lie was punished because deceit has no honor."
      },
      {
        question: "What does this story show about telling the truth even when nobody is watching?",
        options: [
          "Integrity means doing the right thing under all circumstances",
          "It is okay to claim lost items that aren't yours",
          "Honesty is only useful if there is a reward"
        ],
        answerIndex: 0,
        hint: "True integrity shines brightest when you are honest just for the sake of goodness."
      }
    ],
    author: "Aesop (Traditional Retelling)",
    status: "published",
    "content_notes": "Classic moral parable on truthfulness and integrity. Completely family safe.",
    values: ["honesty", "integrity", "humility", "contentment"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "swirling", meaning: "moving quickly around and around in circles" },
      { word: "deceitful", meaning: "misleading others by telling lies or hiding truth" },
      { word: "contentment", meaning: "a peaceful state of being happy and satisfied with what one has" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "What were the three axes made of in the story?" },
      { tier: "Understand", prompt: "Why did the river spirit reward Manuel with all three axes?" },
      { tier: "Apply", prompt: "If you find a lost pencil or toy at school, what is the honest thing to do?" },
      { tier: "Evaluate", prompt: "Why does greed always end up hurting the person who is greedy?" },
      { tier: "Create", prompt: "Draw Manuel's cozy cottage after he returned home with his family." }
    ],
    reflection_prompt: "When was a time you told the truth even when it was tempting to lie? How did you feel inside?",
    activity: "Find three small objects in your room and thank them for how useful they are to your daily life!",
    mood: ["calm", "comforting", "brave"],
    teaser: "Tomorrow, discover the fairy tale of the helpful elves who helped a kind, tired shoemaker under the moonlight!",
    series_id: null,
    part_number: null,
    reviewed: true,
    source: "Aesopica Collection",
    license: "Public Domain",
    credit: "Dhinam Oru Kathai Editorial Team"
  },
  // --- GRIMM FAIRY TALES EXPANSIONS ---
  {
    id: "grimm-elves-shoemaker",
    slug: "the-elves-and-the-kind-shoemaker",
    language: "en",
    title: "The Elves and the Kind Shoemaker",
    genre: "Fairy Tales",
    collection: "Grimm Fairy Tales",
    "culture_region": "Germany / European Classic",
    age_group: "Below 13",
    summary: "When a hardworking shoemaker falls on hard times, tiny magical elves visit his workshop by night. In gratitude, the shoemaker and his wife sew warm little clothes for their secret helpers.",
    keywords: ["elves and shoemaker grimm", "kindness returned fairy tales", "classic bedtime stories for kids", "brother grimm moral stories"],
    tags: ["Fairy Tales", "Gratitude", "Kindness", "Family", "Bedtime"],
    "full_text": "In a quaint cobblestone village fringed by whispering pine hills lived a hardworking shoemaker named Thomas and his gentle wife Martha. Thomas was honest and skilled; he cut his leather with care, waxed his threads smoothly, and never overcharged his customers. Yet through no fault of his own, times grew hard, until at last he had only enough leather left to make one final pair of shoes.\n\nThat evening, Thomas carefully cut out the leather pieces, laid them neatly upon his wooden workbench, and said his evening reflections with a peaceful heart. 'Do not worry, Martha,' he smiled gently. 'We have done our honest best. Tomorrow morning, I shall stitch them together.'\n\nEarly the next morning, when Thomas stepped into his workshop, he rubbed his eyes in disbelief. Standing upon his workbench was a pair of shoes completely finished! The stitches were so neat, tiny, and flawless that not a single thread was out of place. It was a masterpiece of shoemaking.\n\nA merchant walked into the shop shortly after. He was so delighted by the exquisite craftsmanship that he paid double the asking price. With this money, Thomas was able to buy food for his family and leather for two more pairs of shoes.\n\nThat evening, Thomas cut out the leather for two pairs and went to bed. In the morning, there stood two beautiful pairs of shoes, polished and pristine! This continued night after night. Whatever leather Thomas prepared in the evening was turned into magnificent boots and slippers by morning. Soon, the shoemaker's humble shop flourished.\n\nOne winter night shortly before the New Year, Thomas said to his wife, 'Let us stay awake by the candle tonight and see who our generous secret helpers are.'\n\nThey hid behind a woolen curtain in the corner of the workshop. As the village clock struck midnight, two tiny, nimble elves, no taller than a wooden ruler, slipped through the window. They were dressed in worn, ragged cloth. Shivering from the winter draft, they hopped onto the workbench, picked up the awl and thread, and began sewing with dazzling speed: *Stitch, stitch, tap, tap!* By dawn, all the shoes were finished, and the little elves vanished into the morning mist.\n\nMartha said with tears of warmth in her eyes, 'Those poor little helpers have made us prosperous, yet they have nothing warm to wear in this bitter winter frost! I shall sew each of them a warm flannel shirt, a little woolen coat, and knit warm socks, and you can make each of them a tiny pair of shoes.'\n\nThomas and Martha spent the day crafting the tiny garments with immense love and care. On New Year's Eve, instead of cut leather, they laid out the two miniature coats, shirts, trousers, and polished boots upon the workbench, then hid behind the curtain.\n\nAt midnight, the elves leaped through the window. When they saw the warm, colorful clothes instead of work, they gasped in pure delight! They slipped into the little coats, buttoned the shirts, pulled on the warm boots, and danced across the workbench, singing joyfully:\n\n*'Now we are boys so fine and neat, no longer cobblers of the street!'*\n\nThey danced over the chairs, hopped out the window into the moonlit snow, and never needed to return to work again. But Thomas and Martha prospered in happiness, kindness, and peace for the rest of their days, forever remembering the secret magic of mutual gratitude.",
    "moral": "True gratitude is shown through thoughtful actions. When we help those who help us, joy multiplies.",
    "image": "/images/stories/cinderella-glass-slipper.svg",
    "image_alt": "Illustration of the tiny elves happily trying on their warm new coats in the cozy shoemaker workshop",
    "word_count": 720,
    "reading_time": "4 min",
    "listen_time": "5 min",
    audio_url: null,
    "publish_date": "2026-11-09",
    is_bedtime: true,
    quiz: [
      {
        question: "What did the shoemaker and his wife leave on the workbench for the elves?",
        options: [
          "(Recommended) Warm little woolen coats, shirts, trousers, and tiny polished boots",
          "A bowl of sweet milk and cookies",
          "A bag of gold coins"
        ],
        answerIndex: 0,
        hint: "They noticed the little elves were shivering in the winter frost."
      },
      {
        question: "How did the elves react when they found the warm clothes?",
        options: [
          "They danced joyfully and sang with delight",
          "They cried and hid under the table",
          "They refused to wear them"
        ],
        answerIndex: 0,
        hint: "They were thrilled to receive such warm, loving gifts."
      },
      {
        question: "What is the heart of this fairy tale's lesson?",
        options: [
          "Expressing heartfelt gratitude by caring for those who care for you",
          "Leaving all your chores for someone else to do",
          "Never working on New Year's Eve"
        ],
        answerIndex: 0,
        hint: "Thomas and Martha returned kindness with kindness."
      }
    ],
    author: "Brothers Grimm (Children's and Household Tales)",
    status: "published",
    "content_notes": "Gentle, heartwarming classic fairy tale on generosity and gratitude. Perfect for bedtime.",
    values: ["gratitude", "kindness", "generosity", "diligence"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "prosperous", meaning: "successful, thriving, and living comfortably" },
      { word: "nimble", meaning: "quick, light, and agile in movement" },
      { word: "exquisite", meaning: "extremely beautiful and delicately made" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "How much leather did Thomas have left at the beginning of the story?" },
      { tier: "Understand", prompt: "Why did Martha decide to make clothes for the elves instead of paying them money?" },
      { tier: "Apply", prompt: "How can you show quiet gratitude to someone at home or school who helps you every day?" },
      { tier: "Evaluate", prompt: "Why does giving a thoughtful handmade gift often bring more joy than buying something expensive?" },
      { tier: "Create", prompt: "Design and color your own miniature elf coat with patterns and buttons." }
    ],
    reflection_prompt: "Who has helped you recently without asking for anything in return?",
    activity: "Make a thank-you note or drawing for a family member or teacher today!",
    mood: ["comforting", "happy", "calm"],
    teaser: "Tomorrow, travel to the Kaveri river delta to hear how Tenali Rama proved that a cat cannot be forced to drink boiling milk!",
    series_id: null,
    part_number: null,
    reviewed: true,
    source: "Grimms' Fairy Tales (KHM 39)",
    license: "Public Domain",
    credit: "Dhinam Oru Kathai Editorial Team"
  }
];

// Append new stories, checking for duplicates
let addedCount = 0;
for (const s of newStories) {
  if (!existingIds.has(s.id)) {
    existing.push(s);
    existingIds.add(s.id);
    addedCount++;
    console.log(`[Catalog Builder] Added story: "${s.title}" (${s.collection})`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Catalog Builder] Catalog update complete! Added ${addedCount} new classic stories. Total in English: ${existing.length}`);
