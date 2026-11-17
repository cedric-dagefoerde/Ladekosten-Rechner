document.getElementById("ausrechnen").addEventListener("click", function () {

    const textAkkukapazitaet = document.getElementById("Akkukapazitaet").value;
    const textLadestandVon = document.getElementById("LadestandVon").value;
    const textLadestandBis = document.getElementById("LadestandBis").value;
    const textStrompreis = document.getElementById("Strompreis").value;
    const textLadeleistung = document.getElementById("Ladeleistung").value;

    if (textAkkukapazitaet === "") {
        alert("Bitte Akkukapazität eingeben!");
        return;
    }
    if (textLadestandVon === "") {
        alert("Bitte Start-Ladestand eingeben!");
        return;
    }
    if (textLadestandBis === "") {
        alert("Bitte Ziel-Ladestand eingeben!");
        return;
    }
    if (textStrompreis === "") {
        alert("Bitte Strompreis eingeben!");
        return;
    }
    if (textLadeleistung === "") {
        alert("Bitte Ladeleistung eingeben!");
        return;
    }

    const Akkukapazitaet = Number(textAkkukapazitaet.replace(",", "."));
    const LadestandVon = Number(textLadestandVon.replace(",", "."));
    const LadestandBis = Number(textLadestandBis.replace(",", "."));
    const Strompreis = Number(textStrompreis.replace(",", "."));
    const Ladeleistung = Number(textLadeleistung.replace(",", "."));

    if (Akkukapazitaet < 0) {
        alert("Akkukapazität darf nicht negativ sein! ");
        return;
    }
    if (LadestandVon < 0) {
        alert("Start-Ladestand darf nicht negativ sein!");
        return;
    }
    if (LadestandBis < 0) {
        alert("Ziel-Ladestand darf nicht negativ sein! ");
        return;
    }
    if (Strompreis < 0) {
        alert("Strompreis darf nicht negativ sein!");
        return;
    }
    if (Ladeleistung < 0) {
        alert("Ladeleistung darf nicht negativ sein!");
        return;
    }

    if (LadestandBis < LadestandVon) {
        alert("Der Ziel-Ladestand darf nicht kleiner sein als der Start-Ladestand!");
        return;
    }

    const geladenekWh = Akkukapazitaet * (LadestandBis - LadestandVon) / 100;
    const ladekosten = geladenekWh * Strompreis;
    const ladedauer = geladenekWh / Ladeleistung;

    let stunden = Math.floor(ladedauer);
    let minuten = Math.round((ladedauer - stunden) * 60);

    document.getElementById("ausgabe-kWh").textContent = geladenekWh.toFixed(2);
    document.getElementById("ausgabe-kosten").textContent = ladekosten.toFixed(2);
    document.getElementById("ausgabe-dauer").textContent = stunden + " Std. " + minuten + " Min.";
});

let ladevorgänge = [];

document.getElementById("speichern").addEventListener("click", function () {
    const kwh = Number(document.getElementById("ausgabe-kWh").textContent);
    const kosten = Number(document.getElementById("ausgabe-kosten").textContent);

    const heute = new Date().toLocaleDateString("de-DE");
    const neuerEintrag = {
        datum: heute,
        kwh: kwh,
        kosten: kosten
    };
    ladevorgänge.push(neuerEintrag);
    listeZeichnen();
});

function listeZeichnen() {
    const ul = document.getElementById("liste");
    ul.textContent = "";

    let gesamtkWh = 0;
    let gesamtKosten = 0;

    for (let i = 0; i < ladevorgänge.length; i++) {
        const eintrag = ladevorgänge[i];
        gesamtkWh = gesamtkWh + eintrag.kwh;
        gesamtKosten = gesamtKosten + eintrag.kosten;

        const li = document.createElement("li")
        li.textContent = eintrag.datum + " - " + eintrag.kwh.toFixed(2) + " kWh - " + eintrag.kosten.toFixed(2) + " € ";

        const löschButton = document.createElement("button");
        löschButton.type = "button";
        löschButton.textContent = "Löschen";
        löschButton.addEventListener("click", function () {
            ladevorgänge.splice(i, 1);
            listeZeichnen();
        });

        li.appendChild(löschButton);
        ul.appendChild(li);
    }

    document.getElementById("summe-kwh").textContent = gesamtkWh.toFixed(2);
    document.getElementById("summe-kosten").textContent = gesamtKosten.toFixed(2);
}
