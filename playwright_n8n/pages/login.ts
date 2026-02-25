import { Page, Locator } from '@playwright/test';

export class LoginPage {
   readonly page: Page;

   readonly usernameTextbox: Locator;
   readonly passwordTextbox: Locator;
   readonly loginButton: Locator;

  constructor(page: Page) {
     this.page = page;

     this.usernameTextbox = page.locator('[name="emailOrLdapLoginId"]');
     this.passwordTextbox = page.locator('[name="password"]');
     this.loginButton = page.locator('[data-test-id="form-submit-button"]');
   }

  async goToLoginPage(): Promise<void> {
    await this.page.goto('https://sameerajayasoma.app.n8n.cloud/home/workflows');
  }

   async login(username: string, password: string): Promise<void> {
  //  await this.page.locator('div').filter({ hasText: 'Sign inEmail Password Sign' })
    await this.usernameTextbox.fill(username)
    await this.passwordTextbox.fill(password)
    await this.loginButton.click();
}

}