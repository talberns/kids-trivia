import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const persian1: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "per-001",
    era: "persian",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Ezra 1:1 says Cyrus' decree fulfilled the word of which prophet?",
    choices: ["Elijah", "Jonah", "Jeremiah", "Amos"],
    answer: 2,
    explanation: {
      textSays:
        "Ezra 1:1 opens “in the first year of Cyrus king of Persia, that Yahweh’s word by Jeremiah’s mouth might be accomplished.” Jeremiah had spoken of seventy years for Babylon, after which God would bring the exiles back “to this place” (Jeremiah 25:11–12; 29:10).",
      world:
        "Cyrus took Babylon in 539 BCE, so his first year as king of Babylon is usually dated 539/538 BCE. Elijah and Amos were earlier prophets who preached in the northern kingdom (Amos came from Tekoa in Judah), and Jonah was sent to Nineveh.",
      theirEyes:
        "Exiles who had grown up hearing Jeremiah's “seventy years” now heard a royal herald and wondered: had the time really come?",
      tradition: {
        shared:
          "Daniel 9:2 has Daniel studying the seventy years that Yahweh's word to Jeremiah had foretold, and 2 Chronicles 36:21–23 likewise links Cyrus' decree to Jeremiah's prophecy.",
      },
    },
    confidence: "settled",
    references: ["Ezra 1:1", "Jeremiah 25:11–12", "Jeremiah 29:10", "Daniel 9:2", "2 Chronicles 36:21–23"],
    sources: [scripture, { kind: "primary", citation: "Nabonidus Chronicle (ABC 7), British Museum BM 35382" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-002",
    era: "persian",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Ezra 1, what did Cyrus send back to Jerusalem with the returning exiles?",
    choices: [
      "The Ark of the Covenant",
      "The gold and silver vessels taken from the Temple",
      "Goliath's sword",
      "King David's crown",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Ezra 1:7–11: Cyrus brought out “the vessels of Yahweh’s house, which Nebuchadnezzar had brought out of Jerusalem, and had put in the house of his gods.” The list includes gold and silver platters, bowls and knives, “five thousand four hundred” in all.",
      world:
        "Ancient conquerors carried off temple treasures and placed them in their own temples as trophies, so returning them was a public act of royal favour. The Ark of the Covenant is never mentioned among the returned items, and the Second Temple had no Ark.",
      theirEyes:
        "Families walking home from Babylon carried, among their bundles, bowls their great-grandparents had last seen in Solomon's Temple.",
      tradition: {
        jewish:
          "2 Maccabees 2:4–8 preserves a tradition that Jeremiah hid the Ark, the tent and the incense altar in a cave, to stay hidden until God gathers his people again.",
      },
    },
    confidence: "settled",
    references: ["Ezra 1:7–11", "Ezra 6:5", "2 Maccabees 2:4–8"],
    sources: [scripture, { kind: "primary", citation: "2 Maccabees 2:4–8" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-003",
    era: "persian",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: the returned exiles rebuilt the altar and offered sacrifices before the Temple's foundation was laid.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Ezra 3:2–6: Jeshua and Zerubbabel built the altar “to offer burnt offerings on it, as it is written in the law of Moses,” and sacrifices began on the first day of the seventh month, “but the foundation of Yahweh’s temple was not yet laid.” The foundation came in the second year (Ezra 3:8–10).",
      world:
        "The altar was set “on its base,” on the old sacred site. Restarting the daily morning and evening offerings mattered more than having a finished building.",
      theirEyes:
        "Amid the ruins and rubble, smoke rose again from the Temple mount morning and evening, even though no walls stood around the altar yet.",
    },
    confidence: "settled",
    references: ["Ezra 3:2–6", "Ezra 3:8–10"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-004",
    era: "persian",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "After rebuilding the altar in the seventh month, which festival did the returned exiles keep, according to Ezra 3?",
    choices: ["Hanukkah", "Purim", "Shavuot (Weeks)", "Sukkot (Booths)"],
    answer: 3,
    explanation: {
      textSays:
        "Ezra 3:4 says they kept the feast of booths, “as it is written, and offered the daily burnt offerings by number, according to the ordinance.” The numbered offerings for each day of the feast are set out in Numbers 29:12–38.",
      world:
        "Sukkot falls in the seventh month, at the autumn harvest (Leviticus 23:33–43), so the timing fits Ezra 3:1–6. Shavuot comes in early summer, and Purim and Hanukkah did not yet exist: Purim comes from the Esther story and Hanukkah from the Maccabean revolt of the 160s BCE.",
      theirEyes:
        "Living in temporary shelters among the ruins, the returnees hardly needed reminding that booths recalled a people on the move.",
    },
    confidence: "settled",
    references: ["Ezra 3:1–6", "Numbers 29:12–38", "Leviticus 23:33–43"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-005",
    era: "persian",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Who was the high priest who worked alongside Zerubbabel to rebuild the Temple?",
    choices: ["Eli", "Joshua (Jeshua) son of Jozadak", "Caiaphas", "Aaron"],
    answer: 1,
    explanation: {
      textSays:
        "Haggai 1:1 addresses “Joshua the son of Jehozadak, the high priest.” Ezra uses the shorter form Jeshua: “Jeshua the son of Jozadak stood up with his brothers the priests” to build the altar (Ezra 3:2).",
      world:
        "Joshua and Jeshua are two forms of the same Hebrew name (the source of the Greek name Iēsous, Jesus). 1 Chronicles 6:15 (5:41 in Hebrew) names Jehozadak as the priest taken into exile by Nebuchadnezzar. Aaron, Eli and Caiaphas lived centuries before or after.",
      theirEyes:
        "With no king on the throne, the people looked to two leaders side by side: a governor from David's line and a high priest from the old priestly family.",
    },
    confidence: "settled",
    references: ["Haggai 1:1", "Ezra 3:2", "1 Chronicles 6:15"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "per-006",
    era: "persian",
    level: 2,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ezra 3 says people of Sidon and Tyre brought cedar from Lebanon by sea to which port for the new Temple?",
    choices: ["Gaza", "Acco", "Ezion-geber", "Joppa"],
    answer: 3,
    explanation: {
      textSays:
        "Ezra 3:7: they “gave food, drink, and oil to the people of Sidon and Tyre to bring cedar trees from Lebanon to the sea, to Joppa, according to the grant that they had from Cyrus King of Persia.”",
      world:
        "Joppa (modern Jaffa, in Tel Aviv) was the nearest good harbour to Jerusalem. The arrangement echoes Solomon's deal with Hiram of Tyre, paid in wheat and oil (1 Kings 5:1–11; 5:15–25 in Hebrew numbering), and 2 Chronicles 2:16 already names Joppa as the timber port. In the Persian period the Phoenician cities of Sidon and Tyre were themselves subjects of the Persian king.",
      theirEyes:
        "Workmen at Joppa watched rafts of fragrant cedar bump against the shore, then faced the long haul up into the hills to Jerusalem.",
    },
    confidence: "settled",
    references: ["Ezra 3:7", "1 Kings 5:1–11", "2 Chronicles 2:16"],
    sources: [scripture, { kind: "primary", citation: "Herodotus, Histories 3.91 (Phoenicia in the fifth Persian tax district)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-007",
    era: "persian",
    level: 2,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Complete Zechariah's message to Zerubbabel: “Not by might, nor by power, but by my…”",
    choices: ["Sword", "Spirit", "Gold", "Law"],
    answer: 1,
    explanation: {
      textSays:
        "Zechariah 4:6: “This is Yahweh’s word to Zerubbabel, saying, ‘Not by might, nor by power, but by my Spirit,’ says Yahweh of Armies.” The next verses promise that the “great mountain” before Zerubbabel will become a plain and that his hands will finish the house (4:7–9).",
      world:
        "Zerubbabel had no army and served a Persian king. Zechariah's visions are dated to the second year of Darius I, around 520–519 BCE, when the rebuilding had just restarted.",
      theirEyes:
        "A governor with a handful of builders and no soldiers heard that the Temple would not depend on armies or treasure.",
    },
    confidence: "settled",
    references: ["Zechariah 4:6–9", "Zechariah 1:7"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-008",
    era: "persian",
    level: 2,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Haggai's final prophecy, God promises to make Zerubbabel like what?",
    choices: ["A cedar of Lebanon", "A signet ring", "A shepherd's staff", "A crown of gold"],
    answer: 1,
    explanation: {
      textSays:
        "Haggai 2:23: God says he will take Zerubbabel “my servant” and make him like a signet ring, “for I have chosen you.” It reverses Jeremiah 22:24, where God says that even if Coniah (Jehoiachin), Zerubbabel's grandfather, were “the signet on my right hand,” he would pull him off. (Haggai calls Zerubbabel “the son of Shealtiel,” Jehoiachin's son; 1 Chronicles 3:17–19 in Hebrew makes him the son of Shealtiel's brother Pedaiah, but either way Jehoiachin is his grandfather.)",
      world:
        "A signet ring carried its owner's seal and was used to sign and authorise documents, so it stood for the owner's authority. Large numbers of stamp seals and clay sealings survive from the ancient Near East.",
      theirEyes:
        "Listeners who knew Jeremiah's words about the rejected king heard the old curse on David's line being turned around.",
      debate:
        "Scholars debate whether Haggai expected Zerubbabel to restore the monarchy; nothing in the sources says he ever ruled as king.",
    },
    confidence: "settled",
    references: ["Haggai 2:20–23", "Jeremiah 22:24", "1 Chronicles 3:17–19"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-009",
    era: "persian",
    level: 2,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Zechariah pictures old people with walking sticks in Jerusalem's future streets. Who else fills the streets?",
    choices: ["Boys and girls playing", "Chariots of war", "Persian tax collectors", "Mourners in sackcloth"],
    answer: 0,
    explanation: {
      textSays:
        "Zechariah 8:4–5: “Old men and old women will again dwell in the streets of Jerusalem, every man with his staff in his hand because of their old age. The streets of the city will be full of boys and girls playing in its streets.”",
      world:
        "Persian-period Jerusalem was small and thinly settled. Excavators find only a modest town there, so a city crowded with old and young was a picture of hope rather than a description.",
      theirEyes:
        "In a half-empty city of rubble, the promise was simple: grandparents living to old age and children safe enough to play outside.",
    },
    confidence: "settled",
    references: ["Zechariah 8:4–5"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Oded Lipschits, “Persian Period Finds from Jerusalem: Facts and Interpretations,” Journal of Hebrew Scriptures 9 (2009)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-010",
    era: "persian",
    level: 2,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Ezra 2 counts the animals the returnees brought. Which kind was the most numerous?",
    choices: ["Horses", "Camels", "Donkeys", "Mules"],
    answer: 2,
    explanation: {
      textSays:
        "Ezra 2:66–67: “Their horses were seven hundred thirty-six; their mules, two hundred forty-five; their camels, four hundred thirty-five; their donkeys, six thousand seven hundred twenty.” Nehemiah 7:68–69 repeats the list (the standard Hebrew text lacks the horses-and-mules verse, so English 7:69 is Hebrew 7:68).",
      world:
        "Donkeys were the everyday pack animals of the ancient Near East: cheap, sure-footed and able to carry loads on hill roads. Horses and mules were costlier animals for the well-off and officials, and camels suited long desert routes.",
      theirEyes:
        "The road from Babylon was a slow parade of heavily loaded donkeys, with only the occasional horse or camel among them.",
    },
    confidence: "settled",
    references: ["Ezra 2:66–67", "Nehemiah 7:68–69"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "per-011",
    era: "persian",
    level: 3,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The local people who offered to help build the Temple said they had worshipped Israel's God since the days of which Assyrian king?",
    choices: ["Esarhaddon", "Nebuchadnezzar", "Cyrus", "Pharaoh Necho"],
    answer: 0,
    explanation: {
      textSays:
        "Ezra 4:2: “Let us build with you, for we seek your God as you do; and we have been sacrificing to him since the days of Esar Haddon king of Assyria, who brought us up here.” 2 Kings 17:24 describes Assyria settling foreign peoples in Samaria.",
      world:
        "Esarhaddon ruled Assyria from 681 to 669 BCE. Nebuchadnezzar was Babylonian, Cyrus Persian and Necho Egyptian.",
      theirEyes:
        "Neighbours who had lived in the land for generations saw the newcomers from Babylon building, and wanted a share in the work.",
      tradition: {
        jewish:
          "Josephus retells the scene with the Samaritans, who name Shalmaneser instead of Esarhaddon as the Assyrian king who brought them. He has Zerubbabel refuse them a share in the building but allow them to come and worship (Antiquities 11.4.3).",
      },
    },
    confidence: "settled",
    references: ["Ezra 4:1–3", "2 Kings 17:24"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.4.3 (Whiston numbering)" },
      { kind: "reference", citation: "“Esarhaddon,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-012",
    era: "persian",
    level: 3,
    category: "story",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Zerubbabel and Jeshua accepted their neighbours' offer to help build the Temple.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Ezra 4:3: “You have nothing to do with us in building a house to our God; but we ourselves together will build to Yahweh, the God of Israel, as King Cyrus the king of Persia has commanded us.” The “people of the land” then troubled the builders and hired counsellors against them (4:4–5).",
      world:
        "The refusal pointed to the wording of Cyrus' permission, which was addressed to the returning exiles. The tension between Jerusalem and its northern neighbours in Samaria runs on through Ezra and Nehemiah.",
      theirEyes:
        "For the returnees, letting outsiders help build meant letting them help decide whose Temple it was.",
    },
    confidence: "settled",
    references: ["Ezra 4:1–5"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-013",
    era: "persian",
    level: 3,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Zechariah sees a giant flying scroll carrying a curse. Against whom is the curse aimed?",
    choices: [
      "Thieves and people who swear falsely",
      "Foreign kings who attack Jerusalem",
      "Priests who offer blemished animals",
      "People who work on the Sabbath",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Zechariah 5:1–4: the scroll is “twenty cubits, and its width ten cubits.” It is “the curse that goes out over the surface of the whole land, for everyone who steals… and everyone who swears falsely,” and it enters the thief's house and destroys it.",
      world:
        "Twenty by ten cubits is about 9 by 4.5 metres. Theft and false oaths broke two of the Ten Commandments (Exodus 20:7, 20:15; traditions number them differently), and in a small farming province they also wrecked trust between neighbours.",
      theirEyes:
        "Imagine a scroll as big as a house sailing overhead, its writing aimed straight at the neighbour who stole from you and lied about it under oath.",
    },
    confidence: "settled",
    references: ["Zechariah 5:1–4", "Exodus 20:7", "Exodus 20:15"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-014",
    era: "persian",
    level: 3,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Zechariah's vision of a golden lampstand, what stands on either side of it?",
    choices: ["Two cherubim", "Two lions", "Two bronze pillars", "Two olive trees"],
    answer: 3,
    explanation: {
      textSays:
        "Zechariah 4:2–3 describes “a lamp stand all of gold” with seven lamps, “and two olive trees by it, one on the right side of the bowl, and the other on the left side of it.” The angel calls them “the two anointed ones who stand by the Lord of the whole earth” (4:14).",
      world:
        "Lamps burned olive oil, so the trees picture a never-ending supply. Many commentators take the two “anointed ones” (literally “sons of oil”) as Zerubbabel and Joshua the high priest.",
      theirEyes:
        "Every household knew the work of pressing olives to fill lamps; here was a lamp that never needed refilling.",
      tradition: {
        christian:
          "Revelation 11:4 borrows the image for its two witnesses: “These are the two olive trees and the two lamp stands, standing before the Lord of the earth.”",
      },
    },
    confidence: "settled",
    references: ["Zechariah 4:2–3", "Zechariah 4:11–14", "Revelation 11:4"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-015",
    era: "persian",
    level: 3,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Ezra 1, to whom did Cyrus' treasurer Mithredath count out the Temple vessels?",
    choices: ["Daniel", "Mordecai", "Sheshbazzar", "Nehemiah"],
    answer: 2,
    explanation: {
      textSays:
        "Ezra 1:8: Cyrus brought them out “by the hand of Mithredath the treasurer, and counted them out to Sheshbazzar the prince of Judah.” Ezra 5:14–16 adds that Cyrus made Sheshbazzar governor and that he “laid the foundations of God’s house.”",
      world:
        "Mithredath is a Persian name (“given by Mithra”), while Sheshbazzar is probably Babylonian. Ezra 1:9–11 lists the handover item by item, like an inventory.",
      theirEyes:
        "A Persian official read out the list, platter by platter, and a Judean leader signed for treasures his people had not seen for half a century.",
      debate:
        "Ezra 3:8–10 credits the foundation to Zerubbabel and Jeshua, but 5:16 credits Sheshbazzar. Some interpreters, especially older ones, identify the two men; many modern historians treat Sheshbazzar as an earlier, separate leader. The text never says which.",
    },
    confidence: "settled",
    references: ["Ezra 1:8–11", "Ezra 5:14–16", "Ezra 3:8–10"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Lester L. Grabbe, A History of the Jews and Judaism in the Second Temple Period, vol. 1: Yehud (T&T Clark, 2004)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 4 ─────────────
  {
    id: "per-016",
    era: "persian",
    level: 4,
    category: "neighbours",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Rehum's letter warned the Persian king that a rebuilt, walled Jerusalem would stop paying tribute.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Ezra 4:13: “if this city is built and the walls finished, they will not pay tribute, custom, or toll, and in the end it will be hurtful to the kings.” The writers urged a search of the royal records to prove Jerusalem was “a rebellious city” (4:15), and the king ordered the work stopped (4:21–23).",
      world:
        "The letter is placed under Artaxerxes, a later king than Darius, and concerns the city walls rather than the Temple. Many scholars think Ezra 4:6–23 is grouped by theme, not in time order. Tribute was the heart of the Persian system, so the charge was well aimed.",
      theirEyes:
        "Officials in Samaria knew exactly what would worry a distant king: not religion, but lost taxes and a rebellious fortress.",
    },
    confidence: "settled",
    references: ["Ezra 4:8–23"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "H. G. M. Williamson, Ezra, Nehemiah (Word Biblical Commentary 16, 1985), on Ezra 4:6–24" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-017",
    era: "persian",
    level: 4,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: when Governor Tattenai questioned the builders, he halted the work until Darius replied.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Ezra 5:3–5: Tattenai, “the governor beyond the River,” asked, “Who gave you a decree to build this house and to finish this wall?” and took the builders' names. But “they didn’t make them cease until the matter should come to Darius.”",
      world:
        "“Beyond the River” (Across-the-River) was the Persian province west of the Euphrates, which included Judah. Tattenai's letter to Darius (5:6–17) reads like a careful official report: he inspected, asked for authority, and referred the question upward.",
      theirEyes:
        "The builders kept hauling stones while a messenger rode east with a letter that could stop them for good.",
    },
    confidence: "settled",
    references: ["Ezra 5:3–17"],
    sources: [scripture, { kind: "scholarship", citation: "H. G. M. Williamson, Ezra, Nehemiah (Word Biblical Commentary 16, 1985), on Ezra 5:3–17" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-018",
    era: "persian",
    level: 4,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Ezra 6, where was the scroll recording Cyrus' decree finally found?",
    choices: ["Nineveh", "Jerusalem", "Memphis in Egypt", "Ecbatana (Achmetha) in Media"],
    answer: 3,
    explanation: {
      textSays:
        "Ezra 6:1–2: Darius ordered a search of the archives, and “a scroll was found at Achmetha, in the palace that is in the province of Media.” It gave the Temple's size, “sixty cubits” high and wide, and said costs would come from the king's house (6:3–4).",
      world:
        "Achmetha is Ecbatana, the old Median capital under modern Hamadan in Iran. Xenophon names Susa and Ecbatana as the places where the Persian king was said to spend the spring and summer (Anabasis 3.5.15), and Herodotus describes its seven ringed walls (Histories 1.98).",
      theirEyes:
        "Somewhere in a cool mountain palace far to the east, a clerk unrolled an old scroll, and the fate of the Jerusalem builders turned on it.",
      debate:
        "Scholars debate how closely the Aramaic decree in Ezra 6:3–5 preserves an original Persian document; many accept that it reflects genuine Persian practice.",
    },
    confidence: "settled",
    references: ["Ezra 6:1–5"],
    sources: [
      scripture,
      { kind: "primary", citation: "Xenophon, Anabasis 3.5.15" },
      { kind: "primary", citation: "Herodotus, Histories 1.98" },
      { kind: "reference", citation: "“Ecbatana,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-019",
    era: "persian",
    level: 4,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Darius ordered that the Jerusalem priests be supplied with animals, wheat, salt, wine and oil. For whom were they to pray?",
    choices: ["For the life of the king and his sons", "For rain on the harvest", "For victory over Egypt", "For the governor Tattenai"],
    answer: 0,
    explanation: {
      textSays:
        "Ezra 6:8–10: expenses were to come from the tribute of the province, so that the priests “may offer sacrifices of pleasant aroma to the God of heaven,” and pray for the life of the king and of his sons.",
      world:
        "Persian kings often supported local temples in return for loyalty and prayers for the throne. Ezra presents Darius I as paying for the Temple's offerings from taxes collected west of the Euphrates.",
      theirEyes:
        "Priests at the altar asked blessings for a king they would never see, using animals paid for from his own treasury.",
      tradition: {
        jewish:
          "The custom lasted into Jesus' day. Philo says Augustus paid for daily whole burnt offerings in the Temple (Embassy to Gaius 157, 317), and Josephus says that in 66 CE the priests' refusal to accept the sacrifice for Caesar was “the true beginning of our war with the Romans” (Jewish War 2.409, Whiston).",
      },
    },
    confidence: "settled",
    references: ["Ezra 6:8–10", "Jeremiah 29:7"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, Embassy to Gaius 157, 317" },
      { kind: "primary", citation: "Josephus, Jewish War 2.409–410 (2.17.2)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-020",
    era: "persian",
    level: 4,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Zechariah's vision, Joshua the high priest stands before an angel in filthy clothes. What happens next?",
    choices: [
      "He is sent back to Babylon",
      "He is stripped of the priesthood",
      "His filthy clothes are removed and a clean turban is put on him",
      "He is told to tear his clothes in mourning",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Zechariah 3:1–5: “Satan” (Hebrew ha-satan, “the adversary”) stands ready to accuse Joshua. The filthy garments are taken off: “I have caused your iniquity to pass from you, and I will clothe you with rich clothing.” Then “they set a clean turban on his head.”",
      world:
        "The high priest's turban carried a gold plate engraved “HOLY TO YAHWEH” (Exodus 28:36–38), so a clean turban signals that Joshua is restored and fit to serve at the rebuilt altar.",
      theirEyes:
        "Some wondered whether priests who had lived in Babylon were still fit for the altar; the vision answered that God himself had cleaned them up.",
      tradition: {
        christian: "Many Christian interpreters read the promised “Branch” of Zechariah 3:8 and 6:12 as pointing to Christ.",
      },
    },
    confidence: "settled",
    references: ["Zechariah 3:1–8", "Exodus 28:36–38"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 5 ─────────────
  {
    id: "per-021",
    era: "persian",
    level: 5,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which official from Ezra 5 also appears, as governor of “Across-the-River,” on a Babylonian tablet dated 502 BCE?",
    choices: ["Tattenai", "Rehum", "Haman", "Holofernes"],
    answer: 0,
    explanation: {
      textSays: "Ezra 5:3 and 6:13 name “Tattenai, the governor beyond the River,” who questioned the builders and later carried out Darius' orders.",
      world:
        "A Babylonian promissory note dated to the 20th year of Darius I (502 BCE), published by Arthur Ungnad in 1907, names a witness as the servant of “Tattannu, governor of Across-the-River.” He is one of the few Persian officials in the Hebrew Bible known independently. Rehum the commander belongs to the earlier letter of Ezra 4, Haman to Esther and Holofernes to Judith.",
      theirEyes:
        "To a Babylonian scribe, Tattannu was just a powerful man whose servant could vouch for a loan.",
    },
    confidence: "mainstream",
    references: ["Ezra 5:3–6", "Ezra 6:13"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "A. Ungnad, Vorderasiatische Schriftdenkmäler der Königlichen Museen zu Berlin, vol. 4 (1907), no. 152" },
      { kind: "scholarship", citation: "A. T. Olmstead, “Tattenai, Governor of ‘Across the River’,” Journal of Near Eastern Studies 3 (1944): 46" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-022",
    era: "persian",
    level: 5,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Tiny silver coins minted in Persian-period Judah usually carry which inscription?",
    choices: ["SPQR", "“Jerusalem the Holy”", "YHD, the province's name", "The name of King Cyrus"],
    answer: 2,
    explanation: {
      textSays: "Ezra 5:8 calls Judah a “province”; in the Aramaic text it is Yehud.",
      world:
        "In the 4th century BCE (some scholars date the first issues a little earlier), Judah struck very small silver coins, some weighing under half a gram, marked YHD (Yehud), the Aramaic name of the province. Many copy the Athenian owl; others show a lily or a falcon, and some name a governor, Yehizqiyah (Hezekiah). “Jerusalem the Holy” belongs to the revolt against Rome (66–70 CE) and SPQR to Rome.",
      theirEyes:
        "Coins smaller than a fingernail clinked in a Jerusalem purse, each one quietly announcing: this is Yehud.",
      debate:
        "Exact dates, mints and weight standards are still argued; Gitler and Lorber, for example, date the Yehizqiyah coins later than Mildenberg did, running into the early Macedonian period, and coins of the same type continued under the Ptolemies.",
    },
    confidence: "settled",
    references: ["Ezra 5:8"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Leo Mildenberg, “Yehud: A Preliminary Study of the Provincial Coinage of Judaea” (1979)" },
      { kind: "scholarship", citation: "Haim Gitler and Catharine Lorber, “A New Chronology for the Yehizkiyah Coins of Judah,” Swiss Numismatic Revue 87 (2008)" },
      { kind: "scholarship", citation: "Ya'akov Meshorer, A Treasury of Jewish Coins (Yad Ben-Zvi / Amphora, 2001)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-023",
    era: "persian",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Hundreds of jar handles stamped “Yehud” have been found, many at Ramat Rahel near Jerusalem. What do most archaeologists think they mark?",
    choices: [
      "Jars that held Torah scrolls",
      "Produce collected for the province's taxes and tribute",
      "Cremation urns for the dead",
      "Toy jars for children's games",
    ],
    answer: 1,
    explanation: {
      textSays: "Ezra 4:13 and 6:8 show that tribute from the province beyond the River was central to Persian rule, and Darius ordered some of it paid toward the Temple.",
      world:
        "Stamped storage jars marked Yehud were used from the Persian into the Hellenistic period. Ramat Rahel, on a hilltop between Jerusalem's Old City and Bethlehem, seems to have been the hub of this system, which collected, stored and shipped farm produce such as wine and oil to pay what the empire demanded. Lipschits and Vanderhooft catalogued the impressions in 2011.",
      theirEyes:
        "A farmer handed over his jars of oil at the collection centre, and a clerk pressed the official stamp into the clay before it hardened.",
      debate: "Scholars debate how the system worked in detail and how the stamp types should be dated.",
    },
    confidence: "mainstream",
    references: ["Ezra 4:13", "Ezra 6:8"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Oded Lipschits and David S. Vanderhooft, The Yehud Stamp Impressions: A Corpus of Inscribed Impressions from the Persian and Hellenistic Periods in Judah (Eisenbrauns, 2011)" },
      { kind: "scholarship", citation: "Oded Lipschits, Yuval Gadot and Liora Freud (eds.), Ramat Raḥel III: Final Publication of Yohanan Aharoni's Excavations (Eisenbrauns, 2016)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-024",
    era: "persian",
    level: 5,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Zechariah 7, a delegation sent by the people of Bethel asked the priests and prophets whether they should keep weeping and fasting in which month?",
    choices: ["The first month", "The fifth month", "The third month", "The twelfth month"],
    answer: 1,
    explanation: {
      textSays:
        "Zechariah 7:3: “Should I weep in the fifth month, separating myself, as I have done these so many years?” Zechariah later promises that the fasts of the fourth, fifth, seventh and tenth months will become “joy, gladness, and cheerful feasts” (8:19). In between, the answer turns from fasting to justice: “show kindness and compassion every man to his brother” (7:9).",
      world:
        "The fifth month recalled the burning of the Temple by Nebuzaradan (2 Kings 25:8–9; Jeremiah 52:12–13). The question is dated to Darius' fourth year, in Chislev (7:1), about 518 BCE, when a new Temple was rising: should they still mourn the old one?",
      theirEyes:
        "For seventy years families had fasted for a burned Temple; now, with new walls going up, they wondered whether to stop.",
    },
    confidence: "settled",
    references: ["Zechariah 7:1–10", "Zechariah 8:19", "2 Kings 25:8–9", "Jeremiah 52:12–13"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-025",
    era: "persian",
    level: 5,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 1 Esdras, Zerubbabel wins a contest at Darius' court about what is strongest. What does he say conquers above all?",
    choices: ["Wine", "The king", "Truth", "Gold"],
    answer: 2,
    explanation: {
      textSays:
        "In 1 Esdras 3–4, three young bodyguards each write what is strongest: wine, the king, and “Women are strongest, but above all things Truth is the victor” (3:10–12). The third, Zerubbabel, wins; the crowd shouts, “Great is truth, and strong above all things!” (4:41), and he asks Darius to keep his vow to rebuild Jerusalem (4:42–48).",
      world:
        "1 Esdras is a Greek book, probably from the 2nd century BCE, that retells 2 Chronicles 35–36, Ezra and part of Nehemiah, adding this court tale. It is in the Septuagint and is used by Eastern Orthodox churches; it is not in the Hebrew Bible.",
      theirEyes:
        "Jewish listeners loved the scene: one of their own outwitting Persian courtiers before the king and winning the rebuilding of Jerusalem.",
      tradition: {
        jewish:
          "Josephus retells the bodyguards' contest and makes Zerubbabel the winner (Antiquities 11.3), showing the story was well known in the 1st century CE.",
      },
    },
    confidence: "settled",
    references: ["1 Esdras 3:1–12", "1 Esdras 4:13–48"],
    sources: [
      scripture,
      { kind: "primary", citation: "1 Esdras 3–4 (Septuagint)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews book 11, chapter 3" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
