import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Was macht VONA Cloud genau?',
    a: 'Wir entwickeln, betreiben und vertreiben Softwareprodukte — mit Fokus auf Cloud-Anwendungen. Dazu gehört die Entwicklung neuer Web- und SaaS-Anwendungen, die Migration bestehender Systeme, der überwachte Dauerbetrieb sowie Beratung zu Architektur, Kosten und Compliance.',
  },
  {
    q: 'Übernehmen Sie auch den Betrieb bestehender Anwendungen?',
    a: 'Ja. Wir übernehmen bestehende Anwendungen in den Managed Betrieb: Bestandsaufnahme, Aufbau von Monitoring und Backups, Automatisierung des Deployments und danach laufender Betrieb inklusive Alerting und Updates.',
  },
  {
    q: 'Wo werden unsere Daten gehostet?',
    a: 'Standardmäßig in Rechenzentren innerhalb der EU. Auf Wunsch setzen wir auch auf einer bestehenden Cloud-Umgebung oder in einer bestimmten Region auf und dokumentieren die Verarbeitung DSGVO-konform.',
  },
  {
    q: 'Wie läuft eine Cloud-Migration ohne Ausfall ab?',
    a: 'In Wellen: Wir migrieren zuerst unkritische Dienste, bauen parallele Umgebungen auf, spiegeln Daten und schalten erst um, wenn alles verifiziert ist. Ein Rollback-Pfad existiert in jeder Phase.',
  },
  {
    q: 'Mit welchen Technologien arbeiten Sie?',
    a: 'Überwiegend TypeScript und React im Frontend, Node.js, Python, PHP und C#/.NET im Backend, PostgreSQL als Datenbank, dazu Container, Infrastructure as Code und CI/CD-Pipelines.',
  },
  {
    q: 'Was kostet ein Projekt?',
    a: 'Das hängt vom Umfang ab. Entwicklungsprojekte kalkulieren wir nach Aufwand mit klaren Etappen, der Managed Betrieb läuft als monatliche Pauschale. Das Erstgespräch und die erste Einschätzung sind kostenlos.',
  },
];


const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-blue-section">
      <div className="max-w-3xl mx-auto px-6">
        <div className={`text-center mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Häufig gestellte <span className="text-gradient-blue">Fragen</span>
          </h2>
        </div>

        <div className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''}`}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border/60 rounded-xl px-6 bg-white data-[state=open]:shadow-sm data-[state=open]:border-primary/20 transition-all"
              >
                <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
