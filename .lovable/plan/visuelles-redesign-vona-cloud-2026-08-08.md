# Visuelles Redesign – VONA Cloud

Ziel: Die Seite soll sich optisch klar von der Remix-Vorlage unterscheiden. Gleiche Farbwelt (Blau/Cyan, Light Mode), gleiches modernes Niveau – aber neue Sektionslayouts, neue Grafiken und ein eigener visueller Charakter.

## Neue visuelle Sprache

- Hintergrund-Struktur: dezentes Punkt-/Linienraster plus weiche Blau-Cyan-Glows statt flächiger weißer Blöcke.
- Karten: dünne Rahmen, große Radien, sanfte Glas-Optik mit farbigem Rand-Highlight beim Hover.
- Typografie: größere, kontrastreichere Headlines mit Gradient-Akzentwort; kleine Mono-Labels als Sektions-Marker (z. B. „01 — Leistungen").
- Bewegung: Scroll-Reveal wie jetzt (IntersectionObserver, kein Framer Motion), zusätzlich leichte Parallax-/Hover-Effekte.

## Sektion für Sektion

- **Hero**: Statt Dashboard-Mockup ein asymmetrisches Layout – Text links, rechts eine animierte „Cloud-Architektur"-Grafik (Knoten, Verbindungslinien, pulsierende Regionen) als reines CSS/SVG. Neue Badge-Zeile, zwei CTAs, darunter kompakte Kennzahlen-Leiste.
- **TrustBar**: Von Logo-Zeile zu laufendem Marquee-Band mit Tech-Icons und Cloud-Begriffen.
- **Problem/Lösung**: Zweispaltiger Vergleich („Vorher / Mit VONA") mit gegenüberliegenden Listen und mittiger Trennachse.
- **Leistungen**: Bento-Grid mit unterschiedlich großen Kacheln (eine große Featured-Kachel + kleinere), jede mit eigener SVG-Illustration statt gleichförmiger Karten.
- **Software-Showcase**: Tab-/Slider-Ansicht mit Browser-Frame-Mockup und Feature-Punkten daneben.
- **Methodik**: Horizontale Prozess-Timeline mit nummerierten Knoten und Verbindungslinie (mobil vertikal).
- **Stats**: Große Zahlen auf dunklem Gradient-Band als visueller Kontrastpunkt der Seite.
- **Referenzen**: Versetztes Karten-Layout (masonry-artig) mit Zitat-Typografie statt gleicher Reihe.
- **FAQ**: Zweispaltig, Accordion mit klaren Trennlinien und Plus/Minus-Icons.
- **CTA**: Vollflächiges Gradient-Panel mit Rasterlinien und zentrierter Aufforderung.
- **Navbar & Footer**: Navbar-Pill beibehalten, aber neue Hover-Unterstreichung; Footer mit neuem Spalten-Rhythmus und großem Wortmarken-Schriftzug im Hintergrund.
- **Unterseiten** (Leistungen, Software, Karriere, Team, Kontakt, Rechtliches): PageHero-Komponente auf den neuen Stil anpassen, damit alle Seiten mitziehen.

## Grafiken

- Neue SVG/CSS-Illustrationen für Hero und Leistungs-Kacheln (Cloud-Netz, Migration, Betrieb, Architektur) – tokenbasiert, damit sie zur Farbwelt passen.
- Ein generiertes Bild für den Software-Showcase-Mockup-Bereich, falls SVG nicht ausreicht.

## Technisch

- Neue Design-Tokens in `src/index.css` (Gradients, Glow-Shadows, Grid-Pattern-Utilities); keine hartkodierten Farben in Komponenten.
- Umbau der Dateien in `src/components/landing/` sowie `PageHero.tsx`; Reihenfolge in `src/pages/Index.tsx` bleibt bis auf ggf. Stats/Referenzen gleich.
- Keine neuen Abhängigkeiten, keine Backend-Änderungen, Texte/Inhalte bleiben inhaltlich wie jetzt (nur Layout/Grafik).
