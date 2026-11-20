import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoundScreen } from "@/components/game/round-screen";
import { getArtifactForLevel } from "@/content/artifacts";
import { getEra, PLAYABLE_ERAS } from "@/content/eras";
import { getLevelQuestions } from "@/content/index";
import { getLevelTheme } from "@/content/levels";
import { hashString } from "@/game/rng";

interface PageProps {
  params: Promise<{ era: string; level: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return PLAYABLE_ERAS.flatMap((era) =>
    Array.from({ length: era.levels }, (_, i) => ({ era: era.id, level: String(i + 1) })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { era: eraId, level } = await params;
  const era = getEra(eraId);
  const theme = era ? getLevelTheme(era.id, Number(level)) : undefined;
  return { title: era ? `${era.name} · ${theme?.title ?? `Level ${level}`}` : "Play" };
}

export default async function PlayPage({ params }: PageProps) {
  const { era: eraId, level: levelParam } = await params;
  const era = getEra(eraId);
  const level = Number(levelParam);
  if (!era?.playable || !Number.isInteger(level) || level < 1 || level > era.levels) notFound();

  const theme = getLevelTheme(era.id, level);
  const questions = getLevelQuestions(era.id, level);
  if (questions.length === 0) notFound();

  return (
    <RoundScreen
      initialSeed={hashString(`${era.id}:${level}`)}
      config={{
        mode: "level",
        title: era.name,
        subtitle: `Level ${level} of ${era.levels} · ${theme?.title ?? era.period}`,
        theme,
        questions,
        era: era.id,
        level,
        artifactId: getArtifactForLevel(era.id, level)?.id ?? null,
        nextLevelHref: level < era.levels ? `/play/${era.id}/${level + 1}` : null,
      }}
    />
  );
}
