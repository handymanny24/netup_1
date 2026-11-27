import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import {
  LayoutDashboard,
  AlertTriangle,
  Info,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ButtonLink } from '../components/ui/Button';
import { dashboardKpis, cashBalanceSeries, demoAlerts } from '../data/dashboardDemo';
import { usePageMeta } from '../lib/seo';

export function DashboardDemoPage() {
  usePageMeta(
    'Founder Dashboard Demo — NetUp',
    'Explore an interactive demo preview of the NetUp Founder Dashboard with mock runway, monthly burn, risk score, alerts, and cash-balance chart.'
  );

  return (
    <Section background="slate" className="py-12 sm:py-16">
      {/* Top Demo Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-2xl border border-[#f5efe2]/22 bg-[#0b0d12]/80 p-5 backdrop-blur-xl sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <LayoutDashboard className="mt-0.5 h-5 w-5 shrink-0 text-[#b8cad6]" aria-hidden="true" />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="amber">Demo preview</Badge>
              <h1 className="font-display text-2xl font-normal tracking-wide text-[#f5efe2] sm:text-3xl">
                Founder Resilience Dashboard
              </h1>
            </div>
            <p className="mt-1 text-sm text-[#f5efe2]/72">
              All numbers, alerts, and cash projections below use mock illustrative data for a
              sample Seed-stage SaaS startup.
            </p>
          </div>
        </div>

        <ButtonLink to="/#waitlist" size="sm" className="shrink-0">
          Join Pilot Waitlist
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>

      {/* KPI Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardKpis.map((kpi) => (
          <Card key={kpi.label} padding="sm">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#b8cad6]">
              {kpi.label}
            </p>
            <p className="mt-2 font-display text-3xl font-normal text-[#f5efe2] sm:text-4xl">
              {kpi.value}
            </p>
            <p className="mt-1 text-xs text-[#f5efe2]/60">{kpi.delta}</p>
          </Card>
        ))}
      </div>

      {/* Chart + Alerts */}
      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        <Card className="lg:col-span-7" padding="md">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-semibold text-[#f5efe2]">
                Cash Balance Trajectory (₹ Lakhs)
              </h2>
              <p className="text-xs text-[#f5efe2]/55">
                Actual monthly closing cash vs. baseline burn projection (Mock Data)
              </p>
            </div>
            <Badge variant="slate">Demo preview</Badge>
          </div>

          <div className="h-72 w-full sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={cashBalanceSeries}
                margin={{ top: 10, right: 16, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(245, 239, 226, 0.12)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#b8b3a6' }} />
                <YAxis
                  tick={{ fontSize: 12, fill: '#b8b3a6' }}
                  tickFormatter={(v) => `₹${v}L`}
                />
                <Tooltip
                  formatter={(value: number) => [`₹${value} Lakhs`, '']}
                  contentStyle={{
                    backgroundColor: '#090b0f',
                    borderRadius: '12px',
                    borderColor: 'rgba(245, 239, 226, 0.25)',
                    color: '#f5efe2',
                    fontSize: '12px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', color: '#f5efe2' }} />
                <Line
                  type="monotone"
                  dataKey="cashLakhs"
                  name="Cash Balance (Actual / Est)"
                  stroke="#f5efe2"
                  strokeWidth={2.75}
                  dot={{ r: 4, fill: '#f5efe2' }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="projectedLakhs"
                  name="Planned Runway Baseline"
                  stroke="#9fb4c7"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="lg:col-span-5" padding="md">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#f5efe2]">Early-Warning Alerts</h2>
            <Badge variant="navy">3 Active</Badge>
          </div>

          <div className="space-y-3.5">
            {demoAlerts.map((alert) => {
              const Icon =
                alert.severity === 'warning'
                  ? AlertTriangle
                  : alert.severity === 'info'
                  ? Info
                  : CheckCircle2;
              const style =
                alert.severity === 'warning'
                  ? 'border-amber-300/25 bg-amber-950/25 text-amber-200'
                  : alert.severity === 'info'
                  ? 'border-[#b8cad6]/25 bg-white/[0.04] text-[#b8cad6]'
                  : 'border-emerald-400/25 bg-emerald-950/25 text-emerald-200';

              return (
                <div key={alert.id} className={`rounded-xl border p-4 ${style}`}>
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-[#f5efe2]">{alert.title}</p>
                        <span className="text-[11px] font-medium text-[#f5efe2]/50">
                          {alert.time}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-[#f5efe2]/72">
                        {alert.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </Section>
  );
}
