import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const exile2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "exi-026",
    era: "exile",
    level: 6,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In his Temple sermon, Jeremiah asks whether God's house has become a “den of” what?",
    choices: ["Lions", "Robbers", "Serpents", "Foxes"],
    answer: 1,
    explanation: {
      textSays:
        "Standing in the Temple gate, Jeremiah warns: “Don't trust in lying words, saying, ‘Yahweh's temple, Yahweh's temple, Yahweh's temple, are these’” (Jeremiah 7:4). Then: “Has this house, which is called by my name, become a den of robbers in your eyes?” (7:11). He points to the ruined sanctuary at Shiloh as a warning (7:12–14).",
      world:
        "Jeremiah 26 tells of the same sermon “in the beginning of the reign of Jehoiakim” (26:1), around 609/608 BCE. The priests and prophets seized him, saying, “You shall surely die!” (26:8).",
      theirEyes:
        "Worshippers streaming through the gate heard a prophet tell them that the Temple building itself would not keep them safe.",
      tradition: {
        christian:
          "In the Gospels Jesus combines Isaiah 56:7 with this verse when he clears the Temple: “you have made it a den of robbers!” (Matthew 21:13; also Mark 11:17).",
      },
    },
    confidence: "settled",
    references: ["Jeremiah 7:1–14", "Jeremiah 26:1–9", "Matthew 21:13", "Mark 11:17"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-027",
    era: "exile",
    level: 6,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When the prophet Hananiah broke the wooden yoke-bar off Jeremiah's neck, what did God say would replace it?",
    choices: ["Bars of gold", "A linen sash", "Bars of iron", "Nothing; the yoke was gone for good"],
    answer: 2,
    explanation: {
      textSays:
        "Jeremiah was told, “Make bonds and bars, and put them on your neck” (Jeremiah 27:2), as a sign that the nations must serve Babylon. Hananiah broke the bar and announced that God would break Nebuchadnezzar's yoke “within two full years” (28:10–11). Jeremiah's answer: “You have broken the bars of wood, but you have made in their place bars of iron” (28:13).",
      world:
        "A yoke was the wooden crossbar that harnessed oxen for ploughing. Jeremiah 28:1 dates the clash to Zedekiah's fourth year (about 594/593 BCE), when Hananiah also promised that King Jeconiah, the exiles and the Temple vessels would soon return (28:3–4).",
      theirEyes:
        "Priests and worshippers in the Temple court watched one prophet snap another's yoke: a public duel over what God was saying.",
    },
    confidence: "settled",
    references: ["Jeremiah 27:2", "Jeremiah 28:1–14"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-028",
    era: "exile",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "Who got King Zedekiah's permission to pull Jeremiah out of the muddy pit he had been thrown into?",
    choices: ["Baruch the scribe", "Gedaliah the governor", "Hananiah the prophet", "Ebed-melech the Ethiopian"],
    answer: 3,
    explanation: {
      textSays:
        "Jeremiah was let down with cords into a pit where “there was no water, but mire; and Jeremiah sank in the mire” (Jeremiah 38:6). “Ebedmelech the Ethiopian, a eunuch, who was in the king's house” (38:7) took thirty men and lowered “rags and worn-out garments” to pad the ropes under Jeremiah's armpits (38:10–12). Later God promises him: “You won't fall by the sword” (39:18).",
      world:
        "The Hebrew word bor means a cistern or pit; the WEB translates it “dungeon.” “Ethiopian” renders Hebrew Kushi, a man from Kush, the Nile kingdom south of Egypt in what is now Sudan, not modern Ethiopia. Saris (“eunuch”) can also mean a royal official.",
      theirEyes:
        "In a starving city, a foreign palace servant risked the anger of powerful princes to save a prophet many called a traitor.",
    },
    confidence: "settled",
    references: ["Jeremiah 38:6–13", "Jeremiah 39:15–18"],
    sources: [scripture, { kind: "reference", citation: "“Kush,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-029",
    era: "exile",
    level: 6,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The Rechabites refused the wine Jeremiah set before them in the Temple. Whose command were they obeying?",
    choices: ["Jonadab son of Rechab, their ancestor", "Moses, in the Nazirite law", "King Josiah", "The prophet Elijah"],
    answer: 0,
    explanation: {
      textSays:
        "Jeremiah 35:6–7: “We will drink no wine; for Jonadab the son of Rechab, our father, commanded us… You shall not build a house, sow seed, plant a vineyard, or have any; but all your days you shall dwell in tents.” They had come into Jerusalem only “for fear of the army of the Chaldeans” (35:11). God holds up their loyalty as a rebuke to Judah (35:14–16).",
      world:
        "Jonadab (Jehonadab) son of Rechab appears in 2 Kings 10:15 riding in Jehu's chariot, well over two centuries before Jeremiah.",
      theirEyes:
        "A clan of tent-dwellers, driven into the city by war, sat in a Temple room before bowls of wine and politely said no.",
      tradition: {
        christian:
          "Hegesippus, quoted by Eusebius (Church History 2.23.17), says that when James the brother of Jesus was being stoned in Jerusalem, a priest “of the sons of Rechab,” the Rechabites mentioned by Jeremiah, cried out to stop it.",
      },
    },
    confidence: "settled",
    references: ["Jeremiah 35:1–19", "2 Kings 10:15"],
    sources: [scripture, { kind: "primary", citation: "Eusebius, Church History 2.23.17, quoting Hegesippus" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-030",
    era: "exile",
    level: 6,
    category: "neighbours",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Obadiah, a prophecy against Edom, has only 21 verses, making it the shortest prophetic book in the Hebrew Bible / Old Testament.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Obadiah has just 21 verses, the shortest of the prophetic books (in Jewish Bibles it is one of the Twelve, counted together as a single book). It opens: “This is what the Lord Yahweh says about Edom” (Obadiah 1:1), and accuses Edom of joining in on Jerusalem's worst day: “don't rejoice over the children of Judah in the day of their destruction” (1:12).",
      world:
        "Edom lay south-east of the Dead Sea. Israel's stories make Edom a “brother” nation, descended from Esau (Obadiah 1:10 speaks of “your brother Jacob”), which made its betrayal feel worse. Psalm 137:7 also remembers Edomites who cried, “Raze it! Raze it even to its foundation!”",
      theirEyes:
        "Survivors who fled Jerusalem's ruins remembered neighbours who blocked the roads instead of sheltering them.",
      debate:
        "Most scholars date Obadiah soon after 586 BCE, because verses 11–14 seem to describe Jerusalem's fall; a minority link it to earlier conflicts, such as Edom's revolt against Judah in 2 Kings 8:20–22.",
    },
    confidence: "settled",
    references: ["Obadiah 1:1", "Obadiah 1:10–14", "Psalm 137:7", "2 Kings 8:20–22"],
    sources: [scripture, { kind: "reference", citation: "“Obadiah,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "exi-031",
    era: "exile",
    level: 7,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "During the siege, Jeremiah bought his cousin's field at Anathoth. Where were the deeds to be stored so they would last?",
    choices: ["In the Temple treasury", "In the king's palace archive", "In an earthen (clay) jar", "Buried under the field itself"],
    answer: 2,
    explanation: {
      textSays:
        "Jeremiah paid Hanamel “seventeen shekels of silver,” signed and sealed the deed and called witnesses (Jeremiah 32:9–10). He was told: “Take these deeds, this deed of the purchase which is sealed, and this deed which is open, and put them in an earthen vessel, that they may last many days” (32:14). The message: “Houses and fields and vineyards will yet again be bought in this land” (32:15).",
      world:
        "Anathoth, in Benjamin, was Jeremiah's home town (1:1). A sealed copy plus an open copy is the ancient “double document”; examples survive in the Babatha archive from Naḥal Ḥever (early 2nd century CE). Clay jars also protected some Dead Sea Scrolls in Qumran Cave 1.",
      theirEyes:
        "With Babylon's army camped outside, buying land looked like madness, and that was the point: a bet on the future.",
    },
    confidence: "settled",
    references: ["Jeremiah 32:6–15", "Jeremiah 1:1"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "N. Lewis (ed.), The Documents from the Bar Kokhba Period in the Cave of Letters: Greek Papyri (Israel Exploration Society, 1989)" },
      { kind: "reference", citation: "“Dead Sea Scrolls,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-032",
    era: "exile",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "King Zedekiah fled Jerusalem by night when the walls were breached. Where did the Babylonian army overtake him?",
    choices: ["At the border of Egypt", "In the plains of Jericho", "At Mizpah", "On the road to Damascus"],
    answer: 1,
    explanation: {
      textSays:
        "Zedekiah and his soldiers left “by the way of the king's garden, through the gate between the two walls,” heading toward the Arabah (Jeremiah 39:4). “The army of the Chaldeans pursued them, and overtook Zedekiah in the plains of Jericho” (39:5). At Riblah his sons were killed before his eyes; then his eyes were put out and he was taken to Babylon in fetters (39:6–7), where he stayed in prison “until the day of his death” (52:11).",
      world:
        "Riblah, “in the land of Hamath,” lay on the Orontes River in Syria and served as a royal headquarters; Pharaoh Necoh had imprisoned King Jehoahaz there in 609 BCE (2 Kings 23:33).",
      theirEyes:
        "The king's escape route ran east, down toward the Jordan valley, but his army scattered and he was caught on the open plain.",
    },
    confidence: "settled",
    references: ["Jeremiah 39:4–7", "Jeremiah 52:11", "2 Kings 25:4–7", "2 Kings 23:33"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-033",
    era: "exile",
    level: 7,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "While Jeremiah was held in the court of the guard during the siege, what was he given each day?",
    choices: ["A jar of wine", "A portion of the king's meat", "A handful of barley", "A loaf of bread from the bakers' street"],
    answer: 3,
    explanation: {
      textSays:
        "Jeremiah 37:21: “They gave him daily a loaf of bread out of the bakers' street, until all the bread in the city was gone.” Later Ebed-melech warns that Jeremiah may die “because of the famine; for there is no more bread in the city” (38:9). 2 Kings 25:3 says that by the fourth month of Zedekiah's eleventh year “there was no bread for the people of the land.”",
      world:
        "The verse shows Jerusalem had a street known for its bakers. The siege lasted from the tenth month of Zedekiah's ninth year to the fourth month of his eleventh (Jeremiah 39:1–2), about a year and a half.",
      theirEyes:
        "A single loaf a day was a lifeline, and everyone in the city knew the bakers' ovens would soon go cold.",
      tradition: {
        shared: "Lamentations 4:4 remembers the end of that siege: “The young children ask for bread, and no one breaks it for them.”",
      },
    },
    confidence: "settled",
    references: ["Jeremiah 37:21", "Jeremiah 38:9", "Jeremiah 39:1–2", "2 Kings 25:3", "Lamentations 4:4"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-034",
    era: "exile",
    level: 7,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which Babylonian commander freed Jeremiah from his chains at Ramah and sent him off with food and a present?",
    choices: ["Nebuzaradan, captain of the guard", "Belshazzar, the crown prince", "Holofernes, the general", "Ashpenaz, the chief eunuch"],
    answer: 0,
    explanation: {
      textSays:
        "Nebuchadnezzar ordered Nebuzaradan: “Take him and take care of him. Do him no harm” (Jeremiah 39:12). Jeremiah had been taken “bound in chains” to Ramah with the captives (40:1). Nebuzaradan said, “I release you today from the chains which are on your hand,” offered him a choice between Babylon and staying, and “gave him food and a present” (40:4–5). Jeremiah joined Gedaliah at Mizpah (40:6).",
      world:
        "Ramah, a few miles north of Jerusalem, served as a gathering point for deportees. Nebuzaradan also led a later deportation of 745 Judeans in Nebuchadnezzar's 23rd year (52:30). Belshazzar and Ashpenaz belong to the Daniel stories; Holofernes is the general of the Book of Judith.",
      theirEyes:
        "Chained in a line of captives, Jeremiah heard an enemy officer offer him what his own king never had: freedom to choose.",
    },
    confidence: "settled",
    references: ["Jeremiah 39:11–14", "Jeremiah 40:1–6", "Jeremiah 52:30"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-035",
    era: "exile",
    level: 7,
    category: "faith-practice",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In the middle of its grief, Lamentations 3:22–23 says Yahweh's mercies are new when?",
    choices: ["Every Sabbath", "Every new moon", "Every morning", "Every seventh year"],
    answer: 2,
    explanation: {
      textSays:
        "The third poem begins, “I am the man who has seen affliction by the rod of his wrath” (Lamentations 3:1). Then comes a turn: “It is because of Yahweh's loving kindnesses that we are not consumed, because his mercies don't fail. They are new every morning. Great is your faithfulness” (3:22–23).",
      world:
        "Lamentations is made of five separate poems, one per chapter. Chapters 1 and 2 picture Jerusalem as a grieving woman, “the daughter of Zion” (2:1); chapter 3 speaks in the voice of one suffering man, and its words of hope stand near the centre of the whole book.",
      theirEyes:
        "Among the ruins, a survivor found one thing the Babylonians could not burn: the hope that God's kindness would come again with the next sunrise.",
    },
    confidence: "settled",
    references: ["Lamentations 3:1", "Lamentations 3:22–23", "Lamentations 2:1"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "exi-036",
    era: "exile",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After Jeremiah's Temple sermon, priests and prophets demanded his death. Who protected him, according to Jeremiah 26:24?",
    choices: ["Pashhur son of Immer", "Hananiah son of Azzur", "Irijah son of Shelemiah", "Ahikam son of Shaphan"],
    answer: 3,
    explanation: {
      textSays:
        "The princes ruled, “This man is not worthy of death” (Jeremiah 26:16), and elders recalled that King Hezekiah had not killed the prophet Micah (26:18–19). Another prophet, Uriah, was less fortunate: Jehoiakim had him brought back from Egypt and killed (26:20–23). “But the hand of Ahikam the son of Shaphan was with Jeremiah” (26:24).",
      world:
        "Shaphan's family appears again and again: Shaphan was King Josiah's scribe, and Ahikam was sent to the prophetess Huldah (2 Kings 22:12). Baruch read Jeremiah's scroll in the room of Gemariah son of Shaphan (Jeremiah 36:10), and Ahikam's son Gedaliah became governor after 586 BCE (40:5). Pashhur put Jeremiah in the stocks (20:2) and Irijah arrested him (37:13).",
      theirEyes:
        "In a city where a prophet could be hunted down even in Egypt, Jeremiah survived because a powerful family of royal officials stood by him.",
    },
    confidence: "settled",
    references: ["Jeremiah 26:16–24", "2 Kings 22:12", "Jeremiah 36:10", "Jeremiah 40:5", "Jeremiah 20:2", "Jeremiah 37:13"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-037",
    era: "exile",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When Jerusalem fell, what did the Babylonians do with the Temple's two great bronze pillars?",
    choices: [
      "Broke them up and carried the bronze to Babylon",
      "Set them up whole in front of Marduk's temple",
      "Left them standing among the ruins",
      "Threw them into the Kidron Valley",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Jeremiah 52:17: “The Chaldeans broke the pillars of bronze that were in Yahweh's house and the bases and the bronze sea… in pieces, and carried all of their bronze to Babylon.” There was so much that “the bronze of all these vessels was without weight” (52:20). Solomon had named them Jachin and Boaz (1 Kings 7:21).",
      world:
        "Jeremiah had warned that the pillars, the sea and the bases would go to Babylon (Jeremiah 27:19–22). Ezra 1:7–11 later lists 5,400 gold and silver vessels returned under Cyrus, but no bronze pillars. The two accounts differ slightly: 2 Kings 25:17 gives each capital three cubits, Jeremiah 52:22 five.",
      theirEyes:
        "Pillars that had framed the Temple porch for centuries were smashed into scrap metal for the empire's workshops.",
    },
    confidence: "settled",
    references: ["Jeremiah 52:17–22", "2 Kings 25:13–17", "1 Kings 7:21", "Jeremiah 27:19–22", "Ezra 1:7–11"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-038",
    era: "exile",
    level: 8,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In a legend told in 2 Maccabees 2, Jeremiah hides the Ark in a cave. When does he say its place will be revealed?",
    choices: [
      "When Cyrus lets the exiles go home",
      "When God gathers his people together again and shows mercy",
      "After seventy years in Babylon",
      "When the Second Temple is dedicated",
    ],
    answer: 1,
    explanation: {
      textSays:
        "2 Maccabees 2:5: “Jeremiah came and found a cave, he brought the tabernacle, the ark, and the altar of incense into it; then he sealed the entrance.” When followers tried to mark the way, he said: “The place shall be unknown until God gathers the people together again and shows mercy” (2:7).",
      world:
        "The story sits in a letter at the start of 2 Maccabees (1:10–2:18), a book compiled in the late 2nd or 1st century BCE: a Second Temple legend, not an eyewitness record. The plunder lists in 2 Kings 25 and Jeremiah 52 never mention the Ark.",
      theirEyes:
        "Jews who knew their Temple had no Ark could picture it safe in a sealed cave, waiting for God's time.",
      tradition: {
        shared: "Jeremiah 3:16 points another way: people “will no longer say, ‘the ark of Yahweh's covenant!’… nor will another be made.”",
      },
    },
    confidence: "settled",
    references: ["2 Maccabees 2:4–8", "Jeremiah 3:16", "2 Kings 25:13–17", "Jeremiah 52:17–23"],
    sources: [
      scripture,
      { kind: "primary", citation: "2 Maccabees 2:4–8" },
      { kind: "scholarship", citation: "Robert Doran, 2 Maccabees: A Critical Commentary (Hermeneia; Fortress Press, 2012)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-039",
    era: "exile",
    level: 8,
    category: "daily-life",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Jeremiah 52 says the Babylonians left some of Judah's poorest people behind to work the vineyards and fields.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Jeremiah 52:16: “Nebuzaradan the captain of the guard left of the poorest of the land to be vineyard keepers and farmers.” Jeremiah 39:10 adds that he “gave them vineyards and fields at the same time.” 2 Kings 25:12 says the same.",
      world:
        "Archaeology broadly fits this picture. Jerusalem and its surroundings were devastated, but in the territory of Benjamin to the north, towns such as Mizpah (Tell en-Nasbeh) and probably Gibeon stayed inhabited in the 6th century BCE, and the Bible makes Mizpah Gedaliah's seat (Jeremiah 40:6).",
      theirEyes:
        "Families who had owned little suddenly found themselves tending vineyards and fields, perhaps ones whose owners had been deported.",
      debate:
        "How empty the land became is debated. Hans Barstad challenged the “myth of the empty land,” stressing continuity; Oded Lipschits argues for heavy losses around Jerusalem but continuity in Benjamin; Avraham Faust argues that Judah as a whole was severely depopulated.",
    },
    confidence: "settled",
    references: ["Jeremiah 52:16", "Jeremiah 39:10", "2 Kings 25:12", "Jeremiah 40:6"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Oded Lipschits, The Fall and Rise of Jerusalem: Judah under Babylonian Rule (Eisenbrauns, 2005)" },
      { kind: "scholarship", citation: "Hans M. Barstad, The Myth of the Empty Land (Scandinavian University Press, 1996)" },
      { kind: "scholarship", citation: "Avraham Faust, Judah in the Neo-Babylonian Period: The Archaeology of Desolation (Society of Biblical Literature, 2012)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-040",
    era: "exile",
    level: 8,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Jeremiah sent yoke-bars to envoys meeting Zedekiah from Edom, Moab, Ammon, Tyre and which other kingdom?",
    choices: ["Egypt", "Assyria", "Sidon", "Persia"],
    answer: 2,
    explanation: {
      textSays:
        "Jeremiah 27:3 tells him to send the bars “to the king of Edom, to the king of Moab, to the king of the children of Ammon, to the king of Tyre, and to the king of Sidon, by the hand of the messengers who come to Jerusalem to Zedekiah king of Judah.” The message: the nation that serves Babylon will “remain in their own land” (27:11).",
      world:
        "Many historians read this as a summit of small kingdoms planning revolt. The Babylonian Chronicle (ABC 5) records “rebellion in Akkad” in Nebuchadnezzar's tenth year (595/594 BCE), close to the date Jeremiah 28:1 gives. Assyria had already fallen, and Persia was not yet a power.",
      theirEyes:
        "Diplomats from five capitals arrived in Jerusalem to talk about freedom, and a prophet met them wearing a yoke.",
    },
    confidence: "settled",
    references: ["Jeremiah 27:3–11", "Jeremiah 28:1"],
    sources: [
      scripture,
      { kind: "primary", citation: "Babylonian Chronicle ABC 5 (BM 21946), entry for Nebuchadnezzar's tenth year, trans. A. K. Grayson (Livius.org)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "exi-041",
    era: "exile",
    level: 9,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "A bulla excavated in Jerusalem reads “Belonging to Gemaryahu son of Shaphan.” In Jeremiah 36, what happened in Gemariah's room?",
    choices: [
      "Jeremiah was imprisoned there",
      "Baruch read Jeremiah's scroll aloud to the people",
      "Zedekiah met Jeremiah in secret",
      "The Rechabites were offered wine",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Jeremiah 36:10: “Baruch read the words of Jeremiah from the book in Yahweh's house, in the room of Gemariah the son of Shaphan the scribe.” Gemariah later begged King Jehoiakim not to burn the scroll (36:25). The Rechabites were taken to a different room (35:4).",
      world:
        "The bulla (a clay seal impression) was one of about fifty found in Area G of the City of David during Yigal Shiloh's excavations, in a burnt building sealed by the Babylonian destruction of 587/586 BCE. The fire baked the clay and preserved it. Because it came from a controlled dig, its authenticity is not in doubt.",
      theirEyes:
        "Officials once pressed their seals into soft clay to close documents; the fire that burned the archive turned those lumps into lasting records.",
      debate:
        "Most scholars accept that this Gemaryahu is very probably the official of Jeremiah 36, though a seal names a person, not a biography.",
    },
    confidence: "mainstream",
    references: ["Jeremiah 36:10–12", "Jeremiah 36:25", "Jeremiah 35:4"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Bulla of Gemaryahu son of Shaphan, City of David Area G (“House of the Bullae”), Y. Shiloh excavations 1978–1985" },
      { kind: "scholarship", citation: "Y. Shoham, “Hebrew Bullae,” in Excavations at the City of David 1978–1985, vol. VI (Qedem 41; Jerusalem, 2000)" },
      { kind: "scholarship", citation: "Tsvi Schneider, “Six Biblical Signatures,” Biblical Archaeology Review 17.4 (1991)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-042",
    era: "exile",
    level: 9,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jeremiah 29 says the exile will last seventy years. How long does the deuterocanonical Letter of Jeremiah say?",
    choices: ["Forty years", "Three and a half years", "Four hundred years", "Seven generations"],
    answer: 3,
    explanation: {
      textSays:
        "Letter of Jeremiah (Baruch 6:3 in the WEB; numbering varies slightly between editions): “you will remain there many years, and for a long season, even for seven generations.” Compare Jeremiah 29:10: “After seventy years are accomplished for Babylon, I will visit you.”",
      world:
        "The “letter” is really a sermon mocking idols, which are like “a scarecrow in a garden of cucumbers that keeps nothing” (Baruch 6:70). A small Greek papyrus fragment of it (7Q2) was found in Qumran Cave 7.",
      theirEyes:
        "For Jews living among foreign temples, the letter offered a ready answer: those gold-covered gods cannot even keep birds away.",
      tradition: {
        christian:
          "Catholic Bibles print it as Baruch 6; Orthodox Bibles, following the Septuagint, keep it separate; Protestant Bibles place it among the Apocrypha or omit it.",
      },
      debate: "Most scholars doubt Jeremiah wrote it; its date and original language are debated.",
    },
    confidence: "settled",
    references: ["Baruch 6:3", "Baruch 6:70", "Jeremiah 29:10"],
    sources: [
      scripture,
      { kind: "primary", citation: "Letter of Jeremiah (Septuagint; Baruch 6 in the Vulgate)" },
      { kind: "archaeology", citation: "7Q2 (pap7QEpJer gr), Greek papyrus fragment of the Letter of Jeremiah, Qumran Cave 7 (M. Baillet, DJD III, 1962)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-043",
    era: "exile",
    level: 9,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The deuterocanonical Book of Baruch ends its poem on Wisdom by identifying Wisdom with what?",
    choices: [
      "The book of God's commandments, the law that endures forever",
      "The stars that guide sailors",
      "The Temple built by Solomon",
      "The secret lore of Babylon's priests",
    ],
    answer: 0,
    explanation: {
      textSays:
        "The poem opens, “Hear, O Israel, the commandments of life! Give ear to understand wisdom!” (Baruch 3:9). God “has given it to Jacob his servant” (3:36), and the poem concludes: “This is the book of God's commandments and the law that endures forever. All those who hold it fast will live” (4:1).",
      world:
        "Baruch presents itself as written in Babylon by Jeremiah's scribe (1:1–4), but most scholars see it as a later collection, preserved in Greek, that uses the exile to speak to Jews of its own day.",
      theirEyes:
        "Far from Jerusalem and its Temple, a people could still hold God's wisdom in their hands, in a book.",
      tradition: {
        jewish:
          "Ben Sira makes the same move around 180 BCE: after a hymn to Wisdom he says, “All these things are the book of the covenant of the Most High God, the law which Moses commanded us” (Sirach 24:23)."
      },
    },
    confidence: "settled",
    references: ["Baruch 3:9", "Baruch 3:36", "Baruch 4:1", "Sirach 24:23"],
    sources: [scripture, { kind: "primary", citation: "Book of Baruch 3:9–4:4 (Septuagint); Sirach 24:23" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-044",
    era: "exile",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Jeremiah 28 says the prophet Hananiah died in the same year he broke Jeremiah's yoke-bar.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Hananiah, from Gibeon, confronted Jeremiah “in the fifth month” (Jeremiah 28:1). Jeremiah answered: “Yahweh has not sent you… This year you will die” (28:15–16). The chapter ends: “So Hananiah the prophet died the same year in the seventh month” (28:17), about two months later.",
      world:
        "The clash turned on how to tell a true prophet from a false one. Jeremiah argued that “the prophet who prophesies of peace” is proved only when his word comes true (28:9), echoing Deuteronomy 18:22: if the thing “doesn't follow, nor happen,” the prophet spoke presumptuously.",
      theirEyes:
        "People who had cheered Hananiah's promise of a quick return watched him buried before the year was out.",
    },
    confidence: "settled",
    references: ["Jeremiah 28:1", "Jeremiah 28:9", "Jeremiah 28:15–17", "Deuteronomy 18:21–22"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-045",
    era: "exile",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Lamentations 4:20 mourns that “the anointed of Yahweh” was caught in the enemy's pits. Which king do most scholars think is meant?",
    choices: ["Saul", "David", "Zedekiah", "Cyrus"],
    answer: 2,
    explanation: {
      textSays:
        "Lamentations 4:19–20: “They chased us on the mountains. They set an ambush for us in the wilderness. The breath of our nostrils, the anointed of Yahweh, was taken in their pits; of whom we said, under his shadow we will live among the nations.”",
      world:
        "This fits Zedekiah, Judah's last king, who fled toward the Arabah and was overtaken in the plains of Jericho (2 Kings 25:4–5). The book ends with a communal prayer: “Turn us to yourself, Yahweh, and we will be turned. Renew our days as of old” (Lamentations 5:21).",
      theirEyes:
        "The king they had trusted to protect them was hunted down like an animal in a trap.",
      debate:
        "2 Chronicles 35:25 says Jeremiah lamented King Josiah, and Josephus says that elegy still existed in his day (Antiquities 10.5.1). Some later interpreters, such as the Aramaic Targum of Lamentations, linked this verse to Josiah. Most modern commentators, including Hillers, prefer Zedekiah.",
    },
    confidence: "mainstream",
    references: ["Lamentations 4:19–20", "Lamentations 5:21", "2 Kings 25:4–5", "2 Chronicles 35:25"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 10.5.1 (Whiston) = 10.78 (Niese)" },
      { kind: "scholarship", citation: "Delbert R. Hillers, Lamentations (Anchor Bible 7A, 2nd ed.; Doubleday, 1992)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "exi-046",
    era: "exile",
    level: 10,
    category: "archaeology",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the famous bulla reading “Berekhyahu son of Neriyahu the scribe” was found in a controlled archaeological excavation.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Jeremiah's scribe is “Baruch the son of Neriah” (Jeremiah 36:4), or in full “Baruch the son of Neriah, the son of Mahseiah” (32:12). Baruch and Neriah are short forms of Berekhyahu and Neriyahu.",
      world:
        "The bulla surfaced on the antiquities market in the mid-1970s in a hoard of seal impressions of unknown origin. The collector Reuben Hecht acquired it and gave it to the Israel Museum, and Nahman Avigad published it in 1978. A second impression of the same seal, also unprovenanced, later belonged to the collector Shlomo Moussaieff.",
      theirEyes:
        "A scribe like Baruch sealed documents for others; whether this lump of clay ever touched his hand is now a scientific argument.",
      debate:
        "In 2014 Yuval Goren and Eran Arie argued that both Berekhyahu bullae are modern forgeries; Pieter van der Veen, Robert Deutsch and Gabriel Barkay replied in 2016 that the case for forgery fails, while admitting this does not prove authenticity.",
    },
    confidence: "settled",
    references: ["Jeremiah 36:4", "Jeremiah 32:12"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "N. Avigad, “Baruch the Scribe and Jerahmeel the King's Son,” Israel Exploration Journal 28 (1978) 52–56" },
      { kind: "scholarship", citation: "Y. Goren and E. Arie, “The Authenticity of the Bullae of Berekhyahu Son of Neriyahu the Scribe,” BASOR 372 (2014) 147–158" },
      { kind: "scholarship", citation: "P. G. van der Veen, R. Deutsch and G. Barkay, “Reconsidering the Authenticity of the Berekhyahu Bullae: A Rejoinder,” Antiguo Oriente 14 (2016)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-047",
    era: "exile",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Eilat Mazar's City of David dig found bullae naming two officials who, in Jeremiah 38:1, wanted Jeremiah dead. Which pair?",
    choices: [
      "Jehucal son of Shelemiah and Gedaliah son of Pashhur",
      "Gemariah son of Shaphan and Baruch son of Neriah",
      "Ahikam son of Shaphan and Ebed-melech",
      "Hananiah son of Azzur and Irijah son of Shelemiah",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Jeremiah 38:1 names “Shephatiah the son of Mattan, Gedaliah the son of Pashhur, Jucal the son of Shelemiah, and Pashhur the son of Malchijah,” who told the king, “Please let this man be put to death” (38:4). Jucal is spelled Jehucal in 37:3.",
      world:
        "Eilat Mazar's team found a bulla of Yehukal son of Shelemyahu in 2005 and one of Gedalyahu son of Pashhur in 2008, a few metres apart. Their script points to the late 7th or early 6th century BCE, Jeremiah's time.",
      theirEyes:
        "The men who lowered Jeremiah into the pit also sealed letters and documents in the royal quarter, and two of their seal marks survived the fire.",
      debate:
        "Many scholars accept the identifications as very plausible, since both names and fathers' names match and the date fits; others stress that such names were not unique, and the date and function of the building Mazar excavated are debated.",
    },
    confidence: "mainstream",
    references: ["Jeremiah 38:1–6", "Jeremiah 37:3"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Bullae of Yehukal son of Shelemyahu (2005) and Gedalyahu son of Pashhur (2008), City of David, E. Mazar excavations" },
      { kind: "scholarship", citation: "E. Mazar, Preliminary Report on the City of David Excavations 2005 at the Visitors Center Area (Shalem Press, 2007)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-048",
    era: "exile",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A British Museum tablet names Nabû-šarrussu-ukīn, “chief eunuch,” in 595 BCE. Which official in Jeremiah 39:3 is he often identified with?",
    choices: ["Nebuzaradan, captain of the guard", "Ebed-melech the Ethiopian", "Nergal Sharezer the Rabmag", "Sarsechim the Rabsaris"],
    answer: 3,
    explanation: {
      textSays:
        "Jeremiah 39:3 lists the Babylonian princes who sat in the middle gate after the breach: “Nergal Sharezer, Samgarnebo, Sarsechim the Rabsaris, Nergal Sharezer the Rabmag.” Rabsaris is the Hebrew form of the Babylonian title rab ša-rēši, “chief eunuch.”",
      world:
        "The small tablet (BM 114789), from Sippar, is dated to Nebuchadnezzar's 10th year (595 BCE). It records 1.5 minas of gold sent by Nabû-šarrussu-ukīn, the chief eunuch, to the Esagila temple in Babylon. Assyriologist Michael Jursa recognised the name in 2007.",
      theirEyes:
        "If the identification is right, the Babylonian grandee who sat in Jerusalem's gate had, less than a decade earlier, sent gold to a temple, noted by a scribe at Sippar.",
      debate:
        "Jursa judged the identification very likely, and many scholars agree. Others, such as Bob Becking, note that translators divide the names in Jeremiah 39:3 differently (some read “Nebo-Sarsekim” as one name) and that the Hebrew spelling differs from the Babylonian.",
    },
    confidence: "mainstream",
    references: ["Jeremiah 39:3"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "British Museum ME 114789 (reg. 1920,1213.81), administrative tablet from Sippar" },
      { kind: "scholarship", citation: "M. Jursa, “Nabû-šarrūssu-ukīn, rab ša-rēši, und ‘Nebusarsekim’ (Jer. 39:3),” NABU 2008/1, 9–10" },
      { kind: "scholarship", citation: "B. Becking, “The Identity of Nabu-sharrussu-ukin, the Chamberlain: An Epigraphic Note on Jeremiah 39,3,” Biblische Notizen 140 (2009)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-049",
    era: "exile",
    level: 10,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: a surviving Babylonian chronicle describes Nebuchadnezzar's destruction of Jerusalem in 587/586 BCE.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "The Babylonian Chronicle ABC 5 (BM 21946) records the capture of “the city of Judah” in 597 BCE, but its text breaks off in Nebuchadnezzar's eleventh year (594/593 BCE). The chronicles for the following years are lost. The final siege is known from the Bible and from burnt destruction layers in Jerusalem, such as the “House of the Bullae” in the City of David.",
      textSays:
        "Jeremiah 52:12–13 dates the burning to “the nineteenth year of King Nebuchadnezzar,” when Nebuzaradan “burned Yahweh's house, and the king's house; and all the houses of Jerusalem.”",
      theirEyes:
        "Babylon's scribes recorded the first capture of Jerusalem; for its final fall, the voices that survive are mostly those of the defeated.",
      debate: "Because no chronicle survives for these years, scholars still disagree over whether Jerusalem fell in 587 or 586 BCE.",
    },
    confidence: "settled",
    references: ["Jeremiah 52:12–13"],
    sources: [
      scripture,
      { kind: "primary", citation: "Babylonian Chronicle ABC 5 (BM 21946), trans. A. K. Grayson (Livius.org)" },
      { kind: "reference", citation: "“Nebuchadnezzar II,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "exi-050",
    era: "exile",
    level: 10,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "An ostracon from Judah's fortress at Arad orders troops to Ramat-negeb to guard against an attack by which people?",
    choices: ["The Philistines", "Edom", "Assyria", "The Egyptians"],
    answer: 1,
    explanation: {
      world:
        "Arad Ostracon 24, an ink letter on pottery from about 600 BCE, relays an urgent royal command to send men from Arad and Kinah to Ramat-negeb so that Edom will not come there. It warns: “the word of the king is incumbent upon you for your very life!”",
      textSays:
        "Obadiah accuses Edom of preying on Judah's refugees: “Don't stand in the crossroads to cut off those of his who escape” (Obadiah 1:14). Lamentations 4:21–22 also turns on “daughter of Edom.”",
      theirEyes:
        "Judah's southern garrisons were watching two fronts at once: Babylon in the north, Edom pressing in from the south.",
      tradition: {
        jewish: "1 Esdras 4:45 even blames the Edomites for burning the Temple “when Judea was made desolate by the Chaldeans.”",
      },
    },
    confidence: "settled",
    references: ["Obadiah 1:14", "Lamentations 4:21–22", "1 Esdras 4:45"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Arad Ostracon 24; Y. Aharoni, Arad Inscriptions (Israel Exploration Society, 1981)" },
      { kind: "scholarship", citation: "F. W. Dobbs-Allsopp et al., Hebrew Inscriptions: Texts from the Biblical Period of the Monarchy (Yale University Press, 2005), Arad 24" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
