import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

type ButtonBaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

type ButtonAsButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
};

type ButtonAsLinkProps = ButtonBaseProps & LinkProps & {
  as: typeof Link;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  as,
  ...props
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 select-none group overflow-hidden relative";
  
  const variants = {
    primary: "bg-[var(--color-brand-blue)] text-white hover:bg-[#115fcb] hover:shadow-[0_8px_20px_-6px_rgba(0,85,255,0.4)] focus:ring-[var(--color-brand-blue)] border border-transparent",
    secondary: "bg-[var(--color-brand-navy)] text-white hover:bg-[var(--color-brand-navy-deep)] hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.4)] focus:ring-[var(--color-brand-navy)] border border-transparent",
    outline: "border border-[var(--color-border-light)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] hover:border-[var(--color-border-dark)] hover:shadow-sm focus:ring-[var(--color-border-dark)]",
    ghost: "text-[var(--color-text-secondary)] hover:text-[var(--color-brand-navy)] hover:bg-[var(--color-surface)] hover:scale-[1.02]"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm tracking-wide",
    lg: "px-6 py-3 text-base tracking-wide"
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (as === Link) {
    const linkProps = props as LinkProps;
    return (
      <Link className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
