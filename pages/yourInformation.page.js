const { expect } = require('@playwright/test');
exports.YourInformationPage = class YourInformationPage {
    constructor(page) {
        this.page = page;
        this.firstNameField = page.locator('//input[@id="first-name"]')
        this.lastNameField = page.locator('//input[@id="last-name"]')
        this.zipCodeField = page.locator('//input[@id="postal-code"]')
        this.continueBtn = page.locator('//input[@id="continue"]')
    }

    async typeFirstName(firstName) {
        await this.firstNameField.fill(firstName)
    }

    async typeLastName(lastName) {
        await this.lastNameField.fill(lastName)
    }

    async typeZipCode(zipCode) {
        await this.zipCodeField.fill(zipCode)
    }

    async clickContinue() {
        await this.continueBtn.click()
    }

}