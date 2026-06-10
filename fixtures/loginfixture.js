import  {test as base} from '@playwright/test';
import LoginPage from '../pages/Loginpage.js'; // ✅ NO braces


export const test = base.extend({
    loginPage: async ({ page }, use) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login('NewUser1110', 'User1110');
        await use(login);
    }
});
//export{expect};
    