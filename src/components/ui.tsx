import type { ReactNode } from "react";
import {
  Scale, Building2, Factory, Wallet, Users, Calculator, Flame, Store, UtensilsCrossed,
  Award, MapPin, BadgeIndianRupee, ShieldCheck, Circle, CheckCircle2, ChevronRight, type LucideIcon,
} from "lucide-react";
import { Reveal, WordReveal } from "./motion";

const map: Record<string, LucideIcon> = {
  Scale, Building2, Factory, Wallet, Users, Calculator, Flame, Store, UtensilsCrossed,
  Award, MapPin, BadgeIndianRupee, ShieldCheck, CheckCircle2, ChevronRight,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Circle;
  return <C className={className} />;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase ${
        light ? "text-gold-300" : "text-crimson-600"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-gold-400/70" : "bg-crimson-600/70"}`} />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  light = false,
  center = true,
  highlight = [],
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
  center?: boolean;
  highlight?: string[];
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal className={center ? "flex justify-center" : ""}>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </Reveal>
      <h2
        className={`mt-5 font-display text-[2.1rem] leading-[1.12] font-semibold tracking-tight md:text-[2.85rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        <WordReveal text={title} highlight={highlight} />
      </h2>
      {sub && (
        <Reveal delay={0.12}>
          <p className={`mt-4 text-[16px] leading-relaxed md:text-[17px] ${light ? "text-slate-300" : "text-mutedfg"}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
