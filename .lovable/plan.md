# Plan: Logo & Header überarbeiten

## Ziel
Neue Wortmarke im Tech/SaaS-Stil (VONA groß, CLOUD klein darunter, gleiche Breite) plus ein überarbeiteter, moderner Header, der besser zum reduzierten Logo passt.

## Worum es geht
Das aktuelle Logo (`src/assets/logo-wordmark.png`) wirkt noch nicht richtig. Die Vorgabe ist:
- **Stil:** Tech/SaaS, reduziert, klar — in Richtung Vercel/Linear.
- **Schriftzug:** „VONA“ groß und fett, „CLOUD“ klein und leicht darunter.
- **Ausrichtung:** Beide Zeilen sollen gleich lang sein (optisch bündig).

Der Header war zuletzt eine schwebende Glas-Insel, gefällt aber ebenfalls nicht — er soll klarer und besser zum neuen Logo passen.

## Schritte

### 1. Neue Logo-Grafik generieren
- Prompt für `imagegen` erstellen: PNG-Wortmarke, transparent, navy/blau (#0f172a + #3b82f6), „VONA“ in bold groß, „CLOUD“ in light klein darunter, gleiche optische Breite.
- Ausgabe nach `src/assets/logo-wordmark.png`.
- Aus dem gleichen Design ein neues `public/favicon.png` ableiten.
- Falls das alte Logo als Asset pointer vorliegt, Pointer aktualisieren/löschen.

### 2. `Logo.tsx` anpassen
- Neues PNG einbinden.
- Höhe/Größe erhöhen, damit die Wortmarke im Header gut lesbar ist.
- `object-contain` beibehalten, um Verzerrung zu vermeiden.

### 3. Header neu gestalten
- Weiterhin eine schwebende, zentrierte Leiste oben.
- **Neuer Look:** weniger verspielte Schatten, schärfere Kanten, vertikale Trenner entfernen oder deutlich subtiler, Nav-Links als Mono-Labels, CTA klarer abgegrenzt.
- Optionen, die ich prüfe:
  - Variante A: Ultra-minimale Insel — nur Logo links, Links in der Mitte, CTA rechts, ohne Divider.
  - Variante B: Logo + Navigation in einer einzigen durchgehenden Pill, CTA als farbiger Kontrastpunkt.
- Ich entscheide mich nach dem neuen Logo für die Variante, die visuell stärker zusammenhält.

### 4. Footer & weitere Logo-Nutzungen prüfen
- `Footer.tsx` prüft das Logo ebenfalls; ggf. Größe anpassen.
- Mobile Menü überprüfen, damit das größere Logo nicht überlappt.

### 5. Validierung
- `typecheck` laufen lassen.
- Playwright-Screenshot vom Header auf Desktop und Mobile.

## Nicht im Scope
- Keine Änderung an Farbschema, Schriften oder Seitenstruktur.
- Keine neuen Seiten oder Inhalte.

## Ergebnis
Ein reduziertes Tech/SaaS-Logo mit „VONA“ / „CLOUD“ und ein klarer, moderner Header, der dazu passt.
