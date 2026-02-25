import { Page, Locator } from '@playwright/test';

export class ScheduleTriggerPage {
   readonly page: Page;
   readonly triggerIntervalDropDown : Locator
   readonly betweenTriggersValue : Locator
   readonly triggerDayDropDown : Locator
   readonly triggerTimeDropDown : Locator

  constructor(page: Page) {
    this.page = page;
    this.triggerIntervalDropDown = page.getByRole('combobox').nth(0);
    this.betweenTriggersValue = page.locator('input[role="spinbutton"][min="-Infinity"][max="Infinity"]');
    this.triggerDayDropDown = page.getByRole('combobox').nth(1);
    this.triggerTimeDropDown = page.locator('[data-test-id="parameter-input-triggerAtHour"]').getByRole('combobox', { name: 'Select' });
   }

  async addTriggerRules(
   interval : string,
   betweenTriggers : number,
   triggerDay : string,
   triggerTime : string,
   // triggerAt : number 
     ): Promise<void>{

    await this.triggerIntervalDropDown.click();
    await this.page.getByText(interval, { exact: true }).click();

    await this.betweenTriggersValue.fill(betweenTriggers.toString())

    await this.triggerDayDropDown.click()
    await this.triggerDayDropDown.press('Backspace');
    await this.triggerDayDropDown.press('Backspace');
    await this.page.getByText(triggerDay, { exact: true }).click();

    await this.triggerTimeDropDown.click();
    await this.page.getByText(triggerTime, { exact: true }).click();

    //close window
    await this.page.locator('[data-test-id="ndv-close-button"]').click();




  }

   


   


}