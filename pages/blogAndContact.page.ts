import {Page, Locator} from '@playwright/test';

class BlogContactPage {
  page: Page;
  recentPostsList: Locator;
  name: Locator;
  email: Locator;
  phone: Locator;
  textArea: Locator;
  submitBtn: Locator;
  successMsg: Locator;

  constructor(page) {
    this.page = page;
    this.recentPostsList = page.locator('#recent-posts-3 li');
    this.name = page.locator('.contact-name input');
    this.email = page.locator('.contact-email input');
    this.phone = page.locator('.contact-phone input');
    this.textArea = page.locator('.contact-message textarea');
    this.submitBtn = page.locator('button[type="submit"]');
    this.successMsg = page.locator('.everest-forms-notice');
  }

  async navigateBlog(){
    await this.page.goto('https://practice.sdetunicorns.com/blog/');
  }

  async navigateContactForm() {
    await this.page.goto('https://practice.sdetunicorns.com/contact/');
  }

  async submitForm(name:string,email:string,phone:string,message:string){
    await this.name.fill(name)
    await this.email.fill(email);
    await this.phone.fill(phone);
    await this.textArea.fill(message);
    await this.submitBtn.click();
  };
};

export default BlogContactPage;

        