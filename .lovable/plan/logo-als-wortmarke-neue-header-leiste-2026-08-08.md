# Logo als Wortmarke + neue Header-Leiste

## Logo
- Icon entfällt komplett. Statt der PNG-Datei kommt eine reine Text-Wortmarke als kleine React-Komponente (`src/components/Logo.tsx`):
  - „VONA" in kräftigem Gewicht, „CLOUD" als leichteres, gesperrtes Mono-Label direkt daneben — passend zur Blueprint-Sprache der Seite.
  - Deutlich größer skaliert als jetzt (Desktop ca. 1.75–2rem Schriftgröße, mobil kleiner).
  - Farben über Tokens (`foreground` + Gradient-Akzent), kein hartkodiertes Weiß/Schwarz.
- Verwendet in Navbar (Desktop + Mobile + Sidebar-Kopf) und im Footer, damit die Marke überall gleich aussieht.
- Favicon bleibt wie es ist.

## Header-Menübar (neuer Look, weiterhin modern)
Weg von der schwebenden Pill-Kapsel hin zu einer technischen, flachen Leiste:
- Volle Breite, transparent über dem Hero, beim Scrollen wird sie sticky mit dezentem Blur, feiner Unterlinie und leichtem Schatten (keine Pille mehr).
- Layout: Wortmarke links, Navigation mittig/rechts als Mono-getypte Labels in Kleinkapitälchen-Optik, CTA „Projekt starten" rechts als rechteckiger Button mit großem Radius und Pfeil.
- Aktiver Link erhält einen kurzen Akzent-Strich unter dem Label statt reiner Farbänderung; Hover animiert diesen Strich von links.
- Mobil: gleiche Leiste, Wortmarke links, Menü-Button rechts; Sidebar-Overlay bleibt funktional, bekommt aber Mono-Labels, Nummerierung der Einträge und die neue Wortmarke.

## Technisch
- Neue Datei `src/components/Logo.tsx`; Anpassung `src/components/landing/Navbar.tsx` und `src/components/landing/Footer.tsx` (Logo-Import ersetzen).
- Bestehende Utilities aus `src/index.css` (`mono-label`, Gradient-/Blueprint-Tokens) werden genutzt; ggf. eine kleine Utility für die Unterstreichungs-Animation.
- `src/assets/logo.png` wird nicht mehr referenziert und entfernt.
- Keine neuen Abhängigkeiten, keine Inhalts- oder Backend-Änderungen.
