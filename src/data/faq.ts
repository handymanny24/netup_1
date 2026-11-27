import type { AccordionItem } from '../components/ui/Accordion';

export const faqItems: AccordionItem[] = [
  {
    id: 'what-counts-as-failure',
    question: 'What counts as a venture failure or closure under the pilot?',
    answer:
      'In the NetUp pilot design, an eligible closure refers to a documented, orderly cessation of business operations (such as formal board/founder wind-down resolution, cessation of commercial operations, and submission of financial records showing exhausted viable runway)—not voluntary pivots into a new entity or fraudulent dissolutions. Exact trigger definitions will be governed by the licensed insurer partner’s policy wording.',
  },
  {
    id: 'waiting-period',
    question: 'Is there a waiting period before coverage or payouts apply?',
    answer:
      'Yes. Like most structured protection products, plans include an initial waiting period (illustrative pilot target: 90 to 180 days from subscription activation) before closure-related benefits become eligible. Software tools such as the Startup Health Check, dashboard tracking, and reputation monitoring can be accessed right away.',
  },
  {
    id: 'payout-limits',
    question: 'What are the payout limits and are payouts guaranteed?',
    answer:
      'Payouts are never guaranteed—every claim is subject to eligibility verification, waiting periods, policy exclusions, and underwriting limits. Illustrative pilot tiers range from a modest founder transition cushion on Basic to an enhanced tier on Plus, alongside legal fee cover of up to ₹5–10 lakh for eligible defamation or dispute matters on Plus.',
  },
  {
    id: 'who-underwrites',
    question: 'Who underwrites the payout? Is NetUp a licensed insurer?',
    answer:
      'NetUp is a pilot subscription and founder-support platform, not a licensed insurance company. Any insurance-backed closure payout or legal expense cover will be underwritten and issued exclusively through a licensed insurance partner, subject to regulatory approval and formal policy terms.',
  },
  {
    id: 'defamation-cover',
    question: 'How does the defamation and legal support cover work?',
    answer:
      'On the Plus plan, founders receive access to vetted legal counsel for initial consultations, structured notice drafting (such as cease-and-desist or clarification letters), and defense/prosecution fee coverage up to ₹5–10 lakh for eligible defamation or commercial reputation disputes, subject to partner policy limits and exclusions.',
  },
  {
    id: 'eligibility',
    question: 'Which startups are eligible to join the pilot waitlist?',
    answer:
      'The pilot is designed for early-stage incorporated startups (idea/pre-seed through Series A) with clean basic bookkeeping, active operations, and at least 6 months of runway at onboarding. Joining the waitlist does not create an insurance contract; it lets us notify you as cohorts and licensed partner offerings open.',
  },
];
