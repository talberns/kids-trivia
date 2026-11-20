import { expect, test } from "@playwright/test";
import { signUp } from "./auth";

test("daily challenge: ten timed questions, then the leaderboard", async ({ page }) => {
  test.setTimeout(120_000);
  await signUp(page, { first: "Miriam", last: "Cohen" });
  await page.goto("/daily");
  await expect(page.getByText(/10 questions/i)).toBeVisible();
  await page.getByRole("button", { name: "Start the clock" }).click();

  for (let i = 1; i <= 10; i++) {
    await expect(page.getByText(`Question ${i} of 10`)).toBeVisible({ timeout: 10_000 });
    await expect(page.getByTestId("daily-clock")).toBeVisible();
    await page.getByRole("group", { name: "Answers" }).getByRole("button").first().click();
  }

  await expect(page.getByText(/today's result/i)).toBeVisible({ timeout: 10_000 });
  const board = page.getByTestId("leaderboard");
  await expect(board).toContainText("Miriam C.");
  await expect(board).toContainText("(you)");

  // One attempt per day: coming back shows the result, not a new game.
  await page.reload();
  await expect(page.getByText(/today's result/i)).toBeVisible();
  await expect(page.getByRole("button", { name: "Start the clock" })).toHaveCount(0);
});

test("the daily answers are scored on the server, not trusted from the browser", async ({ page }) => {
  await signUp(page);
  const early = await page.request.post("/api/daily/answer", { data: { index: 0, choice: 0 } });
  expect(early.status()).toBe(409);
  await page.request.post("/api/daily/start");
  const stale = await page.request.post("/api/daily/answer", { data: { index: 5, choice: 0 } });
  expect(stale.status()).toBe(409);
  const state = await (await page.request.get("/api/daily")).json();
  expect(state.status).toBe("playing");
  expect(JSON.stringify(state)).not.toMatch(/"answer"/);
});
