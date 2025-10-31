# 🚀 Get Started with Supabase - Step by Step

Follow these exact steps to connect your Japanese Learning Tracker to Supabase in **less than 10 minutes**.

---

## ✅ **Step 1: Create Your Supabase Account** (2 minutes)

1. Open your browser and go to: **https://supabase.com**

2. Click the **"Start your project"** or **"Sign up"** button

3. Sign up with:
   - GitHub (recommended - fastest)
   - Google
   - Or email/password

4. You'll be redirected to your Supabase dashboard

---

## ✅ **Step 2: Create a New Project** (3 minutes)

1. On the Supabase dashboard, click **"New Project"**

2. Select your organization (or create one if this is your first time)

3. Fill in the project details:
   - **Name**: `japanese-learning-tracker` (or any name you prefer)
   - **Database Password**: Create a **strong password** and save it somewhere safe
   - **Region**: Choose the region closest to you (e.g., US West, Europe, Asia Pacific)
   - **Pricing Plan**: Select **Free** (perfect for this project)

4. Click **"Create new project"**

5. ⏳ **Wait 2-3 minutes** while Supabase sets up your database
   - You'll see a progress indicator
   - When complete, you'll see your project dashboard

---

## ✅ **Step 3: Get Your API Credentials** (1 minute)

1. In your project dashboard, look at the **left sidebar**

2. Click the **⚙️ Settings** icon (gear icon at the bottom)

3. In the Settings menu, click **"API"**

4. You'll see two important sections:

### 📋 **Copy These Two Values:**

#### **A) Project URL**
   - Look for the section: **"Project URL"**
   - It looks like: `https://xxxxxxxxxxxxx.supabase.co`
   - Click the **copy icon** 📋 to copy it
   - **Save it somewhere** (notepad, sticky note, etc.)

#### **B) Anon/Public Key**
   - Scroll down to: **"Project API keys"**
   - Find the key labeled: **"anon" "public"**
   - It's a long string starting with `eyJ...`
   - Click the **copy icon** 📋 to copy it
   - **Save it somewhere** (notepad, sticky note, etc.)

