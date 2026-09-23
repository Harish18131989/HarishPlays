import { BasePage } from './BasePage.js';

export class DashboardPage extends BasePage {

    constructor(page) {
        super(page);

        this.productsTitle = page.locator('.title');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.cart = page.locator('.shopping_cart_link');
    }

    async isProductsPageDisplayed() {
        return await this.productsTitle.isVisible();
    }

    async openMenu() {
        await this.menuButton.click();
    }

    async openCart() {
        await this.cart.click();
    }
}