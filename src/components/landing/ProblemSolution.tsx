import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const painPoints = [
  'Server im Keller?', 'Deploys per Hand?', 'Nachts Ausfälle?',
  'Cloud-Kosten explodiert?', 'Kein Monitoring?', 'Releases dauern Wochen?',
  'Keine Backups getestet?', 'Vendor Lock-in?', 'Legacy-Monolith?',
  'Skaliert nicht?', 'Kein DSGVO-Nachweis?', 'Niemand kennt das System?',
];


const ProblemSolution = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Der Ausgangspunkt</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Ihre Infrastruktur <span className="text-gradient-blue">darf kein Risiko</span> sein.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Wenn Ihnen davon etwas bekannt vorkommt: genau hier setzen wir an.
          </p>

        </div>

        {/* Pain point tags */}
        <div className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''} flex flex-wrap justify-center gap-3`}>
          {painPoints.map((point, i) => (
            <span
              key={point}
              className="px-5 py-2.5 rounded-full border border-destructive/15 bg-destructive/[0.04] text-sm font-medium text-foreground/70 hover:border-destructive/30 hover:bg-destructive/[0.08] transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
