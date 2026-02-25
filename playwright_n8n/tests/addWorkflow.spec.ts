import { test, Page } from "@playwright/test"
import { LoginPage } from '../pages/login';
import { HomePage } from "../pages/home";
import { WorkflowPage } from "../pages/workflow"
import { ScheduleTriggerPage } from "../pages/ScheduleTriggerPage";
import { NasaNodePage } from "../pages/NasaNodePage";
import { NasaAPIPage } from "../pages/NasaApiPage";
import { IfPage } from "../pages/ifPage";
import { PostBinRequestPage} from "../pages/PostBinRequestPage"


test('Add New Workflow', async ({ page }: { page: Page }) => {

   
    const loginPage: LoginPage = new LoginPage(page);
    await loginPage.goToLoginPage()
    await loginPage.login('sameera.jayasoma@gmail.com', 'didxog-wEzke8-regwyg')

    const homePage: HomePage = new HomePage(page);
    await homePage.createWorkflow()

    const workflowPage: WorkflowPage = new WorkflowPage(page);
    await workflowPage.addFirstStep()
    await workflowPage.searchAndAddNode('Schedule Trigger')


    //First step - Add schedule trigger
    const scheduleTrigger: ScheduleTriggerPage = new ScheduleTriggerPage(page);
    await scheduleTrigger.addTriggerRules('Weeks', 1, 'Monday', '9am');

    //Add next node - NASA
    await workflowPage.addNode();
    await workflowPage.searchAndAddNode('NASA');
    await workflowPage.selectNodeAction('Get a DONKI solar flare');

    const nasaNode: NasaNodePage = new NasaNodePage(page);
    await nasaNode.addNewCredentials();

    const nasaApiPage: NasaAPIPage = new NasaAPIPage(page);
    await nasaApiPage.addAPIKey();
    await nasaApiPage.addAdditionalFields();

    //Add if node
    await workflowPage.addNode();
    await workflowPage.searchAndAddNode('If');
    const ifPage : IfPage = new IfPage(page);
    await ifPage.addIfConditions()    
    
    //Add PostBinNodeTrue
    await workflowPage.addNodeToIf('true');
    await workflowPage.searchAndAddNode('PostBin');
    await workflowPage.selectNodeAction('Send a request');
    
    const postBinRequestPage : PostBinRequestPage = new PostBinRequestPage(page);
  //  await page.pause();
    await postBinRequestPage.addRequestData();
   

     //Add PostBinNodeFalse
    await workflowPage.addNodeToIf('false');
    await workflowPage.searchAndAddNode('PostBin');
    await workflowPage.selectNodeAction('Send a request');
    await postBinRequestPage.addRequestData();
    await page.pause()


});

