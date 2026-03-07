"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { format } from "date-fns"

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  authorName: string
  createdAt: any
  tags?: string[]
}

function PostCard({ post, delay }: { post: Post; delay: number }) {
  const [hovered, setHovered] = useState(false)
  const date = post.createdAt?.toDate ? format(post.createdAt.toDate(), "MMM d, yyyy") : null
  const tag = post.tags?.[0]

  return (
    <div className="reveal" style={{ transitionDelay: `${delay}ms`, height: "100%" }}>
      <Link
        href={`/blog/view?slug=${post.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: hovered ? "#131e2e" : "#111B2B",
          border: `1px solid ${hovered ? "rgba(0,212,255,0.3)" : "#1A2E44"}`,
          borderTop: "2px solid #00D4FF",
          textDecoration: "none",
          transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.25s",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? "0 8px 32px rgba(0,212,255,0.1)" : "none",
          overflow: "hidden",
        }}
      >
        {/* Cover image */}
        {post.coverImage && (
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", flexShrink: 0 }}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              style={{
                objectFit: "cover",
                transition: "transform 0.4s ease",
                transform: hovered ? "scale(1.04)" : "scale(1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, transparent 40%, rgba(17,27,43,0.7) 100%)",
              }}
            />
          </div>
        )}

        {/* Content */}
        <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", gap: "8px" }}>
            {date && (
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "0.68rem",
                  color: "#5A7A99",
                  letterSpacing: "0.06em",
                }}
              >
                {date}
              </span>
            )}
            {tag && (
              <span
                style={{
                  fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                  fontSize: "7px",
                  letterSpacing: "0.14em",
                  color: "#00D4FF",
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  padding: "3px 8px",
                  borderRadius: "2px",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {tag}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#E8F0FE",
              letterSpacing: "-0.015em",
              lineHeight: "1.35",
              marginBottom: "10px",
            }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontWeight: 300,
              fontSize: "0.82rem",
              color: "#5A7A99",
              lineHeight: "1.75",
              flex: 1,
              marginBottom: "20px",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            } as React.CSSProperties}
          >
            {post.excerpt}
          </p>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "16px",
              borderTop: "1px solid #1A2E44",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontSize: "0.75rem",
                color: "#5A7A99",
              }}
            >
              {post.authorName && post.authorName !== "Admin" ? post.authorName : "OKS Team"}
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                fontSize: "0.78rem",
                color: hovered ? "#00D4FF" : "#5A7A99",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                transition: "color 0.2s",
              }}
            >
              Read more
              <svg
                width="12"
                height="12"
                viewBox="0 0 13 13"
                fill="none"
                style={{
                  transform: hovered ? "translateX(3px)" : "translateX(0)",
                  transition: "transform 0.2s",
                  flexShrink: 0,
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
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

function SkeletonCard({ delay }: { delay: number }) {
  return (
    <div
      style={{
        background: "#111B2B",
        border: "1px solid #1A2E44",
        borderTop: "2px solid #1A2E44",
        height: "360px",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div style={{ width: "100%", aspectRatio: "16/9", background: "rgba(26,46,68,0.4)" }} />
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ height: "8px", width: "60%", background: "rgba(26,46,68,0.6)", borderRadius: "2px" }} />
        <div style={{ height: "16px", width: "90%", background: "rgba(26,46,68,0.6)", borderRadius: "2px" }} />
        <div style={{ height: "12px", width: "100%", background: "rgba(26,46,68,0.4)", borderRadius: "2px" }} />
        <div style={{ height: "12px", width: "80%", background: "rgba(26,46,68,0.4)", borderRadius: "2px" }} />
      </div>
    </div>
  )
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(
          collection(db, "posts"),
          where("status", "==", "published"),
          orderBy("createdAt", "desc"),
          limit(3)
        )
        const snapshot = await getDocs(q)
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Post[])
      } catch {
        // silently fail — section just won't render
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    if (loading) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    )
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [loading])

  if (!loading && posts.length === 0) return null

  return (
    <section
      ref={sectionRef}
      style={{ background: "#0D1420", borderTop: "1px solid #1A2E44", position: "relative", overflow: "hidden" }}
    >
      {/* Grid bg */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, rgba(26,46,68,0.15) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(26,46,68,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto px-6 lg:px-12 py-20 md:py-28 max-w-7xl">
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "52px" }}>
          <div>
            <div
              className="reveal"
              style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}
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
                LATEST INSIGHTS
              </span>
              <div style={{ width: "80px", height: "1px", background: "#1A2E44" }} />
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
                color: "#E8F0FE",
              }}
            >
              From the OKS blog.
            </h2>
          </div>
          <Link
            className="reveal"
            href="/blog"
            style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
              fontSize: "0.82rem",
              color: "#5A7A99",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s",
              flexShrink: 0,
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#E8F0FE")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#5A7A99")}
          >
            View all articles →
          </Link>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2px",
          }}
        >
          {loading
            ? [0, 1, 2].map((i) => <SkeletonCard key={i} delay={i * 80} />)
            : posts.map((post, i) => <PostCard key={post.id} post={post} delay={i * 80} />)}
        </div>
      </div>
    </section>
  )
}
