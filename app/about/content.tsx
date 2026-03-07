"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

// ─── Data ────────────────────────────────────────────────────────────────────

const TEAM = [
  {
    name: "Eddy Akurwa",
    role: "Co-Founder & Managing Director",
    title: "Software Engineer",
    image: "/team/eddy-amoke.jpg",
    description:
      "Eddy oversees the strategic direction and day-to-day operations of OKS. As a software engineer, he coordinates project delivery, internal operations, and client engagements while ensuring that technical solutions align with business objectives.",
    focus:
      "Translating business needs into practical, well-executed systems and maintaining execution standards across the organisation.",
    tag: "LEADERSHIP",
    tagColor: "#00D4FF",
  },
  {
    name: "Bevan Amoke",
    role: "Co-Founder & Chief Technology Officer",
    title: "Software Developer",
    image: "/team/bevan-amoke.jpg",
    description:
      "Bevan leads the technical vision and engineering strategy at OKS. As CTO, he is responsible for system architecture, software design, security, performance, and scalability across all OKS solutions.",
    focus:
      "Overseeing complex implementations and ensuring all platforms — ERP, applications, and AI automation — are robust, secure, and future-ready.",
    tag: "ENGINEERING",
    tagColor: "#00E87A",
  },
  {
    name: "Sheryl Dormah",
    role: "Co-Founder",
    title: "PR & Sales Representative",
    image: "/team/sheryl-dorma.jpg",
    description:
      "Sheryl leads public relations, communications, and client-facing engagement at OKS. She manages brand positioning, supports sales initiatives, and ensures clear communication between the company and its clients.",
    focus:
      "Building trust, maintaining strong client relationships, and representing OKS professionally across all touchpoints.",
    tag: "BRAND & SALES",
    tagColor: "#F5A623",
  },
  {
    name: "Brian Gisemba",
    role: "Sales Director",
    title: "Business Development",
    image: "/team/brian-gisemba.jpg",
    description:
      "Brian heads business development and sales strategy. He is responsible for identifying opportunities, managing the sales pipeline, and structuring value-driven solutions that meet client needs.",
    focus:
      "Working closely with the technical team to ensure proposals are practical, scalable, and aligned with business realities.",
    tag: "SALES",
    tagColor: "#00D4FF",
  },
  {
    name: "Moses Gituru",
    role: "Accountant",
    title: "Financial Operations",
    image: "/team/moses-gituru.jpg",
    description:
      "Moses manages the financial operations of OKS, including accounting, budgeting, compliance, and financial reporting. He ensures financial discipline, transparency, and sustainable growth.",
    focus:
      "Supporting informed decision-making and maintaining strong internal financial controls.",
    tag: "FINANCE",
    tagColor: "#00E87A",
  },
]

const SERVICES = [
  {
    index: "01",
    title: "Odoo ERP Implementation",
    subtitle: "Community & Enterprise",
    description:
      "End-to-end deployment, customisation, training, and ongoing support. Accounting, inventory, HR, CRM, manufacturing, and eCommerce — all in one platform.",
    link: "/services/odoo-erp-implementation",
    color: "#00D4FF",
  },
  {
    index: "02",
    title: "Web & App Development",
    subtitle: "Custom Digital Platforms",
    description:
      "Custom-built software platforms designed for operational efficiency and scale. Odoo customisations, mobile apps, API integrations, and legacy migrations.",
    link: "/web-app-development",
    color: "#00E87A",
  },
  {
    index: "03",
    title: "AI & Automation",
    subtitle: "Intelligent Workflows",
    description:
      "Practical AI that automates repetitive tasks, surfaces insights, and integrates seamlessly into existing business systems.",
    link: "/ai-automation",
    color: "#F5A623",
  },
]

