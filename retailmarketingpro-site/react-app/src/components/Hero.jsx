import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { heroContent } from '../data/content'

// Lightweight SplitText fallback: simply render text
const SplitText = ({ text, className }) => <span className={className}>{text}</span>

export const Hero = () => {
  return (
    <div className="relative bg-white pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      <div className="relative z-10">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mt-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <SplitText text={heroContent.title} className="text-4xl font-extrabold" />
                </h1>
                <p className="mt-4 text-lg text-gray-500">{heroContent.subtitle}</p>
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="grid grid-cols-3 gap-4">
                  {heroContent.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none object-cover" src={heroContent.image} alt="Hero" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