⚠️ **Important**: 
- Do NOT copy the "service_role" key (it's for server-side use only)
- The "anon public" key is safe to use in your browser

---

## ✅ **Step 4: Set Up Your Database Tables** (2 minutes)

1. In your Supabase dashboard, click **"SQL Editor"** in the left sidebar
   - It has an icon that looks like: `</>`

2. Click **"New query"** button (top right)

3. **On your computer**, open the file: `supabase-schema.sql`
   - It's in your project folder
   - Open it with any text editor

4. **Copy ALL the content** from `supabase-schema.sql`

5. **Paste it** into the Supabase SQL Editor

6. Click **"Run"** button (bottom right) or press **Ctrl+Enter** (Windows) / **Cmd+Enter** (Mac)

7. ✅ You should see: **"Success. No rows returned"** (this is normal!)

8. Verify the tables were created:
   - Click **"Table Editor"** in the left sidebar
   - You should see 3 new tables:
     - `user_progress`
     - `user_settings`
     - `quiz_sessions`

---

## ✅ **Step 5: Add Your Credentials to the App** (1 minute)

1. **On your computer**, open the file: `supabase-config.js`
   - It's in your project folder: `/Users/todakstudios/Learn Japanese/japanese-learn/supabase-config.js`

2. Find these two lines (near the top):
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   ```

3. **Replace** them with your actual credentials:
   ```javascript
   const SUPABASE_URL = 'https://xxxxxxxxxxxxx.supabase.co'; // Paste YOUR Project URL here
   const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Paste YOUR anon key here
   ```

4. **Save the file** (Ctrl+S / Cmd+S)

---

## ✅ **Step 6: Test the Connection** (1 minute)

1. Open `index.html` in your **web browser**
   - Double-click it, or
   - Right-click → Open with → Chrome/Firefox/Safari

2. Open the **Browser Console**:
   - **Windows/Linux**: Press `F12` or `Ctrl+Shift+J`
   - **Mac**: Press `Cmd+Option+J`
   - Or right-click anywhere → **"Inspect"** → **"Console"** tab

3. Look for this message:
   ```
   ✓ Supabase connected successfully
   Using anonymous mode
   ```

4. ✅ **If you see this, you're connected!** 🎉

---

## ✅ **Step 7: Test Data Sync** (1 minute)

1. In the app, click on **"Hiragana Quiz"** tab

2. Click **"Start Quiz"** button

3. Answer a few questions (correct or wrong doesn't matter)

4. Wait for the quiz to complete

5. **Now check Supabase**:
   - Go back to your Supabase dashboard
   - Click **"Table Editor"** in the left sidebar
   - Click on **`user_progress`** table
   - You should see **1 row** with your data! ✅

6. Click on **`quiz_sessions`** table
   - You should see your quiz attempt logged! ✅

---

## 🎉 **Success! You're All Set!**

Your Japanese Learning Tracker is now connected to Supabase!

### What's Working:
- ✅ Progress automatically saves to the cloud
- ✅ Settings sync across sessions
- ✅ Quiz history is logged
- ✅ Works offline with localStorage backup
- ✅ Data persists even if you close the browser

### Try This:
1. Complete a few more quizzes
2. Change some settings
3. Close your browser completely
4. Reopen `index.html`
5. Your progress is still there! 🎊

---

## 🆘 **Troubleshooting**

### ❌ "Supabase library not loaded"
**Solution**: Make sure `index.html` has this line in the `<head>` section:
```html
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
```

### ❌ Error messages in console about "Failed to fetch"
**Solution**: 
1. Double-check your `SUPABASE_URL` and `SUPABASE_ANON_KEY` are correct
2. Make sure there are no extra spaces or quotes
3. Verify the keys are between the single quotes `'...'`

### ❌ "No rows returned" error
**This is normal!** It just means you haven't created any data yet. Complete a quiz and it will appear.

### ❌ Data not appearing in Supabase dashboard
**Solution**:
1. Click the **refresh button** in the Table Editor
2. Make sure you selected the correct table (`user_progress`, not something else)
3. Check the browser console for error messages

### ❌ "Anonymous access is not allowed"
**Solution**: 
1. Go back to Supabase SQL Editor
2. Re-run the `supabase-schema.sql` file
3. This will recreate the RLS policies that allow anonymous users

---

## 📚 **Next Steps**

Now that you're connected, you can:

1. 📖 **Read the full guide**: Open `SUPABASE_SETUP.md` for advanced features
2. 👥 **Add user authentication**: See `SUPABASE_SETUP.md` section on authentication
3. 📊 **View your data**: Explore the Table Editor in Supabase
4. 🔍 **Check the logs**: Go to "Logs" in Supabase to see API calls
5. 🚀 **Deploy your app**: Host it on Netlify, Vercel, or GitHub Pages

---

## 💡 **Quick Reference**

### Where to find things:

**In Supabase Dashboard:**
- 📊 View data: **Table Editor**
- 📝 Run SQL: **SQL Editor**
- 🔍 See API calls: **Logs** → **API**
- 🔑 Get credentials: **Settings** → **API**

**In Your Project:**
- 🔧 Config file: `supabase-config.js`
- 📖 Setup guide: `SUPABASE_SETUP.md`
- 📝 Database schema: `supabase-schema.sql`
- 📚 Main app: `index.html`

---

## 🎓 **Learning Resources**

- **Supabase Documentation**: https://supabase.com/docs
- **JavaScript async/await**: https://javascript.info/async-await
- **SQL basics**: https://supabase.com/docs/guides/database

---

**Need more help?** Check `SUPABASE_SETUP.md` for detailed troubleshooting!

Happy learning! 🇯🇵 がんばって！ (Ganbatte! - Do your best!)

