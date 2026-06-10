const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginpage.js');
let loginpage;

Given('User is on the adactin login page', async function () {
   loginpage = new LoginPage(this.page);
   await loginpage.navigateTo();
});

When('User enter the valid username and valid password and clicks login button', async function () {
   await loginpage.login('Hemnath007', 'Hem@1999');
});

When('User enter the {string} and {string} and clicks login button', async function (username, password) {
   await loginpage.login(username, password);
});

When('User enter the "<username>" and "<password>" and clicks login button', async function (username, password) {
   await loginpage.login(username, password);
});

Then('User should be navigated to the search hotel page', async function () {
   await this.page.waitForNavigation();
   const currentUrl = this.page.url();
   expect(currentUrl).not.toBe('https://adactinhotelapp.com/');
});

Then('User should see the error message {string}', async function (errorMessage) {
   const isVisible = await loginpage.iserrorMessageVisible();
   expect(isVisible).toBe(true);
});