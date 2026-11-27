import { isSupabaseConfigured, supabase } from './supabase';

export interface WaitlistPayload {
  name: string;
  email: string;
  startupStage: string;
  sector: string;
}

export interface PartnerInquiryPayload {
  name: string;
  organization: string;
  partnerType: string;
  message: string;
}

export interface SubmissionResult {
  mode: 'supabase' | 'mock';
  id: string;
}

const WAITLIST_STORAGE_KEY = 'netup_waitlist_submissions';
const PARTNER_STORAGE_KEY = 'netup_partner_inquiries';

function saveMockRecord<T extends Record<string, unknown>>(key: string, record: T): string {
  const id = `mock_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  try {
    const existingRaw = window.localStorage.getItem(key);
    const existing = existingRaw ? (JSON.parse(existingRaw) as unknown[]) : [];
    const next = [
      ...existing,
      { id, ...record, created_at: new Date().toISOString() },
    ];
    window.localStorage.setItem(key, JSON.stringify(next));
  } catch {
    // Ignore storage quota or private mode issues in mock fallback
  }
  return id;
}

export async function submitWaitlist(payload: WaitlistPayload): Promise<SubmissionResult> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          name: payload.name.trim(),
          email: payload.email.trim().toLowerCase(),
          startup_stage: payload.startupStage,
          sector: payload.sector,
        },
      ])
      .select('id')
      .single();

    if (error) {
      throw new Error(error.message || 'Unable to save your waitlist signup right now.');
    }

    return { mode: 'supabase', id: String(data?.id ?? 'submitted') };
  }

  // Mock fallback when Supabase credentials are not configured
  await new Promise((resolve) => setTimeout(resolve, 450));
  const id = saveMockRecord(WAITLIST_STORAGE_KEY, {
    name: payload.name.trim(),
    email: payload.email.trim().toLowerCase(),
    startup_stage: payload.startupStage,
    sector: payload.sector,
  });

  return { mode: 'mock', id };
}

export async function submitPartnerInquiry(
  payload: PartnerInquiryPayload
): Promise<SubmissionResult> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('partner_inquiries')
      .insert([
        {
          name: payload.name.trim(),
          organization: payload.organization.trim(),
          partner_type: payload.partnerType,
          message: payload.message.trim(),
        },
      ])
      .select('id')
      .single();

    if (error) {
      throw new Error(error.message || 'Unable to submit your partner inquiry right now.');
    }

    return { mode: 'supabase', id: String(data?.id ?? 'submitted') };
  }

  // Mock fallback when Supabase credentials are not configured
  await new Promise((resolve) => setTimeout(resolve, 450));
  const id = saveMockRecord(PARTNER_STORAGE_KEY, {
    name: payload.name.trim(),
    organization: payload.organization.trim(),
    partner_type: payload.partnerType,
    message: payload.message.trim(),
  });

  return { mode: 'mock', id };
}