const WHY = [
  {
    letter: "A",
    title: "Business-first approach",
    description: "We solve business problems, not technology problems. Every system we build starts from your operational reality.",
    color: "#00D4FF",
  },
  {
    letter: "B",
    title: "Open-source foundation",
    description: "We build on Odoo, PostgreSQL, and proven open-source stacks — giving you control, auditability, and no vendor lock-in.",
    color: "#00E87A",
  },
  {
    letter: "C",
    title: "Structured delivery",
    description: "Scope documents before we write code. Milestones you can track. No invisible progress, no surprise overruns.",
    color: "#F5A623",
  },
  {
    letter: "D",
    title: "Long-term partnership",
    description: "We don't disappear after go-live. Support contracts, version upgrades, and ongoing development keep your system healthy.",
    color: "#00D4FF",
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceCard({
  svc,
  delay,
}: {
  svc: (typeof SERVICES)[number]
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
          border: `1px solid ${hovered ? svc.color + "44" : "#1A2E44"}`,
          borderTop: `2px solid ${svc.color}`,
          padding: "28px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.25s",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? `0 8px 32px ${svc.color}18` : "none",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
            fontSize: "9px",
            color: svc.color,
            letterSpacing: "0.14em",
            marginBottom: "16px",
            opacity: 0.7,
          }}
        >
          {svc.index}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#E8F0FE",
            letterSpacing: "-0.015em",
            marginBottom: "6px",
          }}
        >
          {svc.title}
        </h3>
        <div
          style={{
            fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
            fontSize: "8px",
            letterSpacing: "0.14em",
            color: svc.color,
            textTransform: "uppercase",
            marginBottom: "14px",
            opacity: 0.75,
          }}
        >
          {svc.subtitle}
        </div>
        <p
          style={{
            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
            fontWeight: 300,
            fontSize: "0.82rem",
            color: "#5A7A99",
            lineHeight: "1.8",
            flex: 1,
            marginBottom: "20px",
          }}
        >
          {svc.description}
        </p>
        <Link
          href={svc.link}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
            fontSize: "0.78rem",
            color: hovered ? svc.color : "#5A7A99",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          Learn more
          <svg
            width="12"
            height="12"
            viewBox="0 0 13 13"
            fill="none"
            style={{
              transform: hovered ? "translateX(3px)" : "translateX(0)",
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

// ─── Main component ───────────────────────────────────────────────────────────

export default function AboutContent() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    )
    pageRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={pageRef}>
      {/* ════════════════════════════════════════════════════════════════════════
          §01 HERO
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "#060A10",
          position: "relative",
          overflow: "hidden",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "96px",
        }}
      >
        {/* Mesh */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-5%",
              width: "50%",
              height: "70%",
              background: "radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 65%)",
              animation: "mesh-a 18s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-10%",
              left: "10%",
              width: "40%",
              height: "50%",
              background: "radial-gradient(ellipse, rgba(0,232,122,0.04) 0%, transparent 65%)",
              animation: "mesh-b 22s ease-in-out infinite",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto px-6 lg:px-12 py-16 max-w-7xl w-full">
          {/* Breadcrumb */}
          <div className="reveal" style={{ marginBottom: "36px" }}>
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
              ← OKS / About
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-center">
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
                    color: "#00E87A",
                    textTransform: "uppercase",
                  }}
                >
                  §01 — ABOUT OKS
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
                  marginBottom: "24px",
                }}
              >
                The team behind
                <br />
                <span style={{ color: "#5A7A99" }}>East Africa&apos;s</span>
                <br />
                digital infrastructure.
              </h1>

              <p
                className="reveal"
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300,
                  fontSize: "1.05rem",
                  color: "#5A7A99",
                  lineHeight: "1.85",
                  maxWidth: "520px",
                }}
              >
                OKS (Omnitech Kernel Solutions) is a technology company helping businesses operate
                smarter and scale faster through well-designed digital systems — ERP, custom software,
                and AI automation.
              </p>
            </div>

            {/* Company stat panel */}
            <div
              className="reveal hidden lg:block"
              style={{
                background: "#0D1420",
                border: "1px solid #1A2E44",
                borderTop: "2px solid #00E87A",
                padding: "28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: "linear-gradient(to right, transparent, rgba(0,232,122,0.4), transparent)",
                  animation: "scan-line 4s linear infinite",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "8px",
                  letterSpacing: "0.2em",
                  color: "#00E87A",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                OKS_COMPANY_PROFILE
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { label: "FOUNDED", value: "2022" },
                  { label: "LOCATION", value: "Nairobi, Kenya" },
                  { label: "COVERAGE", value: "East Africa" },
                  { label: "TEAM SIZE", value: "5 core members" },
                  { label: "DEPLOYMENTS", value: "50+ ERP implementations" },
                  { label: "SPECIALISATION", value: "Odoo · Custom Software · AI" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontSize: "8px",
                        letterSpacing: "0.14em",
                        color: "#5A7A99",
                        textTransform: "uppercase",
                        flexShrink: 0,
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                        fontSize: "0.78rem",
                        color: "#B0C4D8",
                        textAlign: "right",
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §02 MISSION & VALUES
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#0D1420", borderTop: "1px solid #1A2E44" }}>
        <div className="mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
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
                  §02 — MISSION
                </span>
                <div style={{ width: "60px", height: "1px", background: "#1A2E44" }} />
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
                  marginBottom: "20px",
                }}
              >
                Technology that serves
                <br />
                <span style={{ color: "#5A7A99" }}>the business, not the other way round.</span>
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
                We partner with startups, SMEs, and growing organisations to design, implement, and
                support business management systems, custom software, and AI-powered automation that
                replace manual processes and fragmented tools.
              </p>
              <div
                className="reveal"
                style={{
                  background: "#111B2B",
                  border: "1px solid #1A2E44",
                  borderLeft: "3px solid #00D4FF",
                  padding: "20px 24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                    fontWeight: 300,
                    fontSize: "0.925rem",
                    color: "#B0C4D8",
                    lineHeight: "1.85",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;Technology should be practical, reliable, and aligned with real business
                  workflows. Our approach emphasises clarity, efficiency, and long-term value.&rdquo;
                </p>
              </div>
            </div>

            {/* Values */}
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
                  OPERATING PRINCIPLES
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {[
                  { num: "01", text: "Understand the business before proposing a solution." },
                  { num: "02", text: "Deliver on scope, budget, and timeline — every time." },
                  { num: "03", text: "Build on open, auditable systems your team can own." },
                  { num: "04", text: "Stay accountable long after go-live." },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="reveal"
                    style={{
                      transitionDelay: `${i * 60}ms`,
                      background: "#111B2B",
                      border: "1px solid #1A2E44",
                      padding: "16px 20px",
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontSize: "9px",
                        color: "#00E87A",
                        letterSpacing: "0.1em",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      {p.num}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                        fontWeight: 300,
                        fontSize: "0.875rem",
                        color: "#B0C4D8",
                        lineHeight: "1.6",
                      }}
                    >
                      {p.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §03 WHAT WE DO
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "#060A10", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}>
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
                §03 — WHAT WE DO
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
                maxWidth: "560px",
              }}
            >
              End-to-end digital solutions
              <br />
              <span style={{ color: "#5A7A99" }}>across three core areas.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2px",
            }}
          >
            {SERVICES.map((svc, i) => (
              <ServiceCard key={svc.index} svc={svc} delay={i * 80} />
            ))}
          </div>

          <div
            className="reveal"
            style={{
              marginTop: "20px",
              padding: "16px 20px",
              background: "rgba(0,212,255,0.03)",
              border: "1px solid rgba(0,212,255,0.1)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 300,
                fontSize: "0.82rem",
                color: "#5A7A99",
                lineHeight: "1.7",
              }}
            >
              Our solutions are built on{" "}
              <span style={{ color: "#B0C4D8", fontWeight: 400 }}>open, scalable technologies</span>
              {" "}— giving clients control, flexibility, and long-term cost efficiency without
              proprietary lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §04 THE TEAM
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
                  color: "#00D4FF",
                  textTransform: "uppercase",
                }}
              >
                §04 — THE TEAM
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
              Multidisciplinary.
              <br />
              <span style={{ color: "#5A7A99" }}>Built for execution.</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {TEAM.map((member, i) => (
              <TeamCard key={member.name} member={member} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §05 WHY OKS
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
                  color: "#00E87A",
                  textTransform: "uppercase",
                }}
              >
                §05 — WHY OKS
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
                maxWidth: "560px",
              }}
            >
              What makes us different —
              <br />
              <span style={{ color: "#5A7A99" }}>and why it matters.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2px",
              marginBottom: "52px",
            }}
          >
            {WHY.map((w, i) => (
              <div
                key={w.letter}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  style={{
                    background: "#0D1420",
                    border: "1px solid #1A2E44",
                    borderTop: `2px solid ${w.color}`,
                    padding: "28px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: `${w.color}12`,
                      border: `1px solid ${w.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: w.color,
                      }}
                    >
                      {w.letter}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#E8F0FE",
                      letterSpacing: "-0.01em",
                      marginBottom: "10px",
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                      fontWeight: 300,
                      fontSize: "0.82rem",
                      color: "#5A7A99",
                      lineHeight: "1.8",
                    }}
                  >
                    {w.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div
            className="reveal"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "28px 32px",
              background: "#0D1420",
              border: "1px solid #1A2E44",
              borderLeft: "3px solid #00E87A",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#E8F0FE",
                  marginBottom: "4px",
                }}
              >
                Ready to build something that actually works?
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 300,
                  fontSize: "0.82rem",
                  color: "#5A7A99",
                }}
              >
                Book a free 30-minute consultation with our team.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link
                href="https://calendly.com/omnitechkernelsolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: "#060A10",
                  background: "#00E87A",
                  padding: "12px 24px",
                  borderRadius: "2px",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  display: "inline-block",
                  transition: "box-shadow 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(0,232,122,0.3)")}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                Book a Call
              </Link>
              <Link
                href="/quote"
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 400,
                  fontSize: "0.82rem",
                  color: "#5A7A99",
                  padding: "12px 20px",
                  border: "1px solid #1A2E44",
                  borderRadius: "2px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
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
                Get a quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Team card (separate to keep main component readable) ─────────────────────

function TeamCard({
  member,
  delay,
}: {
  member: (typeof TEAM)[number]
  delay: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "#131e2e" : "#111B2B",
          border: `1px solid ${hovered ? member.tagColor + "33" : "#1A2E44"}`,
          padding: "28px",
          display: "grid",
          gridTemplateColumns: "160px 220px 1fr",
          gap: "28px",
          alignItems: "start",
          transition: "background 0.25s, border-color 0.25s",
        }}
        className="about-team-card"
      >
        {/* Photo */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            border: "1px solid #1A2E44",
          }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{
              objectFit: "cover",
              filter: "grayscale(20%)",
              transition: "filter 0.3s, transform 0.4s",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          />
          {/* Color tint overlay on hover */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `${member.tagColor}08`,
              transition: "opacity 0.3s",
              opacity: hovered ? 1 : 0,
            }}
          />
        </div>

        {/* Name & role */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
              fontSize: "7px",
              letterSpacing: "0.18em",
              color: member.tagColor,
              background: `${member.tagColor}10`,
              border: `1px solid ${member.tagColor}28`,
              padding: "3px 10px",
              display: "inline-block",
              marginBottom: "12px",
              textTransform: "uppercase",
            }}
          >
            {member.tag}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#E8F0FE",
              letterSpacing: "-0.015em",
              marginBottom: "6px",
            }}
          >
            {member.name}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontWeight: 400,
              fontSize: "0.82rem",
              color: member.tagColor,
              marginBottom: "4px",
              lineHeight: "1.4",
            }}
          >
            {member.role}
          </p>
          <p
            style={{
              fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
              fontSize: "0.7rem",
              color: "#5A7A99",
              letterSpacing: "0.04em",
            }}
          >
            {member.title}
          </p>
        </div>

        {/* Description */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontWeight: 300,
              fontSize: "0.82rem",
              color: "#5A7A99",
              lineHeight: "1.8",
              marginBottom: "14px",
            }}
          >
            {member.description}
          </p>
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
            <span style={{ color: member.tagColor, fontSize: "0.65rem", flexShrink: 0, marginTop: "3px" }}>▸</span>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 300,
                fontSize: "0.78rem",
                color: "#4A6A88",
                lineHeight: "1.75",
                fontStyle: "italic",
              }}
            >
              {member.focus}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
