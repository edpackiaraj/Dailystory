import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

export const akbarBirbalStories = [
  {
    id: "akbar-birbal-pot-of-wit",
    slug: "the-pot-full-of-wit-buddhi-ka-ghada",
    language: "en",
    title: "A Pot Full of Wit (Buddhi Ka Ghada)",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When a neighboring ruler demands a jar full of wisdom, Birbal fulfills the impossible request with patience, nature, and a clever earthen pot.",
    keywords: ["akbar birbal pot of wit", "buddhi ka ghada story", "witty stories for children", "akbar birbal ramesh mudholkar"],
    tags: ["Humor", "Wisdom", "Cleverness", "Patience", "Nature"],
    full_text: "One sunny morning in the magnificent Diwan-i-Khas at Agra, an envoy from a neighboring kingdom arrived with an extraordinary message from his ruler. The letter read: 'To His Imperial Majesty Akbar: We have heard renowned praise of the wit and intellect overflowing in your court. As a token of our friendship and mutual learning, we request you to send us a clay pot completely filled with pure Wit. If your court cannot produce it, you must acknowledge our superior wisdom.'\n\nThe courtiers were completely baffled. 'How can anyone trap wit in an earthen pot?' whispered the finance minister. 'Wit is a thought, an idea! It has no shape, no weight, and cannot be poured like olive oil or wine!'\n\nEmperor Akbar smiled and turned to his trusted counselor: 'Birbal, our honor rests in your hands. Can you deliver a pot full of wit to our royal neighbor?'\n\n'Give me three months, Your Majesty,' Birbal replied with a serene bow, 'and I shall deliver a pot overflowing with ripe, undeniable wit.'\n\nBirbal went straight to his countryside garden. He asked his gardener to prepare a rich bed of soil and plant round watermelon seeds. When the vines sprouted and tiny green melon buds appeared, Birbal carefully placed each baby watermelon inside a narrow-mouthed earthen pot without detaching it from the vine. Day after day, the gardener watered the vines with care. The little watermelons absorbed sunlight, rain, and soil nutrients, swelling bigger and bigger until they completely filled the inside cavity of the clay pots.\n\nWhen the three months ended, Birbal plucked the vine stems cleanly at the pot's neck. The giant, ripe watermelons were trapped tightly inside the narrow-mouthed earthen jars, with no way to take them out without breaking the pottery.\n\nBirbal presented one of the sealed pots before Emperor Akbar and the waiting foreign envoy. Attached to the pot was an elegant scroll with Birbal's royal note:\n\n'Here is your pot full of wit. You may inspect the wit inside, but on one strict condition: the wit must be removed from the pot without cutting the fruit and without cracking or breaking a single shard of the clay pot. If you succeed, keep the wit. If you damage the pot, you must acknowledge the supreme skill of Agra.'\n\nThe foreign envoy looked through the narrow mouth of the jar. A colossal, perfect watermelon rested snugly inside, completely filling every millimeter of space. He shook the pot gently—it was firm and impossible to pull through the tiny opening. To extract it without breaking the pot or cutting the melon was utterly impossible!\n\nThe envoy bowed down to the marble floor in deep admiration. 'Truly, Emperor Akbar, Birbal has captured pure wisdom in clay! Only unmatched patience and creative wit could ever achieve this marvel.'\n\nEmperor Akbar laughed with heartfelt delight and rewarded Birbal with a necklace of pearls, reminding his court that genuine intellect does not shout—it cultivates solutions with quiet patience.",
    moral: "True wit and wisdom cannot be rushed or forced; they grow through patient thought, understanding nature, and creative problem-solving.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal presenting the earthen pot with a watermelon inside before Emperor Akbar and the envoy",
    word_count: 530,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-10",
    is_bedtime: false,
    quiz: [
      {
        question: "What impossible item did the neighboring ruler demand from Emperor Akbar?",
        options: [
          "(Recommended) A clay pot completely filled with pure wit",
          "A bag of stars gathered from the night sky",
          "A tree that grows golden apples"
        ],
        answerIndex: 0,
        hint: "The envoy asked for a vessel filled with wisdom or intellect."
      },
      {
        question: "How did Birbal get the giant watermelon inside the narrow-mouthed clay pot?",
        options: [
          "He placed the tiny growing melon inside the pot while still attached to the vine",
          "He melted the clay pot around the fruit",
          "He cut the melon into tiny slices and glued it back together"
        ],
        answerIndex: 0,
        hint: "Birbal let nature do the work by growing the fruit inside the pot over three months."
      },
      {
        question: "What challenge did Birbal attach to the pot of wit?",
        options: [
          "(Recommended) Extract the fruit without cutting it and without breaking the clay pot",
          "Eat the melon in under ten seconds",
          "Carry the pot across the river without touching it"
        ],
        answerIndex: 0,
        hint: "The envoy had to remove the fruit without damaging the pot or the fruit."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Gentle humor celebrating creative ingenuity and agricultural insight. Safe for all ages.",
    values: ["curiosity", "patience", "creativity", "wisdom"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "envoy", meaning: "an official messenger or representative sent by one ruler to another" },
      { word: "baffled", meaning: "completely confused or puzzled by something difficult to understand" },
      { word: "cavity", meaning: "an empty space or hollow area inside a solid object" },
      { word: "cultivates", meaning: "nurtures, fosters, or helps something grow with care over time" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What did the neighboring king ask Emperor Akbar to send him?" },
      { tier: "Understand", question: "Why were the other courtiers convinced that wit could never be put inside a jar?" },
      { tier: "Apply", question: "Have you ever faced a problem that seemed impossible at first until you gave it time to grow?" },
      { tier: "Evaluate", question: "Was Birbal's solution fair to the envoy's original challenge? Why or why not?" },
      { tier: "Create", question: "If someone asked you to send a 'box of kindness', what tangible symbol would you place inside?" }
    ],
    reflection_prompt: "When you face a difficult challenge, do you look for an instant answer, or do you have the patience to let a creative solution grow?",
    activity: "Draw an earthen jar on paper and draw inside it something you feel represents your best talent or happy memory.",
    mood: ["funny", "curious", "calm"],
    teaser: "Tomorrow, discover what happened when Birbal made a census of the blind men walking through the city of Agra!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-blind-men-agra",
    slug: "the-blind-men-in-the-city-of-agra",
    language: "en",
    title: "The Blind Men in the City of Agra",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When Akbar claims there are far more seeing people than blind people in his realm, Birbal proves that those who fail to observe what is before their eyes far outnumber the rest.",
    keywords: ["akbar birbal blind men of agra", "birbal cot weaving story", "moral stories about observation", "famous akbar birbal tales"],
    tags: ["Humor", "Observation", "Mindfulness", "Wisdom"],
    full_text: "During a leisurely stroll through the royal gardens of Agra, Emperor Akbar made an observation: 'Birbal, look at the prosperous crowds in our bazaars. We are truly fortunate that our empire has so few blind people, while almost everyone possesses good eyesight.'\n\nBirbal shook his head gently. 'Pardon me, Shahenshah, but I believe you are mistaken. The number of blind people in Agra is vastly greater than the number of those who truly see.'\n\nAkbar raised an eyebrow, surprised. 'What nonsense! Almost everyone walks without a cane and carries out their trade. Prove your claim, Birbal, or admit your jest.'\n\n'I shall prove it tomorrow in the heart of the city bazaar, Your Majesty,' Birbal smiled.\n\nThe next morning, Birbal carried a wooden bed frame (a charpai), bundles of jute rope, and a large parchment ledger with ink to the busiest intersection of the Agra marketplace. Sitting cross-legged in the middle of the road, Birbal began weaving the rope through the frame with rhythmic focus.\n\nSoon, a merchant carrying silks stopped and stared. 'Birbal-ji! What in the world are you doing here?'\n\nWithout saying a word aloud, Birbal dipped his quill in ink and wrote the merchant's name into his ledger, then went right back to weaving rope: *Over, under, tug, pull.* The merchant scratched his head and walked away.\n\nA few minutes later, a royal soldier rode up. 'Minister Birbal! Why are you weaving a cot in the middle of the marketplace?'\n\nBirbal quietly dipped his quill and wrote the soldier's name on his parchment.\n\nThroughout the entire morning, every person who passed by—bakers, cobblers, nobles, ministers, and water-bearers—stopped, looked directly at Birbal weaving his cot, and asked the very same question: 'Birbal, what are you doing?' Each time, Birbal remained silent and calmly wrote their name down on the long roll of parchment.\n\nBy late afternoon, news of Birbal's strange behavior reached the royal palace. Emperor Akbar himself rode down to the marketplace with his royal guard. Pushing through the crowd, Akbar looked at his favorite counselor sitting amidst bundles of rope and asked: 'Birbal! Have you lost your mind? What on earth are you doing?'\n\nBirbal stood up, bowed with deep reverence, and gently inscribed one final name at the bottom of his parchment roll.\n\n'What are you writing, Birbal?' Akbar asked, thoroughly mystified.\n\n'Your Majesty,' Birbal replied, holding out the long scroll, 'this is the official census of blind people in Agra. And I have just added Your Imperial Majesty's name to the very end of the list!'\n\nAkbar looked offended. 'How dare you put my name on a list of blind people! My eyesight is sharp as an eagle's!'\n\nBirbal smiled with gentle amusement: 'Shahenshah, every single person on this list—including Your Majesty—saw me clearly weaving a bed frame with jute rope in broad daylight. Yet every single one of them stopped to ask: *Birbal, what are you doing?* Those who look with their eyes but do not use their minds to perceive the obvious are truly blind to what is right before them.'\n\nAkbar paused, gazed at the charpai, and then burst into hearty laughter that echoed through the entire bazaar. He acknowledged that observing with true mindfulness is far rarer than merely opening one's eyes.",
    moral: "Seeing with one's eyes is not enough; true observation requires mindfulness and understanding what is right before you.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal weaving a charpai bed in the Agra bazaar with Emperor Akbar reading the parchment list",
    word_count: 610,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-11",
    is_bedtime: false,
    quiz: [
      {
        question: "What task was Birbal performing in the middle of the Agra bazaar?",
        options: [
          "(Recommended) Weaving jute rope into a wooden bed frame (charpai)",
          "Painting a portrait of the Emperor",
          "Selling pottery jars to passersby"
        ],
        answerIndex: 0,
        hint: "He sat weaving ropes through a wooden cot frame in plain view."
      },
      {
        question: "Why did Birbal write people's names down on his parchment list?",
        options: [
          "Because they saw him weaving yet still asked 'What are you doing?'",
          "Because they refused to pay tax on their goods",
          "Because they were wearing green turbans"
        ],
        answerIndex: 0,
        hint: "Even though they could plainly see his work, they asked the obvious question."
      },
      {
        question: "Whose name did Birbal add to the very bottom of the list?",
        options: [
          "(Recommended) Emperor Akbar himself",
          "The foreign ambassador",
          "The head gardener"
        ],
        answerIndex: 0,
        hint: "The Emperor arrived and asked the exact same question."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Classic philosophical humor emphasizing awareness, active thinking, and gentle self-reflection.",
    values: ["curiosity", "responsibility", "wisdom", "mindfulness"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "census", meaning: "an official count or survey of a population or specific group" },
      { word: "charpai", meaning: "a traditional wooden bed frame woven with natural jute rope" },
      { word: "inscribed", meaning: "written or carved into a surface or ledger" },
      { word: "mindfulness", meaning: "the state of being fully aware and attentive to what is happening around you" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What disagreement started between Emperor Akbar and Birbal in the palace gardens?" },
      { tier: "Understand", question: "What was Birbal's definition of being 'blind' in this story?" },
      { tier: "Apply", question: "Have you ever asked a question when the answer was already obvious right in front of you?" },
      { tier: "Evaluate", question: "Do you agree with Birbal's point about paying close attention to everyday surroundings?" },
      { tier: "Create", question: "Imagine Birbal wanted to test the people who 'listen without hearing'. What clever experiment might he design?" }
    ],
    reflection_prompt: "Next time you are about to ask someone what they are doing, take five seconds to look closely first and see if you can understand for yourself.",
    activity: "Observe three things in your room right now that you usually ignore or take for granted. Share what you noticed with a family member.",
    mood: ["funny", "curious", "brave"],
    teaser: "Tomorrow, discover how Birbal settled the tricky dispute of a man who sold a well but claimed the water inside was still his!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-well-and-water",
    slug: "the-clever-dispute-of-the-well-and-the-water",
    language: "en",
    title: "The Well and the Water Dispute",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When a greedy merchant sells his stone well to an honest farmer and then demands daily fees for the water inside, Birbal delivers a brilliant masterclass in poetic justice.",
    keywords: ["akbar birbal well and water", "farmer well dispute story", "birbal justice stories", "175 stories of akbar and birbal"],
    tags: ["Justice", "Fairness", "Humor", "Honesty", "Wisdom"],
    full_text: "In a farming village on the outskirts of Fatehpur Sikri, an honest, hardworking farmer named Gopal needed a reliable source of water to irrigate his parched fields. His neighbor, a wealthy and miserly merchant named Seth Mohanlal, owned a stone well with sweet, abundant spring water.\n\nAfter months of hard bargaining, Gopal paid Mohanlal his life savings of three hundred silver coins to purchase the well. The deed was signed before the village elders, and Gopal returned home with joy in his heart, eager to nurture his wheat crops.\n\nThe very next morning, Gopal walked to the well with two wooden buckets. Just as he lowered the first bucket into the cool depths, Mohanlal rushed forward and grabbed the rope.\n\n'Stop!' cried the greedy merchant. 'What do you think you are doing?'\n\nGopal blinked in astonishment. 'I am drawing water for my thirsty fields. I purchased this well from you yesterday for three hundred silver coins!'\n\nMohanlal smirked slyly. 'Indeed, Gopal, you bought the stone well, the bricks, and the wooden pulley. But you did not buy the water inside the well! The water belongs entirely to me. If you wish to draw even one bucket of my water, you must pay me five copper coins each time!'\n\nGopal was devastated. He had no money left to pay daily fees. Weeping at the cruel trickery, Gopal traveled to Agra and pleaded for justice at the royal court of Emperor Akbar.\n\nAkbar listened carefully and summoned Mohanlal to the court. 'Mohanlal, did you receive three hundred silver coins from Gopal for the well?'\n\n'Yes, Your Imperial Majesty,' Mohanlal answered boldly with hands folded. 'I sold him the stone well, and the well is his. But I never sold him the water. The law protects private property, and the water is mine.'\n\nAkbar frowned at the merchant's slippery deceit, realizing the loophole. He glanced at Birbal, who had been listening with a gentle twinkle in his eye.\n\nBirbal stepped forward. 'Mohanlal, your argument is remarkably precise. Since you sold only the stone well and kept the water, the well belongs indisputably to Gopal, and the water belongs entirely to you.'\n\nMohanlal's chest puffed with pride. 'Thank you, wise Minister Birbal!'\n\n'However,' Birbal continued in a calm, firm voice, 'since the well belongs entirely to Gopal, how dare you keep your water inside another man's property without his permission?'\n\nMohanlal's smile froze. The entire royal court fell dead silent.\n\n'You have two fair choices,' declared Birbal. 'Either you remove all of your water from Gopal's well immediately without spilling a single drop onto his stones, or you must pay Gopal a daily rent of twenty silver coins for storing your private water on his land! If you fail to remove your water by nightfall, the stored water shall be forfeited to Gopal as rent compensation.'\n\nMohanlal turned pale as chalk. Remove thousands of gallons of water in hours? Pay twenty silver coins a day for storage? His own cunning greed had woven a trap around his own neck!\n\nFalling to his knees, Mohanlal touched Gopal's feet in shame. 'Forgive me, Gopal! I withdraw my false claim. The well and all the water inside belong completely to you!'\n\nAkbar fined Mohanlal fifty silver coins for harassing an honest farmer, awarded the money to Gopal for his trouble, and once again praised Birbal for turning a cheat's own deceit into perfect justice.",
    moral: "Greed and cunning tricks will always be undone by true justice. What you try to take unfairly from others will turn against you.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal confronting the miserly merchant Mohanlal before Emperor Akbar in the royal court",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-12",
    is_bedtime: false,
    quiz: [
      {
        question: "Why did Mohanlal stop Gopal from drawing water from the well?",
        options: [
          "(Recommended) He claimed he sold the well, but not the water inside it",
          "The water was contaminated",
          "The well belonged to the royal army"
        ],
        answerIndex: 0,
        hint: "He used a selfish loophole claiming the water was separate from the stone structure."
      },
      {
        question: "How did Birbal turn Mohanlal's own logic against him?",
        options: [
          "He ordered Mohanlal to pay rent for storing his water in Gopal's well",
          "He ordered the well to be destroyed",
          "He gave Mohanlal another well"
        ],
        answerIndex: 0,
        hint: "Birbal said if the water was Mohanlal's, he had no right to store it on Gopal's property without paying rent."
      },
      {
        question: "What did Mohanlal do when he realized he was trapped by his own greed?",
        options: [
          "(Recommended) He apologized and admitted the well and water belonged to Gopal",
          "He challenged Birbal to a duel",
          "He left the country immediately"
        ],
        answerIndex: 0,
        hint: "He fell to his knees in shame and gave up his unfair demand."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Classic ethical story teaching fairness, contractual integrity, and poetic justice. Family safe.",
    values: ["honesty", "justice", "responsibility", "fairness"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "parched", meaning: "extremely dry and thirsty from lack of rain or moisture" },
      { word: "loophole", meaning: "an ambiguity or inadequacy in a rule that allows someone to evade it" },
      { word: "indisputably", meaning: "in a way that cannot be doubted or questioned; completely certain" },
      { word: "forfeited", meaning: "lost or given up as a penalty for wrongdoing" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "How much did Gopal pay Mohanlal for the well originally?" },
      { tier: "Understand", question: "Why was Mohanlal's argument technically clever but morally dishonest?" },
      { tier: "Apply", question: "How can rules or promises be kept in true spirit, rather than just using tricky words?" },
      { tier: "Evaluate", question: "Was Birbal's punishment of storage rent fair to Mohanlal? Why?" },
      { tier: "Create", question: "Write a short dialogue between Gopal and Mohanlal one year later when they are good neighbors." }
    ],
    reflection_prompt: "When you make a promise or agreement with a friend, do you honor the real intent of your words, or do you look for excuses?",
    activity: "Act out the court scene with a friend or family member: one plays the tricky merchant, one the honest farmer, and one Birbal.",
    mood: ["brave", "funny", "comforting"],
    teaser: "Tomorrow, find out how Birbal discovered the mother tongue of a scholar who spoke twenty languages flawlessly!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-scholars-mother-tongue",
    slug: "the-great-scholars-true-mother-tongue",
    language: "en",
    title: "The Great Scholar's True Mother Tongue",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "A brilliant polyglot visits Akbar's court, speaking twelve languages with native perfection. When all ministers fail to identify his birthplace, Birbal uncovers the truth with human psychology.",
    keywords: ["akbar birbal scholars mother tongue", "birbal language test story", "famous birbal court stories", "175 stories of akbar and birbal"],
    tags: ["Humor", "Wisdom", "Languages", "Psychology"],
    full_text: "A renowned traveler and linguist named Pandit Jagannath arrived at the court of Emperor Akbar. He was celebrated across Asia for his extraordinary mastery of tongues. He could speak Persian, Arabic, Sanskrit, Tamil, Bengali, Turkish, Marathi, Telugu, Punjabi, Greek, Latin, and French with such flawless accent, idiom, and cadence that even native scholars could not detect the slightest hint of a foreign accent.\n\nThe scholar addressed Emperor Akbar with great courtesy: 'Your Majesty, I challenge your learned ministers. If any of them can correctly identify my true mother tongue, I shall bow to the supremacy of your scholars. But if none can determine it by tomorrow morning, you must grant that my linguistic learning stands unmatched.'\n\nAkbar accepted the challenge enthusiastically. One by one, the court scholars and linguists conversed with Jagannath. The Persian scholar spoke to him—Jagannath answered like a native of Shiraz. The Sanskrit pundit questioned him—Jagannath recited shlokas with Kashmiri perfection. The Tamil ambassador questioned him—Jagannath replied with the lilting melody of Madurai. Hours passed, and every minister was utterly perplexed. His mastery was so complete that every language sounded like his own.\n\nAkbar turned to Birbal with a furrowed brow. 'Birbal, can you determine the pundit's true mother tongue?'\n\n'Give me until tomorrow morning, Jahapanah,' Birbal requested calmly. 'Language is not merely a skill of the throat; it is rooted deep within the earliest memories of the heart.'\n\nThat night, the scholar was given a luxurious guest chamber in the royal guest house. After a heavy feast, Jagannath fell into a deep, peaceful sleep, snoring gently beneath a silk quilt.\n\nIn the quiet hour before dawn, Birbal slipped silently into the guest room, carrying a brass jug filled with ice-cold well water. Tiptoeing to the bedside, Birbal suddenly splashed the cold water directly across the sleeping scholar's face and shouted loudly: 'Thief! Thief!'\n\nThe startled pundit bolted upright in bed, sputtering and shivering. In that moment of sudden shock, before his conscious mind could even wake up, he cried out in terror: *'Arey evarura adhi! Naa meeda neellu evaru challaru? Kapadandi!'*\n\nBirbal stepped out from the shadows with a warm, reassuring smile. 'Pardon the disturbance, learned Pandit-ji. Please dry yourself with this warm towel and return to your peaceful sleep.'\n\nThe next morning, the royal court assembled with eager curiosity. Pandit Jagannath stood proudly before the throne. 'Well, Birbal, have you determined my mother tongue, or do your ministers concede defeat?'\n\nBirbal bowed respectfully. 'Pandit Jagannath's true mother tongue is Telugu.'\n\nThe scholar gasped in astonishment, his mouth opening wide. 'That is absolutely correct! But how could you possibly know? I spoke with equal perfection in twelve languages yesterday!'\n\nBirbal explained with a gentle smile: 'A person may learn ten or twenty foreign languages through study and practice. In times of ease and calm, the mind uses whichever language it chooses. But in moments of sudden fright, shock, or extreme distress, every human being instinctively cries out in their mother tongue—the language in which their mother first sang them to sleep as an infant.'\n\nPandit Jagannath bowed deeply to Birbal. 'You are not only a wise minister, Birbal, but a master of the human heart.' Emperor Akbar applauded Birbal and rewarded both men with royal gifts.",
    moral: "Education can master many skills, but the natural roots of home, family, and mother tongue remain forever etched in the soul.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal greeting Pandit Jagannath with a towel after the cold water test at dawn",
    word_count: 650,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-13",
    is_bedtime: false,
    quiz: [
      {
        question: "What unique skill did Pandit Jagannath possess?",
        options: [
          "(Recommended) He could speak twelve languages with flawless native accents",
          "He could run faster than a royal stallion",
          "He could paint without using brushes"
        ],
        answerIndex: 0,
        hint: "He was a celebrated linguist who mastered many different tongues."
      },
      {
        question: "How did Birbal find out the scholar's true native language?",
        options: [
          "He splashed cold water on him while sleeping to hear what language he cried out in naturally",
          "He searched through the scholar's travel luggage",
          "He asked the scholar's brother in secret"
        ],
        answerIndex: 0,
        hint: "In a moment of sudden shock, humans revert instinctively to their earliest childhood language."
      },
      {
        question: "What was Pandit Jagannath's true mother tongue?",
        options: [
          "(Recommended) Telugu",
          "Persian",
          "French"
        ],
        answerIndex: 0,
        hint: "When startled, he shouted out his surprise in this southern language."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Entertaining cultural story highlighting language diversity and child psychological truth. Safe for all.",
    values: ["curiosity", "empathy", "respect", "wisdom"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "polyglot", meaning: "a person who knows and is able to use several different languages" },
      { word: "cadence", meaning: "the rhythmic flow, inflection, or modulation of sounds in speech" },
      { word: "instinctively", meaning: "doing something naturally without having to consciously think about it" },
      { word: "concede", meaning: "to admit or acknowledge that something is true or that someone has won" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "How many languages did the visiting pundit speak?" },
      { tier: "Understand", question: "Why do people revert to their mother tongue in moments of fear or surprise?" },
      { tier: "Apply", question: "When you stub your toe or drop something accidentally, what word or phrase do you say first?" },
      { tier: "Evaluate", question: "Was Birbal's method clever or slightly unfair? Explain your opinion." },
      { tier: "Create", question: "Write a phrase in your mother tongue that expresses comfort, joy, or surprise." }
    ],
    reflection_prompt: "What language or words feel like 'home' to you when you are tired or need comforting?",
    activity: "Learn how to say 'Good morning' and 'Thank you' in three different languages spoken by your friends or neighbors.",
    mood: ["funny", "curious", "comforting"],
    teaser: "Tomorrow, discover what happened when the Emperor asked: 'Who in this world dared to pull my mustache?'",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-pulling-the-mustache",
    slug: "who-dared-to-pull-the-emperors-mustache",
    language: "en",
    title: "Who Dared Pull the Emperor's Mustache?",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When Emperor Akbar angrily announces that someone pulled his royal mustache and asks his ministers what punishment is fitting, only Birbal understands the true identity of the culprit.",
    keywords: ["akbar birbal mustache story", "who pulled akbars beard", "witty tales of birbal", "ramesh mudholkar akbar birbal"],
    tags: ["Humor", "Family", "Love", "Wisdom", "Kindness"],
    full_text: "One morning, Emperor Akbar walked into the grand Diwan-i-Aam with an unusually grim expression on his face. He sat down heavily upon the Peacock Throne and glared at his assembled courtiers with stormy eyes.\n\nThe ministers trembled, wondering who had incurred the Emperor's wrath. Was there an uprising on the border? Had a tax collector stolen royal revenue?\n\nAkbar broke the heavy silence with a thunderous question: 'Ministers and nobles! Tell me: if someone had the supreme audacity to reach out their hand and pull the hairs of my royal mustache this morning, what punishment should be meted out to such a daring traitor?'\n\nA gasp of horror echoed across the marble hall. Pull the royal mustache of the ruler of Hindustan? It was unthinkable! Courtiers scrambled over one another to suggest the harshest, most gruesome punishments to show their loyalty.\n\n'Sire!' shouted the chief general. 'He should be beheaded on the spot!'\n\n'No, Your Majesty!' cried another eager courtier. 'He should be banished to the deepest desert and flogged with fifty lashes!'\n\n'Throw him from the highest ramparts of the Red Fort into the river!' suggested a third.\n\nThroughout all this noisy outrage, Birbal stood quietly in his usual spot, holding back a gentle, knowing smile.\n\nAkbar noticed Birbal's silence and asked: 'Birbal! You have not spoken a single word. What punishment do you advise for the insolent creature who dared to pull my mustache?'\n\nBirbal bowed respectfully and smiled warmly: 'Your Imperial Majesty, I advise that the culprit should be given a large bowl of the finest sweetmeats, honeyed almonds, and pistachios from the royal kitchen!'\n\nThe courtiers were scandalized. 'Sweetmeats?' shouted the finance minister. 'Birbal has committed treason! Rewarding someone who insulted the Emperor's face?'\n\nAkbar looked intently into Birbal's eyes, his stern frown slowly softening into a quiet grin. 'Birbal, explain to these bloodthirsty courtiers why you recommend sweets for such an act.'\n\n'Majesty,' Birbal replied with affectionate warmth, 'who in this vast empire would ever have the courage, love, and innocent audacity to reach up and tug at Your Majesty's mustache? Only one person in the entire world: your beloved infant grandson, Prince Khurram, whom you were playing with in the private chambers before court opened!'\n\nAkbar burst into joyful laughter that filled the entire palace. 'You are right, Birbal! It was indeed my little grandson who pulled my mustache while sitting upon my lap this morning!'\n\nThe courtiers hung their heads in shame at their hasty, cruel suggestions. Akbar praised Birbal for seeing with eyes of family love, discernment, and common sense, rather than blind anger.",
    moral: "Do not rush to anger or harsh punishment without understanding context; true wisdom looks at situations with empathy, reason, and love.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Emperor Akbar laughing warmly as Birbal explains the grandson's innocent playfulness",
    word_count: 520,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-14",
    is_bedtime: true,
    quiz: [
      {
        question: "What crime did Emperor Akbar ask his ministers to punish?",
        options: [
          "(Recommended) Someone had pulled his royal mustache",
          "Someone stole the royal crown",
          "Someone forgot to water the palace roses"
        ],
        answerIndex: 0,
        hint: "Akbar asked what to do with the daring person who pulled his facial hair."
      },
      {
        question: "What punishment did the other courtiers suggest?",
        options: [
          "(Recommended) Harsh punishments like beheading, flogging, or banishment",
          "Giving the person a promotion",
          "Singing a song for them"
        ],
        answerIndex: 0,
        hint: "The courtiers competed to suggest the most severe punishments."
      },
      {
        question: "Who was the actual person who pulled Akbar's mustache?",
        options: [
          "(Recommended) His little grandson playing innocently on his lap",
          "A rival king's spy",
          "Birbal himself"
        ],
        answerIndex: 0,
        hint: "Only an innocent child in the family would dare do such a thing with love."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Heartwarming family tale of perspective, empathy, and innocence. Perfect for bedtime.",
    values: ["empathy", "kindness", "wisdom", "responsibility"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "audacity", meaning: "willingness to take bold risks or daring behavior" },
      { word: "meted", meaning: "distributed or dealt out, especially punishment or justice" },
      { word: "ramparts", meaning: "defensive wall-walks or fortified stone barriers around a fortress" },
      { word: "discernment", meaning: "the ability to judge well, understand truth, and see beneath the surface" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What did Birbal suggest giving to the person who pulled Akbar's mustache?" },
      { tier: "Understand", question: "Why were the courtiers so quick to suggest violent punishments?" },
      { tier: "Apply", question: "When someone upsets you by mistake, how can you pause to understand their intention first?" },
      { tier: "Evaluate", question: "Why is empathy often more powerful than hasty anger in making good decisions?" },
      { tier: "Create", question: "Draw a funny picture of baby Prince Khurram sitting on grandfather Akbar's lap." }
    ],
    reflection_prompt: "Before you react with frustration to someone's mistake, think: did they mean to cause harm, or was it an innocent mishap?",
    activity: "Give someone in your family an unexpected hug or kind compliment today, reminding them of how much they mean to you.",
    mood: ["happy", "comforting", "funny"],
    teaser: "Tomorrow, discover what happened when Akbar asked Birbal to find the six biggest fools in the city!",
    series_id: null,
    part_number: null,
    reviewed: true
  }
];

let added = 0;
for (const story of akbarBirbalStories) {
  if (!existingIds.has(story.id)) {
    existing.push(story);
    existingIds.add(story.id);
    added++;
    console.log(`[Akbar-Birbal Batch] Added: "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Akbar-Birbal Batch] Done! Added ${added} stories. Total stories in English: ${existing.length}`);
