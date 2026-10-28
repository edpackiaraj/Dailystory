import fs from 'node:fs';
import path from 'node:path';

const panchatantraBatch2 = [
  {
    id: "panchatantra-the-crows-and-the-black-snake",
    slug: "the-crows-and-the-black-snake",
    title: "The Crows and the Black Snake",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "India",
    age_group: "Below 13",
    summary: "A pair of devoted crows outsmart a greedy black snake living in the hollow of their banyan tree by using royal jewelry to lead the palace guards to its lair.",
    keywords: ["panchatantra fables", "crows and snake story", "clever crow fable", "intelligence over strength moral story"],
    tags: ["panchatantra", "fable", "birds", "cleverness", "problem solving"],
    full_text: `High in the sturdy branches of a great banyan tree on the outskirts of an ancient city, a pair of devoted crows had built their nest. Season after season, they tended their home with gentle care, watching the seasons turn from sweltering summer to the lush green of the monsoon.

Yet deep within the hollow at the base of the very same tree lived a long, venomous black snake. Each time the mother crow laid a clutch of speckled eggs, the snake slithered silently up the trunk while the parents were away foraging and devoured the nestlings.

Heartbroken and weeping bitter tears, the mother crow turned to her mate. "My dear husband, we cannot bear this sorrow another season. We must abandon our banyan tree and fly away to a distant forest where our children will be safe."

The father crow shook his head thoughtfully. "This ancient banyan has sheltered our family for generations. We should not surrender our home in despair before we have tried the power of counsel. Brute force we lack, but wisdom is a weapon greater than fangs. Let us visit our neighbor, the old jackal who lives near the riverbank. He has seen many winters and understands the ways of the world."

The two crows flew to the riverbank and sat beside the wise jackal, pouring out their grief. The jackal listened intently, his amber eyes reflecting the golden light of the setting sun.

"Do not weep, dear friends," the jackal said softly. "The strong may crush by sheer weight, but the clever can guide the strong to do their work for them. Tell me, do the queen and her maidens still bathe every morning in the calm waters of the lake near the king's palace?"

"They do," replied the father crow. "Every morning at dawn, surrounded by armed guards."

"Then your path is clear," the jackal smiled. "Tomorrow morning, wait until the queen removes her precious necklace of pearls and gold and lays it upon the stone pavilion on the shore. Swoop down boldly, seize the glittering chain in your beak, and fly slowly—not too fast, so the guards may keep you in sight. Fly straight toward your banyan tree, drop the necklace directly into the dark hollow where the snake sleeps, and watch from the highest branches."

The crows thanked their wise friend and waited eagerly for dawn.

As the morning mist lifted, Queen Priyamvada and her maidens arrived at the lake. Taking off her magnificent pearl necklace, she placed it upon a silk cushion on the stone steps before stepping into the water. In a sudden rush of black wings, the father crow descended, snatched the sparkling necklace in his beak, and let out a loud caw.

"Thief! A crow has stolen the queen's royal jewels!" cried the palace guards, raising their spears and racing across the meadow after the flying bird.

The crow flew steadily, pausing on low branches to ensure the breathless guards stayed close behind. When he reached the great banyan tree, he circled the trunk, hovered over the hollow at its roots, and dropped the shimmering pearl necklace deep inside.

Arriving at the foot of the tree, the royal guards peered into the dark crevice. Seeing the glint of pearls, a soldier reached down with a staff. Instantly, the enraged black snake hissed furiously and reared its hooded head to strike.

Defending themselves against the venomous serpent, the soldiers struck it with their spears until the danger was ended. They retrieved the queen's necklace unharmed and hurried back to the palace with their duty fulfilled.

From the highest branch, the crows watched their tree become peaceful and safe once more. They raised their young in joyful security, knowing that clear thought and clever planning could overcome even the most dangerous foe.`,
    moral: "Intelligence and careful planning can overcome brute force and seemingly impossible obstacles.",
    image: "/images/stories/crows-snake.webp",
    image_alt: "A clever crow carrying a glittering necklace over an ancient banyan tree.",
    reading_time: 4,
    listen_time: 5,
    publish_date: "2026-03-24",
    is_bedtime: false,
    author: "Vishnu Sharma (Traditional Panchatantra, Tantra 1: Mitra-bheda)",
    status: "published",
    content_notes: "Family-safe traditional animal fable. Violence neutralized to self-defense against snake.",
    values: ["curiosity", "teamwork", "courage", "responsibility"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "foraging", meaning: "searching broadly for wild food supplies" },
      { word: "counsel", meaning: "wise advice or guidance given after careful thought" },
      { word: "pavilion", meaning: "a light, ornamental open building used for shelter" },
      { word: "crevice", meaning: "a narrow opening or crack in a hard surface" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Where did the black snake make its home in the banyan tree?" },
      { tier: "Understand", question: "Why did the crows consult the wise jackal instead of trying to fight the snake themselves?" },
      { tier: "Apply", question: "When you face a problem that feels too big for you alone, who can you seek counsel from?" },
      { tier: "Evaluate", question: "Was the father crow right to stay and solve the problem rather than fleeing immediately?" },
      { tier: "Create", question: "What other peaceful plan could the forest animals have used to persuade the snake to leave?" }
    ],
    reflection_prompt: "Have you ever solved a difficult disagreement by using calm thinking rather than anger or shouting?",
    activity: "Draw the ancient banyan tree showing the nest high in the green leaves and the lake in the distance.",
    mood: ["brave", "comforting"],
    teaser: "Tomorrow, learn what happens when an arrogant elephant refuses to respect tiny neighbors.",
    quiz: [
      { question: "Who gave the crows the clever plan?", options: ["The King", "The wise Jackal", "The River Turtle", "The Palace Guard"], correct_index: 1 },
      { question: "What item did the father crow take to lead the guards?", options: ["A golden coin", "A pearl necklace", "A silver ring", "A silk scarf"], correct_index: 1 },
      { question: "What is the core moral of this Panchatantra fable?", options: ["Big muscles win every time", "Wisdom and planning defeat brute force", "Never fly near water", "Gold is always dangerous"], correct_index: 1 }
    ]
  },
  {
    id: "panchatantra-the-sparrow-and-the-rogue-elephant",
    slug: "the-sparrow-and-the-rogue-elephant",
    title: "The Sparrow, the Woodpecker, the Fly and the Frog",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "India",
    age_group: "Below 13",
    summary: "When a reckless, stomping elephant destroys a tiny sparrow's nest, four small forest creatures unite their unique talents to teach the giant creature a lesson in humility.",
    keywords: ["sparrow and elephant fable", "panchatantra teamwork story", "small creatures unite", "panchatantra moral tale"],
    tags: ["panchatantra", "teamwork", "justice", "animals", "empathy"],
    full_text: `In a quiet glade of a flowering sal forest, a pair of humble sparrows had built their soft grass nest on a low, sheltered bough. They took gentle pride in their humble shelter, and soon four tiny chicks chirped sweetly under their mother's warm wings.

One hot afternoon, a massive bull elephant named Dantamalla charged through the forest in a frenzy of wild pride. He tore branches from trees, trampled bushes underfoot, and trumpeted with arrogant defiance. Reaching the sal tree, the elephant seized the sturdy bough with his trunk and snapped it with a deafening crack.

The nest tumbled into the dust. Though the parent sparrows fluttered frantically into the sky, their fragile home was crushed beneath the elephant's heavy strides as he strode away without a backward glance.

The mother sparrow settled on a fallen twig, weeping inconsolably. Her shrill cries drew the attention of her dear friend, a woodpecker named Wood-Borer.

"Why do you weep so bitterly, sister sparrow?" asked the woodpecker gently.

"A reckless giant of an elephant has crushed my home in his senseless arrogance," wept the sparrow. "He believes that because he is enormous and we are tiny, our lives and homes have no value. If no one checks his pride, he will destroy every nest in the forest!"

The woodpecker nodded solemnly. "Grief alone will not restore what is lost, but united effort can establish justice. Let us visit my friend, the blue fly named Sharp-Ear. She has sharp senses and a swift flight."

Together, the sparrow and woodpecker visited the blue fly, who was filled with indignation upon hearing of the tragedy. "Brute strength cannot withstand coordinated action," said the fly. "Let us also consult the elderly frog, Cloud-Voice, who leads the amphibian council by the reed marsh."

Beside the calm waters of the lotus marsh, Old Cloud-Voice listened thoughtfully. "No single creature among us can match the elephant's raw bulk," the wise frog croaked, "yet each of us possesses a unique gift that the giant lacks. If we combine our abilities in sequence, we can gently guide this wanderer to the muddy clay pit where his pride will be cooled."

The four friends agreed upon a clever plan.

At noon, when the sun blazed hottest, Sharp-Ear the fly buzzed softly near the drowsy elephant's ears, singing a hypnotic, melodious humming song. Intrigued and relaxed by the soothing tune, Dantamalla closed his heavy eyes to listen.

At that instant, Wood-Borer the woodpecker tapped gently at the dry twigs nearby, startling the elephant so that he blinked and stepped backward, feeling disoriented in the glaring heat.

Parched with thirst from the blistering afternoon, the elephant strained his ears to find water. Deep in the canyon where a safe, shallow clay pool lay bordered by soft marsh grass, Old Cloud-Voice and hundreds of his frog brethren began to croak in unison: "Croak! Croak! Water is here!"

Hearing the familiar chorus of frogs, the thirsty elephant believed a great, cool lake lay ahead. He rushed down the grassy slope and plunged feet-first into the thick, sticky riverbed clay.

The elephant sank up to his knees in the safe, squelching mud. Try as he might, his massive weight held him firmly pinned, unable to advance or rampage.

From the surrounding trees, the tiny sparrow, woodpecker, fly, and frog gathered. 

"Dantamalla," spoke the mother sparrow in a clear, resonant voice. "Look at us. We are the smallest creatures in this woodland, yet together we have brought your rampaging feet to a standstill. Your great tusks and heavy steps gave you power, but power without compassion brings harm to all."

Humbled and exhausted, the elephant bowed his massive head in the cool mud. "I have acted foolishly and blinded myself with arrogance," he rumbled with genuine sorrow. "Forgive me, little ones. From this day forward, I shall walk through the forest with care, respecting every leaf, every branch, and every humble home."

The woodland creatures guided the village foresters to help haul the elephant safely free using thick hemp ropes, and from that day on, Dantamalla walked the sal forest as a gentle guardian of all creatures great and small.`,
    moral: "Even the smallest and humblest individuals can accomplish great deeds when they unite their strengths in harmony.",
    image: "/images/stories/sparrow-elephant.webp",
    image_alt: "Four small forest animals—a sparrow, a woodpecker, a fly, and a frog—standing together in friendship.",
    reading_time: 4,
    listen_time: 5,
    publish_date: "2026-03-25",
    is_bedtime: false,
    author: "Vishnu Sharma (Traditional Panchatantra, Tantra 1: Mitra-bheda)",
    status: "published",
    content_notes: "Classic fable teaching non-violence, unity, and respect for nature.",
    values: ["teamwork", "empathy", "courage", "responsibility"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "inconsolably", meaning: "in a manner so sad that nothing can provide comfort" },
      { word: "indignation", meaning: "righteous anger sparked by unfair treatment" },
      { word: "coordinated", meaning: "working together smoothly in an organized manner" },
      { word: "hypnotic", meaning: "captivating and producing a calm, peaceful trance" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Which four small animals united to confront the rogue elephant?" },
      { tier: "Understand", question: "Why was the elephant unable to defeat the combined efforts of four tiny creatures?" },
      { tier: "Apply", question: "How can students with different talents—such as drawing, writing, and organizing—work together on a school project?" },
      { tier: "Evaluate", question: "Did the forest creatures seek revenge, or did they seek to teach a lesson and restore balance?" },
      { tier: "Create", question: "Imagine an extra animal joined their team—what unique talent would a squirrel or an ant contribute?" }
    ],
    reflection_prompt: "Have you ever felt too small to make a difference, only to realize that working with friends gave you great strength?",
    activity: "Act out the four sounds of the animals: the sparrow's chirp, the fly's hum, the woodpecker's tap, and the frog's croak in rhythm.",
    mood: ["brave", "comforting", "happy"],
    teaser: "Tomorrow, discover what happens when a two-headed bird fails to share a single meal.",
    quiz: [
      { question: "What caused the sparrow great sorrow?", options: ["A sudden flood", "The elephant broke the nesting bough", "A hungry hawk", "A bad storm"], correct_index: 1 },
      { question: "What led the thirsty elephant to the clay pit?", options: ["The scent of fruit", "The synchronized croaking of the frogs", "A river map", "The call of another elephant"], correct_index: 1 },
      { question: "What did the elephant promise after being humbled?", options: ["To leave the forest forever", "To walk with care and respect every creature", "To dig a new lake", "To sleep only at night"], correct_index: 1 }
    ]
  },
  {
    id: "panchatantra-the-two-headed-bharunda-bird",
    slug: "the-two-headed-bharunda-bird",
    title: "The Two-Headed Bharunda Bird",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "India",
    age_group: "Below 13",
    summary: "A mythical bird with two heads sharing one stomach learns the tragic consequence of petty jealousy and selfish rivalry.",
    keywords: ["bharunda bird story", "panchatantra two headed bird", "fable of unity and sharing", "cooperation moral story"],
    tags: ["panchatantra", "sharing", "fable", "unity", "wisdom"],
    full_text: `Along the sunlit shores of a vast ocean lived a wondrous bird named Bharunda. Nature had endowed this magnificent creature with a unique form: it possessed two distinct heads, each with its own sharp eyes and curved beak, yet both heads were joined to a single sturdy body and shared a single stomach.

For many years, the two heads lived in peaceful companionship. When the left head looked toward the sapphire sea, the right head surveyed the emerald jungle. When the left head slept in the shade, the right head stayed alert, keeping watch against forest predators. They shared every joy and every flight above the billowing clouds.

One balmy afternoon, while strolling along the golden sand, the first head spotted a rare and luscious fruit fallen from the legendary Amrita tree. Its skin glowed with the color of ripe apricots, and its fragrance was sweeter than fresh honeycomb.

With a joyful cry, the first head scooped the fruit in its beak and began to savor its luscious sweetness. "Oh, how divine!" exclaimed the first head. "Never in all my days have I tasted anything so rich, fragrant, and delightful!"

The second head leaned down, its eyes gleaming with curiosity. "Brother, pray grant me a morsel! Let me taste this wondrous fruit with my own beak so that I too may experience its sweetness on my tongue."

The first head puffed up its feathers selfishly. "Why should you waste time tasting it with your beak? Have you forgotten our nature? We share one neck, one throat, and one single stomach. When I swallow this delicious fruit, its nourishment and strength will enter our common body just the same. Therefore, it makes no difference which beak enjoys the taste!"

With that, the greedy first head swallowed the remainder of the nectar-sweet fruit in one swift gulp, licking its beak with smug satisfaction.

The second head felt deeply wounded and insulted by this selfish dismissal. It said nothing aloud, but resentment took root in its heart. "He cared only for his own tongue's fleeting pleasure, ignoring our sacred partnership," the second head brooded silently. "He forgot that what hurts one inevitably affects both."

A few days later, while pecking among the rocky crags at the base of the cliffs, the second head noticed a dark, bitter fruit hanging from a poisonous creeping vine. Its stench was sharp and foul.

The second head bent low, about to seize the noxious berry in its beak.

Horrified, the first head shrieked, "Stop, brother! Do not touch that fruit! That is the deadly berry of the poison vine. If you swallow it, its venom will enter our bloodstream and our common body will perish!"

The second head glared with bitter defiance. "A few days ago, you proclaimed that it matters not which head eats, for both are fed by the same stomach. Now it is my turn to choose what enters our shared stomach! I shall eat this berry, if only to prove that you cannot trample my feelings without consequence!"

"Have you lost your mind?" cried the first head in terror. "A grudge is not worth our very life! Forgive my thoughtless greed, and let us live!"

Seeing the genuine remorse and terror in the first head's eyes, the second head hesitated with its beak inches above the poisonous fruit. The cool ocean breeze swept over their shared wings, carrying the sweet scent of the forest they both loved so dearly.

The second head let the bitter fruit drop onto the stony ground and kicked it far into the swirling waves below.

"You were foolish and selfish," whispered the second head quietly, "and in my anger, I was prepared to destroy us both just to win an argument. How blind we become when pride and spite govern our thoughts."

The first head bowed low against the second head, rubbing their feathered cheeks together in deep contrition. "Never again shall I hoard a joy for myself, for we are bound as one."

From that day forth, whenever the Bharunda bird found a berry, a seed, or a sweet fig, the two heads took turns sharing every bite, proving that unity thrives only when nurtured by mutual respect and generous hearts.`,
    moral: "Selfishness and petty revenge within a shared partnership lead only to mutual destruction.",
    image: "/images/stories/bharunda-bird.webp",
    image_alt: "A majestic two-headed Bharunda bird perched peacefully upon an ocean cliff.",
    reading_time: 4,
    listen_time: 4,
    publish_date: "2026-03-26",
    is_bedtime: true,
    author: "Vishnu Sharma (Traditional Panchatantra, Tantra 2: Mitra-samprapti)",
    status: "published",
    content_notes: "Neutralized traditional fable with a redemptive ending emphasizing forgiveness rather than death.",
    values: ["sharing", "empathy", "patience", "responsibility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "endowed", meaning: "provided naturally with a quality, ability, or asset" },
      { word: "luscious", meaning: "having a delicious, rich, and sweet taste" },
      { word: "contrition", meaning: "the state of feeling deeply sorry for doing something wrong" },
      { word: "residence", meaning: "the place where a person or animal lives" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What unique physical feature did the Bharunda bird possess?" },
      { tier: "Understand", question: "Why was the first head's argument about the shared stomach selfish and flawed?" },
      { tier: "Apply", question: "How does this story apply to brothers, sisters, or teammates who share a room or project?" },
      { tier: "Evaluate", question: "Was the second head's desire to eat the poison berry wise, and what made it change its mind?" },
      { tier: "Create", question: "Write a short poem or motto that the two heads could recite whenever they find food together." }
    ],
    reflection_prompt: "When someone hurts your feelings, is it better to seek revenge or to talk honestly about your feelings?",
    activity: "Fold a sheet of paper in half and draw two different friendly expressions on the heads of a single bird.",
    mood: ["calm", "comforting"],
    teaser: "Tomorrow, discover how a community of tiny mice rescued a herd of giant elephants from captivity.",
    quiz: [
      { question: "What did the first head refuse to share?", options: ["Fresh water", "A sweet Amrita fruit", "A soft feather", "A resting spot"], correct_index: 1 },
      { question: "Why did the second head almost eat the poisonous berry?", options: ["It was very hungry", "Out of spite and wounded pride", "It thought it was candy", "A predator chased it"], correct_index: 1 },
      { question: "What is the ultimate lesson of the Bharunda bird?", options: ["Two heads are always better than one", "Partnerships require sharing and mutual respect", "Never eat fruit by the sea", "Birds should fly alone"], correct_index: 1 }
    ]
  },
  {
    id: "panchatantra-the-elephants-and-the-grateful-mice",
    slug: "the-elephants-and-the-grateful-mice",
    title: "The King of the Mice and the Elephant Herd",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "India",
    age_group: "Below 13",
    summary: "A community of mice asks a majestic herd of elephants to take a different path to the lake; later, when the elephants are trapped in hunters' ropes, the mice repay the kindness.",
    keywords: ["mice and elephants panchatantra", "grateful mice fable", "small friends help big friends", "kindness returned story"],
    tags: ["panchatantra", "gratitude", "kindness", "friendship", "loyalty"],
    full_text: `In an ancient, forgotten city whose sandstone temples had long crumbled into quiet mounds of wild jasmine, a vast community of mice had established a peaceful kingdom. Beneath the flagstones and hollow marble pillars, thousands of little rodents lived in warmth and harmony, digging cozy burrows and gathering wild millet.

Not far from this ancient ruin lay a shimmering lake bordered by tall bamboo groves. One summer, when a prolonged drought dried up the surrounding pools, a great herd of elephants led by their wise king, Gajendra, journeyed toward the lake to drink.

As the herd thundered across the ruined city, their colossal feet unknowingly crushed hundreds of mouse burrows, causing panic and distress throughout the subterranean halls.

The elders of the mouse clan gathered in solemn council. "If the elephant herd marches through our city every day to reach the lake, our underground homes will be destroyed," said the mice.

Hiranyaka, the brave and articulate king of the mice, stepped forward. "Great creatures often act without malice simply because they cannot see what lies beneath their feet. Let us go directly to King Gajendra and speak with courtesy and truth."

Scurrying along the forest trail, Hiranyaka climbed upon a mossy boulder right before the towering elephant monarch. Standing upon his hind legs, the mouse bowed politely and addressed the giant.

"O noble king of the forest," squeaked Hiranyaka clearly, "I am Hiranyaka, sovereign of the mouse folk dwelling in the old city. When your mighty herd passes through our ruins, your heavy steps crush our burrows. We know you mean no harm, but we ask of your noble heart: would you graciously take the path that winds around the eastern ridge instead? If you show us this mercy, a day may come when we humble mice may return your kindness."

The younger elephants in the herd snickered in disbelief. "How could tiny creatures who fit inside our footprints ever help a mighty herd of elephants?" they laughed.

But King Gajendra was wise and honorable. He silenced the mockers with a wave of his majestic trunk. He looked down upon the tiny mouse king with respect.

"Noble Hiranyaka," said the elephant king kindly. "Every life is precious, and strength should protect rather than destroy. We shall gladly use the eastern trail from this day forward. Keep your city in peace."

Months passed, and the monsoon rains filled the forest with verdant life. One evening, a group of royal trappers arrived from the capital, spreading heavy hemp nets and thick braided ropes through the forest trails. When Gajendra and his herd walked down to the water, they became ensnared in the cunningly concealed snares.

Try as they might, the powerful elephants could not break free from the thick, knotted cords. The more they pulled, the tighter the ropes bound their legs. The forest echoed with their anxious trumpeting.

Hearing the distress calls from afar, Hiranyaka recognized the voice of King Gajendra. "Our benefactor is in peril!" shouted the mouse king. "Rally every family! Every sharp tooth must work tonight!"

Thousands of mice hurried across the moonlit glade like a silver wave. Reaching the trapped elephants, Hiranyaka called out, "Be calm, noble king! Your small friends have arrived!"

The mice swarmed over the thick hemp cords. With their razor-sharp incisors, thousands of little teeth gnawed through the heavy strands. Strand by strand, knot by knot, the thick ropes fell away in shredded fibers.

Within an hour, every elephant in the herd was completely free, well before the trappers returned at dawn.

King Gajendra lifted Hiranyaka gently with his trunk and placed him lovingly upon his broad forehead. "Forgive those among us who doubted you," the elephant king rumbled with deep gratitude. "Tonight we learned that a true friend, no matter how small, is a treasure beyond compare."

From that night onward, the elephant herd and the mouse kingdom lived in unbreakable alliance, each looking out for the other across the changing seasons.`,
    moral: "Kindness is never wasted; even the smallest friend may prove to be of the greatest help in times of need.",
    image: "/images/stories/mice-elephants.webp",
    image_alt: "A friendly elephant gently greeting a tiny brave mouse standing upon a rock.",
    reading_time: 4,
    listen_time: 5,
    publish_date: "2026-03-27",
    is_bedtime: true,
    author: "Vishnu Sharma (Traditional Panchatantra, Tantra 2: Mitra-samprapti)",
    status: "published",
    content_notes: "Gentle, uplifting traditional fable teaching mutual respect across differences.",
    values: ["gratitude", "kindness", "loyalty", "courage", "empathy"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "subterranean", meaning: "existing, occurring, or done under the earth's surface" },
      { word: "benefactor", meaning: "a person who gives help or kindness to another" },
      { word: "ensnared", meaning: "caught or trapped in a net or snare" },
      { word: "incisors", meaning: "narrow-edged teeth adapted for cutting and gnawing" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Why were the elephants walking through the ancient ruined city?" },
      { tier: "Understand", question: "Why did King Gajendra agree to change his herd's route when other elephants laughed?" },
      { tier: "Apply", question: "Can a young child help an adult or older sibling in meaningful ways? Give an example." },
      { tier: "Evaluate", question: "What made the mice so effective at freeing the elephants when the elephants' own strength failed?" },
      { tier: "Create", question: "Design a friendship medal that the mice and elephants could present to each other." }
    ],
    reflection_prompt: "Has someone smaller or younger than you ever helped you solve a problem that you couldn't handle alone?",
    activity: "Practice cutting yarn or string with safety scissors, then see how quickly small hands can untie loose knots.",
    mood: ["happy", "comforting", "brave"],
    teaser: "Tomorrow, discover what happens when three clever rogues convince a scholar that his goat is a dog.",
    quiz: [
      { question: "What favor did the mouse king ask of the elephant king?", options: ["To bring food", "To take a different path to the lake", "To fight the cats", "To build new houses"], correct_index: 1 },
      { question: "How did the mice free the trapped elephants?", options: ["They dug a tunnel", "They gnawed through the thick ropes", "They frightened the hunters away", "They pushed the trees"], correct_index: 1 },
      { question: "What is the primary moral of the story?", options: ["Elephants should stay near water", "Never help strangers", "Small friends can be of great help", "Ropes are easily broken"], correct_index: 2 }
    ]
  },
  {
    id: "panchatantra-the-brahmin-and-the-three-rogues",
    slug: "the-brahmin-and-the-three-rogues",
    title: "The Brahmin and the Three Rogues",
    genre: "Humorous Tales",
    collection: "Panchatantra",
    culture_region: "India",
    age_group: "Below 13",
    summary: "Three cunning tricksters conspire to trick a scholar into abandoning a healthy goat by repeatedly insisting it is an unclean dog.",
    keywords: ["brahmin and three rogues", "panchatantra goat dog story", "peer pressure moral story", "critical thinking fable"],
    tags: ["panchatantra", "humor", "critical thinking", "peer pressure", "wisdom"],
    full_text: `In a quiet village nestled in the foothills lived an honest scholar named Mitra Sharma. He was well-versed in ancient texts and respected for his learning, yet he had one peculiar weakness: he cared deeply about what others said and was easily swayed by repeated opinions.

One auspicious autumn morning, Mitra Sharma performed a ceremonial blessing for a wealthy landowner in a neighboring hamlet. In gratitude, the generous host gifted the scholar a plump, healthy young goat with sleek white fur.

Delighted with the gift, Mitra Sharma hoisted the quiet goat gently across his broad shoulders and set off on foot along the dusty high road back to his home village.

Along the same road, three lazy rogues were sitting under the shade of a tamarind tree, having spent their day without earning a single copper coin. Seeing the scholar approaching with a fine, healthy animal, their eyes lit up with mischief and greed.

"Look at that plump goat!" whispered the first rogue. "If we could obtain it, what a grand feast we could prepare tonight!"

"He is strong and holds it securely," muttered the second. "We cannot overpower him without raising the alarm."

"Force is the weapon of fools," smiled the third rogue cunningly. "Let us employ psychology. People believe what they hear repeated by many voices. We shall position ourselves along the road at separate intervals and each tell him the exact same unbelievable tale. Watch how quickly doubt conquers knowledge."

The three tricksters separated quickly.

Mitra Sharma walked merrily along, humming a peaceful melody, when the first rogue stepped out from behind a hedge. The rogue bowed low and feigned utter astonishment.

"Greetings, revered scholar!" cried the man, covering his mouth in theatrical disgust. "Pardon my boldness, but why is a dignified scholar carrying an unclean, mangy stray dog upon his sacred shoulders?"

Mitra Sharma frowned with annoyance. "Are you blind, fellow? Can you not distinguish between a plump white goat and a stray dog? Open your eyes before you speak nonsense!"

The first rogue shrugged apologetically. "Be not angry, sir. If you choose to carry a dog, that is your affair. I only spoke what my eyes witnessed." He walked away with a knowing chuckle.

Mitra Sharma shook his head, adjusted the goat on his shoulders, and walked on. Yet a faint seed of bewilderment had been planted in his thoughts.

Half a mile further along the winding trail, the second rogue emerged from a grove of mango trees. Stopping in his tracks, he gasped in dramatic shock.

"Heavens preserve us!" shouted the second rogue. "Revered pandit, what strange vow has compelled a holy man of your stature to carry a dead calf upon his back in broad daylight? The whole village will mock you!"

Mitra Sharma turned pale with indignation. "What madness has gripped travelers today? This is no calf! It is a living, breathing young goat gifted to me this very morning!"

"Sir, there is no need to shout at me," replied the rogue calmly. "Touch its ears and feel its hooves. If you cannot tell a dead calf from a goat, pray do not blame honest passersby!" And he strolled off, shaking his head in pity.

Now Mitra Sharma felt genuine anxiety gnawing at his stomach. He set the goat down upon the road, looked into its gentle eyes, stroked its fleece, and felt its tiny horns. "It certainly looks like a goat, feels like a goat, and bleats like a goat," he muttered to himself. "Yet two independent travelers have seen something entirely different. Could a demon have bewitched this creature?"

Reluctantly, he lifted the goat once more and walked with hesitant, cautious steps.

Near the crossroads entering his home village, the third rogue was leaning against a milestone. As the scholar drew near, the rogue burst into loud, mocking laughter.

"Look at the village scholar!" the man shouted to the empty fields. "He carries a donkey on his back instead of riding it! What a comical sight!"

That was the final straw. Mitra Sharma's confidence shattered completely.

"Three different strangers in three different places cannot all be mistaken!" gasped the terrified scholar. "This creature is truly a shape-shifting goblin that transforms into a dog, a calf, and a donkey to deceive travelers! If I carry it into my home, it will bring ruin upon my household!"

In a blind panic, Mitra Sharma dropped the goat into the road, lifted the hem of his robe, and ran as fast as his legs could carry him all the way to his house, bolting his front door behind him.

The three rogues emerged from their hiding places, embraced each other with roar of laughter, and led the gentle white goat away to enjoy their ill-gotten prize.`,
    moral: "Do not let repeated rumors or peer pressure make you doubt what you know to be true with your own senses.",
    image: "/images/stories/brahmin-rogues.webp",
    image_alt: "A confused scholar carrying a goat while three tricksters smile from behind the trees.",
    reading_time: 4,
    listen_time: 5,
    publish_date: "2026-03-28",
    is_bedtime: false,
    author: "Vishnu Sharma (Traditional Panchatantra, Tantra 3: Kakolukiyam)",
    status: "published",
    content_notes: "Classic humorous tale highlighting independent critical thinking against peer pressure.",
    values: ["courage", "curiosity", "responsibility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "auspicious", meaning: "promising success or favorable outcomes" },
      { word: "feigned", meaning: "faked or pretended to feel something" },
      { word: "bewilderment", meaning: "a feeling of being completely puzzled or confused" },
      { word: "shape-shifting", meaning: "able to change one's physical form or appearance magically" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What animal was the scholar actually carrying upon his shoulders?" },
      { tier: "Understand", question: "Why did the scholar abandon the goat even though he could feel it was a goat?" },
      { tier: "Apply", question: "When multiple people online or in a group repeat a rumor, how should you verify the truth?" },
      { tier: "Evaluate", question: "What should Mitra Sharma have done to protect himself from being deceived?" },
      { tier: "Create", question: "Write a witty reply the scholar could have said to the third rogue to test his honesty." }
    ],
    reflection_prompt: "Have you ever doubted something you knew was true just because several other people disagreed with you?",
    activity: "Play the 'Fact or Opinion' game with a friend by writing down 3 observable facts and 3 tricky rumors.",
    mood: ["funny", "curious"],
    teaser: "Tomorrow, discover what happens when a clever jackal asks a mysterious dark cave to greet him aloud.",
    quiz: [
      { question: "What did the first trickster claim the goat was?", options: ["A wild wolf", "A mangy dog", "A heavy sack of stones", "A baby tiger"], correct_index: 1 },
      { question: "Why did the tricksters succeed in their scheme?", options: ["They used magic", "They repeated the same lie independently until doubt set in", "They stole the goat at night", "They paid the scholar"], correct_index: 1 },
      { question: "What is the critical thinking lesson taught by this fable?", options: ["Never buy goats", "Do not let peer pressure overrule evidence and clear observation", "Always run away from strangers", "Donkeys are better than goats"], correct_index: 1 }
    ]
  },
  {
    id: "panchatantra-the-cave-that-talked-back",
    slug: "the-cave-that-talked-back",
    title: "The Cave That Talked Back",
    genre: "Humorous Tales",
    collection: "Panchatantra",
    culture_region: "India",
    age_group: "Below 13",
    summary: "When a ravenous lion hides inside a jackal's cave, the quick-witted jackal asks the cave why it has not welcomed him home as usual, exposing the predator's presence.",
    keywords: ["cave that talked panchatantra", "clever jackal and lion fable", "presence of mind story", "quick wit animal fable"],
    tags: ["panchatantra", "humor", "wit", "cleverness", "presence of mind"],
    full_text: `In a dense jungle surrounded by rocky cliffs lived an aging lion named Kharanakhara. Though he possessed mighty claws and a thunderous roar, his joints had grown stiff with age, making it difficult for him to chase swift deer across the open plains.

One evening, after hunting all day without catching a single meal, the famished lion stumbled upon a large, inviting cave dug into the side of a sandstone bluff.

Peering inside, the lion saw that the cave was clean, cozy, and clearly inhabited by some forest animal. "Whoever lives here is sure to return at sunset to sleep," thought the lion, his stomach rumbling. "I shall slip inside, hide silently in the darkest corner, and feast when the owner steps through the entrance."

The lion crept inside and crouched low behind a rocky ledge, holding his breath and keeping his golden eyes fixed on the entrance.

The cave belonged to a shrewd and observant jackal named Dadhipuccha. As twilight deepened and the stars began to twinkle in the purple sky, the jackal trotted toward his home, looking forward to a restful night.

Reaching the mouth of the cave, the jackal stopped abruptly. His keen eyes noticed large, deep paw prints pressed into the soft sand, leading straight into the dark cavern.

He looked around carefully. There were clear footprints going in, but not a single footprint leading out.

"Danger lurks within," the jackal thought to himself, his heart beating fast. "A great predator has entered my home and is waiting to ambush me. If I enter blindly, I am doomed. Yet if I run away without being certain, I may abandon my warm cave over a false alarm. I must devise a test that forces the intruder to reveal himself without putting me in harm's way."

Standing at a safe distance from the entrance, well out of pouncing range, the jackal cleared his throat and shouted loudly toward the dark opening:

"O Cave! Greetings, my wonderful Cave! O Cave! Why do you maintain such an icy silence tonight?"

Inside the darkness, the lion held his breath, wondering what was happening.

Receiving no reply, the jackal raised his voice even louder: "O beloved Cave! Have you forgotten the solemn covenant we made long ago? Did you not promise that every evening when I return from foraging, you would call out a warm greeting to welcome me home, and only then would I enter? If you refuse to speak to me tonight as you always do, I shall turn around right now and find shelter in another cave!"

Crouched in the shadows, the hungry lion became anxious. "Aha!" thought the foolish lion. "This cave must indeed speak aloud to welcome the jackal every evening! It must be silent right now only because it is terrified of my royal presence. If the cave does not reply, the jackal will walk away and my dinner will escape! I must answer in place of the cave!"

Clearing his throat, the lion threw back his mane and roared from the depths of his belly: "WELCOME HOME, DEAR JACKAL! ENTER FREELY AND REST!"

The lion's massive roar echoed off the stone walls like a thunderclap, shaking the dust from the ceiling and echoing for miles across the quiet forest. Several birds flew from the trees in panic.

Outside, the jackal chuckled softly, shaking his head at the lion's gullibility.

"O foolish king of the forest!" called out the jackal merrily. "Since the dawn of creation, who has ever heard of a cave made of stone that speaks with a living voice? Thank you for warning me with your own roar!"

With a joyful leap, the clever jackal bounded away into the moonlit forest, leaving the hungry lion to wait in the empty cave with nothing but an empty stomach and bruised pride.`,
    moral: "Presence of mind and quick wit can rescue you from the most dangerous traps.",
    image: "/images/stories/cave-talked.webp",
    image_alt: "A clever jackal standing outside a dark cave under a starry night sky.",
    reading_time: 4,
    listen_time: 4,
    publish_date: "2026-03-29",
    is_bedtime: false,
    author: "Vishnu Sharma (Traditional Panchatantra, Tantra 3: Kakolukiyam)",
    status: "published",
    content_notes: "Classic humorous trickster tale emphasizing observation and presence of mind.",
    values: ["curiosity", "courage", "responsibility"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "famished", meaning: "extremely hungry and lacking food" },
      { word: "covenant", meaning: "a formal, solemn agreement or promise" },
      { word: "gullibility", meaning: "a tendency to be easily persuaded or tricked into believing something" },
      { word: "presence of mind", meaning: "the ability to remain calm and think clearly during an emergency" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What clue alerted the jackal that a predator was inside his cave?" },
      { tier: "Understand", question: "Why did the lion believe that the stone cave could actually speak?" },
      { tier: "Apply", question: "When entering an unfamiliar or potentially unsafe situation, what kind of cautious checks can you perform?" },
      { tier: "Evaluate", question: "Why was the jackal's test safer than peeking directly inside the cave?" },
      { tier: "Create", question: "What other question could the jackal have asked to trick the hidden lion?" }
    ],
    reflection_prompt: "Can you think of a time when noticing a small clue or detail helped you avoid a mistake or accident?",
    activity: "Make echo sounds in a quiet room or hallway to hear how sounds bounce off hard surfaces.",
    mood: ["funny", "brave"],
    teaser: "Tomorrow, discover what happens when an ambitious donkey dresses in a tiger's skin.",
    quiz: [
      { question: "What footprints did the jackal find at the cave entrance?", options: ["Footprints going in and out", "Footprints going in, but none coming out", "Rabbit tracks", "No tracks at all"], correct_index: 1 },
      { question: "How did the jackal trick the lion into revealing himself?", options: ["He lit a smoke fire", "He asked the cave why it wasn't speaking its usual greeting", "He threw a stone inside", "He called his friends"], correct_index: 1 },
      { question: "What is the primary moral of the story?", options: ["Never live in caves", "Presence of mind overcomes danger", "Lions are the smartest animals", "Always walk backward"], correct_index: 1 }
    ]
  },
  {
    id: "panchatantra-the-donkey-in-the-tigers-skin",
    slug: "the-donkey-in-the-tigers-skin",
    title: "The Donkey in the Tiger's Skin",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "India",
    age_group: "Below 13",
    summary: "A washerman drapes an old tiger skin over his thin donkey so it can graze freely in villagers' cornfields, but the donkey's sudden bray reveals his true identity.",
    keywords: ["donkey in tigers skin fable", "panchatantra imposter tale", "false appearances story", "actions reveal character moral"],
    tags: ["panchatantra", "authenticity", "fable", "humor", "honesty"],
    full_text: `In a quiet village beside a sparkling river lived a poor washerman named Shuddhapata. He owned an old gray donkey who had served him faithfully for many years, carrying heavy bundles of laundry between the village huts and the washing ghats.

As winter set in, fodder became scarce, and the poor donkey grew so emaciated that his ribs could be counted beneath his gray coat. The washerman loved his beast of burden and grieved to see him hungry, yet he lacked the money to purchase oats or hay.

One afternoon, while collecting firewood in the forest, the washerman discovered the dried skin of a royal Bengal tiger that had perished of natural old age. The striped pelt was intact, with ferocious whiskers and gleaming markings.

An ingenious, mischievous idea flashed into the washerman's mind. "If I drape this magnificent tiger skin over my poor donkey at twilight and lead him into the rich barley and cornfields belonging to the neighboring farmers, the watchmen will flee in terror believing a wild beast has descended from the hills! My donkey can feast to his heart's content, and no one will dare lay a hand upon him!"

That evening, the washerman carefully draped the tiger skin over the donkey, securing it snugly beneath his belly. He led the disguised creature to the edge of a lush, emerald-green barley field and let him loose.

Seeing the striped silhouette moving gracefully through the tall crops, the field watchmen shrieked in horror. "A royal tiger has invaded the village fields! Save yourselves!" Dropping their bamboo torches and wooden staves, the watchmen scrambled to safety and locked themselves inside their stone watchtowers.

For hours, the donkey feasted upon the tender, sweet barley shoots. His belly grew plump and round, his sunken eyes regained their sparkle, and his strength returned. Before dawn, the washerman led him quietly back home and removed the pelt.

This nightly deception continued for several weeks. The donkey grew sleek, strong, and vigorous, while the terrified farmers kept their distance, whispering legends about the mysterious tiger that devoured only barley and tender wheat.

One moonlight night, while the disguised donkey was grazing contentedly in a distant pasture, the faint, resonant bray of another donkey echoed across the valley from a neighboring farm: "Hee-haw! Hee-haw!"

Hearing the familiar music of his own kind, the donkey's ears pricked up with uncontrollable excitement. His heart swelled with joy. For weeks he had maintained complete silence, suppressing his natural voice beneath the heavy tiger fur.

Unable to restrain himself a moment longer, the donkey threw back his head, lifted his tail, and unleashed his loudest, most joyful bray: "HEE-HAW! HEE-HAW! HEE-HAW!"

Up in the stone watchtower, the shivering farmers froze. They looked at each other in utter bewilderment.

"Listen!" whispered an old farmer. "Does a royal tiger bray like an ass?"

"That is no tiger at all!" shouted another watchman, rubbing his eyes in anger. "That is merely a washerman's donkey draped in a tiger's pelt! He has fooled us for a month and devoured our finest harvest!"

Armed with sturdy wooden sticks, the farmers rushed down from the tower. Hearing the shouting, the foolish donkey tried to run, but the heavy pelt slipped around his hooves, tripping him up.

The farmers chased the imposter out of the field, giving him a sound scolding with their sticks until he galloped all the way back to the washerman's courtyard, thoroughly cured of playing the role of a ferocious beast.

From that night forward, the donkey was content to graze on simple grass by the riverbank, having learned that wearing another's skin can never change who you truly are inside.`,
    moral: "Fine clothes and false appearances can deceive for a moment, but words and actions will always reveal your true nature.",
    image: "/images/stories/donkey-tiger.webp",
    image_alt: "A donkey wearing a tiger skin standing in a moonlit barley field.",
    reading_time: 4,
    listen_time: 4,
    publish_date: "2026-03-30",
    is_bedtime: false,
    author: "Vishnu Sharma (Traditional Panchatantra, Tantra 4: Labdhapranasam)",
    status: "published",
    content_notes: "Classic humorous animal fable teaching honesty and authenticity.",
    values: ["honesty", "humility", "responsibility"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "emaciated", meaning: "abnormally thin and weak, especially from lack of food" },
      { word: "ingenious", meaning: "clever, original, and inventive" },
      { word: "suppressing", meaning: "forcibly holding back or keeping from expressing" },
      { word: "imposter", meaning: "a person or animal who pretends to be someone else to deceive" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Why did the washerman put a tiger skin on his donkey?" },
      { tier: "Understand", question: "Why was the donkey able to fool the farmers for weeks, and what finally ruined the disguise?" },
      { tier: "Apply", question: "Why is it always better to be honest about your true abilities rather than pretending to be an expert?" },
      { tier: "Evaluate", question: "Was the washerman's plan harmless, or did it unfairly harm the hardworking farmers?" },
      { tier: "Create", question: "How could the washerman have helped his donkey find food honestly without stealing crops?" }
    ],
    reflection_prompt: "Have you ever felt tempted to pretend to like something or act like someone else just to impress others?",
    activity: "Discuss what qualities make each person unique and why authenticity is something to celebrate.",
    mood: ["funny", "curious"],
    teaser: "Tomorrow, discover what happened when three scholars with great learning met a fourth friend with simple common sense.",
    quiz: [
      { question: "What disguise did the donkey wear?", options: ["A lion's mane", "A tiger's skin", "A bear's coat", "A leopard's spots"], correct_index: 1 },
      { question: "What betrayed the donkey's true identity?", options: ["He lost his tail", "He brayed aloud in response to another donkey", "A dog barked at him", "The skin blew away in the wind"], correct_index: 1 },
      { question: "What is the moral of the donkey in the tiger's skin?", options: ["Never bray at night", "False appearances cannot hide your true nature", "Barley fields are dangerous", "Tigers never eat wheat"], correct_index: 1 }
    ]
  },
  {
    id: "panchatantra-hundred-wit-thousand-wit-and-single-wit",
    slug: "hundred-wit-thousand-wit-and-single-wit",
    title: "Hundred-Wit, Thousand-Wit, and Single-Wit",
    genre: "Fables",
    collection: "Panchatantra",
    culture_region: "India",
    age_group: "Below 13",
    summary: "Two proud fish boasting of hundreds of escape strategies hesitate when fishermen arrive, while a humble frog with one simple plan saves himself immediately.",
    keywords: ["hundred wit thousand wit single wit", "panchatantra fish and frog", "common sense over overthinking", "panchatantra practical wisdom"],
    tags: ["panchatantra", "wisdom", "common sense", "decision making", "fable"],
    full_text: `In a tranquil, lotus-dappled pond tucked away in a verdant valley lived two splendid fish and a humble frog who had formed a close companionship.

The first fish was named Shatabuddhi, which means "Owner of a Hundred Wits." He had dazzling silver scales, long flowing fins, and an immense pride in his intellectual abilities.

The second fish was named Sahasrabuddhi, which means "Master of a Thousand Wits." His golden scales shimmered in the sunlight, and he claimed to have studied every current, eddy, and escape maneuver known to aquatic life.

The frog was named Ekabuddhi, meaning "Possessor of a Single Wit." He was a modest green frog with bumpy skin, who made no pretense of great learning, relying instead upon simple observation and clear common sense.

Every afternoon, the three friends gathered beside a submerged mossy rock to discuss the affairs of the pond, the change in the tides, and the wisdom of the world.

One golden evening at sunset, as the three friends conversed, two fishermen carrying heavy woven nets and wicker baskets walked along the pond's grassy bank.

One fisherman pointed at the clear water. "Look, brother! This secluded pond is teeming with large, plump fish! Tomorrow morning at dawn, we shall return with our finest drag-nets and harvest every fish in this water."

"Agreed," replied his companion. "We shall bring the weighted nets and leave not a single pool unsearched."

The two fishermen continued on their way toward the village.

Trembling with fear, Ekabuddhi the frog turned to his two fish companions. "Friends! Did you hear what those fishermen said? They will return at the break of dawn with deadly nets! Our pond is in mortal peril. What shall we do? Should we flee tonight through the narrow stream that connects our pond to the great river?"

Shatabuddhi, the fish of a hundred wits, laughed smoothly and flicked his tail with disdain. "Calm yourself, my dear little frog! Do not panic over mere words spoken by passing men. The world is full of boastful talk that comes to nothing. Even if they return with nets, I possess a hundred clever maneuvers. I can dart through the reeds, bury myself in the silt, or jump over the floats. I shall easily save us all!"

Sahasrabuddhi, the fish of a thousand wits, swelled his gills proudly. "Your hundred wits are commendable, brother, but my thousand wits are supreme! I know the ancient arts of swimming backward, twisting in figure-eights, and feigning death so that fishermen toss you back. Fleeing our ancestral home over a rumor is beneath our dignity. Stay put and rely on our superior intellect!"

Ekabuddhi the frog listened thoughtfully to their grand speeches. He looked at the darkening sky, then at the shallow exit stream whose waters were already beginning to drop.

"Dear friends," said the humble frog gently. "You have hundreds and thousands of wits, but I have only one simple wit. And my single wit tells me that when danger announces its arrival for dawn, the only sensible choice is to be somewhere else when dawn arrives."

That very evening, before the moon rose high, Ekabuddhi called his wife and little tadpoles. Swimming quietly through the shallow outlet stream, the frog family migrated to a deep, safe river well beyond the fishermen's reach.

At dawn, as the morning mist hovered over the lotus pond, the fishermen arrived carrying their massive, weighted drag-nets. They cast the heavy cords into the water, sweeping from bank to bank.

Shatabuddhi attempted his hundred clever maneuvers: he darted left, dived into the weeds, and twisted against the mesh, but the fine netting caught him securely. Sahasrabuddhi deployed his thousand intricate swimming patterns, but the heavy lead weights pinned the net firmly to the pond floor.

Both proud fish were hauled ashore in the fishermen's overflowing basket.

Sitting safely upon a lily pad in the great river, Ekabuddhi watched the fishermen pass along the distant road, carrying their heavy load toward the market.

"Intellect and knowledge are wonderful gifts," murmured the frog to his children, "yet when danger approaches, a single ounce of decisive action is worth more than a thousand brilliant theories left untested."`,
    moral: "Simple common sense and timely, decisive action are far more valuable than overthinking and boastful theories.",
    image: "/images/stories/three-wits.webp",
    image_alt: "Two shimmering fish and a thoughtful green frog conversing by a mossy rock in a lotus pond.",
    reading_time: 4,
    listen_time: 5,
    publish_date: "2026-03-31",
    is_bedtime: false,
    author: "Vishnu Sharma (Traditional Panchatantra, Tantra 5: Aparikshitakarakam)",
    status: "published",
    content_notes: "Classic fable teaching practical common sense over paralysis by analysis.",
    values: ["responsibility", "curiosity", "patience"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "tranquil", meaning: "calm, peaceful, and quiet without disturbance" },
      { word: "intellectual", meaning: "relating to the ability to think, reason, and understand" },
      { word: "maneuver", meaning: "a movement or series of moves requiring skill and care" },
      { word: "decisive", meaning: "having the ability to make decisions quickly and effectively" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What were the names and meanings of the two fish and the frog?" },
      { tier: "Understand", question: "Why did the two fish refuse to leave the pond despite the fishermen's clear threat?" },
      { tier: "Apply", question: "Have you ever overthought a simple decision (like picking a book or doing a chore) until it was too late?" },
      { tier: "Evaluate", question: "Why was the frog's 'single wit' more effective in an emergency than a 'thousand wits'?" },
      { tier: "Create", question: "Invent a new title and motto for Ekabuddhi the frog to teach young pond creatures." }
    ],
    reflection_prompt: "When you know a test or deadline is coming, is it better to make grand plans to study later, or take simple action right away?",
    activity: "Practice making quick decisions by setting a 10-second timer to pick between two good options.",
    mood: ["curious", "brave"],
    teaser: "Tomorrow, discover another timeless fable from our global treasury.",
    quiz: [
      { question: "How many wits did the green frog claim to have?", options: ["Ten wits", "A hundred wits", "A single wit", "Zero wits"], correct_index: 2 },
      { question: "What did the frog do as soon as night fell?", options: ["Hid under a rock", "Migrated with his family to a safe river", "Attacked the fishermen's nets", "Went to sleep"], correct_index: 1 },
      { question: "What is the core lesson of the story?", options: ["Fish are better swimmers than frogs", "Decisive common sense is better than overthinking theories", "Never listen to fishermen", "Only live in small ponds"], correct_index: 1 }
    ]
  }
];

const enStoriesPath = path.join(process.cwd(), 'data', 'en', 'stories.json');
const current = JSON.parse(fs.readFileSync(enStoriesPath, 'utf8'));

let added = 0;
for (const story of panchatantraBatch2) {
  if (!current.some(s => s.id === story.id || s.slug === story.slug)) {
    current.push(story);
    added++;
    console.log(`[Panchatantra Batch 2] Added: "${story.title}"`);
  } else {
    console.log(`[Panchatantra Batch 2] Skipped (already exists): "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(current, null, 2), 'utf8');
console.log(`[Panchatantra Batch 2] Successfully merged! Added ${added} new canonical stories. Total in English: ${current.length}`);
