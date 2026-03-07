"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

// ─── Data ────────────────────────────────────────────────────────────────────

const MODULE_PILLS = [
  { label: "Accounting", pulse: true },
  { label: "CRM", pulse: true },
  { label: "Inventory", pulse: true },
  { label: "Manufacturing" },
  { label: "HR & Payroll" },
  { label: "Purchase" },
  { label: "Project" },
  { label: "eCommerce" },
  { label: "Point of Sale" },
  { label: "Helpdesk" },
  { label: "Field Service" },
  { label: "Website" },
]

const PROBLEMS = [
  {
    stat: "KES 2.1M",
    label: "avg. annual cost of manual data entry errors in SMEs",
    description:
      "Duplicate records, missed invoices, and reconciliation nightmares drain finance teams of productive hours every week.",
  },
  {
    stat: "14 hrs/wk",
    label: "spent on cross-platform copy-paste by operations staff",
    description:
      "Inventory in one sheet, orders in another, HR in a third system — no single source of truth, endless rework.",
  },
  {
    stat: "67%",
    label: "of Kenyan businesses miss KRA filing deadlines due to poor data systems",
    description:
      "Manual VAT calculations, missing eTIMS compliance, and fragmented payroll records create regulatory exposure.",
  },
  {
    stat: "3× slower",
    label: "growth trajectory vs. businesses on integrated ERP platforms",
    description:
      "Decision-making stalls when leadership can't trust reports. Scaling without a backbone is building on sand.",
  },
]

const MODULES = [
  {
    icon: "₦",
    title: "Accounting & Finance",
    points: [
      "Multi-currency with CBK rates",
      "KRA eTIMS tax compliance",
      "Bank reconciliation (Equity, KCB, DTB)",
      "Financial statements & audit trails",
    ],
    color: "#00D4FF",
  },
  {
    icon: "◈",
    title: "Inventory & Warehouse",
    points: [
      "Real-time stock tracking",
      "Multi-location warehouses",
      "Barcode & serial number scanning",
      "Automated reorder rules",
    ],
    color: "#00E87A",
  },
  {
    icon: "⚙",
    title: "Manufacturing & MRP",
    points: [
      "Bill of materials management",
      "Production order scheduling",
      "Work centre capacity planning",
      "Quality control checkpoints",
    ],
    color: "#F5A623",
  },
  {
    icon: "◉",
    title: "CRM & Sales",
    points: [
      "Pipeline & lead scoring",
      "Quotation → Invoice automation",
      "Customer portal access",
      "Sales team performance dashboards",
    ],
    color: "#00D4FF",
  },
  {
    icon: "◎",
    title: "HR & Payroll",
    points: [
      "Kenya PAYE, NHIF, NSSF compliance",
      "Leave & attendance tracking",
      "Payslip generation & approval",
      "Employee self-service portal",
    ],
    color: "#00E87A",
  },
  {
    icon: "▣",
    title: "Point of Sale",
    points: [
      "M-PESA & card payments",
      "Offline mode with auto-sync",
      "Real-time stock deduction",
      "Loyalty programme integration",
    ],
    color: "#F5A623",
  },
]

const KENYA_INTEGRATIONS = [
  {
    title: "M-PESA Integration",
    tag: "PAYMENTS",
    tagColor: "#00E87A",
    description:
      "Daraja API integration for Lipa Na M-PESA, B2B, and C2B flows. Payments reconcile automatically in the Odoo Accounting ledger.",
    detail: "Supports STK Push, B2B Express, Reversal API",
  },
  {
    title: "KRA eTIMS",
    tag: "COMPLIANCE",
    tagColor: "#F5A623",
    description:
      "End-to-end Kenya Revenue Authority electronic Tax Invoice Management System compliance. Auto-generate tax invoices on every sale.",
    detail: "VAT 16%, withholding tax, PIN validation",
  },
  {
    title: "Kenya Payroll",
    tag: "HR",
    tagColor: "#00D4FF",
    description:
      "Statutory deductions pre-configured: PAYE bands, NHIF graded contributions, NSSF Tier I/II, and Housing Levy — updated annually.",
    detail: "P9 forms, KRA payroll reconciliation",
  },
  {
    title: "Multi-Currency",
    tag: "FINANCE",
    tagColor: "#00E87A",
    description:
      "KES as base currency with live exchange rates. Supports USD, EUR, GBP invoicing for export businesses and NGOs receiving donor funding.",
    detail: "CBK rate feeds, forex gain/loss tracking",
  },
]

const PROCESS_STEPS = [
  {
    phase: "Week 1–2",
    title: "Discovery & Audit",
    description:
      "We map every current system, data flow, and pain point. You get a written scope document before we write a single line of code.",
    deliverable: "Scope doc + project plan",
  },
  {
    phase: "Week 2–3",
    title: "Data Migration",
    description:
      "Clean, validate, and import your existing data — customers, vendors, products, chart of accounts, opening balances.",
    deliverable: "Validated data in staging",
  },
  {
    phase: "Week 3–5",
    title: "Configuration",
    description:
      "Configure modules, workflows, and access rights. Kenya-specific: M-PESA, eTIMS, payroll statutory rules all set up here.",
    deliverable: "Configured staging environment",
  },
  {
    phase: "Week 5–7",
    title: "Customisation",
    description:
      "Custom reports, bespoke workflows, API integrations with third-party systems — only what your business actually needs.",
    deliverable: "Custom modules deployed to staging",
  },
  {
    phase: "Week 7–9",
    title: "Training",
    description:
      "Role-based training sessions for every team. Finance, warehouse, HR, sales — each gets a focused session with your real data.",
    deliverable: "Trained users + video library",
  },
  {
    phase: "Week 10–14",
    title: "Go-Live & Hypercare",
    description:
      "Parallel run with your old system, then hard cutover. 30-day hypercare period — our team is on call for every question.",
    deliverable: "Live system + 30-day support",
  },
]

