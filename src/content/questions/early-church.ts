import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const earlyChurch: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "chu-001",
    era: "early-church",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Acts 2, at the festival of Pentecost, what amazes the crowd in Jerusalem about Jesus' followers?",
    choices: ["They cast lots to choose a king", "They build a new synagogue", "They speak in the listeners' own languages", "They set sail for Rome"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 2:4 says they “began to speak with other languages, as the Spirit gave them the ability to speak,” and 2:6 says the crowd gathered “because everyone heard them speaking in his own language.”",
      world:
        "Pentecost is the Greek name for Shavuot, one of the three pilgrimage festivals. Josephus describes “an immense multitude” from Galilee, Idumea, Jericho and Perea gathering in Jerusalem at Pentecost in 4 BCE (Jewish War 2.42–43).",
      theirEyes:
        "A pilgrim from Egypt or Mesopotamia, surrounded by Galileans, suddenly hears his own home language — no wonder people asked what it meant.",
      tradition: {
        christian: "Christians celebrate Pentecost as the coming of the Holy Spirit, often called the birthday of the Church.",
      },
    },
    confidence: "settled",
    references: ["Acts 2:1–12"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 2.42–43" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-002",
    era: "early-church",
    level: 1,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Acts, in which city was Paul born?",
    choices: ["Tarsus", "Nazareth", "Babylon", "Athens"],
    answer: 0,
    explanation: {
      textSays:
        "Acts 22:3: “I am indeed a Jew, born in Tarsus of Cilicia.” Paul also calls himself a Pharisee (Acts 23:6; Philippians 3:5), and Acts says he was trained in Jerusalem under Gamaliel.",
      world:
        "Tarsus, in today's southern Turkey, was a prosperous Greek-speaking city on the river Cydnus. The geographer Strabo praised its schools of philosophy and learning (Geography 14.5.13).",
      theirEyes:
        "A Jewish boy in Tarsus grew up hearing Greek in the market and scripture in the synagogue — good training for a life spent crossing between two worlds.",
    },
    confidence: "settled",
    references: ["Acts 22:3", "Acts 23:6", "Philippians 3:5"],
    sources: [scripture, { kind: "primary", citation: "Strabo, Geography 14.5.13" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-003",
    era: "early-church",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Acts, Paul (then called Saul) had his vision of Jesus while travelling to which city?",
    choices: ["Jericho", "Bethlehem", "Alexandria", "Damascus"],
    answer: 3,
    explanation: {
      textSays:
        "Acts 9:1–9 says Saul was on his way to Damascus to arrest followers of Jesus when a light from heaven flashed around him and he was left blind for three days. Paul's own letters also mention Damascus (Galatians 1:17).",
      world:
        "Damascus, in Syria, was an ancient trading city with a large Jewish community; Josephus says thousands of its Jews were killed there in 66 CE (Jewish War 2.559–561).",
      theirEyes:
        "Travellers on the road would have seen a zealous young Pharisee carrying letters from the high priest — and then being led into the city by the hand.",
      tradition: {
        christian:
          "Christians call this Paul's conversion. Many scholars note that Paul himself describes it as a call, like a prophet's (Galatians 1:15–16).",
      },
    },
    confidence: "settled",
    references: ["Acts 9:1–9", "Galatians 1:15–17"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 2.559–561" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-004",
    era: "early-church",
    level: 1,
    category: "world",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Acts says Jesus' followers were first called “Christians” in Jerusalem.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays: "Acts 11:26: “The disciples were first called Christians in Antioch.”",
      world:
        "Antioch on the Orontes, in Syria, was one of the greatest cities of the Roman East; Josephus ranks it third in the empire after Rome and Alexandria (Jewish War 3.29). “Christianos” is a Greek word built with a Latin-style ending (-ianus), like “Herodians” — a label for a party's supporters, probably first used by outsiders.",
      theirEyes:
        "In a busy city of Greeks, Syrians and Jews, people needed a name for this new group that followed “Christos” — so they invented one.",
    },
    confidence: "settled",
    references: ["Acts 11:19–26"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 3.29" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-005",
    era: "early-church",
    level: 1,
    category: "daily-life",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Acts says Paul worked as a tentmaker.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Acts 18:3: Paul stayed and worked with Aquila and Priscilla in Corinth, “for by trade they were tent makers.” In his letters Paul says he worked night and day so as not to be a burden (1 Thessalonians 2:9).",
      world:
        "The Greek word skēnopoios most likely means a maker of tents and awnings, usually of leather or cloth. A workshop on a city street was also a place to talk with customers and passers-by.",
      theirEyes: "A customer bringing a torn awning to the shop might leave with it mended — and with a lot to think about.",
      debate: "Scholars disagree over whether Paul mainly worked leather or woven goat-hair cloth.",
    },
    confidence: "settled",
    references: ["Acts 18:1–3", "1 Thessalonians 2:9"],
    sources: [scripture, { kind: "scholarship", citation: "R. F. Hock, The Social Context of Paul's Ministry: Tentmaking and Apostleship (Fortress, 1980)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "chu-006",
    era: "early-church",
    level: 2,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Acts, which of the seven men chosen to help the apostles is stoned after a speech to the council?",
    choices: ["Philip", "Stephen", "Nicolaus", "Barnabas"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 6:5 lists the seven, beginning with Stephen, whom it describes as full of faith and the Holy Spirit. After his long speech (Acts 7), he is dragged out of the city and stoned; witnesses lay their coats at the feet of a young man named Saul (Acts 7:58).",
      world:
        "The seven chosen to oversee the daily food distribution all have Greek names, which suggests they came from the Greek-speaking Jewish community in Jerusalem (Acts 6:1).",
      theirEyes: "For the young Saul, holding the coats, this was the moment the new movement became an enemy worth hunting down.",
      tradition: {
        christian: "Christian tradition honours Stephen as the “protomartyr,” the first Christian martyr.",
      },
    },
    confidence: "settled",
    references: ["Acts 6:1–6", "Acts 7:54–60"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-007",
    era: "early-church",
    level: 2,
    category: "neighbours",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Acts 8, which book is the Ethiopian royal treasurer reading in his chariot when Philip meets him?",
    choices: ["Psalms", "Genesis", "Daniel", "Isaiah"],
    answer: 3,
    explanation: {
      textSays:
        "Acts 8:26–35: an official in charge of the treasury of Candace, queen of the Ethiopians, is reading the prophet Isaiah aloud on the road to Gaza. The passage is Isaiah 53:7–8, about one led like a sheep to the slaughter.",
      world:
        "“Ethiopia” here means the kingdom of Kush (Meroë, in today's Sudan), not modern Ethiopia. “Kandake” was a title of its queens; Pliny the Elder says the name passed from queen to queen (Natural History 6.186).",
      theirEyes: "Philip, running beside the chariot, hears the words because in the ancient world people usually read aloud.",
      tradition: {
        jewish: "Acts says the official had come to Jerusalem to worship (Acts 8:27): the Temple drew pilgrims from far beyond Judea.",
      },
    },
    confidence: "settled",
    references: ["Acts 8:26–35", "Isaiah 53:7–8"],
    sources: [scripture, { kind: "primary", citation: "Pliny the Elder, Natural History 6.186" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-008",
    era: "early-church",
    level: 2,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What was the main question at the Jerusalem meeting described in Acts 15?",
    choices: [
      "Whether Gentile believers had to be circumcised and keep the law of Moses",
      "Whether to rebuild the Temple",
      "Whether to move the church to Rome",
      "Whether to join a revolt against Rome",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Some taught, “Unless you are circumcised after the custom of Moses, you can't be saved” (Acts 15:1). After Peter speaks, James proposes that Gentile believers abstain from “the pollution of idols, from sexual immorality, from what is strangled, and from blood” (Acts 15:20).",
      world: "This meeting is usually dated about 48–50 CE. Paul gives his own account of a Jerusalem meeting in Galatians 2:1–10.",
      theirEyes: "For a Greek in Antioch who had begun worshipping Israel's God, the answer decided whether he belonged — and what it would cost.",
      tradition: {
        jewish:
          "Jews of the time differed on Gentiles: Josephus tells of King Izates of Adiabene, advised by one Jewish teacher that he could worship God without circumcision and by another that he must be circumcised (Antiquities 20.2.4).",
      },
      debate: "Scholars debate whether Acts 15 and Galatians 2 describe the same meeting.",
    },
    confidence: "settled",
    references: ["Acts 15:1–21", "Galatians 2:1–10"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 20.2.4" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-009",
    era: "early-church",
    level: 2,
    category: "world",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: in Acts, Paul claims to be a Roman citizen by birth.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "About to be flogged in Jerusalem, Paul asks, “Is it lawful for you to scourge a man who is a Roman, and not found guilty?” When the commander says he bought his citizenship, Paul replies, “But I was born a Roman” (Acts 22:25–28).",
      world:
        "Roman citizens were protected from flogging without trial and could appeal to the emperor; Acts has Paul appeal to Caesar (Acts 25:11). Citizens' rights against flogging were famous: Cicero attacked a governor for flogging a Roman (Against Verres 2.5.162).",
      theirEyes: "A soldier tying a prisoner for the whip would freeze when the prisoner claimed Roman citizenship — mistreating a citizen could end a career.",
      debate: "Paul never mentions his citizenship in his own letters, so a minority of scholars doubt Acts here; most accept it.",
    },
    confidence: "settled",
    references: ["Acts 22:25–28", "Acts 25:11"],
    sources: [scripture, { kind: "primary", citation: "Cicero, Against Verres 2.5.162" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-010",
    era: "early-church",
    level: 2,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "On his voyage to Rome as a prisoner, Paul is shipwrecked on which island, according to Acts?",
    choices: ["Crete", "Cyprus", "Malta", "Sicily"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 27 describes a storm that drives the ship for fourteen days; Acts 28:1 says “the island was called Malta.” The ship had earlier sheltered off Crete, and later the travellers stop at Syracuse in Sicily (Acts 28:12).",
      world:
        "Ships stopped sailing the open Mediterranean in winter because storms were dangerous. Grain ships from Alexandria, like the one in Acts 27:6, carried Egypt's wheat to Rome.",
      theirEyes: "After two weeks without seeing sun or stars, 276 people on board (Acts 27:37) struggled ashore on a beach they did not recognise.",
      debate:
        "The Greek name is Melitē. Most scholars identify it with Malta; a few have argued for other islands, such as Mljet in Croatia or Cephalonia in Greece.",
    },
    confidence: "mainstream",
    references: ["Acts 27:6–44", "Acts 28:1–12"],
    sources: [scripture, { kind: "reference", citation: "“Malta,” Encyclopaedia Britannica (history section)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "chu-011",
    era: "early-church",
    level: 3,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Speaking in Athens at the Areopagus, Paul mentions an altar with what inscription?",
    choices: ["TO ZEUS THE SAVIOUR", "TO AN UNKNOWN GOD", "TO THE DIVINE CAESAR", "TO ATHENA OF THE CITY"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 17:22–23: “You men of Athens, I perceive that you are very religious in all things,” Paul says, adding that he found an altar inscribed “TO AN UNKNOWN GOD.” Among those who believed were Dionysius the Areopagite and a woman named Damaris (Acts 17:34).",
      world:
        "The Areopagus (“Hill of Ares”) was both a rocky hill and the name of Athens' ancient council. The travel writer Pausanias mentions altars “of gods called Unknown” near Athens (Description of Greece 1.1.4).",
      theirEyes:
        "Philosophers who spent their time talking about the latest new ideas (Acts 17:21) listened politely — until Paul spoke of the dead rising, when some laughed.",
    },
    confidence: "settled",
    references: ["Acts 17:16–34"],
    sources: [scripture, { kind: "primary", citation: "Pausanias, Description of Greece 1.1.4" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-012",
    era: "early-church",
    level: 3,
    category: "neighbours",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Ephesus, silversmiths started a riot against Paul, shouting the name of which goddess?",
    choices: ["Athena", "Aphrodite", "Isis", "Artemis"],
    answer: 3,
    explanation: {
      textSays:
        "Acts 19:24–34: Demetrius, “a silversmith, who made silver shrines of Artemis,” warns that Paul's preaching threatens their trade. The crowd fills the theatre shouting, “Great is Artemis of the Ephesians!”",
      world:
        "The Temple of Artemis at Ephesus was counted among the Seven Wonders of the ancient world. The great theatre where the crowd gathered still stands and held around 20,000–25,000 people.",
      theirEyes: "For a craftsman who sold souvenirs to pilgrims, a preacher who said that gods made with hands are no gods at all (Acts 19:26) was bad for business.",
    },
    confidence: "settled",
    references: ["Acts 19:23–41"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Temple of Artemis,” Encyclopaedia Britannica" },
      { kind: "archaeology", citation: "Theatre of Ephesus, Austrian Archaeological Institute excavations" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-013",
    era: "early-church",
    level: 3,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Acts says Aquila and Priscilla left Italy because which emperor had ordered Jews to leave Rome?",
    choices: ["Augustus", "Nero", "Claudius", "Vespasian"],
    answer: 2,
    explanation: {
      textSays: "Acts 18:2: they had recently come from Italy “because Claudius had commanded all the Jews to depart from Rome.”",
      world:
        "The Roman historian Suetonius writes that Claudius expelled from Rome the Jews who were constantly causing disturbances “at the instigation of Chrestus” (Claudius 25.4). The later writer Orosius dates this to 49 CE.",
      theirEyes: "A Jewish workshop family in Rome had to pack up its tools and start again in Corinth — where a new partner, Paul, walked in.",
      debate:
        "Many scholars think “Chrestus” is a garbled reference to Christ, meaning arguments over Jesus in Rome's synagogues; others think it was a different person. Cassius Dio (60.6.6) instead says Claudius banned Jewish meetings in 41 CE, and the relationship between the two reports is debated.",
    },
    confidence: "settled",
    references: ["Acts 18:1–3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Suetonius, Life of Claudius 25.4" },
      { kind: "primary", citation: "Orosius, History Against the Pagans 7.6.15; Cassius Dio, Roman History 60.6.6" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-014",
    era: "early-church",
    level: 3,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to the historian Tacitus, whom did Nero blame for the great fire of Rome in 64 CE?",
    choices: ["The Christians", "The Senate", "Egyptian merchants", "His own Praetorian Guard"],
    answer: 0,
    explanation: {
      world:
        "Tacitus writes that, to end the rumour that he had ordered the fire, Nero blamed and cruelly punished the “Christians,” named after Christus, who had been executed under Pontius Pilate (Annals 15.44). Tacitus himself despised the Christians, yet wrote that their cruel punishment stirred pity, since they were destroyed to satisfy one man's savagery rather than for the public good.",
      theirEyes:
        "With much of their city burned, frightened Romans wanted someone to blame — and a small, unfamiliar group was an easy target.",
      tradition: {
        christian:
          "1 Clement 5 (c. 96 CE) honours Peter and Paul as martyrs, and Eusebius (Church History 2.25) places their deaths in Rome under Nero.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Tacitus, Annals 15.38–44" },
      { kind: "primary", citation: "1 Clement 5; Eusebius, Church History 2.25" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-015",
    era: "early-church",
    level: 3,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Roman coins stamped IVDAEA CAPTA (“Judaea captured”) celebrated what?",
    choices: [
      "Pompey entering Jerusalem in 63 BCE",
      "Rome's victory in the Jewish War of 66–70 CE",
      "Herod becoming king of Judea",
      "The end of the Bar Kokhba revolt in 135 CE",
    ],
    answer: 1,
    explanation: {
      world:
        "Vespasian and his son Titus, who captured Jerusalem and destroyed the Temple in 70 CE, issued these coins across the empire. A typical design shows a mourning Jewish woman seated under a palm tree, sometimes with a Roman soldier or the emperor standing over her. Josephus, an eyewitness, describes the siege and the burning of the Temple (Jewish War 6.249–266).",
      theirEyes:
        "A Jew in Alexandria or Rome could receive his own people's defeat in his change at the market.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Judaea Capta coinage of Vespasian and Titus (RIC II, Vespasian); D. Hendin, Guide to Biblical Coins" },
      { kind: "primary", citation: "Josephus, Jewish War 6.249–266" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 4 ─────────────
  {
    id: "chu-016",
    era: "early-church",
    level: 4,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "An inscription naming Gallio, the proconsul before whom Paul appeared in Corinth, was found at which site?",
    choices: ["Pompeii", "Qumran", "Babylon", "Delphi"],
    answer: 3,
    explanation: {
      textSays: "Acts 18:12: “But when Gallio was proconsul of Achaia,” Jews in Corinth brought Paul before him; Gallio refused to judge the case (Acts 18:14–16).",
      world:
        "Fragments of a letter from the emperor Claudius, carved in stone at Delphi, name Gallio as proconsul. The letter is dated by Claudius' 26th acclamation as emperor, about 52 CE, which places Gallio's year of office around 51–52 — one of the firmest fixed points for dating Paul's life.",
      theirEyes: "For Paul, standing before the Roman governor, it was a tense moment. Gallio waved the case away as a quarrel about words and names.",
      debate: "Scholars debate whether Gallio's term ran 50–51 or 51–52 CE, but nearly all place Paul in Corinth around 50–52.",
    },
    confidence: "settled",
    references: ["Acts 18:12–17"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Gallio inscription (letter of Claudius), Delphi Archaeological Museum; Dittenberger, SIG³ 801 D" },
      { kind: "scholarship", citation: "J. Murphy-O'Connor, St. Paul's Corinth: Texts and Archaeology (3rd ed., 2002)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-017",
    era: "early-church",
    level: 4,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Philippi, Paul meets Lydia, a businesswoman from Thyatira. According to Acts, what did she sell?",
    choices: ["Olive oil", "Incense", "Purple cloth or dye", "Clay lamps"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 16:14 calls Lydia “a seller of purple, of the city of Thyatira,” a woman who worshipped God. Paul met her among women gathered for prayer by a river outside Philippi, and she and her household were baptised and took the travellers into her home (Acts 16:13–15).",
      world:
        "Purple-dyed cloth was a costly luxury. Thyatira, in the Roman province of Asia (western Turkey), was a city of trade guilds, and inscriptions found there mention a guild of dyers. Thyatira is also one of the seven cities addressed in Revelation (2:18).",
      theirEyes:
        "A trader from Asia, selling fine dyed cloth in a Roman colony in Macedonia, opened her house to a group of travelling Jewish teachers.",
      debate: "The Greek word porphyropōlis could mean a dealer in purple dye or in purple-dyed cloth; either way, her trade was in purple.",
    },
    confidence: "settled",
    references: ["Acts 16:13–15", "Revelation 2:18"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "W. M. Ramsay, The Letters to the Seven Churches of Asia (1904), on the trade guilds of Thyatira" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "chu-018",
    era: "early-church",
    level: 4,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What do scholars call Gentiles, like Cornelius in Acts, who worshipped Israel's God without fully converting to Judaism?",
    choices: ["God-fearers", "Zealots", "Sadducees", "Essenes"],
    answer: 0,
    explanation: {
      textSays:
        "Acts 10:1–2 describes Cornelius, a centurion of the Italian Regiment, as “a devout man, and one who feared God with all his house.” In a diaspora synagogue, Paul addresses both the men of Israel and those who fear God (Acts 13:16).",
      world:
        "A large inscription from Aphrodisias in Turkey lists donors including people called theosebeis (“God-worshippers”) alongside Jews and converts, though its date is debated.",
      theirEyes: "A Roman officer sitting at the back of a synagogue, listening to Moses and the Prophets, was not unusual in the cities of the empire.",
      tradition: {
        jewish:
          "Josephus says the Temple's wealth came from Jews everywhere and from “those that worshipped God” in Asia and Europe (Antiquities 14.7.2), suggesting Gentile sympathisers supported it.",
      },
      debate: "Scholars debate how formal a group the “God-fearers” were, and whether the Aphrodisias inscription dates to the 3rd century or later.",
    },
    confidence: "mainstream",
    references: ["Acts 10:1–2", "Acts 13:16"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.7.2" },
      { kind: "archaeology", citation: "Aphrodisias donor inscription; J. Reynolds and R. Tannenbaum, Jews and God-Fearers at Aphrodisias (1987)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-019",
    era: "early-church",
    level: 4,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Josephus, who led the rebels on Masada when the Romans besieged it after the fall of Jerusalem?",
    choices: ["Simon bar Kokhba", "Eleazar ben Yair", "Judas Maccabeus", "John of Gischala"],
    answer: 1,
    explanation: {
      world:
        "Josephus names Eleazar son of Jairus (ben Yair) as a rebel who fled to Masada in 66 CE (Jewish War 2.447), and later calls him the commander of the Sicarii there and a descendant of Judas the Galilean (Jewish War 7.253). The Roman governor Flavius Silva built a huge siege ramp, still visible today. Josephus says that when the walls were breached, the defenders chose death over capture (Jewish War 7.320–401).",
      theirEyes:
        "From the desert fortress, the last rebels could see the Roman camps and the ramp creeping toward them, day after day.",
      debate:
        "The fall is dated 73 or 74 CE; an inscription about Silva's career has led some scholars to prefer 74. Historians also debate how far Josephus' account of the end is accurate. Yigael Yadin excavated Masada in 1963–65.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Jewish War 2.447; 7.252–406" },
      { kind: "archaeology", citation: "Y. Yadin, Masada: Herod's Fortress and the Zealots' Last Stand (1966)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-020",
    era: "early-church",
    level: 4,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Just after this era (c. 112 CE), the governor Pliny told Trajan that Christians met before dawn to sing a hymn to whom?",
    choices: ["The emperor", "Artemis", "The Sun", "Christ, “as to a god”"],
    answer: 3,
    explanation: {
      world:
        "Pliny the Younger, governing Bithynia-Pontus (northern Turkey), wrote that Christians met on a fixed day before dawn, sang a hymn “to Christ as to a god,” and bound themselves by oath not to steal, commit adultery or break their word, later gathering again to eat ordinary food (Letters 10.96). Trajan replied that Christians should not be hunted out (10.97). It is one of the earliest descriptions of Christian worship by an outsider.",
      theirEyes:
        "A slave or farmworker had to slip out before the working day began to meet with fellow believers.",
    },
    confidence: "settled",
    references: [],
    sources: [{ kind: "primary", citation: "Pliny the Younger, Letters 10.96–97" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 5 ─────────────
  {
    id: "chu-021",
    era: "early-church",
    level: 5,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which of these cities is NOT one of the seven churches addressed in Revelation?",
    choices: ["Pergamum", "Laodicea", "Corinth", "Thyatira"],
    answer: 2,
    explanation: {
      textSays:
        "Revelation 1:11: “send to the seven assemblies: to Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and to Laodicea.” Each receives a message in chapters 2–3.",
      world:
        "All seven were cities of the Roman province of Asia, in western Turkey, roughly along a circular road. Corinth was in Greece. Irenaeus dated John's vision to the end of Domitian's reign, about 95 CE (Against Heresies 5.30.3).",
      theirEyes: "A messenger carrying the scroll could travel the loop from Ephesus to Laodicea, reading it aloud in each city.",
      debate: "Most scholars accept a date in the 90s CE; some argue for the late 60s, after Nero.",
    },
    confidence: "settled",
    references: ["Revelation 1:11", "Revelation 2:1–3:22"],
    sources: [scripture, { kind: "primary", citation: "Irenaeus, Against Heresies 5.30.3" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-022",
    era: "early-church",
    level: 5,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Stephen's opponents included members of a Jerusalem synagogue of “Libertines” (Acts 6:9). What does “Libertines” mean?",
    choices: ["Freedmen (former slaves)", "Temple guards", "Tax collectors", "Members of a priestly family"],
    answer: 0,
    explanation: {
      textSays:
        "Acts 6:9 names “the synagogue called ‘The Libertines’,” along with Cyrenians and Alexandrians — Jews from the diaspora living in Jerusalem.",
      world:
        "Libertini is the Latin word for freed slaves. Philo says most Jews in Rome were freedmen, brought to Italy as prisoners of war and later set free by their owners (Embassy to Gaius 155). Some of their descendants evidently returned to Jerusalem.",
      theirEyes: "A man whose grandfather had been sold in Rome after Pompey's conquest might now pray in Jerusalem among others with the same story.",
      debate: "A few scholars have proposed emending the word to “Libyans,” to match the Cyrenians and Alexandrians, but most keep “Freedmen.”",
    },
    confidence: "mainstream",
    references: ["Acts 6:9"],
    sources: [scripture, { kind: "primary", citation: "Philo, Embassy to Gaius 155" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-023",
    era: "early-church",
    level: 5,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the book of Acts ends by describing Paul's execution in Rome.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 28:30–31 ends with Paul under guard in Rome: “Paul stayed two whole years in his own rented house,” welcoming visitors and teaching. Acts 28:16 says he lived “with the soldier who guarded him.”",
      world: "Acts says nothing of the outcome of his appeal to the emperor.",
      theirEyes: "Visitors to Paul's lodgings would have found a prisoner chained to a soldier — yet still receiving guests and teaching.",
      tradition: {
        christian:
          "1 Clement 5 (c. 96 CE) speaks of Paul bearing witness before rulers, and later tradition says he was beheaded in Rome under Nero (Eusebius, Church History 2.25).",
      },
      debate: "Why Acts stops there is debated: perhaps it was written before Paul died, or the author chose to end with the message reaching Rome.",
    },
    confidence: "settled",
    references: ["Acts 28:16", "Acts 28:30–31"],
    sources: [scripture, { kind: "primary", citation: "1 Clement 5; Eusebius, Church History 2.25" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-024",
    era: "early-church",
    level: 5,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Paul says he escaped from Damascus in a basket, let down from a window, to avoid the governor of which king?",
    choices: ["Herod Antipas", "Antiochus IV", "Ptolemy II", "Aretas"],
    answer: 3,
    explanation: {
      textSays:
        "2 Corinthians 11:32–33: “In Damascus the governor under King Aretas guarded the Damascenes' city, desiring to arrest me. I was let down in a basket through a window by the wall, and escaped his hands.” Acts 9:23–25 tells the escape too, but blames Jewish opponents.",
      world:
        "Aretas IV ruled the Nabataean kingdom, with its capital at Petra, until about 40 CE. Josephus tells how he defeated Herod Antipas, who had divorced Aretas' daughter (Antiquities 18.5.1). Because Aretas died around 40, the escape helps date Paul's early career to the 30s.",
      theirEyes: "Dangling in a basket down the city wall at night was an undignified way out — and Paul lists it among his hardships.",
      debate: "Historians debate how a Nabataean official came to control or watch Damascus, which was normally under Roman Syria.",
    },
    confidence: "settled",
    references: ["2 Corinthians 11:32–33", "Acts 9:23–25"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.5.1" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-025",
    era: "early-church",
    level: 5,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Near Rome, believers met Paul at “The Market of Appius.” This stopping place was on which famous Roman road?",
    choices: ["The Via Egnatia", "The Via Appia", "The King's Highway", "The Silk Road"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 28:13–15: after landing at Puteoli, Paul travels toward Rome, and believers come to meet him as far as “The Market of Appius and The Three Taverns.”",
      world:
        "Forum Appii and Tres Tabernae were stations on the Via Appia, the road from Rome to southern Italy built by Appius Claudius in 312 BCE. Horace describes Forum Appii as crowded with boatmen and stingy innkeepers (Satires 1.5.3–4). The Via Egnatia ran across the Balkans instead, through Philippi and Thessalonica, cities Paul visited in Macedonia.",
      theirEyes: "After a shipwreck and a winter on Malta, walking the last miles on a paved road with friends coming out to meet him must have felt like rescue.",
    },
    confidence: "settled",
    references: ["Acts 28:13–15"],
    sources: [
      scripture,
      { kind: "primary", citation: "Horace, Satires 1.5.1–6" },
      { kind: "reference", citation: "“Appian Way,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
