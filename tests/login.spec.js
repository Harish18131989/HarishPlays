import { test } from '../fixtures/loginFixture.js';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { Sortingproductpage } from '../pages/Sortingproductpage.js';
import { readExcel } from '../utility/excelutility.js';

const loginData = readExcel(
    './testdata/loginData.xlsx',
    'Login'
);
test('Login and navigate to Products', async ({ page,loginfix  }) => {

    // const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const productsPage = new ProductsPage(page);

    await loginfix.goto('/');

    await loginfix.login(
    loginData[0].username,
    loginData[0].password
);
    
    const isProductsPage = await productsPage.verifyProductsPage();

console.log('Products page displayed:', isProductsPage);

    await expect(page).toHaveURL(/inventory/);

    // await expect(dashboardPage.productsTitle).toHaveText('Products');

    console.log('Login successful');
    console.log('Current URL:', page.url());
});

test("Product sorting", async({page,loginfix })=>
{
    // const loginPage = new LoginPage(page);
    const sorting=new Sortingproductpage(page);
    
     await loginfix.goto('/');
     await loginfix.login('standard_user', 'secret_sauce');
     await sorting.productclick();
     await sorting.sorting_Verification();
     console.log("feature branch");
     console.log("day2 commits");
     console.log("Main branch developer update");
     


})