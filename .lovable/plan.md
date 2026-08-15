# Erfolgs-Status nach Bewerbungsabsenden

## Ziel
Auf `/karriere/bewerbung` soll das Formular nach erfolgreichem Absenden nicht nur einen Toast ausgeben, sondern in eine deutliche Erfolgsbestätigung umschalten.

## Änderungen

### 1. State für erfolgreiches Absenden
- **Datei:** `src/pages/Bewerbung.tsx`
- Neuen State `submitted` (boolean) einführen.
- Bei erfolgreicher Server-Antwort (`data.success`) `submitted` auf `true` setzen.
- Toast-Benachrichtigung weiterhin auslösen.
- Meta-Lead-Event weiterhin feuern.

### 2. Erfolgsansicht rendern
- Wenn `submitted === true`, wird anstelle des Formulars eine Erfolgsbestätigung angezeigt.
- **Inhalt:**
  - Checkmark-Icon (z. B. `CheckCircle2` aus lucide-react).
  - Überschrift: „Bewerbung erfolgreich gesendet!“
  - Untertitel: „Wir melden uns in Kürze bei dir.“
- **Stil:** Passend zum Blueprint-Design — dunkle `bg-ink`-Karte mit Blueprint-Raster, weiße Typografie, mono-Label.
- Optional: Button „Weitere Bewerbung senden“, der `submitted` zurücksetzt und das Formular leert.

### 3. Formular-Reset
- Reset von Formular-State und Step erst beim erneuten Öffnen bzw. über den optionalen „Neue Bewerbung“-Button.
- Beim direkten Erfolgszustand bleiben die eingegebenen Daten nicht sichtbar.

## Technische Details
- Keine Änderung an der API-Anbindung, Validierung oder dem Meta-Pixel.
- Nur UI-State und Rendering-Logik in `src/pages/Bewerbung.tsx` betroffen.
