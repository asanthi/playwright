import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/login';

test('test', async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.goToLoginPage()
    await Login.login('admin','admin')

  //await page.goto('http://localhost:8080/admin');
  //await page.getByRole('textbox', { name: 'Username or email' }).click();
  //await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  //await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  //await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  //await page.getByRole('button', { name: 'Sign In' }).click();
});