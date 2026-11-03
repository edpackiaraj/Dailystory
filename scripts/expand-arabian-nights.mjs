import fs from 'node:fs';

// Expander for Arabian Nights stories (20 targets)
export function expandArabianNights(story) {
  const { id, title, moral, full_text } = story;

  if (id === 'arabian-nights-273-of-the-speedy-relief-of-allah') {
    return `In the golden audience hall of King Azadbakht, where the ten viziers stood in solemn array, the noble prisoner Bakhtiyar stood before the royal throne. For ten successive days, he had faced the shadow of the executioner's sword, meeting every accusation not with anger or despair, but with calm tales of wisdom and unwavering faith in the justice of heaven. As the final hour arrived and the assembly leaned forward in breathless silence, Bakhtiyar raised his eyes to the King.

"Sire," spoke Bakhtiyar in a voice clear and untrembling, "the darkest hour of the night is ever that fleeting watch that immediately precedes the dawn. When a traveler feels that every earthly pass is blocked, when iron walls close upon his spirit and despair knocks with heavy fists at the portal of the heart, that is the very instant when the swift relief of Providence arrives with miraculous power! Deliverance does not require the marching of ten thousand horsemen; it enters through the quiet whisper of a witness, the sudden falling of a mask, or the turning of a lock in the dead of night."

"He who perseveres in honor," continued the sage, "keeping his conscience pure and his tongue anchored in truth, will witness the scaffold of persecution transform into the throne of vindication. Truth is an unquenchable flame; men may throw dust upon it, yet it rises to illuminate the world." King Azadbakht was moved to tears by the young man's serene fortitude, ordered his heavy chains struck off, and restored him to the highest seat of honor in the realm.`;
  }

  if (id === 'arabian-nights-315-al-malik-al-zahir-rukn-al-din-bibars-and-the-sixteen-captains-of-police') {
    return `In the majestic Citadel of Cairo overlooking the minarets and winding alleys of the ancient metropolis, Sultan Al-Malik al-Zahir Rukn al-Din Baybars sat upon his ivory throne. Flanked by his grand vizier, learned qadis, and royal emirs, the great ruler looked down upon the Sixteen Captains of Police who governed the sixteen distinct quarters of the city. Desiring to test whether his officers ruled through wisdom and keen observation or through brute force and terror, the Sultan raised his golden scepter and addressed the assembly.

"Let each of the sixteen captains step forward before this throne," commanded Sultan Baybars, his deep voice echoing across the marble court. "Recount to me the single most extraordinary, baffling case of detection you have ever unraveled in your quarter. I wish to discover which of you truly understands how to protect the innocent, solve intricate crimes, and unmask the craftiest deceivers without relying upon the rod of the torturer!"

The vast hall fell into reverent stillness. The scribes prepared their parchment scrolls, and the Sixteen Captains stepped forward one by one to present their remarkable chronicles—tales of hidden tracks, forged seals, secret markings, and subtle human nature that demonstrated how observant justice maintains the peace of a great empire.`;
  }

  if (id === 'arabian-nights-316-first-constables-history') {
    return `The First Constable of Cairo stepped forward before Sultan Baybars, bowed until his forehead touched the carpet, and began his chronicle: "Sire, an honest merchant of the Khan el-Khalili bazaar returned from his five-year pilgrimage to Mecca and brought a bitter grievance against his former partner. Before departing on the caravan, the merchant had deposited a large clay jar sealed with red wax, claiming it contained a thousand gold dinars concealed beneath a layer of salted olives. Upon his return, he broke the seal and found only rotting olives—every single dinar had vanished!"

"The partner swore by all the stars that the jar had remained untouched in his cellar for five years, pointing triumphantly to the wax seal bearing the merchant's private signet ring. The magistrates were baffled, for the seal appeared unbroken. Yet I did not accept outward appearances. I uncorked the jar, poured out the olives onto an ebony tray, and summoned three master olive-growers from the orchards of the Fayyum."

"The growers inspected the fruit with experienced eyes, cut one open, and testified under oath: 'These olives are plump, fragrant, and harvested no more than three weeks ago; whereas a jar sealed five years ago would contain only shriveled, blackened stones!' Confronted by nature's irrefutable testimony, the dishonest partner fell to his knees in terror, confessed that the original olives had rotted so he broke the jar, stole the gold, replenished it with fresh fruit, and forged the wax seal. I recovered the thousand dinars for the pilgrim, proving that nature's truth cannot be forged by the craftiest thief."`;
  }

  if (id === 'arabian-nights-317-second-constables-history') {
    return `The Second Constable of Cairo saluted Sultan Baybars and spoke: "Sire, a wave of midnight burglaries had thrown the silversmiths' quarter into panic. Night after night, master workshops were entered from high roofs and plundered of precious vessels, yet the locks remained intact and the high garden walls—thirty feet of sheer stone—bore neither rope marks nor grappling iron scratches. The guards were accused of sleeping, and fear reigned across the quarter."

"I knew that posting noisy patrols with iron spears would only frighten the intruder away without capturing him. Instead, after dusk had fallen and the streets were deserted, I instructed my men to climb quietly across the roofs and dust every stone ledge, wall copings, and parapet with a fine powder of white flour and pulverized chalk, leaving an invisible mantle upon every surface."

"At the first ray of dawn, we ascended the roof of a silversmith whose shop had been raided during the midnight hours. There, gleaming like stars against the gray stone, was a distinct trail of white chalky footprints! We followed the unbroken tracks leaping across terraces and balance beams with unnatural agility, directly to the attic window of an acrobat from the traveling circus who lodged beside the Bab Zuweila gate! Beneath his floorboards we discovered every stolen silver flagon and chalice, demonstrating that quiet preparation catches what a regiment of cavalry cannot run down."`;
  }

  if (id === 'arabian-nights-318-third-constables-history') {
    return `The Third Constable stepped before the Sultan and related: "Sire, from the royal cavalry stables at the Citadel, a prize Arabian mare of incomparable lineage—pure white with eyes like obsidian—was stolen in the dead of night. The groom was found bound and gagged, and the thief had wrapped the horse's hooves in thick rags, leaving no hoofbeats audible to the midnight sentries."

"I inspected the damp earth beside the postern gate with a lantern. There, where the horse had slipped on the river clay, I discovered a single clear horseshoe print where the rag had torn away. I studied the impression with magnifying glass: the left hind shoe was missing its fourth nail, and the iron rim was notched with three diagonal grooves where a blacksmith’s file had slipped."

"I dispatched inspectors through all five hundred caravanserais and horse markets between Cairo and Fustat, examining every mount tethered at the mangers. Before noon, in a stable near the desert gate, I uncovered a mare whose left hind hoof bore that exact notched shoe and missing nail! The thief, disguised as a desert bedouin preparing to ride into the wilderness, was arrested on the spot, proving that keen observation of the smallest detail unmasks the most cunning fugitive."`;
  }

  if (id === 'arabian-nights-319-fourth-constables-history') {
    return `The Fourth Constable bowed low and began: "Sire, an orphan youth of noble lineage came to me weeping, stripped of his clothes and begging for crusts of bread. His wealthy uncle and legal guardian claimed that the youth’s entire patrimony—thirty thousand gold dinars—had been lost when a merchant vessel named the Crescent of Alexandria foundered in a storm off the Libyan coast."

"The uncle produced a sworn letter from a coastal notary confirming the shipwreck, and the judges were about to dismiss the orphan's claim as an unfortunate misfortune of the sea. But looking into the uncle’s shifting eyes, I felt the chill of deceit. I mounted a fast dromedary and rode directly to the imperial custom-house archives in Alexandria."

"For three days and nights, I examined the harbor ledgers and bills of lading for that entire year. There, inscribed in black ink, was the truth: the Crescent of Alexandria had never sunk at all! It had arrived safely in port, and the uncle had secretly sold its entire cargo of silks and spices under a false Frankish name, pocketing twenty thousand dinars in addition to the boy's inheritance! I seized the uncle’s palaces, restored thirty thousand gold dinars with accrued profits to the orphan, and sentenced the treacherous guardian to the stocks, proving that verified records protect the innocent against the most elaborate lies."`;
  }

  if (id === 'arabian-nights-320-fifth-constables-history') {
    return `The Fifth Constable approached the throne and related: "Sire, a nimble burglar had repeatedly broken through the high, barred windows of the great silk warehouses in the heart of the city. The windows were situated forty feet above the street, accessible only by a slender lead drainpipe that seemed impossible for any human being to climb without falling."

"Rather than setting guards whose lanterns would warn the burglar, I procured a pot of boiled mountain honey mixed with sticky gum arabic from the spice bazaar. In the dark hours of dusk, my men climbed ladders and coated the upper lead pipes, stone sills, and window gratings with a thick, invisible layer of the sweet, adhesive substance."

"At midnight, the thief made his ascent. His hands and tunic were immediately coated in the sticky resin. As he slipped down the pipe to make his escape, a swarm of night hornets and biting gnats, attracted by the sweet honey, swarmed over his face and hands! Howling in agony and swatting wildly at the air with sticky fingers, the burglar ran straight down the alley into the arms of our waiting patrol! We secured him and recovered the stolen silks, demonstrating that a drop of honey can accomplish what a score of guards cannot achieve."`;
  }

  if (id === 'arabian-nights-321-sixth-constables-history') {
    return `The Sixth Constable addressed the Sultan: "Sire, a high-born lady of the court brought her young maidservant before me in chains, demanding she be whipped and imprisoned for the theft of an emerald necklace of immense value. The maiden knelt in the dust, weeping tears of agony and swearing by her honor and her ancestors that she had never touched her mistress's jewels, though none in the household would believe her."

"I accompanied the lady to her private bedchamber to investigate the scene. The room was tidy, but I noted that the arched window stood wide open, looking out into a high garden courtyard dominated by an ancient cedar tree. Upon a high fork in the branches, I spotted a nest belonging to a pair of wild magpies—birds famous across the world for their instinct to steal glittering objects."

"I sent an agile stable boy up the cedar branches to inspect the nest. There, woven between dry twigs and horsehair, lay the missing emerald necklace, alongside three silver sewing pins and a gilded button! The noble lady wept in bitter remorse, struck off the girl's fetters with her own hands, and bestowed upon her a dowry of two hundred dinars, learning that haste in condemnation brings lifelong shame."`;
  }

  if (id === 'arabian-nights-322-seventh-constables-history') {
    return `The Seventh Constable bowed before Sultan Baybars: "Sire, a wealthy merchant died, leaving an estate of immense wealth. His elder nephew produced a handwritten parchment will, signed with the uncle's seal, that disinherited the merchant's devoted daughter and bequeathed all warehouses, ships, and gold exclusively to the nephew."

"The parchment appeared ancient, yellowed, and properly witnessed by two neighborhood elders. Yet the daughter wept, insisting that her father had reaffirmed his love and protection for her only days before his sudden passing. I held the parchment against the bright sunlight streaming through the arched palace window and studied the translucent fibers of the paper."

"There, pressed into the very fabric of the pulp, was the faint watermarked crest of a papermaker from Genoa, carrying the Roman numerals of the current year! The uncle had supposedly written the will seven years earlier, yet the paper on which it was inscribed had been manufactured only six months prior in Italy! Faced with this physical impossibility, the nephew broke down in terror and confessed to forging the deed. We restored the entire estate to the rightful daughter, proving that the silent grain of truth outlasts every cunning scheme."`;
  }

  if (id === 'arabian-nights-323-eighth-constables-history') {
    return `The Eighth Constable of Cairo stepped forward: "Sire, a caravan merchant accused a wandering dervish of stealing his valuable laden camel. When the merchant had cried out that his beast was missing, the dervish had casually described the animal down to its smallest detail—stating it was blind in the right eye, lame in the left front foot, missing a front tooth, and loaded with honey on one side and wheat on the other. The furious merchant claimed that only the thief could possess such intimate knowledge!"

"I questioned the dervish, who smiled with tranquil serenity and said: 'I have never set eyes upon this man's camel in my life!' When asked how he could describe the beast so accurately, the dervish explained his observations along the desert trail with effortless clarity."

"'I noticed,' said the sage, 'that the grass was cropped only on the left side of the road, while the right side remained untouched; thus the beast was blind in its right eye. In the sand, three hoofprints were deep while the fourth dragged lightly; thus it was lame. Where it grazed, a tuft of grass remained uncut in the center of each bite; thus it lacked a tooth. Swarms of flies feasted on one side of the trail where syrup had dripped, while ants gathered on the other side around fallen grains of wheat.' Following his pointed finger toward a rocky ravine, we found the camel grazing peacefully, proving that keen observation is the mother of true wisdom."`;
  }

  if (id === 'arabian-nights-325-ninth-constables-history') {
    return `The Ninth Constable saluted Sultan Baybars: "Sire, a dyer of royal silks reported that twenty bolts of rare, imported damask had been plundered from his vats during the night. The thief had left neither footprints nor tools behind, but in their hasty departure, a vat of precious saffron dye had been overturned upon the flagstones."

"Knowing that saffron produces an indelible golden-yellow stain that penetrates animal hide and skin, refusing to wash out for weeks, I did not bother checking the homes of known thieves. Instead, I issued a proclamation inviting every water-carrier, porter, and laborer in the district to a feast of spiced lamb in the public square, requiring each guest to wash their hands in bowls of clear water before entering."

"As the fifth man stepped forward, I noticed the rim of his fingernails and the creases of his palms glowed with unmistakable saffron yellow! When we inspected his modest quarters, we uncovered the twenty bolts of damask hidden beneath bales of straw. The stolen property was returned to the master dyer, proving that the indelible mark of guilt cannot be washed away by deceit."`;
  }

  if (id === 'arabian-nights-326-tenth-constables-history') {
    return `The Tenth Constable related his chronicle: "Sire, a wealthy goldsmith stored his most precious gems inside an iron-bound chest fitted with two intricate locks, each requiring a unique key. One morning, he opened the chest to find every ruby and sapphire stolen, yet the iron padlocks showed no sign of filing, pick marks, or violence."

"The goldsmith suspected his head apprentice, who possessed the keys only during working hours. I examined the brass keyholes and noticed microscopic traces of fine beeswax adhering to the interior tumblers. I immediately summoned every locksmith in the city and inspected their workbenches."

"In the workshop of a locksmith two streets away, we discovered two brass keys fashioned from recent wax impressions, along with the goldsmith’s cousin who had paid ten dinars for the counterfeit work! The cousin had borrowed the keys for an hour under pretext of counting inventory, pressed them into soft wax, and carried out the robbery at midnight. We recovered the gems intact, proving that patience and microscopic scrutiny unravel the most baffling locks."`;
  }

  if (id === 'arabian-nights-328-twelfth-constables-history') {
    return `The Twelfth Constable stepped before the Sultan: "Sire, the poor citizens of the eastern quarter complained that the bread loaves sold by the master baker were growing lighter each week, though the baker proudly displayed the royal iron weights upon his balance scale whenever the inspectors arrived."

"The inspectors had weighed his brass standards repeatedly and found them stamped with the official government seal. Yet feeling the loaves in my own hand, I knew injustice was being done to the hungry children of the city. I seized the baker’s two-pound iron weight and carried it to the forge of a master armorer."

"I ordered the weight heated over red-hot coals. Within minutes, a tiny plug of lead melted away, and a hollow chamber drilled into the core of the iron revealed a pool of liquid mercury that expanded and shifted when warm, artificially altering the balance during the rapid movement of weighing! The dishonest baker was banished, his flour distributed to the poor, and fair measures restored to the markets, showing that justice must weigh the scales themselves."`;
  }

  if (id === 'arabian-nights-329-thirteenth-constables-history') {
    return `The Thirteenth Constable addressed the throne: "Sire, an anonymous informant warned that a vast fortune in uncut emeralds was being smuggled out of Upper Egypt into Cairo, yet the river patrols inspected every barge of wheat, pottery, and wool without discovering a single stone."

"I took command of the river customs at the southern locks. Watching the timber rafts floating down the Nile from the forests of Nubia, I noticed that while most cedar trunks rode high upon the water, three particular logs rode unnaturally low, submerged almost to their bark."

"I ordered the timber pulled ashore and sawn in half. Inside the center of each trunk, a deep hollow cavity had been bored out and sealed with wooden plugs and pitch, containing hundreds of uncut emeralds wrapped in oiled silk! The smugglers, who traveled aboard as humble raftsmen, were seized and their contraband confiscated for the imperial treasury, proving that vigilance on the waters catches what land guards miss."`;
  }

  if (id === 'arabian-nights-330-fourteenth-constables-history') {
    return `The Fourteenth Constable related: "Sire, the private treasury of the royal palace was entered by an unknown intruder who scrambled over the parapet. In his flight, he smashed an ornamental Persian mosaic tile that lined the royal terrace, scattering sharp blue fragments across the marble."

"The guards found nothing, but I gathered the blue fragments and noted that a single sharp triangular sliver was missing from the corner of the broken tile. I ordered every soldier and servant on duty that night to present their boots and leather sandals for immediate inspection."

"Embedded deep in the thick leather sole of a royal guard’s boot, we discovered the missing triangular sliver of blue-glazed tile, fitting the broken terrace mosaic like a puzzle piece! The treacherous sentry, confronted with the stone that had cleaved to his heel, confessed his complicity in the theft. The stolen gold was recovered from his garden wall, proving that a single broken shard is sufficient to shatter the fortress of falsehood."`;
  }

  if (id === 'arabian-nights-333-fifteenth-constables-history') {
    return `The Fifteenth Constable of Cairo spoke: "Sire, a nobleman’s residence was burglarized of an embroidered velvet coat of royal craftsmanship, trimmed with golden wire and seed pearls. Weeks passed, and the garment appeared lost forever, until an anonymous merchant was seen wearing a velvet coat of identical cut in the spice bazaar."

"The merchant protested indignantly, claiming he had purchased the coat lawfully from an honest merchant in Damascus and possessed witnesses to his character. I did not engage in endless arguments. I brought the coat directly to the master embroiderer of the Citadel, who had crafted garments for three generations of sultans."

"The master examined the golden seams with a needle and pointed out: 'This thread is twisted with the secret Citadel knot—a stitch known only to my private apprentices, using dyed silk found nowhere in Damascus!' Confronted with this undeniable craft signature, the merchant confessed he had bought the coat from a fence in the back alleys. The burglary ring was dismantled and the nobleman’s treasure returned, proving that true craftsmanship leaves an unforgeable imprint."`;
  }

  if (id === 'arabian-nights-334-sixteenth-constables-history') {
    return `The Sixteenth Constable stepped forward before Sultan Baybars: "Sire, for five long years, a professional charlatan sat outside the great mosque of Cairo, posing as a pitiful deaf and mute mendicant. He solicited thousands of dinars in charity from tender-hearted worshippers, while laughing in secret at the gullibility of the pious."

"The citizens revered him as a holy sufferer, but having observed the keen alertness with which his eyes followed every purse that jingled, I resolved to test his affliction without using cruelty or force. I engaged a master apothecary to compound an exceptionally volatile concoction of concentrated ammonia and freshly ground pungent black pepper."

"While the 'deaf-mute' sat cross-legged upon his mat with eyes half-closed in feigned trance, I slipped quietly behind his back and uncorked the vial directly beneath his nose! The charlatan inhaled, his eyes widened in horror, and he sneezed with a roar that echoed across the entire square! Leaping three feet into the air, he shouted in crystal-clear Arabic: 'Merciful heavens, what demonic stench is that!' The crowd roared with laughter; the fraud was unmasked, his ill-gotten hoard distributed to the city orphanage, and Sultan Baybars commended the sixteen captains for demonstrating that keen wits, not violence, preserve the peace."`;
  }

  if (id === 'arabian-nights-340-tale-of-the-two-kings-and-the-wazirs-daughters') {
    return `On the fertile borders between two great Persian empires, two neighboring kingdoms had waged senseless border warfare for over forty years, burning orchards, devastating towns, and impoverishing their subjects in endless hostility. When exhausted armies finally forced a truce, the two kings met at the frontier and agreed to wed the two brilliant daughters of the Grand Vizier of the central borderlands—maidens celebrated throughout the Orient for their mastery of law, literature, and astronomy.

Rather than wasting their days in idle luxury behind harem curtains, the two royal sisters resolved to use their influence to forge an indestructible bond of peace. They established an international academy of scholars, translators, and engineers, inviting the finest minds from both realms to collaborate on shared public works. Under their guidance, joint teams excavated great aqueducts that irrigated the arid border plains, turned military watchtowers into astronomical observatories, and established common courts of commerce where merchants from both lands traded freely without fear of extortion.

Their intellectual partnership transformed two weary, battle-scarred nations into a flourishing commonwealth of knowledge and prosperity that endured for generations. The people celebrated the two queens whose wisdom proved that true victory lies not in the slaughter of armies, but in the enduring bridges built by learning, justice, and mutual respect.`;
  }

  if (id === 'arabian-nights-342-the-court-singer-of-al-maamun') {
    return `In the splendid court of Caliph Al-Ma'mun in Baghdad, where the House of Wisdom attracted scholars, mathematicians, and poets from every corner of the known world, an evening of scientific inquiry was held in the imperial palace. Before the Caliph sat the young scholar and musician Al-Farabi, cradling an exquisite multi-stringed instrument of his own invention, designed according to precise mathematical proportions.

The Caliph, intrigued by the young man's reputation, asked: 'How can mere sounds upon sheepgut strings exert such profound sway over the human spirit?' In response, Al-Farabi tuned his instrument according to geometric ratios. He began to play a delicate mode in minor intervals; within moments, the grand chamber was hushed, and tears of tender contemplation glistened in the eyes of battle-hardened viziers. Shifting his fingers to sound harmonic fourths and fifths, he produced a vibrant, martial melody that caused the emirs to straighten their backs and reach instinctively for their sword-hilts with surging courage. Finally, he softened the chords into a tranquil, celestial harmony that induced such deep, restorative peace that the entire court nodded in gentle sleep.

Awakening the assembly with a gentle chord, Al-Farabi explained that musical intervals correspond precisely to the mathematical laws that govern the stars, the circulation of bodily humors in medicine, and the geometric harmony of nature. Caliph Al-Ma'mun marveled at this sublime synthesis of art and science, appointing Al-Farabi director of the imperial academy, demonstrating that true art is the living voice of universal order.`;
  }

  if (id === 'arabian-nights-344-the-singer-and-the-druggist') {
    return `In the crowded lanes of medieval Cairo lived an impoverished young lutenist named Salim and an elderly apothecary named Master Yusuf. For five difficult years, when Salim had neither patrons nor students and wandered the streets in threadbare robes, Yusuf welcomed the youth into his fragrant herbal shop. Every evening, the kind old man shared his modest supper of bread and olives, brewed warming medicinal teas when the musician fell sick with winter coughs, and encouraged him to practice his scales in the quiet back courtyard among jars of dried chamomile and rose petals.

'Never lose heart, my son,' Yusuf would say with a gentle smile. 'True art is like a bulb buried beneath the winter soil; water it with patience, and when the appointed spring arrives, it will bloom in glory before kings.' Salim wept with gratitude, swearing that if fortune ever favored him, he would never forget the hand that had sustained him in obscurity.

That appointed spring finally arrived when the royal Governor of Alexandria passed through Cairo, heard Salim's transcendent melodies, and appointed him master of the palace orchestra. Showered with robes of brocade and chests of gold dinars, Salim's first act was to ride back to Cairo in a carriage laden with gifts. He bought the entire building where the apothecary shop stood, presented the deed to Master Yusuf, and poured five hundred gold dinars into his trembling hands: 'Master, you fed the flame when the world saw only ashes; half of everything I create belongs forever to your generous heart.' The two remained inseparable companions to the end of their days, proving that gratitude is the sweetest harmony of life.`;
  }

  return full_text;
}
