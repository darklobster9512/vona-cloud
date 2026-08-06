import { useScrollAnimation, useCounterAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { value: 150, suffix: '+', label: 'Abgeschlossene Projekte' },
  { value: 80, suffix: '+', label: 'Zufriedene Kunden' },
  { value: 47, suffix: '%', label: 'Ø Effizienzsteigerung' },
  { value: 5, suffix: '+', label: 'Jahre Erfahrung' },
];

const StatItem = ({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) => {
  const count = useCounterAnimation(value, 2000, isVisible);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-extrabold text-primary-foreground tabular-nums mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm font-medium text-white/70">{label}</p>
    </div>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-blue relative overflow-hidden">
      {/* Subtle orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-white/[0.05] blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
