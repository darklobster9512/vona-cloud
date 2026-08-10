E-Mail-Adresse von `.com` auf `.de` ändern

Ziel: Alle Vorkommen der E-Mail-Adresse `kontakt@vona-cloud.com` in `kontakt@vona-cloud.de` ändern.

## Betroffene Dateien

Globale Suche zeigt 12 Vorkommen in 8 Dateien:

- `src/pages/Kontakt.tsx` — Kontaktinfo-Karte
- `src/pages/Team.tsx` — Initiativbewerbung-Link
- `src/pages/Karriere.tsx` — Initiativbewerbung + Ink-Band CTA
- `src/pages/Bewerbung.tsx` — Fragen-Block im Formular
- `src/pages/Impressum.tsx` — Kontaktdaten
- `src/pages/Datenschutz.tsx` — Verantwortlicher
- `src/components/landing/CTASection.tsx` — CTA-Panel
- `src/components/landing/Footer.tsx` — Footer-Top-Zeile

## Umsetzung

String-Replacement: `kontakt@vona-cloud.com` → `kontakt@vona-cloud.de` und `mailto:kontakt@vona-cloud.com` → `mailto:kontakt@vona-cloud.de` über alle oben genannten Dateien.

## Validierung

- `rg -n "kontakt@vona-cloud\\.com" .` darf keine Ergebnisse mehr liefern.
- `rg -n "kontakt@vona-cloud\\.de" .` muss alle ersetzten Stellen anzeigen.
- Build mit `bun run build` muss fehlerfrei durchlaufen.
