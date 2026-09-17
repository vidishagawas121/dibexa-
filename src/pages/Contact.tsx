import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import { allServices } from '../data/services';
import { companyConfig } from '../data/company';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterestedIn: '',
    projectDetails: '',
    budgetRange: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [warnings, setWarnings] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === 'fullName') {
      finalValue = value.replace(/[^A-Za-z\s\-']/g, '');
      if (value !== finalValue) {
        setWarnings(prev => ({ ...prev, fullName: 'Please use letters only.' }));
      } else {
        setWarnings(prev => ({ ...prev, fullName: '' }));
      }
    } else if (name === 'phone') {
      finalValue = value.replace(/[^0-9]/g, '');
      if (value !== finalValue) {
        setWarnings(prev => ({ ...prev, phone: 'Please enter numbers only.' }));
      } else {
        setWarnings(prev => ({ ...prev, phone: '' }));
      }
    } else if (name === 'companyName') {
      finalValue = value.replace(/[^A-Za-z0-9\s\-&',.]/g, '');
      if (value !== finalValue) {
        setWarnings(prev => ({ ...prev, companyName: 'Please use standard letters, numbers, and punctuation.' }));
      } else {
        setWarnings(prev => ({ ...prev, companyName: '' }));
      }
    } else if (name === 'email') {
      finalValue = value.replace(/[^A-Za-z0-9@._\-+]/g, '');
      if (value !== finalValue) {
        setWarnings(prev => ({ ...prev, email: 'Spaces and invalid characters are not allowed in emails.' }));
      } else {
        if (warnings.email?.includes('Spaces')) {
          setWarnings(prev => ({ ...prev, email: '' }));
        } else if (warnings.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(finalValue)) {
          setWarnings(prev => ({ ...prev, email: '' }));
        }
      }
    } else if (name === 'projectDetails') {
      finalValue = value.replace(/[<>]/g, '');
      if (value !== finalValue) {
        setWarnings(prev => ({ ...prev, projectDetails: 'HTML tags (<, >) are not allowed.' }));
      } else {
        setWarnings(prev => ({ ...prev, projectDetails: '' }));
      }
    }

    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setWarnings(prev => ({ ...prev, email: 'Please enter a complete email address (e.g., name@company.com).' }));
    }
  };

  const handleSubmit = () => {
    // We DO NOT call e.preventDefault() here! We want the form to submit natively to the iframe.
    setIsSubmitting(true);

    // Assume success after a short delay since it's an iframe submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        fullName: '', companyName: '', email: '', phone: '',
        serviceInterestedIn: '', projectDetails: '', budgetRange: '', timeline: ''
      });
      setTimeout(() => setSubmitStatus('idle'), 7000);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Dibexa Infotech Pvt. Ltd.</title>
        <meta name="description" content="Engage our engineering teams to solve your most complex operational and technical challenges." />
      </Helmet>



      {/* Inquiry Form Section */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left: Statement & Contact Info */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <span className="text-[var(--color-brand-blue)] font-semibold tracking-[0.2em] uppercase text-xs mb-6 block">
                  Engagement
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-brand-navy)] tracking-tight mb-8 leading-tight">
                  Let's Build Something Useful.
                </h1>
                <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-16">
                  Initiate a technical discussion regarding your business requirements, infrastructure modernization, or enterprise engineering objectives.
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-primary)] mb-2">Corporate Headquarters</h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {companyConfig.headquarters.split(',').map((part, i, arr) => (
                        <span key={i}>
                          {part.trim()}
                          {i < arr.length - 1 ? (i === 0 ? <br /> : ', ') : ''}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-primary)] mb-2">Direct Inquiry</h3>
                    <p className="text-[var(--color-text-secondary)] mb-1">
                      <a href={`mailto:${companyConfig.email}`} className="hover:text-[var(--color-brand-blue)] transition-colors">{companyConfig.email}</a>
                    </p>
                    {companyConfig.phone && (
                      <p className="text-[var(--color-text-secondary)]">
                        <a href={`tel:${companyConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[var(--color-brand-blue)] transition-colors">{companyConfig.phone}</a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Premium Form */}
            <div className="lg:col-span-7">
              <div className="bg-[var(--color-surface-alt)] p-8 md:p-12 border border-[var(--color-border-light)]">

                {submitStatus === 'success' && (
                  <div className="mb-8 p-6 bg-green-50 border border-green-200 text-green-800 transition-all">
                    <h4 className="font-bold mb-1">Inquiry Received</h4>
                    <p className="text-sm">Our enterprise engagement team will contact you shortly to schedule an initial technical consultation.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-8 p-6 bg-red-50 border border-red-200 text-red-800 transition-all">
                    <h4 className="font-bold mb-1">Transmission Failed</h4>
                    <p className="text-sm">There was an error sending your inquiry. Please try again or email us directly at {companyConfig.email}.</p>
                  </div>
                )}

                <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
                <form 
                  action="https://script.google.com/macros/s/AKfycbyQ6BZmm-icKjRaWOWpD_WG0uxSXK2Wu2R5tijMCnIHq_auwsHqB5-_9SJ4nvfiYhPI/exec" 
                  method="POST" 
                  target="hidden_iframe" 
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        minLength={2}
                        maxLength={100}
                        pattern="[A-Za-z\s\-']+"
                        title="Letters, spaces, hyphens, and apostrophes only"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors rounded-none"
                      />
                      {warnings.fullName && <p className="text-red-500 text-xs mt-2 transition-all">{warnings.fullName}</p>}
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">Company Name</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        maxLength={100}
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors rounded-none"
                      />
                      {warnings.companyName && <p className="text-red-500 text-xs mt-2 transition-all">{warnings.companyName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">Corporate Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        maxLength={150}
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleEmailBlur}
                        className="w-full px-4 py-3 bg-white border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors rounded-none"
                      />
                      {warnings.email && <p className="text-red-500 text-xs mt-2 transition-all">{warnings.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">Contact Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        minLength={7}
                        maxLength={20}
                        pattern="[0-9]+"
                        title="Please enter numbers only"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors rounded-none"
                      />
                      {warnings.phone && <p className="text-red-500 text-xs mt-2 transition-all">{warnings.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceInterestedIn" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">Primary Service Requirement <span className="text-red-500">*</span></label>
                    <select
                      id="serviceInterestedIn"
                      name="serviceInterestedIn"
                      required
                      value={formData.serviceInterestedIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors rounded-none"
                    >
                      <option value="">Select a capability</option>
                      {allServices.map(s => (
                        <option key={s.slug} value={s.title}>{s.title}</option>
                      ))}
                      <option value="General Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="budgetRange" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">Estimated Budget (Optional)</label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors rounded-none"
                      >
                        <option value="">Select a range</option>
                        <option value="Under Rs 50k">Under Rs 50k</option>
                        <option value="Rs 50k - Rs 1L">Rs 50k - Rs 1L</option>
                        <option value="Rs 1L - Rs 2L">Rs 1L - Rs 2L</option>
                        <option value="Rs 2L - Rs 5L">Rs 2L - Rs 5L</option>
                        <option value="Rs 5L+">Rs 5L+</option>
                        <option value="To be discussed">To be discussed</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">Expected Timeline (Optional)</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors rounded-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="Immediately">Immediately (0-4 weeks)</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectDetails" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-3">Project Details & Objectives <span className="text-red-500">*</span></label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={5}
                      required
                      minLength={20}
                      maxLength={2000}
                      title="Please provide at least 20 characters of detail."
                      value={formData.projectDetails}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-[var(--color-border-light)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors resize-y rounded-none"
                      placeholder="Outline your technical requirements, expected outcomes, or business challenges..."
                    ></textarea>
                    {warnings.projectDetails && <p className="text-red-500 text-xs mt-2 transition-all">{warnings.projectDetails}</p>}
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border-light)]">
                    <Button
                      type="submit"
                      disabled={isSubmitting || submitStatus === 'success'}
                      className="w-full sm:w-auto transition-all"
                    >
                      {isSubmitting ? 'Transmitting...' : submitStatus === 'success' ? 'Submitted' : 'Submit Inquiry'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
