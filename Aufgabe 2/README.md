Bei MDN gesucht wie man in HTML eine Liste erzeugt, habe dann den Befehl < ul git> gefunden der eine ungeordnete Liste erzeugt für die Ladevorgänge.

Bei MDN Herausgefunden, dass man in JS mit [] eine leere Liste erzeugt in der man beliebig viele Einträge speichern kann.

Gelernt wie man ein Objekt erzeugt, also ein Datenpaket was mehrere Informationen unter einen Namen bündelt.

Gelernt, dass man mit push einen neues Datenpaket ans Array hängt.

Hatte probleme wie man sich das heutige Datum abrufen lässt für die Liste, habe dann bei Stack Overflow gefunden, dass man mit toLocaleDateString das komplette Datum mit Tag, Monat und Jahr bekommt.

Gelernt wie man eine Schleife erstellt also wie Einträge in einem Array mithilfe von splice hinzugefügt oder gelöscht werden.

Beim Testen der Funktion mit der Liste ist mir aufgefallen, dass wenn man nichts eintippt oder vorher nicht auf ausrechnen klickt und man dann auf Ladevorgang speichern klickt, dass er die Ergebnisse von 0 auch speichert, deswegen habe ich die Fehlermeldung aus Aufgabe 1 mit "leer" hier noch mal benutzt.

Die Funktion ListeZeichnen sorgt darfür, dass alle gespeicherten Ladevorgänge auf der Website angezeigt werden. 
Also als erstes wird die Liste geleert damit alte einträge beim Neuerstellen nicht doppelt erscheinen, danach werden die zwei Variablen gesamt kWh und gesamt Kosten auf null gesetzt. Danach fängt die Schleife an die einzelnen Gesamteinträge zusammenzurechnen für die Summe aller Einträge. Dann wird mit CreateElement "li" eine neue Listzeile erzeugt mit Datum kWh und Kosten, dazu wird dann in der selben Zeile mit appendChild der Lösch Button angehängt mit dem man auch die Zeile wieder löschen kann. Am Ende der Schleife werden die Gesamtsummen der einzelnen Einträge unten auf der Website angezeigt.