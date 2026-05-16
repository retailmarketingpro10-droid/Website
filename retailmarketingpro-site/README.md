# Retail Marketing Pro-Assam

A modern, production-ready website showcasing hardware and software solutions for retail businesses in Assam. The site combines a responsive static landing page with an interactive React CRM dashboard, complete with Google Maps Store Locator, video presentations, and AdSense monetization.

## Features

### Static Landing Page (`index.html`)
- **Brand Identity**: Company branding as "Retail Marketing Pro-Assam"
- **Professional Logo & Banner**: Custom business logo and hero banner image
- **Video Showcase**: Two embedded promotional videos
- **Solutions Showcase**: 
  - Hardware Solutions (POS terminals, printers, cash drawers)
  - Software Solutions (POS, inventory, CRM systems)
  - Value-added Services
- **Navigation**: Clean header with links to Features, Solutions, About, Store Locator, Contact, and App Demo
- **Store Locator**: Integrated location information with "Find Us" section
- **Responsive Design**: Mobile-friendly CSS with dark theme (blue/orange accent colors)

### Store Locator Page (`store-locator.html`)
- Google Maps integration with company location
- Dark-themed UI matching main site
- Support for directions, phone/email contact links
- Requires Google Maps API key setup

### React CRM Application (`react-app/`)
- **Dashboard**: Key business metrics (customers, revenue, orders, growth)
- **Contacts Management**: View and manage customer contacts
- **Leads Pipeline**: Sales pipeline tracking with deal stages
- **Settings**: User preferences and notification settings
- **404 Page**: Dedicated page for invalid routes
- **Responsive Layout**: Mobile-friendly with sidebar navigation

### Monetization & SEO
- **Google AdSense**: Fully configured with:
  - `ads.txt` file for fraud prevention
  - Meta tags on all pages
  - AdSense script integrated
  - Publisher ID: `ca-pub-4207318297441870`
- **Meta Tags**: SEO-optimized descriptions on all pages

### Assets
- `assets/logo.jpg` - Business logo
- `assets/hero.jpg` - Hero banner image
- `assets/solutions-we-offer.mp4` - First promotional video
- `assets/second-video.mp4` - Second promotional video
- `assets/icon-hardware.svg` - Hardware solutions icon
- `assets/icon-software.svg` - Software solutions icon
- `assets/icon-service.svg` - Service/app icon

## Quick Start

### Option 1: Local Testing

```bash
cd retailmarketingpro-site
python3 -m http.server 8000
```

Then open: http://localhost:8000

### Option 2: Deploy to GitHub Pages

```bash
# Push to GitHub and enable GitHub Pages in repository settings
# Select main branch and /retailmarketingpro-site directory
```

### Option 3: Deploy to Firebase Hosting

```bash
cd react-app
npm install
npm run build
npm install -g firebase-tools
firebase login
firebase use --add  # Select your Firebase project
npm run deploy:firebase
```

## File Structure

```
retailmarketingpro-site/
├── index.html                    # Main landing page
├── store-locator.html            # Store locator with Google Maps
├── styles.css                    # Main site styles
├── ads.txt                        # AdSense publisher verification
├── assets/
│   ├── logo.jpg                  # Business logo
│   ├── hero.jpg                  # Banner image
│   ├── solutions-we-offer.mp4     # Video 1
│   ├── second-video.mp4          # Video 2
│   ├── icon-hardware.svg         # Hardware icon
│   ├── icon-software.svg         # Software icon
│   └── icon-service.svg          # Service icon
├── react-app/
│   ├── index.html                # React app entry
│   ├── package.json              # Dependencies
│   ├── vite.config.js            # Vite config (relative base path)
│   ├── src/
│   │   ├── App.jsx               # Main app component with routing
│   │   ├── main.jsx              # React entry point
│   │   ├── styles.css            # App styles
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Contacts.jsx
│   │   │   ├── Leads.jsx
│   │   │   ├── Settings.jsx
│   │   │   └── NotFound.jsx      # New 404 page
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── ProductsSection.jsx
│   │   │   ├── GallerySection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── Footer.jsx
│   │   ├── layouts/
│   │   │   └── DashboardLayout.jsx
│   │   ├── data/
│   │   │   └── content.js        # Updated with Assam branding
│   │   └── assets/
│   │       └── logo.jpg          # React app logo
│   └── dist/                     # Production build output
```

## Customization

### Update Google Maps API Key
Edit `store-locator.html` and replace `YOUR_API_KEY_HERE` with your actual Google Maps API key:
```javascript
const CONFIGURATION = {
  "mapsApiKey": "YOUR_API_KEY_HERE",
  ...
}
```

Also update the `gmpx-api-loader`:
```html
<gmpx-api-loader key="YOUR_API_KEY_HERE" ...></gmpx-api-loader>
```

### Update Contact Information
Edit `react-app/src/data/content.js`:
```javascript
export const companyInfo = {
  name: 'Retail Marketing Pro-Assam',
  phone: '+91 89109 21129',
  contactEmail: 'retailmarketingpro1.0@gmail.com',
  address: 'Kamar Pathar Gaon, Sonitpur, Assam 784149, India',
  ...
}
```

### Modify Branding Colors
Edit `styles.css`:
```css
:root{
  --accent: #ff8c00;      /* Orange */
  --accent2: #18b26b;     /* Green */
  --bg: #0f1720;          /* Dark background */
  --text: #e6eef6;        /* Light text */
}
```

## Build & Deploy

### Build React App for Production
```bash
cd react-app
npm install
npm run build
```

Output: `react-app/dist/` (ready for deployment)

### Deploy to Netflix/Vercel
```bash
# Drag the retailmarketingpro-site folder into Netlify dashboard
# or connect GitHub for automatic deployments
```

### Deploy to Firebase
```bash
firebase deploy --only hosting
```

## Support & Maintenance

- **Static Site**: No build required, deploy as-is via GitHub Pages, Netlify, or Vercel
- **React App**: Requires Node.js, npm, and Firebase CLI for deployment
- **Videos**: Ensure `assets/solutions-we-offer.mp4` and `assets/second-video.mp4` are present for video playback
- **Store Locator**: Requires valid Google Maps API key for interactive map

## License

All rights reserved © Retail Marketing Pro-Assam 2026
