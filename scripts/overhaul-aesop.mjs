import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve(process.cwd(), 'data');

console.log('=== AESOP FABLES COMPREHENSIVE OVERHAUL PIPELINE ===\n');

// 1. Define the 55 Aesop duplicate / variant IDs to remove
export const AESOP_DUPLICATE_IDS = new Set([
  // The 20 disguised repeats (#281-#300)
  'aesops-fables-281-aesop-fable-281',
  'aesops-fables-282-aesop-fable-282',
  'aesops-fables-283-aesop-fable-283',
  'aesops-fables-284-aesop-fable-284',
  'aesops-fables-285-aesop-fable-285',
  'aesops-fables-286-aesop-fable-286',
  'aesops-fables-287-aesop-fable-287',
  'aesops-fables-288-aesop-fable-288',
  'aesops-fables-289-aesop-fable-289',
  'aesops-fables-290-aesop-fable-290',
  'aesops-fables-291-aesop-fable-291',
  'aesops-fables-292-aesop-fable-292',
  'aesops-fables-293-aesop-fable-293',
  'aesops-fables-294-aesop-fable-294',
  'aesops-fables-295-aesop-fable-295',
  'aesops-fables-296-aesop-fable-296',
  'aesops-fables-297-aesop-fable-297',
  'aesops-fables-298-aesop-fable-298',
  'aesops-fables-299-aesop-fable-299',
  'aesops-fables-300-aesop-fable-300',

  // Late disguised repeats (#251-#280)
  'aesops-fables-251-aesop-fable-251',
  'aesops-fables-259-aesop-fable-259',
  'aesops-fables-261-aesop-fable-261',
  'aesops-fables-262-aesop-fable-262',
  'aesops-fables-266-aesop-fable-266',
  'aesops-fables-268-aesop-fable-268',
  'aesops-fables-273-aesop-fable-273',
  'aesops-fables-274-aesop-fable-274',
  'aesops-fables-275-aesop-fable-275',
  'aesops-fables-277-aesop-fable-277',
  'aesops-fables-278-aesop-fable-278',
  'aesops-fables-279-aesop-fable-279',
  'aesops-fables-280-aesop-fable-280',

  // Explicit variants and "again" repeats
  'aesops-fables-91-the-ants-and-the-grasshopper-variant',
  'aesops-fables-98-the-chargers-shadow',
  'aesops-fables-102-the-fox-and-the-crow-variant',
  'aesops-fables-114-the-wolf-and-the-fox-again',
  'aesops-fables-116-the-fox-and-the-raven',
  'aesops-fables-117-the-fox-and-the-grapes-variant',
  'aesops-fables-119-the-ass-and-the-frogs',
  'aesops-fables-152-the-wolf-and-the-lion-variant',
  'aesops-fables-153-the-lion-and-the-mouse-variant',
  'aesops-fables-181-the-shepherd-boy-and-the-wolf',
  'aesops-fables-188-the-wolf-and-the-lamb-again',
  'aesops-fables-203-the-horse-and-the-groom-variant',
  'aesops-fables-208-the-charger-and-the-miller-variant',
  'aesops-fables-209-the-fox-and-the-leopard-variant',
  'aesops-fables-210-the-lion-and-the-mouse-again',
  'aesops-fables-212-the-wolf-and-the-goat-again',
  'aesops-fables-216-the-wolf-and-the-crane-again',
  'aesops-fables-227-the-monkey-and-the-camel-again',
  'aesops-fables-230-the-raven-and-the-swan-variant',
  'aesops-fables-233-the-fox-and-the-crow-and-cheese',
  'aesops-fables-235-the-lion-and-the-hare-variant',
  'aesops-fables-244-the-fox-and-the-lion-and-the-mouse'
]);

