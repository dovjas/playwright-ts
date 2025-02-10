import {Page,Locator} from '@playwright/test';

class HomePage {
    page: Page;
    navLinks: Locator;

    constructor(page:Page){
        this.page = page;
        this.navLinks = page.locator('#zak-primary-nav li');     
    };

    async navigate(){
        await this.page.goto('/');
    };

    async getNavLinksText(){
        return this.navLinks.allTextContents();
    };
};


export default HomePage;