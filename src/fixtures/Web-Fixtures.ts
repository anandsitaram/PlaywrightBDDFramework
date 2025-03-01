import { test as core, createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { HomePage } from '@pageobjects/HomePage';
import { MenuPage } from '@pageobjects//MenuPage';
import { CheckoutPage } from '@pageobjects//CheckoutPage';
import { OrderSuccessPage } from '@pageobjects//OrderSuccessPage';
import { ProductDetailPage } from '@pageobjects/ProductDetailPage';
import { ProductListPage } from '@pageobjects//ProductListPage';
import { ReviewPage } from '@pageobjects//ReviewPage';
export type TestFixtures = {
    homePage: HomePage;
    menuPage: MenuPage;
    checkoutPage: CheckoutPage;
    orderSuccessPage: OrderSuccessPage;
    productDetailPage: ProductDetailPage;
    productListPage: ProductListPage;
    reviewPage: ReviewPage;
    ctx: any;
}
export const test = core.extend<TestFixtures>({
    ctx: async ({}, use) => {
        const ctx = {};
        await use(ctx);
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    menuPage: async ({ page }, use) => {
        await use(new MenuPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    orderSuccessPage: async ({ page }, use) => {
        await use(new OrderSuccessPage(page));
    },
    productDetailPage: async ({ page }, use) => {
        await use(new ProductDetailPage(page));
    },
    productListPage: async ({ page }, use) => {
        await use(new ProductListPage(page));
    },
    reviewPage: async ({ page }, use) => {
        await use(new ReviewPage(page));
    },
});

export {expect };
export const {Given,When,Then,Before,After} = createBdd(test);
