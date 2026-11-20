import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Hebrew Bible / Old Testament — quotations from the World English Bible (public domain)" } as const;

export const exodus2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "exo-026",
    era: "exodus",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Exodus 1:8 says a new king arose over Egypt. Whom did he not know?",
    choices: ["Moses", "Joseph", "Aaron", "Jethro"],
    answer: 1,
    explanation: {
      textSays:
        "Exodus 1:8: “Now there arose a new king over Egypt, who didn’t know Joseph.” Fearing the Israelites' numbers, he sets taskmasters over them (1:9–11). Exodus never gives his name.",
      world:
        "Josephus says the kingship had passed to another family (Antiquities 2.9.1). Some readers link this to the Eighteenth Dynasty, which drove the Hyksos — rulers of West Semitic origin based at Avaris in the Delta — out of Egypt around 1550 BCE; others think of the age of Ramesses II.",
      theirEyes:
        "For a Hebrew family in the Delta, the favour of Joseph's day had become a forgotten story — and a forgotten debt.",
      tradition: {
        christian: "Stephen repeats this line in his speech in Acts 7:18.",
      },
      debate:
        "Which pharaoh is meant, and whether the story can be dated at all, is debated; the text itself does not say.",
    },
    confidence: "settled",
    references: ["Exodus 1:8–11", "Acts 7:18"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 2.9.1 (2.202)" },
      { kind: "archaeology", citation: "M. Bietak, Avaris: The Capital of the Hyksos (British Museum Press, 1996)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-027",
    era: "exodus",
    level: 6,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The title “Pharaoh” comes from an Egyptian phrase. What did it originally mean?",
    choices: ["Son of the sun", "Lord of the Nile", "Great house", "Living god"],
    answer: 2,
    explanation: {
      textSays:
        "Exodus calls the king simply “Pharaoh,” never giving a personal name. Later books do pair the title with a name, such as Pharaoh Necoh (2 Kings 23:29).",
      world:
        "Egyptian per-aa meant “great house,” the royal palace. During the New Kingdom (the 18th Dynasty, 15th–14th centuries BCE) it came to be used for the king himself — much as “the White House” can stand for a president. Pairing it with the king's own name became usual only centuries later, in the early 1st millennium BCE.",
      theirEyes:
        "An Egyptian worker rarely spoke the king's name casually; “the great house” had decided, and that was enough.",
    },
    confidence: "settled",
    references: ["Exodus 1:11", "2 Kings 23:29"],
    sources: [scripture, { kind: "reference", citation: "“Pharaoh,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-028",
    era: "exodus",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Moses feared no one would believe him. In the second sign God gave him, what happened when he put his hand inside his cloak?",
    choices: ["It withered and dried up", "It turned as black as soot", "It became leprous, as white as snow", "It turned to stone"],
    answer: 2,
    explanation: {
      textSays:
        "Moses objects, “they will not believe me” (Exodus 4:1). First his rod becomes a snake and then a rod again (4:2–4). Then: “He put his hand inside his cloak, and when he took it out, behold, his hand was leprous, as white as snow” (4:6). When he does it again, “it had turned again as his other flesh” (4:7). A third sign, water from the river turning to blood, is held in reserve (4:9).",
      world:
        "The Hebrew word translated “leprous” (tsara'at) covers a range of skin conditions described in Leviticus 13–14; most scholars think it is not the same as modern leprosy (Hansen's disease).",
      theirEyes:
        "A hand that turned deathly white and then healthy again in a moment was a sign anyone in a crowd of elders could see for themselves.",
      tradition: {
        shared:
          "The same phrase, “leprous, as white as snow,” is used of Miriam when she speaks against Moses (Numbers 12:10) and of Elisha's servant Gehazi (2 Kings 5:27).",
      },
    },
    confidence: "settled",
    references: ["Exodus 4:1–9", "Leviticus 13–14", "Numbers 12:10", "2 Kings 5:27"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "J. Milgrom, Leviticus 1–16 (Anchor Bible 3, Doubleday, 1991), on Leviticus 13" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "exo-029",
    era: "exodus",
    level: 6,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Exodus 6:20, who were the parents of Aaron and Moses?",
    choices: ["Jethro and Zipporah", "Kohath and Miriam", "Levi and Bilhah", "Amram and Jochebed"],
    answer: 3,
    explanation: {
      textSays:
        "Exodus 2:1 calls them only “a man of the house of Levi” and a Levite woman. The names come later: “Amram took Jochebed his father’s sister to himself as wife; and she bore him Aaron and Moses” (6:20). Numbers 26:59 adds their daughter Miriam.",
      world:
        "Leviticus 18:12 later forbids marrying a father's sister. The Greek Septuagint makes Jochebed “the daughter of his father's brother” — a cousin — instead.",
      theirEyes:
        "Parents hiding a newborn son from a royal death order (Exodus 2:2) had no idea their children would become a lawgiver, a priest and a prophetess.",
      tradition: {
        jewish:
          "Amram mattered to Jews of this period: the Dead Sea Scrolls include an Aramaic work called the Visions of Amram, and Josephus says God told Amram in a dream that his son would deliver the Hebrews (Antiquities 2.9.3).",
      },
    },
    confidence: "settled",
    references: ["Exodus 2:1–2", "Exodus 6:20", "Numbers 26:59", "Leviticus 18:12"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Exodus 6:20 (Brenton translation)" },
      { kind: "primary", citation: "Dead Sea Scrolls, Visions of Amram (4Q543–547 and related fragments)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 2.9.3" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-030",
    era: "exodus",
    level: 6,
    category: "archaeology",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the famous Beni Hasan tomb painting shows Hebrew slaves making bricks for Pharaoh.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "The painting, in the tomb of the official Khnumhotep II at Beni Hasan (tomb BH 3), is dated to year 6 of Senusret II, about 1890 BCE — centuries before any proposed date for the Exodus. It shows a group of 'Aamu (“Asiatics,” West Semitic people) led by a chief named Abisha arriving with donkeys and bringing eye paint; the caption counts 37 people. They are visitors or traders, not slaves. (A brick-making scene with foreign workers comes from a different tomb, that of Rekhmire at Thebes.)",
      theirEyes:
        "To an Egyptian scribe, these bearded travellers in bright patterned wool were exotic guests worth recording on a governor's tomb wall.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Wall painting of the 'Aamu, tomb of Khnumhotep II, Beni Hasan (tomb BH 3), year 6 of Senusret II" },
      { kind: "scholarship", citation: "J. Kamrin, “The Aamu of Shu in the Tomb of Khnumhotep II at Beni Hassan,” Journal of Ancient Egyptian Interconnections 1.3 (2009)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "exo-031",
    era: "exodus",
    level: 7,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The store city Pithom probably takes its name from Egyptian “Per-Atum.” What does that mean?",
    choices: ["City of bricks", "Gate of the east", "Granary of Pharaoh", "House of Atum"],
    answer: 3,
    explanation: {
      textSays: "Exodus 1:11: “They built storage cities for Pharaoh: Pithom and Raamses.”",
      world:
        "Atum was a creator and sun god whose great cult centre was Heliopolis. Pr-itm means “house” (that is, temple or estate) “of Atum.” Inscriptions naming Per-Atum were found by Édouard Naville at Tell el-Maskhuta in the Wadi Tumilat, a valley linking the eastern Delta to the Sinai frontier; nearby Tell er-Retaba is the other main candidate for Pithom.",
      theirEyes:
        "Grain stacked in frontier storehouses fed soldiers and officials — and every storehouse wall needed thousands of bricks.",
      debate:
        "Which site was biblical Pithom is debated. Kenneth Kitchen and Manfred Bietak favour Tell er-Retaba, which has New Kingdom (Ramesside) remains. Tell el-Maskhuta was founded only around 600 BCE, so Donald Redford and John Van Seters argue that the biblical name reflects that later period.",
    },
    confidence: "mainstream",
    references: ["Exodus 1:11"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "J. K. Hoffmeier, Israel in Egypt (Oxford University Press, 1997)" },
      { kind: "scholarship", citation: "K. A. Kitchen, On the Reliability of the Old Testament (Eerdmans, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-032",
    era: "exodus",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Midian, why did Moses name his first son Gershom?",
    choices: [
      "He had been drawn out of the water",
      "God had heard his cry",
      "He had lived as a foreigner in a foreign land",
      "He had seen God face to face",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Moses marries Zipporah, daughter of Reuel (Exodus 2:18–21). “She bore a son, and he named him Gershom, for he said, ‘I have lived as a foreigner in a foreign land’” (2:22). The name sounds like Hebrew ger, “sojourner, resident foreigner,” and sham, “there.” (Being drawn out of the water explains Moses' own name: “Because I drew him out of the water,” 2:10.)",
      world:
        "The ger — a foreigner living among another people without full rights — later receives special protection in Israel's laws, which remind Israel that it too had been foreign in Egypt (Exodus 22:21; 22:20 in Hebrew Bibles).",
      theirEyes:
        "Raised in an Egyptian palace, wanted for murder, now herding a Midianite's sheep — Moses belonged nowhere, and said so in his son's name.",
      tradition: {
        christian: "Stephen says Moses became a stranger in the land of Midian, where he fathered two sons (Acts 7:29).",
      },
    },
    confidence: "settled",
    references: ["Exodus 2:10", "Exodus 2:18–22", "Exodus 22:21", "Acts 7:29"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-033",
    era: "exodus",
    level: 7,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Exodus 7:1, God tells Moses that Aaron will be his what?",
    choices: ["Judge", "Prophet", "Scribe", "Armour-bearer"],
    answer: 1,
    explanation: {
      textSays:
        "When Moses protests, “I am not eloquent” (Exodus 4:10), God makes Aaron his spokesman: “he will be to you a mouth, and you will be to him as God” (4:16). Exodus 7:1: “Behold, I have made you as God to Pharaoh; and Aaron your brother shall be your prophet.” Moses is to speak, and Aaron is to pass the words on to Pharaoh (7:2).",
      world:
        "Read beside 4:16, the verse shows what “prophet” (Hebrew navi) means in the Hebrew Bible: someone who speaks on behalf of another. As Aaron speaks Moses' words, a prophet speaks God's words. Commentators on Exodus have long pointed to this pair of verses as a definition of the prophet's role.",
      theirEyes:
        "Courtiers were used to kings speaking through heralds — here a shepherd-prophet arrives with his own herald, his older brother.",
    },
    confidence: "settled",
    references: ["Exodus 4:10–16", "Exodus 7:1–2"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "B. S. Childs, The Book of Exodus (Old Testament Library, Westminster, 1974), on Exodus 4:10–17 and 7:1–7" },
      { kind: "scholarship", citation: "W. H. C. Propp, Exodus 1–18 (Anchor Bible 2, Doubleday, 1999), on Exodus 7:1" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-034",
    era: "exodus",
    level: 7,
    category: "story",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: according to Exodus, Aaron was older than Moses.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 7:7: “Moses was eighty years old, and Aaron eighty-three years old, when they spoke to Pharaoh.” Their sister, who watched the baby in the reeds, was older too (2:4–8). Deuteronomy 34:7 gives Moses' age at death as 120.",
      world:
        "Biblical stories often give the leading role to a younger sibling — Isaac, Jacob, Joseph, David. Here too the younger brother leads, while the older brother serves as his spokesman.",
      theirEyes: "Two old men, eighty and eighty-three, walking into the court of the most powerful king on earth.",
      tradition: {
        christian:
          "Stephen divides Moses' life into forties: forty when he visited his people (Acts 7:23), forty more years before the angel appeared in the bush (7:30), and forty years in the wilderness (7:36).",
      },
    },
    confidence: "settled",
    references: ["Exodus 7:7", "Exodus 2:4–8", "Acts 7:23–36", "Deuteronomy 34:7"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-035",
    era: "exodus",
    level: 7,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Josephus adds a story not in Exodus: as a young man, Moses led an Egyptian army against which people?",
    choices: ["The Hittites", "The Philistines", "The Ethiopians", "The Babylonians"],
    answer: 2,
    explanation: {
      textSays:
        "Exodus jumps from Moses' adoption straight to the day, when he “had grown up,” that he killed an Egyptian and fled (Exodus 2:10–15).",
      world:
        "Greek “Ethiopia” meant Kush (Nubia), the land south of Egypt, long both a rival and a province of the pharaohs.",
      theirEyes:
        "Josephus' Greek and Roman readers would have admired a Moses who was a brilliant general as well as a lawgiver.",
      tradition: {
        jewish:
          "Josephus says the Ethiopians invaded Egypt as far as Memphis. Moses marched through snake-infested country carrying ibises in baskets to eat the snakes, besieged the city of Saba (later Meroë), and married the Ethiopian princess Tharbis (Antiquities 2.10.1–2).",
      },
      debate:
        "Some scholars think stories like this helped explain the Cushite wife of Moses mentioned in Numbers 12:1.",
    },
    confidence: "settled",
    references: ["Exodus 2:10–15", "Numbers 12:1"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 2.10.1–2 (2.238–253)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "exo-036",
    era: "exodus",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After which plague did Pharaoh's magicians admit, “This is God's finger”?",
    choices: ["Frogs", "Hail", "Darkness", "Lice (gnats)"],
    answer: 3,
    explanation: {
      textSays:
        "The magicians copied the water turned to blood (Exodus 7:22) and the frogs (8:7), but when dust became lice they could not (8:18). Then they told Pharaoh, “This is God’s finger” (8:19 — 8:15 in Hebrew Bibles, whose chapter 8 begins four verses later). The Hebrew kinnim may mean lice, gnats or mosquitoes.",
      theirEyes:
        "Court experts who had matched Moses trick for trick now had to tell their king they were beaten.",
      tradition: {
        christian:
          "Jesus echoes the phrase: if he casts out demons by the finger of God, then the Kingdom of God has come (Luke 11:20).",
      },
    },
    confidence: "settled",
    references: ["Exodus 7:22", "Exodus 8:7", "Exodus 8:16–19", "Luke 11:20"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-037",
    era: "exodus",
    level: 8,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Exodus says the hail destroyed the flax and barley. Why were the wheat and spelt spared?",
    choices: [
      "They were already harvested",
      "They grew only by the Nile",
      "They had not grown up yet",
      "They were covered by tents",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Exodus 9:31–32: “The flax and the barley were struck, for the barley had ripened and the flax was blooming. But the wheat and the spelt were not struck, for they had not grown up.”",
      world:
        "Flax and barley ripen weeks before wheat, so the detail places the hail in late winter or early spring. The Gezer Calendar, a 10th-century BCE Hebrew inscription, lists the farming year in the same order: a month of pulling flax, then the barley harvest, then the main harvest. The word translated “spelt” probably means emmer, an ancient wheat.",
      theirEyes:
        "A farmer walking through flattened barley could still see green wheat shoots — not everything was lost, yet.",
    },
    confidence: "settled",
    references: ["Exodus 9:22–32"],
    sources: [scripture, { kind: "archaeology", citation: "Gezer Calendar, 10th century BCE (Istanbul Archaeology Museums)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-038",
    era: "exodus",
    level: 8,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Exodus always says that it was God who hardened Pharaoh's heart.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "The text varies. God foretells it (Exodus 4:21; 7:3). After the frogs, “when Pharaoh saw that there was a respite, he hardened his heart” (8:15; 8:11 in Hebrew Bibles), and he does so again after the flies (8:32; Hebrew 8:28); elsewhere his heart simply “was hardened” (7:13). Only at the boils does the narrator first say, “Yahweh hardened the heart of Pharaoh” (9:12).",
      world:
        "Hebrew uses three verbs: chazaq (“make strong”), kaved (“make heavy”) and qashah (“make hard”).",
      theirEyes: "Each time a plague lifted, the court watched the king change his mind again.",
      tradition: {
        christian:
          "Paul quotes God's words to Pharaoh (Exodus 9:16) and concludes that God shows mercy and hardens as he chooses (Romans 9:17–18).",
      },
      debate: "Jewish and Christian readers have long debated how God's action and Pharaoh's own choices fit together.",
    },
    confidence: "settled",
    references: ["Exodus 4:21", "Exodus 7:3", "Exodus 7:13", "Exodus 8:15", "Exodus 8:32", "Exodus 9:12", "Romans 9:17–18"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-039",
    era: "exodus",
    level: 8,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Exodus 13:17 says God did not lead Israel by the short road to Canaan. Which road was it?",
    choices: ["The way of the land of the Philistines", "The King's Highway", "The road to Damascus", "The way of the Jordan"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 13:17: God did not lead them by the way of the land of the Philistines, though it was near, for God said, “Lest perhaps the people change their minds when they see war, and they return to Egypt.” Instead God led them “by the way of the wilderness by the Red Sea” (13:18; Hebrew Yam Suf).",
      world:
        "Egyptians called the coastal route from the Delta to Gaza the “Ways of Horus.” Reliefs of Seti I at Karnak show it lined with forts and wells, and Egyptian forts have been excavated along it at Tell el-Borg and Tell Hebua (ancient Tjaru).",
      theirEyes: "A crowd of escaped labourers on foot would have met Egyptian garrison after garrison on that road.",
      debate:
        "Most archaeologists date the Philistines' settlement on the coast of Canaan to the early 12th century BCE, around the reign of Ramesses III. Many scholars therefore read the name here as reflecting a later writer's day; others think a scribe updated an older place name, or that earlier Aegean settlers are meant.",
    },
    confidence: "settled",
    references: ["Exodus 13:17–18"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Seti I battle reliefs, north exterior wall of the Great Hypostyle Hall, Karnak" },
      { kind: "scholarship", citation: "J. K. Hoffmeier, Ancient Israel in Sinai (Oxford University Press, 2005)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-040",
    era: "exodus",
    level: 8,
    category: "archaeology",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: most Egyptologists regard the Ipuwer Papyrus, which says “the river is blood,” as an eyewitness record of the plagues.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays: "In Exodus 7:20–21 the Nile's water turns to blood, the fish die and the river stinks.",
      world:
        "The Admonitions of Ipuwer survive on Papyrus Leiden I 344 (Rijksmuseum van Oudheden, Leiden), a copy made in the 19th Dynasty (about the 13th century BCE) of an older composition. It is a poetic lament about a world turned upside down — a known Egyptian literary genre — and it describes foreigners coming into Egypt, not leaving it. Immanuel Velikovsky's Ages in Chaos (1952) popularised the link with Exodus.",
      theirEyes:
        "Egyptian scribes copied old laments about chaos as classics, much as students today study old poetry.",
      debate:
        "When the text was first composed is debated: older scholarship placed it after the collapse of the Old Kingdom (the First Intermediate Period), while many recent scholars favour the late Middle Kingdom. Either way it is centuries older than the copy. A few writers still connect the papyrus with the Exodus, but most scholars treat it as literature with no relation to it.",
    },
    confidence: "mainstream",
    references: ["Exodus 7:20–21"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Papyrus Leiden I 344 recto (Rijksmuseum van Oudheden, Leiden)" },
      { kind: "scholarship", citation: "M. Lichtheim, Ancient Egyptian Literature, vol. 1: The Old and Middle Kingdoms (1973)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "exo-041",
    era: "exodus",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Three days after crossing the sea, Israel found only bitter water at Marah. According to Exodus 15:25, how was it made sweet?",
    choices: [
      "Moses struck a rock with his rod",
      "Aaron threw salt into the spring",
      "Moses threw in a tree that Yahweh showed him",
      "A rainstorm refilled the pool",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Exodus 15:23: “When they came to Marah, they couldn’t drink from the waters of Marah, for they were bitter. Therefore its name was called Marah” (Hebrew mar, “bitter”). Moses cries to God: “Yahweh showed him a tree, and he threw it into the waters, and the waters were made sweet” (15:25). God then declares, “I am Yahweh who heals you” (15:26), and the people move on to Elim, with “twelve springs of water and seventy palm trees” (15:27).",
      world:
        "The wrong answers come from other stories: Moses strikes a rock for water later, at Horeb (Exodus 17:6), and Elisha heals the spring of Jericho with salt (2 Kings 2:19–22). Marah's location is unknown.",
      theirEyes:
        "After three days of desert walking, finding water and being unable to drink it was worse than finding none at all.",
      tradition: {
        jewish:
          "Ben Sira (early 2nd century BCE), praising physicians and the medicines God created from the earth, points to Marah: “Wasn’t water made sweet with wood, that its power might be known?” (Sirach 38:5).",
      },
    },
    confidence: "settled",
    references: ["Exodus 15:22–27", "Exodus 17:6", "2 Kings 2:19–22", "Sirach 38:4–5"],
    sources: [scripture, { kind: "primary", citation: "Sirach (Ben Sira) 38:4–5, World English Bible" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "exo-042",
    era: "exodus",
    level: 9,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Exodus 12:46 gives a rule for the Passover lamb that John's Gospel applies to Jesus. What is it?",
    choices: [
      "It must be eaten standing",
      "It must be chosen on the tenth day",
      "None of its bones may be broken",
      "It must be eaten with bitter herbs",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Exodus 12:46: “It must be eaten in one house. You shall not carry any of the meat outside of the house. Do not break any of its bones.” Numbers 9:12 repeats the rule. In John 19:31–36 the soldiers do not break Jesus' legs, and John says this fulfilled the Scripture, “A bone of him will not be broken” (19:36). The other choices are different Passover rules or none at all: the lamb is chosen on the tenth day (Exodus 12:3) and eaten with bitter herbs (12:8).",
      theirEyes:
        "A family carving the roasted lamb carefully, leaving every bone whole as the rule required.",
      tradition: {
        jewish:
          "Jubilees (2nd century BCE) repeats the rule that no bone may be broken, adding that no bone of the children of Israel shall be crushed, and requires the lamb to be eaten at the sanctuary (Jubilees 49:13, 16–20).",
        christian:
          "Christians read John as presenting Jesus as the true Passover lamb; John 1:29 calls him “the Lamb of God.” Some scholars think John 19:36 also echoes Psalm 34:20 (34:21 in Hebrew Bibles), where God protects the righteous man's bones.",
      },
    },
    confidence: "settled",
    references: ["Exodus 12:3–8", "Exodus 12:46", "Numbers 9:12", "John 19:31–36", "John 1:29", "Psalm 34:20"],
    sources: [scripture, { kind: "primary", citation: "Jubilees 49:13, 16–20 (R. H. Charles translation)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-043",
    era: "exodus",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Exodus 12:38, who else went up out of Egypt with the Israelites?",
    choices: ["The priests of On", "An army of Midianites", "A caravan of Philistine traders", "A mixed multitude"],
    answer: 3,
    explanation: {
      textSays:
        "Exodus 12:37–38: “about six hundred thousand on foot who were men, in addition to children,” traveled from Rameses to Succoth, and “A mixed multitude went up also with them, with flocks, herds, and even very much livestock.”",
      theirEyes:
        "Not everyone on the road was a descendant of Jacob — slaves and neighbours of many origins took their chance to leave.",
      tradition: {
        jewish:
          "Philo says the mixed crowd included children of Hebrew fathers and Egyptian mothers, people who admired the Hebrews' piety, and Egyptians won over by the plagues (Life of Moses 1.147).",
      },
      debate:
        "600,000 men implies some two million people, which many scholars consider impossible for the period. Some suggest the Hebrew elef (“thousand”) can mean a clan or military unit; others see the number as symbolic or from a later census.",
    },
    confidence: "settled",
    references: ["Exodus 12:37–38"],
    sources: [scripture, { kind: "primary", citation: "Philo, On the Life of Moses 1.147" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-044",
    era: "exodus",
    level: 9,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Before leaving, the Israelites asked the Egyptians for silver, gold and clothing. How did Jubilees, Philo and Wisdom explain this?",
    choices: [
      "As a bribe to leave quietly",
      "As wages for their years of forced labour",
      "As gifts for Pharaoh's temples",
      "As a loan later repaid in Canaan",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Exodus 12:35–36: “they asked of the Egyptians jewels of silver, and jewels of gold, and clothing,” and “They plundered the Egyptians.” God had foretold this at the bush (3:21–22).",
      theirEyes: "For people who had made bricks for generations without pay, Egyptian silver felt like back wages at last.",
      tradition: {
        jewish:
          "Jubilees says the Israelites took the silver, gold and clothing to despoil the Egyptians in return for the bondage they had been forced to serve (Jubilees 48:18). Philo calls it the wages owed for their long service (Life of Moses 1.140–142), and the Wisdom of Solomon, speaking of the Exodus, says Wisdom “rendered to holy men a reward of their toils” (Wisdom 10:17).",
        christian:
          "Augustine (around 400 CE) read the spoiling of the Egyptians as permission for Christians to take what is true and useful from pagan learning (On Christian Doctrine 2.40).",
      },
    },
    confidence: "settled",
    references: ["Exodus 3:21–22", "Exodus 12:35–36"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 48:18 (R. H. Charles translation)" },
      { kind: "primary", citation: "Philo, On the Life of Moses 1.140–142" },
      { kind: "primary", citation: "Wisdom of Solomon 10:17" },
      { kind: "primary", citation: "Augustine, On Christian Doctrine 2.40" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-045",
    era: "exodus",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Exodus 14:21, what drove the sea back all night?",
    choices: ["A strong east wind", "An earthquake", "A storm from the north", "The pillar of fire"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 14:21: “Moses stretched out his hand over the sea, and Yahweh caused the sea to go back by a strong east wind all night, and made the sea dry land, and the waters were divided.” The Song of the Sea pictures it as the blast of God's nostrils (15:8).",
      world:
        "In 2010 the researchers Carl Drews and Weiqing Han published a computer model showing that a strong wind blowing all night could push back shallow water in a lagoon of the eastern Nile Delta, opening a temporary land bridge.",
      theirEyes: "All night the wind howled, and by dawn there was ground where there had been water.",
      tradition: {
        jewish:
          "The Wisdom of Solomon, which never names Moses or Israel, credits personified Wisdom with bringing the righteous through the Red Sea (Wisdom 10:18–19).",
      },
      debate:
        "Whether a natural event lies behind the story is debated; the text presents it as God's act, with the wind as his instrument.",
    },
    confidence: "settled",
    references: ["Exodus 14:21–22", "Exodus 15:8"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "C. Drews and W. Han, “Dynamics of Wind Setdown at Suez and the Eastern Nile Delta,” PLoS ONE 5(8): e12481 (2010)" },
      { kind: "primary", citation: "Wisdom of Solomon 10:15–19" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "exo-046",
    era: "exodus",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Greek Septuagint, Exodus 1:11 adds a third city built by the Israelites. Which?",
    choices: ["Memphis", "Thebes", "On, which is Heliopolis", "Alexandria"],
    answer: 2,
    explanation: {
      textSays: "The Hebrew text of Exodus 1:11 names only two store cities, Pithom and Raamses.",
      world:
        "The Septuagint, translated in Egypt in the 3rd century BCE, reads: “both Pitho, and Ramesses, and On, which is Heliopolis” (Brenton's translation). On, the Greeks' Heliopolis (“city of the sun”), was a great centre of sun worship; Joseph's father-in-law was a priest of On (Genesis 41:45). Josephus reports the Egyptian priest Manetho's hostile claim that Moses had been a priest of Heliopolis (Against Apion 1.250), a claim Josephus rejects.",
      theirEyes:
        "For Greek-speaking Jews in Alexandria, Heliopolis was a real, famous city just up the Nile — a natural place to imagine their ancestors labouring.",
    },
    confidence: "settled",
    references: ["Exodus 1:11", "Genesis 41:45"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Exodus 1:11 (Brenton translation)" },
      { kind: "primary", citation: "Josephus, Against Apion 1.250" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-047",
    era: "exodus",
    level: 10,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: many scholars consider the Song of the Sea (Exodus 15) to be among the oldest poems in the Hebrew Bible.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Moses and Israel sing the song in Exodus 15:1–18; Miriam leads the women in nearly the same opening lines (15:21).",
      world:
        "Frank Moore Cross and David Noel Freedman argued that its archaic Hebrew grammar and spelling point to a very early date, perhaps the 12th–11th century BCE, and many scholars have followed them.",
      theirEyes: "A victory song chanted and drummed long before anyone wrote it down.",
      tradition: {
        jewish:
          "The Wisdom of Solomon says that after the crossing the righteous “sang praise to your holy name, O Lord, and extolled with one accord your hand that fought for them” (Wisdom 10:20).",
        christian: "In Revelation 15:3 the victors standing beside a sea of glass sing “the song of Moses.”",
      },
      debate:
        "Others date it later, noting that 15:13–17 seems to look ahead to settlement in the land and to God's sanctuary, and that ancient style can be imitated. Some think the short Song of Miriam (15:21) was the original core.",
    },
    confidence: "mainstream",
    references: ["Exodus 15:1–21", "Revelation 15:3"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "F. M. Cross and D. N. Freedman, “The Song of Miriam,” Journal of Near Eastern Studies 14 (1955); Studies in Ancient Yahwistic Poetry (1975)" },
      { kind: "primary", citation: "Wisdom of Solomon 10:20, World English Bible" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-048",
    era: "exodus",
    level: 10,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ezekiel the Tragedian, a Jewish writer probably of the 2nd century BCE, retold the Exodus in what form?",
    choices: ["A Hebrew psalm cycle", "A Latin history", "An Aramaic letter to Jerusalem", "A Greek tragedy in verse"],
    answer: 3,
    explanation: {
      world:
        "His Exagoge (“Leading Out”) survives in about 269 lines of Greek iambic verse, the metre of Athenian tragedy, quoted by Eusebius from the 1st-century-BCE writer Alexander Polyhistor. Scenes include Moses' opening speech, his meeting with Zipporah in Midian, the burning bush, the plagues and Passover instructions, and a messenger's report of the Egyptians drowning — a classic device of Greek tragedy.",
      theirEyes:
        "Greek-speaking Jews — most likely in Ptolemaic Alexandria — heard their own story in the most prestigious literary form of the Greek world.",
      tradition: {
        jewish:
          "The play depends on the Septuagint, showing how Greek-speaking Jews of the period read Exodus 1–15 as their own heroic drama.",
      },
      debate:
        "Its exact date and place of writing are uncertain (it must be earlier than Alexander Polyhistor), and whether the play was ever staged, or only read, is debated.",
    },
    confidence: "settled",
    references: ["Exodus 1–15"],
    sources: [
      scripture,
      { kind: "primary", citation: "Eusebius, Preparation for the Gospel 9.28–29 (quoting Alexander Polyhistor)" },
      { kind: "scholarship", citation: "H. Jacobson, The Exagoge of Ezekiel (Cambridge University Press, 1983)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-049",
    era: "exodus",
    level: 10,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Philo read the bush that burned without being consumed as a symbol. Of what?",
    choices: [
      "The oppressed people, who would not be destroyed",
      "Pharaoh's palace, soon to fall",
      "The fire that would strike Egypt",
      "The Temple's eternal flame",
    ],
    answer: 0,
    explanation: {
      textSays: "Exodus 3:2: “the bush burned with fire, and the bush was not consumed.”",
      theirEyes:
        "For Jews in Alexandria, facing hostility from their neighbours, a fragile bush that fire could not destroy was a picture of themselves.",
      tradition: {
        jewish:
          "Philo of Alexandria (1st century CE) says the bush symbolised the people suffering injustice and the fire their oppressors; as the bush was not burned up, the sufferers would not be destroyed (On the Life of Moses 1.67).",
        christian:
          "Some church fathers, such as Gregory of Nyssa in his Life of Moses (4th century CE), read the unconsumed bush as an image of the virgin birth.",
      },
    },
    confidence: "settled",
    references: ["Exodus 3:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, On the Life of Moses 1.65–69" },
      { kind: "primary", citation: "Gregory of Nyssa, Life of Moses 2.20–21" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-050",
    era: "exodus",
    level: 10,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Exodus often calls Pharaoh's heart “heavy.” In Egyptian belief, what happened to a person's heart after death?",
    choices: [
      "It was thrown into the Nile",
      "It was burned before Ra",
      "It was weighed against the feather of Maat",
      "It was buried under a pyramid",
    ],
    answer: 2,
    explanation: {
      textSays:
        "One of the Hebrew verbs for Pharaoh's stubbornness is kaved, “to be heavy.” Where the WEB says Pharaoh “hardened his heart” (Exodus 8:15 and 8:32; 8:11 and 8:28 in Hebrew Bibles), the Hebrew literally says he made it heavy; in 9:7, where the WEB says his heart “was stubborn,” the same root is used.",
      world:
        "In the Book of the Dead (spell 125), the dead person's heart is weighed on a scale against the feather of Maat, goddess of truth and order. A heart weighed down by wrongdoing was devoured by the monster Ammit. The scene is famously painted in the Papyrus of Ani in the British Museum.",
      theirEyes:
        "For an Egyptian, a heavy heart meant failing the final judgment — a sharp irony if Hebrew listeners heard it said of the god-king.",
      debate:
        "Some scholars, such as John Currid, think Exodus deliberately plays on this Egyptian image; others see “heavy heart” simply as an ordinary Hebrew idiom for stubbornness.",
    },
    confidence: "settled",
    references: ["Exodus 8:15", "Exodus 8:32", "Exodus 9:7"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Papyrus of Ani, weighing-of-the-heart vignette (British Museum EA 10470/3)" },
      { kind: "scholarship", citation: "J. D. Currid, Ancient Egypt and the Old Testament (Baker, 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
