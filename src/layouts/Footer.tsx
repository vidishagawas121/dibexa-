import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import { allServices } from '../data/services';
import { companyConfig } from '../data/company';
import { IconFacebook, IconLinkedIn, IconInstagram, IconYouTube, IconWhatsApp } from '../components/ui/SocialIcons';
import { siteImages } from '../data/images';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-brand-navy)] text-white pt-16 md:pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Footer Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <img 
          src={siteImages.footerPattern} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 md:mb-20">
          
          <div className="lg:col-span-4 space-y-6">
            <Logo className="mb-6" useWhiteLogo={true} />
            <p className="text-[var(--color-text-inverse-muted)] text-sm leading-relaxed max-w-sm">
              {companyConfig.description || "Dibexa Infotech Pvt. Ltd. is a technology and digital solutions company that helps organizations build modern digital systems, automate operations, and scale efficiently."}
            </p>
            <p className="text-white font-semibold text-sm tracking-widest uppercase">
              Build. Automate. Scale.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 tracking-wide">Company</h3>
            <ul className="space-y-4">
              {['About', 'Careers', 'Services', 'Industries', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-[var(--color-text-inverse-muted)] hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6 tracking-wide">Featured Services</h3>
            <ul className="space-y-4">
              {[
                "AI MVP Development",
                "Generative AI Integration",
                "AI Workflow Automation",
                "Intelligent Conversational Agents",
                "AI Transformation Consulting"
              ].map((serviceTitle) => {
                const srv = allServices.find(s => s.title === serviceTitle) || { slug: '' };
                return (
                  <li key={serviceTitle}>
                    <Link 
                      to={`/services/${srv.slug}`}
                      className="text-[var(--color-text-inverse-muted)] hover:text-white transition-colors text-sm font-medium"
                    >
                      {serviceTitle}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link to="/services" className="text-[var(--color-brand-teal)] hover:text-white transition-colors text-sm font-bold uppercase tracking-wider flex items-center gap-1">
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-blue)] mb-6">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a href={`mailto:${companyConfig.email}`} className="text-[var(--color-text-inverse-muted)] hover:text-white transition-colors text-sm">
                    {companyConfig.email}
                  </a>
                </li>
                <li>
                  {companyConfig.phone ? (
                    <a href={`tel:${companyConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-[var(--color-text-inverse-muted)] hover:text-white transition-colors text-sm">
                      {companyConfig.phone}
                    </a>
                  ) : (
                    <span className="text-[var(--color-text-inverse-muted)]/50 text-sm italic" title="To be confirmed">
                      [Phone — To be confirmed]
                    </span>
                  )}
                </li>
                <li className="text-[var(--color-text-inverse-muted)] text-sm pt-2">
                  {companyConfig.headquarters}
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-blue)] mb-4">Follow Dibexa</h3>
              <div className="flex items-center space-x-4">
                {/* Facebook */}
                <a 
                  href={companyConfig.socialLinks.facebook || '#'} 
                  onClick={(e) => !companyConfig.socialLinks.facebook && e.preventDefault()}
                  className={`text-[var(--color-text-inverse-muted)] transition-colors ${companyConfig.socialLinks.facebook ? 'hover:text-white' : 'opacity-50 cursor-default'}`}
                  aria-label="Facebook"
                  title={companyConfig.socialLinks.facebook ? 'Facebook' : 'Facebook - To be provided'}
                >
                  <IconFacebook className="w-5 h-5" />
                </a>
                
                {/* LinkedIn */}
                <a 
                  href={companyConfig.socialLinks.linkedin || '#'} 
                  onClick={(e) => !companyConfig.socialLinks.linkedin && e.preventDefault()}
                  className={`text-[var(--color-text-inverse-muted)] transition-colors ${companyConfig.socialLinks.linkedin ? 'hover:text-white' : 'opacity-50 cursor-default'}`}
                  aria-label="LinkedIn"
                  title={companyConfig.socialLinks.linkedin ? 'LinkedIn' : 'LinkedIn - To be provided'}
                >
                  <IconLinkedIn className="w-5 h-5" />
                </a>
                
                {/* Instagram */}
                <a 
                  href={companyConfig.socialLinks.instagram || '#'} 
                  onClick={(e) => !companyConfig.socialLinks.instagram && e.preventDefault()}
                  className={`text-[var(--color-text-inverse-muted)] transition-colors ${companyConfig.socialLinks.instagram ? 'hover:text-white' : 'opacity-50 cursor-default'}`}
                  aria-label="Instagram"
                  title={companyConfig.socialLinks.instagram ? 'Instagram' : 'Instagram - To be provided'}
                >
                  <IconInstagram className="w-5 h-5" />
                </a>
                
                {/* YouTube */}
                <a 
                  href={companyConfig.socialLinks.youtube || '#'} 
                  onClick={(e) => !companyConfig.socialLinks.youtube && e.preventDefault()}
                  className={`text-[var(--color-text-inverse-muted)] transition-colors ${companyConfig.socialLinks.youtube ? 'hover:text-white' : 'opacity-50 cursor-default'}`}
                  aria-label="YouTube"
                  title={companyConfig.socialLinks.youtube ? 'YouTube' : 'YouTube - To be provided'}
                >
                  <IconYouTube className="w-5 h-5" />
                </a>
                
                {/* WhatsApp */}
                <a 
                  href={companyConfig.socialLinks.whatsapp || '#'} 
                  onClick={(e) => !companyConfig.socialLinks.whatsapp && e.preventDefault()}
                  className={`text-[var(--color-text-inverse-muted)] transition-colors ${companyConfig.socialLinks.whatsapp ? 'hover:text-white' : 'opacity-50 cursor-default'}`}
                  aria-label="WhatsApp"
                  title={companyConfig.socialLinks.whatsapp ? 'WhatsApp' : 'WhatsApp - To be provided'}
                >
                  <IconWhatsApp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border-dark)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text-inverse-muted)]">
            © {currentYear} Dibexa Infotech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm">
            <Link to="/privacy-policy" className="text-[var(--color-text-inverse-muted)] hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-[var(--color-text-inverse-muted)] hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
