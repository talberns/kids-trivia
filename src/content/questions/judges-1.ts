import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const judges1: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "jud-001",
    era: "judges",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Before he led Israel into Canaan, Joshua son of Nun served as the assistant of which leader?",
    choices: ["Aaron", "Moses", "Samuel", "Eli"],
    answer: 1,
    explanation: {
      textSays:
        "Exodus 24:13: “Moses rose up with Joshua, his servant, and Moses went up onto God's Mountain.” Numbers 11:28 calls him “the servant of Moses,” and Deuteronomy 34:9 says he was “full of the spirit of wisdom, for Moses had laid his hands on him.” The book of Joshua opens “after the death of Moses” (Joshua 1:1).",
      theirEyes:
        "For forty years the people had watched the young aide at Moses' side; now, on the banks of the Jordan, the aide was the one giving orders.",
      tradition: {
        jewish:
          "Ben Sira (early 2nd century BCE) praises Joshua as “the successor of Moses in prophecies” (Sirach 46:1).",
      },
    },
    confidence: "settled",
    references: ["Exodus 24:13", "Numbers 11:28", "Deuteronomy 34:9", "Joshua 1:1", "Sirach 46:1"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-002",
    era: "judges",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which charge does God repeat to Joshua three times in Joshua chapter 1?",
    choices: ["“Let my people go”", "“Go and sin no more”", "“Be strong and courageous”", "“Fear not, little flock”"],
    answer: 2,
    explanation: {
      textSays:
        "Joshua 1:9: “Haven't I commanded you? Be strong and courageous. Don't be afraid. Don't be dismayed, for Yahweh your God is with you wherever you go.” The charge also comes in 1:6 and 1:7, and the people echo it back to Joshua in 1:18. Joshua is told to keep “this book of the law” and meditate on it “day and night” (1:8).",
      theirEyes:
        "A new leader with an untested people and a flooded river ahead needed to hear one thing more than once: do not be afraid.",
      tradition: {
        shared:
          "The other three phrases come from elsewhere: “Let my people go” from Exodus 5:1, and “Go and sin no more” and “Fear not, little flock” from the Gospels, in the King James Version's wording (John 8:11; Luke 12:32).",
      },
    },
    confidence: "settled",
    references: ["Joshua 1:6–9", "Joshua 1:18"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-003",
    era: "judges",
    level: 1,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Where did Rahab hide the two Israelite spies in Jericho?",
    choices: ["In a dry well", "Under stalks of flax on her roof", "In the city's grain store", "Inside a large storage jar"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 2:6: “But she had brought them up to the roof, and hidden them under the stalks of flax which she had laid in order on the roof.” Her house was built into the city wall, and she let them down “by a cord through the window” (2:15).",
      world:
        "Flat roofs were working space: crops could be spread out there to dry. Flax was the plant from which linen thread was made. Josephus, retelling the story, also says the flax had been laid out to dry on her roof.",
      theirEyes:
        "When the king's men came knocking, two strangers lay still under bundles of drying flax, listening to Rahab send their pursuers the wrong way.",
    },
    confidence: "settled",
    references: ["Joshua 2:1–7", "Joshua 2:15"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews, book 5, chapter 1, trans. Whiston" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-004",
    era: "judges",
    level: 1,
    category: "tradition",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Rahab marked her house for rescue by tying a scarlet cord in her window.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "The spies told her: “tie this line of scarlet thread in the window which you used to let us down” (Joshua 2:18). After they left, “she tied the scarlet line in the window” (2:21). When Jericho fell, Rahab and her family were brought out alive (6:22–25).",
      theirEyes: "A red thread hanging from one window in the wall was the only sign that this household had made a deal with the enemy outside.",
      tradition: {
        jewish: "Josephus describes Rahab's house as an inn where the spies lodged (Antiquities, book 5).",
        christian:
          "Hebrews 11:31 praises her faith, and Matthew 1:5 names Rahab as the mother of Boaz, an ancestor of David and Jesus. 1 Clement 12 (usually dated about 96 CE) read the scarlet thread as a sign of redemption through the Lord's blood.",
      },
    },
    confidence: "settled",
    references: ["Joshua 2:18–21", "Joshua 6:22–25", "Hebrews 11:31", "Matthew 1:5"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews, book 5, chapter 1, trans. Whiston" },
      { kind: "primary", citation: "1 Clement 12 (Ante-Nicene Fathers, vol. 1)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-005",
    era: "judges",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In his farewell speech at Shechem (Joshua 24), whom does Joshua say he and his household will serve?",
    choices: ["Yahweh", "The gods their fathers served beyond the River", "The gods of the Amorites", "The gods of Egypt"],
    answer: 0,
    explanation: {
      textSays:
        "Joshua 24:15: “choose today whom you will serve; whether the gods which your fathers served that were beyond the River, or the gods of the Amorites, in whose land you dwell; but as for me and my house, we will serve Yahweh.” He had just told them: “Put away the gods which your fathers served beyond the River, in Egypt” (24:14). The people answer, “we also will serve Yahweh” (24:18), and Joshua makes a covenant with them at Shechem (24:25).",
      world:
        "“The River” is the Euphrates. Joshua 24:2 recalls that Abraham's father Terah lived beyond it and “served other gods.”",
      theirEyes:
        "An old leader, his work done, put the choice to the whole people out loud, and then told them where his own family stood before anyone else answered.",
    },
    confidence: "settled",
    references: ["Joshua 24:1–2", "Joshua 24:14–18", "Joshua 24:25"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "jud-006",
    era: "judges",
    level: 2,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "How many stones did the Israelites carry out of the Jordan to set up as a memorial at Gilgal?",
    choices: ["Seven", "Ten", "Twelve", "Forty"],
    answer: 2,
    explanation: {
      textSays:
        "One man from each tribe took a stone “out of the place where the priests' feet stood firm” (Joshua 4:3–5), and “Joshua set up those twelve stones, which they took out of the Jordan, in Gilgal” (4:20). They were to answer a child's question: “What do these stones mean?” (4:21). Joshua 4:9 adds twelve more stones set up in the riverbed.",
      theirEyes:
        "Every family who passed the stone circle at Gilgal had a ready-made story for the children: this is where the river stopped for us.",
      tradition: {
        jewish:
          "Josephus, retelling the story, says Joshua built the stones into an altar as a memorial of the river's parting (Antiquities, book 5).",
      },
    },
    confidence: "settled",
    references: ["Joshua 4:1–9", "Joshua 4:19–24"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews, book 5, chapter 1, trans. Whiston" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-007",
    era: "judges",
    level: 2,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "After Israel's first Passover in Canaan, at Gilgal, what stopped the next day?",
    choices: ["The pillar of fire", "The manna", "The Sabbath rest", "The daily sacrifices"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 5:10–12: they kept Passover “on the fourteenth day of the month at evening in the plains of Jericho,” ate unleavened cakes and parched grain from the land, and “The manna ceased on the next day, after they had eaten of the produce of the land.” Exodus 16:35 had said they ate manna “until they came to the borders of the land of Canaan.”",
      theirEyes:
        "For the first time in forty years, breakfast was not gathered off the ground at dawn but roasted from the fields of Canaan.",
    },
    confidence: "settled",
    references: ["Joshua 5:10–12", "Exodus 16:35"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-008",
    era: "judges",
    level: 2,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Near Jericho, the “commander of Yahweh's army” told Joshua to do what?",
    choices: ["Take off his sandals", "Build an altar of twelve stones", "Count his fighting men", "Send spies to Ai"],
    answer: 0,
    explanation: {
      textSays:
        "Joshua asks the man with a drawn sword, “Are you for us, or for our enemies?” He replies, “No; but I have come now as commander of Yahweh's army,” and says: “Take off your sandals, for the place on which you stand is holy.” (Joshua 5:13–15).",
      world:
        "The scene closely echoes Moses at the burning bush, who was told, “Take off your sandals, for the place you are standing on is holy ground” (Exodus 3:5).",
      theirEyes: "Joshua went out expecting to size up an ally or an enemy, and instead ended up barefoot, face down in the dust.",
      tradition: {
        christian:
          "Justin Martyr (mid-2nd century) quoted this scene as evidence that God's Word, the Son, appeared before he became human (Dialogue with Trypho 62).",
      },
    },
    confidence: "settled",
    references: ["Joshua 5:13–15", "Exodus 3:5"],
    sources: [scripture, { kind: "primary", citation: "Justin Martyr, Dialogue with Trypho 62" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-009",
    era: "judges",
    level: 2,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "What did Achan secretly take from Jericho's plunder and bury in his tent?",
    choices: [
      "The king of Jericho's crown",
      "A golden statue of Baal",
      "A Babylonian robe, silver and a wedge of gold",
      "Jericho's bronze city gates",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Achan confesses: “When I saw among the plunder a beautiful Babylonian robe, two hundred shekels of silver, and a wedge of gold weighing fifty shekels, then I coveted them and took them” (Joshua 7:21). Jericho's metal was to go to “Yahweh's treasury” (6:19). After Israel's defeat at Ai, Achan was found by lot and put to death (7:16–26).",
      world:
        "The place was named the valley of Achor, “trouble,” a play on Joshua's words: “Why have you troubled us?” (7:25–26). 1 Chronicles 2:7 even spells his name Achar, “the troubler of Israel.” Hosea 2:15 later promises the valley of Achor as “a door of hope.”",
      theirEyes: "A fine foreign robe was a fortune — and hiding it under your tent floor meant every neighbour's luck now rode on your secret.",
    },
    confidence: "settled",
    references: ["Joshua 6:19", "Joshua 7:1–26", "1 Chronicles 2:7", "Hosea 2:15"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-010",
    era: "judges",
    level: 2,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "How did the people of Gibeon trick Joshua into making a peace treaty?",
    choices: [
      "They claimed descent from Abraham",
      "They pretended to come from a far country",
      "They offered him their king's daughter",
      "They sent him a chest of gold",
    ],
    answer: 1,
    explanation: {
      textSays:
        "They came with old sacks, torn wineskins, patched sandals and bread that was “dry and moldy,” saying, “We have come from a far country” (Joshua 9:4–6, 9:12). Israel's leaders “sampled their provisions, and didn't ask counsel from Yahweh's mouth” (9:14). Three days later the truth came out, but the oath stood, and the Gibeonites became “wood cutters and drawers of water” (9:16–21).",
      world:
        "The text calls them Hivites (9:7). Their four towns — Gibeon, Chephirah, Beeroth and Kiriath Jearim (9:17) — lay in the hills north and west of Jerusalem.",
      theirEyes: "Mouldy bread as a passport: the Gibeonites bet their lives that nobody would check how far away home really was.",
    },
    confidence: "settled",
    references: ["Joshua 9:3–27"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "jud-011",
    era: "judges",
    level: 3,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Joshua 10, over which place does Joshua command the sun to stand still?",
    choices: ["Jericho", "Hazor", "Gibeon", "Ai"],
    answer: 2,
    explanation: {
      textSays:
        "Joshua 10:12: “Sun, stand still on Gibeon! You, moon, stop in the valley of Aijalon!” It came during the battle to defend Gibeon against five kings (10:5–11).",
      theirEyes: "A soldier who had marched all night from Gilgal (10:9) remembered the day the light simply would not fade.",
      tradition: {
        jewish: "Sirach 46:4 asks, “Didn't the sun go back by his hand? Didn't one day become as two?”",
      },
      debate:
        "Readers take the verses as a miracle, as poetry quoted from an older song, or as a natural event. Humphreys and Waddington (2017) linked them to an eclipse in 1207 BCE; others are unconvinced.",
    },
    confidence: "settled",
    references: ["Joshua 10:5–14", "Sirach 46:4"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "C. J. Humphreys and W. G. Waddington, “Solar eclipse of 1207 BC helps to date pharaohs,” Astronomy & Geophysics 58:5 (2017), 5.39–5.42" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-012",
    era: "judges",
    level: 3,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Joshua 10, the king of which city gathered a coalition of five Amorite kings to attack Gibeon?",
    choices: ["Jerusalem", "Jericho", "Gaza", "Shechem"],
    answer: 0,
    explanation: {
      textSays:
        "Joshua 10:1–5: Adoni-Zedek king of Jerusalem, alarmed that Gibeon had made peace with Israel, called on the kings of Hebron, Jarmuth, Lachish and Eglon. The five kings later hid in a cave at Makkedah and were put to death (10:16–27). Joshua 10 never says Jerusalem itself was taken, and Joshua 15:63 says the Jebusites stayed there.",
      world:
        "Jerusalem was already a Canaanite city-state: in the 14th century BCE its ruler wrote letters to Pharaoh that were found at Amarna in Egypt.",
      theirEyes:
        "To the king in Jerusalem, Gibeon's treaty was a door left open a day's walk from his own walls.",
    },
    confidence: "settled",
    references: ["Joshua 10:1–27", "Joshua 15:63"],
    sources: [scripture, { kind: "primary", citation: "Amarna letters EA 285–290 (letters of Abdi-Heba of Jerusalem)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-013",
    era: "judges",
    level: 3,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Greek, Joshua's name is written exactly like which New Testament name?",
    choices: ["John", "James", "Judas", "Jesus"],
    answer: 3,
    explanation: {
      textSays:
        "Numbers 13:16: “Moses called Hoshea the son of Nun Joshua.” The Hebrew name, Yehoshua, means roughly “Yahweh saves.” In Hebrews 4:8 the Greek name Iēsous refers to Joshua, which is why the King James Version there reads “Jesus.”",
      theirEyes:
        "A Greek-speaking Jew reading his Bible in the 1st century would meet a hero called Iēsous leading Israel across the Jordan.",
      tradition: {
        jewish:
          "The Septuagint renders Yehoshua as Iēsous, and Ben Sira plays on the name's meaning: Joshua “was made great according to his name for the saving of God's elect” (Sirach 46:1).",
        christian:
          "Justin Martyr saw Joshua, whose name was changed to “Jesus” and who led the people into the land, as a figure of Christ (Dialogue with Trypho 113).",
      },
    },
    confidence: "settled",
    references: ["Numbers 13:16", "Hebrews 4:8", "Sirach 46:1"],
    sources: [scripture, { kind: "primary", citation: "Justin Martyr, Dialogue with Trypho 113" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-014",
    era: "judges",
    level: 3,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Joshua 11 says Israel burned every northern city that stood on its mound.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 11:13: “But as for the cities that stood on their mounds, Israel burned none of them, except Hazor only. Joshua burned that.” Hazor is singled out because it “used to be the head of all those kingdoms” (11:10). Earlier, at the waters of Merom, Joshua was told to hamstring the enemy's horses and burn their chariots (11:6–9).",
      world:
        "A “mound” (Hebrew tel) is a hill built up from layer upon layer of earlier towns — the kind of site archaeologists dig today.",
      theirEyes: "Israel's hill farmers had no chariots of their own; the coalition's horses and chariots were the frightening new weapon of the plains.",
    },
    confidence: "settled",
    references: ["Joshua 11:1–13"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-015",
    era: "judges",
    level: 3,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Joshua 5, why were Israelite men circumcised at Gilgal?",
    choices: [
      "To mark Joshua's appointment as leader",
      "As a punishment for Achan's sin",
      "Those born in the wilderness had not been circumcised",
      "To copy a custom of the Canaanites",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Joshua 5:5: “all the people who came out were circumcised; but all the people who were born in the wilderness along the way as they came out of Egypt had not been circumcised.” Joshua used flint knives (5:2–3). God said, “Today I have rolled away the reproach of Egypt from you,” so the place was called Gilgal (5:9) — a pun on the Hebrew galal, “to roll.” Passover followed (5:10), which the uncircumcised could not eat (Exodus 12:48).",
      theirEyes: "Before the first battle in Canaan, a whole army sat in camp waiting to heal (5:8) — a strange way to begin a war.",
      tradition: {
        jewish: "Josephus explains the name differently, saying that Gilgal means “liberty” (Antiquities, book 5).",
      },
    },
    confidence: "settled",
    references: ["Joshua 5:2–10", "Exodus 12:48"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews, book 5, chapter 1, trans. Whiston" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 4 ─────────────
  {
    id: "jud-016",
    era: "judges",
    level: 4,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What find helped identify the village of el-Jib, north of Jerusalem, as biblical Gibeon?",
    choices: [
      "A stone monument naming Joshua",
      "A hoard of Gibeonite royal coins",
      "Jar handles inscribed with the name Gibeon",
      "An Egyptian map painted on its gate",
    ],
    answer: 2,
    explanation: {
      textSays: "Joshua 10:2 calls Gibeon “a great city, as one of the royal cities,” greater than Ai.",
      world:
        "James Pritchard's University of Pennsylvania excavations, beginning in 1956, found dozens of wine-jar handles in the debris of a great rock-cut pool, many inscribed gb'n, “Gibeon,” usually followed by gdr (its meaning is debated) and a personal name. They date from the late Iron Age, centuries after the setting of Joshua, but they securely named the site.",
      theirEyes: "A winemaker labelling his jars “Gibeon” never imagined he was settling a scholars' argument some 2,500 years later.",
      debate:
        "The identification is secure. What it means for the Joshua story is debated: Pritchard found Late Bronze Age tombs but no clear Late Bronze town, and Israel Finkelstein and Neil Asher Silberman cite Gibeon among conquest-story sites that lack a settlement of that period.",
    },
    confidence: "settled",
    references: ["Joshua 9:3", "Joshua 10:2"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "James B. Pritchard, Hebrew Inscriptions and Stamps from Gibeon (University Museum, Philadelphia, 1959)" },
      { kind: "scholarship", citation: "James B. Pritchard, Gibeon, Where the Sun Stood Still (Princeton University Press, 1962)" },
      { kind: "scholarship", citation: "Israel Finkelstein and Neil Asher Silberman, The Bible Unearthed (Free Press, 2001), ch. 3" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-017",
    era: "judges",
    level: 4,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Excavators at et-Tell, the usual site of Ai, dated the destruction of its great walled city to about when?",
    choices: ["About 2400 BCE", "About 1200 BCE", "About 720 BCE", "About 586 BCE"],
    answer: 0,
    explanation: {
      textSays:
        "Joshua 8 describes an ambush that takes Ai, and says “Joshua burned Ai and made it a heap forever, even a desolation, to this day” (8:28).",
      world:
        "Judith Marquet-Krause (1933–35) and Joseph Callaway (1964–72) found a large walled Early Bronze Age city that Callaway dated to its destruction around 2400 BCE (some newer chronologies put it a little earlier). The hill then lay in ruins for over a thousand years, until a small unwalled village was built around 1200 BCE; it was abandoned in the 11th century BCE. Fittingly, Ai means “the ruin” and et-Tell “the ruin-heap.”",
      theirEyes: "To a 12th-century villager building among the old stones, the huge walls on the hill were already ancient ruins.",
      debate:
        "Many scholars read the story as explaining a famous ruin. Others place Ai elsewhere, such as Khirbet el-Maqatir (not widely accepted), or link the story to the later village.",
    },
    confidence: "mainstream",
    references: ["Joshua 7:2–5", "Joshua 8:1–28"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Joseph A. Callaway, “Ai,” in E. Stern (ed.), The New Encyclopedia of Archaeological Excavations in the Holy Land, vol. 1 (1993)" },
      { kind: "scholarship", citation: "Joseph A. Callaway, “Excavating Ai (et-Tell): 1964–1972,” Biblical Archaeologist 39:1 (1976)" },
      { kind: "scholarship", citation: "Ziony Zevit, “Archaeological and Literary Stratigraphy in Joshua 7–8,” BASOR 251 (1983)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-018",
    era: "judges",
    level: 4,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 1 Kings 16:34, who rebuilt Jericho and suffered the loss Joshua's curse had warned of?",
    choices: ["King Solomon", "Hiel the Bethelite", "Jeroboam", "Herod the Great"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 6:26: “Cursed is the man before Yahweh who rises up and builds this city Jericho. With the loss of his firstborn he will lay its foundation, and with the loss of his youngest son he will set up its gates.” 1 Kings 16:34: in Ahab's days “Hiel the Bethelite built Jericho,” losing his sons Abiram and Segub, “according to Yahweh's word, which he spoke by Joshua the son of Nun.”",
      theirEyes: "For generations Jericho's ruined mound sat beside a good spring, and people remembered why no one dared to rebuild its walls.",
      tradition: {
        jewish:
          "The Dead Sea Scroll 4QTestimonia (4Q175, early 1st century BCE) ends by quoting Joshua 6:26 and explaining it with lines from another Qumran work, the Psalms of Joshua (4Q379).",
      },
    },
    confidence: "settled",
    references: ["Joshua 6:26", "1 Kings 16:34"],
    sources: [
      scripture,
      { kind: "primary", citation: "4QTestimonia (4Q175), Qumran Cave 4" },
      { kind: "primary", citation: "4QApocryphon of Joshua / Psalms of Joshua (4Q379)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-019",
    era: "judges",
    level: 4,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Joshua 8, on which mountain does Joshua build an altar of uncut stones?",
    choices: ["Mount Sinai", "Mount Carmel", "Mount Zion", "Mount Ebal"],
    answer: 3,
    explanation: {
      textSays:
        "Joshua 8:30–31: “Joshua built an altar to Yahweh, the God of Israel, on Mount Ebal… an altar of uncut stones, on which no one had lifted up any iron,” as Deuteronomy 27:4–6 commanded. Half the people stood before Mount Gerizim and half before Ebal while he read “the blessing and the curse” (8:33–34).",
      theirEyes:
        "Between two mountains near Shechem, the whole people — “the women, the little ones, and the foreigners” (8:35) — heard the law read aloud.",
      tradition: {
        jewish:
          "Ancient copies place the scene differently: the Septuagint puts it after Joshua 9:2, and the Dead Sea Scroll 4QJosh(a), as Eugene Ulrich reconstructs it, puts the law-reading straight after the Jordan crossing, before the circumcision of Joshua 5.",
      },
      debate:
        "Scholars debate which order is original. The Samaritan Pentateuch also differs over the mountain named in Deuteronomy 27:4, reading Gerizim, the Samaritans' holy mountain.",
    },
    confidence: "settled",
    references: ["Joshua 8:30–35", "Deuteronomy 27:4–6"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Eugene Ulrich, “4QJoshuaa and Joshua's First Altar in the Promised Land,” in G. J. Brooke and F. García Martínez (eds.), New Qumran Texts and Studies (STDJ 15; Brill, 1994), 89–104" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-020",
    era: "judges",
    level: 4,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: a medieval Arab chronicler recorded the Jordan dammed by a collapsing bank near Damiya, often identified as biblical Adam.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Joshua 3:16: the waters “stood, and rose up in one heap a great way off, at Adam, the city that is beside Zarethan,” and the people crossed near Jericho. The text adds that the Jordan was in flood at harvest time (3:15).",
      world:
        "Adam is usually located at Tell ed-Damiyeh. The Arab historian al-Nuwayri (d. 1333) recorded that in 1267 CE a collapsed riverbank near Damiya blocked the Jordan for some hours and left the riverbed downstream dry. Landslides after the 1927 earthquake reportedly dammed the river near Damiya for about a day.",
      theirEyes: "Anyone who had seen the Jordan run brown and fast at harvest knew that crossing it on foot would be unthinkable.",
      debate:
        "Some see such events as the means behind the crossing, with the timing as the wonder; others read the account as a theological story echoing the Red Sea. The text itself presents it as Yahweh's act (4:23).",
    },
    confidence: "settled",
    references: ["Joshua 3:14–17", "Joshua 4:23"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "C. M. Watson, “The Stoppage of the River Jordan in A.D. 1267,” Palestine Exploration Fund Quarterly Statement (1895)" },
      { kind: "scholarship", citation: "John Garstang, The Foundations of Bible History: Joshua, Judges (London, 1931)" },
      { kind: "scholarship", citation: "Amos Nur, Apocalypse: Earthquakes, Archaeology, and the Wrath of God (Princeton University Press, 2008)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 5 ─────────────
  {
    id: "jud-021",
    era: "judges",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Archaeologist Adam Zertal interpreted the Iron Age stone structure he excavated on Mount Ebal as what?",
    choices: ["A royal tomb", "An altar, which he linked to Joshua's", "A Philistine temple", "A Byzantine monastery"],
    answer: 1,
    explanation: {
      textSays: "Joshua 8:30 says Joshua built an altar on Mount Ebal.",
      world:
        "Zertal found the site in 1980 during a survey and excavated it from 1982 to 1989. A stone structure about 9 by 7 metres, with a ramp, was filled with ash, stones and partly burnt animal bones, including young bulls, sheep, goats and fallow deer. Zertal dated its pottery to the late 13th and 12th centuries BCE (early Iron Age I).",
      theirEyes: "Smoke rising from a hilltop above the valley would have been visible to every shepherd for miles around.",
      debate:
        "Zertal's interpretation is disputed. Aharon Kempinski argued it was a watchtower or farmhouse; others accept a cult site but not a link to Joshua, since many scholars date the Joshua account much later. Ralph Hawkins defends an Israelite cultic reading.",
    },
    confidence: "settled",
    references: ["Joshua 8:30–31"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Adam Zertal, “Has Joshua's Altar Been Found on Mt. Ebal?” Biblical Archaeology Review 11:1 (January/February 1985)" },
      { kind: "scholarship", citation: "Aharon Kempinski, “Joshua's Altar — An Iron Age I Watchtower,” Biblical Archaeology Review 12:1 (January/February 1986)" },
      { kind: "scholarship", citation: "Ralph K. Hawkins, The Iron Age I Structure on Mt. Ebal: Excavation and Interpretation (Eisenbrauns, 2012)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-022",
    era: "judges",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to its excavators, how did Hazor's last great Canaanite city come to an end?",
    choices: ["It was swept away by a flood", "It was abandoned with no damage", "It was destroyed in a fierce fire", "It fell to an Assyrian siege"],
    answer: 2,
    explanation: {
      textSays: "Joshua 11:11: “He burned Hazor with fire.”",
      world:
        "Yigael Yadin (1955–58, 1968) and Amnon Ben-Tor (from 1990) found the Late Bronze city destroyed by fire in the 13th century BCE. Ash lay up to about a metre deep, the heat cracked basalt stones, and statues of gods and rulers had been deliberately mutilated — one seated figure was beheaded. Hazor's Assyrian conquest (2 Kings 15:29) came about five centuries later.",
      theirEyes: "Whoever broke into Hazor's palace did not just loot it — they smashed the faces of its gods.",
      debate:
        "Who set the fire, and exactly when, is debated. Ben-Tor argues the mutilated statues point away from Canaanites or Egyptians and toward early Israel; Sharon Zuckerman proposes an uprising within Hazor's own society after a long decline; others point to rival cities, the Sea Peoples or the wider Late Bronze collapse.",
    },
    confidence: "settled",
    references: ["Joshua 11:10–13", "2 Kings 15:29"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Amnon Ben-Tor, “Who Destroyed Canaanite Hazor?” Biblical Archaeology Review 39:4 (July/August 2013)" },
      { kind: "scholarship", citation: "Sharon Zuckerman, “Anatomy of a Destruction: Crisis Architecture, Termination Rituals and the Fall of Canaanite Hazor,” Journal of Mediterranean Archaeology 20:1 (2007)" },
      { kind: "scholarship", citation: "Amnon Ben-Tor, Hazor: Canaanite Metropolis, Israelite City (Israel Exploration Society, 2016)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-023",
    era: "judges",
    level: 5,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Hazor appears in 18th-century BCE letters from which royal archive on the Euphrates?",
    choices: ["The Lachish letters", "The Elephantine papyri", "The Nag Hammadi codices", "The Mari archives"],
    answer: 3,
    explanation: {
      textSays: "Joshua 11:10 says “Hazor used to be the head of all those kingdoms.”",
      world:
        "A number of documents from Mari, in today's Syria, mention Hazor, its king and its trade, in the time of Yasmah-Adad and Zimri-Lim. They show Hazor linked by trade to Mesopotamia. Covering about 80 hectares, Hazor was the largest city in Canaan for much of the 2nd millennium BCE. In the 14th-century Amarna letters its king, Abdi-Tirshi, writes to Pharaoh.",
      theirEyes: "Merchants on the road from the Euphrates knew Hazor by name, long before any Israelite tribe appears in history.",
    },
    confidence: "settled",
    references: ["Joshua 11:10"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Abraham Malamat, “Hazor ‘The Head of All Those Kingdoms’,” Journal of Biblical Literature 79:1 (1960)" },
      { kind: "scholarship", citation: "Amnon Ben-Tor, Hazor: Canaanite Metropolis, Israelite City (Israel Exploration Society, 2016)" },
      { kind: "primary", citation: "Amarna letters EA 227–228 (letters of the king of Hazor)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-024",
    era: "judges",
    level: 5,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which scholar argued in 1925 that Israel settled Canaan mainly by gradual, largely peaceful infiltration?",
    choices: ["William F. Albright", "Yigael Yadin", "Albrecht Alt", "Norman Gottwald"],
    answer: 2,
    explanation: {
      textSays:
        "Joshua 1–12 describes swift campaigns, ending: “So Joshua took the whole land” (11:23). Yet the same chapter says “Joshua made war a long time” (11:18).",
      world:
        "Albrecht Alt's 1925 essay pictured herding clans moving seasonally into the thinly settled hill country and gradually settling. W. F. Albright and Yigael Yadin defended a military conquest; George Mendenhall (1962) and Norman Gottwald (1979) proposed a revolt of Canaanite peasants.",
      theirEyes: "A shepherd family that pitched its tents in the same hill pasture every summer might, one year, simply stay and plant.",
      debate:
        "No single model has won out. Many archaeologists now favour versions of gradual settlement from within the land, while others still see some historical memory of conflict in Joshua.",
    },
    confidence: "settled",
    references: ["Joshua 11:18", "Joshua 11:23"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Albrecht Alt, “Die Landnahme der Israeliten in Palästina” (1925), in Kleine Schriften zur Geschichte des Volkes Israel I" },
      { kind: "scholarship", citation: "George E. Mendenhall, “The Hebrew Conquest of Palestine,” Biblical Archaeologist 25:3 (1962)" },
      { kind: "scholarship", citation: "Norman K. Gottwald, The Tribes of Yahweh (Orbis, 1979)" },
      { kind: "scholarship", citation: "Israel Finkelstein, The Archaeology of the Israelite Settlement (Israel Exploration Society, 1988)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "jud-025",
    era: "judges",
    level: 5,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: many archaeologists think most early Israelites emerged from people already living in or around Canaan.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Joshua 1–12 tells of Israel entering from across the Jordan and conquering the land.",
      world:
        "Surveys of the central hill country found a burst of small new villages in Iron Age I (c. 1200–1000 BCE), around 250 of them, where few settlements had stood in the Late Bronze Age. One widely held model reads this as people already in the region settling down: Israel Finkelstein traced the settlers mainly to local pastoral groups, while William Dever argued that most were Canaanite farmers moving out of the lowlands.",
      theirEyes: "New hilltop villages with terraces and cisterns sprang up where few people had lived before.",
      debate:
        "This is one leading model, not a consensus. Some scholars argue for a core group from Egypt or from east of the Jordan; some defend a larger historical conquest, often dated earlier. Many think the origins were mixed.",
    },
    confidence: "mainstream",
    references: ["Joshua 1:2", "Joshua 11:23"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Israel Finkelstein, The Archaeology of the Israelite Settlement (Israel Exploration Society, 1988)" },
      { kind: "scholarship", citation: "Israel Finkelstein and Neil Asher Silberman, The Bible Unearthed (Free Press, 2001), ch. 4" },
      { kind: "scholarship", citation: "William G. Dever, Who Were the Early Israelites and Where Did They Come From? (Eerdmans, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
