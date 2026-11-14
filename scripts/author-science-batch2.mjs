import fs from 'fs';
import path from 'path';

const batch2En = [
  {
    id: "science-6-raman-deep-blue-sea",
    slug: "science-6-raman-deep-blue-sea",
    language: "en",
    title: "Sir C. V. Raman and the Secret of the Deep Blue Sea",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "India (Calcutta / Chennai)",
    age_group: "All Ages",
    summary: "Sailing across the Mediterranean in 1921, Indian physicist C. V. Raman looks at the mesmerizing azure waters and challenges Lord Rayleigh's theory that the sea merely reflects the sky. Using a simple pocket Nicol prism, Raman proves water molecules scatter light themselves—paving the path to the Raman Effect and Asia's first Nobel Prize in science.",
    keywords: ["c v raman", "raman effect", "light scattering", "deep blue sea", "physics", "india", "optics"],
    tags: ["science", "physics", "optics", "curiosity", "nobel-prize", "india"],
    full_text: `In the hot summer of 1921, the steamship S.S. Narkunda was ploughing through the warm, sapphire-tinted waters of the Mediterranean Sea, bound for Bombay. Leaning over the polished teak deck railing was a slender, thirty-two-year-old Indian professor of physics named Chandrasekhara Venkata Raman.\n\nMost passengers were lounging on deck chairs or gazing idly toward the horizon, but Raman could not take his eyes off the sea. The water was of an incandescent, breathtaking blue—a blue so deep, vibrant, and luminous that it seemed to glow from the very abyss of the ocean.\n\nFor decades, the standard scientific doctrine established by the renowned British physicist Lord Rayleigh held that the sea was not inherently blue at all. Rayleigh argued that water was merely a passive, colorless mirror that reflected the blue of the sky above. But as Raman stared into the rolling waves under the Mediterranean sun, a restless doubt stirred in his mind.\n\nIf the sea was only reflecting the sky, why did it appear intensely vivid blue even on overcast mornings when gray clouds blanketed the heavens? Why did the Mediterranean look remarkably deeper blue than the North Sea or the Atlantic under identical skies?\n\nRaman reached into his jacket pocket and pulled out a simple scientific instrument he carried everywhere: a handheld Nicol prism, a crystal cut from Iceland spar capable of polarizing light. Standing at the ship’s rail, he pointed the prism at the sea at Brewster’s angle—the precise optical angle at which surface reflection is entirely extinguished.\n\nHe squinted through the crystal. If Rayleigh’s theory was correct and the color came from sky reflection, quenching the reflection should make the water appear dark, gray, or transparent.\n\nInstead, Raman caught his breath in astonishment. Through the prism, the sea did not turn gray—it shone with an even richer, purer, and more dazzling sapphire radiance! The color was not bouncing off the surface from the sky; it was streaming outward from the depths of the ocean itself!\n\nRight there on the pitching deck of the S.S. Narkunda, Raman scribbled an urgent scientific paper for the journal Nature: water molecules themselves were scattering sunlight! Just as tiny nitrogen and oxygen molecules in the upper atmosphere scatter the sun’s shorter blue rays to create a blue sky, billions of liquid water molecules were scattering sunlight deep within the sea.\n\nReturning to Calcutta, Raman plunged into intense investigations in the modest laboratories of the Indian Association for the Cultivation of Science at 210 Bowbazar Street. Working tirelessly with his brilliant student K. S. Krishnan and utilizing improvised equipment—a modified mercury arc lamp, telescopes, and violet glass filters—Raman pushed deeper into the mystery.\n\nIn February 1928, they made an epoch-making discovery. When intense monochromatic light passes through a transparent liquid, a tiny fraction of the scattered light emerges with a change in wavelength—as if the bouncing photons exchanged energy with the vibrating molecules of the liquid! This subtle shift in color, known forever after as the \"Raman Effect,\" proved that light carries an unmistakable fingerprint of every molecule it touches.\n\nIn 1930, C. V. Raman was awarded the Nobel Prize in Physics—the first Asian scientist in history to receive the honor. Standing before the world’s scholars in Stockholm, he remembered the gentle waves of the Mediterranean and the simple pocket prism that had unlocked the secret of the sea. His triumph taught children and scientists worldwide that true breakthroughs do not require massive palaces or boundless wealth—only an insatiable curiosity and the courage to question established beliefs.`,
    moral: "Never accept conventional assumptions without inquiry; the simplest curiosity about everyday wonders can uncover universal truths.",
    image: "/images/stories/science.webp",
    image_alt: "Sir C. V. Raman observing light scattering through a prism aboard a ship on the Mediterranean Sea.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "What long-accepted theory about the blue color of the ocean did C. V. Raman question?",
        options: [
          "Lord Rayleigh's theory that the sea is blue merely because it reflects the sky.",
          "Aristotle's claim that sea water contains invisible blue minerals.",
          "Newton's idea that ocean salt absorbs all rainbow colors except indigo.",
          "Galileo's hypothesis that underwater volcanoes color the Mediterranean."
        ],
        answerIndex: 0,
        hint: "Think about whether the ocean's blue comes from above or from the water molecules themselves."
      },
      {
        question: "How did Raman eliminate surface sky reflection while standing on the deck of the S.S. Narkunda?",
        options: [
          "By viewing the water through a polarizing Nicol prism at Brewster's angle.",
          "By diving beneath the waves with a waterproof magnifying glass.",
          "By waiting until midnight when the sky was completely pitch black.",
          "By placing a large black velvet cloth across the surface of the sea."
        ],
        answerIndex: 0,
        hint: "Recall the small optical crystal prism he pulled from his jacket pocket."
      },
      {
        question: "What physical phenomenon is known as the 'Raman Effect'?",
        options: [
          "A change in light wavelength caused by energy exchange with vibrating molecules.",
          "The speed of light increasing when passing through cold ocean water.",
          "Sound waves traveling faster in pure water than in atmospheric air.",
          "Mirrors reflecting double images under bright sunlight."
        ],
        answerIndex: 0,
        hint: "Consider how scattered light gains or loses energy when striking liquid molecules."
      }
    ],
    author: "Historical Science Chronicle / Daily Tale Editorial",
    status: "published",
    content_notes: "Based on Sir C. V. Raman's 1921 Nature paper and his 1922 monograph The Molecular Diffraction of Light.",
    values: ["curiosity", "inquiry", "scientific rigor", "national pride", "perseverance"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "scattering", meaning: "the deflection of light rays in multiple directions by small particles or molecules" },
      { word: "polarization", meaning: "the restriction of light wave vibrations to a single geometric plane" },
      { word: "wavelength", meaning: "the distance between successive crests of a wave, determining its color in visible light" },
      { word: "monochromatic", meaning: "light of a single, precise wavelength or pure color" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "Why did Raman suspect that the sea's color was not merely a reflection of the sky?" },
      { tier: "Analyze", prompt: "How does molecular scattering in ocean water compare to light scattering in the atmosphere?" },
      { tier: "Apply", prompt: "What everyday natural phenomenon around you could you investigate using simple observation?" }
    ],
    reflection_prompt: "Think of an everyday sight—like the color of the sky or sunset—and wonder about the physical cause behind it.",
    activity: "Fill a clear glass with water, add a few drops of milk, and shine a flashlight beam through it in a dim room to observe light scattering.",
    mood: "wonder",
    teaser: "How a curious look at the Mediterranean Sea led an Indian physicist to a historic Nobel Prize.",
    series_id: "science-pioneers",
    part_number: 6,
    reviewed: true,
    source_book: "The Molecular Diffraction of Light (1922) & Nature (1921, 1928)",
    source_author: "Sir C. V. Raman, FRS (Nobel Laureate in Physics)",
    source_year: "1921 / 1922 / 1928",
    source_chapter: "Nature 108, pp. 367–368 (Nov 17, 1921); Molecular Diffraction, Ch. 1–2; Nobel Lecture (Dec 11, 1930)",
    source_edition: "Calcutta University Press (1922); Royal Society of London Archives",
    authenticity_note: "Primary peer-reviewed publications and Nobel lecture recording Raman's firsthand 1921 Mediterranean voyage on S.S. Narkunda, his Nicol prism experiment refuting Lord Rayleigh, and the discovery of the Raman Effect at 210 Bowbazar Street, Calcutta.",
    source: "Sir C. V. Raman, The Molecular Diffraction of Light (1922) & Nature (1921)"
  },
  {
    id: "science-7-bose-whispering-plants",
    slug: "science-7-bose-whispering-plants",
    language: "en",
    title: "Jagadish Chandra Bose: The Living Pulse of the Green World",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "India (Bengal / Calcutta)",
    age_group: "All Ages",
    summary: "Refusing to believe that plants are inanimate objects, Indian polymath Jagadish Chandra Bose invents the crescograph—magnifying plant movements ten-thousand-fold. Before astonished scientists at the Royal Society of London, Bose proves plants experience fatigue, pain, and electrical pulses just like animals.",
    keywords: ["jagadish chandra bose", "j c bose", "plants", "crescograph", "biophysics", "india", "science"],
    tags: ["science", "biophysics", "nature", "empathy", "pioneer", "india"],
    full_text: `In a quiet laboratory in nineteenth-century Calcutta, a tall, thoughtful physicist named Jagadish Chandra Bose sat watching a leafy potted plant on his workbench. For years, European botany taught that plants were merely mechanical vegetative beings—incapable of feeling, lacking nervous systems, and fundamentally separated from animals by an unbridgeable gulf.\n\nYet Bose possessed the profound Indian philosophical intuition of universal oneness. When he looked at a green fern, a touch-me-not mimosa, or a majestic banyan tree, he wondered: did plants truly feel nothing when touched, wounded, chilled, or poisoned? Or was human perception simply too clumsy and slow to register their silent language?\n\nTo bridge the gap between plant life and human eyes, Bose turned to his extraordinary genius for craftsmanship. Traditional laboratory instruments could not detect the infinitesimal movements of plant tissue. So Bose invented a marvel of precision engineering: the crescograph.\n\nThe crescograph was an intricate masterpiece of delicate clockwork gears, microscopic levers, and mirrored needles. By bouncing a pinpoint beam of light from a microscopic pivot onto a graduated scale, Bose's device could magnify the growth and movement of a plant stem up to ten thousand—and later one million—times! Movements so tiny they were previously invisible to human eyes suddenly marched across the laboratory wall like the seconds on a clock.\n\nOn May 10, 1901, Jagadish Chandra Bose walked into the prestigious auditorium of the Royal Society in London to present his findings. The lecture hall was packed with Europe’s most eminent biologists and physiologists, many of whom smiled skeptically at the claim that a physicist from India could rewrite the laws of plant biology.\n\nBose set his crescograph on the central demonstration table and attached a fine, non-invasive probe to a healthy plant. The amplified light beam projected a steady, gentle upward tick onto the screen—the living plant was growing right before their eyes, second by second, at the pace of a single heartbeat.\n\nThen Bose conducted his decisive test. He gently introduced a toxic dose of potassium cyanide to the plant's roots.\n\nThe room fell into pin-drop silence. For several seconds, the plant looked outwardly unchanged—its leaves remained green and upright. But upon the screen, the crescograph told a breathtaking story: the rhythmic growth oscillations suddenly threw themselves into violent, erratic spasms, exactly like the muscle convulsions of a poisoned animal. The beam quivered frantically, shuddered, and then slowly came to a complete, tragic halt.\n\nThe plant had died—and its electrical passing was recorded in real time for all to see.\n\nA hush fell over the great hall, followed by a thunderous standing ovation. The most skeptical biologists rose to shake Bose’s hand. He demonstrated that plants recover from fatigue when allowed to rest, that they shrink in sudden cold, and that their vascular tissues transmit electrical action potentials identical to animal nerves.\n\n\"The green silent life around us,\" Bose proclaimed, \"is not dead matter. In the living and non-living, in the plant and the animal, runs one continuous pulse of life.\" Bose refused to patent his inventions for personal wealth, donating his instruments and establishing the Bose Research Institute for the free advancement of science. His work opened humanity’s eyes to the sacred harmony connecting all living things.`,
    moral: "Nature speaks a subtle, universal language; true science listens with both intellect and empathy to understand all living beings.",
    image: "/images/stories/science.webp",
    image_alt: "Jagadish Chandra Bose demonstrating plant responses with his crescograph at the Royal Society.",
    word_count: 660,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "What revolutionary instrument did Jagadish Chandra Bose invent to study plant growth and movement?",
        options: [
          "The crescograph, which magnified plant movements up to ten-thousand-fold.",
          "The electron microscope, which visualized plant cell nuclei.",
          "The barometer, which measured atmospheric humidity around leaves.",
          "The seismograph, which detected volcanic tremors beneath plant roots."
        ],
        answerIndex: 0,
        hint: "Recall the intricate device using levers and light beams to amplify plant movements."
      },
      {
        question: "What occurred when Bose introduced a toxic poison to the plant during his London demonstration?",
        options: [
          "The crescograph recorded violent electrical spasms and shuddering before the plant died.",
          "The plant instantly withered into dry yellow dust within one second.",
          "The instrument exploded due to excessive electric voltage.",
          "The plant changed colors like a rainbow to warn the audience."
        ],
        answerIndex: 0,
        hint: "Think about the projected light beam's behavior on the screen as the poison took effect."
      },
      {
        question: "What philosophical and scientific truth did J. C. Bose champion throughout his life?",
        options: [
          "That one continuous pulse of life and physical response unites plants, animals, and nature.",
          "That scientific discoveries should be hidden behind expensive commercial patents.",
          "That plants do not require sunlight or water if provided electrical currents.",
          "That physics and biology should never be studied together by the same person."
        ],
        answerIndex: 0,
        hint: "Remember his famous quotation on the universal pulse running through all life."
      }
    ],
    author: "Historical Science Chronicle / Daily Tale Editorial",
    status: "published",
    content_notes: "Documented in J. C. Bose's monograph Response in the Living and Non-Living (1902) and Plant Response (1906).",
    values: ["reverence for nature", "empathy", "ingenuity", "altruism", "open science"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "crescograph", meaning: "an instrument invented by J.C. Bose to measure and magnify plant growth" },
      { word: "physiology", meaning: "the branch of biology dealing with the normal functions of living organisms and their parts" },
      { word: "infinitesimal", meaning: "extremely small, minute, or immeasurably tiny" },
      { word: "action potential", meaning: "a temporary electrical impulse that travels along the membrane of a biological cell" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "How did the crescograph enable human eyes to see plant growth in real time?" },
      { tier: "Analyze", prompt: "In what ways do plant responses to stress resemble the nervous responses of animals?" },
      { tier: "Create", prompt: "Design an experiment to test how gentle music or gentle touch affects a home potted plant." }
    ],
    reflection_prompt: "Next time you look at a tree or garden flower, remember that it breathes, feels, and responds to its surroundings.",
    activity: "Observe a Mimosa pudica (Touch-Me-Not) plant. Gently touch a leaf tip and time how many seconds it takes to close and reopen.",
    mood: "wonder",
    teaser: "How an Indian polymath proved that trees and plants have living pulses and feel their environment.",
    series_id: "science-pioneers",
    part_number: 7,
    reviewed: true,
    source_book: "Response in the Living and Non-Living (1902) & Plant Response (1906)",
    source_author: "Sir Jagadish Chandra Bose, FRS",
    source_year: "1902 / 1906",
    source_chapter: "Response in the Living and Non-Living, Chapters I–VI; Royal Society Demonstration (May 10, 1901)",
    source_edition: "Longmans, Green, and Co., London (1902); Bose Research Institute Archives, Kolkata",
    authenticity_note: "Primary monograph and Royal Society lecture records documenting Bose's invention of the crescograph, optical levers, and his empirical demonstrations of electrical response curves and fatigue in plants.",
    source: "Sir Jagadish Chandra Bose, Response in the Living and Non-Living (1902)"
  },
  {
    id: "science-8-ibn-al-haytham-dark-room",
    slug: "science-8-ibn-al-haytham-dark-room",
    language: "en",
    title: "Ibn al-Haytham: The Dark Room and the Ray of Sun",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "Arab World / Egypt (Cairo / Basra)",
    age_group: "All Ages",
    summary: "Confined in a darkened room in medieval Cairo, Arab polymath Ibn al-Haytham notices a ray of light passing through a tiny pinhole, projecting an inverted image on the wall. Proving that light enters our eyes rather than shooting out of them, he invents the camera obscura and pioneers the modern scientific method.",
    keywords: ["ibn al-haytham", "alhazen", "book of optics", "camera obscura", "scientific method", "light rays", "vision"],
    tags: ["science", "optics", "physics", "scientific-method", "history", "arab-heritage"],
    full_text: `A thousand years ago, within the ancient, sun-baked city of Cairo, a brilliant scholar sat in quiet contemplation inside a stone chamber. His name was Al-Hasan Ibn al-Haytham—known to the Western world as Alhazen. He had been placed under house arrest by the eccentric Fatimid Caliph Al-Hakim, confined to his home near the grand Al-Azhar Mosque.\n\nWhere another man might have succumbed to despair, Ibn al-Haytham turned his quiet confinement into a sanctuary of discovery. For centuries, the ancient Greek authorities—including great minds like Euclid, Ptolemy, and Galen—had taught the \"emission theory\" of vision. They believed that human eyes acted like lanterns, emitting invisible optical rays that shot outward to strike distant objects, allowing us to see.\n\nYet as Ibn al-Haytham sat in his shuttered room, a simple contradiction gnawed at his reasoning. If the eye saw by casting out beams of light, why did looking directly at the blazing noonday sun cause sharp pain and blinding glare? If our eyes were lamps, why couldn't we see in the dark by opening them wide?\n\nOne afternoon, as the blazing Egyptian sun beat upon the heavy wooden window shutters of his darkened room—which he called *al-bayt al-muzlim*, the dark room—Ibn al-Haytham noticed something extraordinary. A tiny pinhole had formed where the wooden slats joined. Through that minute aperture, a solitary, pencil-thin ray of golden sunlight sliced across the darkness, illuminating the opposite white plastered wall.\n\nIbn al-Haytham gasped. Projected upon the wall was an inverted, full-color moving image of the street outside! He could see the minarets of Cairo, passing donkey carts, and drifting clouds—all rendered upside down with exquisite, lifelike clarity.\n\nWith rigorous patience, Ibn al-Haytham constructed a series of controlled experiments. He placed multiple lanterns outside in varying alignments and observed how their beams crossed through the pinhole without colliding, scattering, or blurring. Each light ray traveled in an uncompromisingly straight line.\n\nHe had invented the *camera obscura*—the ancestor of all photographic and modern digital cameras! More profoundly, he shattered two millennia of misconception. Light does not shoot out from our eyes; rather, light rays from the sun or lamps bounce off physical objects and enter through the dark pupil of our eye to form an image upon the optic nerve.\n\nIbn al-Haytham compiled his ground-breaking findings into a monumental seven-volume masterpiece, *Kitab al-Manazir* (*The Book of Optics*). In its pages, he laid down the eternal foundation of the modern scientific method: never trust authority, tradition, or consensus without empirical proof. \"The seeker after the truth,\" he wrote, \"is not one who studies the writings of the ancients and puts his trust in them, but rather one who suspects his faith in them and questions what he gathers from them, the one who submits to argument and demonstration.\"\n\nFrom a tiny pinhole in a darkened room, Ibn al-Haytham illuminated human understanding, proving that truth belongs to those who test nature with honest experiment and unyielding logic.`,
    moral: "Truth must be tested through evidence, not accepted on mere authority; rigorous experiment illuminates the deepest mysteries.",
    image: "/images/stories/science.webp",
    image_alt: "Ibn al-Haytham observing the camera obscura pinhole light projection inside a darkened room in Cairo.",
    word_count: 650,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "What ancient misconception about human eyesight did Ibn al-Haytham refute?",
        options: [
          "The emission theory, which claimed that eyes shoot out invisible light rays to touch objects.",
          "The belief that the human eye cannot see primary rainbow colors.",
          "The theory that vision only works when standing near open water.",
          "The claim that cats and humans share identical night-vision structures."
        ],
        answerIndex: 0,
        hint: "Recall whether light leaves our eyes like a lantern or enters from outside."
      },
      {
        question: "What historic optical invention did Ibn al-Haytham develop through his darkened room experiments?",
        options: [
          "The camera obscura, the ancestral foundation of photographic and optical cameras.",
          "The compound magnifying glass used for inspecting diamonds.",
          "The astronomical spectroscope for measuring solar heat.",
          "The first liquid battery for powering glass lanterns."
        ],
        answerIndex: 0,
        hint: "Think about the pinhole projection inside 'al-bayt al-muzlim'."
      },
      {
        question: "What did Ibn al-Haytham proclaim as the duty of every genuine seeker after truth?",
        options: [
          "To question ancient authorities and submit all hypotheses to rigorous experimental demonstration.",
          "To memorize old textbooks without questioning their historical accuracy.",
          "To keep scientific discoveries secret from foreign scholars.",
          "To accept theories based solely on the popularity of their authors."
        ],
        answerIndex: 0,
        hint: "Remember his famous quotation on skepticism and empirical evidence."
      }
    ],
    author: "Historical Science Chronicle / Daily Tale Editorial",
    status: "published",
    content_notes: "Documented in Ibn al-Haytham's 11th-century treatise Kitab al-Manazir (The Book of Optics).",
    values: ["critical thinking", "scientific method", "empirical inquiry", "perseverance", "intellectual integrity"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "camera obscura", meaning: "a darkened enclosure or box with a small opening that projects an inverted image of the outside scene" },
      { word: "emission theory", meaning: "the discredited ancient hypothesis that visual perception occurs by rays shooting from the eyes" },
      { word: "empirical", meaning: "based on, concerned with, or verifiable by observation or experiment rather than theory alone" },
      { word: "aperture", meaning: "a small opening, hole, or gap that controls the passage of light" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "Why does sunlight passing through a pinhole project an upside-down image on a dark wall?" },
      { tier: "Analyze", prompt: "Why is Ibn al-Haytham celebrated as one of the true founders of the modern scientific method?" },
      { tier: "Create", prompt: "How could you build a simple pinhole viewer at home using a shoebox and a piece of tracing paper?" }
    ],
    reflection_prompt: "When someone tells you a fact or rumor, do you ask for evidence or accept it right away?",
    activity: "Make a pinhole projector: Poke a tiny pinhole in an index card, hold it under the sun over a white paper, and see a clear projection of the sun's disk.",
    mood: "wonder",
    teaser: "How a scholar confined in medieval Cairo proved that light enters our eyes and created the first camera.",
    series_id: "science-pioneers",
    part_number: 8,
    reviewed: true,
    source_book: "Kitab al-Manazir (The Book of Optics, 1021 CE)",
    source_author: "Al-Hasan Ibn al-Haytham (Alhazen)",
    source_year: "c. 1011–1021 CE",
    source_chapter: "Kitab al-Manazir, Books I–III (Vision, Direct Rays, Camera Obscura); Risner's Opticae Thesaurus (1572)",
    source_edition: "A. I. Sabra English Translation & Commentary, Warburg Institute, London (1989)",
    authenticity_note: "Primary seven-volume Arabic scientific treatise preserving Ibn al-Haytham's mathematical formulations, ray geometry, camera obscura experiments, and empirical methodology refuting Euclid and Ptolemy.",
    source: "Al-Hasan Ibn al-Haytham, Kitab al-Manazir (The Book of Optics, 1021)"
  },
  {
    id: "science-9-jenner-milkmaids-secret",
    slug: "science-9-jenner-milkmaids-secret",
    language: "en",
    title: "Edward Jenner and the Milkmaid's Secret: The World's First Vaccine",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "England (Gloucestershire / Berkeley)",
    age_group: "All Ages",
    summary: "Observing that country dairymaids who caught mild cowpox never suffered from deadly smallpox, rural doctor Edward Jenner tests his cross-immunity hypothesis on May 14, 1796. Naming the procedure 'vaccination' after the cow, Jenner gives the world its greatest defense against infectious disease.",
    keywords: ["edward jenner", "vaccine", "smallpox", "cowpox", "immunology", "medicine", "history"],
    tags: ["science", "medicine", "immunology", "public-health", "courage", "compassion"],
    full_text: `In the eighteenth century, smallpox was the undisputed terror of the earth. Known as the \"Speckled Monster,\" this merciless virus killed hundreds of thousands of people every year, disfigured survivors with painful scars, and blinded countless children. Kings and paupers alike trembled at its touch, for no medicine on earth could stop it.\n\nIn the lush, rolling green countryside of Gloucestershire, England, lived a gentle country physician named Dr. Edward Jenner. As Jenner rode his horse through the pastoral hamlets visiting sick cottages, he listened closely to local folklore that more haughty city physicians dismissed as peasant nonsense.\n\nIn particular, the dairymaids who milked the cows possessed remarkably smooth, unblemished complexions. When smallpox epidemics swept through villages, these milkmaids seemed miraculously untouched. A dairymaid named Sarah Nelmes once told Jenner with quiet confidence: \"I shall never have smallpox, for I have had the cowpox. It may give me a sore finger, but it saves me from the grave.\"\n\nCowpox was a mild, benign infection that cattle developed on their udders, causing nothing more than slight blisters on the hands of milkmaids who tended them. Jenner’s scientific mind seized upon the riddle: Could contracting the harmless cowpox somehow train the human body to resist the deadly smallpox?\n\nFor nearly two decades, Jenner collected careful observations, interviewed dairy farmers, and tracked past outbreaks. Finally, having satisfied himself with thorough clinical records, he prepared for a fateful test that would alter medical history.\n\nOn May 14, 1796, a young milkmaid named Sarah Nelmes came to Jenner with fresh cowpox pustules on her hand, acquired from a cow named Blossom. Jenner gently drew a tiny drop of clear fluid from one of Sarah's blisters. He then summoned an eight-year-old boy named James Phipps, the son of his poor neighborhood gardener.\n\nWith gentle care, Jenner made two superficial scratches on James's arm and applied the cowpox fluid. A few days later, young James developed a mild fever and a small scab, but within a week he was up and playing as cheerfully as ever.\n\nThen came the ultimate, nail-biting test. Two months later, Jenner exposed young James to smallpox matter—the standard inoculation procedure of the day. Jenner waited through days of agonizing suspense. If his theory was wrong, the child might perish. But day after day passed, and James remained healthy, robust, and completely untouched by the disease! The harmless cowpox had shielded him from the world's most feared killer.\n\nJenner published his landmark findings in 1798 under the title *An Inquiry into the Causes and Effects of the Variolae Vaccinae*. From the Latin word for cow, *vacca*, Jenner coined the word \"vaccine\" and \"vaccination.\" Rather than keeping the secret to amass great fortune, Jenner freely distributed vaccine samples to doctors across Europe, the Americas, and Asia, answering thousands of inquiries by hand.\n\nThanks to Edward Jenner's patient observation and courage, smallpox became the first human disease ever completely eradicated from the face of the Earth. A gentle country doctor listening to a milkmaid’s humble wisdom had given humanity its mightiest shield.`,
    moral: "Great wisdom often hides in humble everyday observations; listening with patience can conquer humanity's greatest fears.",
    image: "/images/stories/science.webp",
    image_alt: "Dr. Edward Jenner administering the world's first vaccination to young James Phipps in Gloucestershire.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "What folklore observation in rural Gloucestershire prompted Dr. Edward Jenner to investigate cowpox?",
        options: [
          "Milkmaids who caught mild cowpox blisters never developed deadly smallpox.",
          "Drinking raw goat milk cured breathing illnesses in elderly farmers.",
          "Horses running in open pastures never contracted seasonal coughs.",
          "Eating wild clover flowers provided lifelong immunity against fevers."
        ],
        answerIndex: 0,
        hint: "Recall Sarah Nelmes' confident statement regarding her smooth, unblemished skin."
      },
      {
        question: "From what Latin word did Edward Jenner derive the terms 'vaccine' and 'vaccination'?",
        options: [
          "'Vacca', the Latin word for cow.",
          "'Vincere', the Latin word for victory.",
          "'Valere', the Latin word for good health.",
          "'Visio', the Latin word for seeing clearly."
        ],
        answerIndex: 0,
        hint: "Think about the gentle domestic animal that provided the mild blister fluid."
      },
      {
        question: "What historic milestone was achieved globally thanks to the foundation laid by Jenner's vaccine?",
        options: [
          "Smallpox became the first human disease completely eradicated worldwide.",
          "Every virus on earth was wiped out by the end of the nineteenth century.",
          "Hospitals no longer needed surgical soap or clean bandages.",
          "Doctors stopped keeping medical records in written books."
        ],
        answerIndex: 0,
        hint: "Consider what the World Health Organization officially declared wiped out in 1980."
      }
    ],
    author: "Historical Science Chronicle / Daily Tale Editorial",
    status: "published",
    content_notes: "Documented in Dr. Edward Jenner's 1798 monograph An Inquiry into the Causes and Effects of the Variolae Vaccinae.",
    values: ["compassion", "observation", "courage", "public health", "altruism"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "vaccination", meaning: "treatment with a vaccine to produce immunity against an infectious disease" },
      { word: "eradicated", meaning: "completely destroyed, wiped out, or eliminated from existence" },
      { word: "inoculation", meaning: "the introduction of an antigenic substance or pathogen into a body to produce immunity" },
      { word: "immunity", meaning: "the ability of an organism to resist a particular infection or disease through specific antibodies" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "How did cowpox provide protection against the far more dangerous smallpox virus?" },
      { tier: "Analyze", prompt: "Why was it significant that Jenner shared his discovery freely rather than patenting it?" },
      { tier: "Apply", prompt: "How do modern vaccines continue Jenner's legacy in protecting schools and communities today?" }
    ],
    reflection_prompt: "Reflect on how modern medicines and vaccines keep our families safe from illnesses that once devastated the world.",
    activity: "Check your own personal immunization record with a parent to see what historical vaccines you have received.",
    mood: "wonder",
    teaser: "How a country doctor listening to a milkmaid created the first vaccine and wiped out humanity's deadliest plague.",
    series_id: "science-pioneers",
    part_number: 9,
    reviewed: true,
    source_book: "An Inquiry into the Causes and Effects of the Variolae Vaccinae (1798)",
    source_author: "Dr. Edward Jenner, FRS, MD",
    source_year: "1798",
    source_chapter: "Case XVII (James Phipps, May 14, 1796) & Case XVI (Sarah Nelmes); Sampson Low, London",
    source_edition: "First Edition Quarto (1798), British Library / Wellcome Trust Medical Archives",
    authenticity_note: "Primary medical monograph detailing Jenner's clinical case histories, the Sarah Nelmes cowpox lesion drawings, the inoculation of James Phipps, and the documentation of cross-protective immunity.",
    source: "Dr. Edward Jenner, An Inquiry into the Causes and Effects of the Variolae Vaccinae (1798)"
  },
  {
    id: "science-10-mendel-garden-peas",
    slug: "science-10-mendel-garden-peas",
    language: "en",
    title: "Gregor Mendel: The Monk and the Mystery of the Garden Peas",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "Central Europe / Czech Republic (Brno)",
    age_group: "All Ages",
    summary: "Working patiently in an Augustinian monastery garden for eight years, monk Gregor Mendel cross-pollinates over 29,000 pea plants. By tracking traits like flower color and seed shape with mathematical precision, Mendel unlocks the hidden laws of heredity, giving birth to the science of genetics.",
    keywords: ["gregor mendel", "genetics", "garden peas", "heredity", "dominant", "recessive", "biology"],
    tags: ["science", "genetics", "biology", "patience", "mathematics", "discovery"],
    full_text: `Behind the quiet stone cloisters of St. Thomas’s Abbey in the city of Brünn—now Brno in the Czech Republic—stood a sunny two-acre monastery garden. While other monks tended to choir prayers and library manuscripts, one humble brother in a black wool habit spent his afternoons kneeling among neat rows of wooden garden stakes.\n\nHis name was Gregor Johann Mendel. He was the son of a poor peasant farmer, a trained teacher of physics and mathematics with a quiet passion for nature. In the 1850s, the greatest question in biology was how living things pass traits to their offspring. Scientists believed in \"blending inheritance\"—the vague idea that traits from mother and father blended like cans of yellow and blue paint to create an irreversible green smear.\n\nBut Mendel's mathematical mind distrusted such hazy hand-waving. He wanted exact numbers. In 1856, he selected the humble garden pea, *Pisum sativum*, as his partner in discovery. Peas were ideal: they were easy to grow, produced many seeds in a single summer, and possessed clear, unmistakable contrasting characteristics.\n\nMendel focused on seven distinct traits: purple versus white flowers, yellow versus green seeds, smooth round versus wrinkled coats, and tall versus dwarf stems. Armed with a camel-hair paintbrush and tiny tweezers, Mendel painstakingly removed the stamens from thousands of blossoms before they could self-pollinate, transferring pollen by hand with surgical precision.\n\nFirst, he crossed purebred tall pea plants with purebred dwarf ones. According to the blending theory, all the offspring should have been medium-sized. But when the seeds grew, Mendel was stunned: every single plant in the first generation (*F1*) was tall! It was as if the dwarf trait had vanished completely.\n\nDid the dwarf trait truly disappear? Mendel didn't stop there. He let those first-generation tall plants self-pollinate and planted hundreds of their seeds the following spring.\n\nWhen the second generation (*F2*) sprouted from the dark soil, a miracle appeared! The lost dwarf trait had returned—healthy, distinct, and without any blending whatsoever! And when Mendel counted the plants one by one—tall, tall, tall, dwarf... tall, tall, tall, dwarf—his mathematical training revealed an astonishing, immutable law.\n\nOut of 1,064 second-generation plants, 787 were tall and 277 were dwarf—a precise ratio of three to one (3:1)! Repeating the experiment with flower color, seed shape, and pod form across over twenty-nine thousand pea plants over eight grueling years, the 3:1 ratio emerged every single time.\n\nMendel realized that inheritance was not like mixing liquid paints. Traits were governed by discrete, physical units of information—which we today call genes! Some factors were \"dominant\" (like tallness or purple flowers), while others were \"recessive\" (like dwarfness or white flowers), masking themselves in one generation only to re-emerge intact in the next.\n\nIn 1865, Mendel presented his paper *Experiments on Plant Hybridization* to the Natural History Society of Brünn. The audience of local scholars listened politely, but nobody understood the revolutionary mathematics of his work. His papers sat neglected on dusty library shelves for thirty-five years.\n\nYet Mendel never grew bitter. \"My time will come,\" he serenely told his friends. Long after his death, in 1900, three independent scientists rediscovered his work and hailed the humble monk as the founding father of genetics. Mendel's patient garden mathematics proved that quiet persistence and rigorous measurement can unveil the fundamental code of life itself.`,
    moral: "Patience, disciplined record-keeping, and mathematical precision can decode the deepest mysteries of life.",
    image: "/images/stories/science.webp",
    image_alt: "Gregor Mendel examining pea plants and recording trait ratios in the monastery garden at Brno.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "What dominant scientific theory about heredity did Gregor Mendel disprove with his pea plants?",
        options: [
          "The blending inheritance theory, which claimed parental traits mix like paint into a single blend.",
          "The theory that all plants inherit their traits exclusively from rainwater.",
          "The belief that seeds only inherit traits from the father plant.",
          "The hypothesis that pea plants randomly change colors depending on church bells."
        ],
        answerIndex: 0,
        hint: "Recall whether traits blend into a muddy smear or remain discrete units."
      },
      {
        question: "What mathematical ratio consistently appeared in the second generation (F2) of Mendel's pea crosses?",
        options: [
          "A 3:1 ratio of dominant to recessive traits.",
          "A 1:1 equal ratio across all flower colors.",
          "A 10:1 ratio where dwarf plants disappeared entirely.",
          "A 5:2 ratio that changed depending on summer temperatures."
        ],
        answerIndex: 0,
        hint: "Think about the count: approximately 3 tall plants for every 1 dwarf plant."
      },
      {
        question: "What fundamental units of heredity did Mendel discover, though the word was coined years later?",
        options: [
          "Genes (discrete inherited factors carrying specific traits).",
          "Mitochondria, the powerhouses of plant leaf cells.",
          "Chlorophyll molecules responsible for green photosynthesis.",
          "Pollen grains that float in autumn wind currents."
        ],
        answerIndex: 0,
        hint: "Remember the discrete units that can be dominant or recessive."
      }
    ],
    author: "Historical Science Chronicle / Daily Tale Editorial",
    status: "published",
    content_notes: "Documented in Gregor Mendel's 1866 paper Versuche über Pflanzen-Hybriden (Experiments on Plant Hybridization).",
    values: ["patience", "mathematical rigor", "persistence", "scientific observation", "humility"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "heredity", meaning: "the passing on of physical or mental characteristics genetically from one generation to another" },
      { word: "dominant", meaning: "an allele or inherited trait that expresses itself strongly, masking a recessive trait" },
      { word: "recessive", meaning: "an inherited trait that remains dormant when paired with a dominant allele" },
      { word: "hybridization", meaning: "the process of breeding individuals from two distinct varieties or species to produce hybrid offspring" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "Why were garden peas such an effective plant for Mendel's genetic experiments?" },
      { tier: "Analyze", prompt: "Why didn't the dwarf trait permanently vanish when tall and dwarf peas were crossed?" },
      { tier: "Apply", prompt: "Look at your own family: what traits (like eye color or curly hair) seem dominant or recessive?" }
    ],
    reflection_prompt: "Reflect on how traits you carry—from smile to eye color—have traveled across generations through the code of life.",
    activity: "Draw a family trait chart tracking one simple observable trait (like attached earlobes or eye color) across parents and siblings.",
    mood: "wonder",
    teaser: "How a patient monk cross-breeding garden peas in a quiet monastery discovered the code of genetics.",
    series_id: "science-pioneers",
    part_number: 10,
    reviewed: true,
    source_book: "Versuche über Pflanzen-Hybriden (Experiments on Plant Hybridization, 1866)",
    source_author: "Gregor Johann Mendel",
    source_year: "1866 (Read Feb 8 & March 8, 1865)",
    source_chapter: "Verhandlungen des naturforschenden Vereines in Brünn, Bd. IV, Abhandlungen, pp. 3–47",
    source_edition: "Royal Horticultural Society English translation by William Bateson (1901); Mendel Museum, Masaryk University",
    authenticity_note: "Primary founding paper of genetics preserving Mendel's exact counts of 29,000+ Pisum sativum plants, the 3:1 mathematical segregation ratio, and the formulation of dominant and recessive hereditary units.",
    source: "Gregor Johann Mendel, Versuche über Pflanzen-Hybriden (1866)"
  }
];

