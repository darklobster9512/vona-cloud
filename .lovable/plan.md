# Fix: PM2-Prozess crasht mit "vite: not found"

## Ursache
Der PM2-Prozess `vona-clo` startet `npm run dev` (bzw. `vite`). Auf dem Server fehlen die `devDependencies` (dort liegt Vite), also bricht der Start sofort ab und PM2 restartet endlos. Produktiv soll aber kein Dev-Server laufen, sondern der statische `dist/`-Build.

## Lösung: statisch ausliefern

Auf dem Debian-Server im Projektverzeichnis ausführen:

```bash
# 1. Kaputten Prozess entfernen
pm2 delete vona-clo

# 2. Alle Abhängigkeiten inkl. devDependencies installieren
npm ci --include=dev --legacy-peer-deps

# 3. Production-Build erzeugen
npm run build

# 4. dist/ als SPA auf Port 8080 servieren
pm2 serve dist 8080 --name voeller-it --spa

# 5. Konfiguration dauerhaft speichern
pm2 save
```

Prüfen:

```bash
pm2 logs voeller-it --lines 30
curl -I http://localhost:8080
```

## Bei jedem Deployment danach

```bash
git pull
npm ci --include=dev --legacy-peer-deps
npm run build
pm2 restart voeller-it
```

## Hinweise
- `--spa` ist wichtig, damit Deep-Links wie `/karriere/bewerbung` nach Reload nicht 404 liefern.
- Falls `npm ci` wegen fehlender/veralteter `package-lock.json` scheitert: `npm install --legacy-peer-deps` verwenden.
- Der Nginx/Reverse-Proxy muss weiterhin auf Port 8080 zeigen.
- Es sind keine Änderungen im Code nötig; das ist rein Server-Konfiguration.
