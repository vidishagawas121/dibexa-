#!/usr/bin/env bash
# ==============================================================================
# Dibexa Project - Automated Production Deployment Script
# Run this inside your server terminal (via PuTTY or SSH)
# Usage: ./deploy.sh
# ==============================================================================

set -e # Exit immediately if a command exits with a non-zero status

echo "🚀 [1/5] Starting Dibexa Production Deployment..."

# 1. Pull latest changes from git repository (if using git)
if [ -d ".git" ]; then
    echo "📦 [2/5] Fetching latest changes from Git..."
    git pull origin main || echo "⚠️ Git pull skipped or not configured to main branch."
else
    echo "ℹ️ [2/5] No .git directory detected, skipping git pull."
fi

# 2. Install dependencies cleanly
echo "📥 [3/5] Installing project dependencies..."
npm install

# 3. Build optimized production bundle
echo "⚙️ [4/5] Building production assets (Vite + TypeScript)..."
npm run build

# 4. Deploy assets to webroot (Optional: configure target directory)
WEBROOT_DIR="/var/www/debexa-project/dist"
if [ -d "/var/www/debexa-project" ]; then
    echo "📁 [5/5] Syncing build files to $WEBROOT_DIR..."
    sudo mkdir -p "$WEBROOT_DIR"
    sudo cp -r dist/* "$WEBROOT_DIR/"
    sudo chown -R www-data:www-data /var/www/debexa-project
    
    # Reload Nginx if installed and running
    if command -v nginx > /dev/null 2>&1; then
        echo "🔄 Testing and reloading Nginx..."
        sudo nginx -t && sudo systemctl reload nginx
    fi
else
    echo "✅ [5/5] Build complete! Output available in ./dist directory."
fi

echo "🎉 Deployment successfully finished!"
