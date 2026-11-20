import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const dividedKingdom4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "div-076",
    era: "divided-kingdom",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Isaiah's call vision, a seraph touched his lips with a live coal from the altar. What had it used to take the coal?",
    choices: ["A golden censer", "Tongs", "A bronze shovel", "A priest's ladle"],
    answer: 1,
    explanation: {
      textSays:
        "Isaiah 6:6–7: “one of the seraphim flew to me, having a live coal in his hand, which he had taken with the tongs from off the altar. He touched my mouth with it, and said, ‘Behold, this has touched your lips; and your iniquity is taken away, and your sin forgiven.’” The vision is dated “in the year that King Uzziah died” (6:1).",
      world:
        "Seraph comes from a Hebrew root meaning “burn.” The same word is used for the venomous snakes of Numbers 21:6, so many scholars picture the seraphim as fiery, winged serpent-like beings.",
      theirEyes:
        "Isaiah had just cried that his lips were unclean; then a burning creature flew at him with fire from the altar.",
      tradition: {
        christian:
          "Revelation 4:8 gives the four living creatures six wings and the same cry, “Holy, holy, holy,” which entered Christian worship as the Sanctus.",
      },
    },
    confidence: "settled",
    references: ["Isaiah 6:1–7", "Numbers 21:6", "Revelation 4:8"],
    sources: [scripture, { kind: "reference", citation: "“Seraph,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-077",
    era: "divided-kingdom",
    level: 16,
    category: "tradition",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the prophecy that nations will “beat their swords into plowshares” appears, in nearly the same words, in both Isaiah and Micah.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Isaiah 2:4: “They shall beat their swords into plowshares, and their spears into pruning hooks. Nation shall not lift up sword against nation, neither shall they learn war any more.” Micah 4:3 has almost the same words, within a near-identical passage about all peoples streaming to “the mountain of Yahweh” (Isaiah 2:2–4; Micah 4:1–3).",
      world:
        "Isaiah and Micah were contemporaries in 8th-century Judah. A bronze statue of a man beating a sword into a plowshare, given by the Soviet Union in 1959, stands in the garden of the United Nations in New York.",
      theirEyes:
        "For farmers whose iron went to weapons in every crisis, a world where swords went back to the fields was a vivid dream of peace.",
      debate:
        "Scholars disagree whether Micah borrowed from Isaiah, Isaiah from Micah, or both from an older oracle; some date the passage after the exile.",
    },
    confidence: "settled",
    references: ["Isaiah 2:2–4", "Micah 4:1–4"],
    sources: [scripture, { kind: "reference", citation: "“Micah,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-078",
    era: "divided-kingdom",
    level: 16,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Micah 5:2 calls Bethlehem Ephrathah “small among the clans of Judah.” How does Matthew 2:6 word the same idea?",
    choices: [
      "“the smallest of all the towns”",
      "“least, but chosen above all”",
      "“in no way least among the princes of Judah”",
      "“humble, yet the house of bread”",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Micah 5:2 (5:1 in Hebrew Bibles): “But you, Bethlehem Ephrathah, being small among the clans of Judah, out of you one will come out to me who is to be ruler in Israel.” Matthew 2:6: “You Bethlehem, land of Judah, are in no way least among the princes of Judah; for out of you shall come a governor who shall shepherd my people, Israel.” Matthew's last line echoes 2 Samuel 5:2.",
      world:
        "In Micah's late 8th century BCE, Bethlehem was a minor village, known as David's family home.",
      theirEyes: "Micah promised a new David from a small clan town, not the proud capital.",
      tradition: {
        jewish: "John 7:42 records Jews in Jesus' day asking, “Hasn't the Scripture said that the Christ comes of the offspring of David, and from Bethlehem?”",
        christian: "Christians read Micah 5:2 as a prophecy of Jesus' birth in Bethlehem.",
      },
    },
    confidence: "settled",
    references: ["Micah 5:2", "Matthew 2:5–6", "2 Samuel 5:2", "John 7:42"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-079",
    era: "divided-kingdom",
    level: 16,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Micah, quoted by elders at Jeremiah's trial, warned that the Temple mount would become like what?",
    choices: [
      "A threshing floor for the nations",
      "The high places of a forest",
      "A dry salt marsh",
      "A pasture for wild donkeys",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Micah 3:12: “Zion for your sake will be plowed like a field, and Jerusalem will become heaps of rubble, and the mountain of the temple like the high places of a forest.” About a century later, elders quoted it almost word for word, naming “Micah the Morashtite” and King Hezekiah (Jeremiah 26:18).",
      world:
        "Micah came from Moresheth, a small town in the Judean lowlands. Jeremiah 26 is a rare case in the Hebrew Bible of one prophet's words being quoted by name, with the king of his day.",
      theirEyes:
        "Picture the Temple courts, crowded with worshippers, turned into scrubby wooded hilltops where no one comes.",
    },
    confidence: "settled",
    references: ["Micah 3:12", "Micah 1:1", "Jeremiah 26:17–19"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-080",
    era: "divided-kingdom",
    level: 16,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The coastal fort of Mesad Hashavyahu, where a harvester's Hebrew plea was found, also yielded much Greek pottery. What does that suggest?",
    choices: [
      "Greek mercenaries were stationed there",
      "It was a Greek-run temple to Apollo",
      "It was built after Alexander the Great",
      "Greek scribes wrote the Hebrew letters",
    ],
    answer: 0,
    explanation: {
      world:
        "Joseph Naveh excavated the small fort, about 1.7 km south of Yavneh-Yam, in 1960. Alongside Hebrew ostraca he found a large amount of East Greek pottery of the late 7th century BCE, so most scholars think Greek mercenaries served there. The fort was short-lived, probably abandoned around 609 BCE.",
      theirEyes:
        "On a lonely stretch of coast, Judean farm workers and Greek soldiers in foreign armour ate from very different dishes.",
      debate:
        "Who commanded the fort is debated: some, like Yohanan Aharoni, think Greeks served under Josiah of Judah; others, such as Alexander Fantalkin and Israel Finkelstein, think it was under Egyptian control in Psamtik I's time, with Judahites also serving there.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "archaeology", citation: "J. Naveh, “The Excavations at Mesad Hashavyahu: Preliminary Report,” Israel Exploration Journal 12 (1962)" },
      { kind: "scholarship", citation: "A. Fantalkin, “Mezad Hashavyahu: Its Material Culture and Historical Background,” Tel Aviv 28 (2001)" },
      { kind: "scholarship", citation: "I. Finkelstein and N. A. Silberman, The Bible Unearthed (2001)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "div-081",
    era: "divided-kingdom",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Zephaniah's book traces his ancestry back four generations. Which name stands at the top of the list?",
    choices: ["Jehu", "Isaiah", "Hezekiah", "Uzziah"],
    answer: 2,
    explanation: {
      textSays:
        "Zephaniah 1:1: “Yahweh's word which came to Zephaniah, the son of Cushi, the son of Gedaliah, the son of Amariah, the son of Hezekiah, in the days of Josiah, the son of Amon, king of Judah.” No other prophetic book traces its prophet's ancestry back so many generations.",
      world:
        "Zephaniah worked under Josiah (c. 640–609 BCE), in the years when Assyria's power was fading.",
      theirEyes:
        "A prophet with royal blood, if that is what the list means, was condemning “the princes, the king's sons” of his own city (1:8).",
      debate:
        "Many scholars think this Hezekiah is the king, which would make Zephaniah a distant relative of Josiah; others note that the verse does not call him king and the name was common.",
    },
    confidence: "settled",
    references: ["Zephaniah 1:1", "Zephaniah 1:8"],
    sources: [scripture, { kind: "reference", citation: "“Zephaniah,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-082",
    era: "divided-kingdom",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the medieval Latin hymn “Dies irae” takes its opening words from Zephaniah's description of the day of Yahweh.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Zephaniah 1:14–15: “The great day of Yahweh is near… That day is a day of wrath, a day of distress and anguish, a day of trouble and ruin, a day of darkness and gloom, a day of clouds and blackness.”",
      world:
        "Jerome's Latin Vulgate renders 1:15 as “dies irae dies illa” (“a day of wrath, that day”). The 13th-century hymn on the Last Judgement opens with those words; it was long sung in the Latin Requiem Mass and set by Mozart and Verdi.",
      theirEyes:
        "Zephaniah's hearers in Jerusalem expected the day of Yahweh to bring victory over their enemies; he warned it would fall on them first.",
      debate: "The hymn is traditionally attributed to Thomas of Celano, but its authorship is uncertain.",
    },
    confidence: "settled",
    references: ["Zephaniah 1:14–16"],
    sources: [
      scripture,
      { kind: "primary", citation: "Vulgate, Sophonias (Zephaniah) 1:15" },
      { kind: "reference", citation: "“Dies irae,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-083",
    era: "divided-kingdom",
    level: 17,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Nahum taunts Nineveh: “Are you better than No-Amon?”, a great city that had already fallen. Which city was No-Amon?",
    choices: ["Memphis", "Babylon", "Damascus", "Thebes"],
    answer: 3,
    explanation: {
      textSays:
        "Nahum 3:8–10: “Are you better than No-Amon, who was situated among the rivers, who had the waters around her…? Cush and Egypt were her boundless strength… Yet was she carried away. She went into captivity.”",
      world:
        "No-Amon means “city of Amun”: Thebes in Upper Egypt, on the Nile, centre of the god Amun's worship. Assyria's own army, under Ashurbanipal, sacked it in 664/663 BCE, as his annals boast. Nahum's point is sharp: Nineveh will suffer what it did to Thebes. The reference suggests the book was written after that sack, and its subject is Nineveh's fall in 612 BCE.",
      theirEyes:
        "Judeans had heard how even Egypt's holiest city, protected by the Nile, was plundered by Assyria; Nahum told them Nineveh's turn was coming.",
    },
    confidence: "settled",
    references: ["Nahum 3:8–10", "Nahum 1:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Ashurbanipal, Rassam Cylinder (Prism A), British Museum, account of his second Egyptian campaign and the capture of Thebes" },
      { kind: "reference", citation: "“Thebes,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-084",
    era: "divided-kingdom",
    level: 17,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to a Babylonian chronicle, which allies captured Nineveh, Assyria's capital, in 612 BCE?",
    choices: [
      "Egyptians and Persians",
      "Babylonians and Medes",
      "Lydians and Elamites",
      "Arameans and Egyptians",
    ],
    answer: 1,
    explanation: {
      world:
        "The “Fall of Nineveh Chronicle” records that in Nabopolassar's 14th year (612 BCE) the king of Babylon and Umakishtar (Cyaxares), king of the Umman-manda (usually understood as the Medes), besieged Nineveh, took it after about three months and plundered it. An Assyrian remnant held out at Harran, backed by Egypt, until 609. Egypt was Assyria's ally, not its enemy, and Elam had been crushed by Assyria decades earlier.",
      theirEyes:
        "For peoples who had paid Assyria tribute for over a century, news that Nineveh had fallen meant the end of a world.",
      tradition: {
        jewish:
          "The book of Tobit, from the Second Temple period, ends with Tobias hearing of Nineveh's destruction before he dies, though it names the conquerors as “Nebuchadnezzar and Ahasuerus” (Tobit 14:15).",
      },
    },
    confidence: "settled",
    references: ["Tobit 14:15"],
    sources: [
      scripture,
      { kind: "primary", citation: "Babylonian Chronicle ABC 3 (“Fall of Nineveh Chronicle”), British Museum, BM 21901" },
      { kind: "scholarship", citation: "A. K. Grayson, Assyrian and Babylonian Chronicles (1975)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-085",
    era: "divided-kingdom",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the book of Nahum names the Babylonians and Medes as the attackers who will destroy Nineveh.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Nahum never names Babylon, the Chaldeans or the Medes. The attacker is simply “he who dashes in pieces” (2:1; 2:2 in Hebrew), and the destruction is credited to Yahweh. Nahum 2:6 says “The gates of the rivers are opened, and the palace is dissolved.”",
      world:
        "The Babylonian chronicle names the attackers: Nabopolassar's Babylonians and Cyaxares' Medes, in 612 BCE. Greek writers (Diodorus, drawing on Ctesias) later told of a flood breaching Nineveh's walls, which some link to Nahum's “gates of the rivers.”",
      theirEyes:
        "To Nahum's audience the name of the conqueror hardly mattered; what mattered was that the city that had crushed so many would itself fall.",
    },
    confidence: "settled",
    references: ["Nahum 2:1", "Nahum 2:6", "Nahum 3:18"],
    sources: [
      scripture,
      { kind: "primary", citation: "Babylonian Chronicle ABC 3 (“Fall of Nineveh Chronicle”), British Museum, BM 21901" },
      { kind: "primary", citation: "Diodorus Siculus, Library of History 2.26–27" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "div-086",
    era: "divided-kingdom",
    level: 18,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Habakkuk stands at his watch, waiting for an answer to his complaint. What does God tell him to do with the vision?",
    choices: [
      "Seal it up until the time of the end",
      "Bury it in a clay jar at Anathoth",
      "Read it aloud to the king",
      "Write it plainly on tablets",
    ],
    answer: 3,
    explanation: {
      textSays:
        "After his complaint (1:2), in 2:1 he says, “I will stand at my watch and set myself on the ramparts.” The answer (2:2): “Write the vision, and make it plain on tablets, that he who runs may read it.” Sealing a vision until the end is Daniel 12:4.",
      world:
        "Habakkuk is set in the late 7th century BCE, as the Chaldeans (Babylonians) rose to power. Public writing on tablets or plastered surfaces was a way to make a message official and lasting.",
      theirEyes: "Like a sentry on the wall, the prophet waited to hear why injustice went unpunished.",
      tradition: {
        jewish:
          "The Qumran Habakkuk Commentary (1QpHab, col. 7) says God told Habakkuk to write what would happen to the last generation but did not reveal when the end would come; that, it says, was made known to the Teacher of Righteousness.",
      },
    },
    confidence: "settled",
    references: ["Habakkuk 1:2", "Habakkuk 2:1–2", "Daniel 12:4"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Pesher Habakkuk (1QpHab), col. 7, Qumran Cave 1; Shrine of the Book, Israel Museum" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-087",
    era: "divided-kingdom",
    level: 18,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to 2 Kings, how long did Manasseh reign in Jerusalem, the longest reign given for any king of Judah or Israel?",
    choices: ["29 years", "41 years", "52 years", "55 years"],
    answer: 3,
    explanation: {
      textSays:
        "2 Kings 21:1: “Manasseh was twelve years old when he began to reign, and he reigned fifty-five years in Jerusalem.” His father Hezekiah reigned 29 years (18:2), Uzziah (Azariah) 52 (15:2), and Jeroboam II of Israel 41 (14:23). Kings blames Manasseh for rebuilding the high places, setting up altars for Baal and shedding “innocent blood very much” (21:3, 16).",
      world:
        "Edwin Thiele's widely used chronology dates Manasseh 697–642 BCE, counting about ten years as co-regent with Hezekiah; other systems date his sole reign from about 687. His long reign coincided with Assyria at its height, and he appears as a loyal vassal in Assyrian records.",
      theirEyes:
        "Many in Judah lived their whole lives under one king, in a long, quiet peace bought by obedience to Assyria.",
    },
    confidence: "settled",
    references: ["2 Kings 21:1–3", "2 Kings 21:16", "2 Kings 18:2", "2 Kings 15:2", "2 Kings 14:23"],
    sources: [scripture, { kind: "reference", citation: "“Manasseh,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-088",
    era: "divided-kingdom",
    level: 18,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: 2 Kings, like 2 Chronicles, says Manasseh was taken captive to Babylon and repented there.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Only 2 Chronicles tells this: the Assyrian commanders “took Manasseh in chains, bound him with fetters, and carried him to Babylon.” There “he humbled himself greatly,” prayed, and was brought back to Jerusalem (2 Chronicles 33:11–13). 2 Kings 21 has no captivity and no repentance; it says Judah's later disaster came because of Manasseh's sins (2 Kings 24:3).",
      world:
        "Babylon was then under Assyrian rule. Some historians link the story to the revolt of Shamash-shum-ukin of Babylon (652–648 BCE), when Assyria may have called vassals to account.",
      theirEyes: "A vassal king summoned in chains before his overlord did not expect to see Jerusalem again.",
      debate:
        "Many scholars doubt the captivity is historical and see it as the Chronicler's explanation for Manasseh's long reign; others think it may preserve a real summons to Assyria.",
    },
    confidence: "settled",
    references: ["2 Chronicles 33:11–13", "2 Kings 21:1–18", "2 Kings 24:3"],
    sources: [scripture, { kind: "reference", citation: "“Manasseh,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-089",
    era: "divided-kingdom",
    level: 18,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which Assyrian king's prism lists “Manasseh, king of Judah” among 22 kings who sent building materials for his palace at Nineveh?",
    choices: ["Tiglath-pileser III", "Esarhaddon", "Shalmaneser III", "Sargon II"],
    answer: 1,
    explanation: {
      world:
        "Esarhaddon (ruled 681–669 BCE) lists 12 kings of the seacoast and 10 of Cyprus, “twenty-two kings of Hatti,” whom he made haul cedar and pine beams, stone slabs and colossal guardian statues to Nineveh for his palace. Manasseh of Judah is named next to the kings of Edom, Moab, Gaza, Ashkelon, Ekron and others. Ashurbanipal later names Manasseh among kings who supported his campaign against Egypt (667 BCE).",
      theirEyes: "Judean labourers and oxen dragged timber and stone hundreds of kilometres so that a foreign king could build at Nineveh.",
      textSays: "The Bible does not mention this; 2 Kings 21 focuses only on Manasseh's religious policy.",
    },
    confidence: "settled",
    references: ["2 Kings 21:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Esarhaddon, Prism B, trans. A. L. Oppenheim, in J. B. Pritchard, ed., Ancient Near Eastern Texts (ANET, 3rd ed.), p. 291" },
      { kind: "primary", citation: "Ashurbanipal, Prism C, list of tributary kings (ANET p. 294)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-090",
    era: "divided-kingdom",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the deuterocanonical Prayer of Manasseh, the king says God did not appoint repentance for whom, because they had not sinned?",
    choices: ["Moses and Aaron", "David and Solomon", "Abraham, Isaac and Jacob", "Elijah and Elisha"],
    answer: 2,
    explanation: {
      textSays:
        "Prayer of Manasseh 8, addressed to God: “you… have not appointed repentance to the just, to Abraham, Isaac, and Jacob, which have not sinned against you, but you have appointed repentance to me, a sinner.” 2 Chronicles 33:18–19 mentions his prayer but gives no words.",
      world:
        "The prayer survives in Greek and was probably composed in the last centuries BCE or the 1st century CE. It appears in the 3rd-century Didascalia Apostolorum and among the Odes in some Septuagint manuscripts.",
      theirEyes: "Writers imagined the words Judah's worst king might have said in chains.",
      tradition: {
        jewish: "A different Hebrew prayer headed as Manasseh's, “when the king of Assyria imprisoned him,” survives among the Dead Sea Scrolls (4Q381).",
        christian: "Eastern Orthodox Bibles include the prayer among the Odes of their Old Testament; Catholic Vulgate editions place it in an appendix, and Protestant Bibles in the Apocrypha.",
      },
    },
    confidence: "settled",
    references: ["Prayer of Manasseh 8", "2 Chronicles 33:18–19"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "E. M. Schuller, Non-Canonical Psalms from Qumran (1986), on 4Q381" },
      { kind: "reference", citation: "“Prayer of Manasseh,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "div-091",
    era: "divided-kingdom",
    level: 19,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "2 Chronicles says no Passover like Josiah's had been kept in Israel since the days of whom?",
    choices: ["Solomon", "Samuel the prophet", "Moses", "David"],
    answer: 1,
    explanation: {
      textSays:
        "2 Chronicles 35:18: “There was no Passover like that kept in Israel from the days of Samuel the prophet.” 2 Kings 23:22 says “from the days of the judges.” Both date it to Josiah's 18th year (2 Kings 23:23; 2 Chronicles 35:19). Josiah gave 30,000 lambs and young goats and 3,000 bulls from his own flocks (35:7). Solomon is the comparison Chronicles uses for Hezekiah's Passover (30:26).",
      world: "Josiah's 18th year is usually dated about 622 BCE, the same year the book of the law was found.",
      theirEyes: "For once, the whole nation ate the Passover together in Jerusalem rather than in village shrines.",
      tradition: {
        jewish: "1 Esdras, a Greek retelling from the Second Temple period, repeats it: “Such a Passover had not been held in Israel since the time of the prophet Samuel” (1 Esdras 1:20).",
      },
    },
    confidence: "settled",
    references: ["2 Chronicles 35:7", "2 Chronicles 35:18–19", "2 Kings 23:21–23", "2 Chronicles 30:26", "1 Esdras 1:20"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-092",
    era: "divided-kingdom",
    level: 19,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jeremiah says to weep for the king who “goes away” and will die in captivity. By what name does he call Josiah's son Jehoahaz?",
    choices: ["Coniah", "Mattaniah", "Eliakim", "Shallum"],
    answer: 3,
    explanation: {
      textSays:
        "Jeremiah 22:10–11: “weep bitterly for him who goes away, for he will return no more… Shallum the son of Josiah, king of Judah, who reigned instead of Josiah his father.” 1 Chronicles 3:15 also lists Shallum as Josiah's son. 2 Kings 23:31–34 says Jehoahaz reigned three months; Pharaoh Necoh took him away, “and he came to Egypt and died there.”",
      world:
        "The other names belong to other kings: Eliakim was renamed Jehoiakim by Necoh (2 Kings 23:34), Mattaniah was renamed Zedekiah by Nebuchadnezzar (24:17), and Coniah is Jeremiah's name for Jehoiachin (Jeremiah 22:24).",
      theirEyes:
        "Judah had chosen Jehoahaz itself after Josiah's death; within three months he was led off to Egypt and never seen again.",
      debate: "Many scholars take Shallum as his personal name and Jehoahaz as his throne name.",
    },
    confidence: "settled",
    references: ["Jeremiah 22:10–12", "1 Chronicles 3:15", "2 Kings 23:31–34", "2 Kings 24:17", "Jeremiah 22:24"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-093",
    era: "divided-kingdom",
    level: 19,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "When Babylon crushed Egypt's army at Carchemish in 605 BCE, who led the Babylonian army, according to the Babylonian Chronicle?",
    choices: [
      "Crown prince Nebuchadnezzar, while his father stayed home",
      "King Nabopolassar in person, with his son left in Babylon",
      "The Median king Cyaxares",
      "Nabonidus, later Babylon's last king",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Jeremiah 46:2 dates the battle: Pharaoh Necoh's army “was by the river Euphrates in Carchemish, which Nebuchadnezzar king of Babylon struck in the fourth year of Jehoiakim the son of Josiah, king of Judah.” 2 Kings 24:7 says afterwards Egypt's king “didn't come out of his land any more.”",
      world:
        "The chronicle says that in his 21st year Nabopolassar stayed in his own land while his eldest son, the crown prince Nebuchadnezzar, marched to Carchemish on the Euphrates and defeated the Egyptians. Later that summer Nabopolassar died (on 8 Abu), and Nebuchadnezzar hurried back to take the throne in 605 BCE.",
      theirEyes:
        "In Jerusalem, King Jehoiakim had been put on the throne by Egypt; now Egypt's army was broken and a young Babylonian conqueror was heading south.",
    },
    confidence: "settled",
    references: ["Jeremiah 46:2", "2 Kings 24:7"],
    sources: [
      scripture,
      { kind: "primary", citation: "Babylonian Chronicle ABC 5 (Chronicle of the Early Years of Nebuchadnezzar II), British Museum, BM 21946" },
      { kind: "scholarship", citation: "D. J. Wiseman, Chronicles of Chaldaean Kings (626–556 B.C.) in the British Museum (1956)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-094",
    era: "divided-kingdom",
    level: 19,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jeremiah hid his linen belt by “Perath,” usually the Euphrates. Which nearby place have some scholars proposed instead?",
    choices: [
      "The Gihon spring in Jerusalem",
      "Parah, a spring in the Wadi Qelt near Anathoth",
      "The springs of En-gedi",
      "The Pool of Siloam",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Jeremiah 13:1–7: “buy yourself a linen belt… go to the Euphrates, and hide it there in a cleft of the rock.” After many days he dug it up and “the belt was ruined. It was profitable for nothing.” God explains that Judah, made to cling to him like a belt, has become “profitable for nothing” (13:10–11).",
      world:
        "The Hebrew Perath is the normal name of the Euphrates. Parah, a town of Benjamin (Joshua 18:23), lies by a strong spring ('Ain Farah, today Ein Prat) about 5–6 km from Jeremiah's home village of Anathoth. A round trip to the Euphrates would have been over 1,000 km.",
      theirEyes: "Neighbours might have watched the prophet come back with a rotten belt as his sermon.",
      debate:
        "Some take the Euphrates journeys literally; others suggest Parah, whose name echoes the Euphrates; others see a vision or parable.",
    },
    confidence: "debated",
    references: ["Jeremiah 13:1–11", "Joshua 18:23", "Jeremiah 1:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "W. L. Holladay, Jeremiah 1 (Hermeneia, 1986), on Jeremiah 13:1–11" },
      { kind: "reference", citation: "NET Bible, note on Jeremiah 13:4 (citing Holladay and W. McKane, who take opposite positions)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-095",
    era: "divided-kingdom",
    level: 19,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "At the potter's house, Jeremiah saw him working “on the wheels.” The Hebrew word literally means a pair of what?",
    choices: ["Stones", "Feet", "Hands", "Logs"],
    answer: 0,
    explanation: {
      textSays:
        "Jeremiah 18:3–6: “he was making something on the wheels. When the vessel that he made of the clay was marred in the hand of the potter, he made it again another vessel… as the clay in the potter's hand, so are you in my hand, house of Israel.”",
      world:
        "The Hebrew obnayim is the dual form of even, “stone”: a pair of stones. Potter's wheels of the period were two stone discs, a fixed lower one with a pivot and an upper one that turned. The same word means the “birth stool” in Exodus 1:16.",
      theirEyes:
        "In a workshop by the city, the potter squashed a lopsided pot back into a lump and started again, while the prophet watched.",
    },
    confidence: "mainstream",
    references: ["Jeremiah 18:1–6", "Exodus 1:16"],
    sources: [
      scripture,
      { kind: "reference", citation: "F. Brown, S. R. Driver and C. A. Briggs, A Hebrew and English Lexicon of the Old Testament, “ʾobnayim”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "div-096",
    era: "divided-kingdom",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Hebrews 8 quotes Jeremiah's new covenant. Where Jeremiah 31:32 has God say “I was a husband to them,” what does Hebrews say?",
    choices: ["“I forgave them”", "“I disregarded them”", "“I wrote it on stone for them”", "“I sent them my prophets”"],
    answer: 1,
    explanation: {
      textSays:
        "Jeremiah 31:31–32: “I will make a new covenant with the house of Israel, and with the house of Judah, not according to the covenant that I made with their fathers… which covenant of mine they broke, although I was a husband to them.” Hebrews 8:9 reads: “for they didn't continue in my covenant, and I disregarded them.”",
      world:
        "Hebrews quotes the Greek Septuagint, where this passage is Jeremiah 38:31–34 and reads “I disregarded them.” The Septuagint's Jeremiah is shorter and ordered differently.",
      theirEyes:
        "With the covenant seemingly broken, Jeremiah promised a law written “in their heart.”",
      tradition: {
        jewish: "The Damascus Document from Qumran speaks of those who entered “the new covenant in the land of Damascus” (CD 6:19).",
        christian: "Christians link the new covenant with Jesus' words at the Last Supper (Luke 22:20) and read Hebrews 8 as its fulfilment.",
      },
    },
    confidence: "settled",
    references: ["Jeremiah 31:31–34", "Hebrews 8:8–13", "Luke 22:20"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Jeremiah 38:31–34 (Rahlfs)" },
      { kind: "primary", citation: "Damascus Document (CD) 6:19" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-097",
    era: "divided-kingdom",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jeremiah was told to smash a potter's clay flask in the Hinnom Valley. By the entry of which gate was that valley?",
    choices: ["The Fish Gate", "The Sheep Gate", "The Harsith gate", "The Water Gate"],
    answer: 2,
    explanation: {
      textSays:
        "Jeremiah 19:1–2: “buy a potter's earthen container… and go out to the valley of the son of Hinnom, which is by the entry of the gate Harsith.” Then (19:10–11): “break the container in the sight of the men who go with you… Even so I will break this people and this city as one breaks a potter's vessel, that can't be made whole again.”",
      world:
        "Harsith is usually explained as “potsherd,” so many translations call it the Potsherd Gate, perhaps where broken pottery was dumped. Unlike the soft clay at the potter's wheel in Jeremiah 18, a fired flask could not be reshaped.",
      theirEyes: "The elders who followed him heard the crack of the jar and saw the shards fall among the rubbish heaps below the city.",
    },
    confidence: "settled",
    references: ["Jeremiah 19:1–2", "Jeremiah 19:10–11"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-098",
    era: "divided-kingdom",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "At el-Jib (Gibeon), James Pritchard found over 60 jar handles inscribed “gb'n” and rock-cut cellars. What industry did they point to?",
    choices: ["Purple dye", "Copper smelting", "Papyrus making", "Winemaking"],
    answer: 3,
    explanation: {
      world:
        "Pritchard's University of Pennsylvania expedition (1956–1962) found 56 inscribed handles in 1956–57, and more later, in the debris that had washed into Gibeon's great rock-cut pool. Most read gb'n gdr, “Gibeon” plus a word he took as “walled vineyard,” followed by a personal name such as Amariah or Azariah. With wine presses, fermenting vats and rock-cut cellars that kept jars at a cool, steady temperature, he concluded Gibeon was a major wine producer in the late Iron Age.",
      textSays: "Gibeon was also the home of the prophet Hananiah, who confronted Jeremiah in Zedekiah's fourth year, about 594/593 BCE (Jeremiah 28:1).",
      theirEyes: "In autumn, the hill of Gibeon smelled of crushed grapes as jars were sealed, labelled and lowered into the cool rock.",
      debate:
        "The date of the inscribed handles (8th–6th century BCE) and the meaning of gdr are debated.",
    },
    confidence: "mainstream",
    references: ["Jeremiah 28:1"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "J. B. Pritchard, Hebrew Inscriptions and Stamps from Gibeon (University of Pennsylvania Museum, 1959)" },
      { kind: "scholarship", citation: "J. B. Pritchard, Gibeon: Where the Sun Stood Still (1962)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-099",
    era: "divided-kingdom",
    level: 20,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Under Assyrian rule in the 7th century BCE, the Philistine city of Ekron (Tel Miqne) became a huge centre for producing what?",
    choices: ["Olive oil", "Glass", "Iron weapons", "Papyrus"],
    answer: 0,
    explanation: {
      world:
        "Excavations led by Trude Dothan and Seymour Gitin (1981–1996), with a survey, identified about 115 olive-oil installations in 7th-century Ekron, mostly in a belt of buildings near the city wall, with crushing basins and beam presses. Estimates of output run to at least 500 tons of oil a year, making it one of the largest oil-production centres known from the ancient Near East. The industry flourished under the Assyrian peace and ended when Babylon destroyed the city in 604 BCE.",
      theirEyes:
        "Each autumn, olives from the hills of Judah and the coastal plain poured into Ekron's presses, and oil flowed out to markets across the empire.",
      textSays:
        "Jeremiah names Ekron, with Ashkelon, Gaza and “the remnant of Ashdod,” among those who must drink the cup of God's wrath (Jeremiah 25:17–20).",
    },
    confidence: "settled",
    references: ["Jeremiah 25:17–20"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "S. Gitin, “Ekron of the Philistines, Part II: Olive-Oil Suppliers to the World,” Biblical Archaeology Review 16:2 (1990)" },
      { kind: "reference", citation: "“Miqne, Tel (Ekron),” The New Encyclopedia of Archaeological Excavations in the Holy Land" },
      { kind: "reference", citation: "“Ekron,” Jewish Virtual Library (Archaeology in Israel)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-100",
    era: "divided-kingdom",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A 1996 inscription from Ekron names the temple's builder, “Achish son of Padi.” Where else are these Ekron kings named?",
    choices: [
      "In the Amarna letters to Pharaoh",
      "In Assyrian royal annals",
      "On the Merneptah Stele",
      "In Herodotus' Histories",
    ],
    answer: 1,
    explanation: {
      world:
        "The Ekron Royal Dedicatory Inscription, found in its original place in a large temple complex (Temple Complex 650), reads that Achish son of Padi, ruler of Ekron, built the temple for “his lady,” a goddess whose name is usually read Ptgyh (the reading is disputed), and lists his ancestors back to Ya'ir. Sennacherib's annals say Padi, Assyria's loyal king of Ekron, was handed over to Hezekiah and held in Jerusalem until Sennacherib restored him in 701 BCE. Esarhaddon and Ashurbanipal name Ikausu (Achish) of Ekron among their vassal kings, alongside Manasseh of Judah. The Amarna letters and the Merneptah Stele are centuries older.",
      theirEyes: "A Philistine king carved his family tree in stone, proud of the names his Assyrian masters also knew.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "S. Gitin, T. Dothan and J. Naveh, “A Royal Dedicatory Inscription from Ekron,” Israel Exploration Journal 47 (1997)" },
      { kind: "primary", citation: "Sennacherib, annals (Taylor Prism / Chicago Prism), account of the 701 BCE campaign" },
      { kind: "primary", citation: "Esarhaddon, Nineveh Prism (Prism B), ANET p. 291" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
