"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"
import Image from "next/image"

const teamMembers = [
    {
        name: "Eddy Akurwa",
        role: "Co-Founder & Managing Director",
        title: "Software Engineer",
        image: "/team/eddy-amoke.jpg",
        description:
            "Eddy oversees the strategic direction and day-to-day operations of OKS. As a software engineer, he coordinates project delivery, internal operations, and client engagements while ensuring that technical solutions align with business objectives.",
        focus:
            "He plays a key role in translating business needs into practical, well-executed systems and maintaining execution standards across the organization.",
    },
    {
        name: "Bevan Amoke",
        role: "Co-Founder & Chief Technology Officer (CTO)",
        title: "Software Developer",
        image: "/team/bevan-amoke.jpg",
        description:
            "Bevan leads the technical vision and engineering strategy at OKS. As Co-Founder and CTO, he is responsible for system architecture, software design, security, performance, and scalability across all OKS solutions.",
        focus:
            "He oversees complex implementations and ensures that all platforms — including ERP systems, applications, and AI automation workflows — are robust, secure, and future-ready.",
    },
    {
        name: "Sheryl Dormah",
        role: "Co-Founder",
        title: "PR & Sales Representative",
        image: "/team/sheryl-dorma.jpg",
        description:
            "Sheryl leads public relations, communications, and client-facing engagement at OKS. She manages brand positioning, supports sales initiatives, and ensures clear communication between the company and its clients.",
        focus:
            "Her role focuses on building trust, maintaining strong client relationships, and representing OKS professionally across all touchpoints.",
    },
    {
        name: "Brian Gisemba",
        role: "Sales Director",
        title: "Business Development",
        image: "/team/brian-gisemba.jpg",
        description:
            "Brian heads business development and sales strategy. He is responsible for identifying opportunities, managing the sales pipeline, and structuring value-driven solutions that meet client needs.",
        focus:
            "He works closely with the technical team to ensure proposals are practical, scalable, and aligned with business realities.",
    },
    {
        name: "Moses Gituru",
        role: "Accountant",
        title: "Financial Operations",
        image: "/team/moses-gituru.jpg",
        description:
            "Moses manages the financial operations of OKS, including accounting, budgeting, compliance, and financial reporting. He ensures financial discipline, transparency, and sustainable growth.",
        focus:
            "His role supports informed decision-making and strong internal financial controls.",
    },
]

export default function AboutTeam() {
    return (
        <section className="py-20 md:py-32 px-4 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" strokeWidth={2} />
                        </div>
                        <h2 className="text-sm font-bold tracking-wider text-primary uppercase">
                            Leadership & Team
                        </h2>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Meet the Team Behind OKS
                    </h3>
                    <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                        A multidisciplinary team combining strong technical expertise, operational leadership, and client-focused execution.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                                <div className="grid md:grid-cols-[180px_220px_1fr] gap-6 items-start">
                                    {/* Left: Photo */}
                                    <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-muted">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Middle: Name & Role */}
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold text-foreground">
                                            {member.name}
                                        </h4>
                                        <p className="text-primary font-semibold">{member.role}</p>
                                        <p className="text-sm text-foreground/60 font-medium">
                                            {member.title}
                                        </p>
                                    </div>

                                    {/* Right: Description */}
                                    <div className="space-y-4">
                                        <p className="text-foreground/80 leading-relaxed">
                                            {member.description}
                                        </p>
                                        <p className="text-foreground/70 leading-relaxed italic">
                                            {member.focus}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
