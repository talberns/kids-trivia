import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const primeval4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "pri-076",
    era: "primeval",
    level: 16,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis 10 lists Javan as a son of Japheth. Which people does the name Javan stand for?",
    choices: ["The Persians", "The Egyptians", "The Greeks (Ionians)", "The Hittites"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 10:2–4 names Javan among the sons of Japheth, and gives Javan's own sons as “Elishah, Tarshish, Kittim, and Dodanim.”",
      world:
        "Javan (Hebrew Yavan) matches “Ionian,” the name Near Eastern peoples used for Greeks; Assyrian and Persian texts use the same word. In Daniel 8:21 the “king of Greece” is literally the king of Yavan.",
      theirEyes:
        "To a Judean listener, Javan was the far-off western world of island traders and, later, of Alexander's armies.",
      tradition: {
        jewish: "Josephus says that “from Javan, Ionia, and all the Grecians, are derived” (Antiquities 1.6.1).",
      },
    },
    confidence: "settled",
    references: ["Genesis 10:2–4", "Daniel 8:21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.6.1 (1.124)" },
      { kind: "reference", citation: "“Javan,” Anchor Bible Dictionary (ed. D. N. Freedman, 1992)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-077",
    era: "primeval",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis 10:10 names the cities where Nimrod's kingdom began in Shinar. Which of these is NOT one of them?",
    choices: ["Erech", "Ur", "Accad", "Babel"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 10:10: “The beginning of his kingdom was Babel, Erech, Accad, and Calneh, in the land of Shinar.” Verse 11 adds that he went into Assyria and built Nineveh and Calah. Ur appears only later, as Terah's home (Genesis 11:28).",
      world:
        "Babel is Babylon, Erech is Uruk and Accad is Akkad, all real cities of southern Mesopotamia. Calneh has never been securely identified; some scholars even repoint the Hebrew to read “all of them.”",
      theirEyes:
        "For Israelites, these were the great old cities of the east, already ancient and famous long before Jerusalem was a royal city.",
    },
    confidence: "settled",
    references: ["Genesis 10:10–12", "Genesis 11:28"],
    sources: [scripture, { kind: "scholarship", citation: "Gordon J. Wenham, Genesis 1–15 (Word Biblical Commentary 1, 1987), on Genesis 10:10" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-078",
    era: "primeval",
    level: 16,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Table of Nations in Genesis 10 groups peoples by language family, as modern linguists do.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 10:20 lists peoples “after their families, according to their languages, in their lands and their nations.” Yet Canaan is a son of Ham (10:6), and Elam is a son of Shem (10:22).",
      world:
        "Canaanite (the family that includes Hebrew and Phoenician) is a Semitic language, while Elamite is unrelated to the Semitic languages. Scholars see the Table mixing geography, politics, trade links and kinship, not linguistic classification. Our word “Semitic” was coined in the 18th century from Shem's name.",
      theirEyes:
        "An Israelite would have heard Canaanites speaking a language very close to his own, yet the Table places Canaan in Ham's family, alongside Egypt.",
    },
    confidence: "settled",
    references: ["Genesis 10:6", "Genesis 10:20", "Genesis 10:22"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Claus Westermann, Genesis 1–11: A Commentary (1984), on Genesis 10" },
      { kind: "reference", citation: "“Semitic languages,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-079",
    era: "primeval",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Genesis says Nimrod built the tower of Babel.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 10:8–10 calls Nimrod “a mighty hunter before Yahweh” and says his kingdom began with Babel. But Genesis 11:1–9 names no leader: the builders are simply “the children of men” (11:5).",
      world:
        "Linking Nimrod with the tower is a later interpretation, joining two passages that mention Babel.",
      theirEyes:
        "A Jewish reader of Josephus' day, putting Genesis 10 and 11 side by side, could easily see the mighty founder of Babel as the man behind its tower.",
      tradition: {
        jewish:
          "Josephus (Antiquities 1.4.2) makes Nimrod the leader who urged people to build the tower; the Greek Septuagint calls him a “giant” (gigas) in Genesis 10:8–9.",
      },
      debate:
        "Who inspired the figure of Nimrod is debated: proposals include the god Ninurta, the Assyrian king Tukulti-Ninurta I, Sargon of Akkad and Gilgamesh.",
    },
    confidence: "settled",
    references: ["Genesis 10:8–10", "Genesis 11:1–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.4.2 (1.113–114)" },
      { kind: "primary", citation: "Septuagint, Genesis 10:8–9" },
      { kind: "reference", citation: "“Nimrod,” Anchor Bible Dictionary (ed. D. N. Freedman, 1992)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-080",
    era: "primeval",
    level: 16,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which prophet calls Assyria “the land of Nimrod”?",
    choices: ["Amos", "Jonah", "Nahum", "Micah"],
    answer: 3,
    explanation: {
      textSays:
        "Micah 5:6 (5:5 in Hebrew): “They will rule the land of Assyria with the sword, and the land of Nimrod in its gates.” This fits Genesis 10:11 as most modern translations read it, with Nimrod going into Assyria and building Nineveh and Calah (older versions such as the KJV instead make Asshur the one who went out).",
      world:
        "Micah prophesied in the late 8th century BCE, when Assyria was the great threat to Israel and Judah; Samaria fell to Assyria in 722 BCE.",
      theirEyes:
        "For Micah's hearers, “Nimrod's land” was no legend: it was the empire whose armies were marching through their hills.",
    },
    confidence: "settled",
    references: ["Micah 5:6", "Genesis 10:11"],
    sources: [scripture, { kind: "reference", citation: "“Micah, Book of,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "pri-081",
    era: "primeval",
    level: 17,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Nimrod's city Erech (Genesis 10:10) is the city archaeologists call what?",
    choices: ["Uruk", "Mari", "Ebla", "Nippur"],
    answer: 0,
    explanation: {
      textSays: "Genesis 10:10 lists Erech among the first cities of Nimrod's kingdom in Shinar.",
      world:
        "Uruk (modern Warka in southern Iraq) was one of the world's earliest true cities, where some of the earliest known writing appears around 3300–3100 BCE. It was also the city of Gilgamesh, the hero of the Epic of Gilgamesh. The “Archevites” settled in Samaria (Ezra 4:9) were probably people from Erech.",
      theirEyes:
        "Even in Israel's day Uruk was ancient: its temples had been rebuilt again and again for thousands of years.",
    },
    confidence: "settled",
    references: ["Genesis 10:10", "Ezra 4:9"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Uruk,” Encyclopaedia Britannica" },
      { kind: "primary", citation: "Epic of Gilgamesh, Tablet I (Standard Babylonian version)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-082",
    era: "primeval",
    level: 17,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Accad, another of Nimrod's cities, was the capital of which famous Mesopotamian king, whose city has still not been located?",
    choices: ["Hammurabi", "Sargon", "Nebuchadnezzar II", "Ashurbanipal"],
    answer: 1,
    explanation: {
      textSays: "Genesis 10:10 names Accad in the land of Shinar.",
      world:
        "Sargon of Akkad (c. 24th–23rd century BCE) founded the Akkadian empire, often called the earliest known empire, from his capital Agade (Akkad). The city's site has never been found, though it gave its name to the Akkadian language of Babylonians and Assyrians. Hammurabi ruled from Babylon, Nebuchadnezzar from Babylon, Ashurbanipal from Nineveh.",
      theirEyes:
        "For later Babylonians, Sargon was a legend, the model of a world-conquering king, much as Nimrod is in Genesis.",
    },
    confidence: "settled",
    references: ["Genesis 10:10"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Akkad” and “Sargon,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-083",
    era: "primeval",
    level: 17,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Calah, one of the cities Genesis 10:11–12 says was built in Assyria, is known today by what name?",
    choices: ["Khorsabad", "Nimrud", "Ashur", "Harran"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 10:11–12: Nimrod “went into Assyria, and built Nineveh, Rehoboth Ir, Calah, and Resen between Nineveh and the great city Calah.”",
      world:
        "Calah is Assyrian Kalhu, made the royal capital by Ashurnasirpal II in the 9th century BCE. Its ruin mound is locally called Nimrud, a name drawn from later tradition about Nimrod. Austen Henry Layard dug there in the 1840s and found the Black Obelisk of Shalmaneser III.",
      theirEyes:
        "A figure bowing before the Assyrian king on a monument from this very city is labelled as tribute from Israel's King Jehu, so Calah was part of Israel's own story.",
    },
    confidence: "settled",
    references: ["Genesis 10:11–12"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Nimrud,” Encyclopaedia Britannica" },
      { kind: "archaeology", citation: "Black Obelisk of Shalmaneser III, from Nimrud (British Museum)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-084",
    era: "primeval",
    level: 17,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Joktan's son Hazarmaveth (Genesis 10:26) is usually matched with which region?",
    choices: ["Crete", "Hadramaut in southern Arabia", "The Nile Delta", "Armenia"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 10:26–29 lists Joktan's sons, including Hazarmaveth, Sheba, Ophir and Havilah; verse 30 places them “from Mesha, as you go toward Sephar, the mountain of the east.”",
      world:
        "Hazarmaveth is usually matched with Hadramaut (Ḥaḍramawt) in today's Yemen, an ancient incense kingdom whose own inscriptions spell the name ḤḌRMT, a regular match for the Hebrew consonants. Sheba was another South Arabian kingdom, so much of Joktan's line seems to point to southern Arabia.",
      theirEyes:
        "Frankincense burned on the altar in Jerusalem came up from these distant southern lands by camel caravan.",
    },
    confidence: "mainstream",
    references: ["Genesis 10:26–30"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Hazarmaveth,” Anchor Bible Dictionary (ed. D. N. Freedman, 1992)" },
      { kind: "reference", citation: "“Hadhramaut,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-085",
    era: "primeval",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Counting both ends, how many generations does the Hebrew text of Genesis 11:10–26 list from Shem to Abram?",
    choices: ["Seven", "Twelve", "Ten", "Fourteen"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 11:10–26 runs Shem, Arpachshad, Shelah, Eber, Peleg, Reu, Serug, Nahor, Terah, Abram: ten names. Genesis 5 also has ten generations, from Adam to Noah.",
      world:
        "The matching ten-and-ten pattern suggests a deliberate structure. The ages at fatherhood also drop sharply: Shem is 100, but most later fathers are around 30, and lifespans fall from Shem's 600 years to Nahor's 148 and Terah's 205.",
      theirEyes:
        "For a listener, the list was a bridge across the centuries, from the survivors of the Flood to Abraham, the ancestor of Israel.",
    },
    confidence: "settled",
    references: ["Genesis 11:10–26", "Genesis 5:1–32"],
    sources: [scripture, { kind: "scholarship", citation: "Gordon J. Wenham, Genesis 1–15 (Word Biblical Commentary 1, 1987), on Genesis 11:10–26" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "pri-086",
    era: "primeval",
    level: 18,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Kittim, a son of Javan, originally took its name from Kition, a city on which island?",
    choices: ["Sicily", "Rhodes", "Cyprus", "Malta"],
    answer: 2,
    explanation: {
      textSays:
        "Kittim is a son of Javan in Genesis 10:4, and later texts speak of “ships… from the coast of Kittim” (Numbers 24:24) and “the islands of Kittim” (Jeremiah 2:10).",
      world:
        "Kition (under modern Larnaca) was an ancient city on Cyprus, later a Phoenician stronghold. Over time “Kittim” came to mean westerners from across the sea in general: 1 Maccabees 1:1 says Alexander the Great came from “the land of Chittim,” and the Dead Sea Scrolls' Habakkuk commentary uses Kittim for an invading power most scholars identify as Rome.",
      theirEyes:
        "On the coast of Judea, “Kittim” meant whoever came over the western sea in warships.",
      tradition: {
        jewish:
          "Josephus says Kittim's land “is now called Cyprus,” that a city there kept the name (Citius), and that Hebrews used “Cethim” for islands and coastlands generally (Antiquities 1.6.1).",
      },
    },
    confidence: "settled",
    references: ["Genesis 10:4", "Numbers 24:24", "Jeremiah 2:10", "1 Maccabees 1:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.6.1 (1.128)" },
      { kind: "primary", citation: "Dead Sea Scrolls, Pesher Habakkuk (1QpHab)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-087",
    era: "primeval",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus identified Tarshish, son of Javan, with which place?",
    choices: ["Tarsus in Cilicia", "Carthage in Africa", "Tartessos in Spain", "Troy in Asia Minor"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 10:4 lists Tarshish among Javan's sons; elsewhere it is a distant port, as when Jonah takes “a ship going to Tarshish” (Jonah 1:3).",
      world:
        "Where the real Tarshish lay is still debated: many scholars favour Tartessos in southern Spain, and others suggest Sardinia or elsewhere in the western Mediterranean.",
      theirEyes:
        "For Josephus's Greek-speaking readers, Tarsus, the busy capital of Cilicia, was a familiar city, and it later became famous as Paul's hometown.",
      tradition: {
        jewish:
          "Josephus writes that Tarshish gave his name to “the Tharsians, for so was Cilicia of old called,” whose chief city is Tarsus (Antiquities 1.6.1).",
      },
      debate: "Josephus's identification is a known interpretation, not a settled location; Tartessos in Spain is the most common modern proposal.",
    },
    confidence: "settled",
    references: ["Genesis 10:4", "Jonah 1:3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.6.1 (1.127)" },
      { kind: "reference", citation: "“Tarshish,” Anchor Bible Dictionary (ed. D. N. Freedman, 1992)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-088",
    era: "primeval",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Josephus' retelling, why did Nimrod want the tower to be so high?",
    choices: [
      "So it could not be reached if God flooded the world again",
      "So he could watch the stars for the moon god",
      "So his armies could see invaders coming from Egypt",
      "So the whole world could hear his laws proclaimed",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 11:4 gives the builders' own reason: “let's make a name for ourselves, lest we be scattered abroad on the surface of the whole earth.” It says nothing about a flood.",
      world:
        "Josephus wrote his Antiquities for Greek and Roman readers in the 90s CE, often filling gaps in Genesis with motives and speeches.",
      theirEyes:
        "Josephus' Nimrod is a rebel who promises his people safety without God, and they follow him because his tower seems to offer it.",
      tradition: {
        jewish:
          "Josephus says Nimrod threatened to build “a tower too high for the waters to be able to reach,” and that he “would avenge himself on God for destroying their forefathers” (Antiquities 1.4.2).",
      },
    },
    confidence: "settled",
    references: ["Genesis 11:4"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.4.2 (1.113–114), trans. W. Whiston" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-089",
    era: "primeval",
    level: 18,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Herodotus describes a temple on top of Babylon's stepped tower. What does he say was inside it?",
    choices: [
      "A golden statue of the god, seated",
      "An altar for burning children",
      "A great couch and a golden table, but no statue",
      "A library of clay tablets",
    ],
    answer: 2,
    explanation: {
      world:
        "Herodotus (Histories 1.181) says the shrine at the top held “a great and well-covered couch, and a golden table nearby,” and that “no image has been set up in the shrine.” He adds that, according to the Chaldaean priests, only one woman, chosen by the god, spent the night there, and that they said the god himself visited, which he did not believe (1.181–182). A great seated gold statue was, he says, in a lower temple (1.183).",
      textSays:
        "Genesis 11:4 imagines “a tower whose top reaches to the sky”; Babylonian building texts for Etemenanki use similar language of a top reaching heaven.",
      theirEyes:
        "To Herodotus' Greek readers, used to temples built around a cult statue, a summit room furnished only for a god's night visit was a striking detail.",
      debate: "Scholars doubt whether Herodotus actually saw Babylon himself, so his details may come from informants.",
    },
    confidence: "settled",
    references: ["Genesis 11:4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 1.181–183 (trans. A. D. Godley)" },
      { kind: "primary", citation: "Nabopolassar, building inscription for Etemenanki" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-090",
    era: "primeval",
    level: 18,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Babylon's great ziggurat was called Etemenanki in Sumerian. What does the name mean?",
    choices: [
      "Gate of the god",
      "House of the foundation of heaven and earth",
      "Tower of the confusion of tongues",
      "Palace of the king of the world",
    ],
    answer: 1,
    explanation: {
      world:
        "Etemenanki (“House, foundation platform of heaven and earth”) stood beside Esagila, the temple of Marduk. After Sennacherib sacked Babylon in 689 BCE, work resumed under Esarhaddon, and Nabopolassar and Nebuchadnezzar II rebuilt it in the late 7th–6th centuries BCE. Nabopolassar's inscription speaks of grounding its base on the breast of the underworld and making its top vie with the heavens. “Gate of the god” is the meaning of Babylon's own name, Bab-ili.",
      textSays: "Genesis 11:9: “Therefore its name was called Babel, because there Yahweh confused the language of all the earth.”",
      theirEyes:
        "A Judean exile in Babylon would have seen this vast brick mountain towering over the city, the kind of sight many scholars link with the Babel story.",
      debate: "Many scholars think Babylon's ziggurat inspired the Babel story, though the story may be older than the Neo-Babylonian rebuilding.",
    },
    confidence: "settled",
    references: ["Genesis 11:9"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Etemenanki,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "Andrew R. George, Babylonian Topographical Texts (1992)" },
      { kind: "primary", citation: "Nabopolassar, building inscription for Etemenanki" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "pri-091",
    era: "primeval",
    level: 19,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to Arrian, which conqueror ordered the Babylonians to clear the site of Bel's ruined temple so it could be rebuilt?",
    choices: ["Cyrus the Great", "Alexander the Great", "Julius Caesar", "Ashurbanipal"],
    answer: 1,
    explanation: {
      world:
        "Arrian (Anabasis 7.17.2–3) says Alexander meant to rebuild the temple of Bel (Marduk), which Xerxes had destroyed, and had the Babylonians clear the site; when the work went slowly, he planned to use his own army. Alexander died in Babylon in 323 BCE before it was done. Strabo (16.1.5) tells a similar story about the “tomb of Belus.”",
      theirEyes:
        "Babylonians watched the conqueror of Persia promise to restore their god's house, and then watched the project stall after his death.",
      debate:
        "Historians doubt the Greek claim that Xerxes destroyed Babylon's temples, and it is unclear whether Arrian means the ziggurat, Esagila or both.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Arrian, Anabasis of Alexander 7.17.1–3" },
      { kind: "primary", citation: "Strabo, Geography 16.1.5" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-092",
    era: "primeval",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Genesis 11 says God knocked down the tower of Babel.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 11:7–8: God confuses their language, and Yahweh scatters them, so “They stopped building the city.” The tower is left unfinished, not destroyed.",
      world:
        "The idea that the tower fell comes from later retellings, which may echo the sight of ruined ziggurats.",
      theirEyes:
        "Anyone who had seen a crumbling temple tower in Mesopotamia could easily imagine God sending a wind to flatten Babel.",
      tradition: {
        jewish:
          "Jubilees 10:26 says “the Lord sent a mighty wind against the tower and overthrew it.” Book 3 of the Jewish Sibylline Oracles has the Immortal send winds that throw the tower down, and Josephus quotes a Sibyl saying “the gods sent storms of wind and overthrew the tower” (Antiquities 1.4.3).",
      },
    },
    confidence: "settled",
    references: ["Genesis 11:7–8"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 10:26 (trans. R. H. Charles, 1913)" },
      { kind: "primary", citation: "Sibylline Oracles, book 3" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.4.3 (1.118)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-093",
    era: "primeval",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Book of Jubilees gives a length of time for building the tower of Babel. How long?",
    choices: ["Seven days", "Seven years", "Forty-three years", "One hundred twenty years"],
    answer: 2,
    explanation: {
      textSays: "Genesis 11 gives no length of time for the building.",
      tradition: {
        jewish:
          "Jubilees (2nd century BCE) says “forty and three years were they building it” (10:21), and gives the tower's size in bricks and a height of thousands of cubits. It even dates the work by its own calendar of jubilees and weeks of years.",
      },
      world:
        "Jubilees retells Genesis and the first part of Exodus with exact dates, as though revealed to Moses on Sinai. Copies were found among the Dead Sea Scrolls.",
      theirEyes:
        "For Jubilees' readers, giving years and measurements made the story feel like recorded history, fixed in God's calendar.",
    },
    confidence: "settled",
    references: ["Genesis 11:1–9"],
    sources: [scripture, { kind: "primary", citation: "Jubilees 10:18–27 (trans. R. H. Charles, 1913)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-094",
    era: "primeval",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Genesis says Peleg was named because “in his days the earth was divided.” How does Jubilees explain the division?",
    choices: [
      "An earthquake split the continents apart",
      "Noah's sons began dividing the earth among themselves",
      "God divided the nations at the tower of Babel",
      "The Flood waters cut new rivers across the land",
    ],
    answer: 1,
    explanation: {
      textSays: "Genesis 10:25: “The name of the one was Peleg, for in his days the earth was divided.” Hebrew palag means “to divide.”",
      tradition: {
        jewish:
          "Jubilees 8:8 says he was named Peleg “for in the days when he was born the children of Noah began to divide the earth amongst themselves.” Jubilees then has Noah share out the world by lot, with Shem's share holding Eden, Sinai and Zion (8:10–19).",
      },
      world:
        "Modern scholars suggest other readings too: some link the name to Akkadian palgu, “canal,” and others to the scattering at Babel.",
      theirEyes:
        "In Jubilees, the map of the world is a family inheritance, and the land of Israel falls to Shem's line by a fair lot.",
    },
    confidence: "settled",
    references: ["Genesis 10:25"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 8:8–19 (trans. R. H. Charles, 1913)" },
      { kind: "scholarship", citation: "Gordon J. Wenham, Genesis 1–15 (Word Biblical Commentary 1, 1987), on Genesis 10:25" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-095",
    era: "primeval",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In On the Confusion of Tongues, Philo notes critics comparing Babel with a Greek myth. Which one?",
    choices: [
      "Prometheus stealing fire",
      "Giants piling mountains on one another to reach heaven",
      "Icarus flying too close to the sun",
      "Pandora opening the jar",
    ],
    answer: 1,
    explanation: {
      tradition: {
        jewish:
          "Philo of Alexandria (c. 20 BCE – 50 CE) reports critics who said the tower resembled Homer's Aloadae, giants who planned to heap Ossa and Pelion on Olympus to climb to heaven, and a fable that all animals once shared one language (On the Confusion of Tongues 2–8). Philo answers by reading the story as an allegory of the soul's vices.",
      },
      textSays: "Genesis 11:4: “a tower whose top reaches to the sky.”",
      world: "Homer tells of the Aloadae, Otus and Ephialtes, in Odyssey 11.305–320.",
      theirEyes:
        "In Alexandria, educated Jews heard Greek neighbours call Moses' stories mere myths, and Philo wrote to show their deeper meaning.",
    },
    confidence: "settled",
    references: ["Genesis 11:1–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, On the Confusion of Tongues (De confusione linguarum) 2–8, trans. C. D. Yonge" },
      { kind: "primary", citation: "Homer, Odyssey 11.305–320" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "pri-096",
    era: "primeval",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus matched each son of Japheth with a people of his own day. Which people did he say came from Magog?",
    choices: ["The Medes", "The Scythians", "The Galatians", "The Cappadocians"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 10:2 lists “The sons of Japheth were: Gomer, Magog, Madai, Javan, Tubal, Meshech, and Tiras.” Magog returns in Ezekiel 38:2 as the land of Gog.",
      tradition: {
        jewish:
          "Josephus says Magog founded the Magogites, “who are by the Greeks called Scythians” (Antiquities 1.6.1). In the same passage he links Madai with the Medes, Gomer with the Galatians and Meshech (Mosoch) with the Cappadocians.",
      },
      world:
        "The Scythians were horse-riding nomads of the steppes north of the Black Sea, the classic “northern barbarians” of Greek writers, so they suited Ezekiel's picture of Gog from the far north. Modern scholars are less sure where the Bible's Magog lay; one suggestion links it with “land of Gog,” perhaps Gyges of Lydia.",
      theirEyes:
        "For Josephus' Greek and Roman readers, turning the Bible's strange names into Scythians, Medes and Galatians made Genesis 10 read like a map of their own world.",
      debate:
        "Josephus' identifications are his own interpretation. The question asks only what he wrote, not where Magog really was, which remains uncertain.",
    },
    confidence: "settled",
    references: ["Genesis 10:2", "Ezekiel 38:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.6.1 (1.123–125), trans. W. Whiston" },
      { kind: "reference", citation: "“Magog,” Anchor Bible Dictionary (ed. D. N. Freedman, 1992)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "pri-097",
    era: "primeval",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Luke's genealogy of Jesus includes an ancestor between Arpachshad and Shelah who is missing from Hebrew Genesis 11. Who?",
    choices: ["Cainan", "Enosh", "Joktan", "Nahor"],
    answer: 0,
    explanation: {
      textSays:
        "Luke 3:35–36: “the son of Shelah, the son of Cainan, the son of Arphaxad, the son of Shem.” Hebrew Genesis 11:12 makes Arpachshad the father of Shelah directly.",
      world:
        "The Greek Septuagint adds a Cainan (Kainan) between Arpachshad and Shelah in Genesis 10:24 and 11:12–13, with his own ages. Luke, who usually follows the Septuagint, includes him too. The name does not appear in the Hebrew text or the Samaritan Pentateuch.",
      theirEyes:
        "Luke's Greek-speaking readers knew their Bible in Greek, so to them Cainan was simply part of the family line.",
      tradition: {
        jewish: "Jubilees 8:1–4 also includes Kainam, saying he found and copied an inscription of the Watchers' teaching about the stars.",
      },
    },
    confidence: "settled",
    references: ["Luke 3:35–36", "Genesis 11:12"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 10:24; 11:12–13" },
      { kind: "primary", citation: "Jubilees 8:1–4 (trans. R. H. Charles, 1913)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-098",
    era: "primeval",
    level: 20,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "At Pentecost the crowd is “bewildered” (Acts 2:6). The Greek verb is the same one the Septuagint uses at Babel for what?",
    choices: [
      "Building the tower",
      "Scattering the people",
      "Confusing their language",
      "Coming down to see the city",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Acts 2:6: “the multitude came together and were bewildered, because everyone heard them speaking in his own language.”",
      world:
        "Luke's verb is syncheō (“confuse, bewilder”). The Septuagint of Genesis 11:7 and 11:9 uses the same verb for God confusing the language, and even names the city Synchysis, “Confusion.” Acts 2:9–11 then lists peoples from many lands, echoing a table of nations.",
      theirEyes:
        "A Greek-speaking pilgrim who knew his Bible might catch the echo: the same confusion as Babel, but now everyone understands.",
      tradition: {
        christian:
          "Many Christian interpreters, ancient and modern, read Pentecost as a reversal of Babel: languages that once divided people now carry one message to all nations.",
      },
    },
    confidence: "settled",
    references: ["Acts 2:6", "Acts 2:9–11", "Genesis 11:7–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 11:7, 9; Greek New Testament, Acts 2:6" },
      { kind: "scholarship", citation: "Joseph A. Fitzmyer, The Acts of the Apostles (Anchor Bible 31, 1998), on Acts 2" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-099",
    era: "primeval",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: if Abram was born when Terah was 70 (Genesis 11:26), the Hebrew numbers in Genesis 11:32 and 12:4 mean Terah was still alive when Abram left Haran.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Terah was 70 when his sons were born (Genesis 11:26), Abram “was seventy-five years old when he departed from Haran” (12:4), and “The days of Terah were two hundred five years” (11:32). On that assumption Terah was 70 + 75 = 145 when Abram left, with 60 years still to live. Genesis 11:31–32 only reports his death after the move to Haran, without dating it against Abram's departure.",
      world:
        "Yet Stephen says God moved Abraham from Haran “when his father was dead” (Acts 7:4). The Samaritan Pentateuch gives Terah a lifespan of 145 years in Genesis 11:32, so on the same reckoning he dies in the year Abram leaves, which fits Stephen.",
      theirEyes:
        "Careful ancient readers counting the years noticed the puzzle, and different copies of Genesis offered different numbers.",
      debate:
        "Explanations include that Abram was a younger son born later, that Stephen followed a text like the Samaritan one, or that Genesis 11:32 records Terah's death early to close his story.",
    },
    confidence: "settled",
    references: ["Genesis 11:26", "Genesis 11:31–32", "Genesis 12:4", "Acts 7:4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Samaritan Pentateuch, Genesis 11:32" },
      { kind: "scholarship", citation: "Gordon J. Wenham, Genesis 1–15 (Word Biblical Commentary 1, 1987), on Genesis 11:32" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-100",
    era: "primeval",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Genesis 11:28 says Haran died in Ur while Terah was alive. How does the Book of Jubilees say he died?",
    choices: [
      "He fell from the tower of Babel",
      "He was killed by Nimrod's soldiers",
      "He drowned crossing the Euphrates",
      "He was burned trying to rescue idols from a fire Abram had set",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 11:28: “Haran died in the land of his birth, in Ur of the Chaldees, while his father Terah was still alive.” No cause is given.",
      tradition: {
        jewish:
          "Jubilees 12:12–14 says Abram, aged sixty, secretly burned the house of idols at night; when people rushed to save their gods, “Haran hasted to save them, but the fire flamed over him,” and he died in Ur “before Terah his father.”",
      },
      world:
        "Ancient readers often filled gaps in Genesis. Here Jubilees makes Abram an idol-breaker even before God calls him. The Septuagint renders “Ur of the Chaldees” as “the land of the Chaldeans,” as Acts 7:4 does.",
      theirEyes:
        "For Jubilees' audience, Abram's break with idols began with a blaze in the night that cost his own brother's life.",
    },
    confidence: "settled",
    references: ["Genesis 11:28", "Acts 7:4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 12:12–14 (trans. R. H. Charles, 1913)" },
      { kind: "primary", citation: "Septuagint, Genesis 11:28, 31" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
