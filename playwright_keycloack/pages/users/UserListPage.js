import { expect } from '@playwright/test';

exports.UserListPage = class UserListPage{
    
    constructor(page){
        this.page = page
        this.usersButton =  page.getByTestId('nav-item-users')
    }

     async openUsertList(){
        await this.usersButton.click()
    }

    async clickCreateUser(){
        const createUserBtn = this.page.locator('[data-testid="no-users-found-empty-action"], [data-testid="add-user"]');
        await expect(createUserBtn).toBeVisible();
        await createUserBtn.click();
    
    }

    

   
}
