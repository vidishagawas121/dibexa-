import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2, Shield, Zap, Server } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { allServices } from '../data/services';
import Button from '../components/ui/Button';
import { siteImages } from '../data/images';

export default function Home() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Dibexa Infotech Pvt. Ltd. | Build. Automate. Scale.</title>
        <meta name="description" content="DiBexa is a technology startup building intelligent digital solutions that help businesses automate, scale, and create real impact." />
      </Helmet>

      {/* 01 — HERO (STATIC IMAGE WITH PRECISE IMAGE MAP) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full h-[400px] md:h-auto md:aspect-[1672/824] bg-[#f8f9fb] overflow-hidden"
      >
        {/* 
          Inner container locks aspect ratio on mobile to preserve invisible hitboxes.
          It scales to 400px height, pushing the right side (laptop) off-screen, 
          but perfectly framing the text and buttons on the left. 
        */}
        <div className="absolute top-0 left-[-15px] md:left-0 h-full aspect-[1672/824] md:w-full md:h-full md:static">
          <img 
            src="/images/dibexa-homepage-hero.png" 
            alt="Dibexa Homepage" 
            className="w-full h-full object-cover object-left md:object-center"
          />
          
          {/* Shimmer / Light Ray Sweep Animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-overlay z-0">
            <motion.div 
              animate={{ x: ['-200%', '300%'] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
              className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg]"
            />
          </div>

          {/* Precise Invisible Link Map */}
          <div className="absolute inset-0 z-10 w-full h-full">
            {/* Hero Buttons with Interactive Hover Feedback */}
            <Link to="/contact" className="absolute top-[71%] left-[5%] w-[18%] h-[8%] cursor-pointer group" title="Let's Build Together">
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-300 rounded-[4px]"></span>
            </Link>
            <Link to="/services" className="absolute top-[71%] left-[23.5%] w-[14%] h-[8%] cursor-pointer group" title="Our Solutions">
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-[4px]"></span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* 02 — POSITIONING / INTRODUCTION */}
      <section className="py-16 md:py-24 lg:py-32 bg-white border-b border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            <div className="lg:col-span-8">
              <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-balance text-[var(--color-text-primary)]"
              >
                Technology should not merely support business; it must <strong className="font-bold text-[var(--color-brand-navy)]">simplify complexity, accelerate execution, and engineer limitless scalability.</strong>
              </motion.h2>
            </div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="lg:col-span-4 border-l border-[var(--color-brand-blue)] pl-8 space-y-10"
            >
              <motion.div variants={fadeUpVariants}>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-2">Clients</h4>
                <p className="text-lg font-medium text-[var(--color-brand-navy)] italic" title="To be confirmed">[CLIENTS — TO BE CONFIRMED]</p>
              </motion.div>
              <motion.div variants={fadeUpVariants}>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-2">Project Experience</h4>
                <p className="text-lg font-medium text-[var(--color-brand-navy)] italic" title="To be confirmed">[PROJECT EXPERIENCE — TO BE CONFIRMED]</p>
              </motion.div>
              <motion.div variants={fadeUpVariants}>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-2">Certifications</h4>
                <p className="text-lg font-medium text-[var(--color-brand-navy)] italic" title="To be confirmed">[CERTIFICATIONS — TO BE CONFIRMED]</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — CORE CAPABILITIES / SERVICES PREVIEW */}
      <section className="py-16 md:py-24 lg:py-32 bg-[var(--color-surface-alt)] border-b border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-navy)] tracking-tight mb-4">
                Core Capabilities
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                We engineer specialized solutions across the full digital spectrum to solve specific business constraints.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[var(--color-brand-navy)] font-bold uppercase tracking-wide text-sm hover:text-[var(--color-brand-blue)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brand-blue)] pb-1">
              VIEW ALL SERVICES <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {allServices.slice(0, 4).map((service) => (
              <motion.div key={service.slug} variants={fadeUpVariants} className="h-full">
                <Link 
                  to={`/services/${service.slug}`} 
                  className="group p-8 bg-white border border-[var(--color-border-light)] hover:border-[var(--color-brand-blue)] transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-[var(--color-brand-navy)] pr-4 group-hover:text-[var(--color-brand-blue)] transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-[var(--color-surface-alt)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-blue)] group-hover:text-white transition-colors">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed flex-1">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 04 — METHODOLOGY / HOW WE WORK */}
      <section className="py-16 md:py-24 lg:py-32 bg-white border-b border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-navy)] tracking-tight mb-4">
              Methodical Execution.
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
              We reject guesswork. Our delivery framework is rooted in stringent engineering principles, ensuring complex initiatives move from conceptualization to production with precision.
            </p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-0 border-y border-l border-[var(--color-border-light)]"
          >
            {[
              { num: '01', title: 'Understand', desc: 'Deep business analysis, requirement mapping, and constraint identification.' },
              { num: '02', title: 'Architect', desc: 'Designing secure, scalable, and resilient technical foundations.' },
              { num: '03', title: 'Engineer', desc: 'Disciplined development driven by continuous integration and automated testing.' },
              { num: '04', title: 'Evolve', desc: 'Ongoing optimization, performance scaling, and lifecycle management.' }
            ].map((step, i) => (
              <motion.div variants={fadeUpVariants} key={i} className="p-8 border-r border-b md:border-b-0 border-[var(--color-border-light)] hover:bg-[var(--color-surface-alt)] transition-colors">
                <span className="text-[var(--color-brand-teal)] font-mono text-sm block mb-6 font-semibold">{step.num}</span>
                <h3 className="text-xl font-bold text-[var(--color-brand-navy)] mb-4">{step.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 05 — ENGINEERING PRINCIPLES */}
      <section className="py-16 md:py-24 lg:py-32 bg-[var(--color-brand-navy)] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <img 
            src={siteImages.patternBackground} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Engineering by Design.
            </h2>
            <p className="text-lg text-[var(--color-text-inverse-muted)] max-w-2xl">
              We do not build disposable software. Dibexa operates on foundational principles that ensure technology serves as a permanent leverage point for the enterprise.
            </p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {[
              { icon: <CheckCircle2 />, title: 'Business-First', desc: 'Technology choices are dictated by business objectives and operational ROI.' },
              { icon: <Shield />, title: 'Secure Foundation', desc: 'Vulnerability mitigation and data compliance engineered in from day one.' },
              { icon: <Zap />, title: 'Automation Mandate', desc: 'Maximizing human capital by automating repetitive execution across operations.' },
              { icon: <Server />, title: 'Built to Scale', desc: 'Modern topologies designed to remain performant under massive enterprise growth.' },
            ].map((principle, i) => (
              <motion.div variants={fadeUpVariants} key={i}>
                <div className="text-[var(--color-brand-teal)] mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                <p className="text-[var(--color-text-inverse-muted)] leading-relaxed text-sm">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 06 — INDUSTRIES PREVIEW */}
      <section className="py-16 md:py-24 bg-white border-b border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-navy)] tracking-tight mb-6">
            Industries We Empower
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12">
            We deliver domain-specific digital transformation across critical sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Logistics', 'Energy & Utilities', 'Telecommunications', 'PropTech'].map((ind) => (
              <span key={ind} className="px-6 py-3 border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] text-[var(--color-brand-navy)] font-semibold text-sm tracking-wide">
                {ind}
              </span>
            ))}
          </div>
          <Link to="/industries" className="inline-flex items-center gap-2 text-[var(--color-brand-navy)] font-bold uppercase tracking-wide text-sm hover:text-[var(--color-brand-blue)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brand-blue)] pb-1">
            EXPLORE ALL INDUSTRIES <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 07 — OUR PRODUCTS */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-alt)] border-b border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-navy)] tracking-tight mb-6">
                Our Products.
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                Explore our suite of AI-powered products designed for the modern enterprise. Details coming soon.
              </p>
              <Link to="/products" className="inline-flex items-center gap-2 text-[var(--color-brand-navy)] font-bold uppercase tracking-wide text-sm hover:text-[var(--color-brand-blue)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brand-blue)] pb-1">
                VIEW OUR PRODUCTS <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((prod) => (
                <div key={prod} className="bg-white border border-[var(--color-border-light)] p-8 text-center flex flex-col justify-center items-center opacity-50">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                  <span className="font-medium text-[var(--color-brand-navy)]">Product Name</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — FINAL CTA */}
      <section className="py-20 md:py-32 bg-[var(--color-brand-blue)] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img 
            src={siteImages.ctaBackground} 
            alt="" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            LET'S BUILD WHAT'S NEXT.
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-xl text-[var(--color-text-inverse-muted)] max-w-2xl mx-auto mb-10">
            Engage our engineering team to solve your most complex operational and technical challenges.
          </motion.p>
          <motion.div variants={fadeUpVariants}>
            <Button as={Link} to="/contact" size="lg" className="bg-white text-[var(--color-brand-navy)] hover:bg-gray-100 rounded-none font-bold tracking-wider px-10 h-14 uppercase text-[11px]">
              GET IN TOUCH &rarr;
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
