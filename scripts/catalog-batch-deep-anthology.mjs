import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

export const deepAnthologyStories = [
  // --- TENALI RAMA (Reaching 5+) ---
  {
    id: "tenali-rama-royal-brinjal",
    slug: "the-secret-of-the-royal-brinjals",
    language: "en",
    title: "The Secret of the King's Royal Brinjals",
    genre: "Humorous Tales",
    collection: "Tenali Rama",
    culture_region: "Vijayanagara Empire",
    age_group: "All",
    summary: "When the King guards a rare purple vegetable with high palace walls, Tenali Rama's wife desires a taste. Tenali devises an ingenious dream play to protect his young son from telling a lie.",
    keywords: ["tenali rama royal brinjal", "tenali rama eggplant story", "tenali rama wit and wisdom", "moral stories for children"],
    tags: ["Humor", "Family", "Honesty", "Cleverness"],
    full_text: "In the royal botanical garden of Vijayanagara, King Krishna Deva Raya cultivated a rare variety of brinjal (eggplant). The vegetables were deep violet, extraordinarily sweet, and guarded day and night by armed royal sentries. No citizen was permitted to pick or taste even a single leaf under penalty of severe punishment.\n\nOne evening, the King hosted a small dinner for his closest ministers and served a curry prepared from the royal brinjals. Tenali Rama was enchanted by its rich, succulent flavor. When he returned home, he spoke so poetically about the delicious dish that his wife, Sharada, longed to prepare it for their young son, little Ramu.\n\n'Can you not bring just two brinjals from the royal garden?' pleaded Sharada. 'Our child has never tasted such a delicacy.'\n\nTenali hesitated. Stealing royal produce was treason, but seeing his wife's pleading eyes, he made up his mind to pluck two brinjals under moonlight. Scaling the palace garden wall with agile footwork, he plucked two ripe brinjals and slipped home unnoticed. Sharada cooked a fragrant, mouthwatering curry and fed it to little Ramu, who ate with round-eyed joy.\n\nHowever, Tenali realized a serious danger: Ramu was only six years old and innocent. Children speak whatever comes to their minds. If the palace guards came inquiring, Ramu would innocently say, 'I ate royal brinjals for dinner!'\n\nTenali smiled and whispered a plan to his wife.\n\nThat night, while Ramu was sound asleep on his woven cot, Tenali gently carried the sleeping boy up to the flat rooftop. Clouds drifted across the dark sky, and a gentle night breeze blew. Tenali splashed water droplets over the roof tiles, scooped handfuls of water from a copper jug and let them trickle over the boy's face and arms, while shaking a thin sheet of metal to make low, rumbling sounds: *Rumble, rumble, whoosh! Splash!*\n\n'Wake up, Ramu!' shouted Tenali playfully. 'A wild thunderstorm has broken out! Look at the heavy rain and lightning on the roof!'\n\nThe sleepy boy blinked in the darkness, feeling cold water on his brow and hearing the rumbling metal. Tenali then carried him down into the dry bedroom, tucked him under a warm quilt, and let him drift back into peaceful sleep.\n\nThe next morning, the head palace gardener discovered two brinjals missing and reported the theft to King Krishna Deva Raya. The King was furious: 'Who dared trespass in my garden? Search every minister's house!'\n\nSoon, royal guards knocked on Tenali Rama's door. 'Tenali, did your household eat royal brinjals last night?'\n\n'Certainly not!' declared Tenali. 'Search our kitchen.' The guards found only rice and lentil soup.\n\nThen the guard chief saw little Ramu playing in the courtyard with clay marbles. 'Come here, little one,' asked the chief kindly. 'What did you have for dinner last night?'\n\nRamu smiled brightly: 'I ate the most delicious royal brinjal curry with hot rice!'\n\nThe guard turned triumphantly to Tenali: 'Aha! The innocent child has spoken the truth! Arrest Tenali Rama!'\n\nTenali calmly shook his head. 'Wait, officer. Ask the boy what else happened last night before making an arrest.'\n\nThe guard turned back to Ramu: 'Tell us what happened after dinner, little boy.'\n\nRamu's eyes went wide with wonder: 'After dinner, my father and I went up to the rooftop in the middle of the night, and there was a huge thunderstorm! Gallons of rain poured over my head, thunder rumbled across the sky, and lightning flashed across the roof tiles!'\n\nThe guard chief blinked in utter disbelief. He looked at the sky and out at the sunny village square. 'Thunderstorm? Heavy rain last night? The skies were crystal clear, with not a single cloud in all of Vijayanagara!'\n\nThe guards burst out laughing. 'The poor child is confusing his dreams with reality! He had a vivid dream of eating royal brinjals while dreaming of a rooftop storm!'\n\nThe guards apologized and left without making an arrest. When King Krishna Deva Raya heard the guard's report, he saw through the trick, smiled at Tenali's psychological genius, and gifted Tenali a whole basket of royal brinjals with a playful warning never to climb the garden wall again.",
    moral: "A sharp mind understands how memory, innocence, and perception work. Love and wit can protect family while preserving innocent hearts.",
    image: "/images/stories/tenali-rama-garden.svg",
    image_alt: "Illustration of Tenali Rama with his smiling son Ramu showing clay marbles to the puzzled royal guards",
    word_count: 730,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-11-26",
    is_bedtime: false,
    quiz: [
      {
        question: "Why was the vegetable in the King's garden so special?",
        options: [
          "(Recommended) It was a rare, sweet royal brinjal guarded day and night",
          "It was made of solid gold",
          "It grew only once every century"
        ],
        answerIndex: 0,
        hint: "The King cultivated rare purple brinjals with armed sentries."
      },
      {
        question: "Why did Tenali Rama stage a fake thunderstorm on the roof for his sleeping son?",
        options: [
          "To make the boy's story sound like a dream so guards wouldn't believe he ate the brinjals",
          "To wash the roof tiles",
          "To scare away pigeons"
        ],
        answerIndex: 0,
        hint: "He mixed the real dinner with an impossible rooftop storm so both would be dismissed as a dream."
      },
      {
        question: "How did the guards react to the boy's description of a midnight thunderstorm?",
        options: [
          "(Recommended) They laughed, thinking the child was confusing his dreams with reality",
          "They arrested the boy",
          "They checked the weather report"
        ],
        answerIndex: 0,
        hint: "The night was completely clear, so they assumed the whole thing was a child's dream."
      }
    ],
    author: "Traditional South Indian Folklore (Tenali Rama Collection)",
    status: "published",
    content_notes: "Classic wit story illustrating clever child psychology. Family safe.",
    values: ["family", "curiosity", "wisdom", "humor"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "succulent", meaning: "tender, juicy, and tasty to eat" },
      { word: "sentries", meaning: "soldiers stationed to keep guard or control access to a place" },
      { word: "trespass", meaning: "to enter someone's land or property without permission" },
      { word: "vivid", meaning: "producing powerful, feelings or clear, lifelike images in the mind" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What vegetable did the King guard in his private botanical garden?" },
      { tier: "Understand", question: "Why didn't Tenali Rama simply tell his son to lie to the guards?" },
      { tier: "Apply", question: "Why is it important to protect young children from having to bear adult burdens or lies?" },
      { tier: "Evaluate", question: "Was Tenali right or wrong to take the brinjals? How did the King handle it at the end?" },
      { tier: "Create", question: "Invent your own rare garden vegetable! What magical flavor or color does it have?" }
    ],
    reflection_prompt: "Innocent truth is sacred in children. What does this story teach us about being thoughtful guardians of little ones?",
    activity: "Draw a funny purple brinjal wearing a tiny royal crown and golden shoes.",
    mood: ["funny", "curious", "comforting"],
    teaser: "Tomorrow, discover what Tenali Rama did when greedy priests demanded pure gold mangoes from the royal palace!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "tenali-rama-golden-mangoes",
    slug: "tenali-rama-and-the-golden-mangoes-for-the-priests",
    language: "en",
    title: "The Golden Mangoes and the Hot Iron Ladle",
    genre: "Humorous Tales",
    collection: "Tenali Rama",
    culture_region: "Vijayanagara Empire",
    age_group: "All",
    summary: "When greedy priests take advantage of the King's grief by demanding solid gold mangoes, Tenali Rama uses a sizzling iron spoon to teach a humorous lesson in genuine devotion versus greed.",
    keywords: ["tenali rama golden mangoes", "tenali rama greedy priests", "south indian folktales wit", "moral stories for kids"],
    tags: ["Humor", "Wisdom", "Justice", "Greed"],
    full_text: "King Krishna Deva Raya was deeply devoted to his elderly mother, the Queen Mother Nagala Devi. In her final days, the Queen Mother fell ill and expressed a gentle dying wish: 'My son, I have a sudden longing to taste a sweet, ripe Alphonsa mango.'\n\nThe King immediately sent attendants to find ripe mangoes across the kingdom. But it was late winter, and mango trees were barely in blossom. Before the fruit could be brought from a distant province, the gentle Queen Mother passed away peacefully.\n\nThe King was overwhelmed by grief and remorse. He blamed himself for failing to fulfill his mother's final wish. Seeing the King's vulnerable sorrow, a group of greedy court priests approached the throne with deceitful advice.\n\n'O King,' whispered the chief priest gravely, 'your beloved mother's spirit cannot find rest unless her final desire is honored. You must cast twenty-one life-sized mangoes crafted from pure, solid gold and donate them to us priests in charity. Only then will her soul attain eternal peace!'\n\nThe sorrowful King agreed without hesitation and ordered the royal goldsmiths to forge twenty-one heavy mangoes of pure gold.\n\nWhen Tenali Rama heard of this exploitation, he was deeply indignant. The priests were playing upon the King's emotional grief to enrich themselves with thousands of gold sovereigns! Tenali decided to intervene with poetic justice.\n\nThe day before the royal donation ceremony, Tenali Rama sent a humble invitation to the very same twenty-one priests: 'Tomorrow morning, before you visit the royal palace, please come to Tenali's house. I too wish to make a sacred donation in memory of my late mother.'\n\nThe greedy priests were ecstatic: *'Ah! Two donations in one day! We shall be wealthy beyond measure!'*\n\nEarly the next morning, the twenty-one priests arrived at Tenali's courtyard, wearing ceremonial robes and chanting mantras with wide smiles. Tenali greeted them with folded hands, offered them silver bowls of cool water, and then locked the courtyard iron gate behind them.\n\nFrom the courtyard fire-pit, Tenali picked up a long iron ladle whose curved end was glowing red-hot from the charcoal embers!\n\nThe priests jumped back in alarm. 'Tenali! What in heaven's name are you doing with that red-hot branding ladle?'\n\nTenali bowed with mournful eyes: 'Venerable priests, my beloved late mother suffered from severe joint aches and rheumatism in her final years. Her dying wish was to be treated with the warmth of a heated iron spoon on her knees. Alas, she passed before I could soothe her ache! Therefore, to grant her spirit peace, I must apply this red-hot iron ladle to the knees of all twenty-one of you!'\n\nThe priests turned white with horror! 'Are you insane, Tenali?' shouted the chief priest, backing into the locked gate. 'Branding our legs with hot iron will cause us agony! What has that got to do with your mother's soul?'\n\nTenali looked at them with serene innocence: 'Honored priests, if giving solid gold mangoes to your hands can satisfy the appetite of the King's mother in heaven, surely pressing a hot ladle to your legs will soothe the aching knees of my mother in heaven!'\n\nThe priests were caught in their own hypocritical web. They realized that their greedy scheme had been exposed. Trembling in panic, they pleaded: 'Tenali, spare us! We confess our greed! We will never ask for the King's golden mangoes!'\n\nTenali opened the courtyard gate. The priests sprinted out into the street as fast as their legs could carry them, never looking back.\n\nWhen King Krishna Deva Raya learned what had transpired, his eyes were opened to the priests' selfish manipulation. He canceled the wasteful donation, embraced Tenali in profound gratitude, and distributed the gold instead as charity to build hospitals, orphanages, and schools for the poor.",
    moral: "Greed that exploits human grief and love is shameful. True honor to ancestors is shown through genuine compassion, charity, and helping the living.",
    image: "/images/stories/tenali-rama-garden.svg",
    image_alt: "Illustration of Tenali Rama holding the iron ladle as the greedy priests realize their trick has been uncovered",
    word_count: 710,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-11-27",
    is_bedtime: false,
    quiz: [
      {
        question: "What greedy demand did the court priests make to the grieving King?",
        options: [
          "(Recommended) Twenty-one solid gold mangoes to be donated to them",
          "A palace of white marble",
          "All the horses in the royal stable"
        ],
        answerIndex: 0,
        hint: "They claimed the King's mother needed gold fruit to find peace."
      },
      {
        question: "How did Tenali Rama counter the priests' greedy demand?",
        options: [
          "He invited them to his house and offered to touch their knees with a hot iron ladle to cure his mother's joint pain",
          "He chased them with wild dogs",
          "He locked them in a cellar for a week"
        ],
        answerIndex: 0,
        hint: "He used the exact same absurd logic to expose their hypocrisy."
      },
      {
        question: "What did the King do with the gold instead?",
        options: [
          "(Recommended) Used it to build hospitals, schools, and help the poor",
          "Buried it in the royal garden",
          "Threw it into the river"
        ],
        answerIndex: 0,
        hint: "True charity helps living people who genuinely need care."
      }
    ],
    author: "Traditional South Indian Folklore (Tenali Rama Collection)",
    status: "published",
    content_notes: "Classic ethical humor targeting religious exploitation and advocating honest philanthropy. Safe for all.",
    values: ["honesty", "justice", "generosity", "wisdom", "courage"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "vulnerable", meaning: "exposed to the possibility of being attacked or harmed, either physically or emotionally" },
      { word: "sovereigns", meaning: "former British or royal gold coins of high value" },
      { word: "hypocritical", meaning: "behaving in a way that suggests one has higher standards than is that case" },
      { word: "philanthropy", meaning: "the desire to promote the welfare of others, expressed especially through generous donation" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What fruit did the Queen Mother desire before she passed away?" },
      { tier: "Understand", question: "Why is taking advantage of someone who is grieving especially wrong?" },
      { tier: "Apply", question: "How can we honor the memory of grandparents or loved ones who have passed away through kind deeds?" },
      { tier: "Evaluate", question: "Was Tenali's method of using the hot spoon fair to the priests? Explain." },
      { tier: "Create", question: "Write three kind actions you can do this week to bring joy to someone elderly in your family or community." }
    ],
    reflection_prompt: "The best way to honor those we love is not through lavish displays, but through kindness and helping those who need it most.",
    activity: "Write a sweet letter of appreciation or draw a picture for your grandparents or an older family friend.",
    mood: ["brave", "funny", "comforting"],
    teaser: "Tomorrow, discover what happened when a faithful golden swan gave a golden feather to a poor struggling family!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- JATAKA TALES (Reaching 5) ---
  {
    id: "jataka-golden-swan",
    slug: "the-golden-swan-and-the-cost-of-greed",
    language: "en",
    title: "The Golden Swan and the Cost of Greed",
    genre: "Fables",
    collection: "Jataka Tales",
    culture_region: "Ancient India",
    age_group: "All",
    summary: "A benevolent golden swan sheds a single golden feather each week to support a poor widow and her daughters, until greed overtakes gratitude with irreversible consequences.",
    keywords: ["golden swan jataka tale", "jataka tales greed vs gratitude", "buddhist moral stories for kids", "ancient fables of wisdom"],
    tags: ["Fable", "Gratitude", "Patience", "Greed", "Bedtime"],
    full_text: "Long ago, in a tranquil valley bordered by sandalwood groves, lived a poor widow named Sujata and her two gentle daughters. They lived in a humble thatch-roofed cottage, spinning cotton thread from dawn till dusk to earn enough copper coins for a simple bowl of rice.\n\nNear their cottage was a clear, crystal lake where a magnificent swan made his home. This was no ordinary swan; he had brilliant, shimmering golden plumage that glowed like morning sunlight upon water. The swan possessed great compassion and wisdom.\n\nSeeing Sujata and her daughters working until their fingers were sore, the golden swan felt deep sympathy in his heart. 'I must help this kind family without making them dependent upon charity,' he mused.\n\nOne evening, the swan flew to their cottage porch. Sujata and the girls looked in wonder as the radiant bird spoke in a gentle, melodic voice: 'Good mother, do not weep over your poverty. Once every week, I shall visit your porch and shed a single golden feather from my wing. You may sell the feather in the town market, and the gold will provide ample food, warm clothes, and schoolbooks for your children.'\n\nWith a gentle flap of his wings, the swan shed one gleaming feather of pure solid gold upon the wooden threshold, then flew back to his lake.\n\nSujata sold the feather the next morning. The jeweler paid her a handsome sum. For the first time in years, the family had fresh milk, warm blankets, and nutritious vegetables. True to his word, the golden swan returned every seven days, gifting a single golden feather each time. The family's debt vanished, their home was repaired, and the daughters flourished in their studies.\n\nHowever, as the months passed, a dark, creeping greed began to take root in Sujata's heart. She looked at the cozy home and thought: *'What if the swan flies away across the mountains one day and never returns? Why should we wait week after week for a single feather? If I pluck all his feathers at once, we shall be wealthy for ten generations!'*\n\nHer elder daughter protested with tears in her eyes: 'Mother! The swan is our kindest benefactor! He gives freely from his heart. To harm him or take by force would be cruel and ungrateful!'\n\nSujata dismissed her daughter's wise plea. The following week, when the golden swan landed gently on the porch, Sujata greeted him with honeyed words. As the unsuspecting swan bowed his neck to shed his feather, Sujata seized him firmly by both wings!\n\nThe terrified swan struggled, but Sujata ruthlessly plucked every single feather from his wings and body. But the moment the feathers were ripped from the bird's flesh against his will, a miraculous transformation occurred: the golden feathers turned instantly into ordinary, dull white goose feathers in her grasping hands!\n\nSujata gasped in horror, dropping the coarse white feathers upon the floor. The naked, shivering swan rested on the porch, his eyes filled with profound sorrow, not anger.\n\nThe daughters wept and gently carried the shivering bird to a soft nest of dry straw, feeding him grain and nursing his wounds with medicinal oils. Over many weeks, the swan's feathers grew back—not as brilliant gold, but as pure, soft, ordinary white feathers.\n\nAs soon as his wings were fully healed, the swan spread his white plumage and took flight into the endless blue sky, never to visit that porch again. Sujata lived the rest of her days in deep remorse, having learned that greed destroys the very blessings that patience and gratitude preserve.",
    moral: "Gratitude preserves blessings; greed destroys them. Contentment with what is freely given brings lasting joy.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of the radiant golden swan shedding a luminous feather on the cottage porch",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-28",
    is_bedtime: true,
    quiz: [
      {
        question: "How did the golden swan help the poor family each week?",
        options: [
          "(Recommended) He shed a single golden feather on their porch",
          "He brought them pearls from the ocean",
          "He cooked soup for them"
        ],
        answerIndex: 0,
        hint: "He visited once every seven days to give one feather."
      },
      {
        question: "What happened when the mother greedily plucked all the feathers at once?",
        options: [
          "(Recommended) The golden feathers turned into ordinary white feathers in her hands",
          "The feathers turned into gold coins",
          "The swan disappeared into smoke"
        ],
        answerIndex: 0,
        hint: "Taking by force against the bird's will turned the gold into ordinary plumage."
      },
      {
        question: "What did the daughter advise her mother before the act?",
        options: [
          "To be grateful and not harm their kind benefactor",
          "To build a gold cage",
          "To sell the cottage"
        ],
        answerIndex: 0,
        hint: "The daughter pleaded that gratitude is better than greed."
      }
    ],
    author: "Traditional Jataka Folklore (Buddhist Parable)",
    status: "published",
    content_notes: "Classic ethical story on contentment versus insatiable greed. Completely family safe.",
    values: ["gratitude", "patience", "kindness", "humility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "plumage", meaning: "a bird's feathers collectively" },
      { word: "benefactor", meaning: "a person who gives money or other help to a person or cause" },
      { word: "insatiable", meaning: "impossible to satisfy or quench" },
      { word: "remorse", meaning: "deep regret or guilt for a wrong committed" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "How often did the golden swan visit the cottage?" },
      { tier: "Understand", question: "Why does getting 'more and more' sometimes make people greedier rather than happier?" },
      { tier: "Apply", question: "When you receive a gift or privilege, how can you practice being content and grateful?" },
      { tier: "Evaluate", question: "Why did the mother ignore her daughter's wise warning?" },
      { tier: "Create", question: "Write a 'Thank You' poem that the daughters might recite to the swan before he flew away." }
    ],
    reflection_prompt: "When you find yourself wanting more, take a moment to count the five greatest blessings already present in your life.",
    activity: "Start a 'Gratitude Jar' in your house: write down one thing you are grateful for on a small slip of paper each evening.",
    mood: ["calm", "comforting", "brave"],
    teaser: "Tomorrow, discover what happened when a brave monkey king stretched his own body across a roaring river to save his flock!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "jataka-monkey-bridge",
    slug: "the-monkey-king-and-the-river-bridge",
    language: "en",
    title: "The Monkey King and the River Bridge",
    genre: "Fables",
    collection: "Jataka Tales",
    culture_region: "Ancient India",
    age_group: "All",
    summary: "When a human king's archers surround an ancient mango grove, the noble Monkey King uses his own body as a living bridge across a roaring chasm so every member of his tribe can escape to safety.",
    keywords: ["monkey king jataka tale", "selfless leadership moral story", "jataka tales for children", "animal king bridge story"],
    tags: ["Fable", "Courage", "Leadership", "Sacrifice", "Kindness"],
    full_text: "High along the rocky banks of the sacred River Ganga stood a colossal wild mango tree. Its roots sank deep into the riverbed, its leaves shone like emeralds, and its branches were heavy with sweet, golden fruit whose aroma wafted across the entire valley. In this magnificent tree lived a tribe of eighty thousand wild monkeys, led by a wise, strong, and deeply compassionate Monkey King.\n\nThe Monkey King had always instructed his tribe with caution: 'Eat only the fruit that hangs over the forest floor. Never let a single ripe mango drop into the flowing river, for if it floats downstream to human settlements, men will discover our sanctuary and bring danger.'\n\nFor many years, the monkeys obeyed carefully. But one day, a single ripe mango, hidden behind a bird's nest, dropped into the swift current and floated downstream. It washed ashore near the royal bathing pavilion of the King of Varanasi.\n\nThe King's royal cooks discovered the magnificent fruit. When the King tasted its divine sweetness, he declared: 'Find the tree that bears such fruit at once! I must possess it!'\n\nThe King's royal flotilla sailed upriver following the fragrance until they arrived beneath the giant mango tree. Seeing eighty thousand monkeys leaping in the branches, the King ordered his archers to surround the tree at nightfall. 'Surround the perimeter! When dawn breaks, shoot all the monkeys so we can claim the entire harvest!'\n\nThe monkeys huddled in terror. Chattering in panic, mothers held their babies, knowing that the river rushed violently below and armed human soldiers blocked the forest behind.\n\nThe Monkey King leapt to the highest bough and saw their only hope: on the opposite bank of the roaring river, beyond the reach of human arrows, stood a tall bamboo grove. But the river was wide, and no monkey could leap across such a dizzying chasm.\n\nWithout hesitating for a second, the Monkey King took a long, flexible bamboo reed, tied one end firmly around his sturdy ankle, and launched his body across the roaring canyon in a magnificent leap of faith! He gripped the outstretched branch of a banyan tree on the safe bank with both hands.\n\nAlas! The bamboo stalk was three feet too short! The brave Monkey King stretched his arms, shoulders, and chest to their absolute limit. Clamping his fingers around the banyan branch with iron resolve, his own body bridged the remaining gap across the roaring abyss.\n\n'Cross!' called the Monkey King in a clear, loving command. 'Run across my back to safety! Quickly, before dawn breaks!'\n\nOne by one, the monkeys hesitated, then sprinted across the taut bamboo stalk and over the back of their beloved leader into the safe grove. Mothers carrying tiny babies, elderly monkeys, and playful youths trotted across his spine: eighty thousand animals crossing to freedom.\n\nThe strain upon the Monkey King's muscles, tendons, and joints was agonizing. Yet through every agonizing minute, he held on with unbroken love, refusing to let go until the very last baby monkey had stepped safely onto the grass.\n\nThe human King of Varanasi had watched this breathtaking spectacle through the moonlight in stunned awe. He had never seen such noble, selfless leadership in all his life. Deeply moved, the human King ordered his men to lower their bows and spread a soft linen net to catch the exhausted Monkey King as he finally released his grip and fell from the branch.\n\nThe King personally cradled the noble animal, washed his brow with fragrant rose water, and asked in reverent wonder: 'You are their king. Why did you risk your life and endure such torment for common monkeys?'\n\nThe Monkey King opened his gentle eyes and whispered with peaceful dignity: 'Sire, a true ruler is not someone who sits on a throne demanding service from others. A true ruler is a servant and guardian who offers their own strength to lift their people to safety.'\n\nWith these parting words of profound wisdom, the Monkey King rested peacefully, healed by the King's royal physicians. From that day forward, the King of Varanasi proclaimed the sacred mango forest an eternal sanctuary for all wild creatures, forever remembering the living bridge of love.",
    moral: "True leadership is rooted in love, service, and sacrifice. The greatest leaders use their strength not to dominate, but to protect and uplift others.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of the noble Monkey King bridging the river chasm as his tribe crosses safely to the banyan grove",
    word_count: 760,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-11-29",
    is_bedtime: false,
    quiz: [
      {
        question: "Why did the human King of Varanasi want to find the giant mango tree?",
        options: [
          "(Recommended) He tasted a sweet mango that had floated downstream and wanted the harvest",
          "He wanted the wood to build a ship",
          "He was looking for gold"
        ],
        answerIndex: 0,
        hint: "A single ripe mango floated downriver to his palace bathing ghat."
      },
      {
        question: "How did the Monkey King help his entire tribe cross the wide river to safety?",
        options: [
          "He tied a bamboo reed to his ankle and used his own body to bridge the gap between trees",
          "He built a raft of banana leaves",
          "He flew them across on an eagle"
        ],
        answerIndex: 0,
        hint: "He stretched himself across the chasm so all eighty thousand could run across his back."
      },
      {
        question: "What lesson did the human King learn about true leadership?",
        options: [
          "(Recommended) A true leader serves, protects, and uplifts their people with selflessness",
          "A leader must always have the biggest army",
          "Kings should eat all the sweet fruit"
        ],
        answerIndex: 0,
        hint: "True power is serving others rather than demanding service."
      }
    ],
    author: "Traditional Jataka Folklore (Buddhist Parable)",
    status: "published",
    content_notes: "Heroic moral masterpiece on ethical leadership and self-sacrifice. Family safe.",
    values: ["courage", "responsibility", "leadership", "kindness", "empathy"],
    reading_level: "Advanced",
    vocabulary: [
      { word: "sanctuary", meaning: "a place of safety, refuge, or protection from danger" },
      { word: "chasm", meaning: "a deep fissure or opening in the earth, rock, or other surface" },
      { word: "agonizing", meaning: "causing great physical or mental pain and distress" },
      { word: "spectacle", meaning: "a visually striking performance, event, or display" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "How did the wild mango first get into the river?" },
      { tier: "Understand", question: "Why was the human King so deeply moved when he saw the Monkey King holding on?" },
      { tier: "Apply", question: "How can student leaders or older siblings use their strength to protect and help younger ones?" },
      { tier: "Evaluate", question: "What is the difference between a boss who orders people and a leader who serves people?" },
      { tier: "Create", question: "Draw a map of the sacred mango river showing the tree, the bridge, and the safe banyan forest." }
    ],
    reflection_prompt: "When you are given responsibility over a team, project, or younger child, how will you use your strength to support them?",
    activity: "Do one helpful chore for someone in your family today without being asked, acting as a humble helper.",
    mood: ["brave", "comforting", "curious"],
    teaser: "Tomorrow, discover what happened when a gentle king offered his own royal life to protect a pregnant deer!",
    series_id: null,
    part_number: null,
    reviewed: true
  }
];

let added = 0;
for (const story of deepAnthologyStories) {
  if (!existingIds.has(story.id)) {
    existing.push(story);
    existingIds.add(story.id);
    added++;
    console.log(`[Deep Anthology Batch] Added: "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Deep Anthology Batch] Done! Added ${added} stories. Total stories in English: ${existing.length}`);
