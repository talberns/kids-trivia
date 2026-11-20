import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const persian3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "per-051",
    era: "persian",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Queen Vashti refused to appear at the king's feast. What did the king's advisers recommend?",
    choices: [
      "That she be sent back to her father in Babylon",
      "That she never again come before the king, and her royal position go to another",
      "That she be made to host a second feast for the princes",
      "That she be forgiven once the king's anger cooled",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Memucan advised a decree “that Vashti may never again come before King Ahasuerus; and let the king give her royal estate to another who is better than she” (Esther 1:19). Letters then went to every province, each in its own language (1:22).",
      world:
        "Greek historians name Xerxes' queen as Amestris (Herodotus 9.108–112), and no outside source mentions a Vashti. This is one reason many scholars read Esther as a court story rather than a record.",
      theirEyes:
        "For the seven princes “who saw the king's face,” a queen's public refusal was a crisis: if the king's own household disobeyed, who would obey next?",
      debate:
        "Some scholars try to match Vashti with Amestris or another royal wife; most think the names cannot be reconciled.",
    },
    confidence: "settled",
    references: ["Esther 1:10–22"],
    sources: [scripture, { kind: "primary", citation: "Herodotus, Histories 9.108–112" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-052",
    era: "persian",
    level: 11,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Long before the Persians made it a royal capital, Susa had been the great city of which kingdom?",
    choices: ["Lydia", "Phoenicia", "Elam", "Urartu"],
    answer: 2,
    explanation: {
      textSays:
        "Esther is set in “Susa the palace” (Esther 1:2). Daniel 8:2 places a vision “in the citadel of Susa, which is in the province of Elam.”",
      world:
        "Susa, in what is now south-west Iran, was one of the chief cities of Elam, a kingdom whose history ran back to the 3rd millennium BCE. Darius I built a great palace there, and his building inscription from Susa boasts of materials brought from across the empire, such as cedar from Lebanon and gold from Sardis and Bactria. French excavations since the 1880s have uncovered the palace and its glazed-brick friezes.",
      theirEyes:
        "A visitor climbing to Susa's citadel walked past walls of coloured glazed brick showing rows of royal guards, built on a mound that was already ancient.",
    },
    confidence: "settled",
    references: ["Esther 1:2", "Daniel 8:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Darius I, foundation charter from Susa (DSf)" },
      { kind: "reference", citation: "“Susa,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-053",
    era: "persian",
    level: 11,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to Esther 2, how long did the young women's beauty treatments last before each met the king?",
    choices: ["Seven days", "Forty days", "Three months", "Twelve months"],
    answer: 3,
    explanation: {
      textSays:
        "Each young woman went in “after her purification for twelve months (for so were the days of their purification accomplished, six months with oil of myrrh, and six months with sweet fragrances and with preparations for beautifying women)” (Esther 2:12).",
      world:
        "Myrrh is a resin from trees of southern Arabia and the Horn of Africa, carried north by long-distance trade. A royal year of oils and perfumes was a display of the empire's wealth and reach.",
      theirEyes:
        "In the women's house in Susa, Esther waited a full year under the care of Hegai, with no idea what the night with the king would bring.",
    },
    confidence: "settled",
    references: ["Esther 2:3", "Esther 2:12"],
    sources: [scripture, { kind: "reference", citation: "“Myrrh,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-054",
    era: "persian",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "While sitting in the king's gate, what did Mordecai find out?",
    choices: [
      "That Haman was stealing from the treasury",
      "That two doorkeepers, Bigthan and Teresh, were plotting against the king",
      "That Vashti planned to return to the palace",
      "That Egypt was about to revolt",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Two eunuchs, Bigthan and Teresh, “who were doorkeepers, were angry, and sought to lay hands on the King Ahasuerus.” Mordecai told Esther, who told the king “in Mordecai's name,” and the matter “was written in the book of the chronicles in the king's presence” (Esther 2:21–23).",
      world:
        "Court plots were real dangers for Persian kings. Xerxes I himself was murdered in his palace in 465 BCE, according to Greek writers by a group led by a court official named Artabanus.",
      theirEyes:
        "The king's gate was where officials waited, petitions were heard and gossip travelled; a man who sat there heard things.",
    },
    confidence: "settled",
    references: ["Esther 2:19–23"],
    sources: [scripture, { kind: "reference", citation: "“Xerxes I,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-055",
    era: "persian",
    level: 11,
    category: "tradition",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the Hebrew Book of Esther never mentions God by name.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "God is not named anywhere in Hebrew Esther, and no one prays aloud in it. The nearest hint is Mordecai's warning that if Esther stays silent, “relief and deliverance will come to the Jews from another place” (Esther 4:14).",
      world:
        "The Greek version of Esther adds six passages, including long prayers by Mordecai and Esther, in which God is named again and again.",
      theirEyes:
        "Jews hearing the Hebrew story were left to notice for themselves how many “lucky” coincidences lined up for their people.",
      tradition: {
        shared:
          "Many Jewish and Christian readers see God as hidden but active behind the events; others read the silence as the author's deliberate choice to show people acting for themselves.",
      },
    },
    confidence: "settled",
    references: ["Esther 4:14"],
    sources: [
      scripture,
      { kind: "primary", citation: "Esther (Greek), Additions A–F" },
      { kind: "reference", citation: "“Esther, Book of,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "per-056",
    era: "persian",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "On the night the king could not sleep, what did he have read to him?",
    choices: ["The law of Moses", "Letters from his governors in Egypt", "The book of records of the chronicles", "Poems about Cyrus"],
    answer: 2,
    explanation: {
      textSays:
        "“On that night, the king couldn't sleep. He commanded the book of records of the chronicles to be brought, and they were read to the king” (Esther 6:1). It reminded him that Mordecai had never been rewarded for exposing the plot (6:2–3).",
      world:
        "Herodotus says that at Salamis Xerxes' scribes wrote down the names of captains who fought well (Histories 8.90), and that a man named Phylacus was recorded as a “benefactor of the king” and given land; such benefactors were called orosangae in Persian (8.85).",
      theirEyes:
        "Courtiers knew that a good deed done for the king went into the record, but whether it was ever rewarded depended on a sleepless night.",
    },
    confidence: "settled",
    references: ["Esther 6:1–3"],
    sources: [scripture, { kind: "primary", citation: "Herodotus, Histories 8.85; 8.90" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-057",
    era: "persian",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Who first proposed that Mordecai be led through the city on the king's horse, wearing royal clothing?",
    choices: ["Esther", "Mordecai himself", "Zeresh, Haman's wife", "Haman, thinking the honour was for himself"],
    answer: 3,
    explanation: {
      textSays:
        "Asked “What shall be done to the man whom the king delights to honor?”, Haman thought, “Who would the king delight to honor more than myself?” (Esther 6:6). He proposed royal clothing, the king's horse and a herald, and the king told him to do it “for Mordecai the Jew” (6:7–10).",
      world:
        "Wearing the king's own robe was a rare privilege at the Persian court. Herodotus tells how a robe Xerxes gave away caused trouble in his household (Histories 9.109–111).",
      theirEyes:
        "Crowds in the square at Susa watched the king's highest minister walk in front of the very man he hated, shouting his praises.",
    },
    confidence: "settled",
    references: ["Esther 6:6–12"],
    sources: [scripture, { kind: "primary", citation: "Herodotus, Histories 9.109–111" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-058",
    era: "persian",
    level: 12,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Before going to the king uninvited, what did Esther ask the Jews of Susa to do?",
    choices: [
      "Fast for her, neither eating nor drinking for three days",
      "Gather weapons and guard the palace",
      "Send gifts of food to one another",
      "Leave the city before the decree took effect",
    ],
    answer: 0,
    explanation: {
      textSays:
        "“Go, gather together all the Jews who are present in Susa, and fast for me, and neither eat nor drink three days, night or day… Then I will go in to the king, which is against the law; and if I perish, I perish” (Esther 4:16). Sending food gifts belongs to the later celebration (9:19–22).",
      world:
        "Fasting with sackcloth and ashes was a common sign of mourning and pleading across the ancient Near East; Esther 4:3 shows Jews doing it in every province.",
      theirEyes:
        "For three days the Jews of Susa went hungry together, knowing their queen was about to risk her life.",
      tradition: {
        jewish:
          "Greek Esther adds the prayers Mordecai and Esther offered during this fast, and Josephus' retelling also has them pray (Antiquities 11.6.8).",
      },
    },
    confidence: "settled",
    references: ["Esther 4:3", "Esther 4:15–17", "Esther 9:19–22"],
    sources: [
      scripture,
      { kind: "primary", citation: "Esther (Greek), Addition C" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.6.8" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-059",
    era: "persian",
    level: 12,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Esther, anyone who entered the king's inner court uncalled would die, unless the king did what?",
    choices: ["Stood up from his throne", "Held out his golden sceptre", "Removed his crown", "Clapped his hands twice"],
    answer: 1,
    explanation: {
      textSays:
        "Esther explains that whoever comes uncalled “there is one law for him, that he be put to death, except those to whom the king might hold out the golden scepter, that he may live” (Esther 4:11). The king held it out, and she touched its top (5:2).",
      world:
        "Herodotus describes Persian kings as hard to reach: only the seven nobles who helped Darius take power could enter unannounced (Histories 3.84), yet when one of them, Intaphernes, was turned away at the door, he maimed the guards and Darius later had him put to death (3.118–119). Reliefs from Persepolis show the king enthroned holding a long sceptre.",
      theirEyes:
        "Esther had not been summoned for thirty days; walking into that hall meant betting her life on one gesture of the king's hand.",
    },
    confidence: "settled",
    references: ["Esther 4:11", "Esther 5:1–2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 3.84; 3.118–119" },
      { kind: "archaeology", citation: "Audience reliefs from the Treasury at Persepolis" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-060",
    era: "persian",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the famous words “for such a time as this” are spoken by Esther.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Mordecai says them, in a message to Esther: “Who knows if you haven't come to the kingdom for such a time as this?” (Esther 4:14). Esther's own famous reply is “if I perish, I perish” (4:16).",
      world:
        "The whole exchange happens through a go-between, the eunuch Hathach (4:5–12), since Mordecai in sackcloth could not enter the king's gate (4:2).",
      theirEyes:
        "Messages passed back and forth across the palace walls, each one raising the stakes, until Esther made up her mind.",
      tradition: {
        christian: "Christian preachers often use Mordecai's words to speak of God placing people where they are needed.",
      },
    },
    confidence: "settled",
    references: ["Esther 4:2", "Esther 4:5–16"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "per-061",
    era: "persian",
    level: 13,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: once Haman fell, the king cancelled Haman's decree against the Jews.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "The king said a writing “sealed with the king's ring, may not be reversed by any man” (Esther 8:8). Instead, a second decree let the Jews “gather themselves together and to defend their lives” on the same day (8:11–12). Daniel 6 also speaks of “the law of the Medes and Persians, which doesn't alter” (Daniel 6:8; 6:9 in Hebrew).",
      world:
        "No Persian inscription states such a rule. The Greek historian Diodorus tells how Darius III ordered the execution of the Athenian Charidemus, then regretted it, but what had been done by royal authority could not be undone (Library of History 17.30).",
      theirEyes:
        "Officials across 127 provinces now held two royal letters for the 13th of Adar, and had to decide which side to take.",
      debate:
        "Many historians think the unchangeable law is a storytelling device shared by Esther and Daniel rather than a real Persian legal principle.",
    },
    confidence: "settled",
    references: ["Esther 8:5–12", "Daniel 6:8"],
    sources: [scripture, { kind: "primary", citation: "Diodorus Siculus, Library of History 17.30" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-062",
    era: "persian",
    level: 13,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Herodotus' praise of Persian royal couriers, “neither snow nor rain…”, is now best known as an unofficial motto of what?",
    choices: ["The Olympic Games", "The Red Cross", "The Roman army", "The United States Postal Service"],
    answer: 3,
    explanation: {
      textSays:
        "Esther's decrees went out “by courier on horseback, riding on royal horses that were bred from swift steeds” (Esther 8:10; compare 3:13–15).",
      world:
        "Herodotus says nothing mortal travels faster than these messengers: men and horses were posted along the road, one for each day's journey, and neither snow nor rain nor heat nor darkness stopped them (Histories 8.98). A version of his words is carved on the James A. Farley Post Office in New York. The US Postal Service itself says it has no official motto.",
      theirEyes:
        "A rider galloping into a post station handed the king's sealed letter to a fresh rider, who was already in the saddle before the first one dismounted.",
    },
    confidence: "settled",
    references: ["Esther 3:13–15", "Esther 8:10"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 8.98" },
      { kind: "reference", citation: "United States Postal Service, Postal History (USPS historian)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-063",
    era: "persian",
    level: 13,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Herodotus describes a Royal Road with 111 stopping-stations. It ran from Susa to which city in the west?",
    choices: ["Sardis", "Memphis", "Jerusalem", "Athens"],
    answer: 0,
    explanation: {
      textSays:
        "Esther pictures letters going to 127 provinces “from India to Ethiopia,” each written in its own script and language (Esther 8:9).",
      world:
        "Herodotus says the road from Sardis in Lydia (western Turkey) to Susa had 111 stations and was about 450 parasangs long, roughly three months on foot (Histories 5.52–54). Athens lay across the Aegean, beyond the empire's provinces, and Memphis and Jerusalem lay on other routes.",
      theirEyes:
        "Travellers on the king's road found guarded stations and inns at regular stages, and needed travel papers from officials to draw supplies.",
    },
    confidence: "settled",
    references: ["Esther 8:9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 5.52–54" },
      { kind: "reference", citation: "“Royal Road,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-064",
    era: "persian",
    level: 13,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Hebrew Esther calls Haman “the Agagite.” What does the king's letter in Greek Esther call him instead?",
    choices: ["An Egyptian", "A Babylonian", "A Macedonian", "A Lydian"],
    answer: 2,
    explanation: {
      textSays:
        "In the king's second letter in Greek Esther (Addition E), Haman is “a Macedonian, the son of Hammedatha, in reality an alien from the blood of the Persians,” accused of plotting “to transfer the dominion of the Persians to the Macedonians.” Elsewhere the Greek calls him “the Bugaean” (Greek 3:1), and Greek 9:24 again says “the Macedonian.”",
      world:
        "The Greek translation was made in the Hellenistic age, when Macedonian kings ruled the lands Persia once held, so Macedonians made a natural villain.",
      theirEyes:
        "Greek-speaking Jews in Egypt, living under Macedonian rulers, heard Haman recast as a foreign schemer against the Persian throne.",
    },
    confidence: "settled",
    references: ["Esther 3:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Esther (Greek), Addition E and 9:24 (World English Bible, Esther (Greek))" },
      { kind: "scholarship", citation: "C. A. Moore, Daniel, Esther and Jeremiah: The Additions (Anchor Bible 44, 1977)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-065",
    era: "persian",
    level: 13,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which churches count the Greek Additions to Esther as part of their Old Testament?",
    choices: [
      "Catholic and Orthodox churches",
      "Protestant churches only",
      "None: the Additions were only discovered in the 1900s",
      "Every church and every Jewish community",
    ],
    answer: 0,
    explanation: {
      textSays:
        "The Additions include Mordecai's dream, two royal letters, the prayers of Mordecai and Esther, and a closing interpretation of the dream.",
      world:
        "The Additions survive in the Septuagint and were read in the early church. When Jerome translated from Hebrew, he gathered them at the end of the book, which is why some Bibles number Esther up to chapter 16. Catholic and Orthodox churches treat them as deuterocanonical scripture. Jewish Bibles contain the Hebrew text only, and Protestant Bibles place the Additions in the Apocrypha, if they include them.",
      theirEyes:
        "A Greek-speaking congregation in the early centuries heard Esther pray aloud to God; a synagogue reading the Hebrew scroll heard no prayer at all.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Esther (Greek), Additions A–F" },
      { kind: "reference", citation: "“Esther, Additions to,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "C. A. Moore, Daniel, Esther and Jeremiah: The Additions (Anchor Bible 44, 1977)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "per-066",
    era: "persian",
    level: 14,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Greek Esther opens with Mordecai dreaming of two great serpents ready to fight. Whom does he later say they stood for?",
    choices: ["Persia and Greece", "Haman and himself", "Vashti and Esther", "Bigthan and Teresh"],
    answer: 1,
    explanation: {
      textSays:
        "At the end of Greek Esther, Mordecai says: “The two serpents are Haman and me,” the little spring that became a river is Esther, and the nations are those that tried to destroy the Jews (Esther (Greek) 10:4–9).",
      world:
        "This dream frame (Additions A and F) turns the story into a revealed plan of God, much like the dream visions in Daniel.",
      theirEyes:
        "A listener who heard the dream at the start spent the whole story waiting to see what the serpents, the river and the light would turn out to be.",
      tradition: {
        jewish:
          "The closing interpretation says God “ordained two lots,” one for his people and one for the nations, giving Purim's “lots” a new religious meaning (Esther (Greek) 10:10–13).",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Esther (Greek), Addition A (1:1) and Addition F (10:4–13), World English Bible" },
      { kind: "scholarship", citation: "C. A. Moore, Daniel, Esther and Jeremiah: The Additions (Anchor Bible 44, 1977)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-067",
    era: "persian",
    level: 14,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Darius I's trilingual Behistun inscription played a role like the Rosetta Stone's. Which writing system did it help scholars decipher?",
    choices: ["Egyptian hieroglyphs", "Linear B", "Cuneiform", "The Phoenician alphabet"],
    answer: 2,
    explanation: {
      world:
        "High on a cliff in western Iran, Darius I had his victory over rebels carved in three languages, all in cuneiform: Old Persian, Elamite and Babylonian (Akkadian). In the 19th century Henry Rawlinson copied it at great risk, and the inscription became the key to reading Akkadian cuneiform, and with it the archives of Assyria and Babylon. Hieroglyphs were cracked with the Rosetta Stone, and Linear B much later.",
      theirEyes:
        "No one passing on the road below could read the tiny writing; the giant relief of Darius standing on a defeated rival said enough.",
      tradition: {
        shared:
          "Because of Behistun, scholars can now read Assyrian and Babylonian records that name kings of Israel and Judah.",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "archaeology", citation: "Behistun (Bisotun) inscription of Darius I, Kermanshah province, Iran (UNESCO World Heritage Site)" },
      { kind: "reference", citation: "“Behistun Inscription,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-068",
    era: "persian",
    level: 14,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Thousands of clay administrative tablets were found at Persepolis (the Fortification Archive). Most are written in which language?",
    choices: ["Elamite", "Old Persian", "Greek", "Hebrew"],
    answer: 0,
    explanation: {
      textSays:
        "Esther describes royal letters sent “to every province according to its writing, and to every people in their language” (Esther 3:12).",
      world:
        "Excavators from the University of Chicago's Oriental Institute found the archive in the 1930s. The tablets record food rations and payments for workers and travellers under Darius I. Most are in Elamite cuneiform; several hundred are in Aramaic, and only a single known tablet is in Old Persian, which was used mainly for royal display inscriptions.",
      theirEyes:
        "A scribe at Persepolis might write rations in Elamite, a letter in Aramaic, and never once use the king's own Persian.",
    },
    confidence: "settled",
    references: ["Esther 3:12"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Persepolis Fortification Archive, Oriental Institute (now Institute for the Study of Ancient Cultures), University of Chicago" },
      { kind: "scholarship", citation: "R. T. Hallock, Persepolis Fortification Tablets (University of Chicago Press, 1969)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-069",
    era: "persian",
    level: 14,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Herodotus says Darius I divided his empire into twenty tax-paying provinces. What did the Persians call them?",
    choices: ["Nomes", "Satrapies", "Cantons", "Themes"],
    answer: 1,
    explanation: {
      textSays:
        "Esther's decrees go to the king's “local governors” and “the governors who were over every province” (Esther 3:12; 8:9). The Hebrew word behind “local governors” comes from the Persian title for a satrap.",
      world:
        "Herodotus lists the twenty provinces, “which they call satrapies,” and the tribute each paid (Histories 3.89–97). A satrap governed for the king, collected taxes and kept order. Nomes were Egyptian districts, and themes were Byzantine provinces.",
      theirEyes:
        "To a farmer in Judah, the satrap was a distant lord, but his tax collectors were not distant at all.",
      debate:
        "Esther's 127 provinces do not match Herodotus' twenty satrapies; scholars suggest Esther counts smaller districts, or uses a round, grand number.",
    },
    confidence: "settled",
    references: ["Esther 1:1", "Esther 3:12", "Esther 8:9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Herodotus, Histories 3.89–97" },
      { kind: "reference", citation: "“Satrap,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-070",
    era: "persian",
    level: 14,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: the 2nd-century Christian bishop Melito of Sardis included Esther in his list of Old Testament books.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "Melito travelled east to learn which books were accepted, and his list, preserved by Eusebius (Church History 4.26.13–14), leaves Esther out. In 367 CE Athanasius placed Esther among books “to be read” but not in the canon (Festal Letter 39). Other early lists do include it.",
      theirEyes:
        "A bishop in Sardis wanting to settle the question travelled all the way to the East, where the events of scripture had happened, to learn the list accurately.",
      tradition: {
        shared:
          "Esther is now part of the Jewish, Catholic, Orthodox and Protestant Bibles, but it was among the last books whose status was discussed.",
      },
      debate:
        "Some scholars think Melito simply counted Esther with another book; most take the omission as real doubt about it.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "primary", citation: "Eusebius, Church History 4.26.13–14" },
      { kind: "primary", citation: "Athanasius, Festal Letter 39" },
      { kind: "scholarship", citation: "L. M. McDonald, The Biblical Canon (2007)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "per-071",
    era: "persian",
    level: 15,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which list puts these Persian kings in the order they reigned?",
    choices: [
      "Cyrus the Great, Xerxes I, Darius I, Artaxerxes I",
      "Darius I, Cyrus the Great, Artaxerxes I, Xerxes I",
      "Cyrus the Great, Darius I, Xerxes I, Artaxerxes I",
      "Artaxerxes I, Cyrus the Great, Xerxes I, Darius I",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Ezra 1:1 begins with Cyrus. Ezra 4:5–7 then moves through Darius, Ahasuerus (Xerxes) and Artaxerxes, and Nehemiah serves an Artaxerxes (Nehemiah 2:1).",
      world:
        "Usual dates: Cyrus the Great 559–530 BCE, Darius I 522–486, Xerxes I 486–465, Artaxerxes I 465–424. Cyrus' son Cambyses, who conquered Egypt, ruled between Cyrus and Darius but is never named in the Bible.",
      theirEyes:
        "A Jewish grandfather in 450 BCE could tell his grandchildren that the Persian throne had changed hands five times since his own grandfather came home from Babylon.",
    },
    confidence: "settled",
    references: ["Ezra 1:1", "Ezra 4:5–7", "Nehemiah 2:1"],
    sources: [
      scripture,
      { kind: "reference", citation: "“Achaemenian dynasty,” Encyclopaedia Britannica" },
      { kind: "scholarship", citation: "P. Briant, From Cyrus to Alexander: A History of the Persian Empire (2002)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-072",
    era: "persian",
    level: 15,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Darius I's inscriptions repeatedly say he became king by the favour of which god?",
    choices: ["Amun", "Zeus", "Baal", "Ahura Mazda"],
    answer: 3,
    explanation: {
      world:
        "At Behistun and elsewhere, Darius credits his kingship and victories to Ahura Mazda, the “Wise Lord,” who is also the supreme god of Zoroastrianism. Zoroastrian teaching centres on the struggle between truth and the Lie, a contrast Darius' own inscriptions use when describing rebels as followers of the Lie. Herodotus says the Persians had no statues or temples and worshipped on mountain tops (Histories 1.131).",
      theirEyes:
        "Subjects across the empire saw the king carved beneath a winged figure, and heard that his right to rule came from the Wise Lord.",
      debate:
        "Darius never names the prophet Zarathustra, and scholars debate how far the Achaemenid kings were Zoroastrians in a later sense.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Darius I, Behistun inscription (Old Persian version, col. 1)" },
      { kind: "primary", citation: "Herodotus, Histories 1.131" },
      { kind: "reference", citation: "“Zoroastrianism,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-073",
    era: "persian",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Cyrus the Great's royal garden, often called the earliest known Persian “fourfold” garden, lay at the site of his tomb. Which site?",
    choices: ["Persepolis", "Pasargadae", "Babylon", "Ecbatana"],
    answer: 1,
    explanation: {
      textSays:
        "Ahasuerus holds his feast “in the court of the garden of the king's palace” (Esther 1:5), and storms out to “the palace garden” at Esther's banquet (7:7).",
      world:
        "At Pasargadae, Cyrus' capital in southern Iran, excavator David Stronach found stone water channels dividing a palace garden into sections, seen as the ancestor of the four-part Persian garden (chahar bagh). Persepolis was founded later by Darius I.",
      theirEyes:
        "In a dry land, a walled garden of channels, shade trees and fruit was the clearest sign of a king's power to give life.",
      debate:
        "Some recent work questions whether the Pasargadae garden had a strict fourfold plan; that it was an early royal garden is not in doubt.",
    },
    confidence: "mainstream",
    references: ["Esther 1:5", "Esther 7:7"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Pasargadae (UNESCO World Heritage Site, 2004)" },
      { kind: "scholarship", citation: "D. Stronach, Pasargadae: A Report on the Excavations (Oxford, 1978)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-074",
    era: "persian",
    level: 15,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Esther stresses that the Jews took no plunder from their enemies, even though the king's decree allowed it.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Mordecai's decree permitted the Jews “to plunder their possessions” (Esther 8:11), yet the text says three times that “they didn't lay their hand on the plunder” (9:10, 15, 16).",
      world:
        "Many readers link this to Haman's title “the Agagite”: when Saul fought Agag's people, he was condemned because he “took the plunder” (1 Samuel 15:19). Mordecai's family line includes a Kish, a Benjamite (Esther 2:5), the name of Saul's father, and this time the plunder is left alone.",
      theirEyes:
        "Neighbours who expected the Jews to enrich themselves noticed that they defended themselves but left the property alone.",
    },
    confidence: "settled",
    references: ["Esther 8:11", "Esther 9:10", "Esther 9:15–16", "Esther 2:5", "1 Samuel 15:19"],
    sources: [scripture, { kind: "reference", citation: "“Esther, Book of,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-075",
    era: "persian",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The closing note of Greek Esther names its translator, Lysimachus. Where does it say he lived?",
    choices: ["Alexandria", "Susa", "Jerusalem", "Antioch"],
    answer: 2,
    explanation: {
      textSays:
        "The note says that “in the fourth year of the reign of Ptolemeus and Cleopatra,” Dositheus and his son brought “this letter of Purim” to Egypt, and that “Lysimachus the son of Ptolemeus, who was in Jerusalem, had interpreted” it (Esther (Greek) 10:14 in the WEB; 11:1 in older numbering).",
      world:
        "Several Ptolemaic kings had queens named Cleopatra, so the date is uncertain. Elias Bickerman argued for 78–77 BCE; other scholars prefer about 114 BCE or 48 BCE.",
      theirEyes:
        "Jews in Egypt received a scroll from Jerusalem vouching for the festival of Purim, so that they too would keep the days of Adar.",
      tradition: {
        jewish:
          "The note shows Purim being actively spread to Greek-speaking Jews of the Diaspora in the late 2nd or 1st century BCE.",
      },
      debate:
        "Bickerman and others debate which Ptolemy and Cleopatra are meant, and therefore the exact year.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Esther (Greek), colophon (Addition F), World English Bible 10:14" },
      { kind: "scholarship", citation: "E. J. Bickerman, “The Colophon of the Greek Book of Esther,” Journal of Biblical Literature 63 (1944)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
