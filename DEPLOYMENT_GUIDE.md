# 🚀 GitHub & Vercel Deployment Guide

## Step 1: Initialize Git & Push to GitHub

### 1.1 Check Git Status (if already initialized)
```bash
git status
```

### 1.2 Initialize Git (if needed)
```bash
git init
```

### 1.3 Add Remote Repository
```bash
git remote add origin https://github.com/Opawumi/softvicport.git
```

### 1.4 Check Remote (verify it's set correctly)
```bash
git remote -v
```

### 1.5 Add All Files
```bash
git add .
```

### 1.6 Commit Changes
```bash
git commit -m "Complete portfolio redesign with emerald-slate professional theme"
```

### 1.7 Push to GitHub
```bash
git branch -M main
git push -u origin main
```

**Note**: If you get authentication errors, you may need to set up a Personal Access Token (PAT) on GitHub.

---

## Step 2: Deploy to Vercel

### Option A: Vercel Website (Recommended - Easiest)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Login" or "Sign Up" (use your GitHub account)

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select `Opawumi/softvicport`
   - Click "Import"

3. **Configure Settings**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
   
   Leave everything as default - Vercel will auto-detect Next.js!

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - You'll get a URL like: `https://softvicport.vercel.app`

---

### Option B: Vercel CLI (Alternative)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (development preview)
vercel

# Deploy to production
vercel --prod
```

Follow the prompts:
- **Set up and deploy**: Y
- **Which scope**: Select your account
- **Link to existing project**: N
- **Project name**: softvicport (or press Enter for default)
- **Directory**: ./ (press Enter)
- **Override settings**: N

---

## Step 3: Update Production URL

After deployment, update your metadata with the actual production URL:

1. Open `app/layout.tsx`
2. Find line with `metadataBase`
3. Update to your actual Vercel URL:

```typescript
metadataBase: new URL('https://softvicport.vercel.app'),
```

4. Commit and push the change:
```bash
git add app/layout.tsx
git commit -m "Update production URL in metadata"
git push origin main
```

Vercel will automatically redeploy when you push!

---

## Step 4: Verify Deployment

Test your live site:
- [ ] Visit your Vercel URL
- [ ] Test navigation (About, Skills, Projects, Contact)
- [ ] Test mobile menu (resize browser)
- [ ] Click all project links
- [ ] Test contact form (should open email)
- [ ] Check favicon appears
- [ ] Test on mobile device

---

## Troubleshooting

### Authentication Error on Git Push
If you get authentication errors:

1. **Create Personal Access Token (PAT)**:
   - Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name: "Portfolio Deploy"
   - Select scopes: `repo` (all)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

2. **Use Token as Password**:
   ```bash
   git push -u origin main
   # Username: Opawumi
   # Password: [paste your token]
   ```

### Build Fails on Vercel
- Check the build logs in Vercel dashboard
- Common fix: Clear build cache and redeploy
- Ensure all dependencies are in `package.json`

### 404 Not Found
- Make sure you pushed to `main` branch (not `master`)
- Check Vercel is pointing to correct branch
- Verify root directory is set to `./`

---

## 🎉 Success Checklist

After successful deployment:
- [ ] GitHub repo is updated
- [ ] Vercel deployment is live
- [ ] Custom domain configured (optional)
- [ ] Updated LinkedIn with portfolio URL
- [ ] Updated resume/CV
- [ ] Shared on social media

---

## URLs to Save

- **GitHub Repo**: https://github.com/Opawumi/softvicport
- **Vercel Project**: https://vercel.com/[your-username]/softvicport
- **Live Site**: https://softvicport.vercel.app (or your custom domain)

---

## Next Steps

1. **Custom Domain** (optional)
   - Buy a domain (Namecheap, GoDaddy, etc.)
   - Add to Vercel: Project Settings → Domains
   - Update DNS records

2. **Analytics**
   ```bash
   npm install @vercel/analytics
   ```
   Add to `app/layout.tsx`

3. **Share Your Portfolio**
   - LinkedIn profile
   - GitHub profile README
   - Twitter/X bio
   - Resume

---

**Ready to deploy?** Copy the commands from Step 1 and run them in your terminal!
