# Securova - Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Zero configuration needed
- Automatic deployments from Git
- Free SSL certificate
- Global CDN
- Perfect for React/Vite apps

**Steps:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"

**Done!** Your app will be live at `https://securova.vercel.app`

---

### Option 2: Netlify

**Steps:**
1. Build your app: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist` folder
4. Your site is live!

**Or connect GitHub:**
1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import from Git"
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Deploy"

---

### Option 3: GitHub Pages

**Steps:**

1. **Update vite.config.ts:**
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/securova/', // Your repo name
   })
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   cd dist
   git init
   git add -A
   git commit -m "Deploy"
   git push -f git@github.com:USERNAME/securova.git main:gh-pages
   ```

3. **Enable GitHub Pages:**
   - Go to your repo settings
   - Pages → Source → gh-pages branch
   - Save

**Live at:** `https://USERNAME.github.io/securova/`

---

### Option 4: Render

**Steps:**
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New Static Site"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Create Static Site"

---

### Option 5: Cloudflare Pages

**Steps:**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign up and connect GitHub
3. Select your repository
4. Framework preset: Vite
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy!

---

## 📝 Pre-Deployment Checklist

- [ ] Test the production build locally: `npm run build && npm run preview`
- [ ] Update environment variables if needed
- [ ] Check all routes work correctly
- [ ] Test on mobile devices
- [ ] Verify dark mode works
- [ ] Test all forms and buttons

---

## 🔧 Build Commands Reference

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🌐 Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as shown
4. Done!

### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS instructions
4. SSL auto-configured

---

## 🔒 Environment Variables

If you add backend APIs later:

**Vercel:**
- Go to Project Settings → Environment Variables
- Add your variables
- Redeploy

**Netlify:**
- Go to Site Settings → Environment Variables
- Add your variables
- Trigger new deploy

---

## 📊 Monitoring

All platforms provide:
- Analytics
- Build logs
- Error tracking
- Performance metrics

---

## 💡 Tips

1. **Use Vercel or Netlify** - They're the easiest and most reliable
2. **Connect GitHub** - Get automatic deployments on every push
3. **Enable HTTPS** - All platforms provide free SSL
4. **Add custom domain** - Makes your site look professional
5. **Monitor builds** - Check build logs if deployment fails

---

## 🆘 Troubleshooting

**Build fails?**
- Check Node version matches your local (18+)
- Verify all dependencies are in package.json
- Check build logs for errors

**Routes not working?**
- Add `_redirects` file for Netlify
- Vercel handles this automatically
- For GitHub Pages, use HashRouter instead

**Blank page?**
- Check browser console for errors
- Verify base path in vite.config.ts
- Check if assets are loading correctly

---

## 🎉 Recommended: Vercel

For the best experience with your Securova app, I recommend **Vercel**:

1. Push to GitHub
2. Import to Vercel
3. Deploy
4. Done in 2 minutes!

Your app will be live at a URL like: `https://securova-marketplace.vercel.app`

---

Need help? Check the platform documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages](https://pages.github.com)

