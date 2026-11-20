import type { EraId } from "./schema";
import { dividedKingdomThemes } from "./levels/divided-kingdom";
import { earlyChurchThemes } from "./levels/early-church";
import { exileThemes } from "./levels/exile";
import { exodusThemes } from "./levels/exodus";
import { hellenisticThemes } from "./levels/hellenistic";
import { judgesThemes } from "./levels/judges";
import { patriarchsThemes } from "./levels/patriarchs";
import { persianThemes } from "./levels/persian";
import { primevalThemes } from "./levels/primeval";
import { romanJudeaThemes } from "./levels/roman-judea";
import { unitedMonarchyThemes } from "./levels/united-monarchy";

/**
 * The story of one level: a short title, a scene-setting primer shown before the first
 * question, and a one-line takeaway shown after the round. Takeaways may only restate
 * facts that the level's own (fact-checked) questions already establish.
 */
export interface LevelTheme {
  readonly title: string;
  /** One or two sentences that set the scene without giving answers away. */
  readonly primer: string;
  /** One sentence: the main thing a player learns from this level. */
  readonly takeaway: string;
}

export const LEVEL_THEMES: Record<EraId, readonly LevelTheme[]> = {
  primeval: primevalThemes,
  patriarchs: patriarchsThemes,
  exodus: exodusThemes,
  judges: judgesThemes,
  "united-monarchy": unitedMonarchyThemes,
  "divided-kingdom": dividedKingdomThemes,
  exile: exileThemes,
  persian: persianThemes,
  hellenistic: hellenisticThemes,
  "roman-judea": romanJudeaThemes,
  "early-church": earlyChurchThemes,
};

/** Level numbers start at 1. */
export function getLevelTheme(era: string, level: number): LevelTheme | undefined {
  return (LEVEL_THEMES as Record<string, readonly LevelTheme[] | undefined>)[era]?.[level - 1];
}
