import { test, expect } from '@playwright/test';

exports.AppLoginPage = class AppLoginPage {

    constructor(page) {
        this.page = page
        this.realm = page.getByRole('textbox', { name: 'Realm' })
        this.client = page.getByRole('textbox', { name: 'Client' })
        this.saveRealmAndClient = page.getByRole('button', { name: 'Save' })
        this.signIn = page.getByText('Sign in')
        this.user = page.getByRole('textbox', { name: 'Username or email' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.signInToAppBtn = page.getByRole('button', { name: ' Sign in ' })

    }

    async goToApp() {
        await this.page.goto('https://www.keycloak.org/app/');
    }

    async signInToApp(username, password, realm, client) {
        await this.realm.fill(realm)
        await this.client.fill(client)
        await this.saveRealmAndClient.click()
        await this.signIn.click()
        await this.user.fill(username)
        await this.password.fill(password)
        await this.signInToAppBtn.click()
    }

      async signOutOfApp(){
        await this.page.goto('http://localhost:8080/realms/qa-realm/protocol/openid-connect/logout');
        await this.page.getByRole('button', { name: 'Logout' }).click();
    }

    //Assert sign in
    async assertSuccessfulLogIn(userFullName) {
        await expect(this.page.getByText(userFullName)).toBeVisible();
    }

    async assertInvalidLogIn(invalidLoginText) {
        await expect(this.page.getByText(invalidLoginText)).toBeVisible();
    }

    async assertSuccessfulLogOut(successfulLogOutText) {

        await expect(this.page.getByText(successfulLogOutText)).toBeVisible();
      
        
    }
}

