import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const exile: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "exi-001",
    era: "exile",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Daniel 3, what were Shadrach, Meshach and Abednego thrown into for refusing to worship Nebuchadnezzar's golden image?",
    choices: ["A den of lions", "A dry cistern", "A burning fiery furnace", "The river Euphrates"],
    answer: 2,
    explanation: {
      textSays:
        "Daniel 3:1: “Nebuchadnezzar the king made an image of gold,” and anyone who refused to bow down was to be “cast into the middle of a burning fiery furnace” (3:6). The three friends answer that their God is able to deliver them, “But if not, let it be known to you, O king, that we will not serve your gods” (3:17–18). Inside the furnace the king sees “four men loose, walking in the middle of the fire, and they are unharmed” (3:25).",
      world:
        "The lions' den belongs to a different story, about Daniel himself (Daniel 6), and the cistern to Jeremiah (Jeremiah 38:6). Death by fire is also mentioned in Jeremiah's letter to the exiles, which speaks of two men “whom the king of Babylon roasted in the fire” (Jeremiah 29:22).",
      theirEyes:
        "Standing before the king on the plain of Dura, three young Judeans chose to risk the fire rather than bow to another god.",
      tradition: {
        jewish:
          "In 1 Maccabees 2:59 the dying Mattathias names Hananiah, Azariah and Mishael (the friends' Hebrew names) as men who trusted God and were saved from the flame. The Greek Septuagint version of Daniel adds a prayer and a hymn sung by the three inside the furnace.",
        christian:
          "That added hymn, the Song of the Three Young Men, is part of Daniel in Catholic and Orthodox Bibles and has long been sung in Christian worship.",
      },
      debate:
        "When Daniel was written is debated: traditional Jewish and Christian readers place it in the 6th century BCE, while most critical scholars date its final form to the 160s BCE.",
    },
    confidence: "settled",
    references: ["Daniel 3:1–25", "Jeremiah 29:22", "Jeremiah 38:6", "Daniel 6:16"],
    sources: [
      scripture,
      { kind: "primary", citation: "1 Maccabees 2:59; Septuagint Daniel 3 (Prayer of Azariah and Song of the Three Young Men)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "exi-002",
    era: "exile",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Psalm 137 begins: “By the rivers of ___, there we sat down… we wept, when we remembered Zion.” Which place?",
    choices: ["Damascus", "Egypt", "Babylon", "Jericho"],
    answer: 2,
    explanation: {
      textSays:
        "Psalm 137:1–4: “By the rivers of Babylon, there we sat down. Yes, we wept, when we remembered Zion. On the willows in that land, we hung up our harps.” The captors demand “Sing us one of the songs of Zion!” and the singers answer, “How can we sing Yahweh's song in a foreign land?”",
      world:
        "Babylonia was laced with the Tigris, the Euphrates and many irrigation canals, so “rivers” fits the landscape. The psalm has no heading, so its verse numbers are the same in Hebrew and English.",
      theirEyes:
        "Asked to perform their Temple songs for entertainment, the exiled musicians felt the songs belonged to Jerusalem, not to a foreign court.",
      tradition: {
        shared: "Verse 5, “If I forget you, Jerusalem, let my right hand forget its skill,” is often quoted by Jews and Christians as an expression of longing for Jerusalem.",
      },
    },
    confidence: "settled",
    references: ["Psalm 137:1–5"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-003",
    era: "exile",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Daniel 5, a hand writes a mysterious message on the palace wall during whose feast?",
    choices: ["Belshazzar's", "Cyrus's", "Pharaoh's", "Solomon's"],
    answer: 0,
    explanation: {
      textSays:
        "Daniel 5:1: “Belshazzar the king made a great feast to a thousand of his lords.” The words read “MENE, MENE, TEKEL, UPHARSIN” (5:25), and Daniel explains: “God has counted your kingdom, and brought it to an end” (5:26). “In that night Belshazzar the Chaldean King was slain” (5:30).",
      world:
        "Belshazzar was a real person: Babylonian texts show him as the crown prince who governed in Babylonia for years while the king was away.",
      theirEyes:
        "Guests drinking from the gold cups taken from Jerusalem's Temple (5:2–3) suddenly saw fingers writing on the plaster by the lampstand.",
      debate:
        "When Daniel was written is debated: traditional Jewish and Christian readers place it in the 6th century BCE, while most critical scholars date its final form to the 160s BCE.",
    },
    confidence: "settled",
    references: ["Daniel 5:1–5", "Daniel 5:25–30"],
    sources: [
      scripture,
      { kind: "primary", citation: "Nabonidus Chronicle (ABC 7), col. ii.5–24, trans. A. K. Grayson (Livius.org)" },
      { kind: "reference", citation: "“The Book of Daniel,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-004",
    era: "exile",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: in a letter, Jeremiah told the exiles in Babylon to build houses, plant gardens and pray for the city's peace.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Jeremiah 29:5–7: “Build houses and dwell in them. Plant gardens and eat their fruit… Seek the peace of the city where I have caused you to be carried away captive, and pray to Yahweh for it; for in its peace you will have peace.” He warns that the exile will last “seventy years” (29:10).",
      world:
        "The letter was sent from Jerusalem to those deported with King Jehoiachin in 597 BCE, before the Temple fell (29:1–2). Some prophets were promising a quick return; Jeremiah told the exiles to settle in for the long term.",
      theirEyes:
        "Exiles who had kept their bags packed for a quick trip home were told to unpack, marry and raise children in Babylon.",
      tradition: {
        shared: "“Seek the peace of the city” is often quoted by Jews and Christians as a model for living faithfully as a minority.",
      },
    },
    confidence: "settled",
    references: ["Jeremiah 29:1–10"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-005",
    era: "exile",
    level: 1,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which Persian king took Babylon in 539 BCE, ending the Neo-Babylonian Empire?",
    choices: ["Xerxes", "Alexander the Great", "Artaxerxes", "Cyrus the Great"],
    answer: 3,
    explanation: {
      textSays:
        "Ezra 1:1–3 says that “in the first year of Cyrus king of Persia,” he proclaimed that Judeans could “go up to Jerusalem, which is in Judah, and build the house of Yahweh.”",
      world:
        "The Nabonidus Chronicle records that in 539 BCE Cyrus defeated the Babylonian army at Opis, took Sippar, and that his troops then entered Babylon itself. Xerxes and Artaxerxes ruled Persia later; Alexander conquered Persia in the 330s BCE.",
      theirEyes:
        "For Judeans in Babylon, the empire that had burned their Temple was suddenly gone, swept away within a few weeks.",
    },
    confidence: "settled",
    references: ["Ezra 1:1–3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Nabonidus Chronicle (ABC 7), col. iii.12–18, trans. A. K. Grayson (Livius.org)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "exi-006",
    era: "exile",
    level: 2,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Daniel 1, what did Daniel ask to eat and drink instead of the king's food and wine?",
    choices: ["Bread and honey", "Locusts and wild honey", "Vegetables and water", "Fish and milk"],
    answer: 2,
    explanation: {
      textSays:
        "Daniel 1:8: Daniel “purposed in his heart that he would not defile himself with the king's delicacies, nor with the wine which he drank.” He asks: “let them give us vegetables to eat and water to drink” (1:12). After ten days, he and his friends look healthier than the others.",
      world:
        "Young captives trained at a foreign court were expected to eat at the king's table, which meant food that might break Israel's food laws or have been offered to idols.",
      theirEyes:
        "For a young Judean far from home, refusing the palace menu was a quiet, daily way of saying “I still belong to my people.”",
      tradition: {
        jewish:
          "Second Temple heroes show the same loyalty: Tobit refuses “the bread of the Gentiles” in exile (Tobit 1:10–11), Judith brings her own food (Judith 12:2), and during the Maccabean crisis many chose death rather than eat unclean food (1 Maccabees 1:62–63).",
      },
    },
    confidence: "settled",
    references: ["Daniel 1:8–15"],
    sources: [scripture, { kind: "primary", citation: "Tobit 1:10–11; Judith 12:2; 1 Maccabees 1:62–63" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-007",
    era: "exile",
    level: 2,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Daniel 1, the Babylonian official gives Daniel a new Babylonian name. What is it?",
    choices: ["Shadrach", "Zerubbabel", "Abednego", "Belteshazzar"],
    answer: 3,
    explanation: {
      textSays:
        "Daniel 1:7: “to Daniel he gave the name Belteshazzar; to Hananiah, Shadrach; to Mishael, Meshach; and to Azariah, Abednego.” Later Nebuchadnezzar says Daniel was named after his own god (Daniel 4:8; 4:5 in Aramaic).",
      world:
        "Renaming showed that the young men now served the Babylonian court. Cuneiform archives show Judean exiles really did move between naming styles: in the Al-Yahudu tablets, a man who worked for the state appears both as Bel-shazzar (“Bel, protect the king”) and as Yahu-shazzar (“Yahweh, protect the king”), swapping the god Bel for Yahweh.",
      theirEyes:
        "Each time a palace official called out “Belteshazzar,” Daniel heard a Babylonian god's name in place of his own.",
      tradition: {
        shared: "Do not confuse Belteshazzar (Daniel's court name) with Belshazzar, the prince whose feast appears in Daniel 5.",
      },
    },
    confidence: "settled",
    references: ["Daniel 1:6–7", "Daniel 4:8"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Tyndale House, Cambridge, “The Al-Yahudu Tablets”; L. E. Pearce and C. Wunsch, Documents of Judean Exiles and West Semites in Babylonia (CUSAS 28, 2014)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-008",
    era: "exile",
    level: 2,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Ezekiel 37, the prophet is set down in a valley full of what?",
    choices: ["Broken idols", "Dry bones", "Burned chariots", "Empty tombs"],
    answer: 1,
    explanation: {
      textSays:
        "Ezekiel 37:1–4: God sets him “in the middle of the valley; and it was full of bones.” He is asked, “Son of man, can these bones live?” and told to say, “You dry bones, hear Yahweh's word.” The text explains: “these bones are the whole house of Israel” who say “our hope is lost” (37:11).",
      world:
        "Ezekiel was a priest deported to Babylonia in 597 BCE. In context the vision promises that the exiled nation will live again and return to its land (37:12–14).",
      theirEyes:
        "Exiles who said “we are completely cut off” heard a picture of a people coming back to life.",
      tradition: {
        jewish:
          "A Dead Sea Scrolls text known as Pseudo-Ezekiel (4Q385 frag. 2, with a parallel copy in 4Q386) retells the vision as God's answer to how the faithful in Israel will be rewarded for their loyalty: the bones are joined and given breath. Many scholars read this as resurrection of the righteous, showing that before Jesus' day some Jews read the passage that way.",
        christian: "Christians have also often read the passage as an image of resurrection and of renewal by God's Spirit.",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 37:1–14"],
    sources: [
      scripture,
      { kind: "primary", citation: "Dead Sea Scrolls, 4Q385 (Pseudo-Ezekiel) fragment 2; 4Q386 fragment 1 i–ii" },
      { kind: "scholarship", citation: "A. L. A. Hogeterp, “Resurrection and Biblical Tradition: Pseudo-Ezekiel Reconsidered,” Biblica 89 (2008) 59–69" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-009",
    era: "exile",
    level: 2,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After Jerusalem fell, whom did Nebuchadnezzar appoint as governor over the people left in Judah?",
    choices: ["Zerubbabel", "Gedaliah", "Nehemiah", "Zedekiah"],
    answer: 1,
    explanation: {
      textSays:
        "2 Kings 25:22 says Nebuchadnezzar made “Gedaliah the son of Ahikam, the son of Shaphan, governor.” Gedaliah ruled from Mizpah and told the survivors: “Don't be afraid to serve the Chaldeans” (Jeremiah 40:9). In the seventh month, Ishmael, of the royal family, killed him at Mizpah (2 Kings 25:25).",
      world:
        "Mizpah is usually identified with Tell en-Nasbeh, north of Jerusalem. Excavations there show the town survived the Babylonian campaign and became a regional centre in the 6th century BCE. Zedekiah was Judah's last king, captured before Gedaliah's appointment; Zerubbabel and Nehemiah were governors under Persia.",
      theirEyes:
        "For farmers left among the ruins, Gedaliah's message was simple: gather your wine, fruit and oil and get on with living (Jeremiah 40:10).",
    },
    confidence: "settled",
    references: ["2 Kings 25:22–25", "Jeremiah 40:5–10", "Jeremiah 41:1–2"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Tell en-Nasbeh excavations, W. F. Badè (1926–1935)" },
      { kind: "scholarship", citation: "J. R. Zorn, “Tell en-Naṣbeh and the Problem of the Material Culture of the Sixth Century,” in O. Lipschits and J. Blenkinsopp (eds.), Judah and the Judeans in the Neo-Babylonian Period (Eisenbrauns, 2003), 413–447" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-010",
    era: "exile",
    level: 2,
    category: "tradition",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: four of the five chapters of Lamentations are alphabetic acrostics.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Lamentations opens: “How the city sits solitary, that was full of people! She has become as a widow” (1:1). In Hebrew, chapters 1, 2 and 4 have 22 verses, each starting with the next letter of the alphabet; chapter 3 has 66 verses, three per letter. Chapter 5 has 22 verses but is not an acrostic.",
      world:
        "Most scholars think the poems were written soon after Jerusalem's fall, during the 6th century BCE. The alphabet structure may express grief “from A to Z.”",
      theirEyes: "For survivors, these were songs to say together over a ruined city, laid out letter by letter.",
      tradition: {
        jewish:
          "The Septuagint, the Greek translation used by many Jews in the Second Temple period, opens the book with a line saying that Jeremiah sat weeping and lamented over Jerusalem.",
      },
      debate: "Most modern scholars do not think Jeremiah wrote the book; whether it has one author or several is debated.",
    },
    confidence: "settled",
    references: ["Lamentations 1:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Lamentations 1:1 (introductory line)" },
      { kind: "reference", citation: "“The Lamentations of Jeremiah,” Encyclopaedia Britannica (structure, authorship and dating)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "exi-011",
    era: "exile",
    level: 3,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Clay ration tablets excavated in Babylon list oil for an exiled “king of Judah” and his sons. Which king?",
    choices: ["Hezekiah", "Josiah", "Jehoiachin", "Zedekiah"],
    answer: 2,
    explanation: {
      textSays:
        "2 Kings 25:27–30 says that in the 37th year of his captivity, Jehoiachin was released by Evilmerodach king of Babylon and given “a continual allowance… every day a portion, all the days of his life.”",
      world:
        "Robert Koldewey's excavations (1899–1917) found the tablets in a vaulted building near the Ishtar Gate, probably a royal storehouse. The one tablet with its date preserved is from Nebuchadnezzar's 13th year (592/591 BCE). They record oil for Jehoiachin (spelled Ya'u-kin and similar), “king of the land of Yahudu,” and for “the five sons of the king” of Judah. One fragment is in the collection of Berlin's Vorderasiatisches Museum (VAT 16378).",
      theirEyes:
        "Even as a captive, Judah's young king was listed in Babylon's palace accounts by name and title, alongside other foreign dependants.",
      debate:
        "1 Chronicles 3:17–18 names seven sons of Jehoiachin, while the tablets mention five. Suggested explanations include sons born later, sons who died, or “sons” meaning wider descendants.",
    },
    confidence: "settled",
    references: ["2 Kings 25:27–30", "1 Chronicles 3:17–18"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Jehoiachin ration tablets, Babylon (Babylon 28122, 28178, 28186); Staatliche Museen zu Berlin, Vorderasiatisches Museum, VAT 16378 (online collection record)" },
      { kind: "scholarship", citation: "E. F. Weidner, “Jojachin, König von Juda, in babylonischen Keilschrifttexten,” in Mélanges syriens offerts à M. René Dussaud, vol. 2 (Paris: Geuthner, 1939), 923–935; translation in J. B. Pritchard (ed.), ANET³ (1969), p. 308" },
      { kind: "reference", citation: "Center for Online Judaic Studies, “Babylonian Ration List: King Jehoiakhin in Exile, 592–1 BCE”; Livius.org, “Jehoiachin in Babylonia”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-012",
    era: "exile",
    level: 3,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Nebuchadnezzar II's blue glazed-brick Ishtar Gate in Babylon is decorated with which animals?",
    choices: ["Horses and camels", "Dragons and wild bulls", "Elephants and monkeys", "Eagles and falcons"],
    answer: 1,
    explanation: {
      world:
        "Completed around 575 BCE, the gate is covered in rows of dragons (the beast of Marduk, Babylon's chief god) and aurochs, or wild bulls (linked to the storm god Adad). The Processional Way leading to it was lined with lions, symbols of the goddess Ishtar. A reconstruction built from excavated bricks is housed in Berlin's Pergamon Museum; the museum closed for renovation in October 2023, and the wing holding the gate is not expected to reopen until about 2037.",
      textSays:
        "Daniel 4:30 (4:27 in Aramaic) has Nebuchadnezzar boast: “Is not this great Babylon, which I have built for the royal dwelling place by the might of my power…?”",
      theirEyes:
        "A Judean living in exile, visiting Babylon in the years after the gate was finished, would pass beneath walls of shining blue brick crowded with the beasts of Babylon's gods.",
    },
    confidence: "settled",
    references: ["Daniel 4:30"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Ishtar Gate and Processional Way, Babylon; reconstruction in the Pergamon Museum, Berlin" },
      { kind: "reference", citation: "Staatliche Museen zu Berlin, “FAQ Pergamonmuseum: All you need to know about the refurbishment” (closure 23 October 2023; south wing reopening planned for 2037)" },
      { kind: "reference", citation: "Smarthistory, “The Ishtar Gate and Neo-Babylonian art and architecture”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-013",
    era: "exile",
    level: 3,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Isaiah 45:1 gives the Persian king Cyrus a title normally used for Israel's own kings and priests. What is it?",
    choices: ["The son of David", "The king of the north", "A false prophet", "God's anointed"],
    answer: 3,
    explanation: {
      textSays:
        "Isaiah 45:1: “Yahweh says to his anointed, to Cyrus, whose right hand I have held to subdue nations before him.” The Hebrew word is mashiach, the source of “messiah.” Isaiah 44:28 also calls Cyrus God's “shepherd.”",
      world:
        "Cyrus is the only foreign ruler whom the Hebrew Bible calls God's “anointed.” The prophet presents him as God's chosen instrument to free the exiles and rebuild Jerusalem (Isaiah 44:28).",
      theirEyes:
        "Exiles watching Cyrus's rise heard a startling message: a foreign king could be part of their God's plan.",
      tradition: {
        jewish:
          "Josephus says this “was known to Cyrus by his reading the book which Isaiah left behind him,” and that Cyrus was moved to send the Jews home (Antiquities 11.1.2, Whiston).",
      },
      debate:
        "Most scholars assign Isaiah 40–55 (“Second Isaiah”) to an anonymous prophet of the exile writing around Cyrus's rise; traditional Jewish and Christian readers attribute the whole book to Isaiah of Jerusalem (8th century BCE).",
    },
    confidence: "settled",
    references: ["Isaiah 45:1", "Isaiah 44:28"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.1.2 (Whiston)" },
      { kind: "reference", citation: "“Deutero-Isaiah,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-014",
    era: "exile",
    level: 3,
    category: "archaeology",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the Cyrus Cylinder in the British Museum mentions the Jews and the Temple in Jerusalem.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "Found at Babylon in 1879 by Hormuzd Rassam (British Museum BM 90920), the cylinder is written in Akkadian cuneiform. Cyrus says he returned gods to their sanctuaries in various cities and gathered their former inhabitants back to their homes, but it names no Jews, Judah or Jerusalem.",
      textSays:
        "Ezra 1:2–3 gives a decree in which Cyrus says Yahweh “has commanded me to build him a house in Jerusalem, which is in Judah,” and lets his people “go up to Jerusalem.”",
      theirEyes:
        "Cyrus's scribes wrote for a Babylonian audience; Judeans would have heard the news through their own leaders, not from this clay cylinder.",
      debate:
        "Scholars debate how the cylinder relates to Ezra's decree: many see a similar general policy of restoring local cults, while others think the Ezra text was reworked later.",
    },
    confidence: "settled",
    references: ["Ezra 1:1–4"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Cyrus Cylinder, British Museum BM 90920" },
      { kind: "reference", citation: "Metropolitan Museum of Art, “Cyrus and the Judean Diaspora” (Perspectives)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-015",
    era: "exile",
    level: 3,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Ezekiel saw his first vision while among the captives beside which waterway?",
    choices: ["The Jordan", "The Nile", "The river Chebar", "The Red Sea"],
    answer: 2,
    explanation: {
      textSays:
        "Ezekiel 1:1: “as I was among the captives by the river Chebar, the heavens were opened, and I saw visions of God.” Verse 3 calls him “Ezekiel the priest, the son of Buzi, in the land of the Chaldeans.”",
      world:
        "The Chebar is usually identified with the nāru kabari (“great canal”), named in contract tablets from Nippur dated 443 and 423 BCE. It branched off the Euphrates and ran through the Nippur region of southern Babylonia, where many deported Judeans were settled.",
      theirEyes:
        "On the bank of an irrigation canal, far from the Temple, a priest had a vision of God's glory on a moving throne.",
      tradition: {
        shared: "Ezekiel's throne-chariot vision (chapter 1) became a major theme of later Jewish and Christian mystical writing.",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 1:1–3"],
    sources: [scripture, { kind: "reference", citation: "“Chebar,” Encyclopedia of the Bible (Zondervan), via BibleGateway" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 4 ─────────────
  {
    id: "exi-016",
    era: "exile",
    level: 4,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Babylonian inscriptions such as the Nabonidus Cylinder from Ur, Belshazzar was the eldest son of which king?",
    choices: ["Nabopolassar", "Nabonidus", "Sennacherib", "Hammurabi"],
    answer: 1,
    explanation: {
      world:
        "On a foundation cylinder from the moon god Sin's temple at Ur, Nabonidus prays for Belshazzar, “the eldest son – my offspring.” The Nabonidus Chronicle says that for years while the king stayed in Arabia, “the prince,” the officials and the army remained in Babylonia, so the crown prince governed in practice. Nabopolassar was Nebuchadnezzar's father; Sennacherib was an Assyrian king and Hammurabi lived over a thousand years earlier.",
      textSays:
        "Daniel 5 calls Belshazzar king and refers to Nebuchadnezzar as his “father” (5:2, 5:11, 5:18).",
      theirEyes:
        "To people in Babylon, Belshazzar was the face of the royal family while the reigning king was hundreds of miles away.",
      debate:
        "Readers explain Daniel's “father” in different ways. Traditional interpreters note that “father” can mean ancestor or royal predecessor, and some suggest Belshazzar descended from Nebuchadnezzar through his mother. Many critical scholars see it instead as a sign that the stories took shape long after the events. The inscriptions themselves name Nabonidus as his father.",
    },
    confidence: "settled",
    references: ["Daniel 5:1–2", "Daniel 5:11", "Daniel 5:18"],
    sources: [
      scripture,
      { kind: "primary", citation: "Nabonidus Cylinder from Ur (British Museum), closing prayer for Belshazzar; trans. Livius.org" },
      { kind: "primary", citation: "Nabonidus Chronicle (ABC 7), col. ii.5–24, trans. A. K. Grayson (Livius.org)" },
      { kind: "scholarship", citation: "W. H. Shea, “Nabonidus, Belshazzar, and the Book of Daniel: An Update,” Andrews University Seminary Studies 20.2 (1982) 133–149; C. L. Seow, Daniel (Westminster John Knox, 2003), 4–7" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-017",
    era: "exile",
    level: 4,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Nabonidus, Babylon's last king, lived for about ten years at which Arabian oasis?",
    choices: ["Palmyra", "Siwa", "Tayma", "Petra"],
    answer: 2,
    explanation: {
      world:
        "Nabonidus spent about ten years in the middle of his reign based at Tayma, controlling oases as far south as Yathrib (Medina). The Nabonidus Chronicle records, year after year, that the king was in Tayma while the prince, the officials and the army were in Akkad (Babylonia), and that the New Year (Akitu) festival did not take place. Tayma is an oasis in northwestern Arabia; Palmyra is in Syria, Siwa in Egypt's Western Desert, and Petra in Jordan.",
      textSays:
        "Daniel 4 tells of Nebuchadnezzar being driven away from people while “seven times” pass over him, before regaining his kingdom (4:32–36).",
      theirEyes:
        "Babylon's priests were dismayed: the king who should lead the god Marduk's great festival was living in the desert.",
      tradition: {
        jewish:
          "A Dead Sea Scrolls text, the Prayer of Nabonidus (4Q242, copied in the 1st century BCE), has Nabonidus say he was struck with an evil ulcer for seven years at Teiman (Tayma) until a Jewish exorcist from among the exiles pardoned his sins.",
      },
      debate:
        "Because of the parallels (a Babylonian king, seven years of affliction, a Jewish helper), many scholars think a story about Nabonidus lies behind Daniel 4's account of Nebuchadnezzar. Traditional readers take Daniel 4 as an account of Nebuchadnezzar himself.",
    },
    confidence: "settled",
    references: ["Daniel 4:28–37"],
    sources: [
      scripture,
      { kind: "primary", citation: "Nabonidus Chronicle (ABC 7), col. ii.5–24, trans. A. K. Grayson (Livius.org)" },
      { kind: "reference", citation: "“Nabonidus,” Encyclopedia of the Bible (Zondervan), via BibleGateway (about ten years in the Tayma region)" },
      { kind: "primary", citation: "Dead Sea Scrolls, 4Q242 (Prayer of Nabonidus), trans. Livius.org" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-018",
    era: "exile",
    level: 4,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Cuneiform tablets record a Babylonian village of Judean exiles called Al-Yahudu. What does the name mean?",
    choices: ["Camp of the captives", "Town of Judah", "City of the Temple", "Place of weeping"],
    answer: 1,
    explanation: {
      world:
        "About 200 tablets, dated from 572 BCE into the 470s BCE, come from Al-Yahudu (“town of Judah”) and nearby villages in the countryside around Nippur. They record loans, rents, sales and a marriage contract, and many people bear names containing Yahweh. Judeans worked land in return for taxes and service to the state.",
      textSays: "This matches Jeremiah's advice to the exiles: “Build houses and dwell in them. Plant gardens and eat their fruit” (Jeremiah 29:5).",
      theirEyes:
        "A family at Al-Yahudu could pay taxes in Babylonian silver, sign Babylonian contracts, and still name a newborn “Yahweh has given.”",
      debate:
        "The tablets surfaced on the antiquities market rather than in a controlled excavation, so the village's exact location is unknown, and some scholars raise ethical concerns about their provenance.",
    },
    confidence: "settled",
    references: ["Jeremiah 29:5–7"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "L. E. Pearce and C. Wunsch, Documents of Judean Exiles and West Semites in Babylonia in the Collection of David Sofer (CUSAS 28, 2014)" },
      { kind: "reference", citation: "Metropolitan Museum of Art, “Cyrus and the Judean Diaspora”; Tyndale House, “The Al-Yahudu Tablets”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-019",
    era: "exile",
    level: 4,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After Gedaliah was murdered, where did the remaining Judeans flee, taking Jeremiah with them?",
    choices: ["Egypt", "Babylon", "Phoenicia", "Persia"],
    answer: 0,
    explanation: {
      textSays:
        "Fearing Babylonian revenge for Gedaliah's murder, the army officers led the survivors to Egypt despite Jeremiah's warning, and took him with them as far as Tahpanhes (Jeremiah 41:16–43:7). 2 Kings 25:26 sums it up: the people and the army officers went to Egypt, “for they were afraid of the Chaldeans.”",
      world:
        "Tahpanhes is usually identified with Daphnae (modern Tell Defenneh, or Tall al-Dafana), near Qantara in the northeastern Nile Delta. Jeremiah 44 mentions Judeans living in several Egyptian towns, so the Judean community in Egypt began well before the Persian period.",
      theirEyes:
        "With their governor dead and Babylon sure to take revenge, the survivors felt Egypt was the only safe place to go.",
      tradition: {
        shared: "The Bible does not record Jeremiah's death; his story ends with him prophesying in Egypt (Jeremiah 43–44).",
      },
    },
    confidence: "settled",
    references: ["2 Kings 25:26", "Jeremiah 41:16–18", "Jeremiah 43:4–7", "Jeremiah 44:1"],
    sources: [scripture, { kind: "reference", citation: "“Daphnae” (biblical Tahpanhes, modern Tall al-Dafana), Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-020",
    era: "exile",
    level: 4,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Ezekiel 20:12, what does God say he gave Israel as “a sign between me and them”?",
    choices: ["The rainbow", "His Sabbaths", "The bronze serpent", "The golden lampstand"],
    answer: 1,
    explanation: {
      textSays:
        "Ezekiel 20:12: “I gave them my Sabbaths, to be a sign between me and them,” so that they would know God makes them holy. Ezekiel repeatedly blames the exile partly on Sabbath-breaking (20:13–24).",
      world:
        "With the Temple destroyed and sacrifice impossible in Babylon, many scholars think practices that could be kept anywhere, such as the Sabbath and circumcision, became key markers of Judean identity during the exile.",
      theirEyes:
        "Far from any altar, a Judean family resting every seventh day stood out from their Babylonian neighbours.",
      tradition: {
        jewish:
          "Jubilees (2nd century BCE) calls the Sabbath a great sign given to Israel (Jubilees 2:17–21), and 1 Maccabees 2:32–38 describes pious Jews who would not fight on the Sabbath.",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 20:12–24"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 2:17–21; 1 Maccabees 2:32–38" },
      { kind: "scholarship", citation: "Rainer Albertz, Israel in Exile: The History and Literature of the Sixth Century B.C.E. (SBL, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 5 ─────────────
  {
    id: "exi-021",
    era: "exile",
    level: 5,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jeremiah 52 lists three Babylonian deportations. What total number of people does it give?",
    choices: ["144,000", "600,000", "4,600", "70"],
    answer: 2,
    explanation: {
      textSays:
        "Jeremiah 52:28–30 lists “three thousand twenty-three Jews” in Nebuchadnezzar's 7th year, 832 in his 18th, and 745 in his 23rd: “All the people numbered four thousand six hundred.”",
      world:
        "The figures are surprisingly precise and modest. Other passages give different numbers: 2 Kings 24:14 says 10,000 were taken in 597 BCE alone. Scholars offer different explanations, for example that Jeremiah 52 counts only some groups or uses a different count of regnal years.",
      theirEyes:
        "The exiles were not a whole nation on the march but several groups, mostly leaders, priests and craftsmen, taken in waves over about fifteen years.",
      debate:
        "How many people were deported, and how many stayed in Judah, is debated; archaeology shows much of Judah's countryside was still inhabited, especially around Mizpah.",
    },
    confidence: "settled",
    references: ["Jeremiah 52:28–30", "2 Kings 24:14"],
    sources: [scripture, { kind: "scholarship", citation: "Rainer Albertz, Israel in Exile: The History and Literature of the Sixth Century B.C.E. (SBL, 2003)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-022",
    era: "exile",
    level: 5,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Nabonidus Chronicle says Cyrus's troops had to storm Babylon after a long siege in 539 BCE.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "The Chronicle says Cyrus did battle with the Babylonian army at Opis, that “Sippar was captured without a battle,” and that two days later Ugbaru, governor of Gutium, and the army of Cyrus entered Babylon “without battle.” Cyrus himself entered about two and a half weeks later, and there was peace in the city. The Greek historian Herodotus (1.190–191) tells a different story: a siege, then Persians entering along the riverbed after the Euphrates was diverted.",
      textSays: "Daniel 5:30–31 says Belshazzar was killed “in that night” and that “Darius the Mede received the kingdom.”",
      theirEyes:
        "For Babylon's residents, the city changed rulers with little fighting, and life went on under new masters.",
      debate:
        "No ruler called Darius the Mede is known outside Daniel. Traditional interpreters identify him with a known figure, such as the governor Ugbaru or Gubaru, the Median prince Cyaxares II described by Xenophon, or Cyrus himself under another title; most critical scholars see him as a literary figure, perhaps modelled on the later Persian king Darius I.",
    },
    confidence: "settled",
    references: ["Daniel 5:30–31"],
    sources: [
      scripture,
      { kind: "primary", citation: "Nabonidus Chronicle (ABC 7), col. iii.12–19, trans. A. K. Grayson (Livius.org)" },
      { kind: "primary", citation: "Herodotus, Histories 1.190–191" },
      { kind: "scholarship", citation: "H. H. Rowley, Darius the Mede and the Four World Empires in the Book of Daniel (1935); D. J. Wiseman et al., Notes on Some Problems in the Book of Daniel (1965)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-023",
    era: "exile",
    level: 5,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which Babylonian priest-historian, quoted by Josephus, says Nebuchadnezzar built raised gardens for his queen from Media?",
    choices: ["Manetho", "Herodotus", "Berossus", "Hammurabi"],
    answer: 2,
    explanation: {
      world:
        "Berossus wrote a history of Babylon in Greek in the early 3rd century BCE. His work is lost, but Josephus quotes him: Nebuchadnezzar “erected very high walks, supported by stone pillars,” and planted “what was called a pensile Paradise” to please his queen, who had been brought up in Media and was fond of a mountainous landscape. Manetho was an Egyptian priest; Herodotus does not mention the gardens.",
      theirEyes:
        "Exiles heard stories of a king who could make mountains of green rise in a flat land of brick and clay.",
      tradition: {
        jewish: "Josephus cited Berossus to show that Chaldean records agreed with Jewish writings about Nebuchadnezzar, the Temple's destruction and the exile, answering critics who doubted the Jews' antiquity (Against Apion 1.19; Antiquities 10.11.1).",
      },
      debate:
        "No Babylonian inscription mentions the Hanging Gardens, and none has been identified at Babylon; Stephanie Dalley argues the famous gardens were actually at Nineveh.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Against Apion 1.19 (Whiston) = 1.141 (Niese), quoting Berossus" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 10.11.1 (Whiston)" },
      { kind: "scholarship", citation: "Stephanie Dalley, The Mystery of the Hanging Garden of Babylon (Oxford University Press, 2013)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-024",
    era: "exile",
    level: 5,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which Daniel story is found in the Greek versions of Daniel but not in the Hebrew-Aramaic text?",
    choices: [
      "Susanna and the two elders",
      "Nebuchadnezzar's dream of a statue of gold, silver, bronze and iron",
      "The writing on the wall at Belshazzar's feast",
      "Daniel's vision of four beasts rising from the sea",
    ],
    answer: 0,
    explanation: {
      textSays:
        "The other three stories are all in the Aramaic part of Daniel: the statue dream (Daniel 2:31–45), the writing on the wall (Daniel 5:5–28) and the four beasts (Daniel 7:2–8).",
      world:
        "In the story of Susanna, set in Babylon, two elders who serve as judges falsely accuse a virtuous woman of adultery after she refuses them. She is condemned, but the young Daniel exposes their lie. The story survives in two Greek forms, the Old Greek (Septuagint) and Theodotion's version, which most later translations follow.",
      theirEyes:
        "Greek-speaking Jews hearing Daniel read in Greek met a young Daniel who saved an innocent woman by questioning her accusers.",
      tradition: {
        jewish:
          "Susanna circulated among Greek-speaking Jews as part of Greek Daniel, together with the Prayer of Azariah and Bel and the Dragon. It is not part of the Hebrew Bible.",
        christian:
          "Early Christians generally accepted Susanna as Scripture. Catholic and Orthodox Bibles include it with Daniel (in Catholic Bibles as Daniel 13), while Protestant Bibles place it among the Apocrypha or leave it out. Jerome noted that it was not in the Hebrew text.",
      },
      debate:
        "Scholars debate whether Susanna was first written in Greek or translated from a lost Hebrew or Aramaic original. Wordplays in the Greek (verses 54–55 and 58–59) are often cited for a Greek original.",
    },
    confidence: "settled",
    references: ["Daniel 2:31–45", "Daniel 5:5–28", "Daniel 7:2–8"],
    sources: [
      scripture,
      { kind: "primary", citation: "Susanna (Greek additions to Daniel), Old Greek and Theodotion versions" },
      { kind: "reference", citation: "“The History of Susanna,” Encyclopaedia Britannica; “Susanna, The History of,” Jewish Encyclopedia (1906)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "exi-025",
    era: "exile",
    level: 5,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: according to Josephus, all the Jews in Babylon went back to Judah after Cyrus's decree.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "Josephus writes: “Yet did many of them stay at Babylon; as not willing to leave their possessions” (Antiquities 11.1.3). Cuneiform archives agree: the Al-Yahudu tablets show Judean families still living near Nippur into the 470s BCE, more than sixty years after Cyrus took Babylon.",
      textSays:
        "Ezra 1:4–6 has the people around the returnees help them with silver, gold, goods and animals, and Ezra 2:64 counts the returning assembly at 42,360.",
      theirEyes:
        "For a family with fields, contracts and grandchildren in Babylonia, the long journey to a ruined Jerusalem was a hard choice.",
      tradition: {
        shared: "The Jews who stayed laid the foundations for Babylonian Jewry, which remained a major centre of Jewish life for many centuries.",
      },
    },
    confidence: "settled",
    references: ["Ezra 1:4–6", "Ezra 2:64"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.1.3 (Whiston)" },
      { kind: "scholarship", citation: "L. E. Pearce and C. Wunsch, Documents of Judean Exiles and West Semites in Babylonia (CUSAS 28, 2014)" },
      { kind: "reference", citation: "Metropolitan Museum of Art, “Cyrus and the Judean Diaspora” (tablets dated 572/1 to 473/2 BCE)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
