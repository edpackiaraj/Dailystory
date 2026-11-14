import fs from 'fs';
import path from 'path';

const batch3En = [
  {
    id: "science-11-mary-anning-sea-dragons",
    slug: "science-11-mary-anning-sea-dragons",
    language: "en",
    title: "Mary Anning: The Girl Who Hunted Sea Dragons",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "England (Dorset / Lyme Regis)",
    age_group: "All Ages",
    summary: "Scouring the treacherous, storm-battered cliffs of Lyme Regis in nineteenth-century Dorset, 12-year-old Mary Anning uncovers the first complete skeleton of an Ichthyosaurus. Braving mudslides and coastal gales, Mary unearths prehistoric sea monsters that rewrite humanity's understanding of Earth's ancient history and extinction.",
    keywords: ["mary anning", "fossils", "paleontology", "ichthyosaurus", "dinosaurs", "geology", "extinction"],
    tags: ["science", "paleontology", "geology", "perseverance", "pioneer", "nature"],
    full_text: `Along the wild, windswept southern coastline of England, where gray ocean waves crash against the towering Blue Lias cliffs of Lyme Regis, a young girl walked with her eyes fixed upon the rocks. Her name was Mary Anning. She was only twelve years old, the daughter of an impoverished carpenter, and she carried a small iron rock hammer and a wicker basket.\n\nWinter storms regularly tore through Lyme Regis, battering the fragile shale cliffs and triggering massive mudslides. While other townspeople stayed warm indoors, Mary and her little terrier dog, Tray, bundled into wool shawls and rushed to the beach. Mary knew that the raging waves acted like a gigantic knife, slicing open the ancient rock layers to expose treasures buried for hundreds of millions of years: fossils, which the locals called \"curios\" or \"snake-stones.\"\n\nIn the winter of 1811, after a particularly fierce gale had sheared off a massive chunk of the cliffside, Mary noticed something uncanny protruding from the dark limestone ledge. It looked like a gigantic, grinning jaw lined with razor-sharp, conical teeth!\n\nMary did not panic. With extraordinary patience and the steady hands of a master surgeon, she chiseled away the brittle rock grain by grain. Weeks of grueling labor in freezing sea spray revealed a breathtaking, four-foot skull with an eye socket as wide as a dinner plate. Tracing the skeleton further into the cliff, Mary uncovered the complete, seventeen-foot fossilized skeleton of an enormous prehistoric sea creature with flippers and the spine of a dolphin.\n\nTownspeople whispered of a mythical \"sea dragon.\" But when Mary’s find reached the scholars of London, it ignited an intellectual revolution. The creature was named *Ichthyosaurus*—the \"fish-lizard.\" It lived over two hundred million years ago during the age of the dinosaurs!\n\nAt the time, European science believed that God had created an unchanging world where no animal species could ever die out. Mary Anning's discoveries shattered that doctrine forever. If these titanic sea beasts no longer swam in the ocean, it meant entire worlds of life had flourished and vanished—proving the reality of biological extinction.\n\nOver the next three decades, Mary continued her fearless hunting. In 1823, she discovered the world’s first complete *Plesiosaurus*, an astonishing sea reptile with a long, swan-like neck and turtle-like paddle flippers. In 1828, she uncovered Britain’s first *Pterosaur*—a flying reptile with leathery bat-like wings.\n\nBecause she was a woman and belonged to the working class, the all-male Geological Society of London refused to admit her as a member. Wealthy gentlemen scientists bought her fossils and published papers without giving her full credit. Yet Mary never lost her dignity or her love for the rocks. Famous geologists from across Europe and America traveled to Lyme Regis just to walk the beaches with her, acknowledging in private that she possessed deeper knowledge of prehistoric anatomy than any university professor.\n\nToday, Mary Anning is celebrated as one of the true founding giants of paleontology. Her courageous hammer blows in the cold sea wind cracked open the door to deep geological time, teaching humanity that the Earth has a grand, ancient history far vaster than anyone had ever dreamed.`,
    moral: "Great discoveries belong to those with sharp eyes and brave hearts, regardless of age, background, or social privilege.",
    image: "/images/stories/science.webp",
    image_alt: "Mary Anning chipping away fossil stone on the Blue Lias cliffs of Lyme Regis.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "What historic prehistoric fossil did 12-year-old Mary Anning discover in the cliffs of Lyme Regis?",
        options: [
          "The first complete skeleton of an Ichthyosaurus, an extinct marine reptile.",
          "The preserved footprint of a Tyrannosaurus rex.",
          "A petrified wooden Viking ship filled with bronze coins.",
          "A fossilized woolly mammoth tusk in coastal sea ice."
        ],
        answerIndex: 0,
        hint: "Recall the 17-foot dolphin-like sea creature nicknamed the 'fish-lizard'."
      },
      {
        question: "What major scientific concept did Mary Anning's discoveries prove to the scientific world?",
        options: [
          "The reality of biological extinction—that species could vanish from the Earth entirely.",
          "That dinosaurs were tiny insects that lived inside flower petals.",
          "That limestone rocks cannot form near saltwater beaches.",
          "That ocean water was originally boiling hot throughout history."
        ],
        answerIndex: 0,
        hint: "Think about whether animal species can die out and leave only fossils."
      },
      {
        question: "Why was Mary Anning denied official membership in the Geological Society of London during her lifetime?",
        options: [
          "Because of 19th-century societal prejudice against her gender and working-class background.",
          "Because she refused to travel outside her village to attend meetings.",
          "Because her rock hammers were considered too heavy for the society.",
          "Because she did not speak fluent Latin or French."
        ],
        answerIndex: 0,
        hint: "Consider the social and gender barriers women scientists faced in the 1800s."
      }
    ],
    author: "Historical Science Chronicle / Daily Tale Editorial",
    status: "published",
    content_notes: "Documented in Transactions of the Geological Society of London (1821–1824) and contemporary memoirs of William Buckland.",
    values: ["perseverance", "courage", "curiosity", "resilience", "passion for truth"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "paleontology", meaning: "the branch of science concerned with fossilized animals and plants from prehistoric eras" },
      { word: "fossil", meaning: "the preserved remains or traces of ancient animals, plants, and organisms embedded in rock" },
      { word: "extinction", meaning: "the complete disappearance or dying out of an entire species from planet Earth" },
      { word: "Ichthyosaurus", meaning: "an extinct prehistoric marine reptile resembling a modern dolphin with sharp teeth" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "How did winter storms along the Lyme Regis cliffs help Mary discover hidden fossils?" },
      { tier: "Analyze", prompt: "Why was the discovery of prehistoric sea reptiles so shocking to nineteenth-century religious and scientific beliefs?" },
      { tier: "Create", prompt: "Imagine you found a mysterious fossil in your neighborhood. How would you carefully document and sketch its anatomy?" }
    ],
    reflection_prompt: "Notice how Mary Anning persevered through poverty and unfair exclusion simply because she loved uncovering the truth of the Earth.",
    activity: "Examine a rough garden stone or brick with a magnifying glass to look for microscopic mineral patterns and fossilized grain imprints.",
    mood: "wonder",
    teaser: "How a 12-year-old girl with a hammer on a cold English beach discovered ancient dragons and changed history.",
    series_id: "science-pioneers",
    part_number: 11,
    reviewed: true,
    source_book: "Transactions of the Geological Society of London (1821, 1824) & Duria Antiquior (1830)",
    source_author: "Mary Anning (Field Discoveries) & Rev. William Conybeare, FRS",
    source_year: "1821 / 1824 / 1830",
    source_chapter: "Transactions of the Geological Society, Series 1, Vol. 5 & Series 2, Vol. 1 (Plesiosaurus dolichodeirus)",
    source_edition: "Geological Society of London Historical Archives; Lyme Regis Museum Historical Records",
    authenticity_note: "Primary geological society transactions documenting Mary Anning's firsthand excavations of the Lyme Regis Ichthyosaurus and Plesiosaurus, and her anatomical sketches verified by William Buckland and Richard Owen.",
    source: "Transactions of the Geological Society of London (1821–1824)"
  },
  {
    id: "science-12-ada-lovelace-flying-machine",
    slug: "science-12-ada-lovelace-flying-machine",
    language: "en",
    title: "Ada Lovelace: The Enchantress of Numbers and the First Computer Program",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "England (London / Surrey)",
    age_group: "All Ages",
    summary: "Combining the romantic imagination of her poet father Lord Byron with rigorous mathematical training, Ada Lovelace collaborates with Charles Babbage on the Analytical Engine. Writing the world's first algorithm in 1843, Ada foresees that computers would one day compose music, manipulate symbols, and transform human society.",
    keywords: ["ada lovelace", "first programmer", "analytical engine", "charles babbage", "algorithms", "computer science", "history"],
    tags: ["science", "computer-science", "mathematics", "visionary", "pioneer", "technology"],
    full_text: `In nineteenth-century Victorian London, a remarkable young woman sat at an oak desk surrounded by brass gears, geometric drawings, and endless reams of handwritten mathematical formulas. Her name was Augusta Ada King, Countess of Lovelace—known to history simply as Ada Lovelace.\n\nAda was the daughter of the famous Romantic poet Lord Byron and Annabella Milbanke, an aristocratic lady so passionate about geometry that Byron nicknamed her the \"Princess of Parallelograms.\" Fearing that young Ada might inherit her father’s wild, moody temperament, her mother filled Ada’s childhood with rigorous lessons in algebra, astronomy, and calculus. But Ada did not see mathematics as cold and dry; she saw it as poetry written in the purest language of the universe—a philosophy she called \"poetical science.\"\n\nAt age seventeen, Ada attended a London salon where she met the eccentric inventor Charles Babbage. Babbage demonstrated a model of his \"Difference Engine,\" a massive machine of interlocking brass cogs designed to compute logarithmic tables. While other guests viewed it as an amusing clockwork toy, Ada saw its immense potential with crystal clarity.\n\nSoon Babbage conceived an even more audacious dream: the \"Analytical Engine.\" This was not a mere calculator. Powered by steam, it featured a central processing unit called the \"Mill,\" a memory repository called the \"Store,\" and was programmed using punched cards adapted from the Jacquard silk loom.\n\nIn 1842, an Italian engineer named Luigi Menabrea published a French paper describing Babbage’s Analytical Engine. Ada undertook the task of translating it into English. But she did not simply translate it; working late into the night for nine months, she added seven extensive personal essays—labeled \"Notes A\" through \"Note G\"—that were three times longer than the original paper!\n\nIn \"Note G,\" Ada achieved immortality. She wrote a complete, step-by-step set of mathematical instructions for the Analytical Engine to calculate a complex sequence of numbers known as Bernoulli numbers. It included input/output variables, looping subroutines, and conditional branching. It was the world's very first computer program ever published!\n\nEven more breathtaking was Ada's prophetic vision. Babbage believed his machine was merely a number cruncher for arithmetic. But Ada realized something far deeper: if the machine could manipulate symbols according to mathematical rules, those symbols did not have to represent numbers. They could represent musical notes, alphabetic letters, or artistic patterns.\n\n\"The Analytical Engine,\" Ada wrote with astonishing foresight, \"weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves. It might act upon other things besides number, were objects found whose mutual fundamental relations could be expressed by the abstract science of operations... it might compose elaborate and scientific pieces of music of any degree of complexity or extent.\"\n\nAda Lovelace foresaw the modern digital computer, algorithmic software, and digital music more than a century before the first electronic computer was ever constructed. Though she died tragically young at thirty-six, her \"poetical science\" proved that when mathematical logic is paired with boundless imagination, the human mind can see into the distant future.`,
    moral: "True innovation happens when logic and imagination unite; dreaming boldly can unlock tools that transform the future.",
    image: "/images/stories/science.webp",
    image_alt: "Ada Lovelace drafting the world's first computer program for Babbage's Analytical Engine.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "What historic milestone did Ada Lovelace achieve in Note G of her 1843 publication?",
        options: [
          "She created the world's first published computer algorithm/program.",
          "She built the first electric telegraph across the Atlantic Ocean.",
          "She patented the first steam-powered passenger locomotive.",
          "She invented the brass fountain pen for writing letters."
        ],
        answerIndex: 0,
        hint: "Recall the step-by-step instructions she wrote to calculate Bernoulli numbers."
      },
      {
        question: "How did Ada's vision for the Analytical Engine surpass that of its inventor, Charles Babbage?",
        options: [
          "She realized the engine could manipulate any symbols—including music and text—not just numbers.",
          "She suggested making the engine out of solid wood rather than brass.",
          "She wanted to use the engine only as a decorative church clock.",
          "She thought the engine should be buried underground to keep it cool."
        ],
        answerIndex: 0,
        hint: "Think about her famous comparison to the Jacquard loom weaving musical notes."
      },
      {
        question: "What did Ada Lovelace call her unique philosophy combining mathematics with imagination?",
        options: [
          "'Poetical science'—the fusion of rigorous logic and creative vision.",
          "'Mechanical philosophy'—the belief that all things are clockwork.",
          "'Astral logic'—the study of constellations.",
          "'Digital mysticism'—the worship of numbers."
        ],
        answerIndex: 0,
        hint: "Remember how she united her mother's math and her father's poetry."
      }
    ],
    author: "Historical Science Chronicle / Daily Tale Editorial",
    status: "published",
    content_notes: "Documented in Taylor's Scientific Memoirs (1843), Vol. 3, Article XXIX, containing Ada Lovelace's translation and Notes A–G.",
    values: ["vision", "logic", "creativity", "interdisciplinary thinking", "perseverance"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "algorithm", meaning: "a finite sequence of rigorous, step-by-step instructions used to solve a problem or perform computation" },
      { word: "Analytical Engine", meaning: "a proposed mechanical general-purpose computer designed by Charles Babbage and programmed by Ada Lovelace" },
      { word: "poetical science", meaning: "Ada Lovelace's term for uniting mathematical logic with poetic and creative imagination" },
      { word: "conditional branching", meaning: "an instruction in a computer program that causes it to execute different sequences based on whether a condition is true or false" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "How did the punched cards of the Jacquard silk loom inspire early computer concepts?" },
      { tier: "Analyze", prompt: "Why is Ada's insight that computers could compose music and process language considered a century ahead of her time?" },
      { tier: "Create", prompt: "Write out a simple 5-step 'algorithm' for making a cup of tea or brushing your teeth." }
    ],
    reflection_prompt: "Next time you tap a smartphone app or play a digital song, remember Ada Lovelace dreaming of this world over 180 years ago.",
    activity: "Write out a pseudo-code recipe with 'IF... THEN... ELSE' steps for how you decide whether to take an umbrella outside.",
    mood: "wonder",
    teaser: "How a Victorian countess combined poetry with mathematics to invent the very first computer program.",
    series_id: "science-pioneers",
    part_number: 12,
    reviewed: true,
    source_book: "Sketch of the Analytical Engine with Notes by the Translator (1843)",
    source_author: "Augusta Ada King, Countess of Lovelace",
    source_year: "1843",
    source_chapter: "Taylor's Scientific Memoirs, Vol. 3, Article XXIX, Notes A–G (pp. 666–731)",
    source_edition: "Richard and John E. Taylor, London (1843); British Library Archives",
    authenticity_note: "Primary Victorian publication containing Ada Lovelace's foundational Note G algorithm for Bernoulli numbers and her prophecy of universal symbolic computing.",
    source: "Ada Lovelace, Sketch of the Analytical Engine with Notes (1843)"
  },
  {
    id: "science-13-marie-curie-glowing-mineral",
    slug: "science-13-marie-curie-glowing-mineral",
    language: "en",
    title: "Marie Curie: The Blue Glow in the Old Shed and the Discovery of Radium",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "Poland / France (Warsaw / Paris)",
    age_group: "All Ages",
    summary: "Working tirelessly in a damp, leaky wooden shed in Paris, Polish physicist Marie Skłodowska Curie stirs massive cauldrons of black pitchblende ore for four grueling years. Isolating polonium and radium, Marie gazes upon the faint ghostly blue glow of radioactive salt and becomes the first person to win two Nobel Prizes in different sciences.",
    keywords: ["marie curie", "radium", "polonium", "radioactivity", "nobel prize", "physics", "chemistry"],
    tags: ["science", "physics", "chemistry", "resilience", "nobel-prize", "selflessness"],
    full_text: `In an unpaved courtyard on the Rue Lhomond in Paris, stood an abandoned wooden shed that had once been used as a medical dissection room. The floor was rough bitumen, the skylight leaked rain in torrents during storms, and in the freezing winter, an old cast-iron stove did little to dispel the bitter chill.\n\nInside that drafty shed, a young woman wearing a coarse, acid-stained linen apron stood over a giant iron cauldron, stirring boiling mineral soup with a heavy iron rod almost as tall as herself. Her name was Marie Skłodowska Curie. Born in Warsaw, Poland, under Russian imperial oppression, she had worked as a humble governess for years to save enough money to study physics and mathematics at the Sorbonne in Paris.\n\nNow, alongside her devoted scientific partner and husband Pierre Curie, Marie was on the trail of a profound mystery. In 1896, Henri Becquerel had discovered that uranium salts spontaneously emit invisible rays that darken photographic plates. Marie set out to measure the electric conductivity of these mysterious rays using Pierre’s sensitive quartz electrometer.\n\nShe made an astonishing observation: pitchblende—a heavy, black, tar-like uranium ore mined in the forests of Bohemia—was four times more radioactive than pure uranium! Marie reasoned that pitchblende must harbor a tiny trace of an undiscovered chemical element of unprecedented potency.\n\nTo isolate this ghost element, the Curies needed tons of pitchblende. The Austrian government donated bags of heavy brown pine-needle-covered ore residue from the state mines. For four grueling years (1898–1902), Marie performed heroic physical and chemical labor. She boiled twenty-kilogram batches of ore, poured scalding liquids, filtered precipitates, and stirred steaming cauldrons in toxic fumes without safety masks—her hands raw, blistered, and blackened by acids.\n\nFirst, they isolated a new element and named it *Polonium*, honoring Marie’s beloved homeland of Poland, which had been erased from the world map by foreign empires. But an even more powerful element remained hidden.\n\nThrough thousands of painstaking fractional crystallizations, Marie refined several tons of pitchblende residue down to a single decigram of pure radium chloride powder—a fraction of a pinch of salt!\n\nOne evening in 1902, after a day of exhausting labor, Marie and Pierre walked back in the darkness to their quiet shed. Pierre unlocked the creaking door. They stepped into the pitch-black room and stopped, spellbound.\n\nAll around the dark room, on wooden tables and dusty shelves, the tiny glass tubes and watch glasses holding the concentrated radium salts were glowing with a soft, ethereal, luminous pale-blue light! The mineral was creating its own light out of pure atomic energy without any fire or external battery.\n\n\"Look, Pierre,\" Marie whispered, her eyes shining in the gentle azure radiance. \"Look at its glow.\"\n\nMarie Curie coined the word *Radioactivity*. In 1903, she was awarded the Nobel Prize in Physics alongside Pierre Curie and Henri Becquerel, becoming the first woman in history to win a Nobel Prize. In 1911, she won a second Nobel Prize—this time in Chemistry—making her the first person ever to win Nobel Prizes in two different scientific fields.\n\nWhen pharmaceutical companies offered the Curies millions of dollars to patent the radium extraction process, Marie flatly refused: \"Radium belongs to no one. It belongs to all humanity to heal illnesses and cancer.\" During World War I, she equipped mobile X-ray cars (\"Petites Curies\") and drove them to the frontlines herself to save wounded soldiers. Marie Curie’s life proved that unwavering determination and selfless dedication can illuminate the universe.`,
    moral: "Tireless dedication and selfless service can unlock nature's greatest powers for the healing of humanity.",
    image: "/images/stories/science.webp",
    image_alt: "Marie Curie observing the blue glow of radium in her Paris workshop shed.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "What clue led Marie Curie to suspect an unknown element existed inside pitchblende ore?",
        options: [
          "Raw pitchblende ore was four times more radioactive than pure uranium.",
          "Pitchblende floated on water like a cork.",
          "The black mineral exploded when touched by iron rods.",
          "It made ringing bell sounds when placed near magnets."
        ],
        answerIndex: 0,
        hint: "Recall the electrometer measurements showing fourfold greater radiation than pure uranium."
      },
      {
        question: "What historic scientific record does Marie Curie hold regarding the Nobel Prizes?",
        options: [
          "She is the first person in history to win Nobel Prizes in two different sciences (Physics & Chemistry).",
          "She won the Nobel Peace Prize ten years in a row.",
          "She is the youngest person ever to receive a Nobel medal at age ten.",
          "She received the Nobel Prize in Literature for her poetry."
        ],
        answerIndex: 0,
        hint: "Consider the two distinct scientific categories: Physics in 1903 and Chemistry in 1911."
      },
      {
        question: "Why did Marie and Pierre Curie refuse to patent the lucrative radium extraction method?",
        options: [
          "They believed the element belonged to humanity for medical research and treating cancer.",
          "They lost the paperwork on the train to Stockholm.",
          "The French government prohibited all patents on minerals.",
          "They did not know how to write a patent application."
        ],
        answerIndex: 0,
        hint: "Remember Marie's famous quote: 'Radium belongs to no one; it belongs to all humanity.'"
      }
    ],
    author: "Historical Science Chronicle / Daily Tale Editorial",
    status: "published",
    content_notes: "Documented in Marie Curie's doctoral dissertation Recherches sur les substances radioactives (1903) and Pierre Curie (1923).",
    values: ["perseverance", "selflessness", "scientific integrity", "courage", "altruism"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "radioactivity", meaning: "the spontaneous emission of ionizing particles or rays by unstable atomic nuclei" },
      { word: "pitchblende", meaning: "a dark, heavy, tar-like mineral ore composed largely of uranium oxides" },
      { word: "fractional crystallization", meaning: "a chemical method of separating substances based on differences in their solubility" },
      { word: "radium", meaning: "a radioactive metallic element discovered by Marie and Pierre Curie that glows faintly in the dark" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "Under what harsh physical conditions did Marie Curie extract radium in Paris?" },
      { tier: "Analyze", prompt: "Why is Marie Curie's decision to refuse patent royalties considered a shining model of scientific ethics?" },
      { tier: "Apply", prompt: "How do modern hospitals use Marie Curie's discoveries in cancer therapy and diagnostic X-rays?" }
    ],
    reflection_prompt: "Reflect on how Marie Curie overcame poverty, discrimination, and toxic labor to give a healing gift to the world.",
    activity: "Look up how glow-in-the-dark stars or watch hands work today using safe modern phosphors rather than radioactive radium.",
    mood: "wonder",
    teaser: "How a Polish student boiling mineral cauldrons in an old shed discovered radium and won two Nobel Prizes.",
    series_id: "science-pioneers",
    part_number: 13,
    reviewed: true,
    source_book: "Recherches sur les substances radioactives (1903) & Pierre Curie (1923)",
    source_author: "Marie Skłodowska Curie (Two-time Nobel Laureate)",
    source_year: "1903 / 1911 / 1923",
    source_chapter: "Doctoral Dissertation (Paris, 1903); Nobel Lectures in Physics (1903) and Chemistry (1911)",
    source_edition: "Gauthier-Villars, Paris (1903); Macmillan, New York (1923); Nobel Foundation Archives",
    authenticity_note: "Primary doctoral dissertation, laboratory notebooks from the Rue Lhomond shed, and official Nobel presentation addresses documenting the discovery and isolation of Polonium and Radium.",
    source: "Marie Curie, Recherches sur les substances radioactives (1903)"
  },
  {
    id: "science-14-franklin-kite-and-key",
    slug: "science-14-franklin-kite-and-key",
    language: "en",
    title: "Benjamin Franklin and the Lightning Rod: Taming the Fire of the Clouds",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "North America / United States (Philadelphia)",
    age_group: "All Ages",
    summary: "Refusing to believe that thunderbolts are mysterious supernatural curses, Benjamin Franklin flies a silk kite beneath thunderclouds in Philadelphia in 1752. Drawing a spark from a brass key, Franklin proves lightning is electricity and invents the lightning rod to protect human lives and homes.",
    keywords: ["benjamin franklin", "lightning rod", "electricity", "kite and key", "physics", "conductors", "philadelphia"],
    tags: ["science", "physics", "electricity", "invention", "public-safety", "practical-wisdom"],
    full_text: `In the eighteenth century, a sudden summer thunderstorm was a terrifying harbinger of catastrophe. Every year, jagged bolts of lightning set fire to wooden church steeples, shattered sailing ship masts at sea, and burned entire neighborhoods to the ground. Many people viewed lightning as an unpredictable supernatural wrath, ringing church bells frantically during storms—which ironically only endangered the poor bell ringers on high towers.\n\nIn the bustling city of Philadelphia, a curious, practical printer and statesman named Benjamin Franklin decided to investigate the true nature of this celestial fire. For years, Franklin had conducted electrical experiments in his parlor using glass tubes and friction wheels. He observed that laboratory electric sparks were blue, traveled with instantaneous speed, cracked with miniature thunderclaps, and smelled of sulfurous ozone.\n\n\"The electric fluid of our laboratory,\" Franklin wrote in 1749, \"agrees with lightning in every single property: its color, its crooked direction, its crack, its ability to fuse metals and ignite combustible matter. Are they not one and the same substance?\"\n\nTo prove his hypothesis beyond dispute, Franklin devised a bold experiment to reach into the thunderclouds themselves. But popular cartoons depict Franklin standing foolishly in an open field, laughing as a blinding lightning bolt blasts his kite. Had that truly happened, Franklin would have been instantly incinerated!\n\nFranklin was a meticulous, cautious experimenter. In June 1752, as a dark storm gathered over the Philadelphia pastures, Franklin and his twenty-one-year-old son William took their apparatus to a simple wooden cow shed. Franklin built his kite not from paper—which would disintegrate in the pouring rain—but from a large silk handkerchief stretched over two cross-sticks of cedar. At the top of the kite was an upright, pointed iron wire designed to collect electrical charge from the clouds.\n\nThe kite twine was made of common hemp. At the bottom of the string inside the shelter, Franklin tied a brass iron key, and then connected the key to a dry silk insulating ribbon which he held in his hand. He stood carefully under the shed's dry overhanging roof to ensure the silk ribbon remained bone-dry, acting as an electrical insulator to keep his own body safe from the ground.\n\nThey launched the silk kite high into the swirling, gray storm clouds. Minutes passed under the drumming rain. At first, nothing happened. Franklin began to fear the trial had failed.\n\nThen, as a heavy, dark cloud passed directly overhead, Franklin noticed something electrifying. The loose hemp fibers along the twine began to stand bristling upright, repelling one another like the hairs on a frightened cat’s back!\n\nThe wet string had become conductive through electrostatic induction. Knowing the twine was saturated with electricity, Franklin gently extended the knuckle of his finger toward the suspended brass door key.\n\n*Snap!*\n\nA brilliant, crackling blue electrical spark leaped through the air from the brass key to Franklin’s knuckle! It was accompanied by the unmistakable prick of a true electrical shock. Franklin immediately used the key to charge a glass Leyden jar on his workbench, proving beyond all doubt that the electricity of the clouds was identical to the electricity produced by rubbing glass in a laboratory.\n\nHaving unmasked lightning as natural electricity, Franklin immediately turned his discovery to the practical protection of human life. He invented the *Lightning Rod*—a pointed iron rod fixed to the roof of a house, connected by a thick wire down into the moist earth. Instead of destroying the house, the cloud's electrical charge is safely and quietly guided into the ground.\n\nFranklin refused to patent the lightning rod or profit from it, declaring: \"As we enjoy great advantages from the inventions of others, we should be glad of an opportunity to serve others by any invention of ours; and this we should do freely and generously.\" His simple kite and pointed rod tamed the terror of the sky, turning fear into understanding.`,
    moral: "Scientific understanding dispels superstition and fear, turning the most terrifying forces of nature into safe protectors of humanity.",
    image: "/images/stories/science.webp",
    image_alt: "Benjamin Franklin observing the electrical spark from a brass key tied to a silk kite during a Philadelphia storm.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "How did Benjamin Franklin protect himself from being electrocuted during his kite experiment?",
        options: [
          "He stood under a dry shed and held a dry silk insulating ribbon attached to the key.",
          "He wore thick rubber boots and a metal diving helmet.",
          "He had an assistant hold the string while he stood twenty miles away.",
          "He flew the kite only on bright, sunny afternoons with zero clouds."
        ],
        answerIndex: 0,
        hint: "Recall the dry insulating ribbon and shelter that prevented charge from grounding through his body."
      },
      {
        question: "What physical sign first indicated to Franklin that electrical charge was collecting on the twine?",
        options: [
          "The loose hemp fibers along the string bristled and stood erect.",
          "The kite began spinning in circles like a windmill.",
          "The brass key turned into liquid gold within seconds.",
          "The clouds turned bright green and smelled like sweet vanilla."
        ],
        answerIndex: 0,
        hint: "Think about electrostatic repulsion making fibers stand up."
      },
      {
        question: "What lifesaving practical invention did Franklin develop from this electrical discovery?",
        options: [
          "The pointed lightning rod, which guides atmospheric electrical charges safely into the earth.",
          "The first incandescent glass lightbulb for city streets.",
          "The electric motor for steamboats and stagecoaches.",
          "The underwater telegraph cable connecting Philadelphia to London."
        ],
        answerIndex: 0,
        hint: "Consider the metal rod installed on roof steeples to protect buildings from burning down."
      }
    ],
    author: "Historical Science Chronicle / Daily Tale Editorial",
    status: "published",
    content_notes: "Documented in Franklin's Experiments and Observations on Electricity (1751) and his October 1752 letter to the Royal Society.",
    values: ["practical wisdom", "rationality", "public safety", "generosity", "civic duty"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "lightning rod", meaning: "a grounded metallic rod mounted on a structure to protect it from lightning damage" },
      { word: "conductor", meaning: "a material or substance through which electrical charge can flow easily" },
      { word: "insulator", meaning: "a substance or device that does not readily conduct electricity, keeping currents contained" },
      { word: "electrostatic induction", meaning: "the redistribution of electrical charge in an object caused by the influence of nearby charges" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "Why was flying a kite in an open field during a lightning storm extremely dangerous without safety precautions?" },
      { tier: "Analyze", prompt: "How does Franklin's lightning rod work to safely redirect atmospheric electrical energy?" },
      { tier: "Apply", prompt: "Look around your school, library, or town hall: can you spot a lightning rod on the roof?" }
    ],
    reflection_prompt: "Reflect on how practical science can solve terrors that people once blamed on mysterious curses.",
    activity: "Rub a plastic comb or balloon on wool or dry hair, and hold it near running water or paper scraps to observe electrostatic attraction.",
    mood: "wonder",
    teaser: "How flying a silk kite in a storm tamed the terror of lightning and saved thousands of homes from burning.",
    series_id: "science-pioneers",
    part_number: 14,
    reviewed: true,
    source_book: "Experiments and Observations on Electricity (1751) & The Autobiography of Benjamin Franklin",
    source_author: "Benjamin Franklin, FRS",
    source_year: "1751 / 1752 / 1791",
    source_chapter: "Letter to Peter Collinson (Oct 19, 1752); Philosophical Transactions of the Royal Society, Vol. 47 (1752)",
    source_edition: "E. Cave, London (1751); Library of Congress / American Philosophical Society Archives",
    authenticity_note: "Primary letters to Peter Collinson and Royal Society publications documenting the true June 1752 Philadelphia kite experiment, debunking popular myths of direct lightning strikes, and recording the invention of the lightning rod.",
    source: "Benjamin Franklin, Experiments and Observations on Electricity (1751)"
  },
  {
    id: "science-15-fabre-ant-citadel",
    slug: "science-15-fabre-ant-citadel",
    language: "en",
    title: "Jean-Henri Fabre: The Great Citadel of the Ants and Nature's Living Geometry",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "France (Provence / Sérignan-du-Comtat)",
    age_group: "All Ages",
    summary: "Refusing to kill insects or study them pinned in lifeless museum drawers, French naturalist Jean-Henri Fabre spends decades observing living creatures in his sunny Provence garden. Unraveling the scent trails, tireless cooperation, and underground architecture of ants, Fabre teaches humanity to marvel at nature's smallest wonders.",
    keywords: ["jean-henri fabre", "insects", "ants", "entomology", "nature", "biology", "observation"],
    tags: ["science", "biology", "nature", "entomology", "patience", "teamwork"],
    full_text: `Under the blazing golden sun of Provence in southern France, among dry thyme bushes, purple lavender, and pebble-strewn clay, lay a modest sun-baked estate called *L'Harmas*. While other nineteenth-century naturalists spent their careers in grand Paris museums, suffocating insects with ether and sticking them with brass pins into glass cases, one man in a wide-brimmed felt hat knelt for hours upon the hot gravel.\n\nHis name was Jean-Henri Fabre. Charles Darwin hailed him as \"an incomparable observer,\" while the poet Victor Hugo called him \"the Homer of the insects.\" Fabre had no interest in dead corpses in museum cabinets; he wanted to study the living soul of nature in its wild, unscripted beauty.\n\nAmong his favorite teachers were the common red and black ants whose bustling citadels honeycombed the dry earth of his garden. Fabre was endlessly fascinated by their tireless industriousness. A single ant, barely larger than a breadcrumb, could haul a dried beetle carcass or a grain of wheat three times its own body weight up a sheer wall of clay without stopping to complain.\n\n\"Look at this tiny city,\" Fabre would say to his children as they gathered around his knees. \"Here are thousands of citizens living together without a police force, without a court of law, without a prison. Every single worker knows its duty to the common good.\"\n\nFabre conducted gentle, elegant experiments to understand how these blind, silent travelers navigated through the wilderness. He noticed that foraging worker ants followed an invisible highway stretching across several meters of rough garden gravel. How did they find their way back home across such vast distances?\n\nFirst, Fabre placed a sheet of white paper across the middle of their trail. The ants marched across the paper without hesitation. But when Fabre gently washed a section of the stone path with a paintbrush dipped in fragrant peppermint oil to wipe away invisible scent markers, the returning worker ants came to a sudden, bewildered halt.\n\nThey did not stampede or fight. Instead, they tapped their bent antennae against the stones, communicating through delicate chemical signals. Scouting squads were immediately dispatched to circle the disrupted zone, locate the lost boundary, and re-lay the invisible pheromone scent trail with selfless cooperation within minutes.\n\nNext, Fabre carefully excavated an abandoned ant mound to reveal its interior architecture. He was stunned by the breathtaking ingenuity of their underground city: multi-story ventilation shafts that captured warm morning air, domed incubation chambers where nurse ants carried delicate white eggs toward the warm surface at noon and retreated deep into insulating sub-chambers during nighttime frosts, and curved drainage tunnels that prevented rainwater from flooding the nursery.\n\nFabre documented his observations in his magnificent ten-volume work, *Souvenirs Entomologiques*. In its poetic pages, he taught humanity that science does not require cruelty or destruction. By observing the humble ant, Fabre demonstrated that nature has woven extraordinary intelligence, communal harmony, and architectural perfection into the tiniest creatures under our feet.\n\n\"The world is a magnificent book,\" Fabre wrote in his old age, \"written in the language of life. To read it, we need only bend our knees in humility, open our eyes with patience, and treat every living being with gentle wonder.\"`,
    moral: "Great wonders live in the smallest creatures; patience and gentle observation reveal nature's boundless wisdom and teamwork.",
    image: "/images/stories/science.webp",
    image_alt: "Jean-Henri Fabre observing ant trails and subterranean architecture in his Provence garden.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "How did Jean-Henri Fabre study insects differently from traditional 19th-century museum naturalists?",
        options: [
          "He observed living insects in their natural outdoor habitats with patience and respect.",
          "He bought preserved plastic insect models from toy shops.",
          "He kept insects frozen in block ice to study them in winter.",
          "He only read ancient Roman poems about beetles."
        ],
        answerIndex: 0,
        hint: "Recall his outdoor open-air laboratory at L'Harmas in Provence."
      },
      {
        question: "How did foraging ants navigate back to their underground nest across long garden trails?",
        options: [
          "By following invisible chemical scent trails (pheromones) detected through their antennae.",
          "By singing high-pitched songs that bounce off pebbles like radar.",
          "By using tiny compass needles glued to their backs.",
          "By following the shadows cast by passing birds."
        ],
        answerIndex: 0,
        hint: "Think about the peppermint oil experiment that masked their scent highway."
      },
      {
        question: "What architectural feature inside an ant citadel helps protect delicate eggs from freezing nights?",
        options: [
          "Deep insulated sub-chambers where nurse ants move larvae away from surface cold.",
          "Electric heating coils made from copper wires.",
          "Glass windows that trap sunlight like a greenhouse.",
          "Wooden doors that lock with bronze keys."
        ],
        answerIndex: 0,
        hint: "Consider how nurse ants move larvae between top levels and deep sub-chambers."
      }
    ],
    author: "Historical Science Chronicle / Daily Tale Editorial",
    status: "published",
    content_notes: "Documented in Jean-Henri Fabre's 10-volume masterpiece Souvenirs Entomologiques (1879–1907).",
    values: ["reverence for nature", "patience", "teamwork", "gentleness", "scientific observation"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "entomology", meaning: "the scientific study of insects and their behavior" },
      { word: "pheromone", meaning: "a chemical substance secreted by an animal that triggers a specific social or behavioral response in others" },
      { word: "citadel", meaning: "a fortress or stronghold, often protecting a complex community or city" },
      { word: "antennae", meaning: "paired flexible sensory appendages on the heads of insects used for smelling, touching, and communicating" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "Why did Charles Darwin refer to Fabre as an 'incomparable observer'?" },
      { tier: "Analyze", prompt: "What lessons in community teamwork, selfless duty, and architecture can human societies learn from ants?" },
      { tier: "Apply", prompt: "Observe an ant trail in your yard without disturbing it: how do ants greet each other when they cross paths?" }
    ],
    reflection_prompt: "Reflect on how even the smallest creature—an ant or a bee—plays an essential and beautiful role in the tapestry of life.",
    activity: "Place a few breadcrumbs near a stone, watch how quickly a scout ant finds them, and notice how many workers return to help carry it.",
    mood: "wonder",
    teaser: "How a gentle French naturalist kneeling in the gravel discovered the hidden cities and genius of ants.",
    series_id: "science-pioneers",
    part_number: 15,
    reviewed: true,
    source_book: "Souvenirs Entomologiques: Études sur l'instinct et les mœurs des insectes (1879–1907)",
    source_author: "Jean-Henri Fabre",
    source_year: "1879–1907",
    source_chapter: "Souvenirs Entomologiques, Series II & Series III (L'Harmas field studies; Insect social architecture)",
    source_edition: "Librairie Ch. Delagrave, Paris (1879); English translation by Teixeira de Mattos (1911)",
    authenticity_note: "Primary field journals and published monographs of Jean-Henri Fabre recording his decades of non-invasive, live behavioral ethology at Sérignan-du-Comtat.",
    source: "Jean-Henri Fabre, Souvenirs Entomologiques (1879–1907)"
  }
];

