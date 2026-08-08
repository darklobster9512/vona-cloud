# Footer kompakter machen

Der Footer ist aktuell zu hoch geprägt durch große Abstände, eine zweizeilige Oberzone und eine separate Firmen-/Adresszeile. Er wird auf eine schlankere, kompakt lesbare Version reduziert.

## Änderungen

- **Obere Zone vereinfachen**: Logo + Positionierungssatz in einer Zeile neben der E-Mail-CTA, ohne große vertikale Padding-Blöcke.
- **E-Mail-CTA kleiner machen**: Schriftgröße von `text-xl`/`text-2xl` auf `text-lg` reduzieren, Icon verkleinern.
- **Abstände reduzieren**: Alle `py-…` Werte im Footer halbieren (Oberzone, Linkspalten, Adresszeile).
- **Adress-/Firmenzeile einsparen**: Firmenname und Adresse direkt in die untere Leiste integrieren, statt als eigene große Zeile.
- **Linkspalten kompakter**: Weniger vertikaler Innenabstand und kleinere Mono-Label-Überschriften.
- **Visueller Stil bleibt**: Dunkles `bg-ink`, Blueprint-Raster, blauer Akzent-Glow, keine neuen Farben oder Abhängigkeiten.

## Technisch

- Nur `src/components/landing/Footer.tsx` wird bearbeitet.
- Keine neuen Dateien oder Pakete.
- Bestehende Design-Token und Farb-Utilities bleiben erhalten.
