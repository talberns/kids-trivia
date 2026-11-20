import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const unitedMonarchy3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "mon-051",
    era: "united-monarchy",
    level: 11,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Jesse's house, Samuel was impressed by the eldest son, Eliab. What did Yahweh tell him he looks at instead?",
    choices: ["The family's wealth", "The heart", "The man's age", "Skill with weapons"],
    answer: 1,
    explanation: {
      textSays:
        "1 Samuel 16:7: “man looks at the outward appearance, but Yahweh looks at the heart.” Seven of Jesse's sons pass before Samuel; the youngest, “keeping the sheep,” is fetched from the fields and anointed (16:10–13).",
      world:
        "Anointing with oil marked a person for office: kings and priests were “anointed ones” (Hebrew mashiach, the root of the word messiah).",
      theirEyes:
        "Jesse's household expected the tall firstborn to be chosen — not the boy who smelled of sheep and had to be called in from the hills.",
    },
    confidence: "settled",
    references: ["1 Samuel 16:6–13"],
    sources: [scripture, { kind: "scholarship", citation: "P. Kyle McCarter Jr., I Samuel (Anchor Bible 8; Doubleday, 1980), on 1 Samuel 16" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-052",
    era: "united-monarchy",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "The women sang, “Saul has slain his thousands, and David his…” what?",
    choices: ["Hundreds", "Ten thousands", "Thousands too", "Giants"],
    answer: 1,
    explanation: {
      textSays:
        "1 Samuel 18:7–8: “Saul has slain his thousands, and David his ten thousands.” Saul is angry: “What can he have more but the kingdom?” The song follows David even into Philistine country: Achish's servants quote it (21:11; 21:12 in Hebrew), and later the Philistine commanders (29:5).",
      world:
        "Pairing “thousands” with “ten thousands” is a standard device of Hebrew poetry (compare Psalm 91:7), and the same word pair appears in the older poetry of Ugarit in Syria. The bigger number in the second line makes the line sound stronger, but Saul hears it as an insult.",
      theirEyes:
        "Women came out of every town with tambourines to greet the returning army, and the song they made up stuck in the king's head for years.",
    },
    confidence: "settled",
    references: ["1 Samuel 18:6–9", "1 Samuel 21:11", "1 Samuel 29:3–5", "Psalm 91:7"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Robert Alter, The Art of Biblical Poetry (Basic Books, 1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-053",
    era: "united-monarchy",
    level: 11,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "After letting David escape through a window, what did Michal lay in his bed to fool Saul's men?",
    choices: ["A sack of grain", "A sleeping servant", "The teraphim, with a pillow of goats' hair", "David's armour"],
    answer: 2,
    explanation: {
      textSays:
        "1 Samuel 19:12–13: “Michal let David down through the window,” then “took the teraphim and laid it in the bed, and put a pillow of goats’ hair at its head and covered it with clothes.” She told the messengers he was sick (19:14).",
      world:
        "Teraphim were household images, linked with family protection and divination. Rachel stole her father Laban's teraphim in Genesis 31:19 and also hid them by a trick.",
      theirEyes:
        "In the dim light of a lamp, a shape under blankets with dark goat hair on the pillow could pass for a sick man — long enough for David to get away.",
      debate:
        "Scholars debate what teraphim looked like. This scene suggests something near human size, while Rachel hid hers under a camel saddle, so they may have varied.",
    },
    confidence: "settled",
    references: ["1 Samuel 19:11–17", "Genesis 31:19"],
    sources: [
      scripture,
      { kind: "reference", citation: "Karel van der Toorn and Theodore J. Lewis, “Teraphim,” in Dictionary of Deities and Demons in the Bible (2nd ed., Brill/Eerdmans, 1999)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-054",
    era: "united-monarchy",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "How did Jonathan secretly signal David, hiding in a field, that Saul meant to kill him?",
    choices: [
      "By lighting a fire on a hilltop",
      "By sending a servant with a sealed letter",
      "By blowing a ram's horn three times",
      "By shooting arrows and calling to a boy that they were beyond him",
    ],
    answer: 3,
    explanation: {
      textSays:
        "Jonathan agreed a code: if he told the boy “the arrows are beyond you,” David must flee (1 Samuel 20:20–22). He shot, then “cried after the boy… ‘Isn’t the arrow beyond you?’” (20:37). Earlier the two had made a covenant, and Jonathan gave David his robe, sword, bow and sash (18:3–4).",
      world:
        "Archery practice outside a town drew no attention, so an ordinary shout to an arrow-boy could carry a secret message in plain sight.",
      theirEyes:
        "The boy simply ran after arrows; only the man hiding by the stone heard a warning — and a goodbye.",
    },
    confidence: "settled",
    references: ["1 Samuel 18:3–4", "1 Samuel 20:18–42"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-055",
    era: "united-monarchy",
    level: 11,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Fleeing Saul, David asked the priest Ahimelech at Nob for food. What did he receive?",
    choices: ["The holy “show bread” from before Yahweh", "Meat from a peace offering", "Manna kept beside the Ark", "Unleavened Passover bread"],
    answer: 0,
    explanation: {
      textSays:
        "Ahimelech had “no common bread, but there is holy bread,” so he gave David “the show bread that was taken from before Yahweh” (1 Samuel 21:4–6; 21:5–7 in Hebrew). Leviticus 24:9 reserves this bread for Aaron and his sons.",
      world:
        "The “bread of the Presence” was a set of twelve loaves laid out before God and replaced each Sabbath (Leviticus 24:5–8). Old loaves were eaten by priests.",
      theirEyes:
        "A priest on a quiet day had only sacred loaves to offer a hungry fugitive — and he chose to give them.",
      tradition: {
        christian:
          "In Mark 2:25–26, Jesus cites this scene when his disciples are criticised for picking grain on the Sabbath. Mark says it happened “at the time of Abiathar the high priest”; 1 Samuel names his father Ahimelech, a difference commentators explain in several ways.",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 21:1–6", "Leviticus 24:5–9", "Mark 2:23–26"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "mon-056",
    era: "united-monarchy",
    level: 12,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Which servant of Saul, a foreigner, reported David's visit to Nob and then killed its priests?",
    choices: ["Ziba the steward", "Doeg the Edomite", "Uriah the Hittite", "Ittai the Gittite"],
    answer: 1,
    explanation: {
      textSays:
        "Doeg the Edomite, “the best of the herdsmen who belonged to Saul,” saw David at Nob (1 Samuel 21:7; 21:8 in Hebrew). When Saul's own guards refused to strike the priests, Doeg killed eighty-five of them (22:17–18). Only Ahimelech's son Abiathar escaped, joining David (22:20).",
      world:
        "Edom lay south-east of the Dead Sea. Kings regularly hired foreigners for their households and guards; David later had Cherethites, Pelethites and Gittites in his service.",
      theirEyes:
        "Saul's own men would not raise a sword against the priests of Yahweh; it took an outsider to do it.",
      tradition: {
        shared: "The heading of Psalm 52 links that psalm to this moment: “when Doeg the Edomite came and told Saul, ‘David has come to Ahimelech’s house.’”",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 21:7", "1 Samuel 22:9–23", "Psalm 52"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-057",
    era: "united-monarchy",
    level: 12,
    category: "neighbours",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Recognised at the court of Achish, king of Gath, how did David get himself sent away unharmed?",
    choices: ["He bribed the guards", "He pretended to be insane", "He disguised himself as a woman", "He hid in a cart of hay"],
    answer: 1,
    explanation: {
      textSays:
        "Recognised as the hero of the “ten thousands” song, David “pretended to be insane,” scribbling on the gate doors and letting spittle run down his beard (1 Samuel 21:10–13; 21:11–14 in Hebrew). Achish asked, “Do I lack madmen?” (21:15; 21:16 in Hebrew).",
      world:
        "Gath (Tell es-Safi) was one of the five main Philistine cities. Later David returned to Achish and lived in Philistine territory for “a full year and four months” (1 Samuel 27:7).",
      theirEyes: "A drooling man clawing at the gate was easy to laugh at and send away — which was exactly the point.",
      debate:
        "The heading of Psalm 34 links that psalm to this escape but names the king “Abimelech.” Many scholars think Abimelech was a royal title or a scribal slip.",
    },
    confidence: "settled",
    references: ["1 Samuel 21:10–15", "1 Samuel 27:7", "Psalm 34"],
    sources: [scripture, { kind: "scholarship", citation: "P. Kyle McCarter Jr., I Samuel (Anchor Bible 8; Doubleday, 1980), on 1 Samuel 21:11–16" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-058",
    era: "united-monarchy",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At the cave of Adullam, about how many men gathered around David, according to 1 Samuel 22?",
    choices: ["Forty", "About four hundred", "Twelve", "About four thousand"],
    answer: 1,
    explanation: {
      textSays:
        "“Everyone who was in distress, everyone who was in debt, and everyone who was discontented gathered themselves to him… There were with him about four hundred men” (1 Samuel 22:2). David then asked the king of Moab to shelter his parents (22:3–4).",
      world:
        "Adullam lay in the Judean lowlands (Shephelah), whose limestone hills are full of caves, a natural refuge for outlaws.",
      theirEyes: "Debtors running from creditors and men with nothing to lose found a leader in a cave — the start of David's private army.",
      tradition: {
        shared: "Sending his parents to Moab fits the Book of Ruth, which makes Ruth the Moabite the great-grandmother of David (Ruth 4:17).",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 22:1–4", "Ruth 4:17"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-059",
    era: "united-monarchy",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: in a cave near En-gedi, David secretly cut off the edge of Saul's robe, and then felt guilty about it.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Saul entered a cave “on the rocks of the wild goats,” not knowing David's men were inside. David “cut off the skirt of Saul’s robe secretly,” then “David’s heart struck him” (1 Samuel 24:2–5; 24:3–6 in Hebrew). He refused to harm “Yahweh’s anointed” (24:6).",
      world:
        "En-gedi is a spring-fed oasis above the Dead Sea; Nubian ibex, the wild goats of the story, still live among its cliffs.",
      theirEyes:
        "David's men whispered that God had handed him his enemy; instead he crept back with nothing but a scrap of cloth.",
      tradition: {
        shared: "The heading of Psalm 57 places it “when he fled from Saul, in the cave.”",
      },
    },
    confidence: "settled",
    references: ["1 Samuel 24:1–22", "Psalm 57"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-060",
    era: "united-monarchy",
    level: 12,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Abigail tells David that her husband Nabal lives up to his name. What does she say the name means?",
    choices: ["Folly (a fool)", "Rich man", "Shepherd", "Generous"],
    answer: 0,
    explanation: {
      textSays:
        "1 Samuel 25:25: “as his name is, so is he. Nabal is his name, and folly is with him.” Nabal had refused David's men food at shearing time; Abigail rode out with loaves, wine, sheep, raisins and fig cakes and stopped David's revenge (25:18–35).",
      world:
        "Sheep-shearing was a time of feasting and generosity. Hebrew nabal means a fool in the moral sense, someone who acts shamefully.",
      theirEyes:
        "A herdsman at Carmel watched his mistress load the donkeys in a hurry while her husband feasted — she alone saw the armed men coming.",
    },
    confidence: "settled",
    references: ["1 Samuel 25:2–42"],
    sources: [
      scripture,
      { kind: "reference", citation: "Brown, Driver and Briggs, A Hebrew and English Lexicon of the Old Testament (Oxford, 1907), s.v. nabal" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "mon-061",
    era: "united-monarchy",
    level: 13,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Before ruling all Israel from Jerusalem, how long did David reign over Judah from Hebron?",
    choices: ["Forty days", "Three years", "Seven years and six months", "Twenty years"],
    answer: 2,
    explanation: {
      textSays:
        "“In Hebron he reigned over Judah seven years and six months, and in Jerusalem he reigned thirty-three years” (2 Samuel 5:5; also 2:11). Meanwhile Abner made Saul's son Ishbosheth king over the north from Mahanaim, east of the Jordan (2:8–10); Samuel gives Ishbosheth a reign of only two years (2:10).",
      world:
        "Hebron was Judah's chief town and linked to Abraham's burial cave. 1 Chronicles 8:33 calls Saul's son Eshbaal; many scholars think “-bosheth” (“shame”) later replaced “-baal” (“lord”) in Samuel.",
      theirEyes: "For a time there were two kings: one in Judah's hill country and one across the Jordan, each with his own army.",
    },
    confidence: "settled",
    references: ["2 Samuel 2:1–11", "2 Samuel 5:1–5", "1 Chronicles 8:33"],
    sources: [scripture, { kind: "scholarship", citation: "P. Kyle McCarter Jr., II Samuel (Anchor Bible 9; Doubleday, 1984), on 2 Samuel 2:8" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-062",
    era: "united-monarchy",
    level: 13,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: 2 Samuel says David ordered Joab to kill Saul's general Abner.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "Abner had come to Hebron to bring the northern tribes over to David. Joab took him aside in the gate and killed him “for the blood of Asahel his brother,” whom Abner had killed in battle (2 Samuel 3:27, 30). David declared, “I and my kingdom are guiltless” (3:28), and lamented, “Should Abner die as a fool dies?” (3:33).",
      world: "Blood vengeance by a victim's next of kin was a recognised custom, which the laws on cities of refuge tried to limit (Numbers 35).",
      theirEyes: "The people watched their king walk behind Abner's bier weeping, and were satisfied it was not his doing (3:31–37).",
      debate:
        "Some historians read the story as royal apologetic, written to clear David of deaths that helped him to the throne.",
    },
    confidence: "settled",
    references: ["2 Samuel 2:18–23", "2 Samuel 3:22–39", "Numbers 35:9–28"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "P. Kyle McCarter Jr., “The Apology of David,” Journal of Biblical Literature 99 (1980)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-063",
    era: "united-monarchy",
    level: 13,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "How did Jonathan's son Mephibosheth become lame, according to 2 Samuel 4?",
    choices: [
      "He was wounded at Mount Gilboa",
      "His nurse dropped him as she fled after news of Saul's death",
      "He was born that way",
      "Ishbosheth's men attacked him",
    ],
    answer: 1,
    explanation: {
      textSays:
        "He was five when the news came from Jezreel; “his nurse picked him up and fled. As she hurried to flee, he fell and became lame” (2 Samuel 4:4). Years later David, for Jonathan's sake, restored Saul's land to him and said, “You will eat bread at my table continually” (9:7).",
      world:
        "1 Chronicles 8:34 calls him Merib-baal. Eating at the king's table was an honour; many commentators add that it also kept a possible rival from Saul's family close at hand.",
      theirEyes: "A palace servant watched a lame man from the fallen royal house take his seat among the king's own sons.",
    },
    confidence: "settled",
    references: ["2 Samuel 4:4", "2 Samuel 9:1–13", "1 Chronicles 8:34"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-064",
    era: "united-monarchy",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "David wanted to build God a house. In Nathan's oracle, what does God promise to build for David instead?",
    choices: ["A palace of cedar", "A house — a lasting dynasty", "A city wall around Jerusalem", "A tomb in Bethlehem"],
    answer: 1,
    explanation: {
      textSays:
        "God asks, “Should you build me a house for me to dwell in?” (2 Samuel 7:5), then turns the word around: “Yahweh will make you a house” (7:11). “Your house and your kingdom will be made sure forever” (7:16).",
      world:
        "Hebrew bayit means both a building and a family line, and the chapter plays on both. Kings across the region boasted of building temples for their gods; here the god promises to build the king's family.",
      theirEyes:
        "The king offered the prophet a building project — and heard in reply a promise about his grandchildren's grandchildren.",
      tradition: {
        shared: "Psalm 89 retells the promise as a covenant sworn to David (89:3–4, 28–37; 89:4–5, 29–38 in Hebrew) and then laments that it seems broken (89:38–51).",
      },
    },
    confidence: "settled",
    references: ["2 Samuel 7:1–17", "Psalm 89:3–4", "Psalm 89:28–51"],
    sources: [scripture, { kind: "scholarship", citation: "P. Kyle McCarter Jr., II Samuel (Anchor Bible 9; Doubleday, 1984), on 2 Samuel 7" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-065",
    era: "united-monarchy",
    level: 13,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "The Dead Sea Scroll 4QFlorilegium quotes Nathan's promise to David. Whom does it say the promise is about?",
    choices: [
      "The Persian king Cyrus",
      "Judas Maccabeus",
      "The “Branch of David,” who will arise at the end of days",
      "The high priest of Jerusalem",
    ],
    answer: 2,
    explanation: {
      textSays:
        "2 Samuel 7:12–14 promises David's offspring an everlasting throne: “I will be his father, and he will be my son.”",
      world:
        "4QFlorilegium (4Q174), from Qumran Cave 4, quotes 2 Samuel 7:11–14 and explains that the promised offspring is the “Branch of David,” who will arise with the Interpreter of the Law at the end of days (wording as in standard English translations of the scroll). It then quotes Amos 9:11 on raising up David's fallen tent.",
      theirEyes:
        "Copying old promises in a desert settlement, the writer read them as news about his own community's future, not only about Solomon.",
      tradition: {
        jewish: "This scroll shows that in the Second Temple period some Jews already read Nathan's oracle as a promise of a coming messiah from David's line.",
        christian:
          "The New Testament applies the same verse to Jesus (Hebrews 1:5: “I will be to him a Father”), and Acts 15:16 also quotes Amos 9:11.",
      },
    },
    confidence: "settled",
    references: ["2 Samuel 7:11–14", "Amos 9:11", "Hebrews 1:5", "Acts 15:16"],
    sources: [
      scripture,
      { kind: "primary", citation: "4QFlorilegium (4Q174), frags. 1–3, col. i, lines 10–13 (numbering of Allegro, DJD V)" },
      { kind: "scholarship", citation: "John M. Allegro, Qumrân Cave 4.I (4Q158–4Q186), Discoveries in the Judaean Desert V (Clarendon, 1968)" },
      { kind: "scholarship", citation: "George J. Brooke, Exegesis at Qumran: 4QFlorilegium in Its Jewish Context (JSOT Press, 1985)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "mon-066",
    era: "united-monarchy",
    level: 14,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Nathan told David of a rich man who took a poor man's only ewe lamb. David was furious. What did Nathan answer?",
    choices: ["“You are the man!”", "“The lamb is Israel.”", "“Forgive him, my lord.”", "“The rich man is Saul.”"],
    answer: 0,
    explanation: {
      textSays:
        "The poor man's lamb “was like a daughter to him” (2 Samuel 12:3). David declared that the rich man deserved to die and must repay fourfold; “Nathan said to David, ‘You are the man!’” (12:5–7). The parable exposed David's taking of Bathsheba and the death of her husband Uriah (12:9).",
      world: "Prophets and wise counsellors sometimes used a story to make a king judge himself before he realised it.",
      theirEyes: "Courtiers held their breath: a prophet had just accused the king to his face, and the king had pronounced the sentence himself.",
      tradition: {
        shared: "The heading of Psalm 51, a famous prayer of repentance, places it “when Nathan the prophet came to him.”",
      },
    },
    confidence: "settled",
    references: ["2 Samuel 12:1–13", "Psalm 51"],
    sources: [scripture],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-067",
    era: "united-monarchy",
    level: 14,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Fleeing Absalom's revolt, David crossed the Kidron and climbed which hill, weeping and barefoot?",
    choices: ["Mount Gilboa", "Mount Carmel", "The Mount of Olives", "Mount Gerizim"],
    answer: 2,
    explanation: {
      textSays:
        "David “passed over the brook Kidron” (2 Samuel 15:23), then “went up by the ascent of the Mount of Olives, and wept as he went up; and he had his head covered and went barefoot” (15:30). At the top, “where God was worshiped,” he met Hushai (15:32).",
      world: "The Mount of Olives rises just east of Jerusalem across the Kidron Valley, on the road down to Jericho and the Jordan.",
      theirEyes: "Crowds wept by the roadside as their king climbed out of his own city on foot, like a mourner.",
      tradition: {
        christian:
          "Christian commentators, among them Raymond E. Brown, note that the Gospels have Jesus take the same route on the night of his arrest, crossing the Kidron (John 18:1) to the Mount of Olives (Luke 22:39).",
      },
    },
    confidence: "settled",
    references: ["2 Samuel 15:23–32", "John 18:1", "Luke 22:39"],
    sources: [scripture, { kind: "scholarship", citation: "Raymond E. Brown, The Death of the Messiah (2 vols.; Doubleday, 1994)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-068",
    era: "united-monarchy",
    level: 14,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Which friend did David send back to Jerusalem to defeat Ahithophel's advice to Absalom?",
    choices: ["Shimei son of Gera", "Hushai the Archite", "Barzillai the Gileadite", "Ziba, Saul's steward"],
    answer: 1,
    explanation: {
      textSays:
        "Hushai met David “with his tunic torn and earth on his head” (2 Samuel 15:32). David told him to return and pretend to serve Absalom: “then you will defeat for me the counsel of Ahithophel” (15:34). Absalom preferred Hushai's plan, “For Yahweh had ordained to defeat the good counsel of Ahithophel” (17:14).",
      world:
        "Hushai is called “David’s friend” (15:37), probably a court title, like “friend of the king” in Egypt. Shimei cursed David, Ziba brought him supplies and Barzillai fed his army.",
      theirEyes: "In Absalom's council, one adviser argued for gathering all Israel first — and every day of delay gave David time to escape.",
    },
    confidence: "settled",
    references: ["2 Samuel 15:32–37", "2 Samuel 17:1–16"],
    sources: [scripture, { kind: "scholarship", citation: "P. Kyle McCarter Jr., II Samuel (Anchor Bible 9; Doubleday, 1984), on 2 Samuel 15:37" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-069",
    era: "united-monarchy",
    level: 14,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: 2 Samuel says Ahithophel's advice was regarded as if someone had consulted God.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "2 Samuel 16:23: his counsel “was as if a man inquired at the inner sanctuary of God,” both with David and with Absalom. When Absalom chose Hushai's plan, Ahithophel went home, “set his house in order,” and took his own life (17:23).",
      world:
        "Kings kept counsellors for war and policy. Ahithophel saw that a delay would give David time to regroup, which is what happened.",
      theirEyes:
        "When the wisest man in the court saddled his donkey and rode home, people knew he believed the rebellion was already lost.",
      tradition: {
        christian: "Christian interpreters, among them Raymond E. Brown, compare Ahithophel, a trusted adviser who turned traitor and hanged himself, with Judas (Matthew 27:5).",
      },
    },
    confidence: "settled",
    references: ["2 Samuel 15:31", "2 Samuel 16:23", "2 Samuel 17:23", "Matthew 27:5"],
    sources: [scripture, { kind: "scholarship", citation: "Raymond E. Brown, The Death of the Messiah (2 vols.; Doubleday, 1994)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-070",
    era: "united-monarchy",
    level: 14,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "How did the revolt of Sheba son of Bichri end at the town of Abel Beth-maacah?",
    choices: [
      "Sheba surrendered and was pardoned",
      "A wise woman persuaded the townspeople to hand Sheba over",
      "An earthquake broke the town walls",
      "David arrived and negotiated peace",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Sheba raised the cry, “We have no portion in David… Every man to his tents, Israel!” (2 Samuel 20:1). Joab besieged him in Abel, until “a wise woman” bargained from the wall; the townspeople executed Sheba and threw his head out to Joab, and the siege ended (20:16–22).",
      world:
        "Tel Abel Beth Maacah, in the far north of Israel near the Lebanese border, has been excavated since 2013 by the Hebrew University and Azusa Pacific University.",
      theirEyes: "A town about to be destroyed was saved by one woman willing to speak to the general from the wall.",
      tradition: {
        shared: "Sheba's cry is closely echoed when the northern tribes break away from David's grandson Rehoboam (1 Kings 12:16).",
      },
    },
    confidence: "settled",
    references: ["2 Samuel 20:1–22", "1 Kings 12:16"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Tel Abel Beth Maacah excavations (Hebrew University of Jerusalem and Azusa Pacific University, from 2013), directed by Nava Panitz-Cohen and Robert A. Mullins" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "mon-071",
    era: "united-monarchy",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: 1 Chronicles retells the story of David and Bathsheba.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "1 Chronicles 20:1 follows 2 Samuel 11:1: Joab besieges Rabbah, “But David stayed at Jerusalem.” It then goes straight on to the fall of the city (20:1b–3, parallel to 2 Samuel 12:26–31), leaving out 2 Samuel 11:2–12:25. Bathsheba appears only in a family list, as “Bathshua the daughter of Ammiel” (3:5).",
      world:
        "Chronicles, probably written in the Persian period, used Samuel and Kings as sources but chose its material. It also leaves out Absalom's revolt.",
      theirEyes:
        "For a Jerusalem community rebuilding its Temple, the David that mattered was the founder of its worship, not the king of the court scandals.",
      debate:
        "Scholars debate why: to idealise David, or simply because the Chronicler's readers already knew Samuel and he focused on the Temple and its worship.",
    },
    confidence: "settled",
    references: ["1 Chronicles 20:1–3", "2 Samuel 11:1", "2 Samuel 12:26–31", "1 Chronicles 3:5"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Sara Japhet, I & II Chronicles (Old Testament Library; Westminster John Knox, 1993)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-072",
    era: "united-monarchy",
    level: 15,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "According to 1 Chronicles 22, why was David not allowed to build the Temple?",
    choices: [
      "He was not from a priestly family",
      "He had shed much blood in great wars",
      "The prophet Nathan had died",
      "Jerusalem was not yet captured",
    ],
    answer: 1,
    explanation: {
      textSays:
        "David tells Solomon that God said, “You have shed blood abundantly and have made great wars. You shall not build a house to my name” (1 Chronicles 22:8; also 28:3). The son would be “a man of peace” (22:9).",
      world:
        "Chronicles makes David the Temple's true planner: he gathers materials (22:2–5) and hands Solomon the plans, “in writing from Yahweh’s hand” (28:11–19). 1 Kings 5:3 (5:17 in Hebrew) gives a simpler reason: the wars around David on every side.",
      theirEyes: "The old warrior king stockpiled stone, iron and cedar for a house he would never see finished.",
      tradition: {
        shared: "The name Solomon (Shelomoh) sounds like shalom, “peace,” and 22:9 plays on it.",
      },
    },
    confidence: "settled",
    references: ["1 Chronicles 22:2–10", "1 Chronicles 28:2–19", "1 Kings 5:3"],
    sources: [scripture, { kind: "scholarship", citation: "Sara Japhet, I & II Chronicles (Old Testament Library; Westminster John Knox, 1993)" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-073",
    era: "united-monarchy",
    level: 15,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "1 Chronicles 24 says David divided the priests into divisions chosen by lot. How many?",
    choices: ["Seven", "Twelve", "Seventy", "Twenty-four"],
    answer: 3,
    explanation: {
      textSays:
        "The lots run from “the first lot came out to Jehoiarib” to “the twenty-fourth to Maaziah” (1 Chronicles 24:7–18); “the eighth” was Abijah (24:10).",
      world:
        "The divisions were still serving in the first century CE: Luke 1:5 introduces Zacharias, father of John the Baptist, as “of the priestly division of Abijah.”",
      theirEyes: "A village priest might serve in the Temple only a few weeks a year, when his division's turn came round.",
      tradition: {
        jewish:
          "Josephus says David divided the priests into twenty-four courses that served for eight days, from Sabbath to Sabbath (Antiquities 7.14.7), and proudly notes that his own family belonged to the first course (Life 1).",
      },
      debate: "Many historians think the full 24-division system took shape after the Exile, and that Chronicles credits it to David.",
    },
    confidence: "settled",
    references: ["1 Chronicles 24:1–19", "Luke 1:5–9"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 7.14.7; Life 1" },
      { kind: "scholarship", citation: "Sara Japhet, I & II Chronicles (Old Testament Library; Westminster John Knox, 1993), on 1 Chronicles 24" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-074",
    era: "united-monarchy",
    level: 15,
    category: "tradition",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Chronicles' version of Nathan's oracle keeps the warning that God will punish David's son “with the rod of men.”",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "2 Samuel 7:14 says, “I will be his father, and he will be my son. If he commits iniquity, I will chasten him with the rod of men.” 1 Chronicles 17:13 keeps the first sentence but drops the warning. It also changes “your house and your kingdom” (2 Samuel 7:16) to “my house and… my kingdom” (1 Chronicles 17:14).",
      world: "Comparing parallel passages line by line is how scholars uncover the Chronicler's own emphases.",
      theirEyes: "Readers after the Exile, with no king on the throne, heard the promise as God's own kingdom waiting for a son of David.",
      debate: "Scholars debate whether the Chronicler softened the warning to idealise Solomon, or to point to a future ideal king.",
    },
    confidence: "settled",
    references: ["2 Samuel 7:14–16", "1 Chronicles 17:13–14"],
    sources: [scripture, { kind: "scholarship", citation: "Sara Japhet, I & II Chronicles (Old Testament Library; Westminster John Knox, 1993), on 1 Chronicles 17" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "mon-075",
    era: "united-monarchy",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Achish of Gath gave David the town of Ziklag. Which site did Yosef Garfinkel's team propose as Ziklag in 2019?",
    choices: ["Khirbet al-Ra'i", "Tel Megiddo", "Tel Arad", "Tel Dan"],
    answer: 0,
    explanation: {
      textSays:
        "“Then Achish gave him Ziklag that day: therefore Ziklag belongs to the kings of Judah to this day” (1 Samuel 27:6). Amalekites later raided and burned it (30:1).",
      world:
        "Khirbet al-Ra'i lies in the Judean lowlands near Kiryat Gat; its excavators announced the Ziklag proposal in 2019. They report a Philistine-period settlement followed by a rural settlement destroyed by fire, which they date to around David's time.",
      theirEyes: "A Philistine king handing a border town to a Hebrew warlord: useful for both, as long as each thought he was using the other.",
      debate:
        "The answer is what the excavators proposed; the identification itself is disputed. Other proposed sites for Ziklag include Tel Sera' and Tel Halif, and no inscription names the town.",
    },
    confidence: "settled",
    references: ["1 Samuel 27:1–7", "1 Samuel 30:1"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Khirbet al-Ra'i excavations (Hebrew University of Jerusalem and Israel Antiquities Authority), led by Yosef Garfinkel and Saar Ganor; Ziklag identification announced July 2019" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
