"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const SERVICES = [
  { id: "01", name: "Odoo ERP Implementation", status: "ACTIVE", color: "#00E87A" },
  { id: "02", name: "AI & Workflow Automation", status: "ACTIVE", color: "#00D4FF" },
  { id: "03", name: "Web & App Development",   status: "ACTIVE", color: "#F5A623" },
]

const METRICS = [
  { value: "47+",    label: "Implementations",   color: "#00E87A" },
  { value: "3+",     label: "Years Active",       color: "#00D4FF" },
  { value: "100%",   label: "Local Support",      color: "#F5A623" },
  { value: "6",      label: "Industry Verticals", color: "#00E87A" },
]

const BOTTOM_STATS = [
  { value: "Official Partner", label: "Odoo Status",          accent: "#00D4FF" },
  { value: "< 6 Weeks",        label: "Avg. Deploy Time",     accent: "#00E87A" },
  { value: "Post-Launch",      label: "Support Included",     accent: "#F5A623" },
  { value: "Nairobi, Kenya",   label: "Headquartered",        accent: "#00D4FF" },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer for scroll-triggered reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#060A10", paddingTop: "88px" }}
    >
      {/* ── Animated gradient mesh ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          style={{
            position: "absolute", width: "700px", height: "700px",
            top: "-15%", right: "5%",
            background: "radial-gradient(circle, rgba(0,212,255,0.10) 0%, transparent 65%)",
            animation: "mesh-a 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute", width: "550px", height: "550px",
            bottom: "0%", left: "0%",
            background: "radial-gradient(circle, rgba(0,232,122,0.08) 0%, transparent 65%)",
            animation: "mesh-b 25s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute", width: "400px", height: "400px",
            top: "50%", left: "38%",
            background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 65%)",
            animation: "mesh-c 16s ease-in-out infinite",
          }}
        />
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(26,46,68,0.35) 1px, transparent 1px)," +
              "linear-gradient(to bottom, rgba(26,46,68,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Horizon line */}
        <div
          style={{
            position: "absolute", left: 0, right: 0, bottom: "28%", height: "1px",
            background: "linear-gradient(to right, transparent 0%, #1A2E44 20%, #1A2E44 80%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto px-6 lg:px-12 py-12 w-full max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">

          {/* LEFT */}
          <div>
            {/* Location chip */}
            <div
              className="reveal"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                border: "1px solid #1A2E44", borderRadius: "2px",
                padding: "6px 14px", background: "rgba(13,20,32,0.7)",
                marginBottom: "32px",
                animation: "fade-up 0.6s ease 0.1s both",
              }}
            >
              <span
                style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: "#00E87A", boxShadow: "0 0 8px #00E87A",
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
                Nairobi, KE · EAT UTC+3 · SYS_ONLINE
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)",
                lineHeight: "1.04",
                letterSpacing: "-0.035em",
                color: "#E8F0FE",
                marginBottom: "28px",
                animation: "fade-up 0.7s ease 0.2s both",
              }}
            >
              Enterprise Digital<br />
              Transformation,{" "}
              <span
                style={{
                  background: "linear-gradient(130deg, #00D4FF 0%, #00E87A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built for Africa.
              </span>
            </h1>

            {/* Body */}
            <p
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 300,
                fontSize: "1.125rem",
                lineHeight: "1.8",
                color: "#5A7A99",
                maxWidth: "520px",
                marginBottom: "40px",
                animation: "fade-up 0.7s ease 0.35s both",
              }}
            >
              We build the operational infrastructure that Kenyan enterprises need to compete globally — through Odoo ERP, intelligent automation, and high-performance digital systems.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center",
                marginBottom: "56px",
                animation: "fade-up 0.7s ease 0.5s both",
              }}
            >
              <Link
                href="https://calendly.com/omnitechkernelsolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "13px 28px",
                  background: "#00E87A",
                  color: "#060A10",
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 700, fontSize: "0.875rem",
                  letterSpacing: "0.04em", textTransform: "uppercase",
                  borderRadius: "2px", textDecoration: "none",
                  transition: "box-shadow 0.25s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0 32px rgba(0,232,122,0.4)")}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                Book a Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="#solutions"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "12px 26px",
                  border: "1px solid #1A2E44",
                  color: "#E8F0FE",
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 400, fontSize: "0.9rem",
                  borderRadius: "2px", textDecoration: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#00D4FF"
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,255,0.12)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#1A2E44"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                Explore Solutions
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ transition: "transform 0.2s" }}>
                  <path d="M2 6.5H11M11 6.5L7.5 3M11 6.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT — Status panel (desktop only) */}
          <div
            className="hidden lg:block"
            style={{
              border: "1px solid #1A2E44",
              background: "#0D1420",
              borderRadius: "4px",
              overflow: "hidden",
              position: "relative",
              animation: "fade-up 0.8s ease 0.4s both",
            }}
          >
            {/* Panel header bar */}
            <div
              style={{
                borderBottom: "1px solid #1A2E44",
                padding: "11px 20px",
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
                OKS_SYSTEM_STATUS
              </span>
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1A2E44", display: "block" }} />
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1A2E44", display: "block" }} />
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#00E87A", boxShadow: "0 0 5px #00E87A", display: "block", animation: "glow-pulse 2s ease-in-out infinite" }} />
              </div>
            </div>

            {/* Service rows */}
            <div>
              {SERVICES.map((svc, i) => (
                <div
                  key={svc.id}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 20px",
                    borderBottom: i < SERVICES.length - 1 ? "1px solid #1A2E44" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontSize: "9px", color: "#1A2E44", minWidth: "20px",
                      }}
                    >
                      {svc.id}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                        fontWeight: 400, fontSize: "0.875rem", color: "#E8F0FE",
                      }}
                    >
                      {svc.name}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span
                      style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: svc.color, boxShadow: `0 0 6px ${svc.color}`,
                        display: "block", animation: "glow-pulse 2.5s ease-in-out infinite",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontSize: "9px", color: svc.color, letterSpacing: "0.12em",
                      }}
                    >
                      {svc.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics 2×2 grid */}
            <div
              style={{
                borderTop: "1px solid #1A2E44",
                display: "grid", gridTemplateColumns: "1fr 1fr",
              }}
            >
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  style={{
                    padding: "16px 20px",
                    borderRight: i % 2 === 0 ? "1px solid #1A2E44" : "none",
                    borderBottom: i < 2 ? "1px solid #1A2E44" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontWeight: 500, fontSize: "1.375rem",
                      color: m.color, lineHeight: 1, marginBottom: "5px",
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontSize: "0.7rem", color: "#5A7A99",
                      textTransform: "uppercase", letterSpacing: "0.08em",
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scan line effect */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ borderRadius: "4px" }}
              aria-hidden
            >
              <div
                style={{
                  position: "absolute", left: 0, right: 0, height: "1px",
                  background: "linear-gradient(to right, transparent, rgba(0,212,255,0.25), transparent)",
                  animation: "scan-line 5s linear infinite",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Bottom stats strip ── */}
        <div
          style={{
            marginTop: "56px",
            paddingTop: "32px",
            borderTop: "1px solid #1A2E44",
            animation: "fade-up 0.8s ease 0.65s both",
          }}
        >
          <div
            className="hero-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "24px",
            }}
          >
            {BOTTOM_STATS.map((s, i) => (
              <div key={s.label} style={{ position: "relative" }}>
                {i > 0 && (
                  <div
                    style={{
                      position: "absolute", left: "-12px", top: 0, bottom: 0,
                      width: "1px", background: "#1A2E44",
                      display: "none",
                    }}
                    className="hidden md:block"
                  />
                )}
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontWeight: 500, fontSize: "0.95rem",
                    color: s.accent, marginBottom: "5px",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "0.72rem", color: "#5A7A99",
                    textTransform: "uppercase", letterSpacing: "0.09em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fade-in 1s ease 1.4s both" }}
        aria-hidden
      >
        <div
          style={{
            width: "1px", height: "52px",
            background: "linear-gradient(to bottom, #1A2E44, transparent)",
          }}
        />
      </div>
    </section>
  )
}
