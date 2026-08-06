import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SoftwareShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="software" ref={ref} className="py-24 md:py-32 overflow-hidden bg-gradient-blue-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} text-sm font-semibold text-primary uppercase tracking-widest mb-3`}>
              Software
            </p>
            <h2 className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} text-3xl md:text-5xl font-extrabold tracking-tight mb-6`}>
              Maßgeschneiderte{' '}
              <span className="text-gradient-blue">Software-Lösungen</span>
            </h2>
            <p className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''} text-muted-foreground text-lg leading-relaxed mb-8`}>
              Wir entwickeln individuelle Plattformen und Tools, die Ihre internen
              Prozesse automatisieren und Daten in Echtzeit visualisieren — 
              skalierbar, sicher und mit erstklassiger UX.
            </p>
            <ul className={`scroll-hidden delay-3 ${isVisible ? 'scroll-visible' : ''} space-y-4 mb-8`}>
              {['Dashboards & Analytics', 'Workflow-Automatisierung', 'API-Integrationen', 'Cloud-native Architektur'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/kontakt"
              className={`scroll-hidden delay-4 ${isVisible ? 'scroll-visible' : ''} group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline`}
            >
              Projekt besprechen
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mockup */}
          <div className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''} relative`}>
            {/* Glow behind */}
            <div className="absolute -inset-8 -z-10 bg-primary/[0.06] blur-[50px] rounded-3xl" />
            
            <div className="rounded-2xl border border-border/60 bg-white shadow-2xl shadow-primary/[0.08] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0_84%_60%/0.5)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[hsl(45_93%_47%/0.5)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[hsl(142_71%_45%/0.5)]" />
                </div>
              </div>
              <div className="p-5 space-y-4">
                {/* Progress bars */}
                <div className="space-y-3">
                  {[
                    { label: 'Onboarding', pct: 94, status: 'Optimiert' },
                    { label: 'Beschaffung', pct: 67, status: 'In Arbeit' },
                    { label: 'Reporting', pct: 89, status: 'Optimiert' },
                    { label: 'Freigaben', pct: 43, status: 'Analyse' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-4 p-3 rounded-xl border border-border/30">
                      <span className="text-xs font-medium w-24 shrink-0">{row.label}</span>
                      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-blue transition-all duration-1000"
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-primary w-10 text-right">{row.pct}%</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                        row.status === 'Optimiert'
                          ? 'bg-[hsl(142_71%_45%/0.1)] text-[hsl(142_71%_35%)]'
                          : row.status === 'In Arbeit'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-[hsl(45_93%_47%/0.1)] text-[hsl(45_93%_37%)]'
                      }`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareShowcase;
