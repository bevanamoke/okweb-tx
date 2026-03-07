"use client"

import { useEffect, useRef } from "react"

const TESTIMONIALS = [
  {
    quote:
      "OKS automated our law firm workflow and reduced our admin work by 70%. The implementation was clean, the team was thorough, and they didn't leave until we were fully operational.",
    author: "Rapando Odunga Advocates",
    location: "Nairobi, Kenya",
    industry: "Legal Services",
    metric: "70%",
    metricLabel: "Admin reduction",
    color: "#00E87A",
  },
  {
    quote:
      "Our school is now fully digital with Odoo. Fees, admissions, academic reports — all unified. What used to take days now takes minutes. The staff training was exceptional.",
    author: "IT Director",
    location: "Light Academy",
    industry: "Education",
    metric: "100%",
    metricLabel: "Digital operations",
    color: "#00D4FF",
  },
  {
    quote:
      "They built our restaurant POS and inventory system in under a week. Real-time stock tracking, supplier management, daily reports — everything we needed, nothing we didn't.",
    author: "Restaurant Owner",
    location: "Nakuru, Kenya",
    industry: "Hospitality",
    metric: "< 1 wk",
    metricLabel: "Full deployment",
    color: "#F5A623",
  },
]

export default function Testimonials() {
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
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: "30%", right: 0,
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
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
              color: "#00D4FF", textTransform: "uppercase",
            }}
          >
            §05 — CLIENT RESULTS
          </span>
          <div style={{ flex: 1, height: "1px", background: "#1A2E44", maxWidth: "120px" }} />
        </div>

        {/* Headline */}
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
            maxWidth: "480px",
          }}
        >
          Results our clients<br />
          <span style={{ color: "#5A7A99" }}>actually measure.</span>
        </h2>

        {/* Testimonial cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2px",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                border: "1px solid #1A2E44",
                background: "#111B2B",
                borderRadius: "4px",
                overflow: "hidden",
                transitionDelay: `${i * 100}ms`,
                transition: "border-color 0.25s, background 0.25s",
                display: "flex", flexDirection: "column",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = t.color + "44"
                e.currentTarget.style.background = "#131e2e"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#1A2E44"
                e.currentTarget.style.background = "#111B2B"
              }}
            >
              {/* Metric callout */}
              <div
                style={{
                  padding: "20px 24px",
                  borderBottom: "1px solid #1A2E44",
                  display: "flex", alignItems: "baseline", gap: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontWeight: 500, fontSize: "2rem",
                    color: t.color, lineHeight: 1,
                  }}
                >
                  {t.metric}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontSize: "0.78rem", color: "#5A7A99",
                    textTransform: "uppercase", letterSpacing: "0.08em",
                  }}
                >
                  {t.metricLabel}
                </span>
              </div>

              {/* Quote */}
              <div style={{ padding: "24px", flex: 1 }}>
                {/* Opening mark */}
                <div
                  style={{
                    fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                    fontWeight: 800, fontSize: "3rem",
                    color: t.color, opacity: 0.2,
                    lineHeight: 0.8, marginBottom: "8px",
                  }}
                >
                  "
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontWeight: 300, fontSize: "0.9rem",
                    color: "#E8F0FE", lineHeight: "1.75",
                    marginBottom: "0",
                  }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Attribution */}
              <div
                style={{
                  padding: "16px 24px",
                  borderTop: "1px solid #1A2E44",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: "8px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700, fontSize: "0.82rem",
                      color: "#E8F0FE",
                    }}
                  >
                    {t.author}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontSize: "0.75rem", color: "#5A7A99",
                      marginTop: "2px",
                    }}
                  >
                    {t.location}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "8px", letterSpacing: "0.1em",
                    color: t.color, textTransform: "uppercase",
                    border: `1px solid ${t.color}33`,
                    padding: "3px 8px", borderRadius: "2px",
                    flexShrink: 0,
                  }}
                >
                  {t.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
