import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumb: { label: string; href?: string }[];
}

const PageHero = ({ title, highlight, subtitle, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 bg-blueprint mask-fade-b pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-[10%] h-[420px] w-[420px] rounded-full bg-primary/[0.09] blur-[100px] animate-orb" />
        <div className="absolute top-[10%] right-[6%] h-[360px] w-[360px] rounded-full bg-[hsl(199_89%_48%/0.07)] blur-[100px] animate-orb-delayed" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em]">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-muted-foreground/50" />}
              {item.href ? (
                <Link to={item.href} className="text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h1 className="hero-animate hero-animate-1 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {title}{' '}
            {highlight && <span className="text-gradient-blue">{highlight}</span>}
          </h1>
          <div className="hero-animate hero-animate-2 lg:border-l lg:border-border/70 lg:pl-8">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
          </div>
        </div>

        <div className="hero-animate hero-animate-3 mt-12 flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="mono-label-muted">VONA Cloud Solutions</span>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
