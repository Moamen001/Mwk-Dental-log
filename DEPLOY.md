# 🦷 DentaLog — Deploy as a Real App (5 minutes)

## What you're getting
A PWA (Progressive Web App) that:
- Installs on your iPhone/Android **home screen** like a native app
- Works completely **offline** — no internet needed after first load
- Has its own **app icon** and full-screen mode (no browser bars)
- Saves all data locally on your device

---

## Step 1 — Create a free GitHub account
Go to https://github.com and sign up (free).

---

## Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it exactly: `dentalog`
3. Set it to **Public**
4. Click **Create repository**

---

## Step 3 — Upload your files
In your new repository, click **uploading an existing file** (or drag & drop).

Upload ALL these files at once:
- `index.html`
- `manifest.json`
- `sw.js`
- `icon-192.png`
- `icon-512.png`

Click **Commit changes**.

---

## Step 4 — Enable GitHub Pages
1. Go to your repository **Settings** tab
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main** → folder: **/ (root)**
5. Click **Save**

Wait ~1 minute, then your app will be live at:
**https://YOUR-USERNAME.github.io/dentalog**

---

## Step 5 — Install on your iPhone
1. Open **Safari** on your iPhone
2. Go to your URL: `https://YOUR-USERNAME.github.io/dentalog`
3. Tap the **Share** button (box with arrow up) at the bottom
4. Tap **"Add to Home Screen"**
5. Tap **Add**

**DentaLog now appears on your home screen as a real app!**

---

## Step 5b — Install on Android
1. Open **Chrome** on your Android
2. Go to your URL
3. Tap the **⋮** menu → **Add to Home screen**
4. Tap **Add**

---

## Backup your data
Your data is saved on your device. To back it up or move to another device:
- Open the app in the browser (not installed version)
- Open browser console (Safari: Settings → Advanced → Show Web Inspector)
- Type: `exportDentaLog()` and press Enter
- A JSON backup file downloads automatically

To restore: type `importDentaLog()` and select your backup file.

---

## Keep it private
Your app URL will be public but your **data never leaves your device** — it's all stored locally in your browser's storage, never uploaded anywhere.

If you want the URL to be private, upgrade to GitHub Pro ($4/month) and set the repository to Private, then re-enable Pages.

---

## Update the app
Whenever you want to update DentaLog:
1. Upload the new `index.html` to GitHub (same steps as above, it will replace the old one)
2. Hard-refresh the app on your phone: in Safari, hold the refresh button → **Reload Without Content Blockers**

---

*Built with DentaLog © 2025 — Your data, your device.*
