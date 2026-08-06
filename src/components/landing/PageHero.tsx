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
    <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden hero-gradient">
      {/* Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[100px] animate-orb" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[hsl(199_89%_48%/0.06)] blur-[100px] animate-orb-delayed" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-1.5 mb-8 text-sm">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} className="text-muted-foreground/50" />}
              {item.href ? (
                <Link to={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="hero-animate hero-animate-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          {title}{' '}
          {highlight && <span className="text-gradient-blue">{highlight}</span>}
        </h1>
        <p className="hero-animate hero-animate-2 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PageHero;
