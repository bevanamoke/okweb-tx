"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react"
import Link from "next/link"

export default function OdooHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-background via-background/95 to-primary/5 overflow-hidden pt-20">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mx-auto">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary tracking-wider">ODOO COMMUNITY EDITION SPECIALISTS</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Odoo Community</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Expert implementation and customization of Odoo Community Edition. Get enterprise-grade ERP functionality without the licensing fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="/quote">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base shadow-lg hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105" asChild>
                <Link href="https://erp.oks.co.ke" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-2 hover:bg-primary/5" asChild>
                <Link href="#services">
                  View Services
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Community Edition Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Custom Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Local Support</span>
              </div>
            </div>

            <div className="pt-6 px-6 py-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl max-w-2xl mx-auto">
              <p className="text-sm text-foreground/70">
                <strong className="text-primary">Note:</strong> OKS is not an official Odoo partner. We specialize in implementing and customizing Odoo Community Edition for businesses seeking cost-effective ERP solutions.
              </p>
            </div>
          </motion.div>

          {/* Odoo Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src="/odoo-hero-illustration.jpg"
                alt="Odoo Platform Illustration"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-gradient-to-t from-accent/5 to-transparent rounded-tr-full" />
    </section>
  )
}
