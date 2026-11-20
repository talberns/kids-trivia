import type { QuestionInput } from "../schema";

const scripture = { kind: "scripture", citation: "Bible — quotations from the World English Bible (public domain)" } as const;

export const hellenistic3: QuestionInput[] = [
  // ───────────── Level 11 ─────────────
  {
    id: "hel-051",
    era: "hellenistic",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 2 Maccabees, how did Menelaus take the high priesthood away from Jason?",
    choices: [
      "He was elected by the priests in the Temple",
      "He outbid Jason by three hundred talents of silver",
      "He inherited it when his father Onias died",
      "He won it by defeating Jason in battle",
    ],
    answer: 1,
    explanation: {
      textSays:
        "Jason sent Menelaus to carry money to Antiochus IV, but Menelaus “secured the high priesthood for himself, outbidding Jason by three hundred talents of silver” (2 Maccabees 4:24). Jason, “who had supplanted his own brother,” was himself driven out “into the country of the Ammonites” (4:26).",
      world:
        "This happened around 172 BCE, three years after Jason bought the office from the same king. The hereditary high priesthood had become something a Seleucid king sold to the highest bidder.",
      theirEyes:
        "Jerusalem's priests watched the holiest office in Israel go to auction twice in three years.",
      debate:
        "2 Maccabees calls Menelaus the brother of Simon, whom it places in the tribe of Benjamin (3:4; 4:23), which would mean he was not a priest; some ancient versions read Bilgah, a priestly family, instead. Josephus makes Menelaus a brother of Jason (Antiquities 12.5.1).",
    },
    confidence: "settled",
    references: ["2 Maccabees 4:23–26", "2 Maccabees 3:4"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.5.1" },
      { kind: "scholarship", citation: "James C. VanderKam, From Joshua to Caiaphas: High Priests after the Exile (Fortress, 2004)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-052",
    era: "hellenistic",
    level: 11,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "In 2 Maccabees 6, what did old acquaintances privately urge the aged scribe Eleazar to do to save his life?",
    choices: [
      "Flee to Egypt before the king's officers arrived",
      "Pay a fine to the king in place of eating",
      "Bring his own meat and only pretend to eat the sacrificial pork",
      "Let a younger man eat the pork on his behalf",
    ],
    answer: 2,
    explanation: {
      textSays:
        "Old acquaintances in charge of the feast “privately implored him to bring flesh of his own providing… and to make as if he did eat of the flesh from the sacrifice” (2 Maccabees 6:21). He refused, lest the young think “Eleazar, the man of ninety years, had gone over to an alien religion” (6:24).",
      world:
        "The story is set in Antiochus IV's persecution of 167 BCE, just before the martyrdom of the seven brothers (chapter 7).",
      theirEyes:
        "Offered a quiet way out, the old man chose death rather than let the young think he had given in.",
      tradition: {
        jewish:
          "4 Maccabees, a Jewish work probably of the 1st century CE, retells his death at length and calls him a priest (4 Maccabees 5–7).",
        christian:
          "Origen held up Eleazar and the seven brothers as models for Christians facing persecution (Exhortation to Martyrdom 22–27).",
      },
    },
    confidence: "settled",
    references: ["2 Maccabees 6:18–31"],
    sources: [
      scripture,
      { kind: "primary", citation: "4 Maccabees 5–7" },
      { kind: "primary", citation: "Origen, Exhortation to Martyrdom 22–27" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-053",
    era: "hellenistic",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At the ascent of Beth-horon, Judah's small, hungry band defeated a Seleucid army led by which commander?",
    choices: ["Holofernes", "Heliodorus", "Gorgias", "Seron"],
    answer: 3,
    explanation: {
      textSays:
        "1 Maccabees 3:13–24: Seron, “the commander of the army of Syria,” hoped to “make myself a name.” Judah's men complained they were few and had eaten nothing that day. Judah answered: “With heaven it is all one, to save by many or by few” (3:18). They routed Seron down the descent of Bethhoron. Just before, Judah had killed Apollonius and “took Apollonius’ sword, and he fought with it all his days” (3:12).",
      world:
        "Beth-horon guarded the main road climbing from the coastal plain to Jerusalem. Its narrow ascent had seen battles since Joshua's day (Joshua 10:10–11), and a column strung out on it was easy to ambush.",
      theirEyes:
        "Exhausted, fasting farmers looked down the pass at a royal army and heard their leader say numbers did not decide battles.",
    },
    confidence: "settled",
    references: ["1 Maccabees 3:10–24", "Joshua 10:10–11"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.7.1" },
      { kind: "scholarship", citation: "Bezalel Bar-Kochva, Judas Maccabaeus: The Jewish Struggle against the Seleucids (Cambridge University Press, 1989)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-054",
    era: "hellenistic",
    level: 11,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Emmaus, Gorgias led a night raid to surprise Judah's camp. What did Judah do?",
    choices: [
      "Attacked the king's main camp at Emmaus while Gorgias was away",
      "Hid his army in caves until Gorgias went home",
      "Surrendered, then escaped by night to Modein",
      "Marched on Jerusalem to besiege the citadel",
    ],
    answer: 0,
    explanation: {
      textSays:
        "Gorgias took five thousand infantry and a thousand cavalry out at night (1 Maccabees 4:1). Judah slipped away to strike the army at Emmaus “while the forces were still dispersed from the camp” (4:4). Gorgias found Judah's camp empty and searched the mountains. By the time his men looked down, the Jews were burning the royal camp, and they fled (4:5–22).",
      world:
        "The battle took place in 165 BCE on the plain at the foot of the Judean hills. Merchants had even come to the Seleucid camp with silver, gold and fetters, expecting to buy Jewish captives as slaves (3:41).",
      theirEyes:
        "Slave-dealers who had come with chains to buy prisoners ended up running for their lives with everyone else.",
    },
    confidence: "settled",
    references: ["1 Maccabees 3:38–41", "1 Maccabees 4:1–25"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.7.4" },
      { kind: "scholarship", citation: "Bezalel Bar-Kochva, Judas Maccabaeus: The Jewish Struggle against the Seleucids (Cambridge University Press, 1989)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-055",
    era: "hellenistic",
    level: 11,
    category: "faith-practice",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Before Emmaus, Judah sent home men who were building houses, newly betrothed, planting vineyards or afraid. Which book's law was he following?",
    choices: ["Leviticus", "Genesis", "Ezra", "Deuteronomy"],
    answer: 3,
    explanation: {
      textSays:
        "1 Maccabees 3:56: Judah told “those who were building houses, were betrothing wives, were planting vineyards, and were fearful, that they should return, each man to his own house, according to the law.” Deuteronomy 20:5–8 lists the same four exemptions, ending: “What man is there who is fearful and faint-hearted? Let him go and return to his house.”",
      world:
        "Beforehand they gathered at Mizpeh, “for in Mizpeh there used to be a place of prayer for Israel” (1 Maccabees 3:46), fasted, wore sackcloth and opened the book of the law (3:47–48).",
      theirEyes:
        "With a huge army camped nearby, a young bridegroom heard Judah tell him to go home, because the Law said so.",
      tradition: {
        shared:
          "Mizpah was where Samuel had gathered Israel to pray and fast before a victory over the Philistines (1 Samuel 7:5–11); the writer seems to invite the comparison.",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 3:46–56", "Deuteronomy 20:5–8", "1 Samuel 7:5–11"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Jonathan A. Goldstein, I Maccabees (Anchor Bible 41, 1976), on 3:46–56" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 12 ─────────────
  {
    id: "hel-056",
    era: "hellenistic",
    level: 12,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Lysias' army, coming up through Idumea, was beaten near which stronghold south of Jerusalem, which Judah then fortified?",
    choices: ["Joppa", "Beth-zur", "Jericho", "Dor"],
    answer: 1,
    explanation: {
      textSays:
        "1 Maccabees 4:28–35: Lysias came with a large army “into Idumaea and encamped at Bethsura,” and Judah met him with ten thousand men; about five thousand of Lysias' men fell and he withdrew to Antioch. After rededicating the Temple, Judah “fortified Bethsura,” “that the people might have a stronghold near Idumaea” (4:61).",
      world:
        "Beth-zur sits on the ridge road between Jerusalem and Hebron, near the border with Idumea. Excavations there in 1931 and 1957 uncovered a Hellenistic fortress and many coins of the period.",
      theirEyes:
        "Whoever held this hilltop fort controlled the road from the south into Judea's heartland.",
      debate:
        "2 Maccabees 11 tells of a campaign by Lysias at Beth-zur after Antiochus IV's death, not before the rededication; historians debate the order and whether 1 and 2 Maccabees describe the same campaign.",
    },
    confidence: "settled",
    references: ["1 Maccabees 4:26–35", "1 Maccabees 4:61", "2 Maccabees 11:1–12"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.7.5" },
      { kind: "archaeology", citation: "Ovid R. Sellers, The Citadel of Beth-zur (Westminster Press, 1933)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-057",
    era: "hellenistic",
    level: 12,
    category: "tradition",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "Judah's victory over Nicanor was to be celebrated every 13 Adar. According to 2 Maccabees, that day falls just before which day?",
    choices: ["The Day of Atonement", "The day of Mordecai", "The first day of Passover", "The Feast of Weeks"],
    answer: 1,
    explanation: {
      textSays:
        "1 Maccabees 7:43–49: Nicanor fell “On the thirteenth day of the month Adar,” and the people “ordained to keep this day year by year.” 2 Maccabees 15:36 dates it to the thirteenth of Adar, “the day before the day of Mordecai.”",
      world:
        "The battle was fought at Adasa in 161 BCE. Nicanor's head and his right hand “which he had stretched out so arrogantly” were hung up beside Jerusalem (7:47). The “day of Mordecai” is Purim (Esther 9).",
      theirEyes:
        "Mid-Adar now held two feasts in a row: Esther's deliverance and Jerusalem's own.",
      tradition: {
        jewish:
          "Josephus says the Jews celebrated the victory yearly (Antiquities 12.10.5). The day is also listed in Megillat Ta'anit, an Aramaic list of festive days usually dated to the 1st century CE, before the Temple's fall (its Hebrew commentary is much later).",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 7:39–49", "2 Maccabees 15:30–36"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.10.5" },
      { kind: "primary", citation: "Megillat Ta'anit (Aramaic list, usually dated 1st century CE), entry for 13 Adar" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-058",
    era: "hellenistic",
    level: 12,
    category: "world",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: 1 Maccabees says the Seleucids gave their war elephants the juice of grapes and mulberries before battle.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "Before the battle of Bethzacharias, “They offered the elephants the juice of grapes and mulberries, that they might prepare them for the battle” (1 Maccabees 6:34). The king's army had “thirty-two elephants trained for war” (6:30), each with a wooden tower holding four fighters “beside his Indian driver” (6:37).",
      world:
        "Hellenistic kings used war elephants as living tanks. The Seleucids got theirs from India; the Peace of Apamea (188 BCE) had ordered them to give their elephants up, but they still had them in the 160s. Scholars debate whether the juice was meant to excite the animals or simply to feed them before the fight.",
      theirEyes:
        "Judean farmers had never seen such beasts, towering in armour as the sun flashed on gold and bronze shields.",
    },
    confidence: "settled",
    references: ["1 Maccabees 6:28–39"],
    sources: [
      scripture,
      { kind: "primary", citation: "Polybius, Histories 21.42 and Livy 38.38 (terms of the Peace of Apamea)" },
      { kind: "scholarship", citation: "Bezalel Bar-Kochva, Judas Maccabaeus: The Jewish Struggle against the Seleucids (Cambridge University Press, 1989)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-059",
    era: "hellenistic",
    level: 12,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "At Beth-zechariah, Judah's brother Eleazar Avaran attacked one elephant in particular. Why?",
    choices: [
      "It carried the army's war chest",
      "It was the only elephant without a tower",
      "The king seemed to be riding on it",
      "It had trampled his brother Judah",
    ],
    answer: 2,
    explanation: {
      textSays:
        "1 Maccabees 6:43: Eleazar “saw one of the animals armed with royal breastplates, and it was taller than all the animals, and the king seemed to be on it.” He cut his way through the phalanx, “crept under the elephant, and stabbed it from beneath, and killed it. The elephant fell to the earth upon him, and he died there” (6:46). He was the fourth son of Mattathias (2:5).",
      world:
        "The battle, around 162 BCE, was a defeat for Judah: the army of the boy-king Antiochus V and his regent Lysias went on to besiege Jerusalem (6:47–51).",
      theirEyes:
        "Watching the giant beast collapse on the man who killed it, Judah's men knew they had lost a hero and the day.",
      tradition: {
        jewish: "Josephus retells Eleazar's deed and death (Antiquities 12.9.4).",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 6:43–47", "1 Maccabees 2:5"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.9.4; Jewish War 1.1.5" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-060",
    era: "hellenistic",
    level: 12,
    category: "neighbours",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: 2 Maccabees says the deposed high priest Jason died in exile among the Spartans.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "After a failed attack on Jerusalem, Jason fled to the Ammonites, was imprisoned by “Aretas the prince of the Arabians,” and ended up in Egypt (2 Maccabees 5:5–8). Then “He who had driven many from their own country into exile perished in exile, having crossed the sea to the Lacedaemonians, hoping to find shelter there because they were near of kin” (5:9).",
      world:
        "Lacedaemon is Sparta. Jason's hope rested on the claimed kinship between Spartans and Jews found in the letter of the Spartan king Areus (1 Maccabees 12:20–21).",
      theirEyes:
        "The man who had brought Greek ways to Jerusalem died far from home among Greeks, with no one to mourn him.",
      tradition: {
        jewish:
          "The writer stresses the irony: Jason had no funeral and “no place in the tomb of his ancestors” (2 Maccabees 5:10), a terrible fate for a Jew of the time.",
      },
    },
    confidence: "settled",
    references: ["2 Maccabees 5:5–10", "1 Maccabees 12:20–21"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Daniel R. Schwartz, 2 Maccabees (Commentaries on Early Jewish Literature, De Gruyter, 2008), on 5:9" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 13 ─────────────
  {
    id: "hel-061",
    era: "hellenistic",
    level: 13,
    category: "story",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "According to 2 Maccabees, how was the high priest Menelaus put to death?",
    choices: [
      "He was stoned by the people of Jerusalem",
      "He was pushed into a tower full of ashes at Beroea",
      "He was killed by Judah in battle at Emmaus",
      "He was crucified outside the Temple gates",
    ],
    answer: 1,
    explanation: {
      textSays:
        "2 Maccabees 13:4–8: when Lysias blamed Menelaus as “the cause of all the evils,” the king ordered him taken to Beroea. There stood “a tower that is fifty cubits high, full of ashes,” used for those guilty of sacrilege. Because he had sinned against the altar, “whose fire and whose ashes were holy, he received his death in ashes.”",
      world:
        "The king was the young Antiochus V Eupator, and the year about 162 BCE. Josephus also says Lysias advised the king to put Menelaus to death at Beroea (Antiquities 12.9.7). Beroea is Aleppo in Syria.",
      theirEyes:
        "For Jews who had suffered under Menelaus, the news from Syria sounded like justice: the man who abused the altar died in ashes.",
    },
    confidence: "settled",
    references: ["2 Maccabees 13:1–8"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.9.7" },
      { kind: "scholarship", citation: "Daniel R. Schwartz, 2 Maccabees (Commentaries on Early Jewish Literature, De Gruyter, 2008), on 13:3–8" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-062",
    era: "hellenistic",
    level: 13,
    category: "faith-practice",
    difficulty: 2,
    format: "true-false",
    prompt: "True or false: 1 Maccabees says the Hasideans trusted the high priest Alcimus because he was of Aaron's line, but sixty of them were then seized and killed in one day.",
    choices: ["True", "False"],
    answer: 0,
    explanation: {
      textSays:
        "The Hasidaeans sought peace, saying, “One who is a priest of the seed of Aaron has come with the army, and he will do us no wrong” (1 Maccabees 7:14). Alcimus swore not to harm them; “Then he seized sixty men of them, and killed them in one day” (7:16). Alcimus later died of a palsy while pulling down “the wall of the inner court of the sanctuary” (9:54–56).",
      world:
        "Demetrius I appointed Alcimus high priest around 162 BCE. 1 Maccabees 7:15–16 does not name who swore and seized them; Josephus says it was Alcimus (Antiquities 12.10.2). The episode shows that not all pious Jews backed the Maccabees: some only wanted a legitimate priest and freedom to keep the Law.",
      theirEyes:
        "Devout scholars who walked out to make peace with a priest of their own people found that his oath meant nothing.",
    },
    confidence: "settled",
    references: ["1 Maccabees 7:5–18", "1 Maccabees 9:54–56"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 12.10.1–2; 12.10.6" },
      { kind: "scholarship", citation: "James C. VanderKam, From Joshua to Caiaphas: High Priests after the Exile (Fortress, 2004)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-063",
    era: "hellenistic",
    level: 13,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After Bacchides left Judea, 1 Maccabees says Jonathan settled in which town and “began to judge the people”?",
    choices: ["Jericho", "Shechem", "Michmash", "Hebron"],
    answer: 2,
    explanation: {
      textSays:
        "1 Maccabees 9:73: “Thus the sword ceased from Israel. Jonathan lived at Michmash. Jonathan began to judge the people; and he destroyed the ungodly out of Israel.”",
      world:
        "Jonathan had succeeded Judah after his death in battle in 160 BCE. The peace with Bacchides (about 157 BCE) left Jonathan without an official title, ruling from a village north-east of Jerusalem while the Seleucid garrison still held Jerusalem's citadel.",
      theirEyes:
        "Villagers brought their disputes to a rebel leader in a small hill town, as their ancestors had brought theirs to the judges.",
      tradition: {
        shared:
          "The wording recalls the book of Judges, and Michmash was where another Jonathan, son of Saul, won a famous victory over the Philistines (1 Samuel 14:1–5). Many scholars think 1 Maccabees deliberately casts the Hasmoneans in the mould of Israel's early heroes.",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 9:70–73", "1 Samuel 14:1–5"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Jonathan A. Goldstein, I Maccabees (Anchor Bible 41, 1976), on 9:73" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-064",
    era: "hellenistic",
    level: 13,
    category: "world",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When the Seleucid claimant Alexander Balas made Jonathan high priest in 152 BCE, what did he send him?",
    choices: [
      "A purple robe and a golden crown",
      "A Torah scroll written in Greek",
      "A herd of war elephants",
      "The keys of Antioch",
    ],
    answer: 0,
    explanation: {
      textSays:
        "1 Maccabees 10:20: “we have appointed you this day to be high priest of your nation, and to be called the king’s friend… He also sent to him a purple robe and a golden crown.” Jonathan “put on the holy garments… at the feast of tabernacles” (10:21).",
      world:
        "Balas was fighting Demetrius I for the throne, and both bid for Jonathan's support. Purple clothing and gold were typical honours for a king's “Friends” at Hellenistic courts (compare 1 Maccabees 10:62–65). Seleucid year 160 is 153/152 BCE.",
      theirEyes:
        "A rebel's younger brother now stood at the altar in the high priest's robes, appointed by a Greek king.",
      debate:
        "1 Maccabees calls Balas a son of Antiochus IV (10:1); several ancient historians call him an impostor. Who was high priest just before Jonathan is also debated.",
    },
    confidence: "settled",
    references: ["1 Maccabees 10:1", "1 Maccabees 10:15–21"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.2.2" },
      { kind: "scholarship", citation: "Vasile Babota, The Institution of the Hasmonean High Priesthood (Brill, 2014)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-065",
    era: "hellenistic",
    level: 13,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 141 BCE the Seleucid garrison in Jerusalem's citadel (the Akra) finally surrendered to Simon. Why, according to 1 Maccabees?",
    choices: [
      "An earthquake brought down its walls",
      "Rome ordered the garrison to leave",
      "Simon's blockade left them starving",
      "The Seleucid king sold the fortress to the Jews",
    ],
    answer: 2,
    explanation: {
      textSays:
        "The garrison was cut off from “buying and selling. So they were very hungry, and a great number of them perished from famine” (1 Maccabees 13:49). They begged Simon for terms; he expelled them and “cleansed the citadel,” entering it on the 23rd of the second month of year 171 “with praise and palm branches, with harps, with cymbals” (13:50–51), and made the day an annual festival (13:52).",
      world:
        "The citadel, built in the City of David around 167 BCE (1:33–35), held out for about 25 years.",
      theirEyes:
        "For a generation, Temple worshippers had walked in the shadow of a hostile fortress. Now its gates stood open.",
      debate:
        "1 Maccabees says Simon kept and fortified the citadel (14:37); Josephus says he razed it and even cut down the hill it stood on (Antiquities 13.6.7). Most historians prefer 1 Maccabees here.",
    },
    confidence: "settled",
    references: ["1 Maccabees 1:33–35", "1 Maccabees 13:49–52", "1 Maccabees 14:36–37"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.6.7" },
      { kind: "scholarship", citation: "Kenneth Atkinson, A History of the Hasmonean State (Bloomsbury T&T Clark, 2016)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 14 ─────────────
  {
    id: "hel-066",
    era: "hellenistic",
    level: 14,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 2015, Israeli archaeologists announced remains they identified as the Seleucid Akra. Where were they found?",
    choices: [
      "Under the Church of the Holy Sepulchre",
      "In the Givati Parking Lot, City of David",
      "On the summit of Mount Gerizim",
      "At the Herodion near Bethlehem",
    ],
    answer: 1,
    explanation: {
      world:
        "Israel Antiquities Authority excavators led by Doron Ben-Ami and Yana Tchekhanovets reported part of a massive wall, the base of a tower and a sloping earth rampart in the Givati Parking Lot, south of the Temple Mount. Lead sling bullets, bronze arrowheads and ballista stones suggested fighting there in the 2nd century BCE.",
      textSays:
        "1 Maccabees 1:33 says the king's men “fortified the city of David with a large, strong wall and with strong towers, and it became their citadel.”",
      theirEyes:
        "Sling bullets lying at the foot of a wall are a reminder of defenders and attackers trading shots for years below the Temple.",
      debate:
        "The identification is not agreed. Other scholars place the Akra closer to the Temple Mount, on the Ophel or within the area of the later Herodian platform, and some think the Givati remains belong to a different fortification.",
    },
    confidence: "debated",
    references: ["1 Maccabees 1:33–35"],
    sources: [
      scripture,
      { kind: "archaeology", citation: "Israel Antiquities Authority, announcement of the Givati Parking Lot excavations by Doron Ben-Ami, Yana Tchekhanovets and Salome Cohen (2015)" },
      { kind: "scholarship", citation: "Kenneth Atkinson, A History of the Hasmonean State (Bloomsbury T&T Clark, 2016)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-067",
    era: "hellenistic",
    level: 14,
    category: "daily-life",
    difficulty: 2,
    format: "multiple-choice",
    prompt: "When “the yoke of the Gentiles was taken away from Israel” in 142 BCE, how did people begin dating their contracts?",
    choices: [
      "By the reign of the Seleucid king Antiochus VII",
      "By the years of the Roman consuls",
      "By the years since the rededication of the Temple",
      "By the years of Simon, the great high priest",
    ],
    answer: 3,
    explanation: {
      textSays:
        "1 Maccabees 13:41–42: “In the one hundred seventieth year, the yoke of the Gentiles was taken away from Israel. The people began to write in their instruments and contracts, ‘In the first year of Simon, the great high priest and captain and leader of the Jews.’”",
      world:
        "Documents in the Seleucid kingdom were normally dated by the Seleucid era or the king's reign, so dating by Simon's years was a public sign of independence. Demetrius II had just released Judea from tribute and the crown tax (13:36–40). Seleucid year 170 is 143/142 BCE.",
      theirEyes:
        "A farmer selling a field noticed a small change with big meaning: the contract now named a Jewish ruler, not a foreign king.",
      tradition: {
        jewish: "Josephus repeats that the Jews began to date their contracts by the first year of Simon (Antiquities 13.6.7).",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 13:36–42"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.6.7" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-068",
    era: "hellenistic",
    level: 14,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In 140 BCE a great assembly honoured Simon as leader and high priest. On what does 1 Maccabees say the decree was inscribed?",
    choices: [
      "Clay tablets stored in the royal archive at Antioch",
      "Tablets of bronze set on pillars on Mount Zion",
      "The stones of the old defiled altar",
      "A linen scroll hung in the Holy of Holies",
    ],
    answer: 1,
    explanation: {
      textSays:
        "1 Maccabees 14:27: “they wrote on tablets of brass, and set them on pillars on mount Zion.” The decree was dated the eighteenth of Elul in year 172, “the third year of Simon the high priest,” at “Asaramel” (14:27–28). It was set up “within the precinct of the sanctuary in a conspicuous place,” with copies in the treasury (14:48–49).",
      world:
        "Greek cities commonly published honours for their benefactors on bronze or stone in temple precincts. The decree made Simon high priest, commander and ruler, and passed the offices to his sons, founding the Hasmonean dynasty.",
      theirEyes:
        "Anyone entering the Temple courts could now read, in gleaming bronze, why Simon's family ruled.",
      debate:
        "“Asaramel” is unexplained. Suggestions include a Hebrew phrase for “court of the people of God” or a garbled “prince of the people of God” (Simon's title), but none is certain.",
    },
    confidence: "settled",
    references: ["1 Maccabees 14:25–49"],
    sources: [
      scripture,
      { kind: "scholarship", citation: "Jonathan A. Goldstein, I Maccabees (Anchor Bible 41, 1976), on 14:27–28" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-069",
    era: "hellenistic",
    level: 14,
    category: "story",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: 1 Maccabees says Simon, the last of Mattathias' sons, died fighting a Seleucid army.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      textSays:
        "1 Maccabees 16:11–17: Ptolemy son of Abubus, governor of the plain of Jericho and “the high priest’s son-in-law,” wanted to rule the country. He welcomed Simon and two of his sons to “the little stronghold that is called Dok,” gave them “a great banquet,” and when they “had drunk freely,” his men killed Simon, his two sons and some servants.",
      world:
        "This happened in the month Shebat of year 177, early in 134 BCE. Ptolemy also sent men to kill Simon's son John, but John was warned in time (16:19–22) and succeeded his father; he is known as John Hyrcanus I.",
      theirEyes:
        "Of the five brothers who began the revolt, every one died violently; the last was murdered at his own son-in-law's table.",
      tradition: {
        jewish: "Josephus tells the same story, with more detail about Hyrcanus' failed siege of Ptolemy's fortress (Antiquities 13.7.4–13.8.1).",
      },
    },
    confidence: "settled",
    references: ["1 Maccabees 16:11–24"],
    sources: [scripture, { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.7.4–13.8.1; Jewish War 1.2.3–4" }],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-070",
    era: "hellenistic",
    level: 14,
    category: "tradition",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says John Hyrcanus took 3,000 talents of silver from where, partly to pay off the besieging Antiochus VII?",
    choices: [
      "The treasury of the Samaritan temple",
      "The palace of the Tobiads east of the Jordan",
      "The tomb of King David",
      "The family tomb of Mattathias at Modein",
    ],
    answer: 2,
    explanation: {
      world:
        "Josephus says that when Antiochus VII besieged Jerusalem (about 134–132 BCE), Hyrcanus opened “the sepulchre of David,” took out three thousand talents and gave part to Antiochus to lift the siege. He adds that Hyrcanus was the first Jew to maintain foreign mercenary troops (Antiquities 13.8.4; Jewish War 1.2.5).",
      theirEyes:
        "To some, robbing the greatest king's tomb was shocking; to others it was the price of keeping a Seleucid army out of the city.",
      tradition: {
        jewish:
          "Josephus later tells how Herod also broke into David's tomb looking for treasure, and claims two of his guards were killed by a flame that burst out (Antiquities 16.7.1). The tomb was still pointed out in Jerusalem in the 1st century CE (Acts 2:29).",
      },
      debate: "Historians doubt the size of the treasure; the story may preserve a memory of Hyrcanus using sacred funds under pressure.",
    },
    confidence: "settled",
    references: ["Acts 2:29"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.8.4; 16.7.1" },
      { kind: "primary", citation: "Josephus, Jewish War 1.2.5" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },

  // ───────────── Level 15 ─────────────
  {
    id: "hel-071",
    era: "hellenistic",
    level: 15,
    category: "archaeology",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Coins found on Mount Gerizim led excavator Yitzhak Magen to date John Hyrcanus' destruction of the Samaritan temple to about when?",
    choices: ["About 332 BCE", "About 167 BCE", "About 111 BCE", "About 70 CE"],
    answer: 2,
    explanation: {
      world:
        "Josephus says Hyrcanus took Shechem and destroyed the Gerizim temple after the death of Antiochus VII in 129 BCE (Antiquities 13.9.1). Magen's excavations of the sacred precinct found thousands of coins; the latest from the destruction layer are from around 112–111 BCE, so he dated the destruction to about 111–110 BCE, nearly two decades later in Hyrcanus' reign.",
      textSays:
        "2 Maccabees 6:2 says Antiochus IV renamed the Gerizim temple after Zeus in 167 BCE; it was not destroyed then.",
      theirEyes:
        "For the Samaritans, losing their temple to a Jewish ruler left a bitterness between the two communities that was still felt generations later.",
      debate:
        "Some historians still follow Josephus' earlier date or propose two campaigns; many now accept a date around 112–110 BCE based on the coins.",
    },
    confidence: "mainstream",
    references: ["2 Maccabees 6:2"],
    sources: [
      scripture,
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.9.1; 13.10.2–3" },
      { kind: "archaeology", citation: "Yitzhak Magen, Mount Gerizim Excavations, vol. 2 (Israel Antiquities Authority, 2008)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-072",
    era: "hellenistic",
    level: 15,
    category: "world",
    difficulty: 3,
    format: "true-false",
    prompt: "True or false: Josephus says Judah Maccabee was the first of his family to put a royal diadem on his head.",
    choices: ["True", "False"],
    answer: 1,
    explanation: {
      world:
        "Josephus gives the honour to Aristobulus I, John Hyrcanus' son, who ruled for one year (104–103 BCE): he was the first to put a diadem on his head, 481 years and three months after the return from Babylon (Antiquities 13.11.1; Jewish War 1.3.1). Josephus adds that he was called Philhellene, “lover of the Greeks” (Antiquities 13.11.3). 1 Maccabees never gives Judah a royal title.",
      theirEyes:
        "Grandsons of a village priest who had defied a Greek king now wore a Greek-style crown themselves.",
      debate:
        "The Greek geographer Strabo says Aristobulus' brother Alexander Jannaeus was the first to declare himself king instead of priest (Geography 16.2.40). Hasmonean coins naming a king in Hebrew and Greek are usually assigned to Jannaeus.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.11.1–3 (13.301–319); Jewish War 1.3.1" },
      { kind: "primary", citation: "Strabo, Geography 16.2.40" },
      { kind: "scholarship", citation: "Ya'akov Meshorer, A Treasury of Jewish Coins (Amphora, 2001)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-073",
    era: "hellenistic",
    level: 15,
    category: "story",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "After defeating Jewish rebels, how many of them does Josephus say King Alexander Jannaeus had crucified?",
    choices: ["Seven", "Forty", "800", "10,000"],
    answer: 2,
    explanation: {
      world:
        "Jannaeus (ruled about 103–76 BCE) faced years of civil war. His Jewish opponents even called in the Seleucid king Demetrius III, who beat him near Shechem. Afterwards Jannaeus captured the rebels and, Josephus says, had about 800 of them crucified in Jerusalem while he feasted, and killed their families before their eyes (Antiquities 13.14.2; Jewish War 1.4.6). Some 8,000 opponents fled the country.",
      theirEyes:
        "For Jerusalem's people, crosses raised by a Jewish king and high priest were a horror they never forgot.",
      debate:
        "The Nahum commentary from Qumran (4QpNahum) speaks of a “lion of wrath” who “hangs men alive,” and names a “Demetrius king of Greece.” Many scholars identify the lion with Jannaeus and the event with these crucifixions, but this is debated.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.14.1–2 (13.376–383); Jewish War 1.4.4–6" },
      { kind: "primary", citation: "Pesher Nahum (4Q169), frags. 3–4, col. 1" },
      { kind: "scholarship", citation: "Hanan Eshel, The Dead Sea Scrolls and the Hasmonean State (Eerdmans, 2008)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-074",
    era: "hellenistic",
    level: 15,
    category: "faith-practice",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "Josephus says that when Salome Alexandra ruled (76–67 BCE), real authority lay with which group?",
    choices: ["The Sadducees", "The Pharisees", "The Essenes", "The Samaritans"],
    answer: 1,
    explanation: {
      world:
        "Josephus says the dying Jannaeus told his widow to give power to the Pharisees. As queen, she made her elder son Hyrcanus II high priest, a post she could not hold as a woman, and ordered the people to obey the Pharisees, restoring their rules that Hyrcanus I had abolished. Josephus sums up: she had the name of ruler, but the Pharisees had the authority (Antiquities 13.15.5–13.16.2). In Jewish War he says she ruled others, and the Pharisees ruled her (1.5.2).",
      theirEyes:
        "After decades of a king at war with his own people, Jerusalem enjoyed nine calmer years under a queen.",
      debate:
        "Josephus' sources may favour or blame the Pharisees, and historians debate how much power they really held under her.",
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 13.15.5–13.16.6; Jewish War 1.5.1–4" },
      { kind: "scholarship", citation: "Kenneth Atkinson, Queen Salome: Jerusalem's Warrior Monarch of the First Century B.C.E. (McFarland, 2012)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
  {
    id: "hel-075",
    era: "hellenistic",
    level: 15,
    category: "neighbours",
    difficulty: 3,
    format: "multiple-choice",
    prompt: "In the civil war after Salome Alexandra's death, Hyrcanus II fled from his brother Aristobulus II to which king?",
    choices: [
      "Tigranes II of Armenia",
      "Aretas III of the Nabateans",
      "Mithridates VI of Pontus",
      "Ptolemy XII of Egypt",
    ],
    answer: 1,
    explanation: {
      world:
        "Aristobulus II defeated his elder brother near Jericho and took the throne and high priesthood. Antipater, an Idumean adviser, persuaded Hyrcanus to flee by night to Aretas, king of the Arabs, at Petra, promising to return captured towns. Aretas then besieged Aristobulus in the Temple area (Antiquities 14.1.2–14.2.1). Antipater was the father of Herod the Great.",
      theirEyes:
        "Jerusalem's people watched a Nabatean army camp outside their walls, invited in by one of their own princes.",
      tradition: {
        jewish:
          "During that siege, Josephus says, the pious Onias, famous for praying for rain, refused to curse either side and was stoned by Hyrcanus' supporters (Antiquities 14.2.1).",
      },
    },
    confidence: "settled",
    references: [],
    sources: [
      { kind: "primary", citation: "Josephus, Antiquities of the Jews 14.1.2–14.2.1; Jewish War 1.6.1–2" },
      { kind: "scholarship", citation: "Kenneth Atkinson, A History of the Hasmonean State (Bloomsbury T&T Clark, 2016)" },
    ],
    review: { status: "published", reviewedOn: "2026-11-20", notes: "Independent fact-check pass; corrections applied." },
  },
];
