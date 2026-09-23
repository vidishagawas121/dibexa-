import { type Variants } from 'framer-motion';

// Standard enterprise transitions
export const transitionStandard = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const // Smooth cubic bezier
};

export const transitionFast = {
  duration: 0.3,
  ease: [0.16, 1, 0.3, 1] as const
};

// Reusable Framer Motion variants
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: transitionStandard 
  }
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export const cardHoverVariants: Variants = {
  initial: { y: 0 },
  hover: { 
    y: -4,
    transition: transitionFast
  }
};

export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
