import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('dibexa-cookie-consent');
    if (!hasConsented) {
      // Delay showing the banner so it's not too aggressive
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dibexa-cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('dibexa-cookie-consent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[100]"
        >
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200/80 p-5 rounded-2xl shadow-2xl shadow-blue-900/10 dark:bg-[#05060A]/95 dark:border-[#0055FF]/30 dark:shadow-[0_20px_50px_-15px_rgba(0,85,255,0.3)]">
            <button 
              onClick={handleDecline}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X size={16} />
            </button>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 dark:bg-[#0055FF]/10">
                <Cookie size={20} className="text-blue-600 dark:text-[#00F0FF]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">We respect your privacy</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  We use cookies to optimize our platform and provide personalized enterprise AI insights. 
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={handleAccept}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-lg transition-colors dark:bg-[#00F0FF] dark:text-black dark:hover:bg-[#00F0FF]/80"
                  >
                    Accept All
                  </button>
                  <button 
                    onClick={handleDecline}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2 rounded-lg transition-colors dark:bg-[#010103] dark:text-slate-300 dark:border dark:border-[#0055FF]/30 dark:hover:bg-white/5"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
