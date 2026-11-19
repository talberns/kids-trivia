import { expect, test } from "@playwright/test";
import { E2E_AUTH } from "./credentials";
import { signIn } from "./auth";

test("signed-out visitors are sent to the login page", async ({ page }) => {
  await page.goto("/play/exodus/1");
  await expect(page).toHaveURL(/\/login\?next=%2Fplay%2Fexodus%2F1/);
  await expect(page.getByRole("heading", { name: "Apostle Quiz" })).toBeVisible();
  const api = await page.request.post("/api/events", { data: { type: "page_view", path: "/" } });
  expect(api.status()).toBe(401);
});

test("a wrong password is refused and keeps the typed name", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("First name").fill("Dana");
  await page.getByLabel("Last name").fill("Levi");
  await page.getByLabel("Password").fill("not-the-password");
  await page.getByRole("button", { name: "Enter" }).click();
  await expect(page.getByRole("alert").filter({ hasText: /password isn't right/i })).toBeVisible();
  await expect(page.getByLabel("First name")).toHaveValue("Dana");
});

test("signing in returns to the requested page, and signing out locks it again", async ({ page }) => {
  await page.goto("/play/exodus/1");
  await page.getByLabel("First name").fill("Dana");
  await page.getByLabel("Last name").fill("Levi");
  await page.getByLabel("Password").fill(E2E_AUTH.SITE_PASSWORD);
  await page.getByRole("button", { name: "Enter" }).click();
  await expect(page).toHaveURL(/\/play\/exodus\/1$/);
  await expect(page.getByRole("group", { name: "Answers" })).toBeVisible();

  await page.goto("/about");
  await expect(page.getByText(/signed in as/i)).toContainText("Dana Levi");
  await page.getByRole("button", { name: "Sign out" }).click();
  await page.goto("/");
  await expect(page).toHaveURL(/\/login/);
});

test("the admin page needs its own password", async ({ page }) => {
  await signIn(page);
  await page.goto("/admin");
  await expect(page).toHaveURL(/\/admin\/login/);
  await page.getByLabel("Admin password").fill("wrong");
  await page.getByRole("button", { name: "Open" }).click();
  await expect(page.getByRole("alert").filter({ hasText: /wrong admin password/i })).toBeVisible();
  await page.getByLabel("Admin password").fill(E2E_AUTH.ADMIN_PASSWORD);
  await page.getByRole("button", { name: "Open" }).click();
  await expect(page).toHaveURL(/\/admin$/);
  await expect(page.getByRole("heading", { name: "Activity log" })).toBeVisible();
});
