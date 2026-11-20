import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const patriarchs3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "pat-051",
    era: "patriarchs",
    level: 11,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After Rebekah watered his camels, what did Abraham's servant give her?",
    choices: ["A purse of silver coins", "A silver mirror and a veil", "A gold nose ring and two gold bracelets", "A signet ring and a staff"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 24:22: the servant took “a golden ring of half a shekel weight, and two bracelets for her hands of ten shekels weight of gold.” Later he explains: “I put the ring on her nose, and the bracelets on her hands” (24:47).",
      world:
        "The gifts are measured by weight, not counted in coins: coins did not appear until many centuries later. Nose rings were ordinary women's jewellery in Israel too; Isaiah lists “the nose rings” among the finery of Jerusalem's women (Isaiah 3:21).",
      theirEyes:
        "Gold on her face and arms told everyone at the spring that a wealthy household had come looking for her family.",
    },
    confidence: "settled",
    references: ["Genesis 24:22", "Genesis 24:47", "Isaiah 3:21"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-052",
    era: "patriarchs",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which brother of Rebekah ran out to the spring to welcome Abraham's servant?",
    choices: ["Bethuel", "Laban", "Nahor", "Lot"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 24:29–30: “Rebekah had a brother, and his name was Laban. Laban ran out to the man, to the spring.” The text notes he came “when he saw the ring, and the bracelets on his sister's hands.” Bethuel was her father and Nahor her grandfather (24:24).",
      world:
        "Laban and Bethuel answer the marriage request together (24:50), and the servant gives “precious things to her brother and her mother” (24:53): a marriage was a deal between families, not just two people.",
      theirEyes:
        "Laban's welcome is warm — but the storyteller makes sure we notice he saw the gold first. Decades later, Jacob will meet the same Laban.",
    },
    confidence: "settled",
    references: ["Genesis 24:24", "Genesis 24:29–31", "Genesis 24:50–53"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-053",
    era: "patriarchs",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When the twins struggled inside Rebekah, what did Yahweh tell her?",
    choices: ["The younger will serve the elder", "The elder will serve the younger", "Both sons will be kings in Egypt", "The two will become a single nation"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 25:22–23: “The children struggled together within her.” Yahweh says: “Two nations are in your womb… The elder will serve the younger.”",
      world:
        "Later books read Israel and Edom's history through this oracle: David “put garrisons in Edom… and all the Edomites became servants to David” (2 Samuel 8:14), but under King Jehoram “Edom revolted from under the hand of Judah” (2 Kings 8:20).",
      theirEyes:
        "For an Israelite listener, the kicking twins were not just babies — they were two neighbouring peoples whose wars they knew well.",
      tradition: {
        christian:
          "Paul quotes the oracle, “The elder will serve the younger,” alongside Malachi's “Jacob I loved, but Esau I hated,” in his argument about God's choosing (Romans 9:12–13).",
      },
    },
    confidence: "settled",
    references: ["Genesis 25:22–23", "2 Samuel 8:14", "2 Kings 8:20", "Romans 9:12–13", "Malachi 1:2–3"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-054",
    era: "patriarchs",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Genesis says Jacob was born holding on to Esau's heel.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 25:26: “his brother came out, and his hand had hold on Esau's heel. He was named Jacob.” The prophet Hosea recalls it: “In the womb he took his brother by the heel” (Hosea 12:3; Hebrew 12:4).",
      world:
        "The name Ya'aqov (Jacob) sounds like the Hebrew 'aqev, “heel.” Esau later turns it into a bitter pun on a related verb meaning to supplant or trip up: “Isn't he rightly named Jacob? For he has supplanted me these two times” (Genesis 27:36).",
      theirEyes:
        "In a world where names were thought to say something about a person, a baby named after a grab at his brother's heel had a story waiting for him.",
    },
    confidence: "settled",
    references: ["Genesis 25:26", "Genesis 27:36", "Hosea 12:3"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-055",
    era: "patriarchs",
    level: 11,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Isaac named a well Rehoboth when the herdsmen of Gerar stopped quarrelling. What does Rehoboth mean?",
    choices: ["Contention", "Hostility", "Well of the oath", "Broad places"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 26:20–22: the herdsmen of Gerar said, “The water is ours,” so Isaac named the wells Esek (“contention”) and Sitnah (“hostility”). Over the third “they didn't argue,” so he called it Rehoboth (“broad places”): “For now Yahweh has made room for us.”",
      world:
        "In the dry Negev, a well was a life-or-death asset, and digging one was a claim on the land around it. Genesis calls Gerar's ruler “Abimelech king of the Philistines” (26:1); many historians note the Philistines are attested in Canaan only from about the 12th century BCE.",
      theirEyes:
        "Each new well meant days of digging in hard ground — and each time, someone else's herdsmen showed up to claim it.",
    },
    confidence: "settled",
    references: ["Genesis 26:1", "Genesis 26:17–22"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Philistine,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "pat-056",
    era: "patriarchs",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which son of Jacob was born to Rachel's servant Bilhah?",
    choices: ["Reuben", "Judah", "Dan", "Issachar"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 30:5–6: Bilhah bore a son and Rachel said, “God has judged me… and has given me a son.” She named him Dan, which sounds like the Hebrew for “judged.” Genesis 35:23–26 groups the twelve by mother: Leah (Reuben, Simeon, Levi, Judah, Issachar, Zebulun), Rachel (Joseph, Benjamin), Bilhah (Dan, Naphtali), Zilpah (Gad, Asher).",
      world:
        "A servant's child could be counted as her mistress's own — as with Sarai and Hagar earlier. Reuben, Judah and Issachar were all Leah's sons.",
      theirEyes:
        "In the rivalry between two sisters, every baby's name was a message — Rachel's first “son” is named for her vindication.",
    },
    confidence: "settled",
    references: ["Genesis 30:1–8", "Genesis 35:23–26"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-057",
    era: "patriarchs",
    level: 12,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Esau's first two wives, who “grieved” Isaac and Rebekah, came from which people?",
    choices: ["The Egyptians", "The Philistines", "The Arameans", "The Hittites"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 26:34–35: Esau married Judith, daughter of Beeri the Hittite, and Basemath, daughter of Elon the Hittite. “They grieved Isaac's and Rebekah's spirits.” Rebekah uses this to send Jacob to her family: “I am weary of my life because of the daughters of Heth” (27:46). Esau then also marries Mahalath, Ishmael's daughter (28:9). (Genesis 36:2–3 gives a differently named list of his wives.)",
      world:
        "How Genesis's “Hittites” or “children of Heth” in Canaan relate to the great Hittite kingdom of Anatolia is unclear; many scholars think the name refers to a local group.",
      theirEyes:
        "Marrying inside the wider family kept property and traditions together; marrying local women felt to the parents like losing a son to the neighbours.",
      tradition: {
        jewish:
          "The Book of Jubilees (2nd century BCE) expands the theme with a long speech in which Rebekah urges Jacob not to take a Canaanite wife as Esau did (Jubilees 25).",
      },
    },
    confidence: "settled",
    references: ["Genesis 26:34–35", "Genesis 27:46", "Genesis 28:9", "Genesis 36:2–3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 25" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-058",
    era: "patriarchs",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "To fool blind Isaac, what did Rebekah put on Jacob's hands and neck?",
    choices: ["Lamb's wool soaked in oil", "Skins of young goats", "Esau's leather hunting gloves", "Ashes and dust"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 27:16: “She put the skins of the young goats on his hands, and on the smooth of his neck.” She also dressed him in “the good clothes of Esau” (27:15). Isaac “didn't recognize him, because his hands were hairy, like his brother Esau's hands. So he blessed him” (27:23).",
      world:
        "The same two goat kids became the meal Isaac asked for (27:9). Goat meat was everyday food, while venison was a hunter's prize.",
      theirEyes:
        "A blind old man could only test his son by touch, smell and voice — and Rebekah prepared for every test she could.",
      tradition: {
        christian: "Hebrews 11:20 remembers the scene as an act of faith: “By faith Isaac blessed Jacob and Esau, even concerning things to come.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 27:9", "Genesis 27:15–23", "Hebrews 11:20"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-059",
    era: "patriarchs",
    level: 12,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "When Jacob came in disguised as Esau, what did Isaac say did NOT match?",
    choices: ["The voice", "The hands", "The smell of his clothes", "The taste of the meat"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 27:22: Isaac felt him and said, “The voice is Jacob's voice, but the hands are the hands of Esau.” The smell of Esau's clothes then reassured him: “the smell of my son is as the smell of a field which Yahweh has blessed” (27:27).",
      world:
        "A father's blessing was treated as binding once spoken. When Esau arrives, Isaac trembles but says of Jacob, “Yes, he will be blessed” (27:33).",
      theirEyes:
        "Isaac's doubts came twice — at how quickly the “hunt” was done (27:20), and at the voice — but the hands, the meal and the smell all said Esau.",
    },
    confidence: "settled",
    references: ["Genesis 27:20–27", "Genesis 27:33"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-060",
    era: "patriarchs",
    level: 12,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Bethel, what did Jacob vow to give God if he came home safely?",
    choices: ["His firstborn son", "Half his flocks", "A golden altar", "A tenth of all he was given"],
    answer: 3,
    explanation: {
      textSays:
        "Jacob set up his stone pillow as a pillar and “poured oil on its top” (Genesis 28:18). Then he vowed that the stone would be “God's house,” adding: “Of all that you will give me I will surely give a tenth to you” (28:22).",
      world:
        "Bethel later became a royal sanctuary of the northern kingdom. The prophet Amos mocks its worshippers: “Go to Bethel, and sin… your tithes every three days” (Amos 4:4).",
      theirEyes:
        "A runaway with nothing but a staff promises a tenth of a fortune he doesn't yet have — a bargain made in the dark, on a hillside.",
      tradition: {
        jewish:
          "The Book of Jubilees has Jacob keep the vow when he returns to Bethel: Levi is made priest there and Jacob gives a tithe of everything (Jubilees 32).",
      },
    },
    confidence: "settled",
    references: ["Genesis 28:18–22", "Amos 4:4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 32" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "pat-061",
    era: "patriarchs",
    level: 13,
    category: "daily-life",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Jacob says he served Laban fourteen years in all.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 31:41: “These twenty years I have been in your house. I served you fourteen years for your two daughters, and six years for your flock, and you have changed my wages ten times.”",
      world:
        "Normally a groom's family paid the bride's father (compare the “dowry” of Exodus 22:16–17; Hebrew 22:15–16). Jacob had nothing to pay, so he worked instead. Rachel and Leah complain that their father “has sold us, and has also used up our money” (Genesis 31:15).",
      theirEyes:
        "Fourteen years were for his wives; the last six were for flocks of his own — the only way a penniless nephew could build a household.",
      tradition: {
        shared: "Hosea 12:12 (Hebrew 12:13) remembers it: “Israel served to get a wife. For a wife he tended flocks and herds.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 31:14–15", "Genesis 31:38–41", "Exodus 22:16–17", "Hosea 12:12"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-062",
    era: "patriarchs",
    level: 13,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "What did Jacob set at the watering troughs so the flocks would bear streaked and speckled young?",
    choices: ["Coloured cloths", "Polished bronze mirrors", "Peeled rods of poplar, almond and plane tree", "Spotted stones from the river"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 30:37–39: Jacob “took to himself rods of fresh poplar, almond, and plane tree, peeled white streaks in them” and set them “opposite the flocks in the watering troughs.” Later he tells his wives a dream showed him that God was behind the result (31:10–12).",
      world:
        "Jacob's agreed wage was every speckled or spotted goat and every black sheep (30:32). In the region sheep were usually white and goats dark, as Sarna notes; the Song of Songs compares a woman's teeth to ewes fresh “from the washing” and her hair to “a flock of goats” (6:6; 4:1). So Laban expected Jacob to get very few.",
      theirEyes:
        "Laban thought he had struck a cheap deal; the shepherd he had cheated for years was about to take the best of the flock.",
    },
    confidence: "settled",
    references: ["Genesis 30:31–43", "Genesis 31:10–12", "Song of Songs 4:1", "Song of Songs 6:6"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "N. M. Sarna, The JPS Torah Commentary: Genesis (Jewish Publication Society, 1989)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-063",
    era: "patriarchs",
    level: 13,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jacob called the witness heap Galeed. Laban called it Jegar Sahadutha, in which language?",
    choices: ["Akkadian", "Aramaic", "Egyptian", "Greek"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 31:47: “Laban called it Jegar Sahadutha, but Jacob called it Galeed.” Both names mean “Witness Heap,” one in Aramaic and one in Hebrew. Laban is called “Laban the Syrian” — that is, the Aramean (31:20).",
      world:
        "The two words are the only Aramaic in Genesis. Aramaic later became an international language, and parts of Ezra, Daniel and one verse of Jeremiah (10:11) are written in it. Arameans as a people first appear clearly in Assyrian records around 1100 BCE.",
      theirEyes:
        "Two relatives, two languages, one pile of stones: the border between the families was also a border between tongues.",
    },
    confidence: "settled",
    references: ["Genesis 31:20", "Genesis 31:44–48", "Jeremiah 10:11"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Aramaic language,” Encyclopaedia Britannica" },
      { kind: "reference", citation: "“Aramean,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-064",
    era: "patriarchs",
    level: 13,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: at Mizpah, Laban and Jacob made the stone heap a boundary that neither would cross to harm the other.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Laban said, “Yahweh watch between me and you, when we are absent one from another” (Genesis 31:49), and: “I will not pass over this heap to you, and… you will not pass over this heap and this pillar to me, for harm” (31:52). Each swore by his own family's God (31:53).",
      world:
        "The name Mizpah is linked to the Hebrew verb for “watch.” The pact was set in Gilead, the hill country east of the Jordan that later kings of Israel and Aram fought over (1 Kings 22:3).",
      theirEyes:
        "Read in its setting, the famous “Yahweh watch between me and you” is less a fond farewell than a wary truce: God is asked to keep an eye on both sides.",
    },
    confidence: "settled",
    references: ["Genesis 31:44–53", "1 Kings 22:3"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-065",
    era: "patriarchs",
    level: 13,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After leaving Laban, Jacob met angels of God and named the place Mahanaim. What does the name mean?",
    choices: ["Face of God", "House of God", "Two camps", "Witness heap"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 32:1–2 (Hebrew 32:2–3): “the angels of God met him.” Jacob said, “This is God's army,” and named the place Mahanaim, “two camps.” Soon after, fearing Esau, he “divided the people who were with him… into two companies” (32:7; Hebrew 32:8).",
      world:
        "Mahanaim, east of the Jordan, later served as a refuge: Abner brought Saul's son Ishbosheth there (2 Samuel 2:8), and David fled there from Absalom (2 Samuel 17:24). Its exact site is debated.",
      theirEyes:
        "Jacob's own camp on the road, and God's camp beside it — a comfort for a man walking towards a brother who might kill him.",
    },
    confidence: "settled",
    references: ["Genesis 32:1–2", "Genesis 32:7", "2 Samuel 2:8", "2 Samuel 17:24"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "pat-066",
    era: "patriarchs",
    level: 14,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Jacob's messengers warned him that Esau was coming to meet him with how many men?",
    choices: ["Forty", "318", "Four hundred", "One thousand"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 32:6 (Hebrew 32:7): “He is coming to meet you, and four hundred men are with him.” Jacob sent ahead a huge gift — including 200 female goats, 200 ewes, 30 milk camels with their colts and 40 cows (32:13–15; Hebrew 32:14–16). But when they met, “Esau ran to meet him, embraced him, fell on his neck, kissed him, and they wept” (33:4).",
      world: "Four hundred men was a war band. The number 318 belongs to Abram's rescue party in Genesis 14:14.",
      theirEyes:
        "Jacob spent the night expecting an army and sent wave after wave of animals ahead — then his brother ran towards him with open arms.",
    },
    confidence: "settled",
    references: ["Genesis 32:6", "Genesis 32:13–15", "Genesis 33:1–4", "Genesis 14:14"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-067",
    era: "patriarchs",
    level: 14,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Jacob named the place where he wrestled Peniel. What does Peniel mean?",
    choices: ["God has heard", "Face of God", "Ford of the river", "God's army"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 32:30 (Hebrew 32:31): “Jacob called the name of the place Peniel; for he said, ‘I have seen God face to face, and my life is preserved.’” He left limping (32:31; Hebrew 32:32). Hosea says he “struggled with the angel, and prevailed” (Hosea 12:4; Hebrew 12:5).",
      world:
        "Under the spelling Penuel the place reappears as a town: Gideon threatened to break down its tower (Judges 8:8–9), and Jeroboam I “built Penuel” (1 Kings 12:25).",
      theirEyes:
        "Seeing God's face was believed to be deadly (compare Exodus 33:20). Jacob walked away at sunrise amazed that he was alive at all.",
    },
    confidence: "settled",
    references: ["Genesis 32:24–31", "Hosea 12:4", "Judges 8:8–9", "1 Kings 12:25", "Exodus 33:20"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-068",
    era: "patriarchs",
    level: 14,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the Jabbok, where Jacob wrestled, is a river flowing from the east into the Jordan.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 32:22 (Hebrew 32:23): Jacob took his family “and crossed over the ford of the Jabbok.” Deuteronomy 3:16 names “the river Jabbok, which is the border of the children of Ammon.”",
      world:
        "The Jabbok is today's Zarqa River in Jordan, one of the main eastern tributaries of the Jordan. In Hebrew the scene is full of wordplay: Jabbok (Yabboq), “wrestled” (ye'aveq) and Jacob (Ya'aqov) all sound alike.",
      theirEyes:
        "A river ford at night was a lonely, dangerous place — and Jacob chose to stay behind there alone after sending everyone across.",
    },
    confidence: "settled",
    references: ["Genesis 32:22–24", "Deuteronomy 3:16"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Zarqāʾ River,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-069",
    era: "patriarchs",
    level: 14,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Jewish philosopher Philo of Alexandria explained the name “Israel” as meaning what?",
    choices: ["Prince of peace", "One who sees God", "Son of the right hand", "House of bread"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 32:28 (Hebrew 32:29) links the name to struggle: “you have fought with God and with men, and have prevailed.”",
      tradition: {
        jewish:
          "Philo (1st century CE) repeatedly interprets Israel as “one who sees God,” the soul that has reached the vision of God; in On the Confusion of Tongues 146 “he who sees, Israel” is even one of the titles of the divine Word. Josephus, writing later that century, sticks closer to Genesis: the name “signifies one that struggled with the divine angel” (Antiquities 1.20.2).",
      },
      world: "“Son of the right hand” is the meaning of Benjamin, and “house of bread” a common explanation of Bethlehem.",
      theirEyes:
        "For a Greek-speaking Jew in Alexandria, Jacob's night of wrestling became a picture of the soul's long climb towards seeing God.",
      debate:
        "Philo's reading is a spiritual interpretation, not a grammar lesson; modern scholars usually take the name as a sentence with God as subject, such as “God strives” or “God rules.”",
    },
    confidence: "settled",
    references: ["Genesis 32:28"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, On the Confusion of Tongues 146; On the Change of Names" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.20.2" },
      { kind: "reference", citation: "F. Brown, S. R. Driver and C. A. Briggs, A Hebrew and English Lexicon of the Old Testament (1906), s.v. “Yisra'el”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-070",
    era: "patriarchs",
    level: 14,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "At Shechem, what did Jacob buy from the sons of Hamor?",
    choices: ["A cave to bury Rachel", "A well dug by Abraham", "A vineyard for Leah", "The plot of ground where he had pitched his tent"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 33:19: “He bought the parcel of ground where he had spread his tent, at the hand of the children of Hamor… for one hundred pieces of money.” He built an altar there called El Elohe Israel (33:20). Joseph's bones were later buried in that plot (Joshua 24:32).",
      world:
        "Shechem is identified with Tell Balata near modern Nablus. Excavations there uncovered a major Bronze Age city with massive fortifications and a large temple.",
      theirEyes:
        "After years as a hired shepherd, Jacob finally owned a piece of Canaan — a field just outside a walled city.",
      tradition: {
        christian:
          "John 4:5–6 sets Jesus' talk with the Samaritan woman at Sychar, “near the parcel of ground that Jacob gave to his son Joseph. Jacob's well was there.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 33:18–20", "Joshua 24:32", "John 4:5–6"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "G. E. Wright, Shechem: The Biography of a Biblical City (McGraw-Hill, 1965)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "pat-071",
    era: "patriarchs",
    level: 15,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After Dinah was dishonoured at Shechem, which two of her brothers attacked the city?",
    choices: ["Reuben and Judah", "Simeon and Levi", "Dan and Gad", "Joseph and Benjamin"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 34:25: “two of Jacob's sons, Simeon and Levi, Dinah's brothers, each took his sword” and attacked the city. Jacob rebuked them (34:30), and on his deathbed said, “Simeon and Levi are brothers. Their swords are weapons of violence” (49:5).",
      tradition: {
        jewish:
          "Second Temple writers often praised the brothers instead. Judith prays to the “God of my father Simeon, into whose hand you gave a sword” (Judith 9:2), and Jubilees says Levi's descendants were chosen as priests for their zeal (Jubilees 30). The Testament of Levi (date debated) also retells the attack.",
      },
      theirEyes:
        "Dinah's story is told almost entirely through the men around her — her own voice is never heard.",
    },
    confidence: "settled",
    references: ["Genesis 34:1–2", "Genesis 34:25–30", "Genesis 49:5–7", "Judith 9:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 30" },
      { kind: "primary", citation: "Testament of Levi 5–7" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-072",
    era: "patriarchs",
    level: 15,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Before going up to Bethel, what did Jacob do with his household's foreign gods and earrings?",
    choices: ["Burned them on an altar", "Hid them under the oak by Shechem", "Threw them into the Jabbok", "Sent them back to Laban"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 35:2–4: Jacob said, “Put away the foreign gods that are among you, purify yourselves, and change your garments.” They gave him the gods “and the rings which were in their ears; and Jacob hid them under the oak which was by Shechem.”",
      world:
        "Shechem returns in Joshua 24, where Joshua tells Israel to “put away the foreign gods” and sets up a great stone “under the oak” there (Joshua 24:23, 26). Why the earrings were handed over is not explained; some suggest they were linked to the images.",
      theirEyes:
        "Changing clothes and handing over charms was a public way to mark a fresh start before going to the place where God had first met Jacob.",
    },
    confidence: "settled",
    references: ["Genesis 35:1–4", "Joshua 24:23–26"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-073",
    era: "patriarchs",
    level: 15,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "As she died in childbirth, Rachel named her son Ben-oni. What does the World English Bible say the name means?",
    choices: ["Son of my right hand", "Son of my trouble", "Son of my people", "Gift of God"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 35:18–19: “she named him Benoni, but his father named him Benjamin” — the WEB notes give “son of my trouble” and “son of my right hand.” “Rachel died, and was buried on the way to Ephrath (also called Bethlehem).” Jacob set up a pillar on her grave (35:20).",
      world:
        "The domed Rachel's Tomb near Bethlehem marks the traditional site; the Bordeaux Pilgrim saw a tomb of Rachel there in 333 CE.",
      theirEyes:
        "Rachel had begged for children for years; she died bearing the second, on the road, with the journey still unfinished.",
      tradition: {
        shared:
          "Jeremiah 31:15 hears “Rachel weeping for her children” (Hebrew 31:14), and Matthew 2:18 quotes it for the children of Bethlehem.",
      },
      debate:
        "1 Samuel 10:2 places Rachel's tomb “on the border of Benjamin,” north of Jerusalem, so some scholars think “also called Bethlehem” is a later note. Hebrew 'on can also mean “strength” (as in Genesis 49:3).",
    },
    confidence: "settled",
    references: ["Genesis 35:16–20", "1 Samuel 10:2", "Jeremiah 31:15", "Matthew 2:18"],
    sources: [
      scripture,
      { kind: "primary", citation: "Itinerarium Burdigalense (Bordeaux Pilgrim), 333 CE" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-074",
    era: "patriarchs",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Genesis 36:31 lists kings who reigned in Edom before what?",
    choices: ["Before the Flood", "Before Abraham left Ur", "Before any king reigned over Israel", "Before Egypt had a pharaoh"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 36:31: “These are the kings who reigned in the land of Edom, before any king reigned over the children of Israel.” One of them, Jobab, came from Bozrah (36:33). The list is repeated in 1 Chronicles 1:43–50.",
      world:
        "Bozrah is identified with Busayra in southern Jordan, excavated by Crystal-M. Bennett; it flourished as Edom's capital in about the 8th–6th centuries BCE. Copper mines at Faynan show large-scale work in the region by the 10th century BCE.",
      theirEyes: "To an Israelite reader, Edom was the older brother who had kings first — a sore point between neighbours.",
      debate:
        "The verse seems to look back from a time when Israel already had kings. Many scholars see it as a sign that Genesis reached its final form after the monarchy began; traditional readers who hold to Mosaic authorship treat it as prophecy or a later editorial note.",
    },
    confidence: "settled",
    references: ["Genesis 36:31–39", "1 Chronicles 1:43–50"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "P. Bienkowski (ed.), Busayra: Excavations by Crystal-M. Bennett 1971–1980 (British Academy Monographs in Archaeology, 2002)" },
      { kind: "scholarship", citation: "T. E. Levy et al., “High-precision radiocarbon dating and historical biblical archaeology in southern Jordan,” PNAS 105 (2008)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-075",
    era: "patriarchs",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Book of Jubilees, how does the rivalry between Jacob and Esau finally end?",
    choices: ["Esau kills Jacob in revenge", "Jacob kills Esau in battle", "Both brothers die in a famine", "Esau becomes Jacob's servant in Egypt"],
    answer: 1,
    explanation: {
      textSays:
        "In Genesis the brothers make peace, bury Isaac together (35:29) and live apart because “the land… couldn't bear them because of their livestock” (36:6–7).",
      tradition: {
        jewish:
          "Jubilees (2nd century BCE) adds a sequel: after Isaac's death, Esau's sons push him into war against Jacob, and Jacob kills Esau with an arrow from his bow; Edom then becomes subject to Jacob's sons (Jubilees 37–38).",
      },
      theirEyes:
        "For Jews who had watched Judea fight the Idumeans (Edomites) in their own day, a story of Jacob defeating Esau felt timely.",
      debate:
        "Some scholars link this harsher ending to Maccabean and Hasmonean wars with Idumea: Judas Maccabeus fought “the children of Esau in Idumaea” (1 Maccabees 5:3), and John Hyrcanus later conquered the region in the late 2nd century BCE (Josephus, Antiquities 13.9.1). The date of Jubilees and of this passage is debated.",
    },
    confidence: "settled",
    references: ["Genesis 35:29", "Genesis 36:6–8", "1 Maccabees 5:3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 37–38 (trans. O. S. Wintermute, in J. H. Charlesworth, ed., The Old Testament Pseudepigrapha, vol. 2, 1985)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.9.1" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
