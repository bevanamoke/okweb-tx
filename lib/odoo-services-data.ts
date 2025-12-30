import { Rocket, Sliders, GraduationCap, Plug, ArrowRightLeft, LifeBuoy } from "lucide-react"

export const odooServices = [
    {
        id: "implementation",
        title: "Odoo Implementation",
        description: "Explore our comprehensive range of services, tailored to optimize your business operations.",
        icon: Rocket,
        slug: "implementation",
        content: {
            heroTitle: "Seamless Odoo Implementation",
            heroSubtitle: "Launch your ERP with confidence. We handle everything from requirements analysis to final deployment.",
            benefits: [
                "Needs Assessment & Gap Analysis",
                "Server Setup & Configuration",
                "Module Installation",
                "Data Import",
                "Go-Live Support"
            ],
            process: "Our implementation process is agile and transparent, ensuring you're involved at every step.",
            cta: "Start Your Implementation",
            faq: [
                {
                    question: "How long does a typical implementation take?",
                    answer: "For standard implementations, it typically takes 2-4 weeks. For more complex, multi-department setups requiring customization, it can take 2-3 months."
                },
                {
                    question: "Do I need to buy my own servers?",
                    answer: "Not necessarily. We can host Odoo for you on our secure cloud servers, or we can set it up on your own on-premise hardware if you prefer."
                },
                {
                    question: "What happens if we need to change our workflow later?",
                    answer: "Odoo is highly modular. We can adjust configurations or add new modules as your business evolves without disrupting your operations."
                }
            ]
        }
    },
    {
        id: "customization",
        title: "Odoo Customization",
        description: "Tailor Odoo to fit your unique business processes with our expert developers.",
        icon: Sliders,
        slug: "customization",
        content: {
            heroTitle: "Custom Odoo Development",
            heroSubtitle: "Don't settle for default. We build custom modules and workflows that match your exact business needs.",
            benefits: [
                "Custom Module Development",
                "Workflow Automation",
                "Report Customization",
                "UI/UX Modifications",
                "Specific Industry Logic"
            ],
            process: "We analyze your unique requirements and build scalable, upgrade-safe customizations.",
            cta: "Discuss Your Customization",
            faq: [
                {
                    question: "Will customizations break when I upgrade Odoo?",
                    answer: "We develop strictly according to Odoo standards (using inheritance and hooks) to ensure that future upgrades are as smooth as possible."
                },
                {
                    question: "Can you customize the Point of Sale interface?",
                    answer: "Yes, we can modify the POS screen to add buttons, change layouts, or enforce specific validation rules for cashiers."
                }
            ]
        }
    },
    {
        id: "training",
        title: "Odoo Training",
        description: "Empower your team with comprehensive user and admin training.",
        icon: GraduationCap,
        slug: "training",
        content: {
            heroTitle: "Expert Odoo Training",
            heroSubtitle: "Maximize ROI by ensuring your team knows how to use the system effectively.",
            benefits: [
                "End-User Training",
                "Administrator Training",
                "Developer Training",
                "Custom Documentation",
                "On-site or Remote Sessions"
            ],
            process: "We provide hands-on training sessions tailored to different user roles within your organization.",
            cta: "Schedule Training",
            faq: [
                {
                    question: "Do you offer on-site training?",
                    answer: "Yes, we can come to your office for hands-on training, or we can conduct sessions remotely via Zoom/Google Meet."
                },
                {
                    question: "Do you provide training manuals?",
                    answer: "Absolutely. We create custom user guides and video tutorials tailored to your specific Odoo configuration."
                }
            ]
        }
    },
    {
        id: "integration",
        title: "Odoo Integration",
        description: "Connect Odoo with your existing apps for a unified ecosystem.",
        icon: Plug,
        slug: "integration",
        content: {
            heroTitle: "Seamless System Integrations",
            heroSubtitle: "Connect Odoo with payment gateways, eCommerce platforms, and legacy software.",
            benefits: [
                "Payment Gateway Integration (mpesa, Paystack)",
                "eCommerce (Shopify, WooCommerce)",
                "Shipping Providers",
                "Biometric Devices",
                "Third-party APIs"
            ],
            process: "We build secure, real-time connectors to ensure data flows smoothly between your systems.",
            cta: "Connect Your Systems",
            faq: [
                {
                    question: "Do you have an M-Pesa integration?",
                    answer: "Yes, we have a robust M-Pesa module that automates payment reconciliation and supports STK Push."
                },
                {
                    question: "Is the data sync real-time?",
                    answer: "For most APIs (like payment gateways), it is instant. For others, we can configure scheduled cron jobs or webhooks for near real-time updates."
                }
            ]
        }
    },
    {
        id: "migration",
        title: "Odoo Migration",
        description: "Safe and secure migration from legacy systems or older Odoo versions.",
        icon: ArrowRightLeft,
        slug: "migration",
        content: {
            heroTitle: "Secure Data Migration",
            heroSubtitle: "Upgrade to the latest Odoo version or move from another ERP without losing data.",
            benefits: [
                "Version Upgrades (e.g., v14 to v18)",
                "Legacy ERP to Odoo",
                "Data Cleaning & Mapping",
                "Downtime Minimization",
                "Post-Migration Validation"
            ],
            process: "We meticulously map and test your data migration to ensure 100% integrity.",
            cta: "Plan Your Migration",
            faq: [
                {
                    question: "Will I lose any historical data?",
                    answer: "No. We perform dry runs and data validation to ensure every invoice, contact, and product history is preserved."
                },
                {
                    question: "Can I migrate from QuickBooks or Excel?",
                    answer: "Yes, we specialize in moving businesses from spreadsheets or other accounting software into Odoo."
                }
            ]
        }
    },
    {
        id: "support",
        title: "Odoo Support",
        description: "Ongoing maintenance, bug fixes, and performance optimization.",
        icon: LifeBuoy,
        slug: "support",
        content: {
            heroTitle: "Reliable Odoo Support",
            heroSubtitle: "Keep your system running smoothly with our dedicated support packages.",
            benefits: [
                "24/7 Server Monitoring",
                "Bug Fixes & Troubleshooting",
                "Performance Tuning",
                "Security Updates",
                "User Query Resolution"
            ],
            process: "Our support team is always on standby to resolve issues and keep your business running.",
            cta: "Get Support Now",
            faq: [
                {
                    question: "What is your typical response time?",
                    answer: "For critical issues preventing operations, our SLA is under 2 hours. For general inquiries, we respond within one business day."
                },
                {
                    question: "Do you support Odoo Community Edition?",
                    answer: "Yes, we provide full support for both Enterprise and Community editions of Odoo."
                }
            ]
        }
    }
]
