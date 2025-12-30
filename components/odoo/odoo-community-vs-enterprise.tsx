"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function OdooCommunityVsEnterprise() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Odoo Community vs Odoo Enterprise</h2>
          <p className="text-foreground/70 text-lg">Which should you choose?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Community */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-primary rounded-xl p-8 hover:border-primary/70 transition-colors duration-300 shadow-lg shadow-primary/10 relative"
          >
            <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
              OKS SPECIALIZATION
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary">Community Edition</h3>
            <p className="text-sm text-foreground/70 mb-6">Free & Open Source</p>
            <p className="text-foreground/80 mb-6">
              Perfect for small to medium businesses looking for core functionality without subscription fees. OKS transforms Community Edition into a powerful, customized system.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">100% free to use</p>
                  <p className="text-sm text-muted-foreground">No license fees, ever</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Fully customizable</p>
                  <p className="text-sm text-muted-foreground">Open source flexibility for your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Core functionality</p>
                  <p className="text-sm text-muted-foreground">POS, Inventory, Sales, CRM, Basic Accounting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Your own server</p>
                  <p className="text-sm text-muted-foreground">Full control, privacy, and data ownership</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Custom modules</p>
                  <p className="text-sm text-muted-foreground">We build exactly what you need</p>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-semibold text-primary mb-2">Why Choose Community with OKS?</p>
              <p className="text-sm text-foreground/70">
                We turn Community Edition into a powerful system customized to your workflow—without the ongoing subscription costs of Enterprise.
              </p>
            </div>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-secondary/30 rounded-xl p-8 hover:border-secondary transition-colors duration-300 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-2 text-secondary">Enterprise Edition</h3>
            <p className="text-sm text-foreground/70 mb-6">Paid & Premium</p>
            <p className="text-foreground/80 mb-6">Best for businesses needing advanced features and mobile access.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Mobile apps included</p>
                  <p className="text-sm text-muted-foreground">Full mobile access</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Advanced accounting</p>
                  <p className="text-sm text-muted-foreground">Automated reconciliation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Studio included</p>
                  <p className="text-sm text-muted-foreground">No-code app builder</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Official support</p>
                  <p className="text-sm text-muted-foreground">From Odoo S.A</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic border-t pt-4">
              Great for growing companies that need premium features and official support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
