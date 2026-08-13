# Zusätzlicher "Weiter"-Button auf /karriere/bewerbung

## Ziel
Auf der Bewerbungsseite soll im ersten Schritt ein weiterer "Weiter"-Button am oberen Rand des Formulars erscheinen, zusätzlich zum bestehenden Button unten.

## Änderung
- **Datei:** `src/pages/Bewerbung.tsx`
- **Position:** Innerhalb des Formulars, oberhalb der Eingabefelder in Step 1.
- **Neu:** Ein zweiter "Weiter"-Button mit identischem Stil und Verhalten wie der bestehende untere Button (`handleNext`).
- **Sichtbarkeit:** Nur in Step 1 anzeigen; in Step 2 weiterhin nur "Zurück" und "Bewerbung absenden".

## Technische Details
- Verwendet denselben `handleNext`-Handler.
- Keine Änderung an der Validierungslogik oder dem Formular-State.
