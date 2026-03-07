"use client"

import { useEffect, useRef } from "react"

const DIFFERENTIATORS = [
  {
    num: "A",
    title: "Industry-Specific Depth",
    body: "We focus on education, hospitality, professional services, and retail — not every industry on earth. Depth over breadth delivers faster implementations and fewer surprises.",
    color: "#00E87A",
  },
  {
    num: "B",
    title: "Process-First, Software-Second",
    body: "Before any configuration happens, we document and challenge your current workflows. We eliminate the process debt before it gets embedded in software.",
    color: "#00D4FF",
  },
  {
    num: "C",
    title: "Local Presence, Global Standards",
    body: "Our team is Nairobi-based with direct, in-person access. We implement to the same standards as top-tier global partners — without the offshore delivery lag.",
    color: "#F5A623",
  },
  {
    num: "D",
    title: "Clean UI for Non-Technical Users",
    body: "We configure interfaces your staff can actually use. Adoption is the metric that matters — not feature count.",
    color: "#00E87A",
  },
  {
    num: "E",
    title: "Clear Documentation",
    body: "Every deployment ships with full technical and user documentation. You own the knowledge, not just the software.",
    color: "#00D4FF",
  },
  {
    num: "F",
    title: "Ongoing Optimization",
    body: "Post-launch support isn't an upsell — it's standard. We monitor, tune, and evolve your system as your business scales.",
    color: "#F5A623",
  },
]

const COMPARE = [
  { aspect: "Process Analysis",        oks: true,  generic: false },
  { aspect: "Industry-Specific Config", oks: true,  generic: false },
  { aspect: "Custom Module Dev",        oks: true,  generic: "Optional (extra cost)" },
  { aspect: "Staff Training",          oks: true,  generic: false },
  { aspect: "Post-Launch Support",     oks: true,  generic: false },
  { aspect: "Local Team",              oks: true,  generic: false },
  { aspect: "Fixed-Scope Pricing",     oks: true,  generic: false },
]

export default function WhyChooseOKS() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: "#060A10", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}
    >
      {/* Accent glow */}
      <div
        aria-hidden
        style={{
          position: "absolute", bottom: 0, left: "20%",
          width: "600px", height: "400px",
          background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">

        {/* Section label */}
        <div
          className="reveal"
          style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "48px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
              fontSize: "10px", letterSpacing: "0.2em",
              color: "#F5A623", textTransform: "uppercase",
            }}
          >
            §03 — WHY OKS
          </span>
          <div style={{ flex: 1, height: "1px", background: "#1A2E44", maxWidth: "120px" }} />
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              lineHeight: "1.08",
              letterSpacing: "-0.03em",
              color: "#E8F0FE",
            }}
          >
            Specialisation<br />
            <span style={{ color: "#5A7A99" }}>beats generalisation.</span>
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontWeight: 300, fontSize: "1.05rem", lineHeight: "1.8",
              color: "#5A7A99",
              alignSelf: "end",
            }}
          >
            The Kenyan market is full of generalist IT vendors who will install anything for anyone. We deliberately narrowed our focus so we could deliver deeper expertise, faster deployments, and measurably better outcomes.
          </p>
        </div>

        {/* Two columns: differentiators + comparison table */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">

          {/* Differentiator grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "2px",
            }}
          >
            {DIFFERENTIATORS.map((d, i) => (
              <div
                key={d.num}
                className="reveal"
                style={{
                  border: "1px solid #1A2E44",
                  background: "#111B2B",
                  borderRadius: "4px",
                  padding: "20px",
                  transitionDelay: `${i * 60}ms`,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = d.color + "44"
                  e.currentTarget.style.background = "#131e2e"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#1A2E44"
                  e.currentTarget.style.background = "#111B2B"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontSize: "9px", color: d.color,
                      letterSpacing: "0.1em",
                      border: `1px solid ${d.color}33`,
                      padding: "2px 7px", borderRadius: "2px",
                    }}
                  >
                    {d.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700, fontSize: "0.9rem",
                      color: "#E8F0FE",
                    }}
                  >
                    {d.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontWeight: 300, fontSize: "0.82rem",
                    color: "#5A7A99", lineHeight: "1.7",
                  }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div
            className="reveal"
            style={{
              border: "1px solid #1A2E44",
              background: "#0D1420",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {/* Table header */}
            <div
              className="oks-compare-row"
              style={{
                display: "grid", gridTemplateColumns: "1fr 80px 80px",
                borderBottom: "1px solid #1A2E44",
                padding: "12px 20px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "8px", letterSpacing: "0.12em",
                  color: "#5A7A99", textTransform: "uppercase",
                }}
              >
                Feature
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "8px", letterSpacing: "0.12em",
                  color: "#00E87A", textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                OKS
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "8px", letterSpacing: "0.12em",
                  color: "#5A7A99", textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Others
              </span>
            </div>

            {COMPARE.map((row, i) => (
              <div
                key={i}
                className="oks-compare-row"
                style={{
                  display: "grid", gridTemplateColumns: "1fr 80px 80px",
                  padding: "12px 20px",
                  borderBottom: i < COMPARE.length - 1 ? "1px solid #1A2E44" : "none",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "0.82rem", color: "#E8F0FE",
                  }}
                >
                  {row.aspect}
                </span>
                <div style={{ textAlign: "center" }}>
                  {row.oks ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ margin: "0 auto" }}>
                      <path d="M2 7L5.5 10.5L12 3.5" stroke="#00E87A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <span style={{ color: "#F5A623", fontSize: "0.7rem" }}>—</span>
                  )}
                </div>
                <div style={{ textAlign: "center" }}>
                  {row.generic === false ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ margin: "0 auto" }}>
                      <path d="M2 2L10 10M2 10L10 2" stroke="#1A2E44" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontSize: "7px", color: "#5A7A99", letterSpacing: "0.05em",
                      }}
                    >
                      {row.generic}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Footer quote */}
            <div
              style={{
                padding: "16px 20px",
                borderTop: "1px solid #1A2E44",
                background: "rgba(0,232,122,0.03)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "9px", letterSpacing: "0.1em",
                  color: "#00E87A", textTransform: "uppercase",
                }}
              >
                "We speak business and systems fluently."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
