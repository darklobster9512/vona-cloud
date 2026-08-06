import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontakt" ref={ref} className="py-24 md:py-32 bg-gradient-blue relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-white/[0.05] blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-primary-foreground">
            Bereit für den nächsten Schritt?
          </h2>
        </div>
        <p className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} text-lg text-white/80 max-w-xl mx-auto mb-10`}>
          Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Prozesse
          optimieren und Ihr Unternehmen digitalisieren können.
        </p>
        <div className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''}`}>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-foreground font-semibold text-base hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Kontakt aufnehmen
            <ArrowRight size={18} />
          </Link>
        </div>
        <p className={`scroll-hidden delay-3 ${isVisible ? 'scroll-visible' : ''} mt-6 text-sm text-white/60`}>
          Keine Verpflichtung. Kein Risiko. Nur Ergebnisse.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
