import { expect, test } from "@playwright/test";

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
  await expect(page.locator("header").getByText(/XP/)).toBeVisible();
  const xp = await page.locator("header").getByText(/\d+ XP/).textContent();
  expect(xp).not.toBe("0 XP");
});

test("sources page explains the method", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: /how we check every answer/i })).toBeVisible();
});
