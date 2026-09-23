
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
  return (
    <Link to="/" className={cn("flex items-center", className)}>
      {cropForHeader ? (
        <img 
          src={useWhiteLogo ? "/logo-header-white.png" : "/logo-header-light.png"}
          alt="Dibexa" 
          className={cn(
            "w-44 sm:w-52 md:w-60 h-auto max-h-14 sm:max-h-16 object-contain transition-all duration-300",
            !useWhiteLogo && "drop-shadow-[0_1px_2px_rgba(10,22,48,0.18)] contrast-[1.1]",
            imageClassName
          )}
        />
      ) : (
        <img 
          src={useWhiteLogo ? "/logo-header-white.png" : "/logo-header-light.png"}
          alt="Dibexa Infotech Pvt. Ltd." 
          className={cn(
            "w-56 sm:w-64 md:w-72 h-auto object-contain transition-all duration-300",
            imageClassName
          )}
        />
      )}
    </Link>
  );
}
