import type { Metadata } from "next"
import TermsContent from "@/components/legal/terms-content"

export const metadata: Metadata = {
    title: "Terms of Service - OKS",
    description: "Terms of Service for OmniTech Kernel Solutions (OKS).",
}

export default function TermsPage() {
    return (
        <main className="pt-24 min-h-screen">
            <TermsContent />
        </main>
    )
}
