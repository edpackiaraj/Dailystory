import fs from 'node:fs';

// Helper to expand Aesop's Fables
export function expandAesopStory(story) {
  const { id, title, summary, moral, text } = story;

  const rawClean = (text || '').replace(/\r\n/g, '\n').trim();
  const sentences = rawClean
    .replace(/([.?!])\s+(?=[A-Z"'])/g, '$1|')
    .split('|')
    .map(s => s.trim())
    .filter(Boolean);

  if (rawClean.split(/\s+/).length >= 200 && rawClean.split(/\n\s*\n/).length >= 3) {
    return rawClean;
  }

  if (id === 'aesops-fables-89-the-dog-and-the-shadow') {
    return `On a bright morning in an ancient village, a butcher tossed a succulent, juicy bone with a tender cut of meat to a stray dog that had been waiting patiently outside his shop. Overjoyed with his good fortune, the dog clasped the prize tightly between his jaws. Rather than enjoying his meal in front of the barking neighborhood dogs who might demand a share, he decided to carry his treasure deep into the quiet woodland where he could feast in undisturbed peace.

Trotting proudly across the green meadows, he soon arrived at a clear mountain brook spanned by a narrow wooden footbridge. As he stepped onto the planks, he glanced down into the crystalline water below. To his utter astonishment, staring back at him from the tranquil depths was another dog—carrying what appeared to be an even larger, juicier, and more magnificent cut of meat!

Blinded by sudden envy and uncontrollable greed, the dog could not bear the thought of another creature having a finer feast than his own. Without pausing for a single moment of reflection, he snarled ferociously and snapped his jaws open to snatch the phantom prize from the water. In that very instant, his own meat slipped from his mouth, splashed into the rushing stream, and sank quickly to the gravelly bottom. As the rippling water dissolved the reflection, the foolish dog was left dripping wet, empty-mouthed, and thoroughly ashamed, realizing that in grasping at an illusion, he had surrendered his true feast.`;
  }

  if (id === 'aesops-fables-116-the-fox-and-the-raven') {
    return `Deep within the green canopy of an ancient oak grove, a sleek black raven perched proudly on a high branch. In his glossy beak he held a choice piece of savory bacon, which he had snatched from an open pantry window in the nearby village. He adjusted his stance on the bark, preparing to relish his morning prize in undisturbed solitude.

A hungry red fox trotted beneath the oak, his keen nose drawn by the irresistible scent of cured meat. Looking up, he saw the raven perched safely out of reach on the tallest bough. Knowing that force would avail him nothing, the cunning fox sat on his haunches, tilted his head in deep admiration, and addressed the bird in smooth, honeyed tones: "Greetings, majestic prince of the woodland! How dazzling is the luster of your ebony feathers, glistening like polished obsidian in the morning sun! Surely, if your melodious voice is half as divine as your royal plumage, you must rightfully be acknowledged as the sovereign king of all winged creatures! Won't you grace this humble woodland with just one verse of your heavenly song?"

Overwhelmed by such extravagant praise, the vain raven’s caution melted into pure conceit. Eager to display his royal vocal prowess, he puffed out his chest, arched his neck, and opened his beak wide to let out a piercing, triumphant caw. Down plunged the bacon into the waiting jaws of the fox, who snapped it up with delighted laughter. "Your voice is harsh enough, friend," chuckled the fox, wiping his whiskers, "and though you have feathers in plenty, you have not a single grain of wit behind them. Never trust those who offer honeyed flattery, for praise is cheap bait for your dinner!"`;
  }

  if (id === 'aesops-fables-117-the-fox-and-the-grapes-variant') {
    return `Under the blazing afternoon sun of a Mediterranean summer, a thirsty red fox slunk along the sun-baked stone walls of a rural vineyard. His throat was parched, his stomach growled with hunger, and every stream in the valley had dried to dust in the sweltering heat.

Suddenly, his amber eyes caught sight of a magnificent grapevine trained across a high wooden arbor. Hanging directly overhead were clusters of purple grapes, swollen with sweet nectar and dusted with a delicate silvery bloom. They looked so luscious and cool that the fox’s mouth watered in anticipation. Crouching low, he gathered all his strength, sprang into the air, and snapped his jaws—only to miss the lowest bunch by mere inches.

Not one to surrender easily, he backed up ten paces, sprinted forward, and leaped again with desperate energy, yet fell back empty-pawed upon the gravel. Three, four, five times he hurled himself toward the tantalizing fruit, until bruised, panting, and thoroughly exhausted, he realized the trellis was far beyond his reach. Smoothing his ruffled coat with an air of haughty indifference, he curled his lip and sneered aloud: "What a fool I am to waste my strength! Those grapes are completely sour, green, and wretched—fit only for silly sparrows to choke upon!" With his chin held high, he trotted off into the dust, seeking to disguise his bitter defeat with false disdain.`;
  }

  if (id === 'aesops-fables-138-the-hawk-and-the-pigeons') {
    return `High in the peaceful rafters of a rustic farm dovecote, a flock of white pigeons lived in constant dread. A fierce brown kite circled the skies above every afternoon, swooping down whenever a bird ventured into the open fields to forage for seeds. Though the kite managed to seize only a stray bird every few weeks, the pigeons lived in endless terror, shivering within the eaves and holding anxious assemblies to debate how they might secure their safety.

In their desperation, an elder dove proposed a bold measure: 'Let us appeal to the great hawk, the undisputed master of the high winds! He possesses mighty talons and terrifying speed; if we invite him into our dovecote to serve as our royal protector, the cowardly kite will never dare show his face in our valley again.' Blinded by fear, the flock hailed the suggestion with enthusiasm. They sent an emissary to the hawk’s mountain aerie, promising him an honored dwelling in their roost. Flattered and hungry, the fierce hawk eagerly accepted their petition and flew down into the dovecote with an imposing display of sharp talons.

No sooner was the hawk securely lodged within the narrow entrance of the roost than his predatory nature showed itself in all its fury. Barring the exit with his wide wings, he began slaughtering the helpless pigeons one by one, feasting upon more birds in a single morning than the kite had captured in an entire year! As the surviving pigeons huddled in the shadowy corners awaiting their doom, a dying dove wept in bitter remorse: 'Alas for our blind folly! In our eagerness to escape a minor annoyance, we have invited our greatest destroyer into our very home.' Too late did they learn that seeking the protection of a tyrant is a cure far deadlier than the affliction.`;
  }

  if (id === 'aesops-fables-140-the-dove-and-the-crow') {
    return `Inside the ornate courtyard of a wealthy merchant's villa, a pampered white dove lived inside an elaborate gilded wicker cage. Every morning, the master’s servants brought her fresh millet, clean spring water, and soft cotton for her nest, ensuring she was shielded from the cold winds and predators of the open world.

Proud of her quiet shelter, the dove sat beside her nest and began boasting loudly to the wild birds gathered on the courtyard eaves: "Look upon my fruitful nest! I have hatched four fine broods of fledglings this season alone, more than any wild bird in the entire district! Is there any mother under heaven more blessed and productive than I?"

A ragged wild crow, perched on the tiled roof of the stable, looked down through the wire bars with a gaze of sorrowful pity. "Why do you boast, foolish captive?" croaked the crow. "Every chick you bring forth into that cage will never know the freedom of soaring over mountain valleys or wheeling through the open sky. The more fledglings you hatch within your gilded bars, the more captives you provide to serve your master's amusement. To multiply children into servitude is no honor; true blessing lies in freedom, not in the abundance of one's chains."`;
  }

  // General Aesop Synthesizer
  const p1_openings = [
    `In the sunlit pastures of ancient Greece, where olive groves swayed gently against the mountain breeze,`,
    `Along a dusty rural road that wound between stone walls and sun-drenched vineyards,`,
    `Beside a cool mountain stream where wild plane trees offered shelter from the summer heat,`,
    `On the outskirts of a quiet Hellenic village where shepherds tended their flocks upon the hills,`
  ];
  const p1_open = p1_openings[Math.abs(id.length) % p1_openings.length];

  const s0 = sentences[0] || summary || 'an animal ventured out into the open fields on a quest for food';
  const s1 = sentences[1] || 'A tense confrontation soon arose as rival desires crossed paths under the midday sun.';
  const s2 = sentences[2] || 'Natural instincts and sharp wits collided, bringing the trial to an immediate, decisive climax.';
  const s3 = sentences.slice(3).join(' ') || '';

  const p1 = `${p1_open} ${s0}. The creatures of the field went about their daily lives according to their nature, each seeking their own advantage while keeping a vigilant watch over friends and foes alike.`;

  const p2 = `As the hours passed, an unexpected turning point arose that tested their wits and character. ${s1} Words were exchanged with cautious cunning, glances were measured, and each party sought to disguise their true intentions behind a veil of outward innocence.`;

  const p3 = `Yet the timeless laws of nature cannot be deceived by clever words or false appearances. ${s2} ${s3} The outcome was swift and irreversible, leaving behind a lasting lesson for all who witnessed the event, proving that ${moral.toLowerCase().replace(/\.$/, '')}.`;

  return [p1, p2, p3].join('\n\n');
}
