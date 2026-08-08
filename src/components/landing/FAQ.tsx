import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'Übernehmen Sie auch bestehende Systeme?',
    a: 'Ja. Wir starten mit einem Assessment der bestehenden Anwendung und Infrastruktur, dokumentieren den Ist-Stand und übernehmen Entwicklung, Betrieb oder beides — auch wenn ein anderer Dienstleister vorher zuständig war.',
  },
  {
    q: 'Wo werden die Daten gehostet?',
    a: 'Ausschließlich in Rechenzentren innerhalb der EU. Auf Wunsch mit Standort Deutschland, inklusive Auftragsverarbeitungsvertrag und dokumentiertem Backup- und Recovery-Konzept.',
  },
  {
    q: 'Wie schnell können wir starten?',
    a: 'Das Erstgespräch findet in der Regel innerhalb weniger Tage statt. Ein Assessment dauert ein bis zwei Wochen, danach liegt ein belastbarer Umsetzungsplan mit Aufwand und Zeitrahmen vor.',
  },
  {
    q: 'Was kostet der Managed-Betrieb?',
    a: 'Der Betrieb wird als monatliche Pauschale abgerechnet und richtet sich nach Anzahl der Services, Verfügbarkeitsanforderung und Reaktionszeiten. Sie erhalten vorab eine feste Kalkulation — keine variablen Überraschungen.',
  },
  {
    q: 'Sind wir nach dem Projekt an Sie gebunden?',
    a: 'Nein. Infrastruktur ist als Code beschrieben, Architektur und Betriebsabläufe sind dokumentiert. Sie können jederzeit intern übernehmen oder wechseln — kein Vendor-Lock-in.',
  },
  {
    q: 'Arbeiten Sie auch mit internen IT-Teams zusammen?',
    a: 'Regelmäßig. Wir ergänzen bestehende Teams punktuell — etwa für Cloud-Architektur, Pipelines oder Rufbereitschaft — und übergeben Wissen strukturiert.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Left column */}
        <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} lg:sticky lg:top-32 lg:self-start`}>
          <p className="mono-label mb-4">07 — Fragen</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Häufig gestellt,
            <br />
            <span className="text-gradient-blue">kurz beantwortet.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Etwas nicht dabei? Schreiben Sie uns — wir antworten in der Regel am selben Werktag.
          </p>
          <Link
            to="/kontakt"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/40"
          >
            <MessageCircle size={16} className="text-primary" />
            Frage stellen
          </Link>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-border/70 border-y border-border/70">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`scroll-hidden delay-${Math.min(i + 1, 4)} ${isVisible ? 'scroll-visible' : ''}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start gap-5 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="mt-1 font-mono text-[11px] tracking-widest text-muted-foreground/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`flex-1 text-base font-semibold tracking-tight transition-colors md:text-lg ${isOpen ? 'text-primary' : 'group-hover:text-primary'}`}>
                    {f.q}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary/40">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="pb-7 pl-9 pr-10 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
