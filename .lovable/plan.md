E-Mail-Domain, Impressum-Website und 2-Step-Bewerbungsformular

## 1. E-Mail überall zurück auf .com

`kontakt@vona-cloud.de` → `kontakt@vona-cloud.com` (inkl. `mailto:`-Links) in:
- `src/pages/Kontakt.tsx`, `Team.tsx`, `Karriere.tsx`, `Bewerbung.tsx`, `Impressum.tsx`, `Datenschutz.tsx`
- `src/components/landing/Footer.tsx`, `src/components/landing/CTASection.tsx`

## 2. Impressum

Website-Zeile: `vona-cloud.com` → `vona-cloud.solutions` (Linktext und `href` auf `https://vona-cloud.solutions`).

## 3. /karriere/bewerbung als 2-Schritt-Formular

Neuer Aufbau mit Fortschrittsanzeige (Step 01 / 02) im bestehenden Blueprint-Stil (Mono-Labels, Hairline-Felder):

```text
Step 01 — Kontakt
  Vorname            Nachname
  E-Mail             Telefon
  [Weiter]

Step 02 — Details
  Anstellungsart     Startdatum
  PLZ                Stadt
  [Zurück]  [Bewerbung absenden]
```

Entfällt: Lebenslauf-Upload und Anschrift (Straße + Hausnummer).
Bleibt: Stellen-Auswahl (Vorbelegung über `?stelle=`) in Step 01, Sidebar mit ausgewählter Stelle und Ablauf.

Validierung: Step 01 verlangt Vorname, Nachname, E-Mail, Telefon, bevor „Weiter" möglich ist; Step 02 verlangt Anstellungsart, Startdatum, PLZ, Stadt.

## Technische Hinweise

- `Bewerbung.tsx`: `step`-State (1|2), Formular-State um `startdatum` erweitert, `strasse` und `lebenslauf` entfernt.
- Absenden weiterhin per FormData an die bestehende Edge-Function-URL; `resume` wird nicht mehr mitgeschickt, `start_date` neu ergänzt, `branding_id` unverändert.
- Anschließend `bun run build` zur Prüfung.
