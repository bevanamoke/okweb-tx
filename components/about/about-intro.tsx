"use client"

import { motion } from "framer-motion"

export default function AboutIntro() {
    return (
        <section className="py-20 md:py-32 px-4 bg-card/30">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                        <span className="font-bold text-primary">OKS (Omnitech Kernel Solutions)</span> is a technology solutions company focused on helping businesses operate smarter, scale faster, and make better decisions through well-designed digital systems.
                    </p>

                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                        We partner with startups, SMEs, and growing organizations to design, implement, and support business management systems, custom software, and AI-powered automation that replace manual processes and fragmented tools.
                    </p>

                    <div className="pt-6">
                        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8">
                            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic">
                                At OKS, we believe technology should be practical, reliable, and aligned with real business workflows. Our approach emphasizes clarity, efficiency, and long-term value.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
