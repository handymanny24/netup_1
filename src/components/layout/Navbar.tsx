import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calculator, HeartPulse, LayoutDashboard } from 'lucide-react';
import { ButtonLink } from '../ui/Button';

const toolLinks = [
  {
    to: '/estimator',
    label: 'Premium Estimator',
    description: 'Illustrative monthly pricing range',
    icon: Calculator,
  },
  {
    to: '/health-check',
    label: 'Startup Health Check',
    description: '6-question risk score & tips',
    icon: HeartPulse,
  },
  {
    to: '/demo',
    label: 'Founder Dashboard Demo',
    description: 'Interactive runway & alert preview',
    icon: LayoutDashboard,
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setToolsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setToolsOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isToolActive = toolLinks.some((t) => location.pathname === t.to);

  const navLinkClass = (active: boolean) =>
    `text-[13px] font-medium uppercase tracking-[0.16em] transition-opacity whitespace-nowrap ${
      active ? 'text-[#f5efe2] opacity-100' : 'text-[#f5efe2]/80 hover:opacity-60'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-[#f5efe2]/10 bg-black/45 backdrop-blur-md">
      <nav aria-label="Main navigation" className="container-page">
        <div className="flex h-[70px] items-center justify-between gap-4 sm:h-[78px]">
          {/* Wordmark */}
          <Link
            to="/"
            className="flex items-baseline gap-2 rounded-lg text-[#f5efe2] transition-opacity hover:opacity-80"
            aria-label="NetUp Home"
          >
            <span className="text-[24px] font-medium tracking-[-0.02em] sm:text-[26px]">
              NetUp
            </span>
            <span className="hidden rounded-full border border-[#f5efe2]/25 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#f5efe2]/80 sm:inline-block">
              Pilot
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link to="/#how-it-works" className={navLinkClass(false)}>
              How It Works
            </Link>
            <Link to="/plans" className={navLinkClass(isActive('/plans'))}>
              Plans
            </Link>

            {/* Interactive Tools dropdown */}
            <div ref={toolsRef} className="relative">
              <button
                type="button"
                aria-expanded={toolsOpen}
                aria-haspopup="true"
                onClick={() => setToolsOpen((o) => !o)}
                className={`inline-flex items-center gap-1 text-[13px] font-medium uppercase tracking-[0.16em] transition-opacity whitespace-nowrap ${
                  isToolActive ? 'text-[#f5efe2] opacity-100' : 'text-[#f5efe2]/80 hover:opacity-60'
                }`}
              >
                <span>Tools</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${toolsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {toolsOpen && (
                <div className="absolute left-0 mt-4 w-72 rounded-2xl border border-[#f5efe2]/18 bg-[#090b0f]/95 p-2 shadow-elevated backdrop-blur-xl">
                  {toolLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`flex items-start gap-3 rounded-xl p-3 transition-colors ${
                          isActive(item.to)
                            ? 'bg-[#f5efe2]/15 text-[#f5efe2]'
                            : 'text-[#f5efe2]/80 hover:bg-[#f5efe2]/8 hover:text-[#f5efe2]'
                        }`}
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#f5efe2]/15 bg-black/50 text-[#f5efe2]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-[#f5efe2]">
                            {item.label}
                          </span>
                          <span className="block text-xs text-[#f5efe2]/60">{item.description}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link to="/insights" className={navLinkClass(isActive('/insights'))}>
              Insights
            </Link>
            <Link to="/faq" className={navLinkClass(isActive('/faq'))}>
              FAQ
            </Link>
            <Link to="/partners" className={navLinkClass(isActive('/partners'))}>
              Partners
            </Link>
          </div>

          {/* Desktop CTA pill + Mobile toggle */}
          <div className="flex items-center gap-3">
            <ButtonLink
              to="/#waitlist"
              size="sm"
              className="h-10 px-5 text-xs uppercase tracking-[0.14em] sm:h-[44px] sm:px-6 sm:text-[13px]"
            >
              Join Waitlist
            </ButtonLink>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f5efe2]/25 text-[#f5efe2] hover:bg-[#f5efe2]/10 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="border-t border-[#f5efe2]/12 bg-black/90 py-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              <Link
                to="/#how-it-works"
                className="rounded-xl px-3 py-2.5 text-sm font-medium uppercase tracking-[0.14em] text-[#f5efe2]/85 hover:bg-[#f5efe2]/8"
              >
                How It Works
              </Link>
              <Link
                to="/plans"
                className={`rounded-xl px-3 py-2.5 text-sm font-medium uppercase tracking-[0.14em] ${
                  isActive('/plans')
                    ? 'bg-[#f5efe2]/15 text-[#f5efe2]'
                    : 'text-[#f5efe2]/85 hover:bg-[#f5efe2]/8'
                }`}
              >
                Plans
              </Link>
              <Link
                to="/insights"
                className={`rounded-xl px-3 py-2.5 text-sm font-medium uppercase tracking-[0.14em] ${
                  isActive('/insights')
                    ? 'bg-[#f5efe2]/15 text-[#f5efe2]'
                    : 'text-[#f5efe2]/85 hover:bg-[#f5efe2]/8'
                }`}
              >
                Insights
              </Link>
              <Link
                to="/faq"
                className={`rounded-xl px-3 py-2.5 text-sm font-medium uppercase tracking-[0.14em] ${
                  isActive('/faq')
                    ? 'bg-[#f5efe2]/15 text-[#f5efe2]'
                    : 'text-[#f5efe2]/85 hover:bg-[#f5efe2]/8'
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/partners"
                className={`rounded-xl px-3 py-2.5 text-sm font-medium uppercase tracking-[0.14em] ${
                  isActive('/partners')
                    ? 'bg-[#f5efe2]/15 text-[#f5efe2]'
                    : 'text-[#f5efe2]/85 hover:bg-[#f5efe2]/8'
                }`}
              >
                Partners
              </Link>

              <div className="my-2 border-t border-[#f5efe2]/10 pt-3">
                <p className="px-3 pb-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#b8cad6]">
                  Interactive Tools
                </p>
                {toolLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`block rounded-xl px-3 py-2 text-sm ${
                      isActive(item.to)
                        ? 'bg-[#f5efe2]/15 text-[#f5efe2]'
                        : 'text-[#f5efe2]/80 hover:bg-[#f5efe2]/8'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
