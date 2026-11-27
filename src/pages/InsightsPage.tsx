import { useState } from 'react';
import { BookOpen, Download, FileText, CheckCircle2, X } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button, ButtonLink } from '../components/ui/Button';
import {
  insightArticles,
  samplePostMortemContent,
  type InsightArticle,
} from '../data/insights';
import { usePageMeta } from '../lib/seo';

export function InsightsPage() {
  usePageMeta(
    'Insights & Sample Post-Mortem — NetUp',
    'Read founder lessons on runway blindspots, structured post-mortems, and legal tips, plus download a sample NetUp Post-Mortem Report.'
  );

  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadSample = () => {
    const blob = new Blob([samplePostMortemContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NetUp-Sample-Post-Mortem-Report.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <>
      <Section background="slate" className="py-14 sm:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="navy" className="mb-4">
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            Founder Knowledge Base
          </Badge>
          <h1 className="font-display text-4xl font-normal tracking-[-0.012em] text-[#f5efe2] sm:text-6xl">
            Insights for resilient builders.
          </h1>
          <p className="mt-4 text-base text-[#f5efe2]/72 sm:text-lg">
            Practical notes on why startups run out of runway, how founders structure honest
            post-mortems, and conservative legal habits.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {insightArticles.map((article) => (
            <Card key={article.id} hover className="flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="amber">{article.category}</Badge>
                  <span className="text-xs font-medium text-[#f5efe2]/55">
                    {article.date} · {article.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-[#f5efe2]">{article.title}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#f5efe2]/70">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-6 border-t border-[#f5efe2]/12 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-medium uppercase tracking-[0.14em] text-[#f5efe2] transition-opacity hover:opacity-70"
                >
                  Read key takeaways →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Sample Post-Mortem Report Section */}
      <Section background="white" id="sample-post-mortem">
        <SectionHeader
          eyebrow="Structured Learning"
          title="Sample Post-Mortem Report."
          description="Every NetUp closure includes an objective post-mortem template so founders walk away with clarity, documented learnings, and clean investor notes."
        />

        <Card variant="slate" className="border-[#f5efe2]/20" padding="lg">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f5efe2] px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#151510]">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                Illustrative Template
              </div>
              <h3 className="mt-4 font-display text-3xl font-normal text-[#f5efe2]">
                Northstar Logistics SaaS — Closure &amp; Lessons Summary
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#f5efe2]/72 sm:text-base">
                Includes executive closure drivers, cash burn vs. receivables timeline, 3 actionable
                lessons for your next venture, and an orderly wind-down compliance checklist.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button type="button" size="lg" onClick={handleDownloadSample}>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Sample Report (.txt)
                </Button>
                <ButtonLink to="/#waitlist" variant="outline" size="lg">
                  Join Pilot Waitlist
                </ButtonLink>
              </div>

              {downloaded && (
                <p
                  role="status"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300"
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Sample report downloaded.
                </p>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-[#f5efe2]/15 bg-black/70 p-4 font-mono text-xs leading-relaxed text-[#f5efe2]/80">
                <p className="font-semibold text-[#f5efe2]">1. EXECUTIVE SUMMARY</p>
                <p className="mt-1 text-[#f5efe2]/68">
                  Primary Drivers: 6.5-month enterprise sales cycle vs. 2.5-month model. Orderly
                  wind-down initiated at 2.2 months remaining runway.
                </p>
                <p className="mt-3 font-semibold text-[#f5efe2]">2. KEY LESSONS</p>
                <p className="mt-1 text-[#f5efe2]/68">
                  • Price annual upfront contracts in B2B logistics
                  <br />• Match SDR ramp to verified CAC payback
                  <br />• Preserve statutory &amp; cap-table archives
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Modal for reading article takeaways */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-[#f5efe2]/25 bg-[#090b0f] p-6 text-[#f5efe2] shadow-elevated sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge variant="amber">{selectedArticle.category}</Badge>
                <h2
                  id="article-modal-title"
                  className="mt-3 font-display text-2xl font-normal text-[#f5efe2] sm:text-3xl"
                >
                  {selectedArticle.title}
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close article summary"
                onClick={() => setSelectedArticle(null)}
                className="rounded-full p-1.5 text-[#f5efe2]/60 hover:bg-white/10 hover:text-[#f5efe2]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#f5efe2]/72">
              {selectedArticle.excerpt}
            </p>
            <h3 className="mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#b8cad6]">
              Key Takeaways
            </h3>
            <ul className="mt-2.5 space-y-2 text-sm text-[#f5efe2]/85">
              {selectedArticle.takeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5efe2]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end">
              <Button type="button" variant="primary" onClick={() => setSelectedArticle(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
