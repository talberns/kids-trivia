import type { EraId } from "./schema";

export interface Artifact {
  readonly id: string;
  readonly era: EraId;
  /** Earned by clearing this level (1+ stars) for the first time. */
  readonly level: number;
  readonly name: string;
  readonly emoji: string;
  readonly blurb: string;
  readonly reference?: string;
}

export const ARTIFACTS: readonly Artifact[] = [
  {
    id: "balance-weights",
    era: "patriarchs",
    level: 1,
    name: "Balance & Stone Weights",
    emoji: "⚖️",
    blurb:
      "Before coins existed, silver was weighed on a balance against stone or metal weights. Abraham 'weighed' the silver for his family's burial cave.",
    reference: "Genesis 23:16",
  },
  {
    id: "cylinder-seal",
    era: "patriarchs",
    level: 2,
    name: "Cylinder Seal",
    emoji: "🧿",
    blurb:
      "A small carved stone cylinder rolled across wet clay to leave a picture — an ancient Mesopotamian signature. Judah hands over his seal and cord as a pledge.",
    reference: "Genesis 38:18",
  },
  {
    id: "goat-hair-tent",
    era: "patriarchs",
    level: 3,
    name: "Goat-Hair Tent",
    emoji: "⛺",
    blurb:
      "The patriarchs are described as living in tents as they moved with their flocks. Woven goat-hair tents are still used by Bedouin herders in the region.",
    reference: "Genesis 12:8; 25:27",
  },
  {
    id: "shofar",
    era: "exodus",
    level: 1,
    name: "Shofar",
    emoji: "📯",
    blurb:
      "A ram's-horn trumpet. Exodus says a very loud shofar sounded at Mount Sinai. It is still blown in synagogues on Rosh Hashanah.",
    reference: "Exodus 19:16",
  },
  {
    id: "mud-brick",
    era: "exodus",
    level: 2,
    name: "Straw-Tempered Mud Brick",
    emoji: "🧱",
    blurb:
      "Egyptian builders mixed straw or chaff into Nile mud to make bricks stronger. In Exodus, Pharaoh stops supplying the straw but keeps the quota.",
    reference: "Exodus 5:7",
  },
  {
    id: "scarab",
    era: "exodus",
    level: 3,
    name: "Scarab Amulet",
    emoji: "🪲",
    blurb:
      "Egyptians carved amulets shaped like the dung beetle, a symbol of the sun god Khepri and of renewal. Thousands have been found in Canaan too.",
  },
  {
    id: "denarius",
    era: "roman-judea",
    level: 1,
    name: "Silver Denarius",
    emoji: "🪙",
    blurb:
      "The standard Roman silver coin, bearing the emperor's portrait. In one parable it is a labourer's wage for a day's work.",
    reference: "Matthew 20:2",
  },
  {
    id: "herodian-lamp",
    era: "roman-judea",
    level: 2,
    name: "Herodian Oil Lamp",
    emoji: "🪔",
    blurb:
      "A small clay lamp with a knife-trimmed nozzle, typical of Judea around the time of Jesus. Olive oil burned on a wick — think of the parable of the ten virgins.",
    reference: "Matthew 25:1–13",
  },
  {
    id: "stone-jar",
    era: "roman-judea",
    level: 3,
    name: "Stone Water Jar",
    emoji: "🏺",
    blurb:
      "Vessels carved from soft chalk stone were popular in Judea because stone was considered not to become ritually impure. John mentions six stone jars at the wedding in Cana.",
    reference: "John 2:6",
  },
  {
    id: "water-jar",
    era: "patriarchs",
    level: 4,
    name: "Clay Water Jar",
    emoji: "🏺",
    blurb:
      "Women carried clay jars on their shoulders to the town well, usually in the evening. Rebekah's water jar is how Abraham's servant found Isaac's wife.",
    reference: "Genesis 24:15–20",
  },
  {
    id: "canopic-jar",
    era: "patriarchs",
    level: 5,
    name: "Canopic Jar",
    emoji: "⚱️",
    blurb:
      "During mummification Egyptians removed internal organs and stored them in four jars, often with lids shaped like the heads of protective gods. Genesis says Jacob and Joseph were embalmed in Egypt.",
    reference: "Genesis 50:2–3, 26",
  },
  {
    id: "papyrus-basket",
    era: "exodus",
    level: 4,
    name: "Papyrus Basket",
    emoji: "🧺",
    blurb:
      "Papyrus reeds grew thick along the Nile and were woven into baskets, mats and even boats. Moses' mother sealed his basket with tar and pitch.",
    reference: "Exodus 2:3",
  },
  {
    id: "bronze-serpent",
    era: "exodus",
    level: 5,
    name: "Bronze Serpent",
    emoji: "🐍",
    blurb:
      "Moses lifted a bronze serpent on a pole for healing. Centuries later King Hezekiah destroyed it, because it had become an object of worship called Nehushtan.",
    reference: "Numbers 21:8–9; 2 Kings 18:4",
  },
  {
    id: "fishing-net",
    era: "roman-judea",
    level: 4,
    name: "Fishing Net",
    emoji: "🎣",
    blurb:
      "Galilee fishermen cast hand nets from the shore and dragged large nets between boats, often working at night. Several of Jesus' first followers were fishermen.",
    reference: "Mark 1:16–20",
  },
  {
    id: "ossuary",
    era: "roman-judea",
    level: 5,
    name: "Stone Ossuary",
    emoji: "🪦",
    blurb:
      "A carved limestone box for the bones of the dead, gathered about a year after burial. Ossuaries were used in Jerusalem roughly from the late 1st century BCE until 70 CE.",
  },
  // ───────── Roman Judea, levels 6–10 ─────────
  {
    id: "galilee-boat",
    era: "roman-judea",
    level: 6,
    name: "The Galilee Boat",
    emoji: "🛶",
    blurb:
      "In 1986, during a drought, two brothers spotted an old wooden hull in the mud of the Sea of Galilee near Ginosar. About 8 metres long and dated to roughly the 1st century BCE–1st century CE, it shows the kind of boat Galilean fishermen used.",
    reference: "Mark 4:35–41",
  },
  {
    id: "mikveh",
    era: "roman-judea",
    level: 7,
    name: "Mikveh (Ritual Bath)",
    emoji: "💧",
    blurb:
      "Stepped, plastered pools, often cut into rock, used for ritual immersion to restore purity. Archaeologists have found hundreds from the Second Temple period, in Jerusalem homes, near the Temple Mount and in Galilean villages.",
  },
  {
    id: "temple-warning",
    era: "roman-judea",
    level: 8,
    name: "Temple Warning Inscription",
    emoji: "🪧",
    blurb:
      "A Greek stone notice from Herod's Temple warning foreigners not to pass the barrier into the inner courts, on pain of death. Josephus describes such signs; a complete example was found in Jerusalem in 1871.",
    reference: "Acts 21:28–29",
  },
  {
    id: "pilate-stone",
    era: "roman-judea",
    level: 9,
    name: "The Pilate Stone",
    emoji: "🏛️",
    blurb:
      "A limestone block found at Caesarea Maritima in 1961, naming Pontius Pilate as prefect of Judea. It is the only undisputed inscription from his lifetime that names him.",
  },
  {
    id: "magdala-stone",
    era: "roman-judea",
    level: 10,
    name: "The Magdala Stone",
    emoji: "🕎",
    blurb:
      "A carved stone block found in 2009 in a 1st-century synagogue at Magdala, by the Sea of Galilee. It bears one of the earliest known carvings of the Temple's seven-branched lampstand, made while the Temple still stood.",
  },
  // ───────── The Early Church ─────────
  {
    id: "papyrus-letter",
    era: "early-church",
    level: 1,
    name: "Papyrus Letter",
    emoji: "📜",
    blurb:
      "Letters were written on sheets of papyrus, often dictated to a scribe. One of Paul's scribes even adds his own greeting: “I, Tertius, who write the letter, greet you in the Lord.”",
    reference: "Romans 16:22",
  },
  {
    id: "roman-milestone",
    era: "early-church",
    level: 2,
    name: "Roman Milestone",
    emoji: "🛣️",
    blurb:
      "Stone columns set along Roman roads marked distances and often named the emperor or official who built or repaired the road. Paved roads and safe sea lanes helped travellers like Paul cross the empire.",
  },
  {
    id: "gallio-inscription",
    era: "early-church",
    level: 3,
    name: "The Gallio Inscription",
    emoji: "🪨",
    blurb:
      "Fragments of a letter from Emperor Claudius, carved in stone at Delphi, name Gallio as proconsul of Achaia. They date his term to about 51–52 CE, one of the firmest anchors for dating Paul's stay in Corinth.",
    reference: "Acts 18:12",
  },
  {
    id: "artemis-ephesus",
    era: "early-church",
    level: 4,
    name: "Statue of Artemis of Ephesus",
    emoji: "🗿",
    blurb:
      "Ephesus was famous for its great temple of Artemis, one of the Seven Wonders. Acts describes silversmiths who made shrines of the goddess rioting with the cry “Great is Artemis of the Ephesians!”",
    reference: "Acts 19:23–41",
  },
  {
    id: "judaea-capta",
    era: "early-church",
    level: 5,
    name: "Judaea Capta Coin",
    emoji: "🪙",
    blurb:
      "After Rome crushed the Jewish revolt and destroyed the Temple in 70 CE, Emperor Vespasian minted coins showing a mourning woman beneath a palm tree, labelled IVDAEA CAPTA, “Judea captured.”",
  },
  // ───────── Greeks & Maccabees ─────────
  {
    id: "alexander-tetradrachm",
    era: "hellenistic",
    level: 1,
    name: "Silver Coin of Alexander",
    emoji: "🪙",
    blurb:
      "Alexander the Great's silver coins showed Heracles in a lion-skin headdress and Zeus on a throne. Minted across his empire and for long after his death in 323 BCE, they gave much of the Near East a shared Greek-style currency.",
  },
  {
    id: "greek-scroll",
    era: "hellenistic",
    level: 2,
    name: "Greek Scripture Scroll",
    emoji: "📜",
    blurb:
      "Jews in Alexandria translated their scriptures into Greek, beginning with the Torah in the 3rd century BCE. This Septuagint became the Bible of Greek-speaking Jews and, later, of the first Christians.",
  },
  {
    id: "antiochus-coin",
    era: "hellenistic",
    level: 3,
    name: "Coin of Antiochus IV",
    emoji: "👑",
    blurb:
      "The Seleucid king whose decrees sparked the Maccabean revolt put the title Theos Epiphanes, “god manifest”, on some of his coins.",
  },
  {
    id: "hasmonean-prutah",
    era: "hellenistic",
    level: 4,
    name: "Hasmonean Bronze Coin",
    emoji: "🌿",
    blurb:
      "The Maccabees' descendants, the Hasmoneans, struck small bronze coins, many with Hebrew inscriptions naming the high priest and “the hever (council or community) of the Jews.”",
  },
  {
    id: "isaiah-scroll",
    era: "hellenistic",
    level: 5,
    name: "The Great Isaiah Scroll",
    emoji: "🏺",
    blurb:
      "Found in a cave near Qumran in 1947, this leather scroll contains the whole book of Isaiah. Copied in the 2nd century BCE, it is about a thousand years older than the oldest Hebrew manuscripts of Isaiah known before its discovery.",
  },
  // ───────── The United Monarchy ─────────
  {
    id: "sling",
    era: "united-monarchy",
    level: 1,
    name: "Shepherd's Sling",
    emoji: "🪨",
    blurb:
      "A strip of leather or woven cord with a pouch, whirled to hurl a stone. Shepherds used slings to protect their flocks, and armies used them as long-range weapons.",
    reference: "1 Samuel 17:40",
  },
  {
    id: "lyre",
    era: "united-monarchy",
    level: 2,
    name: "Lyre (Kinnor)",
    emoji: "🎶",
    blurb:
      "A small stringed instrument played by hand. The young David is described playing the kinnor (a lyre; “harp” in many English Bibles) to calm King Saul.",
    reference: "1 Samuel 16:23",
  },
  {
    id: "gezer-calendar",
    era: "united-monarchy",
    level: 3,
    name: "The Gezer Calendar",
    emoji: "🌾",
    blurb:
      "A small limestone tablet, usually dated to the 10th century BCE, listing the farming year by its tasks: ingathering, sowing, late planting, flax, barley, harvest, vine-pruning and summer fruit. It is one of the oldest known inscriptions in Hebrew or a closely related Canaanite dialect.",
  },
  {
    id: "cedar",
    era: "united-monarchy",
    level: 4,
    name: "Cedar of Lebanon",
    emoji: "🌲",
    blurb:
      "Prized, fragrant timber from the mountains of Lebanon. Kings of Egypt and Mesopotamia sought it, and Solomon is said to have traded with Hiram of Tyre for cedar to build the Temple.",
    reference: "1 Kings 5:6",
  },
  {
    id: "tel-dan-stele",
    era: "united-monarchy",
    level: 5,
    name: "The Tel Dan Stele",
    emoji: "🪨",
    blurb:
      "Fragments of a 9th-century BCE Aramaic victory inscription found at Tel Dan in 1993–94. Its phrase “house of David,” as most scholars read it, is the earliest widely accepted reference to David's dynasty outside the Bible.",
  },
  // ───────── Two Kingdoms & the Prophets ─────────
  {
    id: "samaria-ivory",
    era: "divided-kingdom",
    level: 1,
    name: "Samaria Ivory",
    emoji: "🦁",
    blurb:
      "Carved ivory plaques that once decorated furniture were found in the royal city of Samaria. The Bible mentions Ahab's “ivory house”, and Amos condemns those who lie on “beds of ivory.”",
    reference: "Amos 6:4",
  },
  {
    id: "mesha-stele",
    era: "divided-kingdom",
    level: 2,
    name: "The Mesha Stele",
    emoji: "🗿",
    blurb:
      "A black basalt stone set up in the 9th century BCE by Mesha, king of Moab, boasting of freeing his land from Israel after the reign of Omri. 2 Kings 3 tells of the same conflict from Israel's side.",
    reference: "2 Kings 3:4–5",
  },
  {
    id: "black-obelisk",
    era: "divided-kingdom",
    level: 3,
    name: "The Black Obelisk",
    emoji: "🏛️",
    blurb:
      "An Assyrian monument of Shalmaneser III showing kings bringing tribute. One panel shows a figure bowing low, identified in the inscription as Jehu of Israel (or his envoy): often described as the earliest known picture of an Israelite king.",
  },
  {
    id: "siloam-inscription",
    era: "divided-kingdom",
    level: 4,
    name: "The Siloam Inscription",
    emoji: "⛏️",
    blurb:
      "Carved inside a water tunnel under Jerusalem, it describes two teams of diggers cutting through rock from opposite ends until they met. The tunnel is usually linked to King Hezekiah.",
    reference: "2 Kings 20:20",
  },
  {
    id: "lachish-letter",
    era: "divided-kingdom",
    level: 5,
    name: "Lachish Letter",
    emoji: "🏺",
    blurb:
      "Messages written in ink on pottery shards just before the Babylonian conquest. One officer reports watching for the signal fires of Lachish because he cannot see Azekah, echoing Jeremiah 34:7.",
    reference: "Jeremiah 34:7",
  },
  // ───────── Exile in Babylon ─────────
  {
    id: "stamped-brick",
    era: "exile",
    level: 1,
    name: "Nebuchadnezzar's Brick",
    emoji: "🧱",
    blurb:
      "Babylon was rebuilt with huge numbers of baked bricks, many stamped with the name and titles of King Nebuchadnezzar II. Bricks like these still turn up across the ruins.",
  },
  {
    id: "ishtar-lion",
    era: "exile",
    level: 2,
    name: "Lion of the Processional Way",
    emoji: "🦁",
    blurb:
      "Glazed blue bricks with striding lions lined Babylon's Processional Way near the Ishtar Gate, completed around 575 BCE. Judeans living in Babylonia in the decades of the exile could have seen these walls.",
  },
  {
    id: "ration-tablet",
    era: "exile",
    level: 3,
    name: "Jehoiachin Ration Tablet",
    emoji: "📋",
    blurb:
      "Babylonian clay tablets listing oil rations name “Ya'u-kin, king of the land of Yahudu” (the exiled King Jehoiachin) and five sons of the king. One is dated to 592/591 BCE. 2 Kings ends with Jehoiachin eating at the Babylonian king's table.",
    reference: "2 Kings 25:27–30",
  },
  {
    id: "nabonidus-cylinder",
    era: "exile",
    level: 4,
    name: "Nabonidus Cylinder",
    emoji: "🌙",
    blurb:
      "A clay cylinder of Babylon's last king, Nabonidus, praying for his eldest son Belshazzar. In Daniel 5 Belshazzar is the king at the feast when Babylon falls.",
    reference: "Daniel 5:1",
  },
  {
    id: "cyrus-cylinder",
    era: "exile",
    level: 5,
    name: "The Cyrus Cylinder",
    emoji: "🏺",
    blurb:
      "A clay cylinder written after the Persian king Cyrus took Babylon in 539 BCE. It presents him as a liberator who returned gods and peoples to their homelands; the Bible has its own account of Cyrus allowing the exiles to return.",
    reference: "Ezra 1:1–4",
  },
];

export function getArtifactForLevel(era: string, level: number): Artifact | undefined {
  return ARTIFACTS.find((a) => a.era === era && a.level === level);
}

export function getArtifact(id: string): Artifact | undefined {
  return ARTIFACTS.find((a) => a.id === id);
}
