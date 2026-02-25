import { test, expect } from '@playwright/test';


import { AppLoginPage } from '../pages/ClientAppLoginPage';


//test.beforeEach(async ({ page, context }) => {
//  await context.clearCookies();
//  await page.goto('https://www.keycloak.org/app/', { waitUntil: 'domcontentloaded' });
//  await page.evaluate(() => {
//            localStorage.clear()
 //           sessionStorage.clear()
 // })
//})

test.only('Authenticate app - successful login', async ({ page }) => {

    const AppLogin = new AppLoginPage(page)

    await AppLogin.goToApp()
    await AppLogin.signInToApp('qa-user','qauserpw','qa-realm','qa-client')
    await AppLogin.assertSuccessfulLogIn('qa-firstname qa-lastname')
   // await page.pause()
   


})

test('Login and logout user', async ({ page }) => {

    const AppLogin = new AppLoginPage(page)

    await AppLogin.goToApp()
    await AppLogin.signInToApp('qa-user','qauserpw','qa-realm','qa-client')
   
    await AppLogin.signOutOfApp()
    await AppLogin.assertSuccessfulLogOut('You are logged out')
    await page.pause()

})


test('Authenticate app - invalid login', async ({ page }) => {

    const AppLogin = new AppLoginPage(page)

    await AppLogin.goToApp()
    await AppLogin.signInToApp('qa-user1','qauserpw','qa-realm','qa-client')
    await AppLogin.assertInvalidLogIn('Invalid username or password.')


})