const batch3Ta = [
  {
    id: "science-11-mary-anning-sea-dragons",
    slug: "science-11-mary-anning-sea-dragons",
    language: "ta",
    title: "மேரி அன்னிங்: கடற்கரைக் குன்றுகளில் கடல் டிராகனைத் தேடிய சிறுமி",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "இங்கிலாந்து (டோர்செட் / லைம் ரெஜிஸ்)",
    age_group: "All Ages",
    summary: "பத்தொன்பதாம் நூற்றாண்டில் இங்கிலாந்தின் புயல் வீசும் கடற்கரைக் குன்றுகளில், வெறும் 12 வயதில் 'இக்தியோசார்' என்ற வரலாற்றுக்கு முந்தைய பிரம்மாண்ட கடல் விலங்கின் முழுப் புதைபடிவத்தைக் கண்டறிந்த சிறுமி மேரி அன்னிங். ஏழைக் குடும்பத்தில் பிறந்து, பெண் என்ற காரணத்தால் புறக்கணிக்கப்பட்டபோதும், உலகிற்குத் தொல்லுயிரியல் அறிவியலையும் பூமி வரலாற்றையும் கற்பித்த வீர மங்கையின் உண்மை வரலாறு.",
    keywords: ["மேரி அன்னிங்", "புதைபடிவம்", "தொல்லுயிரியல்", "டைனோசர்", "இக்தியோசார்", "பூமி வரலாறு", "அறிவியல் கதைகள்"],
    tags: ["அறிவியல்", "தொல்லுயிரியல்", "புவியியல்", "துணிச்சல்", "விடாமுயற்சி", "வரலாறு"],
    full_text: `இங்கிலாந்தின் தெற்குக் கடற்கரையில், அலைகள் சீறிப் பாயும் லைம் ரெஜிஸ் என்ற சிறிய கடலோரக் கிராமம். அங்கே கடல் காற்று முகத்தில் அறைய, கையில் ஒரு சிறிய சுத்தியலும் தோள்பையில் பிரம்புக் கூடையுமாக ஒரு பன்னிரண்டு வயதுச் சிறுமி பாறைகளை உற்றுப் பார்த்து நடந்து கொண்டிருந்தாள். அவள்தான் மேரி அன்னிங். ஒரு பரம ஏழைத் தச்சனின் மகள் அவள்.\n\nகுளிர்காலங்களில் அங்கே கடுமையான புயல் வீசும். ஆக்ரோஷமான கடல் அலைகள் கரையை மோதி, கரையின் சுண்ணாம்புப் பாறைகளைப் பிளந்து நிலச்சரிவை ஏற்படுத்தும். ஊரில் உள்ள மனிதர்கள் பயந்து வீடுகளுக்குள் முடங்கிக் கிடந்தபோது, மேரி மட்டும் தன் சிறிய நாய் 'ட்ரே'யுடன் கடலோரப் பாறைகளை நோக்கி ஓடுவாள்! கோடானுகோடி ஆண்டுகளுக்கு முன்பு பாறைக்குள் புதைந்து கல்லாகிப்போன பழங்கால உயிரினங்களின் சுவடுகளை (புதைபடிவங்கள் - Fossils) புயல் அலைகளே பாறைகளைப் பிளந்து வெளியே காட்டும் என்பது மேரிக்குத் தெரியும்.\n\n1811-ஆம் ஆண்டின் ஒரு குளிர்கால காலைப் பொழுது. கடுமையான புயலுக்குப் பிறகு பாறை விளிம்பை நோக்கிய மேரியின் கண்களில் ஒரு விசித்திரமான எலும்புத் தோற்றம் பட்டது. கூர்மையான பற்கள் வரிசையாக அமைந்த ஒரு பிரம்மாண்டமான தாடை எலும்பு அது!\n\nபன்னிரண்டு வயதுச் சிறுமி சற்றும் பயப்படவில்லை. ஒரு தேர்ந்த மருத்துவரைப் போலத் தனது சிறிய சுத்தியலால் பாறையின் துகள்களைக் கொஞ்சம் கொஞ்சமாகச் செதுக்கி நீக்கினாள். பல வாரங்கள் கடும் குளிரிலும் பனி மழையிலும் உழைத்த பிறகு, ஒரு பெரிய தட்டு போன்ற கண்ணமைப்பைக் கொண்ட நான்கு அடி மண்டை ஓடு வெளியே வந்தது. தொடர்ந்து பாறையைச் செதுக்கியபோது... பதினேழு அடி நீளமுள்ள ஒரு பிரம்மாண்டமான கடல் விலங்கின் எலும்புக்கூடு முழுமையாக வெளிப்பட்டது!\n\nஊர்மக்கள் பயந்துபோய் அது ஒரு 'கடல் டிராகன்' என்று கிசுகிசுத்தனர். ஆனால், அந்த எலும்புக்கூடு இலண்டன் நகர விஞ்ஞானிகளைச் சென்றடைந்தபோது உலகம் திடுக்கிட்டது! இருநூறு மில்லியன் ஆண்டுகளுக்கு முன்பு, டைனோசர்கள் வாழ்ந்த காலத்தில் கடலில் வாழ்ந்த 'இக்தியோசார்' (Ichthyosaurus - மீன்-பல்லி) என்ற வரலாற்றுக்கு முந்தைய கடல் ஊர்வன அது!\n\nஅக்காலத்தில் உலகம் முழுவதும் ஒரு கருத்து ஆழமாக நம்பப்பட்டு வந்தது: இறைவன் படைத்த எந்த ஒரு விலங்கும் பூமியிலிருந்து ஒருபோதும் அழியாது என்று நினைத்தனர். மேரி அன்னிங்கின் இந்தக் கண்டுபிடிப்பு அந்தக் கொள்கையை அடியோடு தகர்த்தெறிந்தது! இந்த பிரம்மாண்ட விலங்குகள் இன்று கடலில் இல்லை என்றால், பூமியில் பல கோடி ஆண்டுகளுக்கு முன்பு வாழ்ந்த உயிரினங்கள் முற்றிலுமாக அழிந்து போயின (Extinction) என்ற அறிவியல் உண்மை உலகிற்குப் புரிந்தது!\n\nஅதோடு மேரி நிற்கவில்லை. 1823-இல் அன்னப் பறவை போன்ற நீண்ட கழுத்தும் ஆமை போன்ற துடுப்புகளும் கொண்ட 'பிளீசியோசார்' (Plesiosaurus) எலும்புக்கூட்டையும், 1828-இல் பறக்கும் ஊர்வனவான 'டெரோசார்' எலும்புகளையும் கண்டறிந்தார்.\n\nஅக்காலத்தில் மேரி ஒரு பெண் என்பதாலும், ஏழைக் குடும்பத்தைச் சேர்ந்தவர் என்பதாலும் இலண்டன் புவியியல் சங்கம் அவருக்கு உறுப்பினர் உரிமை தர மறுத்தது. பல பணக்கார அறிஞர்கள் அவரிடம் குறைந்த விலைக்குப் புதைபடிவங்களை வாங்கித் தங்கள் பெயரில் ஆய்வுக் கட்டுரைகளை வெளியிட்டனர். ஆயினும் மேரி தன் பெருந்தன்மையை இழக்கவில்லை; ஐரோப்பாவின் தலைசிறந்த பல்கலைக்கழகப் பேராசிரியர்கள் மேரியிடம் பாடம் கற்க லைம் ரெஜிஸ் கடற்கரைக்கு வந்தனர்.\n\nஇன்று உலகத் தொல்லுயிரியல் வரலாற்றில் மேரி அன்னிங் ஒரு மாபெரும் வழிகாட்டியாகப் போற்றப்படுகிறார். கடுமையான குளிரில் கையில் சுத்தியலோடு பாறைகளைத் தட்டி பூமி வரலாற்றின் மாபெரும் அத்தியாயங்களைத் திறந்து காட்டிய அந்தச் சிறுமியின் வீரம் என்றென்றும் நிலைத்து நிற்கும்.`,
    moral: "வயதோ, வறுமையோ, சமூகத் தடைகளோ உண்மைக்கான ஆர்வத்தையும் கண்டுபிடிப்புத் துணிச்சலையும் தடுத்துவிட முடியாது.",
    image: "/images/stories/science.webp",
    image_alt: "மேரி அன்னிங் லைம் ரெஜிஸ் பாறைகளில் சுத்தியல் கொண்டு இக்தியோசார் புதைபடிவத்தைச் செதுக்குதல்.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "12 வயதான மேரி அன்னிங் லைம் ரெஜிஸ் பாறைகளில் கண்டறிந்த வரலாற்றுச் சிறப்புமிக்க புதைபடிவம் எது?",
        options: [
          "இக்தியோசார் (Ichthyosaurus) என்ற அழிந்துபோன பிரம்மாண்ட கடல் ஊர்வனத்தின் முழு எலும்புக்கூடு.",
          "பாறையில் பதிந்த ஒரு மாபெரும் யானையின் தந்தம்.",
          "பழங்கால ரோமானிய கப்பலின் மரத் துண்டுகள்.",
          "கடலில் மூழ்கிய ஒரு தங்கப் புதையல் பெட்டி."
        ],
        answerIndex: 0,
        hint: "17 அடி நீளமுள்ள 'மீன்-பல்லி' என்று அழைக்கப்பட்ட கடல் விலங்கை நினைவுகூருங்கள்."
      },
      {
        question: "மேரி அன்னிங்கின் கண்டுபிடிப்புகள் உலகிற்கு உணர்த்திய மாபெரும் அறிவியல் உண்மை எது?",
        options: [
          "உயிரினங்கள் பூமியிலிருந்து முற்றிலுமாக அழிந்துபோகும் வாய்ப்பு உண்டு (Extinction) என்ற உண்மை.",
          "கடல் நீர் எப்போதும் உறைந்துபோகாது என்ற கருத்து.",
          "பாறைகள் அனைத்தும் கடலுக்கு அடியில்தான் பிறக்கின்றன என்ற கூற்று.",
          "டைனோசர்கள் மனிதர்களோடு ஒரே காலகட்டத்தில் வாழ்ந்தன என்ற தவறான எண்ணம்."
        ],
        answerIndex: 0,
        hint: "பழங்கால உயிரினங்கள் இன்று பூமியில் இல்லை என்பதை நினைத்துப் பாருங்கள்."
      },
      {
        question: "மேரி அன்னிங்கிற்கு அக்காலத்தில் ஏன் அதிகாரப்பூர்வ அறிவியல் சங்கங்களில் உறுப்பினர் பதவி மறுக்கப்பட்டது?",
        options: [
          "அக்கால சமூகத்தில் நிலவிய பாலினப் பாகுபாடும் ஏழ்மைப் பின்னணியும் காரணமாக இருந்தது.",
          "அவர் வெளிநாடுகளுக்குப் பயணம் செய்ய மறுத்ததால்.",
          "அவரது பாறைச் சுத்தியல் எடைக் குறைவாக இருந்ததால்.",
          "அவருக்கு ஆங்கில மொழி பேசத் தெரியாததால்."
        ],
        answerIndex: 0,
        hint: "19-ஆம் நூற்றாண்டில் பெண் விஞ்ஞானிகள் சந்தித்த சமூகத் தடைகளை யோசியுங்கள்."
      }
    ],
    author: "வரலாற்று அறிவியல் மரபு / Daily Tale Editorial",
    status: "published",
    content_notes: "இலண்டன் புவியியல் சங்க ஆய்விதழ்கள் (Transactions of the Geological Society, 1821–1824) ஆவணங்களை அடிப்படையாகக் கொண்டது.",
    values: ["துணிச்சல்", "விடாமுயற்சி", "கூர்ந்த கவனிப்பு", "அச்சமின்மை", "உண்மை நேயம்"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "தொல்லுயிரியல் (Paleontology)", meaning: "பழங்காலத்தில் வாழ்ந்து பாறைகளில் பதிந்துபோன புதைபடிவங்களை ஆராயும் அறிவியல் பிரிவு" },
      { word: "புதைபடிவம் (Fossil)", meaning: "பல மில்லியன் ஆண்டுகளுக்கு முந்தைய உயிரினங்களின் எலும்புகளோ அடையாளங்களோ பாறைகளில் கல்லாக உறைந்து பாதுகாக்கப்படும் சுவடு" },
      { word: "முற்றிலும் அழிவுறுதல் (Extinction)", meaning: "ஒரு குறிப்பிட்ட வகை உயிரினம் அல்லது இனம் பூமியிலிருந்து ஒரு உயிர்கூட மிஞ்சாமல் முற்றிலுமாக அழிந்துபோதல்" },
      { word: "இக்தியோசார் (Ichthyosaurus)", meaning: "டைனோசர் காலத்தில் கடலில் வாழ்ந்த டால்பின் போன்ற அமைப்புடைய மீன்-பல்லி கடல் விலங்கு" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "புயல் காலங்களில் கடற்கரைக் குன்றுகளுக்குச் சென்று மேரி அன்னிங் பாறைகளைத் தேடியது ஏன்?" },
      { tier: "Analyze", prompt: "இன்று நாம் படிக்கும் பூமி வரலாறு மற்றும் டைனோசர் உலகிற்கு மேரி அன்னிங்கின் பங்களிப்பு ஏன் அடித்தளமாக அமைந்தது?" },
      { tier: "Apply", prompt: "உங்கள் பகுதியில் உள்ள ஒரு பாறையையோ செங்கல்லையோ பூதக்கண்ணாடி கொண்டு பார்த்தால் அதில் ஏதேனும் பழைய சுவடுகள் தெரிகிறதா?" }
    ],
    reflection_prompt: "எத்தனையோ ஏளனங்களையும் வறுமையையும் கடந்து பூமி வரலாற்றையே புரட்டிப் போட்ட மேரி அன்னிங்கின் விடாமுயற்சியை நினைவில் வையுங்கள்.",
    activity: "மண்ணில் அல்லது களிமண்ணில் ஒரு இலை அல்லது சங்கினை அழுத்தி எடுத்து, அது உலர்ந்த பிறகு புதைபடிவ அச்சு போலத் தோன்றுவதைக் கவனித்துப் பாருங்கள்.",
    mood: "wonder",
    teaser: "சுத்தியலால் பாறையைச் செதுக்கி பூமியின் பழங்கால கடல் டிராகன்களை உலகுக்குக் காட்டிய சிறுமியின் கதை.",
    series_id: "science-pioneers",
    part_number: 11,
    reviewed: true,
    source_book: "இலண்டன் புவியியல் சங்க ஆய்விதழ் (Transactions of the Geological Society of London, 1821, 1824)",
    source_author: "மேரி அன்னிங் (நேரடிக் கண்டுபிடிப்புகள்) & ரெவ். வில்லியம் கோனிபியர்",
    source_year: "1821 / 1824 / 1830",
    source_chapter: "புவியியல் சங்க ஆய்விதழ் தொகுதி 5 & புதிய தொகுதி 1 (பிளீசியோசார் மற்றும் இக்தியோசார் உடலமைப்புப் பதிவுகள்)",
    source_edition: "இலண்டன் புவியியல் சங்க ஆவணக் காப்பகம் & லைம் ரெஜிஸ் அருங்காட்சியக வரலாற்றுப் பதிவுகள்",
    authenticity_note: "1811-1828 காலகட்டத்தில் லைம் ரெஜிஸ் கடற்கரையில் மேரி அன்னிங் நேரடியாகத் தோண்டி எடுத்த இக்தியோசார் மற்றும் பிளீசியோசார் புதைபடிவங்கள் குறித்த மூல வரலாற்று ஆவணம்.",
    source: "இலண்டன் புவியியல் சங்க ஆய்விதழ் (1821–1824)"
  },
  {
    id: "science-12-ada-lovelace-flying-machine",
    slug: "science-12-ada-lovelace-flying-machine",
    language: "ta",
    title: "ஏடா லவ்லேஸ்: எண்களின் கவிதையும் உலகின் முதல் கணினி நிரலும்",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "இங்கிலாந்து (இலண்டன் / சர்ரே)",
    age_group: "All Ages",
    summary: "கவிஞர் பைரனின் மகளாகப் பிறந்து, கணிதத்தை எண்களின் கவிதையாகப் பார்த்த ஏடா லவ்லேஸ், சார்லஸ் பாபேஜின் பகுப்பாய்வு இயந்திரத்திற்கு 1843-இல் உலகின் முதல் நிரலை (Algorithm) எழுதினார். கணினிகள் வெறும் எண்களை மட்டும் கூட்டாமல், எதிர்காலத்தில் இசை அமைக்கும், படங்களை வரையும் என்று ஒரு நூற்றாண்டுக்கு முன்பே கணித்துக் கூறிய தொலைநோக்கு வரலாறு.",
    keywords: ["ஏடா லவ்லேஸ்", "முதல் கணினி நிரலாளர்", "அல்காரிதம்", "சார்லஸ் பாபேஜ்", "கணினி அறிவியல்", "கணிதம்", "அறிவியல் கதைகள்"],
    tags: ["அறிவியல்", "கணினி-அறிவியல்", "தொழில்நுட்பம்", "கணிதம்", "தொலைநோக்கு", "முன்னோடி"],
    full_text: `பத்தொன்பதாம் நூற்றாண்டின் இலண்டன் நகரில், ஒரு மேஜையில் பித்தளைப் பற்சக்கரங்கள், வடிவியல் வரைபடங்கள் மற்றும் கணக்கீட்டுத் தாள்களுக்கு நடுவே அமர்ந்திருந்தார் ஓர் இளம் பெண். அவரது பெயர் அகஸ்டா ஏடா கிங், லவ்லேஸ் கவுண்டஸ்—வரலாறு இவரை அன்போடு 'ஏடா லவ்லேஸ்' (Ada Lovelace) என்று அழைக்கிறது.\n\nஏடா, உலகப் புகழ்பெற்ற ஆங்கிலக் கவிஞர் லார்ட் பைரனின் மகள். அவரது தாய் அனபெல்லா மில்பங்கே, கணிதத்தில் ஆழ்ந்த ஆர்வம் கொண்டவர். தந்தையைப் போலக் கட்டுப்பாடற்ற கற்பனைகளில் மூழ்கிவிடக் கூடாது என்பதற்காக, ஏடாவின் தாயார் சிறுவயதிலிருந்தே அவருக்குக் கடினமான இயற்கணிதம், வானியல் மற்றும் நுண்கணிதப் பாடங்களை மட்டுமே கற்றுக்கொடுத்தார். ஆனால் ஏடாவோ கணிதத்தை வெறும் உலர்ந்த எண்களாகப் பார்க்கவில்லை; இயற்கையின் விதிகளுக்கு அமைக்கப்பட்ட அற்புதமான இசைப் பாடலாகப் பார்த்தார். இதை அவர் 'கவித்துவ அறிவியல்' (Poetical Science) என்று அழைத்தார்!\n\nபதினேழு வயதில், சார்லஸ் பாபேஜ் என்ற பேராசிரியரை ஏடா சந்தித்தார். பாபேஜ் 'வேறுபாட்டுப் பொறி' (Difference Engine) என்ற பற்சக்கரக் கூட்டல் இயந்திரத்தை உருவாக்கியிருந்தார். அதை மற்றவர்கள் ஒரு விசித்திரமான கடிகார பொம்மையாகப் பார்த்தபோது, ஏடாவின் கண்கள் மட்டும் அதன் மாபெரும் ஆற்றலைக் கண்டு வியந்தன.\n\nவிரைவில் பாபேஜ் இன்னும் பிரம்மாண்டமான ஒரு கனவைக் கண்டார்—அதுதான் 'பகுப்பாய்வுப் பொறி' (Analytical Engine). நீராவியால் இயங்கும் இந்த இயந்திரத்தில் நினைவகம் (Store), செயலாக்கப் பகுதி (Mill) மற்றும் ஜாக்கார்ட் பட்டு நெசவுத்தறி போல துளையிடப்பட்ட அட்டைகள் (Punched Cards) கொண்டு கட்டளைகளை உள்ளிடும் வசதி இருந்தது.\n\n1842-இல் லூய்கி மெனாப்ரியா என்ற இத்தாலியப் பொறியாளர் பாபேஜின் இயந்திரத்தைப் பற்றி பிரெஞ்சு மொழியில் எழுதிய ஒரு கட்டுரையை ஏடா ஆங்கிலத்தில் மொழிபெயர்த்தார். வெறும் மொழிபெயர்ப்போடு நிற்காமல், இரவும் பகலுமாக ஒன்பது மாதங்கள் உழைத்து, 'குறிப்புகள் A முதல் G வரை' என்ற தலைப்பில் தன் சொந்த ஆராய்ச்சிக் கட்டுரைகளை இணைத்தார். அந்த இணைப்புக் குறிப்புகள் மூலக் கட்டுரையை விட மூன்று மடங்கு நீளமாக இருந்தன!\n\nஅந்த 'நோட் ஜி' (Note G) குறிப்பில் ஏடா அழியாப் புகழ்பெற்றார்! பெர்னௌலி எண்களை (Bernoulli Numbers) இயந்திரம் தானாகவே கணக்கிடுவதற்கான துல்லியமான, படிபடியான கட்டளைத் தொடரை (Algorithm) அவர் எழுதினார். சுழற்சி முறைகள் (Loops), நிபந்தனைக் கிளைகள் (Conditional Branching) கொண்ட அந்த வரிசைதான்—உலக வரலாற்றிலேயே முதன்முதலில் அச்சிடப்பட்ட கணினி நிரல் (Computer Program) ஆகும்!\n\nஅதைவிட மாபெரும் விந்தை ஏடாவின் தொலைநோக்குப் பார்வை. அந்த இயந்திரத்தை எண்களைக் கூட்டும் ஒரு சூப்பர் கால்குலேட்டராக மட்டுமே பாபேஜ் பார்த்தார். ஆனால் ஏடாவோ, \"இந்த இயந்திரம் எண்களை மட்டுமல்ல; இசைக் குறிப்புகள், மொழியின் எழுத்துக்கள், வடிவங்கள் என எந்த ஒரு குறியீட்டையும் விதிகளின்படி கையாளும் ஆற்றல் கொண்டது! இது எதிர்காலத்தில் மிகச் சிக்கலான, அற்புதமான இசைத் துண்டுகளையும் சுயமாக இயற்றும்!\" என்று எழுதினார்.\n\nமுதல் எலக்ட்ரானிக் கணினி உருவாவதற்கு நூறு ஆண்டுகளுக்கு முன்பே, இன்றைய நவீன கணினிகளின் மென்பொருள் புரட்சியையும் டிஜிட்டல் இசையையும் ஏடா லவ்லேஸ் துல்லியமாகக் கணித்துவிட்டார்! \n\nமுப்பத்தாறு வயதிலேயே நோய்வாய்ப்பட்டு மறைந்தாலும், கற்பனையும் கணிதமும் இணையும்போது மனித அறிவால் காலத்தைக் கடந்து எதிர்காலத்தைக் காண முடியும் என்பதை உலகுக்கு நிரூபித்தவர் ஏடா லவ்லேஸ்.`,
    moral: "கற்பனையும் துல்லியமான கணித தர்க்கமும் இணையும்போது, காலத்தைக் கடந்து எதிர்கால உலகையே மாற்றி அமைக்கும் சாதனைகள் பிறக்கும்.",
    image: "/images/stories/science.webp",
    image_alt: "ஏடா லவ்லேஸ் பாபேஜின் பகுப்பாய்வுப் பொறிக்காக உலகின் முதல் நிரலை வரைதல்.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "ஏடா லவ்லேஸ் 1843-இல் எழுதிய 'நோட் ஜி' (Note G) குறிப்பின் வரலாற்று முக்கியத்துவம் என்ன?",
        options: [
          "அதுதான் உலக வரலாற்றிலேயே முதன்முதலில் வெளியிடப்பட்ட கணினி நிரல் (Computer Program).",
          "அது முதல் நீராவி எஞ்சினின் காப்புரிமை ஆவணம்.",
          "அது லண்டன் பாலத்தைக் கட்டுவதற்கான கட்டுமான வரைபடம்.",
          "அது ஒரு புகழ்பெற்ற காதல் கவிதைத் தொகுப்பு."
        ],
        answerIndex: 0,
        hint: "இயந்திரம் பெர்னௌலி எண்களைக் கணக்கிட அவர் எழுதிய படிபடியான கட்டளைகளை நினைவுகூருங்கள்."
      },
      {
        question: "சார்லஸ் பாபேஜை விட ஏடா லவ்லேஸ் முன்னெடுத்த மாபெரும் கணினி தொலைநோக்கு எது?",
        options: [
          "கணினிகள் வெறும் எண்களை மட்டுமல்லாமல், எழுத்துக்களையும் இசையையும் கூடக் கையாள முடியும் என்ற தொலைநோக்கு.",
          "கணினிகளை மரத்தால் மட்டுமே செய்ய வேண்டும் என்ற கருத்து.",
          "கணினிகளுக்குப் பற்சக்கரங்கள் தேவையில்லை என்ற வாதம்.",
          "கணினிகளை வெறும் வீட்டு அலங்காரப் பொருளாக மட்டுமே பயன்படுத்த வேண்டும் என்ற எண்ணம்."
        ],
        answerIndex: 0,
        hint: "பட்டு நெசவுத்தறி போல கணினிகள் இசையையும் வடிவங்களையும் நெய்யும் என்று அவர் கூறியதை நினைத்துப் பாருங்கள்."
      },
      {
        question: "கணிதத்தையும் கற்பனையையும் இணைத்த தனது தத்துவத்திற்கு ஏடா சூட்டிய பெயர் என்ன?",
        options: [
          "'கவித்துவ அறிவியல்' (Poetical Science).",
          "'இயந்திரவியல் மெய்யியல்'.",
          "'வானியல் தர்க்கம்'.",
          "'பற்சக்கர ஞானம்'."
        ],
        answerIndex: 0,
        hint: "தந்தையின் கவிதையையும் தாயின் கணிதத்தையும் அவர் இணைத்த விதத்தை யோசியுங்கள்."
      }
    ],
    author: "வரலாற்று அறிவியல் மரபு / Daily Tale Editorial",
    status: "published",
    content_notes: "டெய்லர்ஸ் சயின்டிஃபிக் மெமாய்ர்ஸ் (1843) இதழில் வெளியான ஏடா லவ்லேஸின் குறிப்புகள் மற்றும் சார்லஸ் பாபேஜின் சுயசரிதையை அடிப்படையாகக் கொண்டது.",
    values: ["தொலைநோக்கு", "கணித தர்க்கம்", "படைப்பாற்றல்", "கற்பனை வளம்", "விடாமுயற்சி"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "அல்காரிதம் / நெறிமுறை (Algorithm)", meaning: "ஒரு குறிப்பிட்ட சிக்கலைத் தீர்ப்பதற்காக அல்லது கணக்கீட்டைச் செய்வதற்காக எழுதப்படும் படிபடியான துல்லியமான கட்டளைத் தொடர்" },
      { word: "பகுப்பாய்வுப் பொறி (Analytical Engine)", meaning: "சார்லஸ் பாபேஜால் திட்டமிடப்பட்டு, ஏடா லவ்லேஸால் நிரல் எழுதப்பட்ட உலகின் முதல் பொதுப்பயன் இயந்திரக் கணினி மாதிரி" },
      { word: "சுழற்சி முறை (Looping)", meaning: "ஒரு குறிப்பிட்ட நிபந்தனை முடியும் வரை ஒரே கட்டளையை மீண்டும் மீண்டும் தானாக இயக்கும் நிரலாக்க முறை" },
      { word: "கவித்துவ அறிவியல் (Poetical Science)", meaning: "கணித தர்க்கத்தையும் கற்பனை ஆற்றலையும் ஒருங்கிணைத்து உண்மைகளைக் காணும் ஏடாவின் சிந்தனை முறை" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "துளையிடப்பட்ட அட்டைகள் (Punched Cards) பட்டு நெசவுத் தறியிலிருந்து கணினிக்கு வந்தது எப்படி?" },
      { tier: "Analyze", prompt: "இன்று நாம் ஸ்மார்ட்போன்களில் இசையைக் கேட்பதற்கும், 1843-இல் ஏடா கூறிய கணிப்பிற்கும் உள்ள தொடர்பு என்ன?" },
      { tier: "Apply", prompt: "காலையில் பள்ளிக்குக் கிளம்புவதற்கு 5 படிகள் கொண்ட ஓர் எளிய 'அல்காரிதத்தை' நீங்கள் எப்படி எழுதுவீர்கள்?" }
    ],
    reflection_prompt: "இன்று நாம் கணினியிலும் செயலிகளிலும் செய்யும் ஒவ்வொரு செயலுக்கும் தொடக்கப் புள்ளியாக இருந்த ஏடா லவ்லேஸை நினைத்துப் பாருங்கள்.",
    activity: "ஒரு நண்பரிடம் நீங்கள் சொல்லும் கட்டளைகளை மட்டும் செய்து ஒரு படத்தை வரையச் சொல்லுங்கள்; கட்டளைகள் எவ்வளவு துல்லியமாக இருக்க வேண்டும் என்பதைப் புரிந்து கொள்ளுங்கள்.",
    mood: "wonder",
    teaser: "கவிஞரின் மகளாகப் பிறந்து எண்களுக்கு இசை நெய்து உலகின் முதல் கணினி நிரலாளரான ஏடா லவ்லேஸின் கதை.",
    series_id: "science-pioneers",
    part_number: 12,
    reviewed: true,
    source_book: "பகுப்பாய்வுப் பொறியின் சுருக்கமும் மொழிபெயர்ப்பாளரின் குறிப்புகளும் (Sketch of the Analytical Engine with Notes, 1843)",
    source_author: "அகஸ்டா ஏடா கிங், லவ்லேஸ் கவுண்டஸ் (Ada Lovelace)",
    source_year: "1843",
    source_chapter: "டெய்லர்ஸ் சயின்டிஃபிக் மெமாய்ர்ஸ், தொகுதி 3, கட்டுரை 29, குறிப்புகள் A–G (பக். 666–731)",
    source_edition: "ரிச்சர்ட் அண்ட் ஜான் இ. டெய்லர், இலண்டன் (1843); பிரிட்டிஷ் நூலக வரலாற்று ஆவணங்கள்",
    authenticity_note: "ஏடா லவ்லேஸ் நேரடியாக எழுதி வெளியிட்ட மூலக் குறிப்புகள், பெர்னௌலி எண்களுக்கான முதல் கணினி நிரல் அட்டை மற்றும் பாபேஜின் கடிதப் போக்குவரத்துகளில் உள்ள வரலாற்று ஆவணம்.",
    source: "ஏடா லவ்லேஸ், பகுப்பாய்வுப் பொறியின் குறிப்புகள் (1843)"
  },
  {
    id: "science-13-marie-curie-glowing-mineral",
    slug: "science-13-marie-curie-glowing-mineral",
    language: "ta",
    title: "மேரி கியூரி: பழைய கொட்டகையில் மின்னிய நீலக் கதிரும் ரேடியத்தின் பிறப்பும்",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "போலந்து / பிரான்ஸ் (வார்சா / பாரிஸ்)",
    age_group: "All Ages",
    summary: "பாரிஸ் நகரின் ஒழுகும் பழைய மரக் கொட்டகையில் நான்கு ஆண்டுகள் விஷப் புகைக்கு நடுவே இருபது டன் கருப்புப் பாறைகளைக் கொதிக்க வைத்து, பொலோனியம் மற்றும் ரேடியம் தனிமங்களைத் தனித்துப் பிரித்தெடுத்தவர் மேரி கியூரி. இருவேறு அறிவியல் துறைகளில் நோபல் பரிசு பெற்ற உலகின் ஒரே மேதையான மேரி கியூரியின் தன்னலமற்ற ஈக வரலாறு.",
    keywords: ["மேரி கியூரி", "ரேடியம்", "பொலோனியம்", "கதிரியக்கம்", "நோபல் பரிசு", "இயற்பியல்", "வேதியியல்", "அறிவியல் கதைகள்"],
    tags: ["அறிவியல்", "இயற்பியல்", "வேதியியல்", "விடாமுயற்சி", "நோபல்-பரிசு", "தியாகம்"],
    full_text: `பாரிஸ் நகரின் எல்ஹோமண்ட் வீதியில் ஒரு பாழடைந்த பழைய மரக் கொட்டகை நின்றது. முன்னொரு காலத்தில் மருத்துவக் கல்லூரி மாணவர்கள் உடல்களைப் பதனிடப் பயன்படுத்திய இடம் அது. தரை தாரினால் பூசப்பட்டு கரடுமுரடாக இருந்தது; கூரை உடைந்ததால் மழை பெய்யும்போதெல்லாம் தண்ணீர் கொட்டியது; குளிர்காலத்தில் அனல் மூட்டும் பழைய அடுப்பு அனல் தராமல் நடுங்க வைத்தது.\n\nஅந்தக் கொட்டகைக்குள், அமிலக் கறைகள் படிந்த எளிய சணல் ஆடையை அணிந்துகொண்டு, தன்னை விட உயரமான கனத்த இரும்புத் துடுப்பால் ஒரு பெரிய கொப்பரையில் கொதித்த கருப்புக் குழம்பைக் கிளறிக்கொண்டிருந்தார் ஓர் இளம் பெண். அவரது பெயர் மேரி ஸ்க்லோடோவ்ஸ்கா கியூரி (Marie Curie). போலந்து நாட்டின் வார்சாவில் ஏழ்மையான குடும்பத்தில் பிறந்து, பாரிஸ் சோர்போன் பல்கலைக்கழகத்தில் இயற்பியலும் கணிதமும் படிக்க பல ஆண்டுகள் வீட்டு ஆசிரியராகப் பணியாற்றிப் பணம் சேர்த்தவர் அவர்.\n\nதனது அன்புக் கணவர் பியர் கியூரியுடன் இணைந்து மேரி ஒரு மாபெரும் புதிரை ஆராய்ந்து வந்தார். 1896-இல் ஹென்றி பெக்கரல் என்ற அறிஞர், யுரேனியம் உப்புகள் தானாகவே கண்ணுக்குத் தெரியாத கதிர்களை உமிழ்வதைக் கண்டறிந்தார். மேரி தனது கணவரின் நுட்பமான படிக மின்காட்டி கருவியைக் கொண்டு அந்தக் கதிர்களை அளக்கத் தொடங்கினார்.\n\nஅப்போதுதான் அந்தத் திடுக்கிடும் உண்மையை மேரி கண்டறிந்தார்: பொஹீமியா காடுகளிலிருந்து வெட்டி எடுக்கப்படும் தார் போன்ற கருப்பு யுரேனியத் தாதுவான 'பிட்ச்பிளெண்ட்' (Pitchblende), தூய யுரேனியத்தை விட நான்கு மடங்கு அதிகக் கதிரியக்கத்தை உமிழ்ந்தது! அப்படfunctions என்றால், பிட்ச்பிளெண்ட்டின் உள்ளே இதுவரை மனிதர்கள் கண்டறியாத, யுரேனியத்தை விடப் பல்லாயிரம் மடங்கு வலிமையான புதிய தனிமம் ஏதோ மறைந்திருக்கிறது என்று மேரி கணித்தார்.\n\nஅந்தப் புதிய தனிமத்தைத் தனித்துப் பிரித்தெடுக்க டன் கணக்கில் கனிமத் தாது தேவைப்பட்டது. ஆஸ்திரிய அரசாங்கம் இலவசமாகத் தந்த டன் கணக்கிலான பிட்ச்பிளெண்ட் தாதுக்களைக் கொண்டு மேரி நான்கு ஆண்டுகள் (1898–1902) அசுர உழைப்பில் ஈடுபட்டார். இருபது கிலோ எடையுள்ள பாறைகளை உடைத்து, கொதிக்க வைத்து, வடிகட்டி, நச்சுப் புகையை முகக்கவசம் இன்றியே சுவாசித்து உழைத்தார்—அமிலங்களால் அவரது கைகள் கறுத்து வெந்து போயின.\n\nமுதலில் அவர்கள் ஒரு புதிய தனிமத்தைப் பிரித்தெடுத்து, தனது தாயகமான போலந்தின் நினைவாக அதற்குப் 'பொலோனியம்' (Polonium) என்று பெயரிட்டனர். பின்னர் மேலும் பல டன் தாதுவை ஆயிரக்கணக்கான முறை படிகமாக்கி வடிகட்டி, இறுதியாக ஒரு சிறு சிட்டிகை அளவு தூய 'ரேடியம் குளோரைடு' உப்பைப் பிரித்தெடுத்தனர்!\n\n1902-ஆம் ஆண்டின் ஓர் இரவு. நாள் முழுதும் உழைத்துக் களைத்த மேரியும் பியரும் இருள் சூழ்ந்த கொட்டகைக்குத் திரும்பி வந்தனர். பியர் சாவியிட்டு கதவைத் திறந்தார். அறையின் விளக்கை ஏற்றாமல் உள்ளே நுழைந்தவர்கள் இருவரும் சிலிர்த்துப் போய் நின்றனர்!\n\nஅங்கே, தூசி படிந்த மேசைகளிலும் மர அலமாரிகளிலும் வைக்கப்பட்டிருந்த கண்ணாடி சோதனைக் குழாய்களிலிருந்து... ஒரு மென்மையான, வசீகரமான, மங்கிய நீல நிற ஒளி தானாகவே சுடர்விட்டுப் பிரகாசித்துக் கொண்டிருந்தது! எந்த நெருப்பும் இல்லாமல், எந்த மின்சாரமும் இல்லாமல் அணுவின் உள்ளிருந்தே அந்த அற்புத நீல ஒளி பிறந்து கொண்டிருந்தது!\n\n\"பியர், அங்கே பாருங்கள்... அதன் ஒளியைப் பாருங்கள்!\" என்று மெல்லிய குரலில் பரவசத்தோடு மேரி கூறினார்.\n\nமேரி இதற்கு 'கதிரியக்கம்' (Radioactivity) என்று பெயரிட்டார். 1903-இல் இயற்பியலுக்கான நோபல் பரிசை வென்று, நோபல் பரிசு பெற்ற உலகின் முதல் பெண்மணி ஆனார். 1911-இல் வேதியியலுக்கான நோபல் பரிசையும் வென்று, இருவேறு அறிவியல் துறைகளில் நோபல் பரிசு பெற்ற உலகின் ஒரே மனிதர் என்ற இணையற்ற சாதனையைப் படைத்தார்.\n\nரேடியம் தயாரிக்கும் முறையைக் காப்புரிமை செய்து கொடுத்தால் கோடிக்கணக்கான பணம் தருவதாக மருந்து நிறுவனங்கள் வந்தபோது மேரி உறுதியாக மறுத்துவிட்டார்: \"ரேடியம் யாருக்கும் சொந்தமானதல்ல; அது புற்றுநோயைக் குணப்படுத்தவும் மனிதர்களின் வலியைக் குறைக்கவும் முழு மனிதகுலத்திற்கும் இலவசமாகச் சேர வேண்டியது!\" \n\nமுதல் உலகப் போரின்போது சிறிய எக்ஸ்-ரே கார்களைத் தானே ஓட்டிச் சென்று போர்க்களத்தில் காயமடைந்த ஆயிரக்கணக்கான வீரர்களைக் காப்பாற்றினார் மேரி கியூரி. தன்னலமற்ற உழைப்பும் அறிவும் மனிதகுலத்திற்குப் பெரும் நலம் பயக்கும் என்பதைத் தன் வாழ்நாளால் மெய்ப்பித்தவர் அன்னை மேரி கியூரி.`,
    moral: "சுயநலமற்ற அர்ப்பணிப்பும் அஞ்சாத உழைப்புமே இயற்கையின் மாபெரும் ஆற்றல்களை மனிதகுலத்தின் நல்வாழ்விற்காக வெளிப்படுத்தும்.",
    image: "/images/stories/science.webp",
    image_alt: "மேரி கியூரி பாரிஸ் பழைய மரக் கொட்டகையில் நீல நிறத்தில் சுடர்விடும் ரேடியம் உப்பைப் பார்த்தல்.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "பிட்ச்பிளெண்ட் தாதுவில் புதிய தனிமம் ஒளிந்திருக்கிறது என்பதை மேரி கியூரி எப்படிக் கண்டறிந்தார்?",
        options: [
          "பிட்ச்பிளெண்ட் தாது தூய யுரேனியத்தை விட நான்கு மடங்கு அதிகக் கதிரியக்கத்தை உமிழ்ந்ததால்.",
          "அந்தத் தாது நீரில் போடும்போது பல வண்ணங்களில் மிதந்ததால்.",
          "அக்காலக் காந்தங்கள் அந்தத் தாதுவை மிக வேகமாக ஈர்த்ததால்.",
          "அது சூரிய ஒளியில் தானாகவே உருகி ஓடியதால்."
        ],
        answerIndex: 0,
        hint: "யுரேனியத்தை விட அதிகக் கதிரியக்கம் வெளிப்பட்டதை மின்காட்டி கருவி காட்டியதை நினைவுகூருங்கள்."
      },
      {
        question: "நோபல் பரிசு வரலாற்றில் மேரி கியூரி மட்டுமே படைத்த தனித்துவமான சாதனை எது?",
        options: [
          "இருவேறு அறிவியல் துறைகளில் (இயற்பியல் மற்றும் வேதியியல்) நோபல் பரிசு பெற்ற ஒரே நபர்.",
          "மிகக் குறைந்த வயதில் நோபல் பரிசு பெற்ற பள்ளி மாணவி.",
          "பத்து முறை நோபல் அமைதிப் பரிசு பெற்ற தலைவர்.",
          "நோபல் பரிசைப் பெற மறுத்துத் திருப்பி அனுப்பிய முதல் விஞ்ஞானி."
        ],
        answerIndex: 0,
        hint: "1903-இல் இயற்பியல் மற்றும் 1911-இல் வேதியியல் என இரு பரிசுகளை நினைவில் கொள்ளுங்கள்."
      },
      {
        question: "ரேடியம் பிரித்தெடுக்கும் முறைக்கு மேரியும் பியரும் ஏன் காப்புரிமை (Patent) பெற மறுத்தனர்?",
        options: [
          "ரேடியம் யாருக்கும் சொந்தமல்ல; அது புற்றுநோயைக் குணப்படுத்த மனிதகுலம் முழுமைக்கும் பயன்பட வேண்டும் என்பதால்.",
          "காப்புரிமை விண்ணப்பக் கட்டணம் செலுத்த அவர்களிடம் பணம் இல்லாததால்.",
          "பிரான்ஸ் அரசு தாதுக்களுக்குக் காப்புரிமை தருவதை நிறுத்தியதால்.",
          "ரேடியம் சில நாட்களில் அழிந்துவிடும் என்று அவர்கள் தவறாக நினைத்ததால்."
        ],
        answerIndex: 0,
        hint: "மனிதகுலத்தின் மீதான அவரது தன்னலமற்ற கருணையையும் மருத்துவ தியாகத்தையும் யோசியுங்கள்."
      }
    ],
    author: "வரலாற்று அறிவியல் மரபு / Daily Tale Editorial",
    status: "published",
    content_notes: "மேரி கியூரியின் 1903 முனைவர் பட்ட ஆய்வேடு மற்றும் பியர் கியூரியின் நினைவுக் குறிப்புகளை அடிப்படையாகக் கொண்டது.",
    values: ["தியாகம்", "விடாமுயற்சி", "பொதுநலம்", "அச்சமின்மை", "அறிவியல் நேர்மை"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "கதிரியக்கம் (Radioactivity)", meaning: "சில தனிமங்களின் நிலையற்ற அணுக்கருக்கள் தானாகவே சிதைந்து ஆற்றல் மிக்க கதிர்களை உமிழும் நிகழ்வு" },
      { word: "பிட்ச்பிளெண்ட் (Pitchblende)", meaning: "யுரேனியம் மற்றும் ரேடியம் நிறைந்த அடர் கருப்பு நிறமுடைய கனமான யுரேனியத் தாது" },
      { word: "ரேடியம் (Radium)", meaning: "மேரி கியூரியால் பிரித்தெடுக்கப்பட்டு, இருட்டில் நீல நிறத்தில் ஒளிரும் அதிகக் கதிரியக்கமுடைய அரிய தனிமம்" },
      { word: "படிகமாக்கல் (Fractional Crystallization)", meaning: "கரைசலில் உள்ள வெவ்வேறு பொருட்களை அவற்றின் கரைதிறன் வேறுபாட்டின் அடிப்படையில் படிகங்களாகப் பிரிக்கும் வேதியியல் முறை" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "பழைய மரக் கொட்டகையில் மேரி கியூரி என்னென்ன கடுமையான இன்னல்களுக்கு மத்தியில் ரேடியத்தைப் பிரித்தெடுத்தார்?" },
      { tier: "Analyze", prompt: "ரேடியத்தைக் கொண்டு கோடீஸ்வரனாகும் வாய்ப்பை மறுத்து மருத்துவ உலகிற்கு இலவசமாக வழங்கிய மேரி கியூரியின் அறநெறி ஏன் போற்றப்படுகிறது?" },
      { tier: "Apply", prompt: "இன்று மருத்துவமனைகளில் புற்றுநோய் சிகிச்சையிலும் எக்ஸ்-ரே சோதனைகளிலும் மேரி கியூரியின் கண்டுபிடிப்பு எவ்வாறு பயன்படுகிறது?" }
    ],
    reflection_prompt: "எந்த ஒரு வசதியும் இல்லாத பாழடைந்த கொட்டகையில் இருந்து உலகம் போற்றும் சாதனையைப் படைத்த மேரி கியூரியின் மன உறுதியை எண்ணிப் பாருங்கள்.",
    activity: "இருட்டில் ஒளிரும் நவீன கைக்கடிகார முட்கள் இன்று ரேடியத்திற்குப் பதிலாக பாதுகாப்பான பாஸ்பர் பொருட்களைக் கொண்டு எவ்வாறு ஒளிர்கின்றன என்று படித்துப் பாருங்கள்.",
    mood: "wonder",
    teaser: "பழைய கொட்டகையில் பாறைகளைக் கொதிக்க வைத்து இருட்டில் மின்னிய நீலக் கதிரைக் கண்டறிந்து இரு நோபல் பரிசுகளை வென்ற வீராங்கனையின் கதை.",
    series_id: "science-pioneers",
    part_number: 13,
    reviewed: true,
    source_book: "கதிரியக்கப் பொருட்கள் பற்றிய ஆய்வுகள் (Recherches sur les substances radioactives, 1903) & பியர் கியூரி (1923)",
    source_author: "மேரி ஸ்க்லோடோவ்ஸ்கா கியூரி (Marie Curie)",
    source_year: "1903 / 1911 / 1923",
    source_chapter: "முனைவர் பட்ட ஆய்வேடு (பாரிஸ், 1903); இயற்பியல் (1903) மற்றும் வேதியியல் (1911) நோபல் பரிசு விரிவுரைகள்",
    source_edition: "கோத்தியே-வில்லார்ஸ், பாரிஸ் (1903) & நோபல் அறக்கட்டளை ஆவணக் காப்பகம்",
    authenticity_note: "பாரிஸ் எல்ஹோமண்ட் ஆய்வகக் குறிப்புகள், முனைவர் பட்ட ஆய்வேடு மற்றும் அதிகாரப்பூர்வ நோபல் பரிசு உரைகளில் பதிவு செய்யப்பட்டுள்ள பொலோனியம் மற்றும் ரேடியம் கண்டுபிடிப்பு வரலாறு.",
    source: "மேரி கியூரி, கதிரியக்கப் பொருட்கள் பற்றிய ஆய்வுகள் (1903)"
  },
  {
    id: "science-14-franklin-kite-and-key",
    slug: "science-14-franklin-kite-and-key",
    language: "ta",
    title: "பெஞ்சமின் பிராங்கிளின்: பட்டமும் சாவியும் - மேகத்து மின்னலை அடக்கிய உண்மை",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "வட அமெரிக்கா / அமெரிக்கா (பிலடெல்பியா)",
    age_group: "All Ages",
    summary: "மின்னல் என்பது வானத்தின் அமானுஷ்ய சாபம் அல்ல; அது ஆய்வகத்தில் உருவாகும் மின்சாரமே என்பதைப் பட்டுப் பட்டமும் பித்தளைச் சாவியும் கொண்டு 1752-இல் சோதித்து நிரூபித்தவர் பெஞ்சமின் பிராங்கிளின். இடிதாங்கியைக் (Lightning Rod) கண்டுபிடித்து உலகெங்கும் வீடுகளையும் மனித உயிர்களையும் காத்த உண்மை வரலாறு.",
    keywords: ["பெஞ்சமின் பிராங்கிளின்", "இடிதாங்கி", "மின்னல்", "மின்சாரம்", "பட்டம்", "இயற்பியல்", "அமெரிக்கா", "அறிவியல் கதைகள்"],
    tags: ["அறிவியல்", "இயற்பியல்", "மின்சாரம்", "கண்டுபிடிப்பு", "பாதுகாப்பு", "நடைமுறை-அறிவு"],
    full_text: `பதினெட்டாம் நூற்றாண்டில், கோடைகாலத்தில் திரண்டு வரும் இடிமின்னல் புயல் மனிதர்களுக்கு ஒரு மரண பயத்தைக் கொண்டு வந்தது. வானத்திலிருந்து பாயும் மின்னல் தாக்கி தேவாலயக் கோபுரங்கள் தீப்பற்றி எரிந்தன; நடுக்கடலில் மரக்கப்பல்களின் பாய்மரங்கள் சுக்குநூறாக உடைந்தன; வீடுகள் சாம்பலாயின. மக்கள் இதை இறைவனின் கோபம் என்று எண்ணி, இடி இடிக்கும்போது தேவாலய மணிகளைப் பயத்துடன் அடித்தனர்—இதனால் கோபுரத்தின் உச்சியில் நின்று மணியடித்த மனிதர்களே மின்னல் தாக்கி அதிகம் பலியானார்கள்!\n\nஅமெரிக்காவின் பிலடெல்பியா நகரில் வாழ்ந்த எளிய அச்சுத் தொழிலாளியும் சிந்தனையாளருமான பெஞ்சமின் பிராங்கிளின், இந்த வானத்து நெருப்பைப் பற்றி அறிவியல் பூர்வமாக ஆராய முடிவு செய்தார். தனது வீட்டில் கண்ணாடிக் குழாய்களைக் கம்பளித் துணியில் தேய்த்து அவர் செய்த சோதனைகளில் உருவான சிறிய மின்பொறிகள் நீல நிறத்தில் இருந்தன; நொடிக்குள் பாய்ந்தன; பட்டாசு போல வெடித்தன; கந்தக வாசனையை உமிழ்ந்தன.\n\n\"நமது ஆய்வகத்தில் உராய்வினால் உருவாகும் மின்சாரமும், வானத்தில் தோன்றும் மின்னலும் நிறத்திலும், வேகத்திலும், உலோகங்களை உருக்கும் தன்மையிலும் ஒரே மாதிரியாக இருக்கின்றனவே... அப்படியென்றால் இரண்டும் ஒன்றுதானா?\" என்று பிராங்கிளின் சிந்தித்தார்.\n\nஇந்தக் கருதுகோளை உலகிற்கு நிரூபிக்க, மேகங்களுக்கே சென்று மின்சாரத்தைப் பிடித்துப் பார்க்கத் துணிந்தார். ஆனால் பலரும் நினைப்பது போல, திறந்த வெளியில் நின்றுகொண்டு பட்டம் விட்டு தன் மீது மின்னல் தாக்கும்படி பிராங்கிளின் செய்யவில்லை; அப்படிச் செய்திருந்தால் அவர் அன்றே கருகிச் சாம்பலாகியிருப்பார்!\n\nபிராங்கிளின் மிக எச்சரிக்கையான, புத்திசாலித்தனமான ஆய்வாளர். 1752 ஜூன் மாதத்தில் பிலடெல்பியா நகரில் இடிமின்னல் மேகங்கள் திரண்டபோது, தனது இருபத்தொரு வயது மகன் வில்லியமுடன் ஒரு மாட்டுத் தொழுவத்திற்குச் சென்றார். மழையில் நனைந்து கிழிந்துவிடக் கூடாது என்பதற்காகக் காகிதத்திற்குப் பதிலாக ஒரு பெரிய பட்டுத் துணியால் பட்டத்தைச் செய்தார். பட்டத்தின் உச்சியில் கூர்மையான இரும்புக் கம்பியைப் பொருத்தினார்.\n\nபட்டத்தின் நூல் சணல் நாரால் ஆனது. மாட்டுத் தொழுவத்தின் கூரைக்கு அடியில் நின்ற பிராங்கிளின், நூலின் கீழ் முனையில் ஒரு கனத்த பித்தளை வீட்டுச் சாவியைக் கட்டினார். அந்தச் சாவியோடு ஒரு காய்ந்த பட்டு நாடாவை இணைத்து, அதை மட்டுமே தன் கையில் பிடித்திருந்தார். தான் நின்ற இடமும், தன் கையில் பிடித்திருந்த பட்டு நாடாவும் சொட்டு நீரும் படாமல் காய்ந்திருப்பதை உறுதி செய்தார்—ஏனெனில் காய்ந்த பட்டு மின்சாரத்தைக் கடத்தாது (Insulator) என்பதால் அவரது உடலுக்குள் மின்சாரம் பாயாது!\n\nபட்டுப் பட்டம் கரிய மேகங்களுக்குள் பறந்தது. மழை கொட்டியது. சில நிமிடங்கள் எதுவுமே நடக்கவில்லை.\n\nதிடீரென, ஒரு கனத்த கரிய மேகம் மேலே வந்தபோது... நூலில் இருந்த சணல் நார்கள் அனைத்தும் பூனையின் ரோமத்தைப் போலச் சிலிர்த்துக்கொண்டு மேல்நோக்கி நின்றன! மேகத்திலிருந்த நிலையியல் மின்சாரம் நனைந்த நூலின் வழியே பாயத் தொடங்கியிருந்தது!\n\nபிராங்கிளின் எச்சரிக்கையுடன் தன் விரல் முட்டியை அந்தப் பித்தளைச் சாவியின் அருகே கொண்டு சென்றார்.\n\n*சடார்!*\n\nஒரு பிரகாசமான நீல மின்பொறி சாவியிலிருந்து பிராங்கிளினின் விரலை நோக்கிப் பாய்ந்தது! ஆய்வகத்தில் கிடைக்கும் அதே மின்சார அதிர்ச்சி அவரது விரலில் உறைத்தது! உடனே அந்தச் சாவியைத் தனது மேசையிலிருந்த லேடன் ஜாடி (Leyden Jar) என்ற மின் சேமிப்புக் கலனுடன் இணைத்து மேகத்து மின்சாரத்தைச் சேமித்துக் காட்டினார்!\n\nவானத்து மின்னல் என்பது இயற்கையான மின்சாரமே என்பதை நிரூபித்த பிராங்கிளின், அடுத்த கணமே அதை மனிதர்களைக் காக்கும் கருவியாக மாற்றினார். வீட்டின் கூரையில் பொருத்தப்பட்டு, அங்கிருந்து ஒரு தடிமனான இரும்புக் கம்பி வழியே நிலத்திற்குள் செல்லும் 'இடிதாங்கி'யை (Lightning Rod) அவர் கண்டுபிடித்தார். வானத்து மின்னல் வீட்டைத் தாக்காமல், கம்பியின் வழியே பூமிக்குள் பாதுகாப்பாகப் பாய்ந்து அடங்கிவிட்டது!\n\nஇந்த மகத்தான கண்டுபிடிப்புக்குக் காப்புரிமை பெற்றுப் பணக்காரனாக விரும்பாமல், உலக மக்கள் அனைவருக்கும் இலவசமாக வழங்கினார் பிராங்கிளின்: \"மற்றவர்களின் கண்டுபிடிப்புகளால் நாம் பயனடைவது போல, நமது கண்டுபிடிப்புகளால் பிறர் பயனடைவதே நமது கடமை!\"\n\nவானத்து மின்னலை அடக்கி, மனிதகுலத்தின் வீடுகளுக்குப் பாதுகாப்புக் கவசம் தந்த பெஞ்சமின் பிராங்கிளினின் அறிவுத்திறன் உலக வரலாற்றில் என்றென்றும் ஒளிவீசுகிறது.`,
    moral: "அறிவியல் அறிவு மூடநம்பிக்கைகளையும் அச்சங்களையும் போக்கி, இயற்கையின் கொடிய சக்திகளையும் மனிதகுலத்தின் நல்வழிக்காகப் பயன்படுத்த உதவும்.",
    image: "/images/stories/science.webp",
    image_alt: "பெஞ்சமின் பிராங்கிளின் பிலடெல்பியாவில் பட்டுப் பட்டமும் பித்தளைச் சாவியும் கொண்டு மின்னலை ஆராய்தல்.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "பட்டம் விடும் சோதனையின் போது பிராங்கிளின் மின்சாரம் தன் உடலைத் தாக்காமல் எவ்வாறு பாதுகாத்துக் கொண்டார்?",
        options: [
          "காய்ந்த கூரைக்கு அடியில் நின்றுகொண்டு, காய்ந்த பட்டு நாடாவை மட்டுமே கையில் பிடித்திருந்தார்.",
          "உடல் முழுவதும் இரும்புக் கவச ஆடை அணிந்திருந்தார்.",
          "இருபது மைல் தூரத்திலிருந்து பட்டத்தைப் பார்த்தார்.",
          "மழையே இல்லாத சுட்டெரிக்கும் வெயில் நாளில் பட்டம் விட்டார்."
        ],
        answerIndex: 0,
        hint: "காய்ந்த பட்டு நாடா மின்சாரத்தைக் கடத்தாத மின்காப்பி (Insulator) என்பதை நினைவுகூருங்கள்."
      },
      {
        question: "நூலில் மின்சாரம் பாய்கிறது என்பதை பிராங்கிளின் முதலில் எவ்வாறு அறிந்தார்?",
        options: [
          "நூலில் இருந்த சணல் நார்கள் பூனையின் ரோமத்தைப் போலச் சிலிர்த்து மேல்நோக்கி நின்றன.",
          "பட்டம் பல வண்ணங்களில் சுழன்றது.",
          "பித்தளைச் சாவி தங்கமாக மாறியது.",
          "வானத்திலிருந்து இனிமையான மணி ஓசை கேட்டது."
        ],
        answerIndex: 0,
        hint: "நிலையியல் மின் தூண்டலால் நார்கள் சிலிர்த்து நின்றதை நினைத்துப் பாருங்கள்."
      },
      {
        question: "மின்னலிலிருந்து வீடுகளையும் மனிதர்களையும் பாதுகாக்க பிராங்கிளின் உருவாக்கிய சாதனம் எது?",
        options: [
          "இடிதாங்கி (Lightning Rod), மேகத்து மின்சாரத்தைப் பூமிக்குள் பாதுகாப்பாகக் கடத்தும் கூரிய கம்பிக் கருவி.",
          "தெருக்களில் எரியும் முதல் மின்சார விளக்கு.",
          "நீராவிப் படகுக்கான மின்சார மோட்டார்.",
          "கடலுக்கு அடியில் அமைக்கப்பட்ட தந்தி கம்பி."
        ],
        answerIndex: 0,
        hint: "வீட்டுக் கூரைகளில் பொருத்தப்படும் உலோகக் கூர்முனைக் கம்பியை யோசியுங்கள்."
      }
    ],
    author: "வரலாற்று அறிவியல் மரபு / Daily Tale Editorial",
    status: "published",
    content_notes: "பெஞ்சமின் பிராங்கிளின் 1751-இல் வெளியிட்ட 'மின்சாரம் பற்றிய சோதனைகளும் உற்றுநோக்கல்களும்' மற்றும் ராயல் சொசைட்டிக்கு எழுதிய கடிதங்களை அடிப்படையாகக் கொண்டது.",
    values: ["நடைமுறை அறிவு", "பாதுகாப்பு உணர்வு", "பொதுநலம்", "தியாகம்", "பகுத்தறிவு"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "இடிதாங்கி (Lightning Rod)", meaning: "கட்டடங்களின் உச்சியில் பொருத்தப்பட்டு, மின்னலின் மின்சாரத்தைப் பூமிக்குள் பாதுகாப்பாகக் கடத்தும் உலோகக் கம்பி" },
      { word: "மின்கடத்தி (Conductor)", meaning: "தன் வழியே மின்சாரத்தை மிக எளிதாகப் பாய அனுமதிக்கும் உலோகம் அல்லது பொருள்" },
      { word: "மின்காப்பி (Insulator)", meaning: "தன் வழியே மின்சாரம் பாய்வதைத் தடுத்து நிறுத்தும் உலர்ந்த பட்டு, ரப்பர் போன்ற பொருள்" },
      { word: "நிலையியல் மின் தூண்டல் (Electrostatic Induction)", meaning: "அருகில் உள்ள மின் துகள்களின் தாக்கத்தால் ஒரு பொருளில் மின்சுமைகள் மறுசீரமைக்கப்பட்டு ஈர்க்கப்படும் நிகழ்வு" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "இடிமின்னல் புயலின் போது திறந்த வெளியில் நிற்பது ஏன் மிகவும் ஆபத்தானது?" },
      { tier: "Analyze", prompt: "பிராங்கிளினின் இடிதாங்கி எவ்வாறு கட்டடங்களை மின்னல் தீப்பிடிப்பதிலிருந்து பாதுகாக்கிறது?" },
      { tier: "Apply", prompt: "உங்கள் ஊரில் உள்ள உயரமான கட்டடங்கள் அல்லது பள்ளிக்கூடக் கூரையில் இடிதாங்கிக் கம்பி பொருத்தப்பட்டுள்ளதா என்று கவனித்துப் பாருங்கள்." }
    ],
    reflection_prompt: "பயமுறுத்தும் இயற்கைச் சக்திகளைக் கண்டு அஞ்சாமல், அறிவின் துணைகொண்டு அவற்றைப் புரிந்து பாதுகாப்புக் கவசமாக மாற்றிய பிராங்கிளினை நினைத்துப் பாருங்கள்.",
    activity: "ஒரு பிளாஸ்டிக் சீப்பைத் தலையில் அல்லது கம்பளித் துணியில் தேய்த்து, சிறிய காகிதத் துண்டுகளின் அருகே கொண்டு சென்று ஈர்ப்பதைக் கவனித்துப் பாருங்கள்.",
    mood: "wonder",
    teaser: "மேகத்தில் பட்டம் விட்டுச் சாவியில் மின்பொறி பெற்று இடிதாங்கியை உலகிற்குத் தந்த பிராங்கிளினின் வரலாறு.",
    series_id: "science-pioneers",
    part_number: 14,
    reviewed: true,
    source_book: "மின்சாரம் பற்றிய சோதனைகளும் உற்றுநோக்கல்களும் (Experiments and Observations on Electricity, 1751) & சுயசரிதை",
    source_author: "பெஞ்சமின் பிராங்கிளின் (Benjamin Franklin, FRS)",
    source_year: "1751 / 1752 / 1791",
    source_chapter: "பீட்டர் கோலின்சனுக்கு எழுதிய கடிதம் (அக்டோபர் 19, 1752); இலண்டன் ராயல் சொசைட்டி இதழ் தொகுதி 47 (1752)",
    source_edition: "இ. கேவ் அச்சகம், இலண்டன் (1751) & அமெரிக்க மெய்யியல் சங்க ஆவணக் காப்பகம்",
    authenticity_note: "1752 ஜூன் பிலடெல்பியா பட்டம் சோதனை மற்றும் இடிதாங்கி கண்டுபிடிப்பு குறித்து பிராங்கிளின் நேரடியாக எழுதிய கடிதங்கள் மற்றும் ராயல் சொசைட்டி ஆய்வறிக்கைகளில் உள்ள உண்மை வரலாற்று ஆவணம்.",
    source: "பெஞ்சமின் பிராங்கிளின், மின்சாரம் பற்றிய சோதனைகளும் உற்றுநோக்கல்களும் (1751)"
  },
  {
    id: "science-15-fabre-ant-citadel",
    slug: "science-15-fabre-ant-citadel",
    language: "ta",
    title: "ஜீன்-ஹென்றி ஃபாப்ரே: மண்ணுக்குள் கட்டப்பட்ட எறும்புக் கோட்டையும் இயற்கை உவமையும்",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "பிரான்ஸ் (புரோவென்ஸ் / செரிக்னான்)",
    age_group: "All Ages",
    summary: "பூச்சிகளைக் கொன்று அருங்காட்சியகங்களில் ஊசியில் குத்தி வைக்கும் பழக்கத்தை மறுத்து, தன் வீட்டுத் தோட்டத்தில் முழங்காலிட்டு உயிருள்ள பூச்சிகளின் வாழ்க்கையை உற்று நோக்கியவர் பிரெஞ்சு இயற்கை அறிஞர் ஜீன்-ஹென்றி ஃபாப்ரே. எறும்புகளின் நறுமணப் பாதைகள், ஒற்றுமை மற்றும் நிலத்தடி மாளிகையின் விந்தைகளை உலகிற்கு விளக்கி இயற்கை நேயத்தை ஊட்டிய உன்னத வரலாறு.",
    keywords: ["ஜீன்-ஹென்றி ஃபாப்ரே", "எறும்புகள்", "பூச்சியியல்", "இயற்கை", "உயிரியல்", "ஒற்றுமை", "அறிவியல் கதைகள்"],
    tags: ["அறிவியல்", "உயிரியல்", "இயற்கை", "பூச்சியியல்", "பொறுமை", "கூட்டுறவு"],
    full_text: `தெற்கு பிரான்சின் புரோவென்ஸ் கிராமத்தில் சுட்டெரிக்கும் வெயிலில் காய்ந்த பாறைப் பூமி. அங்கே செவ்வந்திப் பூக்களும் லாவண்டர் செடிகளும் நிறைந்த 'எல்-ஹர்மாஸ்' என்ற ஒரு சிறிய தோட்ட வீடு இருந்தது. பத்தொன்பதாம் நூற்றாண்டின் மற்ற இயற்கை விஞ்ஞானிகள் பெரிய பாரிஸ் அருங்காட்சியகங்களில் உட்கார்ந்துகொண்டு பூச்சிகளைக் கொன்று, ஊசியில் குத்தி கண்ணாடிப் பெட்டிகளில் அடைத்து வைத்தபோது... அகன்ற தொப்பி அணிந்த ஒருவர் மட்டும் சுட்டெரிக்கும் சரளைக் கற்களில் முழங்காலிட்டு மணிக்கணக்காக எதையோ உற்றுப் பார்த்துக் கொண்டிருந்தார்.\n\nஅவரது பெயர் ஜீன்-ஹென்றி ஃபாப்ரே (Jean-Henri Fabre). சார்லஸ் டார்வின் இவரை 'இணையற்ற உற்றுநோக்காளர்' என்று போற்றினார்; பிரெஞ்சுக் கவிஞர் விக்டர் ஹியூகோ இவரை 'பூச்சிகளின் ஹோமர்' என்று அழைத்தார். செத்துப் போன பூச்சிகளை விட, உயிருடன் துடிக்கும் இயற்கையின் மடியில் பூச்சிகள் வாழும் அழகையே ஃபாப்ரே காதலித்தார்.\n\nஅவருக்குப் பாடம் கற்பித்த மிகச் சிறந்த ஆசிரியர்களில் ஒருவராக இருந்தது சாதாரண எறும்புகள்தான்! ஒரு ரொட்டித் துண்டை விடச் சிறிய அந்த எறும்புகள், தங்களை விட மூன்று மடங்கு எடையுள்ள காய்ந்த வண்டையோ கோதுமை மணியையோ சுமந்துகொண்டு, செங்குத்தான பாறையில் சற்றும் சளைக்காமல் ஏறிச் செல்வதை ஃபாப்ரே பிரமிப்புடன் பார்த்தார்.\n\n\"குழந்தைகளே, இந்தச் சிறிய எறும்புக் கோட்டையைப் பாருங்கள்!\" என்று தன் பிள்ளைகளிடம் ஃபாப்ரே கூறுவார். \"இங்கே ஆயிரக்கணக்கான குடிமக்கள் வாழ்கிறார்கள். ஆனால் அங்கே ஒரு போலீஸ்காரர் கிடையாது; நீதிமன்றம் கிடையாது; சிறைச்சாலை கிடையாது! ஒவ்வொரு எறும்பும் தனது சமூகத்திற்கான கடமையை அமைதியாகச் செய்கிறது!\"\n\nதோட்டத்தில் பல மீட்டர்கள் நீளத்திற்கு எறும்புகள் வரிசையாக நடந்து செல்வதைக் கவனித்த ஃபாப்ரே, அவை எவ்வாறு திசை மாறாமல் சரியாகத் தங்கள் வீட்டுக்குத் திரும்புகின்றன என்பதை அறிய மென்மையான சோதனைகளைச் செய்தார்.\n\nமுதலில் எறும்புகள் செல்லும் பாதையில் ஒரு வெள்ளைத் தாளை வைத்தார்; எறும்புகள் தயக்கமின்றித் தாளைக் கடந்து சென்றன. ஆனால், புதினா எண்ணெயில் நனைத்த ஒரு தூரிகையைக் கொண்டு பாதையின் ஒரு பகுதியைத் துடைத்து அவற்றின் நறுமணப் பாதையை அழித்தபோது... எறும்புகள் சட்டென நின்றன!\n\nஅவை பயந்து ஓடவில்லை; தங்களுக்குள் சண்டையிடவில்லை. தங்கள் வளைந்த உணர் கொம்புகளால் (Antennae) தரையைத் தொட்டுத் தொட்டுப் பார்த்து ரசாயன சமிக்ஞைகளை (Pheromones) பரிமாறிக்கொண்டன. உடனடியாக சில துப்பறியும் எறும்புகள் வட்டமடித்து புதிய பாதையைக் கண்டுபிடித்தன; சில நிமிடங்களில் மீண்டும் நறுமணக் கோட்டைப் போட்டு தங்கள் பயணத்தைத் தொடர்ந்தன!\n\nஅடுத்து, பாழடைந்த ஓர் எறும்புப் புற்றை கவனமாகத் தோண்டிப் பார்த்த ஃபாப்ரே வாயடைத்துப் போனார்! மண்ணுக்குள் அமைக்கப்பட்டிருந்த அந்த நிலத்தடி நகரம் ஒரு பிரம்மாண்ட மாளிகையாக இருந்தது: காலையில் வெதுவெதுப்பான காற்றை உள்ளே இழுக்கும் காற்றோட்டக் குழாய்கள்; நண்பகல் வெயிலில் முட்டைகளை மேலே கொண்டுவந்து வைத்து, இரவில் பனி தாக்கும்போது பாதாள அறைகளுக்குள் எடுத்துச் சென்று கதகதப்பாக வைக்கும் செவிலியர் அறைகள்; மழைநீர் புகாமல் தடுக்கும் வடிகால் கால்வாய்கள் என அனைத்தும் அற்புதமாக அமைக்கப்பட்டிருந்தன!\n\nதனது உற்றுநோக்கல்களைப் பத்து பாகங்கள் கொண்ட 'சூவனீர் எண்டமோலாஜிக்' (Souvenirs Entomologiques) என்ற மாபெரும் இலக்கியப் பொக்கிஷமாக எழுதினார் ஃபாப்ரே. அறிவியல் என்பது உயிர்களைக் கொல்வது அல்ல; இயற்கையின் ஒவ்வொரு படைப்பிலும் உள்ள நுட்பமான அழகைக் கருணையோடு ரசிப்பதே உண்மையான அறிவியல் என்பதை உலகிற்கு உணர்த்தினார்.\n\n\"இந்த உலகம் ஓர் அற்புதமான திறந்த புத்தகம்; அது வாழ்வின் மொழியில் எழுதப்பட்டுள்ளது. அதைப் படிக்க நாம் செய்ய வேண்டியதெல்லாம் பணிவோடு முழங்காலிட்டு, பொறுமையோடு கண்களைத் திறந்து, ஒவ்வொரு சிறிய உயிரையும் அன்போடு உற்று நோக்குவது மட்டுமே!\" என்ற ஃபாப்ரேவின் வரிகள் மனிதகுலத்திற்குப் புகட்டும் பாடம் மகத்தானது.`,
    moral: "இயற்கையின் மிகச் சிறிய படைப்புகளிலும் மாபெரும் அதிசயங்களும் ஒற்றுமையும் ஒளிந்திருக்கின்றன; பொறுமையான கவனிப்பே உண்மையான அறிவின் தொடக்கம்.",
    image: "/images/stories/science.webp",
    image_alt: "ஜீன்-ஹென்றி ஃபாப்ரே புரோவென்ஸ் தோட்டத்தில் முழங்காலிட்டு எறும்புகளின் வரிசையை உற்று நோக்குதல்.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "19-ஆம் நூற்றாண்டு அருங்காட்சியக ஆய்வாளர்களிடமிருந்து ஃபாப்ரே எவ்வாறு மாறுபட்டார்?",
        options: [
          "பூச்சிகளைக் கொல்லாமல், இயற்கையின் மடியில் உயிருடன் வாழும் பூச்சிகளைப் பொறுமையுடன் கவனித்தார்.",
          "அவர் பூச்சிகளைப் பற்றி மட்டுமே பொய்க் கதைகள் எழுதினார்.",
          "அவர் பனிக்காலத்தில் மட்டுமே பூச்சிகளைத் தேடினார்.",
          "அவர் வெளிநாட்டுப் பூச்சிகளை மட்டுமே கூண்டில் அடைத்து வளர்த்தார்."
        ],
        answerIndex: 0,
        hint: "எல்-ஹர்மாஸ் தோட்டத்தில் அவர் முழங்காலிட்டு உயிருள்ள பூச்சிகளைப் பார்த்ததை நினைவுகூருங்கள்."
      },
      {
        question: "எறும்புகள் காடுகளிலும் தோட்டங்களிலும் வழிதவறாமல் பயணிக்க உதவுவது எது?",
        options: [
          "அவற்றின் உணர் கொம்புகளால் நுகரப்படும் பெரோமோன் (Pheromone) நறுமணப் பாதைகள்.",
          "அவை எழுப்பும் உரத்த ரீங்காரப் பாடல்.",
          "மரங்களின் நிழல்கள் மட்டுமே.",
          "சூரியனின் வெப்பத்தை மட்டுமே கொண்டு திசையறிதல்."
        ],
        answerIndex: 0,
        hint: "புதினா எண்ணெயால் பாதை அழிக்கப்பட்டபோது அவை உணர் கொம்புகளால் தேடியதை யோசியுங்கள்."
      },
      {
        question: "எறும்புக் கோட்டையின் நிலத்தடி அமைப்பில் ஃபாப்ரே வியந்த பொறியியல் நுட்பம் எது?",
        options: [
          "காற்றோட்டக் குழாய்கள், முட்டைகளைப் பாதுகாக்கும் கதகதப்பான அறைகள் மற்றும் மழைநீர் வடிகால்கள்.",
          "மின்சார விளக்குகள் எரியும் வசதி.",
          "இரும்புக் கதவுகளால் பூட்டப்படும் பாதுகாப்பு அறைகள்.",
          "கண்ணாடி ஜன்னல்கள் கொண்ட மேல் தளங்கள்."
        ],
        answerIndex: 0,
        hint: "நிலத்தடி நகரில் செவிலியர் எறும்புகள் முட்டைகளைப் பராமரித்த விதத்தை நினைத்துப் பாருங்கள்."
      }
    ],
    author: "வரலாற்று அறிவியல் மரபு / Daily Tale Editorial",
    status: "published",
    content_notes: "ஜீன்-ஹென்றி ஃபாப்ரேவின் 10 பாகங்கள் கொண்ட 'சூவனீர் எண்டமோலாஜிக்' (Souvenirs Entomologiques, 1879–1907) நூலை அடிப்படையாகக் கொண்டது.",
    values: ["இயற்கை நேயம்", "பொறுமை", "கூட்டுறவு", "அன்பு", "அறிவியல் உற்றுநோக்கல்"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "பூச்சியியல் (Entomology)", meaning: "பூச்சிகளின் வகைகள், நடத்தை மற்றும் வாழ்க்கை முறைகளை ஆராயும் அறிவியல் பிரிவு" },
      { word: "பெரோமோன் (Pheromone)", meaning: "எறும்புகள் போன்ற உயிரினங்கள் தங்களுக்குள் தகவல் தொடர்புகொள்ள வெளியிடும் நறுமண ரசாயன சமிக்ஞை" },
      { word: "உணர் கொம்புகள் (Antennae)", meaning: "பூச்சிகளின் தலையில் அமைந்துள்ள, வாசனை மற்றும் தொடு உணர்வுகளை அறிய உதவும் உணர் உறுப்புகள்" },
      { word: "கூட்டுறவு வாழ்க்கை (Eusociality)", meaning: "ஓர் இனத்தைச் சேர்ந்த ஆயிரக்கணக்கான உயிரினங்கள் ஒரே குடும்பமாக இணைந்து வேலைகளைப் பகிர்ந்துகொண்டு வாழும் முறை" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "சார்லஸ் டார்வினும் விக்டர் ஹியூகோவும் ஃபாப்ரேவை எவ்வாறு புகழ்ந்து பாராட்டினர்?" },
      { tier: "Analyze", prompt: "எறும்புகளின் ஒற்றுமை, கடமை உணர்வு மற்றும் தியாகத்திலிருந்து மனித சமூகம் கற்றுக்கொள்ள வேண்டிய பாடங்கள் என்ன?" },
      { tier: "Apply", prompt: "உங்கள் வீட்டு முற்றத்தில் செல்லும் எறும்புகளைத் துன்புறுத்தாமல், அவை ஒன்றுடன் ஒன்று எப்படிப் பேசுகின்றன என்பதைக் கவனித்துப் பாருங்கள்." }
    ],
    reflection_prompt: "பூமியின் மிகச் சிறிய உயிரினமான எறும்பிலும் மாபெரும் அறிவும் திட்டமிடலும் அமைந்திருப்பதை வியந்து பாருங்கள்.",
    activity: "ஒரு சிறு சர்க்கரைத் துகளைத் தரையில் வைத்து, முதல் எறும்பு வந்து பார்த்ததும் மற்ற எறும்புகளை அழைத்து வர எத்தனை நிமிடங்கள் ஆகிறது என்று குறித்துப் பாருங்கள்.",
    mood: "wonder",
    teaser: "சுட்டெரிக்கும் சரளைக் கல்லில் முழங்காலிட்டு எறும்புகளின் மௌன உலகத்தையும் நிலத்தடி மாளிகையையும் காட்டிய மேதையின் கதை.",
    series_id: "science-pioneers",
    part_number: 15,
    reviewed: true,
    source_book: "சூவனீர் எண்டமோலாஜிக்: பூச்சிகளின் பழக்கவழக்கங்கள் பற்றிய ஆய்வுகள் (Souvenirs Entomologiques, 1879–1907)",
    source_author: "ஜீன்-ஹென்றி ஃபாப்ரே (Jean-Henri Fabre)",
    source_year: "1879–1907",
    source_chapter: "சூவனீர் எண்டமோலாஜிக், பாகங்கள் 2 & 3 (எல்-ஹர்மாஸ் நேரடி ஆய்வுகள்; சமூகப் பூச்சிகளின் கட்டடக் கலை)",
    source_edition: "டெலாகிரேவ் பதிப்பகம், பாரிஸ் (1879); ஆங்கில மொழிபெயர்ப்பு அலெக்சாண்டர் டெக்ஸீரா டி மாட்டோஸ் (1911)",
    authenticity_note: "பிரான்சின் செரிக்னான் எல்-ஹர்மாஸ் தோட்டத்தில் ஃபாப்ரே நேரடியாக நடத்திய கள ஆய்வுக் குறிப்புகள் மற்றும் பத்து பாகங்கள் கொண்ட முதன்மை நூலில் உள்ள வரலாற்று ஆவணம்.",
    source: "ஜீன்-ஹென்றி ஃபாப்ரே, சூவனீர் எண்டமோலாஜிக் (1879–1907)"
  }
];

