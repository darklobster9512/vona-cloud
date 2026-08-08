import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import reactIcon from '@/assets/tech/react.svg';
import nodejsIcon from '@/assets/tech/nodejs.svg';
import pythonIcon from '@/assets/tech/python.svg';
import postgresqlIcon from '@/assets/tech/postgresql.svg';
import phpIcon from '@/assets/tech/php.svg';
import html5Icon from '@/assets/tech/html5.svg';
import css3Icon from '@/assets/tech/css3.svg';
import nextjsIcon from '@/assets/tech/nextjs.svg';
import csharpIcon from '@/assets/tech/csharp.svg';

const techStack = [
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'PostgreSQL', icon: postgresqlIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'Next.js', icon: nextjsIcon },
  { name: 'C# / .NET', icon: csharpIcon },
];

const capabilities = [
  'Kubernetes',
  'Terraform',
  'CI/CD',
  'Observability',
  'Zero-Downtime-Deploys',
  'Autoscaling',
  'Backups & Recovery',
  'DSGVO & EU-Hosting',
  'Cost Optimization',
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-border/60 bg-muted/30 py-10">
      <div className="absolute inset-0 bg-dotgrid opacity-40 pointer-events-none" />

      <div className={`relative mb-7 flex items-center justify-center gap-3 px-6 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
        <span className="h-px w-8 bg-border" />
        <span className="mono-label-muted text-center">Stack &amp; Plattform</span>
        <span className="h-px w-8 bg-border" />
      </div>

      <div className="relative space-y-4">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-muted/95 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-muted/95 to-transparent" />

        {/* Row 1 — tech icons */}
        <div className="flex animate-marquee">
          {[...techStack, ...techStack, ...techStack].map((item, i) => (
            <div
              key={`t-${item.name}-${i}`}
              className="mx-2 flex shrink-0 items-center gap-2.5 rounded-full border border-border/70 bg-white px-5 py-2.5"
            >
              <img src={item.icon} alt={item.name} className="h-6 w-6" />
              <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground/80">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 — capabilities, reverse direction */}
        <div className="flex animate-marquee-reverse">
          {[...capabilities, ...capabilities, ...capabilities].map((item, i) => (
            <span
              key={`c-${item}-${i}`}
              className="mx-2 shrink-0 whitespace-nowrap rounded-full bg-primary/[0.07] px-5 py-2 font-mono text-xs uppercase tracking-[0.16em] text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
