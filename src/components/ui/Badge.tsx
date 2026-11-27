import type { ReactNode } from 'react';

type BadgeVariant = 'navy' | 'amber' | 'slate' | 'emerald' | 'rose';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  navy: 'bg-[#f5efe2]/10 text-[#f5efe2] border-[#f5efe2]/20',
  amber: 'bg-[#f5efe2] text-[#151510] border-[#f5efe2]',
  slate: 'bg-white/5 text-[#cfc8b8] border-[#f5efe2]/15',
  emerald: 'bg-emerald-400/15 text-emerald-200 border-emerald-400/30',
  rose: 'bg-rose-400/15 text-rose-200 border-rose-400/30',
};

export function Badge({ children, variant = 'slate', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
