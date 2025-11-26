# Quick Start for Developer

1. **Clone or extract** this repo
2. **Install dependencies**:
   ```bash
   cd react-app
   npm install
   ```
3. **Set up Firebase**:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use --add  # Select your Firebase project
   ```
4. **Build & Deploy**:
   ```bash
   npm run build
   npm run deploy:firebase
   ```
5. **Connect domain** (see `DEPLOYMENT_GUIDE.md`)

Your site will be live at `https://your-project-id.web.app` within minutes.

**For questions**, see `DEPLOYMENT_GUIDE.md` for full setup instructions.
