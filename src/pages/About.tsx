import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Target, 
  MapPin, 
  ArrowRight,
  Clock,
  Lock,
  Users
} from 'lucide-react';
import Button from '../components/ui/Button';
import { fadeUpVariants, heroContainerVariants } from '../lib/motion';
import AnimatedPage from '../components/layout/AnimatedPage';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const activeHeroVariants = shouldReduceMotion ? undefined : heroContainerVariants;
  const activeFadeUp = shouldReduceMotion ? undefined : fadeUpVariants;

  return (
    <AnimatedPage className="bg-slate-50 min-h-screen font-sans text-slate-900 overflow-hidden relative dark:bg-[#010103] dark:text-white">
      <Helmet>
        <title>About Us | Dibexa Infotech Pvt. Ltd. | AI Software Startup</title>
        <meta name="description" content="Dibexa Infotech Pvt. Ltd. is an emerging AI software & solutions startup based in Pune, India. We engineer practical artificial intelligence, custom models, and automation tools for businesses." />
      </Helmet>

      {/* ============================================================
          01 — HERO (Authentic, Clean, Zero Fake Building Photos)
          ============================================================ */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50 dark:bg-[#010103] border-b border-slate-200/50 dark:border-[#0055FF]/20 relative overflow-hidden">
        {/* Aurora Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-cyan-300/30 blur-[120px] rounded-full pointer-events-none dark:bg-[#00F0FF]/10 dark:blur-[150px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[70%] bg-violet-400/20 blur-[120px] rounded-full pointer-events-none dark:bg-[#8A2BE2]/10 dark:blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={activeHeroVariants}
            className="max-w-4xl space-y-6"
          >
            <motion.div variants={activeFadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 border border-slate-200 text-blue-600 rounded-full text-xs font-mono font-bold tracking-wider uppercase shadow-sm backdrop-blur-md dark:bg-[#00F0FF]/10 dark:border-[#00F0FF]/30 dark:text-[#00F0FF] dark:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse dark:bg-[#00F0FF]" />
              AI SOFTWARE SERVICES STARTUP // PUNE, INDIA
            </motion.div>

            <motion.h1 variants={activeFadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] dark:text-white">
              An AI Software Startup <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2]">
                Founded by Engineers.
              </span>
            </motion.h1>
            
            <motion.p variants={activeFadeUp} className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl font-medium dark:text-slate-400 dark:font-mono">
              Dibexa Infotech Pvt. Ltd. was started with a simple, pragmatic goal: helping businesses and growing companies harness practical, working artificial intelligence—without corporate bloat, theoretical fluff, or inflated enterprise fees.
            </motion.p>

            <motion.div variants={activeFadeUp} className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono font-bold text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-blue-600" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Agile AI Engineering & Solutions</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          02 — WHO WE ARE & OUR MISSION (Honest & Grounded)
          ============================================================ */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-16 relative z-10 border-b border-slate-200/50 bg-white/40 backdrop-blur-3xl dark:bg-[#020204]/80 dark:border-[#0055FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Headline */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={activeHeroVariants}
              className="lg:col-span-5 space-y-4"
            >
              <motion.div variants={activeFadeUp} className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-[#00F0FF]">
                WHO WE ARE
              </motion.div>
              <motion.h2 variants={activeFadeUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight dark:text-white">
                Practical Intelligence for Real Business Workflows.
              </motion.h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
                We are a lean, agile software startup specialized in applied AI development. Whether you are a local shop looking to automate inventory, or an MNC needing complex predictive analytics, we turn manual operational bottlenecks into automated, intelligent software tailored for the Indian market and beyond.
              </p>
              
              <div className="pt-4">
                <Button as={Link} to="/contact" variant="primary" size="md" className="bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:opacity-90 dark:bg-gradient-to-r dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_20px_rgba(0,85,255,0.4)] dark:font-mono dark:tracking-widest">
                  Discuss a Project with Us
                  <ArrowRight size={15} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Right Narrative Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={activeHeroVariants}
              className="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed dark:text-slate-300"
            >
              <motion.div variants={activeFadeUp} className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-xl shadow-blue-900/5 space-y-4 dark:bg-[#05060A] dark:border-[#0055FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,85,255,0.2)]">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Our Engineering Philosophy
                </h3>
                <p>
                  Most companies don't need theoretical multi-year research initiatives. They need a custom document parser that saves 4 hours of invoice entry a day. They need an intelligent chatbot that actually understands their internal product manuals. They need a computer vision model that spots assembly errors before parts ship out.
                </p>
                <p>
                  At Dibexa, we focus exclusively on building software that delivers immediate, measurable utility. We prioritize clean code, responsive communication, and dependable delivery.
                </p>
              </motion.div>

              {/* What We Do vs Don't */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-slate-200/60 rounded-2xl bg-white shadow-sm space-y-2 dark:bg-[#010103] dark:border-red-500/30">
                  <div className="text-xs font-mono font-bold text-red-500 uppercase">What We Don't Do</div>
                  <div className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                    No theoretical sales decks, no inflated enterprise billing, and no skin-deep wrapper demos that break in production.
                  </div>
                </div>
                <div className="p-5 border border-blue-200/60 rounded-2xl bg-blue-50/50 shadow-sm border-l-4 border-l-blue-600 space-y-2 dark:bg-[#00F0FF]/5 dark:border-[#00F0FF]/30 dark:border-l-[#00F0FF]">
                  <div className="text-xs font-mono font-bold text-blue-700 uppercase dark:text-[#00F0FF]">What We Deliver</div>
                  <div className="text-sm text-slate-700 leading-relaxed font-medium dark:text-slate-300">
                    Working AI software, secure private model pipelines, clean documentation, and direct developer support.
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ============================================================
          02B — OUR TECHNOLOGY BASE (City Vista, Kharadi, Pune)
          ============================================================ */}
      <section className="pt-10 pb-20 md:pt-16 md:pb-28 relative border-b border-slate-200/50 dark:border-[#0055FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image: Real Photograph of City Vista, Kharadi, Pune */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200/60 bg-white group relative dark:bg-[#05060A] dark:border-[#8A2BE2]/30 dark:shadow-[0_10px_30px_-15px_rgba(138,43,226,0.3)]">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src="/images/dibexa-hq.jpg" 
                    alt="City Vista, Kharadi, Pune - Dibexa Technology Base" 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase font-bold">
                      BASE OF OPERATIONS PUNE, INDIA
                    </div>
                    <div className="text-base font-bold mt-1">
                      City Vista, Kharadi, Pune - 411014
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Maharashtra, India
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Details */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={activeHeroVariants}
              className="lg:col-span-7 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight dark:text-white">
                Rooted in Pune’s Premier Tech Corridor: City Vista, Kharadi.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
                Dibexa Infotech operates from <strong className="dark:text-white">City Vista in Kharadi, Pune</strong> — right in the heart of Maharashtra’s premier technology corridor. Situated alongside global IT campuses, engineering centers, and forward-thinking enterprises, our location connects us to exceptional software talent and world-class digital infrastructure.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-2xl space-y-1 shadow-sm dark:bg-[#020204] dark:border-[#0055FF]/30">
                  <div className="text-xs font-mono font-bold text-slate-900 dark:text-[#00F0FF]">Prime Tech Hub</div>
                  <div className="text-xs text-slate-600 font-medium dark:text-slate-400">Minutes away from EON IT Park and World Trade Center Pune.</div>
                </div>
                <div className="p-5 bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-2xl space-y-1 shadow-sm dark:bg-[#020204] dark:border-[#8A2BE2]/30">
                  <div className="text-xs font-mono font-bold text-slate-900 dark:text-[#8A2BE2]">Applied AI Engineering</div>
                  <div className="text-xs text-slate-600 font-medium dark:text-slate-400">Dedicated high-speed development environment for custom client models.</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================
          03 — WHY WORK WITH AN AGILE AI STARTUP (The Real Advantages)
          ============================================================ */}
      <section className="py-20 md:py-28 relative z-10 bg-white/40 backdrop-blur-3xl border-b border-slate-200/50 dark:bg-[#030408]/80 dark:border-[#0055FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={activeHeroVariants}
            className="max-w-3xl mb-14"
          >
            <motion.div variants={activeFadeUp} className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 mb-2 dark:text-[#00F0FF]">
              THE STARTUP ADVANTAGE
            </motion.div>
            <motion.h2 variants={activeFadeUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-white">
              Why Growing Businesses Choose Dibexa
            </motion.h2>
            <motion.p variants={activeFadeUp} className="text-base text-slate-600 mt-2 font-medium dark:text-slate-400 dark:font-mono">
              Large legacy IT consultancies are slow, expensive, and assign junior staff behind layers of middle managers. As a specialized AI startup, we offer a refreshingly direct, modern alternative:
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            
            {/* Advantage 1 */}
            <motion.div variants={activeFadeUp} className="p-6 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl shadow-blue-900/5 space-y-4 hover:-translate-y-1 transition-transform dark:bg-[#05060A] dark:border-[#0055FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,85,255,0.2)]">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm dark:bg-[#0055FF]/10 dark:text-[#0055FF] dark:border-[#0055FF]/40">
                <Users size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Direct Developer Access</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium dark:text-slate-400">
                You work directly with the AI engineers and founders building your system. No telephone games through account managers.
              </p>
            </motion.div>

            {/* Advantage 2 */}
            <motion.div variants={activeFadeUp} className="p-6 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl shadow-blue-900/5 space-y-4 hover:-translate-y-1 transition-transform dark:bg-[#05060A] dark:border-[#00F0FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,240,255,0.15)]">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:border-[#00F0FF]/40">
                <Clock size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Rapid Prototyping</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium dark:text-slate-400">
                We move fast. We validate your data and deliver an interactive, working proof-of-concept in 2 to 3 weeks.
              </p>
            </motion.div>

            {/* Advantage 3 */}
            <motion.div variants={activeFadeUp} className="p-6 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl shadow-blue-900/5 space-y-4 hover:-translate-y-1 transition-transform dark:bg-[#05060A] dark:border-[#8A2BE2]/30 dark:shadow-[0_10px_30px_-15px_rgba(138,43,226,0.2)]">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 shadow-sm dark:bg-[#8A2BE2]/10 dark:text-[#8A2BE2] dark:border-[#8A2BE2]/40">
                <Target size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Practical, Fixed Costs</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium dark:text-slate-400">
                Transparent milestones and clear deliverables. No open-ended hourly billing traps or enterprise surprise fees.
              </p>
            </motion.div>

            {/* Advantage 4 */}
            <motion.div variants={activeFadeUp} className="p-6 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl shadow-blue-900/5 space-y-4 hover:-translate-y-1 transition-transform dark:bg-[#05060A] dark:border-slate-700">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100 shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-600">
                <Lock size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">100% IP & Code Ownership</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium dark:text-slate-400">
                Everything we build belongs to you. Source code, models, and data pipelines are deployed directly to your infrastructure.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ============================================================
          04 — HOW WE DELIVER (Simple, Transparent Process)
          ============================================================ */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={activeHeroVariants}
            className="max-w-3xl mb-14"
          >
            <motion.div variants={activeFadeUp} className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 mb-2 dark:text-[#0055FF]">
              OUR ENGAGEMENT PROCESS
            </motion.div>
            <motion.h2 variants={activeFadeUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-white">
              Simple, Transparent, and Collaborative
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: "01",
                title: "Discovery & Data Check",
                desc: "We discuss your workflow, inspect sample documents or datasets, and assess technical feasibility."
              },
              {
                step: "02",
                title: "Working Prototype",
                desc: "In 2 to 3 weeks, we build an interactive prototype so you can test the AI against your real-world data."
              },
              {
                step: "03",
                title: "Integration & Production",
                desc: "We connect the AI models directly into your database, ERP, CRM, or custom web/mobile app."
              },
              {
                step: "04",
                title: "Handover & Support",
                desc: "Complete documentation, code handover, and ongoing maintenance to keep models fast and accurate."
              }
            ].map((s, i) => (
              <motion.div variants={activeFadeUp} key={i} className="p-6 bg-white border border-slate-200/80 rounded-3xl space-y-3 shadow-sm hover:shadow-md transition-shadow dark:bg-[#020204] dark:border-[#0055FF]/20">
                <span className="text-xs font-mono font-bold text-blue-600 px-2.5 py-1 bg-blue-50 rounded-md border border-blue-100 inline-block dark:bg-[#0055FF]/10 dark:text-[#00F0FF] dark:border-[#0055FF]/30">
                  STEP {s.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium dark:text-slate-400">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ============================================================
          05 — GET IN TOUCH CTA
          ============================================================ */}
      <section className="py-24 bg-slate-100 border-t border-slate-200/60 text-center relative overflow-hidden dark:bg-[#010103] dark:border-[#0055FF]/20">
        {/* Ambient footer glow offset */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none dark:from-[#0055FF]/5" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[80%] bg-blue-300/20 blur-[120px] rounded-full pointer-events-none dark:bg-[#0055FF]/20 dark:blur-[150px]" />
        
        <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Have an AI Project or Bottleneck in Mind?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
            Reach out directly to our engineering team. We'll review your requirements and provide an honest assessment of how AI can solve it.
          </p>

          <div className="pt-6">
            <Button as={Link} to="/contact" variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/20 px-10 py-4 hover:opacity-90 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_20px_rgba(0,85,255,0.4)] dark:font-mono dark:tracking-widest">
              Start a Conversation
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

    </AnimatedPage>
  );
}
