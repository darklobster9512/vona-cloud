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

const LogoItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex items-center gap-2.5 px-6 text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors shrink-0">
    <img src={icon} alt={name} className="w-8 h-8" />
    <span className="text-sm font-semibold tracking-tight whitespace-nowrap">{name}</span>
  </div>
);

const TrustBar = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-8 border-y border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className={`text-center text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-8 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          Modernste Tech-Stacks für maximale Performance und Sicherheit
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-marquee">
            {[...techStack, ...techStack, ...techStack].map((item, i) => (
              <LogoItem key={`${item.name}-${i}`} name={item.name} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
