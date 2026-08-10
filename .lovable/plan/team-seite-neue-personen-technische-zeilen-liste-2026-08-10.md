# Team-Seite: neue Personen + technische Zeilen-Liste

## Ziel
Die /team-Seite bekommt die 10 hochgeladenen Portraits, neue Namen/Rollen und ein neues Layout im Blueprint-Stil (technische Zeilen-Liste wie auf /karriere) statt des bisherigen 5-Spalten-Karten-Grids.

## Besetzung (Foto → Person)
| Foto | Name | Rolle |
| --- | --- | --- |
| StefanFritz | Alexander Seitz | Geschäftsführer / CEO |
| JamesMathewKaufmann | Michael Winterfeld | Projektleiter |
| DanielKück | Jonas Hagenauer | Recruiter |
| JörgPabst | Andreas Lindner | Head of Software Engineering |
| NEHRUDINKURTESI | Kerim Ademi | Senior Software Engineer |
| AlesiaKarpach | Mia Bergmann | UX/UI Design |
| LyubovGutsul | Elena Sorin | Business Consultant |
| AnhelinaFedchuk | Nadine Reuter | Requirements Engineering |
| AndreaChristinaVölkel | Claudia Sanders | Head of Operations & Support |
| ChristinLent | Lena Fuchs | HR & People |

Jede Person erhält einen kurzen, sachlichen Beschreibungssatz passend zum Unternehmensgegenstand (Entwicklung, Betrieb, Vertrieb, Beratung).

## Neues Layout
- Blueprint-Hintergrund mit Mono-Label ("Team / 10 Personen") über der Liste.
- Untereinander liegende Zeilen mit Hairline-Trennlinien, jede Zeile:
  - laufende Nummer in Mono (01, 02, …)
  - rundes Portrait links
  - Name groß, Rolle als blaues Mono-Label
  - Beschreibungstext rechts, auf Mobil untereinander
  - dezenter Hover: blaue Linie/Akzent, leichte Verschiebung
- Geschäftsführer-Zeile als hervorgehobene erste Zeile (Ink-Akzent bzw. stärkerer Rahmen).
- Bildschutz bleibt: kein Rechtsklick, kein Drag, `select-none`.
- Scroll-Animationen wie bisher (IntersectionObserver, keine Framer Motion).
- Responsiv: eine Spalte auf Mobil, zweispaltige Zeilenaufteilung ab md.

## Technisches
- Bilder über `lovable-assets` aus `/mnt/user-uploads/` als `.asset.json`-Pointer in `src/assets/team/` einbinden; alte, nicht mehr genutzte Team-JPGs entfernen.
- `src/pages/Team.tsx` neu aufbauen (Datenarray + Zeilen-Rendering), PageHero-Subtitle auf das Team von VONA Cloud Solutions anpassen.
- Keine Änderungen an anderen Seiten.
