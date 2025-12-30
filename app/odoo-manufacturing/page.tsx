import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Factory, Settings, Warehouse, BarChart3, Wrench, Ruler, FileText, Share2, ShieldCheck, ClipboardList } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Odoo for Manufacturing | OKS - MRP, PLM & Quality",
    description:
        "End-to-end Manufacturing support. Bill of Materials, production planning, quality control, maintenance, and PLM with Odoo.",
}

export default function ManufacturingPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mx-auto mb-8">
                            <Factory className="w-4 h-4 text-primary" />
                            <span className="text-xs font-semibold text-primary tracking-wider">MANUFACTURING SOLUTION</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Optimize Production with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Odoo MRP</span>
                        </h1>
                        <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
                            Plan, track, and schedule your manufacturing operations in real-time. Integrate your shop floor with inventory, quality control, and maintenance.
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
                    <h2 className="text-3xl font-bold mb-6">Modern Manufacturing, Simplified</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        Legacy MRP systems are clunky and expensive. Odoo offers a modern, flexible solution that handles everything from simple assembly to complex multi-level production. With integrated IoT boxes, you can even connect your machines directly to the software for automatic data collection.
                    </p>
                    <p className="text-xl font-medium text-primary">
                        Streamline your workflow and Boost Overall Equipment Effectiveness (OEE).
                    </p>
                </div>
            </section>

            {/* Core Functionality */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Complete Production Control</h2>
                        <p className="text-foreground/70">From Engineering to Maintenance</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Engineering */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Share2 className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Engineering (PLM)</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Manage engineering changes and versions with ease.
                                </p>
                                <ul className="space-y-3">
                                    {["Bill of Materials (BOM) management", "Version control & ECOs", "Document management", "Cost estimation per BOM", "Routing design"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Production */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Settings className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Manufacturing (MRP)</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Schedule work orders and track production usage.
                                </p>
                                <ul className="space-y-3">
                                    {["Master Production Schedule (MPS)", "Work center capacity planning", "Tablet view for shop floor", "Time tracking per operation", "Scrap management"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Quality */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Quality Control</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Ensure high standards with integrated checks.
                                </p>
                                <ul className="space-y-3">
                                    {["Quality control points", "Pass/Fail tests", "Measurement recording", "Alerts for deviations", "Quality checks on incoming inventory"].map((item, i) => (
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

            {/* Extended Operations */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Integrated Operations</h2>
                        <p className="text-foreground/70">Connect production to the rest of your business</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Maintenance */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Wrench className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Maintenance</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Keep your machines running.</p>
                            <ul className="space-y-2">
                                {["Preventive maintenance scheduling", "Corrective maintenance requests", "Equipment tracking", "Mean Time Between Failures (MTBF)"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Inventory */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Warehouse className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Inventory Integration</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Automate stock moves.</p>
                            <ul className="space-y-2">
                                {["Raw material traceability", "Finished goods tracking", "Lot/Serial number tracking", "Multi-warehouse support"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Shop Floor */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <ClipboardList className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Work Orders</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Paperless instructions.</p>
                            <ul className="space-y-2">
                                {["Digital worksheets", "PDF/Slide instructions", "Time tracking", "Operator login"].map((item, i) => (
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
                    <h2 className="text-3xl font-bold mb-6">Streamline Manufacturing</h2>
                    <Button size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="/quote">
                            Get MRP Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
