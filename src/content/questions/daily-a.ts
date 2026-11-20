import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const dailyA: QuestionInput[] = [
  // ───────────── Primeval history ─────────────
  {
    id: "dly-001",
    era: "primeval",
    daily: true,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Two of the four rivers of Eden in Genesis 2 are rivers still known today. Which two?",
    choices: ["The Jordan and the Kishon", "The Tigris and the Euphrates", "The Danube and the Rhine", "The Arnon and the Jabbok"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 2:10–14: a river flows out of Eden and splits into four — Pishon, Gihon, Hiddekel and the Euphrates. Of Hiddekel it says, “This is the one which flows in front of Assyria.”",
      world:
        "Hiddekel is the Hebrew form of the Tigris (Akkadian Idiqlat). The Tigris and Euphrates frame Mesopotamia, home of some of the earliest known cities. Pishon and Gihon have never been securely identified.",
      theirEyes:
        "For listeners in Canaan, naming the great rivers of the east placed the first garden at the far edge of the known world.",
      tradition: {
        jewish:
          "Josephus identified Pishon with the Ganges and Gihon with the Nile (Antiquities 1.1.3), and Sirach 24:23–27 says the Law makes wisdom overflow like the Pishon, Tigris, Euphrates, Jordan and Gihon in flood.",
      },
    },
    confidence: "settled",
    references: ["Genesis 2:10–14", "Sirach 24:23–27"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.1.3" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-002",
    era: "primeval",
    daily: true,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Genesis 2 the first human (adam) is formed from the adamah. What does adamah mean?",
    choices: ["Breath", "Rib", "Ground", "Garden"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 2:7: “Yahweh God formed man from the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.”",
      world:
        "The Hebrew wordplay ties humans to the soil they will farm (Genesis 2:15; 3:19). Genesis opens with two creation accounts with different order and style (1:1–2:3 and 2:4–25); most scholars attribute them to different sources later woven together.",
      theirEyes:
        "To a farmer breaking clods every spring, the point was plain: we are made of the same stuff as the field.",
      tradition: {
        jewish: "Sirach 17:1 likewise says the Lord created humankind out of earth and will return them to it.",
        christian: "Paul contrasts Adam and Christ, calling the first man “of the earth” and made of dust (1 Corinthians 15:47).",
      },
      debate:
        "Traditional readers in both faiths have usually read the two accounts as complementary — an overview followed by a close-up — rather than as separate sources.",
    },
    confidence: "settled",
    references: ["Genesis 2:7", "Genesis 3:19", "Sirach 17:1", "1 Corinthians 15:47"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Documentary hypothesis” and “Genesis,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-003",
    era: "primeval",
    daily: true,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Genesis 4, how did Cain and Abel earn their living?",
    choices: [
      "Cain kept sheep; Abel farmed the ground",
      "Both were hunters",
      "Cain worked metal; Abel played music",
      "Cain farmed the ground; Abel kept sheep",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 4:2: “Abel was a keeper of sheep, but Cain was a tiller of the ground.” Each brings an offering from his work (4:3–4). Metalwork and music come later, with Tubal Cain and Jubal (4:21–22).",
      world:
        "Farmers and herders were the two pillars of ancient economies and often rivals. A Sumerian poem, “Dumuzid and Enkimdu,” even stages a contest between a shepherd and a farmer.",
      theirEyes: "Every village knew the tension: the herder's flock wanted the same land the farmer had just sown.",
      tradition: {
        jewish:
          "Josephus says God preferred Abel's offering of what grew naturally over the produce Cain forced from the ground by his own ingenuity (Antiquities 1.2.1).",
        christian: "Hebrews 11:4 says it was by faith that Abel offered a better sacrifice than Cain.",
      },
    },
    confidence: "settled",
    references: ["Genesis 4:2–4", "Genesis 4:21–22", "Hebrews 11:4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.2.1" },
      { kind: "primary", citation: "“Dumuzid and Enkimdu,” Electronic Text Corpus of Sumerian Literature (ETCSL)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-004",
    era: "primeval",
    daily: true,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the Gilgamesh flood story, how does the survivor Utnapishtim find out whether dry land has appeared?",
    choices: ["He drops a weighted line", "He waits for a rainbow", "He releases birds", "He sends his son to swim ashore"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 8:6–12: Noah sends out a raven, then a dove three times; the dove returns with an olive leaf, then does not return at all.",
      world:
        "Tablet XI of the Epic of Gilgamesh tells how Utnapishtim's boat grounds on Mount Nimush. He releases a dove, then a swallow — both come back — and finally a raven, which does not return. The best-known copy, the British Museum's “Flood Tablet,” comes from Ashurbanipal's library at Nineveh (7th century BCE); George Smith announced its flood story in 1872.",
      theirEyes:
        "A Babylonian listener would wait with each bird: if it came back, there was still nowhere to land; if it stayed away, the waters had gone down.",
      debate:
        "Scholars agree the stories are related but differ on how: Genesis may adapt a Mesopotamian tradition, or both may draw on a shared older one. Genesis has one God acting in judgement, where the Babylonian gods quarrel.",
    },
    confidence: "settled",
    references: ["Genesis 8:6–12"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "The Flood Tablet, Epic of Gilgamesh Tablet XI, Nineveh (British Museum K.3375)" },
      { kind: "scholarship", citation: "A. R. George, The Babylonian Gilgamesh Epic (Oxford, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-005",
    era: "primeval",
    daily: true,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Babylonian Atrahasis epic, why do the gods decide to send a flood?",
    choices: [
      "Humans built a tower to reach heaven",
      "Human noise disturbed the gods' rest",
      "A king killed his own brother",
      "Humans stole fire from the gods",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Genesis gives a moral reason: the earth was corrupt and filled with violence (Genesis 6:11–13), and God saw that human wickedness was great (6:5).",
      world:
        "In Atrahasis, humans were created to do the gods' labour. As they multiply, their din keeps the god Enlil from sleeping; plague and drought fail, so the gods send a flood. The god Enki secretly warns Atrahasis to build a boat. The fullest copy was written in the 17th century BCE, in the reign of the Babylonian king Ammi-saduqa.",
      theirEyes:
        "A Babylonian hearing this would picture the gods like an irritable king whose servants have become too many and too loud.",
      debate:
        "Some scholars read the “noise” as a sign of overpopulation; others see rebellion or disorder. Comparing the two stories highlights what Genesis changes: one God, and a flood sent because of wrongdoing.",
    },
    confidence: "settled",
    references: ["Genesis 6:5", "Genesis 6:11–13"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "W. G. Lambert and A. R. Millard, Atra-ḫasīs: The Babylonian Story of the Flood (Oxford, 1969)" },
      { kind: "reference", citation: "“The Great Flood: Atrahasis,” Livius.org" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-006",
    era: "primeval",
    daily: true,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Genesis 11, what building materials did the builders of Babel use?",
    choices: [
      "Cut stone blocks with lime mortar",
      "Cedar beams from Lebanon",
      "Baked bricks, with tar for mortar",
      "Sun-dried mud and reeds",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 11:3: “Come, let’s make bricks, and burn them thoroughly.” “They had brick for stone, and they used tar for mortar.” Verse 9 explains the name: “there Yahweh confused the language of all the earth.”",
      world:
        "Stone was scarce in southern Mesopotamia, so temples and ziggurats were built of fired brick set in bitumen. Babylon's great ziggurat, Etemenanki, was rebuilt by Nebuchadnezzar II, and Herodotus describes a tower of eight stages there (Histories 1.181). Babylon's own name meant “gate of the god” (Bab-ili); Genesis plays on Hebrew balal, “confuse.”",
      theirEyes:
        "To people from stony Canaan, a city built of baked brick and black tar rising out of a flat plain looked like human pride itself.",
      tradition: {
        jewish:
          "Josephus says the tower was built under Nimrod, of burnt brick cemented with bitumen (Antiquities 1.4.2–3).",
      },
    },
    confidence: "settled",
    references: ["Genesis 11:1–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 1.181" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.4.2–3" },
      { kind: "reference", citation: "“Etemenanki” and “ziggurat,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Patriarchs ─────────────
  {
    id: "dly-007",
    era: "patriarchs",
    daily: true,
    category: "story",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Genesis says Lot's wife became a pillar of salt after she looked back.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 19:26: “But Lot’s wife looked back from behind him, and she became a pillar of salt.” The family had been told not to look behind them (19:17).",
      world:
        "Around Mount Sedom, at the south-west end of the Dead Sea, a ridge of rock salt erodes into pillars — some of them nicknamed “Lot's wife” by locals and travellers.",
      theirEyes: "Anyone who had crossed the barren salt flats by the Dead Sea could imagine a figure frozen there forever.",
      tradition: {
        jewish:
          "The Wisdom of Solomon calls the pillar a monument to an unbelieving soul (10:7), and Josephus claims, “I have seen it, and it remains at this day” (Antiquities 1.11.4).",
        christian: "Jesus tells his hearers to remember Lot's wife (Luke 17:32), when warning against turning back.",
      },
    },
    confidence: "settled",
    references: ["Genesis 19:17", "Genesis 19:26", "Wisdom of Solomon 10:7", "Luke 17:32"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.11.4 (1.203)" },
      { kind: "reference", citation: "“Mount Sodom,” Wikipedia" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-008",
    era: "patriarchs",
    daily: true,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "What did Esau get from Jacob in exchange for his birthright?",
    choices: ["Bread and lentil stew", "Thirty pieces of silver", "A camel and its saddle", "A field near Hebron"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 25:30–34: Esau, back from the field, asks for “some of that red stew, for I am famished.” Jacob makes him swear first, then gives him “bread and lentil stew.” The text adds, “So Esau despised his birthright.”",
      world:
        "Lentils were a staple food of the ancient Near East. The birthright usually meant a larger share of the inheritance (compare Deuteronomy 21:17, which gives the firstborn a double portion).",
      theirEyes: "A hungry hunter traded his future for a bowl of red soup — and the name stuck: “Edom” means “red.”",
      tradition: {
        jewish:
          "The Book of Jubilees (2nd century BCE) retells the sale: Esau trades his birthright for bread and lentil pottage, and from then on Jacob is counted the elder (Jubilees 24:3–7).",
        christian: "Hebrews 12:16 holds up Esau as a warning: he sold his birthright for a single meal.",
      },
    },
    confidence: "settled",
    references: ["Genesis 25:29–34", "Deuteronomy 21:17", "Hebrews 12:16"],
    sources: [scripture, { kind: "primary", citation: "Book of Jubilees 24:3–7 (trans. R. H. Charles)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-009",
    era: "patriarchs",
    daily: true,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What did Joseph order hidden in Benjamin's sack so that the brothers could be accused of theft?",
    choices: ["His signet ring", "His silver cup", "A royal sceptre", "An Egyptian idol"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 44:2: Joseph's steward puts Joseph's silver cup in the mouth of Benjamin's sack. The steward later calls it the cup Joseph uses for divination (44:5).",
      world:
        "Cup divination (lecanomancy) — reading signs from oil poured on water in a bowl — is described in Babylonian oil-omen texts going back to the early 2nd millennium BCE. Commentators differ on whether the story means Joseph really practised it or the claim was part of his test of the brothers.",
      theirEyes:
        "Being caught with a great official's sacred cup was a slave-making offence. The brothers' answer would show whether they would abandon another of Rachel's sons.",
      tradition: {
        shared:
          "Judah's offer to become a slave in Benjamin's place (Genesis 44:33) is often read as the turning point of the Joseph story: the brother who once proposed selling Joseph (37:26–27) now gives himself up.",
      },
    },
    confidence: "settled",
    references: ["Genesis 44:1–5", "Genesis 44:33", "Genesis 37:26–27"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Giovanni Pettinato, Die Ölwahrsagung bei den Babyloniern (Rome, 1966)" },
      { kind: "reference", citation: "“Lecanomancy,” Wikipedia" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-010",
    era: "patriarchs",
    daily: true,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Who is the first person in the Bible to be called “the Hebrew”?",
    choices: ["Joseph", "Eber", "Moses", "Abram"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 14:13: a survivor of the battle “came and told Abram, the Hebrew.” Joseph is called “a Hebrew” later (Genesis 39:14). Eber is listed as an ancestor (Genesis 10:21; 11:14–16) but is never called a Hebrew.",
      world:
        "Fourteenth-century BCE letters found at Amarna in Egypt complain about the ʿApiru (Habiru) in Canaan — uprooted people who worked as labourers, mercenaries or raiders.",
      theirEyes: "To the settled kings of Canaan, a “Hebrew” herdsman with armed men in his camp was an outsider worth watching.",
      tradition: {
        jewish:
          "The Septuagint renders “Abram the Hebrew” in Genesis 14:13 as Abram tō peratē, “the one who crosses over,” linking the word to Hebrew ʿavar, “to cross.”",
        christian: "Paul proudly calls himself a Hebrew born of Hebrews (Philippians 3:5).",
      },
      debate:
        "Whether “Hebrew” (ʿivri) is related to ʿApiru is debated. Most scholars think ʿApiru described a social class, not an ethnic group, so any link is indirect at best.",
    },
    confidence: "settled",
    references: ["Genesis 14:13", "Genesis 39:14", "Genesis 10:21", "Genesis 11:14–16", "Philippians 3:5"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 14:13" },
      { kind: "scholarship", citation: "William L. Moran, The Amarna Letters (Johns Hopkins, 1992)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-011",
    era: "patriarchs",
    daily: true,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Egyptian “Tale of Two Brothers” contains a scene much like which part of the Joseph story?",
    choices: [
      "Being thrown into a dry pit",
      "Interpreting Pharaoh's dreams",
      "Being falsely accused by his master's wife",
      "Receiving a special tunic",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 39: Potiphar's wife tries to seduce Joseph; when he refuses, she accuses him falsely, and he is thrown into prison.",
      world:
        "In the Tale of Two Brothers, the young farmer Bata refuses his elder brother's wife; she claims he attacked her, and the furious brother tries to kill him. The story survives on Papyrus D'Orbiney, copied around 1200 BCE (19th Dynasty), now in the British Museum.",
      theirEyes:
        "Egyptians enjoyed this plot as entertainment. Israelite listeners heard a familiar twist — with Joseph's faithfulness to God at its centre (Genesis 39:9).",
      debate:
        "Few scholars think Genesis copied the Egyptian tale directly. The false-accusation plot is a widespread folk motif — Greek myth tells it of Bellerophon — and its Egyptian form fits the Joseph story's setting.",
    },
    confidence: "settled",
    references: ["Genesis 39:7–20"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Papyrus D'Orbiney, “Tale of Two Brothers” (British Museum EA 10183)" },
      { kind: "scholarship", citation: "Miriam Lichtheim, Ancient Egyptian Literature, vol. 2: The New Kingdom (1976)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Exodus, wilderness and Torah ─────────────
  {
    id: "dly-012",
    era: "exodus",
    daily: true,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Catholic and Lutheran numbering combine “no other gods” and “no idols” into one commandment. How do they still count ten?",
    choices: [
      "They add “love your neighbour as yourself”",
      "They split the command against coveting into two",
      "They count the Sabbath command twice",
      "They add the Shema",
    ],
    answer: 1,
    explanation: {
      textSays:
        "The commandments appear in Exodus 20:1–17 and Deuteronomy 5:6–21. Deuteronomy 5:21 sets coveting a neighbour's wife apart from desiring his house, field and goods, which supports splitting it into two. The text says there are ten (Exodus 34:28; Deuteronomy 10:4) — in Hebrew literally “ten words” — but never numbers them one by one.",
      world:
        "This division goes back to Augustine (c. 400 CE). Orthodox and most Reformed Protestants keep “no other gods” and “no idols” separate and count coveting as one.",
      theirEyes:
        "A child learning the commandments on ten fingers had to be told where each one began — and different teachers drew the lines in different places.",
      tradition: {
        jewish:
          "Philo (On the Decalogue 50–51) and Josephus (Antiquities 3.5.5) both count worshipping the one God alone as the first commandment and the ban on images as the second, and coveting as a single tenth commandment.",
      },
    },
    confidence: "settled",
    references: ["Exodus 20:1–17", "Deuteronomy 5:6–21", "Exodus 34:28", "Deuteronomy 10:4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, On the Decalogue 50–51" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 3.5.5" },
      { kind: "reference", citation: "“Ten Commandments,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-013",
    era: "exodus",
    daily: true,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Who was the chief craftsman whom Exodus says God filled with his Spirit to build the Tabernacle?",
    choices: ["Hiram of Tyre", "Aaron", "Bezalel", "Joshua"],
    answer: 2,
    explanation: {
      textSays:
        "Exodus 31:2–3: “I have called by name Bezalel the son of Uri, the son of Hur, of the tribe of Judah. I have filled him with the Spirit of God, in wisdom, and in understanding, and in knowledge, and in all kinds of workmanship.” His assistant is Oholiab of the tribe of Dan (31:6). Hiram of Tyre is the bronze-worker of Solomon's Temple (1 Kings 7:13–14).",
      world:
        "The Tabernacle was a portable tent-shrine that could be taken down and carried on the march (Numbers 4). Bezalel is from Judah and Oholiab from Dan — tribes later at the far south and far north of the land.",
      theirEyes: "Skilled hands — weavers, metalworkers, carvers — were treated as gifted by God, not merely as hired labour.",
      tradition: {
        jewish: "Philo explains the name Bezalel as “in the shadow of God” (Allegorical Interpretation 3.96).",
        christian: "Hebrews 8:5 describes the Tabernacle as a copy and shadow of heavenly things, quoting Exodus 25:40.",
      },
    },
    confidence: "settled",
    references: ["Exodus 31:1–6", "Numbers 4", "1 Kings 7:13–14", "Hebrews 8:5", "Exodus 25:40"],
    sources: [scripture, { kind: "primary", citation: "Philo, Allegorical Interpretation 3.95–96" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-014",
    era: "exodus",
    daily: true,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "On an ordinary weekday, what happened to manna that people tried to keep until the next morning?",
    choices: ["It turned to stone", "It melted into honey", "It bred worms and went foul", "It doubled overnight"],
    answer: 2,
    explanation: {
      textSays:
        "Exodus 16:19–20: Moses told them to leave none until morning, but some did, “so it bred worms and became foul.” Yet the extra gathered for the Sabbath “didn’t become foul, and there were no worms in it” (16:24).",
      world:
        "Each person was to gather about an omer a day (Exodus 16:16) — enough for one day only. The rule taught trust: there was no stockpiling.",
      theirEyes: "Imagine opening your jar the next morning to the smell of rot — while your neighbour, who trusted the promise, slept easy.",
      tradition: {
        christian:
          "Paul quotes Exodus 16:18 — whoever gathered much had nothing over, whoever gathered little had no lack — to encourage generous sharing (2 Corinthians 8:15).",
      },
    },
    confidence: "settled",
    references: ["Exodus 16:16–24", "2 Corinthians 8:15"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-015",
    era: "exodus",
    daily: true,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the tribe of Levi received its own block of tribal territory, like the other tribes.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Numbers 18:20–24: God tells Aaron, “I am your portion and your inheritance,” and the Levites receive the tithe instead of land. They are given forty-eight towns with pasture scattered among the tribes (Numbers 35:7; Joshua 21:41).",
      world:
        "Because Joseph's sons Ephraim and Manasseh each became a tribe, there are still twelve tribal territories without Levi.",
      theirEyes:
        "A Levite family lived among other tribes' farms, depending on their tithes — and serving at the sanctuary in return.",
      tradition: {
        christian:
          "By the first century, Levites could own land: Barnabas, “a Levite,” sold a field and gave the money to the apostles (Acts 4:36–37).",
      },
    },
    confidence: "settled",
    references: ["Numbers 18:20–24", "Numbers 35:1–8", "Joshua 21:41", "Deuteronomy 18:1–2", "Acts 4:36–37"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-016",
    era: "exodus",
    daily: true,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "What is the Hebrew name of the book of Numbers, taken from its opening verse?",
    choices: [
      "Vayikra — “And he called”",
      "Devarim — “Words”",
      "Bereshit — “In the beginning”",
      "Bemidbar — “In the wilderness”",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Numbers 1:1 begins with Yahweh speaking to Moses in the wilderness of Sinai. The book follows Israel from Sinai to the plains of Moab across from Jericho (Numbers 36:13).",
      world:
        "Hebrew books are often named from an early word. The English title comes through Latin (Numeri) from the Greek Septuagint's Arithmoi, after the two censuses in chapters 1 and 26. The other names belong to Leviticus, Deuteronomy and Genesis.",
      theirEyes:
        "For the generation in the book, “in the wilderness” was not a title but daily life: forty years of camps, quarrels and graves.",
      tradition: {
        christian:
          "Paul retells wilderness episodes from Numbers as examples written down to warn later believers (1 Corinthians 10:1–11).",
      },
    },
    confidence: "settled",
    references: ["Numbers 1:1", "Numbers 26:1–2", "Numbers 36:13", "1 Corinthians 10:1–11"],
    sources: [scripture, { kind: "reference", citation: "“Numbers,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-017",
    era: "exodus",
    daily: true,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Deuteronomy, where did Moses die?",
    choices: [
      "At the foot of Mount Sinai",
      "In the land of Moab, after viewing Canaan from Mount Nebo",
      "Inside Canaan, at Jericho",
      "In Egypt, at Goshen",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Deuteronomy 34:1–6: Moses climbs Mount Nebo and is shown the land, told, “you shall not go over there.” He dies “in the land of Moab,” and is buried in a valley there, “but no man knows where his tomb is to this day.” He was 120 (34:7).",
      world:
        "Mount Nebo, in today's Jordan, overlooks the Jordan valley and Jericho. The pilgrim Egeria visited a church there in the 380s CE (Travels 10–12).",
      theirEyes: "After forty years of walking, the old leader saw the promised land spread out below — and stayed behind.",
      tradition: {
        jewish:
          "Josephus says a cloud suddenly stood over Moses and he disappeared, but he wrote that he died, “lest they should venture to say” he had gone to God (Antiquities 4.8.48).",
        christian: "Moses appears with Elijah at Jesus' transfiguration (Mark 9:4), and Jude 9 mentions a dispute over his body.",
      },
    },
    confidence: "settled",
    references: ["Deuteronomy 34:1–7", "Mark 9:4", "Jude 9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 4.8.48 (4.326)" },
      { kind: "primary", citation: "Egeria, Travels (Itinerarium) 10–12" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Conquest, Judges and Ruth ─────────────
  {
    id: "dly-018",
    era: "judges",
    daily: true,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Kathleen Kenyon's 1950s excavations dated the destruction of Jericho's last great walled Bronze Age city to about when?",
    choices: ["About 1250 BCE", "About 1550 BCE", "About 700 BCE", "About 70 CE"],
    answer: 1,
    explanation: {
      textSays: "Joshua 6 says Jericho's wall fell after the Israelites circled the city for seven days.",
      world:
        "Kenyon dated the burned, walled city at Tell es-Sultan to the end of the Middle Bronze Age, around 1550 BCE, and found little sign of a city in the later 13th century, when many place Joshua. Radiocarbon dates on burnt grain from the destruction layer (Bruins and van der Plicht, 1995) place it in the late 17th or 16th century BCE, broadly supporting her date.",
      theirEyes:
        "Jericho was already ancient: one of the oldest towns on earth, an oasis city by the Jordan with a spring that still flows.",
      debate:
        "The date has long been argued over. John Garstang, digging in the 1930s, put the fall of the walls around 1400 BCE, and Bryant Wood (1990) revived that date from the pottery, fitting a traditional early date for the Exodus; Piotr Bienkowski and most archaeologists rejected his redating. Others suggest erosion removed later remains, or that the story preserves memory of an older ruin. Faith traditions read Joshua 6 in different ways, and the archaeology alone does not settle them.",
    },
    confidence: "mainstream",
    references: ["Joshua 6:1–21"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Kathleen M. Kenyon, Digging Up Jericho (London, 1957)" },
      { kind: "scholarship", citation: "H. J. Bruins and J. van der Plicht, “Tell es-Sultan (Jericho): Radiocarbon Results of Short-Lived Cereal and Multiyear Charcoal Samples from the End of the Middle Bronze Age,” Radiocarbon 37:2 (1995), 213–220" },
      { kind: "scholarship", citation: "Bryant G. Wood, “Did the Israelites Conquer Jericho? A New Look at the Archaeological Evidence,” Biblical Archaeology Review 16:2 (March/April 1990)" },
      { kind: "scholarship", citation: "Piotr Bienkowski, “Jericho Was Destroyed in the Middle Bronze Age, Not the Late Bronze Age,” Biblical Archaeology Review 16:5 (September/October 1990)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-019",
    era: "judges",
    daily: true,
    category: "tradition",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: many scholars consider the Song of Deborah (Judges 5) one of the oldest passages in the Hebrew Bible.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Judges 4 tells in prose how Deborah, a prophetess judging Israel, sent Barak against the Canaanite general Sisera; Judges 5 retells the victory as a victory song sung by Deborah and Barak.",
      world:
        "Its archaic Hebrew, its picture of loosely allied tribes with no king, and its list of tribes that came — or stayed home (5:15–17) — lead many scholars to date it to the 12th or 11th century BCE.",
      theirEyes: "Villagers who had hidden from raiders on the roads (5:6–7) now sang of the day the stars themselves fought for them (5:20).",
      tradition: {
        jewish:
          "Pseudo-Philo's Biblical Antiquities (1st century CE) gives Deborah a new, longer hymn (chapter 32), showing how her song was still being reimagined.",
      },
      debate:
        "The early date is the traditional majority view (Encyclopaedia Britannica calls the song perhaps the oldest section of the Bible), but it is increasingly challenged. Some scholars think the poem was revised over time, and others, such as Serge Frolov, argue it was written much later, around the Babylonian exile, pointing to late word forms and an assumed setting with kings.",
    },
    confidence: "mainstream",
    references: ["Judges 4:4–16", "Judges 5:1–31"],
    sources: [
      scripture,
      { kind: "primary", citation: "Pseudo-Philo, Biblical Antiquities (Liber Antiquitatum Biblicarum) 32" },
      { kind: "reference", citation: "“Deborah,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "Serge Frolov, “How Old Is the Song of Deborah?” Bible Odyssey (Society of Biblical Literature)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-020",
    era: "judges",
    daily: true,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "What did Gideon use to ask God for a sign before fighting the Midianites?",
    choices: ["A staff that sprouted", "A bronze serpent", "A pillar of stones", "A wool fleece on the threshing floor"],
    answer: 3,
    explanation: {
      textSays:
        "Judges 6:37–40: “I will put a fleece of wool on the threshing floor.” First it is wet with dew while the ground is dry — he wrings out “a bowl full of water” — then, at his second request, it is dry while the ground is wet.",
      world:
        "Threshing floors were open, flat places where grain was beaten out — ideal for seeing dew. Gideon was first found threshing wheat in a winepress, hiding it from Midianite raiders whose camels, the text says, could not be counted (6:5, 6:11).",
      theirEyes: "A farmer too frightened to thresh in the open asked for a sign he could literally squeeze in his hands.",
      tradition: {
        christian: "Hebrews 11:32 lists Gideon among the heroes of faith.",
      },
    },
    confidence: "settled",
    references: ["Judges 6:5", "Judges 6:11", "Judges 6:36–40", "Hebrews 11:32"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-021",
    era: "judges",
    daily: true,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Samson's enemies, the Philistines, most likely came originally from where?",
    choices: ["Arabia", "The Aegean world", "Upper Egypt", "Persia"],
    answer: 1,
    explanation: {
      textSays:
        "Amos 9:7 says God brought the Philistines from Caphtor, usually identified with Crete. In Judges 13–16 Samson fights them around their cities on the coastal plain.",
      world:
        "Reliefs of Ramesses III at Medinet Habu (early 12th century BCE) show “Sea Peoples,” including the Peleset, invading by land and sea. Soon after, Aegean-style pottery and customs appear at Ashdod, Ashkelon and Ekron, and a 2019 ancient-DNA study at Ashkelon found new European-related ancestry in early Iron Age burials.",
      theirEyes:
        "For an Israelite farmer in the hills, the Philistines were newcomers with chariots and strange gods — and a pottery style no one local made.",
      debate:
        "Scholars debate how large the migration was and how fast the newcomers mixed with the local Canaanite population; the DNA shows that mixing was rapid.",
    },
    confidence: "mainstream",
    references: ["Amos 9:7", "Judges 13:1", "Judges 16:23"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Medinet Habu, mortuary temple of Ramesses III, Sea Peoples reliefs (Year 8)" },
      { kind: "scholarship", citation: "M. Feldman et al., “Ancient DNA sheds light on the genetic origins of early Iron Age Philistines,” Science Advances 5:7 (2019), eaax0061" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-022",
    era: "judges",
    daily: true,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Ruth gathered leftover grain behind Boaz's harvesters. What was this practice called?",
    choices: ["Winnowing", "Tithing", "Threshing", "Gleaning"],
    answer: 3,
    explanation: {
      textSays:
        "Ruth 2:2–3: Ruth goes to glean in the fields and happens to come to Boaz's field. Torah law told farmers not to harvest to the edges or pick up what fell, but to leave it for the poor and the foreigner (Leviticus 19:9–10; Deuteronomy 24:19).",
      world:
        "Gleaning was a form of welfare: widows, orphans and foreigners could feed themselves with dignity. Boaz goes further, telling his workers to drop extra stalks for her (Ruth 2:15–16).",
      theirEyes: "A Moabite widow bent over the stubble at dawn knew one thing: a good landowner meant she ate tonight.",
      tradition: {
        christian: "Matthew's genealogy names Ruth, a Moabite, as an ancestor of David and of Jesus (Matthew 1:5).",
      },
    },
    confidence: "settled",
    references: ["Ruth 2:2–3", "Ruth 2:15–16", "Leviticus 19:9–10", "Deuteronomy 24:19", "Matthew 1:5"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-023",
    era: "judges",
    daily: true,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "To give up his right to redeem Naomi's family land, what did the closer relative do?",
    choices: ["Broke a clay jar", "Tore his robe", "Took off his sandal and handed it over", "Poured oil on a stone"],
    answer: 2,
    explanation: {
      textSays:
        "Ruth 4:7: “a man took off his sandal, and gave it to his neighbor; and this was the way of formalizing transactions in Israel.” Boaz then buys the land and marries Ruth “to raise up the name of the dead on his inheritance” (4:10).",
      world:
        "A redeemer (go'el) was the relative who bought back family land (Leviticus 25:25). Ruth's story blends this with a duty like levirate marriage, where a man married his dead brother's widow (Deuteronomy 25:5–10).",
      theirEyes: "At the town gate, before the elders, a sandal changing hands was the ancient equivalent of signing the deed.",
      tradition: {
        jewish:
          "Josephus merges Ruth with Deuteronomy 25:9: in his retelling Ruth herself removes the man's shoe and spits in his face (Antiquities 5.9.4).",
      },
      debate: "Scholars debate how closely Ruth's custom relates to the levirate law, since the closer relative is not Ruth's brother-in-law.",
    },
    confidence: "settled",
    references: ["Ruth 4:1–10", "Leviticus 25:25", "Deuteronomy 25:5–10"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 5.9.4 (5.335)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-024",
    era: "judges",
    daily: true,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to Joshua 18:1, where did the Israelites set up the Tent of Meeting once the land was subdued?",
    choices: ["Gilgal", "Shechem", "Bethel", "Shiloh"],
    answer: 3,
    explanation: {
      textSays:
        "Joshua 18:1: the congregation “assembled themselves together at Shiloh, and set up the Tent of Meeting there.” Later Hannah prays there and Samuel grows up serving at the sanctuary (1 Samuel 1–3). Jeremiah 7:12 points to Shiloh's ruin as a warning.",
      world:
        "Shiloh (Khirbet Seilun) lies in the hills north of Jerusalem. Israel Finkelstein's excavations in 1981–84 found a substantial Iron Age I settlement (roughly 12th–11th centuries BCE), the era the Bible assigns to the judges, and described Shiloh as the central religious site of the hill country in the 11th century BCE.",
      theirEyes: "Families from across the tribes walked up to Shiloh for yearly feasts (1 Samuel 1:3) — the closest thing they had to a national centre.",
      debate:
        "When and how Shiloh fell is debated. Many link its end to the Philistine victory in 1 Samuel 4, around 1050 BCE, though the Bible never says outright that Shiloh was destroyed then.",
    },
    confidence: "settled",
    references: ["Joshua 18:1", "1 Samuel 1:3", "1 Samuel 4:1–11", "Jeremiah 7:12"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Israel Finkelstein, “Shiloh Yields Some, But Not All, of Its Secrets,” Biblical Archaeology Review 12:1 (January/February 1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-025",
    era: "judges",
    daily: true,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: on the Merneptah Stele, “Israel” is written with a sign marking it as a people, not a city.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "The Book of Judges pictures Israel in this era as a network of tribes with no king: “In those days there was no king in Israel” (Judges 17:6).",
      world:
        "The stele (c. 1208 BCE), found by Flinders Petrie at Thebes in 1896, celebrates Pharaoh Merneptah's victories. Ashkelon, Gezer and Yanoam carry the sign for a city or land; Israel carries the sign for a people — a seated man and woman. The line reads: “Israel is laid waste; his seed is not.” It is the earliest undisputed mention of Israel outside the Bible.",
      theirEyes:
        "To Egypt's scribes, Israel was not yet a kingdom with a capital — just a people in the hills of Canaan worth boasting about defeating.",
      debate:
        "Most scholars take the “people” sign to mean Israel was a population group rather than a city-state, though some caution that Egyptian scribes were not always consistent. Some propose an even earlier mention on a damaged Egyptian pedestal in Berlin (Berlin 21687), but that reading is disputed. What “seed” means — offspring or grain — is also debated.",
    },
    confidence: "mainstream",
    references: ["Judges 17:6"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Merneptah Stele (Cairo, Egyptian Museum JE 31408), c. 1208 BCE" },
      { kind: "scholarship", citation: "James K. Hoffmeier, “The (Israel) Stela of Merneptah,” in W. W. Hallo (ed.), The Context of Scripture, vol. 2 (2000), no. 2.6" },
      { kind: "reference", citation: "“Merneptah Stele,” Wikipedia" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
