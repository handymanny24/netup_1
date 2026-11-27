import { HelpCircle, ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Accordion } from '../components/ui/Accordion';
import { Badge } from '../components/ui/Badge';
import { ButtonLink } from '../components/ui/Button';
import { faqItems } from '../data/faq';
import { usePageMeta } from '../lib/seo';

export function FaqPage() {
  usePageMeta(
    'Frequently Asked Questions — NetUp',
    'Answers on what counts as venture failure, waiting periods, payout limits, licensed underwriting partners, defamation cover, and pilot eligibility.'
  );

  return (
    <Section background="slate" className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="navy" className="mb-4">
          <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
          Pilot Clarity
        </Badge>
        <h1 className="font-display text-4xl font-normal tracking-[-0.012em] text-[#f5efe2] sm:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-base text-[#f5efe2]/72 sm:text-lg">
          Straightforward answers on how the NetUp pilot concept works, who underwrites coverage,
          and what eligibility guardrails apply.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion items={faqItems} />

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#f5efe2]/20 bg-[#090b0f]/80 p-6 text-center backdrop-blur-xl shadow-soft sm:flex-row sm:text-left">
          <div>
            <h2 className="text-base font-semibold text-[#f5efe2]">Still have questions?</h2>
            <p className="mt-1 text-sm text-[#f5efe2]/68">
              Join the waitlist or reach out via our Partners page and we’ll respond directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/#waitlist" size="md">
              Join Waitlist
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to="/partners" variant="outline" size="md">
              Contact Team
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
