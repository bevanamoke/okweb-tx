"use client"

import { motion } from "framer-motion"
import { Server, Code, Brain } from "lucide-react"

const services = [
    {
        icon: Server,
        title: "Odoo ERP Implementation",
        subtitle: "Community & Enterprise",
        description:
            "Deployment, customization, training, and ongoing support for sales, inventory, POS, finance, and reporting systems.",
    },
    {
        icon: Code,
        title: "Software, Web & Mobile App Development",
        subtitle: "Custom Digital Platforms",
        description:
            "Custom-built digital platforms designed to support operational efficiency, scalability, and growth.",
    },
    {
        icon: Brain,
        title: "AI Automation & Intelligent Workflows",
        subtitle: "Practical AI Solutions",
        description:
            "Practical AI solutions that automate repetitive tasks, enhance insights, and integrate seamlessly with business systems.",
    },
]

export default function AboutServices() {
    return (
        <section className="py-20 md:py-32 px-4 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">
                        What We Do
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        End-to-End Digital Solutions
                    </h3>
                    <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                        OKS delivers comprehensive solutions across three core areas
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-card border border-border/50 rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                                </div>

                                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                                <p className="text-sm text-primary/80 font-medium mb-4">
                                    {service.subtitle}
                                </p>
                                <p className="text-foreground/70 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6 max-w-3xl mx-auto">
                        <p className="text-foreground/80 leading-relaxed">
                            Our solutions are built on <span className="font-semibold text-primary">open, scalable technologies</span> that give clients control, flexibility, and long-term cost efficiency.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
