import Hero from "@/components/hero"
import WhoWeAre from "@/components/who-we-are"
import Services from "@/components/services"
import WhyChooseOKS from "@/components/why-choose-oks"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blog-section"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyChooseOKS />
      <Process />
      <Testimonials />
      <BlogSection />
      <CTA />
    </main>
  )
}
