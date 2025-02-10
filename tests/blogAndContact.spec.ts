const {test,expect} = require('@playwright/test');
import BlogContactPage from "../pages/blogAndContact.page"; 
import {faker} from '@faker-js/faker';


test.describe('Contact form and Blog test', ()=>{
    let blogPage: BlogContactPage;

    test.beforeEach(async({page})=>{
      blogPage = new BlogContactPage(page);

    })

    test('Contact form test', async()=>{
        await blogPage.navigateContactForm();
        await blogPage.submitForm(
         faker.person.firstName(),faker.internet.email(),faker.phone.number(),faker.lorem.paragraphs(2)
        );
        //verify success message
        const successText = 'Thanks for contacting us! We will be in touch with you shortly';
        await expect(blogPage.successMsg).toHaveText(successText);
        
    });
    test('Blog test', async()=>{
      const RECENT_POSTS_LIST = blogPage.recentPostsList;

      await blogPage.navigateBlog();

      //Loop through the list and assert the car lenght >10
      for (let el of await RECENT_POSTS_LIST.elementHandles()) {
        expect((await el.textContent()).length).toBeGreaterThan(10);
      }
      //Assert the total lenght equal 5
      expect(await RECENT_POSTS_LIST.count()).toEqual(5);
    })
});


