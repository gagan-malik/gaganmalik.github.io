# Gagan Malik - Personal Portfolio

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features dark mode support, smooth animations, and a clean, professional design.

🌐 **Live Site**: [gagan-malik.github.io](https://gagan-malik.github.io)

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark Mode**: Full dark mode support with theme persistence
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with vanilla HTML/CSS/JS - no frameworks, no build step
- **Accessible**: Semantic HTML and proper ARIA labels
- **SEO Friendly**: Proper meta tags and semantic structure

## 🚀 Quick Start

### Option 1: Create New Repository (Recommended)

1. **Create the repository on GitHub:**
   - Go to [GitHub](https://github.com/new)
   - Repository name: `gagan-malik.github.io` (must match your username exactly)
   - Set it to **Public**
   - **Don't** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Initialize and push your code:**
   ```bash
   cd /Users/gaganmalik/Development/gagan-malik.github.io
   git init
   git add .
   git commit -m "Initial commit: Personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/gagan-malik/gagan-malik.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select `Deploy from a branch`
   - Branch: `main` → `/ (root)`
   - Click **Save**

4. **Wait a few minutes** and visit: `https://gagan-malik.github.io`

### Option 2: Use Existing Repository

If you already have a `gagan-malik.github.io` repository:

```bash
cd /Users/gaganmalik/Development
git clone https://github.com/gagan-malik/gagan-malik.github.io.git
cd gagan-malik.github.io
# Copy all files from the current directory to the cloned repo
git add .
git commit -m "Add modern portfolio website"
git push origin main
```

## 📁 Project Structure

```
gagan-malik.github.io/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles and theming
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🎨 Customization

### Update Personal Information

Edit `index.html` to customize:

- **Name and title**: Update the hero section
- **Bio**: Modify the about section
- **Projects**: Add/remove project cards in the projects section
- **Skills**: Update the skills section
- **Contact links**: Update social media and email links

### Update Colors and Styling

Edit `styles.css` to customize:

- **Colors**: Modify CSS variables in `:root` and `[data-theme="dark"]`
- **Fonts**: Change font imports in `index.html` and font-family in CSS
- **Layout**: Adjust container widths, spacing, and grid layouts

### Add New Sections

1. Add a new `<section>` in `index.html`
2. Add corresponding styles in `styles.css`
3. Add navigation link in the navbar if needed
4. The JavaScript will automatically handle smooth scrolling and animations

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with variables, Grid, Flexbox
- **JavaScript (ES6+)**: Vanilla JS for interactivity
- **Google Fonts**: Inter font family
- **GitHub Pages**: Hosting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Features Breakdown

### Navigation
- Fixed navbar with scroll effects
- Smooth scroll to sections
- Active section highlighting
- Mobile-responsive hamburger menu

### Hero Section
- Eye-catching title with gradient
- Call-to-action buttons
- Social media links
- Animated code block

### Projects Section
- Grid layout with project cards
- Hover effects and animations
- Links to GitHub and live demos
- Technology tags

### Skills Section
- Organized by category
- Interactive skill tags
- Hover animations

### Dark Mode
- Toggle button in navbar
- Theme persistence (localStorage)
- Smooth transitions
- Automatic icon updates

## 📝 Notes

- Replace `gaganmalik@example.com` with your actual email address
- Update LinkedIn URL if different
- Add/remove projects as needed
- Customize colors to match your brand

## 🔄 Updates

To update your site:

```bash
cd /Users/gaganmalik/Development/gagan-malik.github.io
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main
```

Changes will be live on GitHub Pages within a few minutes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Built with ❤️ using vanilla web technologies

---

**Need help?** Open an issue or reach out!

