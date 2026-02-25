import { expect } from '@playwright/test';

exports.CreateRealmPage = class CreateRealmPage{
    
    constructor(page){
        this.page = page;
        this.realmName = page.getByTestId('realm')
        this.createBtn = page.getByTestId('create')
    }

    async createRealm(realmName){
        await this.realmName.fill(realmName);
        await this.createBtn.click();
    }

    async expectNewRealmDisplay(){
        await expect(this.realmName).toBeVisible();
    }
}
