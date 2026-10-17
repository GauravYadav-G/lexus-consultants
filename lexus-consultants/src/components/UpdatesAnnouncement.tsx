import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BellRing, CalendarDays, ExternalLink, X } from "lucide-react";
import { Link } from "react-router-dom";
import { legalUpdates } from "../data";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function UpdatesAnnouncement() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const latestId = legalUpdates.reduce(
    (latest, update) => update.publishedAt > (latest?.publishedAt ?? "") ? update : latest,
    legalUpdates[0],
  )?.id;

  useEffect(() => {
    if (!latestId) return;

    const storageKey = `lexus-updates-announcement:${latestId}`;
    try {
      if (window.sessionStorage.getItem(storageKey)) return;
      window.sessionStorage.setItem(storageKey, "shown");
    } catch {
      // Keep the announcement usable when browser storage is unavailable.
    }

    setOpen(true);
  }, [latestId]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const focusable = document.querySelectorAll<HTMLElement>(
          '[role="dialog"] a[href], [role="dialog"] button:not([disabled])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const updates = [...legalUpdates]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 2);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center overflow-y-auto bg-navy-950/70 p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="updates-announcement-title"
            aria-describedby="updates-announcement-description"
            className="my-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/70 bg-cream shadow-2xl sm:rounded-3xl"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <div className="flex items-start justify-between gap-4 bg-navy-950 px-5 py-5 text-white sm:px-7 sm:py-6">
              <div className="flex min-w-0 items-start gap-3">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
                  <BellRing className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300">Lexus compliance bulletin</p>
                  <h2 id="updates-announcement-title" className="mt-1 font-display text-xl font-bold sm:text-2xl">Latest updates &amp; announcements</h2>
                  <p id="updates-announcement-description" className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Important labour-law and compliance changes for employers.
                  </p>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close latest updates"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-300"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[min(65dvh,540px)] space-y-3 overflow-y-auto p-4 sm:p-6">
              {updates.map((update) => (
                <article key={update.id} className="rounded-xl border border-line bg-white p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-gold-50 px-2.5 py-1 text-[10px] font-bold text-navy-900">{update.tag}</span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-mutedfg">
                      <CalendarDays className="h-3.5 w-3.5 text-crimson-600" /> Published {formatDate(update.publishedAt)}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug text-navy-950 sm:text-lg">{update.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-mutedfg sm:text-sm">{update.summary}</p>
                  <p className="mt-3 text-xs leading-relaxed text-navy-900"><strong>Employer action: </strong>{update.employerAction}</p>
                  <a href={update.sourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-crimson-600 hover:text-navy-900">
                    Read official source <ExternalLink className="h-3.5 w-3.5" /><span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="flex flex-col-reverse gap-2 border-t border-line bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-line px-5 py-2.5 text-xs font-bold text-navy-900 transition hover:bg-muted">
                Close announcement
              </button>
              <Link to="/insights" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-crimson-500">
                View all updates <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
