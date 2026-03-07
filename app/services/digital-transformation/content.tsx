"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: "87%",    desc: "of digital transformation projects fail without a clear strategy",     color: "#F5A623" },
  { value: "3×",     desc: "faster growth for digitally mature SMEs (McKinsey, 2023)",              color: "#00E87A" },
  { value: "KES 0",  desc: "cost of your first discovery session with OKS",                         color: "#00D4FF" },
]

const PAIN_POINTS = [
  "We have data everywhere but no single source of truth.",
  "Our teams work in silos and nothing integrates.",
  "We can't scale because our processes don't scale.",
]

const STEPS = [
  {
    num: "01",
    phase: "DISCOVERY & AUDIT",
    duration: "2–4 weeks",
    title: "Map Before You Move",
    body: "We map every process, interview stakeholders across departments, audit your existing technology stack, and identify exactly where value is being lost. No assumptions. No templates applied blindly.",
    deliverable: "Process Map + Gap Analysis Report",
  },
  {
    num: "02",
    phase: "DIGITAL ROADMAP",
    duration: "1–2 weeks",
    title: "A Plan Sequenced by Impact",
    body: "A prioritized, phased plan for your transformation — sequenced by business impact and implementation complexity. We tell you what to do first, what to do later, and what to stop doing entirely.",
    deliverable: "3-Year Digital Roadmap Document",
  },
  {
    num: "03",
    phase: "TECHNOLOGY SELECTION",
    duration: "1 week",
    title: "Right Tools, Not Popular Tools",
    body: "We recommend tools for your specific context — not the most popular ones, not the ones we make the most margin on. We're vendor-agnostic at the advisory layer.",
    deliverable: "Technology Stack Recommendation",
  },
  {
    num: "04",
    phase: "CHANGE MANAGEMENT",
    duration: "Ongoing",
    title: "Technology Fails Without People",
    body: "We design your internal communication plan, training strategy, and executive alignment sessions to ensure the change lands. Adoption is the metric that matters.",
    deliverable: "Change Management Playbook",
  },
  {
    num: "05",
    phase: "IMPLEMENTATION OVERSIGHT",
    duration: "Varies",
    title: "Strategic or Hands-On",
    body: "We either implement directly (especially for Odoo) or serve as the strategic oversight layer if you have an internal IT team. Either way, the roadmap stays on track.",
    deliverable: "Project Governance Framework",
  },
  {
    num: "06",
    phase: "MEASURE & OPTIMIZE",
    duration: "Quarterly",
    title: "Transformation Is Not a Project",
    body: "We establish KPIs, run quarterly reviews, and continuously evolve your digital strategy as your business grows. Transformation is an ongoing posture, not a one-time event.",
    deliverable: "Quarterly Digital Health Report",
  },
]

const DELIVERABLES = [
  {
    title: "Process Documentation",
    desc: "Full as-is and to-be process maps for every department we audit.",
    color: "#00D4FF",
  },
  {
    title: "Digital Roadmap",
    desc: "A board-ready, phased transformation plan with timeline, budget ranges, and expected ROI.",
    color: "#00D4FF",
  },
  {
    title: "Technology Blueprint",
    desc: "Recommended stack with justification, integration requirements, and vendor shortlists.",
    color: "#00D4FF",
  },
  {
    title: "Change Management Plan",
    desc: "Training schedules, communication templates, adoption metrics, and executive briefing decks.",
    color: "#00D4FF",
  },
  {
    title: "KPI Dashboard Setup",
    desc: "A live dashboard (Power BI or Odoo) tracking your 10 most critical business metrics from day one.",
    color: "#00D4FF",
  },
  {
    title: "Ongoing Advisory Access",
    desc: "Monthly check-in calls with your assigned OKS consultant for the first 6 months post-engagement.",
    color: "#00D4FF",
  },
]

const WHO_FOR = [
  "You're scaling from 20 to 200 staff and your systems haven't kept up",
  "You're losing deals because competitors operate faster",
  "Your leadership team makes decisions without reliable data",
  "You've tried implementing software before and it failed",
  "You're preparing for a funding round and need operational maturity",
  "You're entering a new market or launching a new business unit",
]

const INDUSTRIES = [
  "Manufacturing & FMCG",
  "Retail & Wholesale Distribution",
  "NGOs & Development Organizations",
  "Logistics & Supply Chain",
  "Financial Services & SACCOs",
  "Healthcare & Education",
]

