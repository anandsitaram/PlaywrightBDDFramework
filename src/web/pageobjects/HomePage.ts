import { BasePage } from './BasePage';
import {Locator, Page} from '@playwright/test'
import {expect} from "../../fixtures/Web-Fixtures";

export class HomePage extends BasePage {

    private readonly signInLnk: Locator;
    private readonly emailTxt: Locator;
    private readonly passwordTxt: Locator;
    private readonly signInBtn: Locator;

    constructor(page:Page) {
        super(page);
        this.signInLnk =  this.page.getByRole('link', { name: 'Sign In' });
        this.emailTxt = this.page.getByRole('textbox', { name: 'Email*' });
        this.passwordTxt = this.page.getByRole('textbox', { name: 'Password* Password' })
        this.signInBtn = this.page.getByRole('button', { name: 'Sign In' })

    }

    /**
     * Hover over a main menu item.
     * @param {string} mainMenuName - The name of the main menu to hover over.
     * @throws Will throw an error if the main menu item is not found or not visible.
     */
    async mouseHoverOnMainMenu(mainMenuName:string) {
        try {
            const mainMenu = this.page.locator(`//span[text()='${mainMenuName}']/ancestor::a`);
            await mainMenu.waitFor({ state: 'visible', timeout: 5000 }); // Wait for the main menu to be visible
            await mainMenu.hover();
        } catch (error) {
            throw new Error(`Failed to hover on main menu '${mainMenuName}': ${error.message}`);
        }
    }

    /**
     * Hover over a main menu item and click a sub-menu item if provided.
     * @param {string} mainMenuName - The name of the main menu to hover over.
     * @param {string} [subMenuItem] - The name of the sub-menu item to click (optional).
     * @throws Will throw an error if the main menu or sub-menu item is not found or not visible.
     */
    async mouseHoverOnSubMenu(mainMenuName?:string, subMenuItem?:string) {
        try {
            const mainMenuLoc = this.page.getByText(mainMenuName).last();
             // Wait for the main menu to be visible and hover
                await mainMenuLoc.waitFor({ state: 'visible' });
                await mainMenuLoc.hover();
                if(subMenuItem===undefined){   await mainMenuLoc.click(); }

            if (subMenuItem) {
                // Locate the submenu item and wait for it to be visible, then click
                const subMenuLoc = this.page.getByRole('menuitem', { name: subMenuItem });
                await subMenuLoc.waitFor({ state: 'visible', timeout: 5000 }); // Wait for the sub-menu to be visible
                await subMenuLoc.click();
            }
        } catch (error) {
            throw new Error(`Failed to hover on sub-menu '${subMenuItem}' under main menu '${mainMenuName}': ${error.message}`);
        }
    }

    async signIn(email:string, password:string) {
        await this.signInLnk.click();
        await this.emailTxt.fill(email);
        await this.passwordTxt.fill(password);
        await this.signInBtn.click();
    }

    async isSignedIn(): Promise<boolean> {
        try {
            await this.page.waitForTimeout(5000)
            const text = await this.page.getByRole('banner').innerText();
            return text.includes('Welcome'); // Checks if "Welcome" is present
        } catch {
            return false; // Return false if element is not found
        }
    }
}




