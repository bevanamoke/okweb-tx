"use client"

import { odooServices } from "@/lib/odoo-services-data"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function OdooServices() {
  return (
    <section id="services" className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 inline-block relative"
          >
            Our <span className="relative z-10">Services</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -rotate-1 z-0 rounded-full" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70 max-w-2xl leading-relaxed"
          >
            Streamline lead creation, team assignments, and scheduled activities,
            so you can focus on what truly matters.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {odooServices.map((service, idx) => (
            <Link key={service.id} href={`/odoo-${service.slug}/`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group h-full bg-card border border-border p-8 rounded-2xl hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-foreground/70 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
