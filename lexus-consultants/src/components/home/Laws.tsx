import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gavel, BookOpen, Search } from "lucide-react";
import { laws, advisory } from "../../data";
import { SectionHead } from "../ui";

/* ============================ LABOUR LAWS EXPLORER ============================ */
export function Laws() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = laws.filter((l) => l.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section id="laws" className="bg-muted py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        {/* Left: Acts List with Search */}
        <div className="lg:col-span-7">
          <SectionHead
          compact
            center={false}
            eyebrow="Labour Laws &amp; Statutes"
            title="Acts we cover, end to end."
            sub="Complete monthly filing, annual return, and statutory register maintenance under all central and state Acts."
          />

          <div className="mt-7 flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-sm focus-within:border-navy-900 focus-within:ring-2 focus-within:ring-navy-900/10">
            <Search className="h-4 w-4 text-mutedfg" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter Acts — e.g. PF, Factories, Minimum Wages, CLRA..."
              className="w-full text-xs font-medium text-ink outline-none placeholder:text-mutedfg/60"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="text-xs text-mutedfg hover:text-navy-900">
                Clear
              </button>
            )}
          </div>

          <div className="mt-6 grid gap-x-6 border-t border-line sm:grid-cols-2 lg:gap-x-8">
            {filtered.map((l) => (
              <div key={l} className="flex min-h-10 items-center gap-2 border-b border-line py-2.5 text-xs font-semibold text-navy-900">
                <BookOpen className="h-3.5 w-3.5 text-crimson-600" />
                <span>{l}</span>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-xs text-mutedfg py-4">No matching Act found. We likely cover it under allied state rules.</p>
            )}
          </div>
          <p className="mt-3 text-[11px] text-mutedfg">
            Showing {filtered.length} of {laws.length} major Acts · Plus state Professional Tax and Labour Welfare Funds
          </p>
        </div>

        {/* Right: Advisory & Litigation Issues Covered */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-lg shadow-navy-900/5 md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-gold-400">
                <Gavel className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Industrial Matters &amp; Legal Advice</h3>
                <span className="text-xs text-mutedfg">Advocates for Industrial Disputes</span>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-mutedfg">
              Lexus clients seek advice on critical industrial matters ranging from employee disputes to domestic enquiries:
            </p>

            <ul className="mt-5 space-y-2.5 text-xs border-t border-line pt-5">
              {advisory.slice(0, 8).map((a) => (
                <li key={a} className="flex items-start gap-2 text-slate-700">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson-600" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-muted py-3 text-xs font-bold text-navy-950 transition hover:bg-navy-900 hover:text-white"
            >
              <span>Schedule Legal Case Evaluation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
