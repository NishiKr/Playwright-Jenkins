const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginUser = page.locator('[data-test="username"]')
        this.loginPassword = page.locator('[data-test="password"]')
        this.loginBtn = page.locator('[data-test="login-button"]')
    }

    async typeUserName(loginUser) {
        await this.loginUser.fill(loginUser)
    }

    async typePassword() {
        await this.loginPassword.fill("secret_sauce")
    }

    async clickLoginBtn() {
        await this.loginBtn.click()
    }

}