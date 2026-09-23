import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 dark:text-white">
          Transform Your Operations
        </h2>
        <p className="text-slate-600 font-medium max-w-2xl mx-auto dark:text-slate-400 dark:font-mono">
          Drag the slider to see how Dibexa's AI solutions replace manual chaos with streamlined business excellence.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full aspect-square md:aspect-video max-h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none border border-slate-200 dark:border-slate-800"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        
        {/* === AFTER STATE (Bottom Layer - Right Side) === */}
        <div className="absolute inset-0 bg-[#05060A] flex items-center justify-center p-4 md:p-8 overflow-hidden">
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgzOHYzOEgxem0xIDM2aDM2VjJoLTM2eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] pointer-events-none opacity-20" />

          <div className="absolute top-4 right-4 md:top-6 md:right-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs md:text-sm rounded-md tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.3)] z-10 whitespace-nowrap dark:text-black">
            After: Dibexa AI Engine
          </div>

          {/* After Application Window */}
          <div className="w-full max-w-4xl aspect-[4/3] md:aspect-[16/9] bg-[#020204]/90 backdrop-blur-xl border border-[#0055FF]/40 shadow-[0_0_50px_rgba(0,85,255,0.2)] flex flex-col rounded-2xl overflow-hidden relative z-10">
             {/* Window Header */}
             <div className="h-10 md:h-12 bg-white/5 border-b border-[#0055FF]/20 flex items-center px-4 justify-between shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[#00F0FF] font-bold text-[10px] md:text-sm font-mono uppercase tracking-widest shadow-sm">AI Engine Live</div>
             </div>
             
             {/* Window Content */}
             <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-hidden">
                <div className="flex justify-between items-center shrink-0">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-sm shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                      <span className="text-emerald-400 font-bold text-xs md:text-sm tracking-wide">System Status: 99.9% Optimal</span>
                   </div>
                   <div className="text-cyan-400 font-mono text-[10px] md:text-xs shadow-sm">Processing Time: 1.2s</div>
                </div>

                <div className="flex-1 border border-[#0055FF]/30 rounded-xl bg-[#010103]/50 p-4 md:p-6 flex flex-col justify-end gap-2 overflow-hidden relative shadow-inner min-h-0">
                   
                   {/* Background Glow */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-[#0055FF]/20 blur-[80px] rounded-full pointer-events-none" />

                   <div className="flex justify-between items-end h-full relative z-10 gap-1 md:gap-2">
                      {[30, 45, 25, 60, 40, 75, 50, 90, 65, 85, 45, 70].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end h-full">
                          <motion.div 
                            initial={{ height: '10%' }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 2, delay: i * 0.05, ease: "easeOut" }}
                            className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm shadow-[0_0_10px_rgba(0,240,255,0.3)] opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                          />
                        </div>
                      ))}
                   </div>
                   
                   {/* Bottom X-axis line */}
                   <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0055FF] to-transparent mt-1 md:mt-2 opacity-50 shrink-0" />
                </div>
             </div>
          </div>
        </div>

        {/* === BEFORE STATE (Top Layer, Clipped - Left Side) === */}
        <div 
          className="absolute inset-0 bg-slate-200 flex items-center justify-center p-4 md:p-8 overflow-hidden border-r-2 border-slate-400"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          
          <div className="absolute top-4 left-4 md:top-6 md:left-6 px-4 py-2 bg-slate-300 text-slate-700 font-bold text-xs md:text-sm rounded-md tracking-widest uppercase border border-slate-400 z-10 whitespace-nowrap">
            Before: Manual Processing
          </div>

          {/* Before Application Window */}
          <div className="w-full max-w-4xl aspect-[4/3] md:aspect-[16/9] bg-white border border-slate-300 shadow-2xl flex flex-col rounded-md overflow-hidden relative z-10">
             {/* Window Header */}
             <div className="h-10 md:h-12 bg-slate-100 border-b border-slate-300 flex items-center px-4 justify-between shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
                <div className="text-slate-500 font-bold text-[10px] md:text-sm font-sans truncate ml-4">spreadsheet_final_v4.xls</div>
             </div>
             
             {/* Window Content */}
             <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-hidden">
                <div className="flex justify-between items-center shrink-0">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-sm" />
                      <span className="text-red-600 font-bold text-xs md:text-sm">System Status: Critical Errors Found</span>
                   </div>
                   <div className="text-slate-500 font-mono text-[10px] md:text-xs">Processing Time: 14 hrs</div>
                </div>

                <div className="flex-1 border border-slate-300 rounded bg-slate-50 p-1 md:p-2 flex flex-col gap-1 overflow-hidden min-h-0">
                   {/* Fake Table Header */}
                   <div className="flex gap-1 mb-1 md:mb-2 shrink-0">
                     <div className="h-4 md:h-6 bg-slate-200 w-1/4 rounded-sm" />
                     <div className="h-4 md:h-6 bg-slate-200 w-1/4 rounded-sm" />
                     <div className="h-4 md:h-6 bg-slate-200 w-1/4 rounded-sm" />
                     <div className="h-4 md:h-6 bg-slate-200 w-1/4 rounded-sm" />
                   </div>
                   {/* Fake Table Rows */}
                   {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                     <div key={i} className={`flex gap-1 shrink-0 ${i === 2 || i === 5 ? 'bg-red-100 border border-red-300' : ''}`}>
                       <div className="h-6 md:h-8 bg-white w-1/4 rounded-sm flex items-center px-2 border border-slate-200">
                         <div className="h-1.5 md:h-2 bg-slate-200 w-3/4 rounded" />
                       </div>
                       <div className="h-6 md:h-8 bg-white w-1/4 rounded-sm flex items-center px-2 border border-slate-200">
                         <div className="h-1.5 md:h-2 bg-slate-200 w-1/2 rounded" />
                       </div>
                       <div className="h-6 md:h-8 bg-white w-1/4 rounded-sm flex items-center px-2 border border-slate-200">
                         <div className="h-1.5 md:h-2 bg-slate-200 w-2/3 rounded" />
                       </div>
                       <div className="h-6 md:h-8 bg-white w-1/4 rounded-sm flex items-center px-2 border border-slate-200">
                         {i === 2 || i === 5 ? (
                           <span className="text-red-500 text-[8px] md:text-[10px] font-bold">MANUAL REVIEW</span>
                         ) : (
                           <div className="h-1.5 md:h-2 bg-slate-200 w-1/3 rounded" />
                         )}
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* === SLIDER HANDLE === */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-20 hover:w-1.5 transition-all shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="w-8 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-slate-200 text-slate-800 pointer-events-none">
             <div className="flex gap-1">
               <div className="w-0.5 h-4 bg-slate-400 rounded-full" />
               <div className="w-0.5 h-4 bg-slate-400 rounded-full" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
