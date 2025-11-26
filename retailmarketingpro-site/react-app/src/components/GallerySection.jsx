import React from 'react'
import { motion } from 'framer-motion'

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1759738093180-aa603b03fc7d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    title: 'Cultural Heritage'
  },
  {
    url: 'https://images.unsplash.com/photo-1753185234794-e3b41b94a352?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    title: 'Local Craftsmanship'
  },
  {
    url: 'https://images.unsplash.com/photo-1739066598279-1297113f5c6a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    title: 'Retail Operations'
  },
  {
    url: 'https://images.unsplash.com/photo-1644188752072-12ee2f65809c?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    title: 'Guwahati Skyline'
  }
]

export const GallerySection = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Built for Assam</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Empowering local businesses with technology that understands your needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div key={index} whileHover={{ scale: 1.03 }} className="relative rounded-lg overflow-hidden shadow-lg">
              <img src={image.url} alt={image.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-white font-medium text-lg">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
