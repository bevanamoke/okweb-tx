import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Bus, MapPin, Ticket, Wrench, Users, Fuel, ClipboardCheck, BarChart3, CreditCard, ShieldCheck } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Odoo for Public Transport | OKS - Fleet & Ticketing",
    description:
        "Complete management for bus companies, saccos, and shuttles. Fleet tracking, passenger ticketing, and route scheduling.",
}

export default function PublicTransportPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mx-auto mb-8">
                            <Bus className="w-4 h-4 text-primary" />
                            <span className="text-xs font-semibold text-primary tracking-wider">TRANSPORT SOLUTION</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Modernize Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Public Transport</span>
                        </h1>
                        <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
                            From ticketing to fleet maintenance. Manage your entire transport operation including buses, shuttles, ticketing, and staff in one unified platform.
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
                    <h2 className="text-3xl font-bold mb-6">Efficiency on the Road</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        Managing a fleet of public service vehicles (PSVs) requires tight control over costs and revenue. Odoo provides end-to-end visibility: track every ticket sold, monitor fuel consumption per vehicle, and ensure timely maintenance to prevent breakdowns.
                    </p>
                    <p className="text-xl font-medium text-primary">
                        Maximize fleet uptime and revenue per seat.
                    </p>
                </div>
            </section>

            {/* Core Functionality */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Core Transport Modules</h2>
                        <p className="text-foreground/70">Tools for Conductors, Depot Managers, and Mechanics</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Fleet */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Bus className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Fleet Management</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Keep your vehicles in top condition.
                                </p>
                                <ul className="space-y-3">
                                    {["Vehicle Registration & Logs", "Fuel Consumption Tracking", "Odometer Tracking", "Service & Maintenance Schedules", "Insurance & Compliance Alerts"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Ticketing */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Ticket className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Ticketing & Booking</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Streamline passenger bookings and payments.
                                </p>
                                <ul className="space-y-3">
                                    {["POS for Ticket Offices", "Online & Mobile Booking", "Seat Selection & Manifests", "Parcel/Luggage Booking", "M-Pesa Integration"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Operations */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <MapPin className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Route Operations</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Optimize schedules and assignments.
                                </p>
                                <ul className="space-y-3">
                                    {["Route Planning & Scheduling", "Driver & Conductor Assignment", "Trip Sheets & Waybills", "Depot Management", "Incident Reporting"].map((item, i) => (
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
                        <h2 className="text-3xl font-bold mb-4">Complete Business Control</h2>
                        <p className="text-foreground/70">Manage costs and staff</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Workshop */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Wrench className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Workshop & Parts</h3>
                            <p className="text-foreground/70 mb-4 text-sm">In-house maintenance.</p>
                            <ul className="space-y-2">
                                {["Spare Parts Inventory", "Job Cards for Repairs", "Mechanic Performance", "External Service Tracking"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* HR */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Driver Management</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Track your crew.</p>
                            <ul className="space-y-2">
                                {["Driver Licensing & Expiry", "Shift Scheduling", "Disciplinary Records", "Payroll & Allowance"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Inspection */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <ClipboardCheck className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Daily Inspections</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Safety first.</p>
                            <ul className="space-y-2">
                                {["Mobile Inspection App", "Pre-trip Checklists", "Damage Reporting", "Safety Compliance"].map((item, i) => (
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
                    <h2 className="text-3xl font-bold mb-6">Drive Your Business Forward</h2>
                    <Button size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="/quote">
                            Get Transport Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
