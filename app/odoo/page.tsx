import type { Metadata } from "next"
import OdooHero from "@/components/odoo/odoo-hero"
import OdooWhyChoose from "@/components/odoo/odoo-why-choose"
import OdooModules from "@/components/odoo/odoo-modules"
import OdooFreeWebsite from "@/components/odoo/odoo-free-website"
import OdooImplementationProcess from "@/components/odoo/odoo-implementation-process"
import OdooWhyTrust from "@/components/odoo/odoo-why-trust"
import OdooFeatureShowcase from "@/components/odoo/odoo-feature-showcase"
import OdooIndustries from "@/components/odoo/odoo-industries"
import OdooServices from "@/components/odoo/odoo-services"
import OdooCTA from "@/components/odoo/odoo-cta"

export const metadata: Metadata = {
  title: "Odoo Community Edition Implementation | OKS - Expert ERP Solutions",
  description:
    "Transform your business with Odoo Community Edition. OKS provides expert implementation, customization, and support for cost-effective ERP solutions in Kenya.",
}

export default function OdooPage() {
  return (
    <>
      <main>
        <OdooHero />
        <OdooWhyChoose />
        <OdooModules />
        <OdooFreeWebsite />
        <OdooImplementationProcess />
        <OdooWhyTrust />
        <OdooFeatureShowcase />
        <OdooIndustries />
        <OdooServices />
        <OdooCTA />
      </main>
    </>
  )
}
