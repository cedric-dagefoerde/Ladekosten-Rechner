Nachgeguckt bei MDN und gelernt wie man die ersten Eingabe Felder in HTML erzeugt und welche Input Typen es gibt z.B. type number für zahlen.

Beim Zentrieren der Elemente in CSS hatte ich probleme, weil ich nicht gesehen habe, wo welcher Bereich liegt, ich habe den Elementen dann farbige Rahmen gegeben also border und mit den Entwicklertools nachgeschaut wo welcher bereich liegt, danach konnte ich es lösen.

Über MDN herausgefunden, dass man mit Number () einen Text in eine Zahl umwandelt da HTML Eingabefelder nur Texte an JS liefern sonst würde z.B. beim zusammenrechnen von 12+12 1212 herauskommen.

Da im englischen das Komma ein Punkt ist, musste ich nachschauen wie man ein Komma zu einem Punkt tauscht, habe es dann mit replace gelöst.

Habe festgestellt wo ich angefangen habe die Fehlermeldung "leer" einzubauen das er mit Number immer denkt der Nutzer hätte eine Null eingegeben obwohl nix im Feld stand. Das habe ich beim testen gesehen wo ich nix eingeben habe und er bei Ergbnisse Null oder NaN rauskam, also musste ich am Anfang umstellen das er erstmal nur das Textfeld ausliest und später dann mit Number die Werte zu zahlen geändert wird.

Das ausrechnen funktioniert so, wenn man auf dem Button ausrechnen klickt, werden als erstes die 5 eingebenen Werte ausgelesen und geprüft ob überall was steht, wenn ja werden die Werten mit Number in Zahlen geändert und das Komma zu einem Punkt. Dann wird geprüft ob die zahlen kleiner als 0 sind und ob der Ladestand Bis kleiner ist als der Ladestand Von, falls ja bekommt man eine Fehlermeldung, wenn nicht werden die Werte mit den passenden Formlen ausgerechnet. 
Dann werden die Stunden abgerundet und die Minuten aufgerundent und es wird die Ladedauer Minus den Stunden und am Ende mal 60 gerechnet um die Stunden und Minuten einzelnt zu haben.
Am Ende werden die ausgerechneten Ergebnisse in den Platzhalter wo vorher 0 stand eingesetzt.
