"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const CONTACT_ITEMS = [
  { label: "Email",    value: "info@oks.co.ke",    href: "mailto:info@oks.co.ke", color: "#00E87A" },
  { label: "Phone",    value: "+254 703 133 390",   href: "tel:+254703133390",     color: "#00D4FF" },
  { label: "Location", value: "Nairobi, Kenya",     href: null,                    color: "#F5A623" },
]

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

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
      style={{ background: "#0D1420", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}
    >
      {/* Grid background */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, rgba(26,46,68,0.25) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(26,46,68,0.25) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Green ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute", bottom: "-10%", left: "40%",
          width: "600px", height: "500px",
          background: "radial-gradient(circle, rgba(0,232,122,0.07) 0%, transparent 65%)",
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
              color: "#00E87A", textTransform: "uppercase",
            }}
          >
            §06 — START A PROJECT
          </span>
          <div style={{ flex: 1, height: "1px", background: "#1A2E44", maxWidth: "120px" }} />
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 xl:gap-20 items-start">

          {/* Left: headline + CTAs */}
          <div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)",
                lineHeight: "1.06",
                letterSpacing: "-0.035em",
                color: "#E8F0FE",
                marginBottom: "20px",
              }}
            >
              Ready to modernise<br />
              <span
                style={{
                  background: "linear-gradient(130deg, #00D4FF 0%, #00E87A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                your operations?
              </span>
            </h2>

            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 300, fontSize: "1.05rem", lineHeight: "1.8",
                color: "#5A7A99", maxWidth: "480px", marginBottom: "36px",
              }}
            >
              Stop fighting your systems. Book a 30-minute consultation and we'll map out exactly what it would take to transform your operations — no commitment required.
            </p>

            <div
              className="reveal"
              style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "40px" }}
            >
              <Link
                href="https://calendly.com/omnitechkernelsolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "14px 30px",
                  background: "#00E87A", color: "#060A10",
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 700, fontSize: "0.875rem",
                  letterSpacing: "0.04em", textTransform: "uppercase",
                  borderRadius: "2px", textDecoration: "none",
                  transition: "box-shadow 0.25s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0 36px rgba(0,232,122,0.4)")}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                Book Free Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="/quote"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "13px 26px",
                  border: "1px solid #1A2E44", color: "#E8F0FE",
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
                Request a Quote
              </Link>
            </div>

            {/* Guarantees */}
            <div
              className="reveal"
              style={{ display: "flex", flexWrap: "wrap", gap: "20px", paddingTop: "28px", borderTop: "1px solid #1A2E44" }}
            >
              {["No commitment required", "Response within 24h", "Fixed-scope engagements"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 6L4.5 9L10.5 3" stroke="#00E87A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontSize: "0.82rem", color: "#5A7A99",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact panel */}
          <div
            className="reveal"
            style={{
              border: "1px solid #1A2E44",
              background: "#111B2B",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "14px 24px", borderBottom: "1px solid #1A2E44" }}>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "9px", letterSpacing: "0.14em",
                  color: "#5A7A99", textTransform: "uppercase",
                }}
              >
                DIRECT_CONTACT
              </span>
            </div>

            {CONTACT_ITEMS.map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: "20px 24px",
                  borderBottom: i < CONTACT_ITEMS.length - 1 ? "1px solid #1A2E44" : "none",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                    fontSize: "8px", letterSpacing: "0.12em",
                    color: "#5A7A99", textTransform: "uppercase", minWidth: "64px",
                  }}
                >
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 400, fontSize: "0.9rem",
                      color: item.color, textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)", fontWeight: 400, fontSize: "0.9rem", color: item.color }}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}

            {/* Response indicator */}
            <div
              style={{
                padding: "16px 24px", borderTop: "1px solid #1A2E44",
                background: "rgba(0,232,122,0.03)",
                display: "flex", alignItems: "center", gap: "10px",
              }}
            >
              <span
                style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "#00E87A", boxShadow: "0 0 6px #00E87A",
                  display: "block", animation: "glow-pulse 2s ease-in-out infinite", flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "9px", color: "#5A7A99", letterSpacing: "0.08em",
                }}
              >
                Response time: &lt; 4 hours on business days
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
