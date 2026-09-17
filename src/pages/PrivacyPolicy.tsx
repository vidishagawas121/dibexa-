import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/ui/SectionHeader';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Dibexa Infotech Pvt. Ltd.</title>
      </Helmet>

      <section className="pt-32 pb-16 bg-[var(--color-surface)] border-b border-[var(--color-border-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Privacy Policy" label="Legal" />
        </div>
      </section>

      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-[var(--color-text-secondary)]">
          <p className="mb-8 font-mono text-sm tracking-widest text-[var(--color-brand-blue)]">Last Updated: September 2026</p>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-brand-navy)]">1. Introduction</h2>
              <p>This is a placeholder for the Privacy Policy of Dibexa Infotech Pvt. Ltd. It outlines how we collect, use, and protect enterprise and personal data during engagements.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-brand-navy)]">2. Information Collection</h2>
              <p>Placeholder text detailing the types of data collected (e.g., corporate contact information, system architecture requirements, usage data).</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-brand-navy)]">3. Enterprise Data Security</h2>
              <p>Placeholder text explaining the rigorous security engineering and compliance measures in place to protect client data.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
