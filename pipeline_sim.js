const { exec } = require('child_process');

console.log("[PIPELINE] Détection du push...");
console.log("[PIPELINE] Analyse des tags... Trouvé: @REQ_PAY_01");

exec('npx playwright test', (error, stdout, stderr) => {
    if (error) {
        console.log("🔴 TEST ÉCHOUÉ pour REQ_PAY_01");
        // Ici tu ferais un appel API vers ton Dashboard : status=FAIL
        return;
    }
    console.log(stdout);
    console.log("🟢 TEST RÉUSSI ! Envoi de la validation au Dashboard pour REQ_PAY_01...");
    // Ici tu ferais un appel API vers ton Dashboard : status=SUCCESS
});