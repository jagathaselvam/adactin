class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://adactinhotelapp.com/';
  }

  async navigateTo() {
    await this.page.goto(this.url);
  }

  async login(username, password) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('input[value="Login"]');
  }

  async iserrorMessageVisible() {
    try {
      // Try to find error messages by multiple possible selectors
      const errorSelectors = [
        '.error_message',
        '.errormessage',
        '[class*="error"]',
        'text=/error/i',
        'text=/invalid/i',
        'text=/failed/i',
        '[role="alert"]'
      ];
      
      for (const selector of errorSelectors) {
        try {
          const element = await this.page.locator(selector).first();
          if (await element.isVisible()) {
            return true;
          }
        } catch (e) {
          // Continue to next selector
        }
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}

module.exports = LoginPage;
