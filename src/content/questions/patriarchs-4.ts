import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const patriarchs4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "pat-076",
    era: "patriarchs",
    level: 16,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Joseph's brothers dipped his tunic in blood to fool their father. Whose blood was it?",
    choices: ["A lamb's", "A wild animal's", "A male goat's", "Joseph's own"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 37:31: “They took Joseph’s tunic, and killed a male goat, and dipped the tunic in the blood.” Jacob concludes, “An evil animal has devoured him” (37:33).",
      world:
        "Goats keep turning up at the moments of deception in Genesis. Jacob once fooled his own father with young goats' skins on his hands and neck (27:16); in the very next chapter Judah is tricked after promising “a young goat from the flock” (38:17).",
      theirEyes:
        "A torn, blood-soaked tunic with no body was all a shepherd father needed to see: wild animals took sheep, and now they had taken his son.",
      debate:
        "Literary critics such as Robert Alter point out that “Examine it” (37:32) and “Please discern” (38:25) translate the same Hebrew verb, linking the two deceptions; how deliberate the link is remains discussed.",
    },
    confidence: "settled",
    references: ["Genesis 37:31–33", "Genesis 27:16", "Genesis 38:17", "Genesis 38:25"],
    sources: [scripture, { kind: "scholarship", citation: "Robert Alter, The Art of Biblical Narrative (Basic Books, 1981), ch. 1" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-077",
    era: "patriarchs",
    level: 16,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Genesis 39:1 says Potiphar bought Joseph from the Ishmaelites.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 39:1: Potiphar “bought him from the hand of the Ishmaelites that had brought him down there.” Yet 37:36 says “The Midianites sold him into Egypt to Potiphar,” and 37:28 mentions both groups.",
      world:
        "Judges 8:24 calls Midianite raiders Ishmaelites: “they had golden earrings, because they were Ishmaelites.” So “Ishmaelite” could be used loosely for desert caravan traders.",
      theirEyes:
        "To a frightened boy, the caravan men were simply strangers with camels; their tribe hardly mattered.",
      debate:
        "Many source critics think two older versions of the story were woven together, one with Ishmaelites and one with Midianites. Others read the names as overlapping terms for the same traders, pointing to Judges 8:24.",
    },
    confidence: "settled",
    references: ["Genesis 39:1", "Genesis 37:28", "Genesis 37:36", "Judges 8:24"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Claus Westermann, Genesis 37–50: A Commentary (Augsburg, 1986)" },
      { kind: "scholarship", citation: "Gordon J. Wenham, Genesis 16–50 (Word Biblical Commentary 2, Word, 1994)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-078",
    era: "patriarchs",
    level: 16,
    category: "daily-life",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Genesis says Joseph shaved before he was brought in to Pharaoh.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 41:14: “they brought him hastily out of the dungeon. He shaved himself, changed his clothing, and came in to Pharaoh.”",
      world:
        "Egyptian art usually shows Egyptian men clean-shaven and people from Canaan bearded, as in the painted Asiatic visitors in the tomb of Khnumhotep II at Beni Hasan (about 1890 BCE). Herodotus later noted that Egyptians shaved and let their hair grow only when mourning (Histories 2.36).",
      theirEyes:
        "A bearded foreign prisoner could not walk into the palace looking like one; first the razor, then the fresh linen.",
    },
    confidence: "settled",
    references: ["Genesis 41:14"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 2.36" },
      { kind: "archaeology", citation: "Wall painting of Asiatic visitors, tomb of Khnumhotep II (BH 3), Beni Hasan" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-079",
    era: "patriarchs",
    level: 16,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "On what occasion did Pharaoh restore his chief cup bearer and hang his chief baker?",
    choices: ["The first day of harvest", "His birthday", "The day the Nile began to rise", "A victory over Nubia"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 40:20: “On the third day, which was Pharaoh’s birthday, he made a feast for all his servants.” The cup bearer is restored; the baker is hanged, as Joseph had said (40:21–22). In the New Testament, Herod Antipas' birthday supper (Mark 6:21) also ends with an execution.",
      world:
        "In Ptolemaic Egypt, at least, the king's birthday was a public festival. The Rosetta Stone decree (196 BCE) names “the 30th of Mesore on which the birthday of the king is celebrated,” and praises the king for freeing people held in prison or long under accusation.",
      theirEyes:
        "For two men waiting in the guard-house, the king's party decided everything: one went back to pouring wine, the other to his death.",
    },
    confidence: "settled",
    references: ["Genesis 40:20–22", "Mark 6:21"],
    sources: [scripture, { kind: "archaeology", citation: "Rosetta Stone (Memphis decree of Ptolemy V, 196 BCE), British Museum EA 24; Greek text trans. in Fordham Internet Ancient History Sourcebook" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-080",
    era: "patriarchs",
    level: 16,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Book of Jubilees ties the day Jacob received Joseph's bloodied tunic to which yearly holy day?",
    choices: ["Passover", "The Feast of Weeks", "The Day of Atonement", "The Feast of Tabernacles"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis gives no date: “Jacob tore his clothes, and put sackcloth on his waist, and mourned for his son many days” (37:34). Leviticus 16:29 sets the Day of Atonement “in the seventh month, on the tenth day of the month,” when Israel must “afflict your souls.”",
      world:
        "Jubilees, written in Hebrew in the 2nd century BCE and found in many copies at Qumran, retells Genesis and early Exodus within a fixed calendar, often explaining when and why festivals began.",
      theirEyes:
        "For a reader of Jubilees, the yearly fast of the seventh month also recalled an old man weeping over his son's torn tunic.",
      tradition: {
        jewish:
          "Jubilees 34:12 says the brothers sent the tunic to Jacob “on the tenth of the seventh month,” and 34:18 explains: “For this reason it is ordained for the children of Israel that they should afflict themselves on the tenth of the seventh month,” the day the news that made Jacob weep for Joseph reached him.",
      },
    },
    confidence: "settled",
    references: ["Genesis 37:31–35", "Leviticus 16:29", "Leviticus 23:27"],
    sources: [
      scripture,
      { kind: "primary", citation: "Jubilees 34:12–19, trans. R. H. Charles (1913)" },
      { kind: "scholarship", citation: "James C. VanderKam, The Book of Jubilees (Guides to Apocrypha and Pseudepigrapha, Sheffield Academic Press, 2001)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "pat-081",
    era: "patriarchs",
    level: 17,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the WEB, Potiphar is Pharaoh's “captain of the guard.” Which Babylonian officer in 2 Kings 25 has the same title?",
    choices: ["Ashpenaz", "Rabshakeh", "Nebuzaradan", "Sisera"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 37:36 and 39:1 call Potiphar “an officer of Pharaoh’s, the captain of the guard.” 2 Kings 25:8: “Nebuzaradan the captain of the guard, a servant of the king of Babylon, came to Jerusalem.”",
      world:
        "The Hebrew titles are closely related: Potiphar is sar hattabbachim, Nebuzaradan rav-tabbachim. A tabbach is literally a slaughterer or cook (the same word is “cook” in 1 Samuel 9:23), so the title probably began as head of the royal butchers and came to mean commander of the king's bodyguard. Ashpenaz was Nebuchadnezzar's chief eunuch; Rabshakeh was an Assyrian officer; Sisera a Canaanite general.",
      theirEyes:
        "In any royal court, the men who guarded the king's table and the king's life were his most trusted, and most feared.",
    },
    confidence: "settled",
    references: ["Genesis 37:36", "Genesis 39:1", "2 Kings 25:8", "1 Samuel 9:23"],
    sources: [scripture, { kind: "scholarship", citation: "Victor P. Hamilton, The Book of Genesis: Chapters 18–50 (NICOT, Eerdmans, 1995)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-082",
    era: "patriarchs",
    level: 17,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "As Joseph rode in Pharaoh's second chariot, what did people cry out before him, in the WEB?",
    choices: ["“Long live the king!”", "“Bow the knee!”", "“Make way for the vizier!”", "“Hosanna!”"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 41:42–43: Pharaoh gives Joseph his signet ring, fine linen and a gold chain, and makes him ride “in the second chariot which he had. They cried before him, ‘Bow the knee!’”",
      world:
        "A ring of office, fine linen and a gold collar fit Egyptian court practice: kings rewarded favoured officials with gold collars, the “gold of honour.”",
      theirEyes:
        "The crowd who had never heard of the Hebrew prisoner now dropped to their knees as his chariot passed.",
      debate:
        "The Hebrew word is ’avrekh, and its meaning is uncertain. “Bow the knee” links it to the Hebrew root for “knee”; others connect it to an Egyptian command such as “Attention!” or to the Akkadian title abarakku, a high steward.",
    },
    confidence: "settled",
    references: ["Genesis 41:42–43"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Victor P. Hamilton, The Book of Genesis: Chapters 18–50 (NICOT, Eerdmans, 1995)" },
      { kind: "scholarship", citation: "Donald B. Redford, A Study of the Biblical Story of Joseph (Genesis 37–50) (VTSup 20, Brill, 1970)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-083",
    era: "patriarchs",
    level: 17,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What share of Egypt's produce did Joseph advise Pharaoh to collect in the seven good years?",
    choices: ["A tenth", "A third", "Half", "A fifth"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 41:34: “take up the fifth part of the land of Egypt’s produce in the seven plenteous years.” Joseph “laid up grain as the sand of the sea… until he stopped counting” (41:49). Later the fifth becomes a permanent rule: “Pharaoh should have the fifth” (47:26).",
      world:
        "Egypt ran on stored grain. A wooden model from the tomb of the official Meketre (about 1980 BCE) shows a granary where workers carry sacks of grain while scribes, with papyrus rolls and writing boards, record the amounts.",
      theirEyes:
        "Every harvest the scribes were there with their palettes, counting sacks; in the good years the bins kept filling.",
    },
    confidence: "settled",
    references: ["Genesis 41:34–36", "Genesis 41:48–49", "Genesis 47:24–26"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Model of a Granary with Scribes, tomb of Meketre (TT 280), Thebes, about 1981–1975 BCE; Metropolitan Museum of Art 20.3.11" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-084",
    era: "patriarchs",
    level: 17,
    category: "faith-practice",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: during the famine, Joseph bought the land of Egypt's priests for Pharaoh.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 47:20 says “Joseph bought all the land of Egypt for Pharaoh,” but 47:22: “Only he didn’t buy the land of the priests, for the priests had a portion from Pharaoh.” The exemption is repeated in 47:26.",
      world:
        "Egypt's temples were great landowners, with their own fields, herds and workers. The Greek historian Diodorus of Sicily, writing in the 1st century BCE, describes Egypt's land as divided among the priests, the king and the warrior class (Library of History 1.73).",
      theirEyes:
        "When the famine forced farmers to sell their fields, the temple estates of the gods stayed untouched.",
    },
    confidence: "settled",
    references: ["Genesis 47:20–22", "Genesis 47:26"],
    sources: [scripture, { kind: "primary", citation: "Diodorus Siculus, Library of History 1.73" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-085",
    era: "patriarchs",
    level: 17,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to Josephus, what did Joseph's Egyptian name, Zaphenath-paneah, mean?",
    choices: ["The revealer of secrets", "Son of the Nile", "Beloved of Ra", "Lord of the granaries"],
    answer: 0,
    explanation: {
      textSays: "Genesis 41:45: “Pharaoh called Joseph’s name Zaphenath-Paneah.” Genesis itself does not explain the name.",
      world:
        "Egyptologists usually reconstruct an Egyptian original meaning something like “the god speaks and he lives,” though other readings have been proposed.",
      theirEyes:
        "A new Egyptian name made the foreign official one of Pharaoh's own men, at least on paper.",
      tradition: {
        jewish:
          "Josephus, writing in the 1st century CE, says Pharaoh called him “Psothom Phanech… for that name denotes the revealer of secrets” (Antiquities 2.6.1), a meaning that fits the dream-interpreter.",
        christian: "Jerome's Latin Vulgate (about 400 CE) translates the name as salvatorem mundi, “saviour of the world.”",
      },
      debate: "The name's Egyptian form and date are debated; some scholars see it as typical of much later Egyptian name patterns.",
    },
    confidence: "settled",
    references: ["Genesis 41:45"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 2.6.1 (2.91), trans. Whiston" },
      { kind: "primary", citation: "Vulgate, Genesis 41:45" },
      { kind: "scholarship", citation: "Donald B. Redford, A Study of the Biblical Story of Joseph (Genesis 37–50) (VTSup 20, Brill, 1970)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "pat-086",
    era: "patriarchs",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Genesis 46:27 says seventy of Jacob's house came into Egypt; Acts 7:14 says seventy-five. Which ancient text also has seventy-five?",
    choices: ["The Masoretic Hebrew text", "The Latin Vulgate", "The Greek Septuagint", "The King James Version"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 46:27: “All the souls of the house of Jacob, who came into Egypt, were seventy.” Stephen in Acts 7:14: Joseph summoned “all his relatives, seventy-five souls.”",
      world:
        "The Septuagint reads seventy-five at Genesis 46:27 and Exodus 1:5, counting extra descendants of Joseph's sons. A Dead Sea Scroll of Exodus (4QExod-b) also reads seventy-five at Exodus 1:5, so both numbers circulated in Hebrew. The Vulgate and KJV follow the Hebrew seventy.",
      theirEyes:
        "A Greek-speaking Jew in Jerusalem, hearing Stephen, would have recognised the number from his own Bible.",
      tradition: {
        shared:
          "Acts usually quotes the Old Testament in its Greek (Septuagint) form, which explains Stephen's figure.",
      },
    },
    confidence: "settled",
    references: ["Genesis 46:27", "Exodus 1:5", "Acts 7:14"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 46:27; Exodus 1:5" },
      { kind: "primary", citation: "4QExod-b (4Q13), Exodus 1:5" },
      { kind: "scholarship", citation: "Marc Zvi Brettler, “All of Jacob’s Descendants Numbered Seventy-Five: The Opening of Exodus in the Dead Sea Scrolls,” TheTorah.com" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-087",
    era: "patriarchs",
    level: 18,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Why did Joseph tell his brothers to say they were keepers of livestock, according to Genesis 46:34?",
    choices: [
      "Every shepherd was an abomination to the Egyptians",
      "Pharaoh needed soldiers for his chariots",
      "Shepherds paid no taxes in Egypt",
      "Only shepherds could enter Pharaoh's temples",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 46:34: say “Your servants have been keepers of livestock from our youth,” so “that you may dwell in the land of Goshen; for every shepherd is an abomination to the Egyptians.” Earlier, Egyptians ate apart from Joseph's brothers, “for that is an abomination to the Egyptians” (43:32).",
      world:
        "Egyptians could keep foreigners at a distance at table. Herodotus says that in his day no Egyptian would kiss a Greek or use a Greek's knife, spit or cauldron (Histories 2.41).",
      theirEyes:
        "Being looked down on had an upside: the herders from Canaan would be given their own pasture, apart from Egyptian towns.",
      debate: "The Egyptian evidence for a general dislike of herdsmen is limited, and commentators explain the verse in different ways.",
    },
    confidence: "settled",
    references: ["Genesis 46:31–34", "Genesis 43:32", "Genesis 47:3–6"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 2.41" },
      { kind: "scholarship", citation: "Claus Westermann, Genesis 37–50: A Commentary (Augsburg, 1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-088",
    era: "patriarchs",
    level: 18,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Hebrew of Genesis 46:29, Joseph meets Jacob in Goshen. Where does the Greek Septuagint place the meeting?",
    choices: ["At Alexandria", "At Memphis", "At Thebes", "At Heroonpolis, the “city of Heroes”"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 46:28–29: Jacob sent Judah “to show the way before him to Goshen,” and Joseph “went up to meet Israel, his father, in Goshen.” The Septuagint instead has Judah sent “to meet him to the city of Heroes, into the land of Ramesses,” and Joseph meets his father “at the city of Heroes” (Brenton's translation).",
      world:
        "The translators, working in Ptolemaic Egypt from the 3rd century BCE, named a town their readers knew: Heroonpolis in the Wadi Tumilat, on the eastern edge of the Delta, usually located at or near Tell el-Maskhuta. Alexandria was founded only in 331 BCE; Memphis and Thebes lay far from Goshen.",
      theirEyes:
        "A Jew of Alexandria reading his Greek Genesis could picture the reunion at a real town on the road into Egypt from the east.",
      debate:
        "Where exactly Goshen lay is not known, and the identification of Heroonpolis with Tell el-Maskhuta (or Pithom) is debated.",
    },
    confidence: "settled",
    references: ["Genesis 46:28–29", "Genesis 47:11"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 46:28–29, trans. L. C. L. Brenton (1851)" },
      { kind: "scholarship", citation: "John William Wevers, Notes on the Greek Text of Genesis (Scholars Press, 1993)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "pat-089",
    era: "patriarchs",
    level: 18,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "When Pharaoh asked Jacob his age, what did Jacob answer?",
    choices: ["One hundred ten years", "One hundred thirty years", "One hundred forty-seven years", "One hundred seventy-five years"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 47:9: “The years of my pilgrimage are one hundred thirty years. The days of the years of my life have been few and evil.” He lived another seventeen years in Egypt and died at 147 (47:28). Abraham lived 175 years (25:7) and Joseph 110 (50:26).",
      world:
        "Isaac's 180 years (35:28) and Abraham's 175 make Jacob's complaint pointed: his life was shorter and harder than his fathers'.",
      theirEyes:
        "Standing before the king of Egypt, the old herdsman did not boast; he counted his years as a wanderer's, and found them few and bitter.",
    },
    confidence: "settled",
    references: ["Genesis 47:7–10", "Genesis 47:28", "Genesis 25:7", "Genesis 35:28", "Genesis 50:26"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-090",
    era: "patriarchs",
    level: 18,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In his treatise On Joseph, Philo of Alexandria reads Joseph's many-coloured coat as a symbol of what?",
    choices: [
      "The twelve tribes of Israel",
      "The rainbow promise to Noah",
      "The varied, many-sided life of politics",
      "The priest's breastplate of jewels",
    ],
    answer: 2,
    explanation: {
      textSays: "Genesis 37:3: Jacob “made him a tunic of many colors.”",
      world:
        "“Many colors” follows the Greek Septuagint, the Bible Philo read. Philo's On Joseph is subtitled “the life of the statesman,” and presents Joseph as the model politician.",
      theirEyes:
        "For an educated Jew in Alexandria, Joseph was not just a shepherd boy but the patron of every Jew who served in government.",
      tradition: {
        jewish:
          "Philo (1st century CE) writes that “a political constitution is a many-coloured and multiform thing,” and the statesman must be “a multiform man,” one thing in peace and another in war (On Joseph 32–34). He also praises Joseph's self-control and wise rule.",
      },
    },
    confidence: "settled",
    references: ["Genesis 37:3"],
    sources: [scripture, { kind: "primary", citation: "Philo, On Joseph (De Iosepho) 32–34, trans. C. D. Yonge" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "pat-091",
    era: "patriarchs",
    level: 19,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "How did Jacob make Joseph swear not to bury him in Egypt?",
    choices: [
      "By eating salt together",
      "By passing between cut animals",
      "By setting up a stone pillar",
      "By having Joseph put his hand under his thigh",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 47:29–31: “please put your hand under my thigh, and deal kindly and truly with me. Please don’t bury me in Egypt.” Then “Israel said, ‘Swear to me,’ and he swore to him.” Abraham used the same gesture with his servant (24:2–3).",
      world:
        "Both times the gesture comes from a dying or aged father about a matter of family and land. Many commentators think it called on the man's descendants as witnesses to the oath.",
      theirEyes:
        "Joseph was Egypt's second man, but at his father's bedside he took the oath like any son, hand under his father's thigh.",
      debate: "The exact meaning of the gesture is not explained in the text, and interpretations vary.",
    },
    confidence: "settled",
    references: ["Genesis 47:29–31", "Genesis 24:2–3", "Genesis 50:5"],
    sources: [scripture, { kind: "scholarship", citation: "Gordon J. Wenham, Genesis 16–50 (Word Biblical Commentary 2, Word, 1994)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-092",
    era: "patriarchs",
    level: 19,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: when blessing Joseph's sons, Jacob laid his right hand on Manasseh, the firstborn.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 48:14: “Israel stretched out his right hand, and laid it on Ephraim’s head, who was the younger, and his left hand on Manasseh’s head, guiding his hands knowingly.” When Joseph objects, Jacob says, “I know, my son, I know… his younger brother will be greater than he” (48:19).",
      world:
        "Ephraim did become the leading northern tribe; prophets such as Hosea often use “Ephraim” for the whole northern kingdom of Israel.",
      theirEyes:
        "Joseph had arranged the boys carefully, the elder at his father's right; the half-blind old man crossed his arms anyway.",
      tradition: {
        christian: "Hebrews 11:21 counts this blessing as an act of faith: “By faith Jacob, when he was dying, blessed each of the sons of Joseph.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 48:13–20", "Hebrews 11:21"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-093",
    era: "patriarchs",
    level: 19,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Jacob's blessings in Genesis 49, which son is called “a ravenous wolf”?",
    choices: ["Benjamin", "Judah", "Issachar", "Naphtali"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 49:27: “Benjamin is a ravenous wolf. In the morning he will devour the prey. At evening he will divide the plunder.” Judah is “a lion’s cub” (49:9), Issachar “a strong donkey” (49:14) and Naphtali “a doe set free” (49:21).",
      world:
        "Benjamin was a small tribe with a warlike name: Judges 20:16 tells of its 700 left-handed slingers, and Israel's first king, Saul, came from it.",
      theirEyes:
        "Gathered round their dying father, the brothers heard themselves compared to lions, donkeys, serpents and wolves, a picture of what each tribe would become.",
      tradition: {
        christian: "Revelation 5:5 calls Jesus “the Lion who is of the tribe of Judah,” drawing on Genesis 49:9.",
      },
    },
    confidence: "settled",
    references: ["Genesis 49:9", "Genesis 49:14", "Genesis 49:21", "Genesis 49:27", "Judges 20:16", "Revelation 5:5"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-094",
    era: "patriarchs",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to 1 Chronicles 5:1, who received the birthright that Reuben lost?",
    choices: ["Judah", "Levi", "The sons of Joseph", "Simeon"],
    answer: 2,
    explanation: {
      textSays:
        "1 Chronicles 5:1–2: Reuben was the firstborn, “but because he defiled his father’s couch, his birthright was given to the sons of Joseph… For Judah prevailed above his brothers, and from him came the prince; but the birthright was Joseph’s.” Compare Genesis 49:3–4 and 48:5.",
      world:
        "The Chronicler splits the firstborn's privileges: the double share goes to Joseph, through Ephraim and Manasseh counted as two tribes, while leadership goes to Judah, the tribe of David.",
      theirEyes:
        "For readers in Judah after the exile, the old family story explained why the northern tribes were large but kingship belonged to Judah.",
    },
    confidence: "settled",
    references: ["1 Chronicles 5:1–2", "Genesis 49:3–4", "Genesis 48:5"],
    sources: [scripture, { kind: "scholarship", citation: "Sara Japhet, I & II Chronicles: A Commentary (Old Testament Library, Westminster John Knox, 1993)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-095",
    era: "patriarchs",
    level: 19,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Asking to be buried in the cave of Machpelah, Jacob says that he himself buried whom there?",
    choices: ["Rachel", "Leah", "Deborah, Rebekah's nurse", "Sarah"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 49:31: “There they buried Abraham and Sarah, his wife. There they buried Isaac and Rebekah, his wife, and there I buried Leah.” Rachel was buried on the way to Ephrath (48:7) and Deborah below Bethel (35:8). Jacob's sons carry him to Machpelah (50:13).",
      world:
        "The traditional site at Hebron is enclosed by a massive wall of Herodian-style masonry, generally attributed to Herod the Great (late 1st century BCE); the building over it is today shared by a mosque and a synagogue.",
      theirEyes:
        "Jacob's beloved Rachel lay alone by the road; at the end, he chose to lie beside Leah and his fathers.",
    },
    confidence: "settled",
    references: ["Genesis 49:29–32", "Genesis 48:7", "Genesis 35:8", "Genesis 50:13"],
    sources: [scripture, { kind: "reference", citation: "“Cave of the Patriarchs,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "pat-096",
    era: "patriarchs",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A Dead Sea Scroll commentary, 4Q252, reads Jacob's promise of a sceptre for Judah as pointing to whom?",
    choices: ["The Teacher of Righteousness", "Judas Maccabeus", "The high priest in Jerusalem", "The Messiah of righteousness, the branch of David"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 49:10: “The scepter will not depart from Judah, nor the ruler’s staff from between his feet, until he comes to whom it belongs.” The older KJV reads “until Shiloh come.”",
      world: "The Hebrew word (shiloh) is famously obscure, which is why translations differ.",
      theirEyes:
        "Readers at Qumran took the old blessing as a promise: a rightful king from David's line was still to come.",
      tradition: {
        jewish:
          "4Q252, a scroll copied in the 1st century BCE, says a ruler will not depart from Judah until the coming of the Messiah of righteousness, the branch of David, to whom the covenant of kingship is given.",
        christian:
          "Justin Martyr (mid-2nd century) applies Genesis 49:10–11 to Jesus (First Apology 32).",
      },
    },
    confidence: "settled",
    references: ["Genesis 49:10"],
    sources: [
      scripture,
      { kind: "primary", citation: "4Q252 (Commentary on Genesis A), col. V" },
      { kind: "primary", citation: "Justin Martyr, First Apology 32" },
      { kind: "scholarship", citation: "Geza Vermes, The Complete Dead Sea Scrolls in English (Penguin)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-097",
    era: "patriarchs",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Where did Joseph's funeral procession stop to mourn Jacob for seven days, a place renamed Abel Mizraim?",
    choices: ["The threshing floor of Atad", "The oaks of Mamre", "The well of Beersheba", "Rachel's tomb near Bethlehem"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 50:10–11: “They came to the threshing floor of Atad, which is beyond the Jordan… He mourned for his father seven days.” The Canaanites said, “This is a grievous mourning by the Egyptians,” so the place was called Abel Mizraim.",
      world:
        "The name is a pun: Hebrew ’evel means “mourning” and Mizraim is Egypt, so it sounds like “the mourning of Egypt.” Elders of Egypt, chariots and horsemen went with the family (50:7–9).",
      theirEyes:
        "Local farmers watched an Egyptian state funeral wailing on their threshing floor, and named the place after it.",
      debate:
        "Atad has not been identified. “Beyond the Jordan” is puzzling for a route from Egypt to Hebron; it may reflect a different tradition about the route or a different viewpoint of the writer.",
    },
    confidence: "settled",
    references: ["Genesis 50:7–11"],
    sources: [scripture, { kind: "scholarship", citation: "Claus Westermann, Genesis 37–50: A Commentary (Augsburg, 1986)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-098",
    era: "patriarchs",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Stephen's speech (Acts 7:16), where were Jacob and “our fathers” laid to rest?",
    choices: ["Hebron", "Bethel", "Shechem", "Beersheba"],
    answer: 2,
    explanation: {
      textSays:
        "Acts 7:15–16: Jacob “died, himself and our fathers; and they were brought back to Shechem and laid in the tomb that Abraham bought for a price in silver from the children of Hamor of Shechem.” Genesis has Jacob buried at Machpelah near Hebron (50:13) and Joseph's bones at Shechem (Joshua 24:32).",
      world:
        "Other Jewish writers put the brothers at Hebron: Josephus says their descendants buried them there (Antiquities 2.8.2), and Jubilees 46:9 places them in “the double cave,” Machpelah.",
      theirEyes:
        "For Stephen's hearers, both Hebron and Shechem were holy ground bought by the patriarchs.",
      debate:
        "Stephen's summary merges Abraham's purchase at Hebron (Genesis 23) with Jacob's at Shechem (33:19). Scholars explain this as compression in a speech, a different tradition (perhaps Samaritan-influenced), or a slip.",
    },
    confidence: "settled",
    references: ["Acts 7:15–16", "Genesis 50:13", "Genesis 23:16–20", "Genesis 33:19", "Joshua 24:32"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 2.8.2, trans. Whiston" },
      { kind: "primary", citation: "Jubilees 46:9, trans. R. H. Charles" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-099",
    era: "patriarchs",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the Famine Stela on Sehel Island was carved in King Djoser's reign, whose famine it describes.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays: "Genesis 41:30 foretells: “Seven years of famine will arise after them.”",
      world:
        "The rock-cut Famine Stela near Aswan is set in Djoser's 18th year (3rd Dynasty, about 2650 BCE) and tells of seven years of low Nile floods; after Imhotep searches the temple records, the god Khnum appears in a dream and promises the flood will return. Its language and style show it was carved some 2,400 years later, in the Ptolemaic period, probably under Ptolemy V, likely by Khnum's priests to support their claim to land.",
      theirEyes:
        "Priests at Elephantine, claiming an ancient royal grant, put their case into the mouth of a famous king of the distant past.",
      debate:
        "Early interpreters compared the stela with Joseph's seven years. Most scholars now see seven-year famine as a common Near Eastern motif; it appears in the Epic of Gilgamesh too.",
    },
    confidence: "mainstream",
    references: ["Genesis 41:29–31"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Famine Stela, Sehel Island, Aswan (Ptolemaic period, perhaps reign of Ptolemy V, 205–180 BCE)" },
      { kind: "primary", citation: "Miriam Lichtheim, Ancient Egyptian Literature, vol. 3: The Late Period (University of California Press, 1980), “The Famine Stela”" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pat-100",
    era: "patriarchs",
    level: 20,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the ancient romance Joseph and Aseneth, what does a heavenly visitor give Aseneth to eat?",
    choices: ["A cluster of grapes", "A piece of honeycomb", "A handful of dates", "A pomegranate"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis says only that Pharaoh “gave him Asenath, the daughter of Potiphera priest of On as a wife” (41:45), and that she bore Manasseh and Ephraim (41:50).",
      world:
        "The Greek romance fills the gap. Aseneth scorns Joseph, then repents of her idols; a man from heaven visits her and gives her a wondrous honeycomb to eat, a sign of her new life, before she marries Joseph.",
      theirEyes:
        "For readers who worried about a hero marrying a priest's daughter, the story showed the bride turning to Israel's God first.",
      debate:
        "Its date and origin are disputed. Christoph Burchard placed it in Egyptian Judaism between about 100 BCE and the early 2nd century CE; Ross Shepard Kraemer argued it was composed no earlier than the 3rd or 4th century CE, in a setting that could be Jewish or Christian.",
    },
    confidence: "settled",
    references: ["Genesis 41:45", "Genesis 41:50"],
    sources: [
      scripture,
      { kind: "primary", citation: "Joseph and Aseneth 16, trans. C. Burchard, in J. H. Charlesworth (ed.), The Old Testament Pseudepigrapha, vol. 2 (Doubleday, 1985)" },
      { kind: "scholarship", citation: "Ross Shepard Kraemer, When Aseneth Met Joseph (Oxford University Press, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
