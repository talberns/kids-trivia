import type { Metadata } from "next";
import { DailyChallenge } from "@/components/daily/daily-challenge";

export const metadata: Metadata = { title: "Daily challenge" };

export default function DailyPage() {
  return <DailyChallenge />;
}
