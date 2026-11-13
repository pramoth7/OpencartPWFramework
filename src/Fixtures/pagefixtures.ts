
import { test as baseTest, expect } from "@playwright/test";

import { HomePage } from "../pages/HomePage.js";
import { RegisterPage } from "../pages/RegisterPage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { CsvHelper } from "../Utils/CSVHelper.js";

// Define custom fixture types
type PageFixtures = {
    loginpage: LoginPage;
    homepage: HomePage;
    registerpage: RegisterPage
    testData: Record<string,string>[]
};

// Extend Playwright's built-in test
export const test = baseTest.extend<PageFixtures>({

    loginpage: async ({ page }, use) => {
        const loginpage = new LoginPage(page);
        await use(loginpage);
    },

    homepage: async ({ page }, use) => {
        const homepage = new HomePage(page);
        await use(homepage);
    },

    testData: async({}, use) => {
        let testData = CsvHelper.readCSV('src/testdata/logindata.csv');
        await use(testData);
    },
    registerpage: async ({ page }, use) => {
        const registerpage = new RegisterPage(page);
        await use(registerpage);

    }

});

export { expect };
