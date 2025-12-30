"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                     linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
          }}
        />
        {/* Floating elements for layered parallax */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-pulse delay-1000" />
      </motion.div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              OKS — Your Partners In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Digital Transformation
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            We specialize in Odoo Implementation, Automation Services, and Web Development to modernize your business operations and drive growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300">
              <Link href="https://calendly.com/omnitechkernelsolutions/30min" target="_blank" rel="noopener noreferrer" className="flex items-center w-full h-full justify-center">
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </MagneticButton>
            <Link href="#solutions">
              <MagneticButton variant="outline" className="px-8 py-6 text-lg rounded-full border-2 hover:bg-accent/5 transition-all duration-300">
                Explore Our Solutions
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-foreground/40">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function MagneticButton({ children, className, variant = "default" }: any) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const center = { x: left + width / 2, y: top + height / 2 }
    const distance = { x: clientX - center.x, y: clientY - center.y }

    // Magnetic pull limit (8px as requested)
    x.set(distance.x * 0.2)
    y.set(distance.y * 0.2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden group font-medium flex items-center justify-center ${className} ${variant === "outline" ? "bg-transparent border-primary/20 text-foreground" : ""
        }`}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
    </motion.button>
  )
}
