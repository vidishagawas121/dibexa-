# 🚀 Complete PuTTY & Linux Server Deployment Guide for Dibexa

This document outlines the step-by-step instructions to deploy the **Dibexa Project** to any Linux Server (Ubuntu / Debian / AWS EC2 / DigitalOcean / Linode / VPS) using **PuTTY**.

---

## 📋 Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Step 1: Connecting to your Server via PuTTY](#2-step-1-connecting-to-your-server-via-putty)
3. [Step 2: Server Environment Setup (Node.js & Nginx)](#3-step-2-server-environment-setup-nodejs--nginx)
4. [Step 3: Transferring Project to Server](#4-step-3-transferring-project-to-server)
5. [Step 4: Option A — Standard Nginx Deployment (Recommended)](#5-step-4-option-a--standard-nginx-deployment-recommended)
6. [Step 5: Option B — Node.js + PM2 Deployment (Alternative)](#6-step-5-option-b--nodejs--pm2-deployment-alternative)
7. [Step 6: Free SSL Certificate Setup (Let's Encrypt / HTTPS)](#7-step-6-free-ssl-certificate-setup-lets-encrypt--https)
8. [Automating Future Updates with deploy.sh](#8-automating-future-updates-with-deploysh)

---

## 1. Prerequisites
- **Server IP Address** (e.g. `203.0.113.10`)
- **SSH Username & Password / Key** (usually `root` or `ubuntu`)
- **PuTTY** and **PuTTYgen / WinSCP** (optional for drag-and-drop file transfers) installed on your Windows machine.

---

## 2. Step 1: Connecting to your Server via PuTTY

1. Open **PuTTY** on your Windows computer.
2. In the **Host Name (or IP address)** field, enter your server's Public IP address.
3. Ensure **Port** is `22` and Connection type is `SSH`.
4. *(If using an SSH private key `.ppk`)*: Go to `Connection` > `SSH` > `Auth` > `Credentials` and browse to your private key file.
5. Click **Open**.
6. When prompted, enter your login username (e.g., `ubuntu` or `root`) and password.

---

## 3. Step 2: Server Environment Setup (Node.js & Nginx)

Run the following commands in your PuTTY terminal to update packages and install **Node.js (v20+ LTS)**, **npm**, and **Nginx**:

```bash
# Update Ubuntu package lists
sudo apt update && sudo apt upgrade -y

# Install Git, Nginx, and essential build tools
sudo apt install -y git nginx curl build-essential

# Install Node.js 20.x LTS via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installations
node -v    # Should display v20.x.x
npm -v     # Should display 10.x.x
nginx -v   # Should display nginx version
```

---

## 4. Step 3: Transferring Project to Server

### Method 1: Via Git (Recommended)
```bash
# Navigate to web directory
cd /var/www

# Clone your repository
sudo git clone <YOUR_GIT_REPOSITORY_URL> debexa-project

# Change directory ownership to your current user
sudo chown -R $USER:$USER /var/www/debexa-project
cd /var/www/debexa-project
```

### Method 2: Via WinSCP (Direct file transfer from Windows)
1. Open **WinSCP**, connect to your server IP.
2. Create folder `/var/www/debexa-project`.
3. Drag and drop all your project files into `/var/www/debexa-project`.

---

## 5. Step 4: Option A — Standard Nginx Deployment (Recommended)

This is the standard, high-speed production setup for Single Page Applications (SPA).

### 1. Build the production files on server:
```bash
cd /var/www/debexa-project
npm install
npm run build
```

### 2. Configure Nginx:
Copy the pre-configured `nginx.conf` included in the project to Nginx's sites directory:

```bash
# Copy configuration file
sudo cp nginx.conf /etc/nginx/sites-available/debexa

# (Optional) Edit domain name in config:
sudo nano /etc/nginx/sites-available/debexa
# Replace 'your-domain.com' with your actual domain or server IP, then press Ctrl+O, Enter, Ctrl+X to save.

# Enable site and remove default
sudo ln -sf /etc/nginx/sites-available/debexa /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test configuration and reload Nginx
sudo nginx -t
sudo systemctl restart nginx
```

Now open your server IP or domain in a browser — your site is live!

---

## 6. Step 5: Option B — Node.js + PM2 Deployment (Alternative)

If you prefer running a background Node daemon using the included `server.cjs` and `ecosystem.config.cjs`:

```bash
cd /var/www/debexa-project

# Install PM2 globally
sudo npm install -g pm2

# Build the project
npm install
npm run build

# Start the cluster with PM2
pm2 start ecosystem.config.cjs

# Make PM2 restart automatically on server reboots
pm2 save
pm2 startup
```

---

## 7. Step 6: Free SSL Certificate Setup (Let's Encrypt / HTTPS)

To secure your site with a free SSL certificate (`https://`):

```bash
# Install Certbot and the Nginx plugin
sudo apt install -y certbot python3-certbot-nginx

# Obtain and automatically install SSL certificate for dibexa.com
sudo certbot --nginx -d dibexa.com -d www.dibexa.com
```
Follow the on-screen prompts. Certbot will configure automatic renewal.

---

## 8. Automating Future Updates with `deploy.sh`

Whenever you push new updates, simply connect via PuTTY and execute:

```bash
cd /var/www/debexa-project
chmod +x deploy.sh
./deploy.sh
```

This single command will automatically:
1. Pull the latest code (`git pull`)
2. Install new dependencies (`npm install`)
3. Compile optimized production assets (`npm run build`)
4. Reload Nginx without any downtime!
