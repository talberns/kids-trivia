import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

const george = { kind: "scholarship", citation: "A. R. George, The Babylonian Gilgamesh Epic (Oxford, 2003)" } as const;
const josephusAnt13 = { kind: "primary", citation: "Josephus, Antiquities of the Jews 1.3 (trans. W. Whiston)" } as const;
const enoch = { kind: "primary", citation: "1 Enoch 6–11, the Book of the Watchers (trans. R. H. Charles; G. W. E. Nickelsburg and J. C. VanderKam, 1 Enoch: A New Translation, 2004)" } as const;
const jubilees = { kind: "primary", citation: "Book of Jubilees (trans. J. C. VanderKam, The Book of Jubilees, 1989)" } as const;

export const primeval3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "pri-051",
    era: "primeval",
    level: 11,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis 6:14 tells Noah to make the ark of “gopher wood.” What was it to be sealed with?",
    choices: ["Beeswax", "Pitch", "Lime plaster", "Olive oil"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 6:14: “Make a ship of gopher wood. You shall make rooms in the ship, and shall seal it inside and outside with pitch.”",
      world:
        "“Gopher” appears only here in the Bible and its meaning is unknown; cypress is a common modern guess, and the Greek Septuagint simply says “squared timbers.” The Hebrew for pitch, kopher, matches Akkadian kupru, “bitumen,” which Mesopotamian boat-builders used for waterproofing. Utnapishtim's boat in Gilgamesh XI is also coated with bitumen.",
      theirEyes:
        "In a land where tar bubbled up from the ground, anyone who had seen a reed boat built knew the smell of hot bitumen being spread on the hull.",
    },
    confidence: "settled",
    references: ["Genesis 6:14"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 6:14" },
      george,
      { kind: "scholarship", citation: "G. J. Wenham, Genesis 1–15 (Word Biblical Commentary 1, 1987)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-052",
    era: "primeval",
    level: 11,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Genesis 6:16, how many levels or decks was the ark to have?",
    choices: ["One", "Two", "Three", "Seven"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 6:16: “You shall set the door of the ship in its side. You shall make it with lower, second, and third levels.” Verse 15 gives its size: 300 cubits long, 50 wide and 30 high.",
      world:
        "The Hebrew word for the ark, tevah, is not the usual word for a ship; it is used elsewhere only for the basket of the baby Moses (Exodus 2:3). Its proportions, six times as long as it is wide, describe a floating box rather than a sailing ship with a keel and a prow.",
      theirEyes:
        "Picture a three-storey wooden warehouse with one door and no oars, built not to go anywhere, only to stay afloat.",
    },
    confidence: "settled",
    references: ["Genesis 6:15–16", "Exodus 2:3"],
    sources: [scripture, { kind: "scholarship", citation: "G. J. Wenham, Genesis 1–15 (Word Biblical Commentary 1, 1987)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-053",
    era: "primeval",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Genesis 7 tells Noah to take more than one pair of every clean animal.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 6:19 says “two of every sort,” but Genesis 7:2 adds: “You shall take seven pairs of every clean animal with you… Of the animals that are not clean, take two.” The Hebrew “seven seven” can also be read as seven of each kind.",
      world:
        "The extra clean animals matter later: after the flood Noah offers “every clean animal” on his altar (Genesis 8:20).",
      theirEyes:
        "A herder would see the sense at once: if you mean to sacrifice some animals, you had better bring more than one pair.",
      debate:
        "Many scholars see two interwoven sources here: a Priestly one with a single pair of everything (6:19–20) and a non-Priestly one with seven pairs of clean animals (7:2). Others, such as Umberto Cassuto and Gordon Wenham, read 7:2 as a fuller follow-up command that prepares for the sacrifice.",
    },
    confidence: "settled",
    references: ["Genesis 6:19–20", "Genesis 7:2–3", "Genesis 8:20"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "R. E. Friedman, Who Wrote the Bible? (1987)" },
      { kind: "scholarship", citation: "U. Cassuto, A Commentary on the Book of Genesis, Part II: From Noah to Abraham (Eng. trans. 1964)" },
      { kind: "scholarship", citation: "G. J. Wenham, Genesis 1–15 (Word Biblical Commentary 1, 1987)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-054",
    era: "primeval",
    level: 11,
    category: "tradition",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Genesis 6:6 says Yahweh was sorry that he had made humankind.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 6:6: “Yahweh was sorry that he had made man on the earth, and it grieved him in his heart.” Two verses later comes the turn: “But Noah found favor in Yahweh’s eyes” (6:8).",
      world:
        "Other passages say God does not change his mind like a human (Numbers 23:19), so this verse has long been discussed. The Greek Septuagint softens it, saying that God “considered” that he had made humankind.",
      theirEyes:
        "Hearers met a God who is not cold or distant but grieves over what his creatures have done to his world.",
      tradition: {
        jewish:
          "Philo of Alexandria wrote a whole treatise on this passage, That God Is Unchangeable. He argued that God never really changes his mind: Scripture sometimes speaks of God “as a man” to teach and correct people who cannot yet grasp that God is not like a man.",
      },
    },
    confidence: "settled",
    references: ["Genesis 6:6–8", "Numbers 23:19"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, Quod Deus sit immutabilis (That God Is Unchangeable)" },
      { kind: "primary", citation: "Septuagint, Genesis 6:6 (A New English Translation of the Septuagint, 2007)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-055",
    era: "primeval",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis says it rained for forty days and nights. For how many days does it say the waters “flooded the earth”?",
    choices: ["70", "150", "365", "12"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 7:12: “It rained on the earth forty days and forty nights.” Genesis 7:24: “The waters flooded the earth one hundred fifty days.” Then the waters recede after 150 days (8:3).",
      world:
        "Genesis dates the flood precisely by Noah's age: it begins in his 600th year, second month, 17th day (7:11), and the earth is dry in his 601st year, second month, 27th day (8:13–14), a little over a year in all.",
      theirEyes:
        "Forty days of rain was terrible enough; the family in the ark then waited months more while the water simply stood.",
      debate:
        "Source critics often assign the 40-day count to the non-Priestly strand and the 150-day, dated chronology to the Priestly strand; others read the numbers as one continuous timeline.",
    },
    confidence: "settled",
    references: ["Genesis 7:11–12", "Genesis 7:24", "Genesis 8:3", "Genesis 8:13–14"],
    sources: [scripture, { kind: "scholarship", citation: "G. J. Wenham, Genesis 1–15 (Word Biblical Commentary 1, 1987)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "pri-056",
    era: "primeval",
    level: 12,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "How did the Greek Septuagint translate “Nephilim” in Genesis 6:4?",
    choices: ["Angels", "Kings", "Gigantes (giants)", "Daimones (spirits)"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 6:4: “The Nephilim were in the earth in those days, and also after that, when God’s sons came in to men’s daughters… Those were the mighty men who were of old, men of renown.” The Nephilim reappear in Numbers 13:33, where the spies feel “as grasshoppers” beside them.",
      world:
        "The meaning of the Hebrew Nephilim is uncertain; many link it to naphal, “to fall.” The Septuagint chose gigantes, the word Greek readers knew from myths of the giants who fought the gods, and through it English Bibles got “giants.”",
      theirEyes:
        "A Greek-speaking Jew in Alexandria hearing “giants” would think of huge, proud beings from the dawn of time.",
    },
    confidence: "settled",
    references: ["Genesis 6:4", "Numbers 13:33"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 6:4" },
      { kind: "scholarship", citation: "G. J. Wenham, Genesis 1–15 (Word Biblical Commentary 1, 1987)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-057",
    era: "primeval",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After the raven, how many times does Noah send out the dove in Genesis 8?",
    choices: ["Once", "Twice", "Three times", "Seven times"],
    answer: 2,
    explanation: {
      textSays:
        "First the dove “found no place to rest her foot” and came back (8:9). Seven days later she returned with “a freshly plucked olive leaf” (8:11). After seven more days, “she didn’t return to him any more” (8:12).",
      world:
        "Olive trees grow low on hillsides, so a fresh leaf told Noah the water had fallen well below the mountain tops. Sailors in the ancient world used shore-sighting birds in a similar way.",
      theirEyes:
        "Inside the dark ark, the family would have waited all day for that small grey bird, and then cheered at a single green leaf.",
      tradition: {
        shared:
          "The dove with an olive branch became a symbol of peace and new beginnings in both Jewish and Christian art, and later far beyond.",
      },
    },
    confidence: "settled",
    references: ["Genesis 8:6–12"],
    sources: [scripture, { kind: "scholarship", citation: "N. M. Sarna, The JPS Torah Commentary: Genesis (1989)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-058",
    era: "primeval",
    level: 12,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Hebrews 11:7 says that by building the ark in faith, Noah “condemned” what?",
    choices: ["The world", "The Nephilim", "His son Ham", "The city of Babel"],
    answer: 0,
    explanation: {
      textSays:
        "Hebrews 11:7: “By faith Noah, being warned about things not yet seen, moved with godly fear, prepared a ship for the saving of his house, through which he condemned the world and became heir of the righteousness which is according to faith.”",
      world:
        "Hebrews 11 is a roll-call of heroes of faith from Abel onward. Noah sits between Enoch and Abraham, as he does in Genesis.",
      theirEyes:
        "A first-century reader would picture neighbours mocking a man building a huge vessel on dry land, until the rain proved him right.",
      tradition: {
        jewish:
          "Ben Sira's “praise of the ancestors” also lists Noah between Enoch and Abraham: “Noah was found perfect and righteous. In the season of wrath, he kept the race alive” (Sirach 44:17).",
        christian: "Christians have long used Noah as a model of trusting God's word before seeing it fulfilled.",
      },
    },
    confidence: "settled",
    references: ["Hebrews 11:7", "Sirach 44:16–18"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-059",
    era: "primeval",
    level: 12,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 1 Enoch's Book of the Watchers, on which mountain do the 200 rebel angels come down and swear their oath?",
    choices: ["Mount Sinai", "Mount Hermon", "Mount Ararat", "Mount Zion"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 6:2 says only that “God’s sons saw that men’s daughters were beautiful, and they took any that they wanted for themselves as wives.”",
      world:
        "The Book of the Watchers (1 Enoch 1–36), usually dated to the 3rd century BCE, retells this verse at length. Two hundred angels called Watchers, led by Shemihazah, descend in the days of Jared on Mount Hermon and bind themselves by an oath. They teach forbidden arts such as metalworking and sorcery, and their children are the giants.",
      theirEyes:
        "For Jews of Jesus' day, Hermon's snowy peak on the northern horizon could recall this dark story.",
      tradition: {
        jewish:
          "Aramaic fragments of 1 Enoch were found among the Dead Sea Scrolls at Qumran, showing the book was read in Judea.",
        christian: "Jude 14–15 quotes 1 Enoch 1:9, and Jude 6 speaks of angels who “deserted their own dwelling place.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 6:2", "Jude 6", "Jude 14–15"],
    sources: [
      scripture,
      enoch,
      { kind: "scholarship", citation: "J. T. Milik, The Books of Enoch: Aramaic Fragments of Qumrân Cave 4 (Oxford, 1976)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-060",
    era: "primeval",
    level: 12,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Genesis says the ark came to rest on a single peak called Mount Ararat.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 8:4: “The ship rested in the seventh month, on the seventeenth day of the month, on Ararat’s mountains.” Ararat is a land: Sennacherib's murderers fled “into the land of Ararat” (2 Kings 19:37).",
      world:
        "Ararat is the biblical form of Urartu, a kingdom around Lake Van in eastern Turkey and Armenia, known from Assyrian inscriptions, which flourished from the 9th to the 7th century BCE. The name “Mount Ararat” for the volcano Ağrı Dağı came much later.",
      theirEyes:
        "To an Israelite, Ararat meant the wild, cold highlands far to the north, beyond even Assyria.",
      tradition: {
        jewish:
          "Jubilees names the landing place as Lubar, one of the mountains of Ararat (Jubilees 5:28).",
      },
    },
    confidence: "settled",
    references: ["Genesis 8:4", "2 Kings 19:37", "Jeremiah 51:27"],
    sources: [
      scripture,
      jubilees,
      { kind: "reference", citation: "“Urartu,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "pri-061",
    era: "primeval",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Genesis 9, God allows Noah's family to eat meat. What must they not eat with it?",
    choices: ["Fat", "Salt", "Leaven", "Its blood"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 9:3–4: “Every moving thing that lives will be food for you… But flesh with its life, that is, its blood, you shall not eat.” Leviticus 17:11 gives the reason: “the life of the flesh is in the blood.”",
      world:
        "Because the rule is given to Noah, ancestor of all peoples, it was seen as binding on everyone, not only Israel. The apostles' letter in Acts 15 asks Gentile believers to abstain “from blood” and “from things strangled” (Acts 15:20, 29).",
      theirEyes:
        "Any household killing a lamb knew the rule: pour the blood out on the ground before the meat came near the fire.",
      tradition: {
        jewish: "Jubilees 6–7 makes the ban on blood the heart of Noah's covenant and has Noah pass it on to his sons.",
      },
      debate:
        "Much later, rabbinic sources (Tosefta Avodah Zarah 8:4, c. 3rd century CE; Babylonian Talmud, Sanhedrin 56a) set out seven “Noahide laws” for all humanity, including a ban on eating flesh torn from a living animal. This is a later development, not the Second Temple reading.",
    },
    confidence: "settled",
    references: ["Genesis 9:3–4", "Leviticus 17:11", "Acts 15:20", "Acts 15:29"],
    sources: [
      scripture,
      jubilees,
      { kind: "primary", citation: "Tosefta Avodah Zarah 8:4; Babylonian Talmud, Sanhedrin 56a" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-062",
    era: "primeval",
    level: 13,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The Hebrew word for the “rainbow” in Genesis 9, qeshet, is the ordinary word for what?",
    choices: ["A crown", "A bow, the weapon", "A gate", "A wing"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 9:13: “I set my rainbow in the cloud, and it will be a sign of a covenant between me and the earth.” The same word is Esau's hunting bow: “your quiver and your bow” (Genesis 27:3).",
      world:
        "Hebrew has no separate word for the rainbow. One interpretation, suggested by many commentators but not stated in the text, is the image of a warrior hanging up his bow after battle. Some compare the Babylonian Enuma Elish, where Marduk's bow is placed in the sky after his victory.",
      theirEyes:
        "After a storm, a shepherd could look up and see a vast bow stretched across the clouds and remember the promise.",
      tradition: {
        shared: "Ezekiel's vision of God's glory is like “the rainbow that is in the cloud in the day of rain” (Ezekiel 1:28).",
      },
      debate: "The war-bow reading is a popular interpretation, not stated in the text; others see the bow simply as a natural sign God chose.",
    },
    confidence: "settled",
    references: ["Genesis 9:12–17", "Genesis 27:3", "Ezekiel 1:28"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "C. Westermann, Genesis 1–11: A Commentary (Eng. trans. 1984)" },
      { kind: "primary", citation: "Enuma Elish, Tablet VI" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-063",
    era: "primeval",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "1 Peter 3 says eight people were “saved through water” in Noah's ark. It calls this a symbol of what?",
    choices: ["Passover", "The Lord's Supper", "Baptism", "The Day of Atonement"],
    answer: 2,
    explanation: {
      textSays:
        "1 Peter 3:20–21: “…in the days of Noah while the ship was being built. In it, few, that is, eight souls, were saved through water. This is a symbol of baptism, which now saves you.”",
      world:
        "The eight are Noah, his wife, his three sons and their wives (Genesis 7:13). Just before, 1 Peter says Christ “preached to the spirits in prison” who had disobeyed in Noah's day (3:19–20).",
      theirEyes:
        "New believers going down into the water could think of Noah's family passing through the flood into a new world.",
      tradition: {
        christian:
          "Early Christian writers often compared the ark to the church and the flood to baptism. Who the “spirits in prison” are is disputed: fallen angels like Enoch's Watchers, the souls of the dead, or (as Augustine thought) people to whom Christ spoke through Noah.",
      },
    },
    confidence: "settled",
    references: ["1 Peter 3:18–21", "Genesis 7:13"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "W. J. Dalton, Christ's Proclamation to the Spirits (2nd ed., Rome, 1989)" },
      { kind: "primary", citation: "Augustine, Letter 164 (to Evodius)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-064",
    era: "primeval",
    level: 13,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What is the name of the flood hero in the Sumerian flood story found on a tablet from Nippur?",
    choices: ["Ziusudra", "Enmerkar", "Sargon", "Ur-Nammu"],
    answer: 0,
    explanation: {
      textSays: "Genesis 6:8–9 introduces its flood survivor: “Noah found favor in Yahweh’s eyes… Noah walked with God.”",
      world:
        "A broken Sumerian tablet from Nippur, now in the Penn Museum in Philadelphia and published by Arno Poebel in 1914, tells how the gods decide on a flood. Ziusudra, a king and priest, is warned, survives seven days and nights in a huge boat, offers sacrifice, and is given “life like a god.” His name is usually explained as “life of long days.”",
      theirEyes:
        "For a Sumerian scribe, the story belonged to the deep past, when kings were counted as living “before the flood.”",
      debate:
        "Scholars agree that the Sumerian, Babylonian and biblical flood stories are related, but not on exactly how the traditions passed from one to another.",
    },
    confidence: "settled",
    references: ["Genesis 6:8–9"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Sumerian flood story tablet, Nippur (Penn Museum, CBS 10673)" },
      { kind: "scholarship", citation: "T. Jacobsen, “The Eridu Genesis,” Journal of Biblical Literature 100 (1981): 513–529" },
      { kind: "reference", citation: "Electronic Text Corpus of Sumerian Literature, “The flood story” (ETCSL 1.7.4)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-065",
    era: "primeval",
    level: 13,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After Noah wakes from his wine in Genesis 9, whom does he curse?",
    choices: ["Ham", "Japheth", "Canaan", "Shem"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 9:20–25: Noah plants a vineyard and gets drunk; Ham sees him uncovered, while Shem and Japheth cover him without looking. Noah says: “Canaan is cursed. He will be a servant of servants to his brothers.” The text has already noted “Ham is the father of Canaan” (9:18).",
      world:
        "The curse names Canaan, ancestor of the Canaanites, Israel's neighbours in the land (Genesis 10:15–19). Long after the Bible was written, the passage was misread as a “curse of Ham” on Black Africans and used, notably in the era of the Atlantic slave trade, to defend slavery, although the text curses Canaan, not Ham. David Goldenberg (2003) traces how that reading arose in post-biblical times.",
      theirEyes:
        "For Israelite hearers the story explained a neighbour people, not a distant race.",
      tradition: {
        jewish: "Jubilees 7 retells the scene and likewise has Noah curse Canaan.",
      },
    },
    confidence: "settled",
    references: ["Genesis 9:18–27", "Genesis 10:15–19"],
    sources: [
      scripture,
      jubilees,
      { kind: "scholarship", citation: "D. M. Goldenberg, The Curse of Ham: Race and Slavery in Early Judaism, Christianity, and Islam (Princeton, 2003)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "pri-066",
    era: "primeval",
    level: 14,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis 9:6 says whoever sheds human blood will have his own blood shed. What reason does the verse give?",
    choices: [
      "The ground had been cursed",
      "God made man in his own image",
      "Blood belongs on the altar",
      "Cain had been punished the same way",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 9:5–6: “I will surely require accounting for your life’s blood… Whoever sheds man’s blood, his blood will be shed by man, for God made man in his own image.” This echoes Genesis 1:27.",
      world:
        "Genesis 4 had God protect Cain the murderer with a mark (4:15). After the flood, the text gives human society itself a duty to answer for a killing.",
      theirEyes:
        "In a world of blood feuds, this put a limit and a reason on vengeance: a life for a life, because every life bears God's image.",
      tradition: {
        shared: "Jews and Christians have often cited this verse for the special value of every human life, while disagreeing on what it means for punishment today.",
      },
    },
    confidence: "settled",
    references: ["Genesis 9:5–6", "Genesis 1:27", "Genesis 4:15"],
    sources: [scripture, { kind: "scholarship", citation: "N. M. Sarna, The JPS Torah Commentary: Genesis (1989)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-067",
    era: "primeval",
    level: 14,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "When Utnapishtim offers a sacrifice after the flood in Gilgamesh XI, how do the gods gather around it?",
    choices: ["Like flies", "Like lions", "Like a royal army", "Like doves"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 8:20–21: Noah built an altar and offered burnt offerings, and “Yahweh smelled the pleasant aroma.” God then promises never again to strike every living thing.",
      world:
        "In Gilgamesh Tablet XI the gods smell the sweet savour and crowd round the sacrificer like flies. The Atrahasis epic makes the reason explicit: during the flood, with no one left to make offerings, the gods went hungry and thirsty. Both stories share the motif of a deity smelling the sacrifice.",
      theirEyes:
        "A Babylonian listener might smile at the picture of the great gods swarming like flies over a meal they had nearly lost.",
      debate:
        "Scholars note the shared motif but contrast the tone: in Genesis the aroma leads one God to a solemn promise, not a scramble for food.",
    },
    confidence: "settled",
    references: ["Genesis 8:20–22"],
    sources: [scripture, george, { kind: "scholarship", citation: "S. Dalley, Myths from Mesopotamia (Oxford, rev. ed. 2000)" }, { kind: "scholarship", citation: "W. G. Lambert and A. R. Millard, Atra-ḫasīs: The Babylonian Story of the Flood (Oxford, 1969)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-068",
    era: "primeval",
    level: 14,
    category: "neighbours",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: in Gilgamesh XI, the flood hero Utnapishtim and his wife are granted everlasting life.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Noah stays mortal: “All the days of Noah were nine hundred fifty years, and then he died” (Genesis 9:29).",
      world:
        "In Tablet XI the god Enlil blesses Utnapishtim and his wife: once they were human, now they will be like the gods and live far away “at the mouth of the rivers.” That is why Gilgamesh, desperate to escape death, travels to find him. Ziusudra in the Sumerian story is likewise given life like a god.",
      theirEyes:
        "Gilgamesh hoped Utnapishtim held a secret he could copy, but learned that this gift had been granted only once.",
    },
    confidence: "settled",
    references: ["Genesis 9:28–29"],
    sources: [scripture, george, { kind: "scholarship", citation: "S. Dalley, Myths from Mesopotamia (Oxford, rev. ed. 2000)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-069",
    era: "primeval",
    level: 14,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to the Book of Jubilees, how were the giants, the children of the angels, destroyed?",
    choices: [
      "They were struck by lightning",
      "God sent his sword among them and they killed one another",
      "They were turned to stone",
      "They starved in the desert",
    ],
    answer: 1,
    explanation: {
      textSays: "Genesis 6:4 mentions the Nephilim but never says how they died.",
      world:
        "Jubilees, a retelling of Genesis from the 2nd century BCE, says God's anger burned against the angels, who were bound in the depths of the earth, while God sent his sword among their children so that each killed his neighbour (Jubilees 5:6–9). 1 Enoch 10 tells a similar story, with the angel Gabriel sent to set the giants against each other.",
      theirEyes:
        "For readers of Jubilees, the violence that filled the earth (Genesis 6:11) turned back on those who caused it.",
      tradition: {
        jewish: "Copies of Jubilees in Hebrew were found at Qumran, and the scrolls show it was valued there.",
      },
    },
    confidence: "settled",
    references: ["Genesis 6:4", "Genesis 6:11"],
    sources: [scripture, jubilees, enoch],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-070",
    era: "primeval",
    level: 14,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the view that the “sons of God” in Genesis 6 were Seth's descendants is the oldest known reading.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays: "Genesis 6:2 and 6:4 speak of “God’s sons” taking “men’s daughters” as wives, without saying who they were.",
      world:
        "The earliest known readings take them as angels: the Book of the Watchers, Jubilees, Philo and Josephus, who writes that many angels of God joined with women (Antiquities 1.3.1); some Septuagint manuscripts even read “angels of God.” The Sethite view, that pious sons of Seth married the daughters of Cain's line, is first clearly found in Christian writers such as Julius Africanus (early 3rd century) and Augustine (City of God 15.23).",
      theirEyes:
        "For Jews in Jesus' day, Genesis 6 was a story about heaven itself being breached.",
      debate:
        "Later rabbinic sources read “sons of God” as nobles or rulers. Modern scholars mostly see divine beings, while some Christian commentators still defend the Sethite view.",
    },
    confidence: "mainstream",
    references: ["Genesis 6:1–4"],
    sources: [
      scripture,
      enoch,
      josephusAnt13,
      { kind: "primary", citation: "Julius Africanus, Chronographiae (fragment preserved by George Syncellus)" },
      { kind: "primary", citation: "Augustine, City of God 15.23" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "pri-071",
    era: "primeval",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Old Babylonian “Ark Tablet” deciphered by Irving Finkel tells the flood hero to build a boat of what shape?",
    choices: ["A long box", "A cube", "A round coracle", "A double-hulled raft"],
    answer: 2,
    explanation: {
      textSays: "Genesis 6:15 gives Noah's ark as a long box: 300 cubits long, 50 wide and 30 high.",
      world:
        "This small, privately owned tablet from the Old Babylonian period (roughly 1900–1700 BCE), studied by Finkel at the British Museum, has the god Enki tell Atrahasis to build a huge round boat of coiled rope, waterproofed with bitumen, like the river coracles of Iraq. It also says the animals went in two by two. Finkel published it in The Ark Before Noah (2014).",
      theirEyes:
        "A boatman on the Euphrates would know the shape at once: a giant version of the round basket-boats he used to cross the river.",
    },
    confidence: "settled",
    references: ["Genesis 6:15"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "I. Finkel, The Ark Before Noah: Decoding the Story of the Flood (London, 2014)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-072",
    era: "primeval",
    level: 15,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says the Armenians called the place where the ark landed by what name?",
    choices: ["The Place of Descent", "The Mountain of God", "The Ship's Grave", "The Hill of the Dove"],
    answer: 0,
    explanation: {
      textSays: "Genesis 8:4 says the ark rested “on Ararat’s mountains.”",
      world:
        "Writing in the 90s CE, Josephus says the Armenians call the spot Apobaterion, “the Place of Descent,” and that the ark's remains were still shown there (Antiquities 1.3.5). He then cites non-Jewish writers, including Berossus and Nicolaus of Damascus, to show that other peoples also knew of the flood.",
      theirEyes:
        "A Roman reader of Josephus might be surprised to learn that pilgrims could, supposedly, still visit the ship's resting place.",
      tradition: {
        jewish:
          "Josephus also says Noah urged his corrupt neighbours to change their ways, then left the land fearing they would kill him (Antiquities 1.3.1). 2 Peter 2:5 likewise calls Noah “a preacher of righteousness.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 8:4", "2 Peter 2:5"],
    sources: [scripture, josephusAnt13],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-073",
    era: "primeval",
    level: 15,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus quotes the Babylonian priest Berossus: people took what from the ark's remains to use as amulets?",
    choices: ["Olive leaves", "Iron nails", "Bitumen", "Strands of rope"],
    answer: 2,
    explanation: {
      textSays: "Genesis 6:14: Noah seals the ark “inside and outside with pitch.”",
      world:
        "Berossus wrote a Greek history of Babylon in the early 3rd century BCE. Josephus quotes him saying part of the ship is still in Armenia, in the mountains of the Cordyaeans, and that people scrape off its bitumen to use as amulets (Antiquities 1.3.6). Other fragments of Berossus, preserved by Eusebius, name his flood hero Xisouthros, a Greek form of Ziusudra.",
      theirEyes:
        "A traveller might carry a black lump of “ark pitch” in a pouch, trusting it to ward off harm.",
    },
    confidence: "settled",
    references: ["Genesis 6:14"],
    sources: [
      scripture,
      josephusAnt13,
      { kind: "scholarship", citation: "G. P. Verbrugghe and J. M. Wickersham, Berossos and Manetho, Introduced and Translated (Ann Arbor, 1996)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-074",
    era: "primeval",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A Dead Sea Scroll commentary on Genesis (4Q252) reads the “120 years” of Genesis 6:3 as what?",
    choices: [
      "The time left until the flood",
      "The age at which Noah married",
      "The years the waters covered the earth",
      "The age of the Watchers when they fell",
    ],
    answer: 0,
    explanation: {
      textSays: "Genesis 6:3: “My Spirit will not strive with man forever, because he also is flesh; so his days will be one hundred twenty years.”",
      world:
        "4Q252 (Commentary on Genesis A) opens by dating the decree to Noah's 480th year, so the flood comes 120 years later, in his 600th year (Genesis 7:6). That reading fits the fact that people after the flood still live far longer than 120 years: Shem reaches 600 (Genesis 11:10–11).",
      theirEyes:
        "For the scroll's readers, the number was a warning clock: a set time for humanity to change before judgement fell.",
      debate:
        "Many modern scholars read 6:3 as a limit on human lifespan instead; Moses dies at exactly 120 (Deuteronomy 34:7).",
    },
    confidence: "settled",
    references: ["Genesis 6:3", "Genesis 7:6", "Genesis 11:10–11", "Deuteronomy 34:7"],
    sources: [
      scripture,
      { kind: "primary", citation: "4Q252 (Commentary on Genesis A), col. I" },
      { kind: "scholarship", citation: "G. J. Brooke, “252. 4QCommentary on Genesis A,” in Discoveries in the Judaean Desert XXII (Oxford, 1996)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-075",
    era: "primeval",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In his treatise On the Giants, Philo says the beings Moses calls “angels” are what other philosophers call what?",
    choices: ["Titans", "Daimones, souls that live in the air", "The planets", "Kings of ancient cities"],
    answer: 1,
    explanation: {
      textSays: "Genesis 6:2 speaks of “God’s sons”; some Greek manuscripts that Philo knew read “angels of God.”",
      world:
        "Philo of Alexandria (c. 20 BCE – c. 50 CE) begins On the Giants with Genesis 6. He says the air is full of souls, which Moses calls angels and other philosophers call daimones. Some never descend into bodies; others sink into the flesh. He insists the giants story is not a myth but a lesson about the soul.",
      theirEyes:
        "An educated Jew in Alexandria could read Genesis and Plato side by side and find, in Philo's eyes, the same truths.",
      tradition: {
        jewish:
          "Philo shows a Greek-speaking, philosophical way of reading Genesis in Jesus' lifetime, quite different from the vivid stories of 1 Enoch.",
      },
    },
    confidence: "settled",
    references: ["Genesis 6:2–4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, De gigantibus (On the Giants) (trans. F. H. Colson and G. H. Whitaker, Loeb Classical Library 227)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
