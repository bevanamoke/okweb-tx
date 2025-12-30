"use client"

import { Database, Bot, Code, ArrowRight, CheckCircle2, TrendingUp, Zap, Monitor } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

const solutions = [
  {
    id: "odoo-implementation",
    title: "Odoo Implementation",
    subtitle: "Unified ERP Systems",
    description: "End-to-end Odoo implementation tailored to your unique business processes. We transform fragmented operations into a single, cohesive system.",
    icon: Database,
    capabilities: [
      "Full System Configuration",
      "Process Mapping",
      "Data Migration & Cleaning",
      "Custom Module Development",
      "User Training & Support",
      "Workflow Optimization",
      "Financial Reporting Setup",
    ],
    outcomes: [
      "Centralized Operations",
      "Real-time Data Visibility",
      "Scalable Infrastructure",
      "Reduced Manual Entry",
    ],
    link: "/odoo",
    cta: "Explore Odoo Services",
    color: "primary",
  },
  {
    id: "automation-services",
    title: "Automation Services",
    subtitle: "AI & Workflow Automation",
    description: "Streamline workflows and eliminate repetitive tasks. We connect your apps and automate business logic to free up your team for high-value work.",
    icon: Bot,
    capabilities: [
      "AI-Powered Workflows",
      "App Integration (Zapier/Make)",
      "Custom API Connectors",
      "Chatbot Implementation",
      "Automated Reporting",
      "Lead Management Automation",
      "Process Analysis",
    ],
    outcomes: [
      "Reduced Operational Costs",
      "Eliminated Human Error",
      "24/7 Productivity",
      "Faster Turnaround Times",
    ],
    link: "/ai-automation",
    cta: "View Automation",
    color: "accent",
  },
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "High-Performance Digital Experiences",
    description: "Modern websites and web applications built for speed, SEO, and conversion using cutting-edge technologies.",
    icon: Code,
    capabilities: [
      "Next.js & React Applications",
      "Custom UI/UX Design",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "Performance Optimization",
      "SEO Best Practices",
    ],
    outcomes: [
      "Enhanced Brand Authority",
      "Higher Conversion Rates",
      "Seamless User Experience",
      "Mobile-First Design",
    ],
    link: "/web-app-development",
    cta: "See Web Solutions",
    color: "primary",
  },
]

export default function Services() {
  return (
    <section id="solutions" className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Empowering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Evolution</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Comprehensive solutions to modernize, automate, and scale your business.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {solutions.map((solution, idx) => (
            <MagneticCard key={solution.id} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative h-full bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-${solution.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className={`w-8 h-8 text-${solution.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{solution.title}</h3>
                  <p className={`text-lg text-${solution.color} font-medium mb-4`}>{solution.subtitle}</p>
                  <p className="text-foreground/70 leading-relaxed">{solution.description}</p>
                </div>

                {/* Capabilities */}
                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-4">Key Capabilities</h4>
                  <ul className="space-y-3">
                    {solution.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80">
                        <CheckCircle2 className={`w-5 h-5 text-${solution.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className={`bg-${solution.color}/5 rounded-xl p-6 mb-8 border border-${solution.color}/10`}>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Outcome
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {solution.outcomes.map((outcome, i) => (
                      <div key={i} className="text-sm font-medium text-foreground/90">• {outcome}</div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link href={solution.link} className={`inline-flex items-center gap-2 text-lg font-bold text-${solution.color} hover:gap-4 transition-all duration-300 group/link`}>
                    {solution.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function MagneticCard({ children, className = "" }: any) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const center = { x: left + width / 2, y: top + height / 2 }
    // Limit movement to small amount (e.g. 5px)
    x.set((clientX - center.x) / 40)
    y.set((clientY - center.y) / 40)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      whileHover={{ y: -6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
