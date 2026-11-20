import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const primeval2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "pri-026",
    era: "primeval",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Genesis 3, what does the serpent tell the woman will happen if she eats the forbidden fruit?",
    choices: [
      "She will be able to speak with every animal",
      "She will be given the garden as her own",
      "She will be like God, knowing good and evil",
      "She will become queen over the man",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 3:4–5: the serpent tells the woman, “You won’t really die, for God knows that in the day you eat it, your eyes will be opened, and you will be like God, knowing good and evil.”",
      world:
        "Hebrew listeners would hear a pun: the couple were “naked” (arummim, 2:25), and the serpent was “subtle” (arum, 3:1). The serpent is called one of the animals God made; Genesis 3 never names it as Satan.",
      theirEyes:
        "Every shepherd knew snakes as quiet, clever and dangerous: just the creature to slip a doubt into a conversation.",
    },
    confidence: "settled",
    references: ["Genesis 2:25", "Genesis 3:1–5"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Gordon J. Wenham, Genesis 1–15, Word Biblical Commentary 1 (1987), on Genesis 3:1" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-027",
    era: "primeval",
    level: 6,
    category: "tradition",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Genesis 3 says the forbidden fruit was an apple.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 3:6 only says the woman “took some of its fruit, and ate.” The tree is never identified as any particular species.",
      world:
        "The apple comes from later Western tradition and art. A pun is often suggested as one reason: in Latin, malum means “evil” and malum also means “apple.”",
      theirEyes:
        "An Israelite listener would not have pictured an apple at all; the story simply speaks of the fruit of a tree in the middle of the garden.",
      tradition: {
        jewish:
          "Ancient readers guessed differently. The Book of the Watchers describes the “tree of wisdom” that Adam and Eve ate from, comparing its fruit to clusters of the vine (1 Enoch 32:3–6).",
      },
    },
    confidence: "settled",
    references: ["Genesis 3:3–6"],
    sources: [scripture, { kind: "primary", citation: "1 Enoch 32:3–6 (trans. R. H. Charles)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-028",
    era: "primeval",
    level: 6,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis explains the name Eve (Hebrew Chavvah) by linking it to which idea?",
    choices: ["Living", "Rib", "Garden", "Mother of the morning"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 3:20: “The man called his wife Eve because she would be the mother of all the living.” He names her right after the curses, a note of hope at a dark moment.",
      world:
        "The name Chavvah sounds like the Hebrew root for life and living (chay). Like many names in Genesis, it is explained by a sound-play rather than strict grammar.",
      theirEyes:
        "In a world where every mother's name was a blessing or a prayer, calling the first woman “Life” said that the human story would go on.",
      tradition: {
        jewish:
          "In the Book of Tobit, Tobias prays on his wedding night: “You made Adam, and gave him Eve his wife for a helper and support. From them came the seed of men” (Tobit 8:6).",
      },
    },
    confidence: "settled",
    references: ["Genesis 3:20", "Tobit 8:6"],
    sources: [scripture, { kind: "reference", citation: "Brown–Driver–Briggs Hebrew Lexicon, “חַוָּה (Chavvah)”" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-029",
    era: "primeval",
    level: 6,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Cherubim guard the way to the tree of life in Genesis 3. Where else does the Torah place cherubim?",
    choices: [
      "On the stones of the high priest's breastplate",
      "On the cover of the Ark of the Covenant",
      "On the horns of the bronze altar",
      "On the doorposts at Passover",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 3:24: God “placed cherubim at the east of the garden of Eden, and a flaming sword which turned every way, to guard the way to the tree of life.” Exodus 25:18–22 sets two golden cherubim on the Ark's cover, the “mercy seat,” and God says: “There I will meet with you.” Cherubim were also worked into the Tabernacle's curtains and veil (26:1, 31).",
      world:
        "Winged guardian creatures, part human and part animal, stood at palace and temple gates across the Near East. Carved ivories from Megiddo and Samaria show winged sphinxes that many scholars compare with cherubim.",
      theirEyes:
        "For a priest, cherubim marked holy ground: the same beings who barred Eden watched over the place where God met Israel.",
    },
    confidence: "settled",
    references: ["Genesis 3:24", "Exodus 25:18–22", "Exodus 26:1", "Exodus 26:31"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Gordon Loud, The Megiddo Ivories, Oriental Institute Publications 52 (University of Chicago, 1939)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-030",
    era: "primeval",
    level: 6,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis 3 never names the devil. Which Jewish book says death entered the world “by the envy of the devil”?",
    choices: ["1 Maccabees", "Judith", "The Wisdom of Solomon", "Tobit"],
    answer: 2,
    explanation: {
      textSays: "In Genesis 3:1 the tempter is simply “the serpent,” one of the animals God had made.",
      theirEyes:
        "A Greek-speaking Jew in Alexandria, reading Genesis alongside philosophy, wanted to know where death and evil had really come from.",
      tradition: {
        jewish:
          "The Wisdom of Solomon (usually dated between the late 1st century BCE and the early 1st century CE) says: “God created man for incorruption… but death entered into the world by the envy of the devil, and those who belong to him experience it” (Wisdom 2:23–24).",
        christian:
          "Revelation 12:9 speaks of “the old serpent, he who is called the devil and Satan, the deceiver of the whole world.” The letter 1 Clement (late 1st century CE) also says death entered the world through envy, but illustrates it with Cain and Abel (1 Clement 3:4–4:7).",
      },
      debate:
        "Wisdom 2:24 does not mention the serpent by name; it is usually read as an allusion to Genesis 3 that identifies the tempter with the devil.",
    },
    confidence: "settled",
    references: ["Genesis 3:1", "Wisdom of Solomon 2:23–24", "Revelation 12:9"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "David Winston, The Wisdom of Solomon, Anchor Bible 43 (Doubleday, 1979)" },
      { kind: "primary", citation: "1 Clement 3:4–4:7" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "pri-031",
    era: "primeval",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Genesis 3:15, the serpent will bruise which part of the woman's offspring?",
    choices: ["His hand", "His head", "His eye", "His heel"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 3:15: “I will put hostility between you and the woman, and between your offspring and her offspring. He will bruise your head, and you will bruise his heel.”",
      world:
        "The picture fits real life: a snake strikes at the foot of a passer-by, and a person crushes a snake's head. Many scholars read the verse as explaining the lasting enmity between humans and snakes.",
      theirEyes:
        "Anyone walking barefoot through fields or rocky ground knew the danger of a snake underfoot.",
      tradition: {
        christian:
          "From the 2nd century, Christians such as Irenaeus read this verse as the first promise of Christ, the woman's offspring who defeats the serpent (Against Heresies 5.21.1). It is often called the “Protoevangelium,” the first gospel.",
      },
    },
    confidence: "settled",
    references: ["Genesis 3:15"],
    sources: [scripture, { kind: "primary", citation: "Irenaeus, Against Heresies 5.21.1" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-032",
    era: "primeval",
    level: 7,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: in Genesis 3, God directly curses both the man and the woman.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Only the serpent (“you are cursed,” 3:14) and the ground are cursed: “the ground is cursed for your sake” (3:17). The woman is told of pain in childbirth (3:16) and the man of hard labour (3:17–19), but the word “cursed” is not spoken over them. The next person cursed is Cain (4:11).",
      theirEyes:
        "For a farmer pulling thorns and thistles from a stony field, Genesis explained why the ground fought back.",
      tradition: {
        shared:
          "Genesis 5:29 echoes this: Noah's father hopes his son will bring comfort from the toil “caused by the ground which Yahweh has cursed.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 3:14–19", "Genesis 4:11", "Genesis 5:29"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-033",
    era: "primeval",
    level: 7,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Before sending them out of Eden, what does God himself make for the man and the woman?",
    choices: ["A plough and a yoke", "A tent of goats' hair", "An altar of earth", "Garments of animal skins"],
    answer: 3,
    explanation: {
      textSays:
        "First the couple “sewed fig leaves together, and made coverings for themselves” (Genesis 3:7). Later “Yahweh God made garments of animal skins for Adam and for his wife, and clothed them” (3:21).",
      theirEyes:
        "Shepherds wore sheepskin and goatskin against the cold; a leather garment was far tougher than a few stitched leaves.",
      tradition: {
        jewish:
          "Jubilees (2nd century BCE) draws a rule from this scene: those who know the Law should cover themselves and not go uncovered as the Gentiles do (Jubilees 3:31). Many scholars connect this with the Greek gymnasium built in Jerusalem in the 170s BCE, where athletes exercised naked (compare 1 Maccabees 1:14–15). Philo suggested the “tunics of skin” could stand for the human body (Questions and Answers on Genesis 1.53).",
      },
    },
    confidence: "settled",
    references: ["Genesis 3:7", "Genesis 3:21", "1 Maccabees 1:14–15"],
    sources: [
      scripture,
      { kind: "primary", citation: "Book of Jubilees 3:31 (trans. R. H. Charles)" },
      { kind: "primary", citation: "Philo, Questions and Answers on Genesis 1.53" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-034",
    era: "primeval",
    level: 7,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the Epic of Gilgamesh, what does a snake steal from the hero?",
    choices: ["His sword", "A plant that restores youth", "The Tablet of Destinies", "His royal crown"],
    answer: 1,
    explanation: {
      world:
        "In Tablet XI, Gilgamesh finds a plant called “Old man grown young.” While he bathes in a pool, a snake smells it, carries it off and sheds its skin. Gilgamesh weeps: the chance to escape old age is gone. (In other myths it is the bird Anzu that steals the Tablet of Destinies.)",
      textSays:
        "In Genesis 3:22–24, humans are sent out of Eden so they cannot take from the tree of life and “live forever.”",
      theirEyes:
        "People who watched snakes slip out of old skins wondered if these creatures had found the secret of renewal that humans lacked.",
    },
    confidence: "settled",
    references: ["Genesis 3:22–24"],
    sources: [
      scripture,
      { kind: "primary", citation: "Epic of Gilgamesh, Tablet XI (Standard Babylonian version)" },
      { kind: "scholarship", citation: "A. R. George, The Babylonian Gilgamesh Epic (Oxford, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-035",
    era: "primeval",
    level: 7,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Josephus retold Genesis for Greek readers. How did he explain the serpent being able to talk?",
    choices: [
      "At that time all living creatures shared one language",
      "An angel spoke through the serpent",
      "Eve had learned the speech of animals",
      "The serpent was really a disguised man",
    ],
    answer: 0,
    explanation: {
      textSays: "Genesis 3:1 simply has the serpent speak, without explanation.",
      theirEyes:
        "Writing in Rome, Josephus wanted educated pagans to find the ancient Jewish story sensible and serious.",
      tradition: {
        jewish:
          "Josephus says that at that time all the living creatures had one language. The serpent, envious of the couple's happiness, persuaded the woman. As punishment God took away its speech, put poison under its tongue and made it crawl on its belly (Antiquities 1.1.4).",
      },
    },
    confidence: "settled",
    references: ["Genesis 3:1", "Genesis 3:14"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.1.4 (Whiston)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "pri-036",
    era: "primeval",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Genesis 4 clearly states why God rejected Cain's offering.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 4:4–5 says only that “Yahweh respected Abel and his offering, but he didn’t respect Cain and his offering.” Readers notice that Abel brought “the firstborn of his flock and of its fat,” while Cain brought simply “from the fruit of the ground” (4:3–4). God then warns Cain: “sin crouches at the door” (4:7).",
      theirEyes: "Every worshipper knew the question: what makes a gift acceptable to God?",
      tradition: {
        jewish:
          "The Septuagint reads 4:7 differently, roughly: “If you offer correctly but do not divide correctly, have you not sinned?” This suggests a fault in how Cain made the offering.",
        christian: "1 John 3:12 says Cain killed his brother “because his deeds were evil, and his brother’s righteous.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 4:3–7", "1 John 3:12"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 4:7 (New English Translation of the Septuagint, trans. Robert J. V. Hiebert)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-037",
    era: "primeval",
    level: 8,
    category: "tradition",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Genesis 4:10, what does God tell Cain is crying out to him from the ground?",
    choices: ["The voice of his brother's blood", "The thorns of the field", "The smoke of Abel's offering", "The serpent's offspring"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 4:9–10: asked where Abel is, Cain replies, “I don’t know. Am I my brother’s keeper?” God answers, “The voice of your brother’s blood cries to me from the ground.”",
      theirEyes: "In a world of blood feuds, everyone understood: innocent blood demanded justice, and God himself had heard it.",
      tradition: {
        jewish:
          "In the Book of the Watchers, Enoch sees the spirit of Abel in the place of the dead, still bringing his complaint against Cain until Cain's descendants are wiped from the earth (1 Enoch 22:5–7).",
        christian:
          "Jesus speaks of the blood of righteous Abel as the first of the innocent blood shed on earth (Matthew 23:35), and Hebrews 12:24 says Jesus' blood “speaks better than that of Abel.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 4:9–10", "Matthew 23:35", "Hebrews 12:24"],
    sources: [scripture, { kind: "primary", citation: "1 Enoch 22:5–7 (trans. R. H. Charles)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-038",
    era: "primeval",
    level: 8,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Genesis 4, what was the purpose of the sign God gave Cain?",
    choices: [
      "To shame him in front of his family",
      "To show he could never offer sacrifice again",
      "To mark him as a slave to Seth",
      "To protect him from being killed",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Cain fears that “whoever finds me will kill me” (Genesis 4:14). God replies that vengeance will be taken sevenfold on anyone who kills him, and “appointed a sign for Cain, so that anyone finding him would not strike him” (4:15).",
      theirEyes:
        "Without a family to defend him, a man driven from his clan was fair game for any avenger; Cain's sign worked like a guarantee of protection.",
      debate:
        "Genesis never says what the sign was or where it was placed: on Cain's body, or a sign given to reassure him. Ancient and modern guesses vary widely, and none comes from the text.",
    },
    confidence: "settled",
    references: ["Genesis 4:13–15"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Claus Westermann, Genesis 1–11: A Commentary (Augsburg, 1984), on Genesis 4:15" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-039",
    era: "primeval",
    level: 8,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Cain settles in “the land of Nod, east of Eden.” The name Nod sounds like the Hebrew word for what?",
    choices: ["Iron", "Sleep", "Wandering", "Sunrise"],
    answer: 2,
    explanation: {
      textSays:
        "God tells Cain, “You will be a fugitive and a wanderer in the earth” (Genesis 4:12). The Hebrew for “wanderer” is nad; then “Cain left Yahweh’s presence, and lived in the land of Nod, east of Eden” (4:16). Cain then builds a city and names it after his son Enoch (4:17).",
      world:
        "No ancient land of Nod is known; the name works as wordplay, a “Land of Wandering.” The English joke that “the land of Nod” means sleep is a much later pun.",
      theirEyes: "For settled villagers, there was no harsher fate than to wander with no land and no clan.",
      tradition: {
        jewish:
          "Josephus says Cain grew only more wicked, building the city of Enoch, inventing weights and measures and being the first to set boundaries around land (Antiquities 1.2.2).",
      },
    },
    confidence: "mainstream",
    references: ["Genesis 4:12–17"],
    sources: [
      scripture,
      { kind: "reference", citation: "Brown–Driver–Briggs Hebrew Lexicon, “נוֹד (Nod)”" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.2.2 (Whiston)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-040",
    era: "primeval",
    level: 8,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Romans 5:12, through whom does Paul say sin entered the world?",
    choices: ["The serpent", "Cain", "One man", "The angels who fell"],
    answer: 2,
    explanation: {
      textSays:
        "Romans 5:12: “Therefore, as sin entered into the world through one man, and death through sin, so death passed to all men because all sinned.” Paul calls Adam “a foreshadowing of him who was to come” (5:14).",
      theirEyes:
        "To a small church in Rome, Paul offered a sweeping story: one man's disobedience had touched everyone, and one man's obedience could do the same (5:19).",
      tradition: {
        jewish:
          "Jewish writers of the time traced evil in different ways. Sirach (early 2nd century BCE) says: “The beginning of sin came from a woman. Because of her, we all die” (Sirach 25:24), while the Wisdom of Solomon blames the devil's envy (2:24).",
        christian:
          "Paul sets Adam and Christ side by side: “as in Adam all die, so also in Christ all will be made alive” (1 Corinthians 15:22), calling Christ “the last Adam” (15:45).",
      },
    },
    confidence: "settled",
    references: ["Romans 5:12–19", "1 Corinthians 15:22", "1 Corinthians 15:45", "Sirach 25:24", "Wisdom of Solomon 2:24"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "pri-041",
    era: "primeval",
    level: 9,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis 4 credits Lamech's sons with founding several ways of life. Which one is NOT among them?",
    choices: ["Living in tents with livestock", "Playing the harp and pipe", "Forging bronze and iron", "Writing"],
    answer: 3,
    explanation: {
      textSays:
        "Jabal was “the father of those who dwell in tents and have livestock”; Jubal “the father of all who handle the harp and pipe”; Tubal Cain “the forger of every cutting instrument of bronze and iron” (Genesis 4:20–22). Writing is not mentioned.",
      world:
        "Mesopotamian tradition also credited the arts of civilisation to figures before the flood: seven wise sages (apkallu). Iron tools came into wide use in the Levant only gradually after about 1200 BCE. Tubal was also the name of a people Ezekiel says traded in bronze vessels (Ezekiel 27:13).",
      theirEyes:
        "Herders, musicians and smiths were all familiar village figures; Genesis gives each trade an ancestor in the earliest days.",
      tradition: {
        jewish: "Jubilees (2nd century BCE), not Genesis, makes Enoch the first person to learn writing (Jubilees 4:17).",
      },
    },
    confidence: "settled",
    references: ["Genesis 4:19–22", "Ezekiel 27:13"],
    sources: [
      scripture,
      { kind: "primary", citation: "Book of Jubilees 4:17 (trans. R. H. Charles)" },
      { kind: "scholarship", citation: "Claus Westermann, Genesis 1–11: A Commentary (Augsburg, 1984), on Genesis 4:17–24" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-042",
    era: "primeval",
    level: 9,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Lamech boasts that he will be avenged “seventy-seven times.” Which saying of Jesus echoes the Greek of this verse?",
    choices: [
      "“Love your enemies”",
      "Forgiving a brother “until seventy times seven”",
      "Giving to Caesar what belongs to Caesar",
      "Leaving the ninety-nine sheep to find one",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 4:23–24: Lamech tells his wives he has killed a man for wounding him: “If Cain will be avenged seven times, truly Lamech seventy-seven times.” In Matthew 18:21–22, Peter asks if he should forgive “until seven times,” and Jesus answers: “until seventy times seven.”",
      world:
        "The Septuagint of Genesis 4:24 and Matthew 18:22 use the same Greek phrase, hebdomēkontakis hepta. Translators differ on whether it means 77 or 490.",
      theirEyes: "Lamech's song is the boast of a clan chief; Jesus' answer turns endless revenge into endless forgiveness.",
      debate:
        "Most commentators see a deliberate reversal of Lamech's boast, though some think the shared phrase reflects common idiom rather than an intended allusion.",
    },
    confidence: "mainstream",
    references: ["Genesis 4:23–24", "Matthew 18:21–22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 4:24" },
      { kind: "scholarship", citation: "W. D. Davies and Dale C. Allison, The Gospel According to Saint Matthew, ICC, vol. 2 (T&T Clark, 1991), on Matthew 18:22" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-043",
    era: "primeval",
    level: 9,
    category: "faith-practice",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Genesis 4:26 says people called on Yahweh's name in Enosh's day, though Exodus 6:3 says the patriarchs did not know that name.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 4:26: “A son was also born to Seth, and he named him Enosh. At that time men began to call on Yahweh’s name.” Exodus 6:3: “I appeared to Abraham, to Isaac, and to Jacob, as God Almighty; but by my name Yahweh I was not known to them.”",
      theirEyes:
        "For Israelites who prayed to Yahweh, Genesis 4:26 traced their worship back almost to the beginning of the human race.",
      debate:
        "Many scholars explain the tension by sources: one strand of Genesis uses the name Yahweh from the start, while the Priestly strand, as in Exodus 6, has it revealed to Moses. Others read Exodus 6:3 as meaning the patriarchs did not yet know the full meaning of the name, not the word itself.",
    },
    confidence: "settled",
    references: ["Genesis 4:26", "Exodus 6:2–3"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "R. W. L. Moberly, The Old Testament of the Old Testament (Fortress, 1992)" },
      { kind: "scholarship", citation: "Claus Westermann, Genesis 1–11: A Commentary (Augsburg, 1984), on Genesis 4:26" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-044",
    era: "primeval",
    level: 9,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Josephus says Seth's descendants carved their discoveries on two pillars. What knowledge did they record?",
    choices: ["The laws later given to Moses", "The names of all the animals", "The knowledge of the heavenly bodies", "Adam's last will"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 4:25 says Eve named Seth because “God has given me another child instead of Abel.” Genesis 5:3 says Adam fathered Seth “in his own likeness, after his image.”",
      theirEyes:
        "For Jews in a Greek world that prized astronomy, it was a proud claim: their own ancestors had studied the stars first.",
      tradition: {
        jewish:
          "Josephus describes Seth's descendants as virtuous and says they discovered the science of the heavenly bodies. Because Adam had foretold destruction by fire and by flood, they inscribed it on two pillars, one of brick and one of stone; he claims the stone one still stood in “the land of Siriad” (Antiquities 1.2.3).",
      },
    },
    confidence: "settled",
    references: ["Genesis 4:25", "Genesis 5:3"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.2.3 (Whiston)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-045",
    era: "primeval",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Enoch “walked with God” and then “was not found.” How many years does Genesis 5 give for his life?",
    choices: ["365", "777", "930", "969"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 5:23–24: “All the days of Enoch were three hundred sixty-five years. Enoch walked with God, and he was not found, for God took him.” 930 is Adam's age, 969 Methuselah's and 777 Lamech's (5:5, 27, 31).",
      world: "Many scholars note that 365 matches the number of days in a solar year.",
      theirEyes: "Every other entry in the list ends “then he died”; Enoch's ending stands out like a riddle.",
      tradition: {
        jewish:
          "Jubilees says Enoch wrote down the signs of heaven according to the order of their months (Jubilees 4:17). The Astronomical Book of 1 Enoch, revealed to Enoch by the angel Uriel, teaches a 364-day year (1 Enoch 72–82).",
        christian: "Hebrews 11:5 says Enoch was taken “so that he wouldn’t see death.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 5:21–24", "Hebrews 11:5"],
    sources: [
      scripture,
      { kind: "primary", citation: "Book of Jubilees 4:17 (trans. R. H. Charles)" },
      { kind: "primary", citation: "1 Enoch 72–82, the Astronomical Book (trans. R. H. Charles)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "pri-046",
    era: "primeval",
    level: 10,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The New Testament letter of Jude quotes a prophecy of “Enoch, the seventh from Adam.” Where does that prophecy come from?",
    choices: ["Genesis 5", "The Book of Jubilees", "1 Enoch", "The Wisdom of Solomon"],
    answer: 2,
    explanation: {
      textSays:
        "Jude 14: “About these also Enoch, the seventh from Adam, prophesied, saying, “Behold, the Lord came with ten thousands of his holy ones.”” Genesis 5 records no words of Enoch. Counting Adam as the first, Enoch is seventh (5:3–18).",
      world:
        "The quotation matches 1 Enoch 1:9. Aramaic fragments of 1 Enoch, including this opening section, were found among the Dead Sea Scrolls.",
      theirEyes: "For Jude's first readers, the books of Enoch were well-known, respected writings about judgement.",
      tradition: {
        christian:
          "Tertullian defended 1 Enoch as scripture, partly because Jude cites it (On the Apparel of Women 1.3). Most churches did not accept it, but the Ethiopian Orthodox Tewahedo Church keeps 1 Enoch in its Bible.",
      },
    },
    confidence: "settled",
    references: ["Jude 14–15", "Genesis 5:3–18"],
    sources: [
      scripture,
      { kind: "primary", citation: "1 Enoch 1:9 (trans. R. H. Charles)" },
      { kind: "archaeology", citation: "Aramaic fragments of 1 Enoch from Qumran Cave 4 (4Q204, 4QEnoch c ar)" },
      { kind: "scholarship", citation: "J. T. Milik, The Books of Enoch: Aramaic Fragments of Qumrân Cave 4 (Oxford, 1976)" },
      { kind: "primary", citation: "Tertullian, On the Apparel of Women 1.3" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-047",
    era: "primeval",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Weld-Blundell Prism's version of the Sumerian King List names how many kings before the flood?",
    choices: ["Two", "Eight", "Twelve", "Forty"],
    answer: 1,
    explanation: {
      world:
        "The clay prism in the Ashmolean Museum, Oxford (AN1923.444), dates to about 1800 BCE. It names eight kings in five cities before the flood, ruling 241,200 years in all; the first, Alulim of Eridu, reigns 28,800 years. Other copies vary, and Berossus, writing in Greek in the 3rd century BCE, lists ten.",
      textSays:
        "Genesis 5 has ten generations from Adam to Noah, with lifespans of hundreds of years, not tens of thousands (Genesis 5:3–32).",
      theirEyes: "Scribes in Babylonian schools copied the list to show that kingship had come down from heaven in an unbroken line.",
      debate: "Scholars compare the two lists, but whether Genesis 5 depends on Mesopotamian traditions, or both reflect a shared pattern, is debated.",
    },
    confidence: "settled",
    references: ["Genesis 5:3–32"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Weld-Blundell Prism, Ashmolean Museum, Oxford (AN1923.444)" },
      { kind: "scholarship", citation: "Thorkild Jacobsen, The Sumerian King List, Assyriological Studies 11 (University of Chicago, 1939)" },
      { kind: "scholarship", citation: "Gerald P. Verbrugghe and John M. Wickersham, Berossos and Manetho, Introduced and Translated (University of Michigan Press, 1996)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-048",
    era: "primeval",
    level: 10,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Adding up the Septuagint's numbers in Genesis 5 creates a famous puzzle. What is it?",
    choices: [
      "Methuselah outlives the Flood by fourteen years",
      "Adam dies before Seth is born",
      "Enoch is born before his father Jared",
      "Noah is older than Methuselah",
    ],
    answer: 0,
    explanation: {
      textSays:
        "In the Hebrew (Masoretic) text, Methuselah fathers Lamech at 187 and lives 969 years (Genesis 5:25–27), so he dies in the very year of the Flood (7:6).",
      world:
        "The Septuagint generally gives fathers more years before their sons are born, but for Methuselah its main text has 167, not 187 (a few manuscripts read 187). His total stays 969, so he dies fourteen years after the Flood, though Genesis says only eight people survived it (compare 1 Peter 3:20).",
      theirEyes: "Careful readers with Greek and Hebrew scrolls side by side could do the sums, and the results did not match.",
      tradition: {
        christian:
          "Augustine calls this a famous question (City of God 15.11) and argues that where the Greek and Hebrew differ, the Hebrew should be preferred (15.13). Jerome also discusses it (Hebrew Questions on Genesis, on 5:25).",
      },
    },
    confidence: "settled",
    references: ["Genesis 5:25–27", "Genesis 7:6", "1 Peter 3:20"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 5" },
      { kind: "primary", citation: "Augustine, City of God 15.11–13" },
      { kind: "primary", citation: "Jerome, Hebrew Questions on Genesis, on Genesis 5:25" },
      { kind: "scholarship", citation: "Ronald S. Hendel, The Text of Genesis 1–11: Textual Studies and Critical Edition (Oxford, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-049",
    era: "primeval",
    level: 10,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: in the Samaritan Pentateuch's numbers, Jared, Methuselah and Lamech all die in the year of the Flood.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "In the Hebrew (Masoretic) text only Methuselah dies in the Flood year; Jared (962) and Lamech (777) die earlier (Genesis 5:20, 31).",
      world:
        "The Samaritan Pentateuch has fathers younger at their sons' births and shortens three lives: Jared lives 847 years, Methuselah 720 and Lamech 653. The sums bring all three to death in the Flood year, 1307 years after creation by its count (1656 in the Masoretic).",
      theirEyes: "Scribes who copied these lists treated every number as meaningful, and adjusted them when the sums seemed to clash.",
      debate:
        "Ronald Hendel and others argue that the Masoretic, Septuagint and Samaritan versions each adjusted an earlier set of numbers, partly to avoid anyone surviving the Flood. Which numbers are oldest is still debated.",
    },
    confidence: "settled",
    references: ["Genesis 5:18–31", "Genesis 7:6"],
    sources: [
      scripture,
      { kind: "primary", citation: "Samaritan Pentateuch, Genesis 5" },
      { kind: "scholarship", citation: "Ronald S. Hendel, The Text of Genesis 1–11: Textual Studies and Critical Edition (Oxford, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-050",
    era: "primeval",
    level: 10,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Enoch is seventh in Genesis 5. Which seventh king before the flood in Mesopotamian lists is often compared with him?",
    choices: ["Sargon of Akkad", "Hammurabi of Babylon", "Gilgamesh of Uruk", "Enmeduranki of Sippar"],
    answer: 3,
    explanation: {
      world:
        "Enmeduranki (Enmeduranna) appears seventh in the Weld-Blundell King List. A later Babylonian text says the gods Shamash and Adad brought him into their assembly and taught him divination, and that he passed these secrets to his descendants. Sippar was the city of the sun god Shamash.",
      textSays: "Genesis 5:24: “Enoch walked with God, and he was not found, for God took him.”",
      theirEyes:
        "Babylonian diviners traced their craft to a king who had stood before the gods; Jewish visionaries told of an ancestor who walked with God.",
      debate:
        "Many scholars, following W. G. Lambert and James VanderKam, think Enmeduranki traditions helped shape the later picture of Enoch as a revealer of heavenly secrets, and note the solar link with Enoch's 365 years. Others think the parallels are loose.",
    },
    confidence: "mainstream",
    references: ["Genesis 5:21–24"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "W. G. Lambert, “Enmeduranki and Related Matters,” Journal of Cuneiform Studies 21 (1967)" },
      { kind: "scholarship", citation: "James C. VanderKam, Enoch and the Growth of an Apocalyptic Tradition (Catholic Biblical Association, 1984)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
