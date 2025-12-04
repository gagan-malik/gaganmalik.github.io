# 🚀 Quick Setup Guide for GitHub Pages

Follow these steps to deploy your portfolio to `gagan-malik.github.io`:

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: **`gagan-malik.github.io`** (must match your username exactly)
3. Description: "Personal Portfolio Website"
4. Visibility: **Public** (required for free GitHub Pages)
5. **DO NOT** check any boxes (README, .gitignore, license)
6. Click **"Create repository"**

## Step 2: Initialize Git and Push

Run these commands in your terminal:

```bash
cd /Users/gaganmalik/Development/gagan-malik.github.io

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Personal portfolio website"

# Set main branch
git branch -M main

# Add remote (replace with your actual username if different)
git remote add origin https://github.com/gagan-malik/gagan-malik.github.io.git

# Push to GitHub
git push -u origin main
```

**Note**: You may need to authenticate. If you have SSH set up, use:
```bash
git remote set-url origin git@github.com:gagan-malik/gagan-malik.github.io.git
```

## Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/gagan-malik/gagan-malik.github.io
2. Click **Settings** (top menu bar)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 4: Wait for Deployment

- GitHub Pages usually deploys within 1-2 minutes
- You'll see a green checkmark when it's ready
- Visit: **https://gagan-malik.github.io**

## Step 5: Customize Your Site

Before or after deployment, customize:

### Update Personal Info (`index.html`)

1. **Email**: Already set to `contact@gaganmalik.co.uk` (or update if needed)
2. **LinkedIn**: Update the LinkedIn URL if different
3. **About section**: Modify the bio text
4. **Projects**: Add/remove/edit project cards
5. **Skills**: Update skills lists

### Update Colors (`styles.css`)

Edit the CSS variables at the top of `styles.css`:
- `--accent-primary`: Your brand color (currently blue)
- `--text-primary`: Main text color
- `--bg-primary`: Background color

## 🔄 Making Updates

To update your site:

```bash
cd /Users/gaganmalik/Development/gagan-malik.github.io
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main
```

Changes will be live within 1-2 minutes!

## ❓ Troubleshooting

### Repository Not Found
- Make sure the repository name is exactly `gagan-malik.github.io`
- Check that it's set to **Public**

### 404 Error After Deployment
- Wait 2-3 minutes for DNS to propagate
- Clear your browser cache
- Try incognito/private mode
- Check GitHub Pages settings again

### Build Failed
- This is a static site, so there's no build step
- Check that all files are pushed correctly
- Verify `index.html` is in the root directory

### Theme Not Working
- Clear browser cache
- Check browser console for JavaScript errors
- Verify `script.js` is loaded correctly

## 📝 Next Steps

1. ✅ Customize your personal information
2. ✅ Add more projects or update existing ones
3. ✅ Update social media links
4. ✅ Add a custom domain (optional)
5. ✅ Share your portfolio!

## 🎉 You're All Set!

Your portfolio should now be live at **https://gagan-malik.github.io**

Need help? Check the main README.md for more details!

