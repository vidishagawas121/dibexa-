import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, ShieldCheck, Zap, MessageSquare, Eye, TrendingUp, Cpu } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpVariants, heroContainerVariants } from '../lib/motion';
import Button from '../components/ui/Button';
import AnimatedPage from '../components/layout/AnimatedPage';

export default function Services() {
  const shouldReduceMotion = useReducedMotion();
  const activeHeroVariants = shouldReduceMotion ? undefined : heroContainerVariants;
  const activeFadeUp = shouldReduceMotion ? undefined : fadeUpVariants;

  return (
    <AnimatedPage className="bg-slate-50 min-h-screen font-sans text-slate-900 overflow-hidden relative dark:bg-[#010103] dark:text-white">
      <Helmet>
        <title>AI Services | Dibexa Infotech Pvt. Ltd.</title>
        <meta name="description" content="From local shops to MNCs, Dibexa provides custom AI solutions like RAG, automation, and computer vision tailored for the Indian market." />
      </Helmet>

      {/* Global Aurora Glass Background Accents */}
      <div className="absolute top-[10%] left-[-10%] w-[60%] h-[70%] bg-blue-300/30 blur-[150px] rounded-full pointer-events-none dark:bg-[#0055FF]/10 dark:blur-[180px]" />
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[60%] bg-cyan-300/30 blur-[150px] rounded-full pointer-events-none dark:bg-[#00F0FF]/10 dark:blur-[150px]" />

      {/* ============================================================
          01 — HERO SECTION
          ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-200/50 bg-white/20 backdrop-blur-3xl dark:bg-[#020204]/80 dark:border-[#0055FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={activeHeroVariants} 
            className="max-w-4xl space-y-6"
          >
            <motion.div variants={activeFadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 border border-slate-200 text-blue-600 rounded-full text-xs font-mono font-bold tracking-wider uppercase shadow-sm backdrop-blur-md dark:bg-[#00F0FF]/10 dark:border-[#00F0FF]/30 dark:text-[#00F0FF] dark:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse dark:bg-[#00F0FF]" />
              ENGINEERED IN PUNE, INDIA
            </motion.div>
            
            <motion.h1 variants={activeFadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight dark:text-white">
              AI That Actually <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2]">
                Moves the Needle.
              </span>
            </motion.h1>
            
            <motion.p variants={activeFadeUp} className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium dark:text-slate-400 dark:font-mono">
              Whether you're a local shop looking to automate inventory, or a global MNC needing secure predictive models, we build practical AI systems that deliver immediate ROI.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          02 — RAG SPOTLIGHT (Retrieval-Augmented Generation)
          ============================================================ */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={activeHeroVariants}
            className="mb-10"
          >
            <motion.div variants={activeFadeUp} className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase mb-2 dark:text-[#00F0FF]">
              FLAGSHIP CAPABILITY
            </motion.div>
            <motion.h2 variants={activeFadeUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-white">
              Enterprise Knowledge Base (RAG)
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Visual Architecture */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-slate-900 p-8 rounded-[40px] border border-slate-800 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center dark:bg-[#05060A] dark:border-[#0055FF]/30 dark:shadow-[0_20px_50px_rgba(0,85,255,0.15)]"
            >
              {/* Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full dark:bg-[#00F0FF]/20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full dark:bg-[#0055FF]/20" />
              
              <div className="relative z-10 space-y-6">
                
                {/* Connection Nodes */}
                <div className="flex items-center justify-between gap-2 text-white">
                  
                  {/* Private Data */}
                  <div className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md text-center">
                    <Database className="mx-auto text-blue-400 mb-2 dark:text-[#0055FF]" size={24} />
                    <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300">Your Private Data</div>
                    <div className="text-[10px] text-slate-500 mt-1">PDFs, SQL, ERP</div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="hidden sm:flex items-center gap-1 text-cyan-400/50">
                     <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                     <div className="h-0.5 w-8 bg-cyan-400/30" />
                  </div>

                  {/* Secure Dibexa AI */}
                  <div className="flex-1 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-cyan-400/30 p-4 rounded-2xl backdrop-blur-md text-center shadow-[0_0_20px_rgba(34,211,238,0.1)] dark:from-[#00F0FF]/10 dark:to-[#0055FF]/10 dark:border-[#00F0FF]/30 dark:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                    <Cpu className="mx-auto text-cyan-400 mb-2 dark:text-[#00F0FF]" size={28} />
                    <div className="text-xs font-bold font-mono uppercase tracking-wider text-white dark:text-[#00F0FF]">Dibexa RAG Engine</div>
                    <div className="text-[10px] text-cyan-200/60 mt-1">100% Encrypted Context</div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="hidden sm:flex items-center gap-1 text-emerald-400/50">
                     <div className="h-0.5 w-8 bg-emerald-400/30" />
                     <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                  </div>

                  {/* Output */}
                  <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl backdrop-blur-md text-center">
                    <MessageSquare className="mx-auto text-emerald-400 mb-2" size={24} />
                    <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300">Instant Answers</div>
                    <div className="text-[10px] text-slate-500 mt-1">100% Accurate</div>
                  </div>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 backdrop-blur-md mt-8">
                   <ShieldCheck className="text-emerald-400 shrink-0" size={20} />
                   <p className="text-sm text-slate-300 font-medium">
                     Your proprietary data never leaves your secure environment. We do not train public models on your private documents.
                   </p>
                </div>

              </div>
            </motion.div>

            {/* RAG Copy */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={activeHeroVariants}
              className="space-y-6"
            >
              <motion.h3 variants={activeFadeUp} className="text-2xl font-bold text-slate-900 dark:text-white">
                Turn your messy internal documents into an instant oracle.
              </motion.h3>
              <p className="text-base text-slate-600 leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
                RAG (Retrieval-Augmented Generation) is the most powerful AI application for businesses today. Instead of relying on a generic chatbot that hallucinates facts, we connect an AI brain directly to your secure databases, HR manuals, past invoices, and technical PDFs.
              </p>
              <ul className="space-y-4 pt-2">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 dark:bg-[#00F0FF]/10 dark:text-[#00F0FF]">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">No Hallucinations</h4>
                    <p className="text-sm text-slate-600 mt-1 dark:text-slate-400">The AI only answers based on the exact documents you feed it.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 dark:bg-[#00F0FF]/10 dark:text-[#00F0FF]">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Extreme Security</h4>
                    <p className="text-sm text-slate-600 mt-1 dark:text-slate-400">We deploy these systems within your own private cloud or local servers.</p>
                  </div>
                </li>
              </ul>
              <div className="pt-4">
                <Button as={Link} to="/contact" variant="primary" className="bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:opacity-90 dark:bg-gradient-to-r dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_20px_rgba(0,85,255,0.4)] dark:font-mono tracking-widest">
                  See a Demo of RAG
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================
          03 — CORE CAPABILITIES (Bento Box)
          ============================================================ */}
      <section className="py-20 md:py-28 relative z-10 bg-white/40 backdrop-blur-3xl border-t border-slate-200/50 dark:bg-[#030408]/80 dark:border-[#0055FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={activeHeroVariants}
            className="mb-12 text-center max-w-2xl mx-auto"
          >
            <motion.div variants={activeFadeUp} className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase mb-2 dark:text-[#00F0FF]">
              CORE SERVICES
            </motion.div>
            <motion.h2 variants={activeFadeUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-white">
              Outcomes, Not Jargon.
            </motion.h2>
            <motion.p variants={activeFadeUp} className="mt-4 text-base text-slate-600 font-medium dark:text-slate-400 dark:font-mono">
              We focus on solving business problems. Whether you run a single retail store or a multinational supply chain, these core capabilities drive measurable efficiency.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Capability 1 */}
            <div className="group relative bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-[#05060A] dark:border-[#0055FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,85,255,0.2)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-500/0 group-hover:from-blue-600/5 group-hover:to-cyan-500/5 transition-colors duration-500 dark:group-hover:from-[#00F0FF]/5 dark:group-hover:to-[#0055FF]/5" />
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-6 dark:bg-[#0055FF]/10 dark:text-[#00F0FF] dark:border-[#0055FF]/40 relative z-10">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white relative z-10">Intelligent Workflow Automation</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed dark:text-slate-400 relative z-10">
                Replace slow, manual data entry with AI that can read unstructured emails, extract invoice details, and automatically route tasks to the correct department without human intervention.
              </p>
            </div>

            {/* Capability 2 */}
            <div className="group relative bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-[#05060A] dark:border-[#00F0FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,240,255,0.15)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/5 group-hover:to-blue-500/5 transition-colors duration-500 dark:group-hover:from-[#00F0FF]/5 dark:group-hover:to-[#0055FF]/5" />
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 mb-6 dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:border-[#00F0FF]/40 relative z-10">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white relative z-10">Multilingual Conversational AI</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed dark:text-slate-400 relative z-10">
                Connect directly with your customers and staff in Hindi, Marathi, English, and more. From WhatsApp inventory bots for local shops to L1 support agents for large enterprises.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="group relative bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-[#05060A] dark:border-[#8A2BE2]/30 dark:shadow-[0_10px_30px_-15px_rgba(138,43,226,0.2)] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-blue-500/0 group-hover:from-violet-500/5 group-hover:to-blue-500/5 transition-colors duration-500 dark:group-hover:from-[#8A2BE2]/5 dark:group-hover:to-[#0055FF]/5" />
              <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 mb-6 dark:bg-[#8A2BE2]/10 dark:text-[#8A2BE2] dark:border-[#8A2BE2]/40 relative z-10">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white relative z-10">Computer Vision & Inspection</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed dark:text-slate-400 relative z-10">
                Turn your existing cameras into intelligent inspectors. Automatically detect manufacturing defects, monitor warehouse inventory in real-time, or analyze foot traffic.
              </p>
            </div>

            {/* Capability 4 */}
            <div className="group relative bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-[#05060A] dark:border-emerald-500/30 dark:shadow-[0_10px_30px_-15px_rgba(16,185,129,0.15)] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-colors duration-500 dark:group-hover:from-emerald-500/5 dark:group-hover:to-[#00F0FF]/5" />
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 mb-6 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/40 relative z-10">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white relative z-10">Predictive Business Analytics</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed dark:text-slate-400 relative z-10">
                Stop guessing and start predicting. We build models that analyze your historical sales or supply chain data to accurately forecast demand and optimize purchasing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          04 — CTA
          ============================================================ */}
      <section className="py-24 bg-slate-900 text-center relative overflow-hidden dark:bg-[#010103] dark:border-t dark:border-[#0055FF]/20">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[80%] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none dark:bg-[#00F0FF]/20 dark:blur-[150px]" />
        
        <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Ready to integrate intelligence?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
            Talk directly to our founders in Pune. We'll give you an honest assessment of whether AI makes financial sense for your specific business case.
          </p>
          <div className="pt-6">
            <Button as={Link} to="/contact" variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/20 px-10 py-4 hover:opacity-90 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_20px_rgba(0,85,255,0.4)] dark:font-mono dark:tracking-widest">
              Schedule a Technical Call
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

    </AnimatedPage>
  );
}
