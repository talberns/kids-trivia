import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const romanJudea2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "rom-026",
    era: "roman-judea",
    level: 6,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Mary Magdalene's home town, Magdala, was probably the place Greeks called Taricheae. What was it known for?",
    choices: ["Quarrying marble", "Mining copper", "Salting and preserving fish", "Breeding war horses"],
    answer: 2,
    explanation: {
      textSays:
        "Luke 8:1–3 names Mary Magdalene (Mary “of Magdala”) among the women who travelled with Jesus and the Twelve and supported them from their own possessions.",
      world:
        "The Greek geographer Strabo says that at Taricheae the lake supplies excellent fish for pickling; the Greek name comes from tarichos, salted or pickled fish. Excavations at Magdala have uncovered a harbour, streets, ritual baths and a 1st-century synagogue (found in 2009).",
      theirEyes:
        "Walking into Magdala you would smell it before you saw it: rows of fish split, salted and packed in jars for markets far beyond Galilee.",
      debate:
        "Most scholars identify Magdala with Taricheae, mentioned by Strabo and often by Josephus, but the identification rests on location rather than an inscription, and a few have proposed other sites.",
    },
    confidence: "mainstream",
    references: ["Luke 8:1–3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Strabo, Geography 16.2.45" },
      { kind: "primary", citation: "Josephus, Jewish War 2.252; 3.462–505 (Taricheae)" },
      { kind: "archaeology", citation: "Magdala excavations, including the Israel Antiquities Authority excavation of the synagogue (2009)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-027",
    era: "roman-judea",
    level: 6,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the parable of the sower (Mark 4), which of these is NOT a place where the seed falls?",
    choices: ["By the road", "On rocky ground", "Among thorns", "On a threshing floor"],
    answer: 3,
    explanation: {
      textSays:
        "Mark 4:3–8: some seed falls by the road and birds eat it, some on rocky ground with little soil, some among thorns that choke it, and some on good ground that yields thirty, sixty and a hundredfold.",
      world:
        "Galilean farmers sowed grain by hand, scattering it broadly from a bag, so some seed always landed on paths, thin soil over limestone, or weedy field edges. Galilee's hillsides are still full of exposed rock.",
      theirEyes:
        "Every listener had watched a neighbour sow and seen birds dive onto the path behind him; the surprise in the story was the enormous harvest at the end.",
      debate:
        "Some scholars (following Joachim Jeremias) argued that in Palestine sowing came before ploughing, which would explain seed on the path; others dispute that this was the usual order.",
    },
    confidence: "settled",
    references: ["Mark 4:3–8", "Mark 4:13–20"],
    sources: [scripture, { kind: "scholarship", citation: "J. Jeremias, The Parables of Jesus (rev. ed., 1972)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-028",
    era: "roman-judea",
    level: 6,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Herod Antipas built a new capital on the Sea of Galilee around 20 CE. Which emperor did he name it after?",
    choices: ["Augustus", "Nero", "Tiberius", "Claudius"],
    answer: 2,
    explanation: {
      textSays:
        "John 6:23 mentions boats coming from Tiberias, and John 6:1 and 21:1 call the lake the Sea of Tiberias. The Gospels never say Jesus entered the city.",
      world:
        "Josephus says Antipas named the city after his patron, the emperor Tiberius (ruled 14–37 CE). Because it was built over old graves, Josephus says many Jews were unwilling to live there, and Antipas had to settle it with a mixed population, some brought in by force.",
      theirEyes:
        "To a pious Galilean, a shiny new royal city sitting on top of a cemetery was a place to avoid.",
      tradition: {
        jewish:
          "Josephus himself explains the problem: settling on a site cleared of graves was against Jewish law, which made such settlers unclean for seven days (compare Numbers 19:16).",
      },
    },
    confidence: "settled",
    references: ["John 6:1", "John 6:23", "John 21:1", "Numbers 19:16"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.2.3 (18.36–38)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-029",
    era: "roman-judea",
    level: 6,
    category: "daily-life",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: in Mark's Gospel, the people of Nazareth call Jesus himself “the carpenter.”",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Mark 6:3: “Isn't this the carpenter, the son of Mary…?” Matthew 13:55 instead has the crowd call him the carpenter's son.",
      world:
        "The Greek word is tektōn, a builder or craftsman who might work in wood or stone. Nazareth was a small village, but the city of Sepphoris, which Herod Antipas was rebuilding, lay only about 6 km away.",
      theirEyes:
        "To his neighbours he was a local tradesman whose family they knew by name, not a trained scholar, which is why his teaching astonished and offended them.",
      debate:
        "A few manuscripts of Mark (and the 3rd-century writer Origen) have “the son of the carpenter” instead, but critical editions read “the carpenter.” Some scholars suggest Jesus or Joseph may have found work at Sepphoris, but no source says so; it remains a guess.",
    },
    confidence: "settled",
    references: ["Mark 6:1–3", "Matthew 13:55"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.2.1 (Antipas rebuilds Sepphoris)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-030",
    era: "roman-judea",
    level: 6,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Mark explains the poor widow's two small coins by comparing them to which Roman coin?",
    choices: ["A sestertius", "A quadrans", "A gold aureus", "A denarius"],
    answer: 1,
    explanation: {
      textSays: "Mark 12:42: “A poor widow came, and she cast in two lepta, which make a quadrans.”",
      world:
        "The lepton was the smallest bronze coin in circulation in Judea. A quadrans was a quarter of a Roman as, and it took 64 quadrantes to make a denarius, a day's wage in Matthew 20:2. Mark's note suggests he was explaining local money to readers who knew Roman coins.",
      theirEyes:
        "Next to rich donors dropping in handfuls of silver, two tiny bronze coins made almost no sound at all.",
      tradition: {
        christian:
          "Jesus says she gave more than all the others, because they gave from their surplus but she gave everything she had to live on (Mark 12:43–44), a passage often read about generosity.",
      },
    },
    confidence: "settled",
    references: ["Mark 12:41–44", "Matthew 20:2"],
    sources: [scripture, { kind: "scholarship", citation: "N. DeBloois, “Coins in the New Testament,” BYU Studies 36, no. 3" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "rom-031",
    era: "roman-judea",
    level: 7,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "A Greek inscription from Herod's Temple warned whom not to pass a barrier, on pain of death?",
    choices: ["Women", "Non-Jews (Gentiles)", "Levites", "Children under thirteen"],
    answer: 1,
    explanation: {
      textSays:
        "In Acts 21:28–29, a crowd seizes Paul after accusing him of bringing Greeks into the Temple and defiling it.",
      world:
        "A complete warning stone, found in Jerusalem in 1871 by Charles Clermont-Ganneau, is in the Istanbul Archaeology Museums; a fragment of another copy is in the Israel Museum. It says no foreigner may enter within the balustrade around the sanctuary, and whoever is caught will be responsible for his own death. Josephus says such notices stood in Greek and Latin.",
      theirEyes:
        "A Greek visitor could wander the vast outer court freely, but at a low stone railing a sign in his own language told him to stop.",
      tradition: {
        christian:
          "Many interpreters connect Ephesians 2:14, which speaks of Christ breaking down the dividing wall between Jews and Gentiles, with this barrier.",
      },
    },
    confidence: "settled",
    references: ["Acts 21:27–30", "Ephesians 2:14"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Temple warning inscription, Istanbul Archaeology Museums (found 1871); fragment, Israel Museum (found 1935)" },
      { kind: "primary", citation: "Josephus, Jewish War 5.5.2 (5.193–194); Antiquities of the Jews 15.11.5 (15.417)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-032",
    era: "roman-judea",
    level: 7,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Acts 1:12 says the Mount of Olives was “a Sabbath day's journey” from Jerusalem. What does that phrase mean?",
    choices: [
      "A full day's walk of about 30 km",
      "The route priests walked to the altar",
      "The distance custom allowed a person to walk on the Sabbath",
      "The path of the Passover procession",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Acts 1:12: “Then they returned to Jerusalem from the mountain called Olivet, which is near Jerusalem, a Sabbath day's journey away.”",
      world:
        "Exodus 16:29 tells Israel not to leave their place on the seventh day, and Jews worked out how far one could walk. The Mishnah, a later record (c. 200 CE), sets the limit at 2,000 cubits, roughly 1 km, about the distance from the city to the Mount of Olives.",
      theirEyes:
        "A Jerusalemite knew without measuring how far a Sabbath stroll could go: out to the Mount of Olives and back, but no farther.",
      tradition: {
        jewish:
          "The Damascus Document from the Dead Sea Scrolls is even stricter: no one may walk more than 1,000 cubits outside his city on the Sabbath (CD 10.21), though it allows 2,000 cubits to pasture an animal (CD 11.5–6).",
      },
    },
    confidence: "mainstream",
    references: ["Acts 1:12", "Exodus 16:29"],
    sources: [
      scripture,
      { kind: "primary", citation: "Damascus Document (CD) 10.21; 11.5–6" },
      { kind: "primary", citation: "Mishnah Eruvin 4:3 (later record, c. 200 CE)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-033",
    era: "roman-judea",
    level: 7,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Archaeologists have found hundreds of stepped, plastered pools from Jesus' time in Judea and Galilee. What were they mainly for?",
    choices: [
      "Storing salted fish",
      "Ritual immersion to become pure",
      "Hot baths in the Roman style",
      "Baptizing converts to Christianity",
    ],
    answer: 1,
    explanation: {
      textSays:
        "The Torah often requires bathing in water to end impurity (e.g., Leviticus 15:5–13). Mark 7:3–4 says Pharisees and all the Jews wash before eating and after coming from the marketplace.",
      world:
        "These pools (Hebrew mikva'ot) appear in Jerusalem's priestly houses, near the Temple Mount, at Qumran, Sepphoris, Magdala and Masada. Steps run down into the water, so a person could immerse fully.",
      theirEyes:
        "Before going up to the Temple, a pilgrim would walk down the steps into cold water and come up ready to enter the holy courts.",
      tradition: {
        jewish:
          "Josephus says the Essenes bathed in cold water before their communal meals (Jewish War 2.129), and the Dead Sea Scrolls give detailed rules for purifying waters.",
      },
      debate:
        "A few pools are disputed (some may simply be cisterns), but the identification of stepped, plastered pools as ritual baths is the standard view.",
    },
    confidence: "mainstream",
    references: ["Leviticus 15:5–13", "Mark 7:3–4"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "R. Reich, Miqwa'ot (Jewish Ritual Baths) in the Second Temple, Mishnaic and Talmudic Periods (Jerusalem: Yad Ben-Zvi and Israel Exploration Society, 2013; Hebrew)" },
      { kind: "primary", citation: "Josephus, Jewish War 2.129" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-034",
    era: "roman-judea",
    level: 7,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After being healed, the man from the Gerasene region spreads the news in “the Decapolis.” What was the Decapolis?",
    choices: [
      "Ten villages around Nazareth",
      "A group of Greek-style cities, mostly east of the Jordan",
      "Ten Roman legions stationed in Syria",
      "Ten schools of Pharisees in Jerusalem",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Mark 5:1–20: across the lake, Jesus heals a man possessed by demons; a large herd of pigs rushes into the sea, and the man proclaims in the Decapolis what Jesus had done.",
      world:
        "Decapolis means “ten cities.” Pliny the Elder lists them, including Scythopolis (Beth Shean), Gadara, Hippos, Pella, Gerasa and Philadelphia (modern Amman). They had temples, theatres and largely non-Jewish populations.",
      theirEyes:
        "Crossing the lake from Capernaum, a Galilean fisherman would see pig herds on the hillsides, a sure sign he was in Gentile country.",
      tradition: {
        jewish: "Pigs were unclean for Jews (Leviticus 11:7), so a herd of them marks the story's setting as foreign territory.",
      },
    },
    confidence: "settled",
    references: ["Mark 5:1–20", "Leviticus 11:7"],
    sources: [scripture, { kind: "primary", citation: "Pliny the Elder, Natural History 5.74" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-035",
    era: "roman-judea",
    level: 7,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Josephus says Pilate removed army standards bearing Caesar's image from Jerusalem after Jews protested.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays: "Luke 3:1 dates John the Baptist's preaching to the fifteenth year of Tiberius, when Pontius Pilate was governor of Judea.",
      world:
        "Josephus reports that Pilate had standards with images of the emperor carried into Jerusalem by night. Crowds went to Caesarea and protested for five days. When Pilate surrounded them with soldiers, they bared their necks, saying they would rather die than see their law broken, and Pilate had the standards removed.",
      theirEyes:
        "Jerusalemites woke to find the emperor's image on poles in the holy city, and walked over 100 km to the governor's door to demand it go.",
      tradition: {
        jewish: "The protest rested on the commandment against making images (Exodus 20:4), which Josephus says the standards violated.",
      },
    },
    confidence: "settled",
    references: ["Luke 3:1", "Exodus 20:4"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 2.9.2–3 (2.169–174); Antiquities of the Jews 18.3.1 (18.55–59)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "rom-036",
    era: "roman-judea",
    level: 8,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Jesus' parable of the dragnet (Matthew 13:47–48), what do the fishermen do once the net is on the shore?",
    choices: [
      "Throw the whole catch back to keep the lake full",
      "Offer the first fish at the Temple",
      "Sell everything to Roman soldiers",
      "Keep the good fish and throw away the bad",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Matthew 13:47–48: a net cast into the sea gathers fish of every kind; when it is full the fishermen draw it ashore, sit down, collect the good into containers and throw the bad away. Jesus applies this to the separation at the end of the age (13:49–50).",
      world:
        "A dragnet was a long net hauled in a sweep toward the beach, so it caught everything in its path.",
      theirEyes:
        "Sorting the catch on the beach was everyday work, and every child in a fishing family learned which fish were worth keeping and which were thrown away.",
      tradition: {
        jewish:
          "Leviticus 11:9–12 allows only water creatures with fins and scales; the lake's scaleless catfish could not be eaten, so “bad” fish could mean ritually unclean ones, not only spoiled ones.",
      },
    },
    confidence: "settled",
    references: ["Matthew 13:47–50", "Leviticus 11:9–12"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "M. Nun, The Sea of Galilee and Its Fishermen in the New Testament (Kibbutz Ein Gev, 1989)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-037",
    era: "roman-judea",
    level: 8,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Matthew 17, the coin found in the fish's mouth pays the Temple tax for whom?",
    choices: ["Peter alone", "All twelve disciples", "Jesus and Peter", "The tax collectors themselves"],
    answer: 2,
    explanation: {
      textSays:
        "In Capernaum, collectors ask Peter, “Doesn't your teacher pay the didrachma?” Jesus tells him he will find “a stater coin” in a fish's mouth: “Take that, and give it to them for me and you” (Matthew 17:24–27).",
      world:
        "The didrachma (two drachmas) matched the yearly half-shekel Temple tax. A stater was worth four drachmas, exactly enough for two people. The Mishnah, a later record (c. 200 CE), says sanctuary payments were reckoned in Tyrian silver (Bekhorot 8:7), and the shekel of Tyre is generally thought to be the coin used.",
      theirEyes:
        "Every Jewish man knew the collectors would come round each year for the Temple's half-shekel, and in a small town everyone noticed who paid.",
      tradition: {
        jewish:
          "Exodus 30:13 commands a half-shekel offering, and Josephus and Philo describe Jews everywhere sending the yearly tax to Jerusalem.",
      },
    },
    confidence: "settled",
    references: ["Matthew 17:24–27", "Exodus 30:13"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.9.1 (18.312); Philo, Special Laws 1.76–78" },
      { kind: "scholarship", citation: "N. DeBloois, “Coins in the New Testament,” BYU Studies 36, no. 3" },
      { kind: "primary", citation: "Mishnah Bekhorot 8:7 (later record, c. 200 CE)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-038",
    era: "roman-judea",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When warned that Herod Antipas wants to kill him, what does Jesus call Herod?",
    choices: ["That wolf", "That serpent", "That jackal", "That fox"],
    answer: 3,
    explanation: {
      textSays:
        "Luke 13:31–32: some Pharisees warn Jesus, “Herod wants to kill you,” and he replies, “Go and tell that fox…”",
      world:
        "Herod Antipas, a son of Herod the Great, ruled Galilee and Perea as tetrarch from 4 BCE to 39 CE, the whole of Jesus' adult life. Josephus says the emperor Gaius (Caligula) finally removed him in 39 CE; the Antiquities says he was exiled to Lyons in Gaul (the Jewish War says Spain).",
      theirEyes:
        "Calling the ruler of Galilee a fox in public, to men who might report it, was a bold insult.",
      debate:
        "Interpreters debate whether “fox” meant cunning, destructive, or a small and unimpressive figure compared with a lion; the text itself does not explain.",
    },
    confidence: "settled",
    references: ["Luke 13:31–33", "Luke 3:1"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.7.2 (18.252); Jewish War 2.183" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-039",
    era: "roman-judea",
    level: 8,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: a rule book among the Dead Sea Scrolls forbade lifting an animal out of a pit on the Sabbath.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "In Matthew 12:11, Jesus asks who among his hearers would not take hold of a sheep that fell into a pit on the Sabbath and lift it out; Luke 14:5 has a similar saying.",
      world:
        "The Damascus Document, known from copies at Qumran and from the Cairo Genizah, says that if an animal falls into a pit or ditch, one shall not raise it on the Sabbath (CD 11.13–14).",
      theirEyes:
        "Sabbath rules were a live argument in Jesus' day: different groups drew the lines in very different places.",
      tradition: {
        jewish:
          "Jesus' question assumes his Galilean audience would rescue the animal, which shows that the strict Damascus Document rule was not shared by everyone.",
      },
    },
    confidence: "settled",
    references: ["Matthew 12:9–12", "Luke 14:5"],
    sources: [
      scripture,
      { kind: "primary", citation: "Damascus Document (CD) 11.13–14; Qumran copies 4Q266–4Q273" },
      { kind: "scholarship", citation: "L. H. Schiffman, Reclaiming the Dead Sea Scrolls (Jewish Publication Society, 1994), ch. on the Sabbath code" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-040",
    era: "roman-judea",
    level: 8,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to John's Gospel, who was the father-in-law of the high priest Caiaphas?",
    choices: ["Gamaliel", "Nicodemus", "Joseph of Arimathea", "Annas"],
    answer: 3,
    explanation: {
      textSays:
        "John 18:13 says Jesus was first taken to Annas, the father-in-law of Caiaphas, who was high priest that year. Luke 3:2 dates John the Baptist's call to the high priesthood of Annas and Caiaphas.",
      world:
        "Josephus calls him Ananus son of Seth: appointed high priest in 6 CE and removed in 15 CE, he remained powerful, and all five of his sons later became high priest. Caiaphas held office from about 18 to 36 CE, an unusually long term, until the Syrian governor Vitellius removed him.",
      theirEyes:
        "In Jerusalem everyone knew that real power lay with one priestly family, whoever wore the high priest's robes that year.",
    },
    confidence: "settled",
    references: ["John 18:13", "Luke 3:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.2.1–2 (18.26, 18.34–35); 18.4.3 (18.95); 20.9.1 (20.198)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "rom-041",
    era: "roman-judea",
    level: 9,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Luke's parable of a nobleman who travels to receive a kingdom, while his citizens protest, echoes which ruler's trip to Rome?",
    choices: ["Pontius Pilate", "John Hyrcanus", "Archelaus, son of Herod the Great", "Judas the Galilean"],
    answer: 2,
    explanation: {
      textSays:
        "Luke 19:12–14: a nobleman goes to a far country to receive a kingdom, but “his citizens hated him, and sent an envoy after him, saying, ‘We don't want this man to reign over us.’” On his return he punishes his enemies (19:27).",
      world:
        "Josephus records that after Herod's death in 4 BCE, Archelaus went to Rome to have Augustus confirm him as king. A Jewish embassy of fifty followed, asking Rome not to give him the kingdom. Augustus made him only ethnarch, and deposed him in 6 CE.",
      theirEyes:
        "Older listeners remembered Archelaus' rule and the delegation that went all the way to Rome to oppose him.",
      debate:
        "Many scholars see a deliberate allusion; Matthew's similar parable of the talents (Matthew 25:14–30) lacks the kingdom theme, so some think Luke combined two stories.",
    },
    confidence: "mainstream",
    references: ["Luke 19:11–27", "Matthew 2:22", "Matthew 25:14–30"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 17.11.1–4 (17.299–320); 17.13.2 (17.342–344); Jewish War 2.80–100" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-042",
    era: "roman-judea",
    level: 9,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The parable of the wicked tenants (Mark 12:1) opens with a hedge, a winepress and a tower. Which passage does it echo?",
    choices: ["Psalm 23", "Isaiah 5, the Song of the Vineyard", "Genesis 9, Noah's vineyard", "Ruth 2, gleaning in the fields"],
    answer: 1,
    explanation: {
      textSays:
        "Mark 12:1: a man plants a vineyard, puts a hedge around it, digs a pit for the winepress and builds a tower, then rents it to farmers. Isaiah 5:1–2 describes God's vineyard with a tower and winepress, and 5:7 says the vineyard is the house of Israel. Mark 12:12 says the leaders realized the parable was aimed at them.",
      world:
        "Absentee landowners renting estates to tenant farmers were common in the Roman East, and disputes over rent could turn violent.",
      theirEyes:
        "Anyone who knew Isaiah heard the opening lines and thought at once: this story is about Israel and its leaders.",
      tradition: {
        christian: "Christians have traditionally read the beloved son killed by the tenants (Mark 12:6–8) as Jesus himself.",
      },
    },
    confidence: "settled",
    references: ["Mark 12:1–12", "Isaiah 5:1–7"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-043",
    era: "roman-judea",
    level: 9,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to Philo of Alexandria, what did Pilate set up in Herod's palace in Jerusalem that sparked protests?",
    choices: [
      "A golden eagle",
      "A statue of the emperor Gaius",
      "Gilded shields dedicated to Tiberius",
      "An arena for gladiator games",
    ],
    answer: 2,
    explanation: {
      world:
        "Philo says Pilate hung gilded shields, bearing no image but an inscription naming himself and Tiberius, in Herod's former palace. Herod's descendants and other leaders protested; Tiberius wrote angrily and ordered the shields moved to the temple of Augustus at Caesarea. Philo describes Pilate as inflexible and stubborn. The golden eagle belongs to Herod the Great's reign, and Gaius' statue plan came after Pilate.",
      theirEyes:
        "To Jerusalem's leaders, even shields without a picture, hung in their holy city in honour of the emperor, broke with their ancestral customs.",
      debate:
        "Some scholars think Philo's shields and Josephus' standards are two accounts of one incident; most treat them as separate episodes.",
    },
    confidence: "settled",
    references: [],
    sources: [{ kind: "primary", citation: "Philo, On the Embassy to Gaius (Legatio ad Gaium) 299–305" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-044",
    era: "roman-judea",
    level: 9,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says Pilate caused riots by paying for an aqueduct with which money?",
    choices: [
      "Taxes sent from Galilee by Herod Antipas",
      "The Temple's sacred treasury, called Corban",
      "A gift from Emperor Tiberius",
      "Fines collected from the Samaritans",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Mark 7:11 explains Corban as a gift dedicated to God. In Matthew 27:6 the chief priests refuse to put Judas' silver into the treasury (Greek korbanas) because it is blood money.",
      world:
        "Josephus says Pilate spent “the sacred treasure which is called Corban” on an aqueduct bringing water to Jerusalem. When crowds protested, he sent soldiers disguised in ordinary clothes among them with clubs, and many were killed or injured.",
      theirEyes:
        "Jerusalem needed water, but to the crowds, money given to God being spent by a Roman governor felt like robbery from the Temple.",
      tradition: {
        jewish: "Josephus calls the fund sacred, and Mark 7:11 shows that “Corban” meant something dedicated to God; things devoted to God were most holy (Leviticus 27:28) and not for ordinary use.",
      },
    },
    confidence: "settled",
    references: ["Mark 7:11", "Matthew 27:6", "Leviticus 27:28"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 2.9.4 (2.175–177); Antiquities of the Jews 18.3.2 (18.60–62)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-045",
    era: "roman-judea",
    level: 9,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jesus compares hypocrites to “whitened tombs” (Matthew 23:27). Why were tombs often whitewashed in his day?",
    choices: [
      "To keep the bodies cool",
      "To warn passers-by so they would not become ritually impure",
      "To show off the family's wealth to Roman officials",
      "To mark the graves of priests only",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Matthew 23:27: “you are like whitened tombs, which outwardly appear beautiful,” but inside they are full of dead men's bones and all uncleanness.",
      world:
        "Contact with a grave made a person impure for seven days (Numbers 19:16). The Mishnah, a later record (c. 200 CE), says graves were marked with lime on the 15th of Adar, about a month before Passover, so that pilgrims and travellers would not touch them by accident.",
      theirEyes:
        "A pilgrim heading to Jerusalem for Passover watched for white patches by the road and stepped well around them.",
      debate:
        "Some scholars think Matthew's “beautiful” tombs point instead to Jerusalem's plastered, decorated monumental tombs; Luke's version speaks of unmarked graves people walk over unaware (Luke 11:44).",
    },
    confidence: "mainstream",
    references: ["Matthew 23:27–28", "Luke 11:44", "Numbers 19:16"],
    sources: [scripture, { kind: "primary", citation: "Mishnah Shekalim 1:1; Maaser Sheni 5:1 (later record, c. 200 CE)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "rom-046",
    era: "roman-judea",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Josephus describes John the Baptist's baptism as being for the forgiveness of sins.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays: "Mark 1:4 calls John's rite a baptism of repentance for the forgiveness of sins.",
      world:
        "Josephus says the opposite: John's washing was acceptable to God not as a way of putting away sins, but to purify the body, once the soul had already been cleansed by righteousness.",
      theirEyes: "To many who waded into the Jordan, the water mattered because their lives had changed first.",
      tradition: {
        jewish:
          "The Dead Sea Scrolls make a similar point: the Community Rule says washing cannot cleanse someone who refuses to turn from wrongdoing, and that a person is purified by a humble spirit when sprinkled with water (1QS 3.4–9).",
      },
      debate:
        "Scholars debate whether Josephus reshaped John for Greek and Roman readers, or whether the Gospels and Josephus stress different sides of the same practice.",
    },
    confidence: "settled",
    references: ["Mark 1:4–5"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.5.2 (18.116–119)" },
      { kind: "primary", citation: "Community Rule (1QS) 3.4–9" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-047",
    era: "roman-judea",
    level: 10,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says some Jews saw which disaster as God's punishment on Herod Antipas for killing John the Baptist?",
    choices: [
      "A great earthquake in Tiberias",
      "A famine across Galilee",
      "The defeat of his army by Aretas IV, king of the Nabateans",
      "A fire that destroyed Sepphoris",
    ],
    answer: 2,
    explanation: {
      textSays: "Mark 6:17–18 says Antipas had married Herodias, his brother's wife, and John condemned the marriage.",
      world:
        "To marry Herodias, Antipas planned to divorce his first wife, a daughter of Aretas IV, king of the Nabateans of Petra. She fled to her father. Later, a border dispute led to war, and around 36 CE Aretas destroyed Antipas' army. Josephus says some Jews thought this was divine punishment for John's death.",
      theirEyes: "In Galilee, people whispered that the prophet's blood had finally caught up with the tetrarch.",
      tradition: {
        christian: "The same king appears in 2 Corinthians 11:32, where Paul says Aretas' governor in Damascus tried to arrest him.",
      },
    },
    confidence: "settled",
    references: ["Mark 6:17–18", "2 Corinthians 11:32"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.5.1–2 (18.109–119)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-048",
    era: "roman-judea",
    level: 10,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In John 19, why did the soldiers break the legs of the men crucified with Jesus?",
    choices: [
      "As extra punishment for trying to escape",
      "To hasten death so the bodies could come down before the Sabbath",
      "Because Roman law required it at every crucifixion",
      "To carry out a sentence passed by the Sanhedrin",
    ],
    answer: 1,
    explanation: {
      textSays:
        "John 19:31–33: because it was the Preparation Day, “the Jews” (a term in John often understood here as the Jerusalem authorities) asked Pilate to have the legs broken and the bodies taken away, so they would not remain on the cross on the Sabbath. The soldiers found Jesus already dead and did not break his legs.",
      world:
        "Deuteronomy 21:22–23 forbids leaving a hanged body overnight. Josephus says Jews took down even the crucified and buried them before sunset. Romans often left victims for days, so leg-breaking was not routine.",
      theirEyes: "With sunset and the festival Sabbath approaching, there was pressure to finish the executions quickly.",
      debate:
        "The first report on the crucified man Yehohanan (found 1968) claimed his legs were broken, but a later reappraisal found no clear evidence of this.",
    },
    confidence: "settled",
    references: ["John 19:31–36", "Deuteronomy 21:22–23"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 4.5.2 (4.317)" },
      { kind: "scholarship", citation: "J. Zias and E. Sekeles, “The Crucified Man from Giv'at ha-Mivtar: A Reappraisal,” Israel Exploration Journal 35 (1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-049",
    era: "roman-judea",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Magdala Stone, found in a 1st-century synagogue in 2009, is carved with which Temple object?",
    choices: ["A portrait of Emperor Tiberius", "A Roman legion's eagle", "The god Dionysus", "A seven-branched menorah"],
    answer: 3,
    explanation: {
      world:
        "The carved stone block was found in the synagogue at Magdala and dates to before the Temple's destruction in 70 CE. Its front shows a seven-branched menorah on a base, flanked by jars, under an arch. It is among the earliest known carvings of the menorah, made while the Temple still stood, and the earliest found in a synagogue. The original has been removed for safekeeping and a replica stands at the site.",
      theirEyes:
        "Galileans who rarely saw Jerusalem could gather around a stone showing the Temple's lampstand right in their own synagogue.",
      debate:
        "The stone was excavated by an Israel Antiquities Authority team led by Dina Avshalom-Gorni. Scholars debate its purpose; some, like archaeologist Mordechai Aviam, read its carvings as a symbolic picture of the Temple itself.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Magdala Stone, Migdal synagogue, Israel Antiquities Authority excavation (2009)" },
      { kind: "scholarship", citation: "M. Aviam, “The Decorated Stone from the Synagogue at Migdal,” Novum Testamentum 55 (2013)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "rom-050",
    era: "roman-judea",
    level: 10,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After Herod's death, rebels seized Sepphoris near Nazareth. What does Josephus say the Roman governor Varus did?",
    choices: [
      "Made it the capital of a new Roman province",
      "Pardoned the rebels and withdrew",
      "Turned it into a legion's winter camp",
      "Burned the city and enslaved its people",
    ],
    answer: 3,
    explanation: {
      world:
        "In 4 BCE a rebel named Judas, son of Hezekiah, broke into the royal armoury at Sepphoris. Varus, governor of Syria, sent troops (helped by Nabatean forces) who burned the city and made its inhabitants slaves, and he later crucified about 2,000 rebels near Jerusalem. Herod Antipas then rebuilt Sepphoris as the ornament of all Galilee.",
      theirEyes:
        "Nazareth's villagers, a few kilometres away, could have seen the smoke rising from the burning city.",
      debate:
        "Excavations at Sepphoris have found little sign of a destruction layer from 4 BCE, so some archaeologists think Josephus exaggerated the damage.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 17.10.5 (17.271); 17.10.9–10 (17.289, 17.295); 18.2.1 (18.27); Jewish War 2.56, 2.68" },
      { kind: "scholarship", citation: "M. A. Chancey, The Myth of a Gentile Galilee (Cambridge University Press, 2002)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
