
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({ children, className, hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-[var(--background)] rounded-2xl border border-[var(--border)] p-6 sm:p-8",
        hover && "transition-all duration-300 hover:shadow-lg hover:border-[var(--primary)] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
