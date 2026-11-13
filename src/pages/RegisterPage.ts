import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class RegisterPage extends BasePage {
    private readonly fName:Locator;
    private readonly lName:Locator;
    private readonly email:Locator;
    private readonly telephone:Locator;
    private readonly password:Locator;
    private readonly confirmpwd:Locator;
    private readonly chkbox:Locator;
    private readonly cfmbutton:Locator;

    constructor(page:Page){
        super(page);
        this.fName = page.getByRole('textbox', { name: '* First Name' });
        this.lName = page.getByRole('textbox', { name: '* Last Name' });
        this.email = page.getByRole('textbox', { name: '* E-Mail' });
        this.telephone = page.getByRole('textbox', { name: '* Telephone' });
        this.password = page.getByRole('textbox', { name: '* Password', exact: true });
        this.confirmpwd = page.getByRole('textbox', { name: '* Password Confirm' });
        this.chkbox = page.locator('[name="agree"]');
        this.cfmbutton = page.getByRole('button', { name: 'Continue' });
}
async navigateToRegister():Promise<void> {
    await this.page.goto('opencart/index.php?route=account/register');
}
async personalDetails(firstNme:string,lastNme:string,emailID:string,telephoneNo:string):Promise<void> {
    await this.fName.fill(firstNme);
    await this.lName.fill(lastNme);
    await this.email.fill(emailID);
    await this.telephone.fill(telephoneNo);

}
async passwordSection(pwd:string,cpwd:string):Promise<void> {
    await this.password.fill(pwd);
    await this.confirmpwd.fill(cpwd);
}
async confirmationSection():Promise<void> {
    await this.chkbox.click();
    await this.cfmbutton.click();
}
}