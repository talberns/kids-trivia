import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

const powell = {
  kind: "reference",
  citation: "Marvin A. Powell, “Weights and Measures,” Anchor Bible Dictionary, vol. 6 (Doubleday, 1992)",
} as const;

const vanderKam = {
  kind: "reference",
  citation: "James C. VanderKam, “Calendars (Ancient Israelite and Early Jewish),” Anchor Bible Dictionary, vol. 1 (Doubleday, 1992)",
} as const;

const bdag = (word: string) =>
  ({
    kind: "reference",
    citation: `W. Bauer, F. W. Danker et al., A Greek-English Lexicon of the New Testament (BDAG, 3rd ed., 2000), “${word}”`,
  }) as const;

const kingStager = {
  kind: "scholarship",
  citation: "Philip J. King and Lawrence E. Stager, Life in Biblical Israel (Westminster John Knox, 2001)",
} as const;

export const dailyD: QuestionInput[] = [
  {
    id: "dly-076",
    era: "roman-judea",
    daily: true,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Jesus' parable of the ten virgins, what did the foolish bridesmaids run short of?",
    choices: ["Wine", "Bread", "Oil for their lamps", "Water"],
    answer: 2,
    explanation: {
      textSays:
        "Matthew 25:8: “The foolish said to the wise, ‘Give us some of your oil, for our lamps are going out.’” The five wise ones had brought extra oil in jars (25:4).",
      world:
        "Household lamps in the Land of Israel were small clay bowls or closed clay lamps, filled with olive oil and lit with a wick of flax or linen. Excavations turn them up by the thousands, in houses and tombs alike.",
      theirEyes:
        "Waiting up late for a wedding procession meant watching your little clay lamp drink its oil, and wondering whether it would last.",
      tradition: {
        christian:
          "Christians have long read the parable as a call to stay ready for Christ's return, since no one knows the day or the hour (Matthew 25:13).",
      },
    },
    confidence: "settled",
    references: ["Matthew 25:1–13"],
    sources: [scripture, kingStager],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-077",
    era: "primeval",
    daily: true,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Noah's ark is measured in cubits. A cubit was based on the length of what?",
    choices: ["A man's foot", "The forearm, from elbow to fingertip", "A walking stick", "The width of a thumb"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 6:15 gives the ark as 300 cubits long, 50 wide and 30 high. Ezekiel 40:5 mentions a longer cubit, a cubit plus a handbreadth, showing that more than one standard existed.",
      world:
        "The Hebrew ammah, like the Egyptian and Mesopotamian cubits, was the length of the forearm, roughly 45 cm for the common cubit. The Siloam tunnel inscription says Hezekiah's tunnel was 1,200 cubits long; the tunnel measures about 533 m, which fits a cubit of about 44–45 cm.",
      theirEyes:
        "A builder needed no ruler in his pocket: he laid his forearm along the beam, elbow to fingertip, and counted.",
    },
    confidence: "settled",
    references: ["Genesis 6:15", "Ezekiel 40:5"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Siloam tunnel inscription, Jerusalem, c. 700 BCE (Istanbul Archaeology Museums)" },
      powell,
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-078",
    era: "exodus",
    daily: true,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Exodus 38: 603,550 men each gave half a shekel, totalling 100 talents and 1,775 shekels. How many shekels made one talent?",
    choices: ["60", "1,000", "3,000", "6,000"],
    answer: 2,
    explanation: {
      textSays:
        "Exodus 38:25–26 says the silver came to “one hundred talents” and 1,775 shekels, from “a beka a head, that is, half a shekel,” paid by 603,550 men. Half of 603,550 is 301,775 shekels, so 100 talents must equal 300,000 shekels: 3,000 each.",
      world:
        "A talent was the largest weight unit, roughly what a person could carry, probably about 30–35 kg. Silver was weighed out on scales, not counted as coins; coins were not used in the region until centuries later.",
      theirEyes:
        "Each man's half-shekel was a small lump of silver on the scale, but heaped together they made a pile weighing several tonnes.",
    },
    confidence: "settled",
    references: ["Exodus 38:25–26", "Exodus 30:13"],
    sources: [scripture, powell],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-079",
    era: "judges",
    daily: true,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After a day of gleaning, Ruth beat out “about an ephah of barley.” What is an ephah?",
    choices: ["A dry measure for grain", "A priest's apron", "A weight for silver", "A tool for threshing"],
    answer: 0,
    explanation: {
      textSays:
        "Ruth 2:17: “So she gleaned in the field until evening; and she beat out that which she had gleaned, and it was about an ephah of barley.” Exodus 16:36 says an omer is a tenth of an ephah.",
      world:
        "Ezekiel 45:11 makes the ephah (for dry goods) equal to the bath (for liquids). Its exact size is uncertain: modern estimates range from about 20 to about 40 litres. Either way, it was a big haul for one gleaner. Don't confuse it with the ephod, a priestly garment.",
      theirEyes:
        "Naomi must have stared when Ruth came home at dusk with a sack of barley big enough to feed them both for days.",
    },
    confidence: "settled",
    references: ["Ruth 2:17", "Exodus 16:36", "Ezekiel 45:11"],
    sources: [scripture, powell],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-080",
    era: "exodus",
    daily: true,
    category: "faith-practice",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Leviticus says the Day of Atonement is kept “from evening to evening.”",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Leviticus 23:32: “In the ninth day of the month at evening, from evening to evening, you shall keep your Sabbath.” Genesis 1 likewise ends each day with evening and then morning.",
      world:
        "Counting a day from sunset to sunset is why Jewish Sabbaths and festivals still begin at nightfall the evening before.",
      theirEyes:
        "When the sun dropped behind the hills, the new day had already begun: the fast started at dusk, not at dawn.",
      tradition: {
        jewish:
          "Josephus says a priest stood on a tower of the Temple and blew a trumpet at evening to announce the start of each Sabbath, and again the next evening at its end (Jewish War 4.582). A stone inscribed “to the place of trumpeting” was found below the Temple Mount's southwest corner.",
      },
    },
    confidence: "settled",
    references: ["Leviticus 23:32", "Genesis 1:5"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Jewish War 4.582 (4.9.12)" },
      { kind: "archaeology", citation: "“Place of Trumpeting” inscription, excavated by Benjamin Mazar, 1968 (Israel Museum)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-081",
    era: "roman-judea",
    daily: true,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Mark says Jesus came walking on the sea “about the fourth watch of the night.” Roughly when was that?",
    choices: ["Just after sunset", "Around midnight", "From about 3 a.m. until dawn", "In the late afternoon"],
    answer: 2,
    explanation: {
      textSays:
        "Mark 6:48: “about the fourth watch of the night he came to them, walking on the sea.” Elsewhere Mark lists four times when the master might come at night: evening, midnight, when the rooster crows, and morning (Mark 13:35), matching four night watches.",
      world:
        "Romans split the night, sunset to sunrise, into four watches of about three hours each, so the fourth ran from roughly 3 a.m. to dawn. Older Hebrew texts imply three night watches: Judges 7:19 speaks of “the middle watch.”",
      theirEyes:
        "The disciples had been rowing against the wind for most of the night, and the darkest, coldest hours before dawn were the hardest.",
    },
    confidence: "settled",
    references: ["Mark 6:48", "Mark 13:35", "Judges 7:19"],
    sources: [scripture, bdag("phylakē")],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-082",
    era: "roman-judea",
    daily: true,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Jesus' parable of the vineyard workers, the last men were hired at the “eleventh hour.” About what time was that?",
    choices: ["About 11 a.m.", "About 5 p.m.", "About 11 p.m.", "About 6 a.m."],
    answer: 1,
    explanation: {
      textSays:
        "Matthew 20:6: “About the eleventh hour he went out, and found others standing idle.” When evening came they were paid first, and the others complained that they had worked only one hour (20:8–12).",
      world:
        "Daylight hours were counted from sunrise, about 6 a.m., so the third hour was mid-morning, the sixth noon and the eleventh late afternoon. The “hours” were twelfths of daylight, so they stretched in summer and shrank in winter. The WEB even translates Peter's “sixth hour” prayer time as “about noon” (Acts 10:9).",
      theirEyes:
        "With one hour of light left, the last men hired that day expected a few coins at most, not a whole day's wage.",
    },
    confidence: "settled",
    references: ["Matthew 20:1–16", "Acts 10:9"],
    sources: [scripture, bdag("hōra")],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-083",
    era: "persian",
    daily: true,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Exodus calls the month of Passover “Abib.” What name do Nehemiah and Esther use for that first month?",
    choices: ["Adar", "Chislev", "Elul", "Nisan"],
    answer: 3,
    explanation: {
      textSays:
        "Exodus 13:4: “Today you go out in the month Abib.” Nehemiah 2:1 and Esther 3:7 instead date events to the month Nisan, which Esther calls the first month. Adar is the twelfth month (Esther 3:7), Elul the sixth (Nehemiah 6:15) and Chislev the ninth (Zechariah 7:1).",
      world:
        "Abib means roughly “fresh ears of grain,” the barley season. During and after the exile, Jews took over the Babylonian month names: Nisan comes from Babylonian Nisannu.",
      theirEyes:
        "A Jew in the Persian empire wrote dates with the same month names as the Babylonian and Persian clerks around him.",
    },
    confidence: "settled",
    references: ["Exodus 13:4", "Nehemiah 2:1", "Esther 3:7", "Nehemiah 6:15", "Zechariah 7:1"],
    sources: [
      scripture,
      vanderKam,
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-084",
    era: "united-monarchy",
    daily: true,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Solomon dedicated the Temple at the feast in the seventh month. What name does 1 Kings 8:2 give that month?",
    choices: ["Ziv", "Bul", "Ethanim", "Adar"],
    answer: 2,
    explanation: {
      textSays:
        "1 Kings 8:2: “All the men of Israel assembled themselves to king Solomon at the feast, in the month Ethanim, which is the seventh month.” Ziv is the second month (6:1) and Bul the eighth (6:38).",
      world:
        "These are older month names, found in the Bible only in 1 Kings. After the exile, Jews used Babylonian names; the seventh month became Tishri, from Babylonian Tashritu, though that name never appears in the Bible.",
      theirEyes:
        "The autumn feast drew crowds from every tribe, and that year they came to see the new Temple filled with the cloud.",
    },
    confidence: "settled",
    references: ["1 Kings 8:2", "1 Kings 6:1", "1 Kings 6:38"],
    sources: [
      scripture,
      vanderKam,
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-085",
    era: "judges",
    daily: true,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What do archaeologists call the typical Iron Age house found at Israelite highland sites?",
    choices: ["The four-room house", "The insula", "The megaron", "The atrium villa"],
    answer: 0,
    explanation: {
      textSays:
        "Roofs were flat and usable: Samuel talks with Saul on a housetop (1 Samuel 9:25–26), and Deuteronomy 22:8 requires a parapet around a new roof so no one falls off.",
      world:
        "The four-room house had three long rooms side by side, often separated by rows of pillars (the middle one perhaps an open courtyard), with a broad room across the back. Many had an upper storey for living, with animals and storage below. The plan appears around 1200 BCE and largely disappears after Judah's fall in 586 BCE.",
      theirEyes:
        "On a winter night the family slept upstairs, warmed a little by the animals stabled below.",
      debate:
        "Whether the house marks Israelite identity is debated: it is typical of Israelite sites, but similar houses occur elsewhere. Bunimovitz and Faust argue that its layout reflects Israelite society and values.",
    },
    confidence: "mainstream",
    references: ["1 Samuel 9:25–26", "Deuteronomy 22:8"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Yigal Shiloh, “The Casemate Wall, the Four-Room House, and Early Planning in the Israelite City,” BASOR 268 (1987): 3–15" },
      { kind: "scholarship", citation: "Shlomo Bunimovitz and Avraham Faust, “The Four Room House: Embodying Iron Age Israelite Society,” Near Eastern Archaeology 66 (2003): 22–31" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-086",
    era: "exodus",
    daily: true,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Numbers 15 tells Israelites to put fringes on their garments. What colour cord goes on each fringe?",
    choices: ["Scarlet", "Blue", "Gold", "Green"],
    answer: 1,
    explanation: {
      textSays:
        "Numbers 15:38 says to make fringes on the borders of garments and to “put on the fringe of each border a cord of blue,” so that seeing it they would remember the commandments (15:39).",
      world:
        "The Hebrew word is tekhelet, a costly blue-violet dye. The most prized blue-violet and purple dyes came from Mediterranean murex sea snails, a trade the Phoenician coast was famous for. In 2013 the Israel Antiquities Authority reported that fabrics about 2,000 years old from a cave at Wadi Murabba'at, near the Dead Sea, were dyed with murex dye, including a blue wool fragment that may show the kind of dye used for tekhelet.",
      theirEyes:
        "A thread of sea-snail blue cost real money, yet every Israelite was told to wear one.",
      tradition: {
        jewish:
          "The Septuagint renders tekhelet here as hyakinthinos, a violet-blue, and calls the fringes kraspeda. Matthew uses the same Greek word when a sick woman touches the “fringe” of Jesus' garment (Matthew 9:20; 14:36), and for the fringes some lengthened to be seen (Matthew 23:5).",
      },
      debate: "The exact shade of tekhelet, sky blue or blue-violet, is debated.",
    },
    confidence: "settled",
    references: ["Numbers 15:37–41", "Matthew 9:20", "Matthew 14:36", "Matthew 23:5"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Numbers 15:38" },
      { kind: "archaeology", citation: "Murex-dyed textiles from Wadi Murabba'at, analysed by Na'ama Sukenik, Israel Antiquities Authority (announced December 2013; reported by Bible History Daily, 2 January 2014)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-087",
    era: "judges",
    daily: true,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "At Jericho, what were the priests' trumpets made from, according to Joshua 6?",
    choices: ["Silver", "Rams' horns", "Bronze", "Reeds"],
    answer: 1,
    explanation: {
      textSays:
        "Joshua 6:4: “Seven priests shall bear seven trumpets of rams' horns before the ark.” The Hebrew word is shofar. Numbers 10:2 describes a different instrument: two hammered silver trumpets.",
      world:
        "A shofar is a hollowed animal horn. It plays only a few notes, so it signalled rather than played tunes: alarms, assemblies and festival days.",
      theirEyes:
        "The rough, wailing blast of a ram's horn carried across hills and could be heard by a whole army at once.",
      tradition: {
        jewish:
          "The Dead Sea Scrolls' War Scroll (1QM) keeps the two instruments distinct in its end-time battle: priests blow the trumpets, while Levites carry and blow rams' horns.",
      },
    },
    confidence: "settled",
    references: ["Joshua 6:4", "Numbers 10:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "War Scroll (1QM), Dead Sea Scrolls, columns 7–8" },
      kingStager,
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-088",
    era: "exodus",
    daily: true,
    category: "daily-life",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Deuteronomy forbids taking a family's millstone as security for a loan.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Deuteronomy 24:6: “No man shall take the mill or the upper millstone as a pledge; for he takes a life in pledge.” Exodus 11:5 pictures even the lowliest servant “behind the mill.”",
      world:
        "Flour was ground fresh at home, usually by women kneeling at a hand mill: a flat lower stone and a smaller upper stone rubbed back and forth. Without the upper stone, a family could not make bread. Rotary hand mills became common later; Jesus mentions two women grinding at the mill (Matthew 24:41).",
      theirEyes:
        "The scrape of stone on stone before dawn was the sound of every village: no grinding, no bread.",
    },
    confidence: "settled",
    references: ["Deuteronomy 24:6", "Exodus 11:5", "Matthew 24:41"],
    sources: [scripture, kingStager],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-089",
    era: "divided-kingdom",
    daily: true,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: on the Mesha Stele, the king of Moab orders every household in one town to dig its own cistern.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays: "2 Kings 3:4–5 names Mesha as the king of Moab who rebelled against Israel.",
      world:
        "Lines 24–25 of the stele say there was no cistern inside the town at Qarhoh, so Mesha told all the people to make themselves a cistern, each in his own house. Plastered, rock-cut cisterns caught winter rain and let hill towns survive the long dry summer.",
      theirEyes:
        "Every winter storm was a blessing: rain running off your roof into your own cistern meant water through August.",
    },
    confidence: "settled",
    references: ["2 Kings 3:4–5"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Mesha Stele (Moabite Stone), lines 24–25, 9th century BCE (Louvre, AO 5066)" },
      { kind: "primary", citation: "W. F. Albright, trans., “The Moabite Stone,” in J. B. Pritchard, ed., Ancient Near Eastern Texts Relating to the Old Testament (3rd ed., Princeton, 1969), 320–321" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-090",
    era: "divided-kingdom",
    daily: true,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In Judah's Iron Age bench tombs, what usually happened to older bones when a bench was needed again?",
    choices: [
      "They were burned to ash",
      "They were moved into a repository pit in the tomb",
      "They were carried out and scattered",
      "They were sealed into the tomb's walls",
    ],
    answer: 1,
    explanation: {
      textSays:
        "The Bible often says that someone was “gathered” to their people or ancestors at death (e.g., Judges 2:10).",
      world:
        "By the late 8th century BCE the rock-cut family tomb with benches around the walls had become the typical Judahite burial, and it lasted until 586 BCE. When space was needed, earlier remains and some of their grave goods were moved to a repository pit cut in the tomb. The silver amulets of Ketef Hinnom were found in such a repository, in Chamber 25.",
      theirEyes:
        "Laying a parent on the bench where grandparents had once lain made the family tomb a place where generations literally gathered.",
      debate:
        "Many scholars link expressions such as “gathered to his people” (Genesis 25:8) and “slept with his fathers” to family tombs like these; others treat them simply as idioms for death.",
    },
    confidence: "mainstream",
    references: ["Judges 2:10", "Genesis 25:8"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Elizabeth Bloch-Smith, “The Cult of the Dead in Judah: Interpreting the Material Remains,” JBL 111 (1992): 213–224" },
      { kind: "scholarship", citation: "Elizabeth Bloch-Smith, Judahite Burial Practices and Beliefs about the Dead (Sheffield, 1992)" },
      { kind: "archaeology", citation: "Gabriel Barkay, Ketef Hinnom excavations, 1979; “The Blessings of YHWH,” Biblical Archaeology Society Library" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "dly-091",
    era: "early-church",
    daily: true,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 2 John 12 the elder says he'd rather not write “with paper and ink.” What was that “paper” most likely made of?",
    choices: ["Clay", "Wood pulp", "Papyrus", "Thin sheets of lead"],
    answer: 2,
    explanation: {
      textSays:
        "2 John 12: “Having many things to write to you, I don't want to do so with paper and ink.” 2 Timothy 4:13 also asks for “the books, especially the parchments,” using a different word for animal-skin writing material.",
      world:
        "The Greek word chartēs means a sheet of papyrus, made from strips of the Egyptian papyrus reed pressed together. It was the everyday writing material of the Roman world; paper made from pulp reached the Mediterranean only many centuries later.",
      theirEyes:
        "A short letter fit on a single papyrus sheet, folded, tied and handed to a traveller heading the right way.",
    },
    confidence: "mainstream",
    references: ["2 John 12", "2 Timothy 4:13"],
    sources: [
      scripture,
      bdag("chartēs"),
      { kind: "scholarship", citation: "Harry Y. Gamble, Books and Readers in the Early Church (Yale, 1995)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
