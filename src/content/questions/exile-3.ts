import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const exile3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "exi-051",
    era: "exile",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At his call, Ezekiel is told to eat a scroll full of laments. What does it taste like in his mouth?",
    choices: ["Bitter as wormwood", "Sweet as honey", "Salty as tears", "Dry as ashes"],
    answer: 1,
    explanation: {
      textSays:
        "The scroll is “written within and without; and lamentations, mourning, and woe were written in it” (Ezekiel 2:10). Yet when he eats it: “It was as sweet as honey in my mouth” (3:3). Then he is sent: “go, speak to the house of Israel” (3:1).",
      world:
        "Ancient scrolls were normally written on one side only, so a scroll written on both sides is overflowing with its message.",
      theirEyes:
        "A priest far from the Temple swallows God's words whole: the message becomes part of him before he says a word of it.",
      tradition: {
        christian:
          "Revelation 10:9–10 echoes the scene: John eats a little book that is “as sweet as honey” in his mouth, but makes his stomach bitter.",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 2:8–3:3", "Revelation 10:9–10"],
    sources: [scripture, { kind: "scholarship", citation: "Moshe Greenberg, Ezekiel 1–20 (Anchor Bible 22, Doubleday, 1983)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-052",
    era: "exile",
    level: 11,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Ezekiel 3 and again in Ezekiel 33, God appoints Ezekiel to what role “to the house of Israel”?",
    choices: ["Gatekeeper", "Judge", "Watchman", "High priest"],
    answer: 2,
    explanation: {
      textSays:
        "Ezekiel 3:17: “Son of man, I have made you a watchman to the house of Israel. Therefore hear the word from my mouth, and warn them from me.” Chapter 33 repeats the charge (33:7) and spells out the stakes: if the watchman “doesn't blow the trumpet,” the people's “blood I will require at the watchman's hand” (33:6).",
      world:
        "Walled towns posted lookouts on walls and towers to sound the alarm when an enemy approached. Ezekiel turns that everyday job into a picture of a prophet's duty to warn.",
      theirEyes:
        "Every exile from Jerusalem knew the sound of a watchman's trumpet, and what happened to a city when it came too late.",
    },
    confidence: "settled",
    references: ["Ezekiel 3:17–21", "Ezekiel 33:1–9"],
    sources: [scripture, { kind: "scholarship", citation: "Daniel I. Block, The Book of Ezekiel, Chapters 1–24 (NICOT, Eerdmans, 1997)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-053",
    era: "exile",
    level: 11,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Each living creature in Ezekiel 1 has four faces. Which of these is NOT one of them?",
    choices: ["A lion", "An ox", "An eagle", "A horse"],
    answer: 3,
    explanation: {
      textSays:
        "Ezekiel 1:10: “they had the face of a man… the face of a lion on the right side… the face of an ox on the left side… also had the face of an eagle.” In the parallel vision of chapter 10 the ox's face is replaced by “the face of the cherub” (10:14).",
      world:
        "Winged composite guardians with human, lion, bull and eagle features were familiar in Mesopotamian palace art, which exiles in Babylonia could see.",
      theirEyes:
        "Wherever the creatures moved, a face looked in every direction at once: nothing escaped the sight of the One on the throne.",
      tradition: {
        christian:
          "Revelation 4:7 gives each of its four creatures one of these faces. From Irenaeus (Against Heresies 3.11.8) on, Christians linked the four creatures with the four Gospels; Jerome's pairing (Matthew the man, Mark the lion, Luke the ox, John the eagle) became the standard one in art.",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 1:10", "Ezekiel 10:14", "Revelation 4:7"],
    sources: [
      scripture,
      { kind: "primary", citation: "Irenaeus, Against Heresies 3.11.8" },
      { kind: "primary", citation: "Jerome, Commentary on Matthew, preface" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-054",
    era: "exile",
    level: 11,
    category: "neighbours",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the modern city of Tel Aviv takes its name from the exiles' settlement in Babylonia mentioned in Ezekiel 3:15.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Ezekiel 3:15: “Then I came to them of the captivity at Tel Aviv who lived by the river Chebar.” Many English Bibles spell it Tel-abib; the Hebrew is Tel Aviv.",
      world:
        "The Babylonian name was probably til abūbi, “mound of the flood,” a term for an old ruin mound. In Hebrew it sounds like “hill of spring.” In 1902 Nahum Sokolow used Tel Aviv as the Hebrew title for Theodor Herzl's novel Altneuland, and in 1910 the new Jewish neighbourhood near Jaffa took the name.",
      theirEyes:
        "Judean deportees were settled on an abandoned mound by a canal: a ruin to be rebuilt, far from home.",
      debate: "The Akkadian origin of the name is the usual explanation, but the exact site of the Babylonian Tel-abib is unknown.",
    },
    confidence: "settled",
    references: ["Ezekiel 3:15"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Tel Aviv–Yafo,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "Daniel I. Block, The Book of Ezekiel, Chapters 1–24 (NICOT, Eerdmans, 1997), on 3:15" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-055",
    era: "exile",
    level: 11,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ezekiel protests at baking his siege bread over human dung. What fuel does God allow him instead?",
    choices: ["Olive wood", "Cow's dung", "Charcoal", "Dried reeds"],
    answer: 1,
    explanation: {
      textSays:
        "His bread was made of “wheat, barley, beans, lentils, millet, and spelt” in one vessel, eaten by weight, “twenty shekels a day” (Ezekiel 4:9–10). When the priest protests that he has never eaten anything unclean (4:14), God says: “I have given you cow's dung for man's dung, and you shall prepare your bread on it” (4:15).",
      world:
        "Dried animal dung was an ordinary cooking fuel in the treeless parts of the Near East, and still is in places. The mixed-grain bread and tiny rations acted out the hunger of a city under siege.",
      theirEyes:
        "Neighbours watching Ezekiel scrape together scraps of six kinds of grain and beans for one small loaf saw exactly what Jerusalem's kitchens would come to.",
    },
    confidence: "settled",
    references: ["Ezekiel 4:9–15"],
    sources: [scripture, { kind: "scholarship", citation: "Moshe Greenberg, Ezekiel 1–20 (Anchor Bible 22, Doubleday, 1983)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "exi-056",
    era: "exile",
    level: 12,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Ezekiel 4, on what does the prophet draw Jerusalem to act out its siege?",
    choices: ["A sheet of papyrus", "A bronze shield", "A clay brick", "A cedar plank"],
    answer: 2,
    explanation: {
      textSays:
        "Ezekiel 4:1–3: “take a tile, and lay it before yourself, and portray on it a city, even Jerusalem.” He adds siege works, camps and battering rams, and sets an iron pan as a wall: “This shall be a sign to the house of Israel.” The Hebrew word, levenah, means a brick.",
      world:
        "In Babylonia, clay was everywhere: houses and temples were built of brick, many stamped with Nebuchadnezzar's name, and scribes wrote on clay tablets. A clay tablet from Nippur, drawn centuries before Ezekiel, even shows a plan of that city with its walls, gates and canals.",
      theirEyes:
        "In a land of mud brick, a prophet scratching a besieged city onto a brick was using the most Babylonian material there was.",
    },
    confidence: "settled",
    references: ["Ezekiel 4:1–3"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Clay map of Nippur, Hilprecht Collection, Friedrich Schiller University Jena" },
      { kind: "archaeology", citation: "Stamped bricks of Nebuchadnezzar II from Babylon (e.g., British Museum collection)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-057",
    era: "exile",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the Hebrew text of Ezekiel 4, how many days must the prophet lie on his left side for Israel's iniquity?",
    choices: ["40", "70", "390", "430"],
    answer: 2,
    explanation: {
      textSays:
        "Ezekiel 4:5: “I have appointed the years of their iniquity to be to you a number of days, even three hundred ninety days.” Then he lies on his right side for Judah: “I have appointed forty days, each day for a year, to you” (4:6).",
      world:
        "The Greek Septuagint reads 190 days for Israel instead of 390. Scholars do not agree how the numbers were calculated or how the prophet carried out the sign while also cooking his rations (4:9).",
      theirEyes:
        "Day after day the exiles at Tel-abib could walk past the prophet lying beside his model city, a living calendar of judgement.",
      debate:
        "Some read the 390 years as Israel's history of sin since the founding of the Temple or the division of the kingdom; others think the numbers are symbolic. Whether he lay there all day or for part of each day is also debated.",
    },
    confidence: "settled",
    references: ["Ezekiel 4:4–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Ezekiel 4:5, 4:9" },
      { kind: "scholarship", citation: "Walther Zimmerli, Ezekiel 1 (Hermeneia, Fortress, 1979)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-058",
    era: "exile",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ezekiel shaves his head and beard and divides the hair into thirds. What does he use as a razor?",
    choices: ["A sharp sword", "A flint knife", "A potsherd", "A priest's knife from the altar"],
    answer: 0,
    explanation: {
      textSays:
        "Ezekiel 5:1: “take a sharp sword. You shall take it as a barber's razor to yourself.” He weighs the hair on balances; a third is burned “in the middle of the city,” a third struck with the sword, and a third scattered “to the wind” (5:2). A few hairs are tied in his robe (5:3).",
      world:
        "Shaving the head was a sign of mourning and humiliation in the ancient Near East. Priests were told not to shave their heads (Leviticus 21:5), which makes a priest shaving with a sword all the more startling.",
      theirEyes:
        "The sword passing over the prophet's head showed the exiles that the coming war would cut through Jerusalem's people.",
    },
    confidence: "settled",
    references: ["Ezekiel 5:1–4", "Leviticus 21:5"],
    sources: [scripture, { kind: "scholarship", citation: "Moshe Greenberg, Ezekiel 1–20 (Anchor Bible 22, Doubleday, 1983)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-059",
    era: "exile",
    level: 12,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ezekiel 8:1 dates a vision to a day when the elders of Judah were sitting before him. Where was he?",
    choices: ["In his house", "In the Temple court", "In a synagogue", "In the king's palace in Babylon"],
    answer: 0,
    explanation: {
      textSays:
        "Ezekiel 8:1: “as I sat in my house, and the elders of Judah sat before me, the Lord Yahweh's hand fell on me there.” Elders come and sit before him again in 14:1 and 20:1.",
      world:
        "The exiles had their own houses and their own leaders, the elders, who met to consult the prophet. Ezekiel 33:30–32 describes people chatting about him “by the walls and in the doors of the houses” and coming to hear him like a pleasant song. There is no evidence yet of synagogues this early: the earliest inscriptions for Jewish prayer houses come from Egypt in the 3rd century BCE.",
      theirEyes:
        "With no Temple in reach, the leaders of the community crowded into a priest's house to ask whether God had any word for them.",
    },
    confidence: "settled",
    references: ["Ezekiel 8:1", "Ezekiel 14:1", "Ezekiel 20:1", "Ezekiel 33:30–32"],
    sources: [scripture, { kind: "scholarship", citation: "Lee I. Levine, The Ancient Synagogue (Yale University Press, 2nd ed. 2005)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-060",
    era: "exile",
    level: 12,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Ezekiel's vision of the Temple, women sit at the north gate weeping for which god?",
    choices: ["Dagon", "Tammuz", "Chemosh", "Molech"],
    answer: 1,
    explanation: {
      textSays:
        "Ezekiel 8:14: “he brought me to the door of the gate of Yahweh's house which was toward the north; and I saw the women sit there weeping for Tammuz.”",
      world:
        "Tammuz is the Mesopotamian Dumuzi, a shepherd god whose death was mourned every year in laments. The Babylonian month Duʾūzu (around June–July) was named after him, and Jews later adopted it as the month Tammuz along with the other Babylonian month names.",
      theirEyes:
        "Ezekiel sees mourning rites he could have heard among his Babylonian neighbours being held at the gate of Yahweh's own house.",
    },
    confidence: "settled",
    references: ["Ezekiel 8:14"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Thorkild Jacobsen, The Treasures of Darkness: A History of Mesopotamian Religion (Yale University Press, 1976)" },
      { kind: "reference", citation: "“Tammuz,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "exi-061",
    era: "exile",
    level: 13,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Ezekiel's vision, God's glory leaves the Temple and the city. Where does it stop?",
    choices: ["On Mount Sinai", "On the mountain east of the city", "Over the river Chebar", "On Mount Gerizim"],
    answer: 1,
    explanation: {
      textSays:
        "First “Yahweh's glory went out from over the threshold of the house and stood over the cherubim” at the east gate (Ezekiel 10:18–19). Then it “went up from the middle of the city, and stood on the mountain which is on the east side of the city” (11:23), the Mount of Olives. In the closing vision it returns: “the glory of the God of Israel came from the way of the east” (43:2), and the east gate is shut because Yahweh has entered by it (44:2).",
      world: "The vision is dated to 592 BCE (8:1), about five or six years before the Babylonians burned the Temple in 587 or 586 BCE.",
      theirEyes:
        "To exiles who thought God could never leave Jerusalem, the picture of his glory rising out of the Temple was terrifying.",
    },
    confidence: "settled",
    references: ["Ezekiel 10:18–19", "Ezekiel 11:22–23", "Ezekiel 43:1–5", "Ezekiel 44:1–2"],
    sources: [scripture, { kind: "scholarship", citation: "Daniel I. Block, The Book of Ezekiel, Chapters 1–24 (NICOT, Eerdmans, 1997)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-062",
    era: "exile",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: when Ezekiel's wife died, God told him to carry out all the usual public mourning rites.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "God warns: “I will take away from you the desire of your eyes with one stroke; yet you shall neither mourn nor weep” (Ezekiel 24:16). He must keep his headdress and sandals on and not “eat mourner's bread” (24:17). “At evening my wife died” (24:18). He becomes a sign: when God profanes the Temple, “the desire of your eyes,” the exiles too will not mourn or weep, but “pine away in your iniquities” (24:21–24).",
      world:
        "Normal mourning meant baring the head, going barefoot, covering the lips and eating mourner's bread, probably food brought by neighbours, so his silence would have been noticed at once.",
      theirEyes:
        "The neighbours asked why the widowed priest was dressed as on any ordinary day, and his answer was about Jerusalem.",
    },
    confidence: "settled",
    references: ["Ezekiel 24:15–24"],
    sources: [scripture, { kind: "scholarship", citation: "Moshe Greenberg, Ezekiel 21–37 (Anchor Bible 22A, Doubleday, 1997)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-063",
    era: "exile",
    level: 13,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Ezekiel 24:2 tells the prophet to write down the date. What happened far away in Judah on that day?",
    choices: [
      "The Temple was burned",
      "Nebuchadnezzar began the siege of Jerusalem",
      "King Zedekiah was captured",
      "Gedaliah the governor was murdered",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Ezekiel 24:1–2, in the ninth year, tenth month, tenth day: “write the name of the day, this same day. The king of Babylon drew close to Jerusalem this same day.” 2 Kings 25:1 gives the same date: Nebuchadnezzar “encamped against it; and they built forts against it around it.”",
      world: "The date falls in early 588 BCE (some scholars calculate January 587). The siege lasted about a year and a half.",
      theirEyes:
        "Hundreds of kilometres away, the exiles had no news; the prophet's dated note would prove later that he had known.",
      tradition: {
        shared:
          "Zechariah 8:19 mentions “the fasts of the fourth, fifth, seventh, and tenth months” kept by Judah after the destruction. Later Jewish tradition links the tenth-month fast with the start of this siege; it is still observed today as the fast of the Tenth of Tevet.",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 24:1–2", "2 Kings 25:1", "Zechariah 8:19"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Moshe Greenberg, Ezekiel 21–37 (Anchor Bible 22A, Doubleday, 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-064",
    era: "exile",
    level: 13,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Herodotus says Babylonians, living in a land watered by canals, did not use olive oil. What did they make oil from?",
    choices: ["Walnuts", "Sesame", "Olives imported from Judah", "Fish"],
    answer: 1,
    explanation: {
      world:
        "Herodotus (Histories 1.193) describes Babylonia as almost rainless, watered by hand and by canals, with huge grain harvests and date palms that supplied food, wine and honey. He says the people used no olive oil, only oil from sesame. Cuneiform records agree that barley, dates and sesame were major crops, and the Al-Yahudu tablets show Judean exiles leasing land and owing dues and debts in produce such as barley and dates.",
      textSays:
        "Ezekiel lived “among the captives by the river Chebar” (Ezekiel 1:1), one of the canals that watered this plain.",
      theirEyes:
        "For a family from the olive terraces of Judah, the first lamp lit with sesame oil by a canal bank was a reminder of how far from home they were.",
    },
    confidence: "settled",
    references: ["Ezekiel 1:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 1.193" },
      { kind: "scholarship", citation: "L. E. Pearce and C. Wunsch, Documents of Judean Exiles and West Semites in Babylonia in the Collection of David Sofer (CUSAS 28, 2014)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-065",
    era: "exile",
    level: 13,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Ezekiel 9, a scribe marks the foreheads of the faithful. The Hebrew word for “mark” is also the name of what?",
    choices: ["A Hebrew letter", "A priestly garment", "A kind of seal ring", "A Babylonian god"],
    answer: 0,
    explanation: {
      textSays:
        "Ezekiel 9:4: “set a mark on the foreheads of the men that sigh and that cry over all the abominations that are done within it.” The Hebrew for “mark” is taw, the last letter of the Hebrew alphabet.",
      world: "In the old Hebrew script of Ezekiel's day, taw was written like an X or a +.",
      theirEyes:
        "A scribe's quick stroke of ink was the only thing that separated the protected from the condemned.",
      tradition: {
        jewish:
          "The Damascus Document, known from the Dead Sea Scrolls and the Cairo Genizah, quotes Ezekiel 9:4: those who “sigh and groan” are marked and escape in the time of judgement (CD 19:11–12).",
        christian:
          "Revelation 7:3 has God's servants “sealed… on their foreheads,” and Tertullian (Against Marcion 3.22) saw the taw's cross shape as a sign of the cross.",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 9:2–4", "Revelation 7:3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Damascus Document (CD) 19:11–12" },
      { kind: "primary", citation: "Tertullian, Against Marcion 3.22" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "exi-066",
    era: "exile",
    level: 14,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ezekiel 34 condemns Israel's shepherds who feed themselves. Whom does God promise to set up as the “one shepherd”?",
    choices: ["My servant Moses", "My servant David", "My servant Job", "My servant Ezekiel"],
    answer: 1,
    explanation: {
      textSays:
        "Ezekiel 34:2: “Woe to the shepherds of Israel who feed themselves! Shouldn't the shepherds feed the sheep?” God promises to seek the lost himself, then: “I will set up one shepherd over them, and he will feed them, even my servant David” (34:23; compare 37:24).",
      world:
        "Kings across the ancient Near East called themselves shepherds of their people; Hammurabi's law code uses the title. Ezekiel turns the royal title into a charge sheet against Judah's rulers.",
      theirEyes:
        "Exiles who had watched their last kings lead them into disaster heard a promise of a shepherd who would actually care for the flock.",
      tradition: {
        jewish:
          "The Psalms of Solomon (1st century BCE) hope for a son of David who will shepherd the Lord's flock faithfully and righteously (Psalms of Solomon 17).",
        christian: "John 10:11 has Jesus say, “I am the good shepherd,” drawing on this chapter.",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 34:1–24", "Ezekiel 37:24", "John 10:11"],
    sources: [
      scripture,
      { kind: "primary", citation: "Psalms of Solomon 17" },
      { kind: "primary", citation: "Code of Hammurabi, prologue and epilogue" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-067",
    era: "exile",
    level: 14,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ezekiel 36:26 promises to take away Israel's “stony heart.” What will replace it?",
    choices: ["A heart of gold", "A heart of fire", "A heart of flesh", "A heart of cedar"],
    answer: 2,
    explanation: {
      textSays:
        "Ezekiel 36:26: “I will also give you a new heart, and I will put a new spirit within you. I will take away the stony heart out of your flesh, and I will give you a heart of flesh.” The next verse adds God's own spirit, so that they will keep his laws (36:27; compare 11:19).",
      world:
        "In Hebrew thought the heart was the seat of thinking and choosing, not just feeling. A heart of stone is one that cannot respond.",
      theirEyes:
        "To exiles blamed for stubbornness, this was news that God himself would make them able to change.",
      tradition: {
        jewish:
          "Jubilees (2nd century BCE) echoes the promise: God says he will circumcise the foreskin of their heart and create a holy spirit in them (Jubilees 1:23).",
        christian:
          "Paul contrasts tablets of stone with “tablets that are hearts of flesh,” written by the Spirit (2 Corinthians 3:3).",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 36:26–27", "Ezekiel 11:19", "2 Corinthians 3:3"],
    sources: [scripture, { kind: "primary", citation: "Jubilees 1:23 (R. H. Charles translation)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-068",
    era: "exile",
    level: 14,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Ezekiel's Gog is “prince of Rosh, Meshech, and Tubal.” Where do Assyrian records place Meshech and Tubal?",
    choices: ["Arabia", "Anatolia (modern Turkey)", "Egypt", "India"],
    answer: 1,
    explanation: {
      textSays:
        "Ezekiel 38:2: “set your face toward Gog, of the land of Magog, the prince of Rosh, Meshech, and Tubal.” His defeated hordes are buried in “The valley of Hamon Gog” for seven months (39:11–12).",
      world:
        "Assyrian inscriptions name the Mushki and Tabal, peoples of central and eastern Anatolia; these match Meshech and Tubal. To a Judean, they lived at the northern edge of the known world.",
      theirEyes:
        "Gog's army comes from the far north, beyond every empire the exiles knew, yet falls on the mountains of Israel.",
      tradition: {
        christian: "Revelation 20:8 turns the names into two end-time nations, “Gog and Magog.”",
      },
      debate:
        "Who Gog was is uncertain; one common suggestion is Gyges (Gugu), king of Lydia in Ashurbanipal's annals. Whether “Rosh” is a place name or means “chief prince” is also debated.",
    },
    confidence: "mainstream",
    references: ["Ezekiel 38:1–3", "Ezekiel 39:11–12", "Revelation 20:8"],
    sources: [
      scripture,
      { kind: "primary", citation: "Assyrian royal inscriptions naming Mushki and Tabal (Tiglath-pileser I, Sargon II)" },
      { kind: "scholarship", citation: "Daniel I. Block, The Book of Ezekiel, Chapters 25–48 (NICOT, Eerdmans, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-069",
    era: "exile",
    level: 14,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Ezekiel 47 says the river from the Temple will turn even the swamps and marshes by the Dead Sea fresh.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "The water flows east “into the Arabah” and into the sea, and “the waters of the sea will be healed” (Ezekiel 47:8–9). Fishermen will spread nets “From En Gedi even to En Eglaim” (47:10). “But its swamps and marshes will not be healed. They will be given up to salt” (47:11).",
      world:
        "En Gedi is an oasis on the western shore of the Dead Sea, too salty for fish. Many commentators suggest the marshes are left salty because salt was valuable, so even the healed sea keeps a source of it.",
      theirEyes:
        "Anyone who had seen the dead, glittering shore below En Gedi would grasp the wonder of fishermen there.",
      tradition: {
        christian:
          "Revelation 22:1–2 adapts the image: a river of the water of life with trees whose leaves are “for the healing of the nations,” as Ezekiel's leaves are “for healing” (47:12).",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 47:1–12", "Revelation 22:1–2"],
    sources: [scripture, { kind: "scholarship", citation: "Daniel I. Block, The Book of Ezekiel, Chapters 25–48 (NICOT, Eerdmans, 1998)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-070",
    era: "exile",
    level: 14,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Ezekiel 29:18 says Nebuchadnezzar's army besieged Tyre until heads were bald. What did it gain from Tyre?",
    choices: ["The king's daughter", "No wages at all", "The gold of the temple of Melqart", "The whole Phoenician fleet"],
    answer: 1,
    explanation: {
      textSays:
        "Ezekiel 29:18: “Every head was made bald, and every shoulder was worn; yet he had no wages, nor did his army, from Tyre.” So Egypt is promised as “the wages for his army” (29:19). Earlier, Ezekiel 26:4–5 had said Tyre would become “a bare rock… a place for the spreading of nets.”",
      world:
        "Josephus, citing Phoenician records, says Nebuchadnezzar besieged Tyre for thirteen years in the reign of King Ithobal (Against Apion 1.21). The island city seems to have submitted on terms rather than being sacked. This oracle is dated to the 27th year of the exile, about 571 BCE, the latest date in the book.",
      theirEyes: "The exiles in Babylonia heard news of the endless siege of the island city from soldiers and traders.",
      debate:
        "Scholars discuss how Ezekiel 26 relates to this later note; many see 29:17–20 as the prophet updating his own earlier oracle. Others point to Alexander the Great's capture of Tyre in 332 BCE.",
    },
    confidence: "settled",
    references: ["Ezekiel 26:3–14", "Ezekiel 29:17–20"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Against Apion 1.21; Antiquities of the Jews 10.11.1" },
      { kind: "primary", citation: "Arrian, Anabasis of Alexander 2.15–24 (siege of Tyre)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "exi-071",
    era: "exile",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Around 180 BCE, Ben Sira praised Ezekiel. On what does Sirach 49:8 say Ezekiel saw God's glory?",
    choices: ["The chariot of the cherubim", "The Ark in the Holy of Holies", "A burning bush", "A ladder reaching to heaven"],
    answer: 0,
    explanation: {
      textSays:
        "Sirach 49:8: “Ezekiel saw the vision of glory, which God showed him on the chariot of the cherubim.” Ezekiel 1 itself describes living creatures, wheels and a throne, but never uses the word “chariot.”",
      world:
        "The Hebrew text of Sirach (Cairo Genizah manuscript B) also has merkavah, “chariot,” here: Ezekiel “saw a vision and described the kinds of the chariot.” Merkavah later became the name for Jewish mystical speculation on Ezekiel's vision; 1 Chronicles 28:18 already links “the chariot” with the cherubim over the Ark.",
      theirEyes:
        "For a Jerusalem teacher of Ben Sira's day, Ezekiel was the prophet who had seen God's throne on the move.",
      tradition: {
        jewish:
          "Sirach is one of the earliest known texts outside Ezekiel to call the vision a chariot, showing the label was in use well before Jesus' day.",
      },
    },
    confidence: "settled",
    references: ["Sirach 49:8", "Ezekiel 1:4–28", "1 Chronicles 28:18"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "P. W. Skehan and A. A. Di Lella, The Wisdom of Ben Sira (Anchor Bible 39, Doubleday, 1987)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-072",
    era: "exile",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Songs of the Sabbath Sacrifice, found at Qumran and Masada, describe cherubim blessing what, drawing on Ezekiel?",
    choices: ["The image of the chariot-throne", "The tablets of the Law", "The golden calf", "The bronze serpent"],
    answer: 0,
    explanation: {
      world:
        "This Dead Sea Scrolls work gives thirteen songs for the Sabbaths of one quarter of the year, describing angelic priests worshipping in the heavenly temple. The twelfth song (4Q405 frags. 20 ii–21–22) has the cherubim fall down and bless the image of the chariot-throne (merkavah) above their heads, with wheels, fire and a quiet divine voice. Copies were found in Qumran Caves 4 and 11 and at Masada.",
      textSays:
        "The song reworks Ezekiel 1 and 10, where living creatures and wheels move beneath “the likeness of a throne” (Ezekiel 1:26).",
      theirEyes:
        "Singing these songs on the Sabbath, worshippers imagined joining the angels around the very throne Ezekiel had seen.",
      tradition: {
        jewish:
          "The Songs show that, before Jesus' day, some Jews used Ezekiel's vision to picture heavenly worship, a key early step in merkavah tradition.",
      },
    },
    confidence: "settled",
    references: ["Ezekiel 1:26", "Ezekiel 10:1–22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Dead Sea Scrolls, Songs of the Sabbath Sacrifice: 4Q400–407, 11Q17, Mas1k; 4Q405 frags. 20 ii–21–22" },
      { kind: "scholarship", citation: "Carol Newsom, Songs of the Sabbath Sacrifice: A Critical Edition (Scholars Press, 1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-073",
    era: "exile",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A Babylonian astronomical tablet in Berlin, VAT 4956, records the moon and planets in the 37th year of which king?",
    choices: ["Nabonidus", "Cyrus the Great", "Nebuchadnezzar II", "Belshazzar"],
    answer: 2,
    explanation: {
      world:
        "Babylonian astronomers kept nightly “diaries” of the sky, the earliest dated to 652 BCE. VAT 4956 records positions of the moon and planets in Nebuchadnezzar's 37th year. Because these positions can be calculated backwards, the tablet fixes that year as 568/567 BCE and anchors the dates of Nebuchadnezzar's reign, and with them Jerusalem's fall. Nabonidus reigned 17 years and Cyrus ruled Babylon for less than ten. Belshazzar, called king in Daniel 5, governed as crown prince for his father Nabonidus, and Babylonian documents were never dated by years of his own reign.",
      textSays: "Ezekiel's dates count from King Jehoiachin's exile in 597 BCE (Ezekiel 1:2; 33:21).",
      theirEyes:
        "While Judean exiles counted years since their king was taken, Babylonian scholars were measuring the sky night by night.",
    },
    confidence: "settled",
    references: ["Ezekiel 1:2", "Ezekiel 33:21"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "VAT 4956, Vorderasiatisches Museum, Staatliche Museen zu Berlin" },
      { kind: "scholarship", citation: "A. J. Sachs and H. Hunger, Astronomical Diaries and Related Texts from Babylonia, vol. 1 (Vienna, 1988)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-074",
    era: "exile",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Murashu archive from Nippur, which names Judeans among its clients, dates from Nebuchadnezzar's reign.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "The Murashu archive, found at Nippur by a University of Pennsylvania expedition in 1893, is the business records of a family firm that managed land and lent money. Its hundreds of tablets date to the second half of the 5th century BCE, under the Persian kings Artaxerxes I and Darius II, over a century after Ezekiel. Some clients bear Yahwistic names, showing Judeans still farming near Nippur long after Cyrus. Its tablets also mention the nāru kabari, the canal usually identified with Ezekiel's Chebar.",
      textSays: "Ezekiel lived among exiles “by the river Chebar” (Ezekiel 1:1; 3:15).",
      theirEyes:
        "Great-grandchildren of Ezekiel's generation were still leasing fields and signing contracts in the same canal country.",
    },
    confidence: "settled",
    references: ["Ezekiel 1:1", "Ezekiel 3:15"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Murashu archive, Nippur (University of Pennsylvania expedition, 1893)" },
      { kind: "scholarship", citation: "M. W. Stolper, Entrepreneurs and Empire: The Murašû Archive, the Murašû Firm, and Persian Rule in Babylonia (1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-075",
    era: "exile",
    level: 15,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Many read “the thirtieth year” in Ezekiel 1:1 as the priest's age. Why might thirty matter?",
    choices: [
      "Numbers 4 sets thirty as the age to begin service at the Tent of Meeting",
      "Thirty was the age for joining Israel's army",
      "The Law forbade marriage before thirty",
      "Babylon released captives at thirty",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Ezekiel 1:1: “Now in the thirtieth year… I saw visions of God.” Verse 2 dates it to “the fifth year of King Jehoiachin's captivity,” about 593 BCE. Numbers 4:3 sets service at the Tent of Meeting “from thirty years old and upward even until fifty years old”; army service started at twenty (Numbers 1:3).",
      world:
        "If it is his age, a priest who would have begun Temple service at thirty receives a vision of God's glory in Babylonia instead.",
      theirEyes: "At the age he should have entered the Temple, Ezekiel sat by a Babylonian canal.",
      tradition: {
        christian: "Origen (Homilies on Ezekiel 1) took it as Ezekiel's age and compared him to Jesus, who was about thirty when he began his ministry (Luke 3:23).",
      },
      debate:
        "The verse does not say what the thirtieth year counts from. Besides his age, proposals include thirty years since King Josiah's reform (about 622 BCE) and a dating system now lost.",
    },
    confidence: "debated",
    references: ["Ezekiel 1:1–3", "Numbers 4:3", "Numbers 1:3", "Luke 3:23"],
    sources: [
      scripture,
      { kind: "primary", citation: "Origen, Homilies on Ezekiel 1" },
      { kind: "scholarship", citation: "Walther Zimmerli, Ezekiel 1 (Hermeneia, Fortress, 1979)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
