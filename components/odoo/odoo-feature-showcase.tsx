"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function OdooFeatureShowcase() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 max-w-7xl space-y-24">

                {/* Electronic Invoicing */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex items-center justify-center min-h-[400px]"
                    >
                        <div className="text-center text-white space-y-6">
                            <h3 className="text-3xl font-bold">Introduction to Odoo</h3>
                            <h4 className="text-4xl font-bold">E-Invoicing</h4>
                            <p className="text-lg opacity-90">Switch to smarter, automated invoicing with Odoo</p>
                            <div className="relative w-64 h-64 mx-auto">
                                {/* Placeholder for invoice illustration */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                                        <svg className="w-32 h-32 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">Electronic Invoicing (E-Invoices)</h2>
                        <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                            <p>
                                Odoo Community Edition offers fully integrated electronic invoicing (E-Invoices), allowing businesses to create, send, and validate invoices that comply with international tax and regulatory standards. Whether you're operating in Kenya, East Africa, or anywhere else, Odoo makes it easy to stay compliant with systems like eTIMS, ZATCA, and more.
                            </p>
                            <p>
                                This feature helps businesses reduce manual errors, speed up invoice processing, and simplify tax reporting — all from within a single platform. With E-Invoicing, your financial operations become more efficient, accurate, and ready for the digital future.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Security & Compliance */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 order-2 lg:order-1"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">Security & Compliance</h2>
                        <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                            <p>
                                Odoo Community Edition delivers enhanced security and compliance, making it the trusted choice for serious businesses. With built-in user access control, regular security patches, and GDPR-ready tools, it protects your data and operations at every level.
                            </p>
                            <p>
                                You get peace of mind knowing your business is backed by an enterprise-grade system that's built for stability, safety, and global standards. Your data stays secure on your own servers with full control and privacy.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden border border-border shadow-2xl order-1 lg:order-2"
                    >
                        <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8">
                            <div className="text-center space-y-4">
                                <div className="flex justify-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-4xl font-bold text-primary">Odoo</div>
                                <p className="text-xl font-semibold text-foreground/80">Enhances Data Security<br />and Compliance</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Installation & Configuration */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 p-12 flex items-center justify-center min-h-[400px]"
                    >
                        <div className="text-center text-white space-y-6">
                            <div className="relative w-64 h-64 mx-auto">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
                                        <svg className="w-32 h-32 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-2xl font-bold">Install Odoo</div>
                                <div className="text-xl">and Configure on</div>
                                <div className="text-2xl font-bold">Ubuntu</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">Odoo Installation & Configuration Process</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Direct Installation on Your Server",
                                    description: "The Odoo solution will be installed directly on your server, giving you full control over your system."
                                },
                                {
                                    title: "Server Setup Assistance",
                                    description: "If you don't have a server, we'll assist you in setting up the server for smooth installation."
                                },
                                {
                                    title: "Expert Support",
                                    description: "Our team will provide remote desktop assistance throughout the setup and configuration process to ensure a hassle-free experience."
                                },
                                {
                                    title: "Ubuntu Server Setup",
                                    description: "We will install Odoo on an Ubuntu server, ensuring optimal performance, stability, and smooth operation."
                                },
                                {
                                    title: "Fully Operational System",
                                    description: "Once the installation is complete, the system will be fully configured and ready for use. You'll receive a fully operational Odoo system."
                                }
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-lg">{step.title}</p>
                                        <p className="text-foreground/70">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
