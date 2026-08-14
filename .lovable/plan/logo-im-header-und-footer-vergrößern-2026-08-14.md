# Logo im Header und Footer vergrößern

## Ziel
Die Wortmarke „Völler IT" soll im Header und Footer deutlich größer dargestellt werden, ohne dass das Layout der Navbar oder des Footers bricht.

## Aktueller Stand
- `src/components/Logo.tsx` definiert drei Größen: `sm: h-6`, `md: h-8`, `lg: h-10`.
- Desktop-Navbar verwendet `size="lg"`, Mobile-Navbar `size="md"`.
- Footer verwendet `size="md"`.

## Geplante Änderungen
1. **`src/components/Logo.tsx`**
   - Größen hochskalieren, z. B.:
     - `sm` → `h-8`
     - `md` → `h-11`
     - `lg` → `h-14`
   - Breite bleibt automatisch (`w-auto object-contain`), Seitenverhältnis bleibt erhalten.

2. **`src/components/landing/Navbar.tsx`**
   - Desktop-Logo auf `size="lg"` (neu h-14) belassen.
   - Mobile-Logo ggf. auf `size="md"` (neu h-11) belassen, damit die schmale Mobile-Insel nicht überladen wird.
   - Falls die Navbar-Höhe zu knapp wird, Padding/Abstände leicht anpassen.

3. **`src/components/landing/Footer.tsx`**
   - Footer-Logo auf `size="lg"` setzen, damit es zur vergrößerten Marke passt.
   - Text neben dem Logo (Claim) und Spaltenlayout prüfen, ggf. Abstände anpassen.

4. **Validierung**
   - Build ausführen (`npm run build`).
   - Vorschau prüfen: Header-Logo auf Desktop/Mobile, Footer-Logo.

## Nicht im Scope
- Keine Änderung am Logo-Bild selbst.
- Keine Änderung an Farben, Schriften oder weiteren Inhalten.
