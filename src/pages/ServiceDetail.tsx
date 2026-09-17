import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { allServices } from '../data/services';
import Button from '../components/ui/Button';
import { siteImages } from '../data/images';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = allServices.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Map exact slugs to existing visuals
  const imageMap: Record<string, string | null> = {
    // Digital Engineering
    'web-development': siteImages.webDevelopment,
    'mobile-app-development': siteImages.mobileWeb,
    'e-commerce-development': siteImages.eCommerce,
    'custom-software-development': siteImages.customSoftware,
    
    // Enterprise Solutions
    'erp-crm-solutions': siteImages.enterpriseSolutions,
    'project-management': siteImages.projectManagement,
    'business-process-automation': siteImages.businessProcess,
    'digital-marketing': siteImages.digitalMarketing,
    
    // AI & Automation
    'ai-generative-ai': siteImages.aiAutomation,
    'ai-chatbots-assistants': siteImages.aiChatbots,
    'robotic-process-automation': siteImages.rpa,
    'iot-smart-systems': siteImages.iotSmartSystems,
    
    // Data, Cloud & Security
    'data-engineering-analytics': siteImages.dataAnalytics,
    'cloud-devops': siteImages.cloudDevOps,
    'cybersecurity': siteImages.cybersecurity,
    'blockchain-web3': siteImages.blockchainWeb3,
  };

  const serviceImage = imageMap[service.slug] || null;

  return (
    <>
      <Helmet>
        <title>{service.title} | Dibexa Infotech Pvt. Ltd.</title>
        <meta name="description" content={`Dibexa Infotech offers enterprise-grade ${service.title} services designed to accelerate business execution.`} />
      </Helmet>

      {/* Hero / Brief Header */}
      <section className="pt-28 pb-12 md:pt-40 md:pb-20 bg-[var(--color-surface)] border-b border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-[var(--color-brand-blue)] font-semibold tracking-[0.2em] uppercase text-xs mb-6 block">
              Capability Brief
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-navy)] tracking-tight mb-8">
              {service.title}.
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed text-balance">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
            
            {/* Left Content / Main Brief */}
            <div className="lg:col-span-8 space-y-12 md:space-y-16">
              
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-6">Strategic Objective</h2>
                <div className="prose prose-lg prose-slate text-[var(--color-text-secondary)]">
                  <p>
                    Implementing {service.title} requires more than technical execution; it demands architectural foresight and strict alignment with organizational goals. Our engineering teams approach this capability as a core business enabler, designed to integrate seamlessly into your existing operational matrix.
                  </p>
                  <p>
                    We focus on building resilient systems that mitigate technical debt, enforce security protocols, and provide unconstrained scalability as your enterprise requirements evolve.
                  </p>
                </div>
              </div>

              {/* Service Visual Injection */}
              {serviceImage && (
                <div className="w-full border border-[var(--color-border-light)] overflow-hidden">
                  <img 
                    src={serviceImage} 
                    alt={`${service.title} capabilities`} 
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div>
                <h2 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-6">Core Competencies</h2>
                <ul className="space-y-6">
                  {[
                    "Architectural Design & Systems Engineering",
                    "Enterprise Security & Compliance Integration",
                    "Performance Optimization & Scalability",
                    "Lifecycle Management & Continuous Evolution"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-[var(--color-brand-blue)] rounded-none shrink-0" />
                      <span className="text-xl text-[var(--color-text-primary)] font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
            
            {/* Right Sidebar / Engagement Meta */}
            <div className="lg:col-span-4">
              <div className="bg-[var(--color-surface-alt)] border border-[var(--color-border-light)] p-6 md:p-8 lg:p-10 lg:sticky lg:top-32">
                <h3 className="text-xl font-bold text-[var(--color-brand-navy)] mb-6 border-b border-[var(--color-border-light)] pb-4">
                  Engagement Framework
                </h3>
                
                <div className="space-y-6 mb-10 text-[var(--color-text-secondary)] text-base">
                  <div>
                    <strong className="block text-[var(--color-text-primary)] mb-1">Target Audience</strong>
                    Enterprise organizations, large SMEs, and scaling technology firms.
                  </div>
                  <div>
                    <strong className="block text-[var(--color-text-primary)] mb-1">Execution Model</strong>
                    Dedicated engineering teams, structured milestone delivery, and rigorous QA.
                  </div>
                  <div>
                    <strong className="block text-[var(--color-text-primary)] mb-1">Expected Outcome</strong>
                    A production-ready, secure, and highly scalable technological asset.
                  </div>
                </div>
                
                <Button as={Link} to="/contact" className="w-full">
                  Discuss Requirements
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
