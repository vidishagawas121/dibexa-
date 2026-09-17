import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Dibexa Infotech Pvt. Ltd.</title>
        <meta name="description" content="Join Dibexa Infotech and help us engineer scalable digital solutions and intelligent automation for the modern enterprise." />
      </Helmet>



      {/* Culture & Working at Dibexa */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h3 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-6 tracking-tight">Life at Dibexa</h3>
              <div className="prose prose-lg text-[var(--color-text-secondary)]">
                <p>
                  At Dibexa, we are building a culture of engineering excellence, intellectual curiosity, and uncompromising execution. We believe that the best solutions are born from diverse teams collaborating in an environment that prioritizes logic and impact over hierarchy.
                </p>
                <p>
                  We don't just write code; we build architectures that scale, automate workflows that save millions of hours, and engineer systems that define the future of our clients' industries.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-6 tracking-tight">Why Join Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-brand-teal)]/20 flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-brand-teal)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-brand-navy)]">Radical Ownership</h4>
                    <p className="text-[var(--color-text-secondary)]">You own your projects from architecture to deployment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-brand-teal)]/20 flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-brand-teal)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-brand-navy)]">Continuous Learning</h4>
                    <p className="text-[var(--color-text-secondary)]">Work with cutting-edge AI, Web3, and cloud infrastructure.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-brand-teal)]/20 flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-brand-teal)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-brand-navy)]">Impact-Driven</h4>
                    <p className="text-[var(--color-text-secondary)]">Your work will directly solve complex, real-world enterprise problems.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 bg-[var(--color-surface-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-6 tracking-tight">Open Positions</h2>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              We are always looking for exceptional talent. Explore our current openings below.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Job Placeholder 1 */}
            <div className="bg-white border border-[var(--color-border-light)] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 transition-shadow hover:shadow-lg">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-[var(--color-brand-navy)]">Senior Full-Stack Engineer</h3>
                  <span className="bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">Engineering</span>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Lead the architecture and development of scalable enterprise applications using React, Node.js, and AWS.
                </p>
                <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)] font-medium">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Remote / Hybrid
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Full-Time
                  </span>
                </div>
              </div>
              <Button className="shrink-0 rounded-none bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-blue)] px-8 py-4 text-sm font-bold tracking-widest uppercase border-0">
                Apply Now
              </Button>
            </div>

            {/* Job Placeholder 2 */}
            <div className="bg-white border border-[var(--color-border-light)] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 transition-shadow hover:shadow-lg">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-[var(--color-brand-navy)]">AI Solutions Architect</h3>
                  <span className="bg-[var(--color-brand-teal)]/10 text-[var(--color-brand-teal)] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">Artificial Intelligence</span>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Design and deploy generative AI pipelines, specialized LLMs, and intelligent automation workflows for enterprise clients.
                </p>
                <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)] font-medium">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Remote / Hybrid
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Full-Time
                  </span>
                </div>
              </div>
              <Button className="shrink-0 rounded-none bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-blue)] px-8 py-4 text-sm font-bold tracking-widest uppercase border-0">
                Apply Now
              </Button>
            </div>

            {/* Job Placeholder 3 */}
            <div className="bg-white border border-[var(--color-border-light)] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 transition-shadow hover:shadow-lg">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-[var(--color-brand-navy)]">Product Designer (UI/UX)</h3>
                  <span className="bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">Design</span>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Craft stunning, highly functional, and seamless user experiences for modern digital platforms and B2B software.
                </p>
                <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)] font-medium">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Remote / Hybrid
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Full-Time
                  </span>
                </div>
              </div>
              <Button className="shrink-0 rounded-none bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-blue)] px-8 py-4 text-sm font-bold tracking-widest uppercase border-0">
                Apply Now
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Spontaneous Application CTA */}
      <section className="py-24 bg-[var(--color-brand-navy)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't see a perfect fit?</h2>
          <p className="text-lg text-[var(--color-text-inverse-muted)] mb-10 leading-relaxed">
            We are always interested in connecting with brilliant minds. If you believe you belong at Dibexa, send us your resume and tell us how you can make an impact.
          </p>
          <a href="mailto:careers@dibexa.com" className="inline-block bg-transparent border border-[var(--color-brand-teal)] text-white hover:bg-[var(--color-brand-teal)]/10 rounded-none px-10 py-4 font-bold tracking-widest uppercase text-sm transition-all duration-300">
            Submit Spontaneous Application
          </a>
        </div>
      </section>
    </>
  );
}
