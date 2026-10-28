import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

export const fairyAndFolkStories = [
  // --- GRIMM FAIRY TALES ---
  {
    id: "grimm-frog-prince",
    slug: "the-frog-prince-and-the-well-of-promises",
    language: "en",
    title: "The Frog Prince and the Well of Promises",
    genre: "Fairy Tales",
    collection: "Grimm Fairy Tales",
    culture_region: "Germany / European Classic",
    age_group: "All",
    summary: "When a young princess drops her golden ball into a deep forest spring, a talking frog retrieves it on one condition: that she keep her word and treat him as a friend.",
    keywords: ["frog prince story", "keeping promises fairy tale", "grimm brothers stories", "classic bedtime fairy tales"],
    tags: ["Fairy Tale", "Honesty", "Promises", "Kindness", "Bedtime"],
    full_text: "In olden times, when wishes still held power, lived a King whose youngest daughter was admired across the realm for her cheerful laughter. Near the King's castle stood a vast, shadowy forest, and under an ancient linden tree in the forest lay a deep, crystal-cool spring.\n\nOn hot summer afternoons, the young princess loved walking into the cool shade of the forest. Her favorite plaything was a heavy golden ball. She would toss the gleaming sphere high into the sunlit air and catch it with her nimble hands.\n\nOne afternoon, she threw the golden ball so high that her hands missed it as it fell. The ball bounced against the mossy flagstones, rolled over the rim of the spring, and sank down into the deep, dark water. The spring was so deep that no eye could see the bottom. The princess sat upon the stones and wept bitterly.\n\nSuddenly, a thick, croaking voice broke the silence: 'Why do you weep so bitterly, royal maiden? Your tears could melt even a stone.'\n\nThe princess looked up and saw an ugly green frog with bulging eyes poking his head above the water lilies. 'Ugh, you clumsy water-paddler!' she sniffed. 'I weep because my beautiful golden ball has fallen into the deep spring.'\n\n'Do not weep,' replied the frog kindly. 'I can dive down and retrieve your golden treasure. But what will you give me if I bring it back?'\n\n'Whatever you ask, dear frog!' cried the princess eagerly. 'My silk dresses, my pearl necklaces, even the golden crown upon my head!'\n\nThe frog shook his head gently: 'I have no need for your dresses, pearls, or golden crowns. But if you will love me, let me be your companion and playmate, let me sit at your table, eat from your golden plate, and sleep in your cozy bed—if you promise me this, I will dive down and bring you the ball.'\n\n'Yes, yes, I promise you everything you wish!' cried the princess. But in her secret heart, she thought: *'What nonsense that silly frog talks! He belongs in the pond with his fellow croakers; how could he ever be a companion to a human princess?'*\n\nTrusting her word, the frog dipped his head beneath the water, swam down into the murky depths, and a moment later surfaced with the gleaming golden ball in his mouth. He tossed it onto the soft moss.\n\nThe princess shrieked with joy! She snatched up the golden ball and sprinted back toward the castle as fast as her slippers could carry her.\n\n'Wait! Wait!' croaked the frog from the water. 'Take me with you! I cannot run as fast as you!' But the princess did not turn around; she rushed inside the castle gates and forgot the poor creature completely.\n\nThe next evening, as the royal family sat at the grand marble dinner table, a wet, pattering sound came up the marble staircase: *Plip, plop, plip, plop!* Then came a gentle knock at the heavy carved door: 'Youngest princess, open the door for me!'\n\nThe princess ran to open the door, but when she saw the green frog sitting on the doormat, she slammed the door shut and hurried back to her chair, pale and trembling.\n\nThe King noticed her distress. 'My child, what has frightened you so? Is there a giant outside?'\n\n'No, father,' she confessed in embarrassment. 'It is only a slimy green frog.' She explained how she had dropped her golden ball into the spring and made a promise to the creature, never expecting he could ever leave his pond.\n\nJust then, the knock sounded again: *'Youngest daughter of the King, remember the word you gave by the spring!'*\n\nThe wise King looked at his daughter with firm, loving eyes: 'My daughter, that which you have promised in your hour of need, you must faithfully perform. Go at once, open the door, and invite him in.'\n\nThe princess bowed her head in shame. She opened the door, and the frog hopped inside, following her to her chair. He ate politely from her plate, and though the princess was hesitant at first, she noticed how gentle, considerate, and well-spoken the frog was.\n\nWhen bedtime arrived, the King gently reminded her of her promise. The princess picked up the frog with two careful fingers and placed him gently upon a soft velvet pillow beside her bed. 'Thank you, kind princess,' whispered the frog softly. 'You have honored your word.'\n\nAs the first golden rays of dawn shone through the stained-glass window, a wondrous transformation occurred: the frog's rough green skin fell away, and in his place stood a handsome, gentle prince with smiling eyes! He had been placed under a bitter spell by an unkind sorceress, doomed to remain a beast until a princess honored her promise of companionable kindness.\n\nThe prince and princess became lifelong companions, ruling their realm with fairness, honesty, and an enduring respect for promises made to all living beings.",
    moral: "A promise given must be faithfully kept, regardless of circumstances. Never judge others by their appearance, for true nobility is found in loyalty and kindness.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of the princess looking at the gentle frog sitting beside her golden ball at the forest spring",
    word_count: 810,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-11-30",
    is_bedtime: true,
    quiz: [
      {
        question: "What precious toy did the princess drop into the deep forest spring?",
        options: [
          "(Recommended) A heavy golden ball",
          "A diamond ring",
          "A porcelain doll"
        ],
        answerIndex: 0,
        hint: "She loved tossing a shining sphere of gold into the air."
      },
      {
        question: "What did the King instruct his daughter to do when the frog arrived at the castle?",
        options: [
          "(Recommended) Honor her word and perform faithfully what she had promised",
          "Throw the frog back into the moat",
          "Hide in her bedroom"
        ],
        answerIndex: 0,
        hint: "The wise father taught her that promises made in times of need must be kept."
      },
      {
        question: "What transformed the frog back into a gentle prince?",
        options: [
          "Fulfilling the promise of kindness and companionship",
          "Sprinkling magic dust",
          "Eating fifty golden apples"
        ],
        answerIndex: 0,
        hint: "The spell was broken when the princess honored her word and treated him with respect."
      }
    ],
    author: "Brothers Grimm (German Fairy Tale Classic)",
    status: "published",
    content_notes: "Classic fairy tale emphasizing integrity, responsibility, and fidelity to one's word. Family safe.",
    values: ["honesty", "responsibility", "kindness", "humility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "linden", meaning: "a deciduous tree with heart-shaped leaves and fragrant yellowish flowers" },
      { word: "flagstones", meaning: "flat, rectangular paving stones used for paths or courtyards" },
      { word: "flagrant", meaning: "conspicuously or offensively noticeable" },
      { word: "fidelity", meaning: "faithfulness to a person, cause, or belief, demonstrated by continuing loyalty" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Where did the frog live before visiting the castle?" },
      { tier: "Understand", question: "Why did the princess try to break her promise at first?" },
      { tier: "Apply", question: "When you make a promise to clean your room or help a friend, why is it vital to follow through?" },
      { tier: "Evaluate", question: "What role did the King play in helping his daughter become a better person?" },
      { tier: "Create", question: "Write a short 'Promise Certificate' with three promises you will keep this week." }
    ],
    reflection_prompt: "When you give someone your word, treat it like gold. A person whose word can be trusted is respected everywhere.",
    activity: "Make a promise to do one kind chore tomorrow morning, and ensure you fulfill it before breakfast.",
    mood: ["calm", "comforting", "brave"],
    teaser: "Tomorrow, discover what happened when a humble boy received a golden goose that made a sad princess laugh!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "grimm-golden-goose",
    slug: "the-golden-goose-and-the-cheerful-princess",
    language: "en",
    title: "The Golden Goose and the Simple Heart",
    genre: "Fairy Tales",
    collection: "Grimm Fairy Tales",
    culture_region: "Germany / European Classic",
    age_group: "All",
    summary: "When a generous boy shares his humble bread with a hungry gray traveler, he is gifted a goose with pure golden feathers that brings laughter and joy to an entire sorrowful kingdom.",
    keywords: ["golden goose story", "grimm fairy tales generosity", "sharing bread fairy tale", "moral stories for children"],
    tags: ["Fairy Tale", "Generosity", "Kindness", "Humor", "Sharing"],
    full_text: "In a quiet woodland village lived three brothers. The youngest was nicknamed Dummling, not because he lacked wit, but because he was quiet, unassuming, and never pushed himself forward. His older brothers were boastful, selfish, and frequently mocked Dummling for his gentle nature.\n\nOne morning, the eldest brother went into the forest to chop firewood. His mother packed him a rich almond cake and a jug of sweet apple cider. In the woods, an old gray traveler approached him and asked: 'Good youth, please give me a small crust of your cake and a sip of your drink, for I am faint with hunger.' But the selfish brother sneered: 'If I share with you, there will be less for me! Begone!' The selfish youth struck a tree clumsily with his axe and nicked his arm, returning home in pain.\n\nThe next day, the second brother went into the forest with a sweet pastry. When the same old traveler asked for a morsel, the second brother replied coldly: 'What I give to you is lost to me!' He swung his axe carelessly, injured his ankle, and hobbled home empty-handed.\n\nOn the third morning, Dummling said to his father: 'Father, let me go and chop firewood.' His father scoffed, but Dummling persisted. His mother gave him only a dry crust of barley bread baked in the ashes and a bottle of sour water.\n\nIn the forest, the old gray traveler appeared and said: 'Kind boy, give me a morsel to eat and a drop to drink; I am hungry and thirsty.'\n\nDummling smiled with open warmth: 'I have only dry ash-bread and sour water, but if that pleases you, sit down with me on this fallen log and let us share it with glad hearts.'\n\nThey sat together. But when Dummling opened his cloth, lo and behold! The ash-bread had turned into a fresh, warm honey cake, and the sour water had become rich, sparkling apple cider! They ate and drank together in joyful fellowship.\n\nWhen they finished, the old traveler said with a twinkle in his eye: 'Because you have a generous heart and gladly shared your bread, I will grant you good fortune. Cut down that ancient oak tree over yonder, and you will find a treasure among its roots.'\n\nDummling cut down the oak tree. Nestled in a hollow beneath the mossy roots was a goose whose feathers were made of pure, sparkling, solid gold! Dummling tucked the golden bird under his arm and walked toward the town inn to rest for the night.\n\nAt the inn, the innkeeper had three daughters. Seeing the golden goose, the eldest daughter thought: *'I must have just one of those golden feathers!'* When Dummling looked away, she reached out to pluck a feather. But the moment her fingers touched the goose, her hand stuck fast! Her second sister rushed to pull her away, and her hands stuck fast to her sister's skirt! The third sister cried out, ran forward, and her hands stuck to the second sister!\n\nThe next morning, Dummling picked up his golden goose and strolled cheerfully toward the royal city, entirely unconcerned that the three sisters were compelled to trot behind him in a comical single file!\n\nAlong the highway, the village pastor shouted: 'For shame, girls! Let go of that youth!' He grabbed the youngest girl's sleeve, and he too was stuck! The parish clerk ran to pull the pastor, and two farmers joined to help, until a hilarious parade of seven people were trotting, tumbling, and stumbling behind Dummling and his golden goose across the countryside!\n\nNow, in the royal capital lived a King whose only daughter suffered from such profound melancholy that she had not smiled or laughed in ten long years. The King had proclaimed that whoever could make the princess laugh would be honored with royal favor and great wealth.\n\nDummling entered the city gates with his bizarre, hopping procession: seven people tethered like human dominoes, tripping over wheelbarrows, stepping into puddles, and shouting apologies in chorus! When the sad princess looked out from the palace balcony and saw this absurd, comical circus tumbling past, her sorrow melted away. She burst into a fountain of hearty, ringing laughter that echoed across the entire square!\n\nThe King was overjoyed. He had the sticky spell released, rewarded the innkeeper's daughters and farmers with silver for their unwitting performance, and warmly embraced Dummling. Dummling was appointed Royal Counselor of Welfare, ensuring that no traveler in the kingdom ever went hungry again.",
    moral: "Generosity and sharing what little you have opens the door to unexpected blessings. A joyful, humble heart brings light to those trapped in sorrow.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of Dummling carrying the golden goose as the funny line of people trots behind him to the palace",
    word_count: 820,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-12-01",
    is_bedtime: true,
    quiz: [
      {
        question: "What did Dummling share with the old traveler in the forest?",
        options: [
          "(Recommended) His dry ash-bread and sour water with a willing heart",
          "A bag of gold coins",
          "A roasted chicken"
        ],
        answerIndex: 0,
        hint: "He had only humble rations, but shared them gladly."
      },
      {
        question: "What magical treasure did Dummling find under the oak tree?",
        options: [
          "(Recommended) A goose with feathers made of pure solid gold",
          "A magical flying carpet",
          "A talking flute"
        ],
        answerIndex: 0,
        hint: "A golden goose was resting inside the hollow roots."
      },
      {
        question: "Why was the King looking for someone to make his daughter laugh?",
        options: [
          "She had been trapped in deep melancholy and had not smiled in ten years",
          "She was entering a joke contest",
          "She wanted to be an actress"
        ],
        answerIndex: 0,
        hint: "Her sorrow had lasted a decade until Dummling's funny parade passed by."
      }
    ],
    author: "Brothers Grimm (German Fairy Tale Classic)",
    status: "published",
    content_notes: "Classic whimsical fairy tale on generosity, humility, and the healing power of shared laughter. Safe for all.",
    values: ["generosity", "kindness", "humility", "sharing", "humor"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "unassuming", meaning: "not pretentious or arrogant; modest and humble" },
      { word: "fellowship", meaning: "friendly association, especially with people who share one's interests" },
      { word: "compelled", meaning: "forced or driven to do something by circumstances or an irresistible urge" },
      { word: "melancholy", meaning: "a feeling of pensive sadness, typically with no obvious cause" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Why were the older brothers injured when they tried to chop wood?" },
      { tier: "Understand", question: "Why did the simple ash-bread turn into delicious honey cake when Dummling shared it?" },
      { tier: "Apply", question: "Have you ever shared your snack or toy with someone who had none? How did it feel?" },
      { tier: "Evaluate", question: "Why is shared laughter such a powerful medicine for sadness?" },
      { tier: "Create", question: "Draw a funny comic strip of the seven people stuck together behind the golden goose!" }
    ],
    reflection_prompt: "When you share what you have with an open heart, you never truly lose anything; you multiply joy for everyone around you.",
    activity: "Share a treat, a book, or a kind word with someone who might be feeling left out today.",
    mood: ["happy", "funny", "comforting"],
    teaser: "Tomorrow, discover what happened when a generous orphan girl gave away her only coat under a sky of falling stars!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "grimm-star-talers",
    slug: "the-star-talers-and-the-generous-orphan",
    language: "en",
    title: "The Star Talers and the Generous Heart",
    genre: "Fairy Tales",
    collection: "Grimm Fairy Tales",
    culture_region: "Germany / European Classic",
    age_group: "All",
    summary: "A gentle orphan girl gives away her bread, her cap, her jacket, and her dress to poor shivering travelers in the cold woods, until the night sky showers her with shining golden stars.",
    keywords: ["star talers story", "grimm fairy tales generosity", "bedtime moral stories for children", "kindness fairy tales"],
    tags: ["Fairy Tale", "Generosity", "Kindness", "Bedtime", "Love"],
    full_text: "Once upon a time, there was a little orphan girl whose father and mother had passed away. She was so poor that she no longer had a room to sleep in, nor a bed to lie upon, and nothing in the world except the clothes she wore upon her back and a single crust of bread in her little apron pocket.\n\nYet, despite her poverty, she was good, gentle, and had a heart overflowing with trust and kindness.\n\nSince she had no home left in the village, she walked out into the countryside, trusting that the world would guide her steps. Along the woodland path, she met a poor old man who leaned heavily upon a crooked willow cane. 'Oh, kind child,' he whispered, shivering, 'give me something to eat; I am so hungry!'\n\nThe girl reached into her apron pocket and gave him the whole crust of bread. 'May it nourish you and bring you strength, grandfather,' she said with a warm smile, and walked on.\n\nA little further on, she met a small child crying by the roadside. 'My head is so cold, so cold!' wept the child. Without hesitating, the girl took off her own warm woolen cap, placed it tenderly upon the child's head, and kissed her cheek.\n\nA bit further on, she met another shivering child who had no jacket in the biting autumn breeze. The girl took off her own warm jacket and gave it to the child, saying: 'Wear this, little brother, and keep warm.'\n\nAt twilight, she entered a dark, whispering pine forest. There she met yet another child who had no shirt and begged for a covering. The good girl thought to herself: *'It is dark night now, and no one can see me in the forest; this poor child needs my dress far more than I do.'* So she slipped off her little dress and gave that away too, standing in the quiet clearing wearing only her simple cotton slip.\n\nNow she had nothing left in the entire world—no bread, no cap, no jacket, and no dress. She stood alone in the peaceful forest beneath the canopy of ancient pines.\n\nSuddenly, as the evening bells chimed softly in the distant village, the deep indigo sky illuminated with radiant, sparkling light. Falling from the heavens like gentle silver rain came thousands of sparkling stars—and as they touched the mossy earth, each star transformed into a gleaming silver taler coin of pure, precious metal!\n\nAnd behold! The simple cotton slip she wore was miraculously spun into the finest, softest, shimmering linen dress, glowing with the warmth of summer morning sunlight!\n\nThe gentle girl gathered the fallen star coins into her lap. She was rich now—not only with silver coins to provide warmth, food, and shelter for all the poor children and orphans of the valley for all their days, but rich in a heart that had given everything with unreserved love.",
    moral: "Generosity without expectation is the highest form of grace. Those who give freely of their heart will always find the universe sheltering them in return.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of the gentle orphan girl standing beneath a shower of falling golden star coins in the pine forest",
    word_count: 530,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-02",
    is_bedtime: true,
    quiz: [
      {
        question: "What was the only food the orphan girl possessed at the beginning of her journey?",
        options: [
          "(Recommended) A single crust of bread in her apron pocket",
          "A basket of apples",
          "A bowl of porridge"
        ],
        answerIndex: 0,
        hint: "She carried just one piece of bread in her pocket."
      },
      {
        question: "What did the falling stars turn into when they touched the forest earth?",
        options: [
          "(Recommended) Gleaming silver taler coins",
          "Snowflakes",
          "Glowing flowers"
        ],
        answerIndex: 0,
        hint: "The stars fell like rain and transformed into precious coins."
      },
      {
        question: "What did the girl do with her newfound blessings?",
        options: [
          "She provided food, warmth, and shelter for poor children in the valley",
          "She built a tall stone tower to keep everyone out",
          "She sailed away on a ship"
        ],
        answerIndex: 0,
        hint: "Her generous nature used the gift to help others in need."
      }
    ],
    author: "Brothers Grimm (German Fairy Tale Classic)",
    status: "published",
    content_notes: "Gentle, luminous bedtime classic celebrating radical empathy and unconditional kindness. Safe for all.",
    values: ["generosity", "kindness", "empathy", "gratitude", "love"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "talers", meaning: "large silver coins used historically throughout Europe as currency" },
      { word: "canopy", meaning: "an ornamental cloth covering or the high leafy roof formed by trees in a forest" },
      { word: "illuminated", meaning: "lit up and made bright with glowing light" },
      { word: "nourish", meaning: "to provide with the food or other substances necessary for growth, health, and good condition" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What articles of clothing did the girl give away along her journey?" },
      { tier: "Understand", question: "Why was the girl able to give so freely even though she had so little herself?" },
      { tier: "Apply", question: "What is something non-material (like time, a smile, or listening) that you can give to someone today?" },
      { tier: "Evaluate", question: "How does showing kindness to strangers build a safer and warmer world for everyone?" },
      { tier: "Create", question: "Draw a night sky filled with falling golden stars and write your kindest wish upon each star." }
    ],
    reflection_prompt: "The greatest treasures in life are not the things we hold tightly in our hands, but the warmth we give freely to others.",
    activity: "Look through your clothes or toys with a parent to find one gently used item you can donate to someone who needs warmth.",
    mood: ["calm", "comforting", "happy"],
    teaser: "Tomorrow, discover what happened when a little pine tree longed to grow up fast, forgetting the beauty of the present moment!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- HANS CHRISTIAN ANDERSEN ---
  {
    id: "andersen-little-fir-tree",
    slug: "the-little-fir-tree-and-the-present-moment",
    language: "en",
    title: "The Little Fir Tree in the Pine Woods",
    genre: "Fairy Tales",
    collection: "Hans Christian Andersen",
    culture_region: "Denmark / European Classic",
    age_group: "All",
    summary: "A young fir tree spends all his days longing for future grandeur, failing to appreciate the warm sunshine, singing birds, and morning dew around him, until he learns the timeless value of living in the present.",
    keywords: ["the fir tree story andersen", "mindfulness fairy tales for kids", "appreciating the present moment fable", "classic bedtime stories"],
    tags: ["Fairy Tale", "Mindfulness", "Gratitude", "Patience", "Bedtime"],
    full_text: "Out in the deep, fragrant woods stood a pretty little fir tree. It occupied a lovely spot with plenty of fresh mountain air and warm sunlight, surrounded by tall companions—towering pines and graceful spruces. Yet the little fir tree was not at all happy.\n\nIt did not care for the warm golden sunbeams that caressed its green needles. It did not care for the sweet mountain breeze that whispered through the leaves. When village children wandered through the woods with baskets filled with wild strawberries, they would sit near the little tree and say: 'Look at this darling little fir! How pretty and green it is!'\n\nThe little tree hated being called 'little.' It sulked and thought: *'Oh, if only I were a tall, majestic tree like the others! Then I could spread my branches wide across the sky, look out over the wide world, and have eagles build their nests in my highest boughs!'*\n\nIn the winter, when the snow lay white and glittering like diamonds upon the forest floor, a swift hare would often come leaping past and jump right over the little tree. Oh, how that annoyed him! *'To be so tiny that even a rabbit can hop over my head!'* he fumed.\n\n'Rejoice in your youth!' sang the warm sunbeams. 'Rejoice in your fresh new needles and the sweet sap flowing through your branches!'\n\nAnd the whispering wind kissed the little tree, and the morning dew wept sparkling tears upon it, but the fir tree understood neither the breeze nor the dew. It wanted only to be tall, to be somewhere else, to become something grander in the future.\n\nTwo winters passed, and the little fir had grown so tall that the hare had to run around it. Yet still the tree sighed: *'Growing is not enough! I want to be chopped down and made into the tall mast of a magnificent sailing ship that travels across stormy oceans!'*\n\nWhen autumn came, woodcutters arrived in the forest. They felled some of the tallest, oldest pine trees with heavy thuds. The little fir tree trembled with mixed fear and longing. A swallow told him that ships across the sea had tall wooden masts that looked splendid and smelled like pine resin.\n\nThen came Christmas Eve. Woodcutters walked through the groves and selected the little fir tree itself, cutting its trunk cleanly. It was carried into a grand mansion, placed in a brass tub filled with sand, and decorated with silk ribbons, gilded apples, walnuts wrapped in silver foil, and dozens of glowing wax candles! At the very top, a golden star sparkled.\n\nThat evening, children danced around the tree in pure enchantment. The candles flickered, and the children laughed and sang songs. The fir tree felt proud: *'Now my true glory has arrived!'*\n\nYet when morning came, the candles were put out. Attendants dismantled the toys and carried the dry tree up into a dark attic corner. The little tree stood alone in the shadows, listening to the dust settle.\n\nIn the quiet dark of the attic, the little fir tree finally began to think deeply with an open heart. It remembered the warm sunbeams of the forest. It remembered the gentle mountain breezes. It remembered the songbirds that had sung in its branches and the playful hare leaping over the snow.\n\n*'How beautiful was the forest!'* whispered the tree with a tender sigh of gratitude. *'How sweet was the morning dew! If only I had rejoiced in the glorious sunshine while I had it, instead of constantly wishing my days away!'*\n\nIn this gentle bedtime retelling, a kind gardener finds the fir tree in the spring, plants its root-ball in the sunny earth of the castle meadow, and water brings it back to life. The grateful fir tree lives on for a hundred peaceful years, savoring every single drop of rain, every warm sunbeam, and every breeze that caresses its fragrant needles.",
    moral: "Do not spend your days wishing for the future or longing to be somewhere else. Savor and appreciate the beauty, family, and joy of the present moment.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of the young fir tree growing happily in the sunlit forest surrounded by woodland creatures",
    word_count: 730,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-12-03",
    is_bedtime: true,
    quiz: [
      {
        question: "Why was the young fir tree unhappy at the beginning of the story?",
        options: [
          "(Recommended) It was impatient to grow tall and wished its youth away",
          "It had no sunlight or water",
          "It wanted to turn into a rosebush"
        ],
        answerIndex: 0,
        hint: "It constantly focused on wanting to be bigger instead of enjoying its days."
      },
      {
        question: "What advice did the sunbeams and breezes give to the little tree?",
        options: [
          "(Recommended) 'Rejoice in your youth and your fresh life!'",
          "Run away from the woods",
          "Hide from the children"
        ],
        answerIndex: 0,
        hint: "Nature encouraged the tree to savor its present season."
      },
      {
        question: "What did the tree realize when it looked back upon its forest days?",
        options: [
          "That the simple forest sunshine, dew, and birds were the greatest gifts of all",
          "That it should have grown taller faster",
          "That it didn't like singing birds"
        ],
        answerIndex: 0,
        hint: "It recognized how precious the present moments in nature truly were."
      }
    ],
    author: "Hans Christian Andersen (Danish Fairy Tale Classic)",
    status: "published",
    content_notes: "Mindful adaptation emphasizing gratitude for the present. Completely family safe.",
    values: ["gratitude", "mindfulness", "patience", "peace"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "caressed", meaning: "touched or stroked gently or lovingly" },
      { word: "majestic", meaning: "having or showing impressive beauty or dignity" },
      { word: "dismantled", meaning: "taken to pieces or disassembled" },
      { word: "savoring", meaning: "tasting or enjoying something completely with great appreciation" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What animal used to hop over the little fir tree in the winter?" },
      { tier: "Understand", question: "Why do we sometimes wish we were older, only to miss being young later?" },
      { tier: "Apply", question: "What is one simple pleasure happening in your life right now that you can enjoy today?" },
      { tier: "Evaluate", question: "Why is practicing mindfulness and being present good for our mental well-being?" },
      { tier: "Create", question: "Write a short letter to yourself one year from now, reminding yourself to appreciate today." }
    ],
    reflection_prompt: "Yesterday is history, tomorrow is a mystery, and today is a gift. That is why it is called the present.",
    activity: "Step outside or look out a window for two minutes: feel the air on your skin and listen to three natural sounds around you.",
    mood: ["calm", "comforting", "happy"],
    teaser: "Tomorrow, discover what happened when Mulla Nasruddin borrowed a cooking pot that gave birth to a baby pot!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- MULLA NASRUDDIN (Reaching 5) ---
  {
    id: "mulla-nasruddin-pot-gave-birth",
    slug: "the-pot-that-gave-birth-and-passed-away",
    language: "en",
    title: "The Cooking Pot That Gave Birth and Passed Away",
    genre: "Humorous Tales",
    collection: "Mulla Nasruddin",
    culture_region: "Middle East / Central Asia",
    age_group: "All",
    summary: "When a greedy neighbor lends Mulla Nasruddin a copper cooking pot, Nasruddin returns it with a tiny pot claiming it gave birth. When the neighbor happily accepts, Nasruddin prepares the ultimate lesson in poetic justice.",
    keywords: ["mulla nasruddin pot gave birth", "nasruddin pot story", "greedy neighbor folktale", "middle eastern humor for kids"],
    tags: ["Humor", "Greed", "Justice", "Wisdom"],
    full_text: "Mulla Nasruddin had a neighbor named Kasim who was notoriously greedy, selfish, and cunning. Kasim was always eager to take from others, but would never lend a single grain of wheat without demanding interest.\n\nOne evening, Nasruddin knocked on Kasim's door. 'Good neighbor Kasim,' said Nasruddin with a humble bow, 'I am preparing a large feast for traveling scholars tonight. Could you please lend me your large copper cooking cauldron for just one day? I shall return it safely tomorrow.'\n\nKasim hesitated, but seeing a chance to place Nasruddin in his debt, he brought out his heavy copper pot. 'Take it, Mulla. But return it tomorrow without a scratch!'\n\nThe next morning, Nasruddin brought the copper cauldron back to Kasim's house. Inside the large pot was a brand-new, tiny copper saucepan.\n\nKasim inspected the pot and saw the little saucepan. 'Mulla, what is this tiny saucepan doing inside my cauldron?'\n\nNasruddin beamed with joyful congratulations: 'Rejoice, neighbor Kasim! Last night, while resting in my kitchen, your large cooking pot gave birth to this adorable baby pot! Since the mother pot belongs to you, the baby pot naturally belongs to you as well!'\n\nKasim stared at Nasruddin. He knew that copper pots do not give birth—that was scientifically impossible! But his insatiable greed whispered: *'Why argue? I am getting a free copper saucepan for nothing!'*\n\nSo Kasim smiled broadly and patted Nasruddin on the shoulder: 'How wonderful! Thank you, wise Mulla! Your honesty is commendable!' Kasim gleefully took both pots inside his kitchen.\n\nTwo weeks later, Nasruddin visited Kasim again: 'Dear neighbor Kasim, I have another feast tonight. Could you please lend me your large copper cauldron once more?'\n\nKasim was ecstatic: *'Perhaps it will give birth to twins this time!'* He brought out his finest, heaviest copper cauldron with both hands and handed it to Nasruddin with an eager grin.\n\nOne day passed. Then two days. Then a whole week went by, but Nasruddin did not return the pot.\n\nUnable to contain his impatience, Kasim marched over to Nasruddin's house and pounded on the wooden door: 'Nasruddin! Where is my cauldron? Why have you not brought it back?'\n\nNasruddin opened the door slowly. His eyes were downcast, his shoulders slumped, and he wiped away an imaginary tear with the sleeve of his tunic.\n\n'Alas, my dear brother Kasim!' sighed Nasruddin mournfully. 'I bring you tragic and sorrowful news. Yesterday afternoon, with no warning whatsoever... your beloved copper cauldron passed away! It is dead!'\n\nKasim turned purple with rage. 'Dead? Are you out of your mind, Nasruddin? How can a copper cooking pot die? Pots are made of metal; they do not have lungs, blood, or life! You are lying to steal my cauldron!'\n\nMulla Nasruddin looked calmly into Kasim's raging eyes with an amused, serene smile:\n\n'My dear neighbor Kasim, you were perfectly willing to believe that a copper pot could be alive when it gave birth to a baby saucepan for your profit. Why is it so difficult for you to believe that a pot can die when the loss falls upon you? Whatever has the power to be born must surely have the nature to pass away!'\n\nKasim stood frozen on the doorstep, utterly speechless. His own foolish greed had trapped him completely. The surrounding neighbors who had gathered to listen burst into uncontrollable laughter at Kasim's humiliation. Kasim slunk back into his house in shame, cured forever of taking advantage of others through greedy loopholes.",
    moral: "You cannot accept an absurd claim when it profits you, and then reject it when it costs you. Greed blinds people to truth and exposes them to poetic justice.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of Mulla Nasruddin consoling the furious neighbor Kasim about the deceased cooking cauldron",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-04",
    is_bedtime: false,
    quiz: [
      {
        question: "What did Nasruddin place inside the cooking pot on his first return?",
        options: [
          "(Recommended) A tiny copper saucepan, claiming the pot gave birth",
          "A bag of gold coins",
          "A pet rabbit"
        ],
        answerIndex: 0,
        hint: "He claimed the pot had delivered a baby saucepan."
      },
      {
        question: "Why did the greedy neighbor accept the baby saucepan without questioning it?",
        options: [
          "(Recommended) His greed made him accept a free item even though it was impossible",
          "He genuinely thought pots could give birth",
          "He was asleep"
        ],
        answerIndex: 0,
        hint: "Greed made him ignore common sense when it was in his favor."
      },
      {
        question: "What excuse did Nasruddin give when the neighbor asked for the pot the second time?",
        options: [
          "He claimed the cooking pot had passed away and died",
          "He said it flew to the moon",
          "He said the king borrowed it"
        ],
        answerIndex: 0,
        hint: "He used the neighbor's own belief in a 'living pot' against him."
      }
    ],
    author: "Traditional Middle Eastern / Sufi Folklore (Mulla Nasruddin Collection)",
    status: "published",
    content_notes: "Classic masterclass in wit, consistency of logic, and exposing hypocrisy. Safe for all.",
    values: ["honesty", "justice", "responsibility", "wisdom", "humor"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "notoriously", meaning: "widely and unfavorably known for something" },
      { word: "cauldron", meaning: "a large metal pot with a lid and handle, used for cooking over an open fire" },
      { word: "commendable", meaning: "deserving praise, approval, or admiration" },
      { word: "hypocrisy", meaning: "the practice of claiming to have standards or beliefs that do not conform to one's behavior" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What kind of pot did Nasruddin borrow from Kasim?" },
      { tier: "Understand", question: "Why did Kasim readily accept the first impossible story but reject the second?" },
      { tier: "Apply", question: "Have you ever seen someone change their rules depending on whether they win or lose?" },
      { tier: "Evaluate", question: "Why is consistency and fairness in our beliefs so important in everyday life?" },
      { tier: "Create", question: "Write a short humorous dialogue where Kasim tries to explain what happened to his wife." }
    ],
    reflection_prompt: "Fairness means playing by the same honest rules whether you are winning or losing.",
    activity: "Play a board game with a family member or friend and practice being a gracious player in both victory and defeat.",
    mood: ["funny", "curious", "brave"],
    teaser: "Tomorrow, discover what happened when Mulla Nasruddin crossed the border every day with two donkeys carrying straw!",
    series_id: null,
    part_number: null,
    reviewed: true
  }
];

let added = 0;
for (const story of fairyAndFolkStories) {
  if (!existingIds.has(story.id)) {
    existing.push(story);
    existingIds.add(story.id);
    added++;
    console.log(`[Fairy & Folk Batch] Added: "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Fairy & Folk Batch] Done! Added ${added} stories. Total stories in English: ${existing.length}`);
