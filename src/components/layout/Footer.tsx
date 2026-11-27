import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Globe } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#f5efe2]/12 bg-black/80 text-[#f5efe2]/75 backdrop-blur-xl">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-baseline gap-2 text-[#f5efe2]">
              <span className="text-2xl font-medium tracking-[-0.02em]">NetUp</span>
              <span className="rounded-full border border-[#f5efe2]/25 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-[#f5efe2]/75">
                Pilot
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#f5efe2]/65">
              Every startup deserves a safety net. Every failure deserves a lesson.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="mailto:founders@netup.pilot"
                aria-label="Email NetUp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5efe2]/20 bg-white/5 text-[#f5efe2]/80 transition-colors hover:bg-[#f5efe2] hover:text-[#151510]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                aria-label="NetUp on LinkedIn (placeholder)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5efe2]/20 bg-white/5 text-[#f5efe2]/80 transition-colors hover:bg-[#f5efe2] hover:text-[#151510]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                aria-label="NetUp on X (placeholder)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5efe2]/20 bg-white/5 text-[#f5efe2]/80 transition-colors hover:bg-[#f5efe2] hover:text-[#151510]"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#website"
                onClick={(e) => e.preventDefault()}
                aria-label="NetUp Community Portal (placeholder)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5efe2]/20 bg-white/5 text-[#f5efe2]/80 transition-colors hover:bg-[#f5efe2] hover:text-[#151510]"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#b8cad6]">
              Platform
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/#how-it-works" className="transition-colors hover:text-[#f5efe2]">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/plans" className="transition-colors hover:text-[#f5efe2]">
                  Plans &amp; Pricing
                </Link>
              </li>
              <li>
                <Link to="/insights" className="transition-colors hover:text-[#f5efe2]">
                  Founder Insights
                </Link>
              </li>
              <li>
                <Link to="/faq" className="transition-colors hover:text-[#f5efe2]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#b8cad6]">
              Interactive Tools
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/estimator" className="transition-colors hover:text-[#f5efe2]">
                  Premium Estimator
                </Link>
              </li>
              <li>
                <Link to="/health-check" className="transition-colors hover:text-[#f5efe2]">
                  Startup Health Check
                </Link>
              </li>
              <li>
                <Link to="/demo" className="transition-colors hover:text-[#f5efe2]">
                  Founder Dashboard Demo
                </Link>
              </li>
              <li>
                <Link to="/#waitlist" className="transition-colors hover:text-[#f5efe2]">
                  Join Pilot Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners & Contact */}
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#b8cad6]">
              Ecosystem &amp; Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/partners" className="transition-colors hover:text-[#f5efe2]">
                  Partner with NetUp
                </Link>
              </li>
              <li>
                <Link to="/partners#partner-form" className="transition-colors hover:text-[#f5efe2]">
                  Incubators &amp; Law Firms
                </Link>
              </li>
              <li>
                <a
                  href="mailto:founders@netup.pilot"
                  className="inline-flex items-center gap-1.5 text-[#f5efe2] transition-opacity hover:opacity-75"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>founders@netup.pilot</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Pilot Disclaimer */}
        <div className="mt-12 rounded-2xl border border-[#f5efe2]/15 bg-white/[0.03] p-4 sm:p-5">
          <p className="text-xs leading-relaxed text-[#f5efe2]/78 sm:text-sm">
            <strong className="font-semibold text-[#f5efe2]">Pilot Notice: </strong>
            This is a pilot concept. Insurance products will be offered through a licensed insurance
            partner and are subject to terms, waiting periods, and regulatory approval.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-[#f5efe2]/10 pt-6 text-xs text-[#f5efe2]/45 sm:flex-row sm:items-center">
          <p>© {year} NetUp Pilot Concept. All rights reserved.</p>
          <p>Built for early-stage founders — illustrative preview only.</p>
        </div>
      </div>
    </footer>
  );
}
