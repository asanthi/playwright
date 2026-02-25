//const { chromium } = require('playwright');
const { test, expect, chromium } = require('@playwright/test');

test('record demo on codegen', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('hello kitty');

  // ---------------------
  await context.close();
  await browser.close();
});