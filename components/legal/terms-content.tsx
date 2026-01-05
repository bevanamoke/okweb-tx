"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function TermsContent() {
    return (
        <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <FileText className="w-10 h-10 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2">
                            Terms of Service
                        </h1>
                    </div>
                    <p className="text-foreground/60">Last Updated: January 4, 2026</p>
                </motion.div>

                <div className="space-y-12 text-foreground/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. OmniTech Kernel Solutions (OKS) reserves the right to update these terms at any time without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials on OKS's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
                        <p>
                            The materials on OKS's website are provided on an 'as is' basis. OKS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
                        <p>
                            In no event shall OKS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OKS's website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of Kenya and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>

                    <section className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xl">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Contacting Us</h2>
                        <p>If you have any questions regarding these Terms of Service, you may contact us using the information below:</p>
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-primary">Email:</span>
                                <a href="mailto:info@oks.co.ke" className="hover:text-primary transition">info@oks.co.ke</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
