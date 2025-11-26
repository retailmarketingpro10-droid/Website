import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, Target, Settings, LogOut, Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'

export const DashboardLayout = () => {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Contacts', href: '/contacts', icon: Users },
    { name: 'Leads', href: '/leads', icon: Target },
    { name: 'Settings', href: '/settings', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {isSidebarOpen && <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20" onClick={() => setIsSidebarOpen(false)} />}

      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center h-16 px-6 border-b border-gray-200 gap-3">
          <img src={logo} alt="RMP Logo" className="h-8 w-auto rounded-full" />
          <span className="text-xl font-bold text-blue-600">RMP CRM</span>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden ml-auto">
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <nav className="mt-6 px-4 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link key={item.name} to={item.href} className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-700' : 'text-gray-400'}`} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 w-full border-t border-gray-200 p-4">
          <Link to="/" className="flex items-center px-4 py-3 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors">
            <LogOut className="mr-3 h-5 w-5" />
            Sign Out
          </Link>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm lg:hidden">
          <div className="flex items-center justify-between h-16 px-4">
            <button onClick={() => setIsSidebarOpen(true)} className="text-gray-500 focus:outline-none"><Menu className="h-6 w-6" /></button>
            <span className="text-lg font-semibold text-gray-900">RMP CRM</span>
            <div className="w-6" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
