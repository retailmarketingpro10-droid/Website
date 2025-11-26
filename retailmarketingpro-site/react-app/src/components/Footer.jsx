import React from 'react'
import { companyInfo } from '../data/content'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <span className="text-2xl font-bold text-white">{companyInfo.name}</span>
            <p className="mt-4 text-gray-400 text-sm">{companyInfo.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">RMP POS</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Inventory Manager</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Tally Migrator</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">CRM System</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Partners</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
