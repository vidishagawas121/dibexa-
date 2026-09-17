import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description?: string;
  label?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  label,
  centered = false,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', centered && 'text-center mx-auto', className)}>
      {label && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          {centered && <div className="h-px bg-[var(--color-brand-blue)] flex-1 max-w-12"></div>}
          <span className="text-[var(--color-brand-blue)] font-semibold tracking-[0.2em] uppercase text-xs">
            {label}
          </span>
          {!centered && <div className="h-px bg-[var(--color-brand-blue)] w-12"></div>}
          {centered && <div className="h-px bg-[var(--color-brand-blue)] flex-1 max-w-12"></div>}
        </motion.div>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-brand-navy)] mb-6 tracking-tight text-balance leading-tight"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-[var(--color-text-secondary)] text-lg md:text-xl max-w-3xl leading-relaxed text-balance",
            centered && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
