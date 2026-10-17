export const contact = {
  phone: "+91-11-45110704",
  phoneHref: "tel:+911145110704",
  mobile: "+91-9818111609",
  mobileHref: "tel:+919818111609",
  whatsapp: "https://wa.me/919818111609",
  email: "info@lexusconsultants.in",
  address: ["GG-1-23 B, Vikas Puri,", "New Delhi - 110018"],
  web: "www.lexusconsultants.in",
  maps: "https://maps.google.com/?q=GG-1-23+B,+Vikas+Puri,+New+Delhi+110018",
};

export const offices = [
  { city: "Delhi — Head Office", address: "GG-1-23 B, Vikas Puri, New Delhi - 110018", primary: true },
  { city: "Delhi — Okhla", address: "C 95, 2nd Floor, Okhla Industrial Area, Phase 1, New Delhi" },
  { city: "Mumbai", address: "Ramakrishna House, Ground Floor, No. 2, Krishna Deep Apartments, Yashwant Nagar, Vakola, Santacruz (East), Mumbai" },
  { city: "Chandigarh", address: "H. No. 776, Opposite Shiv Thakur Dwara Mandir, Manimajra, Chandigarh" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/lexus-consultants/" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Labour Laws", href: "/labour-laws" },
  { label: "Payroll & Benefits", href: "/calculators" },
  { label: "Locations", href: "/locations" },
  { label: "Calendar", href: "/calendar" },
  { label: "Insights", href: "/insights" },
  { label: "FAQs", href: "/faqs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  practice: [
    { label: "About Lexus", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Labour Laws", href: "/labour-laws" },
    { label: "Locations", href: "/locations" },
    { label: "Careers", href: "/careers" },
  ],
  tools: [
    { label: "Compliance Planning", href: "/calendar" },
    { label: "Payroll & Benefits", href: "/calculators" },
    { label: "Insights", href: "/insights" },
    { label: "FAQs", href: "/faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export const stats = [
  { value: 29, suffix: "", label: "Central laws consolidated into the Codes" },
  { value: 4, suffix: "", label: "Labour Codes in force" },
  { value: 16, suffix: "+", label: "Industries represented" },
  { value: 25, suffix: "+", label: "Locations in the official service network" },
];

export type Service = {
  icon: string;
  title: string;
  slug: string;
  category: string;
  desc: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "Scale",
    title: "Labour & Employment Laws",
    slug: "labour-employment-laws",
    category: "Core Compliance",
    desc: "Substantial experience across labour-management relations, fair employment practices, benefit planning and litigation.",
    points: [
      "Cases in Labour Courts",
      "Employee Disputes",
      "Domestic Enquiry",
      "Trade Union issues",
      "Employment Connected agreements",
      "Drafting rules & regulations",
    ],
  },
  {
    icon: "Building2",
    title: "Establishment Compliance Management",
    slug: "establishment-compliance",
    category: "Core Compliance",
    desc: "End-to-end compliance for offices, shops and commercial establishments so the alarm clock always rings on time.",
    points: [
      "Shop & Establishment registration",
      "PF, ESI, PT & LWF filings",
      "Statutory registers & records",
      "Inspection support",
    ],
  },
  {
    icon: "Factory",
    title: "Factory Labour Compliance",
    slug: "factory-compliance",
    category: "Core Compliance",
    desc: "Complete Factories Act and allied compliance for manufacturing units across India.",
    points: [
      "Labour Compliances Pan India",
      "Registrations and Renewals",
      "Trade Licenses",
      "Statutory Registers and Records",
      "Manpower Audit",
      "Annual Returns and Reports",
    ],
  },
  {
    icon: "Wallet",
    title: "Payroll Management",
    slug: "payroll-management",
    category: "Workforce & Payroll",
    desc: "Outsource payroll processing and statutory deductions with a proactive, professional team.",
    points: [
      "Processing Monthly Payroll",
      "Issue of Payslips",
      "Bank Transfer",
      "MIS Reports",
      "TDS Management (24Q, Form 16)",
      "Deductions like PF, ESI, PT, etc.",
    ],
  },
  {
    icon: "Users",
    title: "Manpower Outsourcing",
    slug: "manpower-outsourcing",
    category: "Workforce & Payroll",
    desc: "Delegate non-core functions and get skilled manpower with adequate professional qualification.",
    points: [
      "Flexibility in Hiring",
      "Cost and Time Saving",
      "Staff for Short Duration",
      "Focus on Core Business",
      "Team of Compliance Experts",
      "Control of Overheads",
    ],
  },
  {
    icon: "ShieldCheck",
    title: "Labour Law Audits & Compliance Health Checks",
    slug: "labour-law-audits",
    category: "Core Compliance",
    desc: "Review compliance records, identify gaps, plan corrective steps and prepare for statutory inspections.",
    points: ["Review records and documentation", "Identify compliance gaps", "Corrective action guidance", "Inspection readiness", "Compliance calendar planning"],
  },
  {
    icon: "Users",
    title: "Contract Labour Management",
    slug: "contract-labour-management",
    category: "Workforce & Payroll",
    desc: "Support principal employers and contractors with registrations, records, wage practices, licence renewals and responsibilities.",
    points: ["Principal employer and contractor registrations", "Statutory registers and records", "Wage compliance support", "Licence renewals", "Guidance on employer responsibilities"],
  },
  {
    icon: "Award",
    title: "Employee Welfare & Benefits Compliance",
    slug: "employee-welfare-benefits",
    category: "Core Compliance",
    desc: "Guidance on employee welfare schemes and statutory benefits, including social security and workplace obligations.",
    points: ["Provident fund and ESI", "Gratuity and bonus", "Maternity benefits", "Labour welfare funds", "Employee welfare plans"],
  },
  {
    icon: "Scale",
    title: "Labour Disputes & Grievances",
    slug: "labour-disputes-grievances",
    category: "Advisory & Representation",
    desc: "Advice and representation for employment disputes, domestic enquiries, industrial relations and labour court matters.",
    points: ["Employee disputes and grievances", "Domestic enquiries", "Trade union issues", "Full and final settlements", "Representation before labour authorities and courts"],
  },
  {
    icon: "Building2",
    title: "HR Policy & Documentation Support",
    slug: "hr-policy-documentation",
    category: "Advisory & Representation",
    desc: "Review and prepare employment documentation, workplace policies, appointment letters and connected agreements.",
    points: ["Appointment letters", "Employment agreements", "HR policies and rules", "Workplace documentation", "Policy and process review"],
  },
  {
    icon: "MapPin",
    title: "Liaison with Government Authorities",
    slug: "government-liaison",
    category: "Advisory & Representation",
    desc: "Support for registrations, inspections, statutory filings and communication with relevant labour authorities.",
    points: ["Registration and licensing follow-up", "Inspection support", "Statutory filing assistance", "Labour authority representation"],
  },
  {
    icon: "Calculator",
    title: "Accounting Services",
    slug: "accounting-services",
    category: "Accounting",
    desc: "An integrated suite of services designed to solve all accounting and bookkeeping needs.",
    points: [
      "General accounting & budgeting",
      "Financial reporting & analysis",
      "Vendor reconciliation",
      "Accounts payable / receivable",
      "Past years' reconciliation",
    ],
  },
  {
    icon: "Flame",
    title: "Fire NOC Consultant",
    slug: "fire-noc",
    category: "Licensing",
    desc: "Trusted and genuine Fire NOC consultancy — get your Fire NOC licence in minimum days.",
    points: ["Documentation", "Application filing", "Follow-up with authorities"],
  },
  {
    icon: "Store",
    title: "Shop Act Consultants",
    slug: "shop-act",
    category: "Licensing",
    desc: "Get your Shop Act licence in minimum days with ease and minimal steps.",
    points: ["New registration", "Renewals & amendments", "Complete consultation"],
  },
  {
    icon: "UtensilsCrossed",
    title: "FSSAI License Consultants",
    slug: "fssai-license",
    category: "Licensing",
    desc: "Acquire your FSSAI licence officially granted by the Food Safety and Standards Authority of India.",
    points: ["Basic / State / Central licence", "Renewals", "Eating House licence"],
  },
];

export const industries = [
  "Telecom",
  "BPO's",
  "Financial Institutions",
  "Information & Technology",
  "Logistics",
  "Hospitals",
  "Schools",
  "Educational Institutions",
  "Manufacturing",
  "Retail",
  "Insurance",
  "Event Management",
  "Public Sector Undertaking",
  "Airlines",
  "Restaurants / Bar",
  "Automobile",
];

export const laws = [
  "Apprentices Act, 1961",
  "Contract Labour Act",
  "EPF & MP Act, 1952",
  "ESI Act",
  "Factories Act, 1948",
  "Employment Exchanges Act",
  "Industrial Disputes Act",
  "Industrial Employment Act",
  "Maternity Benefit Act",
  "Minimum Wages Act",
  "Shops & Establishment Act",
  "Trade Unions Act",
  "Payment of Bonus Act",
  "Payment of Gratuity Act",
  "Payment of Wages Act",
  "Employee Compensation Act",
  "Labour Welfare Funds",
  "Professional Tax Act",
];

export const labourCodes = [
  {
    title: "Code on Wages, 2019",
    desc: "Wages, minimum wages, timely payment and bonus provisions within the consolidated framework.",
  },
  {
    title: "Industrial Relations Code, 2020",
    desc: "Industrial relations, trade unions, standing orders and dispute resolution matters.",
  },
  {
    title: "Code on Social Security, 2020",
    desc: "Social security provisions covering areas including provident fund, ESI, gratuity and maternity benefits.",
  },
  {
    title: "Occupational Safety, Health and Working Conditions Code, 2020",
    desc: "Workplace health, safety and working conditions, including provisions relevant to factories and contract labour.",
  },
];

export const advisory = [
  "Employment and connected agreements",
  "Discrimination",
  "Health and Safety Legislation",
  "Trade Union issues",
  "Industrial issues in mergers and acquisitions",
  "Employee Disputes",
  "Employment of Contract labour",
  "Full and Final settlement with employees",
  "Representation before Labour Authorities, Labour Court and High Court",
  "Conducting Domestic Enquiry against delinquent employees",
];

export const whyUs = [
  {
    icon: "Award",
    title: "Almost three decades of expertise",
    desc: "We are Advocates and Management Consultants for Industrial Matters — almost three decades old labour law consultancy firm.",
  },
  {
    icon: "MapPin",
    title: "Pan-India delivery",
    desc: "Personalised attention, quick and quality service to every client on a Pan India basis — Delhi NCR, Bangalore, Mumbai, Chennai and beyond.",
  },
  {
    icon: "BadgeIndianRupee",
    title: "Value pricing",
    desc: "Complete end-to-end labour law consultancy at value price, with complete satisfaction whatever the situation may be.",
  },
  {
    icon: "ShieldCheck",
    title: "Proactive compliance support",
    desc: "Timely guidance, compliance management and clear communication help businesses address obligations and reduce avoidable risks.",
  },
];

export const process = [
  {
    title: "Assess",
    desc: "A structured review of your current compliance posture — registrations, registers, returns and pending notices.",
  },
  {
    title: "Plan",
    desc: "A tailored compliance calendar mapped to every applicable Act, location and workforce category.",
  },
  {
    title: "Execute",
    desc: "Registrations, monthly payroll, PF/ESI/PT filings, licences and annual returns — handled end-to-end.",
  },
  {
    title: "Represent",
    desc: "Inspection support, domestic enquiries and representation before Labour Authorities, Labour Court and High Court.",
  },
];

export const benefits = [
  "Avoid penalties and legal action from regulatory authorities",
  "Protect your reputation and brand credibility",
  "Build employee trust and a healthy company culture",
  "Single point of contact for every labour Act",
  "Timely PF, ESI, PT & LWF deposits and returns",
  "Expert representation in disputes and inspections",
];

export const cities = [
  "Delhi / NCR",
  "Bangalore",
  "Mumbai",
  "Chennai",
  "Chandigarh",
  "Kolkata",
  "Ahmedabad",
  "Bhopal",
  "Bihar",
  "Kochi",
  "Guwahati",
  "Hyderabad",
  "Bhubaneswar",
  "Lucknow",
];

export const faqs = [
  {
    q: "What does a labour law consultant do?",
    a: "A labour law consultant helps businesses comply with applicable labour legislation — statutory registrations, PF/ESI/PT filings, maintenance of registers, payroll compliance, licences and representation in disputes and inspections. Lexus Consultants provides all of this end-to-end.",
  },
  {
    q: "Which businesses do you work with?",
    a: "We help businesses of all sizes — startups, SMEs, manufacturing units and large corporates — across sectors such as Telecom, BPOs, Financial Institutions, IT, Logistics, Hospitals, Schools, Retail, Insurance, Airlines, Restaurants and Automobile.",
  },
  {
    q: "Do you provide services outside Delhi?",
    a: "Yes. While we are headquartered in Vikas Puri, New Delhi, we serve clients on a Pan India basis including Bangalore, Mumbai, Chennai, Chandigarh, Kolkata, Ahmedabad, Hyderabad, Lucknow and more.",
  },
  {
    q: "What are the four Labour Codes, and what should employers do?",
    a: "The Code on Wages, 2019, Industrial Relations Code, 2020, Code on Social Security, 2020, and Occupational Safety, Health and Working Conditions Code, 2020 came into force on 21 November 2025. Employers should review contracts, appointment letters, payroll, HR policies and records against the requirements that apply to each state and location.",
  },
  {
    q: "What happens if my business is non-compliant?",
    a: "A minor violation or inadvertent delay in complying with a statutory requirement can result not only in levy of damages but also prosecution — often of the top executives. Non-compliance can also hurt employee trust and brand credibility.",
  },
  {
    q: "Can you handle our complete payroll?",
    a: "Yes. We process monthly payroll, issue payslips, prepare bank transfer statements, compute statutory deductions (PF, ESI, PT, LWF), handle TDS returns (24Q), generate Form 16 and manage full & final settlements.",
  },
  {
    q: "Do you help with licences like Shop Act, FSSAI and Fire NOC?",
    a: "Absolutely. We are Shop Act consultants, FSSAI licence consultants, Fire NOC consultants and Eating House licence consultants, helping you obtain licences in minimum days with minimal steps.",
  },
];

export const journey = [
  {
    phase: "Practice roots",
    title: "Advocates and Management Consultants for Industrial Matters",
    desc: "The practice focuses on labour-management relations, fair employment practices, benefit planning and litigation.",
    tags: ["Labour Courts", "Industrial Matters", "Delhi roots"],
  },
  {
    phase: "Broader support",
    title: "Compliance, payroll and workforce services",
    desc: "The service range includes establishment and factory compliance, manpower audits, legal opinions on labour legislation and payroll processing.",
    tags: ["Establishments", "Factories", "Manpower Audit"],
  },
  {
    phase: "Regional presence",
    title: "Serving clients across multiple locations",
    desc: "Lexus lists Delhi NCR, Bangalore, Mumbai, Chennai and Chandigarh among its service locations.",
    tags: ["Bangalore", "Mumbai", "Chennai"],
  },
  {
    phase: "Current practice",
    title: "Labour law consultancy across India",
    desc: "Support includes registrations, compliance management, payroll, licences and representation before labour authorities and courts.",
    tags: ["Pan India", "Payroll", "Licences"],
  },
];

export const healthQuestions = [
  {
    q: "Are PF, ESI, PT & LWF deposits and returns filed on time, every month?",
    hint: "Monthly challans, ECRs and half-yearly returns",
  },
  {
    q: "Are your Shops & Establishment / Factory licences and renewals valid?",
    hint: "Registrations, renewals, trade licences & displays",
  },
  {
    q: "Are statutory registers, wage records and annual returns up to date?",
    hint: "Registers, wage & leave records, annual filings",
  },
  {
    q: "Is payroll TDS (24Q), Form 16 and full & final settlement handled cleanly?",
    hint: "TDS returns, Form 16 / 12BA, F&F letters",
  },
  {
    q: "Do you have expert cover for inspections, notices and disputes?",
    hint: "Inspection support, domestic enquiry, court representation",
  },
];

export const insights = [
  {
    slug: "four-labour-codes-employer-guide",
    tag: "Labour Codes",
    date: "Employer guide",
    title: "The four Labour Codes: what every business should review",
    desc: "A practical overview of the consolidated framework and the employment records, policies and processes employers should review.",
    read: "Employer guide",
    body: "The Code on Wages, 2019; Industrial Relations Code, 2020; Code on Social Security, 2020; and Occupational Safety, Health and Working Conditions Code, 2020 came into force on 21 November 2025. Employers should review employee classifications, appointment letters, wages, social security, safety practices, contracts, HR policies and registers. Labour is a concurrent subject, and state rules and implementation details can vary. Check the requirements that apply to each location before changing payroll or employment terms.",
  },
  {
    slug: "why-labour-law-compliance-matters",
    tag: "Compliance basics",
    date: "Business guide",
    title: "Why labour law compliance matters for your business",
    desc: "Compliance helps businesses manage legal exposure, protect trust and keep day-to-day operations on track.",
    read: "Business guide",
    body: "Labour laws set responsibilities for employers in areas such as wages, working hours, employee benefits, workplace safety, social security and dispute resolution. Missing a requirement can lead to penalties, legal disputes and reputational harm. Good records and timely filings help organisations prepare for audits and inspections, support employee trust and reduce the chance of unexpected disruption.",
  },
  {
    slug: "labour-code-transition-readiness",
    tag: "Employer readiness",
    date: "Compliance guide",
    title: "Prepare your contracts, payroll and HR records",
    desc: "Review employment documents and compliance processes against the Labour Codes and the rules applicable to each state.",
    read: "Compliance guide",
    body: "The transition affects multiple parts of the employment relationship, including wages, contracts, safety and social security. Review appointment letters, existing registrations, HR policies, payroll systems and statutory records. Requirements can vary by location as supporting state rules and implementation details evolve. A structured compliance review can help identify gaps and prioritise practical corrective steps.",
  },
];

export const monthlyDues = [
  { day: "Monthly", task: "Payroll processing and payslips", law: "Payroll and employment requirements" },
  { day: "Monthly / as applicable", task: "PF and ESI contribution review and filing", law: "Social security requirements" },
  { day: "Monthly / as applicable", task: "Professional Tax and Labour Welfare Fund review", law: "State-specific requirements" },
  { day: "Each payroll cycle", task: "Wage calculations, statutory deductions and records", law: "Wage and payroll requirements" },
  { day: "Ongoing", task: "Track notices, inspections, registrations and renewals", law: "Applicable central and state requirements" },
];

export const annualDues = [
  { when: "Periodic / as applicable", task: "Review statutory registers, records and returns" },
  { when: "At renewal / as applicable", task: "Review establishment and factory registrations, licences and renewals" },
  { when: "Annual review", task: "Check HR policies, appointment letters and employment documentation" },
  { when: "As required", task: "Prepare for statutory inspections and address compliance gaps" },
];

export const extraFaqs = [
  { q: "Is labour law compliance relevant to small businesses?", a: "Requirements depend on the nature of the business, its workforce and the state where it operates. Small businesses should review applicable registrations, wages, employee benefits and workplace obligations." },
  { q: "How often do labour law requirements change?", a: "Requirements can change at both Central and State levels. Employers should monitor updates and review their practices, documentation and filings periodically." },
  { q: "Can Lexus support businesses in more than one state?", a: "Lexus describes its services as Pan India and provides support with state-specific requirements. The applicable obligations should be checked for each location." },
  { q: "How can my business get started?", a: "Contact Lexus with your business details and compliance requirements. The team can understand your needs and discuss an appropriate scope of support." },
];
