const { test, expect } = require('@playwright/test');

test('Check about page', async ({ page }) => {
  await page.goto('https://miroslav1996.onrender.com/about');
  const heading = await page.$('h2');
  const text = await heading.textContent();
  expect(text).toBe('About');
});
