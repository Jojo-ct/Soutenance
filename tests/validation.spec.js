const { test, expect } = require('@playwright/test');
const path = require('path');

test('Vérification du succès de paiement MoMo', async ({ page }) => {
    const filePath = `file://${path.resolve(__dirname, '../index.html')}`;
    await page.goto(filePath);

    // On attend que le bouton soit bien là avant de cliquer
    const bouton = page.locator('[data-testid="momo-button"]');
    await expect(bouton).toBeVisible({ timeout: 10000 });
    
    await page.fill('#phone', '67000000');
    await bouton.click();

    // On vérifie le message
    const message = page.locator('#message');
    await expect(message).toBeVisible();
});