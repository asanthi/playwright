import { Page, Locator } from '@playwright/test';

export class WorkflowPage {
  readonly page: Page;
  readonly addFirstStepButton: Locator
  readonly nodeSearch: Locator
  readonly scheduleTrigger: Locator
  readonly addNodeButton: Locator
  readonly addNodeToIfNode: Locator


  constructor(page: Page) {
    this.page = page;
    this.addFirstStepButton = page.locator('[data-test-id="canvas-add-first-step-button"]');
    this.addNodeButton = page.locator('[data-test-id="canvas-handle-plus"]');
    this.nodeSearch = page.locator('[data-test-id="node-creator-search-bar"]');
    this.scheduleTrigger = page.getByText('Schedule Trigger');
    this.addNodeToIfNode = page.locator('.canvas-node-handle-main-output')

  }

  async addFirstStep(): Promise<void> {
    await this.addFirstStepButton.click();
  }

  async addNode(): Promise<void> {
    await this.addNodeButton.click();
  }

  async addNodeToIf(nodeOption: string): Promise<void> {
    await this.addNodeToIfNode.filter({ hasText: nodeOption }).locator('[data-test-id="canvas-handle-plus"]').click();
  }

  async searchAndAddNode(searchString: string): Promise<void> {
    await this.nodeSearch.fill(searchString);
    await this.page.getByText(searchString, { exact: true }).click();
  }

  async selectNodeAction(nodeAction: string,): Promise<void> {
    await this.nodeSearch.fill(nodeAction);
    await this.page.locator('[data-test-id="node-creator"]').locator('[data-test-id="node-creator-item-name"]', {hasText: nodeAction,}).click();



  };

};




