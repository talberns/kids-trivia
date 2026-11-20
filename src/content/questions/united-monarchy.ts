import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const unitedMonarchy: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "mon-001",
    era: "united-monarchy",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: according to the Bible, David was Israel's first king.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "The first king of all Israel is Saul. Samuel anoints him (1 Samuel 10:1) and the people make him king at Gilgal (1 Samuel 11:15). David is anointed later, while Saul still reigns (1 Samuel 16:13). (Earlier, Gideon's son Abimelech had briefly ruled as king from Shechem: Judges 9.)",
      world:
        "Even the length of Saul's reign is uncertain: the numbers in the Hebrew text of 1 Samuel 13:1 are missing or damaged, so translations fill them in differently (the WEB, for example, supplies thirty and forty-two).",
      theirEyes:
        "For tribes used to judges who rose up in a crisis, a king from the small tribe of Benjamin was something entirely new.",
      tradition: {
        christian: "In Acts 13:21, Paul tells a synagogue audience that God gave Israel Saul son of Kish as king for forty years.",
      },
    },
    confidence: "settled",
    references: ["Judges 9:6", "1 Samuel 10:1", "1 Samuel 11:15", "1 Samuel 13:1", "1 Samuel 16:13", "Acts 13:21"],
    sources: [scripture, { kind: "scholarship", citation: "P. Kyle McCarter Jr., I Samuel (Anchor Bible 8; Doubleday, 1980), notes on 1 Samuel 13:1" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-002",
    era: "united-monarchy",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to 1 Samuel 17, what did David use to bring down Goliath?",
    choices: ["A sword", "A sling and a stone", "A bow and arrow", "A spear"],
    answer: 1,
    explanation: {
      textSays:
        "David refuses Saul's armour, picks five smooth stones from a brook, and strikes Goliath on the forehead with a slung stone; then he uses Goliath's own sword to finish him (1 Samuel 17:38–51).",
      world:
        "The sling was a serious weapon, not a toy: armies across the ancient Near East had units of slingers, and Judges 20:16 describes 700 Benjaminite slingers who could sling a stone at a hair and not miss.",
      theirEyes:
        "Every shepherd boy practised with a sling to drive off wild animals, so David's weapon was one every listener knew.",
      tradition: {
        jewish:
          "Psalm 151, found in the Septuagint and in a Hebrew form in the Dead Sea Psalms Scroll (11QPsa), is written as David's own song about being the youngest son and defeating the Philistine.",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 17:38–51", "Judges 20:16"],
    sources: [
      scripture,
      { kind: "primary", citation: "Psalm 151 (Septuagint); Great Psalms Scroll, 11QPsa (11Q5), col. 28" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-003",
    era: "united-monarchy",
    level: 1,
    category: "neighbours",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "From which people did David capture Jerusalem, according to 2 Samuel 5?",
    choices: ["The Philistines", "The Moabites", "The Jebusites", "The Egyptians"],
    answer: 2,
    explanation: {
      textSays:
        "David's men take “the stronghold of Zion” from the Jebusites, and David names it the City of David (2 Samuel 5:6–9).",
      world:
        "Jerusalem was already old. In the 14th century BCE its ruler Abdi-Heba wrote letters to Pharaoh that were found at Amarna in Egypt. Because it lay on the border between Judah and Benjamin and belonged to neither tribe, many historians see it as a politically neutral choice of capital.",
      theirEyes:
        "A hilltop fortress that had held out for generations suddenly belonged to the king — and became “his” city, not any one tribe's.",
    },
    confidence: "settled",
    references: ["2 Samuel 5:6–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Amarna letters EA 285–290 (letters of Abdi-Heba of Jerusalem)" },
      { kind: "scholarship", citation: "William L. Moran, The Amarna Letters (Johns Hopkins University Press, 1992)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-004",
    era: "united-monarchy",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to 1 Kings, which king built the first Temple in Jerusalem?",
    choices: ["David", "Saul", "Hezekiah", "Solomon"],
    answer: 3,
    explanation: {
      textSays:
        "David wanted to build a house for God, but the prophet Nathan said David's son would build it (2 Samuel 7:12–13). Solomon begins it in the fourth year of his reign (1 Kings 6:1).",
      world:
        "No physical remains of Solomon's Temple have been identified, and the Temple Mount is not open to excavation. Scholars compare the biblical description with excavated Iron Age temples in Syria and Turkey, such as 'Ain Dara and Tell Tayinat.",
      theirEyes:
        "For the first time, the God of Israel would have a stone house in the king's own city instead of a tent.",
    },
    confidence: "settled",
    references: ["2 Samuel 7:12–13", "1 Kings 6:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Victor Hurowitz, “Solomon's Temple in Context,” Biblical Archaeology Review 37:2 (March/April 2011)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-005",
    era: "united-monarchy",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: 2 Samuel says David danced as the Ark of the Covenant was brought up to Jerusalem.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "2 Samuel 6:14: “David danced before Yahweh with all his might; and David was clothed in a linen ephod.” The Ark was brought up “with shouting and with the sound of the trumpet” (6:15). The procession had stopped once before: when Uzzah took hold of the Ark as the oxen stumbled, he died, and David left it at the house of Obed-Edom for three months (6:6–11).",
      world:
        "A linen ephod was a priestly garment: the boy Samuel wore one while serving at the sanctuary (1 Samuel 2:18), so the king was dressed more like a priest than a monarch.",
      theirEyes:
        "Crowds lining the road saw their king, not in royal robes, but in a simple linen garment, leaping in front of the Ark like any worshipper.",
    },
    confidence: "settled",
    references: ["2 Samuel 6:6–15", "1 Samuel 2:18"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "mon-006",
    era: "united-monarchy",
    level: 2,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which instrument did young David play to soothe King Saul?",
    choices: ["The shofar (ram's horn)", "A frame drum", "The kinnor, a lyre or harp", "A pair of cymbals"],
    answer: 2,
    explanation: {
      textSays:
        "When a troubling spirit came on Saul, David played the instrument with his hand and Saul was refreshed (1 Samuel 16:23). The Hebrew word is kinnor; many English Bibles say “harp.”",
      world:
        "The kinnor was a small hand-held lyre. Lyres appear in ancient Near Eastern art, such as the painting of Asiatic (West Semitic) travellers in the tomb of Khnumhotep II at Beni Hasan in Egypt (c. 1890 BCE), where one man plays a lyre.",
      theirEyes: "A few plucked strings in a quiet room: music was the medicine people trusted for a troubled mind.",
      tradition: {
        jewish:
          "The Dead Sea Psalms Scroll (11QPsa, col. 27) credits David with thousands of songs, including four songs for making music over the stricken (pegu‘im), which many scholars take to mean people troubled by evil spirits, as Saul was.",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 16:14–23"],
    sources: [
      scripture,
      { kind: "primary", citation: "Great Psalms Scroll, 11QPsa (11Q5), col. 27, “David's Compositions”" },
      { kind: "archaeology", citation: "Wall painting of Asiatic travellers, tomb of Khnumhotep II, Beni Hasan (tomb BH 3), reign of Senusret II" },
      { kind: "scholarship", citation: "J. A. Sanders, The Psalms Scroll of Qumrân Cave 11 (11QPsa) (DJD 4; Clarendon Press, 1965), col. XXVII" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-007",
    era: "united-monarchy",
    level: 2,
    category: "neighbours",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which foreign king sent cedar from Lebanon for Solomon's Temple?",
    choices: ["Mesha of Moab", "Hazael of Damascus", "Shishak of Egypt", "Hiram of Tyre"],
    answer: 3,
    explanation: {
      textSays:
        "Hiram king of Tyre supplied cedar and cypress, floating the timber in rafts by sea, and Solomon paid him in wheat and oil (1 Kings 5:1–11 in English Bibles; 5:15–25 in the Hebrew numbering). Hiram had earlier sent builders and cedar for David's house (2 Samuel 5:11).",
      world:
        "Tyre was a rich Phoenician port, and the cedars of Lebanon were the prized building timber of the ancient Near East.",
      theirEyes: "Imagine huge logs bobbing down the coast, lashed together, on their way to a temple in the hills.",
      tradition: {
        jewish:
          "Josephus cites Tyrian records and two historians of Phoenicia, Dius and Menander of Ephesus, who say Hiram and Solomon also sent each other riddles to solve (Against Apion 1.106–127).",
      },
    },
    confidence: "settled",
    references: ["1 Kings 5:1–11", "2 Samuel 5:11"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Against Apion 1.106–127 (1.17–18)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-008",
    era: "united-monarchy",
    level: 2,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 1 Samuel 17, Goliath came from which Philistine city?",
    choices: ["Ekron", "Gaza", "Gath", "Ashkelon"],
    answer: 2,
    explanation: {
      textSays: "1 Samuel 17:4 introduces the Philistine champion Goliath as a man of Gath.",
      world:
        "Gath is widely identified with Tell es-Safi, one of the largest Iron Age sites in the region, where Aren Maeir's Bar-Ilan University expedition has worked since the late 1990s. A potsherd found there in 2005, from the late Iron Age I or early Iron Age II (roughly the 10th century BCE), bears two non-Semitic names, ALWT and WLT, which some compared to the name Goliath, though neither is that name.",
      theirEyes: "To Judah's farmers in the lowlands, Gath was the powerful city on the horizon, a day's walk away.",
      tradition: {
        jewish:
          "Josephus, writing in the 1st century CE, gives Goliath's height as four cubits and a span (Antiquities 6.171), the same figure as a Dead Sea Scroll of Samuel (4QSamuel-a).",
      },
      debate:
        "Goliath's height differs between ancient texts: the traditional Hebrew (Masoretic) text says six cubits and a span (about 2.9 m), while 4QSamuel-a, important Septuagint manuscripts and Josephus say four cubits and a span (about 2 m). Scholars disagree about which reading is older.",
    },
    confidence: "settled",
    references: ["1 Samuel 17:4"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Tell es-Safi/Gath Archaeological Project (Bar-Ilan University), dir. Aren M. Maeir" },
      { kind: "scholarship", citation: "A. M. Maeir, S. J. Wimmer, A. Zukerman and A. Demsky, “A Late Iron Age I/Early Iron Age II Old Canaanite Inscription from Tell eṣ-Ṣâfī/Gath, Israel,” BASOR 351 (2008): 39–71" },
      { kind: "primary", citation: "4QSamuel-a; Septuagint (Codex Vaticanus) 1 Samuel 17:4; Josephus, Antiquities of the Jews 6.171 (6.9.1)" },
      { kind: "scholarship", citation: "“How Tall Was Goliath? A Textual Dilemma,” Crossway.org" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-009",
    era: "united-monarchy",
    level: 2,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Two women claim the same baby. What does Solomon order, to reveal the real mother?",
    choices: [
      "Cut the living child in two with a sword",
      "Let the priests cast lots",
      "Let the city elders vote",
      "Give the child to whoever cries first",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Solomon calls for a sword and orders the child divided. One woman begs him to give the baby to the other rather than kill it, and Solomon knows she is the mother (1 Kings 3:16–28). Earlier he had asked God for an understanding heart (3:9). 1 Kings 4:32 (5:12 in Hebrew) credits him with 3,000 proverbs and 1,005 songs.",
      world:
        "Wise kings who judge hard cases fairly were an ideal across the ancient Near East: Hammurabi's law code, for example, presents the king as the one who brings justice to the land.",
      theirEyes: "Anyone could bring a case to the king — even two women with no husbands to speak for them.",
      tradition: {
        jewish:
          "Solomon's reputation was so great that the Wisdom of Solomon, a Jewish book written in Greek probably in the 1st century BCE or early 1st century CE, speaks in his voice (Wisdom 7–9).",
      },
    },
    confidence: "settled",
    references: ["1 Kings 3:9", "1 Kings 3:16–28", "1 Kings 4:32"],
    sources: [
      scripture,
      { kind: "primary", citation: "Wisdom of Solomon 7–9" },
      { kind: "primary", citation: "Laws of Hammurabi, prologue and epilogue" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-010",
    era: "united-monarchy",
    level: 2,
    category: "tradition",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: the headings in the Book of Psalms name David as the author of all 150 psalms.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "In the Hebrew text, 73 psalm headings say “of David.” Others name Asaph, the sons of Korah, Solomon (Psalm 72) and Moses (Psalm 90), and many have no name.",
      world:
        "The Hebrew phrase le-David can mean “by,” “for” or “belonging to” David, and many scholars think the headings were added later. The Greek Septuagint has “of David” on 85 psalms, adding it to some that lack it in Hebrew.",
      theirEyes: "Temple singers sang these songs for centuries; whose name stood at the top mattered less than singing them.",
      tradition: {
        jewish:
          "The Dead Sea Psalms Scroll (11QPsa, col. 27) says David wrote 3,600 psalms and 450 songs — 4,050 in all.",
        christian: "The New Testament quotes several psalms as David's words (e.g., Mark 12:36; Acts 2:25).",
      },
      debate: "How many psalms, if any, go back to David himself is debated.",
    },
    confidence: "settled",
    references: ["Psalm 72:1", "Psalm 90:1", "Mark 12:36", "Acts 2:25"],
    sources: [
      scripture,
      { kind: "primary", citation: "Great Psalms Scroll, 11QPsa (11Q5), col. 27, “David's Compositions”" },
      { kind: "scholarship", citation: "Howard N. Wallace, Psalms (Sheffield Phoenix Press, 2009)" },
      { kind: "reference", citation: "“David and the Psalm Titles” (sidebar), Faithlife Study Bible (Lexham Press, 2012)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "mon-011",
    era: "united-monarchy",
    level: 3,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After the Philistines captured the Ark, they placed it in the temple of which god at Ashdod?",
    choices: ["Chemosh", "Dagon", "Molech", "Marduk"],
    answer: 1,
    explanation: {
      textSays:
        "The Philistines took the Ark from Ebenezer to Ashdod and brought it “into the house of Dagon and set it by Dagon” (1 Samuel 5:1–2). Next morning Dagon’s statue had fallen on its face before the Ark; the morning after, it lay broken on the threshold (5:3–4), and 5:5 explains why Dagon’s priests in Ashdod did not step on the threshold.",
      world:
        "Dagon (Dagan) was an old West Semitic god, worshipped in Syria and Mesopotamia from at least the later 3rd millennium BCE, with temples at Mari, Terqa and Ugarit. The Philistines evidently adopted him after settling in Canaan (Judges 16:23 also places a temple of Dagon at Gaza). The popular idea that he was a fish god rests on a later word-play with Hebrew dag, “fish,” found in Jerome and medieval commentators, not on ancient evidence.",
      theirEyes:
        "The Philistines carried the Ark home as a trophy, the way victors brought captured gods to their own temples — but the next morning their own god lay face down before it.",
      tradition: {
        jewish:
          "Dagon's temple at Ashdod (called Azotus in Greek) still stood in the 2nd century BCE: 1 Maccabees 10:84 says Jonathan the Hasmonean burned it.",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 5:1–5", "Judges 16:23", "1 Maccabees 10:84"],
    sources: [
      scripture,
      { kind: "primary", citation: "1 Maccabees 10:83–84" },
      { kind: "reference", citation: "Pinhas Artzi, “Dagon,” Encyclopaedia Judaica (2nd ed., 2007)" },
      { kind: "scholarship", citation: "Lluís Feliu, The God Dagan in Bronze Age Syria (Brill, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "mon-012",
    era: "united-monarchy",
    level: 3,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In 1 Samuel 8, the elders ask Samuel for a king. Whom do they say they want to be like?",
    choices: ["Moses and Joshua", "All the nations", "The priests of the Tabernacle", "Their ancestor Abraham"],
    answer: 1,
    explanation: {
      textSays:
        "1 Samuel 8:5: “Now make us a king to judge us like all the nations.” Samuel warns that a king will take their sons, daughters, fields and a tenth of their flocks (8:11–17), but they insist: “that we also may be like all the nations” (8:20).",
      world:
        "Israel's neighbours, from Egypt to the Phoenician cities, were ruled by kings. Constant pressure from the Philistines made a war leader attractive.",
      theirEyes: "Samuel's own sons were taking bribes; to the elders, a king seemed the only way to stop the chaos.",
      tradition: {
        christian: "Paul retells the moment in a synagogue sermon: the people asked for a king, and God gave them Saul (Acts 13:21).",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 8:1–20", "Acts 13:21"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-013",
    era: "united-monarchy",
    level: 3,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 1 Samuel 13, why did Israelites have to go down to the Philistines?",
    choices: ["To buy horses", "To sharpen their farm tools", "To sell their grain", "To hire soldiers"],
    answer: 1,
    explanation: {
      textSays:
        "1 Samuel 13:19–22 says “there was no blacksmith found throughout all the land of Israel,” because the Philistines feared the Hebrews would make swords or spears. Israelites paid the Philistines to sharpen ploughshares, axes and other tools, and at the battle only Saul and Jonathan had a sword or spear.",
      world:
        "Iron came into everyday use only gradually in the early Iron Age. Some of the earliest clear evidence of iron smithing in the region comes from Philistine Gath (Tell es-Safi), in the Iron Age IIA (roughly the 10th–9th centuries BCE).",
      theirEyes: "A blunt plough meant a poor harvest, so a farmer had to swallow his pride and pay the enemy's smith.",
      debate:
        "Historians debate whether the passage reflects a real Philistine control of metalworking or a later explanation of Israel's weakness.",
    },
    confidence: "settled",
    references: ["1 Samuel 13:19–22"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Naama Yahalom-Mack, “The History of Iron in Ancient Israel,” TheTorah.com (2021)" },
      { kind: "archaeology", citation: "A. Eliyahu-Behar et al., “Iron and Bronze Production in Iron Age IIA Philistia: New Evidence from Tell es-Safi/Gath, Israel,” Journal of Archaeological Science 39 (2012)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-014",
    era: "united-monarchy",
    level: 3,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "David's lament for Saul and Jonathan is said to be written in which lost book?",
    choices: ["The Book of Enoch", "The Book of Jubilees", "The Book of Tobit", "The Book of Jashar"],
    answer: 3,
    explanation: {
      textSays:
        "2 Samuel 1:18 says the song “is written in the book of Jashar.” Its refrain gave English a famous phrase: “How the mighty have fallen!” (1:19, 25, 27). Joshua 10:13 also cites the book of Jashar.",
      world:
        "The Book of Jashar (“the upright”) has not survived. It seems to have been an early collection of poetry that biblical writers quoted from.",
      theirEyes:
        "Saul had hunted David for years, yet David's song mourns him as a hero — and Jonathan as a dearly loved friend (1:26).",
    },
    confidence: "settled",
    references: ["2 Samuel 1:17–27", "Joshua 10:13"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-015",
    era: "united-monarchy",
    level: 3,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The Tel Dan inscription, found in 1993, contains a phrase most scholars read as a reference to David. Which?",
    choices: ["“Son of Jesse”", "“King of Jerusalem”", "“House of David”", "“Lion of Judah”"],
    answer: 2,
    explanation: {
      world:
        "Carved in Aramaic in the 9th century BCE, about 150 years after David, probably for Hazael of Damascus, the stele boasts of killing a king of Israel and a king of the “house of David” (bytdwd). It is the earliest widely accepted reference to David's dynasty outside the Bible. Excavators under Avraham Biran found fragments in 1993 and 1994; it is in the Israel Museum.",
      textSays: "2 Kings 9 credits Jehu, not Hazael, with killing Joram of Israel and Ahaziah of Judah.",
      theirEyes: "To an Aramean king, Judah's royal house was simply “the house of David” — the dynasty known by its founder.",
      debate:
        "A few scholars read bytdwd as a place or divine name, since no word divider separates the words. Some also find “house of David” on the Mesha Stele, but that reading is disputed.",
    },
    confidence: "mainstream",
    references: ["2 Kings 9:14–28"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Tel Dan Stele, Israel Museum, Jerusalem" },
      { kind: "scholarship", citation: "A. Biran and J. Naveh, “An Aramaic Stele Fragment from Tel Dan,” Israel Exploration Journal 43 (1993): 81–98" },
      { kind: "scholarship", citation: "A. Biran and J. Naveh, “The Tel Dan Inscription: A New Fragment,” Israel Exploration Journal 45 (1995): 1–18" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 4 ─────────────
  {
    id: "mon-016",
    era: "united-monarchy",
    level: 4,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 2 Samuel 18, how was the rebel prince Absalom caught in the forest?",
    choices: [
      "His chariot overturned in a ravine",
      "His head caught in an oak as his mule ran on",
      "He was trapped in a cave",
      "He fell into a hunter's pit",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Absalom had himself proclaimed king at Hebron (2 Samuel 15:10). In battle his head caught in an oak, leaving him hanging, and Joab and his armour-bearers killed him (18:9–15). David's cry of grief for his son is 18:33 in English Bibles, 19:1 in Hebrew.",
      world: "2 Samuel 14:26 says Absalom's hair was so thick he cut it yearly, weighing 200 shekels.",
      theirEyes: "The young prince who had won hearts at the city gate now hung helpless in a tree while his father's men closed in.",
      tradition: {
        jewish:
          "Josephus links the two details: Absalom “entangled his hair greatly in the large boughs of a knotty tree” (Antiquities 7.239).",
      },
    },
    confidence: "settled",
    references: ["2 Samuel 14:26", "2 Samuel 15:10", "2 Samuel 18:9–15", "2 Samuel 18:33"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 7.239 (7.10.2), Whiston translation" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-017",
    era: "united-monarchy",
    level: 4,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After David's census and the plague, he bought a threshing floor to build an altar. Who sold it?",
    choices: ["Barzillai the Gileadite", "Ittai the Gittite", "Araunah the Jebusite", "Nabal of Carmel"],
    answer: 2,
    explanation: {
      textSays:
        "David buys Araunah's threshing floor for fifty shekels of silver and the plague stops (2 Samuel 24:18–25). 1 Chronicles 21 calls him Ornan and gives 600 shekels of gold; 2 Chronicles 3:1 says the Temple was built on this spot.",
      world:
        "Threshing floors were flat, open places where wind carried away the chaff — a natural spot for an altar.",
      theirEyes: "A Jebusite farmer offered his land, oxen and wood for free, but the king insisted on paying.",
      debate:
        "The two accounts also differ on who prompted the census: 2 Samuel 24:1 says Yahweh's anger, 1 Chronicles 21:1 says Satan.",
    },
    confidence: "settled",
    references: ["2 Samuel 24:1–25", "1 Chronicles 21:1", "1 Chronicles 21:25", "2 Chronicles 3:1"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-018",
    era: "united-monarchy",
    level: 4,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What does the Gezer Calendar, a small limestone tablet usually dated to the 10th century BCE, list?",
    choices: ["The sacrifices for each festival", "Prices in the market", "The kings of Judah", "Farming tasks through the year"],
    answer: 3,
    explanation: {
      world:
        "Found in 1908 by R. A. S. Macalister at Gezer, this palm-sized tablet lists periods of the farming year with their tasks: ingathering, sowing, late planting, flax, barley, harvest, pruning and summer fruit. It is in the Istanbul Archaeology Museums.",
      textSays: "1 Kings 9:15–17 says Solomon rebuilt Gezer after Pharaoh captured it and gave it as a dowry.",
      theirEyes: "Months were not names on a calendar but jobs: when to sow, when to cut flax, when to pick the summer fruit.",
      debate:
        "The tablet was not found in a clearly datable layer, so its date rests mainly on the shape of its letters; most place it in the 10th century BCE. Scholars also debate whether its language is early Hebrew, Phoenician or a more general Canaanite dialect.",
    },
    confidence: "settled",
    references: ["1 Kings 9:15–17"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Gezer Calendar, Istanbul Archaeology Museums (Museum of the Ancient Orient)" },
      { kind: "scholarship", citation: "Shmuel Ahituv, Echoes from the Past: Hebrew and Cognate Inscriptions from the Biblical Period (Carta, 2008), “The Gezer Calendar”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-019",
    era: "united-monarchy",
    level: 4,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Khirbet Qeiyafa, a fortified town from about 1000 BCE, overlooks which valley from the David and Goliath story?",
    choices: ["The Valley of Elah", "The Jezreel Valley", "The Kidron Valley", "The Jordan Valley"],
    answer: 0,
    explanation: {
      textSays: "Saul's army camps in the Valley of Elah facing the Philistines (1 Samuel 17:2), whose dead later lie along the road to Shaaraim (17:52).",
      world:
        "Excavated from 2007 by Yosef Garfinkel and Saar Ganor, the site sits on a ridge above the Valley of Elah. It has a casemate wall (two parallel walls with rooms between) and radiocarbon dates around 1000 BCE. The excavators report two gates and link the site to Sha'arayim, “two gates”; other scholars propose different ancient names.",
      theirEyes: "From these walls, defenders could watch the valley road the Philistines would use to march inland.",
      debate:
        "Who built the town is debated. Garfinkel and Ganor see a Judahite town and evidence for an organised kingdom in David's time. Nadav Na'aman has argued that it was not Judahite, suggesting Canaanite or Philistine links; Israel Finkelstein and Alexander Fantalkin link it to an early northern Israelite polity. Its exact dates are also argued (roughly 1050–915 BCE in Finkelstein's reading).",
    },
    confidence: "settled",
    references: ["1 Samuel 17:2", "1 Samuel 17:52"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Y. Garfinkel and S. Ganor, Khirbet Qeiyafa Vol. 1: Excavation Report 2007–2008 (Israel Exploration Society, 2009)" },
      { kind: "scholarship", citation: "I. Finkelstein and A. Fantalkin, “Khirbet Qeiyafa: An Unsensational Archaeological and Historical Interpretation,” Tel Aviv 39 (2012): 38–63" },
      { kind: "scholarship", citation: "N. Na'aman, “Was Khirbet Qeiyafa a Judahite City? The Case against It,” Journal of Hebrew Scriptures 17 (2017)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-020",
    era: "united-monarchy",
    level: 4,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Most historians place the kingdom of Sheba, whose queen visited Solomon, in which region?",
    choices: ["Persia (modern Iran)", "Greece", "Southern Arabia (modern Yemen)", "Anatolia (modern Turkey)"],
    answer: 2,
    explanation: {
      textSays: "The queen of Sheba comes to test Solomon with hard questions, bringing spices, gold and precious stones (1 Kings 10:1–13).",
      world:
        "Saba was a South Arabian kingdom whose kings ruled from Marib, in Yemen, and grew rich on the incense trade. No inscription confirms the queen herself.",
      theirEyes: "A long camel caravan heavy with spices meant a visitor from the far south, where frankincense grew.",
      tradition: {
        jewish: "Josephus calls her the queen of Egypt and Ethiopia (Antiquities 8.6.5).",
        christian:
          "Jesus speaks of the Queen of the South coming to hear Solomon's wisdom (Matthew 12:42). Ethiopian Christian tradition, in the Kebra Nagast (14th century CE), says she bore Solomon a son, Menelik I.",
      },
      debate:
        "Some, following Josephus and Ethiopian tradition, place Sheba in Ethiopia instead. Saba's power peaked after Solomon's traditional date, and whether the queen was a historical person is unknown.",
    },
    confidence: "mainstream",
    references: ["1 Kings 10:1–13", "Matthew 12:42"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 8.6.5" },
      { kind: "primary", citation: "Kebra Nagast (Ethiopian, 14th century CE)" },
      { kind: "reference", citation: "“Where did the Queen of Sheba rule—Arabia or Africa?” National Geographic History" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 5 ─────────────
  {
    id: "mon-021",
    era: "united-monarchy",
    level: 5,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the traditional Hebrew text of 2 Samuel 21:19, who is said to strike down Goliath the Gittite?",
    choices: ["Joab", "Elhanan", "Benaiah", "Abner"],
    answer: 1,
    explanation: {
      textSays:
        "The traditional Hebrew (Masoretic) text says Elhanan son of Jaare-Oregim of Bethlehem struck Goliath the Gittite, whose spear shaft was like a weaver's beam. The WEB, like the KJV, reads “Goliath the Gittite’s brother,” bringing it into line with 1 Chronicles 20:5, where Elhanan kills Lahmi, Goliath's brother. 1 Samuel 17 credits David with killing Goliath.",
      world: "Hebrew scribes copied by hand, and a few similar-looking letters can change a phrase.",
      theirEyes: "Veterans' stories of giant-killers from Gath were told and retold around many campfires.",
      debate:
        "Some scholars think the Samuel text was miscopied and the Chronicles reading is right; others think an older tradition credited Elhanan, and the feat was later attached to David.",
    },
    confidence: "settled",
    references: ["2 Samuel 21:19", "1 Chronicles 20:5", "1 Samuel 17:7", "1 Samuel 17:50"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Kaspars Ozolins, “Who killed Goliath? The puzzling text of 2 Samuel 21:19,” Tyndale House (2022)" },
      { kind: "scholarship", citation: "P. Kyle McCarter Jr., II Samuel (Anchor Bible 9, 1984), notes on 21:19" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-022",
    era: "united-monarchy",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: archaeologists agree that the large building Eilat Mazar uncovered in Jerusalem in 2005 was King David's palace.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays: "2 Samuel 5:11 says Hiram's craftsmen built David a house in Jerusalem.",
      world:
        "Eilat Mazar began digging in the City of David in February 2005. She dated the first phase of her “Large Stone Structure” to around the 10th century BCE, suggested it was David's palace, and argued that the nearby Stepped Stone Structure belonged to the same complex.",
      theirEyes: "A king who had spent years on the run would want walls that showed everyone he was here to stay.",
      debate:
        "Finkelstein, Herzog, Singer-Avitz and Ussishkin (2007) argued that the walls belong to different periods, mostly later, and do not form one building. Others, including Amihai Mazar, accept that parts of the structure are early but see the palace identification as unproven. This fits a wider debate: Finkelstein's “low chronology” sees 10th-century Jerusalem as a small town, while scholars such as Amihai Mazar and Yosef Garfinkel argue for a more developed early kingdom.",
    },
    confidence: "settled",
    references: ["2 Samuel 5:11"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Eilat Mazar, “Did I Find King David's Palace?” Biblical Archaeology Review 32:1 (January/February 2006)" },
      { kind: "scholarship", citation: "Amihai Mazar, “Archaeology and the Biblical Narrative: The Case of the United Monarchy,” in R. G. Kratz and H. Spieckermann (eds.), One God – One Cult – One Nation (De Gruyter, 2010)" },
      { kind: "scholarship", citation: "I. Finkelstein, Z. Herzog, L. Singer-Avitz and D. Ussishkin, “Has King David's Palace in Jerusalem Been Found?” Tel Aviv 34 (2007)" },
      { kind: "scholarship", citation: "I. Finkelstein and N. A. Silberman, David and Solomon (Free Press, 2006)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-023",
    era: "united-monarchy",
    level: 5,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Many modern Bibles say Solomon's horses came from Egypt and “Kue” (1 Kings 10:28). Where was Kue?",
    choices: ["Crete", "Cilicia, in southern Turkey", "Babylonia", "Arabia"],
    answer: 1,
    explanation: {
      textSays:
        "1 Kings 10:28–29 describes Solomon's merchants trading horses and chariots. The WEB reads the Hebrew word as “droves” and the KJV as “linen yarn,” but many modern versions read it as the place-name Kue.",
      world:
        "Assyrian records call the kingdom of the Cilician plain, in south-eastern Turkey, Que; 2 Chronicles 1:16 has the same Hebrew word. At Megiddo, pillared buildings were once called “Solomon's stables,” but they are now dated well after Solomon, to the 9th or 8th century BCE; Norma Franklin, for example, links them to an 8th-century horse trade with Assyria.",
      theirEyes: "Horses were the luxury cars of the age, and a royal stable full of them told the world a king was rich.",
      debate:
        "Whether Megiddo's pillared buildings were stables, storehouses or barracks is still debated, as is their exact date.",
    },
    confidence: "mainstream",
    references: ["1 Kings 10:28–29", "2 Chronicles 1:16"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Mordechai Cogan, I Kings (Anchor Bible 10; Doubleday, 2001), notes on 1 Kings 10:28–29" },
      { kind: "scholarship", citation: "Norma Franklin, “Megiddo's Stables: Trading Egyptian Horses to the Assyrian Empire,” TheTorah.com (2019)" },
      { kind: "scholarship", citation: "Graham I. Davies, “King Solomon's Stables — Still at Megiddo?” Biblical Archaeology Review 20:1 (1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-024",
    era: "united-monarchy",
    level: 5,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "1 Kings 6 describes the Temple's innermost room as a perfect cube. How long was each side?",
    choices: ["12 cubits", "40 cubits", "60 cubits", "20 cubits"],
    answer: 3,
    explanation: {
      textSays:
        "The inner sanctuary was 20 cubits long, wide and high, overlaid with gold (1 Kings 6:20). The whole house was 60 cubits long (6:2), and the Ark stood under two olive-wood cherubim (6:23–28; 8:6).",
      world:
        "A cubit was about 45 cm, so the room was roughly 9 m each way. The three-part plan — porch, hall, inner room — resembles excavated Iron Age temples in Syria and Turkey, such as 'Ain Dara and Tell Tayinat.",
      theirEyes: "Worshippers never saw this room: it was dark, silent and reserved for God's presence.",
      tradition: {
        jewish:
          "Josephus says the inmost room of the Temple in his own day was also 20 cubits, held nothing at all, was “inaccessible and inviolable, and not to be seen by any,” and was called the Holy of Holies (Jewish War 5.5.5, Whiston translation).",
        christian: "Hebrews 9:3–7 describes the Holy of Holies, entered by the high priest once a year.",
      },
    },
    confidence: "settled",
    references: ["1 Kings 6:2", "1 Kings 6:20", "1 Kings 6:23–28", "1 Kings 8:6", "Hebrews 9:3–7"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 5.5.5 (5.219), Whiston translation" },
      { kind: "scholarship", citation: "Victor Hurowitz, “Solomon's Temple in Context,” Biblical Archaeology Review 37:2 (March/April 2011)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-025",
    era: "united-monarchy",
    level: 5,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Asked to lighten their burden, Rehoboam said his father used whips — but he would use what?",
    choices: ["Chains", "Scorpions", "Swords", "Fire"],
    answer: 1,
    explanation: {
      textSays:
        "Rehoboam tells the people that his father “chastised you with whips, but I will chastise you with scorpions” (1 Kings 12:11, repeated in 12:14). The northern tribes rejected Rehoboam and made Jeroboam king, splitting the kingdom (12:16–20).",
      world:
        "In Rehoboam's fifth year Shishak king of Egypt attacked Jerusalem (1 Kings 14:25). Most scholars identify him with Pharaoh Shoshenq I, whose triumphal relief at Karnak lists places in Canaan; his campaign is usually dated around 925 BCE.",
      theirEyes: "Northerners who had worked on Solomon's buildings heard the new king promise more of the same — and walked away.",
    },
    confidence: "settled",
    references: ["1 Kings 12:1–20", "1 Kings 14:25–26"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Shoshenq I triumphal relief, Bubastite Portal, Temple of Amun, Karnak" },
      { kind: "scholarship", citation: "Kenneth A. Kitchen, The Third Intermediate Period in Egypt (1100–650 BC) (Aris & Phillips, 2nd ed., 1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
