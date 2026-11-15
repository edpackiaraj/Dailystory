// Stage D2: Stories 91 to 100 (Computing, Genetics, Biotechnology & Modern Astrophysics)
export const stageD2EnStories = [
  {
    id: "science-91-alan-turing-enigma-universal-machine",
    title: "Alan Turing: The Universal Paper Tape and the Enigma Machine",
    slug: "science-91-alan-turing-enigma-universal-machine",
    collection: "science-stories",
    collection_name: "100 Authentic Science Stories",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "On Computable Numbers, with an Application to the Entscheidungsproblem (Proceedings of the London Mathematical Society)",
    source_author: "Alan M. Turing",
    source_year: "1936",
    source_chapter: "Proceedings of the London Mathematical Society, Series 2, Vol. 42, pp. 230–265",
    source_edition: "C. F. Hodgson & Son, London",
    authenticity_note: "Based on Alan Turing's foundational 1936 paper inventing the Universal Turing Machine and his wartime codebreaking work at Bletchley Park designing the electro-mechanical Bombe to crack the Nazi Enigma cipher.",
    summary: "In 1936, 24-year-old mathematician Alan Turing imagined a simple machine reading and writing symbols on an endless strip of paper tape—inventing the theoretical blueprint for all modern general-purpose computers. At Bletchley Park during WWII, his electromechanical 'Bombe' cracked the Nazi Enigma ciphers, shortening the war by years.",
    content: "In 1936, while resting in a green meadow near Cambridge after a long run, 24-year-old English mathematician Alan Turing grappled with a deep problem in mathematical logic posed by David Hilbert: Could there ever exist a definite mechanical procedure to decide whether any given mathematical statement is provable?\n\nTo answer it, Turing did not build physical gears. Instead, he conducted a magnificent thought experiment. He imagined a machine consisting of an infinitely long paper tape divided into squares, and a scanner head that could move left or right, read a symbol, erase it, and write a new one based on a table of internal rules.\n\nThis abstract device, now immortalized as the **Turing Machine**, was revolutionary. Before Turing, 'computers' were people who calculated tables, and machines were built for a single fixed purpose (like adding cash receipts). Turing proved that a single 'Universal' machine could perform *any conceivable computation* simply by loading different symbolic instructions onto its tape! This was the invention of software—the conceptual birth of the modern computer.\n\nWhen World War II erupted in 1939, Turing was recruited to the top-secret intelligence headquarters at Bletchley Park. Nazi military forces were coordinating blitzkrieg attacks using the Enigma cipher machine, which scrambled letters with revolving electrical rotors, producing 158 quintillion possible key settings every single day!\n\nHuman decoders could never test such numbers before the code was changed at midnight. Turing designed the **Bombe**—a towering electro-mechanical machine with dozens of whirring drums that simulated multiple Enigmas simultaneously, exploiting logical contradictions to eliminate millions of false settings in seconds.\n\nTuring's brilliance broke the naval Enigma ciphers, providing Allied convoys with vital intelligence that shortened World War II by an estimated two to four years, saving an estimated fourteen million lives. Alan Turing laid the twin pillars of our modern digital world: theoretical computer science and artificial intelligence.",
    stem_vocabulary: [
      {
            "term": "Turing Machine",
            "definition": "A mathematical model of computation defining an abstract machine manipulating symbols on a strip of tape according to a table of rules."
      },
      {
            "term": "Universal Computation",
            "definition": "The ability of a single computing machine to simulate any other computation machine simply by changing its stored software instructions."
      },
      {
            "term": "Cryptography",
            "definition": "The art and science of writing or solving codes to secure communication."
      },
      {
            "term": "Enigma Machine",
            "definition": "An electromechanical rotor cipher machine used by Nazi Germany for protecting military communications."
      }
],
    blooms_questions: [
      { level: "Remember", question: "What primary observation or data led the scientist to their discovery?" },
      { level: "Understand", question: "How does this discovery fundamentally change our understanding of physical reality?" },
      { level: "Apply", question: "How can this scientific principle be applied to modern technology or medicine?" },
      { level: "Analyze", question: "What evidence convinced skeptical peers to overturn the older paradigm?" },
      { level: "Evaluate", question: "Why is perseverance in the face of widespread institutional skepticism essential for scientific progress?" }
    ],
    quiz: [
      { question: "What was the critical discovery detailed in this historical account?", options: ["A revolutionary breakthrough in empirical science", "A mathematical error", "An accidental myth", "A discarded rumor"], answer: 0 }
    ],
    moral_reflection: "True scientific inquiry requires relentless curiosity, meticulous evidence gathering, and the intellectual bravery to follow data wherever it leads, regardless of dogma.",
    cultural_context: "World History of Science / Empirical Discovery, Computing & Genetics",
    audio_url: ""
  },
  {
    id: "science-92-claude-shannon-bit-information",
    title: "Claude Shannon: The Bit and the Secret of Juggling Numbers",
    slug: "science-92-claude-shannon-bit-information",
    collection: "science-stories",
    collection_name: "100 Authentic Science Stories",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "A Mathematical Theory of Communication (Bell System Technical Journal)",
    source_author: "Claude E. Shannon",
    source_year: "1948",
    source_chapter: "The Bell System Technical Journal, Vol. 27, pp. 379–423, 623–656",
    source_edition: "American Telephone and Telegraph Company, New York",
    authenticity_note: "Based on Claude Shannon's landmark 1948 paper 'A Mathematical Theory of Communication', which created the field of Information Theory, introduced the term 'bit', and quantified digital entropy.",
    summary: "Riding a unicycle through the corridors of Bell Labs while juggling balls, eccentric genius Claude Shannon solved the riddle of communication in 1948. He proved that all information—text, sound, images, or thought—can be broken into fundamental binary units called 'bits' (0 and 1) and transmitted without noise across any channel.",
    content: "In the 1940s, engineers at Bell Telephone Laboratories struggled with a universal headache: noise. Whenever human voices traveled down copper telephone cables or radio waves bounced across oceans, static hiss and distortion crept into the signal. The longer the wire, the worse the fuzz. Engineers assumed that sending a completely clean message across infinite distances was fundamentally impossible.\n\nWalking the halls of Bell Labs was Claude Shannon—a playful, quiet mathematician who famously rode a unicycle down hallways while juggling four balls, built chess-playing machines, and created a mechanical mouse named Theseus that navigated mazes.\n\nShannon stepped back and asked a question no one had thought to ask: *What is information?*\n\nBefore Shannon, people measured messages by letters, words, or seconds of audio. In 1948, Shannon published a 77-page masterpiece entitled *A Mathematical Theory of Communication*. He argued that meaning did not matter to the transmission channel; information was fundamentally about *reducing uncertainty*.\n\nIf a coin is tossed, before it lands there is uncertainty; once it lands, you learn one fact: heads or tails. Shannon formalized this basic binary decision (0 or 1, true or false) as the fundamental atom of information, adopting the contraction coined by John Tukey: the **bit** (binary digit).\n\nWhether a Shakespearean sonnet, a Beethoven symphony, or a color photograph, Shannon proved that *all* information could be translated into streams of zeros and ones!\n\nEven more miraculously, Shannon proved his famous Noisy-Channel Coding Theorem: as long as the rate of information transmission is below a mathematical threshold called the **channel capacity** ($C$), you can add clever redundancy—error-correcting codes—such that the receiver can reconstruct the original message with *zero error*, no matter how noisy the telephone wire or deep-space channel!\n\nShannon's brilliant equations created the digital bedrock for everything from Wi-Fi and cell phones to satellite streaming and the internet.",
    stem_vocabulary: [
      {
            "term": "Information Entropy",
            "definition": "A mathematical measure of the average uncertainty or unpredictability in a set of messages."
      },
      {
            "term": "Bit (Binary Digit)",
            "definition": "The basic unit of information in computing and digital communications, representing a 0 or 1."
      },
      {
            "term": "Channel Capacity",
            "definition": "The tight upper bound on the rate at which information can be reliably transmitted over a communications channel."
      },
      {
            "term": "Error-Correcting Code",
            "definition": "An algorithm for expressing a sequence of numbers such that any errors introduced in transit can be detected and corrected."
      }
],
    blooms_questions: [
      { level: "Remember", question: "What primary observation or data led the scientist to their discovery?" },
      { level: "Understand", question: "How does this discovery fundamentally change our understanding of physical reality?" },
      { level: "Apply", question: "How can this scientific principle be applied to modern technology or medicine?" },
      { level: "Analyze", question: "What evidence convinced skeptical peers to overturn the older paradigm?" },
      { level: "Evaluate", question: "Why is perseverance in the face of widespread institutional skepticism essential for scientific progress?" }
    ],
    quiz: [
      { question: "What was the critical discovery detailed in this historical account?", options: ["A revolutionary breakthrough in empirical science", "A mathematical error", "An accidental myth", "A discarded rumor"], answer: 0 }
    ],
    moral_reflection: "True scientific inquiry requires relentless curiosity, meticulous evidence gathering, and the intellectual bravery to follow data wherever it leads, regardless of dogma.",
    cultural_context: "World History of Science / Empirical Discovery, Computing & Genetics",
    audio_url: ""
  },
  {
    id: "science-93-von-neumann-stored-program",
    title: "John von Neumann: Memory and Logic Inside One Mind",
    slug: "science-93-von-neumann-stored-program",
    collection: "science-stories",
    collection_name: "100 Authentic Science Stories",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "First Draft of a Report on the EDVAC",
    source_author: "John von Neumann",
    source_year: "1945",
    source_chapter: "Moore School of Electrical Engineering, University of Pennsylvania Contract W-670-ORD-4926",
    source_edition: "Philadelphia, PA (Distributed June 30, 1945)",
    authenticity_note: "Directly derived from John von Neumann's legendary 1945 101-page typewritten draft defining the stored-program computer architecture (CPU, ALU, control unit, memory, and I/O).",
    summary: "In 1945, witnessing rooms filled with tangles of patch cables required to rewire early calculators like ENIAC, mathematical prodigy John von Neumann introduced the 'stored-program' concept: storing data and software program instructions together in the exact same electronic memory, creating the architecture of every modern computer.",
    content: "In the early 1940s, the world's first giant electronic computer, the ENIAC (Electronic Numerical Integrator and Computer), was built at the University of Pennsylvania. Weighing 30 tons, using 18,000 vacuum tubes, and filling a room the size of a gymnasium, ENIAC was blindingly fast at calculation.\n\nHowever, ENIAC suffered from a fatal weakness: it was fundamentally inflexible. To change the calculation from artillery trajectory tables to weather modeling, a team of women operators had to spend days crawling behind metal racks, unplugging hundreds of heavy black patch cables and flipping thousands of switches! Programming was physical wiring.\n\nIn 1944, world-renowned Hungarian-American mathematician John von Neumann visited the lab. Possessing an intellect so lightning-fast that colleagues joked he was an alien studying humanity, von Neumann immediately saw the fundamental flaw.\n\nWhy treat the computer's instructions as physical plugboard wiring while the numbers being calculated were stored electronically?\n\nVon Neumann sat down on a train journey and drafted a 101-page manuscript entitled *First Draft of a Report on the EDVAC*, distributed on June 30, 1945.\n\nHe proposed a radical architecture:\n1. **Central Arithmetic Unit (ALU)**: to crunch math.\n2. **Central Control Unit**: to direct traffic and interpret operations.\n3. **Memory**: a shared space to store *both* numbers and the coded instructions that process them!\n4. **Input and Output**: to communicate with the world.\n\nBy storing the *program itself* as binary numbers directly inside high-speed memory alongside the data, a computer could modify its own instructions, switch from playing chess to calculating orbits in a microsecond, and run complex conditional logic ('if this, then that').\n\nKnown forever as the **Von Neumann Architecture**, this foundational design is the blueprint that powers every smartphone, laptop, supercomputer, and microchip on Earth today.",
    stem_vocabulary: [
      {
            "term": "Von Neumann Architecture",
            "definition": "A theoretical computer design architecture consisting of a processing unit, a control unit, memory storing data and instructions, and input/output mechanisms."
      },
      {
            "term": "Stored-Program Computer",
            "definition": "A computer that keeps its programmed instructions as well as its data in read-write, random-access memory (RAM)."
      },
      {
            "term": "Central Processing Unit (CPU)",
            "definition": "The primary component of a computer that executes instructions comprised in computer programs."
      },
      {
            "term": "Arithmetic Logic Unit (ALU)",
            "definition": "A digital electronic circuit that performs arithmetic and bitwise logic operations on integer binary numbers."
      }
],
    blooms_questions: [
      { level: "Remember", question: "What primary observation or data led the scientist to their discovery?" },
      { level: "Understand", question: "How does this discovery fundamentally change our understanding of physical reality?" },
      { level: "Apply", question: "How can this scientific principle be applied to modern technology or medicine?" },
      { level: "Analyze", question: "What evidence convinced skeptical peers to overturn the older paradigm?" },
      { level: "Evaluate", question: "Why is perseverance in the face of widespread institutional skepticism essential for scientific progress?" }
    ],
    quiz: [
      { question: "What was the critical discovery detailed in this historical account?", options: ["A revolutionary breakthrough in empirical science", "A mathematical error", "An accidental myth", "A discarded rumor"], answer: 0 }
    ],
    moral_reflection: "True scientific inquiry requires relentless curiosity, meticulous evidence gathering, and the intellectual bravery to follow data wherever it leads, regardless of dogma.",
    cultural_context: "World History of Science / Empirical Discovery, Computing & Genetics",
    audio_url: ""
  },
  {
    id: "science-94-rosalind-franklin-photo-51",
    title: "Rosalind Franklin: The Golden Cross of Photo 51",
    slug: "science-94-rosalind-franklin-photo-51",
    collection: "science-stories",
    collection_name: "100 Authentic Science Stories",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "Molecular Configuration in Sodium Thymonucleate (Nature, Vol. 171)",
    source_author: "Rosalind E. Franklin & Raymond G. Gosling",
    source_year: "1953",
    source_chapter: "Nature 171, 740–741 (25 April 1953)",
    source_edition: "Macmillan Journals, London",
    authenticity_note: "Directly derived from Rosalind Franklin and Raymond Gosling's May 1952 X-ray diffraction photograph 'Photo 51' of the B-form of DNA, demonstrating helical dimensions, phosphate backbone placement, and symmetry.",
    summary: "Working with rigorous precision in a basement lab at King's College London in May 1952, physical chemist Rosalind Franklin exposed a fine fiber of hydrated DNA to X-rays for 100 hours. The resulting image, 'Photo 51', revealed a striking dark 'X' pattern—providing the critical empirical proof that DNA is a double helix with its phosphate backbone on the outside.",
    content: "In 1951, 31-year-old English physical chemist Rosalind Franklin arrived at King's College London. Having mastered the demanding technique of X-ray crystallography while studying carbon and coal structures in Paris, Franklin brought unmatched technical precision and experimental rigor to the study of biological fibers.\n\nHer target was the mystery molecule of life: deoxyribonucleic acid (DNA). Scientists knew DNA carried hereditary traits, but its physical three-dimensional architecture remained a total enigma.\n\nFranklin discovered that DNA existed in two distinct states: a dry crystalline 'A-form' and a wet, hydrated 'B-form'. Recognizing that DNA inside living cells is surrounded by water, she meticulously engineered a special micro-camera with a sealed chamber, controlling humidity with hydrogen gas bubbled through saturated salt solutions.\n\nUsing a fine glass needle, Franklin suspended a strand of DNA no thicker than a single human hair. In May 1952, she and her research student Raymond Gosling exposed this hydrated DNA fiber to a narrow beam of X-rays for over 100 continuous hours.\n\nWhen Franklin developed the photographic film in her darkroom, she stared at a masterpiece of empirical science: **Photo 51**.\n\nAcross the center of the image stretched a bold, unmistakable dark cross—the letter 'X'. In the mathematics of Fourier transforms and diffraction optics, a clear 'X' could mean only one thing: a **helix**.\n\nEven more critically, the missing reflections on the fourth layer line proved that DNA had two strands intertwined—a double helix. Furthermore, Franklin's precise thermodynamic calculations showed that the hydrophobic nitrogenous bases must be tucked safely inside, while the hydrophilic phosphate-sugar backbone faced outward to interact with water.\n\nWithout her knowledge or permission, this precious image was shown to James Watson and Francis Crick in early 1953 by Maurice Wilkins. The moment Watson saw Photo 51, \"his mouth fell open and his pulse began to race.\" It provided the missing geometric measurements that unlocked their legendary double helix model.\n\nRosalind Franklin died tragically of ovarian cancer in 1958 at just 37 years old. Today, her brilliance, technical mastery, and pivotal contribution to cracking the secret of life are celebrated worldwide.",
    stem_vocabulary: [
      {
            "term": "X-ray Crystallography",
            "definition": "An experimental technique determining the atomic and molecular structure of a crystal by causing a beam of incident X-rays to diffract into specific directions."
      },
      {
            "term": "Photo 51",
            "definition": "An X-ray diffraction image of the paracrystalline gel of B-form DNA taken by Rosalind Franklin and Raymond Gosling in May 1952."
      },
      {
            "term": "Double Helix",
            "definition": "The structure formed by double-stranded molecules of nucleic acids such as DNA."
      },
      {
            "term": "Phosphate Backbone",
            "definition": "The alternating chain of phosphate and sugar groups forming the structural exterior of the DNA strands."
      }
],
    blooms_questions: [
      { level: "Remember", question: "What primary observation or data led the scientist to their discovery?" },
      { level: "Understand", question: "How does this discovery fundamentally change our understanding of physical reality?" },
      { level: "Apply", question: "How can this scientific principle be applied to modern technology or medicine?" },
      { level: "Analyze", question: "What evidence convinced skeptical peers to overturn the older paradigm?" },
      { level: "Evaluate", question: "Why is perseverance in the face of widespread institutional skepticism essential for scientific progress?" }
    ],
    quiz: [
      { question: "What was the critical discovery detailed in this historical account?", options: ["A revolutionary breakthrough in empirical science", "A mathematical error", "An accidental myth", "A discarded rumor"], answer: 0 }
    ],
    moral_reflection: "True scientific inquiry requires relentless curiosity, meticulous evidence gathering, and the intellectual bravery to follow data wherever it leads, regardless of dogma.",
    cultural_context: "World History of Science / Empirical Discovery, Computing & Genetics",
    audio_url: ""
  },
  {
    id: "science-95-watson-crick-double-helix",
    title: "Watson & Crick: The Spiral Staircase of Life",
    slug: "science-95-watson-crick-double-helix",
    collection: "science-stories",
    collection_name: "100 Authentic Science Stories",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid (Nature, Vol. 171)",
    source_author: "J. D. Watson & F. H. C. Crick",
    source_year: "1953",
    source_chapter: "Nature 171, 737–738 (25 April 1953)",
    source_edition: "Macmillan Journals, London",
    authenticity_note: "Based on James Watson and Francis Crick's historic April 25, 1953 Nature paper proposing the double-helical model of DNA with complementary base pairs (Adenine-Thymine, Guanine-Cytosine).",
    summary: "On February 28, 1953, inside the Cavendish Laboratory at Cambridge, James Watson and Francis Crick fit cardboard cutouts of nucleotides together like puzzle pieces. Discovering that Adenine bonds only with Thymine, and Guanine with Cytosine, they burst into The Eagle pub announcing: 'We have found the secret of life!'",
    content: "In late 1952, at the Cavendish Laboratory in Cambridge, England, 24-year-old American ornithologist-turned-geneticist James Watson and 36-year-old British physicist Francis Crick were racing against the world's most famous chemist, Linus Pauling, to solve the structure of DNA.\n\nPauling had mistakenly published a model proposing a triple helix with the phosphate groups in the center. Watson and Crick knew that chemically, negatively charged phosphates crammed together in the core would violently repel each other. The spine had to be on the outside!\n\nArmed with Rosalind Franklin's critical X-ray diffraction measurements—which gave the helix a width of 2.0 nanometers and a repeat period of 3.4 nanometers—Watson sat at a desk cutting out scale shapes of the four nitrogenous bases from cardboard: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C).\n\nOn the morning of February 28, 1953, Watson shifted the cardboard pieces across the table. Suddenly, he noticed that an Adenine-Thymine pair held together by two hydrogen bonds formed the *exact same physical width and geometric shape* as a Guanine-Cytosine pair held by hydrogen bonds!\n\nCrick leaped from his chair. If A always paired with T, and G always paired with C, then the two strands were complementary mirror images of one another! If one strand had the sequence AGTC, the other strand automatically read TCAG.\n\nAt lunchtime, Crick burst through the door of The Eagle pub on Benet Street and famously proclaimed to the stunned patrons: *\"We have found the secret of life!\"*\n\nOn April 25, 1953, their one-page paper appeared in *Nature*. It contained the most famous understatement in the history of science:\n*\"It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material.\"*\n\nWhen a cell divides, the double helix unzips down the middle, and each strand acts as a template to rebuild its perfect twin. In one stroke, Watson and Crick explained how living things reproduce, evolve, and pass life down through billions of years.",
    stem_vocabulary: [
      {
            "term": "Base Pairing Rule",
            "definition": "Chargaff's rules stating that DNA bases always pair specifically: Adenine with Thymine ($A-T$) and Guanine with Cytosine ($G-C$)."
      },
      {
            "term": "Hydrogen Bonding",
            "definition": "Weak chemical bonds forming between the complementary base pairs holding the two strands of DNA together."
      },
      {
            "term": "Antiparallel Strands",
            "definition": "The orientation of the two strands of DNA running in opposite directions ($5' \\to 3'$ and $3' \\to 5'$)."
      },
      {
            "term": "Genetic Code",
            "definition": "The sequence of nucleotide bases in DNA that dictates the amino acid sequence of proteins."
      }
],
    blooms_questions: [
      { level: "Remember", question: "What primary observation or data led the scientist to their discovery?" },
      { level: "Understand", question: "How does this discovery fundamentally change our understanding of physical reality?" },
      { level: "Apply", question: "How can this scientific principle be applied to modern technology or medicine?" },
      { level: "Analyze", question: "What evidence convinced skeptical peers to overturn the older paradigm?" },
      { level: "Evaluate", question: "Why is perseverance in the face of widespread institutional skepticism essential for scientific progress?" }
    ],
    quiz: [
      { question: "What was the critical discovery detailed in this historical account?", options: ["A revolutionary breakthrough in empirical science", "A mathematical error", "An accidental myth", "A discarded rumor"], answer: 0 }
    ],
    moral_reflection: "True scientific inquiry requires relentless curiosity, meticulous evidence gathering, and the intellectual bravery to follow data wherever it leads, regardless of dogma.",
    cultural_context: "World History of Science / Empirical Discovery, Computing & Genetics",
    audio_url: ""
  },
  {
    id: "science-96-grace-hopper-moth-in-relay",
    title: "Grace Hopper: The Moth in the Relay and the First Compiler",
    slug: "science-96-grace-hopper-moth-in-relay",
    collection: "science-stories",
    collection_name: "100 Authentic Science Stories",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "The Education of a Computer (Proceedings of the ACM)",
    source_author: "Grace Murray Hopper",
    source_year: "1952",
    source_chapter: "ACM '52: Proceedings of the 1952 ACM National Meeting, pp. 243–249",
    source_edition: "Association for Computing Machinery, New York",
    authenticity_note: "Based on Grace Hopper's September 9, 1947 Harvard Mark II logbook entry pasting a real moth ('First actual case of bug being found') and her pioneering 1952 invention of the A-0 compiler translating English words into machine code.",
    summary: "Pioneering computer scientist and US Navy Rear Admiral Grace Hopper removed an actual moth trapped inside Relay #70 of the Harvard Mark II computer in 1947, coining 'debugging'. In 1952, she invented the world's first compiler—insisting that humans should program computers in plain English words rather than obscure binary numbers.",
    content: "In the 1940s and 50s, programming a computer was a mind-numbing ordeal. Programmers had to write endless strings of octal or binary numbers—0s and 1s—directly into the hardware. If a programmer made a single typo, the entire sequence collapsed.\n\nU.S. Navy lieutenant and Yale mathematics Ph.D. Grace Hopper was stationed at Harvard University working on the colossal electromechanical Mark II computer. On a muggy September afternoon in 1947, the machine suddenly conked out.\n\nHopper and her team checked the endless rows of mechanical relays. Deep inside Relay #70 in Panel F, they found a live moth trapped between the electrical contact points, beating its wings and shorting out the circuit! Hopper carefully extracted the insect with tweezers and taped it into the official logbook with the notation: *\"First actual case of bug being found.\"* While the word 'bug' had older engineering roots, Hopper's wit permanently popularized 'bug' and 'debugging' in the computing lexicon.\n\nHopper had a much greater vision: *\"Why must humans learn the machine's tedious language? Why can't the computer be taught to understand human English?\"*\n\nSenior scientists scoffed, telling her: *\"Computers can only do arithmetic! They cannot understand words!\"*\n\nRefusing to listen, in 1952 Hopper wrote the world's first **compiler**, the **A-0 System**. A compiler is a master program that reads human-readable words—like `ADD`, `SUBTRACT`, `MULTIPLY`—and automatically translates them into the machine's native binary code.\n\nHopper went on to help develop **COBOL** (Common Business-Oriented Language), which enabled people with no engineering degrees to write computer programs. Today, every high-level language—from Python and C++ to JavaScript—traces its lineage directly to Grace Hopper's stubborn belief that human language belongs in computing.",
    stem_vocabulary: [
      {
            "term": "Compiler",
            "definition": "A computer program that translates computer code written in one programming language (source language) into another language (machine code)."
      },
      {
            "term": "Debugging",
            "definition": "The process of identifying and removing errors or bugs from computer hardware or software."
      },
      {
            "term": "Machine Code",
            "definition": "A computer programming language consisting of binary or hexadecimal instructions which a computer can respond to directly."
      },
      {
            "term": "COBOL",
            "definition": "Common Business-Oriented Language, a high-level programming language designed for business use, heavily influenced by Hopper."
      }
],
    blooms_questions: [
      { level: "Remember", question: "What primary observation or data led the scientist to their discovery?" },
      { level: "Understand", question: "How does this discovery fundamentally change our understanding of physical reality?" },
      { level: "Apply", question: "How can this scientific principle be applied to modern technology or medicine?" },
      { level: "Analyze", question: "What evidence convinced skeptical peers to overturn the older paradigm?" },
      { level: "Evaluate", question: "Why is perseverance in the face of widespread institutional skepticism essential for scientific progress?" }
    ],
    quiz: [
      { question: "What was the critical discovery detailed in this historical account?", options: ["A revolutionary breakthrough in empirical science", "A mathematical error", "An accidental myth", "A discarded rumor"], answer: 0 }
    ],
    moral_reflection: "True scientific inquiry requires relentless curiosity, meticulous evidence gathering, and the intellectual bravery to follow data wherever it leads, regardless of dogma.",
    cultural_context: "World History of Science / Empirical Discovery, Computing & Genetics",
    audio_url: ""
  },
  {
    id: "science-97-tim-berners-lee-world-wide-web",
    title: "Tim Berners-Lee: Connecting the World with One Click",
    slug: "science-97-tim-berners-lee-world-wide-web",
    collection: "science-stories",
    collection_name: "100 Authentic Science Stories",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "Information Management: A Proposal (CERN Report) & Weaving the Web",
    source_author: "Tim Berners-Lee",
    source_year: "1989",
    source_chapter: "CERN Archive March 1989 & Chapter 1: Enquire Within Upon Everything",
    source_edition: "HarperSanFrancisco, New York (1999)",
    authenticity_note: "Based on Tim Berners-Lee's original March 1989 CERN proposal annotated by his supervisor Mike Sendall as 'Vague but exciting...', creating HTML, HTTP, URLs, and the first web browser/server.",
    summary: "In 1989, at CERN in Switzerland, British software engineer Tim Berners-Lee grew frustrated that scientists could not share documents across different computer systems. He invented HTML, HTTP, and the World Wide Web—and gave his invention to humanity completely free, changing human civilization forever.",
    content: "In 1989, the European particle physics laboratory CERN in Geneva, Switzerland, was a bubbling hive of brilliant international scientists. But CERN had a maddening logistical nightmare: thousands of researchers from dozens of countries brought their own incompatible computers, operating systems, and disk formats. If a scientist in Geneva wanted to read data gathered by a colleague in Rome, they often had to physically log into a separate terminal or mail a magnetic tape!\n\nBritish computer programmer Tim Berners-Lee envisioned a radical solution. Inspired by a Victorian household encyclopedia called *Enquire Within Upon Everything*, Berners-Lee proposed linking documents together using 'hypertext'—clickable words that instantly jump across networks from one file to another.\n\nIn March 1989, Berners-Lee handed his supervisor Mike Sendall a proposal entitled *Information Management: A Proposal*. Sendall read the document, chuckled, and scribbled four immortal words on the cover: *\"Vague but exciting...\"*\n\nGiven the green light, Berners-Lee worked furiously on a black NeXT computer in late 1990. In just a few months, he created the three fundamental pillars of the web:\n1. **HTML** (HyperText Markup Language): the language to format pages.\n2. **URI / URL** (Uniform Resource Identifier): universal addresses for every document on Earth.\n3. **HTTP** (Hypertext Transfer Protocol): the rules for servers to send pages to browsers.\n\nBy Christmas 1990, Berners-Lee launched the world's very first website: `http://info.cern.ch`, running on his desktop computer with a handwritten red sticker warning: *\"This machine is a server. DO NOT POWER IT DOWN!\"*\n\nBerners-Lee could have patented the web and become the wealthiest individual on Earth. Instead, in April 1993, he convinced CERN to release the entire source code into the public domain royalty-free forever. His selfless gift connected billions of minds, democratized human knowledge, and created the modern global civilization.",
    stem_vocabulary: [
      {
            "term": "World Wide Web (WWW)",
            "definition": "An information system where documents and other web resources are identified by URLs, interlinked by hypertext, and accessible via the Internet."
      },
      {
            "term": "Hypertext Transfer Protocol (HTTP)",
            "definition": "An application-layer protocol for transmitting hypermedia documents, such as HTML."
      },
      {
            "term": "HTML (HyperText Markup Language)",
            "definition": "The standard markup language for documents designed to be displayed in a web browser."
      },
      {
            "term": "Uniform Resource Locator (URL)",
            "definition": "A ubiquitous address used to identify and locate a specific resource on the computer network."
      }
],
    blooms_questions: [
      { level: "Remember", question: "What primary observation or data led the scientist to their discovery?" },
      { level: "Understand", question: "How does this discovery fundamentally change our understanding of physical reality?" },
      { level: "Apply", question: "How can this scientific principle be applied to modern technology or medicine?" },
      { level: "Analyze", question: "What evidence convinced skeptical peers to overturn the older paradigm?" },
      { level: "Evaluate", question: "Why is perseverance in the face of widespread institutional skepticism essential for scientific progress?" }
    ],
    quiz: [
      { question: "What was the critical discovery detailed in this historical account?", options: ["A revolutionary breakthrough in empirical science", "A mathematical error", "An accidental myth", "A discarded rumor"], answer: 0 }
    ],
    moral_reflection: "True scientific inquiry requires relentless curiosity, meticulous evidence gathering, and the intellectual bravery to follow data wherever it leads, regardless of dogma.",
    cultural_context: "World History of Science / Empirical Discovery, Computing & Genetics",
    audio_url: ""
  },
  {
    id: "science-98-doudna-charpentier-crispr-scissors",
    title: "Doudna & Charpentier: The Molecular Scissors of CRISPR",
    slug: "science-98-doudna-charpentier-crispr-scissors",
    collection: "science-stories",
    collection_name: "100 Authentic Science Stories",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity (Science, Vol. 337)",
    source_author: "Martin Jinek, Krzysztof Chylinski, Ines Fonfara, Michael Hauer, Jennifer A. Doudna, Emmanuelle Charpentier",
    source_year: "2012",
    source_chapter: "Science 337, 816–821 (17 August 2012)",
    source_edition: "American Association for the Advancement of Science",
    authenticity_note: "Based on Jennifer Doudna and Emmanuelle Charpentier's breakthrough 2012 paper repurposing bacterial CRISPR-Cas9 as a programmable genome-editing technology, winning the 2020 Nobel Prize in Chemistry.",
    summary: "Investigating how humble bacteria defend themselves against attacking viruses, biochemists Jennifer Doudna and Emmanuelle Charpentier teamed up in 2011. They reprogrammed an ancient bacterial enzyme called Cas9 with a synthetic guide RNA, inventing precision molecular scissors that can edit the DNA of any living organism like correcting a typo in a word processor.",
    content: "For billions of years, an invisible war has raged across every puddle of water, drop of soil, and inside our own guts: the war between bacteria and the ravenous viruses that prey on them, known as bacteriophages.\n\nIn the late 2000s, microbiologists discovered something strange inside bacterial genomes: mysterious, repeating sequences dubbed **CRISPR** (Clustered Regularly Interspaced Short Palindromic Repeats). Tucked between the repeating palindromes were snippets of DNA stolen from past viral invaders! Bacteria were keeping a biological mugshot gallery of their enemies.\n\nIn March 2011, at a microbiology conference in San Juan, Puerto Rico, American biochemist Jennifer Doudna met French microbiologist Emmanuelle Charpentier. Over coffee and a stroll through the cobblestone streets of Old San Juan, they realized their complementary strengths: Charpentier had uncovered how a molecule called *tracrRNA* paired with CRISPR, while Doudna was a world expert on the structural biochemistry of RNA enzymes.\n\nThey decided to join forces across the Atlantic.\n\nIn their laboratories at UC Berkeley and Umeå University, they focused on an enzyme called **Cas9**—the executioner protein. Working through brilliant biochemical assays, their teams demonstrated that Cas9 acted like a molecular sentinel: armed with a matching RNA guide, it roamed the cell, locked onto invading viral DNA matching the guide, and cleanly sliced both strands in two like microscopic scissors!\n\nThen came the flash of pure genius: Doudna and Charpentier engineered a single synthetic **Guide RNA** that fused the two natural RNA components. By simply typing any custom genetic sequence into their guide RNA, they could command Cas9 to cut *any* gene, in *any* cell—from plants and animals to human beings—at a precise letter!\n\nPublished in *Science* in August 2012, this breakthrough transformed biology overnight. Scientists could now rewrite the code of life with the precision of a word processor, opening doors to curing sickle cell anemia, genetic blindness, and muscular dystrophy. In 2020, Doudna and Charpentier were awarded the Nobel Prize in Chemistry—the first all-female scientific duo to win the honor.",
    stem_vocabulary: [
      {
            "term": "CRISPR-Cas9",
            "definition": "A revolutionary gene-editing technology adapted from a bacterial defense mechanism that precisely cuts targeted DNA sequences."
      },
      {
            "term": "Guide RNA (gRNA)",
            "definition": "A synthetic RNA molecule that guides the Cas9 enzyme to a specific matching sequence in the genome."
      },
      {
            "term": "Endonuclease",
            "definition": "An enzyme that cleaves a polynucleotide chain by separating nucleotides other than the two end ones."
      },
      {
            "term": "Gene Editing",
            "definition": "A type of genetic engineering in which DNA is inserted, deleted, modified, or replaced in the genome of a living organism."
      }
],
    blooms_questions: [
      { level: "Remember", question: "What primary observation or data led the scientist to their discovery?" },
      { level: "Understand", question: "How does this discovery fundamentally change our understanding of physical reality?" },
      { level: "Apply", question: "How can this scientific principle be applied to modern technology or medicine?" },
      { level: "Analyze", question: "What evidence convinced skeptical peers to overturn the older paradigm?" },
      { level: "Evaluate", question: "Why is perseverance in the face of widespread institutional skepticism essential for scientific progress?" }
    ],
    quiz: [
      { question: "What was the critical discovery detailed in this historical account?", options: ["A revolutionary breakthrough in empirical science", "A mathematical error", "An accidental myth", "A discarded rumor"], answer: 0 }
    ],
    moral_reflection: "True scientific inquiry requires relentless curiosity, meticulous evidence gathering, and the intellectual bravery to follow data wherever it leads, regardless of dogma.",
    cultural_context: "World History of Science / Empirical Discovery, Computing & Genetics",
    audio_url: ""
  },
  {
    id: "science-99-yamanaka-four-stem-factors",
    title: "Shinya Yamanaka: The Four Magic Factors Turning Back Cellular Time",
    slug: "science-99-yamanaka-four-stem-factors",
    collection: "science-stories",
    collection_name: "100 Authentic Science Stories",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "Induction of Pluripotent Stem Cells from Mouse Embryonic and Adult Fibroblast Cultures by Defined Factors (Cell, Vol. 126)",
    source_author: "Kazutoshi Takahashi & Shinya Yamanaka",
    source_year: "2006",
    source_chapter: "Cell 126, 663–676 (25 August 2006)",
    source_edition: "Elsevier / Cell Press",
    authenticity_note: "Based on Shinya Yamanaka and Kazutoshi Takahashi's monumental 2006 discovery of iPSCs (Induced Pluripotent Stem Cells) using the four transcription factors (Oct3/4, Sox2, Klf4, c-Myc), winning the 2012 Nobel Prize in Physiology or Medicine.",
    summary: "For over a century, biology believed cellular development was a strict one-way street: once an embryonic stem cell matured into a specialized skin cell, it could never go back. In 2006, Japanese orthopedic surgeon-turned-scientist Shinya Yamanaka shocked the world by introducing just four transcription factors into adult skin cells, rewinding their developmental clock back into pluripotent stem cells.",
    content: "In 1987, young Japanese orthopedic surgeon Shinya Yamanaka entered the operating room with high hopes. But he quickly discovered he lacked the lightning hand speed required for surgery—earning the mocking nickname 'Jamanaka' (a pun on the Japanese word *jama*, meaning 'obstacle' or 'nuisance').\n\nHumbled but undeterred, Yamanaka realized his true calling lay not in performing operations, but in uncovering the root biological causes of incurable diseases through laboratory science.\n\nAt the time, the frontier of medicine was embryonic stem cells. These miraculous cells, found only in early embryos, possessed *pluripotency*—the magical ability to turn into any of the body's 200 specialized cell types, from beating heart muscle to thinking brain neurons. However, harvesting them required destroying human embryos, sparking fierce ethical dilemmas and legal bans worldwide.\n\nBiologists believed that cellular differentiation was a steep, irreversible mountain: once a cell tumbled down from the embryonic summit to become a specialized skin cell, its fate was sealed forever. Time could not flow backward.\n\nYamanaka dared to ask: *Can we climb back up the mountain? Can an ordinary adult cell be reset?*\n\nWorking at Kyoto University with his brilliant student Kazutoshi Takahashi, Yamanaka combed through thousands of genes active in embryonic cells. They narrowed the list down to 24 candidate transcription factors.\n\nThen Takahashi tried a bold experiment: instead of testing genes one by one, he introduced all 24 factors simultaneously into adult mouse skin fibroblasts. Astonishingly, the skin cells lost their shape, grew colonies, and reverted into pluripotent stem cells!\n\nThrough painstaking elimination, Yamanaka narrowed the 24 factors down to just **four magic switches**: **Oct3/4, Sox2, Klf4, and c-Myc** (now celebrated as the **Yamanaka Factors**).\n\nIn August 2006, Yamanaka announced the creation of **iPSCs** (Induced Pluripotent Stem Cells). By inserting just four proteins, adult skin cells had their developmental clocks rewound to zero!\n\nYamanaka had dissolved the ethical crisis of embryo destruction and opened the floodgates to regenerative medicine—growing patient-specific heart tissue, replacement retinas to restore vision, and neuron models for Parkinson's disease. In 2012, just six years after his discovery, Yamanaka was awarded the Nobel Prize in Physiology or Medicine.",
    stem_vocabulary: [
      {
            "term": "Induced Pluripotent Stem Cells (iPSCs)",
            "definition": "Adult cells that have been genetically reprogrammed to an embryonic stem cell-like state."
      },
      {
            "term": "Pluripotency",
            "definition": "The ability of a stem cell to develop into virtually any type of cell or tissue in the body."
      },
      {
            "term": "Transcription Factors",
            "definition": "Proteins that control the rate of transcription of genetic information from DNA to messenger RNA."
      },
      {
            "term": "Cellular Reprogramming",
            "definition": "The conversion of a differentiated somatic cell into a different cell type or pluripotent state without passing through an embryo."
      }
],
    blooms_questions: [
      { level: "Remember", question: "What primary observation or data led the scientist to their discovery?" },
      { level: "Understand", question: "How does this discovery fundamentally change our understanding of physical reality?" },
      { level: "Apply", question: "How can this scientific principle be applied to modern technology or medicine?" },
      { level: "Analyze", question: "What evidence convinced skeptical peers to overturn the older paradigm?" },
      { level: "Evaluate", question: "Why is perseverance in the face of widespread institutional skepticism essential for scientific progress?" }
    ],
    quiz: [
      { question: "What was the critical discovery detailed in this historical account?", options: ["A revolutionary breakthrough in empirical science", "A mathematical error", "An accidental myth", "A discarded rumor"], answer: 0 }
    ],
    moral_reflection: "True scientific inquiry requires relentless curiosity, meticulous evidence gathering, and the intellectual bravery to follow data wherever it leads, regardless of dogma.",
    cultural_context: "World History of Science / Empirical Discovery, Computing & Genetics",
    audio_url: ""
  },
  {
    id: "science-100-jwst-first-deep-field",
    title: "James Webb Space Telescope: Peering into the Cosmic Dawn",
    slug: "science-100-jwst-first-deep-field",
    collection: "science-stories",
    collection_name: "100 Authentic Science Stories",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "The James Webb Space Telescope: Science Guide and First Deep Field (NASA / ESA / CSA)",
    source_author: "NASA, ESA, CSA & STScI",
    source_year: "2022",
    source_chapter: "First Images from the James Webb Space Telescope (SMACS 0723)",
    source_edition: "NASA Headquarters, Washington, D.C. (July 11–12, 2022)",
    authenticity_note: "Directly derived from the deployment of the James Webb Space Telescope at Lagrange Point 2 (L2) and the release of 'Webb's First Deep Field' (SMACS 0723) on July 11, 2022, capturing galaxies formed over 13.1 billion years ago.",
    summary: "Folded like origami inside an Ariane 5 rocket on Christmas Day 2021, the James Webb Space Telescope journeyed one million miles to Lagrange Point 2. Unfurling a tennis-court-sized sunshield and a 6.5-meter gold-plated beryllium mirror, its infrared eyes pierced cosmic dust to deliver humanity's deepest, sharpest image of galaxies born at the very dawn of time.",
    content: "On Christmas morning, December 25, 2021, an Ariane 5 rocket roared into the skies above the European Spaceport in French Guiana. Packed inside its tight 5.4-meter nose fairing was humanity's most complex and audacious scientific machine: the **James Webb Space Telescope (JWST)**.\n\nThirty years in development, Webb was built to succeed the legendary Hubble Space Telescope. But where Hubble viewed the universe primarily in visible light, Webb was designed to see in the **infrared**.\n\nBecause the universe has been expanding for 13.8 billion years, light emitted by the very first stars and galaxies has been stretched by cosmological redshift all the way from visible wavelengths into the long, invisible infrared. Furthermore, infrared light effortlessly pierces through dense curtains of cosmic dust that blind optical telescopes.\n\nTo detect these faint heat whispers from the dawn of time, Webb had to operate in deep, unimaginable cold: below -233°C (-388°F).\n\nWebb journeyed one million miles (1.5 million kilometers) away from Earth to **Lagrange Point 2 (L2)**. Over a month of breathless tension, flight controllers orchestrated a sequence of 344 'single-point-of-failure' deployments: unfurling a five-layer Kapton sunshield the size of a tennis court to block the heat of the Sun, Earth, and Moon, followed by locking eighteen hexagonal beryllium mirrors coated in microscopic pure gold into a single 6.5-meter giant honeycomb eye.\n\nOn July 11, 2022, the world held its collective breath as the White House unveiled **Webb's First Deep Field** (SMACS 0723).\n\nCovering a patch of sky no larger than a grain of sand held at arm's length by someone on the ground, the image blazed with thousands of galaxies. Foreground galaxy clusters acted as a colossal cosmic magnifying glass (gravitational lensing), warping distant background light into glowing streaks and revealing galaxies that blazed more than 13.1 billion years ago—just after the Big Bang!\n\nFrom Archimedes in Syracuse to the golden mirrors of Webb at L2, humanity's quest to decipher the book of nature had crossed millennia. The journey of scientific discovery was not ending; it had only just begun.",
    stem_vocabulary: [
      {
            "term": "Lagrange Point 2 (L2)",
            "definition": "A gravitationally stable position in space roughly 1.5 million kilometers behind Earth where a satellite stays in sync with Earth's orbit around the Sun."
      },
      {
            "term": "Infrared Astronomy",
            "definition": "A branch of astronomy that studies astronomical objects visible in infrared (IR) radiation, piercing interstellar dust clouds."
      },
      {
            "term": "Gravitational Lensing",
            "definition": "The bending and magnification of light from distant background galaxies by the immense gravity of a foreground galaxy cluster."
      },
      {
            "term": "Cosmic Dawn",
            "definition": "The epoch in the early universe, roughly 100 to 500 million years after the Big Bang, when the first stars and galaxies ignited."
      }
],
    blooms_questions: [
      { level: "Remember", question: "What primary observation or data led the scientist to their discovery?" },
      { level: "Understand", question: "How does this discovery fundamentally change our understanding of physical reality?" },
      { level: "Apply", question: "How can this scientific principle be applied to modern technology or medicine?" },
      { level: "Analyze", question: "What evidence convinced skeptical peers to overturn the older paradigm?" },
      { level: "Evaluate", question: "Why is perseverance in the face of widespread institutional skepticism essential for scientific progress?" }
    ],
    quiz: [
      { question: "What was the critical discovery detailed in this historical account?", options: ["A revolutionary breakthrough in empirical science", "A mathematical error", "An accidental myth", "A discarded rumor"], answer: 0 }
    ],
    moral_reflection: "True scientific inquiry requires relentless curiosity, meticulous evidence gathering, and the intellectual bravery to follow data wherever it leads, regardless of dogma.",
    cultural_context: "World History of Science / Empirical Discovery, Computing & Genetics",
    audio_url: ""
  },
];

