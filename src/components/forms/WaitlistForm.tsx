import { useState, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { submitWaitlist } from '../../lib/submissions';

interface WaitlistFormProps {
  compact?: boolean;
  darkSurface?: boolean;
}

const STAGE_OPTIONS = [
  'Idea / Pre-incorporation',
  'Pre-seed / MVP',
  'Seed / Early Revenue',
  'Series A',
  'Bootstrapped',
];

const SECTOR_OPTIONS = [
  'SaaS / B2B Software',
  'Fintech',
  'Healthtech',
  'Consumer / D2C',
  'AI / DeepTech',
  'Edtech / Climate / Other',
];

export function WaitlistForm({ compact = false }: WaitlistFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [startupStage, setStartupStage] = useState('');
  const [sector, setSector] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [storageMode, setStorageMode] = useState<'supabase' | 'mock' | null>(null);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) {
      errors.name = 'Please enter your full name.';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Please enter a valid work or founder email.';
    }
    if (!startupStage) {
      errors.startupStage = 'Select your current startup stage.';
    }
    if (!sector) {
      errors.sector = 'Select your primary sector.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setFeedback('');

    try {
      const result = await submitWaitlist({
        name,
        email,
        startupStage,
        sector,
      });
      setStatus('success');
      setStorageMode(result.mode);
      setFeedback(
        "You're on the NetUp pilot waitlist! We'll share early cohort updates and eligibility criteria as we open spots."
      );
      setName('');
      setEmail('');
      setStartupStage('');
      setSector('');
      setFieldErrors({});
    } catch (err) {
      setStatus('error');
      setFeedback(
        err instanceof Error
          ? err.message
          : 'Something went wrong submitting your request. Please try again.'
      );
    }
  };

  const labelClass =
    'block text-[11px] font-medium uppercase tracking-[0.16em] text-[#b8cad6] mb-1.5';

  const inputClass = (hasError?: string) =>
    `w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#f5efe2] placeholder:text-[#f5efe2]/35 bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5efe2]/40 ${
      hasError
        ? 'border-rose-400/70'
        : 'border-[#f5efe2]/20 hover:border-[#f5efe2]/40 focus:border-[#f5efe2]'
    }`;

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-400/30 bg-emerald-950/35 p-6 text-left text-[#f5efe2]"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-300" aria-hidden="true" />
          <div>
            <h3 className="text-base font-semibold">Waitlist spot requested</h3>
            <p className="mt-1 text-sm text-[#f5efe2]/80">{feedback}</p>
            {storageMode === 'mock' && (
              <p className="mt-2 text-xs text-[#b8cad6]">
                Preview mode: saved locally in your browser (`localStorage`). Configure Supabase env
                vars to persist to a live database.
              </p>
            )}
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-[#f5efe2] underline underline-offset-4 hover:opacity-75"
            >
              Submit another founder
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-rose-400/40 bg-rose-950/40 p-3.5 text-sm text-rose-200"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" aria-hidden="true" />
          <span>{feedback}</span>
        </div>
      )}

      <div className={`grid gap-4 ${compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="waitlist-name" className={labelClass}>
            Founder Name
          </label>
          <input
            id="waitlist-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Aarav Mehta"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (fieldErrors.name) setFieldErrors((p) => ({ ...p, name: '' }));
            }}
            aria-invalid={Boolean(fieldErrors.name)}
            className={inputClass(fieldErrors.name)}
          />
          {fieldErrors.name && (
            <p className="mt-1 text-xs text-rose-300">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="waitlist-email" className={labelClass}>
            Work Email
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="aarav@startup.io"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: '' }));
            }}
            aria-invalid={Boolean(fieldErrors.email)}
            className={inputClass(fieldErrors.email)}
          />
          {fieldErrors.email && (
            <p className="mt-1 text-xs text-rose-300">{fieldErrors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="waitlist-stage" className={labelClass}>
            Startup Stage
          </label>
          <select
            id="waitlist-stage"
            name="startupStage"
            value={startupStage}
            onChange={(e) => {
              setStartupStage(e.target.value);
              if (fieldErrors.startupStage) setFieldErrors((p) => ({ ...p, startupStage: '' }));
            }}
            aria-invalid={Boolean(fieldErrors.startupStage)}
            className={inputClass(fieldErrors.startupStage)}
          >
            <option value="">Select stage</option>
            {STAGE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {fieldErrors.startupStage && (
            <p className="mt-1 text-xs text-rose-300">{fieldErrors.startupStage}</p>
          )}
        </div>

        <div>
          <label htmlFor="waitlist-sector" className={labelClass}>
            Sector
          </label>
          <select
            id="waitlist-sector"
            name="sector"
            value={sector}
            onChange={(e) => {
              setSector(e.target.value);
              if (fieldErrors.sector) setFieldErrors((p) => ({ ...p, sector: '' }));
            }}
            aria-invalid={Boolean(fieldErrors.sector)}
            className={inputClass(fieldErrors.sector)}
          >
            <option value="">Select sector</option>
            {SECTOR_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {fieldErrors.sector && (
            <p className="mt-1 text-xs text-rose-300">{fieldErrors.sector}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Joining waitlist…
            </>
          ) : (
            <>
              Join the Waitlist
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </Button>
        <p className="text-xs text-[#f5efe2]/55">Pilot waitlist only — no payment required today.</p>
      </div>
    </form>
  );
}
