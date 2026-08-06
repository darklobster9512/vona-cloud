import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const painPoints = [
  'Legacy-Systeme?', 'Excel-Chaos?', 'Manuelle Prozesse?',
  'Datensilos?', 'Keine Transparenz?', 'Verpasste Deadlines?',
  'Hohe Fehlerquoten?', 'Langsame Freigaben?', 'Zu viele Tools?',
  'Verlorenes Wissen?', 'Kein Überblick?', 'Skalierungsprobleme?',
];

const ProblemSolution = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Das Problem</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Das sollte <span className="text-gradient-blue">2026 nicht mehr</span> passieren.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Wenn Ihnen davon etwas bekannt vorkommt, sind Sie nicht allein — aber es gibt eine Lösung.
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
