# VONA Cloud Solutions – Komplette Überarbeitung

Alle Seiten werden inhaltlich neu aufgesetzt und auf VONA Cloud Solutions GmbH umgestellt. Der moderne Look bleibt: gleiches Blau (Primary 217 91% 60%), Inter, weiche Radien, Gradients, Scroll-Animationen.

## Neue Positionierung

Von "Beratung & Digitalisierung" zu einem Cloud- und Softwarehaus:
Entwicklung, Betrieb und Vertrieb von Softwareprodukten inklusive Beratung.

Vier Kernthemen als roter Faden über alle Seiten:
1. Cloud-Software-Entwicklung (Web-Apps, SaaS, APIs)
2. Cloud-Betrieb & Managed Hosting (Deployment, Monitoring, Skalierung)
3. Cloud-Migration & Modernisierung (Legacy raus, Cloud rein)
4. Beratung & Cloud-Architektur (Security, Kosten, DSGVO/EU-Hosting)

## Logo

Neues Logo mit Wortmarke "VONA Cloud" plus abstraktem Cloud-/Netzwerk-Zeichen im Projektblau, transparenter Hintergrund. Wird als `src/assets/logo.png` ersetzt, dazu passendes Favicon.

## Seiten im Detail

- **Startseite**: Hero mit neuer Cloud-Botschaft, Trust-Bar, Problem/Lösung (Serverkosten, Ausfälle, langsame Releases), Leistungs-Grid mit den 4 Kernthemen, Software-Showcase, Vorgehensmodell, Kennzahlen, Referenzstimmen, FAQ, CTA — alle Texte neu geschrieben.
- **Leistungen**: Die 4 Kernthemen als ausführliche Blöcke mit Leistungsumfang, Beispielen und Ergebnissen.
- **Software**: Produkt-/Plattform-Seite: Cloud-Plattform-Bausteine, Tech-Stack (bestehende Tech-Icons, ergänzt um Cloud-Themen als Text), Integrationen, Betriebsmodelle.
- **Methodik**: Neuer 5-Schritt-Prozess (Assessment → Architektur → Build → Go-Live → Betrieb & Optimierung) mit Prinzipien wie IaC, CI/CD, EU-Hosting.
- **Team**: Alexander Seitz als Geschäftsführer, restliche Profile als Cloud-/Software-Rollen neu betextet (bestehende Bilder bleiben).
- **Karriere**: Neue Stellen passend zum Cloud-Fokus (z. B. Cloud Engineer, Fullstack Developer, Werkstudent Cloud Operations) inklusive Detailseiten und Bewerbungsformular-Texte.
- **Kontakt**: Neue Adresse Rheingaustr. 53, 65201 Wiesbaden, kontakt@vona-cloud.com, Ansprechpartner-Text neu.
- **Impressum**: Vollständig mit den angegebenen Daten (Amtsgericht Wiesbaden HRB 32932, Geschäftsführer Alexander Seitz, USt-IdNr. DE294808751, Unternehmensgegenstand).
- **Datenschutz**: Verantwortlicher, Adresse und Kontakt auf VONA Cloud angepasst, Rest inhaltlich durchgesehen.
- **404 & Cookie-Banner**: Texte an neue Marke angepasst.
- **Navigation & Footer**: Neues Logo, neue Claims, Kontaktdaten und Linkstruktur.

## Technisches

- `index.html`: Titel, Description, OG/Twitter-Tags, Author auf VONA Cloud Solutions.
- Pro Seite `document.title` und Meta-Description aktualisieren, jeweils eine H1.
- Farbtokens in `src/index.css` und `tailwind.config.ts` bleiben unverändert; keine hardcodierten Farben.
- Keine Backend-Funktionen nötig; Kontakt-/Bewerbungsformular bleibt in der bestehenden Logik.
