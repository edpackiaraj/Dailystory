// scripts/data-science-stage-c1.mjs
// Stage C1: Stories 56–65 (Tu Youyou, Planck, Einstein, Eddington, Rutherford, Bohr, De Broglie, Heisenberg, Schrödinger, Meitner)
// Authentic Historical Book & Paper Citations with Literary Tamil Retellings

export const stageC1EnStories = [
  {
    id: "science-56-tu-youyou-artemisinin-malaria",
    title: "Tu Youyou and the 1,600-Year-Old Scroll That Cured Malaria",
    slug: "science-56-tu-youyou-artemisinin-malaria",
    collection: "science-stories",
    collection_name: "Science & Discovery",
    reading_time: "5 min",
    age_group: "Kids & Families (All Ages)",
    difficulty: "Intermediate",
    source_book: "Zhouhou Beiji Fang (Handbook of Prescriptions for Emergencies, c. 340 CE)",
    source_author: "Ge Hong (Jin Dynasty) & Tu Youyou",
    source_year: "340 CE / 1969–1972 CE",
    source_chapter: "Chapter 16: Prescriptions for Intermittent Fevers; Kexue Tongbao (1977)",
    source_edition: "Nature Medicine (Vol. 17, pp. 1217–1220, 2011); Nobel Lecture in Physiology or Medicine (2015)",
    authenticity_note: "Historical documentation from Chinese military research 'Project 523' initiated in May 1967. Documents Tu Youyou's low-temperature ethyl ether extraction of Qinghao (Artemisia annua) sample number 191 on October 4, 1971, which yielded 100% inhibition of malaria parasites.",
    summary: "During the secret wartime Project 523, a Chinese phytochemist searched 2,000 ancient medical scrolls, found a 1,600-year-old passage on sweet wormwood, extracted artemisinin with cold ether, and tested it on herself—saving millions of lives worldwide.",
    content: `In the late 1960s, in the midst of the Vietnam War and the Chinese Cultural Revolution, a secret crisis was decimating soldiers on both sides in the steaming jungles of Southeast Asia. It was not bullets or artillery, but a chloroquine-resistant strain of the deadly malaria parasite, *Plasmodium falciparum*. Battlefield casualties from malaria were outnumbering combat casualties three to one.

In Beijing, the Chinese government established a top-secret military research initiative on May 23, 1967, codenamed **Project 523**. Over six hundred scientists were mobilized to discover a new anti-malarial medicine.

In 1969, thirty-nine-year-old Tu Youyou, a quiet pharmacologist trained in both Western pharmacology and Traditional Chinese Medicine at the Academy of Traditional Chinese Medicine in Beijing, was appointed head of Project 523's chemical research group.

While Western scientists synthesized hundreds of synthetic compounds that all proved ineffective, Tu Youyou turned to history. She visited elderly folk healers, collected over 2,000 herbal recipes from classical treatises, and compiled an essential booklet of 640 promising plant remedies.

Among the plants was *Qinghao* (sweet wormwood, *Artemisia annua*), which had been used for fevers for millennia.

Tu Youyou's team prepared boiling water extracts of sweet wormwood and tested them on malaria-infected mice. The results were bitterly disappointing: the extracts showed only 12% to 68% inhibition, with erratic and weak results.

Tu did not give up. She returned to her wooden desk and re-read the ancient texts line by line.

In a 1,600-year-old bamboo scroll titled *Zhouhou Beiji Fang* (*Handbook of Prescriptions for Emergencies*), written in 340 CE by Jin Dynasty physician and alchemist Ge Hong, Tu Youyou paused at a single sentence:
**"Take a handful of Qinghao, soak it in two sheng of water, wring out the juice, and drink it all."**

Tu Youyou stared at the characters. Her breath caught.
*Soak it in water... wring out the juice...*

Every standard modern laboratory extraction technique boiled herbs in boiling water or hot alcohol! But Ge Hong had written *soak* and *wring out*, not *boil*!

Heat was destroying the active chemical compound!

Tu immediately switched to a low-boiling-point solvent: **ethyl ether**, which boils at a cool $35^\circ\text{C}$ ($95^\circ\text{F}$). She extracted the sweet wormwood at low temperatures, separating the acidic fraction from the neutral fraction.

On October 4, 1971, extract number 191 was tested on malaria-infected mice and monkeys.

The result was miraculous: **100% inhibition!** The parasites vanished completely from the blood of the treated animals, with zero toxicity!

Before giving the unproven extract to human patients, Tu demonstrated supreme personal courage. Clinical trials were halted due to political turmoil. To avoid delaying life-saving treatment, Tu Youyou, along with two laboratory colleagues, volunteered to become the first human guinea pigs. In July 1972, Tu ingested massive doses of the extract in Beijing's Dongzhimen Hospital.

For thirty days, doctors monitored her liver, kidneys, and heart. She suffered no adverse effects.

Tu then traveled south to Hainan Island, where severe chloroquine-resistant cerebral malaria was raging among farmworkers. She personally administered the medicine to twenty-one critically ill patients. Within thirty-six hours, their fevers vanished, and their blood was completely cleared of parasites!

In 1972, Tu's team isolated the pure colorless crystal of the active molecule: **Artemisinin** (Qinghaosu).

Today, Artemisinin-based Combination Therapy (ACT) recommended by the World Health Organization is the frontline defense against malaria worldwide, saving over seven million lives—especially young children across Sub-Saharan Africa and Asia.

In 2015, at the age of eighty-four, Tu Youyou was awarded the Nobel Prize in Physiology or Medicine—the first Chinese woman and mainland Chinese scientist ever to receive a Nobel Prize in science. In her acceptance speech, she declared:
"Artemisinin is a gift to the world from Traditional Chinese Medicine."`,
    stem_vocabulary: [
      {
        term: "Artemisinin (Qinghaosu)",
        definition: "A potent antimalarial sesquiterpene lactone containing an unusual peroxide bridge, extracted from sweet wormwood (Artemisia annua).",
        context: "Tu Youyou isolated artemisinin, which destroys malaria parasites by releasing reactive free radicals."
      },
      {
        term: "Low-Temperature Solvent Extraction",
        definition: "A chemical separation technique using solvents with low boiling points (like ether) to extract heat-sensitive compounds without thermal degradation.",
        context: "Tu used ethyl ether at 35°C to preserve the heat-sensitive peroxide bond of artemisinin."
      },
      {
        term: "Phytochemistry",
        definition: "The branch of chemistry concerned with the chemical substances and secondary metabolites produced by plants.",
        context: "Tu Youyou's work bridged traditional herbal wisdom with rigorous modern phytochemistry."
      },
      {
        term: "Plasmodium falciparum",
        definition: "The deadliest species of Plasmodium protozoan that causes malignant cerebral malaria in humans.",
        context: "Artemisinin proved 100% effective against chloroquine-resistant Plasmodium falciparum."
      }
    ],
    blooms_questions: {
      remember: "What ancient Chinese physician wrote the 340 CE medical scroll that inspired Tu Youyou's low-temperature extraction?",
      analyze: "Why did modern high-temperature boiling extraction fail to cure malaria while ancient room-temperature steeping succeeded?",
      apply_create: "Indigenous cultures and ancient systems of medicine (like Ayurveda, Siddha, and TCM) have used thousands of herbs for centuries. How can modern chemistry and clinical trials systematically validate other ancient herbal remedies?"
    },
    quiz: [
      {
        question: "What crucial detail in Ge Hong's ancient 4th-century text revealed the secret to extracting artemisinin?",
        options: [
          "To boil the leaves for twelve hours",
          "To soak the leaves in cold water and wring out the juice without boiling",
          "To burn the roots into black ash",
          "To mix the herb with snake venom"
        ],
        correct_index: 1,
        explanation: "Ge Hong prescribed soaking and wringing out the juice, alerting Tu that boiling heat destroys the active ingredient.",
        hint: "It specified soaking in cold water rather than boiling."
      },
      {
        question: "What low-boiling-point chemical solvent did Tu Youyou use to extract the active compound at 35°C?",
        options: [
          "Sulfuric acid",
          "Ethyl ether",
          "Mercury",
          "Bleach"
        ],
        correct_index: 1,
        explanation: "Ethyl ether boils at 35°C, allowing extraction without damaging the heat-sensitive molecule.",
        hint: "A common volatile laboratory solvent with a very low boiling point."
      },
      {
        question: "How did Tu Youyou verify that the sweet wormwood extract was safe for humans before clinical trials?",
        options: [
          "She fed it to wild birds",
          "She and two laboratory colleagues swallowed large doses themselves",
          "She poured it into a river",
          "She waited twenty years"
        ],
        correct_index: 1,
        explanation: "To speed up clinical trials and protect patients, Tu and her team bravely volunteered as the first human test subjects.",
        hint: "She tested it on her own body first."
      }
    ],
    moral_reflection: {
      value: "Respect for Heritage and Scientific Open-Mindedness",
      insight: "While others dismissed ancient traditional knowledge as superstition, Tu Youyou combined ancient empirical wisdom with modern chemistry to save millions of human lives.",
      family_prompt: "When grandparents or elders share traditional remedies or stories, do you dismiss them or listen with curiosity? How can old wisdom and modern knowledge work together?"
    },
    cultural_context: "Tu Youyou's name comes from a classic Chinese poem in the *Book of Songs*: 'Deer bleat *youyou* while grazing on wild sweet wormwood'—an astonishing, prophetic coincidence linking her name to the plant that defined her life.",
    audio_url: ""
  },
  {
    id: "science-57-planck-black-body-quanta",
    title: "Max Planck and the Tiny Packets of Energy",
    slug: "science-57-planck-black-body-quanta",
    collection: "science-stories",
    collection_name: "Science & Discovery",
    reading_time: "5 min",
    age_group: "Kids & Families (All Ages)",
    difficulty: "Advanced",
    source_book: "Ueber eine Verbesserung der Wien'schen Spectralgleichung (1900)",
    source_author: "Max Karl Ernst Ludwig Planck",
    source_year: "1900 CE",
    source_chapter: "Verhandlungen der Deutschen Physikalischen Gesellschaft (Vol. 2, pp. 202–204 & 237–245, December 14, 1900)",
    source_edition: "Annalen der Physik (Vol. 4, 1901); Nobel Lecture in Physics (1920)",
    authenticity_note: "Presented before the German Physical Society in Berlin on the afternoon of December 14, 1900. Introduces Planck's quantum hypothesis ($E = h\nu$) and Planck's constant ($h = 6.626 \times 10^{-34} \text{ J}\cdot\text{s}$), solving the Ultraviolet Catastrophe.",
    summary: "Faced with a glowing industrial oven that broke every law of classical physics, a conservative German professor made a desperate mathematical leap—proposing that energy is not a continuous stream, but comes in indivisible packets called 'quanta,' giving birth to quantum physics.",
    content: `On the afternoon of December 14, 1900, at the Institute of Physics in Berlin, Germany, a quiet, impeccably dressed forty-two-year-old professor named Max Planck stood before the German Physical Society. Planck was the most conservative of physicists: an orderly, deeply religious scholar who revered classical mechanics and thermodynamics. He had not set out to start a revolution.

Yet, on that winter afternoon, Planck was forced to deliver a concept so radical that it shook the very foundations of human knowledge.

The crisis began with a practical industrial problem: electric light bulbs. In the 1890s, the German Imperial Institute of Physics and Technology (PTR) was hired by lighting companies to determine the exact efficiency of electric lamp filaments. Physicists heated hollow ceramic ovens with a tiny pinhole—known in physics as a **Black Body**—and measured the spectrum of light radiated at different temperatures.

When an oven is heated, it glows dull red, then cherry red, then bright orange, then white-hot.

According to classical physics—guided by the wave theories of James Clerk Maxwell and the thermodynamics of Ludwig Boltzmann—energy flowed in a smooth, seamless, continuous river.

When classical theorists applied these laws to black-body radiation, they ran into a horrifying mathematical nightmare known as the **Ultraviolet Catastrophe**:
Classical equations predicted that as the frequency of light increased toward ultraviolet, X-rays, and gamma rays, the oven should radiate an *infinite* amount of energy!
According to classical physics, turning on a toaster or lighting a fireplace should instantly incinerate the entire universe with a blast of infinite ultraviolet rays!

Obviously, that did not happen. In reality, the high-frequency radiation tapered off smoothly to zero.

For six years, Planck struggled to reconcile theory with experimental data. Every conventional mathematical avenue ended in failure.

Finally, in late autumn 1900, Planck made what he later called "an act of despair."

He asked: What if classical physics is fundamentally wrong about energy?
What if energy is *not* a continuous, smooth stream like water flowing from a tap?
What if nature only emits and absorbs energy in tiny, indivisible, discrete packets—like drops from an eyedropper, or individual coins?

Planck named these discrete packets **Quanta** (from the Latin for "how much").

Planck wrote down a deceptively simple formula:
$$E = h\nu$$
Where:
- $E$ is the energy of a quantum;
- $\nu$ (nu) is the frequency of the radiation;
- $h$ is a brand-new fundamental constant of nature, now celebrated as **Planck's Constant** ($h \approx 6.626 \times 10^{-34} \text{ Joule-seconds}$).

This simple equation solved the Ultraviolet Catastrophe instantly:
At low frequencies (red light), each packet of energy is small and cheap to make, so many are emitted. But at ultraviolet frequencies, the energy required for a single quantum ($h\nu$) becomes so enormous that the atoms in the oven simply do not have enough thermal energy to produce even one packet! The high-frequency radiation is choked off!

When Planck presented his paper on December 14, 1900, neither he nor his audience fully grasped that they had crossed the threshold into a new universe.

December 14, 1900, is celebrated today as the official **Birthday of Quantum Mechanics**.

Planck believed his quantum was merely a temporary mathematical trick. But five years later, Albert Einstein showed that light itself is physically composed of these quanta (photons). Niels Bohr used Planck's constant to explain the atom.

Planck's constant ($h$) governs the behavior of every atom, laser, microchip, solar cell, and quantum computer on Earth. A quiet, orderly professor seeking to solve an oven's glow had uncovered the graininess of the cosmos.`,
    stem_vocabulary: [
      {
        term: "Quantum (plural: Quanta)",
        definition: "The minimum discrete amount of any physical entity (such as energy or angular momentum) involved in an interaction.",
        context: "Planck proposed that energy is exchanged only in discrete packets called quanta."
      },
      {
        term: "Planck's Constant ($h$)",
        definition: "A fundamental physical constant ($6.626 \times 10^{-34} \text{ J}\cdot\text{s}$) that relates the energy of a photon to its frequency.",
        context: "Planck's constant sets the scale at which quantum mechanical effects dominate classical physics."
      },
      {
        term: "Ultraviolet Catastrophe",
        definition: "The failure of classical physics to predict the spectrum of black-body radiation, incorrectly forecasting infinite energy at high frequencies.",
        context: "Planck's quantum hypothesis eliminated the ultraviolet catastrophe by making high-frequency quanta too costly to produce."
      },
      {
        term: "Black-Body Radiation",
        definition: "The thermal electromagnetic radiation within or surrounding a body in thermodynamic equilibrium with its environment.",
        context: "The spectrum of radiation emitted by a heated hollow cavity provided the experimental clues for quantum theory."
      }
    ],
    blooms_questions: {
      remember: "What mathematical formula connects the energy of a quantum to its frequency?",
      analyze: "Why did classical physics incorrectly predict that a heated oven would emit infinite ultraviolet energy?",
      apply_create: "Modern digital cameras use image sensors that absorb individual quanta of light (photons) to create pixels. How does Planck's quantum theory make digital photography possible?"
    },
    quiz: [
      {
        question: "What radical idea did Max Planck propose about how energy is emitted and absorbed?",
        options: [
          "Energy flows only in continuous, infinite streams",
          "Energy is exchanged in discrete, indivisible packets called quanta",
          "Energy can only travel through solid metals",
          "Energy has no relation to frequency"
        ],
        correct_index: 1,
        explanation: "Planck proposed that energy comes in discrete packets (quanta) with size proportional to frequency ($E = h\nu$).",
        hint: "Think of coins instead of an unbroken stream of water."
      },
      {
        question: "What was the 'Ultraviolet Catastrophe' that classical physics could not resolve?",
        options: [
          "Sunburn caused by solar radiation",
          "The classical prediction that hot objects should radiate an infinite amount of high-frequency energy",
          "The melting of glass prisms under ultraviolet light",
          "The disappearance of stars during daytime"
        ],
        correct_index: 1,
        explanation: "Classical wave theory predicted that energy radiated at short wavelengths would rise toward infinity, which contradicted reality.",
        hint: "A theoretical prediction of infinite energy at high frequencies."
      },
      {
        question: "On what date was Planck's historic paper presented, marking the birth of quantum mechanics?",
        options: [
          "July 4, 1776",
          "December 14, 1900",
          "January 1, 1950",
          "October 24, 1929"
        ],
        correct_index: 1,
        explanation: "December 14, 1900, when Planck read his paper to the German Physical Society, is celebrated as the birthday of quantum theory.",
        hint: "The last winter of the nineteenth century (1900)."
      }
    ],
    moral_reflection: {
      value: "Courage to Follow Evidence Beyond Comfort Zones",
      insight: "Though Max Planck loved classical physics, when the data refused to fit old theories, he had the intellectual integrity to embrace a revolutionary idea that overturned everything he knew.",
      family_prompt: "When the facts show that a long-held belief or habit is wrong, is it easy to change your mind? Why does real learning require letting go of comfortable assumptions?"
    },
    cultural_context: "The Max Planck Society in Germany, named in his honor, is one of the world's most prestigious research networks, having produced dozens of Nobel laureates across all scientific fields.",
    audio_url: ""
  },
  {
    id: "science-58-einstein-miracle-year-light",
    title: "Albert Einstein and the Miraculous Year of 1905",
    slug: "science-58-einstein-miracle-year-light",
    collection: "science-stories",
    collection_name: "Science & Discovery",
    reading_time: "5 min",
    age_group: "Kids & Families (All Ages)",
    difficulty: "Advanced",
    source_book: "Annalen der Physik (Annus Mirabilis Papers, 1905)",
    source_author: "Albert Einstein",
    source_year: "1905 CE",
    source_chapter: "On a Heuristic Point of View Concerning the Production and Transformation of Light; On the Electrodynamics of Moving Bodies",
    source_edition: "Annalen der Physik (Vol. 17 & 18, 1905); Nobel Prize in Physics (1921)",
    authenticity_note: "Written by a 26-year-old Patent Clerk Third Class at the Swiss Patent Office in Bern. Four groundbreaking papers published in Annalen der Physik between March and September 1905, establishing the photon, proving atoms via Brownian motion, creating Special Relativity, and discovering $E = mc^2$.",
    summary: "Working as an unknown twenty-six-year-old clerk in the Swiss Patent Office, Albert Einstein published four papers in a single year that shattered classical physics—proving the existence of photons, atoms, the relativity of time, and $E = mc^2$.",
    content: `In the spring of 1905, in the quiet Swiss city of Bern, a twenty-six-year-old junior patent examiner sat at a wooden desk at the Federal Office for Intellectual Property. His title was "Technical Assistant, Third Class." He had failed to secure an academic teaching post, had been considered mediocre by his college professors, and spent eight hours a day inspecting patent applications for gravel separators and alternating-current dynamos.

His name was Albert Einstein.

When his supervisor was not looking, Einstein tucked away patent blueprints into a drawer, pulled out scrap paper, and pursued what he called his "thought experiments" (*Gedankenexperimente*).

Ever since he was a sixteen-year-old boy in Munich, Einstein had been haunted by a single, childlike question:
**"What would the world look like if I could ride alongside a beam of light?"**

According to Isaac Newton's classical mechanics, if you run alongside a train moving at 60 mph at the same speed, the train appears motionless beside you. So, if you chased a light wave traveling at 300,000 kilometers per second at the exact speed of light, would the wave appear frozen in space like a stationary ripple of ice?

Maxwell's equations said that was impossible: light *must* always travel at the exact same speed, $c$, regardless of how fast the observer moves!

In 1905, in an astonishing creative explosion unmatched since Isaac Newton in 1666—known as the **Annus Mirabilis** (Miracle Year)—this unknown patent clerk produced four papers that permanently transformed human civilization:

1. **March 1905: The Light Quantum (The Photoelectric Effect)**
Einstein took Planck's mathematical quanta and made them physically real: light is not just a continuous wave; it consists of localized energy bullets called **photons**. When a photon strikes a metal surface, it knocks out an electron like one billiard ball striking another. This paper won Einstein the Nobel Prize in Physics in 1921.

2. **May 1905: Brownian Motion**
Einstein calculated how invisible water molecules constantly bombard microscopic pollen grains, causing them to jitter in random zig-zags. His equations provided the first definitive mathematical proof that **atoms and molecules actually exist**.

3. **June 1905: Special Relativity**
Einstein solved his childhood riddle by proposing two bold postulates:
- The laws of physics are identical for all observers in uniform motion.
- The speed of light in a vacuum is always constant ($c \approx 300,000\text{ km/s}$) for all observers, no matter how fast they or the light source are moving!

To keep the speed of light constant for everyone, space and time could no longer be rigid, absolute stages.
**Time slows down** (time dilation) and **lengths contract** for objects moving near the speed of light!
Two lightning bolts that appear simultaneous to a person standing on a train platform do *not* occur simultaneously to a passenger inside a speeding train! Time is relative to the observer.

4. **September 1905: Mass-Energy Equivalence ($E = mc^2$)**
In a brief, three-page postscript, Einstein deduced the most famous equation in science:
$$E = mc^2$$
Mass and energy are two forms of the exact same thing. A tiny speck of matter contains a titanic ocean of latent energy, multiplied by the speed of light squared ($c^2 = 9 \times 10^{16}\text{ m}^2/\text{s}^2$)! A single raisin contains enough energy to power a city, if all its mass could be converted to energy.

With no laboratory, no university library, and no academic collaborators—consulting only with his brilliant wife Mileva Marić and friend Michele Besso—a solitary clerk had rebuilt the universe from scratch.`,
    stem_vocabulary: [
      {
        term: "Special Relativity",
        definition: "A physical theory regarding the relationship between space and time, based on the constancy of the speed of light and the principle of relativity.",
        context: "Einstein showed that measurements of time and space depend on the relative velocity of the observer."
      },
      {
        term: "Photon",
        definition: "A quantum of light or other electromagnetic radiation, carrying energy proportional to its frequency.",
        context: "Einstein explained the photoelectric effect by showing light travels as discrete photons."
      },
      {
        term: "Mass-Energy Equivalence ($E = mc^2$)",
        definition: "The principle that mass and energy are interchangeable; a small amount of mass can be converted into a huge amount of energy.",
        context: "Einstein's $E = mc^2$ explains the energy source of the stars and nuclear reactions."
      },
      {
        term: "Time Dilation",
        definition: "A difference in the elapsed time measured by two observers due to a relative velocity between them or a difference in gravitational potential.",
        context: "Clocks on speeding rockets tick slower relative to stationary clocks on Earth."
      }
    ],
    blooms_questions: {
      remember: "What famous equation did Einstein derive in September 1905 connecting mass and energy?",
      analyze: "Why does the speed of light being constant for all observers require time itself to slow down for moving objects?",
      apply_create: "GPS satellites orbiting Earth must adjust their atomic clocks every day for Einstein's time dilation. What would happen to Google Maps and car navigation if engineers ignored Einstein's relativity?"
    },
    quiz: [
      {
        question: "What was Albert Einstein's official job when he published his four revolutionary 1905 papers?",
        options: [
          "Full Professor of Physics at Cambridge University",
          "Patent Examiner Third Class at the Swiss Patent Office in Bern",
          "Astronomer at the Royal Greenwich Observatory",
          "Laboratory assistant to Marie Curie"
        ],
        correct_index: 1,
        explanation: "Einstein worked full-time as an obscure patent clerk in Bern, doing his revolutionary physics in his spare time.",
        hint: "He reviewed patent applications for mechanical inventions in Switzerland."
      },
      {
        question: "For which specific 1905 paper did Albert Einstein receive the 1921 Nobel Prize in Physics?",
        options: [
          "Special Relativity",
          "$E = mc^2$",
          "The Photoelectric Effect (the photon concept of light)",
          "Brownian Motion"
        ],
        correct_index: 2,
        explanation: "The Nobel Committee awarded Einstein the 1921 prize specifically for his discovery of the law of the photoelectric effect.",
        hint: "It explained how light knocks electrons out of metals using photons."
      },
      {
        question: "What does the 'c' represent in Einstein's famous equation $E = mc^2$?",
        options: [
          "The circumference of Earth",
          "The speed of light in a vacuum ($3 \times 10^8$ m/s)",
          "The charge of an electron",
          "The heat capacity of water"
        ],
        correct_index: 1,
        explanation: "'c' comes from the Latin word *celeritas* (speed), representing the universal cosmic speed of light.",
        hint: "It is the cosmic speed limit of the universe."
      }
    ],
    moral_reflection: {
      value: "Imagination Beyond Conformity",
      insight: "Einstein famously remarked: 'Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.'",
      family_prompt: "When you daydream or ask curious 'what if' questions, do you realize you are practicing thought experiments like Einstein? How can curiosity take you anywhere?"
    },
    cultural_context: "Einstein was a passionate violinist, playing Mozart and Bach to help organize his thoughts when grappling with complex theoretical physics problems.",
    audio_url: ""
  },
  {
    id: "science-59-eddington-1919-eclipse-gravity",
    title: "Arthur Eddington and the Day Starlight Bent",
    slug: "science-59-eddington-1919-eclipse-gravity",
    collection: "science-stories",
    collection_name: "Science & Discovery",
    reading_time: "5 min",
    age_group: "Kids & Families (All Ages)",
    difficulty: "Advanced",
    source_book: "A Determination of the Deflection of Light by the Sun's Gravitational Field (1920)",
    source_author: "Sir Frank Watson Dyson, Arthur Stanley Eddington, & Charles Davidson",
    source_year: "1919–1920 CE",
    source_chapter: "Philosophical Transactions of the Royal Society of London (Series A, Vol. 220, pp. 291–333)",
    source_edition: "Joint Meeting of the Royal Society and the Royal Astronomical Society (November 6, 1919)",
    authenticity_note: "Field expedition to the island of Príncipe, West Africa, during the total solar eclipse of May 29, 1919. Measured the gravitational deflection of starlight from the Hyades cluster, confirming Einstein's General Relativity prediction of 1.75 arcseconds.",
    summary: "In the aftermath of World War I, a British Quaker astronomer sailed to a storm-swept tropical island off West Africa to photograph starlight during a total solar eclipse—proving that the sun's gravity curves space and time, launching Einstein to global stardom.",
    content: `In May 1919, on the remote volcanic island of Príncipe off the equatorial coast of West Africa, a thirty-six-year-old English astronomer named Arthur Stanley Eddington paced under dripping palm trees. Outside his canvas tent, thunder rumbled and tropical rain drummed relentlessly on the metal roofs of the cocoa plantations.

In less than two hours, a total solar eclipse would sweep across the island. The giant telescope clockwork was calibrated, the photographic glass plates were ready, but the sky above was a solid, impenetrable ceiling of gray clouds.

Eddington was carrying out one of the most daring scientific tests in human history.

Four years earlier, in the midst of World War I, Albert Einstein had completed his masterpiece in Berlin: **General Relativity**.

For two hundred and thirty years, Isaac Newton's law of universal gravitation had ruled supreme: gravity was an invisible pull acting instantaneously between masses across flat, empty space.

Einstein boldly asserted that Newton was wrong. Space and time were not flat, rigid stages; they formed a flexible four-dimensional fabric called **Spacetime**. Matter tells spacetime how to curve, and curved spacetime tells matter how to move!

Even more stunning: Einstein predicted that because gravity curves the fabric of space itself, a beam of starlight passing close to the massive gravity of the Sun must follow the curved path—bending by **1.75 arcseconds** (a tiny fraction of a degree, but twice the deflection predicted by Newton's corpuscular gravity)!

Normally, the Sun's blinding daylight drowns out the background stars. The only time starlight passing close to the sun could ever be photographed was during the brief darkness of a **Total Solar Eclipse**.

At 1:30 PM on May 29, 1919, the Moon's shadow rushed across the Atlantic and plunged Príncipe into sudden, eerie twilight. The temperature dropped. The birds fell silent.

Through the clouds, the Sun emerged as a black disc surrounded by the glowing, ghostly silver halo of the corona!

Eddington worked with frantic, mechanical precision, swapping fragile photographic glass plates in and out of the telescope camera while assistant Edwin Cottingham counted out seconds: "Exposure... one, two, three... next plate!"

Out of sixteen plates taken, the first fourteen were ruined by cloud cover. But on the final two plates, exposed through a lucky break in the clouds, the stars of the Hyades cluster shone through like tiny pinpoint diamonds!

Months of grueling microscopic measurement followed back at Cambridge. Eddington placed the eclipse plates under a micrometer engine and compared the positions of the stars during the eclipse to reference photographs taken of the same stars at night six months earlier without the Sun in the way.

If Einstein was right, the stars closest to the Sun's edge should appear pushed slightly outward by the curvature of space.

Eddington measured the deflection: **1.61 arcseconds** (matching Einstein's 1.75 prediction within experimental margin of error)!

On the afternoon of November 6, 1919, in the packed Great Hall of the Royal Society in London, beneath a stern oil portrait of Isaac Newton, astronomers gathered for a joint meeting. The Astronomer Royal, Sir Frank Dyson, announced the results:
"After a careful study of the plates, I am prepared to say that there can be no doubt that they confirm Einstein's prediction. A very definite result has been obtained that light is deflected in accordance with Einstein's generalized theory of gravitation."

The philosopher Alfred North Whitehead, who sat in the audience, later wrote: "The whole atmosphere was that of a Greek drama... We were gazing upon a turning point in human thought."

The next morning, the London *Times* ran screaming banner headlines:
**"REVOLUTION IN SCIENCE: NEW THEORY OF THE UNIVERSE. NEWTONIAN IDEAS OVERTHROWN. SPACE WARPED."**

Almost overnight, Albert Einstein was catapulted from an obscure theoretical physicist into the world's most famous scientific icon.

Even more noble was the human context: Arthur Eddington, a British Quaker pacifist, had reached across the bitter hatred of World War I to champion and prove the theory of a German-born Jewish pacifist—demonstrating that the quest for truth transcends war, nations, and borders.`,
    stem_vocabulary: [
      {
        term: "General Relativity",
        definition: "Einstein's theory of gravitation, which describes gravity not as a force, but as the curvature of four-dimensional spacetime caused by mass and energy.",
        context: "Eddington verified General Relativity by measuring the gravitational deflection of light."
      },
      {
        term: "Spacetime",
        definition: "The four-dimensional continuum combining the three spatial dimensions and one temporal dimension into a single manifold.",
        context: "The Sun's enormous mass curves the spacetime fabric around it, bending light rays."
      },
      {
        term: "Gravitational Lensing",
        definition: "The bending and magnification of light from a distant source as it passes near a massive celestial object.",
        context: "Eddington's 1919 eclipse observation was the world's first detected gravitational lens."
      },
      {
        term: "Arcsecond",
        definition: "An angular measurement equal to 1/3600 of a degree.",
        context: "Einstein predicted starlight would bend by 1.75 arcseconds near the limb of the Sun."
      }
    ],
    blooms_questions: {
      remember: "On what West African island did Arthur Eddington photograph the historic 1919 total solar eclipse?",
      analyze: "Why was a total solar eclipse necessary to test Einstein's prediction that gravity bends starlight?",
      apply_create: "Modern astronomers use giant galaxy clusters as 'gravitational lenses' to see baby galaxies at the edge of the universe. How does Eddington's discovery form the basis of modern deep-space astronomy?"
    },
    quiz: [
      {
        question: "How did Einstein's General Relativity explain why starlight bends near the Sun?",
        options: [
          "The Sun's heat melts the light rays",
          "The Sun's mass curves the fabric of spacetime around it, and light follows that curved path",
          "Solar wind blows the starlight sideways",
          "The Moon acts as a giant optical mirror"
        ],
        correct_index: 1,
        explanation: "General Relativity asserts that mass warps spacetime; light travels along the shortest path (geodesic) through this curved space.",
        hint: "Mass warps the fabric of space and time."
      },
      {
        question: "How did Eddington measure the displacement of the stars photographed during the eclipse?",
        options: [
          "He used a tape measure on the beach",
          "He compared eclipse plates under a micrometer to plates of the same stars taken at night months earlier",
          "He asked local villagers to count the stars",
          "He guessed the positions from memory"
        ],
        correct_index: 1,
        explanation: "Astronomers aligned the eclipse photographs with nighttime photographs of the same star field taken without the Sun present.",
        hint: "He compared the eclipse photos with nighttime photos of the same stars."
      },
      {
        question: "What profound international message did Eddington's expedition send right after World War I?",
        options: [
          "That Britain had won the scientific race",
          "That a British astronomer had verified the theory of a German physicist, proving science transcends national conflicts",
          "That astronomy should be kept secret by governments",
          "That scientists should only study weapons"
        ],
        correct_index: 1,
        explanation: "Eddington's Quaker pacifism and Dyson's leadership proved that international scientific cooperation bridges wartime divides.",
        hint: "A British astronomer proving a German scientist's theory."
      }
    ],
    moral_reflection: {
      value: "Truth Across Borders and Hatred",
      insight: "In the bitter aftermath of World War I, British and German scientists united through the stars, proving that the search for cosmic truth can heal the wounds of war.",
      family_prompt: "When people around you are divided or arguing, how can focusing on shared goals and universal truths help bring people back together?"
    },
    cultural_context: "Arthur Eddington was one of the few people who understood General Relativity during WWI. When an interviewer remarked, 'Professor Eddington, you must be one of only three people in the world who understands Einstein's theory,' Eddington paused and humorously asked, 'I'm trying to think who the third person is!'",
    audio_url: ""
  },
  {
    id: "science-60-rutherford-gold-foil-nucleus",
    title: "Ernest Rutherford and the Bullet That Bounced Off Tissue Paper",
    slug: "science-60-rutherford-gold-foil-nucleus",
    collection: "science-stories",
    collection_name: "Science & Discovery",
    reading_time: "5 min",
    age_group: "Kids & Families (All Ages)",
    difficulty: "Intermediate",
    source_book: "The Scattering of $\\alpha$ and $\\beta$ Particles by Matter and the Structure of the Atom (1911)",
    source_author: "Ernest Rutherford, FRS",
    source_year: "1909–1911 CE",
    source_chapter: "Philosophical Magazine (Series 6, Vol. 21, pp. 669–688, May 1911)",
    source_edition: "Address to the Manchester Literary and Philosophical Society (March 7, 1911)",
    authenticity_note: "Conducted at the University of Manchester physics laboratory by Hans Geiger and Ernest Marsden under Rutherford's direction. Recorded the scintillation of alpha particles on zinc sulfide screens, finding that roughly 1 in 8,000 alpha particles bounced backward off thin gold foil.",
    summary: "Firing heavy alpha bullets at a sheet of gold foil hammered thinner than a soap bubble, a booming New Zealand physicist caught particles bouncing straight back—discovering that the atom is mostly empty space with a tiny, dense nucleus at its heart.",
    content: `In the physics laboratory of the University of Manchester in England, in the spring of 1909, a booming, energetic New Zealander named Ernest Rutherford strode into the darkened basement. With his broad shoulders, bushy mustache, and thunderous voice, Rutherford looked more like a sheep farmer than a Nobel laureate.

At the time, the world's leading model of the atom was the **Plum Pudding Model**, proposed by J.J. Thomson (who had discovered the electron in 1897). Thomson imagined the atom as a soft, diffuse sphere of positive electric dough, studded with tiny negative electrons like raisins in a British Christmas pudding.

Because the positive charge was thought to be spread out thinly across the entire volume of the atom, it possessed virtually no concentrated electric field.

Rutherford decided to probe the interior of the atom using nature's most energetic microscopic artillery: **Alpha Particles** (fast-moving helium nuclei emitted by radioactive radium).

Rutherford assigned his assistant, Hans Geiger, and an eager twenty-year-old undergraduate student, Ernest Marsden, to build an experiment.

They placed a speck of radium inside a heavy lead box with a tiny pinhole, creating a narrow beam of high-speed alpha particles. The beam was aimed at a sheet of pure **gold foil** hammered so extraordinarily thin—only 400 atoms thick (about one ten-thousandth of a millimeter)—that you could see light through it!

Surrounding the foil was a circular screen coated with **zinc sulfide**. Whenever a high-speed alpha particle struck the zinc sulfide screen, it produced a microscopic flash of green light (scintillation).

Geiger and Marsden had to sit in pitch darkness for thirty minutes until their eyes adapted. Then, peering through a small microscope, they counted the flashes for hours.

As expected, nearly all the alpha particles—99.9% of them—blazed straight through the gold foil with almost no deflection at all, like rifle bullets passing through a gossamer curtain of fog!

Then, Rutherford made a casual, fateful suggestion:
"See if you can get some effect of alpha particles turned through a large angle... see if any bounce backward!"

Marsden returned to the dark room, adjusted the zinc sulfide screen to the same side as the radium source, and watched.

Click. Click.

Marsden could hardly believe his eyes. Out of every eight thousand alpha particles fired at the gold foil, **one bounced backwards**, deflecting by more than ninety degrees, and occasionally bouncing straight back toward the gun!

Marsden ran to tell Rutherford.

Rutherford was utterly thunderstruck. Years later, he recorded his astonishment in one of the most famous quotes in the history of science:
**"It was quite the most incredible event that has ever happened to me in my life. It was almost as incredible as if you fired a 15-inch artillery shell at a piece of tissue paper and it came back and hit you!"**

How could a sheet of gold foil, thinner than a soap bubble, bounce a massive alpha bullet traveling at ten thousand miles per second?

Rutherford spent two years calculating the physics. He realized there was only one possible physical explanation:
The positive charge of the atom was *not* spread out like pudding!
All the positive charge, and 99.95% of the entire mass of the atom, was crammed into a colossal, unimaginable concentration at the dead center—a microscopic core that Rutherford named the **Nucleus**!

The atom was not solid at all. It was **99.999999999% empty space**!

If an atom were enlarged to the size of a giant football stadium, the nucleus would be the size of a tiny marble sitting on the 50-yard line, while the electrons would be like gnats buzzing around the outermost bleachers!

In May 1911, Rutherford published his planetary model of the atom in the *Philosophical Magazine*.

Rutherford had split open the classical atom, revealing the nuclear architecture of the universe and launching the age of nuclear physics.`,
    stem_vocabulary: [
      {
        term: "Atomic Nucleus",
        definition: "The small, dense, positively charged region at the center of an atom, containing almost all of its mass (protons and neutrons).",
        context: "Rutherford discovered the atomic nucleus by observing backward-scattered alpha particles."
      },
      {
        term: "Alpha Particle",
        definition: "A positively charged subatomic particle consisting of two protons and two neutrons (a helium-4 nucleus), emitted in certain radioactive decays.",
        context: "Rutherford used alpha particles as microscopic projectiles to probe the interior of atoms."
      },
      {
        term: "Rutherford Scattering",
        definition: "The elastic scattering of charged particles by the Coulomb interaction with a dense atomic nucleus.",
        context: "The mathematical scattering formula confirmed that the nucleus behaves as a concentrated positive point charge."
      },
      {
        term: "Scintillation",
        definition: "A flash of light produced in a transparent material (such as zinc sulfide) by the passage of a high-energy particle.",
        context: "Geiger and Marsden painstakingly counted microscopic scintillations in a dark room."
      }
    ],
    blooms_questions: {
      remember: "What metaphor did Rutherford use to describe his shock when alpha particles bounced backward off the gold foil?",
      analyze: "Why did the fact that most alpha particles passed straight through the foil prove that the atom is mostly empty space?",
      apply_create: "If your body is made of atoms, and atoms are 99.999999999% empty space, why doesn't your hand pass right through a wooden table when you lean on it? (Hint: Think about electrical repulsion between electrons)."
    },
    quiz: [
      {
        question: "What historic discovery did Rutherford make using the gold foil experiment in 1911?",
        options: [
          "He discovered the electron",
          "He discovered that the atom has a tiny, dense, positively charged nucleus and is mostly empty space",
          "He discovered that gold conducts electricity",
          "He proved that atoms cannot be split"
        ],
        correct_index: 1,
        explanation: "Rutherford proved the existence of the atomic nucleus, showing that almost all mass is concentrated in a tiny central point.",
        hint: "He discovered the dense center of the atom."
      },
      {
        question: "Roughly what proportion of alpha particles bounced backward off the gold foil in Geiger and Marsden's observations?",
        options: [
          "Half of them",
          "Roughly 1 in 8,000",
          "All of them",
          "None of them"
        ],
        correct_index: 1,
        explanation: "Only about 1 in 8,000 alpha particles struck the tiny nucleus directly enough to bounce backward.",
        hint: "A very small fraction—about one in several thousand."
      },
      {
        question: "What atomic model did Rutherford's experiment completely disprove?",
        options: [
          "The Quantum Cloud model",
          "J.J. Thomson's 'Plum Pudding' model",
          "The String Theory model",
          "The Solar Nebula model"
        ],
        correct_index: 1,
        explanation: "The Plum Pudding model assumed positive charge was spread out thinly, which could never repel an alpha particle.",
        hint: "A model named after a traditional British Christmas dessert."
      }
    ],
    moral_reflection: {
      value: "Checking Unexpected Anomalies",
      insight: "Rutherford suggested looking for backward-bouncing particles just on a hunch. Great discoveries often happen when scientists check the 'impossible' corner that everyone else ignored.",
      family_prompt: "When something unexpected or surprising happens in a project, do you ignore it as a mistake or investigate why it happened?"
    },
    cultural_context: "Ernest Rutherford was born in New Zealand, where his image appears on the New Zealand 100-dollar note. He is buried in Westminster Abbey, resting near Isaac Newton and Lord Kelvin.",
    audio_url: ""
  }
];

