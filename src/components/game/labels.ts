import type { Category, Confidence, Source } from "@/content/schema";

export const CATEGORY_LABEL: Record<Category, { label: string; icon: string }> = {
  story: { label: "The Story", icon: "📖" },
  world: { label: "The World", icon: "🌍" },
  "daily-life": { label: "Daily Life", icon: "🏺" },
  neighbours: { label: "Neighbours' Beliefs", icon: "🗿" },
  "faith-practice": { label: "Faith & Practice", icon: "🕯️" },
  tradition: { label: "Meaning & Tradition", icon: "📜" },
  archaeology: { label: "Digging Up the Past", icon: "⛏️" },
};

export const CONFIDENCE_LABEL: Record<Confidence, { label: string; className: string; hint: string }> = {
  settled: {
    label: "Settled",
    className: "bg-jade/15 text-jade ring-jade/40",
    hint: "Clearly stated in the text or firmly established by evidence.",
  },
  mainstream: {
    label: "Mainstream view",
    className: "bg-cyan/15 text-cyan ring-cyan/40",
    hint: "The view most scholars hold, though some disagree.",
  },
  debated: {
    label: "Debated",
    className: "bg-neon/15 text-neon ring-neon/40",
    hint: "Scholars genuinely disagree — see the debate section.",
  },
};

export const SOURCE_KIND_LABEL: Record<Source["kind"], string> = {
  scripture: "Scripture",
  primary: "Ancient source",
  scholarship: "Scholarship",
  reference: "Reference",
  archaeology: "Archaeology",
};
