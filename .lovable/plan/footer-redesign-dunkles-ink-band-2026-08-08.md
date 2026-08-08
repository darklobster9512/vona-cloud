# Footer-Redesign: dunkles Ink-Band

Der Footer wird komplett neu aufgebaut — als dunkler Abschluss der Seite im bestehenden Blueprint-Stil, passend zu den dunklen Kennzahlen- und CTA-Bändern.

## Aufbau

- **Fläche**: dunkle `bg-ink`-Fläche mit hellem Blueprint-Raster (`bg-blueprint-light`) und weichem Blau-Glow oben, harte Oberkante als Akzentlinie.
- **Obere Zone**: Wortmarke (gelieferte Logo-Datei, hell auf dunkel gut lesbar) plus kurzer Positionierungssatz zu Entwicklung, Betrieb und Vertrieb von Softwareprodukten inkl. Beratung. Rechts daneben ein kompakter Kontakt-Block: große, klickbare E-Mail-Adresse als Blickfang und eine Zeile „Antwort in 24 h".
- **Linkspalten**: drei Spalten (Unternehmen, Leistungen, Rechtliches) mit Mono-Labels als Überschriften, feine vertikale Trennlinien, Links hell-gedimmt mit Hover auf Weiß und kurzem Akzentstrich.
- **Adress-/Firmenzeile**: Firmenname, Rheingaustr. 53, 65201 Wiesbaden — als eigene dezente Zeile mit Icons in Blau.
- **Untere Leiste**: abgesetzt durch feine Linie, links Copyright, rechts Impressum/Datenschutz sowie ein Hinweis „Hosting in der EU".
- Alle Inhalte behalten die aktuellen Texte, Links und Kontaktdaten — nur Anordnung und Optik ändern sich.

## Technisch

- Nur `src/components/landing/Footer.tsx` wird neu geschrieben; keine neuen Abhängigkeiten.
- Farben ausschließlich über bestehende Tokens und Utilities (`bg-ink`, `bg-blueprint-light`, `mono-label`, `text-primary`), keine hartkodierten Farbklassen.
- Bei Bedarf eine kleine Utility in `src/index.css` für die Link-Unterstreichung; Farbtokens bleiben unverändert.
- Logo-Komponente wird unverändert weiterverwendet, ggf. mit größerer Size-Variante.
