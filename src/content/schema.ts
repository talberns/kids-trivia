import { z } from "zod";

/**
 * Content schema for every question in the game.
 *
 * The schema is deliberately strict: a question that is missing sources, a
 * confidence label or a review date cannot be loaded, so it can never reach
 * players. See docs/CONTENT_GUIDE.md for the editorial rules behind each field.
 */

export const ERA_IDS = [
  "primeval",
  "patriarchs",
  "exodus",
  "judges",
  "united-monarchy",
  "divided-kingdom",
  "exile",
  "persian",
  "hellenistic",
  "roman-judea",
  "early-church",
] as const;

export const eraIdSchema = z.enum(ERA_IDS);
export type EraId = z.infer<typeof eraIdSchema>;

export const CATEGORIES = [
  "story",
  "world",
  "daily-life",
  "neighbours",
  "faith-practice",
  "tradition",
  "archaeology",
] as const;
export const categorySchema = z.enum(CATEGORIES);
export type Category = z.infer<typeof categorySchema>;

/** How certain the answer is: settled fact, mainstream view, or genuinely debated. */
export const confidenceSchema = z.enum(["settled", "mainstream", "debated"]);
export type Confidence = z.infer<typeof confidenceSchema>;

/** draft → verified (independent check passed) → published (live in the game). */
export const reviewStatusSchema = z.enum(["draft", "verified", "published"]);
export type ReviewStatus = z.infer<typeof reviewStatusSchema>;

const text = z.string().trim().min(1);

export const sourceSchema = z.object({
  kind: z.enum(["scripture", "primary", "scholarship", "reference", "archaeology"]),
  citation: text,
});
export type Source = z.infer<typeof sourceSchema>;

export const explanationSchema = z
  .object({
    /** What the biblical text itself says, with the reference. */
    textSays: text.optional(),
    /** Historical, cultural or archaeological context. */
    world: text.optional(),
    /** The scene from the point of view of someone living at the time. */
    theirEyes: text,
    tradition: z
      .object({
        jewish: text.optional(),
        christian: text.optional(),
        shared: text.optional(),
      })
      .optional(),
    /** Where scholars disagree. Required when confidence is "debated". */
    debate: text.optional(),
  })
  .refine((e) => e.textSays !== undefined || e.world !== undefined, {
    message: "An explanation needs at least a 'textSays' or a 'world' section",
  });

export const questionSchema = z
  .object({
    id: z.string().regex(/^[a-z]{3}-\d{3}$/, "id must look like 'pat-001'"),
    era: eraIdSchema,
    level: z.number().int().min(1).max(5),
    category: categorySchema,
    difficulty: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    format: z.enum(["multiple-choice", "true-false"]),
    prompt: text,
    choices: z.array(text).min(2).max(4),
    /** Index into `choices` of the correct answer. */
    answer: z.number().int().nonnegative(),
    explanation: explanationSchema,
    confidence: confidenceSchema,
    /** Scripture references, e.g. "Genesis 12:1–5". May be empty for purely historical questions. */
    references: z.array(text),
    sources: z.array(sourceSchema).min(1),
    review: z.object({
      status: reviewStatusSchema,
      reviewedOn: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .optional(),
      notes: z.string().optional(),
    }),
  })
  .superRefine((q, ctx) => {
    const issue = (message: string, path: (string | number)[]) =>
      ctx.addIssue({ code: "custom", message, path });

    if (q.answer >= q.choices.length) issue("answer index is out of range", ["answer"]);

    if (q.format === "true-false" && (q.choices.length !== 2 || q.choices[0] !== "True" || q.choices[1] !== "False")) {
      issue('true-false questions must have choices ["True", "False"]', ["choices"]);
    }
    if (q.format === "multiple-choice" && q.choices.length !== 4) {
      issue("multiple-choice questions must have exactly 4 choices", ["choices"]);
    }

    const normalised = q.choices.map((c) => c.toLowerCase());
    if (new Set(normalised).size !== normalised.length) issue("choices must be unique", ["choices"]);

    if (q.confidence === "debated" && q.explanation.debate === undefined) {
      issue("debated questions must explain the debate", ["explanation", "debate"]);
    }

    if (q.review.status !== "draft" && q.review.reviewedOn === undefined) {
      issue("verified or published questions need a review date", ["review", "reviewedOn"]);
    }

    if (q.references.length > 0 && !q.sources.some((s) => s.kind === "scripture")) {
      issue("questions with scripture references must list scripture as a source", ["sources"]);
    }
  });

export type Question = z.infer<typeof questionSchema>;
/** Shape authors write; validated into `Question` at load time. */
export type QuestionInput = z.input<typeof questionSchema>;
