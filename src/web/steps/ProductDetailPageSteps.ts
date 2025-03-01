import {Given, When, Then,expect} from 'src/fixtures/Web-Fixtures'




Then(/^the product price should be displayed$/, async ({productDetailPage})=> {

    expect(productDetailPage.getProductPrice()).not.toBeNull();


});
When(/^the user selects product size "([^"]*)"$/, async ({productDetailPage},size:string)=> {
    await productDetailPage.selectProductSize(size);

});
When(/^the user selects product color "([^"]*)"$/, async ({productDetailPage},color:string)=> {
    await productDetailPage.selectProductColor(color);

});
When(/^the user sets the quantity to "([^"]*)"$/, async ({productDetailPage,ctx},qty:string)=> {
    ctx.qty = qty;
    await productDetailPage.selectQty(qty);

});
When(/^the user adds the product to the cart$/, async ({productDetailPage})=> {
    await productDetailPage.addProductToCart();

});
When(/^the user waits for the cart count to update$/, async ({productDetailPage})=> {
    await productDetailPage.waitForCountNumber();
});
When(/^the user opens the cart$/, async ({menuPage},productName:string)=> {
    await menuPage.openCart();

});
When(/^the user clicks the checkout button$/, async ({menuPage},productName:string)=> {
    await menuPage.clickCheckoutButton();
});
Then(/^the product name should be displayed in the Product Detail page$/, async ({productDetailPage,ctx})=> {
    await expect(productDetailPage.getProductName()).toHaveText(ctx.productName);
});