import { Page, Locator, expect } from '@playwright/test';

export class PostBinIDGenPage {
  readonly page: Page;
  readonly createBinButton: Locator;
  readonly binText: Locator


  constructor(page: Page) {
    this.page = page;
    this.createBinButton = page.getByRole('button', { name: 'Create Bin' })
    this.binText = page.locator('#app h2')

  }

  async goToPostBinPage(): Promise<void> {
    await this.page.goto('https://www.postb.in/');
  }

  async createBin(username: string, password: string): Promise<void> {
    await this.createBinButton.click()

  }

  async extractBinId(): Promise<string> {
  const binHeader = this.page.getByRole('heading', { name: /^Bin '/ });

  await expect(binHeader).toBeVisible();

  const binText = await binHeader.textContent();
  if (!binText) {
    throw new Error('Bin header text not found');
  }

  const match = binText.match(/Bin '(.+)'/);
  if (!match) {
    throw new Error(`Unexpected bin format: ${binText}`);
  }

  return match[1];
}

}