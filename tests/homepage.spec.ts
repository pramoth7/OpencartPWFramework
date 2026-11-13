import {test , expect} from '../src/Fixtures/pagefixtures.js';




test.beforeEach(async ({loginpage}) => {
  
  await loginpage.goLogin();
  await loginpage.doLogin('pwtestbatch@open.com','pw123');

});

test('logout link present or not',async({homepage}) => {
    expect(await homepage.logoutLink()).toBeTruthy();
});

test('validate all headers',async({homepage}) => {
    let allHeaders =await homepage.validateHeaders();
    console.log('home page headers'+ allHeaders);
    expect (allHeaders).toHaveLength(4);
})