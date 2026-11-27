import {
  Shield,
  BookOpen,
  Scale,
  TrendingDown,
  FileWarning,
  BrainCircuit,
  Check,
  Quote,
  Building2,
  ClipboardCheck,
  Activity,
  FileSearch,
  HandHeart,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Section, SectionHeader } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { WaitlistForm } from '../components/forms/WaitlistForm';
import { plans } from '../data/plans';
import { usePageMeta } from '../lib/seo';
import { useAmbientSound } from '../lib/ambientSound';

const problemCards = [
  {
    icon: TrendingDown,
    title: 'Sudden financial whiplash',
    description:
      'When an early venture runs out of runway, founders often absorb abrupt personal income loss and wind-down bills at the exact same moment.',
  },
  {
    icon: Scale,
    title: 'Costly legal & reputation friction',
    description:
      'Vendor disputes, co-founder misunderstandings, or online defamation during a stressful pivot can spiral without affordable legal counsel.',
  },
  {
    icon: FileWarning,
    title: 'Lost lessons after shutdown',
    description:
      'Most closures end in silence. Without an objective post-mortem, hard-earned insights on unit economics and distribution fade away.',
  },
];

const solutionPillars = [
  {
    icon: Shield,
    pillar: 'Protect',
    title: 'Eligible closure transition payout',
    description:
      'A modest financial cushion if an eligible venture closes after the waiting period—offered through a licensed insurance partner to help founders transition responsibly.',
  },
  {
    icon: BookOpen,
    pillar: 'Learn',
    title: 'Structured post-mortem report',
    description:
      'Every closure deserves a lesson. We help document what worked, where cash or GTM assumptions broke, and actionable takeaways for your next chapter.',
  },
  {
    icon: BrainCircuit,
    pillar: 'Defend',
    title: 'Legal support & reputation monitoring',
    description:
      'Access counsel consultations, notice drafting, and optional online reputation monitoring so disputes are handled calmly before they escalate.',
  },
];

const timelineSteps = [
  {
    step: '01',
    icon: ClipboardCheck,
    title: 'Subscribe',
    description:
      'Choose Basic or Plus, complete simple onboarding checks, and start your pilot membership.',
  },
  {
    step: '02',
    icon: Activity,
    title: 'Track startup health',
    description:
      'Use quarterly health checks and runway tracking to spot burn or retention risks early.',
  },
  {
    step: '03',
    icon: FileSearch,
    title: 'If the venture closes: claim review',
    description:
      'Submit formal closure documentation for transparent eligibility and waiting-period review.',
  },
  {
    step: '04',
    icon: HandHeart,
    title: 'Payout + post-mortem + wind-down support',
    description:
      'Eligible startups receive transition support, a structured post-mortem report, and compliance checklists.',
  },
];

const testimonials = [
  {
    quote:
      '“Knowing there was a structured plan for wind-down compliance and legal guidance let us take smarter product bets without reckless anxiety.”',
    author: 'Rohan Kulkarni',
    role: 'Founder, Seed-stage B2B SaaS (Pilot Advisory Group)',
  },
  {
    quote:
      '“The post-mortem framework turns a tough shutdown into clear, shareable insights that angels and future teams actually respect.”',
    author: 'Meera Krishnan',
    role: 'Program Director, Early-Stage Incubator (Illustrative)',
  },
];

const partnerLogos = [
  'Horizon Venture Studio',
  'LexBridge Startup Counsel',
  'Catalyst Seed Network',
  'Meridian Underwriting Lab',
];

