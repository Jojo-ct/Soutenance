const { test, expect } = require('@playwright/test');

test('Vérification du succès de paiement MoMo', async ({ page }) => {
    // Méthode ultra-directe pour Linux (GitHub)
    await page.goto('file://' + process.cwd() + '/index.html');

    // On attend explicitement le bouton (timeout de 15s)
    const bouton = page.locator('button#pay-btn'); 
    await expect(bouton).toBeVisible({ timeout: 15000 });
    
    await page.fill('#phone', '67000000');
    await bouton.click();

    const message = page.locator('#message');
    await expect(message).toBeVisible();
});