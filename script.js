document.addEventListener("DOMContentLoaded", function() {
    var bouton = document.getElementById("btn");
    var details = document.getElementById("Infos");

    if (bouton && details) {
        bouton.addEventListener("click", function() {
            var currentDisplay = window.getComputedStyle(details).display;
            if (currentDisplay === "none") {
                details.style.display = "block";
            } else {
                details.style.display = "none";
            }
        });
    }

    var champ = document.getElementById("champRecherche");
    var resultat = document.getElementById("resultat-recherche");

    if (champ && resultat) {
        champ.addEventListener("input", function() {
            resultat.textContent = "Vous avez tapé : " + champ.value;
        });
    }
});