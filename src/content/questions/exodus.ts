import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Hebrew Bible / Old Testament — quotations from the World English Bible (public domain)" } as const;

export const exodus: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "exo-001",
    era: "exodus",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "How many plagues struck Egypt in the Book of Exodus?",
    choices: ["Ten", "Seven", "Twelve", "Forty"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 7–12 describes ten plagues, from the Nile turning to blood to the death of the firstborn. God says the final plague brings judgment “against all the gods of Egypt” (Exodus 12:12).",
      world:
        "The Nile was Egypt's lifeline and was linked to divine powers, and Ra the sun god was among its greatest gods. Many readers see the plagues as striking at what Egypt revered most.",
      theirEyes:
        "To an Egyptian farmer, a river turned foul meant no water to drink, no fish and no harvest — the Nile was everything.",
      tradition: {
        jewish:
          "At the Passover Seder, a drop of wine is removed from the cup for each plague — often explained as lessening joy because others suffered.",
        christian: "The plagues in the Book of Revelation (chapters 8–16) echo the plagues of Egypt.",
      },
    },
    confidence: "settled",
    references: ["Exodus 7–12", "Exodus 12:12"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-002",
    era: "exodus",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "On the night of the first Passover, what did the Israelites put on their doorposts?",
    choices: ["The blood of a lamb", "Olive oil", "Salt", "Water from the Nile"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 12:7, 13 and 23: the blood on the doorposts is a sign; God will “pass over” those houses and not allow the destroyer to come in.",
      world:
        "Many scholars think Passover brought together a herders' spring sacrifice and a farmers' festival of unleavened bread into one feast of freedom.",
      theirEyes:
        "A family eating in a hurry, sandals on and staff in hand (Exodus 12:11), knowing that by morning everything could change.",
      tradition: {
        jewish:
          "Pesach is celebrated every spring with the Seder meal, retelling the story so each generation sees itself as if it had left Egypt.",
        christian: "Paul calls Christ “our Passover” lamb (1 Corinthians 5:7).",
      },
    },
    confidence: "settled",
    references: ["Exodus 12:1–13", "Exodus 12:23", "1 Corinthians 5:7"],
    sources: [scripture, { kind: "primary", citation: "Mishnah Pesachim 10:5" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-003",
    era: "exodus",
    level: 1,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "The Hebrew name for manna (man) sounds like a question the Israelites asked. What was it?",
    choices: ["“What is it?”", "“Where is the bread?”", "“Who sent this?”", "“Is it the Sabbath?”"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 16:15: the people saw it and said, “What is it?” — in Hebrew man hu, a wordplay on the name. (The usual Hebrew for “what” is mah, so man is an older or Aramaic-like form.) It tasted like wafers made with honey (16:31), and a double portion fell before the Sabbath (16:22).",
      world:
        "Some have compared manna to a sweet substance produced by insects on tamarisk trees in Sinai and still gathered by Bedouin.",
      theirEyes:
        "Imagine waking in the desert, finding the ground covered with something white and flaky — and having no word for it.",
      tradition: {
        jewish: "Two loaves of challah on the Sabbath table recall the double portion of manna that fell on Friday.",
        christian: "Jesus calls himself “the bread of life,” contrasting himself with the manna (John 6:31–35).",
      },
      debate:
        "Natural explanations like the tamarisk secretion cannot account for the biblical description of manna falling daily in large amounts, so scholars differ on whether a natural phenomenon lies behind the story.",
    },
    confidence: "settled",
    references: ["Exodus 16:14–31", "John 6:31–35"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-004",
    era: "exodus",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "For how many years did the Israelites wander in the wilderness?",
    choices: ["Forty", "Seven", "Twelve", "Seventy"],
    answer: 0,
    explanation: {
      textSays:
        "Numbers 14:33–34: a year of wandering for each of the forty days the spies spent scouting Canaan.",
      world:
        "Forty recurs throughout the Bible — the rain of the Flood, Moses on Sinai, Elijah's journey, Jesus in the wilderness — often marking a full generation or a time of testing.",
      theirEyes: "A child who left Egypt would be middle-aged before seeing the Promised Land.",
      tradition: {
        jewish:
          "The medieval commentator Ibn Ezra suggests a generation raised in slavery was not ready to fight for the land, so a new generation had to grow up in freedom (Ibn Ezra on Exodus 14:13).",
        christian: "Jesus' forty days of testing in the wilderness (Matthew 4:1–2) echo Israel's forty years.",
      },
    },
    confidence: "settled",
    references: ["Numbers 14:33–34", "Matthew 4:1–2"],
    sources: [scripture, { kind: "primary", citation: "Ibn Ezra, commentary on Exodus 14:13" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-005",
    era: "exodus",
    level: 1,
    category: "archaeology",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Egyptian records from the time of the pharaohs describe Moses and the Exodus.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "No Egyptian text from the New Kingdom, when the story is usually set, mentions Moses or the Exodus. The first Egyptian writer to mention Moses is the priest Manetho (3rd century BCE), whose hostile version survives only in quotations by Josephus — about a thousand years later. The earliest undisputed mention of “Israel” outside the Bible is the Merneptah Stele (about 1208 BCE), which names Israel as a people in Canaan defeated by Pharaoh Merneptah.",
      theirEyes:
        "Egyptian royal inscriptions were carved propaganda: they celebrated the pharaoh's victories, not runaway labourers or defeats.",
      debate:
        "Scholars disagree about what this silence means. Some note that Egyptian records rarely mention setbacks; others regard the Exodus as a national story with, at most, a small historical core.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Merneptah Stele (Cairo, Egyptian Museum), c. 1208 BCE" },
      { kind: "primary", citation: "Josephus, Against Apion 1.227–250 (quoting Manetho)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "exo-006",
    era: "exodus",
    level: 2,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Exodus says the Israelites were forced to build which store cities for Pharaoh?",
    choices: ["Pithom and Raamses", "Ur and Harran", "Nineveh and Babylon", "Jericho and Ai"],
    answer: 0,
    explanation: {
      textSays: "Exodus 1:11: they built Pithom and Raamses as store cities for Pharaoh.",
      world:
        "Pi-Ramesses was the Delta capital built by Ramesses II in the 13th century BCE, at today's Qantir. This is one reason many scholars place the Exodus story in his reign.",
      theirEyes:
        "Building a royal city meant endless bricks, heat and overseers — the pharaoh's glory built on other people's backs.",
      debate:
        "1 Kings 6:1 counts 480 years from the Exodus to Solomon's Temple, which points to the 15th century BCE instead. Others think the city name was updated in later retellings. The date is debated.",
    },
    confidence: "debated",
    references: ["Exodus 1:11", "1 Kings 6:1"],
    sources: [scripture, { kind: "archaeology", citation: "E. B. Pusch (Qantir) and M. Bietak (Tell el-Dab'a), excavations at Pi-Ramesses/Avaris" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-007",
    era: "exodus",
    level: 2,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "To punish the Israelites, Pharaoh stopped giving them which material for making bricks?",
    choices: ["Straw", "Water", "Clay", "Firewood"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 5:6–19: Pharaoh stops supplying straw but keeps the daily brick quota the same, so the people must gather stubble themselves.",
      world:
        "Egyptian mud bricks were often mixed with straw or chaff to strengthen them. A wall painting in the tomb of the vizier Rekhmire at Thebes (15th century BCE) shows foreign workers making bricks.",
      theirEyes:
        "A brick quota with no straw meant searching the fields for stubble after work — and still facing the overseer's stick if you fell short.",
    },
    confidence: "settled",
    references: ["Exodus 5:6–19"],
    sources: [scripture, { kind: "archaeology", citation: "Tomb of Rekhmire (TT100), Thebes — brick-making scene" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-008",
    era: "exodus",
    level: 2,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Many scholars link the name “Moses” to an Egyptian word that also appears in which pharaohs' names?",
    choices: ["Thutmose and Ramesses", "Khufu and Khafre", "Akhenaten and Tutankhamun", "Ptolemy and Cleopatra"],
    answer: 0,
    explanation: {
      textSays:
        "In Exodus 2:10, Pharaoh's daughter names him Moses, “because I drew him out of the water” — a play on the Hebrew verb mashah, “to draw out.”",
      world:
        "The Egyptian element ms/mose means “born” or “child,” as in Thutmose (“Thoth is born”) and Ramesses (“Ra has fashioned him” / “born of Ra”).",
      theirEyes:
        "A Hebrew boy raised in the palace with an Egyptian name lived between two worlds.",
      tradition: {
        christian:
          "Stephen says Moses “was instructed in all the wisdom of the Egyptians” (Acts 7:22).",
      },
    },
    confidence: "mainstream",
    references: ["Exodus 2:10", "Acts 7:22"],
    sources: [scripture, { kind: "reference", citation: "“Moses,” Encyclopaedia Britannica (etymology of the name)" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-009",
    era: "exodus",
    level: 2,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At the burning bush, Moses asks for God's name. What answer is he given?",
    choices: ["“I AM WHO I AM”", "“The Lord of Hosts”", "“The Ancient of Days”", "“The God Who Sees”"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 3:14: “I AM WHO I AM” (Ehyeh asher ehyeh). In the next verse God gives the four-letter name, YHWH.",
      world:
        "YHWH is related to the Hebrew verb “to be.” Ancient Hebrew was written without vowels, so the original pronunciation of the name is uncertain.",
      theirEyes:
        "In a world of many named gods, each with a city and a statue, a God who answers “I am” would have sounded utterly different.",
      tradition: {
        jewish:
          "Out of reverence, Jews do not pronounce YHWH, saying “Adonai” (“my Lord”) instead; many English Bibles print it as “the LORD.”",
        christian:
          "When Jesus says “before Abraham came into existence, I AM” (John 8:58), many Christians hear an echo of this verse.",
      },
    },
    confidence: "settled",
    references: ["Exodus 3:13–15", "John 8:58"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-010",
    era: "exodus",
    level: 2,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After killing an Egyptian who was beating a Hebrew, where did Moses flee?",
    choices: ["Midian", "Babylon", "Phoenicia", "Greece"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 2:15–22: Moses flees to Midian and marries Zipporah, daughter of the priest of Midian (called Reuel, and later Jethro).",
      world:
        "Midian is usually placed in north-western Arabia, east of the Gulf of Aqaba. Its people were herders and traders — Midianite traders also appear in Joseph's story (Genesis 37:28).",
      theirEyes: "From prince of Egypt to shepherd of someone else's sheep — Moses spent years in the desert before the burning bush.",
      debate:
        "Some scholars propose that worship of YHWH reached Israel through contacts with Midianites and Kenites (pointing to Jethro's role in Exodus 18). Others reject this theory.",
    },
    confidence: "mainstream",
    references: ["Exodus 2:15–22", "Exodus 18"],
    sources: [scripture, { kind: "reference", citation: "“Midianite,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "exo-011",
    era: "exodus",
    level: 3,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The sea the Israelites crossed is called “Yam Suf” in Hebrew. What does that literally mean?",
    choices: ["Sea of Reeds", "Sea of Salt", "Great Sea", "Sea of Fire"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 13:18 and 15:4 call it Yam Suf. “Suf” is the same word used for the reeds where baby Moses was placed (Exodus 2:3).",
      world:
        "The Greek translation of the Bible (the Septuagint) rendered it “Red Sea,” which shaped most later translations. (The Dead Sea is the “Salt Sea” and the Mediterranean the “Great Sea” in Hebrew.)",
      theirEyes:
        "Trapped between chariots and water, the escaping slaves had nowhere left to run.",
      tradition: {
        jewish:
          "The Song of the Sea (Exodus 15) is part of the daily morning prayers and is read on the seventh day of Passover.",
        christian: "Paul compares the crossing of the sea to baptism (1 Corinthians 10:1–2).",
      },
      debate:
        "Proposed locations include the Gulf of Suez, the Gulf of Aqaba (called Yam Suf in 1 Kings 9:26), and lakes or marshes in the eastern Delta. A minority of scholars read suf as “end” (“Sea of the End”). The route is debated.",
    },
    confidence: "mainstream",
    references: ["Exodus 2:3", "Exodus 13:18", "Exodus 15:4", "1 Corinthians 10:1–2"],
    sources: [scripture, { kind: "primary", citation: "Septuagint, Exodus 13:18 (erythra thalassa)" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-012",
    era: "exodus",
    level: 3,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Centuries after the golden calf at Sinai, which king set up two golden calves at Bethel and Dan?",
    choices: ["Jeroboam I", "David", "Hezekiah", "Josiah"],
    answer: 0,
    explanation: {
      textSays:
        "1 Kings 12:28–29: Jeroboam sets up calves at Bethel and Dan and proclaims, “Look and see your gods, Israel, which brought you up out of the land of Egypt!” — almost the same words the people said at Sinai when Aaron made the calf: “These are your gods, Israel…” (Exodus 32:4).",
      world:
        "Bulls symbolised strength and fertility across the region: Ugaritic texts call the Canaanite god El “Bull El.” A bronze bull figurine from the 12th century BCE was found at the so-called Bull Site in the hills of Samaria.",
      theirEyes:
        "For people who saw bulls on altars and in temples all around them, a golden calf would have felt familiar — and that was the danger.",
      debate:
        "Scholars debate whether such calves were meant as idols or as pedestals for an invisible God, like the cherubim above the Ark.",
    },
    confidence: "settled",
    references: ["Exodus 32:1–6", "1 Kings 12:28–29"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "A. Mazar, “The ‘Bull Site’ — An Iron Age I Open Cult Place,” BASOR 247 (1982)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-013",
    era: "exodus",
    level: 3,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to 1 Kings 8:9, what was inside the Ark of the Covenant when Solomon placed it in the Temple?",
    choices: [
      "Only the two stone tablets",
      "The tablets, a jar of manna and Aaron's staff",
      "Moses' staff and a Torah scroll",
      "Gold offerings from Egypt",
    ],
    answer: 0,
    explanation: {
      textSays:
        "1 Kings 8:9: “There was nothing in the ark except the two stone tablets which Moses put there at Horeb.” Hebrews 9:4 also mentions the jar of manna and Aaron's staff — which Exodus 16:33–34 and Numbers 17:10 (17:25 in Hebrew Bibles) describe as kept “before” the testimony.",
      world:
        "Portable sacred chests carried on poles are known from Egypt — one was found in Tutankhamun's tomb, topped by a figure of the jackal god Anubis.",
      theirEyes: "The Ark went ahead of the camp as the people travelled — God's presence on the move with them.",
      tradition: {
        jewish:
          "The Talmud records the view that the Ark was hidden away before the Babylonian conquest (Yoma 53b–54a).",
        christian: "Hebrews 9 describes the Tabernacle and its furnishings as a pattern pointing to Christ.",
      },
    },
    confidence: "settled",
    references: ["1 Kings 8:9", "Hebrews 9:4", "Exodus 16:33–34", "Numbers 17:10"],
    sources: [scripture, { kind: "primary", citation: "Babylonian Talmud, Yoma 53b–54a" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-014",
    era: "exodus",
    level: 3,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which festival does Jewish tradition connect with the giving of the Torah at Sinai?",
    choices: ["Shavuot", "Sukkot", "Purim", "Hanukkah"],
    answer: 0,
    explanation: {
      textSays:
        "The Torah commands Shavuot as a harvest festival seven weeks after Passover (Leviticus 23:15–21) without mentioning Sinai. Exodus 19:1 places the arrival at Sinai in the third month.",
      world:
        "The link between Shavuot and Sinai is developed in later Jewish tradition; the Talmud dates the giving of the Torah to early in the month of Sivan (Shabbat 86b).",
      theirEyes:
        "For farmers, Shavuot was the joy of the first wheat harvest; tradition added the joy of receiving the Torah.",
      tradition: {
        jewish:
          "Many Jews stay up all night studying Torah on Shavuot (Tikkun Leil Shavuot), a custom spread by the 16th-century kabbalists of Safed.",
        christian:
          "Pentecost (Acts 2) took place when crowds were in Jerusalem for this festival, called Pentecost (“fiftieth”) in Greek.",
      },
    },
    confidence: "mainstream",
    references: ["Leviticus 23:15–21", "Exodus 19:1", "Acts 2:1"],
    sources: [scripture, { kind: "primary", citation: "Babylonian Talmud, Shabbat 86b" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-015",
    era: "exodus",
    level: 3,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The traditional Mount Sinai (Jebel Musa) has been honoured by Christian pilgrims since at least which century?",
    choices: ["The 4th century CE", "The 10th century BCE", "The 12th century CE", "The 19th century CE"],
    answer: 0,
    explanation: {
      textSays: "Exodus 19 describes the giving of the Law at Sinai, which Deuteronomy calls Horeb (Deuteronomy 5:2).",
      world:
        "Christian monks were living around Jebel Musa in southern Sinai by the 4th century. The pilgrim Egeria described a visit around 383 CE, and Emperor Justinian built what is now St Catherine's Monastery at its foot in the 6th century.",
      theirEyes:
        "For early pilgrims, climbing the mountain at night to watch the sunrise was a way of standing where Moses stood.",
      tradition: {
        jewish:
          "A Talmudic teaching says God passed over all the mountains and hills to rest His Presence on Sinai — a lesson in humility (Sotah 5a).",
      },
      debate:
        "The Bible gives no precise location. Scholars have proposed sites in southern Sinai, northern Sinai and north-western Arabia.",
    },
    confidence: "mainstream",
    references: ["Exodus 19", "Deuteronomy 5:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Itinerarium Egeriae (Travels of Egeria), c. 383 CE" },
      { kind: "primary", citation: "Babylonian Talmud, Sotah 5a" },
      { kind: "reference", citation: "“Saint Catherine's Monastery,” UNESCO World Heritage List" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
];
