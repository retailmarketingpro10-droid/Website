import React from 'react'
import { Hero } from '../components/Hero'
import { ProductsSection } from '../components/ProductsSection'
import { GallerySection } from '../components/GallerySection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  )
}
