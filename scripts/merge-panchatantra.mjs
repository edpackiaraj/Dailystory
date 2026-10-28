import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');
const panchatantraCatalogPath = path.join(rootDir, 'Panchatantra.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

console.log(`[Panchatantra Merger] Loading ${panchatantraCatalogPath}...`);
const panchatantraData = JSON.parse(fs.readFileSync(panchatantraCatalogPath, 'utf8'));

// Curated full canonical stories mapped directly from Panchatantra.json
const newPanchatantraStories = [
  // --- TANTRA 1: MITRA-BHEDA (The Loss of Friends) ---
  {
    id: "panchatantra-wedge-pulling-monkey",
    slug: "the-wedge-pulling-monkey-and-the-timber-split",
    language: "en",
    title: "The Wedge-Pulling Monkey and the Split Log",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "Ancient India",
    age_group: "All",
    summary: "From Tantra 1 (Mitra-bheda 1.1), a curious monkey meddles with a heavy wooden wedge inserted into an unfinished timber log by temple carpenters, discovering the sharp price of reckless curiosity.",
    keywords: ["wedge pulling monkey panchatantra", "panchatantra 1.1", "meddling in others affairs fable", "vishnu sharma moral stories"],
    tags: ["Panchatantra", "Fable", "Curiosity", "Caution", "Wisdom"],
    full_text: "On the outskirts of an ancient temple town in northern India, a group of skilled master carpenters was building a magnificent prayer hall. Among the timber delivered from the forest was a massive, half-sawn log of hard sal wood.\n\nAt midday, when the sun reached its zenith, the chief carpenter paused the day's sawing. To keep the deep cut from snapping shut while they ate lunch, he drove a sturdy wooden wedge firmly into the split. Leaving the heavy saw and the wedged log in the clearing, the carpenters walked to the shade of a nearby banyan tree to enjoy their rice and yogurt.\n\nShortly after, a lively band of wild monkeys came swinging through the treetops into the temple courtyard. While the mother monkeys picked fruit and the young ones chased squirrels, one boastful young monkey named Chanchala wandered over to the half-sawn timber.\n\nChanchala loved touching things that did not belong to him. He pulled on measuring cords, knocked over pots of resin, and poked at the iron nails. Then, his eyes fell upon the smooth wooden wedge driven into the giant log.\n\n*'What a strange piece of wood!'* mused Chanchala. *'Why is it wedged so tightly? I wonder if my strong hands can yank it free!'*\n\nAn elder monkey sitting in a peepal tree called down with a warning: 'Chanchala! Leave that timber alone! The carpenters placed that wedge there for a purpose. Meddling with heavy tools and machines when you do not understand their craft is foolish and dangerous!'\n\nChanchala laughed arrogantly: 'You old folk worry about every breeze! Watch how strong I am!'\n\nThe foolish monkey straddled the split log, placing his legs and tail directly inside the narrow, open cleft! He gripped the wooden wedge with both hands and began rocking it back and forth: *Creeeak! Groooon!* With every pull, the wedge loosened slightly.\n\nFinally, with one enormous heave, Chanchala yanked the wedge completely out of the timber! In that split second, the immense spring tension of the half-sawn sal log snapped violently shut like an iron jaw: *CRACK!*\n\nChanchala's bushy tail was pinned tightly between the two heavy slabs of wood! The foolish monkey shrieked in pain and fright, jumping up and down, unable to free himself. He had to hang there, crying and bruised, until the carpenters returned from lunch. The kind carpenters pried the log open with crowbars and freed the humbled monkey, who sprinted back into the treetops with a sore tail, vowing never again to meddle in matters beyond his duty and understanding.",
    moral: "Do not meddle in affairs or machines that are not your own. Curiosity without caution and skill leads to needless trouble.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of the curious monkey meddling with the wooden wedge in the half-sawn timber log",
    word_count: 530,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-24",
    is_bedtime: false,
    quiz: [
      {
        question: "Why did the carpenters place a wooden wedge inside the split log?",
        options: [
          "(Recommended) To keep the cut from snapping shut while they took their lunch break",
          "To make music",
          "To feed birds"
        ],
        answerIndex: 0,
        hint: "The wedge kept the cleft open safely."
      },
      {
        question: "What happened when the monkey pulled the wedge free?",
        options: [
          "(Recommended) The log snapped shut and trapped his tail",
          "The log turned into gold",
          "The monkey flew into the air"
        ],
        answerIndex: 0,
        hint: "The spring tension closed the cleft instantly."
      },
      {
        question: "What is the core moral from Tantra 1.1?",
        options: [
          "Do not meddle in dangerous affairs that are not your own",
          "Never eat lunch under a banyan tree",
          "Monkeys make great carpenters"
        ],
        answerIndex: 0,
        hint: "Curiosity must be balanced with caution and respect for others' work."
      }
    ],
    author: "Pandit Vishnu Sharma (Panchatantra Tantra 1: Mitra-bheda)",
    status: "published",
    content_notes: "Classic cautionary fable on safety and respecting boundaries. Safe for children.",
    values: ["caution", "responsibility", "wisdom", "humility"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "zenith", meaning: "the time at which something is most powerful or at its highest peak, like the midday sun" },
      { word: "cleft", meaning: "a fissure or split, especially one in rock or wood" },
      { word: "straddled", meaning: "sat or stood with one leg on each side of something" },
      { word: "meddling", meaning: "interfering in or being inquisitive about other people's affairs or tools without skill" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What did the elder monkey warn Chanchala before he touched the wedge?" },
      { tier: "Understand", question: "Why is it dangerous to play with electrical tools, stoves, or machinery without adult supervision?" },
      { tier: "Apply", question: "Have you ever been tempted to push buttons or touch things you didn't understand? What should you do instead?" },
      { tier: "Evaluate", question: "Why do skilled workers use safety measures like wedges or warning signs?" },
      { tier: "Create", question: "Draw a colorful safety warning sign to place next to the carpenters' log!" }
    ],
    reflection_prompt: "True courage is not reckless curiosity. Knowing your limits and respecting the skill of others keeps you safe.",
    activity: "Check around your house with a parent for safety labels on tools or cleaning supplies and learn what each symbol means.",
    mood: ["funny", "brave", "calm"],
    teaser: "Tomorrow, discover what happened when a hungry jackal heard a thunderous war-drum booming in the forest!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "panchatantra-jackal-war-drum",
    slug: "the-jackal-and-the-booming-war-drum",
    language: "en",
    title: "The Jackal and the Booming War-Drum",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "Ancient India",
    age_group: "All",
    summary: "From Tantra 1 (Mitra-bheda 1.2), Gomaya the jackal is terrified by a thunderous booming sound in an abandoned army camp, until curiosity and courage lead him to a surprising truth.",
    keywords: ["jackal and war drum panchatantra", "panchatantra 1.2", "fear of sound fable", "courage overcoming noise"],
    tags: ["Panchatantra", "Fable", "Courage", "Curiosity", "Wisdom"],
    full_text: "In a wild forest clearing that had once served as a temporary encampment for a royal army, a hungry jackal named Gomaya was searching for food. The rains had been scarce, fruit was rare, and Gomaya's ribs showed through his dusty fur.\n\nSuddenly, a gust of wind swept across the clearing, and a sound like rolling thunder exploded through the trees: *BOOOM! BOOOM! BOOOOOM!*\n\nThe earth seemed to tremble. Birds shrieked and took flight. Gomaya jumped three feet into the air, his fur standing straight on end. His heart pounded like a racehorse. *'What colossal monster has arrived in our forest?'* he whimpered in terror. *'That roar is louder than a hundred lions! I must flee this woodland and never return!'*\n\nGomaya turned his heels and prepared to sprint into the distant hills. But as he ran, he paused and remembered the teachings of his mother: *'A wise animal never runs from a mere sound until he has investigated its source with his own eyes. Fear magnifies the unknown; truth shrinks it to its real size.'*\n\nGomaya took three deep, quiet breaths. He crouched low in the tall yellow grass and crept cautiously toward the noise, inch by patient inch.\n\n*BOOOOM!* The thunderous noise sounded again right ahead. Peeking through the tangled creepers, Gomaya saw no multi-headed beast, no fire-breathing dragon, and no demon.\n\nInstead, there stood a large, round military war-drum, forgotten by the royal soldiers beneath a sprawling creepers tree! Whenever a gust of wind blew, the stiff dry branches of the tree swayed and struck against the drum's tight leather skin: *Whack! Boom! Whack! Boom!*\n\nGomaya stared at the harmless wooden frame, then burst into relieved laughter: *'It was only hollow wood and stretched cowhide making all that frightful racket!'*\n\nCreeping closer, Gomaya discovered that the soldiers had left behind baskets of barley cakes and salted dried meat near the drum. He ate until his belly was pleasantly full, then curled up safely in the sunny grass.\n\nGomaya whispered to himself: 'How foolish I would have been if I had run away in panic from mere noise! Empty things often make the loudest sound; true courage looks past the roar to see the truth.'",
    moral: "Do not be frightened by loud noises, empty threats, or boastful words. Hollow things often make the loudest racket; face your fears with calm investigation.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of the clever jackal examining the forgotten war-drum under the whispering tree branches",
    word_count: 510,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-25",
    is_bedtime: true,
    quiz: [
      {
        question: "What was making the loud booming sound that frightened Gomaya?",
        options: [
          "(Recommended) Tree branches striking an abandoned military drum in the wind",
          "A multi-headed dragon",
          "A falling boulder"
        ],
        answerIndex: 0,
        hint: "The wind caused branches to hit against stretched drum skin."
      },
      {
        question: "What wise advice from his mother did Gomaya remember?",
        options: [
          "(Recommended) Never run from a mere sound before investigating the facts with your own eyes",
          "Always hide under rocks",
          "Run as fast as you can"
        ],
        answerIndex: 0,
        hint: "Fear magnifies the unknown; investigating brings clarity."
      },
      {
        question: "What did the jackal find near the drum after he overcame his fear?",
        options: [
          "Baskets of food left behind by soldiers",
          "A chest of gold coins",
          "A sleeping lion"
        ],
        answerIndex: 0,
        hint: "His courage was rewarded with a hearty meal."
      }
    ],
    author: "Pandit Vishnu Sharma (Panchatantra Tantra 1: Mitra-bheda)",
    status: "published",
    content_notes: "Classic fable on overcoming fear of the unknown, thunder, or loud noises. Perfect for bedtime.",
    values: ["courage", "curiosity", "wisdom", "resilience"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "encampment", meaning: "a place with temporary accommodations of huts, tents, or structures for troops" },
      { word: "creepers", meaning: "climbing or trailing plants that grow over walls or other trees" },
      { word: "magnifies", meaning: "makes something appear larger or more important than it actually is" },
      { word: "cautiously", meaning: "in a way that deliberately avoids potential problems or dangers; carefully" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What kind of animal was Gomaya?" },
      { tier: "Understand", question: "Why do empty objects or boastful people often make the loudest noise?" },
      { tier: "Apply", question: "When you hear an unexpected noise in the house at night, how can you practice calm investigation instead of panic?" },
      { tier: "Evaluate", question: "Why is courage defined as 'facing fear with reason' rather than never feeling fear at all?" },
      { tier: "Create", question: "Invent an everyday household sound that might sound scary to a pet (like a vacuum cleaner) and write a funny story about it." }
    ],
    reflection_prompt: "Do not let loud words or scary noises push you into hiding. Take a deep breath, investigate with quiet eyes, and find the peaceful truth.",
    activity: "Make a homemade drum with an empty container and a balloon, and observe how sound travels through vibration.",
    mood: ["brave", "comforting", "calm"],
    teaser: "Tomorrow, discover what happened when a clever crab discovered the secret bones of an old greedy heron!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "panchatantra-crane-crab",
    slug: "the-greedy-heron-and-the-clever-crab",
    language: "en",
    title: "The Greedy Heron and the Clever Crab",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "Ancient India",
    age_group: "All",
    summary: "From Tantra 1 (Mitra-bheda 1.8), an elderly heron uses false sympathy to trick naive fish during a drought, until he tries to deceive a sharp-eyed crab with pincers of steel.",
    keywords: ["heron and crab panchatantra", "panchatantra 1.8", "clever crab fable", "seeing through deceit stories"],
    tags: ["Panchatantra", "Fable", "Justice", "Cleverness", "Courage"],
    full_text: "Near a lotus pond in a quiet forest lived an old heron. With advancing age, his wings had grown stiff, his eyes had weakened, and his beak was no longer swift enough to catch darting fish. Stomach rumbling with hunger, the deceitful bird devised a cunning scheme.\n\nOne morning, the heron stood motionless at the water's edge, letting tears roll down his long bill with a face of deep tragedy. A large, observant crab crawled out of the reeds and asked: 'Uncle Heron, why do you stand so sorrowfully without fishing today?'\n\nThe heron sighed with theatrical grief: 'Alas, good crab! I weep not for myself, but for all of you in this pond! Yesterday, I overheard astrologers and fishermen in the village saying that a severe twelve-year drought is coming. Soon, this pond will dry to cracked dust, and all my beloved aquatic neighbors will perish!'\n\nThe frightened fish gathered around the heron, trembling. 'What can we do, Uncle? Is there no hope?'\n\nThe heron smiled slyly: 'Across the mountain ridge lies a deep, spring-fed lake filled with pink lotus flowers that never dries up. If you trust me, I can carry you one by one in my beak to this paradise!'\n\nThe naive fish cheered in gratitude. Day after day, the heron picked up a fish in his beak, flew over the hill, and instead of carrying them to a lake, landed upon a flat stone slab where he devoured them, leaving a growing mound of fish bones behind!\n\nAfter several weeks, only the crab remained in the shrinking pond. The crab said: 'Uncle Heron, you have saved all my fish brothers; please carry me to the mountain lake as well.'\n\nThe heron looked at the plump crab and thought: *'I have eaten fish every day; a meal of crab meat will be a delicious treat!'*\n\nThe heron picked up the crab gently and took flight. As they soared high above the forest, the crab looked down, searching eagerly for the promised crystal lake. But as they crested the rocky ridge, the crab saw no water at all. Instead, on a sharp rock below, he saw a mountain of white fish skeletons glistening in the sun!\n\nIn a flash of horror, the crab understood the truth: *'This wicked bird has devoured all my friends, and now he intends to smash my shell upon these stones!'*\n\nThe crab knew that panic would seal his fate. He needed razor-sharp presence of mind. Reaching up with both of his powerful, serrated pincers, the crab clamped them tightly around the heron's long, vulnerable neck like an iron vise!\n\nThe startled heron gasped for air: 'What are you doing, crab? Let go!'\n\n'Fly down to the water immediately,' ordered the crab in a voice of steel, 'or I will snap your neck in two!'\n\nTerrified and choking, the heron had no choice. He spiraled downward and landed on the bank of the pond. The moment his feet touched the mud, the crab squeezed his pincers with all his might, neutralizing the deceitful bird once and for all.\n\nThe brave crab crawled safely back into the waters, having saved himself and avenged his companions, proving that deceitful flattery will always be broken by watchful intelligence and timely courage.",
    moral: "Do not trust sweet words or sudden offers of help from those whose past nature is untrustworthy. Presence of mind and decisive courage can save you from the deepest traps.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of the clever crab clamping his pincers around the deceitful heron's neck above the rocky hill",
    word_count: 620,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-26",
    is_bedtime: false,
    quiz: [
      {
        question: "What false story did the old heron tell the fish to deceive them?",
        options: [
          "(Recommended) That a twelve-year drought was coming and he would fly them to a safe lake",
          "That he had found a mountain of gold",
          "That the king was visiting"
        ],
        answerIndex: 0,
        hint: "He used fear of a drought to lure them into his beak."
      },
      {
        question: "How did the crab discover the heron's wicked deceit?",
        options: [
          "(Recommended) He saw a mountain of fish bones on the rocky hill instead of a lake",
          "A bird told him",
          "The heron confessed in a letter"
        ],
        answerIndex: 0,
        hint: "Looking down from the sky, he saw the skeletal remains of his friends."
      },
      {
        question: "How did the crab defend himself against the heron?",
        options: [
          "He clamped his strong pincers around the heron's neck like an iron vise",
          "He jumped out of the bird's beak into a tree",
          "He called for his mother"
        ],
        answerIndex: 0,
        hint: "He used his natural armor and pincers to control the situation."
      }
    ],
    author: "Pandit Vishnu Sharma (Panchatantra Tantra 1: Mitra-bheda)",
    status: "published",
    content_notes: "Classic ethical fable on discernment, resisting predatory flattery, and self-defense. Safe for all.",
    values: ["wisdom", "courage", "justice", "presence-of-mind"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "deceitful", meaning: "guilty of or involving deception or misleading falsehoods" },
      { word: "aquatic", meaning: "relating to water; living in or near water" },
      { word: "serrated", meaning: "having or denoting a jagged edge; saw-like" },
      { word: "presence of mind", meaning: "the ability to remain calm and take quick, sensible action in a crisis" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Why couldn't the old heron catch fish on his own anymore?" },
      { tier: "Understand", question: "Why did the fish believe the heron so easily without verifying his claims?" },
      { tier: "Apply", question: "How can you protect yourself from scammers or internet tricks who pretend to offer 'free rewards'?" },
      { tier: "Evaluate", question: "Was the crab justified in using his pincers to protect his life? Explain." },
      { tier: "Create", question: "Write a short set of 'Safety Rules for Fish' to help other ponds avoid tricky herons." }
    ],
    reflection_prompt: "When someone you don't know well offers you an easy shortcut or makes grand promises, step back and ask: what is their real motive?",
    activity: "Research how crabs use their claws in real life for defense, eating, and communication in marine biology.",
    mood: ["brave", "curious", "comforting"],
    teaser: "Tomorrow, discover what happened when a tiny sparrow team defeated a giant rogue elephant!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- TANTRA 1.30: THE MICE THAT ATE IRON ---
  {
    id: "panchatantra-mice-ate-iron",
    slug: "the-mice-that-ate-the-heavy-iron-balance",
    language: "en",
    title: "The Mice That Ate the Heavy Iron Balance",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "Ancient India",
    age_group: "All",
    summary: "From Tantra 1 (Mitra-bheda 1.30), when a greedy borrower claims that mice ate a thousand-pound iron scale, an honest merchant counters with an equally absurd claim about a hawk carrying away a boy, teaching poetic justice.",
    keywords: ["mice that ate iron panchatantra", "panchatantra 1.30", "poetic justice fable", "clever merchant moral story"],
    tags: ["Panchatantra", "Fable", "Justice", "Humor", "Honesty"],
    full_text: "In a prosperous trading city of ancient India lived an honest merchant named Jeernadhana. Through sudden trade misfortunes, Jeernadhana lost his fortunes and was left with only one valuable asset: a massive, antique measuring scale crafted from pure, solid iron, weighing nearly one thousand pounds.\n\nPreparing to journey to distant lands to rebuild his business, Jeernadhana visited his wealthy friend, Seth Dhaniram. 'Dear friend,' said Jeernadhana, 'please store this heavy iron balance in your warehouse until I return. It is my family heirloom.'\n\nDhaniram agreed gladly. But once Jeernadhana departed, Dhaniram looked at the colossal iron scale and thought: *'Iron is worth a fortune in the market! I shall sell it and keep the gold for myself!'*\n\nYears passed. Jeernadhana worked with diligence and honor in foreign cities, earned a modest fortune, and returned to his home city. He walked to Dhaniram's mansion to reclaim his family iron scale.\n\nDhaniram greeted him with false sorrow, wiping away imaginary tears: 'Alas, my dear brother Jeernadhana! I have tragic news. I stored your iron balance safely in the back corner of my warehouse. But rats and mice invaded our city last winter—and they chewed up and ate your entire iron scale! Not an ounce of iron remains!'\n\nJeernadhana looked into the merchant's eyes. He knew that mice cannot eat solid iron! But instead of shouting or growing angry, Jeernadhana smiled calmly: 'Ah, do not weep, friend Dhaniram. If the mice ate it, it is not your fault. Everything in this world is subject to destruction.'\n\nThen Jeernadhana added: 'I am going to the sacred river to take my bath after my long journey. Please send your young teenage son with me to carry my towel and soap basket.'\n\nDhaniram, relieved that Jeernadhana had swallowed his ridiculous lie so easily, called his son: 'Go with Uncle Jeernadhana and assist him at the river.'\n\nAt the riverbank, Jeernadhana took the boy to a safe, comfortable stone cave near the temple, gave him sweet pastries and books to read, rolled a large boulder across the entrance to keep him secure, and returned to Dhaniram's house alone.\n\nDhaniram came out to greet him: 'Jeernadhana! Where is my son? Why did he not return with you?'\n\nJeernadhana sighed with tragic grief: 'Alas, brother Dhaniram! A terrible catastrophe occurred! As we walked along the riverbank, a giant wild hawk swooped down from the clouds, grabbed your boy by his shirt collar with its talons, and carried him away high into the sky!'\n\nDhaniram turned purple with rage. 'You liar!' shouted the merchant. 'How dare you speak such ridiculous nonsense! How can a hawk carry away a fifteen-year-old boy? Hawks hunt mice and sparrows; they cannot lift a human being!'\n\nJeernadhana looked calmly into Dhaniram's raging eyes with an amused smile:\n\n'My dear friend Dhaniram, in a city where tiny mice can chew up and digest a one-thousand-pound iron balance, why is it so hard to believe that a hawk can carry away a teenage boy? What is good for the iron is surely good for the hawk!'\n\nDhaniram stood frozen. The village elders and the town judge who had gathered burst into roaring laughter at Dhaniram's trapped hypocrisy. Blushing with shame, Dhaniram confessed his greed, returned the full gold value of the iron scale with a heavy fine, and Jeernadhana brought the boy safely home, having proved once again that an absurd lie is best dismantled by matching wit.",
    moral: "You cannot expect others to accept an absurd excuse when it profits you, and then reject equal absurdity when it costs you. Honesty and consistency are the foundation of true justice.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of the honest merchant Jeernadhana confronting the dishonest merchant Dhaniram before the laughing town judge",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-27",
    is_bedtime: false,
    quiz: [
      {
        question: "What excuse did the dishonest friend give for the missing iron balance?",
        options: [
          "(Recommended) That city mice and rats had chewed up and eaten the entire solid iron scale",
          "That thieves broke into the warehouse",
          "That it fell into the river"
        ],
        answerIndex: 0,
        hint: "He made the ridiculous claim that rodents ate solid metal."
      },
      {
        question: "How did Jeernadhana respond to Dhaniram's absurd claim?",
        options: [
          "(Recommended) He claimed a hawk carried away Dhaniram's son to expose the hypocrisy",
          "He attacked Dhaniram",
          "He left the city weeping"
        ],
        answerIndex: 0,
        hint: "He used an equally impossible claim to mirror the lie."
      },
      {
        question: "What is the primary moral of Tantra 1.30?",
        options: [
          "Hypocrisy and absurd deceit will be undone by poetic justice",
          "Never store items with friends",
          "Mice love eating iron"
        ],
        answerIndex: 0,
        hint: "One who relies on absurd lies is vulnerable to the same logic."
      }
    ],
    author: "Pandit Vishnu Sharma (Panchatantra Tantra 1: Mitra-bheda)",
    status: "published",
    content_notes: "Classic masterclass in wit, fairness, and poetic justice. Family safe.",
    values: ["honesty", "justice", "wisdom", "humor", "responsibility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "heirloom", meaning: "a valuable object that has belonged to a family for several generations" },
      { word: "catastrophe", meaning: "an event causing great and often sudden damage or suffering; a disaster" },
      { word: "hypocrisy", meaning: "the practice of claiming to have moral standards or beliefs to which one's own behavior does not conform" },
      { word: "dismantled", meaning: "taken apart or knocked down, especially an argument or false claim" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What was the valuable item Jeernadhana left with his friend?" },
      { tier: "Understand", question: "Why did Jeernadhana remain calm instead of getting into a violent fistfight?" },
      { tier: "Apply", question: "When someone breaks a rule with you, why is responding with wit and justice better than losing your temper?" },
      { tier: "Evaluate", question: "Was Jeernadhana's method of holding the boy safely in the cave fair to wake the merchant up?" },
      { tier: "Create", question: "Write a short rhyming couplet summarizing the story of the iron-eating mice and the boy-lifting hawk." }
    ],
    reflection_prompt: "When you try to cheat someone with a clever excuse, you only build a mirror that will reflect your own foolishness.",
    activity: "Role-play the conversation between the two merchants with a friend, practicing calm, witty dialogue.",
    mood: ["funny", "brave", "comforting"],
    teaser: "Tomorrow, discover what happened when four learned scholars assembled a real lion in the forest!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- TANTRA 5.3: THE LION-MAKERS ---
  {
    id: "panchatantra-lion-makers",
    slug: "the-four-scholars-and-the-clay-lion",
    language: "en",
    title: "The Four Scholars and the Forest Lion",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "Ancient India",
    age_group: "All",
    summary: "From Tantra 5 (Apariksitakarakam 5.3), four young friends set out to seek fortune. Three possess vast scholarly book-learning but lack practical common sense, while the fourth has simple good judgment, teaching that wisdom is far superior to mere erudition.",
    keywords: ["the lion makers panchatantra", "panchatantra 5.3", "common sense vs book learning", "four scholars lion fable"],
    tags: ["Panchatantra", "Fable", "Wisdom", "Common Sense", "Caution"],
    full_text: "In a town of northern India lived four young friends. Three of them—named Vidvatta, Shastrika, and Grantha—had spent years studying in prestigious academies. They had mastered ancient grammar, scientific formulae, logic, and obscure lore, but were puffed up with intellectual vanity and completely devoid of common sense.\n\nThe fourth friend, named Subuddhi, had not studied advanced scholarly books, but possessed keen observation, practical wisdom, and deep common sense.\n\nOne day, the three scholarly friends decided to travel to royal courts to win fame and gold. At first, they sneered at Subuddhi: 'Why should we take him? He has no formal academic degrees!' But remembering their childhood friendship, they agreed to let Subuddhi join them.\n\nWhile walking through a dense, shadowy forest, the four companions came upon a pile of dry, bleached bones scattered beneath a tall banyan tree.\n\nThe first scholar, Vidvatta, beamed with pride: 'Look! Here is an opportunity to prove the power of our learning! These are the bones of a dead beast. I have mastered the secret science of assembling bones into their exact skeletal anatomy!' He recited a formula, and the bones flew together, forming the complete skeleton of a colossal lion!\n\nThe second scholar, Shastrika, stepped forward: 'I can supply the flesh, blood, skin, organs, and golden mane!' He recited a second formula, and immediately red muscles, golden fur, sharp fangs, and claws enveloped the skeleton. A complete, terrifying lion lay upon the leaves, looking as if it were merely asleep.\n\nThe third scholar, Grantha, raised his hands eagerly: 'Now watch my supreme genius! I possess the secret art of breathing life into the dead! I shall awaken this lion!'\n\nSubuddhi looked at the giant predator with growing alarm. He grabbed Grantha's arm and whispered urgently: 'Stop, my brother! For heaven's sake, do not do it! That is a ferocious, carnivorous mountain lion! If you give it life, its first instinct will be to pounce upon us and tear us to pieces!'\n\nThe scholar shook off Subuddhi's hand with disdain: 'Stand aside, you uneducated simpleton! Will you stop me from demonstrating my academic greatness?'\n\n'If you insist on bringing it to life,' replied Subuddhi calmly, 'grant me just ten seconds to climb this tall banyan tree before you speak your words!'\n\nSubuddhi scrambled nimbly up the sturdy trunk of the banyan tree and perched securely on a high, leafy branch.\n\nThe third scholar laughed and recited his formula. The lion's chest rose and fell. Its golden eyes opened, glowing with feral hunger. The beast let out a thunderous roar that shook the forest leaves, leaped forward upon the three scholars who had created it, and chased them through the thickets, giving them the fright of their lives and a lesson they would never forget, while sensible Subuddhi climbed down peacefully after the predator had galloped away, walking safely back to his village.",
    moral: "Common sense is far superior to mere book-learning. Knowledge without wisdom, caution, and practical judgment can become the instrument of your own undoing.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of the sensible friend Subuddhi safe in the high banyan tree as the lion wakes below",
    word_count: 610,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-28",
    is_bedtime: false,
    quiz: [
      {
        question: "What major flaw did the three scholarly friends possess?",
        options: [
          "(Recommended) They had vast book learning but lacked basic common sense",
          "They were lazy",
          "They couldn't read"
        ],
        answerIndex: 0,
        hint: "They were full of academic vanity but lacked practical judgment."
      },
      {
        question: "What did the sensible friend Subuddhi do before the lion was brought to life?",
        options: [
          "(Recommended) He climbed a high branch of a sturdy banyan tree to stay safe",
          "He fought the lion with a sword",
          "He ran away to another country"
        ],
        answerIndex: 0,
        hint: "He used common sense to seek high ground before danger awoke."
      },
      {
        question: "What is the primary moral of Tantra 5.3?",
        options: [
          "Common sense is far superior to mere book learning without wisdom",
          "Lions make great pets",
          "Never study science"
        ],
        answerIndex: 0,
        hint: "Practical wisdom and caution protect life better than vanity."
      }
    ],
    author: "Pandit Vishnu Sharma (Panchatantra Tantra 5: Apariksitakarakam)",
    status: "published",
    content_notes: "Classic philosophical fable on the danger of intellect disconnected from practical wisdom. Safe for children.",
    values: ["common-sense", "wisdom", "caution", "humility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "erudition", meaning: "the quality of having or showing great knowledge or learning; scholarship" },
      { word: "anatomy", meaning: "the bodily structure of an organism or animal" },
      { word: "carnivorous", meaning: "feeding on other animals; meat-eating" },
      { word: "disdain", meaning: "the feeling that someone or something is unworthy of one's consideration or respect" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What did each of the three scholars do to the bones in the forest?" },
      { tier: "Understand", question: "Why is having 'common sense' just as important as getting good grades in school?" },
      { tier: "Apply", question: "Can you think of a situation where thinking practically kept you out of danger or trouble?" },
      { tier: "Evaluate", question: "Why do pride and vanity make clever people do very foolish things?" },
      { tier: "Create", question: "Write a short warning motto that Subuddhi could carve onto the bark of the banyan tree." }
    ],
    reflection_prompt: "Knowledge is knowing what can be done; wisdom is knowing whether it should be done. Always pair your smart mind with a sensible heart.",
    activity: "Identify three safety rules at home or school that are based on pure common sense.",
    mood: ["brave", "funny", "comforting"],
    teaser: "Tomorrow, discover what happened when a donkey in a cucumber field insisted on singing loud music at midnight!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- TANTRA 5.7: THE BRAHMIN'S FLOUR POT ---
  {
    id: "panchatantra-brahmin-flour-pot",
    slug: "the-dreamer-and-the-broken-pot-of-flour",
    language: "en",
    title: "The Dreamer and the Broken Pot of Flour",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "Ancient India",
    age_group: "All",
    summary: "From Tantra 5 (Apariksitakarakam 5.7), a daydreaming villager hangs a clay pot of barley flour above his bed and spins wild fantasies of trading and wealth, until an energetic daydream kick shatters everything into dust.",
    keywords: ["brahmins flour pot panchatantra", "panchatantra 5.7", "daydreaming moral story", "building castles in the air fable"],
    tags: ["Panchatantra", "Fable", "Mindfulness", "Diligence", "Humor"],
    full_text: "In a quiet village of ancient India lived a man named Svabhavakripana. He had a gentle heart, but was notoriously fond of sitting on his porch, daydreaming for hours instead of putting his hands to honest work.\n\nOne afternoon, as charity for assisting in a harvest festival, a merchant gave him a large earthen jar completely filled with fine, white barley flour. Svabhavakripana carried the heavy jar home with great joy. To protect the precious flour from mice and ants, he tied a strong rope around the neck of the pot, suspended it securely from a peg directly above his woven sleeping cot, and lay down beneath it, gazing up at the jar.\n\nAs the afternoon breeze whispered through the window, Svabhavakripana's imagination took flight:\n\n*'Behold this magnificent jar of barley flour!'* he thought with a grin. *'If a famine strikes the land next month, the price of flour will soar! I shall sell this single jar for one hundred silver coins! With those hundred silver coins, I shall buy two healthy she-goats. In six months, the goats will give birth, and within two years, I shall have a herd of fifty goats!'*\n\nHe smiled wider, turning on his side: *'Then I shall sell the herd of goats and purchase twenty milk cows! The cows will give rich milk and calves. In five years, I shall sell the cows and buy a herd of royal mares, becoming the greatest horse merchant in the province!'*\n\nSvabhavakripana's eyes sparkled in his trance: *'With the wealth from my horses, I shall build a magnificent four-story palace with marble fountains and fragrant gardens. A wealthy nobleman will arrive and offer his daughter's hand in marriage, and we shall have a handsome baby boy!'*\n\nHe drifted deeper into the daydream: *'One day, when my son is playing in the palace courtyard, he will crawl too close to the horse stables. I shall call out to my wife: \"Quick, take the child inside!\" But suppose she is busy in the kitchen and does not hear me? I shall become so angry that I will run forward and give her a furious kick like this!'*\n\nCaught completely in the grip of his vivid fantasy, Svabhavakripana lashed out with his right foot in real life with all his strength! *WHACK!*\n\nHis foot struck the earthen pot hanging directly above his bed. The clay jar shattered into a hundred jagged pieces, and ten pounds of powdery white barley flour rained down directly upon his face, hair, eyes, and bed, completely covering him in white dust like a ghost!\n\nSvabhavakripana sat up in his dusty bed, sputtering, coughing, and rubbing flour from his eyes. His great herd of goats, his dairy cows, his royal stallions, his marble palace, and his family had vanished into thin air—leaving him with nothing but a broken clay pot and a dirty floor to sweep!\n\nThe neighbors heard the crash and peered through the window. Seeing Svabhavakripana looking like a white flour monster, they burst into hearty laughter. Svabhavakripana bowed his head in shame, having learned that dreaming without doing real work is like building castles out of powdery dust.",
    moral: "Do not build castles in the air or rely on fantasies of the future. Success requires practical effort, hard work, and living in the reality of today.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of the daydreamer covered in white barley flour sitting in his dusty bed with the broken pot",
    word_count: 610,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-29",
    is_bedtime: true,
    quiz: [
      {
        question: "Where did Svabhavakripana hang his pot of barley flour?",
        options: [
          "(Recommended) Directly above his sleeping cot from a ceiling peg",
          "In the village granary",
          "Inside a deep stone well"
        ],
        answerIndex: 0,
        hint: "He suspended it right over his bed so he could gaze at it."
      },
      {
        question: "What caused the pot of flour to shatter?",
        options: [
          "(Recommended) He kicked it in real life while acting out his daydream",
          "A cat jumped on it",
          "A strong storm blew through the window"
        ],
        answerIndex: 0,
        hint: "He lashed out with his foot during a vivid daydream argument."
      },
      {
        question: "What is the timeless moral of Tantra 5.7?",
        options: [
          "Do not build castles in the air; real success requires practical work today",
          "Never eat barley flour",
          "Pots should be made of steel"
        ],
        answerIndex: 0,
        hint: "Daydreams without action lead to disappointment."
      }
    ],
    author: "Pandit Vishnu Sharma (Panchatantra Tantra 5: Apariksitakarakam)",
    status: "published",
    content_notes: "Classic humorous fable on daydreams vs. hard work. Safe for children.",
    values: ["diligence", "mindfulness", "humility", "wisdom"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "notoriously", meaning: "widely and unfavorably known for a particular quality" },
      { word: "famine", meaning: "extreme scarcity of food in a region" },
      { word: "trance", meaning: "a half-conscious state characterized by an absorption in daydreaming" },
      { word: "diligence", meaning: "persistent and careful effort in one's work or duties" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What animals did the dreamer plan to buy first with his flour money?" },
      { tier: "Understand", question: "Why is daydreaming about future riches without doing any work dangerous?" },
      { tier: "Apply", question: "How can you turn a big dream into small, realistic daily steps instead of just daydreaming?" },
      { tier: "Evaluate", question: "Is having goals good? What is the difference between having goals and building 'castles in the air'?" },
      { tier: "Create", question: "Draw a funny comic strip of Svabhavakripana dreaming of horses and then waking up covered in flour!" }
    ],
    reflection_prompt: "Dreams are the seeds of the future, but they must be watered with daily hard work. What real action will you take today toward your goal?",
    activity: "Write down one goal you have for this month, and list three small, real actions you will take this week to reach it.",
    mood: ["funny", "calm", "comforting"],
    teaser: "Discover the full 87 canonical stories of the ancient Panchatantra in our interactive anthology reader!",
    series_id: null,
    part_number: null,
    reviewed: true
  }
];

let added = 0;
for (const story of newPanchatantraStories) {
  if (!existingIds.has(story.id)) {
    existing.push(story);
    existingIds.add(story.id);
    added++;
    console.log(`[Panchatantra Merger] Added: "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Panchatantra Merger] Successfully merged! Added ${added} canonical stories. Total in English: ${existing.length}`);
