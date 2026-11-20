import { expect, type Page } from "@playwright/test";
import { E2E_AUTH } from "./credentials";

export const TEST_PASSWORD = "correct-horse-42";

/** A username nobody else in this test run has. */
export function uniqueUsername(prefix = "tester"): string {
  return `${prefix}${Date.now().toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}`.slice(0, 24);
}

/** Creates a fresh account through the sign-up form and lands signed in. */
export async function signUp(page: Page, opts: { first?: string; last?: string; username?: string; next?: string } = {}) {
  const username = opts.username ?? uniqueUsername();
  await page.goto(opts.next ? `/signup?next=${encodeURIComponent(opts.next)}` : "/signup");
  await page.getByLabel("First name").fill(opts.first ?? "Test");
  await page.getByLabel("Last name").fill(opts.last ?? "Player");
  await page.getByLabel("Username").fill(username);
  await page.getByLabel("Password", { exact: true }).fill(TEST_PASSWORD);
  await page.getByLabel("Confirm password").fill(TEST_PASSWORD);
  await page.getByLabel("Invite code").fill(E2E_AUTH.SITE_PASSWORD);
  await page.getByRole("button", { name: "Create account" }).click();
  await expect(page).not.toHaveURL(/\/signup/);
  return username;
}

export async function signIn(page: Page, username: string, password = TEST_PASSWORD) {
  await page.goto("/login");
  await page.getByLabel("Username").fill(username);
  await page.getByLabel("Password").fill(password);
  await page.getByRole("button", { name: "Sign in" }).click();
}

/** Back-compat helper used by the smoke tests: any signed-in player. */
export async function signInAny(page: Page) {
  return signUp(page);
}
