import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const exile4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "exi-076",
    era: "exile",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Daniel 7, four great beasts come up from the sea. The first is like a lion with what?",
    choices: ["Seven heads", "Iron teeth", "Eagle's wings", "Three ribs in its mouth"],
    answer: 2,
    explanation: {
      textSays:
        "Daniel 7:4: “The first was like a lion, and had eagle's wings.” The second is like a bear with “three ribs” in its mouth (7:5), the third like a leopard with four heads (7:6), and the fourth has “great iron teeth” and ten horns (7:7). One of the heavenly attendants explains: “These great animals, which are four, are four kings” (7:16–17).",
      world:
        "Composite beasts were familiar in Mesopotamian art: winged, human-headed bulls and lions guarded Assyrian palace gates. Most interpreters take the lion as Babylon, the empire that opens the sequence.",
      theirEyes:
        "To an exile who knew Mesopotamia's winged guardian beasts, a lion with eagle's wings looked like the empire's own art turned into a vision of judgment.",
      tradition: {
        jewish:
          "2 Esdras (4 Ezra), written about 100 CE, just after the Temple's fall, says its own eagle vision is “the fourth kingdom which appeared in a vision to your brother Daniel” (12:11), reading Daniel's last empire as Rome.",
      },
    },
    confidence: "settled",
    references: ["Daniel 7:3–8", "Daniel 7:16–17", "2 Esdras 12:11"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "John J. Collins, Daniel (Hermeneia, Fortress, 1993), on Daniel 7:4" },
      { kind: "primary", citation: "2 Esdras (4 Ezra) 12:11" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-077",
    era: "exile",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Daniel 6, the royal decree that traps Daniel bans petitions to any god or man except the king for how long?",
    choices: ["Seven days", "Thirty days", "Forty days", "One year"],
    answer: 1,
    explanation: {
      textSays:
        "Daniel 6:7 (6:8 in Aramaic): “whoever asks a petition of any god or man for thirty days, except of you, O king, he shall be cast into the den of lions.” Daniel keeps praying three times a day (6:10). After he is thrown in, a stone is laid on the den and the king seals it “with his own signet” (6:17; English verse numbers are one lower than the Aramaic throughout this chapter).",
      world:
        "The king here is “Darius the Mede,” who is not known outside Daniel; how to identify him is debated. Sealing with a signet ring, pressed into clay, was a standard way of guaranteeing that nothing had been tampered with.",
      theirEyes:
        "Thirty days was long enough to catch a man who prayed openly three times a day, and short enough to look like a harmless honour for the king.",
      tradition: {
        christian:
          "Hebrews 11:33 recalls those who through faith “stopped the mouths of lions,” usually read as a reference to Daniel.",
      },
    },
    confidence: "settled",
    references: ["Daniel 6:7", "Daniel 6:10", "Daniel 6:17", "Hebrews 11:33"],
    sources: [scripture, { kind: "scholarship", citation: "John J. Collins, Daniel (Hermeneia, Fortress, 1993), on Daniel 6" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-078",
    era: "exile",
    level: 16,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Daniel is the only book of the Hebrew Bible that gives angels personal names. Which two does it name?",
    choices: ["Michael and Raphael", "Raphael and Uriel", "Gabriel and Uriel", "Gabriel and Michael"],
    answer: 3,
    explanation: {
      textSays:
        "A voice calls, “Gabriel, make this man understand the vision” (Daniel 8:16), and “the man Gabriel” returns in 9:21. Michael is “one of the chief princes” (10:13) and “the great prince who stands for the children of your people” (12:1).",
      world:
        "Earlier books speak of unnamed messengers; naming individual angels with special roles is a feature of later Second Temple writing.",
      theirEyes:
        "For Jews under foreign rule, it was a comfort to hear that Israel had its own heavenly prince standing guard over them.",
      tradition: {
        jewish:
          "Second Temple writings name more angels: Michael, Uriel, Raphael and Gabriel in 1 Enoch 9:1, and in Tobit, Raphael, who calls himself “one of the seven holy angels” (12:15). The War Scroll from Qumran has the names Michael, Gabriel, Sariel and Raphael written on the shields of the battle “towers” (1QM 9).",
        christian:
          "In Luke 1:19 the angel says, “I am Gabriel, who stands in the presence of God.” Jude 9 calls Michael “the archangel,” and Revelation 12:7 has Michael and his angels fight the dragon.",
      },
    },
    confidence: "settled",
    references: ["Daniel 8:16", "Daniel 9:21", "Daniel 10:13", "Daniel 12:1", "Luke 1:19", "Jude 9", "Revelation 12:7"],
    sources: [
      scripture,
      { kind: "primary", citation: "1 Enoch 9:1; Tobit 12:15" },
      { kind: "primary", citation: "Dead Sea Scrolls, War Scroll (1QM) col. 9" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-079",
    era: "exile",
    level: 16,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Bel and the Dragon, how does Daniel prove that Bel's priests, not the idol, eat the food left in the temple?",
    choices: [
      "He hides inside the temple all night",
      "He weighs the food before and after",
      "He scatters ashes on the temple floor",
      "He posts soldiers at the secret door",
    ],
    answer: 2,
    explanation: {
      textSays:
        "In this Greek addition (Daniel 14 in Catholic and Orthodox Bibles), Bel daily receives “twelve great measures of fine flour, forty sheep, and six firkins of wine” (v. 3). Daniel's servants scatter ashes, the door is sealed with the king's signet, and in the morning the king sees “the footsteps of men, women, and children” (vv. 14–20).",
      world:
        "Babylonian temples really did serve their gods meals each day, and the food was then shared out to the king and temple staff. Assyriologist A. Leo Oppenheim called this “the care and feeding of the gods.”",
      theirEyes:
        "A Jew in a city where gods were fed like kings would have enjoyed a story in which the god's appetite turns out to be the priests' families.",
      tradition: {
        shared:
          "Bel and the Dragon is in Catholic and Orthodox Bibles; Protestant Bibles place it in the Apocrypha. It is not in the Hebrew Bible.",
      },
    },
    confidence: "settled",
    references: ["Bel and the Dragon 1–22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Bel and the Dragon (Greek additions to Daniel), Theodotion version" },
      { kind: "scholarship", citation: "A. Leo Oppenheim, Ancient Mesopotamia: Portrait of a Dead Civilization (University of Chicago Press, 1964; rev. 1977), “The Care and Feeding of the Gods”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-080",
    era: "exile",
    level: 16,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Isaiah 46:1 says, “Bel bows down. Nebo stoops.” Nebo is the Babylonian god Nabu, patron of what?",
    choices: ["Writing and scribes", "The moon", "The underworld", "The sea"],
    answer: 0,
    explanation: {
      textSays:
        "Isaiah 46:1: “Bel bows down. Nebo stoops. Their idols are carried by animals, and on the livestock.” The prophet contrasts gods that must be carried with Israel's God, who carries his people (46:3–4).",
      world:
        "Bel (“lord”) was a title of Marduk, Babylon's chief god. Nabu, his son, was god of writing and wisdom; his symbol was a scribe's stylus, and his temple, Ezida, stood at Borsippa near Babylon. At each New Year festival Nabu's statue was carried to Babylon. Kings' names honoured him: Nebuchadnezzar is Nabu-kudurri-usur, usually translated “Nabu, protect my heir.”",
      theirEyes:
        "Exiles had watched the gods' statues paraded through Babylon's streets in splendour. The prophet pictured them instead as heavy cargo, wobbling on the backs of tired animals.",
    },
    confidence: "settled",
    references: ["Isaiah 46:1–4"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Nabu,” Encyclopaedia Britannica" },
      { kind: "reference", citation: "Jeremy Black and Anthony Green, Gods, Demons and Symbols of Ancient Mesopotamia (British Museum Press, 1992), s.v. “Nabu”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "exi-081",
    era: "exile",
    level: 17,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Aramaic section of Daniel, which begins at 2:4, ends exactly where the court stories end, with chapter 6.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Daniel 2:4: “Then the Chaldeans spoke to the king in the Syrian language” (the World English Bible's term for Aramaic). From that point the book is in Aramaic until the end of chapter 7, the vision of the four beasts. Chapters 8–12 return to Hebrew.",
      world:
        "So the language division (Hebrew 1:1–2:4a; Aramaic 2:4b–7:28; Hebrew 8–12) does not match the content division between stories (chapters 1–6) and visions (chapters 7–12). Chapter 7 belongs to both halves.",
      theirEyes:
        "A bilingual Judean could follow the switch easily: Hebrew for Israel's sacred story, Aramaic for the language of the empire's court.",
      debate:
        "Why the book uses two languages is debated. Many critical scholars think older Aramaic stories were combined with newer Hebrew visions; traditional interpreters see a deliberate design by one author.",
    },
    confidence: "settled",
    references: ["Daniel 2:4", "Daniel 7:28", "Daniel 8:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "John J. Collins, Daniel (Hermeneia, Fortress, 1993), introduction (“The Problem of Language”)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-082",
    era: "exile",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Qumran Community Rule quotes Isaiah 40:3. How does it say the “way” is prepared in the wilderness?",
    choices: [
      "By building a road for pilgrims",
      "By studying the Law given through Moses",
      "By fighting a holy war against Rome",
      "By offering sacrifice at a desert altar",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Isaiah 40:3: “The voice of one who calls out, ‘Prepare the way of Yahweh in the wilderness! Make a level highway in the desert for our God.’” In its exilic setting, the verse announces a road home from Babylon.",
      world:
        "In the Cave 1 copy, dated to about 100 BCE, the Community Rule (1QS 8.12–16) tells members to separate from the wicked and go into the wilderness to prepare the way, quoting Isaiah 40:3, and explains that the way is the study of the Law commanded through Moses.",
      theirEyes:
        "For a community living by the Dead Sea, Isaiah's desert highway was not a road at all: it was the daily work of reading and keeping the Law.",
      tradition: {
        christian:
          "All four Gospels apply the verse to John the Baptist, following the Greek wording “the voice of one crying in the wilderness” (Mark 1:3; Matthew 3:3; Luke 3:4; John 1:23).",
      },
    },
    confidence: "settled",
    references: ["Isaiah 40:3", "Mark 1:3", "Matthew 3:3", "Luke 3:4", "John 1:23"],
    sources: [
      scripture,
      { kind: "primary", citation: "Dead Sea Scrolls, Community Rule (1QS) 8.12–16" },
      { kind: "scholarship", citation: "Geza Vermes, The Complete Dead Sea Scrolls in English (Penguin), Community Rule" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-083",
    era: "exile",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: one of Isaiah's “servant songs” explicitly names the servant as “Israel.”",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Isaiah 49:3: “You are my servant, Israel, in whom I will be glorified.” Yet two verses later the servant is sent “to bring Jacob again to him” (49:5) and is also made “a light to the nations” (49:6).",
      world:
        "Scholars usually count four servant songs: Isaiah 42:1–4 (or –9), 49:1–6, 50:4–9 and 52:13–53:12.",
      theirEyes:
        "Exiles hearing these songs could recognise their own story: a people crushed and scattered, yet told they still had a task among the nations.",
      tradition: {
        jewish:
          "The Septuagint makes the collective reading explicit at Isaiah 42:1, adding names: “Jacob is my servant… Israel is my chosen.”",
        christian:
          "The New Testament applies the songs to Jesus: Matthew 8:17 quotes Isaiah 53:4, and in Acts 8:32–35 Philip explains Isaiah 53:7–8 as about him.",
      },
      debate:
        "Whether the servant is the people of Israel, a faithful group within it, the prophet himself, or a future individual is one of the oldest debates in biblical studies; the songs may shift between collective and individual.",
    },
    confidence: "settled",
    references: ["Isaiah 49:3–6", "Isaiah 42:1", "Isaiah 53:4", "Matthew 8:17", "Acts 8:32–35"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Isaiah 42:1" },
      { kind: "scholarship", citation: "Joseph Blenkinsopp, Isaiah 40–55 (Anchor Bible 19A, Doubleday, 2002), on the servant passages" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-084",
    era: "exile",
    level: 17,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "During Babylon's New Year (Akitu) festival in Nisannu, what did the high priest do to the king before Marduk?",
    choices: [
      "Shaved the king's head and beard",
      "Washed him seven times in the Euphrates",
      "Crowned him with a wreath of palm leaves",
      "Struck him on the cheek",
    ],
    answer: 3,
    explanation: {
      world:
        "The ritual tablets, copied in the Seleucid period and probably drawing on older practice, say that on the 5th of Nisannu the high priest (šešgallu) took away the king's royal insignia, the king declared before Bel (Marduk) that he had not sinned or neglected Babylon, and the priest struck him on the cheek. If the king's tears flowed, Bel was favourable. The evening before, on the 4th, the priest recited the creation epic Enuma Elish.",
      textSays:
        "Isaiah 46:1 pictures Bel and Nebo, the gods at the heart of this festival, carried off like baggage.",
      theirEyes:
        "Judean exiles in Babylon would have seen the city pack its streets each spring, as the gods' statues were carried in procession.",
      debate:
        "Scholars debate how old the late ritual texts' details are, and what the slap meant: humbling, renewal of kingship or atonement.",
    },
    confidence: "mainstream",
    references: ["Isaiah 46:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Babylonian New Year (Akitu) ritual tablets (Seleucid-period copies), trans. A. Sachs in J. B. Pritchard, ed., Ancient Near Eastern Texts Relating to the Old Testament (ANET)" },
      { kind: "reference", citation: "Jona Lendering, “Akitu Festival,” Livius.org" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-085",
    era: "exile",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Daniel 9:24 speaks of “seventy weeks.” Most interpreters, ancient and modern, take each “week” to mean what?",
    choices: ["Seven days", "Seven months", "Seven years", "Seventy years"],
    answer: 2,
    explanation: {
      textSays:
        "Gabriel tells Daniel, “Seventy weeks are decreed on your people and on your holy city” (Daniel 9:24), divided into seven, sixty-two and one week; after the sixty-two, “the Anointed One will be cut off” (9:25–27). It reworks Jeremiah's seventy years (9:2).",
      world:
        "The Torah already counts weeks of years: “seven Sabbaths of years, seven times seven years” (Leviticus 25:8). Seventy weeks of years is 490 years.",
      theirEyes:
        "Seventy years had passed and life was still hard; seventy sevens of years turned a disappointment into a longer plan.",
      tradition: {
        jewish: "Josephus says Daniel also foretold that the Romans would take Jerusalem and lay the Temple waste (Antiquities 10.11.7).",
        christian: "From early writers such as Tertullian onward, many Christians have counted the weeks to the time of Christ.",
      },
      debate:
        "Where the 490 years start and end is strongly debated. Many critical scholars end them in the 160s BCE, taking the “anointed one” as the high priest Onias III, murdered about 171 BCE (2 Maccabees 4:34).",
    },
    confidence: "mainstream",
    references: ["Daniel 9:2", "Daniel 9:24–27", "Leviticus 25:8", "2 Maccabees 4:34"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 10.11.7" },
      { kind: "primary", citation: "Tertullian, Against the Jews 8" },
      { kind: "scholarship", citation: "John J. Collins, Daniel (Hermeneia, Fortress, 1993), on Daniel 9:24–27" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "exi-086",
    era: "exile",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The date of the Book of Daniel is debated. Which statement fairly describes the two main views?",
    choices: [
      "Tradition: 6th century BCE; most critical scholars: c. 167–164 BCE",
      "Tradition: 8th century BCE; most critical scholars: c. 600 BCE",
      "Both sides agree it was written after the Temple fell in 70 CE",
      "Both sides agree the Dead Sea Scrolls prove a date after 100 CE",
    ],
    answer: 0,
    explanation: {
      textSays:
        "The book is set in Babylon from Nebuchadnezzar to Cyrus, and chapters 7–12 speak in Daniel's own voice. Matthew 24:15 refers to “Daniel the prophet.”",
      world:
        "Eight Daniel manuscripts were found at Qumran; the oldest, 4QDan-c, is dated to the late 2nd century BCE.",
      theirEyes:
        "For Jews persecuted by Antiochus IV in the 160s BCE, Daniel's message was urgent either way: kings who defy God fall, and the faithful are vindicated.",
      tradition: {
        jewish: "Josephus treats Daniel as a 6th-century prophet and says Alexander the Great was shown its prophecy about him (Antiquities 11.8.5).",
        christian:
          "Christian tradition has generally held the 6th-century date. The philosopher Porphyry (3rd century CE) argued for a Maccabean date; Jerome's Commentary on Daniel records and answers him.",
      },
      debate:
        "Critical scholars note that chapter 11 tracks the 160s BCE closely, but its forecast of Antiochus IV's end (11:40–45) does not match his death in Persia in 164 BCE, so they date the book just before. Traditional scholars defend a 6th-century author whose visions are genuine prediction.",
    },
    confidence: "debated",
    references: ["Daniel 11:40–45", "Matthew 24:15"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.8.5" },
      { kind: "primary", citation: "Jerome, Commentary on Daniel, prologue" },
      { kind: "scholarship", citation: "John J. Collins, Daniel (Hermeneia, Fortress, 1993), introduction" },
      { kind: "scholarship", citation: "Eugene Ulrich et al., Qumran Cave 4.XI: Psalms to Chronicles (Discoveries in the Judaean Desert XVI, Oxford, 2000), on 4QDan-c" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-087",
    era: "exile",
    level: 18,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Daniel 7 explains its vision of “one like a son of man.” To whom does Daniel 7:18 say the kingdom will be given?",
    choices: ["The king of Persia", "The saints of the Most High", "The four great animals", "The little horn"],
    answer: 1,
    explanation: {
      textSays:
        "Daniel 7:13–14: “there came with the clouds of the sky one like a son of man,” and he was given a kingdom, “one that will not be destroyed.” The interpretation: “the saints of the Most High will receive the kingdom, and possess the kingdom forever” (7:18; compare 7:27).",
      world: "In Aramaic, “son of man” (bar enash) simply means a human being: a human figure set against the beasts.",
      theirEyes:
        "After beasts from the sea had trampled the earth, a human figure on the clouds promised that power would pass to God's people.",
      tradition: {
        jewish: "The Similitudes of Enoch (1 Enoch 37–71) develop the figure into a heavenly judge, “that Son of Man.”",
        christian:
          "In the Gospels “the Son of Man” is Jesus' most frequent self-description; before the high priest he says, “You will see the Son of Man… coming with the clouds of the sky” (Mark 14:62).",
      },
      debate:
        "Scholars debate whether Daniel's figure symbolises faithful Israel, is an angel such as Michael who represents them, or is a messianic individual.",
    },
    confidence: "settled",
    references: ["Daniel 7:13–14", "Daniel 7:18", "Daniel 7:27", "Mark 14:62"],
    sources: [
      scripture,
      { kind: "primary", citation: "1 Enoch 46; 48 (Similitudes of Enoch)" },
      { kind: "scholarship", citation: "John J. Collins, Daniel (Hermeneia, Fortress, 1993), excursus on the “one like a son of man”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-088",
    era: "exile",
    level: 18,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: several of the musical instruments named in Daniel 3 have names borrowed from Greek.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Daniel 3:5 has the crowds bow “whenever you hear the sound of the horn, flute, zither, lyre, harp, pipe, and all kinds of music.”",
      world:
        "Three of the Aramaic words are Greek loanwords: qaytros (Greek kitharis, a lyre), pesanterin (psaltērion, a harp) and sumponyah (symphōnia, an instrument whose exact type is uncertain). They are among the only Greek words in the Hebrew Bible / Old Testament.",
      theirEyes:
        "At a great court ceremony, an orchestra with instruments from across the known world was a show of imperial reach.",
      debate:
        "The loanwords are used in the dating debate. Many critical scholars see them as a sign of the Hellenistic era; K. A. Kitchen and others reply that Greek traders and mercenaries were already in the Near East in the 6th century BCE, so a few instrument names could have travelled early.",
    },
    confidence: "settled",
    references: ["Daniel 3:5"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "K. A. Kitchen, “The Aramaic of Daniel,” in D. J. Wiseman et al., Notes on Some Problems in the Book of Daniel (Tyndale, 1965)" },
      { kind: "scholarship", citation: "John J. Collins, Daniel (Hermeneia, Fortress, 1993), on Daniel 3:5" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-089",
    era: "exile",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: in Bel and the Dragon, the prophet Habakkuk is carried to Babylon to bring Daniel food in the lions' den.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "After Daniel kills the dragon, angry Babylonians force the king to throw him to seven lions for six days. An angel tells Habakkuk in Judea to take his reapers' stew to Daniel, then “lifted him up by the hair of his head” and set him in Babylon over the den (Bel and the Dragon 31–36). Daniel eats; on the seventh day the king finds him alive (vv. 37–40).",
      world:
        "The Old Greek version of the story opens by calling it “from the prophecy of Habakkuk son of Joshua, of the tribe of Levi.” In the Hebrew Bible, Habakkuk prophesies as the Chaldeans rise (Habakkuk 1:6), so the storyteller brings him into Daniel's world.",
      theirEyes: "Listeners would laugh at the picture: a prophet whisked across the desert by his hair, still holding a bowl of stew.",
      tradition: {
        shared: "Catholic and Orthodox Bibles include the story as Daniel 14; Protestant Bibles place it in the Apocrypha.",
      },
    },
    confidence: "settled",
    references: ["Bel and the Dragon 31–42", "Habakkuk 1:6"],
    sources: [
      scripture,
      { kind: "primary", citation: "Bel and the Dragon (Greek additions to Daniel), Old Greek and Theodotion versions" },
      { kind: "scholarship", citation: "C. A. Moore, Daniel, Esther and Jeremiah: The Additions (Anchor Bible 44, 1977)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-090",
    era: "exile",
    level: 18,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Cyrus Cylinder says which god searched for a just king, took Cyrus by the hand and called him by name?",
    choices: ["Ahura Mazda", "Shamash", "Marduk", "Sin"],
    answer: 2,
    explanation: {
      world:
        "The cylinder, written in Akkadian for Babylon after Cyrus took the city in 539 BCE, says Marduk, angry at Nabonidus, searched all lands for a righteous king, took Cyrus's hand and called him by name to rule (lines 11–12). Then Marduk let him enter Babylon without battle.",
      textSays:
        "Isaiah 45:1 uses strikingly similar language for Israel's God: “Yahweh says to his anointed, to Cyrus, whose right hand I have held.” Isaiah 45:4 adds, “I have called you by your name.”",
      theirEyes:
        "Babylonians and Judeans heard the same conqueror claimed by two different gods, each saying Cyrus was his chosen instrument.",
      debate:
        "Some scholars think the prophet deliberately answers Babylonian royal propaganda; others see shared ancient Near Eastern language for a king's divine call.",
    },
    confidence: "settled",
    references: ["Isaiah 45:1–4"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Cyrus Cylinder, British Museum BM 90920, lines 11–12, trans. Irving Finkel (British Museum)" },
      { kind: "scholarship", citation: "Joseph Blenkinsopp, Isaiah 40–55 (Anchor Bible 19A, Doubleday, 2002), on Isaiah 45:1–7" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "exi-091",
    era: "exile",
    level: 19,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Babylonian “mouth-washing” ritual for a new god statue, what did the craftsmen who made it have to declare?",
    choices: [
      "That they had used only gold from the temple treasury",
      "That they had not made it: a god had made it",
      "That the statue was a portrait of the king",
      "That they would never carve another image",
    ],
    answer: 1,
    explanation: {
      world:
        "The mīs pî (“washing of the mouth”) ritual brought a new cult statue to life so it could see, eat and smell. The craftsmen's hands were bound and symbolically “cut off” with a wooden knife, and each swore that he had not made the statue: the craftsmen's gods, forms of Ea, had made it. The surviving instructions date from the 1st millennium BCE.",
      textSays:
        "Isaiah 44 mocks the very idea of a man-made god: a man burns part of a log to roast meat, and “The rest of it he makes into a god… and prays to it, and says, ‘Deliver me, for you are my god!’” (44:17).",
      theirEyes:
        "The prophet told exiles what the craftsmen were made to deny: the god in the temple had come from a carpenter's bench.",
    },
    confidence: "settled",
    references: ["Isaiah 44:9–20"],
    sources: [
      scripture,
      { kind: "primary", citation: "Mīs pî ritual tablets, ed. and trans. C. Walker and M. B. Dick, The Induction of the Cult Image in Ancient Mesopotamia: The Mesopotamian Mīs Pî Ritual (Helsinki, 2001)" },
      { kind: "scholarship", citation: "M. B. Dick, ed., Born in Heaven, Made on Earth: The Making of the Cult Image in the Ancient Near East (Eisenbrauns, 1999)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-092",
    era: "exile",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Isaiah 52:7 praises the feet of the messenger who brings good news. What does the messenger say to Zion?",
    choices: ["“Cyrus has conquered!”", "“Your God reigns!”", "“The Temple is rebuilt!”", "“Your king has come home!”"],
    answer: 1,
    explanation: {
      textSays:
        "Isaiah 52:7: “How beautiful on the mountains are the feet of him who brings good news, who publishes peace, who brings good news, who proclaims salvation, who says to Zion, ‘Your God reigns!’”",
      world:
        "The Septuagint translates “bringing good news” with the Greek verb euangelizomai, the family of words behind the English “evangelist” and the New Testament's “gospel.”",
      theirEyes:
        "In a ruined Jerusalem, the sight of a runner on the hills could mean anything. This one brought the news that God was king again.",
      tradition: {
        jewish:
          "A Qumran text, 11QMelchizedek (11Q13), interprets the messenger of Isaiah 52:7 as “the anointed of the spirit” who announces God's end-time release.",
        christian:
          "Paul quotes the verse for preachers of the gospel: “How beautiful are the feet of those who preach the Good News of peace” (Romans 10:15).",
      },
    },
    confidence: "settled",
    references: ["Isaiah 52:7", "Romans 10:15"],
    sources: [
      scripture,
      { kind: "primary", citation: "Dead Sea Scrolls, 11QMelchizedek (11Q13), col. 2" },
      { kind: "primary", citation: "Septuagint, Isaiah 52:7" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-093",
    era: "exile",
    level: 19,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Isaiah 47:13 taunts Babylon's “stargazers.” What was Babylon's great standard collection of celestial omens called?",
    choices: ["Enuma Elish", "The Epic of Gilgamesh", "The Code of Hammurabi", "Enūma Anu Enlil"],
    answer: 3,
    explanation: {
      textSays:
        "Isaiah 47:13: “let the astrologers, the stargazers, and the monthly prognosticators stand up and save you from the things that will happen to you.” Daniel 2:2 likewise lists “the Chaldeans” among the king's experts.",
      world:
        "Enūma Anu Enlil (“When Anu and Enlil…”, from its opening words) was a series of about 70 tablets with thousands of omens from the moon, sun, planets and weather, mostly about the king and the land. Enuma Elish is the creation epic; the other two are not omen texts.",
      theirEyes:
        "In Babylon, scholars watched the sky every night and reported to the king; an eclipse could send the whole court into anxious rituals.",
      tradition: {
        shared: "Over time “Chaldean” itself came to mean an astrologer in Greek and Latin writers, as well as a Babylonian.",
      },
    },
    confidence: "settled",
    references: ["Isaiah 47:13", "Daniel 2:2"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Francesca Rochberg, The Heavenly Writing: Divination, Horoscopy, and Astronomy in Mesopotamian Culture (Cambridge University Press, 2004)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-094",
    era: "exile",
    level: 19,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A hostile Babylonian poem, the “Verse Account of Nabonidus,” accuses the king of favouring which god over Marduk?",
    choices: ["Sin, the moon god", "Ashur, god of Assyria", "Tammuz", "Ahura Mazda"],
    answer: 0,
    explanation: {
      world:
        "The poem, written after Cyrus took Babylon in 539 BCE, says Nabonidus made a strange image of the moon god Sin, stopped the New Year festival and went off to Tayma in Arabia. Cyrus, by contrast, is praised for restoring Babylon's gods. Nabonidus' own inscriptions confirm his devotion to Sin, whose temples at Harran and Ur he rebuilt.",
      theirEyes:
        "Babylon's priests had a king who seemed to love another god more than theirs, and after he fell they made sure everyone knew it.",
      tradition: {
        jewish:
          "The Prayer of Nabonidus from Qumran (4Q242) remembered the same king with a Jewish twist: struck ill at Tayma until a Jewish exile helped him.",
      },
      debate: "Historians debate how much of the poem is fair, since it was written as propaganda for the new Persian ruler.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Verse Account of Nabonidus (British Museum), trans. A. L. Oppenheim in J. B. Pritchard, ed., Ancient Near Eastern Texts Relating to the Old Testament (ANET)" },
      { kind: "scholarship", citation: "Paul-Alain Beaulieu, The Reign of Nabonidus, King of Babylon 556–539 B.C. (Yale University Press, 1989)" },
      { kind: "primary", citation: "Dead Sea Scrolls, 4Q242 (Prayer of Nabonidus)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-095",
    era: "exile",
    level: 19,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Greek Prayer of Azariah, with no Temple or sacrifice available, what does Azariah ask God to accept instead?",
    choices: [
      "Incense burned facing Jerusalem",
      "Gold from the king's treasury",
      "A contrite heart and a humble spirit",
      "The fasting of all the exiles",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Inside the furnace Azariah prays that there is now no “prince, or prophet, or leader, or burnt offering, or sacrifice, or oblation, or incense, or place to offer before you… Nevertheless in a contrite heart and a humble spirit let us be accepted, like the burnt offerings of rams and bullocks” (Daniel 3:38–40 in Greek; Prayer of Azariah 15–17).",
      world:
        "The prayer is one of the Greek additions to Daniel 3, alongside the Song of the Three Young Men. It echoes Psalm 51:17 (51:19 in Hebrew), “a broken and contrite heart,” and fits a time when Jews prayed far from, or without, a functioning Temple.",
      theirEyes:
        "For exiles hundreds of miles from a burned Temple, the question was real: if no altar is left, how can anyone come before God?",
      tradition: {
        shared: "Catholic and Orthodox Bibles include the prayer in Daniel 3; Protestant Bibles place it in the Apocrypha.",
      },
    },
    confidence: "settled",
    references: ["Prayer of Azariah 15–17", "Psalm 51:17"],
    sources: [
      scripture,
      { kind: "primary", citation: "Prayer of Azariah (Greek additions to Daniel 3)" },
      { kind: "scholarship", citation: "C. A. Moore, Daniel, Esther and Jeremiah: The Additions (Anchor Bible 44, 1977)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "exi-096",
    era: "exile",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Isaiah 53:11, the Dead Sea Scrolls and Septuagint have a word missing from the Masoretic Text. The servant will see what?",
    choices: ["The light", "The stars", "The Temple", "The sea"],
    answer: 0,
    explanation: {
      textSays:
        "The World English Bible follows the scrolls: “After the suffering of his soul, he will see the light and be satisfied” (Isaiah 53:11). Its footnote says the Masoretic Text omits “the light.”",
      world:
        "“Light” appears in the Great Isaiah Scroll (1QIsa-a), copied in the 2nd century BCE, and in the Septuagint. The medieval Masoretic Text, the standard Hebrew text, lacks the word.",
      theirEyes:
        "To a reader in the late Second Temple period, the servant who is crushed in this song still comes out into the light at the end.",
      tradition: {
        christian:
          "Many Christians read “he will see the light” as pointing to the servant's vindication after death, which they relate to Jesus' resurrection.",
      },
      debate:
        "Most textual critics think “light” is original and dropped out of the Masoretic tradition; some argue it was added to clarify the sense.",
    },
    confidence: "settled",
    references: ["Isaiah 53:11"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Great Isaiah Scroll (1QIsa-a), Qumran Cave 1; Shrine of the Book, Israel Museum" },
      { kind: "primary", citation: "Septuagint, Isaiah 53:11" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-097",
    era: "exile",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A Qumran scroll, 4Q176, gathers comforting passages from Isaiah 40–55. What does its modern title, Tanhumim, mean?",
    choices: ["Rules", "Consolations", "Mysteries", "Blessings"],
    answer: 1,
    explanation: {
      textSays: "Isaiah 40 opens: “Comfort, comfort my people,” says your God. “Speak comfortably to Jerusalem” (40:1–2).",
      world:
        "4Q176 (4QTanhumim, “Consolations”), published by John Allegro in 1968, strings together passages of comfort, mostly from Isaiah 40–55 and including the opening of Isaiah 40, with a few comments. Its title shares the Hebrew root of “comfort” (n-ḥ-m) in Isaiah 40:1.",
      theirEyes:
        "Under foreign rule, a reader at Qumran could unroll a single scroll full of God's promises to comfort Jerusalem.",
      tradition: {
        christian:
          "Luke 2:25 describes Simeon as “looking for the consolation of Israel,” the hope these chapters of Isaiah express.",
      },
    },
    confidence: "settled",
    references: ["Isaiah 40:1–5", "Luke 2:25"],
    sources: [
      scripture,
      { kind: "primary", citation: "Dead Sea Scrolls, 4Q176 (4QTanhumim), ed. J. M. Allegro, Discoveries in the Judaean Desert V (1968)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-098",
    era: "exile",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Daniel 12 ends with two different numbers of days to the end, one right after the other. Which pair?",
    choices: ["1,260 and 1,600", "1,290 and 1,335", "40 and 400", "70 and 490"],
    answer: 1,
    explanation: {
      textSays:
        "Daniel 12:11–12: from the time “the abomination that makes desolate” is set up, “there will be one thousand two hundred ninety days. Blessed is he who waits, and comes to the one thousand three hundred thirty-five days.” Daniel 8:14 had given “two thousand and three hundred evenings and mornings.”",
      world:
        "Both numbers are close to three and a half years (“a time, times, and a half,” 12:7). By 1 Maccabees' dates, the Temple's desecration under Antiochus IV lasted three years, from December 167 to December 164 BCE.",
      theirEyes:
        "For the faithful waiting through persecution, every number was a countdown. The final word was simply: keep waiting.",
      debate:
        "Many critical scholars, such as John J. Collins, think the later numbers were added as the earlier dates passed. Traditional interpreters read the different figures as stages in God's plan, and many link them to the end of history.",
    },
    confidence: "settled",
    references: ["Daniel 12:7", "Daniel 12:11–12", "Daniel 8:14"],
    sources: [
      scripture,
      { kind: "primary", citation: "1 Maccabees 1:54; 4:52–54" },
      { kind: "scholarship", citation: "John J. Collins, Daniel (Hermeneia, Fortress, 1993), on Daniel 12:11–12" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-099",
    era: "exile",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus retells Nebuchadnezzar's dream of the statue of four metals but declines to explain one part of it. Which?",
    choices: ["The head of gold", "The chest and arms of silver", "The legs of iron", "The stone cut out without hands"],
    answer: 3,
    explanation: {
      textSays:
        "Daniel 2:34–35: “a stone was cut out without hands, which struck the image on its feet,” and it “became a great mountain and filled the whole earth.” Daniel explains it as a kingdom from God “which will never be destroyed” (2:44).",
      world:
        "Josephus interprets the metals as successive kingdoms, ending with an iron one that will rule for ever. Of the stone, he says Daniel explained it to the king, but he does not think it proper to relate it, since he writes of things past and present, not things to come (Antiquities 10.10.4).",
      theirEyes: "Writing in Rome under the Flavian emperors, Josephus knew that a stone that smashes the iron kingdom was risky to explain.",
      tradition: {
        jewish: "Many scholars think Josephus took the iron kingdom as Rome and the stone as a future kingdom that would replace it.",
        christian: "Many Church Fathers, including Irenaeus and Jerome, read the stone as Christ and his kingdom.",
      },
    },
    confidence: "settled",
    references: ["Daniel 2:31–45"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 10.10.4 (10.210)" },
      { kind: "primary", citation: "Irenaeus, Against Heresies 5.26" },
      { kind: "primary", citation: "Jerome, Commentary on Daniel, on 2:31–35" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-100",
    era: "exile",
    level: 20,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Ezekiel 14:14 names three righteous men whose goodness could save only themselves. Noah and Job are two. Who is the third?",
    choices: ["Abraham", "Daniel", "Moses", "Enoch"],
    answer: 1,
    explanation: {
      textSays:
        "Ezekiel 14:14: “though these three men, Noah, Daniel, and Job, were in it, they would deliver only their own souls by their righteousness.” The trio returns in 14:20, and Ezekiel 28:3 taunts the king of Tyre: “you are wiser than Daniel.”",
      world:
        "Here the Hebrew consonants spell Dan'el, not the fuller Daniyyel of the book of Daniel. Clay tablets from Ugarit (late 2nd millennium BCE) tell of Danel, an ancient king who judges the cause of the widow and the orphan, in the epic of Aqhat.",
      theirEyes:
        "Exiles hearing Ezekiel name Noah, Daniel and Job would have pictured famous righteous men of old; even they could not shield a guilty land.",
      tradition: {
        jewish: "The Book of Jubilees (2nd century BCE) names Enoch's wife as Edni, daughter of a Dan'el (Jubilees 4:20), so the name was also linked with the earliest generations.",
      },
      debate:
        "Many scholars think Ezekiel means the ancient Danel known from Ugarit, since Noah and Job are also ancient figures outside Israel. Others, especially traditional interpreters, identify him with the Daniel of the book of Daniel, a younger contemporary of Ezekiel in exile.",
    },
    confidence: "settled",
    references: ["Ezekiel 14:14", "Ezekiel 14:20", "Ezekiel 28:3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Epic of Aqhat (Ugarit, KTU 1.17–1.19), trans. in Simon B. Parker, ed., Ugaritic Narrative Poetry (SBL Writings from the Ancient World, 1997)" },
      { kind: "primary", citation: "Jubilees 4:20" },
      { kind: "scholarship", citation: "Daniel I. Block, The Book of Ezekiel, Chapters 1–24 (NICOT, Eerdmans, 1997), on 14:14" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
];
