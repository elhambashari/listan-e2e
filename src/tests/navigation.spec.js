
import { test, expect } from '@playwright/test';

test.describe('Läslistan app', () => {
  test.beforeEach(async ({ page }) => {
    
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
  });

  test("Katalog button finns i första sidan", async ({ page }) => {
    const katalogButton = page.locator('[data-testid="catalog"]');

    await expect(katalogButton).toBeVisible();

    await expect(katalogButton).toBeDisabled();
  });





    test('Buttons "lägg till bok" and "mina böcker" finns i första sidan och kan clicka på', async ({ page }) => {
    const addBookButton = page.getByRole('button', { name: /lägg till bok/i });
    const myBooksButton = page.getByRole('button', { name: /mina böcker/i });

    await expect(addBookButton).toBeVisible();
    await expect(myBooksButton).toBeVisible();

    await expect(addBookButton).toBeEnabled();
    await expect(myBooksButton).toBeEnabled();
  });


});
