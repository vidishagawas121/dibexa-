import { Helmet } from 'react-helmet-async';

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Our Products | Dibexa Infotech Pvt. Ltd.</title>
        <meta name="description" content="Explore our suite of AI-powered products designed for the modern enterprise." />
      </Helmet>

      
      {/* Management Note */}
      <div className="bg-[var(--color-surface-alt)] py-4 border-b border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm text-[var(--color-text-secondary)] italic opacity-70">
            * Product details are currently being finalized and will be updated soon.
          </span>
        </div>
      </div>

      <section className="py-24 bg-[var(--color-surface-alt)] min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-brand-navy)] mb-6">
            Product details coming soon.
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            We are working on bringing you a comprehensive suite of AI products. Check back later for details.
          </p>
        </div>
      </section>
    </>
  );
}
