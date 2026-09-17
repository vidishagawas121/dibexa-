import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Network, Shield } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion';
import { servicesData } from '../data/services';
import { siteImages } from '../data/images';

export default function Services() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const targetX = clientX - window.innerWidth / 2;
      const targetY = clientY - window.innerHeight / 2;
      mouseX.set(targetX);
      mouseY.set(targetY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const x1 = useTransform(smoothMouseX, [-500, 500], [-30, 30]);
  const y1 = useTransform(smoothMouseY, [-500, 500], [-30, 30]);
  const x2 = useTransform(smoothMouseX, [-500, 500], [40, -40]);
  const y2 = useTransform(smoothMouseY, [-500, 500], [40, -40]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <>
      <Helmet>
        <title>Technology Services | Dibexa Infotech Pvt. Ltd.</title>
        <meta name="description" content="Explore our enterprise capabilities across digital engineering, enterprise solutions, AI, automation, cloud and security." />
      </Helmet>

      {/* Complex Animated Cover Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]" data-theme="dark">
        
        {/* Deep Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand-navy)] via-[#020617] to-[#020617] opacity-60"></div>
        
        {/* Interactive Spotlight */}
        <motion.div 
          className="absolute top-0 left-0 pointer-events-none opacity-50 mix-blend-screen rounded-full blur-[120px] w-[800px] h-[800px] bg-blue-600/20"
          style={{
            x: useTransform(smoothMouseX, x => x - 400 + (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)),
            y: useTransform(smoothMouseY, y => y - 400 + (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)),
          }}
        />

        {/* Floating Geometric Elements (Parallax) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Element 1: Glassmorphism Card */}
          <motion.div 
            style={{ x: x1, y: y1 }}
            className="absolute top-[20%] right-[15%] w-64 h-64 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl hidden md:flex"
          >
             <Cpu className="w-24 h-24 text-[var(--color-brand-blue)] opacity-30" />
          </motion.div>
          
          {/* Element 2: Wireframe Sphere */}
          <motion.div 
            style={{ x: x2, y: y2 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] left-[5%] w-[500px] h-[500px] border border-[var(--color-brand-teal)]/10 rounded-full border-dashed hidden lg:block"
          />
        </div>

        {/* Infinite Marquee Background Text */}
        <div className="absolute top-[35%] left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.02] select-none pointer-events-none hidden md:block">
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="text-[15rem] lg:text-[18rem] font-black text-white leading-none tracking-tighter"
          >
            ENGINEERING AUTOMATION INTELLIGENCE CLOUD ENGINEERING AUTOMATION INTELLIGENCE CLOUD
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-teal)] animate-pulse shadow-[0_0_10px_var(--color-brand-teal)]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-brand-teal)] uppercase">Enterprise AI Solutions</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tight text-white leading-[1.05]">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-teal)] via-[#60a5fa] to-white">
                AI-Driven Futures
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#94a3b8] font-light max-w-2xl leading-relaxed mb-12">
              We architect intelligent, self-optimizing ecosystems powered by advanced Artificial Intelligence and scalable automation to give your enterprise unprecedented operational supremacy.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-6 text-xs font-mono text-[#475569] uppercase tracking-[0.15em]">
                <span className="flex items-center gap-2"><Cpu className="w-4 h-4 text-[var(--color-brand-teal)]" /> AI Integration</span>
                <span className="flex items-center gap-2"><Network className="w-4 h-4 text-[#60a5fa]" /> Machine Learning</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-white" /> Secure Data</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-20 md:space-y-32">
            {servicesData.map((category) => (
              <div key={category.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
                
                {/* Category Header */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-navy)] mb-6 tracking-tight">
                      {category.title}
                    </h2>
                    
                    {/* Category Image */}
                    <div className="mb-6 w-full border border-[var(--color-border-light)] overflow-hidden">
                      {category.id === 'digital-engineering' && <img src={siteImages.mobileWeb} alt={category.title} className="w-full h-auto" />}
                      {category.id === 'enterprise-solutions' && <img src={siteImages.enterpriseSolutions} alt={category.title} className="w-full h-auto" />}
                      {category.id === 'ai-automation' && <img src={siteImages.aiAutomation} alt={category.title} className="w-full h-auto" />}
                      {category.id === 'data-cloud-security' && <img src={siteImages.dataAnalytics} alt={category.title} className="w-full h-auto" />}
                    </div>

                    <div className="h-px w-full bg-[var(--color-brand-navy)] opacity-20 mb-6"></div>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-medium">
                      {category.id === 'digital-engineering' && "Architecting secure, high-performance software systems that serve as the technical backbone of modern organizations."}
                      {category.id === 'enterprise-solutions' && "Integrating disparate business functions through unified platforms to drive organizational transparency and productivity."}
                      {category.id === 'ai-automation' && "Deploying intelligent systems to eliminate operational bottlenecks, optimize decision-making, and scale capabilities without linearly scaling headcount."}
                      {category.id === 'data-cloud-security' && "Establishing resilient data pipelines, scalable cloud infrastructure, and rigorous security frameworks to protect and leverage enterprise assets."}
                    </p>
                  </div>
                </div>
                
                {/* Services List (Editorial) */}
                <div className="lg:col-span-8">
                  <div className="border-t border-[var(--color-border-light)]">
                    {category.services.map((service, index) => (
                      <Link 
                        key={service.slug} 
                        to={`/services/${service.slug}`}
                        className="group flex flex-col sm:flex-row sm:items-start p-8 border-b border-[var(--color-border-light)] hover:bg-[var(--color-surface-alt)] transition-colors gap-6"
                      >
                        <div className="text-[var(--color-brand-blue)] font-mono text-sm w-12 shrink-0 pt-1">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[var(--color-brand-navy)] mb-3 group-hover:text-[var(--color-brand-blue)] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed pr-8">
                            {service.description}
                          </p>
                        </div>
                        <div className="shrink-0 pt-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300">
                          <ArrowRight className="text-[var(--color-brand-blue)]" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
