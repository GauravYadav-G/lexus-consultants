import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data";
import { SectionHead } from "../ui";
import { motion, EASE } from "../motion";

/* ============================ FAQS ============================ */
export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faqs" className="bg-muted py-12 md:py-14">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHead
          compact
          eyebrow="Frequently Asked Questions"
          title="Answers before you ask."
          sub="The questions we hear most often from CHROs, CFOs and Founders — answered plainly."
        />

        <div className="mt-8 space-y-2.5">
          {faqs.slice(0, 4).map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border transition duration-200 ${
                  isOpen ? "border-navy-900 bg-white shadow-md" : "border-line bg-white/80 hover:border-line"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left md:p-5"
                >
                  <span className="font-display text-[15px] font-bold text-ink">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-navy-900">
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                    >
                      <p className="px-4 pb-4 text-xs leading-relaxed text-mutedfg md:px-5 md:pb-5">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
