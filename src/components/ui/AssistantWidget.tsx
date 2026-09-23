import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

export default function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am the Dibexa AI Assistant. How can I help you engineer your enterprise solutions today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = "I'd love to give you a specific answer. We engineer custom AI solutions ranging from local business automation to enterprise-grade predictive models. Could you tell me a bit more about your industry or the specific challenge you're facing?";
      
      const lowerInput = userMessage.toLowerCase();
      
      // MNC / Enterprise queries
      if (lowerInput.includes('compliance') || lowerInput.includes('soc2') || lowerInput.includes('hipaa') || lowerInput.includes('security')) {
        response = "For enterprise and MNC clients, security is our top priority. All our AI deployments are SOC2 and HIPAA compliant, featuring air-gapped options and zero external data retention to protect your proprietary assets.";
      } else if (lowerInput.includes('region') || lowerInput.includes('global') || lowerInput.includes('scale')) {
        response = "Our architecture supports multi-region, distributed deployments tailored for global MNCs, ensuring low-latency inference and high availability across your worldwide operations.";
      } 
      // SME / Mid-market queries
      else if (lowerInput.includes('erp') || lowerInput.includes('crm') || lowerInput.includes('integrate')) {
        response = "We can seamlessly integrate custom AI workflows directly into your existing ERP or CRM systems (like SAP, Salesforce, or Oracle) to automate data entry, reconciliation, and customer management for your growing business.";
      } else if (lowerInput.includes('customer service') || lowerInput.includes('chatbot') || lowerInput.includes('support')) {
        response = "We build intelligent, context-aware conversational agents that ingest your internal knowledge base to provide highly accurate 24/7 support for your customers, dramatically reducing ticket resolution times.";
      }
      // Local Shop / Small Business queries
      else if (lowerInput.includes('small business') || lowerInput.includes('shop') || lowerInput.includes('local')) {
        response = "Absolutely! Even for local shops and small businesses, we can deploy lightweight, cost-effective AI solutions to automate your daily invoicing, inventory tracking, and customer inquiries, saving you hours of manual work every week.";
      } else if (lowerInput.includes('affordable') || lowerInput.includes('cheap') || lowerInput.includes('budget')) {
        response = "We offer scalable solutions. Whether you're a local retail shop needing a simple automation script or an MNC requiring a custom LLM, we can architect a solution that fits your specific budget and ROI requirements.";
      }
      // General queries
      else if (lowerInput.includes('help') || lowerInput.includes('benefit') || lowerInput.includes('overall') || lowerInput.includes('value') || lowerInput.includes('can you do')) {
        response = "Overall, Dibexa helps businesses streamline operations, reduce manual overhead, and unlock new revenue streams by implementing custom AI solutions—whether that's automating back-office tasks for a local shop or deploying secure, multi-region predictive models for an MNC.";
      } else if (lowerInput.includes('pricing') || lowerInput.includes('cost')) {
        response = "Our AI solutions are custom-engineered based on the scale and complexity of your infrastructure. Please reach out via the Contact page for a detailed consultation and quote.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
        response = "You can reach us at contact@dibexa.com or call us directly. Our HQ is located in City Vista, Kharadi, Pune.";
      } else if (lowerInput.includes('service') || lowerInput.includes('what do you do')) {
        response = "We engineer core AI systems, including multi-agent automation, cognitive systems (private LLMs), and scalable machine learning infrastructure.";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[320px] bg-white/90 backdrop-blur-2xl border border-slate-200/80 rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden flex flex-col dark:bg-[#030408]/95 dark:border-[#0055FF]/30 dark:shadow-[0_10px_40px_rgba(0,85,255,0.2)]"
            style={{ height: '400px' }}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-between text-white dark:from-[#0055FF] dark:to-[#8A2BE2]">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-bold text-sm">Dibexa Assistant</span>
                <span className="flex items-center gap-1 text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-slate-50/50 dark:bg-transparent">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200 dark:bg-white/10' : 'bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-[#00F0FF] dark:to-[#0055FF]'}`}>
                    {msg.role === 'user' ? <User size={12} className="text-slate-600 dark:text-white" /> : <Sparkles size={12} className="text-white" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm dark:bg-[#0055FF]' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm dark:bg-[#05060A] dark:border-[#0055FF]/20 dark:text-slate-200'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 self-start max-w-[85%]">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0 dark:from-[#00F0FF] dark:to-[#0055FF]">
                    <Sparkles size={12} className="text-white" />
                  </div>
                  <div className="p-4 rounded-2xl rounded-tl-sm bg-white border border-slate-200 flex items-center gap-1 shadow-sm dark:bg-[#05060A] dark:border-[#0055FF]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-200/80 dark:bg-[#020204] dark:border-[#0055FF]/20">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-2 pr-10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-[#010103] dark:border-slate-700 dark:text-white dark:focus:ring-[#00F0FF]"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 text-white disabled:opacity-50 hover:bg-blue-700 transition-colors dark:bg-[#00F0FF] dark:text-black dark:hover:bg-[#00F0FF]/80"
                >
                  <Send size={12} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {hasUnread && !isOpen && (
          <div className="absolute -top-12 right-0 whitespace-nowrap px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded shadow-lg animate-bounce pointer-events-none before:content-[''] before:absolute before:-bottom-1 before:right-5 before:border-4 before:border-transparent before:border-t-slate-900 dark:bg-white dark:text-slate-900 dark:before:border-t-white">
            Need help? Ask AI!
          </div>
        )}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setHasUnread(false);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/20 flex items-center justify-center hover:shadow-2xl hover:shadow-blue-500/30 transition-shadow dark:from-[#00F0FF] dark:to-[#0055FF] dark:shadow-[0_0_20px_rgba(0,240,255,0.3)] relative"
        >
          {hasUnread && !isOpen && (
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white dark:border-[#020204]"></span>
            </span>
          )}
          <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
