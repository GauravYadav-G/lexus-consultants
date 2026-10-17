import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, CalendarDays, BadgeIndianRupee, ShieldCheck, Wallet, Clock3 } from "lucide-react";

type CalculatorId = "pf" | "esic" | "pt" | "minimum-wage" | "gratuity" | "leave";

const calculatorCards: { id: CalculatorId; title: string; description: string; icon: typeof Calculator }[] = [
  { id: "pf", title: "PF Calculator", description: "Employee and employer EPF contribution with an EPS pension split and wage-ceiling options.", icon: Wallet },
  { id: "esic", title: "ESIC Calculator", description: "Estimate employee and employer ESI contributions with wage-limit and coverage checks.", icon: ShieldCheck },
  { id: "pt", title: "Professional Tax Calculator", description: "West Bengal employee salary slabs, including the revised schedule effective October 2026.", icon: BadgeIndianRupee },
  { id: "minimum-wage", title: "Minimum Wages Calculator", description: "Convert notified hourly, daily or monthly rates and estimate wage shortfall and arrears.", icon: Clock3 },
  { id: "gratuity", title: "Gratuity Calculator", description: "Estimate gratuity from eligible last-drawn wages and service duration.", icon: Calculator },
  { id: "leave", title: "Leave Encashment", description: "Estimate encashment from the applicable monthly wage basis and payable leave days.", icon: CalendarDays },
];

const fieldClass = "mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10";
const labelClass = "block text-xs font-semibold text-navy-950";
const money = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number.isFinite(n) ? n : 0);
const amount = (s: string) => Math.max(0, Number(s) || 0);

function NumberField({ label, value, onChange, min = 0, max, step = 1, placeholder }: { label: string; value: string; onChange: (v: string) => void; min?: number; max?: number; step?: number; placeholder?: string }) {
  return <label className={labelClass}>{label}<input type="number" min={min} max={max} step={step} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={fieldClass} /></label>;
}

function SelectField({ label, value, onChange, children }: { label: string; value: string; onChange: (v: string) => void; children: ReactNode }) {
  return <label className={labelClass}>{label}<select value={value} onChange={(e) => onChange(e.target.value)} className={fieldClass}>{children}</select></label>;
}

function ResultBox({ title, value, rows, note }: { title: string; value: string; rows: [string, string][]; note?: string }) {
  return <div className="mt-6 rounded-2xl bg-navy-950 p-5 text-white sm:p-6">
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/15 pb-4">
      <div><p className="text-xs font-semibold text-slate-300">{title}</p><p className="mt-1 font-display text-3xl font-bold text-white">{value}</p></div>
      {note && <p className="max-w-md text-xs leading-relaxed text-slate-300">{note}</p>}
    </div>
    <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">{rows.map(([key, val]) => <div key={key} className="flex items-center justify-between gap-4 text-xs"><dt className="text-slate-300">{key}</dt><dd className="text-right font-semibold text-white">{val}</dd></div>)}</dl>
  </div>;
}

function CheckField({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: ReactNode }) {
  return <label className="inline-flex items-start gap-2.5 text-xs font-medium leading-relaxed text-navy-950"><input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-0.5 h-4 w-4 accent-navy-900" />{children}</label>;
}

