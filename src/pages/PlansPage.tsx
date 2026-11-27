import { Check, Info, ShieldAlert } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ButtonLink } from '../components/ui/Button';
import { plans, planComparisonRows } from '../data/plans';
import { usePageMeta } from '../lib/seo';

export function PlansPage() {
  usePageMeta(
    'Plans & Comparison — NetUp',
    'Compare NetUp Basic, Plus, and Reputation Monitoring add-on plans for early-stage startup protection, post-mortem insights, and defamation legal cover.'
  );

  return (
    <>
      <Section background="slate" className="border-b border-slate-200/80 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="amber" className="mb-4">
            Illustrative Pilot Tiers
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
            Transparent plans for every stage of your runway
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Start with essential closure support and post-mortem insights on Basic, or add
            defamation legal protection with Plus.
          </p>
        </div>

        {/* Plan cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col justify-between ${
                plan.highlighted
                  ? 'border-2 border-amber-500 ring-4 ring-amber-500/10'
                  : 'border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-xl font-bold text-navy-900">{plan.name}</h2>
                  {plan.badge && (
                    <Badge variant={plan.highlighted ? 'amber' : 'navy'}>{plan.badge}</Badge>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-navy-900">{plan.priceMonthly}</span>
                  <span className="text-xs text-slate-500">{plan.billingNote}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{plan.summary}</p>
                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <ButtonLink
                  to="/#waitlist"
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  className="w-full justify-center"
                >
                  {plan.ctaLabel}
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section background="white">
        <SectionHeader
          eyebrow="Feature Matrix"
          title="Compare Basic, Plus, and Reputation Monitoring"
          description="A side-by-side breakdown of what is included in each illustrative pilot tier."
        />

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th scope="col" className="px-6 py-4 font-bold text-navy-900">
                  Coverage &amp; Support Feature
                </th>
                <th scope="col" className="px-6 py-4 font-bold text-navy-900">
                  Basic
                </th>
                <th scope="col" className="bg-amber-50/70 px-6 py-4 font-bold text-navy-900">
                  Plus <span className="ml-1 text-xs font-semibold text-amber-700">(Popular)</span>
                </th>
                <th scope="col" className="px-6 py-4 font-bold text-navy-900">
                  Reputation Add-on
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {planComparisonRows.map((row) => (
                <tr key={row.feature} className="hover:bg-slate-50/60">
                  <th scope="row" className="px-6 py-4 font-medium text-navy-900">
                    {row.feature}
                  </th>
                  <td className="px-6 py-4 text-slate-600">{row.basic}</td>
                  <td className="bg-amber-50/30 px-6 py-4 font-medium text-navy-900">
                    {row.plus}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.addon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Terms & Eligibility callout */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card variant="amber">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
              <div>
                <h3 className="text-base font-bold text-navy-900">
                  Waiting period &amp; eligibility terms apply
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                  Closure payout features include an onboarding review and an initial waiting period
                  (illustrative target: 90–180 days). Startups must maintain standard bookkeeping
                  and follow an orderly, documented wind-down process.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="navyTint">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-navy-700" aria-hidden="true" />
              <div>
                <h3 className="text-base font-bold text-navy-900">
                  Conservative pilot disclosure
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                  NetUp is not a licensed insurer and does not guarantee payouts. Insurance benefits
                  will be underwritten through a licensed insurance partner subject to regulatory
                  approval.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink to="/estimator" size="lg">
            Estimate Your Monthly Price
          </ButtonLink>
          <ButtonLink to="/faq" variant="outline" size="lg">
            Read Eligibility FAQ
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