const PRICING = [
  {
    tier: "STARTER",
    name: "Digital Audit",
    price: "KES 150,000 – 350,000",
    best: "SMEs needing clarity before committing",
    highlight: false,
    items: [
      "2-week discovery process",
      "Process mapping (up to 3 departments)",
      "Gap analysis report",
      "Technology recommendation brief",
      "1 executive presentation",
    ],
    cta: "Start Here",
    color: "#5A7A99",
  },
  {
    tier: "GROWTH",
    name: "Full Transformation Roadmap",
    price: "KES 500,000 – 1.2M",
    best: "Businesses ready to commit to transformation",
    highlight: true,
    items: [
      "Everything in Starter",
      "4-week discovery (up to 6 departments)",
      "Full 3-year digital roadmap",
      "Technology stack blueprint",
      "Change management plan",
      "3 executive workshops",
      "3 months advisory access",
    ],
    cta: "Most Popular",
    color: "#00D4FF",
  },
  {
    tier: "ENTERPRISE",
    name: "Managed Transformation",
    price: "Custom Engagement",
    best: "Large organizations with complex needs",
    highlight: false,
    items: [
      "Everything in Growth",
      "Full organization audit",
      "Board-level advisory sessions",
      "Implementation oversight",
      "Dedicated OKS consultant",
      "12 months ongoing support",
      "Quarterly digital health reviews",
    ],
    cta: "Talk to Us",
    color: "#00E87A",
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ text, color = "#00D4FF" }: { text: string; color?: string }) {
  return (
    <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
      <span
        style={{
          fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
          fontSize: "10px", letterSpacing: "0.2em",
          color, textTransform: "uppercase",
        }}
      >
        {text}
      </span>
      <div style={{ flex: 1, height: "1px", background: "#1A2E44", maxWidth: "120px" }} />
    </div>
  )
}

function DeliverableBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
        fontSize: "8px", letterSpacing: "0.12em",
        color: "#00E87A", textTransform: "uppercase",
        background: "rgba(0,232,122,0.08)",
        border: "1px solid rgba(0,232,122,0.28)",
        padding: "4px 12px", borderRadius: "2px",
      }}
    >
      ↳ {label}
    </span>
  )
}

function DeliverableCard({ item, delay }: { item: typeof DELIVERABLES[0]; delay: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          border: `1px solid ${hovered ? item.color + "55" : "#1A2E44"}`,
          borderTop: `2px solid ${item.color}`,
          background: hovered ? "#131e2e" : "#111B2B",
          borderRadius: "4px", padding: "24px",
          height: "100%", minHeight: "160px",
          transition: "border-color 0.25s, background 0.25s, box-shadow 0.25s, transform 0.25s",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: hovered ? `0 6px 28px ${item.color}20` : "none",
        }}
      >
        <h4
          style={{
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700, fontSize: "0.975rem",
            color: "#E8F0FE", marginBottom: "10px",
          }}
        >
          {item.title}
        </h4>
        <p
          style={{
            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
            fontWeight: 300, fontSize: "0.83rem",
            color: "#5A7A99", lineHeight: "1.75",
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  )
}

