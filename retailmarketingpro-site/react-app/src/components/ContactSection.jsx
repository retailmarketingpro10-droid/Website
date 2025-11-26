import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, User } from 'lucide-react'
import { companyInfo } from '../data/content'

export const ContactSection = () => {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setTimeout(() => {
      setFormStatus('success')
    }, 1500)
  }

  return (
    <div id="contact" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Get Started with RMP</h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">Ready to transform your business? Contact us for a demo or to discuss which solution fits your needs best.</p>

            <dl className="mt-8 text-base text-gray-500 space-y-6">
              <div className="flex items-start">
                <dt className="sr-only">Contact Person</dt>
                <dd className="flex flex-col">
                  <div className="flex items-center">
                    <User className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                    <span className="ml-3">{companyInfo.contactName}</span>
                  </div>
                  {companyInfo.secondaryContact && (
                    <div className="flex items-center mt-1">
                      <User className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3 text-sm text-gray-600">{companyInfo.secondaryContact}</span>
                    </div>
                  )}
                </dd>
              </div>
              <div className="flex items-start">
                <dt className="sr-only">Address</dt>
                <dd className="flex items-center">
                  <MapPin className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                  <span className="ml-3">{companyInfo.address}</span>
                </dd>
              </div>
              <div className="flex items-start">
                <dt className="sr-only">Phone</dt>
                <dd className="flex items-center">
                  <Phone className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                  <span className="ml-3">{companyInfo.phone}</span>
                </dd>
              </div>
              <div className="flex items-start">
                <dt className="sr-only">Email</dt>
                <dd className="flex items-center">
                  <Mail className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                  <span className="ml-3">{companyInfo.contactEmail}</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-white py-10 px-6 shadow-xl rounded-2xl sm:px-10">
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Message Sent!</h3>
                <p className="mt-1 text-sm text-gray-500">We'll get back to you shortly.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-6 text-blue-600 hover:text-blue-500 font-medium">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="mt-1">
                    <input type="text" name="name" id="name" required className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border" placeholder="John Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" required className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700">Business Type</label>
                  <div className="mt-1">
                    <select id="business" name="business" className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border bg-white">
                      <option>Retail Store</option>
                      <option>Restaurant/Cafe</option>
                      <option>Service Provider</option>
                      <option>Manufacturing/Workshop</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md border" placeholder="Tell us about your business needs..." />
                  </div>
                </div>
                <div>
                  <button type="submit" disabled={formStatus === 'submitting'} className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
