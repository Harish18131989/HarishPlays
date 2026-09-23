import {BasePage} from "./BasePage.js";

export class ProductsPage extends BasePage
{
 constructor(page)
 {
    super(page);
    this.productsTitle =page.locator(".title");
    this.bag=page.locator("//div[text()='Sauce Labs Backpack']");
    this.addtocartbtn=page.locator("//*[@id='add-to-cart']");
    this.addtocartmenu=page.locator("[data-test='shopping-cart-link']");
    this.cartTitle = page.locator('.title');
 }
 async verifyProductsPage()
 {
    await this.productsTitle.isVisible();
    await this.bag.click();
    
 }
 async addBackpackToCart()
 {
    await this.addtocartbtn.click();
    await this.addtocartmenu.isVisible();
    await  this.addtocartmenu.click();

 }
 async verifyCartPage()
 {
    await this.cartTitle.isVisible();

 }
}