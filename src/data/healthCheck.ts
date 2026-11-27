export interface HealthQuestion {
  id: string;
  topic: string;
  prompt: string;
  options: {
    label: string;
    riskPoints: number;
  }[];
}

export const healthQuestions: HealthQuestion[] = [
  {
    id: 'runway',
    topic: 'Cash Runway',
    prompt: 'How many months of cash runway does your startup currently have at current net burn?',
    options: [
      { label: '12+ months of runway', riskPoints: 1 },
      { label: '6 to 11 months of runway', riskPoints: 2 },
      { label: '3 to 5 months of runway', riskPoints: 4 },
      { label: 'Under 3 months of runway', riskPoints: 5 },
    ],
  },
  {
    id: 'burn',
    topic: 'Monthly Burn Trend',
    prompt: 'How predictable is your monthly net burn over the last 3 months?',
    options: [
      { label: 'Profitable or steady within 5% of plan', riskPoints: 1 },
      { label: 'Slightly variable (5–15% swings)', riskPoints: 2 },
      { label: 'Growing faster than revenue (15–30% over plan)', riskPoints: 4 },
      { label: 'Unpredictable or unmonitored burn spikes', riskPoints: 5 },
    ],
  },
  {
    id: 'revenue',
    topic: 'Revenue & Traction',
    prompt: 'What best describes your current revenue validation?',
    options: [
      { label: 'Consistent recurring revenue with diverse customers', riskPoints: 1 },
      { label: 'Early paying customers or signed paid pilots', riskPoints: 2 },
      { label: 'Free pilots / LOIs only, still testing willingness to pay', riskPoints: 3 },
      { label: 'Pre-revenue with unvalidated pricing assumptions', riskPoints: 4 },
    ],
  },
  {
    id: 'churn',
    topic: 'Customer Retention / Churn',
    prompt: 'How are early customers sticking around after onboarding?',
    options: [
      { label: 'Strong retention (<3% monthly churn / high repeat usage)', riskPoints: 1 },
      { label: 'Moderate churn (3–7% monthly) as we refine ICP', riskPoints: 2 },
      { label: 'High churn (>8% monthly) or stalled renewals', riskPoints: 4 },
      { label: 'Too early to measure retention reliably', riskPoints: 3 },
    ],
  },
  {
    id: 'team',
    topic: 'Team & Founder Alignment',
    prompt: 'How aligned and resilient is your core founding and leadership team?',
    options: [
      { label: 'Clear roles, signed founder agreements, strong alignment', riskPoints: 1 },
      { label: 'Generally aligned, minor role overlap as we scale', riskPoints: 2 },
      { label: 'Informal agreements or recent co-founder friction', riskPoints: 4 },
      { label: 'Solo founder stretched across product, sales, and ops', riskPoints: 3 },
    ],
  },
  {
    id: 'market',
    topic: 'Market & Competitive Pressure',
    prompt: 'How is customer demand and competitive pressure shifting in your market?',
    options: [
      { label: 'Clear pain point with shortening sales cycles', riskPoints: 1 },
      { label: 'Healthy demand, though enterprise procurement is slow', riskPoints: 2 },
      { label: 'Heavy discounting or crowded lookalike competitors', riskPoints: 4 },
      { label: 'Uncertain regulatory or macro headwinds affecting buyers', riskPoints: 5 },
    ],
  },
];

export interface HealthResult {
  level: 'Low' | 'Medium' | 'High';
  score: number;
  maxScore: number;
  summary: string;
  tips: string[];
}

export function evaluateHealthScore(answers: Record<string, number>): HealthResult {
  const values = Object.values(answers);
  const score = values.reduce((acc, v) => acc + v, 0);
  const maxScore = healthQuestions.length * 5;

  if (score <= 12) {
    return {
      level: 'Low',
      score,
      maxScore,
      summary:
        'Your fundamentals look disciplined. Focus on protecting your margin of safety and keeping governance clean as you scale.',
      tips: [
        'Lock in written founder IP and dispute-resolution clauses while alignment is high.',
        'Maintain a 90-day cash buffer separate from growth marketing commitments.',
        'Run quarterly experiment retrospectives so learnings stay documented.',
      ],
    };
  }

  if (score <= 20) {
    return {
      level: 'Medium',
      score,
      maxScore,
      summary:
        'You have solid momentum alongside a few classic early-stage pressure points. Tightening burn visibility and retention metrics now will pay off.',
      tips: [
        'Model a conservative downside case assuming receivables take 30 days longer to collect.',
        'Focus the next 6 weeks on your highest-retaining customer segment rather than broad expansion.',
        'Audit vendor lock-ins and annual commitments so fixed costs stay flexible.',
      ],
    };
  }

  return {
    level: 'High',
    score,
    maxScore,
    summary:
      'Several runway or validation pressures need immediate attention. Acting early gives you options—whether that means a focused pivot, bridge, or orderly transition.',
    tips: [
      'Freeze non-essential spend immediately to extend cash runway past the next milestone.',
      'Hold a candid founder & advisor review within 7 days to pick one core validation test.',
      'Keep statutory filings, payroll records, and customer communications organized to reduce personal stress.',
    ],
  };
}
