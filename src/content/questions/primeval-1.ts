import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const primeval1: QuestionInput[] = [
  // ───────────── Level 1 ─────────────
  {
    id: "pri-001",
    era: "primeval",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Genesis 1, what does God create on the first day?",
    choices: ["The sun", "Light", "Plants", "Birds"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 1:3: “God said, “Let there be light,” and there was light.” God separates light from darkness, and verse 5 closes: “There was evening and there was morning, the first day.”",
      world:
        "The sun, moon and stars do not appear until the fourth day (Genesis 1:14–19), so the text has light before the sun. Ancient and modern readers alike have puzzled over this order.",
      theirEyes:
        "For people who rose at dawn and slept at dusk, the first thing God made was the thing that set the rhythm of every working day.",
      tradition: {
        jewish:
          "The Jewish day, including the Sabbath, runs from sunset to sunset, a reckoning often linked to the “evening and morning” of Genesis 1; Leviticus 23:32 already commands a Sabbath kept “from evening to evening.”",
      },
    },
    confidence: "settled",
    references: ["Genesis 1:3–5", "Genesis 1:14–19", "Leviticus 23:32"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-002",
    era: "primeval",
    level: 1,
    category: "faith-practice",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Genesis says God rested on the seventh day, blessed it and made it holy.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 2:2: “On the seventh day God finished his work which he had done; and he rested on the seventh day from all his work which he had done.” Verse 3: “God blessed the seventh day, and made it holy.”",
      world:
        "The Hebrew verb translated “rested” is shavat, “to stop” or “cease.” It is the root of the word Shabbat, Sabbath.",
      theirEyes:
        "To a family that stopped all work each seventh day, this passage said their weekly rest copied God's own pattern.",
      tradition: {
        jewish:
          "The Book of Jubilees (2nd century BCE) says the angels of the presence keep the Sabbath with God in heaven, as Israel does on earth (Jubilees 2:18–19).",
        christian: "Hebrews 4:4 quotes Genesis 2:2 and speaks of a “Sabbath rest” still awaiting God's people (Hebrews 4:9).",
      },
    },
    confidence: "settled",
    references: ["Genesis 2:2–3", "Hebrews 4:4–10"],
    sources: [scripture, { kind: "primary", citation: "Book of Jubilees 2:18–19 (trans. R. H. Charles)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-003",
    era: "primeval",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "According to Genesis 1:27, how did God create humankind?",
    choices: ["Out of the sea", "From the light of the first day", "In his own image", "From the stars of heaven"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 1:27: “God created man in his own image. In God’s image he created him; male and female he created them.”",
      world:
        "In the ancient Near East, kings were called the image of a god: the name Tutankhamun means “living image of Amun.” Many scholars note that Genesis gives this royal title to every human being, male and female.",
      theirEyes:
        "In a world where only kings were living images of the gods, hearing that every farmer and servant bore God's image was startling.",
      tradition: {
        jewish: "The Wisdom of Solomon (c. 1st century BCE) says God created humans for incorruption and made them an image of his own eternity (Wisdom 2:23).",
        christian: "The Letter to the Colossians calls Christ “the image of the invisible God” (Colossians 1:15).",
      },
    },
    confidence: "settled",
    references: ["Genesis 1:26–27", "Wisdom of Solomon 2:23", "Colossians 1:15"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "J. Richard Middleton, The Liberating Image: The Imago Dei in Genesis 1 (Brazos, 2005)" },
      { kind: "reference", citation: "“Tutankhamun,” Encyclopaedia Britannica" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-004",
    era: "primeval",
    level: 1,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Genesis 2, what task does God give the man in the garden of Eden?",
    choices: ["To sing praises at its altar", "To cultivate and keep it", "To build a city in it", "To hunt its animals"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 2:15: “Yahweh God took the man, and put him into the garden of Eden to cultivate and keep it.” Work comes before anything goes wrong in the story.",
      world:
        "The two Hebrew verbs, ʿavad (serve, work) and shamar (keep, guard), appear together again for the Levites' duties at the Tabernacle (Numbers 3:7–8). Some scholars read Eden as a kind of first sanctuary because of such echoes.",
      theirEyes:
        "For an Israelite farmer weeding and watering an orchard, the first human had a job he would recognise: tending a garden.",
    },
    confidence: "settled",
    references: ["Genesis 2:15", "Numbers 3:7–8"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Gordon J. Wenham, “Sanctuary Symbolism in the Garden of Eden Story,” Proceedings of the Ninth World Congress of Jewish Studies (1986)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-005",
    era: "primeval",
    level: 1,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Genesis 2, from which tree does God forbid the man to eat?",
    choices: ["The tree of life", "A cedar of Lebanon", "The tree of the knowledge of good and evil", "A date palm"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 2:17: “but you shall not eat of the tree of the knowledge of good and evil; for in the day that you eat of it, you will surely die.” He may freely eat from every other tree (2:16), and both special trees stand in the middle of the garden (2:9).",
      theirEyes:
        "A gardener's child would understand at once: a whole orchard to enjoy, and one tree you must not touch.",
      tradition: {
        jewish:
          "The Book of the Watchers (1 Enoch 1–36, usually dated to the 3rd century BCE) describes a fragrant tree no mortal may touch until the great judgement, when its fruit will be given to the righteous; scholars usually identify it with the tree of life (1 Enoch 24–25).",
        christian: "Revelation 22:2 pictures the tree of life again, beside the river in the new Jerusalem.",
      },
    },
    confidence: "settled",
    references: ["Genesis 2:9", "Genesis 2:16–17", "Revelation 22:2"],
    sources: [scripture, { kind: "primary", citation: "1 Enoch 24–25 (trans. R. H. Charles)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 2 ─────────────
  {
    id: "pri-006",
    era: "primeval",
    level: 2,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "On which day of Genesis 1 does God make the sun, moon and stars?",
    choices: ["The first day", "The fourth day", "The sixth day", "The seventh day"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 1:14–19: on the fourth day God makes lights in the sky to divide day from night and “for signs to mark seasons, days, and years” (1:14). Plants had already appeared on the third day (1:11–13).",
      theirEyes:
        "Farmers and priests watched the sky to know when to plant and when the festivals fell; Genesis says that was exactly what the lights were for.",
      tradition: {
        jewish:
          "Philo of Alexandria, a contemporary of Jesus, said the earth bore plants before the sun and moon existed so that no one would credit the heavenly bodies, rather than God, with making things grow (On the Creation 45–46).",
      },
    },
    confidence: "settled",
    references: ["Genesis 1:11–19"],
    sources: [scripture, { kind: "primary", citation: "Philo, On the Creation of the World (De Opificio Mundi) 45–46" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-007",
    era: "primeval",
    level: 2,
    category: "story",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: in Genesis 2, the man names the animals before the woman is made.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "God brings the animals to the man to see what he would call them (Genesis 2:19): “Whatever the man called every living creature became its name.” Yet “for man there was not found a helper comparable to him” (2:20), and only then is the woman made (2:21–22).",
      world:
        "In the ancient Near East, naming was linked to existence and authority: the Babylonian creation epic Enuma Elish opens at a time when the heavens and earth had not yet been named.",
      theirEyes:
        "Like a herdsman who knows every animal in his flock by name, the first human is shown getting to know the creatures around him.",
    },
    confidence: "settled",
    references: ["Genesis 2:18–22"],
    sources: [scripture, { kind: "primary", citation: "Enuma Elish, Tablet I, lines 1–2" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-008",
    era: "primeval",
    level: 2,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the Babylonian epic Enuma Elish, Marduk makes heaven and earth from whose body?",
    choices: ["Ptah, the craftsman god", "Baal, the storm god", "Gilgamesh, king of Uruk", "Tiamat, the sea goddess"],
    answer: 3,
    explanation: {
      world:
        "In Tablet IV, Marduk defeats Tiamat, the goddess of salt water, splits her body in two like a fish for drying, and makes one half the sky and the other the earth. Copies were found at Nineveh and other sites, and a later ritual text says the poem was recited at Babylon's New Year (Akitu) festival.",
      textSays:
        "In Genesis 1 there is no battle: God speaks, and the waters are divided (1:6–10). Even the great sea creatures are simply made, and called good (1:21).",
      theirEyes:
        "A Judean exile in Babylon could have heard Marduk's victory praised at the New Year feast, and compared it with the quiet word of Genesis.",
      debate:
        "Scholars agree the two accounts share ideas, such as dividing primeval waters, but most doubt that Genesis copied Enuma Elish directly. Its date of composition is also debated: many follow W. G. Lambert in placing it in the late second millennium BCE (perhaps under Nebuchadnezzar I, c. 1100 BCE), while others argue for an earlier date.",
    },
    confidence: "settled",
    references: ["Genesis 1:6–10", "Genesis 1:21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Enuma Elish, Tablet IV (trans. W. G. Lambert, Babylonian Creation Myths, 2013)" },
      { kind: "scholarship", citation: "W. G. Lambert, Babylonian Creation Myths (Eisenbrauns, 2013)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-009",
    era: "primeval",
    level: 2,
    category: "tradition",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: after creating humans, Genesis 1 says God saw that everything he had made was “very good.”",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Genesis 1:31: “God saw everything that he had made, and, behold, it was very good.” Earlier days repeat the refrain “God saw that it was good” (e.g., 1:10, 12, 18, 21, 25).",
      world:
        "In the Hebrew text, the second day (1:6–8) is the only one of the six days of creation without the “good” refrain.",
      theirEyes:
        "For listeners who knew hunger, sickness and storms, hearing the world called “very good” was a statement of trust in its Maker.",
      tradition: {
        jewish: "The Septuagint, the Greek translation used by Jews in Jesus' day, adds “and God saw that it was good” to the second day as well (Genesis 1:8 LXX).",
        christian: "1 Timothy 4:4 echoes Genesis in teaching that everything God created is good.",
      },
    },
    confidence: "settled",
    references: ["Genesis 1:10–31", "1 Timothy 4:4"],
    sources: [scripture, { kind: "primary", citation: "Septuagint, Genesis 1:8" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-010",
    era: "primeval",
    level: 2,
    category: "story",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Genesis 2, what does God use to make the woman?",
    choices: ["Dust of the ground", "One of the man's ribs", "A drop of the man's blood", "A branch of the tree of life"],
    answer: 1,
    explanation: {
      textSays:
        "God puts the man into a deep sleep and takes one of his ribs (Genesis 2:21). Verse 22: “Yahweh God made a woman from the rib which he had taken from the man, and brought her to the man.” The man greets her as bone of his bones and flesh of his flesh (2:23).",
      world:
        "The Hebrew word tsela can also mean “side”: it is used for the side of the Tabernacle (Exodus 26:20). The man himself was formed from the ground (2:7).",
      theirEyes:
        "To ancient hearers, being made from the same body meant belonging to the same family, as close as kin.",
    },
    confidence: "settled",
    references: ["Genesis 2:7", "Genesis 2:21–23", "Exodus 26:20"],
    sources: [scripture, { kind: "reference", citation: "Brown–Driver–Briggs Hebrew Lexicon, “צֵלָע (tsela)”" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 3 ─────────────
  {
    id: "pri-011",
    era: "primeval",
    level: 3,
    category: "daily-life",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Genesis 1:29, what food does God give to humans?",
    choices: ["Meat from the animals", "Fish from the sea", "Plants and the fruit of trees", "Milk and honey"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 1:29 begins: “God said, “Behold, I have given you every herb yielding seed, which is on the surface of all the earth…” Fruit trees are given as food too. The animals get green plants (1:30). Only after the Flood is meat explicitly allowed (9:3).",
      theirEyes:
        "Most Israelites ate meat only at feasts and sacrifices; their daily food was bread, grain, olives and fruit, much like this first menu.",
      tradition: {
        shared: "Jewish and Christian readers have often seen this plant-based first diet as a picture of a peaceful creation, echoed in Isaiah's vision of the wolf and lamb (Isaiah 11:6–9).",
      },
    },
    confidence: "settled",
    references: ["Genesis 1:29–30", "Genesis 9:3", "Isaiah 11:6–9"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-012",
    era: "primeval",
    level: 3,
    category: "archaeology",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the Egyptian creation text on the Shabaka Stone, how does the god Ptah create?",
    choices: ["By slaying a sea monster", "By shaping people on a potter's wheel", "Through his heart and tongue — thought and speech", "By hatching from a cosmic egg"],
    answer: 2,
    explanation: {
      world:
        "The Shabaka Stone (British Museum EA 498) was inscribed under Pharaoh Shabaka of the 25th (Kushite) Dynasty, in the late 8th century BCE. Its “Memphite Theology” says Ptah created by conceiving things in his heart and commanding them with his tongue. The stone was later badly worn in its centre, probably from reuse as a millstone.",
      textSays: "Genesis 1 also pictures creation by word: “God said, “Let there be light,” and there was light” (Genesis 1:3).",
      theirEyes: "Priests at Memphis claimed their god Ptah outranked the others: he had only to think and speak.",
      debate:
        "Shabaka's scribes claimed to copy a worm-eaten ancient papyrus. Early scholars such as Breasted and Sethe dated the text to the Old Kingdom. Scholars now agree it is no older than the 19th Dynasty (13th century BCE), and many, following Friedrich Junge, date it to Shabaka's own time.",
    },
    confidence: "settled",
    references: ["Genesis 1:3"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Shabaka Stone (British Museum EA 498), late 8th century BCE" },
      { kind: "reference", citation: "“Shabaka Stone,” Wikipedia" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-013",
    era: "primeval",
    level: 3,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Philo of Alexandria said God did not need time to create. Why, then, did he say Genesis speaks of six days?",
    choices: ["Six was the number of known planets", "Six is a “perfect” number, fitting an ordered world", "Six angels helped God create", "Moses copied a six-day Egyptian week"],
    answer: 1,
    explanation: {
      textSays: "Genesis 1 sets creation in six days, followed by God's rest on the seventh (Genesis 2:2).",
      theirEyes:
        "A Greek-educated Jew in Alexandria, steeped in philosophy and mathematics, wanted to show that the Law of Moses was the deepest wisdom of all.",
      tradition: {
        jewish:
          "Philo (c. 20 BCE – c. 50 CE) wrote that God does everything at once, but created things needed order, and order involves number. Six is the first “perfect” number, equal to the sum of its parts (1 + 2 + 3) and the product of the first odd and even numbers (2 × 3) (On the Creation 13–14).",
      },
    },
    confidence: "settled",
    references: ["Genesis 1:1–2:3"],
    sources: [scripture, { kind: "primary", citation: "Philo, On the Creation of the World (De Opificio Mundi) 13–14" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-014",
    era: "primeval",
    level: 3,
    category: "faith-practice",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: the noun “Sabbath” appears in the creation account of Genesis 1–2.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 2:2–3 uses the verb shavat, “rested” or “ceased,” but never the noun shabbat. The word “Sabbath” first appears in the manna story (Exodus 16:23), and the Ten Commandments later tie the Sabbath to the seventh day of creation (Exodus 20:11).",
      theirEyes:
        "Hearing Genesis read aloud, an Israelite could not miss the echo: God “sabbathed,” so his people would too.",
      tradition: {
        jewish: "Philo of Alexandria calls the seventh day a festival not of one city or country but of the whole universe, “the birthday of the world” (On the Creation 89).",
      },
    },
    confidence: "settled",
    references: ["Genesis 2:2–3", "Exodus 16:23", "Exodus 20:11"],
    sources: [scripture, { kind: "primary", citation: "Philo, On the Creation of the World (De Opificio Mundi) 89" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-015",
    era: "primeval",
    level: 3,
    category: "tradition",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "In Mark 10, Jesus quotes Genesis 2:24 (“they will be one flesh”) while answering a question about what?",
    choices: ["Paying taxes to Caesar", "Divorce", "Healing on the Sabbath", "Fasting"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 2:24: “Therefore a man will leave his father and his mother, and will join with his wife, and they will be one flesh.” Asked by Pharisees whether divorce is lawful, Jesus quotes Genesis 1:27 and 2:24 (Mark 10:2–9; Matthew 19:3–6).",
      theirEyes:
        "In a village where a husband could send his wife away with a written notice, going back to “the beginning” was a bold answer.",
      tradition: {
        jewish:
          "The Damascus Document, known from the Dead Sea Scrolls, also appeals to Genesis 1:27, “male and female he created them,” to criticise men who take two wives (CD 4:20–5:2). Scholars debate whether it targets polygamy, remarriage, or both.",
      },
    },
    confidence: "settled",
    references: ["Genesis 1:27", "Genesis 2:24", "Mark 10:2–9", "Matthew 19:3–6"],
    sources: [scripture, { kind: "primary", citation: "Damascus Document (CD) 4:20–5:2" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 4 ─────────────
  {
    id: "pri-016",
    era: "primeval",
    level: 4,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In the Babylonian epic Enuma Elish, why are human beings created?",
    choices: ["To rule the earth as the gods' image", "To give names to the animals", "To bear the gods' work so the gods can rest", "To guard Marduk's temple from Tiamat"],
    answer: 2,
    explanation: {
      world:
        "In Tablet VI, Marduk plans a creature to bear the gods' toil so that the gods may be at rest, and Ea makes mankind from the blood of Kingu (Qingu), the rebel god who led Tiamat's army.",
      textSays:
        "In Genesis 1 humans are blessed, made in God's image and given rule over the creatures (1:26–28), and it is God himself who rests on the seventh day (2:2).",
      theirEyes:
        "For a labourer in Babylon, the epic explained his hard life: he existed so the gods would not have to work.",
      debate:
        "Many scholars see Genesis 1 as deliberately contrasting with such myths; others think the similarities reflect a shared culture rather than a direct reply.",
    },
    confidence: "settled",
    references: ["Genesis 1:26–28", "Genesis 2:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Enuma Elish, Tablet VI (trans. W. G. Lambert, Babylonian Creation Myths, 2013)" },
      { kind: "scholarship", citation: "W. G. Lambert, Babylonian Creation Myths (Eisenbrauns, 2013)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-017",
    era: "primeval",
    level: 4,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis never says when angels were made. On which day does the Book of Jubilees say they were created?",
    choices: ["The first day", "The fourth day", "The sixth day", "The seventh day"],
    answer: 0,
    explanation: {
      textSays: "Genesis 1 lists no creation of angels.",
      theirEyes: "A reader of Jubilees could picture the angels watching the whole of creation unfold, and praising God as it happened.",
      tradition: {
        jewish:
          "Jubilees (2nd century BCE), found in more than a dozen copies among the Dead Sea Scrolls, says that on the first day God created the heavens, the earth, the waters and the spirits that serve him, including the angels of the presence (Jubilees 2:2). It counts twenty-two kinds of work made before the seventh day, matching twenty-two “heads of mankind” from Adam to Jacob (2:23).",
      },
    },
    confidence: "settled",
    references: ["Genesis 1:1–2:3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Book of Jubilees 2:2, 2:23 (trans. R. H. Charles)" },
      { kind: "scholarship", citation: "James C. VanderKam, The Book of Jubilees (Sheffield Academic Press, 2001)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-018",
    era: "primeval",
    level: 4,
    category: "world",
    difficulty: 1,
    format: "true-false",
    prompt: "True or false: Genesis 1 calls the sun and the moon by their ordinary Hebrew names.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Genesis 1:16: “God made the two great lights: the greater light to rule the day, and the lesser light to rule the night.” The usual words shemesh (sun) and yareach (moon) are not used.",
      world:
        "Shamash was the Babylonian sun god, and moon gods were worshipped across the region. In Genesis 1 the sun and moon are simply lamps, made on the fourth day.",
      theirEyes:
        "Neighbours bowed to the sun and moon as gods; Genesis describes them as lights hung in the sky by God.",
      debate:
        "Many scholars see this wording as a deliberate polemic against sun and moon worship; others think it is simply the style of the passage.",
    },
    confidence: "settled",
    references: ["Genesis 1:14–19"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Gerhard F. Hasel, “The Polemic Nature of the Genesis Cosmology,” Evangelical Quarterly 46 (1974)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-019",
    era: "primeval",
    level: 4,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "God promises the man “a helper” (Hebrew ezer). Elsewhere in the Hebrew Bible, who is most often called an ezer?",
    choices: ["Servants and slaves", "Enemy armies", "Children", "God"],
    answer: 3,
    explanation: {
      textSays:
        "Genesis 2:18: “I will make him a helper comparable to him.” Of its other uses in the Hebrew Bible (about twenty in all), most describe God as Israel's help, for example in Exodus 18:4, Deuteronomy 33:29, Psalm 33:20 and Psalm 121:1–2.",
      world:
        "Ezer does not mean a junior assistant. The phrase ezer kenegdo means a helper “corresponding to” or “matching” him, a partner the animals could not be (2:20).",
      theirEyes:
        "When Israelites sang that their help came from the Lord, they used the same word Genesis uses for the first woman.",
    },
    confidence: "mainstream",
    references: ["Genesis 2:18–20", "Exodus 18:4", "Deuteronomy 33:29", "Psalm 33:20", "Psalm 121:1–2"],
    sources: [
      scripture,
      { kind: "reference", citation: "Brown–Driver–Briggs Hebrew Lexicon, “עֵזֶר (ezer)”" },
      { kind: "scholarship", citation: "Gordon J. Wenham, Genesis 1–15, Word Biblical Commentary 1 (1987), on Genesis 2:18" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-020",
    era: "primeval",
    level: 4,
    category: "world",
    difficulty: 1,
    format: "multiple-choice",
    prompt: "The Greek Septuagint translated Eden's “garden” with a word borrowed from Persian. Which English word comes from it?",
    choices: ["Utopia", "Paradise", "Elysium", "Zion"],
    answer: 1,
    explanation: {
      textSays: "Genesis 2:8: “Yahweh God planted a garden eastward, in Eden.”",
      world:
        "An Old Iranian word for a “walled enclosure” came to mean the great parks of Persian kings. Xenophon used the Greek form paradeisos for such a park, and the Septuagint used it for the garden of Eden (Genesis 2:8).",
      theirEyes:
        "Greek-speaking Jews pictured Eden like a royal park: walled, watered and full of fruit trees and animals.",
      tradition: {
        christian: "In Luke 23:43, Jesus promises the man crucified beside him that he will be with him in paradise that day.",
      },
    },
    confidence: "settled",
    references: ["Genesis 2:8", "Luke 23:43"],
    sources: [
      scripture,
      { kind: "primary", citation: "Septuagint, Genesis 2:8" },
      { kind: "primary", citation: "Xenophon, Anabasis 1.2.7" },
      { kind: "reference", citation: "“Paradise,” Wikipedia (etymology)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 5 ─────────────
  {
    id: "pri-021",
    era: "primeval",
    level: 5,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Genesis 2:4 begins “This is the history of the generations…”. What is the Hebrew word for “generations” that recurs as a heading through Genesis?",
    choices: ["Bereshit", "Tohu", "Toledot", "Shalom"],
    answer: 2,
    explanation: {
      textSays:
        "Genesis 2:4: “This is the history of the generations of the heavens and of the earth when they were created, in the day that Yahweh God made the earth and the heavens.” The toledot formula returns about ten times, introducing new sections (e.g., 5:1; 6:9; 11:27; 37:2).",
      world: "Bereshit (“In the beginning”) is the first word of Genesis, and tohu (“formless”) appears in 1:2.",
      theirEyes: "For a people who memorised family lines, Genesis read like a great family tree, starting with the heavens and the earth.",
      debate:
        "Scholars debate whether the first half of 2:4 closes the seven-day account or opens the Eden story; many source critics treat it as the end of the first account.",
    },
    confidence: "settled",
    references: ["Genesis 2:4", "Genesis 5:1", "Genesis 6:9", "Genesis 11:27", "Genesis 37:2"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Gordon J. Wenham, Genesis 1–15, Word Biblical Commentary 1 (1987), on Genesis 2:4" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-022",
    era: "primeval",
    level: 5,
    category: "neighbours",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: most scholars think Genesis 1 took the word tehom (“the deep”) directly from the Babylonian goddess Tiamat.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays: "Genesis 1:2 says darkness was on the surface of “the deep” (tehom). Here the deep is water, not a goddess, and God does not fight it.",
      world:
        "Hermann Gunkel (1895) argued that tehom echoed Tiamat. Most scholars now hold that the two words are related through a shared Semitic root, but that the Hebrew word was not borrowed from the goddess's name.",
      theirEyes: "For people who lived near the sea, “the deep” was a real, dark and dangerous place, not a monster to be slain.",
      debate:
        "Scholars still debate how far Genesis 1 reflects older ideas of a battle with the sea, which appear in poetic passages such as Psalm 74:13–14.",
    },
    confidence: "mainstream",
    references: ["Genesis 1:2", "Psalm 74:13–14"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Hermann Gunkel, Schöpfung und Chaos in Urzeit und Endzeit (1895)" },
      { kind: "scholarship", citation: "Alexander Heidel, The Babylonian Genesis, 2nd ed. (University of Chicago Press, 1951)" },
      { kind: "scholarship", citation: "David T. Tsumura, Creation and Destruction (Eisenbrauns, 2005)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-023",
    era: "primeval",
    level: 5,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Readers often see days 1–3 forming realms and days 4–6 filling them. Which day fills the sky and waters made on day 2?",
    choices: ["Day 4", "Day 5", "Day 6", "Day 7"],
    answer: 1,
    explanation: {
      textSays:
        "Day 2 separates the waters with an expanse, the sky (Genesis 1:6–8). Day 5 fills them with sea creatures and birds that fly across the sky (1:20–23). Likewise light (day 1) pairs with the lights (day 4), and land (day 3) with land animals and humans (day 6).",
      theirEyes: "A listener could follow the pattern like a song: first the rooms are built, then they are filled.",
      debate:
        "Readers differ on what the pattern means. Some take the days as literal days; others see a literary framework; others a theological picture of God ordering the world, perhaps like a temple. Philo already denied that creation took time (On the Creation 13).",
    },
    confidence: "mainstream",
    references: ["Genesis 1:3–31"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, On the Creation of the World (De Opificio Mundi) 13" },
      { kind: "scholarship", citation: "Gordon J. Wenham, Genesis 1–15, Word Biblical Commentary 1 (1987), on Genesis 1" },
      { kind: "scholarship", citation: "John H. Walton, The Lost World of Genesis One (IVP, 2009)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-024",
    era: "primeval",
    level: 5,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After Marduk orders the world in Enuma Elish, what do the gods build for him?",
    choices: ["A ship to ride out a flood", "His temple in Babylon, the Esagila", "A golden chariot for the sun", "A tomb for Tiamat"],
    answer: 1,
    explanation: {
      world:
        "In Tablet VI, the grateful gods spend a year making bricks and build Babylon and Marduk's temple, Esagila, where they gather to feast and to praise him. Creation ends with a god enthroned in his house.",
      textSays: "Genesis 1 ends with God resting on the seventh day, which he blesses and makes holy (2:2–3); no building is mentioned.",
      theirEyes: "To a Babylonian, the story proved that Babylon's great temple stood at the centre of the world.",
      debate:
        "Some scholars, such as John Walton, read Genesis 1 as describing the cosmos as God's temple, with his rest as his taking up residence; others question this reading.",
    },
    confidence: "settled",
    references: ["Genesis 2:2–3"],
    sources: [
      scripture,
      { kind: "primary", citation: "Enuma Elish, Tablet VI (trans. W. G. Lambert, Babylonian Creation Myths, 2013)" },
      { kind: "scholarship", citation: "W. G. Lambert, Babylonian Creation Myths (Eisenbrauns, 2013)" },
      { kind: "scholarship", citation: "John H. Walton, The Lost World of Genesis One (IVP, 2009)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "pri-025",
    era: "primeval",
    level: 5,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Philo of Alexandria, writing in Jesus' lifetime, said the two special trees of Eden stood for what?",
    choices: ["Two real trees later found in Babylon", "The Law and the Prophets", "Qualities of the soul, such as piety and wisdom", "The kingdoms of Israel and Judah"],
    answer: 2,
    explanation: {
      textSays: "Genesis 2:9 places the tree of life and the tree of the knowledge of good and evil in the middle of the garden.",
      theirEyes: "In Alexandria's lecture halls, a Jewish teacher could read Eden the way philosophers read Homer: as wisdom wrapped in symbols.",
      tradition: {
        jewish:
          "Philo says no trees of life or knowledge ever grew on earth; Moses spoke allegorically, the tree of life meaning piety and the other moral wisdom (On the Creation 153–154). Josephus, by contrast, retells Eden as history, though he says Moses wrote some things in riddles and allegory (Antiquities, preface 4).",
      },
      debate: "Readers then and now differ over whether Genesis 2 is history, symbolic story or both.",
    },
    confidence: "settled",
    references: ["Genesis 2:9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Philo, On the Creation of the World (De Opificio Mundi) 153–154" },
      { kind: "primary", citation: "Josephus, Antiquities of the Jews, Preface 4 (1.24); 1.1.3–4 (Whiston)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
