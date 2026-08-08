import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Die Migration lief in Wellen — ohne einen einzigen Ausfall im Tagesgeschäft. Danach war die Cloud-Rechnung ein Drittel niedriger.',
    author: 'Geschäftsführer',
    company: 'Handelsunternehmen, Hessen',
    metric: '−34 % Cloud-Kosten',
  },
  {
    quote:
      'Störungen bemerkt heute das Monitoring, nicht unser Kunde. Das hat die Wahrnehmung unseres Produkts komplett verändert.',
    author: 'CTO',
    company: 'SaaS-Anbieter, Rhein-Main',
    metric: '99,98 % Uptime',
  },
  {
    quote:
      'Statt Freitagsdeploys mit Bauchweh liefern wir mehrmals täglich aus. Die Pipelines und die Dokumentation sind Gold wert.',
    author: 'Leiter IT',
    company: 'Industriedienstleister',
    metric: '31 Deploys / Woche',
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden bg-muted/25 py-24 md:py-32">
      <div className="absolute inset-0 bg-dotgrid opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className={`mb-16 max-w-2xl scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="mono-label mb-4">06 — Referenzen</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Was Kunden
            <br />
            <span className="text-gradient-blue">nach dem Go-live sagen.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.author + t.company}
              className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} card-flat card-flat-hover flex flex-col p-8 ${
                i === 1 ? 'md:mt-10' : ''
              } ${i === 2 ? 'md:mt-20' : ''}`}
            >
              <Quote size={22} className="mb-6 text-primary/30" />
              <blockquote className="flex-1 text-[15px] font-medium leading-relaxed text-foreground/90">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-7 border-t border-border/60 pt-5">
                <p className="text-sm font-bold tracking-tight">{t.author}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.company}</p>
                <p className="mt-4 inline-block rounded-full bg-primary/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                  {t.metric}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
