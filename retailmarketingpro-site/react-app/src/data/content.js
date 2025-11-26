import { Store, Hammer, FileSpreadsheet, Box, WifiOff, CreditCard, Users } from 'lucide-react'

export const companyInfo = {
  name: 'Retail Marketing Pro',
  tagline: "Empowering Assam's SMBs with Offline-First Business Tools",
  description: 'A robust suite of offline-capable business management tools for Retail, Service, Restaurant, Medical, and Refilling sectors across Assam and India. No hidden processing fees, just growth.',
  cta: 'Get Started Today',
  contactName: 'Sooraj Das',
  secondaryContact: 'Gopal Khatiwora',
  address: 'Vill- Kawaimari, Dist-Sonitpur, Tezpur, Assam, India 784149',
  phone: '+91.8910921129',
  contactEmail: 'retailmarketingpro1.0@gmail.com'
}

export const heroContent = {
  title: 'Simplify Your Business Operations in Assam',
  subtitle: 'Point of Sale, Inventory, and CRM tools designed for growth. Offline-ready, affordable, and transparent.',
  image: 'https://images.unsplash.com/photo-1758390286286-9b3b690989e7?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80',
  stats: [
    { label: 'Processing Fee', value: '0%' },
    { label: 'Uptime', value: '100%' },
    { label: 'Hidden Costs', value: 'None' }
  ]
}

export const products = [
  {
    id: 'rmp-pos',
    title: 'RMP 1.0 POS',
    description: 'The ultimate Point of Sale solution for single or multi-location businesses. Process transactions offline and sync when you\'re ready.',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1752869290097-ae5b49f5ab19?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    features: [
      'Zero processing fees on transactions',
      'Offline Cash & UPI Barcode support',
      'Google Calendar appointment linking',
      'Automated PDF reporting & analytics'
    ]
  },
  {
    id: 'craftsmen',
    title: 'Carat Control',
    description: 'Track craftsmen, inventory, and employees in real-time. Perfect for workshops and manufacturing retail.',
    icon: Hammer,
    image: 'https://pixabay.com/get/ga24e886b306cfa02639e052bd903e98e1e28ed22fe64beaf5b693d154236e30bac00947dc6ab11580dd19cf37359de23cf36204f0fbdd061d769536d58897e29_1280.jpg',
    features: [
      'Multi-Company/Location Dashboard',
      'Real-time stock tracking & alerts',
      'Built-in GST calculator (CGST/SGST/IGST)',
      'Bulk import/export via CSV'
    ]
  },
  {
    id: 'tally',
    title: 'Inventory Migrator',
    description: 'Seamlessly migrate legacy data and manage inventory with a Tally-style interface designed for accountants.',
    icon: FileSpreadsheet,
    image: 'https://images.unsplash.com/photo-1762427907123-c7ab022a5de7?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    features: [
      'Tally-style data interface',
      'GST-calculated exports',
      'Offline-ready architecture',
      'Automated payment request emails'
    ]
  }
]

export const features = [
  { title: 'Offline First', description: 'Keep working even when the internet goes down. Data syncs automatically when you\'re back online.', icon: WifiOff },
  { title: 'Transparent Pricing', description: 'One-time purchase with annual renewal options. No hidden platform or processing fees.', icon: CreditCard },
  { title: 'Multi-Location', description: 'Manage single stores or entire chains from one unified dashboard with industry-specific views.', icon: Box },
  { title: 'Integrated CRM', description: 'Track signups, transaction volumes, and manage support tickets all in one place.', icon: Users }
]

export const crmHighlights = {
  title: 'Centralized CRM & Analytics',
  description: 'Gain deep insights into your business performance with our integrated CRM system.',
  image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80',
  points: [
    { label: 'Merchant Tracking', text: 'Track signups and transaction volumes per merchant.' },
    { label: 'Support Management', text: 'Log and manage support tickets efficiently.' },
    { label: 'Revenue Insights', text: 'Visual breakdown of billing and revenue streams.' },
    { label: 'Onboarding', text: 'Create and track onboarding steps for new businesses.' }
  ]
}
