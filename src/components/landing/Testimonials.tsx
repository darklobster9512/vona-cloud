import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Unsere Abläufe stecken jetzt in einer Anwendung statt in zwanzig Excel-Dateien. Die Einführung lief ohne Stillstand im Tagesgeschäft.',
    author: 'Geschäftsführer',
    company: 'Handelsunternehmen, Hessen',
    metric: '6 Wochen bis Go-live',
  },
  {
    quote:
      'Was uns überzeugt hat: Nach dem Projekt war jemand da. Wartung, Updates und Rückfragen laufen zuverlässig über einen Ansprechpartner.',
    author: 'Leiterin Verwaltung',
    company: 'Dienstleister, Rhein-Main',
    metric: 'Support < 4 h',
  },
  {
    quote:
      'Die Beratung war ehrlich — inklusive der Punkte, die wir nicht hören wollten. Danach war klar, welche Software wir wirklich brauchen.',
    author: 'Leiter IT',
    company: 'Industriedienstleister',
    metric: '3 Systeme abgelöst',
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
