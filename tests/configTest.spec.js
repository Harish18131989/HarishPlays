import { test, expect } from '@playwright/test';

test('Verify framework configuration', async ({ page }) => {

    await page.goto('/');

    // await expect(page).toHaveTitle(/Swag Labs/);
    await expect(page).toHaveTitle(/WrongTitle/);

    console.log('URL:', page.url());

});