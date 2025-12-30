"use client"

import { Eye, Zap, TrendingUp, DollarSign, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Eye,
    title: "Visibility",
    description: "Real-time dashboards for sales, stock levels, revenue, staff performance, and expenses.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "Automated workflows reduce manual tasks and human errors.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Start with one module and grow as your business grows—with no limits.",
  },
  {
    icon: DollarSign,
    title: "Cost-Reduction",
    description: "Replace 10+ software subscriptions with one unified platform.",
  },
  {
    icon: BarChart3,
    title: "Decision Power",
    description: "Data-driven insights that help owners make confident business decisions.",
  },
]

export default function OdooWhy() {
  return (
    <section className="py-16 md:py-24 bg-card/30 border-y">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Every Business Needs Odoo</h2>
          <p className="text-foreground/70 text-lg">
            Whether small or large, businesses succeed when systems are organized.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