function PFCalculator() {
  const [wages, setWages] = useState("");
  const [basis, setBasis] = useState("ceiling");
  const [ceiling, setCeiling] = useState("25000");
  const [rate, setRate] = useState("12");
  const [epsEligible, setEpsEligible] = useState(true);
  const [epsCeiling, setEpsCeiling] = useState("15000");
  const grossWage = amount(wages);
  const pfWage = basis === "full" ? grossWage : Math.min(grossWage, amount(ceiling));
  const employee = Math.round(pfWage * Number(rate) / 100);
  const pension = epsEligible ? Math.round(Math.min(pfWage, amount(epsCeiling)) * 8.33 / 100) : 0;
  const employerEpf = Math.max(0, Math.round(pfWage * Number(rate) / 100) - pension);
  const employerTotal = employerEpf + pension;
  return <>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <NumberField label="Monthly PF wages (₹)" value={wages} onChange={setWages} placeholder="e.g. 30000" />
      <SelectField label="Contribution basis" value={basis} onChange={setBasis}><option value="ceiling">Apply selected wage ceiling</option><option value="full">Full PF wages (higher-wage contribution)</option></SelectField>
      {basis === "ceiling" && <SelectField label="Mandatory coverage ceiling" value={ceiling} onChange={setCeiling}><option value="25000">₹25,000 (effective 17 Sep 2026)</option><option value="15000">₹15,000 (historical ceiling)</option></SelectField>}
      <SelectField label="Contribution rate" value={rate} onChange={setRate}><option value="12">12% standard rate</option><option value="10">10% eligible establishments</option></SelectField>
      {epsEligible && <SelectField label="EPS pension wage ceiling" value={epsCeiling} onChange={setEpsCeiling}><option value="15000">₹15,000</option><option value="25000">₹25,000 (if applicable)</option></SelectField>}
    </div>
    <div className="mt-5"><CheckField checked={epsEligible} onChange={setEpsEligible}>Employee is eligible for EPS pension allocation. If not, employer share is allocated to EPF.</CheckField></div>
    <ResultBox title="Estimated monthly PF contributions" value={money(employee + employerTotal)} rows={[
      ["PF wages used", money(pfWage)], ["Employee EPF contribution", money(employee)], ["Employer EPF share", money(employerEpf)], ["Employer EPS pension share", money(pension)], ["Total employer contribution", money(employerTotal)], ["Employee + employer total", money(employee + employerTotal)],
    ]} note="Contributions are rounded to the nearest rupee. This estimate excludes EDLI and administrative charges." />
    <p className="mt-4 text-xs leading-relaxed text-mutedfg">Use wages determined under the current applicable wage definition. Coverage, prior membership, higher-wage requests, EPS eligibility and the pensionable wage ceiling can affect actual liability. The ₹25,000 mandatory coverage ceiling took effect on 17 September 2026; confirm the relevant Gazette/EPFO directions before payroll processing.</p>
  </>;
}

