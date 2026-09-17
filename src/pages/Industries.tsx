import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Building2, Workflow } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion';
import { industriesData } from '../data/industries';

export default function Industries() {
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

  const x1 = useTransform(smoothMouseX, [-500, 500], [-40, 40]);
  const y1 = useTransform(smoothMouseY, [-500, 500], [-40, 40]);
  const x2 = useTransform(smoothMouseX, [-500, 500], [50, -50]);
  const y2 = useTransform(smoothMouseY, [-500, 500], [50, -50]);

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
        <title>Industry Expertise | Dibexa Infotech Pvt. Ltd.</title>
        <meta name="description" content="Explore our specialized technology engineering capabilities across key global industries including finance, healthcare, and manufacturing." />
      </Helmet>

      {/* Complex Animated Cover Section */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0a0f1c]" data-theme="dark">
        
        {/* Deep Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-brand-navy)] via-[#0a0f1c] to-[#050B14] opacity-80"></div>
        
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

        {/* Interactive Spotlight */}
        <motion.div 
          className="absolute top-0 left-0 pointer-events-none opacity-40 mix-blend-screen rounded-full blur-[120px] w-[900px] h-[900px] bg-[var(--color-brand-teal)]"
          style={{
            x: useTransform(smoothMouseX, x => x - 450 + (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)),
            y: useTransform(smoothMouseY, y => y - 450 + (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)),
          }}
        />

        {/* Floating Geometric Elements (Parallax) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Element 1: Glassmorphism Globe */}
          <motion.div 
            style={{ x: x1, y: y1 }}
            className="absolute top-[15%] right-[10%] w-72 h-72 bg-white/[0.01] backdrop-blur-3xl border border-white/5 rounded-full rotate-12 flex items-center justify-center shadow-[0_0_50px_rgba(45,212,191,0.1)] hidden lg:flex"
          >
             <Globe className="w-32 h-32 text-[var(--color-brand-teal)] opacity-20" strokeWidth={1} />
          </motion.div>
          
          {/* Element 2: Concentric Rings */}
          <motion.div 
            style={{ x: x2, y: y2 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[30%] left-[10%] w-[600px] h-[600px] rounded-full border border-dashed border-[var(--color-brand-blue)]/10 hidden md:block"
          >
             <div className="absolute inset-10 rounded-full border border-[var(--color-brand-blue)]/5"></div>
             <div className="absolute inset-20 rounded-full border border-dashed border-[var(--color-brand-teal)]/10"></div>
          </motion.div>
        </div>

        {/* Infinite Marquee Background Text */}
        <div className="absolute top-[40%] left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none hidden md:block">
          <motion.div 
            animate={{ x: [-2000, 0] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="text-[16rem] font-black text-white leading-none tracking-tighter"
          >
            FINANCE HEALTHCARE MANUFACTURING RETAIL LOGISTICS FINANCE HEALTHCARE
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
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--color-brand-teal)]/10 border border-[var(--color-brand-teal)]/20 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-teal)] animate-pulse shadow-[0_0_10px_var(--color-brand-teal)]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-brand-teal)] uppercase">Domain Expertise</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tight text-white leading-[1.05]">
              Sector-Specific <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] via-[var(--color-brand-teal)] to-white">
                Transformation
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#94a3b8] font-light max-w-2xl leading-relaxed mb-12">
              We deploy highly specialized AI and enterprise architectures tailored to the unique operational, regulatory, and competitive constraints of your industry.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-6 text-xs font-mono text-[#64748b] uppercase tracking-[0.15em]">
                <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-[var(--color-brand-teal)]" /> Global Reach</span>
                <span className="flex items-center gap-2"><Building2 className="w-4 h-4 text-[var(--color-brand-blue)]" /> Enterprise Grade</span>
                <span className="flex items-center gap-2"><Workflow className="w-4 h-4 text-white" /> Deep Workflow</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {industriesData.map((industry) => (
              <div key={industry.id} className="border-t border-[var(--color-border-light)] pt-8">
                <h2 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-4">{industry.title}</h2>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                  {industry.description}
                </p>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-brand-blue)] mb-4">Strategic Focus Areas</h3>
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-2 w-1 h-1 bg-[var(--color-text-primary)] rounded-none shrink-0" />
                      <span className="text-[var(--color-text-primary)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
