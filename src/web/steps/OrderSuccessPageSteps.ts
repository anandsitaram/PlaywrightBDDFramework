import {Given, When, Then,expect} from 'src/fixtures/Web-Fixtures'


Then(/^the order success page should load$/, async ({orderSuccessPage})=> {
    await orderSuccessPage.waitForPageToLoad();
});
Then(/^an order number should be generated$/, async ({orderSuccessPage})=> {
    const orderNo = await orderSuccessPage.getOrderNo();
    console.log(`The order number is ${orderNo}`);
    expect(orderNo).toBeTruthy();
});