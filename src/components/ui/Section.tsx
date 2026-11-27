import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'slate' | 'navy' | 'transparent';
}

const bgClasses = {
  white: 'bg-black/35 text-[#f5efe2]',
  slate: 'bg-black/55 border-y border-[#f5efe2]/10 text-[#f5efe2]',
  navy: 'bg-black/70 border-y border-[#f5efe2]/12 text-[#f5efe2]',
  transparent: 'bg-transparent text-[#f5efe2]',
};

export function Section({
  id,
  children,
  className = '',
  background = 'white',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-22 lg:py-26 ${bgClasses[background]} ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center max-w-2xl' : 'max-w-2xl';
  return (
    <div className={`mb-12 sm:mb-14 ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#b8cad6]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-normal tracking-[-0.012em] text-[#f5efe2] sm:text-5xl lg:text-[3.25rem] lg:leading-[0.98]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#f5efe2]/72 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
