# NetUp — Founder Safety Net Platform (Pilot Marketing & Validation Site)

> **"Every startup deserves a safety net. Every failure deserves a lesson."**

NetUp is a responsive, multi-page marketing and validation website for a pilot subscription platform supporting early-stage startup founders with closure transition support, structured post-mortem reports, and legal/reputation protection.

> **Important Pilot Notice:** NetUp is a pilot concept, not a licensed insurer. Insurance products will be offered through a licensed insurance partner and are subject to terms, waiting periods, and regulatory approval.

---

## Tech Stack

- **Framework:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS + Inter font
- **Routing:** React Router v6 (with `ScrollToTop` and 404 handling)
- **Charts:** Recharts (Founder Dashboard Demo cash-balance line chart)
- **Icons:** Lucide React
- **Persistence:** Supabase (`waitlist` and `partner_inquiries` tables) with automatic `localStorage` mock fallback when credentials are not configured

---

## Project Structure

```text
netup/
├── index.html
├── .env.example
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql
└── src/
    ├── components/
    │   ├── forms/          # WaitlistForm, PartnerInquiryForm
    │   ├── layout/         # Navbar, Footer, Layout, ScrollToTop
    │   └── ui/             # Button, Card, Section, Badge, Accordion
    ├── data/               # Plans, FAQ, Insights, Health Check, Dashboard mock data
    ├── lib/                # Supabase client, submission service, SEO hook
    └── pages/              # Home, Plans, Estimator, HealthCheck, Insights, Demo, Partners, FAQ, 404
```

---

## Local Setup

1. **Navigate into the project directory:**
   ```bash
   cd netup
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables (optional):**
   Copy `.env.example` to `.env` and add your Supabase project values:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```
   > **Mock Fallback:** If `VITE_SUPABASE_URL` or `VITE_SUPABASE_ANON_KEY` is omitted or blank, waitlist and partner inquiry submissions automatically fall back to a mock service layer storing records in `localStorage` (`netup_waitlist_submissions` and `netup_partner_inquiries`).

4. **Apply Supabase SQL migration (when using Supabase):**
   Run `supabase/migrations/001_initial_schema.sql` in the Supabase SQL Editor (or via `supabase db push`) to create the `waitlist` and `partner_inquiries` tables with Row Level Security insert policies.

---

## Running & Building

- **Development server:**
  ```bash
  npm run dev
  ```
  Opens locally at `http://localhost:5173`.

- **Type-check and production build:**
  ```bash
  npm run build
  ```

- **Preview production build:**
  ```bash
  npm run preview
  ```

---

## Deployment

### Vercel or Netlify
1. Push the `netup/` directory (or set `netup` as the Root Directory in your hosting provider).
2. Set the build command to `npm run build` and output directory to `dist`.
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the provider's Environment Variables settings.
4. Configure SPA fallback rewrites so direct visits to `/plans`, `/estimator`, `/health-check`, `/insights`, `/demo`, `/partners`, and `/faq` serve `index.html`.