const VERTICALS = [
  {
    title: "Manufacturing",
    icon: "⚙",
    points: ["BOM & routing", "MRP scheduling", "Quality control", "Cost tracking"],
    color: "#00D4FF",
  },
  {
    title: "Retail & Wholesale",
    icon: "▣",
    points: ["Multi-branch POS", "M-PESA checkout", "Loyalty programmes", "Demand forecasting"],
    color: "#00E87A",
  },
  {
    title: "NGOs & Charities",
    icon: "◉",
    points: ["Donor fund tracking", "Project accounting", "Grant compliance", "Multi-currency"],
    color: "#F5A623",
  },
  {
    title: "Logistics & Fleet",
    icon: "◈",
    points: ["Fleet management", "Driver tracking", "Fuel cost analysis", "Route optimisation"],
    color: "#00D4FF",
  },
  {
    title: "Real Estate",
    icon: "◎",
    points: ["Property portfolio", "Lease management", "Rent collection", "Maintenance requests"],
    color: "#00E87A",
  },
  {
    title: "Schools & Education",
    icon: "▤",
    points: ["Fee collection", "Student records", "Payroll & HR", "Exam scheduling"],
    color: "#F5A623",
  },
]

const CREDENTIALS = [
  { value: "50+", label: "Odoo deployments", sublabel: "across East Africa" },
  { value: "6", label: "Odoo modules", sublabel: "certified team members" },
  { value: "3", label: "industry verticals", sublabel: "with deep specialisation" },
  { value: "95%", label: "client retention", sublabel: "after go-live" },
]

const PRICING = [
  {
    tier: "Starter",
    price: "KES 180,000",
    note: "one-time implementation",
    highlight: false,
    modules: ["Accounting", "Inventory", "CRM/Sales"],
    users: "Up to 5 users",
    timeline: "4–6 weeks",
    includes: [
      "Data migration (up to 5,000 records)",
      "M-PESA + eTIMS configuration",
      "3 training sessions",
      "30-day hypercare support",
    ],
  },
  {
    tier: "Business",
    price: "KES 420,000",
    note: "one-time implementation",
    highlight: true,
    modules: ["All Starter modules", "+ HR & Payroll", "+ Manufacturing or POS"],
    users: "Up to 20 users",
    timeline: "8–10 weeks",
    includes: [
      "Full data migration (unlimited records)",
      "Custom workflows & reports",
      "Role-based training for all teams",
      "60-day hypercare support",
      "Free Odoo Website",
    ],
  },
  {
    tier: "Enterprise",
    price: "Custom",
    note: "scope-based pricing",
    highlight: false,
    modules: ["Full module suite", "Custom development", "Multi-company setup"],
    users: "Unlimited users",
    timeline: "12–16 weeks",
    includes: [
      "Legacy system migration",
      "API integrations with 3rd party systems",
      "Dedicated project manager",
      "90-day hypercare support",
      "SLA-based annual support contract",
    ],
  },
]

