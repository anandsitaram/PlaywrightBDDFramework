import {Given, When, Then,expect} from 'src/fixtures/Web-Fixtures'



When(/^the user selects the product "([^"]*)"$/, async({productListPage,ctx},product:string) => {
    ctx.productName = product;
    await  productListPage.clickOnProduct(product)

});