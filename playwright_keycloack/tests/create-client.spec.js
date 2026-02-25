import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login'
import {ManageRealmPage} from '../pages/realms/RealmListPage'
import { AdminHomePage } from '../pages/adminHomePage';
import {CreateClientPage} from '../pages/clients/CreateClientPage'
import {ClientListPage} from '../pages/clients/ClientListPage'


test ('Create Client in an existing realm', async ({page})=> {

    //Login to Admin console
    const Login = new LoginPage(page);
    await Login.goToLoginPage();
    await Login.login('admin','admin')

    //Open realm list and siwtch to realm
    const HomePage = new AdminHomePage(page);
    await HomePage.manageRealms.openRealmList();
    await HomePage.manageRealms.selectRealm('qa-realm');

    //Open client list
    await HomePage.manageClients.openClientList(); 
    await HomePage.manageClients.clickCreateClient(); 

    //Create client
    const CreateClient = new CreateClientPage(page);
    await CreateClient.createClient('qa-client','https://www.keycloak.org/app/*','https://www.keycloak.org')

    

})