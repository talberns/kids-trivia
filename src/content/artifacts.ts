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
];

export function getArtifactForLevel(era: string, level: number): Artifact | undefined {
  return ARTIFACTS.find((a) => a.era === era && a.level === level);
}

export function getArtifact(id: string): Artifact | undefined {
  return ARTIFACTS.find((a) => a.id === id);
}
