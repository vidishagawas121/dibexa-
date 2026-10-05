import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  variant?: 'dark' | 'light';
  cropForHeader?: boolean;
  useWhiteLogo?: boolean;
}

export default function Logo({ 
  className, 
  imageClassName,
  cropForHeader = false, 
  useWhiteLogo = false 
}: LogoProps) {
  // Cache buster ensures crisp, updated asset loads without stale browser cache
  const logoSrc = useWhiteLogo 
    ? "/logo-header-white.png?v=7" 
    : "/logo-header-light.png?v=7";

  return (
    <Link to="/" className={cn("inline-flex items-center shrink-0 bg-transparent", className)}>
      <img 
        src={logoSrc}
        alt="DIBEXA Infotech Private Limited" 
        draggable={false}
        className={cn(
          cropForHeader 
            ? "h-9 sm:h-10 md:h-11 w-auto max-w-none object-contain select-none transition-transform duration-200" 
            : "h-10 sm:h-11 md:h-12 w-auto max-w-none object-contain select-none transition-transform duration-200",
          imageClassName
        )}
      />
    </Link>
  );
}
