# PM2-Deployment auf Debian 12 reparieren

## Ursache

PM2 startet aktuell `npm run dev` und damit `vite`. Auf dem Server wurden offenbar nur Produktions-Abhängigkeiten installiert, während `vite` unter `devDependencies` liegt. PM2 startet den fehlgeschlagenen Prozess anschließend immer wieder neu.

Das Repository ist derzeit eine klassische Vite/React-SPA mit React Router — kein TanStack-Start-Server. Für Produktion sollte deshalb nicht der Vite-Entwicklungsserver laufen, sondern der gebaute `dist`-Ordner statisch mit SPA-Fallback ausgeliefert werden.

## Befehle auf dem Debian-Server

Im Projektverzeichnis ausführen; `/PFAD/ZUM/PROJEKT` entsprechend ersetzen:

```bash
cd /PFAD/ZUM/PROJEKT

# Neustart-Schleife beenden
pm2 delete vona-cloud || true

# Vite und weitere Build-Abhängigkeiten installieren
npm ci --include=dev --legacy-peer-deps

# Produktionsdateien nach dist/ bauen
npm run build

# Fertige SPA auf Port 8080 ausliefern
pm2 serve dist 8080 --name vona-cloud --spa

# PM2-Zustand für Server-Neustarts speichern
pm2 save

# Status und letzte Logs prüfen
pm2 status
pm2 logs vona-cloud --lines 50
```

Falls der PM2-Prozess tatsächlich `vona-clo` statt `vona-cloud` heißt, vorab zusätzlich ausführen:

```bash
pm2 delete vona-clo || true
```

## Erwartetes Ergebnis

- PM2 zeigt `vona-cloud` als `online`.
- Port `8080` liefert den Inhalt aus `dist/`.
- React-Router-URLs wie `/karriere/...` funktionieren dank `--spa` auch beim direkten Aufruf.
- Ein vorhandenes nginx-Setup kann unverändert auf `127.0.0.1:8080` weiterleiten.

## Schneller Notbehelf, nicht für Produktion empfohlen

Wenn nur der bisherige Dev-Prozess kurzfristig wieder laufen soll:

```bash
cd /PFAD/ZUM/PROJEKT
npm install --include=dev --legacy-peer-deps
pm2 restart vona-cloud --update-env
```

Das behebt `vite: not found`, lässt aber weiterhin einen Entwicklungsserver öffentlich laufen. Der statische Produktionsweg oben ist robuster.