import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'VONA Cloud hat unsere Plattform in die Cloud migriert, ohne dass unsere Kunden davon etwas gemerkt haben. Seitdem deployen wir mehrfach pro Woche statt einmal im Quartal.',
    name: 'Peter Kurt Nowack',
    role: 'CTO',
    company: 'Gamma Placetel GmbH',
  },
  {
    quote: 'Der Managed Betrieb hat unsere Nachtschichten beendet. Monitoring, Alerting und Backups laufen zuverlässig — wir kümmern uns wieder um das Produkt.',
    name: 'Lennard Neubauer',
    role: 'CEO',
    company: 'yourdelivery GmbH',
  },
  {
    quote: 'Das Architektur-Review war schonungslos ehrlich und hat unsere Cloud-Kosten um rund ein Drittel gesenkt. Genau die Beratung, die wir gebraucht haben.',
    name: 'Dr. Maximilian Bode',
    role: 'Head of IT',
    company: 'Vorwerk Deutschland Stiftung & Co. KG',
  },
];


const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Kundenstimmen</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Was unsere <span className="text-gradient-blue">Kunden sagen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} relative p-8 rounded-2xl border border-border/60 bg-white hover:shadow-lg hover:shadow-primary/[0.05] hover:border-primary/20 transition-all duration-300`}
            >
              <Quote size={28} className="text-primary/20 mb-4" />
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
