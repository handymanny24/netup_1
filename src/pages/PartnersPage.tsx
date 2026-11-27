import { Building2, Scale, ShieldCheck, Check } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { PartnerInquiryForm } from '../components/forms/PartnerInquiryForm';
import { usePageMeta } from '../lib/seo';

const partnerTracks = [
  {
    icon: Building2,
    title: 'Incubators & Accelerators',
    badge: 'Cohort Partners',
    description:
      'Give founders in your cohort structured runway visibility, risk diagnostics, and an ethical wind-down safety net—so teams take bold, disciplined shots.',
    points: [
      'Cohort-wide Health Check workshops & benchmarking',
      'Standardized post-mortem templates for portfolio learning',
      'Preferential pilot waitlist access for cohort teams',
    ],
  },
  {
    icon: Scale,
    title: 'Law Firms',
    badge: 'Legal Network',
    description:
      'Deliver practical, founder-friendly preventive counsel, notice drafting, and defamation defense workflows to high-potential early-stage teams.',
    points: [
      'Fixed-scope initial consultations and notice drafting',
      'Structured pre-litigation dispute & defamation triage',
      'Orderly company closure & statutory compliance support',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Licensed Insurers',
    badge: 'Underwriting Partners',
    description:
      'Co-design transparent, conservatively underwritten venture closure and legal expense products tailored for the early-stage startup segment.',
    points: [
      'Structured risk telemetry & waiting-period controls',
      'Documented eligibility verification workflows',
      'Compliant distribution via licensed insurance infrastructure',
    ],
  },
];

export function PartnersPage() {
  usePageMeta(
    'Partners — NetUp',
    'Partner with NetUp across incubators and accelerators, startup law firms, and licensed insurers to build a safer early-stage founder ecosystem.'
  );

  return (
    <>
      <Section background="slate" className="py-14 sm:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="amber" className="mb-4">
            Ecosystem Partnerships
          </Badge>
          <h1 className="font-display text-4xl font-normal tracking-[-0.012em] text-[#f5efe2] sm:text-6xl">
            Build the founder safety net with us.
          </h1>
          <p className="mt-4 text-base text-[#f5efe2]/72 sm:text-lg">
            We are collaborating with incubators, startup legal practices, and licensed insurance
            underwriters ahead of our initial pilot cohort.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {partnerTracks.map((track) => {
            const Icon = track.icon;
            return (
              <Card key={track.title} hover className="flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f5efe2]/20 bg-[#f5efe2]/10 text-[#f5efe2]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <Badge variant="navy">{track.badge}</Badge>
                </div>
                <h2 className="mt-5 font-display text-2xl font-normal text-[#f5efe2]">
                  {track.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#f5efe2]/70">
                  {track.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-[#f5efe2]/12 pt-4 text-sm text-[#f5efe2]/82">
                  {track.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#b8cad6]"
                        aria-hidden="true"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="white" id="partner-form">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Partner With Us"
            title="Start a conversation with our team."
            description="Share your organization details and how you’d like to collaborate on the NetUp pilot."
          />

          <Card variant="navy" padding="lg">
            <PartnerInquiryForm />
          </Card>
        </div>
      </Section>
    </>
  );
}
