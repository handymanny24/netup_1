import type { ReactNode } from 'react';

type CardVariant = 'white' | 'slate' | 'navy' | 'amber' | 'navyTint';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  variant?: CardVariant;
}

const paddingClasses = {
  sm: 'p-5',
  md: 'p-6 sm:p-7',
  lg: 'p-7 sm:p-9',
};

const variantClasses: Record<CardVariant, string> = {
  white: 'border-[#f5efe2]/15 bg-[#090b0f]/75 text-[#f5efe2]',
  slate: 'border-[#f5efe2]/12 bg-[#0d1016]/70 text-[#f5efe2]',
  navy: 'border-[#f5efe2]/30 bg-[#0d1017]/88 text-[#f5efe2]',
  amber: 'border-[#f5efe2]/28 bg-[#16140f]/80 text-[#f5efe2]',
  navyTint: 'border-[#b8cad6]/25 bg-[#0c1118]/80 text-[#f5efe2]',
};

export function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  variant = 'white',
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border backdrop-blur-xl shadow-soft ${variantClasses[variant]} ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f5efe2]/35 hover:shadow-elevated'
          : ''
      } ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
