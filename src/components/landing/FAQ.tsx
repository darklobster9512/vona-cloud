import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Für welche Unternehmen ist Efficient Flow geeignet?',
    a: 'Wir arbeiten mit mittelständischen Unternehmen und Konzernen, die ihre Prozesse digitalisieren und effizienter gestalten möchten. Branchenunabhängig — von Produktion über Logistik bis Finanzdienstleistung.',
  },
  {
    q: 'Wie läuft eine typische Zusammenarbeit ab?',
    a: 'Alles beginnt mit einer kostenlosen Erstberatung. Danach folgt eine Analyse-Phase, in der wir Ihre Prozesse verstehen. Basierend darauf entwickeln wir ein Konzept und setzen es agil um — mit regelmäßigen Feedback-Schleifen.',
  },
  {
    q: 'Entwickelt ihr auch individuelle Software?',
    a: 'Ja, das ist einer unserer Kernbereiche. Wir entwickeln maßgeschneiderte Web-Applikationen, Dashboards, Automatisierungstools und API-Integrationen — alles cloud-native und skalierbar.',
  },
  {
    q: 'Was unterscheidet euch von anderen Beratungen?',
    a: 'Wir kombinieren strategische Beratung mit technischer Umsetzung. Viele Beratungen liefern PowerPoint-Folien — wir liefern funktionierende Software und messbare Ergebnisse.',
  },
  {
    q: 'Wie schnell sieht man erste Ergebnisse?',
    a: 'Abhängig vom Projektumfang zeigen sich erste Quick Wins oft schon in den ersten 2–4 Wochen. Größere Transformationsprojekte laufen typischerweise über 3–6 Monate.',
  },
  {
    q: 'Was kostet eine Zusammenarbeit?',
    a: 'Die Kosten hängen vom Umfang und der Komplexität ab. Die Erstberatung ist immer kostenlos. Danach erstellen wir ein transparentes Angebot ohne versteckte Kosten.',
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
