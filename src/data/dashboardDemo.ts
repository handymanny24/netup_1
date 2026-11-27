export interface CashPoint {
  month: string;
  cashLakhs: number;
  projectedLakhs: number;
}

export interface DemoAlert {
  id: string;
  severity: 'warning' | 'info' | 'ok';
  title: string;
  detail: string;
  time: string;
}

export const dashboardKpis = [
  {
    label: 'Estimated Runway',
    value: '7.4 mos',
    delta: '-0.8 mos vs last month',
    status: 'amber' as const,
  },
  {
    label: 'Net Monthly Burn',
    value: '₹6.2 L',
    delta: '+4.5% vs 3-mo avg',
    status: 'slate' as const,
  },
  {
    label: 'Venture Risk Score',
    value: '42 / 100',
    delta: 'Moderate · Watch receivables',
    status: 'amber' as const,
  },
  {
    label: 'Coverage Waiting Period',
    value: 'Cleared',
    delta: 'Day 184 of active pilot',
    status: 'emerald' as const,
  },
];

export const cashBalanceSeries: CashPoint[] = [
  { month: 'Jun', cashLakhs: 78.5, projectedLakhs: 78.5 },
  { month: 'Jul', cashLakhs: 72.1, projectedLakhs: 72.0 },
  { month: 'Aug', cashLakhs: 66.4, projectedLakhs: 65.8 },
  { month: 'Sep', cashLakhs: 59.8, projectedLakhs: 59.2 },
  { month: 'Oct', cashLakhs: 52.6, projectedLakhs: 52.5 },
  { month: 'Nov', cashLakhs: 45.9, projectedLakhs: 45.9 },
  { month: 'Dec (Est)', cashLakhs: 39.4, projectedLakhs: 39.4 },
  { month: 'Jan (Est)', cashLakhs: 33.1, projectedLakhs: 33.1 },
  { month: 'Feb (Est)', cashLakhs: 26.8, projectedLakhs: 26.8 },
];

export const demoAlerts: DemoAlert[] = [
  {
    id: 'alert-1',
    severity: 'warning',
    title: 'Receivables collection lag crossed 48 days',
    detail: 'Two B2B invoices totaling ₹9.4 L are overdue by 18 days. Consider pausing non-core ad spend until settled.',
    time: '2 days ago',
  },
  {
    id: 'alert-2',
    severity: 'info',
    title: 'Reputation Monitor: 1 neutral forum mention reviewed',
    detail: 'No defamation risk detected on Glassdoor/Reddit scan; weekly sentiment digest archived.',
    time: '5 days ago',
  },
  {
    id: 'alert-3',
    severity: 'ok',
    title: 'Quarterly post-mortem readiness check synced',
    detail: 'Cap table, vendor list, and statutory compliance folder verified up to date.',
    time: '2 weeks ago',
  },
];
