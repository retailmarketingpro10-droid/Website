# Retail Marketing Pro — Deployment Guide for Firebase Hosting

This guide walks your developer through deploying the app to Firebase Hosting and connecting a custom domain.

---

## Project Overview

- **Frontend**: React + Vite (optimized production build in `dist/`)
- **Features**: Landing page, CRM dashboard, contact form, product showcase
- **Hosting**: Firebase Hosting (Google Cloud)
- **Domain**: Custom domain (you provide)

---

## Prerequisites

Your developer will need:
- Google account (or create one)
- Firebase project (free tier available)
- Custom domain (registered with any registrar)
- Node.js 16+ installed locally

---

## Step 1: Create a Firebase Project

1. Visit [Firebase Console](https://console.firebase.google.com)
2. Click **"Create a project"**
3. Enter project name (e.g., `retail-marketing-pro`)
4. Accept terms and click **"Create project"**
5. Wait for the project to initialize
6. Copy the **Project ID** (appears in project settings; looks like `retail-marketing-pro-abc123`)

---

## Step 2: Install Firebase CLI and Authenticate

```bash
npm install -g firebase-tools
firebase login
```

The login will open a browser — authenticate with your Google account.

---

## Step 3: Set Firebase Project in Local Config

In the `react-app/` folder:

```bash
cd react-app
firebase use --add
```

When prompted, select your Firebase project from the list. This updates `.firebaserc` with your project ID.

Alternatively, manually edit `.firebaserc`:
```json
{
  "projects": {
    "default": "YOUR_PROJECT_ID"
  }
}
```

---

## Step 4: Deploy the App

```bash
cd react-app

# Build the production version (already done, but re-run if needed)
npm run build

# Deploy to Firebase Hosting
npm run deploy:firebase
```

Firebase will upload the `dist/` folder and provide a live URL:
```
Hosting URL: https://YOUR_PROJECT_ID.web.app
```

Test the app:
- Open the URL in a browser
- Click through pages: landing, products, contact form, dashboard
- Verify all routes work (`/`, `/dashboard`, `/contacts`, `/leads`, `/settings`)

---

## Step 5: Connect Custom Domain

1. In [Firebase Console](https://console.firebase.google.com), open your project
2. Go to **Hosting** → **Domains**
3. Click **"Add domain"**
4. Enter your custom domain (e.g., `retailmarketingpro.com`)
5. Firebase will provide DNS records to add
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
