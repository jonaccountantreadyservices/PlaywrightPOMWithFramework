import { SDLoginLocators } from "../locators/SDLoginLocators";
import { Page } from "@playwright/test";

export class SDLoginPage {

    constructor(private page: Page) {

    }

    async login(username : string, password : string) {
        
        await this.page.fill(SDLoginLocators.usernameInput,  username);
        await this.page.fill(SDLoginLocators.passwordInput,  password);
        await this.page.click(SDLoginLocators.loginButton);
    
    }

}
