import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Building2, Briefcase, Clock, FileText, Share2, Users, Calendar, Banknote } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Odoo for Professional Services | OKS - Projects & Timesheets",
    description:
        "Project management, timesheets, and billing for service companies. Consultants, agencies, and firms.",
}

export default function ProfessionalServicesPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mx-auto mb-8">
                            <Building2 className="w-4 h-4 text-primary" />
                            <span className="text-xs font-semibold text-primary tracking-wider">SERVICES SOLUTION</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Simplify Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Service Business</span>
                        </h1>
                        <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
                            Stop losing billable hours. Odoo integrates Project Management, Timesheets, and Invoicing into one smooth workflow, so you can focus on delivering value to your clients.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90" asChild>
                                <Link href="/quote">
                                    Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Built for Agencies & Firms</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        Managing a service business requires balancing client expectations, team utilization, and profitability. Odoo gives you 360-degree visibility into your projects. Track time effortlessly, invoice accurately based on work done, and predict future resource needs—all from a single dashboard.
                    </p>
                    <p className="text-xl font-medium text-primary">
                        Delight your clients and get paid faster.
                    </p>
                </div>
            </section>

            {/* Core Functions */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Core Service Modules</h2>
                        <p className="text-foreground/70">Manage the entire project lifecycle</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Projects */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Briefcase className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Project Management</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Agile, Modern, and Flexible. Organize tasks your way.
                                </p>
                                <ul className="space-y-3">
                                    {["Kanban, Gantt, and List views", "Task dependencies & subtasks", "Document sharing", "Client collaboration portal", "Project profitability report"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Timesheets */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Clock className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Timesheets</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Track time anywhere—on mobile, desktop, or via Chrome extension.
                                </p>
                                <ul className="space-y-3">
                                    {["Mobile app & offline mode", "Grid view for quick entry", "Timer integration in tasks", "Manager validation workflows", "Billable vs. Non-billable tracking"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Invoicing */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <FileText className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Smart Invoicing</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Turn hours into invoices in one click.
                                </p>
                                <ul className="space-y-3">
                                    {["Invoice based on timesheets", "Fixed price or milestones", "Recurring subscriptions", "Automated follow-ups", "Online payment integration"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extended */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Scale Your Agency</h2>
                        <p className="text-foreground/70">Tools for growth</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Sales */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">CRM & Sales</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Close more deals.</p>
                            <ul className="space-y-2">
                                {["Drag & drop pipeline", "Quotation templates", "E-signature", "Automated lead assignment"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Helpdesk */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Share2 className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Helpdesk</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Support your clients.</p>
                            <ul className="space-y-2">
                                {["Ticket management", "SLA policies", "Customer satisfaction ratings", "Knowledge base"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Expenses */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Banknote className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Expenses</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Track spending easily.</p>
                            <ul className="space-y-2">
                                {["Scan receipts with OCR", "Re-invoice expenses to clients", "Manager approval flow", "Company card integration"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Optimize Your Service Business</h2>
                    <Button size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="/quote">
                            Get Services Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
