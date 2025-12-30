"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"

export default function AboutMission() {
    return (
        <section className="py-20 md:py-32 px-4 bg-card/30 overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />

                    <div className="bg-card border border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Target className="w-6 h-6 text-primary" strokeWidth={2} />
                            </div>
                            <h2 className="text-sm font-bold tracking-wider text-primary uppercase">
                                Our Mission
                            </h2>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Empowering Businesses with{" "}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Intelligent Systems
                            </span>
                        </h3>

                        <p className="text-xl text-foreground/90 leading-relaxed">
                            To empower businesses with intelligent, scalable systems that improve efficiency, visibility, and decision-making — without unnecessary complexity.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
