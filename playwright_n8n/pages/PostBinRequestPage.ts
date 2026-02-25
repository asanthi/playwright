import { Page, Locator, } from '@playwright/test';

export class PostBinRequestPage {
    readonly page: Page;
    readonly binId: Locator
    readonly postBinId1: string = process.env.POSTBIN1ID!;
   // readonly postBinId2: string = process.env.POSTBIN2ID!;
    readonly binExpression: Locator;
    readonly binExpExpander: Locator;
    readonly binExpTextBox: Locator;
    readonly binExpClose: Locator
    readonly classType : Locator
    readonly ifNodeOutputList : Locator
    readonly postBinClose : Locator



    constructor(page: Page) {
        this.page = page;
        this.binId = page.locator('[data-test-id="parameter-input-field"][type="text"]');
        this.binExpression = page.locator('[data-test-id="binContent-parameter-input-options-container"]').locator('[data-test-id="radio-button-expression"]');
        this.binExpExpander = page.locator('[data-test-id="expander"]');
        this.binExpTextBox = page.locator('[data-test-id="expression-modal-input"]').getByRole('textbox');
        this.ifNodeOutputList = page.locator('.el-dialog__body .run-data-schema').locator('[data-test-id="run-data-schema-header"]').filter({ hasText: /^If\b/ }).first();
        this.binExpClose = page.locator('.el-dialog__body').locator('button._close_7824b_214');
        this.postBinClose = page.locator('[data-test-id="ndv-close-button"]');
        this.classType = page.locator('[data-test-id="run-data-schema-node-name"]').filter({ hasText: 'classType' });

    }

    async addRequestData(): Promise<void> {
       // if (whichBin === 'postBin1') {
       //     await this.binId.fill(this.postBinId1);
       // } else {
       //     await this.binId.fill(this.postBinId2);
       // }
       await  this.binId.fill(this.postBinId1)
        await this.binExpression.click();
        await this.binExpExpander.click();
        await this.binExpTextBox.click();
        //Clear the text box
        await this.page.keyboard.press(process.platform === 'darwin' ? 'Meta+A' : 'Control+A');
        await this.page.keyboard.press('Backspace');
        await this.binExpTextBox.fill('There was a solar flare of class {{ $json.classType }}')


        //Drag classType to the textbox - doesnt work cz the list doesnt appear 

       //await this.ifNodeOutputList.click();
      // await this.classType.dragTo(this.binExpTextBox);

        await this.binExpClose.click();
        await this.postBinClose.click();

    }







}