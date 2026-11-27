        {fieldErrors.partnerType && (
          <p className="mt-1 text-xs text-rose-300">{fieldErrors.partnerType}</p>
        )}
      </div>
      <div>
        <label htmlFor="partner-message" className={labelClass}>
          How would you like to collaborate?
        </label>
        <textarea
          id="partner-message"
          rows={4}
          placeholder="Tell us about your cohort, legal practice, or underwriting interest..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (fieldErrors.message) setFieldErrors((p) => ({ ...p, message: '' }));
          }}
          aria-invalid={Boolean(fieldErrors.message)}
          className={inputClass(fieldErrors.message)}
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs text-rose-300">{fieldErrors.message}</p>
        )}
      </div>
      <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending inquiry…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Partner Inquiry
          </>
        )}
      </Button>
    </form>
  );
}import { useState, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { submitPartnerInquiry } from '../../lib/submissions';

const PARTNER_TYPES = [
  'Incubator / Accelerator',
  'Law Firm / Legal Counsel',
  'Licensed Insurer / Underwriter',
  'Venture Fund / Angel Network',
  'Other Ecosystem Partner',
];

export function PartnerInquiryForm() {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [partnerType, setPartnerType] = useState('');
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [storageMode, setStorageMode] = useState<'supabase' | 'mock' | null>(null);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) {
      errors.name = 'Please enter your name.';
    }
    if (!organization.trim()) {
      errors.organization = 'Please enter your organization name.';
    }
    if (!partnerType) {
      errors.partnerType = 'Please select a partner category.';
    }
    if (!message.trim() || message.trim().length < 10) {
      errors.message = 'Please share a short note (at least 10 characters).';
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
      const result = await submitPartnerInquiry({
        name,
        organization,
        partnerType,
        message,
      });
      setStatus('success');
      setStorageMode(result.mode);
      setFeedback(
        'Thank you for reaching out. Our partnerships team will review your note and respond shortly.'
      );
      setName('');
      setOrganization('');
      setPartnerType('');
      setMessage('');
      setFieldErrors({});
    } catch (err) {
      setStatus('error');
      setFeedback(
        err instanceof Error
          ? err.message
          : 'Unable to submit your inquiry right now. Please try again.'
      );
    }
  };

  const labelClass =
    'mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-[#b8cad6]';

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
        className="rounded-2xl border border-emerald-400/30 bg-emerald-950/35 p-6 text-[#f5efe2]"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-300" aria-hidden="true" />
          <div>
            <h3 className="text-base font-semibold">Partner inquiry received</h3>
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
              Send another inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-rose-400/40 bg-rose-950/40 p-3.5 text-sm text-rose-200"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" aria-hidden="true" />
          <span>{feedback}</span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className={labelClass}>
            Your Name
          </label>
          <input
            id="partner-name"
            type="text"
            placeholder="Priya Nair"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (fieldErrors.name) setFieldErrors((p) => ({ ...p, name: '' }));
            }}
            aria-invalid={Boolean(fieldErrors.name)}
            className={inputClass(fieldErrors.name)}
          />
          {fieldErrors.name && <p className="mt-1 text-xs text-rose-300">{fieldErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="partner-org" className={labelClass}>
            Organization
          </label>
          <input
            id="partner-org"
            type="text"
            placeholder="Horizon Venture Studio"
            value={organization}
            onChange={(e) => {
              setOrganization(e.target.value);
              if (fieldErrors.organization) setFieldErrors((p) => ({ ...p, organization: '' }));
            }}
            aria-invalid={Boolean(fieldErrors.organization)}
            className={inputClass(fieldErrors.organization)}
          />
          {fieldErrors.organization && (
            <p className="mt-1 text-xs text-rose-300">{fieldErrors.organization}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="partner-type" className={labelClass}>
          Partner Type
        </label>
        <select
          id="partner-type"
          value={partnerType}
          onChange={(e) => {
            setPartnerType(e.target.value);
            if (fieldErrors.partnerType) setFieldErrors((p) => ({ ...p, partnerType: '' }));
          }}
          aria-invalid={Boolean(fieldErrors.partnerType)}
          className={inputClass(fieldErrors.partnerType)}
        >
          <option value="">Select partner category</option>
          {PARTNER_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {fieldErrors.partnerType && (
          <p className="mt-1 text-xs text-rose-300">{fieldErrors.partnerType}</p>
        )}
      </div>

      <div>
        <label htmlFor="partner-message" className={labelClass}>
          How would you like to collaborate?
        </label>
        <textarea
          id="partner-message"
          rows={4}
          placeholder="Tell us about your cohort, legal practice, or underwriting interest..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (fieldErrors.message) setFieldErrors((p) => ({ ...p, message: '' }));
          }}
          aria-invalid={Boolean(fieldErrors.message)}
          className={inputClass(fieldErrors.message)}
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs text-rose-300">{fieldErrors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending inquiry…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Partner Inquiry
          </>
        )}
      </Button>
    </form>
  );
}