function PricingCard({ plan, delay }: { plan: typeof PRICING[0]; delay: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "relative",
          border: `1px solid ${plan.highlight ? plan.color + "55" : (hovered ? plan.color + "44" : "#1A2E44")}`,
          borderTop: `2px solid ${plan.color}`,
          background: plan.highlight ? "#0f1d2e" : (hovered ? "#131e2e" : "#111B2B"),
          borderRadius: "4px", padding: "28px",
          height: "100%", display: "flex", flexDirection: "column",
          transition: "border-color 0.25s, background 0.25s, box-shadow 0.25s",
          boxShadow: plan.highlight ? `0 0 40px ${plan.color}18` : (hovered ? `0 6px 28px ${plan.color}16` : "none"),
        }}
      >
        {/* Tier badge */}
        <div style={{ marginBottom: "20px" }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
              fontSize: "8px", letterSpacing: "0.16em",
              color: plan.color, textTransform: "uppercase",
              background: `${plan.color}12`,
              border: `1px solid ${plan.color}30`,
              padding: "3px 10px", borderRadius: "2px",
            }}
          >
            {plan.tier}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700, fontSize: "1.1rem",
            color: "#E8F0FE", marginBottom: "8px",
          }}
        >
          {plan.name}
        </h3>

        <div
          style={{
            fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
            fontSize: "1.1rem", color: plan.color,
            marginBottom: "8px", fontWeight: 500,
          }}
        >
          {plan.price}
        </div>

        <p
          style={{
            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
            fontSize: "0.78rem", color: "#5A7A99",
            marginBottom: "20px", fontStyle: "italic",
          }}
        >
          Best for: {plan.best}
        </p>

        <div style={{ borderTop: "1px solid #1A2E44", paddingTop: "16px", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "24px" }}>
            {plan.items.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: plan.color, fontSize: "0.7rem", marginTop: "2px", flexShrink: 0 }}>—</span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "0.82rem", color: "#E8F0FE", lineHeight: "1.5",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="https://calendly.com/omnitechkernelsolutions/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block", textAlign: "center",
            padding: "11px 20px",
            background: plan.highlight ? plan.color : "transparent",
            border: `1px solid ${plan.color}`,
            color: plan.highlight ? "#060A10" : plan.color,
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700, fontSize: "0.8rem",
            letterSpacing: "0.05em", textTransform: "uppercase",
            borderRadius: "2px", textDecoration: "none",
            transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            if (!plan.highlight) {
              e.currentTarget.style.background = plan.color
              e.currentTarget.style.color = "#060A10"
            }
            e.currentTarget.style.boxShadow = `0 0 24px ${plan.color}30`
          }}
          onMouseOut={(e) => {
            if (!plan.highlight) {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.color = plan.color
            }
            e.currentTarget.style.boxShadow = "none"
          }}
        >
          {plan.cta}
        </Link>
      </div>
    </div>
  )
}

// ─── Main export ───────────────────────────────────────────────────────────────

