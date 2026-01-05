# Deploy Your Portfolio to Vercel

## Method 1: Deploy via Vercel Website (Recommended - Easiest)

### Step 1: Sign Up / Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub" to connect your GitHub account

### Step 2: Import Your Repository
1. Once logged in, click **"Add New Project"** or **"New Project"**
2. You'll see a list of your GitHub repositories
3. Find and select your portfolio repository (the one you just pushed)
4. Click **"Import"**

### Step 3: Configure Project (Auto-detected!)
Vercel will automatically detect:
- **Framework Preset:** Next.js ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** `.next` ✅
- **Install Command:** `npm install` ✅

**You don't need to change anything!** Just click **"Deploy"**

### Step 4: Wait for Deployment
- Vercel will build and deploy your site (takes 1-3 minutes)
- You'll see a progress log
- Once done, you'll get a live URL like: `your-portfolio.vercel.app`

### Step 5: Done! 🎉
Your portfolio is now live! Vercel will automatically:
- Deploy every time you push to GitHub
- Provide HTTPS automatically
- Give you a free custom domain

---

## Method 2: Deploy via Vercel CLI (Alternative)

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This will open your browser to authenticate.

### Step 3: Deploy
From your project directory, run:
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No (for first time)
- **Project name?** → Press Enter (uses folder name) or type custom name
- **Directory?** → Press Enter (uses current directory)
- **Override settings?** → No

### Step 4: Production Deploy
For production deployment:
```bash
vercel --prod
```

---

## Custom Domain (Optional)

### Add Your Own Domain:
1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Vercel will automatically configure SSL/HTTPS

---

## Automatic Deployments

Once connected to GitHub, Vercel will:
- ✅ Automatically deploy when you push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Show deployment status in GitHub

---

## Troubleshooting

### Build Fails?
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify `next.config.js` is correct

### Environment Variables?
If you add any later:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## Your Portfolio is Live! 🚀

Once deployed, share your Vercel URL:
- Example: `https://softvic-portfolio.vercel.app`
- Or your custom domain if you added one

