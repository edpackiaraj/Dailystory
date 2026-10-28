import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const enStoriesPath = path.join(rootDir, 'data', 'en', 'stories.json');

const existing = fs.existsSync(enStoriesPath) ? JSON.parse(fs.readFileSync(enStoriesPath, 'utf8')) : [];
const existingIds = new Set(existing.map(s => s.id));

export const megaAkbarBirbalStories = [
  {
    id: "akbar-birbal-wax-lion",
    slug: "the-wax-lion-in-the-iron-cage",
    language: "en",
    title: "The Wax Lion in the Iron Cage",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When a foreign king sends an unbreakable iron cage containing a fierce lion without a single door or latch, Birbal solves the impossible puzzle using science and heat.",
    keywords: ["akbar birbal wax lion story", "iron cage lion birbal", "science trick birbal", "175 stories of akbar and birbal"],
    tags: ["Humor", "Wisdom", "Science", "Cleverness"],
    full_text: "A foreign emperor sent an extraordinary emissary to the court of Emperor Akbar at Agra. The emissary wheeled a heavy cart into the center of the Diwan-i-Khas, bearing a colossal iron cage. Inside the cage paced a fierce, golden-maned lion with bared fangs. The beast looked terrifyingly lifelike.\n\nThe emissary presented an imperial scroll: 'Greetings to Emperor Akbar. We challenge your esteemed courtiers to remove this fierce lion from the iron cage. But heed these two strict conditions: the bars of the cage must not be bent, sawed, or damaged in any way, and the cage possesses neither a door, a keyhole, nor a sliding latch! If your ministers cannot remove the lion within twenty-four hours, your court must acknowledge our intellectual supremacy.'\n\nAkbar and his ministers inspected the cage. The iron bars were thick, seamless, and welded together without a single hinge, door, or opening large enough for even a kitten to squeeze through. Several ministers tried pulling the bars with iron levers, but the solid iron did not budge. Others attempted to insert wire hooks, but the lion was far too heavy.\n\nAkbar turned to Birbal: 'Can you free this lion without touching or damaging the cage?'\n\nBirbal walked slowly around the cage, studying the beast's golden coat, unblinking eyes, and rigid posture. He observed a faint sheen upon the animal's flank where a warm sunbeam fell through the palace window.\n\nBirbal smiled gently. 'Your Majesty, I shall remove the lion from the cage before this very assembly within one hour.'\n\nBirbal whispered instructions to a royal attendant. Soon, the attendant returned carrying a brazier of burning red coals and a long iron rod. Birbal thrust the iron rod into the embers until the tip glowed bright scarlet.\n\nWalking to the cage, Birbal slipped the glowing red iron rod between the bars and gently pressed the tip against the lion's flank. *Sssssss!* A fragrant plume of melted beeswax and honey scented the entire chamber! The flank of the lion softened and began to drip into the tray below.\n\nBirbal pressed the hot iron against the beast's neck, head, and paws. Within thirty minutes, the entire 'lion'—which was expertly sculpted from solid beeswax painted with golden ochre—melted completely away, flowing out between the iron bars as a pool of warm liquid wax, leaving the iron cage completely empty and completely undamaged!\n\nThe entire court erupted in applause. The foreign emissary bowed his head in awe: 'Emperor Akbar, your counselor's intellect sees through every illusion.' Akbar rewarded Birbal with a jeweled dagger, reminding everyone that things that appear terrifying on the outside often dissolve when inspected with calm reason.",
    moral: "Do not let fearsome illusions intimidate you. Observe carefully and use reason; often what seems like an impossible obstacle can be dissolved through scientific insight.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal holding a heated rod as the wax lion melts harmlessly inside the iron cage",
    word_count: 530,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-08",
    is_bedtime: false,
    quiz: [
      {
        question: "What was the lion inside the seamless iron cage actually made of?",
        options: [
          "(Recommended) Solid beeswax sculpted and painted to look lifelike",
          "Real living muscle and fur",
          "Golden stone"
        ],
        answerIndex: 0,
        hint: "It melted when touched by a warm iron rod."
      },
      {
        question: "How did Birbal remove the lion without breaking the cage bars?",
        options: [
          "He used a hot iron rod to melt the wax so it flowed through the bars",
          "He cut the bars with a diamond saw",
          "He trained a bird to carry the pieces out"
        ],
        answerIndex: 0,
        hint: "Heat caused the beeswax to liquefy and drip through the gaps."
      },
      {
        question: "What lesson did the court learn from Birbal's demonstration?",
        options: [
          "(Recommended) Calm observation and reason can dissolve fearsome illusions",
          "Never accept gifts from foreign kings",
          "Iron is softer than wax"
        ],
        answerIndex: 0,
        hint: "Careful examination reveals the true nature of obstacles."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Classic wit tale demonstrating scientific curiosity and seeing through appearances. Family safe.",
    values: ["curiosity", "wisdom", "courage", "observation"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "emissary", meaning: "a person sent on a special mission, especially as a diplomatic representative" },
      { word: "sheen", meaning: "a soft luster on a surface" },
      { word: "brazier", meaning: "a portable metal container for hot coals used for heating or cooking" },
      { word: "intimidate", meaning: "to frighten or overawe someone into submission or fear" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What were the two strict conditions set by the foreign emperor?" },
      { tier: "Understand", question: "How did Birbal deduce that the lion was made of wax rather than stone or flesh?" },
      { tier: "Apply", question: "When you face a problem that looks scary at first, how can pausing to look closely help you?" },
      { tier: "Evaluate", question: "Why is scientific curiosity better than panic when facing unfamiliar puzzles?" },
      { tier: "Create", question: "Imagine an impossible puzzle you could present to Birbal. How would he solve it?" }
    ],
    reflection_prompt: "Many of the fears that look like roaring lions in our mind are merely made of wax. Shine the warm light of reason upon them.",
    activity: "Inspect an everyday candle with a parent. Notice how solid wax softens and turns to liquid with gentle warmth.",
    mood: ["brave", "curious", "funny"],
    teaser: "Tomorrow, discover what happened when Emperor Akbar ordered Birbal to make a list of the six greatest fools in Agra!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-list-of-fools",
    slug: "the-emperors-list-of-the-six-greatest-fools",
    language: "en",
    title: "The Emperor's List of the Six Greatest Fools",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When Emperor Akbar sends Birbal on a royal mission to find the six biggest fools in Agra, Birbal returns with a startling parchment that teaches the Emperor a memorable lesson in humility.",
    keywords: ["akbar birbal list of fools", "six fools of agra story", "birbal wit and humor", "175 stories of akbar and birbal"],
    tags: ["Humor", "Wisdom", "Humility", "Cleverness"],
    full_text: "One afternoon, Emperor Akbar was in a playful mood and decided to test Birbal with an unusual assignment: 'Birbal, our empire is filled with learned scholars and artists. But surely it also has fools. I command you to search the city of Agra and bring me a list of the six greatest fools in our realm within one week!'\n\n'Your wish is my command, Majesty,' Birbal smiled, bowing respectfully.\n\nBirbal set out into the bustling streets of Agra. After several days of observation, he returned to the palace on the seventh morning carrying a rolled parchment scroll. Akbar was seated on his throne, surrounded by smiling courtiers eager for amusement.\n\n'Well, Birbal,' Akbar beamed, 'did you find the six greatest fools?'\n\n'I did indeed, Your Majesty,' Birbal replied. 'In fact, I have brought the first four in person, and their names are recorded upon this scroll.'\n\nBirbal introduced the first fool: 'Sire, this man was riding a horse while carrying a heavy bundle of firewood upon his own head! When I asked him why he did not lay the bundle across the horse's back, he replied: *My poor horse is already tired from carrying me; I carry the bundle on my head so the horse does not have to bear its weight!*'\n\nThe courtiers laughed heartily at the man's comical misunderstanding of physics.\n\nBirbal brought forward the second fool: 'This gentleman saw a puddle of water with the moon's reflection glowing inside. Convinced that the moon had fallen from the heavens, he spent all night dipping a basket into the mud to rescue the moon, weeping that he was failing to pull it out!'\n\nAkbar chuckled: 'A true fool indeed! Who is the third?'\n\n'The third, Sire,' Birbal continued, 'was a man walking with his arms stretched out wide like bird wings. When I asked him why he walked so awkwardly, he said his wife had sent him to buy cloth, and he had forgotten his measuring tape, so he was keeping the measurement between his hands—refusing to let go even when he stumbled into a ditch!'\n\nAkbar wiped tears of laughter. 'Splendid! And the fourth?'\n\n'This fourth man was sitting upon a thick tree branch, diligently sawing off the very branch he was sitting upon, directly between himself and the tree trunk! When I warned him he would fall, he called me a meddler, and five seconds later crashed to the ground!'\n\nAkbar clapped in delight. 'Birbal, these four are truly magnificent fools! But you have only presented four. Where are the fifth and sixth fools to complete the list of six?'\n\nBirbal stepped forward, bowed low, and placed the parchment scroll into Akbar's hands. 'Your Imperial Majesty, the fifth and sixth fools are inscribed upon the bottom of the parchment.'\n\nAkbar unrolled the scroll. His eyes moved down to the fifth name: **Birbal**. And right beneath it, at number six, in bold royal calligraphy, was written: **Emperor Akbar**!\n\nThe hall fell utterly silent. Akbar's brow furrowed, though a twinkle danced in his eyes. 'Birbal! You have the audacity to list yourself and your Emperor as the greatest fools of Agra? Explain yourself before I lose my temper!'\n\nBirbal replied with serene humility and gentle humor: 'Your Majesty, I am the fifth fool because, instead of attending to the governance of this mighty empire, I spent seven valuable days wandering dusty alleys searching for foolish people! And Your Majesty is the sixth fool because, with thousands of matters of state, justice, and the welfare of millions of subjects to manage, you commissioned a royal minister on an errand to hunt for fools!'\n\nAkbar stared at the scroll, looked at Birbal's bright, courageous eyes, and then burst into roaring laughter that shook the crystal chandeliers. 'You are completely right, Birbal! The greatest foolishness is wasting precious life and authority on frivolous nonsense when there is meaningful good to be done.'\n\nAkbar rewarded Birbal with a royal robe of honor and dismissed the court, having learned that true wisdom begins by recognizing one's own human folly.",
    moral: "The greatest foolishness is wasting valuable time and authority on trivial, useless pursuits. True wisdom begins with humble self-awareness.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal presenting the scroll of fools to Emperor Akbar in the grand court of Agra",
    word_count: 730,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-12-09",
    is_bedtime: false,
    quiz: [
      {
        question: "Why was the first man considered foolish by Birbal?",
        options: [
          "(Recommended) He carried a heavy bundle on his head while riding a horse to 'spare the horse weight'",
          "He walked backwards",
          "He tried to eat grass"
        ],
        answerIndex: 0,
        hint: "He thought holding the bundle on his head meant the horse didn't carry it."
      },
      {
        question: "Whose names were written as the fifth and sixth fools on Birbal's scroll?",
        options: [
          "(Recommended) Birbal himself and Emperor Akbar",
          "The Prime Minister and the Army Chief",
          "Two foreign ambassadors"
        ],
        answerIndex: 0,
        hint: "Birbal named himself and the Emperor for wasting valuable time on foolish errands."
      },
      {
        question: "What lesson did Emperor Akbar take away from Birbal's list?",
        options: [
          "Wasting precious time on frivolous matters is the real foolishness",
          "Never send Birbal on errands",
          "Horses should carry more wood"
        ],
        answerIndex: 0,
        hint: "True leaders must focus on meaningful duty rather than trivial distractions."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Classic satire on self-importance, time management, and humility. Safe for all.",
    values: ["humility", "wisdom", "responsibility", "humor"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "inscribed", meaning: "written or carved into a surface or scroll" },
      { word: "calligraphy", meaning: "the visual art of beautiful decorative handwriting or lettering" },
      { word: "frivolous", meaning: "not having any serious purpose or value; trivial and silly" },
      { word: "folly", meaning: "lack of good sense; foolishness or foolish action" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "How many days did Birbal spend searching for the fools?" },
      { tier: "Understand", question: "Why does carrying a bundle on your head while sitting on a horse not reduce the horse's burden?" },
      { tier: "Apply", question: "Have you ever spent hours doing something silly when you should have been doing your homework or chores?" },
      { tier: "Evaluate", question: "Was it brave of Birbal to include the Emperor's name on the list? Why?" },
      { tier: "Create", question: "Draw a funny picture of the man riding his horse with the bundle of wood on his head." }
    ],
    reflection_prompt: "Time is our most non-renewable gift. Are you spending today on things that build kindness and wisdom, or chasing frivolous distractions?",
    activity: "Make a list of your top three priorities for today and complete them before playing video games or watching TV.",
    mood: ["funny", "brave", "curious"],
    teaser: "Tomorrow, discover what happened when a superstitious courtier claimed a poor man's face brought bad luck!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-unlucky-face",
    slug: "the-man-with-the-so-called-unlucky-face",
    language: "en",
    title: "The Man with the Unlucky Face",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When a superstitious belief leads Emperor Akbar to order the execution of an innocent citizen whose face supposedly brings misfortune, Birbal turns the court's superstition on its head with brilliant logic.",
    keywords: ["akbar birbal unlucky face story", "superstition moral story birbal", "justice and fairness tales for kids", "175 stories of akbar and birbal"],
    tags: ["Justice", "Fairness", "Superstition", "Wisdom", "Courage"],
    full_text: "In the imperial city of Agra lived a poor, gentle woodcutter named Ramu. Due to foolish village gossip, a rumor had spread that Ramu possessed an 'unlucky face,' and that anyone who saw his face first thing in the morning would suffer misfortune all day.\n\nOne morning, Emperor Akbar woke up early and stepped onto the palace balcony overlooking the Yamuna River. Down along the bank, Ramu was walking past carrying an armful of willow twigs. Akbar looked down and his eyes met Ramu's face.\n\nA few minutes later, while walking into his bedchamber, Akbar stubbed his big toe violently against a heavy brass chest, groaning in agonizing pain. At breakfast, the royal chef accidentally spilled hot lentil soup over the Emperor's silk sash. Then, during the midday council, a messenger arrived with news of a minor border skirmish.\n\nFurious, superstitious courtiers fanned the Emperor's irritation: 'Sire! It is all because you saw Ramu's unlucky face the first thing this morning! A man whose face causes such calamity to the Emperor of Hindustan is a danger to the empire!'\n\nIn a fit of blind annoyance, Akbar ordered: 'Arrest that woodcutter! He shall be hanged at dawn tomorrow so no one else in our city suffers misfortune!'\n\nThe innocent woodcutter was thrown into the royal prison. His weeping wife and young children rushed to Birbal's house, pleading for mercy.\n\nBirbal was deeply grieved by the Emperor's foolish superstition. He went to the dungeon and told Ramu: 'Fear not, honest friend. When you are brought to the gallows tomorrow morning and the executioner asks for your last wish, ask to speak three sentences to Emperor Akbar in open court.'\n\nThe next morning, the gallows were prepared in the public square. Emperor Akbar and his ministers arrived to witness the sentence. When asked for his final wish, Ramu bowed and addressed the Emperor: 'Your Imperial Majesty, before I die, I have one question for you and your wise ministers.'\n\nAkbar nodded: 'Speak your question.'\n\nRamu said in a calm, clear voice: 'Sire, it is claimed that you looked upon my face first thing yesterday morning, and in return, you stubbed your royal toe and suffered a minor skirmish. But yesterday morning, I too looked upon Your Majesty's face the first thing at dawn. And in return for seeing Your Majesty's face, I have been condemned to hang by the neck and lose my life! Now tell me, wise ministers: whose face has proven to be truly unluckier—mine, which gave the Emperor a stubbed toe, or the Emperor's, which sends an innocent, loyal subject to his grave?'\n\nThe entire square went dead silent. The executioner froze with the rope in his hands. The ministers looked at the cobblestones in profound shame.\n\nAkbar stood paralyzed. The absolute clarity of the woodcutter's logic shattered his superstitious irritation like lightning breaking a clay pot. Akbar looked at Birbal standing quietly among the ministers, and knew immediately whose wise heart had framed the question.\n\nAkbar stepped down from his royal platform, took the rope from the executioner's hands, and cast it aside. He embraced the humble woodcutter: 'Forgive me, Ramu. My foolish superstition blinded my judgment. You are completely innocent, and I was the one committing a grave injustice.'\n\nAkbar rewarded Ramu with a comfortable house and a pension of gold coins for his family, proclaiming an imperial decree that anyone spreading superstitious gossip about 'unlucky people' would face heavy fines. Once again, Birbal had saved an innocent life by exposing superstition with the light of reason.",
    moral: "Superstitions are false and cruel. Blaming our own mishaps or bad days on other people's appearance is unjust and cowardly.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Emperor Akbar casting aside the execution rope and embracing the innocent woodcutter Ramu",
    word_count: 710,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-12-10",
    is_bedtime: false,
    quiz: [
      {
        question: "Why did Emperor Akbar order the woodcutter Ramu to be arrested?",
        options: [
          "(Recommended) He superstitiously blamed his stubbed toe and bad day on seeing Ramu's face",
          "Ramu stole the royal crown",
          "Ramu broke the palace gates"
        ],
        answerIndex: 0,
        hint: "Akbar let superstitious courtiers convince him that Ramu brought bad luck."
      },
      {
        question: "What powerful question did Ramu ask Akbar before the execution?",
        options: [
          "Whose face was unluckier: Ramu's (which caused a stubbed toe) or Akbar's (which caused a death sentence)?",
          "What is the date today?",
          "Can I have a bowl of rice?"
        ],
        answerIndex: 0,
        hint: "He compared the stubbed toe to losing one's very life."
      },
      {
        question: "How did Akbar respond to Ramu's question?",
        options: [
          "(Recommended) He realized his injustice, freed Ramu, and banned superstitious gossip",
          "He exiled Ramu",
          "He ignored the question"
        ],
        answerIndex: 0,
        hint: "Akbar cast aside the rope, apologized, and rewarded the woodcutter."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Profound ethical story teaching rationality, justice, and rejecting scapegoating. Safe for all.",
    values: ["justice", "courage", "wisdom", "responsibility", "fairness"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "superstition", meaning: "excessively credulous belief in and reverence for the supernatural or bad omens" },
      { word: "calamity", meaning: "an event causing great and often sudden damage or distress; a disaster" },
      { word: "skirmish", meaning: "an episode of irregular or unpremeditated fighting, especially between small parts of armies" },
      { word: "gallows", meaning: "a wooden structure used historically for carrying out judicial execution" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What minor misfortunes happened to Akbar on that morning?" },
      { tier: "Understand", question: "Why is scapegoating innocent people so dangerous in a community or school?" },
      { tier: "Apply", question: "When something goes wrong in your day, why should you look at your own actions rather than blaming someone else?" },
      { tier: "Evaluate", question: "Was Akbar a good leader for admitting his mistake in public? Why is apologizing a sign of strength?" },
      { tier: "Create", question: "Design a poster advocating for scientific thinking and rejecting superstitious rumors." }
    ],
    reflection_prompt: "True courage is admitting when you are wrong and making amends immediately. Apologizing is not weakness—it is supreme strength.",
    activity: "If you have blamed a sibling or friend for your bad mood recently, offer them a sincere apology today.",
    mood: ["brave", "comforting", "calm"],
    teaser: "Tomorrow, discover how Birbal went on an extraordinary 'journey to heaven' to deliver a message to Akbar's ancestors!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-journey-to-heaven",
    slug: "birbals-secret-journey-to-heaven-and-the-royal-barbers",
    language: "en",
    title: "Birbal's Journey to Heaven and the Royal Barbers",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When jealous courtiers conspire with the royal barber to send Birbal on a fatal 'journey to heaven' via a funeral pyre, Birbal digs an underground tunnel, vanishes for six months, and returns with a hilarious retribution.",
    keywords: ["birbals journey to heaven", "birbal royal barber story", "akbar birbal outsmarting enemies", "175 stories of akbar and birbal"],
    tags: ["Humor", "Wisdom", "Justice", "Cleverness", "Courage"],
    full_text: "In the imperial court of Agra, Birbal's wisdom and popularity aroused bitter jealousy among several corrupt ministers. The conspirators conspired with the royal barber, who shaved the Emperor's beard every morning and had the Emperor's ear.\n\nOne morning, as the barber skillfully trimmed Akbar's mustache, he sighed with theatrical reverence: 'Jahapanah! Last night, I had a vivid dream of your late, noble father, the Emperor Humayun. He resides in paradise, surrounded by celestial gardens, sweet rivers, and angels. But he expressed one deep sorrow to me.'\n\nAkbar was startled. 'What sorrow could my father have in paradise?'\n\n'Sire,' the barber whispered slyly, 'he said that while heaven is glorious, it has no witty, cheerful conversationalists to keep him entertained! He misses the brilliant banter of your court. He begged that you send your most brilliant counselor, Birbal, to heaven to keep him company!'\n\nAkbar, swayed by grief and love for his father, was troubled. How could anyone be sent to heaven alive? The barber suggested: 'Sire, let a great pyre of sandalwood be lit in the public field. As the sacred smoke rises to the clouds, Birbal's spirit can ascend directly to heaven to serve your royal father!'\n\nWhen Akbar presented this request to Birbal, Birbal saw through the deadly conspiracy immediately. The courtiers wanted him burned alive! With calm composure, Birbal bowed: 'Your Majesty, to serve your noble father in paradise is the greatest honor of my life. I ask only for two months to settle my family's affairs and a sum of money to distribute in charity before my departure.'\n\nAkbar readily granted the request.\n\nDuring those two months, Birbal hired trustworthy masons in secret. Right beneath the spot designated for the public pyre, they dug a secret underground tunnel leading three hundred yards away, directly into the basement of Birbal's private residence! The entrance beneath the pyre was concealed with a sliding stone trapdoor covered in loose earth.\n\nOn the appointed day, thousands gathered. Birbal sat upon the sandalwood logs with folded hands. The torch was applied, and thick, billowing clouds of fragrant smoke filled the sky. The moment the smoke shrouded the pyre from view, Birbal slipped through the trapdoor, slid down the tunnel, and safely entered his home!\n\nThe conspirators cheered in triumph, believing their hated rival was turned to ashes.\n\nFor six months, Birbal stayed quietly inside his house, reading books, enjoying family meals, and letting his hair, beard, and mustache grow long, wild, and bushy. When half a year had passed, Birbal walked boldly into the royal court of Agra in broad daylight!\n\nThe courtiers shrieked in terror, thinking they were seeing a ghost! Akbar jumped from his throne, overjoyed: 'Birbal! You have returned from heaven! How is my beloved father?'\n\nBirbal bowed with majestic solemnity: 'Your Majesty, your royal father is in the highest ecstasy! He has sweet fruit, divine music, and eternal youth. He was overjoyed with my visit, and we spent six months sharing stories and laughter!'\n\n'Then why did you return, Birbal?' Akbar asked eagerly.\n\nBirbal stroked his long, wild beard and unkempt hair with a mournful sigh: 'Alas, Your Majesty! While heaven has every luxury imaginable, it lacks one vital trade: there is not a single barber in paradise! As you can see from my wild beard and hair, your father's beard has grown all the way down to his ankles! He pleaded with me to return to Agra and send your royal barber to heaven immediately to give him a clean royal shave!'\n\nThe royal barber, who was standing beside the throne holding his copper basin, turned as pale as a bedsheet. His knees knocked together violently, and he collapsed onto the marble floor, weeping and confessing the entire murderous conspiracy: 'Mercy, Jahapanah! Mercy! It was a lie concocted by the ministers to destroy Birbal!'\n\nAkbar was thunderstruck with fury. He had the corrupt courtiers banished from the empire, sent the deceitful barber to hard labor in the stone quarries, and embraced Birbal with tears of relief, marveling at how truth and ingenuity had turned a deadly trap into complete poetic justice.",
    moral: "Those who dig a pit of destruction for others will eventually fall into it themselves. Truth, patience, and clever planning will overcome the darkest conspiracies.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal returning to court with long bushy hair as the terrified barber confesses before Emperor Akbar",
    word_count: 810,
    reading_time: "4 min",
    listen_time: "5 min",
    audio_url: null,
    publish_date: "2026-12-11",
    is_bedtime: false,
    quiz: [
      {
        question: "How did the corrupt courtiers and barber plan to destroy Birbal?",
        options: [
          "(Recommended) By convincing Akbar to burn Birbal on a pyre so he could 'visit his father in heaven'",
          "By challenging him to a sword fight",
          "By sending him to an island"
        ],
        answerIndex: 0,
        hint: "They told Akbar that his late father needed a witty companion in paradise."
      },
      {
        question: "How did Birbal survive the fire?",
        options: [
          "He dug a secret underground tunnel from the pyre to his own house basement",
          "He wore iron armor",
          "He climbed a tree"
        ],
        answerIndex: 0,
        hint: "He escaped through a hidden trapdoor into a tunnel beneath the logs."
      },
      {
        question: "What excuse did Birbal give for returning from heaven?",
        options: [
          "(Recommended) That heaven had no barbers, so Akbar must send his royal barber next",
          "He ran out of food",
          "He missed the city bazaar"
        ],
        answerIndex: 0,
        hint: "He used his overgrown beard to trap the barber in his own lie."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Classic suspenseful folktale on turning enemies' malice against themselves. Family safe.",
    values: ["courage", "wisdom", "justice", "responsibility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "conspirators", meaning: "people who take part in a secret plan to commit an unlawful or harmful act" },
      { word: "banter", meaning: "playful and friendly exchange of teasing remarks" },
      { word: "ecstasy", meaning: "an overwhelming feeling of great happiness or joyful excitement" },
      { word: "retribution", meaning: "punishment inflicted on someone as vengeance for a wrong or criminal act" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "How long did Birbal stay hidden inside his house?" },
      { tier: "Understand", question: "Why was Birbal's retaliation with the barber so effective without needing physical violence?" },
      { tier: "Apply", question: "When someone tries to set a trap or spread a rumor about you, how can staying calm protect you?" },
      { tier: "Evaluate", question: "Why is jealousy called 'a poison that destroys the vessel it lives in'?" },
      { tier: "Create", question: "Draw a secret blueprint of the underground tunnel connecting the field to Birbal's house." }
    ],
    reflection_prompt: "When you face hostility, do not react with impulsive anger. Step back, breathe, and let wisdom craft your path forward.",
    activity: "Practice the 'Cool-Down Pause': whenever you feel angry today, count backwards from 10 before taking any action.",
    mood: ["brave", "funny", "curious"],
    teaser: "Tomorrow, discover what happened when Birbal said the royal thief had a straw caught in his beard!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-straw-in-beard",
    slug: "the-thief-with-the-straw-in-his-beard",
    language: "en",
    title: "The Thief with the Straw in His Beard",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When a precious ruby ring disappears from Emperor Akbar's bedside table with only seven trusted courtiers present, Birbal identifies the thief in seconds using a single sentence of psychology.",
    keywords: ["straw in the beard story", "akbar birbal stolen ring", "psychological wit birbal", "175 stories of akbar and birbal"],
    tags: ["Humor", "Wisdom", "Psychology", "Justice", "Honesty"],
    full_text: "One sunny afternoon, Emperor Akbar was resting in his private pavilion. Before drifting into a short nap, he slipped off a priceless heirloom ring—a rare pigeon-blood ruby set in filigreed gold, gifted to him by his father—and placed it on a small carved sandalwood table beside his couch.\n\nWhen Akbar awoke an hour later, the precious ring was gone! The room had been guarded by sentries outside the doors, and only seven trusted personal courtiers and attendants had entered the room during that hour to adjust the draperies and replenish the water jugs.\n\nAkbar summoned the seven courtiers into the Diwan-i-Khas. Every single one protested their innocence with solemn oaths: 'Sire, I would rather lose my right arm than steal from Your Majesty!'\n\nAkbar called for Birbal: 'Birbal, my heirloom ring is gone. It was taken by one of these seven men, but searching their pockets has revealed nothing. Can you identify the thief without torture or wrongful accusation?'\n\nBirbal walked slowly past the seven courtiers. He looked into each man's eyes. Some looked nervous, some looked overly confident, but outward expressions alone could be deceptive.\n\nBirbal turned to Emperor Akbar with a mysterious smile: 'Your Majesty, do not worry. The royal ruby ring was not stolen by an ordinary thief. It was stolen by someone who was so clumsy that, while snatching the ring from the sandalwood box, a piece of dry straw from the velvet lining became caught in his beard!'\n\nBirbal then announced in a loud, commanding voice that echoed across the high arches: 'The thief has a yellow straw stuck right in the middle of his beard!'\n\nThe moment Birbal uttered those words, six of the courtiers stood perfectly still, looking at Birbal with puzzled expressions.\n\nBut the seventh courtier—an attendant named Qasim—unconsciously raised his trembling right hand and hastily brushed his chin and beard to sweep the imaginary straw away!\n\nBirbal stepped forward instantly, grasped Qasim's wrist with gentle firmness, and smiled into his shocked eyes: 'Your Majesty, here is your thief! A guilty conscience needs no accuser—it betrays itself at the slightest whisper.'\n\nQasim fell to his knees in panic, trembling from head to foot. He reached deep into the secret seam of his embroidered sash, pulled out the glistening pigeon-blood ruby ring, and laid it upon the marble floor, begging for the Emperor's forgiveness.\n\nAkbar retrieved his precious ring in astonishment: 'Birbal, your psychological mastery is breathtaking! How did you know he would touch his beard?'\n\nBirbal replied with gentle wisdom: 'Sire, an innocent person has nothing to hide; when they hear an accusation, their mind is at peace. But a guilty person is constantly consumed by anxiety, terrified that their secret has been discovered. The moment I mentioned a straw, his subconscious fear forced his hand to verify if he was exposed.'\n\nAkbar praised Birbal, rewarded him with twenty gold mohurs, and ordered Qasim to perform community service cleaning the public gardens, having proved once again that integrity is transparent, while guilt carries its own undoing.",
    moral: "A guilty conscience betrays itself. Truth brings inner peace and confidence, while deceit fills the heart with constant, self-revealing anxiety.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of the guilty courtier brushing his beard as Birbal gently catches his hand before Emperor Akbar",
    word_count: 580,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-12",
    is_bedtime: false,
    quiz: [
      {
        question: "What precious heirloom disappeared from Emperor Akbar's table?",
        options: [
          "(Recommended) A priceless pigeon-blood ruby ring set in gold",
          "A diamond sword",
          "A golden pocket watch"
        ],
        answerIndex: 0,
        hint: "Akbar took off his ruby ring before resting."
      },
      {
        question: "What trick did Birbal use to identify the thief among the seven courtiers?",
        options: [
          "(Recommended) He announced that the thief had a piece of straw stuck in his beard",
          "He searched all their houses at midnight",
          "He weighed their shadows"
        ],
        answerIndex: 0,
        hint: "The guilty man instinctively touched his chin to brush away the imaginary straw."
      },
      {
        question: "What psychological truth did Birbal explain to the Emperor?",
        options: [
          "A guilty conscience needs no accuser; anxiety betrays itself",
          "Everyone with a beard is guilty",
          "Rubies always attract straw"
        ],
        answerIndex: 0,
        hint: "Fear of exposure forces a guilty person to make involuntary moves."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Classic detective wit tale based on human psychology and self-incrimination. Safe for all.",
    values: ["honesty", "wisdom", "justice", "responsibility"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "filigreed", meaning: "delicate and ornamental work of fine gold or silver wire" },
      { word: "heirloom", meaning: "a valuable object that has belonged to a family for several generations" },
      { word: "unconsciously", meaning: "without being aware; done through automatic habit or hidden impulse" },
      { word: "transparent", meaning: "open, honest, and easy to perceive or understand without deception" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "How many courtiers entered Akbar's room during his nap?" },
      { tier: "Understand", question: "Why did the six innocent courtiers not touch their beards when Birbal spoke?" },
      { tier: "Apply", question: "Have you ever felt your heart beat faster or your hands fidget when you did something you weren't supposed to do?" },
      { tier: "Evaluate", question: "Why is living an honest life so much less stressful than trying to hide a mistake?" },
      { tier: "Create", question: "Write a short poem about the light feeling of an honest heart versus the heavy burden of a secret." }
    ],
    reflection_prompt: "When you tell the truth, you never have to remember what you said or worry about being exposed. Honesty is total freedom.",
    activity: "Practice making a clean breast of any small unfinished chore today before anyone has to ask you about it.",
    mood: ["brave", "funny", "comforting"],
    teaser: "Tomorrow, discover what kind of horse Birbal promised to deliver to the Emperor: a horse of a very rare color!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-horse-special-color",
    slug: "the-emperors-rare-seven-day-horse",
    language: "en",
    title: "The Emperor's Rare Seven-Day Horse",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When Emperor Akbar demands that Birbal find him a horse that is neither black, white, brown, gray, chestnut, bay, nor piebald, Birbal accepts the impossible demand and delivers an unforgettable condition.",
    keywords: ["akbar birbal rare horse story", "horse of unique color birbal", "humorous tales of akbar and birbal", "175 stories of akbar and birbal"],
    tags: ["Humor", "Cleverness", "Wisdom", "Logic"],
    full_text: "One cool morning while riding through the royal meadows outside Agra, Emperor Akbar was in a mischievous mood. Turning to Birbal, who rode alongside him, Akbar said with a sly smile:\n\n'Birbal, I have a deep desire to add a truly unique steed to my royal stables. I want you to find me a horse whose coat is neither black, nor white, nor brown, nor gray, nor chestnut, nor bay, nor piebald, nor dun! In fact, it must not be of any color that exists on ordinary horses! Can you procure such a horse for me?'\n\nThe courtiers riding behind them muffled their chuckles. They thought: *'At last, the Emperor has cornered Birbal with an impossible riddle! No horse can exist without having a color!'*\n\nBirbal did not flinch. He bowed serenely from his saddle: 'Sire, I accept your imperial command. Allow me just two weeks to scour the breeding pastures of the northern provinces.'\n\n'Granted!' laughed Akbar. 'Two weeks, Birbal. But if you fail, you must acknowledge your defeat!'\n\nTwo weeks passed. On the fourteenth day, Birbal appeared before Emperor Akbar in the Diwan-i-Aam. He was smiling cheerfully with folded hands.\n\n'Well, Birbal,' Akbar inquired eagerly, 'have you found my horse of no ordinary color?'\n\n'I have indeed, Your Majesty!' Birbal replied with enthusiasm. 'I found a magnificent stallion in the hills of Kashmir. Its coat is of such an extraordinary, unseen hue that it defies every name of ordinary horse colors. It is strong, swift as an arrow, and has a gait as smooth as flowing silk!'\n\nAkbar's eyes sparkled with excitement. 'Where is it, Birbal? Bring it to the palace stables immediately! I must see it with my own eyes!'\n\nBirbal shook his head with grave politeness: 'Alas, Your Imperial Majesty! The breeder of this wondrous horse is an eccentric scholar of astronomy. He agreed to surrender the magnificent steed to Your Majesty on one single condition.'\n\n'What condition?' demanded Akbar impatiently. 'I will grant him whatever bags of gold he desires!'\n\n'Sire, he asks for no gold,' Birbal explained smoothly. 'He asks only that Your Imperial Majesty must personally come to collect the horse on a day that is: **neither Sunday, nor Monday, nor Tuesday, nor Wednesday, nor Thursday, nor Friday, nor Saturday!** You may come on any other day of the week you please, and the horse is yours!'\n\nAkbar froze. He stared at Birbal, his mouth slowly opening. Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday—those were the only seven days of the week! There was no other day in existence!\n\nThe courtiers in the hall looked at one another and began to smile. Then Emperor Akbar burst into hearty, appreciative laughter that echoed off the marble arches.\n\n'Touché, Birbal!' exclaimed the Emperor, shaking his head with delight. 'I asked you for an impossible horse of a non-existent color, and you gave me an impossible day of a non-existent week to collect it! You have answered an absurdity with an equal absurdity!'\n\nAkbar rewarded Birbal with a silk purse of pearls, reminding his ministers that reasonable questions receive reasonable answers, while impossible whims are best met with playful wit.",
    moral: "Unreasonable or impossible demands are best handled with humor, logic, and matching wit rather than frustration.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal explaining the seven days of the week to a laughing Emperor Akbar",
    word_count: 560,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-13",
    is_bedtime: false,
    quiz: [
      {
        question: "What impossible demand did Emperor Akbar make regarding a horse?",
        options: [
          "(Recommended) To find a horse whose color was none of the existing horse colors",
          "To find a horse with two heads",
          "To find a horse that could swim across the ocean"
        ],
        answerIndex: 0,
        hint: "Akbar listed all horse colors and forbade them all."
      },
      {
        question: "What condition did Birbal set for collecting the horse?",
        options: [
          "(Recommended) The Emperor must collect it on a day that is neither Sunday through Saturday",
          "The Emperor must walk on his hands",
          "The Emperor must bring ten tons of honey"
        ],
        answerIndex: 0,
        hint: "Birbal used the non-existence of an eighth day of the week."
      },
      {
        question: "How did Akbar react to Birbal's witty response?",
        options: [
          "He laughed and recognized that an absurd demand was matched by an absurd day",
          "He was furious and banished Birbal",
          "He looked for the horse in the calendar"
        ],
        answerIndex: 0,
        hint: "Akbar appreciated the clever logical mirror."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Classic logical humor demonstrating witty problem-solving. Family safe.",
    values: ["humor", "wisdom", "curiosity", "logic"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "procure", meaning: "to obtain something, especially with care or effort" },
      { word: "piebald", meaning: "having irregular patches of two colors, typically black and white" },
      { word: "eccentric", meaning: "unconventional and slightly strange in behavior or views" },
      { word: "absurdity", meaning: "the quality or state of being wildly unreasonable, illogical, or ridiculous" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What colors did Akbar forbid for the horse?" },
      { tier: "Understand", question: "Why was Birbal's response a perfect match for Akbar's challenge?" },
      { tier: "Apply", question: "When someone asks you to do something impossible or unfair, how can humor help defuse the tension?" },
      { tier: "Evaluate", question: "Why is wit more effective than arguing angrily when dealing with playful teasers?" },
      { tier: "Create", question: "Invent an eighth day of the week! What would you call it and what would people do on that day?" }
    ],
    reflection_prompt: "When life hands you a puzzle with impossible rules, step outside the box and find the creative perspective that makes everyone smile.",
    activity: "Share this funny story with a friend and see if they can figure out the punchline before you tell them!",
    mood: ["funny", "happy", "curious"],
    teaser: "Tomorrow, discover what happened when a visiting scholar asked Birbal: 'Where is the exact center of the earth?'",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-center-of-earth",
    slug: "the-center-of-the-earth-and-the-count-of-stars",
    language: "en",
    title: "The Center of the Earth and the Count of Stars",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "A conceited philosopher visits Agra with three 'unanswerable' cosmic questions: Where is the center of the earth? How many stars in the sky? What is the exact count of men and women? Birbal answers all three with unforgettable practical wit.",
    keywords: ["center of the earth birbal", "counting stars in sky story", "akbar birbal three questions", "175 stories of akbar and birbal"],
    tags: ["Humor", "Wisdom", "Astronomy", "Philosophy", "Cleverness"],
    full_text: "A conceited philosopher and astronomer from a distant empire arrived at the royal court of Agra. Puffed up with academic arrogance, he challenged the court of Emperor Akbar: 'I have traveled across kingdoms, and no scholar has ever been able to answer my three fundamental questions. If your court fails to answer them with empirical precision, you must concede the supremacy of our academies.'\n\nAkbar summoned Birbal to face the visitor. 'Present your three questions, learned traveler,' said Birbal politely.\n\nThe philosopher puffed out his chest and delivered his first question: 'Tell me, Birbal: where is the exact geographic center of the earth?'\n\nWithout hesitating for a single second, Birbal picked up an iron surveyor's peg from a nearby royal architect's table, walked into the middle of the Diwan-i-Aam, drove the peg firmly into the seam between two marble floor tiles, and drew a circle around it with chalk.\n\n'Here is the exact center of the earth,' declared Birbal with a serene bow. 'If you doubt its precision, honorable scholar, you are welcome to take a measuring tape, measure every mile to the east, west, north, and south, and if you find it off by even a millimeter, I shall concede defeat!'\n\nThe philosopher stared in shock. How could anyone measure the entire globe with a measuring tape? He could neither prove it nor disprove it! He cleared his throat in frustration.\n\n'Very well,' snapped the philosopher. 'Here is my second question: exactly how many stars shine in the heavens?'\n\nBirbal smiled and whispered to the royal stable master. Ten minutes later, two attendants walked into the hall leading a plump, fluffy Kashmiri sheep with extraordinarily thick, curly fleece.\n\n'Honored philosopher,' Birbal announced, pointing to the curly sheep, 'there are exactly as many stars in the heavens as there are hairs upon the body of this sheep! You are welcome to count each hair one by one. If there is a single star more or less, you may declare me wrong.'\n\n'Nonsense!' shouted the philosopher, turning red. 'How can anyone possibly count all the hairs on a sheep?'\n\n'And how can anyone possibly count all the stars in the night sky?' Birbal countered gently with a smile. 'You asked for an unmeasurable count, and I provided an equal unmeasurable mirror.'\n\nThe courtiers snickered. The philosopher swallowed his pride and asked his third and final question: 'Tell me, Birbal: what is the exact number of men and women in the entire world?'\n\nBirbal stroked his chin thoughtfully and said: 'Ah, learned sir, that is indeed a tricky calculation! The exact count could be easily determined, except for one great difficulty: there are certain people in this world who are neither truly wise men nor gentle women—people who spend their entire lives asking useless, unanswerable riddles instead of doing practical good for humanity! If we eliminate all such idle questioners from the count, I shall give you the exact number by dinner time!'\n\nThe entire court erupted into deafening laughter. Emperor Akbar applauded with sparkling joy. The philosopher realized that his pompous intellectual vanity had been completely punctured by common sense and practical wisdom.\n\nBowing down to Birbal, the scholar admitted: 'You have taught me that true learning is not boasting of unprovable trivia, but understanding human reality with humility.' The scholar departed Agra in peace, having gained far more wisdom than he arrived with.",
    moral: "Do not waste intellect on arrogant, unprovable arguments. True wisdom is grounded in humility, practical common sense, and doing good for the world.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal pointing to the peg in the marble floor as the foreign philosopher looks on in astonishment",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-14",
    is_bedtime: false,
    quiz: [
      {
        question: "How did Birbal answer the question 'Where is the center of the earth?'",
        options: [
          "(Recommended) He drove a peg into the floor and challenged the scholar to measure the globe to disprove it",
          "He pointed to the North Pole",
          "He brought out an antique globe"
        ],
        answerIndex: 0,
        hint: "He placed a marker and put the burden of measurement on the questioner."
      },
      {
        question: "What animal did Birbal bring to answer the count of stars?",
        options: [
          "(Recommended) A fluffy sheep, saying the stars equaled the hairs on its coat",
          "A peacock with starry feathers",
          "A spotted leopard"
        ],
        answerIndex: 0,
        hint: "He brought a sheep with curly fleece."
      },
      {
        question: "What lesson did the foreign philosopher learn at the end?",
        options: [
          "True wisdom is grounded in humility and practical goodness, not arrogant vanity",
          "Never visit Agra",
          "Sheep have too much hair"
        ],
        answerIndex: 0,
        hint: "He realized boastful trivia is inferior to genuine human understanding."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Classic philosophical wit showing the limits of pomposity and pedantry. Family safe.",
    values: ["humility", "wisdom", "curiosity", "logic"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "conceited", meaning: "excessively proud of oneself; vain and arrogant" },
      { word: "empirical", meaning: "based on, concerned with, or verifiable by observation or experience rather than theory" },
      { word: "pompous", meaning: "affectedly and irritatingly grand, solemn, or self-important" },
      { word: "pedantry", meaning: "excessive concern with minor details and rules in displaying academic learning" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "What were the three questions the foreign scholar asked?" },
      { tier: "Understand", question: "Why is it foolish to argue about questions that no human being can measure or prove?" },
      { tier: "Apply", question: "How can you focus your curiosity on learning things that help your family and community?" },
      { tier: "Evaluate", question: "Did Birbal insult the scholar, or did he hold up a mirror to his vanity? Explain." },
      { tier: "Create", question: "Write down three fascinating, real scientific facts about the stars in the night sky." }
    ],
    reflection_prompt: "Knowledge is knowing facts; wisdom is knowing how to use knowledge with kindness, humility, and purpose.",
    activity: "Look up at the stars tonight with your family and admire the vast wonder of the universe in quiet gratitude.",
    mood: ["funny", "curious", "brave"],
    teaser: "Tomorrow, discover what happened when Emperor Akbar challenged Birbal to come to court neither under the sun nor in the shade!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-shortened-line",
    slug: "shortening-the-line-without-touching-it",
    language: "en",
    title: "Shortening the Line Without Touching It",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "Emperor Akbar draws a chalk line upon the floor and challenges his court to make it shorter without erasing, rubbing, or touching it. Birbal solves the riddle with a profound lesson on perspective and excellence.",
    keywords: ["shortening the line birbal", "akbar chalk line story", "moral stories for children perspective", "175 stories of akbar and birbal"],
    tags: ["Humor", "Wisdom", "Excellence", "Perspective", "Kindness"],
    full_text: "One peaceful morning in the Diwan-i-Khas, Emperor Akbar called for a piece of white chalk. Walking to the center of the polished marble floor, the Emperor bent down and drew a straight white line, approximately two feet in length.\n\nAkbar stood up, brushed the chalk dust from his fingers, and addressed his assembled ministers and counselors:\n\n'Nobles of Hindustan! Here is my challenge for today: whoever among you can make this chalk line shorter—without rubbing it out, without erasing any part of it, without brushing away the dust, and without touching the line in any way—shall be recognized as the foremost intellect of this court!'\n\nThe ministers scratched their chins and crowded around the chalk mark. Several stepped forward with bizarre suggestions:\n\n'Sire,' whispered one courtier, 'can we pour water over the floor to dissolve it?'\n\n'No!' replied Akbar firmly. 'You may not touch the line or wash it away.'\n\n'Can we cover the ends of the line with silk rugs?' asked another.\n\n'Covering it does not make the line itself shorter,' Akbar smiled. 'The line must actually become shorter in comparison, yet remain completely untouched!'\n\nOne by one, the ministers gave up in defeat. They declared: 'Your Majesty, this is mathematically impossible! A line cannot become shorter unless you erase some of it!'\n\nThen Akbar turned to Birbal with an inviting smile: 'Birbal, what say you?'\n\nBirbal picked up a piece of white chalk from the table. Without saying a single word, he knelt upon the marble floor beside Akbar's line. Birbal placed his chalk two inches parallel to Akbar's line and drew a magnificent, bold, straight line that was nearly four feet long—twice as long as the Emperor's line!\n\nBirbal stood up, bowed with serene grace, and gestured to both lines on the floor.\n\n'Look, Your Imperial Majesty,' said Birbal softly. 'Your line is completely untouched. Not a grain of chalk has been rubbed away. Yet, standing beside my longer line, your line has undeniably become shorter!'\n\nThe entire court gasped in sheer delight. The visual proof was so simple, so elegant, and so irrefutable that even the most skeptical ministers clapped in admiration.\n\nEmperor Akbar smiled with radiant satisfaction: 'You have done it again, Birbal! But tell my court: what is the deeper life lesson hidden within this chalk drawing?'\n\nBirbal replied with words that resonated deep in everyone's heart: 'Your Majesty, in life, if you wish to surpass someone or make your mark, you do not need to tear others down, erase their work, or speak ill of them to diminish their height. You simply need to extend your own line—through greater kindness, deeper learning, hard work, and moral excellence. When your own line grows tall and noble, you elevate the world without ever harming another.'\n\nAkbar embraced Birbal warmly, declaring that this was one of the finest lessons ever spoken in Agra. The chalk lines were preserved on the floor for three days so every visiting student and citizen could absorb the timeless truth of building oneself up rather than tearing others down.",
    moral: "To become great, you do not need to tear others down or diminish their achievements. Simply focus on growing your own line through kindness, excellence, and dedication.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Birbal drawing a longer chalk line beside the Emperor's line on the marble floor",
    word_count: 590,
    reading_time: "3 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-15",
    is_bedtime: false,
    quiz: [
      {
        question: "What challenge did Emperor Akbar give regarding the chalk line?",
        options: [
          "(Recommended) Make the line shorter without touching, erasing, or washing it",
          "Draw a circle around it in one second",
          "Jump over the line three times"
        ],
        answerIndex: 0,
        hint: "The line had to become shorter without any physical contact."
      },
      {
        question: "How did Birbal make the Emperor's line shorter?",
        options: [
          "(Recommended) By drawing a much longer line right beside it",
          "By blowing chalk dust away",
          "By dimming the palace lanterns"
        ],
        answerIndex: 0,
        hint: "By comparison, the first line became the shorter one."
      },
      {
        question: "What moral lesson did Birbal explain about personal growth?",
        options: [
          "Never tear others down to make yourself look big; focus on extending your own excellence",
          "Always carry chalk in your pocket",
          "Never draw on marble floors"
        ],
        answerIndex: 0,
        hint: "We elevate ourselves through our own hard work, not by diminishing others."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Profound pedagogical classic on positive competition, self-improvement, and avoiding jealousy. Safe for all.",
    values: ["excellence", "kindness", "humility", "wisdom", "responsibility"],
    reading_level: "Beginner",
    vocabulary: [
      { word: "parallel", meaning: "side by side and having the same distance continuously between them" },
      { word: "irrefutable", meaning: "impossible to deny or disprove; completely certain" },
      { word: "diminish", meaning: "to make or become less, smaller, or less important" },
      { word: "elevate", meaning: "to raise to a more important, noble, or elevated level" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "How long was the chalk line drawn by Akbar originally?" },
      { tier: "Understand", question: "Why is competing by building yourself up healthier than trying to sabotage someone else?" },
      { tier: "Apply", question: "If a classmate gets a better grade or plays a game well, how can you use Birbal's lesson instead of feeling jealous?" },
      { tier: "Evaluate", question: "Why do some people try to make themselves feel big by putting others down?" },
      { tier: "Create", question: "Draw two lines on paper: write on the longer one three good habits you will practice to grow your own line." }
    ],
    reflection_prompt: "Whenever jealousy tries to whisper in your ear, remember: there is plenty of room in the sky for every star to shine brightly.",
    activity: "Compliment someone today who did something well, celebrating their success with a sincere smile.",
    mood: ["happy", "brave", "comforting"],
    teaser: "Tomorrow, discover what happened when Emperor Akbar asked every citizen in the city to pour a single cup of milk into the royal reservoir!",
    series_id: null,
    part_number: null,
    reviewed: true
  },
  {
    id: "akbar-birbal-milk-reservoir",
    slug: "the-emperors-milk-reservoir-and-the-water-of-assumptions",
    language: "en",
    title: "The Emperor's Milk Reservoir and the Shared Blame",
    genre: "Humorous Tales",
    collection: "Akbar–Birbal",
    culture_region: "Mughal Empire",
    age_group: "All",
    summary: "When Emperor Akbar asks every citizen of Agra to pour one cup of fresh milk into the palace pond under the cover of darkness, dawn reveals a reservoir filled with pure water. A timeless parable on individual civic responsibility.",
    keywords: ["akbar birbal milk reservoir", "pond of milk story", "civic responsibility moral story", "175 stories of akbar and birbal"],
    tags: ["Humor", "Responsibility", "Community", "Honesty", "Wisdom"],
    full_text: "During a royal festival celebration, Emperor Akbar wanted to test the civic honesty and collective responsibility of his subjects. In consultation with Birbal, the Emperor issued an imperial proclamation throughout the city of Agra:\n\n'To all beloved citizens of Agra: To celebrate the annual harvest festival, the great stone reservoir in the palace courtyard has been drained and cleaned. Tonight, under the cover of darkness between dusk and midnight, let every adult citizen bring one single cup of pure milk and pour it into the reservoir. By sunrise tomorrow, we shall have a grand reservoir overflowing with white milk to prepare sweet kheer for the poor and hungry!'\n\nThe proclamation was read in every public square, bazaar, and neighborhood. The people listened attentively and nodded in agreement.\n\nNow, in one corner of the city lived an ordinary merchant named Ramdas. That evening, as he prepared to go to the palace with his cup, an irresponsible thought crossed his mind:\n\n*'Thousands of people will be pouring rich, creamy milk into the colossal reservoir under the dark night sky. It will be pitch dark. If I pour just one single cup of water instead of milk, who could ever tell? One cup of water will be instantly lost in thousands of gallons of milk! Nobody will notice, and I can save my milk for breakfast!'*\n\nConvinced of his cleverness, Ramdas filled his copper cup with tap water, slipped into the palace courtyard under the shadows of midnight, emptied his cup into the dark waters of the pool, and walked home with a satisfied smirk.\n\nAt sunrise, Emperor Akbar, Birbal, and the royal court walked out onto the marble pavilion overlooking the great stone reservoir. Akbar was beaming with anticipation, eager to behold a lake of snowy white milk.\n\nAkbar leaned over the stone balustrade and looked down.\n\nHis jaw dropped in utter shock. His eyes widened in disbelief.\n\nThe colossal stone reservoir was completely filled to the brim—**not with milk, but with crystal-clear, 100% pure tap water!** Not a single drop of milk was visible in the entire pool!\n\nAkbar turned to Birbal, bewildered and angry: 'Birbal! What in the world has happened? Where is the milk? Did the palace guards tamper with the reservoir?'\n\nBirbal shook his head with a sad, knowing smile: 'No, Your Majesty. The guards did not touch the reservoir. What you see before you is the mirror of human psychology when individual responsibility is forgotten.'\n\nBirbal explained: 'Every single citizen in Agra thought the exact same selfish thought as your neighbor Ramdas! Every person said to themselves: *\"Thousands of others will bring pure milk; my single cup of water will never be noticed in the dark!\"* And because everyone assumed that someone else would do the right thing, not a single person did the right thing!'\n\nAkbar was stunned into silence. He realized how profound a truth this comical failure revealed. If every individual evades their small duty thinking 'my part does not matter,' an entire society ends up with cold water instead of nourishment.\n\nAkbar summoned the citizens to the square and addressed them with compassion: 'Look into this pool of water. It shows what happens when we assume responsibility belongs to others. A community flourishes only when each person honors their own duty, even when no one is watching in the dark.'\n\nThe citizens bowed their heads in deep shame. That afternoon, they returned voluntarily with buckets of fresh milk and sweet rice, cooking a grand feast for the city's orphans and poor, having learned that true integrity is doing your part when nobody sees you.",
    moral: "Never assume that your contribution does not matter, or that someone else will carry your responsibility. A community thrives only when each individual does what is right, even in the dark.",
    image: "/images/stories/akbar-birbal-crows.svg",
    image_alt: "Illustration of Emperor Akbar and Birbal staring down at the palace reservoir filled with clear water",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: null,
    publish_date: "2026-12-16",
    is_bedtime: false,
    quiz: [
      {
        question: "What did Emperor Akbar ask each citizen to pour into the reservoir at night?",
        options: [
          "(Recommended) One cup of pure milk",
          "One cup of rose water",
          "One gold coin"
        ],
        answerIndex: 0,
        hint: "He asked for milk to make sweet kheer for the poor."
      },
      {
        question: "What was the reservoir filled with when sunrise arrived?",
        options: [
          "(Recommended) Pure water, because everyone assumed someone else would bring milk",
          "Pure milk",
          "Nothing, it was dry"
        ],
        answerIndex: 0,
        hint: "Every single person brought water thinking their cup wouldn't be noticed."
      },
      {
        question: "What vital civic lesson does this story teach?",
        options: [
          "Individual responsibility matters; never assume others will do your part",
          "Never drink milk at night",
          "Ponds should only hold rainwater"
        ],
        answerIndex: 0,
        hint: "Integrity is doing the right thing even when no one is watching."
      }
    ],
    author: "Traditional Mughal Folklore (Ramesh Mudholkar Collection)",
    status: "published",
    content_notes: "Classic ethical parable on the bystander effect, tragedy of the commons, and personal accountability. Safe for all.",
    values: ["responsibility", "honesty", "community", "integrity"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "civic", meaning: "relating to a city, town, or the duties of people who live there" },
      { word: "reservoir", meaning: "a large natural or artificial lake used as a source of water supply" },
      { word: "balustrade", meaning: "a railing supported by balusters, especially on a balcony to prevent falling" },
      { word: "integrity", meaning: "the quality of being honest and having strong moral principles, even when unwatched" }
    ],
    discussion_questions: [
      { tier: "Remember", question: "Why did Akbar want to collect milk in the palace pool?" },
      { tier: "Understand", question: "What is the 'bystander effect' or 'shared blame' where everyone assumes someone else will do the work?" },
      { tier: "Apply", question: "In a team project or family cleanup, have you ever held back thinking 'someone else will do it'?" },
      { tier: "Evaluate", question: "How does our world improve when each person takes 100% responsibility for their small part?" },
      { tier: "Create", question: "Write a short pledge of responsibility for your classroom or household chore team." }
    ],
    reflection_prompt: "Integrity is doing the right thing when you know nobody will ever find out. What honest choice can you make today in the quiet?",
    activity: "Pick up a piece of litter or put away something left out, without telling anyone or seeking praise.",
    mood: ["brave", "funny", "calm"],
    teaser: "Tomorrow, discover what happened when Birbal was asked to paint a portrait of the invisible wind!",
    series_id: null,
    part_number: null,
    reviewed: true
  }
];

let added = 0;
for (const story of megaAkbarBirbalStories) {
  if (!existingIds.has(story.id)) {
    existing.push(story);
    existingIds.add(story.id);
    added++;
    console.log(`[Akbar-Birbal Mega Batch] Added: "${story.title}"`);
  }
}

fs.writeFileSync(enStoriesPath, JSON.stringify(existing, null, 2), 'utf8');
console.log(`[Akbar-Birbal Mega Batch] Done! Added ${added} stories. Total stories in English: ${existing.length}`);
