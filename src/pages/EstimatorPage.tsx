import { useState, useMemo } from 'react';
import { Calculator, AlertTriangle, ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ButtonLink } from '../components/ui/Button';
import { usePageMeta } from '../lib/seo';

const STAGE_MULTIPLIER: Record<string, { label: string; factor: number }> = {
  'pre-seed': { label: 'Idea / Pre-Seed', factor: 1.0 },
  seed: { label: 'Seed', factor: 1.2 },
  'series-a': { label: 'Series A', factor: 1.55 },
  bootstrapped: { label: 'Bootstrapped / Revenue', factor: 0.95 },
};

const SECTOR_MULTIPLIER: Record<string, { label: string; factor: number }> = {
  saas: { label: 'SaaS / B2B Software', factor: 1.0 },
  fintech: { label: 'Fintech', factor: 1.25 },
  healthtech: { label: 'Healthtech', factor: 1.2 },
  d2c: { label: 'Consumer / D2C', factor: 1.15 },
  deeptech: { label: 'AI / DeepTech', factor: 1.1 },
};

const TEAM_MULTIPLIER: Record<string, { label: string; factor: number }> = {
  '1-5': { label: '1–5 people', factor: 1.0 },
  '6-15': { label: '6–15 people', factor: 1.2 },
  '16-35': { label: '16–35 people', factor: 1.45 },
  '36+': { label: '36+ people', factor: 1.75 },
};

const FUNDING_MULTIPLIER: Record<string, { label: string; factor: number }> = {
  none: { label: 'Bootstrapped / Friends & Family', factor: 0.95 },
  'under-2cr': { label: 'Under ₹2 Cr (~$250k)', factor: 1.05 },
  '2cr-10cr': { label: '₹2 Cr – ₹10 Cr (~$250k–$1.2M)', factor: 1.25 },
  '10cr+': { label: '₹10 Cr+ ($1.2M+)', factor: 1.5 },
};

export function EstimatorPage() {
  usePageMeta(
    'Premium Estimator — NetUp',
    'Estimate an illustrative monthly NetUp subscription price based on your startup stage, sector, team size, and funding raised.'
  );

  const [stage, setStage] = useState('pre-seed');
  const [sector, setSector] = useState('saas');
  const [teamSize, setTeamSize] = useState('1-5');
  const [funding, setFunding] = useState('under-2cr');
  const [planTier, setPlanTier] = useState<'basic' | 'plus'>('plus');
  const [includeRepMonitor, setIncludeRepMonitor] = useState(false);

  const estimate = useMemo(() => {
    const base = planTier === 'basic' ? 2499 : 4999;
    const multiplier =
      STAGE_MULTIPLIER[stage].factor *
      SECTOR_MULTIPLIER[sector].factor *
      TEAM_MULTIPLIER[teamSize].factor *
      FUNDING_MULTIPLIER[funding].factor;

    const raw = Math.round((base * multiplier) / 100) * 100 + (includeRepMonitor ? 999 : 0);
    const low = Math.max(1999, Math.round((raw * 0.9) / 100) * 100);
    const high = Math.round((raw * 1.15) / 100) * 100;

    return { midpoint: raw, low, high };
  }, [stage, sector, teamSize, funding, planTier, includeRepMonitor]);

  return (
    <Section background="slate" className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="amber" className="mb-4">
          <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
          Illustrative Calculator
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
          Premium Estimator
        </h1>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Explore an illustrative monthly range for your startup’s safety net based on stage,
          sector, team size, and funding.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-12">
        {/* Form inputs */}
        <Card className="lg:col-span-7" padding="lg">
          <h2 className="text-lg font-bold text-navy-900">Your Startup Profile</h2>
          <p className="mt-1 text-sm text-slate-500">
            Adjust the parameters below to preview how pilot pricing might scale.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="est-stage"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
              >
                Startup Stage
              </label>
              <select
                id="est-stage"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {Object.entries(STAGE_MULTIPLIER).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="est-sector"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
              >
                Primary Sector
              </label>
              <select
                id="est-sector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {Object.entries(SECTOR_MULTIPLIER).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="est-team"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                >
                  Team Size
                </label>
                <select
                  id="est-team"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {Object.entries(TEAM_MULTIPLIER).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="est-funding"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700"
                >
                  Funding Raised
                </label>
                <select
                  id="est-funding"
                  value={funding}
                  onChange={(e) => setFunding(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {Object.entries(FUNDING_MULTIPLIER).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-700">
                Plan Tier
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPlanTier('basic')}
                  className={`rounded-xl border px-4 py-3 text-left transition-all ${
                    planTier === 'basic'
                      ? 'border-navy-700 bg-navy-50/70 ring-2 ring-navy-700/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <span className="block text-sm font-bold text-navy-900">Basic</span>
                  <span className="block text-xs text-slate-500">Closure payout + post-mortem</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPlanTier('plus')}
                  className={`rounded-xl border px-4 py-3 text-left transition-all ${
                    planTier === 'plus'
                      ? 'border-amber-500 bg-amber-50/70 ring-2 ring-amber-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <span className="block text-sm font-bold text-navy-900">Plus (Popular)</span>
                  <span className="block text-xs text-slate-500">+ Defamation legal cover</span>
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <div>
                <span className="block text-sm font-semibold text-navy-900">
                  Add Online Reputation Monitoring
                </span>
                <span className="block text-xs text-slate-500">
                  24/7 brand &amp; founder sentiment alerts (+₹999/mo illustrative)
                </span>
              </div>
              <input
                type="checkbox"
                checked={includeRepMonitor}
                onChange={(e) => setIncludeRepMonitor(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
            </label>
          </div>
        </Card>

        {/* Output Card */}
        <Card variant="navy" className="lg:col-span-5" padding="lg">
          <div className="flex items-center justify-between">
            <Badge variant="amber">Estimate only, not a quote</Badge>
            <span className="text-xs font-medium text-slate-300">Monthly (INR)</span>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Illustrative Monthly Estimate
            </p>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              ₹{estimate.midpoint.toLocaleString('en-IN')}
              <span className="text-lg font-medium text-slate-300">/mo</span>
            </p>
            <p className="mt-2 text-sm text-amber-300">
              Estimated range: ₹{estimate.low.toLocaleString('en-IN')} – ₹
              {estimate.high.toLocaleString('en-IN')} / month
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-navy-800/80 p-4 text-xs leading-relaxed text-slate-300">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <p>
                <strong className="text-white">Estimate only, not a quote.</strong> Final pricing,
                waiting periods, and eligibility terms will be determined by our licensed insurance
                partner upon formal underwriting.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <ButtonLink to="/#waitlist" size="lg" className="w-full justify-center">
              Join the Waitlist
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              to="/plans"
              variant="outline-dark"
              size="md"
              className="w-full justify-center"
            >
              Compare Plan Details
            </ButtonLink>
          </div>
        </Card>
      </div>
    </Section>
  );
}
