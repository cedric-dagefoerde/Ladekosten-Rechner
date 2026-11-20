Bei MDN gelernt, dass der localStorage wie ein Browserspeicher ist, der aber nur Text speichern kann.
Deswegen muss man die Ladevorgänge zum einem Text fürs speichern ändern. Und, dass man mit localStorage setItem speichert und mit localStorage getItem wird wieder aus dem gespeicherten geladen.

Bei MDN gelernt, dass der Befehl JSON.stringify aus einer JS liste einen langen Text macht, den man dann speichern kann. Also wie ein übersetzer.

Auch bei MDN gelernt, dass JSON.parse genau das Gegenteil von JSON.stringify ist. Also er macht aus den reinen Text wieder eine JS-Liste

Hatte beim Testen der Funktion das Problem, dass beim Neuladen die gespeicherten Einträge nicht angezeigt wurden, obwohl kein Fehler in der Konsole stand. Erst beim mehrfachen Durchlesen des Codes habe ich gesehen, dass ich bei JSON.parse vor dem = Ladevorgänge mit großem L geschrieben hatte, obwohl meine eigentliche Liste mit kleinem l "ladevorgänge" angelegt war. Deshalb wurden die geladenen Daten in eine neue zweite Variable gelegt, während meine eigentliche Liste leer geblieben ist.

Hatte bei der alles löschen Funktion das Problem, wenn ich auf alles löschen geklickt habe konnte man nicht sehen das etwas gelöscht wurde erst nach dem Neuladen der Seite.  Habe dann gemerkt, dass die Liste nicht neu gezeichnet wurde nach dem löschen. Habe dann am Ende der alles löschen funktion nochmal die Funktion listeZeichnen aufgerufen, damit man es direkt sieht und nicht erst nach dem Neuladen der Seite.

Also es funktioniert so, wenn ein neuer Eintrag gepusht wird, wird die komplette Liste mit JSON.stringify zu einem Text übersetzt und wird dann mit localStorage.setItem gespeichert die auch beim neuladen der Seite gespeichert bleiben. Und wenn etwas im localStorage ist wird mit localStorage.getItem das was gespeichert wird geladen und mit JSON.parse wieder von einem Text zu JS übersetzt damit die komplette Liste angezeigt wird.