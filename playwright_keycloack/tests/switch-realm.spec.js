import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login'
import {ManageRealmPage} from '../pages/realms/RealmListPage'
import { AdminHomePage } from '../pages/adminHomePage';

test ('Switch realm', async ({page})=> {

    //Login to Admin console
    const Login = new LoginPage(page);
    await Login.goToLoginPage();
    await Login.login('admin','admin')
    //await page.pause();

    //Select manage realms
    const HomePage = new AdminHomePage(page);
    await HomePage.manageRealms.openRealmList();

    //Select realm
    await HomePage.manageRealms.selectRealm('qa-realm');

})