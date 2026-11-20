import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const dividedKingdom3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "div-051",
    era: "divided-kingdom",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Shishak of Egypt carried off Solomon's gold shields. What did Rehoboam make to replace them?",
    choices: ["Silver shields", "Iron shields", "Bronze shields", "Wooden shields covered in gold leaf"],
    answer: 2,
    explanation: {
      textSays:
        "1 Kings 14:26–27: Shishak took “all the gold shields which Solomon had made. King Rehoboam made shields of bronze in their place.” The guards carried them whenever the king went into the Temple, then returned them to the guard room (14:28).",
      world:
        "Shishak is usually identified with Pharaoh Shoshenq I, founder of Egypt's 22nd Dynasty, whose campaign into Canaan is generally dated about 925 BCE.",
      theirEyes:
        "The royal guard still marched with shining shields on feast days, but everyone in Jerusalem knew the gold had gone to Egypt.",
    },
    confidence: "settled",
    references: ["1 Kings 14:25–28", "2 Chronicles 12:9–11"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Kenneth A. Kitchen, The Third Intermediate Period in Egypt (1100–650 BC) (Aris & Phillips, 2nd ed., 1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-052",
    era: "divided-kingdom",
    level: 11,
    category: "archaeology",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Jerusalem appears in the surviving list of places Shoshenq I claimed to have conquered, carved at Karnak.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "1 Kings 14:25 says Shishak “came up against Jerusalem” in Rehoboam's fifth year and took the Temple and palace treasures.",
      world:
        "Shoshenq's triumphal relief on the Bubastite Portal of the Temple of Amun at Karnak lists well over a hundred place names, many in the Negev and northern Israel, including Megiddo, where a fragment of a Shoshenq victory stele was also found. Jerusalem is not among the names that survive.",
      theirEyes:
        "For Jerusalem's courtiers, paying off the pharaoh with Temple gold may have been the price of keeping his army outside the walls.",
      debate:
        "Parts of the list are damaged, so Jerusalem might once have been there. Many scholars think Rehoboam paid tribute instead of being besieged, which would explain both the Bible's account of treasure handed over and the city's absence from the list.",
    },
    confidence: "mainstream",
    references: ["1 Kings 14:25–26"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Shoshenq I triumphal relief and topographical list, Bubastite Portal, Temple of Amun, Karnak" },
      { kind: "scholarship", citation: "Kenneth A. Kitchen, The Third Intermediate Period in Egypt (1100–650 BC) (Aris & Phillips, 2nd ed., 1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-053",
    era: "divided-kingdom",
    level: 11,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "King Asa removed which royal woman from her position as queen mother because she had made an image for Asherah?",
    choices: ["Jezebel", "Maacah", "Athaliah", "Jehosheba"],
    answer: 1,
    explanation: {
      textSays:
        "1 Kings 15:13: “He also removed Maacah his mother from being queen, because she had made an abominable image for an Asherah. Asa cut down her image and burned it at the brook Kidron.” 2 Chronicles 15:16 tells the same story.",
      world:
        "1 Kings names “Maacah the daughter of Abishalom” as the mother of both Abijam (15:2) and his son Asa (15:10), so many scholars think she was really Asa's grandmother, still holding the powerful title of queen mother (gebirah). Asherah was a goddess known across Canaan. Inscriptions on storage jars from Kuntillet Ajrud in Sinai (about 800 BCE) bless people by “Yahweh of Samaria and his asherah”; scholars debate whether “asherah” there means the goddess or a wooden cult symbol.",
      theirEyes:
        "Watching the queen mother's sacred image burn in the Kidron valley, people knew the young king meant business.",
    },
    confidence: "settled",
    references: ["1 Kings 15:2", "1 Kings 15:9–13", "2 Chronicles 15:16"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Kuntillet Ajrud inscriptions, c. 800 BCE; Z. Meshel, Kuntillet ʿAjrud (Ḥorvat Teman) (Israel Exploration Society, 2012)" },
      { kind: "reference", citation: "“Asherah,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-054",
    era: "divided-kingdom",
    level: 11,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: 1 Kings says that King Asa took away the high places.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "1 Kings 15:14: “But the high places were not taken away. Nevertheless the heart of Asa was perfect with Yahweh all his days.” Kings says the same of his son Jehoshaphat (1 Kings 22:43).",
      world:
        "High places (bamot) were local open-air shrines where people sacrificed outside Jerusalem. The writers of Kings judge every king of Judah by whether he removed them; Hezekiah and Josiah are the ones praised for doing so (2 Kings 18:4; 23:8).",
      theirEyes:
        "For a farmer in the hills, the village shrine was where his family had always offered the first lambs, king or no king.",
      debate:
        "2 Chronicles 14:3–5 says Asa did take away the high places from Judah's cities, while 2 Chronicles 15:17 says they were not removed “out of Israel.” Readers explain the tension in different ways, for example a partial reform or two kinds of shrine.",
    },
    confidence: "settled",
    references: ["1 Kings 15:11–14", "1 Kings 22:43", "2 Chronicles 14:3–5", "2 Chronicles 15:17", "2 Kings 18:4"],
    sources: [scripture, { kind: "reference", citation: "“High place,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-055",
    era: "divided-kingdom",
    level: 11,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Jehoshaphat set judges in Judah's fortified cities. With Yahweh, he told them, there is no iniquity, no respect of persons, and no what?",
    choices: ["Sabbath-breaking", "Taking of bribes", "Swearing of oaths", "Mercy for the guilty"],
    answer: 1,
    explanation: {
      textSays:
        "2 Chronicles 19:5–7: he “set judges in the land throughout all the fortified cities of Judah, city by city,” telling them, “you don't judge for man, but for Yahweh,” for “there is no iniquity with Yahweh our God, nor respect of persons, nor taking of bribes.” Deuteronomy 16:19 gives judges the same rule: “You shall not take a bribe.” The name Jehoshaphat itself means “Yahweh has judged.”",
      world:
        "Cases were usually heard at the city gate. A late 7th-century BCE ostracon from Mesad Hashavyahu, a harvest worker's appeal to an official to return his confiscated garment, shows ordinary people asking for justice in writing.",
      theirEyes:
        "A widow with a land dispute hoped the new judge at the gate could not be bought by her rich neighbour.",
    },
    confidence: "settled",
    references: ["2 Chronicles 19:4–11", "Deuteronomy 16:18–19"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Mesad Hashavyahu (Yavneh-Yam) ostracon, late 7th century BCE; J. Naveh, “A Hebrew Letter from the Seventh Century B.C.,” Israel Exploration Journal 10 (1960)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "div-056",
    era: "divided-kingdom",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Jehoshaphat's alliance with the north was sealed by a marriage: his son Jehoram married the daughter of which king?",
    choices: ["Jeroboam I", "Baasha", "Jehu", "Ahab"],
    answer: 3,
    explanation: {
      textSays:
        "2 Kings 8:18 says Jehoram “walked in the way of the kings of Israel, as did Ahab's house, for he married Ahab's daughter.” Her name was Athaliah; 2 Kings 8:26 calls her “the daughter of Omri king of Israel,” usually read as “descendant,” though some historians think she was actually Omri's daughter and Ahab's sister. 2 Chronicles 18:1 says Jehoshaphat “allied himself with Ahab,” and the two kings fought side by side at Ramoth-gilead (1 Kings 22).",
      world:
        "Royal marriages were the normal way to seal treaties in the ancient Near East. For a time the house of David and the house of Omri were family as well as allies.",
      theirEyes:
        "The wedding brought Samaria's fashions and gods to Jerusalem's palace, and a princess who would one day seize the throne.",
    },
    confidence: "settled",
    references: ["2 Kings 8:16–18", "2 Kings 8:26", "1 Kings 22:2–4", "2 Chronicles 18:1"],
    sources: [scripture, { kind: "reference", citation: "“Athaliah,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-057",
    era: "divided-kingdom",
    level: 12,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the days of Jehoram (Joram), king of Judah, which neighbour broke free from Judah's rule and made a king of its own?",
    choices: ["Tyre", "Edom", "Aram-Damascus", "Ammon"],
    answer: 1,
    explanation: {
      textSays:
        "2 Kings 8:20: “In his days Edom revolted from under the hand of Judah, and made a king over themselves.” Jehoram's night attack failed to end the revolt, and the town of Libnah rebelled at the same time (8:21–22). Earlier, under Jehoshaphat, “There was no king in Edom. A deputy ruled” (1 Kings 22:47).",
      world:
        "Edom, south and south-east of the Dead Sea, included the copper-mining district of Faynan in the Arabah and lay across the caravan roads towards the Gulf of Aqaba, which made it valuable to whoever ruled it.",
      theirEyes:
        "To an Edomite shepherd, a king of their own meant no more tribute caravans heading up to Jerusalem.",
    },
    confidence: "settled",
    references: ["2 Kings 8:20–22", "1 Kings 22:47", "2 Chronicles 21:8–10"],
    sources: [scripture, { kind: "reference", citation: "“Edom,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-058",
    era: "divided-kingdom",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When Athaliah killed the royal family, who rescued the baby prince Joash and hid him?",
    choices: ["Huldah the prophetess", "Jehosheba, his aunt", "Zibiah, his mother", "Abishag the Shunammite"],
    answer: 1,
    explanation: {
      textSays:
        "2 Kings 11:1–3: Jehosheba, daughter of King Joram and sister of Ahaziah, stole Joash away with his nurse and hid him “in Yahweh's house six years while Athaliah reigned over the land.” 2 Chronicles 22:11 calls her Jehoshabeath, “the wife of Jehoiada the priest.”",
      world:
        "Athaliah's six-year rule was the only break in the house of David's rule over Judah. In the seventh year the priest Jehoiada armed the guards, crowned Joash and had Athaliah killed (2 Kings 11:4–16).",
      theirEyes:
        "Somewhere in the Temple's side rooms a small boy grew up in secret, while the queen outside believed David's line was finished.",
      tradition: {
        jewish: "Josephus retells the rescue and, like Chronicles, makes the princess the wife of the high priest (Antiquities 9.7.1).",
      },
    },
    confidence: "settled",
    references: ["2 Kings 11:1–16", "2 Chronicles 22:10–12"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 9.7.1" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-059",
    era: "divided-kingdom",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: according to 2 Kings, Joash (Jehoash) was seven years old when he became king of Judah.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "“Jehoash was seven years old when he began to reign” (2 Kings 11:21 in English Bibles; 12:1 in Hebrew Bibles). He reigned forty years, and his mother was Zibiah of Beersheba (12:1).",
      world:
        "A child king needed a guardian. 2 Kings 12:2 says Jehoash did right “all his days in which Jehoiada the priest instructed him,” and 2 Chronicles 24:17–22 describes a sharp turn after Jehoiada died.",
      theirEyes:
        "The crowd in the Temple courts clapped and shouted “Long live the king!” for a boy who could barely see over the guards' shields (2 Kings 11:12).",
    },
    confidence: "settled",
    references: ["2 Kings 11:12", "2 Kings 11:21", "2 Kings 12:1–2", "2 Chronicles 24:1", "2 Chronicles 24:17–22"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-060",
    era: "divided-kingdom",
    level: 12,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Under King Jehoash, how did the priest Jehoiada make sure Temple donations went to repairs?",
    choices: [
      "He bored a hole in the lid of a chest to collect them",
      "He had the gifts minted into stamped coins",
      "He sent all gifts straight to the king's treasury in Samaria",
      "He let each donor pay the builders directly at the altar",
    ],
    answer: 0,
    explanation: {
      textSays:
        "2 Kings 12:9: “Jehoiada the priest took a chest and bored a hole in its lid, and set it beside the altar” (12:10 in Hebrew Bibles). When it filled, the king's scribe and the high priest counted the money and paid the carpenters and masons (12:10–12). 2 Chronicles 24:8 places the chest outside at the Temple gate.",
      world:
        "Coins had not yet been invented. “Money” here means silver weighed out in pieces, which is why it was bagged and counted (12:10).",
      theirEyes:
        "Dropping your silver through the slot meant you could trust it would buy beams and stone, not vanish into a priest's purse.",
    },
    confidence: "settled",
    references: ["2 Kings 12:4–15", "2 Chronicles 24:8–14"],
    sources: [scripture, { kind: "reference", citation: "“Coin,” Encyclopaedia Britannica (origins of coinage in Lydia, 7th century BCE)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "div-061",
    era: "divided-kingdom",
    level: 13,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Amaziah of Judah challenged Jehoash of Israel. In Jehoash's mocking fable, what did the thistle ask the cedar for?",
    choices: ["Its shade", "Its daughter, as a wife for its son", "Its roots", "Its place on the mountain"],
    answer: 1,
    explanation: {
      textSays:
        "2 Kings 14:9: “The thistle that was in Lebanon sent to the cedar that was in Lebanon, saying, ‘Give your daughter to my son as wife.’ Then a wild animal that was in Lebanon passed by, and trampled down the thistle.” Amaziah ignored the warning, was defeated at Beth Shemesh, and Jehoash broke down 400 cubits of Jerusalem's wall (14:11–14).",
      world:
        "Amaziah had just beaten Edom and taken Sela (14:7), so the fable mocks a small king puffed up by one victory.",
      theirEyes:
        "Jerusalemites watched Israelite soldiers tear a gap in their wall and march off to Samaria with Temple gold and hostages.",
    },
    confidence: "settled",
    references: ["2 Kings 14:7–14", "2 Chronicles 25:17–24"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-062",
    era: "divided-kingdom",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 2 Chronicles, what did King Uzziah do just before leprosy broke out on his forehead?",
    choices: [
      "He ordered a census of the army",
      "He tried to burn incense on the Temple's incense altar",
      "He married a foreign princess",
      "He took gold from the Temple to pay Assyria",
    ],
    answer: 1,
    explanation: {
      textSays:
        "2 Chronicles 26:16–21: Uzziah “went into Yahweh's temple to burn incense on the altar of incense.” The priests told him, “It isn't for you, Uzziah, to burn incense to Yahweh, but for the priests the sons of Aaron.” While he raged at them with a censer in hand, leprosy broke out on his forehead, and he lived in a separate house until he died.",
      world:
        "2 Kings 15:1–5 calls him Azariah, says he reigned 52 years, and records his leprosy without giving a reason; his son Jotham governed for him.",
      theirEyes:
        "A powerful king who had built towers and armies spent his last years shut away, his son ruling in his name.",
      tradition: {
        jewish:
          "Josephus says that at that moment a great earthquake shook the ground and a crack opened in the Temple, letting a beam of sunlight fall on the king's face (Antiquities 9.10.4).",
      },
    },
    confidence: "settled",
    references: ["2 Chronicles 26:16–21", "2 Kings 15:1–5"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 9.10.4" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-063",
    era: "divided-kingdom",
    level: 13,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: besides Amos, the book of Zechariah also remembers people fleeing an earthquake in the days of Uzziah.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Amos 1:1 dates Amos's words “two years before the earthquake.” Zechariah 14:5, centuries later, says, “you shall flee, just like you fled from before the earthquake in the days of Uzziah king of Judah.”",
      world:
        "Destruction layers at several sites, such as Hazor (Stratum VI), have been linked to a major 8th-century quake. In 2000, S. A. Austin and colleagues argued for a very strong earthquake around 750 BCE.",
      theirEyes:
        "Generations later, grandparents still dated family events by the day the ground shook and walls fell.",
      tradition: {
        jewish:
          "Josephus ties the earthquake to the moment Uzziah entered the Temple to burn incense (Antiquities 9.10.4).",
      },
      debate:
        "That both books mention it is not in doubt. Whether particular destruction layers come from this single earthquake, and how strong it was, are debated among archaeologists and geologists.",
    },
    confidence: "settled",
    references: ["Amos 1:1", "Zechariah 14:5"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 9.10.4" },
      {
        kind: "scholarship",
        citation: "S. A. Austin, G. W. Franz and E. G. Frost, “Amos's Earthquake: An Extraordinary Middle East Seismic Event of 750 B.C.,” International Geology Review 42 (2000)",
      },
      { kind: "scholarship", citation: "Y. Yadin, Hazor: The Rediscovery of a Great Citadel of the Bible (Random House, 1975)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-064",
    era: "divided-kingdom",
    level: 13,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A stone plaque saying “Hither were brought the bones of Uzziah, king of Judah” is written in which language?",
    choices: ["Akkadian", "Aramaic", "Latin", "Phoenician"],
    answer: 1,
    explanation: {
      textSays:
        "2 Chronicles 26:23 says Uzziah was buried “in the field of burial which belonged to the kings, for they said, ‘He is a leper.’”",
      world:
        "The Uzziah epitaph was identified in 1931 by E. L. Sukenik in a collection on the Mount of Olives and is now in the Israel Museum. Written in Aramaic in the Jewish square script, it adds “and not to be opened.” Its script dates it to the late Second Temple period, around the 1st century BCE or CE, so it marks a later reburial of bones believed to be the king's, not his original grave.",
      theirEyes:
        "Workers moving old tombs, some seven centuries after Uzziah, carefully labelled a box of bones they believed belonged to the leper king.",
      debate: "Whether the bones really were Uzziah's cannot be checked; the plaque shows what people believed in the Second Temple period.",
    },
    confidence: "settled",
    references: ["2 Chronicles 26:23"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Uzziah epitaph (burial plaque), Second Temple period (Israel Museum, Jerusalem)" },
      { kind: "scholarship", citation: "E. L. Sukenik, first publication of the Uzziah tablet, Palestine Exploration Fund Quarterly Statement (1931)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-065",
    era: "divided-kingdom",
    level: 13,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "King Ahaz saw an altar in Damascus and sent its design home. Which priest built the copy in Jerusalem?",
    choices: ["Jehoiada", "Hilkiah", "Urijah", "Zadok"],
    answer: 2,
    explanation: {
      textSays:
        "2 Kings 16:10–11: Ahaz went to Damascus to meet Tiglath-pileser and “sent to Urijah the priest a drawing of the altar and plans to build it,” and Urijah built it before the king returned. Ahaz moved the old bronze altar aside and used the new “great altar” for the daily offerings (16:14–15).",
      world:
        "Tiglath-pileser III captured Damascus in 732 BCE, after Ahaz paid him to attack Aram and Israel (16:7–9). Many historians read the new altar as a sign of Judah's alignment with its new overlord, though the text does not say Assyria demanded it.",
      theirEyes:
        "Worshippers arriving at the Temple found a large new altar in the place of honour, modelled on one from a foreign city.",
    },
    confidence: "settled",
    references: ["2 Kings 16:7–16"],
    sources: [scripture, { kind: "reference", citation: "“Ahaz,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "div-066",
    era: "divided-kingdom",
    level: 14,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: a tribute list of Tiglath-pileser III names King Ahaz of Judah, using the fuller form of his name, Jehoahaz.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "2 Kings 16:7–8 says Ahaz declared himself Tiglath-pileser's “servant” and sent him silver and gold from the Temple and palace.",
      world:
        "A summary inscription on a clay tablet now in the British Museum lists kings who paid tribute to Tiglath-pileser III, among them “Iauhazi (Jehoahaz) of Judah,” alongside rulers of Ammon, Moab, Edom, Ashkelon and Gaza. Ahaz is a short form of Jehoahaz, “Yahweh has grasped.”",
      theirEyes:
        "In the Assyrian court Judah's king was one more name on a long list of vassals.",
      debate: "The identification of Iauhazi with Ahaz is accepted by most scholars; why the Bible uses the short form is uncertain.",
    },
    confidence: "mainstream",
    references: ["2 Kings 16:7–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Tiglath-pileser III, Summary Inscription 7 (clay tablet, British Museum K 3751), in Tadmor's numbering" },
      { kind: "scholarship", citation: "H. Tadmor, The Inscriptions of Tiglath-pileser III, King of Assyria (Israel Academy of Sciences and Humanities, 1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-067",
    era: "divided-kingdom",
    level: 14,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After Tiglath-pileser III took Galilee (c. 732 BCE), he made it an Assyrian province named after which city?",
    choices: ["Megiddo", "Lachish", "Hebron", "Beersheba"],
    answer: 0,
    explanation: {
      textSays:
        "2 Kings 15:29 says Tiglath-pileser took Hazor, Gilead and Galilee, “all the land of Naphtali,” and carried the people captive to Assyria.",
      world:
        "Assyria ruled conquered lands as provinces under its own governors, often named after their main city. Assyrian texts mention a province of Magiddu (Megiddo), and Megiddo was rebuilt with Assyrian-style palaces. Lachish, Hebron and Beersheba stayed in Judah, which survived as a tribute-paying vassal.",
      theirEyes:
        "Galilean villages now sent their grain to an Assyrian governor, while many neighbours had been marched away east.",
      debate: "The exact boundaries and dates of the provinces (Megiddo, Dor, Gilead and later Samaria) are reconstructed from scattered evidence.",
    },
    confidence: "mainstream",
    references: ["2 Kings 15:29"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "E. Forrer, Die Provinzeinteilung des assyrischen Reiches (Leipzig, 1920)" },
      {
        kind: "scholarship",
        citation: "E. Stern, Archaeology of the Land of the Bible, vol. II: The Assyrian, Babylonian, and Persian Periods (Doubleday, 2001)",
      },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-068",
    era: "divided-kingdom",
    level: 14,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Outside Jerusalem's walls, the Assyrian envoy (the Rabshakeh) mocked Hezekiah for trusting Egypt. What did he compare Egypt to?",
    choices: ["A staff made of a bruised reed", "A lion without teeth", "A well with no water", "A wall built of sand"],
    answer: 0,
    explanation: {
      textSays:
        "2 Kings 18:21: “Now, behold, you trust in the staff of this bruised reed, even in Egypt. If a man leans on it, it will go into his hand and pierce it. So is Pharaoh king of Egypt to all who trust on him.” Isaiah 36:6 repeats the taunt, and Ezekiel 29:6–7 later uses the same picture, calling Egypt “a staff of reed to the house of Israel.”",
      world:
        "In 701 BCE Hezekiah was part of a revolt against Assyria that looked to Egypt, then ruled by the Kushite 25th Dynasty, for help. Sennacherib's own annals say he defeated an Egyptian and Kushite army at Eltekeh before turning on Judah, and 2 Kings 19:9 mentions “Tirhakah king of Ethiopia” marching out against him.",
      theirEyes:
        "Soldiers on the wall heard the enemy officer shout that Egypt's help would snap like a river reed and cut the hand that leaned on it.",
      debate:
        "Tirhakah (Taharqa) became pharaoh only around 690 BCE, so scholars debate whether 2 Kings 19:9 names him by his later title, refers to a later campaign, or reflects how the story was told afterwards.",
    },
    confidence: "settled",
    references: ["2 Kings 18:17–21", "Isaiah 36:6", "Ezekiel 29:6–7", "2 Kings 19:9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Annals of Sennacherib, third campaign (Taylor Prism, British Museum), on the battle of Eltekeh" },
      { kind: "scholarship", citation: "K. A. Kitchen, The Third Intermediate Period in Egypt (1100–650 BC) (Aris & Phillips, 2nd ed., 1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "div-069",
    era: "divided-kingdom",
    level: 14,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "As a sign that the sick Hezekiah would recover, how many steps did the shadow go back on the “sundial of Ahaz”?",
    choices: ["Three", "Seven", "Ten", "Forty"],
    answer: 2,
    explanation: {
      textSays:
        "2 Kings 20:9–11: Isaiah offers the shadow going forward or back ten steps. Hezekiah answers, “let the shadow return backward ten steps,” and the text says Yahweh “brought the shadow ten steps backward.” Isaiah also orders “a cake of figs” for his boil (20:7). Isaiah 38:8 tells the same story.",
      world:
        "The Hebrew word for the “dial” literally means “steps,” so many scholars think it was a staircase whose steps the shadow moved down as the day went on.",
      theirEyes:
        "Courtiers watching the palace stairs saw the line of shade creep the wrong way.",
      tradition: {
        jewish: "Ben Sira (c. 180 BCE) praises Hezekiah: “In his days the sun went backward. He prolonged the life of the king” (Sirach 48:23).",
      },
    },
    confidence: "settled",
    references: ["2 Kings 20:1–11", "Isaiah 38:8"],
    sources: [scripture, { kind: "primary", citation: "Sirach (Ecclesiasticus) 48:22–23" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-070",
    era: "divided-kingdom",
    level: 14,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Merodach-baladan sent envoys to Hezekiah. Outside the Bible, he is known for years of fighting which empire for Babylon?",
    choices: ["Egypt", "Persia", "Assyria", "The Hittites"],
    answer: 2,
    explanation: {
      textSays:
        "Isaiah 39:1–2 (2 Kings 20:12–13, where the WEB spells the name Berodach Baladan) says he sent letters and a present when Hezekiah recovered, and Hezekiah showed the envoys all his treasures and armoury. Isaiah then warned that it would all be carried to Babylon (39:5–7).",
      world:
        "Marduk-apla-iddina II, a Chaldean chief, seized Babylon's throne in 721 BCE and held it against Assyria until Sargon II drove him out in 710; he briefly returned in 703 before Sennacherib defeated him. Many historians think his embassy was looking for allies in a revolt against Assyria. Persia was not yet an empire, and the Hittite empire had fallen centuries earlier.",
      theirEyes:
        "Visitors from distant Babylon flattered Hezekiah's court, and the king was proud to show what Judah could contribute.",
    },
    confidence: "settled",
    references: ["2 Kings 20:12–19", "Isaiah 39:1–8"],
    sources: [
      scripture,
      { kind: "primary", citation: "Babylonian Chronicle ABC 1 (British Museum, BM 92502)" },
      { kind: "scholarship", citation: "J. A. Brinkman, “Merodach-Baladan II,” in Studies Presented to A. Leo Oppenheim (Oriental Institute, 1964)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "div-071",
    era: "divided-kingdom",
    level: 15,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to 2 Chronicles, in which month did Hezekiah hold his great Passover, inviting people from Ephraim and Manasseh?",
    choices: ["The first month", "The second month", "The seventh month", "The twelfth month"],
    answer: 1,
    explanation: {
      textSays:
        "2 Chronicles 30:2–3 says they kept it “in the second month,” because not enough priests had sanctified themselves and the people had not gathered in time. Couriers took letters through Ephraim and Manasseh, “but people ridiculed them and mocked them,” though some came (30:10–11).",
      world:
        "Numbers 9:10–11 allows anyone unclean or far away to keep Passover in the second month, on the fourteenth day. Chronicles uses that rule for the whole nation. Kings does not mention this Passover.",
      theirEyes:
        "A northern family, their own kingdom recently crushed by Assyria, had to decide whether to answer a Judean king's invitation to Jerusalem.",
    },
    confidence: "settled",
    references: ["2 Chronicles 30:1–15", "Numbers 9:10–11"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-072",
    era: "divided-kingdom",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Over a thousand Judean storage-jar handles are stamped with the Hebrew word LMLK. What does it mean?",
    choices: ["Holy to Yahweh", "(Belonging) to the king", "Wine of Samaria", "Tribute for Assyria"],
    answer: 1,
    explanation: {
      textSays:
        "2 Chronicles 32:28 says Hezekiah built “storehouses for the increase of grain, new wine, and oil.”",
      world:
        "LMLK seals show a four-winged scarab or a two-winged sun and one of four place names: Hebron, Ziph, Socoh or MMŠT (still unidentified). After David Ussishkin found many such jars in the layer Sennacherib destroyed at Lachish in 701 BCE, most scholars dated them to Hezekiah's reign, as supplies for his preparations against Assyria.",
      theirEyes:
        "Wagons of identical royal jars, each stamped with the king's mark, rolled out to the fortress towns before the Assyrians came.",
      debate: "Whether the jars held taxes, army rations or royal estate produce, and whether production began before Hezekiah, is debated.",
    },
    confidence: "settled",
    references: ["2 Chronicles 32:27–29"],
    sources: [
      scripture,
      {
        kind: "scholarship",
        citation: "D. Ussishkin, “The Destruction of Lachish by Sennacherib and the Dating of the Royal Judean Storage Jars,” Tel Aviv 4 (1977)",
      },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-073",
    era: "divided-kingdom",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The “Broad Wall” in Jerusalem's Jewish Quarter, about 7 metres thick, was found built over what?",
    choices: ["Solomon's palace", "Demolished houses", "A Canaanite temple", "An Assyrian siege ramp"],
    answer: 1,
    explanation: {
      textSays:
        "Isaiah 22:10: “You counted the houses of Jerusalem, and you broke down the houses to fortify the wall.” Nehemiah 3:8 mentions repairs “even to the wide wall.”",
      world:
        "Nahman Avigad uncovered the wall in the 1970s. It was built over the remains of houses, and enclosed the western hill, where Jerusalem had grown in the late 8th century BCE, perhaps with refugees from the north. Most scholars link it to Hezekiah's defences against Sennacherib.",
      theirEyes:
        "Families watched royal workmen pull down their homes so the stones could go into a wall wide enough to stop siege engines.",
      debate: "Its link to Hezekiah rests on pottery dating and the biblical account; the exact date and builder are not written on the wall.",
    },
    confidence: "settled",
    references: ["Isaiah 22:9–11", "Nehemiah 3:8", "2 Chronicles 32:5"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "N. Avigad, Discovering Jerusalem (Thomas Nelson, 1983)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-074",
    era: "divided-kingdom",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A 2020 study found burnt frankincense on an altar in the Judahite shrine at Tel Arad. Where did frankincense come from?",
    choices: ["Southern Arabia and the Horn of Africa", "The cedar forests of Lebanon", "The Nile Delta", "The island of Cyprus"],
    answer: 0,
    explanation: {
      textSays:
        "Jeremiah 6:20 speaks of “frankincense from Sheba,” and Isaiah 60:6 pictures camels from Sheba bringing “gold and frankincense.” Sheba is usually located in south-west Arabia (modern Yemen).",
      world:
        "Frankincense is the dried resin of Boswellia trees, which grow in southern Arabia and the Horn of Africa; it reached Judah by camel caravan. The Arad fortress in the Negev had a small shrine with two standing stones and two limestone altars, dated by the study to the 8th century BCE. Eran Arie, Baruch Rosen and Dvory Namdar found frankincense residue on one altar; the other held burnt cannabis. They see the frankincense as evidence that Judah took part in the Arabian incense trade.",
      theirEyes:
        "Soldiers on the desert frontier could smell incense that had come by camel across hundreds of miles of desert, burning in their own small shrine.",
      debate:
        "The dating of the shrine's phases and its end are debated: Ze'ev Herzog linked its dismantling to Hezekiah's reform (2 Kings 18:4), others suggest Josiah, or that it simply went out of use.",
    },
    confidence: "settled",
    references: ["Jeremiah 6:20", "Isaiah 60:6", "2 Kings 18:4"],
    sources: [
      scripture,
      {
        kind: "scholarship",
        citation: "E. Arie, B. Rosen and D. Namdar, “Cannabis and Frankincense at the Judahite Shrine of Arad,” Tel Aviv 47 (2020)",
      },
      { kind: "scholarship", citation: "Z. Herzog, “The Date of the Temple of Arad,” in A. Mazar (ed.), Studies in the Archaeology of the Iron Age in Israel and Jordan (Sheffield Academic Press, 2001)" },
      { kind: "reference", citation: "“Frankincense,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "div-075",
    era: "divided-kingdom",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A clay seal impression reading “Belonging to Hezekiah [son of] Ahaz, king of Judah” was excavated in Jerusalem. What image does it show?",
    choices: ["A roaring lion", "A seven-branched lampstand", "A winged sun disk", "A bull calf"],
    answer: 2,
    explanation: {
      textSays: "2 Kings 18:1 names Hezekiah as son of Ahaz king of Judah.",
      world:
        "The bulla was found in Eilat Mazar's Ophel excavations, south of the Temple Mount, and published in 2015. It shows a two-winged sun disk with downturned wings, flanked by ankh signs, Egyptian symbols of life that were popular in the region. The excavators described it as the first seal impression of a Judean king found in a scientific excavation.",
      theirEyes:
        "A royal scribe pressed the king's seal into wet clay to close a papyrus document, and the clay survived when the document did not.",
      debate: "Scholars discuss whether such Egyptian-style symbols on Hezekiah's seals were purely royal emblems or carried religious meaning.",
    },
    confidence: "settled",
    references: ["2 Kings 18:1"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Royal bulla of Hezekiah, Ophel excavations directed by Eilat Mazar (Hebrew University of Jerusalem), published 2015" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