export function HomePage() {
  usePageMeta(
    'NetUp — Founder Safety Net, Post-Mortems & Legal Support',
    'Every startup deserves a safety net. Every failure deserves a lesson. Join the NetUp pilot waitlist for transition support, post-mortem insights, and legal protection.'
  );

  const { isPlaying, toggleSound } = useAmbientSound();

  return (
    <>
      {/* Full-Screen Atmospheric Landing Hero */}
      <section className="relative flex min-h-[calc(100vh-78px)] flex-col items-center justify-center px-5 py-16 text-center sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center animate-fade-up">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#b8cad6] sm:text-xs">
            Pilot Safety Net · For Early-Stage Founders
          </p>

          <h1 className="font-display text-[clamp(3.35rem,9.5vw,7.4rem)] font-normal leading-[0.92] tracking-[-0.014em] text-[#f5efe2]">
            Building a startup is risky.
            <br />
            Protect the journey.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-[1.45] text-[#f5efe2]/85 sm:mt-10 sm:text-[19px]">
            Every startup deserves a safety net.
            <br />
            Every failure deserves a lesson.
          </p>

          <p className="mt-3 max-w-lg text-xs leading-relaxed text-[#f5efe2]/60 sm:text-sm">
            Eligible closure transition support, structured post-mortem reports, and legal
            defamation protection—built for resilient builders.
          </p>

          {/* Round cream-bordered arrow CTA + secondary pill */}
          <div className="mt-8 flex flex-col items-center gap-5 sm:mt-9">
            <div className="flex items-center gap-4">
              <Link
                to="/#how-it-works"
                aria-label="See how NetUp works"
                className="group grid h-[58px] w-[58px] place-items-center rounded-full border-[1.5px] border-[#f5efe2] text-[#f5efe2] transition-all duration-300 hover:bg-[#f5efe2] hover:text-[#151510]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px] fill-none stroke-current transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12h16M14 6l6 6-6 6" />
                </svg>
              </Link>

              <ButtonLink to="/#waitlist" size="lg">
                Join the Waitlist
              </ButtonLink>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs uppercase tracking-[0.16em] text-[#f5efe2]/65">
              <Link to="/health-check" className="transition-colors hover:text-[#f5efe2]">
                Startup Health Check →
              </Link>
              <Link to="/demo" className="transition-colors hover:text-[#f5efe2]">
                Dashboard Demo →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom-right corner cue + divider + sound toggle */}
        <div className="mt-12 flex items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#f5efe2]/75 sm:absolute sm:bottom-9 sm:right-11 sm:mt-0 sm:text-xs">
          <a href="#problem" className="transition-opacity hover:opacity-70">
            Scroll to explore
          </a>
          <span className="h-6 w-px bg-[#f5efe2]/40" aria-hidden="true" />
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={isPlaying}
            aria-label="Ambient sound"
            className="grid h-7 w-7 place-items-center text-[#f5efe2] transition-opacity hover:opacity-75"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-none stroke-current"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 9.5v5h3.5L12 18V6L7.5 9.5Z" />
              <path
                d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"
                className={`transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
              />
              <path
                d="m16 10 4 4m0-4-4 4"
                className={`transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <Section background="slate" id="problem">
        <SectionHeader
          eyebrow="The Founder Reality"
          title="Why building early feels like walking without a net."
          description="Most startup support celebrates launches and funding rounds—but leaves founders isolated when experiments don’t pan out."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {problemCards.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} hover className="flex flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f5efe2]/20 bg-[#f5efe2]/10 text-[#f5efe2]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#f5efe2]">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#f5efe2]/70">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Solution Section */}
      <Section background="white" id="solution">
        <SectionHeader
          eyebrow="The NetUp Approach"
          title="Three pillars designed for resilient founders."
          description="Supportive protection before, during, and after tough startup transitions—built with transparency and conservative guardrails."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {solutionPillars.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.pillar} hover className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f5efe2]/20 bg-[#f5efe2]/10 text-[#f5efe2]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <Badge variant="navy">{item.pillar}</Badge>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#f5efe2]">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#f5efe2]/70">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* How It Works */}
      <Section background="slate" id="how-it-works">
        <SectionHeader
          eyebrow="How It Works"
          title="A clear 4-step journey from day one to closure support."
          description="No hidden hoops—just continuous visibility while you build, and structured care if you decide to wind down."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {timelineSteps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.step} className="relative flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#b8cad6]">
                    Step {step.step}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5efe2]/20 bg-white/5 text-[#f5efe2]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#f5efe2]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#f5efe2]/68">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section background="white" id="pricing-preview">
        <SectionHeader
          eyebrow="Pilot Pricing Preview"
          title="Simple plans built for early-stage budgets."
          description="Illustrative monthly pricing for our upcoming pilot. Waiting periods, underwriting checks, and eligibility terms apply."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              hover
              variant={plan.highlighted ? 'navy' : 'white'}
              className={`flex flex-col justify-between ${
                plan.highlighted ? 'border-[#f5efe2]/50 ring-1 ring-[#f5efe2]/25' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-2xl font-normal tracking-wide text-[#f5efe2]">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <Badge variant={plan.highlighted ? 'amber' : 'navy'}>{plan.badge}</Badge>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#f5efe2]">{plan.priceMonthly}</span>
                  <span className="text-xs text-[#f5efe2]/55">{plan.billingNote}</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#f5efe2]/72">{plan.summary}</p>

                <ul className="mt-6 space-y-2.5 border-t border-[#f5efe2]/12 pt-5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-[#f5efe2]/85">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#b8cad6]"
                        aria-hidden="true"
                      />
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
          <ButtonLink to="/plans" variant="secondary" size="md">
            Compare Full Plan Features
          </ButtonLink>
          <ButtonLink to="/estimator" variant="outline" size="md">
            Try Illustrative Price Estimator
          </ButtonLink>
        </div>
      </Section>

      {/* Social Proof Placeholder */}
      <Section background="slate" id="social-proof">
        <SectionHeader
          eyebrow="Early Ecosystem Interest"
          title="Trusted by founders & advisors shaping the pilot."
          description="Illustrative feedback and partner archetypes guiding NetUp before public cohort launch."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.author} variant="slate">
              <Quote className="h-6 w-6 text-[#b8cad6]" aria-hidden="true" />
              <p className="mt-3 text-base leading-relaxed text-[#f5efe2]">{t.quote}</p>
              <div className="mt-5 border-t border-[#f5efe2]/12 pt-3">
                <p className="text-sm font-semibold text-[#f5efe2]">{t.author}</p>
                <p className="text-xs text-[#f5efe2]/55">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#f5efe2]/14 bg-black/50 p-6 backdrop-blur-xl">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[#b8cad6]">
            Illustrative Pilot Ecosystem Partners
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#f5efe2]/12 bg-white/[0.03] px-4 py-3 text-center text-xs font-medium text-[#f5efe2]/85 sm:text-sm"
              >
                <Building2 className="h-4 w-4 shrink-0 text-[#b8cad6]" aria-hidden="true" />
                <span>{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA Banner + Waitlist Form */}
      <Section background="navy" id="waitlist">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Badge variant="amber" className="mb-4">
              Pilot Waitlist Open
            </Badge>
            <h2 className="font-display text-4xl font-normal tracking-[-0.012em] text-[#f5efe2] sm:text-5xl">
              Give your startup a thoughtful safety net.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#f5efe2]/72">
              Join early-stage founders, incubators, and legal partners helping shape NetUp’s first
              pilot cohort. No commitment required today.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-[#f5efe2]/78">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#b8cad6]" aria-hidden="true" />
                Early access to Startup Health Check &amp; post-mortem templates
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#b8cad6]" aria-hidden="true" />
                Priority onboarding once licensed partner underwriting opens
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Card variant="navy" padding="lg">
              <WaitlistForm darkSurface />
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
