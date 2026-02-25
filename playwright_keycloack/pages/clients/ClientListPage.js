import { expect } from '@playwright/test';

exports.ClientListPage = class ClientListPage{
    
    constructor(page){
        this.page = page
        this.clientsButton =  page.getByTestId('nav-item-clients')
    }

     async openClientList(){
        await this.clientsButton.click()
    }

    async clickCreateClient(){
        const createClientBtn =  this.page.getByTestId('createClient');
        await expect(createClientBtn).toBeVisible();
        await createClientBtn.click();
    
    }

    

   
}
