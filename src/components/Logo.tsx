import { cn } from '@/lib/utils';
import logoVoeller from '@/assets/voeller-logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  eager?: boolean;
}

const heights = {
  sm: 'h-8',
  md: 'h-11',
  lg: 'h-14',
};

/** Wortmarke "Völler IT" – schwarzes Logo, Seitenverhaeltnis fix (1024x512). */
const Logo = ({ className, size = 'lg', eager = false }: LogoProps) => (
  <img
    src={logoVoeller}
    alt="Völler IT"
    width={1024}
    height={512}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
    className={cn(heights[size], 'w-auto shrink-0 object-contain', className)}
  />
);

export default Logo;
