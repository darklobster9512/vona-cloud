# Karriere-Bewerbung: Branding-ID und Edge-Function URL aktualisieren

## Ziel
Die beiden Konstanten am Anfang von `src/pages/Bewerbung.tsx` auf die neuen Werte ändern, damit Bewerbungen an den korrekten Supabase-Projekt-Endpunkt übermittelt werden.

## Änderungen
- `BRANDING_ID` ändern von `e4f832ef-4f72-4fa3-983e-07b678a698a1` zu `9c944500-d35c-40b9-99b7-0d779350ce77`.
- `API_URL` ändern von `https://luorlnagxpsibarcygjm.supabase.co/functions/v1/submit-application` zu `https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application`.

## Technische Details
- Betroffene Datei: `src/pages/Bewerbung.tsx`, Zeilen 19–20.
- Keine weiteren UI- oder Logik-Änderungen; die `FormData`-Struktur und das Meta-Pixel-Tracking bleiben unverändert.
- Nach der Änderung wird ein Build-Check durchgeführt, um sicherzustellen, dass die Datei weiterhin kompiliert.
