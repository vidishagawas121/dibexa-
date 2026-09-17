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
  
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[var(--color-brand-navy)] text-white hover:bg-[var(--color-brand-blue)] focus:ring-[var(--color-brand-navy)]",
    secondary: "bg-[var(--color-brand-blue)] text-white hover:bg-[var(--color-brand-navy)] focus:ring-[var(--color-brand-blue)]",
    outline: "border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] hover:text-white focus:ring-[var(--color-brand-navy)]",
    ghost: "text-[var(--color-text-secondary)] hover:text-[var(--color-brand-navy)] hover:bg-[var(--color-surface-alt)]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm tracking-wide uppercase",
    lg: "px-8 py-4 text-base tracking-wide uppercase"
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
