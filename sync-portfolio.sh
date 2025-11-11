#!/bin/bash

# Sync Portfolio Script
# This script builds the Astro project and syncs it with GitHub Pages

echo "🚀 Starting portfolio sync..."

# Build the project
echo "📦 Building Astro project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Exiting..."
    exit 1
fi

echo "✅ Build completed successfully"

# Copy built files to root directory
echo "📋 Copying built files to root directory..."
cp dist/index.html . 2>/dev/null || echo "Warning: index.html not found in dist/"
cp dist/favicon.svg . 2>/dev/null || echo "Warning: favicon.svg not found in dist/"

# Copy _astro directory
if [ -d "dist/_astro" ]; then
    cp -r dist/_astro . 2>/dev/null || echo "Warning: Failed to copy _astro directory"
else
    echo "Warning: _astro directory not found in dist/"
fi

echo "✅ Files copied successfully"

# Add changes to git
echo "📝 Adding changes to git..."
git add index.html favicon.svg _astro/ 2>/dev/null || echo "Warning: Some files may not exist"

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit. Portfolio is already up to date!"
    exit 0
fi

# Commit changes
echo "💾 Committing changes..."
git commit -m "Sync portfolio: $(date '+%Y-%m-%d %H:%M:%S')"

if [ $? -ne 0 ]; then
    echo "❌ Commit failed! Exiting..."
    exit 1
fi

# Push to GitHub Pages
echo "🚀 Pushing to GitHub Pages..."
git push origin gh-pages

if [ $? -ne 0 ]; then
    echo "❌ Push failed! Exiting..."
    exit 1
fi

echo "🎉 Portfolio synced successfully!"
echo "🌐 Live at: https://bistark.github.io"