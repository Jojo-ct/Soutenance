// tests/validation.spec.js
const { test, expect } = require('@playwright/test');

// @REQ_PAY_01 : Lien avec l'exigence du Dashboard
test('Vérification du succès de paiement MoMo', async ({ page }) => {
    // On ouvre le fichier local (ton appli)
    await page.goto(`file://${process.cwd()}/index.html`);

    // On remplit et on clique grâce au data-testid
    await page.fill('#phone', '67000000');
    await page.click('[data-testid="momo-button"]');

    // On vérifie que le message de succès est apparu
    const message = page.locator('#message');
    await expect(message).toBeVisible();
    await expect(message).toHaveText('Paiement réussi !');
});