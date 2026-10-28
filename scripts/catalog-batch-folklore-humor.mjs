import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

export const folkloreHumorStories = [
  // --- PANCHATANTRA STORIES ---
  {
    id: "panchatantra-talking-turtle",
    slug: "the-talkative-turtle-and-the-two-wise-geese",
    language: "en",
    title: "The Talkative Turtle and the Two Wise Geese",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "Ancient India",
    age_group: "All",
    summary: "When a severe drought dries up their tranquil pond, two loyal geese carry their turtle friend across the sky on a wooden stick, with one vital warning: keep silent.",
    keywords: ["talkative turtle panchatantra", "turtle and two geese fable", "panchatantra stories for kids", "importance of listening"],
    tags: ["Fable", "Patience", "Listening", "Friendship", "Self-Control"],
    full_text: "In a beautiful forest lake bordered by flowering pink water lilies lived a turtle named Kambugriva. He was kind, cheerful, and loved the company of two wild geese named Sankata and Vikata. The three companions spent peaceful mornings swimming together, sharing stories of the distant mountains and cool springs.\n\nOne scorching summer, no rain fell upon the land. Week after week, the blazing sun baked the earth. The lake shrank to a muddy puddle, and the surrounding water plants withered away. The animals of the forest began migrating toward the distant northern mountains where a deep, perennial lake still flowed.\n\nThe two geese were heartbroken to see their friend Kambugriva stranded in the shrinking mud. 'Dear friend,' said Sankata with sorrow, 'we can fly across the mountains to the great lake, but you have no wings. We cannot bear to leave you behind to perish in the heat.'\n\nKambugriva pondered and came up with an ingenious plan. 'My dear brothers, find a strong, smooth wooden branch! You two can hold the two ends of the stick securely in your strong beaks, and I will clamp my jaws tightly around the middle of the stick. As you fly high above the hills, you can carry me through the air to your new mountain home!'\n\nThe two geese marveled at the plan, but Vikata issued a serious, loving warning: 'It is a brilliant plan, dear Kambugriva, but it depends upon one supreme condition: while we are in the air, you must not open your mouth for any reason whatsoever! No matter what you see or hear below, do not utter a single word. If you open your jaws, you will plunge to the earth.'\n\n'Do you think I am a fool?' laughed Kambugriva. 'My life depends upon it! I shall clamp my teeth like iron and remain silent as a stone until we touch the cool waters.'\n\nThe geese brought a sturdy neem branch. Sankata gripped the left side, Vikata gripped the right, and Kambugriva bit down hard into the center. With a synchronized beat of their powerful white wings, the geese lifted off into the bright blue sky.\n\nKambugriva felt the rush of wind across his shell. Below him, rivers looked like silver ribbons, and treetops resembled green carpets. He was soaring like an eagle! Soon, they flew over a bustling village. Some farmers and children looked up at the sky and saw the unusual sight.\n\n'Look! Look at the sky!' shouted the villagers, pointing and laughing. 'Two geese are carrying a round turtle on a stick! What a comical sight!'\n\nInside Kambugriva's chest, a sudden wave of indignation rose. *'How dare they laugh at me?'* he thought angrily. He felt an overwhelming urge to yell down at the crowd and tell them it was his own brilliant invention.\n\nForgetting his friends' urgent warning, Kambugriva opened his mouth wide and shouted: 'You foolish people! Mind your own—'\n\nThe moment his jaws unclasped from the wood, he lost his grip. Down, down he tumbled through the empty air! Fortunately for Kambugriva, the quick-thinking geese swooped down beneath him like lightning, while a farmer's soft haystack below cushioned his impact with a gentle *thump!* Bruised and humbled, Kambugriva crawled into the safety of the reeds, having learned that self-control and silence at the right time are more precious than pride.",
    moral: "Self-control over one's speech is essential for safety and wisdom. Knowing when to keep silent protects you from harm.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of two white geese flying through the sky carrying a turtle on a wooden stick",
    word_count: 590,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-15",
    is_bedtime: true,
    quiz: [
      {
        question: "Why did the two geese and the turtle need to leave their lake?",
        options: [
          "(Recommended) A severe summer drought had dried up the water",
          "They wanted to visit a big city",
          "The water was too cold"
        ],
        answerIndex: 0,
        hint: "The hot summer baked the earth and dried the pond into mud."
      },
      {
        question: "What crucial condition did the geese give to the turtle before taking flight?",
        options: [
          "He must keep his mouth clamped tightly and not speak a single word",
          "He must close his eyes the entire journey",
          "He must wear a leaf hat"
        ],
        answerIndex: 0,
        hint: "Opening his mouth would cause him to let go of the stick."
      },
      {
        question: "What caused the turtle to lose self-control and open his mouth?",
        options: [
          "(Recommended) He got angry when villagers laughed and wanted to boast",
          "He saw a flying butterfly",
          "He sneezed"
        ],
        answerIndex: 0,
        hint: "Pride and anger made him forget his vital promise."
      }
    ],
    author: "Vishnu Sharma (Panchatantra Classic)",
    status: "published",
    content_notes: "Gentle retelling of the classic fable focusing on emotional regulation and listening. Family safe.",
    values: ["patience", "responsibility", "friendship", "wisdom"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "perennial", meaning: "lasting or continuing throughout the whole year without drying up" },
      { word: "ingenious", meaning: "clever, original, and remarkably inventive" },
      { word: "indignation", meaning: "anger or annoyance provoked by what is perceived as unfair treatment" },
      { word: "synchronized", meaning: "occurring at the same time or operating in unison together" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "How did the turtle and the geese travel together across the mountains?" },
      { tier: "Understand", question: "Why is it often harder to stay silent when people tease or laugh at us?" },
      { tier: "Apply", question: "Can you think of a situation at school or home where keeping calm and silent was better than arguing?" },
      { tier: "Evaluate", question: "Were the geese good friends? What actions proved their loyalty?" },
      { tier: "Create", question: "Write a short safety rule that Kambugriva could write on his shell to remind himself to pause before speaking." }
    ],
    reflection_prompt: "When you feel an impulse to argue or boast, take three slow deep breaths and ask: will speaking right now help, or make things harder?",
    activity: "Practice the 'Five Second Pause' game: whenever a question is asked during dinner today, count silently to five before answering thoughtfully.",
    mood: ["funny", "calm", "comforting"],
    teaser: "Tomorrow, discover what happened when a loyal mongoose guarded a sleeping cradle in an ancient village!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "panchatantra-loyal-mongoose",
    slug: "the-loyal-mongoose-and-the-rash-judgment",
    language: "en",
    title: "The Loyal Mongoose and the Rash Judgment",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "Ancient India",
    age_group: "All",
    summary: "A gentle couple raises an orphaned mongoose who protects their infant from a venomous snake, teaching generations the eternal lesson of pausing before jumping to false conclusions.",
    keywords: ["panchatantra loyal mongoose", "mongoose and the snake fable", "look before you leap story", "panchatantra moral stories"],
    tags: ["Fable", "Loyalty", "Patience", "Caution", "Love"],
    full_text: "In a peaceful hamlet nestled between green sugarcane fields lived a gentle village farmer named Devan and his wife Malati. They had a newborn infant son whom they cherished above everything in the world. One rainy morning, Devan found a tiny, shivering orphaned mongoose cub in the woods and brought it home. Malati nursed the little creature with milk and care, and soon the young mongoose grew into a playful, affectionate, and fiercely loyal member of the household.\n\nThe mongoose followed Malati everywhere like a gentle puppy, curled up at the foot of their woven cot, and loved watching over the baby's cradle with watchful, amber eyes.\n\nOne afternoon, Devan was away working in the distant paddy fields, and Malati needed to fetch water from the village spring. Seeing the infant sleeping peacefully in his cradle and the mongoose dozing guard beside him, Malati whispered: 'Dear little mongoose, watch over our baby until I return with the water pot.' The mongoose blinked softly and rested his chin upon his paws.\n\nWhile Malati was at the well, a venomous black cobra slithered silently into the cottage through a small opening in the bamboo wall. Sensing the sleeping child, the serpent began gliding toward the cradle.\n\nIn a flash, the loyal mongoose sensed danger. His fur stood on end, his eyes flared, and with the courageous instincts of his ancestors, he bounded between the serpent and the cradle! A fierce, desperate battle ensued in the quiet room. The brave mongoose dodged the snake's venomous strikes, lunged forward with razor agility, and after a fierce struggle, defeated the poisonous snake, saving the baby's life. The mongoose lay by the doorway, panting and covered in the dark marks of the struggle.\n\nA few moments later, Malati returned, balancing the brass water pot on her head. As she reached the doorstep, she saw the mongoose lying there with red and dark stains around his mouth.\n\nA surge of blind panic and terror gripped Malati's heart. Without pausing to investigate, without stepping inside to check the cradle, her panicked mind jumped to the most terrible conclusion: *'This animal has harmed my baby!'*\n\nIn blind grief and fury, Malati dropped the heavy water pot down upon the little creature. But the moment she rushed past the doorway into the bedroom, she froze in stunned, heart-wrenching realization.\n\nThere in the wooden cradle, her baby boy was sleeping peacefully, smiling softly in his dreams. And on the floor right beside the cradle lay the vanquished black serpent, completely neutralized!\n\nMalati gasped and fell to her knees, weeping bitter tears of remorse. 'What have I done? My faithful little guardian saved my child's life, and I judged him without looking with my own eyes!'\n\nFortunately, in this family retelling, the brave little mongoose was only knocked unconscious by the falling pot. Hearing Malati's cries, Devan rushed home, gently tended to the little creature's bruises with healing herbs, and revived him. Malati embraced the little guardian with tears of gratitude, vowing never again to let blind fear or hasty assumptions cloud her judgment.",
    moral: "Never act in haste or jump to conclusions in moments of anger or panic. Always seek the truth before passing judgment.",
    image: "/images/stories/panchatantra-rabbit.svg",
    image_alt: "Illustration of the loyal mongoose resting safely as the mother embraces him in deep gratitude",
    word_count: 580,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-16",
    is_bedtime: false,
    quiz: [
      {
        question: "Why did the mongoose fight the black cobra in the cottage?",
        options: [
          "(Recommended) To protect the sleeping infant in the cradle from danger",
          "Because the snake took his food",
          "Because the farmer ordered him to attack"
        ],
        answerIndex: 0,
        hint: "The loyal animal defended the sleeping baby with courage."
      },
      {
        question: "What terrible mistake did Malati make when she returned home?",
        options: [
          "She jumped to a hasty conclusion without checking the cradle first",
          "She forgot to close the front door",
          "She spilled the water on the bed"
        ],
        answerIndex: 0,
        hint: "Blind panic led her to make an assumption before finding the facts."
      },
      {
        question: "What did Malati see when she looked inside the bedroom?",
        options: [
          "(Recommended) Her baby sleeping safely and the vanquished serpent on the floor",
          "An empty room",
          "A thief running away"
        ],
        answerIndex: 0,
        hint: "The baby was completely unharmed because the mongoose had saved him."
      }
    ],
    author: "Vishnu Sharma (Panchatantra Classic)",
    status: "published",
    content_notes: "Gentle family-friendly adaptation where the mongoose survives and is healed. Safe for children.",
    values: ["patience", "loyalty", "justice", "responsibility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "venomous", meaning: "producing poison capable of causing illness or death through bites or stings" },
      { word: "remorse", meaning: "deep regret or sorrow for a wrong one has committed" },
      { word: "hasty", meaning: "done with excessive speed or urgency without sufficient care or thought" },
      { word: "vanquished", meaning: "defeated thoroughly in a contest, conflict, or struggle" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Who brought the baby mongoose home originally?" },
      { tier: "Understand", question: "Why is fear sometimes dangerous when it causes people to act without thinking?" },
      { tier: "Apply", question: "Have you ever blamed a friend or sibling for something before knowing the whole story?" },
      { tier: "Evaluate", question: "How can parents and children practice checking the facts before reacting emotionally?" },
      { tier: "Create", question: "Draw a medal of bravery for the loyal mongoose and write the qualities that made him a hero." }
    ],
    reflection_prompt: "When something unexpected or upsetting happens, remind yourself: *Look first, understand second, speak third.*",
    activity: "Make a promise card for your desk that says: 'Check the facts before making assumptions.'",
    mood: ["brave", "comforting", "calm"],
    teaser: "Tomorrow, discover what happened when King Krishna Deva Raya ordered all the cats in his realm to drink warm milk!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- TENALI RAMA EXPANSIONS ---
  {
    id: "tenali-rama-cat-milk",
    slug: "tenali-rama-and-the-cat-that-feared-warm-milk",
    language: "en",
    title: "Tenali Rama and the Cat That Feared Warm Milk",
    genre: "Humorous Tales",
    collection: "Tenali Rama",
    culture_region: "Vijayanagara Empire",
    age_group: "All",
    summary: "When the King orders every household to feed royal cows' milk to cats to eliminate castle mice, Tenali Rama trains a cat with an amusing aversion to warm milk to make a witty point.",
    keywords: ["tenali rama cat story", "cat feared warm milk tenali", "witty tenali rama tales", "vijayanagara empire stories"],
    tags: ["Humor", "Wisdom", "Animals", "Cleverness"],
    full_text: "During the reign of King Krishna Deva Raya in the golden city of Vijayanagara, a sudden plague of field mice invaded the royal granaries, chewing through sacks of rice, barley, and lentils. The King was greatly concerned for the kingdom's food supplies.\n\nTo combat the mice, the King ordered that every minister and courtier be given a healthy royal cow and a lively cat. The royal decree announced: 'Every courtier must nourish their cat with fresh, creamy milk drawn daily from their assigned cow. The cats will grow strong, hunt the mice, and protect our food reserves. In one month, all cats will be inspected at the royal palace!'\n\nAll the courtiers obeyed. Every day, they fed their cats bowls of warm, fresh milk. The cats grew plump, pampered, and lazy, sleeping on satin cushions in the sun, entirely unbothered by mice.\n\nTenali Rama also received a beautiful cow and a ginger cat. On the very first morning, Tenali poured boiling hot milk into a copper saucer and placed it before the hungry cat. The poor cat dashed forward and touched the boiling milk with its tongue. *Sssss!* The heat stung its whiskers, and the cat leapt three feet into the air, screeching in fright!\n\nFrom that day onward, whenever Tenali placed even a bowl of cool, fresh milk before the ginger cat, the animal would arch its back, hiss, and sprint away in terror! Tenali took good care of the cat by feeding it wholesome food and keeping it active, while enjoying the delicious fresh cow's milk with his family and sharing it with poor children in his neighborhood.\n\nAt the end of the month, King Krishna Deva Raya summoned all the courtiers with their cats for the grand royal inspection. The courtiers arrived carrying heavy, round, sleeping cats that looked like furry pillows.\n\nThen Tenali Rama stepped forward with his lean, agile, energetic cat.\n\n'Tenali,' remarked the King with a frown, 'your cat looks quite lean. Have you not been feeding him the fresh milk from the royal cow?'\n\n'Your Majesty,' replied Tenali with folded hands, 'my cat refuses to touch milk! He has an intense dread of milk and will not drink even a single drop.'\n\nThe King laughed in disbelief. 'A cat that refuses milk? That is impossible! Cats love milk more than anything in the world. Servants, bring a saucer of warm milk immediately!'\n\nThe royal servant placed a saucer of warm milk before Tenali's cat. The moment the ginger cat caught the scent of the milk, its fur bristled, its eyes went wide with dread, and it dashed behind Tenali's legs, refusing to go anywhere near the bowl!\n\nThe King was utterly astonished. 'Tenali, how can this be? Why does your cat run from milk?'\n\nTenali Rama bowed with his trademark witty smile: 'Your Majesty, this cat learned on its first day that blindly rushing into luxury can burn your tongue! While the other courtiers stuffed their cats until they became too fat and lazy to catch a single mouse, my cat stayed lean, swift, and sharp. In just four weeks, my cat has cleared our entire street of rodents!'\n\nKing Krishna Deva Raya inspected the other cats—every single one was too obese to run after a mouse! The King laughed heartily at Tenali's clever lesson, realizing that excess comfort produces laziness, whereas staying active and mindful keeps both cats and leaders ready for life's challenges.",
    moral: "Excessive luxury and comfort make one complacent and ineffective. True readiness comes from staying active, humble, and disciplined.",
    image: "/images/stories/tenali-rama-garden.svg",
    image_alt: "Illustration of Tenali Rama holding his nimble ginger cat while the King examines the sleepy fat cats in court",
    word_count: 620,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-17",
    is_bedtime: false,
    quiz: [
      {
        question: "Why did King Krishna Deva Raya give each courtier a cow and a cat?",
        options: [
          "(Recommended) To raise cats that would hunt mice invading the royal granaries",
          "To start a dairy farm competition",
          "To paint pictures of animals"
        ],
        answerIndex: 0,
        hint: "Mice were eating the kingdom's grain reserves."
      },
      {
        question: "Why did Tenali's cat refuse to drink warm milk?",
        options: [
          "It had burned its tongue on hot milk on day one and became fearful of it",
          "It only liked orange juice",
          "It was trained to bark like a dog"
        ],
        answerIndex: 0,
        hint: "Once burned, the cat remembered the heat and avoided the saucer."
      },
      {
        question: "What happened to the other courtiers' cats?",
        options: [
          "(Recommended) They became too fat and lazy to catch any mice",
          "They ran away to the mountains",
          "They learned to fly"
        ],
        answerIndex: 0,
        hint: "Too much luxury and milk made them sleepy and sluggish."
      }
    ],
    author: "Traditional South Indian Folklore (Tenali Rama Collection)",
    status: "published",
    content_notes: "Classic humor tale demonstrating the perils of complacency. Completely safe for all ages.",
    values: ["responsibility", "curiosity", "wisdom", "discipline"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "granaries", meaning: "storehouses for threshed grain or animal feed" },
      { word: "complacent", meaning: "smug or overly satisfied with oneself without awareness of danger or duty" },
      { word: "aversion", meaning: "a strong feeling of dislike or reluctance toward something" },
      { word: "agility", meaning: "the ability to move quickly, easily, and with graceful balance" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What problem was the Vijayanagara kingdom facing with its grain?" },
      { tier: "Understand", question: "Why did overfeeding the cats prevent them from solving the mouse problem?" },
      { tier: "Apply", question: "How does having too many treats or screen time make people feel sluggish or unproductive?" },
      { tier: "Evaluate", question: "Was Tenali Rama's trick on the cat justifiable to teach the King a lesson?" },
      { tier: "Create", question: "Design an active obstacle course for pets or humans that builds agility and health." }
    ],
    reflection_prompt: "Where in your life might you be getting a little too comfortable or lazy? What active habit can you start today?",
    activity: "Spend 20 minutes outdoors playing tag or skipping rope to keep your body active and energized.",
    mood: ["funny", "brave", "curious"],
    teaser: "Tomorrow, discover what happened when Tenali Rama painted a picture of a magnificent stallion—with only the tail showing!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "tenali-rama-horse-painting",
    slug: "tenali-rama-and-the-painting-of-the-royal-stallion",
    language: "en",
    title: "The Painting of the Magnificent Royal Stallion",
    genre: "Humorous Tales",
    collection: "Tenali Rama",
    culture_region: "Vijayanagara Empire",
    age_group: "All",
    summary: "When a boastful royal artist mocks the courtiers, King Krishna Deva Raya challenges Tenali Rama to produce a masterpiece. Tenali presents a canvas with only a horse's tail and asks the King to imagine the rest.",
    keywords: ["tenali rama horse painting", "tenali rama artist story", "clever tenali rama tales", "moral stories for children"],
    tags: ["Humor", "Art", "Creativity", "Wisdom", "Imagination"],
    full_text: "A celebrated artist from a faraway kingdom visited the royal court of Vijayanagara to display his paintings. He showed paintings of sunsets, rolling rivers, and galloping war horses with exquisite detail. King Krishna Deva Raya and all the ministers showered the artist with gold and praise.\n\nThe artist became puffed up with arrogance. He sneered at the courtiers: 'None in this court could ever comprehend true art, let alone create a painting of such perfection!'\n\nKing Krishna Deva Raya was amused and said, 'Tenali, what do you think of this painting of the warrior?'\n\nTenali tilted his head and remarked, 'The painting is nice, Your Majesty, but I can only see the front side of the warrior! Where is the other half of his body? And where is the other side of the tree behind him? A truly great artist should show everything!'\n\nThe King chuckled: 'Tenali, you know nothing of art! In painting, you must use your imagination to picture what is hidden from view.' Then the King made a playful wager: 'I give you one month and all the paints and canvases you need. Produce a painting as fine as this artist's work, or pay a heavy fine!'\n\n'Challenge accepted, Your Majesty,' Tenali bowed cheerfully.\n\nOne month flew by. On the appointed day, the royal court gathered in anticipation. The foreign artist stood near the throne, smirking in expectation of Tenali's humiliation. Tenali Rama entered the grand hall, accompanied by two attendants carrying a massive canvas covered with a heavy velvet cloth.\n\n'Tenali,' the King smiled warmly, 'unveil your masterpiece!'\n\nTenali pulled off the velvet drape with a flourish. The entire court leaned forward. The large canvas was completely blank, painted a simple grassy green—except for one tiny corner at the very edge, where a curved black and white horse's tail was visible, flicking upward!\n\nKing Krishna Deva Raya stared at the canvas, stunned. 'Tenali! What kind of nonsense is this? There is nothing on this canvas except a patch of green and a horse's tail!'\n\nTenali Rama smiled with serene innocence: 'Ah, Your Majesty, remember what you taught me one month ago? *A true lover of art must use their imagination to picture what is hidden from view!* This is a painting of a magnificent royal stallion. The stallion has just galloped off the edge of the canvas into the lush meadow beyond, and only its noble tail remains visible as it leaps into the distance!'\n\nThe courtiers held their breath, nervous about the King's reaction. King Krishna Deva Raya looked at the tail, looked at Tenali's sparkling eyes, and then erupted into roaring laughter that filled the entire palace!\n\n'Touché, Tenali!' cried the King, wiping tears of mirth. 'You used my very own words to defeat my wager!'\n\nThe King awarded Tenali a bag of gold coins, while the foreign artist bowed in genuine respect, having learned that true wit and imagination transcend rigid rules of craft.",
    moral: "Humor, imagination, and clever perspective can disarm arrogance and reveal the joy of thinking outside the box.",
    image: "/images/stories/tenali-rama-garden.svg",
    image_alt: "Illustration of Tenali Rama unveiling the canvas showing only a horse's tail before the laughing King",
    word_count: 530,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-18",
    is_bedtime: false,
    quiz: [
      {
        question: "What challenge did the King give to Tenali Rama?",
        options: [
          "(Recommended) Create a painting within one month or pay a fine",
          "Ride a wild horse across the kingdom",
          "Build a new palace gate"
        ],
        answerIndex: 0,
        hint: "The King challenged Tenali to produce a masterpiece of art."
      },
      {
        question: "What was painted on Tenali's large canvas?",
        options: [
          "Green grass and only a horse's tail at the corner edge",
          "A sleeping lion under a tree",
          "A starry sky with two moons"
        ],
        answerIndex: 0,
        hint: "The horse had galloped off the canvas, leaving only its tail."
      },
      {
        question: "How did Tenali justify his unusual painting?",
        options: [
          "(Recommended) By reminding the King that true art lovers use imagination for what is hidden",
          "By claiming the ink had run out",
          "By blaming the weather"
        ],
        answerIndex: 0,
        hint: "He quoted the King's own advice about using imagination."
      }
    ],
    author: "Traditional South Indian Folklore (Tenali Rama Collection)",
    status: "published",
    content_notes: "Playful artistic humor exploring creativity, perspective, and wit. Family safe.",
    values: ["creativity", "curiosity", "humor", "wisdom"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "wager", meaning: "a bet or playful challenge made on the outcome of an event" },
      { word: "stallion", meaning: "an adult male horse, typically spirited and strong" },
      { word: "comprehend", meaning: "to grasp mentally or understand thoroughly" },
      { word: "transcend", meaning: "to go beyond the normal limits of something" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Who originally visited the court to show off their paintings?" },
      { tier: "Understand", question: "Why did the King laugh instead of becoming angry at Tenali's painting?" },
      { tier: "Apply", question: "How does your imagination help you when you read a book without pictures?" },
      { tier: "Evaluate", question: "Was Tenali being lazy, or was his point about imagination genuinely clever?" },
      { tier: "Create", question: "Draw a funny picture where 90% of the subject is 'hiding' just off the edge of the paper!" }
    ],
    reflection_prompt: "The greatest adventures in the world often happen in our imagination. What magical story can you picture in your mind right now?",
    activity: "Close your eyes for one full minute and imagine walking through a forest made entirely of colorful books. What do the pages whisper?",
    mood: ["funny", "happy", "curious"],
    teaser: "Tomorrow, discover what happened when Mulla Nasruddin was invited to a grand royal banquet in his old working clothes!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- MULLA NASRUDDIN CLASSICS ---
  {
    id: "mulla-nasruddin-feed-my-coat",
    slug: "mulla-nasruddin-and-the-wise-coat",
    language: "en",
    title: "Feed My Fine Silk Coat!",
    genre: "Humorous Tales",
    collection: "Mulla Nasruddin",
    culture_region: "Middle East / Central Asia",
    age_group: "All",
    summary: "When Mulla Nasruddin is ignored at a wealthy merchant's feast because of his dusty clothes, he returns in an embroidered silk robe and begins feeding pilaf directly into his coat sleeves.",
    keywords: ["mulla nasruddin feed my coat", "nasruddin coat story", "moral stories on outer appearance", "middle eastern folktales"],
    tags: ["Humor", "Wisdom", "Respect", "Equality", "Bedtime"],
    full_text: "Mulla Nasruddin was invited to a lavish banquet hosted by the wealthiest nobleman in town. The Mulla had spent the entire morning working diligently in his garden, digging up weeds, pruning grapevines, and planting melon seeds. When the afternoon sun announced the hour of the feast, Nasruddin had no time to change. Dusting the earth from his trousers, he walked straight to the nobleman's grand mansion in his faded cotton tunic and worn sandals.\n\nWhen Nasruddin arrived, the courtyard was filled with nobles dressed in glistening brocades, gold-trimmed vests, and fragrant perfumes. The servants greeted the wealthy guests with bowing salutations and guided them to the finest silk divans.\n\nBut when Nasruddin stepped through the gate, the servants looked at his patched tunic with disdain. No one bowed to him. When Nasruddin greeted his host, the wealthy merchant barely glanced his way, giving only a cold, indifferent nod. When the great feast was served, platters of fragrant saffron pilaf, spiced roast lamb, stuffed grape leaves, and almond sherbet were set before the guests. Nasruddin was seated in the furthest corner behind a pillar, and the servants didn't even offer him a plate!\n\nNasruddin observed this quietly with a gentle smile. Without saying a word of complaint, he quietly slipped out of the banquet hall and walked back to his humble home.\n\nThere, Nasruddin washed himself, combed his beard, and put on his finest garment—a resplendent, shimmering silk coat with gold-embroidered cuffs, a gift given to him years ago by an admiring scholar. He draped a fine turban on his head and returned to the nobleman's mansion.\n\nThe moment Nasruddin arrived at the front entrance, the servants gasped in awe. They bowed to the ground, greeted him with musical flutes, and escorted him directly to the head of the banquet table beside the host!\n\nThe host rose from his seat, beaming: 'Welcome, honored Mulla Nasruddin! We are graced by your presence! Please partake of our finest dishes!'\n\nA royal platter of steaming saffron rice and delicate pastries was placed before Nasruddin. Everyone watched with reverence to see how the wise teacher would begin.\n\nNasruddin picked up a handful of warm rice and carefully stuffed it into the pocket of his silk coat. Then he took a spoonful of rich lamb curry and poured it straight down his gold-embroidered sleeve! Next, he dipped the satin edge of his cuff into the bowl of almond sherbet, saying with polite affection: 'Eat, my dear coat, eat! Enjoy the feast! Drink deeply, my fine sleeves!'\n\nThe banquet hall went completely silent. The guests dropped their spoons, their eyes wide with disbelief. The host looked bewildered and uncomfortable.\n\n'Mulla-ji!' stammered the host. 'What are you doing? Coats do not eat food! Why are you pouring curry and sherbet onto your beautiful silk garment?'\n\nMulla Nasruddin wiped his hands calmly with a napkin and addressed the entire hall: 'My dear host, when I came to your house an hour ago as a human being in humble clothes, no one greeted me, no one offered me a seat, and no one gave me a morsel of food. But when I put on this silk coat, you bowed down, seated me at the head of the table, and laid out this magnificent feast. Since it is clear that your hospitality was intended for my clothes and not for me, it is only right that my coat should enjoy the meal!'\n\nThe wealthy host turned crimson with shame. He realized how shallow his judgment had been. Falling before Nasruddin, he apologized sincerely to the wise Mulla and to all present, promising that in his house, human beings would forever be honored for their character and heart, never for the garments they wear.",
    moral: "Never judge a person's worth by their outward appearance or clothing. True value lies in character, kindness, and integrity.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of Mulla Nasruddin feeding rice into his silk coat sleeve as the wealthy guests watch in shock",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-19",
    is_bedtime: true,
    quiz: [
      {
        question: "How was Mulla Nasruddin treated when he first arrived in his working clothes?",
        options: [
          "(Recommended) He was ignored and not offered any food or proper seat",
          "He was crowned the king of the banquet",
          "He was given the best seat immediately"
        ],
        answerIndex: 0,
        hint: "The host and servants judged him purely by his old dusty clothes."
      },
      {
        question: "What unusual action did Nasruddin perform when he returned in his silk coat?",
        options: [
          "He fed the food directly into his coat sleeves and pockets",
          "He gave the food to the stray cats outside",
          "He sang a loud song on the table"
        ],
        answerIndex: 0,
        hint: "He told his coat to eat the feast since the invitation was for the garment."
      },
      {
        question: "What lesson did the host learn from Nasruddin's clever demonstration?",
        options: [
          "(Recommended) To honor people for their character and heart, not their clothing",
          "To never serve saffron rice again",
          "To buy cheaper coats"
        ],
        answerIndex: 0,
        hint: "Outward wealth means nothing compared to human dignity."
      }
    ],
    author: "Traditional Middle Eastern / Sufi Folklore (Mulla Nasruddin Collection)",
    status: "published",
    content_notes: "Profound moral humor on social prejudice, human dignity, and kindness. Family safe.",
    values: ["respect", "empathy", "equality", "humility", "wisdom"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "brocades", meaning: "rich fabrics woven with elaborate, raised designs of silk and gold" },
      { word: "disdain", meaning: "the feeling that someone or something is unworthy of one's consideration or respect" },
      { word: "resplendent", meaning: "attractive and impressive through being richly colorful or shining" },
      { word: "hospitality", meaning: "the friendly and generous reception and entertainment of guests or strangers" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What was Nasruddin doing before he went to the banquet?" },
      { tier: "Understand", question: "Why did the servants treat Nasruddin completely differently on his second visit?" },
      { tier: "Apply", question: "Have you ever seen someone judged or treated unfairly because of what they wore?" },
      { tier: "Evaluate", question: "Was Nasruddin's method of teaching the lesson effective? Why did it work better than an angry speech?" },
      { tier: "Create", question: "Imagine an ideal school where clothes didn't matter. What values would students celebrate instead?" }
    ],
    reflection_prompt: "When you meet someone new, what do you notice first? Challenge yourself to look for their kindness and listening ears rather than what they wear.",
    activity: "Say something warm and appreciative to someone today about who they are inside, rather than how they look on the outside.",
    mood: ["funny", "calm", "comforting"],
    teaser: "Tomorrow, discover what happened when Mulla Nasruddin dropped his house key in the dark and searched for it under a street lamp!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "mulla-nasruddin-lost-key",
    slug: "mulla-nasruddin-and-the-lost-key-under-the-lamp",
    language: "en",
    title: "Searching for the Key Where the Light Is",
    genre: "Humorous Tales",
    collection: "Mulla Nasruddin",
    culture_region: "Middle East / Central Asia",
    age_group: "All",
    summary: "When neighbors see Mulla Nasruddin crawling under a bright street lamp searching for his lost house key, they are surprised to learn he lost it inside his dark house. A timeless parable on seeking answers where they actually reside.",
    keywords: ["mulla nasruddin lost key", "searching under the streetlight parable", "sufi wisdom stories for children", "nasruddin humor"],
    tags: ["Humor", "Wisdom", "Mindfulness", "Curiosity"],
    full_text: "On a quiet, starry night in a tranquil village, an old neighbor was walking home when he noticed Mulla Nasruddin on his hands and knees beneath the bright glow of an oil street lamp in the public square. Nasruddin was meticulously sifting through the dust, looking under pebbles and inspecting every blade of grass.\n\n'Good evening, Mulla-ji,' said the neighbor warmly. 'What are you searching for so intently in the dust?'\n\n'Ah, good neighbor,' sighed Nasruddin without looking up, 'I have lost the iron key to my front door! Without it, I cannot enter my home and go to sleep.'\n\n'Do not worry, Mulla! Two pairs of eyes are better than one. I shall help you search.' The kind neighbor got down on his hands and knees beside Nasruddin. Together, they combed through the illuminated circle beneath the lamp, peering into every crevice for nearly half an hour. But the iron key was nowhere to be found.\n\nPuzzled and tired, the neighbor wiped his brow and asked: 'Mulla, are you sure you dropped it right here? Exactly where were you when you lost it?'\n\nNasruddin pointed casually toward his small, dark cottage sixty paces down the alleyway. 'Oh, I dropped it inside my dark bedroom, near the corner of my wooden trunk!'\n\nThe neighbor stared at Nasruddin in utter astonishment, his jaw hanging open. 'You dropped the key inside your bedroom? Then why on earth are we crawling in the dust under this street lamp in the public square?'\n\nNasruddin looked up with a serene, patient smile: 'Because, my dear friend, it is pitch dark inside my cottage, whereas out here beneath the street lamp, the light is so much better!'\n\nThe neighbor burst into laughter, and soon Nasruddin joined in with gentle merriment. But as they walked together with an oil lantern back to the dark cottage, the neighbor realized the profound truth hidden beneath Nasruddin's humorous antics.\n\nHow often do human beings search for happiness, peace, and solutions in easy, brightly lit places outside themselves—in possessions, praise, and distractions—when the real answer is hidden inside the quiet, unexplored corners of their own hearts?",
    moral: "Do not search for solutions where it is merely convenient or easy; face the real source of a problem, even if it requires stepping into the dark.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of Mulla Nasruddin and his neighbor searching beneath an oil lamp in the cobblestone square",
    word_count: 490,
    reading_time: "3 min",
    listen_time: "3 min",
    audio_url: null,
    publish_date: "2026-11-20",
    is_bedtime: true,
    quiz: [
      {
        question: "What item was Mulla Nasruddin searching for under the street lamp?",
        options: [
          "(Recommended) The iron key to his front door",
          "A bag of gold coins",
          "His glasses"
        ],
        answerIndex: 0,
        hint: "He needed this to open his house and sleep."
      },
      {
        question: "Where did Nasruddin actually drop the key?",
        options: [
          "(Recommended) Inside his dark bedroom near his trunk",
          "In the village river",
          "At the baker's shop"
        ],
        answerIndex: 0,
        hint: "He dropped it inside his own cottage where it was dark."
      },
      {
        question: "Why was he searching under the street lamp instead?",
        options: [
          "Because it was brightly lit and easier to see there",
          "Because the street lamp was made of silver",
          "Because his cat told him to"
        ],
        answerIndex: 0,
        hint: "He humorously searched where it was convenient rather than where the truth was."
      }
    ],
    author: "Traditional Middle Eastern / Sufi Folklore (Mulla Nasruddin Collection)",
    status: "published",
    content_notes: "Classic philosophical tale about looking for solutions where they truly exist. Safe for all.",
    values: ["honesty", "wisdom", "courage", "mindfulness"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "meticulously", meaning: "in a way that shows great attention to detail; very thoroughly" },
      { word: "illuminated", meaning: "lit up with bright light" },
      { word: "antics", meaning: "foolish, outrageous, or amusing behavior" },
      { word: "profound", meaning: "having deep insight, understanding, or emotional weight" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Who helped Mulla Nasruddin search in the dust?" },
      { tier: "Understand", question: "Why is Nasruddin's answer both funny and foolish on the surface?" },
      { tier: "Apply", question: "When you lose something or make a mistake, is it tempting to look for easy excuses rather than the real cause?" },
      { tier: "Evaluate", question: "What does the 'light' and the 'dark room' represent in our everyday life?" },
      { tier: "Create", question: "Write a 3-step guide for solving a tough problem when the answer is not easy to see." }
    ],
    reflection_prompt: "When you feel sad or upset, do you seek distractions on a screen, or do you take time to talk and understand what is really bothering you?",
    activity: "Spend five minutes in a quiet room with no screens, just thinking about one thing you are grateful for today.",
    mood: ["calm", "funny", "comforting"],
    teaser: "Tomorrow, discover what happened when the Tortoise and the Hare held their legendary forest race!",
    series_id: null,
    part_number: null,
    reviewed: true
  }
];

let added = 0;
for (const story of folkloreHumorStories) {
  if (!existingIds.has(story.id)) {
    existing.push(story);
    existingIds.add(story.id);
    added++;
    console.log(`[Folklore Humor Batch] Added: "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Folklore Humor Batch] Done! Added ${added} stories. Total stories in English: ${existing.length}`);
