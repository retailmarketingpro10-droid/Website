# Quick Start Guide

## For Developers

### Option 1: Local Testing (Recommended for Development)

1. **Navigate to the site folder**:
   ```bash
   cd retailmarketingpro-site
   ```

2. **Start the local server**:
   ```bash
   python3 -m http.server 8000
   ```

3. **Open in browser**:
   - Main site: http://localhost:8000
   - Store Locator: http://localhost:8000/store-locator.html
   - React App Demo: http://localhost:8000/react-app/dist/

### Option 2: Deploy to GitHub Pages (Free, Fast)

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Updated website with enhancements"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose branch: `main`
   - Select folder: `/ (root)` or `/retailmarketingpro-site`
   - Click Save

3. **Access your site**: `https://yourusername.github.io/Website/retailmarketingpro-site/`

### Option 3: Deploy React App to Firebase Hosting

1. **Create Firebase project**: https://console.firebase.google.com

2. **Install dependencies**:
   ```bash
   cd react-app
   npm install
   ```

3. **Install Firebase CLI and login**:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

4. **Set Firebase project**:
   ```bash
   firebase use --add
   # Select your Firebase project
   ```

5. **Build and deploy**:
   ```bash
   npm run build
   npm run deploy:firebase
   ```

6. **Access your app**: `https://YOUR_PROJECT_ID.web.app`

---

## Site Structure Overview

### Static Landing Page
- **URL**: `index.html`
- **What's here**: Hero section, video showcase, solutions, store locator section
- **Deployment**: GitHub Pages, Netlify, Vercel, any static host

### Store Locator
- **URL**: `store-locator.html`
- **What's here**: Google Maps integration showing company location
- **Note**: Requires Google Maps API key (update `YOUR_API_KEY_HERE`)

### React CRM App
- **URL**: `react-app/dist/index.html`
- **What's here**: Dashboard, CRM management, sales pipeline
- **Deployment**: Firebase Hosting (recommended), Netlify, Vercel

---

## Quick Configuration

### Add Google Maps API Key
Edit `store-locator.html` and update:
```javascript
"mapsApiKey": "YOUR_API_KEY_HERE"
```

Also update the loader tag at the bottom of the page.

### Customize Company Info
Edit `react-app/src/data/content.js` and update:
```javascript
export const companyInfo = {
  name: 'Retail Marketing Pro-Assam',
  phone: '+91 89109 21129',
  contactEmail: 'retailmarketingpro1.0@gmail.com',
  address: 'Kamar Pathar Gaon, Sonitpur, Assam 784149, India',
}
```

---

## Troubleshooting

**Videos not playing?**
- Ensure `assets/solutions-we-offer.mp4` and `assets/second-video.mp4` exist
- Check browser console for 404 errors

**React app not loading from subdirectory?**
- Confirm `react-app/vite.config.js` has `base: './'`
- Run `npm run build` after any changes

**Store Locator shows blank map?**
- Add a valid Google Maps API key
- Check that the API key has Maps JavaScript API enabled

---

## Next Steps

1. ✅ Deploy the static site (GitHub Pages or Netlify)
2. ✅ Set up Google Maps API key for store locator
3. ✅ Deploy React app to Firebase or similar service
4. ✅ Update company contact information
5. ✅ Configure Google AdSense account
6. ✅ Monitor traffic and analytics

Need help? See `README.md` for detailed setup instructions.
