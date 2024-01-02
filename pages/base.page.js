const { test, expect } = require('@playwright/test');

exports.BasePage = class BasePage {

    constructor(page) {
        this.page = page;
    }

    async toHaveTitle(text) {
        await expect(this.page).toHaveTitle(text);
    }

    async titleTextToBeVisible(text) {
        await expect(this.page.locator('//*[@class="title"][text()="' + text + '"]')).toBeVisible({ timeout: 50000 });
    }
    

}