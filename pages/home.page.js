const { expect } = require('@playwright/test');
exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.cart = page.locator('//a[@class="shopping_cart_link"]');
        this.cartItemsAreInTotal = page.locator('//span[@class="shopping_cart_badge"]');
    }

    async addToCart(text) {
        await this.page.locator("//div[text()='" + text + "']/ancestor::div[2]//button").click();
    }

    async clickCart() {
        await this.cart.click();
    }

    async verifyCartItemsAreInTotal(number) {
        const cartItemsAreInTotal = await this.cartItemsAreInTotal.innerText();
        await expect(cartItemsAreInTotal).toBe(number);
    }

}
