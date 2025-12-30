"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
    {
        number: "01",
        title: "Discovery & Planning",
        description: "We analyze your business processes and requirements to create a tailored implementation plan",
        highlights: ["Business process mapping", "Requirements gathering", "Timeline planning"]
    },
    {
        number: "02",
        title: "Configuration & Setup",
        description: "We configure Odoo to match your workflows and set up all necessary modules",
        highlights: ["Module installation", "Workflow configuration", "User permissions"]
    },
    {
        number: "03",
        title: "Data Migration",
        description: "Safe and secure transfer of your existing data into Odoo with validation",
        highlights: ["Data cleaning", "Import validation", "Testing"]
    },
    {
        number: "04",
        title: "Training & Go-Live",
        description: "Comprehensive training for your team and smooth transition to the new system",
        highlights: ["User training", "Documentation", "Go-live support"]
    }
]

export default function OdooImplementationProcess() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Implementation Process</span>
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        A proven methodology to ensure your Odoo implementation is successful from day one
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative"
                        >
                            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-primary-foreground shadow-lg">
                                        {step.number}
                                    </div>
                                    {idx < steps.length - 1 && (
                                        <div className="hidden md:block w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-4" />
                                    )}
                                </div>

                                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-lg text-foreground/70 mb-6">{step.description}</p>
                                    <div className="space-y-2">
                                        {step.highlights.map((highlight, hIdx) => (
                                            <div key={hIdx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span className="text-foreground/80">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/quote"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    >
                        Start Your Implementation
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