const FAQS = [
  {
    q: "How is Odoo different from QuickBooks or Sage?",
    a: "QuickBooks and Sage are accounting-only tools. Odoo is a complete business operating system — accounting, inventory, CRM, HR, manufacturing, and website in one database. No more copy-pasting between systems.",
  },
  {
    q: "Do I need to pay monthly Odoo licence fees?",
    a: "Yes. Odoo Community is free and open-source, but most businesses need Odoo Enterprise for advanced features (KES 2,500–4,500 per user/month depending on plan). We help you choose the right plan and can negotiate volume pricing.",
  },
  {
    q: "Can Odoo handle M-PESA payments?",
    a: "Yes. We integrate Safaricom's Daraja API directly into Odoo so M-PESA payments auto-reconcile in your accounting ledger. Lipa Na M-PESA, B2B Express, and C2B flows are all supported.",
  },
  {
    q: "Is Odoo compliant with KRA eTIMS?",
    a: "Yes. We configure full KRA eTIMS integration so every sale generates a compliant tax invoice automatically. VAT calculations, withholding tax, and PIN validation are all built into the workflow.",
  },
  {
    q: "What happens to our existing data?",
    a: "We migrate it. Customers, vendors, products, chart of accounts, opening balances, historical transactions — we clean, validate, and import everything to Odoo. You don't start from zero.",
  },
  {
    q: "How long does implementation take?",
    a: "Starter packages take 4–6 weeks. Business packages 8–10 weeks. Enterprise 12–16 weeks. Timeline depends on data complexity and how quickly your team can participate in training and UAT.",
  },
  {
    q: "What support do we get after go-live?",
    a: "Every implementation includes a hypercare period (30–90 days depending on tier) where our team responds within 4 hours. After hypercare, you can continue on a Bronze/Silver/Gold support contract.",
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function CounterStat({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setCount(Math.round(eased * target))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function FAQItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null)

  return (
    <div
      style={{
        borderBottom: "1px solid #1A2E44",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
            fontWeight: 500,
            fontSize: "0.925rem",
            color: open ? "#E8F0FE" : "#B0C4D8",
            lineHeight: "1.5",
            transition: "color 0.2s",
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: open ? "#00D4FF" : "#5A7A99",
            transition: "color 0.2s, transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            fontSize: "1.2rem",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <div
        ref={bodyRef}
        style={{
          overflow: "hidden",
          maxHeight: open ? "300px" : "0",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
            fontWeight: 300,
            fontSize: "0.875rem",
            color: "#5A7A99",
            lineHeight: "1.85",
            paddingBottom: "20px",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function OdooERPContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    )
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef}>
      {/* ════════════════════════════════════════════════════════════════════════
          §01 HERO
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#060A10",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "96px",
        }}
      >
        {/* Mesh background */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-10%",
              width: "60%",
              height: "70%",
              background: "radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 65%)",
              animation: "mesh-a 18s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              right: "-10%",
              width: "55%",
              height: "65%",
              background: "radial-gradient(ellipse, rgba(0,232,122,0.05) 0%, transparent 65%)",
              animation: "mesh-b 22s ease-in-out infinite",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto px-6 lg:px-12 py-16 max-w-7xl w-full">
          {/* Breadcrumb */}
          <div className="reveal" style={{ marginBottom: "40px" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: "#5A7A99",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              ← OKS / Services / Odoo ERP
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1fr_440px] gap-16 items-center">
            {/* Left: headline + CTAs */}
            <div>
              <div
                className="reveal"
                style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "9px",
                    letterSpacing: "0.22em",
                    color: "#00D4FF",
                    textTransform: "uppercase",
                  }}
                >
                  §01 — FLAGSHIP SERVICE
                </span>
                <div style={{ width: "60px", height: "1px", background: "#1A2E44" }} />
              </div>

              <h1
                className="reveal"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.03em",
                  color: "#E8F0FE",
                  marginBottom: "28px",
                }}
              >
                Your Business Runs on
                <br />
                <span style={{ color: "#5A7A99" }}>Dozens of Disconnected</span>
                <br />
                Tools.{" "}
                <span
                  style={{
                    color: "#00D4FF",
                    textDecoration: "underline",
                    textDecorationColor: "rgba(0,212,255,0.3)",
                    textUnderlineOffset: "6px",
                  }}
                >
                  It Doesn&apos;t Have To.
                </span>
              </h1>

              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300,
                  fontSize: "1.05rem",
                  color: "#5A7A99",
                  lineHeight: "1.8",
                  maxWidth: "520px",
                  marginBottom: "36px",
                }}
              >
                OKS implements Odoo ERP for Kenyan and African businesses — from a single module to a full
                enterprise suite, with M-PESA, KRA eTIMS, and Kenya payroll compliance built in.
              </p>

              <div className="reveal" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link
                  href="https://calendly.com/omnitechkernelsolutions/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "#060A10",
                    background: "#00D4FF",
                    padding: "14px 28px",
                    borderRadius: "8px",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    display: "inline-block",
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0 28px rgba(0,212,255,0.4)")}
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  Get a Free ERP Assessment
                </Link>
                <Link
                  href="#pricing"
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontWeight: 400,
                    fontSize: "0.85rem",
                    color: "#5A7A99",
                    padding: "14px 24px",
                    border: "1px solid #1A2E44",
                    borderRadius: "8px",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#E8F0FE"
                    e.currentTarget.style.borderColor = "#5A7A99"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#5A7A99"
                    e.currentTarget.style.borderColor = "#1A2E44"
                  }}
                >
                  View pricing →
                </Link>
              </div>
            </div>

            {/* Right: Module pills panel */}
            <div
              className="reveal hidden lg:block"
              style={{
                background: "#0D1420",
                border: "1px solid #1A2E44",
                borderRadius: "4px",
                padding: "28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Scan line */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4), transparent)",
                  animation: "scan-line 4s linear infinite",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "8px",
                  letterSpacing: "0.2em",
                  color: "#00D4FF",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                ODOO_MODULE_SUITE
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {MODULE_PILLS.map((pill) => (
                  <span
                    key={pill.label}
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 400,
                      fontSize: "0.75rem",
                      color: pill.pulse ? "#00D4FF" : "#5A7A99",
                      background: pill.pulse ? "rgba(0,212,255,0.08)" : "rgba(90,122,153,0.08)",
                      border: `1px solid ${pill.pulse ? "rgba(0,212,255,0.25)" : "#1A2E44"}`,
                      padding: "5px 12px",
                      borderRadius: "2px",
                      position: "relative",
                    }}
                  >
                    {pill.pulse && (
                      <span
                        style={{
                          display: "inline-block",
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#00D4FF",
                          marginRight: "6px",
                          verticalAlign: "middle",
                          animation: "glow-pulse 2s ease-in-out infinite",
                        }}
                      />
                    )}
                    {pill.label}
                  </span>
                ))}
              </div>
              <div style={{ borderTop: "1px solid #1A2E44", paddingTop: "20px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  {[
                    { val: "50+", label: "deployments" },
                    { val: "100%", label: "Kenya-compliant" },
                    { val: "4–14 wks", label: "go-live window" },
                    { val: "Free", label: "Website included" },
                  ].map((m) => (
                    <div key={m.label}>
                      <div
                        style={{
                          fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                          fontWeight: 500,
                          fontSize: "1.1rem",
                          color: "#E8F0FE",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {m.val}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                          fontSize: "0.72rem",
                          color: "#5A7A99",
                          marginTop: "2px",
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §02 THE PROBLEM
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0D1420", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}>
        {/* Ghost label */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "-2%",
            transform: "translateY(-50%) rotate(-90deg)",
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 800,
            fontSize: "clamp(4rem, 8vw, 7rem)",
            color: "rgba(26,46,68,0.3)",
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          THE PROBLEM
        </div>

        <div className="relative z-10 mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div style={{ marginBottom: "52px" }}>
            <div
              className="reveal"
              style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#F5A623",
                  textTransform: "uppercase",
                }}
              >
                §02 — THE COST OF FRAGMENTATION
              </span>
              <div style={{ width: "100px", height: "1px", background: "#1A2E44" }} />
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#E8F0FE",
                maxWidth: "600px",
              }}
            >
              Spreadsheets were never
              <br />
              <span style={{ color: "#5A7A99" }}>an enterprise strategy.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2px",
            }}
          >
            {PROBLEMS.map((p, i) => (
              <div
                key={i}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  style={{
                    background: "#111B2B",
                    border: "1px solid #1A2E44",
                    borderLeft: "3px solid #F5A623",
                    padding: "28px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontWeight: 500,
                      fontSize: "1.6rem",
                      color: "#F5A623",
                      letterSpacing: "-0.02em",
                      marginBottom: "6px",
                    }}
                  >
                    {p.stat}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 500,
                      fontSize: "0.78rem",
                      color: "#B0C4D8",
                      marginBottom: "14px",
                      lineHeight: "1.4",
                    }}
                  >
                    {p.label}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 300,
                      fontSize: "0.8rem",
                      color: "#5A7A99",
                      lineHeight: "1.75",
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §03 WHAT IS ODOO
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#060A10", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div
            className="reveal"
            style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#00D4FF",
                textTransform: "uppercase",
              }}
            >
              §03 — THE PLATFORM
            </span>
            <div style={{ width: "80px", height: "1px", background: "#1A2E44" }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                  color: "#E8F0FE",
                  marginBottom: "20px",
                }}
              >
                One platform.
                <br />
                <span style={{ color: "#00D4FF" }}>Every department.</span>
              </h2>
              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  color: "#5A7A99",
                  lineHeight: "1.85",
                  marginBottom: "20px",
                }}
              >
                Odoo is the world&apos;s most installed open-source ERP — 12 million+ users across 150 countries.
                Unlike SAP or Oracle, it&apos;s modular: start with what you need today, add more as you grow.
              </p>
              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  color: "#5A7A99",
                  lineHeight: "1.85",
                }}
              >
                Every module shares the same database — so your accountant&apos;s invoice is your warehouse
                team&apos;s dispatch note and your sales rep&apos;s commission trigger, all automatically.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {/* Before */}
              <div
                className="reveal"
                style={{
                  background: "#111B2B",
                  border: "1px solid #1A2E44",
                  borderLeft: "3px solid #F5A623",
                  padding: "24px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "8px",
                    letterSpacing: "0.2em",
                    color: "#F5A623",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  BEFORE — WITHOUT ODOO
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "QuickBooks + Excel + WhatsApp inventory",
                    "Manual payroll calculations every month",
                    "Sales orders retyped from email to spreadsheet",
                    "Separate system for each department",
                    "No real-time visibility for management",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "#F5A623", flexShrink: 0, marginTop: "2px" }}>✕</span>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                          fontSize: "0.82rem",
                          color: "#5A7A99",
                          lineHeight: "1.5",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div
                className="reveal"
                style={{
                  background: "#111B2B",
                  border: "1px solid #1A2E44",
                  borderLeft: "3px solid #00E87A",
                  padding: "24px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "8px",
                    letterSpacing: "0.2em",
                    color: "#00E87A",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  AFTER — WITH ODOO + OKS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Single platform: accounting, inventory, HR, CRM",
                    "Automated payroll with PAYE, NHIF, NSSF",
                    "Sales order auto-generates delivery + invoice",
                    "One database, all departments in real time",
                    "Live dashboards on any device, anywhere",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "#00E87A", flexShrink: 0, marginTop: "2px" }}>✓</span>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                          fontSize: "0.82rem",
                          color: "#B0C4D8",
                          lineHeight: "1.5",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §04 MODULE EXPERTISE
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0D1420", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage:
              "linear-gradient(to right, rgba(26,46,68,0.2) 1px, transparent 1px)," +
              "linear-gradient(to bottom, rgba(26,46,68,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div style={{ marginBottom: "52px" }}>
            <div
              className="reveal"
              style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#00E87A",
                  textTransform: "uppercase",
                }}
              >
                §04 — MODULE EXPERTISE
              </span>
              <div style={{ width: "80px", height: "1px", background: "#1A2E44" }} />
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#E8F0FE",
                maxWidth: "580px",
              }}
            >
              Deep expertise across
              <br />
              <span style={{ color: "#5A7A99" }}>every Odoo module.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2px",
            }}
          >
            {MODULES.map((mod, i) => (
              <ModuleCard key={mod.title} mod={mod} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §05 FREE WEBSITE
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#060A10", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-center">
            <div>
              <div
                className="reveal"
                style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "#00D4FF",
                    textTransform: "uppercase",
                  }}
                >
                  §05 — INCLUDED AT NO EXTRA COST
                </span>
              </div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.03em",
                  color: "#E8F0FE",
                  marginBottom: "24px",
                }}
              >
                Your Odoo website is
                <br />
                <span
                  style={{
                    color: "#00D4FF",
                    textDecoration: "underline",
                    textDecorationColor: "rgba(0,212,255,0.35)",
                    textUnderlineOffset: "8px",
                    textDecorationThickness: "2px",
                  }}
                >
                  Free.
                </span>
              </h2>
              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  color: "#5A7A99",
                  lineHeight: "1.85",
                  maxWidth: "520px",
                  marginBottom: "28px",
                }}
              >
                Every Business and Enterprise implementation includes a fully integrated Odoo website —
                built on the same platform as your ERP so your product catalogue, pricing, and stock levels
                are always in sync.
              </p>
              <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "eCommerce store connected to live Odoo inventory",
                  "Product pages auto-populated from your ERP catalogue",
                  "Customer portal: track orders, pay invoices, access documents",
                  "M-PESA and card checkout out of the box",
                  "SEO-ready, mobile-first, no coding required",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span
                      style={{
                        color: "#00D4FF",
                        flexShrink: 0,
                        fontSize: "0.75rem",
                        marginTop: "3px",
                      }}
                    >
                      ✦
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                        fontSize: "0.875rem",
                        color: "#B0C4D8",
                        lineHeight: "1.6",
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stat banner */}
            <div
              className="reveal"
              style={{
                background: "#0D1420",
                border: "1px solid #1A2E44",
                borderTop: "2px solid #00D4FF",
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "8px",
                  letterSpacing: "0.22em",
                  color: "#5A7A99",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                WEBSITE_INTEGRATION_FLOW
              </div>
              {[
                { label: "ERP Product Catalogue", arrow: true },
                { label: "Odoo Website / eCommerce", arrow: true },
                { label: "M-PESA / Card Checkout", arrow: true },
                { label: "Auto-creates: Invoice + Delivery", arrow: false },
              ].map((step, i) => (
                <div key={i}>
                  <div
                    style={{
                      background: i === 3 ? "rgba(0,212,255,0.06)" : "#111B2B",
                      border: `1px solid ${i === 3 ? "rgba(0,212,255,0.2)" : "#1A2E44"}`,
                      padding: "12px 16px",
                      borderRadius: "2px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                        fontSize: "0.8rem",
                        color: i === 3 ? "#00D4FF" : "#B0C4D8",
                        fontWeight: i === 3 ? 500 : 300,
                      }}
                    >
                      {step.label}
                    </span>
                  </div>
                  {step.arrow && (
                    <div
                      style={{
                        textAlign: "center",
                        color: "#1A2E44",
                        fontSize: "1.1rem",
                        lineHeight: "1.6",
                      }}
                    >
                      ↓
                    </div>
                  )}
                </div>
              ))}
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "20px",
                  borderTop: "1px solid #1A2E44",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "1.4rem",
                    color: "#E8F0FE",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                  }}
                >
                  KES 0
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "0.75rem",
                    color: "#5A7A99",
                    marginTop: "4px",
                  }}
                >
                  website build cost on Business & Enterprise plans
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §06 KENYA INTEGRATIONS
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0D1420", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div style={{ marginBottom: "52px" }}>
            <div
              className="reveal"
              style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#00E87A",
                  textTransform: "uppercase",
                }}
              >
                §06 — KENYA-SPECIFIC
              </span>
              <div style={{ width: "80px", height: "1px", background: "#1A2E44" }} />
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#E8F0FE",
                maxWidth: "600px",
              }}
            >
              Built for how Kenya
              <br />
              <span style={{ color: "#5A7A99" }}>actually does business.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2px",
            }}
          >
            {KENYA_INTEGRATIONS.map((item, i) => (
              <KenyaCard key={item.title} item={item} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §07 IMPLEMENTATION PROCESS
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#060A10", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div style={{ marginBottom: "52px" }}>
            <div
              className="reveal"
              style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#00D4FF",
                  textTransform: "uppercase",
                }}
              >
                §07 — HOW WE IMPLEMENT
              </span>
              <div style={{ width: "80px", height: "1px", background: "#1A2E44" }} />
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#E8F0FE",
                maxWidth: "580px",
              }}
            >
              A structured path from
              <br />
              <span style={{ color: "#5A7A99" }}>chaos to go-live.</span>
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Connecting line (desktop) */}
            <div
              className="hidden lg:block"
              style={{
                position: "absolute",
                top: "32px",
                left: "5%",
                right: "5%",
                height: "1px",
                background: "linear-gradient(to right, transparent, #1A2E44 10%, #1A2E44 90%, transparent)",
                zIndex: 0,
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    style={{
                      background: "#0D1420",
                      border: "1px solid #1A2E44",
                      padding: "28px 24px",
                      height: "100%",
                    }}
                  >
                    {/* Step number circle */}
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "2px",
                        background: "rgba(0,212,255,0.1)",
                        border: "1px solid rgba(0,212,255,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                          fontSize: "11px",
                          color: "#00D4FF",
                          fontWeight: 500,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontSize: "8px",
                        letterSpacing: "0.14em",
                        color: "#5A7A99",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      {step.phase}
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#E8F0FE",
                        marginBottom: "10px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                        fontWeight: 300,
                        fontSize: "0.78rem",
                        color: "#5A7A99",
                        lineHeight: "1.75",
                        marginBottom: "16px",
                        flex: 1,
                      }}
                    >
                      {step.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        paddingTop: "12px",
                        borderTop: "1px solid #1A2E44",
                      }}
                    >
                      <span style={{ color: "#00E87A", fontSize: "0.7rem" }}>✓</span>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                          fontSize: "0.72rem",
                          color: "#00E87A",
                          fontWeight: 400,
                        }}
                      >
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §08 INDUSTRY VERTICALS
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0D1420", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage:
              "linear-gradient(to right, rgba(26,46,68,0.2) 1px, transparent 1px)," +
              "linear-gradient(to bottom, rgba(26,46,68,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div style={{ marginBottom: "52px" }}>
            <div
              className="reveal"
              style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#F5A623",
                  textTransform: "uppercase",
                }}
              >
                §08 — INDUSTRY VERTICALS
              </span>
              <div style={{ width: "80px", height: "1px", background: "#1A2E44" }} />
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#E8F0FE",
                maxWidth: "580px",
              }}
            >
              Pre-built for
              <br />
              <span style={{ color: "#5A7A99" }}>your industry.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2px",
            }}
          >
            {VERTICALS.map((v, i) => (
              <VerticalCard key={v.title} v={v} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §09 CREDENTIALS — CENTER ALIGNED (exception)
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#060A10", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div
              className="reveal"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "14px", marginBottom: "20px",
              }}
            >
              <div style={{ width: "60px", height: "1px", background: "#1A2E44" }} />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#00D4FF",
                  textTransform: "uppercase",
                }}
              >
                §09 — PARTNERSHIP & CREDENTIALS
              </span>
              <div style={{ width: "60px", height: "1px", background: "#1A2E44" }} />
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#E8F0FE",
              }}
            >
              Trusted by businesses
              <br />
              <span style={{ color: "#5A7A99" }}>across East Africa.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2px",
              marginBottom: "40px",
            }}
          >
            {CREDENTIALS.map((c, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div
                  style={{
                    background: "#0D1420",
                    border: "1px solid #1A2E44",
                    borderTop: "2px solid #00D4FF",
                    padding: "32px 24px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontWeight: 500,
                      fontSize: "2.2rem",
                      color: "#E8F0FE",
                      letterSpacing: "-0.03em",
                      marginBottom: "8px",
                    }}
                  >
                    {c.value.includes("+") ? (
                      <>
                        <CounterStat target={parseInt(c.value)} suffix="+" />
                      </>
                    ) : c.value.includes("%") ? (
                      <CounterStat target={parseInt(c.value)} suffix="%" />
                    ) : (
                      <CounterStat target={parseInt(c.value)} />
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 500,
                      fontSize: "0.82rem",
                      color: "#B0C4D8",
                      marginBottom: "4px",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontSize: "0.68rem",
                      color: "#5A7A99",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {c.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Official Partner badge */}
          <div
            className="reveal"
            style={{
              maxWidth: "480px",
              margin: "0 auto",
              background: "#0D1420",
              border: "1px solid rgba(0,212,255,0.2)",
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.25)",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "0.7rem",
                color: "#00D4FF",
                fontWeight: 500,
              }}
            >
              OKS
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  color: "#E8F0FE",
                  marginBottom: "3px",
                }}
              >
                Odoo Certified Implementation Partner
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "0.7rem",
                  color: "#5A7A99",
                  letterSpacing: "0.06em",
                }}
              >
                East Africa · Kenya · Regional coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §10 PRICING
      ════════════════════════════════════════════════════════════════════════ */}
      <section id="pricing" style={{ background: "#0D1420", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div style={{ marginBottom: "52px" }}>
            <div
              className="reveal"
              style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#00E87A",
                  textTransform: "uppercase",
                }}
              >
                §10 — PRICING
              </span>
              <div style={{ width: "80px", height: "1px", background: "#1A2E44" }} />
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#E8F0FE",
                marginBottom: "12px",
                maxWidth: "560px",
              }}
            >
              Transparent pricing.
              <br />
              <span style={{ color: "#5A7A99" }}>No hidden costs.</span>
            </h2>
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 300,
                fontSize: "0.9rem",
                color: "#5A7A99",
                lineHeight: "1.7",
                maxWidth: "480px",
              }}
            >
              Implementation fee is one-time. Odoo licence is separate (we help you get the best rate).
              Support contracts are optional monthly retainers after go-live.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2px",
            }}
          >
            {PRICING.map((plan, i) => (
              <PricingCard key={plan.tier} plan={plan} delay={i * 80} />
            ))}
          </div>

          <div
            className="reveal"
            style={{
              marginTop: "24px",
              padding: "16px 20px",
              background: "rgba(0,232,122,0.04)",
              border: "1px solid rgba(0,232,122,0.12)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ color: "#00E87A", fontSize: "0.8rem" }}>✓</span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontSize: "0.82rem",
                color: "#5A7A99",
              }}
            >
              All prices exclude Odoo Enterprise licence fees (billed by Odoo SA). We include licence setup
              support at no extra cost.
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §11 FAQ
      ══════════════════���═════════════════════════════════════════════════════ */}
      <section style={{ background: "#060A10", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div className="grid lg:grid-cols-[340px_1fr] gap-16">
            <div>
              <div
                className="reveal"
                style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "#00D4FF",
                    textTransform: "uppercase",
                  }}
                >
                  §11 — FAQ
                </span>
              </div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                  color: "#E8F0FE",
                  marginBottom: "16px",
                }}
              >
                Frequently asked
                <br />
                <span style={{ color: "#5A7A99" }}>questions.</span>
              </h2>
              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "#5A7A99",
                  lineHeight: "1.8",
                }}
              >
                Can&apos;t find the answer? Book a free 30-minute call with our ERP team.
              </p>
              <div className="reveal" style={{ marginTop: "24px" }}>
                <Link
                  href="https://calendly.com/omnitechkernelsolutions/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontWeight: 400,
                    fontSize: "0.82rem",
                    color: "#00D4FF",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Book a free consultation →
                </Link>
              </div>
            </div>

            <div className="reveal">
              <div style={{ borderTop: "1px solid #1A2E44" }}>
                {FAQS.map((faq, i) => (
                  <FAQItem
                    key={i}
                    q={faq.q}
                    a={faq.a}
                    open={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §12 FINAL CTA
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0D1420", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-center">
            <div>
              <div
                className="reveal"
                style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "#00E87A",
                    textTransform: "uppercase",
                  }}
                >
                  §12 — GET STARTED
                </span>
              </div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  lineHeight: "1.07",
                  letterSpacing: "-0.03em",
                  color: "#E8F0FE",
                  marginBottom: "20px",
                }}
              >
                Ready to replace the
                <br />
                <span style={{ color: "#5A7A99" }}>spreadsheets?</span>
              </h2>
              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  color: "#5A7A99",
                  lineHeight: "1.85",
                  maxWidth: "480px",
                  marginBottom: "32px",
                }}
              >
                Book a free ERP assessment. We&apos;ll map your current systems, identify the right modules,
                and give you a written scope and timeline — no obligation.
              </p>
              <div className="reveal" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link
                  href="https://calendly.com/omnitechkernelsolutions/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "#060A10",
                    background: "#00E87A",
                    padding: "14px 28px",
                    borderRadius: "2px",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    display: "inline-block",
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0 24px rgba(0,232,122,0.35)")}
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  Book Free Assessment
                </Link>
                <Link
                  href="/quote"
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontWeight: 400,
                    fontSize: "0.85rem",
                    color: "#5A7A99",
                    padding: "14px 24px",
                    border: "1px solid #1A2E44",
                    borderRadius: "2px",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#E8F0FE"
                    e.currentTarget.style.borderColor = "#5A7A99"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#5A7A99"
                    e.currentTarget.style.borderColor = "#1A2E44"
                  }}
                >
                  Request a quote →
                </Link>
                <a
                  href="/odoo-kenya-guide.pdf"
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontWeight: 400,
                    fontSize: "0.85rem",
                    color: "#5A7A99",
                    padding: "14px 24px",
                    border: "1px solid #1A2E44",
                    borderRadius: "2px",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#00D4FF"
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#5A7A99"
                    e.currentTarget.style.borderColor = "#1A2E44"
                  }}
                >
                  ↓ Download the Odoo Kenya Guide
                </a>
              </div>
            </div>

            {/* Contact panel */}
            <div
              className="reveal"
              style={{
                background: "#111B2B",
                border: "1px solid #1A2E44",
                borderTop: "2px solid #00E87A",
                padding: "32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "8px",
                  letterSpacing: "0.2em",
                  color: "#5A7A99",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                DIRECT_CONTACT
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { label: "EMAIL", value: "info@oks.co.ke", href: "mailto:info@oks.co.ke", color: "#00E87A" },
                  {
                    label: "PHONE",
                    value: "+254 703 133 390",
                    href: "tel:+254703133390",
                    color: "#00D4FF",
                  },
                  { label: "OFFICE", value: "Nairobi, Kenya", href: null, color: "#5A7A99" },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontSize: "8px",
                        letterSpacing: "0.18em",
                        color: "#5A7A99",
                        marginBottom: "4px",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                          fontSize: "0.82rem",
                          color: item.color,
                          textDecoration: "none",
                          transition: "opacity 0.2s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                          fontSize: "0.82rem",
                          color: item.color,
                        }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "20px",
                  borderTop: "1px solid #1A2E44",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#00E87A",
                    display: "block",
                    animation: "glow-pulse 2.5s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "0.68rem",
                    color: "#5A7A99",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Responds within 4 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Card sub-components (defined after main to keep file readable) ───────────

function ModuleCard({
  mod,
  delay,
}: {
  mod: { icon: string; title: string; points: string[]; color: string }
  delay: number
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="reveal" style={{ transitionDelay: `${delay}ms`, height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "#131e2e" : "#111B2B",
          border: `1px solid ${hovered ? mod.color + "44" : "#1A2E44"}`,
          borderTop: `2px solid ${mod.color}`,
          padding: "28px",
          height: "100%",
          transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.25s",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? `0 8px 32px ${mod.color}18` : "none",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
            fontSize: "1.4rem",
            color: mod.color,
            marginBottom: "14px",
            opacity: 0.8,
          }}
        >
          {mod.icon}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700,
            fontSize: "0.95rem",
            color: "#E8F0FE",
            letterSpacing: "-0.01em",
            marginBottom: "14px",
          }}
        >
          {mod.title}
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {mod.points.map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <span style={{ color: mod.color, fontSize: "0.65rem", flexShrink: 0, marginTop: "4px" }}>▸</span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  color: "#5A7A99",
                  lineHeight: "1.5",
                }}
              >
                {pt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function KenyaCard({
  item,
  delay,
}: {
  item: { title: string; tag: string; tagColor: string; description: string; detail: string }
  delay: number
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="reveal" style={{ transitionDelay: `${delay}ms`, height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "#131e2e" : "#111B2B",
          border: `1px solid ${hovered ? item.tagColor + "44" : "#1A2E44"}`,
          borderTop: `2px solid ${item.tagColor}`,
          padding: "28px",
          height: "100%",
          transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.25s",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? `0 8px 32px ${item.tagColor}18` : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
          <h3
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#E8F0FE",
              letterSpacing: "-0.01em",
            }}
          >
            {item.title}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
              fontSize: "7px",
              letterSpacing: "0.16em",
              color: item.tagColor,
              background: `${item.tagColor}12`,
              border: `1px solid ${item.tagColor}30`,
              padding: "3px 8px",
              borderRadius: "2px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {item.tag}
          </span>
        </div>
        <p
          style={{
            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
            fontWeight: 300,
            fontSize: "0.8rem",
            color: "#5A7A99",
            lineHeight: "1.8",
            marginBottom: "16px",
          }}
        >
          {item.description}
        </p>
        <div
          style={{
            fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
            fontSize: "0.68rem",
            color: item.tagColor,
            letterSpacing: "0.06em",
            opacity: 0.75,
          }}
        >
          {item.detail}
        </div>
      </div>
    </div>
  )
}

function VerticalCard({
  v,
  delay,
}: {
  v: { title: string; icon: string; points: string[]; color: string }
  delay: number
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="reveal" style={{ transitionDelay: `${delay}ms`, height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "#131e2e" : "#111B2B",
          border: `1px solid ${hovered ? v.color + "44" : "#1A2E44"}`,
          borderTop: `2px solid ${v.color}`,
          padding: "24px 28px",
          height: "100%",
          transition: "background 0.25s, border-color 0.25s, transform 0.25s",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <span style={{ color: v.color, fontSize: "1.1rem" }}>{v.icon}</span>
          <h3
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 700,
              fontSize: "0.92rem",
              color: "#E8F0FE",
              letterSpacing: "-0.01em",
            }}
          >
            {v.title}
          </h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {v.points.map((pt, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontSize: "0.72rem",
                color: "#5A7A99",
                background: "#0D1420",
                border: "1px solid #1A2E44",
                padding: "3px 10px",
                borderRadius: "2px",
              }}
            >
              {pt}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function PricingCard({
  plan,
  delay,
}: {
  plan: {
    tier: string
    price: string
    note: string
    highlight: boolean
    modules: string[]
    users: string
    timeline: string
    includes: string[]
  }
  delay: number
}) {
  const [hovered, setHovered] = useState(false)
  const accent = plan.highlight ? "#00E87A" : "#1A2E44"
  return (
    <div className="reveal" style={{ transitionDelay: `${delay}ms`, height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: plan.highlight ? "#0D1B0F" : hovered ? "#131e2e" : "#111B2B",
          border: `1px solid ${hovered || plan.highlight ? accent + (plan.highlight ? "55" : "44") : "#1A2E44"}`,
          borderTop: `2px solid ${plan.highlight ? "#00E87A" : hovered ? "#00D4FF" : "#1A2E44"}`,
          padding: "32px 28px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s",
          boxShadow: plan.highlight ? "0 0 40px rgba(0,232,122,0.08)" : hovered ? "0 8px 32px rgba(0,212,255,0.08)" : "none",
          position: "relative",
        }}
      >
        {plan.highlight && (
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
              fontSize: "7px",
              letterSpacing: "0.16em",
              color: "#00E87A",
              background: "rgba(0,232,122,0.1)",
              border: "1px solid rgba(0,232,122,0.25)",
              padding: "4px 10px",
              borderRadius: "2px",
              textTransform: "uppercase",
            }}
          >
            Most Popular
          </div>
        )}

        <div
          style={{
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "#E8F0FE",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {plan.tier}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
              fontWeight: 500,
              fontSize: "1.7rem",
              color: plan.highlight ? "#00E87A" : "#E8F0FE",
              letterSpacing: "-0.02em",
            }}
          >
            {plan.price}
          </div>
          <div
            style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontSize: "0.72rem",
              color: "#5A7A99",
              marginTop: "3px",
            }}
          >
            {plan.note}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1A2E44", paddingTop: "16px", marginBottom: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {plan.modules.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <span style={{ color: plan.highlight ? "#00E87A" : "#00D4FF", fontSize: "0.65rem", marginTop: "3px" }}>▸</span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "0.78rem",
                    color: "#B0C4D8",
                  }}
                >
                  {m}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid #1A2E44",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "7px",
                color: "#5A7A99",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              USERS
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontSize: "0.78rem",
                color: "#B0C4D8",
              }}
            >
              {plan.users}
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "7px",
                color: "#5A7A99",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              TIMELINE
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontSize: "0.78rem",
                color: "#B0C4D8",
              }}
            >
              {plan.timeline}
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
          {plan.includes.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <span
                style={{
                  color: plan.highlight ? "#00E87A" : "#5A7A99",
                  fontSize: "0.65rem",
                  flexShrink: 0,
                  marginTop: "3px",
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  color: "#5A7A99",
                  lineHeight: "1.5",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        <Link
          href={plan.price === "Custom" ? "/quote" : "https://calendly.com/omnitechkernelsolutions/30min"}
          target={plan.price === "Custom" ? "_self" : "_blank"}
          rel={plan.price === "Custom" ? "" : "noopener noreferrer"}
          style={{
            display: "block",
            textAlign: "center",
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "12px 20px",
            borderRadius: "2px",
            background: plan.highlight ? "#00E87A" : "transparent",
            color: plan.highlight ? "#060A10" : "#5A7A99",
            border: plan.highlight ? "none" : "1px solid #1A2E44",
            transition: "box-shadow 0.2s, color 0.2s, border-color 0.2s",
          }}
          onMouseOver={(e) => {
            if (plan.highlight) {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,232,122,0.3)"
            } else {
              e.currentTarget.style.color = "#E8F0FE"
              e.currentTarget.style.borderColor = "#5A7A99"
            }
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = "none"
            if (!plan.highlight) {
              e.currentTarget.style.color = "#5A7A99"
              e.currentTarget.style.borderColor = "#1A2E44"
            }
          }}
        >
          {plan.price === "Custom" ? "Request a scope" : "Start this plan"}
        </Link>
      </div>
    </div>
  )
}
