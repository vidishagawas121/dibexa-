import { motion } from 'framer-motion';
import { Mic, Video, MonitorUp, PhoneOff, CheckCircle2, AlertCircle, Sparkles, UserCircle2 } from 'lucide-react';

export default function DGBrainMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200/80 bg-slate-100/50 backdrop-blur-xl flex flex-col dark:bg-[#05060A]/90 dark:border-[#0055FF]/30 dark:shadow-[0_20px_50px_-15px_rgba(0,85,255,0.3)]">
      
      {/* App Header */}
      <div className="h-14 bg-white border-b border-slate-200/80 flex items-center justify-between px-6 dark:bg-[#010103] dark:border-[#0055FF]/30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center dark:from-[#00F0FF] dark:to-[#0055FF]">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="font-bold text-slate-800 tracking-tight dark:text-white">DG Brain Interviewer</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
          SESSION ID: INT-8894-A
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-[450px] flex-1">
        
        {/* Main Video Area */}
        <div className="flex-1 p-4 flex flex-col relative">
          <div className="flex-1 rounded-2xl bg-slate-800 relative overflow-hidden flex items-center justify-center shadow-inner dark:bg-black/80 dark:border dark:border-white/5">
            {/* Fake Video Feed (User Icon) */}
            <UserCircle2 size={120} className="text-slate-600/50 dark:text-white/10" />
            
            {/* Overlay AI Scanning Box */}
            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: [0, 150, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-[10%] right-[10%] top-[20%] h-32 border-2 border-cyan-400/50 rounded-xl bg-cyan-400/10 dark:border-[#00F0FF]/50 dark:bg-[#00F0FF]/10"
            />
            
            {/* Face Mesh Points */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                Eye Track: Aligned
              </span>
              <span className="px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                ATTENTION: 98%
              </span>
            </div>

            {/* Transcription Overlay */}
            <div className="absolute bottom-6 inset-x-12 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center">
              <span className="text-white/90 font-medium text-sm">
                "...yes, I have extensive experience building scalable microservices using Docker and Kubernetes in my previous role..."
              </span>
            </div>
          </div>
          
          {/* Video Controls */}
          <div className="flex justify-center gap-4 mt-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              <Mic size={20} />
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              <Video size={20} />
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              <MonitorUp size={20} />
            </div>
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
              <PhoneOff size={20} />
            </div>
          </div>
        </div>

        {/* Right Sidebar - AI Analysis */}
        <div className="w-full md:w-80 bg-white border-l border-slate-200/80 p-5 overflow-y-auto dark:bg-[#020204] dark:border-[#0055FF]/30">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 dark:text-slate-400">
            Live AI Analysis
          </div>

          <div className="space-y-6">
            {/* Technical Score */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold text-slate-800 dark:text-white">Technical Proficiency</span>
                <span className="text-lg font-black text-blue-600 dark:text-[#00F0FF]">85/100</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: '85%' }} 
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-[#0055FF] dark:to-[#00F0FF]"
                />
              </div>
            </div>

            {/* Keyword Extraction */}
            <div>
              <span className="text-sm font-bold text-slate-800 mb-2 block dark:text-white">Detected Keywords</span>
              <div className="flex flex-wrap gap-2">
                {['Microservices', 'Docker', 'Kubernetes', 'Scalability'].map(kw => (
                  <span key={kw} className="px-2 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono rounded-md dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-500/30">
                    <CheckCircle2 size={10} className="inline mr-1" />{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Sentiment & Soft Skills */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 dark:bg-slate-900/50 dark:border-white/10">
              <span className="text-sm font-bold text-slate-800 dark:text-white">Behavioral Insights</span>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 dark:text-slate-400">Confidence</span>
                <span className="font-mono text-emerald-600 font-bold dark:text-emerald-400">High</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 dark:text-slate-400">Clarity</span>
                <span className="font-mono text-blue-600 font-bold dark:text-blue-400">Very Good</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 dark:text-slate-400">Hesitation</span>
                <span className="font-mono text-amber-500 font-bold dark:text-amber-400 flex items-center gap-1">
                  <AlertCircle size={12} /> Detected
                </span>
              </div>
            </div>
            
            <div className="pt-2 text-[10px] text-center text-slate-400 font-mono dark:text-slate-500">
              AI INFERENCE RUNNING AT 45ms LATENCY
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
