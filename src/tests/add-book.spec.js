

import { test, expect } from '@playwright/test';

test.describe('lägg till bok till katalog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');

	
    const addBookButton = page.getByRole('button', { name: /lägg till bok/i });
	await expect(addBookButton).toBeEnabled({ timeout: 15000 });
    await addBookButton.click();

    
    const titleInput = page.getByTestId('add-input-title');
    await expect(titleInput).toBeVisible({ timeout: 15000 });
  });


  
  test('användare vill kunna importera en ny bok och se den läggas till i kataloglistan.', async ({ page }) => {
    const titleInput = page.getByTestId('add-input-title');
    await expect(titleInput).toBeVisible({ timeout: 15000 });
    await titleInput.fill('Min stad');

    const authorInput = page.getByTestId('add-input-author');
    await expect(authorInput).toBeVisible({ timeout: 15000 });
    await authorInput.fill('Adam Jonsson');

    const submitButton = page.getByRole('button', { name: /lägg till ny bok/i });
    await expect(submitButton).toBeEnabled({ timeout: 15000 });
    await submitButton.click();

    
    await page.waitForTimeout(1000); 

    const katalogButton = page.getByRole('button', { name: /katalog/i });
    await expect(katalogButton).toBeEnabled({ timeout: 15000 });
    await katalogButton.click();

    
    await expect(page.locator('text=Min stad')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Adam Jonsson')).toBeVisible({ timeout: 15000 });
  });
});