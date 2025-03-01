import {Given, When, Then,expect} from 'src/fixtures/Web-Fixtures'




Then(/^the review page should load$/, async ({reviewPage})=> {
    await reviewPage.waitForPageToLoad();
});
;
When(/^the user places the order$/, async ({reviewPage})=> {
    await reviewPage.clickOnPlaceOrderBtn();
});
Then(/^the product quantity should be displayed in the review page$/, async ({reviewPage,ctx})=> {
    await expect(await reviewPage.getQuantity()).toHaveText(ctx.qty);
});
Then(/^the product name should be displayed in the review page$/, async ({reviewPage,ctx})=> {
    await expect(await reviewPage.getProductName()).toHaveText(ctx.productName);

});