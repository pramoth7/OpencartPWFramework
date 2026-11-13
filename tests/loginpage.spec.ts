import {test , expect} from '../src/Fixtures/pagefixtures.js';


test.beforeEach(async ({loginpage}) => {
  await loginpage.goLogin();

});

test('loginpage end to end',async({loginpage,page})=> {
    let value =await loginpage.logoPresent();
    console.log(value);
    await loginpage.doLogin(process.env.USERNAME!,process.env.PASSWORD!);
    await page.pause();

    
});