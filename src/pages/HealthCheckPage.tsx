import { useState } from 'react';
import { HeartPulse, CheckCircle2, RotateCcw, ArrowRight, Lightbulb } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button, ButtonLink } from '../components/ui/Button';
import { healthQuestions, evaluateHealthScore } from '../data/healthCheck';
import { usePageMeta } from '../lib/seo';

export function HealthCheckPage() {
  usePageMeta(
    'Startup Health Check — NetUp',
    'Take our 6-question Startup Health Check to gauge runway, burn, revenue, churn, team, and market risk—plus get 3 practical founder tips.'
  );

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === healthQuestions.length;
  const result = submitted ? evaluateHealthScore(answers) : null;

  const selectOption = (questionId: string, riskPoints: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: riskPoints }));
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const levelBadgeVariant =
    result?.level === 'Low' ? 'emerald' : result?.level === 'Medium' ? 'amber' : 'rose';

  return (
    <Section background="slate" className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="navy" className="mb-4">
          <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
          6-Question Diagnostic
        </Badge>
        <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
          Startup Health Check
        </h1>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Answer six quick questions covering runway, burn, revenue, churn, team alignment, and
          market pressure for an instant risk snapshot.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        {/* Progress bar */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
            <span>Progress</span>
            <span>
              {answeredCount} of {healthQuestions.length} answered
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-amber-500 transition-all duration-300"
              style={{ width: `${(answeredCount / healthQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {!submitted ? (
          <div className="space-y-6">
            {healthQuestions.map((q, index) => (
              <Card key={q.id}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Question {index + 1} · {q.topic}
                  </span>
                  {answers[q.id] !== undefined && (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  )}
                </div>
                <h2 className="mt-2 text-base font-bold text-navy-900 sm:text-lg">{q.prompt}</h2>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {q.options.map((opt) => {
                    const selected = answers[q.id] === opt.riskPoints;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => selectOption(q.id, opt.riskPoints)}
                        aria-pressed={selected}
                        className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                          selected
                            ? 'border-amber-500 bg-amber-50 font-semibold text-navy-900 ring-2 ring-amber-500/20'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </Card>
            ))}

            <div className="flex flex-col items-center justify-between gap-3 pt-2 sm:flex-row">
              <p className="text-xs text-slate-500">
                Your answers stay in your browser and are not stored on a server.
              </p>
              <Button
                type="button"
                size="lg"
                disabled={!allAnswered}
                onClick={() => {
                  setSubmitted(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                View My Health Score
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        ) : (
          result && (
            <Card padding="lg" className="border-navy-200">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Illustrative Diagnostic Result
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold text-navy-900 sm:text-3xl">
                    {result.level} Risk Profile
                  </h2>
                </div>
                <Badge variant={levelBadgeVariant} className="px-4 py-1.5 text-sm">
                  Risk Score: {result.score} / {result.maxScore}
                </Badge>
              </div>

              <p className="mt-5 text-base leading-relaxed text-slate-700">{result.summary}</p>

              <div className="mt-7 rounded-2xl bg-slate-50 p-5 sm:p-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-900">
                  <Lightbulb className="h-4 w-4 text-amber-600" aria-hidden="true" />3 Practical
                  Next Steps
                </h3>
                <ul className="mt-4 space-y-3">
                  {result.tips.map((tip, i) => (
                    <li key={tip} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="pt-0.5 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <Button type="button" variant="outline" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Retake Health Check
                </Button>
                <ButtonLink to="/#waitlist" size="lg">
                  Join the Pilot Waitlist
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </Card>
          )
        )}
      </div>
    </Section>
  );
}
