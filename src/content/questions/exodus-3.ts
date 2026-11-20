import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;
const milgrom = { kind: "scholarship", citation: "Jacob Milgrom, Leviticus 1–16 (Anchor Bible 3; Doubleday, 1991)" } as const;

export const exodus3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "exo-051",
    era: "exodus",
    level: 11,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Exodus 16, God sends manna in the morning. What came up and covered the camp in the evening?",
    choices: ["Locusts", "Doves", "Quail", "Fish from the sea"],
    answer: 2,
    explanation: {
      textSays:
        "Exodus 16:13: “In the evening, quail came up and covered the camp; and in the morning the dew lay around the camp.” When the dew lifted, the manna was left on the ground (16:14–15).",
      world:
        "Common quail migrate between Europe and Africa each spring and autumn, crossing the Mediterranean and Sinai, and often land exhausted after the sea crossing. Josephus already explains the story this way: the birds, tired from flying over the sea, came down on the camp (Antiquities 3.1.5).",
      theirEyes:
        "After weeks of hunger, people woke to find small brown birds everywhere among the tents, too tired to fly away.",
    },
    confidence: "settled",
    references: ["Exodus 16:13–15"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 3.1.5 (Whiston)" },
      { kind: "reference", citation: "“Quail,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-052",
    era: "exodus",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Where Moses struck the rock for water, he named the place Massah and Meribah. What do the names mean?",
    choices: ["“Spring” and “well”", "“Testing” and “quarrelling”", "“Rock” and “staff”", "“Thirst” and “rescue”"],
    answer: 1,
    explanation: {
      textSays:
        "Exodus 17:7: “He called the name of the place Massah, and Meribah, because the children of Israel quarreled, and because they tested Yahweh, saying, ‘Is Yahweh among us, or not?’” Psalm 95:8 later warns: “Don't harden your heart, as at Meribah, as in the day of Massah in the wilderness.”",
      world:
        "Massah comes from the Hebrew root n-s-h, “to test,” and Meribah from r-y-b, “to quarrel” or bring a legal complaint. Biblical place names often record what happened there.",
      theirEyes:
        "Every time someone said the place's name aloud, they were reminding themselves of the day the people turned on Moses over water.",
      tradition: {
        christian: "Hebrews 3:7–11 quotes Psalm 95 as a warning to Christian readers not to repeat the wilderness generation's testing.",
      },
    },
    confidence: "settled",
    references: ["Exodus 17:1–7", "Psalm 95:8–9", "Hebrews 3:7–11"],
    sources: [scripture, { kind: "reference", citation: "Brown–Driver–Briggs Hebrew and English Lexicon, s.v. נסה and ריב" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-053",
    era: "exodus",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When God came down on Mount Sinai, what sound “grew louder and louder” before God answered Moses?",
    choices: ["A trumpet", "A rushing wind", "A choir of angels", "Rolling drums"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 19:16–19: there were thunders, lightnings, a thick cloud “and the sound of an exceedingly loud trumpet.” The mountain smoked and quaked. Then: “When the sound of the trumpet grew louder and louder, Moses spoke, and God answered him by a voice” (19:19).",
      world:
        "The Hebrew word here is shofar, a ram's-horn trumpet; Exodus 19:13 also uses yovel, “ram's horn.” Ancient Near Eastern texts often describe a god's arrival with storm, fire and earthquake.",
      theirEyes:
        "Standing at the foot of a smoking, shaking mountain, with a horn blast no human was blowing, the whole camp trembled.",
      tradition: {
        christian:
          "Hebrews 12:18–19 contrasts Sinai's fire, darkness, storm and “the sound of a trumpet” with the “heavenly Jerusalem” Christians come to.",
      },
    },
    confidence: "settled",
    references: ["Exodus 19:13–19", "Hebrews 12:18–22"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-054",
    era: "exodus",
    level: 11,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After the golden calf, Moses called, “Whoever is on Yahweh's side, come to me!” Which tribe rallied to him?",
    choices: ["Judah", "Reuben", "Benjamin", "Levi"],
    answer: 3,
    explanation: {
      textSays:
        "Exodus 32:26: “All the sons of Levi gathered themselves together to him.” They carried out judgement in the camp, and about three thousand died (32:27–28). Moses then told them, “Consecrate yourselves today to Yahweh” (32:29).",
      world:
        "Moses and Aaron were themselves Levites (Exodus 6:16–20). In the Torah the Levites become the tribe set apart to serve at the sanctuary, while the priesthood belongs to Aaron's family within it.",
      theirEyes:
        "In a camp still loud with feasting, one tribe stepped across the open ground to stand beside Moses at the gate.",
    },
    confidence: "settled",
    references: ["Exodus 32:25–29", "Exodus 6:16–20"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-055",
    era: "exodus",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Exodus says God himself cut the stone for the second set of tablets, just as for the first.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "The first tablets were “the work of God, and the writing was the writing of God” (Exodus 32:16), and Moses broke them at the foot of the mountain (32:19). For the second set God tells Moses, “Chisel two stone tablets like the first. I will write on the tablets the words that were on the first tablets” (34:1).",
      world:
        "Inscribed stone tablets and stelae were a common way to display treaties and laws in the ancient Near East, so a covenant written on stone fitted the world of the text.",
      theirEyes:
        "This time Moses climbed Sinai carrying the heavy stones himself, cut by his own hands.",
    },
    confidence: "settled",
    references: ["Exodus 32:15–19", "Exodus 34:1–4"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "exo-056",
    era: "exodus",
    level: 12,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "How many times does the Torah give the command “You shall not boil a young goat in its mother's milk”?",
    choices: ["Once", "Twice", "Three times", "Ten times"],
    answer: 2,
    explanation: {
      textSays:
        "The same words appear in Exodus 23:19, Exodus 34:26 and Deuteronomy 14:21: “You shall not boil a young goat in its mother's milk.” In both Exodus passages it follows the command to bring the first of the first fruits to the house of Yahweh; in Deuteronomy it closes a list of food laws.",
      world:
        "Goats gave both meat and milk in a herding economy, so the rule touched everyday cooking. Much later, the Mishnah (compiled about 200 CE) built on this verse the wider rabbinic separation of meat and dairy.",
      theirEyes:
        "A family roasting a kid for a feast had to think about where the milk in the pot had come from.",
      tradition: {
        jewish:
          "Philo of Alexandria (1st century CE) read the command as a lesson in gentleness: it was cruel to cook a young animal in the very milk meant to feed it (On the Virtues).",
      },
      debate:
        "The Torah gives no reason. Some scholars once linked it to a Canaanite rite in a text from Ugarit, but that reading of the tablet is now widely doubted; others see a humane principle or a rule about keeping life and death apart.",
    },
    confidence: "settled",
    references: ["Exodus 23:19", "Exodus 34:26", "Deuteronomy 14:21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, On the Virtues (on humane laws)" },
      { kind: "primary", citation: "Mishnah Hullin 8 (later record, c. 200 CE)" },
      { kind: "scholarship", citation: "Menahem Haran, “Seething a Kid in Its Mother's Milk,” Journal of Jewish Studies 30 (1979)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "exo-057",
    era: "exodus",
    level: 12,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Sealing the covenant in Exodus 24, Moses sprinkled half the blood on the altar. Where did the other half go?",
    choices: ["Onto the people", "Onto the stone tablets", "Onto the doorposts of the tents", "Into the river"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 24:6–8: Moses put half the blood in basins and sprinkled half on the altar. After reading “the book of the covenant,” he “sprinkled it on the people, and said, ‘Look, this is the blood of the covenant, which Yahweh has made with you concerning all these words.’”",
      world:
        "Ancient treaties were often sealed with a ritual involving animals. Here the altar stands for God and the twelve pillars for the twelve tribes (24:4), so the blood binds both sides.",
      theirEyes:
        "Drops of blood landing on your clothes told you that you were now personally bound by every word just read aloud.",
      tradition: {
        christian:
          "At the Last Supper Jesus says, “This is my blood of the new covenant” (Mark 14:24), echoing Exodus 24:8; Hebrews 9:19–20 quotes the Sinai scene directly.",
      },
    },
    confidence: "settled",
    references: ["Exodus 24:3–8", "Mark 14:24", "Hebrews 9:19–20"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-058",
    era: "exodus",
    level: 12,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Exodus 32:20, what did Moses do with the golden calf?",
    choices: [
      "Melted it down to make the Tabernacle's lampstand",
      "Sent it back to Egypt as tribute",
      "Burned it, ground it to powder, scattered it on water and made Israel drink it",
      "Buried it at the foot of the mountain",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Exodus 32:20: “He took the calf which they had made, and burned it with fire, ground it to powder, and scattered it on the water, and made the children of Israel drink it.”",
      world:
        "A text from Ugarit (in modern Syria) describes the goddess Anat destroying the god Mot in a similar series of steps: she splits him, winnows him, burns him with fire, grinds him with millstones and scatters him in the field. Scholars compare the two as standard language for total destruction.",
      theirEyes:
        "The god they had danced around that morning ended up as grit in the water they had to swallow.",
    },
    confidence: "settled",
    references: ["Exodus 32:19–20"],
    sources: [
      scripture,
      { kind: "primary", citation: "Ugaritic Baal Cycle, KTU 1.6 column ii" },
      { kind: "scholarship", citation: "Samuel E. Loewenstamm, “The Making and Destruction of the Golden Calf,” Biblica 48 (1967)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-059",
    era: "exodus",
    level: 12,
    category: "neighbours",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Laws of Hammurabi, centuries older than Exodus, also say that whoever destroys a man's eye loses his own.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Exodus 21:23–25: “life for life, eye for eye, tooth for tooth.” But a master who destroys a slave's eye must set the slave free (21:26).",
      world:
        "Hammurabi's laws (Babylon, 18th century BCE) say that whoever destroys the eye of a free man shall have his own eye destroyed (§196). For a commoner's eye the penalty is a fine of silver, and for a slave's eye half the slave's value (§§198–199). The rule of equal penalty is called lex talionis; it is often read as a limit, so that the punishment fit the injury and no more.",
      theirEyes:
        "For an injured family, the law said: you may demand justice, but not revenge beyond the harm done.",
      debate:
        "Scholars debate whether “eye for eye” was applied literally in ancient Israel or worked as a principle for setting compensation.",
    },
    confidence: "settled",
    references: ["Exodus 21:23–26"],
    sources: [
      scripture,
      { kind: "primary", citation: "Laws of Hammurabi §§196–199 (stele, Louvre, Sb 8)" },
      { kind: "scholarship", citation: "Martha T. Roth, Law Collections from Mesopotamia and Asia Minor (2nd ed., 1997)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-060",
    era: "exodus",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What did Aaron's sons Nadab and Abihu offer before Yahweh that he “had not commanded them”?",
    choices: ["A pig on the altar", "Strange fire", "A golden calf", "Their own firstborn"],
    answer: 1,
    explanation: {
      textSays:
        "Leviticus 10:1–2: Nadab and Abihu each took his censer, put fire and incense in it, “and offered strange fire before Yahweh, which he had not commanded them. Fire came out from before Yahweh, and devoured them.”",
      world:
        "This happens on the very day the Tabernacle's priesthood begins (Leviticus 9). Nadab and Abihu had earlier gone up Sinai with Moses and the elders (Exodus 24:1, 9).",
      theirEyes:
        "The celebration of the priests' first day ended in shock, as two of Aaron's four sons lay dead at the sanctuary.",
      debate:
        "The text does not say exactly what made the fire “strange.” Suggestions include fire taken from outside the altar, incense offered at the wrong time, or acting without being told to.",
    },
    confidence: "settled",
    references: ["Leviticus 10:1–3", "Exodus 24:1, 9"],
    sources: [scripture, milgrom],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "exo-061",
    era: "exodus",
    level: 13,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Exodus 24, Moses, Aaron and seventy elders “saw the God of Israel.” What was under his feet?",
    choices: [
      "A sea of bronze",
      "A floor overlaid with gold",
      "Burning coals",
      "A paved work like sapphire, clear as the sky",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Exodus 24:10–11: “Under his feet was like a paved work of sapphire stone, like the skies for clearness… They saw God, and ate and drank.” Ezekiel 1:26 likewise sees a throne “as the appearance of a sapphire stone.”",
      world:
        "The Hebrew sappir most likely means lapis lazuli, the deep blue stone traded from Afghanistan and prized in Egypt and Mesopotamia, rather than the gem we call sapphire today.",
      theirEyes:
        "The elders looked up and saw a floor as blue as the sky beneath God, and still sat down to eat.",
      tradition: {
        jewish:
          "The Greek Septuagint softens the scene: it says the elders saw “the place where the God of Israel stood,” not God himself.",
      },
    },
    confidence: "settled",
    references: ["Exodus 24:9–11", "Ezekiel 1:26"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Exodus 24:10" },
      { kind: "reference", citation: "Koehler and Baumgartner, Hebrew and Aramaic Lexicon of the Old Testament, s.v. sappîr" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-062",
    era: "exodus",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "How many precious stones were set in the high priest's breastplate, and what was engraved on them?",
    choices: [
      "Seven, with the days of creation",
      "Ten, with the Ten Commandments",
      "Twelve, with the names of Israel's sons",
      "Four, with the names of the rivers of Eden",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Exodus 28:17–21 sets four rows of three stones: “The stones shall be according to the names of the children of Israel, twelve… they shall be for the twelve tribes.” Aaron bears the names “on his heart” before Yahweh (28:29).",
      world:
        "The breastplate was a square pouch of gold, blue, purple and scarlet linen, fastened to the ephod, a richly woven apron-like garment (28:6–28). Several of the Hebrew stone names are uncertain, so translations differ.",
      theirEyes:
        "Whichever tribe you belonged to, your ancestor's name went into the holy place over the high priest's heart.",
      tradition: {
        jewish:
          "Josephus describes the high priest's breastplate with its twelve stones and the tribal names engraved on them (Antiquities 3.7.5).",
      },
    },
    confidence: "settled",
    references: ["Exodus 28:6–30"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 3.7.5 (Whiston)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-063",
    era: "exodus",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Leviticus 24 sets the twelve loaves of the “bread of the presence” in two rows. What was put on each row?",
    choices: ["Honey", "Pure frankincense", "Olive oil", "Hyssop branches"],
    answer: 1,
    explanation: {
      textSays:
        "Leviticus 24:7: “You shall put pure frankincense on each row, that it may be to the bread for a memorial, even an offering made by fire to Yahweh.” The loaves were set out every Sabbath and then eaten by the priests in a holy place (24:8–9). Honey could never be burned as an offering (2:11).",
      world:
        "Frankincense is a resin from trees of southern Arabia and the Horn of Africa, carried north by caravan, so it was costly. Exodus 25:30 calls the loaves “bread of the presence”; older English Bibles call it “showbread.”",
      theirEyes:
        "When the old loaves came off the table each Sabbath, the sweet smoke of their frankincense rose from the altar in their place.",
      tradition: {
        jewish:
          "Josephus, describing the Temple service, says the loaves were set out with two golden cups of frankincense on them, and that the frankincense was burned when the bread was changed on the Sabbath (Antiquities, book 3).",
      },
    },
    confidence: "settled",
    references: ["Leviticus 24:5–9", "Leviticus 2:11", "Exodus 25:30"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews, book 3 (Whiston)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "exo-064",
    era: "exodus",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In which offering in Leviticus did the priest burn the whole animal on the altar, keeping only the skin?",
    choices: ["The burnt offering", "The peace offering", "The grain offering", "The Passover offering"],
    answer: 0,
    explanation: {
      textSays:
        "Leviticus 1:9: “The priest shall burn all of it on the altar, for a burnt offering… of a pleasant aroma to Yahweh.” Leviticus 7:8 gives the priest the skin.",
      world:
        "The Hebrew name, ‘olah, comes from a root meaning “go up,” since the whole offering rose in smoke. The Greek Septuagint often uses holokautōma, built from holos, “whole,” and kaiein, “to burn”; English “holocaust” comes from the same Greek roots.",
      theirEyes:
        "Bringing a burnt offering meant giving up the entire animal; none of the meat came home with you.",
      tradition: {
        shared:
          "In the peace offering, by contrast, only the fat was burned, and the worshipper and the priests shared the meat (Leviticus 3; 7:11–34).",
      },
    },
    confidence: "settled",
    references: ["Leviticus 1:3–9", "Leviticus 7:8"],
    sources: [scripture, milgrom],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-065",
    era: "exodus",
    level: 13,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Leviticus 11 forbids most winged insects as food. Which kinds does it allow?",
    choices: [
      "Bees and their honey only",
      "Locusts, crickets and grasshoppers",
      "Any insect caught on the Sabbath",
      "None at all",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Leviticus 11:21–22 allows winged creatures “which have long, jointed legs for hopping on the earth”: “any kind of locust, any kind of katydid, any kind of cricket, and any kind of grasshopper.”",
      world:
        "Locusts were eaten across the ancient Near East; an Assyrian palace relief from Nineveh shows servants carrying locusts on skewers to a banquet. Mark 1:6 says John the Baptist “ate locusts and wild honey.”",
      theirEyes:
        "When a swarm ruined the crops, at least some of the culprits could end up roasted for supper.",
      tradition: {
        jewish:
          "The Damascus Document from the Dead Sea Scrolls even gives a rule for preparing them: locusts must be put into fire or water while still alive (CD 12:14–15).",
      },
    },
    confidence: "settled",
    references: ["Leviticus 11:20–23", "Mark 1:6"],
    sources: [
      scripture,
      { kind: "primary", citation: "Damascus Document (CD) 12:14–15" },
      { kind: "archaeology", citation: "Assyrian palace relief from Nineveh, 7th century BCE, showing servants carrying locusts on sticks (British Museum)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "exo-066",
    era: "exodus",
    level: 14,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Ephesians 6:2 calls “Honor your father and mother” “the first commandment with a promise.” What does Exodus 20:12 promise?",
    choices: [
      "That your harvests will never fail",
      "That your days may be long in the land",
      "That your children will honour you in turn",
      "That your name will be remembered for ever",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Exodus 20:12: “Honor your father and your mother, that your days may be long in the land which Yahweh your God gives you.” Deuteronomy 5:16 adds “and that it may go well with you.” Ephesians 6:2–3 quotes it: “that it may be well with you, and you may live long on the earth.”",
      world:
        "In the ancient Near East grown children were expected to support their parents in old age, so the command covered practical care, not only children's obedience.",
      theirEyes:
        "Feeding and housing your elderly father was not just family duty; it was tied to your people's future in the land.",
      tradition: {
        jewish:
          "Josephus says the Law ranks honour to parents second only to honour to God (Against Apion 2.206). Philo places this command on the first of the two tablets, with the duties toward God (On the Decalogue).",
        christian:
          "Ephesians applies the command to Christian children and adds a word to fathers not to provoke their children (Ephesians 6:1–4).",
      },
      debate:
        "Interpreters ask why Ephesians calls it the “first” commandment with a promise, since Exodus 20:6 already speaks of loving kindness to those who keep God's commandments. Many take that verse as a description of God rather than a promise attached to a command.",
    },
    confidence: "settled",
    references: ["Exodus 20:12", "Deuteronomy 5:16", "Ephesians 6:1–4", "Exodus 20:6"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Against Apion 2.206" },
      { kind: "primary", citation: "Philo, On the Decalogue" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "exo-067",
    era: "exodus",
    level: 14,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "On the Day of Atonement, where did the high priest sprinkle blood inside the Most Holy Place?",
    choices: [
      "On the bread of the presence",
      "On the mercy seat and in front of it",
      "On the golden lampstand",
      "On the stone tablets",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Leviticus 16:14–15: he sprinkles the bull's blood “with his finger on the mercy seat on the east; and before the mercy seat… seven times,” then does the same with the goat's blood. The mercy seat was the gold cover of the Ark, with two cherubim on it (Exodus 25:17–22).",
      world:
        "The Hebrew word kapporet, “mercy seat,” is related to kipper, “to atone,” the root of Yom Kippur. The Greek Septuagint translates it hilastērion.",
      theirEyes:
        "Once a year, alone behind the curtain, the high priest stood before the gold lid where God was said to meet Israel.",
      tradition: {
        christian:
          "Hebrews 9:5 uses hilastērion for the mercy seat, and Paul uses the same word of Christ in Romans 3:25, where the WEB translates it “atoning sacrifice.”",
      },
    },
    confidence: "settled",
    references: ["Leviticus 16:14–15", "Exodus 25:17–22", "Hebrews 9:5", "Romans 3:25"],
    sources: [scripture, milgrom],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-068",
    era: "exodus",
    level: 14,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the peace offering, the fat was burned on the altar. Who received the breast and the right thigh?",
    choices: ["The priests", "The poor", "The Levite gatekeepers", "Nobody; they were buried"],
    answer: 0,
    explanation: {
      textSays:
        "Leviticus 7:31–34: “the breast shall be Aaron's and his sons',” and “the right thigh you shall give to the priest.” The worshipper ate the rest, and the thanksgiving offering had to be eaten the same day (7:15).",
      world:
        "For most families, a peace offering was one of the few times they ate meat: a feast shared with God, the priests and their household. Peace offerings were also sacrificed at the covenant ceremony at Sinai (Exodus 24:5).",
      theirEyes:
        "After the fat had gone up in smoke, your family sat down to roast meat, while the priest went off with his share.",
      debate:
        "The Hebrew name, shelamim, is variously understood as “peace,” “well-being” or “fellowship” offering.",
    },
    confidence: "settled",
    references: ["Leviticus 7:11–34", "Leviticus 3:1–5", "Exodus 24:5"],
    sources: [scripture, milgrom],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-069",
    era: "exodus",
    level: 14,
    category: "faith-practice",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: right after Nadab and Abihu died, Leviticus forbids priests ever to drink wine.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Leviticus 10:9: “You and your sons are not to drink wine or strong drink whenever you go into the Tent of Meeting, or you will die.” The ban covered time on duty, so that priests could “make a distinction between the holy and the common” and teach the people (10:10–11). Ezekiel 44:21 repeats it for the inner court.",
      world:
        "Wine was part of ordinary meals and of the offerings themselves (drink offerings), so a lifelong ban would have been unusual. Giving up wine altogether for a set time belonged to the Nazirite vow (Numbers 6:1–4), not to the priesthood.",
      theirEyes:
        "A priest could share wine at his family's table, but not on the day he was serving in the sanctuary.",
      tradition: {
        jewish:
          "Josephus says priests were not to drink wine while wearing their priestly garments (Antiquities 3.12.2).",
      },
    },
    confidence: "settled",
    references: ["Leviticus 10:8–11", "Ezekiel 44:21"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 3.12.2 (Whiston)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-070",
    era: "exodus",
    level: 14,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Urim and Thummim were kept in the high priest's breastplate. What were they used for?",
    choices: [
      "Lighting the lampstand",
      "Measuring the sacred incense",
      "Seeking God's decision on a question",
      "Sealing the scrolls of the Law",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Exodus 28:30 puts “the Urim and the Thummim” in the “breastplate of judgment,” so that Aaron “shall bear the judgment of the children of Israel on his heart.” 1 Samuel 28:6 says Yahweh did not answer Saul “by dreams, by Urim, or by prophets.” After the exile, Ezra 2:63 says no priest could yet consult them.",
      world:
        "The Bible never describes what they looked like. Many scholars think they were lots giving a yes-or-no answer, a common way of asking a god's will in the ancient Near East.",
      theirEyes:
        "Before a battle or a hard judgement, leaders turned to the high priest to ask what God wanted.",
      tradition: {
        jewish:
          "Josephus says the high priest's stones shone to signal God's presence and victory, but that this had stopped about two hundred years before he wrote (Antiquities 3.8.9).",
      },
    },
    confidence: "mainstream",
    references: ["Exodus 28:30", "1 Samuel 28:6", "Ezra 2:63"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 3.8.9 (Whiston)" },
      { kind: "reference", citation: "“Urim and Thummim,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "exo-071",
    era: "exodus",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Leviticus 16:8, one goat's lot is “for Yahweh.” The WEB says the other lot is “for the scapegoat.” What name stands there in the Hebrew text?",
    choices: ["Asherah", "Azazel", "Beelzebul", "Dagon"],
    answer: 1,
    explanation: {
      textSays:
        "Leviticus 16:8–10, 21–22: Aaron casts lots for two goats. One is offered as a sin offering. Over the other he confesses Israel's sins and sends it into the wilderness. The Hebrew says this lot is la‘aza'zel, “for Azazel”; the WEB, like the King James Version, translates “scapegoat.”",
      world:
        "“Scapegoat” comes from William Tyndale's 1530 translation, which read the word as “the goat that escapes.”",
      theirEyes:
        "The crowd watched the goat led off toward the desert, carrying away the sins just confessed over its head.",
      tradition: {
        jewish:
          "The Book of the Watchers (1 Enoch 1–36, about 3rd century BCE) makes Asael/Azazel a leader of the fallen angels, bound in a desert place (1 Enoch 10:4–8).",
      },
      debate:
        "Scholars disagree whether Azazel was a desert demon, a place name, or a phrase meaning “complete removal.”",
    },
    confidence: "settled",
    references: ["Leviticus 16:7–10", "Leviticus 16:20–22"],
    sources: [scripture, milgrom, { kind: "primary", citation: "1 Enoch 10:4–8 (trans. R. H. Charles)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-072",
    era: "exodus",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Mishnah, a later record (c. 200 CE), says the Temple's scapegoat was pushed off a cliff in the wilderness.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Leviticus 16:22 says only that the goat was released in the wilderness.",
      world:
        "Mishnah Yoma describes the Second Temple ritual: a crimson thread was tied to the goat's head (4:2), and the man leading it tied part of the thread to a rock and pushed the goat backwards off a cliff (6:6).",
      theirEyes:
        "Along the road from Jerusalem to the desert, people waited at the stopping points to watch the goat go by.",
      tradition: {
        christian:
          "The Epistle of Barnabas (about 100 CE) already knows of the scarlet wool on the goat's head and reads it as a picture of Christ (Barnabas 7).",
      },
      debate:
        "Historians debate how closely the Mishnah, compiled over a century after the Temple fell, records actual Temple practice.",
    },
    confidence: "settled",
    references: ["Leviticus 16:21–22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Mishnah Yoma 4:2; 6:6 (trans. Herbert Danby, 1933)" },
      { kind: "primary", citation: "Epistle of Barnabas 7" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-073",
    era: "exodus",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Temple Scroll from Qumran Cave 11 restates Torah laws, including the Day of Atonement. What is unusual about its voice?",
    choices: [
      "It is written in Latin for Roman officials",
      "God speaks the laws directly in the first person",
      "It is addressed to the Samaritans",
      "It was carved on the walls of the Temple",
    ],
    answer: 1,
    explanation: {
      world:
        "The Temple Scroll (11Q19) is one of the longest Dead Sea Scrolls. It rewrites laws from Exodus to Deuteronomy as God's direct speech, often changing “Yahweh” to “I,” with rules for an ideal temple and its festivals; columns 25–27 cover the Day of Atonement. Yigael Yadin acquired it in 1967, and it is kept at the Shrine of the Book in Jerusalem.",
      textSays:
        "Leviticus 16 and 23:27–28 give the biblical rules for the Day of Atonement.",
      theirEyes:
        "For its readers, a scroll in which God himself spelled out the laws claimed great authority.",
      debate:
        "Scholars debate whether the scroll's community saw it as scripture, and whether it was written at Qumran or earlier.",
    },
    confidence: "settled",
    references: ["Leviticus 16", "Leviticus 23:27–28"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Temple Scroll, 11Q19 (Shrine of the Book, Israel Museum)" },
      { kind: "scholarship", citation: "Yigael Yadin, The Temple Scroll, 3 vols. (Israel Exploration Society, 1983)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-074",
    era: "exodus",
    level: 15,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the jubilee year, land went back to its family. What reason does Leviticus 25:23 give?",
    choices: [
      "The land belonged to the king",
      "The land belongs to God, and Israel are foreigners with him",
      "The land belonged to the priests",
      "Land sold to foreigners was cursed",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Leviticus 25:23: “The land shall not be sold in perpetuity, for the land is mine; for you are strangers and live as foreigners with me.” In the fiftieth year, “proclaim liberty throughout the land… each of you shall return to his own property” (25:10).",
      world:
        "In practice a “sale” was a lease until the next jubilee, priced by the harvests left (25:14–16). The King James wording of 25:10 is inscribed on the Liberty Bell in Philadelphia.",
      theirEyes:
        "A farmer forced by debt to sell his fields knew his grandchildren would get them back.",
      tradition: {
        jewish:
          "The Dead Sea Scroll 11QMelchizedek reads the jubilee release of Leviticus 25 as a picture of God's end-time liberation.",
        christian: "In Luke 4:18–19 Jesus reads Isaiah 61, which uses jubilee language: “to proclaim release to the captives.”",
      },
      debate: "Historians debate whether the jubilee was ever regularly observed.",
    },
    confidence: "settled",
    references: ["Leviticus 25:10–16", "Leviticus 25:23", "Luke 4:18–19"],
    sources: [
      scripture,
      { kind: "primary", citation: "11QMelchizedek (11Q13)" },
      { kind: "reference", citation: "“Liberty Bell,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exo-075",
    era: "exodus",
    level: 15,
    category: "daily-life",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: in Leviticus 19, the command to love others “as yourself” applies only to fellow Israelites.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Leviticus 19:18: “you shall love your neighbor as yourself. I am Yahweh.” Sixteen verses later, 19:34 says of the foreigner living among you: “you shall love him as yourself; for you lived as foreigners in the land of Egypt.”",
      world:
        "Leviticus 17–26 is often called the Holiness Code, after its repeated call, “You shall be holy” (19:2). Its holiness includes fair wages, honest weights and care for the poor (19:9–15, 35–36).",
      theirEyes:
        "The command reached past your own clan to the outsider at the edge of the village, because your people had once been outsiders too.",
      tradition: {
        jewish:
          "The Damascus Document from the Dead Sea Scrolls echoes it: each member is to love his brother as himself and support the poor, the needy and the foreigner (CD 6:20–21).",
        christian:
          "Jesus calls Leviticus 19:18 the second great commandment (Mark 12:31), and Paul says it sums up the Law (Romans 13:9; Galatians 5:14).",
      },
    },
    confidence: "settled",
    references: ["Leviticus 19:18", "Leviticus 19:33–34", "Mark 12:31", "Romans 13:9", "Galatians 5:14"],
    sources: [scripture, { kind: "primary", citation: "Damascus Document (CD) 6:20–21" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
