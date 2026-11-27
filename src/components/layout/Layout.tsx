import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AmbientBackground } from './AmbientBackground';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-black text-[#f5efe2]">
      <AmbientBackground />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#f5efe2] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#151510]"
      >
        Skip to main content
      </a>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
