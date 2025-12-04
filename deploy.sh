#!/bin/bash

# Deployment script for gagan-malik.github.io
# This script helps you deploy your portfolio to GitHub Pages

set -e

REPO_NAME="gagan-malik.github.io"
GITHUB_USER="gagan-malik"
REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo "🚀 GitHub Pages Deployment Script"
echo "=================================="
echo ""

# Check if repository exists on GitHub
echo "📡 Checking if repository exists on GitHub..."
if git ls-remote "$REPO_URL" &> /dev/null; then
    echo "✅ Repository exists on GitHub!"
    echo ""
    echo "🔄 Pushing changes to GitHub..."
    git push -u origin main
    echo ""
    echo "✅ Code pushed successfully!"
else
    echo "❌ Repository not found on GitHub."
    echo ""
    echo "📋 Please create the repository first:"
    echo ""
    echo "Option 1: Using GitHub Website (Recommended)"
    echo "--------------------------------------------"
    echo "1. Go to: https://github.com/new"
    echo "2. Repository name: ${REPO_NAME}"
    echo "3. Description: Personal Portfolio Website"
    echo "4. Visibility: Public (required for free GitHub Pages)"
    echo "5. DO NOT check 'Add a README file'"
    echo "6. DO NOT add .gitignore or license"
    echo "7. Click 'Create repository'"
    echo ""
    echo "Option 2: Using GitHub CLI (if installed)"
    echo "------------------------------------------"
    echo "Run this command:"
    echo "  gh repo create ${REPO_NAME} --public --source=. --remote=origin --push"
    echo ""
    
    read -p "Have you created the repository? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo ""
        echo "🔄 Pushing code to GitHub..."
        git push -u origin main
        echo ""
        echo "✅ Code pushed successfully!"
    else
        echo ""
        echo "⏸️  Please create the repository first, then run this script again."
        exit 1
    fi
fi

echo ""
echo "📄 Next Steps:"
echo "=============="
echo ""
echo "1. Go to: https://github.com/${GITHUB_USER}/${REPO_NAME}/settings/pages"
echo "2. Under 'Source', select:"
echo "   - Branch: main"
echo "   - Folder: / (root)"
echo "3. Click 'Save'"
echo ""
echo "4. Wait 1-2 minutes, then visit:"
echo "   🌐 https://${REPO_NAME}"
echo ""
echo "✨ Your portfolio will be live!"

