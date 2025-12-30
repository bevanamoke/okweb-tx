import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, ShoppingCart, BarChart3, Package, Users, Store, Globe, CreditCard, Tag, Truck, Calculator, ShieldCheck } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Odoo for Retail & Wholesale | OKS - Integrated POS & Inventory",
    description:
        "Transform your retail business with Odoo. Unified Point of Sale, inventory management, and multi-store support for Kenyan retailers.",
}

export default function RetailPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mx-auto mb-8">
                            <ShoppingCart className="w-4 h-4 text-primary" />
                            <span className="text-xs font-semibold text-primary tracking-wider">RETAIL & WHOLESALE SOLUTION</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Unified Retail Management <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Seamless Online & Offline Sales</span>
                        </h1>
                        <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
                            Stop juggling separate systems for POS, inventory, and accounting. Odoo gives you a single platform to manage your shops, warehouses, and online store in real-time.
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

            {/* Why Choose Odoo */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose Odoo for Retail?</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        In retail, speed and accuracy are everything. Legacy systems that don't talk to each other lead to stockouts, pricing errors, and unhappy customers. Odoo unifies your entire operation—from the cash register to the back office—ensuring that every sale, return, and purchase order is instantly reflected across your business.
                    </p>
                    <p className="text-xl font-medium text-primary">
                        Sell faster, buy smarter, and grow your retail empire with Odoo.
                    </p>
                </div>
            </section>

            {/* Key Roles / Capabilities */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Powerful Features for Every Role</h2>
                        <p className="text-foreground/70">Tools designed for Cashiers, Store Managers, and Warehouse Teams</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Point of Sale */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Store className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Smart Point of Sale</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    A lightning-fast interface that works even offline. Process transactions in seconds.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Works offline (synchs when online)",
                                        "Integrated with barcode scanners",
                                        "Multiple payment methods (M-Pesa, Card)",
                                        "Customer history & loyalty points",
                                        "Real-time stock visibility",
                                        "Session opening/closing controls"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Inventory */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Package className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Inventory Control</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Never run out of stock. Automate replenishment and track products across multiple locations.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Multi-warehouse management",
                                        "Automated reordering rules",
                                        "Barcode scanning for receiving",
                                        "Stock valuation (FIFO/LIFO/AVCO)",
                                        "Product variants (Size, Color)",
                                        "Expiration date tracking"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Omni-Channel */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Globe className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">eCommerce Integration</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Expand your reach by selling online. Your website and physical store share the same inventory.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Free integrated website builder",
                                        "Click & Collect support",
                                        "Unified customer database",
                                        "Automatic stock updates",
                                        "Promotions & coupon codes",
                                        "Abandoned cart recovery"
                                    ].map((item, i) => (
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

            {/* Benefits */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Extended Retail Operations</h2>
                        <p className="text-foreground/70">Everything you need to scale your business</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Loyalty */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Tag className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Loyalty & Promotions</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Keep customers coming back with rewards.</p>
                            <ul className="space-y-2">
                                {["Point-based reward systems", "Gift card management", "Seasonal discount programs", "Targeted email marketing"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Purchasing */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Truck className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Procurement</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Automate your supply chain.</p>
                            <ul className="space-y-2">
                                {["Vendor price lists", "Purchase tenders", "Dropshipping support", "Landed cost calculation"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Accounting */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Calculator className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Integrated Accounting</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Real-time financial insights.</p>
                            <ul className="space-y-2">
                                {["Automated daily journals", "Profit & Loss per store", "Tax reporting", "Bank reconciliation"].map((item, i) => (
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

            {/* Final CTA */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Shop?</h2>
                    <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                        Get a complete retail management system that grows with your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="h-12 px-8 text-base" asChild>
                            <Link href="/quote">
                                Get Customized Quote <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <p className="text-sm text-foreground/60 mt-4 sm:mt-0">
                            Or <Link href="/contact" className="text-primary hover:underline">speak to an expert</Link>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
