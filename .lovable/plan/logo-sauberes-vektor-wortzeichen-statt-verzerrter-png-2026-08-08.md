# Logo: sauberes Vektor-Wortzeichen statt verzerrter PNG

## Problem
Die aktuelle Datei `src/assets/logo-wordmark.png` (1152x576) ist von der Bildgenerierung selbst verzerrt: ungleiche Buchstabenbreiten, gequetschte Rundungen, dazu ein weißer Hintergrund, der im Glas-Header als Kasten sichtbar wird. Skalieren kann das nicht reparieren — jede weitere KI-Generierung liefert wieder zufällige Verzerrungen.

## Lösung
Das Wortzeichen wird als echtes Vektor-SVG direkt im Code gesetzt, im Stil der Referenz (Efficient-Flow-Look):

- `VONA` fett in Primär-Blau, `CLOUD` dünn in Navy, eine Zeile, gleiche Höhe
- transparenter Hintergrund, gleiche Farb-Tokens wie die Website (kein hartes Hex)
- pixelscharf in jeder Größe, kein Verzerren möglich (Seitenverhältnis fix)
- automatisch dark-mode-fähig über die bestehenden Tokens

## Umsetzung

- `src/components/Logo.tsx` wird zum SVG-Wortzeichen umgebaut: `<svg>` mit zwei `<text>`-Elementen (fett / light, gesperrte Laufweite), `viewBox` mit festem Verhältnis, Größen `sm | md | lg` weiterhin über Höhenklassen.
- Header (`src/components/landing/Navbar.tsx`) auf die neue Breite abstimmen: Insel-Höhe zurück auf ein ruhiges Maß (desktop 80/72px), Logo `md`.
- Footer (`src/components/landing/Footer.tsx`) nutzt `size="md"`.
- `src/assets/logo-wordmark.png` wird gelöscht.
- `public/favicon.png` wird aus dem neuen SVG gerendert (32/64px, „V“-Monogramm-Ausschnitt, transparenter Hintergrund).
- Visuelle Kontrolle per Screenshot in Header, Footer und Mobile.
