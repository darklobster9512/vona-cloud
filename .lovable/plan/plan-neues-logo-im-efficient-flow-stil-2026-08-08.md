# Plan: Neues Logo im Efficient-Flow-Stil

## Ziel
Ein neues, horizontales Wortmarke-Logo für VONA Cloud, das den Stil des angehängten Referenzbilds ("EFFICIENT FLOW") aufgreift: modern, sauber, horizontal, mit klarem Kontrast zwischen den beiden Wörtern.

## Vorgabe
- **Layout:** Horizontal, beide Wörter auf einer Linie, gleiche Baseline.
- **Wortgewichtung:** "VONA" fett/betont (wie "FLOW" im Referenzbild), "CLOUD" dünn/leicht (wie "EFFICIENT" im Referenzbild).
- **Farbe:** Dunkles Navy/Schwarz für "CLOUD", modernes Blau (#3b82f6) für "VONA", auf transparentem Hintergrund.
- **Schrift:** Geometrische, moderne Sans-Serif, großzügige Buchstabenabstände, tech/SaaS-Charakter.

## Schritte

### 1. Neues Logo generieren
- Mit `imagegen` ein horizontales PNG erzeugen, das "VONA" in fett/blau und "CLOUD" in dünn/dunkel nebeneinander zeigt, im sauberen Stil der Referenzgrafik.
- Ausgabe nach `src/assets/logo-wordmark.png` (überschreibt die aktuelle Katastrophe).
- Aus dem neuen Logo ein passendes `public/favicon.png` ableiten.

### 2. `Logo.tsx` anpassen
- Neues PNG einbinden.
- Breite statt Höhe priorisieren: `max-h` und `w-auto`, damit die horizontale Wortmarke im Header nicht zu klein oder zu groß wird.
- Aktuelle hartkodierte `width`/`height`-Attribute an das neue Seitenverhältnis anpassen.

### 3. Header-Kompatibilität prüfen
- `Navbar.tsx` prüfen, ob das breitere Logo in der schwebenden Insel Platz hat.
- Falls nötig, Logo-Größe in der Navbar anpassen (z. B. etwas kleiner skalieren) oder die Insel breiter lassen.
- Footer-Logo ebenfalls kurz prüfen, damit es nicht zu groß wirkt.

### 4. Validierung
- Typecheck laufen lassen.
- Playwright-Screenshot vom Header (Desktop + Mobile), um zu prüfen, dass das neue Logo gut sitzt und keine Überlappungen entstehen.

## Nicht im Scope
- Keine Änderung an Seiteninhalten, Farbschema oder Schriften.
- Keine neue Header-Struktur — nur Logo-Tausch und ggf. Größenanpassung, falls das breitere Logo das Layout sprengt.

## Ergebnis
Ein horizontales, sauberes Tech-Logo mit "VONA" in fett/blau und "CLOUD" in dünn/dunkel, das im Header, Footer und Favicon überall konsistent eingesetzt wird.
