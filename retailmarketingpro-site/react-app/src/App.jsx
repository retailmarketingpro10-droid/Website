import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { DashboardLayout } from './layouts/DashboardLayout'
import { Dashboard } from './pages/Dashboard'
import { Contacts } from './pages/Contacts'
import { Leads } from './pages/Leads'
import { Settings } from './pages/Settings'

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}
