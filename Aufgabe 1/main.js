document.getElementById("ausrechnen").addEventListener("click", function () {
    const Akkukapazitaet = Number(document.getElementById("Akkukapazitaet").value.replace(",", "."));
    const LadestandVon = Number(document.getElementById("LadestandVon").value.replace(",", "."));
    const LadestandBis = Number(document.getElementById("LadestandBis").value.replace(",", "."));
    const Strompreis = Number(document.getElementById("Strompreis").value.replace(",", "."));
    const Ladeleistung = Number(document.getElementById("Ladeleistung").value.replace(",", "."));

    const geladenekWh = Akkukapazitaet * (LadestandBis - LadestandVon) / 100;
    const ladekosten = geladenekWh * Strompreis;
    const ladedauer = geladenekWh / Ladeleistung;

    let stunden = Math.floor(ladedauer);
    let minuten = Math.round((ladedauer - stunden) * 60);

    document.getElementById("ausgabe-kWh").textContent = geladenekWh.toFixed(2);
    document.getElementById("ausgabe-kosten").textContent = ladekosten.toFixed(2);
    document.getElementById("ausgabe-dauer").textContent = stunden + " Std. " + minuten + "Min.";
});
