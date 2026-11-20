import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const romanJudea3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "rom-051",
    era: "roman-judea",
    level: 11,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In 40 BCE, which body officially declared Herod king of Judea?",
    choices: ["The Sanhedrin in Jerusalem", "The Roman Senate", "The Parthian royal court", "An assembly of Temple priests"],
    answer: 1,
    explanation: {
      world:
        "Josephus says Herod fled to Rome after the Parthians invaded and installed the Hasmonean Antigonus as king. Mark Antony and Octavian (the future Augustus) backed him, and the Senate voted him king; he walked between the two leaders to the Capitol to offer sacrifice. He still had to win his kingdom by force, taking Jerusalem with Roman help in 37 BCE.",
      theirEyes:
        "For Judeans, their new “king” had been chosen in a foreign city by men who had never seen Jerusalem, and he arrived with Roman legions behind him.",
      debate: "Josephus says Herod did not expect the crown and had come to ask it for Aristobulus, the brother of his betrothed, Mariamne; many historians suspect this modesty is Herod's own spin.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.14.4–5 (14.381–389); Jewish War 1.14.4 (1.282–285)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.16.2–4 (14.468–488) (capture of Jerusalem)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-052",
    era: "roman-judea",
    level: 11,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Herod named his new port city Caesarea, and its harbour Sebastos. Whom did both names honour?",
    choices: ["Julius Caesar's rival Pompey", "Mark Antony", "Augustus", "Cleopatra"],
    answer: 2,
    explanation: {
      textSays: "Acts sets Peter's visit to the centurion Cornelius at Caesarea (Acts 10:1) and Paul's later imprisonment there (Acts 23:33).",
      world:
        "Josephus says Herod named Caesarea after Caesar Augustus; “Sebastos” is the Greek translation of the title “Augustus” (“revered”), and Josephus uses it for the harbour. Herod also renamed Samaria “Sebaste.” Underwater excavations show the harbour's breakwaters were made partly of Roman hydraulic concrete, using volcanic ash shipped from the Bay of Naples, which hardened under the sea.",
      theirEyes:
        "Sailors coming in from Rome saw a brand-new harbour on a coast with no natural port, with a temple to Augustus and Rome towering over the entrance.",
    },
    confidence: "settled",
    references: ["Acts 10:1", "Acts 23:33"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 15.9.6 (15.331–341); 17.5.1 (17.87); Jewish War 1.21.5–7 (1.408–415)" },
      { kind: "scholarship", citation: "C. J. Brandon, R. L. Hohlfelder, M. D. Jackson and J. P. Oleson, Building for Eternity: The History and Technology of Roman Concrete Engineering in the Sea (Oxbow, 2014)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-053",
    era: "roman-judea",
    level: 11,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Luke 3:1 names a son of Herod as tetrarch of Ituraea and Trachonitis. Who was he?",
    choices: ["Archelaus", "Antipater", "Agrippa", "Philip"],
    answer: 3,
    explanation: {
      textSays:
        "Luke 3:1 dates John the Baptist's preaching with a list of rulers: “Herod being tetrarch of Galilee, and his brother Philip tetrarch of the region of Ituraea and Trachonitis.”",
      world:
        "Herod's final will split his kingdom three ways, confirmed by Augustus in 4 BCE: Archelaus got Judea, Samaria and Idumea; Antipas got Galilee and Perea; Philip got the lands north-east of the Sea of Galilee. Josephus praises Philip as a mild ruler who spent his whole reign in his own territory, and says he died in the twentieth year of Tiberius (about 33/34 CE).",
      theirEyes:
        "A fisherman rowing across the top of the lake from Capernaum to Bethsaida passed from Antipas' territory into Philip's.",
    },
    confidence: "settled",
    references: ["Luke 3:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 17.11.4 (17.317–320); 18.4.6 (18.106–108); Jewish War 2.6.3 (2.93–98)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-054",
    era: "roman-judea",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Luke, what had been revealed to old Simeon in Jerusalem?",
    choices: [
      "That he would not die before seeing the Lord's Christ",
      "That the Temple would be destroyed in his lifetime",
      "That he would become high priest",
      "That Herod would soon die",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Luke 2:26: “It had been revealed to him by the Holy Spirit that he should not see death before he had seen the Lord's Christ.” When Mary and Joseph bring the baby to the Temple, Simeon takes him in his arms and blesses God (Luke 2:27–32).",
      world: "Luke calls Simeon righteous and devout, “looking for the consolation of Israel” (2:25), echoing Isaiah 40:1.",
      theirEyes: "An old man in the Temple courts suddenly holding a stranger's baby and saying he could now die in peace.",
      tradition: {
        jewish:
          "The Psalms of Solomon (1st century BCE) pray for a son of David to come as God's anointed king (Psalms of Solomon 17).",
        christian: "Simeon's prayer (Luke 2:29–32), the “Nunc Dimittis,” is sung or said at evening services in many churches.",
      },
    },
    confidence: "settled",
    references: ["Luke 2:25–32", "Isaiah 40:1"],
    sources: [scripture, { kind: "primary", citation: "Psalms of Solomon 17" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-055",
    era: "roman-judea",
    level: 11,
    category: "tradition",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Luke says the elderly prophetess Anna, who spoke about the baby Jesus, belonged to the tribe of Asher.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Luke 2:36: “There was one Anna, a prophetess, the daughter of Phanuel, of the tribe of Asher.” Luke says she never left the Temple, worshipping with fasting and prayer night and day (2:37–38).",
      world:
        "Asher was one of the northern tribes of the old kingdom of Israel, which Assyria conquered in the 8th century BCE. Some families evidently still remembered a northern tribal ancestry centuries later.",
      theirEyes: "Regulars at the Temple would have known Anna well: a widow who seemed to live in its courts.",
      tradition: {
        jewish:
          "Other writings of the period also give people a tribal ancestry: the Book of Tobit makes its hero a man of the northern tribe of Naphtali (Tobit 1:1), and Paul calls himself “of the tribe of Benjamin” (Philippians 3:5).",
      },
    },
    confidence: "settled",
    references: ["Luke 2:36–38", "Philippians 3:5"],
    sources: [scripture, { kind: "primary", citation: "Tobit 1:1" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "rom-056",
    era: "roman-judea",
    level: 12,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Matthew's visitors from the east are “magi.” Who were the magi in earlier Greek writers such as Herodotus?",
    choices: ["Babylonian kings", "A priestly class among the Medes and Persians", "Roman tax collectors", "Greek athletes"],
    answer: 1,
    explanation: {
      textSays:
        "Matthew 2:1: “wise men from the east came to Jerusalem.” The Greek word is magoi, which could also mean astrologers, dream interpreters or sorcerers (compare Simon the magician in Acts 8:9).",
      world:
        "Herodotus describes the Magi as a tribe of the Medes and says no Persian sacrifice could be offered without a Magus present; they also interpreted dreams. By Roman times the word covered many kinds of eastern sage and star-watcher.",
      theirEyes: "To Jerusalemites, foreign star-readers asking openly for a newborn king would have been startling, and dangerous news for Herod.",
      debate:
        "Matthew does not say exactly where they came from. Justin Martyr (2nd century) said Arabia; others have proposed Persia or Babylonia. Christian tradition has generally read the visit as history; many critical scholars see a story shaped by scripture (compare Psalm 72:10–11 and Isaiah 60:6).",
    },
    confidence: "settled",
    references: ["Matthew 2:1–12", "Acts 8:9", "Isaiah 60:6", "Psalm 72:10–11"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 1.101, 1.107, 1.132" },
      { kind: "primary", citation: "Justin Martyr, Dialogue with Trypho 77–78" },
      { kind: "scholarship", citation: "R. E. Brown, The Birth of the Messiah (rev. ed., 1993)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-057",
    era: "roman-judea",
    level: 12,
    category: "tradition",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Matthew's Gospel says there were three wise men.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Matthew never gives a number. He names three gifts, “gold, frankincense, and myrrh” (Matthew 2:11), and says the visitors came to “the house” (not a stable), with no mention of camels or kings.",
      world:
        "The idea of three probably grew from the three gifts. Christian tradition later made them kings (influenced by Psalm 72:10–11 and Isaiah 60:3) and gave them names such as Caspar, Melchior and Balthasar, which appear only centuries later in Western sources.",
      theirEyes: "Frankincense and myrrh came up the incense roads from southern Arabia: costly gifts that any merchant in Jerusalem would recognise.",
      tradition: {
        christian:
          "Western churches celebrate the magi's visit at Epiphany (6 January). Some Eastern Christian traditions counted more than three.",
      },
    },
    confidence: "settled",
    references: ["Matthew 2:1–12", "Psalm 72:10–11", "Isaiah 60:3–6"],
    sources: [scripture, { kind: "scholarship", citation: "R. E. Brown, The Birth of the Messiah (rev. ed., 1993), on Matthew 2" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-058",
    era: "roman-judea",
    level: 12,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Roman writer Macrobius reports that Augustus joked it was better to be Herod's what than his son?",
    choices: ["Horse", "Dog", "Pig", "Slave"],
    answer: 2,
    explanation: {
      world:
        "Macrobius (writing about 400 CE) gives the saying in Latin: “Melius est Herodis porcum esse quam filium” (“It is better to be Herod's pig than his son”). The joke works because a Jewish king would not kill a pig for food, but Herod did execute three of his sons: Alexander and Aristobulus (about 7 BCE) and Antipater, days before his own death in 4 BCE, as Josephus records. Many scholars suggest the quip was first made in Greek, where hys (pig) and huios (son) sound alike.",
      theirEyes: "Even in Rome, Herod's palace was famous for plots, trials and executions within the royal family.",
      debate:
        "Macrobius wrote four centuries later, so the attribution to Augustus is uncertain, and the Greek wordplay is a modern suggestion, not something Macrobius states. He links the joke to boys under two killed by Herod “in Syria,” which many scholars think shows the influence of Matthew's story on his source.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Macrobius, Saturnalia 2.4.11" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 16.11.7 (16.394); 17.7.1 (17.187)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-059",
    era: "roman-judea",
    level: 12,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which Hasmonean princess, Herod's wife, did he have executed in 29 BCE?",
    choices: ["Herodias", "Mariamne", "Bernice", "Drusilla"],
    answer: 1,
    explanation: {
      world:
        "Mariamne was a granddaughter of the Hasmonean high priest Hyrcanus II, so marrying her linked Herod, an Idumean by descent, to the old Maccabean royal house. Josephus says Herod loved her passionately, but believed accusations against her, stirred up by his sister Salome, and had her put to death. He later named a tower in Jerusalem after her, and her two sons were executed in about 7 BCE.",
      theirEyes:
        "To many Jews, Mariamne's death meant that the last of the Maccabees' royal line had been destroyed by the king who had married into it.",
      debate: "Josephus gives two somewhat different accounts in the Jewish War and the Antiquities, so the exact circumstances and date are debated.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 15.7.4–6 (15.222–239); Jewish War 1.22.3–5 (1.438–444); 5.4.3 (5.170)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-060",
    era: "roman-judea",
    level: 12,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In 2007 archaeologist Ehud Netzer announced he had found what he identified as Herod's tomb. Where?",
    choices: ["Masada", "Machaerus", "Herodium", "Caesarea"],
    answer: 2,
    explanation: {
      world:
        "Josephus describes Herod's funeral procession carrying his body to Herodium, the cone-shaped hilltop fortress-palace he built south of Bethlehem (he says it was where Herod had beaten off pursuers in 40 BCE). After decades of digging, Netzer found a mausoleum and broken stone sarcophagi on the hill's slope. He died in 2010 after a fall at the site.",
      theirEyes:
        "Shepherds near Bethlehem could see Herodium on the skyline every day: an artificial mountain raised by one man as his palace and his grave.",
      debate:
        "Most scholars accept the identification, but some (such as Joseph Patrich and Benjamin Arubas) argue the mausoleum was too modest for Herod and may belong to someone else.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 17.8.3 (17.196–199); 14.13.9 (14.359–360); Jewish War 1.33.9 (1.673)" },
      { kind: "archaeology", citation: "E. Netzer et al., Herodium excavations (Hebrew University), tomb announced 2007; Israel Museum exhibition “Herod the Great: The King's Final Journey” (2013)" },
      { kind: "scholarship", citation: "J. Patrich and B. Arubas, “Revisiting the Mausoleum at Herodium: Is It Herod's Tomb?” Palestine Exploration Quarterly 147 (2015)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "rom-061",
    era: "roman-judea",
    level: 13,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Josephus says Herod fortified Masada as a refuge against two dangers: his own Jewish subjects and whom?",
    choices: ["The Roman Senate", "The Seleucid king", "Emperor Augustus", "Cleopatra, queen of Egypt"],
    answer: 3,
    explanation: {
      world:
        "Josephus explains that Herod feared the Jews might depose him and restore their former kings, and feared even more Cleopatra, who kept urging Mark Antony to give her Herod's kingdom. So he built walls, towers, huge cisterns and storerooms on the clifftop, and luxurious palaces including one hanging in terraces down Masada's northern edge. The Seleucid kingdom had already been ended by Rome in the 60s BCE.",
      theirEyes:
        "Herod had already once left his family at Masada while he fled: he knew exactly how useful a desert rock could be when enemies came.",
      tradition: {
        shared: "The same fortress later became the rebels' last stronghold after Jerusalem fell in 70 CE.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Jewish War 7.285–303 (especially 7.300)" },
      { kind: "archaeology", citation: "Y. Yadin, Masada: Herod's Fortress and the Zealots' Last Stand (1966)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-062",
    era: "roman-judea",
    level: 13,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: coins found beneath part of the Western Wall indicate it was still being built years after Herod's death.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays: "In John 2:20 Jesus' hearers say the Temple has taken forty-six years to build.",
      world:
        "In 2011, excavators Eli Shukron (Israel Antiquities Authority) and Ronny Reich (University of Haifa) announced bronze coins struck under the Roman governor Valerius Gratus, about 17/18 CE, found inside a ritual bath that had been filled in beneath the foundations at the southern end of the Western Wall. So that stretch of the wall was laid more than 20 years after Herod died. Josephus says the Temple work was only finished in the early 60s CE, under the governor Albinus.",
      theirEyes:
        "For decades, Jerusalem was a building site: workmen cutting huge stones while pilgrims climbed to the Temple around them.",
      tradition: {
        shared: "The Western Wall, part of Herod's retaining wall around the Temple Mount, is today the holiest place of Jewish prayer.",
      },
      debate:
        "The coins date only the stretch built over the ritual bath. Most scholars accept that this part of the wall was finished after Herod's death; how much of the rest was completed in his lifetime is less certain.",
    },
    confidence: "mainstream",
    references: ["John 2:20"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Israel Antiquities Authority excavation at the southern end of the Western Wall (E. Shukron and R. Reich), announced November 2011" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 20.9.7 (20.219)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-063",
    era: "roman-judea",
    level: 13,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Why did Judea come under direct Roman rule in 6 CE, according to Josephus?",
    choices: [
      "Augustus deposed Herod's son Archelaus",
      "Herod the Great died without heirs",
      "Jerusalem rebelled and was destroyed",
      "The high priest invited the Romans in",
    ],
    answer: 0,
    explanation: {
      textSays: "Matthew 2:22 says Joseph was afraid to settle in Judea “when he heard that Archelaus was reigning over Judea in the place of his father, Herod.”",
      world:
        "After complaints about Archelaus' harsh rule, Augustus banished him to Vienne in Gaul and added his territory to the province of Syria. Quirinius, the governor of Syria, came to assess property, and Coponius was sent as the first Roman governor of Judea, with power to inflict the death penalty. Galilee stayed under Antipas.",
      theirEyes: "Overnight, Jerusalem's ruler was a Roman official in Caesarea, and Roman assessors were counting households and property.",
    },
    confidence: "settled",
    references: ["Matthew 2:22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 17.13.2–5 (17.342–355); 18.1.1 (18.1–2); Jewish War 2.7.3–2.8.1 (2.111–118)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-064",
    era: "roman-judea",
    level: 13,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: apart from Luke, a surviving source from the 1st century records a single census of the whole Roman empire ordered by Augustus.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays: "Luke 2:1 says a decree went out from Caesar Augustus that “all the world” should be enrolled.",
      world:
        "Augustus' own record of his deeds, the Res Gestae, lists three censuses (28 BCE, 8 BCE and 14 CE), but these counted Roman citizens only. Provincial censuses were taken separately, province by province: for example in Gaul, in Egypt (where papyri record regular household censuses), and in Judea, where Josephus records the census under Quirinius in 6 CE. Writers who describe a census of the whole Roman world, such as Cassiodorus (6th century), come centuries later.",
      theirEyes: "For a provincial villager, “the census” meant a local registration for tax, run by whoever governed his province.",
      debate:
        "Some scholars read Luke's “all the world” as a summary of Augustus' policy of provincial censuses, or argue for an earlier registration not recorded elsewhere; others see it, together with the dating to Quirinius (Josephus places his census in 6 CE, about ten years after Herod's death), as a historical difficulty in Luke 2:1–2.",
    },
    confidence: "mainstream",
    references: ["Luke 2:1–3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Augustus, Res Gestae Divi Augusti 8" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.1.1 (18.1–2); Cassiodorus, Variae 3.52" },
      { kind: "scholarship", citation: "R. E. Brown, The Birth of the Messiah (rev. ed., 1993), appendix on the census of Quirinius" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-065",
    era: "roman-judea",
    level: 13,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Luke, how long do Mary and Joseph search before finding twelve-year-old Jesus in the Temple?",
    choices: ["One day", "Three days", "Seven days", "Forty days"],
    answer: 1,
    explanation: {
      textSays:
        "Luke 2:41–46: after Passover the family heads home in a travelling group, and only after a day's journey do they notice he is missing. “After three days they found him in the temple,” sitting among the teachers, listening and asking questions.",
      world:
        "Josephus tells a similar story about himself: at about fourteen, he says, the high priests and leading men of Jerusalem came to him to learn his opinion on points of the law.",
      theirEyes: "Pilgrim families walked home in big crowds of relatives and neighbours, so a boy could easily be assumed to be with an uncle.",
      tradition: {
        jewish: "Jewish men were expected to go up to Jerusalem for the pilgrim festivals (Deuteronomy 16:16); Luke 2:41 says Jesus' parents went every year for Passover.",
      },
    },
    confidence: "settled",
    references: ["Luke 2:41–51", "Deuteronomy 16:16"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Life 2 (Life 9)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "rom-066",
    era: "roman-judea",
    level: 14,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Josephus, who records many of Herod's killings, mentions the massacre of Bethlehem's infants.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Only Matthew tells the story. Herod “killed all the male children who were in Bethlehem and in all the surrounding countryside, from two years old and under” (Matthew 2:16), and Matthew links it to Jeremiah 31:15 (31:14 in Hebrew Bibles), Rachel weeping for her children.",
      world:
        "Josephus describes Herod's executions of his wife, sons and many opponents in detail, but says nothing about Bethlehem, and no other early source clearly independent of Matthew records the event.",
      theirEyes: "Families in Herod's last years knew how quickly suspicion turned deadly in his kingdom.",
      debate:
        "Christian tradition has generally received the account as history, and some historians note that the deaths of a small number of children in a village could easily have gone unrecorded in a reign like Herod's. Other scholars think the story is shaped by the account of Pharaoh's order against Hebrew boys in Exodus 1, presenting Jesus as a new Moses. Silence in Josephus alone does not settle the question either way.",
    },
    confidence: "settled",
    references: ["Matthew 2:16–18", "Jeremiah 31:15", "Exodus 1:22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews books 15–17" },
      { kind: "scholarship", citation: "R. E. Brown, The Birth of the Messiah (rev. ed., 1993)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-067",
    era: "roman-judea",
    level: 14,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Ink labels on imported wine jars found at Masada name their owner as “Herod, king of Judea.” In what language are they written?",
    choices: ["Hebrew", "Aramaic", "Latin", "Nabatean"],
    answer: 2,
    explanation: {
      world:
        "Yigael Yadin's excavations at Masada (1963–1965) found amphora fragments with Latin ink inscriptions (tituli). One group gives a date by the Roman consul C. Sentius Saturninus (19 BCE), the type of wine, and the words “regi Herodi Iudaico,” “for Herod, king of Judea.” They show Herod importing fine Italian wine for his palace.",
      theirEyes:
        "Herod's storeroom staff at Masada unpacked jars shipped all the way from Italy, labelled in Latin for the king.",
      tradition: {
        shared: "Herod presented himself as a Jewish king and as a friend of Rome at once; his wine labels fit the second image.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Y. Yadin, Masada: Herod's Fortress and the Zealots' Last Stand (1966)" },
      { kind: "archaeology", citation: "H. M. Cotton and J. Geiger, Masada II: The Yigael Yadin Excavations 1963–1965, Final Reports: The Latin and Greek Documents (Israel Exploration Society, 1989)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-068",
    era: "roman-judea",
    level: 14,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Philip rebuilt Paneas as Caesarea Philippi. Its old name came from a cave shrine of which god?",
    choices: ["Pan", "Apollo", "Dionysus", "Poseidon"],
    answer: 0,
    explanation: {
      textSays: "Mark 8:27 sets Peter's confession of Jesus on the way to “the villages of Caesarea Philippi,” north of the Sea of Galilee (compare Matthew 16:13).",
      world:
        "At the foot of Mount Hermon, one of the main sources of the Jordan rises beside a cave sacred to the Greek god Pan. Josephus says Herod built a white marble temple to Augustus near this cave, and that Philip enlarged the town and named it Caesarea, after the emperor. Excavations at Banias (the Arabic form of Paneas) have uncovered the cave and a row of shrines and niches beside it.",
      theirEyes: "A Galilean walking north would find the Jordan's source surrounded by carved niches to a goat-legged Greek god.",
    },
    confidence: "settled",
    references: ["Mark 8:27", "Matthew 16:13"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 15.10.3 (15.363–364); 18.2.1 (18.28); Jewish War 1.21.3 (1.404–406); 2.9.1 (2.168)" },
      { kind: "archaeology", citation: "Banias excavations (Z. U. Ma'oz, Israel Antiquities Authority)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-069",
    era: "roman-judea",
    level: 14,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "What did Herod's son Philip put on his coins that his father and brother Antipas avoided?",
    choices: ["Hebrew inscriptions", "Human portraits, including the emperor's and his own", "A menorah", "Palm branches"],
    answer: 1,
    explanation: {
      world:
        "Herod and Antipas struck coins without human images, respecting Jewish objections to images. Philip, whose subjects were largely non-Jewish, put the heads of Augustus and Tiberius on his coins, and became the first Jewish ruler known to show his own portrait. Some of his coins show the temple of Augustus at Paneas.",
      theirEyes: "In Jerusalem a coin with a face on it was offensive to many; in Philip's mostly Gentile towns, it was normal money.",
      tradition: {
        jewish: "The objection rested on the commandment against images (Exodus 20:4); Josephus reports protests over Roman images in Jerusalem.",
      },
    },
    confidence: "settled",
    references: ["Exodus 20:4"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Y. Meshorer, A Treasury of Jewish Coins from the Persian Period to Bar Kokhba (Yad Ben-Zvi, 2001)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.3.1 (18.55–59)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-070",
    era: "roman-judea",
    level: 14,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Before 66 CE, Rome's troops in Judea were mainly auxiliaries recruited locally. From which cities, according to Josephus?",
    choices: ["Jerusalem and Jericho", "Rome and Ostia", "Caesarea and Sebaste", "Alexandria and Cyrene"],
    answer: 2,
    explanation: {
      world:
        "Judea's governors had no legion, only auxiliary units. Josephus says these were largely recruited from the Gentile cities of Caesarea and Sebaste (Samaria). When Agrippa I died in 44 CE, these soldiers insulted his memory, and Josephus blames them for sowing the hatred that led to the war of 66. Roman decrees he quotes had exempted Jews in Asia who were Roman citizens from military service.",
      textSays: "Acts 10:1 names Cornelius at Caesarea, “a centurion of what was called the Italian Regiment,” and Acts 27:1 names Julius, a centurion “of the Augustan band.” Their names hint that not every unit in the region was raised locally, though how these cohorts were recruited is uncertain.",
      theirEyes:
        "The soldier on a Jerusalem street was usually not an Italian but a local Greek-speaking Gentile, often from a city with old grudges against the Jews.",
    },
    confidence: "mainstream",
    references: ["Acts 10:1", "Acts 27:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 19.9.1–2 (19.356–366); 20.8.7 (20.173–178); 14.10.11–12 (14.223–227)" },
      { kind: "scholarship", citation: "E. M. Smallwood, The Jews under Roman Rule (Brill, 1976)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "rom-071",
    era: "roman-judea",
    level: 15,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Mark says Levi sat at a “tax office” by the lake near Capernaum. What did such an office most likely collect?",
    choices: ["The yearly Temple half-shekel", "Tolls on goods passing along roads and borders", "Rent for Herod's palaces", "Fines for breaking the Sabbath"],
    answer: 1,
    explanation: {
      textSays: "Mark 2:13–14: by the sea near Capernaum (2:1), Jesus “saw Levi the son of Alphaeus sitting at the tax office” and called him to follow; Matthew 9:9 calls him Matthew.",
      world:
        "The Greek word telōnēs usually meant a collector of tolls and customs, often a contractor who bid for the right to collect them and kept the surplus. Capernaum lay on a trade route near the border between Antipas' Galilee and Philip's territory, a natural place for a toll post. The Temple tax was collected separately (Matthew 17:24).",
      theirEyes: "Every cart of fish or grain heading along the lakeshore stopped at Levi's booth, and everyone suspected he kept a cut.",
      debate: "Scholars debate how much of the direct land and head taxes in Galilee passed through such men, but most agree the Gospel “tax collectors” were mainly toll collectors.",
    },
    confidence: "mainstream",
    references: ["Mark 2:1–14", "Matthew 9:9", "Matthew 17:24"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "J. R. Donahue, “Tax Collectors and Sinners: An Attempt at Identification,” Catholic Biblical Quarterly 33 (1971)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-072",
    era: "roman-judea",
    level: 15,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Tacitus records that around 17 CE, Syria and Judea, exhausted by their burdens, asked Rome to lower their tribute.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "Tacitus notes that in 17 CE, under Tiberius, the provinces of Syria and Judea, “worn out by their burdens,” begged for a reduction of tribute. Roman provincials paid tribute on land and a poll tax, on top of tolls and, for Jews, the Temple tax and tithes.",
      textSays: "The Gospels show how charged the question was: Jesus is asked whether it is lawful to pay taxes to Caesar (Mark 12:14).",
      theirEyes: "A small farmer paying Rome, the Temple and the toll collector could feel squeezed from every side.",
      debate: "Historians debate how heavy the total burden really was; estimates vary widely, and Tacitus gives no figures.",
    },
    confidence: "settled",
    references: ["Mark 12:14"],
    sources: [
      scripture,
      { kind: "primary", citation: "Tacitus, Annals 2.42" },
      { kind: "scholarship", citation: "F. Udoh, To Caesar What Is Caesar's: Tribute, Taxes and Imperial Administration in Early Roman Palestine (Brown Judaic Studies, 2005)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-073",
    era: "roman-judea",
    level: 15,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "At the Temple after Jesus' birth, Luke says his parents offered birds. What does that choice suggest?",
    choices: [
      "They were priests",
      "They could not afford a lamb",
      "They were Gentile converts",
      "Birds were required for every firstborn son",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Luke 2:22–24: when the days of purification were completed, they offered “A pair of turtledoves, or two young pigeons.” Leviticus 12:6–8 requires a lamb and a bird after childbirth, but allows two doves or pigeons for a mother who cannot afford a lamb.",
      world:
        "Under Leviticus 12 a mother of a son waited forty days before bringing her purification offering. Mark 11:15 mentions sellers of doves in the Temple courts, where worshippers could buy birds for such offerings.",
      debate: "Luke does not say outright that the family was poor; the conclusion comes from comparing his wording with Leviticus 12:8, and most commentators draw it.",
      theirEyes: "Among the pilgrims buying sacrifices, the young couple from Nazareth chose the poor family's offering.",
      tradition: {
        shared:
          "Luke also links the visit to the law that every firstborn son is “holy to the Lord” (Luke 2:23, citing Exodus 13:2, 12); Numbers 18:15–16 sets the redemption price of a firstborn son at five shekels, a separate payment from the mother's offering.",
      },
    },
    confidence: "mainstream",
    references: ["Luke 2:22–24", "Leviticus 12:1–8", "Exodus 13:2", "Numbers 18:15–16", "Mark 11:15"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-074",
    era: "roman-judea",
    level: 15,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says Herod had priests trained as stonecutters and carpenters. Which part of the Temple complex did the priests build?",
    choices: ["The Antonia fortress", "The outer retaining walls", "The Royal Stoa", "The sanctuary building itself"],
    answer: 3,
    explanation: {
      world:
        "Josephus says Herod prepared 1,000 wagons and 10,000 skilled workmen, bought priestly robes for a thousand priests and had some of them taught stonecutting and others carpentry. He adds that Herod himself did not enter the inner courts, because he was not a priest. Herod saw to the porticoes and outer enclosures, which took eight years, while the sanctuary itself was built by the priests in a year and six months.",
      theirEyes: "Ordinary workmen could labour on the outer courts, but on the sanctuary itself the builder laying stones was a priest.",
      tradition: {
        jewish:
          "Josephus reflects the Temple's graded holiness: the innermost areas were open only to priests, a rule rooted in the Torah's limits on service at the altar and within the veil (Numbers 18:7).",
      },
      debate: "Josephus does not spell out why priests did the building; that it kept non-priests out of the holy areas is an inference most historians accept.",
    },
    confidence: "settled",
    references: ["Numbers 18:7"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 15.390; 15.419–421" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-075",
    era: "roman-judea",
    level: 15,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The astronomer Johannes Kepler linked the Star of Bethlehem with which sky event around 7 BCE?",
    choices: [
      "A total solar eclipse over Judea",
      "Repeated close meetings of Jupiter and Saturn",
      "The planet Mars passing in front of the Moon",
      "A shower of meteors",
    ],
    answer: 1,
    explanation: {
      textSays: "Matthew 2:9: the star the magi had seen went before them until it stood over the place where the child was.",
      world:
        "Kepler, after watching a Jupiter–Saturn conjunction and a new star in 1603–1604, calculated that the two planets met three times in 7 BCE and suggested a new star might have appeared with them. Later writers have proposed other planetary events, or a comet or nova, since Chinese records note a new “broom star” seen for over 70 days around 5 BCE.",
      theirEyes: "Star-watchers in the east tracked planets night after night, reading their meetings as signs about kings.",
      debate:
        "No astronomical theory is agreed. Christian tradition has often seen the star as a unique sign from God; many biblical scholars read it as a literary echo of Balaam's prophecy of a star coming out of Jacob (Numbers 24:17), which some Jews of the time read as pointing to a future leader; others still look for a real sky event.",
    },
    confidence: "settled",
    references: ["Matthew 2:1–10", "Numbers 24:17"],
    sources: [
      scripture,
      { kind: "primary", citation: "J. Kepler, De Stella Nova in Pede Serpentarii (Prague, 1606)" },
      { kind: "scholarship", citation: "M. Kidger, The Star of Bethlehem: An Astronomer's View (Princeton, 1999)" },
      { kind: "primary", citation: "Damascus Document (CD) 7.18–21 (messianic reading of Numbers 24:17)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
