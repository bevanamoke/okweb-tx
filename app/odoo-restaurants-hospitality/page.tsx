import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Utensils, ChefHat, QrCode, ClipboardList, Wine, Clock, Users, Receipt, Laptop } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Odoo for Restaurants & Hospitality | OKS - POS & Kitchen Management",
    description:
        "Complete management system for restaurants, cafes, and bars. Table management, kitchen display, inventory, and online ordering.",
}

export default function RestaurantPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mx-auto mb-8">
                            <Utensils className="w-4 h-4 text-primary" />
                            <span className="text-xs font-semibold text-primary tracking-wider">HOSPITALITY SOLUTION</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Streamline Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Restaurant Operations</span>
                        </h1>
                        <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
                            From the front-of-house to the kitchen, Odoo connects every aspect of your hospitality business. Manage orders, tables, recipes, and inventory in one unified system.
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
                    <h2 className="text-3xl font-bold mb-6">The Recipe for Success</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        Running a restaurant is chaotic. Your software shouldn't be. Odoo replaces your disconnected point-of-sale, inventory spreadsheets, and employee scheduling tools with a single platform. Whether you run a cozy cafe, a busy bar, or a fine dining establishment, Odoo helps you serve customers faster and control your costs better.
                    </p>
                    <p className="text-xl font-medium text-primary">
                        Efficient service, satisfied guests, and profitable operations.
                    </p>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Complete Hospitalty Management</h2>
                        <p className="text-foreground/70">Tools for Waiters, Chefs, and Managers</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Floor Management */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Utensils className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Smart POS & Floor Plan</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Design your floor map and manage tables visually. Keep track of occupied seats and waiting guests.
                                </p>
                                <ul className="space-y-3">
                                    {["Visual table management", "Split bills & multiple payments", "Tip management", "Order transfer (Bar to Table)", "Offline mode support"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Kitchen */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <ChefHat className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Kitchen Display System</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Send orders directly to the kitchen or bar. Improve communication and reduce errors.
                                </p>
                                <ul className="space-y-3">
                                    {["Real-time order routing", "Separate screens for Bar & Kitchen", "Order preparation timer", "Wait-staff notifications", "Eliminates paper tickets"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Online Ordering */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <QrCode className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Online & QR Ordering</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Let customers order from their phone—at the table or from home.
                                </p>
                                <ul className="space-y-3">
                                    {["QR code menu & ordering", "Click & Collect setup", "Integrated delivery management", "Digital menu updates in seconds", "Contactless payment"].map((item, i) => (
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

            {/* Operational Efficiency */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Master Your Operations</h2>
                        <p className="text-foreground/70">Beyond simple ordering</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Inventory */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <ClipboardList className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Inventory & Recipes</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Track ingredients down to the gram.</p>
                            <ul className="space-y-2">
                                {["Bill of Materials (Recipes)", "Automated stock deduction", "Food cost calculation", "Internal transfers"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Staff */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Employee Management</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Manage shifts and access.</p>
                            <ul className="space-y-2">
                                {["Shift planning & scheduling", "Clock-in/Clock-out tracking", "Wait-staff performance tracking", "Access control per user"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Reporting */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Receipt className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Financial Reporting</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Know your numbers daily.</p>
                            <ul className="space-y-2">
                                {["Daily sales reports", "Product category analysis", "Profit margin reports", "Tax reporting"].map((item, i) => (
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

            {/* CTA */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Run a Smarter Restaurant</h2>
                    <Button size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="/quote">
                            Get Restaurant Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
