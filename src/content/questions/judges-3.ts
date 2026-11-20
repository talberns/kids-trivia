import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const judges3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "jud-051",
    era: "judges",
    level: 11,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Judges 2 says that whenever a judge died, Israel turned back and behaved even worse than before.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Judges 2:11–19 sets out the book's repeating pattern: Israel serves the Baals, God hands them to raiders, they groan under oppression, and “Yahweh raised up judges, who saved them” (2:16). Then: “But when the judge was dead, they turned back, and dealt more corruptly than their fathers in following other gods” (2:19). Each new story opens with the same line: Israel “did that which was evil in Yahweh's sight” (3:7, 3:12, 4:1, 6:1, 10:6).",
      theirEyes:
        "A grandmother in the hills could tell it like a song with a chorus: we forgot, we were crushed, we cried out, someone rose up to save us, and then we forgot again.",
      tradition: {
        jewish:
          "Ben Sira (early 2nd century BCE) praises “the judges, every one by his name,” whose hearts did not turn away from the Lord (Sirach 46:11).",
      },
    },
    confidence: "settled",
    references: ["Judges 2:11–19", "Judges 3:7", "Judges 6:1", "Sirach 46:11"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-052",
    era: "judges",
    level: 11,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The first deliverer in Judges 3, Othniel, freed Israel from Cushan Rishathaim, king of where?",
    choices: ["Egypt", "Mesopotamia", "Philistia", "Midian"],
    answer: 1,
    explanation: {
      textSays:
        "Judges 3:8–10: Israel served “Cushan Rishathaim king of Mesopotamia” eight years. Then God raised up “Othniel the son of Kenaz, Caleb's younger brother,” and “Yahweh's Spirit came on him, and he judged Israel.” The land had rest forty years (3:11). Othniel had earlier won Caleb's daughter Achsah by capturing Kiriath Sepher (1:12–13).",
      world:
        "The Hebrew for Mesopotamia here is Aram-naharaim, “Aram of the two rivers.” No such king is known outside the Bible, and Rishathaim sounds like Hebrew for “double wickedness,” so many scholars see a mocking nickname.",
      theirEyes:
        "Nobody in Judah's hill villages had ever seen this far-off king, but for eight years they knew exactly whom their tribute went to.",
      tradition: {
        jewish:
          "Pseudo-Philo's Biblical Antiquities (1st century CE) does not tell Othniel's story at all. Instead it makes Kenaz, the name Judges gives as Othniel's father, Israel's first leader after Joshua, with a long story of his own (chapters 25–28).",
      },
      debate:
        "Where Cushan came from is debated. Some scholars suggest Aram is a scribal slip for Edom (the two names look alike in Hebrew script), which would fit a hero from southern Judah.",
    },
    confidence: "settled",
    references: ["Judges 3:7–11", "Judges 1:12–13"],
    sources: [
      scripture,
      { kind: "primary", citation: "Pseudo-Philo, Liber Antiquitatum Biblicarum (Biblical Antiquities) 25–28" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-053",
    era: "judges",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Where did the left-handed Ehud hide his short two-edged sword before meeting King Eglon?",
    choices: ["Inside the tribute basket", "Under his clothing on his right thigh", "In his sandal", "Under his cloak on his left side"],
    answer: 1,
    explanation: {
      textSays:
        "Judges 3:15–16 calls Ehud “the son of Gera, the Benjamite, a left-handed man.” He made a two-edged sword “a cubit in length; and he wore it under his clothing on his right thigh.” Later “Ehud put out his left hand, and took the sword from his right thigh” (3:21).",
      world:
        "A right-handed fighter wore his blade on the left to draw it across his body, so a guard checking that side would find nothing. The irony is pointed: Benjamin literally means “son of the right hand” (Genesis 35:18), and Judges 20:16 mentions 700 left-handed Benjaminite slingers.",
      theirEyes:
        "The Moabite guards watched an Israelite bring the yearly tribute and walk away, never thinking to check the wrong side of his body.",
      debate:
        "The Hebrew for left-handed literally reads “restricted in his right hand.” Scholars debate whether it means a disability or trained ambidextrous fighting.",
    },
    confidence: "settled",
    references: ["Judges 3:15–22", "Judges 20:16", "Genesis 35:18"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Baruch Halpern, The First Historians: The Hebrew Bible and History (Harper & Row, 1988)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-054",
    era: "judges",
    level: 11,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: “the city of palm trees” that Eglon of Moab seized is called Jericho elsewhere in the Bible.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Judges 3:13 says Eglon, with Ammon and Amalek, “possessed the city of palm trees.” Deuteronomy 34:3 speaks of “the valley of Jericho the city of palm trees,” and 2 Chronicles 28:15 says captives were brought “to Jericho, the city of palm trees.”",
      world:
        "Jericho's great spring made it an oasis in the hot Jordan Valley, famous for date palms. It lay just across the Jordan from Moab, an obvious foothold for a Moabite king. The Israelites later seized “the fords of the Jordan” to trap the Moabites (Judges 3:28).",
      theirEyes:
        "From the green palms of Jericho, a Moabite governor could look across the river toward home and up the road into Israel's hills.",
      tradition: {
        jewish: "Josephus, retelling the story, places Eglon's royal residence at Jericho (Antiquities, book 5, chapter 4).",
      },
      debate:
        "That the Bible elsewhere calls Jericho “the city of palm trees” is plain. Most scholars also take Judges 3:13 to mean Jericho, as Josephus did; since excavations found little settlement at Jericho in this period, some wonder whether a small outpost or another oasis is meant.",
    },
    confidence: "settled",
    references: ["Judges 3:12–14", "Judges 3:28", "Deuteronomy 34:3", "2 Chronicles 28:15"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews, book 5, chapter 4, trans. Whiston" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-055",
    era: "judges",
    level: 11,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Shamgar is called “son of Anath.” In Canaanite texts from Ugarit, who or what was Anat?",
    choices: ["A river in Gilead", "A pharaoh of Egypt", "A Philistine grain god", "A fierce warrior goddess"],
    answer: 3,
    explanation: {
      textSays:
        "Judges 3:31: “After him was Shamgar the son of Anath, who struck six hundred men of the Philistines with an ox goad. He also saved Israel.” The Song of Deborah dates hard times to “the days of Shamgar the son of Anath” (5:6).",
      world:
        "In the Baal myths found at Ugarit (clay tablets of the 14th–13th centuries BCE, in modern Syria), Anat is Baal's sister and ally, a violent warrior goddess who wades in the blood of her enemies. A deliverer of Israel bearing her name is striking, a sign of how mixed Canaan's culture was; some scholars think the name Shamgar itself is not Hebrew.",
      theirEyes:
        "A name like “son of Anath” would have sounded to his neighbours like a warrior's name, which suited a man remembered for one fight.",
      tradition: {
        jewish: "Josephus says Shamgar was chosen as governor but died in the first year of his rule (Antiquities, book 5, chapter 4).",
      },
      debate:
        "Scholars disagree over what “son of Anath” means here: his father's or mother's name, a home town such as Beth Anath (Judges 1:33), or a title for a warrior, as Peter Craigie proposed.",
    },
    confidence: "settled",
    references: ["Judges 3:31", "Judges 5:6", "Judges 1:33"],
    sources: [
      scripture,
      { kind: "primary", citation: "Baal Cycle from Ugarit (KTU 1.1–1.6)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews, book 5, chapter 4, trans. Whiston" },
      { kind: "scholarship", citation: "Peter C. Craigie, “A Reconsideration of Shamgar ben Anath (Judg 3:31 and 5:6),” Journal of Biblical Literature 91 (1972)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "jud-056",
    era: "judges",
    level: 12,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Where did the prophetess Deborah sit when Israelites came to her for judgment?",
    choices: [
      "At the gate of Shiloh",
      "Beside the spring of Harod",
      "Under a palm tree between Ramah and Bethel",
      "On the top of Mount Tabor",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Judges 4:4–5: “Now Deborah, a prophetess, the wife of Lappidoth, judged Israel at that time. She lived under Deborah's palm tree between Ramah and Bethel in the hill country of Ephraim; and the children of Israel came up to her for judgment.”",
      world:
        "Ramah and Bethel lay on the main ridge road north of Jerusalem, a natural meeting point for travellers from several tribes. Courts in villages were often held in the open, at the gate or under a landmark tree.",
      theirEyes:
        "Two neighbours quarrelling over a field could walk to the palm tree on the ridge road and know Deborah's word would settle it.",
      tradition: {
        jewish:
          "Pseudo-Philo's Biblical Antiquities (1st century CE) gives Deborah a farewell speech to the people before her death (chapter 33).",
      },
    },
    confidence: "settled",
    references: ["Judges 4:4–5"],
    sources: [scripture, { kind: "primary", citation: "Pseudo-Philo, Liber Antiquitatum Biblicarum (Biblical Antiquities) 33" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-057",
    era: "judges",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What condition did Barak set before he would lead the army against Sisera?",
    choices: [
      "That he be made king afterwards",
      "That Deborah go with him",
      "That the ark go into battle",
      "That Ephraim send its warriors first",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Judges 4:8–9: Barak said, “If you will go with me, then I will go; but if you will not go with me, I will not go.” Deborah agreed but warned, “the journey that you take won't be for your honor; for Yahweh will sell Sisera into a woman's hand.” Barak called up 10,000 men of Zebulun and Naphtali at Kedesh, “and Deborah went up with him” (4:10); they then faced Sisera from Mount Tabor (4:12–14).",
      theirEyes:
        "Barak's men, staring down from Tabor at 900 iron chariots (4:13), may have been glad the prophetess was standing among them.",
      tradition: {
        christian:
          "Hebrews 11:32 names Barak, not Deborah, in its list of heroes of faith, alongside Gideon, Samson and Jephthah.",
      },
      world: "Barak's name means “lightning” in Hebrew.",
    },
    confidence: "settled",
    references: ["Judges 4:6–14", "Hebrews 11:32"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-058",
    era: "judges",
    level: 12,
    category: "daily-life",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: when the fleeing Sisera asked Jael for water, she gave him wine.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Judges 4:19: “Please give me a little water to drink; for I am thirsty.” Jael “opened a container of milk, and gave him a drink, and covered him.” The song repeats it: “He asked for water. She gave him milk. She brought him butter in a lordly dish” (5:25). While he slept, she killed him with a tent peg (4:21), fulfilling Deborah's word that Sisera would fall to a woman.",
      world:
        "Jael's husband Heber was a Kenite, a tent-dwelling clan at peace with Sisera's king (4:11, 4:17). Milk was kept in skin containers, and a generous guest drink of milk or curds was a mark of hospitality.",
      theirEyes:
        "A tired general fleeing on foot took a tent as a safe house and rich milk as a sign of welcome. He was wrong on both counts.",
    },
    confidence: "settled",
    references: ["Judges 4:17–22", "Judges 5:24–27"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-059",
    era: "judges",
    level: 12,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Song of Deborah scolds tribes that stayed home. Which tribe does it ask, “Why did ___ remain in ships?”",
    choices: ["Judah", "Naphtali", "Dan", "Benjamin"],
    answer: 2,
    explanation: {
      textSays:
        "Judges 5:17: “Gilead lived beyond the Jordan. Why did Dan remain in ships? Asher sat still at the haven of the sea.” Reuben is mocked for sitting “among the sheepfolds” (5:16), while “Zebulun was a people that jeopardized their lives to the death; Naphtali also” (5:18).",
      world:
        "The song gives a rare snapshot of loosely linked tribes deciding one by one whether to fight. Judah is not mentioned at all.",
      theirEyes:
        "A Zebulunite who had faced the chariots would not forget which neighbours had stayed safely by their boats and flocks.",
      debate:
        "Why Dan had ships is debated. Some think Danites worked for coastal peoples before moving north (Judges 18). Yigael Yadin suggested a link with the Denyen, one of the “Sea Peoples”; many scholars find this unproven.",
    },
    confidence: "settled",
    references: ["Judges 5:14–18"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Yigael Yadin, “‘And Dan, Why Did He Remain in Ships?’ (Judges 5:17),” Australian Journal of Biblical Archaeology 1 (1968)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-060",
    era: "judges",
    level: 12,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After Gideon tore down Baal's altar, his father named him Jerub-Baal. What does Judges 6 say the name means?",
    choices: ["“Servant of Baal”", "“Beloved of Baal”", "“Let Baal contend against him”", "“Baal is my father”"],
    answer: 2,
    explanation: {
      textSays:
        "Gideon pulled down his father's Baal altar by night (6:25–28). When the townsmen demanded his death, Joash replied, “If he is a god, let him contend for himself” (6:31). “Therefore on that day he named him Jerub-Baal, saying, ‘Let Baal contend against him, because he has broken down his altar’” (6:32). Earlier, after his call, Gideon had built an altar to Yahweh named “Yahweh is Peace” (6:24).",
      theirEyes:
        "The village woke to a smashed altar and a missing sacred pole; Joash's answer turned a lynch mob into a test of whether Baal could look after himself.",
      tradition: {
        shared:
          "1 Samuel 12:11 lists “Jerubbaal” among Israel's deliverers. 2 Samuel 11:21 calls him Jerubbesheth, swapping Baal for a word meaning “shame.”",
      },
      debate:
        "Many scholars think the name originally meant something like “Baal strives (for him),” a normal name praising Baal, and that the story re-explains it.",
    },
    confidence: "settled",
    references: ["Judges 6:24–32", "1 Samuel 12:11", "2 Samuel 11:21"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "jud-061",
    era: "judges",
    level: 13,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "How did God pick Gideon's 300 men out of 10,000 at the water?",
    choices: [
      "They lapped water, bringing it to their mouths with their hands",
      "They knelt down to drink directly from the spring",
      "They refused to drink before battle",
      "They filled jars for the rest of the army",
    ],
    answer: 0,
    explanation: {
      textSays:
        "God said Israel was too many, “lest Israel brag against me, saying, ‘My own hand has saved me’” (Judges 7:2). After 22,000 went home (7:3), the rest drank: “those who lapped, putting their hand to their mouth, was three hundred men; but all the rest of the people bowed down on their knees to drink” (7:6). God said, “I will save you by the three hundred men who lapped” (7:7).",
      theirEyes:
        "Ten thousand thirsty men stooped at the spring of Harod without knowing that how they drank would decide who went home.",
      tradition: {
        jewish:
          "Josephus reads the test the other way round from many modern readers: the 300 who scooped water in a hurry were the fearful ones, chosen so the victory would plainly be God's (Antiquities 5.6.3).",
      },
      debate:
        "Some readers see the 300 as alert soldiers keeping watch while drinking; others note the text gives the point as small numbers, not skill (7:2).",
    },
    confidence: "settled",
    references: ["Judges 7:2–8"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 5.6.3, trans. Whiston" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-062",
    era: "judges",
    level: 13,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What did Gideon put into the hands of his 300 men for the night attack on Midian's camp?",
    choices: [
      "Slings and smooth stones",
      "Bows and burning arrows",
      "Bronze shields and spears",
      "Trumpets and empty jars with torches inside",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Judges 7:16: “he put into the hands of all of them trumpets and empty pitchers, with torches within the pitchers.” Coming to the camp “in the beginning of the middle watch,” they blew the trumpets, smashed the jars, and held “the torches in their left hands and the trumpets in their right hands” (7:19–20). The Midianites fled in confusion (7:21–22).",
      world:
        "The trumpets were rams' horns (shofar in Hebrew). Clay jars were cheap everyday containers, ideal for hiding a flame until the moment it was needed. The text divides the night into watches, and the middle watch had only just begun.",
      theirEyes:
        "Sleeping raiders woke to crashing pottery, blaring horns and sudden lights on every side, as if an enormous army had them surrounded.",
    },
    confidence: "settled",
    references: ["Judges 7:16–22"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-063",
    era: "judges",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What battle cry did Gideon's men shout as they broke their jars around the Midianite camp?",
    choices: ["“Arise, Yahweh!”", "“The sword of Yahweh and of Gideon!”", "“Remember Jericho!”", "“Israel, to your tents!”"],
    answer: 1,
    explanation: {
      textSays:
        "Judges 7:20: “they shouted, ‘The sword of Yahweh and of Gideon!’” Gideon had told them to shout, “For Yahweh and for Gideon!” (7:18). The night before, he had overheard a Midianite tell a dream of a barley loaf flattening a tent, which his companion read as “the sword of Gideon the son of Joash” (7:13–14).",
      theirEyes:
        "Inside the camp, men who had just been talking about Gideon's sword heard his name roared out of the dark.",
      tradition: {
        shared:
          "The cry ties human and divine action together, a theme the story stresses: the 300 hold their ground while “Yahweh set every man's sword against his fellow” (7:22).",
      },
    },
    confidence: "settled",
    references: ["Judges 7:13–22"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-064",
    era: "judges",
    level: 13,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Isaiah 9:4 says an oppressor's rod has been broken “as in the day of” what?",
    choices: ["Babel", "Pharaoh", "Midian", "Goliath"],
    answer: 2,
    explanation: {
      textSays:
        "Isaiah 9:4 (9:3 in Hebrew): “the rod of his oppressor, you have broken as in the day of Midian.” Isaiah 10:26 recalls “the slaughter of Midian at the rock of Oreb,” and Psalm 83:9–11 (83:10–12 in Hebrew) asks God to treat enemies like “Oreb and Zeeb” and “Zebah and Zalmunna,” the Midianite leaders of Judges 7–8.",
      world:
        "Centuries after Gideon, his victory had become a byword for a sudden rescue of the weak from a stronger enemy.",
      theirEyes:
        "For a Judahite hearing Isaiah, “the day of Midian” needed no explaining: everyone knew the story of 300 men and broken jars.",
      tradition: {
        christian:
          "The same chapter continues “For a child is born to us” (Isaiah 9:6), and Matthew 4:15–16 quotes its opening verses about Galilee as fulfilled in Jesus.",
      },
    },
    confidence: "settled",
    references: ["Isaiah 9:4", "Isaiah 10:26", "Psalm 83:9–11", "Judges 7:25", "Judges 8:21", "Matthew 4:15–16"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-065",
    era: "judges",
    level: 13,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Bones from Aravah copper-mining sites suggest domestic camels reached the southern Levant around when?",
    choices: ["Late 10th century BCE", "About 600 BCE", "About 300 BCE", "1st century CE"],
    answer: 0,
    explanation: {
      textSays:
        "Judges 6:5 describes Midianite raiders who “came in as locusts for multitude. Both they and their camels were without number.” Gideon later takes the ornaments from the Midianite kings' camels (8:21, 8:26).",
      world:
        "Lidar Sapir-Hen and Erez Ben-Yosef (2013) found that domestic camel bones appear in the copper-smelting camps of the Aravah Valley from about the last third of the 10th century BCE. By 853 BCE an Assyrian inscription, the Kurkh Monolith, credits an Arab chief with 1,000 camels.",
      theirEyes:
        "To farmers who had only ever loaded donkeys, a desert army on camels moving fast and far would have seemed unstoppable.",
      debate:
        "Scholars debate what this means for Judges, usually set in the 12th–11th centuries BCE. Some see the camels as a detail from the writers' later time; others argue desert peoples like the Midianites could have used camels earlier than settled areas did.",
    },
    confidence: "mainstream",
    references: ["Judges 6:5", "Judges 8:21–26"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Lidar Sapir-Hen and Erez Ben-Yosef, “The Introduction of Domestic Camels to the Southern Levant: Evidence from the Aravah Valley,” Tel Aviv 40 (2013)" },
      { kind: "archaeology", citation: "Kurkh Monolith of Shalmaneser III (British Museum, ME 118884)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "jud-066",
    era: "judges",
    level: 14,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: after defeating Midian, Gideon accepted Israel's offer to rule over them and found a dynasty.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Judges 8:22–23: the men of Israel said, “Rule over us, both you, your son, and your son's son also.” Gideon answered, “I will not rule over you, neither shall my son rule over you. Yahweh shall rule over you.”",
      world:
        "The refusal sets up the next chapter, where his son Abimelech seizes a kingship at Shechem with disastrous results (Judges 9). Later, when Israel asks Samuel for a king, God says, “they have rejected me as the king over them” (1 Samuel 8:7).",
      theirEyes:
        "The soldiers wanted the hero of the night attack as their king; Gideon told them they already had one.",
      debate:
        "Some scholars note Gideon still lived like a ruler, with many wives, a son named Abimelech (“my father is king”) and a shrine at Ophrah (8:27–31), and read his refusal as ironic.",
    },
    confidence: "settled",
    references: ["Judges 8:22–31", "1 Samuel 8:7"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-067",
    era: "judges",
    level: 14,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What did Gideon make from the gold earrings taken as plunder, and set up in his town of Ophrah?",
    choices: ["A golden calf", "An ephod", "A crown", "A gold-covered altar"],
    answer: 1,
    explanation: {
      textSays:
        "Gideon asked each man for “the earrings of his plunder,” which weighed 1,700 shekels of gold (Judges 8:24–26). “Gideon made an ephod out of it, and put it in Ophrah, his city. Then all Israel played the prostitute with it there; and it became a snare to Gideon and to his house” (8:27).",
      world:
        "An ephod was the high priest's richly woven garment (Exodus 28:6), but it was also used to seek answers from God: David tells a priest, “Bring the ephod here” (1 Samuel 23:9). Set up in Gideon's own town, away from any recognised sanctuary, it became a focus of worship that the text condemns.",
      theirEyes:
        "Every man threw a captured earring onto the spread cloak, proud to help honour God, and no one guessed the gift would become a trap.",
    },
    confidence: "settled",
    references: ["Judges 8:24–27", "Exodus 28:6", "1 Samuel 23:9"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-068",
    era: "judges",
    level: 14,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Jotham's fable, after the olive, fig and vine refused to be king, which plant accepted?",
    choices: ["The cedar", "The bramble", "The palm", "The oak"],
    answer: 1,
    explanation: {
      textSays:
        "Standing on Mount Gerizim, Jotham, Gideon's youngest son, told Shechem's leaders a story (Judges 9:7–15). The olive, fig and vine would not give up their oil, sweetness and wine. Then the bramble said, “If in truth you anoint me king over you, then come and take refuge in my shade; and if not, let fire come out of the bramble, and devour the cedars of Lebanon” (9:15).",
      world:
        "Jotham meant Abimelech, crowned at Shechem after killing his brothers (9:5–6). A thorn bush gives no shade, but dry brambles catch fire easily. His curse came true when Abimelech and Shechem destroyed each other (9:20, 9:57).",
      theirEyes:
        "Shechem's leaders heard the joke and caught the threat: they had passed over every useful tree to crown a thornbush.",
      tradition: {
        shared: "Jotham's speech is one of the few fables in the Hebrew Bible in which plants talk; another is the thistle's message in 2 Kings 14:9.",
      },
    },
    confidence: "settled",
    references: ["Judges 9:5–21", "Judges 9:57", "2 Kings 14:9"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-069",
    era: "judges",
    level: 14,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After Abimelech captured rebellious Shechem and beat down the city, what does Judges 9 say he sowed it with?",
    choices: ["Barley", "Salt", "Ashes", "Thorns"],
    answer: 1,
    explanation: {
      textSays:
        "Shechem's leaders turned against Abimelech and backed the rebel Gaal son of Ebed (Judges 9:23–29). Abimelech defeated Gaal, then “fought against the city all that day; and he took the city and killed the people in it. He beat down the city and sowed it with salt” (9:45).",
      world:
        "Ancient Near Eastern royal inscriptions describe similar rites: conquerors scattered salt or the seeds of weeds over a destroyed city, a symbolic curse that it should stay barren and empty. Stanley Gevirtz compared Abimelech's act with these Hittite and Assyrian texts. The popular story that Rome salted Carthage in 146 BCE, by contrast, has no ancient source; R. T. Ridley showed it is a modern invention.",
      theirEyes:
        "Survivors watching from the hills saw white grains thrown across the rubble and understood the message: no one was meant to live here again.",
      tradition: {
        shared:
          "Deuteronomy 29:23 (29:22 in Hebrew) pictures a cursed land as “sulfur, salt, and burning,” where nothing is sown and nothing grows.",
      },
    },
    confidence: "settled",
    references: ["Judges 9:23–45", "Deuteronomy 29:23"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Stanley Gevirtz, “Jericho and Shechem: A Religio-Literary Aspect of City Destruction,” Vetus Testamentum 13 (1963)" },
      { kind: "scholarship", citation: "R. T. Ridley, “To Be Taken with a Pinch of Salt: The Destruction of Carthage,” Classical Philology 81 (1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "jud-070",
    era: "judges",
    level: 14,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Thebez, what did a woman throw down from a tower onto Abimelech's head?",
    choices: ["A clay storage jar", "A burning roof beam", "A boiling pot", "An upper millstone"],
    answer: 3,
    explanation: {
      textSays:
        "Judges 9:53: “A certain woman cast an upper millstone on Abimelech's head, and broke his skull.” He told his armour-bearer, “Draw your sword and kill me, that men not say of me, ‘A woman killed him’” (9:54). Generations later Joab still remembered: “Didn't a woman cast an upper millstone on him from the wall, so that he died at Thebez?” (2 Samuel 11:21).",
      world:
        "Grain was ground daily on a hand mill: a heavy lower stone and a smaller upper stone pushed back and forth, usually by women. The upper stone was portable, so it could be carried up a tower.",
      theirEyes:
        "Trapped on the tower roof, a woman grabbed the one heavy thing she used every morning and turned a kitchen tool into a weapon.",
    },
    confidence: "settled",
    references: ["Judges 9:50–57", "2 Samuel 11:21"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "jud-071",
    era: "judges",
    level: 15,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After his half-brothers drove him out, where did Jephthah live with a band of outlaws?",
    choices: ["Ophrah", "The land of Tob", "Kedesh Naphtali", "Shiloh"],
    answer: 1,
    explanation: {
      textSays:
        "Jephthah was “the son of a prostitute,” and his father Gilead's other sons told him, “You will not inherit in our father's house” (Judges 11:1–2). He “lived in the land of Tob. Outlaws joined up with Jephthah” (11:3). When Ammon attacked, the elders of Gilead came to fetch him, and he made them promise he would be their head (11:5–11).",
      world:
        "Tob probably lay east of the Jordan, north of Gilead. Its fighters appear again as hired troops for Ammon against David (2 Samuel 10:6).",
      theirEyes:
        "The same elders who had stood by while he was thrown out now had to ride to an outlaw camp and ask the outcast to save them.",
    },
    confidence: "settled",
    references: ["Judges 11:1–11", "2 Samuel 10:6"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-072",
    era: "judges",
    level: 15,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "“Shibboleth,” the password Ephraimites could not pronounce, was an ordinary Hebrew word. What can it mean?",
    choices: ["Sword", "Head (ear) of grain", "Bread", "City wall"],
    answer: 1,
    explanation: {
      textSays:
        "At the fords of the Jordan the Gileadites told each fugitive, “Now say ‘Shibboleth;’” anyone who said “Sibboleth” was seized and killed (Judges 12:5–6). The same word, in the plural, is used for the “heads of grain” in Pharaoh's dream (Genesis 41:5), and it can also mean a flowing stream (Psalm 69:2; 69:3 in Hebrew).",
      world:
        "The story shows that Hebrew had regional accents: Ephraimites west of the Jordan apparently said “s” where Gileadites said “sh.” In English, a shibboleth now means any word or custom that marks who belongs to a group.",
      theirEyes:
        "At the river crossing, a single hissed consonant was the difference between going home and dying.",
    },
    confidence: "settled",
    references: ["Judges 12:1–6", "Genesis 41:5", "Psalm 69:2"],
    sources: [
      scripture,
      { kind: "reference", citation: "F. Brown, S. R. Driver and C. A. Briggs, A Hebrew and English Lexicon of the Old Testament, s.v. shibboleth" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-073",
    era: "judges",
    level: 15,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In his message to the king of Ammon (Judges 11:24), which god does Jephthah call the king's god?",
    choices: ["Dagon", "Chemosh", "Baal-zebub", "Asherah"],
    answer: 1,
    explanation: {
      textSays:
        "Jephthah asks the king of Ammon, “Won't you possess that which Chemosh your god gives you to possess? So whoever Yahweh our God has dispossessed from before us, them will we possess” (Judges 11:24). Elsewhere, though, the Bible pairs “Chemosh the god of Moab, and Milcom the god of the children of Ammon” (1 Kings 11:33), and Numbers 21:29 calls Moab the “people of Chemosh.”",
      world:
        "Outside the Bible, too, Chemosh is Moab's national god: the Moabite king Mesha's inscription (9th century BCE) names him again and again. Jephthah's argument is about land between the Arnon and the Jabbok, which he says Israel took from the Amorite king Sihon, not from Moab or Ammon (11:13–22), and he even mentions Balak, king of Moab (11:25).",
      theirEyes:
        "To a listener east of the Jordan, the speech sounded like a border lawyer's brief: our God gave us this land, so keep to what your god gave you.",
      debate:
        "Scholars explain the mismatch in different ways: that the speech reuses older material about Moab, or that it treats Ammon and Moab together.",
    },
    confidence: "settled",
    references: ["Judges 11:12–28", "1 Kings 11:33", "Numbers 21:29"],
    sources: [scripture, { kind: "archaeology", citation: "Mesha Stele (Moabite Stone), Musée du Louvre, AO 5066" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-074",
    era: "judges",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Judges never names Jephthah's daughter. What name does Pseudo-Philo's Biblical Antiquities (1st century CE) give her?",
    choices: ["Adah", "Naamah", "Seila", "Dinah"],
    answer: 2,
    explanation: {
      textSays:
        "Jephthah vowed that whatever came out of his house to meet him would be offered as a burnt offering (Judges 11:30–31). His only child came out dancing (11:34). She asked for two months to mourn with her friends; then he “did with her according to his vow” (11:37–39). Israel's daughters remembered her four days each year (11:40).",
      tradition: {
        jewish:
          "Pseudo-Philo names her Seila, has God rebuke the rash vow, and gives her a lament of her own (Biblical Antiquities 39–40). Josephus says Jephthah sacrificed her, and judges it neither lawful nor pleasing to God (Antiquities 5.7.10).",
      },
      theirEyes: "Every year young women went out for four days to remember a girl whose name the story itself never kept.",
      debate:
        "Some medieval and modern readers argue she was dedicated to lifelong unmarried service rather than killed. Most scholars read the text as describing a sacrifice that it presents as tragic.",
    },
    confidence: "settled",
    references: ["Judges 11:29–40"],
    sources: [
      scripture,
      { kind: "primary", citation: "Pseudo-Philo, Liber Antiquitatum Biblicarum (Biblical Antiquities) 39–40" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 5.7.10, trans. Whiston" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-075",
    era: "judges",
    level: 15,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which minor judge had thirty sons who rode thirty donkey colts and held thirty towns in Gilead?",
    choices: ["Tola", "Ibzan", "Abdon", "Jair"],
    answer: 3,
    explanation: {
      textSays:
        "Judges 10:3–4: Jair the Gileadite “judged Israel twenty-two years. He had thirty sons who rode on thirty donkey colts. They had thirty cities, which are called Havvoth Jair to this day.” Ibzan of Bethlehem also had thirty sons (12:9), and Abdon's forty sons and thirty grandsons rode seventy donkey colts (12:14).",
      world:
        "Riding a donkey marked status: the Song of Deborah addresses “you who ride on white donkeys” (5:10). In Hebrew, Jair's verse plays on words, since the words for “donkey colts” and “towns” sound almost alike.",
      theirEyes:
        "When thirty brothers rode into a market on thirty young donkeys, nobody needed telling that their father was a great man.",
    },
    confidence: "settled",
    references: ["Judges 10:3–5", "Judges 12:8–15", "Judges 5:10", "Numbers 32:41"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
