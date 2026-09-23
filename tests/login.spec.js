import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { Sortingproductpage } from '../pages/Sortingproductpage.js';

test('Login and navigate to Products', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto('/');

    await loginPage.login('standard_user', 'secret_sauce');
    
    const isProductsPage = await productsPage.verifyProductsPage();

console.log('Products page displayed:', isProductsPage);

    await expect(page).toHaveURL(/inventory/);

    // await expect(dashboardPage.productsTitle).toHaveText('Products');

    console.log('Login successful');
    console.log('Current URL:', page.url());
});

test("Product sorting", async({page})=>
{
    const loginPage = new LoginPage(page);
    const sorting=new Sortingproductpage(page);
    
     await loginPage.goto('/');
     await loginPage.login('standard_user', 'secret_sauce');
     await sorting.productclick();
     await sorting.sorting_Verification();
     console.log("feature branch");
     console.log("day2 commits");
     console.log("Main branch developer update");
     


})