import {test,expect} from '@playwright/test';

let AUTH_TOKEN = {Authorization:'Bearer gorest_1b0PYSZd2z1lUlaOufAwPWZZKYyCTuMzvgKBunnQu414Q764i'};

test('get users test',async({request}) => {
   let response = await request.get('https://gorest.co.in/public/v3/users',{
        headers: AUTH_TOKEN
    });

   let jsonbody = await response.json();
   console.log(jsonbody);

   console.log(response.status());
   console.log(response.statusText());


})

test('create users',async({request}) => {
    let testData= {
        name:'pramoth',
        email:'pramoth33@testmail.com'
    };

    let response =await request.post('https://gorest.co.in/public/v3/users',{
        headers:AUTH_TOKEN,
        data:testData

    });

    let jsonbody =await response.json();
    console.log(jsonbody);

    console.log(response.status());
    console.log(response.statusText());


})

test('delete user',async({request}) => {
    let response =await request.delete('https://gorest.co.in/public/v2/users/8705792',{
        headers:AUTH_TOKEN
    });

    console.log(response.status());
    console.log(response.statusText());
});
