import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const earlyChurch2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "chu-026",
    era: "early-church",
    level: 6,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Acts 1, over how many days did the risen Jesus appear to the apostles before he was taken up?",
    choices: ["Seven", "Twelve", "Forty", "Fifty"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 1:3 says he showed himself alive “by many proofs, appearing to them over a period of forty days.” Then “he was taken up, and a cloud received him out of their sight” (Acts 1:9).",
      world:
        "Forty is a recurring span in the Bible: Moses on the mountain forty days and nights (Exodus 24:18), Elijah's forty-day journey to Horeb (1 Kings 19:8), and Jesus' forty days in the wilderness (Luke 4:1–2).",
      theirEyes:
        "For the disciples, these weeks between Passover and Pentecost were a strange in-between time, ending on the Mount of Olives with two men in white asking why they stood staring at the sky.",
      tradition: {
        christian:
          "Ascension Day falls on the fortieth day of Easter, counting Easter Sunday as day one, so it is a Thursday. Some churches move its celebration to the following Sunday.",
      },
      debate:
        "Read on its own, Luke 24:50–51 seems to place the parting on Easter day itself (and some early manuscripts lack the words “and was carried up into heaven”). Many scholars think the same author tells the story briefly in the Gospel and more fully in Acts.",
    },
    confidence: "settled",
    references: ["Acts 1:3", "Acts 1:9–12", "Luke 24:50–51", "Exodus 24:18", "1 Kings 19:8", "Luke 4:1–2"],
    sources: [scripture, { kind: "scholarship", citation: "B. M. Metzger, A Textual Commentary on the Greek New Testament (2nd ed., 1994), on Luke 24:51" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-027",
    era: "early-church",
    level: 6,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "How does Acts say the apostles chose Matthias to replace Judas among the Twelve?",
    choices: ["By a vote of the crowd", "By drawing lots", "The high priest appointed him", "Peter named him alone"],
    answer: 1,
    explanation: {
      textSays:
        "The candidate had to have been with them from John's baptism to the day Jesus was taken up (Acts 1:21–22). They put forward “Joseph called Barsabbas, who was also called Justus, and Matthias,” prayed, and “drew lots for them, and the lot fell on Matthias” (Acts 1:23–26). Matthias is not mentioned again in the New Testament.",
      theirEyes:
        "Among a gathering of about 120 believers (Acts 1:15), the lot was drawn, and they trusted that God, not their own preferences, had made the choice.",
      tradition: {
        jewish:
          "Lots were a normal way to let God decide. Luke 1:9 says it was by lot that the priest Zechariah was chosen to burn incense in the Temple, and 1 Chronicles 24:5 divides the priests' duties by lot.",
      },
    },
    confidence: "settled",
    references: ["Acts 1:15–26", "Luke 1:9", "1 Chronicles 24:5"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-028",
    era: "early-church",
    level: 6,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Peter and John went to the Temple “at the hour of prayer, the ninth hour.” Roughly what time was that?",
    choices: ["About 9 in the morning", "About noon", "About 9 at night", "About 3 in the afternoon"],
    answer: 3,
    explanation: {
      textSays:
        "Acts 3:1 sets the healing of the lame man at the Beautiful Gate at the ninth hour. Cornelius also prays at the ninth hour (Acts 10:3, 30), while Peter's rooftop prayer is “about noon” (Acts 10:9).",
      world:
        "Daylight hours were counted from sunrise, about 6 a.m., so the ninth hour was mid-afternoon. Josephus says that even during Pompey's siege of 63 BCE the priests kept offering the sacrifices twice a day, in the morning and about the ninth hour (Antiquities 14.65).",
      theirEyes:
        "As the afternoon sacrifice drew worshippers through the gates, a beggar who had sat there for years knew it was the best time to ask for alms.",
    },
    confidence: "settled",
    references: ["Acts 3:1–10", "Acts 10:3", "Acts 10:9", "Acts 10:30"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.65" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-029",
    era: "early-church",
    level: 6,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Acts 11, which prophet from Jerusalem stood up in Antioch and predicted a great famine?",
    choices: ["Ananias", "Gamaliel", "Agabus", "Stephen"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 11:28: Agabus “indicated by the Spirit that there should be a great famine all over the world, which also happened in the days of Claudius.” The disciples in Antioch sent relief to Judea “by the hands of Barnabas and Saul” (11:30).",
      world:
        "Suetonius says Claudius faced grain shortages caused by continual poor harvests (Claudius 18.2). Josephus describes “that great famine” in Judea under the governors Fadus and Tiberius Alexander, about 44–48 CE (Antiquities 20.101).",
      theirEyes:
        "A believer in Antioch, a rich trading city, put coins in a bag for people he had never met in Judea, where bread was getting scarce.",
      debate:
        "No single famine struck the whole empire at once; most historians think Acts refers to a series of regional shortages under Claudius.",
    },
    confidence: "settled",
    references: ["Acts 11:27–30"],
    sources: [
      scripture,
      { kind: "primary", citation: "Suetonius, Life of Claudius 18.2" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 20.101" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-030",
    era: "early-church",
    level: 6,
    category: "daily-life",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: when Peter knocked after escaping prison, the servant girl Rhoda ran inside to tell everyone without opening the gate.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Acts 12:14: “When she recognized Peter's voice, she didn't open the gate for joy, but ran in and reported that Peter was standing in front of the gate.” The others told her, “You are crazy!” and then, “It is his angel” (12:15), while Peter kept knocking.",
      world:
        "The house belonged to Mary, the mother of John Mark (12:12). A gateway and a servant suggest a fairly well-off household. Before there were church buildings, believers met in homes like this one (Acts 2:46).",
      theirEyes:
        "Inside, people were praying for Peter's release — and when the answer was knocking at the door, they told the girl she was out of her mind.",
    },
    confidence: "settled",
    references: ["Acts 12:12–17", "Acts 2:46"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "chu-031",
    era: "early-church",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Acts 1, the field linked with Judas' death was called “Akeldama.” What does the name mean?",
    choices: ["Field of blood", "Garden of olives", "Valley of tears", "House of bread"],
    answer: 0,
    explanation: {
      textSays:
        "Acts 1:19: everyone in Jerusalem knew “that in their language that field was called ‘Akeldama,’ that is, ‘The field of blood.’” Matthew 27:7–8 also says a field “has been called ‘The Field of Blood’ to this day.”",
      world:
        "“In their language” means Aramaic, the everyday language of Jerusalem: ḥaqel dema, “field of blood.” Acts, written in Greek, keeps the local name and translates it.",
      theirEyes:
        "Jerusalemites passing the plot gave it a grim nickname, and the name stuck.",
      debate:
        "The two accounts differ: in Acts, Judas himself acquires a field and falls headlong; in Matthew, he hangs himself and the chief priests buy “the potter's field” with his returned silver to bury strangers. Scholars and commentators have long discussed how the traditions relate.",
    },
    confidence: "settled",
    references: ["Acts 1:18–19", "Matthew 27:3–8"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-032",
    era: "early-church",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: in Acts 5, Peter tells Ananias that he had been required to give all the money from his land.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Peter says: “While you kept it, didn't it remain your own? After it was sold, wasn't it in your power?” (Acts 5:4). The fault was the lie — keeping back part of the price, with his wife Sapphira's knowledge, while presenting the rest as the whole. “You haven't lied to men, but to God.” Ananias, and later Sapphira, fall down dead (5:5, 10).",
      world:
        "The story follows straight on from Barnabas, who sold a field and laid all the money at the apostles' feet (4:36–37).",
      theirEyes: "Great fear came on the whole assembly (5:11): giving was free, but pretending was not.",
      tradition: {
        christian:
          "Commentators often compare Achan, who secretly kept back plunder devoted to God (Joshua 7:1); the Greek Old Testament there uses the same verb for “kept back” as Acts 5:2.",
      },
    },
    confidence: "settled",
    references: ["Acts 4:36–5:11", "Joshua 7:1"],
    sources: [scripture, { kind: "scholarship", citation: "F. F. Bruce, The Book of the Acts (NICNT, rev. ed. 1988), on Acts 5:1–11" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-033",
    era: "early-church",
    level: 7,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Acts says the first believers “had all things in common.” Which Jewish group did Josephus say also pooled its members' property?",
    choices: ["The Sadducees", "The Herodians", "The Samaritans", "The Essenes"],
    answer: 3,
    explanation: {
      textSays:
        "Acts 2:44–45: “All who believed were together, and had all things in common. They sold their possessions and goods, and distributed them to all, according as anyone had need.” See also Acts 4:32.",
      world:
        "Josephus says those who joined the Essenes handed over their property to be held in common by the whole order, so that no one had more than another (Jewish War 2.122). Philo also says they shared a common purse (Every Good Man Is Free 85–86).",
      theirEyes:
        "A Jerusalemite who knew of the Essenes might have recognised something familiar in this new group's shared meals and shared purse.",
      tradition: {
        jewish:
          "The Community Rule from Qumran says a new member's property was merged with the community's after a period of probation (1QS 6.19–22). In Acts, by contrast, selling property is voluntary (Acts 5:4).",
      },
    },
    confidence: "settled",
    references: ["Acts 2:44–45", "Acts 4:32–35", "Acts 5:4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 2.122; Philo, Every Good Man Is Free 85–86" },
      { kind: "primary", citation: "Dead Sea Scrolls, Community Rule (1QS) 6.19–22" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-034",
    era: "early-church",
    level: 7,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Acts 6, the Greek-speaking “Hellenists” complained that which members of their group were overlooked in the daily distribution?",
    choices: ["Their children", "Their widows", "Their elders", "Their servants"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 6:1: “a complaint arose from the Hellenists against the Hebrews, because their widows were neglected in the daily service.” The Twelve asked the community to choose seven men to oversee it, so that they could keep to prayer and “the ministry of the word” (6:2–4).",
      world:
        "Widows without family support were among the most vulnerable people in the ancient world. The Torah repeatedly commands care for the widow, the orphan and the foreigner (Deuteronomy 14:29; 24:19).",
      theirEyes:
        "A Greek-speaking widow who had moved to Jerusalem from abroad, far from her relatives, depended on the community's daily food.",
      debate:
        "Most scholars take “Hellenists” to mean Greek-speaking Jews, many with roots in the Diaspora, and “Hebrews” to mean Aramaic-speaking Jews. Some think the groups also differed in outlook, for example on the Temple.",
    },
    confidence: "settled",
    references: ["Acts 6:1–6", "Deuteronomy 14:29", "Deuteronomy 24:19"],
    sources: [scripture, { kind: "scholarship", citation: "M. Hengel, Between Jesus and Paul (1983), ch. 1, “Between Jesus and Paul: The ‘Hellenists’, the ‘Seven’ and Stephen”" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-035",
    era: "early-church",
    level: 7,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Which member of the Twelve does Acts 12 say King Herod had killed with the sword?",
    choices: ["Peter", "Andrew", "Matthias", "James, the brother of John"],
    answer: 3,
    explanation: {
      textSays:
        "Acts 12:2–3: “He killed James, the brother of John, with the sword. When he saw that it pleased the Jews, he proceeded to seize Peter also.” He is the only one of the Twelve whose martyrdom the New Testament records.",
      world:
        "This “King Herod” is Herod Agrippa I, grandson of Herod the Great; Claudius made him king of Judea in 41 CE (Josephus, Antiquities 19.274). Josephus describes him as fond of living in Jerusalem and careful to keep the laws of his country (Antiquities 19.331).",
      theirEyes: "For the believers, losing one of the Twelve was a shock — and now Peter was in a cell awaiting the same fate.",
      tradition: {
        christian:
          "Eusebius reports Clement of Alexandria's story that James's accuser was so moved that he declared himself a Christian and was beheaded with him (Church History 2.9).",
      },
    },
    confidence: "settled",
    references: ["Acts 12:1–4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 19.274; 19.331" },
      { kind: "primary", citation: "Eusebius, Church History 2.9" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "chu-036",
    era: "early-church",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When the council wanted to kill the apostles, what did the Pharisee Gamaliel advise?",
    choices: [
      "Stone them at once",
      "Hand them over to the Romans",
      "Leave them alone: a merely human movement will fail",
      "Banish them to Galilee",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Gamaliel, “a teacher of the law, honored by all the people” (Acts 5:34), said: “if this counsel or this work is of men, it will be overthrown. But if it is of God, you will not be able to overthrow it” (5:38–39). The council agreed, but had the apostles beaten before releasing them (5:40).",
      theirEyes: "The apostles left “rejoicing that they were counted worthy to suffer dishonor for Jesus' name” (5:41).",
      tradition: {
        jewish:
          "Josephus says the Pharisees were “not apt to be severe in punishments” (Antiquities 13.294). He also describes Gamaliel's son Simon as a Jerusalemite of “a very noble family” and “of the sect of the Pharisees” (Life 191). Acts says Paul studied under Gamaliel (Acts 22:3).",
      },
    },
    confidence: "settled",
    references: ["Acts 5:33–42", "Acts 22:3"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.294; Life 190–192" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-037",
    era: "early-church",
    level: 8,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The believers met in “Solomon's porch” in the Temple courts. On which side of the Temple did Josephus place this colonnade?",
    choices: ["North", "South", "East", "West"],
    answer: 2,
    explanation: {
      textSays:
        "After the lame man is healed, people run to the apostles “in the porch that is called Solomon's” (Acts 3:11), and the believers met “with one accord in Solomon's porch” (5:12). John 10:23 places Jesus there in winter.",
      world:
        "Josephus says that in the 60s CE workers asked Agrippa II to rebuild “the eastern cloisters,” which people called the work of King Solomon (Antiquities 20.220–221). The south side held a different hall, Herod's Royal Stoa (Antiquities 15.411–416).",
      theirEyes:
        "A long, roofed colonnade facing the Mount of Olives gave shade in summer and shelter in winter — a natural place for crowds and teachers.",
      debate:
        "Few historians think Solomon built it; the name probably attached to an old eastern colonnade. Scholars debate how much of it predated Herod.",
    },
    confidence: "mainstream",
    references: ["Acts 3:11", "Acts 5:12", "John 10:23"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 15.411–416; 20.219–222" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-038",
    era: "early-church",
    level: 8,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The word “simony” comes from Simon, the magician of Samaria in Acts 8. What does it mean?",
    choices: [
      "Practising magic in church",
      "Buying or selling church offices or spiritual powers",
      "Being baptised twice",
      "Preaching without permission",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Simon, whom the Samaritans called “that great power of God” (Acts 8:10), was baptised after Philip's preaching. When he saw the Spirit given through the apostles' hands, he offered money. Peter replied, “May your silver perish with you, because you thought you could obtain the gift of God with money!” (8:18–20).",
      theirEyes: "A famous wonder-worker found that this was one power he could not buy.",
      tradition: {
        christian:
          "Justin Martyr, himself from Samaria, says Simon came from the village of Gitta and was honoured in Rome with a statue inscribed “Simoni Deo Sancto” (First Apology 26). An inscribed stone found on the Tiber Island in 1574 is dedicated “Semoni Sanco Deo” to Semo Sancus, a Sabine god, so most scholars think Justin misread such an inscription. Later writers called Simon the father of heresies (Irenaeus, Against Heresies 1.23), and the church condemned buying offices as “simony.”",
      },
    },
    confidence: "settled",
    references: ["Acts 8:9–24"],
    sources: [
      scripture,
      { kind: "primary", citation: "Justin Martyr, First Apology 26; Irenaeus, Against Heresies 1.23" },
      { kind: "reference", citation: "“Simony,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-039",
    era: "early-church",
    level: 8,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Joppa, Acts says Peter raised a disciple named Tabitha, also called Dorcas. What do both names mean?",
    choices: ["Dove", "Lily", "Gazelle", "Morning star"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 9:36: “Tabitha, which when translated means Dorcas,” was “full of good works and acts of mercy.” The widows stood weeping, “showing the tunics and other garments which Dorcas had made” (9:39). Just before, at nearby Lydda, Peter heals Aeneas, bedridden for eight years (9:32–35).",
      world:
        "Tabitha is Aramaic and Dorcas is Greek; both mean “gazelle.” People in the coastal towns often lived in both languages. Lydda is today's Lod, and Joppa is Jaffa, part of Tel Aviv-Yafo.",
      theirEyes:
        "The widows of Joppa held up the clothes she had sewn for them — the best proof of who she had been.",
    },
    confidence: "settled",
    references: ["Acts 9:32–43"],
    sources: [scripture, { kind: "reference", citation: "W. Bauer et al., A Greek-English Lexicon of the New Testament (BDAG, 3rd ed., 2000), s.v. Dorkas, Tabitha" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-040",
    era: "early-church",
    level: 8,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Peter's rooftop vision at Joppa, what did the voice tell him to do with the animals in the great sheet?",
    choices: ["Set them free", "Offer them in the Temple", "Count them", "Kill and eat"],
    answer: 3,
    explanation: {
      textSays:
        "Acts 10:13–15: “Rise, Peter, kill and eat!” Peter answered, “Not so, Lord; for I have never eaten anything that is common or unclean.” The voice replied, “What God has cleansed, you must not call unclean.” This happened three times; then Cornelius' messengers arrived. Peter later says God showed him “that I shouldn't call any man unholy or unclean” (10:28).",
      theirEyes: "A hungry fisherman, waiting for lunch on a flat roof by the sea, is told to eat what he has avoided all his life.",
      tradition: {
        jewish:
          "The food laws (Leviticus 11) were a mark of loyalty to God. 1 Maccabees 1:62–63 honours Jews who chose to die rather than eat unclean food under Antiochus IV.",
        christian:
          "Many Christians read the vision as setting aside the food laws; Acts itself applies it first to accepting Gentile people (10:28).",
      },
    },
    confidence: "settled",
    references: ["Acts 10:9–16", "Acts 10:28", "Leviticus 11:1–47"],
    sources: [scripture, { kind: "primary", citation: "1 Maccabees 1:62–63" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "chu-041",
    era: "early-church",
    level: 9,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Joppa, where Peter was called to visit the Gentile Cornelius, is also where which prophet boarded a ship?",
    choices: ["Elijah", "Jonah", "Jeremiah", "Ezekiel"],
    answer: 1,
    explanation: {
      textSays:
        "Jonah 1:3: Jonah “went down to Joppa, and found a ship going to Tarshish” to flee from Yahweh rather than preach to Nineveh. In Acts, Peter stays at Joppa “with a tanner named Simon” (Acts 9:43) and is sent from there to a Roman officer's house (10:5–23).",
      world:
        "Joppa (modern Jaffa) was the old port on Judea's coast. 2 Chronicles 2:16 says timber for Solomon's Temple was floated there by sea.",
      theirEyes:
        "Two reluctant messengers set out from the same harbour town, both sent by God to foreigners.",
      tradition: {
        christian:
          "Some Christian readers note the echo: Jonah ran away from a mission to Gentiles, while Peter, whom Jesus called “Simon Bar Jonah” (Matthew 16:17), went.",
      },
    },
    confidence: "settled",
    references: ["Jonah 1:3", "Acts 9:43", "Acts 10:5–23", "2 Chronicles 2:16", "Matthew 16:17"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-042",
    era: "early-church",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: in Acts 9, the men travelling with Saul to Damascus also saw Jesus.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 9:7: “The men who traveled with him stood speechless, hearing the sound, but seeing no one.” Saul himself, when his eyes were opened, “saw no one,” and they led him by the hand into Damascus (9:8).",
      theirEyes:
        "Saul's companions were left standing on the road, stunned by something they could not see, and then had to lead their blinded leader into the city.",
      debate:
        "Paul's later retellings vary in detail: in Acts 22:9 his companions “saw the light” but “didn't understand the voice,” and in Acts 26:14 they all fall to the ground. Commentators discuss whether “hearing the sound” and not “understanding the voice” can be reconciled. In none of the three accounts do the companions see Jesus.",
    },
    confidence: "settled",
    references: ["Acts 9:3–8", "Acts 22:6–11", "Acts 26:12–14"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "chu-043",
    era: "early-church",
    level: 9,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "During the famine of the 40s CE, which queen, a convert to Judaism, bought grain in Egypt to feed Jerusalem?",
    choices: ["Cleopatra of Egypt", "Candace of Kush", "Helena of Adiabene", "Berenice of Chalcis"],
    answer: 2,
    explanation: {
      textSays: "Acts 11:28–30 describes a different relief effort: believers in Antioch sent help to Judea with Barnabas and Saul.",
      world:
        "Josephus says Queen Helena of Adiabene (in northern Mesopotamia), who had adopted Judaism, sent servants to Alexandria to buy grain and to Cyprus for dried figs, and handed them out to the hungry; her son Izates sent money to Jerusalem's leaders (Antiquities 20.49–53, 20.101). He adds that she was buried near Jerusalem (20.95).",
      theirEyes:
        "Jerusalem's poor, queuing for bread, owed their meal to a royal convert from beyond the Euphrates.",
      debate:
        "Many scholars identify the so-called Tomb of the Kings in Jerusalem, excavated by Félicien de Saulcy in 1863, as Helena's tomb. A sarcophagus from it, now in the Louvre, is inscribed in Aramaic for “Queen Ṣadan”; whether Ṣadan was Helena's own name or another royal woman is not certain.",
    },
    confidence: "settled",
    references: ["Acts 11:28–30"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 20.49–53; 20.95; 20.101" },
      { kind: "archaeology", citation: "Sarcophagus inscribed for Queen Ṣadan, Tomb of the Kings, Jerusalem (Musée du Louvre)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-044",
    era: "early-church",
    level: 9,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "One of the Seven, Nicolaus, is called “a proselyte of Antioch” (Acts 6:5). What was a proselyte?",
    choices: ["A Jew born in Jerusalem", "A Temple guard", "A Gentile who had converted to Judaism", "A tax collector"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 6:5 lists seven men; only Nicolaus is called a proselyte, which suggests the others were born Jews. The Pentecost crowd also included “both Jews and proselytes” (Acts 2:10).",
      world:
        "The Greek prosēlytos means “one who has come over.” Describing the Jews of Antioch, Josephus says they “made proselytes of a great many of the Greeks perpetually” (Jewish War 7.45).",
      theirEyes:
        "A Greek of Antioch who had taken on the God and law of Israel, Nicolaus then joined a movement that was about to welcome Gentiles too.",
      tradition: {
        christian:
          "Irenaeus linked the “Nicolaitans” of Revelation 2:6 to this Nicolaus (Against Heresies 1.26.3); Clement of Alexandria defended him (Stromata 3.4).",
      },
    },
    confidence: "settled",
    references: ["Acts 6:5", "Acts 2:10", "Revelation 2:6"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 7.43–45" },
      { kind: "primary", citation: "Irenaeus, Against Heresies 1.26.3; Clement of Alexandria, Stromata 3.4" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-045",
    era: "early-church",
    level: 9,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Josephus, like Acts, says Herod Agrippa I was hailed as a god at Caesarea shortly before he died.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Acts 12:21–23: in royal clothing, Herod gave a speech, and the people shouted, “The voice of a god, and not of a man!” Because “he didn't give God the glory,” an angel struck him, and “he was eaten by worms and died.”",
      world:
        "Josephus says that at games in Caesarea in honour of Caesar, Agrippa appeared at daybreak in a garment “made wholly of silver” that shone in the sun. Flatterers called him a god, and he did not rebuke them. Seized by violent pains in his belly, he died five days later, aged 54, in the seventh year of his reign — 44 CE (Antiquities 19.343–350).",
      theirEyes: "The crowd in the theatre saw a king glittering like a god — and within days heard that he was dead.",
      debate:
        "The details differ (Acts has envoys from Tyre and Sidon, 12:20; Josephus has a festival and an omen), but the two accounts agree on the place, the flattery and the sudden fatal illness. Most scholars think Luke and Josephus wrote independently.",
    },
    confidence: "settled",
    references: ["Acts 12:19–23"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 19.343–350 (19.8.2)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "chu-046",
    era: "early-church",
    level: 10,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Gamaliel's speech mentions a rebel named Theudas (Acts 5:36). Why do historians find this puzzling?",
    choices: [
      "Josephus dates a Theudas uprising about a decade after the speech",
      "Theudas was a Roman governor, not a rebel",
      "No ancient writer besides Luke mentions any Theudas",
      "Theudas lived a thousand years earlier",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Acts 5:36–37: “before these days Theudas rose up,” with about four hundred men, and “After this man, Judas of Galilee rose up in the days of the enrollment.” The speech is set in the early 30s CE.",
      world:
        "Josephus says that under the governor Fadus (about 44–46 CE) a “magician” named Theudas led crowds with their belongings to the Jordan, promising to divide the river. Roman cavalry killed many, and his head was carried to Jerusalem (Antiquities 20.97–98). Josephus dates the revolt of Judas the Galilean to the census of 6 CE (Antiquities 18.1–10), so Acts also seems to put Theudas before Judas, the reverse of Josephus' order.",
      theirEyes: "Jerusalemites remembered a string of would-be deliverers, each ending in Roman swords.",
      debate:
        "Historians agree that the dates are a puzzle but not on the solution. Some think Luke misdated the Theudas Josephus describes; others propose an earlier rebel with the same fairly common name, perhaps one of the many uprisings after Herod's death in 4 BCE; a few think Josephus is the one in error. Whether Luke knew Josephus' work is also debated.",
    },
    confidence: "mainstream",
    references: ["Acts 5:34–39"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.1–10; 20.97–98" },
      { kind: "scholarship", citation: "J. A. Fitzmyer, The Acts of the Apostles (Anchor Bible 31, 1998), on Acts 5:36" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-047",
    era: "early-church",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Many scholars link Acts' “Beautiful Gate” to a Temple gate Josephus says was made of what?",
    choices: ["Cedar wood", "Corinthian bronze", "Solid gold", "Marble from Paros"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 3:2 and 3:10: the lame man sat daily at “the door of the temple which is called Beautiful,” “the Beautiful Gate.” No other ancient source uses this name.",
      world:
        "Josephus says nine gates were “covered over with gold and silver,” but one outside the inner sanctuary, “of Corinthian brass,” was worth far more (Jewish War 5.201). The Mishnah, a later record (c. 200 CE), names a Nicanor Gate with bronze doors (Middot 2:3). An ossuary found on Mount Scopus in 1902, now in the British Museum, is inscribed in Greek for the family of “Nicanor of Alexandria, who made the doors.”",
      theirEyes: "Pilgrims stopped to admire the gleaming bronze doors — and passed the beggar sitting beside them.",
      debate:
        "Many scholars identify the Beautiful Gate with this bronze gate, often equated with the Nicanor Gate; others suggest an outer eastern gate. Where exactly the Corinthian bronze gate stood (at the entrance to the Women's Court, or between it and the inner court) is also debated.",
    },
    confidence: "mainstream",
    references: ["Acts 3:2", "Acts 3:10"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 5.201; Mishnah Middot 2:3 (later record, c. 200 CE)" },
      { kind: "archaeology", citation: "Nicanor ossuary, Mount Scopus, Jerusalem (British Museum)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-048",
    era: "early-church",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Herod Agrippa I's small bronze coins minted in Jerusalem show no human image. What do they show instead?",
    choices: ["A menorah", "An eagle in a wreath", "The emperor Claudius' head", "A canopy and three ears of barley"],
    answer: 3,
    explanation: {
      world:
        "Agrippa's Jerusalem prutah, dated year 6 of his reign (41/42 CE), shows a fringed canopy (a royal umbrella) with the Greek words “King Agrippa,” and on the reverse three ears of barley. Coins from his mints in non-Jewish cities did carry portraits of himself and the emperor. Avoiding images in Jerusalem fits Josephus' picture of a king who kept the laws of his country there (Antiquities 19.331).",
      textSays: "Acts 12:1 calls him simply “King Herod.”",
      theirEyes:
        "A shopper in Jerusalem paying with Agrippa's coins saw symbols of kingship and harvest, not a face that broke the commandment against images.",
    },
    confidence: "settled",
    references: ["Acts 12:1"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Prutah of Agrippa I, year 6 (41/42 CE), Jerusalem mint; D. Hendin, Guide to Biblical Coins (5th ed., 2010)" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 19.331" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-049",
    era: "early-church",
    level: 10,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Just before his fatal illness, what does Josephus say Herod Agrippa I saw perched above his head?",
    choices: ["An eagle", "An owl", "A dove", "A raven"],
    answer: 1,
    explanation: {
      textSays: "Acts 12:23 says instead that “an angel of the Lord struck him.”",
      world:
        "Josephus says Agrippa saw an owl on a rope over his head and took it as a messenger of bad news, as it had once been of good (Antiquities 19.346). Years earlier, chained as Tiberius' prisoner in Rome, he had leaned on a tree where an owl sat; a German fellow-prisoner foretold his release and rise, but warned he would die five days after seeing the bird again (Antiquities 18.195–202).",
      theirEyes: "At the height of his glory, the king looked up and saw the omen he had dreaded for years.",
      debate:
        "When Eusebius quotes this passage (Church History 2.10), the owl on the rope is missing and Agrippa simply sees an angel above his head. The Greek angelos means both “messenger” and “angel,” and Josephus calls the owl a messenger. Some critics accuse Eusebius of adjusting Josephus to fit Acts; others blame a careless abridgement or a faulty copy.",
    },
    confidence: "settled",
    references: ["Acts 12:21–23"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.195–202; 19.346" },
      { kind: "primary", citation: "Eusebius, Church History 2.10" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-050",
    era: "early-church",
    level: 10,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Acts 11, who began telling non-Jews in Antioch about Jesus, when others spoke “to Jews only”?",
    choices: ["Peter and John", "Paul and Silas", "Unnamed men from Cyprus and Cyrene", "Stephen and the Seven"],
    answer: 2,
    explanation: {
      textSays:
        "Those scattered after Stephen's death spoke “to no one except to Jews only. But there were some of them, men of Cyprus and Cyrene, who, when they had come to Antioch, spoke to the Hellenists, preaching the Lord Jesus” (Acts 11:19–20). Jerusalem then sent Barnabas, himself from Cyprus (4:36), who fetched Saul from Tarsus to teach there for a year (11:22–26).",
      world:
        "Antioch on the Orontes, capital of Roman Syria, was one of the great cities of the empire; Josephus calls it the third city of the Roman world (Jewish War 3.29). He also says its Jews drew many Greeks to their worship (Jewish War 7.45).",
      theirEyes: "Ordinary travellers whose names no one wrote down started a community in a great city where Jews and Gentiles worshipped together.",
      debate:
        "Manuscripts differ between “Hellenists” and “Greeks” in 11:20. Because of the contrast with “Jews only,” most commentators think Gentiles are meant.",
    },
    confidence: "mainstream",
    references: ["Acts 11:19–26", "Acts 4:36"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 3.29; 7.45" },
      { kind: "scholarship", citation: "B. M. Metzger, A Textual Commentary on the Greek New Testament (2nd ed., 1994), on Acts 11:20" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
