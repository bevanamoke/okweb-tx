"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        About{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            OKS
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                        Omnitech Kernel Solutions
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