export default function DigitalTransformationContent() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    )
    pageRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={pageRef}>

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#060A10",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "88px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated mesh */}
        <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute", width: "700px", height: "700px",
              top: "-10%", right: "5%",
              background: "radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 65%)",
              animation: "mesh-a 20s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute", width: "500px", height: "500px",
              bottom: "5%", left: "5%",
              background: "radial-gradient(circle, rgba(0,232,122,0.06) 0%, transparent 65%)",
              animation: "mesh-b 26s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute", inset: 0,
              backgroundImage:
                "linear-gradient(to right, rgba(26,46,68,0.35) 1px, transparent 1px)," +
                "linear-gradient(to bottom, rgba(26,46,68,0.35) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto px-6 lg:px-12 py-16 w-full max-w-7xl">
          {/* Breadcrumb */}
          <div className="reveal" style={{ marginBottom: "40px" }}>
            <Link
              href="/#solutions"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "9px", letterSpacing: "0.15em",
                color: "#5A7A99", textDecoration: "none",
                textTransform: "uppercase", transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#E8F0FE")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#5A7A99")}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M9.5 6H2.5M2.5 6L5.5 3M2.5 6L5.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              OKS / Services / Digital Transformation
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-12 xl:gap-20 items-center">
            {/* Left: headline + CTA */}
            <div>
              {/* Category pill */}
              <div
                className="reveal"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  border: "1px solid #1A2E44", borderRadius: "2px",
                  padding: "6px 14px", background: "rgba(13,20,32,0.7)",
                  marginBottom: "32px",
                }}
              >
                <span
                  style={{
                    width: "7px", height: "7px", borderRadius: "50%",
                    background: "#00D4FF", boxShadow: "0 0 8px #00D4FF",
                    display: "block", animation: "glow-pulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "10px", letterSpacing: "0.16em",
                    color: "#5A7A99", textTransform: "uppercase",
                  }}
                >
                  CONSULTANCY SERVICE
                </span>
              </div>

              <h1
                className="reveal"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.035em",
                  color: "#E8F0FE",
                  marginBottom: "24px",
                }}
              >
                The Gap Between<br />
                Where You Are and<br />
                <span
                  style={{
                    background: "linear-gradient(130deg, #00D4FF 0%, #00E87A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Where You Should Be
                </span>
                <br />Is a Strategy Problem.
              </h1>

              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300, fontSize: "1.05rem", lineHeight: "1.85",
                  color: "#5A7A99", maxWidth: "520px", marginBottom: "36px",
                }}
              >
                Most Kenyan businesses have the ambition. What they lack is a clear, executable digital roadmap — and a partner who understands both the technology and the local market reality. That&apos;s exactly what OKS delivers.
              </p>

              <div className="reveal">
                <Link
                  href="https://calendly.com/omnitechkernelsolutions/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    padding: "14px 30px",
                    background: "#00D4FF", color: "#060A10",
                    fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                    fontWeight: 700, fontSize: "0.875rem",
                    letterSpacing: "0.04em", textTransform: "uppercase",
                    borderRadius: "8px", textDecoration: "none",
                    transition: "box-shadow 0.25s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0 36px rgba(0,212,255,0.45)")}
                  onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  Book a Free Discovery Call
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: stat panel */}
            <div
              className="reveal"
              style={{
                border: "1px solid #1A2E44",
                background: "#0D1420",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  borderBottom: "1px solid #1A2E44", padding: "11px 20px",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "9px", letterSpacing: "0.14em",
                    color: "#5A7A99", textTransform: "uppercase",
                  }}
                >
                  MARKET_CONTEXT
                </span>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1A2E44", display: "block" }} />
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1A2E44", display: "block" }} />
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#00D4FF", boxShadow: "0 0 5px #00D4FF", display: "block", animation: "glow-pulse 2s ease-in-out infinite" }} />
                </div>
              </div>

              {HERO_STATS.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px",
                    borderBottom: i < HERO_STATS.length - 1 ? "1px solid #1A2E44" : "none",
                    display: "flex", gap: "16px", alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontWeight: 500, fontSize: "1.75rem",
                      color: stat.color, lineHeight: 1,
                      flexShrink: 0, minWidth: "72px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 300, fontSize: "0.8rem",
                      color: "#5A7A99", lineHeight: "1.65",
                    }}
                  >
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — THE PROBLEM
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0D1420", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}>
        {/* Rotated vertical label */}
        <div
          className="hidden lg:block"
          aria-hidden
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: "40px", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}
        >
          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
              fontSize: "8px", letterSpacing: "0.3em",
              color: "#1A2E44", textTransform: "uppercase",
              userSelect: "none", whiteSpace: "nowrap",
            }}
          >
            THE PROBLEM
          </span>
        </div>

        <div className="mx-auto px-6 lg:px-16 py-20 md:py-28 max-w-7xl">
          <SectionLabel text="§01 — THE PROBLEM" color="#F5A623" />

          <div className="grid lg:grid-cols-[1fr_380px] gap-12 xl:gap-20 items-start">
            {/* Left: text */}
            <div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  lineHeight: "1.08",
                  letterSpacing: "-0.03em",
                  color: "#E8F0FE",
                  marginBottom: "28px",
                }}
              >
                It&apos;s Not About<br />
                <span style={{ color: "#5A7A99" }}>Buying Software.</span>
              </h2>

              <div className="reveal">
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontWeight: 300, fontSize: "1rem", lineHeight: "1.85",
                    color: "#5A7A99", marginBottom: "20px",
                  }}
                >
                  Digital transformation is the process of fundamentally rethinking how your organization uses technology, people, and processes to deliver value. For most businesses, it starts with a hard truth: your current systems were built for a version of your company that no longer exists.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontWeight: 300, fontSize: "1rem", lineHeight: "1.85",
                    color: "#5A7A99",
                  }}
                >
                  Manual spreadsheets. Disconnected departments. No real-time visibility. Decisions made on gut feel instead of data. These aren&apos;t just inefficiencies — they&apos;re competitive liabilities.
                </p>
              </div>
            </div>

            {/* Right: pain point cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {PAIN_POINTS.map((point, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{
                    background: "#111B2B",
                    border: "1px solid #1A2E44",
                    borderLeft: "3px solid #F5A623",
                    borderRadius: "4px",
                    padding: "20px 24px",
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 300, fontSize: "0.92rem",
                      color: "#5A7A99", lineHeight: "1.7",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{point}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — METHOD (Vertical Timeline)
      ══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#060A10", borderTop: "1px solid #1A2E44",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage:
              "linear-gradient(to right, rgba(26,46,68,0.2) 1px, transparent 1px)," +
              "linear-gradient(to bottom, rgba(26,46,68,0.2) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <SectionLabel text="§02 — OUR METHOD" color="#00D4FF" />

          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              lineHeight: "1.08",
              letterSpacing: "-0.03em",
              color: "#E8F0FE",
              marginBottom: "56px",
              maxWidth: "520px",
            }}
          >
            A Structured Path<br />
            <span style={{ color: "#5A7A99" }}>From Chaos to Clarity.</span>
          </h2>

          {/* Timeline */}
          <div className="grid lg:grid-cols-[480px_1fr] gap-8 items-start">
            {/* Left: steps */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {STEPS.map((step, i) => {
                const isLast = i === STEPS.length - 1
                return (
                  <div
                    key={step.num}
                    className="reveal"
                    style={{ display: "flex", gap: "20px", transitionDelay: `${i * 80}ms` }}
                  >
                    {/* Number + connecting line */}
                    <div
                      style={{
                        display: "flex", flexDirection: "column",
                        alignItems: "center", flexShrink: 0, width: "40px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px", height: "40px",
                          border: "1px solid #00D4FF",
                          background: "rgba(0,212,255,0.07)",
                          borderRadius: "2px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                            fontSize: "10px", color: "#00D4FF", fontWeight: 500,
                          }}
                        >
                          {step.num}
                        </span>
                      </div>
                      {!isLast && (
                        <div
                          style={{
                            flex: 1, width: "1px", minHeight: "32px",
                            background: "linear-gradient(to bottom, rgba(0,212,255,0.4), rgba(0,212,255,0.1))",
                            margin: "4px 0",
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, paddingBottom: isLast ? "0" : "28px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "8px" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                            fontSize: "8px", letterSpacing: "0.15em",
                            color: "#00D4FF", textTransform: "uppercase",
                          }}
                        >
                          {step.phase}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                            fontSize: "8px", color: "#5A7A99",
                          }}
                        >
                          {step.duration}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                          fontWeight: 700, fontSize: "1rem",
                          color: "#E8F0FE", marginBottom: "8px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                          fontWeight: 300, fontSize: "0.85rem",
                          color: "#5A7A99", lineHeight: "1.75",
                          marginBottom: "12px",
                        }}
                      >
                        {step.body}
                      </p>
                      <DeliverableBadge label={step.deliverable} />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right: sticky context panel */}
            <div
              className="hidden lg:block reveal"
              style={{
                position: "sticky", top: "100px",
                border: "1px solid #1A2E44",
                background: "#0D1420",
                borderRadius: "4px", padding: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "8px", letterSpacing: "0.15em",
                  color: "#5A7A99", textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                WHY THIS ORDER MATTERS
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300, fontSize: "0.88rem",
                  color: "#5A7A99", lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                Most implementations fail because they skip steps 01–03. Software gets installed before anyone has mapped the process it&apos;s supposed to improve.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300, fontSize: "0.88rem",
                  color: "#5A7A99", lineHeight: "1.8",
                  marginBottom: "24px",
                }}
              >
                Our sequencing is deliberate. Each deliverable feeds the next. By the time we write a line of code, your entire operational picture is already documented and agreed.
              </p>
              <div style={{ borderTop: "1px solid #1A2E44", paddingTop: "20px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontWeight: 500, fontSize: "1.5rem",
                    color: "#00D4FF", marginBottom: "4px",
                  }}
                >
                  6 stages
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "0.75rem", color: "#5A7A99",
                    textTransform: "uppercase", letterSpacing: "0.08em",
                  }}
                >
                  Structured methodology
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — DELIVERABLES
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0D1420", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <SectionLabel text="§03 — DELIVERABLES" color="#00E87A" />

          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              lineHeight: "1.08",
              letterSpacing: "-0.03em",
              color: "#E8F0FE",
              marginBottom: "48px",
            }}
          >
            Tangible Outputs.<br />
            <span style={{ color: "#5A7A99" }}>Not Just Advice.</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2px",
            }}
          >
            {DELIVERABLES.map((item, i) => (
              <DeliverableCard key={item.title} item={item} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — WHO THIS IS FOR
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#060A10", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute", top: "20%", right: 0,
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="relative z-10 mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <SectionLabel text="§04 — IDEAL CLIENTS" color="#00D4FF" />

          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              lineHeight: "1.08",
              letterSpacing: "-0.03em",
              color: "#E8F0FE",
              marginBottom: "48px",
            }}
          >
            Built for Businesses<br />
            <span style={{ color: "#5A7A99" }}>at an Inflection Point.</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: qualifying criteria */}
            <div
              style={{
                border: "1px solid #1A2E44",
                background: "#111B2B",
                borderRadius: "4px", padding: "32px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "8px", letterSpacing: "0.15em",
                  color: "#00D4FF", textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                THIS IS FOR YOU IF...
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {WHO_FOR.map((item, i) => (
                  <div
                    key={i}
                    className="reveal"
                    style={{
                      display: "flex", gap: "14px", alignItems: "flex-start",
                      transitionDelay: `${i * 70}ms`,
                    }}
                  >
                    <span
                      style={{
                        color: "#00D4FF", fontSize: "0.9rem",
                        flexShrink: 0, lineHeight: "1.5",
                      }}
                    >
                      ✦
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                        fontWeight: 300, fontSize: "0.9rem",
                        color: "#E8F0FE", lineHeight: "1.6",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: industries */}
            <div
              style={{
                border: "1px solid #1A2E44",
                background: "#111B2B",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "20px 24px", borderBottom: "1px solid #1A2E44" }}>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "8px", letterSpacing: "0.15em",
                    color: "#5A7A99", textTransform: "uppercase",
                  }}
                >
                  INDUSTRIES WE&apos;VE TRANSFORMED
                </p>
              </div>
              {INDUSTRIES.map((industry, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{
                    padding: "18px 24px",
                    borderBottom: i < INDUSTRIES.length - 1 ? "1px solid #1A2E44" : "none",
                    display: "flex", alignItems: "center", gap: "16px",
                    transitionDelay: `${i * 60}ms`,
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "rgba(0,212,255,0.03)")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <div
                    style={{
                      width: "3px", height: "20px",
                      background: "#00D4FF",
                      borderRadius: "2px", flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 400, fontSize: "0.9rem",
                      color: "#E8F0FE",
                    }}
                  >
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — PRICING
      ══════════════════════════════════════════════════════════════ */}
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
          <SectionLabel text="§05 — PRICING APPROACH" color="#F5A623" />

          <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
                color: "#E8F0FE",
              }}
            >
              Flexible Engagements<br />
              <span style={{ color: "#5A7A99" }}>for Every Stage.</span>
            </h2>
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 300, fontSize: "1rem", lineHeight: "1.8",
                color: "#5A7A99",
              }}
            >
              All engagements are fixed-scope with transparent pricing. No hourly billing surprises. We charge for outcomes, not time.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2px",
              alignItems: "stretch",
            }}
          >
            {PRICING.map((plan, i) => (
              <PricingCard key={plan.tier} plan={plan} delay={i * 100} />
            ))}
          </div>

          <div
            className="reveal"
            style={{
              marginTop: "24px", padding: "16px 24px",
              border: "1px solid #1A2E44", borderRadius: "4px",
              display: "flex", alignItems: "center", gap: "12px",
              background: "rgba(245,166,35,0.03)",
            }}
          >
            <span style={{ color: "#F5A623", fontSize: "0.85rem", flexShrink: 0 }}>✦</span>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 300, fontSize: "0.85rem",
                color: "#5A7A99", lineHeight: "1.6",
              }}
            >
              All engagements begin with a <strong style={{ color: "#E8F0FE", fontWeight: 400 }}>free 30-minute discovery call</strong> to confirm fit and scope before any commitment is made.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#060A10", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2
                className="reveal"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                  color: "#E8F0FE",
                  marginBottom: "12px",
                }}
              >
                Your transformation starts<br />
                with a conversation.
              </h2>
              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300, fontSize: "1rem",
                  color: "#5A7A99",
                }}
              >
                No pressure, no templates. Just an honest conversation about where your business is and where it needs to go.
              </p>
            </div>
            <div className="reveal" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                href="https://calendly.com/omnitechkernelsolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "14px 28px",
                  background: "#00D4FF", color: "#060A10",
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 700, fontSize: "0.875rem",
                  letterSpacing: "0.04em", textTransform: "uppercase",
                  borderRadius: "8px", textDecoration: "none",
                  transition: "box-shadow 0.25s", whiteSpace: "nowrap",
                }}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0 36px rgba(0,212,255,0.4)")}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                Book Discovery Call
              </Link>
              <Link
                href="/quote"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "13px 24px",
                  border: "1px solid #1A2E44", color: "#E8F0FE",
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 400, fontSize: "0.9rem",
                  borderRadius: "2px", textDecoration: "none",
                  transition: "border-color 0.2s", whiteSpace: "nowrap",
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = "#00D4FF")}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = "#1A2E44")}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