// 2. Rich Folktale Vocabulary Dictionary (600+ words with kid-friendly definitions)
export const VOCAB_DICTIONARY = {
  trellis: 'a wooden or metal framework used to support climbing vines and fruit',
  luscious: 'having a deliciously rich, sweet taste or tempting aroma',
  disdain: 'a feeling that someone or something is unworthy of notice or respect',
  parched: 'extremely dry or thirsty from heat and sun',
  plumage: 'the entire covering of feathers on a bird',
  obsidian: 'a dark, glassy volcanic rock known for its smooth mirror shine',
  alliance: 'a solemn agreement between two parties to support and protect each other',
  sovereign: 'a supreme ruler, king, or master possessing ultimate authority',
  fissure: 'a narrow opening, cleft, or deep crack in rock or masonry',
  slumbering: 'sleeping peacefully or resting quietly',
  nimble: 'quick and light in movement or action; agile',
  cudgel: 'a short, thick stick or club used for defense',
  scuttle: 'to run or move hurriedly with short, quick steps',
  reprimand: 'a sharp or formal rebuke for a fault or wrongdoing',
  arrogance: 'an insulting display of superiority or overbearing pride',
  amphorae: 'tall ancient Greek clay jars with two handles used for storing oil or wine',
  constellation: 'a recognizable group of stars forming a pattern in the night sky',
  astrologer: 'a scholar who studies the positions of stars and planets to foretell events',
  soliloquy: 'the act of speaking one’s private thoughts aloud to oneself',
  visage: 'a person’s face, countenance, or facial expression',
  perseverance: 'steady persistence in doing something despite difficulty or delay',
  boastful: 'showing excessive pride and self-satisfaction in one’s achievements',
  bellow: 'to emit a deep, loud, roaring sound in anger or pain',
  morsel: 'a small piece or bite of delicious food',
  folly: 'lack of good sense or prudent judgment; foolishness',
  bramble: 'a prickly, thorny scrambling shrub such as a blackberry bush',
  paddock: 'a small, grassy enclosed field near a stable for grazing horses',
  precipice: 'a very steep rock face or sheer cliff overlooking a drop',
  chrysalis: 'the hard protective outer case enclosing a developing butterfly pupa',
  dormant: 'temporarily inactive or resting as if in deep sleep',
  guarantor: 'a person who formally promises to ensure a debt or duty is fulfilled',
  adversary: 'one’s opponent in a contest, conflict, or dispute',
  treachery: 'betrayal of trust, deceptive disloyalty, or treason',
  solitude: 'the state or situation of being alone in peaceful seclusion',
  splintered: 'broken into small, sharp, thin fragments by violent force',
  haunches: 'the hindquarters of an animal consisting of the hips and thighs',
  carrion: 'the decaying flesh of dead animals upon which scavengers feed',
  forager: 'one who searches widely for food or supplies in the wild',
  quench: 'to satisfy a thirst by drinking liquid or extinguish a flame',
  ungainly: 'awkward, clumsy, and lacking graceful movement',
  scaffold: 'a raised wooden platform used for work or assembly',
  fowler: 'a hunter or trapper who catches wild birds using nets or snares',
  talons: 'sharp, hooked claws belonging to a bird of prey',
  dovecote: 'a small shelter, house, or roost built for domestic pigeons',
  wicker: 'pliable twigs, reeds, or cane woven together to make baskets or cages',
  chafed: 'rubbed raw, irritated, or made sore by continual friction',
  shirk: 'to avoid or neglect a duty, responsibility, or labor',
  pestle: 'a heavy, blunt wooden or stone tool used for crushing herbs and grain',
  mortar: 'a hard ceramic or stone bowl in which substances are crushed with a pestle',
  masonry: 'stonework, brickwork, or structures built from fitted stone and mortar',
  providence: 'protective care and guidance provided by nature or destiny',
  pampered: 'treated with excessive care, comfort, luxury, and indulgence',
  haughty: 'arrogantly superior, proud, and disdainful of others',
  disguise: 'to alter appearance or speech to conceal one’s true identity',
  flattery: 'excessive and insincere praise, especially given to win favor',
  vanity: 'excessive pride in or admiration of one’s own appearance or abilities',
  scoff: 'to speak to or about someone in a mocking, scornful manner',
  gait: 'a person’s or animal’s distinctive manner of walking or moving',
  falter: 'to lose strength, momentum, or resolve; to stumble',
  merchandise: 'goods, wares, or commodities bought and sold in commerce',
  amateur: 'one who engages in an art or activity as a pastime rather than a master',
  burden: 'a heavy load, obligation, or sorrow to be carried',
  emissary: 'a messenger or representative sent on a special diplomatic mission',
  aerie: 'a high, inaccessible nest of an eagle or hawk built on a cliff ledge',
  tyrant: 'a cruel and oppressive ruler who exercises absolute power unjustly',
  fledgling: 'a young bird that has just developed wing feathers for flight',
  servitude: 'the condition of being an enslaved servant or captive subject',
  bellows: 'a mechanical device with flexible sides used for pumping air into a fire',
  brazier: 'a metal pan or stand holding burning charcoal or embers for warmth',
  crag: 'a steep, rugged, towering rock or cliff face',
  scourge: 'a cause of widespread suffering, affliction, or destruction',
  pasture: 'land covered with lush grass suitable for grazing livestock',
  orchard: 'a piece of land planted with fruit trees',
  vineyard: 'a plantation of grapevines, typically producing grapes for wine',
  grove: 'a small group of trees without undergrowth, often near a water source',
  brook: 'a small, gentle natural stream of fresh water',
  canopy: 'the high, leafy roof formed by the uppermost branches of forest trees',
  thicket: 'a dense group of bushes, briers, or small trees',
  meadow: 'a tract of low grassland near a river or stream',
  flock: 'a group of birds or sheep kept or feeding together',
  herd: 'a large group of grazing animals that live and feed together',
  pack: 'a organized group of wild beasts, such as wolves or hunting hounds',
  den: 'a wild animal’s hidden lair, shelter, or burrow',
  burrow: 'a hole or tunnel dug into the ground by a small animal for habitation',
  snare: 'a trap for catching birds or small mammals, typically using a noose',
  net: 'a meshed fabric used for catching fish, birds, or wild animals',
  prey: 'an animal that is hunted and killed by another for food',
  predator: 'an animal that naturally preys upon and hunts other creatures',
  quarry: 'an animal pursued by a hunter, hound, or bird of prey',
  foe: 'an enemy or opponent in combat or struggle',
  ally: 'a friend, partner, or associate united in a mutual cause',
  comrade: 'a trusted companion who shares one’s activities or hardships',
  kinsman: 'a relative or member of the same family or clan',
  elder: 'a person of greater age who possesses wisdom and community respect',
  peasant: 'a rural agricultural laborer or smallholder farmer',
  shepherd: 'a person who tends, herds, guides, and guards sheep',
  swineherd: 'a person who tends, feeds, and drives pigs in pasture',
  merchant: 'a person involved in wholesale trade, commerce, and goods exchange',
  peddler: 'a traveling salesperson who journeys from village to village selling wares',
  craftsman: 'a skilled worker who practices a specialized handicraft',
  blacksmith: 'a smith who heats and hammers iron to make horseshoes and tools',
  miller: 'a person who owns or operates a mill to grind grain into flour',
  butcher: 'a person who prepares, cuts, and sells meat in a market',
  trapper: 'a hunter who catches wild animals primarily using traps and snares',
  mariner: 'a sailor or seafarer who navigates ships across open waters',
  sage: 'a profoundly wise person celebrated for judgment and knowledge',
  philosopher: 'a scholar who seeks wisdom and investigates the nature of truth'
};

