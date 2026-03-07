"use client"

import { useEffect, useRef } from "react"

const STEPS = [
  {
    num: "01",
    phase: "DISCOVERY",
    title: "Diagnostic Deep Dive",
    description:
      "We map your workflows, data flows, and pain points before a single module is configured. Most failures happen at this stage — because most vendors skip it.",
    duration: "Week 1–2",
    output: "Process map + gap analysis",
    color: "#00E87A",
  },
  {
    num: "02",
    phase: "INFRASTRUCTURE",
    title: "Environment Setup",
    description:
      "Server provisioning, Odoo installation, security hardening, and staging environment. We build on solid foundations — no shortcuts.",
    duration: "Week 2–3",
    output: "Live staging environment",
    color: "#00D4FF",
  },
  {
    num: "03",
    phase: "CONFIGURATION",
    title: "Workflow Configuration",
    description:
      "Tailoring every module to your specific processes. Custom views, automated workflows, access controls, and integrations. Nothing left to default.",
    duration: "Week 3–5",
    output: "Fully configured Odoo instance",
    color: "#F5A623",
  },
  {
    num: "04",
    phase: "HANDOFF",
    title: "Training & Go-Live",
    description:
      "Structured staff training, documentation handover, and a supervised go-live. We stay engaged through the first 90 days post-launch.",
    duration: "Week 5–6",
    output: "Live system + trained team",
    color: "#00E87A",
  },
]

export default function Process() {
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
      style={{ background: "#0D1420", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}
    >
      {/* Background grid */}
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

        {/* Section label + headline */}
        <div className="mb-16 grid lg:grid-cols-[1fr_auto] items-end gap-8">
          <div>
            <div
              className="reveal"
              style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "10px", letterSpacing: "0.2em",
                  color: "#00E87A", textTransform: "uppercase",
                }}
              >
                §04 — THE OKS STANDARD
              </span>
              <div style={{ flex: 1, height: "1px", background: "#1A2E44", maxWidth: "120px" }} />
            </div>
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
              A structured approach<br />
              <span style={{ color: "#5A7A99" }}>to every engagement.</span>
            </h2>
          </div>

          {/* Timeline indicator */}
          <div
            className="reveal hidden lg:block"
            style={{
              border: "1px solid #1A2E44",
              background: "#111B2B",
              borderRadius: "4px",
              padding: "16px 24px",
              textAlign: "right",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontWeight: 500, fontSize: "1.5rem",
                color: "#00E87A",
              }}
            >
              6 wks
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontSize: "0.75rem", color: "#5A7A99",
                textTransform: "uppercase", letterSpacing: "0.08em",
              }}
            >
              Typical deployment
            </div>
          </div>
        </div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block"
            style={{
              position: "absolute",
              top: "48px",
              left: "calc(10% + 32px)",
              right: "calc(10% + 32px)",
              height: "1px",
              background: "linear-gradient(to right, #00E87A, #00D4FF, #F5A623, #00E87A)",
              opacity: 0.25,
            }}
            aria-hidden
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2px",
            }}
          >
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="reveal"
                style={{
                  border: "1px solid #1A2E44",
                  background: "#111B2B",
                  borderRadius: "4px",
                  overflow: "hidden",
                  transitionDelay: `${i * 100}ms`,
                  transition: "border-color 0.25s, background 0.25s",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = step.color + "55"
                  e.currentTarget.style.background = "#131e2e"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#1A2E44"
                  e.currentTarget.style.background = "#111B2B"
                }}
              >
                {/* Top accent bar */}
                <div style={{ height: "2px", background: step.color, opacity: 0.6 }} />

                {/* Content */}
                <div style={{ padding: "24px" }}>
                  {/* Step number + phase */}
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "16px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontWeight: 500, fontSize: "2rem",
                        color: step.color, opacity: 0.35, lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontSize: "8px", letterSpacing: "0.14em",
                        color: step.color, textTransform: "uppercase",
                        border: `1px solid ${step.color}33`,
                        padding: "3px 8px", borderRadius: "2px",
                      }}
                    >
                      {step.phase}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700, fontSize: "1.05rem",
                      color: "#E8F0FE", letterSpacing: "-0.01em",
                      marginBottom: "10px",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 300, fontSize: "0.84rem",
                      color: "#5A7A99", lineHeight: "1.7",
                      marginBottom: "20px",
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Meta */}
                  <div
                    style={{
                      borderTop: "1px solid #1A2E44",
                      paddingTop: "14px",
                      display: "flex", flexDirection: "column", gap: "6px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                          fontSize: "8px", letterSpacing: "0.1em",
                          color: "#5A7A99", textTransform: "uppercase",
                        }}
                      >
                        Timeline
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                          fontSize: "9px", color: step.color,
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                          fontSize: "8px", letterSpacing: "0.1em",
                          color: "#5A7A99", textTransform: "uppercase",
                        }}
                      >
                        Deliverable
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                          fontSize: "0.78rem", color: "#E8F0FE",
                        }}
                      >
                        {step.output}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
