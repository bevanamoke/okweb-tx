import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image src="/logo.png" alt="OKS Logo" width={40} height={40} className="h-10 w-auto" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">OKS</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              OmniTech Kernel Solutions — Enterprise infrastructure for African institutions.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Core Solutions</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>
                <Link href="/school_erp" className="hover:text-primary transition">
                  School ERP
                </Link>
              </li>
              <li>
                <Link href="/hospitality_erp" className="hover:text-primary transition">
                  Hospitality ERP
                </Link>
              </li>
              <li>
                <Link href="/odoo" className="hover:text-primary transition">
                  Odoo Implementation
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>
                <Link href="/ai-automation" className="hover:text-primary transition">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/web-app-development" className="hover:text-primary transition">
                  Web & App Development
                </Link>
              </li>
              <li>
                <Link href="https://calendly.com/omnitechkernelsolutions/30min" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-2 items-start">
                <Mail size={16} className="text-primary flex-shrink-0 mt-1" />
                <a href="mailto:info@oks.co.ke" className="text-sm text-foreground/60 hover:text-primary transition">
                  info@oks.co.ke
                </a>
              </div>
              <div className="flex gap-2 items-start">
                <Phone size={16} className="text-primary flex-shrink-0 mt-1" />
                <a href="tel:+254703133390" className="text-sm text-foreground/60 hover:text-primary transition">
                  +254703133390
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
          <p>&copy; 2025 OmniTech Kernel Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
