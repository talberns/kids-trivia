import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Hebrew Bible / Old Testament — quotations from the World English Bible (public domain)" } as const;

export const patriarchs: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "pat-001",
    era: "patriarchs",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Genesis, which city did Abram's family come from?",
    choices: ["Ur of the Chaldeans", "Nineveh", "Memphis", "Damascus"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 11:31 says Terah took his son Abram and the family out of “Ur of the Chaldees” to go to the land of Canaan.",
      world:
        "Ur is usually identified with the great Sumerian city in southern Iraq, excavated by Leonard Woolley in the 1920s–30s. The label “of the Chaldeans” fits a later age: the Chaldeans are only attested from the first millennium BCE, so the phrase reflects the time the story was written down.",
      theirEyes:
        "Growing up in Ur meant living in the shadow of a towering ziggurat dedicated to the moon god Nanna, in one of the oldest and most literate cities on earth.",
      tradition: {
        jewish:
          "A well-known midrash (Genesis Rabbah 38:13) tells of young Abraham smashing the idols in his father's shop — a story not found in the Bible itself.",
        christian:
          "The New Testament holds up Abraham's departure as a model of faith: he went out “not knowing where he went” (Hebrews 11:8).",
      },
      debate:
        "A minority view, with a long local tradition behind it, places Abraham's Ur in the north near Harran (around Şanlıurfa in Turkey) rather than at Sumerian Ur.",
    },
    confidence: "mainstream",
    references: ["Genesis 11:31", "Hebrews 11:8"],
    sources: [
      scripture,
      { kind: "primary", citation: "Genesis Rabbah 38:13" },
      { kind: "archaeology", citation: "C. L. Woolley, excavations at Ur (1922–1934); “Ur,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-002",
    era: "patriarchs",
    level: 1,
    category: "daily-life",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: in Abraham's time, people paid for things with silver coins.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "When Abraham buys a burial cave, he “weighed” 400 shekels of silver for the seller (Genesis 23:16). Later the Torah forbids keeping two different sets of weights (Deuteronomy 25:13).",
      world:
        "Coins had not been invented. The Greek historian Herodotus credits the Lydians of western Anatolia with the first coins, and the earliest finds date to around the 7th century BCE. Before that a shekel was a unit of weight — roughly 11 grams, though standards varied — and silver was weighed on a balance.",
      theirEyes:
        "A trader carried pieces of silver in a pouch and a set of weights in a bag. Every deal began at the scales — and often with an argument over whose weights were honest.",
    },
    confidence: "settled",
    references: ["Genesis 23:16", "Deuteronomy 25:13"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 1.94" },
      { kind: "reference", citation: "“Coin,” Encyclopaedia Britannica (origins of coinage in Lydia)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-003",
    era: "patriarchs",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Genesis 17, what is the sign of the covenant God gives Abraham?",
    choices: ["Circumcision", "A rainbow", "A stone pillar", "Keeping the Sabbath"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 17:10–11 makes circumcision of every male “a token of the covenant” (Hebrew ot, “sign”). In the same chapter Abram is renamed Abraham and Sarai becomes Sarah. (The rainbow is the sign of the covenant with Noah, Genesis 9.)",
      world:
        "Abraham's family was not the only people to practise circumcision: Egyptian tomb art, such as the tomb of Ankhmahor at Saqqara, depicts it, and Herodotus reported it among Egyptians. What Genesis adds is its meaning — the mark of a covenant with one God.",
      theirEyes:
        "For a family of herders moving through Canaan, the sign marked who belonged to this household and its promise, wherever the tents were pitched.",
      tradition: {
        jewish:
          "Brit milah is performed on the eighth day after birth (Genesis 17:12) and remains one of Judaism's central rites.",
        christian:
          "The early church debated whether non-Jewish believers had to be circumcised and decided they did not (Acts 15).",
      },
    },
    confidence: "settled",
    references: ["Genesis 17:5–15", "Genesis 9:12–17", "Acts 15"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 2.104" },
      { kind: "archaeology", citation: "Tomb of Ankhmahor, Saqqara (Sixth Dynasty) — circumcision relief" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-004",
    era: "patriarchs",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "What did Abraham buy as a burial place for Sarah?",
    choices: ["The cave of Machpelah", "Mount Moriah", "The well of Beersheba", "A tomb near Bethlehem"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 23 describes Abraham buying the cave of Machpelah near Hebron from Ephron the Hittite. Abraham, Isaac, Rebekah, Leah and Jacob are later buried there too (Genesis 49:29–31; 50:13).",
      world:
        "The deal is done publicly, before the people at the city gate — the ancient equivalent of registering a property. The traditional site in Hebron is enclosed by a massive wall generally attributed to Herod the Great.",
      theirEyes:
        "Abraham calls himself “a stranger and a foreigner” in the land (Genesis 23:4). Owning even a burial cave gave his family its first permanent foothold.",
      tradition: {
        shared:
          "Known in Hebrew as Me'arat HaMachpelah and in Arabic as the Ibrahimi Mosque, the site is revered by Jews, Christians and Muslims, who all honour Abraham.",
      },
    },
    confidence: "mainstream",
    references: ["Genesis 23", "Genesis 49:29–31", "Genesis 50:13"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Cave of the Patriarchs (Machpelah),” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-005",
    era: "patriarchs",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Isaac's Hebrew name (Yitzhak) is connected to which idea?",
    choices: ["Laughter", "Gift", "Promise", "A ram"],
    answer: 0,
    explanation: {
      textSays:
        "Sarah laughs at the promise of a son in her old age (Genesis 18:12), and at his birth says, “God has made me laugh” (Genesis 21:6). Yitzhak means “he laughs.”",
      world:
        "Names in the ancient Near East often recorded the circumstances of a birth or a hope for the child, and many names in Genesis come with such a story attached.",
      theirEyes:
        "Genesis gives Sarah's age as ninety (Genesis 17:17). A first child at that age would have been the talk of every campfire.",
      tradition: {
        christian: "Paul calls believers “children of promise,” like Isaac (Galatians 4:28).",
      },
    },
    confidence: "settled",
    references: ["Genesis 17:17", "Genesis 18:12", "Genesis 21:6", "Galatians 4:28"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "pat-006",
    era: "patriarchs",
    level: 2,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Who was the king of Salem who brought out bread and wine and blessed Abram?",
    choices: ["Melchizedek", "Abimelech", "Lot", "Pharaoh"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 14:18–20: Melchizedek, king of Salem and “priest of God Most High” (El Elyon), blesses Abram, and Abram — as most readers understand it (compare Hebrews 7:4) — gives him a tenth of everything.",
      world:
        "“Elyon” (“Most High”) was also used as a divine title outside Israel. Psalm 76:2 (76:3 in Hebrew Bibles) identifies Salem with Zion, so tradition places Melchizedek in Jerusalem.",
      theirEyes:
        "A wandering herdsman honoured by a city's priest-king was a striking scene: it showed even settled kings had to reckon with Abram.",
      tradition: {
        jewish:
          "Some rabbinic sources identify Melchizedek with Noah's son Shem (Babylonian Talmud, Nedarim 32b).",
        christian:
          "Hebrews 5–7 presents Jesus as “a priest forever after the order of Melchizedek,” quoting Psalm 110:4.",
      },
    },
    confidence: "settled",
    references: ["Genesis 14:18–20", "Psalm 76:2", "Psalm 110:4", "Hebrews 7"],
    sources: [scripture, { kind: "primary", citation: "Babylonian Talmud, Nedarim 32b" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-007",
    era: "patriarchs",
    level: 2,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Where did Terah's family settle on the way from Ur to Canaan?",
    choices: ["Harran", "Babylon", "Jericho", "Thebes"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 11:31–32 says the family settled in Harran and Terah died there; Abram left Harran for Canaan at seventy-five (Genesis 12:4).",
      world:
        "Harran lay in northern Mesopotamia, in today's south-eastern Turkey, on major trade routes. Like Ur, it was a famous centre of moon-god worship (the god Sin) — a link historians have long noticed.",
      theirEyes:
        "Leaving Harran meant leaving a caravan city with markets and temples for the hill country of Canaan, with no city of your own.",
      tradition: {
        christian: "Stephen retells the journey from Mesopotamia through Harran in his speech in Acts 7:2–4.",
      },
    },
    confidence: "settled",
    references: ["Genesis 11:31–32", "Genesis 12:4", "Acts 7:2–4"],
    sources: [scripture, { kind: "reference", citation: "“Harran,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-008",
    era: "patriarchs",
    level: 2,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Sarai gave her servant Hagar to Abram so that he could have a child. Where was Hagar from?",
    choices: ["Egypt", "Moab", "Assyria", "Philistia"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 16:1–3 calls Hagar an Egyptian servant. She bears Ishmael (Genesis 16:15). When she flees into the desert, she calls God “a God who sees” (Genesis 16:13).",
      world:
        "This was a known legal custom. An Old Assyrian marriage contract from Kanesh (in Anatolia) says that if the wife has no children she will acquire a slave woman to bear them, and the Laws of Hammurabi (§§144–147) deal with similar situations.",
      theirEyes:
        "Hagar, a foreigner in the household, had no say in the arrangement — which makes it striking that the story gives her her own meeting with God.",
      tradition: {
        jewish: "One midrash makes Hagar a daughter of Pharaoh (Genesis Rabbah 45:1).",
        christian: "Paul turns Hagar and Sarah into an allegory of two covenants (Galatians 4:21–31).",
      },
    },
    confidence: "settled",
    references: ["Genesis 16", "Galatians 4:21–31"],
    sources: [
      scripture,
      { kind: "primary", citation: "Laws of Hammurabi §§144–147" },
      { kind: "primary", citation: "Old Assyrian marriage contract from Kanesh (Kültepe), 19th century BCE" },
      { kind: "primary", citation: "Genesis Rabbah 45:1" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-009",
    era: "patriarchs",
    level: 2,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis traces which neighbouring nation back to Jacob's twin brother, Esau?",
    choices: ["Edom", "Egypt", "Aram", "Philistia"],
    answer: 0,
    explanation: {
      textSays: "Genesis 36:1 introduces “the generations of Esau (that is, Edom).”",
      world:
        "Edom lay south-east of the Dead Sea. Centuries later its people, called Idumeans in Greek, were absorbed into Judea — and according to Josephus, the family of Herod the Great was Idumean.",
      theirEyes:
        "To an Israelite, Edom was the “brother” nation: close enough to share a family story, close enough to be a bitter rival.",
      tradition: {
        jewish: "In later rabbinic literature, “Edom” became a code name for Rome.",
        christian:
          "Paul quotes “Jacob I loved, but Esau I hated” (Malachi 1:2–3) in Romans 9:13 when discussing God's choice.",
      },
    },
    confidence: "settled",
    references: ["Genesis 25:25–30", "Genesis 36:1", "Malachi 1:2–3", "Romans 9:13"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.1.3" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-010",
    era: "patriarchs",
    level: 2,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After wrestling through the night, Jacob receives a new name. What is it?",
    choices: ["Israel", "Abraham", "Judah", "Joseph"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 32:28: “Your name will no longer be called Jacob, but Israel; for you have fought with God and with men, and have prevailed.”",
      world:
        "The earliest undisputed mention of “Israel” outside the Bible is on the Merneptah Stele, an Egyptian victory inscription from about 1208 BCE.",
      theirEyes:
        "Jacob was on his way home to face Esau, the brother he had cheated. The struggle at the Jabbok river came the night before that dreaded meeting.",
      tradition: {
        jewish:
          "The Torah links the custom of not eating the sciatic nerve (gid hanasheh) to this story (Genesis 32:32; 32:33 in Hebrew Bibles, where the whole episode is 32:23–33).",
        christian:
          "Charles Wesley's hymn “Come, O Thou Traveller Unknown” reads the wrestling as a picture of persistent prayer.",
      },
    },
    confidence: "settled",
    references: ["Genesis 32:22–32"],
    sources: [scripture, { kind: "archaeology", citation: "Merneptah Stele (Cairo, Egyptian Museum), c. 1208 BCE" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "pat-011",
    era: "patriarchs",
    level: 3,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "When Jacob's family fled from Laban, what did Rachel secretly take?",
    choices: ["Her father's household gods", "His signet ring", "The best lamb of his flock", "His birthright blessing"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 31:19 says Rachel stole the teraphim; when Laban searches, she hides them in the camel's saddle and sits on them (31:34).",
      world:
        "Teraphim were household images, probably small figurines connected with family religion. Their exact use is unclear.",
      theirEyes:
        "Household images were part of everyday life in the region — even in a family that knew the God of Abraham.",
      tradition: {
        jewish:
          "The medieval commentator Rashi suggests Rachel took them to wean her father away from idolatry (Rashi on Genesis 31:19).",
      },
      debate:
        "Earlier scholars argued from texts found at Nuzi that holding the household gods gave a claim to inheritance. Many scholars now doubt that parallel, and why Rachel took them is still debated.",
    },
    confidence: "debated",
    references: ["Genesis 31:19", "Genesis 31:34"],
    sources: [
      scripture,
      { kind: "primary", citation: "Rashi on Genesis 31:19" },
      { kind: "scholarship", citation: "M. Greenberg, “Another Look at Rachel's Theft of the Teraphim,” Journal of Biblical Literature 81 (1962)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-012",
    era: "patriarchs",
    level: 3,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "For how many pieces of silver was Joseph sold to the passing traders?",
    choices: ["Twenty", "Thirty", "Forty", "One hundred"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 37:28: Joseph is pulled from the pit and sold to traders for twenty pieces of silver. (Readers differ on whether the brothers or Midianite passers-by made the sale; in Genesis 45:4 Joseph tells his brothers “you sold” him.) The caravan was carrying spices, balm and myrrh to Egypt (37:25).",
      world:
        "Incense routes connected Arabia, Canaan and Egypt, and caravans of traders were a familiar sight along them.",
      theirEyes:
        "For a seventeen-year-old in a pit, the passing caravan was not a rescue — it was a one-way trip to a foreign slave market.",
      tradition: {
        christian:
          "Many Christian readers see Joseph — betrayed by his brothers for silver, later their saviour — as a foreshadowing of Jesus, who was betrayed for thirty pieces of silver (Matthew 26:15).",
      },
      debate:
        "Egyptologist Kenneth Kitchen argued that twenty shekels matches slave prices of the early second millennium BCE, before prices rose. Other scholars doubt such price comparisons can date the story.",
    },
    confidence: "settled",
    references: ["Genesis 37:25–28", "Matthew 26:15"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "K. A. Kitchen, On the Reliability of the Old Testament (Eerdmans, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-013",
    era: "patriarchs",
    level: 3,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Joseph married Asenath, the daughter of a priest of which Egyptian city?",
    choices: ["On (Heliopolis)", "Thebes", "Memphis", "Alexandria"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 41:45: Pharaoh names Joseph Zaphenath-paneah and gives him Asenath, daughter of Potiphera, priest of On.",
      world:
        "On, called Heliopolis (“sun city”) by the Greeks, was the great centre of the sun god Ra, near today's Cairo. Alexandria did not exist yet — it was founded by Alexander the Great in 331 BCE.",
      theirEyes:
        "A Hebrew shepherd's son marrying into a sun-priest's family was a dramatic leap up Egyptian society.",
      tradition: {
        shared:
          "An ancient romance, “Joseph and Aseneth,” imagines Asenath turning from Egypt's gods before marrying Joseph.",
      },
    },
    confidence: "settled",
    references: ["Genesis 41:45"],
    sources: [scripture, { kind: "reference", citation: "“Heliopolis,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-014",
    era: "patriarchs",
    level: 3,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In which region of Egypt did Jacob's family settle?",
    choices: ["Goshen", "Nubia", "Sinai", "The Faiyum"],
    answer: 0,
    explanation: {
      textSays: "Genesis 45:10 and 47:27 place Jacob's family in the land of Goshen.",
      world:
        "Goshen is generally placed in the eastern Nile Delta. Excavations at Tell el-Dab'a (ancient Avaris) there have revealed a large population of Canaanite (West Semitic) origin in the Middle Bronze Age.",
      theirEyes:
        "For herders from drought-stricken Canaan, the Delta's pasture and Nile water were a lifeline (Genesis 47:4).",
      debate:
        "The archaeology shows that people from Canaan settled in the eastern Delta; whether this has any connection to the story of Jacob's family is debated.",
    },
    confidence: "mainstream",
    references: ["Genesis 45:10", "Genesis 47:4", "Genesis 47:27"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "M. Bietak, Avaris: The Capital of the Hyksos (British Museum Press, 1996)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-015",
    era: "patriarchs",
    level: 3,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Genesis 22 says Abraham was told to take Isaac to a mountain in which land?",
    choices: ["The land of Moriah", "The land of Sinai", "Mount Carmel", "The Jordan valley"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 22:2 names “the land of Moriah.” 2 Chronicles 3:1 identifies Mount Moriah as the place where Solomon built the Temple.",
      world:
        "Child sacrifice is mentioned among Israel's neighbours — for example the king of Moab in 2 Kings 3:27 — and Israelite law forbids it (Leviticus 18:21; Deuteronomy 12:31).",
      theirEyes:
        "Readers in that world knew of gods who demanded children. A story in which God stops the knife spoke loudly to them.",
      tradition: {
        jewish:
          "Called the Akedah (“binding”), it is read on Rosh Hashanah, and the shofar recalls the ram caught in the thicket.",
        christian:
          "Christians have long read it as a foreshadowing of Jesus' sacrifice; Hebrews 11:17–19 praises Abraham's faith that God could raise the dead.",
      },
      debate:
        "Samaritan tradition places Moriah on Mount Gerizim, and many scholars think the link to the Temple Mount — made only in 2 Chronicles — came later.",
    },
    confidence: "settled",
    references: ["Genesis 22:1–19", "2 Chronicles 3:1", "2 Kings 3:27", "Hebrews 11:17–19"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
];
