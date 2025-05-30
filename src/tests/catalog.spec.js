

import { test, expect } from '@playwright/test';

test.describe('katalog sidan', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
  });

  test('användare kan vara i katalog sidan och kan se vad finns  innehåler', async ({ page }) => {
    await expect(page.locator('text=Välkommen!')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Sidan för dig som gillar att läsa. Välj dina favoriter.')).toBeVisible({ timeout: 15000 });
	

    
    const katalogButton = page.locator('[data-testid="catalog"]');
    await expect(katalogButton).toBeVisible({ timeout: 15000 });
    await expect(katalogButton).toBeDisabled({ timeout: 15000 });



    const books = page.locator('.book');
    const count = await books.count();
    expect(count).toBeGreaterThan(0);

    
    const firstStar = page.locator('.book .star').first();
    await expect(firstStar).toBeVisible();

    
    const initialClass = await firstStar.getAttribute('class');
    await firstStar.click();
    const newClass = await firstStar.getAttribute('class');
    expect(newClass).not.toBe(initialClass);
  });
});