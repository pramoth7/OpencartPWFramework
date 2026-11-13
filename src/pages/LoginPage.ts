import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {

    //private locators
    private readonly email:Locator;
    private readonly pwd:Locator;
    private readonly loginbtn:Locator;
    private readonly logo:Locator;

    //to initialise the locators 
    constructor(page:Page) {
        super(page);
        this.email= page.getByRole('textbox', { name: 'E-Mail Address' });
        this .pwd = page.getByRole('textbox', { name: 'Password' });
        this.loginbtn = page.getByRole('button', { name: 'Login' });
        this.logo = page.getByRole('img', { name: 'naveenopencart' });
        
    }

    //page actions
    async goLogin():Promise<void> {
        await this.page.goto('opencart/index.php?route=account/login');
    }

    async logoPresent():Promise<boolean> {
        return await this.logo.isVisible();
    }

    async doLogin(username:string,password:string):Promise<void> {
        await this.email.fill(username);
        await this.pwd.fill(password);
        await this.loginbtn.click();
    }


}