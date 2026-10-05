import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Cpu, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: "AI Audit & Strategy",
    description: "We dive deep into your current operations to identify manual bottlenecks and data silos. We deliver a crystal-clear AI strategy that guarantees ROI.",
    icon: Search,
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-[0_0_30px_rgba(0,240,255,0.3)]"
  },
  {
    title: "Custom Architecture",
    description: "Our engineers design a bespoke AI pipeline tailored specifically to your data formats, security requirements, and business objectives.",
    icon: PenTool,
    color: "from-purple-500 to-blue-500",
    shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]"
  },
  {
    title: "Seamless Integration",
    description: "We deploy the AI models directly into your existing software ecosystem. No downtime, no workflow disruption—just instant augmentation.",
    icon: Cpu,
    color: "from-emerald-400 to-cyan-500",
    shadow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  },
  {
    title: "Business Excellence",
    description: "Your business is now automated. We provide ongoing monitoring, model fine-tuning, and scaling to ensure you stay ahead of the competition.",
    icon: TrendingUp,
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]"
  }
];

export default function ProcessRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-transparent" ref={containerRef}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none dark:bg-blue-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 dark:text-white"
          >
            The Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055FF] to-[#00F0FF]">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            We don't just build software. We engineer a complete transformation of your business operations in four precise steps.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 dark:bg-slate-800 rounded-full" />
          
          {/* Central Line Animated Glow */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-[#0055FF] via-[#00F0FF] to-emerald-400 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                  
                  {/* Empty space for alternating layout on Desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Central Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center ${step.shadow} border-4 border-white dark:border-[#030408]`}
                    >
                      <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-24 md:pl-0 flex justify-start">
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`w-full max-w-md bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xl dark:bg-slate-900/50 dark:border-slate-800 backdrop-blur-sm hover:border-[#0055FF]/50 transition-colors ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
                    >
                      <div className="text-[#0055FF] dark:text-[#00F0FF] font-mono text-sm font-bold tracking-widest uppercase mb-2">
                        Step 0{index + 1}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed dark:text-slate-400 text-sm md:text-base">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
