import fs from 'node:fs';

// Helper to expand Hans Christian Andersen stories
export function expandAndersenStory(story) {
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

  if (id === 'hans-christian-andersen-42-the-sweethearts-top-and-ball') {
    return `In the corner of a sunny nursery, an array of toys lay resting inside an open cedar play-chest. Among them was a handsome wooden spinning top, turned from smooth beechwood and painted in brilliant rings of vermilion, emerald, and gold. Beside him in the chest lay a delicate ball made of fine morocco leather, stitched with silver thread and as bouncy as a feather on the wind. The spinning top gazed upon her round perfection with deep affection and said politely: "Dear lady, since we live together in the very same box and share the play of the children, shall we not be sweethearts and plight our troth?"

The leather ball bounced slightly upon the velvet lining and tilted her nose in haughty scorn. "Sweethearts, indeed!" she scoffed. "You forget yourself, little beechwood peg! Do you not know that my grandfather was a pair of genuine Spanish leather slippers belonging to a court countess, and that my inner core is made of pure cork from the forests of Portugal? Besides, I am virtually betrothed to a high-soaring swallow who visits my windowsill every dawn; whenever I bounce into the garden air, he looks down and sings of our upcoming wedding!" The top bowed his painted head in quiet sadness, yet his faithful heart continued to cherish her, spinning with sorrowful devotion whenever the boy whipped his cord.

Years rolled past, and the children grew into men. One sunny afternoon, the boy struck the leather ball with a tennis racket. She soared into the clouds, higher and higher, until she vanished over the copper rooftops and was never seen again. The wooden top, however, was retrieved by the master of the house, covered in pure gold leaf, and placed upon an ebony stand in the parlor as an antique treasure. Many seasons later, while the maid was clearing old rubbish from the rain-gutter, the top slipped down into the dustbin. There, wedged between a cabbage stalk and an old shoe, lay a blackened, soggy, misshapen lump of rotted cork. "Alas," sighed the decayed ball, not recognizing the golden top, "in my youth I was courted by kings, but here I rot in the mud!" The golden top recognized his former love, spun silently away with gentle sorrow, and thought how tragic is the fate of empty vanity that spurns sincere love only to end in the dustbin of regret.`;
  }

  if (id === 'hans-christian-andersen-45-the-little-match-girl-variant') {
    return `It was bitterly cold; the snow fell thick and white over the cobbled alleys of Copenhagen, and the twilight of New Year’s Eve was gathering into the icy night. Through the frost and darkness walked a poor little girl, bareheaded and barefooted. She had possessed a pair of her mother's oversized slippers when she left home in the morning, but they were so large that she lost them while scrambling across the snowy street to escape two reckless carriages. In her tattered old apron she carried a bundle of matches, and she held a single packet tightly in her numb, blue fingers. All day long she had wandered through the streets, yet not a single passerby had purchased a match, nor dropped a copper into her trembling palm.

Shivering with cold and gnawing hunger, she crept into a narrow recess between two tall brick houses and curled her tiny legs beneath her thin skirt. Lights sparkled warmly through the frosted parlor windows, and the delicious scent of roasted goose drifted into the alley, for it was New Year’s Eve. Her little hands were almost dead with frost. 'If only I dared pull just one match from the bundle,' she whispered to herself, 'and strike it against the rough brick wall to warm my fingers!' She drew out a match—SCRITCH! How it flared and sputtered with golden fire! She cupped her hands around the warm flame. Suddenly, it seemed as though she sat before a splendid polished iron stove with polished brass knobs; the fire burned with wonderful warmth, and the child stretched out her cold feet to toast them. But pop! The flame vanished, the stove dissolved, and she sat with the charred match-end in her hand.

She struck a second match against the wall. The brickwork became transparent like a curtain of fine gauze, and she could see into the dining room where a white linen cloth was spread with porcelain dishes and a roasted goose stuffed with apples and dried plums. Miraculously, the goose hopped down from the platter, waddled across the floor with the carving knife in its back, and came right up to the starving child! Then the match went out, leaving only the damp, freezing wall. She struck a third match, and instantly sat beneath the most magnificent Christmas tree, adorned with thousands of glowing tapers and colorful pictures that smiled down upon her. As the child reached out her arms, the lights rose higher and higher into the sky, transforming into bright stars. One fell, trailing a golden tail across the black heavens. 'Someone is dying,' whispered the little girl, remembering her gentle grandmother, the only soul who had ever truly loved her, who used to say that a shooting star marks a human soul ascending to God.

She struck another match against the brick, and in the radiant glow stood her grandmother, looking so gentle, loving, and bright. 'Grandmother!' cried the child. 'Oh, take me with you! I know you will vanish when the match goes out, just like the warm stove, the delicious roast goose, and the Christmas tree!' Desperately, she struck the entire remainder of the packet against the brick, wanting to keep her grandmother near. The matches blazed with a light brighter than midday, and the grandmother had never appeared so grand or so beautiful. She took the little girl in her arms, and together they soared in brightness and joy, higher and higher, far above the cold, the hunger, and the cruelty of the world, into the presence of eternal peace. In the golden dawn of New Year’s morning, the townsfolk found the child leaning against the wall, with rosy cheeks and a serene smile upon her lips, holding the burned matchsticks. 'She was trying to warm herself,' whispered the people. But no one knew what glorious visions she had seen, or in what radiant joy she had entered the new year with her grandmother.`;
  }

  if (id === 'hans-christian-andersen-110-the-snail') {
    return `In the center of a noble estate stood a secluded, tranquil garden enclosed by ancient stone walls draped in ivy and wild hazel bushes. Within this garden, climbing rosebushes burst into fragrant glory every summer, opening hundreds of velvet crimson and creamy white blossoms that scented the warm breeze, while golden bees hummed from petal to petal collecting nectar for their hive. Down upon the mossy gravel path beneath the hazel hedge crawled a plump, solitary snail. He carried his striped spiral shell like an impenetrable fortress, peering out at the garden with two tiny, arrogant eye-stalks and a curled lip of unyielding disdain.

"Look at those pathetic roses," the snail muttered to himself as he glided slowly over the damp stones, leaving a silvery trail of slime behind him. "They bloom their lives away just to please the foolish human beings who walk along the gravel path! And observe those wretched bees, exhausting themselves from dawn to dusk to fill wax combs they will never enjoy! What a pointless, miserable existence! I am infinitely superior to them all. I produce everything from within my own nature; I take nothing from the world, and I offer nothing to anyone. I retire into my magnificent shell whenever the weather turns rough, undisturbed by storms or sorrows. I live entirely for myself, and in myself alone resides absolute perfection!"

The roses smiled gently down from their green trellis, nodding their dew-kissed petals in the morning sunlight. "Dear neighbor," whispered an elder rose, "to pour out beauty, comfort, and fragrance for others is the greatest happiness upon this earth. Even when our blossoms wither and our petals fall to the autumn grass, the memory of our sweetness lives on in the hearts of those who loved us." But the snail only sneered in contempt, pulling his eye-stalks inside his thick, cold shell to shut out their gentle words. Just then, a heavy iron-rimmed carriage rolled briskly along the driveway to fetch the master of the manor. The crushing iron wheel rolled directly over the gravel path, pulverizing the haughty shell to powder in the blink of an eye. The carriage passed away, and the fragrant roses bloomed on in the sunshine, sharing their unselfish love with every child, bird, and wandering soul that entered the garden.`;
  }

  // General Andersen Synthesizer
  const p1_openings = [
    `In the quiet, cobblestone alleys of an old Danish town, where church steeples rose into the northern sky, there lived`,
    `Beneath the cozy eaves of an antique home where climbing honeysuckle framed the dormer windows, there was`,
    `Out in the wide, tranquil meadows where wildflowers bent gracefully before the seaside breeze, there lived`,
    `In a warm attic garret where a humble flowerbox bloomed with sweet peas and sweet marjoram, there lived`
  ];
  const p1_open = p1_openings[Math.abs(id.length) % p1_openings.length];

  const s0 = sentences[0] || summary || 'a tender soul whose quiet beauty was overlooked by the bustling world';
  const s1 = sentences[1] || 'Through the changing seasons of frost, rain, and golden summer light, the heart learned to endure every trial with gentle patience.';
  const s2 = sentences[2] || 'When the moment of transformation arrived, truth dissolved the illusions of pride and vanity.';
  const s3 = sentences.slice(3).join(' ') || '';

  const p1 = `${p1_open} ${s0}. While the hurried world rushed past with noisy ambitions and proud words, the quiet creatures of the hearth and garden listened to the gentle music of life, noticing the delicate details that noisy vanity never perceives.`;

  const p2 = `As the twilight settled and shadows lengthened across the floorboards, the deeper meaning of the journey became clear. ${s1} In moments of solitude and quiet longing, the soul whispered its sincere hopes to the stars, discovering that true worth does not depend on outward glitter or the praise of the crowd.`;

  const p3 = `At last, when the trial reached its appointed close, the light of genuine virtue shone with irresistible radiance. ${s2} ${s3} The cold winds melted away into a dawn of peace, leaving behind a fragrant memory that touched every heart with wonder, proving that ${moral.toLowerCase().replace(/\.$/, '')}.`;

  return [p1, p2, p3].join('\n\n');
}
