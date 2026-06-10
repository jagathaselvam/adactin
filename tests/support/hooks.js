const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let browser;
let page;

Before(async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  this.page = page;
});

After(async function () {
  if (page) {
    await page.close();
  }
  if (browser) {
    await browser.close();
  }
});
