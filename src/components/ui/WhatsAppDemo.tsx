import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, CheckCheck, Smartphone } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  isTranslating?: boolean;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: '1', sender: 'user', text: 'SKU-4029 ka current stock check kar sakte ho western region warehouses mein?', time: '10:41 AM' },
];

export default function WhatsAppDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (demoStep === 0) {
      timeoutId = setTimeout(() => {
        setIsTyping(true);
        setDemoStep(1);
      }, 1500);
    } else if (demoStep === 1) {
      timeoutId = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: '2',
          sender: 'bot',
          text: 'Inventory check kar raha hu... 📦 SKU-4029: 1,420 units available hain. (Mumbai: 850, Pune: 570).',
          time: '10:41 AM'
        }]);
        setDemoStep(2);
      }, 2000);
    } else if (demoStep === 2) {
      timeoutId = setTimeout(() => {
        setMessages(prev => [...prev, {
          id: '3',
          sender: 'user',
          text: 'Great, Pune se 300 units Reliance account ke liye block kardo aur ERP mein log kar do.',
          time: '10:42 AM'
        }]);
        setDemoStep(3);
      }, 3000);
    } else if (demoStep === 3) {
      timeoutId = setTimeout(() => {
        setIsTyping(true);
        setDemoStep(4);
      }, 1000);
    } else if (demoStep === 4) {
      timeoutId = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: '4',
          sender: 'bot',
          text: '✅ Done. Reliance ke liye SKU-4029 ke 300 units reserve kar diye hain. ERP transaction ID #TXN-9028 successfully log ho gaya hai.',
          time: '10:42 AM'
        }]);
        setDemoStep(5);
      }, 2500);
    } else if (demoStep === 5) {
      // Loop the demo after a long pause
      timeoutId = setTimeout(() => {
        setMessages(INITIAL_MESSAGES);
        setDemoStep(0);
      }, 8000);
    }

    return () => clearTimeout(timeoutId);
  }, [demoStep]);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#010103] border-t border-slate-200/50 dark:border-[#0055FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* Left Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25D366]/10 text-[#25D366] rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-[#25D366]/20">
              <MessageCircle size={14} />
              Local Integration
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight dark:text-white leading-[1.1]">
              Manage Your Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-emerald-400">Via WhatsApp.</span>
            </h2>
            <p className="text-base text-slate-600 font-medium leading-relaxed dark:text-slate-400 dark:font-mono">
              You don't need to force your floor managers, sales team, or field staff to navigate complex ERP dashboards. We build custom NLP agents that connect directly to WhatsApp or Slack, allowing seamless, on-the-go enterprise management.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Advanced Natural Language Processing (NLP)",
                "Directly reads/writes to your existing database",
                "Secure, encrypted, and SOC2 compliant",
                "Triggers automated workflows instantly"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300 dark:font-mono">
                  <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                    <CheckCheck size={12} className="text-[#25D366]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative mx-auto w-full max-w-[340px]">
            {/* Ambient Cinematic Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] bg-[#25D366]/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-400/20 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative bg-[#0b141a] rounded-[40px] border-[8px] border-slate-900 shadow-2xl shadow-[#25D366]/10 overflow-hidden h-[600px] flex flex-col z-10">
              
              {/* WhatsApp Header */}
              <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 border-b border-[#2a3942] z-10 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center p-0.5">
                   <div className="w-full h-full bg-[#111b21] rounded-full flex items-center justify-center">
                     <Smartphone size={18} className="text-cyan-400" />
                   </div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm">Dibexa Inventory AI</div>
                  <div className="text-[#8696a0] text-xs font-medium">Online</div>
                </div>
              </div>

              {/* Chat Area */}
              <div 
                ref={chatContainerRef}
                className="flex-1 p-4 overflow-y-auto bg-[#0b141a] space-y-4 relative no-scrollbar scroll-smooth" 
                style={{ backgroundImage: 'radial-gradient(#2a3942 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              >
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={cn(
                        "max-w-[85%] rounded-lg p-2.5 text-sm shadow-sm relative",
                        msg.sender === 'user' 
                          ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none ml-auto" 
                          : "bg-[#202c33] text-[#e9edef] rounded-tl-none mr-auto"
                      )}
                    >
                      <div className="font-medium pr-10">{msg.text}</div>
                      <div className="text-[10px] text-[#8696a0] text-right mt-1 flex justify-end items-center gap-1">
                        {msg.time}
                        {msg.sender === 'user' && <CheckCheck size={14} className="text-[#53bdeb]" />}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-[#202c33] text-[#8696a0] rounded-lg rounded-tl-none p-3 max-w-fit flex gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" />
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="bg-[#202c33] p-3 flex items-center gap-2">
                <div className="flex-1 bg-[#2a3942] rounded-full h-10 px-4 text-sm text-[#8696a0] flex items-center">
                  Message...
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white cursor-pointer hover:bg-[#008f6f] transition-colors">
                  <Send size={18} className="ml-1" />
                </div>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
