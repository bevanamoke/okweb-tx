import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Stethoscope, Pill, Activity, Calendar, ClipboardList, User2, HeartPulse, Microscope, Truck } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Odoo for Hospital & Pharmacy | OKS - Healthcare ERP",
    description:
        "Integrated management for hospitals, clinics, and pharmacies. Patient records, pharmacy inventory (FEFO), appointments, and billing.",
}

export default function HospitalPharmacyPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mx-auto mb-8">
                            <Stethoscope className="w-4 h-4 text-primary" />
                            <span className="text-xs font-semibold text-primary tracking-wider">HEALTHCARE SOLUTION</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Modern Management for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Hospitals & Pharmacies</span>
                        </h1>
                        <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
                            Focus on patient care while Odoo handles the operations. Seamlessly integrate your pharmacy, laboratory, appointments, and billing into one secure system.
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
                    <h2 className="text-3xl font-bold mb-6">Patient-Centric Operations</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        In healthcare, precision is non-negotiable. Odoo helps you manage sensitive data like patient records and critical inventory like pharmaceuticals with absolute accuracy. Prevent drug expiry losses with FEFO (First Expired, First Out) strategies and ensure every appointment runs on time.
                    </p>
                    <p className="text-xl font-medium text-primary">
                        Better operations mean better patient outcomes.
                    </p>
                </div>
            </section>

            {/* Core Functionality */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Core Healthcare Modules</h2>
                        <p className="text-foreground/70">From the front desk to the dispensary</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Pharmacy */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Pill className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Smart Pharmacy</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Control drug inventory with strict expiry management.
                                </p>
                                <ul className="space-y-3">
                                    {["FEFO Removal Strategy (First Expired, First Out)", "Batch & Lot Number Tracking", "Prescription-based Sales", "Drug Interaction Alerts (Custom)", "Automated Reordering"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Appointments */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Calendar className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Appointments</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Manage doctor schedules and patient queues efficiently.
                                </p>
                                <ul className="space-y-3">
                                    {["Online Patient Booking", "Doctor Availability Management", "SMS/Email Reminders", "Waiting Room Management", "Recurring Consultations"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Patients */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <User2 className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Patient Records</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    A unified view of every patient's history.
                                </p>
                                <ul className="space-y-3">
                                    {["Electronic Health Records (EHR)", "Treatment History", "Document Attachments (X-Rays, Reports)", "Insurance Details", "Billing History"].map((item, i) => (
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
                        <h2 className="text-3xl font-bold mb-4">Comprehensive Care Operations</h2>
                        <p className="text-foreground/70">Supporting your medical team</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Laboratory */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Microscope className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Laboratory Management</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Track samples and tests.</p>
                            <ul className="space-y-2">
                                {["Sample tracking", "Test result entry", "Report generation", "Lab equipment maintenance"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Procurement */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Truck className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Medical Supply Chain</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Never run out of essentials.</p>
                            <ul className="space-y-2">
                                {["Surgical supply tracking", "Vendor management", "Expiry alerts", "Consumables inventory"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Billing */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <ClipboardList className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Invoicing & Insurance</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Streamline payments.</p>
                            <ul className="space-y-2">
                                {["Insurance claim preparation", "Split billing (Patient vs Insurance)", "Service packages", "Cashless payments"].map((item, i) => (
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
                    <h2 className="text-3xl font-bold mb-6">Modernize Your Healthcare Facility</h2>
                    <Button size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="/quote">
                            Get Healthcare Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
