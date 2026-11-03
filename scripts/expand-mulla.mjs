import fs from 'node:fs';

// Helper to expand Mulla Nasruddin stories
export function expandMullaStory(story) {
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

  if (id === 'mulla-nasruddin-9-the-moon-is-more-useful') {
    return `In the lively teahouse of Akşehir, where village elders, traveling merchants, and amateur philosophers gathered every afternoon to debate under the shade of a venerable plane tree, a fierce philosophical argument broke out. Two visiting scholars with elaborate turbans were disputing whether the sun or the moon was the greater celestial blessing to mankind. One argued passionately that without the sun, all crops would wither and humanity would perish in perpetual frost; the other argued with equal vehemence that the moon governed the tides, guided desert caravans by night, and inspired poets. The debate grew so loud that the tea-server spilled a pot of boiling mint tea onto the hearth.

Looking across the cushions, the two scholars spotted Mulla Nasruddin sitting peacefully in the corner, gently blowing the steam from his tea glass with an expression of serene detachment. Recognizing him as the village judge, they cried out: "Come, Mulla! You are a man whose wits cut through confusion like a sharp blade. Settle this profound question for us: which is of greater utility and service to humanity—the radiant sun or the silvery moon?"

Nasruddin placed his glass carefully upon the copper tray, stroked his gray beard with profound gravity, and paused for a long moment while the whole teahouse leaned forward in silence. "Without a shadow of a doubt," declared Nasruddin with decisive authority, "the moon is infinitely more useful and necessary to mankind than the sun!" The scholars blinked in astonishment: "How in heaven's name do you arrive at such a strange conclusion, Mulla?" "The answer is obvious to anyone who uses simple common sense!" laughed Nasruddin, spreading his arms wide. "The sun shines exclusively during the daytime, when it is already broad daylight and nobody has any need of light at all! But the glorious moon shines in the middle of the pitch-black night, precisely when the world is dark and we desperately need illumination to keep from stumbling into ditches! Therefore, the moon is far superior!" The teahouse erupted into roars of laughter, leaving the two pompous scholars shaking their heads at how easily Nasruddin turned academic pretension upside down.`;
  }

  if (id === 'mulla-nasruddin-10-nasruddins-donkey-is-dead') {
    return `One dusty morning in Akşehir, Mulla Nasruddin was seen sprinting into the crowded market square, his turban askew, his robes flapping in the wind, clapping his hands together and shouting at the top of his lungs: "Praise be to the Almighty! Glory to the Heavens! What a boundless miracle of divine mercy and blessings has fallen upon my humble head today!"

The merchants stopped measuring cloth, the blacksmith dropped his tongs, and Nasruddin’s neighbor ran over in great excitement, clutching the Mulla’s shoulder: "What magnificent fortune has befallen you, Mulla? Did an uncle in Samarkand pass away and leave you a chest of jewels? Did you dig up a pot of gold beneath your olive tree?" "No, no, nothing of the sort!" beamed Nasruddin, his eyes shining with radiant joy. "My faithful gray donkey broke its tether this morning, galloped wild toward the cliffs, tumbled into the rocky ravine, and broke its neck on the boulders below!"

The neighbor stared at him as if he had lost his senses: "Are you completely mad, Mulla Nasruddin? You have lost your only beast of burden, the animal that plows your patch of barley and carries your firewood to the bazaar! Why on earth are you running through the square thanking heaven that your only donkey is dead?" "O man of small understanding!" laughed Nasruddin, shaking his head with affectionate pity. "Can you not perceive the boundless miracle? I am thanking heaven with all my soul that I was not riding on its back when it tumbled into the abyss! Had I been sitting in the saddle, I would have broken my neck along with the poor beast! A lost donkey can be replaced with fifty silver coins, but where in all Anatolia could my dear wife find another Mulla Nasruddin?" The crowd chuckled at his irrepressible optimism, marveling at how a cheerful spirit finds reasons for gratitude even in the midst of loss.`;
  }

  if (id === 'mulla-nasruddin-17-the-longer-beard') {
    return `One Friday afternoon, the courtyard of the grand mosque in Akşehir was filled with merchants, village elders, and eager students who had gathered to listen to a visiting scholar from the renowned academies of Baghdad. The visitor was a man of immense pomposity, adorned in shimmering silk robes trimmed with golden embroidery, and possessed an extraordinary white beard that cascaded down his chest in glorious waves, reaching all the way to his leather belt. He stroked his facial hair with supreme complacency, pausing after every sentence with a solemn air as though the heavens themselves hung upon his words.

Addressing the humble congregation with an air of condescending superiority, the scholar cleared his throat and declared: "O seekers of knowledge, let it be known that true dignity, depth of scholarship, and spiritual authority are strictly proportional to the length and fullness of a man’s beard! The longer and grander the beard, the deeper and more profound the ocean of divine wisdom that resides in the intellect beneath!" The villagers bowed their heads in bewildered awe, murmuring respectfully among themselves, too intimidated to question the distinguished guest.

From the back of the crowd, Mulla Nasruddin quietly rose to his feet, his worn felt cap slightly tilted and his fingers casually stroking his own short, modest gray beard. "Respected master," called out Nasruddin with profound gravity, bowing low with mock reverence. "Your revolutionary doctrine brings boundless illumination to our simple minds. For if wisdom, dignity, and religious authority were truly measured by the length of the hair upon one’s chin, then without a shadow of a doubt, the village billy goat tethered behind the blacksmith’s shop must be the Supreme Grand Mufti of the entire Islamic world!" The entire courtyard burst into uncontrollable laughter, while the Baghdad scholar hurriedly gathered his silk robes and vanished down the street in red-faced silence.`;
  }

  if (id === 'mulla-nasruddin-18-half-knowledge') {
    return `Mulla Nasruddin was once earning a humble living as a ferryman, rowing passengers across a wide, turbulent river whose waters rushed swiftly from the mountain snows. One afternoon, a haughty grammarian from the imperial capital stepped into his wooden skiff. As Nasruddin pulled steadily at the heavy oars, pushing against the frothing current, the scholar adjusted his spectacles, sneered at the Mulla’s calloused hands, and asked in a condescending voice: "Tell me, ferryman, have you ever studied the intricate rules of Arabic grammar, syntax, and classical rhetoric?"

"Alas, no, respected professor," replied Nasruddin cheerfully, his muscles straining against the river's pull. "I am just a simple boatman. I know how to mend an oar, read the river eddies, and haul cargo, but I have never opened a book of grammar in my life." The scholar shook his head with theatrical sorrow and announced loudly so the other passengers could hear: "What a tragedy! You have lived like a beast in the dark! In that case, my poor man, at least half of your entire life has been completely wasted!"

Just as the scholar finished speaking, a violent mountain squall swept down the gorge. A monstrous wave slammed against the side of the skiff, snapping the steering rudder and smashing a hole through the floorboards. As icy water rushed into the boat and it began to sink rapidly beneath the white foam, the passengers screamed in terror. Nasruddin dropped his oars, stripped off his heavy coat, and turned to the trembling professor, who was clutching his parchment scrolls with white knuckles. "Professor," shouted Nasruddin above the roar of the water, "have you ever in your life studied the practical science of swimming?" "No, alas, heavens preserve me, never!" shrieked the petrified grammarian. "Then, my dear professor," shouted Nasruddin as he dove gracefully into the river, "your whole life has been completely wasted, for this boat is going straight to the bottom!"`;
  }

  if (id === 'mulla-nasruddin-51-the-itch') {
    return `On a sweltering summer afternoon in the bazaar of Akşehir, Mulla Nasruddin was seen sitting upon a wooden bench outside the spice shop, scratching his left arm with furious, desperate violence. Using both of his hands, he scraped his fingernails up and down his left sleeve from the elbow to the wrist, his teeth gritted in intense concentration, groaning softly with every scrape.

A passing friend, startled by the Mulla's frantic motions, stopped in his tracks and asked with concern: "Mulla! What on earth has happened to you? Did you get stung by a hornet, or brushed against a poison nettle? Why in heaven's name are you scratching your left arm with such ferocious violence?"

Nasruddin did not stop scratching for even a fraction of a second. Looking up with a sweat-streaked face, he panted: "Neither hornets nor nettles, my dear friend! My right foot inside my heavy leather boot has developed an unbearable, agonizing itch that is driving me out of my senses!" The friend stared at him in utter disbelief: "If your right foot has an itch, you fool, why on earth are you scratching your left arm?" "Because," replied Nasruddin with completely deadpan logic, "my right foot is all the way down inside my boot under tight laces, whereas my left arm is right here, so much closer and more convenient to my hands!" The friend walked away clutching his head in laughter, marveling at how many people in the world treat the convenient symptom while utterly ignoring the root cause of their troubles.`;
  }

  if (id === 'mulla-nasruddin-60-the-empty-house') {
    return `A traveling merchant from Damascus who was passing through Akşehir stopped outside Mulla Nasruddin’s modest mud-brick cottage and was astonished by what he saw. The front door hung loosely on leather hinges without a bolt; the windows had no wooden shutters or iron grilles; and there was neither a watchdog in the yard nor a lock upon the gate.

The traveler knocked on the doorframe, where Nasruddin was sitting on a straw mat sipping warm water. "Mulla!" exclaimed the merchant with genuine alarm. "Are you mad to live in such a careless manner? Your house has no iron locks, no sturdy bolts, and no watchmen! A band of thieves could walk right in while you sleep and carry off everything you possess into the night!"

Nasruddin looked up from his cup and broke into a broad, cheerful grin. "Let them come, my dear traveler! Let them walk right in with all the crowbars and sacks they please!" chuckled the Mulla. "I have searched this house diligently with a lighted candle for twenty years, in every cupboard, corner, and floorboard, and I have never managed to find a single valuable thing myself! If a gang of hardworking burglars wants to spend all night searching through my empty jars, they will only wear themselves out; and if by some happy miracle they happen to bring a fresh loaf of bread and a wedge of cheese with them, I shall gladly get out of bed and share supper with them!" The traveler laughed heartily at the Mulla's carefree spirit, realizing that he who owns nothing possesses an invincible fortress against fear.`;
  }

  // General Mulla Synthesizer
  const p1_openings = [
    `In the bustling Anatolian town of Akşehir, where donkey carts rattled through the spice bazaar and tea glasses clinked under the plane trees, lived Mulla Nasruddin. One afternoon,`,
    `Beneath the shade of the grand mulberry tree in the village square, where the townsfolk gathered to escape the midday heat and exchange gossip, Mulla Nasruddin found himself in the middle of a curious scene.`,
    `Mulla Nasruddin was famous throughout the province for his uncanny ability to confound pompous scholars, corrupt magistrates, and nosy neighbors with his razor-sharp eccentric wit. On this particular morning,`,
    `Riding through the dusty lanes on his trusty gray donkey—often sitting backward so he could keep an eye on where he had been—Mulla Nasruddin was approached by the local villagers.`
  ];
  const p1_open = p1_openings[Math.abs(id.length) % p1_openings.length];

  const s0 = sentences[0] || summary || 'an unusual dispute arose that required the unique judgment of Mulla Nasruddin';
  const s1 = sentences[1] || 'A crowd of curious onlookers gathered in a circle, eagerly anticipating how the Mulla would resolve the impossible dilemma.';
  const s2 = sentences[2] || 'With deadpan gravity and a twinkle in his eye, Nasruddin delivered his unforgettable verdict.';
  const s3 = sentences.slice(3).join(' ') || '';

  const p1 = `${p1_open} ${s0}. The local folk, who never missed an opportunity to hear the Mulla’s unexpected pronouncements, quickly formed an expectant circle around him, stroking their beards and whispering among themselves.`;

  const p2 = `Seeing everyone staring at him with grave expressions, Nasruddin adjusted his voluminous turban with theatrical dignity. ${s1} Rather than offering a conventional, boring answer that any dry scholar might recite, the Mulla approached the problem from an angle that no one in the village had ever dreamed possible.`;

  const p3 = `With effortless timing and a completely straight face, Nasruddin delivered his masterstroke: ${s2} ${s3} The entire square erupted into bewildered chuckles and hearty laughter, leaving the bewildered questioners shaking their heads in admiration, proving that ${moral.toLowerCase().replace(/\.$/, '')}.`;

  return [p1, p2, p3].join('\n\n');
}
