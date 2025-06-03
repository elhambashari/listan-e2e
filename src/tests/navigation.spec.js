
import { test, expect } from '@playwright/test';

test.describe('navigation mellan sidor', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
  });




  test('användare kan gå mellan tre vyer: "katalog", "lägg till bok" och "mina böcker"', async ({ page }) => {
    
    const addBookButton = page.getByRole('button', { name: /lägg till bok/i });
    await expect(addBookButton).toBeEnabled();
    await addBookButton.click();

    
    const addNewBookButton = page.getByRole('button', { name: /lägg till ny bok/i });
     await expect(addNewBookButton).toBeVisible({ timeout: 10000 });




    const myBooksButton = page.getByRole('button', { name: /mina böcker/i });
    await expect(myBooksButton).toBeEnabled();
    await myBooksButton.click();

    const emptyMessage = page.getByText(/när du valt, kommer dina favoritböcker att visas här/i);
    await expect(emptyMessage).toBeVisible({ timeout: 10000 });



    const katalogButton = page.locator('[data-testid="catalog"]');
    await expect(katalogButton).toBeEnabled();
    await katalogButton.click();

   const books = page.locator('.book'); 
    await expect(books.first()).toBeVisible();

  });
});
