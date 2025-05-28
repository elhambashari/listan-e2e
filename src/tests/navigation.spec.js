
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




  
});
