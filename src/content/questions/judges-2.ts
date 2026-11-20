import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const judges2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "jud-026",
    era: "judges",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Joshua 14, how old was Caleb when he asked Joshua for the hill country of Hebron?",
    choices: ["Forty", "Sixty-five", "Eighty-five", "One hundred twenty"],
    answer: 2,
    explanation: {
      textSays:
        "Caleb reminds Joshua that he was forty when Moses sent him from Kadesh Barnea to spy out the land (Joshua 14:7). Now he says, “I am eighty-five years old, today. As yet I am as strong today as I was in the day that Moses sent me” (14:10–11). He asks for the hill country where the Anakim lived, and Joshua gives him Hebron (14:12–13).",
      world:
        "Joshua 14:15 notes that Hebron's older name was Kiriath Arba. Caleb is called “the Kenizzite” (14:6), a clan name also found among Edom's peoples in Genesis 36:11, which many scholars read as a sign that outside groups were absorbed into Judah.",
      theirEyes:
        "Among the younger men at Gilgal, here stood an old spy asking not for a quiet field but for the hardest hill country, still full of fortified towns.",
    },
    confidence: "settled",
    references: ["Joshua 14:6–15", "Genesis 36:11"],
    sources: [scripture, { kind: "scholarship", citation: "Richard D. Nelson, Joshua: A Commentary (Old Testament Library, Westminster John Knox, 1997)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-027",
    era: "judges",
    level: 6,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When Joshua was old, God listed “land that still remains” to be taken. Whose regions head that list?",
    choices: ["The Moabites'", "The Philistines'", "The Edomites'", "The Ammonites'"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 13:1–2: “there remains yet very much land to be possessed. This is the land that still remains: all the regions of the Philistines, and all the Geshurites.” Verse 3 names “the five lords of the Philistines” and their peoples: the Gazites, Ashdodites, Ashkelonites, Gittites and Ekronites, of Gaza, Ashdod, Ashkelon, Gath and Ekron.",
      world:
        "Moab, Edom and Ammon lay east and south of the Dead Sea and the Jordan; they are not on this list of unconquered land. The Philistines settled on the southern coastal plain early in the 12th century BCE, and in the books of Judges and Samuel they become Israel's chief rivals.",
      theirEyes:
        "From the hill-country ridges, a farmer could look west to the coastal plain — rich land held by the Philistines and their five lords, and not his to take.",
    },
    confidence: "settled",
    references: ["Joshua 13:1–6"],
    sources: [scripture, { kind: "scholarship", citation: "Amihai Mazar, Archaeology of the Land of the Bible, 10,000–586 B.C.E. (Doubleday, 1990)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-028",
    era: "judges",
    level: 6,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When the tribes of Joseph complained their land was too small, what did Joshua tell them to do?",
    choices: [
      "Clear the forest in the hill country",
      "Move east of the Jordan",
      "Settle among the Philistines",
      "Share Judah's land",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Joshua 17:15: “If you are a numerous people, go up to the forest, and clear land for yourself there.” The tribes reply that the Canaanites in the valleys have “chariots of iron” (17:16), and Joshua repeats: “Although it is a forest, you shall cut it down” (17:18).",
      world:
        "Pollen studies and the spread of new villages suggest that much of the central hill country was wooded before the early Iron Age. Settlers cleared slopes and built terraces to farm them, while the flat valleys stayed in the hands of the stronger lowland towns.",
      theirEyes:
        "With axe and fire, a family on the slopes of Ephraim turned oak scrub into fields, one patch at a time.",
    },
    confidence: "settled",
    references: ["Joshua 17:14–18"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Israel Finkelstein, The Archaeology of the Israelite Settlement (Israel Exploration Society, 1988)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-029",
    era: "judges",
    level: 6,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Joshua 20, who was allowed to flee to a city of refuge?",
    choices: [
      "A runaway slave",
      "Someone who owed a debt",
      "Someone who had killed a person by accident",
      "A soldier deserting a battle",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Joshua 20:3: the cities were for “the man slayer who kills any person accidentally or unintentionally,” as “a refuge from the avenger of blood.” He states his case to the city's elders at the gate (20:4). Six cities are set apart: Kedesh, Shechem and Hebron west of the Jordan, and Bezer, Ramoth in Gilead and Golan to the east (20:7–8).",
      world:
        "In a society without police, a dead person's nearest relative, the “avenger of blood,” was expected to take revenge. The cities of refuge limited that blood feud by separating accidental killing from murder (see also Numbers 35 and Deuteronomy 19).",
      theirEyes:
        "A woodcutter whose axe-head flew off and killed a friend (Deuteronomy 19:5) could run for the nearest refuge city, hoping to reach the gate before the dead man's kin caught him.",
    },
    confidence: "settled",
    references: ["Joshua 20:1–9", "Numbers 35:9–15", "Deuteronomy 19:1–13"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-030",
    era: "judges",
    level: 6,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "How did early Iron Age farmers in Canaan's hill country turn steep slopes into usable fields?",
    choices: [
      "They built stone terraces",
      "They flooded them from rivers",
      "They covered them with sand",
      "They used iron ploughs pulled by horses",
    ],
    answer: 0,
    explanation: {
      world:
        "Hill-country villages of about 1200–1000 BCE are surrounded by stone walls that hold back soil in level steps up the hillsides. Terraces stopped rain from washing the thin soil away and made room for grain, vines and olives. Building and repairing them took the labour of whole families, which Lawrence Stager linked to the large, multi-generation households of early Israel. The hill country has no big rivers for irrigation; farming depended on rain.",
      textSays:
        "Deuteronomy 11:11 describes the land as “a land of hills and valleys” that “drinks water from the rain of the sky.”",
      theirEyes:
        "Every winter, after the rains, someone in the family walked the terraces putting fallen stones back, because one collapsed wall could send a season's soil down the hill.",
      debate:
        "Some terraces in the region are older than the Iron Age, and dating terrace walls is hard, so how far terracing was new in this period is debated.",
    },
    confidence: "mainstream",
    references: ["Deuteronomy 11:10–12"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Lawrence E. Stager, “The Archaeology of the Family in Ancient Israel,” Bulletin of the American Schools of Oriental Research 260 (1985)" },
      { kind: "scholarship", citation: "Israel Finkelstein, The Archaeology of the Israelite Settlement (Israel Exploration Society, 1988)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "jud-031",
    era: "judges",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the eastern tribes said they built their great altar by the Jordan to offer burnt offerings on it.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 22: Reuben, Gad and half of Manasseh build “a great altar to look at” by the Jordan (22:10), and the other tribes gather at Shiloh for war. The builders explain it is “not for burnt offering, nor for sacrifice; but it will be a witness between us and you” (22:26–27), so their children will never be told “You have no portion in Yahweh” (22:27). They name it “A Witness Between Us that Yahweh is God” (22:34).",
      world:
        "The Hebrew word for “witness” is ʿed; some manuscripts and old translations add “Ed” as the altar's name, which is why it is often called the altar of Ed.",
      theirEyes:
        "To a family at Shiloh, a second altar meant a rival shrine and trouble with God; to herders in Gilead, the Jordan felt like a border that might one day shut them out.",
    },
    confidence: "settled",
    references: ["Joshua 22:10–34"],
    sources: [scripture, { kind: "scholarship", citation: "Richard D. Nelson, Joshua: A Commentary (Old Testament Library, Westminster John Knox, 1997)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-032",
    era: "judges",
    level: 7,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Who led the delegation sent to question the eastern tribes about their altar by the Jordan?",
    choices: ["Caleb", "Eleazar the high priest", "Othniel", "Phinehas son of Eleazar"],
    answer: 3,
    explanation: {
      textSays:
        "Joshua 22:13–14: the Israelites sent “Phinehas the son of Eleazar the priest” with ten princes, one for each tribe. He warns them with two stories: the sin at Peor and Achan's theft (22:17–20). After hearing their answer he says, “Today we know that Yahweh is among us” (22:31).",
      world:
        "Phinehas was already known for his zeal at Peor, where Numbers 25:11–13 says God gave him “the covenant of an everlasting priesthood.”",
      theirEyes:
        "Sending the priest famous for zeal was a warning in itself; the eastern tribes knew they had to give a very good answer.",
      tradition: {
        jewish:
          "Second Temple writers held Phinehas up as a model of zeal. Ben Sira calls him “third in glory” after Moses and Aaron (Sirach 45:23), and 1 Maccabees 2:26 says Mattathias “was zealous for the law, even as Phinehas did.”",
      },
    },
    confidence: "settled",
    references: ["Joshua 22:13–34", "Numbers 25:7–13"],
    sources: [scripture, { kind: "primary", citation: "Sirach 45:23; 1 Maccabees 2:26" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-033",
    era: "judges",
    level: 7,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Caleb's daughter Achsah was given land in the dry south. What extra gift did she ask her father for?",
    choices: ["A herd of camels", "Springs of water", "A walled city", "Iron chariots"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 15:19: “Give me a blessing. Because you have set me in the land of the South, give me also springs of water.” Caleb “gave her the upper springs and the lower springs.” Achsah had been given in marriage to Othniel, who captured Debir (15:16–17).",
      world:
        "The South (the Negev) gets little rain, so land without a water source was worth little. Springs meant flocks could drink and fields could be watered through the long dry summer.",
      theirEyes:
        "Anyone who had herded sheep in the southern hills in August knew that Achsah had asked for the most valuable thing in the land.",
    },
    confidence: "settled",
    references: ["Joshua 15:15–19"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-034",
    era: "judges",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Before casting lots for the seven remaining tribes, what did Joshua have done first?",
    choices: [
      "A census of every fighting man",
      "A seven-day fast at Gilgal",
      "A survey of the land, written down in a book",
      "A tour by the Ark around every city",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Joshua 18:4: “Appoint for yourselves three men from each tribe. I will send them, and they shall arise, walk through the land, and describe it according to their inheritance.” The men “surveyed it by cities into seven portions in a book” and returned to the camp at Shiloh, where Joshua cast lots “before Yahweh” (18:9–10).",
      world:
        "Lots were a common ancient way to divide inheritance fairly, since the result was not in any person's hands. Recording towns by name shows the land being treated like a family estate divided among heirs.",
      theirEyes:
        "For weeks, groups of three walked the valleys and ridges, counting towns and wells, knowing that their notes would decide where their grandchildren lived.",
    },
    confidence: "settled",
    references: ["Joshua 18:1–10"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-035",
    era: "judges",
    level: 7,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The Amarna letters, sent to Pharaoh by Canaanite rulers in the 14th century BCE, were written mainly in which language?",
    choices: ["Hebrew", "Egyptian hieroglyphs", "Greek", "Akkadian"],
    answer: 3,
    explanation: {
      world:
        "The roughly 380 clay tablets found at el-Amarna in Egypt (from 1887) are written in cuneiform, mainly in Akkadian, the diplomatic language of the Late Bronze Age Near East. Canaanite scribes often slipped local words and grammar into their Akkadian, which gives scholars an early glimpse of the Canaanite language from which Hebrew later grew.",
      theirEyes:
        "A king of a Canaanite town dictated his complaints to a scribe trained in a foreign language, who pressed them into clay for the long journey to Egypt.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Amarna letters (EA), el-Amarna, Egypt, 14th century BCE" },
      { kind: "scholarship", citation: "William L. Moran, The Amarna Letters (Johns Hopkins University Press, 1992)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "jud-036",
    era: "judges",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: according to Joshua 19, the tribe of Simeon's inheritance lay inside the territory of Judah.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Joshua 19:1: Simeon's “inheritance was in the middle of the inheritance of the children of Judah,” because “the portion of the children of Judah was too much for them” (19:9). Its towns include Beersheba, Hormah and Ziklag (19:2–5).",
      world:
        "Simeon soon fades from Israel's history; the Blessing of Moses in Deuteronomy 33 does not mention it at all. Many scholars think the tribe was absorbed into Judah.",
      theirEyes:
        "A Simeonite shepherd near Beersheba lived among Judahite villages, and over a few generations the line between the two clans blurred.",
      tradition: {
        shared:
          "Readers have long linked this to Jacob's words about Simeon and Levi in Genesis 49:7: “I will divide them in Jacob, and scatter them in Israel.”",
      },
    },
    confidence: "settled",
    references: ["Joshua 19:1–9", "Genesis 49:5–7", "Deuteronomy 33"],
    sources: [scripture, { kind: "scholarship", citation: "Richard D. Nelson, Joshua: A Commentary (Old Testament Library, Westminster John Knox, 1997)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-037",
    era: "judges",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Why did Zelophehad's five daughters receive land among the tribe of Manasseh?",
    choices: [
      "They had married into the tribe of Levi",
      "They had helped the spies at Jericho",
      "Their father had no sons, and Moses had commanded it",
      "They won it by lot against their uncles",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Joshua 17:3–4: Zelophehad “had no sons, but daughters”: Mahlah, Noah, Hoglah, Milcah and Tirzah. They came to Eleazar and Joshua saying, “Yahweh commanded Moses to give us an inheritance among our brothers,” and they received it. This follows their earlier appeal to Moses, where God says, “The daughters of Zelophehad speak right” (Numbers 27:7).",
      world:
        "Several of the daughters' names match place or clan names in the hill country of Manasseh. Tirzah was later a royal city of the northern kingdom, and Samaria ostraca of the 8th century BCE name clan districts such as Hoglah and Noah.",
      theirEyes:
        "For a family with only daughters, the fear was simple: when the father died, his fields would pass out of his name. These five women went to the leaders and changed that.",
    },
    confidence: "settled",
    references: ["Joshua 17:3–6", "Numbers 27:1–11", "Numbers 36:1–12"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Samaria Ostraca (8th century BCE), clan names" },
      { kind: "scholarship", citation: "Richard D. Nelson, Joshua: A Commentary (Old Testament Library, Westminster John Knox, 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-038",
    era: "judges",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Joshua 24, where were the bones of Joseph, carried up from Egypt, finally buried?",
    choices: ["In the cave of Machpelah at Hebron", "At Shiloh", "At Timnath Serah", "At Shechem"],
    answer: 3,
    explanation: {
      textSays:
        "Joshua 24:32: “They buried the bones of Joseph, which the children of Israel brought up out of Egypt, in Shechem, in the parcel of ground which Jacob bought from the sons of Hamor the father of Shechem for a hundred pieces of silver.” This fulfils Joseph's request in Genesis 50:25, and Exodus 13:19 says Moses took the bones with him.",
      world:
        "Shechem lay in the hill country of Manasseh and Ephraim, the two tribes descended from Joseph. A tomb near Nablus is venerated today as Joseph's Tomb, but its traditional identification cannot be proved archaeologically.",
      theirEyes:
        "For generations the coffin had travelled with the people; laying it in Jacob's field at Shechem said that the long journey from Egypt was over.",
      tradition: {
        christian:
          "John 4:5 sets Jesus' meeting with the Samaritan woman near “the parcel of ground that Jacob gave to his son Joseph,” and Hebrews 11:22 praises Joseph's instructions about his bones as an act of faith.",
      },
    },
    confidence: "settled",
    references: ["Joshua 24:32", "Genesis 50:25", "Exodus 13:19", "John 4:5", "Hebrews 11:22"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-039",
    era: "judges",
    level: 8,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What have archaeologists noticed about animal bones at early Iron Age hill-country villages, compared with Philistine cities?",
    choices: [
      "Pig bones are rare or absent",
      "Camel bones are the most common",
      "Horse bones outnumber sheep",
      "No animal bones survive at all",
    ],
    answer: 0,
    explanation: {
      world:
        "Bone assemblages from Iron I highland villages are dominated by sheep, goats and cattle, with very few or no pigs. At Philistine cities such as Ekron and Ashkelon, pig bones are much more common. Israel Finkelstein suggested the avoidance of pork may be one of the earliest markers of a distinct Israelite identity.",
      textSays: "Leviticus 11:7 and Deuteronomy 14:8 list the pig as unclean.",
      theirEyes:
        "Up in the hills, a family's meat came from the flock; down on the coast, Philistine households kept pigs and ate pork.",
      debate:
        "Brian Hesse and Paula Wapnish warned that pig-keeping also depends on climate, terrain and economy, so bones alone cannot prove ethnicity. Later studies (Sapir-Hen and colleagues, 2013) found that pig use in the region varied over time, and debate how early a religious taboo existed.",
    },
    confidence: "mainstream",
    references: ["Leviticus 11:7", "Deuteronomy 14:8"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Israel Finkelstein, “Ethnicity and Origin of the Iron I Settlers in the Highlands of Canaan: Can the Real Israel Stand Up?” Biblical Archaeologist 59 (1996)" },
      { kind: "scholarship", citation: "Brian Hesse and Paula Wapnish, “Can Pig Remains Be Used for Ethnic Diagnosis in the Ancient Near East?” in N. A. Silberman and D. Small (eds.), The Archaeology of Israel (1997)" },
      { kind: "scholarship", citation: "Lidar Sapir-Hen, Guy Bar-Oz, Yuval Gadot and Israel Finkelstein, “Pig Husbandry in Iron Age Israel and Judah,” Zeitschrift des Deutschen Palästina-Vereins 129 (2013)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-040",
    era: "judges",
    level: 8,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: large “collared-rim” storage jars, common in early Iron Age hill-country villages, have been found only at sites linked to Israel.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "Collared-rim jars (collared pithoi) are big storage jars, over a metre tall, with a raised ridge where the neck meets the shoulder. They are very common in the hill-country villages of Iron Age I (about 1200–1000 BCE), and scholars such as William F. Albright and Yohanan Aharoni once treated them as a marker of Israelite settlers. Later work found them in lowland Canaanite towns such as Megiddo, at sites east of the Jordan, and already in Late Bronze Age levels at Aphek, so most archaeologists no longer see them as an ethnic badge. Many think they simply suited hill farmers who needed to store water, grain and oil.",
      theirEyes:
        "In a hilltop house, two or three tall jars stood against the wall of the storeroom, holding the water and grain a family needed to get through the dry months.",
      debate:
        "Whether the jars say anything at all about who the villagers were is still debated: some see them as a regional or economic feature of hill-country life rather than an ethnic one.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "scholarship", citation: "Douglas L. Esse, “The Collared Pithos at Megiddo: Ceramic Distribution and Ethnicity,” Journal of Near Eastern Studies 51 (1992)" },
      { kind: "scholarship", citation: "Ann E. Killebrew, Biblical Peoples and Ethnicity (Society of Biblical Literature, 2005)" },
      { kind: "scholarship", citation: "Israel Finkelstein, The Archaeology of the Israelite Settlement (Israel Exploration Society, 1988)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "jud-041",
    era: "judges",
    level: 9,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Judah's northern border ran past Jerusalem along which valley, whose name later gave us “Gehenna”?",
    choices: ["The valley of Elah", "The valley of Hinnom", "The valley of Aijalon", "The Jezreel valley"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 15:8: “The border went up by the valley of the son of Hinnom to the side of the Jebusite (also called Jerusalem) southward.” Benjamin's southern border follows the same line (18:16), so Jerusalem sat right on the boundary of the two tribes.",
      world:
        "The valley runs along the west and south of Jerusalem's Old City. Hebrew Ge Hinnom (“valley of Hinnom”) became Aramaic Gehinnam and Greek Geenna, which gives English “Gehenna.” The valley of Achor, also on Judah's northern border, lies far to the east near Jericho (15:7).",
      theirEyes:
        "A surveyor tracing Judah's border would walk down into this ravine below the Jebusite town, never guessing its name would come to mean a place of fiery judgment.",
      tradition: {
        jewish:
          "By Second Temple times the valley was linked with judgment: 1 Enoch 26–27, commonly read as describing Jerusalem, speaks of an “accursed valley” for the wicked.",
        christian:
          "In the Gospels Jesus warns of “Gehenna, into the unquenchable fire” (Mark 9:43), usually translated “hell.”",
      },
    },
    confidence: "settled",
    references: ["Joshua 15:8", "Joshua 18:16", "Mark 9:43"],
    sources: [
      scripture,
      { kind: "primary", citation: "1 Enoch 26–27" },
      { kind: "reference", citation: "“Gehenna,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-042",
    era: "judges",
    level: 9,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After the covenant at Shechem, what did Joshua set up under the oak as a witness?",
    choices: ["A bronze snake", "Twelve pillars", "A great stone", "An altar of earth"],
    answer: 2,
    explanation: {
      textSays:
        "Joshua 24:26–27: Joshua “took a great stone, and set it up there under the oak that was by the sanctuary of Yahweh.” He said, “this stone shall be a witness against us, for it has heard all Yahweh's words which he spoke to us.”",
      world:
        "Ancient treaties called on witnesses to hold both parties to their promises. Here the stone plays that part. Shechem's oak had a long history in the story: Jacob buried foreign gods “under the oak which was by Shechem” (Genesis 35:4), and Abimelech was later made king “by the oak of the pillar” there (Judges 9:6).",
      theirEyes:
        "Long after the crowd went home, the stone stood under the oak; anyone passing it would remember what the tribes had promised.",
    },
    confidence: "settled",
    references: ["Joshua 24:25–27", "Genesis 35:4", "Judges 9:6"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-043",
    era: "judges",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Where was Joshua buried?",
    choices: ["Gilgal", "Timnath Serah", "Mount Nebo", "Shechem"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 24:29–30: Joshua died at 110 and “they buried him in the border of his inheritance in Timnathserah, which is in the hill country of Ephraim, on the north of the mountain of Gaash.” It was the city he had asked for and built (19:49–50). Judges 2:9 spells it Timnath Heres.",
      world:
        "Many scholars identify the site with Khirbet Tibnah, north-west of Jerusalem in the hills of Ephraim. Moses was buried in Moab near Mount Nebo; Joseph's bones were buried at Shechem.",
      theirEyes:
        "The man who had divided the land among all the tribes took his own small portion last, a hill town of Ephraim, and was buried there.",
      tradition: {
        jewish:
          "The Septuagint (Greek translation of the Hebrew Bible) adds that the flint knives Joshua used to circumcise the Israelites at Gilgal were placed with him in his tomb (Greek Joshua 24:31a).",
      },
    },
    confidence: "settled",
    references: ["Joshua 19:49–50", "Joshua 24:29–30", "Judges 2:8–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Joshua 24:31a (Rahlfs numbering)" },
      { kind: "scholarship", citation: "Richard D. Nelson, Joshua: A Commentary (Old Testament Library, Westminster John Knox, 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-044",
    era: "judges",
    level: 9,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which wealthy port city on the Syrian coast was destroyed in the early 12th century BCE and never rebuilt as a city?",
    choices: ["Tyre", "Byblos", "Ugarit", "Sidon"],
    answer: 2,
    explanation: {
      world:
        "Ugarit (Ras Shamra) was destroyed in the early 12th century BCE, usually dated about 1190–1185 BCE, during the wave of collapse that ended the Late Bronze Age; the site was never again a city. Its archives include letters from its final years, one usually attributed to its last king, Ammurapi, telling the king of Alashiya (Cyprus) that enemy ships had burned his towns. Tyre, Sidon and Byblos survived and grew into the Phoenician cities of the Iron Age. The collapse also brought down the Hittite empire and weakened Egypt's hold on Canaan.",
      theirEyes:
        "Merchants who had sailed to Ugarit for generations found only a burnt ruin; trade routes that had linked Egypt, Cyprus and Mesopotamia broke apart.",
      debate:
        "What caused the collapse is debated: raiders such as the Sea Peoples, drought, earthquakes, internal revolt and broken trade networks are all proposed, probably in combination.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "scholarship", citation: "Eric H. Cline, 1177 B.C.: The Year Civilization Collapsed (Princeton University Press, 2014)" },
      { kind: "reference", citation: "“Ugarit,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-045",
    era: "judges",
    level: 9,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In an Amarna letter, Jerusalem's ruler accuses Labayu of giving which city's land to the Habiru?",
    choices: ["Shechem", "Hebron", "Jericho", "Gaza"],
    answer: 0,
    explanation: {
      world:
        "In EA 289, Abdi-Heba of Jerusalem asks Pharaoh whether he should act like Labayu, who (he says) gave the land of Shechem to the Habiru. Labayu was a ruler in the central hill country based at Shechem, and other letters complain about him and his sons expanding their power. The Habiru (ʿApiru) appear across the letters as uprooted people working as mercenaries or raiders.",
      textSays:
        "Shechem is also where the Bible places Joshua's covenant assembly (Joshua 24:1), without any mention of a battle for the city.",
      theirEyes:
        "To a nervous city king in Jerusalem, his neighbour to the north was a traitor who had hired outlaws to grab territory.",
      debate:
        "Some scholars have asked whether Joshua's silence about conquering Shechem reflects the city's earlier history as a hill-country power. Any direct connection between the Habiru and the Hebrews or Israel remains disputed.",
    },
    confidence: "settled",
    references: ["Joshua 24:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Amarna letter EA 289 (Abdi-Heba of Jerusalem)" },
      { kind: "scholarship", citation: "William L. Moran, The Amarna Letters (Johns Hopkins University Press, 1992)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "jud-046",
    era: "judges",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: excavators at Shechem (Tell Balata) found a large standing stone in front of a massive temple.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "Ernst Sellin's German excavations uncovered a thick-walled “fortress temple” at Tell Balata, and the American (Drew-McCormick) expedition led by G. Ernest Wright re-excavated it from 1956. A large broken stone slab lay in the temple's forecourt; Wright's team identified its socket and set the stone upright again, where visitors can see it today.",
      textSays: "Joshua 24:26 says Joshua set up a great stone “under the oak that was by the sanctuary of Yahweh” at Shechem.",
      theirEyes:
        "Anyone entering Shechem's temple courtyard passed a tall stone slab, a silent witness that dominated the approach.",
      debate:
        "Whether this stone has anything to do with Joshua's stone is debated. The temple was built in the Middle Bronze Age, and scholars disagree about its phases; Lawrence Stager argued it was still in use in the early Iron Age.",
    },
    confidence: "mainstream",
    references: ["Joshua 24:26"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "G. Ernest Wright, Shechem: The Biography of a Biblical City (McGraw-Hill, 1965)" },
      { kind: "scholarship", citation: "Lawrence E. Stager, “The Fortress-Temple at Shechem and the ‘House of El, Lord of the Covenant’,” in P. H. Williams Jr. and T. Hiebert (eds.), Realia Dei (Scholars Press, 1999)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-047",
    era: "judges",
    level: 10,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Joshua died aged 110, the same age the Bible gives for which earlier figure's death?",
    choices: ["Moses", "Joseph", "Abraham", "Aaron"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 24:29: Joshua “died, being one hundred ten years old.” Genesis 50:26: “Joseph died, being one hundred ten years old.” Moses died at 120 (Deuteronomy 34:7), Aaron at 123 (Numbers 33:39) and Abraham at 175 (Genesis 25:7).",
      world:
        "In Egyptian texts, 110 years was the ideal lifespan. The Instruction of Ptahhotep ends with the sage saying he reached 110 years. Many scholars see the same Egyptian ideal in the ages of Joseph and Joshua.",
      theirEyes:
        "To those who heard the story, Joshua's 110 years marked a full, blessed life, and echoed the age of Joseph, whose bones were buried soon after.",
    },
    confidence: "settled",
    references: ["Joshua 24:29", "Genesis 50:26", "Deuteronomy 34:7", "Numbers 33:39", "Genesis 25:7"],
    sources: [
      scripture,
      { kind: "primary", citation: "Instruction of Ptahhotep, epilogue, in Miriam Lichtheim, Ancient Egyptian Literature, vol. 1 (University of California Press, 1973)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-048",
    era: "judges",
    level: 10,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: a person sheltering in a city of refuge could go home safely after the death of the high priest.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Joshua 20:6: the man slayer stays in the city “until he stands before the congregation for judgment, until the death of the high priest that shall be in those days. Then the man slayer shall return.” Numbers 35:25 adds that he stays “until the death of the high priest, who was anointed with the holy oil.”",
      world:
        "The rule tied a family's private grievance to a public event: the death of the high priest marked a new period, after which the avenger of blood could no longer act.",
      theirEyes:
        "A man who had fled to Hebron years before might hear that the high priest had died and know that, at last, he could walk home.",
      tradition: {
        shared:
          "Interpreters have long asked why the high priest's death mattered; a common reading is that it worked like an atonement or amnesty that closed the case.",
      },
    },
    confidence: "settled",
    references: ["Joshua 20:6", "Numbers 35:25–28"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-049",
    era: "judges",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A bronze statue base found at Megiddo bears the name of which pharaoh, among the last signs of Egyptian rule in Canaan?",
    choices: ["Ramesses VI", "Thutmose III", "Akhenaten", "Merneptah"],
    answer: 0,
    explanation: {
      world:
        "Egypt had controlled Canaan since the 15th century BCE, with garrisons at places such as Beth-shean and Gaza. A bronze statue base inscribed with the name of Ramesses VI (mid-12th century BCE), found at Megiddo by the University of Chicago expedition in the 1930s, is one of the latest signs of that control. Soon after, Egypt withdrew, leaving the land to Canaanite towns, Philistines and the new hill-country villages. Thutmose III, Akhenaten and Merneptah all ruled earlier, while Egyptian power was still firm in Canaan.",
      theirEyes:
        "For the first time in centuries, no Egyptian officials came to collect tribute, and local towns had to fend for themselves.",
      debate: "Exactly when Egyptian rule ended, and whether the statue base was still in place when Megiddo's stratum VIIA was destroyed, is debated.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "scholarship", citation: "Amihai Mazar, Archaeology of the Land of the Bible, 10,000–586 B.C.E. (Doubleday, 1990)" },
      { kind: "scholarship", citation: "Eric H. Cline, 1177 B.C.: The Year Civilization Collapsed (Princeton University Press, 2014)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-050",
    era: "judges",
    level: 10,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to Joshua 21, the priests descended from Aaron received their 13 towns from which tribes?",
    choices: [
      "Reuben, Gad and Zebulun",
      "Judah, Simeon and Benjamin",
      "Issachar, Asher and Naphtali",
      "Ephraim, Dan and Manasseh",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 21:4: “The children of Aaron the priest… had thirteen cities by lot out of the tribe of Judah, out of the tribe of the Simeonites, and out of the tribe of Benjamin.” They include Hebron, Gibeon and Anathoth (21:13–18). The other Levite clans got towns from the remaining tribes (21:5–7), forty-eight in all (21:41).",
      world:
        "These towns lie in Judah and Benjamin, around Jerusalem and to its south. Anathoth was the home of the priest-prophet Jeremiah, “one of the priests who were in Anathoth in the land of Benjamin” (Jeremiah 1:1).",
      theirEyes:
        "A priestly family in Anathoth tended its own small pasture ground, but lived within a short walk of the place that would later hold the Temple.",
      debate:
        "Many scholars think the list of Levitical towns reflects conditions under the later kings rather than Joshua's time; others argue for older roots.",
    },
    confidence: "settled",
    references: ["Joshua 21:1–19", "Jeremiah 1:1"],
    sources: [scripture, { kind: "scholarship", citation: "Richard D. Nelson, Joshua: A Commentary (Old Testament Library, Westminster John Knox, 1997)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
