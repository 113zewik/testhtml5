const vstup1 = document.getElementById("vstup1");
const vstup2 = document.getElementById("vstup2");
const vysledekText = document.getElementById("vysledek");

// Výpočet
function vypocitej(operace) {
    // Převedení textu na číslo
    let cislo1 = parseFloat(vstup1.value);
    let cislo2 = parseFloat(vstup2.value);
    let vysledek = 0;

    // Ošetření nečíselného vstupu
    if (isNaN(cislo1) || isNaN(cislo2)) {
        vysledekText.innerHTML = "Zadejte platná čísla";
        vysledekText.style.color = "red";
        return;
    }

    // Reset barvy textu při správném zadání
    vysledekText.style.color = "black";

    // Výběr operace
    if (operace == "+") {
        vysledek = cislo1 + cislo2;
    } else if (operace == "-") {
        vysledek = cislo1 - cislo2;
    } else if (operace == "*") {
        vysledek = cislo1 * cislo2;
    } else if (operace == "/") {
        // Ošetření dělení nulou
        if (cislo2 == 0) {
            vysledekText.innerHTML = "Nulou nelze dělit";
            vysledekText.style.color = "red";
            return;
        }
        vysledek = cislo1 / cislo2;
    }

    // Vypsání výsledku
    vysledekText.innerHTML = "Výsledek: " + vysledek;
}

// Přiřazení funkcí tlačítkům
tlPlus.addEventListener("click", function() { vypocitej("+"); });
tlMinus.addEventListener("click", function() { vypocitej("-"); });
tlKrat.addEventListener("click", function() { vypocitej("*"); });
tlDeleno.addEventListener("click", function() { vypocitej("/"); });