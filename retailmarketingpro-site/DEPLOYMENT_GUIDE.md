# Retail Marketing Pro-Assam — Complete Deployment Guide

This guide walks you through deploying the complete website: static landing page, store locator, and React CRM dashboard.

---

## Project Overview

- **Static Site**: Responsive landing page showcasing solutions, videos, and store locator
- **Store Locator**: Google Maps integration with company location
- **React Dashboard**: Interactive CRM with contacts, leads, and analytics
- **Monetization**: Google AdSense ready with fraud prevention (ads.txt)
- **Branding**: Professional dark theme with orange/green accents

---

## Prerequisites

Your developer will need:
- GitHub account (for source control)
- Google account (for Maps API and AdSense)
- Firebase account (free tier available) — for React app hosting
- Node.js 16+ (for React app builds)
- Domain name (optional, can use GitHub Pages URL)

---

## Part 1: Deploy Static Landing Page

### Option A: GitHub Pages (Free)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Retail Marketing Pro-Assam website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Branch: `main`
   - Folder: `/ (root)` or `/retailmarketingpro-site`
   - Click **Save**

3. **Access**: `https://yourusername.github.io/Website/retailmarketingpro-site/`

**Pros**: Free, automatic updates on git push, GitHub handles SSL  
**Cons**: URL includes repo name

### Option B: Netlify (Recommended)

1. **Connect GitHub** at https://netlify.com
2. **Authorize Netlify** and select this repository
3. **Configure**:
   - Build command: (leave empty — no build needed)
   - Publish directory: `retailmarketingpro-site`
4. **Deploy** — Netlify builds and deploys automatically
5. **Custom domain** (optional): Go to Domain Settings and add your domain

**Pros**: Free HTTPS, custom domain, automatic deployments, faster CDN  
**Cons**: Requires account signup

### Option C: Vercel

1. Visit https://vercel.com and connect your GitHub account
2. **Import Project** and select this repository
3. **Configure**:
   - Framework: Static Site (Astro, Next.js, etc.) — choose **Other**
   - Root Directory: `retailmarketingpro-site`
4. **Deploy**

---

## Part 2: Set Up Google Maps for Store Locator

1. **Create Google Cloud Project**: https://console.cloud.google.com
2. **Enable Maps JavaScript API**:
   - Go to **APIs & Services** → **Library**
   - Search for "Maps JavaScript API" → Click → **Enable**
3. **Create API Key**:
   - Go to **APIs & Services** → **Credentials**
   - Click **Create Credentials** → **API Key**
   - Copy the key
4. **Update store-locator.html**:

   ```html
   <!-- Near top of file -->
   <gmpx-api-loader key="YOUR_API_KEY_HERE" ...></gmpx-api-loader>
   
   <!-- In the script section -->
   const CONFIGURATION = {
     "mapsApiKey": "YOUR_API_KEY_HERE",
     ...
   }
   ```

5. **Restrict API Key** (recommended):
   - In Credentials, click your key
   - Under "API restrictions", select "Maps JavaScript API"
   - Under "Application restrictions", select "HTTP referrers" and add your domain

---

## Part 3: Deploy React CRM App to Firebase Hosting

### Step 1: Create Firebase Project

1. Visit https://console.firebase.google.com
2. Click **Create a project**
3. Enter name (e.g., `retail-marketing-pro-assam`)
4. Accept terms → **Create project**
5. Copy your **Project ID** from project settings

### Step 2: Connect Locally

```bash
cd react-app
npm install
npm install -g firebase-tools
firebase login
```

### Step 3: Set Firebase Project

```bash
firebase use --add
# Select your Firebase project from the list
```

This updates `.firebaserc` with your project ID.

### Step 4: Build & Deploy

```bash
npm run build
firebase deploy --only hosting
```

Firebase will output:
```
Hosting URL: https://YOUR_PROJECT_ID.web.app
```

### Step 5: Test the App

- Open the Hosting URL
- Navigate: Landing → Products → Contact → Dashboard → Contacts → Leads → Settings
- Verify all pages load and styles are correct

---

## Part 4: Connect Custom Domain

### For Static Site (GitHub Pages)
1. Add a `CNAME` file in `retailmarketingpro-site/`:
   ```
   yourdomain.com
   ```
2. In your domain registrar, add a CNAME record pointing to GitHub Pages

### For React App (Firebase)
1. In Firebase Console → **Hosting** → **Domains**
2. Click **Add domain** → Enter your domain
3. Firebase provides DNS records to add at your registrar
4. DNS propagation takes 24-48 hours

### For Both (Recommended)
Use a subdomain routing:
- `your-domain.com` → Static site (GitHub/Netlify)
- `app.your-domain.com` → React app (Firebase)

---

## Part 5: Configure Google AdSense (Monetization)

