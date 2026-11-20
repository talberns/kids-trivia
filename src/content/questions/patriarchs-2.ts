import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Hebrew Bible / Old Testament — quotations from the World English Bible (public domain)" } as const;

export const patriarchs2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "pat-026",
    era: "patriarchs",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "When famine drove Abram to Egypt, what did he ask Sarai to tell the Egyptians?",
    choices: ["That she was a widow", "That she was his sister", "That she was a princess of Ur", "That she was his servant"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 12:13: “Please say that you are my sister, that it may be well with me for your sake, and that my soul may live because of you.” Pharaoh takes Sarai, and Yahweh strikes his house with plagues (12:17). In Genesis 20:12 Abraham explains that she really is his half-sister, “the daughter of my father, but not the daughter of my mother.”",
      theirEyes:
        "A foreign herdsman with a beautiful wife was vulnerable at a king's court. Abram feared the husband might be removed to get the wife.",
      tradition: {
        jewish:
          "Josephus adds that while in Egypt Abram taught the Egyptians arithmetic and astronomy, which then passed to the Greeks (Antiquities 1.8.2).",
      },
    },
    confidence: "settled",
    references: ["Genesis 12:10–20", "Genesis 20:12"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.8.1–2" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-027",
    era: "patriarchs",
    level: 6,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "What kind of home does Genesis picture Abraham living in as he moved around Canaan?",
    choices: ["A stone house inside a city", "A royal palace", "A tent", "A cave"],
    answer: 2,
    explanation: {
      textSays:
        "Abram “pitched his tent” near Bethel (Genesis 12:8), and the visitors find him “in the tent door in the heat of the day” (Genesis 18:1). Hebrews 11:9 remembers Abraham living in tents with Isaac and Jacob.",
      world:
        "Letters from Mari, on the Euphrates (18th century BCE), describe tribal herders who moved their flocks between steppe pastures and towns, keeping ties with both — a way of life much like the one Genesis describes.",
      theirEyes:
        "Goat-hair tents could be rolled up and loaded on donkeys in a morning. Home was wherever there was grass and water.",
    },
    confidence: "settled",
    references: ["Genesis 12:8", "Genesis 18:1", "Hebrews 11:9"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "D. E. Fleming, Democracy's Ancient Ancestors: Mari and Early Collective Governance (Cambridge, 2004)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-028",
    era: "patriarchs",
    level: 6,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Genesis 12, where did Abram build his first altar in Canaan, by the oak of Moreh?",
    choices: ["Beersheba", "Hebron", "Jerusalem", "Shechem"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 12:6–7: “Abram passed through the land to the place of Shechem, to the oak of Moreh.” There Yahweh promises the land to his offspring, and Abram builds an altar. His next altar is near Bethel (12:8); Hebron comes later (13:18).",
      world:
        "Shechem is Tell Balata, beside modern Nablus. In the Middle Bronze Age it was a powerful fortified city, and an Egyptian stela of the official Sobek-khu, from the reign of Senusret III (19th century BCE), describes a campaign against a land called “Sekmem,” which most scholars identify with Shechem.",
      theirEyes:
        "A great tree by a well-known city was a natural landmark and meeting place — a fitting spot to mark a promise with a pile of stones.",
    },
    confidence: "settled",
    references: ["Genesis 12:6–8", "Genesis 13:18"],
    sources: [
      scripture,
      { kind: "primary", citation: "Stela of Sobek-khu, from Abydos (Manchester Museum), reign of Senusret III" },
      { kind: "reference", citation: "“Shechem,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-029",
    era: "patriarchs",
    level: 6,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "How many trained men did Abram lead out to rescue his nephew Lot from the invading kings?",
    choices: ["Twelve", "Seventy", "318", "One thousand"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 14:14: “he led out his three hundred eighteen trained men, born in his house, and pursued as far as Dan.” He recovers Lot and the goods, then refuses to keep the king of Sodom's share — not “a thread nor a sandal strap” (14:23).",
      theirEyes:
        "A herding chief who could field over three hundred armed men from his own household was a force that city kings had to respect.",
      tradition: {
        christian:
          "The Epistle of Barnabas (early 2nd century) reads the number in Greek letters: 18 as IH, the first letters of “Jesus,” and 300 as T, shaped like the cross (Barnabas 9.7–8).",
      },
    },
    confidence: "settled",
    references: ["Genesis 14:13–16", "Genesis 14:21–24"],
    sources: [scripture, { kind: "primary", citation: "Epistle of Barnabas 9.7–8" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-030",
    era: "patriarchs",
    level: 6,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis 14:14 says Abram chased the invading kings “as far as Dan.” According to Judges 18:29, what was that city called before the tribe of Dan renamed it?",
    choices: ["Luz", "Laish", "Kiriath Arba", "Jebus"],
    answer: 1,
    explanation: {
      textSays:
        "Judges 18:29: “They called the name of the city Dan, after the name of Dan their father, who was born to Israel; however the name of the city used to be Laish.” Luz was the old name of Bethel (Genesis 28:19), Kiriath Arba of Hebron (Genesis 23:2), and Jebus of Jerusalem (Judges 19:10).",
      world:
        "The site is Tel Dan, by the springs of the Jordan in northern Israel, excavated for decades by Avraham Biran. Its Middle Bronze Age city had a mudbrick gate with an arched entrance, from roughly the 18th century BCE.",
      theirEyes:
        "For an Israelite listener, Dan was the northern edge of the land — the frontier in the saying “from Dan even to Beersheba” (Judges 20:1).",
      debate:
        "Genesis uses the city's later name. Many traditional readers explain this as a later scribe updating the place name for readers; critical scholars take it as a sign that the story was written down after the tribe of Dan moved north. Either way, the text itself gives the old name as Laish.",
    },
    confidence: "settled",
    references: ["Genesis 14:14", "Judges 18:27–29", "Genesis 28:19", "Genesis 23:2", "Judges 19:10", "Judges 20:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "A. Biran, Biblical Dan (Israel Exploration Society / Hebrew Union College, 1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "pat-031",
    era: "patriarchs",
    level: 7,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis 14 says Abram's allies Mamre, Eshcol and Aner belonged to which people?",
    choices: ["The Amorites", "The Egyptians", "The Philistines", "The Edomites"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 14:13: Abram lived “by the oaks of Mamre, the Amorite, brother of Eshcol and brother of Aner,” and these men were his allies.",
      world:
        "Amorites (Akkadian Amurru, “westerners”) were West Semitic-speaking peoples who spread across Syria and Mesopotamia around 2000 BCE. Amorite dynasties ruled great cities, including Babylon under Hammurabi and Mari under Zimri-Lim, and many Amorites lived as tribal herders.",
      theirEyes:
        "For a herdsman far from home, a treaty with local chiefs was as valuable as a well: it meant someone would ride with you when trouble came.",
    },
    confidence: "settled",
    references: ["Genesis 14:13", "Genesis 14:24"],
    sources: [scripture, { kind: "reference", citation: "“Amorite,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-032",
    era: "patriarchs",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the covenant of Genesis 15, how long does God say Abram's descendants will be afflicted in a land not theirs?",
    choices: ["Forty years", "Seventy years", "Four hundred years", "A thousand years"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 15:13 foretells that Abram's offspring will be foreigners, serving and afflicted, for “four hundred years.” Stephen repeats 400 (Acts 7:6), while Exodus 12:40 and Galatians 3:17 speak of 430 years.",
      theirEyes:
        "A promise of land came with a warning: the family would wait generations, and suffer, before it came true.",
      tradition: {
        jewish:
          "Josephus solves the difference by counting 430 years from Abraham's arrival in Canaan, but only 215 years from Jacob's move into Egypt (Antiquities 2.15.2). The Greek Septuagint already points that way: its Exodus 12:40 counts the 430 years in Egypt and in Canaan.",
      },
    },
    confidence: "settled",
    references: ["Genesis 15:13–16", "Exodus 12:40", "Acts 7:6", "Galatians 3:17"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 2.15.2 (2.318)" },
      { kind: "primary", citation: "Septuagint, Exodus 12:40" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-033",
    era: "patriarchs",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Genesis 16:11, what does the name Ishmael mean?",
    choices: ["Son of laughter", "God sees", "God hears", "Father of many"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 16:11: “You shall call his name Ishmael, because Yahweh has heard your affliction.” Yishma-el means “God hears.” Hagar then names God the one who sees (16:13), and Ishmael grows up an archer in the wilderness of Paran (21:20–21).",
      world:
        "Names built on a verb plus “El” (God), such as Yishma-El, were common among West Semitic peoples in the second millennium BCE.",
      theirEyes:
        "A runaway servant alone by a desert spring was told her unborn son's very name would be proof that someone had listened.",
      tradition: {
        jewish:
          "Josephus says Ishmael's twelve sons settled the land from the Euphrates to the Red Sea, called Nabatene, and were the ancestors of the Arab tribes (Antiquities 1.12.4).",
      },
    },
    confidence: "settled",
    references: ["Genesis 16:11–13", "Genesis 21:20–21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.12.4 (1.220–221)" },
      { kind: "reference", citation: "“Ishmael,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-034",
    era: "patriarchs",
    level: 7,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis says Ishmael was circumcised alongside Abraham. How old was Ishmael?",
    choices: ["Eight days", "Thirteen", "Twenty", "Ninety-nine"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 17:25: “Ishmael, his son, was thirteen years old when he was circumcised.” Abraham was ninety-nine (17:24); later, Isaac is circumcised at eight days old (21:4).",
      world:
        "Circumcision was practised by several peoples of the region — Jeremiah 9:25–26 lists Egypt, Edom, Ammon and Moab alongside Judah — and the age at which it was done differed between them.",
      theirEyes:
        "On a single day every male in the camp, from the old chief to the household servants, took on the same mark.",
      tradition: {
        jewish:
          "Josephus notes that in his day Jews circumcised on the eighth day, while the Arabs circumcised after the thirteenth year — because Ishmael, their ancestor, was circumcised at that age (Antiquities 1.12.2).",
      },
    },
    confidence: "settled",
    references: ["Genesis 17:23–27", "Genesis 21:4", "Jeremiah 9:25–26"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.12.2 (1.214)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-035",
    era: "patriarchs",
    level: 7,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: historians agree that Abraham lived around 2000 BCE.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis gives no date in our sense. Adding up its figures with later ones (such as 1 Kings 6:1 and Exodus 12:40) produces a traditional date for Abraham in the 21st–20th centuries BCE.",
      world:
        "Mid-20th-century scholars such as W. F. Albright linked Abraham to Middle Bronze Age Amorite migrations. In the 1970s Thomas L. Thompson and John Van Seters argued that the claimed parallels were weak and that the stories reflect the 1st millennium BCE. No inscription names Abraham.",
      theirEyes:
        "People in Abraham's world reckoned time by kings and family generations, not by numbered years.",
      debate:
        "Some scholars still see genuine early memories in the stories, others see later compositions with older elements; others doubt any datable historical core. There is no consensus.",
    },
    confidence: "settled",
    references: ["1 Kings 6:1", "Exodus 12:40"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "T. L. Thompson, The Historicity of the Patriarchal Narratives (de Gruyter, 1974)" },
      { kind: "scholarship", citation: "J. Van Seters, Abraham in History and Tradition (Yale, 1975)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "pat-036",
    era: "patriarchs",
    level: 8,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Genesis 17:1, by what title does God introduce himself to Abram?",
    choices: ["God Most High (El Elyon)", "The God who sees (El Roi)", "God Almighty (El Shaddai)", "The Everlasting God (El Olam)"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 17:1: “I am God Almighty. Walk before me and be blameless.” Exodus 6:3 later says God appeared to Abraham, Isaac and Jacob as God Almighty, but was not known to them by the name Yahweh. (El Elyon is Melchizedek's title, El Roi is Hagar's, and El Olam is invoked at Beersheba.)",
      world:
        "The meaning of Shaddai is uncertain; proposals link it to a word for “mountain” or to the idea of sufficiency.",
      theirEyes:
        "Each meeting with God in Abraham's story seemed to bring a new name — as if the family were still learning who their God was.",
      tradition: {
        jewish:
          "The Greek Septuagint, the Bible of many Jews in Jesus' day, does not translate El Shaddai here; it reads simply “I am your God.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 17:1", "Exodus 6:3", "Genesis 14:18", "Genesis 16:13", "Genesis 21:33"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 17:1 (L. C. L. Brenton, The Septuagint Version of the Old Testament, 1844)" },
      { kind: "reference", citation: "“El Shaddai,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-037",
    era: "patriarchs",
    level: 8,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What did Abraham serve the three visitors under the trees of Mamre?",
    choices: ["Roast lamb with bitter herbs", "Fish and barley loaves", "Dates, figs and wine", "A calf, cakes of fine meal, butter and milk"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 18:6–8: Sarah makes cakes from “three seahs of fine meal,” a servant prepares “a tender and good calf,” and Abraham sets out butter (or curds), milk and the meat, standing by while they eat.",
      world:
        "For most households meat was an occasional luxury, eaten at feasts and sacrifices; slaughtering a calf was a lavish welcome for honoured guests.",
      theirEyes:
        "Strangers appearing at noon could not be sent on hungry. The whole camp ran — flour, fire, the best calf — to put on a feast.",
      tradition: {
        jewish: "Josephus says the visitors were angels who only gave the appearance of eating (Antiquities 1.11.2).",
        christian:
          "Hebrews 13:2 urges hospitality because some have entertained angels without knowing it. Andrei Rublev's famous icon (early 15th century) paints the three visitors as an image of the Trinity.",
      },
    },
    confidence: "settled",
    references: ["Genesis 18:1–8", "Hebrews 13:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.11.2 (1.196–197)" },
      { kind: "scholarship", citation: "P. J. King and L. E. Stager, Life in Biblical Israel (Westminster John Knox, 2001)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-038",
    era: "patriarchs",
    level: 8,
    category: "story",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Abraham persuaded God to spare Sodom if just one righteous person could be found there.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Abraham bargains down from fifty righteous people to forty-five, forty, thirty, twenty and finally ten: “What if ten are found there?” God agrees not to destroy the city for the sake of ten (Genesis 18:23–32). Abraham stops there; he never asks about one.",
      theirEyes:
        "Bargaining was how every deal was done in the ancient Near East — but haggling with God over a city's fate took astonishing boldness.",
      tradition: {
        shared:
          "Abraham's question, “Shouldn't the Judge of all the earth do right?” (Genesis 18:25), became a classic text on divine justice for Jewish and Christian readers alike.",
      },
    },
    confidence: "settled",
    references: ["Genesis 18:23–33"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-039",
    era: "patriarchs",
    level: 8,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to the prophet Ezekiel, what was “the iniquity of your sister Sodom”?",
    choices: [
      "Building a tower to reach heaven",
      "Pride and plenty, while ignoring the poor and needy",
      "Worshipping a golden calf",
      "Breaking the Sabbath",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Ezekiel 16:49: “this was the iniquity of your sister Sodom: pride, fullness of bread, and prosperous ease was in her and in her daughters. She also didn't strengthen the hand of the poor and needy.” The next verse adds that they were arrogant and did abominable things (16:50).",
      theirEyes:
        "For Ezekiel's hearers in the 6th century BCE, Sodom was a byword — and comparing Jerusalem to it was a shocking insult.",
      tradition: {
        jewish:
          "The Wisdom of Solomon (c. 1st century BCE) compares Egypt with an earlier people who refused to receive strangers and were struck with blindness at a righteous man's door — an allusion to Sodom and Lot (Wisdom 19:13–17).",
        christian:
          "Jesus says a town that refuses to welcome his disciples will fare worse than Sodom (Matthew 10:14–15); Jude 7 emphasises Sodom's sexual immorality.",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 16:49–50", "Genesis 19:1–11", "Matthew 10:14–15", "Jude 7"],
    sources: [scripture, { kind: "primary", citation: "Wisdom of Solomon 19:13–17" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-040",
    era: "patriarchs",
    level: 8,
    category: "archaeology",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the Roman emperor Constantine ordered a church built at Mamre, where Genesis says Abraham met three visitors.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays: "Genesis 18:1 says Yahweh appeared to Abraham “by the oaks of Mamre.”",
      world:
        "Eusebius records that in the 320s Constantine ordered the idols and pagan altar at Mamre removed and a church built there (Life of Constantine 3.51–53). Excavations by E. Mader (1926–28) at Ramat el-Khalil, north of Hebron, uncovered a large stone enclosure, usually dated to Herod's time, with the remains of Constantine's church inside it.",
      theirEyes:
        "By Roman times Mamre was a busy shrine and market where Jews, Christians and pagans all came to honour the place of Abraham's tree.",
      tradition: {
        jewish:
          "Josephus describes a huge terebinth six furlongs from Hebron, and says “the report goes, that this tree has continued ever since the creation of the world” (Jewish War 4.9.7).",
      },
    },
    confidence: "settled",
    references: ["Genesis 18:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Eusebius, Life of Constantine 3.51–53" },
      { kind: "primary", citation: "Josephus, Jewish War 4.9.7 (4.533)" },
      { kind: "archaeology", citation: "E. Mader, Mambre: Die Ergebnisse der Ausgrabungen im heiligen Bezirk Ramet el-Halil (1957)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "pat-041",
    era: "patriarchs",
    level: 9,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Abimelech, the king who took Sarah into his household in Genesis 20, ruled which town?",
    choices: ["Salem", "Gerar", "Sodom", "Damascus"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 20:2: “Abimelech king of Gerar sent, and took Sarah.” Warned in a dream, he returns her untouched. Genesis 21:32–34 then calls his homeland “the land of the Philistines.”",
      world:
        "Gerar is usually identified with Tel Haror, north-west of Beersheba, a large Middle Bronze Age city, though other sites have been proposed. The Philistines are known to have settled on the coast only around the 12th century BCE, so most scholars see that label as the storyteller's later geography.",
      theirEyes:
        "Gerar sat on the edge of the southern desert, where herders came to trade and water their flocks — and depended on the local king's goodwill.",
    },
    confidence: "settled",
    references: ["Genesis 20:1–18", "Genesis 21:32–34"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "E. D. Oren, excavations at Tel Haror (from 1982)" },
      { kind: "reference", citation: "“Philistine,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-042",
    era: "patriarchs",
    level: 9,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Letters from Mari mention a town near Harran with the same name as which member of Abraham's family?",
    choices: ["Sarai", "Lot", "Eliezer", "Nahor"],
    answer: 3,
    explanation: {
      textSays:
        "Nahor is both Abraham's grandfather and his brother (Genesis 11:24–26). Abraham's servant goes to Mesopotamia (Hebrew Aram-naharaim), “to the city of Nahor,” to find a wife for Isaac (Genesis 24:10).",
      world:
        "In the Mari archives (18th century BCE), Nahur appears as a town of northern Mesopotamia, and later Assyrian texts mention Til-Nahiri (“mound of Nahur”) in the Harran region. Other names in Abraham's family tree, such as Serug (Assyrian Sarugi) and Terah, also echo place names in the same area.",
      theirEyes:
        "For a family remembered as coming from the Harran region, the names of people and the names of nearby towns could easily overlap.",
    },
    confidence: "mainstream",
    references: ["Genesis 11:24–26", "Genesis 24:10"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Nahor,” Encyclopaedia Judaica (2nd ed., 2007)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-043",
    era: "patriarchs",
    level: 9,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Abraham gave King Abimelech seven ewe lambs as proof that he had dug a well. What was the place called?",
    choices: ["Beer-lahai-roi", "Bethel", "Beersheba", "Hebron"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 21:30–31: the lambs are “a witness to me, that I have dug this well,” and the place is called Beersheba “because they both swore an oath there.” Abraham plants a tamarisk tree and calls on “Yahweh, the Everlasting God” (21:33).",
      world:
        "Be'er means “well,” and sheva can mean both “seven” and “oath” — the story plays on both. The name survives in the modern city; nearby Tel Be'er Sheva is an excavated Iron Age town with a deep well by its gate.",
      theirEyes:
        "In the dry south a well was worth more than gold. Digging one was hard labour, and a witnessed oath was the only title deed a herder could get.",
    },
    confidence: "settled",
    references: ["Genesis 21:22–34"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Y. Aharoni, excavations at Tel Beersheba (1969–1976); UNESCO World Heritage, “Biblical Tels – Megiddo, Hazor, Beer Sheba”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-044",
    era: "patriarchs",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After the ram was offered in Isaac's place, what name did Abraham give the place?",
    choices: ["Peniel", "Beer-lahai-roi", "Bethel", "Yahweh Will Provide"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 22:14: Abraham names the place “Yahweh Will Provide” (Yahweh Yireh), echoing his earlier words to Isaac: “God will provide himself the lamb for a burnt offering, my son” (22:8). A ram is found “caught in the thicket by his horns” (22:13).",
      theirEyes:
        "Up the mountain, Isaac carried the wood and asked where the lamb was. Coming down, the place itself carried the answer.",
      tradition: {
        jewish:
          "The Book of Jubilees (2nd century BCE) has Abraham call the place “The Lord hath seen” and identifies it as Mount Zion (Jubilees 18:13).",
        christian:
          "Many Christians read Abraham's words about God providing the lamb together with John the Baptist calling Jesus the Lamb of God (John 1:29).",
      },
    },
    confidence: "settled",
    references: ["Genesis 22:8", "Genesis 22:13–14", "John 1:29"],
    sources: [scripture, { kind: "primary", citation: "Jubilees 18:13 (R. H. Charles translation)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-045",
    era: "patriarchs",
    level: 9,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Chedorlaomer, leader of the kings who captured Lot in Genesis 14, was king of which land?",
    choices: ["Moab", "Elam", "Egypt", "Philistia"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 14:1 lists “Amraphel, king of Shinar; Arioch, king of Ellasar; Chedorlaomer, king of Elam; and Tidal, king of Goiim.” Chedorlaomer leads the campaign (14:4–5).",
      world:
        "Elam lay in south-western Iran, east of Babylonia. The name looks genuinely Elamite: Elamite royal names beginning Kutir- (Kudur-) are well known, and Lagamar was an Elamite deity. But no king called Chedorlaomer has been found outside Genesis.",
      theirEyes:
        "For the small kings around the Dead Sea, an army from the distant east was a reminder that great empires could reach even their valleys.",
      debate:
        "Older attempts to identify Amraphel with Hammurabi of Babylon have been widely abandoned, and the historical basis of the Genesis 14 campaign is disputed.",
    },
    confidence: "settled",
    references: ["Genesis 14:1–12"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "C. Westermann, Genesis 12–36: A Commentary (Augsburg, 1985), on Genesis 14" },
      { kind: "reference", citation: "“Elam,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "pat-046",
    era: "patriarchs",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Book of Jubilees, who urges God to test Abraham by asking him to offer Isaac?",
    choices: ["The angel Gabriel", "Prince Mastema", "Melchizedek", "Ishmael"],
    answer: 1,
    explanation: {
      textSays: "Genesis 22:1 says only that “God tested Abraham,” without explaining why.",
      world:
        "Jubilees, a retelling of Genesis and Exodus usually dated to the mid-2nd century BCE, fills that gap. Prince Mastema says Abraham loves Isaac “above all things else” and challenges God to test him (Jubilees 17:16). When Abraham obeys, “the prince Mastêmâ was put to shame” (18:12).",
      theirEyes:
        "Readers in the 2nd century BCE knew the opening of Job, where an accuser challenges God about a righteous man. Jubilees gives Abraham's test the same shape.",
      tradition: {
        jewish:
          "A Dead Sea Scroll fragment (4Q225, “Pseudo-Jubilees”) also brings the Prince of Mastemah into the story of Isaac's binding.",
      },
    },
    confidence: "settled",
    references: ["Genesis 22:1", "Job 1:6–12"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 17:15–18; 18:12 (R. H. Charles translation)" },
      { kind: "scholarship", citation: "J. A. Fitzmyer, “The Sacrifice of Isaac in Qumran Literature,” Biblica 83 (2002): 211–229" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-047",
    era: "patriarchs",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Genesis Apocryphon, a Dead Sea Scroll, what does Abram dream about as he enters Egypt?",
    choices: ["Seven fat cows and seven thin cows", "A ladder reaching to heaven", "A cedar and a date palm", "A burning bush"],
    answer: 2,
    explanation: {
      textSays: "Genesis 12:11–13 has Abram fear for his life in Egypt, but gives no reason beyond Sarai's beauty.",
      world:
        "The Genesis Apocryphon is an Aramaic retelling of Genesis found in Qumran Cave 1 (1QapGen). In it Abram dreams that men try to cut down a cedar but spare it for the sake of a date palm; he understands the cedar as himself and the palm as Sarai. The scroll also adds a poetic description of Sarai's beauty.",
      theirEyes:
        "A Jewish reader of the time would have seen Abram as a dreamer and interpreter like Joseph and Daniel — a man guided by God even in his fears.",
      tradition: {
        jewish:
          "The dream explains why Abram said Sarai was his sister: he was warned in advance, so his plan becomes a response to a divine sign.",
      },
    },
    confidence: "settled",
    references: ["Genesis 12:11–13"],
    sources: [
      scripture,
      { kind: "primary", citation: "Genesis Apocryphon (1QapGen ar, 1Q20), cols. 19–20" },
      { kind: "scholarship", citation: "L. H. Schiffman, Reclaiming the Dead Sea Scrolls (Jewish Publication Society, 1994), on the Genesis Apocryphon" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-048",
    era: "patriarchs",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which New Testament letter quotes Genesis 15:6 and links it to Abraham offering Isaac on the altar?",
    choices: ["Romans", "James", "Galatians", "1 Peter"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 15:6: “He believed in Yahweh, who credited it to him for righteousness.” James 2:21–23 asks, “Wasn't Abraham our father justified by works, in that he offered up Isaac his son on the altar?” and then quotes Genesis 15:6. Paul quotes the same verse in Romans 4:3 and Galatians 3:6, but to argue that Abraham was counted righteous through faith, before he was circumcised (Romans 4:10) and apart from the works of the law.",
      theirEyes:
        "For early Christians, one short verse about Abraham's faith became a battleground over how faith and deeds fit together.",
      tradition: {
        jewish:
          "James was not the first to join the two: in 1 Maccabees 2:52 the dying priest Mattathias asks whether Abraham was not found faithful when tested, and it was counted to him as righteousness — echoing the wording of Genesis 15:6.",
      },
    },
    confidence: "settled",
    references: ["Genesis 15:6", "James 2:21–23", "Romans 4:3", "Romans 4:10", "Galatians 3:6", "1 Maccabees 2:52"],
    sources: [scripture, { kind: "primary", citation: "1 Maccabees 2:52" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-049",
    era: "patriarchs",
    level: 10,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Genesis says Isaac and Ishmael buried Abraham together in the cave of Machpelah.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 25:8–9: Abraham “died at a good old age, an old man, and full of years,” and “Isaac and Ishmael, his sons, buried him in the cave of Machpelah.” He was 175 (25:7) and was laid beside Sarah (25:10).",
      world:
        "Burial in a family tomb kept the dead among their kin — the sense of the phrase “gathered to his people.” Multi-generation cave tombs are common in the archaeology of the region.",
      theirEyes:
        "Two half-brothers, raised apart after Ishmael and Hagar were sent away, met again at their father's grave.",
    },
    confidence: "settled",
    references: ["Genesis 25:7–10", "Genesis 21:9–14"],
    sources: [scripture, { kind: "scholarship", citation: "P. J. King and L. E. Stager, Life in Biblical Israel (Westminster John Knox, 2001)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-050",
    era: "patriarchs",
    level: 10,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Through his later wife Keturah, Genesis makes Abraham the ancestor of which people?",
    choices: ["The Midianites", "The Edomites", "The Moabites", "The Philistines"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 25:1–2: “Abraham took another wife, and her name was Keturah. She bore him Zimran, Jokshan, Medan, Midian, Ishbak, and Shuah.” Abraham gives them gifts and sends them east, away from Isaac (25:6). Edom traces back to Esau, and Moab to Lot (Genesis 19:37).",
      world:
        "Midian is usually placed in north-western Arabia, east of the Gulf of Aqaba, along the incense routes.",
      theirEyes:
        "For Israelites, the desert traders and herders to the south-east were not strangers but distant cousins — family by way of Abraham.",
      tradition: {
        shared:
          "The link matters later: Moses marries the daughter of a priest of Midian (Exodus 2:15–21), so Genesis makes his in-laws relatives through Abraham.",
      },
    },
    confidence: "settled",
    references: ["Genesis 25:1–6", "Genesis 19:37", "Exodus 2:15–21"],
    sources: [scripture, { kind: "reference", citation: "“Midianite,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
