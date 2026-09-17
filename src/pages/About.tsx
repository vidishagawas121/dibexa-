import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Dibexa Infotech Pvt. Ltd.</title>
        <meta name="description" content="Dibexa Infotech is an enterprise technology organization committed to engineering scalable digital solutions, intelligent automation, and robust infrastructure." />
      </Helmet>

      {/* Animated Cover Section */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center pt-32 pb-20 overflow-hidden bg-[var(--color-brand-navy)]">
        
        {/* Cinematic Blur Reveal (Focus Pull) */}
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.2, filter: "blur(20px)", opacity: 0 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src="/images/dibexa-about-cover-clean.jpg" 
            alt="Dibexa About Cover" 
            className="w-full h-full object-cover object-center contrast-125 saturate-[1.2] brightness-110"
          />
        </div>
        
        {/* Targeted gradient strictly at the bottom for text readability, leaving the building 100% clear */}
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[var(--color-brand-navy)] via-[var(--color-brand-navy)]/80 to-transparent"></div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--color-brand-navy)]/80 backdrop-blur-md mb-8">
              <span className="w-2 h-2 bg-[var(--color-brand-teal)] shadow-[0_0_10px_var(--color-brand-teal)]"></span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-brand-teal)] uppercase">Global Operations</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tight text-white leading-[1.05]">
              Who We <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--color-brand-teal)]">
                Are.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
              We are an engineering-first organization building the intelligent digital foundations for tomorrow's leading enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story & Why We Exist */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h3 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-6 tracking-tight">Company Story</h3>
              <div className="prose prose-lg text-[var(--color-text-secondary)]">
                <p className="italic opacity-80" title="To be provided">
                  [Approved company story — to be provided by management]
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-6 tracking-tight">Why Dibexa Exists</h3>
              <div className="prose prose-lg text-[var(--color-text-secondary)]">
                <p className="italic opacity-80" title="To be provided">
                  [Management to provide]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-16 md:py-32 bg-[var(--color-surface-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-6 tracking-tight">Our Philosophy</h2>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              We believe that technology is only as valuable as the operational friction it eliminates and the capability it creates. Our entire organizational approach is distilled into three fundamental mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <div className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-blue)] mb-6">01</div>
              <h3 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-4">Build.</h3>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                We engineer robust digital products, custom enterprise applications, and secure software ecosystems from the ground up, utilizing stringent architectural patterns to ensure long-term stability.
              </p>
            </div>
            <div>
              <div className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-blue)] mb-6">02</div>
              <h3 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-4">Automate.</h3>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                We deploy artificial intelligence, robotic process automation, and intelligent workflow systems to systematically remove human bottlenecks and drastically accelerate enterprise execution.
              </p>
            </div>
            <div>
              <div className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand-blue)] mb-6">03</div>
              <h3 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-4">Scale.</h3>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                We design resilient cloud and data architectures capable of handling massive operational growth. Our goal is to ensure that as your business velocity increases, your technology stack remains a competitive advantage rather than a bottleneck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Values */}
      <section className="py-16 md:py-32 bg-[var(--color-brand-navy)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">The Dibexa Standard</h2>
              <p className="text-xl text-[var(--color-text-inverse-muted)] leading-relaxed mb-8">
                Operating as a true technology partner requires more than technical competence. It demands an unwavering commitment to engineering discipline and strategic alignment with executive business objectives.
              </p>
              <p className="text-xl text-[var(--color-text-inverse-muted)] leading-relaxed">
                We do not pursue technology for its own sake. Every line of code written, every cloud environment provisioned, and every automation deployed must generate measurable organizational value.
              </p>
            </div>
            
            <div className="flex flex-col justify-center space-y-12">
              <div className="border-l border-[var(--color-brand-teal)] pl-8">
                <h3 className="text-2xl font-bold mb-3">Absolute Transparency</h3>
                <p className="text-[var(--color-text-inverse-muted)] text-lg">Clear communication regarding technical debt, project constraints, and architectural trade-offs.</p>
              </div>
              <div className="border-l border-[var(--color-brand-teal)] pl-8">
                <h3 className="text-2xl font-bold mb-3">Technical Pragmatism</h3>
                <p className="text-[var(--color-text-inverse-muted)] text-lg">Selecting the right tools to solve the problem, rather than forcing the problem to fit the latest trend.</p>
              </div>
              <div className="border-l border-[var(--color-brand-teal)] pl-8">
                <h3 className="text-2xl font-bold mb-3">Enterprise Security Focus</h3>
                <p className="text-[var(--color-text-inverse-muted)] text-lg">A non-negotiable commitment to data integrity and system resilience at every tier of the stack.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
