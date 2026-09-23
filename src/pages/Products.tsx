import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Bot, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import DGBrainMockup from '../components/ui/DGBrainMockup';
import CutOffMockup from '../components/ui/CutOffMockup';
import AnimatedPage from '../components/layout/AnimatedPage';

export default function Products() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion ? undefined : {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <AnimatedPage className="bg-slate-50 font-sans min-h-screen text-slate-900 relative overflow-hidden dark:bg-[#010103] dark:text-white">
      <Helmet>
        <title>AI Products | Dibexa Infotech Pvt. Ltd.</title>
        <meta name="description" content="Explore Dibexa's proprietary AI software products including DG Brain and CutOff Guide." />
      </Helmet>

      {/* Global Background Accents */}
      <div className="absolute top-[0%] left-[-10%] w-[60%] h-[70%] bg-cyan-300/30 blur-[120px] rounded-full pointer-events-none dark:bg-[#00F0FF]/10 dark:blur-[150px]" />
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[60%] bg-violet-400/20 blur-[120px] rounded-full pointer-events-none dark:bg-[#8A2BE2]/10 dark:blur-[150px]" />
      <div className="absolute inset-0 bg-grid-light opacity-60 pointer-events-none dark:hidden" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 border border-slate-200/60 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-blue-600 backdrop-blur-md shadow-sm dark:bg-[#0055FF]/10 dark:border-[#0055FF]/30 dark:text-[#00F0FF] dark:shadow-[0_0_15px_rgba(0,85,255,0.2)]">
            PROPRIETARY SOFTWARE SUITE
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] dark:text-white">
            Built for Scale. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2]">
              Powered by AI.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
            Beyond our custom enterprise solutions, we develop and maintain our own specialized, intelligent software products designed to disrupt specific verticals.
          </p>
        </motion.div>
      </section>

      {/* Product 1: DG Brain */}
      <section className="py-20 relative z-10 border-t border-slate-200/50 bg-white/40 backdrop-blur-3xl dark:bg-[#020204]/80 dark:border-[#0055FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm dark:bg-[#0055FF]/10 dark:border-[#0055FF]/40">
                <Bot size={28} className="text-blue-600 dark:text-[#0055FF]" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 dark:text-white">DG Brain</h2>
                <h3 className="text-xl font-bold text-blue-600 mb-4 dark:text-[#00F0FF]">The Next-Generation AI Interview Platform</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6 dark:text-slate-400 dark:font-mono">
                  DG Brain eliminates hiring bias and accelerates technical screening. It conducts live, conversational interviews, analyzing candidates not just on their answers, but evaluating technical proficiency, sentiment, and soft skills in real-time.
                </p>
                <ul className="space-y-3">
                  {['Automated Technical Screening', 'Real-time Sentiment & Confidence Analysis', 'Instant Competency Scoring', 'Anti-cheat & Eye-tracking capabilities'].map(feat => (
                    <li key={feat} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-brand-cyan)]" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Button as={Link} to="/contact" variant="outline" className="mt-4 bg-white dark:bg-[#05060A] dark:border-[#0055FF]/50 dark:text-[#00F0FF] dark:hover:bg-[#00F0FF]/10 dark:font-mono">
                Request a Demo
              </Button>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative mt-12 lg:mt-0">
            {/* Cinematic Aura Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none dark:bg-[#0055FF]/15" />
            <div className="relative z-10">
              <DGBrainMockup />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Product 2: CutOff Guide */}
      <section className="py-24 relative z-10 border-t border-slate-200/50 bg-slate-50 dark:bg-[#010103]/90 dark:border-[#0055FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shadow-sm dark:bg-[#00F0FF]/10 dark:border-[#00F0FF]/40">
                <Target size={28} className="text-cyan-600 dark:text-[#00F0FF]" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 dark:text-white">CutOff Guide</h2>
                <h3 className="text-xl font-bold text-cyan-600 mb-4 dark:text-[#8A2BE2]">Predictive College Admission Engine</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6 dark:text-slate-400 dark:font-mono">
                  Navigating engineering and medical admissions is highly stressful. CutOff Guide leverages 5+ years of historical CAP round data and advanced predictive models to calculate a student's exact probability of admission into specific colleges and branches.
                </p>
                <ul className="space-y-3">
                  {['Highly accurate admission probabilities', 'Historical trend analysis (Up/Down)', 'Location and branch-based filtering', 'Data-driven counseling support'].map(feat => (
                    <li key={feat} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)] dark:bg-[#8A2BE2]" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Button as={Link} to="/contact" variant="outline" className="mt-4 bg-white dark:bg-[#05060A] dark:border-[#8A2BE2]/50 dark:text-[#8A2BE2] dark:hover:bg-[#8A2BE2]/10 dark:font-mono">
                Explore CutOff Guide
              </Button>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative mt-12 lg:mt-0">
            {/* Cinematic Aura Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none dark:bg-[#00F0FF]/15" />
            <div className="relative z-10">
              <CutOffMockup />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 text-center border-t border-slate-200/50 bg-white relative dark:bg-[#020204] dark:border-[#0055FF]/20">
        <div className="max-w-2xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-white">Want to license our products?</h2>
          <p className="text-slate-600 font-medium dark:text-slate-400 dark:font-mono">Get in touch to discuss white-labeling, API access, or enterprise deployment.</p>
          <div className="pt-4">
            <Button as={Link} to="/contact" variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/20 px-10 hover:opacity-90 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_20px_rgba(0,85,255,0.4)] dark:font-mono dark:tracking-widest">
              Contact Sales
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

    </AnimatedPage>
  );
}
