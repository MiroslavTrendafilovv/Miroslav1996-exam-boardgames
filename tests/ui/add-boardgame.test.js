const { test, expect } = require('@playwright/test');

test('Check add boardgame page', async ({ page }) => {
    await page.goto('https://miroslav1996.onrender.com/add-boardgame');
    const form = await page.$('form');
    expect(received).toBeTruthy();
  });
  
