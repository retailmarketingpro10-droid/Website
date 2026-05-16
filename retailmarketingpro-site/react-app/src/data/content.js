import { Store, Hammer, FileSpreadsheet, Box, WifiOff, CreditCard, Users } from 'lucide-react'

export const companyInfo = {
  name: 'Retail Marketing Pro-Assam',
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

export const expandedServices = [
  {
    id: 'rmp-pos-detail',
    title: 'RMP 1.0 POS - Complete Point of Sale Solution',
    category: 'Software',
    description: 'Comprehensive POS system built for offline-first operations across retail, restaurants, medical, and service sectors.',
    detailedFeatures: [
      'Zero processing fees - keep more of your profits',
      'Offline Cash & UPI Barcode support - work anytime',
      'Google Calendar integration for appointments',
      'Automated daily/monthly PDF reports',
      'Multi-location dashboard',
      'Real-time inventory tracking',
      'Customer database & loyalty programs',
      'Tax calculation (GST ready)',
      'Mobile-friendly interface',
      'Auto-sync when internet returns'
    ],
    useCases: ['Retail Stores', 'Restaurants', 'Medical Clinics', 'Refilling Shops', 'Service Centers'],
    pricing: 'Contact for quote',
    cta: 'Get Demo'
  },
  {
    id: 'carat-control-detail',
    title: 'Carat Control - Jewelry & Craftsmen Management',
    category: 'Software',
    description: 'Specialized solution for jewelry stores, workshops, and craftsmen to track inventory, staff, and production workflows.',
    detailedFeatures: [
      'Multi-company and multi-location dashboard',
      'Real-time gold/silver inventory tracking',
      'Craftsmen productivity monitoring',
      'Staff and employee management',
      'Built-in GST calculator (CGST/SGST/IGST)',
      'Job card generation and tracking',
      'Customer weight tracking',
      'Bulk import/export via CSV',
      'Automated alerts for low stock',
      'Production reporting'
    ],
    useCases: ['Jewelry Stores', 'Gold Workshops', 'Silver Manufacturers', 'Hallmarking Centers'],
    pricing: 'Contact for quote',
    cta: 'Request Quote'
  },
  {
    id: 'inventory-migrator-detail',
    title: 'Inventory Migrator - Legacy Data Migration',
    category: 'Software',
    description: 'Seamlessly migrate your data from Tally, Excel, or legacy systems without losing historical information.',
    detailedFeatures: [
      'Tally-compatible data interface',
      'GST-calculated exports',
      'Offline-ready architecture',
      'Automated payment request emails',
      'Data validation and cleansing',
      'Batch import capabilities',
      'Historical data preservation',
      'Format conversion (Excel, CSV)',
      'Data integrity checks',
      'Multi-format support'
    ],
    useCases: ['Tally Users', 'Excel-based Businesses', 'Legacy System Users'],
    pricing: 'Contact for quote',
    cta: 'Start Migration'
  },
  {
    id: 'vyapar-lystloc',
    title: 'Vyapar & Lystloc Integration',
    category: 'Software',
    description: 'Integrate with popular accounting and e-commerce platforms for seamless business operations.',
    detailedFeatures: [
      'Vyapar accounting integration',
      'Lystloc location-based services',
      'Unified data ecosystem',
      'Cross-platform synchronization',
      'API integration ready',
      'Real-time data syncing'
    ],
    useCases: ['Multi-platform Businesses', 'E-commerce Retailers'],
    pricing: 'Contact for quote',
    cta: 'Learn More'
  },
  {
    id: 'hardware-win-b88',
    title: 'Win B88 POS Terminal',
    category: 'Hardware',
    description: 'Professional-grade POS terminal built for high-volume transaction processing in retail and hospitality.',
    detailedFeatures: [
      ' 5.5" HD touch screen display',
      'ARM Cortex-A53 processor',
      '2GB RAM & 8GB Storage',
      'Built-in WiFi & Bluetooth',
      'Receipt thermal printer',
      'Barcode scanner compatible',
      'EMV card reader support',
      'Robust construction - retail-grade',
      'Silent operation',
      'Low power consumption'
    ],
    useCases: ['Retail Stores', 'Quick Service Restaurants', 'Retail Chains'],
    pricing: 'Contact for quote',
    cta: 'Request Quote'
  },
  {
    id: 'hardware-android',
    title: 'Android Terminals - N10/N50/N80 Series',
    category: 'Hardware',
    description: 'Versatile Android-based terminals suitable for various business sizes and use cases.',
    detailedFeatures: [
      'Multiple screen sizes (7"-10" options)',
      'Android OS with app ecosystem',
      'Full customization capabilities',
      'WiFi, 4G, and Bluetooth connectivity',
      'Multi-port support (USB, HDMI)',
      'Long battery life',
      'Lightweight and portable',
      'Printer integration',
      'Payment gateway compatible',
      'Scalable for multi-location use'
    ],
    useCases: ['Small Businesses', 'Food Delivery Agents', 'Mobile Businesses', 'Franchises'],
    pricing: 'Contact for quote',
    cta: 'View Specs'
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    business: 'Kumar Retail Store, Guwahati',
    type: 'Retail',
    testimonial: 'RMP POS transformed our billing process. We went from manual registers to digital in just one week. The offline feature saved us during internet outages, and we saved ₹5000/month in processing fees!',
    rating: 5,
    result: 'Saved ₹5000/month, 60% faster billing',
    image: null
  },
  {
    id: 2,
    name: 'Priya Patel',
    business: 'The Golden Jewelers, Dibrugarh',
    type: 'Jewelry',
    testimonial: 'Carat Control helped us track our inventory precisely. We now know our exact gold and silver stock in real-time. The craftsmen tracking feature improved productivity by 40%, and we caught inventory discrepancies immediately.',
    rating: 5,
    result: '40% higher productivity, 100% inventory accuracy',
    image: null
  },
  {
    id: 3,
    name: 'Amit Singh',
    business: 'Singh\'s Restaurant Chain, Silchar',
    type: 'Restaurant',
    testimonial: 'Multiple locations, one system - that\'s what we love. Multi-location dashboard gives us real-time visibility. Inventory sync across branches reduced waste by 30%. Best business decision we made this year.',
    rating: 5,
    result: '30% waste reduction, real-time branch visibility',
    image: null
  },
  {
    id: 4,
    name: 'Dr. Neha Sharma',
    business: 'Sharma Medical Clinic, Tezpur',
    type: 'Medical',
    testimonial: 'As a clinic, we needed something simple and reliable. RMP POS handles our billing perfectly. Patient tracking and appointment integration with Google Calendar makes scheduling seamless. Highly recommended!',
    rating: 5,
    result: 'Streamlined operations, 100% uptime',
    image: null
  },
  {
    id: 5,
    name: 'Vikram Mahajan',
    business: 'Mahajan Refilling Center, Jorhat',
    type: 'Refilling',
    testimonial: 'The zero processing fees model is revolutionary. Combined with offline capabilities, it\'s perfect for our operation where we sometimes have unreliable internet. We\'ve been using it for 8 months without a single issue.',
    rating: 5,
    result: 'Zero downtime, 8+ months of reliable service',
    image: null
  },
  {
    id: 6,
    name: 'Sneha Das',
    business: 'Urban Fashion Boutique, Nagaon',
    type: 'Retail',
    testimonial: 'Migrating from Tally was painless with Inventory Migrator. All our historical data came over cleanly. Now our team loves the user-friendly interface. Customer satisfaction improved because we\'re faster and more accurate.',
    rating: 5,
    result: 'Painless migration, improved customer satisfaction',
    image: null
  }
]

export const caseStudies = [
  {
    id: 1,
    title: 'Multi-Location Retail Chain Scales with RMP POS',
    industry: 'Retail',
    background: 'A 10-store retail chain across Assam was struggling with inconsistent billing practices and inventory across locations.',
    challenge: 'Each store used different cash registers, making it impossible to get unified reports or manage inventory efficiently.',
    solution: 'Implemented RMP 1.0 POS across all locations with multi-location dashboard.',
    results: [
      'Unified reporting across all 10 stores',
      '₹8,000/month saved in processing fees',
      '50% reduction in billing errors',
      'Real-time inventory visibility'
    ]
  },
  {
    id: 2,
    title: 'Jewelry Workshop Achieves Perfect Inventory Control',
    industry: 'Jewelry',
    background: 'A traditional jewelry workshop with 25+ craftsmen was tracking inventory on paper and spreadsheets.',
    challenge: 'No real-time tracking, frequent discrepancies between actual and recorded inventory, low craftsmen productivity tracking.',
    solution: 'Deployed Carat Control with real-time inventory and craftsmen productivity modules.',
    results: [
      '100% inventory accuracy achieved',
      '40% increase in daily production',
      'Reduced inventory loss to near zero',
      'Clear productivity metrics per craftsman'
    ]
  },
  {
    id: 3,
    title: 'Medical Clinic Streamlines Operations with Offline POS',
    industry: 'Medical',
    background: 'A multi-specialty clinic needed reliable billing during frequent power outages and internet disruptions.',
    challenge: 'Manual billing during outages, no patient tracking, appointment scheduling was chaotic.',
    solution: 'Integrated RMP POS with Google Calendar and offline-first capabilities.',
    results: [
      '100% uptime despite infrastructure issues',
      'Automated appointment scheduling',
      'Zero billing errors',
      'Better patient data management'
    ]
  },
  {
    id: 4,
    title: 'Restaurant Chain Reduces Food Waste by 30%',
    industry: 'Restaurant',
    background: 'A 3-restaurant chain was losing ₹50,000/month to food waste and inventory mismanagement.',
    challenge: 'Inconsistent inventory tracking across locations, no real-time visibility of stock levels.',
    solution: 'Implemented RMP POS with real-time inventory syncing across all restaurants.',
    results: [
      '30% reduction in food waste',
      'Real-time stock alerts prevent overordering',
      '₹15,000/month savings',
      'Improved customer wait times due to better inventory management'
    ]
  }
]

export const faqs = [
  {
    id: 1,
    category: 'Pricing & Licensing',
    question: 'What is your pricing model?',
    answer: 'We offer transparent, one-time purchase pricing with optional annual renewal options. There are no hidden fees, processing charges, or surprise costs. Contact us for detailed pricing based on your business requirements.'
  },
  {
    id: 2,
    category: 'Pricing & Licensing',
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer demo access to evaluate our products before purchasing. This gives you hands-on experience with the system and helps you determine if it\'s the right fit for your business.'
  },
  {
    id: 3,
    category: 'Pricing & Licensing',
    question: 'Do you charge per transaction or per user?',
    answer: 'No, we don\'t charge per transaction or per user. Our model is based on a one-time or annual subscription. This means you can have unlimited transactions and users without worrying about variable costs.'
  },
  {
    id: 4,
    category: 'Technical Requirements',
    question: 'Do your systems work offline?',
    answer: 'Yes! All our systems are built with offline-first architecture. You can continue working even if the internet goes down. Data automatically syncs when connectivity is restored, so you never lose information.'
  },
  {
    id: 5,
    category: 'Technical Requirements',
    question: 'What hardware do I need for RMP POS?',
    answer: 'RMP POS works on our Win B88 terminals, Android devices (N10/N50/N80 series), or compatible tablets/computers. We can help you choose the right hardware based on your business type and volume.'
  },
  {
    id: 6,
    category: 'Technical Requirements',
    question: 'Is internet connectivity mandatory?',
    answer: 'No. You can operate completely offline. Internet is only needed for syncing data to the cloud and accessing multi-location dashboards. This makes our system perfect for areas with unreliable connectivity.'
  },
  {
    id: 7,
    category: 'Setup & Integration',
    question: 'How long does setup take?',
    answer: 'Basic setup typically takes 1-3 days depending on your business complexity. We provide onboarding support and training to ensure your team is comfortable with the system. Migration from legacy systems may take additional time.'
  },
  {
    id: 8,
    category: 'Setup & Integration',
    question: 'Can I migrate data from my existing system?',
    answer: 'Absolutely! Our Inventory Migrator is designed to handle data from Tally, Excel, and other legacy systems. We ensure all your historical data is preserved and properly formatted for seamless transition.'
  },
  {
    id: 9,
    category: 'Setup & Integration',
    question: 'Do you provide integration with payment gateways?',
    answer: 'Yes, we integrate with popular payment gateways for digital payments. We also support UPI, debit cards, credit cards, and our system can work with offline cash-only businesses.'
  },
  {
    id: 10,
    category: 'Support & Training',
    question: 'What kind of customer support do you offer?',
    answer: 'We provide dedicated customer support via phone, email, and support ticket system. Our team helps with technical issues, training, and business optimization. Premium plans include priority support.'
  },
  {
    id: 11,
    category: 'Support & Training',
    question: 'Do you provide training for my staff?',
    answer: 'Yes! We provide comprehensive training for your entire team. This includes system navigation, daily operations, troubleshooting, and reporting. Training can be remote or on-site based on your needs.'
  },
  {
    id: 12,
    category: 'Support & Training',
    question: 'How often do you update the software?',
    answer: 'We release updates regularly with new features and improvements. All updates are backward compatible, and you\'ll receive notifications about new features. Updates are free for all users.'
  },
  {
    id: 13,
    category: 'Use Case Specific',
    question: 'Is RMP POS suitable for small businesses?',
    answer: 'Yes! RMP POS is designed for all business sizes. Our simple, intuitive interface works great for single-store operations, and our multi-location dashboard scales up to large chains.'
  },
  {
    id: 14,
    category: 'Use Case Specific',
    question: 'Can I use it for multiple types of businesses (retail, restaurant, medical)?',
    answer: 'Absolutely! RMP POS is industry-agnostic and works for retail stores, restaurants, medical clinics, refilling centers, and service businesses. We customize reporting and features based on your industry.'
  },
  {
    id: 15,
    category: 'Use Case Specific',
    question: 'Is Carat Control only for jewelry stores?',
    answer: 'While Carat Control is optimized for jewelry and workshops, its core inventory and staff management features work for any manufacturing or craftsmen-focused business.'
  }
]

export const pricingTiers = [
  {
    name: 'Starter',
    price: 'Contact',
    period: 'One-time / Annual',
    description: 'Perfect for single-location businesses',
    features: [
      'Single location management',
      'Basic POS functionality',
      'Offline support',
      'Email support',
      'Basic reports',
      'Up to 100 customers'
    ],
    cta: 'Get Demo',
    highlighted: false
  },
  {
    name: 'Professional',
    price: 'Contact',
    period: 'One-time / Annual',
    description: 'For growing multi-location businesses',
    features: [
      'Up to 5 locations',
      'Advanced POS features',
      'Real-time inventory sync',
      'Multi-location dashboard',
      'Priority email support',
      'Advanced analytics & reports',
      'Unlimited customers',
      'API integration ready'
    ],
    cta: 'Request Quote',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'One-time / Annual',
    description: 'For large-scale operations',
    features: [
      'Unlimited locations',
      'Full customization',
      'Dedicated account manager',
      'Phone & priority support',
      'Custom integrations',
      'Advanced security features',
      'White-label options',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
]
