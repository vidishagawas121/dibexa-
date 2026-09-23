import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, BarChart3, Settings, ShieldAlert, Cpu, Send } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

type IndustryPrompt = {
  id: string;
  label: string;
  icon: LucideIcon;
  prompt: string;
  responseType: 'chart' | 'alert' | 'code';
};

const PROMPTS: IndustryPrompt[] = [
  {
    id: 'logistics',
    label: 'Logistics',
    icon: BarChart3,
    prompt: 'Analyze Q3 shipping routes for inefficiencies and visualize cost savings.',
    responseType: 'chart',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: ShieldAlert,
    prompt: 'Scan latest patient records for HIPAA compliance anomalies.',
    responseType: 'alert',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    icon: Settings,
    prompt: 'Predict assembly line downtime based on current IoT sensor data.',
    responseType: 'code',
  }
];

export default function InteractiveAIDemo() {
  const [activePromptId, setActivePromptId] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState<IndustryPrompt | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handlePromptClick = (id: string) => {
    if (activePromptId === id || isThinking) return;
    
    setActivePromptId(null);
    setCustomPrompt(null);
    setIsThinking(true);
    
    setTimeout(() => {
      setIsThinking(false);
      setActivePromptId(id);
    }, 1500);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isThinking) return;
    
    setActivePromptId(null);
    setCustomPrompt(null);
    setIsThinking(true);
    
    const lowerInput = inputValue.toLowerCase();
    let rType: 'chart' | 'alert' | 'code' = 'alert';
    if (lowerInput.includes('chart') || lowerInput.includes('plot') || lowerInput.includes('graph') || lowerInput.includes('visualize')) {
      rType = 'chart';
    } else if (lowerInput.includes('code') || lowerInput.includes('function') || lowerInput.includes('script') || lowerInput.includes('predict')) {
      rType = 'code';
    }

    setTimeout(() => {
      setIsThinking(false);
      setCustomPrompt({
        id: 'custom',
        label: 'Custom Query',
        icon: User,
        prompt: inputValue,
        responseType: rType
      });
      setInputValue('');
    }, 1500);
  };

  const selectedPrompt = customPrompt || PROMPTS.find(p => p.id === activePromptId);
  const activePrompt = selectedPrompt?.id;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200/80 bg-white/80 backdrop-blur-xl dark:bg-[#05060A]/90 dark:border-[#0055FF]/30 dark:shadow-[0_20px_50px_-15px_rgba(0,85,255,0.3)]">
      
      {/* Fake macOS style window header */}
      <div className="h-10 border-b border-slate-200/80 bg-slate-100/50 flex items-center px-4 gap-2 dark:bg-[#020204]/80 dark:border-[#0055FF]/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400 dark:bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400 dark:bg-emerald-500/80" />
        </div>
        <div className="mx-auto text-[10px] font-mono tracking-widest text-slate-400 dark:text-[#00F0FF]/50 uppercase font-bold">
          Dibexa Enterprise Inference Engine
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[500px]">
        {/* Left Sidebar - Prompts */}
        <div className="w-full md:w-64 border-r border-slate-200/80 bg-slate-50/50 p-4 space-y-3 dark:bg-[#010103]/50 dark:border-[#0055FF]/20 relative">
          
          {/* New Live Demo Indicator */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 dark:from-[#0055FF] dark:to-[#00F0FF] dark:text-black mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Interactive Live Demo</span>
          </div>

          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4 pt-3 dark:text-[#8A2BE2]">
            Select Industry Demo
          </div>
          
          {PROMPTS.map((p) => {
            const Icon = p.icon as LucideIcon;
            return (
              <button
                key={p.id}
                onClick={() => handlePromptClick(p.id)}
                disabled={isThinking}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 border",
                  (activePrompt === p.id || (isThinking && !activePrompt)) 
                    ? "bg-white border-blue-200 shadow-sm text-blue-700 dark:bg-[#0055FF]/10 dark:border-[#00F0FF]/40 dark:text-[#00F0FF] dark:shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                    : "bg-transparent border-transparent text-slate-600 hover:bg-white hover:border-slate-200 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:border-white/10"
                )}
              >
                <Icon size={18} className={activePrompt === p.id ? "text-blue-600 dark:text-[#00F0FF]" : "text-slate-400"} />
                <span className="font-semibold text-sm">{p.label}</span>
              </button>
            );
          })}
          
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-[#0055FF]/20">
             <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-[#00F0FF]">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               Engine Online
             </div>
          </div>
        </div>

        {/* Right Chat/Display Area */}
        <div className="flex-1 p-6 relative bg-white dark:bg-transparent overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            {!activePrompt && !isThinking ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-6"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-xl animate-pulse dark:bg-[#00F0FF]/10" />
                  <Cpu size={56} className="text-blue-500/50 dark:text-[#00F0FF]/50 relative" />
                </div>
                <div className="text-center space-y-2">
                  <p className="font-mono text-lg font-bold text-slate-600 dark:text-slate-300">Dibexa Inference Engine Ready</p>
                  <p className="text-sm">Click a demo on the left to see it in action</p>
                </div>
                <motion.div 
                  animate={{ x: [-10, 0, -10] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="hidden md:flex items-center gap-2 text-blue-500 dark:text-[#00F0FF]"
                >
                  <span className="text-2xl">←</span>
                  <span className="text-sm font-semibold uppercase tracking-wider">Try it out</span>
                </motion.div>
              </motion.div>
            ) : isThinking ? (
              <motion.div 
                key="thinking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center space-y-6"
              >
                <div className="w-16 h-16 relative flex items-center justify-center">
                   <div className="absolute inset-0 rounded-full border-2 border-slate-100 dark:border-[#0055FF]/20" />
                   <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600 dark:border-t-[#00F0FF] animate-spin" />
                   <Bot size={24} className="text-blue-600 dark:text-[#00F0FF]" />
                </div>
                <div className="font-mono text-sm text-blue-600 animate-pulse tracking-widest dark:text-[#00F0FF]">
                  SYNTHESIZING DATA...
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col h-full space-y-6 pb-20 overflow-y-auto"
              >
                {/* User Prompt */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 dark:bg-white/10">
                    <User size={16} className="text-slate-600 dark:text-white" />
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl rounded-tl-none text-sm font-medium text-slate-700 shadow-sm dark:bg-[#020204] dark:border-[#0055FF]/30 dark:text-slate-200">
                    {selectedPrompt?.prompt}
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 dark:from-[#00F0FF] dark:to-[#0055FF] dark:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <p className="text-sm text-slate-600 font-medium dark:text-slate-300">
                      Analysis complete. Here is the visualized output based on the requested parameters.
                    </p>
                    
                    {/* Simulated Dynamic Output */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-inner dark:bg-[#020204] dark:border-[#0055FF]/20">
                      
                      {selectedPrompt?.responseType === 'chart' && (
                        <div className="space-y-4">
                          <div className="flex items-end gap-2 h-32 pt-4">
                            {[40, 70, 45, 90, 65, 85].map((h, i) => (
                              <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm dark:from-[#0055FF] dark:to-[#00F0FF]"
                              />
                            ))}
                          </div>
                          <div className="flex justify-between text-[10px] font-mono text-slate-400 font-bold">
                            <span>ROUTE A</span>
                            <span>ROUTE B</span>
                            <span>ROUTE C</span>
                            <span>ROUTE D</span>
                            <span>ROUTE E</span>
                            <span>ROUTE F</span>
                          </div>
                        </div>
                      )}

                      {selectedPrompt?.responseType === 'alert' && (
                        <div className="space-y-3">
                          <motion.div 
                            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                            className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 dark:bg-red-950/20 dark:border-red-500/30"
                          >
                            <ShieldAlert size={18} className="text-red-500 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-bold text-red-700 dark:text-red-400">Compliance Anomaly Detected</div>
                              <div className="text-xs text-red-600/80 mt-1 dark:text-red-400/80">3 patient records missing mandatory consent signatures in Ward B. Automatic flag applied.</div>
                            </div>
                          </motion.div>
                          <motion.div 
                            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                            className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3 dark:bg-emerald-950/20 dark:border-emerald-500/30"
                          >
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">ALL OTHER DEPARTMENTS: 100% COMPLIANT</div>
                          </motion.div>
                        </div>
                      )}

                      {selectedPrompt?.responseType === 'code' && (
                        <div className="font-mono text-xs overflow-hidden rounded bg-slate-900 p-3 text-slate-300 dark:bg-black dark:border dark:border-[#0055FF]/30">
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                            <span className="text-pink-400">def</span> <span className="text-blue-400">predict_downtime</span>(sensor_data):<br/>
                            &nbsp;&nbsp;model = load_model(<span className="text-emerald-400">'factory_v2.pt'</span>)<br/>
                            &nbsp;&nbsp;risk_score = model.predict(sensor_data)<br/>
                            &nbsp;&nbsp;<span className="text-pink-400">if</span> risk_score &gt; <span className="text-orange-400">0.85</span>:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;trigger_maintenance_alert(zone=<span className="text-emerald-400">"Assembly_4"</span>)<br/>
                            &nbsp;&nbsp;<span className="text-pink-400">return</span> risk_score<br/>
                            <br/>
                            <span className="text-slate-500"># Output: 0.92 (High Risk: Assembly_4 motor vibration anomaly)</span>
                          </motion.div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Custom Input Area */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-200/80 dark:bg-[#020204]/80 dark:border-[#0055FF]/20">
            <form onSubmit={handleCustomSubmit} className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Dibexa Enterprise AI..."
                disabled={isThinking}
                className="w-full bg-slate-50 border border-slate-200 rounded-full px-5 py-3 pr-12 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm disabled:opacity-50 dark:bg-[#010103] dark:border-slate-700 dark:text-white dark:focus:ring-[#00F0FF]"
              />
              <button
                type="submit"
                disabled={isThinking || !inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white disabled:opacity-50 transition-colors hover:bg-blue-700 dark:bg-[#00F0FF] dark:text-black dark:hover:bg-[#00F0FF]/80"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
