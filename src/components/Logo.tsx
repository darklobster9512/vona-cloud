import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  eager?: boolean;
}

const heights = {
  sm: 'h-6',
  md: 'h-7',
  lg: 'h-8',
};

/**
 * Wortmarke "VONA CLOUD" als Vektor.
 * VONA fett in Primaerblau, CLOUD leicht in Foreground-Navy.
 * Feste viewBox + textLength => kein Verzerren, pixelscharf in jeder Groesse.
 */
const Logo = ({ className, size = 'lg' }: LogoProps) => (
  <svg
    viewBox="0 0 468 96"
    role="img"
    aria-label="VONA Cloud"
    className={cn(heights[size], 'w-auto shrink-0 overflow-visible', className)}
  >
    <title>VONA Cloud</title>
    <text
      x="0"
      y="74"
      textLength="196"
      lengthAdjust="spacing"
      fontSize="76"
      fontWeight="800"
      fill="hsl(var(--primary))"
      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
    >
      VONA
    </text>
    <text
      x="218"
      y="74"
      textLength="250"
      lengthAdjust="spacing"
      fontSize="76"
      fontWeight="300"
      fill="hsl(var(--foreground))"
      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
    >
      CLOUD
    </text>
  </svg>
);

export default Logo;
