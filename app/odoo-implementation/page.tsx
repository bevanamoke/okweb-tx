import Link from "next/link"
import { ArrowRight, CheckCircle2, ArrowLeft, Rocket } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Odoo Implementation Services | OKS",
    description: "End-to-end Odoo implementation tailored to your unique business processes. Launch your ERP with confidence.",
}

export default function OdooImplementationPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            {/* Navigation */}
            <div className="container mx-auto px-4 max-w-7xl mb-8">
                <Link
                    href="/odoo"
                    className="inline-flex items-center text-foreground/60 hover:text-primary transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Odoo Services
                </Link>
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 max-w-7xl mb-20 md:mb-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                            <Rocket className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Seamless Odoo Implementation
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
                            Launch your ERP with confidence. We handle everything from requirements analysis to final deployment.
                        </p>
                        <Link
                            href="/quote"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                        >
                            Start Your Implementation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>

                    {/* Visual/Abstract Graphic */}
                    <div className="relative h-[400px] rounded-3xl bg-card border border-border p-8 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
                        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 opacity-90">Why Choose This?</h3>
                                <div className="h-1 w-20 bg-primary rounded-full mb-6" />
                            </div>
                            <div className="grid gap-4">
                                {["Needs Assessment & Gap Analysis", "Server Setup & Configuration", "Module Installation"].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Content */}
            <section className="container mx-auto px-4 max-w-4xl">
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full" />
                        Key Benefits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Needs Assessment & Gap Analysis",
                            "Server Setup & Configuration",
                            "Module Installation",
                            "Data Import",
                            "Go-Live Support"
                        ].map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>
                                <span className="text-lg text-foreground/80">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
                    <h2 className="text-3xl font-bold mb-6 relative z-10">Our Process</h2>
                    <p className="text-xl text-foreground/70 leading-relaxed relative z-10">
                        Our implementation process is agile and transparent, ensuring you're involved at every step.
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                question: "How long does a typical implementation take?",
                                answer: "For standard implementations, it typically takes 2-4 weeks. For more complex, multi-department setups requiring customization, it can take 2-3 months."
                            },
                            {
                                question: "Do I need to buy my own servers?",
                                answer: "Not necessarily. We can host Odoo for you on our secure cloud servers, or we can set it up on your own on-premise hardware if you prefer."
                            },
                            {
                                question: "What happens if we need to change our workflow later?",
                                answer: "Odoo is highly modular. We can adjust configurations or add new modules as your business evolves without disrupting your operations."
                            }
                        ].map((item, i) => (
                            <details key={i} className="group bg-card border border-border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg hover:text-primary transition-colors">
                                    {item.question}
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-foreground/70 leading-relaxed border-t border-border/50 pt-4">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="container mx-auto px-4 text-center pb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
                <Link
                    href="/quote"
                    className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
                >
                    Get a Quote
                </Link>
            </section>
        </main>
    )
}
