# Retail Marketing Pro — Static site

This folder contains a minimal static version of the Retail Marketing Pro landing page.

Quick start (from this folder):

```bash
# start a simple HTTP server on port 8000
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Place the logo image you uploaded into `assets/logo.png` so the page shows the provided logo.

To deploy: push to GitHub and enable GitHub Pages from the repository settings, or drag the folder into Netlify/Vercel.

---

## Firebase Hosting (React app)

1. Install the Firebase CLI and login:

```bash
npm install -g firebase-tools
firebase login
```

2. Build the React app and initialize hosting (one-time):

```bash
cd react-app
npm run build
firebase init hosting
# When prompted: choose your Firebase project, set public directory to `dist`, and answer "Yes" to single-page app (rewrite all URLs to /index.html).
```

3. Deploy:

```bash
npm run deploy:firebase
```

You can set the default project by editing `react-app/.firebaserc` or by running `firebase use --add`.
