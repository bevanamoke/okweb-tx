"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Store, GraduationCap, Utensils, Factory, Building2, Truck, Stethoscope, Bus } from "lucide-react"

const industries = [
    {
        icon: Store,
        name: "Retail & Wholesale",
        slug: "retail-wholesale",
        description: "POS, inventory management, and multi-location support"
    },
    {
        icon: Utensils,
        name: "Restaurants & Hospitality",
        slug: "restaurants-hospitality",
        description: "Table management, kitchen display, and recipe costing"
    },
    {
        icon: GraduationCap,
        name: "Education",
        slug: "education",
        description: "Student management, fee collection, and academic tracking"
    },
    {
        icon: Factory,
        name: "Manufacturing",
        slug: "manufacturing",
        description: "Production planning, BOM management, and quality control"
    },
    {
        icon: Stethoscope,
        name: "Hospital & Pharmacy",
        slug: "hospital-pharmacy",
        description: "Patient records, pharmacy inventory, and appointments"
    },
    {
        icon: Bus,
        name: "Public Service Transport",
        slug: "public-transport",
        description: "Fleet management, route scheduling, and passenger ticketing"
    }
]

export default function OdooIndustries() {
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
                        Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Serve</span>
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        Odoo adapts to your industry's unique needs with specialized features and workflows
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, idx) => (
                        <Link key={idx} href={`/odoo-${industry.slug}/`} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                            >
                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                    <industry.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{industry.name}</h3>
                                <p className="text-foreground/70 flex-grow">{industry.description}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
