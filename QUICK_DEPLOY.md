# 🚀 Quick Deploy Instructions

Everything is ready! Follow these simple steps to deploy your portfolio:

## Step 1: Create GitHub Repository

**Go to**: https://github.com/new

**Settings:**
- Repository name: `gagan-malik.github.io` (must match exactly)
- Description: "Personal Portfolio Website"
- Visibility: **Public** (required for free GitHub Pages)
- **DO NOT** check any boxes (README, .gitignore, license)
- Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, run:

```bash
cd /Users/gaganmalik/Development/gagan-malik.github.io
./deploy.sh
```

Or manually:

```bash
cd /Users/gaganmalik/Development/gagan-malik.github.io
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to: https://github.com/gagan-malik/gagan-malik.github.io/settings/pages
2. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**

## Step 4: Visit Your Site! 🎉

Wait 1-2 minutes, then visit:

**https://gagan-malik.github.io**

---

## What's Already Done ✅

- ✅ All files created (HTML, CSS, JS)
- ✅ Email updated to: `contact@gaganmalik.co.uk`
- ✅ Git repository initialized
- ✅ All files committed
- ✅ Remote configured
- ✅ Ready to push!

## Need Help?

Run the deployment script:
```bash
./deploy.sh
```

It will guide you through the process!

