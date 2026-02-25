import { test, Page } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Navigate to login page and log in', async ({ page } :{page : Page}) => {

    const loginPage : LoginPage = new LoginPage(page);

    await loginPage.goToLoginPage()
    await loginPage.login('kaushie.kk@gmail.com','KingKong56!')

  
 
});

