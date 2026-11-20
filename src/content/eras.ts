import type { EraId } from "./schema";

export interface Era {
  readonly id: EraId;
  readonly name: string;
  readonly period: string;
  readonly testament: "hebrew-bible" | "between" | "new-testament";
  readonly emoji: string;
  readonly blurb: string;
  /** Only eras with fully verified questions are playable. */
  readonly playable: boolean;
  /** Number of levels on the journey map for this era. */
  readonly levels: number;
}

/** In story order. Dates for the early eras are traditional or debated and labelled as such. */
export const ERAS: readonly Era[] = [
  {
    id: "primeval",
    name: "In the Beginning",
    period: "Creation to Babel · literary framing",
    testament: "hebrew-bible",
    emoji: "🌌",
    blurb: "Creation, Eden, the Flood and Babel, read alongside the myths of Mesopotamia.",
    playable: false,
    levels: 5,
  },
  {
    id: "patriarchs",
    name: "The Patriarchs",
    period: "Traditionally c. 2000–1600 BCE",
    testament: "hebrew-bible",
    emoji: "⛺",
    blurb: "Abraham, Isaac, Jacob and Joseph: herders between Mesopotamia, Canaan and Egypt.",
    playable: true,
    levels: 5,
  },
  {
    id: "exodus",
    name: "Egypt & the Exodus",
    period: "Date debated · often placed in the 13th century BCE",
    testament: "hebrew-bible",
    emoji: "🏺",
    blurb: "Slavery in Egypt, the plagues, Passover, Sinai and forty years in the wilderness.",
    playable: true,
    levels: 5,
  },
  {
    id: "judges",
    name: "Conquest & Judges",
    period: "c. 1200–1050 BCE",
    testament: "hebrew-bible",
    emoji: "🛡️",
    blurb: "Tribes, heroes and Philistines in the hill country of Canaan.",
    playable: false,
    levels: 5,
  },
  {
    id: "united-monarchy",
    name: "The United Monarchy",
    period: "c. 1050–930 BCE",
    testament: "hebrew-bible",
    emoji: "👑",
    blurb: "Saul, David and Solomon, and the first Temple in Jerusalem.",
    playable: true,
    levels: 5,
  },
  {
    id: "divided-kingdom",
    name: "Two Kingdoms & the Prophets",
    period: "c. 930–586 BCE",
    testament: "hebrew-bible",
    emoji: "⚔️",
    blurb: "Israel and Judah, Assyria's armies, and prophets who spoke truth to kings.",
    playable: true,
    levels: 5,
  },
  {
    id: "exile",
    name: "Exile in Babylon",
    period: "586–539 BCE",
    testament: "hebrew-bible",
    emoji: "🏛️",
    blurb: "Jerusalem falls; a people learns to keep faith by the rivers of Babylon.",
    playable: true,
    levels: 5,
  },
  {
    id: "persian",
    name: "Persia & the Return",
    period: "539–332 BCE",
    testament: "hebrew-bible",
    emoji: "🦁",
    blurb: "Cyrus, Ezra, Nehemiah and Esther in the world's largest empire.",
    playable: false,
    levels: 5,
  },
  {
    id: "hellenistic",
    name: "Greeks & Maccabees",
    period: "332–63 BCE",
    testament: "between",
    emoji: "🕎",
    blurb: "Alexander's heirs, the Maccabean revolt and the story of Hanukkah.",
    playable: true,
    levels: 5,
  },
  {
    id: "roman-judea",
    name: "Roman Judea",
    period: "63 BCE – c. 33 CE",
    testament: "new-testament",
    emoji: "🪙",
    blurb: "Herod's Temple, Roman governors, and the life of Jesus in Galilee and Jerusalem.",
    playable: true,
    levels: 10,
  },
  {
    id: "early-church",
    name: "The Early Church",
    period: "c. 33–100 CE",
    testament: "new-testament",
    emoji: "⛵",
    blurb: "Paul's journeys, the first communities, and the fall of Jerusalem.",
    playable: true,
    levels: 5,
  },
];

export function getEra(id: string): Era | undefined {
  return ERAS.find((era) => era.id === id);
}

export const PLAYABLE_ERAS: readonly Era[] = ERAS.filter((era) => era.playable);
