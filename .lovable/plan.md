# Telefonnummer hinterlegen: 06131 8888371

## Ziel
Die Telefonnummer `06131 8888371` soll auf der Kontaktseite sowie in den Rechtstextseiten (Impressum, Datenschutz) ergänzt werden. Sie ist klickbar als `tel:+4961318888371`.

## Änderungen

### 1. Kontaktseite (`src/pages/Kontakt.tsx`)
- Neuer Eintrag in der `contactInfo`-Sidebar mit `Phone`-Icon.
- Label: **Telefon**.
- Wert: `06131 8888371` mit `href: 'tel:+4961318888371'`.
- Position: Unter dem E-Mail-Eintrag oder über der Erreichbarkeit — je nach semantischer Gruppierung.

### 2. Impressum (`src/pages/Impressum.tsx`)
- Im Block **Kontakt** unter der E-Mail-Zeile ergänzen:
  - `Telefon: 06131 8888371` als klickbaren `tel:`-Link mit `text-primary hover:underline`.

### 3. Datenschutz (`src/pages/Datenschutz.tsx`)
- Im Abschnitt **1. Verantwortlicher** unter der E-Mail-Zeile ergänzen:
  - `Telefon: 06131 8888371` als klickbaren `tel:`-Link.

## Optional: Konsistente Weitergabe (Empfohlen)
- `src/components/landing/CTASection.tsx`: In der Info-Panel-Liste (rechte Spalte) ein zusätzliches Item mit Telefonnummer ergänzen.
- `src/components/landing/Footer.tsx`: In der Bottom-Bar die Telefonnummer als weiteres Metadatum mit `Phone`-Icon ergänzen.

## Technische Details
- `Phone`-Icon wird aus `lucide-react` importiert.
- Link-Format: `href="tel:+4961318888371"`.
- Keine Änderungen an Formularfeldern, Layoutbreiten oder Styling-Logik; nur reine Daten-/Link-Ergänzungen.

## Validierung
- Build läuft durch.
- Vorschau zeigt Telefonnummer auf `/kontakt`, `/impressum` und `/datenschutz` korrekt an.
- Klick auf die Nummer öffnet das Telefon- bzw. Softphone-Dialog.
