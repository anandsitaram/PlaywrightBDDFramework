import {Given, When, Then,expect} from 'src/fixtures/Web-Fixtures'

Given("the user launches application", async ({homePage}) =>{
    await homePage.launchApplication()

});

When("the user hovers over the {string} category in the main menu", async ({homePage},option:string) =>{
    await homePage.mouseHoverOnMainMenu(option)
});

When("the user hovers over the {string} sub-category and selects {string}", async ({homePage},menu1:string,menu2:string) =>{
    await homePage.mouseHoverOnSubMenu(menu1,menu2)
});



