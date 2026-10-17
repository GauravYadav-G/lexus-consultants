import { ArrowUpRight, CalendarDays, ExternalLink } from "lucide-react";
import { legalUpdates } from "../../data";
import { SectionHead } from "../ui";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function LegalUpdates() {
  const sortedUpdates = [...legalUpdates].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <section className="bg-cream py-12 md:py-16" aria-label="Recent labour law and compliance updates">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <SectionHead
            compact
            center={false}
            eyebrow="Regulatory Updates"
            title="Recent labour-law changes."
            sub="Dated notices and compliance changes, with official references and a practical employer checklist."
          />
          <p className="max-w-sm text-xs leading-relaxed text-mutedfg md:text-right">
            Central and state rules can differ. Verify the source notice and applicability to your establishment before acting.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {sortedUpdates.map((update) => (
            <article key={update.id} className="flex min-w-0 flex-col rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-gold-50 px-3 py-1 text-[10px] font-bold tracking-wide text-navy-900">{update.tag}</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-mutedfg">
                  <CalendarDays className="h-3.5 w-3.5 text-crimson-600" />
                  Published {formatDate(update.publishedAt)}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy-950 sm:text-xl">{update.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mutedfg">{update.summary}</p>
              <p className="mt-3 rounded-xl bg-muted px-4 py-3 text-xs leading-relaxed text-navy-900">
                <strong className="font-bold">Employer check: </strong>{update.employerAction}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-[11px]">
                <span className="text-mutedfg">Effective {formatDate(update.effectiveAt)}</span>
                <a
                  href={update.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-navy-900 transition hover:text-crimson-600"
                >
                  {update.sourceLabel}<ExternalLink className="h-3.5 w-3.5" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <a href="https://www.labour.gov.in/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-crimson-600">
          Check Ministry of Labour notices<ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
