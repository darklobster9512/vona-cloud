import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { word: 'text-xl', tag: 'text-[9px] tracking-[0.3em]' },
  md: { word: 'text-2xl sm:text-3xl', tag: 'text-[10px] tracking-[0.32em]' },
  lg: { word: 'text-3xl sm:text-[2rem]', tag: 'text-[11px] tracking-[0.34em]' },
};

const Logo = ({ className, size = 'lg' }: LogoProps) => {
  const s = sizes[size];
  return (
    <span
      className={cn('inline-flex items-baseline gap-2 select-none leading-none', className)}
      aria-label="VONA Cloud"
    >
      <span className={cn('font-extrabold tracking-tight text-foreground', s.word)}>
        VONA
      </span>
      <span className={cn('font-mono font-medium uppercase text-gradient-blue', s.tag)}>
        Cloud
      </span>
    </span>
  );
};

export default Logo;
