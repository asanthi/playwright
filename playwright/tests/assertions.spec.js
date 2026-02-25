import {test,expect} from '@playwright/test'

test ('Assertions demo', async({page}) => {

    await page.goto('https://kitchen.applitools.com')
    await page.pause()

    //ASSERTIONS
    //check if element is present

    await expect (page.locator('text=The Kitchen')).toHaveCount(1)

    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()

    }

    //Check if element is hidden or visible

    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //check if element is enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    //check test

    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen')

    //check attribute value

    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //check URL and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    //Visual validation with screenshot
    await expect(page).toHaveScreenshot()

})