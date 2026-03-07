"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// ─── Data ────────────────────────────────────────────────────────────────────

const RAW_TIERS = [
  {
    id: "flagship",
    tierLabel: "FLAGSHIP",
    pillLabel: "Core Offering",
    color: "#00D4FF",
    isFlagship: true,
    cols: "repeat(auto-fit, minmax(320px, 1fr))",
    cardMinHeight: "280px",
    services: [
      {
        title: "Odoo ERP Implementation",
        description:
          "End-to-end deployment across Accounting, Inventory, HR, CRM, Manufacturing and eCommerce. Vertical packages for retail, manufacturing, NGO, and logistics.",
        link: "/odoo",
      },
      {
        title: "Digital Transformation Consultancy",
        description:
          "Process audits, digital roadmaps, technology stack advisory and change management. Board-level workshops for leadership teams.",
        link: "/services/digital-transformation",
      },
    ],
  },
  {
    id: "growth",
    tierLabel: "GROWTH SERVICES",
    pillLabel: "Growth",
    color: "#00E87A",
    isFlagship: false,
    cols: "repeat(auto-fit, minmax(220px, 1fr))",
    cardMinHeight: "220px",
    services: [
      {
        title: "Managed IT & Cloud Services",
        description:
          "Azure/AWS setup, server management, IT helpdesk and cybersecurity audits. Monthly retainer model.",
        link: "/quote",
      },
      {
        title: "Custom Software Development",
        description:
          "Odoo customizations, mobile apps, API integrations and legacy system migrations.",
        link: "/web-app-development",
      },
      {
        title: "Business Intelligence & Analytics",
        description:
          "Power BI dashboards, KPI frameworks and data warehousing. Turn raw data into boardroom decisions.",
        link: "/ai-automation",
      },
    ],
  },
  {
    id: "enablement",
    tierLabel: "ENABLEMENT",
    pillLabel: "Enablement",
    color: "#F5A623",
    isFlagship: false,
    cols: "repeat(auto-fit, minmax(320px, 1fr))",
    cardMinHeight: "200px",
    services: [
      {
        title: "Training & Capacity Building",
        description:
          "Odoo end-user training, IT team upskilling and digital literacy programs. Certification preparation.",
        link: "/odoo-training",
      },
      {
        title: "Support & Maintenance Contracts",
        description:
          "SLA-based Odoo support, bug fixes, version upgrades. Bronze / Silver / Gold tiers.",
        link: "/odoo-support",
      },
    ],
  },
]

// Pre-compute stagger delays
let _idx = 0
const TIERS = RAW_TIERS.map((tier) => ({
  ...tier,
  services: tier.services.map((svc) => ({ ...svc, animDelay: (_idx++) * 80 })),
}))

// ─── Card component ───────────────────────────────────────────────────────────

