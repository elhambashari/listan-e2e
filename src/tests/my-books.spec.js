

import { test, expect } from '@playwright/test';

test.describe('mina böcker', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
  });

 test('visa meddelande om inga favoritböcker finns i sidan', async ({ page }) => {
	
  const myBooksButton = page.getByRole('button', { name: /mina böcker/i });
  await expect(myBooksButton).toBeEnabled({ timeout: 15000 });
  await myBooksButton.click();

  const defaultMessage = page.getByText(/när du valt, kommer dina favoritböcker att visas här/i);
  await expect(defaultMessage).toBeVisible({ timeout: 10000 });
});





test('visa bara de böcker som är favorit i "Mina böcker"', async ({ page }) => {

  const addBookButton = page.getByRole('button', { name: /lägg till bok/i });
  await expect(addBookButton).toBeEnabled({ timeout: 15000 });
  await addBookButton.click();

  const titleInput = page.getByTestId('add-input-title');
  await titleInput.fill('Min stad');

  const authorInput = page.getByTestId('add-input-author');
  await authorInput.fill('Adam Jonsson');

  const submitButton = page.getByRole('button', { name: /lägg till ny bok/i });
  await expect(submitButton).toBeEnabled({ timeout: 15000 });
  await submitButton.click();

  await page.waitForTimeout(2000);

  
  const katalogButton = page.locator('[data-testid="catalog"]');
  await expect(katalogButton).toBeEnabled({ timeout: 15000 });
  await katalogButton.click();



  const likeButton = page.getByTestId('star-Min stad');
  await expect(likeButton).toBeEnabled({ timeout: 15000 });
  await likeButton.click();

  
  await page.waitForTimeout(1000);

  


  const myBooksButton = page.getByRole('button', { name: /mina böcker/i });
  await expect(myBooksButton).toBeEnabled({ timeout: 15000 });
  await myBooksButton.click();

  
  await expect(page.locator('text=Min stad')).toBeVisible({ timeout: 15000 });

  
  const defaultMessage = page.getByText(/när du valt, kommer dina favoritböcker att visas här/i);
  await expect(defaultMessage).not.toBeVisible();
});

});