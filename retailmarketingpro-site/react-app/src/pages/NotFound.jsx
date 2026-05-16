import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <AlertTriangle className="h-16 w-16 text-blue-600" />
      <h1 className="mt-6 text-4xl font-bold text-gray-900">Page Not Found</h1>
      <p className="mt-4 text-base text-gray-500">The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="mt-8 inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Return to Home</Link>
    </div>
  )
}
