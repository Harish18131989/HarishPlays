import { test, expect } from "@playwright/test";
test("my first test", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    console.log("Page opened");
    console.log("url", page.url());
    await expect(page).toHaveURL("https://playwright.dev/");
    const title = await page.title();
    console.log("title is: " + title)
    await expect(page).toHaveTitle(/Playwright/)
    await page.getByRole("link", { name: "Get started" }).click();


})