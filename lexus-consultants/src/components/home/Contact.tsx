import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { contact, services } from "../../data";
import { SectionHead } from "../ui";

/* ============================ CONTACT ============================ */
export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}%0D%0ACompany: ${d.get("company")}%0D%0APhone: ${d.get("phone")}%0D%0AEmail: ${d.get("email")}%0D%0AService: ${d.get("service")}%0D%0A%0D%0AMessage:%0D%0A${d.get("message")}`;
    window.location.href = `mailto:${contact.email}?subject=Labour Compliance Consultation - ${d.get("name")}&body=${body}`;
    setSent(true);
  };

  const inputStyle =
    "w-full rounded-xl border border-line bg-cream px-4 py-3 text-xs font-medium text-ink outline-none transition focus:border-navy-900 focus:bg-white focus:ring-2 focus:ring-navy-900/10";

  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        {/* Left: Contact Details */}
        <div className="lg:col-span-5">
          <SectionHead
          compact
            center={false}
            eyebrow="Contact Lexus"
            title="Talk to a compliance partner."
            sub="Fifteen minutes with an experienced consultant — walk away with a clear diagnostic of your statutory standing. Zero obligation."
          />

          <div className="mt-8 space-y-3.5">
            <div className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-mutedfg">Head Office</span>
                <span className="mt-1 block text-xs font-semibold text-ink">{contact.address.join(" ")}</span>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-crimson-600 text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-mutedfg">Direct Phone</span>
                <a href={contact.phoneHref} className="mt-1 block text-xs font-bold text-ink hover:text-crimson-600">
                  {contact.phone}
                </a>
                <a href={contact.mobileHref} className="block text-xs text-mutedfg hover:text-crimson-600">
                  Mobile: {contact.mobile}
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-400">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-mutedfg">Email Inquiries</span>
                <a href={`mailto:${contact.email}`} className="mt-1 block text-xs font-semibold text-ink hover:text-crimson-600">
                  {contact.email}
                </a>
                <span className="block text-[11px] text-mutedfg">Rapid turnaround within 24 business hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Lead Consultation Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line bg-white p-7 shadow-xl shadow-navy-900/5 md:p-9"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-crimson-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-crimson-600">Free 15-Min Audit</span>
            </div>
            <h3 className="mt-1 font-display text-2xl font-bold text-ink">Request a Compliance Case Evaluation</h3>
            <p className="mt-1.5 text-xs text-mutedfg">
              Tell us about your establishment or factory requirements and an advocate or senior consultant will respond promptly.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Full Name *</label>
                <input required name="name" placeholder="e.g. Rajesh Kumar" className={inputStyle} />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Company Name</label>
                <input name="company" placeholder="e.g. Apex Technologies Pvt Ltd" className={inputStyle} />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Phone Number *</label>
                <input required name="phone" type="tel" placeholder="+91 98765 43210" className={inputStyle} />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Email Address</label>
                <input name="email" type="email" placeholder="rajesh@company.com" className={inputStyle} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Select Primary Service</label>
                <select name="service" className={inputStyle} defaultValue="">
                  <option value="" disabled>Select your primary requirement</option>
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-semibold text-navy-950 mb-1.5">Brief Details / Nature of Inquiry</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Number of employees, locations, notice pending, or compliance requirements..."
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="shimmer relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-navy-900 py-3.5 text-xs font-bold text-white shadow-lg shadow-navy-900/15 transition hover:bg-navy-800"
              >
                <Send className="h-4 w-4 text-gold-400" />
                <span>Submit Evaluation Request</span>
              </button>
            </div>

            {sent && (
              <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-center text-xs font-medium text-emerald-800">
                Thank you! Your default email client has been prepared with your inquiry. You can send it directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
