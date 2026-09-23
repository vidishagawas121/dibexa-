import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Zap, ShieldCheck, Activity, Database, Network } from 'lucide-react';
import { cn } from '../lib/utils';
import Button from '../components/ui/Button';
import Logo from '../components/ui/Logo';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [showThemePrompt, setShowThemePrompt] = useState(true);
  
  // Use a ref for scroll tracking to prevent constant re-renders and listener thrashing
  const lastScrollY = useRef(0);

  const location = useLocation();
  const { theme, initializeTheme, hasSelectedTheme } = useTheme();

  useEffect(() => {
    // Theme prompt shows initially and hides after 10 seconds (<15s)
    const timer = setTimeout(() => {
      setShowThemePrompt(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 15);

      if (currentScrollY > lastScrollY.current && currentScrollY > 80 && !isHovering && !activeMegaMenu) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current || currentScrollY <= 80) {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovering, activeMegaMenu]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  return (
    <>
      <div 
        className="fixed top-0 inset-x-0 h-10 z-[60]" 
        onMouseEnter={() => { setIsHovering(true); setIsVisible(true); }}
        onMouseLeave={() => setIsHovering(false)}
        aria-hidden="true"
      />

      <header 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => { setIsHovering(false); setActiveMegaMenu(null); }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 font-sans",
          isVisible ? "translate-y-0" : "-translate-y-full",
          (isScrolled || activeMegaMenu)
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-blue-900/5 py-2.5 dark:bg-[#05060A]/95 dark:border-[#0055FF]/30 dark:shadow-[0_4px_30px_rgba(0,85,255,0.15)]" 
            : "bg-white/50 backdrop-blur-md border-b border-white/40 py-3.5 dark:bg-[#010103]/50 dark:border-white/5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center min-h-14 sm:min-h-16">
            
            {/* Brand Logo */}
            <div className="flex items-center shrink-0">
              <Logo 
                cropForHeader={true} 
                useWhiteLogo={theme === 'dark'} 
                className="transition-transform duration-200 hover:scale-[1.02]" 
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link to="/" className={cn('px-3.5 py-2 rounded-md text-sm font-semibold transition-all duration-150', location.pathname === '/' ? 'text-slate-900 bg-white shadow-sm border border-slate-200/50 dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:border-[#00F0FF]/30 dark:font-mono dark:tracking-wider' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50 dark:text-slate-400 dark:hover:text-[#00F0FF] dark:font-mono dark:hover:bg-[#00F0FF]/5')}>Home</Link>
              
              {/* Mega Menu Trigger */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveMegaMenu('services')}
              >
                <Link to="/services" className={cn('px-3.5 py-2 rounded-md text-sm font-semibold transition-all duration-150 flex items-center gap-1', (location.pathname.startsWith('/services') || location.pathname.startsWith('/industries') || activeMegaMenu === 'services') ? 'text-blue-600 dark:text-[#00F0FF] dark:font-mono dark:bg-[#00F0FF]/10' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-[#00F0FF] dark:font-mono')}>
                  Services & Industries
                  <ChevronDown size={14} className={cn("transition-transform", activeMegaMenu === 'services' && "rotate-180")} />
                </Link>
              </div>

              <Link to="/products" className={cn('px-3.5 py-2 rounded-md text-sm font-semibold transition-all duration-150', location.pathname.startsWith('/products') ? 'text-slate-900 bg-white shadow-sm border border-slate-200/50 dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:border-[#00F0FF]/30 dark:font-mono dark:tracking-wider' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50 dark:text-slate-400 dark:hover:text-[#00F0FF] dark:font-mono dark:hover:bg-[#00F0FF]/5')}>Products</Link>
              <Link to="/about" className={cn('px-3.5 py-2 rounded-md text-sm font-semibold transition-all duration-150', location.pathname.startsWith('/about') ? 'text-slate-900 bg-white shadow-sm border border-slate-200/50 dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:border-[#00F0FF]/30 dark:font-mono dark:tracking-wider' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50 dark:text-slate-400 dark:hover:text-[#00F0FF] dark:font-mono dark:hover:bg-[#00F0FF]/5')}>About</Link>
              <Link to="/careers" className={cn('px-3.5 py-2 rounded-md text-sm font-semibold transition-all duration-150', location.pathname.startsWith('/careers') ? 'text-slate-900 bg-white shadow-sm border border-slate-200/50 dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:border-[#00F0FF]/30 dark:font-mono dark:tracking-wider' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50 dark:text-slate-400 dark:hover:text-[#00F0FF] dark:font-mono dark:hover:bg-[#00F0FF]/5')}>Careers</Link>
            </nav>

            {/* Right Action Callout */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative group flex items-center">
                {!hasSelectedTheme && showThemePrompt && (
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase rounded shadow-lg shadow-blue-500/30 animate-bounce pointer-events-none before:content-[''] before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-blue-600 dark:bg-[#00F0FF] dark:text-slate-900 dark:shadow-[#00F0FF]/30 dark:before:border-b-[#00F0FF]">
                    Experience {theme === 'light' ? 'Dark' : 'Light'} Mode
                  </div>
                )}
                <button
                  onClick={() => initializeTheme(theme === 'light' ? 'dark' : 'light')}
                  className={cn(
                    "p-2.5 rounded-full transition-all duration-300 shadow-sm z-10",
                    !hasSelectedTheme && "animate-pulse ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-50 dark:ring-[#00F0FF] dark:ring-offset-[#020205]",
                    "bg-white/50 text-slate-500 hover:bg-white hover:text-slate-900 dark:bg-[#05060A] dark:text-slate-400 dark:hover:bg-[#00F0FF]/10 dark:hover:text-[#00F0FF] border border-slate-200/50 dark:border-[#0055FF]/30"
                  )}
                  aria-label="Toggle Dark Mode"
                >
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={cn("transition-transform duration-500 ease-out", theme === 'dark' ? "rotate-180" : "rotate-0")}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2 A 10 10 0 0 0 12 22 Z" fill="currentColor" />
                </svg>
              </button>
              </div>

              <Button 
                as={Link} 
                to="/contact" 
                variant="primary"
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 text-xs font-bold uppercase tracking-wider hover:opacity-90 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_15px_rgba(0,85,255,0.4)] dark:font-mono animate-pulse hover:animate-none"
              >
                Start Transforming
                <ArrowRight size={13} className="ml-1.5" />
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <div className="relative flex items-center">
                {!hasSelectedTheme && showThemePrompt && (
                  <div className="absolute top-1/2 right-12 -translate-y-1/2 whitespace-nowrap px-2 py-1 bg-blue-600 text-white text-[9px] font-bold tracking-widest uppercase rounded shadow-lg animate-pulse pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-right-1 before:-translate-y-1/2 before:border-4 before:border-transparent before:border-l-blue-600 dark:bg-[#00F0FF] dark:text-slate-900 dark:before:border-l-[#00F0FF]">
                    Experience {theme === 'light' ? 'Dark' : 'Light'} Mode
                  </div>
                )}
                <button
                  onClick={() => initializeTheme(theme === 'light' ? 'dark' : 'light')}
                  className={cn(
                    "p-2.5 rounded-lg transition-colors z-10",
                    !hasSelectedTheme && "ring-2 ring-blue-500 ring-offset-1 dark:ring-[#00F0FF] dark:ring-offset-[#05060A]",
                    "bg-white/50 text-slate-500 hover:bg-white hover:text-slate-900 dark:bg-[#05060A] dark:text-slate-400 dark:hover:bg-[#00F0FF]/10 dark:hover:text-[#00F0FF] border border-slate-200/50 dark:border-[#0055FF]/30"
                  )}
                  aria-label="Toggle Dark Mode"
                >
                <svg 
                  width="22" 
                  height="22" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={cn("transition-transform duration-500 ease-out", theme === 'dark' ? "rotate-180" : "rotate-0")}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2 A 10 10 0 0 0 12 22 Z" fill="currentColor" />
                </svg>
              </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-white/50 text-slate-800 hover:bg-white/80 border border-slate-200/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-cyan)] dark:bg-[#05060A] dark:text-white dark:border-[#0055FF]/30 dark:focus:ring-[#00F0FF]"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMegaMenu === 'services' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 shadow-2xl dark:bg-[#020205]/95 dark:border-[#0055FF]/30 dark:shadow-[0_20px_50px_rgba(0,85,255,0.1)] overflow-hidden"
            >
              {/* Subtle background glows */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200/20 blur-[100px] rounded-full pointer-events-none dark:bg-[#00F0FF]/5" />
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
                <div className="grid grid-cols-12 gap-8">
                  
                  {/* Core Services Column */}
                  <div className="col-span-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 dark:text-[#0055FF] dark:font-mono">
                      Core AI Services
                    </div>
                    <div className="space-y-2">
                      {[
                        { title: 'Intelligent Automation', icon: Zap, link: '/services/ai-workflow-automation' },
                        { title: 'Predictive Analytics', icon: Activity, link: '/services/predictive-analytics' },
                        { title: 'Data Architecture', icon: Database, link: '/services/mlops' },
                        { title: 'Enterprise Integration', icon: Network, link: '/services/custom-ai-applications' },
                      ].map((item, i) => (
                        <Link key={i} to={item.link} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group dark:hover:bg-[#0055FF]/10">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 dark:bg-white/5 dark:group-hover:bg-[#00F0FF]/20">
                            <item.icon size={18} className="text-slate-500 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-[#00F0FF]" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white dark:font-mono">{item.title}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Industries Column */}
                  <div className="col-span-4 border-l border-slate-200/60 pl-8 dark:border-slate-800">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 dark:text-[#00F0FF] dark:font-mono">
                      Industries We Serve
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        { title: 'Healthcare', link: '/industries#healthcare' },
                        { title: 'Finance & Banking', link: '/industries#finance' },
                        { title: 'E-commerce & Retail', link: '/industries#ecommerce' },
                        { title: 'Supply Chain & Logistics', link: '/industries#logistics' },
                        { title: 'Manufacturing', link: '/industries#manufacturing' }
                      ].map((item, i) => (
                        <Link key={i} to={item.link} className="p-3 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors flex justify-between items-center group dark:text-slate-300 dark:hover:text-[#00F0FF] dark:hover:bg-[#00F0FF]/10 dark:font-mono">
                          {item.title}
                          <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-600 dark:text-[#00F0FF]" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Feature Column */}
                  <div className="col-span-4 pl-8 border-l border-slate-200/60 dark:border-slate-800">
                     <div className="h-full rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 flex flex-col justify-end relative overflow-hidden dark:from-[#0055FF] dark:to-[#020205] dark:border dark:border-[#00F0FF]/30">
                       <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 blur-3xl rounded-full" />
                       <ShieldCheck size={32} className="text-white mb-6 dark:text-[#00F0FF]" />
                       <h4 className="text-2xl font-bold text-white mb-2 font-mono">Enterprise Security Standard</h4>
                       <p className="text-white/80 text-sm mb-6">Our models are SOC2 compliant, ensuring your proprietary data never leaks into the public domain.</p>
                       <Button as={Link} to="/contact" className="bg-white text-blue-600 hover:bg-slate-50 font-bold border-0 self-start dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:hover:bg-[#00F0FF]/20">
                         View Compliance
                       </Button>
                     </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl px-6 py-6 space-y-3 dark:bg-[#010103] dark:border-[#0055FF]/30">
            <div className="flex flex-col space-y-1.5">
              <Link to="/" className="px-4 py-3 rounded-lg text-base font-semibold bg-slate-50 text-slate-900 border border-slate-100 dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:border-[#00F0FF]/30 dark:font-mono">Home</Link>
              <Link to="/services" className="px-4 py-3 rounded-lg text-base font-semibold text-slate-600 dark:text-slate-400 dark:font-mono">Services</Link>
              <Link to="/industries" className="px-4 py-3 rounded-lg text-base font-semibold text-slate-600 dark:text-slate-400 dark:font-mono">Industries</Link>
              <Link to="/products" className="px-4 py-3 rounded-lg text-base font-semibold text-slate-600 dark:text-slate-400 dark:font-mono">Products</Link>
              <Link to="/about" className="px-4 py-3 rounded-lg text-base font-semibold text-slate-600 dark:text-slate-400 dark:font-mono">About</Link>
              <Link to="/careers" className="px-4 py-3 rounded-lg text-base font-semibold text-slate-600 dark:text-slate-400 dark:font-mono">Careers</Link>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-[#0055FF]/20">
              <Button as={Link} to="/contact" variant="primary" className="w-full justify-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 font-bold dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_15px_rgba(0,85,255,0.4)] dark:font-mono tracking-widest">
                Start Transforming <ArrowRight size={15} className="ml-2" />
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