1. Sign up at https://www.google.com/adsense/ with your Google account
2. Add your website URL
3. Copy your **Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXX`)
4. AdSense script is already in all pages and `ads.txt` is configured
5. Wait for approval (24-48 hours typically)
6. Once approved, place ad units on pages:

   ```html
   <div style="text-align:center">
     <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
     <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
     </script>
   </div>
   ```

---

## Part 6: Final Checklist

- ✅ Static site deployed (GitHub Pages / Netlify / Vercel)
- ✅ Static site accessible at custom domain (optional)
- ✅ Store Locator page loads with Google Maps
- ✅ React app deployed to Firebase Hosting
- ✅ React app accessible at web.app URL or custom domain
- ✅ All videos play without errors
- ✅ All links work (navigation, external links)
- ✅ Mobile responsive on 320px+ screens
- ✅ Google AdSense approved and ad units placed
- ✅ dns/SSL certificates configured (auto via Firebase/Netlify)

---

## Maintenance

### Monthly
- Monitor AdSense earnings and CTR
- Check analytics for traffic patterns
- Backup database if any backend added

### Quarterly
- Update React dependencies: `npm update`
- Test all forms and contact flows
- Verify all external links still work
- Review and update content as needed

### On-Demand
- Deploy updates: `git push` → auto-deploy on hosting platforms
- Update team contact info in `react-app/src/data/content.js`
- Refresh product screenshots/descriptions

---

## Troubleshooting

### Static site shows blank page
- Verify `index.html` in `retailmarketingpro-site` folder
- Check browser console for 404 errors on assets

### React app shows 404
- Ensure `dist` folder is deployed (run `npm run build`)
- Verify `firebase.json` points to correct directory
- Check Firebase Hosting in console for deploy errors

### Store Locator blank map
- Verify Google Maps API key is valid
- Check API key has Maps JavaScript API enabled
- Look for CORS errors in browser console

### Videos not playing
- Verify file paths: `assets/solutions-we-offer.mp4`, `assets/second-video.mp4`
- Check file sizes (both should be ~40MB and ~7MB respectively)
- Test video playback locally first

---

## Support

For detailed technical setup, see:
- `README.md` — Project overview and features
- `QUICK_START.md` — Fast deployment steps
- Individual file comments in HTML/CSS

For questions about specific services:
- Firebase: https://firebase.google.com/support
- GitHub Pages: https://docs.github.com/en/pages
- Netlify: https://docs.netlify.com
- Google Maps: https://developers.google.com/maps
- Google AdSense: https://support.google.com/adsense

---

**Last Updated**: May 4, 2026  
**Project**: Retail Marketing Pro-Assam
6. Log into your domain registrar (GoDaddy, Namecheap, etc.) and add the DNS records
7. Wait 5–30 minutes for DNS propagation
8. Return to Firebase Hosting → Domains — it will verify and enable HTTPS automatically

Your app is now live at your domain!

---

## Step 6: (Optional) Post-Deployment Tweaks

### Update Contact Form Endpoint
The contact form currently simulates submission locally. To save leads to a backend:

1. Create a backend API (Node/Express, Firebase Functions, Supabase, etc.)
2. Update `react-app/src/components/ContactSection.jsx`:
   - Replace the `handleSubmit` function to POST to your API endpoint
   - Example:
     ```javascript
     const response = await fetch('/api/contact', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     })
     ```

### Update Logo
Replace `react-app/src/assets/logo.jpg` with your final logo. Rebuild and redeploy:
```bash
npm run build
npm run deploy:firebase
```

### Add Analytics
In `react-app/index.html`, add Firebase Analytics (optional):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

---

## Folder Structure

```
retailmarketingpro-site/
├── react-app/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/content.js         # Company info, products, features
│   │   ├── assets/logo.jpg          # Business logo
│   │   └── App.jsx
│   ├── dist/                        # Production build (ready to deploy)
│   ├── firebase.json               # Firebase Hosting config
│   ├── .firebaserc                 # Firebase project settings
│   ├── Dockerfile                  # (Optional) For Cloud Run
│   └── package.json
├── index.html                       # Static landing page (optional)
├── styles.css                       # Static styles
├── assets/
│   ├── logo.png                     # Logo for static site
│   └── hero.jpg
└── README.md                        # This file
```

---

## Troubleshooting

**"Permission denied" when deploying?**
- Run `firebase logout` then `firebase login` again
- Ensure you're logged in to the correct Google account
- Verify the Firebase project exists and you have Contributor role

**"Cannot find module" errors?**
- Run `npm install` in `react-app/`
- Ensure Node.js version is 16+

**Custom domain not working?**
- Wait 30+ minutes for DNS propagation
- Check DNS records in your registrar match Firebase's settings exactly
- Verify your domain isn't already in use on another Firebase project

**Build fails?**
- Run `npm run build` to see the full error
- Clear cache: `rm -rf node_modules dist && npm install && npm run build`

---

## Support & Next Steps

- **Firebase Docs**: https://firebase.google.com/docs/hosting
- **React + Vite**: https://vitejs.dev/guide/
- **Custom Domain Setup**: https://firebase.google.com/docs/hosting/custom-domain

For backend integration (contact form, CRM features, auth), consider:
- Firebase Functions (serverless)
- Firebase Realtime Database / Firestore (data storage)
- Auth0 (authentication)
- Your own backend server

---

**Live in 5–10 minutes. Good luck!** 🚀
