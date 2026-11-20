import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const judges4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "jud-076",
    era: "judges",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When Manoah offered a young goat as a burnt offering on a rock, what did Yahweh's angel do?",
    choices: [
      "Struck the rock so that water flowed out",
      "Sat down and ate the meal with them",
      "Ascended in the flame of the altar",
      "Wrote his name on the rock",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Judges 13:20: “when the flame went up toward the sky from off the altar, Yahweh's angel ascended in the flame of the altar.” Earlier the angel had refused to give his name, “since it is incomprehensible” (13:18). Manoah feared they would die, but his wife reasoned that God would not have accepted their offering if he meant to kill them (13:22–23).",
      world:
        "The scene echoes Gideon's call, where fire rises from a rock to consume the offering and the angel departs (Judges 6:21).",
      theirEyes:
        "Manoah and his wife lay face down on the ground, watching the fire climb into the sky and the stranger vanish with it.",
      tradition: {
        jewish:
          "Josephus retells the scene and adds that the angel appeared as a tall, handsome young man, which made Manoah jealous (Antiquities 5.8.2–3).",
      },
    },
    confidence: "settled",
    references: ["Judges 13:15–23", "Judges 6:21"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 5.8.2–3 (Whiston translation)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-077",
    era: "judges",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When his wedding guests solved his riddle, Samson said, “If you hadn't plowed with my heifer.” What did he mean?",
    choices: [
      "They had borrowed his ox to plough their fields",
      "They had spied on him in the vineyards of Timnah",
      "They had bribed his father for the answer",
      "They had got the answer through his wife",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Samson's riddle was: “Out of the eater came out food. Out of the strong came out sweetness” (Judges 14:14). The guests threatened to burn his wife and her father's house (14:15), she pressed him until he told her, and the men answered, “What is sweeter than honey? What is stronger than a lion?” (14:18).",
      world:
        "No one could solve it by logic: only Samson knew he had found bees and honey in the carcass of the lion he had killed (14:8–9). Riddles and wagers were entertainment at a seven-day wedding feast (14:12).",
      theirEyes:
        "Thirty Philistine guests faced losing thirty linen garments and thirty changes of clothing to an Israelite stranger, so they turned on the bride.",
    },
    confidence: "settled",
    references: ["Judges 14:8–18"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-078",
    era: "judges",
    level: 16,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Judges 15 says Samson tied a burning torch to the tail of each of his 300 foxes.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Judges 15:4: Samson “caught three hundred foxes, and took torches, and turned tail to tail, and put a torch in the middle between every two tails.” That makes 150 torches, not 300. The animals ran into the Philistines' fields and “burned up both the shocks and the standing grain, and also the olive groves” (15:5).",
      world:
        "The story is set “in the time of wheat harvest” (15:1), early summer, when the grain was dry and easy to burn. The Hebrew word shu'al can mean fox or jackal; some scholars and translations prefer jackals, which are more common in the region and move in packs.",
      theirEyes:
        "Philistine farmers watched a whole season's bread and oil go up in smoke in a single night.",
    },
    confidence: "settled",
    references: ["Judges 15:1–5"],
    sources: [
      scripture,
      { kind: "reference", citation: "F. Brown, S. R. Driver and C. A. Briggs, A Hebrew and English Lexicon of the Old Testament (1906), s.v. “shu'al”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-079",
    era: "judges",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Returning to Bethlehem from Moab, Naomi asked to be called “Mara.” What does Mara mean?",
    choices: ["Pleasant", "Bitter", "Wanderer", "Widow"],
    answer: 1,
    explanation: {
      textSays:
        "Ruth 1:20–21: “Don't call me Naomi. Call me Mara, for the Almighty has dealt very bitterly with me. I went out full, and Yahweh has brought me home again empty.” She had lost her husband Elimelech and both sons in Moab (1:3–5).",
      world:
        "Naomi's own name is usually taken to mean “pleasant” or “my pleasantness,” so the swap is a bitter play on words. The same Hebrew root names Marah, the spring of bitter water in Exodus 15:23.",
      theirEyes:
        "The women of Bethlehem crowded round asking, “Is this Naomi?” and the woman who had left with a family came back with only a foreign daughter-in-law.",
    },
    confidence: "settled",
    references: ["Ruth 1:3–5", "Ruth 1:19–21", "Exodus 15:23"],
    sources: [
      scripture,
      { kind: "reference", citation: "F. Brown, S. R. Driver and C. A. Briggs, A Hebrew and English Lexicon of the Old Testament (1906), s.v. “Mara”, “Naomi”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-080",
    era: "judges",
    level: 16,
    category: "archaeology",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: ancient Ugarit, at Ras Shamra in Syria, came to light after a tomb was found by accident in 1928.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "In 1928 a local farmer accidentally broke into an ancient tomb near the mound of Ras Shamra, by the bay of Minet el-Beida. A French mission under Claude F.-A. Schaeffer began excavating in 1929 and that same year found clay tablets. They include myths about El, Baal, Anat and Athirat (Asherah), the richest Canaanite religious texts known, written down in the Late Bronze Age before the city was destroyed around 1200 BCE.",
      theirEyes:
        "A scribe at Ugarit copying the story of Baal could never have guessed it would lie buried for over 3,000 years before a chance find brought it back.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "reference", citation: "“Ugarit,” Heilbrunn Timeline of Art History, The Metropolitan Museum of Art" },
      { kind: "scholarship", citation: "Marguerite Yon, The City of Ugarit at Tell Ras Shamra (Eisenbrauns, 2006)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "jud-081",
    era: "judges",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Philistine lords offered Delilah 1,100 pieces of silver in total to learn Samson's secret.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Judges 16:5: “we will each give you eleven hundred pieces of silver.” Each lord was paying, so the total was several times that. When Samson finally told her his secret, the lords “came up to her and brought the money in their hand” (16:18).",
      world:
        "The sum is huge: in the next chapter Micah hires a Levite priest for “ten pieces of silver per year” (17:10). The same odd amount, eleven hundred pieces of silver, is the sum Micah took from his mother (17:2), and many readers see the repetition as a deliberate link between the two stories.",
      theirEyes:
        "For a woman in the valley of Sorek, the rulers' offer was a fortune beyond anything a farming family would ever see.",
    },
    confidence: "settled",
    references: ["Judges 16:4–5", "Judges 16:18", "Judges 17:2", "Judges 17:10"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-082",
    era: "judges",
    level: 17,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Ruth's pledge to Naomi, what comes right after “Your people will be my people”?",
    choices: ["“and your land my land”", "“and your house my house”", "“and your God my God”", "“and your law my law”"],
    answer: 2,
    explanation: {
      textSays:
        "Ruth 1:16–17: “where you go, I will go; and where you stay, I will stay. Your people will be my people, and your God my God. Where you die, I will die, and there I will be buried.” She seals it with an oath in Yahweh's name.",
      world:
        "Naomi had just urged Ruth to follow Orpah, who “has gone back to her people and to her god” (1:15). Moab's national god was Chemosh (Numbers 21:29), also named on the Moabite king Mesha's stele (9th century BCE). Ruth's reply turns Naomi's words around: a new people and a new God.",
      theirEyes:
        "On the road out of Moab, a young widow chose a foreign land, a poor mother-in-law and a God not her own.",
    },
    confidence: "settled",
    references: ["Ruth 1:14–18", "Numbers 21:29"],
    sources: [scripture, { kind: "archaeology", citation: "Mesha Stele (Musée du Louvre, AO 5066), c. 840 BCE" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-083",
    era: "judges",
    level: 17,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "What did Micah of Ephraim offer the wandering Levite to become priest of his household shrine?",
    choices: [
      "A field and a house of his own",
      "Ten pieces of silver a year, clothing and food",
      "A tenth of every harvest",
      "His daughter in marriage",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Judges 17:10: “Dwell with me, and be to me a father and a priest, and I will give you ten pieces of silver per year, a suit of clothing, and your food.” Micah already had a shrine with an ephod, teraphim and images (17:4–5), and he concluded, “Now I know that Yahweh will do good to me, since I have a Levite as my priest” (17:13).",
      world:
        "Levites held no tribal land of their own (Deuteronomy 18:1), so a Levite might travel looking for a living, as this young man from Bethlehem did (Judges 17:8–9). “Father” here is a title of respect for a priest or adviser.",
      theirEyes:
        "For a landless young Levite on the road, a steady wage, a new suit and a place at the table must have seemed a good deal.",
    },
    confidence: "settled",
    references: ["Judges 17:4–13", "Deuteronomy 18:1"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-084",
    era: "judges",
    level: 17,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Deuteronomy 16:21 forbids planting an Asherah “of any kind of tree” beside the altar. In such verses, an asherah was most likely what?",
    choices: [
      "A stone incense altar",
      "A bronze serpent on a pole",
      "A wooden pole or tree linked with the goddess Asherah",
      "A clay oven for sacred bread",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Deuteronomy 16:21: “You shall not plant for yourselves an Asherah of any kind of tree beside Yahweh your God's altar.” Asherahs are planted, cut down and burned: Gideon offers a bull “with the wood of the Asherah” (Judges 6:26), and the WEB calls them “Asherah poles” (Deuteronomy 12:3).",
      world:
        "In the Ugaritic texts, Athirat — the same name as Hebrew Asherah — is the consort of El, the head of the gods. In the Bible the word can name the goddess or her wooden symbol.",
      theirEyes:
        "Beside a village altar stood a carved pole or a living tree, and many worshippers saw nothing strange in it.",
      debate:
        "Scholars debate what the object looked like — a living tree, a stylised pole or a carved image (compare “the engraved image of Asherah,” 2 Kings 21:7) — and how closely ordinary Israelites linked it with the goddess herself.",
    },
    confidence: "mainstream",
    references: ["Deuteronomy 16:21", "Deuteronomy 12:3", "Judges 6:25–26", "2 Kings 21:7"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Saul M. Olyan, Asherah and the Cult of Yahweh in Israel (Scholars Press, 1988)" },
      { kind: "reference", citation: "“Asherah,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-085",
    era: "judges",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After Benjamin's defeat in Judges 20, where did 600 surviving Benjaminites hold out for four months?",
    choices: ["In the cave of Adullam", "At the rock of Rimmon", "In the cave in Etam's rock", "On the hill of Moreh"],
    answer: 1,
    explanation: {
      textSays:
        "After a crime at Gibeah, the other tribes went to war against Benjamin (Judges 19–20). Judges 20:47: “six hundred men turned and fled toward the wilderness to the rock of Rimmon, and stayed in the rock of Rimmon four months.” Later the assembly “proclaimed peace to them” there (21:13).",
      world:
        "The rock of Rimmon is often placed near the village of Rammun, east of Bethel, on the edge of the wilderness that drops toward the Jordan Valley. Adullam's cave belongs to David's story (1 Samuel 22:1), Etam's rock to Samson's (Judges 15:8), and the hill of Moreh to Midian's camp in Gideon's story (Judges 7:1).",
      theirEyes:
        "On a bare crag above the wilderness, the last six hundred men of a tribe waited out a whole season, not knowing whether Israel would ever make peace.",
    },
    confidence: "settled",
    references: ["Judges 20:44–48", "Judges 21:13–14", "1 Samuel 22:1", "Judges 15:8", "Judges 7:1"],
    sources: [scripture, { kind: "reference", citation: "“Rimmon,” in D. N. Freedman (ed.), The Anchor Bible Dictionary (Doubleday, 1992)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "jud-086",
    era: "judges",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After the jawbone fight, God split a hollow at Lehi and water came out. What does the spring's name, En Hakkore, mean?",
    choices: ["Spring of the jawbone", "Spring of the thousand", "Spring of the one who called", "Spring of the donkey"],
    answer: 2,
    explanation: {
      textSays:
        "Samson, very thirsty, “called on Yahweh” (Judges 15:18). “God split the hollow place that is in Lehi, and water came out of it… Therefore its name was called En Hakkore, which is in Lehi, to this day” (15:19).",
      world:
        "Hebrew ʿen means “spring,” and haqqore means “the one who calls,” echoing Samson's cry. Lehi itself means “jawbone,” and the hill was named Ramath Lehi, “height of the jawbone” (15:17). Phrases like “to this day” mark stories that explain local landmarks.",
      theirEyes:
        "Travellers drinking at the spring near Lehi could hear in its name the story of a hero who nearly died of thirst.",
      debate:
        "The same Hebrew word qore also means “partridge” (1 Samuel 26:20), so some scholars think the spring once had an ordinary name — “partridge spring” — that the story reinterprets.",
    },
    confidence: "mainstream",
    references: ["Judges 15:14–19", "1 Samuel 26:20"],
    sources: [
      scripture,
      { kind: "reference", citation: "F. Brown, S. R. Driver and C. A. Briggs, A Hebrew and English Lexicon of the Old Testament (1906), s.v. “qara'” and “qore”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-087",
    era: "judges",
    level: 18,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "On the threshing floor, what reason does Boaz give for not promising at once to be Ruth's redeemer?",
    choices: [
      "He was too old to marry again",
      "A closer relative had the first right",
      "The barley harvest was not finished",
      "Naomi had not given her permission",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Ruth asks him to “spread the corner of your garment over your servant; for you are a near kinsman” (Ruth 3:9). Boaz replies, “Now it is true that I am a near kinsman. However, there is a kinsman nearer than I” (3:12), and promises to act if the other man will not (3:13).",
      world:
        "The Hebrew word for this relative is go'el. The same word names the “avenger of blood” (Numbers 35:19), showing it meant a family protector in many settings.",
      tradition: {
        shared:
          "Ruth's word for “corner” of his garment is kanaph, the same word as “wings” in Boaz's earlier blessing: Yahweh, “under whose wings you have come to take refuge” (2:12). Boaz now becomes the answer to his own prayer.",
      },
      theirEyes:
        "In the dark on the threshing floor, Boaz knew this had to be settled properly, in public, at the town gate.",
    },
    confidence: "settled",
    references: ["Ruth 2:12", "Ruth 3:9–13", "Numbers 35:19"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-088",
    era: "judges",
    level: 18,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "How many times do Judges 17–21 note that “there was no king in Israel”?",
    choices: ["Once", "Twice", "Four times", "Seven times"],
    answer: 2,
    explanation: {
      textSays:
        "The note comes at Judges 17:6, 18:1, 19:1 and 21:25. The first and last add: “Everyone did that which was right in his own eyes,” so the full refrain frames the closing stories of Micah's shrine, the Danite migration and the war against Benjamin.",
      world:
        "Deuteronomy 12:8 uses similar words for the disorder Israel must leave behind: “every man whatever is right in his own eyes.” Many scholars read the refrain as an editor's argument that Israel needed a king, preparing for the books of Samuel.",
      theirEyes:
        "To a reader living under the kings, these stories said: this is what life looked like before anyone kept order.",
      debate:
        "Some scholars think these chapters also take sides between Saul's town (Gibeah) and David's (Bethlehem), which both feature in the stories; others doubt the political reading.",
    },
    confidence: "settled",
    references: ["Judges 17:6", "Judges 18:1", "Judges 19:1", "Judges 21:25", "Deuteronomy 12:8"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Marc Zvi Brettler, “The Book of Judges: Literature as Politics,” Journal of Biblical Literature 108 (1989)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-089",
    era: "judges",
    level: 18,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the myths from Ugarit, which title belongs to El, the aged head of the gods?",
    choices: ["Rider of the Clouds", "Prince Sea", "Lady Athirat of the Sea", "Father of Years"],
    answer: 3,
    explanation: {
      world:
        "Ugaritic texts picture El as the grey-bearded, wise father of the gods, “Father of Years,” who lives at the source of the rivers and approves the other gods' plans. “Rider of the Clouds” is Baal's title, “Prince Sea” is Yamm's, and “Lady Athirat of the Sea” is El's consort, the goddess the Bible calls Asherah.",
      textSays:
        "In Hebrew, el is also the ordinary word for “God,” found in names like Israel and Bethel. Daniel 7:9 describes “one who was Ancient of Days,” whose hair was “like pure wool.”",
      theirEyes:
        "At Ugarit, worshippers imagined El as a white-bearded king in his tent, where even Baal had to come asking for favours.",
      debate:
        "“Father of Years” renders Ugaritic ab šnm, the usual reading since Marvin Pope; a minority take šnm as the name of a minor god, “father of Shunama.” Many scholars, including John Day, think the Ancient of Days imagery draws on old pictures of El; others see no direct link.",
    },
    confidence: "mainstream",
    references: ["Daniel 7:9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Ugaritic Baal Cycle (KTU 1.1–1.6)" },
      { kind: "scholarship", citation: "Marvin H. Pope, El in the Ugaritic Texts (Brill, 1955)" },
      { kind: "scholarship", citation: "John Day, Yahweh and the Gods and Goddesses of Canaan (Sheffield Academic Press, 2000)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-090",
    era: "judges",
    level: 18,
    category: "faith-practice",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Genesis shows Jacob setting up a sacred standing stone, yet Deuteronomy forbids setting one up.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "At Bethel Jacob “took the stone that he had put under his head, and set it up for a pillar, and poured oil on its top” (Genesis 28:18). Moses sets up “twelve pillars for the twelve tribes of Israel” at Sinai (Exodus 24:4). But Deuteronomy 16:22 says: “Neither shall you set yourself up a sacred stone which Yahweh your God hates.”",
      world:
        "The Hebrew word is massebah (plural massebot). Standing stones have been found at Canaanite and Israelite shrines, including Hazor and the Judean fortress of Arad.",
      theirEyes:
        "For a family in the hills, a tall stone at the shrine marked the very spot where their ancestors had met God.",
      debate:
        "Many scholars see a change over time: standing stones were an accepted part of early Israelite worship, and were later banned in the reforms reflected in Deuteronomy. Traditional Jewish and Christian commentators often explain that the ban came later, once such stones had become tied to Canaanite worship.",
    },
    confidence: "settled",
    references: ["Genesis 28:18", "Exodus 24:4", "Deuteronomy 16:22"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Tryggve N. D. Mettinger, No Graven Image? Israelite Aniconism in Its Ancient Near Eastern Context (Almqvist & Wiksell, 1995)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "jud-091",
    era: "judges",
    level: 19,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "During the war against Benjamin, Judges 20 says which priest “stood before” the ark of the covenant?",
    choices: ["Eli", "Phinehas son of Eleazar", "Ahimelech", "Zadok"],
    answer: 1,
    explanation: {
      textSays:
        "Judges 20:27–28: “the ark of the covenant of God was there in those days, and Phinehas, the son of Eleazar, the son of Aaron, stood before it in those days.” The WEB places this at Bethel (20:26); some older translations render beth-el as “the house of God.”",
      world:
        "Phinehas was Aaron's grandson and already active in Moses' time (Numbers 25:7). So the story is set early in the age of the judges, even though it comes at the end of the book: Judges 17–21 are appendices, not the last events in order. Eli served later at Shiloh; Ahimelech and Zadok belong to the time of Saul and David.",
      theirEyes:
        "Weeping and fasting before the ark, the tribes asked whether they should fight their own brothers again.",
    },
    confidence: "settled",
    references: ["Judges 20:26–28", "Numbers 25:7"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-092",
    era: "judges",
    level: 19,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A Philistine temple excavated at Tell Qasile, in modern Tel Aviv, had its main hall roof held up by what?",
    choices: [
      "Two wooden pillars on stone bases",
      "A single carved stone column",
      "A vaulted brick dome",
      "Rows of iron columns",
    ],
    answer: 0,
    explanation: {
      world:
        "In renewed excavations from 1971, Amihai Mazar found three Philistine temples built one on top of another (Strata XII–X, 12th–11th centuries BCE). In the latest and largest, two wooden columns set on stone bases held up the roof of the main hall.",
      textSays:
        "Judges 16:29: “Samson took hold of the two middle pillars on which the house rested and leaned on them, the one with his right hand and the other with his left.”",
      theirEyes:
        "Worshippers entering the Philistine temple at Tell Qasile passed between two wooden columns that carried the weight of the roof.",
      debate:
        "Dagon's temple at Gaza has never been found, and the Tell Qasile temple does not prove the story. It shows only that a Philistine temple could have its roof resting on two central pillars, as Judges describes.",
    },
    confidence: "settled",
    references: ["Judges 16:23–30"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Amihai Mazar, Excavations at Tell Qasile, Part One: The Philistine Sanctuary (Qedem 12; Hebrew University of Jerusalem, 1980)" },
      { kind: "reference", citation: "“Tel Qasile: A Philistine Settlement with a Temple,” Israel Ministry of Foreign Affairs (two cedar columns on stone bases in the Stratum X temple)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-093",
    era: "judges",
    level: 19,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to Ruth 4:17, who gave Ruth's baby son the name Obed?",
    choices: ["Boaz", "Naomi", "The elders at the gate", "The women of the neighbourhood"],
    answer: 3,
    explanation: {
      textSays:
        "Ruth 4:17: “The women, her neighbors, gave him a name, saying, ‘A son is born to Naomi’. They named him Obed. He is the father of Jesse, the father of David.” This makes Ruth David's great-grandmother; a short genealogy follows (4:18–22).",
      world:
        "Their words, “A son is born to Naomi,” show the baby restoring the family Naomi thought she had lost; the women had earlier heard her say she came home “empty” (1:21).",
      tradition: {
        jewish:
          "Josephus ends his retelling by saying he told Ruth's story to show God's power to raise people of humble birth to greatness, as he did David (Antiquities 5.9.4).",
      },
      theirEyes:
        "Bethlehem's women, who had seen Naomi come home empty, now saw her with a grandson on her lap.",
    },
    confidence: "settled",
    references: ["Ruth 4:13–22"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 5.9.4 (Whiston translation)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-094",
    era: "judges",
    level: 19,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Baal Cycle from Ugarit, Baal defeats a rival god with two magic clubs. Who is the rival?",
    choices: ["Shapash, the sun goddess", "Yamm, whose name means “Sea”", "El, the father of the gods", "Anat, Baal's sister"],
    answer: 1,
    explanation: {
      world:
        "In the Baal Cycle, the craftsman god Kothar-wa-Khasis makes two clubs for Baal, who strikes down Yamm, “Prince Sea, Judge River.” Baal then gets a palace and becomes king among the gods, before being swallowed by Mot, “Death.” Anat is Baal's ally, Shapash helps him, and El is the aged chief god.",
      textSays:
        "Hebrew poetry also pictures God mastering the sea: “You divided the sea by your strength. You broke the heads of the sea monsters in the waters” (Psalm 74:13). The Hebrew word for sea is yam.",
      theirEyes:
        "To sailors and farmers on the Syrian coast, Baal's victory meant the stormy sea was held in check and the rains would come.",
    },
    confidence: "settled",
    references: ["Psalm 74:13"],
    sources: [
      scripture,
      { kind: "primary", citation: "Ugaritic Baal Cycle (KTU 1.1–1.6), esp. KTU 1.2 column iv" },
      { kind: "scholarship", citation: "Mark S. Smith, The Ugaritic Baal Cycle, vol. 1 (Brill, 1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-095",
    era: "judges",
    level: 19,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "At Shiloh's yearly feast, where were the men of Benjamin told to hide and wait for the dancing daughters of Shiloh?",
    choices: ["In the city gate", "In the vineyards", "On the threshing floors", "In the caves of Etam"],
    answer: 1,
    explanation: {
      textSays:
        "The other tribes had sworn not to give their daughters to Benjamin (Judges 21:1). The elders told the Benjaminites, “Go and lie in wait in the vineyards, and see, and behold, if the daughters of Shiloh come out to dance in the dances, then come out of the vineyards, and each man catch his wife” (21:20–21).",
      world:
        "Judges calls it “a feast of Yahweh from year to year in Shiloh” (21:19). Dancing in vineyards suggests a grape-harvest festival; Judges 9:27 also describes celebrating after treading grapes.",
      tradition: {
        jewish:
          "The Mishnah, a later record (c. 200 CE), remembers Jerusalem's young women going out in white to dance in the vineyards on the 15th of Av and on the Day of Atonement (Taanit 4:8).",
      },
      theirEyes:
        "Shiloh's girls danced among the vines as they did every year, unaware of the men hiding between the rows.",
    },
    confidence: "settled",
    references: ["Judges 21:1", "Judges 21:19–23", "Judges 9:27"],
    sources: [scripture, { kind: "primary", citation: "Mishnah, Taanit 4:8" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "jud-096",
    era: "judges",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Judges 18:30 names the Danites' priest as Jonathan son of Gershom. In the WEB, whose grandson is he?",
    choices: ["Aaron's", "Eli's", "Samuel's", "Moses'"],
    answer: 3,
    explanation: {
      textSays:
        "Judges 18:30: “Jonathan, the son of Gershom, the son of Moses, and his sons were priests to the tribe of the Danites until the day of the captivity of the land.” Gershom was Moses' son (Exodus 2:22). The Danites had taken Micah's priest and images north and set them up in their new city of Dan (18:27–31).",
      world:
        "In the standard Hebrew text, a small letter nun is written above the line, turning “Moses” (Mosheh) into “Manasseh.” The King James Version follows that reading; many modern versions, like the WEB, read “Moses.”",
      theirEyes:
        "For worshippers at Dan, a priest descended from Moses himself gave their shrine an impressive pedigree.",
      debate:
        "Most scholars think “Moses” is the original reading and the raised letter was added to keep Moses' name away from an idol shrine. The Babylonian Talmud (Bava Batra 109b, compiled centuries later) itself treats Jonathan as Moses' grandson, saying the verse links him to Manasseh because he acted like the wicked king Manasseh.",
    },
    confidence: "settled",
    references: ["Judges 18:27–31", "Exodus 2:22"],
    sources: [
      scripture,
      { kind: "reference", citation: "Biblia Hebraica Stuttgartensia, Judges 18:30 (suspended nun)" },
      { kind: "primary", citation: "Babylonian Talmud, Bava Batra 109b" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-097",
    era: "judges",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Matthew's genealogy of Jesus mentions four women before Mary. Which of these is NOT one of them?",
    choices: ["Tamar", "Sarah", "Rahab", "Ruth"],
    answer: 1,
    explanation: {
      textSays:
        "Matthew 1:3, 5–6: “Judah became the father of Perez and Zerah by Tamar… Salmon became the father of Boaz by Rahab. Boaz became the father of Obed by Ruth… David the king became the father of Solomon by her who had been Uriah's wife.” Sarah is not mentioned: verse 2 says only “Abraham became the father of Isaac.”",
      world:
        "Ruth's own genealogy (Ruth 4:18–22) lists only fathers; Matthew adds the mothers. Ruth 4:12 had already linked Boaz's house with “Perez, whom Tamar bore to Judah.”",
      tradition: {
        christian:
          "Interpreters since the early church have asked why these women appear. Many note that all four were foreigners or married to foreigners, hinting at the Gospel's reach to the nations; others point to their unusual marriages, preparing for Mary's (Raymond E. Brown).",
      },
      theirEyes:
        "Early readers of Matthew met a Moabite widow in the royal family tree of the Messiah.",
    },
    confidence: "settled",
    references: ["Matthew 1:1–6", "Ruth 4:12", "Ruth 4:18–22"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Raymond E. Brown, The Birth of the Messiah (updated ed., Doubleday, 1993)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-098",
    era: "judges",
    level: 20,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Centuries after the Bible was written, Jews began reading the Book of Ruth at which festival?",
    choices: ["Purim", "Sukkot (Booths)", "Shavuot (Weeks)", "Hanukkah"],
    answer: 2,
    explanation: {
      textSays:
        "Ruth arrives in Bethlehem “in the beginning of barley harvest” (Ruth 1:22) and gleans “to the end of barley harvest and of wheat harvest” (2:23). Shavuot is “the feast of weeks with the first fruits of wheat harvest” (Exodus 34:22).",
      world:
        "This is a later custom, not a practice of Bible times. The earliest known mention is in the minor tractate Soferim (chapter 14), usually dated to the 8th century CE or later. Purim's book is Esther, and by a later custom still, Sukkot's is Ecclesiastes; no book is read for Hanukkah.",
      theirEyes:
        "A Bethlehem farmer at the end of harvest knew the season of Ruth's story well: sheaves, threshing floors and gleaners in the fields.",
    },
    confidence: "settled",
    references: ["Ruth 1:22", "Ruth 2:23", "Exodus 34:22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Massekhet Soferim, chapter 14 (post-Talmudic minor tractate; numbered 14:16 or 14:18 in different editions)" },
      { kind: "reference", citation: "“Why We Read the Book of Ruth on Shavuot,” My Jewish Learning" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-099",
    era: "judges",
    level: 20,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A Ugaritic tablet calls the monster Litan “the fleeing serpent” and “the twisting serpent.” Which biblical creature is described almost the same way?",
    choices: ["Behemoth", "The serpent in Eden", "Leviathan", "The bronze serpent"],
    answer: 2,
    explanation: {
      textSays:
        "Isaiah 27:1: “Yahweh with his hard and great and strong sword will punish leviathan, the fleeing serpent, and leviathan, the twisted serpent; and he will kill the dragon that is in the sea.” Psalm 74:14 says God broke “the heads of Leviathan in pieces.”",
      world:
        "In the Baal Cycle, Mot reminds Baal that he struck Litan, the fleeing serpent, the twisting serpent, “the mighty one with seven heads” (KTU 1.5 column i). Ugaritic ltn and Hebrew liwyatan are the same name. Isaiah uses Canaanite imagery to say God will defeat chaos and evil.",
      theirEyes:
        "Hearers in Judah knew the old tale of the many-headed sea serpent; Isaiah told them their God would finish it off for good.",
    },
    confidence: "settled",
    references: ["Isaiah 27:1", "Psalm 74:14"],
    sources: [
      scripture,
      { kind: "primary", citation: "Ugaritic Baal Cycle, KTU 1.5 column i" },
      { kind: "scholarship", citation: "John Day, God's Conflict with the Dragon and the Sea (Cambridge University Press, 1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-100",
    era: "judges",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "How did scribes at Ugarit usually write their own language, Ugaritic?",
    choices: [
      "In Egyptian hieroglyphs",
      "In Linear B syllables",
      "In a cuneiform alphabet of about 30 signs",
      "In the Greek alphabet",
    ],
    answer: 2,
    explanation: {
      world:
        "Ugaritic was written with wedge-shaped letters pressed into clay, like Mesopotamian cuneiform, but each sign stood for a sound, as in an alphabet. Scholars deciphered it within about a year of the first finds, in 1930. School tablets listing the letters in order (abecedaries) show an order close to the Hebrew alphabet's. For international letters Ugarit's scribes used Akkadian in the older syllabic cuneiform.",
      theirEyes:
        "A student scribe at Ugarit pressed his stylus into wet clay, reciting letters in an order a Hebrew child would later recognise.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "scholarship", citation: "Dennis Pardee, “Ugaritic,” in R. D. Woodard (ed.), The Ancient Languages of Syria-Palestine and Arabia (Cambridge University Press, 2008)" },
      { kind: "reference", citation: "“Ugarit,” Heilbrunn Timeline of Art History, The Metropolitan Museum of Art" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
