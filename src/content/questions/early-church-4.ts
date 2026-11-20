import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const earlyChurch4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "chu-076",
    era: "early-church",
    level: 16,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In 66 CE, which Roman procurator of Judea took seventeen talents from the Temple treasury, helping to spark the revolt?",
    choices: ["Porcius Festus", "Gessius Florus", "Pontius Pilate", "Antonius Felix"],
    answer: 1,
    explanation: {
      world:
        "Josephus says Florus “sent some to take seventeen talents out of the sacred treasure, and pretended that Caesar wanted them” (Jewish War 2.293). When Jerusalem protested, his troops looted part of the city, and he had residents flogged and crucified, even men of Roman equestrian rank (2.305–308). Pilate, Felix and Festus had all governed Judea earlier.",
      theirEyes:
        "Some Jerusalemites mocked him by carrying a basket around and begging small coins for him, as if he were a penniless beggar (2.295) — a joke that cost the city dearly.",
      debate:
        "Josephus, who later served the Flavian emperors, puts much of the blame on bad governors and a few hotheads; historians weigh deeper causes too, such as taxation, poverty and tension with gentile neighbours.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Jewish War 2.293–308" },
      { kind: "scholarship", citation: "Martin Goodman, The Ruling Class of Judaea (Cambridge University Press, 1987)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-077",
    era: "early-church",
    level: 16,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus calls it “the true beginning of our war with the Romans.” What did the Temple captain Eleazar son of Ananias persuade the priests to stop?",
    choices: [
      "Accepting sacrifices offered for foreigners, including the emperor",
      "Paying the half-shekel Temple tax",
      "Reading the Law aloud on the Sabbath",
      "Lighting the great lamps at the Feast of Tabernacles",
    ],
    answer: 0,
    explanation: {
      world:
        "Eleazar, son of the former high priest Ananias and captain (“governor”) of the Temple, persuaded the officiating priests to receive no gift or sacrifice for (or from) any foreigner. Josephus says this rejected the sacrifice offered for Caesar and was “the true beginning of our war with the Romans” (Jewish War 2.409). Leading priests begged them to restore it, without success (2.410–417).",
      theirEyes:
        "For decades a daily offering for the emperor had been Judea's sign of loyalty; stopping it told Rome, in the plainest language of the Temple, that Jerusalem no longer accepted its rule.",
      tradition: {
        jewish:
          "Philo says Augustus paid for daily whole burnt offerings to the Most High God in Jerusalem (Embassy to Gaius 157, 317), and Josephus says Jews sacrificed for the emperor, not to him (Against Apion 2.77).",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Jewish War 2.409–417; Against Apion 2.77" },
      { kind: "primary", citation: "Philo, Embassy to Gaius 157, 317" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-078",
    era: "early-church",
    level: 16,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In late 66 CE, Cestius Gallus, governor of Syria, pulled back from Jerusalem. Where was his retreating army cut to pieces?",
    choices: ["At the Horns of Hattin", "Under the walls of Masada", "In the pass of Beth Horon", "At the springs of Caesarea Philippi"],
    answer: 2,
    explanation: {
      world:
        "Josephus says Jewish fighters harried the column between Gabao (Gibeon) and Beth Horon, above all on the narrow descent (Jewish War 2.540–550). The Romans abandoned their siege engines and lost 5,300 infantry and 380 cavalry (2.553–555). Suetonius adds that the rebels “routed the consular ruler of Syria” and “took one of his eagles” (Vespasian 4.5).",
      theirEyes:
        "Rebels who had just captured Roman siege engines and a legion's eagle could believe God was fighting for them, as at this same pass in the days of the Maccabees.",
      tradition: {
        jewish:
          "Beth Horon was already famous: Judas Maccabeus had defeated the Seleucid commander Seron on its ascent (1 Maccabees 3:13–24).",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 3:13–24"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 2.499–555" },
      { kind: "primary", citation: "Suetonius, Life of Vespasian 4.5" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-079",
    era: "early-church",
    level: 16,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Eusebius says that, warned by a revelation before the war, Jerusalem's church moved to which town across the Jordan?",
    choices: ["Gamla", "Sepphoris", "Pella", "Caesarea Maritima"],
    answer: 2,
    explanation: {
      textSays:
        "Luke 21:20–21 has Jesus warn: “when you see Jerusalem surrounded by armies, then know that its desolation is at hand. Then let those who are in Judea flee to the mountains.”",
      world:
        "Eusebius (c. 325 CE) writes that the Jerusalem church was “commanded by a revelation, vouchsafed to approved men there before the war, to leave the city” and live in Pella, a town of Perea (Church History 3.5.3). Pella was a largely gentile city of the Decapolis.",
      theirEyes:
        "Leaving Jerusalem as war closed in meant abandoning homes and the Temple courts where the first believers had gathered daily.",
      debate:
        "That Eusebius says this is certain; whether it happened is debated. Some scholars (e.g., S. G. F. Brandon, The Fall of Jerusalem and the Christian Church, 1951) doubted the story, while others (e.g., Craig Koester) defend a historical core.",
    },
    confidence: "settled",
    references: ["Luke 21:20–21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Eusebius, Church History 3.5.3" },
      { kind: "scholarship", citation: "Craig Koester, “The Origin and Significance of the Flight to Pella Tradition,” Catholic Biblical Quarterly 51 (1989)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-080",
    era: "early-church",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Suetonius, like Josephus, says the captured Josephus predicted that Vespasian would become emperor.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "Josephus, a Jewish commander in Galilee, surrendered after the fall of Jotapata in 67 CE. He says he told Vespasian that he and his son would be Caesar and emperor (Jewish War 3.399–402). Suetonius independently reports that a high-born prisoner named Josephus “declared most confidently that he would soon be released by the same man, who would then, however, be emperor” (Vespasian 5.6). Vespasian was proclaimed emperor in 69, and Josephus was freed.",
      theirEyes:
        "To his fellow Jews, Josephus was a turncoat; to the Flavian family, he became a useful client who took their family name, Flavius.",
      debate: "Historians debate whether Josephus really foresaw it or told the story later to explain his survival and favour.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Jewish War 3.399–408" },
      { kind: "primary", citation: "Suetonius, Life of Vespasian 5.6" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "chu-081",
    era: "early-church",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says Herod's Temple burned in 70 CE on the very same day of the year as which earlier event?",
    choices: [
      "Antiochus IV's desecration of the altar",
      "The Babylonians' burning of Solomon's Temple",
      "Pompey's entry into the Holy of Holies",
      "Judas Maccabeus' rededication of the Temple",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Jeremiah 52:12–13 dates the Babylonian burning of “Yahweh's house” to the tenth day of the fifth month; 2 Kings 25:8 gives the seventh.",
      world:
        "Josephus says the fatal day had come round “by the revolution of ages”: the tenth of the month Lous (Av), the day the king of Babylon once burned the first Temple (Jewish War 6.250, 6.268). Later Jewish practice mourns both destructions on the fast of the Ninth of Av.",
      theirEyes:
        "For a priest watching the flames, history seemed to be repeating itself to the day.",
      tradition: {
        jewish:
          "Josephus, himself a priest, saw the date as a sign that God's judgment, not Roman power alone, lay behind the disaster.",
      },
    },
    confidence: "settled",
    references: ["Jeremiah 52:12–13", "2 Kings 25:8–9"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 6.249–270" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-082",
    era: "early-church",
    level: 17,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After 70 CE, Jews across the empire had to pay their yearly two-drachma Temple tax to which temple instead?",
    choices: [
      "The temple of Artemis at Ephesus",
      "The temple of Augustus at Caesarea",
      "The temple of Serapis at Alexandria",
      "The temple of Jupiter Capitolinus in Rome",
    ],
    answer: 3,
    explanation: {
      world:
        "Josephus says Vespasian laid a tribute on Jews “wheresoever they were,” ordering two drachmas a year for the Capitol, as they had once paid to the Temple in Jerusalem (Jewish War 7.218). Cassius Dio confirms it (Roman History 65.7.2; numbered 66.7.2 in some editions). The money went to a special treasury, the fiscus Iudaicus.",
      theirEyes:
        "A Jew in Alexandria or Rome who had proudly sent coins to the Temple each year now paid the same sum toward rebuilding the temple of Rome's chief god.",
      tradition: {
        jewish:
          "Before 70, the half-shekel collection was a mark of belonging: Philo describes the sacred money being gathered in many cities and sent to Jerusalem (Special Laws 1.76–78).",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Jewish War 7.218" },
      { kind: "primary", citation: "Cassius Dio, Roman History 65.7.2 (66.7.2 in Boissevain's numbering)" },
      { kind: "primary", citation: "Philo, Special Laws 1.76–78" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-083",
    era: "early-church",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Later rabbinic stories say Yohanan ben Zakkai was smuggled out of besieged Jerusalem and asked Vespasian for which town and its sages?",
    choices: ["Yavneh", "Hebron", "Bethlehem", "Shechem"],
    answer: 0,
    explanation: {
      world:
        "In the Babylonian Talmud, his disciples carry him out in a coffin; he greets Vespasian as king, foretells his rise, and asks, “Give me Yavneh and its sages” (Gittin 56a–b; also Avot de-Rabbi Natan A 4). Yavneh (Jamnia), near the coast, became the centre where rabbis rebuilt Jewish life without a Temple.",
      theirEyes:
        "With the Temple gone, the question was urgent: how do you keep faith with God when there is no altar left?",
      debate:
        "These stories were written down centuries later, and the prophecy to Vespasian echoes Josephus' own. Historians accept that Yohanan and Yavneh mattered after 70, but treat the escape scene as legend, and no longer picture a formal “Council of Jamnia” fixing the canon.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Babylonian Talmud, Gittin 56a–b (later rabbinic source)" },
      { kind: "primary", citation: "Avot de-Rabbi Natan, version A, ch. 4 (later rabbinic source)" },
      { kind: "scholarship", citation: "Shaye J. D. Cohen, From the Maccabees to the Mishnah (3rd ed., Westminster John Knox, 2014)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-084",
    era: "early-church",
    level: 17,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The Didache, an early Christian manual, says baptism should ideally be done in what kind of water?",
    choices: ["Water from the Jordan", "“Living” (running) water", "Water blessed at the Temple", "Warm water heated at home"],
    answer: 1,
    explanation: {
      world:
        "The Didache (“Teaching”), usually dated c. 50–120 CE, says to baptize in the name of the Father, the Son and the Holy Spirit, in “living” (running) water. If there is none, other water will do; cold is preferred to warm; and if neither is available, pour water three times on the head (Didache 7.1–3). A fast before baptism is also required (7.4).",
      theirEyes:
        "In a dry land, a flowing stream was a gift; but a house church with only a jar of water was not turned away.",
      tradition: {
        jewish:
          "“Living” water (Hebrew mayim ḥayyim, “running water” in the WEB) is a purity term in the Torah (Leviticus 14:5; 15:13; Numbers 19:17), and the Damascus Document from Qumran sets rules for water fit for immersion (CD 10.10–13).",
      },
    },
    confidence: "settled",
    references: ["Leviticus 14:5", "Leviticus 15:13", "Numbers 19:17"],
    sources: [
      scripture,
      { kind: "primary", citation: "Didache 7.1–4" },
      { kind: "primary", citation: "Damascus Document (CD) 10.10–13" },
      { kind: "scholarship", citation: "Kurt Niederwimmer, The Didache (Hermeneia, Fortress, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-085",
    era: "early-church",
    level: 17,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Didache tells Christians not to fast on the same days as “the hypocrites.” Which days does it set instead?",
    choices: ["Monday and Thursday", "Saturday and Sunday", "Wednesday and Friday", "Sunday only"],
    answer: 2,
    explanation: {
      textSays: "In Luke 18:12, the Pharisee in Jesus' parable prays: “I fast twice a week.”",
      world:
        "Didache 8.1: do not fast with the hypocrites, who fast on the second and fifth days of the week (Monday and Thursday); fast instead on the fourth day and on the Preparation (Wednesday and Friday). The same chapter goes on to give the Lord's Prayer.",
      theirEyes:
        "Keeping the same twice-weekly rhythm as their Jewish neighbours, but on different days, let believers mark who they were without giving up the habit.",
      tradition: {
        christian:
          "Wednesday and Friday fasting became widespread in ancient Christianity and is still kept in Eastern Orthodox practice; Friday was linked to the crucifixion.",
      },
      debate: "Who “the hypocrites” were (Pharisees, or Jews in general) and how sharply the rule was meant to divide is debated.",
    },
    confidence: "settled",
    references: ["Luke 18:12"],
    sources: [
      scripture,
      { kind: "primary", citation: "Didache 8.1" },
      { kind: "scholarship", citation: "Kurt Niederwimmer, The Didache (Hermeneia, Fortress, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "chu-086",
    era: "early-church",
    level: 18,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The letter called 1 Clement was sent from the church in Rome to Corinth mainly because of what crisis?",
    choices: [
      "Famine had struck Achaia",
      "Some members had removed their presbyters (elders) from office",
      "The governor had arrested the church's leaders",
      "Corinth's believers were demanding circumcision",
    ],
    answer: 1,
    explanation: {
      world:
        "The letter rebukes a “sedition” in which a few people turned the Corinthian church against its presbyters, who had been removed though they served blamelessly (1 Clement 44; 47). It reminds Corinth that Paul had already warned them about factions (47). The letter names no author; Dionysius of Corinth (c. 170) credits Clement of Rome (Eusebius, Church History 4.23.11).",
      theirEyes:
        "Corinthian believers heard a letter from Rome read aloud in their gathering, much as their parents had heard Paul's.",
      debate:
        "It is usually dated c. 96 CE, partly because its opening apology for delay due to “sudden and repeated calamities” (1 Clement 1) is linked to the end of Domitian's reign. Some scholars date it to around 70; others somewhat later, into the early 2nd century.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "1 Clement 1; 44; 47" },
      { kind: "primary", citation: "Eusebius, Church History 4.23.11" },
      { kind: "scholarship", citation: "Bart D. Ehrman, The Apostolic Fathers, vol. 1 (Loeb Classical Library, Harvard, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-087",
    era: "early-church",
    level: 18,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Bishop Ignatius of Antioch (early 2nd century) wrote his seven letters while doing what?",
    choices: [
      "Serving a sentence of exile on Patmos",
      "Hiding from persecution in the catacombs of Rome",
      "Travelling under guard to Rome to face the wild beasts",
      "Waiting in Jerusalem for trial before the Sanhedrin",
    ],
    answer: 2,
    explanation: {
      world:
        "Ignatius wrote to churches in Asia and to Rome while being taken as a condemned prisoner from Syria to Rome. He writes: “From Syria even unto Rome I fight with wild beasts… being bound amid ten leopards, even a company of soldiers” (Romans 5.1), and begs the Roman Christians not to try to save him. Eusebius places his martyrdom under Trajan (Church History 3.36).",
      theirEyes:
        "Church delegates who visited him at Smyrna met a bishop in chains who wrote as if he were already halfway to heaven.",
      debate:
        "This is just after the New Testament period: the letters are usually dated c. 105–115 CE, though a few scholars date them later, to the 130s–140s.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Ignatius, To the Romans 4–5" },
      { kind: "primary", citation: "Eusebius, Church History 3.36" },
      { kind: "scholarship", citation: "William R. Schoedel, Ignatius of Antioch (Hermeneia, Fortress, 1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-088",
    era: "early-church",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Most scholars read Revelation's “Babylon” as a code-name for Rome. Why do many think this points to a date after 70 CE?",
    choices: [
      "Rome had moved its capital to Mesopotamia",
      "Like Babylon, Rome had destroyed Jerusalem's Temple",
      "Nero had been born in Babylon",
      "Rome's emperors worshipped Babylonian gods",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Revelation 17:5 names the woman “BABYLON THE GREAT,” and 17:9 says her seven heads “are seven mountains on which the woman sits” — a clue pointing to Rome, the city of seven hills. 1 Peter 5:13 also sends greetings from “She who is in Babylon.”",
      world:
        "Jewish writings that call Rome “Babylon” come from after 70: 4 Ezra opens “In the thirtieth year after the ruin of the city… in Babylon” (2 Esdras 3:1), and 2 Baruch and Sibylline Oracles 5 do the same. Irenaeus dated John's vision to the end of Domitian's reign (c. 95).",
      theirEyes:
        "For a Jewish-Christian reader in Asia, “Babylon” said in a single word: the empire that burned God's house, again.",
      debate:
        "A minority date Revelation to the late 60s, under or just after Nero, pointing to the Temple still being measured (11:1–2) and the count of kings (17:10).",
    },
    confidence: "mainstream",
    references: ["Revelation 17:5", "Revelation 17:9–10", "Revelation 11:1–2", "1 Peter 5:13", "2 Esdras 3:1–2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Irenaeus, Against Heresies 5.30.3" },
      { kind: "scholarship", citation: "Adela Yarbro Collins, Crisis and Catharsis: The Power of the Apocalypse (Westminster, 1984)" },
      { kind: "scholarship", citation: "John A. T. Robinson, Redating the New Testament (SCM, 1976)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-089",
    era: "early-church",
    level: 18,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Some ancient copies of Revelation 13:18, including a 3rd-century papyrus from Oxyrhynchus, give the beast's number not as 666 but as what?",
    choices: ["777", "616", "555", "888"],
    answer: 1,
    explanation: {
      textSays: "Revelation 13:18: “let him calculate the number of the beast, for it is the number of a man. His number is six hundred sixty-six.”",
      world:
        "Codex Ephraemi Rescriptus (5th century) reads 616, and so, on the usual reading of its damaged text, does Papyrus 115 (P.Oxy. 4499). Irenaeus (c. 180) already knew copies with that number, which he rejected (Against Heresies 5.30.1). In Hebrew letters, “Nero Caesar” spelled nrwn qsr adds up to 666; spelled nrw qsr, following the Latin form Nero, it adds up to 616. D. R. Hillers pointed out that the spelling nrwn qsr is attested in a 1st-century Aramaic document from Wadi Murabba'at.",
      theirEyes:
        "Ancient readers used letters as numbers, so a riddle like this was a game they knew how to play.",
      debate:
        "Nero is the most widely accepted solution, and the 616 variant supports it, but many other answers have been proposed since antiquity.",
    },
    confidence: "settled",
    references: ["Revelation 13:18"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Papyrus 115, P.Oxy. LXVI 4499 (Oxyrhynchus Papyri, 3rd century)" },
      { kind: "primary", citation: "Irenaeus, Against Heresies 5.30.1" },
      { kind: "scholarship", citation: "Delbert R. Hillers, “Revelation 13:18 and a Scroll from Murabba'at,” Bulletin of the American Schools of Oriental Research 170 (1963)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-090",
    era: "early-church",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: John's Gospel names “the disciple whom Jesus loved” as John son of Zebedee.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "The Gospel never names him. He leans against Jesus at the supper (John 13:23), receives Jesus' mother at the cross (19:26–27), and runs to the tomb (20:2). John 21:24 says, “This is the disciple who testifies about these things, and wrote these things.” The Gospel mentions “the sons of Zebedee” only once (21:2).",
      world:
        "Irenaeus (c. 180) identified him with John, “the disciple of the Lord, who also had leaned upon His breast,” writing at Ephesus (Against Heresies 3.1.1). Around 190, Polycrates of Ephesus likewise said that John, who “leaned on the Lord's breast,” was buried at Ephesus (Eusebius, Church History 5.24.3).",
      theirEyes:
        "The Gospel's first hearers may well have known who he was; readers ever since have had to guess.",
      debate:
        "Modern proposals include John son of Zebedee, “John the Elder” mentioned by Papias, Lazarus, or an idealised witness figure.",
    },
    confidence: "settled",
    references: ["John 13:23", "John 19:26–27", "John 20:2", "John 21:2", "John 21:20–24"],
    sources: [
      scripture,
      { kind: "primary", citation: "Irenaeus, Against Heresies 3.1.1; Eusebius, Church History 5.24.3" },
      { kind: "scholarship", citation: "Richard Bauckham, Jesus and the Eyewitnesses (2nd ed., Eerdmans, 2017)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "chu-091",
    era: "early-church",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The word “Christianity” (Christianismos) is not in the New Testament. In whose writings does it first appear in surviving texts?",
    choices: ["Tacitus", "Josephus", "Pliny the Younger", "Ignatius of Antioch"],
    answer: 3,
    explanation: {
      world:
        "Ignatius (c. 110 CE) is the earliest known writer to use Christianismos, coined on the model of Ioudaismos (“Judaism”). He writes that “it is monstrous to talk of Jesus Christ and to practise Judaism” (Magnesians 10.3), and uses the word again in Romans 3.3 and Philadelphians 6.1. Tacitus and Pliny speak only of “Christians,” and Josephus of the “tribe of Christians.”",
      theirEyes:
        "In Antioch, where Acts says believers were first called Christians, their bishop now gave their whole way of life a name of its own.",
      debate:
        "Scholars note that Ignatius had to argue the point, which suggests some believers in his churches still kept Jewish practices.",
    },
    confidence: "mainstream",
    references: ["Acts 11:26"],
    sources: [
      scripture,
      { kind: "primary", citation: "Ignatius, To the Magnesians 10; To the Romans 3.3; To the Philadelphians 6.1" },
      { kind: "scholarship", citation: "Judith M. Lieu, Christian Identity in the Jewish and Graeco-Roman World (Oxford University Press, 2004)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-092",
    era: "early-church",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which is a main reason most scholars doubt that the apostle Peter wrote 2 Peter?",
    choices: [
      "It treats Paul's letters as a known collection alongside “the other Scriptures”",
      "It was written in Latin, not Greek",
      "It describes Peter's own execution in Rome",
      "It quotes from the Gospel of John by name",
    ],
    answer: 0,
    explanation: {
      textSays:
        "2 Peter 3:15–16 refers to “all of his letters” by “our beloved brother Paul,” which the ignorant twist, “as they also do to the other Scriptures.” 2 Peter 1:14 only says Peter's death “comes swiftly.”",
      world:
        "Scholars also point to its polished Greek, unlike 1 Peter's, and to its heavy reuse of Jude (compare 2 Peter 2 with Jude 4–18). Eusebius listed it among the disputed books (Church History 3.3.1; 3.25.3).",
      theirEyes:
        "Readers worried that Jesus' return was delayed (3:4) heard “Peter's” farewell testament reassuring them.",
      debate:
        "Many date it c. 80–130 as a farewell “testament” written in Peter's name; a minority of scholars defend Petrine authorship, perhaps through a secretary.",
    },
    confidence: "mainstream",
    references: ["2 Peter 1:14", "2 Peter 3:4", "2 Peter 3:15–16", "Jude 4–18"],
    sources: [
      scripture,
      { kind: "primary", citation: "Eusebius, Church History 3.3.1; 3.25.3" },
      { kind: "scholarship", citation: "Richard Bauckham, Jude, 2 Peter (Word Biblical Commentary 50, 1983)" },
      { kind: "scholarship", citation: "Raymond E. Brown, An Introduction to the New Testament (Doubleday, 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-093",
    era: "early-church",
    level: 19,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: most historians now think Judaism and Christianity split in one clean break soon after 70 CE.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "John's Gospel speaks of believers being “put out of the synagogue” (John 9:22; 16:2), showing that in some places the split was bitter.",
      world:
        "Scholars speak of a gradual, uneven “parting of the ways” that happened at different times in different places. Ignatius (c. 110) still warns believers not to practise Judaism, and as late as 386–387 CE John Chrysostom preached in Antioch against Christians who attended synagogue and kept Jewish feasts.",
      theirEyes:
        "In many cities, a family might have one member in the synagogue on Saturday and another at a house church on Sunday — and see no sharp line between them.",
      debate:
        "When the decisive break came is disputed: some stress the Bar Kokhba revolt (132–135), others the 4th century, and some argue the ways never fully parted for centuries.",
    },
    confidence: "mainstream",
    references: ["John 9:22", "John 16:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "John Chrysostom, Against the Jews (Adversus Judaeos), Homily 1" },
      { kind: "scholarship", citation: "James D. G. Dunn, The Partings of the Ways (SCM, 1991)" },
      { kind: "scholarship", citation: "Adam H. Becker and Annette Yoshiko Reed (eds.), The Ways That Never Parted (Mohr Siebeck, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-094",
    era: "early-church",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Babylonian Talmud says a blessing against “heretics” (Birkat ha-Minim) was composed at Yavneh by whom?",
    choices: ["Hillel the Elder", "Rabbi Akiva", "Samuel the Small", "Judah the Prince"],
    answer: 2,
    explanation: {
      world:
        "Berakhot 28b–29a says that when Rabban Gamaliel asked at Yavneh for someone to write a blessing against the minim (heretics), Samuel the Small (Shmuel ha-Katan) composed it. It became part of the Eighteen Benedictions. Medieval copies from the Cairo Genizah include the word notzrim, often taken to mean “Christians.”",
      theirEyes:
        "A believer in Jesus asked to lead the synagogue prayer might find he could not say one line of it.",
      debate:
        "The Talmud is a much later record. Justin Martyr (c. 160) complains that Jews curse Christians in their synagogues (Dialogue with Trypho 16), but the original wording and target of the blessing are unknown. Few scholars now link it directly to John 9:22, as J. Louis Martyn once influentially did.",
    },
    confidence: "settled",
    references: ["John 9:22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Babylonian Talmud, Berakhot 28b–29a (later rabbinic source)" },
      { kind: "primary", citation: "Justin Martyr, Dialogue with Trypho 16" },
      { kind: "scholarship", citation: "Ruth Langer, Cursing the Christians? A History of the Birkat HaMinim (Oxford University Press, 2012)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-095",
    era: "early-church",
    level: 19,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Coins of Emperor Nerva (96–98 CE) read FISCI IVDAICI CALVMNIA SVBLATA. What do they proclaim?",
    choices: [
      "The capture of Masada",
      "The return of the Temple vessels to Jerusalem",
      "The removal of false accusations in collecting the Jewish tax",
      "The expulsion of the Jews from Rome",
    ],
    answer: 2,
    explanation: {
      world:
        "Under Domitian the Jewish tax was enforced harshly, through informers: Suetonius recalls seeing, as a youth, a man of ninety examined in court to see whether he was circumcised (Domitian 12.2). Cassius Dio says Nerva no longer allowed anyone to be accused of “the Jewish way of life” (68.1.2). Nerva's sestertii advertise the end of these abuses (calumnia). The tax itself continued: Egyptian receipts show Jews paying it under Trajan.",
      debate:
        "Older writers sometimes took the legend to mean Nerva abolished the tax; because it was still collected later, most historians now read it as ending abusive prosecutions. Exactly whom the reform protected (for example, gentile sympathisers or Jews who had stopped practising) is debated.",
      theirEyes:
        "For Jews in Rome, and for gentiles accused of living like Jews, a new emperor's coin promised that the informers' knock at the door would stop.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Sestertii of Nerva, 96–97 CE, reverse FISCI IVDAICI CALVMNIA SVBLATA (RIC II, Nerva)" },
      { kind: "primary", citation: "Suetonius, Life of Domitian 12.2; Cassius Dio, Roman History 68.1.2" },
      { kind: "scholarship", citation: "Martin Goodman, “Nerva, the Fiscus Judaicus and Jewish Identity,” Journal of Roman Studies 79 (1989)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "chu-096",
    era: "early-church",
    level: 20,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: all ancient sources agree that Titus tried to save the Jerusalem Temple from burning.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "Josephus says Titus held a council of war and decided to spare the Temple, and that a soldier set it on fire against orders (Jewish War 6.236–266). But the Christian writer Sulpicius Severus (c. 400 CE) says Titus and his council chose to destroy it so as to uproot both Judaism and Christianity (Chronicle 2.30).",
      theirEyes:
        "Josephus wrote under the patronage of Titus' own family, so his readers in Rome knew exactly whose reputation was at stake.",
      debate:
        "Since Jacob Bernays (1861), many scholars have thought Severus drew on a lost section of Tacitus' Histories. Historians still debate whether Josephus protected his patron or Severus reshaped the story.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Jewish War 6.236–266" },
      { kind: "primary", citation: "Sulpicius Severus, Chronicle 2.30" },
      { kind: "scholarship", citation: "Jacob Bernays, Über die Chronik des Sulpicius Severus (Berlin, 1861)" },
      { kind: "scholarship", citation: "Timothy D. Barnes, “The Sack of the Temple in Josephus and Tacitus,” in J. Edmondson, S. Mason and J. Rives (eds.), Flavius Josephus and Flavian Rome (Oxford University Press, 2005)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-097",
    era: "early-church",
    level: 20,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Didache's thanksgiving prayer ends with an Aramaic cry that Paul also uses in 1 Corinthians 16:22. Which?",
    choices: ["Abba", "Talitha koum", "Ephphatha", "Maranatha"],
    answer: 3,
    explanation: {
      textSays:
        "1 Corinthians 16:22 ends “Come, Lord!” — the World English Bible notes the Aramaic is “Maranatha.” Revelation 22:20 gives the same prayer in Greek: “come, Lord Jesus!”",
      world:
        "Didache 10.6 closes its meal prayer: “Let grace come, and let this world pass away… Maranatha. Amen.” That Paul could use the Aramaic word untranslated to Greek-speaking Corinthians shows it came from the earliest Aramaic-speaking believers.",
      theirEyes:
        "Gentile believers in Greece were praying an Aramaic phrase from Judea, the way people today say “Amen” or “Hallelujah.”",
      debate: "It can be divided marana tha (“Our Lord, come!”) or maran atha (“Our Lord has come”); the prayer setting favours the first.",
    },
    confidence: "settled",
    references: ["1 Corinthians 16:22", "Revelation 22:20"],
    sources: [
      scripture,
      { kind: "primary", citation: "Didache 10.6" },
      { kind: "scholarship", citation: "Joseph A. Fitzmyer, First Corinthians (Anchor Yale Bible 32, 2008)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-098",
    era: "early-church",
    level: 20,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "To show that resurrection is possible, 1 Clement points to which creature, said to renew itself every 500 years in Egypt?",
    choices: ["The phoenix", "The sacred ibis", "The scarab beetle", "The Apis bull"],
    answer: 0,
    explanation: {
      world:
        "1 Clement 25 describes a bird “called a phoenix” that lives five hundred years; as it dies, a worm springs from its body, grows wings, and carries the parent's bones to Heliopolis in Egypt. Clement presents it as a sign in nature of the resurrection. The Greek historian Herodotus had already told of a phoenix visiting Heliopolis every 500 years (Histories 2.73), though he doubted it.",
      theirEyes:
        "A Roman Christian borrowed a wonder that every educated pagan had heard of to make the hope of resurrection sound less strange.",
      tradition: {
        christian:
          "The phoenix became a popular early Christian symbol of resurrection, appearing in later writers such as Tertullian (On the Resurrection of the Flesh 13).",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "1 Clement 25" },
      { kind: "primary", citation: "Herodotus, Histories 2.73" },
      { kind: "primary", citation: "Tertullian, On the Resurrection of the Flesh 13" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-099",
    era: "early-church",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "At the triumph of Vespasian and Titus in Rome in 71 CE, which captured rebel leader was executed?",
    choices: ["John of Gischala", "Simon bar Giora", "Eleazar ben Yair", "Menahem son of Judas"],
    answer: 1,
    explanation: {
      world:
        "Josephus says Simon son of Giora, one of the two chief commanders in besieged Jerusalem, was led in the procession and then put to death in the Forum, as Roman custom required for the enemy general (Jewish War 7.153–155). John of Gischala was sentenced to life imprisonment (6.433–434). Eleazar ben Yair died at Masada, and Menahem was killed by rival rebels in 66 (2.442–448).",
      theirEyes:
        "Romans cheering the parade saw Simon as a defeated barbarian; Jews who had followed him had seen him as a liberator, perhaps even a king.",
    },
    confidence: "settled",
    references: [],
    sources: [{ kind: "primary", citation: "Josephus, Jewish War 2.442–448; 6.433–434; 7.153–155" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "chu-100",
    era: "early-church",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says Vespasian put the Temple's golden vessels in his new Temple of Peace. What did he keep in his palace instead?",
    choices: [
      "The Ark of the Covenant",
      "The high priest's breastplate",
      "The Law and the purple veils of the sanctuary",
      "The bronze altar",
    ],
    answer: 2,
    explanation: {
      world:
        "After the triumph, Vespasian built the Temple of Peace and laid up there the golden vessels from Jerusalem; but he ordered “their Law, and the purple veils of the holy place” to be kept in the royal palace (Jewish War 7.158–162). Josephus, who had seen the procession, says a copy of the Law was carried last of all the spoils in the triumph (7.150). The Ark had vanished centuries earlier, at the Babylonian destruction or before.",
      theirEyes:
        "Visitors to Rome's new showpiece could gaze at the spoils of Jerusalem among the city's great artworks.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Jewish War 7.148–162" },
      { kind: "archaeology", citation: "Arch of Titus, Rome: relief of the triumphal procession with the Temple spoils" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
