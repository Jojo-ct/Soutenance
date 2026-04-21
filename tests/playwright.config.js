// playwright.config.js
module.exports = {
  reporter: [['html', { open: 'never' }]], // Force la création du dossier playwright-report
  use: {
    screenshot: 'on', // Prend une photo à chaque étape pour qu'on voit l'erreur
  },
};