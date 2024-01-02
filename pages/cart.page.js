const { expect } = require('@playwright/test');
exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.yourCartText = page.locator('//span[text()="Your Cart"]');
        this.checkoutBtn = page.locator('//button[@id="checkout"]');

    }

    async addToCart(text) {
        await this.page.locator("//div[text()='" + text + "']/ancestor::div[2]//button").click();
    }

    async productsToBeVisibleInCart(text) {
        await expect(this.page.locator("//div[@class='inventory_item_name'][text()='" + text +"']")).toBeVisible()
    }

    async clickCheckoutBtn() {
        await this.checkoutBtn.click()
    }

}