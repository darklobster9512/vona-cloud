import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

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
        highlight="Efficient Flow"
        subtitle="Werde Teil unseres Teams und gestalte die digitale Zukunft von Unternehmen. Wir suchen Talente, die mit uns wachsen wollen."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Karriere' },
        ]}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5">
            {stellen.map((stelle, i) => (
              <Link
                key={stelle.slug}
                to={`/karriere/${stelle.slug}`}
                className={`scroll-hidden delay-${i + 1} group block rounded-2xl border border-border/60 bg-card p-6 md:p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {stelle.titel}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {stelle.standort}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                        {stelle.modell}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                      {stelle.kurzbeschreibung}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                      Details ansehen
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Karriere;
