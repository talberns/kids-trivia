import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const unitedMonarchy2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "mon-026",
    era: "united-monarchy",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Watching Hannah pray silently at Shiloh, what did the priest Eli think was wrong with her?",
    choices: ["She was mourning a death", "She was drunk", "She was a foreigner", "She was possessed by a spirit"],
    answer: 1,
    explanation: {
      textSays:
        "1 Samuel 1:13: “Only her lips moved, but her voice was not heard. Therefore Eli thought she was drunk.” Hannah replies that she has not been drinking: “I poured out my soul before Yahweh” (1:15). Her later song of thanks fills 1 Samuel 2:1–10.",
      world: "Prayer was commonly said aloud, and Eli's reaction shows that a woman moving her lips without sound looked strange to him.",
      theirEyes: "At a feast where families ate and drank before the sanctuary, a weeping woman muttering to herself was easy to misread.",
      tradition: {
        jewish: "Pseudo-Philo's Biblical Antiquities, a Jewish retelling of the Bible from about the 1st century CE, expands Hannah's story and her song (chapters 50–51).",
        christian:
          "Many Christians hear Hannah's song echoed in Mary's Magnificat (Luke 1:46–55): both praise God for lifting up the lowly and bringing down the proud.",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 1:9–18", "1 Samuel 2:1–10", "Luke 1:46–55"],
    sources: [scripture, { kind: "primary", citation: "Pseudo-Philo, Liber Antiquitatum Biblicarum (Biblical Antiquities) 50–51" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-027",
    era: "united-monarchy",
    level: 6,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In her vow at Shiloh, what outward sign of dedication did Hannah promise for her son?",
    choices: [
      "He would wear only camel's hair",
      "He would never marry",
      "No razor would come on his head",
      "He would live in the wilderness",
    ],
    answer: 2,
    explanation: {
      textSays:
        "1 Samuel 1:11: “then I will give him to Yahweh all the days of his life, and no razor shall come on his head.” When the boy is weaned she brings him to Eli: “As long as he lives he is given to Yahweh” (1:28).",
      world:
        "Uncut hair was the mark of a Nazirite, someone set apart to God (Numbers 6:1–21). Samson was dedicated the same way before birth (Judges 13:5).",
      theirEyes: "Every time people saw the boy's long hair at the sanctuary, they knew he belonged to God by his mother's promise.",
      tradition: {
        jewish:
          "Second Temple copies make the link more explicit. The Septuagint adds at 1:11 that he will drink no wine or strong drink, and the Dead Sea Scroll 4QSamuel-a, in a partly damaged line at 1:22, has Hannah speak of giving him as a Nazirite for ever (a reading the NRSV follows).",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 1:11", "1 Samuel 1:22–28", "Numbers 6:1–21", "Judges 13:5"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, 1 Kingdoms (1 Samuel) 1:11; 4QSamuel-a (4Q51) at 1 Samuel 1:22" },
      { kind: "scholarship", citation: "F. M. Cross, D. W. Parry, R. J. Saley and E. Ulrich, Qumran Cave 4.XII: 1–2 Samuel (DJD 17; Clarendon Press, 2005)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-028",
    era: "united-monarchy",
    level: 6,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 1 Samuel 2, how did the servant of Eli's sons take meat from worshippers at Shiloh?",
    choices: [
      "By drawing lots among the families",
      "By weighing out a fixed share on scales",
      "By waiting until the family offered him a portion",
      "By stabbing a three-pronged fork into their cooking pots",
    ],
    answer: 3,
    explanation: {
      textSays:
        "The servant came “while the meat was boiling, with a fork of three teeth in his hand” and the priest took whatever the fork brought up (1 Samuel 2:13–14). He even demanded raw meat before the fat was burned, threatening to take it by force (2:15–16). “The sin of the young men was very great before Yahweh” (2:17). Eli's sons were Hophni and Phinehas (1:3).",
      world:
        "The Law gave priests set portions, such as the breast and right thigh, and said the fat belonged to God and must be burned first (Leviticus 7:29–34).",
      theirEyes: "A family that had walked for days to Shiloh watched a servant plunge a fork into their festival meal and walk off with the best of it.",
    },
    confidence: "settled",
    references: ["1 Samuel 1:3", "1 Samuel 2:12–17", "Leviticus 7:29–34"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-029",
    era: "united-monarchy",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: the first time Samuel heard the voice calling him at night, he knew it was God's.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Three times Samuel ran to Eli saying, “Here I am; for you called me” (1 Samuel 3:5, 8), because “Samuel didn't yet know Yahweh” (3:7). Eli then told him how to answer, and the fourth time Samuel said, “Speak; for your servant hears” (3:10). The chapter opens: “Yahweh's word was rare in those days” (3:1).",
      world: "“God's lamp hadn't yet gone out” (3:3). The sanctuary lamp was tended “from evening to morning” (Exodus 27:21), so the call came during the night.",
      theirEyes: "A boy sleeping near the Ark heard his name in the dark and naturally ran to the only other person there: his old, nearly blind master.",
      tradition: {
        christian: "Peter's speech in Acts speaks of “all the prophets from Samuel and those who followed after” (Acts 3:24), and Hebrews 11:32 names Samuel among the heroes of faith.",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 3:1–10", "Exodus 27:20–21", "Acts 3:24", "Hebrews 11:32"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-030",
    era: "united-monarchy",
    level: 6,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After the Ark was captured, what name did Phinehas' widow give her newborn son?",
    choices: ["Ebenezer", "Mephibosheth", "Ichabod", "Obed"],
    answer: 2,
    explanation: {
      textSays:
        "Israel camped at Ebenezer and the Philistines at Aphek (1 Samuel 4:1). The Ark was taken and Hophni and Phinehas were killed (4:11). Eli, 98 years old, fell backward when he heard, and “his neck broke” (4:15, 18). Phinehas' wife named the child Ichabod, saying, “The glory has departed from Israel!” (4:21).",
      world:
        "Aphek is identified with Tel Afek at the springs of the Yarkon River, a strategic pass on the coastal road. The name Ichabod is usually explained as “no glory” or “where is the glory?”.",
      theirEyes: "In one day the household of Shiloh's priests lost the Ark, two sons, their old father and, in childbirth, a young mother.",
    },
    confidence: "settled",
    references: ["1 Samuel 4:1–22"],
    sources: [scripture, { kind: "reference", citation: "“Aphek,” Encyclopaedia Judaica (2nd ed., 2007)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "mon-031",
    era: "united-monarchy",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Sending the Ark home, how did the Philistines test whether Israel's God had really struck them?",
    choices: [
      "They set it on a cart pulled by two nursing cows whose calves were shut up at home",
      "They floated it down the Yarkon River",
      "They asked the oracle at Ekron",
      "They placed it in the temple of Dagon a second time",
    ],
    answer: 0,
    explanation: {
      textSays:
        "If the untrained cows left their calves and went toward Beth-shemesh, it was God's doing; if not, “It was a chance” (1 Samuel 6:7–9). “The cows took the straight way by the way to Beth Shemesh… lowing as they went” (6:12). Reapers in the wheat harvest saw the Ark arrive (6:13). The Ark then stayed at Kiriath-jearim for twenty years (7:1–2).",
      world:
        "Beth-shemesh lay in the Sorek valley on the border between the Philistine plain and the hill country. Tel Aviv University excavations at Tel Beth-Shemesh have studied it as a frontier town.",
      theirEyes: "Mother cows bellowing for their calves, yet plodding steadily away from them: the Philistine lords followed the cart to see for themselves.",
      tradition: {
        jewish: "Josephus retells the test and says 70 people of Beth-shemesh died for approaching the Ark (Antiquities 6.1.4); the traditional Hebrew text of 6:19 gives 50,070.",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 6:7–19", "1 Samuel 7:1–2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 6.1.2–4" },
      { kind: "archaeology", citation: "Tel Beth-Shemesh excavations (Tel Aviv University), dir. Shlomo Bunimovitz and Zvi Lederman" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-032",
    era: "united-monarchy",
    level: 7,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What did the Philistine priests advise sending back with the Ark as a guilt offering?",
    choices: ["A gold statue of Dagon", "Golden models of tumors and mice", "Ten talents of silver", "The Israelite captives"],
    answer: 1,
    explanation: {
      textSays:
        "“Five golden tumors and five golden mice, for the number of the lords of the Philistines” (1 Samuel 6:4). The tumors stood for Ashdod, Gaza, Ashkelon, Gath and Ekron (6:17).",
      world:
        "The Bible presents the Philistines as five city-states, each under a ruler it calls a seren (“lord”), a title many scholars think is not Semitic. The priests explain that the golden images are meant to “give glory to the God of Israel,” hoping he would “release his hand” from them (6:5).",
      theirEyes: "Five cities sick at once: the Philistine lords were ready to pay gold to be rid of the captured Ark.",
      tradition: {
        jewish:
          "The Septuagint already mentions mice swarming the land when the plague struck Ashdod (5:6), and Josephus describes the disease as dysentery together with a plague of mice (Antiquities 6.1.1).",
      },
      debate: "What disease is meant is uncertain; the mice have led some to suggest bubonic plague, but the text gives too little detail to be sure.",
    },
    confidence: "settled",
    references: ["1 Samuel 5:6", "1 Samuel 6:1–18", "Joshua 13:3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, 1 Kingdoms (1 Samuel) 5:6; 6:1" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 6.1.1–2" },
      { kind: "reference", citation: "“Philistines,” Encyclopaedia Judaica (2nd ed., 2007)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-033",
    era: "united-monarchy",
    level: 7,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Izbet Sartah, an early Iron Age village near Aphek that its excavators proposed was Ebenezer, produced which famous find in 1976?",
    choices: ["A potsherd with an early alphabet", "A bronze model of the Ark", "A seal bearing Saul's name", "A Philistine temple"],
    answer: 0,
    explanation: {
      world:
        "Moshe Kochavi's excavations found a five-line ostracon (inscribed potsherd) in a storage pit. The bottom line is an abecedary, the alphabet written out in early (Proto-Canaanite) letters; the other lines look like writing practice. It is usually dated to roughly the 12th–11th centuries BCE, the period the Bible gives to Eli and Samuel.",
      textSays: "Israel camped “beside Ebenezer” while the Philistines camped at Aphek (1 Samuel 4:1).",
      theirEyes: "In a small farming village, someone scratched out the alphabet on a broken pot, perhaps learning to write.",
      debate:
        "The excavators proposed that Izbet Sartah, a few kilometres east of Aphek, was biblical Ebenezer; this fits the geography, but no inscription names the site, so it remains a proposal. Scholars also debate the ostracon's exact date, the order of some letters and whether its writer was Israelite.",
    },
    confidence: "settled",
    references: ["1 Samuel 4:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "M. Kochavi, “An Ostracon of the Period of the Judges from ʿIzbet Ṣarṭah,” Tel Aviv 4 (1977): 1–13" },
      { kind: "scholarship", citation: "A. Demsky, “A Proto-Canaanite Abecedary Dating from the Period of the Judges and Its Implications for the History of the Alphabet,” Tel Aviv 4 (1977): 14–27" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-034",
    era: "united-monarchy",
    level: 7,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "1 Samuel 7 says Samuel judged Israel on a yearly circuit. Where was his home?",
    choices: ["Shiloh", "Hebron", "Jerusalem", "Ramah"],
    answer: 3,
    explanation: {
      textSays:
        "“He went from year to year in a circuit to Bethel, Gilgal, and Mizpah… His return was to Ramah, for his house was there” (1 Samuel 7:16–17). His father Elkanah was “of Ramathaim Zophim” and the family's house was in Ramah (1:1, 19); Samuel was buried “in Ramah, even in his own city” (28:3).",
      world: "Bethel, Gilgal and Mizpah lay fairly close together, in and around the territory of Benjamin north of Jerusalem. The exact location of Samuel's Ramah is debated.",
      theirEyes: "A village elder with a hard case could wait for the season when Samuel came round to the nearest sanctuary town.",
      tradition: {
        christian:
          "Eusebius' Onomasticon (early 4th century) identifies Samuel's hometown, Ramathaim-zophim, with Arimathea, home of Joseph who buried Jesus (Mark 15:43).",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 1:1", "1 Samuel 7:15–17", "1 Samuel 28:3", "Mark 15:43"],
    sources: [
      scripture,
      { kind: "primary", citation: "Eusebius, Onomasticon, entry “Armathem Sipha”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-035",
    era: "united-monarchy",
    level: 7,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After a victory over the Philistines near Mizpah, Samuel set up a stone called Ebenezer. What does the name mean?",
    choices: ["House of God", "God is with us", "Stone of help", "Rock of ages"],
    answer: 2,
    explanation: {
      textSays:
        "At Mizpah the people fasted and poured out water before Yahweh; when the Philistines attacked, Yahweh “thundered with a great thunder” and they fled (1 Samuel 7:6, 10). Samuel set a stone between Mizpah and Shen and named it Ebenezer, saying that Yahweh had helped them until then (7:12).",
      world:
        "Hebrew even ha-ezer means “the stone of help.” Standing stones marking a place where God acted are common in the Bible, as at Bethel (Genesis 28:18–22) and Gilgal (Joshua 4:20–24).",
      theirEyes: "Years after losing the Ark near a place called Ebenezer, Israel now had a new Ebenezer of its own to remember a victory.",
      tradition: {
        christian: "Robert Robinson's hymn “Come, Thou Fount of Every Blessing” (1758) borrows the word: “Here I raise my Ebenezer.”",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 7:5–12", "Genesis 28:18–22", "Joshua 4:20–24"],
    sources: [scripture, { kind: "reference", citation: "“Come, Thou Fount of Every Blessing,” Hymnary.org" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "mon-036",
    era: "united-monarchy",
    level: 8,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Saul first met Samuel while out searching for what?",
    choices: ["A stolen sheep", "His father's lost donkeys", "A runaway servant", "Water for the family's flocks"],
    answer: 1,
    explanation: {
      textSays:
        "“The donkeys of Kish, Saul's father, were lost” (1 Samuel 9:3). After days of searching, Saul's servant offered “the fourth part of a shekel of silver” as a gift for the seer (9:8). The narrator explains: “he who is now called a prophet was before called a seer” (9:9). Samuel tells Saul the donkeys have been found (9:20) and the next morning anoints him (10:1).",
      world:
        "Donkeys were a family's main pack animals and a real part of its wealth. A shekel weighed roughly 11 grams of silver, as inscribed weights from Judah show.",
      theirEyes: "A tall young farmer set out to find stray animals and came home secretly anointed as Israel's ruler.",
    },
    confidence: "settled",
    references: ["1 Samuel 9:1–20", "1 Samuel 10:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Raz Kletter, Economic Keystones: The Weight System of the Kingdom of Judah (JSOTSup 276; Sheffield Academic Press, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-037",
    era: "united-monarchy",
    level: 8,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When Saul was chosen by lot at Mizpah, where was he found?",
    choices: ["Leading the troops at the gate", "Hiding among the baggage", "Out hunting in the hills", "Praying at the altar"],
    answer: 1,
    explanation: {
      textSays:
        "The lot fell on Benjamin, then the family of the Matrites, then Saul, “but when they looked for him, he could not be found” (1 Samuel 10:20–21). Yahweh answered, “Behold, he has hidden himself among the baggage” (10:22). Brought out, he stood taller than anyone “from his shoulders and upward,” and the people shouted, “Long live the king!” (10:23–24).",
      world:
        "Narrowing down by lot, from tribe to clan to household to one man, is the same procedure used to find Achan in Joshua 7:14–18.",
      theirEyes: "The whole nation waited for its new king, and he was crouching among the supply packs.",
      tradition: {
        christian: "The apostles also use lots to choose Matthias to replace Judas (Acts 1:23–26).",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 10:17–24", "Joshua 7:14–18", "Acts 1:23–26"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-038",
    era: "united-monarchy",
    level: 8,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which people, led by King Nahash, besieged Jabesh-gilead and demanded the townsmen's right eyes?",
    choices: ["The Edomites", "The Moabites", "The Amalekites", "The Ammonites"],
    answer: 3,
    explanation: {
      textSays:
        "“Nahash the Ammonite” offered terms “that all your right eyes be gouged out” (1 Samuel 11:1–2). The town asked for seven days to send for help, and Saul led the relief (11:3–11).",
      world: "The Ammonites lived east of the Jordan; their capital Rabbah lies under modern Amman.",
      theirEyes: "Across the Jordan, a besieged town had a week to find a rescuer before its men were maimed.",
      tradition: {
        jewish:
          "The Dead Sea Scroll 4QSamuel-a has an extra paragraph before chapter 11: Nahash had been gouging out the right eyes of the Gadites and Reubenites, and 7,000 men had fled to Jabesh. Josephus also says Nahash had already been putting out the right eyes of Israelites east of the Jordan, and explains that a soldier whose left eye was covered by his shield and who had no right eye was useless in battle (Antiquities 6.5.1).",
      },
      debate: "Scholars debate whether the scroll's paragraph is original and was lost from the traditional Hebrew text by a copying slip, or is a later expansion. The NRSV (1989) includes it.",
    },
    confidence: "settled",
    references: ["1 Samuel 11:1–11"],
    sources: [
      scripture,
      { kind: "primary", citation: "4QSamuel-a (4Q51), at 1 Samuel 10:27–11:1" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 6.5.1" },
      { kind: "scholarship", citation: "F. M. Cross, D. W. Parry, R. J. Saley and E. Ulrich, Qumran Cave 4.XII: 1–2 Samuel (DJD 17; Clarendon Press, 2005)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-039",
    era: "united-monarchy",
    level: 8,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "To rally the tribes to rescue Jabesh-gilead, what did Saul send throughout Israel?",
    choices: ["Copies of a royal decree", "Pieces of a yoke of oxen he had cut up", "Burning torches carried by runners", "Arrows marked with his name"],
    answer: 1,
    explanation: {
      textSays:
        "Saul was coming in from the field behind his oxen when he heard the news (1 Samuel 11:5). He cut a yoke of oxen in pieces and sent them out with the message, “Whoever doesn't come out after Saul and after Samuel, so shall it be done to his oxen” (11:7). The army mustered at Bezek.",
      world:
        "The Bible records one earlier grim summons of the same kind: in Judges 19:29 pieces were sent “throughout all the borders of Israel” to rally the tribes against Gibeah in Benjamin. Saul's own home was Gibeah (1 Samuel 10:26; 11:4).",
      theirEyes: "A farmer staring at a bloody piece of ox knew exactly what would happen to his own plough team if he stayed home.",
      tradition: {
        jewish: "Josephus retells the summons in his own words: Saul cuts the sinews of his oxen and threatens anyone who fails to muster (Antiquities 6.5.3).",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 11:4–8", "1 Samuel 10:26", "Judges 19:29"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 6.5.3" },
      { kind: "scholarship", citation: "P. Kyle McCarter Jr., I Samuel (Anchor Bible 8; Doubleday, 1980), on 1 Samuel 11:7" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-040",
    era: "united-monarchy",
    level: 8,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: at Gilgal, Saul waited for Samuel to arrive before the burnt offering was made.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Saul waited the seven days Samuel had set, but as his troops scattered he offered the burnt offering himself; Samuel arrived just as he finished (1 Samuel 13:8–10; compare 10:8). Samuel told him his kingdom would not continue: Yahweh had sought “a man after his own heart” (13:13–14).",
      world: "The Philistines were massing at Michmash, and Saul's army was slipping away while he waited.",
      theirEyes: "Every hour of waiting meant more men deserting; Saul decided he could not wait any longer.",
      tradition: {
        christian: "Paul's sermon in Acts 13:22 applies the “man after my heart” description to David.",
      },
      debate:
        "Interpreters disagree about the exact fault: offering a sacrifice as a king rather than a priest, or disobeying Samuel's instruction to wait. David and Solomon later offer sacrifices without rebuke (2 Samuel 6:17; 1 Kings 3:4), so many focus on the disobedience.",
    },
    confidence: "settled",
    references: ["1 Samuel 10:8", "1 Samuel 13:5–14", "Acts 13:22", "2 Samuel 6:17", "1 Kings 3:4"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "mon-041",
    era: "united-monarchy",
    level: 9,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jonathan's raid on the Philistine garrison at Michmash passed between two rocky crags. What were they called?",
    choices: ["Jachin and Boaz", "Ebal and Gerizim", "Bozez and Seneh", "Hophni and Phinehas"],
    answer: 2,
    explanation: {
      textSays:
        "“The name of the one was Bozez, and the name of the other Seneh” (1 Samuel 14:4), one facing Michmash and the other Geba (14:5). Jonathan and his armour-bearer climbed “on his hands and on his feet” and surprised the garrison (14:13).",
      world:
        "Geba and Michmash face each other across a steep gorge north-east of Jerusalem, usually identified with today's Wadi es-Suweinit. Isaiah 10:28–29 also pictures an invading army at Michmash going “over the pass” to Geba.",
      theirEyes: "Two men hauling themselves up a cliff face: the Philistine sentries above never imagined an attack could come that way.",
    },
    confidence: "settled",
    references: ["1 Samuel 14:1–15", "Isaiah 10:28–29"],
    sources: [scripture, { kind: "reference", citation: "“Michmash,” Encyclopaedia Judaica (2nd ed., 2007)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-042",
    era: "united-monarchy",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: after Jonathan unknowingly broke Saul's oath by eating honey, 1 Samuel says the troops saved him from execution.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Saul had cursed anyone who ate before evening (1 Samuel 14:24). Jonathan, who hadn't heard, dipped his staff in a honeycomb “and his eyes brightened” (14:27). Starving troops later ate captured animals “with the blood” (14:32). When the lot exposed Jonathan, Saul vowed he would die, but “the people rescued Jonathan, so he didn't die” (14:45).",
      world: "Eating meat with its blood was forbidden in Israel's law (Leviticus 17:10–14), so Saul had a large stone set up for proper slaughter (14:33–34).",
      theirEyes: "An army that had fought all day on empty stomachs would not stand by while the hero of the victory was put to death.",
      tradition: {
        jewish:
          "The Septuagint's longer text of 14:41 has Saul pray for God to give Urim or Thummim, the priestly lots, to decide between him and the people; the traditional Hebrew text is much shorter here.",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 14:24–45", "Leviticus 17:10–14"],
    sources: [scripture, { kind: "primary", citation: "Septuagint, 1 Kingdoms (1 Samuel) 14:41" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-043",
    era: "united-monarchy",
    level: 9,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After the Amalekite campaign, Samuel told Saul that “to obey is better than…” what?",
    choices: ["Wisdom", "Sacrifice", "Victory", "Gold"],
    answer: 1,
    explanation: {
      textSays:
        "Saul kept the best livestock, saying it was for sacrifice. Samuel replied: “Behold, to obey is better than sacrifice, and to listen than the fat of rams. For rebellion is as the sin of witchcraft, and stubbornness is as idolatry and teraphim” (1 Samuel 15:22–23).",
      world: "Israel's prophets returned to this theme again and again, criticising worship without justice or obedience (for example Amos 5:21–24).",
      theirEyes: "Saul thought fine animals for the altar would please God; Samuel told him in front of everyone that obedience mattered more.",
      tradition: {
        jewish: "Josephus has Samuel tell Saul that God takes pleasure not in sacrifices but in good and righteous people who obey him (Antiquities 6.7.4).",
        christian: "Jesus twice quotes the similar saying of Hosea 6:6, that God desires mercy and not sacrifice (Matthew 9:13; 12:7).",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 15:13–23", "Amos 5:21–24", "Hosea 6:6", "Matthew 9:13", "Matthew 12:7"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 6.7.4" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-044",
    era: "united-monarchy",
    level: 9,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Saul spared the Amalekite king against Samuel's instructions. What was the king's name?",
    choices: ["Eglon", "Achish", "Nahash", "Agag"],
    answer: 3,
    explanation: {
      textSays:
        "“He took Agag the king of the Amalekites alive” (1 Samuel 15:8), and Saul and the people spared him and the best of the flocks (15:9). Samuel then had Agag brought to him and put him to death at Gilgal (15:32–33).",
      world:
        "The Amalekites appear in the Bible as raiders of the southern deserts; no inscription outside the Bible clearly mentions them. Haman in the Book of Esther is called “the Agagite” (Esther 3:1), which is commonly read as linking him to this king.",
      theirEyes: "A captive king paraded alive was a trophy of victory, a sight conquerors across the ancient world liked to display.",
      tradition: {
        jewish:
          "Josephus says Saul spared Agag out of admiration for the king's good looks and great height (Antiquities 6.7.2).",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 15:7–9", "1 Samuel 15:32–33", "Esther 3:1"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 6.7.2" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-045",
    era: "united-monarchy",
    level: 9,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Before attacking the Amalekites, Saul warned which people living among them to leave?",
    choices: ["The Kenites", "The Gibeonites", "The Jebusites", "The Philistines"],
    answer: 0,
    explanation: {
      textSays:
        "Saul told the Kenites, “Go, depart, go down from among the Amalekites, lest I destroy you with them; for you showed kindness to all the children of Israel when they came up out of Egypt” (1 Samuel 15:6). Judges 1:16 and 4:11 link the Kenites to Moses' in-laws (the WEB says “Moses' brother-in-law”).",
      world:
        "The Bible places the Kenites in the dry south, near Arad (Judges 1:16). Their name may be related to a word for “smith,” and some scholars have suggested they were travelling metalworkers, though this is uncertain.",
      theirEyes: "Tents pitched side by side in the desert: a warning from Saul's camp meant the Kenites had to pack up and move before the attack.",
    },
    confidence: "settled",
    references: ["1 Samuel 15:6", "Judges 1:16", "Judges 4:11"],
    sources: [scripture, { kind: "reference", citation: "“Kenites,” Encyclopaedia Judaica (2nd ed., 2007)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "mon-046",
    era: "united-monarchy",
    level: 10,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "1 Samuel 28 notes that Saul had earlier done what to mediums and wizards?",
    choices: [
      "Made them his court advisers",
      "Sent them away out of the land",
      "Required them to register with the priests",
      "Taxed them to pay for his army",
    ],
    answer: 1,
    explanation: {
      textSays:
        "“Saul had sent away those who had familiar spirits and the wizards out of the land” (1 Samuel 28:3). Yet when God did not answer him “by dreams, by Urim, or by prophets” (28:6), he disguised himself and went by night to a woman with a familiar spirit at Endor (28:7–8).",
      world: "The Law forbade consulting mediums or calling up the dead (Leviticus 19:31; Deuteronomy 18:10–11).",
      theirEyes: "The woman of Endor feared a trap: the man at her door was asking for the very thing the king had banned.",
      tradition: {
        jewish:
          "The Septuagint calls the woman an engastrimythos, “one who speaks from the belly,” a Greek word for a ventriloquist-like diviner.",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 28:3–9", "Leviticus 19:31", "Deuteronomy 18:10–11"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, 1 Kingdoms (1 Samuel) 28:7" },
      { kind: "scholarship", citation: "Rowan A. Greer and Margaret M. Mitchell, The “Belly-Myther” of Endor: Interpretations of 1 Kingdoms 28 in the Early Church (SBL Writings from the Greco-Roman World 16; Society of Biblical Literature, 2007)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-047",
    era: "united-monarchy",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Jewish sage Ben Sira (about 180 BCE) says Samuel prophesied even after his death.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Sirach 46:20: “Even after he fell asleep, he prophesied, and showed the king his end.” In 1 Samuel 28 the woman says, “I see a god coming up out of the earth” (28:13), and the figure tells Saul, “tomorrow you and your sons will be with me” (28:19). 1 Chronicles 10:13 lists consulting a medium among Saul's sins.",
      world: "Ben Sira's book, written in Hebrew in Jerusalem and translated into Greek by his grandson, praises Israel's heroes in chapters 44–50.",
      theirEyes: "For Ben Sira, Samuel was so great a prophet that even death did not stop his voice.",
      tradition: {
        christian:
          "Early Christians split: Justin Martyr (Dialogue 105) and Origen took it as Samuel's real soul; Tertullian (On the Soul 57) and Eustathius of Antioch said a demon impersonated him.",
      },
      debate: "Whether the text means Samuel truly appeared, or the woman deceived Saul, has been argued since antiquity.",
    },
    confidence: "settled",
    references: ["Sirach 46:20", "1 Samuel 28:11–19", "1 Chronicles 10:13"],
    sources: [
      scripture,
      { kind: "primary", citation: "Sirach (Ecclesiasticus) 46:20, World English Bible" },
      { kind: "scholarship", citation: "Rowan A. Greer and Margaret M. Mitchell, The “Belly-Myther” of Endor: Interpretations of 1 Kingdoms 28 in the Early Church (SBL Writings from the Greco-Roman World 16; Society of Biblical Literature, 2007)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-048",
    era: "united-monarchy",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus singles out the woman of Endor for praise. For what?",
    choices: [
      "Her generosity in feeding Saul",
      "Her skill in raising the dead",
      "Her courage in fighting the Philistines",
      "Her refusal to help a king who had banned her",
    ],
    answer: 0,
    explanation: {
      textSays:
        "After the séance Saul collapsed, having eaten nothing all day. The woman urged him to eat, then “had a fattened calf in the house. She hurried and killed it” and baked unleavened bread for him and his servants (1 Samuel 28:20–25).",
      world:
        "Josephus, writing in Rome in the 90s CE, often adds moral lessons to his retellings of Israel's history for Greek and Roman readers.",
      theirEyes: "A woman, terrified a moment before, killed her fattened calf to feed the king who had outlawed her trade.",
      tradition: {
        jewish:
          "Josephus pauses his story to praise the woman's generosity: she bore Saul no grudge for banning her craft, and though poor she gave up the one calf she had, an example he urges readers to follow in helping those in need (Antiquities 6.14.4).",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 28:20–25"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 6.14.4" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-049",
    era: "united-monarchy",
    level: 10,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: 1 Samuel 31 says Saul's armour-bearer killed him at his request on Mount Gilboa.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Wounded by archers, Saul asked his armour-bearer to kill him, “But his armor bearer would not, for he was terrified. Therefore Saul took his sword and fell on it” (1 Samuel 31:4). The armour-bearer then did the same, and Jonathan, Abinadab and Malchishua also died (31:2, 5–6).",
      world: "Mount Gilboa is a ridge overlooking the Jezreel Valley; the Philistines had camped at Shunem across the valley (1 Samuel 28:4).",
      theirEyes: "On the slopes above the valley, Israel's army broke and fled, and their first king died with three of his sons.",
      debate:
        "In 2 Samuel 1:6–10 an Amalekite tells David he killed the dying Saul himself. Many readers take his story as a lie told to win David's favour; others see two different traditions.",
    },
    confidence: "settled",
    references: ["1 Samuel 28:4", "1 Samuel 31:1–6", "2 Samuel 1:6–10", "1 Chronicles 10:1–6"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-050",
    era: "united-monarchy",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Before Saul's day, Beth-shan, where the Philistines hung his body, had long been a garrison town of which power?",
    choices: ["Assyria", "Persia", "Babylon", "Egypt"],
    answer: 3,
    explanation: {
      textSays:
        "The Philistines put Saul's armour in the temple of the Ashtaroth and “fastened his body to the wall of Beth Shan” (1 Samuel 31:10). Remembering his rescue of their town, the men of Jabesh-gilead marched all night, took the bodies, burned them and buried the bones under a tamarisk (31:11–13).",
      world:
        "For roughly three centuries of the Late Bronze and early Iron Ages, Beth-shan was a centre of Egyptian rule in northern Canaan. University of Pennsylvania excavations (1921–33) found basalt stelae of Seti I and Ramesses II and a statue of Ramesses III.",
      theirEyes: "Travellers on the road through the valley would have seen the old Egyptian fortress town, its wall now displaying Israel's dead king.",
      debate:
        "Amihai Mazar's Hebrew University excavations (1989–96) found mainly local Canaanite rather than Philistine material in the levels after the Egyptians left, so whether or how long the Philistines controlled Beth-shan is uncertain.",
    },
    confidence: "settled",
    references: ["1 Samuel 31:8–13", "1 Samuel 11:1–11"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Seti I and Ramesses II stelae, Beth-shean (University of Pennsylvania Museum excavations, 1921–1933)" },
      { kind: "scholarship", citation: "Amihai Mazar, Excavations at Tel Beth-Shean 1989–1996, vol. 1 (Israel Exploration Society, 2006)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
