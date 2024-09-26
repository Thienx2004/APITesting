Feature('Factorial API Tests');

Scenario('Calculate the factorial of valid value ', async ({ I }) => {
    const n = 5;
    const expectedResponse = 'Factorial of 5 is: 120';

    const response = await I.sendGetRequest(`/factorial/${n}`);
    I.seeResponseCodeIs(200);
    I.seeResponseEquals(expectedResponse);
});

Scenario('Calculate the factorial of 0', async ({ I }) => {
    const n = 0;
    const expectedResponse = 'Factorial of 0 is: 1';

    const response = await I.sendGetRequest(`/factorial/${n}`);
    I.seeResponseCodeIs(200);
    I.seeResponseEquals(expectedResponse);
});

Scenario('Calculate the factorial of negative number', async ({ I }) => {
    const n = -5;
    const expectedResponse = 'Number should be greater than zero';

    const response = await I.sendGetRequest(`/factorial/${n}`);
    I.seeResponseCodeIs(200);
    I.seeResponseEquals(expectedResponse);
});
