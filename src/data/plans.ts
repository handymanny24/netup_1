export interface PlanItem {
  id: 'basic' | 'plus' | 'addon';
  name: string;
  badge?: string;
  priceMonthly: string;
  billingNote: string;
  summary: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
}

export const plans: PlanItem[] = [
  {
    id: 'basic',
    name: 'Basic',
    priceMonthly: '₹2,499',
    billingNote: 'per month · illustrative pilot pricing',
    summary:
      'Essential safety net for early-stage teams looking for structured closure support and learnings.',
    features: [
      'Transition payout upon eligible venture closure (via licensed insurer partner)',
      'Structured Post-Mortem Report with market & financial benchmarks',
      'Wind-down checklist and closure documentation templates',
      'Quarterly Startup Health Check dashboard access',
    ],
    ctaLabel: 'Join Waitlist for Basic',
  },
  {
    id: 'plus',
    name: 'Plus',
    badge: 'Most Popular',
    priceMonthly: '₹4,999',
    billingNote: 'per month · illustrative pilot pricing',
    summary:
      'Designed for growing startups seeking both venture closure support and legal dispute protection.',
    features: [
      'Everything in Basic, with higher eligible closure payout tier',
      'Defamation & dispute legal fee cover (up to ₹5–10 lakh subject to policy terms)',
      'Legal notice drafting support and initial counsel consultations',
      'Priority post-mortem analyst review & founder debrief call',
    ],
    ctaLabel: 'Join Waitlist for Plus',
    highlighted: true,
  },
  {
    id: 'addon',
    name: 'Reputation Monitoring',
    badge: 'Add-on',
    priceMonthly: '+₹999',
    billingNote: 'per month · pairs with Basic or Plus',
    summary:
      'Proactive brand and founder sentiment alerts to catch online escalations early.',
    features: [
      '24/7 monitoring across news, social channels, and review forums',
      'Early-warning alerts for high-risk defamation or brand mentions',
      'Response playbook and PR escalation guidance',
      'Monthly reputation health summary',
    ],
    ctaLabel: 'Add to Waitlist Interest',
  },
];

export interface ComparisonRow {
  feature: string;
  basic: string;
  plus: string;
  addon: string;
}

export const planComparisonRows: ComparisonRow[] = [
  {
    feature: 'Eligible venture closure payout (underwritten by licensed partner)',
    basic: 'Core tier (illustrative)',
    plus: 'Enhanced tier (illustrative)',
    addon: 'Requires Basic or Plus',
  },
  {
    feature: 'Structured Post-Mortem Report',
    basic: 'Included',
    plus: 'Included + 1:1 debrief',
    addon: '—',
  },
  {
    feature: 'Wind-down & compliance checklist',
    basic: 'Included',
    plus: 'Included',
    addon: '—',
  },
  {
    feature: 'Defamation cover (legal fees up to ₹5–10 lakh)',
    basic: 'Not included',
    plus: 'Included (terms apply)',
    addon: '—',
  },
  {
    feature: 'Legal notice drafting & lawyer consultation',
    basic: 'Not included',
    plus: 'Included',
    addon: '—',
  },
  {
    feature: 'Online reputation monitoring & sentiment alerts',
    basic: 'Optional add-on',
    plus: 'Optional add-on',
    addon: 'Included',
  },
  {
    feature: 'Waiting period & eligibility terms',
    basic: '90–180 day pilot waiting period',
    plus: '90–180 day pilot waiting period',
    addon: 'Active immediately on pilot start',
  },
];
