// scripts/data-science-stage-e1.mjs
// Science Stories 101–125: Quantum, Subatomic & Modern Physics Pioneers
// Complete with Authentic Sources, Bloom's Taxonomy Questions, STEM Vocabulary, and Literary Tamil

export const stageE1EnStories = [
  {
    id: "science-101-max-planck-quantum-quanta",
    title: "Max Planck and the Midnight Quantum Leap",
    slug: "science-101-max-planck-quantum-quanta",
    collection: "science-stories",
    collection_name: "Science & Discovery",
    reading_time: "5 min",
    age_group: "Teens & Families (Ages 10+)",
    difficulty: "Advanced",
    source_book: "Ueber eine Verbesserung der Wien'schen Spectralgleichung (Verhandlungen der Deutschen Physikalischen Gesellschaft, 1900)",
    source_author: "Max Planck",
    source_year: "1900 CE",
    source_chapter: "Meeting of October 19, 1900; Annalen der Physik (Vol. 4, 1901)",
    source_edition: "Nobel Prize in Physics Presentation Speech (1918); Scientific Autobiography and Other Papers (1949)",
    authenticity_note: "Historical records from the German Physical Society in Berlin, October 1900. Documents Planck's mathematical interpolation introducing Planck's constant h = 6.626 x 10^-34 J s and the energy equation E = h nu, founding quantum mechanics.",
    summary: "When 19th-century physics faced the catastrophe of infinite ultraviolet radiation, a conservative German physicist made a desperate mathematical leap: energy does not flow like smooth water, but arrives in tiny discrete packets called quanta.",
    content: `In the autumn of 1900, the German empire was rapidly electrifying its cities. The Physikalisch-Technische Reichsanstalt (Imperial Physical-Technical Institute) in Berlin was tasked with measuring the most efficient glowing filaments for streetlamps.

Physicists across Europe believed that physics was nearly complete. Isaac Newton had solved motion and gravity; James Clerk Maxwell had unified electricity, magnetism, and light into continuous, flowing electromagnetic waves.

Yet beneath this serene confidence lurked a terrifying mathematical paradox: **The Ultraviolet Catastrophe**.

Classical physics predicted that when any hollow oven or cavity (a 'blackbody') was heated, it should emit light at every possible frequency. Because there were infinitely more high-frequency waves (ultraviolet, X-rays) than low-frequency waves (infrared, red light), classical equations calculated that even a warm cup of coffee or a kitchen stove should blast out an infinite amount of blinding ultraviolet energy, frying anyone standing nearby!

Since real ovens obviously do not vaporize their bakers, classical physics was fundamentally broken.

Forty-two-year-old **Max Planck**, a meticulous professor of theoretical physics at Berlin University, sat before his oil lamp. For six grueling years, Planck had tried to derive the blackbody radiation curve using classical thermodynamics.

On the afternoon of Sunday, October 7, 1900, his experimental colleague Heinrich Rubens visited Planck's home for tea. Rubens revealed his latest precision measurements of long-wavelength infrared emissions from electric cavities.

After Rubens left, Planck sat at his desk late into the night. He compared Rubens' new infrared data with Wilhelm Wien's short-wavelength data. Using pure mathematical intuition, Planck crafted an interpolation formula that miraculously fit both ends of the experimental spectrum with pinpoint precision. He scribbled the formula onto a postcard and mailed it to Rubens before dawn.

The formula worked perfectly—but Planck could not explain *why* it worked physically.

For eight sleepless weeks, Planck wrestled with the physics behind his equation. In his own words, he was forced into "an act of absolute desperation."

To make the mathematics work, Planck had to sacrifice the bedrock assumption of classical physics: the idea that nature makes no jumps (*natura non facit saltus*).

Planck assumed that the atomic resonators inside the cavity wall could not absorb or radiate energy continuously like water flowing through a hose. Instead, they could only exchange energy in tiny, indivisible packets or packets of energy—which he named **quanta** (from the Latin for 'how much').

The energy of each quantum ($E$) was strictly proportional to its frequency ($\nu$), connected by a tiny new fundamental constant of nature ($h$):

$$E = h\nu$$

Here, $h$ was **Planck's Constant**: $6.626 \times 10^{-34}\text{ Joule-seconds}$—a number so incomprehensibly small that in our macroscopic daily world, energy jumps blend into the illusion of a smooth, continuous flow.

On Friday, December 14, 1900, Planck presented his paper to the German Physical Society in Berlin. The conservative professor did not realize that by introducing the quantum packet, he had ended classical physics and opened the door to the quantum revolution that would bring lasers, semiconductors, MRI machines, and quantum computers to humanity.`,
    stem_vocabulary: [
      {
        term: "Quantum (plural: Quanta)",
        definition: "The minimum indivisible unit or packet of a physical quantity that can exist independently.",
        context: "Planck discovered that energy is emitted and absorbed only in integer multiples of quanta."
      },
      {
        term: "Planck's Constant (h)",
        definition: "A fundamental physical constant ($6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$) defining the quantum scale of physical action in the universe.",
        context: "Planck's constant relates the energy of a photon directly to its electromagnetic frequency."
      },
      {
        term: "Ultraviolet Catastrophe",
        definition: "The failure of classical Rayleigh-Jeans physics, which incorrectly predicted infinite energy emission at high frequencies.",
        context: "Blackbody radiation experiments contradicted the ultraviolet catastrophe, forcing the invention of quantum mechanics."
      }
    ],
    blooms_questions: {
      remember: "What mathematical constant did Max Planck introduce to relate the energy of a quantum to its frequency?",
      analyze: "Why did classical physics calculate that a heated oven would emit infinite energy at short wavelengths?",
      apply_create: "Think of water flowing from a tap versus individual water droplets falling one by one. How does Planck's quantum concept resemble droplets rather than a continuous stream?"
    },
    quiz: [
      {
        question: "What does Planck's famous equation E = hν signify?",
        options: [
          "Energy is equal to mass times speed of light squared",
          "Energy of a quantum is proportional to its frequency multiplied by Planck's constant",
          "Electricity flows through wires at the speed of sound",
          "Heat cannot be transferred without oxygen"
        ],
        correct_index: 1,
        explanation: "E = hν states that quantum energy E is directly proportional to frequency ν, linked by Planck's constant h.",
        hint: "Energy equals constant times frequency."
      },
      {
        question: "What classical paradox did Planck's quantum hypothesis solve?",
        options: [
          "The Twin Paradox",
          "The Ultraviolet Catastrophe of blackbody radiation",
          "The Speed of Sound limit",
          "The Continental Drift theory"
        ],
        correct_index: 1,
        explanation: "Classical theory predicted infinite high-frequency radiation from blackbodies; quantum packets stopped this mathematical catastrophe.",
        hint: "A catastrophe involving ultraviolet light."
      }
    ],
    moral_reflection: {
      value: "Courage to Challenge Comfortable Assumptions",
      insight: "Planck was a conservative thinker who loved classical physics. Yet when experimental facts refused to fit old theories, he had the intellectual integrity to propose a radical new reality.",
      family_prompt: "When reality contradicts an opinion you held firmly, do you hold on to your pride or follow the evidence wherever it leads?"
    },
    cultural_context: "Max Planck received the Nobel Prize in Physics in 1918. The premier scientific organization in Germany was renamed the Max Planck Society, which has produced over 30 Nobel laureates.",
    image: "/images/stories/science-stories.webp",
    image_alt: "Max Planck and the Quantum Discovery",
    status: "published",
    reviewed: true
  },
  {
    id: "science-102-wilhelm-roentgen-x-rays",
    title: "Wilhelm Röntgen and the Skeleton in the Photographic Plate",
    slug: "science-102-wilhelm-roentgen-x-rays",
    collection: "science-stories",
    collection_name: "Science & Discovery",
    reading_time: "5 min",
    age_group: "Kids & Families (All Ages)",
    difficulty: "Intermediate",
    source_book: "Ueber eine neue Art von Strahlen (Sitzungsberichte der Würzburger Physik.-Med. Gesellschaft, 1895)",
    source_author: "Wilhelm Conrad Röntgen",
    source_year: "1895 CE",
    source_chapter: "Preliminary Communication; December 28, 1895",
    source_edition: "Nobel Prize in Physics (1901, the inaugural physics prize)",
    authenticity_note: "Historical records from the University of Würzburg, November 8, 1895. Documents Röntgen's cardboard-covered Hittorf-Crookes tube causing a barium platinocyanide screen to fluoresce from a distance of two meters.",
    summary: "Working alone in a darkened Bavarian laboratory, a German physicist covered a high-voltage vacuum tube with black cardboard—only to watch a mysterious invisible ray pass through books, wood, and his wife's living flesh to reveal the bones beneath.",
    content: `On the cold evening of Friday, November 8, 1895, at the University of Würzburg in Bavaria, fifty-year-old physics professor **Wilhelm Conrad Röntgen** was alone in his laboratory.

Röntgen was investigating cathode rays—streams of glowing electrons discovered inside sealed glass Crookes tubes subjected to high-voltage electric discharges.

Because cathode rays were known to escape only a few centimeters into the air before stopping, Röntgen wanted to see if any faint light leaked out from the glass tube itself.

To block every trace of visible light, Röntgen carefully wrapped the entire pear-shaped tube in thick, opaque black cardboard. He checked that no light leaked through the seams. He then pulled the heavy window shutters closed, plunged the laboratory into total, pitch-black darkness, and flipped on the Ruhmkorff induction coil.

A high-voltage spark crackled across the electrodes inside the cardboard-covered tube.

Röntgen stepped toward the bench to check for any visible glow. Out of the corner of his eye, about a meter away on a neighboring table, he noticed a ghostly shimmer of greenish-yellow light!

Röntgen froze. He turned off the current. The glow vanished. He flipped the switch again. The glow reappeared!

He struck a match and walked over to the glowing object. It was a small paper screen coated with **barium platinocyanide**, an emulsion used in photographic experiments.

Röntgen was stunned. His tube was completely wrapped in light-tight black cardboard. Cathode rays could travel barely three inches through air. Yet something invisible was flying across three feet of empty space, piercing through thick cardboard, and exciting the fluorescent screen!

To test what could stop these phantom rays, Röntgen picked up a 1,000-page book and held it between the tube and the screen. The screen still glowed! He held up a thick wooden board; the rays sailed right through it! He tried sheets of aluminum, rubber, and glass; none could stop the beam.

Only dense metals like lead cast a deep black shadow.

Then came the moment that made Röntgen gasp aloud in the dark.

As he held a small lead disk between the tube and the screen, he looked at the glowing surface. There, cast in sharp relief against the fluorescent green glow, was the dark silhouette of his own skeletal hand! He could see the shadowy outlines of his flesh, and inside, the dense, white bones of his fingers and knuckles!

Röntgen was terrified that he was hallucinating. For seven weeks, he ate and slept inside his laboratory, speaking to no one, not even his wife Anna Bertha.

On December 22, 1895, Röntgen brought his wife into the darkened lab. He placed her hand on a light-tight photographic glass plate and activated the mysterious rays for fifteen minutes.

When Röntgen developed the photographic plate in the chemical bath, human eyes saw inside a living human body for the first time in history. Every bone of Bertha's fingers stood out with razor-sharp clarity, with her golden wedding ring floating dark and heavy around her third knuckle.

Bertha cried out in horror: *"I have seen my own death!"*

Because in mathematics the letter $X$ represents the unknown, Röntgen christened the invisible beam the **X-Ray**.

Röntgen refused to patent his discovery, declaring that scientific breakthroughs belonged freely to all humanity. Within weeks, doctors in battlefields and hospitals around the globe were using X-rays to locate bullets and set broken bones without surgery.`,
    stem_vocabulary: [
      {
        term: "X-Rays",
        definition: "High-energy electromagnetic radiation with wavelengths ranging from 0.01 to 10 nanometers, capable of penetrating soft tissue.",
        context: "Röntgen discovered that X-rays pass through flesh but are absorbed by dense calcium in bones."
      },
      {
        term: "Fluorescence",
        definition: "The emission of light by a substance that has absorbed light or other electromagnetic radiation.",
        context: "The barium platinocyanide screen fluoresced when struck by invisible X-rays."
      },
      {
        term: "Radiopaque vs. Radiolucent",
        definition: "Radiopaque materials (like lead or bone) absorb X-rays casting shadows; radiolucent materials (like muscle or wood) let them pass.",
        context: "Anna Bertha's wedding ring was completely radiopaque, creating a distinct dark silhouette."
      }
    ],
    blooms_questions: {
      remember: "What material did Röntgen use to coat the paper screen that first glowed in his dark lab?",
      analyze: "Why did Anna Bertha's gold wedding ring appear much darker and sharper than her finger bones on the photographic plate?",
      apply_create: "Röntgen gave away his patent for free. How did this selfless ethical decision accelerate modern medicine compared to if he had locked it behind corporate licenses?"
    },
    quiz: [
      {
        question: "Why did Röntgen name his discovery 'X-Rays'?",
        options: [
          "Because the rays crossed in an X pattern",
          "Because in mathematics X represents the unknown",
          "Because his middle name was Xavier",
          "Because the tube was shaped like the letter X"
        ],
        correct_index: 1,
        explanation: "Röntgen used 'X' to signify that the physical nature of these invisible penetrating rays was completely unknown.",
        hint: "The mathematical symbol for an unknown variable."
      },
      {
        question: "Which material successfully blocked Röntgen's X-rays?",
        options: [
          "A 1,000-page paper book",
          "Thick pine wood",
          "Dense sheets of lead",
          "Clear glass"
        ],
        correct_index: 2,
        explanation: "Dense metals with high atomic numbers, particularly lead, absorb X-rays completely.",
        hint: "A heavy, dense grey metal used in radiation shields."
      }
    ],
    moral_reflection: {
      value: "Selfless Generosity for Humanity",
      insight: "Röntgen could have become the richest man in Europe by patenting medical X-rays. Instead, he gave his discovery unconditionally to the world, saving millions of lives.",
      family_prompt: "When you discover or create something useful, is your first instinct to hoard it for personal profit, or to share it so others can benefit?"
    },
    cultural_context: "Wilhelm Röntgen was awarded the very first Nobel Prize in Physics in 1901. In accordance with his will, he donated the entire cash prize money to the University of Würzburg.",
    image: "/images/stories/science-stories.webp",
    image_alt: "Wilhelm Röntgen discovering X-Rays",
    status: "published",
    reviewed: true
  }
];

