import { Compass, ArrowLeft } from 'lucide-react';
import { ButtonLink } from '../components/ui/Button';
import { usePageMeta } from '../lib/seo';

export function NotFoundPage() {
  usePageMeta(
    'Page Not Found — NetUp',
    'The page you are looking for could not be found on NetUp.'
  );

  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#f5efe2]/25 bg-black/60 text-[#f5efe2]">
        <Compass className="h-7 w-7" aria-hidden="true" />
      </div>
      <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-[#b8cad6]">404 Error</p>
      <h1 className="mt-3 font-display text-5xl font-normal tracking-[-0.012em] text-[#f5efe2] sm:text-6xl">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-base text-[#f5efe2]/72">
        The link may have moved or the URL might be misspelled. Head back home or explore our pilot
        plans.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink to="/" variant="primary">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </ButtonLink>
        <ButtonLink to="/plans" variant="outline">
          View Plans
        </ButtonLink>
      </div>
    </div>
  );
}
