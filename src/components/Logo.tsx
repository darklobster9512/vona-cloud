import logoWordmark from '@/assets/logo-wordmark.png';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  eager?: boolean;
}

const heights = {
  sm: 'h-5',
  md: 'h-6',
  lg: 'h-8',
};

const Logo = ({ className, size = 'lg', eager = false }: LogoProps) => (
  <img
    src={logoWordmark}
    alt="VONA Cloud"
    width={1330}
    height={157}
    loading={eager ? 'eager' : 'lazy'}
    fetchPriority={eager ? 'high' : undefined}
    className={cn(heights[size], 'w-auto object-contain', className)}
  />
);

export default Logo;
