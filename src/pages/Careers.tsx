import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Rocket, 
  Code2, 
  BrainCircuit, 
  TerminalSquare, 
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { fadeUpVariants, heroContainerVariants } from '../lib/motion';
import AnimatedPage from '../components/layout/AnimatedPage';

export default function Careers() {
  const shouldReduceMotion = useReducedMotion();
  const activeHeroVariants = shouldReduceMotion ? undefined : heroContainerVariants;
  const activeFadeUp = shouldReduceMotion ? undefined : fadeUpVariants;

  return (
    <AnimatedPage className="bg-slate-50 min-h-screen font-sans text-slate-900 overflow-hidden relative dark:bg-[#010103] dark:text-white">
      <Helmet>
        <title>Careers at Dibexa | AI Engineering Jobs in Pune</title>
        <meta name="description" content="Join our engineering team in Pune. We are hiring software engineers, AI researchers, and full-stack developers to build applied AI systems." />
      </Helmet>

      {/* Aurora Background Orbs */}
      <div className="absolute top-[5%] left-[-10%] w-[50%] h-[70%] bg-cyan-300/30 blur-[130px] rounded-full pointer-events-none dark:bg-[#00F0FF]/10 dark:blur-[150px]" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-violet-400/20 blur-[120px] rounded-full pointer-events-none dark:bg-[#8A2BE2]/10 dark:blur-[150px]" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-200/50 relative z-10 bg-white/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={activeHeroVariants}
            className="flex flex-col items-center max-w-4xl mx-auto"
          >
            <motion.div variants={activeFadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 border border-slate-200 text-blue-600 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-sm backdrop-blur-md dark:bg-[#00F0FF]/10 dark:border-[#00F0FF]/30 dark:text-[#00F0FF] dark:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse dark:bg-[#00F0FF]" />
              JOIN THE ENGINEERING TEAM
            </motion.div>
            
            <motion.h1 variants={activeFadeUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] dark:text-white">
              Build AI Systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2]">Actually Work.</span>
            </motion.h1>
            
            <motion.p variants={activeFadeUp} className="text-lg md:text-xl text-slate-600 leading-relaxed mx-auto mt-6 text-balance font-medium dark:text-slate-400 dark:font-mono">
              We are looking for pragmatic software engineers who want to ship real, applied artificial intelligence to enterprise production environments. No bureaucratic layers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Engineering Culture */}
      <section className="py-20 md:py-28 relative z-10 border-b border-slate-200/50 bg-white/40 backdrop-blur-3xl dark:bg-[#030408]/80 dark:border-[#0055FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 mb-2 dark:text-[#00F0FF]">
              OUR ENGINEERING CULTURE
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-white">
              We Value Working Code Over Slide Decks.
            </h2>
            <p className="text-base text-slate-600 mt-4 font-medium dark:text-slate-400 dark:font-mono">
              At Dibexa, you won't spend weeks in alignment meetings. You'll be given challenging problems—like optimizing a tensor inference engine for edge devices or building a multi-agent orchestration pipeline—and the autonomy to solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-8 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl shadow-blue-900/5 space-y-4 hover:-translate-y-1 transition-transform dark:bg-[#05060A] dark:border-[#0055FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,85,255,0.2)]">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm dark:bg-[#0055FF]/10 dark:text-[#00F0FF] dark:border-[#0055FF]/40">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ship to Production</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium dark:text-slate-400">
                We believe in continuous integration and rapid deployment. If your code works and passes the test suite, it goes to production. We don't hold back innovation for arbitrary quarterly release cycles.
              </p>
            </div>

            <div className="p-8 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl shadow-blue-900/5 space-y-4 hover:-translate-y-1 transition-transform dark:bg-[#05060A] dark:border-[#00F0FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,240,255,0.15)]">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:border-[#00F0FF]/40">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Deep Technical Autonomy</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium dark:text-slate-400">
                Engineers choose the best tools for the job. Whether that means writing microservices in Go, fine-tuning Llama models in Python, or building UIs in React, you dictate the architecture.
              </p>
            </div>

            <div className="p-8 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl shadow-blue-900/5 space-y-4 hover:-translate-y-1 transition-transform dark:bg-[#05060A] dark:border-[#8A2BE2]/30 dark:shadow-[0_10px_30px_-15px_rgba(138,43,226,0.2)]">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 shadow-sm dark:bg-[#8A2BE2]/10 dark:text-[#8A2BE2] dark:border-[#8A2BE2]/40">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Zero Bureaucracy</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium dark:text-slate-400">
                No timesheets, no micro-management. We trust our engineers to manage their own time and output. The only metric that matters is the quality and reliability of the software you deliver.
              </p>
            </div>

            <div className="p-8 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl shadow-blue-900/5 space-y-4 hover:-translate-y-1 transition-transform dark:bg-[#05060A] dark:border-slate-700">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-600">
                <TerminalSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Direct Business Impact</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium dark:text-slate-400">
                You will see exactly how your AI models and software directly improve our clients' operations. You are building core engines, not maintaining legacy technical debt.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 mb-2 dark:text-[#0055FF]">
                OPEN ROLES
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-white">
                Current Engineering Openings
              </h2>
            </div>
            <div className="text-sm font-mono text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-lg font-bold dark:bg-[#020204] dark:border-[#0055FF]/30 dark:text-slate-300">
              LOCATION: HYBRID / PUNE
            </div>
          </div>

          <div className="space-y-6">
            
            {/* Role 1 */}
            <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-shadow group flex flex-col md:flex-row md:items-center justify-between gap-6 dark:bg-[#020204] dark:border-[#0055FF]/20 dark:hover:border-[#00F0FF]/40">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-[#00F0FF]">
                    Senior AI Engineer (Python/PyTorch)
                  </h3>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold rounded border border-emerald-200 dark:bg-[#8A2BE2]/10 dark:text-[#8A2BE2] dark:border-[#8A2BE2]/30">ACTIVE</span>
                </div>
                <p className="text-slate-600 max-w-2xl text-sm leading-relaxed font-medium dark:text-slate-400">
                  Lead the development of custom fine-tuned LLMs and computer vision models. You will be responsible for data pipelines, model training, and deploying scalable inference endpoints using TensorRT/vLLM.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 font-bold dark:text-slate-500">
                  <span>Pune, India (Hybrid)</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span>Full-Time</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span>3-5 Years Exp.</span>
                </div>
              </div>
              <Button as={Link} to="/contact" variant="outline" className="border-slate-300 hover:bg-slate-900 hover:text-white shrink-0 dark:border-[#0055FF]/40 dark:text-[#00F0FF] dark:hover:bg-[#00F0FF]/10 dark:font-mono">
                Apply Now <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            {/* Role 2 */}
            <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-shadow group flex flex-col md:flex-row md:items-center justify-between gap-6 dark:bg-[#020204] dark:border-[#0055FF]/20 dark:hover:border-[#00F0FF]/40">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-[#00F0FF]">
                    Full Stack Engineer (React/Node)
                  </h3>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold rounded border border-emerald-200 dark:bg-[#8A2BE2]/10 dark:text-[#8A2BE2] dark:border-[#8A2BE2]/30">ACTIVE</span>
                </div>
                <p className="text-slate-600 max-w-2xl text-sm leading-relaxed font-medium dark:text-slate-400">
                  Build robust, high-performance web applications that interface directly with our AI microservices. You will architect the frontend user experience and manage secure data routing in the backend.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 font-bold dark:text-slate-500">
                  <span>Pune, India (Hybrid)</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span>Full-Time</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span>2-4 Years Exp.</span>
                </div>
              </div>
              <Button as={Link} to="/contact" variant="outline" className="border-slate-300 hover:bg-slate-900 hover:text-white shrink-0 dark:border-[#0055FF]/40 dark:text-[#00F0FF] dark:hover:bg-[#00F0FF]/10 dark:font-mono">
                Apply Now <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

          </div>

          <div className="mt-12 p-8 bg-blue-50/50 border border-blue-100 rounded-3xl text-center space-y-4 dark:bg-[#05060A] dark:border-[#0055FF]/30">
            <Briefcase size={32} className="text-blue-600 mx-auto dark:text-[#00F0FF]" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Don't see a perfect fit?</h3>
            <p className="text-slate-600 text-sm max-w-lg mx-auto font-medium dark:text-slate-400 dark:font-mono">
              We are always looking for exceptional technical talent. If you are an engineer who loves building applied AI, send your resume directly to our founders.
            </p>
            <a href="mailto:careers@dibexa.com" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors pt-2 dark:text-[#00F0FF] dark:hover:text-[#8A2BE2] dark:font-mono">
              Email careers@dibexa.com <ArrowRight size={16} className="ml-1" />
            </a>
          </div>

        </div>
      </section>

    </AnimatedPage>
  );
}
