"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const NAV = [
  { href: "/services/odoo-erp-implementation", label: "Odoo ERP" },
  { href: "/web-app-development", label: "Web & Apps" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,10,16,0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1A2E44" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto px-6 lg:px-12 py-4 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image src="/logo.png" alt="OKS" width={32} height={32} className="w-8 h-8 relative z-10" />
          </div>
          <span
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 800,
              fontSize: "1rem",
              color: "#E8F0FE",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            OKS
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  color: active ? "#E8F0FE" : "#5A7A99",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                  position: "relative",
                }}
                onMouseOver={(e) => { if (!active) e.currentTarget.style.color = "#E8F0FE" }}
                onMouseOut={(e) => { if (!active) e.currentTarget.style.color = "#5A7A99" }}
              >
                {link.label}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "#00E87A",
                    }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/quote"
            style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontWeight: 400,
              fontSize: "0.85rem",
              color: "#5A7A99",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#E8F0FE")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#5A7A99")}
          >
            Get Quote
          </Link>
          <Link
            href="https://calendly.com/omnitechkernelsolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 700,
              fontSize: "0.8rem",
              color: "#060A10",
              background: "#00E87A",
              padding: "8px 20px",
              borderRadius: "2px",
              letterSpacing: "0.04em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "box-shadow 0.2s, background 0.2s",
              display: "inline-block",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 0 24px rgba(0,232,122,0.35)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            Book Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: "#E8F0FE" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path d="M5 5L17 17M5 17L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 5.5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 11H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 16.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "#0D1420",
            borderTop: "1px solid #1A2E44",
            padding: "24px",
          }}
        >
          <div className="flex flex-col gap-5">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontSize: "1rem",
                  color: "#E8F0FE",
                  textDecoration: "none",
                  fontWeight: 400,
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ borderTop: "1px solid #1A2E44", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  fontSize: "0.9rem",
                  color: "#5A7A99",
                  textDecoration: "none",
                  textAlign: "center",
                  padding: "10px",
                  border: "1px solid #1A2E44",
                  borderRadius: "2px",
                }}
              >
                Get a Quote
              </Link>
              <Link
                href="https://calendly.com/omnitechkernelsolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#060A10",
                  background: "#00E87A",
                  padding: "12px 20px",
                  borderRadius: "2px",
                  textDecoration: "none",
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  display: "block",
                }}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
