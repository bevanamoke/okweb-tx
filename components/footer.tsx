"use client"

import Link from "next/link"
import Image from "next/image"

const SOLUTIONS = [
  { href: "/school_erp",              label: "School ERP" },
  { href: "/hospitality_erp",         label: "Hospitality ERP" },
  { href: "/odoo",                    label: "Odoo Implementation" },
  { href: "/odoo-manufacturing",      label: "Manufacturing ERP" },
  { href: "/odoo-retail-wholesale",   label: "Retail & Wholesale ERP" },
]

const SERVICES = [
  { href: "/ai-automation",           label: "AI & Automation" },
  { href: "/web-app-development",     label: "Web & App Development" },
  { href: "/odoo-integration",        label: "Odoo Integrations" },
  { href: "/odoo-training",           label: "Training & Support" },
  { href: "/quote",                   label: "Request a Quote" },
]

const COMPANY = [
  { href: "/about",                   label: "About OKS",         external: false },
  { href: "/blog",                    label: "Blog",              external: false },
  { href: "/privacy",                 label: "Privacy Policy",    external: false },
  { href: "/terms",                   label: "Terms of Service",  external: false },
  {
    href: "https://calendly.com/omnitechkernelsolutions/30min",
    label: "Book a Call",
    external: true,
  },
]

const colHeader = {
  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
  fontSize: "8px", letterSpacing: "0.18em",
  color: "#5A7A99" as const, textTransform: "uppercase" as const,
  marginBottom: "16px", display: "block",
}

const linkBase = {
  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
  fontSize: "0.82rem",
  color: "#5A7A99" as const,
  textDecoration: "none",
  display: "block",
  transition: "color 0.2s",
}

export default function Footer() {
  return (
    <footer style={{ background: "#060A10", borderTop: "1px solid #1A2E44" }}>
      <div className="mx-auto px-6 lg:px-12 py-16 max-w-7xl">

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Image src="/logo.png" alt="OKS" width={28} height={28} style={{ width: "28px", height: "28px" }} />
              <span
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 800, fontSize: "0.95rem",
                  color: "#E8F0FE", letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                OKS
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontWeight: 300, fontSize: "0.82rem",
                color: "#5A7A99", lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              OmniTech Kernel Solutions — Enterprise digital infrastructure for African institutions.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href="mailto:info@oks.co.ke"
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "0.75rem", color: "#00E87A",
                  textDecoration: "none", transition: "opacity 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                info@oks.co.ke
              </a>
              <a
                href="tel:+254703133390"
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "0.75rem", color: "#00D4FF",
                  textDecoration: "none", transition: "opacity 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                +254 703 133 390
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <span style={colHeader}>SOLUTIONS</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {SOLUTIONS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={linkBase}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#E8F0FE")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#5A7A99")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <span style={colHeader}>SERVICES</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {SERVICES.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={linkBase}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#E8F0FE")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#5A7A99")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <span style={colHeader}>COMPANY</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {COMPANY.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  style={linkBase}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#E8F0FE")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#5A7A99")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid #1A2E44",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "0.72rem", color: "#5A7A99", letterSpacing: "0.04em",
              }}
            >
              © 2025 OmniTech Kernel Solutions Ltd.
            </span>
            <span style={{ color: "#1A2E44", fontSize: "0.72rem" }}>|</span>
            <span
              style={{
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "0.72rem", color: "#5A7A99",
              }}
            >
              Nairobi, Kenya
            </span>
          </div>

          {/* Live status */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: "#00E87A", boxShadow: "0 0 5px #00E87A",
                display: "block", animation: "glow-pulse 2.5s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontSize: "0.68rem", color: "#5A7A99",
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}
            >
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
