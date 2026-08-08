import logoWordmark from '@/assets/logo-wordmark.png';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  eager?: boolean;
}

const heights = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-11',
};

const Logo = ({ className, size = 'lg', eager = false }: LogoProps) => (
  <img
    src={logoWordmark}
    alt="VONA Cloud"
    width={1536}
    height={512}
    loading={eager ? 'eager' : 'lazy'}
    fetchPriority={eager ? 'high' : undefined}
    className={cn(heights[size], 'w-auto object-contain', className)}
  />
);

export default Logo;
