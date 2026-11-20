import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const hellenistic: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "hel-001",
    era: "hellenistic",
    level: 1,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which Macedonian king's conquests brought Judea under Greek rule in 332 BCE?",
    choices: ["Nebuchadnezzar", "Cyrus the Great", "Alexander the Great", "Julius Caesar"],
    answer: 2,
    explanation: {
      textSays:
        "1 Maccabees opens with Alexander the Macedonian, son of Philip, defeating Darius, king of the Persians and Medes, and then dying after a twelve-year reign (1 Maccabees 1:1–7).",
      world:
        "Alexander took the coast of the Levant in 332 BCE, besieging Tyre and Gaza on his way to Egypt. Judea passed from Persian to Greek rule without a recorded battle, and Greek language and culture spread across the region for the next three centuries.",
      theirEyes:
        "For a farmer near Jerusalem, the empire changed overnight: the Persian governor was gone, and the new masters spoke Greek.",
      tradition: {
        jewish:
          "Josephus tells a story that Alexander came to Jerusalem and bowed before the high priest (Antiquities 11.8.4–5). Most historians regard it as a legend.",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 1:1–7"],
    sources: [
      scripture,
      { kind: "primary", citation: "Arrian, Anabasis of Alexander 2.15–27 (sieges of Tyre and Gaza)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.8.4–5" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-002",
    era: "hellenistic",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which Seleucid king banned Jewish practices and had the Jerusalem Temple defiled in 167 BCE?",
    choices: ["Alexander the Great", "Antiochus IV Epiphanes", "Ptolemy II Philadelphus", "Pompey the Great"],
    answer: 1,
    explanation: {
      textSays:
        "1 Maccabees 1:41–50 says the king ordered everyone to give up their own laws: burnt offerings, Sabbaths, feasts and circumcision were forbidden. Then, “On the fifteenth day of Chislev,” his men set up “an abomination of desolation upon the altar” (1 Maccabees 1:54).",
      world:
        "Antiochus IV ruled the Seleucid Empire from 175 to 164 BCE. Why he turned on Jewish worship is debated: a civil war among Jerusalem's priestly factions and his own humiliation by Rome in Egypt in 168 BCE are both part of the story.",
      theirEyes:
        "Jews in Jerusalem now faced a terrible choice: obey the king's orders or keep the Law of their ancestors and risk death.",
    },
    confidence: "settled",
    references: ["1 Maccabees 1:10", "1 Maccabees 1:41–54", "2 Maccabees 6:1–2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.5.4" },
      { kind: "scholarship", citation: "Elias Bickerman, The God of the Maccabees (1937; English trans. 1979)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-003",
    era: "hellenistic",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "For how many days did the Maccabees celebrate the rededication of the Temple altar?",
    choices: ["One", "Three", "Seven", "Eight"],
    answer: 3,
    explanation: {
      textSays:
        "1 Maccabees 4:56: “They celebrated the dedication of the altar eight days, and offered burnt offerings with gladness, and sacrificed a sacrifice of deliverance and praise.” Judah and the people then decreed that the days be kept every year from the 25th of Chislev (4:59). John 10:22 mentions “the Feast of the Dedication at Jerusalem.”",
      world:
        "The rededication took place in December 164 BCE. Hanukkah means “dedication.” The familiar story of one jar of oil lasting eight days is not in 1–2 Maccabees or Josephus. It is a later rabbinic tradition, best known from the Babylonian Talmud (Shabbat 21b), compiled centuries after the events.",
      theirEyes:
        "Three years after the altar was defiled (1 Maccabees 1:54; 4:52–54), the Temple courts filled again with music, sacrifices and lamps.",
      tradition: {
        jewish: "Josephus says Jews of his day still kept the festival and called it “Lights” (Antiquities 12.7.7).",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 4:52–59", "2 Maccabees 10:5–8", "John 10:22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.7.6–7" },
      { kind: "primary", citation: "Babylonian Talmud, Shabbat 21b (later source for the oil story)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-004",
    era: "hellenistic",
    level: 1,
    category: "tradition",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "The Septuagint is a translation of the Hebrew scriptures into which language?",
    choices: ["Latin", "Greek", "Aramaic", "Coptic"],
    answer: 1,
    explanation: {
      world:
        "The Torah was translated into Greek in Egypt, probably in the 3rd century BCE; the other books followed over the next two centuries. Greek had become the everyday language of Jews in Alexandria and across the Mediterranean. The name comes from the Latin septuaginta, “seventy,” after a legend about the translators.",
      theirEyes:
        "A Jewish family in Alexandria might speak no Hebrew at all, but on the Sabbath they could now hear the Law read in Greek.",
      tradition: {
        jewish: "Philo of Alexandria (1st century CE) used the Greek text and praised its translators as inspired (Life of Moses 2.37–40).",
        christian:
          "Many Old Testament quotations in the New Testament follow the Septuagint or a Greek text close to it, and it remains the Old Testament of the Greek Orthodox Church.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Philo, On the Life of Moses 2.25–44" },
      { kind: "scholarship", citation: "Jennifer M. Dines, The Septuagint (T&T Clark, 2004)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-005",
    era: "hellenistic",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Judah, leader of the revolt against Antiochus IV, was nicknamed “Maccabee.” What is the most common explanation of the name?",
    choices: ["Torch", "Hammer", "Shepherd", "Priest"],
    answer: 1,
    explanation: {
      textSays:
        "1 Maccabees 2:4 lists Judas, called Maccabaeus, among Mattathias' five sons, and envoys to Rome speak on behalf of “Judas, who is also called Maccabaeus” (1 Maccabees 8:20).",
      world:
        "Most scholars connect the name with the Hebrew maqqevet, “hammer” (the word used for Jael's hammer in Judges 4:21), perhaps for his hammer-blows against Seleucid armies. The name later stuck to his whole family and to the books about them.",
      theirEyes:
        "To villagers who saw small guerrilla bands beat royal armies, “the Hammer” was a nickname well earned.",
      debate:
        "The books never explain the nickname. Other suggestions include a reference to the shape of his head or a word meaning “designated,” but none has won wide support.",
    },
    confidence: "mainstream",
    references: ["1 Maccabees 2:4", "1 Maccabees 8:20", "Judges 4:21"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Maccabees,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "Jonathan A. Goldstein, I Maccabees (Anchor Bible 41, 1976), commentary on 2:4" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "hel-006",
    era: "hellenistic",
    level: 2,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In which town did the priest Mattathias refuse the king's order to sacrifice, sparking the Maccabean revolt?",
    choices: ["Bethlehem", "Jericho", "Masada", "Modein"],
    answer: 3,
    explanation: {
      textSays:
        "1 Maccabees 2 says Mattathias, a priest, lived at Modein (Modin). When the king's officers came to make the town sacrifice, he refused, killed a Jew who stepped forward to obey and the king's officer, and fled to the hills with his sons (2:15–28).",
      world:
        "Modein lay in the foothills west of Jerusalem, near today's city of Modi'in. 1 Maccabees 13:25–30 says Simon later built a family monument there, with carved ships “so that they could be seen by all who sail on the sea” (13:29).",
      theirEyes: "A small hill town suddenly became the place where a village priest said no to an empire.",
      tradition: {
        jewish:
          "Josephus retells the story, naming Mattathias as one “who dwelt at Modin, the son of John, the son of Simeon, the son of Asamoneus” (Antiquities 12.6.1–2).",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 2:1–28", "1 Maccabees 13:25–30"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.6.1–2 (Whiston)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-007",
    era: "hellenistic",
    level: 2,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "After Alexander the Great died, which two Greek dynasties fought over Judea?",
    choices: ["The Romans and the Parthians", "The Ptolemies and the Seleucids", "The Assyrians and the Babylonians", "The Persians and the Medes"],
    answer: 1,
    explanation: {
      textSays: "1 Maccabees 1:8–9 says Alexander's officers took over his kingdom and their sons ruled after them.",
      world:
        "The Ptolemies ruled from Egypt and the Seleucids from Syria. Judea belonged to the Ptolemies for about a century, until Antiochus III defeated them at Panium around 200 BCE and Judea passed to the Seleucids.",
      theirEyes:
        "Caught between two superpowers, Judea's people watched armies march through their land again and again in the “Syrian Wars.”",
      tradition: {
        shared:
          "Daniel 11 describes a long struggle between a “king of the south” and a “king of the north.” Interpreters from Jerome to modern scholars identify them with the Ptolemies and Seleucids.",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 1:8–9", "Daniel 11"],
    sources: [
      scripture,
      { kind: "primary", citation: "Polybius, Histories 16.18–19 (battle of Panium)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.3.3" },
      { kind: "primary", citation: "Jerome, Commentary on Daniel, ch. 11" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-008",
    era: "hellenistic",
    level: 2,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 2 Maccabees 4, what Greek institution did the high priest Jason set up in Jerusalem?",
    choices: ["A synagogue", "A gymnasium", "A lighthouse", "A library"],
    answer: 1,
    explanation: {
      textSays:
        "2 Maccabees 4:12: “he eagerly established a gymnasium under the citadel itself” and “caused the noblest of the young men to wear the Greek hat.” The writer complains “that the priests had no more any zeal for the services of the altar” (4:14). 1 Maccabees 1:14 also mentions “a gymnasium in Jerusalem.”",
      world:
        "Across the Greek world, the gymnasium trained young citizens in athletics and Greek culture; athletes exercised naked. Jason bought the high priesthood from Antiochus IV around 175 BCE.",
      theirEyes:
        "Some young priests hurried from the altar to watch the discus throwing, while their elders were scandalised.",
    },
    confidence: "settled",
    references: ["2 Maccabees 4:7–15", "1 Maccabees 1:14"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Erich S. Gruen, Heritage and Hellenism (University of California Press, 1998), ch. 1" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-009",
    era: "hellenistic",
    level: 2,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which Egyptian city, founded by Alexander, had so many Jews that two of its five districts were called Jewish?",
    choices: ["Memphis", "Thebes", "Alexandria", "Elephantine"],
    answer: 2,
    explanation: {
      world:
        "Alexandria was founded in 331 BCE and became home to one of the largest Jewish communities outside Judea. Philo, an Alexandrian Jew, writes that the city had five districts named after the first five letters of the alphabet, and two were called Jewish (Against Flaccus 55). Josephus says the city's rulers gave Jews a quarter of their own (Jewish War 2.18.7).",
      theirEyes:
        "Walking through Alexandria, a Jew could hear Greek in the market, see the great lighthouse, and still find synagogues in every district.",
      tradition: {
        jewish:
          "This Greek-speaking community produced the Septuagint, the Letter of Aristeas and Philo's writings, all of which read the Torah in Greek.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Philo, Against Flaccus 55" },
      { kind: "primary", citation: "Josephus, Jewish War 2.18.7 (2.487–488)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-010",
    era: "hellenistic",
    level: 2,
    category: "faith-practice",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: in 2 Maccabees 7, a martyred brother says God will raise up those who die for his laws.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "2 Maccabees 7 tells of a mother and seven brothers put to death for refusing to eat pork. The second brother says, “but the King of the world will raise us who have died for his laws up to an everlasting renewal of life” (7:9).",
      world:
        "This is one of the clearest statements of hope in bodily resurrection in Jewish writing before the New Testament, alongside Daniel 12:2.",
      theirEyes:
        "For families who lost sons in the persecution, this story said death was not the end of loyalty to God.",
      tradition: {
        christian:
          "Hebrews 11:35, which speaks of people tortured who refused release in hope of a better resurrection, is often read as alluding to these martyrs. Catholic and Orthodox churches honour them as the Holy Maccabean Martyrs.",
      },
    },
    confidence: "settled",
    references: ["2 Maccabees 7:1–42", "Daniel 12:2", "Hebrews 11:35"],
    sources: [scripture, { kind: "primary", citation: "4 Maccabees 8–18 (later retelling of the martyrdoms, probably 1st century CE)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "hel-011",
    era: "hellenistic",
    level: 3,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "1 Maccabees describes what the king's men set up on the Temple altar with what phrase, which echoes Daniel and is used in the Gospels?",
    choices: ["The tower of Babel", "The abomination of desolation", "The golden calf", "The high place of Baal"],
    answer: 1,
    explanation: {
      textSays:
        "1 Maccabees 1:54 says they built “an abomination of desolation upon the altar.” Daniel speaks of “the abomination that makes desolate” (Daniel 11:31; 12:11), and in Mark 13:14 and Matthew 24:15 Jesus speaks of “the abomination of desolation,” “spoken of by Daniel the prophet” (Mark 13:14).",
      world:
        "The altar was set up in December 167 BCE. Many scholars think the Hebrew phrase is a mocking pun on Baal Shamem, “Lord of Heaven,” the Semitic name of the god the Greeks called Olympian Zeus, to whom 2 Maccabees 6:2 says the Temple was rededicated.",
      theirEyes:
        "Worshippers who came up to the Temple found a foreign altar standing on top of the altar of God.",
      tradition: {
        christian:
          "Christian readers have understood Jesus' warning as pointing beyond Antiochus: many link it with the Roman destruction of the Temple in 70 CE, others with events still to come.",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 1:54", "Daniel 11:31", "Daniel 12:11", "Mark 13:14", "Matthew 24:15", "2 Maccabees 6:2"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "John J. Collins, Daniel (Hermeneia, Fortress, 1993), on Daniel 11:31" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-012",
    era: "hellenistic",
    level: 3,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to the Letter of Aristeas, how many Jewish elders translated the Torah into Greek?",
    choices: ["7", "12", "40", "72"],
    answer: 3,
    explanation: {
      world:
        "The Letter of Aristeas says King Ptolemy II of Egypt wanted the Jewish Law for his library in Alexandria. The king asked for six elders from each of the twelve tribes (32), 72 in all, and they finished the work in 72 days (307). The rounded number “seventy” gave the Septuagint its name.",
      theirEyes:
        "For Alexandrian Jews, the story was a proud one: their Greek Bible had been commissioned by a king and approved by Jerusalem.",
      tradition: {
        jewish: "Josephus retells the story at length (Antiquities 12.2), and Philo adds that the translators all produced the same words, as if inspired (Life of Moses 2.37).",
      },
      debate:
        "Most scholars see the letter as a Jewish work of the 2nd century BCE that tells a legend rather than a historical record, though the translation of the Torah in 3rd-century Egypt is real.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Letter of Aristeas 32; 307" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.2.1–15" },
      { kind: "primary", citation: "Philo, On the Life of Moses 2.37" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-013",
    era: "hellenistic",
    level: 3,
    category: "tradition",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: the books of Tobit and Judith are in Catholic and Orthodox Bibles but not in the Jewish Bible.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "Tobit and Judith were written by Jews, Tobit probably in the 3rd or early 2nd century BCE and Judith in the 2nd or early 1st century BCE. They survived mainly in the Greek Septuagint. Catholic and Orthodox churches include them in the Old Testament (Catholics call them “deuterocanonical”). They are not in the Hebrew Bible, and most Protestant Bibles leave them out or print them in a separate Apocrypha section.",
      theirEyes:
        "A Jewish family of the time might hear Tobit's tale of a faithful household, an angel guide and a long journey as a lesson in honouring parents and burying the dead.",
      tradition: {
        shared:
          "Fragments of Tobit in Aramaic and Hebrew were found among the Dead Sea Scrolls (4Q196–200), showing the book was read in Judea itself.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Council of Trent, Session 4, Decree on the Canonical Scriptures (1546)" },
      { kind: "archaeology", citation: "Dead Sea Scrolls, 4Q196–200 (Tobit fragments)" },
      { kind: "scholarship", citation: "Joseph A. Fitzmyer, Tobit (Commentaries on Early Jewish Literature, De Gruyter, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-014",
    era: "hellenistic",
    level: 3,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to its prologue, who translated the Wisdom of Ben Sira (Sirach) from Hebrew into Greek?",
    choices: ["The author's grandson", "Philo of Alexandria", "Judah Maccabee", "King Ptolemy II's librarian"],
    answer: 0,
    explanation: {
      world:
        "The prologue says the translator was Jesus ben Sira's grandson, who came to Egypt in the 38th year of King Euergetes (Ptolemy VIII), about 132 BCE. Ben Sira himself taught in Jerusalem around 190–180 BCE. For centuries the Hebrew was lost; large parts turned up in the Cairo Genizah from 1896, and a scroll was excavated at Masada in 1964.",
      theirEyes:
        "The grandson admits in his prologue that things said in Hebrew don't have the same force when translated — a translator's worry still familiar today.",
      tradition: {
        shared:
          "Sirach is in Catholic and Orthodox Bibles but not in the Jewish or Protestant canon.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Sirach, Prologue" },
      { kind: "archaeology", citation: "Masada Ben Sira scroll — Yigael Yadin, The Ben Sira Scroll from Masada (1965)" },
      { kind: "archaeology", citation: "Cairo Genizah Ben Sira manuscripts (Cambridge University Library, Taylor-Schechter Collection)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-015",
    era: "hellenistic",
    level: 3,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: when Pompey captured Jerusalem in 63 BCE, he carried off the Temple's gold and sacred money.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "Pompey was called in to settle a civil war between two Hasmonean brothers. Josephus says he went into the sanctuary, where only the high priest could enter, and saw the golden table and lampstand and much sacred money, but touched none of it (Antiquities 14.4.4). Cicero also says Pompey took nothing from the Temple. Tacitus notes he found the innermost shrine empty, with no image of a god. The Temple was looted later, by the Roman general Crassus in 54 BCE (Antiquities 14.7.1).",
      theirEyes:
        "Priests who watched a Roman general walk into the holiest place on earth never forgot it, even though he carried nothing out.",
      tradition: {
        jewish:
          "Josephus calls this intrusion one of the worst calamities of the siege. The Psalms of Solomon (1st century BCE) lament a foreign conqueror defiling Jerusalem.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.4.4; 14.7.1; Jewish War 1.7.6" },
      { kind: "primary", citation: "Cicero, Pro Flacco 67" },
      { kind: "primary", citation: "Tacitus, Histories 5.9" },
      { kind: "primary", citation: "Psalms of Solomon 2; 8" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 4 ─────────────
  {
    id: "hel-016",
    era: "hellenistic",
    level: 4,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Josephus says the Hasmonean ruler John Hyrcanus conquered which neighbouring people and made them adopt circumcision and Jewish law?",
    choices: ["The Egyptians", "The Parthians", "The Romans", "The Idumeans (Edomites)"],
    answer: 3,
    explanation: {
      world:
        "John Hyrcanus ruled Judea as high priest about 134–104 BCE. Josephus says he took the Idumean towns of Adora and Marisa (Maresha) and allowed the Idumeans to stay if they were circumcised and kept Jewish laws; from then on they were counted as Jews (Antiquities 13.9.1).",
      theirEyes:
        "For an Idumean family in Maresha, the arrival of Hyrcanus' army meant a new religion as well as a new ruler.",
      tradition: {
        shared:
          "This had a long echo: Herod the Great's family was Idumean by descent (Antiquities 14.1.3), which some of his Jewish opponents held against him.",
      },
      debate:
        "Some historians think many Idumeans adopted Judaism more willingly than Josephus' account suggests; the geographer Strabo describes them as having joined the Jews and shared their customs (Geography 16.2.34).",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.9.1 (13.257–258); 14.1.3" },
      { kind: "scholarship", citation: "Shaye J. D. Cohen, The Beginnings of Jewishness (University of California Press, 1999)" },
      { kind: "primary", citation: "Strabo, Geography 16.2.34" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-017",
    era: "hellenistic",
    level: 4,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The dynasty founded by the Maccabees is called Hasmonean. According to Josephus, where does the name come from?",
    choices: ["The Greek word for “hammer”", "The town of Modein", "An ancestor named Asamoneus", "The month of Chislev"],
    answer: 2,
    explanation: {
      world:
        "Josephus traces Mattathias' family back to “Asamoneus,” his great-grandfather (Antiquities 12.6.1). The family's rulers, from Simon (142 BCE) to the Roman takeover, are called Hasmoneans after him. They combined the offices of high priest and, from about 104 BCE, king.",
      theirEyes:
        "Within a generation, the rebels from Modein had become a royal house, minting coins and sending envoys to Rome.",
      tradition: {
        jewish:
          "Bronze coins usually attributed to John Hyrcanus I carry the Hebrew inscription “Yehohanan the high priest and the hever of the Jews” (hever is translated “council” or “community”). A later record, the Mishnah (c. 200 CE), still refers to the Hasmoneans when describing the Temple.",
      },
      debate: "1–2 Maccabees never use the name, and who Asamoneus was is otherwise unknown.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.6.1; 14.16.4" },
      { kind: "archaeology", citation: "Hasmonean bronze prutot of John Hyrcanus I (Yehohanan), Israel Museum coin collection" },
      { kind: "primary", citation: "Mishnah, Middot 1:6 (later record, c. 200 CE)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-018",
    era: "hellenistic",
    level: 4,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In 1 Maccabees 2, after about a thousand Jews let themselves be killed rather than fight on the Sabbath, what did Mattathias and his friends decide?",
    choices: [
      "To stop keeping the Sabbath until the war was over",
      "To fight back if attacked on the Sabbath",
      "To surrender to the king's officers",
      "To attack their enemies only on the Sabbath",
    ],
    answer: 1,
    explanation: {
      textSays:
        "1 Maccabees 2:29–38 tells how the king's forces attacked refugees hiding in the wilderness on the Sabbath. They refused to fight back, and about a thousand died with their families and livestock. Mattathias and his friends then decided: “Whoever comes against us to battle on the Sabbath day, let's fight against him, and we will in no way all die, as our kindred died in the secret places” (2:41).",
      world:
        "Josephus retells the decision and adds that “this rule continues among us to this day, that if there be a necessity, we may fight on Sabbath days” (Antiquities 12.6.2, 12.277, Whiston). He also says that during Pompey's siege of Jerusalem in 63 BCE the Romans used the Sabbath to build their siege works, because Jews would fight only in self-defence (Antiquities 14.4.2).",
      theirEyes:
        "For families who had just buried their neighbours from the desert caves, the choice was stark: rest on the Sabbath and be slaughtered, or defend themselves and live to keep it another week.",
      tradition: {
        jewish:
          "The episode shows how seriously Jews of the period took the Sabbath: the martyrs in the caves refused even to block their hiding places, and the new rule allowed only defence, not attack, on the holy day.",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 2:29–41"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.6.2 (12.272–277); 14.4.2 (14.63) (Whiston)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "hel-019",
    era: "hellenistic",
    level: 4,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Josephus, after a quarrel at a feast, John Hyrcanus broke with the Pharisees and joined which group?",
    choices: ["The Essenes", "The Sadducees", "The Zealots", "The Samaritans"],
    answer: 1,
    explanation: {
      world:
        "Josephus says a Pharisee named Eleazar told Hyrcanus to give up the high priesthood, claiming his mother had once been a captive. A Sadducee friend persuaded Hyrcanus that the Pharisees agreed, so he joined the Sadducees and cancelled the Pharisees' rules (Antiquities 13.10.5–6). Josephus first mentions Pharisees, Sadducees and Essenes in the time of Hyrcanus' uncle Jonathan, around 145 BCE (13.5.9).",
      theirEyes:
        "In Hyrcanus' palace, a dinner-party insult turned into a political split that shaped Judea for generations.",
      tradition: {
        jewish:
          "Josephus explains the core disagreement: the Pharisees handed down traditions not written in the Law of Moses, while the Sadducees accepted only the written laws (Antiquities 13.10.6).",
      },
      debate: "Historians debate how much of the dinner story is history and how much is later Pharisaic storytelling.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.5.9; 13.10.5–6 (13.288–298)" },
      { kind: "scholarship", citation: "Albert I. Baumgarten, The Flourishing of Jewish Sects in the Maccabean Era (Brill, 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-020",
    era: "hellenistic",
    level: 4,
    category: "neighbours",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: 1 Maccabees says Judah Maccabee sent envoys to make an alliance with Rome.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "1 Maccabees 8:17 says Judah chose Eupolemus son of John and Jason son of Eleazar and sent them to Rome to “establish friendship and alliance with them.” The Senate's reply, written on bronze, promises help if either side is attacked (8:22–30).",
      world:
        "Rome, eager to weaken the Seleucids, made friendly treaties with many small peoples. Josephus repeats the account (Antiquities 12.10.6). About a century later, in 63 BCE, Rome's general Pompey took Jerusalem itself.",
      theirEyes:
        "To the Maccabees, distant Rome looked like a powerful friend against the Seleucids; no one guessed it would become Judea's next master.",
    },
    confidence: "settled",
    references: ["1 Maccabees 8:1–32"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.10.6" },
      { kind: "scholarship", citation: "Erich S. Gruen, The Hellenistic World and the Coming of Rome (University of California Press, 1984), vol. 2" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 5 ─────────────
  {
    id: "hel-021",
    era: "hellenistic",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Dead Sea Scrolls, the “Teacher of Righteousness” is persecuted by a figure the scrolls call what?",
    choices: ["Pontius Pilate", "The Wicked Priest", "The emperor Nero", "Ptolemy the Librarian"],
    answer: 1,
    explanation: {
      world:
        "The Damascus Document (CD 1) says God raised up a Teacher of Righteousness to guide a group of the faithful. The Habakkuk Commentary (1QpHab) says the Wicked Priest pursued the Teacher to his place of exile on the Day of Atonement (col. 11). The scrolls never give either man's real name.",
      theirEyes:
        "For the members of the community, the Teacher was the true interpreter of God's Law, and Jerusalem's official high priest was his enemy.",
      debate:
        "The Wicked Priest is often identified with a Hasmonean high priest, most often Jonathan or Simon, but other candidates are proposed. The Teacher's identity and his link to the settlement at Qumran are also debated. The excavator Roland de Vaux dated the first settlement to about 130 BCE; Jodi Magness dates the start of the sectarian settlement to sometime between about 100 and 50 BCE.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Pesher Habakkuk (1QpHab), Shrine of the Book, Israel Museum, cols. 1, 5, 8–9, 11" },
      { kind: "primary", citation: "Damascus Document (CD) 1:1–11" },
      { kind: "scholarship", citation: "Jodi Magness, The Archaeology of Qumran and the Dead Sea Scrolls (2nd ed., Eerdmans, 2021)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-022",
    era: "hellenistic",
    level: 5,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Antiochus IV called himself “Epiphanes” (God Manifest). What mocking nickname does Polybius say people gave him?",
    choices: ["Soter, “the Saviour”", "Epimanes, “the Madman”", "Philopator, “Father-loving”", "Nikator, “the Victor”"],
    answer: 1,
    explanation: {
      world:
        "Polybius, a Greek historian of the 2nd century BCE, says Antiochus surnamed Epiphanes earned the name Epimanes by his conduct — such as wandering the streets, joining strangers' parties and bathing in public baths (Histories 26.1). Some of his coins proclaim him “King Antiochus, God Manifest.”",
      theirEyes:
        "To his critics, a king who called himself a god made visible was simply a madman with an army.",
      tradition: {
        jewish:
          "1 Maccabees 1:10 calls him a sinful root, and the despised ruler of Daniel 11:21 is widely understood to be Antiochus IV.",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 1:10", "Daniel 11:21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Polybius, Histories 26.1 (preserved in Athenaeus 5.193d; 10.439a)" },
      { kind: "archaeology", citation: "Silver tetradrachms of Antiochus IV, legend ΒΑΣΙΛΕΩΣ ΑΝΤΙΟΧΟΥ ΘΕΟΥ ΕΠΙΦΑΝΟΥΣ" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-023",
    era: "hellenistic",
    level: 5,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 168 BCE, how did the Roman envoy Popillius Laenas force Antiochus IV to withdraw from Egypt?",
    choices: [
      "He challenged him to single combat",
      "He burned the Seleucid fleet at Alexandria",
      "He drew a circle around him and demanded an answer before he stepped out",
      "He bribed his generals to desert",
    ],
    answer: 2,
    explanation: {
      world:
        "Livy places the meeting at Eleusis, near Alexandria. Popillius handed Antiochus the Senate's decree ordering him out of Egypt. When the king asked for time to consult, Popillius drew a circle around him with a vine stick and demanded a reply before he left it. Antiochus gave in and withdrew (Polybius 29.27; Livy 45.12).",
      theirEyes:
        "A king who had nearly conquered Egypt was turned back by one Roman with a walking stick — and he marched home through Judea in a foul mood.",
      tradition: {
        shared:
          "Many interpreters read Daniel 11:30, where “ships of Kittim” come against the king and he turns back in anger against the holy covenant, as describing this event.",
      },
    },
    confidence: "settled",
    references: ["Daniel 11:29–30"],
    sources: [
      scripture,
      { kind: "primary", citation: "Polybius, Histories 29.27" },
      { kind: "primary", citation: "Livy, History of Rome 45.12" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-024",
    era: "hellenistic",
    level: 5,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "2 Maccabees says the celebration when the Temple was cleansed was kept in the manner of which festival?",
    choices: ["Passover", "Shavuot (Weeks)", "Purim", "Sukkot (Tabernacles)"],
    answer: 3,
    explanation: {
      textSays:
        "2 Maccabees 10:6: “They observed eight days with gladness in the manner of the feast of tabernacles,” remembering that at Tabernacles not long before “they were wandering in the mountains and in the caves like wild animals.” They carried branches and palm fronds and sang hymns (10:7).",
      world:
        "Sukkot lasts seven days and is followed by a festive eighth day (Leviticus 23:34–36), and Solomon's Temple was dedicated at that season (1 Kings 8:2, 65–66). Many scholars think the new festival was modelled partly on Sukkot.",
      theirEyes: "Rebels who had missed Tabernacles while hiding in caves finally waved their palm branches in the Temple courts.",
      tradition: {
        jewish:
          "The letter at the start of 2 Maccabees urges Egyptian Jews to keep a feast of Tabernacles in the month of Chislev (2 Maccabees 1:9), showing how closely the two festivals were linked.",
      },
    },
    confidence: "settled",
    references: ["2 Maccabees 10:5–8", "2 Maccabees 1:9", "Leviticus 23:34–36", "1 Kings 8:2", "1 Kings 8:65–66"],
    sources: [scripture, { kind: "scholarship", citation: "Daniel R. Schwartz, 2 Maccabees (Commentaries on Early Jewish Literature, De Gruyter, 2008), on 10:6" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-025",
    era: "hellenistic",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Heliodorus Stele (178 BCE) names the Seleucid minister who, in 2 Maccabees 3, tried to take what from the Jerusalem Temple?",
    choices: ["The Ark of the Covenant", "The money held in its treasury", "The high priest's robes", "Its Torah scrolls"],
    answer: 1,
    explanation: {
      textSays:
        "2 Maccabees 3 says King Seleucus IV sent his chancellor Heliodorus to remove money reported to be held in the Temple treasury (3:7). When he reached the treasury, the text says, a horse with a frightening rider struck at him, two young men scourged him, and he fell to the ground and was carried out on a stretcher (3:24–28).",
      world:
        "The upper part of the stele surfaced on the antiquities market and was published in 2007; three fragments of its lower part had been found in excavations at Maresha in 2005–2006. It records Seleucus IV ordering his minister Heliodorus to appoint an official, Olympiodorus, over the temples of Coele-Syria and Phoenicia. Many historians connect this with the crown's need for money, including the heavy war payments owed to Rome after the Peace of Apamea (188 BCE).",
      theirEyes:
        "Jerusalem's priests had good reason to fear royal officials who came asking about temple money.",
      debate:
        "Scholars agree the stele confirms Heliodorus was a real, senior official and fits the background of 2 Maccabees 3, but it names Olympiodorus, not Heliodorus, as the man in charge of temples.",
    },
    confidence: "settled",
    references: ["2 Maccabees 3:1–40"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Heliodorus Stele (Seleucus IV to Heliodorus, 178 BCE), displayed at the Israel Museum, Jerusalem" },
      { kind: "reference", citation: "Mark Elliott and Paul V. M. Flesher, “Questions about the Heliodorus Stele,” The Bible and Interpretation (December 2009)" },
      { kind: "scholarship", citation: "Hannah M. Cotton and Michael Wörrle, “Seleukos IV to Heliodoros: A New Dossier of Royal Correspondence from Israel,” Zeitschrift für Papyrologie und Epigraphik 159 (2007): 191–205" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
