import type { Metadata } from "next"
import DigitalTransformationContent from "./content"

export const metadata: Metadata = {
  title: "Digital Transformation Consultancy | OKS",
  description:
    "OKS delivers structured digital transformation consultancy for African businesses — process audits, executable digital roadmaps, technology advisory and change management.",
}

export default function Page() {
  return <DigitalTransformationContent />
}
