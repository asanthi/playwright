import { test, expect } from '@playwright/test';

let context;
let page;

test.beforeAll(async({browser})=>{

   context = await browser.newContext();
   await context.tracing.start({
    snapshots:true, 
    screenshots:true
  });
    page =  context.newPage();
  })



test('record demo test', async ({ page ,context }) => {
 // await context.tracing.start({snapshots:true, screenshots:true})
  await page.goto('https://www.google.com');
  await page.getByRole('combobox', { name: 'Search' }).click();
  //await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('test tst');
 
 // await context.tracing.stop({path:'test1_trace.zip'})

})

test.afterAll(async ()=>{

    await context.tracing.stop({path:'test1_trace.zip'})
    
})
