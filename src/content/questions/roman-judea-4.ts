import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const romanJudea4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "rom-076",
    era: "roman-judea",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Only one Gospel says the crowd greeting Jesus outside Jerusalem carried palm branches. Which one?",
    choices: ["Mark", "John", "Luke", "Matthew"],
    answer: 1,
    explanation: {
      textSays:
        "John 12:13: “they took the branches of the palm trees and went out to meet him.” Mark 11:8 and Matthew 21:8 mention only branches cut from trees; Luke 19:36 mentions cloaks, not branches. The shout “Hosanna” comes from Psalm 118:25, “Save us now, we beg you, Yahweh!”",
      theirEyes: "Palm fronds meant a victory parade: people waved them when a liberator came to the holy city.",
      tradition: {
        jewish:
          "1 Maccabees 13:51 says Simon entered the Jerusalem citadel “with praise and palm branches,” and 2 Maccabees 10:7 has worshippers carrying “palm fronds” at the Temple's rededication. Palms had become a symbol of national victory.",
        christian: "This is the origin of Palm Sunday, which begins Holy Week in most churches.",
      },
    },
    confidence: "settled",
    references: ["John 12:13", "Mark 11:8–10", "Matthew 21:8–9", "Luke 19:36–38", "Psalm 118:25–26", "1 Maccabees 13:51", "2 Maccabees 10:7"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-077",
    era: "roman-judea",
    level: 16,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Temple incident, Mark alone adds that Jesus would not allow anyone to do what?",
    choices: [
      "Light lamps in the Court of the Women",
      "Speak Greek in the Temple",
      "Carry a container through the Temple",
      "Bring palm branches into the courts",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Mark 11:15–16: Jesus overturned “the money changers' tables and the seats of those who sold the doves,” and “would not allow anyone to carry a container through the temple.” Matthew, Luke and John do not include this detail.",
      world:
        "The money changers and dove sellers served pilgrims who needed acceptable coins for Temple dues and birds for offerings. The Mishnah, a later record (c. 200 CE), forbids using the Temple Mount as a shortcut (Berakhot 9:5). Some scholars compare Jesus' ban on carrying vessels with that concern for the holy place.",
      theirEyes: "Porters cutting through the courts with jars and baskets suddenly found a teacher blocking their way.",
      debate: "Whether the ban protested commerce, defended the Temple's holiness, or symbolised something else is debated.",
    },
    confidence: "settled",
    references: ["Mark 11:15–17", "Matthew 21:12–13"],
    sources: [scripture, { kind: "primary", citation: "Mishnah Berakhot 9:5" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-078",
    era: "roman-judea",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Mark says Jesus found no figs on the fig tree because it was not the season for figs.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Mark 11:13: “he found nothing but leaves, for it was not the season for figs.” Jesus says, “May no one ever eat fruit from you again!” (11:14), and the next morning the tree is “withered away from the roots” (11:20).",
      world:
        "Mark wraps the fig-tree story around the Temple incident: tree cursed (11:12–14), Temple (11:15–19), tree withered (11:20–21). Many scholars read this “sandwich” as Mark's way of making each story explain the other.",
      theirEyes: "Around Passover, fig trees near Jerusalem are in leaf, but ripe figs are still months away.",
      tradition: {
        shared: "Prophets used a fruitless fig tree as an image of judgment on the people, e.g., Jeremiah 8:13: “no figs on the fig tree, and the leaf will fade.”",
      },
    },
    confidence: "settled",
    references: ["Mark 11:12–21", "Jeremiah 8:13"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-079",
    era: "roman-judea",
    level: 16,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Mark 12, the scribe agrees that loving God and neighbour is more important than what?",
    choices: [
      "Keeping the Sabbath",
      "All whole burnt offerings and sacrifices",
      "Paying the Temple tax",
      "Fasting twice a week",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Jesus joins Deuteronomy 6:4–5 and Leviticus 19:18 (Mark 12:29–31). The scribe replies that this “is more important than all whole burnt offerings and sacrifices” (12:33), and Jesus tells him, “You are not far from God's Kingdom” (12:34). Only Mark has the scribe comparing this love with sacrifices.",
      theirEyes: "Saying this in the Temple courts, with the altar smoking nearby, was a bold thing to agree on.",
      tradition: {
        jewish:
          "The scribe echoes the prophets: “to obey is better than sacrifice” (1 Samuel 15:22), and “I desire mercy, and not sacrifice” (Hosea 6:6). Philo also summed up the Law under two heads: duty to God and duty to people (Special Laws 2.63).",
      },
    },
    confidence: "settled",
    references: ["Mark 12:28–34", "Deuteronomy 6:4–5", "Leviticus 19:18", "1 Samuel 15:22", "Hosea 6:6"],
    sources: [scripture, { kind: "primary", citation: "Philo, On the Special Laws 2.63" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-080",
    era: "roman-judea",
    level: 16,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Mark 12, which scripture scene does Jesus cite to answer the Sadducees about the resurrection?",
    choices: [
      "Ezekiel's valley of dry bones",
      "Elijah raising the widow's son",
      "Daniel's vision of those who sleep in the dust",
      "God speaking to Moses at the burning bush",
    ],
    answer: 3,
    explanation: {
      textSays:
        "The Sadducees describe a woman married in turn to seven brothers under the law of Deuteronomy 25:5 and ask, “whose wife will she be of them?” (Mark 12:23). Jesus answers from “the book of Moses about the Bush”: “I am the God of Abraham, the God of Isaac, and the God of Jacob,” and adds, “He is not the God of the dead, but of the living” (12:26–27; Exodus 3:6).",
      theirEyes: "The Sadducees' riddle was meant to make resurrection look absurd in front of a festival crowd.",
      tradition: {
        jewish:
          "Josephus says the Sadducees accepted only the written laws, not the Pharisees' traditions (Antiquities 13.10.6). A story of seven husbands also appears in Tobit 3:8, where Sarah has been “given to seven husbands.”",
      },
      debate: "Many commentators suggest Jesus argued from Moses because the Sadducees gave the Torah first place.",
    },
    confidence: "settled",
    references: ["Mark 12:18–27", "Deuteronomy 25:5", "Exodus 3:6", "Tobit 3:8"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.10.6" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "rom-081",
    era: "roman-judea",
    level: 17,
    category: "faith-practice",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: in John, Jesus' accusers stay out of Pilate's headquarters on the morning of the trial so they can still eat the Passover.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "John 18:28: “they themselves didn't enter into the Praetorium, that they might not be defiled, but might eat the Passover.” In John, then, the Passover meal is still ahead on the day Jesus is tried, unlike in Mark 14:12–16, where Jesus has already eaten it.",
      world: "The Praetorium was the Roman governor's headquarters; in Jerusalem probably Herod's former palace.",
      theirEyes: "Entering a Gentile's house on the eve of the feast could leave a pilgrim unable to share the Passover lamb.",
      debate:
        "Scholars still debate how to square this with the other Gospels. Some think “eat the Passover” here means the festival's other offerings, not the lamb; most read it as the Passover meal itself.",
    },
    confidence: "settled",
    references: ["John 18:28", "Mark 14:12–16"],
    sources: [scripture, { kind: "scholarship", citation: "Raymond E. Brown, The Death of the Messiah (1994)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-082",
    era: "roman-judea",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Mark and Matthew say that after the Last Supper the disciples “sung a hymn.” Many scholars think it came from which psalms?",
    choices: ["Psalm 51, the great confession", "Psalms 113–118, the Hallel", "Psalms 1–2", "Psalm 23"],
    answer: 1,
    explanation: {
      textSays: "Mark 14:26: “When they had sung a hymn, they went out to the Mount of Olives” (also Matthew 26:30).",
      world:
        "The Mishnah, a later record (c. 200 CE), says the Levites sang the Hallel while Passover lambs were slaughtered (Pesachim 5:7) and that families sang it in two parts during the Passover meal (Pesachim 10:6–7).",
      theirEyes: "Psalm 118, the last of the Hallel, includes “Blessed is he who comes in Yahweh's name”, the words shouted at Jesus' entry a few days before.",
      debate: "This assumes the meal was a Passover, as the Synoptic Gospels present it; how far the later Mishnah's order reflects practice in Jesus' day is uncertain.",
    },
    confidence: "mainstream",
    references: ["Mark 14:26", "Matthew 26:30", "Psalm 118:26"],
    sources: [scripture, { kind: "primary", citation: "Mishnah Pesachim 5:7; 10:6–7" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-083",
    era: "roman-judea",
    level: 17,
    category: "daily-life",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: John's Gospel names the place where Jesus was arrested as Gethsemane.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Only Mark 14:32 and Matthew 26:36 use the name Gethsemane. John 18:1 speaks of “a garden” across the brook Kidron, and Luke 22:39 simply says “the Mount of Olives.”",
      world:
        "Gethsemane is usually explained as Hebrew/Aramaic gat shemanim, “oil press.” The Mount of Olives was covered in olive groves, and rock-cut olive presses were common in the hills around Jerusalem.",
      theirEyes: "An olive grove with a press, outside the crowded city, was a quiet place to spend a festival night.",
      tradition: {
        christian: "Combining the Gospels gives the familiar “Garden of Gethsemane,” though no single Gospel uses both words together.",
      },
    },
    confidence: "settled",
    references: ["Mark 14:32", "Matthew 26:36", "John 18:1", "Luke 22:39"],
    sources: [scripture, { kind: "reference", citation: "“Gethsemane,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-084",
    era: "roman-judea",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which book written before Jesus' time already says, “what you yourself hate, do to no man”?",
    choices: ["Tobit", "Judith", "1 Maccabees", "Baruch"],
    answer: 0,
    explanation: {
      textSays:
        "Tobit 4:15: “And what you yourself hate, do to no man.” Jesus gives the positive form: “whatever you desire for men to do to you, you shall also do to them” (Matthew 7:12).",
      world:
        "Tobit is usually dated to around the 3rd or 2nd century BCE; copies in Aramaic and Hebrew were found among the Dead Sea Scrolls. The famous story of Hillel giving this rule to a would-be convert is much later: it is first recorded in the Babylonian Talmud (Shabbat 31a), compiled centuries after Jesus.",
      theirEyes: "A father's parting advice to his son, in a popular tale, put the rule in a nutshell long before Jesus taught it.",
      tradition: {
        shared: "Tobit is in the Catholic and Orthodox Old Testament and among the Apocrypha in Protestant Bibles; it is not in the Hebrew Bible.",
      },
    },
    confidence: "mainstream",
    references: ["Tobit 4:15", "Matthew 7:12"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Qumran Cave 4 Tobit manuscripts (4Q196–4Q200)" },
      { kind: "scholarship", citation: "Joseph A. Fitzmyer, Tobit (Commentaries on Early Jewish Literature, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-085",
    era: "roman-judea",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Matthew credits the “thirty pieces of silver” prophecy to which prophet, though its words are closest to Zechariah 11?",
    choices: ["Isaiah", "Ezekiel", "Jeremiah", "Daniel"],
    answer: 2,
    explanation: {
      textSays:
        "Matthew 27:9 says “that which was spoken through Jeremiah the prophet was fulfilled.” Zechariah 11:12–13 has the shepherd paid “thirty pieces of silver” and told to throw it “to the potter.” Exodus 21:32 sets thirty shekels as the price for a slave.",
      world: "A WEB footnote records that some manuscripts omit “Jeremiah”; textual critics such as Bruce Metzger regard “Jeremiah” as the original reading and the omission as a copyist's attempt to remove the difficulty.",
      theirEyes: "The priests would not put Judas' returned silver into the treasury, “since it is the price of blood” (Matthew 27:6), and bought a potter's field instead.",
      debate:
        "Many scholars think Matthew blends Zechariah with Jeremiah's scenes of a potter (Jeremiah 18–19) and a field bought for silver (Jeremiah 32) and names the better-known prophet. Others see a copying slip or memory error.",
    },
    confidence: "settled",
    references: ["Matthew 27:3–10", "Zechariah 11:12–13", "Exodus 21:32", "Jeremiah 19:1–13", "Jeremiah 32:6–9"],
    sources: [scripture, { kind: "scholarship", citation: "Bruce M. Metzger, A Textual Commentary on the Greek New Testament, 2nd ed. (1994)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "rom-086",
    era: "roman-judea",
    level: 18,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In which Gospel does Jesus say the rooster will crow twice before Peter's third denial?",
    choices: ["Matthew", "Luke", "John", "Mark"],
    answer: 3,
    explanation: {
      textSays:
        "Mark 14:30: “before the rooster crows twice, you will deny me three times.” Mark 14:72: “The rooster crowed the second time.” Matthew 26:34, Luke 22:34 and John 13:38 mention a single crowing.",
      world:
        "Night was divided into watches, and “when the rooster crows” was a name for one of them (Mark 13:35). Latin writers called the time before dawn gallicinium, “cockcrow” (Censorinus, On the Birthday 24).",
      theirEyes: "In a city without clocks, the first roosters told everyone that dawn was on its way.",
      debate: "Some important early manuscripts of Mark lack the first crowing (14:68) or the word “twice,” so the details vary between copies.",
    },
    confidence: "settled",
    references: ["Mark 14:30", "Mark 14:68", "Mark 14:72", "Matthew 26:34", "Luke 22:34", "John 13:38", "Mark 13:35"],
    sources: [
      scripture,
      { kind: "primary", citation: "Censorinus, De Die Natali 24" },
      { kind: "scholarship", citation: "Bruce M. Metzger, A Textual Commentary on the Greek New Testament, 2nd ed. (1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-087",
    era: "roman-judea",
    level: 18,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: apart from the Gospels, no ancient source describes a custom of releasing a prisoner at Passover.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Mark 15:6: “at the feast he used to release to them one prisoner, whomever they asked of him.” In John 18:39 Pilate tells the crowd, “you have a custom that I should release someone to you at the Passover.”",
      world:
        "No Roman or Jewish writer, including Josephus, mentions such a custom. Roman officials could pardon prisoners: a papyrus from Egypt (P.Flor. 61, c. 85 CE) records the Roman prefect of Egypt releasing an accused man to the crowd as a favour. The Mishnah, a later record (c. 200 CE), allows a Passover lamb to be slaughtered for someone promised release from prison (Pesachim 8:6).",
      theirEyes: "Pilgrims packed the city; a gesture of mercy at the feast might calm a restless crowd.",
      debate: "Some scholars accept a local practice that went unrecorded; others think the Gospels turned a one-off pardon into a custom.",
    },
    confidence: "mainstream",
    references: ["Mark 15:6–7", "Matthew 27:15", "John 18:39–40"],
    sources: [
      scripture,
      { kind: "primary", citation: "Papyrus Florentinus 61 (c. 85 CE)" },
      { kind: "primary", citation: "Mishnah Pesachim 8:6" },
      { kind: "scholarship", citation: "Raymond E. Brown, The Death of the Messiah (1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-088",
    era: "roman-judea",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Some ancient manuscripts of Matthew 27:16–17 give Barabbas a first name. What is it?",
    choices: ["Judas", "Simon", "Jesus", "Eleazar"],
    answer: 2,
    explanation: {
      textSays:
        "In most copies Pilate asks, “Whom do you want me to release to you? Barabbas, or Jesus who is called Christ?” (Matthew 27:17). Some manuscripts read “Jesus Barabbas,” and several modern translations (e.g., NRSV) print it.",
      world:
        "Barabbas is usually explained as Aramaic bar abba, “son of the father.” Origen (3rd century) knew copies with “Jesus Barabbas”; noting that many copies lacked it, he thought the name Jesus unfit for a sinner.",
      theirEyes: "Jesus (Yeshua) was among the most common Jewish men's names of the day, so two prisoners sharing it would not be strange.",
      debate:
        "Whether “Jesus Barabbas” is original is debated. Many textual critics think later scribes dropped “Jesus” out of reverence; others think it was added. The question here is only that some manuscripts have it, which is not in doubt.",
    },
    confidence: "settled",
    references: ["Matthew 27:16–17"],
    sources: [
      scripture,
      { kind: "primary", citation: "Origen, Commentary on Matthew (Latin series, on Matthew 27:16–17)" },
      { kind: "scholarship", citation: "Bruce M. Metzger, A Textual Commentary on the Greek New Testament, 2nd ed. (1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-089",
    era: "roman-judea",
    level: 18,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In John, the chief priests object to the wording of the sign on the cross. What does Pilate reply?",
    choices: [
      "“What is truth?”",
      "“I am innocent of this man's blood.”",
      "“Let it be as you say.”",
      "“What I have written, I have written.”",
    ],
    answer: 3,
    explanation: {
      textSays:
        "The sign read “JESUS OF NAZARETH, THE KING OF THE JEWS” (John 19:19). The chief priests asked for “he said, ‘I am King of the Jews,’” and Pilate answered, “What I have written, I have written” (19:21–22).",
      world:
        "Romans sometimes displayed the charge publicly. Cassius Dio tells of a slave led through the forum with an inscription giving the reason for his death before he was crucified (Roman History 54.3), and Eusebius records a martyr paraded with a tablet reading “This is Attalus the Christian” (Church History 5.1).",
      theirEyes: "Passers-by on the road outside the city could read the charge in three languages.",
    },
    confidence: "settled",
    references: ["John 19:19–22", "Mark 15:26"],
    sources: [
      scripture,
      { kind: "primary", citation: "Cassius Dio, Roman History 54.3" },
      { kind: "primary", citation: "Eusebius, Church History 5.1" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-090",
    era: "roman-judea",
    level: 18,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Mark calls Simon of Cyrene “the father of Alexander and Rufus.” In which letter does Paul greet a Rufus?",
    choices: ["Galatians", "Romans", "1 Thessalonians", "Philippians"],
    answer: 1,
    explanation: {
      textSays:
        "Romans 16:13: “Greet Rufus, the chosen in the Lord, and his mother and mine.” Mark 15:21 names Simon's sons; Matthew 27:32 and Luke 23:26 leave them out.",
      world:
        "Early tradition (Papias, quoted by Eusebius, Church History 3.39.15; also 2.15) links Mark's Gospel with Peter and, in Eusebius, with Rome, which is why some readers connect the two men named Rufus.",
      theirEyes: "A family from North Africa might have become well known in a congregation far from Jerusalem.",
      debate:
        "Rufus was a common Latin name, so many scholars think the link is possible but unprovable. Where Mark was written is also debated.",
    },
    confidence: "settled",
    references: ["Romans 16:13", "Mark 15:21", "Matthew 27:32", "Luke 23:26"],
    sources: [scripture, { kind: "primary", citation: "Eusebius, Church History 2.15; 3.39.15" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "rom-091",
    era: "roman-judea",
    level: 19,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Church of the Holy Sepulchre lies inside Jerusalem's Old City walls. Why doesn't that rule out the site?",
    choices: [
      "The Gospels place the crucifixion inside the Temple courts",
      "In Jesus' time the spot lay outside the wall; a later wall enclosed it",
      "Roman law required executions to take place inside cities",
      "Constantine had Jesus' tomb moved there from outside the city",
    ],
    answer: 1,
    explanation: {
      textSays:
        "John 19:20 says the place “was near the city,” and Hebrews 13:12 that Jesus “suffered outside of the gate.” John 19:41 adds that there was a garden with a new tomb.",
      world:
        "Josephus says Agrippa I began a new “third wall” to enclose growing northern suburbs (Jewish War 5.147–155), about a decade after Jesus' death. Excavations near the church found an old quarry and rock-cut tombs of the period, both normally outside a city. Eusebius says a pagan shrine of Aphrodite had been built over the tomb before Constantine had it uncovered; later writers connect that shrine with Hadrian's rebuilding of Jerusalem as Aelia Capitolina.",
      theirEyes: "Executions happened by roads just outside the gates, where many people would pass by.",
      debate: "Many archaeologists consider the site a plausible candidate; certainty is impossible.",
    },
    confidence: "mainstream",
    references: ["John 19:17–20", "John 19:41–42", "Hebrews 13:12"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 5.147–155" },
      { kind: "primary", citation: "Eusebius, Life of Constantine 3.25–28" },
      { kind: "scholarship", citation: "Dan Bahat, “Does the Holy Sepulchre Church Mark the Burial of Jesus?” Biblical Archaeology Review (1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-092",
    era: "roman-judea",
    level: 19,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Who popularised the Garden Tomb, near Jerusalem's Damascus Gate, as Jesus' burial place in the 1880s?",
    choices: ["Empress Helena", "Kathleen Kenyon", "General Charles Gordon", "Edward Robinson"],
    answer: 2,
    explanation: {
      world:
        "During his stay in Jerusalem in 1883, the British general Charles Gordon promoted a rocky hill nearby (“Gordon's Calvary”) as Golgotha and the tomb below it as Jesus' grave. Archaeologist Gabriel Barkay later argued the tomb was cut in the Iron Age (around the 8th–7th centuries BCE), so it would not be a “new tomb” in Jesus' day.",
      textSays: "John 19:41 describes “a new tomb in which no man had ever yet been laid,” in a garden near the place of crucifixion.",
      theirEyes: "Victorian visitors found the quiet garden easier to imagine as Easter morning than the crowded old church.",
      tradition: {
        christian:
          "The Garden Tomb is cherished by many Protestant visitors as a place of prayer. The Holy Sepulchre site has been venerated since Constantine's day (4th century).",
      },
    },
    confidence: "settled",
    references: ["John 19:41"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Gabriel Barkay, “The Garden Tomb: Was Jesus Buried Here?” Biblical Archaeology Review (1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-093",
    era: "roman-judea",
    level: 19,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Why could the darkness at the crucifixion not have been an ordinary solar eclipse?",
    choices: [
      "Passover fell at full moon, when a solar eclipse is impossible",
      "Jerusalem lies too far south to see eclipses",
      "The sun was below the horizon at the sixth hour",
      "Solar eclipses never occur in spring",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Mark 15:33: “there was darkness over the whole land until the ninth hour.” Luke 23:45 adds, “The sun was darkened.”",
      world:
        "Passover falls on the 14th–15th of Nisan (Leviticus 23:5–6), in the middle of a lunar month, at full moon. A solar eclipse can only happen at new moon, when the moon passes between the earth and the sun.",
      theirEyes: "From noon until mid-afternoon, people around Golgotha found the day turned dark, the Gospels say.",
      tradition: {
        christian:
          "The Christian chronographer Julius Africanus (early 3rd century) made this very argument against the writer Thallus, who had explained the darkness as an eclipse. Many Christians understand the darkness as a sign rather than a natural event.",
      },
      debate: "The oldest manuscripts of Luke 23:45 read a phrase meaning “the sun failing,” using the Greek verb (ekleipō) that also described eclipses; the WEB follows manuscripts reading “The sun was darkened.” Whether Luke meant an eclipse, and how to take the verb, is debated.",
    },
    confidence: "settled",
    references: ["Mark 15:33", "Luke 23:44–45", "Leviticus 23:5–6"],
    sources: [
      scripture,
      { kind: "primary", citation: "Julius Africanus, Chronographiae, fragment preserved by George Syncellus" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-094",
    era: "roman-judea",
    level: 19,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which Gospel explicitly says Jesus' mother stood by his cross?",
    choices: ["Matthew", "Mark", "Luke", "John"],
    answer: 3,
    explanation: {
      textSays:
        "John 19:25: “standing by Jesus' cross were his mother, his mother's sister, Mary the wife of Clopas, and Mary Magdalene.” Jesus entrusts her to “the disciple whom he loved” (19:26–27). Mark 15:40 names women “watching from afar”: Mary Magdalene, Mary the mother of James the less and of Joses, and Salome. Luke 23:49 does not name them.",
      theirEyes: "Women who had followed him from Galilee watched when most of the men had fled.",
      debate:
        "Because Mark 6:3 names Jesus' brothers as James and Joses, a minority of readers have wondered whether Mark's “Mary the mother of James… and of Joses” is Jesus' mother; most scholars think Mark would have said so.",
      tradition: {
        christian: "John's scene inspired the Stabat Mater hymn and countless paintings of Mary at the cross.",
      },
    },
    confidence: "settled",
    references: ["John 19:25–27", "Mark 15:40–41", "Matthew 27:56", "Luke 23:49", "Mark 6:3"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-095",
    era: "roman-judea",
    level: 19,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Amos Kloner surveyed Second Temple tombs around Jerusalem. How were most of their entrances closed?",
    choices: [
      "With round stones rolled in a groove",
      "With bronze doors",
      "With square or plug-shaped blocking stones",
      "With iron gratings",
    ],
    answer: 2,
    explanation: {
      world:
        "Kloner reported that of more than 900 rock-cut burial caves of the period known in and around Jerusalem, only four were closed with round (disk-shaped) stones, all elaborate tombs of wealthy families. Most were sealed with square or plug-shaped stones.",
      textSays:
        "Mark 15:46 says Joseph “rolled a stone against the door of the tomb,” and the women ask, “Who will roll away the stone…?” (16:3).",
      theirEyes: "Moving a heavy blocking stone at a tomb entrance could be too much for a few mourners on their own.",
      debate: "Kloner argued that Jesus' tomb was more likely closed with a square stone and that the Gospels' wording does not require a disk; others think a wealthy man's tomb such as Joseph's could have had a round one.",
    },
    confidence: "mainstream",
    references: ["Mark 15:46", "Mark 16:3–4", "Matthew 27:60"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Amos Kloner, “Did a Rolling Stone Close Jesus' Tomb?” Biblical Archaeology Review (1999)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "rom-096",
    era: "roman-judea",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Codex Sinaiticus and Codex Vaticanus, the oldest complete Greek manuscripts of Mark, end the Gospel how?",
    choices: [
      "With Jesus appearing to Mary Magdalene",
      "With the women fleeing the tomb in fear",
      "With Jesus taken up into heaven",
      "With the disciples meeting Jesus in Galilee",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Mark 16:8: “They said nothing to anyone; for they were afraid.” The “longer ending” (16:9–20), with appearances and the ascension, is missing in these 4th-century codices.",
      world:
        "A few manuscripts add a brief “shorter ending” after 16:8, usually followed by verses 9–20; one Old Latin manuscript has the shorter ending alone. The WEB prints 16:9–20 and gives the shorter ending in a footnote.",
      theirEyes: "Early hearers of Mark were left with an empty tomb, a message and frightened women.",
      debate:
        "Most scholars think verses 9–20 were added later; they disagree on whether Mark meant to stop at 16:8 or his ending was lost. Some, including the WEB translators (in a footnote), regard the longer ending as reliable.",
    },
    confidence: "settled",
    references: ["Mark 16:1–8", "Mark 16:9–20"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Codex Sinaiticus (British Library, Add MS 43725); Codex Vaticanus (Vatican Library, Vat. gr. 1209)" },
      { kind: "scholarship", citation: "Bruce M. Metzger, A Textual Commentary on the Greek New Testament, 2nd ed. (1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-097",
    era: "roman-judea",
    level: 20,
    category: "daily-life",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: of the four Gospels, only John says Nicodemus helped Joseph of Arimathea bury Jesus.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "John 19:39: “Nicodemus, who at first came to Jesus by night, also came bringing a mixture of myrrh and aloes, about a hundred Roman pounds.” They bound the body “in linen cloths with the spices, as the custom of the Jews is to bury” (19:40). Mark 15:43–46, Matthew 27:57–60 and Luke 23:50–53 name only Joseph; in Mark 16:1 and Luke 23:56 the women prepare spices to bring later.",
      world:
        "A Roman pound (Greek litra) was about a third of a kilogram, so John's figure comes to roughly 30 kg, a lavish amount. Josephus says spice-bearers walked in Herod the Great's funeral procession (Jewish War 1.673).",
      theirEyes: "Two members of Jerusalem's elite carrying a crucified man's body, with a small fortune in spices, would have drawn every eye.",
      tradition: {
        shared:
          "Burial with spices had a long history among Israel's kings: 2 Chronicles 16:14 says King Asa was laid “in the bed which was filled with sweet odors and various kinds of spices.”",
      },
      debate: "Commentators differ over whether John's large amount is meant literally or as a sign that Jesus was buried like a king.",
    },
    confidence: "settled",
    references: ["John 19:38–42", "John 3:1–2", "Mark 15:43–46", "Matthew 27:57–60", "Luke 23:50–56", "Mark 16:1", "2 Chronicles 16:14"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 1.673" },
      { kind: "scholarship", citation: "Raymond E. Brown, The Death of the Messiah (1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "rom-098",
    era: "roman-judea",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Codex Sinaiticus puts Emmaus 160 stadia from Jerusalem, instead of the 60 in most manuscripts of Luke. Which candidate site fits 160?",
    choices: ["Bethany", "Emmaus-Nicopolis (Imwas)", "Bethphage", "Caesarea Maritima"],
    answer: 1,
    explanation: {
      textSays:
        "Luke 24:13: two disciples, one named Cleopas (24:18), walk to “a village named Emmaus, which was sixty stadia from Jerusalem” (about 11 km).",
      world:
        "Emmaus-Nicopolis, site of a Maccabean battle (1 Maccabees 3:40–4:15), lies roughly 160 stadia (about 30 km) away by road; Eusebius identified it with Luke's Emmaus, which may be why some copyists wrote 160. Josephus mentions another Emmaus, where Vespasian settled veterans, about 30 stadia from Jerusalem (Jewish War 7.217), often linked with Motza.",
      theirEyes: "A late-afternoon walk of two or three hours brought the travellers home by evening.",
      debate: "Most textual critics prefer “sixty,” but which village Luke meant is still debated; Motza, el-Qubeibeh and Abu Ghosh have all been proposed.",
    },
    confidence: "mainstream",
    references: ["Luke 24:13–35"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 7.217" },
      { kind: "primary", citation: "Eusebius, Onomasticon, “Emmaus”" },
      { kind: "scholarship", citation: "Bruce M. Metzger, A Textual Commentary on the Greek New Testament, 2nd ed. (1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-099",
    era: "roman-judea",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which of the four Gospels alone tells of a guard posted and a seal set on Jesus' tomb?",
    choices: ["Matthew", "Mark", "Luke", "John"],
    answer: 0,
    explanation: {
      textSays:
        "Matthew 27:62–66: the chief priests and Pharisees ask Pilate to secure the tomb, and they make it secure, “sealing the stone.” In Matthew 28:11–15 the guards are paid to say the disciples stole the body, and “This saying was spread abroad among the Jews, and continues until today.”",
      theirEyes: "Soldiers sitting by a sealed tomb through a festival Sabbath would be hard to miss.",
      tradition: {
        christian: "Christians have often cited the guard as evidence that the tomb was watched. The Gospel of Peter (2nd century) later expands the story.",
      },
      debate:
        "Many scholars see the episode as Matthew's reply to a story current in his day; others accept it as historical. The Gospels' resurrection accounts differ in such details, and readers weigh this differently.",
    },
    confidence: "settled",
    references: ["Matthew 27:62–66", "Matthew 28:11–15"],
    sources: [scripture, { kind: "primary", citation: "Gospel of Peter 8–11" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-100",
    era: "roman-judea",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In John, who gets Peter into the high priest's courtyard on the night of the arrest?",
    choices: [
      "Mary Magdalene",
      "Malchus, the high priest's servant",
      "A Roman officer from the arresting cohort",
      "Another disciple, known to the high priest",
    ],
    answer: 3,
    explanation: {
      textSays:
        "John 18:15–16: Peter followed Jesus, “as did another disciple. Now that disciple was known to the high priest”; he went in with Jesus, then “spoke to her who kept the door, and brought in Peter.” It is the doorkeeper who first asks Peter if he is a disciple (18:17).",
      world:
        "Wealthy priestly houses had courtyards guarded at the gate. Remains of grand mansions, possibly priestly, have been excavated in Jerusalem's Upper City.",
      theirEyes: "Getting past the gate of a high priest's house at night needed someone the servants already knew.",
      debate:
        "Christian tradition often identifies this disciple with “the disciple whom Jesus loved,” but John never says so; scholars have also suggested figures such as Nicodemus or Joseph of Arimathea. Malchus is the servant whose ear was cut off (18:10).",
    },
    confidence: "settled",
    references: ["John 18:10", "John 18:15–17"],
    sources: [scripture, { kind: "scholarship", citation: "Nahman Avigad, Discovering Jerusalem (1983)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
