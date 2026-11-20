import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const dividedKingdom2: QuestionInput[] = [
  // ───────────── Level 6 ─────────────
  {
    id: "div-026",
    era: "divided-kingdom",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "The prophet Ahijah tore his new cloak into twelve pieces. How many did he tell Jeroboam to take?",
    choices: ["Two", "Ten", "Seven", "Twelve"],
    answer: 1,
    explanation: {
      textSays:
        "1 Kings 11:29–31: Ahijah the Shilonite meets Jeroboam outside Jerusalem, tears his new garment into twelve pieces and says, “Take ten pieces; for Yahweh, the God of Israel, says, ‘Behold, I will tear the kingdom out of the hand of Solomon and will give ten tribes to you.’” Years later the same prophet, now unable to see because of his age (14:4), foretells the fall of Jeroboam's own house (1 Kings 14:1–16).",
      world:
        "Acting out a message is a recurring way for prophets to speak in the Hebrew Bible: later, Jeremiah wears a yoke (Jeremiah 27–28) and Ezekiel lies on his side (Ezekiel 4).",
      theirEyes:
        "Alone in a field with a prophet ripping his new cloak to shreds, Jeroboam, one of Solomon's work overseers, held ten tribes in his hands.",
    },
    confidence: "settled",
    references: ["1 Kings 11:26–31", "1 Kings 14:1–16", "Jeremiah 27–28", "Ezekiel 4"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-027",
    era: "divided-kingdom",
    level: 6,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 1 Kings 12, which city did Jeroboam first build up and live in as king of Israel?",
    choices: ["Samaria", "Jerusalem", "Shechem", "Hebron"],
    answer: 2,
    explanation: {
      textSays:
        "1 Kings 12:25: “Then Jeroboam built Shechem in the hill country of Ephraim, and lived in it; and he went out from there and built Penuel.” Shechem was also where the northern tribes had met Rehoboam and rejected him (12:1–16). By the end of Jeroboam's reign the royal household was at Tirzah (14:17; 15:33).",
      world:
        "Shechem (Tell Balata, beside modern Nablus) was an ancient city with deep roots in Israel's story, from Abraham to Joshua's covenant (Genesis 12:6; Joshua 24). Samaria was founded later, by Omri.",
      theirEyes:
        "For northern tribesmen, a king ruling from Shechem, not Jerusalem, said it plainly: the old heartland was theirs again.",
    },
    confidence: "settled",
    references: ["1 Kings 12:1–25", "1 Kings 14:17", "1 Kings 15:33", "1 Kings 16:24"],
    sources: [scripture, { kind: "reference", citation: "“Shechem,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-028",
    era: "divided-kingdom",
    level: 6,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "While Elijah hid by the brook Cherith during the drought, what does 1 Kings say brought him food?",
    choices: ["A widow from Samaria", "An angel with manna", "Ravens", "Obadiah's servants"],
    answer: 2,
    explanation: {
      textSays:
        "1 Kings 17:3–6: Elijah hides “by the brook Cherith, that is before the Jordan.” The text says, “The ravens brought him bread and meat in the morning, and bread and meat in the evening; and he drank from the brook.” When the brook dries up, he is sent on to a widow in Zarephath (17:7–9).",
      world:
        "Ravens were counted among the unclean birds in the Torah (Leviticus 11:15), which makes them a surprising choice of caterers in the story.",
      theirEyes:
        "With every field brown and every cistern low, a hidden stream and a few black birds were the only supplies the wanted prophet had.",
    },
    confidence: "settled",
    references: ["1 Kings 17:1–9", "Leviticus 11:15"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-029",
    era: "divided-kingdom",
    level: 6,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Elijah stayed with a widow in Zarephath. According to 1 Kings 17, Zarephath belonged to which city?",
    choices: ["Damascus", "Sidon", "Gaza", "Samaria"],
    answer: 1,
    explanation: {
      textSays:
        "1 Kings 17:9: “Arise, go to Zarephath, which belongs to Sidon, and stay there.” The widow has only “a handful of meal in a jar and a little oil in a jar” (17:12); the text says the jar of meal and the jar of oil did not run out, as Elijah promised, until Yahweh sent rain (17:14–16).",
      world:
        "Zarephath is Sarepta, at modern Sarafand on the Lebanese coast. James Pritchard's University of Pennsylvania Museum excavations there (1969–1974) uncovered a Phoenician town with pottery kilns and a shrine. Elijah was hiding in Jezebel's own homeland.",
      theirEyes: "A Phoenician widow, down to her last flour, was asked to bake first for a stranger from Israel.",
      tradition: {
        jewish:
          "Josephus says the historian Menander mentions this drought in his account of Ethbaal, king of the Tyrians — the king the Bible calls Jezebel's father (1 Kings 16:31; Antiquities 8.13.2).",
        christian: "In Luke 4:25–26 Jesus recalls that Elijah was sent to none of Israel's widows, but “to Zarephath, in the land of Sidon, to a woman who was a widow.”",
      },
    },
    confidence: "settled",
    references: ["1 Kings 17:8–16", "1 Kings 16:31", "Luke 4:25–26"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 8.13.2" },
      { kind: "archaeology", citation: "J. B. Pritchard, Sarepta: A Preliminary Report on the Iron Age (University of Pennsylvania Museum, 1975)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-030",
    era: "divided-kingdom",
    level: 6,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: 1 Kings says Zimri, who killed King Elah, reigned in Tirzah for only seven days.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "1 Kings 16:9–10: Zimri, commander of half of Elah's chariots, kills the king while Elah is “drinking himself drunk in the house of Arza.” Then 16:15: “Zimri reigned seven days in Tirzah.” The army made its commander Omri king; when Tirzah fell, Zimri went into the palace's fortified part and burned it down over himself (16:16–18).",
      world:
        "Israel's throne changed hands by force again and again: Nadab and Elah were both killed by their own officers, and Zimri died when the army's choice, Omri, took Tirzah. Judah, by contrast, kept David's line on the throne, apart from Queen Athaliah's six-year rule (2 Kings 11).",
      theirEyes: "In Tirzah, people woke to a new king one week and saw his palace in flames the next.",
    },
    confidence: "settled",
    references: ["1 Kings 15:27–28", "1 Kings 16:8–20", "2 Kings 11:1–3"],
    sources: [scripture, { kind: "reference", citation: "“Omri,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 7 ─────────────
  {
    id: "div-031",
    era: "divided-kingdom",
    level: 7,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Why did Naboth refuse to sell or swap his vineyard in Jezreel to King Ahab?",
    choices: [
      "It was the inheritance of his fathers",
      "Ahab offered too little silver",
      "Its grapes were set aside for the Temple",
      "Jezebel had already bought it",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Ahab offered a better vineyard or its price in money (1 Kings 21:2). Naboth answered: “May Yahweh forbid me, that I should give the inheritance of my fathers to you!” (21:3). Jezebel then had him falsely accused and stoned, and Elijah confronted Ahab in the vineyard (21:8–19).",
      world:
        "Israel's laws treated family land as belonging ultimately to God and meant to stay in the family: “The land shall not be sold in perpetuity, for the land is mine” (Leviticus 25:23; compare Numbers 36:7). Jezebel's reply to Ahab — “Do you now govern the kingdom of Israel?” (1 Kings 21:7) — shows a very different view of what a king could take.",
      theirEyes: "To Naboth, the vines his grandfather planted were not property to trade but his family's place in Israel.",
    },
    confidence: "settled",
    references: ["1 Kings 21:1–19", "Leviticus 25:23", "Numbers 36:7"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-032",
    era: "divided-kingdom",
    level: 7,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Four hundred prophets promised Ahab victory at Ramoth-gilead. Which prophet foretold defeat?",
    choices: ["Zedekiah son of Chenaanah", "Elisha son of Shaphat", "Jonah son of Amittai", "Micaiah son of Imlah"],
    answer: 3,
    explanation: {
      textSays:
        "Ahab's ally Jehoshaphat asks, “Isn't there here a prophet of Yahweh, that we may inquire of him?” Ahab names Micaiah son of Imlah, “but I hate him, for he does not prophesy good concerning me, but evil” (1 Kings 22:7–8). In 22:17 Micaiah says, “I saw all Israel scattered on the mountains, as sheep that have no shepherd.” Zedekiah son of Chenaanah, who had made iron horns to promise victory, strikes him, and Ahab has him imprisoned (22:11, 24–27). Ahab disguises himself in battle but is killed by an arrow (22:30–37).",
      theirEyes: "One voice against four hundred: Micaiah knew what saying the unwelcome thing would cost him.",
      tradition: {
        jewish:
          "Josephus identifies the unnamed prophet who rebuked Ahab after an earlier victory (1 Kings 20:35–43) as Micaiah (Antiquities, book 8).",
      },
    },
    confidence: "settled",
    references: ["1 Kings 22:1–37", "1 Kings 20:35–43"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews, book 8" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-033",
    era: "divided-kingdom",
    level: 7,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Horeb, after a great wind, an earthquake and a fire, what came to Elijah, according to 1 Kings 19?",
    choices: ["A pillar of cloud", "A still small voice", "A burning bush", "A chariot of fire"],
    answer: 1,
    explanation: {
      textSays:
        "Elijah walks “forty days and forty nights to Horeb, God's Mountain” (1 Kings 19:8). Yahweh is not in the wind, the earthquake or the fire: “After the fire, there was a still small voice” (19:12). Elijah is then sent to anoint Hazael, Jehu and Elisha (19:15–16).",
      world:
        "The Hebrew phrase qol demamah daqqah is famously hard to translate: “still small voice” (WEB, KJV), “gentle whisper” (NIV) or “a sound of sheer silence” (NRSV).",
      theirEyes: "Running from Jezebel to the mountain of Moses, Elijah expected thunder — and was met by something close to silence.",
      tradition: {
        shared:
          "Readers often compare the scene with Moses at the same mountain, who also stood in a cleft as God passed by (Exodus 33:21–23).",
      },
    },
    confidence: "settled",
    references: ["1 Kings 19:8–16", "Exodus 33:21–23"],
    sources: [scripture, { kind: "reference", citation: "1 Kings 19:12 in the KJV, NIV and NRSV translations" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-034",
    era: "divided-kingdom",
    level: 7,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After Zimri's death, Israel split between two would-be kings. Who was Omri's rival?",
    choices: ["Baasha son of Ahijah", "Tibni son of Ginath", "Nadab son of Jeroboam", "Jehu son of Nimshi"],
    answer: 1,
    explanation: {
      textSays:
        "1 Kings 16:21–22: “Then the people of Israel were divided into two parts”: half followed Tibni son of Ginath, half followed Omri. “The people who followed Omri prevailed,” Tibni died, and Omri reigned.",
      world:
        "The dates in Kings suggest the civil war was long: Zimri's coup is dated to Asa's 27th year (16:15) and Omri's sole reign to Asa's 31st (16:23), about four years later. The dynasty Omri founded was so strong that Assyrians called Israel “the house of Omri.”",
      theirEyes: "For a few years, a villager in Israel could not even be sure which king he was paying taxes to.",
    },
    confidence: "settled",
    references: ["1 Kings 16:15–23"],
    sources: [scripture, { kind: "reference", citation: "“Omri,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-035",
    era: "divided-kingdom",
    level: 7,
    category: "neighbours",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Baasha killed Jeroboam's son, King Nadab, while Israel's army was besieging a Philistine town.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "1 Kings 15:27: “Baasha struck him at Gibbethon, which belonged to the Philistines; for Nadab and all Israel were besieging Gibbethon.” Baasha then killed all of Jeroboam's house, which the text presents as fulfilling Ahijah's prophecy (15:29). Israel was again besieging Gibbethon decades later when Zimri killed Elah (16:15).",
      world:
        "Gibbethon lay on the border between Israel's hill country and the Philistine plain; its exact site is uncertain. The Philistine city-states were still independent neighbours in this period.",
      theirEyes: "Soldiers camped outside an enemy town woke to find their own king dead and Baasha, a man of Issachar, on the throne.",
    },
    confidence: "settled",
    references: ["1 Kings 15:25–30", "1 Kings 16:15–17"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 8 ─────────────
  {
    id: "div-036",
    era: "divided-kingdom",
    level: 8,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What was Elisha doing when Elijah threw his cloak over him?",
    choices: ["Tending sheep near Bethlehem", "Fishing in the Sea of Galilee", "Pressing grapes in a winepress", "Plowing with twelve yoke of oxen"],
    answer: 3,
    explanation: {
      textSays:
        "1 Kings 19:19: Elijah “found Elisha the son of Shaphat, who was plowing with twelve yoke of oxen,” and put his mantle on him. Elisha asks to say goodbye to his parents, then slaughters his yoke of oxen, boils the meat over the plowing gear and feeds the people before following Elijah (19:20–21).",
      world:
        "Twelve teams of oxen working one field suggest a well-off farming family. Readers often see the burning of the plowing gear as a sign that there was no going back.",
      theirEyes: "The neighbours ate a feast cooked over a broken plow — and lost their best farmhand to a wandering prophet.",
      tradition: {
        christian: "Luke 9:61–62 echoes the scene: a would-be follower asks to say farewell at home, and Jesus speaks of not looking back from the plow.",
      },
    },
    confidence: "settled",
    references: ["1 Kings 19:19–21", "Luke 9:61–62"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-037",
    era: "divided-kingdom",
    level: 8,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "What did the woman of Shunem and her husband build for Elisha to stay in?",
    choices: ["A shelter of branches in the courtyard", "A tent pitched beside the threshing floor", "A little room on the roof", "A room cut into the hillside behind the house"],
    answer: 2,
    explanation: {
      textSays:
        "2 Kings 4:10: “Please, let's make a little room on the roof. Let's set a bed, a table, a chair, and a lamp stand for him there.” The text says Elisha later promised her a son, and raised the boy to life when he died (4:16–37).",
      world:
        "Houses of the period often had a flat roof reached by stairs or a ladder; an upper room built on the roof was a common way to add space for a guest. Pottery oil lamps were the only light after dark.",
      theirEyes: "A wealthy farm wife furnished a spare room so the travelling holy man would always have a bed on the road past Shunem.",
    },
    confidence: "settled",
    references: ["2 Kings 4:8–37"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "P. J. King and L. E. Stager, Life in Biblical Israel (Westminster John Knox, 2001)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-038",
    era: "divided-kingdom",
    level: 8,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When an axe head fell into the Jordan, why was the prophet's disciple so upset?",
    choices: ["It was made of gold", "It belonged to the king", "It was a gift from Elijah", "It was borrowed"],
    answer: 3,
    explanation: {
      textSays:
        "2 Kings 6:5: “But as one was cutting down a tree, the ax head fell into the water. Then he cried out and said, ‘Alas, my master! For it was borrowed.’” The text says Elisha threw a stick into the water and the iron floated (6:6–7).",
      world:
        "Iron tools were valuable in Israel at this time, and a poor disciple may have had no way to repay the owner. Debt could lead to servitude: in the story just before, a prophet's widow fears her sons will be taken as slaves (2 Kings 4:1).",
      theirEyes: "For a young disciple, losing a neighbour's iron axe meant a debt he had no way of paying.",
    },
    confidence: "settled",
    references: ["2 Kings 4:1", "2 Kings 6:1–7"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "P. J. King and L. E. Stager, Life in Biblical Israel (Westminster John Knox, 2001)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-039",
    era: "divided-kingdom",
    level: 8,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After losing to Israel, Ben-hadad's advisers explained the defeat by saying Israel's god was a god of what?",
    choices: ["The sea", "The hills", "The desert", "The night"],
    answer: 1,
    explanation: {
      textSays:
        "1 Kings 20:23: “Their god is a god of the hills; therefore they were stronger than we.” So the Arameans fight next in the plain at Aphek (20:26). A man of God answers that because they said “Yahweh is a god of the hills, but he is not a god of the valleys,” Israel will win again (20:28).",
      world:
        "Many peoples of the region linked gods with particular places: mountains, cities or lands. The Aramean kingdom of Damascus was Israel's main rival in the 9th century BCE; the Bible names more than one of its kings Ben-hadad (1 Kings 15:18; 2 Kings 13:24), a name meaning “son of Hadad,” the storm god.",
      theirEyes: "To Aramean generals, it was simple strategy: if the hill god beat us in the hills, fight him on the flat ground.",
    },
    confidence: "settled",
    references: ["1 Kings 20:1", "1 Kings 20:23–30", "1 Kings 15:18", "2 Kings 13:24"],
    sources: [scripture, { kind: "scholarship", citation: "W. T. Pitard, Ancient Damascus (Eisenbrauns, 1987)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-040",
    era: "divided-kingdom",
    level: 8,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 2 Kings 2, what did Elisha throw into Jericho's bad spring to heal it?",
    choices: ["Flour", "A tree branch", "Ashes from the altar", "Salt"],
    answer: 3,
    explanation: {
      textSays:
        "2 Kings 2:21: Elisha “went out to the spring of the waters, and threw salt into it,” announcing in Yahweh's name that the waters were healed and would no longer cause death or barren land.",
      world:
        "A strong spring beside the mound of ancient Jericho (Tell es-Sultan) is still called Elisha's Spring (Ain es-Sultan); it waters the oasis today.",
      theirEyes: "In an oasis town, a spring that ruined crops was a disaster — and a spring made sweet was life itself.",
      tradition: {
        jewish:
          "Josephus describes this spring near Jericho and retells the story: Elisha threw an earthen vessel full of salt into it and prayed, and the water became good for crops and families (Jewish War 4.8.3). In 2 Kings 2:20 too, Elisha first asks for “a new jar” with salt in it.",
      },
    },
    confidence: "settled",
    references: ["2 Kings 2:19–22"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Jewish War 4.8.3" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 9 ─────────────
  {
    id: "div-041",
    era: "divided-kingdom",
    level: 9,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Amos calls the wealthy women on the mountain of Samaria “cows of” which region?",
    choices: ["Bashan", "Sharon", "Goshen", "Edom"],
    answer: 0,
    explanation: {
      textSays:
        "Amos 4:1: “Listen to this word, you cows of Bashan, who are on the mountain of Samaria, who oppress the poor, who crush the needy, who tell their husbands, ‘Bring us drinks!’”",
      world:
        "Bashan, the fertile plateau east and northeast of the Sea of Galilee (roughly today's Golan Heights and the plain beyond), was famous for its well-fed cattle; the Bible also speaks of “Strong bulls of Bashan” (Psalm 22:12; 22:13 in Hebrew Bibles). Amos preached in the prosperous reign of Jeroboam II (Amos 1:1).",
      theirEyes: "In Samaria's fine houses, being compared to fattened prize cattle was an insult no one would forget.",
    },
    confidence: "settled",
    references: ["Amos 1:1", "Amos 4:1–3", "Psalm 22:12"],
    sources: [scripture, { kind: "reference", citation: "“Bashan,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-042",
    era: "divided-kingdom",
    level: 9,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: 2 Kings says that after destroying Baal's temple in Samaria, Jehu also removed Jeroboam's golden calves.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Jehu gathered Baal's worshippers in their temple and had them killed; “they broke down the pillar of Baal, and broke down the house of Baal, and made it a latrine, to this day” (2 Kings 10:27). But the text adds that he did not depart from the sins of Jeroboam — “the golden calves that were in Bethel and that were in Dan” (10:29).",
      world:
        "Jehu's purge ended the Omride dynasty and its alliance with Phoenicia. Assyrian records show that Jehu soon paid tribute to Shalmaneser III.",
      theirEyes: "Samaria's people saw Baal's temple become a public latrine — while the royal shrines at Bethel and Dan carried on as before.",
    },
    confidence: "settled",
    references: ["2 Kings 10:18–29"],
    sources: [scripture, { kind: "reference", citation: "“Jehu,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-043",
    era: "divided-kingdom",
    level: 9,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "As Jehu entered Jezreel, Jezebel taunted him by calling him by the name of which earlier king-killer?",
    choices: ["Absalom", "Baasha", "Zimri", "Ishmael"],
    answer: 2,
    explanation: {
      textSays:
        "2 Kings 9:30–31: Jezebel paints her eyes, looks out of a window and says, “Do you come in peace, Zimri, you murderer of your master?” Zimri had killed King Elah and lasted only seven days (1 Kings 16:9–18).",
      world:
        "The taunt was a threat as much as an insult: the last man to seize Israel's throne that way died within a week. Jehu's own dynasty, by contrast, lasted about ninety years, the longest in Israel's history.",
      theirEyes: "Facing the chariot of the man who had just killed her son, the old queen met him dressed as royalty, with a history lesson as her weapon.",
    },
    confidence: "settled",
    references: ["2 Kings 9:30–33", "1 Kings 16:9–18", "2 Kings 10:30"],
    sources: [scripture, { kind: "reference", citation: "“Jezebel,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-044",
    era: "divided-kingdom",
    level: 9,
    category: "archaeology",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: the Samaria ostraca, found in 1910, are mostly records of wine and oil delivered to Samaria.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      world:
        "A Harvard expedition led by George Reisner found 102 inscribed potsherds at Samaria in 1910, 63 of them legible. A typical note gives a regnal year (the 9th, 10th or 15th; some also read a 17th), a district or village near Samaria, personal names, and “a jar of old wine” or “a jar of fine oil.” Ivan Kaufman dated them to the second quarter of the 8th century BCE, and many scholars link them to the reign of Jeroboam II. Some personal names are formed with “Baal,” others with Yahweh (spelled -yw). They are now in the Istanbul Archaeology Museums.",
      textSays: "The district names include clans of Manasseh listed in Joshua 17:2, such as Abiezer, Shemida and Helek.",
      theirEyes: "A clerk scratched each delivery on a broken pot: a jar of fine oil from a hill village, logged for the stores in Samaria.",
      debate:
        "That they record wine and oil is clear from the texts; scholars disagree whether these were taxes paid to the crown or supplies sent from estates to officials in Samaria, and whether the years belong to one king or two (for example Joash and Jeroboam II).",
    },
    confidence: "settled",
    references: ["Joshua 17:2", "2 Kings 14:23–29"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Samaria Ostraca, c. 8th century BCE (Istanbul Archaeology Museums); KAI 183–188" },
      { kind: "scholarship", citation: "G. A. Reisner, C. S. Fisher and D. G. Lyon, Harvard Excavations at Samaria 1908–1910 (1924)" },
      { kind: "scholarship", citation: "I. T. Kaufman, “The Samaria Ostraca: An Early Witness to Hebrew Writing,” Biblical Archaeologist 45.4 (1982): 229–239" },
      { kind: "scholarship", citation: "W. H. Shea, “The Date and Significance of the Samaria Ostraca,” Israel Exploration Journal 27 (1977): 16–27" },
      { kind: "scholarship", citation: "J. H. Tigay, You Shall Have No Other Gods: Israelite Religion in the Light of Hebrew Inscriptions (Scholars Press, 1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-045",
    era: "divided-kingdom",
    level: 9,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The dying Elisha told King Joash to strike the ground with arrows. How many times did the king strike?",
    choices: ["Once", "Three times", "Seven times", "Ten times"],
    answer: 1,
    explanation: {
      textSays:
        "In 2 Kings 13:18–19 the king strikes the ground three times and stops. “The man of God was angry with him, and said, ‘You should have struck five or six times.’” Now, Elisha says, Joash will defeat Aram only three times — which he does (13:25).",
      world:
        "Arrows and bows were used in divination across the ancient Near East (compare Ezekiel 21:21, 21:26 in Hebrew Bibles). Here the act works as a sign of how complete the victory over Aram-Damascus would be.",
      theirEyes: "A young king stood at an old prophet's sickbed, arrows in hand, not knowing that every strike counted.",
      tradition: {
        jewish: "Ben Sira (c. 180 BCE) praises Elisha: “When he was buried, his body prophesied. As in his life he did wonders, so his works were also marvelous in death” (Sirach 48:13–14), recalling the dead man who revived on touching Elisha's bones (2 Kings 13:20–21).",
      },
    },
    confidence: "settled",
    references: ["2 Kings 13:14–25", "Ezekiel 21:21", "Sirach 48:12–14"],
    sources: [scripture, { kind: "primary", citation: "Sirach (Ecclesiasticus) 48:12–14" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 10 ─────────────
  {
    id: "div-046",
    era: "divided-kingdom",
    level: 10,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "At Bethel, a man of God from Judah foretold that a future king, named in advance, would defile Jeroboam's altar. Which king?",
    choices: ["Josiah", "Hezekiah", "Jehu", "Asa"],
    answer: 0,
    explanation: {
      textSays:
        "1 Kings 13:2: “a son will be born to David's house, Josiah by name,” and “they will burn men's bones on you.” 2 Kings 23:15–16 says Josiah did exactly this at Bethel. The man of God was told to eat no bread there (13:9); deceived by an old prophet, he did, and “a lion met him by the way and killed him” (13:24).",
      world:
        "Bethel lay just north of Judah's border. Josiah's reform began in his 18th year (2 Kings 22:3), usually dated about 622 BCE, as Assyria's grip on the region weakened.",
      theirEyes: "Standing beside Jeroboam's new altar, the king's priests heard a southerner name a king of David's line not yet born.",
      debate:
        "Many critical scholars think the prophecy took its final form after Josiah's reform, as part of the Deuteronomistic History; traditional readers take it as genuine prediction.",
    },
    confidence: "settled",
    references: ["1 Kings 13:1–32", "2 Kings 22:3", "2 Kings 23:15–18"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "F. M. Cross, Canaanite Myth and Hebrew Epic (Harvard University Press, 1973), ch. 10" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-047",
    era: "divided-kingdom",
    level: 10,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Jeroboam started a pilgrim feast at Bethel to rival Jerusalem's. In which month, according to 1 Kings 12, was it held?",
    choices: ["The first month", "The seventh month", "The eighth month", "The twelfth month"],
    answer: 2,
    explanation: {
      textSays:
        "1 Kings 12:32–33: “Jeroboam ordained a feast in the eighth month,” on the fifteenth day, “like the feast that is in Judah,” and went up to the altar at Bethel “in the month which he had devised of his own heart.”",
      world:
        "The feast in Judah is the Feast of Booths (Sukkot), held on the fifteenth of the seventh month (Leviticus 23:34). Jeroboam's version came exactly one month later. The text presents his shrines as a way to keep his people from going up to Jerusalem to sacrifice (1 Kings 12:26–28).",
      theirEyes: "After the harvest was in, northern families could now celebrate at Bethel, inside their own kingdom, instead of climbing to Jerusalem.",
      debate:
        "Some scholars suggest the north followed an older or different agricultural calendar, so the “new” date may have been a local tradition; the text presents it as Jeroboam's invention.",
    },
    confidence: "settled",
    references: ["1 Kings 12:26–33", "Leviticus 23:33–36"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "S. Talmon, “Divergences in Calendar-Reckoning in Ephraim and Judah,” Vetus Testamentum 8 (1958)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-048",
    era: "divided-kingdom",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Tirzah, Israel's capital before Samaria, is generally identified with which site, excavated by Roland de Vaux?",
    choices: ["Tell Balata", "Tell el-Far'ah (North)", "Tell es-Sultan", "Tell el-Mutesellim"],
    answer: 1,
    explanation: {
      textSays:
        "Tirzah was the royal city of Baasha, Elah and Zimri, and Omri reigned there six years before buying the hill of Samaria (1 Kings 15:33; 16:8, 23–24). The Song of Songs compares the beloved's beauty to Tirzah (6:4).",
      world:
        "Roland de Vaux of the École Biblique dug Tell el-Far'ah (North), northeast of Nablus, in nine seasons from 1946 to 1960. In the 9th-century BCE level he found building work that seemed to have been abandoned before it was finished, which he linked to Omri's move to Samaria. The other sites are Shechem (Tell Balata), Jericho (Tell es-Sultan) and Megiddo (Tell el-Mutesellim).",
      theirEyes: "Builders at Tirzah may have set down their tools when word came that the king was moving the court to a new hill to the west.",
      debate:
        "Older explorers proposed other villages; today Tell el-Far'ah (North) is the generally accepted identification, though no inscription names the site, and de Vaux's link between the unfinished buildings and Omri is debated.",
    },
    confidence: "mainstream",
    references: ["1 Kings 15:33", "1 Kings 16:8–24", "Song of Songs 6:4"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "R. de Vaux, “Tirzah,” in D. Winton Thomas (ed.), Archaeology and Old Testament Study (Oxford, 1967)" },
      { kind: "reference", citation: "“Tirzah,” Encyclopaedia Judaica (2nd ed., 2007)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-049",
    era: "divided-kingdom",
    level: 10,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The jasper seal of “Shema, servant of Jeroboam,” found at Megiddo in 1904, shows which animal?",
    choices: ["A winged bull", "A cobra", "A roaring lion", "An eagle"],
    answer: 2,
    explanation: {
      world:
        "Found in Gottlieb Schumacher's excavation at Megiddo, the seal shows a roaring lion and reads, in paleo-Hebrew, “belonging to Shema, servant of Jeroboam.” It is usually dated to the 8th century BCE, so most scholars link it to Jeroboam II. Schumacher sent the original to Istanbul, and its whereabouts are unknown; it is known today from a bronze cast made before it was sent, and from photographs.",
      textSays:
        "2 Kings 14:23–25 says Jeroboam II reigned forty-one years and restored Israel's border “from the entrance of Hamath to the sea of the Arabah.”",
      theirEyes: "A high official pressed his lion seal into clay to show that this order carried the king's authority.",
      debate: "The seal was not found in a clear layer, so its date rests mainly on its script and style; a minority of scholars have argued for Jeroboam I, but Jeroboam II is the usual identification.",
    },
    confidence: "mainstream",
    references: ["2 Kings 14:23–28"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Seal of Shema, servant of Jeroboam, jasper, Megiddo 1904 (original lost; bronze cast)" },
      { kind: "scholarship", citation: "G. Schumacher, Tell el-Mutesellim I (1908)" },
      { kind: "scholarship", citation: "N. Avigad and B. Sass, Corpus of West Semitic Stamp Seals (Israel Academy of Sciences and Humanities, 1997), no. 2" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "div-050",
    era: "divided-kingdom",
    level: 10,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Hosea named his first son after a place, saying God would avenge its blood on the house of Jehu. Which name?",
    choices: ["Lo-Ammi", "Jezreel", "Bethel", "Ramah"],
    answer: 1,
    explanation: {
      textSays:
        "Hosea 1:4: “Call his name Jezreel, for yet a little while, and I will avenge the blood of Jezreel on the house of Jehu.” Hosea's other children are named Lo-Ruhamah, “for I will no longer have mercy on the house of Israel,” and Lo-Ammi, “for you are not my people” (1:6, 9).",
      world:
        "Jezreel was where Jehu killed King Joram and Jezebel and began his bloody coup (2 Kings 9–10). Hosea preached in the north in the last decades of Jehu's dynasty, under Jeroboam II (Hosea 1:1).",
      theirEyes: "Each time Hosea called his son, neighbours heard a reminder of the massacre that put their king's family on the throne.",
      debate:
        "2 Kings 10:30 has God commend Jehu for wiping out Ahab's house, while Hosea condemns the bloodshed; scholars debate how to relate these two prophetic judgments.",
      tradition: {
        christian: "Paul (Romans 9:25–26) and 1 Peter 2:10 echo Hosea's promise that those who were “not my people” would become God's people (Hosea 1:10 and 2:23; 2:1 and 2:25 in Hebrew Bibles).",
      },
    },
    confidence: "settled",
    references: ["Hosea 1:1–10", "Hosea 2:23", "2 Kings 9:24–37", "2 Kings 10:30", "Romans 9:25–26", "1 Peter 2:10"],
    sources: [scripture, { kind: "reference", citation: "“Hosea,” Encyclopaedia Britannica" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