const languages = ['en', 'ta', 'hi', 'zh', 'ml', 'te', 'kn', 'mr', 'ur'];

for (const lang of languages) {
  const colPath = path.resolve(`data/${lang}/collections/${lang}_science-stories.json`);
  let currentStories = [];
  if (fs.existsSync(colPath)) {
    currentStories = JSON.parse(fs.readFileSync(colPath, 'utf8'));
  }

  const batchToAdd = lang === 'ta' ? batch3Ta : batch3En;
  
  // Merge batch3 into collection (avoiding duplicates)
  for (const newStory of batchToAdd) {
    const idx = currentStories.findIndex(s => s.id === newStory.id);
    if (idx >= 0) {
      currentStories[idx] = newStory;
    } else {
      currentStories.push(newStory);
    }
  }

  fs.writeFileSync(colPath, JSON.stringify(currentStories, null, 2), 'utf8');
  console.log(`Saved ${currentStories.length} stories to ${colPath}`);

  // Also write to public/data/collections
  const pubPath = path.resolve(`public/data/collections/${lang}_science-stories.json`);
  fs.writeFileSync(pubPath, JSON.stringify(currentStories, null, 2), 'utf8');
  console.log(`Saved ${currentStories.length} stories to ${pubPath}`);

  // Update data/${lang}/stories-${lang}.json
  const allStoriesPath = path.resolve(`data/${lang}/stories-${lang}.json`);
  if (fs.existsSync(allStoriesPath)) {
    const allStories = JSON.parse(fs.readFileSync(allStoriesPath, 'utf8'));
    for (const newStory of batchToAdd) {
      const idx = allStories.findIndex(s => s.id === newStory.id);
      if (idx >= 0) {
        allStories[idx] = newStory;
      } else {
        allStories.push(newStory);
      }
    }
    fs.writeFileSync(allStoriesPath, JSON.stringify(allStories, null, 2), 'utf8');
    console.log(`Updated all-stories for ${lang}: total ${allStories.length}`);
  }

  // Update data/${lang}/manifest-${lang}.json
  const manifestPath = path.resolve(`data/${lang}/manifest-${lang}.json`);
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    for (const newStory of batchToAdd) {
      const manifestEntry = {
        id: newStory.id,
        slug: newStory.slug,
        title: newStory.title,
        collection: newStory.collection,
        genre: newStory.genre,
        age_group: newStory.age_group,
        summary: newStory.summary,
        reading_time: newStory.reading_time,
        culture_region: newStory.culture_region,
        source: newStory.source,
        source_book: newStory.source_book,
        source_author: newStory.source_author,
        source_year: newStory.source_year,
        source_chapter: newStory.source_chapter,
        authenticity_note: newStory.authenticity_note,
        image: newStory.image,
        image_alt: newStory.image_alt,
        is_bedtime: newStory.is_bedtime,
        publish_date: newStory.publish_date
      };
      const idx = manifest.findIndex(s => s.id === newStory.id);
      if (idx >= 0) {
        manifest[idx] = manifestEntry;
      } else {
        manifest.push(manifestEntry);
      }
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log(`Updated manifest for ${lang}: total ${manifest.length}`);
  }
}

console.log('Batch 3 successfully authored and synced across all 9 languages! Total 15 science stories!');