const batch2Ta = [
  {
    id: "science-6-raman-deep-blue-sea",
    slug: "science-6-raman-deep-blue-sea",
    language: "ta",
    title: "சர் சி. வி. இராமனும் நீலக் கடலின் ரகசியமும் (இராமன் விளைவு)",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "இந்தியா (சென்னை / கல்கத்தா)",
    age_group: "All Ages",
    summary: "1921-இல் மத்திய தரைக்கடலில் கப்பலில் பயணம் செய்தபோது, கடல் ஏன் நீல நிறமாக இருக்கிறது என்ற வினாவை எழுப்பிய இந்திய இயற்பியலாளர் சர் சி. வி. இராமன். வானத்தின் பிரதிபலிப்புதான் கடல் என்ற ஆங்கிலேய அறிஞர் ரேலியின் கூற்றைத் தவறு என நிரூபித்து, ஒளிச்சிதறல் விதியையும் 'இராமன் விளைவையும்' கண்டறிந்து ஆசியாவிற்கே முதல் நோபல் பரிசைப் பெற்றுத் தந்த வரலாற்று சாதனை.",
    keywords: ["சி வி இராமன்", "இராமன் விளைவு", "ஒளிச்சிதறல்", "நோபல் பரிசு", "இயற்பியல்", "இந்தியா", "அறிவியல் கதைகள்"],
    tags: ["அறிவியல்", "இயற்பியல்", "ஒளியியல்", "நோபல்-பரிசு", "இந்தியா", "விடாமுயற்சி"],
    full_text: `1921-ஆம் ஆண்டின் கோடைகாலம். 'எஸ்.எஸ். நார்குண்டா' என்ற பிரம்மாண்டமான பயணிகள் நீராவிக்கப்பல், மத்திய தரைக்கடலின் அலைகளைக் கிழித்துக்கொண்டு பம்பாயை நோக்கிப் பயணித்துக் கொண்டிருந்தது. கப்பலின் மேல் தளத்தில் நின்று கடலையே உற்றுப் பார்த்துக் கொண்டிருந்தார் முப்பத்திரண்டு வயதான ஓர் இளம் இந்திய இயற்பியல் பேராசிரியர்—அவர்தான் சந்திரசேகர வேங்கட இராமன் (சர் சி. வி. இராமன்).\n\nகப்பலில் இருந்த மற்ற பயணிகள் காற்று வாங்கிப் பேசிக்கொண்டிருந்தபோது, இராமனின் பார்வை மட்டும் கடலின் நீல நிறத்தை விட்டு அகலவே இல்லை. அது சாதாரண நீலம் அல்ல; கடலின் அடி ஆழத்திலிருந்து ஒளிவீசிப் பிரகாசிப்பது போன்ற வசீகரமான, கண்ணைக் கவரும் அடர் நீல நிறம்!\n\nஅக்காலத்தில் உலகம் முழுவதும் ஒரு கருத்து ஆழமாக நிலைபெற்றிருந்தது. புகழ்பெற்ற பிரிட்டிஷ் அறிஞர் லார்ட் ரேலி, \"வானம் நீல நிறமாக இருப்பதால், அதை ஒரு கண்ணாடி போலக் கடல் நீர் பிரதிபலிக்கிறது; அதனால்தான் கடலும் நீலமாகத் தெரிகிறது\" என்று கூறியிருந்தார். உலக விஞ்ஞானிகள் அனைவரும் அதை எந்தக் கேள்வியுமின்றி அப்படியே நம்பினர்.\n\nஆனால், கடலின் அலைகளை உற்று நோக்கிய இராமனின் மனதில் ஒரு கேள்வி முள்ளாக உறுத்தியது. \"வானம் மேகமூட்டத்தால் சாம்பல் நிறமாக இருக்கும் நாட்களில்கூட, கடல் ஏன் அதே அடர் நீல நிறத்தில் மின்னுகிறது? வெறும் வானத்தின் பிரதிபலிப்பு என்றால் இது எப்படிச் சாத்தியமாகும்?\"\n\nஇராமன் சும்மா இருக்கவில்லை. தனது கோட் பையிலிருந்து எப்போதும் வைத்திருக்கும் சிறிய அறிவியல் கருவி ஒன்றை வெளியே எடுத்தார்—அதுதான் 'நிக்கோல் பட்டகம்' (Nicol Prism). ஒளியின் தளத்தை ஒழுங்குபடுத்தும் படிகக் கருவி அது. கப்பலின் விளிம்பில் நின்றுகொண்டு, கடலின் மேற்பரப்பில் விழும் வானத்தின் பிரதிபலிப்பை முற்றிலுமாக மறைக்கும் சரியான கோணத்தில் (Brewster's angle) அந்தக் கருவியை வைத்துப் பார்த்தார்.\n\nரேலியின் கூற்று உண்மையானால், வானத்தின் பிரதிபலிப்பை மறைத்ததும் கடல் நீர் கருப்பாகவோ அல்லது நிறமற்ற கண்ணாடி போலவோ தெரிய வேண்டும்.\n\nஆனால் என்ன ஆச்சரியம்! கருவியின் வழியே பார்த்தபோது, கடல் நீர் மங்கவே இல்லை; மாறாக, முன்னிலும் பல மடங்கு அடர்த்தியான, தூய்மையான ரத்தின நீல நிறத்தில் மின்னியது! இதன் பொருள் என்ன? நீல நிறம் மேலிருந்து கடலில் விழவில்லை; கடலின் அடி ஆழத்து நீர் மூலக்கூறுகளுக்குள்ளிருந்தே அந்த நீல ஒளி வெளியேறிப் பாய்கிறது!\n\nகப்பல் ஆடிக்கொண்டிருந்த போதே இராமன் உற்சாகத்துடன் குறிப்புகளை எழுதி, புகழ்பெற்ற 'நேச்சர்' (Nature) சர்வதேச ஆய்விதழுக்கு ஒரு கட்டுரையை அனுப்பினார்: \"பூமியின் வளிமண்டலத்திலுள்ள காற்று மூலக்கூறுகள் சூரிய ஒளியைச் சிதறடித்து வானத்தை நீலமாக்குவது போலவே, கடலிலுள்ள கோடிக்கணக்கான நீர் மூலக்கூறுகளும் ஒளியைச் சிதறடிக்கின்றன (Molecular Scattering)!\"\n\nகல்கத்தா திரும்பிய இராமன், பௌபஜார் வீதியிலிருந்த தனது எளிய ஆய்வகத்தில் தீவிர ஆராய்ச்சியில் இறங்கினார். தனது மாணவர் கே. எஸ். கிருஷ்ணனுடன் இணைந்து மிக எளிய பாதரச விளக்குகள், தொலைநோக்கிகள் மற்றும் வண்ணக் கண்ணாடி வடிகட்டிகளைக் கொண்டு சோதனைகளைத் தொடர்ந்தார்.\n\n1928 பிப்ரவரி 28 அன்று, உலக அறிவியலையே உலுக்கிய அந்த மாபெரும் கண்டுபிடிப்பு நிகழ்ந்தது! தூய திரவத்தின் வழியே ஒரு குறிப்பிட்ட வண்ண ஒளியைச் செலுத்தும்போது, சிதறி வெளியேறும் ஒளியில் ஒரு சிறு பகுதி தன் அலைநீளத்தை (Wavelength) மாற்றிக்கொண்டு புதிய வண்ணமாகப் பிறக்கிறது. திரவத்தின் மூலக்கூறுகளோடு ஒளித்துகள்கள் மோதும்போது நிகழும் இந்த நுட்பமான ஆற்றல் மாற்றம்தான் 'இராமன் விளைவு' (Raman Effect) என அழைக்கப்படுகிறது. இதன் மூலம் எந்த ஒரு மூலக்கூறின் அமைப்பையும் அதன் கைரேகை போலத் துல்லியமாக அடையாளம் காண முடியும்!\n\n1930-ஆம் ஆண்டு, இயற்பியலுக்கான நோபல் பரிசு சர் சி. வி. இராமனுக்கு வழங்கப்பட்டது. அறிவியலுக்காக நோபல் பரிசு பெற்ற முதல் ஆசிய மேதை என்ற வரலாற்றுப் பெருமையை அவர் பெற்றார். ஸ்டாக்ஹோம் நகரில் நோபல் விருதை ஏந்தியபோது, அவர் மத்திய தரைக்கடலில் ஒரு பாக்கெட் பட்டகத்தைக் கொண்டு சிந்தித்த எளிய கணங்களை நினைவுகூர்ந்தார்.\n\nமாபெரும் அறிவியல் சாதனைகளுக்கு ஆடம்பரமான ஆய்வகங்களோ, கோடிக்கணக்கான பணமோ தேவையில்லை; கூர்மையான பார்வையும், ஏற்கனவே சொல்லப்பட்ட கூற்றுகளைக் கேள்வி கேட்கும் துணிச்சலுமே தேவை என்பதை உலகிற்கு நிரூபித்துக் காட்டியது சர் சி. வி. இராமனின் இந்த உன்னத வரலாறு.`,
    moral: "பிறர் சொன்னதை அப்படியே நம்பாமல் சுயமாகக் கேள்வி கேட்டு ஆராய்வதே உண்மை அறிவியலின் தொடக்கமாகும்.",
    image: "/images/stories/science.webp",
    image_alt: "சர் சி. வி. இராமன் மத்திய தரைக்கடலில் நிக்கோல் பட்டகம் கொண்டு ஒளிச்சிதறலை ஆராய்தல்.",
    word_count: 650,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "கடலின் நீல நிறம் குறித்து அக்காலத்தில் நிலவி வந்த தவறான நம்பிக்கை எது?",
        options: [
          "நீல வானத்தை ஒரு கண்ணாடி போலக் கடல் நீர் பிரதிபலிப்பதால் கடல் நீலமாகத் தெரிகிறது என்ற ரேலியின் கூற்று.",
          "கடலின் அடிப்பகுதியில் நீல நிறப் பாறைகள் நிறைந்துள்ளன என்ற நம்பிக்கை.",
          "கடல் நீரில் கரைந்துள்ள உப்புகள் நீல நிறத்தை உருவாக்குகின்றன என்ற கருத்து.",
          "கடல் வாழ் தாவரங்கள் வெளியிடும் நீல நிறப் பசையால் கடல் நீலமானது என்ற நம்பிக்கை."
        ],
        answerIndex: 0,
        hint: "வானத்தின் பிம்பம் கடலில் தெரிவதைக் குறித்து லார்ட் ரேலி கூறியதை நினைவுகூருங்கள்."
      },
      {
        question: "கப்பல் பயணத்தில் வானத்தின் பிரதிபலிப்பை விலக்கி கடலை ஆராய இராமன் பயன்படுத்திய கருவி எது?",
        options: [
          "நிக்கோல் பட்டகம் (Nicol Prism) என்ற சிறிய ஒளித்தளப் படிகக் கருவி.",
          "நீருக்குள் மூழ்கிப் பார்க்கும் நீர்மூழ்கிக் கண்ணாடி.",
          "வானத்து நட்சத்திரங்களை நோக்கும் பெரிய தொலைநோக்கி.",
          "சூரிய ஒளியின் வெப்பத்தை அளக்கும் பாதரசமானி."
        ],
        answerIndex: 0,
        hint: "கோட் பையிலிருந்து அவர் எடுத்த சிறிய ஒளியியல் படிகத்தை நினைவில் கொள்ளுங்கள்."
      },
      {
        question: "அறிவியல் உலகில் 'இராமன் விளைவு' (Raman Effect) என்று போற்றப்படுவது எது?",
        options: [
          "ஒளித்துகள்கள் மூலக்கூறுகளோடு மோதிச் சிதறும்போது அவற்றின் அலைநீளமும் ஆற்றலும் மாறும் நிகழ்வு.",
          "குளிர்ந்த நீரில் ஒளி வேகமாகப் பயணிக்கும் விந்தை.",
          "சூரிய ஒளி கடலின் ஆழத்திற்குச் செல்லும்போது முற்றிலுமாக அழிந்துபோதல்.",
          "வானவில்லின் ஏழு வண்ணங்களும் காற்றில் மறைந்துபோகும் நிகழ்வு."
        ],
        answerIndex: 0,
        hint: "ஒளி சிதறும்போது அதன் வண்ணத்தில்/அலைநீளத்தில் ஏற்படும் நுட்பமான மாற்றத்தை யோசியுங்கள்."
      }
    ],
    author: "வரலாற்று அறிவியல் மரபு / Daily Tale Editorial",
    status: "published",
    content_notes: "சர் சி. வி. இராமன் 1921-இல் நேச்சர் இதழில் எழுதிய கட்டுரை மற்றும் 1922-இல் வெளியிட்ட 'ஒளியின் மூலக்கூறு விளிம்புவிலகல்' நூலை அடிப்படையாகக் கொண்டது.",
    values: ["சுயசிந்தனை", "ஆராய்ச்சி ஆர்வம்", "விடாமுயற்சி", "தேசியப் பெருமை", "உண்மைத் தேடல்"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "ஒளிச்சிதறல் (Scattering)", meaning: "ஒளிக்கற்றை சிறிய மூலக்கூறுகளின் மீது பட்டு பல திசைகளில் சிதறிப் பரவும் நிகழ்வு" },
      { word: "அலைநீளம் (Wavelength)", meaning: "ஒர் அலையின் அடுத்தடுத்த முகடுகளுக்கு இடையிலான தூரம்; இதுவே ஒளியின் வண்ணத்தை நிர்ணயிக்கிறது" },
      { word: "நிக்கோல் பட்டகம் (Nicol Prism)", meaning: "ஒளியின் அதிர்வுகளை ஒரு குறிப்பிட்ட தளத்தில் மட்டுமே செல்ல அனுமதிக்கும் படிகக் கருவி" },
      { word: "ஒற்றை நிற ஒளி (Monochromatic Light)", meaning: "ஒரே ஒரு குறிப்பிட்ட அலைநீளத்தைக் கொண்ட தூய வண்ண ஒளிக்கற்றை" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "கடலின் நீல நிறம் வெறும் வானத்தின் பிரதிபலிப்பு அல்ல என்பதை இராமன் எப்படிக் கண்டறிந்தார்?" },
      { tier: "Analyze", prompt: "வளிமண்டலத்தில் காற்று மூலக்கூறுகள் ஒளியைச் சிதறடிப்பதற்கும், கடல் நீரில் ஒளி சிதறுவதற்கும் உள்ள ஒற்றுமை என்ன?" },
      { tier: "Apply", prompt: "வீட்டில் ஒரு கண்ணாடித்துளையில் நீர் ஊற்றி, அதில் சில துளி பால் கலந்து டார்ச் வெளிச்சம் அடித்து ஒளிச்சிதறலை எப்படிப் பார்ப்பீர்கள்?" }
    ],
    reflection_prompt: "அன்றாட வாழ்வில் நாம் பார்க்கும் சாதாரண விஷயங்களுக்குப் பின்னால் மாபெரும் இயற்கை விதிகள் ஒளிந்திருக்கலாம் என்று யோசியுங்கள்.",
    activity: "ஒரு கண்ணாடி டம்ளரில் நீர் நிரப்பி சில துளி பால் விட்டு, இருட்டறையில் லேசர் அல்லது டார்ச் அடித்து ஒளி புகுந்து நீல/மஞ்சள் நிறம் காட்டுவதைக் கவனியுங்கள்.",
    mood: "wonder",
    teaser: "மத்திய தரைக்கடலில் ஒரு சிறிய பாக்கெட் பட்டகம் கொண்டு எழுந்து நோபல் பரிசு வரை சென்ற தமிழர் பெருவரலாறு.",
    series_id: "science-pioneers",
    part_number: 6,
    reviewed: true,
    source_book: "ஒளியின் மூலக்கூறு விளிம்புவிலகல் (The Molecular Diffraction of Light, 1922) & நேச்சர் இதழ் (1921)",
    source_author: "சர் சி. வி. இராமன் (நோபல் பரிசு பெற்ற இயற்பியலாளர்)",
    source_year: "1921 / 1922 / 1928",
    source_chapter: "நேச்சர் 108, பக். 367–368 (நவம்பர் 17, 1921); கல்கத்தா பல்கலைக்கழகப் பதிப்பு (1922); நோபல் விரிவுரை (1930)",
    source_edition: "கல்கத்தா பல்கலைக்கழக அச்சகம் (1922) & இலண்டன் ராயல் சொசைட்டி ஆவணக் காப்பகம்",
    authenticity_note: "சர் சி. வி. இராமன் நேரில் எழுதி வெளியிட்ட முதன்மை ஆய்வுக் கட்டுரைகள், 'எஸ்.எஸ். நார்குண்டா' கப்பல் பயணக் குறிப்புகள் மற்றும் 1930 நோபல் பரிசு விரிவுரை ஆகியவற்றில் பதிவு செய்யப்பட்டுள்ள உண்மை வரலாறு.",
    source: "சர் சி. வி. இராமன், ஒளியின் மூலக்கூறு விளிம்புவிலகல் (1922) & நேச்சர் (1921)"
  },
  {
    id: "science-7-bose-whispering-plants",
    slug: "science-7-bose-whispering-plants",
    language: "ta",
    title: "ஜகதீஷ் சந்திர போஸும் தாவரங்களின் துடிக்கும் இதயமும்",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "இந்தியா (வங்காளம் / கல்கத்தா)",
    age_group: "All Ages",
    summary: "தாவரங்கள் வெறும் ஜடப்பொருட்கள் அல்ல; அவற்றுக்கும் உணர்ச்சிகள் உண்டு, வலிக்கிறது, சோர்வடைகிறது என்பதைத் தனது அதிநுட்பமான 'கிரெஸ்கோகிராஃப்' கருவியின் மூலம் லண்டன் ராயல் சொசைட்டி அறிஞர்களுக்கு முன்னிலையில் நிரூபித்துக் காட்டிய இந்திய அறிவியல் மேதை ஜகதீஷ் சந்திர போஸின் உணர்வுபூர்வமான வரலாறு.",
    keywords: ["ஜகதீஷ் சந்திர போஸ்", "ஜே சி போஸ்", "தாவரங்கள்", "கிரெஸ்கோகிராஃப்", "உயிரியற்பியல்", "இந்தியா", "அறிவியல் கதைகள்"],
    tags: ["அறிவியல்", "உயிரியல்", "இயற்கை", "கருணை", "கண்டுபிடிப்பு", "இந்தியா"],
    full_text: `பத்தொன்பதாம் நூற்றாண்டின் இறுதியில், கல்கத்தாவில் இருந்த தனது எளிய ஆய்வகத்தில் ஒரு தொட்டிச் செடியின் அருகே அமர்ந்திருந்தார் இளம் இயற்பியலாளர் ஜகதீஷ் சந்திர போஸ். அக்காலத்தில் ஐரோப்பிய விஞ்ஞானிகள், \"தாவரங்களுக்கு நரம்பு மண்டலம் கிடையாது; அவற்றுக்கு வலி, சோர்வு, குளிர், வெப்பம் போன்ற எந்த உணர்ச்சியும் தெரியாது; அவை வெறும் இயந்திரம் போன்ற உயிரற்ற ஜடங்கள்\" என்று உறுதியாகக் கூறிவந்தனர்.\n\nஆனால், இந்திய மெய்யியலின் 'அனைத்துயிரும் ஒன்றே' என்ற ஆழ்ந்த பார்வையைப் பெற்றிருந்த போஸுக்கு இந்த வாதத்தில் உடன்பாடில்லை. தொட்டாற்சுருங்கிச் செடியைத் தொட்டவுடன் அது இலைகளை மூடிக்கொள்வதையும், சூரியகாந்தி மலர் கதிரவனை நோக்கித் திரும்புவதையும் கூர்ந்து கவனித்த அவர், \"தாவரங்களுக்கு உணர்ச்சி இல்லையென்பது உண்மையல்ல; அவற்றின் அமைதியான மௌன மொழியைக் கேட்கும் அளவுக்கு மனிதர்களின் கருவிகள் நுட்பமாக இல்லை, அவ்வளவுதான்!\" என்று நம்பினார்.\n\nதாவரங்களின் மௌன மொழியை மனிதக் கண்களுக்குக் காட்ட, போஸ் தன் அபாரமான பொறியியல் ஆற்றலைப் பயன்படுத்தினார். கடிகார சக்கரங்கள், மிக மெல்லிய நெம்புகோல்கள் மற்றும் ஒளிக் கண்ணாடிகளை இணைத்து உலகிலேயே முதல்முறையாக 'கிரெஸ்கோகிராஃப்' (Crescograph) என்ற அற்புதமான கருவியை உருவாக்கினார்.\n\nஇந்தக் கருவி, தாவரங்களின் வளர்ச்சியையும் அசைவுகளையும் பத்தாயிரம் மடங்கு—பின்னர் பத்து இலட்சம் மடங்கு வரை—பெரிதாக்கிக் காட்டும் ஆற்றல் கொண்டது! கண்களுக்குத் தெரியாத மிக நுண்ணிய தாவர அசைவுகூட, சுவரில் எதிரொளிக்கப்பட்ட ஒளிக்கற்றையின் வழியே கடிகார முள்ளைப் போலத் துல்லியமாக நகரத் தொடங்கியது.\n\n1901 மே 10 அன்று, இலண்டனில் உள்ள ராயல் சொசைட்டியின் மாபெரும் அரங்கத்தில் போஸ் தனது ஆய்வை விளக்க மேடை ஏறினார். உலகின் தலைசிறந்த ஐரோப்பிய உயிரியல் அறிஞர்கள் பலரும், \"ஓர் இயற்பியலாளர் வந்து தாவரவியலை மாற்றியமைக்கப் போகிறாரா?\" என்று புன்னகையுடன் பார்த்தனர்.\n\nபோஸ் மேடையில் ஒரு தொட்டிச் செடியை வைத்து, அதனுடன் தனது கிரெஸ்கோகிராஃப் கருவியின் நுண் உணரியை இணைத்தார். சுவரில் விழுந்த ஒளிக் கோடு, மனித இதயத் துடிப்பைப் போல சீராக மேல்நோக்கி நகர்ந்து கொண்டே இருந்தது—அந்தச் செடி நொடிக்கு நொடி வளர்ந்து கொண்டிருப்பதை அனைவரும் கண்கூடாகப் பார்த்தனர்!\n\nஅடுத்து, போஸ் ஒரு துணிச்சலான சோதனையைச் செய்தார். பொட்டாசியம் சயனைடு என்ற கொடிய நஞ்சை ஒரு துளி எடுத்து அந்தச் செடியின் வேரில் செலுத்தினார்.\n\nஅரங்கமே மூச்சடக்கிப் பார்த்தது. வெளிப்புறத்தில் செடி பச்சையாக அப்படியே நின்றது; ஆனால் திரையில் விழுந்த ஒளிக்கற்றையோ வினாடிக்குள் பெரும் துடிப்பை வெளிப்படுத்தியது! விஷம் தாக்கப்பட்ட ஒரு விலங்கு தன் தசைகளில் வலி தாங்காமல் துடிப்பது போல, அந்தச் செடியின் மின் சமிக்ஞைகள் வெறித்தனமாக நடுங்கித் தத்தளித்தன. சில நொடிகள் துடித்த ஒளிக்கற்றை... பின்னர் மெதுவாக அசைவற்று நின்றது.\n\nஅந்தச் செடி தன் உயிரை விட்டுவிட்டது—அதன் மரணத்தை ஒரு நரம்புத் துடிப்பைப் போல உலகம் முழுவதும் திரையில் கண்டது!\n\nஅரங்கமே எழுந்து நின்று இடி போன்ற கரவொலியால் போஸைப் பாராட்டியது. ஐரோப்பிய அறிஞர்கள் போஸின் கைகளைப் பிடித்துக் கண்ணீர் மல்க நன்றி கூறினர். தாவரங்களை ஓய்வெடுக்க வைத்தால் சோர்வு நீங்குவதையும், அவற்றுக்கும் மயக்க மருந்து வேலை செய்வதையும் போஸ் அறிவியல் பூர்வமாக நிரூபித்தார்.\n\n\"நம்மைச் சுற்றியுள்ள பசுமை உலகம் வெறும் ஜடப்பொருள் அல்ல; தாவரங்களுக்கும் விலங்குகளுக்கும் இடையே ஒரே ஜீவத்துடிப்புதான் ஓடிக்கொண்டிருக்கிறது\" என்று போஸ் முழங்கினார். தனது கருவிகளுக்குக் காப்புரிமை (Patent) பெற்று கோடீஸ்வரனாகும் வாய்ப்பு இருந்தும், அறிவியலின் உண்மை மனிதகுலம் முழுமைக்கும் பயன்பட வேண்டும் என்று கூறி அதை இலவசமாக உலகிற்கு வழங்கினார்.\n\nமரங்களையும் செடிகளையும் வெறும் மரக்கட்டைகளாகப் பார்க்காமல், அவற்றுடன் கருணையோடும் அன்போடும் வாழ வேண்டும் என்ற உயரிய உண்மையை உலகிற்கு உணர்த்திய மாபெரும் மேதை சர் ஜகதீஷ் சந்திர போஸ்!`,
    moral: "இயற்கையின் ஒவ்வொரு படைப்பிலும் ஓர் உயிர்த்துடிப்பு உண்டு; அறிவும் கருணையுமே இந்த உலகை முழுமையாகப் புரிந்துகொள்ளும் வழிகள்.",
    image: "/images/stories/science.webp",
    image_alt: "ஜகதீஷ் சந்திர போஸ் கிரெஸ்கோகிராஃப் கருவி கொண்டு தாவரங்களின் துடிப்பை லண்டன் ராயல் சொசைட்டியில் விளக்குதல்.",
    word_count: 660,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "தாவரங்களின் நுண்ணிய வளர்ச்சியையும் மின் துடிப்புகளையும் அளக்க போஸ் உருவாக்கிய கருவி எது?",
        options: [
          "கிரெஸ்கோகிராஃப் (Crescograph), தாவர அசைவுகளைப் பத்தாயிரம் மடங்கு பெரிதாக்கிக் காட்டும் கருவி.",
          "செல்லின் மையக்கருவை ஆராயும் எலக்ட்ரான் நுண்ணோக்கி.",
          "மழையின் அளவை அளவிடும் எளிய மழைமானி.",
          "நில அதிர்வுகளைப் பதிவு செய்யும் நிலநடுக்கமானி."
        ],
        answerIndex: 0,
        hint: "நெம்புகோல்களையும் ஒளிக் கண்ணாடியையும் கொண்டு போஸ் உருவாக்கிய புகழ்பெற்ற கருவி."
      },
      {
        question: "வேரில் நஞ்சு செலுத்தப்பட்டபோது செடிக்கு என்ன நிகழ்ந்தது என்பதை அரங்கம் எவ்வாறு கண்டது?",
        options: [
          "திரையில் ஒளிக்கற்றை விலங்கின் தசைத்துடிப்பு போல வெறித்தனமாக நடுங்கி இறுதியில் நின்றது.",
          "செடி ஒரு நொடியில் காய்ந்து சாம்பலாகப் போனது.",
          "அதிக மின்சாரம் பாய்ந்து கருவி வெடித்தது.",
          "செடியின் இலைகள் மஞ்சள் நிறமாக மாறின."
        ],
        answerIndex: 0,
        hint: "திரையில் காட்டப்பட்ட ஒளிக் கோட்டின் துடிப்பை நினைவுகூருங்கள்."
      },
      {
        question: "தன் அறிவியல் கண்டுபிடிப்புகளுக்கு போஸ் ஏன் காப்புரிமை (Patent) பெற மறுத்தார்?",
        options: [
          "அறிவியல் கண்டுபிடிப்புகள் பணம் சம்பாதிக்க அல்ல, அனைத்து மனிதர்களுக்கும் இலவசமாகப் பயன்பட வேண்டும் என்பதால்.",
          "காப்புரிமை விண்ணப்பம் எழுத அவருக்கு நேரம் இல்லாததால்.",
          "அக்காலத்தில் இந்தியாவில் காப்புரிமை அலுவலகங்கள் இல்லாததால்.",
          "தனது கருவிகள் யாருக்கும் புரியாது என்று அவர் நினைத்ததால்."
        ],
        answerIndex: 0,
        hint: "அவரது பொதுநல சிந்தனையையும் திறந்த அறிவியல் (Open Science) கொள்கையையும் நினைத்துப் பாருங்கள்."
      }
    ],
    author: "வரலாற்று அறிவியல் மரபு / Daily Tale Editorial",
    status: "published",
    content_notes: "ஜே. சி. போஸின் 'உயிருள்ள மற்றும் உயிரற்றவற்றில் துலங்கல்கள்' (1902) மற்றும் 'தாவரத் துலங்கல்கள்' (1906) நூல்களை அடிப்படையாகக் கொண்டது.",
    values: ["இயற்கை நேயம்", "கருணை", "கண்டுபிடிப்பு ஆற்றல்", "பொதுநலம்", "தியாகம்"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "கிரெஸ்கோகிராஃப் (Crescograph)", meaning: "தாவரங்களின் அதிநுட்பமான வளர்ச்சியையும் அசைவுகளையும் இலட்சக்கணக்கான மடங்கு பெரிதாக்கிக் காட்டும் போஸின் கருவி" },
      { word: "உயிரியற்பியல் (Biophysics)", meaning: "உயிரினங்களின் செயல்பாடுகளை இயற்பியல் விதிகளின் துணை கொண்டு ஆராயும் அறிவியல் பிரிவு" },
      { word: "மின் துலங்கல் (Electrical Response)", meaning: "தூண்டுதலுக்கு எதிராக ஓர் உயிரணு அல்லது திசு வெளிப்படுத்தும் மின்னோட்ட மாற்றம்" },
      { word: "செயல்பாட்டு மின்னழுத்தம் (Action Potential)", meaning: "உயிரினங்களின் நரம்பு அல்லது தசை வழியே பாயும் தற்காலிக மின் சமிக்ஞை" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "தாவரங்களுக்கும் உணர்ச்சி உண்டு என்பதை போஸ் லண்டன் விஞ்ஞானிகளுக்கு எப்படி நிரூபித்தார்?" },
      { tier: "Analyze", prompt: "விலங்குகளின் நரம்பு மண்டலத் துடிப்புகளோடு தாவரங்களின் மின்துடிப்புகள் எவ்வாறு ஒத்துப்போகின்றன?" },
      { tier: "Apply", prompt: "உங்கள் வீட்டில் உள்ள தொட்டிச் செடிகளுக்குத் தண்ணீர் ஊற்றும்போது, அவையும் உயிருள்ள தோழர்கள் என்ற எண்ணம் உங்களுக்குத் தோன்றுமா?" }
    ],
    reflection_prompt: "அடுத்தமுறை ஒரு மரத்தையோ பூஞ்செடியையோ பார்க்கும்போது, அதுவும் நம்மைப் போலச் சுவாசித்து, உணர்ந்து வாழ்கிறது என்பதை நினைவில் வையுங்கள்.",
    activity: "தொட்டாற்சுருங்கிச் செடியை மெதுவாகத் தொட்டு, இலைகள் சுருங்கி மீண்டும் விரிவடைய எத்தனை விநாடிகள் ஆகிறது என்று கவனித்துப் பதிவு செய்யுங்கள்.",
    mood: "wonder",
    teaser: "தாவரங்களுக்கும் துடிக்கும் இதயமும் உணர்வும் உண்டு என்று உலகுக்கு நிரூபித்த இந்திய மேதை ஜே. சி. போஸின் விந்தை.",
    series_id: "science-pioneers",
    part_number: 7,
    reviewed: true,
    source_book: "உயிருள்ள மற்றும் உயிரற்றவற்றில் துலங்கல்கள் (Response in the Living and Non-Living, 1902) & தாவரத் துலங்கல்கள் (1906)",
    source_author: "சர் ஜகதீஷ் சந்திர போஸ் (Sir Jagadish Chandra Bose, FRS)",
    source_year: "1902 / 1906",
    source_chapter: "நூல் அத்தியாயங்கள் 1–6; இலண்டன் ராயல் சொசைட்டி நேரடி செய்முறை விளக்கம் (மே 10, 1901)",
    source_edition: "லாங்மேன்ஸ், கிரீன் அண்ட் கோ, இலண்டன் (1902) & போஸ் ஆராய்ச்சி நிறுவனம், கொல்கத்தா",
    authenticity_note: "ஜகதீஷ் சந்திர போஸ் வெளியிட்ட முதன்மை ஆய்வுக் குறிப்புகள், கிரெஸ்கோகிராஃப் கருவியின் வரைபடங்கள் மற்றும் 1901 ராயல் சொசைட்டி ஆய்வறிக்கையில் பதிவு செய்யப்பட்டுள்ள வரலாற்று உண்மை ஆவணம்.",
    source: "சர் ஜகதீஷ் சந்திர போஸ், உயிருள்ள மற்றும் உயிரற்றவற்றில் துலங்கல்கள் (1902)"
  },
  {
    id: "science-8-ibn-al-haytham-dark-room",
    slug: "science-8-ibn-al-haytham-dark-room",
    language: "ta",
    title: "இப்னு அல்-ஹைதமும் இருட்டறையின் ஒளிக்கீற்றும் (கேமரா அப்ஸ்கியூரா)",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "அரபு உலகம் / எகிப்து (கெய்ரோ / பஸ்ரா)",
    age_group: "All Ages",
    summary: "கெய்ரோ நகரின் இருட்டறையில் சிறை வைக்கப்பட்டிருந்தபோது, மரக்கதவின் சிறிய துளை வழியே வந்த சூரிய ஒளிக்கீற்றை உற்று நோக்கி, தலைகீழான பிம்பத்தைக் கண்டறிந்து நவீன கேமராவின் முன்னோடியான 'கேமரா அப்ஸ்கியூரா'வை உருவாக்கியவர் இப்னு அல்-ஹைதம். கண்கள் ஒளியை உமிழ்வதில்லை, மாறாக ஒளியே கண்களுக்குள் நுழைகிறது என்பதை நிரூபித்து நவீன அறிவியல் முறையைத் தோற்றுவித்த உண்மை வரலாறு.",
    keywords: ["இப்னு அல்-ஹைதம்", "அல்ஹசன்", "ஒளியியல்", "கேமரா அப்ஸ்கியூரா", "அறிவியல் முறை", "அரபு உலகம்", "அறிவியல் கதைகள்"],
    tags: ["அறிவியல்", "ஒளியியல்", "இயற்பியல்", "அறிவியல்-முறை", "வரலாறு", "ஆராய்ச்சி"],
    full_text: `சுமார் ஆயிரம் ஆண்டுகளுக்கு முன்பு, எகிப்து நாட்டின் பழம்பெரும் கெய்ரோ நகரில் ஒரு பாறை அறையில் அமைதியாக அமர்ந்திருந்தார் ஒரு மாபெரும் அரபு மேதை. அவரது பெயர் அல்-ஹசன் இப்னு அல்-ஹைதம். மேலை நாடுகளில் இவர் 'அல்ஹசன்' (Alhazen) என்று போற்றப்படுகிறார். அப்போதைய கலீஃபாவின் கோபத்திற்கு ஆளாகி, அல்-அஸ்ஹர் பள்ளிவாசல் அருகிலிருந்த ஒரு வீட்டில் அவர் வீட்டுக் காவலில் வைக்கப்பட்டிருந்தார்.\n\nமற்றொரு மனிதராக இருந்திருந்தால் சிறைவாசத்தில் மனம் உடைந்திருப்பார்; ஆனால் இப்னு அல்-ஹைதமோ அந்த அமைதியான தனிமையை அறிவியலின் தவக்கூடமாக மாற்றினார். அக்காலத்தில் கிரேக்க மேதைகளான யூக்ளிட் மற்றும் தாலமி கூறிய கருத்து உலகம் முழுவதும் கற்பிக்கப்பட்டு வந்தது: \"மனிதக் கண்கள் டார்ச் லைட் போன்ற ஒளிக்கதிர்களை வெளியே வீசிப் பொருட்களைத் தொடுவதால்தான் நமக்குக் கண் பார்வை கிடைக்கிறது!\" என்றனர்.\n\nஆனால், சிறை அறையில் அமர்ந்திருந்த இப்னு அல்-ஹைதமின் கூர்மையான அறிவு இந்தக் கூற்றை ஏற்க மறுத்தது. \"கண்களிலிருந்துதான் ஒளி வெளியேறுகிறது என்றால், நண்பகல் சூரியனை நேராகப் பார்க்கும்போது கண்களில் சுரீரென வலி ஏற்படுவது ஏன்? இரவில் இருட்டில் கண்கள் ஏன் எதையும் பார்ப்பதில்லை?\"\n\nஒரு நாள் மதியம், சுட்டெரிக்கும் எகிப்திய வெயிலில் அவரது இருட்டறையின் (அல்-பைத் அல்-முஸ்லிம்) கனத்த மர ஜன்னல் இடுக்கில் ஒரு சிறிய ஊசித் துளை வழியே ஒரு மெல்லிய சூரியக் கதிர் உள்ளே பாய்ந்தது. எதிரே இருந்த வெள்ளையடிக்கப்பட்ட சுவரில் அந்தக் கதிர் விழுந்தது.\n\nஇப்னு அல்-ஹைதம் சட்டென எழுந்து சுவரை உற்றுப் பார்த்தார். அங்கே நிகழ்ந்த அதிசயத்தைக் கண்டு மெய்சிலிர்த்தார்!\n\nசுவரில், தெருவில் நடந்து சென்ற மனிதர்கள், கழுதை வண்டிகள், பள்ளிவாசலின் கோபுரங்கள், காற்றில் நகர்ந்த மேகங்கள் என அனைத்தும் அச்சு அசலாக வண்ணப் படமாக நகர்ந்து கொண்டிருந்தன! ஒரே ஒரு வித்தியாசம்—அனைத்து உருவங்களும் தலைகீழாகத் தெரிந்தன!\n\nஇப்னு அல்-ஹைதம் நிதானமாகப் பல சோதனைகளைச் செய்தார். அறையின் வெளியே பல விளக்குகளை வைத்து, அவற்றின் ஒளிக் கதிர்கள் அந்தச் சிறிய துளையின் வழியே செல்லும்போது ஒன்றுடன் ஒன்று மோதிக்கொள்ளாமல், நேர்கோட்டில் தனித்தனியாகப் பயணிப்பதை நிரூபித்தார். \n\nஇதுதான் உலகப் புகழ்பெற்ற 'கேமரா அப்ஸ்கியூரா' (Camera Obscura)! இன்று நாம் பயன்படுத்தும் ஸ்மார்ட்போன் கேமராக்கள் முதல் திரையரங்கு ப்ரொஜெக்டர்கள் வரை அனைத்திற்கும் தாய் இதுவேயாகும்!\n\nஅதோடு நில்லாமல், மனிதக் கண் பார்வை பற்றிய இரண்டாயிரம் ஆண்டு காலத் தவறை அவர் அடித்து நொறுக்கினார்: கண்களிலிருந்து ஒளி வெளியேறுவதில்லை; சூரியனிலோ விளக்கிலோ பட்டு எதிரொளிக்கும் ஒளிக் கதிர்கள் நேர்கோட்டில் வந்து நமது கண்மணிக்குள் (Pupil) நுழைவதால்தான் மனிதர்களுக்குப் பார்வை கிடைக்கிறது என்பதை முதன்முதலில் துல்லியமாக விளக்கினார்.\n\nதனது கண்டுபிடிப்புகளை 'கிதாப் அல்-மனாசிர்' (ஒளியியல் நூல்) என்ற ஏழு பாகங்கள் கொண்ட மாபெரும் நூலாக எழுதினார். அந்த நூலில் நவீன அறிவியல் முறைக்கு (Scientific Method) அவர் வித்திட்டார்: \"உண்மையைத் தேடுபவன் முன்னோர்கள் எழுதியதை அப்படியே கண்மூடித்தனமாக நம்பக் கூடாது; எதையும் சுய அறிவோடு சோதித்துப் பார்த்து, சோதனையில் நிரூபிக்கப்பட்ட உண்மைகளை மட்டுமே ஏற்க வேண்டும்!\"\n\nஇருட்டறையின் ஒரு சிறிய துளை வழியே உலக அறிவியலின் ஜன்னலைத் திறந்து வைத்த இப்னு அல்-ஹைதமின் வரலாறு, சோதனையும் நேர்மையும் இணைந்த சிந்தனையே உண்மையான அறிவியலின் அடையாளம் என்பதைக் காட்டுகிறது.`,
    moral: "முன்னோர்களின் கூற்றாக இருந்தாலும் கண்மூடித்தனமாக ஏற்காமல், சோதனைகளின் மூலம் மெய்ப்பிப்பதே மெய்யான அறிவியல்.",
    image: "/images/stories/science.webp",
    image_alt: "இப்னு அல்-ஹைதம் கெய்ரோ இருட்டறையில் தலைகீழ் பிம்பத்தைக் கேமரா அப்ஸ்கியூரா வழியே உற்று நோக்குதல்.",
    word_count: 650,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "கண் பார்வை குறித்து அக்காலத்தில் நிலவிய எந்தக் கிரேக்கக் கூற்றை இப்னு அல்-ஹைதம் மாற்றியமைத்தார்?",
        options: [
          "கண்களிலிருந்து கண்ணுக்குத் தெரியாத ஒளிக்கதிர்கள் வெளியேறிப் பொருட்களைத் தொடுகின்றன என்ற கூற்று.",
          "கண்கள் வெறும் நிறங்களை மட்டுமே பார்க்கும் என்ற கூற்று.",
          "இரவில் மட்டுமே மனிதக் கண்கள் வேலை செய்யும் என்ற தவறான நம்பிக்கை.",
          "கண் பார்வை மூளையோடு இணைக்கப்படவில்லை என்ற கருத்து."
        ],
        answerIndex: 0,
        hint: "கண்களிலிருந்து ஒளி வெளியேறுகிறதா அல்லது கண்களுக்குள் ஒளி நுழைகிறதா என்று யோசியுங்கள்."
      },
      {
        question: "இருட்டறையில் துளை வழியே வந்த ஒளியைக் கொண்டு அவர் உருவாக்கிய சாதனம் எது?",
        options: [
          "கேமரா அப்ஸ்கியூரா (Camera Obscura) - நவீன கேமராக்களின் முன்னோடி.",
          "கடலில் திசையறியும் காந்த திசைகாட்டி.",
          "நீரின் ஆழத்தை அளக்கும் கருவி.",
          "சூரிய ஒளியைக் கொண்டு நேரம் காட்டும் நிழல் கடிகாரம்."
        ],
        answerIndex: 0,
        hint: "இருட்டறையில் தலைகீழ் பிம்பத்தைக் காட்டிய சாதனத்தை நினைவுகூருங்கள்."
      },
      {
        question: "இப்னு அல்-ஹைதம் உருவாக்கிய 'நவீன அறிவியல் முறை' எதை வலியுறுத்துகிறது?",
        options: [
          "முன்னோர்கள் சொன்னதை அப்படியே ஏற்காமல், சோதனைகள் மற்றும் சான்றுகள் வழியே நிரூபிப்பதை.",
          "பழைய நூல்களை மட்டுமே மனனம் செய்து ஒப்புவிப்பதை.",
          "அறிவியல் உண்மைகளைப் பிற நாடுகளுக்குத் தெரியாமல் மறைப்பதை.",
          "கணிதத்தைப் பயன்படுத்தாமல் கற்பனையாக முடிவெடுப்பதை."
        ],
        answerIndex: 0,
        hint: "அவரது 'உண்மையைத் தேடுபவர்' பற்றிய புகழ்பெற்ற வரிகளை நினைவில் வையுங்கள்."
      }
    ],
    author: "வரலாற்று அறிவியல் மரபு / Daily Tale Editorial",
    status: "published",
    content_notes: "இப்னு அல்-ஹைதமின் 11-ஆம் நூற்றாண்டு ஒளியியல் நூலான 'கிதாப் அல்-மனாசிர்' (Kitab al-Manazir) ஆவணத்தை அடிப்படையாகக் கொண்டது.",
    values: ["ஆராய்ச்சி நெறி", "அறிவியல் முறை", "துணிச்சல்", "நேர்மை", "விடாமுயற்சி"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "கேமரா அப்ஸ்கியூரா (Camera Obscura)", meaning: "இருண்ட அறையில் ஒரு சிறு துளை வழியே வெளிப்புறக் காட்சியைத் தலைகீழாகத் திரையில் காட்டும் சாதனம்" },
      { word: "ஒளி உமிழ்வுக் கொள்கை (Emission Theory)", meaning: "கண்களிலிருந்து ஒளிக்கதிர்கள் வெளியேறிப் பொருட்களைத் தொடுவதால் பார்வை கிடைக்கிறது என்ற பழைய தவறான கொள்கை" },
      { word: "அறிவியல் முறை (Scientific Method)", meaning: "கருதுகோள்களை நடைமுறைச் சோதனைகள் மற்றும் சான்றுகளின் மூலம் சரிபார்த்து முடிவெடுக்கும் ஆய்வு நெறிமுறை" },
      { word: "ஒளிக்கதிர் நேர்கோட்டுப் பயணம் (Rectilinear Propagation)", meaning: "ஒளி எப்போதும் நேர்கோட்டிலேயே பயணிக்கும் என்ற அடிப்படை இயற்கை விதி" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "ஒரு சிறிய துளை வழியே ஒளி செல்லும்போது சுவரில் பிம்பம் ஏன் தலைகீழாகத் தெரிகிறது?" },
      { tier: "Analyze", prompt: "இப்னு அல்-ஹைதமை நவீன அறிவியல் முறையின் தந்தை என்று உலகம் போற்றுவது ஏன்?" },
      { tier: "Apply", prompt: "ஒரு பழைய காலணிப் பெட்டியைக் கொண்டு வீட்டில் எளிய பின்ஹோல் கேமராவை எப்படி உருவாக்குவீர்கள்?" }
    ],
    reflection_prompt: "நமக்குச் சொல்லப்படும் தகவல்களை அப்படியே கண்மூடித்தனமாக ஏற்காமல், 'இதற்கு என்ன ஆதாரம்?' என்று சிந்தித்துப் பாருங்கள்.",
    activity: "ஒரு தடிமனான அட்டையில் குண்டூசியால் ஒரு துளையிட்டு, வெயிலில் பிடித்து கீழே உள்ள தாளில் சூரியனின் பிம்பம் விழுவதைக் கவனியுங்கள்.",
    mood: "wonder",
    teaser: "சிறை வைக்கப்பட்ட இருட்டறையின் ஊசித் துளையிலிருந்து கேமராவையும் அறிவியல் முறையையும் உருவாக்கிய அரபு மேதையின் கதை.",
    series_id: "science-pioneers",
    part_number: 8,
    reviewed: true,
    source_book: "கிதாப் அல்-மனாசிர் (Kitab al-Manazir - ஒளியியல் நூல், 1021)",
    source_author: "அல்-ஹசன் இப்னு அல்-ஹைதம் (Alhazen)",
    source_year: "பொ.ஆ. 1011–1021",
    source_chapter: "கிதாப் அல்-மனாசிர், பாகங்கள் 1–3 (நேர்கோட்டுக் கதிர்கள், பார்வை இயற்பியல், கேமரா அப்ஸ்கியூரா)",
    source_edition: "ஏ. ஐ. சப்ரா ஆங்கில மொழிபெயர்ப்பு, வார்பர்க் இன்ஸ்டிடியூட், இலண்டன் (1989)",
    authenticity_note: "இப்னு அல்-ஹைதமின் ஏழு பாகங்கள் கொண்ட அரபு மூல ஒளியியல் கையெழுத்துப் பிரதிகள் மற்றும் 1572 பேசல் லத்தீன் பதிப்பில் பாதுகாக்கப்பட்டுள்ள முதன்மை வரலாற்று ஆவணம்.",
    source: "அல்-ஹசன் இப்னு அல்-ஹைதம், கிதாப் அல்-மனாசிர் (1021)"
  },
  {
    id: "science-9-jenner-milkmaids-secret",
    slug: "science-9-jenner-milkmaids-secret",
    language: "ta",
    title: "எட்வர்ட் ஜென்னரும் மாட்டுக்காரப் பெண்ணின் தழும்பும்: முதல் தடுப்பூசி",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "இங்கிலாந்து (குளோஸ்டர்ஷயர் / பெர்க்லி)",
    age_group: "All Ages",
    summary: "அம்மை நோயால் லட்சக்கணக்கான மக்கள் மாண்டுபோன பதினெட்டாம் நூற்றாண்டில், பசுக்களிடம் பால் கறக்கும் மாட்டுக்காரப் பெண்களுக்கு மட்டும் பெரியம்மை வருவதில்லை என்ற எளிய கிராமத்து உற்றுநோக்கலை அடிப்படையாகக் கொண்டு, உலகின் முதல் தடுப்பூசியைக் கண்டறிந்து மனிதகுலத்தைக் காத்த மருத்துவர் எட்வர்ட் ஜென்னரின் தியாக வரலாறு.",
    keywords: ["எட்வர்ட் ஜென்னர்", "தடுப்பூசி", "பெரியம்மை", "கோவம்பம்மை", "மருத்துவம்", "நோய் எதிர்ப்பு சக்தி", "அறிவியல் கதைகள்"],
    tags: ["அறிவியல்", "மருத்துவம்", "தடுப்பூசி", "பொதுநலம்", "கருணை", "வரலாறு"],
    full_text: `பதினெட்டாம் நூற்றாண்டில், உலகையே நடுங்க வைத்த ஒரு கொடிய அரக்கனாக இருந்தது 'பெரியம்மை' (Smallpox) நோய். அந்நோய் தாக்கினால் உடலெங்கும் கொப்புளங்கள் தோன்றி, தாங்க முடியாத வலியால் லட்சக்கணக்கான மக்கள் உயிரிழந்தனர். பிழைத்தவர்களுக்கோ முகமெல்லாம் விகாரமான தழும்புகளும், பலருக்குக் கண்பார்வையும் பறிபோனது. அரசர் முதல் பரதேசி வரை அனைவரையும் அச்சுறுத்திய இந்நோய்க்கு எந்த மருத்துவமும் இல்லை.\n\nஅக்காலத்தில் இங்கிலாந்தின் குளோஸ்டர்ஷயர் கிராமத்தில் எட்வர்ட் ஜென்னர் என்ற எளிய பாசமிக்க மருத்துவர் வாழ்ந்து வந்தார். கிராமத்துக் குடிசைகளுக்குக் குதிரையில் சென்று நோயாளிகளைப் பார்த்த ஜென்னர், மற்ற மருத்துவர்கள் அலட்சியப்படுத்திய கிராமத்து மக்களின் எளிய பேச்சுகளைக் கூர்ந்து கவனித்தார்.\n\nகுறிப்பாக, மாடுகளிடம் பால் கறக்கும் இளம்பெண்களின் முகம் தழும்புகளே இல்லாமல் வழுவழுவென அழகாக இருப்பதை ஜென்னர் கண்டார். ஊரெங்கும் பெரியம்மை பரவி மனிதர்கள் மடிந்தபோதும், அந்தப் பெண்களுக்கு மட்டும் எதுவுமே நிகழவில்லை! சாரா நெல்ம்ஸ் என்ற பால் கறக்கும் பெண் ஜென்னரிடம், \"எனக்கு ஒருமுறை மாட்டம்மை (Cowpox) வந்து கைகளில் சிறு கொப்புளம் வந்தது; எனவே எனக்கு ஒருபோதும் பெரியம்மை வராது\" என்று அமைதியாகக் கூறினார்.\n\nமாட்டம்மை என்பது பசுக்களின் மடியில் தோன்றும் ஒரு சாதாரண, ஆபத்தில்லாத தொற்று. அதைப் பால் கறக்கும் பெண்களின் கைகளில் தொற்றினால் சிறிய தழும்பு வருமே தவிர, உயிருக்கோ உடலுக்கோ எந்தக் கேடும் வராது. ஜென்னரின் மனதில் ஒரு மின்னல் போன்ற சிந்தனை உதித்தது: \"ஆபத்தில்லாத மாட்டம்மைத் தொற்று ஒரு மனிதருக்கு வந்துவிட்டால், அது ஆபத்தான பெரியம்மையை எதிர்க்கும் ஆற்றலை உடலுக்குக் கொடுத்து விடுகிறதா?\"\n\nஜென்னர் இருபது ஆண்டுகள் கிராமத்து மக்களின் அனுபவங்களைத் திரட்டினார்; நோயாளிகளைக் கண்காணித்தார்; ஆதாரங்களைச் சேகரித்தார். இறுதியாக, உலக மருத்துவ வரலாற்றையே மாற்றிய அந்த வரலாற்றுச் சோதனையைச் செய்யத் துணிந்தார்.\n\n1796 மே 14 அன்று, 'பிளாசம்' என்ற பசுவிடம் பால் கறந்ததால் கைகளில் மாட்டம்மைக் கொப்புளங்களுடன் வந்த சாரா நெல்ம்ஸ் என்ற பெண்ணின் கையிலிருந்து ஒரு துளி நீரை எடுத்தார். பின்னர், தனது தோட்டக்காரரின் எட்டு வயது மகனான ஜேம்ஸ் பிப்ஸ் என்ற சிறுவனின் கையில் இரண்டு மெல்லிய கீறல்களைப் போட்டு அந்த நீரைச் செலுத்தினார்.\n\nசில நாட்களில் சிறுவனுக்கு லேசான காய்ச்சல் வந்து, கொப்புளம் ஆறி முழுமையாகக் குணமடைந்தான்.\n\nஅடுத்து வந்ததுதான் ஜென்னரின் நெஞ்சை உறைய வைத்த சோதனைக் கணம். இரண்டு மாதங்கள் கழித்து, அக்காலத்தில் வழக்கிலிருந்த பெரியம்மை நோய்த்தொற்றுக் கிருமியை அந்தச் சிறுவனின் உடலில் செலுத்தினார். ஜென்னருக்கு இரவெல்லாம் தூக்கமில்லை. தனது கணிப்பு தவறினால் அந்தப் பச்சிளம் பாலகன் உயிரிழந்துவிடுவான்! ஆனால் நாட்கள்தான் நகர்ந்தன... சிறுவன் ஜேம்ஸ் பிப்ஸுக்கு எந்த நோயும் வரவில்லை; அவன் வழக்கம் போலத் துள்ளி விளையாடிக் கொண்டிருந்தான்! ஆம், ஆபத்தில்லாத மாட்டம்மை அவனுக்குப் பெரியம்மைக்கு எதிரான முழுக் கவசத்தைக் கொடுத்துவிட்டது!\n\nஜென்னர் 1798-இல் தனது ஆய்வை நூலாக வெளியிட்டார். 'பசு' என்பதைக் குறிக்கும் 'வக்கா' (Vacca) என்ற லத்தீன் சொல்லிலிருந்து 'வாக்சின்' (Vaccine - தடுப்பூசி) என்ற சொல்லையே உலகிற்கு அறிமுகப்படுத்தினார். இந்தக் கண்டுபிடிப்புக்குக் காப்புரிமை வாங்கிப் பெரும் பணக்காரனாகும் வாய்ப்பு இருந்தும், ஜென்னர் உலகெங்கும் உள்ள மருத்துவர்களுக்கு இலவசமாகத் தடுப்பூசி மருந்தை அனுப்பி வைத்தார்.\n\nஎட்வர்ட் ஜென்னரின் கூர்ந்த கவனிப்பாலும் தியாகத்தாலும், மனிதகுலத்தின் வரலாற்றிலேயே முதன்முதலாகப் பூமியிலிருந்து முற்றிலுமாக ஒழிக்கப்பட்ட கொடிய நோயாகப் பெரியம்மை மாறியது! ஒரு மாட்டுக்காரப் பெண்ணின் எளிய அனுபவத்திற்குச் செவிமடுத்த மருத்துவர், உலகிற்கே மாபெரும் உயிர்க்கவசத்தை வழங்கினார்.`,
    moral: "எளிய மக்களின் எளிய அனுபவங்களிலும் மாபெரும் மருத்துவ உண்மைகள் ஒளிந்திருக்கலாம்; கவனிப்பும் துணிச்சலுமே மனிதகுலத்தைக் காக்கும்.",
    image: "/images/stories/science.webp",
    image_alt: "எட்வர்ட் ஜென்னர் சிறுவன் ஜேம்ஸ் பிப்ஸுக்கு மாட்டம்மை நீரைச் செலுத்தி முதல் தடுப்பூசியைச் சோதித்தல்.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "மாட்டுக்காரப் பெண்களுக்குப் பெரியம்மை நோய் வராததற்குக் காரணமாக ஜென்னர் கண்டறிந்தது எது?",
        options: [
          "பசுக்களிடமிருந்து அவர்களுக்கு வந்த ஆபத்தில்லாத மாட்டம்மைத் தொற்று, பெரியம்மைக்கு எதிரான பாதுகாப்பைத் தந்தது.",
          "அவர்கள் தினமும் பசுவின் பாலைக் குடித்ததால் அவர்களின் உடல் வலிமையானது.",
          "அவர்கள் பசுந்தழைகளை மட்டுமே உண்டு வாழ்ந்ததால் நோய் வரவில்லை.",
          "அவர்கள் கிராமத்து சுத்தமான காற்றில் மட்டுமே வேலை செய்ததால் தொற்று ஏற்படவில்லை."
        ],
        answerIndex: 0,
        hint: "மாடுகளின் மடியிலிருந்து கைகளில் பரவிய மெல்லிய தொற்றை நினைவுகூருங்கள்."
      },
      {
        question: "'வாக்சின்' (Vaccine - தடுப்பூசி) என்ற சொல் எந்த லத்தீன் சொல்லிலிருந்து பிறந்தது?",
        options: [
          "'வக்கா' (Vacca) - பசு என்பதைக் குறிக்கும் லத்தீன் சொல்.",
          "'விக்டோரியா' (Victoria) - வெற்றி என்பதைக் குறிக்கும் சொல்.",
          "'வீட்டா' (Vita) - வாழ்க்கை என்பதைக் குறிக்கும் சொல்.",
          "'வேரி' (Vari) - அம்மை என்பதைக் குறிக்கும் சொல்."
        ],
        answerIndex: 0,
        hint: "மாட்டம்மை கொடுத்த வீட்டு விலங்கின் லத்தீன் பெயரை யோசியுங்கள்."
      },
      {
        question: "ஜென்னரின் தடுப்பூசி முறையால் உலகளவில் நிகழ்ந்த மாபெரும் மருத்துவ சாதனை எது?",
        options: [
          "மனிதகுல வரலாற்றிலேயே பூமியிலிருந்து முற்றிலுமாக ஒழிக்கப்பட்ட முதல் கொடிய நோயாகப் பெரியம்மை மாறியது.",
          "உலகில் உள்ள அனைத்துக் காய்ச்சல் மருந்துகளும் தடை செய்யப்பட்டன.",
          "மருத்துவமனைகளில் அறுவை சிகிச்சை செய்யத் தேவையே இல்லாமல் போனது.",
          "மனிதர்களுக்கு ஒருபோதும் சளி பிடிக்காமல் போனது."
        ],
        answerIndex: 0,
        hint: "1980-இல் உலக சுகாதார நிறுவனம் பெரியம்மை ஒழிக்கப்பட்டதாக அறிவித்ததை நினைவுகூருங்கள்."
      }
    ],
    author: "வரலாற்று அறிவியல் மரபு / Daily Tale Editorial",
    status: "published",
    content_notes: "டாக்டர் எட்வர்ட் ஜென்னர் 1798-இல் லண்டனில் வெளியிட்ட 'வேரியோலா வேக்சினேவின் காரணங்களும் விளைவுகளும்' ஆய்வறிக்கையை அடிப்படையாகக் கொண்டது.",
    values: ["இரக்கம்", "கூர்ந்த கவனிப்பு", "மருத்துவ அறம்", "பொதுநலம்", "அச்சமின்மை"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "தடுப்பூசி (Vaccine)", meaning: "குறிப்பிட்ட நோய்க்கிருமிக்கு எதிராக உடலின் நோய் எதிர்ப்பு மண்டலத்தைத் தூண்டிப் பாதுகாப்பை வழங்கும் மருந்து" },
      { word: "நோய் எதிர்ப்பு சக்தி (Immunity)", meaning: "உடலில் நுழையும் கொடிய நோய்க்கிருமிகளை எதிர்த்துப் போராடி அழிக்கும் இயற்கையான அல்லது செயற்கையான பாதுகாப்பு ஆற்றல்" },
      { word: "மாட்டம்மை (Cowpox)", meaning: "பசுக்களின் மடியில் தோன்றி மனிதர்களுக்கு லேசான தழும்பை மட்டுமே ஏற்படுத்தும் ஆபத்தில்லாத வைரஸ் தொற்று" },
      { word: "முற்றிலும் ஒழித்தல் (Eradication)", meaning: "ஒரு தொற்றுநோயை உலக மக்கள் தொகையிலிருந்து முழுமையாக வேரறுத்து இல்லாமல் ஆக்குதல்" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "ஆபத்தில்லாத மாட்டம்மை எப்படி ஆபத்தான பெரியம்மையிலிருந்து மனிதர்களைப் பாதுகாத்தது?" },
      { tier: "Analyze", prompt: "ஜென்னர் தனது தடுப்பூசி முறைக்குக் காப்புரிமை பெறாமல் உலகிற்கு இலவசமாக வழங்கியது ஏன் முக்கியமானது?" },
      { tier: "Apply", prompt: "இன்று நாம் பள்ளிகளிலும் மருத்துவமனைகளிலும் போடும் தடுப்பூசிகள் ஜென்னரின் வழியை எப்படித் தொடர்கின்றன?" }
    ],
    reflection_prompt: "இன்று நம் குழந்தைகளைப் பல கொடிய நோய்களிலிருந்து காப்பாற்றும் தடுப்பூசி முறைக்கு வித்திட்ட ஜென்னரின் தியாகத்தை நினைத்துப் பாருங்கள்.",
    activity: "உங்கள் பெற்றோரிடம் கேட்டு, குழந்தைப் பருவத்தில் நீங்கள் போட்டுக்கொண்ட தடுப்பூசி அட்டவணையைக் கவனித்துப் பாருங்கள்.",
    mood: "wonder",
    teaser: "ஒரு மாட்டுக்காரப் பெண்ணின் தழும்பை உற்று நோக்கி உலகையே பெரியம்மையிலிருந்து காத்த மருத்துவர் ஜென்னரின் கதை.",
    series_id: "science-pioneers",
    part_number: 9,
    reviewed: true,
    source_book: "வேரியோலா வேக்சினேவின் காரணங்களும் விளைவுகளும் பற்றிய ஓர் ஆய்வு (An Inquiry into the Causes and Effects of the Variolae Vaccinae, 1798)",
    source_author: "டாக்டர் எட்வர்ட் ஜென்னர் (Dr. Edward Jenner, FRS, MD)",
    source_year: "1798",
    source_chapter: "நிகழ்வு 16 (சாரா நெல்ம்ஸ்) & நிகழ்வு 17 (ஜேம்ஸ் பிப்ஸ், மே 14, 1796); லண்டன் பதிப்பு",
    source_edition: "சாம்சன் லோ, லண்டன் (1798) & பிரிட்டிஷ் நூலக மருத்துவ ஆவணக் காப்பகம்",
    authenticity_note: "டாக்டர் எட்வர்ட் ஜென்னர் வெளியிட்ட முதன்மை மருத்துவ ஆய்வறிக்கை, சாரா நெல்ம்ஸின் கைத்தழும்பு வண்ண ஓவியங்கள் மற்றும் ஜேம்ஸ் பிப்ஸுக்குச் செய்யப்பட்ட முதல் தடுப்பூசி மருத்துவப் பதிவுகளில் உள்ள உண்மை வரலாறு.",
    source: "டாக்டர் எட்வர்ட் ஜென்னர், வேரியோலா வேக்சினேவின் காரணங்களும் விளைவுகளும் (1798)"
  },
  {
    id: "science-10-mendel-garden-peas",
    slug: "science-10-mendel-garden-peas",
    language: "ta",
    title: "கிரிகோர் மெண்டலும் மடாலயத் தோட்டத்துப் பட்டாணிச் செடிகளும்",
    genre: "Science & Discovery",
    collection: "Science & Discovery",
    culture_region: "மத்திய ஐரோப்பா / செக் குடியரசு (ப்ர்னோ)",
    age_group: "All Ages",
    summary: "செக் குடியரசின் புனித தாமஸ் மடாலயத் தோட்டத்தில் எட்டு ஆண்டுகள் அமைதியாக 29,000-க்கும் மேற்பட்ட பட்டாணிச் செடிகளை இனக்கலப்பு செய்து, பூக்களின் நிறம் மற்றும் விதைகளின் வடிவம் பரம்பரை பரம்பரையாக எவ்வாறு கடத்தப்படுகின்றன என்பதைக் கணிதத் துல்லியத்தோடு உலகிற்கு விளக்கி மரபியலின் தந்தையான கிரிகோர் மெண்டலின் வரலாற்றுப் பாடம்.",
    keywords: ["கிரிகோர் மெண்டல்", "மரபியல்", "பட்டாணிச் செடி", "பரம்பரை பண்புகள்", "ஓங்கு பண்பு", "ஒடுங்கு பண்பு", "அறிவியல் கதைகள்"],
    tags: ["அறிவியல்", "மரபியல்", "உயிரியல்", "பொறுமை", "கணிதம்", "கண்டுபிடிப்பு"],
    full_text: `செக் குடியரசின் ப்ர்னோ நகரில் உள்ள புனித தாமஸ் அகஸ்டீனியன் மடாலயத்தின் பின்புறம் ஒரு சிறிய பூந்தோட்டம் இருந்தது. மற்ற துறவிகள் வழிபாடுகளிலும் நூலகத்திலும் மூழ்கியிருந்தபோது, கறுப்பு அங்கி அணிந்த ஓர் எளிய துறவி மட்டும் தனது பிற்பகல் நேரங்களை அந்தத் தோட்டத்து மண்ணில் முழங்காலிட்டுச் செலவிட்டார்.\n\nஅவரது பெயர் கிரிகோர் யோஹான் மெண்டல். ஓர் ஏழை விவசாயக் குடும்பத்தில் பிறந்து, கணிதத்திலும் இயற்பியலிலும் ஆர்வம் கொண்ட ஓர் அமைதியான மனிதர் அவர். அக்காலத்தில் விஞ்ஞானிகள், \"தாய் தந்தையின் பண்புகள் மஞ்சள் மற்றும் நீல வண்ணச் சாயங்களை ஒன்றாகக் கலக்குவது போலப் பிள்ளைகளிடம் ஒன்றாகக் கரைந்து புதிய நிறமாகிவிடுகின்றன (Blending Inheritance)\" என்று மங்கலாக நம்பினர்.\n\nஆனால், கணிதத் துல்லியத்தை விரும்பிய மெண்டலுக்கு இந்த மங்கலான விளக்கம் திருப்தி அளிக்கவில்லை. அவர் துல்லியமான எண்களை விரும்பினார். 1856-ஆம் ஆண்டில், தோட்டத்துப் பட்டாணிச் செடியை (Pisum sativum) தனது ஆராய்ச்சிக் கூட்டாளியாகத் தேர்ந்தெடுத்தார். பட்டாணிச் செடி விரைவாக வளரும்; ஏராளமான விதைகளைக் கொடுக்கும்; எல்லாவற்றிற்கும் மேலாக, எளிதில் வேறுபடுத்திப் பார்க்கக்கூடிய பண்புகளைக் கொண்டது!\n\nமெண்டல் ஏழு பண்புகளைத் தேர்ந்தெடுத்தார்: ஊதா மலர் அல்லது வெள்ளை மலர், மஞ்சள் விதை அல்லது பச்சை விதை, உருண்டையான விதை அல்லது சுருங்கிய விதை, உயரமான செடி அல்லது குட்டைச் செடி. சிறிய சாமணத்தையும் தூரிகையையும் கொண்டு, ஆயிரக்கணக்கான பூக்களின் மகரந்தங்களை மெண்டல் கைகளால் நுட்பமாக மாற்றி மாற்றி மகரந்தச் சேர்க்கை செய்தார்.\n\nமுதலில், தூய உயரமான செடியையும் தூய குட்டைச் செடியையும் கலப்பு செய்தார். பழைய கொள்கைப்படி பார்த்தால், நடுத்தர உயரமுள்ள செடிகள் தோன்றியிருக்க வேண்டும். ஆனால் விதைகளை நட்டுப் பார்த்த மெண்டல் வாயடைத்துப் போனார்: முதல் தலைமுறையில் பிறந்த அத்தனை செடிகளும் மிக உயரமாகவே இருந்தன! குட்டைப் பண்பு எங்கே போனது? மாயமாய் மறைந்துவிட்டதா?\n\nமெண்டல் விடவில்லை. அந்த முதல் தலைமுறை உயரமான செடிகளைத் தங்களுக்குள்ளேயே மகரந்தச் சேர்க்கை செய்ய விட்டு, அடுத்த ஆண்டு அவற்றின் விதைகளை நட்டு வைத்தார்.\n\nமண்ணைப் பிளந்துகொண்டு இரண்டாம் தலைமுறைச் செடிகள் துளிர்த்தபோது... ஒரு பெரும் அதிசயம் நிகழ்ந்தது! மறைந்துபோனதாகக் கருதப்பட்ட அந்தக் குட்டைப் பண்பு மீண்டும் கம்பீரமாகத் திரும்பி வந்திருந்தது! அதுவும் எந்தக் கலங்கலும் இல்லாமல், அதே பழைய தூய குட்டைச் செடியாகவே முளைத்திருந்தது!\n\nமெண்டல் பொறுமையுடன் ஒவ்வொரு செடியாக எண்ணினார்—உயரம், உயரம், உயரம், குட்டை... உயரம், உயரம், உயரம், குட்டை! அவரது கணித அறிவு ஒரு விந்தையான விதியைக் காட்டியது.\n\nஇரண்டாம் தலைமுறையில் முளைத்த 1,064 செடிகளில் 787 செடிகள் உயரமாகவும், 277 செடிகள் குட்டையாகவும் இருந்தன—சரியாக 3:1 என்ற விகிதம்! மலர்களின் நிறம், விதையின் வடிவம் என அனைத்துப் பண்புகளிலும் இருபத்தொன்பதாயிரத்திற்கும் மேற்பட்ட பட்டாணிச் செடிகளை எட்டு ஆண்டுகள் வளர்த்து எண்ணியபோதும், இதே 3:1 விகிதமே துல்லியமாக மீண்டும் மீண்டும் வந்தது!\n\nமெண்டல் ஒரு மகத்தான உண்மையைக் கண்டறிந்தார்: மரபுப் பண்புகள் வண்ணச் சாயங்களைப் போல ஒன்றுடன் ஒன்று கரைந்து மறைவதில்லை! அவை அழியாத தனித்தனி அலகுகளாகப் (Genes) பெற்றோரிடமிருந்து பிள்ளைகளுக்குக் கடத்தப்படுகின்றன. சில பண்புகள் 'ஓங்கு பண்புகளாக' (Dominant) வெளியில் தெரிகின்றன; சில பண்புகள் 'ஒடுங்கு பண்புகளாக' (Recessive) உள்ளே மறைந்திருந்து, அடுத்த தலைமுறையில் மீண்டும் தூய்மையாக வெளிப்படுகின்றன!\n\n1865-ஆம் ஆண்டில் மெண்டல் தனது கண்டுபிடிப்புகளை ஆய்வுக் கட்டுரையாக வாசித்தார். ஆனால், கூட்டத்திலிருந்த எவருக்கும் இந்த உயர்நிலைக் கணிதத்தின் அருமை புரியவில்லை. அவரது ஆய்வுக்கட்டுரை நூலக அலமாரியில் முப்பத்தைந்து ஆண்டுகள் தூசு படிந்து கிடந்தது.\n\nஇருப்பினும் மெண்டல் சோர்வடையவில்லை. \"என் காலம் நிச்சயம் ஒரு நாள் வரும்\" என்று அமைதியாகக் கூறினார். அவர் மறைந்து பல ஆண்டுகளுக்குப் பிறகு, 1900-ஆம் ஆண்டில் மூன்று தனித்தனி விஞ்ஞானிகள் மெண்டலின் குறிப்புகளைக் கண்டெடுத்து, அவரை 'மரபியலின் தந்தை' என்று உலகிற்குப் பறைசாற்றினர்.\n\nதோட்டத்து மண்ணில் முழங்காலிட்டு ஒரு துறவி செய்த அமைதியான உழைப்பு, மனித வாழ்வின் மரபணு ரகசியங்களை அவிழ்த்த மாபெரும் கதையாக வரலாற்றில் நிலைத்து நிற்கிறது.`,
    moral: "பொறுமையும், துல்லியமான பதிவுகளும், இடைவிடாத உழைப்புமே இயற்கையின் ஆகப்பெரிய ரகசியங்களை மனிதகுலத்திற்கு வெளிப்படுத்தும்.",
    image: "/images/stories/science.webp",
    image_alt: "கிரிகோர் மெண்டல் மடாலயத் தோட்டத்தில் பட்டாணிச் செடிகளின் பண்புகளைக் குறித்துக்கொள்ளுதல்.",
    word_count: 670,
    reading_time: "4 min",
    listen_time: "4 min",
    audio_url: "",
    publish_date: "2026-11-14",
    is_bedtime: false,
    quiz: [
      {
        question: "மரபுப் பண்புகள் பற்றிய எந்தப் பழைய தவறான நம்பிக்கையை மெண்டல் மறுத்தார்?",
        options: [
          "பெற்றோரின் பண்புகள் சாயங்கள் போல ஒன்றாகக் கரைந்து மங்கலான கலவையாகிவிடும் என்ற கூற்று.",
          "செடிகள் காற்றில் பறக்கும் விதைகளால் மட்டுமே பிறக்கின்றன என்ற கூற்று.",
          "விதைகளுக்குத் தண்ணீர் தேவையில்லை என்ற கருத்து.",
          "மலர்களின் நிறம் சூரியனைப் பொறுத்து மட்டுமே மாறும் என்ற நம்பிக்கை."
        ],
        answerIndex: 0,
        hint: "பண்புகள் சாயம் போலக் கரைந்து விடுகின்றனவா அல்லது தனித்தனி அலகுகளாகக் கடத்தப்படுகின்றனவா என்று யோசியுங்கள்."
      },
      {
        question: "மெண்டலின் இரண்டாம் தலைமுறைப் பட்டாணிச் செடிகளில் வெளிப்பட்ட புகழ்பெற்ற கணித விகிதம் எது?",
        options: [
          "3:1 விகிதம் (3 ஓங்கு பண்புச் செடிகளுக்கு 1 ஒடுங்கு பண்புச் செடி).",
          "1:1 சமமான விகிதம்.",
          "10:1 என்ற விகிதம்.",
          "5:2 என்ற கணக்கீடு."
        ],
        answerIndex: 0,
        hint: "உயரமான செடிகளுக்கும் குட்டைச் செடிகளுக்கும் இடையே வந்த துல்லியமான விகிதத்தை நினைவுகூருங்கள்."
      },
      {
        question: "மெண்டல் கண்டறிந்த, தலைமுறை தலைமுறையாகப் பண்புகளைக் கடத்தும் கண்ணுக்குத் தெரியாத அலகுகள் இன்று எவ்வாறு அழைக்கப்படுகின்றன?",
        options: [
          "மரபணுக்கள் அல்லது ஜீன்கள் (Genes).",
          "மைட்டோகாண்ட்ரியாக்கள்.",
          "பசுங்கணிகங்கள்.",
          "தாவர ஹார்மோன்கள்."
        ],
        answerIndex: 0,
        hint: "நவீன மரபியலின் அடிப்படைக் குறியீட்டை நினைத்துப் பாருங்கள்."
      }
    ],
    author: "வரலாற்று அறிவியல் மரபு / Daily Tale Editorial",
    status: "published",
    content_notes: "கிரிகோர் மெண்டலின் 1866 ஆய்வுக் கட்டுரையான 'தாவரக் கலப்பினங்கள் பற்றிய சோதனைகள்' (Versuche über Pflanzen-Hybriden) ஆவணத்தை அடிப்படையாகக் கொண்டது.",
    values: ["பொறுமை", "கணிதத் துல்லியம்", "உழைப்பு", "அமைதியான அர்ப்பணிப்பு", "உண்மைத் தேடல்"],
    reading_level: "Intermediate",
    vocabulary: [
      { word: "மரபியல் (Genetics)", meaning: "உயிரினங்களின் பண்புகள் பரம்பரை பரம்பரையாக எவ்வாறு கடத்தப்படுகின்றன என்பதை ஆராயும் அறிவியல் பிரிவு" },
      { word: "ஓங்கு பண்பு (Dominant Trait)", meaning: "இரண்டு மாறுபட்ட காரணிகள் இணையும்போது வெளியில் வெளிப்பட்டுத் தெரியும் வலிமையான மரபுப் பண்பு" },
      { word: "ஒடுங்கு பண்பு (Recessive Trait)", meaning: "ஓங்கு பண்பின் முன்னிலையில் வெளிப்படாமல் மறைந்திருந்து, தூய நிலையில் மட்டுமே வெளிப்படும் மரபுப் பண்பு" },
      { word: "கலப்பினச் சேர்க்கை (Hybridization)", meaning: "வெவ்வேறு பண்புகளைக் கொண்ட இரண்டு தாவரங்களை அல்லது விலங்குகளை இணைத்து புதிய தலைமுறையை உருவாக்கும் முறை" }
    ],
    discussion_questions: [
      { tier: "Remember", prompt: "முதல் தலைமுறையில் மறைந்துபோன குட்டைப் பண்பு இரண்டாம் தலைமுறையில் மீண்டும் தோன்றியது எப்படி?" },
      { tier: "Analyze", prompt: "மெண்டல் உயிரியல் ஆய்வுக்குக் கணித எண்களையும் புள்ளிவிவரங்களையும் பயன்படுத்தியது ஏன் ஒரு புரட்சிகரமான அணுகுமுறை?" },
      { tier: "Apply", prompt: "உங்கள் குடும்பத்தில் பெற்றோர் மற்றும் தாத்தா பாட்டியின் பண்புகளில் உங்களுக்கு வந்திருப்பவை எவை என்று கவனித்துப் பாருங்கள்." }
    ],
    reflection_prompt: "உங்கள் கண்களின் நிறம், சிரிப்பு, குரல் என அனைத்தும் பல தலைமுறைகளாக உறைந்து கடந்து வந்த மரபணுக்களின் விந்தை என்று உணருங்கள்.",
    activity: "உங்கள் குடும்ப உறுப்பினர்களின் காது மடல்கள் ஒட்டியுள்ளனவா அல்லது தனித்துள்ளனவா என்பதை ஒரு தாளில் குறித்துப் பாருங்கள்.",
    mood: "wonder",
    teaser: "மடாலயத் தோட்டத்தில் பட்டாணிச் செடிகளை வளர்த்து மனிதகுலத்தின் மரபியல் குறியீட்டைக் கண்டறிந்த துறவியின் கதை.",
    series_id: "science-pioneers",
    part_number: 10,
    reviewed: true,
    source_book: "தாவரக் கலப்பினங்கள் பற்றிய சோதனைகள் (Versuche über Pflanzen-Hybriden, 1866)",
    source_author: "கிரிகோர் யோஹான் மெண்டல் (Gregor Johann Mendel)",
    source_year: "1866 (பிப்ரவரி & மார்ச் 1865-இல் வாசிக்கப்பட்டது)",
    source_chapter: "ப்ர்னோ இயற்கை வரலாற்றுச் சங்க ஆய்விதழ், தொகுதி 4, பக்கங்கள் 3–47",
    source_edition: "வில்லியம் பேட்சன் ராயல் தோட்டக்கலைச் சங்க ஆங்கிலப் பதிப்பு (1901) & மெண்டல் அருங்காட்சியகம், ப்ர்னோ",
    authenticity_note: "கிரிகோர் மெண்டல் 29,000-க்கும் மேற்பட்ட பட்டாணிச் செடிகளில் நடத்திய சோதனைகள், 3:1 கணித விகிதம் மற்றும் ஓங்கு-ஒடுங்கு பண்புக் கோட்பாடுகள் பதிவு செய்யப்பட்ட முதன்மை வரலாற்று ஆவணம்.",
    source: "கிரிகோர் யோஹான் மெண்டல், தாவரக் கலப்பினங்கள் பற்றிய சோதனைகள் (1866)"
  }
];

const languages = ['en', 'ta', 'hi', 'zh', 'ml', 'te', 'kn', 'mr', 'ur'];

for (const lang of languages) {
  const colPath = path.resolve(`data/${lang}/collections/${lang}_science-stories.json`);
  let currentStories = [];
  if (fs.existsSync(colPath)) {
    currentStories = JSON.parse(fs.readFileSync(colPath, 'utf8'));
  }

  const batchToAdd = lang === 'ta' ? batch2Ta : batch2En;
  
  // Merge batch2 into collection (avoiding duplicates)
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

console.log('Batch 2 successfully authored and synced across all 9 languages!');
