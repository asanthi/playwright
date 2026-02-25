import { Page, Locator, expect } from '@playwright/test';


export class NasaAPIPage {
  readonly page: Page;
  readonly APIKeyInput: Locator;
  readonly saveButton : Locator;
  readonly APIKey: string = process.env.NASA_API_KEY!;
  readonly pageClose : Locator;
  readonly addField : Locator;
  readonly startDate : Locator;
  readonly startDateExpression : Locator
  readonly startDateExpressionExpander : Locator
  readonly startDateExpressionTextBox : Locator
  readonly startDateExpressionExpanderClose : Locator
  readonly donkiSolarFlareClose : Locator
  readonly runNode : Locator

  constructor(page: Page) {
    this.page = page;
    this.APIKeyInput = page.locator('[data-test-id="parameter-input-field"][type="password"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.pageClose = page.getByRole('button', { name: 'Close this dialog' });
    this.addField = page.getByRole('combobox', { name: 'Add field' })
    this.startDate = page.getByText('Start Date');
    this.startDateExpression =page.getByRole('radio', { name: 'Expression' });
    this.startDateExpressionExpander = page.locator('[data-test-id="expander"]');
    this.startDateExpressionTextBox = page.locator('[data-test-id="expression-modal-input"]').getByRole('textbox');
    this.startDateExpressionExpanderClose = page.locator('._close_7824b_214');
    this.runNode= page.locator('[data-test-id="node-execute-button"]');
    this.donkiSolarFlareClose = page.locator('[data-test-id="ndv-close-button"]')
  }

  async addAPIKey(): Promise<void> {
    await this.APIKeyInput.fill(this.APIKey);
    await expect(this.saveButton).toBeVisible();
    await this.saveButton.click();
    await expect(this.page.getByText('Saved', { exact: true })).toBeVisible();
    await expect(this.pageClose).toBeVisible();
    await this.pageClose.click();
    
  }

  async addAdditionalFields() :Promise<void> {
    await this.addField.click();
    await this.startDate.click();
    await this.startDateExpression.click();
    await this.startDateExpressionExpander.click();
    await this.startDateExpressionTextBox.fill("{{ $today.minus(7, 'days') }}");
    await this.startDateExpressionExpanderClose.click();
    await this.runNode.click();
    await this.donkiSolarFlareClose.click();
    
   
  }



}
