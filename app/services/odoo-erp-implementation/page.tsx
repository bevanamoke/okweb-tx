import type { Metadata } from "next"
import OdooERPContent from "./content"

export const metadata: Metadata = {
  title: "Odoo ERP Implementation Kenya | OKS",
  description:
    "OKS delivers end-to-end Odoo ERP implementation for Kenyan and African businesses. M-PESA integration, KRA eTIMS compliance, local payroll, and free Odoo website included.",
}

export default function Page() {
  return <OdooERPContent />
}
