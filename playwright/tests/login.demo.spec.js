import {test, expect} from '@playwright/test'

test('Demo Login test 1', async({page})=> {

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Asanthi')
    await page.locator('[placeholder="Enter your password"]').fill('asanthipw')
    
    await page.waitForSelector('text=Sign in',{timmeout: 5000}) 
    await page.locator('text=Sign in').click()

})

test('Demo Login test 2', async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.locator('span').filter({ hasText: 'manda user' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


})

test.only('Demo Login test 3', async({page})=> {
    await page.pause()
    await page.goto('https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F');
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).press('Control+a');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourestore.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).press('Control+a');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();



})