
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  cropForHeader?: boolean;
  useWhiteLogo?: boolean;
}

export default function Logo({ className, cropForHeader = false, useWhiteLogo = false }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center", className)}>
      {cropForHeader ? (
        <img 
          src={useWhiteLogo ? "/logo-header-white.png" : "/logo-header.png"} 
          alt="Dibexa" 
          className="h-10 sm:h-12 w-auto object-contain transition-all duration-300"
        />
      ) : (
        <img 
          src={useWhiteLogo ? "/logo-header-white.png" : "/logo.png"} 
          alt="Dibexa Infotech Pvt. Ltd." 
          className="h-12 w-auto object-contain transition-all duration-300"
        />
      )}
    </Link>
  );
}
