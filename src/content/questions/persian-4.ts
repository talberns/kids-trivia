import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

const portenYardeni = {
  kind: "scholarship",
  citation: "Bezalel Porten and Ada Yardeni, Textbook of Aramaic Documents from Ancient Egypt, vols. 1–4 (Jerusalem, 1986–1999)",
} as const;

export const persian4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "per-076",
    era: "persian",
    level: 16,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Elephantine “Passover papyrus” of 419 BCE passes on festival instructions to the Jewish garrison. Who signs it as sender?",
    choices: ["Sanballat", "Bagavahya", "Hananiah", "Ezra"],
    answer: 2,
    explanation: {
      world:
        "The letter, dated to year 5 of Darius II (419/418 BCE), is addressed to Yedaniah and his colleagues of the Jewish garrison from “your brother Hananiah.” It says word had been sent from the king to Arsames, the satrap of Egypt, and sets out days of Nisan to keep: the 14th, then the 15th to the 21st as a festival of Unleavened Bread, with no leaven to be eaten or kept in the house. The papyrus is damaged, and parts of the festival wording (including the word “Passover”) are restored.",
      theirEyes:
        "For soldiers on a Nile island, a letter about festival dates that named the Great King himself carried real weight.",
      debate:
        "Who Hananiah was is unknown. Some scholars have guessed he was Nehemiah's brother Hanani (Nehemiah 1:2; 7:2), but that cannot be proved. It is also debated whether the king authorised the festival itself or only the garrison's time off for it.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Elephantine “Passover letter,” TAD A4.1 (Cowley 21), year 5 of Darius II (419/418 BCE); Ägyptisches Museum und Papyrussammlung, Berlin" },
      { kind: "primary", citation: "H. L. Ginsberg, trans., “Aramaic Papyri from Elephantine,” in J. B. Pritchard, ed., Ancient Near Eastern Texts (3rd ed., 1969), 491–492" },
      portenYardeni,
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-077",
    era: "persian",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "1 Chronicles opens its genealogies with Adam. With what event does 2 Chronicles end?",
    choices: [
      "The death of King Josiah at Megiddo",
      "Cyrus' proclamation inviting God's people to go up to Jerusalem",
      "Nehemiah finishing Jerusalem's walls",
      "The fall of Samaria to Assyria",
    ],
    answer: 1,
    explanation: {
      textSays:
        "1 Chronicles 1:1 begins: “Adam, Seth, Enosh.” 2 Chronicles 36:22–23 ends with Cyrus king of Persia: “Whoever there is among you of all his people, Yahweh his God be with him, and let him go up.” The same decree opens Ezra (Ezra 1:1–3).",
      world:
        "Starting from Adam sets Israel's story inside the history of all humanity. Ending with Cyrus points the reader to the return and the rebuilt Temple. Most scholars date Chronicles to the late Persian or early Hellenistic period, partly because David's line in 1 Chronicles 3 runs several generations past Zerubbabel.",
      theirEyes:
        "A reader in Persian Yehud met the whole story from the first man to the king who let them go home, ending on the words “let him go up.”",
    },
    confidence: "settled",
    references: ["1 Chronicles 1:1", "2 Chronicles 36:22–23", "Ezra 1:1–3", "1 Chronicles 3:17–24"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Sara Japhet, I & II Chronicles (Old Testament Library, Westminster John Knox, 1993), introduction" },
      { kind: "reference", citation: "“Chronicles, books of,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-078",
    era: "persian",
    level: 16,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Esther and Ezra 7 use dat, a word borrowed from Persian. What does it mean?",
    choices: ["A treasury", "A garden", "A royal messenger", "A law or decree"],
    answer: 3,
    explanation: {
      textSays:
        "Esther 1:8: “In accordance with the law, the drinking was not compulsory.” Haman says the Jews' “laws are different from other people’s. They don’t keep the king’s laws” (Esther 3:8). Artaxerxes' Aramaic letter calls Ezra “the scribe of the law of the perfect God of heaven” (Ezra 7:12), and 7:26 sets “the law of your God” beside “the law of the king.”",
      world:
        "Dat comes from Old Persian dāta, “law.” It is common in Esther and appears in Ezra and Daniel, books from or about the Persian period, but not securely in earlier Hebrew (a reading in Deuteronomy 33:2 is disputed). Older Hebrew uses torah, mishpat or khoq instead.",
      theirEyes:
        "In Susa, “the law” meant the king's word, and Ezra 7 shows the Persians treating God's law and the king's law as two codes to be enforced side by side.",
    },
    confidence: "settled",
    references: ["Esther 1:8", "Esther 3:8", "Ezra 7:12", "Ezra 7:26"],
    sources: [
      scripture,
      { kind: "reference", citation: "L. Koehler and W. Baumgartner, The Hebrew and Aramaic Lexicon of the Old Testament (HALOT), s.v. dāt" },
      { kind: "reference", citation: "Brown, Driver and Briggs, A Hebrew and English Lexicon of the Old Testament (1906), s.v. dāt" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-079",
    era: "persian",
    level: 16,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Malachi 1:11 says that “in every place” among the nations, what will be offered to God's name?",
    choices: ["Firstfruits of wheat and barley", "Incense and a pure offering", "Burnt offerings of bulls", "Silver and gold"],
    answer: 1,
    explanation: {
      textSays:
        "Malachi 1:11: “For from the rising of the sun even to its going down, my name is great among the nations, and in every place incense will be offered to my name, and a pure offering.” It is a rebuke to Jerusalem's priests, who were offering blind, lame and sick animals (1:8).",
      world:
        "The verse sounds odd beside the rule of one sanctuary. Scholars disagree whether it means worship by Jews scattered abroad, honour paid to the high God by other nations, or a future hope.",
      theirEyes:
        "A priest who cut corners at the altar heard that even the far nations were giving God better than he was.",
      tradition: {
        christian:
          "The Didache (late 1st or early 2nd century) quotes this verse for the Lord's Day gathering (Didache 14.3), and Justin Martyr applies it to the Eucharist (Dialogue with Trypho 41).",
      },
    },
    confidence: "settled",
    references: ["Malachi 1:8", "Malachi 1:11"],
    sources: [
      scripture,
      { kind: "primary", citation: "Didache 14.3" },
      { kind: "primary", citation: "Justin Martyr, Dialogue with Trypho 41" },
      { kind: "scholarship", citation: "Andrew E. Hill, Malachi (Anchor Bible 25D, Doubleday, 1998), on 1:11" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-080",
    era: "persian",
    level: 16,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Elephantine Jews told Judah's governor that Cambyses destroyed Egyptian temples but left their temple of YHW untouched.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "Their petition of 407 BCE says their forefathers had built the temple in the days of the kings of Egypt, and that when Cambyses entered Egypt (525 BCE) he found it already built: the temples of the gods of Egypt were all overthrown, but no one damaged anything in that temple. The point was clear: the temple was old, and Persia had always respected it.",
      theirEyes:
        "Writing to a Persian governor, the priests reminded him that even the conqueror Cambyses had spared their house of God.",
      debate:
        "Whether Cambyses really destroyed Egyptian temples is disputed. Herodotus paints him as a sacrilegious tyrant, but Egyptian sources such as Udjahorresnet's inscription show him supporting the temple of Neith at Sais. The claim tells us what the Elephantine Jews believed, not necessarily what happened.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Elephantine petition to Bagavahya, TAD A4.7 (Cowley 30), 407 BCE; P. Berlin 13495" },
      { kind: "primary", citation: "Herodotus, Histories 3.27–29, 3.37" },
      portenYardeni,
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "per-081",
    era: "persian",
    level: 17,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 410 BCE the priests of Khnum plotted to destroy the Elephantine temple of YHW. Which Persian official did they win over?",
    choices: ["Vidranga", "Mithredath", "Udjahorresnet", "Arsames"],
    answer: 0,
    explanation: {
      world:
        "The petition of 407 BCE says that in the month of Tammuz, year 14 of Darius II (410 BCE), while the satrap Arsames had gone to the king, the priests of the god Khnum conspired with Vidranga, the Persian official in charge of the district. He sent word to his son Nafaina (also spelled Nefayan), garrison commander at Syene, who led troops that broke into the temple, smashed its stone pillars, burned its cedar roof and carried off its gold and silver vessels.",
      theirEyes:
        "With the satrap far away, a local feud between neighbours' temples turned into soldiers with axes and fire.",
      debate:
        "Why the Khnum priests acted is debated: perhaps a land dispute next to their temple, or anger at animal sacrifice beside the sanctuary of a ram-headed god. A later letter (TAD A4.10) suggests sheep and goat offerings were a sore point.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Elephantine petition to Bagavahya, TAD A4.7 (Cowley 30), 407 BCE; P. Berlin 13495" },
      { kind: "archaeology", citation: "Report on the destruction, TAD A4.5 (Cowley 27)" },
      { kind: "scholarship", citation: "Bezalel Porten, Archives from Elephantine: The Life of an Ancient Jewish Military Colony (University of California Press, 1968)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-082",
    era: "persian",
    level: 17,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "What did the Elephantine Jews say they had been doing ever since their temple was destroyed?",
    choices: [
      "Wearing sackcloth and fasting, without oil or wine",
      "Sending their offerings to Jerusalem each year",
      "Worshipping in the temple of Khnum",
      "Holding a yearly feast of thanksgiving",
    ],
    answer: 0,
    explanation: {
      world:
        "The petition of 407 BCE says that from the month of Tammuz in year 14 until now, they, their wives and children have worn sackcloth and fasted; their wives are like widows; they have not anointed themselves with oil or drunk wine. It adds that no meal offering, incense or burnt offering had been made in the temple since then.",
      theirEyes:
        "For three years the colony lived as if in mourning, with no festive oil, no wine and no altar of their own.",
      tradition: {
        shared:
          "The same signs of grief appear in the Bible: sackcloth and fasting (Esther 4:3), and going without oil when mourning (2 Samuel 14:2).",
      },
    },
    confidence: "settled",
    references: ["Esther 4:3", "2 Samuel 14:2"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Elephantine petition to Bagavahya, TAD A4.7 (Cowley 30), 407 BCE; P. Berlin 13495" },
      { kind: "primary", citation: "H. L. Ginsberg, trans., “Aramaic Papyri from Elephantine,” in J. B. Pritchard, ed., Ancient Near Eastern Texts (3rd ed., 1969), 491–492" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-083",
    era: "persian",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the World English Bible's Malachi 2:16, one who “hates and divorces” covers his garment with what?",
    choices: ["Ashes", "Tears", "Violence", "Dust"],
    answer: 2,
    explanation: {
      textSays:
        "Malachi 2:16: “One who hates and divorces”, says Yahweh, the God of Israel, “covers his garment with violence!” The passage accuses men of dealing treacherously with “the wife of your youth,” who is “your companion and the wife of your covenant” (2:14), right after condemning marriage to “the daughter of a foreign god” (2:11).",
      world:
        "The Hebrew of 2:16 is notoriously hard. The King James Version reads it as God speaking: “he hateth putting away.” Many modern versions, like the WEB, make the man who divorces in hatred the subject.",
      theirEyes:
        "In Persian-era Judah, a wife sent away could lose her home and support; the prophet calls that a crime, not a private matter.",
      debate:
        "Scholars still argue over the verse's grammar and over whether Malachi condemns divorce in general or only divorce done in hatred and treachery.",
    },
    confidence: "settled",
    references: ["Malachi 2:11", "Malachi 2:14–16"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Andrew E. Hill, Malachi (Anchor Bible 25D, Doubleday, 1998), on 2:16" },
      { kind: "scholarship", citation: "Gordon P. Hugenberger, Marriage as a Covenant: A Study of Biblical Law and Ethics Governing Marriage Developed from the Perspective of Malachi (Brill, 1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-084",
    era: "persian",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Samaritan Pentateuch adds an extra command right after the Ten Commandments in Exodus 20. What does it command?",
    choices: [
      "Never to marry a woman of Judah",
      "To keep Passover only at Shechem",
      "To build an altar on Mount Gerizim",
      "To read the law aloud every seventh year",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Deuteronomy 11:29 sets “the blessing on Mount Gerizim,” and Deuteronomy 27:4 (in the Hebrew and the WEB) commands stones to be set up “on Mount Ebal.”",
      world:
        "After Exodus 20:17, and again in Deuteronomy 5, the Samaritan Pentateuch inserts a passage built from Deuteronomy 11 and 27: set up great stones, write the law on them, and build an altar on Mount Gerizim. Samaritans count it as one of their Ten Commandments, which roots their holy mountain in the Sinai covenant itself.",
      theirEyes:
        "For a Samaritan, Gerizim was not a rival's invention: it was written into the commandments God gave at Sinai.",
      debate:
        "Most scholars see the addition as a deliberate Samaritan expansion. Separately, some argue that “Gerizim” in Deuteronomy 27:4, read by the Samaritan text and an Old Latin witness, may be older than “Ebal.”",
    },
    confidence: "mainstream",
    references: ["Exodus 20:1–17", "Deuteronomy 11:29", "Deuteronomy 27:2–7"],
    sources: [
      scripture,
      { kind: "primary", citation: "Samaritan Pentateuch, Exodus 20:17 (expanded text)" },
      { kind: "scholarship", citation: "Emanuel Tov, Textual Criticism of the Hebrew Bible (3rd ed., Fortress, 2012), on the Samaritan Pentateuch" },
      { kind: "scholarship", citation: "Reinhard Pummer, The Samaritans: A Profile (Eerdmans, 2016)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-085",
    era: "persian",
    level: 17,
    category: "neighbours",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Elephantine Jews say Johanan, the high priest in Jerusalem, answered their first letter about the destroyed temple.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "The petition of 407 BCE says that when the temple was destroyed they wrote to Bagavahya the governor, to Jehohanan the high priest and his colleagues the priests in Jerusalem, to Ostanes the brother of Anani, and to the Jewish nobles, but none of them sent a single letter in reply. So they wrote again to Bagavahya, and said they had also written to Delaiah and Shelemiah, sons of Sanballat governor of Samaria.",
      textSays:
        "Nehemiah 12:22 dates records to “the days of Eliashib, Joiada, Johanan, and Jaddua,” a line of high priests. This Johanan is usually identified with the high priest of the papyrus.",
      theirEyes:
        "Waiting for an answer from Jerusalem that never came, the colony turned to the Persian governor and to Samaria instead.",
      debate:
        "Why Jerusalem was silent is unknown. Many scholars think its priests disapproved of a sacrificial temple outside Jerusalem.",
    },
    confidence: "settled",
    references: ["Nehemiah 12:22"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Elephantine petition to Bagavahya, TAD A4.7 (Cowley 30), 407 BCE; P. Berlin 13495" },
      portenYardeni,
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "per-086",
    era: "persian",
    level: 18,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Bagavahya and Delaiah's memorandum backed rebuilding the Elephantine temple. Which offerings does it say should be made there?",
    choices: [
      "Only Passover lambs",
      "Burnt offerings, as before",
      "Meal offering and incense",
      "No offerings, only prayer",
    ],
    answer: 2,
    explanation: {
      world:
        "The short memorandum, from Bagavahya governor of Judah and Delaiah son of Sanballat, records what the messenger may say before Arsames that the “altar house of the God of Heaven” should be rebuilt on its site, and that meal offering and incense be offered on the altar as before. Burnt offerings, which the petition had asked for, are not mentioned. In a follow-up offer the Elephantine leaders promise that sheep, ox and goat will not be offered there as burnt offerings, and offer a payment.",
      theirEyes:
        "The colony got its temple back, but the smell of roasting meat would no longer rise beside the ram-god's sanctuary.",
      debate:
        "Scholars debate why burnt offerings were dropped: to keep the peace with the priests of Khnum, to respect Persian purity concerns, or because Jerusalem wanted animal sacrifice kept for its own Temple.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Memorandum of Bagavahya and Delaiah, TAD A4.9 (Cowley 32)" },
      { kind: "archaeology", citation: "Offer of the Elephantine leaders, TAD A4.10 (Cowley 33)" },
      { kind: "primary", citation: "H. L. Ginsberg, trans., “Aramaic Papyri from Elephantine,” in J. B. Pritchard, ed., Ancient Near Eastern Texts (3rd ed., 1969), 492" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-087",
    era: "persian",
    level: 18,
    category: "daily-life",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Mibtahiah's Elephantine marriage contract (about 449 BCE) let her, not only her husband, end the marriage.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "Mibtahiah, daughter of Mahseiah, is the best-documented woman of Jewish Elephantine; her family archive covers decades of property deals. Her “document of wifehood” with Eshor, an Egyptian royal builder, from the reign of Artaxerxes I and usually dated to about 449 BCE, has two matching clauses. If Mibtahiah “stands up in an assembly” and says, “I hated Eshor my husband,” she pays “silver of hatred” and leaves with her goods. If Eshor says the same of her, he loses the bride-price (mohar) and she still leaves with her goods.",
      theirEyes:
        "A woman at Elephantine could own houses, go to court and, by a public declaration, walk out of a marriage with her property.",
      debate:
        "Scholars debate how far these contracts reflect Jewish law of the time rather than local Aramaic and Egyptian legal custom.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Document of wifehood of Mibtahiah and Eshor, TAD B2.6 (Cowley 15), c. 449 BCE" },
      { kind: "scholarship", citation: "Annalisa Azzoni, The Private Lives of Women in Persian Egypt (Eisenbrauns, 2013)" },
      portenYardeni,
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-088",
    era: "persian",
    level: 18,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Persian ganza, “treasure,” gave Hebrew and Aramaic words for treasury, such as ganzakh. Which later Jewish word comes from the same root?",
    choices: ["Sanhedrin", "Mishnah", "Midrash", "Genizah"],
    answer: 3,
    explanation: {
      textSays:
        "1 Chronicles 28:11 uses the rare Persian loanword ganzak, “treasury,” for the “treasuries” in David's plans for the Temple. The Aramaic of Ezra uses the related ginzayya for “the king’s treasure house” at Babylon (Ezra 5:17), and Esther 3:9 speaks of “the king’s treasuries” (ginzei).",
      world:
        "From the root g-n-z, “to store away,” comes genizah: a storeroom where worn-out sacred writings were put away rather than destroyed. The most famous is the Cairo Genizah. Sanhedrin is from Greek; Mishnah and Midrash come from Hebrew roots.",
      theirEyes:
        "Under Persian rule, the king's treasure houses were everywhere, and their Persian name slipped into Jewish speech.",
    },
    confidence: "mainstream",
    references: ["1 Chronicles 28:11", "Ezra 5:17", "Esther 3:9"],
    sources: [
      scripture,
      { kind: "reference", citation: "L. Koehler and W. Baumgartner, The Hebrew and Aramaic Lexicon of the Old Testament (HALOT), s.v. ganzak, genez" },
      { kind: "reference", citation: "“Genizah,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-089",
    era: "persian",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Hebrew Malachi 1:1 says the word came “by Malachi” (literally “by the hand of Malachi”). How does the Greek Septuagint translate it?",
    choices: ["“By the hand of Jeremiah”", "“By the hand of his messenger”", "“By Elijah the prophet”", "“By the priest of the covenant”"],
    answer: 1,
    explanation: {
      textSays:
        "Malachi 1:1: “A revelation, Yahweh’s word to Israel by Malachi.” Malachi 3:1 then says, “Behold, I send my messenger.”",
      world:
        "Mal'akhi means “my messenger.” The Septuagint did not treat it as a name at all, translating “by the hand of his messenger” (or “angel”; Greek angelos means both). Its heading still calls the book Malachias.",
      theirEyes:
        "A Greek-speaking Jew in Alexandria hearing this book read would hear of an unnamed messenger, not a prophet called Malachi.",
      debate:
        "Many scholars think the book was originally anonymous, its title drawn from 3:1. Others accept Malachi as a real personal name, perhaps short for “messenger of Yahweh.”",
    },
    confidence: "settled",
    references: ["Malachi 1:1", "Malachi 3:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Malachi 1:1" },
      { kind: "primary", citation: "A New English Translation of the Septuagint (NETS), ed. Albert Pietersma and Benjamin G. Wright (Oxford, 2007), Malachias 1:1" },
      { kind: "reference", citation: "“Malachi,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-090",
    era: "persian",
    level: 18,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "1 Chronicles 29:7 counts gold given in David's day in “darics.” Why do historians find that striking?",
    choices: [
      "The daric was a Persian coin first struck under Darius I, centuries after David",
      "Darics were Egyptian silver rings, not gold",
      "The word daric never appears anywhere else in the Bible",
      "Darics were minted by the Hasmoneans in the 2nd century BCE",
    ],
    answer: 0,
    explanation: {
      textSays:
        "1 Chronicles 29:7: the leaders gave “of gold five thousand talents and ten thousand darics.” Ezra 8:27 also counts gold bowls “weighing one thousand darics.”",
      world:
        "The gold daric, showing the Persian king as an archer, was introduced by Darius I (522–486 BCE), about five centuries after David. The Chronicler converted the gift into the gold coin his own readers knew, a clue that he wrote in the Persian period or later.",
      theirEyes:
        "To a reader in Persian Yehud, “ten thousand darics” was a vivid sum, the way a modern writer might put an old treasure into dollars.",
      debate:
        "Most scholars equate the Hebrew adarkon with the daric. A similar word in Ezra 2:69 and Nehemiah 7:70–72 (darkemon), which the WEB also renders “darics,” may instead mean the Greek drachma.",
    },
    confidence: "mainstream",
    references: ["1 Chronicles 29:7", "Ezra 8:27", "Ezra 2:69"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Daric,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "Sara Japhet, I & II Chronicles (Old Testament Library, Westminster John Knox, 1993), on 1 Chronicles 29:7" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "per-091",
    era: "persian",
    level: 19,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 1962 Bedouin found 4th-century BCE papyri from Samaria in a cave in Wadi Daliyeh. What are most of them?",
    choices: [
      "Legal deeds, mostly sales of slaves",
      "Copies of the Samaritan Pentateuch",
      "Letters to the high priest in Jerusalem",
      "Temple accounts from Mount Gerizim",
    ],
    answer: 0,
    explanation: {
      world:
        "The Wadi Daliyeh papyri, found north of Jericho and excavated by Paul and Nancy Lapp in 1963–64, are Aramaic legal documents written in the city of Samaria in roughly 375–335 BCE. Most record the sale or conveyance of slaves; others deal with property. Dozens of seal impressions survive, including one naming a son of Sanballat, governor of Samaria. They are older than any of the Dead Sea Scrolls.",
      theirEyes:
        "A wealthy family of Samaria fled with what mattered most to them: the deeds proving who owned their slaves and houses.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Douglas M. Gropp, Wadi Daliyeh II: The Samaria Papyri from Wadi Daliyeh (Discoveries in the Judaean Desert 28, Oxford, 2001)" },
      { kind: "scholarship", citation: "Frank Moore Cross, “The Discovery of the Samaria Papyri,” Biblical Archaeologist 26 (1963)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-092",
    era: "persian",
    level: 19,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Wadi Daliyeh cave also held the remains of some 200 people. Who do most scholars think they were?",
    choices: [
      "Essenes who copied the Dead Sea Scrolls",
      "Samarians fleeing Alexander the Great's army",
      "Judeans hiding from the Babylonians in 586 BCE",
      "Rebels from the Bar Kokhba revolt",
    ],
    answer: 1,
    explanation: {
      world:
        "Curtius Rufus says the Samarians burned alive Andromachus, Alexander's governor in Syria, and that Alexander punished them (History of Alexander 4.8.9–11). Frank Moore Cross argued that leading citizens of Samaria fled with their deeds after that revolt (about 331 BCE) and were trapped and killed in the cave. The latest papyri date to the 330s BCE, which fits.",
      theirEyes:
        "Families from Samaria, carrying jewellery, seals and title deeds, hid in a desert cave and never came out.",
      debate:
        "The link to Alexander's punishment is widely accepted but rests on combining the dates of the papyri with Curtius' brief report. How the people died is not certain.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "primary", citation: "Quintus Curtius Rufus, History of Alexander 4.8.9–11" },
      { kind: "scholarship", citation: "Frank Moore Cross, “The Discovery of the Samaria Papyri,” Biblical Archaeologist 26 (1963)" },
      { kind: "archaeology", citation: "Douglas M. Gropp, Wadi Daliyeh II: The Samaria Papyri from Wadi Daliyeh (Discoveries in the Judaean Desert 28, Oxford, 2001)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-093",
    era: "persian",
    level: 19,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "An Elephantine list of more than 100 donors, each giving 2 shekels “to YHW the God,” divides the silver between YHW and which deities?",
    choices: ["Ahura Mazda and Mithra", "Marduk and Nabu", "Eshembethel and Anathbethel", "Osiris and Isis"],
    answer: 2,
    explanation: {
      world:
        "The list opens by naming the members of the Jewish garrison who gave silver to YHW the God, 2 shekels each. At the end, the silver held by Yedaniah is divided: 12 karsh 6 shekels for YHW, 7 karsh for Eshembethel and 12 karsh for Anathbethel (1 karsh = 10 shekels). The figures do not tally neatly with the donations listed, so it is unclear exactly what the account records. Other Elephantine texts mention Anat-YHW and Herem-Bethel. The list is dated only to a “year 5,” placed by scholars in the late 5th century BCE.",
      theirEyes:
        "For a soldier's family at Elephantine, giving to the God of Israel and to these Bethel deities could happen in the same collection.",
      debate:
        "Who these deities were is debated. Some see Aramean gods worshipped alongside YHW; others see aspects of YHW himself, or think part of the funds belonged to neighbouring Aramean groups. Which king's “year 5” is meant is also disputed.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Elephantine collection account, TAD C3.15 (Cowley 22)" },
      portenYardeni,
      { kind: "scholarship", citation: "Bezalel Porten, Archives from Elephantine: The Life of an Ancient Jewish Military Colony (University of California Press, 1968)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-094",
    era: "persian",
    level: 19,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says the Persian general Bagoses taxed every Temple lamb after the high priest John (Johanan) killed someone in the Temple. Whom?",
    choices: ["Sanballat's son", "A Persian tax collector", "His own brother Jesus", "The prophet Malachi"],
    answer: 2,
    explanation: {
      world:
        "Josephus: John's brother Jesus was a friend of Bagoses, who had promised him the high priesthood. “Jesus quarreled with John in the temple, and so provoked his brother, that in his anger his brother slew him.” Bagoses then made the Jews pay “for every lamb fifty shekels” before the daily sacrifices, for seven years (Antiquities 11.7.1).",
      textSays:
        "Nehemiah 12:22 names Johanan after Joiada in the high-priestly line.",
      theirEyes:
        "Murder in the holy place gave a Persian official the excuse he needed, and every family bringing a lamb paid for it.",
      debate:
        "Many scholars identify Bagoses with Bagavahya, governor of Judah in the Elephantine papyri, which would date the murder to around 410 BCE. Josephus calls Bagoses a general of “another Artaxerxes,” so some place it later, under Artaxerxes III.",
    },
    confidence: "settled",
    references: ["Nehemiah 12:22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.7.1 (11.297–301), trans. William Whiston" },
      { kind: "scholarship", citation: "H. G. M. Williamson, “The Historical Value of Josephus' Jewish Antiquities xi. 297–301,” Journal of Theological Studies 28 (1977)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-095",
    era: "persian",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Mark 1:2–3 combines Malachi 3:1 with Isaiah 40:3. In the oldest manuscripts, whom does Mark name as the source?",
    choices: ["Malachi", "Elijah", "Moses", "Isaiah the prophet"],
    answer: 3,
    explanation: {
      textSays:
        "Malachi 3:1: “Behold, I send my messenger, and he will prepare the way before me!” Mark 1:2–3 runs it straight into Isaiah 40:3: “the voice of one crying in the wilderness” (Mark 1:3). The WEB, which follows the majority of later manuscripts, opens Mark 1:2 with “As it is written in the prophets,” and gives no footnote on the variant.",
      world:
        "The oldest manuscripts, including Codex Sinaiticus and Codex Vaticanus (4th century), read “in Isaiah the prophet.” Later copyists apparently changed it to “the prophets,” since the first line comes from Malachi (and Exodus 23:20).",
      theirEyes:
        "Early Christian readers heard Malachi's promised messenger and Isaiah's desert voice as one prophecy, fulfilled in John the Baptist.",
      tradition: {
        christian: "Matthew 11:10 and Luke 7:27 have Jesus apply Malachi 3:1 to John the Baptist.",
      },
    },
    confidence: "settled",
    references: ["Malachi 3:1", "Isaiah 40:3", "Mark 1:2–3", "Matthew 11:10", "Luke 7:27"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Bruce M. Metzger, A Textual Commentary on the Greek New Testament (2nd ed., United Bible Societies, 1994), on Mark 1:2" },
      { kind: "archaeology", citation: "Codex Sinaiticus (British Library, Add MS 43725) and Codex Vaticanus (Vatican Library, Vat. gr. 1209), Mark 1:2" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "per-096",
    era: "persian",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus dates the Samaritan temple on Mount Gerizim to Alexander's time. To when did excavator Yitzhak Magen date the first sacred precinct?",
    choices: [
      "The time of King Ahab, 9th century BCE",
      "The mid-5th century BCE, in the Persian period",
      "The reign of Herod the Great",
      "After the Bar Kokhba revolt",
    ],
    answer: 1,
    explanation: {
      world:
        "Magen led long-running excavations on the summit of Gerizim. From pottery, coins and other finds he argued that the first sacred precinct was built in the mid-5th century BCE, in Nehemiah's era, and enlarged in the early 2nd century BCE. Josephus instead says Sanballat built it with Alexander's leave in 332 BCE (Antiquities 11.8.4).",
      theirEyes:
        "If Magen is right, the Samaritans already had their own holy place on Gerizim while Nehemiah was rebuilding Jerusalem's walls.",
      debate:
        "Magen's early date is widely cited but debated. Some scholars accept a Persian-period sanctuary; others think the evidence for the first phase is too thin and prefer a later date closer to Josephus' account.",
    },
    confidence: "debated",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Yitzhak Magen, Mount Gerizim Excavations, vol. 2: A Temple City (Israel Antiquities Authority, 2008)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.8.2–4" },
      { kind: "scholarship", citation: "Reinhard Pummer, The Samaritans: A Profile (Eerdmans, 2016)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-097",
    era: "persian",
    level: 20,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says Sanballat built the Gerizim temple and made Manasseh its priest. Who was Manasseh?",
    choices: [
      "A Persian satrap who converted",
      "A Levite sent from Babylon by Ezra",
      "Sanballat's son-in-law, brother of the high priest Jaddua",
      "Sanballat's eldest son",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Nehemiah 12:11 ends the high-priestly line with Jaddua. Nehemiah 13:28: “One of the sons of Joiada, the son of Eliashib the high priest, was son-in-law to Sanballat the Horonite; therefore I chased him from me.”",
      world:
        "Josephus says Jaddua's brother Manasseh married Nicaso, Sanballat's daughter. Pressed to divorce her, Sanballat promised him the high priesthood and a temple on Mount Gerizim like the one at Jerusalem, which Sanballat built with Alexander's leave (Antiquities 11.7.2; 11.8.2–4).",
      theirEyes:
        "A priestly marriage across the border became, in the telling, the founding story of a rival temple.",
      debate:
        "Many scholars think Josephus' story echoes Nehemiah 13:28, set about a century earlier; whether there were two such marriages, or one remembered twice, is debated.",
    },
    confidence: "settled",
    references: ["Nehemiah 12:10–11", "Nehemiah 13:28"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.7.2; 11.8.2–4, trans. William Whiston" },
      { kind: "scholarship", citation: "Reinhard Pummer, The Samaritans in Flavius Josephus (Mohr Siebeck, 2009)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-098",
    era: "persian",
    level: 20,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jonah son of Amittai lived under Jeroboam II (8th century BCE). Why do many scholars date the Book of Jonah to the Persian period or later?",
    choices: [
      "The book names Cyrus as king of Nineveh",
      "Its Hebrew has late features, and it calls God “the God of heaven”",
      "2 Kings says Jonah returned from the Babylonian exile",
      "A Dead Sea Scroll copy is dated 450 BCE",
    ],
    answer: 1,
    explanation: {
      textSays:
        "2 Kings 14:25 places the prophet “Jonah the son of Amittai” in the reign of Jeroboam II. In the book, Jonah says, “I fear Yahweh, the God of heaven” (Jonah 1:9), and the narrator remarks that “Nineveh was an exceedingly great city” (3:3).",
      world:
        "Arguments for a late date include late Hebrew words and Aramaic influence, the title “God of heaven” (frequent in Ezra, Nehemiah and Daniel), and Nineveh described in the past tense, as if long gone (it fell in 612 BCE). The book names no Persian king.",
      theirEyes:
        "For Persian-era readers, Nineveh was a ruined legend, the perfect setting for a story about God's mercy to a foreign city.",
      debate:
        "There is no consensus. Proposed dates range from the 8th century to the Hellenistic period; some argue the linguistic evidence is weaker than claimed.",
    },
    confidence: "debated",
    references: ["2 Kings 14:25", "Jonah 1:9", "Jonah 3:3"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Jack M. Sasson, Jonah (Anchor Bible 24B, Doubleday, 1990), introduction" },
      { kind: "reference", citation: "“Jonah,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-099",
    era: "persian",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Scholars who date Ruth to the Persian period often read it as a response to what?",
    choices: [
      "Antiochus IV's ban on circumcision",
      "The fall of Nineveh",
      "Ezra and Nehemiah's campaign against foreign marriages",
      "The building of the Elephantine temple",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Nehemiah 13:1 reads that “an Ammonite and a Moabite should not enter into the assembly of God forever,” and Nehemiah 13:23 condemns marriages with women “of Ashdod, of Ammon, and of Moab.” Yet Ruth the Moabite becomes King David's great-grandmother: Obed “is the father of Jesse, the father of David” (Ruth 4:17).",
      world:
        "On this reading, Ruth's loyal Moabite heroine answers the policy of sending away foreign wives (Ezra 10) with a quieter message: a foreigner could belong to Israel, even to the royal line.",
      theirEyes:
        "In a Jerusalem where foreign wives were being sent away, a story about Moabite Ruth would have sounded pointed.",
      debate:
        "The date of Ruth is debated. Some date it to the monarchy, noting its classical Hebrew and focus on David; others prefer the Persian period. Even among late-daters, not all see it as a protest.",
    },
    confidence: "debated",
    references: ["Ruth 4:17", "Nehemiah 13:1", "Nehemiah 13:23", "Ezra 10:1–44"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Robert L. Hubbard Jr., The Book of Ruth (New International Commentary on the Old Testament, Eerdmans, 1988), introduction" },
      { kind: "reference", citation: "“Ruth, book of,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-100",
    era: "persian",
    level: 20,
    category: "faith-practice",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: scholars agree that Jewish belief in the resurrection of the dead was borrowed from Persian Zoroastrianism.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "The clearest Hebrew Bible statement comes late: “Many of those who sleep in the dust of the earth will awake, some to everlasting life, and some to shame and everlasting contempt” (Daniel 12:2).",
      world:
        "Zoroastrian teaching includes a final judgment and a bodily resurrection, and Jews lived under Persian rule for two centuries. Scholars such as Mary Boyce argued for strong Persian influence on ideas of resurrection, angels and demons, and a final battle of good and evil.",
      theirEyes:
        "Jews in the Persian Empire lived beside neighbours who spoke of a coming renewal of the world, but whether those ideas shaped Jewish hope is still argued.",
      debate:
        "There is no consensus. Others trace resurrection hope to Israel's own texts (Isaiah 26:19; Ezekiel 37), and point out that the Zoroastrian texts that describe it in detail were written down much later, so dating the borrowing is hard.",
    },
    confidence: "mainstream",
    references: ["Daniel 12:2", "Isaiah 26:19", "Ezekiel 37:1–14"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Mary Boyce, Zoroastrians: Their Religious Beliefs and Practices (Routledge, 1979)" },
      { kind: "scholarship", citation: "Jon D. Levenson, Resurrection and the Restoration of Israel (Yale University Press, 2006)" },
      { kind: "reference", citation: "“Zoroastrianism,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
