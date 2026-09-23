import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { allServices } from '../data/services';
import Button from '../components/ui/Button';
import { 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Network,
  ShieldCheck
} from 'lucide-react';
import { 
  fadeUpVariants, 
  heroContainerVariants, 
  imageRevealVariants 
} from '../lib/motion';
import AnimatedPage from '../components/layout/AnimatedPage';

// Visual mode metadata mapping for distinct representation
interface VisualModeInfo {
  modeName: string;
  modeCategory: string;
  telemetry: string[];
}

const visualModes: Record<string, VisualModeInfo> = {
  'generative-ai': {
    modeName: 'MODE F / EDITORIAL COMPUTATIONAL',
    modeCategory: 'Multimodal Latent Space & Attention Graphs',
    telemetry: ['Transformer Embeddings', 'Context Windowing', 'Safe Output Filtering']
  },
  'ai-agents': {
    modeName: 'MODE D / NETWORK & REASONING GRAPH',
    modeCategory: 'Agentic Planning & Autonomous Orchestration',
    telemetry: ['Multi-Agent State Graph', 'Dynamic Tool Execution', 'Deterministic Fallbacks']
  },
  'conversational-ai': {
    modeName: 'MODE F / EDITORIAL COMPUTATIONAL',
    modeCategory: 'Intent Disambiguation & Dialogue State Tracking',
    telemetry: ['Multi-Turn Reasoning', 'Entity Resolution', 'API Bridge Connectors']
  },
  'computer-vision': {
    modeName: 'MODE E / REAL-WORLD SPATIAL RECOGNITION',
    modeCategory: 'Optical Edge Inference & Surface Telemetry',
    telemetry: ['Sub-Millimeter Detection', 'Spatial Segmentation', 'Edge TPU Latency']
  },
  'custom-ai-applications': {
    modeName: 'MODE A / TECHNICAL ARCHITECTURE',
    modeCategory: 'Full-Stack Model Engineering & System Integrations',
    telemetry: ['Microservice Gateway', 'Encrypted VPC Boundary', 'Continuous CI/CD']
  },
  'rag-systems': {
    modeName: 'MODE D / KNOWLEDGE RETRIEVAL TOPOLOGY',
    modeCategory: 'Vector Similarity Indexing & Semantic Re-ranking',
    telemetry: ['HNSW Vector Search', 'Cosine Distance Metrics', 'Source Grounding']
  },
  'model-finetuning': {
    modeName: 'MODE F / EDITORIAL COMPUTATIONAL',
    modeCategory: 'Parameter-Efficient Weights & Domain Adaptation',
    telemetry: ['LoRA / QLoRA Adapters', 'Quantization Gradients', 'Privacy Isolation']
  },
  'ai-workflow-automation': {
    modeName: 'MODE C / ANALYTICAL VISUALIZATION',
    modeCategory: 'Dynamic Decision Trees & Event-Driven Routing',
    telemetry: ['Asynchronous Event Bus', 'Exception Routing Nodes', 'Human-in-the-Loop']
  },
  'document-intelligence': {
    modeName: 'MODE E / REAL-WORLD SPATIAL RECOGNITION',
    modeCategory: 'Multimodal OCR & Key-Value Hierarchy Extraction',
    telemetry: ['Coordinate Layout Parsing', 'Dense Table Ingestion', 'Schema Mapping']
  },
  'mlops': {
    modeName: 'MODE A / TECHNICAL ARCHITECTURE',
    modeCategory: 'Production Serving, Continuous Retraining & Telemetry',
    telemetry: ['Automated Model Registry', 'Drift Monitoring Hooks', 'Zero-Downtime Rollouts']
  },
  'predictive-analytics': {
    modeName: 'MODE B / DATA VISUALIZATION',
    modeCategory: 'Time-Series Multivariate Forecasts & Anomaly Scoring',
    telemetry: ['Confidence Intervals', 'Seasonal Decomposition', 'Dynamic Regression']
  },
  'ai-strategy': {
    modeName: 'MODE F / EDITORIAL COMPUTATIONAL',
    modeCategory: 'Enterprise Governance, ROI Benchmarking & Roadmapping',
    telemetry: ['Feasibility Matrix', 'Compliance Assessment', 'Capital Efficiency']
  },
  'ai-governance': {
    modeName: 'MODE A / TECHNICAL ARCHITECTURE',
    modeCategory: 'Model Red-Teaming, Bias Guardrails & Audit Frameworks',
    telemetry: ['Regulatory Adherence', 'Differential Privacy', 'Audit Ledger']
  }
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = allServices.find(s => s.slug === slug);
  const shouldReduceMotion = useReducedMotion();

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const activeHeroVariants = shouldReduceMotion ? undefined : heroContainerVariants;
  const activeFadeUp = shouldReduceMotion ? undefined : fadeUpVariants;
  const activeImageReveal = shouldReduceMotion ? undefined : imageRevealVariants;

  const modeInfo = visualModes[service.slug] || {
    modeName: 'MODE A / TECHNICAL ARCHITECTURE',
    modeCategory: 'Enterprise Intelligence Infrastructure',
    telemetry: ['Production Protocols', 'Continuous Reliability', 'Enterprise Security']
  };

  return (
    <AnimatedPage className="bg-white min-h-screen dark:bg-[#010103] dark:text-white">
      <Helmet>
        <title>{service.title} | Dibexa Infotech Pvt. Ltd.</title>
        <meta name="description" content={`Dibexa Infotech implements ${service.title} capabilities designed to accelerate business execution.`} />
      </Helmet>

      {/* ============================================================
          01 — HERO COMPOSITION: SERVICE TITLE + SERVICE VISUAL TOGETHER
          ============================================================ */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-slate-50 border-b border-slate-200/50 overflow-hidden dark:bg-[#020204]/80 dark:border-[#0055FF]/20">
        {/* Aurora Background Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-cyan-300/30 blur-[100px] rounded-full pointer-events-none dark:bg-[#00F0FF]/10 dark:blur-[150px]" />
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[70%] bg-violet-400/20 blur-[100px] rounded-full pointer-events-none dark:bg-[#8A2BE2]/10 dark:blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Hero Title & Value Proposition */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={activeHeroVariants} 
              className="lg:col-span-6 space-y-6"
            >
              <motion.div variants={activeFadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] rounded text-xs font-bold tracking-widest uppercase dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <Network size={14} />
                <span>{modeInfo.modeName}</span>
              </motion.div>
              
              <motion.h1 variants={activeFadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-brand-navy)] tracking-tight leading-[1.1] dark:text-white">
                {service.title}.
              </motion.h1>
              
              <motion.p variants={activeFadeUp} className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed text-balance dark:text-slate-400 dark:font-mono">
                {service.description}
              </motion.p>

              <motion.div variants={activeFadeUp} className="flex flex-wrap items-center gap-4 pt-2">
                <Button as={Link} to="/contact" variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/20 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_20px_rgba(0,85,255,0.4)] dark:font-mono dark:tracking-widest">
                  Talk to Dibexa
                </Button>
                <div className="text-xs font-mono text-[var(--color-text-secondary)] dark:text-slate-500">
                  ENGINEERED FOR PRODUCTION SCALE
                </div>
              </motion.div>

              {/* Technical Mode Telemetry Pill List */}
              <motion.div variants={activeFadeUp} className="pt-4 border-t border-[var(--color-border-light)] flex flex-wrap gap-2 dark:border-slate-800">
                {modeInfo.telemetry.map((item, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 bg-white border border-[var(--color-border-light)] text-[var(--color-brand-navy)] rounded font-semibold dark:bg-[#020204] dark:border-[#0055FF]/30 dark:text-slate-300">
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Hero Bespoke Visual (Visible Immediately on Load) */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={activeImageReveal}
              className="lg:col-span-6"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[var(--color-border-light)] bg-[var(--color-brand-navy)] group dark:border-[#0055FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,85,255,0.4)]">
                <div className="aspect-[16/11] relative overflow-hidden">
                  {service.id === 'ai-workflow-automation' ? (
                    <div className="absolute inset-0 w-full h-full bg-slate-950 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                        <line x1="15%" y1="50%" x2="40%" y2="50%" stroke="#00F0FF" strokeWidth="2" opacity="0.5" strokeDasharray="4 2" />
                        <line x1="40%" y1="50%" x2="65%" y2="25%" stroke="#00F0FF" strokeWidth="2" opacity="0.5" strokeDasharray="4 2" />
                        <line x1="40%" y1="50%" x2="65%" y2="75%" stroke="#00F0FF" strokeWidth="2" opacity="0.5" strokeDasharray="4 2" />
                        <line x1="65%" y1="25%" x2="88%" y2="50%" stroke="#00F0FF" strokeWidth="2" opacity="0.5" strokeDasharray="4 2" />
                        <line x1="65%" y1="75%" x2="88%" y2="50%" stroke="#00F0FF" strokeWidth="2" opacity="0.5" strokeDasharray="4 2" />
                      </svg>
                      
                      <div className="absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 border border-cyan-500/50 bg-slate-900 text-cyan-300 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.2)] z-10 tracking-widest whitespace-nowrap">INGEST</div>
                      
                      <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 border border-cyan-500/50 bg-slate-900 text-cyan-300 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.2)] z-10 tracking-widest whitespace-nowrap">AI EXTRACT</div>
                      
                      <div className="absolute top-[25%] left-[65%] -translate-x-1/2 -translate-y-1/2 border border-emerald-500/50 bg-slate-900 text-emerald-300 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(16,185,129,0.2)] z-10 tracking-widest whitespace-nowrap">AUTO APPROVE</div>
                      
                      <div className="absolute top-[75%] left-[65%] -translate-x-1/2 -translate-y-1/2 border border-amber-500/50 bg-slate-900 text-amber-300 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(245,158,11,0.2)] z-10 tracking-widest whitespace-nowrap">HUMAN REVIEW</div>
                      
                      <div className="absolute top-1/2 left-[88%] -translate-x-1/2 -translate-y-1/2 border border-blue-500/50 bg-slate-900 text-blue-300 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(59,130,246,0.2)] z-10 tracking-widest whitespace-nowrap">ERP SUBMIT</div>
                    </div>
                  ) : service.id === 'predictive-analytics' ? (
                    <div className="absolute inset-0 w-full h-full bg-slate-950 flex items-center justify-center p-6">
                      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="none">
                        <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

                        <polyline points="0,80% 20%,60% 40%,70% 60%,40%" fill="none" stroke="#00F0FF" strokeWidth="3" />
                        
                        <polyline points="60%,40% 80%,20% 100%,30%" fill="none" stroke="#8A2BE2" strokeWidth="3" strokeDasharray="6 4" />
                        
                        <polygon points="60%,40% 80%,10% 100%,15% 100%,45% 80%,35% 60%,40%" fill="rgba(138,43,226,0.15)" />
                      </svg>
                      
                      <div className="absolute top-[60%] left-[20%] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)] -translate-x-1/2 -translate-y-1/2" />
                      <div className="absolute top-[70%] left-[40%] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)] -translate-x-1/2 -translate-y-1/2" />
                      
                      <div className="absolute top-[40%] left-[60%] w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      </div>
                      
                      <div className="absolute top-[20%] left-[80%] w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] -translate-x-1/2 -translate-y-1/2" />
                      
                      <div className="absolute bottom-[20%] left-[30%] text-cyan-300 text-[10px] sm:text-xs font-mono bg-slate-900/80 px-2 py-1 rounded border border-cyan-500/30 whitespace-nowrap shadow-sm">HISTORICAL TREND</div>
                      <div className="absolute top-[10%] left-[80%] text-red-400 text-[10px] sm:text-xs font-mono bg-slate-900/80 px-2 py-1 rounded border border-red-500/30 -translate-x-1/2 whitespace-nowrap shadow-sm">ANOMALY DETECTED</div>
                      <div className="absolute top-[35%] left-[85%] text-[#D8B4FE] text-[10px] sm:text-xs font-mono bg-slate-900/80 px-2 py-1 rounded border border-[#8A2BE2]/50 shadow-[0_0_10px_rgba(138,43,226,0.2)] whitespace-nowrap">98% FORECAST CONFIDENCE</div>
                    </div>
                  ) : service.id === 'mlops' ? (
                    <div className="absolute inset-0 w-full h-full bg-slate-950 flex items-center justify-center p-6">
                      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                        {/* Main pipeline flow */}
                        <line x1="15%" y1="45%" x2="35%" y2="45%" stroke="#00F0FF" strokeWidth="2" opacity="0.5" strokeDasharray="4 2" />
                        <line x1="35%" y1="45%" x2="55%" y2="45%" stroke="#00F0FF" strokeWidth="2" opacity="0.5" strokeDasharray="4 2" />
                        <line x1="55%" y1="45%" x2="75%" y2="45%" stroke="#00F0FF" strokeWidth="2" opacity="0.5" strokeDasharray="4 2" />
                        
                        {/* Telemetry Loop back */}
                        <polyline points="75%,48% 75%,75% 45%,75%" fill="none" stroke="#EF4444" strokeWidth="2" opacity="0.5" strokeDasharray="4 4" />
                        <polyline points="45%,75% 15%,75% 15%,48%" fill="none" stroke="#EF4444" strokeWidth="2" opacity="0.5" strokeDasharray="4 4" />
                        
                        {/* Auto-scaling connection */}
                        <line x1="75%" y1="28%" x2="75%" y2="42%" stroke="#00F0FF" strokeWidth="1.5" opacity="0.4" strokeDasharray="2 2" />
                      </svg>
                      
                      <div className="absolute top-[45%] left-[15%] -translate-x-1/2 -translate-y-1/2 border border-slate-600 bg-slate-800 text-slate-300 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md shadow-[0_0_10px_rgba(255,255,255,0.05)] z-10 tracking-widest whitespace-nowrap">CODE / DATA</div>
                      
                      <div className="absolute top-[45%] left-[35%] -translate-x-1/2 -translate-y-1/2 border border-blue-500/50 bg-slate-900 text-blue-300 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(59,130,246,0.2)] z-10 tracking-widest whitespace-nowrap">CI/CD PIPELINE</div>
                      
                      <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 border border-emerald-500/50 bg-slate-900 text-emerald-300 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(16,185,129,0.2)] z-10 tracking-widest whitespace-nowrap">MODEL REGISTRY</div>
                      
                      <div className="absolute top-[45%] left-[75%] -translate-x-1/2 -translate-y-1/2 border border-cyan-500/50 bg-slate-900 text-cyan-300 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.2)] z-10 tracking-widest whitespace-nowrap">PROD SERVING</div>
                      
                      <div className="absolute top-[75%] left-[45%] -translate-x-1/2 -translate-y-1/2 border border-red-500/50 bg-slate-900 text-red-300 text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-md shadow-[0_0_15px_rgba(239,68,68,0.2)] z-10 tracking-widest whitespace-nowrap">DRIFT MONITORING</div>
                      
                      <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 text-cyan-400 text-[9px] sm:text-[10px] font-mono border border-cyan-500/30 bg-slate-900 px-2 py-1 rounded-md z-10 whitespace-nowrap">AUTO-SCALING CLUSTER</div>
                    </div>
                  ) : service.id === 'custom-ai-applications' ? (
                    <div className="absolute inset-0 w-full h-full bg-slate-950 flex flex-col p-6">
                      <div className="flex-1 w-full h-full border border-slate-700/50 rounded-lg bg-slate-900 overflow-hidden flex flex-col shadow-2xl relative">
                        {/* Browser Header */}
                        <div className="h-6 bg-slate-800/80 border-b border-slate-700/50 flex items-center px-3 gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                          <div className="w-2 h-2 rounded-full bg-amber-500/80"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-500/80"></div>
                        </div>
                        
                        {/* App Body */}
                        <div className="flex-1 flex p-4 gap-4 relative">
                           {/* Sidebar */}
                           <div className="w-1/4 h-full border border-slate-700/50 bg-slate-800/50 rounded flex flex-col gap-2 p-2">
                             <div className="h-2 w-full bg-slate-700/50 rounded"></div>
                             <div className="h-2 w-3/4 bg-slate-700/50 rounded"></div>
                             <div className="h-2 w-5/6 bg-slate-700/50 rounded"></div>
                           </div>
                           
                           {/* Main Content */}
                           <div className="flex-1 h-full flex flex-col gap-4 relative">
                             {/* Top metrics */}
                             <div className="flex gap-4 h-12">
                               <div className="flex-1 border border-cyan-500/30 bg-cyan-500/5 rounded p-2 flex flex-col justify-between">
                                  <div className="text-[8px] font-mono text-cyan-400">LATENCY</div>
                                  <div className="text-[10px] font-mono text-white">45ms</div>
                               </div>
                               <div className="flex-1 border border-emerald-500/30 bg-emerald-500/5 rounded p-2 flex flex-col justify-between">
                                  <div className="text-[8px] font-mono text-emerald-400">API CALLS</div>
                                  <div className="text-[10px] font-mono text-white">1.2M</div>
                               </div>
                             </div>
                             
                             {/* Central Model Box */}
                             <div className="flex-1 border border-[#8A2BE2]/40 bg-[#8A2BE2]/10 rounded flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDE5LjVoMjBNMTkuNSAwdi0yMCIgc3Ryb2tlPSJyZ2JhKDEzOCw0MywyMjYsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-50" />
                                <div className="z-10 flex flex-col items-center gap-2">
                                  <div className="p-3 bg-slate-900 border border-[#8A2BE2]/50 rounded-full shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                                    <Network size={20} className="text-[#D8B4FE]" />
                                  </div>
                                  <div className="text-[10px] sm:text-xs font-mono text-[#D8B4FE] bg-slate-900/80 px-2 py-1 rounded shadow-sm text-center">AI INFERENCE ENGINE</div>
                                </div>
                             </div>
                           </div>
                        </div>
                        
                        {/* Overlay connecting lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
                          <line x1="28%" y1="60%" x2="42%" y2="60%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                          <circle cx="28%" cy="60%" r="3" fill="#00F0FF" />
                          <circle cx="42%" cy="60%" r="3" fill="#00F0FF" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={service.image || '/images/sf-ai-engineering.jpg'} 
                      alt={`${service.title} Bespoke Visual`} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy)] via-transparent to-transparent pointer-events-none dark:from-[#010103]" />
                </div>

                {/* Inlaid Visual Mode Label Overlay */}
                <div className="p-4 md:p-5 bg-[var(--color-brand-navy)] text-white border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[var(--color-brand-cyan)] uppercase block">
                      ARCHITECTURAL VISUALIZATION
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-white/90">
                      {modeInfo.modeCategory}
                    </span>
                  </div>
                  <ShieldCheck size={18} className="text-[var(--color-brand-cyan)] shrink-0" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ============================================================
          02 — MAIN CONTENT ARCHITECTURE: STRATEGY, CAPABILITIES & Sidebar
          ============================================================ */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Premium Architecture Blueprint Visualization */}
              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden dark:bg-[#030408] dark:border-[#0055FF]/30">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBNMzkuNSAwdi00MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-20" />
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full dark:bg-[#00F0FF]/10" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <Layers className="text-cyan-400 dark:text-[#00F0FF]" size={24} />
                      <h2 className="text-2xl font-bold text-white tracking-tight">
                        Architecture Blueprint
                      </h2>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-500/80 uppercase border border-cyan-500/20 px-2 py-1 rounded dark:border-[#00F0FF]/30 dark:text-[#00F0FF]">
                      Live Topology
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-slate-300 text-sm leading-relaxed font-mono opacity-90">
                      Implementing {service.title} requires architectural foresight. We build resilient systems that eliminate technical debt and provide unconstrained throughput.
                    </div>

                    {/* Animated Data Pipeline Flow */}
                    <div className="relative mt-8 py-4">
                       <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700 -translate-y-1/2" />
                       <motion.div 
                         initial={{ scaleX: 0 }} 
                         animate={{ scaleX: 1 }} 
                         transition={{ duration: 2, repeat: Infinity }}
                         className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent -translate-y-1/2 origin-left" 
                       />
                       
                       <div className="relative flex justify-between">
                          {service.capabilities?.slice(0, 3).map((cap, i) => (
                            <motion.div 
                              key={i}
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ delay: i * 0.2 }}
                              className="w-1/3 px-2 flex flex-col items-center text-center"
                            >
                              <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 z-10 mb-3 shadow-[0_0_10px_rgba(34,211,238,0.5)] dark:border-[#00F0FF]" />
                              <div className="bg-slate-800/80 backdrop-blur border border-slate-700 text-white text-xs font-bold p-3 rounded-lg w-full max-w-[140px] dark:bg-[#05060A] dark:border-[#0055FF]/40">
                                {cap}
                              </div>
                            </motion.div>
                          ))}
                       </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Practical Applications */}
              {service.useCases && service.useCases.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-brand-navy)] mb-6 border-b border-[var(--color-border-light)] pb-4 dark:text-white dark:border-slate-800">
                    Operational Applications
                  </h2>
                  <div className="space-y-3">
                    {service.useCases.map((useCase, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 border border-[var(--color-border-light)] rounded bg-[var(--color-surface)] hover:border-[var(--color-brand-blue)] transition-colors dark:bg-[#020204] dark:border-[#0055FF]/20 dark:hover:border-[#00F0FF]/40">
                        <CheckCircle2 className="text-[var(--color-brand-blue)] shrink-0 mt-0.5 dark:text-[#00F0FF]" size={18} />
                        <span className="text-base text-[var(--color-brand-navy)] font-medium dark:text-slate-300">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
            
            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-8 sticky top-28">
              
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 shadow-xl shadow-blue-900/5 dark:bg-[#05060A]/90 dark:border-[#0055FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,85,255,0.2)]">
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200/80 pb-4 dark:text-white dark:border-slate-800">
                  Engineering Engagement
                </h3>
                <div className="space-y-4 mb-8 text-slate-600 text-sm dark:text-slate-400">
                  <div>
                    <strong className="block text-slate-900 mb-1 dark:text-slate-300">Target Architecture</strong>
                    Scalable microservices, low latency, and secure cloud/on-prem deployments.
                  </div>
                  <div>
                    <strong className="block text-[var(--color-brand-navy)] mb-1 dark:text-slate-300">Delivery Model</strong>
                    Dedicated engineering pods, deterministic milestones, and end-to-end testing.
                  </div>
                </div>
                <Button as={Link} to="/contact" className="w-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 dark:bg-gradient-to-r dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_20px_rgba(0,85,255,0.4)] dark:font-mono">
                  Discuss Requirements
                </Button>
              </div>

              {service.industries && service.industries.length > 0 && (
                <div className="bg-white border border-[var(--color-border-light)] rounded p-8 dark:bg-[#020204] dark:border-[#0055FF]/20">
                  <h3 className="text-lg font-bold text-[var(--color-brand-navy)] mb-3 dark:text-white">
                    Commonly Integrated Sectors
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mb-4 dark:text-slate-500">
                    This capability is actively deployed across these industries:
                  </p>
                  <ul className="space-y-2.5">
                    {service.industries.map((ind, i) => (
                      <li key={i}>
                        <Link to="/industries" className="flex items-center justify-between text-sm py-1 group">
                          <span className="text-[var(--color-brand-navy)] font-semibold group-hover:text-[var(--color-brand-blue)] transition-colors dark:text-slate-300 dark:group-hover:text-[#00F0FF]">
                            {ind}
                          </span>
                          <ArrowUpRight size={15} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-blue)] transition-colors dark:text-slate-500 dark:group-hover:text-[#00F0FF]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>


      {/* ============================================================
          03 — FINAL SERVICE CTA
          ============================================================ */}
      <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200/50 text-center dark:bg-[#020204]/80 dark:border-[#0055FF]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-500/5 pointer-events-none dark:from-[#00F0FF]/5 dark:to-[#8A2BE2]/5" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[80%] bg-blue-300/20 blur-[120px] rounded-full pointer-events-none dark:bg-[#0055FF]/20 dark:blur-[150px]" />
        
        <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight dark:text-white">
            Architect {service.title} for Your Enterprise
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
            Work with our engineering team to design, build, and deploy an intelligent system tailored to your exact operational requirements.
          </p>
          <div className="pt-6">
            <Button as={Link} to="/contact" variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/20 px-10 py-4 hover:opacity-90 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_20px_rgba(0,85,255,0.4)] dark:font-mono dark:tracking-widest">
              Talk to Dibexa
            </Button>
          </div>
        </div>
      </section>

    </AnimatedPage>
  );
}