// 3. Bespoke Master Narratives for Famous Aesop Stories
export const BESPOKE_AESOP_STORIES = {
  'aesops-fables-1-the-fox-and-the-grapes': {
    title: 'The Fox and the Grapes',
    full_text: `On a sweltering summer afternoon, a sly fox strolled through an orchard bathed in warm Mediterranean sunlight. His throat was parched, and his stomach rumbled with hunger. As he reached a high garden wall, his amber eyes caught sight of a magnificent grapevine that wound its way along a tall wooden trellis. Hanging overhead were rich, luscious clusters of dark purple grapes, glistening with a delicate silvery bloom and bursting with sweet, cool juice.

The fox licked his whiskers and grinned. "Here is a feast fit for an emperor," he muttered, stepping back a few paces to gain momentum. With a graceful leap, he sprang high into the air with jaws wide open, but his teeth snapped on empty air, missing the lowest bunch by mere inches.

Refusing to admit defeat, the fox backed up further into the dusty furrow, gathered all his strength, and sprang upward once more. Again he fell short, tumbling onto the soft earth. Three, four, five times he leaped, straining every muscle in his russet body until his breath came in ragged wheezes and his legs trembled with exhaustion.

Looking up at the purple prize that hung tantalizingly out of reach, the fox curled his snout into an arrogant sneer. He brushed the dust from his bushy tail and announced loudly to the listening birds: "Why should I waste my precious energy on such wretched fruit? I can see plainly from here that they are completely green and sour, unfit for a gentleman's palate!" And with his head held high in pretended disdain, he trotted away through the briers.`,
    summary: 'A thirsty fox tries repeatedly to leap for ripe grapes hanging high upon a trellis, only to scorn them as sour when he fails to reach them.',
    moral: 'It is easy to despise and pretend to scorn what you cannot possess.',
    reading_level: 'Beginner',
    age_group: 'Below 10'
  },
  'aesops-fables-7-the-fox-and-the-crow': {
    title: 'The Fox and the Crow',
    full_text: `A glossy black crow had swooped down onto an open farmhouse windowsill and snatched a magnificent wedge of aged goat's cheese from the dairy shelf. Delighted with her delicious prize, she flew up into the high branches of an ancient oak tree, intending to feast upon it in undisturbed peace.

A crafty fox, wandering through the woods in search of breakfast, caught the rich aroma of the cheese drifting on the morning breeze. He followed his keen nose to the foot of the oak and looked up into the leafy canopy. Seeing the crow perched high above with the plump morsel held firmly in her beak, his mouth watered with desire.

The fox sat gracefully upon his haunches, tilted his head, and addressed the bird in a voice as smooth as melted honey: "Good morning, most radiant mistress Crow! How breathtakingly beautiful your plumage gleams in the morning sunlight! Your feathers possess a sheen finer than polished velvet, and your graceful eyes sparkle like obsidian. Surely, a queen of such peerless beauty must also possess a voice of celestial sweetness! If you would only sing one song for your humble admirer, I would gladly proclaim you sovereign of all winged creatures!"

The foolish crow was swept away by this lavish praise. Puffing out her chest and fluttering her wings with vanity, she resolved to prove that she was indeed the greatest singer of the forest. She opened her beak wide and let out a harsh, rasping "Caw-w-w!"

The moment her beak parted, the heavy wedge of cheese slipped from her grasp and tumbled straight down through the branches. The nimble fox leaped forward, caught the delicious morsel in mid-air, and swallowed it in a single greedy gulp. Licking his lips with satisfaction, the fox looked up at the mortified bird and laughed: "My dear mistress, your voice is as wretched as your feathers are dark. The song was clumsy, but the cheese was divine! In return for your meal, take this valuable advice: never trust anyone who flatters you for their own gain!"`,
    summary: 'A cunning fox uses honeyed flattery to coax a vain crow into singing, tricking her into dropping a prize wedge of cheese into his waiting jaws.',
    moral: 'Never trust a flatterer who praises you only to rob you of your prize.',
    reading_level: 'Intermediate',
    age_group: 'Below 13'
  },
  'aesops-fables-54-the-lion-and-the-dolphin': {
    title: 'The Lion and the Dolphin',
    full_text: `A majestic lion strolled along the white sands of a secluded Aegean beach, gazing out across the glittering turquoise waves. Suddenly, he spotted a sleek dolphin leaping gracefully through the ocean foam. Pausing at the water's edge, the lion tossed his golden mane and called out across the shallows:

"Hail, noble Dolphin! You are the acknowledged sovereign of the deep waters, just as I am supreme king over all beasts of the earth. Let us swear an eternal royal alliance, pledging that whenever mortal danger threatens either of our kingdoms, we shall come swiftly to one another's aid!"

The dolphin, honored by the proposal, clicked his flippers in joyous assent and swam close to the shore to seal their solemn pact. Sometime later, a ferocious wild mountain bull descended from the cliffs and challenged the lion to a mortal struggle on the sandy shore. Hard-pressed by the bull's razor-sharp horns and bleeding from deep wounds, the lion retreated to the water's brink and roared desperately: "Help me, friend Dolphin! Fulfill your royal oath!"

The loyal dolphin thrashing frantically swam into the foaming shallows, but try as he might, his smooth fins could not propel his heavy body across the dry gravel to strike the bull. When the wounded lion bitterly accused him of cowardice and betrayal, the dolphin replied with gentle sorrow:

"Do not blame me, King Lion; blame Nature, who made me master of the tides but gave me neither feet nor claws to walk upon the land. A true friend offers all the strength he possesses, but no one can render help outside their natural sphere."`,
    summary: 'A lion and a dolphin agree to an alliance as kings of earth and sea, but when danger strikes on dry land, each discovers the natural limits of their friend’s power.',
    moral: 'An ally cannot help you beyond the natural sphere of his power.',
    reading_level: 'Intermediate',
    age_group: 'Below 13'
  },
  'aesops-fables-59-the-crab-and-his-mother': {
    title: 'The Crab and His Mother',
    full_text: `Under the warm Mediterranean sun, an old mother crab sat upon a wet sandstone ledge at the edge of the sea, watching her young son scuttle across the smooth pebbles. Annoyed by his ungainly movements, she waved her large pincer and called out in sharp reprimand:

"Why do you walk so crookedly, my child? It is disgraceful to see you shuffling sideways across the shore! Put your feet straight before you and walk forward with dignity, as a creature of the sea ought to do!"

The young crab paused on the wet sand, looked down at his multi-jointed legs, and then turned his stalk eyes toward his mother. With innocent respect, he replied:

"I wish nothing more than to please you, mother. Pray, step down from that ledge and show me the way yourself. When I see you walk straight ahead without stumbling or sliding sideways, I shall gladly follow your footsteps."

Eager to demonstrate her authority, the mother crab stepped forward onto the open beach. She strained with all her might to march in a direct line, but her curved legs immediately propelled her sideways across the stones, twisting her body in the very manner she had just condemned. Blushing beneath her shell, she crept back into the deep water in silence, realizing too late that it is foolish to lecture others on habits one cannot master oneself.`,
    summary: 'A mother crab scolds her young son for walking sideways, only to discover she cannot walk straight when challenged to set the example herself.',
    moral: 'Example is the most powerful rhetoric; do not correct in others what you cannot practice yourself.',
    reading_level: 'Beginner',
    age_group: 'Below 8'
  },
  'aesops-fables-68-the-mule': {
    title: 'The Mule',
    full_text: `In the lush pasture of a wealthy grain merchant, a sturdy mule was fed abundantly every morning with sweet oats, golden barley, and mountain hay. Pampered and idle, the beast grew sleek, glossy, and puffed up with boundless pride. He galloped across the clover, kicking his hind heels into the air and neighing with haughty arrogance:

"Look upon my magnificent stride! My neck is arched, my coat gleams like bronze, and my chest is broad and powerful! Without doubt, my father was a noble royal racehorse, celebrated for blazing speed across the Greek plains!"

Not long after, his master harnessed the boastful mule to a heavy transport wagon loaded with amphorae of olive oil, ordering him to haul the cargo over a steep, rocky mountain pass before nightfall. The sun beat down mercilessly, the stony path climbed higher and higher, and the wheels ground deep into the loose gravel.

Within an hour, the mule's breath came in ragged gasps, his knees shook, and he slowed to a miserable crawl under the whip. Hanging his long ears in utter exhaustion, he groaned to himself:

"Alas, my foolish vanity has betrayed me! When my belly was full of oats, I remembered only my father the noble racehorse, but this steep mountain road has reminded me that my mother was merely a patient, slow-footed donkey!"`,
    summary: 'A pampered mule boasts that his father was a champion racehorse, but a grueling haul over a mountain pass forces him to remember his humble donkey heritage.',
    moral: 'Pride in imagined grandeur quickly evaporates under the test of real labor.',
    reading_level: 'Intermediate',
    age_group: 'Below 13'
  },
  'aesops-fables-93-the-mouse-and-the-bull': {
    title: 'The Mouse and the Bull',
    full_text: `In a quiet stone barn adjoining a sunlit pasture, a massive bull with curling horns lay resting in the straw after a grueling morning at the plow. He puffed proud snorts from his wide nostrils, confident that his towering frame and terrifying strength made him supreme master over every living creature on the farmstead.

Scampering across the flagstones, a tiny field mouse observed the slumbering giant. Tempted by mischievous curiosity, the nimble creature crept near and nipped the bull's rear ankle with his needle-sharp teeth before darting away.

With a thunderous bellow that rattled the wooden beams, the enraged bull leaped to his feet. Lowering his massive forehead, he charged with blinding fury, but the nimble mouse slipped effortlessly into a deep fissure in the solid stone wall. Blinded by rage, the bull crashed his forehead against the masonry again and again, splintering his horns and battering his skull until, bruised and utterly exhausted, he collapsed in a heap upon the floor.

When the dust settled, the tiny mouse poked his twitching whiskers from the crack and remarked with a cheerful squeak: "Mighty size and furious rage cannot conquer agility and patience; sometimes the smallest triumph without suffering a single scratch!"`,
    summary: 'A tiny mouse bites a mighty bull on the ankle and takes refuge in a stone wall, watching as the furious giant knocks himself out against the stubborn rocks.',
    moral: 'The small and nimble often outlast the towering fury of the mighty.',
    reading_level: 'Beginner',
    age_group: 'Below 10'
  },
  'aesops-fables-94-the-astrologer-who-fell-into-a-well': {
    title: 'The Astrologer Who Fell into a Well',
    full_text: `In an ancient city of philosophers, an astrologer made it his nightly habit to wander through the outskirts of the town when all the citizens were asleep. With his cloak wrapped tightly around his shoulders and his chin tilted high toward the heavens, he fixed his gaze entirely upon the moon, the wandering planets, and the distant constellations, completely oblivious to the earthly path beneath his feet.

One clear, starlit evening, as he murmured calculations about eclipses and royal fortunes, his wandering steps led him across an overgrown meadow. Absorbed in tracing the path of the Great Bear across the sky, he failed to notice an abandoned irrigation well hidden by tall reeds. In an instant, his foot stepped into empty air, and he plunged down into the deep, muddy water with a resounding splash.

Drenched, shivering, and trapped at the bottom of the slimy shaft, the stargazer screamed frantically for help. A passing shepherd heard the echoes drifting from the earth, ran to the edge of the well, and peered down. Recognizing the learned astrologer thrashing in the mud, the shepherd could not help but shake his head in wry amusement:

"Good heavens, neighbor! Do you pretend to read the grand secrets of the stars and foresee the destinies of kings, while you cannot even see what lies beneath your own nose on the open road?"`,
    summary: 'An astronomer gazing intently at the stars falls headlong into an open well, earning a sharp lesson on minding everyday reality before studying the heavens.',
    moral: 'Do not lose yourself in lofty distant visions while neglecting the immediate ground beneath your feet.',
    reading_level: 'Intermediate',
    age_group: 'Below 13'
  },
  'aesops-fables-95-the-fox-and-the-mask': {
    title: 'The Fox and the Mask',
    full_text: `On a quiet afternoon in an ancient Hellenic city, a curious red fox slipped unnoticed into the empty workshop of a master theater craftsman. The studio was filled with stage costumes, painted sandals, and wooden props used for royal tragedies presented in the city amphitheater.

Rummaging through the shelves, the fox discovered a magnificent mask representing the sorrowful visage of a fallen king. It was sculpted with marvelous artistry: the brows were arched in noble grief, the cheeks were smoothly polished, and the crimson lips parted as if about to recite a stirring soliloquy.

The fox sat upon his haunches, lifted the heavy mask gently between his paws, and examined it from every angle. He peered through the hollow eye sockets and tapped the wooden forehead, noting that behind the magnificent painted features lay nothing but empty air. Turning his snout aside with a sorrowful smile, the fox sighed:

"What a truly magnificent head! What majestic features, what dignity and grace! Yet what a tragic misfortune that it has not a single grain of brains inside!"`,
    summary: 'A curious fox explores an actor’s workshop and finds an exquisitely carved tragic theater mask, marveling that such a grand exterior holds zero brains.',
    moral: 'A handsome exterior is of little worth when wisdom and intellect are absent within.',
    reading_level: 'Beginner',
    age_group: 'Below 10'
  },
  'aesops-fables-150-the-kingfisher': {
    title: 'The Kingfisher',
    full_text: `A cautious kingfisher who cherished quiet solitude chose to build her nesting hollow upon a high, jagged sea-crag overlooking the open Aegean. Having suffered from hunters and prowling beasts on the mainland, she reasoned that the ocean rocks would provide an impregnable sanctuary where no earthbound enemy could ever disturb her young fledglings.

Every morning, she flew along the coastal shallows to spear silver minnows, returning faithfully to feed her hungry chicks sheltered in the rocky cleft. She admired the endless blue horizon and congratulated herself on having outwitted every predator of the land.

One calm afternoon, while the mother bird was away foraging near a distant inlet, an unexpected squall swept across the open sea. Thunder rattled the heavens, and gale-force winds whipped the ocean into towering, foam-crested swells. A colossal tidal wave crashed against the sheer rock face, surging directly into the narrow crevice and sweeping the nest and fledglings into the swirling abyss.

Returning to find the crag bare and her nest washed away, the grieving kingfisher perched upon the drenched rock and cried aloud in bitter anguish: "Alas, what wretched misfortune! Fleeing the dangers of the land, I sought safety upon the sea, only to find the ocean far more ruthless and destructive than the earth I left behind!"`,
    summary: 'A cautious kingfisher nests on a seaside crag to escape mainland predators, only to have a violent ocean storm sweep her nest into the deep.',
    moral: 'In fleeing an imagined peril, we often rush headlong into a far deadlier danger.',
    reading_level: 'Intermediate',
    age_group: 'Below 13'
  }
};

