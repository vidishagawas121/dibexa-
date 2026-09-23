import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Terminal, Code2, Cpu } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import AnimatedPage from '../components/layout/AnimatedPage';
import Button from '../components/ui/Button';
import InteractiveAIDemo from '../components/ui/InteractiveAIDemo';
import Hero3DCore from '../components/ui/Hero3DCore';
import ProcessRoadmap from '../components/ui/ProcessRoadmap';
import ROICalculator from '../components/ui/ROICalculator';
import WhatsAppDemo from '../components/ui/WhatsAppDemo';
import { fadeUpVariants, heroContainerVariants } from '../lib/motion';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const activeHeroVariants = shouldReduceMotion ? undefined : heroContainerVariants;
  const activeFadeUp = shouldReduceMotion ? undefined : fadeUpVariants;

  // Cinematic Parallax setup
  const { scrollY } = useScroll();
  const hero3DY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroTextY = useTransform(scrollY, [0, 1000], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <AnimatedPage className="bg-slate-50 font-sans min-h-screen text-slate-900 overflow-hidden relative dark:bg-[#010103] dark:text-white">
      <Helmet>
        <title>Dibexa - Smart AI for Business Excellence.</title>
        <meta name="description" content="Dibexa is an agile AI software startup based in Pune, currently engineering our core AI systems and infrastructure." />
      </Helmet>

      {/* Global Aurora Glass / Logo Ultimate Background Accents for Home */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[70%] bg-cyan-300/30 blur-[120px] rounded-full pointer-events-none dark:bg-[#00F0FF]/10 dark:blur-[150px]" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-violet-400/20 blur-[120px] rounded-full pointer-events-none dark:bg-[#8A2BE2]/10 dark:blur-[150px]" />

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity }}
        className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20"
      >
        
        {/* 3D Core Visualization Background (Parallaxed) */}
        <motion.div style={{ y: hero3DY }} className="absolute inset-0 z-0 pointer-events-none">
          <Hero3DCore />
        </motion.div>

        <motion.div style={{ y: heroTextY }} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={activeHeroVariants}
            className="space-y-8 flex flex-col items-center"
          >
            <motion.div variants={activeFadeUp} className="inline-flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-200/50 rounded-full shadow-lg backdrop-blur-xl dark:from-[#00F0FF]/10 dark:to-[#0055FF]/10 dark:border-[#00F0FF]/30 dark:shadow-[0_0_30px_rgba(0,240,255,0.15)] group hover:scale-105 transition-transform duration-300">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 dark:bg-[#00F0FF]"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600 dark:bg-[#00F0FF]"></span>
              </span>
              <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-[#00F0FF] dark:to-white tracking-wide uppercase">
                Enterprise-Grade AI Automation
              </span>
            </motion.div>
            
            {/* 
              CRITICAL RULE: DO NOT CHANGE THIS HEADLINE UNDER ANY CIRCUMSTANCES.
              It is hardlocked to "Smart AI for Business Excellence." as per strict user instruction.
            */}
            <motion.h1 variants={activeFadeUp} className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight dark:text-white">
              Smart AI for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[var(--color-brand-cyan)] dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2]">
                Business Excellence.
              </span>
            </motion.h1>
            
            <motion.p variants={activeFadeUp} className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl text-balance mx-auto font-medium dark:text-slate-400 dark:font-mono">
              We engineer secure, robust AI software solutions designed to eliminate operational bottlenecks, reduce manual overhead, and accelerate growth for modern businesses.
            </motion.p>
            
            <motion.div variants={activeFadeUp} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button as={Link} to="/contact" variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/20 px-8 hover:opacity-90 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_20px_rgba(0,85,255,0.4)] dark:font-mono dark:tracking-widest">
                Express your requirement
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button as={Link} to="/services" variant="outline" size="lg" className="bg-white/60 backdrop-blur-md border-slate-200 text-slate-700 hover:bg-white hover:text-slate-900 px-8 shadow-sm dark:bg-transparent dark:border-[#00F0FF]/50 dark:text-[#00F0FF] dark:hover:bg-[#00F0FF]/10 dark:font-mono dark:tracking-widest">
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Interactive Live AI Demo Section */}
      <section className="relative z-20 pb-24 pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <InteractiveAIDemo />
           </motion.div>
        </div>
      </section>

      {/* Path to Excellence / Process Roadmap */}
      <ProcessRoadmap />

      {/* 04 — ROI Calculator */}
      <ROICalculator />

      {/* 05 — WhatsApp Local AI Demo */}
      <WhatsAppDemo />

      {/* Focus Areas */}
      <section className="py-24 relative z-10 border-t border-slate-200/50 bg-white/20 backdrop-blur-3xl dark:bg-[#030408]/80 dark:border-[#0055FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 dark:text-white">Current Engineering Focus</h2>
            <p className="text-slate-600 font-medium dark:text-slate-400 dark:font-mono">What we are actively building and optimizing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Focus 1 */}
            <div className="p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-blue-900/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300 transition-all duration-300 group dark:bg-[#05060A]/80 dark:border-[#0055FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,85,255,0.2)] dark:hover:border-[#0055FF]/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark opacity-[0.03] pointer-events-none dark:opacity-10" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-sm dark:bg-[#0055FF]/10 dark:border-[#0055FF]/40 dark:text-[#0055FF]">
                  <Code2 size={26} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 dark:text-white">AI Infrastructure</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
                  Developing the foundational architecture for scalable, low-latency machine learning model deployment and data ingestion pipelines.
                </p>
              </div>
            </div>

            {/* Focus 2 */}
            <div className="p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-blue-900/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-300 transition-all duration-300 group dark:bg-[#05060A]/80 dark:border-[#00F0FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,240,255,0.15)] dark:hover:border-[#00F0FF]/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark opacity-[0.03] pointer-events-none dark:opacity-10" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform shadow-sm dark:bg-[#00F0FF]/10 dark:border-[#00F0FF]/40 dark:text-[#00F0FF]">
                  <Terminal size={26} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 dark:text-white">Custom Workflow Automation</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
                  Prototyping multi-agent systems designed to automate complex, multi-step business processes with human-in-the-loop oversight.
                </p>
              </div>
            </div>

            {/* Focus 3 */}
            <div className="p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-blue-900/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-300 transition-all duration-300 group dark:bg-[#05060A]/80 dark:border-[#8A2BE2]/30 dark:shadow-[0_10px_30px_-15px_rgba(138,43,226,0.2)] dark:hover:border-[#8A2BE2]/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark opacity-[0.03] pointer-events-none dark:opacity-10" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform shadow-sm dark:bg-[#8A2BE2]/10 dark:border-[#8A2BE2]/40 dark:text-[#8A2BE2]">
                  <Sparkles size={26} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 dark:text-white">Cognitive Systems</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
                  Fine-tuning private, highly-specialized language models that understand domain-specific corporate data without data leakage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve (Quick Overview) */}
      <section className="py-24 relative z-10 border-t border-slate-200/50 bg-slate-50 dark:bg-[#010103]/80 dark:border-[#0055FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 dark:text-white">Industries We Transform</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto dark:text-slate-400 dark:font-mono">
              We build agnostic AI systems that adapt to complex data environments across multiple verticals.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Manufacturing & Supply Chain', 'Healthcare & MedTech', 'Financial Services', 'E-Commerce & Retail', 'Legal & Compliance'].map((industry) => (
              <div key={industry} className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm shadow-sm hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default dark:bg-[#05060A] dark:border-[#0055FF]/30 dark:text-[#00F0FF] dark:font-mono dark:hover:border-[#8A2BE2] dark:hover:text-[#8A2BE2]">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact Bottom CTA */}
      <section className="py-24 text-center border-t border-slate-200/50 bg-slate-900 relative overflow-hidden dark:bg-[#020204] dark:border-[#0055FF]/20">
        
        <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none dark:bg-[#0055FF]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none dark:bg-[#00F0FF]/20" />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4 relative z-10"
        >
          <div className="w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/20 backdrop-blur-md">
            <Cpu size={36} className="text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to evolve your business?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto font-medium">
            Let's discuss how custom AI can eliminate bottlenecks and multiply your operational efficiency.
          </p>
          <Button as={Link} to="/contact" variant="primary" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_30px_rgba(0,180,255,0.4)] hover:shadow-[0_0_40px_rgba(0,180,255,0.6)] px-10 py-4 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_30px_rgba(0,85,255,0.5)] border-0 text-lg">
            Book a Free Consultation
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </motion.div>
      </section>

    </AnimatedPage>
  );
}