export const stageC1TaStories = [
  {
    id: "science-56-tu-youyou-artemisinin-malaria",
    title: "து யூயூ: 1,600 ஆண்டு பழங்கால ஏடும் மலேரியாவை வென்ற மூலிகையும்",
    slug: "science-56-tu-youyou-artemisinin-malaria",
    collection: "science-stories",
    collection_name: "அறிவியல் & கண்டுபிடிப்புகள்",
    reading_time: "5 min",
    age_group: "சிறுவர்கள் மற்றும் குடும்பத்தினர்",
    difficulty: "நடுத்தரம்",
    source_book: "Zhouhou Beiji Fang (அவசர சிகிச்சை கையேடு, கி.பி. 340)",
    source_author: "கே ஹாங் (Ge Hong) & து யூயூ (Tu Youyou)",
    source_year: "340 CE / 1969–1972 CE",
    source_chapter: "அத்தியாயம் 16: முறைக் காய்ச்சல்களுக்கான மூலிகைக் குறிப்புகள்; Kexue Tongbao (1977)",
    source_edition: "Nature Medicine (2011); நோபல் உரை (2015)",
    authenticity_note: "1967 மே 23-ல் சீனாவில் தொடங்கப்பட்ட 'ப்ராஜெக்ட் 523' ரகசிய ராணுவ ஆராய்ச்சி ஆவணம். 1971 அக்டோபர் 4 அன்று து யூயூ குறைந்த வெப்பநிலையில் (35°C ஈதர்) எட்டப்பட்ட 191-வது சாறு மூலம் மலேரியாக் கிருமிகளை 100% அழித்துக் காட்டிய வரலாற்றுப் பதிவு.",
    summary: "சீனாவின் ரகசிய 'ப்ராஜெக்ட் 523' திட்டத்தின் கீழ், 2,000 பழங்கால ஏடுகளைத் தேடி, 1,600 ஆண்டுகளுக்கு முந்தைய மருத்துவக் குறிப்பை வாசித்து, குளிர்ந்த ஈதரில் ஆர்ட்டிமிசினின் மருந்தைப் பிரித்து, தன் சொந்த உடலிலேயே சோதித்து பல லட்சம் உயிர்களைக் காப்பாற்றினார் து யூயூ.",
    content: `1960-களின் பிற்பகுதி. வியட்நாம் போரும் சீனப் பண்பாட்டுப் புரட்சியும் உச்சக்கட்டத்தில் இருந்த காலம். தென்கிழக்காசியாவின் அடர்ந்த சதுப்புநிலக் காடுகளில், துப்பாக்கி குண்டுகளையும் விட கொடூரமான ஒரு கண்ணுக்குத் தெரியாத எமன் இருதரப்பு வீரர்களையும் கொத்துக்கொத்தாகச் சாய்த்துக் கொண்டிருந்தான். அதுதான் குளோரோகுயின் மருந்துகளுக்குக் கட்டுப்படாத கொடிய 'பிளாஸ்மோடியம் பால்சிபாரம்' மலேரியா! போர்க்களத்தில் இறந்தவர்களை விட மலேரியாவால் இறந்த வீரர்களின் எண்ணிக்கை மூன்று மடங்கு அதிகமாக இருந்தது!

1967 மே 23 அன்று, சீன அரசாங்கம் **'ப்ராஜெக்ட் 523'** என்ற அதிரடி ரகசிய ராணுவ ஆராய்ச்சிப் பிரிவைத் தொடங்கியது. புதிய மலேரியா மருந்தைக் கண்டுபிடிக்க அறுநூறுக்கும் மேற்பட்ட முன்னணி விஞ்ஞானிகள் களமிறக்கப்பட்டனர்.

1969-ல், மேற்கத்திய மருந்தியல் மற்றும் பாரம்பரிய சீன மருத்துவம் ஆகிய இரண்டிலும் பயின்ற முப்பத்தொன்பது வயதான து யூயூ (Tu Youyou) என்ற பெண் விஞ்ஞானி, இந்த ஆராய்ச்சிக் குழுவின் தலைவராக நியமிக்கப்பட்டார்.

மேற்கத்திய விஞ்ஞானிகள் ரசாயனக் கூடங்களில் ஆயிரக்கணக்கான செயற்கை மருந்துகளை உருவாக்கித் தோற்றுக் கொண்டிருந்த வேளையில், து யூயூ வரலாற்றை நோக்கித் திரும்பினார். கிராமத்து நாட்டுப்புற மருத்துவர்களைச் சந்தித்தார்; பழங்கால நூல்களில் இருந்து 2,000 மூலிகைக் குறிப்புகளைத் திரட்டினார்; இறுதியாக 640 நம்பிக்கைக்குரிய மூலிகைப் பட்டியலைத் தயாரித்தார்.

அவற்றில் மிக முக்கியமான ஒன்றாக இருந்தது **'சிங்ஹாவ்' (Qinghao - Sweet Wormwood / தும்பைச் செடி வகை)**.

து யூயூவின் குழுவினர் அந்தச் செடியை வெந்நீரில் கொதிக்க வைத்துச் சாறு எடுத்து, மலேரியா தாக்கிய எலிகளுக்குக் கொடுத்துப் பார்த்தனர். ஆனால் முடிவுகள் ஏமாற்றமளித்தன: அது வெறும் 12% முதல் 68% மட்டுமே பலனளித்தது; பல நேரங்களில் முழுத் தோல்வியடைந்தது!

து யூயூ சோர்வடையவில்லை. தனது மர மேசைக்குத் திரும்பி, பழங்கால மூங்கில் ஏடுகளை வரிக்கு வரி மீண்டும் கவனமாக வாசித்தார்.

கி.பி. 340-ல் ஜின் வம்சத்தைச் சேர்ந்த மருத்துவர் கே ஹாங் (Ge Hong) எழுதிய *அவசர சிகிச்சைக் கையேடு* (Zhouhou Beiji Fang) என்ற 1,600 ஆண்டுகள் பழமையான நூலில், ஒரு ஒற்றை வரியைக் கண்டு து யூயூ அப்படியே உறைந்து நின்றார்:
**"ஒரு கைப்பிடி சிங்ஹாவ் மூலிகையை எடுத்து, இரண்டு ஷெங் தண்ணீரில் ஊறவைத்து, அதன் சாற்றைப் பிழிந்து முழுவதையும் குடிக்கவும்!"**

து யூயூ அந்தச் சொற்களை மீண்டும் மீண்டும் வாசித்தார். அவரது இதயம் துடித்தது!
*தண்ணீரில் ஊறவைத்து... சாற்றைப் பிழியவும்...*

நவீன ஆய்வகங்கள் அனைத்தும் மூலிகைகளை வெந்நீரிலோ அல்லது கொதிக்கும் ஆல்கஹாலிலோ போட்டுப் பல மணி நேரம் காய்ச்சிக் கஷாயம் எடுக்கும்! ஆனால் 1,600 ஆண்டுகளுக்கு முந்தைய அந்த மருத்துவரோ *கொதிக்க வைக்க* என்று சொல்லவில்லை; மாறாக *ஊறவைத்துப் பிழியவும்* என்று எழுதியுள்ளார்!

அதிக வெப்பம்தான் அந்த மூலிகையில் உள்ள உயிர்காக்கும் வேதிப்பொருளை அழித்து விடுகிறது என்பதை து யூயூ உணர்ந்தார்!

உடனடியாக, மிகக் குறைந்த வெப்பநிலையில் கொதிக்கும் **'எத்தில் ஈதர்' (Ethyl Ether - 35°C கொதிநிலை)** என்ற வேதிப் பிரித்தெடுக்கும் திரவத்திற்கு மாறினார். மிதமான வெப்பத்தில் சாற்றைப் பிரித்தெடுத்தார்.

1971 அக்டோபர் 4 அன்று, 191-வது சாறு மலேரியா தாக்கிய எலிகளுக்கும் குரங்குகளுக்கும் செலுத்தப்பட்டது.

விளைவு உலகையே அதிர வைத்தது: **100% வெற்றி!** விலங்குகளின் ரத்தத்தில் இருந்த மலேரியாக் கிருமிகள் அடியோடு அழிந்துபோயின; எந்த நச்சுத்தன்மையும் இல்லை!

ஆனால் அரசியல் குழப்பங்களால் மனிதர்களுக்குச் சோதிக்க அனுமதி கிடைக்கவில்லை. மருந்தைத் தாமதப்படுத்தினால் காடுகளில் மனிதர்கள் செத்து மடிவார்கள் என்பதை அறிந்த து யூயூ, அறிவியல் வரலாற்றின் உன்னதத் தியாகத்தைச் செய்தார்:
1972 ஜூலையில், பெய்ஜிங் டோங்ஷிமென் மருத்துவமனையில், து யூயூவும் அவரது இரண்டு ஆய்வகத் தோழர்களும் அந்த மருந்தை தங்களின் சொந்த உடலில் செலுத்திப் பரிசோதித்துக் கொண்டனர்!

முப்பது நாட்கள் அவர்களின் இதயம், கல்லீரல், சிறுநீரகங்கள் கண்காணிக்கப்பட்டன; எந்தப் பக்கவிளைவும் இல்லை!

பின்னர் ஹைனான் தீவுக்கு விரைந்து சென்ற து யூயூ, மரணப் படுக்கையில் கிடந்த இருபத்தொரு தீவிர மலேரியா நோயாளிகளுக்கு நேரில் அந்த மருந்தைக் கொடுத்தார். முப்பத்தாறு மணி நேரத்திற்குள் அவர்களின் காய்ச்சல் நின்றது; ரத்தத்திலிருந்து மலேரியாக் கிருமிகள் மாயமாய் மறைந்தன!

1972-ல் அந்தத் தூய படிகப் பொருளைப் பிரித்தெடுத்து அதற்கு **'ஆர்ட்டிமிசினின்' (Artemisinin / Qinghaosu)** என்று பெயரிட்டனர்.

இன்று உலக சுகாதார அமைப்பின் அங்கீகாரத்தோடு, உலகெங்கும் குறிப்பாக ஆப்பிரிக்கா மற்றும் ஆசியக் காடுகளில் பல லட்சம் ஏழைக் குழந்தைகளின் உயிரைக் காக்கும் முதன்மை மருந்தாக ஆர்ட்டிமிசினின் விளங்குகிறது.

2015-ல், தனது எண்பத்து நான்காவது வயதில், து யூயூ மருத்துவத்திற்கான நோபல் பரிசைப் பெற்றார்—அறிவியலில் நோபல் பரிசு வென்ற முதல் சீனப் பெண்மணி இவரே! தனது ஏற்புரையில் அவர் கம்பீரமாக முழங்கினார்:
"ஆர்ட்டிமிசினின் என்பது பாரம்பரிய மருத்துவத்திலிருந்து உலகிற்கு அளிக்கப்பட்ட ஒரு உன்னதப் பரிசு!"`,
    stem_vocabulary: [
      {
        term: "ஆர்ட்டிமிசினின் (Artemisinin / Qinghaosu)",
        definition: "ஸ்வீட் வார்ம்வுட் (Artemisia annua) மூலிகையிலிருந்து பிரித்தெடுக்கப்படும், மலேரியாக் கிருமிகளை அழிக்கும் திறன் கொண்ட பெராக்சைடு பிணைப்பு மூலக்கூறு.",
        context: "து யூயூ ஆர்ட்டிமிசினின் மருந்தைக் கண்டறிந்து உலக மலேரியா மரணங்களை பெருமளவு குறைத்தார்."
      },
      {
        term: "குறைந்த வெப்பநிலை பிரித்தெடுத்தல் (Low-Temperature Extraction)",
        definition: "வெப்பத்தால் அழியக்கூடிய மூலக்கூறுகளைப் பாதுகாக்க குறைந்த கொதிநிலை கொண்ட கரைப்பான்களைப் பயன்படுத்திச் சாறு எடுக்கும் வேதியியல் முறை.",
        context: "து யூயூ 35°C-ல் கொதிக்கும் ஈதரைப் பயன்படுத்தி மூலக்கூறின் வெப்பச் சிதைவைத் தடுத்தார்."
      },
      {
        term: "தாவர வேதியியல் (Phytochemistry)",
        definition: "தாவரங்களில் உள்ள இரண்டாம் நிலை வளர்சிதை மாற்றப் பொருட்கள் மற்றும் மருத்துவ மூலக்கூறுகளைப் பற்றி ஆராயும் வேதியியல் பிரிவு.",
        context: "பழங்கால மூலிகை அறிவியலை நவீன தாவர வேதியியலோடு இணைத்து து யூயூ சாதனை படைத்தார்."
      },
      {
        term: "பிளாஸ்மோடியம் பால்சிபாரம் (Plasmodium falciparum)",
        definition: "மனிதர்களில் மூளை மலேரியாவை உண்டாக்கும் மிகக் கொடூரமான ஒட்டுண்ணி வகை.",
        context: "குளோரோகுயினுக்கு மசியாத பால்சிபாரம் கிருமிகளை ஆர்ட்டிமிசினின் முற்றிலும் அழித்தது."
      }
    ],
    blooms_questions: {
      remember: "து யூயூ குறைந்த வெப்பநிலையில் சாறு எடுக்க வழிகாட்டிய 1,600 ஆண்டுகள் பழமையான நூலை எழுதிய மருத்துவர் யார்?",
      analyze: "நவீன அறிவியலாளர்கள் வெந்நீரில் கொதிக்க வைத்தபோது கிடைக்காத வெற்றி, தண்ணீரில் ஊறவைத்துப் பிழிந்தபோது எவ்வாறு சாத்தியமானது?",
      apply_create: "நமது சித்த மருத்துவம் மற்றும் ஆயுர்வேதத்தில் ஆயிரக்கணக்கான மூலிகைக் குறிப்புகள் உள்ளன. நவீன வேதியியல் சோதனைகள் மூலம் அவற்றை நாம் எவ்வாறு உலகளாவிய மருந்துகளாக மாற்றலாம்?"
    },
    quiz: [
      {
        question: "கே ஹாங் எழுதிய பழங்கால ஏட்டில் இருந்த எந்தக் குறிப்பு து யூயூவின் சிந்தனையை மாற்றியது?",
        options: [
          "மூலிகையைப் பன்னிரண்டு மணி நேரம் கொதிக்க வைக்க வேண்டும் என்ற குறிப்பு",
          "மூலிகையைக் குளிர்ந்த நீரில் ஊறவைத்துச் சாற்றைப் பிழிய வேண்டும் என்ற குறிப்பு",
          "வேர்களைத் தீயிலிட்டுச் சாம்பலாக்க வேண்டும் என்ற குறிப்பு",
          "பாம்பு விஷத்துடன் கலக்க வேண்டும் என்ற குறிப்பு"
        ],
        correct_index: 1,
        explanation: "கொதிக்க வைக்காமல் ஊறவைத்துப் பிழியச் சொன்னதால், அதிக வெப்பம் மூலக்கூறை அழிக்கிறது என்பதை அவர் உணர்ந்தார்.",
        hint: "கொதிக்க வைக்காமல் குளிர்ந்த நீரில் பிழியச் சொன்ன குறிப்பு."
      },
      {
        question: "35°C கொதிநிலையில் மூலிகையைப் பிரிக்க து யூயூ பயன்படுத்திய கரைப்பான் எது?",
        options: [
          "கந்தக அமிலம்",
          "எத்தில் ஈதர் (Ethyl Ether)",
          "பாதரசம்",
          "பிளீச்சிங் பவுடர்"
        ],
        correct_index: 1,
        explanation: "எத்தில் ஈதர் மிகக் குறைந்த வெப்பநிலையில் கொதிப்பதால் வெப்பச் சிதைவின்றி மூலக்கூறைப் பிரிக்க முடிந்தது.",
        hint: "குறைந்த கொதிநிலை கொண்ட ஒரு ஆவியாகும் திரவம்."
      },
      {
        question: "மருத்துவப் பரிசோதனைக்கு முன் மருந்து பாதுகாப்பானது என்பதை உறுதிப்படுத்த து யூயூ என்ன செய்தார்?",
        options: [
          "காட்டுப் பறவைகளுக்கு ஊட்டினார்",
          "தானும் தனது இரண்டு சக ஊழியர்களும் அந்த மருந்தை முதலில் குடித்துத் தங்களின் சொந்த உடலிலேயே சோதித்தனர்",
          "ஆற்றில் ஊற்றினார்",
          "இருபது ஆண்டுகள் காத்திருந்தார்"
        ],
        correct_index: 1,
        explanation: "நோயாளிக்கு ஆபத்து வரக்கூடாது என்பதற்காக தன் சொந்த உடலிலேயே அதிக அளவு மருந்தைக் குடித்து துணிவோடு சோதித்தார்.",
        hint: "தனது சொந்த உடலையே முதல் பரிசோதனைக் களமாக்கினார்."
      }
    ],
    moral_reflection: {
      value: "பாரம்பரியத்தை மதிக்கும் அறிவியல் திறந்தமனம்",
      insight: "பழங்கால நூல்களை மூடநம்பிக்கை என்று எள்ளி நகையாடாமல், அந்த அனுபவ அறிவை நவீன சோதனைகளோடு இணைத்து மனிதகுலத்தைக் காத்தவர் து யூயூ.",
      family_prompt: "தாத்தா பாட்டிகள் கூறும் வீட்டு மருத்துவக் குறிப்புகளை நாம் கேலி செய்கிறோமா அல்லது ஆர்வத்தோடு கவனிக்கிறோமா? பழைய ஞானமும் புதிய அறிவியலும் எவ்வாறு கைகோர்க்கலாம்?"
    },
    cultural_context: "து யூயூ என்ற பெயர் பழங்கால சீனக் கவிதைத் தொகுப்பான *ஷிஜிங்* நூலில் வரும் வரிகளிலிருந்து வைக்கப்பட்டது: 'மான் குட்டிகள் தும்பைச் செடிகளை மேய்ந்து *யூயூ* என இனிமையாகக் குரல் எழுப்புகின்றன'—அவரது பெயரே அவர் கண்டறிந்த மூலிகையைக் குறித்தது ஒரு வியக்கத்தக்க வரலாற்று ஒற்றுமை!",
    audio_url: ""
  },
  {
    id: "science-57-planck-black-body-quanta",
    title: "மேக்ஸ் பிளாங்க்: சூடான அடுப்பும் ஆற்றலின் பொட்டலங்களும்",
    slug: "science-57-planck-black-body-quanta",
    collection: "science-stories",
    collection_name: "அறிவியல் & கண்டுபிடிப்புகள்",
    reading_time: "5 min",
    age_group: "சிறுவர்கள் மற்றும் குடும்பத்தினர்",
    difficulty: "மேம்பட்ட நிலை",
    source_book: "Ueber eine Verbesserung der Wien'schen Spectralgleichung (1900)",
    source_author: "மேக்ஸ் பிளாங்க் (Max Planck)",
    source_year: "1900 CE",
    source_chapter: "ஜெர்மன் இயற்பியல் கழகத்தின் ஆய்வுக் குறிப்புகள் (டிசம்பர் 14, 1900)",
    source_edition: "Annalen der Physik (1901); நோபல் உரை (1920)",
    authenticity_note: "1900 டிசம்பர் 14 அன்று பெர்லின் இயற்பியல் கழகத்தில் பிளாங்க் சமர்ப்பித்த வரலாற்று உரை. ஆற்றல் தொடர்ச்சியான நீரோடை அல்ல, அது 'குவாண்டா' எனப்படும் தனித்தனிப் பொட்டலங்களாகவே உமிழப்படுகிறது என்ற $E = h\nu$ சமன்பாட்டை உலகுக்கு அறிமுகப்படுத்திய ஆவணம்.",
    summary: "மின்விளக்குகளின் வெப்பக் கதிர்வீச்சை ஆராய்ந்தபோது மரபு இயற்பியல் விதிகள் முறிந்துபோனதால், 'ஆற்றல் என்பது தொடர்ச்சியான ஆறு அல்ல, அது தனித்தனிப் பொட்டலங்களாகவே பாய்கிறது' என்ற குவாண்டம் புரட்சியைத் தொடங்கி வைத்தார் மேக்ஸ் பிளாங்க்.",
    content: `1900-ஆம் ஆண்டு டிசம்பர் 14-ஆம் தேதி குளிர்காலப் பிற்பகல். ஜெர்மனியின் பெர்லின் நகரில் உள்ள இயற்பியல் நிறுவனத்தில், நாற்பத்திரண்டு வயதான பேராசிரியர் மேக்ஸ் பிளாங்க் மேடையில் நின்றார். ஒழுக்கமும் பாரம்பரியமும் நிறைந்த பிளாங்க், எந்தப் புரட்சியையும் செய்ய விரும்பியவர் அல்ல; நியூட்டன் மற்றும் மேக்ஸ்வெல்லின் மரபுசார் இயற்பியலை ஆழ்ந்து மதித்த ஒரு அமைதியான அறிஞர்.

ஆனால் அன்று மதியம், அவர் அறிவித்த ஒற்றைக் கருத்து மனித அறிவின் அடித்தளத்தையே புரட்டிப் போட்டது!

இந்தச் சிக்கல் மின்விளக்குகளின் தொழிற்சாலை ஆய்விலிருந்து தொடங்கியது. மின்விளக்குகளின் இழைகள் எவ்வளவு மின்சாரத்தில் எவ்வளவு ஒளியைத் தருகின்றன என்பதை அளவிட, ஜெர்மன் அரசாங்கம் ஒரு சிறிய துளையிடப்பட்ட பீங்கான் அடுப்பை—இயற்பியலில் **'கரும்பொருள்' (Black Body)** என்று அழைக்கப்படும் அமைப்பை—உருவாக்கியது.

அடுப்பைச் சூடாக்கும்போது, அது மங்கிய சிவப்பு நிறமாகி, பின் ஆரஞ்சு நிறமாகி, இறுதியில் வெண்மையாக ஒளிர்ந்தது.

அந்தக் காலத்து மரபு இயற்பியலின்படி, ஆற்றல் என்பது தடையின்றிப் பாயும் ஒரு தொடர்ச்சியான நதி போன்றது.

ஆனால் இந்தக் கொள்கையைக் கொண்டு அடுப்பின் கதிர்வீச்சைக் கணக்கிட்டபோது, **'புற ஊதாக் கேடு' (Ultraviolet Catastrophe)** என்ற ஒரு விபரீதமான விடை கிடைத்தது:
அதாவது, அதிர்வெண் கூடக் கூட, அந்த அடுப்பு எல்லையற்ற ஆற்றலை வெளிப்படுத்த வேண்டும்! அதன் அர்த்தம் என்னவென்றால்—நீங்கள் வீட்டில் அடுப்பைப் பற்றவைத்தாலோ அல்லது பிரெட் டோஸ்டரை இயக்கினாலோ, அது பிரபஞ்சத்தையே சுட்டுப் பொசுக்கும் அளவுக்குப் புற ஊதாக் கதிர்களையும் எக்ஸ் கதிர்களையும் அள்ளி வீச வேண்டும்!

நிஜத்தில் அப்படி நடக்கவில்லை. அதிர்வெண் கூடும்போது கதிர்வீச்சு குறைந்து சீராக நின்றது.

ஆறு ஆண்டுகள் பிளாங்க் போராடினார். எந்தக் கணக்கும் பொருந்தவில்லை.

இறுதியாக, 1900-ஆம் ஆண்டின் இலையுதிர்காலத்தில், பிளாங்க் "ஒரு விரக்தி கலந்த துணிச்சலான பாய்ச்சலை" மேற்கொண்டார்.

அவர் தனக்குள் கேட்டார்: "மரபு இயற்பியல் சொன்னது போல ஆற்றல் ஒரு தொடர்ச்சியான நதி இல்லையென்றால்?
ஆற்றல் என்பது குழாயிலிருந்து கொட்டும் தண்ணீர் போல அல்லாமல், துளித்துளியாக விழும் சொட்டு நீரைப் போலவோ அல்லது தனித்தனி நாணயங்களைப் போலவோ துண்டு துண்டாக இருந்தால் என்ன?"

இந்தத் தனித்தனி ஆற்றல் பொட்டலங்களுக்கு அவர் **'குவாண்டா' (Quanta - இலத்தீனில் 'எவ்வளவு' என்று பொருள்)** என்று பெயரிட்டார்.

பிளாங்க் ஒரு எளிய சமன்பாட்டை எழுதினார்:
$$E = h\nu$$
இதில்:
- $E$ என்பது ஆற்றல் பொட்டலத்தின் அளவு;
- $\nu$ (நியூ) என்பது கதிர்வீச்சின் அதிர்வெண்;
- $h$ என்பது இயற்கையின் ஒரு புதிய மாறிலி; இன்று அது **'பிளாங்க் மாறிலி' (Planck's Constant)** என்று அழைக்கப்படுகிறது.

இந்த எளிய சமன்பாடு அந்த விபரீதப் புதிருக்கு உடனடி விடை தந்தது:
குறைந்த அதிர்வெண் கொண்ட சிவப்பு ஒளியின் ஆற்றல் பொட்டலங்கள் மிகச் சிறியவை; அதனால் அடுப்பு அவற்றை எளிதாக வெளியிடுகிறது. ஆனால் புற ஊதா அதிர்வெண்ணில், ஒரு ஒற்றைப் பொட்டலத்தை உருவாக்கத் தேவையான ஆற்றலே ($h\nu$) மிக அதிகமாக இருப்பதால், அடுப்பில் உள்ள அணுக்களால் அந்தப் பெரிய பொட்டலத்தை உருவாக்கவே முடிவதில்லை! அதனால் கதிர்வீச்சு நின்றுவிடுகிறது!

1900 டிசம்பர் 14 அன்று பிளாங்க் இந்த உரையை ஆற்றிய நாள், நவீன **'குவாண்டம் இயற்பியலின் பிறந்தநாளாக'** வரலாற்றில் நிலைத்துவிட்டது.

தொடக்கத்தில் பிளாங்க் இதை ஒரு தற்காலிகக் கணிதத் தந்திரம் என்றே நினைத்தார். ஆனால் ஐந்து ஆண்டுகள் கழித்து ஐன்ஸ்டீன் இந்த ஆற்றல் பொட்டலங்களே 'ஃபோட்டான்கள்' (ஒளித் துகள்கள்) என்று நிரூபித்தார்; நீல்ஸ் போர் இதை வைத்து அணுவின் அமைப்பை விளக்கினார்.

இன்று உலகில் உள்ள ஒவ்வொரு கம்ப்யூட்டர் மைக்ரோசிப், லேசர், செல்போன் திரை மற்றும் சோலார் பேனல் அனைத்தும் மேக்ஸ் பிளாங்க் சூடான அடுப்பில் கண்டறிந்த குவாண்டம் பொட்டலங்களின் தத்துவத்திலேயே இயங்குகின்றன!`,
    stem_vocabulary: [
      {
        term: "குவாண்டம் (Quantum / பன்மை: Quanta)",
        definition: "இயற்பியலில் ஆற்றல் அல்லது கோண உந்தம் பரிமாறப்படும் பிரிக்க முடியாத மிகச்சிறிய தனித்தனி அலகு அல்லது பொட்டலம்.",
        context: "பிளாங்க் ஆற்றல் தொடர்ச்சியாக இல்லாமல் குவாண்டா வடிவில் உமிழப்படுகிறது என்றார்."
      },
      {
        term: "பிளாங்க் மாறிலி ($h$)",
        definition: "ஒரு ஃபோட்டானின் ஆற்றலுக்கும் அதன் அதிர்வெண்ணுக்கும் உள்ள விகிதத்தைக் குறிக்கும் அடிப்படை இயற்கை மாறிலி ($6.626 \times 10^{-34} \text{ J}\cdot\text{s}$).",
        context: "பிளாங்க் மாறிலியே குவாண்டம் உலகத்திற்கும் நமது பெரிய உலகத்திற்கும் இடையிலான பாலமாகும்."
      },
      {
        term: "புற ஊதாக் கேடு (Ultraviolet Catastrophe)",
        definition: "அதிர்வெண் கூடும்போது கரும்பொருள் எல்லையற்ற ஆற்றலை வெளிப்படுத்தும் என்று மரபு இயற்பியல் தவறாகக் கணித்த முரண்பாடு.",
        context: "பிளாங்கின் குவாண்டம் கொள்கை இந்த முரண்பாட்டைத் தகர்த்தெறிந்தது."
      },
      {
        term: "கரும்பொருள் கதிர்வீச்சு (Black-Body Radiation)",
        definition: "தன் மீது விழும் அனைத்துக் கதிர்வீச்சுகளையும் உறிஞ்சி, வெப்பச் சமநிலையில் குறிப்பிட்ட நிறமாலையில் ஒளியை உமிழும் இலட்சியப் பொருளின் கதிர்வீச்சு.",
        context: "பிளாங்க் கரும்பொருள் அடுப்பின் கதிர்வீச்சு நிறமாலையை விளக்கியதன் மூலமே குவாண்டம் கொள்கை பிறந்தது."
      }
    ],
    blooms_questions: {
      remember: "ஆற்றலின் ஒரு குவாண்டத்திற்கும் அதன் அதிர்வெண்ணுக்கும் உள்ள தொடர்பைக் காட்டும் பிளாங்கின் சமன்பாடு எது?",
      analyze: "மரபு இயற்பியல் சொன்னபடி ஆற்றல் தொடர்ச்சியானது என்றால் அடுப்புகள் ஏன் எல்லையற்ற புற ஊதாக் கதிர்களை வீச வேண்டும்?",
      apply_create: "டிஜிட்டல் கேமராக்களின் சென்சார்கள் ஒளியின் தனித்தனி ஃபோட்டான்களை உறிஞ்சிப் படங்களை உருவாக்குகின்றன. பிளாங்கின் குவாண்டம் கொள்கை இல்லாவிட்டால் நவீன ஸ்மார்ட்போன் கேமராக்கள் எவ்வாறு செயல்பட முடியாது?"
    },
    quiz: [
      {
        question: "ஆற்றல் உமிழப்படும் விதம் குறித்து மேக்ஸ் பிளாங்க் முன்வைத்த புரட்சிகரக் கருத்து என்ன?",
        options: [
          "ஆற்றல் எப்போதும் எல்லையற்ற தொடர் நதியாகப் பாய்கிறது",
          "ஆற்றல் 'குவாண்டா' எனப்படும் தனித்தனிப் பொட்டலங்களாக மட்டுமே உமிழப்படுகிறது",
          "ஆற்றல் உலோகங்களில் மட்டுமே பாயும்",
          "ஆற்றலுக்கு அதிர்வெண்ணோடு தொடர்பே இல்லை"
        ],
        correct_index: 1,
        explanation: "ஆற்றல் தொடர்ச்சியாக இல்லாமல், அதிர்வெண்ணுக்கு நேர்விகிதத்தில் உள்ள தனித்தனி பொட்டலங்களாகவே பரிமாறப்படுகிறது ($E = h\nu$).",
        hint: "தொடர் நீரோடை அல்லாமல் தனித்தனி நாணயங்கள் போன்ற பொட்டலங்கள்."
      },
      {
        question: "மரபு இயற்பியலால் தீர்க்க முடியாமல் போன 'புற ஊதாக் கேடு' என்பது எதனைப் பற்றியது?",
        options: [
          "சூரிய ஒளியால் தோலில் ஏற்படும் தீக்காயம்",
          "சூடான பொருள் அதிக அதிர்வெண்களில் எல்லையற்ற ஆற்றலை வெளிப்படுத்தும் என்ற தவறான கணக்கீடு",
          "முப்பட்டகம் உடைந்து போதல்",
          "பகலில் நட்சத்திரங்கள் மறைவது"
        ],
        correct_index: 1,
        explanation: "மரபு சமன்பாடுகள் குறுகிய அலைநீளங்களில் எல்லையற்ற ஆற்றல் வெளிப்படும் என்று கணித்தன; பிளாங்க் அதைத் தீர்த்தார்.",
        hint: "அடுப்பு எல்லையற்ற ஆற்றலை வீச வேண்டும் என்ற முரண்பாடு."
      },
      {
        question: "குவாண்டம் இயற்பியலின் பிறந்தநாளாகக் கொண்டாடப்படும் வரலாற்று நாள் எது?",
        options: [
          "ஜூலை 4, 1776",
          "டிசம்பர் 14, 1900",
          "ஜனவரி 1, 1950",
          "அக்டோபர் 24, 1929"
        ],
        correct_index: 1,
        explanation: "1900 டிசம்பர் 14 அன்று பிளாங்க் தனது கட்டுரையை வாசித்த நாளே குவாண்டம் யுகத்தின் தொடக்கமாகும்.",
        hint: "பத்தொன்பதாம் நூற்றாண்டின் கடைசி ஆண்டான 1900-ன் குளிர்காலம்."
      }
    ],
    moral_reflection: {
      value: "பழைய நம்பிக்கைகளை உடைக்கும் அறிவியல் உண்மை",
      insight: "பிளாங்க் பழைய இயற்பியலை நேசித்த போதிலும், ஆய்வக உண்மைகள் அதை மறுத்தபோது, தன் சொந்த விருப்பங்களை ஒதுக்கிவிட்டு உண்மையைத் துணிவோடு ஏற்றுக்கொண்டார்.",
      family_prompt: "நமக்கு மிகவும் பிடித்த ஒரு கருத்து தவறானது என்று உண்மைகள் மெய்ப்பிக்கும்போது, நாம் அதை ஒப்புக்கொள்ளத் தயாராக இருக்கிறோமா?"
    },
    cultural_context: "ஜெர்மனியின் மிக உயரிய அறிவியல் ஆராய்ச்சி நிறுவனமான 'மேக்ஸ் பிளாங்க் நிறுவனம்' (Max Planck Society) இவரது பெயரிலேயே இயங்கி பல நோபல் மேதைகளை உருவாக்கியுள்ளது.",
    audio_url: ""
  },
  {
    id: "science-58-einstein-miracle-year-light",
    title: "ஆல்பர்ட் ஐன்ஸ்டீன்: 1905 அற்புத ஆண்டும் ஒளிக் கற்றைச் சவாரியும்",
    slug: "science-58-einstein-miracle-year-light",
    collection: "science-stories",
    collection_name: "அறிவியல் & கண்டுபிடிப்புகள்",
    reading_time: "5 min",
    age_group: "சிறுவர்கள் மற்றும் குடும்பத்தினர்",
    difficulty: "மேம்பட்ட நிலை",
    source_book: "Annalen der Physik (அற்புத ஆண்டு ஆய்வுக் கட்டுரைகள், 1905)",
    source_author: "ஆல்பர்ட் ஐன்ஸ்டீன் (Albert Einstein)",
    source_year: "1905 CE",
    source_chapter: "ஒளியின் உற்பத்தி மற்றும் மாற்றம் குறித்த ஒரு பார்வை; நகரும் பொருட்களின் மின்னியக்கவியல்",
    source_edition: "Annalen der Physik (1905); இயற்பியல் நோபல் பரிசு (1921)",
    authenticity_note: "சுவிட்சர்லாந்தின் பெர்ன் காப்புரிமை அலுவலகத்தில் மூன்றாம் நிலை எழுத்தராகப் பணியாற்றிய 26 வயது ஐன்ஸ்டீன், 1905-ல் ஒரே ஆண்டில் வெளியிட்ட நான்கு உலகப் புகழ்பெற்ற கட்டுரைகள்: ஃபோட்டான், பிரவுனியன் இயக்கம், சிறப்புச் சார்பியல் மற்றும் E = mc².",
    summary: "சுவிஸ் காப்புரிமை அலுவலகத்தில் ஒரு சாதாரண எழுத்தராக அமர்ந்து, ஒரே ஆண்டில் நான்கு புரட்சிகரக் கட்டுரைகளை எழுதி அணுக்களின் இருப்பை நிறுவி, நேரமும் காலமும் பார்வையாளரைப் பொறுத்து மாறும் சிறப்புச் சார்பியலையும், E = mc² விதியையும் உலகுக்குத் தந்தார் ஆல்பர்ட் ஐன்ஸ்டீன்.",
    content: `1905-ஆம் ஆண்டின் வசந்த காலம். சுவிட்சர்லாந்தின் அமைதியான பெர்ன் நகரில் உள்ள மத்திய காப்புரிமை அலுவலகத்தில், இருபத்தாறு வயதான ஓர் எழுத்தர் தனது மர மேசையில் அமர்ந்திருந்தார். அவரது அதிகாரப்பூர்வ பதவி: 'தொழில்நுட்ப உதவியாளர், மூன்றாம் நிலை'. பல்கலைக்கழகத்தில் விரிவுரையாளர் வேலை கிடைக்காமல், கல்லூரிப் பேராசிரியர்களால் சுமாரான மாணவன் என்று புறக்கணிக்கப்பட்டு, சரளைக் கல் பிரிப்பான்களுக்கும் ஏசி டைனமோக்களுக்கும் காப்புரிமை விண்ணப்பங்களைச் சரிபார்க்கும் வேலையை எட்டு மணி நேரம் செய்து வந்தார்.

அவர் பெயர் ஆல்பர்ட் ஐன்ஸ்டீன்.

மேலதிகாரி பார்க்காத வேளையில், ஐன்ஸ்டீன் காப்புரிமை வரைபடங்களை மேசை டிராயரில் தள்ளிவிட்டு, காகிதத் தாள்களை எடுத்துத் தனது 'மனக் கற்பனைப் பரிசோதனைகளில்' (Gedankenexperimente) மூழ்குவார்.

பதினாறு வயதுச் சிறுவனாக முனிச் நகரில் இருந்த காலத்திலிருந்தே அவரது மனதை ஒரு குழந்தைத் தனமான கேள்வி துரத்திக் கொண்டிருந்தது:
**"நான் ஒரு ஒளிக் கற்றையின் மீதேறி சவாரி செய்தால் உலகம் எப்படித் தெரியும்?"**

நியூட்டனின் இயக்க விதிகளின்படி, 60 கி.மீ வேகத்தில் செல்லும் ஒரு ரயிலின் பக்கவாட்டில் நீங்களும் அதே வேகத்தில் ஓடினால், ரயில் உங்களுக்கு அசையாமல் பக்கத்திலேயே நிற்பது போலத் தோன்றும். அப்படியானால், வினாடிக்கு மூன்று லட்சம் கிலோமீட்டர் வேகத்தில் பாயும் ஒளிக் கற்றையை நீங்களும் அதே வேகத்தில் துரத்திச் சென்றால், அந்த ஒளி அலை தண்ணீரில் உறைந்த பனிக்கட்டி போல விண்வெளியில் அசையாமல் நிற்க வேண்டுமா?

மேக்ஸ்வெல்லின் மின்காந்தச் சமன்பாடுகள், "அது சாத்தியமே இல்லை; நீங்கள் எவ்வளவு வேகமாக ஓடினாலும் ஒளி உங்கள் கண்களுக்கு அதே மூன்று லட்சம் கிலோமீட்டர் வேகத்தில்தான் தெரியும்!" என்று முரண்பட்டன.

1905-ஆம் ஆண்டில்—அறிவியல் வரலாற்றில் நியூட்டனின் 1666-க்குப் பின் **'அற்புத ஆண்டு' (Annus Mirabilis)** என்று போற்றப்படும் அந்த ஒற்றை ஆண்டில்—அந்த அறியப்படாத காப்புரிமை எழுத்தாளர் நான்கு உலகப் புகழ்பெற்ற கட்டுரைகளை வெளியிட்டார்:

1. **மார்ச் 1905: ஒளிமின் விளைவு (The Photoelectric Effect)**
பிளாங்கின் குவாண்டம் கருத்தை ஒளிக்கு விரிவுபடுத்தினார்: ஒளி வெறும் அலை அல்ல; அது **'ஃபோட்டான்கள்' (Photons)** எனப்படும் ஆற்றல் குண்டுகளின் பிரவாகம்! ஒரு ஃபோட்டான் உலோகத் தகட்டின் மீது மோதும்போது, பில்லியர்ட்ஸ் பந்து போல எலக்ட்ரானைத் தெறிக்க விடுகிறது! இந்தக் கட்டுரைக்கே 1921-ல் ஐன்ஸ்டீனுக்கு இயற்பியல் நோபல் பரிசு வழங்கப்பட்டது.

2. **மே 1905: பிரவுனியன் இயக்கம் (Brownian Motion)**
கண்ணுக்குத் தெரியாத நீர் மூலக்கூறுகள் மகரந்தத் துகள்களின் மீது இடைவிடாமல் மோதுவதால்தான் அவை தாறுமாறாக ஆடுகின்றன என்பதைக் கணித ரீதியாகக் கணக்கிட்டார். **அணுக்களும் மூலக்கூறுகளும் உண்மையில் இருக்கின்றன** என்பதை உலகிற்கு முதன்முதலில் நிரூபித்த கணிதம் இதுவே!

3. **ஜூன் 1905: சிறப்புச் சார்பியல் கோட்பாடு (Special Relativity)**
ஒளியின் வேகம் மாறாது என்பதை நிலைநிறுத்த, ஐன்ஸ்டீன் காலத்தையும் வெளியையும் தலைகீழாக மாற்றினார்:
- விண்வெளியில் ஒளியின் வேகம் ($c \approx 3,00,000\text{ km/s}$) எப்போதுமே மாறாதது!
- இதற்காக, அதிவேகமாகப் பயணிக்கும் பொருட்களுக்கு **நேரம் மெதுவாக நகர்கிறது (Time Dilation)**; நீளம் சுருங்குகிறது!
ரயில் மேடையில் நிற்பவருக்கு ஒரே நேரத்தில் நடப்பதாகத் தோன்றும் இரண்டு மின்னல்கள், வேகமாக ஓடும் ரயிலில் இருப்பவருக்கு ஒரே நேரத்தில் தெரிவதில்லை! காலம் என்பது பார்ப்பவரைப் பொறுத்த ஒரு சார்பு நிலையே!

4. **செப்டம்பர் 1905: நிறை-ஆற்றல் சமன்பாடு ($E = mc^2$)**
தனது நான்காவது கட்டுரையில் அறிவியலின் மிக உன்னதமான சமன்பாட்டை வகுத்தார்:
$$E = mc^2$$
பொருளின் நிறையும் (Mass) ஆற்றலும் (Energy) ஒன்றே! மிகச் சிறிய திணிவுக்குள் அளப்பரிய பிரபஞ்ச ஆற்றல் ஒளிந்திருக்கிறது. ஒரு சிறிய திராட்சைப் பழத்தில் உள்ள அத்தனை அணுக்களையும் ஆற்றலாக மாற்றினால், ஒரு பெருநகரத்தையே பல நாட்களுக்கு இயக்கலாம்!

எந்தப் பெரிய ஆய்வுக்கூடமும் இன்றி, எந்தப் பேராசிரியரின் துணையும் இன்றி, தனது மனைவி மிலேவா மாரிக் மற்றும் நண்பர் மைக்கேல் பெஸ்ஸோ ஆகியோருடன் விவாதித்து, ஒரு சாதாரண எழுத்தாளர் பிரபஞ்சத்தையே புதிதாக மாற்றி எழுதினார்!`,
    stem_vocabulary: [
      {
        term: "சிறப்புச் சார்பியல் (Special Relativity)",
        definition: "ஒளியின் மாறாத வேகம் மற்றும் சார்பியல் கொள்கையின் அடிப்படையில் காலம் மற்றும் வெளியின் தொடர்பை விளக்கும் இயற்பியல் கோட்பாடு.",
        context: "வேகமாக நகரும் பொருட்களுக்குக் காலம் மெதுவாகச் செல்லும் என்பதை ஐன்ஸ்டீன் நிறுவினார்."
      },
      {
        term: "ஃபோட்டான் (Photon)",
        definition: "ஒளி அல்லது மின்காந்தக் கதிர்வீச்சின் அடிப்படை ஆற்றல் துகள் அல்லது குவாண்டம்.",
        context: "ஐன்ஸ்டீன் ஒளி ஃபோட்டான்களாகப் பாய்வதைக் காட்டி ஒளிமின் விளைவை விளக்கினார்."
      },
      {
        term: "நிறை-ஆற்றல் சமன்பாடு ($E = mc^2$)",
        definition: "நிறையும் ஆற்றலும் ஒன்றே என்பதைக் காட்டும் விதி; நிறை ஒளியின் வேகத்தின் வர்க்கத்தால் பெருக்கப்படும் போது ஆற்றலாக மாறுகிறது.",
        context: "விண்மீன்கள் எரிவதற்கும் அணுசக்திக்கும் $E = mc^2$ சமன்பாடே அடிப்படையாகும்."
      },
      {
        term: "கால நீட்டிப்பு (Time Dilation)",
        definition: "ஒளி வேகத்திற்கு அருகில் நகரும் கடிகாரங்கள் நிலையாக இருக்கும் கடிகாரங்களை விட மெதுவாக ஓடும் நிகழ்வு.",
        context: "விண்வெளியில் அதிவேகமாகப் பயணிக்கும் விண்கலங்களில் உள்ள கடிகாரங்கள் பூமியை விட மெதுவாக ஓடும்."
      }
    ],
    blooms_questions: {
      remember: "நிறையையும் ஆற்றலையும் இணைக்கும் ஐன்ஸ்டீனின் உலகப் புகழ்பெற்ற சமன்பாடு எது?",
      analyze: "ஒளியின் வேகம் அனைவருக்கும் மாறாமல் இருக்க வேண்டுமானால், காலம் ஏன் வெவ்வேறு நபர்களுக்கு வெவ்வேறு வேகத்தில் ஓட வேண்டும்?",
      apply_create: "பூமியைச் சுற்றும் ஜி.பி.எஸ் (GPS) செயற்கைக்கோள்களில் உள்ள அணுகடிகாரங்கள் ஐன்ஸ்டீனின் கால நீட்டிப்பிற்கு ஏற்ப தினமும் சரிசெய்யப்படுகின்றன. இதனைச் செய்யாவிட்டால் கூகுள் மேப்ஸ் காட்டும் வழி தவறாகிவிடுவது ஏன்?"
    },
    quiz: [
      {
        question: "1905-ல் நான்கு புரட்சிகரக் கட்டுரைகளை எழுதியபோது ஐன்ஸ்டீன் என்ன வேலை செய்து கொண்டிருந்தார்?",
        options: [
          "கேம்பிரிட்ஜ் பல்கலைக்கழகத்தின் இயற்பியல் பேராசிரியர்",
          "சுவிஸ் காப்புரிமை அலுவலகத்தில் மூன்றாம் நிலை எழுத்தர்",
          "ராயல் வானியல் ஆய்வகத்தின் தலைவர்",
          "மேரி கியூரியின் உதவியாளர்"
        ],
        correct_index: 1,
        explanation: "ஐன்ஸ்டீன் சுவிட்சர்லாந்தின் பெர்ன் நகரில் காப்புரிமை அலுவலகத்தில் எளிய எழுத்தராகப் பணியாற்றினார்.",
        hint: "சுவிட்சர்லாந்தில் காப்புரிமை விண்ணப்பங்களைச் சரிபார்க்கும் வேலை."
      },
      {
        question: "ஐன்ஸ்டீனுக்கு 1921-ஆம் ஆண்டின் இயற்பியல் நோபல் பரிசு எந்தக் கண்டுபிடிப்பிற்காக வழங்கப்பட்டது?",
        options: [
          "சிறப்புச் சார்பியல் கோட்பாட்டிற்காக",
          "$E = mc^2$ சமன்பாட்டிற்காக",
          "ஒளிமின் விளைவு விதியைக் கண்டறிந்ததற்காக (ஃபோட்டான் கொள்கை)",
          "கருந்துளைகளுக்காக"
        ],
        correct_index: 2,
        explanation: "ஒளி ஆற்றல் குண்டுகளாகப் பாய்ந்து எலக்ட்ரான்களை வெளியேற்றும் ஒளிமின் விளைவு விதியை விளக்கியதற்காகவே நோபல் வழங்கப்பட்டது.",
        hint: "ஒளி எலக்ட்ரான்களைத் தட்டும் விளைவு."
      },
      {
        question: "$E = mc^2$ சமன்பாட்டில் 'c' என்ற எழுத்து எதனைக் குறிக்கிறது?",
        options: [
          "பூமியின் சுற்றளவு",
          "வெற்றிடத்தில் ஒளியின் வேகம் (வினாடிக்கு 3 லட்சம் கி.மீ)",
          "எலக்ட்ரானின் மின்சுமை",
          "நீரின் வெப்பக் கொள்ளளவு"
        ],
        correct_index: 1,
        explanation: "இலத்தீன் சொல்லான 'செலரிடாஸ்' (Celeritas - வேகம்) என்பதிலிருந்து வந்த 'c' ஒளியின் வேகத்தைக் குறிக்கிறது.",
        hint: "பிரபஞ்சத்தின் எல்லை வேகமான ஒளியின் வேகம்."
      }
    ],
    moral_reflection: {
      value: "எல்லைகளைத் தாண்டும் தூய கற்பனை வளம்",
      insight: "'அறிவை விட கற்பனைத் திறனே மேலானது; அறிவு என்பது நாம் அறிந்ததோடு முடிந்துவிடுகிறது, ஆனால் கற்பனையோ ஒட்டுமொத்தப் பிரபஞ்சத்தையே தழுவி நிற்கிறது' என்றார் ஐன்ஸ்டீன்.",
      family_prompt: "நீங்கள் ஒரு மரத்தடியில் அமர்ந்து விசித்திரமான 'ஏன், எதற்கு, எப்படி' என்ற கேள்விகளைச் சிந்திக்கும்போது, அது ஐன்ஸ்டீனின் கற்பனைப் பரிசோதனையைப் போல புதிய சிந்தனைகளை எவ்வாறு தூண்டுகிறது?"
    },
    cultural_context: "ஐன்ஸ்டீன் வயலின் வாசிப்பதில் அதீத விருப்பம் கொண்டவர்; கடினமான இயற்பியல் கணக்குகளுக்கு விடை தெரியாமல் திணறும் போதெல்லாம் மொசார்ட் மற்றும் பாக் இசையை வாசித்து அமைதி பெறுவார்.",
    audio_url: ""
  },
  {
    id: "science-59-eddington-1919-eclipse-gravity",
    title: "ஆர்தர் எடிங்டன்: சூரிய கிரகணமும் வளைந்த நட்சத்திர ஒளியும்",
    slug: "science-59-eddington-1919-eclipse-gravity",
    collection: "science-stories",
    collection_name: "அறிவியல் & கண்டுபிடிப்புகள்",
    reading_time: "5 min",
    age_group: "சிறுவர்கள் மற்றும் குடும்பத்தினர்",
    difficulty: "மேம்பட்ட நிலை",
    source_book: "A Determination of the Deflection of Light by the Sun's Gravitational Field (1920)",
    source_author: "சர் பிராங்க் டைசன், ஆர்தர் ஸ்டான்லி எடிங்டன் & சார்லஸ் டேவிட்சன்",
    source_year: "1919–1920 CE",
    source_chapter: "லண்டன் ராயல் சொசைட்டியின் தத்துவப் பரிவர்த்தனைகள் (Vol. 220, 1920)",
    source_edition: "ராயல் சொசைட்டி மற்றும் ராயல் வானியல் கழகத்தின் கூட்டுக் கூட்டம் (நவம்பர் 6, 1919)",
    authenticity_note: "1919 மே 29 அன்று மேற்கு ஆப்பிரிக்காவின் பிரின்சிப் தீவில் நிகழ்ந்த முழு சூரிய கிரகணத்தின் போது எடுக்கப்பட்ட புகைப்படக் கண்ணாடித் தகடுகள். சூரியனின் ஈர்ப்பு விசை நட்சத்திர ஒளியை 1.75 ஆர்க்-செகண்ட் வளைக்கிறது என்ற ஐன்ஸ்டீனின் பொதுச் சார்பியல் கணிப்பை உறுதிசெய்த நேரடி ஆவணம்.",
    summary: "முதலாம் உலகப் போரின் கசப்புகளுக்கு மத்தியில், மேற்கு ஆப்பிரிக்காவின் தீவுக்குச் சென்று முழு சூரிய கிரகணத்தில் நட்சத்திர ஒளியைப் படம் பிடித்து, சூரியனின் ஈர்ப்பு விசை விண்வெளியையே வளைக்கிறது என்பதை மெய்ப்பித்து ஐன்ஸ்டீனை உலகப் புகழடையச் செய்தார் ஆர்தர் எடிங்டன்.",
    content: `1919-ஆம் ஆண்டு மே மாதம். மேற்கு ஆப்பிரிக்காவின் நிலநடுக்கோட்டுப் பகுதியில் உள்ள பிரின்சிப் (Príncipe) என்ற எரிமலைத் தீவில், கொக்கோ மரங்களின் மீது வெப்பமண்டல மழை கொட்டித் தீர்த்துக் கொண்டிருந்தது. கூடாரத்திற்குள் முப்பத்தாறு வயதான இளம் ஆங்கிலேய வானியலாளர் ஆர்தர் எடிங்டன் பதற்றத்தோடு குறுக்கும் நெடுக்குமாக நடந்து கொண்டிருந்தார்.

இன்னும் இரண்டு மணி நேரத்தில் அங்கே ஒரு முழு சூரிய கிரகணம் நிகழவிருக்கிறது. தொலைநோக்கிகள் தயார், புகைப்படக் கண்ணாடித் தகடுகள் தயார்; ஆனால் வானமோ அடர்ந்த கரிய மேகங்களால் மூடப்பட்டுக் கிடந்தது!

எடிங்டன் புறப்பட்டிருப்பது மனித சிந்தனை வரலாற்றிலேயே மிகத் துணிச்சலான ஒரு சோதனையை நிகழ்த்த!

நான்கு ஆண்டுகளுக்கு முன்பு, முதலாம் உலகப் போர் உச்சத்தில் இருந்தபோது, பெர்லின் நகரில் ஆல்பர்ட் ஐன்ஸ்டீன் தனது **'பொதுச் சார்பியல் கோட்பாட்டை' (General Relativity)** வெளியிட்டிருந்தார்.

இருநூற்று முப்பது ஆண்டுகளாக ஐசக் நியூட்டனின் ஈர்ப்பு விதியே உலகை ஆண்டது: ஈர்ப்பு என்பது வெற்றிடத்தில் இரு நிறைகளுக்கு இடையே செயல்படும் ஒரு கண்ணுக்குத் தெரியாத இழுவிசை.

ஆனால் ஐன்ஸ்டீன், நியூட்டன் சொன்னது தவறு என்றார்! விண்வெளியும் காலமும் தட்டையான மேடை அல்ல; அவை நான்காம் பரிமாணத்தில் ஒன்றிணைந்த ஒரு மென்மையான ரப்பர் விரிப்பு (Spacetime Fabric) போன்றது! ஒரு கனமான பந்து ரப்பர் விரிப்பின் மீது அமரும்போது விரிப்பு குழிந்து வளைவது போல, சூரியனின் பெரும் திணிவு தன்னைச் சுற்றியுள்ள விண்வெளியையே வளைக்கிறது!

அதைவிடப் பேரதிர்ச்சி: சூரியனின் அந்த வளைந்த விண்வெளிப் பாதையைக் கடந்து வரும் தொலைதூர நட்சத்திர ஒளி நேராகப் பாயாமல், **1.75 ஆர்க்-செகண்ட் (ஒரு பாகையின் மிகச் சிறிய பின்னம்)** வளைந்து செல்ல வேண்டும் என்று ஐன்ஸ்டீன் கணித்தார்!

பகலில் சூரியனின் பேரொளியில் நட்சத்திரங்களைப் பார்க்க முடியாது. சூரியனை நிலவு முழுமையாக மறைக்கும் **முழு சூரிய கிரகணத்தின்போது மட்டுமே** சூரியனின் ஓரத்திலிருக்கும் நட்சத்திரங்களைப் படம் பிடிக்க முடியும்!

1919 மே 29 அன்று மதியம் 1:30 மணி. நிலவின் நிழல் பிரின்சிப் தீவை இருளுக்குள் ஆழ்த்தியது. பறவைகள் பாடுவதை நிறுத்தின; விசித்திரமான இருள் சூழ்ந்தது.

மேகங்களின் ஊடே, நிலவின் கருப்பு வட்டத்தைச் சுற்றி வெள்ளிக் கிரீடம் போலச் சூரியனின் ஒளிவட்டம் மின்னியது!

எடிங்டன் இயந்திரம் போலச் செயல்பட்டார். புகைப்படக் கண்ணாடித் தகடுகளை ஒவ்வொன்றாக மாற்றிப் படம்பிடித்தார். பதினாறு தகடுகளில் பதினான்கு தகடுகள் மேகங்களால் பாழாகின. ஆனால் கடைசி இரண்டு தகடுகளில், மேகக் கூட்டத்திற்கு இடையே ஹயாடிஸ் (Hyades) விண்மீன் கூட்டத்தின் புள்ளிகள் வைரங்கள் போலப் பதிவாகியிருந்தன!

கேம்பிரிட்ஜ் திரும்பிய எடிங்டன், அந்தத் தகடுகளை பூதக்கண்ணாடி அளவீட்டு இயந்திரத்தின் கீழ் வைத்தார். சூரியன் இல்லாத சாதாரண இரவில் அதே நட்சத்திரங்களை எடுத்த பழைய புகைப்படங்களோடு ஒப்பிட்டுப் பார்த்தார்.

சூரியனின் ஈர்ப்பு விசை அந்த விண்மீன்களின் ஒளியை வளைத்திருந்தால், நட்சத்திரங்கள் சற்று வெளிப்புறமாகத் தள்ளித் தெரிய வேண்டும்!

எடிங்டன் அளந்தார்: **1.61 ஆர்க்-செகண்ட் விலகல்!** அது ஐன்ஸ்டீனின் 1.75 ஆர்க்-செகண்ட் கணிப்போடு துல்லியமாகப் பொருந்தியது!

1919 நவம்பர் 6 அன்று லண்டன் ராயல் சொசைட்டியின் மாபெரும் மண்டபத்தில், ஐசக் நியூட்டனின் ஆயில் பெயிண்டிங் உருவப்படத்திற்கு அடியில் விஞ்ஞானிகள் கூடினர். ராயல் வானியலாளர் பிராங்க் டைசன் அதிகாரப்பூர்வமாக அறிவித்தார்:
"ஐன்ஸ்டீனின் கணிப்பு சந்தேகத்திற்கு இடமின்றி மெய்ப்பிக்கப்பட்டுள்ளது! ஒளி வளைகிறது; விண்வெளி வளைந்துள்ளது!"

அடுத்த நாள் காலையில் லண்டன் *டைம்ஸ்* நாளிதழ் உலகையே அதிர வைத்த தலைப்புச் செய்தியை வெளியிட்டது:
**"அறிவியலில் மாபெரும் புரட்சி: புதிய பிரபஞ்சக் கோட்பாடு! நியூட்டனின் விதிகள் தகர்ந்தன! விண்வெளி வளைந்தது!"**

ஒரே இரவில் ஐன்ஸ்டீன் உலகப் புகழ்பெற்ற மேதையானார்.

அதைவிட உன்னதமான மனிதநேயம் என்னவென்றால்—முதலாம் உலகப் போரில் பிரிட்டனும் ஜெர்மனியும் ஒருவரையொருவர் கொன்று தீர்த்த இரத்தக் களரி முடிந்த உடனேயே, ஒரு பிரிட்டிஷ் அறிஞர் தன் எதிரி நாடான ஜெர்மனியின் அறிஞரின் கோட்பாட்டை உலகிற்கு மெய்ப்பித்துக் காட்டி, அறிவியலுக்கு எந்த எல்லையோ பகையோ கிடையாது என்பதை உலகிற்கு நிரூபித்தார்!`,
    stem_vocabulary: [
      {
        term: "பொதுச் சார்பியல் (General Relativity)",
        definition: "ஈர்ப்பு விசை என்பது ஒரு விசை அல்ல, அது நிறைகளினால் வெளி-காலப் பின்னலில் (Spacetime) ஏற்படும் வளைவே என்று விளக்கும் ஐன்ஸ்டீனின் கோட்பாடு.",
        context: "சூரியனின் ஈர்ப்பால் விண்வெளி வளைந்து ஒளிக்கதிர் வளைவதை எடிங்டன் படம் பிடித்தார்."
      },
      {
        term: "வெளி-காலம் / காலவெளி (Spacetime)",
        definition: "மூன்று வெளிப் பரிமாணங்களும் ஒரு காலப் பரிமாணமும் இணைந்து உருவான நான்கு பரிமாண பிரபஞ்சக் கட்டமைப்பு.",
        context: "சூரியனின் பிரம்மாண்டமான நிறை தன்னைச் சுற்றியுள்ள காலவெளியை வளைக்கிறது."
      },
      {
        term: "ஈர்ப்பு வில்லை விளைவு (Gravitational Lensing)",
        definition: "ஒரு பெரும் திணிவுள்ள விண்வெளிப் பொருளின் ஈர்ப்புப் புலம், தனக்குப் பின்னால் உள்ள விண்மீன்களின் ஒளியை வளைத்துக் காட்டும் நிகழ்வு.",
        context: "1919 சூரிய கிரகணமே மனிதன் கண்டறிந்த முதல் ஈர்ப்பு வில்லை சோதனையாகும்."
      },
      {
        term: "ஆர்க்-செகண்ட் (Arcsecond)",
        definition: "ஒரு பாகையில் 3600-ல் ஒரு பங்கைக் குறிக்கும் மிக நுண்ணிய கோண அளவீடு.",
        context: "ஐன்ஸ்டீன் நட்சத்திர ஒளி 1.75 ஆர்க்-செகண்ட் வளையும் என்று துல்லியமாகக் கணித்திருந்தார்."
      }
    ],
    blooms_questions: {
      remember: "1919 முழு சூரிய கிரகணத்தை எடிங்டன் எந்த ஆப்பிரிக்கத் தீவில் இருந்து படம்பிடித்தார்?",
      analyze: "விண்மீன்களின் ஒளி வளைவதை உறுதிசெய்ய ஏன் முழு சூரிய கிரகணம் இன்றியமையாததாக இருந்தது?",
      apply_create: "இன்று ஜேம்ஸ் வெப் விண்வெளித் தொலைநோக்கி, பிரபஞ்சத்தின் ஆழத்தில் உள்ள பழங்கால விண்மீன் திரள்களைப் பார்க்க இந்த ஈர்ப்பு வில்லை விளைவையே (Gravitational Lensing) பயன்படுத்துகிறது. எடிங்டனின் கண்டுபிடிப்பு நவீன வானியலை எவ்வாறு மாற்றியது?"
    },
    quiz: [
      {
        question: "சூரியனின் அருகே நட்சத்திரங்களின் ஒளிக்கதிர்கள் வளைவதற்குக் காரணம் என்னவென்று ஐன்ஸ்டீன் விளக்கினார்?",
        options: [
          "சூரியனின் வெப்பத்தால் ஒளி உருகுகிறது",
          "சூரியனின் பெருந்திணிவு காலவெளியை வளைக்கிறது; ஒளி அந்த வளைந்த பாதையில் பயணிக்கிறது",
          "சூரியக் காற்று ஒளியைத் தள்ளுகிறது",
          "நிலவு கண்ணாடியாகச் செயல்படுகிறது"
        ],
        correct_index: 1,
        explanation: "நிறை காலவெளியை வளைக்கிறது; வளைந்த காலவெளியில் பயணிக்கும் ஒளி வளைந்த பாதையையே தேர்ந்தெடுக்கும்.",
        hint: "சூரியன் தன்னைச் சுற்றியுள்ள விண்வெளியையே வளைக்கிறது."
      },
      {
        question: "கிரகணத் தகடுகளில் பதிவான நட்சத்திரங்களின் விலகலை எடிங்டன் எவ்வாறு கணக்கிட்டார்?",
        options: [
          "கடற்கரையில் நின்றுகொண்டு அளவுகோலால் அளந்தார்",
          "சூரியன் இல்லாத சாதாரண இரவில் அதே நட்சத்திரங்களை எடுத்த பழைய படங்களோடு நுணுக்கமாக ஒப்பிட்டுப் பார்த்தார்",
          "ஊர்மக்களை நட்சத்திரங்களை எண்ணச் சொன்னார்",
          "ஞாபகத்திலிருந்து வரைந்தார்"
        ],
        correct_index: 1,
        explanation: "சூரியன் இல்லாத சாதாரண இரவில் எடுத்த விண்மீன் படங்களோடு கிரகணப் படங்களை ஒப்பிட்டுப் புள்ளிகள் விலகியிருப்பதை அளந்தார்.",
        hint: "இரவு நேர சாதாரண விண்மீன் படங்களோடு ஒப்பிட்டுப் பார்த்தார்."
      },
      {
        question: "முதலாம் உலகப் போருக்குப் பின் இந்த ஆய்வு உலகிற்கு உணர்த்திய உன்னத மனிதநேயச் செய்தி எது?",
        options: [
          "பிரிட்டன் போரில் வென்றுவிட்டது என்ற செய்தி",
          "ஒரு பிரிட்டிஷ் வானியலாளர் ஜெர்மானிய அறிஞரின் விதியை மெய்ப்பித்து, அறிவியல் எல்லைகளையும் போரையும் கடந்தது என்பதை உணர்த்தியது",
          "வானியலை ரகசியமாக வைக்க வேண்டும் என்ற செய்தி",
          "அறிவியலாளர்கள் ஆயுதம் மட்டுமே செய்ய வேண்டும் என்ற செய்தி"
        ],
        correct_index: 1,
        explanation: "போர் பகையையும் கடந்து சர்வதேச அறிவியல் உண்மை மனிதர்களை இணைக்கிறது என்பதை எடிங்டன் நிரூபித்தார்.",
        hint: "பிரிட்டிஷ் விஞ்ஞானி ஜெர்மானிய விஞ்ஞானியின் கொள்கையை நிரூபித்தார்."
      }
    ],
    moral_reflection: {
      value: "போரையும் பகையையும் வெல்லும் சர்வதேச அறிவியல் உண்மை",
      insight: "நாடுகளுக்கு இடையே போர் மூண்டு ரத்தம் சிந்திய போதும், உண்மைக்கான தேடலில் பிரிட்டிஷ் மற்றும் ஜெர்மானிய அறிஞர்கள் கைகோர்த்து மனிதகுலத்தின் அறிவை உயர்த்தினர்.",
      family_prompt: "நம்மைச் சுற்றி மனிதர்கள் சண்டையிட்டுப் பிரிந்து கிடக்கும்போது, நாம் பொதுவான நன்மைகளுக்காகவும் உண்மைகளுக்காகவும் எவ்வாறு கைகோர்க்கலாம்?"
    },
    cultural_context: "எடிங்டனிடம் ஒருவர், 'உலகிலேயே ஐன்ஸ்டீனின் கோட்பாட்டைப் புரிந்துகொண்ட மூன்றே பேரில் நீங்களும் ஒருவர் அல்லவா?' என்று கேட்டபோது, எடிங்டன் நகைச்சுவையாக, 'அந்த மூன்றாவது நபர் யார் என்றுதான் நான் யோசித்துக் கொண்டிருக்கிறேன்!' என்றார்.",
    audio_url: ""
  },
  {
    id: "science-60-rutherford-gold-foil-nucleus",
    title: "எர்னஸ்ட் ரூதர்போர்டு: காகிதத்தில் பட்டுத் திரும்பிய பீரங்கிக் குண்டு",
    slug: "science-60-rutherford-gold-foil-nucleus",
    collection: "science-stories",
    collection_name: "அறிவியல் & கண்டுபிடிப்புகள்",
    reading_time: "5 min",
    age_group: "சிறுவர்கள் மற்றும் குடும்பத்தினர்",
    difficulty: "நடுத்தரம்",
    source_book: "The Scattering of $\\alpha$ and $\\beta$ Particles by Matter (1911)",
    source_author: "எர்னஸ்ட் ரூதர்போர்டு (Ernest Rutherford, FRS)",
    source_year: "1909–1911 CE",
    source_chapter: "Philosophical Magazine (Vol. 21, pp. 669–688, 1911)",
    source_edition: "மான்செஸ்டர் இலக்கிய மற்றும் தத்துவ சங்கம் (1911); ராயல் சொசைட்டி",
    authenticity_note: "மான்செஸ்டர் பல்கலைக்கழக இயற்பியல் ஆய்வகத்தில் ஹான்ஸ் கெய்கர் மற்றும் எர்னஸ்ட் மார்ஸ்டன் ஆகியோர் ரூதர்போர்டின் வழிகாட்டுதலில் நிகழ்த்திய ஆய்வு. தங்கத் தகட்டின் மீது பாய்ந்த 8,000 ஆல்ஃபா துகள்களில் ஒன்று பின்னோக்கித் தெறித்ததைக் கொண்டு அணுக்கருவைக் கண்டறிந்த வரலாற்று ஆவணம்.",
    summary: "சோப்புக் குமிழியை விட மெல்லிய தங்கத் தகட்டின் மீது கனமான ஆல்ஃபா துகள்களை ஏவியபோது, எட்டாயிரத்தில் ஒரு துகள் நேர் எதிரே பின்னோக்கித் தெறித்துத் திரும்புவதைக் கண்டு அணுவின் மையத்தில் 'அணுக்கரு' இருப்பதை உலகிற்கு வெளிப்படுத்தினார் எர்னஸ்ட் ரூதர்போர்டு.",
    content: `1909-ஆம் ஆண்டின் வசந்த காலம். இங்கிலாந்தின் மான்செஸ்டர் பல்கலைக்கழக இயற்பியல் ஆய்வகத்தின் அடித்தளத்திற்குள், நியூசிலாந்தில் பிறந்த எர்னஸ்ட் ரூதர்போர்டு கம்பீரமாக நடந்து வந்தார். அகன்ற தோள்களும், அடர்ந்த மீசையும், இடிமுழக்கம் போன்ற குரலும் கொண்ட ரூதர்போர்டு, நோபல் பரிசு பெற்ற விஞ்ஞானியைப் போலன்றி ஒரு கிராமத்து விவசாயியைப் போலத் தோற்றமளிப்பார்.

அந்தக் காலத்தில், அணுவின் அமைப்பைப் பற்றி உலகம் நம்பிய மாதிரி: **'பிளம் புட்டிங் மாதிரி' (Plum Pudding Model)**. எலக்ட்ரானைக் கண்டுபிடித்த ஜெ.ஜெ. தாம்சன் இதனை முன்மொழிந்திருந்தார். ஒரு கிறிஸ்துமஸ் கேக்கில் உலர்திராட்சைகள் பதிந்திருப்பது போல, அணு என்பது நேர்மின் சுமை கொண்ட ஒரு மென்மையான கூழ்ம உருண்டை; அதற்குள் எதிர்மின் எலக்ட்ரான்கள் ஆங்காங்கே புதைந்து கிடக்கின்றன என்று நினைத்தனர்.

நேர்மின் சுமை அணு முழுவதும் பரவிக் கிடப்பதால், அதற்கு வலிமையான மின்புலம் எதுவும் இருக்க முடியாது என்று கருதினர்.

ரூதர்போர்டு அணுவின் உள்ளே என்னதான் இருக்கிறது என்பதைத் துளைத்துப் பார்க்க முடிவெடுத்தார். அதற்காக இயற்கையின் அதிவேக நுண்ணிய பீரங்கிக் குண்டுகளான **'ஆல்ஃபா துகள்களை' (Alpha Particles - கதிரியக்க ரேடியத்திலிருந்து சீறிப் பாயும் ஹீலியம் உட்கருக்கள்)** ஆயுதமாக எடுத்தார்.

ரூதர்போர்டு தனது உதவியாளர் ஹான்ஸ் கெய்கர் மற்றும் இருபது வயது மாணவர் எர்னஸ்ட் மார்ஸ்டன் ஆகிய இருவரிடம் இந்தச் சோதனையை ஒப்படைத்தார்.

ஒரு கனத்த ஈயப் பெட்டிக்குள் ரேடியத்தை வைத்து, சிறிய துளை வழியே அதிவேக ஆல்ஃபா துகள்களைப் பீறிடச் செய்தனர். அந்தத் துகள்களின் பாதையில் வெறும் 400 அணுக்கள் மட்டுமே தடிமனே கொண்ட—சோப்புக் குமிழியை விட மெலிதான—**தங்கத் தகட்டை** வைத்தனர்!

தகட்டைச் சுற்றி **துத்தநாக சல்பைடு (Zinc Sulfide)** பூசப்பட்ட திரையை அமைத்தனர். ஆல்ஃபா துகள் அந்தத் திரையில் மோதும் போதெல்லாம், நுண்ணிய பச்சை நிற ஒளிப்பொறி (Scintillation) மின்னும்.

கெய்கரும் மார்ஸ்டனும் அரை மணி நேரம் இருட்டில் அமர்ந்து கண்களைப் பழக்கிக்கொண்டு, பூதக்கண்ணாடியில் அந்த மின்னல்களை மணிக்கணக்கில் எண்ணினர்.

எதிர்பார்த்தபடியே, 99.9 சதவீத ஆல்ஃபா துகள்கள் ஒரு பனிமூட்டத்தைக் கிழித்துக் கொண்டு பாயும் துப்பாக்கிக் குண்டுகளைப் போல, தங்கத் தகட்டை நேராகத் துளைத்துக் கொண்டு மறுபுறம் சென்றன!

அப்போது ரூதர்போர்டு ஒரு விசித்திரமான ஆலோசனையைக் கூறினார்:
"ஏதேனும் துகள்கள் பெரிய கோணத்தில் திரும்புமா என்று பாருங்கள்... ஏதேனும் துகள் பின்னோக்கித் தெறிக்கிறதா என்று பாருங்கள்!"

மார்ஸ்டன் மீண்டும் இருட்டறைக்குச் சென்று திரையைத் தங்கத் தகட்டின் முன்பக்கமாக மாற்றி வைத்தார்.

டிக்... டிக்...

மார்ஸ்டன் தன் கண்களையே நம்ப முடியவில்லை! எட்டாயிரம் துகள்கள் நேராகப் பாயும்போது, **ஒரே ஒரு துகள் மட்டும்** ஏதோ ஒரு கடினமான சுவரில் முட்டியது போல, 90 பாகைக்கும் அதிகமான கோணத்தில் பின்னோக்கித் தெறித்துத் துப்பாக்கியை நோக்கியே திரும்பியது!

மார்ஸ்டன் ஓடிவந்து ரூதர்போர்டிடம் சொன்னார்.

ரூதர்போர்டு இடி விழுந்தது போல் திகைத்துப் போனார். பல ஆண்டுகளுக்குப் பிறகு அவர் தனது நினைவுக் குறிப்பில் எழுதினார்:
**"என் வாழ்நாளில் நிகழ்ந்த மிக நம்ப முடியாத சம்பவம் இதுவே! ஒரு மெல்லிய டிஷ்யூ பேப்பரை நோக்கி நீங்கள் 15 அங்குல பீரங்கிக் குண்டைச் சுட, அந்தக் குண்டு காகிதத்தில் பட்டுத் திரும்பி வந்து உங்கள் மார்பிலேயே தாக்கியதைப் போல இது எனக்கு வியப்பளித்தது!"**

சோப்புக் குமிழியை விட மெல்லிய தங்கத் தகடு, வினாடிக்கு பத்தாயிரம் மைல் வேகத்தில் பாய்ந்து வந்த ஆல்ஃபா குண்டைத் திருப்பி அடித்தது எப்படி?

ரூதர்போர்டு இரண்டு ஆண்டுகள் கணக்கிட்டார். அதற்கு ஒரே ஒரு சாத்தியமான விளக்கம் மட்டுமே இருக்க முடியும்:
அணுவின் நேர்மின் சுமை கேக் போலப் பரவிக்கிடக்கவில்லை!
அணுவின் ஒட்டுமொத்த நேர்மின் சுமையும், அதன் 99.95 சதவீத நிறையும் அணுவின் மையத்தில் ஒரு மிக மிக நுண்ணிய மையப் புள்ளியில் கொட்டிக் குவிக்கப்பட்டிருக்கிறது! அந்த மையக் கோட்டையை ரூதர்போர்டு **'அணுக்கரு' (Nucleus)** என்று அழைத்தார்!

அணு என்பது திடமானதே அல்ல! அது **99.999999999% வெறும் வெற்றிடமே!**

அணுவை ஒரு பிரம்மாண்டமான கால்பந்து மைதானத்தின் அளவுக்குப் பெரிதாக்கினால், அதன் மையத்தில் வைக்கப்பட்டுள்ள ஒரு சிறிய கோலிக்குண்டுதான் அணுக்கரு! மைதானத்தின் கடைசி வரிசை இருக்கைகளில் சுற்றும் கொசுக்களைப் போன்றவையே எலக்ட்ரான்கள்!

1911 மே மாதம் ரூதர்போர்டு தனது சூரியக் குடும்பத்தைப் போன்ற அணு மாதிரியை வெளியிட்டார்.

அணுவின் மையக் கோட்டையை உடைத்துத் திறந்து, நவீன அணுக்கரு இயற்பியல் யுகத்தை உலகுக்குத் தொடங்கி வைத்தார் நியூசிலாந்தின் எளிய விவசாய மகனான எர்னஸ்ட் ரூதர்போர்டு!`,
    stem_vocabulary: [
      {
        term: "அணுக்கரு (Atomic Nucleus)",
        definition: "அணுவின் மையத்தில் அமைந்துள்ள, புரோட்டான்களையும் நியூட்ரான்களையும் கொண்ட, அணுவின் ஒட்டுமொத்த நிறையும் குவிந்துள்ள மிக நுண்ணிய நேர்மின் பகுதி.",
        context: "ரூதர்போர்டு தங்கத் தகடு சோதனையின் மூலம் அணுக்கருவைக் கண்டறிந்தார்."
      },
      {
        term: "ஆல்ஃபா துகள் (Alpha Particle)",
        definition: "இரண்டு புரோட்டான்களும் இரண்டு நியூட்ரான்களும் கொண்ட ஹீலியம் உட்கரு; கதிரியக்கச் சிதைவின் போது அதிவேகத்தில் வெளிப்படும் நேர்மின் துகள்.",
        context: "ரூதர்போர்டு ஆல்ஃபா துகள்களைக் கொண்டு அணுவைத் துளைத்து ஆராய்ந்தார்."
      },
      {
        term: "ரூதர்போர்டு சிதறல் (Rutherford Scattering)",
        definition: "நேர்மின் சுமை கொண்ட ஆல்ஃபா துகள்கள் அணுக்கருவின் கூலும் விலக்கு விசையால் சிதறடிக்கப்படும் இயற்பியல் நிகழ்வு.",
        context: "பின்னோக்கிச் சிதறிய துகள்களைக் கொண்டு அணுக்கருவின் அளவை ரூதர்போர்டு கணக்கிட்டார்."
      },
      {
        term: "ஒளிப்பொறி / சிண்டிலேஷன் (Scintillation)",
        definition: "கதிரியக்கத் துகள்கள் துத்தநாக சல்பைடு போன்ற ஒளிரும் திரையில் மோதும் போது உண்டாகும் நுண்ணிய ஒளிக்கீற்று.",
        context: "கெய்கரும் மார்ஸ்டனும் இருண்ட அறையில் இந்த ஒளிப்பொறிகளை எண்ணினர்."
      }
    ],
    blooms_questions: {
      remember: "ஆல்ஃபா துகள்கள் பின்னோக்கித் தெறித்த வியப்பை ரூதர்போர்டு எந்தப் போர்க்கள உவமையால் விவரித்தார்?",
      analyze: "பெரும்பாலான ஆல்ஃபா துகள்கள் தகட்டை நேராகத் துளைத்துச் சென்றதிலிருந்து அணுவைப் பற்றி என்ன உண்மை தெரியவந்தது?",
      apply_create: "நமது உடலும் நம்மைச் சுற்றியுள்ள மேசைகளும் அணுக்களால் ஆனவை என்றால், அணுக்கள் 99.999999999% வெற்றிடம் என்றால், மேசையின் மீது வைக்கும் நமது கை உள்ளே இறங்காமல் தடுப்பது எது? (குறிப்பு: எலக்ட்ரான்களுக்கு இடையிலான மின் விலக்கு விசை)."
    },
    quiz: [
      {
        question: "1911-ல் தங்கத் தகடு சோதனையின் மூலம் ரூதர்போர்டு கண்டறிந்த புரட்சிகரமான உண்மை எது?",
        options: [
          "அணுவை உடைக்கவே முடியாது",
          "அணு பெரும்பாலும் வெறும் வெற்றிடமே; அதன் மையத்தில் மிக அடர்த்தியான 'அணுக்கரு' உள்ளது",
          "தங்கம் மின்சாரத்தைக் கடத்தாது",
          "எலக்ட்ரான்களுக்கு எடையே இல்லை"
        ],
        correct_index: 1,
        explanation: "அணு முழுவதும் வெற்றிடம் என்றும், அதன் மையத்தில் அடர்த்தியான நேர்மின் அணுக்கரு உள்ளது என்றும் நிறுவினார்.",
        hint: "அணுவின் மையத்தில் ஒரு கனமான உட்கரு இருக்கிறது."
      },
      {
        question: "தங்கத் தகட்டின் மீது பாய்ந்த எத்தனை துகள்களில் ஒரு துகள் பின்னோக்கித் தெறித்தது?",
        options: [
          "இரண்டில் ஒரு துகள்",
          "தோராயமாக 8,000 துகள்களில் ஒன்று",
          "அனைத்துத் துகள்களும்",
          "ஒரு துகள் கூடத் திரும்பவில்லை"
        ],
        correct_index: 1,
        explanation: "எட்டாயிரத்தில் ஒரு துகள் மட்டுமே மிக நுண்ணிய அணுக்கருவை நேருக்கு நேர் மோதிப் பின்னோக்கித் தெறித்தது.",
        hint: "பல ஆயிரங்களில் ஒரே ஒரு துகள் மட்டுமே."
      },
      {
        question: "ரூதர்போர்டின் சோதனை பொய்யாக்கிய பழைய அணு மாதிரி எது?",
        options: [
          "குவாண்டம் மேக மாதிரி",
          "ஜெ.ஜெ. தாம்சனின் 'பிளம் புட்டிங்' மாதிரி",
          "இழை தத்துவ மாதிரி",
          "சூரிய நெபுலா மாதிரி"
        ],
        correct_index: 1,
        explanation: "தாம்சனின் புட்டிங் மாடலில் நேர்மின் சுமை பரவிக் கிடந்ததால் ஆல்ஃபா துகளைத் திருப்பி அடிக்க முடியாது.",
        hint: "கிறிஸ்துமஸ் கேக் பெயரிலான மாதிரி."
      }
    ],
    moral_reflection: {
      value: "எதிர்பாராத விபத்துகளைக் கூர்ந்து கவனிக்கும் நுண்ணறிவு",
      insight: "எல்லோரும் நேராகச் சென்ற துகள்களை மட்டுமே கவனித்தபோது, பின்னோக்கித் தெறித்த அந்த ஒற்றைத் துகளையே ரூதர்போர்டு உலகை மாற்றும் சாவியாக மாற்றினார்.",
      family_prompt: "நீங்கள் ஒரு வேலையைச் செய்யும்போது எதிர்பாராத ஒரு சிறிய மாற்றம் நடந்தால், அதை ஒரு பிழை என்று ஒதுக்கிவிடுகிறீர்களா அல்லது அதன் காரணத்தை ஆராய்கிறீர்களா?"
    },
    cultural_context: "ரூதர்போர்டின் படம் நியூசிலாந்தின் 100 டாலர் பணத்தாளில் பொறிக்கப்பட்டுள்ளது; அவர் லண்டன் வெஸ்ட்மின்ஸ்டர் அபேயில் சர் ஐசக் நியூட்டன் மற்றும் லார்ட் கெல்வின் ஆகியோருக்கு அருகில் நல்லடக்கம் செய்யப்பட்டுள்ளார்.",
    audio_url: ""
  }
];
