'use client'

import { Hero } from "@/components/sections/Hero"
import { motion } from "framer-motion"
import { Card, CardBody, Button } from "@nextui-org/react"
import { StarIcon } from "@heroicons/react/24/solid"
import type { Product } from "@/lib/types"
import Image from "next/image"

// Mock featured products
const featuredProducts: Partial<Product>[] = [
  {
    id: "1",
    title: "3-Day Juice Cleanse",
    description: "Reset your body with our signature juice cleanse program",
    price: 149.99,
    image: "/images/juice-cleanse.jpg",
    featured: true
  },
  {
    id: "2",
    title: "Detox Tea Bundle",
    description: "A month supply of our organic detox tea blend",
    price: 45.99,
    image: "/images/detox-tea.jpg",
    featured: true
  },
  {
    id: "3",
    title: "Wellness Package",
    description: "Complete cleansing and wellness package",
    price: 199.99,
    image: "/images/wellness-package.jpg",
    featured: true
  }
];

// Mock testimonials
const testimonials = [
  {
    name: "Sarah M.",
    review: "The 3-day cleanse transformed my energy levels completely!",
    rating: 5
  },
  {
    name: "John D.",
    review: "Best detox products I've ever tried. Will definitely purchase again.",
    rating: 5
  },
  {
    name: "Emma W.",
    review: "Amazing results with the wellness package. Highly recommended!",
    rating: 5
  }
];

export default function Home() {
  const benefits = [
    {
      title: "Natural Ingredients",
      description: "100% organic and natural ingredients for gentle cleansing"
    },
    {
      title: "Scientifically Proven",
      description: "Formulated with research-backed ingredients"
    },
    {
      title: "Holistic Wellness",
      description: "Supporting your body's natural cleansing processes"
    }
  ]

  return (
    <>
      <Hero />
      
      {/* Benefits Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-primary">
            Why Choose Balance Cleanse
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardBody className="text-center p-6">
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-primary">
            Featured Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardBody className="p-0">
                    {/* Use next/image for better performance */}
                    <div className="relative w-full h-48">
                      <Image
                        src={product.image || '/images/placeholder.jpg'}
                        alt={product.title || ''}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-brand-primary mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-brand-accent">
                          ${product.price}
                        </span>
                        <Button
                          as="a"
                          href={`/products/${product.id}`}
                          color="primary"
                          className="bg-brand-primary"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur">
                  <CardBody className="text-center p-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="italic mb-4">"{testimonial.review}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
