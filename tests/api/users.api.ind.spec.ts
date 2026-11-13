import{test,expect} from '../../src/Fixtures/apifixtures.js';
let TOKEN = process.env.API_TOKEN!;
let AUTH_HEADER = {
    Authorization:`Bearer ${TOKEN}`
};

async function createUser(apiHelper:any) {
    let uData = {
        name:'pram api',
        email:`automation_${Date.now()}@open.com`,
        gender:'male',
        status:'active'
    };
   let response = await apiHelper.post('/public/v2/users',uData,AUTH_HEADER);
  expect (response.status).toBe(201);
  return response.body;

}

test('POST - create a user', async ({ apiHelper }) => {

    // Create a user
    let userResponse = await createUser(apiHelper);

    // Get the created user
    let response = await apiHelper.get(
        `/public/v2/users/${userResponse.id}`,
        AUTH_HEADER
    );

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('pram api');

});