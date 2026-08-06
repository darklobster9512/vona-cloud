import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Assessment',
    description: 'Wir nehmen Anwendung, Infrastruktur und Kosten auf und benennen Risiken sowie Quick Wins.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Architektur',
    description: 'Zielbild, Technologiewahl und Migrationspfad — dokumentiert, nachvollziehbar, ohne Lock-in.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Build & Betrieb',
    description: 'Umsetzung in Sprints, automatisiertes Deployment und anschließend überwachter Dauerbetrieb.',
  },
];


const Methodology = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="methodik" ref={ref} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Methodik</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Drei Phasen. <span className="text-gradient-blue">Ein System, das läuft.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            So gehen wir jedes Cloud-Projekt an — nachvollziehbar von Tag eins.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-border/60" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} relative text-center`}
              >
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg shadow-primary/10 relative z-10">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gradient-blue text-primary-foreground text-xs font-bold flex items-center justify-center z-20">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
