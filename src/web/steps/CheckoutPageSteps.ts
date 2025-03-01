import {Given, When, Then,expect} from 'src/fixtures/Web-Fixtures'
import {refineData} from'@utils/CommonUtils'
import {DataTable} from "playwright-bdd";



Then(/^the checkout page should load$/, async ({checkoutPage})=> {
    await checkoutPage.waitForPageToLoad();
});
When(/^the user enters checkout details:$/, async ({checkoutPage},data:DataTable)=> {
   let updatedData = await refineData(data.rowsHash());
    await checkoutPage.fillCheckoutForm(updatedData);

});
When(/^the user continues to the review page$/, async ({checkoutPage})=> {
    await checkoutPage.clickContinue();

});
Then(/^the user selects shipping rate "([^"]*)"$/, async ({checkoutPage},shippingRate:string)=> {
    await checkoutPage.selectShippingRate(shippingRate);
});