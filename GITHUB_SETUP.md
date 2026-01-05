# GitHub Repository Setup Guide

## Commands to Push Your Portfolio to GitHub

### Step 1: Initialize Git (if not already done)
```bash
git init
```

### Step 2: Add All Files
```bash
git add .
```

### Step 3: Create Initial Commit
```bash
git commit -m "Initial commit: Softvic portfolio website"
```

### Step 4: Create New Repository on GitHub
1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it (e.g., `softvic-portfolio` or `my-portfolio`)
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 5: Add Remote and Push
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Example:
If your username is `Opawumi` and repo name is `softvic-portfolio`:
```bash
git remote add origin https://github.com/Opawumi/softvic-portfolio.git
git branch -M main
git push -u origin main
```

### Alternative: Using SSH (if you have SSH keys set up)
```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Quick One-Liner (After creating repo on GitHub)
```bash
git init && git add . && git commit -m "Initial commit: Softvic portfolio" && git branch -M main && git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git && git push -u origin main
```

## After Pushing to GitHub

Once your code is on GitHub, you can easily deploy to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

Your portfolio will be live in minutes! 🚀

