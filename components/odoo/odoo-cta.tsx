"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function OdooCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Business?</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses worldwide using Odoo to streamline operations and drive growth. Get started with Community Edition today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25" asChild>
              <Link href="/quote">
                Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg shadow-lg hover:bg-secondary/90" asChild>
              <Link href="https://erp.oks.co.ke" target="_blank" rel="noopener noreferrer">
                Try Demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-2" asChild>
              <Link href="#services">
                Explore Services
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "50+", label: "Integrated Apps" },
              { stat: "7M+", label: "Users Worldwide" },
              { stat: "100%", label: "Open Source" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6"
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-foreground/70">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
