import React from 'react'
import { Check } from 'lucide-react'
import { products } from '../data/content'

export const ProductsSection = () => {
  return (
    <div id="products" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Suite</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Tools for Every Need</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Choose the right application for your business model. All integrated, all offline-ready.</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0 h-48 w-full relative">
                <img className="h-full w-full object-cover" src={product.image} alt={product.title} />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <product.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{product.description}</p>
                  <ul className="mt-6 space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0"><Check className="h-5 w-5 text-green-500" /></div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <a href="#contact" className="block w-full bg-gray-50 border border-gray-200 rounded-md py-2 text-sm font-semibold text-gray-700 text-center hover:bg-gray-100 transition-colors">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
