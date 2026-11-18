import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoundScreen } from "@/components/game/round-screen";
import { getArtifactForLevel } from "@/content/artifacts";
import { getEra, LEVELS_PER_ERA, PLAYABLE_ERAS } from "@/content/eras";
import { getLevelQuestions } from "@/content/index";
import { hashString } from "@/game/rng";

interface PageProps {
  params: Promise<{ era: string; level: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return PLAYABLE_ERAS.flatMap((era) =>
    Array.from({ length: LEVELS_PER_ERA }, (_, i) => ({ era: era.id, level: String(i + 1) })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { era: eraId, level } = await params;
  const era = getEra(eraId);
  return { title: era ? `${era.name} · Level ${level}` : "Play" };
}

export default async function PlayPage({ params }: PageProps) {
  const { era: eraId, level: levelParam } = await params;
  const era = getEra(eraId);
  const level = Number(levelParam);
  if (!era?.playable || !Number.isInteger(level) || level < 1 || level > LEVELS_PER_ERA) notFound();

  const questions = getLevelQuestions(era.id, level);
  if (questions.length === 0) notFound();

  return (
    <RoundScreen
      initialSeed={hashString(`${era.id}:${level}`)}
      config={{
        mode: "level",
        title: era.name,
        subtitle: `Level ${level} of ${LEVELS_PER_ERA} · ${era.period}`,
        questions,
        era: era.id,
        level,
        artifactId: getArtifactForLevel(era.id, level)?.id ?? null,
        nextLevelHref: level < LEVELS_PER_ERA ? `/play/${era.id}/${level + 1}` : null,
      }}
    />
  );
}
