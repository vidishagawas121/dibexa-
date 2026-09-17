import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import Button from '../components/ui/Button';
import Logo from '../components/ui/Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries' },
  { name: 'Our Products', path: '/products' },
  { name: 'Careers', path: '/careers' },
  { name: 'About', path: '/about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // Create a stable reference to the scroll handler so we can call it on route change
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Determine if scrolling up or down
    if (currentScrollY > lastScrollY.current) {
      setIsScrollingUp(false);
    } else if (currentScrollY < lastScrollY.current) {
      setIsScrollingUp(true);
    }
    
    setIsScrolled(currentScrollY > 20);
    lastScrollY.current = currentScrollY;

    // Dynamic color detection
    const headerElement = document.querySelector('header');
    if (headerElement) {
      const headerRect = headerElement.getBoundingClientRect();
      // Use a safe default for center Y in case rect is 0 (e.g. before paint)
      const headerCenterY = headerRect.height ? headerRect.top + headerRect.height / 2 : 40;
      
      // Match all known dark sections
      const darkSections = document.querySelectorAll(
        'section.bg-\\[var\\(--color-brand-navy\\)\\], section.bg-\\[var\\(--color-brand-blue\\)\\], footer, div.bg-\\[var\\(--color-brand-navy\\)\\], [data-theme="dark"]'
      );
      
      let isOver = false;
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if the header's center overlaps the section
        if (headerCenterY >= rect.top && headerCenterY <= rect.bottom) {
          isOver = true;
        }
      });
      
      setIsOverDarkSection(isOver);
    }
  };

  // Close mobile menu and recalculate header colors on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    
    // Ensure we reset scroll state smoothly
    setIsScrollingUp(false);
    
    // Wait for the new page's DOM to paint before measuring sections
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  useEffect(() => {
    // Run once on mount
    handleScroll();

    const handleMouseMove = (e: MouseEvent) => {
      setIsHoveringTop(e.clientY < 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const useWhiteTheme = isOverDarkSection && !mobileMenuOpen;

  const isHeaderVisible = !isScrolled || isHoveringTop || isScrollingUp || mobileMenuOpen;

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-500 py-4",
      isHeaderVisible ? "top-0 translate-y-0 opacity-100" : "top-0 -translate-y-full opacity-0 pointer-events-none",
      (isScrolled || mobileMenuOpen)
        ? (useWhiteTheme 
            ? "bg-[var(--color-brand-navy)]/95 backdrop-blur-md shadow-sm border-b border-white/10" 
            : "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border-light)]")
        : "bg-transparent border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo (Dynamically swaps to native white logo if on a dark page at the top) */}
          <div className="transition-all duration-300">
            <Logo cropForHeader={true} useWhiteLogo={useWhiteTheme} className="transition-opacity duration-300 hover:opacity-80" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300 outline-none focus:outline-none active:[text-shadow:0_0_15px_currentColor] active:scale-95',
                  (link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path)) 
                    ? (useWhiteTheme ? 'text-[var(--color-brand-teal)] [text-shadow:0_0_12px_var(--color-brand-teal)]' : 'text-[var(--color-brand-blue)] [text-shadow:0_0_8px_var(--color-brand-blue)]')
                    : (useWhiteTheme ? 'text-white hover:text-[var(--color-brand-teal)] hover:[text-shadow:0_0_12px_var(--color-brand-teal)]' : 'text-[var(--color-brand-navy)] hover:text-[var(--color-brand-blue)] hover:[text-shadow:0_0_8px_var(--color-brand-blue)]')
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              as={Link} 
              to="/contact" 
              className={cn(
                "h-11 px-8 text-[12px] font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-300 border bg-transparent outline-none focus:outline-none active:[text-shadow:0_0_15px_currentColor] active:scale-95",
                useWhiteTheme 
                  ? "border-white text-white hover:border-[var(--color-brand-teal)] hover:text-[var(--color-brand-teal)] hover:[text-shadow:0_0_12px_var(--color-brand-teal)]" 
                  : "border-[var(--color-brand-teal)] text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-teal)]/10 hover:[text-shadow:0_0_8px_var(--color-brand-navy)]"
              )}
            >
              GET IN TOUCH
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn("p-2 focus:outline-none transition-colors", useWhiteTheme ? "text-white" : "text-[var(--color-brand-navy)]")}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--color-surface)] border-b border-[var(--color-border-light)] shadow-xl">
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-lg font-bold tracking-[0.1em] uppercase text-[var(--color-brand-navy)] hover:text-[var(--color-brand-blue)] hover:[text-shadow:0_0_8px_var(--color-brand-blue)] transition-all duration-300 outline-none focus:outline-none active:[text-shadow:0_0_12px_currentColor] active:scale-95',
                  (link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path)) && 'text-[var(--color-brand-blue)] [text-shadow:0_0_8px_var(--color-brand-blue)]'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-[var(--color-border-light)]">
              <Button as={Link} to="/contact" className="w-full justify-center rounded-none border border-[var(--color-brand-teal)] text-[var(--color-brand-navy)] bg-transparent font-bold tracking-[0.2em] uppercase h-12">
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
