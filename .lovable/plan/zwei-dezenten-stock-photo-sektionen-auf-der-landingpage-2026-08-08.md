# Zwei dezenten Stock-Photo-Sektionen auf der Landingpage

Zwei passende Sektionen der Landingpage bekommen dezent eingebaute Workspace-/UI-Fotos im modernen, hellen Tech-Look.

## Gewählte Sektionen

- **Problem / Lösung**: Ein dezent platziertes, seitlich ausgerichtetes Bild zeigt einen modernen Arbeitsplatz mit sauberem UI/Workflow-Setup ("nachher"-Stimmung: Klarheit, Team, Tools).
- **Methodik / Prozess**: Ein kompaktes Bild unterstreicht den strukturierten Ablauf — z. B. zwei Personen an einem Screen mit einem übersichtlichen Projektboard oder Architektur-Skizze.

## Bildstil

- Realistische Stock-Photo-Ästhetik: moderne Büros, cleane Desktops, weiches natürliches Licht, dezent blau getöntes Farbschema, ohne auffällige Farben oder Menschen im Vordergrund.
- Keine Hero-Bilder, sondern sektionsbegleitende Bilder in ca. 16:9 oder 4:3, mit abgerundeten Ecken und subtilem Schatten.

## Umsetzung

- Zwei Bilder generieren und in `src/assets/landing/` speichern.
- `ProblemSolution.tsx` anpassen: Bild neben oder innerhalb der "Lösung"-Spalte einbauen, mit `rounded-2xl`, `shadow-sm` und `object-cover`.
- `Methodology.tsx` anpassen: Bild unterhalb oder neben dem Prozess-Timeline-Block platzieren, ebenfalls dezent eingerahmt.
- Auf Mobile die Bilder unter dem Text stapeln, auf Desktop daneben oder im Grid.
- Keine Änderung an Typografie, Farben oder Kopfzeilen; nur ergänzendes Bildmaterial.

## Technisch

- Keine neuen Abhängigkeiten.
- Bilder werden als statische Assets oder via Lovable Assets eingebunden.
- Alt-Texte auf Deutsch mit Keywords (Softwareentwicklung, Prozess, Wiesbaden).
