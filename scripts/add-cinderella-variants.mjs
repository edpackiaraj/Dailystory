import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

const cinderellaVariants = [
  {
    id: "cinderella-rhodopis-egypt",
    slug: "rhodopis-and-the-golden-falcon-slipper",
    language: "en",
    title: "Rhodopis and the Golden Falcon Sandal",
    genre: "Fairy Tales",
    collection: "Cinderella Stories",
    culture_region: "Ancient Egypt / Greece",
    age_group: "All",
    summary: "Recorded in the first century BCE, the world's oldest known Cinderella tale follows gentle Rhodopis, whose gilded rose-red sandal is carried by a royal falcon to Pharaoh Amasis.",
    keywords: ["rhodopis cinderella story", "oldest cinderella tale ancient egypt", "egyptian cinderella for kids", "strabo cinderella myth"],
    tags: ["Cinderella", "Fairy Tale", "Kindness", "Destiny", "Bedtime"],
    full_text: "Long ago, in the sun-drenched land of Ancient Egypt along the sparkling River Nile, lived a gentle Greek maiden named Rhodopis. Stolen from her northern homeland by sea pirates when she was a child, she had been brought across the Mediterranean and sold into service in the household of a wealthy Egyptian merchant in the city of Naucratis.\n\nWhile the other servant girls were proud and mockingly called her 'the green-eyed foreigner,' Rhodopis found comfort in nature. She befriended the pink lotus flowers along the riverbank, fed grain to the crested hoopoes, and danced barefoot for the friendly river hippopotamuses. Her master, an old man who slept through the heat of the afternoon, admired her cheerful industry and gifted her a pair of exquisite sandals made of rose-red gilded leather with gold soles.\n\nWhen news came that the great Pharaoh Amasis was holding a grand festival in the royal capital of Memphis, the other servants sailed up the Nile in their finest linen gowns. But they loaded poor Rhodopis with heavy baskets of washing and forbade her from attending.\n\nAs Rhodopis stood in the cool river shallows washing a linen tunic, she slipped off her precious rose-red sandals and set them on a flat stone. Suddenly, a majestic royal falcon—the sacred emblem of truth and the skies—swooped down from the azure heavens, seized one of the red sandals in its talons, and flew southward toward Memphis!\n\nRhodopis was heartbroken to lose her sandal, but tucked the remaining one safely into her robe.\n\nMeanwhile, in the grand courtyard of Memphis, Pharaoh Amasis was administering justice beneath the towering stone pillars. Suddenly, the royal falcon circled the open throne hall and dropped the rose-red gilded sandal directly into Pharaoh's lap!\n\nThe Pharaoh caught the delicate shoe in wonder. The leather was soft as rose petals, adorned with gold wire, and crafted with breathtaking elegance. The Pharaoh recognized the bird as a messenger of destiny: 'Find the maiden throughout Egypt whose foot fits this rose-red sandal, for she possesses a gentle soul!'\n\nThe royal heralds sailed up and down the Nile. When they arrived at Naucratis, the haughty servants shoved forward, but their feet were far too large. Then the herald noticed Rhodopis sitting quietly among the reeds. He knelt and held out the sandal. Rhodopis slipped her slender foot inside—it fitted flawlessly! Then, from her sash, she drew forth the second matching rose-red sandal.\n\nPharaoh Amasis welcomed Rhodopis to Memphis with honor. He admired not only her grace, but her radiant kindness to all living things, proclaiming her Queen of the Two Lands, forever celebrating the enduring power of gentle patience.",
    moral: "True beauty is rooted in inner gentle kindness and patient endurance. Dignity and virtue will always be recognized and elevated above cruelty.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of the royal falcon carrying the rose-red gilded sandal through the sunny skies above the Nile",
    word_count: 590,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-17",
    is_bedtime: true,
    quiz: [
      {
        question: "What unique pair of shoes did Rhodopis receive from her master?",
        options: [
          "(Recommended) Gilded rose-red leather sandals with gold soles",
          "Glass slippers with crystal buckles",
          "Wooden clogs painted with lotus flowers"
        ],
        answerIndex: 0,
        hint: "They were crafted from rose-red gilded leather."
      },
      {
        question: "Which noble bird carried the shoe to the Pharaoh in Memphis?",
        options: [
          "(Recommended) A royal falcon",
          "A white swan",
          "A desert eagle"
        ],
        answerIndex: 0,
        hint: "The sacred falcon swooped down and seized the sandal."
      },
      {
        question: "Why is the story of Rhodopis historically significant?",
        options: [
          "It is the oldest recorded Cinderella tale in world history, dating back to antiquity",
          "It was written on pure gold plates",
          "It takes place in the pyramids"
        ],
        answerIndex: 0,
        hint: "Historian Strabo first recorded this ancient variant in the first century BCE."
      }
    ],
    author: "Ancient Greco-Egyptian Folklore (Recorded by Strabo)",
    status: "published",
    content_notes: "The world's oldest recorded Cinderella variant. Completely family safe.",
    values: ["patience", "kindness", "gentleness", "dignity"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "herald", meaning: "an official messenger bringing news or royal proclamations" },
      { word: "gilded", meaning: "covered thinly with gold leaf or gold paint" },
      { word: "industry", meaning: "hard work and diligent, steady effort" },
      { word: "endurance", meaning: "the ability to withstand hardship, adversity, or stress with patience" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Where did Rhodopis live before moving to Egypt?" },
      { tier: "Understand", question: "How does the story of Rhodopis compare to the European glass-slipper Cinderella?" },
      { tier: "Apply", question: "When others treat you unkindly, how can spending time in nature bring peace to your heart?" },
      { tier: "Evaluate", question: "Why do you think the Cinderella story has appeared in almost every human culture across history?" },
      { tier: "Create", question: "Design your own pair of magical shoes inspired by Egyptian lotus flowers or falcon feathers." }
    ],
    reflection_prompt: "Virtue does not need to shout. A gentle heart shines like gold even when dressed in humble linen.",
    activity: "Draw a map of the River Nile showing Naucratis and Memphis, and trace the path the falcon flew.",
    mood: ["calm", "comforting", "brave"],
    teaser: "Tomorrow, discover what happened when the Italian Cinderella planted a date seed given to her by woodland fairies!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "cinderella-cenerentola-italy",
    slug: "la-cenerentola-and-the-magic-date-tree",
    language: "en",
    title: "La Cenerentola and the Magic Date Tree",
    genre: "Fairy Tales",
    collection: "Cinderella Stories",
    culture_region: "Italy / Mediterranean",
    age_group: "All",
    summary: "From 17th-century Naples, Giambattista Basile's classic Italian Cinderella tale follows clever Zezolla, who nurtures a magical date tree gifted by the fairies of Sardinia.",
    keywords: ["la cenerentola story", "italian cinderella giambattista basile", "date tree fairy tale", "cinderella stories across cultures"],
    tags: ["Cinderella", "Fairy Tale", "Kindness", "Patience", "Nature"],
    full_text: "In the sunlit Mediterranean city of Naples lived a noble maiden named Zezolla. Through sudden family changes, she was reduced to tending the kitchen ashes and was given the nickname 'La Cenerentola' (the Cinderella of the hearth). Yet through every chore, Zezolla retained her gentle humor, love of music, and quiet grace.\n\nWhen her father sailed to the island of Sardinia on a merchant voyage, he asked what gift he should bring back for her. While her sisters demanded diamond combs and velvet ribbons, Zezolla asked only for something simple: 'Bring me whatever the gentle fairies of Sardinia send for my garden.'\n\nHer father returned with a tiny, delicate potted date tree sapling, accompanied by a miniature golden spade and a tiny silver watering pail. Zezolla planted the date tree in a sunny corner of the villa courtyard. Twice every day, she watered it with the silver pail, cleared the weeds with the golden spade, and sang sweet Neapolitan lullabies to its growing leaves.\n\nNourished by her loving care, the date tree miraculously grew tall within four days. From its leafy branches stepped a luminous fairy who smiled warmly: 'Zezolla, because you tended this living plant with sincere love and patience, whenever you have need, recite these words: *\"O my magic date tree, strip your leaves and clothe me!\"*'\n\nWhen the King of Naples announced a grand royal ball at the seaside palace, the unkind stepsisters rode away in their carriage, laughing that Zezolla would spend the night sweeping charcoal. But Zezolla ran to her date tree and spoke the verse. In a shower of golden blossoms, the tree adorned her in a gown spun of sea-blue silk, embroidered with silver stars, and gave her a pair of dainty slippers made of chased gold and cork!\n\nAt the royal ball, everyone was enchanted by Zezolla's radiance, modesty, and witty conversation. The King himself danced with her, marveling at how kindly she spoke to every guest. But remembering that her magic lasted only until the morning bell, Zezolla slipped away into the night, losing one of her gold slippers on the palace steps.\n\nThe King issued a proclamation across Naples: every maiden must try the golden shoe! When the royal herald brought the shoe to Zezolla's kitchen, her foot slipped into the slipper effortlessly. Zezolla was welcomed to the royal palace in joyful triumph, forever proving that true nobility grows from nurturing love, like a fruitful date tree in the Mediterranean sun.",
    moral: "What you nurture with daily patience, love, and care will blossom into blessings. Sincere effort always bears fruit.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of Zezolla watering her magical date tree with the miniature silver pail in a sunny Italian courtyard",
    word_count: 570,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-18",
    is_bedtime: true,
    quiz: [
      {
        question: "What gift did Zezolla ask her father to bring from Sardinia?",
        options: [
          "(Recommended) Whatever the fairies of Sardinia sent for her garden",
          "A chest of gold coins",
          "A velvet riding cloak"
        ],
        answerIndex: 0,
        hint: "She asked for a gift of nature rather than jewelry."
      },
      {
        question: "How did Zezolla care for the date tree sapling?",
        options: [
          "(Recommended) Watered it with a silver pail, weeded with a golden spade, and sang lullabies",
          "Kept it in a dark basement",
          "Ignored it until it died"
        ],
        answerIndex: 0,
        hint: "She nurtured it twice daily with sincere love and care."
      },
      {
        question: "What were Zezolla's dancing slippers made of?",
        options: [
          "Chased gold and Mediterranean cork",
          "Glass and crystals",
          "Woven straw"
        ],
        answerIndex: 0,
        hint: "In the Italian tradition, the shoes were crafted of gold and cork."
      }
    ],
    author: "Giambattista Basile (The Pentamerone, 1634)",
    status: "published",
    content_notes: "Classic Italian Renaissance Cinderella variant focusing on patience and tending living nature. Safe for all.",
    values: ["patience", "kindness", "gratitude", "responsibility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "sapling", meaning: "a young tree, especially one with a slender trunk" },
      { word: "chased", meaning: "ornamented by indenting with a hammer or engraving tool" },
      { word: "radiance", meaning: "light or heat as emitted or reflected by something; glowing beauty" },
      { word: "hearth", meaning: "the floor of a fireplace or the area surrounding it, symbol of the home" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What city in Italy is the setting for this Cinderella story?" },
      { tier: "Understand", question: "Why did Zezolla's care for the little tree make the fairies want to help her?" },
      { tier: "Apply", question: "How is caring for a plant or pet similar to developing a good habit in your own life?" },
      { tier: "Evaluate", question: "Why do stories that reward kindness and patience endure for centuries?" },
      { tier: "Create", question: "Draw your own magic tree! What fruit or flowers does it grow?" }
    ],
    reflection_prompt: "The things that truly bless our lives are often the living things we nurture with quiet, daily love.",
    activity: "Water a houseplant or plant a seed in a cup of soil today, promising to care for it daily.",
    mood: ["calm", "comforting", "happy"],
    teaser: "Tomorrow, discover what happened when Rashin Coatie met a magical red calf in the misty hills of Scotland!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "cinderella-rashin-coatie-scotland",
    slug: "rashin-coatie-and-the-little-red-calf",
    language: "en",
    title: "Rashin Coatie and the Little Red Calf",
    genre: "Fairy Tales",
    collection: "Cinderella Stories",
    culture_region: "Scotland / Celtic",
    age_group: "All",
    summary: "From the heather hills of Scotland, this ancient Celtic Cinderella story tells of kind Rashin Coatie, whose coat of woven rushes and friendship with a gentle red calf leads her to joy.",
    keywords: ["rashin coatie story", "scottish cinderella celtic tale", "rushes coat fairy tale", "cinderella stories world folklore"],
    tags: ["Cinderella", "Fairy Tale", "Friendship", "Kindness", "Bedtime"],
    full_text: "Across the misty, heather-covered glens of the Scottish Highlands lived a kind and hardworking young maiden named Jean. Because her cruel stepmother gave her only old sacks to wear, the clever girl gathered green rushes from the riverside, dried them in the autumn breeze, and wove herself a handsome, waterproof coat. The villagers warmly nicknamed her 'Rashin Coatie.'\n\nWhile her stepsisters lounged by the fire, Rashin Coatie was sent out into the cold drizzle every day to graze a single little red calf. Rashin Coatie shared her dry bannock bread with the calf, sang ancient Gaelic ballads, and sheltered the gentle creature beneath the pine trees during sudden rainstorms.\n\nOne winter morning, the King of the Highlands announced a grand Yuletide celebration at the kirk (the stone parish hall). The stepmother and stepsisters dressed in tartan plaids, silk ribands, and polished silver brooches, leaving Rashin Coatie with a mountain of wool to card and spin before sunrise.\n\nRashin Coatie sat by the peat fire in tears. Suddenly, the little red calf trotted to the doorway and spoke with gentle, affectionate eyes: 'Weep no more, kind Rashin Coatie! You have sheltered me in storm and shared your bread in winter. Tap my left horn with a rowan twig!'\n\nRashin Coatie tapped the calf's horn. In a twinkle of heather magic, the rough bundle of wool was spun into fine spools of yarn, and before her lay a gown woven of forest-green velvet with gold thistles and a pair of delicate green satin slippers!\n\nRashin Coatie attended the Yuletide dance. She danced with such natural joy, modesty, and grace that the young Prince was captivated by her kindness. She laughed with the elderly grandmothers, shared cakes with the children, and danced the reel like a mountain breeze.\n\nAs the midnight church bells tolled, Rashin Coatie sprinted home across the cobblestones, accidentally dropping one of her green satin slippers in the snow.\n\nThe Prince searched every glen in the Highlands. When the herald arrived at Rashin Coatie's croft, the proud stepsisters pinched their toes and cut their heels, but could not fit the shoe. Then the red calf nudged Rashin Coatie forward. Her foot slipped into the green slipper as smoothly as a hand into a glove, and from under her rush coat, she drew forth the matching slipper.\n\nThe Prince looked into her honest, kind eyes and knew he had found his true partner. Rashin Coatie brought the faithful red calf to live in the palace meadows, where they lived in happiness, peace, and generosity, proving that kindness and practical ingenuity outshine any coat of silk.",
    moral: "Resourcefulness, humble patience, and kindness to animals create true nobility. Goodness of heart cannot be hidden by a coat of rushes.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of Rashin Coatie in her woven green coat feeding her gentle red calf in the Scottish Highlands",
    word_count: 580,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-19",
    is_bedtime: true,
    quiz: [
      {
        question: "Why was the maiden nicknamed 'Rashin Coatie'?",
        options: [
          "(Recommended) Because she wove herself a waterproof coat made of river rushes",
          "Because she loved raspberry pie",
          "Because she lived in a rush castle"
        ],
        answerIndex: 0,
        hint: "She gathered and wove rushes into a warm coat."
      },
      {
        question: "What animal helped Rashin Coatie fulfill her tasks and find happiness?",
        options: [
          "(Recommended) A gentle, faithful little red calf",
          "A talking seal",
          "A wild eagle"
        ],
        answerIndex: 0,
        hint: "The red calf she had fed and sheltered helped her."
      },
      {
        question: "What culture does the Rashin Coatie story originate from?",
        options: [
          "Scottish Celtic Folklore",
          "Ancient Roman Mythology",
          "Japanese Folklore"
        ],
        answerIndex: 0,
        hint: "It comes from the Scottish Highlands and glens."
      }
    ],
    author: "Traditional Scottish Folklore (Celtic Cinderella Variant)",
    status: "published",
    content_notes: "Classic Celtic variant of Cinderella celebrating resourcefulness and care for animals. Safe for all.",
    values: ["kindness", "resourcefulness", "friendship", "patience"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "rushes", meaning: "marsh or waterside plants with slender, cylindrical pithy stems used for weaving" },
      { word: "heather", meaning: "a low-growing evergreen shrub with small purple-pink bell-shaped flowers common on Scottish hills" },
      { word: "bannock", meaning: "a round, flat type of bread or scone made from oatmeal or barley flour" },
      { word: "ingenuity", meaning: "the quality of being clever, inventive, and resourceful" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What chore did Rashin Coatie have to finish before attending the dance?" },
      { tier: "Understand", question: "Why did Rashin Coatie's kindness to the calf return to bless her later?" },
      { tier: "Apply", question: "How can you make something useful or creative out of simple materials around you?" },
      { tier: "Evaluate", question: "What does this story show about judging someone by their clothes?" },
      { tier: "Create", question: "Draw Rashin Coatie's green rush coat and decorate it with wild heather flowers." }
    ],
    reflection_prompt: "You do not need expensive things to be extraordinary. Your kindness, creativity, and cheerful spirit are your greatest garments.",
    activity: "Make a craft using natural items from outdoors (like fallen leaves, twigs, or stones) to create a piece of art.",
    mood: ["comforting", "calm", "happy"],
    teaser: "Discover the complete world collection of Cinderella tales and timeless folktales across 10 languages!",
    series_id: null,
    part_number: null,
    reviewed: true
  }
];

let added = 0;
for (const story of cinderellaVariants) {
  if (!existingIds.has(story.id)) {
    existing.push(story);
    existingIds.add(story.id);
    added++;
    console.log(`[Cinderella Expansion] Added: "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Cinderella Expansion] Done! Added ${added} stories. Total stories in English: ${existing.length}`);
