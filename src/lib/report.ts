export const REPO_URL = "https://github.com/talberns/kids-trivia";

/** Pre-filled GitHub issue so players and scholars can flag a content error. */
export function reportIssueUrl(questionId: string, prompt: string): string {
  const title = `Content issue: ${questionId}`;
  const body = [
    `**Question:** ${questionId}`,
    `> ${prompt}`,
    "",
    "**What looks wrong?**",
    "",
    "**Source or evidence (book, verse, publication, link):**",
    "",
  ].join("\n");
  return `${REPO_URL}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}
