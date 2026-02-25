import { Page, Locator } from '@playwright/test';

export class NasaOpenApiPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly signupButton: Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.firstName =  page.locator('[name="user[first_name]"]');
        this.lastName =  page.locator('[name="user[last_name]"]');
        this.email =  page.locator('[name="user[email]"]');
        this.signupButton = page.getByRole('button', { name: 'Sign up' });
   }
    

    async goToNasaOpenApiPage(): Promise<void> {
        await this.page.goto('https://api.nasa.gov/');
  }
    async generateApiKey(
        userFirsName: string,
        userLastName : string,
        userEmail : string
    ): Promise<void> {
        await this.firstName.fill(userFirsName);
        await this.lastName.fill(userLastName);
        await this.email.fill(userEmail);
        await this.signupButton.click();

    }
}
