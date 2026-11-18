import type { Metadata } from "next";
import { DailyRound } from "@/components/game/daily-round";
import { PUBLISHED_QUESTIONS } from "@/content/index";

export const metadata: Metadata = { title: "Daily challenge" };

export default function DailyPage() {
  return <DailyRound pool={[...PUBLISHED_QUESTIONS]} />;
}
