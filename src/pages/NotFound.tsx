import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/layout/AnimatedPage';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <AnimatedPage className="bg-slate-50 min-h-screen font-sans text-slate-900 relative dark:bg-[#010103] dark:text-white">
      <Helmet>
        <title>404: Page Not Found | Dibexa Infotech Pvt. Ltd.</title>
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center bg-[var(--color-surface)] pt-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-[var(--color-brand-blue)] font-mono text-sm tracking-[0.2em] mb-6 uppercase">
            Error 404
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-[var(--color-brand-navy)] mb-6 tracking-tight">
            Not Found.
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] mb-12">
            The requested technical resource or page cannot be located on our servers. It may have been moved or permanently deleted.
          </p>
          <Button as={Link} to="/">
            Return to Homepage
          </Button>
        </div>
      </section>
    </AnimatedPage>
  );
}
