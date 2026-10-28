import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

export const grandFolkloreStories = [
  // --- AKBAR & BIRBAL (Expanding toward the 175 Stories Anthology) ---
  {
    id: "akbar-birbal-neither-sun-nor-shade",
    slug: "neither-in-the-sun-nor-in-the-shade",
    language: "en",
    title: "Neither Under the Sun Nor in the Shade",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "Akbar playfully challenges Birbal to come to the royal palace neither riding nor walking, and neither under the hot sun nor in the cool shade. Birbal arrives in an astonishing manner.",
    keywords: ["neither in sun nor shade birbal", "akbar birbal riddle cot", "witty stories of birbal", "175 stories of akbar and birbal"],
    tags: ["Humor", "Wisdom", "Cleverness", "Riddle"],
    full_text: "On a scorching summer afternoon in Agra, Emperor Akbar was enjoying cool rose sherbet in his marble pavilion. Looking out at the sun-baked courtyard where the stones shimmered with heat, Akbar summoned a royal messenger and sent a playful command to Birbal:\n\n'Birbal, come to the royal court immediately! But heed my strict conditions: you must arrive at the palace neither walking upon your feet nor riding upon an animal, and you must travel neither under the burning sun nor in the cool shade! If you fail to meet all conditions, you must treat the entire court to a feast!'\n\nThe courtiers snickered. 'How can anyone travel without walking or riding? And how can anyone be outside in daylight without being either in the sun or in the shade? Birbal is finally trapped!'\n\nTwo hours later, a commotion broke out at the palace gates. Attendants pointed and stared in utter amazement.\n\nBirbal had taken a lightweight wooden woven cot (a charpai) made with a loose, open mesh of jute rope. He sat comfortably upon the cot, while four strong helpers carried the cot suspended high above their heads, with Birbal resting upon it, so that his own feet never touched the earth, nor was he riding any horse or camel!\n\nFurthermore, because the jute ropes of the cot were woven in an open criss-cross pattern, tiny shafts of sunlight fell through the mesh onto his shoulders while the ropes cast thin criss-cross shadows: he was in alternating lines of sunlight and shadow every inch of the way—neither entirely under the blazing sun nor entirely in the shade!\n\nBirbal arrived before Emperor Akbar's throne, greeted the Emperor with a courteous bow from his floating cot, and smiled cheerfully:\n\n'Your Imperial Majesty, I have arrived as commanded! My feet have not walked a single step, nor did I mount any stallion or beast. And as you can see, the woven ropes keep me partly in the sun and partly in the shade, neither wholly one nor the other!'\n\nAkbar looked at Birbal sitting serenely atop the woven cot, looked at the woven shadows on his shoulders, and burst into uncontrollable laughter. 'Only Birbal could find a third path when given an impossible choice!' Akbar declared, presenting him with a purse of gold and ordering cool sherbet for his loyal helpers.",
    moral: "When people present you with false, rigid dilemmas, think creatively. There is almost always a third inventive path that transcends ordinary boundaries.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal arriving before Emperor Akbar carried upon a woven charpai cot",
    word_count: 530,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-20",
    is_bedtime: false,
    quiz: [
      {
        question: "What contradictory conditions did Akbar give Birbal for his journey to court?",
        options: [
          "(Recommended) Neither walking nor riding, neither in the sun nor in the shade",
          "Neither swimming nor flying",
          "Neither eating nor drinking"
        ],
        answerIndex: 0,
        hint: "Akbar challenged him to arrive without walking or riding, and between sun and shade."
      },
      {
        question: "How did Birbal fulfill the condition of neither sun nor shade?",
        options: [
          "(Recommended) He sat upon an open-weave rope cot that cast alternating sunbeams and shadows",
          "He wore sunglasses",
          "He walked during an eclipse"
        ],
        answerIndex: 0,
        hint: "The woven mesh allowed half light and half shadow."
      },
      {
        question: "How did Birbal travel without walking or riding?",
        options: [
          "Four helpers carried him resting upon the cot above their heads",
          "He rolled in a barrel",
          "He used roller skates"
        ],
        answerIndex: 0,
        hint: "He sat on the cot carried by helpers, so his feet never touched the ground."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Classic lateral-thinking riddle tale celebrating innovative problem-solving. Safe for all.",
    values: ["creativity", "curiosity", "wisdom", "humor"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "commotion", meaning: "a state of confused and noisy disturbance" },
      { word: "criss-cross", meaning: "crossing or intersecting patterns of lines" },
      { word: "dilemmas", meaning: "situations in which a difficult choice has to be made between alternatives" },
      { word: "transcends", meaning: "goes beyond the normal limits of something" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What beverage was Akbar drinking in his summer pavilion?" },
      { tier: "Understand", question: "Why is Birbal's solution called 'thinking outside the box'?" },
      { tier: "Apply", question: "When you are stuck between two hard choices, how can you look for a third creative alternative?" },
      { tier: "Evaluate", question: "Why was Akbar so fond of giving playful riddles to Birbal?" },
      { tier: "Create", question: "Invent an impossible challenge of your own and describe how a clever hero would solve it." }
    ],
    reflection_prompt: "Life rarely comes in simple black-and-white choices. Often the most beautiful answers live in the creative spaces in between.",
    activity: "Look at the shadows cast by window blinds or leaves in your room. Notice the interplay between light and shade.",
    mood: ["funny", "curious", "happy"],
    teaser: "Tomorrow, discover what happened when a blind man walked through dark Agra carrying a bright lantern!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-blind-mans-lantern",
    slug: "the-blind-man-who-carried-a-bright-lantern",
    language: "en",
    title: "The Blind Man Who Carried a Lantern by Night",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When courtiers mock an elderly blind man carrying a burning clay lamp through the dark streets of Agra, Birbal reveals a profound lesson in consideration, foresight, and community care.",
    keywords: ["blind man with lantern story", "akbar birbal consideration", "kindness stories for kids", "175 stories of akbar and birbal"],
    tags: ["Humor", "Wisdom", "Empathy", "Kindness", "Bedtime"],
    full_text: "On a moonless night in Agra, Emperor Akbar and Birbal were walking disguised in simple woolen cloaks through the quiet streets to observe the condition of the city. As they turned down a narrow cobblestone alleyway, they saw an elderly man approaching. He walked with a steady wooden cane in his left hand, and held a brightly burning brass oil lantern high in his right hand.\n\nAs the old man drew closer, Akbar noticed from his cloudy, unblinking eyes that the man was completely sightless.\n\nAkbar stopped in surprise and whispered to Birbal: 'Look at that foolish old fellow! He is completely blind, yet he wastes precious oil carrying a lit lantern through the dark! What possible use can a lamp be to someone who cannot see?'\n\nAkbar stepped forward and said to the traveler: 'Old grandfather, pardon my curiosity, but you are blind. Day and night are the same to your eyes. Why do you burden yourself carrying a heavy lantern through the night?'\n\nThe blind elder paused, smiled with gentle serenity, and replied in a voice filled with warmth: 'Good traveler, it is true that day and night are one to my eyes. The darkness does not hinder my feet, for my cane knows every cobblestone of this alley by heart.'\n\n'Then why carry the lamp?' Akbar inquired.\n\nThe old man answered with profound humility: 'I carry this lantern not so that I can see the road, but so that thoughtless people with good eyes will see me coming in the pitch-black darkness, and will not collide with me or knock my cane away!'\n\nAkbar stood frozen in the dark alley. The simple, selfless consideration of the blind man struck his heart with overwhelming clarity. The old man was not thinking of himself; he was thinking of others, anticipating their carelessness with gentle foresight.\n\nBirbal smiled softly and said to the Emperor: 'You see, Jahapanah? Those who are blind in their eyes often possess far brighter light in their hearts than those who have two good eyes but walk through life without noticing others.'\n\nAkbar removed his warm woolen scarf and draped it gently over the old man's shoulders, placing five gold coins in his palm. 'Thank you, wise elder,' Akbar whispered. 'You have illuminated not only this dark street tonight, but my own soul.'",
    moral: "True vision is not merely having eyes to see, but possessing empathy, foresight, and consideration for the safety and feelings of others.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of the elderly blind man carrying his oil lantern through the cobblestone alley of Agra",
    word_count: 520,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-21",
    is_bedtime: true,
    quiz: [
      {
        question: "Why did the blind man carry a lit oil lantern at night?",
        options: [
          "(Recommended) So people with good eyesight would see him and not bump into him",
          "To read books on the road",
          "To catch fireflies"
        ],
        answerIndex: 0,
        hint: "He carried it for the benefit of other people walking in the dark."
      },
      {
        question: "How did Akbar initially view the old man carrying the lantern?",
        options: [
          "(Recommended) He thought it was foolish and a waste of lamp oil",
          "He thought the man was a magician",
          "He thought the man was a soldier"
        ],
        answerIndex: 0,
        hint: "He assumed a blind person had no use for a light."
      },
      {
        question: "What lesson did Birbal emphasize to the Emperor?",
        options: [
          "A kind heart sees and cares for others far better than physical eyesight alone",
          "Never walk in alleys at night",
          "Always carry two lanterns"
        ],
        answerIndex: 0,
        hint: "Empathy and consideration illuminate life more than eyesight."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Deeply moving moral tale on empathy, disability dignity, and social consideration. Family safe.",
    values: ["empathy", "kindness", "humility", "wisdom", "responsibility"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "sightless", meaning: "unable to see; blind" },
      { word: "hinder", meaning: "to create difficulties for someone or something, resulting in delay or obstruction" },
      { word: "foresight", meaning: "the ability to predict or the action of predicting what will happen or be needed in the future" },
      { word: "consideration", meaning: "careful thought, typically over a period of time; attentiveness to the needs of others" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What was the blind man holding in his left hand and right hand?" },
      { tier: "Understand", question: "Why was the blind man's reason so surprising to Emperor Akbar?" },
      { tier: "Apply", question: "How can you take small actions to help make things easier or safer for others in your home or school?" },
      { tier: "Evaluate", question: "Why is it easy to misjudge people when we look only at their outward actions without asking why?" },
      { tier: "Create", question: "Draw a warm golden lantern glowing in the night, and write a word of kindness inside the flame." }
    ],
    reflection_prompt: "The greatest light in the world is not the sun or electricity; it is the thoughtful kindness we show to people around us.",
    activity: "Hold the door open for someone or clear a hallway obstacle today, ensuring safe passage for others.",
    mood: ["calm", "comforting", "happy"],
    teaser: "Tomorrow, discover what happened when Tenali Rama was asked to judge three identical golden statues!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- TENALI RAMA (Expanding toward Heritage Collection Depth) ---
  {
    id: "tenali-rama-three-statues",
    slug: "tenali-rama-and-the-three-golden-statues",
    language: "en",
    title: "The Three Golden Statues and the Wire Test",
    genre: "Humorous Tales",
    collection: "Tenali Rama",
    culture_region: "Vijayanagara Empire",
    age_group: "All",
    summary: "A foreign king sends three identical golden idols to King Krishna Deva Raya, challenging his court to identify which statue is superior. Tenali Rama solves the riddle using a thin piece of flexible wire.",
    keywords: ["tenali rama three statues", "three golden idols wire test", "tenali rama wisdom tales", "listening and secrets story"],
    tags: ["Humor", "Wisdom", "Listening", "Trust", "Friendship"],
    full_text: "A grand envoy from an overseas empire arrived at the royal court of Vijayanagara, presenting three magnificent statues crafted from solid, gleaming gold. The three statues appeared completely identical in height, weight, polish, and facial expression. Each depicted a graceful human figure with hands resting quietly at its side.\n\nThe envoy presented the challenge to King Krishna Deva Raya: 'Sire, though these three golden statues appear identical to the eye and touch, one of them is of low value, the second is of middling value, and the third is of supreme, peerless value! If your scholars can determine which is which, and explain the reason why, our ruler will enter into a permanent alliance of honor with your kingdom.'\n\nAll the court jewelers, sculptors, and mathematicians stepped forward. They weighed the statues on brass balances—every statue weighed exactly fifty pounds. They measured the height—every statue stood exactly three feet tall. They tested the gold purity—every statue was made of flawless twenty-four karat gold. The courtiers were utterly confounded.\n\nKing Krishna Deva Raya turned to his trusted wit: 'Tenali, our royal honor rests upon your shoulders. Can you discern the difference between these three identical figures?'\n\n'Give me a slender, flexible piece of silver wire, Your Majesty,' Tenali Rama smiled.\n\nAn attendant brought a spool of fine silver wire. Tenali walked to the first statue. Inspecting the ears carefully, he noticed a tiny, hairline hole in the ear canal. Tenali gently fed the flexible wire into the first statue's ear. The wire pushed through, and a moment later, the tip of the wire slipped out of the statue's **mouth**!\n\nTenali walked to the second statue and fed the wire into its ear. The wire curled inside the head, traveled downward through the neck, and emerged out through the statue's **other ear**!\n\nFinally, Tenali fed the wire into the ear of the third statue. The wire traveled inward and disappeared deep into the statue's **heart**, with no wire coming out of the mouth, other ear, or any other opening at all!\n\nTenali turned to the King and the foreign envoy with a beaming smile:\n\n'Your Majesty, the mystery is solved!' Tenali announced. 'The first statue represents the person of lowest value: whatever words or secrets enter their ear immediately spill out of their mouth in careless gossip! They cannot be trusted with any confidential trust.'\n\n'The second statue represents the person of middling value: whatever words enter one ear go straight out the other ear without leaving any impression! They listen without understanding or caring, forgetting everything they are told.'\n\n'And the third statue,' Tenali concluded with reverent dignity, 'represents the person of supreme, priceless value: whatever is spoken to their ear travels straight to their heart! They absorb wisdom, keep confidences sacred, and cherish their friends with unwavering loyalty.'\n\nThe foreign envoy fell to his knees in profound admiration. 'Incredible, wise Tenali! That is the exact philosophical riddle intended by our king!'\n\nKing Krishna Deva Raya rewarded Tenali with a necklace of emeralds, reminding everyone that a person's true worth is determined by how faithfully they listen and protect what is shared in confidence.",
    moral: "Listen with your heart. Avoid careless gossip and inattentive ears; be the person who holds secrets sacred and treasures wisdom deep within.",
    image: "/images/stories/tenali-rama-garden.svg",
    image_alt: "Illustration of Tenali Rama testing the three identical golden statues with a slender silver wire before the King",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-22",
    is_bedtime: false,
    quiz: [
      {
        question: "How did Tenali Rama test the difference between the three identical golden statues?",
        options: [
          "(Recommended) He inserted a thin, flexible silver wire into each statue's ear to see where it emerged",
          "He melted them in a furnace",
          "He weighed them against water"
        ],
        answerIndex: 0,
        hint: "He used a wire to trace the internal path from the ear."
      },
      {
        question: "What did the wire coming out of the other ear symbolize in the second statue?",
        options: [
          "(Recommended) A person who hears words but lets them go in one ear and out the other",
          "A person who loves music",
          "A person who speaks three languages"
        ],
        answerIndex: 0,
        hint: "The wire went straight through without touching the heart or mind."
      },
      {
        question: "Why was the third statue considered the most valuable?",
        options: [
          "The wire stayed deep inside the heart, symbolizing loyalty and keeping confidences",
          "It was heavier than the others",
          "It had a gold crown"
        ],
        answerIndex: 0,
        hint: "It represented someone who absorbs wisdom into their heart."
      }
    ],
    author: "Traditional South Indian Folklore (Tenali Rama Collection)",
    status: "published",
    content_notes: "Classic ethical allegory on listening, integrity, and being a trustworthy confidant. Safe for all.",
    values: ["trust", "loyalty", "wisdom", "friendship", "responsibility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "confounded", meaning: "completely perplexed, amazed, or bewildered" },
      { word: "discern", meaning: "to perceive, recognize, or distinguish clearly" },
      { word: "middling", meaning: "moderate or average in size, amount, or quality" },
      { word: "confidant", meaning: "a person with whom one shares a secret or private matter, trusting them not to repeat it" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Where did the wire emerge in each of the three statues?" },
      { tier: "Understand", question: "Why is gossiping or repeating secrets harmful to friendships?" },
      { tier: "Apply", question: "When a friend confides something personal to you, how can you show that you are like the third statue?" },
      { tier: "Evaluate", question: "Why do we say that listening is an active virtue rather than a passive habit?" },
      { tier: "Create", question: "Draw the three statues with speech bubbles showing what each person does when given advice." }
    ],
    reflection_prompt: "Be the kind of friend someone can trust with their dreams, tears, and secrets. A heart that keeps trust is a sanctuary for others.",
    activity: "Practice 'Heart Listening' today: when someone talks to you, give them your full attention without checking a phone or looking away.",
    mood: ["brave", "comforting", "curious"],
    teaser: "Tomorrow, discover what happened when Mulla Nasruddin looked down into a village well and saw the moon drowning!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- MULLA NASRUDDIN CLASSICS ---
  {
    id: "mulla-nasruddin-moon-in-well",
    slug: "mulla-nasruddin-rescues-the-moon-from-the-well",
    language: "en",
    title: "Mulla Nasruddin and the Moon in the Well",
    genre: "Humorous Tales",
    collection: "Mulla Nasruddin",
    culture_region: "Middle East / Central Asia",
    age_group: "All",
    summary: "When Mulla Nasruddin looks down into his garden well on a clear night and sees the moon's reflection, he believes the moon has fallen from the sky and embarks on a comical rescue mission.",
    keywords: ["mulla nasruddin moon in the well", "nasruddin moon rescue story", "sufi humor for children", "funny bedtime stories"],
    tags: ["Humor", "Wisdom", "Nature", "Bedtime", "Curiosity"],
    full_text: "On a brilliant, starry night, Mulla Nasruddin went out to his garden well to draw a bucket of cool water before bedtime. The sky was a vast canopy of indigo, and the full moon shone like a polished silver plate.\n\nNasruddin leaned over the stone rim of the well and peered into the water below. To his utter shock and dismay, right there in the dark circular depths of the well, floating peacefully on the surface of the water, was the bright, round moon!\n\nNasruddin gasped in horror, clutching his turban with both hands: 'Great heavens! The poor moon has lost its footing in the heavens and fallen straight into my well! If I do not rescue the moon immediately, the entire world will be plunged into eternal night, travelers will lose their way in the desert, and children will have no moonbeams to sing them to sleep!'\n\nFilled with heroic urgency, Nasruddin sprinted to his tool shed. He found a sturdy hemp rope and tied a heavy three-pronged iron grappling hook to one end. Hurrying back to the well, he tossed the hook down into the darkness.\n\n'Do not panic, dear Moon!' called Nasruddin down the well. 'Hold on tight! Nasruddin is here to pull you back to the sky!'\n\nNasruddin lowered the hook into the water. He swirled the rope around until—*Clink! Clank!*—the iron hook caught firmly beneath a heavy, jagged stone ledge deep within the well wall. The rope went completely taut.\n\nNasruddin beamed with triumph: *'Aha! I have caught the moon by its horns!'*\n\nHe planted his worn sandals firmly against the mossy stone rim, gripped the coarse rope with both hands, leaned backward with all his weight, and pulled with heroic, grunting effort: *'Heave... ho! Heave... ho!'*\n\nThe rope did not budge. The stone was wedged tight. Nasruddin strained harder and harder. His face turned red as a pomegranate, his eyes bulged, and his veins stood out on his forehead. With one final, titanic, superhuman pull—*SNAP!*—the rope snapped cleanly in half!\n\nSent flying backward by the sudden release of tension, Nasruddin tumbled through the air, flipped over, and landed flat on his back in the soft clover with a loud: *OOMPH!*\n\nFor a moment, Nasruddin lay in the grass, bruised and seeing twinkling stars. As his breath returned, he slowly opened his eyes and looked straight up into the boundless sky above.\n\nThere, floating gracefully above the pine trees, riding peacefully among the silver clouds, was the glorious, brilliant full moon, shining down upon his garden in all its majestic glory!\n\nNasruddin let out a long, happy sigh of deep contentment. He dusted off his trousers, smiled with peaceful pride, and whispered:\n\n'Well, well! I may have bruised my back and torn my tunic, but by heaven, what a splendid success! I pulled so hard that I launched the moon right out of the well and threw it all the way back up into the highest sky!'\n\nChuckling with joyful satisfaction, the wise Mulla went inside his cottage, drank a glass of water, and slept the deep, peaceful sleep of someone who believed with all his heart that he had saved the night sky for the world.",
    moral: "Sometimes our perspectives and misunderstandings lead to comical struggles. Yet having good intentions, a sense of humor, and being able to laugh at ourselves makes every tumble a joyful story.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of Mulla Nasruddin lying happily in the clover looking up at the full moon in the night sky",
    word_count: 620,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-23",
    is_bedtime: true,
    quiz: [
      {
        question: "What did Mulla Nasruddin believe he saw inside his garden well?",
        options: [
          "(Recommended) The actual moon that had fallen from the heavens",
          "A golden treasure chest",
          "A sleeping mermaid"
        ],
        answerIndex: 0,
        hint: "He mistook the moon's watery reflection for the celestial body itself."
      },
      {
        question: "What happened when Nasruddin pulled on the rope with all his might?",
        options: [
          "(Recommended) The rope snapped and sent him tumbling backward into the clover",
          "The well collapsed",
          "He pulled up a bucket of diamonds"
        ],
        answerIndex: 0,
        hint: "The hook was caught on a stone ledge, and the rope broke under pressure."
      },
      {
        question: "What did Nasruddin think when he looked up and saw the moon in the sky?",
        options: [
          "He proudly believed he had launched the moon back up into the heavens",
          "He thought there were two moons",
          "He called the police"
        ],
        answerIndex: 0,
        hint: "He comically congratulated himself on saving the night sky."
      }
    ],
    author: "Traditional Middle Eastern / Sufi Folklore (Mulla Nasruddin Collection)",
    status: "published",
    content_notes: "Classic whimsical humor celebrating pure-hearted intentions and laughing at our human foibles. Safe for all.",
    values: ["humor", "kindness", "optimism", "joy"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "canopy", meaning: "an ornamental cloth covering or high overhanging roof formed by the sky or trees" },
      { word: "taut", meaning: "stretched or pulled tight; not slack" },
      { word: "titanic", meaning: "of exceptional strength, size, or power" },
      { word: "contentment", meaning: "a state of happiness and satisfaction with one's situation" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What tool did Nasruddin use to try and catch the moon?" },
      { tier: "Understand", question: "What is the scientific difference between a real object and its reflection in water?" },
      { tier: "Apply", question: "Have you ever made a silly mistake and then laughed about it later with your family?" },
      { tier: "Evaluate", question: "Why is being able to laugh at yourself such a healthy and wonderful character trait?" },
      { tier: "Create", question: "Draw a comic strip showing Nasruddin pulling the rope, flying backward, and gazing at the moon." }
    ],
    reflection_prompt: "A happy heart does not take itself too seriously. When you stumble or make a silly mistake, laugh warmly, get back up, and admire the stars.",
    activity: "Fill a dark bowl with water and take it outside at night to catch the reflection of the moon or street lamp.",
    mood: ["funny", "happy", "comforting"],
    teaser: "Discover our full global collection of moral, bedtime, and humorous folktales from around the world in 10 languages!",
    series_id: null,
    part_number: null,
    reviewed: true
  }
];

let added = 0;
for (const story of grandFolkloreStories) {
  if (!existingIds.has(story.id)) {
    existing.push(story);
    existingIds.add(story.id);
    added++;
    console.log(`[Grand Folklore Batch] Added: "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Grand Folklore Batch] Done! Added ${added} stories. Total stories in English: ${existing.length}`);
