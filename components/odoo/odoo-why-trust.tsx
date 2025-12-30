"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Shield, Zap, Users, DollarSign, Globe } from "lucide-react"

const trustReasons = [
    {
        icon: CheckCircle2,
        title: "Certified Odoo Experts",
        description: "Delivering professional, certified, and reliable Odoo implementations, ensuring the best practices for your business."
    },
    {
        icon: Users,
        title: "Tailored for Your Business",
        description: "Customizing Odoo's powerful features to match your exact workflow, industry, and growth objectives."
    },
    {
        icon: Zap,
        title: "Quick Deployment",
        description: "Seamlessly implement Odoo with a fast, hassle-free setup that minimizes downtime and maximizes efficiency."
    },
    {
        icon: Users,
        title: "Dedicated Support & Training",
        description: "Providing ongoing support, user training, and troubleshooting, ensuring your team stays ahead."
    },
    {
        icon: DollarSign,
        title: "Transparent, Affordable Pricing",
        description: "Offering enterprise-level service at competitive prices with no hidden fees, ensuring maximum value for your investment."
    },
    {
        icon: Globe,
        title: "Global Client Trust",
        description: "With a proven track record, we are trusted by businesses worldwide for reliable ERP solutions and unmatched customer satisfaction."
    }
]

export default function OdooWhyTrustOKS() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Why Businesses Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">OKS</span>
                        </h2>

                        <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                            <p>
                                At OKS, we don't just provide software — we offer a comprehensive partnership that prioritizes your business growth. Our team of certified Odoo experts works closely with you to understand your unique needs, challenges, and goals. We customize Odoo Community Edition to align perfectly with your business operations, ensuring a seamless fit and an ERP system that actually works for you.
                            </p>

                            <p>
                                From planning and implementation to training and ongoing support, we are committed to delivering a solution that adds real value to your business.
                            </p>

                            <p>
                                We go beyond just technical support. Our continuous training, dedicated support, and post-implementation services ensure that your team is always prepared to get the most out of Odoo. Our goal is not just to get your Odoo system running, but to help your business optimize its processes, increase productivity, and stay ahead of the competition. With OKS, you have a trusted partner who understands your business and works alongside you to drive long-term success.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Trust Reasons */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {trustReasons.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <reason.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        {reason.title}
                                    </h3>
                                    <p className="text-foreground/70">{reason.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
