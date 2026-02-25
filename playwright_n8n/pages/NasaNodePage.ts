import { Page, Locator } from '@playwright/test';

export class NasaNodePage {
    readonly page: Page;
    readonly credentialsDropDown: Locator;
    readonly createNewCredentials: Locator;

    constructor(page: Page) {
        this.page = page;
        this.credentialsDropDown =  page.getByPlaceholder('Select Credential');
        this.createNewCredentials = page.locator('[data-test-id="node-credentials-select-item-new"]')
    }

    async addNewCredentials(): Promise<void> {
        await this.credentialsDropDown.click();
        await this.createNewCredentials.click();
    }







}