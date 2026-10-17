import { industries } from "../../data";

/* ============================ SECTOR MARQUEE ============================ */
export function IndustriesMarquee() {
  const list = [...industries, ...industries];
  return (
    <section className="border-y border-line bg-muted/60 py-8">
      <div className="mx-auto mb-5 flex max-w-7xl items-center justify-between px-6">
        <p className="text-[11px] font-bold tracking-[0.2em] text-mutedfg uppercase">
          Trusted by Businesses Across India
        </p>
        <span className="text-xs text-mutedfg font-medium">16+ Diverse Industrial Sectors</span>
      </div>
      <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-8">
          {list.map((i, idx) => (
            <span key={idx} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-display text-[15px] font-semibold text-navy-950">{i}</span>
              <span className="h-px w-8 bg-crimson-500/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
