import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, GraduationCap, Users, BookOpen, Calendar, ShieldCheck, Laptop2, Bell, Store, Bus, Calculator, Package, UserCog } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Odoo School Management Software | OKS - Smarter School Administration",
    description:
        "Comprehensive School Management System. Automate admissions, attendance, fees, and academic planning with Odoo.",
}

export default function EducationPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mx-auto mb-8">
                            <GraduationCap className="w-4 h-4 text-primary" />
                            <span className="text-xs font-semibold text-primary tracking-wider">ODOO SCHOOL MANAGEMENT</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Smarter School Administration <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Better Learning Experience</span>
                        </h1>
                        <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
                            Managing a modern educational institution goes far beyond classrooms and lectures. Odoo School Management Software brings admissions, attendance, academic planning, and fees into one powerful digital platform.
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
                    <h2 className="text-3xl font-bold mb-6">Why Choose Odoo for Education?</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        Manual processes and disconnected systems slow down school operations and increase errors. Odoo eliminates these challenges by providing a centralized, role-based management system that improves efficiency, transparency, and collaboration across your institution.
                    </p>
                    <p className="text-xl font-medium text-primary">
                        With Odoo, school management becomes organized, automated, and effortless.
                    </p>
                </div>
            </section>

            {/* Key Roles / Portals */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Key Features & Portals</h2>
                        <p className="text-foreground/70">A unified platform for Admins, Teachers, and Students</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Admin Portal */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Centralized Administration</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Admins can manage all academic and administrative activities from a single dashboard with real-time insights.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Student admissions & enrollments",
                                        "Attendance monitoring",
                                        "Fee & academic data overview",
                                        "Faculty management",
                                        "Class scheduling",
                                        "Notice board & announcements"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Teacher Portal */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <Laptop2 className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Teacher Portal</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    Simplifies academic planning and classroom management, allowing educators to focus more on teaching.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Personalized teaching dashboard",
                                        "Lesson planning & scheduling",
                                        "Assignment management",
                                        "Access to assigned classes",
                                        "Track student progress",
                                        "Notice board updates"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Student Portal */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="bg-primary/10 p-6 flex items-center gap-4">
                                <BookOpen className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Student Portal</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-foreground/70 mb-6">
                                    A self-service experience that keeps learners informed, organized, and engaged with their academics.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Academic schedules & timetables",
                                        "Assignments & updates",
                                        "Fee summaries & history",
                                        "Monthly overviews",
                                        "Important notifications",
                                        "Class information"
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

            {/* Extended School Operations */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Extended School Operations Modules</h2>
                        <p className="text-foreground/70">Digitize and automate every aspect of your campus</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Library */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Library Management</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Digitize and automate library operations with ease.</p>
                            <ul className="space-y-2">
                                {[
                                    "Book catalog & classification",
                                    "Issue and return tracking",
                                    "Due date reminders & penalties",
                                    "Library usage reports"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* School Store */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Store className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">School Store & Bookshop</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Manage on-campus stores efficiently with built-in sales tools.</p>
                            <ul className="space-y-2">
                                {[
                                    "Books & uniforms management",
                                    "Stock tracking & replenishment",
                                    "Sales & billing management",
                                    "Inventory reporting"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Fleet */}
                        <div className="group p-8 border border-border rounded-xl hover:border-primary/50 transition-all bg-card">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Bus className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Fleet & Transportation</h3>
                            <p className="text-foreground/70 mb-4 text-sm">Ensure safe and organized transportation for students.</p>
                            <ul className="space-y-2">
                                {[
                                    "Bus & vehicle management",
                                    "Driver & route assignments",
                                    "Fuel & cost tracking",
                                    "Compliance reports"
                                ].map((item, i) => (
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

            {/* Financial & Operational Management */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">Financial & Operational Management</h2>
                        <p className="text-foreground/70">Run your institution like a tightly managed enterprise</p>
                    </div>

                    <div className="grid gap-8">
                        {[
                            {
                                icon: Calculator,
                                title: "Accounting & Finance",
                                desc: "Manage all financial operations with transparency and accuracy.",
                                features: ["Student fee management", "Invoicing & payments", "Expense tracking", "Payroll integration", "Financial audits"]
                            },
                            {
                                icon: Package,
                                title: "Inventory Management",
                                desc: "Track and control school assets and supplies efficiently.",
                                features: ["Stock management across departments", "Lab & store inventory", "Purchase & vendor management", "Automated stock updates"]
                            },
                            {
                                icon: UserCog,
                                title: "Human Resource (HR)",
                                desc: "Streamline staff and faculty administration.",
                                features: ["Employee records", "Attendance & leave management", "Payroll processing", "Contracts & compliance", "Performance tracking"]
                            }
                        ].map((mod, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row gap-6 p-8 bg-card border border-border rounded-xl items-start">
                                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <mod.icon className="w-8 h-8 text-accent" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
                                    <p className="text-foreground/70 mb-4">{mod.desc}</p>
                                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                                        {mod.features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Using Odoo</h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        {[
                            "Automated workflows reduce manual effort",
                            "Improved communication between all parties",
                            "Real-time data access for better decision-making",
                            "Role-based dashboards for enhanced usability",
                            "Scalable solution for growing institutions",
                            "Seamless user experience across all departments"
                        ].map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card/50">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                </div>
                                <span className="font-medium text-lg">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-black text-white rounded-2xl text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Built on the Power of Odoo</h3>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Odoo Education Management System leverages the flexibility and scalability of the Odoo platform, making it easy to customize and extend according to your institution’s needs. Whether you manage a small school or a large educational network, Odoo adapts as you grow.
                            </p>
                        </div>
                        {/* Abstract bg shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Transform the Way You Manage Education</h2>
                    <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                        Simplify your school operations, improve academic efficiency, and deliver a better experience to teachers and students.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="h-12 px-8 text-base" asChild>
                            <Link href="/quote">
                                Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <p className="text-sm text-foreground/60 mt-4 sm:mt-0">
                            Need customization? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>
                        </p>
                    </div>
                </div>
            </section>
        </main >
    )
}
