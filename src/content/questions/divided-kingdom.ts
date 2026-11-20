import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const dividedKingdom: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "div-001",
    era: "divided-kingdom",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "After Solomon's death the kingdom split in two. What was the southern kingdom, ruled from Jerusalem, called?",
    choices: ["Edom", "Israel", "Judah", "Philistia"],
    answer: 2,
    explanation: {
      textSays:
        "1 Kings 12 says the northern tribes rejected Solomon's son Rehoboam and made Jeroboam their king. Only the tribe of Judah (with Benjamin) stayed loyal to the house of David (1 Kings 12:20–21).",
      world:
        "From then on the Bible tells two parallel stories: the northern kingdom of Israel and the southern kingdom of Judah. The Tel Dan Stele, a 9th-century BCE Aramaic inscription (Israel Museum), mentions a “king of Israel” and, in most scholars' reading, the “house of David.”",
      theirEyes:
        "A farmer near Bethel and a potter in Jerusalem now paid taxes to different kings, though they prayed to the same God.",
      debate:
        "Scholars debate how large and powerful the kingdom of David and Solomon was before the split; that the two kingdoms existed side by side afterwards is not in doubt.",
    },
    confidence: "settled",
    references: ["1 Kings 12:1–21"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Tel Dan Stele, 9th century BCE (Israel Museum, Jerusalem)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-002",
    era: "divided-kingdom",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "On Mount Carmel, Elijah challenged the prophets of which god to a contest?",
    choices: ["Marduk", "Baal", "Dagon", "Chemosh"],
    answer: 1,
    explanation: {
      textSays:
        "In 1 Kings 18:19–40, Elijah and the 450 prophets of Baal each prepare a bull on an altar. Baal's prophets call on him all day with no answer; the text says fire from Yahweh then falls on Elijah's offering.",
      world:
        "Texts from ancient Ugarit (in modern Syria) describe Baal as a storm god who brought rain. That is why the story's setting matters: it comes during a long drought (1 Kings 17:1), so the contest is about who really controls the rain.",
      theirEyes:
        "After three dry years, everyone on that mountain was desperate for one thing: rain clouds over the sea.",
    },
    confidence: "settled",
    references: ["1 Kings 17:1", "1 Kings 18:19–40"],
    sources: [
      scripture,
      { kind: "primary", citation: "Ugaritic Baal Cycle (KTU 1.1–1.6)" },
      { kind: "reference", citation: "“Baal,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-003",
    era: "divided-kingdom",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In the book of Jonah, God sends Jonah to warn which great city?",
    choices: ["Babylon", "Damascus", "Tarshish", "Nineveh"],
    answer: 3,
    explanation: {
      textSays:
        "Jonah is told to go to Nineveh but sails for Tarshish in the opposite direction (Jonah 1:2–3). After the great fish, he goes to Nineveh, and the city repents (Jonah 3). 2 Kings 14:25 mentions a prophet Jonah son of Amittai in the reign of Jeroboam II.",
      world:
        "Nineveh, on the Tigris near modern Mosul, became the capital of the Assyrian Empire under Sennacherib (c. 700 BCE) — the empire that conquered the kingdom of Israel.",
      theirEyes:
        "For an Israelite, being told to preach mercy to Nineveh was like being sent to warn the enemy's own capital.",
      tradition: {
        jewish: "Josephus retells Jonah's flight, the great fish and his preaching at Nineveh (Antiquities 9.10.2).",
        christian: "In Matthew 12:39–41 Jesus speaks of “the sign of Jonah” and the repentance of Nineveh.",
      },
      debate:
        "Many scholars read Jonah as a story with a message (a parable or satire) written after the exile, while others read it as history; either way, Nineveh is the city named.",
    },
    confidence: "settled",
    references: ["Jonah 1:2–3", "Jonah 3:1–10", "2 Kings 14:25", "Matthew 12:39–41"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Nineveh,” Encyclopaedia Britannica" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 9.10.2" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-004",
    era: "divided-kingdom",
    level: 1,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which empire captured Samaria and ended the northern kingdom of Israel around 722 BCE?",
    choices: ["Assyria", "Babylon", "Persia", "Egypt"],
    answer: 0,
    explanation: {
      textSays:
        "2 Kings 17:5–6 says the king of Assyria besieged Samaria for three years, captured it and carried the Israelites away to Assyria.",
      world:
        "Mesopotamian records agree. A Babylonian chronicle says Shalmaneser V ravaged Samaria, and his successor Sargon II boasted of capturing it and deporting its people. The Neo-Babylonian and Persian empires rose to power only later.",
      theirEyes:
        "For families marched east in chains, the ten northern tribes' homeland became a memory — and the source of the later legend of the “lost tribes.”",
    },
    confidence: "settled",
    references: ["2 Kings 17:3–6"],
    sources: [
      scripture,
      { kind: "primary", citation: "Babylonian Chronicle ABC 1 (British Museum, BM 92502), entry on Shalmaneser V" },
      { kind: "primary", citation: "Sargon II, Nimrud Prism and Khorsabad Annals" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-005",
    era: "divided-kingdom",
    level: 1,
    category: "tradition",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: instead of describing Elijah's death, 2 Kings says he was taken up to heaven in a whirlwind.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "2 Kings 2:11: “a chariot of fire and horses of fire separated them; and Elijah went up by a whirlwind into heaven.” Elisha had asked for “a double portion” of his spirit (2:9).",
      theirEyes:
        "For Elisha, watching his teacher vanish left him holding Elijah's fallen cloak — and a mission.",
      tradition: {
        jewish:
          "Because no death is recorded, Elijah was expected to return, as Malachi 4:5 (3:23 in Hebrew Bibles) promises. Ben Sira (c. 180 BCE) praises him as taken up in a whirlwind of fire and ready to return at the appointed time (Sirach 48:9–10), and in Mark 9:11 the scribes teach that Elijah must come first.",
        christian:
          "The Gospels connect John the Baptist with Elijah (Matthew 11:14) and show Elijah with Moses at the Transfiguration (Mark 9:4).",
      },
    },
    confidence: "settled",
    references: ["2 Kings 2:9–12", "Malachi 4:5", "Matthew 11:14", "Mark 9:4", "Mark 9:11"],
    sources: [scripture, { kind: "primary", citation: "Sirach (Ecclesiasticus) 48:9–10" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "div-006",
    era: "divided-kingdom",
    level: 2,
    category: "neighbours",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Queen Jezebel, wife of King Ahab, was the daughter of a king of which people?",
    choices: ["The Philistines", "The Moabites", "The Sidonians (Phoenicians)", "The Egyptians"],
    answer: 2,
    explanation: {
      textSays:
        "1 Kings 16:31 says Ahab married Jezebel, daughter of Ethbaal, king of the Sidonians, and began to serve Baal.",
      world:
        "“Sidonians” was a common name for the Phoenicians of the coast. Josephus quotes the historian Menander, who says Ithobalus (Ethbaal), a priest of Astarte, seized the throne of Tyre (Against Apion 1.18); Josephus himself calls him king of the Tyrians and Sidonians (Antiquities 8.13.1). The marriage sealed an alliance between Israel and the rich trading cities of Phoenicia.",
      theirEyes:
        "To courtiers in Samaria, the foreign queen brought sea trade, purple cloth and fine craftsmen — and her own gods.",
    },
    confidence: "settled",
    references: ["1 Kings 16:29–33"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Against Apion 1.18; Antiquities of the Jews 8.13.1" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-007",
    era: "divided-kingdom",
    level: 2,
    category: "archaeology",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "King Hezekiah's tunnel under Jerusalem was cut to bring water from which source?",
    choices: ["The Jordan River", "The Gihon Spring", "The springs of En Gedi", "The Dead Sea"],
    answer: 1,
    explanation: {
      textSays:
        "2 Chronicles 32:30 says Hezekiah stopped the upper spring of Gihon and brought its water down to the west side of the city of David; 2 Kings 20:20 mentions his pool and conduit.",
      world:
        "The tunnel still runs about 533 metres from the Gihon Spring to the Pool of Siloam, and visitors can wade through it today. The Siloam Inscription, found inside in 1880, describes two teams digging from opposite ends until they met “axe against axe.” Radiometric dating published in 2003 points to about 700 BCE.",
      theirEyes:
        "With the Assyrian army coming, hiding the city's water inside the hill could mean the difference between surviving a siege and surrendering.",
      debate:
        "That the tunnel carries water from the Gihon Spring is not in doubt. Most scholars link it to Hezekiah, as the radiometric dates support, but a few (such as R. Reich and E. Shukron) have argued that it was begun earlier, around 800 BCE.",
    },
    confidence: "mainstream",
    references: ["2 Kings 20:20", "2 Chronicles 32:2–4", "2 Chronicles 32:30"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Siloam Inscription (Istanbul Archaeology Museums)" },
      {
        kind: "scholarship",
        citation: "A. Frumkin, A. Shimron and J. Rosenbaum, “Radiometric dating of the Siloam Tunnel, Jerusalem,” Nature 425 (2003)",
      },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-008",
    era: "divided-kingdom",
    level: 2,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "During repairs to the Temple in King Josiah's reign, what did the high priest Hilkiah find?",
    choices: ["The Ark of the Covenant", "Goliath's sword", "A book of the law", "Solomon's crown"],
    answer: 2,
    explanation: {
      textSays:
        "2 Kings 22:8: Hilkiah says, “I have found the book of the law in Yahweh's house.” When it is read to Josiah he tears his clothes, then leads a sweeping reform: removing idols and celebrating a great Passover (2 Kings 23).",
      world:
        "Since W. M. L. de Wette (1805) most scholars have linked this book to an early form of Deuteronomy, because Josiah's reforms — one central place of worship, no other shrines — match Deuteronomy's laws (e.g., Deuteronomy 12).",
      theirEyes:
        "Imagine workers clearing rubble in the Temple and a scroll turning up that makes the king tear his robes in alarm.",
      tradition: {
        jewish: "Josephus retells the story: while bringing out the Temple gold, the high priest came upon “the holy books of Moses” laid up in the Temple (Antiquities 10.4.2, Whiston translation).",
      },
    },
    confidence: "settled",
    references: ["2 Kings 22:3–13", "2 Kings 23:1–25", "Deuteronomy 12:1–14"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 10.4.2" },
      { kind: "reference", citation: "“Deuteronomy,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-009",
    era: "divided-kingdom",
    level: 2,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which Babylonian king's army burned Jerusalem and Solomon's Temple in 587/586 BCE?",
    choices: ["Sennacherib", "Cyrus", "Nebuchadnezzar", "Shalmaneser"],
    answer: 2,
    explanation: {
      textSays:
        "2 Kings 25:8–9 says that in Nebuchadnezzar's nineteenth year his commander Nebuzaradan burned the house of Yahweh, the king's palace and the houses of Jerusalem. Jeremiah 52 tells the same story.",
      world:
        "Nebuchadnezzar II ruled Babylon from 605 to 562 BCE. Sennacherib and Shalmaneser were Assyrian kings; Cyrus of Persia came later and allowed exiles to return.",
      theirEyes:
        "After a siege of about a year and a half (2 Kings 25:1–3), the people of Jerusalem watched the Temple that had stood for centuries go up in flames.",
      debate: "Scholars disagree over whether the destruction fell in 587 or 586 BCE, depending on how they reckon the kings' regnal years.",
    },
    confidence: "settled",
    references: ["2 Kings 25:1–10", "Jeremiah 52:12–14"],
    sources: [scripture, { kind: "reference", citation: "“Nebuchadnezzar II,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-010",
    era: "divided-kingdom",
    level: 2,
    category: "daily-life",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the prophet Amos described himself as a trained professional prophet, son of a prophet.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Amos 7:14: “I was no prophet, neither was I a prophet's son, but I was a herdsman, and a farmer of sycamore figs” (the verse continues). He came from Tekoa in Judah (Amos 1:1) but preached in the northern kingdom, at the royal shrine of Bethel.",
      world:
        "Sycamore figs grew in the warm lowlands and had to be nicked to ripen properly — seasonal work for a farmhand. Amos condemned the rich for trampling the poor and taking bribes (Amos 5:11–12).",
      theirEyes:
        "To the priest Amaziah at Bethel, Amos was an outsider from the south with dirt on his hands, telling the king's shrine what God thought of it.",
    },
    confidence: "settled",
    references: ["Amos 1:1", "Amos 5:11–12", "Amos 7:10–15"],
    sources: [scripture, { kind: "reference", citation: "“Amos,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "div-011",
    era: "divided-kingdom",
    level: 3,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The Mesha Stele, found in 1868 east of the Dead Sea, was set up by the king of which people?",
    choices: ["Edom", "Aram", "Philistia", "Moab"],
    answer: 3,
    explanation: {
      textSays:
        "2 Kings 3:4–5 calls Mesha king of Moab, who paid Israel a heavy tribute and rebelled after Ahab died.",
      world:
        "Found at Dhiban in modern Jordan, the black basalt stone was smashed by local people before it could be removed, but an earlier paper squeeze let scholars rebuild the text. Mesha says “Omri was king of Israel and oppressed Moab many days” because the Moabite god Chemosh was angry — then boasts of his victories. It is now in the Louvre.",
      theirEyes:
        "For a Moabite, this was a victory monument: our god has freed us from Israel.",
    },
    confidence: "settled",
    references: ["2 Kings 3:4–27"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Mesha Stele (Moabite Stone), 9th century BCE (Louvre, AO 5066)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-012",
    era: "divided-kingdom",
    level: 3,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "King Omri bought a hill and built a new capital for Israel on it. What was the city called?",
    choices: ["Samaria", "Tirzah", "Shechem", "Beersheba"],
    answer: 0,
    explanation: {
      textSays:
        "1 Kings 16:23–24 says Omri reigned six years in Tirzah, then bought the hill of Samaria from Shemer for two talents of silver and named the city after him.",
      world:
        "Omri gets only a few verses in the Bible, but Assyrian scribes were impressed: over a century later, inscriptions of Tiglath-pileser III and Sargon II still call Israel “the house of Omri” (Bit-Humri).",
      theirEyes:
        "A hilltop with views to the sea, easy to defend, close to the trade routes — Omri's new capital announced that Israel was a power.",
    },
    confidence: "settled",
    references: ["1 Kings 16:23–28"],
    sources: [
      scripture,
      { kind: "primary", citation: "Inscriptions of Tiglath-pileser III and Sargon II naming Israel “Bit-Humri”" },
      { kind: "reference", citation: "“Omri,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-013",
    era: "divided-kingdom",
    level: 3,
    category: "neighbours",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Naaman, the army commander healed of a skin disease after washing in the Jordan, came from which kingdom?",
    choices: ["Egypt", "Aram (Syria)", "Assyria", "Edom"],
    answer: 1,
    explanation: {
      textSays:
        "2 Kings 5 calls Naaman captain of the army of the king of Syria (Aram). An Israelite servant girl sends him to Elisha, who tells him to wash seven times in the Jordan. Naaman complains that the rivers of Damascus are better (5:12).",
      world:
        "Aram-Damascus was Israel's closest rival in the 9th century BCE; the two kingdoms fought over borders but sometimes allied, as against Assyria at Qarqar in 853 BCE.",
      theirEyes:
        "A proud general from the enemy capital, standing in the muddy Jordan on the word of a captured Israelite girl.",
      tradition: {
        christian: "In Luke 4:27 Jesus points out that, of many sufferers in Israel, only Naaman the Syrian was cleansed in Elisha's time.",
      },
    },
    confidence: "settled",
    references: ["2 Kings 5:1–14", "Luke 4:27"],
    sources: [scripture, { kind: "reference", citation: "“Aram,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-014",
    era: "divided-kingdom",
    level: 3,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Amos condemns the rich of Samaria for lying on beds decorated with what luxury material?",
    choices: ["Jade", "Porcelain", "Amber", "Ivory"],
    answer: 3,
    explanation: {
      textSays:
        "Amos 6:4 attacks those who lie on beds of ivory, and Amos 3:15 warns that the houses of ivory will perish. 1 Kings 22:39 says Ahab built an ivory house.",
      world:
        "Excavations at Samaria in the 1930s found hundreds of carved ivory fragments — sphinxes, lotus flowers, a woman at a window — in Phoenician style. They once decorated furniture and walls of the royal quarter in the 9th–8th centuries BCE.",
      theirEyes:
        "Lounging on a couch inlaid with carved ivory from Phoenician workshops was the height of fashion in Samaria — paid for, Amos said, by squeezing the poor.",
    },
    confidence: "settled",
    references: ["Amos 3:15", "Amos 6:4", "1 Kings 22:39"],
    sources: [
      scripture,
      {
        kind: "archaeology",
        citation: "J. W. Crowfoot and G. M. Crowfoot, Early Ivories from Samaria (Samaria-Sebaste II, 1938)",
      },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-015",
    era: "divided-kingdom",
    level: 3,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the Bible describes the Battle of Qarqar (853 BCE), where King Ahab fought the Assyrians.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "The battle is known only from Assyrian records, chiefly the Kurkh Monolith of Shalmaneser III in the British Museum. It lists “Ahab the Israelite” in a coalition of twelve kings, with 2,000 chariots and 10,000 soldiers — the largest chariot force in the list. Shalmaneser claimed a crushing victory, but he had to fight the coalition again in later years.",
      textSays:
        "The books of Kings say nothing about the battle; they focus on Ahab's wars with Aram and his religious policy (1 Kings 20–22).",
      theirEyes:
        "For one summer, Israel and its rival Damascus stood shoulder to shoulder, because Assyria frightened them both.",
      debate: "Some scholars think “2,000 chariots” is an exaggeration or a scribal error, perhaps for 200.",
    },
    confidence: "settled",
    references: ["1 Kings 20:1", "1 Kings 22:1–40"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Kurkh Monolith of Shalmaneser III (British Museum, ME 118884)" },
      { kind: "scholarship", citation: "N. Na'aman, “Two Notes on the Monolith Inscription of Shalmaneser III from Kurkh,” Tel Aviv 3 (1976)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 4 ─────────────
  {
    id: "div-016",
    era: "divided-kingdom",
    level: 4,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The Black Obelisk of Shalmaneser III shows which Israelite king (or his envoy) bowing with tribute?",
    choices: ["Ahab", "Jeroboam II", "Hezekiah", "Jehu"],
    answer: 3,
    explanation: {
      textSays:
        "2 Kings 9–10 tells how Jehu, an army commander, overthrew Ahab's dynasty about 841 BCE.",
      world:
        "Found by Austen Henry Layard at Nimrud in 1846 and now in the British Museum, the obelisk's caption reads “tribute of Jehu, son of Omri” — silver, gold and golden vessels. “Son of Omri” here probably means “of the house (land) of Omri,” Assyria's name for Israel. It is often described as the earliest known picture of an Israelite king (or his envoy).",
      theirEyes:
        "Jehu had seized the throne in blood; now he bowed his face to the ground before Assyria to keep it.",
      debate:
        "A minority of scholars (notably P. K. McCarter, 1974) propose the name refers to Jehoram, Ahab's son, since Jehu was not Omri's descendant, but Jehu is the commonly held identification.",
    },
    confidence: "mainstream",
    references: ["2 Kings 9:1–13", "2 Kings 10:32–36"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Black Obelisk of Shalmaneser III, c. 825 BCE (British Museum, ME 118885)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-017",
    era: "divided-kingdom",
    level: 4,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Huge stone reliefs in Sennacherib's palace at Nineveh show his siege of which city of Judah?",
    choices: ["Jerusalem", "Lachish", "Samaria", "Megiddo"],
    answer: 1,
    explanation: {
      textSays:
        "2 Kings 18:14 and 18:17 place Sennacherib at Lachish during his campaign against Hezekiah in 701 BCE; 2 Chronicles 32:9 says he was besieging Lachish when he sent his officers to Jerusalem.",
      world:
        "The Lachish reliefs, now in the British Museum, show siege ramps, battering rams, archers and families leaving the city. Excavations at Tel Lachish found the Assyrian siege ramp and hundreds of arrowheads. Sennacherib did not depict Jerusalem, which he never captured.",
      theirEyes:
        "Judah's second city fell; then the people of Jerusalem knew the same army was coming up the road to them.",
    },
    confidence: "settled",
    references: ["2 Kings 18:13–17", "2 Chronicles 32:9"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Lachish reliefs from Sennacherib's South-West Palace, Nineveh (British Museum)" },
      { kind: "scholarship", citation: "D. Ussishkin, The Conquest of Lachish by Sennacherib (Tel Aviv University, 1982)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-018",
    era: "divided-kingdom",
    level: 4,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When Aram and Israel threatened Judah, Isaiah gave King Ahaz a sign about a child with what name?",
    choices: ["Ichabod", "Jedidiah", "Immanuel", "Ishmael"],
    answer: 2,
    explanation: {
      textSays:
        "Isaiah 7:1–16: as Rezin of Aram and Pekah of Israel march on Jerusalem, Isaiah tells Ahaz that a young woman (Hebrew ‘almah’) will bear a son called Immanuel (“God with us”), and before the child grows up the two invading kings will be gone.",
      world: "Ahaz instead turned to Assyria, sending silver and gold to Tiglath-pileser III for help (2 Kings 16:7–9).",
      theirEyes: "With two armies on the way, Ahaz was inspecting the water supply when the prophet met him with a promise instead of a plan.",
      tradition: {
        jewish:
          "The Septuagint, a Jewish Greek translation made before Jesus' time, rendered ‘almah’ as parthenos, a word usually meaning “virgin.”",
        christian: "Matthew 1:22–23 quotes this verse in its Greek form and applies it to Jesus' birth.",
      },
    },
    confidence: "settled",
    references: ["Isaiah 7:1–16", "2 Kings 16:5–9", "Matthew 1:22–23"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Isaiah 7:14" },
      { kind: "reference", citation: "“Immanuel,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-019",
    era: "divided-kingdom",
    level: 4,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In 609 BCE, King Josiah of Judah was killed at Megiddo confronting which Egyptian pharaoh?",
    choices: ["Ramesses II", "Shishak", "Tutankhamun", "Necho II"],
    answer: 3,
    explanation: {
      textSays:
        "2 Kings 23:29 says Pharaoh Necoh went up “against the king of Assyria to the river Euphrates”; Josiah went to meet him, and Necoh killed him at Megiddo. (The Hebrew preposition can also mean “to”: the Babylonian chronicle shows Egypt was marching to help Assyria.) 2 Chronicles 35:20–24 says archers wounded him.",
      world:
        "A Babylonian chronicle records an Egyptian army marching in 609 BCE to help the last Assyrian king against Babylon at Harran. Josiah may have tried to block it. Herodotus (2.159) also says Necho defeated the “Syrians” at Magdolus, a place often identified with Megiddo.",
      theirEyes: "The reforming king, Judah's great hope, was carried home dead in his chariot — and Judah soon became Egypt's vassal.",
      tradition: {
        jewish: "1 Esdras 1:25–31, a Greek retelling from the Second Temple period, repeats the story of Josiah's fatal battle.",
      },
    },
    confidence: "settled",
    references: ["2 Kings 23:29–30", "2 Chronicles 35:20–25"],
    sources: [
      scripture,
      { kind: "primary", citation: "Babylonian Chronicle ABC 3 (“Fall of Nineveh Chronicle”), British Museum, BM 21901" },
      { kind: "primary", citation: "Herodotus, Histories 2.159" },
      { kind: "primary", citation: "1 Esdras 1:25–31" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-020",
    era: "divided-kingdom",
    level: 4,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Who wrote down Jeremiah's prophecies on a scroll, which King Jehoiakim then cut up and burned?",
    choices: ["Baruch", "Gehazi", "Ezra", "Nathan"],
    answer: 0,
    explanation: {
      textSays:
        "Jeremiah 36 says Baruch son of Neriah wrote Jeremiah's words as he dictated them. As the scroll was read to Jehoiakim by a winter fire, the king cut it with a knife and threw it into the brazier, piece by piece. Jeremiah then dictated it again, with more added (36:32).",
      world: "Scribes were trained professionals in Judah; ink letters on pottery from a few years later, such as the Lachish letters, show how they wrote.",
      theirEyes: "Officials watched in silence as the king burned a prophet's warning one strip at a time.",
      tradition: {
        jewish: "Second Temple Jewish writers linked new works to his name: the Book of Baruch, preserved in the Septuagint and usually dated to the 2nd or 1st century BCE, opens by presenting itself as words Baruch wrote in Babylon (Baruch 1:1).",
      },
    },
    confidence: "settled",
    references: ["Jeremiah 36:1–32"],
    sources: [scripture, { kind: "primary", citation: "Book of Baruch (Septuagint / Apocrypha) 1:1" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 5 ─────────────
  {
    id: "div-021",
    era: "divided-kingdom",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In his annals, Sennacherib boasts that he shut up Hezekiah in Jerusalem like what?",
    choices: ["A lion in a pit", "A bird in a cage", "A fish in a net", "A wolf in a trap"],
    answer: 1,
    explanation: {
      world:
        "Sennacherib's annals, on clay prisms such as the Taylor Prism, claim he took 46 walled towns of Judah and shut Hezekiah up “like a bird in a cage” in Jerusalem. They list heavy tribute but never claim the city was taken.",
      textSays:
        "2 Kings 18:13–16 agrees that Hezekiah paid tribute; 2 Kings 19:35–36 says the angel of Yahweh struck the Assyrian camp and Sennacherib went home.",
      theirEyes: "Inside the walls, people could see Assyrian campfires — and no one could get in or out.",
      debate: "Historians debate why Sennacherib withdrew without taking Jerusalem: Hezekiah's surrender of tribute, trouble elsewhere, or disease in the camp.",
    },
    confidence: "settled",
    references: ["2 Kings 18:13–16", "2 Kings 19:35–36", "Isaiah 36:1"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Taylor Prism of Sennacherib (British Museum, ME 91032)" },
      { kind: "primary", citation: "Sennacherib Prism, Oriental Institute (Institute for the Study of Ancient Cultures), Chicago" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-022",
    era: "divided-kingdom",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Two tiny silver scrolls from Ketef Hinnom, Jerusalem (c. 600 BCE), contain a version of which biblical passage?",
    choices: ["The Ten Commandments", "Psalm 23", "The Priestly Blessing", "The Shema"],
    answer: 2,
    explanation: {
      textSays:
        "Numbers 6:24–26 gives the blessing Aaron's sons were to speak: that Yahweh would bless and keep, make his face shine and give peace.",
      world:
        "Found in a burial cave by Gabriel Barkay's team in 1979 and now in the Israel Museum, the rolled-up amulets were worn for protection. They are widely called the oldest known texts that match a passage of the Hebrew Bible.",
      theirEyes: "Someone in Jerusalem wore these words rolled up around the neck, a blessing to carry everywhere — even to the grave.",
      debate:
        "Most scholars date them to about 600 BCE; a few have argued for a later date. Their existence shows the blessing was in use, not necessarily that the Book of Numbers was finished.",
    },
    confidence: "mainstream",
    references: ["Numbers 6:22–27"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Ketef Hinnom silver amulets KH1 and KH2 (Israel Museum, Jerusalem)" },
      {
        kind: "scholarship",
        citation: "G. Barkay et al., “The Amulets from Ketef Hinnom: A New Edition and Evaluation,” BASOR 334 (2004)",
      },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-023",
    era: "divided-kingdom",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Lachish Letter 4, an officer says he is watching for Lachish's fire signals because he can no longer see which town?",
    choices: ["Azekah", "Samaria", "Bethel", "Megiddo"],
    answer: 0,
    explanation: {
      textSays:
        "Jeremiah 34:7 describes Babylon's army fighting “against Lachish and against Azekah; for these alone remained of the cities of Judah as fortified cities.”",
      world:
        "The Lachish letters are ink-written potsherds (ostraca) found at Lachish in 1935 by J. L. Starkey. They are military messages from the last years before the Babylonian conquest of 586 BCE.",
      theirEyes: "One by one the hilltop beacons went dark, and a soldier wrote that he could no longer see Azekah's fire.",
      debate: "Many read this as a sign that Azekah had already fallen; others think the signal was simply out of sight.",
    },
    confidence: "settled",
    references: ["Jeremiah 34:6–7"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Lachish Ostracon 4 (Lachish Letters), excavated by J. L. Starkey, 1935" },
      { kind: "scholarship", citation: "H. Torczyner, Lachish I: The Lachish Letters (Oxford, 1938)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-024",
    era: "divided-kingdom",
    level: 5,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which Assyrian king boasted in his inscriptions of conquering Samaria and deporting 27,290 people?",
    choices: ["Nebuchadnezzar II", "Hammurabi", "Cyrus the Great", "Sargon II"],
    answer: 3,
    explanation: {
      textSays:
        "2 Kings 17:3–6 names Shalmaneser as the king who besieged Samaria, then says simply that the king of Assyria took it. Sargon is named in the Bible only in Isaiah 20:1.",
      world:
        "Sargon II's Nimrud Prism and palace inscriptions at Khorsabad claim the conquest of Samaria and give the number of deportees (27,290 or 27,280 in different copies). He also resettled other peoples in Samaria.",
      theirEyes: "An Assyrian scribe counted the captives like sacks of grain — each number a family leaving home.",
      debate:
        "Historians debate whether Shalmaneser V captured Samaria in 722 and Sargon II retook it after a revolt in 720, or whether Sargon claimed credit for his predecessor's work.",
    },
    confidence: "settled",
    references: ["2 Kings 17:3–6", "2 Kings 17:24", "Isaiah 20:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Sargon II, Nimrud Prism, and Khorsabad Annals and Great Summary Inscription" },
      { kind: "reference", citation: "“Sargon II,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-025",
    era: "divided-kingdom",
    level: 5,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: a Babylonian chronicle records Nebuchadnezzar capturing “the city of Judah” in 597 BCE.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "The Babylonian Chronicle for Nebuchadnezzar's early years says that in his seventh year he besieged “the city of Judah,” seized it on the 2nd of Adar (usually converted to 16 March 597 BCE), captured its king and appointed a king of his own choice. It is one of the few events in the biblical story that an outside source dates to the day.",
      textSays:
        "2 Kings 24:10–17 tells the same story: Jehoiachin is taken to Babylon and Nebuchadnezzar makes his uncle Mattaniah king, renaming him Zedekiah.",
      theirEyes: "Jerusalem's king, his mother and the city's craftsmen marched off to Babylon — a deportation of thousands (2 Kings 24:14–16).",
    },
    confidence: "settled",
    references: ["2 Kings 24:10–17"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "D. J. Wiseman, Chronicles of Chaldaean Kings (626–556 B.C.) in the British Museum (1956)" },
      { kind: "primary", citation: "Babylonian Chronicle ABC 5 (British Museum, BM 21946)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
