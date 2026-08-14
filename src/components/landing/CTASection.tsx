import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Clock, Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-14 md:px-16 md:py-20`}
        >
          <div className="absolute inset-0 bg-blueprint-light opacity-70 pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
                Nächster Schritt
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Sprechen wir über Ihre
                <br />
                Software.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
                30 Minuten, unverbindlich: Wir schauen auf Ihre Abläufe, Ihre bestehenden
                Systeme und Ihre Anforderungen — und sagen offen, was sich lohnt.
              </p>


              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/kontakt"
                  className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-white px-9 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  Erstgespräch anfragen
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:kontakt@voeller-it.com"
                  className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-white/25 px-9 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Mail size={18} />
                  E-Mail schreiben
                </a>
              </div>
            </div>

            {/* Info panel */}
            <div className="space-y-4 lg:border-l lg:border-white/15 lg:pl-12">
              {[
                { icon: Clock, k: 'Antwortzeit', v: 'meist am selben Werktag' },
                { icon: Phone, k: 'Telefon', v: '06131 8888371' },
                { icon: MapPin, k: 'Standort', v: 'Sandweg 44, Marburg' },
                { icon: Mail, k: 'E-Mail', v: 'kontakt@voeller-it.com' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.k} className="flex items-start gap-4 rounded-2xl bg-white/[0.06] px-5 py-4">
                    <Icon size={16} className="mt-1 shrink-0 text-white/70" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">{item.k}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{item.v}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
