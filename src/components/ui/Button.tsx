import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-dark' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#f5efe2] text-[#151510] hover:bg-white hover:-translate-y-0.5 active:translate-y-0 shadow-soft rounded-full',
  secondary:
    'bg-[#f5efe2]/12 text-[#f5efe2] border border-[#f5efe2]/30 hover:bg-[#f5efe2] hover:text-[#151510] rounded-full',
  outline:
    'border border-[#f5efe2]/45 bg-transparent text-[#f5efe2] hover:bg-[#f5efe2] hover:text-[#151510] rounded-full',
  'outline-dark':
    'border border-[#f5efe2]/30 bg-transparent text-[#f5efe2] hover:bg-[#f5efe2]/12 rounded-full',
  ghost:
    'bg-transparent text-[#f5efe2]/80 hover:text-[#f5efe2] hover:bg-[#f5efe2]/10 rounded-full',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs sm:text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-sm sm:text-base',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0';

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: BaseProps & LinkProps) {
  return (
    <Link
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ExternalButtonLink({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
