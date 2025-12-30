"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Package, BarChart3, Users, Briefcase, Settings, Globe, Calendar } from "lucide-react"

const modules = [
    {
        icon: ShoppingCart,
        name: "Point of Sale",
        description: "Modern POS system for retail and restaurants with offline mode"
    },
    {
        icon: Package,
        name: "Inventory",
        description: "Real-time stock management with barcode scanning and tracking"
    },
    {
        icon: BarChart3,
        name: "Accounting",
        description: "Complete financial management with automated invoicing"
    },
    {
        icon: Users,
        name: "CRM & Sales",
        description: "Manage leads, opportunities, and customer relationships"
    },
    {
        icon: Briefcase,
        name: "HR & Payroll",
        description: "Employee management, attendance, and payroll processing"
    },
    {
        icon: Settings,
        name: "Manufacturing",
        description: "Production planning, work orders, and quality control"
    },
    {
        icon: Globe,
        name: "eCommerce",
        description: "Online store integrated with inventory and accounting"
    },
    {
        icon: Calendar,
        name: "Project Management",
        description: "Task tracking, timesheets, and project planning"
    }
]

export default function OdooModules() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Modules</span>
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        Choose from 50+ integrated business applications. Start with what you need and expand as you grow.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modules.map((module, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                <module.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{module.name}</h3>
                            <p className="text-sm text-foreground/70">{module.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 mb-12"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl max-w-5xl mx-auto">
                        <img
                            src="/odoo-modules-apps.png"
                            alt="All your business on one platform - Odoo Apps"
                            className="w-full h-auto"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-foreground/60 mb-4">And many more...</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Purchasing", "Helpdesk", "Email Marketing", "Surveys", "Appointments", "Live Chat"].map((item, idx) => (
                            <span key={idx} className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm font-medium">
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
