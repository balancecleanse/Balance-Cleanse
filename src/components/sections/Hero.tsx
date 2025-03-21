'use client'

import { motion } from "framer-motion"
import { Button } from "@nextui-org/react"

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-brand-accent/60" />
          <img
            src="/images/hero-cleanse.jpg"
            alt="Natural Cleansing Products"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Begin Your Natural Cleansing Journey
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Transform your body and mind with our premium organic cleansing products
          </p>
          <div className="flex gap-4">
            <Button
              as="a"
              href="/products"
              color="primary"
              size="lg"
              className="bg-brand-accent hover:bg-brand-accent/90"
            >
              Shop Now
            </Button>
            <Button
              as="a"
              href="/about"
              variant="bordered"
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
