"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export default function PrivacyContent() {
    return (
        <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Shield className="w-10 h-10 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2">
                            Privacy Policy
                        </h1>
                    </div>
                    <p className="text-foreground/60">Last Updated: January 4, 2026</p>
                </motion.div>

                <div className="space-y-12 text-foreground/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                        <p>
                            At OmniTech Kernel Solutions (OKS), your privacy is our priority. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services. By using our website, you agree to the practices described in this policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                        <p>We may collect information in two ways:</p>
                        <ul className="list-disc pl-6 space-y-4 mt-4">
                            <li>
                                <strong className="text-foreground">Direct Information:</strong> Personal details you provide through contact forms, quote requests, or consultations (e.g., name, email, phone number, company name).
                            </li>
                            <li>
                                <strong className="text-foreground">Automated Information:</strong> Technical data collected automatically via cookies and analytics, such as IP address, browser type, device information, and usage patterns to improve our platform's performance.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                        <p>We use the collected data to:</p>
                        <ul className="list-disc pl-6 space-y-3 mt-4">
                            <li>Deliver and improve our technological solutions and services.</li>
                            <li>Respond to inquiries and provide technical support.</li>
                            <li>Send updates about our services (where you have opted in).</li>
                            <li>Enhance website security and performance.</li>
                            <li>Comply with relevant legal and regulatory requirements.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                        <p>
                            We implement robust technical and organizational security measures to protect your data from unauthorized access, alteration, or disclosure. Our infrastructure is designed following best practices in encryption and access control. However, please note that no transmission over the internet can be guaranteed as 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
                        <p>
                            We do not sell your personal data. We may share information with trusted third-party service providers (such as cloud hosting partners or analytics platforms like Vercel Analytics) who assist us in operating our website and conducting our business, provided they agree to keep this information confidential and secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                        <p>
                            You have the right to request access to the personal information we hold about you, request corrections if the data is inaccurate, or request deletion of your information under certain circumstances. To exercise these rights, please contact our data protection team.
                        </p>
                    </section>

                    <section className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xl">
                        <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or our data practices, please reach out to us:</p>
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-primary">Email:</span>
                                <a href="mailto:info@oks.co.ke" className="hover:text-primary transition">info@oks.co.ke</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-primary">Website:</span>
                                <a href="https://oks.co.ke" className="hover:text-primary transition">www.oks.co.ke</a>
                            </div>
                            <div className="flex items-center gap-2 text-foreground/60 italic text-sm mt-2">
                                Nairobi, Kenya
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
