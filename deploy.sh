#!/bin/bash

# Securova - GitHub Pages Deployment Script

echo "🚀 Building Securova for production..."
npm run build

echo "📦 Preparing deployment..."
cd dist

# Initialize git in dist folder
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
# Replace YOUR_USERNAME and YOUR_REPO with your GitHub details
git push -f git@github.com:YOUR_USERNAME/securova.git main:gh-pages

cd ..
echo "✅ Deployed to GitHub Pages!"
echo "🌐 Your site will be available at: https://YOUR_USERNAME.github.io/securova/"

