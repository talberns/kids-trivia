import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const hellenistic2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "hel-026",
    era: "hellenistic",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Josephus says Ptolemy I, Alexander's general, took Jerusalem without a fight by entering on which day?",
    choices: ["The first day of the week", "The Sabbath", "A new moon", "The first day of Passover"],
    answer: 1,
    explanation: {
      world:
        "Josephus says Ptolemy son of Lagus came into Jerusalem on a Sabbath day, pretending he had come to offer sacrifice, and took it while the people rested (Antiquities 12.1.1). He then took many captives from Judea and Samaria to Egypt, settling some in garrisons and some in Alexandria. Josephus cites the Greek writer Agatharchides of Cnidus as his witness; in Against Apion Agatharchides says the Jews spent the seventh day praying in their holy places until evening rather than taking up arms, and he mocked them for it. The year is uncertain; historians suggest dates between about 320 and 302 BCE.",
      theirEyes:
        "On a quiet seventh day, with tools and weapons laid aside, Jerusalem's people found Ptolemy's soldiers already inside their gates.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.1.1 (12.3–7), Whiston" },
      { kind: "primary", citation: "Josephus, Against Apion 1.22 (1.205–211), quoting Agatharchides of Cnidus" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-027",
    era: "hellenistic",
    level: 6,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Alexander's generals who fought over his empire after 323 BCE are called the Diadochi. What does the Greek word mean?",
    choices: ["Conquerors", "Brothers", "Successors", "Guardians"],
    answer: 2,
    explanation: {
      textSays:
        "1 Maccabees 1:6–9 says Alexander divided his kingdom among his servants while he was still alive; after his death they all put crowns on themselves, as did their sons after them.",
      world:
        "Alexander died in Babylon in 323 BCE without an adult heir. His generals, the diadochoi (“successors”), fought a series of wars for some forty years. Out of them came the kingdoms that mattered most to Judea: the Ptolemies in Egypt and the Seleucids in Syria and Mesopotamia.",
      theirEyes:
        "For two decades the armies of rival Macedonian generals tramped up and down the coast road, and nobody in Judea could be sure whose taxes they would pay next year.",
      debate:
        "Greek historians say Alexander left no clear division; most historians treat 1 Maccabees' picture of a deathbed share-out as a simplification.",
    },
    confidence: "settled",
    references: ["1 Maccabees 1:6–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Diodorus Siculus, Library of History 18.1–3 (the settlement after Alexander's death)" },
      { kind: "reference", citation: "“Diadochi,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-028",
    era: "hellenistic",
    level: 6,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Rabbah of the Ammonites, today's Amman, was renamed after Ptolemy II. What was its new Greek name?",
    choices: ["Scythopolis", "Ptolemais", "Gerasa", "Philadelphia"],
    answer: 3,
    explanation: {
      textSays:
        "The Bible knows the city as Rabbah, the Ammonite capital besieged by David's general Joab (2 Samuel 12:26–29).",
      world:
        "Ptolemy II, nicknamed Philadelphus (“sibling-loving”, for his marriage to his sister Arsinoe), renamed Rabbah Philadelphia in the 3rd century BCE. Greek names spread across the region: Akko became Ptolemais and Beth Shean became Scythopolis. These cities had Greek councils, temples and gods, and Jews in the hill country lived surrounded by them.",
      theirEyes:
        "A trader from Jerusalem heading east found the old Ammonite capital wearing a new Greek name, chosen in honour of a king in far-off Alexandria.",
    },
    confidence: "settled",
    references: ["2 Samuel 12:26–29"],
    sources: [
      scripture,
      { kind: "primary", citation: "Stephanus of Byzantium, Ethnica, s.v. “Philadelpheia”" },
      { kind: "reference", citation: "“Amman,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "Getzel M. Cohen, The Hellenistic Settlements in Syria, the Red Sea Basin, and North Africa (University of California Press, 2006)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-029",
    era: "hellenistic",
    level: 6,
    category: "tradition",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Many scholars date Ecclesiastes to the 3rd century BCE. Which dynasty ruled Judea then?",
    choices: ["The Persian Achaemenids", "The Ptolemies", "The Hasmoneans", "The Herodians"],
    answer: 1,
    explanation: {
      textSays:
        "The book opens: “The words of the Preacher, the son of David, king in Jerusalem” (Ecclesiastes 1:1). The book never names Solomon.",
      world:
        "Persian rule ended with Alexander in 332 BCE, and the Ptolemies of Egypt ruled Judea for most of the 3rd century, until about 200 BCE. Scholars who place Ecclesiastes in this period point to its late Hebrew, its picture of a world run by distant officials and money, and possible echoes of Greek thought. Hasmonean rule began only in the 140s BCE.",
      theirEyes:
        "Under foreign kings who taxed everything, a Jerusalem teacher asking what anyone gains “under the sun” would have found a ready audience.",
      debate:
        "The book's date is disputed. Some scholars prefer the Persian period (5th–4th century BCE), pointing to Persian loanwords; tradition links it with Solomon. The Ptolemaic date is common but not a consensus.",
    },
    confidence: "mainstream",
    references: ["Ecclesiastes 1:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Martin Hengel, Judaism and Hellenism (1974), vol. 1 (on Qoheleth in the Ptolemaic period)" },
      { kind: "scholarship", citation: "C. L. Seow, Ecclesiastes, Anchor Yale Bible 18C (1997), introduction (argues for a Persian date)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-030",
    era: "hellenistic",
    level: 6,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ben Sira's “Praise of the Fathers” ends with a high priest “like the morning star among clouds.” Who is he?",
    choices: ["Aaron", "Ezra the scribe", "Simon son of Onias", "Jason"],
    answer: 2,
    explanation: {
      textSays:
        "Sirach 50:1 names “Simon, the son of Onias, the high priest,” who repaired the Temple and fortified the city. “In his days, a water cistern was dug” (50:3), and leading worship “He was like the morning star among clouds, like the full moon” (50:6).",
      world:
        "Ben Sira wrote in Jerusalem around 190–180 BCE. Most scholars identify this Simon as Simon II, high priest around 200 BCE, whose building work fits the repairs Antiochus III promised the Temple (Josephus, Antiquities 12.3.3).",
      theirEyes:
        "Worshippers who saw Simon step out from behind the sanctuary veil in his robes remembered it as a moment of dazzling glory.",
      tradition: {
        jewish:
          "Josephus says an earlier Simon, son of Onias I, was called “Simon the Just” for his piety (Antiquities 12.2.5).",
      },
      debate: "Whether the famous “Simon the Just” was Simon I or Simon II is still debated.",
    },
    confidence: "settled",
    references: ["Sirach 44:1", "Sirach 50:1–21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.2.5; 12.3.3" },
      { kind: "scholarship", citation: "Patrick W. Skehan and Alexander A. Di Lella, The Wisdom of Ben Sira (Anchor Bible 39, 1987), on Sirach 50" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "hel-031",
    era: "hellenistic",
    level: 7,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After the battle of Ipsus (301 BCE), Ptolemy I held Judea, though the victors had assigned the region to whom?",
    choices: ["Seleucus I", "Antigonus the One-Eyed", "Cassander", "Lysimachus"],
    answer: 0,
    explanation: {
      world:
        "At Ipsus, Seleucus, Lysimachus and Cassander defeated and killed Antigonus. Coele-Syria, the strip that included Judea, was awarded to Seleucus, but Ptolemy, who had not fought in the battle, occupied it. Seleucus let it go for the sake of their old friendship, but his heirs never accepted the loss. The unsettled claim fed a series of six “Syrian Wars” between the 270s and 168 BCE. Some eighty years after Ipsus, Antiochus III's envoys still argued that Coele-Syria belonged to the Seleucids because of the settlement after the battle (Polybius 5.67).",
      theirEyes:
        "Judea had become the doorstep between two great kingdoms, and every quarrel between them meant soldiers on its roads.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Diodorus Siculus, Library of History 21.1.5" },
      { kind: "primary", citation: "Polybius, Histories 5.67" },
      { kind: "reference", citation: "“Syrian Wars,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-032",
    era: "hellenistic",
    level: 7,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After taking Judea around 200 BCE, Antiochus III issued a charter for Jerusalem. What did it allow the Jews?",
    choices: [
      "To crown their own king",
      "To live according to the laws of their own country",
      "To mint their own gold coins",
      "To become citizens of Antioch",
    ],
    answer: 1,
    explanation: {
      world:
        "Josephus quotes the king's letter: the Jews had met him with their senate and helped expel the Egyptian garrison from Jerusalem's citadel. In return he gave 20,000 pieces of silver plus wheat, flour and salt for the sacrifices, freed the senate, priests, Temple scribes and singers from several taxes, gave the city three years' tax relief, and ordered that the whole nation live according to the laws of their own country (Antiquities 12.3.3).",
      theirEyes:
        "After years of war, Jerusalem's elders heard welcome news: the new king would pay for sacrifices, help repair the Temple and leave the Torah as the city's law.",
      debate:
        "Most historians accept the letter as substantially authentic, because its wording fits known Seleucid documents, though some suspect later Jewish editing.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.3.3 (12.138–144), Whiston" },
      { kind: "scholarship", citation: "Elias Bickerman, “La charte séleucide de Jérusalem,” Revue des études juives 100 (1935)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-033",
    era: "hellenistic",
    level: 7,
    category: "daily-life",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Antiochus III banned bringing the meat or skins of horses, mules and donkeys into Jerusalem.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "Josephus quotes a royal decree issued with the charter. It barred foreigners from entering the Temple enclosure and banned bringing into the city the flesh of horses, mules, asses, leopards, foxes, hares and other animals forbidden to Jews, or even their skins. Offenders were to pay 3,000 drachmas of silver to the priests (Antiquities 12.3.4).",
      textSays:
        "The animals listed are ones the Torah calls unclean: Leviticus 11:1–8 permits only animals that both chew the cud and have split hooves.",
      theirEyes:
        "A foreign merchant leading donkeys loaded with hides to Jerusalem's gates now risked a fine big enough to ruin him.",
      debate: "As with the charter, most scholars accept the decree as genuine, though a few doubt its wording.",
    },
    confidence: "mainstream",
    references: ["Leviticus 11:1–8"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.3.4 (12.145–146), Whiston" },
      { kind: "scholarship", citation: "Elias Bickerman, “Une proclamation séleucide relative au temple de Jérusalem,” Syria 25 (1946–48)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-034",
    era: "hellenistic",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Josephus says Joseph son of Tobias won the right to collect the Ptolemaic king's taxes in Syria and Phoenicia how?",
    choices: [
      "By winning a chariot race",
      "By marrying the king's daughter",
      "By bidding double what the other bidders offered",
      "By inheriting the post from the high priest",
    ],
    answer: 2,
    explanation: {
      world:
        "The high priest Onias, Joseph's uncle (Joseph's mother was his sister), had refused to pay the king a tribute of twenty talents. Joseph went to Alexandria, won the king's favour and, when the tax-farmers bid 8,000 talents, accused them of collusion and offered double. When Ashkelon refused to pay, he executed about twenty leading men and sent their property to the king, then did the same at Scythopolis. He collected the taxes for twenty-two years (Antiquities 12.4.1–6).",
      theirEyes:
        "In the Greek cities of the coast, a Jew from Jerusalem now arrived with royal soldiers to collect the king's money, and nobody dared refuse twice.",
      debate:
        "The “Tobiad romance” reads like a novel, and Josephus' dating to the time of Ptolemy V does not fit; most historians place Joseph in the mid-3rd century BCE.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.4.1–6 (12.154–185), Whiston" },
      { kind: "scholarship", citation: "Victor Tcherikover, Hellenistic Civilization and the Jews (1959), on the Tobiads" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-035",
    era: "hellenistic",
    level: 7,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "2 Maccabees 12 says Judah Maccabee collected 2,000 drachmas of silver from his men and sent it to Jerusalem for what?",
    choices: [
      "To ransom soldiers taken prisoner",
      "To offer a sacrifice for sin for soldiers who had fallen",
      "To pay tribute to the Seleucid king",
      "To repair the walls of the city",
    ],
    answer: 1,
    explanation: {
      textSays:
        "After a battle, Judah's men found “consecrated tokens of the idols of Jamnia” under the garments of their dead (2 Maccabees 12:40). They prayed that the sin might be blotted out, and Judah “sent to Jerusalem to offer a sacrifice for sin, doing very well and honorably in this, in that he took thought for the resurrection” (12:43). The writer adds: “For if he wasn’t expecting that those who had fallen would rise again, it would be superfluous and idle to pray for the dead” (12:44).",
      world:
        "2 Maccabees, an abridgment in Greek of a longer history by Jason of Cyrene (2 Maccabees 2:23), was probably written in the late 2nd century BCE. The episode is set during Judah's campaigns in Idumea, around 163 BCE. The comment on resurrection belongs to the author, who also stresses resurrection in the martyr stories of chapter 7.",
      theirEyes:
        "Burying friends who had carried forbidden charms into battle, Judah's soldiers wondered what would become of them, and chose to pray and give rather than simply condemn.",
      tradition: {
        christian:
          "The Catholic Church cites this passage in support of prayer for the dead (Catechism of the Catholic Church 1032). Most Protestant churches do not count 2 Maccabees as Scripture and do not draw that teaching from it.",
        jewish:
          "2 Maccabees is not part of the Jewish Bible, but it is itself a Jewish work of the Second Temple period, and it shows that some Jews of the time linked prayer and sacrifice for the dead with hope of resurrection.",
      },
    },
    confidence: "settled",
    references: ["2 Maccabees 12:38–45", "2 Maccabees 2:23"],
    sources: [
      scripture,
      { kind: "reference", citation: "Catechism of the Catholic Church, §1032" },
      { kind: "scholarship", citation: "Daniel R. Schwartz, 2 Maccabees (Commentaries on Early Jewish Literature, De Gruyter, 2008), on 12:38–45" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "hel-036",
    era: "hellenistic",
    level: 8,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Clearchus of Soli wrote that his teacher had met a Jew who was Greek not only in his speech but in his soul. Who was the teacher?",
    choices: ["Socrates", "Pythagoras", "Epicurus", "Aristotle"],
    answer: 3,
    explanation: {
      world:
        "Josephus quotes a dialogue by Clearchus, a pupil of Aristotle, in which Aristotle tells of a Jew he met in Asia Minor who was Greek not only in language but in soul, and who gave Aristotle's circle more than he received from them (Against Apion 1.176–182). In the same passage Aristotle says the Jews are descended from the philosophers of India. It is among the earliest Greek references to Jews.",
      theirEyes:
        "Greek thinkers, just beginning to meet Jews, were curious about a people who seemed to them like a nation of philosophers.",
      debate:
        "Many scholars think the meeting is a literary invention by Clearchus rather than a real event, but the passage still shows early Greek interest in Jews.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Against Apion 1.22 (1.176–182), quoting Clearchus of Soli, On Sleep" },
      { kind: "scholarship", citation: "Menahem Stern, Greek and Latin Authors on Jews and Judaism, vol. 1 (1974), no. 15" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-037",
    era: "hellenistic",
    level: 8,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Around 300 BCE, the Greek writer Hecataeus of Abdera said the Jews had no king. Who did he say led them?",
    choices: ["A council of generals", "The prophets", "A Persian satrap", "The high priest"],
    answer: 3,
    explanation: {
      world:
        "Hecataeus' account survives in Diodorus Siculus 40.3. He says the Jews never have a king; authority goes to the priest considered superior, who is believed to act as a messenger of God's commandments, and people fall to the ground before him. It is one of the earliest Greek descriptions of Judea.",
      theirEyes:
        "A Greek visitor in early Ptolemaic Jerusalem saw no palace and no throne: the most powerful man in the city wore priestly robes.",
      debate:
        "Most scholars accept Diodorus 40.3 as genuine Hecataeus, but a minority argue it was written later. Other passages Josephus attributes to Hecataeus are more widely doubted.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "primary", citation: "Diodorus Siculus, Library of History 40.3.5–6 (preserved by Photius, Bibliotheca codex 244)" },
      { kind: "scholarship", citation: "Menahem Stern, Greek and Latin Authors on Jews and Judaism, vol. 1 (1974), no. 11" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-038",
    era: "hellenistic",
    level: 8,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "To justify building a Jewish temple at Leontopolis in Egypt, Onias pointed to a prophecy by which prophet?",
    choices: ["Isaiah", "Jeremiah", "Ezekiel", "Malachi"],
    answer: 0,
    explanation: {
      textSays:
        "Isaiah 19:19: “In that day, there will be an altar to Yahweh in the middle of the land of Egypt, and a pillar to Yahweh at its border.”",
      world:
        "Onias, from Jerusalem's high-priestly family, fled to Egypt in the 2nd century BCE. With Ptolemy VI's permission he built a temple in the district of Heliopolis, citing Isaiah (Antiquities 13.3.1). In Jewish War Josephus says it had a tower sixty cubits high. The Romans closed it under Vespasian, around 73 CE (Jewish War 7.10.2–4).",
      theirEyes:
        "For Jewish soldiers settled in the Nile Delta, there was now an altar and priests of Aaron's line a few days' march away instead of a long journey to Jerusalem.",
      debate:
        "Josephus calls the founder Onias son of Simon in one book (Jewish War) and Onias son of Onias in another (Antiquities); most historians favour Onias IV.",
    },
    confidence: "settled",
    references: ["Isaiah 19:19"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.3.1–3 (13.62–73)" },
      { kind: "primary", citation: "Josephus, Jewish War 7.10.2–4 (7.420–436), Whiston" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-039",
    era: "hellenistic",
    level: 8,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ben Sira names “the foolish people” living in which town among the nations that vex his soul?",
    choices: ["Jericho", "Shechem", "Bethlehem", "Hebron"],
    answer: 1,
    explanation: {
      textSays:
        "Sirach 50:25–26 says two nations vex the writer's soul and a third is “no nation”: “Those who sit on the mountain of Samaria, the Philistines, and the foolish people who live in Shechem.”",
      world:
        "Shechem, at the foot of Mount Gerizim, was the centre of the Samaritans, who had their own temple on Gerizim in the Hellenistic period. Excavations on the summit have uncovered its sacred precinct. Ben Sira's insult shows how sharp the rivalry with Jerusalem had become by about 180 BCE.",
      theirEyes:
        "Two peoples who both honoured the Torah of Moses now worshipped on two different mountains, a day's walk apart, and each thought the other wrong.",
      debate:
        "Instead of “Samaria,” the Hebrew text of verse 26 reads “Seir” (Edom), so the first nation may be the Edomites. Shechem appears in both.",
    },
    confidence: "settled",
    references: ["Sirach 50:25–26"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.8.2–4 (the Samaritan temple on Gerizim)" },
      { kind: "archaeology", citation: "Yitzhak Magen, Mount Gerizim Excavations, vol. 2 (Israel Antiquities Authority, 2008)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-040",
    era: "hellenistic",
    level: 8,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Papyri from the archive of Zenon (250s BCE) show Tobias of Ammon in charge of what for Ptolemy II?",
    choices: [
      "A colony of cavalry settlers",
      "The royal fleet at Alexandria",
      "The Jerusalem Temple treasury",
      "The library of Alexandria",
    ],
    answer: 0,
    explanation: {
      world:
        "Zenon was the agent of Ptolemy II's finance minister Apollonius, and his papers were found at Philadelphia in the Egyptian Fayum. A sale contract written in 259 BCE at Birta in the Ammanitis (east of the Jordan) lists witnesses who were cleruchs (soldier-settlers) of Tobias' cavalry unit. In 257 BCE Tobias wrote to Apollonius and sent the king gifts including horses, dogs and wild asses; his letters use the standard Greek greeting formula, including thanks to “the gods.” Josephus calls Joseph the tax-farmer a son of Tobias, so most scholars see the same family.",
      textSays:
        "Nehemiah 2:10 names an earlier “Tobiah the Ammonite servant,” who opposed Nehemiah; many scholars think he was an ancestor of this Tobias.",
      theirEyes:
        "East of the Jordan, a Jewish noble with his own troop of horsemen kept the Ptolemaic frontier and sent exotic animals to the king in Alexandria.",
    },
    confidence: "mainstream",
    references: ["Nehemiah 2:10"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "CPJ I 1 (P.Cair.Zen. 59003), sale contract from Birta of the Ammanitis" },
      { kind: "archaeology", citation: "CPJ I 4–5 (P.Cair.Zen. 59076, 59075), letters of Tobias, 257 BCE" },
      { kind: "scholarship", citation: "V. A. Tcherikover and A. Fuks, Corpus Papyrorum Judaicarum, vol. 1 (1957)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "hel-041",
    era: "hellenistic",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Daniel 11:6 tells of a daughter of the “king of the south” sent to the “king of the north” to make an agreement. Most interpreters identify her as whom?",
    choices: ["Cleopatra VII", "Berenice, daughter of Ptolemy II", "Esther", "Jezebel"],
    answer: 1,
    explanation: {
      textSays:
        "Daniel 11:6 says the king of the south's daughter will come to the king of the north to make an agreement, but she will not keep her power and will be given up.",
      world:
        "Around 252 BCE, Ptolemy II married his daughter Berenice to the Seleucid king Antiochus II to seal a peace. After Antiochus died, Berenice and her young son were murdered, and her brother Ptolemy III invaded Syria in revenge (the Third Syrian War).",
      theirEyes:
        "News of a royal wedding meant peace for Judea's roads; news of the bride's murder meant armies on the march again.",
      tradition: {
        christian:
          "Jerome's Commentary on Daniel already identifies the daughter as Berenice, drawing on Porphyry and Greek historians.",
      },
      debate:
        "Most scholars read Daniel 11 as written in the 160s BCE and describing past events; many traditional readers see it as prophecy given in the 6th century BCE.",
    },
    confidence: "mainstream",
    references: ["Daniel 11:5–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jerome, Commentary on Daniel, on 11:6" },
      { kind: "primary", citation: "Appian, Syrian Wars 65" },
      { kind: "scholarship", citation: "John J. Collins, Daniel (Hermeneia, Fortress, 1993), on Daniel 11:6" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-042",
    era: "hellenistic",
    level: 9,
    category: "neighbours",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: 1 Maccabees quotes a letter in which a king of Sparta tells a Jewish high priest that Spartans and Jews are kin.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "1 Maccabees 12:19–23 gives a copy of a letter: “Arius king of the Spartans to Onias the chief priest, greetings. It has been found in writing, concerning the Spartans and the Jews, that they are kindred, and that they are of the descendants of Abraham” (12:20–21). Jonathan's own letter to Sparta refers back to it (12:7).",
      world:
        "Arius is Areus I, who ruled Sparta about 309–265 BCE, so the Onias meant is probably Onias I, around 300 BCE. Josephus gives a version of the same letter (Antiquities 12.4.10). Greek cities often claimed kinship with other peoples through legendary ancestors to build alliances.",
      theirEyes:
        "For Jews meeting the proud Greek world, a letter calling the famous Spartans their cousins was flattering news.",
      debate:
        "Many historians doubt that Areus' letter is genuine and think it was created or reworked later to support Jewish diplomacy with Sparta in the 2nd century BCE.",
    },
    confidence: "settled",
    references: ["1 Maccabees 12:5–23"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.4.10 (12.225–227)" },
      { kind: "scholarship", citation: "Erich S. Gruen, Heritage and Hellenism (University of California Press, 1998), ch. 7" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-043",
    era: "hellenistic",
    level: 9,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Antiochus III moved 2,000 Jewish families to Lydia and Phrygia because he doubted their loyalty.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "Josephus quotes a letter from Antiochus III to his governor Zeuxis. Facing revolts in Lydia and Phrygia, the king ordered 2,000 Jewish families moved from Mesopotamia and Babylonia to garrison places there, with land, houses and ten years free of taxes. His reason was trust: his predecessors had found them faithful, and he valued their piety towards God (Antiquities 12.3.4). Their descendants may have been among the Jewish communities of Asia Minor known in later centuries.",
      theirEyes:
        "A Babylonian Jewish family packed up for a new life in the hills of Asia Minor, chosen by the king because he believed they would be loyal.",
      debate: "A few scholars question whether the letter is genuine; most accept it.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.3.4 (12.147–153), Whiston" },
      { kind: "scholarship", citation: "Paul R. Trebilco, Jewish Communities in Asia Minor (Cambridge University Press, 1991)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-044",
    era: "hellenistic",
    level: 9,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says Hyrcanus, son of Joseph the Tobiad, decorated his fortress east of the Jordan with what?",
    choices: ["Statues of Greek gods", "Huge carved animals", "Painted scenes from Genesis", "A mosaic of the zodiac"],
    answer: 1,
    explanation: {
      world:
        "Josephus says Hyrcanus built a strong fortress of white stone, which he called Tyre, with animals of enormous size carved on it, a deep moat of water around it, and caves cut in the rock nearby. He ruled there seven years and took his own life after Antiochus IV came to power (Antiquities 12.4.11). The site is identified with 'Iraq al-Amir, west of Amman, where the building called Qasr al-Abd bears huge carved felines (lions or panthers). Nearby rock-cut caves bear the name “Tobiah” in Aramaic letters.",
      theirEyes:
        "Travellers crossing the Ammonite hills came upon a gleaming palace in a man-made lake, guarded by stone beasts.",
      debate:
        "Most scholars accept that Qasr al-Abd is Hyrcanus' building, though its exact function (palace, temple or fortified villa) is argued; the date of the “Tobiah” inscriptions is debated, with some placing them earlier than Hyrcanus.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.4.11 (12.230–236), Whiston" },
      { kind: "archaeology", citation: "Ernest Will and François Larché, ʿIraq al-Amir: le château du Tobiade Hyrcan (1991)" },
      { kind: "archaeology", citation: "Paul W. Lapp, “Soundings at ʿAraq el-Emir (Jordan),” BASOR 165 (1962)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-045",
    era: "hellenistic",
    level: 9,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "A Greek inscription from Schedia, Egypt (246–221 BCE), records Jews dedicating a “proseuche.” What was it?",
    choices: ["A gymnasium", "A family tomb", "A merchant ship", "A prayer house"],
    answer: 3,
    explanation: {
      world:
        "The inscription reads, in translation, that the Jews dedicated the proseuche (“prayer house”) on behalf of King Ptolemy, Queen Berenice his sister and wife, and their children. The royal couple are Ptolemy III and Berenice II (his cousin, styled “sister” by court custom), which dates the stone to 246–221 BCE. It is among the earliest dated inscriptions for a Jewish prayer house anywhere. Egyptian Jews honoured the king this way without offering him worship.",
      theirEyes:
        "In a Nile Delta town, Jewish families gathered in their own prayer house, with a stone over the door showing loyalty to the king.",
      tradition: {
        jewish:
          "Philo and Josephus later call Jewish meeting places proseuchai, and Acts 16:13 uses the same word for the place of prayer at Philippi.",
      },
    },
    confidence: "settled",
    references: ["Acts 16:13"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Schedia proseuche inscription: CIJ II 1440; W. Horbury and D. Noy, Jewish Inscriptions of Graeco-Roman Egypt (1992), no. 22" },
      { kind: "scholarship", citation: "Lee I. Levine, The Ancient Synagogue (Yale University Press, 2nd ed. 2005)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "hel-046",
    era: "hellenistic",
    level: 10,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Hecataeus, quoted by Josephus, says a 66-year-old priest named Ezekias followed Ptolemy I to Egypt after which battle?",
    choices: ["Issus", "Ipsus", "Gaza", "Panium"],
    answer: 2,
    explanation: {
      world:
        "Josephus quotes Hecataeus: after the battle of Gaza (312 BCE), when Ptolemy took control of Syria, many people chose to follow him to Egypt, among them Ezekias, a chief priest of the Jews about sixty-six years old (Against Apion 1.186–189). Issus (333 BCE) was Alexander's victory, Ipsus came in 301 BCE, and Panium about 200 BCE.",
      theirEyes:
        "An old, respected priest packed for Egypt, betting that the new Macedonian king would treat his people well.",
      debate:
        "Small silver coins of the late 4th century BCE name a governor Yehizqiyah (Hezekiah); some scholars identify him with Ezekias. Whether this passage is genuine Hecataeus or a later Jewish imitation (“Pseudo-Hecataeus”) is also debated.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Against Apion 1.22 (1.186–189), quoting Hecataeus" },
      { kind: "scholarship", citation: "Bezalel Bar-Kochva, Pseudo-Hecataeus, On the Jews (University of California Press, 1996)" },
      { kind: "scholarship", citation: "Haim Gitler and Catharine Lorber, “A New Chronology for the Yehizkiyah Coins of Judah,” Schweizerische Numismatische Rundschau 87 (2008)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-047",
    era: "hellenistic",
    level: 10,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: 2 Maccabees says some money kept in the Jerusalem Temple belonged to Hyrcanus son of Tobias.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "When a Seleucid official came to seize the Temple's funds, the high priest Onias explained that they were deposits for widows and orphans, and that some belonged to Hyrcanus son of Tobias, a man of high rank (2 Maccabees 3:10–11).",
      world:
        "Temples across the ancient world worked as safe-deposit banks, protected by the fear of sacrilege. Historians usually identify this Hyrcanus with the Tobiad who, according to Josephus, built the fortress at 'Iraq al-Amir; his deposits suggest the Tobiad family's ties to the Temple's leaders in the 170s BCE.",
      theirEyes:
        "A widow who had left her savings in the Temple's storerooms trusted that no king's agent would dare to touch them.",
    },
    confidence: "settled",
    references: ["2 Maccabees 3:4–12"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.4.11" },
      { kind: "scholarship", citation: "Daniel R. Schwartz, 2 Maccabees (Commentaries on Early Jewish Literature, De Gruyter, 2008), on 3:11" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-048",
    era: "hellenistic",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Demetrius, writing in Egypt under Ptolemy IV, is the earliest known Jewish author to write in Greek. What was his main subject?",
    choices: [
      "The chronology of biblical history",
      "Greek athletics",
      "Babylonian astronomy",
      "The early history of Rome",
    ],
    answer: 0,
    explanation: {
      world:
        "Demetrius “the Chronographer” wrote in the late 3rd century BCE, working from the Greek Septuagint. His surviving fragments calculate dates and ages for the patriarchs, Jacob's children and Moses, and solve puzzles in the text, for instance tracing Zipporah, Moses' wife, back to Abraham and Keturah. One fragment counts years down to the reign of Ptolemy IV (221–204 BCE).",
      theirEyes:
        "An Alexandrian Jew, trained in Greek scholarship, set out to prove that his people's sacred history was as precise and ancient as any Greek chronicle.",
      debate:
        "Only fragments survive, quoted by Alexander Polyhistor and preserved by Eusebius and Clement of Alexandria; his exact title and full scope are uncertain.",
    },
    confidence: "mainstream",
    references: ["Genesis 25:1–2", "Exodus 2:21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Eusebius, Preparation for the Gospel 9.19, 9.21, 9.29 (fragments of Demetrius via Alexander Polyhistor)" },
      { kind: "primary", citation: "Clement of Alexandria, Stromata 1.21.141" },
      { kind: "scholarship", citation: "Carl R. Holladay, Fragments from Hellenistic Jewish Authors, vol. 1: Historians (1983)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-049",
    era: "hellenistic",
    level: 10,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When Judah's priests pulled down the altar the Gentiles had defiled, what does 1 Maccabees say they did with its stones?",
    choices: [
      "Ground them to powder and scattered them in the Kidron Valley",
      "Reused them to strengthen the city wall of Jerusalem",
      "Stored them on the temple hill until a prophet should decide",
      "Sent them to the Samaritan temple on Mount Gerizim",
    ],
    answer: 2,
    explanation: {
      textSays:
        "1 Maccabees 4:45–46: “So they pulled down the altar and laid up the stones on the temple hill in a convenient place, until a prophet would come to give an answer concerning them.” They then “took whole stones according to the law, and built a new altar like the former” (4:47).",
      world:
        "This happened when the Temple was cleansed and rededicated in 164 BCE. The priests faced a real dilemma: the stones had been consecrated to God but defiled by foreign sacrifices, and no rule settled what to do with them. 1 Maccabees elsewhere describes its own time as one in which prophets had stopped appearing (9:27), and the Jews later made Simon leader and high priest “until there should arise a faithful prophet” (14:41).",
      theirEyes:
        "Priests who could not bear to destroy holy stones, nor to use them again, set them carefully aside and waited for God to speak.",
      tradition: {
        jewish:
          "Josephus likewise says the exact succession of prophets had failed after the Persian period (Against Apion 1.41). The Mishnah, a later record (about 200 CE), remembers a chamber in the Temple where the Hasmoneans stored the stones of the altar the Greek kings had defiled (Middot 1:6).",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 4:42–47", "1 Maccabees 9:27", "1 Maccabees 14:41"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Against Apion 1.8 (1.41)" },
      { kind: "primary", citation: "Mishnah, Middot 1:6 (later record, c. 200 CE)" },
      { kind: "scholarship", citation: "Jonathan A. Goldstein, I Maccabees (Anchor Bible 41, 1976), on 4:46" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "hel-050",
    era: "hellenistic",
    level: 10,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "A painted Hellenistic tomb at Maresha (Marisa) belonged to the leader of a community of settlers from which Phoenician city?",
    choices: ["Sidon", "Carthage", "Byblos", "Ugarit"],
    answer: 0,
    explanation: {
      world:
        "A Greek epitaph in the tomb names Apollophanes son of Sesmaios as leader of the Sidonians at Marisa for 33 years. Marisa lay in Idumea, south-west of Jerusalem. The tomb, discovered in 1902 and used from the 3rd into the 2nd century BCE, has a painted hunting frieze of real and fabulous animals labelled in Greek, including an elephant and a rhinoceros. Names in its inscriptions mix Semitic (some honouring the Edomite god Qos) and Greek forms, a glimpse of Hellenization over several generations. Maresha was later conquered by John Hyrcanus I, according to Josephus (Antiquities 13.9.1).",
      theirEyes:
        "In the hills south-west of Jerusalem, families of Phoenician descent buried their dead under painted beasts and Greek inscriptions.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "John P. Peters and Hermann Thiersch, Painted Tombs in the Necropolis of Marissa (Palestine Exploration Fund, 1905)" },
      { kind: "scholarship", citation: "David M. Jacobson, The Hellenistic Paintings of Marisa (Palestine Exploration Fund Annual 7, 2007)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.9.1" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
