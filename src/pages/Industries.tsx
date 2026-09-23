import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Landmark, ShoppingBag, Truck, ChevronRight, Activity, ShieldCheck, Zap, Database } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import AnimatedPage from '../components/layout/AnimatedPage';

const industries = [
  {
    id: 'healthcare',
    name: 'Healthcare & Medical',
    icon: HeartPulse,
    tagline: 'Precision AI for patient care and data compliance.',
    color: 'from-emerald-400 to-cyan-500',
    description: 'We build HIPAA-compliant AI pipelines that automate patient triaging, analyze medical imagery with high precision, and streamline hospital operations.',
    features: [
      { name: 'Automated Patient Triaging', icon: Activity },
      { name: 'HIPAA Data Compliance', icon: ShieldCheck },
      { name: 'Predictive Diagnostics', icon: Zap }
    ]
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    icon: Landmark,
    tagline: 'Algorithmic intelligence for a secure financial future.',
    color: 'from-blue-600 to-indigo-600',
    description: 'Deploy advanced machine learning models for real-time fraud detection, algorithmic trading, and personalized wealth management without compromising security.',
    features: [
      { name: 'Real-time Fraud Detection', icon: ShieldCheck },
      { name: 'Algorithmic Trading AI', icon: Activity },
      { name: 'Automated Risk Assessment', icon: Database }
    ]
  },
  {
    id: 'ecommerce',
    name: 'Retail & E-Commerce',
    icon: ShoppingBag,
    tagline: 'Hyper-personalized shopping experiences at scale.',
    color: 'from-purple-500 to-pink-500',
    description: 'Leverage deep learning to predict customer churn, optimize dynamic pricing models, and create intelligent recommendation engines that drive revenue.',
    features: [
      { name: 'Dynamic Pricing Engine', icon: Zap },
      { name: 'Churn Prediction Models', icon: Activity },
      { name: 'Hyper-Personalization', icon: HeartPulse }
    ]
  },
  {
    id: 'logistics',
    name: 'Supply Chain & Logistics',
    icon: Truck,
    tagline: 'AI-optimized routing and predictive supply forecasting.',
    color: 'from-amber-400 to-orange-500',
    description: 'Transform your logistics with AI that predicts supply chain disruptions, optimizes delivery routes in real-time, and automates warehouse inventory management.',
    features: [
      { name: 'Route Optimization', icon: Activity },
      { name: 'Predictive Forecasting', icon: Zap },
      { name: 'Automated Inventory', icon: Database }
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Database,
    tagline: 'AI-driven predictive maintenance and quality control.',
    color: 'from-slate-500 to-slate-700',
    description: 'Enhance your production lines with computer vision for defect detection and predictive models that foresee equipment failures before they happen.',
    features: [
      { name: 'Predictive Maintenance', icon: Zap },
      { name: 'Quality Control AI', icon: ShieldCheck },
      { name: 'Yield Optimization', icon: Activity }
    ]
  }
];

export default function Industries() {
  const location = useLocation();
  const initialHash = location.hash ? location.hash.replace('#', '') : null;
  const initialTab = industries.find(ind => ind.id === initialHash) ? initialHash! : industries[0].id;
  
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && industries.find(ind => ind.id === hash)) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  const activeIndustry = industries.find(ind => ind.id === activeTab) || industries[0];

  return (
    <AnimatedPage className="bg-slate-50 min-h-screen font-sans text-slate-900 relative dark:bg-[#010103] dark:text-white pt-32 pb-24 overflow-hidden">
      
      {/* Background glow for the whole page */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 dark:text-white"
          >
            AI Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055FF] to-[#00F0FF]">Every Industry</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto dark:text-slate-400"
          >
            Generic software doesn't cut it. We architect domain-specific AI models trained to solve the exact bottlenecks holding your industry back.
          </motion.p>
        </div>
      </section>

      {/* Main Interactive Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {industries.map((industry) => {
              const isActive = activeTab === industry.id;
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`relative flex items-center justify-between p-4 rounded-xl text-left transition-all ${
                    isActive 
                      ? 'bg-white shadow-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-900/50 text-slate-500 dark:text-slate-400 border border-transparent'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-[#0055FF] to-[#00F0FF]"
                    />
                  )}
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${isActive ? `bg-gradient-to-br ${industry.color} text-white` : 'bg-slate-200 dark:bg-slate-800'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-semibold ${isActive ? 'text-slate-900 dark:text-white' : ''}`}>
                      {industry.name}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90 text-[#0055FF] dark:text-[#00F0FF]' : 'opacity-0 -translate-x-4'}`} />
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-2xl relative overflow-hidden dark:bg-[#080B14] dark:border-slate-800/50"
              >
                {/* Decorative Background */}
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${activeIndustry.color} opacity-5 blur-[100px] rounded-full pointer-events-none`} />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold mb-6 border border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800">
                    <activeIndustry.icon className="w-4 h-4" />
                    {activeIndustry.name}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 dark:text-white">
                    {activeIndustry.tagline}
                  </h2>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-10 dark:text-slate-400">
                    {activeIndustry.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {activeIndustry.features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 dark:bg-slate-900/50 dark:border-slate-800 text-center">
                        <span className="font-semibold text-sm text-slate-900 dark:text-slate-200">
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

    </AnimatedPage>
  );
}
