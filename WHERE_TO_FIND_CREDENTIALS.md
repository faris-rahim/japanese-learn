# 🔑 Where to Find Your Supabase Credentials

This guide shows you **exactly** where to find your Supabase Project URL and API key.

---

## 📍 **Visual Guide**

### Step 1: Open Your Supabase Project

1. Go to: **https://app.supabase.com**
2. Log in to your account
3. Click on your project: **`japanese-learning-tracker`** (or whatever you named it)

---

### Step 2: Navigate to API Settings

Look at the **left sidebar** of your Supabase dashboard:

```
┌─────────────────────────┐
│  📊 Dashboard           │
│  📝 Table Editor        │
│  🔍 SQL Editor          │
│  🗂️  Database           │
│  👥 Authentication      │
│  📦 Storage             │
│  🔌 Edge Functions      │
│  📈 Logs                │
│                         │
│  ⚙️  Settings          │ ← CLICK HERE
└─────────────────────────┘
```

1. Click the **⚙️ Settings** icon (gear icon at the bottom of the sidebar)

---

### Step 3: Click "API" in Settings Menu

After clicking Settings, you'll see a submenu:

```
Settings
├── General
├── Database
├── API              ← CLICK HERE
├── Auth
├── Storage
└── Billing
```

1. Click **"API"**

---

### Step 4: Copy Your Project URL

You'll now see the API Settings page. Look for the first section:

```
┌──────────────────────────────────────────────────────┐
│  Configuration                                        │
├──────────────────────────────────────────────────────┤
│                                                       │
│  Project URL                                          │
│  ┌────────────────────────────────────────┐ 📋      │
│  │ https://xxxxxxxxxxxxx.supabase.co      │ [Copy]  │ ← COPY THIS
│  └────────────────────────────────────────┘          │
│                                                       │
└──────────────────────────────────────────────────────┘
```

1. Click the **📋 Copy** button next to your Project URL
2. Paste it somewhere safe (notepad, sticky note, etc.)

**Example**: `https://abcdefghijklmno.supabase.co`

---

### Step 5: Copy Your Anon Public Key

Scroll down on the same page to the **"Project API keys"** section:

```
┌──────────────────────────────────────────────────────┐
│  Project API keys                                     │
├──────────────────────────────────────────────────────┤
│                                                       │
│  anon  public                                         │
│  ┌────────────────────────────────────────┐ 📋      │
│  │ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...│ [Copy]  │ ← COPY THIS
│  └────────────────────────────────────────┘          │
│                                                       │
│  service_role  secret                                 │
│  ┌────────────────────────────────────────┐ 📋      │
│  │ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...│ [Copy]  │ ← DON'T USE THIS
│  └────────────────────────────────────────┘          │
│                                                       │
└──────────────────────────────────────────────────────┘
```

**IMPORTANT**: 
- ✅ **Copy the `anon public` key** (the first one)
- ❌ **DO NOT use the `service_role secret` key** (it's for server-side only)

1. Click the **📋 Copy** button next to **"anon public"**
2. Paste it somewhere safe

**Example**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ubyIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzA...`

---

## ✏️ **How to Add Them to Your App**

Now that you have both credentials:

### 1. Open Your Config File

Open this file in any text editor:
```
/Users/todakstudios/Learn Japanese/japanese-learn/supabase-config.js
```

### 2. Find These Lines (Near the Top)

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

### 3. Replace with Your Actual Credentials

**Before:**
```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

**After:**
```javascript
const SUPABASE_URL = 'https://abcdefghijklmno.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ubyIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzA...';
```

**Make sure:**
- ✅ Credentials are between the single quotes `'...'`
- ✅ No extra spaces before or after
- ✅ The URL starts with `https://`
- ✅ The anon key starts with `eyJ`
- ✅ Lines end with semicolons `;`

### 4. Save the File

- Press **Ctrl+S** (Windows/Linux)
- Press **Cmd+S** (Mac)
- Or: File → Save

---

## 🔍 **How to Verify Your Credentials**

### Check #1: Format Check

Your credentials should look like this:

**✅ CORRECT Project URL:**
```javascript
const SUPABASE_URL = 'https://abcdefghijklmno.supabase.co';
```
- Starts with `https://`
- Ends with `.supabase.co`
- Has a random string of letters in the middle

**❌ WRONG:**
```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';  // Still placeholder
const SUPABASE_URL = https://abc.supabase.co;       // Missing quotes
const SUPABASE_URL = 'https://abc.supabase.co'     // Missing semicolon
```

**✅ CORRECT Anon Key:**
```javascript
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS...';
```
- Very long (100+ characters)
- Starts with `eyJ`
- Has dots `.` separating three parts

**❌ WRONG:**
```javascript
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';  // Still placeholder
const SUPABASE_ANON_KEY = eyJhbG...;                  // Missing quotes
```

### Check #2: Browser Console Test

1. Open `index.html` in your browser
2. Press **F12** (or **Cmd+Option+J** on Mac)
3. Look at the Console tab

**✅ If credentials are correct, you'll see:**
```
✓ Supabase connected successfully
Using anonymous mode
```

**❌ If credentials are wrong, you'll see:**
```
Error initializing Supabase: [some error message]
```

---

## 🆘 **Troubleshooting**

### Problem: "Can't find the Settings menu"

**Solution**: Make sure you're in your **project dashboard**, not the organization overview. Look for your project name at the top of the page.

### Problem: "Don't see Project URL or API keys"

**Solution**: 
1. Make sure you clicked Settings → **API** (not just Settings)
2. Wait for the page to fully load
3. Scroll down - the API keys are below the Project URL

### Problem: "Which key do I use?"

**Solution**: Always use the **"anon public"** key (the first one in the list). Never use "service_role" in browser code.

### Problem: "My credentials don't work"

**Solution**:
1. Double-check you copied the **entire** key (they're very long!)
2. Make sure there are no extra spaces or line breaks
3. Verify the quotes `'...'` are in the right places
4. Try copying the credentials again from Supabase

---

## 📋 **Quick Copy Template**

Use this template when adding credentials:

```javascript
// Copy your Project URL from Supabase Settings → API
const SUPABASE_URL = 'PASTE_HERE';

// Copy your anon public key from Supabase Settings → API
const SUPABASE_ANON_KEY = 'PASTE_HERE';
```

---

## ✅ **Checklist**

Before moving on, verify:

- [ ] I found my Supabase project dashboard
- [ ] I clicked Settings → API
- [ ] I copied the Project URL (starts with `https://`)
- [ ] I copied the anon public key (starts with `eyJ`)
- [ ] I pasted them into `supabase-config.js`
- [ ] I saved the file
- [ ] I tested in the browser console
- [ ] I see "Supabase connected successfully"

---

**All set?** Move on to testing your connection! Open `GET_STARTED.md` for the next steps.

🎉 You're almost done!

