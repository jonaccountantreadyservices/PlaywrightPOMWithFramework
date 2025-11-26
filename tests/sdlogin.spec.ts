import { test, expect } from '@playwright/test';
import { BASE_URL, USERNAME, PASSWORD } from '../utils/envConfig';
import { SDLoginPage } from '../pages/SDLoginPage';

test('Login to Saucedemo using POM', async ({ page }) => {
 
  const sdLoginPage =  new SDLoginPage(page);
  await page.goto(BASE_URL);
  await sdLoginPage.login(USERNAME, PASSWORD);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
});