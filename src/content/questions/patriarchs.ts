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
          "In the Book of Jubilees (2nd century BCE), young Abram burns his father's house of idols (Jubilees 12:12). Josephus says Abraham was the first to proclaim one Creator, reasoning from the irregular movements of the heavens (Antiquities 1.7.1).",
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
      { kind: "primary", citation: "Jubilees 12:12; Josephus, Antiquities of the Jews 1.7.1" },
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
          "Jesus was circumcised on the eighth day (Luke 2:21), as was John the Baptist (Luke 1:59). About 160 years earlier, under Antiochus IV, mothers were put to death for circumcising their sons (1 Maccabees 1:60–61), so for Jews of Jesus' day it was a mark of loyalty to the covenant.",
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
      { kind: "primary", citation: "1 Maccabees 1:60–61" },
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
          "Josephus explains the name Melchizedek as “righteous king” and identifies Salem with Jerusalem (Antiquities 1.10.2). A Dead Sea Scroll (11QMelchizedek) pictures Melchizedek as a heavenly figure who brings liberation at the end of days.",
        christian:
          "Hebrews 5–7 presents Jesus as “a priest forever after the order of Melchizedek,” quoting Psalm 110:4.",
      },
    },
    confidence: "settled",
    references: ["Genesis 14:18–20", "Psalm 76:2", "Psalm 110:4", "Hebrews 7"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.10.2; Dead Sea Scrolls, 11QMelchizedek (11Q13)" }],
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
        jewish: "Philo of Alexandria, a Jewish contemporary of Jesus, read Hagar as an allegory of the “preliminary studies” — grammar, geometry, music — that prepare the soul for wisdom, symbolised by Sarah (On the Preliminary Studies 9–24).",
        christian: "Paul turns Hagar and Sarah into an allegory of two covenants (Galatians 4:21–31).",
      },
    },
    confidence: "settled",
    references: ["Genesis 16", "Galatians 4:21–31"],
    sources: [
      scripture,
      { kind: "primary", citation: "Laws of Hammurabi §§144–147" },
      { kind: "primary", citation: "Old Assyrian marriage contract from Kanesh (Kültepe), 19th century BCE" },
      { kind: "primary", citation: "Philo, On Mating with the Preliminary Studies (De Congressu) 9–24" },
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
        jewish: "For Jews of Jesus' day, Esau's descendants had become fellow Jews: in the late 2nd century BCE John Hyrcanus made the Idumeans accept circumcision and the Law (Josephus, Antiquities 13.9.1). Even so, Herod's rival Antigonus mocked him as a “half-Jew” (Antiquities 14.15.2).",
        christian:
          "Paul quotes “Jacob I loved, but Esau I hated” (Malachi 1:2–3) in Romans 9:13 when discussing God's choice.",
      },
    },
    confidence: "settled",
    references: ["Genesis 25:25–30", "Genesis 36:1", "Malachi 1:2–3", "Romans 9:13"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.1.3" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.9.1; 14.15.2" },
    ],
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
          "The custom was already kept in Jesus' day: Josephus explains that Jews do not eat this sinew because of Jacob's wrestling (Antiquities 1.20.2).",
        christian:
          "Charles Wesley's hymn “Come, O Thou Traveller Unknown” reads the wrestling as a picture of persistent prayer.",
      },
    },
    confidence: "settled",
    references: ["Genesis 32:22–32"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Merneptah Stele (Cairo, Egyptian Museum), c. 1208 BCE" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.20.2" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "pat-011",
    era: "patriarchs",
    level: 4,
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
          "Josephus suggests Rachel did not worship the images but took them as a safeguard — something to bargain with for her father's pardon if they were caught (Antiquities 1.19.9).",
      },
      debate:
        "Earlier scholars argued from texts found at Nuzi that holding the household gods gave a claim to inheritance. Many scholars now doubt that parallel, and why Rachel took them is still debated.",
    },
    confidence: "debated",
    references: ["Genesis 31:19", "Genesis 31:34"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.19.9" },
      { kind: "scholarship", citation: "M. Greenberg, “Another Look at Rachel's Theft of the Teraphim,” Journal of Biblical Literature 81 (1962)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-012",
    era: "patriarchs",
    level: 4,
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
    level: 4,
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
    level: 4,
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
    level: 4,
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
          "Josephus says Isaac was twenty-five and went to the altar willingly (Antiquities 1.13.2–4). The book of 4 Maccabees (1st century CE) holds Isaac up as a model for Jewish martyrs who faced death rather than abandon the Law (4 Maccabees 13:12; 16:20).",
        christian:
          "Christians have long read it as a foreshadowing of Jesus' sacrifice; Hebrews 11:17–19 praises Abraham's faith that God could raise the dead.",
      },
      debate:
        "Samaritan tradition places Moriah on Mount Gerizim, and many scholars think the link to the Temple Mount — made only in 2 Chronicles — came later.",
    },
    confidence: "settled",
    references: ["Genesis 22:1–19", "2 Chronicles 3:1", "2 Kings 3:27", "Hebrews 11:17–19"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.13.2–4; 4 Maccabees 13:12; 16:20" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  // ───────────── Level 4 ─────────────
  {
    id: "pat-016",
    era: "patriarchs",
    level: 3,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which relative of Abraham chose to settle in the Jordan plain near Sodom?",
    choices: ["Lot, his nephew", "Laban, his great-nephew", "Eliezer, his servant", "Ishmael, his son"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 13:10–12: Lot saw that the plain of the Jordan was well-watered “like the garden of Yahweh” and moved his tents as far as Sodom, while Abram stayed in Canaan.",
      world:
        "Herders needed water and grazing, and quarrels between rival herdsmen over wells and pasture were common — the dispute in Genesis 13:7 starts exactly that way.",
      theirEyes:
        "Two herds had grown too big for one hillside. Splitting up was the peaceful option; choosing the green valley looked like the smart one.",
      debate:
        "The location of Sodom is unknown. Suggestions include the area south of the Dead Sea and sites north-east of it such as Tall el-Hammam; none is generally accepted.",
    },
    confidence: "settled",
    references: ["Genesis 13:5–12"],
    sources: [scripture, { kind: "reference", citation: "“Sodom and Gomorrah,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-19", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-017",
    era: "patriarchs",
    level: 3,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Abraham's servant found a wife for Isaac when she offered water to him and his camels at a well. Who was she?",
    choices: ["Rebekah", "Rachel", "Leah", "Zipporah"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 24:15–20: Rebekah comes out with her water jar, gives the servant a drink and draws water for all his camels.",
      world:
        "Wells were social hubs, and drawing water was usually women's work, done in the evening (Genesis 24:11). Watering ten thirsty camels meant hauling a great deal of water by hand.",
      theirEyes:
        "A stranger's test was simple: who would show kindness without being asked twice? Rebekah's generosity was her introduction.",
      debate:
        "Archaeological studies (for example Sapir-Hen and Ben-Yosef, 2013) found that domesticated camels appear in the Aravah valley only from the late 10th century BCE. Some scholars therefore see the camels as details from the storytellers' own time; others argue for earlier, limited use.",
    },
    confidence: "settled",
    references: ["Genesis 24:10–20"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "L. Sapir-Hen and E. Ben-Yosef, “The Introduction of Domestic Camels to the Southern Levant: Evidence from the Aravah Valley,” Tel Aviv 40 (2013): 277–285" },
    ],
    review: { status: "published", reviewedOn: "2026-11-19", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-018",
    era: "patriarchs",
    level: 3,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Jacob worked seven years to marry Rachel, but on the wedding night he was given her sister Leah instead.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 29:18–25: Jacob serves seven years for Rachel, but Laban gives him Leah. Jacob then marries Rachel too and works another seven years (29:27–30).",
      world:
        "A wedding feast lasted a week (Genesis 29:27). Leah was brought to Jacob in the evening (29:23) — after dark, and probably veiled (compare Genesis 24:65) — which made Laban's trick possible.",
      theirEyes:
        "The trickster who once disguised himself to fool his blind father (Genesis 27) woke up to find he had been tricked the same way.",
      tradition: {
        jewish:
          "The Book of Jubilees (2nd century BCE) treats Laban's excuse as a real law, written on the “heavenly tablets,” that a younger daughter should not be given in marriage before the elder (Jubilees 28:6).",
      },
    },
    confidence: "settled",
    references: ["Genesis 29:15–30", "Genesis 24:65"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 28:6" },
    ],
    review: { status: "published", reviewedOn: "2026-11-19", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-019",
    era: "patriarchs",
    level: 3,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "How many sons did Jacob have?",
    choices: ["Twelve", "Ten", "Seven", "Eight"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 35:22–26 lists Jacob's twelve sons. He also had a daughter, Dinah (Genesis 30:21).",
      world:
        "The twelve sons became the names of the tribes of Israel. Jacob later adopts Joseph's sons Ephraim and Manasseh as his own (Genesis 48:5), so different tribal lists in the Bible vary slightly.",
      theirEyes:
        "Four mothers, twelve brothers, one favourite — the rivalries in this tent explain much of what happens next.",
    },
    confidence: "settled",
    references: ["Genesis 35:22–26", "Genesis 30:21", "Genesis 48:5"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-19", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-020",
    era: "patriarchs",
    level: 3,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What gift from Jacob made Joseph's brothers jealous?",
    choices: ["A special tunic", "A signet ring", "A gold chain", "A flock of sheep"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 37:3–4: Jacob made Joseph “a tunic of many colors,” and his brothers hated him for it. (The signet ring and gold chain come later, from Pharaoh — Genesis 41:42.)",
      world:
        "Clothing showed status. The same Hebrew phrase, ketonet passim, describes the robe of a king's daughter in 2 Samuel 13:18.",
      theirEyes:
        "Working clothes were plain and practical. A fine robe on the younger brother announced who the heir-in-waiting was.",
      debate:
        "The meaning of passim is uncertain. “Many colours” comes from the ancient Greek and Latin translations; many scholars think it meant a long robe with sleeves reaching the hands or feet.",
    },
    confidence: "settled",
    references: ["Genesis 37:3–4", "Genesis 41:42", "2 Samuel 13:18"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-19", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 5 ─────────────
  {
    id: "pat-021",
    era: "patriarchs",
    level: 5,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "What did Joseph interpret for Pharaoh?",
    choices: [
      "Two dreams about cows and ears of grain",
      "Writing on a palace wall",
      "A dream of a statue with feet of clay",
      "A vision of a burning bush",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 41: seven fat cows eaten by seven thin ones, and seven full ears of grain swallowed by seven thin ones — seven years of plenty followed by seven of famine. (The writing on the wall and the statue are from Daniel 5 and Daniel 2.)",
      world:
        "Egyptians took dreams seriously. A Ramesside papyrus known as the Dream Book (Papyrus Chester Beatty III, in the British Museum) lists dreams and what they were thought to mean.",
      theirEyes:
        "Egypt's harvest depended on the Nile flood. A warning of seven bad years was a matter of national survival.",
      tradition: {
        shared:
          "Joseph and Daniel are often compared: both are Hebrew exiles who rise in a foreign court by interpreting a king's dreams.",
      },
    },
    confidence: "settled",
    references: ["Genesis 41:1–36", "Daniel 2", "Daniel 5"],
    sources: [scripture, { kind: "primary", citation: "Papyrus Chester Beatty III (the “Dream Book”), British Museum EA 10683" }],
    review: { status: "published", reviewedOn: "2026-11-19", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-022",
    era: "patriarchs",
    level: 5,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After Jacob died in Egypt, what was done to his body before burial?",
    choices: ["It was embalmed", "It was cremated", "It was buried at sea", "It was left in the desert"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 50:2–3: Joseph's physicians embalm Jacob; embalming takes forty days and the Egyptians mourn seventy. Joseph is also embalmed and placed in a coffin in Egypt (50:26); his bones are later carried out of Egypt and buried at Shechem (Exodus 13:19; Joshua 24:32).",
      world:
        "Mummification preserved the body for the afterlife. Herodotus described the process and gives seventy days (Histories 2.86); Egyptologists think the seventy days covered the whole process, with the drying in natron taking around forty — close to Genesis 50:3.",
      theirEyes:
        "Jacob was buried as an Egyptian grandee — but he insisted on being carried home to the cave of Machpelah.",
    },
    confidence: "settled",
    references: ["Genesis 50:1–14", "Genesis 50:26", "Exodus 13:19", "Joshua 24:32"],
    sources: [scripture, { kind: "primary", citation: "Herodotus, Histories 2.86" }],
    review: { status: "published", reviewedOn: "2026-11-19", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-023",
    era: "patriarchs",
    level: 5,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Before Isaac was born, who did Abram say would inherit his household?",
    choices: ["Eliezer of Damascus, his steward", "Lot, his nephew", "Melchizedek, king of Salem", "Ishmael, his son"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 15:2–3: “he who will inherit my estate is Eliezer of Damascus?… one born in my house is my heir.” Ishmael is not yet born at this point (Genesis 16).",
      world:
        "Childless couples in the ancient Near East could adopt an heir, sometimes even a servant, so that someone would inherit the estate and care for them in old age.",
      theirEyes:
        "For a nomadic chief, dying without a son meant everything — flocks, servants, the family name — passing to someone else's line.",
      debate:
        "Scholars once linked this to adoption contracts found at Nuzi (in modern Iraq). Many now think those parallels were overstated, though adoption of heirs is well attested in the region.",
    },
    confidence: "settled",
    references: ["Genesis 15:1–6"],
    sources: [scripture, { kind: "reference", citation: "“Nuzi,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-19", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-024",
    era: "patriarchs",
    level: 5,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Genesis 15, Abram cuts animals in half to seal a covenant. What passes between the pieces?",
    choices: ["A smoking furnace and a flaming torch", "A dove and a raven", "A pillar of cloud", "Abram's servants"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 15:17: “a smoking furnace and a flaming torch passed between these pieces,” and God makes a covenant with Abram.",
      world:
        "Hebrew speaks of “cutting” a covenant (karat brit). Jeremiah 34:18–19 describes the same rite: those who walk between the halves call the animals' fate on themselves if they break their word. Texts from Mari describe killing a donkey to seal treaties.",
      theirEyes:
        "Anyone in Abram's world knew what walking between the pieces meant: “may this happen to me if I break my promise.” Here, only the fire representing God passes through.",
    },
    confidence: "settled",
    references: ["Genesis 15:9–18", "Jeremiah 34:18–19"],
    sources: [scripture, { kind: "reference", citation: "“Covenant,” Encyclopaedia Britannica (ancient Near Eastern treaty rites)" }],
    review: { status: "published", reviewedOn: "2026-11-19", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-025",
    era: "patriarchs",
    level: 5,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Where did Jacob dream of a stairway reaching to heaven?",
    choices: ["Bethel", "Beersheba", "Hebron", "Shechem"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 28:10–19: travelling from Beersheba towards Haran, Jacob dreams of angels going up and down a stairway. He names the place Bethel, “house of God”; it was formerly called Luz.",
      world:
        "Many scholars compare the “stairway” (Hebrew sullam) to the stepped ramps of Mesopotamian temple towers (ziggurats), seen as links between earth and heaven.",
      theirEyes:
        "A young man alone, running from his brother, sleeping on a stone — and suddenly told he is not alone at all.",
      tradition: {
        jewish:
          "Philo of Alexandria read the stairway as the air between earth and heaven, filled with souls and angels moving up and down — and as a picture of the ups and downs of human life (On Dreams 1.133–156).",
        christian:
          "Jesus tells Nathanael he will see “angels of God ascending and descending on the Son of Man” (John 1:51).",
      },
    },
    confidence: "settled",
    references: ["Genesis 28:10–19", "John 1:51"],
    sources: [scripture, { kind: "primary", citation: "Philo, On Dreams 1.133–156" }],
    review: { status: "published", reviewedOn: "2026-11-19", notes: "Independent fact-check pass; corrections applied." },
  },
];
