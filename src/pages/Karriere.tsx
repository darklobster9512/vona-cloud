import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import { stellen } from '@/data/karriereStellen';

const Karriere = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('scroll-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        title="Karriere bei"
        highlight="VONA"
        subtitle="Arbeite an Software, die täglich im Einsatz ist — in Wiesbaden oder remote."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Karriere' },
        ]}
      />

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-fine opacity-[0.5] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Info line */}
          <div className="scroll-hidden flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-border">
            <div>
              <span className="mono-label text-primary">Offene Positionen</span>
              <p className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
                {String(stellen.length).padStart(2, '0')} Stellen ausgeschrieben
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Nichts Passendes?{' '}
              <a
                href="mailto:kontakt@vona-cloud.com"
                className="font-medium text-primary hover:underline underline-offset-4"
              >
                Initiativbewerbung senden
              </a>
            </p>
          </div>

          {/* Job rows */}
          <div className="divide-y divide-border">
            {stellen.map((stelle, i) => (
              <Link
                key={stelle.slug}
                to={`/karriere/${stelle.slug}`}
                className={`scroll-hidden delay-${i + 1} group relative block py-8 pl-6 pr-2 md:pl-10 transition-colors duration-300 hover:bg-card/70`}
              >
                {/* accent edge */}
                <span className="absolute left-0 top-6 bottom-6 w-[2px] bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                  <span className="mono-label-muted text-xs shrink-0 md:w-10 group-hover:text-primary transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {stelle.titel}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {stelle.kurzbeschreibung}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {[stelle.standort, stelle.modell, stelle.arbeitszeit, stelle.stundenlohn && `${stelle.stundenlohn} / Std.`]
                        .filter(Boolean)
                        .map((meta) => (
                          <span
                            key={meta as string}
                            className="mono-label-muted text-[10px] px-2.5 py-1 border border-border rounded-md bg-background/60"
                          >
                            {meta}
                          </span>
                        ))}
                    </div>
                  </div>

                  <span className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-primary md:opacity-60 group-hover:opacity-100 group-hover:gap-3 transition-all">
                    Details
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Ink CTA band */}
          <div className="scroll-hidden delay-3 relative mt-16 rounded-2xl bg-ink overflow-hidden">
            <div className="absolute inset-0 bg-blueprint-light opacity-40 pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 md:p-10">
              <div>
                <span className="mono-label text-primary">Initiativbewerbung</span>
                <h3 className="mt-2 text-xl md:text-2xl font-extrabold tracking-tight text-white">
                  Keine passende Stelle gefunden?
                </h3>
                <p className="mt-2 text-sm text-white/60 max-w-md">
                  Schreib uns, woran du arbeiten willst. Wir schauen uns jede Bewerbung an.
                </p>
              </div>
              <a
                href="mailto:kontakt@vona-cloud.com"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold text-sm hover:scale-[1.02] transition-transform duration-200"
              >
                kontakt@vona-cloud.com
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Karriere;
