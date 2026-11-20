import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const dailyB: QuestionInput[] = [
  // ───────────── Persian period ─────────────
  {
    id: "dly-026",
    era: "persian",
    daily: true,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which descendant of King David led the returning exiles in rebuilding the altar and the Temple in Jerusalem?",
    choices: ["Mordecai", "Zerubbabel", "Ezra", "Haman"],
    answer: 1,
    explanation: {
      textSays:
        "Zerubbabel son of Shealtiel and the priest Jeshua rebuilt the altar and began the Temple (Ezra 3:2, 3:8). Haggai calls Zerubbabel governor of Judah (Haggai 1:1), and 1 Chronicles 3:17–19 lists him among the descendants of King Jehoiachin.",
      world:
        "Under Persian rule Judah (Aramaic Yehud) was a small province. Its governor served the Persian king, so a Davidic heir could lead his people but not reign as king.",
      theirEyes:
        "Old priests, Levites and family heads who remembered Solomon's Temple wept aloud at the new foundations, while many others shouted for joy, and the two sounds could not be told apart (Ezra 3:12–13).",
    },
    confidence: "settled",
    references: ["Ezra 3:2", "Ezra 3:8", "Ezra 3:12–13", "Haggai 1:1", "1 Chronicles 3:17–19"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian: return under Cyrus and Darius I." },
  },
  {
    id: "dly-027",
    era: "persian",
    daily: true,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Ezra 6:15, the rebuilt Second Temple was completed in the sixth year of which Persian king?",
    choices: ["Cyrus", "Nebuchadnezzar", "Alexander the Great", "Darius"],
    answer: 3,
    explanation: {
      textSays:
        "Ezra 6:15 says the house was finished on the third day of the month Adar, in the sixth year of King Darius. It was then dedicated with sacrifices and Passover was kept (Ezra 6:16–22).",
      world:
        "This is Darius I (ruled 522–486 BCE), so his sixth year is usually dated 516/515 BCE. This Temple stood, greatly expanded by Herod the Great, until the Romans destroyed it in 70 CE. Cyrus had authorised the return, Nebuchadnezzar was Babylonian, and Alexander came almost two centuries later.",
      theirEyes:
        "About seventy years after the ruins of 586 BCE, a finished Temple stood again in Jerusalem, though a plainer building than the old one.",
    },
    confidence: "settled",
    references: ["Ezra 6:14–22"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Darius I,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "Lester L. Grabbe, A History of the Jews and Judaism in the Second Temple Period, vol. 1: Yehud (T&T Clark, 2004)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian: Temple completed 516/515 BCE under Darius I." },
  },
  {
    id: "dly-028",
    era: "persian",
    daily: true,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The prophet Haggai scolded people for living in paneled houses while which “house” lay waste?",
    choices: ["The high priest's house", "The Temple", "The royal palace", "The synagogue"],
    answer: 1,
    explanation: {
      textSays:
        "Haggai 1:4: “Is it a time for you yourselves to dwell in your paneled houses, while this house lies waste?” The house is the Temple. Haggai blames poor harvests on the neglect (Haggai 1:6–11), and Ezra 5:1–2 says Haggai and Zechariah stirred Zerubbabel and Jeshua to restart work.",
      world:
        "Haggai's messages are dated to the second year of Darius I, 520 BCE (Haggai 1:1). Judah had a Persian-appointed governor, not a king, so there was no royal palace to rebuild, and there is no evidence of synagogues this early.",
      theirEyes:
        "Farmers who had sown much and reaped little heard the prophet say the problem was not the weather but an empty Temple mount.",
    },
    confidence: "settled",
    references: ["Haggai 1:1–11", "Ezra 5:1–2"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian: Haggai dated 520 BCE." },
  },
  {
    id: "dly-029",
    era: "persian",
    daily: true,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Nehemiah 8, where did Ezra read the Law of Moses aloud to the gathered people?",
    choices: [
      "In the palace at Susa",
      "On Mount Gerizim",
      "In the square before the Water Gate in Jerusalem",
      "Inside the Holy of Holies",
    ],
    answer: 2,
    explanation: {
      textSays:
        "The people gathered in the square before the Water Gate (Nehemiah 8:1–3). Ezra stood on a wooden platform and read from early morning until midday. Levites helped the people understand: “They read in the book, in the law of God, distinctly; and they gave the sense, so that they understood the reading” (Nehemiah 8:8).",
      world:
        "Many scholars see this public reading as an important step toward a community centred on a written, read-aloud Torah. Reading led straight to practice: the people went on to build booths for the festival of Sukkot (Nehemiah 8:14–17).",
      theirEyes:
        "Men, women and all who could understand stood for hours in the open square, and the people wept as they heard the words of the law (Nehemiah 8:3, 8:9).",
    },
    confidence: "settled",
    references: ["Nehemiah 8:1–9", "Nehemiah 8:14–17"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian: Ezra and Nehemiah, 5th century BCE." },
  },
  {
    id: "dly-030",
    era: "persian",
    daily: true,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Before he went to rebuild Jerusalem's walls, what was Nehemiah's job at the Persian court?",
    choices: ["Army commander", "Cupbearer to the king", "High priest", "Palace astrologer"],
    answer: 1,
    explanation: {
      textSays:
        "Nehemiah 1:11 ends: “Now I was cup bearer to the king.” In the twentieth year of King Artaxerxes he served the king wine, and the king noticed his sad face and let him go to Jerusalem (Nehemiah 2:1–8). The wall was finished in 52 days (Nehemiah 6:15).",
      world:
        "A royal cupbearer was a trusted courtier with daily access to the king. Persian reliefs at Persepolis show servants bearing vessels for the king. Artaxerxes I's twentieth year is usually dated 445/444 BCE.",
      theirEyes:
        "Showing sorrow in front of the Great King was risky. When the king asked why his face was sad, Nehemiah says, “Then I was very much afraid” (Nehemiah 2:2).",
    },
    confidence: "settled",
    references: ["Nehemiah 1:11", "Nehemiah 2:1–8", "Nehemiah 6:15"],
    sources: [scripture, { kind: "reference", citation: "“Nehemiah,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Neh 1:11 and 2:2 quotes checked against WEB. Era persian: Artaxerxes I, 445 BCE." },
  },
  {
    id: "dly-031",
    era: "persian",
    daily: true,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which of Nehemiah's opponents is also named, as governor of Samaria, in letters from a Jewish colony in Egypt?",
    choices: ["Haman", "Tobiah", "Sanballat", "Geshem"],
    answer: 2,
    explanation: {
      textSays:
        "Sanballat the Horonite mocked and opposed the rebuilding of Jerusalem's walls (Nehemiah 2:10, 2:19; 4:1–2). Tobiah and Geshem joined him, but only Sanballat appears in these Egyptian papyri.",
      world:
        "In 407 BCE the Jewish leaders of Elephantine wrote to Bagavahya, governor of Judah, asking for help rebuilding their temple. They add that they also wrote to Delaiah and Shelemiah, sons of Sanballat governor of Samaria. Most scholars identify this Sanballat with Nehemiah's opponent, whose sons were active a generation after Nehemiah's mission (445 BCE). The papyrus is in the Berlin Egyptian Museum; a second draft of the same letter (TAD A4.8) is in the Egyptian Museum, Cairo.",
      theirEyes:
        "To Sanballat, a strong walled Jerusalem was a rival next door, and his family was still powerful in Samaria decades later.",
    },
    confidence: "settled",
    references: ["Nehemiah 2:10", "Nehemiah 2:19", "Nehemiah 4:1–2"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Elephantine petition to Bagavahya, TAD A4.7 (Cowley 30), year 17 of Darius II (407 BCE); P. Berlin 13495, Ägyptisches Museum und Papyrussammlung, Berlin" },
      { kind: "archaeology", citation: "Second draft of the petition, TAD A4.8 (Cowley 31); Egyptian Museum, Cairo, JdE 43465" },
      { kind: "reference", citation: "Elephantine database, Staatliche Museen zu Berlin (elephantine.smb.museum), entries for P. 13495 and JdE 43465" },
      { kind: "scholarship", citation: "Bezalel Porten and Ada Yardeni, Textbook of Aramaic Documents from Ancient Egypt, vol. 1 (1986), A4.7–A4.8" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Neh 4:1–2 is 3:33–34 in Hebrew numbering." },
  },
  {
    id: "dly-032",
    era: "persian",
    daily: true,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Aramaic papyri show that a Jewish military colony of the 400s BCE had its own temple to YHW. Where was it?",
    choices: ["Babylon", "Elephantine, an island in the Nile", "Susa", "Damascus"],
    answer: 1,
    explanation: {
      world:
        "Jewish soldiers and their families guarded Persia's southern frontier at Elephantine, near modern Aswan. Their papyri record marriages, loans and a temple of YHW (Yahu). In 410 BCE local priests of the god Khnum, backed by a Persian commander, had it destroyed. In 407 BCE the community asked Judah's governor for permission to rebuild. Another letter, of 419/418 BCE, gives instructions about the festival of Unleavened Bread.",
      theirEyes:
        "Far up the Nile, a Jewish family could swear oaths by YHW, pay taxes to Persia and live beside Egyptian neighbours who worshipped a ram-headed god.",
      debate:
        "Scholars debate how the Elephantine temple fits with the Bible's demand for a single sanctuary (Deuteronomy 12), and how traditional the colony's religion was.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Elephantine petition, TAD A4.7 (Cowley 30), 407 BCE" },
      { kind: "archaeology", citation: "Elephantine “Passover letter,” TAD A4.1 (Cowley 21), 419/418 BCE" },
      { kind: "scholarship", citation: "Bezalel Porten, Archives from Elephantine: The Life of an Ancient Jewish Military Colony (University of California Press, 1968)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian: papyri of the 5th century BCE. References left empty: the question is non-biblical; Deuteronomy 12 appears only in the debate note." },
  },
  {
    id: "dly-033",
    era: "persian",
    daily: true,
    category: "tradition",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "The festival of Purim takes its name from the word “pur.” What is a pur?",
    choices: ["A crown", "A scroll", "A lot, cast to choose a day", "A royal banquet"],
    answer: 2,
    explanation: {
      textSays:
        "Haman cast pur, that is, the lot, to choose the day for destroying the Jews (Esther 3:7). After the plot failed, the days were named Purim after it (Esther 9:24–26).",
      world: "The word matches Akkadian pūru, meaning a lot or die used in Mesopotamia.",
      theirEyes:
        "In Susa, the fate of a whole people seemed to hang on the roll of a lot, until a queen spoke up.",
      tradition: {
        jewish:
          "2 Maccabees 15:36 dates a later victory to the 13th of Adar, “the day before the day of Mordecai,” showing the festival was already known by that name. Josephus says Jews of his time still kept these days (Antiquities 11.6.13).",
      },
      debate:
        "Many scholars doubt that Esther records history and read it as a court tale set in Persia. Others defend a historical core. No copy of Esther has been identified among the Dead Sea Scrolls (Nehemiah, traditionally counted with Ezra as one book, is also missing as a separate book).",
    },
    confidence: "settled",
    references: ["Esther 3:7", "Esther 9:24–26"],
    sources: [
      scripture,
      { kind: "primary", citation: "2 Maccabees 15:36" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.6.13" },
      { kind: "reference", citation: "“Purim,” Encyclopaedia Britannica" },
      { kind: "reference", citation: "“Has Every Book of the Bible Been Found Among the Dead Sea Scrolls?”, Biblical Archaeology Society" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian: Esther is set at the Persian court in Susa." },
  },
  {
    id: "dly-034",
    era: "persian",
    daily: true,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: most scholars identify King Ahasuerus in the Book of Esther with the Persian king Xerxes I.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Esther 1:1 says Ahasuerus ruled 127 provinces from India to Ethiopia (Cush), from his capital Susa.",
      world:
        "The Hebrew name Ahashverosh matches the Persian Xšayārša, known in Greek as Xerxes. Xerxes I ruled 486–465 BCE and is famous from Herodotus for invading Greece. Ezra 4:5–7 also names an Ahasuerus after Darius and before Artaxerxes, the same order as Darius I, Xerxes I and Artaxerxes I.",
      theirEyes:
        "Courtiers in Susa served a king who claimed, in his own inscriptions, to rule many lands and peoples.",
      tradition: {
        jewish: "The Septuagint and Josephus (Antiquities 11.6.1) call Esther's king Artaxerxes instead.",
      },
    },
    confidence: "mainstream",
    references: ["Esther 1:1", "Ezra 4:5–7"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories, book 7" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.6.1" },
      { kind: "reference", citation: "“Xerxes I,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian: Persian king." },
  },
  {
    id: "dly-035",
    era: "persian",
    daily: true,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ezra 4:8–6:18 and 7:12–26 are not written in Hebrew. Which language are they in?",
    choices: ["Greek", "Old Persian", "Latin", "Aramaic"],
    answer: 3,
    explanation: {
      textSays:
        "Ezra 4:7 notes that a letter to Artaxerxes was written in Aramaic (the World English Bible translates it “Syrian”), and from 4:8 the book itself switches into Aramaic, quoting official letters and decrees. Daniel 2:4–7:28 also uses Aramaic.",
      world:
        "Aramaic was the working language of the Persian Empire's officials from Egypt to Afghanistan. A copy of Darius I's Behistun inscription in Aramaic was even found among the Elephantine papyri. Old Persian was used mainly for royal inscriptions, and Greek and Latin came to the region later.",
      theirEyes:
        "A scribe in Jerusalem writing to the king did not need Persian: Aramaic letters were read in Samaria, Babylon and Susa alike.",
    },
    confidence: "settled",
    references: ["Ezra 4:7–6:18", "Ezra 7:12–26", "Daniel 2:4"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Aramaic language,” Encyclopaedia Britannica" },
      { kind: "archaeology", citation: "Aramaic version of the Behistun inscription from Elephantine, TAD C2.1" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian: Aramaic as the Persian imperial language." },
  },

  // ───────────── Wisdom and poetry ─────────────
  {
    id: "dly-036",
    era: "united-monarchy",
    daily: true,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which psalm begins “Yahweh is my shepherd”?",
    choices: ["Psalm 1", "Psalm 23", "Psalm 51", "Psalm 150"],
    answer: 1,
    explanation: {
      textSays:
        "Psalm 23 is headed “A Psalm by David” and opens “Yahweh is my shepherd.” It moves from green pastures and still waters to a table prepared in the presence of enemies.",
      world:
        "Kings across the ancient Near East called themselves shepherds of their people; Hammurabi does so in his law code. The psalm gives the role to God.",
      theirEyes:
        "Anyone who had kept sheep knew what a rod and staff were for: guiding the flock and driving off wild animals in the dark ravines.",
      tradition: {
        christian: "Christians often read it alongside John 10:11, where Jesus calls himself “the good shepherd.”",
      },
      debate: "Whether psalm headings like “by David” record authorship or a later attribution is debated.",
    },
    confidence: "settled",
    references: ["Psalm 23", "John 10:11"],
    sources: [scripture, { kind: "primary", citation: "Code of Hammurabi, prologue (Louvre, Sb 8)" }],
    review: {
      status: "published",
      reviewedOn: "2026-11-20",
      notes:
        "Independent fact-check pass; corrections applied. Era united-monarchy because the psalm is traditionally linked to David; its composition date is uncertain.",
    },
  },
  {
    id: "dly-037",
    era: "united-monarchy",
    daily: true,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The Book of Psalms is divided into how many smaller “books,” each ending with a blessing?",
    choices: ["Five", "Three", "Seven", "Twelve"],
    answer: 0,
    explanation: {
      textSays:
        "Psalms 41, 72, 89 and 106 each close with a short blessing of God (a doxology) that includes “Amen” (41:13; 72:18–19; 89:52; 106:48). Psalm 150 closes the whole collection. That gives five books: 1–41, 42–72, 73–89, 90–106 and 107–150. In Hebrew numbering, 41:13 and 89:52 are one verse higher.",
      world:
        "The divisions show that the Psalter grew from smaller collections. Psalm 72:20 even says, “This ends the prayers by David, the son of Jesse,” though more psalms attributed to David follow (for example Psalms 86 and 101).",
      theirEyes:
        "Temple singers did not have a single “hymnbook” at first, but several song collections that were gradually gathered together.",
      tradition: {
        shared:
          "Hippolytus (early 3rd century CE) wrote that the Hebrews divided the Psalter into five books so that it might be another Pentateuch, the five books of Moses. Later rabbinic tradition makes the same comparison.",
      },
    },
    confidence: "settled",
    references: ["Psalm 41:13", "Psalm 72:18–20", "Psalm 89:52", "Psalm 106:48"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Psalms,” Encyclopaedia Britannica" },
      { kind: "primary", citation: "Hippolytus, Fragments on the Psalms (Ante-Nicene Fathers, vol. 5)" },
    ],
    review: {
      status: "published",
      reviewedOn: "2026-11-20",
      notes:
        "Independent fact-check pass; corrections applied. Era united-monarchy as the Psalter is traditionally linked to David; the five-book arrangement was completed much later.",
    },
  },
  {
    id: "dly-038",
    era: "united-monarchy",
    daily: true,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Septuagint and the Great Psalms Scroll from Qumran include an extra Psalm 151. What is it about?",
    choices: [
      "The fall of Jerusalem to Babylon",
      "Young David the shepherd, chosen over his brothers",
      "Moses at the burning bush",
      "Solomon dedicating the Temple",
    ],
    answer: 1,
    explanation: {
      world:
        "Psalm 151 has David speak as the youngest son who tended his father's sheep, made music, was anointed instead of his older brothers and faced the Philistine giant. The Greek Septuagint calls it a psalm “outside the number.” The Great Psalms Scroll (11QPsa), found in Qumran Cave 11 in 1956 and unrolled in 1961, revealed Hebrew forms of it (usually labelled 151A and 151B). The scroll also arranges psalms in a different order from the standard Hebrew Psalter.",
      theirEyes:
        "For Jews of the late Second Temple period, the Psalms were still a living collection: different scrolls held different songs in different orders.",
      tradition: {
        christian: "Psalm 151 is part of the Psalter in Eastern Orthodox Bibles, but not in Catholic or Protestant ones.",
      },
      debate: "Scholars debate whether 11QPsa is a variant edition of the biblical Psalter or a liturgical collection drawn from it.",
    },
    confidence: "settled",
    references: ["1 Samuel 16:11–13", "1 Samuel 17"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Great Psalms Scroll, 11QPsa (11Q5), Qumran Cave 11, copied c. 30–50 CE; acquired by the Palestine Archaeological Museum (Rockefeller Museum), Jerusalem" },
      { kind: "scholarship", citation: "J. A. Sanders, The Psalms Scroll of Qumrân Cave 11, DJD IV (Oxford, 1965)" },
      { kind: "primary", citation: "Septuagint, Psalm 151" },
    ],
    review: {
      status: "published",
      reviewedOn: "2026-11-20",
      notes: "Independent fact-check pass; corrections applied. Era united-monarchy because Psalm 151 is set in David's youth; the text itself is much later.",
    },
  },
  {
    id: "dly-039",
    era: "united-monarchy",
    daily: true,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The section of Proverbs headed “the words of the wise” (22:17–24:22) contains close parallels to a wisdom text from which neighbouring culture?",
    choices: ["Greece", "Egypt", "Rome", "Philistia"],
    answer: 1,
    explanation: {
      textSays:
        "Proverbs 22:17 begins a new section: “Turn your ear, and listen to the words of the wise.” Its advice, such as “Don’t move the ancient boundary stone” (22:28) and that riches sprout wings like an eagle and fly away (23:5), echoes an Egyptian text.",
      world:
        "The Instruction of Amenemope, an Egyptian teaching in thirty chapters, has close parallels to this section, concentrated in 22:17–23:11. The Egyptologist Adolf Erman pointed them out in 1924. Proverbs 22:20 speaks of “thirty excellent things,” which many scholars link to Amenemope's thirty chapters.",
      theirEyes:
        "Scribes in Jerusalem and Egypt were trained in a shared international wisdom tradition, and good advice crossed borders.",
      debate:
        "Most scholars think Proverbs adapted Amenemope, probably through an intermediate version; a few argue for a common source. The date of Amenemope is debated too.",
    },
    confidence: "settled",
    references: ["Proverbs 22:17–24:22", "Proverbs 22:20", "Proverbs 22:28", "Proverbs 23:5"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Instruction of Amenemope, papyrus, British Museum EA 10474" },
      { kind: "scholarship", citation: "Michael V. Fox, Proverbs 10–31, Anchor Yale Bible (2009), excursus on Amenemope" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era united-monarchy because Proverbs is traditionally attributed to Solomon (Proverbs 1:1)." },
  },
  {
    id: "dly-040",
    era: "divided-kingdom",
    daily: true,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Book of Proverbs says some of Solomon's proverbs were copied out by the men of King Hezekiah.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Proverbs 25:1 introduces chapters 25–29 as more proverbs of Solomon, copied out by the men of Hezekiah king of Judah. Other sections are credited to “the wise,” to Agur (30:1) and to King Lemuel's mother (31:1).",
      world:
        "Hezekiah ruled Judah around 715–686 BCE, more than two centuries after Solomon. Scholars see this note as evidence of royal scribes collecting and editing wisdom at court, and the book as a collection gathered over a long period.",
      theirEyes:
        "Picture court scribes in Hezekiah's Jerusalem carefully copying old sayings onto fresh scrolls, as Assyria threatened the kingdom.",
    },
    confidence: "settled",
    references: ["Proverbs 25:1", "Proverbs 30:1", "Proverbs 31:1"],
    sources: [scripture, { kind: "reference", citation: "“Proverbs,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era divided-kingdom because the question is about Hezekiah's scribes, not Solomon." },
  },
  {
    id: "dly-041",
    era: "persian",
    daily: true,
    category: "neighbours",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In which land does the Book of Job say Job lived?",
    choices: ["Egypt", "Ur", "Uz", "Babylon"],
    answer: 2,
    explanation: {
      textSays:
        "Job 1:1 places him in the land of Uz. Job is not presented as an Israelite, and his friends come from Teman, Shuah and Naamah (Job 2:11). Lamentations 4:21 links Uz with Edom.",
      world:
        "Uz has not been located with certainty, but most scholars place it east or south-east of Israel, toward Edom or northern Arabia.",
      theirEyes:
        "Job's world is one of herds, tents and camel caravans in the eastern steppe, far from Jerusalem's Temple.",
      tradition: {
        jewish:
          "An appendix in the Septuagint (Job 42:17) identifies Job with Jobab, an early king of Edom (Genesis 36:33), and places Uz on the borders of Idumea and Arabia.",
      },
      debate:
        "When Job was written is debated. Many scholars date it to roughly the 6th–4th centuries BCE, while its story has an older, patriarchal setting.",
    },
    confidence: "settled",
    references: ["Job 1:1", "Job 2:11", "Lamentations 4:21", "Genesis 36:33"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Job 42:17 (appendix)" },
      { kind: "reference", citation: "“Job,” Encyclopaedia Britannica" },
    ],
    review: {
      status: "published",
      reviewedOn: "2026-11-20",
      notes:
        "Independent fact-check pass; corrections applied. Era persian: the book's setting is undated and non-Israelite, so 'patriarchs' would wrongly imply a date; Persian is a common (but debated) dating of its composition, as explained in the debate field.",
    },
  },
  {
    id: "dly-042",
    era: "united-monarchy",
    daily: true,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Ecclesiastes' speaker calls himself Qohelet. What does that Hebrew title most likely mean?",
    choices: [
      "One who gathers or speaks to an assembly",
      "The king's treasurer",
      "The weeping prophet",
      "Keeper of the vineyard",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Ecclesiastes 1:1 opens: “The words of the Preacher, the son of David, king in Jerusalem:” and 1:2 continues: “Vanity of vanities,” says the Preacher. “Preacher” translates Qohelet.",
      world:
        "Qohelet comes from the Hebrew root q-h-l, “assembly.” The Greek title Ekklesiastes comes from ekklesia, also meaning “assembly,” the word later used for “church.”",
      theirEyes:
        "Imagine an old teacher before a crowd, asking what anyone gains from all their work under the sun.",
      debate:
        "The book hints at Solomon but never names him. Most scholars date its Hebrew to the Persian or early Hellenistic period, partly because of Persian loanwords such as pardes, “park” (2:5).",
    },
    confidence: "mainstream",
    references: ["Ecclesiastes 1:1–2", "Ecclesiastes 2:5"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Ecclesiastes,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "C. L. Seow, Ecclesiastes, Anchor Yale Bible 18C (1997), introduction" },
    ],
    review: {
      status: "published",
      reviewedOn: "2026-11-20",
      notes:
        "Independent fact-check pass; corrections applied. Era united-monarchy because the book is traditionally linked to Solomon (“son of David, king in Jerusalem”); the debate field gives the mainstream later dating.",
    },
  },
  {
    id: "dly-043",
    era: "united-monarchy",
    daily: true,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "What is the Song of Songs mostly made up of?",
    choices: [
      "Laws for priests",
      "Lists of kings and battles",
      "Love poems between a woman and a man",
      "Prophecies against foreign nations",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Song of Songs 1:1 heads it “The Song of songs, which is Solomon’s,” traditionally read as naming him the author. The book is a series of love poems, with a woman and a man speaking in turn and a chorus called the daughters of Jerusalem. It is full of gardens, vineyards, spices and animals.",
      world:
        "Egyptian love songs from the New Kingdom use similar imagery, such as calling the beloved “sister” (compare Song 4:9).",
      theirEyes:
        "Its images came from the life everyone knew: blossoming vines in spring, flocks of goats on the hills, and the scent of perfumes in the market.",
      tradition: {
        christian:
          "Origen's Commentary on the Song of Songs (3rd century) read it as a picture of Christ and the Church, or of God and the soul.",
      },
    },
    confidence: "settled",
    references: ["Song of Songs 1:1", "Song of Songs 4:9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Origen, Commentary on the Song of Songs, prologue" },
      { kind: "scholarship", citation: "Michael V. Fox, The Song of Songs and the Ancient Egyptian Love Songs (University of Wisconsin Press, 1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era united-monarchy because the Song is attributed to Solomon (1:1); date of composition is debated." },
  },

  // ───────────── Prophets ─────────────
  {
    id: "dly-044",
    era: "divided-kingdom",
    daily: true,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Micah 6:8 sums up what God requires. Which of these is NOT on Micah's list?",
    choices: ["To act justly", "To love mercy", "To walk humbly with your God", "To offer thousands of rams"],
    answer: 3,
    explanation: {
      textSays:
        "Micah 6:8: “He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?” Just before, Micah asks whether God would be pleased with thousands of rams (6:6–7).",
      world:
        "Micah prophesied in the days of Jotham, Ahaz and Hezekiah of Judah (Micah 1:1), in the 8th century BCE. A century later, Jeremiah 26:18 quotes Micah's warning about Jerusalem.",
      theirEyes:
        "To a village farmer losing his fields to powerful landowners (Micah 2:2), Micah's words put justice above expensive sacrifices.",
    },
    confidence: "settled",
    references: ["Micah 6:6–8", "Micah 1:1", "Micah 2:2", "Jeremiah 26:18"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era divided-kingdom per Micah 1:1. Micah 6:8 quote checked against WEB." },
  },
  {
    id: "dly-045",
    era: "persian",
    daily: true,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "On Pentecost in Acts 2, Peter quotes which prophet's promise that God will pour out his Spirit on all flesh?",
    choices: ["Jonah", "Joel", "Nahum", "Obadiah"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 2:16–21 quotes Joel 2:28–32: God will pour out his Spirit, and sons and daughters will prophesy. In Hebrew Bibles this passage is Joel 3:1–5, because Hebrew Joel has four chapters.",
      world:
        "Joel names no king and gives no date. Many scholars place it after the exile, in the Persian period, because the Temple is functioning, there is no king, and Greeks are mentioned as slave traders (Joel 3:6; Hebrew 4:6).",
      theirEyes:
        "Joel's first audience had just seen locusts strip their fields bare, and his promise of the Spirit followed a call to fasting and repentance.",
      tradition: {
        christian: "Christians see Pentecost as the fulfilment of Joel's promise and the birth of the Church.",
      },
      debate: "Some scholars date Joel earlier, in the monarchy; there is no consensus.",
    },
    confidence: "settled",
    references: ["Acts 2:16–21", "Joel 2:28–32", "Joel 3:6"],
    sources: [scripture, { kind: "reference", citation: "“Joel,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian reflects the common but debated post-exilic dating of Joel, explained in world/debate." },
  },
  {
    id: "dly-046",
    era: "divided-kingdom",
    daily: true,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Paul quotes, and a Dead Sea Scroll commentary interprets, a prophet's saying that the righteous will live by faith. Which prophet?",
    choices: ["Haggai", "Malachi", "Habakkuk", "Zephaniah"],
    answer: 2,
    explanation: {
      textSays:
        "Habakkuk 2:4 says “the righteous will live by his faith”; the Hebrew emunah can also mean faithfulness. Habakkuk wrote as the Chaldeans (Babylonians) were rising (1:6).",
      world:
        "The Habakkuk Commentary (Pesher Habakkuk, 1QpHab), found in Qumran Cave 1 in 1947, applies the verse to those who keep the Law in the house of Judah, whom God will rescue because of their suffering and their faith in the Teacher of Righteousness (columns 7–8).",
      theirEyes:
        "For the Qumran community, an old prophecy read like a message about their own leader and their own enemies.",
      tradition: {
        christian:
          "Paul uses the verse for faith in Christ (Romans 1:17; Galatians 3:11), as does the Letter to the Hebrews (10:38), and it became central to Martin Luther and the Reformation.",
      },
    },
    confidence: "settled",
    references: ["Habakkuk 1:6", "Habakkuk 2:4", "Romans 1:17", "Galatians 3:11", "Hebrews 10:38"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Pesher Habakkuk (1QpHab), cols. 7–8 (on Habakkuk 2:4), Qumran Cave 1; Shrine of the Book, Israel Museum" },
      { kind: "reference", citation: "“Habakkuk,” Encyclopaedia Britannica" },
    ],
    review: {
      status: "published",
      reviewedOn: "2026-11-20",
      notes:
        "Independent fact-check pass; corrections applied. Era divided-kingdom: Habakkuk is set in the late 7th century BCE (Chaldeans rising). Habakkuk 2:4 quote checked against WEB.",
    },
  },
  {
    id: "dly-047",
    era: "persian",
    daily: true,
    category: "tradition",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In most English Bibles today, which book comes last in the Old Testament?",
    choices: ["Malachi", "Chronicles", "Psalms", "Revelation"],
    answer: 0,
    explanation: {
      textSays:
        "Malachi ends with a promise that God will send Elijah the prophet before the great day of Yahweh (Malachi 4:5–6; in Hebrew Bibles 3:23–24).",
      world:
        "Malachi is usually dated to the Persian period, after the Second Temple was rebuilt, since it criticises careless sacrifices there. Its name means “my messenger” (compare 3:1). Revelation is the last book of the New Testament. Malachi is last in Protestant and most modern Catholic Old Testaments. Orders differ elsewhere: some older Catholic Bibles, such as the Douay-Rheims, place 1–2 Maccabees after Malachi; Orthodox Bibles that follow the Septuagint put the Twelve Prophets before Isaiah; and Jewish Bibles (Tanakh) end with Chronicles.",
      theirEyes:
        "Priests offering blind, lame and sick animals were challenged to try giving such gifts to their governor, the Persian-appointed official (Malachi 1:8).",
      tradition: {
        christian:
          "Ending the Old Testament with Elijah's return leads straight into the Gospels, which link John the Baptist with Elijah (Matthew 11:14; Luke 1:17).",
      },
    },
    confidence: "settled",
    references: ["Malachi 1:8", "Malachi 3:1", "Malachi 4:5–6", "Matthew 11:14", "Luke 1:17"],
    sources: [scripture, { kind: "reference", citation: "“Malachi,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian: Malachi is usually dated to the Persian period." },
  },
  {
    id: "dly-048",
    era: "hellenistic",
    daily: true,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: in the Jewish order of the Hebrew Bible (Tanakh), the last book is Malachi, as in most Christian Old Testaments.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Luke 24:44 speaks of the law of Moses, the prophets and the psalms, a three-part shape.",
      world:
        "Tanakh is an acronym for Torah (Law), Nevi'im (Prophets) and Ketuvim (Writings). Malachi sits among the Prophets, and the Writings come after it. Most printed Hebrew Bibles end with Chronicles; some medieval manuscripts, such as the Leningrad Codex (1008/1009 CE), end with Ezra–Nehemiah. Christian Old Testaments follow a different order inherited from Greek Bibles.",
      theirEyes:
        "A Jewish scroll collection had no single “binding,” but scribes and teachers grouped the books into Law, Prophets and other writings.",
      tradition: {
        jewish:
          "The prologue to Ben Sira (c. 132 BCE) mentions the Law, the Prophets and the other books, early evidence for the three-part division.",
      },
    },
    confidence: "settled",
    references: ["Luke 24:44"],
    sources: [
      scripture,
      { kind: "primary", citation: "Sirach (Ben Sira), Prologue" },
      { kind: "archaeology", citation: "Leningrad Codex (Firkovich B 19 A), National Library of Russia, St Petersburg" },
      { kind: "reference", citation: "“Biblical literature: The Hebrew canon,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era hellenistic because the evidence cited (Ben Sira prologue) is Hellenistic; the question is about canon order, not one era." },
  },
  {
    id: "dly-049",
    era: "persian",
    daily: true,
    category: "tradition",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Matthew and John link Jesus riding into Jerusalem on a donkey with a prophecy of Zechariah.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Zechariah 9:9: “Rejoice greatly, daughter of Zion! Shout, daughter of Jerusalem! Behold, your King comes to you!” He comes lowly and riding on a donkey. Matthew 21:4–5 and John 12:14–15 quote this passage.",
      world:
        "Zechariah prophesied from the second year of Darius I, 520 BCE (Zechariah 1:1), alongside Haggai. Many scholars think chapters 9–14 were added later, possibly in the late Persian or early Hellenistic period.",
      theirEyes:
        "A king on a donkey rather than a war horse was a picture of peace: the next verse promises to cut off the chariot and the battle bow (9:10).",
      tradition: {
        christian: "Christians remember the entry on Palm Sunday as Jesus presenting himself as a humble king.",
      },
    },
    confidence: "settled",
    references: ["Zechariah 1:1", "Zechariah 9:9–10", "Matthew 21:4–5", "John 12:14–15"],
    sources: [scripture, { kind: "reference", citation: "“Zechariah,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied. Era persian per Zechariah 1:1; date of chapters 9–14 noted as debated." },
  },
  {
    id: "dly-050",
    era: "hellenistic",
    daily: true,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "How were the twelve “minor prophets,” Hosea to Malachi, usually copied in ancient Jewish scrolls?",
    choices: [
      "As part of the Torah scroll",
      "Together on one scroll, called “the Twelve”",
      "As an appendix to the Psalms",
      "As twelve scrolls that were never grouped",
    ],
    answer: 1,
    explanation: {
      world:
        "Ancient scrolls copied all twelve books together. Examples from the Judean Desert include a Hebrew scroll of the Twelve from Wadi Murabba'at (Mur 88), found in 1955, and the Greek Minor Prophets scroll from Naḥal Ḥever (8ḤevXIIgr), usually dated between about 50 BCE and the 1st century CE. The name “minor” refers to their short length, not their importance.",
      theirEyes:
        "One scroll of short prophets was handy: a synagogue or a scribe could keep twelve voices, from Hosea to Malachi, on a single roll.",
      tradition: {
        jewish: "Around 180 BCE, Ben Sira already praises “the twelve prophets” together as one group (Sirach 49:10).",
        christian: "Augustine explains that they are called “minor” because their writings are short (City of God 18.29).",
      },
    },
    confidence: "settled",
    references: ["Sirach 49:10"],
    sources: [
      scripture,
      { kind: "primary", citation: "Sirach (Ben Sira) 49:10" },
      { kind: "archaeology", citation: "Minor Prophets scroll, Wadi Murabba'at (Mur 88), DJD II (1961)" },
      { kind: "archaeology", citation: "Greek Minor Prophets scroll, Naḥal Ḥever (8ḤevXIIgr), DJD VIII (1990)" },
      { kind: "primary", citation: "Augustine, City of God 18.29" },
    ],
    review: {
      status: "published",
      reviewedOn: "2026-11-20",
      notes:
        "Independent fact-check pass; corrections applied. Era hellenistic because the earliest evidence for 'the Twelve' as a unit is Ben Sira. Sirach 49:10 phrase checked against WEB (deuterocanon). Mur 88 left undated in the text because a firm date could not be confirmed.",
    },
  },
];