function ESICalculator() {
  const [wages, setWages] = useState("");
  const [averageDailyWage, setAverageDailyWage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [establishmentCovered, setEstablishmentCovered] = useState(true);
  const [continuedCoverage, setContinuedCoverage] = useState(false);
  const wage = amount(wages);
  const dailyWage = amount(averageDailyWage);
  const threshold = disabled ? 25000 : 21000;
  const withinLimit = wage > 0 && wage <= threshold;
  const covered = establishmentCovered && wage > 0 && (withinLimit || continuedCoverage);
  const employee = covered && dailyWage > 176 ? Math.round(wage * 0.0075) : 0;
  const employer = covered ? Math.round(wage * 0.0325) : 0;
  return <>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <NumberField label="Monthly ESI wages (₹)" value={wages} onChange={setWages} placeholder="e.g. 20000" />
      <NumberField label="Average daily wage (₹)" value={averageDailyWage} onChange={setAverageDailyWage} placeholder="For employee-share exemption check" />
      <div className="flex items-end pb-1"><CheckField checked={disabled} onChange={setDisabled}>Employee is a person with disability (₹25,000 wage limit)</CheckField></div>
      <div className="sm:col-span-2 lg:col-span-1"><CheckField checked={establishmentCovered} onChange={setEstablishmentCovered}>Assume establishment and employee are otherwise covered by ESI</CheckField></div>
      <div className="sm:col-span-2 lg:col-span-1"><CheckField checked={continuedCoverage} onChange={setContinuedCoverage}>Wages crossed the limit after this contribution period began</CheckField></div>
    </div>
    <ResultBox title="Estimated monthly ESI contributions" value={money(employee + employer)} rows={[
      ["Coverage check", covered ? withinLimit ? `Within ₹${threshold.toLocaleString("en-IN")} wage limit` : "Continued to period end" : establishmentCovered ? `Outside ₹${threshold.toLocaleString("en-IN")} wage limit` : "Not marked as covered"],
      ["Employee contribution (0.75%)", money(employee)], ["Employer contribution (3.25%)", money(employer)], ["Total contribution", money(employee + employer)],
      ["Employee-share exemption", covered && dailyWage > 0 && dailyWage <= 176 ? "Applied (average daily wage up to ₹176)" : "Not applied"],
    ]} note={covered ? "Contribution is estimated at 0.75% employee and 3.25% employer, subject to the low-wage employee-share exemption." : "No contribution shown because the entered case is outside the selected coverage assumption."} />
    <p className="mt-4 text-xs leading-relaxed text-mutedfg">Coverage also depends on establishment type, notified area, employee classification and applicable wage definition. If wages cross the ceiling mid contribution period, coverage generally continues to that period end. Enter average daily wage to apply the employee-share exemption up to ₹176/day. Confirm current notifications before filing.</p>
  </>;
}

const wbPtSlabs = {
  old: [{ max: 10000, tax: 0 }, { max: 15000, tax: 110 }, { max: 25000, tax: 130 }, { max: 40000, tax: 150 }, { max: Infinity, tax: 200 }],
  new: [{ max: 20000, tax: 0 }, { max: 30000, tax: 100 }, { max: 50000, tax: 140 }, { max: 100000, tax: 170 }, { max: Infinity, tax: 208 }],
};

function ProfessionalTaxCalculator() {
  const [salary, setSalary] = useState("");
  const [schedule, setSchedule] = useState("new");
  const monthlySalary = amount(salary);
  const tax = wbPtSlabs[schedule as keyof typeof wbPtSlabs].find((slab) => monthlySalary <= slab.max)?.tax ?? 0;
  return <>
    <div className="grid gap-5 sm:grid-cols-2">
      <NumberField label="Monthly salary / wages (₹)" value={salary} onChange={setSalary} placeholder="e.g. 45000" />
      <SelectField label="West Bengal employee schedule" value={schedule} onChange={setSchedule}><option value="new">From 1 October 2026</option><option value="old">Up to 30 September 2026</option></SelectField>
    </div>
    <ResultBox title="Estimated professional tax deduction" value={`${money(tax)} / month`} rows={[
      ["Monthly deduction", money(tax)], ["Estimated 12-month total", money(tax * 12)], ["Selected schedule", schedule === "new" ? "Effective from 1 Oct 2026" : "Schedule up to 30 Sep 2026"],
    ]} note={schedule === "new" ? "New employee rates: nil up to ₹20,000; then ₹100, ₹140, ₹170 or ₹208 per month by slab." : "Previous employee schedule; select only for periods ending before 1 October 2026."} />
    <p className="mt-4 text-xs leading-relaxed text-mutedfg">This tool calculates the salaried-employee schedule only. Exemptions and separate rules for individuals, professions, trades and specified Part-C categories are not included. The revised West Bengal employee slab is effective 1 October 2026; confirm the Gazette notification and employee classification.</p>
  </>;
}

function MinimumWageCalculator() {
  const [state, setState] = useState("");
  const [employment, setEmployment] = useState("");
  const [skill, setSkill] = useState("unskilled");
  const [zone, setZone] = useState("");
  const [rate, setRate] = useState("");
  const [unit, setUnit] = useState("daily");
  const [paid, setPaid] = useState("");
  const [days, setDays] = useState("26");
  const [monthlyDivisor, setMonthlyDivisor] = useState("26");
  const [hours, setHours] = useState("8");
  const [arrearsMonths, setArrearsMonths] = useState("1");
  const notifiedRate = amount(rate);
  const workDays = Math.min(31, Math.max(1, amount(days)));
  const divisorDays = Math.min(31, Math.max(1, amount(monthlyDivisor)));
  const workHours = Math.min(24, Math.max(1, amount(hours)));
  const arrearsPeriod = Math.min(120, amount(arrearsMonths));
  const minDaily = unit === "hourly" ? notifiedRate * workHours : unit === "monthly" ? notifiedRate / divisorDays : notifiedRate;
  const minHourly = minDaily / workHours;
  const minMonthly = minDaily * workDays;
  const actualPay = amount(paid);
  const shortfall = Math.max(0, minMonthly - actualPay);
  const arrears = shortfall * arrearsPeriod;
  return <>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <NumberField label="Notified minimum wage rate (₹)" value={rate} onChange={setRate} placeholder="Enter rate from latest notification" />
      <SelectField label="Rate is quoted per" value={unit} onChange={setUnit}><option value="hourly">Hour</option><option value="daily">Day</option><option value="monthly">Month</option></SelectField>
      <NumberField label="Actual wages paid for this month (₹)" value={paid} onChange={setPaid} placeholder="e.g. 16000" />
      <NumberField label="Days worked in period" value={days} onChange={setDays} min={1} max={31} placeholder="26" />
      {unit === "monthly" && <NumberField label="Standard days per notified month" value={monthlyDivisor} onChange={setMonthlyDivisor} min={1} max={31} placeholder="26" />}
      <NumberField label="Hours in a normal workday" value={hours} onChange={setHours} min={1} max={24} placeholder="8" />
      <NumberField label="Months for arrears estimate" value={arrearsMonths} onChange={setArrearsMonths} min={0} max={120} placeholder="1" />
      <label className={labelClass}>State / Union Territory<input value={state} onChange={(e) => setState(e.target.value)} placeholder="e.g. West Bengal" className={fieldClass} /></label>
      <label className={labelClass}>Scheduled employment<input value={employment} onChange={(e) => setEmployment(e.target.value)} placeholder="e.g. Shops / factory" className={fieldClass} /></label>
      <SelectField label="Skill category" value={skill} onChange={setSkill}><option value="unskilled">Unskilled</option><option value="semi-skilled">Semi-skilled</option><option value="skilled">Skilled</option><option value="highly-skilled">Highly skilled</option></SelectField>
      <label className={labelClass}>Zone / area classification<input value={zone} onChange={(e) => setZone(e.target.value)} placeholder="As listed in notification" className={fieldClass} /></label>
    </div>
    <ResultBox title="Estimated monthly minimum-wage comparison" value={money(shortfall)} rows={[
      ["Notified daily equivalent", money(minDaily)], ["Notified hourly equivalent", money(minHourly)], ["Minimum for entered workdays", money(minMonthly)], ["Actual wages entered", money(actualPay)], ["Estimated shortfall this month", money(shortfall)], ["Estimated arrears", money(arrears)],
    ]} note="Shortfall is shown only when entered pay is below the converted minimum for the entered workdays." />
    <p className="mt-4 text-xs leading-relaxed text-mutedfg">No live minimum-wage schedule is bundled: enter the current notified rate for the selected state, employment, skill and zone. The monthly rate is converted using the standard days input; the comparison then uses days worked. The estimate excludes overtime and variable dearness allowance unless included in your rate. {state || "State"}{employment ? ` · ${employment}` : ""}{zone ? ` · ${zone}` : ""}{` · ${skill}`} selected values are for your own reference only.</p>
  </>;
}

function GratuityCalculator() {
  const [wages, setWages] = useState(""); const [years, setYears] = useState(""); const [months, setMonths] = useState("0"); const [fixedTerm, setFixedTerm] = useState(false);
  const wage = amount(wages); const wholeYears = amount(years); const extraMonths = Math.min(11, amount(months));
  const qualifyingYears = fixedTerm ? wholeYears + extraMonths / 12 : wholeYears + (extraMonths > 6 ? 1 : 0);
  const eligible = fixedTerm ? wholeYears + extraMonths / 12 >= 1 : qualifyingYears >= 5;
  const gratuity = eligible ? (wage / 26) * 15 * qualifyingYears : 0;
  return <>
    <div className="mb-5"><CheckField checked={fixedTerm} onChange={setFixedTerm}>Fixed-term employment</CheckField></div>
    <div className="grid gap-5 sm:grid-cols-3"><NumberField label="Last drawn eligible monthly wages (₹)" value={wages} onChange={setWages} placeholder="e.g. 50000" /><NumberField label="Completed service years" value={years} onChange={setYears} /><NumberField label="Additional service months" value={months} onChange={setMonths} max={11} /></div>
    <ResultBox title="Estimated gratuity" value={money(gratuity)} rows={[["Qualifying service used", `${qualifyingYears.toFixed(2)} years`], ["Eligibility assumption", eligible ? "Threshold met" : fixedTerm ? "At least one year for fixed-term employee" : "At least five years for regular employee"], ["Formula", "Monthly wages ÷ 26 × 15 × service years"]]} />
    <p className="mt-4 text-xs leading-relaxed text-mutedfg">Indicative estimate only. Wage components, eligibility exceptions, fixed-term treatment and any payable ceiling depend on current law and the individual case.</p>
  </>;
}

function LeaveCalculator() {
  const [wages, setWages] = useState(""); const [days, setDays] = useState(""); const [divisor, setDivisor] = useState("30");
  const wage = amount(wages); const leaveDays = amount(days); const daily = wage / Number(divisor); const total = daily * leaveDays;
  return <>
    <div className="grid gap-5 sm:grid-cols-3"><NumberField label="Monthly wage used by leave policy (₹)" value={wages} onChange={setWages} placeholder="e.g. 50000" /><NumberField label="Accumulated payable leave (days)" value={days} onChange={setDays} step={0.5} /><SelectField label="Monthly wage divisor" value={divisor} onChange={setDivisor}><option value="30">30 days</option><option value="26">26 days</option></SelectField></div>
    <ResultBox title="Estimated leave encashment" value={money(total)} rows={[["Estimated daily wage", money(daily)], ["Payable leave days", String(leaveDays)], ["Calculation", `${money(daily)} × ${leaveDays} days`]]} />
    <p className="mt-4 text-xs leading-relaxed text-mutedfg">Salary components, divisor, leave eligibility and encashment rules vary by employer policy, applicable law, state and employee category. Confirm the applicable basis before payroll or settlement.</p>
  </>;
}

function CalculatorContent({ id }: { id: CalculatorId }) {
  const content: Record<CalculatorId, { title: string; node: ReactNode }> = {
    pf: { title: "Provident Fund calculator", node: <PFCalculator /> },
    esic: { title: "ESIC contribution calculator", node: <ESICalculator /> },
    pt: { title: "West Bengal Professional Tax calculator", node: <ProfessionalTaxCalculator /> },
    "minimum-wage": { title: "Minimum wages and arrears calculator", node: <MinimumWageCalculator /> },
    gratuity: { title: "Gratuity calculator", node: <GratuityCalculator /> },
    leave: { title: "Leave encashment calculator", node: <LeaveCalculator /> },
  };
  return <section className="mt-8 rounded-3xl border border-line bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-8 md:p-10" aria-live="polite">
    <div className="flex flex-wrap items-start justify-between gap-4"><div><span className="text-[11px] font-bold uppercase tracking-[0.18em] text-crimson-600">Calculator</span><h2 className="mt-1 font-display text-2xl font-bold text-navy-950">{content[id].title}</h2></div><Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-xs font-bold text-navy-900 transition hover:border-navy-900">Ask a consultant <ArrowRight className="h-3.5 w-3.5" /></Link></div>
    <div className="mt-6">{content[id].node}</div>
  </section>;
}

export function CalculatorsPage() {
  const [active, setActive] = useState<CalculatorId | null>(null);
  return <div className="min-h-screen bg-cream">
    <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pb-24 md:pt-44">
      <div className="grid-light pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center"><span className="text-[11px] font-extrabold tracking-[0.22em] text-crimson-600 uppercase">Tools</span><h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-950 md:text-4xl">Compliance Calculators</h1><span className="mx-auto mt-4 block h-1.5 w-12 rounded-full bg-crimson-600" /><p className="mt-5 text-sm leading-relaxed text-mutedfg md:text-base">Quick working tools for payroll and compliance teams. All results are indicative estimates and should be verified against applicable law, rules and notifications before payroll or filings.</p></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculatorCards.map(({ id, title, description, icon: Icon }) => <article key={id} className={`group rounded-2xl border bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg ${active === id ? "border-navy-900 shadow-lg" : "border-line"}`}>
            <Icon className="h-5 w-5 text-gold-500" /><h2 className="mt-4 font-display text-lg font-bold text-navy-950">{title}</h2><p className="mt-2 min-h-12 text-sm leading-relaxed text-mutedfg">{description}</p>
            <button type="button" onClick={() => setActive(active === id ? null : id)} aria-expanded={active === id} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy-900 transition hover:text-crimson-600">{active === id ? "Close calculator" : "Open calculator"}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></button>
          </article>)}
        </div>
        {active && <CalculatorContent key={active} id={active} />}
        <p className="mx-auto mt-8 max-w-4xl text-center text-[11px] leading-relaxed text-mutedfg">These tools do not replace payroll advice or statutory verification. Actual amounts depend on employee status, wage definition, applicable notifications, state rules and establishment-specific facts.</p>
      </div>
    </section>
  </div>;
}
