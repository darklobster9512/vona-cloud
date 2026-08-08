import logoWordmark from '@/assets/logo-wordmark.png.asset.json';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  eager?: boolean;
}

const heights = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-16',
};

const Logo = ({ className, size = 'lg', eager = false }: LogoProps) => (
  <img
    src={logoWordmark.url}
    alt="VONA Cloud"
    width={1152}
    height={576}
    loading={eager ? 'eager' : 'lazy'}
    fetchPriority={eager ? 'high' : undefined}
    className={cn(heights[size], 'w-auto object-contain', className)}
  />
);

export default Logo;
