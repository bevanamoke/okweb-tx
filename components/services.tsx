"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const SOLUTIONS = [
  {
    index: "01",
    title: "Odoo ERP\nImplementation",
    subtitle: "Unified Business Infrastructure",
    description:
      "End-to-end Odoo deployment shaped around your actual operational processes — not vendor defaults. From multi-company setups to custom module development.",
    color: "#00E87A",
    borderAccent: "rgba(0,232,122,0.2)",
    glowColor: "rgba(0,232,122,0.15)",
    capabilities: [
      "Full system configuration & process mapping",
      "Data migration and validation",
      "Custom module development",
      "Financial reporting & consolidation",
      "Multi-branch / multi-currency support",
      "User training and documentation",
    ],
    outcomes: [
      { label: "Operational silos", stat: "Eliminated" },
      { label: "Manual data entry", stat: "↓ 80%" },
      { label: "Reporting time",   stat: "↓ 70%" },
      { label: "Deploy timeline",  stat: "< 6 wks" },
    ],
    link: "/odoo",
    cta: "Explore Odoo Services",
  },
  {
    index: "02",
    title: "AI & Workflow\nAutomation",
    subtitle: "Eliminate Repetitive Operations",
    description:
      "We connect your tools and automate the manual work that consumes your team's day — invoice processing, lead routing, reporting, approvals, and more.",
    color: "#00D4FF",
    borderAccent: "rgba(0,212,255,0.2)",
    glowColor: "rgba(0,212,255,0.15)",
    capabilities: [
      "AI-powered document processing",
      "Multi-app integration (Make / n8n / Zapier)",
      "Custom API connectors",
      "Automated reporting pipelines",
      "Lead management & CRM automation",
      "Chatbot & WhatsApp business flows",
    ],
    outcomes: [
      { label: "Staff hours reclaimed", stat: "40–70%" },
      { label: "Human error rate",      stat: "Near 0" },
      { label: "Availability",          stat: "24/7" },
      { label: "Integration depth",     stat: "Full" },
    ],
    link: "/ai-automation",
    cta: "View Automation Services",
  },
  {
    index: "03",
    title: "Web & App\nDevelopment",
    subtitle: "High-Performance Digital Systems",
    description:
      "Modern web applications, portals, and customer-facing platforms built for speed, SEO authority, and conversion — not templates.",
    color: "#F5A623",
    borderAccent: "rgba(245,166,35,0.2)",
    glowColor: "rgba(245,166,35,0.15)",
    capabilities: [
      "Next.js / React web applications",
      "Custom UI/UX — no templates",
      "Odoo website & portal integration",
      "E-commerce & payment systems",
      "Progressive Web Apps (PWA)",
      "Core Web Vitals optimization",
    ],
    outcomes: [
      { label: "Load performance",  stat: "< 1.5s" },
      { label: "Mobile-first",      stat: "Always" },
      { label: "SEO foundation",    stat: "Built-in" },
      { label: "Post-launch care",  stat: "Included" },
    ],
    link: "/web-app-development",
    cta: "See Web Solutions",
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="solutions"
      ref={sectionRef}
      style={{ background: "#0D1420", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, rgba(26,46,68,0.25) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(26,46,68,0.25) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">

        {/* Section label + headline */}
        <div className="mb-16 md:mb-20">
          <div
            className="reveal"
            style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "10px", letterSpacing: "0.2em",
                color: "#00D4FF", textTransform: "uppercase",
              }}
            >
              §02 — CORE SOLUTIONS
            </span>
            <div style={{ flex: 1, height: "1px", background: "#1A2E44", maxWidth: "120px" }} />
          </div>

          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              color: "#E8F0FE",
              maxWidth: "640px",
            }}
          >
            Three Pillars.<br />
            <span style={{ color: "#5A7A99" }}>One Integrated Practice.</span>
          </h2>
        </div>

        {/* Solution cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {SOLUTIONS.map((sol, idx) => (
            <div
              key={sol.index}
              className="reveal"
              style={{
                border: "1px solid #1A2E44",
                background: "#111B2B",
                borderRadius: "4px",
                overflow: "hidden",
                transitionDelay: `${idx * 100}ms`,
                transition: "border-color 0.3s, box-shadow 0.3s, background 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = sol.borderAccent
                e.currentTarget.style.boxShadow = `0 0 40px ${sol.glowColor}`
                e.currentTarget.style.background = "#131e2e"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#1A2E44"
                e.currentTarget.style.boxShadow = "none"
                e.currentTarget.style.background = "#111B2B"
              }}
            >
              {/* Top bar with index + title */}
              <div
                style={{
                  borderBottom: "1px solid #1A2E44",
                  padding: "0",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                }}
              >
                {/* Index */}
                <div
                  style={{
                    padding: "20px 24px",
                    borderRight: "1px solid #1A2E44",
                    display: "flex", alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontSize: "1.5rem", fontWeight: 500,
                      color: sol.color, opacity: 0.5,
                    }}
                  >
                    {sol.index}
                  </span>
                </div>

                {/* Title block */}
                <div style={{ padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                        fontWeight: 700,
                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                        color: "#E8F0FE",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {sol.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontSize: "9px", letterSpacing: "0.12em",
                        color: sol.color, textTransform: "uppercase",
                        marginTop: "4px",
                      }}
                    >
                      {sol.subtitle}
                    </p>
                  </div>

                  <Link
                    href={sol.link}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700, fontSize: "0.75rem",
                      color: sol.color, letterSpacing: "0.04em",
                      textTransform: "uppercase", textDecoration: "none",
                      transition: "gap 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.gap = "14px")}
                    onMouseOut={(e) => (e.currentTarget.style.gap = "8px")}
                  >
                    {sol.cta}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Body: description + capabilities + outcomes */}
              <div className="grid md:grid-cols-[1fr_1fr_auto] gap-0">
                {/* Description */}
                <div style={{ padding: "24px", borderRight: "1px solid #1A2E44" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 300, fontSize: "0.9rem", lineHeight: "1.8",
                      color: "#5A7A99",
                    }}
                  >
                    {sol.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div style={{ padding: "24px", borderRight: "1px solid #1A2E44" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontSize: "8px", letterSpacing: "0.15em",
                      color: "#5A7A99", textTransform: "uppercase",
                      marginBottom: "14px",
                    }}
                  >
                    CAPABILITIES
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {sol.capabilities.map((cap, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span style={{ color: sol.color, fontSize: "0.7rem", marginTop: "1px", flexShrink: 0 }}>▸</span>
                        <span
                          style={{
                            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                            fontSize: "0.82rem", color: "#E8F0FE", lineHeight: "1.5",
                          }}
                        >
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div style={{ padding: "24px", minWidth: "180px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontSize: "8px", letterSpacing: "0.15em",
                      color: "#5A7A99", textTransform: "uppercase",
                      marginBottom: "14px",
                    }}
                  >
                    OUTCOMES
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {sol.outcomes.map((o, i) => (
                      <div key={i}>
                        <div
                          style={{
                            fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                            fontWeight: 500, fontSize: "1rem",
                            color: sol.color, lineHeight: 1,
                          }}
                        >
                          {o.stat}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                            fontSize: "0.72rem", color: "#5A7A99",
                            marginTop: "2px",
                          }}
                        >
                          {o.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
