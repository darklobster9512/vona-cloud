# Umfirmierung: VONA Cloud → Völler IT

Alle Firmen- und Kontaktdaten werden auf Völler IT Solutions GmbH umgestellt. Telefonnummer (06131 8888371) und USt-ID (DE294808751) bleiben unverändert.

## Neue Daten

```text
Völler IT Solutions GmbH
Sandweg 44
35037 Marburg
kontakt@voeller-it.com
Website: voeller-it.solutions
Amtsgericht Marburg, HRB 6375
Geschäftsführer: Klaus Völler
```

## Betroffene Stellen

- Rechtstexte: `Impressum.tsx` (Anschrift, Registergericht, HRB, Geschäftsführer, E-Mail, Website-Link), `Datenschutz.tsx` (Verantwortlicher, E-Mail, Geschäftsführer)
- Kontakt/CTA: `Kontakt.tsx`, `components/landing/CTASection.tsx`, `components/landing/Footer.tsx` (Adresse, E-Mail, Copyright-Zeile)
- Karriere: `Karriere.tsx`, `Bewerbung.tsx` (Kontakt-Mailadressen)
- Team: `Team.tsx` (Geschäftsführer-Name, Initiativbewerbungs-Mail)
- Marken-/Textnennungen „VONA“ → „Völler IT“ in `index.html` (Title, Description, Author, OG-Tags), `Index.tsx`, `Leistungen.tsx`, `Methodik.tsx`, `PageHero.tsx`, `ProblemSolution.tsx`, `HeroSection.tsx`, `Karriere.tsx`, `Kontakt.tsx`, `Team.tsx`
- `public/sitemap.xml`: Domain auf `https://voeller-it.solutions`
- `Logo.tsx`: `alt`-Text auf „Völler IT“ (Logo-Bilddatei bleibt vorerst unverändert)

## Technische Hinweise

- Textersetzungen: `kontakt@vona-cloud.com` → `kontakt@voeller-it.com` (inkl. `mailto:`), `vona-cloud.solutions` → `voeller-it.solutions`, `VONA Cloud Solutions GmbH` → `Völler IT Solutions GmbH`, restliche „VONA“ → „Völler IT“.
- Adresse `Rheingaustr. 53, 65201 Wiesbaden` → `Sandweg 44, 35037 Marburg`, Registergericht Wiesbaden HRB 32932 → Marburg HRB 6375, `Alexander Seitz` → `Klaus Völler`.
- Abschluss: Build-Prüfung und Kontrolle, dass keine Treffer für „VONA“, „Wiesbaden“, „Seitz“ oder „vona-cloud“ verbleiben.

## Offen

Das Logo-Bild zeigt weiterhin die Wortmarke „VONA“. Sag Bescheid, wenn ich ein neues Logo/Favicon für Völler IT erzeugen soll.
