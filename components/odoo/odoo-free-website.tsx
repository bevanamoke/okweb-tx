"use client"

import { motion } from "framer-motion"
import { Monitor, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OdooFreeWebsite() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                            <Monitor className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary tracking-wider uppercase">Exclusive Benefit</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Get a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Free Website</span> with Odoo
                        </h2>

                        <p className="text-xl text-foreground/80 leading-relaxed">
                            Did you know? When you implement Odoo for your business, you get a fully integrated, professional website builder included at no extra cost.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Drag-and-drop website builder",
                                "Integrated e-commerce store",
                                "Mobile-responsive themes",
                                "SEO optimization tools",
                                "Direct link to inventory & CRM"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    </div>
                                    <span className="font-medium text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                            <Link href="/web-app-development">
                                Explore Website Features <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Visual Representation */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-card border border-border rounded-xl shadow-2xl p-2 md:p-4 transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                                {/* Abstract website preview */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-muted-foreground/10 flex items-center px-4 gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <div className="ml-4 w-1/3 h-4 rounded-full bg-background" />
                                </div>
                                <div className="mt-8 p-8 space-y-4">
                                    <div className="h-8 w-3/4 bg-foreground/10 rounded" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-32 bg-primary/10 rounded" />
                                        <div className="space-y-2">
                                            <div className="h-4 w-full bg-foreground/5 rounded" />
                                            <div className="h-4 w-5/6 bg-foreground/5 rounded" />
                                            <div className="h-4 w-4/6 bg-foreground/5 rounded" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating overlay */}
                                <div className="absolute bottom-8 right-8 bg-background/80 backdrop-blur-md border border-border p-4 rounded-lg shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">$0</div>
                                        <div>
                                            <div className="font-bold text-sm">Included Free</div>
                                            <div className="text-xs text-foreground/60">Lifetime License</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Background Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
