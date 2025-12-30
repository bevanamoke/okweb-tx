"use client"

import { Package, Users, ShoppingCart, BarChart3, Settings } from "lucide-react"
import { motion } from "framer-motion"

const modules = [
  { icon: ShoppingCart, label: "Point of Sale (POS)", description: "Complete retail management" },
  { icon: Package, label: "Inventory & Stock", description: "Real-time stock control" },
  { icon: BarChart3, label: "Accounting & Invoicing", description: "Financial management" },
  { icon: Users, label: "CRM & Sales", description: "Customer relationship management" },
  { icon: Users, label: "HR & Payroll", description: "Employee management" },
  { icon: Settings, label: "Purchasing & Manufacturing", description: "Operations management" },
]

export default function OdooWhatIs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Is Odoo?</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Odoo is a modular business platform with integrated apps for every aspect of your business. Everything is
            connected—no more switching between different software.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {modules.map((module, idx) => {
            const Icon = module.icon
            return (
              <motion.div
                key={idx}
                variants={item}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/5 rounded-lg w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{module.label}</h3>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
