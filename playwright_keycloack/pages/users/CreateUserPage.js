import { expect } from '@playwright/test';

exports.CreateUserPage = class CreateUserPage{
    
    constructor(page){
        this.page = page;
        this.userName =  page.getByTestId('username')
        this.email = page.getByTestId('email')
        this.firstName = page.getByTestId('firstName')
        this.lastName = page.getByTestId('lastName')
        this.password = page.getByTestId('passwordField')
        this.confirmPassword = page.getByTestId('passwordConfirmationField')
        this.createBtn =  page.getByRole('button', { name: 'Create' })
        this.credentialsTab =  page.getByTestId('credentials')
        this.credentialsBtn =  page.getByRole('button',{name :'Set password'})
        this.savePassword =  page.getByRole('button',{name :'Save'})
        this.saveConfirmPassword =  page.getByRole('button',{name :'Save password'})
    }

    async createUser(userName,email,firstName,lastName,password,confirmPassword){
        await this.userName.fill(userName);
        await this.email.fill(email);
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);

        await this.createBtn.click();
        await this.credentialsTab.click();
        await this.credentialsBtn.click();
        await this.password.fill(password)
        await this.confirmPassword.fill(confirmPassword)
        const toggle = this.page.locator('.pf-v5-c-switch.pf-v5-u-mb-md > .pf-v5-c-switch__toggle');
        const isChecked = await toggle.getAttribute('aria-checked');
        // TURN OFF
        if (isChecked === 'true') {
            await toggle.click();
        }
        await this.savePassword.click();
        await this.saveConfirmPassword.click();
       
    }

    async expectNewClientDisplay(){
        await expect(this.usertName).toBeVisible();
    }
}
