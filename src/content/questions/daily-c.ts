import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const dailyC: QuestionInput[] = [
  {
    id: "dly-051",
    era: "early-church",
    daily: true,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Catholic, Eastern Orthodox and Protestant Bibles share a New Testament of how many books?",
    choices: ["39", "27", "66", "12"],
    answer: 1,
    explanation: {
      textSays:
        "The 27 books are four Gospels, Acts, 21 letters and Revelation. Thirteen of the letters carry Paul's name.",
      world:
        "The earliest known list naming exactly these 27 books is the Easter (Festal) Letter 39 of Athanasius, bishop of Alexandria, in 367 CE. Some books, such as Hebrews, James, 2 Peter and Revelation, were debated for centuries before that. 39 and 66 are the Protestant counts for the Old Testament and the whole Bible.",
      theirEyes:
        "A Christian in the 2nd century would not have owned “the New Testament” as one book — just copies of whichever Gospels and letters their church had.",
      tradition: {
        christian:
          "Not every church has the same list: the Ethiopian Orthodox Tewahedo Church keeps a broader canon with extra books, and the traditional Syriac Peshitta New Testament had only 22 books, lacking 2 Peter, 2 and 3 John, Jude and Revelation.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Athanasius of Alexandria, Festal Letter 39 (367 CE)" },
      { kind: "scholarship", citation: "Bruce M. Metzger, The Canon of the New Testament (Oxford, 1987)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-052",
    era: "early-church",
    daily: true,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In which language have the New Testament books come down to us in their original form?",
    choices: ["Latin", "Coptic", "Greek", "Gothic"],
    answer: 2,
    explanation: {
      world:
        "The New Testament was written in Koine (“common”) Greek, the everyday Greek used across the eastern Roman Empire after Alexander the Great. Latin, Coptic and Gothic versions are later translations. Greek let a letter from Paul be read in Corinth, Rome or Ephesus alike.",
      theirEyes:
        "A Jewish traveller from Alexandria and a merchant from Antioch might share no mother tongue — but both could haggle in Greek.",
      tradition: {
        jewish:
          "Many Jews of the time already read their scriptures in Greek: the Septuagint translation made in Egypt. New Testament writers often quote it.",
      },
      debate:
        "Papias (early 2nd century, quoted by Eusebius) says Matthew first arranged Jesus' sayings in “the Hebrew language.” Most scholars think our Greek Matthew was not translated from such a work.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "scholarship", citation: "Bruce M. Metzger and Bart D. Ehrman, The Text of the New Testament, 4th ed. (Oxford, 2005)" },
      { kind: "primary", citation: "Eusebius, Ecclesiastical History 3.39.16 (quoting Papias)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-053",
    era: "roman-judea",
    daily: true,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which three Gospels are called the “Synoptic” Gospels?",
    choices: ["Mark, Luke and John", "Matthew, Luke and John", "Matthew, Mark and John", "Matthew, Mark and Luke"],
    answer: 3,
    explanation: {
      textSays:
        "Matthew, Mark and Luke tell many of the same stories in the same order, often in nearly the same words. John's Gospel has a very different shape and many stories found only in it.",
      world:
        "“Synoptic” means “seen together”: the three can be printed side by side in parallel columns. The term was popularised by J. J. Griesbach, who published such a synopsis in 1776.",
      theirEyes:
        "Luke admits he was not the first: he says many had already tried to write an account, and he set out to write an orderly one (Luke 1:1–4).",
      debate:
        "Most scholars think Mark was written first and that Matthew and Luke used it, plus a shared sayings source (“Q”). A minority argue Matthew came first, or that Luke used Matthew directly.",
    },
    confidence: "settled",
    references: ["Luke 1:1–4"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Synoptic Gospels,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "Mark Goodacre, The Synoptic Problem: A Way Through the Maze (2001)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-054",
    era: "roman-judea",
    daily: true,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In which Gospel do we find the “Sermon on the Mount”?",
    choices: ["Mark", "Matthew", "John", "Acts"],
    answer: 1,
    explanation: {
      textSays:
        "Matthew 5–7. It opens: “Seeing the multitudes, he went up onto the mountain. When he had sat down, his disciples came to him” (Matthew 5:1). Luke has a shorter, similar sermon where Jesus “stood on a level place” (Luke 6:17), often called the Sermon on the Plain.",
      world:
        "Sitting down was the normal posture for a teacher; Luke 4:20 shows Jesus sitting to teach in the synagogue too.",
      theirEyes:
        "With no microphones, a hillside above the lake made a natural theatre for a crowd.",
      tradition: {
        christian:
          "Many readers see Matthew presenting Jesus as a new Moses teaching from a mountain; Christian tradition places the site on a hill near Capernaum.",
      },
    },
    confidence: "settled",
    references: ["Matthew 5:1", "Luke 6:17", "Luke 4:20"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-055",
    era: "roman-judea",
    daily: true,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the Lord's Prayer appears in both Matthew and Luke, and Luke's version is shorter.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Matthew 6:9–13 places it in the Sermon on the Mount. In Luke 11:1–4, a disciple asks, “Lord, teach us to pray, just as John also taught his disciples,” and Jesus answers, “When you pray, say, ‘Our Father…’” Luke's prayer has no closing words praising God's kingdom, power and glory.",
      world:
        "In the oldest manuscripts of Luke, such as Papyrus 75 and Codex Vaticanus, Luke's prayer is even shorter: it lacks lines such as “your will be done” and “deliver us from the evil one.” Later copyists filled these in from Matthew, and the World English Bible, which follows the later Majority Text, includes them. The doxology praising God's kingdom, power and glory is in turn missing from the earliest manuscripts of Matthew, such as Codex Sinaiticus and Codex Vaticanus. The Didache (c. 100 CE) adds a shorter doxology and tells Christians to pray the prayer three times a day.",
      theirEyes: "Followers of John the Baptist had their own prayers; Jesus' disciples wanted one that marked them out too.",
    },
    confidence: "settled",
    references: ["Matthew 6:9–13", "Luke 11:1–4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Didache 8.2–3" },
      { kind: "scholarship", citation: "Bruce M. Metzger, A Textual Commentary on the Greek New Testament, 2nd ed. (1994), on Matthew 6:13 and Luke 11:2–4" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-056",
    era: "roman-judea",
    daily: true,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Matthew's Beatitudes, each saying begins with which word?",
    choices: ["Woe", "Truly", "Blessed", "Behold"],
    answer: 2,
    explanation: {
      textSays:
        "Matthew 5:3: “Blessed are the poor in spirit, for theirs is the Kingdom of Heaven.” Luke 6:20–26 gives four blessings followed by four matching “woes,” beginning “But woe to you who are rich!”",
      world: "“Beatitude” comes from Latin beatus, “blessed” or “happy,” translating the Greek makarios.",
      theirEyes: "Calling the poor and the mourners “blessed” would have startled anyone who measured God's favour by wealth and success.",
      tradition: {
        jewish:
          "“Blessed is the one who…” was a familiar Jewish form (Psalm 1:1). A Dead Sea Scroll, 4Q525, contains a series of beatitudes praising those who hold to wisdom and the Law.",
      },
    },
    confidence: "settled",
    references: ["Matthew 5:3–12", "Luke 6:20–26", "Psalm 1:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Dead Sea Scrolls, 4Q525 (4QBeatitudes)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-057",
    era: "roman-judea",
    daily: true,
    category: "neighbours",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In the parable of the Good Samaritan, the traveller was going from Jerusalem to which town?",
    choices: ["Bethlehem", "Nazareth", "Damascus", "Jericho"],
    answer: 3,
    explanation: {
      textSays:
        "Luke 10:30: “A certain man was going down from Jerusalem to Jericho, and he fell among robbers, who both stripped him and beat him, and departed, leaving him half dead.” A priest and a Levite pass by; a Samaritan stops to help.",
      world:
        "“Down” is literal: Jerusalem stands about 750 metres above sea level, Jericho about 250 metres below it, through dry, rocky wilderness. Josephus puts Jericho 150 furlongs (stadia), roughly 28 km, from Jerusalem.",
      theirEyes:
        "Jesus' listeners expected a hero from their own people — making the despised Samaritan the one who shows mercy was the twist.",
      tradition: {
        shared:
          "Readers often compare 2 Chronicles 28:15, where men of Samaria clothe captives from Judah and bring them to Jericho.",
      },
    },
    confidence: "settled",
    references: ["Luke 10:25–37", "2 Chronicles 28:15"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 4.8.3 (4.474)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-058",
    era: "roman-judea",
    daily: true,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the parable of the Prodigal Son, what job did the younger son take after spending everything?",
    choices: ["Feeding pigs", "Mending fishing nets", "Herding sheep", "Making tents"],
    answer: 0,
    explanation: {
      textSays:
        "Luke 15:15: “He went and joined himself to one of the citizens of that country, and he sent him into his fields to feed pigs.” He was so hungry he longed to eat the pigs' food (15:16).",
      world: "The Law of Moses lists the pig as unclean (Leviticus 11:7). Pig-keeping points to a non-Jewish “far country.”",
      theirEyes: "For a Jewish audience, a son of a good family tending pigs had fallen about as low as anyone could imagine.",
      tradition: {
        jewish:
          "Avoiding pork had become a badge of faithfulness: in 2 Maccabees 6:18–31 the elderly scribe Eleazar chooses death rather than eat it under Antiochus IV.",
      },
    },
    confidence: "settled",
    references: ["Luke 15:11–32", "Leviticus 11:7"],
    sources: [scripture, { kind: "primary", citation: "2 Maccabees 6:18–31; 1 Maccabees 1:47" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-059",
    era: "roman-judea",
    daily: true,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which two members of the Twelve did Jesus nickname “Boanerges”?",
    choices: ["Peter and Andrew", "James and John", "Philip and Bartholomew", "Thomas and Matthew"],
    answer: 1,
    explanation: {
      textSays:
        "Mark 3:17: “James the son of Zebedee; and John, the brother of James, (whom he called Boanerges, which means, Sons of Thunder)”. In Luke 9:54 the two offer to call down fire on a Samaritan village that turned Jesus away, and Jesus rebukes them.",
      world:
        "Boanerges is a Greek spelling of a Semitic (probably Aramaic) phrase. Mark often keeps such words and translates them for his Greek-speaking readers.",
      theirEyes: "Fishermen from the lake knew sudden storms well — a fitting nickname for two hot-tempered brothers.",
      tradition: {
        christian: "Simon also received a new name, Peter, “rock” (Mark 3:16), in the same list.",
      },
    },
    confidence: "settled",
    references: ["Mark 3:16–17", "Luke 9:51–55"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-060",
    era: "roman-judea",
    daily: true,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In John's Gospel, who is the first person to see the risen Jesus at the tomb?",
    choices: ["Martha", "Peter", "Mary Magdalene", "Thomas"],
    answer: 2,
    explanation: {
      textSays:
        "In John 20:11–18, Mary Magdalene stays weeping at the empty tomb, recognises Jesus when he says her name, and goes to tell the disciples. In Matthew 28:1–10 she meets him together with the other Mary.",
      world:
        "Her name most likely means “from Magdala,” a fishing town on the western shore of the Sea of Galilee. Luke 8:2 says Jesus had freed her from seven demons, and Luke 8:3 lists her among women who supported Jesus' group from their own means.",
      theirEyes: "In a world where women's testimony was often doubted, the Gospels still name women as the first witnesses.",
      tradition: {
        jewish: "Josephus, describing the Law in his own day, says the testimony of women was not to be accepted as evidence.",
        christian:
          "In a sermon of about 591 CE, Pope Gregory I identified her with the unnamed “sinner” who anoints Jesus in Luke 7:37–50. Later Western tradition built on this the image of a repentant prostitute, which the Gospels never state. Eastern churches kept her separate and honour her as “equal to the apostles.”",
      },
    },
    confidence: "settled",
    references: ["John 20:11–18", "Matthew 28:1–10", "Luke 8:2–3", "Luke 7:37–50"],
    sources: [
      scripture,
      { kind: "primary", citation: "Gregory the Great, Homilies on the Gospels 33 (c. 591 CE)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 4.8.15 (4.219)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-061",
    era: "roman-judea",
    daily: true,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Nicodemus, who came to Jesus by night in John's Gospel, belonged to which group?",
    choices: ["The Sadducees", "The Zealots", "The tax collectors", "The Pharisees"],
    answer: 3,
    explanation: {
      textSays:
        "John 3:1: “Now there was a man of the Pharisees named Nicodemus, a ruler of the Jews.” He “came to Jesus by night” (3:2). Later he urges a fair hearing for Jesus (7:50–51) and brings about a hundred pounds of myrrh and aloes for his burial (19:39).",
      world: "Nicodemus appears only in John's Gospel. “Ruler” suggests a leading figure, perhaps a member of the council.",
      theirEyes: "Visiting a controversial teacher after dark meant a respected man could ask questions without the whole city watching.",
      tradition: {
        jewish:
          "Josephus describes the Pharisees as the most accurate interpreters of the Law, with wide influence among ordinary people.",
      },
    },
    confidence: "settled",
    references: ["John 3:1–2", "John 7:50–51", "John 19:39"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 2.8.14; Antiquities of the Jews 18.1.3" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-062",
    era: "roman-judea",
    daily: true,
    category: "story",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Zacchaeus climbed a tree to see Jesus because he was short.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Luke 19:3–4: “He was trying to see who Jesus was, and couldn't because of the crowd, because he was short. He ran on ahead and climbed up into a sycamore tree to see him, for he was going to pass that way.” He was a chief tax collector in Jericho.",
      world:
        "This “sycamore” is the sycomore fig (Ficus sycomorus), a broad, low-branched tree that thrives in Jericho's warm climate — easy to climb.",
      theirEyes: "A wealthy official scrambling up a tree like a boy must have been quite a sight for the crowd.",
      tradition: {
        shared: "The prophet Amos says he tended sycamore figs (Amos 7:14), the same kind of tree.",
      },
    },
    confidence: "settled",
    references: ["Luke 19:1–10", "Amos 7:14"],
    sources: [scripture, { kind: "reference", citation: "“Sycamore,” Eerdmans Dictionary of the Bible (2000)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-063",
    era: "roman-judea",
    daily: true,
    category: "tradition",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Matthew and Luke both say Jesus was born in which town?",
    choices: ["Nazareth", "Bethlehem", "Capernaum", "Jericho"],
    answer: 1,
    explanation: {
      textSays:
        "Matthew 2:1 and Luke 2:4–7 place the birth in Bethlehem in Judea, which Luke calls David's city, though both say Jesus grew up in Nazareth in Galilee. Matthew links Bethlehem to Micah 5:2 (5:1 in Hebrew Bibles).",
      world:
        "By the mid-2nd century Justin Martyr says the birth took place in a cave near Bethlehem. The Church of the Nativity was built over that cave under Constantine in the 4th century.",
      theirEyes: "Bethlehem was a small hill town a few hours' walk south of Jerusalem, proud to be David's home.",
      debate:
        "Some historians suggest Jesus was actually born in Nazareth and that Bethlehem reflects belief in him as heir of David; others accept the Gospels' account. The question asks what the texts say.",
    },
    confidence: "settled",
    references: ["Matthew 2:1", "Luke 2:4–7", "Micah 5:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Justin Martyr, Dialogue with Trypho 78" },
      { kind: "reference", citation: "“Church of the Nativity,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-064",
    era: "roman-judea",
    daily: true,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "On the last, great day of the Feast of Tabernacles in John 7, what does Jesus call out to anyone who is thirsty?",
    choices: ["To come to him and drink", "To wash in the Pool of Siloam", "To pour water on the altar", "To fast until evening"],
    answer: 0,
    explanation: {
      textSays:
        "John 7:2 names the feast. At John 7:37, on “the last and greatest day of the feast,” Jesus stands and cries out, “If anyone is thirsty, let him come to me and drink!” John 7:39 explains that he was speaking about the Spirit.",
      world: "Tabernacles (Sukkot, “booths”) was the autumn harvest festival and one of three pilgrimage feasts, when crowds filled Jerusalem.",
      theirEyes: "At the end of the dry summer, with everyone praying for the winter rains, a cry about thirst and flowing water would have caught the crowd's ear.",
      tradition: {
        jewish:
          "Josephus describes the feast and its offerings, and tells how worshippers holding palm branches and citrons pelted King Alexander Jannaeus with citrons at the altar during the festival. The Mishnah, a later record (c. 200 CE), describes priests drawing water from the Pool of Siloam and pouring it at the altar on each day of the feast; many scholars link Jesus' words to that rite.",
      },
    },
    confidence: "settled",
    references: ["John 7:2", "John 7:37–39", "Leviticus 23:39–43"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 3.10.4 (3.244–247); 13.13.5 (13.372)" },
      { kind: "primary", citation: "Mishnah, Sukkah 4.9 (later record, c. 200 CE)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "dly-065",
    era: "roman-judea",
    daily: true,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "How many different Passovers does John's Gospel explicitly name during Jesus' ministry?",
    choices: ["One", "Two", "Three", "Seven"],
    answer: 2,
    explanation: {
      textSays:
        "John mentions Passover at 2:13 (Jesus clears the Temple), 6:4 (feeding of the five thousand) and 11:55 (the final Passover). The Synoptic Gospels describe only one Passover during the ministry, at the end (Luke 2:41–42 also tells of a Passover visit when Jesus was twelve).",
      world:
        "Three Passovers imply a ministry of at least two years, which is where the popular idea of a three-year ministry comes from. Read with only the Synoptics, it could seem to last about one year.",
      theirEyes: "Passover drew pilgrims from across the Jewish world, and Jerusalem's population swelled with families bringing lambs.",
      debate:
        "John 5:1 mentions an unnamed “feast of the Jews,” which some ancient and modern readers take as another Passover. Scholars disagree on whether John's chronology or the Synoptics' is closer to history.",
    },
    confidence: "settled",
    references: ["John 2:13", "John 5:1", "John 6:4", "John 11:55", "Luke 2:41–42"],
    sources: [scripture, { kind: "scholarship", citation: "John P. Meier, A Marginal Jew, vol. 1 (Doubleday, 1991), ch. 11 on the chronology of Jesus' life" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-066",
    era: "early-church",
    daily: true,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Paul's shortest surviving letter is about a slave named Onesimus. Which letter is it?",
    choices: ["Titus", "Philemon", "Jude", "Galatians"],
    answer: 1,
    explanation: {
      textSays:
        "Writing from prison, Paul sends Onesimus back to his master Philemon and asks Philemon to receive him no longer merely as a slave but as a beloved brother (Philemon 16). Paul offers to repay any debt himself (18–19).",
      world:
        "Slavery was everywhere in the Roman world. Onesimus means “useful,” and Paul plays on it: once useless, now useful (Philemon 11).",
      theirEyes: "A slave carrying a letter that pleads for him, back to the master he had left, would have been nervous indeed.",
      debate:
        "Whether Onesimus had run away or had come to Paul to ask for help is debated. Philemon is one of the letters nearly all scholars agree Paul wrote.",
    },
    confidence: "settled",
    references: ["Philemon 10–19", "Colossians 4:9"],
    sources: [scripture, { kind: "scholarship", citation: "Joseph A. Fitzmyer, The Letter to Philemon (Anchor Bible 34C, 2000)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-067",
    era: "early-church",
    daily: true,
    category: "tradition",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the Letter to the Hebrews names its author.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Hebrews has no opening greeting naming a sender, unlike Paul's letters. It ends with personal notes, including news that Timothy has been released (Hebrews 13:23).",
      world:
        "Early churches disagreed about who wrote it. Some in the East credited Paul; in the West it was long doubted. Origen, in the 3rd century, concluded: “who wrote the epistle, in truth God knows.”",
      theirEyes: "Its first readers presumably knew the writer; the name simply was not written into the text.",
      debate:
        "Suggestions include Paul, Barnabas, Apollos, Luke and Priscilla. Most modern scholars think Paul did not write it, because its style and Greek differ from his letters.",
    },
    confidence: "settled",
    references: ["Hebrews 1:1–2", "Hebrews 13:22–25"],
    sources: [
      scripture,
      { kind: "primary", citation: "Eusebius, Ecclesiastical History 6.25.11–14 (quoting Origen)" },
      { kind: "scholarship", citation: "Harold W. Attridge, The Epistle to the Hebrews (Hermeneia, 1989)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-068",
    era: "early-church",
    daily: true,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Near the end of Romans, the person who wrote the letter down for Paul adds his own greeting. What is his name?",
    choices: ["Timothy", "Silas", "Tertius", "Luke"],
    answer: 2,
    explanation: {
      textSays:
        "Romans 16:22: “I, Tertius, who write the letter, greet you in the Lord.” The verse before it passes on greetings from Timothy, Paul's fellow worker, and others (16:21). Elsewhere Paul says he added a greeting in his own hand (1 Corinthians 16:21) or wrote in large letters himself (Galatians 6:11).",
      world:
        "Greek and Roman letter-writers often dictated to a trained secretary (amanuensis) and might add the final lines in their own handwriting. Tertius is the only secretary named in Paul's letters.",
      theirEyes: "Pen in hand after hours of taking down Paul's words, Tertius slipped in one line of his own for the believers in Rome.",
      debate:
        "Scholars debate how much freedom secretaries like Tertius had: whether they took down every word, or helped shape the wording of the letters.",
    },
    confidence: "settled",
    references: ["Romans 16:21–22", "1 Corinthians 16:21", "Galatians 6:11"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "E. Randolph Richards, Paul and First-Century Letter Writing: Secretaries, Composition and Collection (IVP Academic, 2004)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "dly-069",
    era: "early-church",
    daily: true,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "On which island was John when he received the visions in the Book of Revelation?",
    choices: ["Cyprus", "Crete", "Malta", "Patmos"],
    answer: 3,
    explanation: {
      textSays:
        "Revelation 1:9: “I John, your brother and partner with you in oppression, Kingdom, and perseverance in Christ Jesus, was on the isle that is called Patmos because of God's Word and the testimony of Jesus Christ.”",
      world:
        "Patmos is a small rocky island in the Aegean Sea, off the coast of modern Turkey. Rome used islands as places of banishment. Irenaeus dated the visions to the end of Emperor Domitian's reign (c. 95 CE).",
      theirEyes: "Cut off from his churches on the mainland, the exile could only reach them by letter across the sea.",
      tradition: {
        christian: "Eusebius records the tradition that John was banished there under Domitian and returned to Ephesus afterwards.",
      },
    },
    confidence: "settled",
    references: ["Revelation 1:9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Irenaeus, Against Heresies 5.30.3" },
      { kind: "primary", citation: "Eusebius, Ecclesiastical History 3.18; 3.23" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-070",
    era: "early-church",
    daily: true,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Revelation is the classic example of an “apocalypse.” What does the Greek word apokalypsis mean?",
    choices: ["Destruction", "End of the world", "Unveiling", "Last battle"],
    answer: 2,
    explanation: {
      textSays:
        "Revelation's first word in Greek is apokalypsis — the opening words name it the Revelation of Jesus Christ (Revelation 1:1). The book uses vivid symbols: beasts, seals, trumpets and a new Jerusalem.",
      world:
        "Scholars use “apocalypse” for a type of writing in which hidden heavenly secrets are revealed to a seer, often through visions explained by an angel. The meaning “catastrophe” came much later.",
      theirEyes: "For persecuted readers, the book pulled back a curtain to show that God, not Rome, was really in control.",
      tradition: {
        jewish:
          "Revelation stands in a Jewish tradition of such writings: Daniel 7–12 and 1 Enoch, whose Aramaic fragments were found among the Dead Sea Scrolls.",
      },
    },
    confidence: "settled",
    references: ["Revelation 1:1", "Daniel 7:1–28"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "John J. Collins, The Apocalyptic Imagination, 3rd ed. (2016)" },
      { kind: "archaeology", citation: "Aramaic fragments of 1 Enoch from Qumran Cave 4 (4Q201–202, 4Q204–212)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-071",
    era: "roman-judea",
    daily: true,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The tiny papyrus scrap called P52 (the Rylands fragment) contains verses from which Gospel?",
    choices: ["John", "Mark", "Matthew", "Thomas"],
    answer: 0,
    explanation: {
      textSays: "It preserves parts of John 18:31–33 on one side and John 18:37–38 on the other: Jesus before Pilate.",
      world:
        "About the size of a credit card (roughly 9 × 6 cm), it is held in the John Rylands Library, Manchester (P. Ryl. Gr. 457). It is written on both sides, so it comes from a codex (a book), not a scroll. It was bought in Egypt in 1920 and published in 1935.",
      theirEyes: "Some Christian in Egypt was reading John's Gospel in a handwritten book, far from where the events took place.",
      debate:
        "Its date is debated, not its text. C. H. Roberts, publishing it in 1935, dated the handwriting to the first half of the 2nd century, and it is often called the earliest known New Testament fragment, popularly dated about 125 CE. Brent Nongbri and others argue handwriting can only place it within a wider range, possibly into the late 2nd or early 3rd century.",
    },
    confidence: "settled",
    references: ["John 18:31–33", "John 18:37–38"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "P. Ryl. Gr. 457 (P52), John Rylands Library, University of Manchester" },
      { kind: "scholarship", citation: "Brent Nongbri, “The Use and Abuse of P52,” Harvard Theological Review 98 (2005)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-072",
    era: "early-church",
    daily: true,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Codex Sinaiticus, with the earliest surviving complete New Testament, was found at which site?",
    choices: ["The Vatican Library", "St Catherine's Monastery, Sinai", "The caves of Qumran", "Nag Hammadi in Egypt"],
    answer: 1,
    explanation: {
      world:
        "This handwritten Greek Bible dates to the mid-4th century. Constantin von Tischendorf took 43 leaves from St Catherine's Monastery in 1844 and the bulk of the codex in 1859. Most of it is now in the British Library (Add MS 43725); other parts remain in Leipzig, St Petersburg and at the monastery.",
      theirEyes: "Its scribes copied it on hundreds of animal skins, a huge and costly project for a 4th-century church.",
      tradition: {
        christian:
          "Its New Testament also includes the Epistle of Barnabas and part of the Shepherd of Hermas, early Christian writings later left out of the canon.",
      },
      debate:
        "How the codex left the monastery is still disputed; the monks regard the removal of most of it as improper. Codex Vaticanus, kept in the Vatican, is a similarly early Bible but lacks the end of the New Testament.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Codex Sinaiticus, British Library Add MS 43725; Codex Sinaiticus Project (codexsinaiticus.org)" },
      { kind: "scholarship", citation: "D. C. Parker, Codex Sinaiticus: The Story of the World's Oldest Bible (British Library, 2010)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-073",
    era: "early-church",
    daily: true,
    category: "daily-life",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: early Christians strongly preferred the codex (a book with pages) to the scroll for copying their scriptures.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "Among surviving 2nd- and 3rd-century manuscripts, Christian copies of the scriptures are almost all codices, while most other Greek literature of the time was still copied on scrolls. A codex used both sides of the page and held a long text in one portable volume.",
      theirEyes: "A travelling teacher could carry all four Gospels in one book instead of an armful of scrolls.",
      tradition: {
        jewish: "Jewish scriptures of the period were copied on scrolls, as the Dead Sea Scrolls show.",
      },
      debate: "Why Christians adopted the codex so early is debated: convenience, cost savings, or perhaps the influence of an early collection of Paul's letters or of a Gospel. A few early Christian writings do survive on scrolls.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "scholarship", citation: "Colin H. Roberts and T. C. Skeat, The Birth of the Codex (Oxford, 1983)" },
      { kind: "scholarship", citation: "Larry W. Hurtado, The Earliest Christian Artifacts (Eerdmans, 2006)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-074",
    era: "early-church",
    daily: true,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which New Testament letter says “faith apart from works is dead”?",
    choices: ["Romans", "Galatians", "Hebrews", "James"],
    answer: 3,
    explanation: {
      textSays:
        "James 2:26: “For as the body apart from the spirit is dead, even so faith apart from works is dead.” James stresses practical care for the poor, such as meeting the needs of a believer who lacks clothing and daily food (2:15–16).",
      world:
        "The letter names its author only as James, a servant of God and of the Lord Jesus Christ (1:1). Tradition links it to James the brother of Jesus; many scholars doubt this.",
      theirEyes: "To a struggling believer, a church that offered only good wishes without giving any food was no help at all.",
      tradition: {
        christian:
          "Martin Luther in 1522 called James “an epistle of straw” compared with Paul's letters. Many Christians read James and Paul as answering different problems rather than contradicting each other.",
      },
    },
    confidence: "settled",
    references: ["James 1:1", "James 2:14–26", "Romans 3:28"],
    sources: [
      scripture,
      { kind: "primary", citation: "Martin Luther, Preface to the New Testament (1522)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-075",
    era: "early-church",
    daily: true,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The word “antichrist” appears in the Bible only in which books?",
    choices: ["Revelation", "The letters of John", "Daniel", "The Gospel of Mark"],
    answer: 1,
    explanation: {
      textSays:
        "It occurs only in 1 John 2:18, 2:22, 4:3 and 2 John 7. 1 John 2:18 says “the Antichrist is coming” but that many antichrists have already appeared, and that “By this we know that it is the final hour.” 1 John 2:22 identifies the antichrist as the one who denies that Jesus is the Christ and denies the Father and the Son.",
      world: "Revelation describes beasts and a false prophet, but never uses the word “antichrist.”",
      theirEyes: "The writer seems to have teachers who had left the community in mind, not a single distant villain.",
      tradition: {
        christian:
          "Later Christian writers merged the antichrist with Revelation's beast and the lawless figure of 2 Thessalonians 2:3 into one end-time figure.",
      },
    },
    confidence: "settled",
    references: ["1 John 2:18–22", "1 John 4:3", "2 John 7", "2 Thessalonians 2:3"],
    sources: [scripture, { kind: "scholarship", citation: "Raymond E. Brown, The Epistles of John (Anchor Bible 30, 1982)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
