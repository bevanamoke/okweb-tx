import type { Metadata } from "next"
import AboutContent from "./content"

export const metadata: Metadata = {
  title: "About OKS | Omnitech Kernel Solutions",
  description:
    "OKS is a technology company helping African businesses operate smarter and scale faster through Odoo ERP, custom software, and AI automation. Meet the team.",
}

export default function AboutPage() {
  return <AboutContent />
}
