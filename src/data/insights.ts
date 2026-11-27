export interface InsightArticle {
  id: string;
  category: 'Why Startups Fail' | 'Founder Lessons' | 'Legal Tips';
  title: string;
  readTime: string;
  date: string;
  excerpt: string;
  takeaways: string[];
}

export const insightArticles: InsightArticle[] = [
  {
    id: 'runway-blindspots',
    category: 'Why Startups Fail',
    title: 'The Quiet Cash Crunch: Why 4 Months of Runway Is Actually 6 Weeks',
    readTime: '5 min read',
    date: 'Pilot Research · 2026',
    excerpt:
      'Delayed enterprise receivables, notice-period payroll obligations, and wind-down compliance costs often compress nominal runway far faster than founders model.',
    takeaways: [
      'Separate cash-on-hand from committed wind-down liabilities (statutory dues, vendor notices, severance).',
      'Set an objective 90-day decision gate before capital drops below operational minimums.',
      'Track net cash burn alongside collection lag rather than booked ARR alone.',
    ],
  },
  {
    id: 'honest-post-mortems',
    category: 'Founder Lessons',
    title: 'Turning an Orderly Shutdown Into Your Next Venture’s Unfair Advantage',
    readTime: '6 min read',
    date: 'Founder Playbook · 2026',
    excerpt:
      'Most failed ventures disappear without an objective record of what worked, what stalled, and which assumptions broke. A structured post-mortem preserves that insight.',
    takeaways: [
      'Document distribution experiments and unit economics before teams disperse.',
      'Share transparent closure notes with angels and employees to preserve long-term trust.',
      'Distill 3 testable hypotheses to carry into your next product or role.',
    ],
  },
  {
    id: 'online-defamation-basics',
    category: 'Legal Tips',
    title: 'Handling Co-Founder Disputes & Online Defamation Before They Escalate',
    readTime: '4 min read',
    date: 'Legal Brief · 2026',
    excerpt:
      'During stressful pivots or closures, public accusations on social platforms can harm future fundraising and hiring. Early legal documentation keeps responses measured.',
    takeaways: [
      'Preserve timestamped screenshots and factual correspondence before responding publicly.',
      'Use calm, counsel-reviewed cease-and-desist or clarification notices rather than reactive threads.',
      'Ensure founder agreements clearly outline IP assignment, departure terms, and communication protocols.',
    ],
  },
  {
    id: 'distribution-vs-product',
    category: 'Why Startups Fail',
    title: 'Built the Product, Missed the Channel: Lessons From 40 Early Closures',
    readTime: '7 min read',
    date: 'Pilot Research · 2026',
    excerpt:
      'Early teams frequently ship strong technical products while underestimating customer acquisition payback cycles in conservative B2B markets.',
    takeaways: [
      'Validate willingness to pay with signed pilots before expanding engineering headcount.',
      'Monitor CAC payback every 30 days rather than waiting for quarter-end reviews.',
      'Identify channel concentration early if a single partner drives over 50% of leads.',
    ],
  },
];

export const samplePostMortemContent = `NETUP — SAMPLE STRUCTURED POST-MORTEM REPORT (ILLUSTRATIVE TEMPLATE)
=======================================================================
Venture Name: Northstar Logistics SaaS (Illustrative Case Study)
Stage at Closure: Seed · 14 months active · B2B Supply Chain
Prepared By: NetUp Post-Mortem & Founder Transition Team

1. EXECUTIVE SUMMARY
- Primary Closure Drivers: Extended enterprise sales cycles (6.5 months avg vs. 2.5 months modeled) and rising receivables lag led to an orderly wind-down with 2 months of runway remaining.
- What Worked: High product NPS (64) among mid-market warehouse teams; 82% feature adoption within 14 days of onboarding.
- What Broke: Customer acquisition cost exceeded 18-month gross margin payback; single-channel dependency on outbound SDRs.

2. FINANCIAL & RUNWAY TIMELINE
- Peak Cash Balance: ₹92.0 lakh (Month 3)
- Average Net Burn: ₹6.8 lakh/month
- Decision Gate Triggered: Month 12 (2.2 months remaining cash) — founders initiated orderly wind-down to protect statutory compliance and vendor settlements.

3. KEY FOUNDER LESSONS FOR NEXT VENTURE
1) Price for annual upfront contracts or implementation fees in enterprise logistics.
2) Keep fixed headcount lean until repeatable self-serve or partner channel traction is verified.
3) Maintain clean monthly cap-table and vendor records to simplify closure or acqui-hire conversations.

4. WIND-DOWN CHECKLIST SUMMARY
- [x] Board & investor closure resolution documented
- [x] Employee notice, relieving letters, and statutory settlements scheduled
- [x] Customer data export window (30 days) communicated clearly
- [x] Domain, IP, and vendor contract termination notices archived

NOTE: This is an illustrative sample template for the NetUp pilot concept.
`;
