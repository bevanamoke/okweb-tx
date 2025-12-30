"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const reasons = [
    "Business-first, results-driven technology solutions",
    "Deep expertise in open-source and scalable systems",
    "Clear communication and structured project delivery",
    "Long-term partnership and ongoing support",
]

export default function AboutWhyOks() {
    return (
        <section className="py-20 md:py-32 px-4 bg-card/30 overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">
                        Why Choose Us
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Why{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            OKS
                        </span>
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle2 className="w-5 h-5 text-primary" strokeWidth={2.5} />
                                    </div>
                                    <p className="text-lg font-semibold text-foreground/90 leading-relaxed pt-1">
                                        {reason}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
