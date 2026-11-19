import { expect, test } from "@playwright/test";
import { signIn } from "./auth";

test.beforeEach(async ({ page }) => {
  await signIn(page);
});

test("journey map shows playable eras", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /see the scriptures/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /play the patriarchs, level 1/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /play roman judea, level 1/i })).toBeVisible();
});

test("a full level can be played to the summary", async ({ page }) => {
  await page.goto("/play/patriarchs/1");
  for (let i = 0; i < 5; i++) {
    await page.getByRole("group", { name: "Answers" }).getByRole("button").first().click();
    await expect(page.getByRole("heading", { name: /window into the time/i })).toBeVisible();
    await page.getByRole("button", { name: /next question|see results/i }).click();
  }
  await expect(page.getByRole("heading", { level: 2, name: /jackpot|big win|level cleared|so close/i })).toBeVisible();
});

test("progress persists across reloads", async ({ page }) => {
  await page.goto("/play/exodus/1");
  for (let i = 0; i < 5; i++) {
    await page.getByRole("group", { name: "Answers" }).getByRole("button").first().click();
    await page.getByRole("button", { name: /next question|see results/i }).click();
  }
  await page.goto("/");
  const xp = page.getByTestId("xp-total").filter({ visible: true });
  await expect(xp).toBeVisible();
  await expect(xp).not.toHaveText(/^\D*0\D*$/);
});

test("sources page explains the method", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: /how we check every answer/i })).toBeVisible();
});

test("daily challenge hides the bottom navigation", async ({ page }) => {
  await page.goto("/daily");
  await expect(page.getByRole("group", { name: "Answers" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Main" })).toHaveCount(0);
});