function ServiceCard({
  service,
  color,
  cardMinHeight,
  isFlagship,
  pillLabel,
}: {
  service: { title: string; description: string; link: string; animDelay: number }
  color: string
  cardMinHeight: string
  isFlagship: boolean
  pillLabel: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    /* Outer reveal wrapper — handles fade-up on scroll */
    <div
      className="reveal"
      style={{ transitionDelay: `${service.animDelay}ms`, height: "100%" }}
    >
      {/* Inner card — handles hover lift, border glow */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          height: "100%",
          minHeight: cardMinHeight,
          display: "flex",
          flexDirection: "column",
          background: hovered ? "#131e2e" : "#111B2B",
          border: `1px solid ${hovered ? color + "55" : "#1A2E44"}`,
          borderTop: `2px solid ${color}`,
          borderRadius: "4px",
          padding: "28px",
          cursor: "default",
          transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.25s",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? `0 8px 36px ${color}22` : "none",
        }}
      >
        {/* Flagship "Core Offering" badge */}
        {isFlagship && (
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              padding: "3px 10px",
              background: `${color}14`,
              border: `1px solid ${color}38`,
              borderRadius: "2px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 500,
                fontSize: "9px",
                color,
                textTransform: "uppercase",
                letterSpacing: "0.13em",
              }}
            >
              {pillLabel}
            </span>
          </div>
        )}

        {/* Service name */}
        <h3
          style={{
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700,
            fontSize: "1.075rem",
            color: "#E8F0FE",
            letterSpacing: "-0.015em",
            lineHeight: "1.3",
            marginBottom: "12px",
            paddingRight: isFlagship ? "100px" : "0",
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
            fontWeight: 300,
            fontSize: "0.83rem",
            color: "#5A7A99",
            lineHeight: "1.8",
            flex: 1,
            marginBottom: "24px",
          }}
        >
          {service.description}
        </p>

        {/* Learn more → */}
        <Link
          href={service.link}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
            fontWeight: 400,
            fontSize: "0.82rem",
            color: hovered ? color : "#5A7A99",
            textDecoration: "none",
            transition: "color 0.2s",
            width: "fit-content",
          }}
        >
          Learn more
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            style={{
              flexShrink: 0,
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.2s",
            }}
          >
            <path
              d="M1.5 6.5H11.5M11.5 6.5L7.5 2.5M11.5 6.5L7.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function ServicesPortfolio() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    )
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: "#0D1420", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle architectural grid */}
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

        {/* ── Section header ── */}
        <div style={{ marginBottom: "52px" }}>
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
              §02 — SERVICE PORTFOLIO
            </span>
            <div style={{ flex: 1, height: "1px", background: "#1A2E44", maxWidth: "120px" }} />
          </div>

          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: "1.08",
              letterSpacing: "-0.03em",
              color: "#E8F0FE",
              marginBottom: "16px",
            }}
          >
            What we deliver —<br />
            <span style={{ color: "#5A7A99" }}>and how.</span>
          </h2>

          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontWeight: 300, fontSize: "1.05rem", lineHeight: "1.8",
              color: "#5A7A99", maxWidth: "560px",
            }}
          >
            From strategy to implementation to ongoing support — everything your business needs to transform.
          </p>
        </div>

        {/* ── Body: rotated side label + card tiers ── */}
        <div style={{ display: "flex", gap: "28px", alignItems: "flex-start" }}>

          {/* Rotated vertical label — grid-breaking element, desktop only */}
          <div
            className="hidden lg:block"
            style={{ flexShrink: 0, width: "18px", alignSelf: "stretch", position: "relative" }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                writingMode: "vertical-rl",
                transform: "rotate(180deg) translate(50%, 50%)",
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "8px",
                letterSpacing: "0.32em",
                color: "#1A2E44",
                textTransform: "uppercase",
                userSelect: "none",
                whiteSpace: "nowrap",
                pointerEvents: "none",
              }}
            >
              SERVICE PORTFOLIO
            </span>
          </div>

          {/* Tier stacks */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "28px" }}>
            {TIERS.map((tier) => (
              <div key={tier.id}>

                {/* Tier pill label + horizontal rule */}
                <div
                  className="reveal"
                  style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 500,
                      fontSize: "9px",
                      color: tier.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      background: `${tier.color}12`,
                      border: `1px solid ${tier.color}30`,
                      padding: "4px 12px",
                      borderRadius: "2px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tier.tierLabel}
                  </span>
                  <div
                    style={{
                      flex: 1, height: "1px",
                      background: `linear-gradient(to right, ${tier.color}28, transparent)`,
                    }}
                  />
                </div>

                {/* Card grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: tier.cols,
                    gap: "2px",
                  }}
                >
                  {tier.services.map((svc) => (
                    <ServiceCard
                      key={svc.title}
                      service={svc}
                      color={tier.color}
                      cardMinHeight={tier.cardMinHeight}
                      isFlagship={tier.isFlagship}
                      pillLabel={tier.pillLabel}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
