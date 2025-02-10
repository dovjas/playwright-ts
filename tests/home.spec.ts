const {test,expect} = require('@playwright/test');
import HomePage from '../pages/home.page';

test.describe('Playwright learning',() => {
    let homePage:HomePage;

    test('Verify text of all nav links',async({page})=>{
      homePage = new HomePage(page);

      const expectedLink = [
        'Home',
        'About',
        'Shop',
        'Blog',
        'Contact',
        'My account',
      ];

      // open url
      await homePage.navigate();

      //find navlinks
      const navLinks = await homePage.navLinks;

      // Await the result before passing it to `expect`
      const actualLinks = await homePage.getNavLinksText();
      await expect(actualLinks).toEqual(expectedLink);

        // Log text contents of each link
        for (let el of await navLinks.elementHandles()) {
            console.log(await el.textContent());
        }
    })
 })