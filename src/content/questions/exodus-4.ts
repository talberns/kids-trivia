import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const exodus4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "exo-076",
    era: "exodus",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: in the census of Numbers 1, the Levites were counted along with the other tribes' fighting men.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Numbers 1:47: “But the Levites after the tribe of their fathers were not counted among them.” God tells Moses, “Only the tribe of Levi you shall not count” (1:49); instead they were to carry and guard the tabernacle and “encamp around it” (1:50). They are counted separately in Numbers 3.",
      world:
        "The census counted men “from twenty years old and upward, all who are able to go out to war” (1:3), so it was a muster roll for an army. The Levites served the sanctuary instead of the battle line.",
      theirEyes:
        "When the tribal leaders went tent to tent taking names for the army, the Levite families pitched next to the sanctuary were left off the list.",
    },
    confidence: "settled",
    references: ["Numbers 1:2–3", "Numbers 1:47–53", "Numbers 3:14–16"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-077",
    era: "exodus",
    level: 16,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the camp layout of Numbers 2, which tribe camped on the east side, toward the sunrise, and led the march?",
    choices: ["Reuben", "Dan", "Judah", "Ephraim"],
    answer: 2,
    explanation: {
      textSays:
        "Numbers 2:3: “Those who encamp on the east side toward the sunrise shall be of the standard of the camp of Judah,” under Nahshon son of Amminadab. When Israel set out, “First, the standard of the camp of the children of Judah went forward” (10:14). Reuben led the south side, Ephraim the west and Dan the north, with Dan's camp marching last (2:10, 2:18, 2:25; 10:25). The Levites camped around the tent itself (1:53).",
      world:
        "The tabernacle's entrance also faced east (Exodus 27:13–16), so Judah's camp stood before its door. Nahshon reappears in Ruth 4:20 as an ancestor of David.",
      theirEyes:
        "Every family knew its place in the great square of tents, each tribe under its own banner, with the sanctuary always in the middle.",
    },
    confidence: "settled",
    references: ["Numbers 1:53", "Numbers 2:1–34", "Numbers 10:14", "Numbers 10:25", "Ruth 4:20"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-078",
    era: "exodus",
    level: 16,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to Numbers 6:27, by speaking the priestly blessing, what would the priests “put” on the children of Israel?",
    choices: ["Oil", "God's name", "Their hands", "The blood of the offering"],
    answer: 1,
    explanation: {
      textSays:
        "After the threefold blessing (“Yahweh bless you, and keep you…”, Numbers 6:24–26), God says: “So they shall put my name on the children of Israel; and I will bless them” (6:27). The priests speak; God blesses.",
      world:
        "Each line of the Hebrew blessing is longer than the one before (3, 5 and 7 words), and each names Yahweh. Leviticus 9:22 shows Aaron lifting his hands toward the people to bless them.",
      theirEyes:
        "As the priest raised his hands over the crowd, the worshippers heard the holy name spoken over them three times.",
      tradition: {
        jewish:
          "Ben Sira shows the high priest Simon (c. 200 BCE) lifting “up his hands over the whole congregation of the children of Israel… to glory in his name” (Sirach 50:20). The Mishnah, a later record (c. 200 CE), says the name was spoken as written only in the Temple (Sotah 7:6).",
      },
    },
    confidence: "settled",
    references: ["Numbers 6:22–27", "Leviticus 9:22", "Sirach 50:20–21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Mishnah, Sotah 7:6" },
      { kind: "scholarship", citation: "Jacob Milgrom, Numbers (JPS Torah Commentary; Jewish Publication Society, 1990), on Numbers 6:22–27" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-079",
    era: "exodus",
    level: 16,
    category: "faith-practice",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: during his vow, a Nazirite was allowed to attend to the body of his own father or mother.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Numbers 6:6–7: “All the days that he separates himself to Yahweh he shall not go near a dead body. He shall not make himself unclean for his father, or for his mother, for his brother, or for his sister, when they die.” If someone died suddenly beside him, he shaved his head and began again (6:9–12).",
      world:
        "The same rule bound the high priest (Leviticus 21:11), so for a set time an ordinary man or woman (6:2) took on a holiness like his.",
      theirEyes: "A Nazirite whose father died could mourn him, but could not stand at the graveside or help to bury him.",
      tradition: {
        jewish:
          "Such vows were still made in Jesus' day: Acts 21:23–26 has Paul pay for four men completing a vow, and Josephus says Bernice was in Jerusalem fulfilling a vow that involved giving up wine and shaving her head (Jewish War 2.15.1).",
      },
    },
    confidence: "settled",
    references: ["Numbers 6:1–12", "Leviticus 21:10–11", "Acts 21:23–26"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 2.15.1 (2.313–314)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-080",
    era: "exodus",
    level: 16,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Besides the cloud lifting from the tabernacle, what did Numbers 10 tell Moses to make to signal the camps to move?",
    choices: ["A great bronze gong", "Two silver trumpets", "Seven rams' horns", "A signal fire on a pole"],
    answer: 1,
    explanation: {
      textSays:
        "Numbers 9:17: “Whenever the cloud was taken up from over the Tent, then after that the children of Israel traveled.” Then 10:2: “Make two trumpets of silver. You shall make them of beaten work. You shall use them for the calling of the congregation and for the journeying of the camps.” Only “the sons of Aaron, the priests” blew them (10:8).",
      world:
        "On the Arch of Titus in Rome (after 81 CE), the relief of Temple treasures carried in triumph shows long straight trumpets beside the menorah and the table. Josephus says Moses' silver trumpet was a little less than a cubit long (Antiquities 3.12.6).",
      theirEyes:
        "One blast and the leaders gathered; an alarm, and the eastern camps began pulling up tent pegs.",
      tradition: {
        jewish:
          "The War Scroll from Qumran imagines priests sounding trumpets in the final battle, each set inscribed with its own slogan, echoing Numbers 10:9.",
      },
    },
    confidence: "settled",
    references: ["Numbers 9:15–23", "Numbers 10:1–10"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 3.12.6 (3.291–294)" },
      { kind: "archaeology", citation: "Arch of Titus, Rome, spoils relief" },
      { kind: "primary", citation: "War Scroll (1QM), columns 2–3" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "exo-081",
    era: "exodus",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "When Eldad and Medad prophesied in the camp, Joshua said, “forbid them!” What did Moses answer?",
    choices: [
      "That they should be brought to the Tent at once",
      "That only the high priest could judge them",
      "That they must be put outside the camp seven days",
      "That he wished all Yahweh's people were prophets",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Numbers 11:25–29: the Spirit rested on the seventy elders at the Tent, but two men listed among them, Eldad and Medad, stayed in the camp and prophesied there. Moses replied, “Are you jealous for my sake? I wish that all Yahweh's people were prophets, that Yahweh would put his Spirit on them!”",
      world:
        "The seventy elders were appointed to share Moses' load after the people complained about the food (11:16–17).",
      theirEyes:
        "A young man ran breathless to Moses: two men who never went to the Tent were prophesying right among the tents.",
      tradition: {
        christian:
          "The early Christian Shepherd of Hermas (2nd century) quotes a now-lost book named after Eldad and Modat (Vision 2.3.4). Christians later linked Moses' wish with Joel 2:28 (3:1 in Hebrew) and the gift of the Spirit to all in Acts 2.",
      },
    },
    confidence: "settled",
    references: ["Numbers 11:16–17", "Numbers 11:24–29", "Joel 2:28", "Acts 2:16–18"],
    sources: [scripture, { kind: "primary", citation: "Shepherd of Hermas, Vision 2.3.4" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-082",
    era: "exodus",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to Numbers 12:1, what prompted Miriam and Aaron to speak against Moses?",
    choices: [
      "The Cushite woman he had married",
      "His choice of Joshua as successor",
      "The golden calf",
      "His refusal to let them enter the Tent",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Numbers 12:1–2: “Miriam and Aaron spoke against Moses because of the Cushite woman whom he had married.” They asked, “Has Yahweh indeed spoken only with Moses?” Miriam became “leprous, as white as snow” (12:10) and was “shut up outside of the camp seven days, and the people didn't travel until Miriam was brought in again” (12:15).",
      world:
        "Cush usually means the land south of Egypt (Nubia). Whether this wife is Zipporah, the Midianite, or a second wife is unclear.",
      theirEyes:
        "For a whole week the camp stayed put, waiting for Moses' sister to be allowed back among the tents.",
      tradition: {
        jewish:
          "Demetrius the Chronographer (late 3rd century BCE), quoted by Eusebius, took Zipporah to be the “Ethiopian” woman of Numbers 12. Josephus instead has Moses marry an Ethiopian princess, Tharbis, while leading an Egyptian army against Ethiopia (Antiquities 2.10.2).",
      },
    },
    confidence: "settled",
    references: ["Numbers 12:1–15"],
    sources: [
      scripture,
      { kind: "primary", citation: "Demetrius the Chronographer, fragment 3, in Eusebius, Preparation for the Gospel 9.29.1–3" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 2.10.2" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-083",
    era: "exodus",
    level: 17,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The spies named the valley of Eshcol after what they cut there. What does Eshcol mean?",
    choices: ["Giant", "Cluster", "Honey", "Spring"],
    answer: 1,
    explanation: {
      textSays:
        "Numbers 13:23–24: they “cut down from there a branch with one cluster of grapes, and they bore it on a staff between two… That place was called the valley of Eshcol, because of the cluster which the children of Israel cut down from there.” They also brought pomegranates and figs.",
      world:
        "Hebrew eshkol means a cluster of grapes. The valley is traditionally placed near Hebron, still a grape-growing area. Today the image of two spies carrying the giant cluster is the emblem of Israel's Ministry of Tourism.",
      theirEyes:
        "After weeks in the dry wilderness, the people saw two men walk into camp with a pole sagging under a single bunch of grapes.",
    },
    confidence: "settled",
    references: ["Numbers 13:22–24", "Numbers 32:9"],
    sources: [scripture, { kind: "reference", citation: "Brown–Driver–Briggs Hebrew and English Lexicon, s.v. אֶשְׁכּוֹל" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-084",
    era: "exodus",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Each tribe sent one spy into Canaan. Which tribe did Hoshea son of Nun, later called Joshua, represent?",
    choices: ["Judah", "Ephraim", "Benjamin", "Levi"],
    answer: 1,
    explanation: {
      textSays:
        "Numbers 13:8: “Of the tribe of Ephraim, Hoshea the son of Nun.” Judah sent Caleb son of Jephunneh (13:6) and Benjamin sent Palti son of Raphu (13:9); Levi, which had no land to inherit, sent no spy. Joshua and Caleb were the only spies who urged the people to go up (14:6–9).",
      world:
        "Joshua's Ephraimite roots run through the story: 1 Chronicles 7:20–27 traces his line from Ephraim, and he was buried “in Timnathserah, which is in the hill country of Ephraim” (Joshua 24:30).",
      theirEyes:
        "When the twelve set out, every tribe watched its own man go, and Ephraim's was Moses' young assistant, the son of Nun.",
      tradition: {
        jewish:
          "Ben Sira (c. 180 BCE) praises Joshua and Caleb because “they withstood the adversary, hindered the people from sin, and stilled their wicked complaining” (Sirach 46:7).",
      },
    },
    confidence: "settled",
    references: ["Numbers 13:4–16", "Numbers 14:6–9", "1 Chronicles 7:20–27", "Joshua 24:30", "Sirach 46:7"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "exo-085",
    era: "exodus",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: after Korah's rebellion, Numbers says the bronze censers of the 250 men were thrown away as unclean.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Fire “devoured the two hundred fifty men who offered the incense” (Numbers 16:35). But their censers were declared holy, “for they offered them before Yahweh,” and when Eleazar the priest collected them, “they beat them out for a covering of the altar” (16:38–39; 17:3–4 in Hebrew).",
      world:
        "The bronze plating was meant as a lasting warning: “a memorial to the children of Israel,” so that no one outside “the offspring of Aaron” would come near to burn incense, “that he not be as Korah and as his company” (16:40).",
      theirEyes:
        "Every time a worshipper looked at the altar, its dull bronze sheathing reminded him of the day the rebels' incense pans were pulled from the ashes.",
      tradition: {
        christian: "Jude 11 names Korah, with Cain and Balaam, as a warning: they “perished in Korah's rebellion.”",
      },
    },
    confidence: "settled",
    references: ["Numbers 16:35–40", "Jude 11"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "exo-086",
    era: "exodus",
    level: 18,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Aaron's staff was left overnight in the Tent with the staffs of the tribal leaders. What had it produced by morning?",
    choices: ["Figs", "Pomegranates", "Olives", "Almonds"],
    answer: 3,
    explanation: {
      textSays:
        "Numbers 17:8 (17:23 in Hebrew): “Aaron's rod for the house of Levi had sprouted, budded, produced blossoms, and bore ripe almonds.” It was kept “before the covenant… for a token against the children of rebellion” (17:10; 17:25 in Hebrew). Hebrews 9:4 places it inside the ark.",
      world:
        "The almond is the first tree to blossom in the land, in late winter. The cups of the tabernacle menorah were shaped like almond blossoms (Exodus 25:33), and Jeremiah puns on shaqed, “almond,” and shoqed, “watching” (Jeremiah 1:11–12).",
      theirEyes:
        "The leaders filed in to collect their dry sticks, and one of them was covered in flowers and fruit at once.",
    },
    confidence: "settled",
    references: ["Numbers 17:1–10", "Exodus 25:33", "Jeremiah 1:11–12", "Hebrews 9:4"],
    sources: [scripture, { kind: "reference", citation: "Brown–Driver–Briggs Hebrew and English Lexicon, s.v. שָׁקֵד" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-087",
    era: "exodus",
    level: 18,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "At Meribah in Numbers 20, God told Moses to take the rod. What was he told to do to the rock?",
    choices: ["Strike it once", "Speak to it", "Pour oil on it", "Dig at its foot"],
    answer: 1,
    explanation: {
      textSays:
        "Numbers 20:8: “speak to the rock before their eyes, that it pour out its water.” Instead Moses “struck the rock with his rod twice” (20:11), and Yahweh barred him and Aaron from bringing the people into the land (20:12).",
      world:
        "This is a second Meribah story, at Kadesh (20:1); in Exodus 17 Moses was told to strike the rock.",
      theirEyes: "The water gushed out for the thirsty crowd, but Moses and Aaron walked away knowing they would never cross the Jordan.",
      tradition: {
        jewish:
          "Pseudo-Philo's Biblical Antiquities (1st century CE) says God gave Israel a well of water that followed them (10:7).",
        christian: "Paul echoes the idea: “the rock was Christ” (1 Corinthians 10:4).",
      },
      debate:
        "Readers disagree about Moses' exact fault: striking instead of speaking, his angry “Hear now, you rebels!”, or asking “Shall we bring water out of this rock for you?” as if the miracle were his (20:10).",
    },
    confidence: "settled",
    references: ["Numbers 20:1–13", "Exodus 17:1–7", "1 Corinthians 10:4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Pseudo-Philo, Liber Antiquitatum Biblicarum 10:7" },
      { kind: "scholarship", citation: "Jacob Milgrom, Numbers (JPS Torah Commentary; Jewish Publication Society, 1990), excursus on Numbers 20" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-088",
    era: "exodus",
    level: 18,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "King Balak of Moab sent messengers to fetch Balaam from Pethor. Where does the Bible place Pethor?",
    choices: ["By the River, in Mesopotamia", "In the Nile delta", "On the coast of Philistia", "In the hills of Edom"],
    answer: 0,
    explanation: {
      textSays:
        "Numbers 22:5: Balak “sent messengers to Balaam the son of Beor, to Pethor, which is by the River.” Deuteronomy 23:4 (23:5 in Hebrew) calls it “Pethor of Mesopotamia.” In the Bible “the River” usually means the Euphrates.",
      world:
        "Many scholars identify Pethor with Pitru, a town near where the Sajur river meets the Euphrates, named in the records of the Assyrian king Shalmaneser III. If so, Balak's messengers travelled hundreds of kilometres to hire a famous foreign seer.",
      theirEyes:
        "The elders of Moab and Midian made the long journey with “the rewards of divination in their hand” (22:7) to hire a seer whose curses were said to work.",
    },
    confidence: "settled",
    references: ["Numbers 22:4–7", "Deuteronomy 23:4"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Baruch A. Levine, Numbers 21–36 (Anchor Bible 4A; Doubleday, 2000), on Numbers 22:5" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-089",
    era: "exodus",
    level: 18,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When Balaam's donkey spoke to him, how many times had he struck her?",
    choices: ["Once", "Twice", "Three times", "Seven times"],
    answer: 2,
    explanation: {
      textSays:
        "The donkey saw Yahweh's angel with a drawn sword and turned aside three times; each time Balaam struck her (Numbers 22:23–27). Then “Yahweh opened the mouth of the donkey, and she said to Balaam, ‘What have I done to you, that you have struck me these three times?’” (22:28). Only afterwards did Yahweh open Balaam's eyes (22:31).",
      world:
        "The story mocks a professional seer: his animal sees what he cannot. Three is also the pattern of what follows, as Balaam blesses Israel three times instead of cursing it (24:10).",
      theirEyes: "A famous seer, paid to see the gods' plans, could not see an angel standing in the road in front of him.",
      tradition: {
        christian: "2 Peter 2:16 recalls it: “A speechless donkey spoke with a man's voice and stopped the madness of the prophet.”",
      },
    },
    confidence: "settled",
    references: ["Numbers 22:21–35", "Numbers 24:10", "2 Peter 2:15–16"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-090",
    era: "exodus",
    level: 18,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "An ink-on-plaster text found at Deir Alla, Jordan, in 1967 names Balaam son of Beor. What does it call him?",
    choices: ["King of Moab", "A priest of Baal Peor", "A seer of the gods", "The prophet of Israel"],
    answer: 2,
    explanation: {
      textSays: "Numbers 22:5 calls him “Balaam the son of Beor,” a foreign seer hired to curse Israel.",
      world:
        "Found by a Dutch expedition led by H. J. Franken, the text was painted in black and red ink on a plastered wall and is usually dated to about 800 BCE. Its opening line, partly restored, calls it the book of Balaam son of Beor, “a seer of the gods,” and it tells of gods coming to him at night with news of disaster. Few ancient inscriptions outside the Bible name a figure known from the Torah.",
      theirEyes:
        "In a building east of the Jordan, people read on the wall how the famous seer Balaam wept at what the gods had shown him.",
      debate:
        "Its language is debated: some call it Aramaic, others a local Canaanite dialect of Gilead. Scholars agree it shows Balaam was a well-known figure beyond Israel.",
    },
    confidence: "settled",
    references: ["Numbers 22:5"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Deir Alla plaster inscription, Combination I" },
      { kind: "scholarship", citation: "J. Hoftijzer and G. van der Kooij, Aramaic Texts from Deir ʿAlla (Brill, 1976)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "exo-091",
    era: "exodus",
    level: 19,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Deuteronomy 6:9 says to write God's words on the mezuzot of your house. What does mezuzah literally mean?",
    choices: ["Doorpost", "Small scroll", "Blessing", "Reminder"],
    answer: 0,
    explanation: {
      textSays:
        "Deuteronomy 6:9: “You shall write them on the door posts of your house and on your gates”; again at 11:20. The Hebrew word for “door posts” is mezuzot.",
      world:
        "The word for the frame of the door came to mean the small parchment fixed to it. Mezuzah parchments have been found at Qumran; J. T. Milik published the Cave 4 examples in 1977. Besides passages from Deuteronomy 6 and 11, at least one also contains part of the Ten Commandments.",
      theirEyes:
        "Passing through his doorway, a Jew could see the place where God's words were written, the same place where Israel had once marked the Passover blood.",
      tradition: {
        jewish: "Josephus says Jews were “to inscribe the principal blessings they have received from God upon their doors” (Antiquities 4.8.13).",
      },
    },
    confidence: "settled",
    references: ["Deuteronomy 6:4–9", "Deuteronomy 11:20", "Exodus 12:7"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "J. T. Milik, Qumrân Grotte 4.II: Tefillin, Mezuzot et Targums (DJD VI; Clarendon Press, 1977)" },
      { kind: "scholarship", citation: "Lawrence H. Schiffman, Reclaiming the Dead Sea Scrolls (Jewish Publication Society, 1994)" },
      { kind: "reference", citation: "Brown–Driver–Briggs Hebrew and English Lexicon, s.v. מְזוּזָה" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 4.8.13 (4.213)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-092",
    era: "exodus",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Some tefillin found in the Qumran caves include a passage that later Jewish tefillin leave out. Which?",
    choices: ["The Song of the Sea", "The priestly blessing", "The law of the king", "The Ten Commandments"],
    answer: 3,
    explanation: {
      textSays:
        "Deuteronomy 6:8 commands, “You shall bind them for a sign on your hand,” right after the Ten Commandments of Deuteronomy 5.",
      world:
        "More than twenty tefillin have been found near the Dead Sea. Most contain the passages still used later (Exodus 13:1–16; Deuteronomy 6:4–9; 11:13–21), but several also include the Ten Commandments. The Nash Papyrus (Cambridge University Library), from about the 2nd–1st century BCE, likewise puts the Ten Commandments next to the Shema.",
      theirEyes:
        "A worshipper at Qumran bound to his arm a tiny case holding the Ten Commandments as well as the Shema, written in letters barely a millimetre high.",
      tradition: {
        jewish:
          "The Mishnah, a later record (c. 200 CE), says the Temple priests recited the Ten Commandments together with the Shema every morning (Tamid 5:1).",
      },
    },
    confidence: "settled",
    references: ["Deuteronomy 5:6–21", "Deuteronomy 6:4–9", "Exodus 13:1–16"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "J. T. Milik, Qumrân Grotte 4.II: Tefillin, Mezuzot et Targums (DJD VI; Clarendon Press, 1977)" },
      { kind: "archaeology", citation: "Nash Papyrus, Cambridge University Library, MS Or. 233" },
      { kind: "primary", citation: "Mishnah, Tamid 5:1" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-093",
    era: "exodus",
    level: 19,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The WEB renders Deuteronomy 6:4, “Yahweh is our God. Yahweh is one.” What other rendering do some modern translations give?",
    choices: [
      "“Yahweh is our God, Yahweh alone”",
      "“Yahweh is the greatest of the gods”",
      "“Yahweh is God of the whole earth”",
      "“Yahweh our God is a jealous God”",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Deuteronomy 6:4: “Hear, Israel: Yahweh is our God. Yahweh is one.” In Mark 12:29 Jesus quotes it as the beginning of the greatest commandment.",
      world:
        "The Hebrew has just four words after “Hear, Israel”: YHWH, our God, YHWH, one. With no verb, it can mean that Yahweh is one, or that Yahweh alone is Israel's God. The NRSV (1989) and the Jewish Publication Society's NJPS Tanakh (1985) both print “The LORD is our God, the LORD alone.”",
      theirEyes:
        "Whichever way a listener understood them, the same few words were spoken morning and evening.",
      tradition: {
        jewish:
          "Josephus, retelling the laws of Deuteronomy, says, “Let every one commemorate before God the benefits which he bestowed upon them” at the Exodus “twice every day,” when the day begins and at bedtime, echoing “when you lie down, and when you rise up” (Deuteronomy 6:7; Antiquities 4.8.13).",
      },
    },
    confidence: "settled",
    references: ["Deuteronomy 6:4–7", "Mark 12:29"],
    sources: [
      scripture,
      { kind: "reference", citation: "New Revised Standard Version (1989) and NJPS Tanakh (1985), Deuteronomy 6:4" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 4.8.13 (4.212)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-094",
    era: "exodus",
    level: 19,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Deuteronomy 30:19, before saying “choose life,” whom does Moses call as witnesses?",
    choices: ["Heaven and earth", "The twelve tribal princes", "Aaron and Joshua", "The angels of God"],
    answer: 0,
    explanation: {
      textSays:
        "Deuteronomy 30:19: “I call heaven and earth to witness against you today that I have set before you life and death, the blessing and the curse. Therefore choose life, that you may live, you and your descendants.” Moses calls them again in 31:28 and at the start of his song (32:1).",
      world:
        "Ancient Near Eastern treaties ended with lists of witnesses, often gods together with heaven and earth, mountains and rivers. Deuteronomy borrows the treaty form, but in place of gods it calls on heaven and earth.",
      theirEyes:
        "Standing on the plains of Moab, the people heard Moses call on the sky above and the ground beneath them as witnesses.",
    },
    confidence: "settled",
    references: ["Deuteronomy 30:15–20", "Deuteronomy 31:28", "Deuteronomy 32:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Moshe Weinfeld, Deuteronomy and the Deuteronomic School (Clarendon Press, 1972)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-095",
    era: "exodus",
    level: 19,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Deuteronomy 17's “law of the king” warns a future king not to multiply which of these?",
    choices: ["Priests", "Fortified cities", "Horses", "Sons"],
    answer: 2,
    explanation: {
      textSays:
        "Deuteronomy 17:16–17: “he shall not multiply horses to himself, nor cause the people to return to Egypt… He shall not multiply wives to himself… He shall not greatly multiply to himself silver and gold.”",
      world:
        "1 Kings 10–11 reports that Solomon did all three: he amassed gold and silver, imported horses from Egypt and married many wives. Many scholars think the law was written with him in view.",
      theirEyes:
        "Horses and chariots were the costliest weapons of the age, a sign that a king trusted his army more than his God.",
      tradition: {
        jewish:
          "The Temple Scroll from Qumran (11Q19, columns 56–59) expands this law, giving the king a guard of 12,000 men, a thousand from each tribe, and forbidding another wife while his queen lives: “only she will be with him all the days of her life” (column 57, trans. García Martínez).",
      },
    },
    confidence: "settled",
    references: ["Deuteronomy 17:14–20", "1 Kings 10:26–29", "1 Kings 11:1–3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Temple Scroll (11Q19), columns 56–59; trans. F. García Martínez, The Dead Sea Scrolls Translated (Brill, 1994)" },
      { kind: "scholarship", citation: "Yigael Yadin, The Temple Scroll (Israel Exploration Society, 1983)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "exo-096",
    era: "exodus",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The name “Deuteronomy” (“second law”) comes from the Greek of Deuteronomy 17:18. What does the Hebrew there say?",
    choices: ["“The law of the Levites”", "“The words of Moses”", "“The book of the covenant”", "“A copy of this law”"],
    answer: 3,
    explanation: {
      textSays:
        "Deuteronomy 17:18: the king “shall write himself a copy of this law in a book, out of that which is before the Levitical priests.”",
      world:
        "The Hebrew mishneh ha-torah ha-zot means a “copy” or “repetition” of this law. The Septuagint translators rendered it to deuteronomion touto, “this second law,” and the Greek word became the book's name, through Latin Deuteronomium. Its Hebrew name is Devarim, “words,” from its opening: “These are the words which Moses spoke” (1:1).",
      theirEyes:
        "To Greek-speaking Jews in Alexandria, the scroll was the “second law,” the law repeated by Moses on the edge of the promised land.",
      tradition: {
        shared:
          "The Greek name happens to fit the book well, since Deuteronomy retells many laws from Exodus, including the Ten Commandments (Deuteronomy 5).",
      },
    },
    confidence: "settled",
    references: ["Deuteronomy 17:18", "Deuteronomy 1:1", "Deuteronomy 5:6–21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Deuteronomy 17:18" },
      { kind: "reference", citation: "“Deuteronomy,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-097",
    era: "exodus",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Among the biblical scrolls from the Dead Sea caves, which book of the Torah survives in the most copies, second only to Psalms?",
    choices: ["Genesis", "Exodus", "Leviticus", "Deuteronomy"],
    answer: 3,
    explanation: {
      textSays:
        "Deuteronomy tells Israel to keep its words close: “you shall teach them diligently to your children” (6:7), and the king must “write himself a copy of this law in a book” (17:18).",
      world:
        "Counts of the Qumran and other Judean Desert fragments give Psalms about 36–39 manuscripts and Deuteronomy about 30–33, ahead of Genesis (about 20–24), Isaiah (about 21–22) and Exodus (about 17–18). Deuteronomy passages also fill the tefillin and mezuzot found in the caves.",
      theirEyes:
        "In the Judean desert, a scribe copied Moses' last speeches yet again, one of the most-read scrolls of his day.",
      tradition: {
        christian:
          "In the temptation story Jesus answers each test with a line from Deuteronomy (Matthew 4:4, 7, 10, quoting Deuteronomy 8:3, 6:16 and 6:13).",
      },
      debate:
        "Exact totals differ between scholars, because small fragments can be assigned to different manuscripts, but the standard counts all put Deuteronomy second only to Psalms.",
    },
    confidence: "mainstream",
    references: ["Deuteronomy 6:7", "Deuteronomy 17:18", "Matthew 4:1–11"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Martin Abegg Jr., Peter Flint and Eugene Ulrich, The Dead Sea Scrolls Bible (HarperSanFrancisco, 1999)" },
      { kind: "scholarship", citation: "James C. VanderKam and Peter Flint, The Meaning of the Dead Sea Scrolls (HarperSanFrancisco, 2002)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "exo-098",
    era: "exodus",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: in Deuteronomy 1:37, Moses says Yahweh was angry with him because of the people.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Deuteronomy 1:37: “Also Yahweh was angry with me for your sakes, saying, ‘You also shall not go in there.’” Again in 3:26: “Yahweh was angry with me because of you.” But Deuteronomy 32:51 gives the reason found in Numbers 20: “because you trespassed against me… at the waters of Meribah of Kadesh.”",
      world:
        "In Moses' speeches the barring comes right after the spies story, as if Moses shares the fate of the generation that refused to enter.",
      theirEyes: "The old leader reminded the people that he too was paying for the day their parents refused to go up.",
      debate:
        "Many scholars see two traditions: Deuteronomy's speeches tie Moses' fate to the people, while 32:51 echoes Numbers 20. Others read them together: the people's quarrelling provoked his failure at Meribah.",
    },
    confidence: "settled",
    references: ["Deuteronomy 1:34–37", "Deuteronomy 3:23–27", "Deuteronomy 32:48–52", "Numbers 20:12"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Jeffrey H. Tigay, Deuteronomy (JPS Torah Commentary; Jewish Publication Society, 1996), on Deuteronomy 1:37" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-099",
    era: "exodus",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which of Balaam's oracles did the Damascus Document from Qumran read as a prophecy of future leaders?",
    choices: [
      "“A star will come out of Jacob”",
      "“How goodly are your tents, Jacob”",
      "“Let me die the death of the righteous”",
      "“God is not a man, that he should lie”",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Numbers 24:17: “I see him, but not now. I see him, but not near. A star will come out of Jacob. A scepter will rise out of Israel, and shall strike through the corners of Moab.” The other three lines are also Balaam's (23:10, 23:19, 24:5).",
      world:
        "The Damascus Document reads the star as “the Interpreter of the Law” and the scepter as “the prince of the whole congregation” (CD 7:18–21). The War Scroll (1QM 11:6–7) and the Testimonia (4Q175) also quote it. Simon bar Kosiba, leader of the revolt of 132–135 CE, became known as Bar Kokhba, “son of the star,” a name later sources link with this verse.",
      theirEyes: "For the men of Qumran, a pagan seer's vision was a promise about leaders still to come in their own day.",
      tradition: {
        christian: "Many Christian interpreters have linked the oracle with the star of Matthew 2:2.",
      },
    },
    confidence: "settled",
    references: ["Numbers 24:17", "Numbers 23:10", "Numbers 23:19", "Numbers 24:5", "Matthew 2:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Damascus Document (CD) 7:18–21" },
      { kind: "primary", citation: "War Scroll (1QM) 11:6–7; Testimonia (4Q175)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-100",
    era: "exodus",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Deuteronomy 30:12 says the commandment “is not in heaven.” In Romans 10, what does Paul apply the passage to?",
    choices: ["The Temple in Jerusalem", "The law of circumcision", "The fall of Jerusalem", "The word of faith about Christ"],
    answer: 3,
    explanation: {
      textSays:
        "Deuteronomy 30:12–14: “It is not in heaven, that you should say, ‘Who will go up for us to heaven, bring it to us…?’… But the word is very near to you, in your mouth and in your heart.” Romans 10:6–8 quotes it and adds, “that is, the word of faith which we preach.”",
      world:
        "Paul's comments, “(that is, to bring Christ down)” and “(that is, to bring Christ up from the dead.)” rework Moses' heaven-and-sea images; for “beyond the sea” he has “into the abyss.”",
      theirEyes:
        "Moses told the people they needed no hero to fetch God's will from the sky; it was already on their lips.",
      tradition: {
        jewish:
          "Baruch reuses the same images for Wisdom: “Who has gone up into heaven, taken her, and brought her down from the clouds? Who has gone over the sea, found her…?” (Baruch 3:29–30).",
      },
    },
    confidence: "settled",
    references: ["Deuteronomy 30:11–14", "Romans 10:6–9", "Baruch 3:29–30"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
