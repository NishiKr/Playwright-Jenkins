// @ts-check
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { BasePage } = require('../pages/base.page');
const { HomePage } = require('../pages/home.page');
const { CartPage } = require('../pages/cart.page');
const { YourInformationPage } = require('../pages/yourInformation.page');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
});

test('Ecommerce', async ({ page }) => {

  const basePage = new BasePage(page);
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const yourInformationPage = new YourInformationPage(page);

  await basePage.toHaveTitle("Swag Labs");

  await loginPage.typeUserName('standard_user');
  await loginPage.typePassword();
  await loginPage.clickLoginBtn();

  await basePage.titleTextToBeVisible("Products");
  await homePage.addToCart("Sauce Labs Backpack");
  await homePage.addToCart("Sauce Labs Bike Light");
  await homePage.verifyCartItemsAreInTotal("1");
  await homePage.clickCart();

  await basePage.titleTextToBeVisible("Your Cart");
  await cartPage.productsToBeVisibleInCart("Sauce Labs Backpack");
  await cartPage.productsToBeVisibleInCart("Sauce Labs Bike Light");
  await cartPage.clickCheckoutBtn();

  await basePage.titleTextToBeVisible("Checkout: Your Information");
  await yourInformationPage.typeFirstName("nKR");
  await yourInformationPage.typeLastName("devOn");
  await yourInformationPage.typeZipCode("733922");
  await yourInformationPage.clickContinue();

  await basePage.titleTextToBeVisible("Checkout: Overview");

});