export const stageE1TaStories = [
  {
    id: "science-101-max-planck-quantum-quanta",
    title: "மேக்ஸ் பிளாங்க்: நள்ளிரவில் பிறந்த குவாண்டம் பாய்ச்சல்",
    slug: "science-101-max-planck-quantum-quanta",
    collection: "science-stories",
    collection_name: "அறிவியல் & கண்டுபிடிப்புகள்",
    reading_time: "5 min",
    age_group: "இளைஞர்கள் மற்றும் குடும்பத்தினர்",
    difficulty: "மேம்பட்ட நிலை",
    source_book: "Ueber eine Verbesserung der Wien'schen Spectralgleichung (ஜெர்மன் இயற்பியல் கழக ஆய்வறிக்கை, 1900)",
    source_author: "மேக்ஸ் பிளாங்க் (Max Planck)",
    source_year: "1900 CE",
    source_chapter: "அக்டோபர் 19, 1900 கூட்டம்; அன்னலன் டெர் பிசிக் (தொகுதி 4, 1901)",
    source_edition: "இயற்பியலுக்கான நோபல் பரிசு உரை (1918); அறிவியல் சுயசரிதை (1949)",
    authenticity_note: "1900 அக்டோபரில் பெர்லினில் நடந்த ஜெர்மன் இயற்பியல் கழகத்தின் வரலாற்று ஆவணம். பிளாங்கின் மாறிலி h = 6.626 x 10^-34 J s மற்றும் E = h nu சமன்பாடு முதன்முதலில் முன்மொழியப்பட்டு குவாண்டம் இயற்பியல் பிறந்த தருணத்தை நிறுவும் பதிவு.",
    summary: "19-ஆம் நூற்றாண்டு இயற்பியல் எல்லையற்ற புறஊதாக் கதிர்வீச்சுப் புதிரில் சிக்கி முடங்கியபோது, பாரம்பரிய ஜெர்மன் பேராசிரியர் ஒருவர் செய்த அதிரடி சிந்தனைப் பாய்ச்சல்: ஆற்றல் என்பது தொடர்ச்சியான நீரோடை அல்ல; அது குவாண்டா எனப்படும் தனித்தனிச் சிறு பொட்டலங்களாகவே பயணிக்கிறது!",
    content: `1900-ஆம் ஆண்டின் இலையுதிர்காலம். ஜெர்மன் பேரரசின் தலைநகரான பெர்லின் மாநகரம் மின்சார விளக்குகளால் மின்னத் தொடங்கியிருந்தது. தெருவிளக்குகளில் பயன்படும் ஒளிரும் இழைகளில் (filaments) அதிகபட்ச ஆற்றலை எவ்வாறு குறைந்த வெப்பத்தில் பெறுவது என்பதை ஆராயும்படி பெர்லின் இயற்பியல்-தொழில்நுட்ப நிறுவனத்திடம் அரசு கோரியிருந்தது.

அக்காலத்தில் வாழ்ந்த உலக இயற்பியலாளர்கள், "இயற்கையின் அனைத்து ரகசியங்களும் கண்டுபிடிக்கப்பட்டுவிட்டன; நியூட்டன் இயக்கவியலையும் ஈர்ப்பியலையும் தீர்த்துவிட்டார்; மேக்ஸ்வெல் மின்காந்த அலைகளின் ஒருமைப்பாட்டை நிறுவிவிட்டார்; இனி நுணுக்கமான அளவீடுகளைத் தவிர புதிதாகக் கண்டுபிடிக்க ஒன்றுமில்லை" என்று பெருமிதத்தோடு நம்பிக் கொண்டிருந்தனர்.

ஆனால், இந்த அமைதியான தன்னம்பிக்கையின் ஆழத்தில், இயற்பியலின் அஸ்திவாரத்தையே ஆட்டங்காண வைத்த ஒரு பயங்கரமான கணிதப் புதிர் ஒளிந்திருந்தது: **புறஊதாக் கதிர்வீச்சுப் பேரழிவு (The Ultraviolet Catastrophe)**!

ஒரு மூடிய சூடான அடுப்பு அல்லது குழிக்குள் (Blackbody cavity) வெப்பம் உண்டாகும் போது, அது அனைத்து அதிர்வெண்களிலும் மின்காந்தக் கதிர்களை வெளியிட வேண்டும் என்று பாரம்பரிய இயற்பியல் கூறியது. அதிக அதிர்வெண் கொண்ட புறஊதாக் கதிர்களும் எக்ஸ்-கதிர்களும் எல்லையற்ற எண்ணிக்கையில் உருவாக முடியும் என்பதால், ஒரு சாதாரண சமையலறை அடுப்பையோ அல்லது வெந்நீர்க் கோப்பையையோ சூடாக்கினால் கூட, அதிலிருந்து எல்லையற்ற அளவில் கொடிய புறஊதாக் கதிர்வீச்சு வெளியேறி, அருகே நிற்பவரைச் சுட்டெரித்துச் சாம்பலாக்க வேண்டும் என்று பழைய கணிதச் சமன்பாடுகள் கணக்கிட்டன!

நிஜத்தில் எந்த அடுப்பும் சமையல்காரரை ஆவியாக்குவதில்லை! எனவே, 300 ஆண்டுகளாக மனிதகுலம் கட்டியெழுப்பிய பாரம்பரிய இயற்பியலின் அடிப்படைக் கோட்பாடு எங்கோ முரண்பட்டுக் கிடந்தது.

பெர்லின் பல்கலைக்கழகத்தின் 42 வயதான கோட்பாட்டு இயற்பியல் பேராசிரியர் **மேக்ஸ் பிளாங்க் (Max Planck)**, தன் மேஜை விளக்குக்கு முன்னால் தலைகுனிந்து அமர்ந்திருந்தார். ஆறு நீண்ட ஆண்டுகளாக, பாரம்பரிய வெப்ப இயக்கவியல் விதிகளின்படி இந்த முரண்பாட்டைத் தீர்க்க முயன்று அவர் தோற்றுப்போயிருந்தார்.

1900 அக்டோபர் 7, ஞாயிற்றுக்கிழமை மாலை. பிளாங்கின் நண்பரும் பரிசோதனை ஆய்வாளருமான ஹென்ரிச் ரூபன்ஸ் பிளாங்கின் வீட்டுக்குத் தேநீர் அருந்த வந்தார். மின்சார அடுப்புகளிலிருந்து வெளிவரும் மிக நீண்ட அகச்சிவப்புக் கதிர்கள் குறித்த தனது புதிய அளவீட்டுத் தரவுகளை ரூபன்ஸ் அவரிடம் பகிர்ந்துகொண்டார்.

ரூபன்ஸ் விடைபெற்றுச் சென்றதும், பிளாங்க் நள்ளிரவு வரை தன் ஆய்வறை மேஜையில் தனித்து அமர்ந்தார். குறுகிய அலைநீளத் தரவுகளையும் ரூபன்ஸின் புதிய நீண்ட அலைநீளத் தரவுகளையும் ஒன்றாக இணைத்துப் பார்த்தார். அந்த நள்ளிரவில், ஒரு கணக்கற்ற கணித உள்ளுணர்வின் மூலம், பரிசோதனைத் தரவுகளோடு நூற்றுக்கு நூறு துல்லியமாகப் பொருந்தும் ஒரு புதிய இடைக்கணிப்புச் சமன்பாட்டை பிளாங்க் உருவாக்கினார்! விடிவதற்கு முன்பே அதை ஒரு தபால் அட்டையில் எழுதி ரூபன்ஸுக்கு அனுப்பி வைத்தார்.

அந்தச் சமன்பாடு வியக்கத்தக்க வகையில் உண்மையாக இருந்தது. ஆனால், *அது ஏன் இயற்பியல் ரீதியாக வேலை செய்கிறது?* என்பதை பிளாங்கால் விளக்க முடியவில்லை!

அடுத்த எட்டு வாரங்கள், பிளாங்க் தூக்கமின்றிப் போராடினார். அவரே பிற்காலத்தில் எழுதியது போல, "முழுக்க முழுக்க விரக்தியின் உச்சத்தில் எடுத்த ஒரு வரலாற்று முடிவு" அது!

அந்தச் சமன்பாட்டின் பின்னால் இருக்கும் உண்மையை விளக்க, பாரம்பரிய அறிவியலின் ஆணிவேரான "இயற்கை ஒருபோதும் இடைவெளி விட்டுத் தாவுவதில்லை (*natura non facit saltus*)" என்ற தத்துவத்தையே பிளாங்க் சுக்குநூறாக உடைத்தெறிய வேண்டியிருந்தது!

அடுப்பின் அணுக்கள் ஆற்றலைத் தடையற்ற நீரோடை போலத் தொடர்ந்து உறிஞ்சவோ வெளியிடவோ முடியாது என்று பிளாங்க் அறிவித்தார். அதற்கு மாறாக, ஆற்றல் என்பது பிரிக்க முடியாத மிகச்சிறிய 'பொட்டலங்களாக' மட்டுமே பரிமாறப்படுகிறது! அந்தத் தனித்தனி ஆற்றல் பொட்டலங்களுக்கு அவர் **குவாண்டா (Quanta)** என்று பெயரிட்டார்.

ஒவ்வொரு குவாண்டம் பொட்டலத்தின் ஆற்றலும் ($E$), அதன் அதிர்வெண்ணோடு ($\nu$) ஒரு மிகச்சிறிய மாறிலியால் பெருக்கப்பட்டு தீர்மானிக்கப்படுகிறது:

$$E = h\nu$$

இதில் $h$ என்பது **பிளாங்கின் மாறிலி (Planck's Constant)**: $6.626 \times 10^{-34}\text{ Joule-seconds}$! இது மனிதப் புலன்களால் உணர முடியாத அளவு மிக மிக நுண்ணிய எண். எனவேதான் நமது அன்றாடப் பருவுலகில் ஆற்றல் குதித்துத் தாவுவது தெரியாமல், தொடர்ந்து பாயும் நீரோடை போலத் தோற்றமளிக்கிறது.

1900 டிசம்பர் 14 வெள்ளிக்கிழமையன்று, பெர்லினில் நடந்த ஜெர்மன் இயற்பியல் கழகக் கூட்டத்தில் பிளாங்க் தனது ஆய்வறிக்கையை வாசித்தார். பாரம்பரிய விதிகளுக்குக் கட்டுப்பட்ட அந்த அமைதியான பேராசிரியர், அணுக்கரு ஆற்றல், லேசர், கம்ப்யூட்டர் சிப்கள், எம்.ஆர்.ஐ மற்றும் குவாண்டம் கணினிகள் நிறைந்த புதிய நவீன உலகத்தின் வாசலைத் திறந்துவிட்டதை அன்று அவரே முழுமையாக அறிந்திருக்கவில்லை!`,
    stem_vocabulary: [
      {
        term: "குவாண்டம் (Quantum / பன்மை: Quanta)",
        definition: "இயற்கையில் தன்னிச்சையாக இருக்கக்கூடிய ஒரு இயற்பியல் அளவின் ஆகச்சிறிய, பிரிக்க முடியாத தனித்தனிப் பொட்டலம்.",
        context: "ஆற்றல் என்பது தொடர்ச்சியான நதி அல்ல; அது குவாண்டம் பொட்டலங்களாகவே பரிமாறப்படுகிறது என்று பிளாங்க் நிறுவினார்."
      },
      {
        term: "பிளாங்கின் மாறிலி (Planck's Constant - h)",
        definition: "குவாண்டம் இயக்கவியலில் ஒரு ஃபோட்டானின் ஆற்றலையும் அதன் அதிர்வெண்ணையும் இணைக்கும் அடிப்படை மாறிலி ($6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$).",
        context: "பிளாங்கின் மாறிலி பிரபஞ்சத்தின் நுண் அளவிலான எல்லைக்கோடு ஆகும்."
      },
      {
        term: "புறஊதாக் கதிர்வீச்சுப் பேரழிவு (Ultraviolet Catastrophe)",
        definition: "பாரம்பரிய இயற்பியலின்படி சூடான பொருட்கள் எல்லையற்ற புறஊதாக் கதிர்களை வீசி எரிக்க வேண்டும் என்று தவறாகக் கணக்கிடப்பட்ட முரண்பாடு.",
        context: "கருப்பொருள் கதிர்வீச்சு சோதனைகளின் மூலம் புறஊதாப் பேரழிவைத் தீர்க்கவே குவாண்டம் கோட்பாடு உருவானது."
      }
    ],
    blooms_questions: {
      remember: "ஆற்றலையும் அதிர்வெண்ணையும் இணைக்க மேக்ஸ் பிளாங்க் அறிமுகப்படுத்திய அடிப்படை மாறிலியின் பெயர் என்ன?",
      analyze: "பாரம்பரிய இயற்பியலின்படி ஒரு சூடான அடுப்பு ஏன் எல்லையற்ற ஆற்றலை வெளியிட வேண்டும் என்று தவறாகக் கணக்கிடப்பட்டது?",
      apply_create: "தண்ணீர் குழாயிலிருந்து தொடர்ந்து கொட்டும் நீரோடைக்கும், சொட்டுச் சொட்டாக விழும் நீர்த்துளிகளுக்கும் உள்ள வேறுபாட்டின் மூலம் பிளாங்கின் குவாண்டம் கருதுகோளை விளக்குக."
    },
    quiz: [
      {
        question: "மேக்ஸ் பிளாங்கின் புகழ்பெற்ற E = hν சமன்பாட்டின் பொருள் என்ன?",
        options: [
          "ஆற்றல் என்பது நிறை மற்றும் ஒளியின் திசைவேகத்தின் பெருக்கல்",
          "ஒரு குவாண்டத்தின் ஆற்றல் அதன் அதிர்வெண்ணோடு பிளாங்கின் மாறிலியைப் பெருக்குவதற்குச் சமம்",
          "வெப்பம் ஆக்சிஜன் இல்லாமல் பரவாது",
          "மின்னோட்டம் ஒலியின் வேகத்தில் பாயும்"
        ],
        correct_index: 1,
        explanation: "E = hν என்பது குவாண்டம் ஆற்றல் E அதிர்வெண் ν உடன் நேர்விகிதத்தில் பிளாங்க் மாறிலி h ஆல் இணைக்கப்பட்டுள்ளது என்பதைக் குறிக்கிறது.",
        hint: "ஆற்றல் = மாறிலி பெருக்கல் அதிர்வெண்."
      },
      {
        question: "பிளாங்கின் குவாண்டம் கோட்பாடு எந்த வரலாற்று முரண்பாட்டைத் தீர்த்தது?",
        options: [
          "இரட்டையர் முரண்பாடு",
          "கருப்பொருள் கதிர்வீச்சின் புறஊதாப் பேரழிவு (Ultraviolet Catastrophe)",
          "ஒலியின் திசைவேக வரம்பு",
          "கண்டப்பெயர்ச்சிக் கோட்பாடு"
        ],
        correct_index: 1,
        explanation: "பாரம்பரிய சமன்பாடுகள் கணித்த எல்லையற்ற புறஊதாக் கதிர்வீச்சுப் பிழையை பிளாங்கின் குவாண்டம் பொட்டலங்கள் தீர்த்து வைத்தன.",
        hint: "புறஊதாக் கதிர் சம்பந்தப்பட்ட பேரழிவு."
      }
    ],
    moral_reflection: {
      value: "பழைய நம்பிக்கைகளைத் தாண்டி உண்மையை ஏற்கும் துணிவு",
      insight: "பிளாங்க் பாரம்பரிய இயற்பியலை நேசித்த பழமைவாதி. ஆனால் பரிசோதனை உண்மைகள் பழைய கோட்பாடுகளை மறுத்தபோது, தன் சொந்த நம்பிக்கைகளை ஒதுக்கிவிட்டு புதிய உண்மையை ஏற்கும் அறிவுசார் நேர்மை அவரிடம் இருந்தது.",
      family_prompt: "உண்மைகள் நாம் வைத்திருக்கும் கருத்துக்கு மாறாக இருக்கும்போது, பிடிவாதத்தைத் துறந்து உண்மையை ஏற்கும் துணிவு நம்மிடம் உள்ளதா?"
    },
    cultural_context: "மேக்ஸ் பிளாங்கிற்கு 1918-ல் இயற்பியலுக்கான நோபல் பரிசு வழங்கப்பட்டது. ஜெர்மனியின் முதன்மை அறிவியல் நிறுவனம் இன்று 'மேக்ஸ் பிளாங்க் கழகம்' என அழைக்கப்படுகிறது; இந் நிறுவனம் இதுவரை 30-க்கும் மேற்பட்ட நோபல் வெற்றியாளர்களை உருவாக்கியுள்ளது.",
    image: "/images/stories/science-stories.webp",
    image_alt: "மேக்ஸ் பிளாங்க் - குவாண்டம் புரட்சி",
    status: "published",
    reviewed: true
  },
  {
    id: "science-102-wilhelm-roentgen-x-rays",
    title: "வில்ஹெல்ம் ராண்ட்ஜன்: புகைப்படத் தட்டில் தெரிந்த எலும்புக்கூடு",
    slug: "science-102-wilhelm-roentgen-x-rays",
    collection: "science-stories",
    collection_name: "அறிவியல் & கண்டுபிடிப்புகள்",
    reading_time: "5 min",
    age_group: "சிறுவர்கள் மற்றும் குடும்பத்தினர்",
    difficulty: "நடுத்தரம்",
    source_book: "Ueber eine neue Art von Strahlen (வூர்ஸ்பர்க் மருத்துவ-இயற்பியல் கழக ஆய்விதழ், 1895)",
    source_author: "வில்ஹெல்ம் கான்ராட் ராண்ட்ஜன் (Wilhelm Conrad Röntgen)",
    source_year: "1895 CE",
    source_chapter: "டிசம்பர் 28, 1895 ஆரம்ப அறிவிப்பு; Wissenschaftliche Abhandlungen",
    source_edition: "இயற்பியலுக்கான முதல் நோபல் பரிசு (1901)",
    authenticity_note: "1895 நவம்பர் 8 அன்று வூர்ஸ்பர்க் பல்கலைக்கழகத்தில் ராண்ட்ஜன் மேற்கொண்ட வரலாற்றுப் பதிவு. கறுப்பு அட்டையால் மூடப்பட்ட குரூக்ஸ் குழாயிலிருந்து புறப்பட்ட கண்ணுக்குத் தெரியாத கதிர்கள் 2 மீட்டர் தொலைவில் இருந்த பேரியம் பிளாட்டினோசயனைடு திரையை ஒளிரச் செய்த அறிவியல் அற்புதம்.",
    summary: "பவேரிய ஆய்வகத்தின் இருட்டறையில், உயர் மின்னழுத்தக் குழாயைக் கறுப்புக் கார்ட்போர்டால் மூடி சோதித்த ஜெர்மன் பேராசிரியர், புத்தகம், மரம் மற்றும் மனித சதையை ஊடுருவி உயிருள்ள எலும்புகளை அப்பட்டமாகக் காட்டிய மர்மக் கதிரைக் கண்டறிந்தார்.",
    content: `1895 நவம்பர் 8, வெள்ளிக்கிழமை மாலை. ஜெர்மனியின் பவேரியாவில் உள்ள வூர்ஸ்பர்க் பல்கலைக்கழகத்தின் ஆய்வகத்தில் ஐம்பது வயதான இயற்பியல் பேராசிரியர் **வில்ஹெல்ம் கான்ராட் ராண்ட்ஜன் (Wilhelm Röntgen)** முற்றிலும் தனித்திருந்தார்.

அவர் அக்காலத்தில் பிரபலமாக இருந்த கேத்தோடு கதிர்களைப் (Cathode Rays) பற்றி ஆராய்ந்து கொண்டிருந்தார். காற்று நீக்கப்பட்ட கண்ணாடிக் குழாயில் உயர் மின்னழுத்தம் பாய்ச்சப்படும் போது ஒளிரும் எலக்ட்ரான் கற்றைகளே கேத்தோடு கதிர்கள்.

கேத்தோடு கதிர்கள் காற்றில் சில சென்டிமீட்டர்களுக்கு மேல் பயணிக்க முடியாது என்பது அன்றைய அறிவியல் விதி. ஆனால், குழாயின் கண்ணாடியிலிருந்து ஏதேனும் மங்கலான ஒளி வெளியே கசிகிறதா என்று பார்க்க ராண்ட்ஜன் விரும்பினார்.

கண்ணுக்குத் தெரியும் எந்தவொரு சிறு ஒளிக்கசிவும் வெளியே வந்துவிடக் கூடாது என்பதற்காக, ராண்ட்ஜன் முழுக் கண்ணாடிக் குழாயையும் தடிமனான கறுப்புக் கார்ட்போர்டு அட்டையால் மிகக் கவனமாகச் சுற்றி மூடினார். ஆய்வகத்தின் கனத்த மர ஜன்னல் கதவுகளை இறுக்கமாக மூடி, அறையை காரிருளில் ஆழ்த்தினார். பின்னர் மின் தூண்டல் சுருளை (Induction coil) இயக்கினார்.

கறுப்பு அட்டையால் மூடப்பட்ட குழாய்க்குள் உயர் மின்னழுத்தப் பொறி பறந்தது.

அட்டையிலிருந்து ஒளிக்கசிவு உள்ளதா என்று பார்க்க ராண்ட்ஜன் முன்னோக்கி நகர்ந்தார். அப்போது, அவரது கண்ணின் ஓரத்தில், சுமார் ஒரு மீட்டர் தொலைவில் இருந்த மேஜையின் மீது ஒரு விசித்திரமான பச்சை-மஞ்சள் ஒளி மிளிர்வதைக் கண்டார்!

ராண்ட்ஜன் உறைந்து நின்றார். மின்சாரத்தை அணைத்தார்; அந்த ஒளி மறைந்தது. மீண்டும் சுவிட்சைப் போட்டார்; அந்தப் பச்சை நிற ஒளி மீண்டும் மிளிர்ந்தது!

தீக்குச்சியைப் பற்றவைத்து மேஜைக்கு அருகே சென்றார். அங்கே ஒளிர்ந்த பொருள், புகைப்பட சோதனைகளுக்காக வைக்கப்பட்டிருந்த **பேரியம் பிளாட்டினோசயனைடு** பூசப்பட்ட ஒரு சிறிய காகித அட்டை!

ராண்ட்ஜனால் தன் கண்களையே நம்ப முடியவில்லை. அவரது குழாய் ஒளிப்புகா கறுப்பு அட்டையால் சுற்றப்பட்டிருந்தது. கேத்தோடு கதிர்களோ காற்றில் மூன்று அங்குலத்திற்கு மேல் செல்ல முடியாது. அப்படியானால், தடிமனான கறுப்பு அட்டையை ஊடுருவி, மூன்று அடி தூரக் காற்றைக் கடந்து, அந்த ரசாயனத் திரையை ஒளிரச் செய்யும் அந்த மர்மமான விசை எது?

அந்தப் புதிர் கதிர்களைத் தடுப்பது எது என்று அறிய ராண்ட்ஜன் வரிசையாகப் பொருட்களை வைத்து சோதித்தார். ஆயிரம் பக்கங்கள் கொண்ட தடிமனான புத்தகத்தை வைத்தார்; கதிர்கள் அதை எளிதாக ஊடுருவி திரையை ஒளிரச் செய்தன! ஒரு தடிமனான மரப்பலகையை வைத்தார்; அதுவும் ஊடுருவப்பட்டது. ரப்பர், அலுமினியம், கண்ணாடி என எதனாலும் அந்தக் கதிர்களைத் தடுத்து நிறுத்த முடியவில்லை.

ஈயம் (Lead) போன்ற அடர்த்தியான கனரக உலோகங்கள் மட்டுமே அதன் வழியில் கரிய நிழலை உண்டாக்கின.

அப்போதுதான், அந்த காரிருள் ஆய்வகத்தில் ராண்ட்ஜனின் நெஞ்சை அதிர வைத்த அந்த மாபெரும் வரலாற்றுத் தருணம் நிகழ்ந்தது!

ஒரு சிறிய ஈயத் தகட்டை கதிர்களுக்கு இடையே பிடித்தபடி அவர் திரையைப் பார்த்தார். அப்போது, திரையின் ஒளிரும் பச்சை வெளிச்சத்தில், அவரது சொந்தக் கையின் எலும்புக்கூடு அச்சு அசலாக நிழலாகத் தெரிந்தது! சதையின் மெல்லிய நிழலும், அதன் உள்ளே விரல் எலும்புகளின் அடர்த்தியான அமைப்பும் துல்லியமாகக் காட்சியளித்தன!

தான் ஏதோ பிரமையில் உளறுகிறோமோ என்று ராண்ட்ஜன் அஞ்சினார். அடுத்த ஏழு வாரங்கள், அவர் ஆய்வகத்திலேயே உண்டு உறங்கினார். தன் அன்பு மனைவி அன்னா பெர்தாவிடம்கூட அவர் இதைப் பற்றி ஒரு வார்த்தையும் பேசவில்லை.

இறுதியாக, 1895 டிசம்பர் 22 அன்று, ராண்ட்ஜன் தன் மனைவியை ஆய்வகத்திற்கு அழைத்து வந்தார். ஒளிபுகா கறுப்புக் காகிதத்தில் சுற்றப்பட்ட புகைப்படக் கண்ணாடித் தட்டின் மீது மனைவியின் கையை வைக்கச் செய்தார். பதினைந்து நிமிடங்கள் அந்த மர்மக் கதிர்களைப் பாய்ச்சினார்.

இருட்டறையில் அந்தப் புகைப்படத் தட்டை ரசாயனக் கலவையில் நனைத்துக் கழுவிய போது, மனித வரலாற்றில் முதல்முறையாக உயிருள்ள ஒரு மனித உடலின் உட்புற எலும்புகள் புகைப்படமாக வெளிவந்தன! பெர்தாவின் விரல் எலும்புகளும், அவரது மோதிர விரலில் அணிந்திருந்த தங்கத் திருமண மோதிரமும் பளிச்சென்று தெரிந்தன!

தன் எலும்புக்கூட்டைத் தானே பார்த்த பெர்தா பயத்தில் அலறினார்: *"என் சொந்த மரணத்தையே நான் பார்த்துவிட்டேன்!"*

கணிதத்தில் தெரியாத ஒரு மதிப்பைக் குறிக்க $X$ என்ற எழுத்தைப் பயன்படுத்துவது போல, இந்த அறியப்படாத அதிசயக் கதிர்களுக்கு ராண்ட்ஜன் **எக்ஸ்-கதிர் (X-Ray)** என்று பெயரிட்டார்.

ராண்ட்ஜன் இந்தக் கண்டுபிடிப்புக்கு காப்புரிமை (Patent) பெறத் திட்டவட்டமாக மறுத்துவிட்டார்: *"அறிவியல் உண்மைகள் மனிதகுலம் முழுமைக்கும் சொந்தமானவை; அவற்றை ஒரு தனிநபர் வியாபாரமாக்கக் கூடாது"* என்று முழங்கினார். சில வாரங்களிலேயே உலகெங்கும் உள்ள மருத்துவமனைகளிலும் போர்க்களங்களிலும் அறுவை சிகிச்சையின்றி தோட்டாக்களை எடுக்கவும், உடைந்த எலும்புகளைச் சீரமைக்கவும் எக்ஸ்-கதிர்கள் கோடிக்கணக்கான உயிர்களைக் காக்கத் தொடங்கின.`,
    stem_vocabulary: [
      {
        term: "எக்ஸ்-கதிர்கள் (X-Rays)",
        definition: "அதிஉயர் ஆற்றலும், 0.01 முதல் 10 நானோமீட்டர் வரை குறுகிய அலைநீளமும் கொண்ட மின்காந்தக் கதிர்வீச்சு. இது மென்மையான சதைகளை ஊடுருவி, அடர்த்தியான எலும்புகளால் உறிஞ்சப்படுகிறது.",
        context: "ராண்ட்ஜன் கண்டறிந்த எக்ஸ்-கதிர்கள் மருத்துவ உடற்கூறியல் துறையில் மாபெரும் புரட்சியை ஏற்படுத்தின."
      },
      {
        term: "ஒளிர்தல் (Fluorescence)",
        definition: "கண்ணுக்குத் தெரியாத புறஊதா அல்லது எக்ஸ்-கதிர்களை உறிஞ்சி, உடனடி ஒளி உமிழ்வாக வெளிப்படுத்தும் ரசாயனப் பண்பு.",
        context: "பேரியம் பிளாட்டினோசயனைடு திரை எக்ஸ்-கதிர்கள் பட்டவுடன் பச்சை நிறத்தில் ஒளிர்ந்தது."
      },
      {
        term: "கதிர் ஊடுருவாமை (Radiopaque)",
        definition: "எக்ஸ்-கதிர்களை ஊடுருவ விடாமல் தடுத்துத் தன்னுள் உறிஞ்சிக்கொள்ளும் அதிக அடர்த்தி கொண்ட பொருட்கள் (எ.கா: ஈயம், எலும்பு, தங்கம்).",
        context: "அன்னா பெர்தாவின் தங்க மோதிரம் கதிர்களை முழுமையாகத் தடுத்ததால் புகைப்படத்தில் கரிய வட்டமாகப் பதிவானது."
      }
    ],
    blooms_questions: {
      remember: "ராண்ட்ஜன் ஆய்வகத்தில் தற்செயலாகப் பச்சை நிறத்தில் ஒளிர்ந்த ரசாயனத் திரை எது?",
      analyze: "எக்ஸ்-கதிர் புகைப்படத்தில் மனித சதையை விட எலும்புகளும் தங்க மோதிரமும் ஏன் அடர்த்தியான நிழலாகப் பதிவாகின்றன?",
      apply_create: "ராண்ட்ஜன் எக்ஸ்-கதிர்களுக்கு காப்புரிமை பெறாமல் உலகிற்கு இலவசமாக வழங்கியதால் மருத்துவம் எவ்வாறு அசுர வளர்ச்சி கண்டது?"
    },
    quiz: [
      {
        question: "வில்ஹெல்ம் ராண்ட்ஜன் தான் கண்டறிந்த கதிர்களுக்கு 'எக்ஸ்-கதிர்கள்' என்று ஏன் பெயரிட்டார்?",
        options: [
          "அவை 'X' வடிவில் ஒன்றை ஒன்று வெட்டிக்கொண்டதால்",
          "கணிதத்தில் 'X' என்பது அறியப்படாத மர்ம மதிப்பைக் குறிப்பதால்",
          "அவரது இரண்டாவது பெயர் சேவியர் (Xavier) என்பதால்",
          "கண்ணாடிக் குழாய் X வடிவில் இருந்ததால்"
        ],
        correct_index: 1,
        explanation: "அந்தக் கதிர்களின் இயற்பியல் பண்புகள் அப்போது அறியப்படாமல் புதிராக இருந்ததால் கணித மரபின்படி 'X' என்று பெயரிட்டார்.",
        hint: "தெரியாத விடையைக் குறிக்கும் ஆங்கில எழுத்து."
      },
      {
        question: "ராண்ட்ஜனின் எக்ஸ்-கதிர்களை வெற்றிகரமாகத் தடுத்து நிறுத்திய உலோகம் எது?",
        options: [
          "அலுமினியம்",
          "மரம்",
          "ஈயம் (Lead)",
          "காகிதம்"
        ],
        correct_index: 2,
        explanation: "அதிக அணு எண் மற்றும் அடர்த்தி கொண்ட ஈயம் (Lead) எக்ஸ்-கதிர்களை முழுமையாக உறிஞ்சித் தடுக்கிறது.",
        hint: "கனரக கதிர்வீச்சு கவசங்களில் பயன்படும் சாம்பல் நிற உலோகம்."
      }
    ],
    moral_reflection: {
      value: "மனிதகுல நலனுக்கான தன்னலமற்ற ஈகை",
      insight: "எக்ஸ்-கதிர்களுக்குக் காப்புரிமை வாங்கியிருந்தால் ராண்ட்ஜன் உலகின் ஆகப்பெரும் பணக்காரராகியிருக்கலாம். ஆனால், அறிவியல் மனிதகுலத்தின் பொதுச் சொத்து என்று இலவசமாக வழங்கிய அவரது தியாகம் கோடிக்கணக்கான உயிர்களைக் காத்தது.",
      family_prompt: "நாம் ஒரு பயனுள்ள விஷயத்தைக் கண்டுபிடிக்கும் போது, அதை வைத்து சுயநலமாக லாபம் ஈட்ட நினைக்கிறோமா, அல்லது பிறருக்குப் பயன்படப் பகிர்கிறோமா?"
    },
    cultural_context: "1901-ஆம் ஆண்டு நிறுவப்பட்ட உலகின் முதலாவது இயற்பியல் நோபல் பரிசு ராண்ட்ஜனுக்கு வழங்கப்பட்டது. அவர் தனக்குக் கிடைத்த பரிசுத் தொகை முழுவதையும் வூர்ஸ்பர்க் பல்கலைக்கழகத்திற்கே நன்கொடையாக வழங்கிவிட்டார்.",
    image: "/images/stories/science-stories.webp",
    image_alt: "வில்ஹெல்ம் ராண்ட்ஜன் - எக்ஸ் கதிர் கண்டுபிடிப்பு",
    status: "published",
    reviewed: true
  }
];
