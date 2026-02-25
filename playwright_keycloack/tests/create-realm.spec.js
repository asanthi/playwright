import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/login';
import { AdminHomePage } from '../pages/adminHomePage';
import { CreateRealmPage } from '../pages/realms/createRealmPage';
import {RealmList} from '../pages/realms/RealmListPage'

test('Create a Realm ', async ({ page }) => {

  //Login to admin console
  const Login = new LoginPage(page);
  await Login.goToLoginPage();
  await Login.login('admin','admin');

  //Select manage realms
  const HomePage = new AdminHomePage(page);
  await HomePage.manageRealms.openRealmList();
  await HomePage.manageRealms.clickCreateRealm();

  //Create realm by entering realm name
  const CreateRealm = new CreateRealmPage(page);
  await CreateRealm.createRealm('qa-realm')

  //Switch realm
  await HomePage.manageRealms.openRealmList();
  await HomePage.manageRealms.selectRealm('qa-realm');




});
