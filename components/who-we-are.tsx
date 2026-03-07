"use client"

import { useEffect, useRef } from "react"

const PILLARS = [
  {
    num: "01",
    label: "Diagnose First",
    body: "We map your workflows before touching a single config. Most ERP failures are process failures, not software failures.",
    color: "#00E87A",
  },
  {
    num: "02",
    label: "Configure to Fit",
    body: "No vendor defaults. Every module, view, and workflow is shaped around how your team actually operates.",
    color: "#00D4FF",
  },
  {
    num: "03",
    label: "Train & Transfer",
    body: "We don't leave until your staff can run the system without us. Documentation, training, and 90-day support are standard.",
    color: "#F5A623",
  },
]

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    )
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: "#060A10", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle accent glow */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: 0, right: "10%",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(0,232,122,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">

        {/* Section label */}
        <div
          className="reveal"
          style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "48px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
              fontSize: "10px", letterSpacing: "0.2em",
              color: "#00E87A", textTransform: "uppercase",
            }}
          >
            §01 — WHAT WE DO
          </span>
          <div style={{ flex: 1, height: "1px", background: "#1A2E44", maxWidth: "120px" }} />
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 xl:gap-24 items-start">

          {/* Left: headline + body */}
          <div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
                color: "#E8F0FE",
                marginBottom: "24px",
              }}
            >
              ERP as Infrastructure,<br />
              <span style={{ color: "#5A7A99" }}>Not as Software.</span>
            </h2>

            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 300, fontSize: "1.05rem", lineHeight: "1.85",
                color: "#5A7A99", maxWidth: "480px", marginBottom: "40px",
              }}
            >
              Most ERP projects fail because they are sold as software installs. We treat Odoo the way an architect treats concrete — as raw infrastructure that must be shaped to the specific load it will carry.
            </p>

            {/* Checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { text: "Operational workflow analysis before any configuration", accent: "#00E87A" },
                { text: "Odoo modules mapped to real-world business processes",  accent: "#00D4FF" },
                { text: "Data migration, cleaning, and validation",               accent: "#00E87A" },
                { text: "Staff onboarding and 90-day post-launch support",       accent: "#F5A623" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{
                    display: "flex", alignItems: "flex-start", gap: "14px",
                    padding: "14px 0",
                    borderBottom: "1px solid #1A2E44",
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                    <path d="M2 8L6 12L14 4" stroke={item.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 400, fontSize: "0.9rem",
                      color: "#E8F0FE", lineHeight: "1.5",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: philosophy pillars */}
          <div
            className="reveal"
            style={{
              border: "1px solid #1A2E44",
              background: "#0D1420",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "14px 24px",
                borderBottom: "1px solid #1A2E44",
                display: "flex", alignItems: "center", gap: "10px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "9px", letterSpacing: "0.14em",
                  color: "#5A7A99", textTransform: "uppercase",
                }}
              >
                OKS_METHODOLOGY
              </span>
            </div>

            {/* Pillars */}
            {PILLARS.map((p, i) => (
              <div
                key={p.num}
                style={{
                  padding: "24px",
                  borderBottom: i < PILLARS.length - 1 ? "1px solid #1A2E44" : "none",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.015)")}
                onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "10px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontSize: "9px", color: p.color, letterSpacing: "0.1em",
                    }}
                  >
                    {p.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700, fontSize: "1rem",
                      color: "#E8F0FE", letterSpacing: "-0.01em",
                    }}
                  >
                    {p.label}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontWeight: 300, fontSize: "0.85rem", lineHeight: "1.7",
                    color: "#5A7A99",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}

            {/* Quote footer */}
            <div
              style={{
                padding: "20px 24px",
                borderTop: "1px solid #1A2E44",
                background: "rgba(0,232,122,0.03)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300, fontSize: "0.85rem",
                  color: "#5A7A99", fontStyle: "italic", lineHeight: "1.6",
                }}
              >
                "We speak both business and systems fluently — which is rare, and exactly what enterprise deployments require."
              </p>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "9px", color: "#00E87A",
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  marginTop: "8px",
                }}
              >
                — OKS Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
