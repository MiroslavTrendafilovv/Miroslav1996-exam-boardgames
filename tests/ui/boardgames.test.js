const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://miroslav1996.onrender.com/boardgames');
    const list = await page.$('ul');
    expect(received).toBeTruthy();
  });


  
