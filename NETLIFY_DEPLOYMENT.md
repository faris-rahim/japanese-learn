# 🚀 Deploy to Netlify with Environment Variables

This guide shows you how to deploy your Japanese Learning Tracker to Netlify with secure Supabase credentials.

---

## 📋 **Quick Deployment Steps**

### **Step 1: Connect to Netlify** (2 minutes)

1. Go to **https://app.netlify.com**

2. Sign up or log in (can use GitHub account)

3. Click **"Add new site"** → **"Import an existing project"**

4. Choose **"Deploy with GitHub"**

5. Authorize Netlify to access your GitHub

6. Select your repository: **`faris-rahim/japanese-learn`**

7. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: *(leave empty)*
   - **Publish directory**: *(leave empty or enter `.`)*

8. Click **"Deploy site"**

---

### **Step 2: Add Environment Variables** (1 minute)

After the initial deploy:

1. In your Netlify site dashboard, go to **"Site configuration"** → **"Environment variables"**

2. Click **"Add a variable"** → **"Add a single variable"**

3. Add your first variable:
   - **Key**: `SUPABASE_URL`
   - **Value**: `https://gwcoprcytfgvjzzuwnic.supabase.co`
   - **Scopes**: Check all (Production, Deploy Previews, Branch deploys)
   - Click **"Create variable"**

4. Add your second variable:
   - **Key**: `SUPABASE_ANON_KEY`
   - **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3Y29wcmN5dGZndmp6enV3bmljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTY1ODIsImV4cCI6MjA3NzQ3MjU4Mn0.yD92KbNIKOZJpQWhv7VmQvls9IhR9kScAyegl-aGMQw`
   - **Scopes**: Check all
   - Click **"Create variable"**

---

### **Step 3: Redeploy** (30 seconds)

1. Go to **"Deploys"** tab

2. Click **"Trigger deploy"** → **"Deploy site"**

3. Wait for the build to complete (~30 seconds)

4. ✅ **Your site is live!** Click the URL to view it

---

## 🌐 **Your Live Site**

Your site will be available at a URL like:
```
https://your-site-name.netlify.app
```

You can customize this URL:
1. Go to **"Site configuration"** → **"Domain management"**
2. Click **"Options"** → **"Edit site name"**
3. Change to something like: `japanese-learn-tracker`

---

## 🔄 **How Environment Variables Work**

### **In Netlify (Production):**
```javascript
// Uses Netlify environment variables
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
```

### **Local Development:**
```javascript
// Falls back to hardcoded values in supabase-config.js
const SUPABASE_URL = 'https://gwcoprcytfgvjzzuwnic.supabase.co';
const SUPABASE_ANON_KEY = 'eyJ...';
```

This way:
- ✅ Production uses secure environment variables
- ✅ Local development works without extra setup
- ✅ Credentials aren't exposed in your GitHub repo

---

## 🔒 **Security Benefits**

### **Before (Hardcoded):**
```javascript
// ❌ Credentials visible in code
const SUPABASE_URL = 'https://gwcoprcytfgvjzzuwnic.supabase.co';
```

### **After (Environment Variables):**
```javascript
// ✅ Credentials hidden in Netlify dashboard
const SUPABASE_URL = process.env.SUPABASE_URL;
```

**Benefits:**
- 🔒 Credentials not in GitHub
- 🔄 Easy to rotate keys
- 🌍 Different keys for staging/production
- 👥 Safe to share code with team

---

## 📱 **Continuous Deployment**

Once set up, every time you push to GitHub:

1. **Push code** → GitHub
2. **Netlify detects** → New commit
3. **Auto-builds** → With environment variables
4. **Auto-deploys** → Live in ~30 seconds

---

## 🧪 **Test Your Live Site**

After deployment:

1. Visit your Netlify URL
2. Open browser console (F12)
3. Look for: `✓ Supabase connected successfully`
4. Complete a quiz
5. Check your Supabase dashboard - data should appear!

---

## 🛠️ **Custom Domain (Optional)**

Want to use your own domain?

1. In Netlify, go to **"Domain management"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `learn-japanese.com`)
4. Follow DNS configuration instructions
5. Netlify provides free SSL certificate!

---

## 📊 **Monitor Your Site**

Netlify provides:
- 📈 **Analytics** - Page views, visitors
- 🚨 **Deploy notifications** - Email/Slack alerts
- 🔍 **Function logs** - Debug issues
- ⚡ **Performance metrics** - Load times

---

## 🔧 **Update Environment Variables**

To change credentials later:

1. Go to Netlify dashboard
2. **Site configuration** → **Environment variables**
3. Click on the variable name
4. Click **"Options"** → **"Edit"**
5. Update the value
6. **Trigger deploy** to apply changes

No need to push code changes!

---

## ⚡ **Netlify Features You Get**

- ✅ **Free hosting** (generous free tier)
- ✅ **HTTPS** (automatic SSL certificate)
- ✅ **CDN** (fast global delivery)
- ✅ **Auto-deploy** (from GitHub)
- ✅ **Preview deploys** (test before merging)
- ✅ **Rollback** (revert to previous versions)
- ✅ **Form handling** (if you add forms later)
- ✅ **Serverless functions** (for advanced features)

---

## 🆘 **Troubleshooting**

### **Site deployed but Supabase not working**

**Check:**
1. Environment variables are set correctly (no typos)
2. Variable names match: `SUPABASE_URL` and `SUPABASE_ANON_KEY`
3. Variables are applied to production scope
4. Site was redeployed after adding variables

### **"process is not defined" error**

This is normal in browsers. The code falls back to hardcoded values.

For browser-only environment variables, consider using a build plugin or inject them during build time.

### **Changes not appearing**

1. Clear your browser cache (Ctrl+Shift+R / Cmd+Shift+R)
2. Check Netlify deploy log for errors
3. Verify correct branch is being deployed

---

## 📚 **Additional Resources**

- **Netlify Docs**: https://docs.netlify.com
- **Environment Variables Guide**: https://docs.netlify.com/environment-variables/overview/
- **Deploy from GitHub**: https://docs.netlify.com/git/overview/

---

## ✅ **Deployment Checklist**

Before deploying:
- [ ] GitHub repository is up to date
- [ ] `supabase-config.js` is NOT committed (in .gitignore)
- [ ] `netlify.toml` is in your repo
- [ ] Supabase credentials ready to add

During deployment:
- [ ] Connected Netlify to GitHub
- [ ] Selected correct repository
- [ ] Added both environment variables
- [ ] Triggered redeploy
- [ ] Site is live and working

After deployment:
- [ ] Tested live site in browser
- [ ] Verified Supabase connection works
- [ ] Completed a quiz on live site
- [ ] Confirmed data appears in Supabase
- [ ] Customized site name (optional)

---

**Your site will be live at**: `https://your-site-name.netlify.app`

Happy deploying! 🚀

