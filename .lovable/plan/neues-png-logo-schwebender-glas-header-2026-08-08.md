# Neues PNG-Logo + schwebender Glas-Header

## Logo (PNG, ohne Icon)
- Neu generierte, hochauflösende Wortmarke als PNG mit transparentem Hintergrund, ersetzt die aktuelle Text-Komponente.
- Look: „VONA" sehr kräftig in dunklem Tintenblau, direkt daneben „CLOUD" dünn und weit gesperrt in Blau — technisch-elegant, klar hierarchisch.
- Zwei Varianten: dunkle Version für hellen Hintergrund (Header, Footer) und optional helle Version für dunkle Bänder, falls nötig.
- Deutlich größer eingebunden als bisher (Header ca. 40–48 px Höhe, Footer ähnlich), scharf auf Retina durch 3x-Auflösung.
- Die Text-Komponente `src/components/Logo.tsx` wird auf das PNG umgestellt, damit Header, Mobile-Sidebar und Footer automatisch mitziehen.

## Header: schwebende Glas-Insel
Deutlich anders als die frühere Pille — kompakter, technischer, mit Struktur:
- Eine schmale, abgerundete Glasleiste (starker Blur, feine Innenkante, weicher blauer Schatten) schwebt zentriert über dem Inhalt, mit klarem Abstand zu allen Rändern.
- Aufbau innerhalb der Insel: Wortmarke links, dann ein feiner vertikaler Trennstrich, Navigation in der Mitte, rechts wieder Trennstrich und der CTA „Projekt starten" als kompakter Pfeil-Button.
- Navigation als kleine, klar lesbare Labels; aktiver Eintrag erhält eine dezent hinterlegte Kapsel statt Unterstrich, Hover blendet diese sanft ein.
- Beim Scrollen schrumpft die Insel leicht, wird etwas opaker und der Schatten verstärkt sich — ohne Layout-Sprung.
- Mobil: schmale Glas-Insel mit Wortmarke links und Menü-Button rechts; das bestehende Sidebar-Overlay bleibt erhalten und erhält das neue Logo.

## Technisch
- Bild-Generierung des Wortmarken-PNG nach `src/assets/`, Einbindung als normaler Bild-Import; alte Logo-Referenzen aufräumen.
- Anpassung `src/components/Logo.tsx`, `src/components/landing/Navbar.tsx`, `src/components/landing/Footer.tsx`.
- Abstände der Hero-Sektion prüfen, damit die schwebende Insel nirgends überlappt.
- Farben ausschließlich über bestehende Tokens/Utilities aus `src/index.css`; keine neuen Abhängigkeiten, keine Inhalts- oder Backend-Änderungen.
- Kontrolle per Screenshot (Desktop + Mobil, ungescrollt und gescrollt).
