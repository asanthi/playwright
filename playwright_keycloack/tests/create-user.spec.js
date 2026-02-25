import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login'
import {ManageRealmPage} from '../pages/realms/RealmListPage'
import { AdminHomePage } from '../pages/adminHomePage'
import {UserListPage} from '../pages/users/UserListPage'
import {CreateUserPage} from '../pages/users/CreateUserPage'


test ('Create User in a selected realm', async ({page})=> {

    //Login to Admin console
    const Login = new LoginPage(page);
    await Login.goToLoginPage();
    await Login.login('admin','admin')

    //Open realm list and siwtch to realm
    const HomePage = new AdminHomePage(page);
    await HomePage.manageRealms.openRealmList();
    await HomePage.manageRealms.selectRealm('qa-realm');

    //Open client list
    await HomePage.manageUsers.openUsertList(); 
    await HomePage.manageUsers.clickCreateUser(); 

    //Create user
    const CreateUser = new CreateUserPage(page);
    await CreateUser.createUser('qa-user','qauser@gmail.com','qa-firstname','qa-lastname','qauserpw','qauserpw')
})