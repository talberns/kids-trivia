import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const persian2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "per-026",
    era: "persian",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Ezra 7:6 introduces Ezra as a skilled what “in the law of Moses”?",
    choices: ["Prophet", "Builder", "Scribe", "Musician"],
    answer: 2,
    explanation: {
      textSays:
        "Ezra 7:6: “He was a skilled scribe in the law of Moses, which Yahweh, the God of Israel, had given.” Verses 1–5 trace his family back to “Aaron the chief priest,” and 7:10 says he “had set his heart to seek Yahweh’s law, and to do it, and to teach statutes and ordinances in Israel.”",
      world:
        "The Hebrew phrase (sofer mahir, rendered “a ready scribe” in older English Bibles such as the King James Version) also describes “the pen of a skillful writer” in Psalm 45:1 (45:2 in Hebrew Bibles). In the Persian empire, scribes were trained officials who drafted, copied and read out letters and laws.",
      theirEyes:
        "To the exiles in Babylon, Ezra was both a priest from Aaron's line and an expert who could read, copy and explain the old law scrolls.",
    },
    confidence: "settled",
    references: ["Ezra 7:1–10", "Psalm 45:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "H. G. M. Williamson, Ezra, Nehemiah (Word Biblical Commentary 16, 1985), on Ezra 7:6" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-027",
    era: "persian",
    level: 6,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Under threat of attack, Nehemiah's wall-builders worked with one hand. What did they hold in the other?",
    choices: ["A lamp", "A weapon", "A water jar", "A prayer scroll"],
    answer: 1,
    explanation: {
      textSays:
        "Nehemiah 4:17: “everyone with one of his hands did the work, and with the other held his weapon.” Builders wore swords at their sides, and a trumpeter stood by Nehemiah to call everyone to any point that was attacked (4:18–20). (In Hebrew Bibles this is Nehemiah 4:11–14.)",
      world:
        "Nehemiah also split his own men: half worked while half held spears, shields, bows and coats of mail (4:16). Workers from outside the city were told to sleep inside Jerusalem as a night guard (4:22).",
      theirEyes:
        "Hauling stones up a steep slope is hard enough; doing it with a sword banging at your hip, listening for a trumpet, was exhausting.",
    },
    confidence: "settled",
    references: ["Nehemiah 4:16–23"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-028",
    era: "persian",
    level: 6,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Tobiah the Ammonite mocked Nehemiah's wall: it would collapse if which animal climbed on it?",
    choices: ["A cat", "A goat", "A sparrow", "A fox"],
    answer: 3,
    explanation: {
      textSays:
        "Nehemiah 4:3: “What they are building, if a fox climbed up it, he would break down their stone wall.” Sanballat had just jeered in front of “the army of Samaria”: “What are these feeble Jews doing?” (4:2). In Hebrew Bibles these verses are 3:34–35.",
      world:
        "Nehemiah 2:10 calls him “Tobiah the Ammonite servant”; “servant” may be an official title, as for royal officials on seals. Tobiah had strong ties in Jerusalem: he was son-in-law to a Judean noble and exchanged many letters with the nobles of Judah (6:17–18).",
      theirEyes:
        "Builders working on a heap of burned stones heard the joke shouted from below and knew their neighbours were watching every course they laid.",
    },
    confidence: "settled",
    references: ["Nehemiah 4:1–3", "Nehemiah 2:10", "Nehemiah 6:17–18"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Joseph Blenkinsopp, Ezra–Nehemiah (Old Testament Library, Westminster, 1988), on Nehemiah 2:10 and 3:33–35" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-029",
    era: "persian",
    level: 6,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Nehemiah 13 says men of Tyre living in Jerusalem sold goods on the Sabbath. Which food is named?",
    choices: ["Fish", "Dates", "Honey", "Cheese"],
    answer: 0,
    explanation: {
      textSays:
        "Nehemiah 13:16: “Some men of Tyre also lived there, who brought in fish and all kinds of wares, and sold on the Sabbath to the children of Judah, and in Jerusalem.” Nehemiah had the gates shut as it grew dark before the Sabbath and posted guards; when merchants camped outside the wall, he threatened them until they stopped coming (13:19–21).",
      world:
        "Tyre was a great Phoenician port and trading city (see Ezekiel 27). Jerusalem even had a “fish gate” (Nehemiah 3:3; Zephaniah 1:10), probably where fish were brought in.",
      theirEyes:
        "For a Jerusalem family, the Tyrian fish-sellers at the gate made the Sabbath a tempting market day, and Nehemiah was determined to end it.",
    },
    confidence: "settled",
    references: ["Nehemiah 13:15–22", "Nehemiah 3:3", "Zephaniah 1:10", "Ezekiel 27:1–3"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-030",
    era: "persian",
    level: 6,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: according to Ezra 8, Ezra asked the Persian king for a band of soldiers and horsemen to guard his caravan.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Ezra 8:21–22: Ezra proclaimed a fast at the river Ahava, explaining, “I was ashamed to ask of the king a band of soldiers and horsemen to help us against the enemy on the way,” because he had told the king that God's hand protects those who seek him. So instead of asking, they fasted and prayed (8:23). They left on the twelfth day of the first month (8:31) and reached Jerusalem on the first day of the fifth month (7:9).",
      world:
        "The caravan carried 650 talents of silver, 100 talents of silver vessels and 100 talents of gold (8:26), so the risk from bandits was real. Nehemiah, by contrast, travelled with “captains of the army and horsemen” sent by the king (Nehemiah 2:9). Ahava's location is unknown; it was a waterway somewhere in Babylonia.",
      theirEyes:
        "Families camped by the water, fasting and praying, knew they faced more than three months on the road with treasure and no army.",
    },
    confidence: "settled",
    references: ["Ezra 8:15–31", "Ezra 7:9", "Nehemiah 2:9"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "per-031",
    era: "persian",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "On his secret night inspection of Jerusalem's walls, why did Nehemiah have to turn aside near the King's Pool?",
    choices: [
      "Guards from Samaria blocked the road",
      "There was no room for his animal to pass",
      "His torch went out in the wind",
      "The Spring Gate was locked",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Nehemiah 2:12–15: he rode out by night with a few men, by the valley gate toward “the jackal’s well,” to the dung gate, then “to the spring gate and to the king’s pool, but there was no place for the animal that was under me to pass.” He “went up in the night by the brook” and inspected the wall, then turned back and re-entered by the valley gate. He had told no one his plan (2:12, 2:16).",
      world:
        "The eastern slope above the Kidron valley was steep, and the collapsed walls and terraces left piles of rubble. Archaeologists find that Persian-period Jerusalem was small, centred on the old City of David ridge.",
      theirEyes:
        "Picking his way in the dark over tumbled stones, Nehemiah saw the city's ruin up close before saying a word to anyone.",
    },
    confidence: "settled",
    references: ["Nehemiah 2:11–16"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Oded Lipschits, “Persian Period Finds from Jerusalem: Facts and Interpretations,” Journal of Hebrew Scriptures 9 (2009)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-032",
    era: "persian",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Nehemiah 3, the high priest Eliashib and the priests rebuilt which gate, later named in John 5:2?",
    choices: ["The Fish Gate", "The Dung Gate", "The Sheep Gate", "The Valley Gate"],
    answer: 2,
    explanation: {
      textSays:
        "Nehemiah 3:1: “Eliashib the high priest rose up with his brothers the priests, and they built the sheep gate. They sanctified it, and set up its doors.” Others built the fish gate (3:3), the valley gate (3:13) and the dung gate (3:14). John 5:2 places the pool of Bethesda “by the sheep gate.”",
      world:
        "Nehemiah 3 lists about forty work teams going round the wall: priests, goldsmiths, perfumers, merchants, district rulers, and Shallum “he and his daughters” (3:12). The Sheep Gate stood on the north side, near the Temple, and was probably named for animals brought in for sacrifice.",
      theirEyes:
        "Every family knew which stretch of wall was theirs, and many built the section right in front of their own house (3:10, 3:28).",
    },
    confidence: "settled",
    references: ["Nehemiah 3:1–32", "John 5:2"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "H. G. M. Williamson, Ezra, Nehemiah (Word Biblical Commentary 16, 1985), on Nehemiah 3" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-033",
    era: "persian",
    level: 7,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Nehemiah 5, why were Judean families mortgaging their fields and vineyards?",
    choices: [
      "To buy grain in a famine and pay the king's tribute",
      "To pay for the wall's stone and timber",
      "To buy back the Temple vessels from Babylon",
      "To pay ransom to Sanballat",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Nehemiah 5:3–5: “We are mortgaging our fields, our vineyards, and our houses. Let us get grain, because of the famine,” and “We have borrowed money for the king’s tribute.” Some had already sold children into bondage. Nehemiah made the nobles return the land and stop charging interest, and he shook out his lap as a sign of the curse on anyone who broke the promise (5:11–13).",
      world:
        "The Torah forbade lending at interest to a fellow Israelite (Leviticus 25:36–37; Deuteronomy 23:19). Nehemiah adds that in twelve years as governor he never took the governor's food allowance (5:14–18).",
      theirEyes:
        "A farmer who lost his harvest still owed Persian tax, and the only lenders were richer neighbours who took his vineyard as security.",
    },
    confidence: "settled",
    references: ["Nehemiah 5:1–18", "Leviticus 25:36–37", "Deuteronomy 23:19"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-034",
    era: "persian",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Nehemiah 6:15 says the wall was finished in how many days?",
    choices: ["40 days", "70 days", "52 days", "120 days"],
    answer: 2,
    explanation: {
      textSays:
        "Nehemiah 6:15: “So the wall was finished in the twenty-fifth day of Elul, in fifty-two days.” Even Judah's enemies “perceived that this work was done by our God” (6:16).",
      world:
        "Elul is the sixth month, roughly August–September. Nehemiah 3 lists dozens of teams working on different stretches at the same time, which helps explain the speed.",
      theirEyes:
        "In under two months of summer heat, neighbours watched gaps that had stood open for generations close up.",
      tradition: {
        jewish:
          "Josephus gives a very different figure: he says the walls took two years and four months to build (Antiquities 11.5.8).",
      },
      debate:
        "Scholars debate how much work 52 days allowed; many think it was mainly patching and blocking breaches, with gates and doors finished afterwards (compare 6:1, 7:1).",
    },
    confidence: "settled",
    references: ["Nehemiah 6:15–16", "Nehemiah 6:1", "Nehemiah 7:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.5.8 (Whiston numbering)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-035",
    era: "persian",
    level: 7,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Ezra 10, the men of Judah sat in the open square before the Temple, trembling. Besides fear, what made them tremble?",
    choices: ["An earthquake", "A swarm of locusts", "The midday heat", "Heavy rain"],
    answer: 3,
    explanation: {
      textSays:
        "Ezra 10:9: it was the twentieth day of the ninth month, and “all the people sat in the wide place in front of God’s house, trembling because of this matter, and because of the great rain.” They asked for officials to handle the cases town by town: “it is a time of much rain, and we are not able to stand outside” (10:13).",
      world:
        "The ninth month (Chislev) falls around November–December, the start of the rainy season in Judah. The cases took from the first day of the tenth month to the first day of the first month (10:16–17).",
      theirEyes:
        "Soaked through on the paving stones, the crowd waited to hear what would happen to their families.",
    },
    confidence: "settled",
    references: ["Ezra 10:7–17"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "per-036",
    era: "persian",
    level: 8,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Nehemiah 8:17 says Israel had not lived in booths this way since whose days?",
    choices: ["Joshua son of Nun", "King Solomon", "King Hezekiah", "Samuel"],
    answer: 0,
    explanation: {
      textSays:
        "Nehemiah 8:17: the returned exiles “made temporary shelters and lived in the temporary shelters, for since the days of Joshua the son of Nun to that day the children of Israel had not done so. There was very great gladness.” They used olive, myrtle and palm branches and built on roofs, in courtyards and in the squares by the Water Gate and Ephraim's Gate (8:15–16).",
      world:
        "Leviticus 23:42–43 commands all native-born Israelites to live in booths for seven days to remember the wilderness journey.",
      theirEyes:
        "For a week, Jerusalem's rooftops and squares were covered with green huts, and the whole city camped out together.",
      debate:
        "Ezra 3:4 already reports a feast of booths, and 1 Kings 8:2 places Solomon's Temple dedication at the festival, so many interpreters take 8:17 to mean the whole people living in booths in this way, not the first feast since Joshua.",
    },
    confidence: "settled",
    references: ["Nehemiah 8:13–18", "Leviticus 23:42–43", "Ezra 3:4", "1 Kings 8:2"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-037",
    era: "persian",
    level: 8,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the covenant of Nehemiah 10, how much did the people pledge each year for the Temple service?",
    choices: ["A third of a shekel", "A tenth of a shekel", "Two shekels", "One gold daric"],
    answer: 0,
    explanation: {
      textSays:
        "Nehemiah 10:32: “we made ordinances for ourselves, to charge ourselves yearly with the third part of a shekel for the service of the house of our God,” which paid for the show bread, the daily offerings and the feasts (10:33). The sealed covenant also promised not to buy on the Sabbath, to let the land rest in the seventh year, to supply wood for the altar by lot, and to bring firstfruits and tithes (10:31–39). (Hebrew Bibles number this chapter one verse higher, so 10:32 is 10:33 there.)",
      world:
        "Exodus 30:13 had asked for half a shekel from each man counted in a census.",
      theirEyes:
        "Every family head signed up for a small yearly payment so that the Temple's fires and bread would never run out.",
      tradition: {
        jewish:
          "By Jesus' day the yearly Temple tax was a half-shekel, which Josephus and Philo describe Jews everywhere sending to Jerusalem (compare Matthew 17:24).",
      },
    },
    confidence: "settled",
    references: ["Nehemiah 10:31–39", "Exodus 30:13", "Matthew 17:24"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 18.9.1; Philo, On the Special Laws 1.76–78" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-038",
    era: "persian",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: while Nehemiah was away at the king's court, a priest gave Tobiah the Ammonite a storeroom in the Temple courts.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Nehemiah 13:4–9: “Eliashib the priest, who was appointed over the rooms of the house of our God, being allied to Tobiah,” had prepared him “a great room” once used for grain offerings, frankincense and tithes. Nehemiah had gone back to the king in Artaxerxes' thirty-second year. On his return, “I threw all Tobiah’s household stuff out of the room,” had the rooms cleansed and the offerings brought back.",
      world:
        "Tobiah was linked by marriage to leading Judean families (6:18), so his friends in Jerusalem were well placed to help him.",
      theirEyes:
        "Temple servants watched a furious governor carry an Ammonite official's furniture out into the courtyard.",
      debate:
        "Scholars debate whether this Eliashib is the high priest of Nehemiah 3:1 or another priest of the same name.",
    },
    confidence: "settled",
    references: ["Nehemiah 13:4–9", "Nehemiah 6:18", "Nehemiah 3:1"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-039",
    era: "persian",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Nehemiah accepted Sanballat and Geshem's invitation to meet them in the plain of Ono.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Nehemiah 6:2–4: Sanballat and Geshem said, “Let’s meet together in the villages in the plain of Ono,” but, Nehemiah says, “they intended to harm me.” Nehemiah replied, “I am doing a great work, so that I can’t come down,” and gave the same answer four times. The fifth time Sanballat sent an open letter claiming Nehemiah wanted to be king (6:5–7).",
      world:
        "Ono lay near Lod (Lydda) in the coastal plain, well away from Jerusalem; Nehemiah 11:35 lists “Lod, and Ono” among places settled by Benjamites. An open, unsealed letter meant the accusation of rebellion could be read by anyone who carried it.",
      theirEyes:
        "To Nehemiah, a friendly meeting far from his workers looked exactly like a trap.",
    },
    confidence: "settled",
    references: ["Nehemiah 6:1–9", "Nehemiah 11:35"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-040",
    era: "persian",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In Ezra 10, who first proposed a covenant to send away the foreign wives and their children?",
    choices: ["Nehemiah", "Sanballat", "Eliashib the high priest", "Shecaniah son of Jehiel"],
    answer: 3,
    explanation: {
      textSays:
        "Leaders told Ezra that people, priests and Levites had married women of “the peoples of the lands” (Ezra 9:1–2). Shecaniah son of Jehiel then proposed, “let’s make a covenant with our God to put away all the wives and those who are born of them” (10:3). Only a few men stood against it (10:15).",
      world:
        "Deuteronomy 7:3 forbade marriage with the peoples of Canaan. In a small community under Persian rule, marriage shaped who belonged and who inherited land.",
      theirEyes:
        "For many families the question was painfully personal, and they waited to hear what the assembly would decide.",
      debate:
        "Scholars debate who these wives were and whether the measure was fully carried out. Modern readers differ: some stress protecting a fragile identity, others the harm to women and children.",
    },
    confidence: "settled",
    references: ["Ezra 9:1–2", "Ezra 10:1–5", "Ezra 10:15", "Deuteronomy 7:3"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Joseph Blenkinsopp, Ezra–Nehemiah (Old Testament Library, Westminster, 1988), on Ezra 9–10" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "per-041",
    era: "persian",
    level: 9,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: warned of a plot to kill him, Nehemiah agreed to hide inside the Temple building.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Nehemiah 6:10–13: Shemaiah son of Delaiah urged, “let’s shut the doors of the temple; for they will come to kill you.” Nehemiah answered, “Should a man like me flee? Who is there that, being such as I, would go into the temple to save his life? I will not go in.” He concluded that Tobiah and Sanballat had hired Shemaiah to make him “afraid, do so, and sin.”",
      world:
        "Nehemiah was not a priest. Numbers 18:7 reserves service inside the sanctuary for Aaron's descendants: “The stranger who comes near shall be put to death.” Commentators read his refusal in that light: hiding there would have looked like panic and, for a layman, would have been the “sin” his enemies wanted (6:13).",
      theirEyes:
        "If the governor had been seen bolting himself into the sanctuary, his enemies could have shamed him as both a coward and a lawbreaker.",
    },
    confidence: "settled",
    references: ["Nehemiah 6:10–14", "Numbers 18:7"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-042",
    era: "persian",
    level: 9,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A silver bowl from Tell el-Maskhuta in Egypt names “Qaynu son of Gashmu.” What is Qaynu called?",
    choices: ["Governor of Samaria", "King of Moab", "King of Kedar (Qedar)", "Satrap of Egypt"],
    answer: 2,
    explanation: {
      textSays:
        "Nehemiah's third opponent was “Geshem the Arabian” (Nehemiah 2:19; 6:1), also spelled “Gashmu” (6:6). Isaiah 21:16–17 speaks of the glory and archers of Kedar, a powerful Arabian people.",
      world:
        "Silver bowls from a shrine at Tell el-Maskhuta in the eastern Nile Delta carry Aramaic dedications to the goddess han-Ilat. One reads that Qaynu son of Gashmu, king of Qedar, brought it as an offering. The bowls are usually dated to the late fifth century BCE (around 400 BCE); the inscribed group published by Rabinowitz is in the Brooklyn Museum.",
      theirEyes:
        "To Judeans, Geshem was no village chief: his Arabs ruled the desert routes that ran from Arabia toward Egypt and the south of Judah.",
      debate:
        "Most scholars identify this Gashmu with Nehemiah's Geshem, making his son Qaynu king a generation later. The match rests on the name, the date and the Arab setting, so a few remain cautious.",
    },
    confidence: "mainstream",
    references: ["Nehemiah 2:19", "Nehemiah 6:1–6", "Isaiah 21:16–17"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Isaac Rabinowitz, “Aramaic Inscriptions of the Fifth Century B.C.E. from a North-Arab Shrine in Egypt,” Journal of Near Eastern Studies 15 (1956)" },
      { kind: "scholarship", citation: "W. J. Dumbrell, “The Tell el-Maskhuta Bowls and the ‘Kingdom’ of Qedar in the Persian Period,” Bulletin of the American Schools of Oriental Research 203 (1971)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-043",
    era: "persian",
    level: 9,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Like Ezra, the Egyptian priest Udjahorresnet was sent on a mission by a Persian king. What did Darius I send him back to Egypt to restore?",
    choices: [
      "The pyramids at Giza",
      "The walls of Memphis",
      "The library of Alexandria",
      "The “House of Life,” a temple school of scribes",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Artaxerxes' letter sends Ezra “according to the law of your God which is in your hand,” to appoint magistrates and judges and to teach those who did not know the law (Ezra 7:14, 7:25–26). It also exempts Temple staff from tribute, custom and toll (7:24).",
      world:
        "The inscription on Udjahorresnet's statue (Vatican Museums) says Darius I sent him from Elam back to Egypt to restore the House of Life, where scribes and learned priests were trained. Persian kings won local support by backing local temples and traditions. The library of Alexandria was founded more than two centuries later.",
      theirEyes:
        "For a learned priest at the Persian court, a royal commission home to restore his people's sacred learning was the highest honour.",
      debate:
        "Scholars use the parallel to argue that Ezra's commission fits real Persian policy, though how far Persia authorised or enforced local laws is debated.",
    },
    confidence: "settled",
    references: ["Ezra 7:14", "Ezra 7:24–26"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Naophorous statue of Udjahorresnet, Museo Gregoriano Egizio, Vatican Museums" },
      { kind: "primary", citation: "Miriam Lichtheim, Ancient Egyptian Literature, vol. 3: The Late Period (University of California Press, 1980), “The Statue Inscription of Udjahorresne”" },
      { kind: "scholarship", citation: "Joseph Blenkinsopp, “The Mission of Udjahorresnet and Those of Ezra and Nehemiah,” Journal of Biblical Literature 106 (1987)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-044",
    era: "persian",
    level: 9,
    category: "world",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Ezra arrived in “the seventh year of Artaxerxes.” Why do some scholars date this to 398 BCE rather than 458 BCE?",
    choices: [
      "Ezra 7 names Darius, not Artaxerxes",
      "Coins bearing Ezra's name are dated 398",
      "They think the king was Artaxerxes II, so Ezra came after Nehemiah",
      "Josephus dates Ezra's journey to 398 BCE",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Ezra 7:7–8 dates the journey to “the seventh year of Artaxerxes the king” without saying which Artaxerxes. Nehemiah came in the twentieth year of Artaxerxes (Nehemiah 2:1). Nehemiah 8:9 and 12:26 place the two men together.",
      world:
        "The seventh year of Artaxerxes I is 458 BCE, which puts Ezra first; under Artaxerxes II it is 398, long after Nehemiah's mission of 445. A key argument for the later date: Ezra visits the room of “Jehohanan the son of Eliashib” (Ezra 10:6), while Nehemiah 12:22–23 lists a Johanan in a later generation than Eliashib, the high priest of Nehemiah's day; a Johanan is high priest in an Elephantine letter of about 407 BCE. Defenders of 458 reply that the name was common and that Nehemiah 8 and 12:26 place the two men together.",
      theirEyes:
        "A Jerusalemite of the time would simply remember both men at work in the city; only later historians had to decide who came first.",
      debate:
        "Albin van Hoonacker argued for Nehemiah first in 1890. Many scholars accept the biblical order and 458; others prefer 398; some emend the text to read 428. There is no consensus.",
    },
    confidence: "debated",
    references: ["Ezra 7:7–8", "Ezra 10:6", "Nehemiah 2:1", "Nehemiah 8:9", "Nehemiah 12:22–26"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "H. G. M. Williamson, Ezra, Nehemiah (Word Biblical Commentary 16, 1985), introduction" },
      { kind: "scholarship", citation: "Joseph Blenkinsopp, Ezra–Nehemiah (Old Testament Library, Westminster, 1988), introduction" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-045",
    era: "persian",
    level: 9,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Nehemiah complains that some children could not speak “the Jews’ language” but spoke half in the speech of which city?",
    choices: ["Ashdod", "Babylon", "Susa", "Tyre"],
    answer: 0,
    explanation: {
      textSays:
        "Nehemiah 13:23–24: Jews had married women of Ashdod, Ammon and Moab, “and their children spoke half in the speech of Ashdod, and could not speak in the Jews’ language.” Nehemiah then made them swear not to intermarry, pointing to Solomon (13:25–26).",
      world:
        "The phrase “the Jews’ language” means Judean Hebrew; officials use the same phrase in 2 Kings 18:26 when they ask the Assyrian envoy to speak Aramaic instead. Ashdod, an old Philistine city on the coast, was a neighbouring district under Persia (compare “the Ashdodites” in Nehemiah 4:7).",
      theirEyes:
        "To Nehemiah, children who could not follow Hebrew could not follow the reading of the law, so the future of the community was at stake.",
      debate:
        "What “the speech of Ashdod” was in the 400s BCE (a local Aramaic dialect or a surviving coastal language) is unknown.",
    },
    confidence: "settled",
    references: ["Nehemiah 13:23–27", "2 Kings 18:26", "Nehemiah 4:7"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "per-046",
    era: "persian",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Ben Sira's “Praise of the Fathers” honours Nehemiah but never mentions Ezra.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Sirach 49:11–13 praises Zerubbabel and Joshua son of Josedek, then: “Also of Nehemiah the memory is great. He raised up for us fallen walls, set up the gates and bars, and rebuilt our houses.” Ezra does not appear anywhere in the list (Sirach 44–50).",
      world:
        "Ben Sira wrote in Jerusalem around 190–180 BCE. His heroes are often builders and priests, and Nehemiah is remembered for the walls.",
      theirEyes:
        "A Jerusalem student of Ben Sira's day walked past the walls and gates every day; Nehemiah's memory was literally built into the city.",
      debate:
        "Why Ezra is missing is unexplained. Suggestions include a focus on builders, a different view of the priesthood, or simply that Ezra's fame grew later.",
    },
    confidence: "settled",
    references: ["Sirach 49:11–13", "Sirach 44:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Patrick W. Skehan and Alexander A. Di Lella, The Wisdom of Ben Sira (Anchor Bible 39, 1987), on Sirach 49" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-047",
    era: "persian",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the Greek book 1 Esdras, what title is Ezra (“Esdras”) given when he reads the law?",
    choices: ["King of Judah", "Chief priest", "Governor beyond the River", "Prophet of the Most High"],
    answer: 1,
    explanation: {
      textSays:
        "1 Esdras 9:40: “Esdras the chief priest brought the law to the whole multitude.” He is also called “the priest and reader of the law” (9:42). In the parallel Nehemiah 8:9, the leaders are “Nehemiah, who was the governor, Ezra the priest and scribe”; 1 Esdras 9:49 names “Attharates” there instead.",
      world:
        "1 Esdras retells material from 2 Chronicles, Ezra and Nehemiah 8, but leaves out Nehemiah's memoir. It survives in Greek and is canonical in Eastern Orthodox churches.",
      theirEyes:
        "For Greek-speaking Jews reading this version, Ezra stood alone at the climax as the great priest who gave the law back to the people.",
      tradition: {
        jewish:
          "Josephus follows 1 Esdras closely in telling the story of Ezra (Antiquities 11.5.1–5).",
      },
    },
    confidence: "settled",
    references: ["1 Esdras 9:37–55", "Nehemiah 8:9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.5.1–5" },
      { kind: "scholarship", citation: "Lester L. Grabbe, Ezra–Nehemiah (Old Testament Readings, Routledge, 1998)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-048",
    era: "persian",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus retells the stories of Ezra and Nehemiah. Under which Persian king does he set them?",
    choices: ["Cyrus", "Cambyses", "Darius III", "Xerxes"],
    answer: 3,
    explanation: {
      textSays:
        "Ezra 7:1 and Nehemiah 2:1 both name “Artaxerxes” as the king.",
      world:
        "Xerxes I ruled 486–465 BCE, just before Artaxerxes I. Josephus wrote in Rome in the 90s CE, more than five centuries after the events.",
      theirEyes:
        "Josephus' Roman readers met Ezra and Nehemiah as loyal servants of a Persian court they knew from Greek histories.",
      tradition: {
        jewish:
          "Josephus says Xerxes, son of Darius, sent Ezra, and that Nehemiah was cupbearer to Xerxes and came in his twenty-fifth year. He reserves Artaxerxes for the Esther story (Antiquities 11.5.1–8; 11.6.1).",
      },
      debate:
        "Historians generally follow the biblical naming of Artaxerxes over Josephus here; why Josephus changed it is unclear.",
    },
    confidence: "settled",
    references: ["Ezra 7:1", "Nehemiah 2:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 11.5.1–8; 11.6.1 (Whiston numbering)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-049",
    era: "persian",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A letter at the start of 2 Maccabees credits Nehemiah with founding what?",
    choices: [
      "The first synagogue in Babylon",
      "The Sanhedrin",
      "A library of books about kings, prophets and David",
      "A school for Temple singers",
    ],
    answer: 2,
    explanation: {
      textSays:
        "2 Maccabees 2:13: Nehemiah, “founding a library, gathered together the books about the kings and prophets, and the writings of David, and letters of kings about sacred gifts.” Judas Maccabeus later gathered books scattered by the war (2:14).",
      world:
        "Two letters open 2 Maccabees, both from Jerusalem to the Jews in Egypt, urging them to keep the festival of the Temple's purification (Hanukkah). The first is dated by most scholars to 124 BCE (the 188th Seleucid year, 1:9); the second (1:10–2:18), which contains this passage, claims to be earlier, but its date and authenticity are debated.",
      theirEyes:
        "Jews of the Maccabean age saw Nehemiah as a model: he rebuilt Jerusalem and gathered its sacred writings, as Judas did after the war (2:14).",
      tradition: {
        jewish:
          "The same letter has Nehemiah rekindle the altar fire from a thick liquid hidden in a dry well, which he named “Nephthar” (2 Maccabees 1:19–36), and even says he built the Temple and the altar (1:18).",
      },
    },
    confidence: "settled",
    references: ["2 Maccabees 2:13–14", "2 Maccabees 1:18–36"],
    sources: [
      scripture,
      { kind: "primary", citation: "2 Maccabees 1:1–2:18" },
      { kind: "scholarship", citation: "Robert Doran, 2 Maccabees (Hermeneia, Fortress, 2012), on 2 Maccabees 2:13" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "per-050",
    era: "persian",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 2 Esdras (4 Ezra) 14, Ezra dictates the burned scriptures anew. How many books are written in forty days?",
    choices: ["Twelve", "Thirty-nine", "Seventy-two", "Ninety-four"],
    answer: 3,
    explanation: {
      textSays:
        "2 Esdras 14:21–22: Ezra says, “your law has been burned,” and asks to write it again. Five scribes write as he dictates: “So in forty days, ninety-four books were written” (14:44). He is told to publish the first books openly but keep “the last seventy” for the wise (14:45–46).",
      world:
        "This apocalypse opens “In the thirtieth year after the ruin of the city” (2 Esdras 3:1), meaning Babylon's destruction of Jerusalem in 586 BCE. Scholars usually date the book to about 100 CE, thirty years after Rome destroyed the Second Temple, and read the setting as a mirror of that loss. Subtracting seventy from ninety-four leaves twenty-four, the traditional count of the books of the Hebrew Bible. (Some Latin manuscripts give a different number, which is why the King James Version reads “two hundred and four”; most scholars follow 94.)",
      theirEyes:
        "For Jews who had just lost their Temple, the picture of Ezra restoring the scriptures after an earlier disaster promised that the Torah would survive this one too.",
      tradition: {
        christian:
          "2 Esdras is in the Latin Vulgate's appendix and in the Apocrypha of many English Bibles; chapters 3–14 are the Jewish work known to scholars as 4 Ezra.",
      },
    },
    confidence: "settled",
    references: ["2 Esdras 14:21–26", "2 Esdras 14:42–48", "2 Esdras 3:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Michael E. Stone, Fourth Ezra (Hermeneia, Fortress, 1990), on 4 Ezra 14" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
