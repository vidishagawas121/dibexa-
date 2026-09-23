import { Link } from 'react-router-dom';

import Logo from '../components/ui/Logo';
import { useTheme } from '../contexts/ThemeContext';
import { companyConfig } from '../data/company';
import { IconFacebook, IconInstagram, IconLinkedIn, IconWhatsApp, IconYouTube } from '../components/ui/SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="bg-slate-50 text-slate-900 pt-10 pb-8 relative overflow-hidden border-t border-slate-200/60 dark:bg-[#020204] dark:text-white dark:border-[#0055FF]/20">
      
      {/* Background Glows for Dark Mode */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none dark:bg-[#0055FF]/5" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-400/5 blur-[100px] rounded-full pointer-events-none dark:bg-[#00F0FF]/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid - Standard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & Socials */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <Logo 
              className="mb-1" 
              useWhiteLogo={theme === 'dark'}
              cropForHeader={true}
              imageClassName="max-w-[160px] sm:max-w-[180px]"
            />
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm dark:text-slate-400 dark:font-mono">
              {companyConfig.description || "Enterprise-grade AI solutions for complex business challenges. We build intelligent systems that move the needle."}
            </p>
            
            <div className="flex space-x-4 pt-2">
              <a href={companyConfig.socialLinks.facebook || '#'} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-blue-500 dark:hover:text-white">
                <IconFacebook className="w-4 h-4" />
              </a>
              <a href={companyConfig.socialLinks.instagram || '#'} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-pink-600 hover:text-white transition-all dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-pink-500 dark:hover:text-white">
                <IconInstagram className="w-4 h-4" />
              </a>
              <a href={companyConfig.socialLinks.linkedin || '#'} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-700 hover:text-white transition-all dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-[#00F0FF] dark:hover:text-slate-900">
                <IconLinkedIn className="w-4 h-4" />
              </a>
              <a href={companyConfig.socialLinks.youtube || '#'} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-red-600 hover:text-white transition-all dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-red-500 dark:hover:text-white">
                <IconYouTube className="w-4 h-4" />
              </a>
              <a href={companyConfig.socialLinks.whatsapp || '#'} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-emerald-600 hover:text-white transition-all dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-emerald-500 dark:hover:text-white">
                <IconWhatsApp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Services */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-500 dark:font-mono">Services</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Predictive Analytics', path: '/services' },
                  { name: 'Data Automation', path: '/services' },
                  { name: 'NLP & Chatbots', path: '/services' },
                  { name: 'Custom AI Models', path: '/services' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-[#00F0FF] dark:font-mono">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-500 dark:font-mono">Company</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Products', path: '/products' },
                  { name: 'Contact Sales', path: '/contact' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-[#00F0FF] dark:font-mono">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-500 dark:font-mono">Legal</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Privacy Policy', path: '/privacy-policy' },
                  { name: 'Terms of Service', path: '/terms-conditions' },
                  { name: 'DPDP Act', path: '/privacy-policy' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-[#00F0FF] dark:font-mono">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 dark:border-[#0055FF]/20">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500 dark:text-slate-500 dark:font-mono text-center sm:text-left">
            <span>© {currentYear} {companyConfig.companyName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            {/* System Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                System Status: All Systems Operational
              </span>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
