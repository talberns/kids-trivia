import { expect, test } from "@playwright/test";
import { E2E_AUTH } from "./credentials";
import { signIn, signUp, TEST_PASSWORD, uniqueUsername } from "./auth";

test("signed-out visitors are sent to the login page", async ({ page }) => {
  await page.goto("/play/exodus/1");
  await expect(page).toHaveURL(/\/login\?next=%2Fplay%2Fexodus%2F1/);
  await expect(page.getByRole("heading", { name: "Apostle Quiz" })).toBeVisible();
  const api = await page.request.post("/api/events", { data: { type: "page_view", path: "/" } });
  expect(api.status()).toBe(401);
});

test("sign-up needs the invite code and a free username", async ({ page }) => {
  const username = uniqueUsername("dana");
  await page.goto("/signup");
  await page.getByLabel("First name").fill("Dana");
  await page.getByLabel("Last name").fill("Levi");
  await page.getByLabel("Username").fill(username);
  await page.getByLabel("Password", { exact: true }).fill(TEST_PASSWORD);
  await page.getByLabel("Confirm password").fill(TEST_PASSWORD);
  await page.getByLabel("Invite code").fill("wrong-code");
  await page.getByRole("button", { name: "Create account" }).click();
  await expect(page.getByRole("alert").filter({ hasText: /invite code/i })).toBeVisible();
  await expect(page.getByLabel("First name")).toHaveValue("Dana");

  await signUp(page, { username });
  await page.context().clearCookies();
  await page.goto("/signup");
  await page.getByLabel("First name").fill("Other");
  await page.getByLabel("Last name").fill("Person");
  await page.getByLabel("Username").fill(username);
  await page.getByLabel("Password", { exact: true }).fill(TEST_PASSWORD);
  await page.getByLabel("Confirm password").fill(TEST_PASSWORD);
  await page.getByLabel("Invite code").fill(E2E_AUTH.SITE_PASSWORD);
  await page.getByRole("button", { name: "Create account" }).click();
  await expect(page.getByRole("alert").filter({ hasText: /already taken/i })).toBeVisible();
});

test("a wrong password is refused; the right one returns to the requested page", async ({ page }) => {
  const username = await signUp(page, { first: "Dana", last: "Levi" });
  await page.context().clearCookies();

  await signIn(page, username, "not-the-password");
  await expect(page.getByRole("alert").filter({ hasText: /don't match/i })).toBeVisible();

  await page.goto("/play/exodus/1");
  await page.getByLabel("Username").fill(username);
  await page.getByLabel("Password").fill(TEST_PASSWORD);
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL(/\/play\/exodus\/1$/);
  await expect(page.getByRole("group", { name: "Answers" })).toBeVisible();

  await page.goto("/about");
  await expect(page.getByText(/signed in as/i)).toContainText("Dana Levi");
  await page.getByRole("button", { name: "Sign out" }).click();
  await page.goto("/");
  await expect(page).toHaveURL(/\/login/);
});

test("progress follows the player to another device", async ({ browser }) => {
  const phone = await browser.newContext();
  const page = await phone.newPage();
  const username = await signUp(page);
  await page.goto("/play/patriarchs/1");
  for (let i = 0; i < 5; i++) {
    await page.getByRole("group", { name: "Answers" }).getByRole("button").first().click();
    await page.getByRole("button", { name: /next question|see results/i }).click();
  }
  await expect(page.getByRole("heading", { level: 2 })).toBeVisible();
  // Wait for the background save. A round can score 0 if every guess is wrong, so compare whole records.
  await page.waitForResponse((r) => r.url().endsWith("/api/progress") && r.request().method() === "PUT");
  const onPhone = await page.evaluate(() => JSON.parse(localStorage.getItem("tte:progress:v1") ?? "{}") as { xp: number; levels: Record<string, unknown> });
  expect(Object.keys(onPhone.levels)).toContain("patriarchs:1");
  await phone.close();

  const laptop = await browser.newContext();
  const page2 = await laptop.newPage();
  await signIn(page2, username);
  const saved = (await (await page2.request.get("/api/progress")).json()) as { progress: { xp: number; levels: Record<string, unknown> } };
  expect(saved.progress.xp).toBe(onPhone.xp);
  expect(saved.progress.levels).toEqual(onPhone.levels);
  await page2.goto("/");
  const xp = page2.getByTestId("xp-total").filter({ visible: true });
  await expect(xp).toContainText(onPhone.xp.toLocaleString("en-US"));
  await laptop.close();
});

test("the admin page needs its own password and lists accounts", async ({ page }) => {
  const username = await signUp(page);
  await page.goto("/admin");
  await expect(page).toHaveURL(/\/admin\/login/);
  await page.getByLabel("Admin password").fill("wrong");
  await page.getByRole("button", { name: "Open" }).click();
  await expect(page.getByRole("alert").filter({ hasText: /wrong admin password/i })).toBeVisible();
  await page.getByLabel("Admin password").fill(E2E_AUTH.ADMIN_PASSWORD);
  await page.getByRole("button", { name: "Open" }).click();
  await expect(page).toHaveURL(/\/admin$/);
  await expect(page.getByRole("heading", { name: "Activity log" })).toBeVisible();
  const row = page.getByRole("row").filter({ hasText: `@${username}` });
  await expect(row).toBeVisible();
  await row.getByRole("button", { name: "Reset" }).click();
  await expect(page.getByRole("status").filter({ hasText: `@${username}` })).toBeVisible();
});
