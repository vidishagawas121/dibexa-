import { useState } from 'react';
import { IndianRupee, TrendingUp, Clock, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  const [monthlyLaborCost, setMonthlyLaborCost] = useState(50000); // Default 50k INR
  const [hoursSpent, setHoursSpent] = useState(160); // Default 160 hours

  // Basic estimation logic
  const estimatedSavings = Math.round(monthlyLaborCost * 0.65); // 65% cost savings
  const estimatedTimeSaved = Math.round(hoursSpent * 0.80); // 80% time savings

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-[#020204]">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none dark:bg-[#0055FF]/10 dark:blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-100/50 blur-[100px] rounded-full pointer-events-none dark:bg-[#00F0FF]/5 dark:blur-[120px]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6 dark:bg-[#0055FF]/10 dark:text-[#00F0FF]">
            <Calculator size={32} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-white">
            Estimate Your ROI
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto font-medium dark:text-slate-400 dark:font-mono">
            See how much time and money your business can save by automating manual tasks with our custom AI solutions.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          
          {/* Input Controls */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-xl shadow-blue-900/5 space-y-10 dark:bg-[#05060A] dark:border-[#0055FF]/30 dark:shadow-[0_10px_40px_-15px_rgba(0,85,255,0.2)]">
            
            {/* Labor Cost Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-slate-900 dark:text-white dark:font-mono uppercase tracking-wide">
                  Current Monthly Labor Cost
                </label>
                <div className="text-xl font-extrabold text-blue-600 dark:text-[#00F0FF] flex items-center">
                  <IndianRupee size={20} className="mr-1" />
                  {monthlyLaborCost.toLocaleString('en-IN')}
                </div>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="500000" 
                step="5000"
                value={monthlyLaborCost} 
                onChange={(e) => setMonthlyLaborCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-slate-800 dark:accent-[#00F0FF]"
              />
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>₹10,000 (Local Shop)</span>
                <span>₹5,00,000+ (MNC)</span>
              </div>
            </div>

            {/* Hours Spent Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-slate-900 dark:text-white dark:font-mono uppercase tracking-wide">
                  Manual Hours Spent / Month
                </label>
                <div className="text-xl font-extrabold text-blue-600 dark:text-[#00F0FF]">
                  {hoursSpent} hrs
                </div>
              </div>
              <input 
                type="range" 
                min="20" 
                max="1000" 
                step="10"
                value={hoursSpent} 
                onChange={(e) => setHoursSpent(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-slate-800 dark:accent-[#00F0FF]"
              />
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>20 hrs</span>
                <span>1000+ hrs</span>
              </div>
            </div>

          </div>

          {/* Output Results / Visual Chart with Aura */}
          <div className="relative h-full">
            {/* Cinematic Aura Glow behind the dark card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none dark:bg-[#0055FF]/20" />
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden dark:bg-[#05060A] dark:border-[#0055FF]/30 dark:shadow-[0_10px_40px_-15px_rgba(0,85,255,0.2)] h-full z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
            
            <div className="relative z-10 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6 font-mono">12-Month Projection</h3>
              
              {/* Chart Area */}
              <div className="flex-1 flex items-end gap-2 sm:gap-4 mt-auto min-h-[200px] border-b border-slate-700/50 pb-2 relative">
                
                {/* Y-Axis markers */}
                <div className="absolute left-0 top-0 bottom-0 w-full flex flex-col justify-between pointer-events-none opacity-20">
                  <div className="border-t border-slate-500 border-dashed w-full" />
                  <div className="border-t border-slate-500 border-dashed w-full" />
                  <div className="border-t border-slate-500 border-dashed w-full" />
                </div>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
                  // Simulate exponential compound savings
                  const multiplier = Math.min(1 + (month * 0.1), 2.5);
                  const barHeight = Math.min((estimatedSavings * multiplier) / (estimatedSavings * 2.5) * 100, 100);
                  
                  return (
                    <div key={month} className="flex-1 flex flex-col items-center justify-end gap-2 h-full z-10 group">
                      {/* Tooltip on hover */}
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity shadow-lg border border-slate-700 z-20">
                        Month {month}: ₹{Math.round(estimatedSavings * multiplier).toLocaleString('en-IN')}
                      </div>
                      
                      {/* Bar */}
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${barHeight}%` }}
                        transition={{ duration: 0.5, delay: month * 0.05, type: 'spring', stiffness: 100 }}
                        className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity dark:from-[#0055FF] dark:to-[#00F0FF]"
                      />
                      {/* X-Axis label */}
                      <span className="text-[10px] text-slate-400 font-mono">M{month}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <TrendingUp size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">Est. Monthly</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center">
                  <IndianRupee size={24} className="mr-1" />
                  {estimatedSavings.toLocaleString('en-IN')}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <Clock size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">Hrs Saved</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {estimatedTimeSaved} <span className="text-base text-slate-400 font-normal">hrs</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        </motion.div>
      </div>
    </section>
  );
}
