import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const romanJudea: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "rom-001",
    era: "roman-judea",
    level: 1,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Luke, which Roman emperor was ruling when Jesus was born?",
    choices: ["Caesar Augustus", "Nero", "Tiberius", "Constantine"],
    answer: 0,
    explanation: {
      textSays: "Luke 2:1: “a decree went out from Caesar Augustus that all the world should be enrolled.”",
      world:
        "Augustus (ruled 27 BCE–14 CE) was Rome's first emperor. An inscription from Priene (9 BCE) hails his birthday as the beginning of “good tidings” (euangelia) for the world, and he was honoured as a saviour.",
      theirEyes:
        "For a villager in Judea, the emperor was a distant name — but his decrees, taxes and soldiers were very close.",
      tradition: {
        christian:
          "Many Christians read Luke's contrast as deliberate: the real “good news” and “saviour” is laid in a manger, not born in a palace (Luke 2:7–12).",
      },
    },
    confidence: "settled",
    references: ["Luke 2:1", "Luke 2:7–12"],
    sources: [scripture, { kind: "primary", citation: "Priene Calendar Inscription (OGIS 458), 9 BCE" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-002",
    era: "roman-judea",
    level: 1,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which language did Jesus most likely speak in everyday life?",
    choices: ["Aramaic", "Latin", "Phoenician", "Akkadian"],
    answer: 0,
    explanation: {
      textSays:
        "The Gospels preserve some of his Aramaic words, such as “Talitha koum” (Mark 5:41) and “Eloi, Eloi, lama sabachthani?” (Mark 15:34).",
      world:
        "Aramaic spread across the Near East as an imperial language under the Assyrians and Persians. In first-century Judea, Hebrew remained the language of scripture and worship — and probably of everyday speech in parts of Judea — Greek for trade and administration, and Latin by Roman officials and soldiers.",
      theirEyes:
        "The sign over the cross was written in “Hebrew” (possibly meaning Aramaic), Latin and Greek (John 19:20) — several languages for a crowded, mixed city.",
      debate: "How much Hebrew or Greek Jesus also used is debated.",
    },
    confidence: "mainstream",
    references: ["Mark 5:41", "Mark 15:34", "John 19:20"],
    sources: [scripture, { kind: "reference", citation: "“Aramaic language,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-003",
    era: "roman-judea",
    level: 1,
    category: "archaeology",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which Roman governor ordered Jesus' crucifixion?",
    choices: ["Pontius Pilate", "Quirinius", "Felix", "Herod Antipas"],
    answer: 0,
    explanation: {
      textSays: "All four Gospels name Pontius Pilate as the governor who handed Jesus over to be crucified (e.g., Mark 15:15).",
      world:
        "A stone inscription found at Caesarea Maritima in 1961 — the “Pilate Stone” — names Pontius Pilate as prefect of Judea. The Roman historian Tacitus also records that Christus was executed under Pilate (Annals 15.44). Herod Antipas ruled Galilee, not Judea.",
      theirEyes:
        "To Jerusalem's crowds, Pilate was the face of Rome — and Josephus describes clashes in which he offended Jewish religious feelings.",
      tradition: {
        christian: "The Apostles' Creed and the Nicene Creed both say Jesus “suffered under Pontius Pilate.”",
      },
    },
    confidence: "settled",
    references: ["Mark 15:1–15", "Luke 23:6–12"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Pilate Stone, Caesarea Maritima (Israel Museum)" },
      { kind: "primary", citation: "Tacitus, Annals 15.44" },
      { kind: "primary", citation: "Josephus, Jewish War 2.169–177" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-004",
    era: "roman-judea",
    level: 1,
    category: "world",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: most historians date Jesus' birth to the year 1 CE.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays: "Matthew 2:1 places Jesus' birth “in the days of King Herod.”",
      world:
        "Our calendar was worked out by the monk Dionysius Exiguus in the 6th century, and his count was off. Herod the Great is usually dated to have died in 4 BCE, so most historians place Jesus' birth roughly between 6 and 4 BCE.",
      theirEyes:
        "People then didn't count years from any birth — they dated events by rulers: “in the fifteenth year of Tiberius” (Luke 3:1).",
      debate: "Some scholars date Herod's death to 1 BCE instead, and Luke's census adds further complications.",
    },
    confidence: "mainstream",
    references: ["Matthew 2:1", "Luke 3:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 17.6.4; 17.8.1" },
      { kind: "reference", citation: "“Dionysius Exiguus,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-005",
    era: "roman-judea",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to the Gospels and Josephus, which group denied the resurrection of the dead?",
    choices: ["The Sadducees", "The Pharisees", "The Essenes", "Jesus' disciples"],
    answer: 0,
    explanation: {
      textSays:
        "Mark 12:18 and Acts 23:8 say the Sadducees deny the resurrection. Paul uses this disagreement to split the council (Acts 23:6–9).",
      world:
        "The Sadducees drew support from the wealthy elite, including leading priests (Acts 5:17); Josephus says the high priest Ananus was one. He reports that they accepted the written law but rejected the Pharisees' traditions, and denied the soul's survival after death.",
      theirEyes:
        "Asking about the afterlife in Jerusalem would get you very different answers depending on whether you asked a Temple priest or a Pharisee teacher.",
      tradition: {
        jewish:
          "Rabbinic Judaism grew from the Pharisaic tradition; belief in the resurrection of the dead is one of Maimonides' Thirteen Principles of Faith.",
      },
    },
    confidence: "settled",
    references: ["Mark 12:18", "Acts 5:17", "Acts 23:6–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.10.6; 18.1.4; 20.9.1; Jewish War 2.162–166" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "rom-006",
    era: "roman-judea",
    level: 2,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the “Render to Caesar” story, which coin did Jesus ask to see?",
    choices: ["A denarius", "A Tyrian shekel", "A lepton (widow's mite)", "A gold aureus"],
    answer: 0,
    explanation: {
      textSays:
        "Mark 12:15–16: “Bring me a denarius… Whose is this image and inscription?” — “Caesar's.” In Matthew 20:2 a denarius is a labourer's pay for a day.",
      world:
        "Silver denarii of the emperor Tiberius bore his portrait and called him son of the “divine Augustus” — an image and a claim that troubled many Jews.",
      theirEyes:
        "By asking his questioners to produce the coin, Jesus showed they were already carrying Caesar's image in their purses.",
      tradition: {
        christian: "The saying became central to Christian thinking about faith and government.",
      },
    },
    confidence: "settled",
    references: ["Mark 12:13–17", "Matthew 20:2"],
    sources: [scripture, { kind: "archaeology", citation: "Tiberius denarius, “TI CAESAR DIVI AVG F AVGVSTVS” (RIC I² Tiberius 26)" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-007",
    era: "roman-judea",
    level: 2,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Why were tax collectors so unpopular in Jesus' time?",
    choices: [
      "They collected for the ruling powers and often overcharged",
      "They were all Roman soldiers",
      "They were usually from Egypt",
      "They refused to speak Aramaic",
    ],
    answer: 0,
    explanation: {
      textSays:
        "John the Baptist tells tax collectors to collect no more than they are owed (Luke 3:12–13), and Zacchaeus promises to repay fourfold anyone he defrauded (Luke 19:8). Matthew (Levi) was a tax collector (Matthew 9:9).",
      world:
        "Rome often contracted out the collection of tolls and certain taxes, and collectors profited by taking more than they passed on. In Galilee, collectors served Herod Antipas, Rome's client ruler.",
      theirEyes:
        "To a fisherman in Capernaum, the man at the toll booth was a neighbour working for the occupiers — and getting rich doing it.",
      tradition: {
        christian:
          "Jesus' meals with “tax collectors and sinners” (Mark 2:15–17) became a symbol of welcome to outsiders.",
      },
    },
    confidence: "mainstream",
    references: ["Luke 3:12–13", "Luke 19:1–10", "Matthew 9:9", "Mark 2:15–17"],
    sources: [scripture, { kind: "reference", citation: "“Publican,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-008",
    era: "roman-judea",
    level: 2,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What great building project did Herod the Great carry out in Jerusalem?",
    choices: ["Rebuilding the Temple", "Building the Colosseum", "Founding the Library of Alexandria", "Building the Parthenon"],
    answer: 0,
    explanation: {
      textSays: "John 2:20: “It took forty-six years to build this temple!”",
      world:
        "Josephus says Herod began rebuilding the Temple in the eighteenth year of his reign, around 20/19 BCE (Antiquities; his Jewish War says the fifteenth). The Western Wall in Jerusalem is part of the retaining walls of Herod's expanded Temple Mount.",
      theirEyes:
        "Pilgrims arriving for festivals saw gleaming white stone and gold — one of the most famous buildings in the Roman world.",
      tradition: {
        jewish: "The Western Wall (the Kotel) is today the most important place of Jewish prayer.",
        christian: "Jesus taught in the Temple courts and foretold its destruction (Mark 13:1–2).",
      },
    },
    confidence: "settled",
    references: ["John 2:20", "Mark 13:1–2"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 15.11.1; Jewish War 1.21.1" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-009",
    era: "roman-judea",
    level: 2,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The Samaritan woman at the well tells Jesus her people worship on which mountain?",
    choices: ["Mount Gerizim", "Mount Sinai", "Mount Carmel", "The Mount of Olives"],
    answer: 0,
    explanation: {
      textSays: "John 4:20: “Our fathers worshiped in this mountain, and you Jews say that in Jerusalem is the place where people ought to worship.”",
      world:
        "The Samaritans had a temple on Mount Gerizim, which the Hasmonean ruler John Hyrcanus destroyed in the late 2nd century BCE. A small Samaritan community still lives and worships at Gerizim today.",
      theirEyes:
        "Relations were tense — Josephus records Galilean pilgrims being attacked while crossing Samaria on the way to Jerusalem — so a Jewish teacher asking a Samaritan woman for water was startling (John 4:9).",
      tradition: {
        christian: "Jesus' parable of the Good Samaritan (Luke 10:25–37) makes a Samaritan the hero.",
      },
    },
    confidence: "settled",
    references: ["John 4:9–20", "Luke 10:25–37"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.9.1; 20.6.1" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-010",
    era: "roman-judea",
    level: 2,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the synagogue at Nazareth, Jesus read from the scroll of which prophet?",
    choices: ["Isaiah", "Jeremiah", "Daniel", "Ezekiel"],
    answer: 0,
    explanation: {
      textSays: "Luke 4:16–21: Jesus reads from Isaiah, “The Spirit of the Lord is on me…” — Isaiah 61:1–2 woven together with a phrase from Isaiah 58:6.",
      world:
        "First-century synagogues have been excavated, for example at Magdala (discovered in 2009) and Gamla. They were gathering places for reading and teaching scripture; for Jews in the land of Israel, sacrifice was offered only at the Temple in Jerusalem.",
      theirEyes:
        "In a village synagogue, everyone knew the young man who stood up to read — which is exactly why his words caused such a stir.",
      tradition: {
        jewish:
          "Reading a passage from the Prophets (the haftarah) after the Torah reading is an ancient custom still followed in synagogues.",
      },
    },
    confidence: "settled",
    references: ["Luke 4:16–21", "Isaiah 61:1–2", "Isaiah 58:6"],
    sources: [scripture, { kind: "archaeology", citation: "Magdala synagogue, excavated by the Israel Antiquities Authority (2009)" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "rom-011",
    era: "roman-judea",
    level: 3,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Luke connects Jesus' birth with a census under which governor of Syria?",
    choices: ["Quirinius", "Pontius Pilate", "Varus", "Festus"],
    answer: 0,
    explanation: {
      textSays: "Luke 2:2: “This was the first enrollment made when Quirinius was governor of Syria.”",
      world:
        "Josephus records a census by Quirinius in Judea in 6 CE, when the region came under direct Roman rule — and it sparked a revolt led by Judas the Galilean.",
      theirEyes:
        "For Jews, a Roman census meant counting people for Roman taxes — a reminder of who was really in charge.",
      debate:
        "Matthew places Jesus' birth under Herod the Great, who died about a decade before 6 CE. Scholars have proposed solutions — an earlier term of office, or translating “first” as “before” — but many see a real historical difficulty.",
    },
    confidence: "debated",
    references: ["Luke 2:1–2", "Matthew 2:1", "Acts 5:37"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.1.1" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-012",
    era: "roman-judea",
    level: 3,
    category: "faith-practice",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: all four Gospels present the Last Supper as a Passover meal.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Mark 14:12–16 (followed by Matthew and Luke) presents it as a Passover meal. John places the crucifixion on “the Preparation Day of the Passover” (John 19:14), which most scholars read as the day before Passover began — and John never describes the supper as a Passover meal.",
      world:
        "The Seder as we know it was shaped after the Temple's destruction; its earliest detailed description is in the Mishnah (Pesachim 10), compiled around 200 CE.",
      theirEyes:
        "Jerusalem at Passover was packed with pilgrims; thousands of lambs were sacrificed at the Temple on the afternoon before the feast.",
      debate:
        "Some scholars read John 19:14 as “the Friday of Passover week,” which would bring John into line with the other Gospels. Others explain the difference by different calendars in use at the time, or by theological symbolism — in John, Jesus dies as the Passover lambs are being slaughtered. The question is still debated.",
    },
    confidence: "settled",
    references: ["Mark 14:12–16", "John 13:1", "John 19:14"],
    sources: [scripture, { kind: "primary", citation: "Mishnah Pesachim 10" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-013",
    era: "roman-judea",
    level: 3,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which Jewish group — described by Josephus but never named in the New Testament — is often linked to the Dead Sea Scrolls?",
    choices: ["The Essenes", "The Pharisees", "The Sadducees", "The Herodians"],
    answer: 0,
    explanation: {
      world:
        "From 1947 onward, scrolls were found in caves near Qumran by the Dead Sea. They include the oldest known manuscripts of books of the Hebrew Bible, such as the Great Isaiah Scroll. Josephus, Philo and Pliny the Elder all describe the Essenes; Pliny places them near the Dead Sea.",
      theirEyes:
        "Imagine a community in the desert copying scripture, waiting for a final battle between the “Sons of Light” and the “Sons of Darkness.”",
      debate:
        "Most scholars connect the Qumran community with the Essenes, but some argue for other groups, or that the scrolls came from Jerusalem libraries hidden during the war with Rome.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Jewish War 2.119–161; Pliny the Elder, Natural History 5.73" },
      { kind: "reference", citation: "“Dead Sea Scrolls,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-014",
    era: "roman-judea",
    level: 3,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "What 1968 discovery in Jerusalem provided physical evidence of Roman crucifixion?",
    choices: ["A heel bone pierced by an iron nail", "A wooden cross", "A Roman execution manual", "A painting of a crucifixion"],
    answer: 0,
    explanation: {
      world:
        "Found in an ossuary (bone box) of a man named Yehohanan at Giv'at HaMivtar, the heel bone still had a nail through it, bent where it struck a knot in the wood. It dates to the 1st century CE.",
      theirEyes:
        "Romans used crucifixion for slaves, rebels and the lowest criminals, often along busy roads — a public warning to everyone passing by.",
      tradition: {
        christian: "Paul calls the cross “a stumbling block to Jews and foolishness to Greeks” (1 Corinthians 1:23).",
      },
    },
    confidence: "settled",
    references: ["1 Corinthians 1:23"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "V. Tzaferis, “Jewish Tombs at and near Giv'at ha-Mivtar, Jerusalem,” Israel Exploration Journal 20 (1970)" },
      { kind: "scholarship", citation: "J. Zias and E. Sekeles, “The Crucified Man from Giv'at ha-Mivtar: A Reappraisal,” Israel Exploration Journal 35 (1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-015",
    era: "roman-judea",
    level: 3,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Arch of Titus in Rome shows soldiers carrying which object from the Jerusalem Temple?",
    choices: ["The menorah", "The Ark of the Covenant", "The Ten Commandments tablets", "Herod's crown"],
    answer: 0,
    explanation: {
      textSays: "Jesus foretold that not one stone of the Temple would be left on another (Mark 13:2).",
      world:
        "Titus' army destroyed the Temple in 70 CE. The arch, built after his death (around 81 CE), shows the menorah, trumpets and the table of showbread carried in Rome's victory parade, which Josephus also describes. The Ark had disappeared centuries earlier.",
      theirEyes:
        "For Jews in Rome, the parade of their Temple's treasures through the streets was a deep humiliation.",
      tradition: {
        jewish:
          "The fast of Tisha B'Av mourns the destruction of both Temples; the menorah became the emblem of the modern State of Israel.",
      },
    },
    confidence: "settled",
    references: ["Mark 13:1–2"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 7.5.5" }],
    review: { status: "published", reviewedOn: "2026-11-18", notes: "Independent fact-check pass; corrections applied." },
  },
  // ───────────── Level 4 ─────────────
  {
    id: "rom-016",
    era: "roman-judea",
    level: 4,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In John's Gospel, where does Jesus perform his first sign, turning water into wine?",
    choices: ["At a wedding in Cana", "In the synagogue at Capernaum", "At the Jordan River", "In the Temple courts"],
    answer: 0,
    explanation: {
      textSays:
        "John 2:1–11: at a wedding in Cana of Galilee the wine runs out, and Jesus has six stone water jars filled. John calls it “the beginning of his signs.”",
      world:
        "Village weddings could last several days, and running out of wine would shame the host family. The stone jars were for Jewish purification rites (John 2:6) — stone was considered not to become ritually impure.",
      theirEyes: "For a poor family, a wedding was the biggest feast of their lives — and the whole village was watching.",
    },
    confidence: "settled",
    references: ["John 2:1–11"],
    sources: [scripture],
    review: { status: "draft" },
  },
  {
    id: "rom-017",
    era: "roman-judea",
    level: 4,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which ruler had John the Baptist executed?",
    choices: ["Herod Antipas", "Herod the Great", "Pontius Pilate", "Caiaphas"],
    answer: 0,
    explanation: {
      textSays:
        "Mark 6:14–29: Herod Antipas, ruler of Galilee, has John beheaded after John condemns his marriage to Herodias.",
      world:
        "Josephus also reports that Herod Antipas executed John, at the fortress of Machaerus east of the Dead Sea. He gives a political reason: Herod feared John's influence might spark an uprising.",
      theirEyes:
        "Crowds flocked to the Jordan to hear John. To a nervous ruler, a popular preacher talking about judgment sounded dangerous.",
      debate: "Historians generally see the Gospels' moral reason and Josephus' political one as complementary rather than contradictory.",
    },
    confidence: "settled",
    references: ["Mark 6:14–29", "Luke 3:19–20"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.5.2" }],
    review: { status: "draft" },
  },
  {
    id: "rom-018",
    era: "roman-judea",
    level: 4,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Luke calls the Sea of Galilee by another name. What is it?",
    choices: ["The Lake of Gennesaret", "The Salt Sea", "The Great Sea", "The Sea of Reeds"],
    answer: 0,
    explanation: {
      textSays:
        "Luke 5:1 says Jesus was standing “by the lake of Gennesaret.” John 6:1 and 21:1 call it the Sea of Tiberias. In the Hebrew Bible it is Kinneret (Numbers 34:11).",
      world:
        "It is a freshwater lake, about 21 km long. In 1986 a fishing boat from around the 1st century was found in the mud near Ginosar, on its shore.",
      theirEyes: "Fishermen worked through the night with nets, and sudden storms could whip the lake into dangerous waves.",
    },
    confidence: "settled",
    references: ["Luke 5:1", "John 6:1", "John 21:1", "Numbers 34:11"],
    sources: [scripture, { kind: "archaeology", citation: "The Ancient Galilee Boat, Yigal Allon Centre, Ginosar (discovered 1986)" }],
    review: { status: "draft" },
  },
  {
    id: "rom-019",
    era: "roman-judea",
    level: 4,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Who was made to carry Jesus' cross?",
    choices: ["Simon of Cyrene", "Simon Peter", "Joseph of Arimathea", "Nicodemus"],
    answer: 0,
    explanation: {
      textSays:
        "Mark 15:21: the soldiers compel a passer-by, “Simon of Cyrene, coming from the country, the father of Alexander and Rufus,” to carry the cross.",
      world:
        "Cyrene, in today's Libya, had a large Jewish community. Roman soldiers could force civilians to carry loads for them.",
      theirEyes: "A man coming into the city for the festival, pulled out of the crowd by a soldier — and his name never forgotten.",
      debate:
        "Mark names Simon's sons as if readers knew them, which many scholars take to mean they were known in the early Christian community.",
    },
    confidence: "settled",
    references: ["Mark 15:21", "Luke 23:26"],
    sources: [scripture],
    review: { status: "draft" },
  },
  {
    id: "rom-020",
    era: "roman-judea",
    level: 4,
    category: "archaeology",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the 1st-century Jewish historian Josephus mentions James, the brother of Jesus.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "Josephus describes how in 62 CE the high priest Ananus had “the brother of Jesus who was called Christ, whose name was James” put to death (Antiquities 20.9.1).",
      theirEyes: "The execution was controversial even then: Josephus says fair-minded people in Jerusalem were offended and complained.",
      tradition: {
        christian: "James led the church in Jerusalem (Acts 15; Galatians 1:19) and is traditionally linked to the Letter of James.",
      },
      debate:
        "Most scholars accept this passage as authentic. A longer passage about Jesus himself (Antiquities 18.3.3, the “Testimonium Flavianum”) is widely thought to have been expanded by later Christian copyists.",
    },
    confidence: "mainstream",
    references: ["Galatians 1:19"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 20.9.1; 18.3.3" }],
    review: { status: "draft" },
  },

  // ───────────── Level 5 ─────────────
  {
    id: "rom-021",
    era: "roman-judea",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to the Gospels, which lakeside town became Jesus' home base during his ministry in Galilee?",
    choices: ["Capernaum", "Jericho", "Caesarea Maritima", "Bethlehem"],
    answer: 0,
    explanation: {
      textSays:
        "Matthew 4:13: leaving Nazareth, Jesus “came and lived in Capernaum, which is by the sea.” Mark 2:1 says he was “at home” there.",
      world:
        "Excavations at Capernaum uncovered a white limestone synagogue from the late Roman or Byzantine period built over an earlier basalt foundation, and a house venerated as Peter's, later enclosed by an octagonal church.",
      theirEyes: "A fishing town on a trade road, with a customs post — the kind of place where fishermen and tax collectors met.",
    },
    confidence: "settled",
    references: ["Matthew 4:13", "Mark 2:1"],
    sources: [scripture, { kind: "reference", citation: "“Capernaum,” Encyclopaedia Britannica" }],
    review: { status: "draft" },
  },
  {
    id: "rom-022",
    era: "roman-judea",
    level: 5,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Matthew 23:5, Jesus criticizes those who make their “phylacteries” broad. What are phylacteries?",
    choices: [
      "Small leather boxes holding scripture verses, worn on the arm and head",
      "Clay lamps lit in the synagogue",
      "Bronze coins given to the Temple",
      "Scrolls of the Prophets read on the Sabbath",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Matthew 23:5: “they make their phylacteries broad and enlarge the fringes of their garments.” The practice comes from Deuteronomy 6:8: “bind them for a sign on your hand.”",
      world:
        "Phylacteries (Hebrew tefillin) from around the time of Jesus have been found among the Dead Sea Scrolls at Qumran.",
      theirEyes: "Wearing scripture on your body was a sign of devotion — the criticism was of showing off, not of the practice itself.",
      tradition: {
        jewish: "Observant Jewish men put on tefillin for weekday morning prayers.",
      },
    },
    confidence: "settled",
    references: ["Matthew 23:5", "Deuteronomy 6:8"],
    sources: [scripture, { kind: "reference", citation: "“Tefillin,” Encyclopaedia Britannica" }],
    review: { status: "draft" },
  },
  {
    id: "rom-023",
    era: "roman-judea",
    level: 5,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "What was the Sanhedrin before which Jesus, and later Peter and Paul, were brought?",
    choices: [
      "The Jewish high council in Jerusalem",
      "The Roman governor's bodyguard",
      "The Temple treasury",
      "Herod's royal palace",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Mark 14:55 speaks of “the chief priests and the whole council”; Acts 5 and 22–23 bring the apostles and Paul before the same council.",
      world:
        "The council was led by the high priest and included priests, elders and scribes, with Sadducees and Pharisees among its members (Acts 23:6).",
      theirEyes:
        "Under Roman rule, the council handled religious and local matters — but the power to execute lay with the Roman governor (John 18:31).",
      debate:
        "The Mishnah describes a Great Sanhedrin of 71 members with detailed procedures; historians debate how far this reflects the council of Jesus' time or later rabbinic ideals.",
    },
    confidence: "mainstream",
    references: ["Mark 14:55", "Acts 5:27", "Acts 23:6", "John 18:31"],
    sources: [scripture, { kind: "primary", citation: "Mishnah Sanhedrin 1:6" }],
    review: { status: "draft" },
  },
  {
    id: "rom-024",
    era: "roman-judea",
    level: 5,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Who asked Pilate for Jesus' body and laid it in a rock-cut tomb?",
    choices: ["Joseph of Arimathea", "Simon of Cyrene", "Lazarus of Bethany", "Barabbas"],
    answer: 0,
    explanation: {
      textSays:
        "Mark 15:43–46: Joseph of Arimathea, a respected council member, asks Pilate for the body, wraps it in linen and lays it in a tomb cut out of rock, rolling a stone against the entrance.",
      world:
        "Wealthy Jerusalem families used rock-cut tombs. After about a year the bones were often gathered into a stone box, an ossuary. In 1990 an ornate ossuary inscribed “Joseph son of Caiaphas” was found in Jerusalem.",
      theirEyes: "Burial had to happen before the Sabbath began at sunset — there was very little time.",
      debate: "Most scholars identify the Caiaphas ossuary with the high priest of the Gospels, though a minority question the reading of the inscription.",
    },
    confidence: "settled",
    references: ["Mark 15:42–46", "John 19:38–42"],
    sources: [scripture, { kind: "archaeology", citation: "Caiaphas ossuary, Israel Museum (discovered 1990)" }],
    review: { status: "draft" },
  },
  {
    id: "rom-025",
    era: "roman-judea",
    level: 5,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In John 10:22, Jesus walks in the Temple in winter during which festival?",
    choices: ["The Feast of Dedication (Hanukkah)", "Purim", "Sukkot", "Yom Kippur"],
    answer: 0,
    explanation: {
      textSays: "John 10:22–23: “It was the Feast of the Dedication at Jerusalem. It was winter, and Jesus was walking in the temple, in Solomon's porch.”",
      world:
        "Hanukkah (“dedication”) remembers the Maccabees rededicating the Temple in 164 BCE after it was defiled under the Seleucid king Antiochus IV (1 Maccabees 4:52–59).",
      theirEyes: "Two centuries after the Maccabees, the Temple's rededication was still a living memory of resisting a foreign empire.",
      tradition: {
        shared:
          "The Books of Maccabees are in the Catholic and Orthodox Bibles but not in the Jewish or most Protestant canons — yet the festival itself appears in the New Testament.",
      },
    },
    confidence: "settled",
    references: ["John 10:22–23", "1 Maccabees 4:52–59"],
    sources: [scripture],
    review: { status: "draft" },
  },
];
