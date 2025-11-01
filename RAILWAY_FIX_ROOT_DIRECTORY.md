# 🚨 RAILWAY BUILD ERROR - QUICK FIX

## ❌ Error You're Seeing:

```
⚠ Script start.sh not found
✖ Railpack could not determine how to build the app.
```

Railway is analyzing the **ROOT** directory and finding:
- Backend/
- FrontEnd/
- Documentation files

**But it needs to analyze the Backend/ folder specifically!**

---

## ✅ SOLUTION - Set Root Directory

### Step-by-Step Fix:

1. **Go to Railway Dashboard**
   - https://railway.app

2. **Click on Your Service**
   - Should be named something like "My-App" or "hotel-safe"

3. **Click "Settings" Tab**
   - Located at the top of the service page

4. **Find "Service Settings" Section**
   - Scroll down if needed

5. **Locate "Root Directory" Field**
   - It's currently empty or set to `/`

6. **Enter the Root Directory:**
   ```
   Backend
   ```
   **IMPORTANT:** 
   - No leading slash
   - No trailing slash
   - Just: `Backend`

7. **Save Changes**
   - Railway will automatically redeploy

---

## 🔄 After Setting Root Directory

Railway will now see:
```
Backend/
├── app.js
├── db.js
├── package.json         ← Railway will find this!
├── railway.json         ← Railway will use this!
├── Controller/
├── Model/
├── Routes/
└── components/
```

**Expected Build Output:**
```
✓ Detected Node.js application
✓ Installing dependencies...
✓ Running npm install
✓ Build successful
✓ Starting with: npm start
```

---

## 📸 Visual Guide

**Railway Settings Location:**

```
Service Page
├── Deployments  ← Build logs are here
├── Variables    ← Environment variables
├── Settings     ← YOU NEED THIS TAB
│   └── Service Settings
│       └── Root Directory: [Backend]  ← Enter here
├── Metrics
└── Logs
```

---

## ⚙️ Complete Configuration

After setting root directory, verify these settings:

### Build Settings (Auto-detected)
- ✅ **Build Command:** `npm install --production=false`
- ✅ **Start Command:** `npm start`

### Service Settings
- ✅ **Root Directory:** `Backend`
- ✅ **Watch Paths:** Leave empty (auto-detect)

### Environment Variables
Make sure these are set in **Variables** tab:
```bash
PORT=3000
NODE_ENV=production
MONGO_URL=your_mongodb_url
SESSION_SECRET=your_secret
CORS_ORIGIN=http://localhost:5173
CLOUD_NAME=your_cloudinary_cloud
API_KEY=your_cloudinary_key
API_SECRET=your_cloudinary_secret
```

---

## 🧪 Testing After Fix

1. **Check Build Logs:**
   - Go to "Deployments" tab
   - Click latest deployment
   - Watch "Build Logs"
   - Should see: "Installing dependencies" → "Build successful"

2. **Check Deploy Logs:**
   - Click "Deploy Logs" tab
   - Should see:
     ```
     🗄️ MongoDB Connected Successfully!
     Server running on port 3000
     ```

3. **Test Health Endpoint:**
   - Copy your Railway URL
   - Visit: `https://your-app.railway.app/health`
   - Should return JSON:
     ```json
     {
       "status": "OK",
       "timestamp": "2025-11-01T...",
       "uptime": 123.45,
       "environment": "production"
     }
     ```

---

## 🔧 Alternative: Use Railway CLI

If you prefer command line:

1. **Install Railway CLI:**
   ```powershell
   npm install -g @railway/cli
   ```

2. **Login:**
   ```powershell
   railway login
   ```

3. **Link Project:**
   ```powershell
   cd C:\Users\hp\Desktop\My-App\Backend
   railway link
   ```

4. **Deploy:**
   ```powershell
   railway up
   ```

---

## 🆘 Still Not Working?

### Option 1: Create nixpacks.toml in Backend/

Create `Backend/nixpacks.toml`:
```toml
[phases.setup]
nixPkgs = ['nodejs_20']

[phases.install]
cmds = ['npm install --production=false']

[phases.build]
cmds = ['echo "No build step needed"']

[start]
cmd = 'npm start'
```

### Option 2: Use railway.json (Already exists!)

Your `Backend/railway.json` already has correct config:
```json
{
  "build": {
    "buildCommand": "npm install --production=false"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/health",
    "healthcheckTimeout": 100
  }
}
```

**This should work automatically once Root Directory is set!**

---

## ✅ Success Indicators

You'll know it's fixed when you see:

**In Build Logs:**
```
[build] Detected Node.js app
[build] Installing dependencies
[build] npm install --production=false
[build] added 150 packages
[build] Build complete
```

**In Deploy Logs:**
```
To see in Root: /app
🗄️ MongoDB Connected Successfully!
Server running on port 3000
http://localhost:3000
```

**In Browser:**
```
https://your-app.railway.app/health
→ Returns { "status": "OK" }
```

---

## 📝 Quick Checklist

Before redeploying:

- [ ] Root Directory set to `Backend`
- [ ] All 8 environment variables added
- [ ] MONGO_URL is correct (test in MongoDB Compass)
- [ ] SESSION_SECRET is set (min 32 characters)
- [ ] package.json exists in Backend/
- [ ] railway.json exists in Backend/
- [ ] app.js exists in Backend/

---

## 🎯 TL;DR - Do This Now:

1. **Railway Dashboard** → Your Service → **Settings** tab
2. Find **"Root Directory"** field
3. Enter: `Backend`
4. Wait for auto-redeploy
5. Check logs for success

**That's it!** 🚀

---

**Last Updated:** November 1, 2025  
**Issue:** Railpack build detection failure  
**Solution:** Set root directory to Backend folder
