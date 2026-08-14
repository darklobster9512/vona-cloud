Favicon austauschen

Ziel
Das aktuelle Favicon (`public/favicon.png`) durch das hochgeladene Bild `völlericon.png` ersetzen.

Schritte
1. Hochgeladenes Bild von `/mnt/user-uploads/völlericon.png` als neues `public/favicon.png` übernehmen.
2. Falls das Bild nicht quadratisch ist: mit ImageMagick auf 64×64 px zuschneiden (padding statt stretch) und als PNG speichern.
3. `index.html` prüfen — die bestehenden `<link rel="icon" ...>`-Tags zeigen bereits auf `/favicon.png`, daher ist keine HTML-Änderung nötig.
4. Build laufen lassen, um sicherzustellen, dass alles korrekt eingebunden ist.

Keine weiteren Seiten oder Komponenten werden angepasst.
