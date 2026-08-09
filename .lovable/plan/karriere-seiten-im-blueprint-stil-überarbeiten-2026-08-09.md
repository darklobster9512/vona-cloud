# Karriere-Seiten im Blueprint-Stil überarbeiten

Die Karriere-Bereiche sind noch im alten, generischen Card-Look (weiche runde Karten, wenig Struktur). Sie werden auf die aktuelle visuelle Sprache der Seite gebracht: Blueprint-Raster, Mono-Labels, Ink-Bänder, technische Nummerierung — ohne Farbwechsel.

## 1. Stellen-Übersicht (/karriere)

- Neue Listen-Optik statt weicher Karten: breitere Zeilen mit feiner Blueprint-Fläche, Hairline-Trennern und Hover, der eine blaue Akzentkante links einfährt.
- Jede Stelle bekommt eine Mono-Nummer (`01`, `02`, …) und Mono-Meta-Chips für Standort, Modell, Arbeitszeit/Vergütung.
- Titel deutlich größer und technischer gesetzt, Kurzbeschreibung als Sekundärzeile.
- Klarer Pfeil-Affordance rechts, der beim Hover ausfährt.
- Oberhalb der Liste eine schmale Info-Zeile: Anzahl offener Stellen + Hinweis auf Initiativbewerbung (E-Mail-Link).
- Unter der Liste ein kompaktes Ink-Band als Abschluss-CTA („Keine passende Stelle?" → kontakt@vona-cloud.com).

## 2. Detailseiten (/karriere/:slug)

- Kopfbereich: Meta-Daten (Standort, Modell, Arbeitszeit, Stundenlohn) als Mono-Chip-Reihe direkt unter dem PageHero statt nur in der Sidebar.
- Inhaltsblöcke (Über die Position, Aufgaben, Profil, Benefits) ohne Karten-Boxen: nummerierte Abschnitte mit Mono-Label, Hairline-Trenner und zweispaltigen Listen mit kleinen Blueprint-Markern statt Häkchen-Icons.
- Sidebar bleibt sticky, wird aber schlanker: ein Ink-Block mit „Jetzt bewerben"-Button, darunter ein kompakter Fakten-Block und ein dezenter Kontakt-Link (keine drei gleich schweren Karten mehr).
- Am Seitenende Navigation zur nächsten/vorherigen Stelle plus Zurück-Link zur Übersicht.

## 3. Bewerbungsseite (/karriere/bewerbung)

- Formular an den aktuellen Kontaktseiten-Stil angepasst: kein Karten-Container, Mono-Labels über den Feldern, Hairline-Inputs, Blueprint-Hintergrund im Abschnitt.
- Rechts eine schlanke sticky Zusammenfassung: gewählte Stelle, Meta-Fakten, Ablauf der Bewerbung in 3 nummerierten Schritten.
- Bestehende Logik (Edge Function, Felder, Validierung, Upload) bleibt unverändert — nur Layout und Optik.

## Technische Notizen

- Nur Präsentations-Code: `src/pages/Karriere.tsx`, `src/pages/KarriereDetail.tsx`, `src/pages/Bewerbung.tsx`.
- Verwendung der vorhandenen Utilities aus `src/index.css` (`bg-blueprint`, `bg-blueprint-fine`, `bg-ink`, `mono-label`) und der bestehenden Scroll-Animationen (IntersectionObserver / `useScrollAnimation`), keine neue Animations-Library.
- `src/data/karriereStellen.ts` bleibt inhaltlich unverändert (Texte, Slugs, Felder).
