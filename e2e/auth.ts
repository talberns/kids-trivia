import { expect, type Page } from "@playwright/test";
import { E2E_AUTH } from "./credentials";

export async function signIn(page: Page, first = "Test", last = "Player") {
  await page.goto("/login");
  await page.getByLabel("First name").fill(first);
  await page.getByLabel("Last name").fill(last);
  await page.getByLabel("Password").fill(E2E_AUTH.SITE_PASSWORD);
  await page.getByRole("button", { name: "Enter" }).click();
  await expect(page).not.toHaveURL(/\/login/);
}
