import { expect } from '@playwright/test';

exports.CreateClientPage = class CreateClientPage{
    
    constructor(page){
        this.page = page;
        this.clientName =  page.getByTestId('clientId')
        this.redirectURI = page.getByTestId('redirectUris0')
        this.webOrigins = page.getByTestId('webOrigins0')
        this.saveBtn =  page.getByRole('button', { name: 'Save' })
    }

    async createClient(clientName, redirectURI, webOrigins){
        await this.clientName.fill(clientName);
        await this.page.getByRole('button', { name: 'Next' }).click();
        await this.page.getByRole('button', { name: 'Next' }).click();
        await this.redirectURI.fill(redirectURI);
        await this.webOrigins.fill(webOrigins);
        await this.saveBtn.click();
    }

    async expectNewClientDisplay(){
        await expect(this.clientName).toBeVisible();
    }
}
