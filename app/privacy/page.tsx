import type { Metadata } from "next"
import PrivacyContent from "@/components/legal/privacy-content"

export const metadata: Metadata = {
    title: "Privacy Policy - OKS",
    description: "Privacy Policy for OmniTech Kernel Solutions (OKS). Learn how we protect your data.",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="pt-24 min-h-screen">
            <PrivacyContent />
        </main>
    )
}
