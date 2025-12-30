"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Users, TrendingUp, Shield, Zap } from "lucide-react"

const benefits = [
    {
        icon: Users,
        title: "All-in-One Platform",
        description: "Manage sales, CRM, inventory, accounting, HR, and more from a single integrated system"
    },
    {
        icon: TrendingUp,
        title: "Scalable Growth",
        description: "Start with what you need and add modules as your business grows"
    },
    {
        icon: Shield,
        title: "Data Security",
        description: "Your data stays on your own servers with full control and privacy"
    },
    {
        icon: Zap,
        title: "Automation",
        description: "Automate repetitive tasks and workflows to save time and reduce errors"
    }
]

export default function OdooWhyChoose() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Odoo?</span>
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        Odoo is the world's fastest-growing business software, trusted by millions of companies worldwide
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold">One Platform, Endless Possibilities</h3>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            Unlike traditional ERP systems that require multiple disconnected software, Odoo provides a fully integrated suite of business applications. Every module works seamlessly together, giving you real-time visibility across your entire organization.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg">50+ Integrated Apps</p>
                                    <p className="text-foreground/70">From CRM to eCommerce, all working together</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg">Modern Interface</p>
                                    <p className="text-foreground/70">Intuitive design that your team will love</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg">Regular Updates</p>
                                    <p className="text-foreground/70">Continuous improvements and new features</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                <p className="text-foreground/50 text-sm">Odoo Dashboard Preview</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <benefit.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                            <p className="text-foreground/70">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