export const stageD2TaStories = [
  {
    id: "science-91-alan-turing-enigma-universal-machine",
    title: "ஆலன் டூரிங்கும் எண்களின் புதிரை உடைத்த உலகளாவிய கணினி மாதிரியும்",
    slug: "science-91-alan-turing-enigma-universal-machine",
    collection: "science-stories",
    collection_name: "100 வரலாற்று அறிவியல் கதைகள்",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "On Computable Numbers, with an Application to the Entscheidungsproblem (Proceedings of the London Mathematical Society)",
    source_author: "Alan M. Turing",
    source_year: "1936",
    source_chapter: "Proceedings of the London Mathematical Society, Series 2, Vol. 42, pp. 230–265",
    source_edition: "C. F. Hodgson & Son, London",
    authenticity_note: "Based on Alan Turing's foundational 1936 paper inventing the Universal Turing Machine and his wartime codebreaking work at Bletchley Park designing the electro-mechanical Bombe to crack the Nazi Enigma cipher.",
    summary: "1936-ஆம் ஆண்டு தனது 24-ஆவது வயதில், ஒரு நீண்ட காகித நாடாவில் குறியீடுகளைப் படித்து எழுதும் எளிய கற்பனை இயந்திரத்தை வடிவமைத்ததன் மூலம் இன்றைய நவீன கணினிகளின் அடிப்படைக் கொள்கையை (Universal Turing Machine) உருவாக்கினார் ஆலன் டூரிங். இரண்டாம் உலகப் போரின்போது பிளெட்ச்லி பூங்காவில் ஜெர்மனியின் எனிக்மா இரகசியக் குறியீடுகளை உடைக்கும் இயந்திரத்தை உருவாக்கி லட்சக்கணக்கான உயிர்களைக் காப்பாற்றினார்.",
    content: "1936-ஆம் ஆண்டு, கேம்பிரிட்ஜ் புல்வெளியில் ஓட்டப்பயிற்சியை முடித்துவிட்டு அமர்ந்திருந்த 24 வயது இளம் கணித மேதை ஆலன் டூரிங் ஒரு சிக்கலான கணிதப் புதிருக்கு விடை தேடிக்கொண்டிருந்தார்: \"எந்தவொரு கணிதக் கூற்றும் சரியா தவறா என்பதைத் தீர்மானிக்க ஒரு பொதுவான இயந்திர வழிமுறை இருக்க முடியுமா?\"\n\nஇதற்கு விடை காண டூரிங் இரும்பையோ உலோகம் சார்ந்த இயந்திரங்களையோ செய்யவில்லை; தனது சிந்தனையிலேயே ஒரு விசித்திரமான கற்பனை இயந்திரத்தை உருவாக்கினார். முடிவில்லாத ஒரு நீண்ட காகித நாடா, அதில் எழுதப்பட்ட குறியீடுகள், அவற்றை இடவலமாக நகர்ந்து படித்து, அழித்து, புதிய குறியீட்டை எழுதும் ஒரு தலைப்பகுதி—இவ்வளவுதான் அந்த இயந்திரம்!\n\nஇதுவே வரலாற்றில் **டூரிங் இயந்திரம்** (Turing Machine) என்று அழைக்கப்படுகிறது. டூரிங்கிற்கு முன்பு வரை, ஒரு குறிப்பிட்ட வேலையை மட்டுமே செய்யக்கூடிய தனித்தனி இயந்திரங்களே இருந்தன. ஆனால், காகித நாடாவில் எழுதப்படும் வழிமுறைகளை (Instructions) மட்டும் மாற்றினால், ஒரே ஒரு உலகளாவிய இயந்திரமே உலகின் எந்தவொரு சிக்கலான கணக்கீட்டையும் செய்து முடிக்கும் என்ற புரட்சிகரமான கொள்கையை டூரிங் நிரூபித்தார். இதுவே இன்றைய 'மென்பொருள்' (Software) மற்றும் கணினிகளின் பிறப்பிற்கு வித்திட்டது!\n\n1939-இல் இரண்டாம் உலகப் போர் மூண்டபோது, பிரிட்டனின் அதிரடி உளவுத் தலைமையகமான 'பிளெட்ச்லி பார்க்'கிற்கு டூரிங் அழைக்கப்பட்டார். ஜெர்மன் ராணுவம் தனது அனைத்து போர் ரகசியங்களையும் 'எனிக்மா' (Enigma) என்ற அதிநவீன குறியீட்டு இயந்திரம் மூலம் அனுப்பியது. அந்த இயந்திரத்தில் உள்ள சக்கரங்கள் தினமும் 158 க்விண்டில்லியன் (158 பில்லியன் பில்லியன்) விதங்களில் எழுத்துக்களை மாற்றும் திறன் கொண்டவை! மனிதர்களால் அதை ஒருபோதும் இரவுக்குள் கணக்கிட்டு உடைக்க முடியாது.\n\nஅப்போது டூரிங் 'பாம்பே' (Bombe) என்ற பிரம்மாண்ட மின்காந்த இயந்திரத்தை வடிவமைத்தார். சுழலும் டிரம்ஸ்கள் கொண்ட அந்த இயந்திரம், தர்க்க ரீதியான குறுக்குவழிகள் மூலம் வினாடிகளில் கோடிக்கணக்கான தவறான வழிகளை நிராகரித்து ஜெர்மன் எனிக்மாவின் ரகசியக் குறியீடுகளைத் துல்லியமாக உடைத்தது!\n\nடூரிங்கின் இந்த அறிவார்ந்த சாதனை இரண்டாம் உலகப் போரை இரண்டு முதல் நான்கு ஆண்டுகள் முன்கூட்டியே முடிவுக்குக் கொண்டுவந்து, சுமார் ஒரு கோடியே நாற்பது லட்சம் மனித உயிர்களைக் காப்பாற்றியது. ஆலன் டூரிங் நவீன கணினி அறிவியல் மற்றும் செயற்கை நுண்ணறிவின் தந்தையாகப் போற்றப்படுகிறார்.",
    stem_vocabulary: [
      {
            "term": "டூரிங் இயந்திரம் (Turing Machine)",
            "definition": "ஒரு விதிகளின் அட்டவணைக்கேற்ப காகித நாடாவில் குறியீடுகளைப் படித்து மாற்றியமைக்கும் கணினிக் கோட்பாட்டின் கணித மாதிரி."
      },
      {
            "term": "பொது கணக்கீட்டுத் திறன் (Universal Computation)",
            "definition": "மென்பொருள் வழிமுறைகளை மாற்றுவதன் மூலம் ஒரே இயந்திரம் எந்தவொரு கணக்கீட்டுப் பணியையும் செய்யக்கூடிய திறன்."
      },
      {
            "term": "குறியாக்கவியல் (Cryptography)",
            "definition": "ரகசியத் தகவல்களைப் பாதுகாப்பாக அனுப்பவும், மறைகுறியீடுகளைப் புரிந்துகொள்ளவும் உதவும் அறிவியல்."
      },
      {
            "term": "எனிக்மா இயந்திரம் (Enigma Machine)",
            "definition": "இரண்டாம் உலகப் போரில் ஜெர்மனி ராணுவம் தனது ரகசியச் செய்திகளை மாற்றியமைக்கப் பயன்படுத்திய மின்காந்த சுழல் குறியீட்டு இயந்திரம்."
      }
],
    blooms_questions: [
      { level: "நினைவுகூர்க (Remember)", question: "இக்கதையில் விஞ்ஞானி தனது கண்டுபிடிப்பை நிகழ்த்திய முக்கிய தருணம் அல்லது ஆதாரம் எது?" },
      { level: "புரிந்துகொள்க (Understand)", question: "இந்த அறிவியல் கண்டுபிடிப்பு அக்கால மனிதர்களின் பழைய நம்பிக்கைகளை எவ்வாறு மாற்றியமைத்தது?" },
      { level: "பயன்படுத்துக (Apply)", question: "இக்கண்டுபிடிப்பு இன்றைய நவீன கணினி, மருத்துவம் அல்லது விண்வெளிக்கு எவ்வாறு வழிகாட்டுகிறது?" },
      { level: "பகுப்பாய்க (Analyze)", question: "ஆரம்பத்தில் மற்ற விஞ்ஞானிகள் இதனை ஏற்க மறுத்ததற்கான காரணங்கள் மற்றும் அதை முறியடித்த சான்றுகள் யாவை?" },
      { level: "மதிப்பிடுக (Evaluate)", question: "எதிர்ப்புகள் மற்றும் தடைகள் வந்தபோதிலும் தனது ஆய்வில் தளராமல் நின்ற விஞ்ஞானியின் குணம் மாணவர்களுக்கு என்ன கற்பிக்கிறது?" }
    ],
    quiz: [
      { question: "இக்கதையில் விவரிக்கப்பட்ட வரலாற்று முக்கியத்துவம் வாய்ந்த அறிவியல் சாதனை எது?", options: ["ஆதாரங்களுடன் நிறுவப்பட்ட புரட்சிகரமான அறிவியல் உண்மை", "ஒரு தற்காலிகக் கற்பனை", "மறுக்கப்பட்ட ஒரு வதந்தி", "பயனற்ற ஒரு கணிப்பு"], answer: 0 }
    ],
    moral_reflection: "அறிவியல் ஆய்வு என்பது வெறும் புத்தகப் படிப்பல்ல; அது இயற்கை நமக்குக் காட்டும் சான்றுகளை நேர்மையுடன் உற்றுநோக்கி, தடைகளைத் தாண்டி உண்மையை நிலைநாட்டும் தணியாத தேடலாகும்.",
    cultural_context: "உலக அறிவியல் வரலாறு / கணினியியல், மரபியல் மற்றும் நவீன வானியல் சாதனைகள்",
    audio_url: ""
  },
  {
    id: "science-92-claude-shannon-bit-information",
    title: "கிளாட் ஷானனும் தகவலின் அலகான பிட் (Bit) பிறப்பும் தகவல் கோட்பாடும்",
    slug: "science-92-claude-shannon-bit-information",
    collection: "science-stories",
    collection_name: "100 வரலாற்று அறிவியல் கதைகள்",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "A Mathematical Theory of Communication (Bell System Technical Journal)",
    source_author: "Claude E. Shannon",
    source_year: "1948",
    source_chapter: "The Bell System Technical Journal, Vol. 27, pp. 379–423, 623–656",
    source_edition: "American Telephone and Telegraph Company, New York",
    authenticity_note: "Based on Claude Shannon's landmark 1948 paper 'A Mathematical Theory of Communication', which created the field of Information Theory, introduced the term 'bit', and quantified digital entropy.",
    summary: "பெல் ஆய்வகத்தின் நீண்ட தாழ்வாரங்களில் ஒற்றைச் சக்கர சைக்கிளை ஓட்டிக்கொண்டே பந்துகளை அந்தரத்தில் வீசி விளையாடும் மேதை கிளாட் ஷானன், 1948-ஆம் ஆண்டு 'தகவல் கோட்பாடு' (Information Theory) என்ற புதிய அறிவியல் துறையை உருவாக்கினார். எழுத்து, குரல், படம் என எந்தவொரு தகவலையும் 'பிட்' (Bit - 0 மற்றும் 1) என்ற இருமக் குறியீடுகளாக மாற்றி இரைச்சலின்றி அனுப்ப முடியும் என்பதை நிரூபித்தார்.",
    content: "1940-களில் அமெரிக்காவின் புகழ்பெற்ற பெல் ஆய்வகப் பொறியாளர்களுக்கு ஒரு மிகப்பெரிய தலைவலி இருந்தது: தகவல்களில் கலக்கும் 'இரைச்சல்' (Noise)! தொலைபேசிக் கம்பிகளிலோ அல்லது வானொலி அலைகளிலோ மனிதக் குரல்கள் செல்லும்போது, தூரம் அதிகரிக்க அதிகரிக்க 'ஹிஸ்' என்ற சத்தமும் இரைச்சலும் சேர்ந்து தகவல்கள் பாழாயின. தூரத்து இடங்களுக்கு எவ்வித பிழையுமின்றி ஒரு செய்தியை அனுப்புவது சாத்தியமே இல்லை என்று அனைவரும் நினைத்தனர்.\n\nஅந்த ஆய்வகத்தின் தாழ்வாரங்களில் ஒரு விசித்திரமான மனிதர் சுற்றி வருவார்; அவர் ஒற்றைச் சக்கர சைக்கிளில் சென்றுகொண்டே நான்கு பந்துகளைக் கைகளில் சுழற்றி வித்தை காட்டுவார்; சதுரங்கம் விளையாடும் இயந்திரங்களையும், புதிர் பாதையில் தானாக வழியைக் கண்டுபிடிக்கும் 'தீசியஸ்' என்ற இயந்திர எலியையும் உருவாக்குவார். அவர்தான் கணித மேதை கிளாட் ஷானன்!\n\nஷானன் யாரும் யோசிக்காத ஒரு கேள்வியைக் கேட்டார்: *\"தகவல் (Information) என்றால் என்ன? அதை எப்படிக் கணிதத்தால் அளப்பது?\"*\n\nஷானனுக்கு முன்பு வரை மனிதர்கள் தகவல்களை வார்த்தைகளாகவோ, நிமிடங்களாகவோ அளந்தனர். ஆனால் 1948-இல் ஷானன் வெளியிட்ட *தகவல்தொடர்பின் கணிதக் கோட்பாடு* என்ற ஆய்வுக்கட்டுரை உலகையே மாற்றியது. ஒரு செய்தி என்பது 'நிச்சயமற்ற தன்மையைக் குறைப்பது' என்பதை அவர் நிறுவினார்.\n\nஒரு நாணயத்தைச் சுண்டினால் பூ விழுமா தலை விழுமா என்ற சந்தேகம் இருக்கும். அது கீழே விழுந்ததும் நமக்கு ஒரு உண்மை உறுதியாகிறது: பூ அல்லது தலை (ஆம் அல்லது இல்லை). இந்த மிக அடிப்படையான இரும நிலையை (0 அல்லது 1) தகவலின் அடிப்படை அணுவாக அவர் வரையறுத்தார். அதற்கு **பிட்** (Bit - Binary Digit) என்று பெயரிடப்பட்டது.\n\nஷேக்ஸ்பியரின் கவிதையாக இருந்தாலும் சரி, பீத்தோவனின் இசையாக இருந்தாலும் சரி, வண்ணப் புகைப்படமாக இருந்தாலும் சரி—எல்லா வகையான தகவல்களையும் 0 மற்றும் 1 என்ற பிட்களாக மாற்றிவிடலாம் என்பதை அவர் நிரூபித்தார்!\n\nஅதைவிடப் பெரிய அற்புதம் என்னவென்றால், ஒரு குறிப்பிட்ட எல்லைக்குள் (Channel Capacity) தகவல்களை அனுப்பும்போது, அவற்றுடன் சில கூடுதல் குறியீடுகளை (Error-correcting codes) சேர்த்தால், கம்பியில் எப்பேர்ப்பட்ட இரைச்சல் இருந்தாலும் தகவல்களை ஒரு துளி பிழையுமின்றி மறுமுனையில் மீட்டெடுக்க முடியும் என்பதை கணிதப்பூர்வமாக நிரூபித்தார்!\n\nஇன்று நாம் பயன்படுத்தும் செல்போன்கள், வைஃபை, இணையதளம், செயற்கைக்கோள் தொடர்புகள் என அனைத்து டிஜிட்டல் தொழில்நுட்பங்களுக்கும் வித்திட்டது கிளாட் ஷானனின் இந்த மேதைமைதான்!",
    stem_vocabulary: [
      {
            "term": "தகவல் என்ட்ரோபி (Information Entropy)",
            "definition": "ஒரு செய்தியில் உள்ள நிச்சயமற்ற தன்மை அல்லது புதிய தகவலின் அளவைக் குறிக்கும் கணித அளவீடு."
      },
      {
            "term": "பிட் (Bit - இரும இலக்கம்)",
            "definition": "கணினி மற்றும் டிஜிட்டல் தகவல்தொடர்பின் மிக அடிப்படையான அலகு; இது 0 அல்லது 1 என்ற இரு நிலைகளைக் குறிக்கும்."
      },
      {
            "term": "தகவல் தடம் தாங்குதிறன் (Channel Capacity)",
            "definition": "ஒரு தகவல்தொடர்பு பாதையில் எவ்வித பிழையுமின்றி அதிகபட்சமாக அனுப்பக்கூடிய தகவலின் அளவு."
      },
      {
            "term": "பிழை திருத்தும் குறியீடு (Error-Correcting Code)",
            "definition": "தகவல்கள் கம்பியிலோ காscriptற்றிலோ செல்லும்போது இரைச்சலால் ஏற்படும் பிழைகளைத் தானாகக் கண்டறிந்து திருத்தும் வழிமுறை."
      }
],
    blooms_questions: [
      { level: "நினைவுகூர்க (Remember)", question: "இக்கதையில் விஞ்ஞானி தனது கண்டுபிடிப்பை நிகழ்த்திய முக்கிய தருணம் அல்லது ஆதாரம் எது?" },
      { level: "புரிந்துகொள்க (Understand)", question: "இந்த அறிவியல் கண்டுபிடிப்பு அக்கால மனிதர்களின் பழைய நம்பிக்கைகளை எவ்வாறு மாற்றியமைத்தது?" },
      { level: "பயன்படுத்துக (Apply)", question: "இக்கண்டுபிடிப்பு இன்றைய நவீன கணினி, மருத்துவம் அல்லது விண்வெளிக்கு எவ்வாறு வழிகாட்டுகிறது?" },
      { level: "பகுப்பாய்க (Analyze)", question: "ஆரம்பத்தில் மற்ற விஞ்ஞானிகள் இதனை ஏற்க மறுத்ததற்கான காரணங்கள் மற்றும் அதை முறியடித்த சான்றுகள் யாவை?" },
      { level: "மதிப்பிடுக (Evaluate)", question: "எதிர்ப்புகள் மற்றும் தடைகள் வந்தபோதிலும் தனது ஆய்வில் தளராமல் நின்ற விஞ்ஞானியின் குணம் மாணவர்களுக்கு என்ன கற்பிக்கிறது?" }
    ],
    quiz: [
      { question: "இக்கதையில் விவரிக்கப்பட்ட வரலாற்று முக்கியத்துவம் வாய்ந்த அறிவியல் சாதனை எது?", options: ["ஆதாரங்களுடன் நிறுவப்பட்ட புரட்சிகரமான அறிவியல் உண்மை", "ஒரு தற்காலிகக் கற்பனை", "மறுக்கப்பட்ட ஒரு வதந்தி", "பயனற்ற ஒரு கணிப்பு"], answer: 0 }
    ],
    moral_reflection: "அறிவியல் ஆய்வு என்பது வெறும் புத்தகப் படிப்பல்ல; அது இயற்கை நமக்குக் காட்டும் சான்றுகளை நேர்மையுடன் உற்றுநோக்கி, தடைகளைத் தாண்டி உண்மையை நிலைநாட்டும் தணியாத தேடலாகும்.",
    cultural_context: "உலக அறிவியல் வரலாறு / கணினியியல், மரபியல் மற்றும் நவீன வானியல் சாதனைகள்",
    audio_url: ""
  },
  {
    id: "science-93-von-neumann-stored-program",
    title: "ஜான் வான் நியூமனும் நினைவகமும் செயலியும் இணைந்த கணினி கட்டமைப்பும்",
    slug: "science-93-von-neumann-stored-program",
    collection: "science-stories",
    collection_name: "100 வரலாற்று அறிவியல் கதைகள்",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "First Draft of a Report on the EDVAC",
    source_author: "John von Neumann",
    source_year: "1945",
    source_chapter: "Moore School of Electrical Engineering, University of Pennsylvania Contract W-670-ORD-4926",
    source_edition: "Philadelphia, PA (Distributed June 30, 1945)",
    authenticity_note: "Directly derived from John von Neumann's legendary 1945 101-page typewritten draft defining the stored-program computer architecture (CPU, ALU, control unit, memory, and I/O).",
    summary: "1945-ஆம் ஆண்டு எனியாக் (ENIAC) போன்ற தொடக்ககாலக் கணினிகளில் ஒரு புதிய கணக்கைச் செய்வதற்கு ஆயிரக்கணக்கான வயர்களைக் கையால் பிடுங்கி மாட்ட வேண்டியிருந்ததைக் கண்ட மேதை ஜான் வான் நியூமன், தரவுகளையும் கணினியை இயக்கும் கட்டளைகளையும் (Program) ஒரே நினைவகத்தில் (Memory) சேமித்து இயக்கும் 'வான் நியூமன் கட்டமைப்பு' (Von Neumann Architecture) என்ற உலகளாவிய கணினி வரைபடத்தை உருவாக்கினார்.",
    content: "1940-களின் தொடக்கத்தில், உலகின் முதல் மின்னணுப் பெருங்கணினியான 'எனியாக்' (ENIAC) அமெரிக்காவின் பென்சில்வேனியா பல்கலைக்கழகத்தில் உருவாக்கப்பட்டது. 30 டன் எடை கொண்ட அந்த பிரம்மாண்ட இயந்திரத்தில் 18,000 வெற்றிடக் குழாய்கள் (Vacuum tubes) இருந்தன. அது ஒரு பெரிய உடற்பயிற்சிக் கூடம் அளவுக்கு இடத்தைப் பிடித்திருந்தது.\n\nஆனால் எனியாக்கில் ஒரு பெரிய குறைபாடு இருந்தது: அதில் ஒரு கணக்கீட்டை மாற்றி வேறொரு புதிய கணக்கைச் செய்ய வேண்டுமென்றால், பல பெண்கள் பல நாட்கள் உழைத்து, ஆயிரக்கணக்கான தடித்த வயர்களைக் கையால் பிடுங்கி வேறு துளைகளில் மாட்ட வேண்டும்; ஆயிரக்கணக்கான சுவிட்சுகளைத் திருப்ப வேண்டும்! அதாவது நிரல் (Programming) என்பது உடலுழைப்பால் வயர்களை இணைக்கும் வேலையாக இருந்தது.\n\n1944-இல் ஹங்கேரிய-அமெரிக்க கணித மேதை ஜான் வான் நியூமன் அந்த ஆய்வகத்திற்கு வந்தார். மனித மூளையை விட மின்னல் வேகத்தில் யோசிக்கும் ஆற்றல் படைத்த வான் நியூமன், இந்தக் குறையை உடனே கண்டறிந்தார்.\n\n\"கணக்கிட வேண்டிய எண்களை நினைவகத்தில் மின்னணுவாகச் சேமிக்கும் போது, அந்தக் கணக்கை எப்படிச் செய்ய வேண்டும் என்ற கட்டளைகளை (Program) மட்டும் ஏன் கம்பிகளால் இணைக்க வேண்டும்?\" என்று அவர் கேட்டார்.\n\n1945 ஜூன் 30 அன்று அவர் எழுதிய வரலாற்றுச் சிறப்புமிக்க அறிக்கையில் புரட்சிகரமான புதிய கணினி வரைபடத்தை வெளியிட்டார்:\n1. எண்கணித தர்க்கப் பிரிவு (ALU) - கணக்குகளைச் செய்ய.\n2. கட்டுப்பாட்டுப் பிரிவு (Control Unit) - கட்டளைகளை வழிநடத்த.\n3. நினைவகம் (Memory) - எண்களையும், அவற்றை இயக்கும் மென்பொருள் கட்டளைகளையும் ஒரே இடத்தில் சேமித்து வைக்க!\n4. உள்ளீடு மற்றும் வெளியீடு (I/O).\n\nமென்பொருள் கட்டளைகளையும் எண்களைப் போலவே நினைவகத்திற்குள் சேமித்து வைத்தால், வயர்களை மாற்றாமலேயே ஒரு மைக்ரோ வினாடியில் சதுரங்கம் விளையாடும் நிரலிலிருந்து விண்வெளி ஏவுகணைப் பாதை கணக்கிடும் நிரலுக்குக் கணினியை மாற்றிவிட முடியும்!\n\nஇதுவே வரலாற்றில் **வான் நியூமன் கட்டமைப்பு** (Von Neumann Architecture) என்று அழைக்கப்படுகிறது. இன்று உங்கள் பாக்கெட்டில் உள்ள ஸ்மார்ட்போன் முதல் விண்வெளி சூப்பர் கம்ப்யூட்டர்கள் வரை அனைத்தும் ஜான் வான் நியூமன் வரைந்த அதே கட்டமைப்பில்தான் இயங்குகின்றன!",
    stem_vocabulary: [
      {
            "term": "வான் நியூமன் கட்டமைப்பு (Von Neumann Architecture)",
            "definition": "செயலி (CPU), கட்டுப்பாட்டுப் பிரிவு, நினைவகம் (Memory) மற்றும் உள்ளீடு/வெளியீட்டுச் சாதனங்கள் கொண்ட நவீன கணினிகளின் பொதுவான கட்டமைப்பு."
      },
      {
            "term": "நிரல் சேமிப்புக் கணினி (Stored-Program Computer)",
            "definition": "கணக்கீட்டுத் தரவுகளையும் அதற்கான மென்பொருள் கட்டளைகளையும் ஒரே மின்னணு நினைவகத்தில் சேமித்து இயங்கும் கணினி."
      },
      {
            "term": "மையச் செயலகம் (CPU)",
            "definition": "கணினியின் அனைத்து நிரல் கட்டளைகளையும் படித்து நிறைவேற்றும் மூளையாகச் செயல்படும் முதன்மை மின்னணுச் சுற்று."
      },
      {
            "term": "எண்கணித தர்க்கப் பிரிவு (ALU)",
            "definition": "கூட்டல், கழித்தல் மற்றும் தருக்க ரீதியான முடிவுகளை எடுக்கும் செயலியின் உட்பிரிவு."
      }
],
    blooms_questions: [
      { level: "நினைவுகூர்க (Remember)", question: "இக்கதையில் விஞ்ஞானி தனது கண்டுபிடிப்பை நிகழ்த்திய முக்கிய தருணம் அல்லது ஆதாரம் எது?" },
      { level: "புரிந்துகொள்க (Understand)", question: "இந்த அறிவியல் கண்டுபிடிப்பு அக்கால மனிதர்களின் பழைய நம்பிக்கைகளை எவ்வாறு மாற்றியமைத்தது?" },
      { level: "பயன்படுத்துக (Apply)", question: "இக்கண்டுபிடிப்பு இன்றைய நவீன கணினி, மருத்துவம் அல்லது விண்வெளிக்கு எவ்வாறு வழிகாட்டுகிறது?" },
      { level: "பகுப்பாய்க (Analyze)", question: "ஆரம்பத்தில் மற்ற விஞ்ஞானிகள் இதனை ஏற்க மறுத்ததற்கான காரணங்கள் மற்றும் அதை முறியடித்த சான்றுகள் யாவை?" },
      { level: "மதிப்பிடுக (Evaluate)", question: "எதிர்ப்புகள் மற்றும் தடைகள் வந்தபோதிலும் தனது ஆய்வில் தளராமல் நின்ற விஞ்ஞானியின் குணம் மாணவர்களுக்கு என்ன கற்பிக்கிறது?" }
    ],
    quiz: [
      { question: "இக்கதையில் விவரிக்கப்பட்ட வரலாற்று முக்கியத்துவம் வாய்ந்த அறிவியல் சாதனை எது?", options: ["ஆதாரங்களுடன் நிறுவப்பட்ட புரட்சிகரமான அறிவியல் உண்மை", "ஒரு தற்காலிகக் கற்பனை", "மறுக்கப்பட்ட ஒரு வதந்தி", "பயனற்ற ஒரு கணிப்பு"], answer: 0 }
    ],
    moral_reflection: "அறிவியல் ஆய்வு என்பது வெறும் புத்தகப் படிப்பல்ல; அது இயற்கை நமக்குக் காட்டும் சான்றுகளை நேர்மையுடன் உற்றுநோக்கி, தடைகளைத் தாண்டி உண்மையை நிலைநாட்டும் தணியாத தேடலாகும்.",
    cultural_context: "உலக அறிவியல் வரலாறு / கணினியியல், மரபியல் மற்றும் நவீன வானியல் சாதனைகள்",
    audio_url: ""
  },
  {
    id: "science-94-rosalind-franklin-photo-51",
    title: "ரோசாலிண்ட் பிராங்கிளினும் புகைப்பட 51-இல் தெரிந்த டி.என்.ஏ மூலக்கூறும்",
    slug: "science-94-rosalind-franklin-photo-51",
    collection: "science-stories",
    collection_name: "100 வரலாற்று அறிவியல் கதைகள்",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "Molecular Configuration in Sodium Thymonucleate (Nature, Vol. 171)",
    source_author: "Rosalind E. Franklin & Raymond G. Gosling",
    source_year: "1953",
    source_chapter: "Nature 171, 740–741 (25 April 1953)",
    source_edition: "Macmillan Journals, London",
    authenticity_note: "Directly derived from Rosalind Franklin and Raymond Gosling's May 1952 X-ray diffraction photograph 'Photo 51' of the B-form of DNA, demonstrating helical dimensions, phosphate backbone placement, and symmetry.",
    summary: "1952 மே மாதம் லண்டன் கிங்ஸ் கல்லூரியின் ஆய்வகத்தில், நீர்ச்சத்து நிறைந்த டி.என்.ஏ இழையின் மீது 100 மணி நேரம் எக்ஸ்-கதிர்களைச் செலுத்தி 'புகைப்பட 51' (Photo 51) என்ற உலகப்புகழ் பெற்ற படத்தை எடுத்தார் இயற்பியல் வேதியியலாளர் ரோசாலிண்ட் பிராங்கிளின். அதில் தெரிந்த தெளிவான 'X' வடிவ நிழல், உயிரின் மூலக்கூறான டி.என்.ஏ இரட்டைச் சுருள் அமைப்பைக் கொண்டது என்பதை மறுக்க முடியாத ஆதாரத்துடன் மெய்ப்பித்தது.",
    content: "1951-இல் லண்டன் கிங்ஸ் கல்லூரியில் சேர்ந்த 31 வயது இளம் வேதியியலாளர் ரோசாலிண்ட் பிராங்கிளின், பாரிஸில் பணியாற்றியபோது எக்ஸ்-கதிர் படிகவியலில் உலகத்தரம் வாய்ந்த நிபுணத்துவம் பெற்றிருந்தார். உயிரினங்களின் பரம்பரைப் பண்புகளைக் கடத்தும் 'டி.என்.ஏ' (DNA) மூலக்கூறின் அமைப்பைக் கண்டறியும் கடினமான பணியை அவர் மேற்கொண்டார்.\n\nடி.என்.ஏ-வில் உலர் வடிவம் (A-form), ஈரப்பதம் கொண்ட வடிவம் (B-form) என இரு நிலைகள் இருப்பதை பிராங்கிளின் கண்டறிந்தார். மனித உயிரணுக்களுக்குள் டி.என்.ஏ தண்ணீரில் தான் மிதக்கிறது என்பதை உணர்ந்த அவர், ஆய்வகத்தில் ஈரப்பதத்தைக் கட்டுப்படுத்தும் பிரத்யேகக் கருவியை உருவாக்கினார்.\n\nமனிதத் தலைமுடியை விட மெல்லிய ஒரு டி.என்.ஏ இழையை ஒரு கண்ணாடி ஊசியின் முனையில் தொங்கவிட்டு, அதன் மீது தொடர்ந்து 100 மணி நேரம் எக்ஸ்-கதிர்களைப் பாய்ச்சினார்.\n\nஇருட்டறையில் அந்தக் கண்ணாடிப் புகைப்படத் தட்டை வேதிநீரில் கழுவி எடுத்தபோது, உலகையே வியப்பில் ஆழ்த்திய **புகைப்பட 51** (Photo 51) உருவானது!\n\nஅந்தப் புகைப்படத்தின் மையத்தில் ஓர் அற்புதமான கறுப்பு நிற 'X' வடிவம் மின்னியது! எக்ஸ்-கதிர் ஒளியியலின் விதிகளின்படி, ஒரு மூலக்கூறின் நிழல் 'X' வடிவில் விழுந்தால், அது நிச்சயம் ஒரு **சுழல் ஏணி** (Helix) வடிவத்தில் மட்டுமே இருக்க முடியும்!\n\nமேலும், அந்தப் படத்தில் தெரிந்த இடைவெளிகள், அது ஒற்றைச் சுருள் அல்ல, இரண்டு இழைகள் ஒன்றாகப் பின்னப்பட்ட 'இரட்டைச் சுருள்' (Double Helix) என்பதைத் துல்லியமாக உணர்த்தின. மேலும் பாஸ்பேட் மூலக்கூறுகள் வெளிப்புறத்தில் சட்டமாகவும், கார மூலக்கூறுகள் உள்புறமாகவும் அமைந்துள்ளன என்பதை பிராங்கிளின் தன் குறிப்பேடுகளில் துல்லியமாகக் கணக்கிட்டு வைத்திருந்தார்.\n\nஆனால் அவரது அனுமதியின்றி, அந்தப் புகழ்பெற்ற புகைப்படம் 1953 தொடக்கத்தில் ஜேம்ஸ் வாட்சன் மற்றும் பிரான்சிஸ் கிரிக்கிடம் காட்டப்பட்டது. அந்தப் படத்தைப் பார்த்த நொடியில் வாட்சன் திகைத்துப் போனார்; அதுவரை அவர்களுக்குப் பிடிபடாத டி.என்.ஏ-வின் வடிவியல் ரகசியம் அந்த ஒற்றைப் புகைப்படத்தால் உடனே தெளிவாகியது.\n\nதுரதிர்ஷ்டவசமாக, 1958-இல் தனது 37-ஆவது வயதிலேயே புற்றுநோயால் ரோசாலிண்ட் பிராங்கிளின் மரணமடைந்தார். ஆனால் இன்று, உயிரின் மூலக்கூறான டி.என்.ஏ-வின் முகவரியை உலகிற்கு முதன்முதலில் படம் பிடித்துக் காட்டிய மாபெரும் மேதையாக வரலாற்றில் ரோசாலிண்ட் பிராங்கிளின் பெயர் பொன்னெழுத்துக்களால் பொறிக்கப்பட்டுள்ளது.",
    stem_vocabulary: [
      {
            "term": "எக்ஸ்-கதிர் படிகவியல் (X-ray Crystallography)",
            "definition": "படிக மூலக்கூறுகளின் மீது எக்ஸ்-கதிர்களைச் செலுத்தி, அவை சிதறும் கோணங்களைக் கொண்டு மூலக்கூறுகளின் முப்பரிமாண அணு அமைப்பைக் கண்டறியும் அறிவியல் நுட்பம்."
      },
      {
            "term": "புகைப்பட 51 (Photo 51)",
            "definition": "1952 மே மாதம் ரோசாலிண்ட் பிராங்கிளின் மற்றும் ரேமண்ட் கோஸ்லிங் எடுத்த பி-வடிவ டி.என்.ஏ மூலக்கூறின் புகழ்பெற்ற எக்ஸ்-கதிர் சிதறல் படம்."
      },
      {
            "term": "இரட்டைச் சுருள் (Double Helix)",
            "definition": "டி.என்.ஏ மூலக்கூறு ஒரு சுழல் ஏணியைப் போல இரண்டு இழைகளால் ஒன்றோடொன்று பின்னப்பட்ட வடிவம்."
      },
      {
            "term": "பாஸ்பேட் எலும்புக்கூடு (Phosphate Backbone)",
            "definition": "டி.என்.ஏ இழையின் வெளிப்புறத்தில் சர்க்கரை மற்றும் பாஸ்பேட் மூலக்கூறுகள் இணைந்து உருவாக்கும் உறுதிமிக்க வெளிப்புறச் சட்டம்."
      }
],
    blooms_questions: [
      { level: "நினைவுகூர்க (Remember)", question: "இக்கதையில் விஞ்ஞானி தனது கண்டுபிடிப்பை நிகழ்த்திய முக்கிய தருணம் அல்லது ஆதாரம் எது?" },
      { level: "புரிந்துகொள்க (Understand)", question: "இந்த அறிவியல் கண்டுபிடிப்பு அக்கால மனிதர்களின் பழைய நம்பிக்கைகளை எவ்வாறு மாற்றியமைத்தது?" },
      { level: "பயன்படுத்துக (Apply)", question: "இக்கண்டுபிடிப்பு இன்றைய நவீன கணினி, மருத்துவம் அல்லது விண்வெளிக்கு எவ்வாறு வழிகாட்டுகிறது?" },
      { level: "பகுப்பாய்க (Analyze)", question: "ஆரம்பத்தில் மற்ற விஞ்ஞானிகள் இதனை ஏற்க மறுத்ததற்கான காரணங்கள் மற்றும் அதை முறியடித்த சான்றுகள் யாவை?" },
      { level: "மதிப்பிடுக (Evaluate)", question: "எதிர்ப்புகள் மற்றும் தடைகள் வந்தபோதிலும் தனது ஆய்வில் தளராமல் நின்ற விஞ்ஞானியின் குணம் மாணவர்களுக்கு என்ன கற்பிக்கிறது?" }
    ],
    quiz: [
      { question: "இக்கதையில் விவரிக்கப்பட்ட வரலாற்று முக்கியத்துவம் வாய்ந்த அறிவியல் சாதனை எது?", options: ["ஆதாரங்களுடன் நிறுவப்பட்ட புரட்சிகரமான அறிவியல் உண்மை", "ஒரு தற்காலிகக் கற்பனை", "மறுக்கப்பட்ட ஒரு வதந்தி", "பயனற்ற ஒரு கணிப்பு"], answer: 0 }
    ],
    moral_reflection: "அறிவியல் ஆய்வு என்பது வெறும் புத்தகப் படிப்பல்ல; அது இயற்கை நமக்குக் காட்டும் சான்றுகளை நேர்மையுடன் உற்றுநோக்கி, தடைகளைத் தாண்டி உண்மையை நிலைநாட்டும் தணியாத தேடலாகும்.",
    cultural_context: "உலக அறிவியல் வரலாறு / கணினியியல், மரபியல் மற்றும் நவீன வானியல் சாதனைகள்",
    audio_url: ""
  },
  {
    id: "science-95-watson-crick-double-helix",
    title: "வாட்சன்-கிரிக்: உயிரின் மூலக் குறியீடான இரட்டைச் சுருள் ஏணி",
    slug: "science-95-watson-crick-double-helix",
    collection: "science-stories",
    collection_name: "100 வரலாற்று அறிவியல் கதைகள்",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid (Nature, Vol. 171)",
    source_author: "J. D. Watson & F. H. C. Crick",
    source_year: "1953",
    source_chapter: "Nature 171, 737–738 (25 April 1953)",
    source_edition: "Macmillan Journals, London",
    authenticity_note: "Based on James Watson and Francis Crick's historic April 25, 1953 Nature paper proposing the double-helical model of DNA with complementary base pairs (Adenine-Thymine, Guanine-Cytosine).",
    summary: "1953 பிப்ரவரி 28 அன்று கேம்பிரிட்ஜ் காவென்டிஷ் ஆய்வகத்தில், கார்ட்போர்டு அட்டைகளில் வெட்டிய மூலக்கூறுகளை ஒன்றோடொன்று பொருத்திப் பார்த்த ஜேம்ஸ் வாட்சனும் பிரான்சிஸ் கிரிக்கும், அடினைன் தைமினுடனும், குவானைன் சைட்டோசினுடனும் மட்டுமே இணையும் என்ற விதியைக் கண்டறிந்து, உயிரின் இரட்டைச் சுருள் அமைப்பைக் கண்டுபிடித்ததாக அறிவித்தனர்.",
    content: "1952-ஆம் ஆண்டின் இறுதியில், கேம்பிரிட்ஜ் காவென்டிஷ் ஆய்வகத்தில் 24 வயது அமெரிக்க மரபியலாளர் ஜேம்ஸ் வாட்சனும், 36 வயது பிரிட்டிஷ் இயற்பியலாளர் பிரான்சிஸ் கிரிக்கும் ஒரு தீவிரமான அறிவியல் பந்தயத்தில் ஈடுபட்டிருந்தனர். உலகின் தலைசிறந்த வேதியியலாளர் லினஸ் பாலிங்கை விட முந்தி, டி.என்.ஏ மூலக்கூறின் வடிவத்தைக் கண்டுபிடிப்பதே அவர்களின் இலக்காக இருந்தது.\n\nரோசாலிண்ட் பிராங்கிளினின் எக்ஸ்-கதிர் புகைப்படத் தரவுகள் அவர்களுக்கு டி.என்.ஏ-வின் அகலம் மற்றும் சுழல் நீளத்தின் அளவுகளைத் துல்லியமாக உணர்த்தின. 1953 பிப்ரவரி 28 அன்று காலை, வாட்சன் தனது ஆய்வக மேஜையில் நான்கு வேதி மூலக்கூறுகளான அடினைன் (A), தைமின் (T), குவானைன் (G), சைட்டோசின் (C) ஆகியவற்றை அட்டைப் பெட்டித் தாள்களில் வெட்டி வைத்து விளையாடிக்கொண்டிருந்தார்.\n\nதிடீரென அவர் அந்த அட்டைகளைப் பொருத்தியபோது ஓர் அற்புதம் நிகழ்ந்தது: ஓர் அடினைனும் தைமினும் இணையும் போது ஏற்படும் அகலமும் வடிவமும், ஒரு குவானைனும் சைட்டோசினும் இணையும் போது ஏற்படும் அகலமும் வடிவமும் மில்லிமீட்டர் அளவில் அச்சு அசலாக ஒரே மாதிரி இருந்தன!\n\nகைக் கொட்டித் துள்ளிக் குதித்தார் கிரிக்! இதன் பொருள்: டி.என்.ஏ ஒரு சுழல் ஏணி என்றால், அதன் படிகள் எப்போதும் 'A-T' மற்றும் 'G-C' என்றே அமைகின்றன! ஒரு பக்கத்து இழை தெரிந்தால், தானாகவே அடுத்த பக்கத்து இழையின் எழுத்துக்கள் தெரிந்துவிடும்!\n\nஅன்று மதிய உணவு நேரத்தில் கேம்பிரிட்ஜில் உள்ள 'தி ஈகிள்' உணவகத்திற்குள் ஓடிவந்த கிரிக், அங்கே இருந்தவர்களிடம் உற்சாகத்துடன் கூச்சலிட்டார்: *\"நாங்கள் வாழ்க்கையின் ரகசியத்தைக் கண்டுபிடித்துவிட்டோம்!\"*\n\n1953 ஏப்ரல் 25 அன்று *நேச்சர்* இதழில் வெளியான அவர்களது ஒரு பக்கக் கட்டுரை உலக வரலாற்றையே மாற்றியது:\n*\"நாங்கள் முன்வைக்கும் இந்த கார இணை முறை, பரம்பரை மரபணுக்கள் எவ்வாறு தங்களை நகலெடுத்துப் பெருக்குகின்றன என்ற அற்புதமான ரகசியத்தை உடனடியாக விளக்குகிறது!\"*\n\nஒரு செல் இரண்டாகப் பிரியும்போது, இந்த டி.என்.ஏ சுழல் ஏணி நடுவே ஜிப் கழல்வது போல இரண்டாகப் பிரிந்து, ஒவ்வொரு இழையும் தனது இரட்டையைத் தானே தயாரித்துக் கொள்கிறது! உயிரினங்கள் எவ்வாறு வாழ்கின்றன, பரம்பரை எவ்வாறு தொடர்கிறது என்ற உலகப் புதிருக்கு வாட்சனும் கிரிக்கும் விடை கண்டனர்.",
    stem_vocabulary: [
      {
            "term": "கார இணை விதி (Base Pairing Rule)",
            "definition": "டி.என்.ஏ-வில் அடினைன் எப்போதும் தைமினுடனும் ($A-T$), குவானைன் எப்போதும் சைட்டோசினுடனும் ($G-C$) மட்டுமே இணையும் என்ற விதி."
      },
      {
            "term": "ஹைட்ரஜன் பிணைப்பு (Hydrogen Bonding)",
            "definition": "இரண்டு டி.என்.ஏ இழைகளை நடுவே சுழல் ஏணியின் படிகள் போல ஒன்றாகப் பிணைத்து வைத்திருக்கும் மென்மையான வேதிப் பிணைப்பு."
      },
      {
            "term": "எதிர்-இணை இழைகள் (Antiparallel Strands)",
            "definition": "டி.என்.ஏ-வின் இரண்டு இழைகளும் ஒன்றுக்கொன்று எதிரான திசைகளில் ஓடும் வடிவியல் அமைப்பு."
      },
      {
            "term": "மரபணுக் குறியீடு (Genetic Code)",
            "definition": "டி.என்.ஏ-வில் உள்ள காரங்களின் வரிசைக்கிரமமே உடலின் அனைத்துப் புரதங்களையும் உருவாக்கும் கட்டளைகளாகச் செயல்படும் முறை."
      }
],
    blooms_questions: [
      { level: "நினைவுகூர்க (Remember)", question: "இக்கதையில் விஞ்ஞானி தனது கண்டுபிடிப்பை நிகழ்த்திய முக்கிய தருணம் அல்லது ஆதாரம் எது?" },
      { level: "புரிந்துகொள்க (Understand)", question: "இந்த அறிவியல் கண்டுபிடிப்பு அக்கால மனிதர்களின் பழைய நம்பிக்கைகளை எவ்வாறு மாற்றியமைத்தது?" },
      { level: "பயன்படுத்துக (Apply)", question: "இக்கண்டுபிடிப்பு இன்றைய நவீன கணினி, மருத்துவம் அல்லது விண்வெளிக்கு எவ்வாறு வழிகாட்டுகிறது?" },
      { level: "பகுப்பாய்க (Analyze)", question: "ஆரம்பத்தில் மற்ற விஞ்ஞானிகள் இதனை ஏற்க மறுத்ததற்கான காரணங்கள் மற்றும் அதை முறியடித்த சான்றுகள் யாவை?" },
      { level: "மதிப்பிடுக (Evaluate)", question: "எதிர்ப்புகள் மற்றும் தடைகள் வந்தபோதிலும் தனது ஆய்வில் தளராமல் நின்ற விஞ்ஞானியின் குணம் மாணவர்களுக்கு என்ன கற்பிக்கிறது?" }
    ],
    quiz: [
      { question: "இக்கதையில் விவரிக்கப்பட்ட வரலாற்று முக்கியத்துவம் வாய்ந்த அறிவியல் சாதனை எது?", options: ["ஆதாரங்களுடன் நிறுவப்பட்ட புரட்சிகரமான அறிவியல் உண்மை", "ஒரு தற்காலிகக் கற்பனை", "மறுக்கப்பட்ட ஒரு வதந்தி", "பயனற்ற ஒரு கணிப்பு"], answer: 0 }
    ],
    moral_reflection: "அறிவியல் ஆய்வு என்பது வெறும் புத்தகப் படிப்பல்ல; அது இயற்கை நமக்குக் காட்டும் சான்றுகளை நேர்மையுடன் உற்றுநோக்கி, தடைகளைத் தாண்டி உண்மையை நிலைநாட்டும் தணியாத தேடலாகும்.",
    cultural_context: "உலக அறிவியல் வரலாறு / கணினியியல், மரபியல் மற்றும் நவீன வானியல் சாதனைகள்",
    audio_url: ""
  },
  {
    id: "science-96-grace-hopper-moth-in-relay",
    title: "கிரேஸ் ஹாப்பரும் முதல் கணினிப் பூச்சியும் மனித மொழியில் இயங்கிய நிரலும்",
    slug: "science-96-grace-hopper-moth-in-relay",
    collection: "science-stories",
    collection_name: "100 வரலாற்று அறிவியல் கதைகள்",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "The Education of a Computer (Proceedings of the ACM)",
    source_author: "Grace Murray Hopper",
    source_year: "1952",
    source_chapter: "ACM '52: Proceedings of the 1952 ACM National Meeting, pp. 243–249",
    source_edition: "Association for Computing Machinery, New York",
    authenticity_note: "Based on Grace Hopper's September 9, 1947 Harvard Mark II logbook entry pasting a real moth ('First actual case of bug being found') and her pioneering 1952 invention of the A-0 compiler translating English words into machine code.",
    summary: "1947-ஆம் ஆண்டு ஹார்வர்ட் மார்க் II கணினியின் ரிலேவில் சிக்கிய ஒரு உண்மையான அந்துப்பூச்சியை (Moth) எடுத்துப் பதிவேட்டில் ஒட்டி 'டிபக்கிங்' (Debugging - பிழை திருத்தம்) என்ற சொல்லை உலகிற்குத் தந்தவர் கிரேஸ் ஹாப்பர். 1952-இல் எண்களால் மட்டுமே இயங்கிய கணினிகளுக்கு மனித மொழியான ஆங்கில வார்த்தைகளைப் புரிந்துகொள்ளும் முதல் 'கம்பைலர்' (Compiler) மென்பொருளை உருவாக்கி கணினிப் புரட்சியை ஏற்படுத்தினார்.",
    content: "1940-களில் கணினிகளுக்கு நிரல் எழுதுவது என்பது மிகக் கடினமான, தலை சுற்ற வைக்கும் வேலையாக இருந்தது. பொறியாளர்கள் 0 மற்றும் 1 என்ற பைனரி எண்களை மட்டுமே வைத்து ஒவ்வொரு கட்டளையையும் நேரடியாக எழுத வேண்டியிருந்தது. ஒரு சிறிய எண் மாறினாலும் ஒட்டுமொத்தக் கணக்கீடும் பாழாகிவிடும்.\n\nஅமெரிக்கக் கடற்படை அதிகாரியும் கணிதப் பேராசிரியருமான கிரேஸ் ஹாப்பர், ஹார்வர்ட் பல்கலைக்கழகத்தின் மார்க் II கணினியில் பணியாற்றிக் கொண்டிருந்தார். 1947 செப்டம்பர் மாதத்தின் ஒரு புழுக்கமான மாலையில், அந்த பிரம்மாண்ட கணினி திடீரென வேலை செய்வதை நிறுத்தியது!\n\nகாரணம் என்னவென்று தேடியபோது, பேனல் F-இல் இருந்த ரிலே #70 என்ற மின்காந்த சுவிட்சின் உள்ளே ஒரு சிறிய அந்துப்பூச்சி (Moth) மாட்டிக்கொண்டு இறக்கைகளை அடித்து சுற்றை முடக்கியிருந்தது! கிரேஸ் ஹாப்பர் ஒரு சாமணம் கொண்டு அந்தப் பூச்சியை எடுத்து, அன்றைய அதிகாரப்பூர்வ ஆய்வேட்டில் ஒட்டி வைத்தார்; அதன் கீழே, *\"உண்மையான பூச்சி (Bug) கணினியில் பிடிபட்ட முதல் சம்பவம்!\"* என்று நகைச்சுவையாகக் குறித்து வைத்தார். அதுவே இன்று கணினி உலகில் புழங்கும் 'பக்' (Bug) மற்றும் 'டிபக்கிங்' (Debugging) என்ற வரலாற்றுச் சொல்லாக மாறியது!\n\nஆனால் கிரேஸ் ஹாப்பரின் சிந்தனை அதைவிடப் பெரியதாக இருந்தது: *\"மனிதர்கள் ஏன் இயந்திரத்தின் மொழியான 0 மற்றும் 1-ஐப் படிக்க வேண்டும்? கணினிக்கு ஏன் மனிதர்களின் ஆங்கில மொழியைக் கற்றுக்கொடுக்கக் கூடாது?\"* என்று கேட்டார்.\n\nஅக்காலத்து மூத்த விஞ்ஞானிகள் அவரைப் பார்த்துச் சிரித்தனர்: *\"கணினிகளுக்கு எண்களைத் தவிர வார்த்தைகள் புரியாது!\"* என்றனர்.\n\nஆனால் கிரேஸ் ஹாப்பர் பின்வாங்கவில்லை. 1952-இல் உலகின் முதல் **கம்பைலர்** (Compiler) மென்பொருளான 'A-0' அமைப்பை உருவாக்கினார்! இது நாம் எழுதும் `ADD`, `PRINT` போன்ற ஆங்கில வார்த்தைகளைத் தானாகவே கணினிக்குப் புரியும் 0 மற்றும் 1 எண்களாக மாற்றும் ஒரு மாய மொழிபெயர்ப்பாளராகச் செயல்பட்டது!\n\nஅதன்பின்னர் எளிய மனிதர்களும் கணினியை இயக்கும் வகையில் 'COBOL' மொழியை உருவாக்க அவர் உதவினார். இன்று உலகம் முழுவதும் நாம் பயன்படுத்தும் பைதான் (Python), ஜாவாஸ்கிரிப்ட் போன்ற அனைத்து நவீன கணினி மொழிகளுக்கும் அடித்தளமிட்டவர் இந்த வீரப் பெண்மணி கிரேஸ் ஹாப்பர் ஆவார்!",
    stem_vocabulary: [
      {
            "term": "தொகுப்பி (Compiler)",
            "definition": "மனிதர்கள் எழுதும் ஆங்கில வழிமுறைகளை (Source Code) கணினிக்குப் புரியும் 0 மற்றும் 1 இரும இயந்திரக் குறியீடுகளாக மாற்றும் மென்பொருள்."
      },
      {
            "term": "பிழை திருத்தம் (Debugging)",
            "definition": "கணினி மென்பொருளிலோ அல்லது வன்பொருளிலோ ஏற்படும் தவறுகளையும் கோளாறுகளையும் கண்டறிந்து நீக்கும் செயல்முறை."
      },
      {
            "term": "இயந்திர மொழிக் குறியீடு (Machine Code)",
            "definition": "கணினியின் செயலி நேரடியாகப் படித்துச் செயல்படக்கூடிய 0 மற்றும் 1 எண்களால் ஆன பைனரி மொழி."
      },
      {
            "term": "கோபால் (COBOL)",
            "definition": "மனிதர்கள் அன்றாடம் பேசும் எளிய ஆங்கில வார்த்தைகளைக் கொண்டு வணிகக் கணக்குகளைச் செய்ய உருவாக்கப்பட்ட தொடக்ககால நிரலாக்க மொழி."
      }
],
    blooms_questions: [
      { level: "நினைவுகூர்க (Remember)", question: "இக்கதையில் விஞ்ஞானி தனது கண்டுபிடிப்பை நிகழ்த்திய முக்கிய தருணம் அல்லது ஆதாரம் எது?" },
      { level: "புரிந்துகொள்க (Understand)", question: "இந்த அறிவியல் கண்டுபிடிப்பு அக்கால மனிதர்களின் பழைய நம்பிக்கைகளை எவ்வாறு மாற்றியமைத்தது?" },
      { level: "பயன்படுத்துக (Apply)", question: "இக்கண்டுபிடிப்பு இன்றைய நவீன கணினி, மருத்துவம் அல்லது விண்வெளிக்கு எவ்வாறு வழிகாட்டுகிறது?" },
      { level: "பகுப்பாய்க (Analyze)", question: "ஆரம்பத்தில் மற்ற விஞ்ஞானிகள் இதனை ஏற்க மறுத்ததற்கான காரணங்கள் மற்றும் அதை முறியடித்த சான்றுகள் யாவை?" },
      { level: "மதிப்பிடுக (Evaluate)", question: "எதிர்ப்புகள் மற்றும் தடைகள் வந்தபோதிலும் தனது ஆய்வில் தளராமல் நின்ற விஞ்ஞானியின் குணம் மாணவர்களுக்கு என்ன கற்பிக்கிறது?" }
    ],
    quiz: [
      { question: "இக்கதையில் விவரிக்கப்பட்ட வரலாற்று முக்கியத்துவம் வாய்ந்த அறிவியல் சாதனை எது?", options: ["ஆதாரங்களுடன் நிறுவப்பட்ட புரட்சிகரமான அறிவியல் உண்மை", "ஒரு தற்காலிகக் கற்பனை", "மறுக்கப்பட்ட ஒரு வதந்தி", "பயனற்ற ஒரு கணிப்பு"], answer: 0 }
    ],
    moral_reflection: "அறிவியல் ஆய்வு என்பது வெறும் புத்தகப் படிப்பல்ல; அது இயற்கை நமக்குக் காட்டும் சான்றுகளை நேர்மையுடன் உற்றுநோக்கி, தடைகளைத் தாண்டி உண்மையை நிலைநாட்டும் தணியாத தேடலாகும்.",
    cultural_context: "உலக அறிவியல் வரலாறு / கணினியியல், மரபியல் மற்றும் நவீன வானியல் சாதனைகள்",
    audio_url: ""
  },
  {
    id: "science-97-tim-berners-lee-world-wide-web",
    title: "டிம் பெர்னர்ஸ்-லீயும் உலகை இணைத்த இணைய வலையும் (WWW)",
    slug: "science-97-tim-berners-lee-world-wide-web",
    collection: "science-stories",
    collection_name: "100 வரலாற்று அறிவியல் கதைகள்",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "Information Management: A Proposal (CERN Report) & Weaving the Web",
    source_author: "Tim Berners-Lee",
    source_year: "1989",
    source_chapter: "CERN Archive March 1989 & Chapter 1: Enquire Within Upon Everything",
    source_edition: "HarperSanFrancisco, New York (1999)",
    authenticity_note: "Based on Tim Berners-Lee's original March 1989 CERN proposal annotated by his supervisor Mike Sendall as 'Vague but exciting...', creating HTML, HTTP, URLs, and the first web browser/server.",
    summary: "1989-ஆம் ஆண்டு சுவிட்சர்லாந்தின் செர்ன் (CERN) ஆய்வகத்தில் பணியாற்றிய பிரிட்டிஷ் மென்பொருள் பொறியாளர் டிம் பெர்னர்ஸ்-லீ, வெவ்வேறு கணினிகளுக்கு இடையே தகவல்களை எளிதாகப் பரிமாறிக்கொள்ள முடியாமல் விஞ்ஞானிகள் திணறுவதைக் கண்டு HTML, HTTP மற்றும் உலகளாவிய இணைய வலையை (World Wide Web) உருவாக்கினார். மேலும் கோடிக்கணக்கான டாலர்கள் மதிப்புடைய தனது இந்த கண்டுபிடிப்பிற்கு காப்புரிமை பெறாமல் உலக மக்கள் அனைவருக்கும் முற்றிலும் இலவசமாக வழங்கினார்.",
    content: "1989-ஆம் ஆண்டு சுவிட்சர்லாந்தின் செர்ன் (CERN) துகள் இயற்பியல் ஆய்வகத்தில் உலகெங்கிலும் இருந்து வந்த ஆயிரக்கணக்கான விஞ்ஞானிகள் ஆராய்ச்சி செய்து கொண்டிருந்தனர். ஆனால் அங்கே ஒரு பெரிய தலைவலி இருந்தது: ஒவ்வொரு நாட்டின் விஞ்ஞானியும் வெவ்வேறு வகையான கணினிகளையும் மென்பொருள்களையும் பயன்படுத்தினர். ஒரு கணினியில் உள்ள தகவலை மற்றொரு கணினியால் படிக்க முடியாது; ஒரு ஆவணத்தைப் பார்க்க வேண்டுமென்றால் அந்த குறிப்பிட்ட கணினியின் முன் சென்று உட்கார வேண்டும் அல்லது தபாலில் அனுப்ப வேண்டும்!\n\nபிரிட்டிஷ் மென்பொருள் வல்லுநர் டிம் பெர்னர்ஸ்-லீ இதற்கு ஒரு புரட்சிகரமான தீர்வைக் கண்டார். புத்தகங்களில் உள்ள சுட்டெண்களைப் போல, கணினித் திரையில் ஒரு வார்த்தையைக் கிளிக் செய்தால் அது உலகத்தின் எந்த மூலையில் உள்ள மற்றொரு கணினியின் ஆவணத்திற்கும் உடனே கொண்டு செல்லும் 'ஹைபர்டெக்ஸ்ட்' (Hypertext) என்ற அற்புதக் கருத்தை முன்வைத்தார்.\n\n1989 மார்ச் மாதம் தனது தலைமை அதிகாரி மைக் செண்டாலிடம் *தகவல் மேலாண்மை: ஒரு முன்மொழிவு* என்ற திட்ட அறிக்கையை சமர்ப்பித்தார். அதைப் படித்த அதிகாரி அதன் அட்டையில், *\"தெளிவற்றது... ஆனால் மிகவும் உற்சாகமூட்டுகிறது!\"* என்று குறித்து அனுமதி அளித்தார்.\n\n1990-இன் இறுதியில் ஒரு NeXT கணினியில் அமர்ந்து சில மாதங்களிலேயே மூன்று அற்புதம் வாய்ந்த தூண்களை உருவாக்கினார்:\n1. **HTML** - பக்கங்களை வடிவமைக்கும் மொழி.\n2. **URL** - உலகில் உள்ள ஒவ்வொரு ஆவணத்திற்கும் ஒரு தனித்துவமான வலை முகவரி.\n3. **HTTP** - தகவல்களைப் பரிமாறும் உலகளாவிய விதிமுறை.\n\n1990 கிறிஸ்துமஸ் அன்று, உலகின் முதல் வலைப்பக்கமான `http://info.cern.ch` தனது மேஜைக் கணினியில் இயங்கத் தொடங்கியது. அதன் மீது, *\"இது ஒரு சர்வர் கணினி; தயவுசெய்து இதை அணைக்காதீர்கள்!\"* என்று சிவப்பு மையினால் எழுதி ஒட்டினார்.\n\nடிம் பெர்னர்ஸ்-லீ நினைத்திருந்தால் உலகளாவிய இணைய வலைக்குக் காப்புரிமை பெற்று உலகின் மிகப்பெரிய பணக்காரராக மாறியிருக்கலாம். ஆனால் 1993 ஏப்ரலில், உலகளாவிய இணையத்தை எந்தவொரு கட்டணமும் இன்றி உலகின் ஒட்டுமொத்த மனிதகுலத்திற்கும் இலவசமாக வழங்குமாறு செர்ன் நிறுவனத்தை ஒப்புக்கொள்ள வைத்தார். அவரது அந்த தன்னலமற்ற தியாகமே இன்று உலக மக்கள் அனைவரையும் ஒரே குடும்பமாக இணைத்துள்ளது!",
    stem_vocabulary: [
      {
            "term": "உலகளாவிய இணைய வலை (World Wide Web)",
            "definition": "ஹைபர்டெக்ஸ்ட் இணைப்புகள் மூலம் ஆவணங்களையும் தகவல்களையும் உலகெங்கிலும் உள்ள கணினிகளில் இணைக்கும் தகவல் கட்டமைப்பு."
      },
      {
            "term": "ஹெச்.டி.டி.பி (HTTP)",
            "definition": "இணையதளப் பக்கங்களையும் தகவல்களையும் ஒரு கணினியிலிருந்து மற்றொரு கணினிக்கு அனுப்பிப் பெறும் தகவல் தொடர்பு நெறிமுறை."
      },
      {
            "term": "ஹெச்.டி.எம்.எல் (HTML)",
            "definition": "இணைய உலாவிகளில் (Web Browsers) தகவல்களையும் படங்களையும் திரையில் காட்டும் ஆவணங்களை வடிவமைக்கும் மொழி."
      },
      {
            "term": "வலை முகவரி (URL)",
            "definition": "இணையத்தில் உள்ள ஒரு குறிப்பிட்ட வலைப்பக்கத்தையோ அல்லது கோப்பையோ துல்லியமாகக் கண்டறிய உதவும் உலகளாவிய முகவரி."
      }
],
    blooms_questions: [
      { level: "நினைவுகூர்க (Remember)", question: "இக்கதையில் விஞ்ஞானி தனது கண்டுபிடிப்பை நிகழ்த்திய முக்கிய தருணம் அல்லது ஆதாரம் எது?" },
      { level: "புரிந்துகொள்க (Understand)", question: "இந்த அறிவியல் கண்டுபிடிப்பு அக்கால மனிதர்களின் பழைய நம்பிக்கைகளை எவ்வாறு மாற்றியமைத்தது?" },
      { level: "பயன்படுத்துக (Apply)", question: "இக்கண்டுபிடிப்பு இன்றைய நவீன கணினி, மருத்துவம் அல்லது விண்வெளிக்கு எவ்வாறு வழிகாட்டுகிறது?" },
      { level: "பகுப்பாய்க (Analyze)", question: "ஆரம்பத்தில் மற்ற விஞ்ஞானிகள் இதனை ஏற்க மறுத்ததற்கான காரணங்கள் மற்றும் அதை முறியடித்த சான்றுகள் யாவை?" },
      { level: "மதிப்பிடுக (Evaluate)", question: "எதிர்ப்புகள் மற்றும் தடைகள் வந்தபோதிலும் தனது ஆய்வில் தளராமல் நின்ற விஞ்ஞானியின் குணம் மாணவர்களுக்கு என்ன கற்பிக்கிறது?" }
    ],
    quiz: [
      { question: "இக்கதையில் விவரிக்கப்பட்ட வரலாற்று முக்கியத்துவம் வாய்ந்த அறிவியல் சாதனை எது?", options: ["ஆதாரங்களுடன் நிறுவப்பட்ட புரட்சிகரமான அறிவியல் உண்மை", "ஒரு தற்காலிகக் கற்பனை", "மறுக்கப்பட்ட ஒரு வதந்தி", "பயனற்ற ஒரு கணிப்பு"], answer: 0 }
    ],
    moral_reflection: "அறிவியல் ஆய்வு என்பது வெறும் புத்தகப் படிப்பல்ல; அது இயற்கை நமக்குக் காட்டும் சான்றுகளை நேர்மையுடன் உற்றுநோக்கி, தடைகளைத் தாண்டி உண்மையை நிலைநாட்டும் தணியாத தேடலாகும்.",
    cultural_context: "உலக அறிவியல் வரலாறு / கணினியியல், மரபியல் மற்றும் நவீன வானியல் சாதனைகள்",
    audio_url: ""
  },
  {
    id: "science-98-doudna-charpentier-crispr-scissors",
    title: "டவுட்னாவும் சார்பெண்டியரும் மரபணுவை வெட்டித் தைத்த மூலக்கூறு கத்திரிக்கோலும்",
    slug: "science-98-doudna-charpentier-crispr-scissors",
    collection: "science-stories",
    collection_name: "100 வரலாற்று அறிவியல் கதைகள்",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity (Science, Vol. 337)",
    source_author: "Martin Jinek, Krzysztof Chylinski, Ines Fonfara, Michael Hauer, Jennifer A. Doudna, Emmanuelle Charpentier",
    source_year: "2012",
    source_chapter: "Science 337, 816–821 (17 August 2012)",
    source_edition: "American Association for the Advancement of Science",
    authenticity_note: "Based on Jennifer Doudna and Emmanuelle Charpentier's breakthrough 2012 paper repurposing bacterial CRISPR-Cas9 as a programmable genome-editing technology, winning the 2020 Nobel Prize in Chemistry.",
    summary: "பாக்டீரியாக்கள் தங்களைத் தாக்கும் வைரஸ்களிடமிருந்து எவ்வாறு தற்காத்துக் கொள்கின்றன என்பதை ஆராய்ந்த ஜெனிபர் டவுட்னாவும் இம்மானுவேல் சார்பெண்டியரும், பாக்டீரியாவில் உள்ள Cas9 என்ற நொதியை செயற்கை ஆர்.என்.ஏ வழிகாட்டி மூலம் இயக்கி, ஒரு கணினியில் எழுத்துப் பிழையைத் திருத்துவது போல உயிரினங்களின் டி.என்.ஏ-வை மிகத் துல்லியமாக வெட்டித் தைக்கும் 'CRISPR-Cas9' மூலக்கூறு கத்திரிக்கோலைக் கண்டுபிடித்தனர்.",
    content: "கோடிக்கணக்கான ஆண்டுகளாக பூமியின் ஒவ்வொரு துளி மண்ணிலும் நீரிலும் ஒரு கண்ணுக்குத் தெரியாத யுத்தம் நடந்துகொண்டிருக்கிறது: பாக்டீரியாக்களுக்கும், அவற்றைத் தாக்கி அழிக்கும் 'பேக்டீரியோபேஜ்' என்ற கொடிய வைரஸ்களுக்கும் இடையிலான யுத்தம் அது!\n\n2000-களின் இறுதியில் விஞ்ஞானிகள் பாக்டீரியாவின் மரபணுவில் ஒரு விசித்திரமான அமைப்பைக் கண்டனர்: அங்கு 'CRISPR' என்ற ஒரே மாதிரியான தொடர் குறியீடுகளுக்கு நடுவே, தங்களைத் தாக்க வந்த வைரஸ்களின் மரபணுத் துண்டுகளை பாக்டீரியாக்கள் சேமித்து வைத்திருந்தன! அதாவது தங்களின் எதிரிகளை அடையாளம் காணும் புகைப்படக் கோப்பாக அவை அதை வைத்திருந்தன.\n\n2011 மார்ச் மாதம் புவேர்ட்டோ ரிக்கோவில் நடந்த ஒரு மாநாட்டில் அமெரிக்க உயிர்வேதியியலாளர் ஜெனிபர் டவுட்னாவும், பிரெஞ்சு நுண்ணுயிரியலாளர் இம்மானுவேல் சார்பெண்டியரும் சந்தித்தனர். இருவரும் இணைந்து பாக்டீரியா எவ்வாறு வைரஸ்களை வெட்டுகிறது என்ற ரகசியத்தை ஆராயத் தொடங்கினர்.\n\nஅவர்களது ஆய்வில் **Cas9** என்ற புரத நொதி ஒரு கொலையாளியைப் போலச் செயல்படுவதைக் கண்டனர். பாக்டீரியாவிடம் உள்ள வைரஸ் தகவல் கொண்ட ஆர்.என்.ஏ வழிகாட்டியுடன் இந்த Cas9 நொதி இணையும் போது, அது வைரஸின் டி.என்.ஏ-வைக் கண்டறிந்து ஒரு கத்திரிக்கோலைப் போல இரண்டாகத் துண்டித்து விடுகிறது!\n\nஅப்போது அவர்களுக்கு ஒரு மின்னல் போன்ற யோசனை தோன்றியது: \"பாக்டீரியா வைரஸை வெட்ட இந்த வழிகாட்டியைப் பயன்படுத்துகிறது என்றால், நாம் விரும்பும் எந்தவொரு மரபணுக் குறியீட்டையும் வழிகாட்டி ஆர்.என்.ஏ-வாக மாற்றினால், Cas9 நொதியைக் கொண்டு மனிதர்கள் அல்லது விலங்குகளின் எந்தவொரு டி.என்.ஏ-வையும் நாம் விரும்பும் இடத்தில் மிகத் துல்லியமாக வெட்ட முடியுமா?\"\n\nசோதனை செய்து பார்த்தபோது அது நூற்றுக்கு நூறு வெற்றி பெற்றது!\n\n2012 ஆகஸ்டில் வெளியான இந்த ஆய்வுக்கட்டுரை ஒட்டுமொத்த மருத்துவ உலகையும் புரட்டிப்போட்டது. ஒரு கணினித் திரையில் உள்ள எழுத்துப் பிழையை 'பேக்ஸ்பேஸ்' அழுத்தி நீக்குவது போல, சிக்கிள் செல் அனீமியா, மரபணுக் குருட்டுத்தன்மை போன்ற கொடிய நோய்களை உண்டாக்கும் தவறான மரபணுக்களை வெட்டி நீக்கிவிட்டு சரியான மரபணுவை அங்கே தைக்கும் அற்புதக் கருவியாக **கிரிஸ்பர் (CRISPR-Cas9)** மாறியது! இந்த வரலாற்றுச் சாதனைக்காக 2020-ஆம் ஆண்டு இருவருக்கும் வேதியியலுக்கான நோபல் பரிசு வழங்கப்பட்டது.",
    stem_vocabulary: [
      {
            "term": "கிரிஸ்பர்-காஸ்9 (CRISPR-Cas9)",
            "definition": "பாக்டீரியாவின் தற்காப்பு முறையிலிருந்து பெறப்பட்டு, மரபணுவில் விரும்பிய இடத்தை மிகத் துல்லியமாக வெட்டி மாற்றியமைக்கும் புரட்சிகர மரபணுத் திருத்தத் தொழில்நுட்பம்."
      },
      {
            "term": "வழிகாட்டி ஆர்.என்.ஏ (Guide RNA)",
            "definition": "காஸ்9 நொதியை டி.என்.ஏ-வின் குறிப்பிட்ட இலக்கு இடத்திற்கு மிகத் துல்லியமாக அழைத்துச் செல்லும் செயற்கை ஆர்.என்.ஏ மூலக்கூறு."
      },
      {
            "term": "எண்டோநியூக்ளியேஸ் (Endonuclease)",
            "definition": "டி.என்.ஏ மூலக்கூறின் உட்புறப் பிணைப்புகளை வெட்டும் திறன் கொண்ட நொதி."
      },
      {
            "term": "மரபணுத் திருத்தம் (Gene Editing)",
            "definition": "உயிரினங்களின் மரபணுக் குறியீட்டில் உள்ள பிழைகளை நீக்கவோ, புதிய மரபணுக்களைச் சேர்க்கவோ செய்யும் நவீன அறிவியல் முறை."
      }
],
    blooms_questions: [
      { level: "நினைவுகூர்க (Remember)", question: "இக்கதையில் விஞ்ஞானி தனது கண்டுபிடிப்பை நிகழ்த்திய முக்கிய தருணம் அல்லது ஆதாரம் எது?" },
      { level: "புரிந்துகொள்க (Understand)", question: "இந்த அறிவியல் கண்டுபிடிப்பு அக்கால மனிதர்களின் பழைய நம்பிக்கைகளை எவ்வாறு மாற்றியமைத்தது?" },
      { level: "பயன்படுத்துக (Apply)", question: "இக்கண்டுபிடிப்பு இன்றைய நவீன கணினி, மருத்துவம் அல்லது விண்வெளிக்கு எவ்வாறு வழிகாட்டுகிறது?" },
      { level: "பகுப்பாய்க (Analyze)", question: "ஆரம்பத்தில் மற்ற விஞ்ஞானிகள் இதனை ஏற்க மறுத்ததற்கான காரணங்கள் மற்றும் அதை முறியடித்த சான்றுகள் யாவை?" },
      { level: "மதிப்பிடுக (Evaluate)", question: "எதிர்ப்புகள் மற்றும் தடைகள் வந்தபோதிலும் தனது ஆய்வில் தளராமல் நின்ற விஞ்ஞானியின் குணம் மாணவர்களுக்கு என்ன கற்பிக்கிறது?" }
    ],
    quiz: [
      { question: "இக்கதையில் விவரிக்கப்பட்ட வரலாற்று முக்கியத்துவம் வாய்ந்த அறிவியல் சாதனை எது?", options: ["ஆதாரங்களுடன் நிறுவப்பட்ட புரட்சிகரமான அறிவியல் உண்மை", "ஒரு தற்காலிகக் கற்பனை", "மறுக்கப்பட்ட ஒரு வதந்தி", "பயனற்ற ஒரு கணிப்பு"], answer: 0 }
    ],
    moral_reflection: "அறிவியல் ஆய்வு என்பது வெறும் புத்தகப் படிப்பல்ல; அது இயற்கை நமக்குக் காட்டும் சான்றுகளை நேர்மையுடன் உற்றுநோக்கி, தடைகளைத் தாண்டி உண்மையை நிலைநாட்டும் தணியாத தேடலாகும்.",
    cultural_context: "உலக அறிவியல் வரலாறு / கணினியியல், மரபியல் மற்றும் நவீன வானியல் சாதனைகள்",
    audio_url: ""
  },
  {
    id: "science-99-yamanaka-four-stem-factors",
    title: "ஷின்யா யமனாக்காவும் உயிரணுவின் வயதை மீட்டெடுத்த நான்கு மந்திரக் காரணிகளும்",
    slug: "science-99-yamanaka-four-stem-factors",
    collection: "science-stories",
    collection_name: "100 வரலாற்று அறிவியல் கதைகள்",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "Induction of Pluripotent Stem Cells from Mouse Embryonic and Adult Fibroblast Cultures by Defined Factors (Cell, Vol. 126)",
    source_author: "Kazutoshi Takahashi & Shinya Yamanaka",
    source_year: "2006",
    source_chapter: "Cell 126, 663–676 (25 August 2006)",
    source_edition: "Elsevier / Cell Press",
    authenticity_note: "Based on Shinya Yamanaka and Kazutoshi Takahashi's monumental 2006 discovery of iPSCs (Induced Pluripotent Stem Cells) using the four transcription factors (Oct3/4, Sox2, Klf4, c-Myc), winning the 2012 Nobel Prize in Physiology or Medicine.",
    summary: "உடலில் உள்ள ஒரு முதிர்ந்த தோல் செல்லையோ அல்லது நரம்பு செல்லையோ மீண்டும் தொடக்கக்கால மூலச் செல்லாக (Stem Cell) மாற்ற முடியாது என்ற நூறாண்டு கால மருத்துவ நம்பிக்கையை உடைத்தெறிந்தவர் ஜப்பானிய விஞ்ஞானி ஷின்யா யமனாக்கா. 2006-ஆம் ஆண்டு வெறும் நான்கு மரபணுக் காரணிகளை (Yamanaka Factors) செலுத்துவதன் மூலம் முதிர்ந்த தோல் செல்களை மீண்டும் இளமையான மூலச் செல்களாக மாற்றிக் காட்டி மருத்துவ உலகில் புதிய சகாப்தத்தைப் படைத்தார்.",
    content: "1987-இல் ஜப்பானில் இளம் எலும்பு முறிவு அறுவை சிகிச்சை மருத்துவராகப் பணியைத் தொடங்கிய ஷின்யா யமனாக்காவுக்கு ஒரு பெரிய பின்னடைவு ஏற்பட்டது: அறுவை சிகிச்சைக்குத் தேவையான அதிவேகக் கை லாவகம் தனக்கு இல்லை என்பதை அவர் உணர்ந்தார். மூத்த மருத்துவர்கள் அவரை 'ஜமனாக்கா' (தொல்லை தரும் மனிதர்) என்று கேலி செய்தனர்.\n\nஇதனால் மனம் சோர்ந்து போகாமல், அறுவை சிகிச்சை செய்வதை விட தீர்க்க முடியாத கொடிய நோய்களுக்கான மூலக் காரணத்தைக் கண்டறியும் மருத்துவ ஆய்வில் ஈடுபட முடிவெடுத்தார் யமனாக்கா.\n\nஅக்காலத்தில் மருத்துவ உலகின் மிகப்பெரிய கனவாக இருந்தது 'கரு மூலச்செல்கள்' (Embryonic Stem Cells). ஒரு கருவின் தொடக்க நிலையில் இருக்கும் இந்த செல்கள், மனித உடலின் எந்தவொரு உறுப்பாகவும்—துடிக்கும் இதய தசையாகவோ அல்லது சிந்திக்கும் மூளை செல்லாகவோ—மாறும் அசாத்திய ஆற்றல் (Pluripotency) கொண்டவை! ஆனால் இந்த செல்களைப் பெறுவதற்கு மனிதக் கருக்களை அழிக்க வேண்டியிருந்ததால் உலகெங்கும் பெரும் நெறிமுறை விவாதங்களும் தடைகளும் இருந்தன.\n\nமேலும், ஒருமுறை உருவான தோல் செல்லையோ அல்லது நரம்பு செல்லையோ மீண்டும் மூல செல்லாக மாற்ற முடியாது, அது ஒரு வழிப்பாதை என்றே உயிரியலாளர்கள் கருதினர்.\n\nஆனால் கியோட்டோ பல்கலைக்கழகத்தில் யமனாக்கா ஒரு விந்தையான கேள்வியைக் கேட்டார்: \"ஒரு முதிர்ந்த தோல் செல்லின் வயதுக் கடிகாரத்தை பின்னோக்கி நகர்த்தி அதை மீண்டும் இளமையான தொடக்க செல்லாக மாற்ற முடியாதா?\"\n\nதனது மாணவர் கசுதோஷி தகாஹாஷியுடன் இணைந்து ஆயிரக்கணக்கான மரபணுக்களை ஆராய்ந்தார். முடிவில் 24 மரபணுக் காரணிகளைத் தேர்வு செய்து, அவற்றை முதிர்ந்த எலியின் தோல் செல்களுக்குள் ஒரே நேரத்தில் செலுத்திப் பார்த்தனர். அற்புதம் நடந்தது! அந்த சாதாரணத் தோல் செல்கள் தங்கள் முதிர்ந்த வடிவத்தை இழந்து, கரு மூலசெல்களைப் போல மாறின!\n\nஒவ்வொரு காரணியாக நீக்கி நீக்கிப் பார்த்ததில், வெறும் **நான்கு மந்திர மரபணுக் காரணிகள்** (Oct3/4, Sox2, Klf4, c-Myc) மட்டுமே இந்த அற்புதத்தை நிகழ்த்தப் போதுமானது என்பதைக் கண்டறிந்தனர்! இவை இன்று **யமனாக்கா காரணிகள்** (Yamanaka Factors) என்று அழைக்கப்படுகின்றன.\n\n2006 ஆகஸ்டில் யமனாக்கா வெளியிட்ட இந்த **தூண்டப்பட்ட பல்திறன் மூலச்செல்கள் (iPSCs)** மருத்துவ உலகையே திகைக்க வைத்தன! கருக்களை அழிக்காமலேயே ஒரு நோயாளியின் சொந்த தோல் செல்லிலிருந்தே புதிய இதய திசுக்களையும், பார்வை நரம்புகளையும் உருவாக்க முடியும் என்ற மாயாஜாலக் கதவு திறக்கப்பட்டது. மனித செல்களின் வயதை மாற்றியமைத்த இந்த மகத்தான கண்டுபிடிப்பிற்காக 2012-இல் அவருக்கு நோபல் பரிசு வழங்கப்பட்டது.",
    stem_vocabulary: [
      {
            "term": "தூண்டப்பட்ட பல்திறன் மூலச்செல்கள் (iPSCs)",
            "definition": "முதிர்ந்த சாதாரண செல்களை மரபணு ரீதியாக மீண்டும் தொடக்கக்கால கரு மூலச்செல் நிலைக்கு மாற்றியமைக்கப்பட்ட செல்கள்."
      },
      {
            "term": "பல்திறன் தன்மை (Pluripotency)",
            "definition": "இதயம், மூளை, கல்லீரல் என உடலின் எந்தவொரு திசுவாகவோ உறுப்பாகவோ மாறும் ஆற்றல் கொண்ட மூலச்செல் நிலை."
      },
      {
            "term": "படியெடுத்தல் காரணிகள் (Transcription Factors)",
            "definition": "டி.என்.ஏ-வில் உள்ள தகவல்கள் எவ்வாறு வாசிக்கப்பட வேண்டும் என்பதைக் கட்டுப்படுத்தும் புரதங்கள்."
      },
      {
            "term": "உயிரணு மறுதிட்டமிடல் (Cellular Reprogramming)",
            "definition": "ஒரு முதிர்ந்த உடற்செல்லின் கடிகாரத்தை பின்னோக்கி நகர்த்தி மீண்டும் புதிய தொடக்க நிலைக்குக் கொண்டுவரும் நுட்பம்."
      }
],
    blooms_questions: [
      { level: "நினைவுகூர்க (Remember)", question: "இக்கதையில் விஞ்ஞானி தனது கண்டுபிடிப்பை நிகழ்த்திய முக்கிய தருணம் அல்லது ஆதாரம் எது?" },
      { level: "புரிந்துகொள்க (Understand)", question: "இந்த அறிவியல் கண்டுபிடிப்பு அக்கால மனிதர்களின் பழைய நம்பிக்கைகளை எவ்வாறு மாற்றியமைத்தது?" },
      { level: "பயன்படுத்துக (Apply)", question: "இக்கண்டுபிடிப்பு இன்றைய நவீன கணினி, மருத்துவம் அல்லது விண்வெளிக்கு எவ்வாறு வழிகாட்டுகிறது?" },
      { level: "பகுப்பாய்க (Analyze)", question: "ஆரம்பத்தில் மற்ற விஞ்ஞானிகள் இதனை ஏற்க மறுத்ததற்கான காரணங்கள் மற்றும் அதை முறியடித்த சான்றுகள் யாவை?" },
      { level: "மதிப்பிடுக (Evaluate)", question: "எதிர்ப்புகள் மற்றும் தடைகள் வந்தபோதிலும் தனது ஆய்வில் தளராமல் நின்ற விஞ்ஞானியின் குணம் மாணவர்களுக்கு என்ன கற்பிக்கிறது?" }
    ],
    quiz: [
      { question: "இக்கதையில் விவரிக்கப்பட்ட வரலாற்று முக்கியத்துவம் வாய்ந்த அறிவியல் சாதனை எது?", options: ["ஆதாரங்களுடன் நிறுவப்பட்ட புரட்சிகரமான அறிவியல் உண்மை", "ஒரு தற்காலிகக் கற்பனை", "மறுக்கப்பட்ட ஒரு வதந்தி", "பயனற்ற ஒரு கணிப்பு"], answer: 0 }
    ],
    moral_reflection: "அறிவியல் ஆய்வு என்பது வெறும் புத்தகப் படிப்பல்ல; அது இயற்கை நமக்குக் காட்டும் சான்றுகளை நேர்மையுடன் உற்றுநோக்கி, தடைகளைத் தாண்டி உண்மையை நிலைநாட்டும் தணியாத தேடலாகும்.",
    cultural_context: "உலக அறிவியல் வரலாறு / கணினியியல், மரபியல் மற்றும் நவீன வானியல் சாதனைகள்",
    audio_url: ""
  },
  {
    id: "science-100-jwst-first-deep-field",
    title: "ஜேம்ஸ் வெப் தொலைநோக்கியும் பிரபஞ்சத்தின் முதல் விடியலைத் தேடிய பயணமும்",
    slug: "science-100-jwst-first-deep-field",
    collection: "science-stories",
    collection_name: "100 வரலாற்று அறிவியல் கதைகள்",
    reading_time: 5,
    age_group: "9-16",
    difficulty: "Medium",
    source_book: "The James Webb Space Telescope: Science Guide and First Deep Field (NASA / ESA / CSA)",
    source_author: "NASA, ESA, CSA & STScI",
    source_year: "2022",
    source_chapter: "First Images from the James Webb Space Telescope (SMACS 0723)",
    source_edition: "NASA Headquarters, Washington, D.C. (July 11–12, 2022)",
    authenticity_note: "Directly derived from the deployment of the James Webb Space Telescope at Lagrange Point 2 (L2) and the release of 'Webb's First Deep Field' (SMACS 0723) on July 11, 2022, capturing galaxies formed over 13.1 billion years ago.",
    summary: "2021 கிறிஸ்துமஸ் தினத்தன்று ஏவப்பட்டு, பூமியிலிருந்து 15 லட்சம் கி.மீ தொலைவில் உள்ள லாக்ராஞ்ச் புள்ளி 2-ஐ (L2) அடைந்த ஜேம்ஸ் வெப் விண்வெளித் தொலைநோக்கி, டென்னிஸ் மைதான அளவிலான வெப்பத் தடுப்புத் திரையையும், 6.5 மீட்டர் தங்க முலாம் பூசிய ஆடிக் கண்ணாடியையும் விண்வெளியில் மலரச் செய்தது. அண்டவெளியின் தூசு மண்டலங்களைத் துளைத்துச் சென்று, சுமார் 1,300 கோடி ஆண்டுகளுக்கு முன்பு பிரபஞ்சத்தின் முதல் விடியலில் பிறந்த விண்மீன் திரள்களை மனிதகுலத்திற்குப் படம் பிடித்துக் காட்டியது.",
    content: "2021 கிறிஸ்துமஸ் திருநாள் காலையில், பிரெஞ்சு கயானாவில் உள்ள விண்வெளி ஏவுதளத்திலிருந்து அரியான் 5 ராக்கெட் வானத்தை நோக்கிப் பாய்ந்தது. அதன் தலைப்பகுதிக்குள் மனிதகுலம் இதுவரை உருவாக்கியதிலேயே அதிநவீன, சிக்கலான அறிவியல் இயந்திரமான **ஜேம்ஸ் வெப் விண்வெளித் தொலைநோக்கி (JWST)** ஒரு காகித மடிப்பைப் (Origami) போலச் சுருக்கி வைக்கப்பட்டிருந்தது!\n\nமுப்பது ஆண்டுகால கடுமையான உழைப்பில் உருவான இந்தத் தொலைநோக்கி, புகழ்பெற்ற ஹப்பிள் தொலைநோக்கியின் அடுத்த தலைமுறையாக வடிவமைக்கப்பட்டது. ஆனால் ஹப்பிள் நாம் பார்க்கும் சாதாரண ஒளியில் பார்த்தபோது, ஜேம்ஸ் வெப் மனிதக் கண்களுக்குத் தெரியாத **அகச்சிவப்புக் கதிர்களில்** (Infrared) பிரபஞ்சத்தைப் பார்க்கும் திறன் கொண்டது.\n\nபிரபஞ்சம் தொடர்ந்து விரிவடைந்துகொண்டே இருப்பதால், சுமார் 1,380 கோடி ஆண்டுகளுக்கு முன்பு தோன்றிய முதல் விண்மீன்களின் ஒளி விண்வெளியில் நீண்டு அகச்சிவப்பு அலைகளாக மாறியுள்ளது. மேலும் இந்த அகச்சிவப்பு ஒளி பிரபஞ்சத்தின் அடர்ந்த தூசுப் படலங்களைத் துளைத்துக்கொண்டு வரும் ஆற்றல் படைத்தது.\n\nபிரபஞ்சத்தின் முதல் விடியலில் இருந்து வரும் இந்த மெல்லிய வெப்பக் கதிர்களைப் பிடிக்க வேண்டுமென்றால், இந்தத் தொலைநோக்கி மைனஸ் 233 டிகிரி செல்சியஸ் கடும் குளிரில் இயங்க வேண்டும்!\n\nஇதற்காக பூமிக்கு அப்பால் 15 லட்சம் கிலோமீட்டர் தொலைவில் உள்ள **லாக்ராஞ்ச் புள்ளி 2-ஐ (L2)** நோக்கிப் பயணம் செய்தது ஜேம்ஸ் வெப். வழியில் ஒரு தவறு நடந்தாலும் ஒட்டுமொத்தத் திட்டமும் வீணாகிவிடும் என்ற 344 ஆபத்தான நகர்வுகளைத் துல்லியமாகச் செய்து முடித்தது: ஒரு டென்னிஸ் மைதான அளவிலான ஐந்து அடுக்கு வெப்பத் தடுப்புத் திரையை விண்வெளியில் விரித்து சூரியனின் வெப்பத்தைத் தடுத்தது; பின்னர் 18 அறுகோணத் தங்க முலாம் பூசிய ஆடிக் கண்ணாடிகளைத் துல்லியமாக இணைத்து 6.5 மீட்டர் அகலமுள்ள மாபெரும் ஒற்றைக் கண்ணாக மாற்றியது!\n\n2022 ஜூலை 11 அன்று உலகமே வியந்து பார்த்த முதல் புகைப்படமான **வெப் டீப் ஃபீல்ட்** (Webb's First Deep Field) வெளியானது.\n\nஒருவர் கையில் வைத்திருக்கும் ஒரு சிறு மணல் துகள் வானில் எவ்வளவு இடத்தை மறைக்குமோ, அவ்வளவு சிறிய விண்வெளிப் பகுதியில் பல்லாயிரக்கணக்கான விண்மீன் திரள்கள் வைரங்களைப் போல ஜொலித்தன! 1,310 கோடி ஆண்டுகளுக்கு முன்பு, பிரபஞ்சம் பிறந்த தொடக்கக் காலத்தில் ஒளிவீசிய விண்மீன் திரள்களை அது மிகத் துல்லியமாகப் படம்பிடித்துக் காட்டியது!\n\nசைராகுஸ் நகரில் ஆர்க்கிமிடிஸ் தொட்டியில் குதித்து 'யுரேகா' என்று கூச்சலிட்ட தொடக்கத்திலிருந்து, விண்வெளியில் தங்கக் கண்ணாடியுடன் நிற்கும் ஜேம்ஸ் வெப் வரை—இயற்கையின் ரகசியங்களை அறிய மனிதன் மேற்கொண்ட அறிவுப் பயணம் முடிவடையவில்லை; அது இப்போதுதான் புதிய விடியலைக் கண்டுள்ளது!",
    stem_vocabulary: [
      {
            "term": "லாக்ராஞ்ச் புள்ளி 2 (L2)",
            "definition": "பூமிக்கு அப்பால் 15 லட்சம் கி.மீ தொலைவில் பூமியின் ஈர்ப்பு விசையும் சூரியனின் ஈர்ப்பு விசையும் சமநிலையை எட்டும் விண்வெளியின் நிலையான இடம்."
      },
      {
            "term": "அகச்சிவப்பு வானியல் (Infrared Astronomy)",
            "definition": "விண்வெளித் தூசுகளைத் துளைத்துக்கொண்டு வரும் அகச்சிவப்புக் கதிர்வீச்சைப் பதிவுசெய்து பிரபஞ்சத்தின் ஆழத்தை ஆராயும் முறை."
      },
      {
            "term": "ஈர்ப்பு லென்சிங் (Gravitational Lensing)",
            "definition": "முன்னால் உள்ள ஒரு மாபெரும் விண்மீன் திரளின் ஈர்ப்பு விசை, அதன் பின்னால் இருக்கும் தொலைதூர விண்மீன் திரள்களின் ஒளியை வளைத்துப் பெரிதாக்கிக் காட்டும் இயற்கை பூதக்கண்ணாடி நிகழ்வு."
      },
      {
            "term": "பிரபஞ்ச விடியல் (Cosmic Dawn)",
            "definition": "பெருவெடிப்புக்குப் பின் சுமார் 10 கோடி முதல் 50 கோடி ஆண்டுகளில் பிரபஞ்சத்தின் முதல் விண்மீன்களும் விண்மீன் திரள்களும் ஒளிரத் தொடங்கிய வரலாற்றுத் தொடக்கக் காலம்."
      }
],
    blooms_questions: [
      { level: "நினைவுகூர்க (Remember)", question: "இக்கதையில் விஞ்ஞானி தனது கண்டுபிடிப்பை நிகழ்த்திய முக்கிய தருணம் அல்லது ஆதாரம் எது?" },
      { level: "புரிந்துகொள்க (Understand)", question: "இந்த அறிவியல் கண்டுபிடிப்பு அக்கால மனிதர்களின் பழைய நம்பிக்கைகளை எவ்வாறு மாற்றியமைத்தது?" },
      { level: "பயன்படுத்துக (Apply)", question: "இக்கண்டுபிடிப்பு இன்றைய நவீன கணினி, மருத்துவம் அல்லது விண்வெளிக்கு எவ்வாறு வழிகாட்டுகிறது?" },
      { level: "பகுப்பாய்க (Analyze)", question: "ஆரம்பத்தில் மற்ற விஞ்ஞானிகள் இதனை ஏற்க மறுத்ததற்கான காரணங்கள் மற்றும் அதை முறியடித்த சான்றுகள் யாவை?" },
      { level: "மதிப்பிடுக (Evaluate)", question: "எதிர்ப்புகள் மற்றும் தடைகள் வந்தபோதிலும் தனது ஆய்வில் தளராமல் நின்ற விஞ்ஞானியின் குணம் மாணவர்களுக்கு என்ன கற்பிக்கிறது?" }
    ],
    quiz: [
      { question: "இக்கதையில் விவரிக்கப்பட்ட வரலாற்று முக்கியத்துவம் வாய்ந்த அறிவியல் சாதனை எது?", options: ["ஆதாரங்களுடன் நிறுவப்பட்ட புரட்சிகரமான அறிவியல் உண்மை", "ஒரு தற்காலிகக் கற்பனை", "மறுக்கப்பட்ட ஒரு வதந்தி", "பயனற்ற ஒரு கணிப்பு"], answer: 0 }
    ],
    moral_reflection: "அறிவியல் ஆய்வு என்பது வெறும் புத்தகப் படிப்பல்ல; அது இயற்கை நமக்குக் காட்டும் சான்றுகளை நேர்மையுடன் உற்றுநோக்கி, தடைகளைத் தாண்டி உண்மையை நிலைநாட்டும் தணியாத தேடலாகும்.",
    cultural_context: "உலக அறிவியல் வரலாறு / கணினியியல், மரபியல் மற்றும் நவீன வானியல் சாதனைகள்",
    audio_url: ""
  },
];
