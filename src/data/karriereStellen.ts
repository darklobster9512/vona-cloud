export interface Stelle {
  slug: string;
  titel: string;
  standort: string;
  modell: string;
  kurzbeschreibung: string;
  beschreibung: string;
  aufgaben: string[];
  voraussetzungen: string[];
  benefits: string[];
  arbeitszeit?: string;
  stundenlohn?: string;
}

export const stellen: Stelle[] = [
  {
    slug: 'onlineprozess-tester',
    titel: 'Mitarbeiter (m/w/d) für Onlineprozess-Tests',
    standort: 'Düsseldorf',
    modell: 'Remote / Minijob / Teilzeit',
    arbeitszeit: 'Flexibel (ca. 5–30 Std./Woche)',
    stundenlohn: '29 €',
    kurzbeschreibung: 'Teste digitale Anwendungen remote und halte deine Eindrücke strukturiert fest – flexibel und ohne Vorkenntnisse.',
    beschreibung: 'Du bist regelmäßig online unterwegs und achtest darauf, ob Webseiten oder Apps gut funktionieren? Dann könnte diese Tätigkeit gut zu dir passen. Zur Unterstützung suchen wir Personen, die digitale Anwendungen testen und ihre Eindrücke strukturiert festhalten. Die Aufgaben sind einfach gehalten und werden verständlich erklärt – Vorkenntnisse sind nicht erforderlich.',
    aufgaben: [
      'Testen von Webseiten und mobilen Apps',
      'Prüfen von Abläufen aus Sicht eines Nutzers',
      'Dokumentation von Auffälligkeiten und Feedback',
      'Erkennen von einfachen Bedienungsproblemen',
      'Weitergabe von Verbesserungsvorschlägen',
    ],
    voraussetzungen: [
      'Zuverlässige und sorgfältige Arbeitsweise',
      'Grundlegendes Verständnis für Internetanwendungen',
      'Ein internetfähiges Gerät (Smartphone, Tablet oder PC)',
      'Eigenständiges Arbeiten und Motivation',
      'Keine spezielle Ausbildung notwendig',
    ],
    benefits: [
      'Flexible Zeiteinteilung (auch abends oder am Wochenende möglich)',
      'Arbeiten von zu Hause aus',
      'Einfache Einarbeitung mit klaren Anleitungen',
      'Angenehme, unkomplizierte Zusammenarbeit',
      'Vergütung auf Stundenbasis mit zusätzlicher Bonusmöglichkeit je nach Aufgabe',
    ],
  },
  {
    slug: 'senior-software-engineer',
    titel: 'Mitarbeiter (m/w/d) für Softwareentwicklung',
    standort: 'Düsseldorf',
    modell: 'Remote',
    kurzbeschreibung: 'Entwickle skalierbare Full-Stack-Lösungen mit React und Node.js für unsere Kunden.',
    beschreibung: 'Als Senior Software Engineer gestaltest du die technische Architektur unserer Kundenprojekte und entwickelst performante Web-Applikationen von der Konzeption bis zum Go-Live. Du arbeitest eng mit unserem Consulting-Team zusammen, um maßgeschneiderte Softwarelösungen zu realisieren.',
    aufgaben: [
      'Architektur und Entwicklung von Full-Stack-Webanwendungen (React, TypeScript, Node.js)',
      'Code Reviews und Mentoring von Junior-Entwicklern',
      'Technische Beratung in Kundenprojekten',
      'Mitgestaltung unserer internen Tools und Frameworks',
      'Enge Zusammenarbeit mit UX/UI-Design und Prozessberatung',
    ],
    voraussetzungen: [
      'Mindestens 5 Jahre Erfahrung in der Softwareentwicklung',
      'Sehr gute Kenntnisse in React, TypeScript und Node.js',
      'Erfahrung mit relationalen Datenbanken (PostgreSQL)',
      'Verständnis für CI/CD-Pipelines und Cloud-Infrastruktur',
      'Fließende Deutschkenntnisse (mind. C1)',
    ],
    benefits: [
      '100 % Remote-Arbeit möglich',
      'Modernste Tech-Stack und Tools',
      'Weiterbildungsbudget von 3.000 € pro Jahr',
      '30 Urlaubstage',
      'Flexibles Arbeitszeitmodell',
    ],
  },
  {
    slug: 'ux-ui-designer',
    titel: 'Mitarbeiter (m/w/d) für UX/UI Design',
    standort: 'Düsseldorf',
    modell: 'Remote',
    kurzbeschreibung: 'Gestalte intuitive Benutzeroberflächen und entwickle nutzerzentrierte Designkonzepte.',
    beschreibung: 'Als UX/UI Designer:in verantwortest du das visuelle und interaktive Erlebnis unserer Softwareprodukte. Du führst Nutzerforschung durch, erstellst Wireframes und High-Fidelity-Prototypen und arbeitest eng mit dem Entwicklungsteam zusammen.',
    aufgaben: [
      'Durchführung von User Research und Usability-Tests',
      'Erstellung von Wireframes, Mockups und interaktiven Prototypen',
      'Entwicklung und Pflege von Design-Systemen',
      'Enge Zusammenarbeit mit Entwicklern zur pixelgenauen Umsetzung',
      'Gestaltung von responsiven Web-Applikationen',
    ],
    voraussetzungen: [
      'Mindestens 3 Jahre Erfahrung im UX/UI-Design',
      'Sehr gute Kenntnisse in Figma',
      'Erfahrung mit Design-Systemen und Component Libraries',
      'Grundverständnis von HTML, CSS und React',
      'Portfolio mit relevanten Projekten',
    ],
    benefits: [
      '100 % Remote-Arbeit möglich',
      'Kreative Freiheit bei der Gestaltung',
      'Weiterbildungsbudget und Konferenzbesuche',
      '30 Urlaubstage',
      'Neueste Apple-Hardware',
    ],
  },
  {
    slug: 'devops-engineer',
    titel: 'Mitarbeiter (m/w/d) für DevOps & Cloud-Infrastruktur',
    standort: 'Düsseldorf',
    modell: 'Remote',
    kurzbeschreibung: 'Baue und optimiere unsere Cloud-Infrastruktur und CI/CD-Pipelines.',
    beschreibung: 'Als DevOps Engineer sorgst du für eine robuste, skalierbare und sichere Infrastruktur. Du automatisierst Deployments, überwachst Systeme und arbeitest an der Weiterentwicklung unserer Cloud-Architektur.',
    aufgaben: [
      'Aufbau und Pflege von CI/CD-Pipelines (GitHub Actions, GitLab CI)',
      'Verwaltung von Cloud-Infrastruktur (AWS / GCP)',
      'Container-Orchestrierung mit Docker und Kubernetes',
      'Monitoring, Logging und Alerting implementieren',
      'Security-Audits und Infrastruktur-Hardening',
    ],
    voraussetzungen: [
      'Mindestens 3 Jahre Erfahrung im DevOps-Bereich',
      'Fundierte Kenntnisse in AWS oder GCP',
      'Erfahrung mit Docker, Kubernetes und Terraform',
      'Kenntnisse in Scripting (Bash, Python)',
      'Verständnis für Netzwerksicherheit und Verschlüsselung',
    ],
    benefits: [
      '100 % Remote-Arbeit möglich',
      'On-Call-Zuschläge und faire Bereitschaftsregelungen',
      'Zugang zu neuesten Cloud-Technologien',
      '30 Urlaubstage',
      'Weiterbildungsbudget und Zertifizierungen',
    ],
  },
  {
    slug: 'werkstudent-digitalisierung',
    titel: 'Werkstudent (m/w/d) im Bereich Digitalisierung',
    standort: 'Düsseldorf',
    modell: 'Hybrid',
    kurzbeschreibung: 'Unterstütze unser Team bei spannenden Digitalisierungsprojekten und sammle Praxiserfahrung.',
    beschreibung: 'Als Werkstudent:in im Bereich Digitalisierung unterstützt du unser Team bei der Umsetzung von Kundenprojekten. Du bekommst Einblick in Beratung, Softwareentwicklung und Projektmanagement — ideal für den Berufseinstieg.',
    aufgaben: [
      'Unterstützung bei der Analyse und Dokumentation von Geschäftsprozessen',
      'Mitarbeit an der Entwicklung von Web-Applikationen',
      'Erstellung von Präsentationen und Projektdokumentationen',
      'Recherche zu Technologien und Markttrends',
      'Teilnahme an Kundenterminen und internen Workshops',
    ],
    voraussetzungen: [
      'Laufendes Studium in Informatik, Wirtschaftsinformatik oder vergleichbar',
      'Erste Erfahrung in Webentwicklung (HTML, CSS, JavaScript)',
      'Interesse an Digitalisierung und Prozessoptimierung',
      'Selbstständige und strukturierte Arbeitsweise',
      'Gute Deutschkenntnisse in Wort und Schrift',
    ],
    benefits: [
      'Flexible Arbeitszeiten neben dem Studium',
      'Praktische Erfahrung in echten Kundenprojekten',
      'Mentoring durch erfahrene Berater und Entwickler',
      'Übernahmemöglichkeit nach dem Studium',
      'Modernes Büro in Düsseldorf oder Remote-Arbeit',
    ],
  },
];
