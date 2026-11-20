import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

const cogan = { kind: "scholarship", citation: "Mordechai Cogan, I Kings (Anchor Bible 10; Doubleday, 2001)" } as const;

export const unitedMonarchy4: QuestionInput[] = [
  // ───────────── Level 16 ─────────────
  {
    id: "mon-076",
    era: "united-monarchy",
    level: 16,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "When the aged David's son Adonijah declared, “I will be king,” which two leading men backed him?",
    choices: [
      "Zadok the priest and Nathan the prophet",
      "Joab the general and Abiathar the priest",
      "Benaiah son of Jehoiada and Shimei",
      "Hushai and Ahithophel",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Adonijah “conferred with Joab the son of Zeruiah and with Abiathar the priest; and they followed Adonijah and helped him” (1 Kings 1:7). But “Zadok the priest, Benaiah the son of Jehoiada, Nathan the prophet, Shimei, Rei, and the mighty men who belonged to David, were not with Adonijah” (1:8). Nathan then sent Bathsheba to remind David of his oath that Solomon would reign (1:11–14).",
      world:
        "The court split into two camps: David's companions from his outlaw and Hebron years (Joab, Abiathar) against figures prominent in Jerusalem (Zadok, Benaiah, Nathan). Many scholars read the account as a carefully told story of how the younger son came to the throne.",
      theirEyes:
        "At Adonijah's feast by En-rogel the guests were already shouting for the new king, while inside the palace Nathan and Bathsheba were planning how to stop him.",
    },
    confidence: "settled",
    references: ["1 Kings 1:5–14"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-077",
    era: "united-monarchy",
    level: 16,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "David ordered Solomon to ride his own mule down to a spring to be anointed king. Which spring?",
    choices: ["En-rogel", "Gihon", "En-gedi", "The spring of Harod"],
    answer: 1,
    explanation: {
      textSays:
        "David said, “cause Solomon my son to ride on my own mule, and bring him down to Gihon. Let Zadok the priest and Nathan the prophet anoint him there king over Israel” (1 Kings 1:33–34). Zadok “took the horn of oil from the Tent, and anointed Solomon,” the trumpet sounded and the people shouted, “Long live King Solomon!” (1:39). Adonijah's rival feast was at En-rogel, further down the valley (1:9).",
      world:
        "The Gihon spring, in the Kidron Valley beside the City of David, was Jerusalem's main source of water. Riding the king's own mule was a public sign that David had chosen this son.",
      theirEyes:
        "The noise of pipes and shouting from Gihon carried down the valley, and Adonijah's guests at En-rogel put down their cups in alarm (1 Kings 1:40–49).",
    },
    confidence: "settled",
    references: ["1 Kings 1:9", "1 Kings 1:33–49"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-078",
    era: "united-monarchy",
    level: 16,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "What request, passed on by Bathsheba, led Solomon to order Adonijah's death?",
    choices: [
      "To be made commander of the army",
      "To keep the horn of anointing oil",
      "To marry Abishag the Shunammite",
      "To rule the northern tribes from Shechem",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Adonijah asked Bathsheba to have Solomon “give me Abishag the Shunammite as wife” (1 Kings 2:17). Solomon set a throne for his mother at his right hand (2:19), then answered, “Ask for him the kingdom also, for he is my elder brother” (2:22), and sent Benaiah to kill him (2:25).",
      world:
        "Abishag had cared for David in his last days (1 Kings 1:1–4). In the ancient Near East, claiming a dead or deposed king's women could signal a claim to his throne; compare Absalom in 2 Samuel 16:21–22. The honoured seat of the king's mother hints at the queen mother's influence at Judah's court.",
      theirEyes:
        "To Bathsheba it may have sounded like a small favour; to Solomon, it sounded like his rival reaching for the throne a second time.",
    },
    confidence: "settled",
    references: ["1 Kings 1:1–4", "1 Kings 2:13–25", "2 Samuel 16:21–22"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-079",
    era: "united-monarchy",
    level: 16,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Solomon spared the priest Abiathar but banished him to his own fields. In which village?",
    choices: ["Anathoth", "Nob", "Shiloh", "Bethlehem"],
    answer: 0,
    explanation: {
      textSays:
        "Solomon said, “Go to Anathoth, to your own fields, for you are worthy of death,” sparing him because he had carried the Ark for David (1 Kings 2:26). The narrator says this fulfilled Yahweh's word “concerning the house of Eli in Shiloh” (2:27), and Zadok took Abiathar's place (2:35).",
      world:
        "Anathoth lay in Benjamin, a few kilometres north-east of Jerusalem. Centuries later Jeremiah was “one of the priests who were in Anathoth in the land of Benjamin” (Jeremiah 1:1).",
      theirEyes: "The old priest who had fled with David from Saul now walked home to his village, his priesthood gone.",
      debate:
        "Some scholars suggest Jeremiah's priestly family descended from Abiathar, but the Bible never says so.",
    },
    confidence: "settled",
    references: ["1 Kings 2:26–27", "1 Kings 2:35", "Jeremiah 1:1"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-080",
    era: "united-monarchy",
    level: 16,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Where did Solomon offer a thousand burnt offerings and then dream that God said, “Ask for what I should give you”?",
    choices: ["Shiloh", "Bethel", "Gibeon", "Hebron"],
    answer: 2,
    explanation: {
      textSays:
        "“The king went to Gibeon to sacrifice there, for that was the great high place. Solomon offered a thousand burnt offerings on that altar. In Gibeon, Yahweh appeared to Solomon in a dream by night” (1 Kings 3:4–5). Kings admits people still sacrificed at high places “because there was not yet a house built for Yahweh's name” (3:2).",
      world:
        "Gibeon is usually identified with el-Jib, about 9 km north-west of Jerusalem.",
      theirEyes: "Smoke from a thousand offerings hung over the hilltop, and that night the young king dreamed of a God who offered him anything.",
      tradition: {
        shared:
          "Chronicles explains why Gibeon was proper: “God's Tent of Meeting was there, which Yahweh's servant Moses had made,” with Bezalel's bronze altar (2 Chronicles 1:3–6), while the Ark was in a tent in Jerusalem.",
      },
    },
    confidence: "settled",
    references: ["1 Kings 3:2–5", "2 Chronicles 1:3–6"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 17 ─────────────
  {
    id: "mon-081",
    era: "united-monarchy",
    level: 17,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "1 Kings 7 says Hiram, the bronze-worker who cast the Temple's pillars, had a Tyrian father. His mother was a widow from which tribe?",
    choices: ["Judah", "Levi", "Benjamin", "Naphtali"],
    answer: 3,
    explanation: {
      textSays:
        "“He was the son of a widow of the tribe of Naphtali, and his father was a man of Tyre, a worker in bronze” (1 Kings 7:14). He made the two bronze pillars, each “eighteen cubits high” (7:15). 2 Chronicles 2:13–14 calls him Huram-abi and says his mother was “of the daughters of Dan.”",
      world:
        "Phoenician cities were famed for metalwork. This craftsman shares a name with King Hiram of Tyre, who sent the timber (1 Kings 5), but the text treats them as two different men.",
      theirEyes: "A half-Israelite, half-Tyrian master caster: exactly the man a king would want for bronze on this scale.",
      debate:
        "Interpreters explain the Naphtali–Dan difference in various ways, for example that his mother was of Danite descent but lived in Naphtali, or that the two books simply drew on different traditions.",
    },
    confidence: "settled",
    references: ["1 Kings 7:13–15", "2 Chronicles 2:13–14"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-082",
    era: "united-monarchy",
    level: 17,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "As Solomon made it, what did the Temple's great bronze basin, the “sea,” stand on?",
    choices: [
      "Twelve bronze oxen, three facing each direction",
      "Four winged cherubim",
      "Twelve bronze lions",
      "Seven bronze pillars",
    ],
    answer: 0,
    explanation: {
      textSays:
        "The sea was “ten cubits from brim to brim” and “stood on twelve oxen,” three facing each direction (1 Kings 7:23–25). Chronicles adds that “the sea was for the priests to wash in” (2 Chronicles 4:6). 1 Kings says it held 2,000 baths (7:26); Chronicles says 3,000 (4:5).",
      world:
        "At roughly 45 cm to the cubit, the basin was about 4.5 m across. Much later King Ahaz took the sea off the bronze oxen and set it on a stone pavement (2 Kings 16:17).",
      theirEyes: "Coming into the court, you would see a vast bowl of water glinting above a ring of bronze bulls.",
      tradition: {
        shared:
          "Many interpreters, ancient and modern, have seen the twelve oxen as echoing the twelve tribes, though the text does not say so.",
      },
    },
    confidence: "settled",
    references: ["1 Kings 7:23–26", "2 Chronicles 4:2–6", "2 Kings 16:17"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-083",
    era: "united-monarchy",
    level: 17,
    category: "daily-life",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: 1 Kings says the bronze for the Temple vessels was carefully weighed when it was cast.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "“Solomon left all the vessels unweighed, because there were so many of them. The weight of the bronze could not be determined” (1 Kings 7:47). They were cast “in the plain of the Jordan, in the clay ground between Succoth and Zarethan” (7:46).",
      world:
        "Large bronzes were cast in moulds packed in clay, so a site with suitable clay near water and fuel made sense. Succoth lay east of the Jordan; it is often identified with Tell Deir Alla, though this is debated. Jeremiah echoes the same idea when the Babylonians carry the bronze away: it was “without weight” (Jeremiah 52:20).",
      theirEyes: "Furnace smoke over the Jordan valley, and so much molten bronze that the scribes simply gave up counting.",
    },
    confidence: "settled",
    references: ["1 Kings 7:46–47", "Jeremiah 52:20"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-084",
    era: "united-monarchy",
    level: 17,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In his dedication prayer Solomon says even “heaven and the heaven of heavens can't contain you.” How does he finish?",
    choices: [
      "How much less this house that I have built!",
      "How much less the Ark of your covenant!",
      "How much less the city of David!",
      "How much less the tablets of the law!",
    ],
    answer: 0,
    explanation: {
      textSays:
        "“But will God in very deed dwell on the earth? Behold, heaven and the heaven of heavens can't contain you; how much less this house that I have built!” (1 Kings 8:27). He then asks God to “hear in heaven, your dwelling place” the prayers made “toward this place” (8:29–30).",
      world:
        "Neighbouring temples were thought of as the god's house, where the god's image lived. Solomon's prayer keeps the idea of a holy house but stresses that God is not confined to it: what dwells there is God's “name” (8:29).",
      theirEyes:
        "Standing before the altar with hands spread toward heaven, the king told the crowd that this splendid building could not hold their God.",
      tradition: {
        christian: "Stephen echoes this idea: “the Most High doesn't dwell in temples made with hands” (Acts 7:48).",
      },
    },
    confidence: "settled",
    references: ["1 Kings 8:22–30", "Acts 7:48"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-085",
    era: "united-monarchy",
    level: 17,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: Solomon's dedication prayer asks God to hear foreigners who come from far away and pray toward the Temple.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "“Concerning the foreigner, who is not of your people Israel, when he comes out of a far country for your name's sake… when he comes and prays toward this house, hear in heaven… that all the peoples of the earth may know your name” (1 Kings 8:41–43). The prayer also asks God to hear captives who pray “toward their land… the city which you have chosen” (8:46–48).",
      world:
        "Praying toward Jerusalem became a lasting custom. In Daniel 6:10 (6:11 in Hebrew), Daniel prays three times a day in Babylon with his windows “open in his room toward Jerusalem.”",
      theirEyes:
        "A traveller from a distant land, hearing of Israel's God, could turn toward this house and still be heard: that was the king's bold request.",
    },
    confidence: "settled",
    references: ["1 Kings 8:41–48", "Daniel 6:10"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 18 ─────────────
  {
    id: "mon-086",
    era: "united-monarchy",
    level: 18,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Digging Tell el-Kheleifeh near Aqaba in 1938–40 as Solomon's port Ezion-geber, what did Nelson Glueck at first claim he had found?",
    choices: [
      "The hull of one of Solomon's ships",
      "A copper smelter and refinery",
      "A Hebrew inscription naming Ophir",
      "A royal throne room with ivory inlays",
    ],
    answer: 1,
    explanation: {
      textSays:
        "“King Solomon made a fleet of ships in Ezion Geber, which is beside Eloth, on the shore of the Red Sea, in the land of Edom” (1 Kings 9:26).",
      world:
        "Glueck read rows of openings in a large building's walls as flues for wind-fanned furnaces and called it a smelter or copper refinery. In 1965 he abandoned that idea: the holes were left by burned wooden beams, and the building was a fortified storehouse. Gary Pratico's restudy of the finds (1985) found no secure 10th-century evidence and dated the main settlement to the 8th–6th centuries BCE.",
      theirEyes: "A sun-baked fort at the head of the gulf, where hot winds off the desert blew in from the north.",
      debate:
        "Whether Tell el-Kheleifeh is Ezion-geber at all is uncertain; Alexander Flinder and others proposed Jezirat Faraun (Pharaoh's Island) near Taba, with its sheltered anchorage.",
    },
    confidence: "settled",
    references: ["1 Kings 9:26–28"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Nelson Glueck, preliminary reports on the 1938–1940 Tell el-Kheleifeh campaigns, Bulletin of the American Schools of Oriental Research (1938–1940)" },
      { kind: "scholarship", citation: "Nelson Glueck, “Ezion-Geber,” Biblical Archaeologist 28 (1965)" },
      { kind: "scholarship", citation: "Alexander Flinder, “The Island of Jezirat Fara'un: Its Ancient Harbour, Anchorage and Marine Defence Installations,” International Journal of Nautical Archaeology 6.2 (1977), 127–139" },
      { kind: "scholarship", citation: "Gary D. Pratico, “Nelson Glueck's 1938–1940 Excavations at Tell el-Kheleifeh: A Reappraisal,” BASOR 259 (1985), 1–32" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-087",
    era: "united-monarchy",
    level: 18,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "A Hebrew ostracon found at Tell Qasile, in modern Tel Aviv, mentions “gold of Ophir.” What is it?",
    choices: [
      "A map showing the route to Ophir",
      "A ship's log from Solomon's Red Sea fleet",
      "A note recording 30 shekels of Ophir gold for Beth-horon",
      "A royal decree of Solomon taxing Ophir",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Solomon's fleet “came to Ophir, and fetched from there gold, four hundred and twenty talents” (1 Kings 9:28); Chronicles says 450 (2 Chronicles 8:18). Ophir's gold became a byword for the finest (Psalm 45:9; Job 28:16).",
      world:
        "Found on the surface in 1945–46 and published by Benjamin Maisler (Mazar) in 1951, the sherd reads, in translation, “Gold of Ophir to (or belonging to) Beth-horon, 30 shekels.” It is usually dated to the late 8th or early 7th century BCE, well after Solomon. It shows Ophir gold was a real trade term, not proof of Solomon's voyages. It is in the Israel Museum.",
      theirEyes: "To a clerk at the port on the Yarkon, Ophir gold was simply a grade of metal, written on a scrap of pot.",
      debate:
        "Ophir's location is unknown; suggestions include south-west Arabia, the Horn of Africa and India.",
    },
    confidence: "settled",
    references: ["1 Kings 9:26–28", "2 Chronicles 8:17–18", "Psalm 45:9", "Job 28:16"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Tell Qasile “Ophir” ostracon (Beth-horon sherd), Israel Museum, Jerusalem" },
      { kind: "scholarship", citation: "B. Maisler (Mazar), “Two Hebrew Ostraca from Tell Qasîle,” Journal of Near Eastern Studies 10 (1951), 265–267" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-088",
    era: "united-monarchy",
    level: 18,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Solomon's list of twelve district officers in 1 Kings 4 includes two men married to Solomon's daughters.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Ben-abinadab, over the heights of Dor, “had Taphath, Solomon's daughter, as wife” (1 Kings 4:11), and Ahimaaz in Naphtali “took Basemath the daughter of Solomon as wife” (4:15). Each of the twelve officers had to supply the king's household “for a month in the year” (4:7).",
      world:
        "Several districts cut across old tribal lines and follow cities instead, such as Baana's district of “Taanach and Megiddo, and all Beth Shean” (4:12). Marrying daughters to officials bound them to the dynasty.",
      theirEyes: "When it was your district's month, every farm owed grain, cattle and sheep to the king's table, and the king's son-in-law came to collect.",
      debate:
        "Judah is not clearly listed. The Hebrew of 4:19 is unclear: some read it as a separate officer for Judah, others as evidence that Judah was exempt, which would fit the northern anger in 1 Kings 12.",
    },
    confidence: "settled",
    references: ["1 Kings 4:7–19", "1 Kings 12:4"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-089",
    era: "united-monarchy",
    level: 18,
    category: "daily-life",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Solomon's ivory throne overlaid with gold had six steps. How many lions stood on those steps?",
    choices: ["Two", "Six", "Twelve", "Twenty-four"],
    answer: 2,
    explanation: {
      textSays:
        "“There were six steps to the throne… and two lions standing beside the armrests. Twelve lions stood there on the one side and on the other on the six steps. Nothing like it was made in any kingdom” (1 Kings 10:19–20). Chronicles adds a footstool of gold (2 Chronicles 9:18).",
      world:
        "Thrones guarded by powerful beasts were a royal symbol across the region. The sarcophagus of King Ahiram of Byblos (National Museum of Beirut) shows a king on a throne carved with winged sphinxes; its inscription is usually dated about 1000 BCE, though the date of the carving is debated. Ivory panels from Phoenician workshops decorated royal furniture for centuries.",
      theirEyes: "Climbing those six steps between two rows of lions, a petitioner felt very small by the time he reached the king.",
    },
    confidence: "settled",
    references: ["1 Kings 10:18–20", "2 Chronicles 9:17–19"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Sarcophagus of Ahiram, Byblos, National Museum of Beirut" },
      cogan,
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-090",
    era: "united-monarchy",
    level: 18,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Every three years, 1 Kings 10 says the fleet of Tarshish brought gold, silver, ivory, apes and what else?",
    choices: ["Horses", "Peacocks", "Cedar logs", "Camels"],
    answer: 1,
    explanation: {
      textSays:
        "“Once every three years the fleet of Tarshish came bringing gold, silver, ivory, apes, and peacocks” (1 Kings 10:22). Silver was “considered of little value in the days of Solomon” (10:21). 2 Chronicles 9:21 says the ships “went to Tarshish with Huram's servants.”",
      world:
        "Tarshish is usually located in the far west Mediterranean, yet 1 Kings 22:48 has “ships of Tarshish” sailing for Ophir from Ezion Geber on the Red Sea. So many scholars think the phrase means a type of large ocean-going ship, whatever its route. Hiram's Phoenicians were the master sailors of the age.",
      theirEyes: "When the ships came in, the market buzzed with exotic animals that most people in Jerusalem had never seen.",
      debate:
        "The rare Hebrew word translated “peacocks” (tukkiyim) is uncertain; some scholars suggest a kind of monkey or baboon instead.",
    },
    confidence: "settled",
    references: ["1 Kings 10:21–22", "1 Kings 22:48", "2 Chronicles 9:21"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 19 ─────────────
  {
    id: "mon-091",
    era: "united-monarchy",
    level: 19,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "2 Kings 23 says Josiah defiled the high places Solomon built east of Jerusalem for foreign gods. What does it call that hill?",
    choices: ["Mount Zion", "The mountain of corruption", "Mount Gerizim", "Mount Carmel"],
    answer: 1,
    explanation: {
      textSays:
        "1 Kings 11:7 says Solomon built a high place “for Chemosh the abomination of Moab, on the mountain that is before Jerusalem.” About three centuries later Josiah “defiled the high places that were before Jerusalem, which were on the right hand of the mountain of corruption,” built by Solomon for Ashtoreth, Chemosh and Milcom (2 Kings 23:13).",
      world:
        "The hill is traditionally identified with the southern end of the Mount of Olives, east of the Temple Mount. Chemosh and Milcom were the national gods of Moab and Ammon; Ashtoreth (Astarte) was a leading goddess of the Phoenicians.",
      theirEyes:
        "For generations, Jerusalemites could look across the Kidron and see the shrines Solomon had raised for his foreign wives' gods.",
    },
    confidence: "settled",
    references: ["1 Kings 11:1–8", "2 Kings 23:13"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-092",
    era: "united-monarchy",
    level: 19,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "1 Kings 11 says which adversary of Solomon grew up in Egypt and married the sister of Pharaoh's queen, Tahpenes?",
    choices: ["Rezon son of Eliada", "Shimei son of Gera", "Hadad the Edomite", "Abiathar the priest"],
    answer: 2,
    explanation: {
      textSays:
        "Hadad, of Edom's royal family, fled to Egypt as a child after Joab's slaughter in Edom. Pharaoh “gave him as wife the sister of his own wife, the sister of Tahpenes the queen,” and their son Genubath grew up “among the sons of Pharaoh” (1 Kings 11:14–20). Another adversary, Rezon, “reigned in Damascus” (11:23–25).",
      world:
        "Egyptian courts often sheltered foreign princes who might later be useful as allies on the throne back home. No Egyptian source names Tahpenes, and which pharaoh is meant is unknown.",
      theirEyes:
        "An Edomite prince raised in Pharaoh's palace was waiting for the day Joab was dead, so he could go home and settle old scores.",
      tradition: {
        jewish:
          "The Septuagint, the Greek Bible used by many Jews in Jesus' day, adds a longer story in which Jeroboam too flees to Egypt and marries the queen's sister (3 Kingdoms 12:24a–z).",
      },
    },
    confidence: "settled",
    references: ["1 Kings 11:14–25"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, 3 Kingdoms (1 Kings) 12:24a–z" },
      cogan,
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-093",
    era: "united-monarchy",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Wisdom of Solomon speaks in Solomon's voice but was written much later. Where do most scholars think it was written?",
    choices: ["Babylon", "Alexandria in Egypt", "Qumran by the Dead Sea", "Damascus"],
    answer: 1,
    explanation: {
      world:
        "Written in Greek, it uses the vocabulary of Greek philosophy. Its reflection on the Exodus and attacks on Egyptian animal worship (chapters 11–19) point to Alexandria's large Jewish community. Most scholars date it between the late 1st century BCE and the early 1st century CE; David Winston argued for Caligula's reign (37–41 CE).",
      textSays:
        "The book never names Solomon, but the speaker says he prayed for wisdom and was chosen as king and told to build a sanctuary on God's holy mountain (Wisdom 7:7; 9:7–8), echoing 1 Kings 3 and 1 Kings 8.",
      theirEyes:
        "A Greek-speaking Jewish teacher in Alexandria, surrounded by philosophers and Egyptian temples, borrowed Solomon's voice to defend his ancestral faith.",
      tradition: {
        shared:
          "It is part of the Septuagint and is accepted as scripture by Catholic and Orthodox Christians, but it is not in the Jewish Bible or most Protestant canons.",
      },
    },
    confidence: "mainstream",
    references: ["Wisdom of Solomon 7:7", "Wisdom of Solomon 9:7–8"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "David Winston, The Wisdom of Solomon, Anchor Bible 43 (Doubleday, 1979)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-094",
    era: "united-monarchy",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Psalms of Solomon 2 describes a proud conqueror who defiled Jerusalem and lay dead and unburied in Egypt. Whom do most scholars identify him as?",
    choices: ["Antiochus IV Epiphanes", "Nebuchadnezzar", "Pompey the Great", "Alexander the Great"],
    answer: 2,
    explanation: {
      world:
        "The Roman general Pompey took Jerusalem in 63 BCE and entered the Temple's inner sanctuary. In 48 BCE he was murdered on the coast of Egypt and his body left on the shore. Psalms of Solomon 2 seems to reflect both, so most scholars date that psalm soon after 48 BCE and the collection to the mid-1st century BCE. The other three died in Persia or Babylon.",
      theirEyes: "To pious Jews who had seen a Roman stride into the holy place, his corpse on an Egyptian beach looked like God's verdict.",
      tradition: {
        jewish:
          "These 18 psalms were never in the Hebrew Bible, but some Greek Bible manuscripts include them. Psalm 17 longs for a son of David to purge Jerusalem of foreigners.",
      },
      debate: "Authorship is debated: Pharisees were once the usual answer; many scholars now speak only of a pious Jerusalem circle.",
    },
    confidence: "mainstream",
    references: [],
    sources: [
      { kind: "primary", citation: "Psalms of Solomon 2; 17" },
      { kind: "scholarship", citation: "R. B. Wright, “Psalms of Solomon,” in J. H. Charlesworth (ed.), The Old Testament Pseudepigrapha, vol. 2 (Doubleday, 1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-095",
    era: "united-monarchy",
    level: 19,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says he watched a Jew named Eleazar cast out a demon before Vespasian using Solomon's lore. What did Eleazar use?",
    choices: [
      "Solomon's crown placed on the sufferer's head",
      "A ring holding a root of a kind Solomon had named",
      "A copy of the Song of Songs read aloud",
      "Water drawn from the bronze sea",
    ],
    answer: 1,
    explanation: {
      textSays:
        "1 Kings 4:32–33 (5:12–13 in Hebrew) credits Solomon with 3,000 proverbs and 1,005 songs, and says he spoke of trees, plants and animals.",
      world:
        "Josephus says God taught Solomon the skill of expelling demons and that Solomon composed incantations for healing. He describes Eleazar holding a ring containing a root of a kind mentioned by Solomon to a possessed man's nostrils and drawing the demon out through his nose, then ordering it to overturn a nearby cup or basin of water as proof (Antiquities 8.2.5, §§45–49).",
      theirEyes: "Roman officers crowded round as a Jewish healer spoke Solomon's name and a bowl of water tipped over by itself.",
      tradition: {
        jewish:
          "By the late 1st century CE Solomon was famed as a master of healing and spirits; Josephus says this kind of cure was still of great force among Jews in his own time.",
      },
    },
    confidence: "settled",
    references: ["1 Kings 4:32–33"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 8.2.5 (8.45–49), Whiston translation" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 20 ─────────────
  {
    id: "mon-096",
    era: "united-monarchy",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 1958 Yigael Yadin identified a six-chambered “Solomonic” gate at Gezer before it was re-excavated. How?",
    choices: [
      "He spotted its plan in R. A. S. Macalister's old report, filed under a “Maccabean Castle”",
      "A farmer brought him a stone naming Solomon",
      "He found it described in Josephus' Antiquities",
      "He recognised it in an Egyptian relief of Gezer",
    ],
    answer: 0,
    explanation: {
      textSays:
        "1 Kings 9:15 lists Solomon's forced-labour building works: “Millo, Jerusalem's wall, Hazor, Megiddo, and Gezer.” Gezer had been given to Solomon's Egyptian wife as a dowry after Pharaoh burned it (9:16).",
      world:
        "Having found a six-chambered gate at Hazor matching one at Megiddo, Yadin went back to Macalister's 1902–1909 Gezer report and recognised half of a similar gate in a structure Macalister had called Maccabean. William Dever's excavations in the late 1960s exposed the gate.",
      theirEyes: "An archaeologist bent over a half-century-old site plan and suddenly saw, in the jumble of walls, a twin of the gate he had dug himself.",
    },
    confidence: "settled",
    references: ["1 Kings 9:15–17"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Y. Yadin, “Solomon's City Wall and Gate at Gezer,” Israel Exploration Journal 8 (1958), 80–86" },
      { kind: "scholarship", citation: "Y. Yadin, Hazor: The Rediscovery of a Great Citadel of the Bible (Random House, 1975)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-097",
    era: "united-monarchy",
    level: 20,
    category: "archaeology",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: archaeologists today agree that the six-chambered gates of Hazor, Megiddo and Gezer were all built under Solomon.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays: "1 Kings 9:15 credits Solomon with building Hazor, Megiddo and Gezer.",
      world:
        "Each gate had three guardrooms on either side of the passage. Yadin saw their near-identical plans as the work of one royal architect, matching 1 Kings 9:15, and many archaeologists, including Dever and Amihai Mazar, still date them to the 10th century BCE.",
      theirEyes:
        "Whoever built them, a traveller passing through any of these gates walked between six dark guardrooms where soldiers and elders sat.",
      debate:
        "Israel Finkelstein's “low chronology” moves the pottery and buildings linked to Solomon down to the 9th century BCE, the time of the Omride kings of Israel. Others argue the Megiddo gate belongs to a later level than Yadin thought. Radiocarbon studies have narrowed but not ended the dispute.",
    },
    confidence: "settled",
    references: ["1 Kings 9:15"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Israel Finkelstein, “The Archaeology of the United Monarchy: An Alternative View,” Levant 28 (1996)" },
      { kind: "scholarship", citation: "Amihai Mazar, Archaeology of the Land of the Bible, 10,000–586 B.C.E. (Doubleday, 1990)" },
      { kind: "scholarship", citation: "Y. Yadin, “Solomon's City Wall and Gate at Gezer,” Israel Exploration Journal 8 (1958), 80–86" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-098",
    era: "united-monarchy",
    level: 20,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "How many psalms in a row (Psalms 120–134) carry the heading “A Song of Ascents”?",
    choices: ["Ten", "Twelve", "Fifteen", "Twenty"],
    answer: 2,
    explanation: {
      textSays:
        "Each of Psalms 120–134 is headed “A Song of Ascents”; Psalm 127 adds “By Solomon.” Psalm 122 begins, “I was glad when they said to me, ‘Let's go to Yahweh's house!’”",
      world:
        "Many scholars think these short songs were sung by pilgrims “going up” to Jerusalem for the festivals; others link the title to the return from exile or to the step-like repetition of words in the poems.",
      theirEyes: "Families climbing the last hills toward Jerusalem for the feast sang these short songs together on the road.",
      tradition: {
        jewish:
          "The Mishnah, a later record (c. 200 CE), says fifteen steps led up to the Temple's Court of Israel from the Court of Women, matching the fifteen Songs of Ascents, and that Levites stood on them with instruments during the water-drawing celebration at Tabernacles (Middot 2:5; Sukkah 5:4).",
      },
    },
    confidence: "settled",
    references: ["Psalm 120–134", "Psalm 122:1", "Psalm 127"],
    sources: [
      scripture,
      { kind: "primary", citation: "Mishnah, Middot 2:5; Sukkah 5:4 (c. 200 CE)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-099",
    era: "united-monarchy",
    level: 20,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "1 Kings 4:31 says Solomon was wiser than Ethan the Ezrahite, Heman, Calcol and Darda. 1 Chronicles 2:6 lists nearly the same names as the sons of whom?",
    choices: ["Zerah son of Judah", "Korah the Levite", "Jesse of Bethlehem", "Eli the priest of Shiloh"],
    answer: 0,
    explanation: {
      textSays:
        "Chronicles lists “The sons of Zerah: Zimri, Ethan, Heman, Calcol, and Dara—five of them in all” (1 Chronicles 2:6); Zerah was one of the twins Tamar bore to Judah (2:4). Kings calls the four “the sons of Mahol” (1 Kings 4:31). Psalms 88 and 89 are headed by “Heman, the Ezrahite” and “Ethan, the Ezrahite.”",
      world:
        "“Ezrahite” is usually explained as “descendant of Zerah,” which links the lists. Kings uses these famous sages as a yardstick that Solomon surpassed, along with “all the wisdom of Egypt” (4:30).",
      theirEyes: "Saying the king was wiser than Ethan and Heman meant naming the most famous sages anyone knew, and declaring Solomon better.",
      debate:
        "Chronicles also names Levite singers called Heman and Ethan (1 Chronicles 6:33, 44; 15:17–19). Scholars disagree whether they are the same men as the Judahite sages or whether separate traditions have merged.",
    },
    confidence: "settled",
    references: ["1 Kings 4:30–31", "1 Chronicles 2:4–6", "1 Chronicles 6:33", "1 Chronicles 6:44", "1 Chronicles 15:17–19", "Psalm 88", "Psalm 89"],
    sources: [scripture, cogan],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Replaced by reviewer; independently verified." },
  },
  {
    id: "mon-100",
    era: "united-monarchy",
    level: 20,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which Levite singer's name heads Psalm 50 and every psalm from 73 to 83?",
    choices: ["Heman", "Ethan", "Asaph", "Moses"],
    answer: 2,
    explanation: {
      textSays:
        "Twelve psalms are headed “by Asaph” (Psalm 50; 73–83). Chronicles says David first appointed thanksgiving “by the hand of Asaph and his brothers” (1 Chronicles 16:7), and at the Temple's dedication “Asaph, Heman, Jeduthun, and their sons” sang with cymbals and harps as the cloud filled the house (2 Chronicles 5:12–14). Heman heads Psalm 88; Ethan, Psalm 89; Moses, Psalm 90.",
      world:
        "The guild outlasted the monarchy: among those returning from exile were “the singers: the children of Asaph,” 128 according to Ezra 2:41, 148 according to Nehemiah 7:44.",
      theirEyes: "Generation after generation, Asaph's family stood at the altar with cymbals, singing the songs their ancestors had sung.",
    },
    confidence: "settled",
    references: ["Psalm 50", "Psalm 73–83", "1 Chronicles 16:7", "2 Chronicles 5:12–14", "Ezra 2:41", "Nehemiah 7:44"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
