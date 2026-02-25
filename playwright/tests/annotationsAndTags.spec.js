import {test, expect} from '@playwright/test'

test.skip('Test One', async({page})=> {
})

test('not yet ready', async ({page})=> {
    test.fail();
})

test.fixme('test to be fixed', async ({page})=> { 
})

test ('Slow test ', async ({page})=> {
    test.slow() // will have triple thre timeout

})

test ('Test login page @fast', async ({page})=> {
    //...
})