import {test , expect} from '../src/Fixtures/pagefixtures.js';
import { RegisterPage } from '../src/pages/RegisterPage.js';
import { CsvHelper } from '../src/Utils/CSVHelper.js';

test.beforeEach(async ({registerpage}) => {
    await registerpage.navigateToRegister();
})

let testdata = CsvHelper.readCSV('src/testdata/RegisterPage.csv');
for(let row of testdata){
test('enter personal details', async({registerpage}) => {
    await registerpage.personalDetails(row.firstname,row.lastname,row.email,row.telephone);
});
};
let testdata2 = CsvHelper.readCSV('src/testdata/RegisterPage.csv');
for(let row of testdata){
test('password section',async ({registerpage}) => {
    await registerpage.passwordSection(row.password,row.password);
});
};

test('confirmation section',async ({registerpage}) => {
    await registerpage.confirmationSection();
})