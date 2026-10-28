import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

export const classicAnthologyStories = [
  // --- AESOP'S FABLES ---
  {
    id: "aesop-boy-who-cried-wolf",
    slug: "the-shepherd-boy-who-cried-wolf",
    language: "en",
    title: "The Shepherd Boy Who Cried Wolf",
    genre: "Fables",
    collection: "Aesop's Fables",
    culture_region: "Ancient Greece",
    age_group: "All",
    summary: "A lonely shepherd boy seeks excitement by repeatedly playing false alarms of a wolf attack, discovering the tragic price of losing the community's trust.",
    keywords: ["boy who cried wolf story", "aesop fable honesty", "trust and honesty fables for kids", "classic moral stories"],
    tags: ["Fable", "Honesty", "Trust", "Responsibility"],
    full_text: "High on a breezy green hillside bordering a peaceful farming village lived a young shepherd boy named Lucas. Every morning, Lucas drove his flock of fluffy white sheep up the slopes to graze on sweet clover and thyme. His duty was simple but vital: watch the flock, keep them together, and warn the village if any dangerous predator approached from the dark forest.\n\nAfter several weeks, Lucas grew terribly bored. Day after day, the sun rose, the sheep chewed grass, and the clouds drifted lazily overhead. Nothing exciting ever happened. Lucas longed for company, noise, and excitement.\n\nOne afternoon, an irresponsible thought entered his mind: *'What if I play a trick on the villagers? That will bring everyone running!'*\n\nLucas took a deep breath, ran to the edge of the rocky ridge overlooking the village fields, and screamed at the top of his lungs: 'Wolf! Wolf! A huge gray wolf is attacking the sheep! Help!'\n\nDown in the valley, the villagers dropped their scythes, rakes, and hammers. Fearing for the safety of the boy and their precious flock, they sprinted up the steep hillside, panting with breathless concern. But when they reached the summit, they found no wolf at all—only the sheep grazing peacefully and Lucas rolling on the grass, clutching his belly in roaring laughter.\n\n'That was not funny, Lucas!' warned the village blacksmith sternly. 'A false alarm wastes our labor and frightens everyone. Do not cry wolf when there is no wolf!'\n\nYet just three days later, overcome once again by boredom, Lucas repeated the prank: 'Wolf! Wolf! Please help, the wolf is here!'\n\nOnce more, the kind-hearted villagers hurried up the mountain with sticks and pitchforks to defend him, only to find the boy mocking them with red-faced laughter. The village elder shook his gray head in sorrow: 'Lucas, a liar will not be believed, even when they finally speak the truth.'\n\nA week later, as the twilight shadows lengthened across the hill, a real, terrifying gray wolf crept out from the thick pine forest. Its yellow eyes glowed with hunger, and its sharp teeth bared as it stalked toward a frightened lamb!\n\nTrembling in genuine terror, Lucas scrambled up a tall boulder and screamed with all the strength in his throat: 'Wolf! Wolf! A real wolf is here! Please help me! Wolf!'\n\nDown in the village, the farmers heard the distant cries. But they shook their heads and smiled sadly. 'It is only that mischievous boy trying to trick us again,' said a farmer. 'We will not leave our work to be laughed at a third time.'\n\nNo one came to his aid. Lucas could only watch in tears as the wolf scattered the frightened flock into the wild hills. That night, Lucas walked down to the village alone, weeping in deep shame. The villagers comforted him and helped him gather the lost sheep the next morning, but Lucas had learned an unforgettable truth: trust, once broken by deceit, is harder to rebuild than stone.",
    moral: "Truthfulness is the foundation of trust. If you repeatedly tell lies, no one will believe you when you genuinely need help.",
    image: "/images/stories/aesop-tortoise-hare.svg",
    image_alt: "Illustration of the shepherd boy on a hill realizing no one is coming to help as the sheep scatter",
    word_count: 560,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-21",
    is_bedtime: false,
    quiz: [
      {
        question: "Why did Lucas cry 'Wolf!' when there was no danger?",
        options: [
          "(Recommended) He was bored and wanted attention and excitement",
          "He mistook a dog for a wolf",
          "The sheep told him to do it"
        ],
        answerIndex: 0,
        hint: "He thought playing a false alarm would be funny entertainment."
      },
      {
        question: "What happened when a real wolf finally appeared?",
        options: [
          "(Recommended) The villagers thought it was another trick and did not come",
          "The sheep defeated the wolf",
          "Lucas chased the wolf away with a flute"
        ],
        answerIndex: 0,
        hint: "Because he had lied twice, nobody believed him when he was telling the truth."
      },
      {
        question: "What is the primary moral lesson of this fable?",
        options: [
          "Honesty creates trust; lies destroy credibility",
          "Never graze sheep on hills",
          "Wolves only come in the morning"
        ],
        answerIndex: 0,
        hint: "Truthfulness is essential so people can rely on your word."
      }
    ],
    author: "Aesop (Ancient Greek Fable)",
    status: "published",
    content_notes: "Classic ethical fable on honesty and accountability. Completely safe for children.",
    values: ["honesty", "responsibility", "trust", "community"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "scythes", meaning: "farming tools with long curved blades used for cutting grass or grain" },
      { word: "predator", meaning: "an animal that naturally preys on other animals for food" },
      { word: "mischievous", meaning: "causing or showing a fondness for causing trouble or pranks in a playful way" },
      { word: "credibility", meaning: "the quality of being trusted, believed in, and relied upon" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "How many times did Lucas cry wolf falsely before the real wolf came?" },
      { tier: "Understand", question: "Why is trust like a delicate glass vase that is hard to repair when cracked?" },
      { tier: "Apply", question: "If you have ever told a small untruth, what steps can you take to earn back someone's trust?" },
      { tier: "Evaluate", question: "Were the villagers wrong for not coming the third time, or was their reaction understandable?" },
      { tier: "Create", question: "Write a short apology letter from Lucas to the villagers promising to be an honest guardian." }
    ],
    reflection_prompt: "Your word is your bond. What does it mean to you when people know they can always count on your truth?",
    activity: "Share one honest feeling with a parent or teacher today that you were previously nervous to talk about.",
    mood: ["brave", "comforting", "calm"],
    teaser: "Tomorrow, discover what a clever, thirsty black crow did when he found a pitcher with water too low to reach!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "aesop-crow-and-pitcher",
    slug: "the-clever-crow-and-the-stone-pitcher",
    language: "en",
    title: "The Clever Crow and the Stone Pitcher",
    genre: "Fables",
    collection: "Aesop's Fables",
    culture_region: "Ancient Greece",
    age_group: "All",
    summary: "Parched with thirst under a blazing afternoon sun, a determined crow discovers a tall clay pitcher with water just out of reach, using pebble-by-pebble persistence to solve the problem.",
    keywords: ["crow and pitcher story", "aesop fable persistence", "clever crow science story", "problem solving for kids"],
    tags: ["Fable", "Patience", "Perseverance", "Science", "Wisdom"],
    full_text: "Under the sweltering heat of a midsummer afternoon, a black crow named Corvus flew across dry fields searching desperately for a drink of water. The streams had dried into cracked mud, and the village animal troughs were bone-dry. Corvus felt his throat parched and his wings heavy with fatigue.\n\nJust as he was about to lose hope, his sharp black eyes spotted an earthen pitcher resting on the stone patio of an abandoned farmhouse garden. Corvus fluttered down and landed eagerly upon the rim of the jug.\n\nHe peered inside. To his delight, there was clear, sparkling water at the bottom! But his joy turned to dismay when he stretched his neck downward. The pitcher was tall with a narrow neck, and the water level was low. No matter how much Corvus stretched, his beak stopped two inches short of the water's surface.\n\nHe tried to push the heavy clay jar over with his wings, hoping to spill the water onto the flat stones. But the pitcher was made of thick terracotta and filled with too much weight; it stood firm and would not budge. If he knocked it too hard and broke it, the precious water would vanish into the dry soil before he could take a single sip.\n\nCorvus rested on a stone wall, panting. A weaker bird might have given up in despair. But Corvus paused, looked around the garden patio, and used his brilliant mind.\n\nHis eyes fell upon a pile of smooth, round pebbles scattered along the gravel path. A spark of scientific inspiration ignited in his bird brain!\n\nCorvus hopped over to the gravel path, picked up a small round pebble in his beak, flew back to the pitcher, and dropped it inside: *Plink!*\n\nHe picked up a second pebble and dropped it in: *Plop!*\n\nA third pebble: *Plunk!*\n\nAt first, the water level seemed barely to move. It was slow, tedious, and tiring work. But Corvus did not lose heart. He flew back and forth with steady rhythm: pebble by pebble, stone by stone. One, five, ten, twenty, forty pebbles sank to the bottom of the pitcher. With each stone that entered, the water had no choice but to rise higher through displacement.\n\nFinally, after dozens of patient trips, the cool water rose right to the brim of the pitcher! Corvus dipped his black beak into the refreshing water and drank deeply, quenching his thirst in sweet triumph. His patience and ingenuity had saved his life.",
    moral: "Little by little does the trick. Patient, persistent effort and creative thinking can conquer seemingly impossible difficulties.",
    image: "/images/stories/aesop-tortoise-hare.svg",
    image_alt: "Illustration of the black crow dropping a smooth pebble into a terracotta water pitcher",
    word_count: 480,
    reading_time: "3 min",
    listen_time: "3 min",
    audio_url: null,
    publish_date: "2026-11-22",
    is_bedtime: true,
    quiz: [
      {
        question: "Why couldn't Corvus drink the water at first?",
        options: [
          "(Recommended) The pitcher was tall with a narrow neck and the water was too low",
          "The water was frozen into ice",
          "A cat was guarding the pitcher"
        ],
        answerIndex: 0,
        hint: "His beak was too short to reach the bottom through the narrow opening."
      },
      {
        question: "What scientific principle did the crow use to raise the water level?",
        options: [
          "Water displacement by dropping in pebbles one by one",
          "Evaporation from the sun",
          "Magnetic attraction"
        ],
        answerIndex: 0,
        hint: "The stones occupied space at the bottom, forcing the liquid upward."
      },
      {
        question: "What virtue did Corvus show throughout his challenge?",
        options: [
          "(Recommended) Patience and continuous perseverance",
          "Impatience and anger",
          "Giving up easily"
        ],
        answerIndex: 0,
        hint: "He took dozens of patient trips without quitting."
      }
    ],
    author: "Aesop (Ancient Greek Fable)",
    status: "published",
    content_notes: "Inspiring STEAM fable teaching water displacement and steady effort. Family safe.",
    values: ["patience", "curiosity", "perseverance", "wisdom"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "sweltering", meaning: "oppressively hot and humid" },
      { word: "terracotta", meaning: "baked brownish-red earthenware clay used for pottery and tiles" },
      { word: "displacement", meaning: "the volume of fluid pushed aside or raised when an object is submerged" },
      { word: "ingenuity", meaning: "the quality of being clever, original, and inventive" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Where did Corvus find the pebbles he used?" },
      { tier: "Understand", question: "Why didn't the crow simply try to break the clay pitcher?" },
      { tier: "Apply", question: "When you have a big homework task or clean-up job, how does the 'pebble-by-pebble' method help you?" },
      { tier: "Evaluate", question: "Do you think animals in real life can solve problems like this? (Crows really can!)" },
      { tier: "Create", question: "Try a kitchen experiment: take a cup of water, drop in clean coins, and observe how high the water rises!" }
    ],
    reflection_prompt: "Big goals are never completed all at once. What 'single pebble' can you add to your goal today?",
    activity: "Fill a clear glass half-full with water and drop in 10 marbles or clean stones to see displacement in action.",
    mood: ["curious", "brave", "calm"],
    teaser: "Tomorrow, discover what happened when the Wind and the Sun had a friendly contest to see who was stronger!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "aesop-wind-and-sun",
    slug: "the-gentle-sun-and-the-boastful-north-wind",
    language: "en",
    title: "The Gentle Sun and the Boastful North Wind",
    genre: "Fables",
    collection: "Aesop's Fables",
    culture_region: "Ancient Greece",
    age_group: "All",
    summary: "The blustering North Wind and the radiant Sun hold a contest to see who can persuade a traveler to remove his warm cloak, showing that gentleness achieves what fury never can.",
    keywords: ["wind and sun aesop", "gentleness vs force fable", "moral stories kindness for kids", "aesops fables collection"],
    tags: ["Fable", "Kindness", "Gentleness", "Empathy", "Bedtime"],
    full_text: "High above the azure skies, a lively dispute arose between the fierce North Wind and the golden Sun. The North Wind puffed his icy cheeks and roared with thunderous pride: 'I am the mightiest force in all nature! With one blast of my breath, I can snap century-old oak trees, whip the ocean into towering waves, and strip the leaves from entire forests! You, Sun, are merely a soft, warm ball of light. You have no real power!'\n\nThe Sun smiled with gentle, calm warmth. 'Strength, dear brother Wind, is not measured only by how loudly you howl or how much destruction you cause. True power lies in gentle persuasion and warmth.'\n\nThe North Wind scoffed in disbelief. 'Persuasion? Softness is weakness! Let us have a contest to settle this once and for all.'\n\nLooking down at the earth, the Sun spotted a solitary traveler walking along a winding mountain path. The traveler was wrapped tightly in a thick woolen cloak to protect himself from the autumn chill.\n\n'Look at that traveler,' proposed the Sun. 'Whichever of us can cause that traveler to take off his woolen cloak shall be recognized as the more powerful.'\n\n'A child's play!' boomed the North Wind. 'I shall blow his cloak clean off his shoulders in three seconds. Stand aside and watch!'\n\nThe Sun stepped behind a fluffy silver cloud, giving the North Wind first turn.\n\nThe North Wind took a tremendous, freezing breath and blew with all his fury: *WHOOOOOSH!* Gusts of icy gale swept down the mountain. Hail and dried leaves spun in violent whirlwinds. The traveler staggered, nearly losing his footing on the rocky ledge.\n\nDid the traveler let go of his cloak? Far from it! The harder and colder the North Wind blew, the tighter the traveler clutched the woolen fabric against his chest, wrapping the edges around his neck and buttoning every clasp securely against the storm!\n\nThe North Wind roared in frustration, howling until his lungs were completely exhausted. After fifteen minutes of raging fury, the wind died down to a tired whimper. The traveler remained completely cloaked, shivering but unyielding.\n\nNow it was the Sun's turn.\n\nThe Sun emerged gracefully from behind the cloud. He did not roar, demand, or use violence. He simply shone with radiant, steady, affectionate warmth. His golden rays bathed the hillside, the autumn wildflowers, and the winding path in comforting golden light.\n\nSoon, the biting chill evaporated. The birds began singing in the olive groves. The traveler stopped shivering and unclasped the top button of his collar. As the Sun shone a little warmer and brighter, the traveler felt the soothing heat upon his shoulders and back. He wiped a bead of sweat from his forehead.\n\nFinally, feeling wonderfully warm and comfortable, the traveler unbuttoned the cloak, slipped it off his shoulders with a sigh of relief, folded it neatly, and laid it over his arm as he walked merrily forward under the friendly sunshine.\n\nThe North Wind hung his head in silent astonishment. The Sun smiled kindly upon his brother: 'You see, dear Wind? Gentleness, warmth, and kind persuasion can accomplish what fury and force can never achieve.'",
    moral: "Gentleness and warmth are far more powerful than fury and force. Kindness opens hearts that harshness only seals shut.",
    image: "/images/stories/aesop-tortoise-hare.svg",
    image_alt: "Illustration of the radiant smiling Sun warming the mountain traveler who happily carries his folded cloak",
    word_count: 570,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-11-23",
    is_bedtime: true,
    quiz: [
      {
        question: "What contest did the North Wind and the Sun agree upon?",
        options: [
          "(Recommended) To see who could make the mountain traveler remove his cloak",
          "To see who could run around the earth faster",
          "To see who could melt a snowman"
        ],
        answerIndex: 0,
        hint: "They chose a traveler wearing a thick woolen cloak."
      },
      {
        question: "What happened when the North Wind blew with all his furious might?",
        options: [
          "(Recommended) The traveler clutched his cloak even tighter around himself",
          "The cloak flew away into the trees",
          "The traveler fell asleep"
        ],
        answerIndex: 0,
        hint: "The colder and harsher the wind blew, the tighter the man held on."
      },
      {
        question: "How did the Sun succeed in getting the traveler to remove his cloak?",
        options: [
          "By shining with steady, gentle, comforting warmth",
          "By throwing lightning bolts",
          "By asking the traveler nicely in words"
        ],
        answerIndex: 0,
        hint: "Gentle warmth made the traveler feel comfortable and choose to remove his cloak."
      }
    ],
    author: "Aesop (Ancient Greek Fable)",
    status: "published",
    content_notes: "Classic ethical masterpiece on gentleness over aggression. Perfect bedtime reading.",
    values: ["kindness", "patience", "empathy", "peace"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "solitary", meaning: "existing alone; single and isolated" },
      { word: "unyielding", meaning: "not giving way to pressure; firm and determined" },
      { word: "persuasion", meaning: "the act of convincing someone to do or believe something through reason or warmth" },
      { word: "radiant", meaning: "shining or glowing brightly with light or happiness" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What did the traveler do when the Sun shone warm light upon him?" },
      { tier: "Understand", question: "Why does harshness or shouting usually make people defensive instead of cooperative?" },
      { tier: "Apply", question: "When trying to resolve a disagreement with a friend, how can you use 'warmth' instead of 'wind'?" },
      { tier: "Evaluate", question: "Can you think of a historical or everyday leader who achieved great things through peace rather than force?" },
      { tier: "Create", question: "Draw a side-by-side picture: one showing a stormy angry cloud, and one showing a warm smiling sun." }
    ],
    reflection_prompt: "When you want someone to listen to you, try lowering your voice and speaking with gentle kindness. Watch how their ears open.",
    activity: "Practice using a calm, warm voice all evening, especially when asking for help or sharing toys.",
    mood: ["calm", "comforting", "happy"],
    teaser: "Tomorrow, discover what happened when four aging farm animals teamed up to become the Bremen Town Musicians!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- GRIMM FAIRY TALES ---
  {
    id: "grimm-bremen-musicians",
    slug: "the-bremen-town-musicians-and-the-power-of-teamwork",
    language: "en",
    title: "The Bremen Town Musicians",
    genre: "Fairy Tales",
    collection: "Grimm Fairy Tales",
    culture_region: "Germany / European Classic",
    age_group: "All",
    summary: "Four aging animals—a donkey, a hound, a cat, and a rooster—unite to find a new life of music and dignity, outsmarting bandits with their unforgettable midnight symphony.",
    keywords: ["bremen town musicians story", "grimm fairy tales teamwork", "animals outsmart robbers", "classic bedtime fairy tales"],
    tags: ["Fairy Tale", "Teamwork", "Friendship", "Courage", "Bedtime"],
    full_text: "Once upon a time, a hardworking donkey had carried sacks of grain to the mill for many long years. But as his strength waned with old age, his ungrateful master planned to sell him away. Sensation of danger in the air, the clever donkey decided to make his own way in the world. 'I will go to the free city of Bremen,' he thought cheerfully, 'and become a town musician!'\n\nAs he trotted along the highway, he found an old hunting hound lying by the roadside, panting wearily. 'Why are you sighing so, old fellow?' asked the donkey.\n\n'Ah,' sighed the hound, 'because I am old and can no longer sprint through the brush to catch foxes, my master wanted to get rid of me. So I ran away, but how shall I earn my bread?'\n\n'Come with me to Bremen!' brayed the donkey warmly. 'I shall play the lute, and you can beat the drums. Together, we shall make grand music!' The hound wagged his tail happily and joined him.\n\nA little further down the road, they met an old ginger cat sitting with a face as gloomy as three rainy days. 'What ails you, whiskered friend?' asked the donkey.\n\n'Now that I am getting gray, my teeth are worn down, and I prefer sitting by the stove purring instead of chasing mice, my mistress wanted to drown me!' wept the cat. 'Where shall I go?'\n\n'You understand night serenades!' said the donkey. 'Join our band and come to Bremen!' The cat beamed and trotted beside them.\n\nSoon, they passed a farmyard where a red rooster was crowing with all his might atop the gate: *Cock-a-doodle-doo!*\n\n'Why are you screeching so loudly?' asked the donkey.\n\n'Guests are coming for Sunday dinner, and the cook plans to put me in the soup pot tonight!' cried the rooster. 'So I am crowing while I still have my throat!'\n\n'Red-comb,' laughed the donkey, 'come with us! Anything is better than the soup pot! You have a magnificent voice; together our quartet will astonish the world!'\n\nBy nightfall, the four friends were deep in a dark, whispering forest, still far from Bremen. The donkey and hound curled beneath a large beech tree, while the cat climbed the lower branches, and the rooster flew to the very top.\n\nFrom the treetop, the rooster called down: 'Friends, I see a cozy warm light glowing through the trees not far away!'\n\nThey walked toward the light and discovered a sturdy cottage hidden in the woods. Peering through the illuminated window, the tall donkey saw a table laden with hot roasted potatoes, savory pies, and cider—and around it sat a band of rough robbers celebrating their spoils!\n\nThe four friends put their heads together and devised a brilliant plan to drive the robbers away.\n\nThe donkey placed his front hooves upon the windowsill. The hound leapt upon the donkey's back. The cat scrambled atop the hound's shoulders. And the rooster flew up and perched proudly upon the cat's head!\n\nAt a signal from the donkey, they began their grand symphony together with all their might! The donkey brayed: *HEE-HAW!* The hound barked: *WOOF-WOOF!* The cat meowed: *MEEE-OWWW!* And the rooster screeched: *COCK-A-DOODLE-DOO!* Then they plunged through the windowpane with a tremendous crash of glass!\n\nThe terrified robbers leapt from their seats, convinced that a four-headed forest monster had burst through the wall! Screaming in sheer panic, the bandits fled into the pitch-black forest and never dared return.\n\nThe four friends laughed with boundless joy. They sat down at the table and feasted upon the delicious pies until their bellies were round. Then they blew out the candles: the donkey slept in the warm straw, the dog behind the door, the cat by the warm hearth, and the rooster atop the roof beam.\n\nThey loved their cozy woodland home so dearly that they never needed to journey to Bremen after all, living together in peace, music, and lasting friendship for the rest of their happy days.",
    moral: "Even when others cast you aside, your unique talents and teamwork with loyal friends can create a wonderful new beginning.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of the four Bremen musicians stacked on each other's backs outside the cottage window",
    word_count: 720,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-11-24",
    is_bedtime: true,
    quiz: [
      {
        question: "Where were the four aging animals initially planning to travel together?",
        options: [
          "(Recommended) To the city of Bremen to become town musicians",
          "To the capital of France",
          "To a faraway zoo"
        ],
        answerIndex: 0,
        hint: "They wanted to form a band and make music in the free city of Bremen."
      },
      {
        question: "How did the four animals scare the robbers away from the cottage?",
        options: [
          "(Recommended) By stacking on top of one another and making a loud, wild symphony through the window",
          "By throwing stones at the roof",
          "By setting off fireworks"
        ],
        answerIndex: 0,
        hint: "They formed a tower of four creatures and made all their animal noises at once."
      },
      {
        question: "Why did the animals decide to stay in the forest cottage permanently?",
        options: [
          "Because they found comfort, food, and peace together in their new home",
          "Because the road to Bremen was blocked",
          "Because their instruments were broken"
        ],
        answerIndex: 0,
        hint: "They realized they already had everything they needed in their loving friendship."
      }
    ],
    author: "Brothers Grimm (German Fairy Tale Classic)",
    status: "published",
    content_notes: "Beloved fairy tale celebrating mutual aid, friendship among outcasts, and joyful resilience. Safe for all.",
    values: ["teamwork", "friendship", "courage", "gratitude", "loyalty"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "waned", meaning: "gradually decreased in vigor, strength, or extent" },
      { word: "serenades", meaning: "pieces of music sung or played in the open air, typically at night" },
      { word: "symphony", meaning: "an elaborate musical composition or harmonious combination of sounds" },
      { word: "laden", meaning: "heavily loaded or weighed down with something" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What instruments did the donkey and hound plan to play?" },
      { tier: "Understand", question: "Why did each animal feel unwanted by their old masters?" },
      { tier: "Apply", question: "How can working together as a team accomplish things that none of us could do alone?" },
      { tier: "Evaluate", question: "Why is it important to treat elderly animals and elderly humans with respect and gratitude?" },
      { tier: "Create", question: "Draw a funny concert poster advertising 'The Bremen Forest Quartet Live in Concert!'" }
    ],
    reflection_prompt: "Everyone has a unique 'voice' or talent. When we combine our differences with kindness, what beautiful music we make together!",
    activity: "Make animal sound effects with your family: pick an animal and make a gentle bedtime chorus together.",
    mood: ["happy", "comforting", "brave", "funny"],
    teaser: "Tomorrow, discover what happened when an Emperor ordered weavers to make him a magical suit of clothes!",
    series_id: null,
    part_number: null,
    reviewed: true
  },

  // --- HANS CHRISTIAN ANDERSEN ---
  {
    id: "andersen-emperors-new-clothes",
    slug: "the-emperors-new-clothes-and-the-voice-of-truth",
    language: "en",
    title: "The Emperor's New Clothes",
    genre: "Fairy Tales",
    collection: "Hans Christian Andersen",
    culture_region: "Denmark / European Classic",
    age_group: "All",
    summary: "Two cunning swindlers weave invisible clothes for a vain Emperor, claiming the cloth cannot be seen by anyone unfit for their post. Only an innocent child has the courage to speak the truth.",
    keywords: ["emperors new clothes story", "hans christian andersen honesty", "speaking truth to power fairy tale", "moral stories for children"],
    tags: ["Fairy Tale", "Honesty", "Courage", "Humor", "Truth"],
    full_text: "Many years ago, in a grand European capital, lived an Emperor who loved luxurious clothes more than anything else in the world. He did not care for his army, nor for the theatre, nor for caring for the poor; he cared only for parading in magnificent new garments. He had a different coat for every hour of the day.\n\nOne day, two cunning swindlers arrived in the city, posing as master weavers from a distant land. They claimed they could weave the most exquisite fabric ever beheld—a cloth whose colors and patterns were of peerless beauty. But its most miraculous quality, they declared, was that the fabric was completely invisible to anyone who was either hopelessly incompetent at their job or utterly stupid!\n\n'Magnificent!' thought the vain Emperor. 'If I wore clothes made of such fabric, I could instantly discover which ministers in my government are unfit for their offices, and I could tell the wise from the foolish! I must have this cloth woven at once!'\n\nThe Emperor gave the swindlers large sums of gold and baskets of pure silk and gold thread. The weavers set up two large looms in a royal chamber and pretended to work furiously day and night. But in truth, there was not a single thread upon the empty looms, and they tucked all the gold and silk safely inside their knapsacks!\n\nAfter a week, the Emperor sent his oldest, most trusted minister to check on the weavers' progress. The old minister entered the room and looked at the looms. His eyes widened in panic: *'Heaven forbid! I cannot see a single thread!'*\n\n'Look at this delicate azure weave!' said one swindler, pointing at the empty air. 'Do you not admire the radiant pattern, Lord Minister?'\n\nThe poor minister broke into a cold sweat. *'Am I stupid?'* he thought in dread. *'Am I unfit for my high office? I dare not let anyone know that I see nothing!'* So he nodded enthusiastically: 'Oh, it is breathtaking! The colors! The intricate gold embroidery! I shall tell His Majesty immediately!'\n\nEvery courtier and general sent by the Emperor did the exact same thing. No one wanted to appear foolish or incompetent, so everyone praised the invisible cloth to the skies: 'Superb! Magnificent!'\n\nFinally, the grand day arrived. The swindlers held up their empty hands, pretending to drape the Emperor in trousers, coat, and a long royal train. 'Behold, Sire! The garment is as light as a spider's web; you will feel as if you are wearing nothing at all!'\n\nThe Emperor posed before his tall mirror, turning this way and that in his underwear, pretending to admire the drape. 'How well it fits! How elegantly it hangs!' he exclaimed nervously, terrified of admitting he was stark naked.\n\nThe Emperor marched out into the public square beneath a grand velvet canopy to lead the royal procession. Thousands of citizens lined the streets, waving flags. Everyone had heard of the magic fabric, and no one wanted their neighbors to think they were stupid, so the whole crowd cheered: 'Oh! Look at the Emperor's new clothes! How marvelous! How divine!'\n\nThen, from the front row of the crowd, perched upon her father's shoulders, a little girl tilted her head in confusion. Pointing with her tiny finger, she called out in a clear, sweet voice that echoed over the cheering:\n\n*'But he isn't wearing anything at all!'*\n\nA stunned silence fell over the square. The father blushed and whispered, 'Listen to the innocent child!' Then one neighbor whispered to another: 'The child says he has no clothes on!'\n\n'He has no clothes on!' whispered someone else. And suddenly, the whole crowd of thousands of people erupted into a roar of laughter: *'He isn't wearing anything at all!'*\n\nThe Emperor shivered. He realized in his burning heart that the child was speaking the honest truth! But he was too proud to stop. So he held his head higher than ever, and his noble chamberlains walked behind him, diligently carrying a royal train that did not exist at all, while the honest truth echoed freely through the sunny streets.",
    moral: "It takes genuine courage to speak the truth when everyone else is pretending. Never let the fear of what others think silence your honesty.",
    image: "/images/stories/cinderella-glass-slipper.svg",
    image_alt: "Illustration of the innocent little girl pointing out the truth during the Emperor's grand procession",
    word_count: 730,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-11-25",
    is_bedtime: false,
    quiz: [
      {
        question: "What magic power did the swindlers claim their cloth possessed?",
        options: [
          "(Recommended) It was invisible to anyone stupid or unfit for their job",
          "It allowed the wearer to fly through clouds",
          "It never got dirty"
        ],
        answerIndex: 0,
        hint: "They claimed fools and incompetent people could not see it."
      },
      {
        question: "Why did all the ministers pretend they could see the cloth?",
        options: [
          "(Recommended) They were terrified of being called foolish or losing their jobs",
          "They genuinely saw the cloth",
          "They were playing a game"
        ],
        answerIndex: 0,
        hint: "Fear of judgment made everyone go along with the falsehood."
      },
      {
        question: "Who finally had the courage and innocence to tell the truth?",
        options: [
          "(Recommended) A little child in the crowd",
          "The Emperor's guard dog",
          "The court jester"
        ],
        answerIndex: 0,
        hint: "An innocent young child spoke what was obvious to her eyes."
      }
    ],
    author: "Hans Christian Andersen (Danish Fairy Tale Classic)",
    status: "published",
    content_notes: "World-famous masterpiece on herd mentality, peer pressure, and moral courage. Family safe.",
    values: ["honesty", "courage", "wisdom", "humility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "swindlers", meaning: "people who use deceit and trickery to deprive others of money or possessions" },
      { word: "incompetent", meaning: "not having the necessary skills or ability to do something successfully" },
      { word: "peerless", meaning: "unequaled, unrivaled, and without match in excellence" },
      { word: "procession", meaning: "a number of people moving forward in an orderly, formal manner" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What did the swindlers do with the silk and gold thread they were given?" },
      { tier: "Understand", question: "Why is 'peer pressure' so powerful in making people agree with things they know are untrue?" },
      { tier: "Apply", question: "Have you ever felt afraid to speak up when your friends were doing something silly or unkind?" },
      { tier: "Evaluate", question: "Why do young children often see and speak the truth more clearly than adults?" },
      { tier: "Create", question: "Write a short speech that the Emperor could give the next morning apologizing and thanking the honest child." }
    ],
    reflection_prompt: "Standing up for the truth can feel scary when you are the only one speaking. But one honest voice can set everyone free.",
    activity: "Discuss with your family a time when it took courage to tell the truth. Celebrate each other's honesty.",
    mood: ["funny", "brave", "curious"],
    teaser: "Tomorrow, discover what happened when a gentle prince was turned into a frog and waited by a stone well!",
    series_id: null,
    part_number: null,
    reviewed: true
  }
];

let added = 0;
for (const story of classicAnthologyStories) {
  if (!existingIds.has(story.id)) {
    existing.push(story);
    existingIds.add(story.id);
    added++;
    console.log(`[Classics Batch] Added: "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Classics Batch] Done! Added ${added} stories. Total stories in English: ${existing.length}`);
