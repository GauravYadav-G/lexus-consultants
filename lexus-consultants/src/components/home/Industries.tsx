import { Link } from "react-router-dom";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { industries } from "../../data";
import { SectionHead } from "../ui";
import { Item, Stagger } from "../motion";

/* ============================ INDUSTRIES CLIENTELE ============================ */
export function Industries() {
  return (
    <section id="industries" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          compact
          eyebrow="Clientele · Sectors We Advise"
          title="Deep statutory expertise across every sector."
          sub="Statutory nuances differ across IT offices, manufacturing plants, logistics hubs, and hospitals. Our practice is structured to match your industry language."
        />

        <Stagger gap={0.04} className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {industries.map((ind) => (
            <Item key={ind} variant="pop">
              <Link
                to="/contact"
                className="group flex items-center justify-between gap-2.5 rounded-xl border border-line bg-cream px-4.5 py-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:shadow-md"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Briefcase className="h-4 w-4 shrink-0 text-crimson-600 transition group-hover:text-gold-400" />
                  <span className="truncate text-xs font-bold text-ink transition group-hover:text-white">{ind}</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-mutedfg/50 transition group-hover:text-gold-400" />
              </Link>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
