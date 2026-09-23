import{test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
const test= base.extend({
    loginfix:async({page},use)=>
    {
        const log=new LoginPage(page);
        await use(log);
    }
})
export { test };