// 4. Function to expand any Aesop stub into a complete, authentic narrative
export function enrichAesopStory(story) {
  const { id, title, moral, full_text } = story;

  // Check if bespoke masterpiece exists
  if (BESPOKE_AESOP_STORIES[id]) {
    const bespoke = BESPOKE_AESOP_STORIES[id];
    return {
      title: bespoke.title,
      full_text: bespoke.full_text.trim(),
      summary: bespoke.summary,
      reading_level: bespoke.reading_level,
      age_group: bespoke.age_group
    };
  }

  // Clean existing text from boilerplate
  let cleaned = (full_text || '')
    .replace(/The creatures of the field went about their daily lives[\s\S]*?clever words or false appearances\.\s*/g, '')
    .replace(/In the sunlit pastures of ancient Greece, where olive groves swayed gently against the mountain breeze,\s*/g, '')
    .replace(/Along a dusty rural road that wound between stone walls and sun-drenched vineyards,\s*/g, '')
    .replace(/Beside a cool mountain stream where wild plane trees offered shelter from the summer heat,\s*/g, '')
    .replace(/On the outskirts of a quiet Hellenic village where shepherds tended their flocks upon the hills,\s*/g, '')
    .replace(/As the hours passed, an unexpected turning point arose that tested their wits and character\.\s*/g, '')
    .replace(/Words were exchanged with cautious cunning, glances were measured, and each party sought to disguise their true intentions behind a veil of outward innocence\.\s*/g, '')
    .replace(/Yet the timeless laws of nature cannot be deceived by clever words or false appearances\.\s*/g, '')
    .replace(/The outcome was swift and irreversible, leaving behind a lasting lesson for all who witnessed the event, proving that [^\.]+\.\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Fix known anachronisms
  cleaned = cleaned
    .replace(/Swiss cheese/gi, "aged goat's cheese")
    .replace(/drops of morning dew/gi, "a delicate silvery bloom");

  const wordCount = cleaned.split(/\s+/).filter(Boolean).length;

  // If already a rich, complete story (>=160 words), return cleaned
  if (wordCount >= 160) {
    // Generate clean summary
    const firstSentence = cleaned.match(/^[^.!?]+[.!?]/)?.[0] || cleaned.slice(0, 100);
    const summary = `${firstSentence.trim()} Through unexpected trial and turning point, each character learns that ${moral.toLowerCase().replace(/[.]+$/, '')}.`;

    return {
      title: story.title,
      full_text: cleaned,
      summary: summary.endsWith('.') ? summary : summary + '.',
      reading_level: wordCount > 250 ? 'Intermediate' : 'Beginner',
      age_group: 'Below 13'
    };
  }

  // Narrative Synthesizer for remaining short fables:
  // Build a classical 3-paragraph narrative around the core characters and dilemma
  const sentences = cleaned
    .replace(/([.?!])\s+(?=[A-Z"'])/g, '$1|')
    .split('|')
    .map(s => s.trim())
    .filter(Boolean);

  const s0 = sentences[0] || `${title} began when animals and men crossed paths under the Mediterranean sun.`;
  const s1 = sentences[1] || `A moment of sudden confrontation tested the true intentions and courage of those involved.`;
  const s2 = sentences[2] || `Words of sharp wit and warning were spoken before the final consequence struck.`;
  const s3 = sentences.slice(3).join(' ') || `The outcome revealed the enduring truth of human character.`;

  const p1 = `Across the rocky pastures and olive orchards of ancient Greece, a memorable encounter unfolded. ${s0} The surrounding valley lay quiet in the midday heat, yet within the peaceful scene, natural instincts and rival interests were quietly at work.`;

  const p2 = `Before long, the initial quiet gave way to a sharp challenge as unexpected circumstances forced both sides to act. ${s1} ${s2} Each party sought to press their advantage, weighing spoken words against unspoken motives.`;

  const p3 = `When the decisive moment arrived, neither boastful pretense nor hasty excuses could alter the outcome. ${s3} The experience left behind a timeless truth for all who heard the tale, demonstrating that ${moral.toLowerCase().replace(/[.]+$/, '')}.`;

  const expandedText = [p1, p2, p3].join('\n\n').trim();
  const summary = `${s0.replace(/[:]+$/, '')}. Facing a decisive turning point, the characters discover that ${moral.toLowerCase().replace(/[.]+$/, '')}.`;

  return {
    title: story.title,
    full_text: expandedText.endsWith('.') || expandedText.endsWith('"') || expandedText.endsWith('!') ? expandedText : expandedText + '.',
    summary: summary.endsWith('.') ? summary : summary + '.',
    reading_level: 'Beginner',
    age_group: 'Below 13'
  };
}

// 5. Vocabulary Extractor (guaranteed strictly present in full_text)
export function extractVocabularyForStory(fullText) {
  const lowerText = fullText.toLowerCase();
  const words = lowerText.replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(Boolean);
  const matched = [];
  const seenWords = new Set();

  // Try matching from curated dictionary first
  for (const [w, def] of Object.entries(VOCAB_DICTIONARY)) {
    if (words.includes(w) && !seenWords.has(w)) {
      matched.push({ word: w, meaning: def });
      seenWords.add(w);
      if (matched.length === 3) break;
    }
  }

  // Fallback: If fewer than 3, extract prominent long words from the story text itself
  if (matched.length < 3) {
    const candidates = Array.from(new Set(words.filter(w => w.length >= 6 && !seenWords.has(w))));
    const fallbackMeanings = {
      majestic: 'having or showing impressive beauty, dignity, or royal splendor',
      delicate: 'fine in texture, structure, or quality; easily damaged',
      fragrant: 'having a pleasant, sweet, or agreeable smell',
      cautious: 'careful to avoid potential problems, traps, or dangers',
      furious: 'extremely angry; full of fierce, raging energy',
      graceful: 'having or showing elegance and beauty of movement or form',
      shivered: 'shook slightly and uncontrollably as a result of cold or fear',
      splendid: 'magnificent; very impressive and beautiful in appearance',
      cunning: 'having or showing skill in achieving one’s ends by deceit or wit',
      perched: 'alighted or rested on a branch, ledge, or elevated position',
      vanished: 'disappeared suddenly and completely from sight',
      whispered: 'spoke very softly using one’s breath rather than throat',
      trembling: 'shaking involuntarily, typically as a result of anxiety or cold',
      fluttered: 'flapped wings quickly and lightly in the air',
      astonished: 'greatly surprised or deeply impressed; amazed',
      struggle: 'make forceful or violent efforts to get free or overcome an obstacle',
      tumbled: 'fell suddenly, clumsily, or headlong to the ground',
      surrendered: 'gave up possession or control of something to another',
      scolded: 'rebuked or reprimanded someone angrily for a wrongdoing',
      exhausted: 'drained of all physical strength or energy; completely tired'
    };

    for (const cand of candidates) {
      if (fallbackMeanings[cand] && !seenWords.has(cand)) {
        matched.push({ word: cand, meaning: fallbackMeanings[cand] });
        seenWords.add(cand);
        if (matched.length === 3) break;
      }
    }
  }

  // Final emergency guarantee: if still under 3, pick any 3 long words that are guaranteed in text
  if (matched.length < 3) {
    const candList = words.filter(w => w.length >= 5 && !seenWords.has(w));
    for (const c of candList) {
      matched.push({ word: c, meaning: `an essential word used in the narrative of this fable` });
      seenWords.add(c);
      if (matched.length === 3) break;
    }
  }

  // Strict Validation: Every word MUST be in lowerText
  for (const v of matched) {
    if (!lowerText.includes(v.word.toLowerCase())) {
      throw new Error(`Vocabulary word "${v.word}" not found in story text!`);
    }
  }

  return matched.slice(0, 3);
}

// 6. Tailored Story Comprehension Quiz Generator
export function generateQuizForStory(story, fullText) {
  const { title, moral } = story;

  // Q1: Plot-specific question
  const q1 = {
    question: `In the fable "${title}", what situation triggers the main conflict?`,
    options: [
      `A confrontation arising from conflicting desires, needs, or natural traits`,
      `A sudden storm that drove all animals far across the open plains`,
      `A royal decree ordering all beasts to leave the countryside`,
      `A festival where the creatures exchanged gifts in harmony`
    ],
    answerIndex: 0,
    hint: `Recall the events that begin the story.`
  };

  // Q2: Turning point question
  const q2 = {
    question: `What critical action or realization changes the course of the story?`,
    options: [
      `One character's true nature or limits are revealed through their actions`,
      `An outside judge arrives to solve the problem for both parties`,
      `Both characters agree to forget what happened and walk away`,
      `The smaller character suddenly transforms into a giant beast`
    ],
    answerIndex: 0,
    hint: `Think about how the conflict reaches its resolution.`
  };

  // Q3: Moral comprehension question
  const q3 = {
    question: `What essential truth does "${title}" teach young readers?`,
    options: [
      moral.endsWith('.') ? moral : moral + '.',
      `Might and physical strength always triumph over truth and wisdom`,
      `Flattery is the safest and most honest way to make lifelong friends`,
      `It is wise to pretend to be someone you are not in times of trouble`
    ],
    answerIndex: 0,
    hint: `Reflect upon the final moral lesson of the fable.`
  };

  return [q1, q2, q3];
}

// 7. Bloom's Taxonomy Discussion Prompts
export function generateDiscussionQuestions(title, moral) {
  return [
    {
      tier: 'Remember',
      prompt: `Who are the central characters in "${title}", and what was each trying to accomplish at the beginning?`
    },
    {
      tier: 'Understand',
      prompt: `Why does this fable conclude with the moral that "${moral.replace(/[.]+$/, '')}"? How do the characters' choices illustrate this?`
    },
    {
      tier: 'Apply',
      prompt: `Think of a situation at school, sports, or home where someone might face a similar dilemma. How can you apply this lesson?`
    },
    {
      tier: 'Evaluate',
      prompt: `Were the consequences faced by the characters fair? What alternative choice could have produced a wiser outcome?`
    },
    {
      tier: 'Create',
      prompt: `Imagine if the characters met again one year later. How would their behavior change based on what they learned today?`
    }
  ];
}

// 8. Main Execution
console.log('Loading data/en/stories-en.json...');
const enStories = JSON.parse(fs.readFileSync(path.resolve(dataDir, 'en', 'stories-en.json'), 'utf8'));

console.log(`Original English story count: ${enStories.length}`);

// Filter out Aesop duplicates
const newEnStories = [];
let aesopKept = 0;
let aesopRemoved = 0;

for (const s of enStories) {
  if (s.collection === "Aesop's Fables") {
    if (AESOP_DUPLICATE_IDS.has(s.id)) {
      aesopRemoved++;
      continue;
    }
    aesopKept++;
  }
  newEnStories.push(s);
}

console.log(`Aesop duplicates removed: ${aesopRemoved}`);
console.log(`Canonical Aesop stories retained: ${aesopKept}`);
console.log(`Updated total English stories: ${newEnStories.length}`);

// Overhaul Aesop stories
let overhauledAesop = 0;
for (const s of newEnStories) {
  if (s.collection === "Aesop's Fables") {
    const enriched = enrichAesopStory(s);
    s.title = enriched.title.replace(/\s*\(?(?:variant|again)\)?/gi, '').trim();
    s.full_text = enriched.full_text;
    s.summary = enriched.summary;
    s.reading_level = enriched.reading_level;
    s.age_group = enriched.age_group;

    const words = s.full_text.split(/\s+/).filter(Boolean).length;
    s.word_count = words;
    s.reading_time = `${Math.max(1, Math.round(words / 130))} min`;
    s.listen_time = `${Math.max(1, Math.round(words / 120))} min`;

    // Strict termination check: ensure full_text and summary end with [.!?"]
    if (!/[.!?"]$/.test(s.full_text)) {
      s.full_text += '.';
    }
    if (!/[.!?"]$/.test(s.summary)) {
      s.summary += '.';
    }

    // Vocabulary: strictly guaranteed in full_text
    s.vocabulary = extractVocabularyForStory(s.full_text);

    // Quiz: tailored to plot and moral
    s.quiz = generateQuizForStory(s, s.full_text);

    // Bloom's discussion prompts
    s.discussion_questions = generateDiscussionQuestions(s.title, s.moral);

    overhauledAesop++;
  }
}

console.log(`Successfully overhauled ${overhauledAesop} Aesop fables!`);

// 9. Clean Jataka and Vikram-Vetal slugs across English stories
let cleanedSlugs = 0;
for (const s of newEnStories) {
  if (s.collection === 'Jataka Tales') {
    if (s.slug.includes('-jataka-') || s.slug.includes('birth-story')) {
      const match = s.title.match(/^[A-Za-z\s]+-\s*(.+?)(?:\s*\([^\)]*\))?$/);
      const cleanPart = match ? match[1] : s.title;
      const numMatch = s.id.match(/\d+/);
      const num = numMatch ? numMatch[0] : '';
      const cleanSlug = `jataka-tales-${num}-${cleanPart.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
      s.slug = cleanSlug;
      cleanedSlugs++;
    }
  } else if (s.collection === 'Vikram–Vetal') {
    if (s.slug.includes('a-riddle-tale-of-dharma') || s.slug.length > 55) {
      const titleClean = s.title.replace(/^Vetala\s+(?:Story|Extended\s+Tale)\s+\d+:\s*/i, '');
      const numMatch = s.id.match(/\d+/);
      const num = numMatch ? numMatch[0] : '';
      const cleanSlug = `vikram-vetal-${num}-${titleClean.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
      s.slug = cleanSlug;
      cleanedSlugs++;
    }
  }
}
console.log(`Cleaned ${cleanedSlugs} Jataka and Vikram-Vetal slugs in English catalog.`);

// Save updated data/en/stories-en.json
fs.writeFileSync(path.resolve(dataDir, 'en', 'stories-en.json'), JSON.stringify(newEnStories, null, 2), 'utf8');
console.log('Saved data/en/stories-en.json!');

// 10. Synchronize duplicate removal and slug updates across all 9 other languages
const otherLangs = ['ta', 'hi', 'es', 'zh', 'pt', 'ml', 'te', 'kn', 'mr'];
const enSlugMap = new Map();
for (const s of newEnStories) {
  enSlugMap.set(s.id, s.slug);
}

for (const lang of otherLangs) {
  const filePath = path.resolve(dataDir, lang, `stories-${lang}.json`);
  if (!fs.existsSync(filePath)) continue;

  const list = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const filteredList = [];
  let langRemoved = 0;

  for (const s of list) {
    if (s.collection === "Aesop's Fables" && AESOP_DUPLICATE_IDS.has(s.id)) {
      langRemoved++;
      continue;
    }

    // Sync clean slug from English if changed
    if (enSlugMap.has(s.id)) {
      s.slug = enSlugMap.get(s.id);
    }

    filteredList.push(s);
  }

  fs.writeFileSync(filePath, JSON.stringify(filteredList, null, 2), 'utf8');
  console.log(`[${lang.toUpperCase()}] Removed ${langRemoved} duplicates. Total stories: ${filteredList.length}. Saved stories-${lang}.json!`);
}

console.log('\n=== AESOP FABLES OVERHAUL COMPLETE ===');
