import {test,expect} from '@playwright/test'

test('Selectors Demo', async({page})=> {
    await page.goto('https://www.saucedemo.com/')
    //to keep the page open and open playwright inspector
    await page.pause()

    // you can use .clicl or .locator below 

    // await page.click('id=user-name')
    // await page.locator('id=user-name').fill('Edison')

    //using css id selector
    await page.locator('[id="user-name"]').fill('Einstein')
    

     //using xpath
    await page.locator('xpath=//input[@name="user-name"]').fill("Faraday")
   await page.locator('//input[@name="password"]').fill("Ramanujan")



    //using css attribute selector
    //await page.locator('#login-button').click()
    //await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()

   
});

