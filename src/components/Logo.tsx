import { cn } from '@/lib/utils';
import logoVona from '@/assets/vonalogo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  eager?: boolean;
}

const heights = {
  sm: 'h-6',
  md: 'h-8',
  lg: 'h-10',
};

/** Wortmarke "VONA" – Original-PNG, Seitenverhaeltnis fix (367x131). */
const Logo = ({ className, size = 'lg', eager = false }: LogoProps) => (
  <img
    src={logoVona}
    alt="VONA Cloud"
    width={367}
    height={131}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
    className={cn(heights[size], 'w-auto shrink-0 object-contain', className)}
  />
);

export default Logo;
