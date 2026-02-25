import { expect } from '@playwright/test';

exports.RealmListPage = class RealmListPage{
    
    constructor(page){
        this.page = page
        this.manageRealmButton =  page.getByTestId('nav-item-realms')
    }

     async openRealmList(){
        await this.manageRealmButton.click()
    }

     async clickCreateRealm(){
         const createRealmBtn =  this.page.getByTestId('add-realm');
         await expect(createRealmBtn).toBeVisible();
         await createRealmBtn.click();
    }

     async selectRealm(realmName){
        const realmItem = this.page.getByLabel('Select realm').getByText(realmName)
        await expect(realmItem).toBeVisible();
        await realmItem.click()
    }

   
}
