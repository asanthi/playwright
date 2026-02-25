import {Page, Locator} from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly addNewItem : Locator;
    readonly addWorkflow : Locator;
    readonly workflowType : Locator;

constructor(page:Page){
    this.page = page;
    this.addNewItem = page.locator('button[aria-label="Add new item"]');
    this.addWorkflow = page.locator('[data-test-id="universal-add"]').getByText('Workflow');
    this.workflowType = page.locator('[data-test-id="universal-add"]').getByRole('link', { name: 'Personal' });
}

async createWorkflow(): Promise<void>{

    await this.addNewItem.click();
    await this.addWorkflow.click();
    await this.workflowType.click();

}


}