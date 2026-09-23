import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedPage from '../components/layout/AnimatedPage';

export default function TermsConditions() {
  return (
    <AnimatedPage className="bg-slate-50 min-h-screen font-sans text-slate-900 relative dark:bg-[#010103] dark:text-white">
      <Helmet>
        <title>Terms & Conditions | Dibexa Infotech Pvt. Ltd.</title>
      </Helmet>

      <section className="pt-32 pb-16 bg-[var(--color-surface)] border-b border-[var(--color-border-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Terms & Conditions" label="Legal" />
        </div>
      </section>

      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-[var(--color-text-secondary)]">
          <p className="mb-8 font-mono text-sm tracking-widest text-[var(--color-brand-blue)]">Last Updated: September 2026</p>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-brand-navy)]">1. Agreement to Terms</h2>
              <p>This is a placeholder for the Terms & Conditions of Dibexa Infotech Pvt. Ltd. By accessing this website or engaging our services, you agree to be bound by these enterprise service terms.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-brand-navy)]">2. Intellectual Property</h2>
              <p>Placeholder text stating that all technological assets, codebases, and architectural documentation provided on this site belong to Dibexa Infotech Pvt. Ltd. unless explicitly licensed otherwise.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-brand-navy)]">3. Limitation of Liability</h2>
              <p>Placeholder text detailing standard corporate liability limitations and service level agreements (SLAs).</p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
