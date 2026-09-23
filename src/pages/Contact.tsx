import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyConfig } from '../data/company';
import Button from '../components/ui/Button';
import { fadeUpVariants } from '../lib/motion';
import AnimatedPage from '../components/layout/AnimatedPage';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const activeFadeUp = shouldReduceMotion ? undefined : fadeUpVariants;

  // Form State
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Company: '',
    Service: 'Generative AI Integration',
    Message: ''
  });

  // Validation Errors State
  const [errors, setErrors] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Message: ''
  });

  // 1. Full Name Validation: No numbers, no punctuation. Only alphabets and spaces.
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Regex allows only uppercase/lowercase letters and spaces
    if (/[^a-zA-Z\s]/.test(value)) {
      setErrors(prev => ({ ...prev, Name: 'Only alphabets and spaces are allowed.' }));
      // Filter out invalid characters so they can't even type them
      setFormData(prev => ({ ...prev, Name: value.replace(/[^a-zA-Z\s]/g, '') }));
    } else {
      setErrors(prev => ({ ...prev, Name: '' }));
      setFormData(prev => ({ ...prev, Name: value }));
    }
  };

  // 2. Email Validation: Must have @ and . (Checked on blur/leave)
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, Email: e.target.value }));
    // Clear error while typing
    if (errors.Email) setErrors(prev => ({ ...prev, Email: '' }));
  };

  const handleEmailBlur = () => {
    if (formData.Email && (!formData.Email.includes('@') || !formData.Email.includes('.'))) {
      setErrors(prev => ({ ...prev, Email: 'Valid corporate email requires "@" and "."' }));
    }
  };

  // 3. Phone Validation: No alphabets, max 15 digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Strip everything except numbers and plus sign (optional at start)
    if (/[^0-9+]/.test(value)) {
      setErrors(prev => ({ ...prev, Phone: 'Only numbers are allowed.' }));
    } else {
      setErrors(prev => ({ ...prev, Phone: '' }));
    }
    
    // Clean and enforce 15 digit max length
    const cleanValue = value.replace(/[^0-9+]/g, '').slice(0, 15);
    setFormData(prev => ({ ...prev, Phone: cleanValue }));
  };

  // 4. Message Validation: At least 10 words
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, Message: e.target.value }));
    if (errors.Message) setErrors(prev => ({ ...prev, Message: '' }));
  };

  const handleMessageBlur = () => {
    const wordCount = formData.Message.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (formData.Message && wordCount < 10) {
      setErrors(prev => ({ ...prev, Message: `At least 10 words required. You have ${wordCount}.` }));
    }
  };

  // Generic change handler for uncontrolled/unvalidated fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    // Run final validation check before allowing native submit
    let hasError = false;
    const newErrors = { ...errors };

    if (!formData.Name) { newErrors.Name = 'Name is required'; hasError = true; }
    if (!formData.Email || (!formData.Email.includes('@') || !formData.Email.includes('.'))) { 
      newErrors.Email = 'Valid corporate email requires "@" and "."'; 
      hasError = true; 
    }
    if (!formData.Phone) { newErrors.Phone = 'Phone is required'; hasError = true; }
    
    const wordCount = formData.Message.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount < 10) {
      newErrors.Message = `At least 10 words required. You have ${wordCount}.`;
      hasError = true;
    }

    if (hasError) {
      // Prevent the form from submitting to Google App Script if there are validation errors
      e.preventDefault();
      setErrors(newErrors);
      return;
    }

    // If valid, allow native HTML form submission to hidden_iframe and show success UI
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form
      setFormData({
        Name: '', Email: '', Phone: '', Company: '', Service: 'Generative AI Integration', Message: ''
      });
    }, 1000);
  };

  return (
    <AnimatedPage className="bg-slate-50 min-h-screen font-sans text-slate-900 overflow-hidden relative dark:bg-[#010103] dark:text-white pt-24 pb-16">
      <Helmet>
        <title>Contact Dibexa | Enterprise AI Startup</title>
        <meta name="description" content="Get in touch with Dibexa Infotech Pvt. Ltd. to discuss enterprise AI engineering and automation solutions." />
      </Helmet>

      {/* Aurora Background Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[60%] bg-cyan-300/20 blur-[120px] rounded-full pointer-events-none dark:bg-[#00F0FF]/10 dark:blur-[150px]" />
      <div className="absolute top-[40%] right-[-10%] w-[40%] h-[50%] bg-blue-400/15 blur-[120px] rounded-full pointer-events-none dark:bg-[#8A2BE2]/10 dark:blur-[150px]" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 bg-slate-100 overflow-hidden border-b border-slate-200/60 dark:bg-[#020204] dark:border-[#0055FF]/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/dibexa-hq.jpg" 
            alt="City Vista, Kharadi, Pune - Dibexa Headquarters" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-transparent dark:from-[#010103]/95 dark:via-[#010103]/80 dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent opacity-90 dark:from-[#010103]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="max-w-3xl space-y-6"
          >
            <motion.div variants={activeFadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 border border-slate-200 rounded-full text-xs font-bold tracking-widest uppercase text-blue-600 shadow-sm backdrop-blur-md dark:bg-[#00F0FF]/10 dark:border-[#00F0FF]/30 dark:text-[#00F0FF] dark:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse dark:bg-[#00F0FF]" />
              HQ: PUNE, INDIA
            </motion.div>
            <motion.h1 variants={activeFadeUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] dark:text-white">
              Let's engineer your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2]">
                AI infrastructure.
              </span>
            </motion.h1>
            <motion.p variants={activeFadeUp} className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl font-medium dark:text-slate-300 dark:font-mono">
              We operate out of City Vista in Kharadi, Pune's premier IT hub. Reach out to discuss how we can integrate deterministic AI systems into your enterprise operations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Contact Information (Left Side) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 space-y-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:bg-[#05060A]/80 dark:border-[#0055FF]/30 dark:shadow-[0_10px_30px_-15px_rgba(0,85,255,0.2)]">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">Direct Contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform dark:bg-[#00F0FF]/10 dark:border-[#00F0FF]/40">
                        <Mail className="text-blue-600 dark:text-[#00F0FF]" size={22} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 mb-1 dark:text-white">Email Us</p>
                        <a href={`mailto:${companyConfig.email}`} className="text-slate-600 hover:text-blue-600 font-medium transition-colors dark:text-slate-400 dark:hover:text-[#00F0FF]">
                          {companyConfig.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform dark:bg-[#8A2BE2]/10 dark:border-[#8A2BE2]/40">
                        <Phone className="text-emerald-600 dark:text-[#8A2BE2]" size={22} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 mb-1 dark:text-white">Call Us</p>
                        <a href={`tel:${(companyConfig.phone || '').replace(/[^0-9+]/g, '')}`} className="text-slate-600 hover:text-emerald-600 font-medium transition-colors dark:text-slate-400 dark:hover:text-[#8A2BE2]">
                          {companyConfig.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:bg-[#05060A]/80 dark:border-[#8A2BE2]/30 dark:shadow-[0_10px_30px_-15px_rgba(138,43,226,0.2)]">
                <h3 className="text-xl font-bold text-slate-900 mb-4 dark:text-white">Headquarters</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 dark:bg-[#00F0FF]/10 dark:border-[#00F0FF]/40">
                    <MapPin className="text-cyan-600 dark:text-[#00F0FF]" size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1 dark:text-white">Dibexa Infotech Pvt. Ltd.</p>
                    <p className="text-slate-600 leading-relaxed font-medium dark:text-slate-400">
                      {companyConfig.headquarters}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0 dark:bg-slate-800 dark:border-slate-700">
                    <Clock className="text-violet-600 dark:text-white" size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1 dark:text-white">Engineering Hours</p>
                    <p className="text-slate-600 font-medium dark:text-slate-400">Monday - Friday<br/>9:30 AM - 6:30 PM (IST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google App Script Contact Form (Right Side) */}
            <div className="lg:col-span-7">
              <div className="bg-white/90 backdrop-blur-2xl border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 relative overflow-hidden dark:bg-[#030408]/90 dark:border-[#0055FF]/20 dark:shadow-[0_0_30px_rgba(0,85,255,0.1)]">
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-300/10 blur-[80px] rounded-full pointer-events-none dark:bg-[#00F0FF]/5" />

                <div className="mb-8 relative z-10">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight dark:text-white">Initiate Project</h2>
                  <p className="text-slate-600 font-medium dark:text-slate-400">Submit your requirements and our engineering leads will respond within 24 hours.</p>
                </div>

                {/* Hidden iframe to prevent page redirect upon form submission */}
                <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>

                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-4 relative z-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 dark:bg-[#00F0FF]/10 dark:border-[#00F0FF]/40">
                      <CheckCircle2 size={40} className="text-emerald-500 dark:text-[#00F0FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Request Submitted Successfully</h3>
                    <p className="text-slate-600 max-w-md mx-auto dark:text-slate-400">
                      Thank you for reaching out. We have received your details and our technical team will contact you shortly.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      Send Another Request
                    </Button>
                  </motion.div>
                ) : (
                  <form 
                    action="https://script.google.com/macros/s/AKfycbyj10i0a5-mI4_XvIIPg-XbWk-Y00O909Bf2F-yQjTf9Z5P5h3wW0zJ3sF4E1U_PzYI/exec" 
                    method="POST" 
                    target="hidden_iframe"
                    onSubmit={handleSubmitClick}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-slate-900 dark:text-slate-300">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="Name"
                          required
                          value={formData.Name}
                          onChange={handleNameChange}
                          className={`w-full bg-white border ${errors.Name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm dark:bg-[#010103] dark:text-white dark:placeholder-slate-600 ${errors.Name ? 'dark:border-red-500' : 'dark:border-slate-700 dark:focus:ring-[#00F0FF]'}`}
                          placeholder="John Doe"
                        />
                        {errors.Name && (
                          <div className="flex items-center gap-1.5 text-xs text-red-500 font-bold dark:text-red-400">
                            <AlertCircle size={12} />
                            {errors.Name}
                          </div>
                        )}
                      </div>
                      
                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-slate-900 dark:text-slate-300">Corporate Email *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="Email"
                          required
                          value={formData.Email}
                          onChange={handleEmailChange}
                          onBlur={handleEmailBlur}
                          className={`w-full bg-white border ${errors.Email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm dark:bg-[#010103] dark:text-white dark:placeholder-slate-600 ${errors.Email ? 'dark:border-red-500' : 'dark:border-slate-700 dark:focus:ring-[#00F0FF]'}`}
                          placeholder="john@company.com"
                        />
                        {errors.Email && (
                          <div className="flex items-center gap-1.5 text-xs text-red-500 font-bold dark:text-red-400">
                            <AlertCircle size={12} />
                            {errors.Email}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-900 dark:text-slate-300">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="Phone"
                          required
                          value={formData.Phone}
                          onChange={handlePhoneChange}
                          className={`w-full bg-white border ${errors.Phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm dark:bg-[#010103] dark:text-white dark:placeholder-slate-600 ${errors.Phone ? 'dark:border-red-500' : 'dark:border-slate-700 dark:focus:ring-[#00F0FF]'}`}
                          placeholder="+91 9876543210"
                        />
                        {errors.Phone && (
                          <div className="flex items-center gap-1.5 text-xs text-red-500 font-bold dark:text-red-400">
                            <AlertCircle size={12} />
                            {errors.Phone}
                          </div>
                        )}
                      </div>
                      
                      {/* Company Name (No specific validation required) */}
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-bold text-slate-900 dark:text-slate-300">Company Name</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="Company"
                          value={formData.Company}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm dark:bg-[#010103] dark:border-slate-700 dark:text-white dark:placeholder-slate-600 dark:focus:ring-[#00F0FF]"
                          placeholder="Organization Ltd."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-sm font-bold text-slate-900 dark:text-slate-300">Primary Area of Interest</label>
                      <select 
                        id="service" 
                        name="Service"
                        value={formData.Service}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm appearance-none dark:bg-[#010103] dark:border-slate-700 dark:text-white dark:focus:ring-[#00F0FF]"
                      >
                        <option value="Generative AI Integration">Generative AI Integration</option>
                        <option value="Autonomous AI Agents">Autonomous AI Agents</option>
                        <option value="Computer Vision Solutions">Computer Vision Solutions</option>
                        <option value="Process Automation (RPA)">Process Automation (RPA)</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Other">Other Strategic Initiative</option>
                      </select>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <label htmlFor="message" className="block text-sm font-bold text-slate-900 dark:text-slate-300">Project Details *</label>
                        <span className="text-[10px] font-mono text-slate-400">Min 10 words</span>
                      </div>
                      <textarea 
                        id="message" 
                        name="Message"
                        required
                        rows={5}
                        value={formData.Message}
                        onChange={handleMessageChange}
                        onBlur={handleMessageBlur}
                        className={`w-full bg-white border ${errors.Message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm resize-none dark:bg-[#010103] dark:text-white dark:placeholder-slate-600 ${errors.Message ? 'dark:border-red-500' : 'dark:border-slate-700 dark:focus:ring-[#00F0FF]'}`}
                        placeholder="Briefly describe your operational bottlenecks and technical requirements..."
                      ></textarea>
                      {errors.Message && (
                        <div className="flex items-center gap-1.5 text-xs text-red-500 font-bold dark:text-red-400">
                          <AlertCircle size={12} />
                          {errors.Message}
                        </div>
                      )}
                    </div>

                    <Button type="submit" variant="primary" className="w-full justify-center py-4 text-base bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/20 hover:opacity-90 dark:from-[#00F0FF] dark:via-[#0055FF] dark:to-[#8A2BE2] dark:shadow-[0_0_20px_rgba(0,85,255,0.4)] dark:font-mono dark:tracking-widest">
                      Submit Secure Request
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                    <p className="text-center text-xs text-slate-500 mt-4 dark:text-slate-400">
                      Your information is transmitted securely and will never be shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
