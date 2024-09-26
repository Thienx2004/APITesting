Feature('Fibonacci API');

Scenario('Calculate Fibonacci with valid value', async ({ I }) => {
    const n = 6;

    // Gửi yêu cầu GET đến API Fibonacci với tham số n = 5
    const response = await I.sendGetRequest(`/fibonacci?n=${n}`);

    // Kiểm tra trạng thái HTTP 200
    I.seeResponseCodeIs(200);

    //Kiểm tra keys của kết quả
    I.seeResponseContainsKeys(['result', 'error']);

    // Kiểm tra kết quả trả về có giá trị đúng
    I.seeResponseContainsJson({
        result: 8
    });
});

Scenario('Calculate Fibonacci with invalid value (negative)', async ({ I }) => {
    const n = -1;

    // Gửi yêu cầu GET đến API Fibonacci với tham số n = -1
    const response = await I.sendGetRequest(`/fibonacci?n=${n}`);

    // Kiểm tra trạng thái HTTP 400
    I.seeResponseCodeIs(400);

    //Kiểm tra keys của kết quả
    I.seeResponseContainsKeys(['result', 'error']);

    // Kiểm tra nội dung lỗi trả về
    I.seeResponseContainsJson({
        result: -1,
        error: "n should be greater than or equal to 0"
    });
});

Scenario('Calculate Fibonacci with value = 0', async ({ I }) => {
    const n = 0;

    // Gửi yêu cầu GET đến API Fibonacci với tham số n = 0
    const response = await I.sendGetRequest(`/fibonacci?n=${n}`);
    I.see
    // Kiểm tra trạng thái HTTP 200
    I.seeResponseCodeIs(200);

    I.seeResponseCodeIsSuccessful();

    I.dontSeeResponseCodeIs(404);

    // Kiểm tra kết quả trả về đúng
    I.seeResponseContainsJson({
        result: 0
    });
});

Scenario('Send request to non-existent api', async ({ I }) => {
    I.sendGetRequest('/products/1');
    I.seeResponseCodeIsClientError();
});

Scenario('Calculate Fibonacci with valid value (n = 5)', async ({ I }) => {
    const n = 5;
    const response = await I.sendGetRequest(`/fibonacci?n=${n}`);
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({ result: 5 });
});

Scenario('Calculate Fibonacci with n = 0', async ({ I }) => {
    const n = 0;
    const response = await I.sendGetRequest(`/fibonacci?n=${n}`);
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({ result: 0 });
});

Scenario('Calculate Fibonacci with n = 1', async ({ I }) => {
    const n = 1;
    const response = await I.sendGetRequest(`/fibonacci?n=${n}`);
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({ result: 1 });
});


Scenario('Calculate Fibonacci with non-integer input (n = abc)', async ({ I }) => {
    const n = 'abc';
    const response = await I.sendGetRequest(`/fibonacci?n=${n}`);
    I.seeResponseCodeIs(400);
});


Scenario('Calculate Fibonacci with boundary value (n = 2)', async ({ I }) => {
    const n = 2;
    const response = await I.sendGetRequest(`/fibonacci?n=${n}`);
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({ result: 1 });
});


Scenario('Send request to invalid endpoint', async ({ I }) => {
    const response = await I.sendGetRequest('/nonexistent');
    I.seeResponseCodeIs(404);
});
