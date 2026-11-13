import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class HomePage extends BasePage {
    private readonly logoutlink:Locator;
    private readonly headers:Locator;


constructor(page:Page) {
    super(page)
    this.logoutlink = page.getByRole('link', { name: 'Logout' });
    this.headers = page.getByRole('heading',{level:2});
}

async logoutLink():Promise<boolean> {
    return await this.logoutlink.isVisible();
}
async validateHeaders():Promise<string[]> {
    return await this.headers.allInnerTexts();
}
}