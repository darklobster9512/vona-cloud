# Meta Pixel auf /karriere/bewerbung einbauen

## Ziel
Auf der Bewerbungsseite den Meta-Pixel (Facebook Pixel) laden und beim erfolgreichen Absenden des Formulars ein `Lead`-Event an Meta senden.

## Änderungen

### 1. Meta Pixel Base-Code laden
- **Datei:** `src/pages/Bewerbung.tsx`
- **Vorgehen:** Ein `useEffect` beim Mount der Seite injiziert das offizielle Meta-Pixel-Snippet (Pixel-ID `1076768121483815`).
- Das Snippet initialisiert `fbq`, lädt `fbevents.js` und feuert `PageView`.
- Kein zusätzliches npm-Paket nötig.

### 2. Noscript-Fallback
- **Datei:** `src/pages/Bewerbung.tsx`
- **Position:** Am Ende des gerenderten JSX, innerhalb von `<body>` (nicht im `<head>`).
- **Inhalt:** `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1076768121483815&ev=PageView&noscript=1" />`

### 3. Lead-Event beim Absenden
- **Datei:** `src/pages/Bewerbung.tsx`
- **Position:** Im Erfolgszweig von `handleSubmit`, direkt nach `data.success`.
- **Event:** `fbq('track', 'Lead');`
- Nur bei tatsächlich erfolgreicher Server-Antwort auslösen.

## Technische Details
- Keine Änderung am Formular-State, an der Validierung oder am Layout.
- Das Pixel wird nur auf `/karriere/bewerbung` geladen, nicht global.
