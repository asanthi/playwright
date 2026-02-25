import { Page, Locator, expect } from '@playwright/test';


export class IfPage {
  readonly page: Page;
  readonly value1Source : Locator
  readonly value1Target : Locator
  readonly value1More : Locator
  readonly value1MoreType : Locator
  readonly value1mMoreCondition : Locator
  readonly value2 : Locator
  readonly runNode : Locator
  readonly ifClose : Locator


  constructor(page: Page) {
   this.page = page;
   this.value1Source = page.locator('[data-test-id="run-data-schema-node-name"]').filter({ hasText: 'classType' });
   this.value1Target = page.locator('[data-test-id="parameter-input-field"][placeholder="value1"]');
   this.value1More = page.getByRole('button', { name: 'is equal to' });
   this.value1MoreType =page.getByText('String');
   this.value1mMoreCondition =page.getByText('contains');
   this.value2 = page.locator('[data-test-id="parameter-input-field"][placeholder="value2"]');
   this.runNode= page.locator('[data-test-id="node-execute-button"]');
   this.ifClose =page.locator('[data-test-id="ndv-close-button"]')
  }

  async addIfConditions(): Promise<void> {
     await this.value1Source.dragTo(this.value1Target);
     await this.value1More.click();
     await this.value1MoreType.click();
     await this.value1mMoreCondition.click();
     
     await this.value2.fill('M');
     await this.runNode.click();
    await this.ifClose.click();

  }


}
