import { motion } from 'framer-motion';
import { Search, MapPin, GraduationCap, TrendingUp, TrendingDown, Target, Building } from 'lucide-react';

export default function CutOffMockup() {
  const colleges = [
    { name: "College of Engineering, Pune (COEP)", branch: "Computer Science", prob: 94, trend: "up", cutoff: "99.82" },
    { name: "VJTI Mumbai", branch: "Information Tech", prob: 88, trend: "up", cutoff: "99.45" },
    { name: "Pune Institute of Computer Technology", branch: "Computer Engg", prob: 72, trend: "down", cutoff: "99.10" },
    { name: "Sardar Patel Institute of Technology", branch: "Data Science", prob: 45, trend: "down", cutoff: "99.25" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200/80 bg-white flex flex-col dark:bg-[#05060A]/90 dark:border-[#0055FF]/30 dark:shadow-[0_20px_50px_-15px_rgba(0,85,255,0.3)]">
      
      {/* App Header */}
      <div className="h-16 bg-slate-900 flex items-center justify-between px-6 dark:bg-[#020204] dark:border-b dark:border-[#0055FF]/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center dark:bg-[#00F0FF]/20">
            <Target size={16} className="text-white dark:text-[#00F0FF]" />
          </div>
          <span className="font-bold text-white tracking-tight">CutOff Guide AI</span>
        </div>
        
        <div className="flex-1 max-w-md mx-8 relative hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Predict admission chances for..." 
            className="w-full bg-slate-800 border-none rounded-lg py-2 pl-9 pr-4 text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-[#010103] dark:border dark:border-white/10"
            readOnly
          />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-white">Student Profile</span>
            <span className="text-[10px] text-blue-300 font-mono">MHT-CET: 99.40 %ile</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-blue-500 overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1 p-6 gap-6 bg-slate-50 dark:bg-transparent">
        
        {/* Left Sidebar - Filters */}
        <div className="w-full md:w-64 space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm dark:bg-[#020204] dark:border-[#0055FF]/20">
            <h3 className="font-bold text-slate-800 mb-4 dark:text-white">Prediction Filters</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-1 block dark:text-slate-400">Location</label>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200 dark:bg-black/50 dark:border-white/10">
                  <MapPin size={14} className="text-blue-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Pune, Mumbai</span>
                </div>
              </div>
              
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-1 block dark:text-slate-400">Target Branches</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs rounded-md dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/50">Computer Engg</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs rounded-md dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/50">Information Tech</span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md shadow-blue-500/20 dark:bg-[#0055FF] dark:hover:bg-[#00F0FF] dark:text-white transition-colors">
              Update Prediction
            </button>
          </div>
        </div>

        {/* Right Content - Predictions Table */}
        <div className="flex-1 flex flex-col space-y-4">
          
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">AI Admission Probability</h2>
            <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold font-mono dark:bg-emerald-900/30 dark:text-emerald-400">
              BASED ON PREV 5 YEARS DATA
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex-1 dark:bg-[#020204] dark:border-[#0055FF]/20">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-500 dark:bg-slate-900/50 dark:border-white/10 dark:text-slate-400">
                  <th className="p-4">College</th>
                  <th className="p-4">Branch</th>
                  <th className="p-4">Exp. Cutoff</th>
                  <th className="p-4">Probability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {colleges.map((college, idx) => (
                  <motion.tr 
                    key={college.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="hover:bg-slate-50 transition-colors dark:hover:bg-white/5"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 dark:bg-slate-800">
                          <Building size={14} className="text-slate-600 dark:text-slate-400" />
                        </div>
                        <span className="font-bold text-slate-800 text-sm dark:text-slate-200">{college.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <GraduationCap size={14} className="text-slate-400" />
                        {college.branch}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm font-bold text-slate-700 dark:text-slate-300">
                      {college.cutoff}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800">
                          <div 
                            className={`h-full ${college.prob > 80 ? 'bg-emerald-500' : college.prob > 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                            style={{ width: `${college.prob}%` }}
                          />
                        </div>
                        <div className="flex items-center gap-1 w-12 justify-end font-mono text-sm font-bold">
                          {college.prob}%
                          {college.trend === 'up' 
                            ? <TrendingUp size={14} className="text-emerald-500" />
                            : <TrendingDown size={14} className="text-red-500" />
                          }
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
