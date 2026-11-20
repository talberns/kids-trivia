import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const hellenistic4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "hel-076",
    era: "hellenistic",
    level: 16,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Who first found scrolls in what is now called Qumran Cave 1, in the winter of 1946–47?",
    choices: [
      "A British army survey team",
      "A Bedouin shepherd of the Ta'amireh tribe",
      "The Dominican archaeologist Roland de Vaux",
      "Monks from the monastery of Mar Saba",
    ],
    answer: 1,
    explanation: {
      world:
        "The usual account says a young Ta'amireh shepherd, Muhammad edh-Dhib, threw a stone into a cave while looking for a stray goat, heard pottery break, and with his companions found jars holding scrolls. The first seven scrolls passed through antiquities dealers in Bethlehem: four were bought by the Syrian Orthodox Metropolitan Athanasius Samuel and three by Eleazar Sukenik of the Hebrew University. Roland de Vaux and G. Lankester Harding excavated the cave officially only in 1949.",
      theirEyes:
        "Some two thousand years earlier, someone had set those jars in the dark, perhaps hoping the books inside would outlast whatever was coming.",
      debate: "Details of the story, including the exact date and who entered the cave first, vary between the Bedouin's own later tellings.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "scholarship", citation: "James C. VanderKam, The Dead Sea Scrolls Today (2nd ed., Eerdmans, 2010)" },
      { kind: "reference", citation: "“Dead Sea Scrolls,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-077",
    era: "hellenistic",
    level: 16,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Scrolls from the Qumran area are numbered by the cave they came from. How many Qumran caves yielded written scrolls or fragments?",
    choices: ["Three", "Seven", "Eleven", "Forty"],
    answer: 2,
    explanation: {
      world:
        "Between 1947 and 1956 Bedouin and archaeologists found manuscripts in eleven caves, numbered 1Q to 11Q; that is why a scroll's label, such as 4Q175 or 11Q19, begins with its cave number. Some caves are natural openings in the limestone cliffs; others (Caves 4, 5 and 7–10) were cut by hand into the soft marl terrace close to the ruins of Khirbet Qumran.",
      theirEyes:
        "To a scroll-keeper at Qumran, the caves were simply the nearest dry, hidden places in a harsh landscape he knew well.",
      debate:
        "In February 2017 a Hebrew University team led by Oren Gutfeld, working with Randall Price of Liberty University, announced a possible twelfth scroll cave: it held broken storage jars, a blank piece of parchment and 1950s looters' pickaxe heads, but no written scroll, so it is not counted among the eleven.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "scholarship", citation: "Jodi Magness, The Archaeology of Qumran and the Dead Sea Scrolls (2nd ed., Eerdmans, 2021)" },
      { kind: "scholarship", citation: "James C. VanderKam, The Dead Sea Scrolls Today (2nd ed., Eerdmans, 2010)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-078",
    era: "hellenistic",
    level: 16,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The Copper Scroll (3Q15), found in Qumran Cave 3 in 1952, is unlike the other scrolls. What does it contain?",
    choices: [
      "A list of places where gold, silver and other valuables were hidden",
      "The earliest known copy of the Ten Commandments",
      "A Greek translation of Genesis",
      "The community's membership roll",
    ],
    answer: 0,
    explanation: {
      world:
        "Engraved in Hebrew on thin sheets of copper, the scroll lists about sixty-four hiding places with huge amounts of silver and gold, for example buried “under the steps” or in a cistern. It was too corroded to unroll, so in 1955–56 H. Wright Baker cut it into 23 strips at the Manchester College of Technology. Since 2013 it has been displayed in the Jordan Museum in Amman.",
      theirEyes:
        "Whoever hammered these letters into metal wanted the list to survive fire, damp and time.",
      debate:
        "Scholars still argue whether the treasure was real (perhaps Temple wealth hidden before 70 CE) or legendary, and whether the scroll has anything to do with the Qumran community. No treasure from its list has been found.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Copper Scroll (3Q15), Qumran Cave 3; Jordan Museum, Amman" },
      { kind: "scholarship", citation: "Al Wolters, The Copper Scroll: Overview, Text and Translation (Sheffield Academic Press, 1996)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-079",
    era: "hellenistic",
    level: 16,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Pliny the Elder describes the Essenes living west of the Dead Sea without women or money, with only what for company?",
    choices: ["Lions", "Palm trees", "Scrolls", "Camels"],
    answer: 1,
    explanation: {
      world:
        "Pliny (Natural History 5.73, written in the 70s CE) calls the Essenes a people unique in the world: without women, having renounced all desire, without money, “socia palmarum,” with only palm trees for company. He marvels that a people in whom no one is born lives on for ages, refilled by those tired of life. Below them, he says, was the town of En-gedi.",
      theirEyes:
        "To a Roman reader, a crowd of men choosing the desert over cities and families sounded almost like a fable.",
      debate:
        "Many scholars think Pliny's Essenes “above” En-gedi are the people of Qumran; others say his description fits the hills above En-gedi itself, or that he is relying on old reports.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Pliny the Elder, Natural History 5.73" },
      { kind: "scholarship", citation: "Menahem Stern, Greek and Latin Authors on Jews and Judaism, vol. 1 (1974)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-080",
    era: "hellenistic",
    level: 16,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which Qumran cave, cut into the marl terrace just across a ravine from the ruins, held by far the largest number of manuscripts?",
    choices: ["Cave 1", "Cave 3", "Cave 4", "Cave 11"],
    answer: 2,
    explanation: {
      world:
        "Ta'amireh Bedouin found Cave 4 in September 1952, and archaeologists cleared the rest. It held fragments of several hundred manuscripts, roughly three-quarters of all the scrolls from the immediate Qumran area, broken into thousands of small pieces: biblical books, rules, calendars, commentaries and prayers. Its closeness to the settlement is one of the main reasons scholars link the scrolls to the people who lived at Khirbet Qumran.",
      theirEyes:
        "Whoever packed Cave 4 so close to home could not have guessed that, over the centuries, most of its books would crumble into the dirt of the cave floor.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "scholarship", citation: "Jodi Magness, The Archaeology of Qumran and the Dead Sea Scrolls (2nd ed., Eerdmans, 2021)" },
      { kind: "scholarship", citation: "James C. VanderKam, The Dead Sea Scrolls Today (2nd ed., Eerdmans, 2010)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "hel-081",
    era: "hellenistic",
    level: 17,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jubilees and many Qumran texts use a 364-day solar calendar. What made it attractive to its users?",
    choices: [
      "It matched the Seleucid royal calendar",
      "Each date, and each festival, fell on the same day of the week every year",
      "It needed no Sabbaths",
      "It followed the phases of the moon exactly",
    ],
    answer: 1,
    explanation: {
      world:
        "364 days is exactly 52 weeks, so the year always began on the same weekday (a Wednesday), and the main festivals never fell on a Sabbath. Jubilees insists that Israel keep a year of 364 days (Jubilees 6:32) and warns against those who make observations of the moon, which it says disturbs the seasons (6:36–37). Calendar scrolls from Cave 4 also list the rotation of priestly courses in this year.",
      theirEyes:
        "For a member of the community, keeping God's feasts on the wrong day, as the Jerusalem priests did, was not a scheduling error but a sin.",
      debate: "How the community kept a 364-day year in step with the real solar year of about 365¼ days is unknown; no surviving text clearly explains how extra days were added.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Jubilees 6:29–38 (R. H. Charles translation)" },
      { kind: "scholarship", citation: "James C. VanderKam, Calendars in the Dead Sea Scrolls: Measuring Time (Routledge, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-082",
    era: "hellenistic",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Community Rule's “Treatise on the Two Spirits” says God appointed two spirits for humans to walk in. What are they?",
    choices: [
      "The spirits of truth and of falsehood",
      "The spirits of Jerusalem and of Babylon",
      "The spirits of wisdom and of strength",
      "The spirits of the body and of the dead",
    ],
    answer: 0,
    explanation: {
      world:
        "The Community Rule (1QS 3.13–4.26), found in Cave 1, teaches that God created humankind with two spirits, of truth and of falsehood (or injustice), until the time of his visitation. The “sons of righteousness” are ruled by the Prince of Lights, and the “sons of injustice” by the Angel of Darkness. Each person has a share of both, and God will destroy falsehood at the end.",
      theirEyes:
        "A new member learned that the struggle between good and evil ran not only through the world, but through his own heart.",
      tradition: {
        shared: "Scholars compare its contrast of light and darkness, truth and falsehood with the language of John's Gospel and 1 John, and with Persian dualism, though direct borrowing is debated.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Community Rule (1QS), cols. 3–4, Qumran Cave 1; Shrine of the Book, Israel Museum" },
      { kind: "scholarship", citation: "Geza Vermes, The Complete Dead Sea Scrolls in English (Penguin, rev. ed. 2011)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-083",
    era: "hellenistic",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "1 Enoch's Animal Apocalypse retells Israel's history with animals. Most scholars see Judah Maccabee in which figure?",
    choices: ["A white bull", "A lion from the forest", "A sheep that grows a great horn", "An eagle with twelve wings"],
    answer: 2,
    explanation: {
      world:
        "In this vision (1 Enoch 85–90) Adam and the early patriarchs are white bulls, Jacob's descendants are a flock of sheep, and the nations are wild beasts and birds of prey. Late in the story lambs open their eyes, and a great horn sprouts on one of the sheep, which fights off the ravens and other birds (90:9–12). Because of that climax, scholars usually date the work to the 160s BCE, during the Maccabean revolt.",
      theirEyes:
        "To a reader in 164 BCE, the whole history of the world seemed to be leading up to the battles being fought that very year.",
      tradition: {
        jewish: "Aramaic fragments of this part of 1 Enoch (the Book of Dreams) were found at Qumran, so the vision was read in Judea in the late Second Temple period.",
      },
      debate: "Some older commentators identified the great horn with John Hyrcanus I, and some scholars think the vision was updated in stages during the revolt; the identification with Judah Maccabee is the majority view, and most date the work to about 165–160 BCE.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "primary", citation: "1 Enoch 85–90 (trans. G. W. E. Nickelsburg and J. C. VanderKam, 2012)" },
      { kind: "scholarship", citation: "Patrick A. Tiller, A Commentary on the Animal Apocalypse of I Enoch (Scholars Press, 1993)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-084",
    era: "hellenistic",
    level: 17,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the Book of Tobit, how is old Tobit's blindness cured?",
    choices: [
      "He breathes the smoke of a fish's burning heart and liver",
      "He washes seven times in the Jordan",
      "His son rubs a fish's bile on his eyes",
      "He bathes in the pool of Siloam",
    ],
    answer: 2,
    explanation: {
      textSays:
        "The angel Raphael, travelling in disguise as “Azarias, the son of Ananias the great” (Tobit 5:12), tells Tobias to keep the heart, liver and bile of a fish that leapt out of the river Tigris at him: the heart and liver are to be burned to drive off a demon. “But as for the bile, it is good to anoint a man that has white films in his eyes, and he will be healed” (6:1–8). Back home, Tobias “rubbed the bile on his father’s eyes,” and “the white films peeled away” (11:11–13). Only then does the guide reveal: “I am Raphael, one of the seven holy angels” (12:15).",
      world: "Tobit is usually dated to the 3rd or early 2nd century BCE; Aramaic and Hebrew fragments of it were found at Qumran. Raphael's name means “God heals.”",
      theirEyes: "A family hearing the tale would smile at the joke: the hired helper offered a drachma a day was an angel all along.",
    },
    confidence: "settled",
    references: ["Tobit 5:12–14", "Tobit 6:1–8", "Tobit 11:11–13", "Tobit 12:15"],
    sources: [scripture, { kind: "scholarship", citation: "Joseph A. Fitzmyer, Tobit (Commentaries on Early Jewish Literature, De Gruyter, 2003)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-085",
    era: "hellenistic",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Book of Jubilees presents itself as revealed to Moses on Mount Sinai. Who dictates it to him?",
    choices: ["Enoch", "An angel of the presence", "Aaron the priest", "The prophet Elijah"],
    answer: 1,
    explanation: {
      world:
        "Jubilees (usually dated to the mid-2nd century BCE) opens with God telling an angel of the presence to write (or dictate) for Moses the history from creation (Jubilees 1:27), and the angel then speaks to Moses (2:1), drawing on what is written on the heavenly tablets (1:29). The book retells Genesis and early Exodus, dating every event in “jubilees” of 49 years.",
      theirEyes:
        "For its readers, Jubilees was not a new book but the hidden half of what Moses heard on the mountain.",
      tradition: {
        jewish:
          "Roughly fifteen copies of Jubilees were found at Qumran, and the Damascus Document refers its readers to it by its title, the Book of the Divisions of the Times into their Jubilees and Weeks (CD 16.3–4), so some Jews of the time treated it as authoritative.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Jubilees 1:27–29; 2:1 (R. H. Charles translation)" },
      { kind: "primary", citation: "Damascus Document (CD) 16.3–4" },
      { kind: "scholarship", citation: "James C. VanderKam, Jubilees (Hermeneia, Fortress, 2018)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "hel-086",
    era: "hellenistic",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Wisdom of Solomon says that “the souls of the righteous” are where, though fools think they have died?",
    choices: ["In Sheol, asleep", "In the hand of God", "Under the altar of the Temple", "In the stars of heaven"],
    answer: 1,
    explanation: {
      textSays:
        "Wisdom 3:1–4: “But the souls of the righteous are in the hand of God, and no torment will touch them. In the eyes of the foolish they seemed to have died… but they are in peace… their hope is full of immortality.”",
      world:
        "Probably written in Greek by a Jew of Alexandria between the late 1st century BCE and the early 1st century CE, the book blends the Bible with Greek ideas about the soul. Chapter 2 puts into the mouths of the ungodly the claim that life is short and death final, and chapter 3 answers them.",
      theirEyes: "For Jews who had watched good people die young or persecuted, this was a strong reply to the question “Where is justice?”",
      tradition: {
        christian: "Catholic and Orthodox Bibles include the book; Wisdom 3:1 is often read at Christian funerals.",
      },
    },
    confidence: "settled",
    references: ["Wisdom of Solomon 3:1–4"],
    sources: [scripture, { kind: "scholarship", citation: "David Winston, The Wisdom of Solomon (Anchor Bible 43, Doubleday, 1979)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-087",
    era: "hellenistic",
    level: 18,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Josephus says Hyrcanus II's supporters let Pompey into Jerusalem, while Aristobulus II's supporters held out on the Temple mount.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "In 63 BCE the city was split. Josephus says Hyrcanus' party opened the gates to Pompey, while Aristobulus' men seized the Temple and cut the bridge linking it to the city. Pompey had to besiege the Temple mount for about three months, with Hyrcanus' followers helping the Romans, before it fell (Antiquities 14.58–71; Jewish War 1.142–151).",
      theirEyes:
        "Jews stood on both sides of the Roman siege lines, and many neighbours never forgave each other.",
      tradition: {
        jewish: "Psalms of Solomon 8 blames the city's own leaders for going out to welcome the conqueror who then defiled the sanctuary.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.4.2–4 (14.58–71); Jewish War 1.7.2–5 (1.142–151)" },
      { kind: "primary", citation: "Psalms of Solomon 8 (trans. R. B. Wright, in J. H. Charlesworth, ed., The Old Testament Pseudepigrapha, vol. 2, 1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-088",
    era: "hellenistic",
    level: 18,
    category: "neighbours",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Josephus says Antipater the Idumean, Herod's father, married a woman from a noble Arabian family.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "Josephus says Antipater married Cypros, a woman of an eminent Arabian family (Jewish War 1.181; Antiquities 14.121). Their children included Phasael, Herod, Joseph, Pheroras and Salome. Antipater's father had been made governor of all Idumea by Alexander Jannaeus and his wife (Antiquities 14.10). The Arabians are usually understood as the Nabataeans of Petra, and these family ties help explain why Antipater could persuade Hyrcanus II to flee to King Aretas for help.",
      theirEyes:
        "To a Jerusalem aristocrat, the house of Antipater, Idumean converts with Arab in-laws, looked like outsiders climbing very fast.",
      debate: "Herod's rival Antigonus later called him a commoner and an Idumean, “a half-Jew” (Antiquities 14.403); how much his origins mattered to ordinary Jews is debated.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Jewish War 1.8.9 (1.181); Antiquities of the Jews 14.1.3 (14.10); 14.7.3 (14.121); 14.15.2 (14.403)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-089",
    era: "hellenistic",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus compares three Jewish schools by their view of fate. Which group, he says, held that fate governs all things?",
    choices: ["The Pharisees", "The Sadducees", "The Essenes", "The Samaritans"],
    answer: 2,
    explanation: {
      world:
        "Introducing the three “sects” in the time of Jonathan the Hasmonean, Josephus says the Pharisees hold that some things, not all, are the work of fate; the Essenes that fate governs all things and nothing befalls people except by its decree; and the Sadducees deny fate altogether, saying everything lies in our own power (Antiquities 13.171–173). He uses Greek philosophical terms to make Jewish groups intelligible to Greek and Roman readers; elsewhere he likens the Pharisees to the Stoics (Life 12) and the Essenes to the Pythagoreans (Antiquities 15.371).",
      theirEyes:
        "A Roman reader, raised on arguments about fate and free will, could place each Jewish school on a familiar philosophical map.",
      debate:
        "Scholars note that the Qumran scrolls' strong belief in God's predestination fits Josephus' picture of the Essenes, one of the arguments for linking them.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.5.9 (13.171–173); 15.10.4 (15.371); Life 2 (12)" },
      { kind: "scholarship", citation: "Steve Mason, Flavius Josephus on the Pharisees (Brill, 1991)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-090",
    era: "hellenistic",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: fragments of every section of 1 Enoch, including the Book of Parables (chapters 37–71), were found at Qumran.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "Aramaic fragments from Qumran Cave 4 cover the Book of the Watchers, the Astronomical Book, the Book of Dreams and the Epistle of Enoch, but not one fragment of the Book of Parables (also called the Similitudes). The Parables survive complete only in Ge'ez (classical Ethiopic), as part of the Bible of the Ethiopian Orthodox Church.",
      theirEyes: "A scribe at Qumran could have read Enoch's journeys and visions, but apparently not his parables of the Son of Man.",
      debate:
        "J. T. Milik argued the Parables were a Christian work of about 270 CE, a date most scholars reject. Most specialists now date them to the late 1st century BCE or the 1st century CE, partly because 1 Enoch 56:5–7, which names the Parthians and Medes, seems to recall the Parthian invasion of 40 BCE. Their absence at Qumran (and from the Greek fragments) may be chance, or a sign of a later date.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Aramaic Enoch fragments, Qumran Cave 4 (4Q201–202, 4Q204–212)" },
      { kind: "scholarship", citation: "J. T. Milik, The Books of Enoch: Aramaic Fragments of Qumrân Cave 4 (Oxford, 1976)" },
      { kind: "scholarship", citation: "G. Boccaccini (ed.), Enoch and the Messiah Son of Man: Revisiting the Book of Parables (Eerdmans, 2007)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "hel-091",
    era: "hellenistic",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The War Scroll's final battle between the Sons of Light and the army of Belial is fought in seven rounds. How is it decided?",
    choices: [
      "The Sons of Light win all seven rounds",
      "Each side wins three rounds, and in the seventh God's great hand subdues Belial",
      "The Messiah kills Belial in single combat in the first round",
      "A Roman army ends the battle in the seventh round",
    ],
    answer: 1,
    explanation: {
      world:
        "The War Scroll (1QM 1.13–15), found in Qumran Cave 1, says that in three lots the Sons of Light will prevail, and in three the army of Belial will force them back; in the seventh lot “the great hand of God” will subdue Belial and all the angels of his dominion. The scroll then gives detailed instructions for trumpets, banners, formations and the priests' role.",
      theirEyes:
        "A member drilled in these battle-orders expected to lose ground before the end, and was told in advance not to despair.",
      debate:
        "Scholars debate whether the enemy “Kittim” here are Seleucids, Romans or both, and whether the scroll was compiled from older sources.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "War Scroll (1QM), col. 1, Qumran Cave 1; Shrine of the Book, Israel Museum" },
      { kind: "scholarship", citation: "Yigael Yadin, The Scroll of the War of the Sons of Light against the Sons of Darkness (Oxford, 1962)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-092",
    era: "hellenistic",
    level: 19,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Yitzhak Magen and Yuval Peleg, who excavated Qumran in 1993–2004, rejected the Essene theory. What did they say the site became?",
    choices: [
      "A Samaritan temple",
      "A pottery-making centre",
      "A Christian monastery",
      "A royal mint",
    ],
    answer: 1,
    explanation: {
      world:
        "Magen and Peleg argued that Qumran began as a Hasmonean fort and later became a pottery workshop, using the clay settled in its pools; they think the scrolls were brought from Jerusalem and hidden in the caves during the revolt against Rome. Other alternatives include Norman Golb's view that the scrolls came from Jerusalem libraries, and a villa or fortified manor (Donceel and Donceel-Voûte; Yizhar Hirschfeld).",
      theirEyes: "To a potter's eye, deep plastered pools filled by winter floodwater could be tanks for settling fine clay.",
      debate:
        "Most scholars, including Jodi Magness, still identify the inhabitants as a sectarian group, probably Essenes, pointing to the cemetery, the communal dining room, ritual baths and the caves' closeness.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "scholarship", citation: "Y. Magen and Y. Peleg, The Qumran Excavations 1993–2004: Preliminary Report (Judea and Samaria Publications 6, 2007)" },
      { kind: "scholarship", citation: "Norman Golb, Who Wrote the Dead Sea Scrolls? (Scribner, 1995)" },
      { kind: "scholarship", citation: "Jodi Magness, The Archaeology of Qumran and the Dead Sea Scrolls (2nd ed., Eerdmans, 2021)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-093",
    era: "hellenistic",
    level: 19,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which Hasmonean was led as a captive in Pompey's triumph at Rome in 61 BCE?",
    choices: ["Hyrcanus II", "Aristobulus II", "John Hyrcanus I", "Alexander Jannaeus"],
    answer: 1,
    explanation: {
      world:
        "Josephus says Pompey took Aristobulus II and his children to Rome as prisoners (Antiquities 14.79), while Hyrcanus II stayed in Jerusalem as high priest. Plutarch lists “Aristobulus, king of the Jews” among the captives in Pompey's great triumph (Pompey 45). Judea now paid tribute to Rome, and Pompey freed the coastal cities and several Greek cities east of the Jordan from Jewish control (Antiquities 14.74–76).",
      theirEyes:
        "Romans lining the streets saw a Jewish king, who had once held Jerusalem, walking among the captives before a general's chariot.",
      tradition: {
        jewish: "The Psalms of Solomon lament that the conqueror sent Jerusalem's people off to the west (Psalms of Solomon 17:12).",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.4.4–5 (14.74–79)" },
      { kind: "primary", citation: "Plutarch, Life of Pompey 45" },
      { kind: "primary", citation: "Psalms of Solomon 17 (trans. R. B. Wright, in J. H. Charlesworth, ed., The Old Testament Pseudepigrapha, vol. 2, 1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-094",
    era: "hellenistic",
    level: 19,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "When the Roman governor Gabinius divided Jewish territory into five councils (c. 57 BCE), which Galilean city became one seat?",
    choices: ["Tiberias", "Capernaum", "Sepphoris", "Caesarea Philippi"],
    answer: 2,
    explanation: {
      world:
        "Josephus says Gabinius, proconsul of Syria, set up five councils (synedria) at Jerusalem, Gadara (Gazara in the Jewish War), Amathus, Jericho and Sepphoris, so that the people were ruled by an aristocracy, freed from the rule of one man (Antiquities 14.91; Jewish War 1.170). Hyrcanus II was left with the Temple. The arrangement lasted only about a decade. Tiberias was founded later, about 20 CE, and Caesarea Philippi received that name under Herod's son Philip.",
      theirEyes: "A Galilean landowner now took his disputes to Sepphoris rather than to the Hasmonean court in Jerusalem.",
    },
    confidence: "settled",
    references: [],
    sources: [{ kind: "primary", citation: "Josephus, Antiquities of the Jews 14.5.4 (14.91); Jewish War 1.8.5 (1.170)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-095",
    era: "hellenistic",
    level: 19,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: most scholars accept that the tiny Greek fragment 7Q5 from Qumran Cave 7 is a piece of Mark's Gospel.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "All the manuscript fragments from Cave 7 are in Greek. In 1972 José O'Callaghan proposed that 7Q5, with about twenty letters, many of them damaged or uncertain, came from Mark 6:52–53, and Carsten Peter Thiede later championed the idea. Most scholars reject it: the match needs a disputed reading of one letter (nu), a spelling change (t for d), and the omission of the Greek words epi tēn gēn (“to land,” Mark 6:53), which no manuscript of Mark leaves out. A computer search by Daniel Wallace that allowed other readings of the doubtful letters found sixteen possible matches in other Greek texts.",
      theirEyes: "A scrap no bigger than a postage stamp became the centre of a worldwide argument.",
      debate: "A small minority still defends the identification; if true, it would put a Gospel text at Qumran before 68 CE.",
    },
    confidence: "mainstream",
    references: ["Mark 6:52–53"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "7Q5, Greek papyrus fragment, Qumran Cave 7 (M. Baillet, DJD III, 1962)" },
      { kind: "scholarship", citation: "José O'Callaghan, “¿Papiros neotestamentarios en la cueva 7 de Qumrân?” Biblica 53 (1972), 91–100" },
      { kind: "reference", citation: "“7Q5,” Wikipedia (summary of objections and of the Thiede and Wallace computer searches), accessed 2026-11-20" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "hel-096",
    era: "hellenistic",
    level: 20,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "4QMMT argues that an unbroken stream of liquid poured from a clean vessel into an unclean one does what?",
    choices: [
      "Carries the impurity back up into the clean vessel",
      "Purifies the unclean vessel",
      "Becomes holy enough for the altar",
      "Has no effect, because liquids cannot become impure",
    ],
    answer: 0,
    explanation: {
      world:
        "4QMMT (“Some of the Works of the Torah”), known from six fragmentary copies in Cave 4, is a letter-like text listing about twenty points of law, on sacrifices, purity and the Temple, where “we” disagree with others. One says poured streams do not separate the impure from the pure, because the liquid of the stream and of the vessel receiving it is one and the same (4QMMT B 55–58 in the composite text of Qimron and Strugnell).",
      theirEyes: "Pouring oil or water, a priest could defile a whole jar in a single motion.",
      tradition: {
        jewish:
          "The Mishnah, a later record (c. 200 CE), says the Sadducees complained that the Pharisees declared such a stream clean (Yadayim 4:7). Because of parallels like this, many scholars see several of 4QMMT's laws as close to positions the rabbis later attributed to the Sadducees.",
        christian: "Near its end (C 27) it speaks of “some of the works of the Torah,” the Hebrew counterpart of the phrase Paul uses in Greek: “not justified by the works of the law” (Galatians 2:16). What each writer meant by it is debated.",
      },
    },
    confidence: "settled",
    references: ["Galatians 2:16"],
    sources: [
      scripture,
      { kind: "primary", citation: "4QMMT (4Q394–399), section B 55–58" },
      { kind: "scholarship", citation: "E. Qimron and J. Strugnell, Qumran Cave 4.V: Miqṣat Maʿaśe ha-Torah (DJD X, Oxford, 1994)" },
      { kind: "primary", citation: "Mishnah Yadayim 4:7 (a later record, compiled c. 200 CE)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-097",
    era: "hellenistic",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Psalms of Solomon 17, written after Pompey's conquest, gives the coming son of David which title, also used in Luke 2:11?",
    choices: ["Son of Man", "Lord Messiah (Christ the Lord)", "Prince of Lights", "Teacher of Righteousness"],
    answer: 1,
    explanation: {
      textSays: "Luke 2:11: “For there is born to you today, in David's city, a Savior, who is Christ the Lord.”",
      world:
        "Psalms of Solomon 17 prays for God to raise up a son of David to purge Jerusalem of Gentiles and rule in righteousness, and says “their king shall be the Lord Messiah” (17:32 in R. B. Wright's translation; 17:36 in older editions; Greek christos kyrios). Psalm 18, in its heading, has the related phrase “the Lord's Messiah” (christos kyriou). The collection is usually dated to the mid-1st century BCE.",
      theirEyes: "After Roman soldiers had walked into the sanctuary, these psalmists longed for a king who would need no foreign protection.",
      debate:
        "The Greek manuscripts read christos kyrios, but some editors think this is a copyist's or translator's slip for christos kyriou, “the Lord's Messiah,” as in Psalm 18 (the same Greek wording also appears in the Septuagint of Lamentations 4:20, where the Hebrew has “the anointed of Yahweh”); others defend it, noting the identical phrase in Luke.",
    },
    confidence: "mainstream",
    references: ["Luke 2:11", "Lamentations 4:20"],
    sources: [
      scripture,
      { kind: "primary", citation: "Psalms of Solomon 17:21–32; 18 (heading) (trans. R. B. Wright, in J. H. Charlesworth, ed., The Old Testament Pseudepigrapha, vol. 2, 1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-098",
    era: "hellenistic",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "At the end of 1 Enoch's Book of Parables (chapter 71), who is told that he is the Son of Man?",
    choices: ["Noah", "The archangel Michael", "Melchizedek", "Enoch himself"],
    answer: 3,
    explanation: {
      world:
        "Throughout the Parables, a heavenly figure called the Chosen One and “that Son of Man” sits on God's throne of glory to judge kings and the mighty. In the closing chapter Enoch is taken up to heaven, and an angel greets him and tells him that he is that son of man, born for righteousness (1 Enoch 71:14). The Ge'ez manuscripts address Enoch directly; R. H. Charles (1912) emended the verse to read “This is the Son of Man,” but most modern translators, including Nickelsburg and VanderKam, keep the second person.",
      theirEyes: "A reader who had followed the mysterious judge through the book would be startled to find him identified with the visionary himself.",
      tradition: {
        christian: "The Gospels' use of “the Son of Man” sitting on a throne of glory (e.g. Matthew 25:31) has often been compared with the Parables.",
      },
      debate:
        "Some translate “you are a son of man” (a human being), and many think chapters 70–71 are a later addition to the Parables, though others, such as James Charlesworth, reject that view; scholars also debate whether the Parables are earlier than the Gospels.",
    },
    confidence: "mainstream",
    references: ["Matthew 25:31"],
    sources: [
      scripture,
      { kind: "primary", citation: "1 Enoch 46; 62; 71:14 (Ge'ez text; trans. G. W. E. Nickelsburg and J. C. VanderKam, 2012; cf. R. H. Charles, 1912)" },
      { kind: "scholarship", citation: "G. W. E. Nickelsburg and J. C. VanderKam, 1 Enoch 2 (Hermeneia, Fortress, 2012)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-099",
    era: "hellenistic",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus tells of Judas the Essene, whose predictions never failed. Whose death did he foretell in 104/103 BCE?",
    choices: [
      "Antiochus IV Epiphanes",
      "Antigonus, brother of King Aristobulus I",
      "Pompey the Great",
      "Simon the Hasmonean",
    ],
    answer: 1,
    explanation: {
      world:
        "Josephus says Judas, seeing Antigonus pass through the Temple, cried out that he wished to die, because he had foretold that Antigonus would be killed that day at Strato's Tower, which he took to be the coastal town (later Caesarea), far away. But that same day Antigonus was killed by the guards of his brother, King Aristobulus I, whom plotters had turned against him, in an underground passage in Jerusalem that was also called Strato's Tower (Antiquities 13.311–313; Jewish War 1.78–80).",
      theirEyes: "Judas' pupils, gathered around him in the Temple to learn foretelling, watched their teacher's dismay turn into proof.",
      tradition: {
        jewish: "Josephus tells of other Essene prophets too, such as Menahem, who predicted Herod's kingship.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [{ kind: "primary", citation: "Josephus, Antiquities of the Jews 13.11.2 (13.311–313); Jewish War 1.3.5 (1.78–80)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-100",
    era: "hellenistic",
    level: 20,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Both Philo and Josephus give roughly the same number for the Essenes. About how many were there?",
    choices: ["About 400", "About 4,000", "About 40,000", "About 400,000"],
    answer: 1,
    explanation: {
      world:
        "Philo says the Essenes numbered more than four thousand, living in villages and avoiding cities (Every Good Man Is Free 75–76). Josephus also says there were more than four thousand men who lived this way (Antiquities 18.20). By comparison he puts the Pharisees at more than six thousand (Antiquities 17.42). Estimates for Qumran itself are usually somewhere between about fifty and two hundred people, so most Essenes must have lived elsewhere.",
      theirEyes: "For most Judeans, an Essene was not a hermit in a far-off desert but the quiet neighbour in white who kept to his own fellowship.",
      debate: "How many of these Essenes, if any, lived at Qumran, and the size of the site's population, are both debated.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Philo, Every Good Man Is Free (Quod Omnis Probus Liber Sit) 75–76" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.1.5 (18.20); 17.2.4 (17.42)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
