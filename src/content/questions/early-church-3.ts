import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const earlyChurch3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "chu-051",
    era: "early-church",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "On Cyprus, the sorcerer Elymas tried to turn the proconsul Sergius Paulus away from Paul's message. What happened to Elymas?",
    choices: ["He was struck dumb", "He fell down dead", "He became blind for a time", "He was thrown into prison"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 13:6–12: Paul tells Elymas (also called Bar Jesus), “you will be blind, not seeing the sun for a season!” A mist and darkness fall on him, and the proconsul, astonished, believes. It is here that Acts first calls Saul “Paul” (13:9).",
      world:
        "Acts' title fits the period: Augustus handed Cyprus to the Senate in 22 BCE, so it was governed by a proconsul rather than an imperial legate.",
      theirEyes:
        "Courtiers in Paphos watched their master's favourite holy man groping for someone to lead him by the hand.",
    },
    confidence: "settled",
    references: ["Acts 13:6–12"],
    sources: [
      scripture,
      { kind: "primary", citation: "Cassius Dio, Roman History 54.4" },
      { kind: "scholarship", citation: "C. K. Barrett, The Acts of the Apostles, vol. 1 (ICC, T&T Clark, 1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-052",
    era: "early-church",
    level: 11,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Lystra, the crowd hailed Paul by the name of which Greek god, “because he was the chief speaker”?",
    choices: ["Zeus", "Ares", "Apollo", "Hermes"],
    answer: 3,
    explanation: {
      textSays:
        "Acts 14:11–13: after a lame man is healed, the crowd cries in the Lycaonian language, “The gods have come down to us in the likeness of men!” The Greek text calls Barnabas Zeus and Paul Hermes; the World English Bible uses their Roman names, “Jupiter” and “Mercury.” The priest of Zeus brings oxen and garlands to sacrifice, and the two tear their clothes in protest.",
      world:
        "Hermes was the messenger and spokesman of the gods. The Roman poet Ovid tells a legend of Jupiter and Mercury visiting the hills of neighbouring Phrygia in disguise, where only the old couple Baucis and Philemon welcomed them. Many commentators think a story like this explains the crowd's reaction.",
      theirEyes:
        "If the gods had once walked this part of the world unrecognised, no one in Lystra wanted to make that mistake.",
    },
    confidence: "settled",
    references: ["Acts 14:8–18"],
    sources: [
      scripture,
      { kind: "primary", citation: "Ovid, Metamorphoses, book 8 (Baucis and Philemon)" },
      { kind: "scholarship", citation: "C. K. Barrett, The Acts of the Apostles, vol. 1 (ICC, T&T Clark, 1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-053",
    era: "early-church",
    level: 11,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Second Timothy says Timothy's faith “lived first” in his grandmother and his mother. What were their names?",
    choices: ["Lydia and Damaris", "Lois and Eunice", "Priscilla and Phoebe", "Mary and Martha"],
    answer: 1,
    explanation: {
      textSays:
        "2 Timothy 1:5 speaks of the faith “in your grandmother Lois and your mother Eunice.” Acts 16:1 says Timothy, from Lystra, was “the son of a Jewess who believed, but his father was a Greek,” and 2 Timothy 3:15 says he had known the holy Scriptures “from infancy.”",
      theirEyes:
        "In a small town with no synagogue mentioned, a boy with a Greek father learned Israel's scriptures at home, from the women of his family.",
      debate:
        "Many modern scholars think 2 Timothy was written after Paul's death in his name; others defend Paul's authorship. Either way, the names belong to the letter's portrait of Timothy's family.",
    },
    confidence: "settled",
    references: ["2 Timothy 1:5", "2 Timothy 3:15", "Acts 16:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Raymond E. Brown, An Introduction to the New Testament (Doubleday, 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-054",
    era: "early-church",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Troas, Paul saw a man in a night vision begging him, “Come over… and help us.” Where was the man from?",
    choices: ["Cyprus", "Egypt", "Macedonia", "Spain"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 16:9: “There was a man of Macedonia standing, begging him and saying, ‘Come over into Macedonia and help us.’” Paul then crosses to Neapolis and Philippi (16:11–12), bringing his message into Europe.",
      world:
        "Right after the vision, Acts switches from “they” to “we” (16:10). These “we” passages recur through the later voyages.",
      theirEyes:
        "From the harbour at Troas, the far shore across the northern Aegean was a different province, and a new world for the mission.",
      debate:
        "Scholars debate whether the “we” passages come from the author's own travel diary, from a source he used, or are a literary device.",
    },
    confidence: "settled",
    references: ["Acts 16:6–12"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Raymond E. Brown, An Introduction to the New Testament (Doubleday, 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-055",
    era: "early-church",
    level: 11,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Acts says Paul and Silas escaped from the Philippi prison after an earthquake threw its doors open.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 16:25–34: the doors open and the chains come loose, but when the jailer draws his sword to kill himself, Paul shouts, “Don't harm yourself, for we are all here!” The jailer and his household are baptized that night.",
      world:
        "The jailer's panic makes sense: elsewhere Acts shows guards paying with their lives for lost prisoners (Acts 12:19) and soldiers planning to kill prisoners so none could escape (27:42).",
      theirEyes:
        "Waking to open doors in the dark, the jailer assumed his life was already forfeit — until a prisoner called out that nobody had left.",
    },
    confidence: "settled",
    references: ["Acts 16:25–34", "Acts 12:19", "Acts 27:42"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Brian Rapske, The Book of Acts and Paul in Roman Custody (Eerdmans, 1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "chu-056",
    era: "early-church",
    level: 12,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Acts calls the Jews of Beroea “more noble” than those of Thessalonica. Why?",
    choices: [
      "They examined the Scriptures daily to test Paul's message",
      "They gave the most money to Paul's collection",
      "They were descended from Macedonian kings",
      "They refused to listen to Paul at all",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Acts 17:11: they “received the word with all readiness of mind, examining the Scriptures daily to see whether these things were so.” Many believed, including prominent Greek women.",
      theirEyes:
        "In Beroea's synagogue, the scrolls came out not once a week but every day, as listeners checked the visitor's claims for themselves.",
      tradition: {
        jewish:
          "Synagogues were places of scripture study. Jerusalem's Theodotus inscription says its synagogue was built “for the reading of the law and the teaching of the commandments,” and Josephus says Moses ordered the people to gather and learn the law every week.",
      },
    },
    confidence: "settled",
    references: ["Acts 17:10–12"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Theodotus synagogue inscription, Jerusalem (Israel Museum)" },
      { kind: "primary", citation: "Josephus, Against Apion 2.175" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-057",
    era: "early-church",
    level: 12,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Apollos, an eloquent teacher “mighty in the Scriptures,” came to Ephesus from which city?",
    choices: ["Antioch", "Tarsus", "Athens", "Alexandria"],
    answer: 3,
    explanation: {
      textSays:
        "Acts 18:24–26: Apollos was “an Alexandrian by race,” but “knew only the baptism of John,” so Priscilla and Aquila “explained to him the way of God more accurately.” Paul later writes, “I planted. Apollos watered” (1 Corinthians 3:6), and some in Corinth said, “I follow Apollos” (1:12).",
      world:
        "Alexandria in Egypt had one of the largest Jewish communities outside Judea. The philosopher Philo, Paul's older contemporary, lived there.",
      theirEyes:
        "An Alexandrian Jew trained in that city's learning would have stood out in any synagogue for his polished Greek.",
      tradition: {
        jewish:
          "The Letter of Aristeas tells how the Law was translated into Greek in Alexandria, the origin of the Septuagint.",
      },
    },
    confidence: "settled",
    references: ["Acts 18:24–28", "1 Corinthians 1:12", "1 Corinthians 3:6"],
    sources: [
      scripture,
      { kind: "primary", citation: "Letter of Aristeas" },
      { kind: "reference", citation: "“Philo Judaeus,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-058",
    era: "early-church",
    level: 12,
    category: "daily-life",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: when Paul greets the couple in Romans 16:3, he names Prisca (Priscilla) before her husband Aquila.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "The couple appears six times. Priscilla (or Prisca) comes first in Acts 18:18, 18:26, Romans 16:3 and 2 Timothy 4:19; Aquila comes first in Acts 18:2 and 1 Corinthians 16:19. Paul calls them “my fellow workers” who “risked their own necks for my life” (Romans 16:3–4).",
      world:
        "Ancient writers normally named the husband first, so Priscilla's place in front so often is striking.",
      theirEyes:
        "In Ephesus and later in Rome, believers gathered for worship in the couple's own house (1 Corinthians 16:19; Romans 16:5).",
      debate:
        "Scholars suggest Priscilla was the more prominent in the church's work, or of higher social standing; the texts do not say why. In Acts 18:26 some later manuscripts (followed by the King James Version) put Aquila first, which would make the count an even three and three.",
    },
    confidence: "settled",
    references: ["Acts 18:2", "Acts 18:18", "Acts 18:26", "Romans 16:3–5", "1 Corinthians 16:19", "2 Timothy 4:19"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Jerome Murphy-O'Connor, St. Paul's Corinth: Texts and Archaeology (Liturgical Press, 3rd ed., 2002)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-059",
    era: "early-church",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Troas, a young man fell asleep in a window during Paul's long talk and fell from the third floor. What does his Greek name, Eutychus, mean?",
    choices: ["Sleepy", "Lucky", "Young man", "Faithful"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 20:7–12: the believers met “on the first day of the week” to break bread, and Paul talked until midnight. Eutychus “fell down from the third floor and was taken up dead.” Paul embraced him, saying, “his life is in him,” and the boy was brought in alive.",
      world:
        "Eutychus comes from the Greek word for fortunate, a common name in the Greek world.",
      theirEyes:
        "A packed upper room, lamps burning, a speech running past midnight: no wonder a boy perched in the window drifted off.",
    },
    confidence: "settled",
    references: ["Acts 20:7–12"],
    sources: [
      scripture,
      { kind: "reference", citation: "Liddell, Scott and Jones, A Greek–English Lexicon, s.v. εὐτυχής" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-060",
    era: "early-church",
    level: 12,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which of Paul's letters says, “Love is patient and is kind”?",
    choices: ["Romans", "1 Corinthians", "Galatians", "Philippians"],
    answer: 1,
    explanation: {
      textSays:
        "1 Corinthians 13:4: “Love is patient and is kind. Love doesn't envy. Love doesn't brag, is not proud” The chapter ends: “faith, hope, and love remain—these three. The greatest of these is love” (13:13).",
      world:
        "Paul wrote to a church split by rivalries over leaders and spiritual gifts; the chapter sits between his discussions of those gifts (chapters 12 and 14). The Greek word for love here is agapē.",
      theirEyes:
        "Corinthian believers proud of their gifts heard that even speaking in tongues without love was just “sounding brass” (13:1).",
      tradition: {
        christian: "The chapter is a favourite Christian reading, often chosen for weddings.",
      },
    },
    confidence: "settled",
    references: ["1 Corinthians 13:1–13"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Gordon D. Fee, The First Epistle to the Corinthians (NICNT, Eerdmans, 1987)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "chu-061",
    era: "early-church",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Paul organised a collection from his non-Jewish churches. Who was the money for?",
    choices: [
      "The Roman emperor's taxes",
      "Paul's own travel costs",
      "Rebuilding a pagan temple",
      "The poor among the believers in Jerusalem",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Romans 15:26: Macedonia and Achaia made “a certain contribution for the poor among the saints who are at Jerusalem.” Paul told the Corinthians to set money aside “on the first day of every week” (1 Corinthians 16:2). In Acts 24:17 Paul says he came “to bring gifts for the needy to my nation.”",
      world:
        "Paul links the collection to the Jerusalem leaders' request to “remember the poor” (Galatians 2:10), and saw it as a sign of unity between Gentile and Jewish believers (Romans 15:27).",
      theirEyes:
        "Coins saved week by week in Corinth would travel hundreds of miles to people the givers would never meet.",
      tradition: {
        jewish:
          "Diaspora Jews already sent money to Jerusalem each year: Philo and Josephus describe the Temple tax collected abroad and carried to the city.",
      },
    },
    confidence: "settled",
    references: ["Romans 15:25–28", "1 Corinthians 16:1–3", "Galatians 2:10", "Acts 24:17"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, On the Special Laws 1.76–78" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.110" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-062",
    era: "early-church",
    level: 13,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In his farewell to the Ephesian elders at Miletus, Paul quotes a saying of Jesus found in none of the four Gospels. Which?",
    choices: [
      "“Blessed are the peacemakers”",
      "“The last will be first”",
      "“It is more blessed to give than to receive”",
      "“Love your neighbor as yourself”",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Acts 20:35: Paul tells them “to remember the words of the Lord Jesus, that he himself said, ‘It is more blessed to give than to receive.’” Then they knelt, prayed and wept, sad “that they should see his face no more” (20:36–38).",
      world:
        "Sayings attributed to Jesus outside the four Gospels are called agrapha (“unwritten” sayings). This is one of the best-known; Luke 6:38 (“Give, and it will be given to you”) is similar in spirit but not the same saying. The other three choices all appear in the Gospels.",
      theirEyes:
        "Summoned from Ephesus to the harbour at Miletus, the elders came knowing this might be their last time hearing Paul.",
    },
    confidence: "settled",
    references: ["Acts 20:17–38"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Joachim Jeremias, Unknown Sayings of Jesus (SPCK, 1957)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-063",
    era: "early-church",
    level: 13,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After the Temple riot, the Roman commander asked whether Paul was a rebel whom Josephus also describes. Who?",
    choices: ["Judas the Galilean", "The Egyptian", "Theudas", "Simon bar Giora"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 21:38: “Aren't you then the Egyptian who before these days stirred up to sedition and led out into the wilderness the four thousand men of the Assassins?” Paul answers that he is a Jew from Tarsus and speaks to the crowd in “the Hebrew language” (21:39–40).",
      world:
        "Josephus says that under the governor Felix an Egyptian false prophet led a crowd from the wilderness to the Mount of Olives, promising Jerusalem's walls would fall. Felix's troops attacked and the Egyptian escaped. Josephus gives about 30,000 followers in one account.",
      theirEyes:
        "A troublemaker who had vanished was exactly the man a nervous garrison commander hoped to have finally caught.",
    },
    confidence: "settled",
    references: ["Acts 21:27–40"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 2.261–263; Antiquities of the Jews 20.169–172" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-064",
    era: "early-church",
    level: 13,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "More than forty men swore not to eat or drink until they had killed Paul. Who warned him of the plot?",
    choices: ["Barnabas", "His sister's son", "Luke the physician", "A Roman centurion"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 23:12–22: “Paul's sister's son heard they were lying in wait,” went into the barracks and told Paul, who sent him to the commander. That night Paul was taken to the governor Felix at Caesarea with two hundred soldiers, seventy horsemen and two hundred spearmen (23:23–24).",
      world:
        "This is the only glimpse the New Testament gives of Paul's family in Jerusalem. The commander's letter names him as Claudius Lysias (23:26).",
      theirEyes:
        "A young man slipping into the Roman fortress with a secret could have lost his life if the plotters had seen him.",
    },
    confidence: "settled",
    references: ["Acts 23:12–26"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "C. K. Barrett, The Acts of the Apostles, vol. 2 (ICC, T&T Clark, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-065",
    era: "early-church",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "How many times does Paul say he begged the Lord to take away his “thorn in the flesh”?",
    choices: ["Seven", "Three", "Twelve", "Forty"],
    answer: 1,
    explanation: {
      textSays:
        "2 Corinthians 12:7–9: “a thorn in the flesh was given to me… I begged the Lord three times that it might depart from me.” The answer he reports: “My grace is sufficient for you, for my power is made perfect in weakness.”",
      theirEyes:
        "Corinthians impressed by confident, polished preachers heard Paul boast instead of his weakness.",
      debate:
        "Paul never says what the thorn was. Suggestions include a chronic illness, poor eyesight (compare Galatians 4:13–15), or the opponents who harassed him.",
    },
    confidence: "settled",
    references: ["2 Corinthians 12:7–10", "Galatians 4:13–15"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Victor Paul Furnish, II Corinthians (Anchor Bible 32A, Doubleday, 1984)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "chu-066",
    era: "early-church",
    level: 14,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The governor Felix kept Paul in custody for two years. What does the Roman historian Tacitus say Felix had once been?",
    choices: ["A senator", "A gladiator", "A slave", "A Jewish priest"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 24:24–27: Felix and his Jewish wife Drusilla heard Paul, but Felix “hoped that money would be given to him by Paul,” and when he was replaced after two years he left Paul in prison.",
      world:
        "Felix was a freed slave of the imperial family and brother of Pallas, a powerful freedman at Claudius' court. Tacitus sneers that he “exercised the power of a king with the mind of a slave” (Histories 5.9). Josephus says Drusilla, a daughter of Herod Agrippa I, left her first husband, the king of Emesa, to marry him.",
      theirEyes:
        "For Judea's elite, being ruled by a former slave was a daily insult.",
    },
    confidence: "settled",
    references: ["Acts 24:24–27"],
    sources: [
      scripture,
      { kind: "primary", citation: "Tacitus, Histories 5.9; Annals 12.54" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 20.137–143" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-067",
    era: "early-church",
    level: 14,
    category: "faith-practice",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Acts says Paul had Timothy circumcised before taking him on his travels.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Acts 16:3: Paul “took and circumcised him because of the Jews who were in those parts, for they all knew that his father was a Greek.” Timothy's mother was Jewish (16:1). By contrast, Paul writes that Titus, “being a Greek, was not compelled to be circumcised” (Galatians 2:3).",
      theirEyes:
        "Everyone in the district knew Timothy's father was a Greek; Paul did not want his companion's status to become an issue in every synagogue they visited.",
      debate:
        "Scholars debate whether this fits the Paul of Galatians, who fiercely opposed circumcising Gentile believers. Some think Acts is reliable because Timothy had a Jewish mother; others doubt the report. Shaye Cohen argues that the rule making a Jewish mother's child Jewish is not clearly attested before the Mishnah (a later record, c. 200 CE), so how Timothy's status was viewed in the 1st century is itself uncertain.",
    },
    confidence: "settled",
    references: ["Acts 16:1–3", "Galatians 2:3"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Shaye J. D. Cohen, The Beginnings of Jewishness (University of California Press, 1999)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-068",
    era: "early-church",
    level: 14,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When Paul declared to Festus, “I appeal to Caesar!”, which emperor was ruling?",
    choices: ["Augustus", "Tiberius", "Nero", "Vespasian"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 25:9–12: when Festus offers a trial in Jerusalem, Paul answers, “I appeal to Caesar!” Festus replies, “To Caesar you shall go.” Acts never names the emperor.",
      world:
        "Josephus says Nero sent Porcius Festus to succeed Felix, and that Festus died in office before Albinus arrived, around 62 CE. Nero ruled from 54 to 68 CE, so any date proposed for the appeal falls in his reign.",
      theirEyes:
        "A Roman citizen far from Rome could ask to have his case heard by the emperor himself, a right that took the case out of local hands.",
      debate: "The exact year Festus took office is debated, usually placed between about 58 and 60 CE; a few scholars argue for 55 or 56. Every proposed date falls in Nero's reign.",
    },
    confidence: "settled",
    references: ["Acts 25:9–12"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 20.182, 20.197–200" },
      { kind: "scholarship", citation: "Rainer Riesner, Paul's Early Period (Eerdmans, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-069",
    era: "early-church",
    level: 14,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "King Agrippa II heard Paul's defence at Caesarea together with Bernice. How was Bernice related to Agrippa?",
    choices: ["His wife", "His sister", "His mother", "His daughter"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 25:13, 23: Agrippa and Bernice arrive “with great pomp.” After Paul speaks, Agrippa says, “With a little persuasion are you trying to make me a Christian?” (26:28), and concludes Paul “might have been set free if he had not appealed to Caesar” (26:32).",
      world:
        "Agrippa II and Bernice were children of Herod Agrippa I (the Herod of Acts 12), and Drusilla, Felix's wife, was their younger sister. After her husband (and uncle), Herod of Chalcis, died, Bernice spent years as a widow; Josephus and Acts both show her at her brother's side in public.",
      theirEyes:
        "Caesarea's notables saw the last generation of Herod's family in full royal display, come to hear a prisoner in chains.",
    },
    confidence: "settled",
    references: ["Acts 25:13–26:32"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.5.4 (Herod's descendants); 20.145–146" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-070",
    era: "early-church",
    level: 14,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which New Testament book do most scholars consider the earliest surviving Christian writing?",
    choices: ["The Gospel of Mark", "Romans", "1 Thessalonians", "Revelation"],
    answer: 2,
    explanation: {
      textSays:
        "1 Thessalonians opens from “Paul, Silvanus, and Timothy” (1:1) and says Timothy “has just now come to us from you” (3:6), matching Acts 18:5, where Silas and Timothy rejoin Paul in Corinth.",
      world:
        "Most scholars date it to about 50 CE, written from Corinth only months after Paul founded the church, some twenty years after Jesus' death. Paul's letters as a group are older than the Gospels, usually dated about 70 CE or later.",
      theirEyes:
        "Former idol-worshippers in Thessalonica (1:9) received the letter while Paul's visit was still fresh in their memory.",
      debate: "Some scholars date Galatians earlier, before the Jerusalem meeting of Acts 15; a few argue for James, and a very few date Mark to the 40s.",
    },
    confidence: "mainstream",
    references: ["1 Thessalonians 1:1", "1 Thessalonians 3:6", "Acts 18:5"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Raymond E. Brown, An Introduction to the New Testament (Doubleday, 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "chu-071",
    era: "early-church",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: scholars agree that Paul wrote Philippians from prison in Rome.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Paul writes from “my bonds” (Philippians 1:7), says his imprisonment is known to “the whole palace guard” (1:13), and sends greetings from “Caesar's household” (4:22). He never names the city.",
      world:
        "Rome is the traditional answer and is still widely held. But imperial guards and members of “Caesar's household” (slaves and freedmen of the emperor) were found in the provinces too.",
      theirEyes:
        "The Philippians knew where Paul was; only later readers had to work it out from hints.",
      debate:
        "The main options are Rome (about 60–62 CE), Ephesus (mid-50s, closer to Philippi and fitting the many trips between them) and Caesarea (Acts 23–26).",
    },
    confidence: "settled",
    references: ["Philippians 1:7", "Philippians 1:12–14", "Philippians 4:22"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Gordon D. Fee, Paul's Letter to the Philippians (NICNT, Eerdmans, 1995)" },
      { kind: "scholarship", citation: "Raymond E. Brown, An Introduction to the New Testament (Doubleday, 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-072",
    era: "early-church",
    level: 15,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Romans 16 commends Phoebe, a “servant” (diakonos) of the church in which port town?",
    choices: ["Ostia", "Joppa", "Caesarea", "Cenchreae"],
    answer: 3,
    explanation: {
      textSays:
        "Romans 16:1–2: “I commend to you Phoebe, our sister, who is a servant of the assembly that is at Cenchreae,” adding that she “has been a helper of many, and of my own self.”",
      world:
        "Cenchreae was Corinth's eastern harbour, where Acts says Paul once shaved his head for a vow (Acts 18:18). The Greek word diakonos is the same one later translated “deacon”; the word for “helper,” prostatis, can mean patron or benefactor.",
      theirEyes:
        "A woman of means sailing from Corinth's harbour to Rome would have been a natural person to carry Paul's letter.",
      debate:
        "Many scholars think Phoebe carried the letter to Rome. Translations differ on whether to call her a “servant,” “minister” or “deacon.”",
    },
    confidence: "settled",
    references: ["Romans 16:1–2", "Acts 18:18"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Robert Jewett, Romans: A Commentary (Hermeneia, Fortress, 2007)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-073",
    era: "early-church",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Romans 16:7 greets Andronicus and Junia, “notable among the apostles.” How do most scholars today read the name Junia?",
    choices: ["As a woman's name", "As a city", "As a title meaning “young one”", "As a Greek word for “prisoner”"],
    answer: 0,
    explanation: {
      textSays:
        "Romans 16:7: “Greet Andronicus and Junia, my relatives and my fellow prisoners, who are notable among the apostles, who were also in Christ before me.”",
      world:
        "Junia is a well-attested Roman woman's name. Many 20th-century translations printed a man's name, “Junias,” which is not attested in any ancient source (the King James Version has “Junia”). Most scholars now read Junia, often as Andronicus' wife.",
      theirEyes: "Paul greets a couple who had been believers longer than he had and had shared his imprisonment.",
      tradition: {
        christian: "John Chrysostom (4th century) praised her as a woman worthy to be called an apostle.",
      },
      debate:
        "The debate has moved to the phrase itself: does “notable among the apostles” mean she was a prominent apostle, or that she was well known to the apostles? Both readings have defenders.",
    },
    confidence: "mainstream",
    references: ["Romans 16:7"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Eldon Jay Epp, Junia: The First Woman Apostle (Fortress, 2005)" },
      { kind: "scholarship", citation: "Michael H. Burer and Daniel B. Wallace, “Was Junia Really an Apostle? A Re-examination of Rom 16.7,” New Testament Studies 47 (2001)" },
      { kind: "primary", citation: "John Chrysostom, Homilies on Romans 31" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-074",
    era: "early-church",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A Latin inscription in a Corinth pavement names an Erastus who paid for it. What does Romans 16:23 call Paul's Erastus?",
    choices: ["The treasurer of the city", "A tentmaker", "The ruler of the synagogue", "A Roman centurion"],
    answer: 0,
    explanation: {
      textSays:
        "Romans 16:23, written from Corinth: “Erastus, the treasurer of the city, greets you.”",
      world:
        "In 1929 excavators near Corinth's theatre found a paving slab inscribed, in Latin, that Erastus laid the pavement at his own expense in return for his aedileship, a city magistrate's office.",
      theirEyes:
        "Anyone crossing that paved square could read, cut into the stone, who had paid for it.",
      debate:
        "Whether this is the same man is debated. A Greek “city treasurer” may not equal a Roman aedile, the pavement's date is disputed, and Erastus was not a rare name. Some scholars accept the link; others reject it.",
    },
    confidence: "settled",
    references: ["Romans 16:23"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Erastus inscription, Corinth, published in J. H. Kent, Corinth VIII.3: The Inscriptions 1926–1950 (1966)" },
      { kind: "scholarship", citation: "Steven J. Friesen, “The Wrong Erastus: Ideology, Archaeology, and Exegesis,” in Corinth in Context (Brill, 2010)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-075",
    era: "early-church",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Thessalonica, Jason was dragged before “the rulers of the city.” Inscriptions show Thessalonica's magistrates really bore the Greek title Acts uses. What was it?",
    choices: ["Archons", "Politarchs", "Proconsuls", "Tetrarchs"],
    answer: 1,
    explanation: {
      textSays:
        "Acts 17:6–8: a crowd drags Jason before “the rulers of the city” (Greek politarchai), shouting, “These who have turned the world upside down have come here also.”",
      world:
        "The title politarch is rare in literature, but dozens of inscriptions from Macedonia use it, many from Thessalonica itself, among them a Roman-era inscription from the city's demolished Vardar Gate, now in the British Museum.",
      theirEyes:
        "To the city's magistrates, a charge of proclaiming “another king” (17:7) was a matter of loyalty to Caesar.",
    },
    confidence: "settled",
    references: ["Acts 17:5–9"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Politarch inscription from the Vardar Gate, Thessaloniki (British Museum)" },
      { kind: "scholarship", citation: "G. H. R. Horsley, “The Politarchs,” in D. W. J. Gill and C. Gempf (eds.), The Book of Acts in Its Graeco-Roman Setting (Eerdmans, 1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
