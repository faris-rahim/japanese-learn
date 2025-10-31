# ✅ Supabase Setup Checklist

Print this or keep it open while you set up your Supabase connection.

---

## 📋 Quick Setup Checklist (10 minutes total)

### ☐ **1. Create Supabase Account** (2 min)
- [ ] Go to https://supabase.com
- [ ] Sign up with GitHub/Google/Email
- [ ] Confirm your account

### ☐ **2. Create New Project** (3 min)
- [ ] Click "New Project"
- [ ] Name: `japanese-learning-tracker`
- [ ] Create a strong database password
- [ ] Choose closest region
- [ ] Click "Create new project"
- [ ] Wait for project to finish setting up (2-3 minutes)

### ☐ **3. Get API Credentials** (1 min)
- [ ] Click Settings ⚙️ (gear icon in sidebar)
- [ ] Click "API"
- [ ] Copy **Project URL**: `https://_____.supabase.co`
- [ ] Copy **anon public** key (starts with `eyJ...`)
- [ ] Save both values in a notepad

### ☐ **4. Set Up Database** (2 min)
- [ ] Click "SQL Editor" in sidebar
- [ ] Click "New query"
- [ ] Open `supabase-schema.sql` file from your project
- [ ] Copy ALL content
- [ ] Paste into SQL Editor
- [ ] Click "Run" (or Ctrl+Enter / Cmd+Enter)
- [ ] Verify: Click "Table Editor" - see 3 tables created

### ☐ **5. Update Config File** (1 min)
- [ ] Open `supabase-config.js` in your text editor
- [ ] Find line 5: `const SUPABASE_URL = '...'`
- [ ] Replace with YOUR Project URL
- [ ] Find line 6: `const SUPABASE_ANON_KEY = '...'`
- [ ] Replace with YOUR anon key
- [ ] Save file (Ctrl+S / Cmd+S)

### ☐ **6. Test Connection** (1 min)
- [ ] Open `index.html` in browser
- [ ] Open browser Console (F12)
- [ ] See: `✓ Supabase connected successfully`
- [ ] See: `Using anonymous mode`

### ☐ **7. Test Data Sync** (1 min)
- [ ] Click "Hiragana Quiz" in the app
- [ ] Click "Start Quiz"
- [ ] Complete the quiz
- [ ] Go to Supabase → Table Editor → `user_progress`
- [ ] See your data! 🎉

---

## ✅ **Verification Checklist**

After setup, verify everything works:

- [ ] Browser console shows "Supabase connected successfully"
- [ ] No error messages in console
- [ ] `user_progress` table has data after completing a quiz
- [ ] `quiz_sessions` table logs quiz attempts
- [ ] `user_settings` table updates when changing settings
- [ ] Progress persists when closing and reopening the app
- [ ] App works offline (with localStorage backup)

---

## 🎯 **Your Credentials** (write them here for quick reference)

**Project URL:**
```
https://_________________________.supabase.co
```

**Anon Public Key:**
```
eyJ_________________________________________________
```

**Database Password** (you won't need this often, but save it):
```
_____________________________________________________
```

---

## 📂 **Files to Check**

Make sure these exist in your project:

- [ ] `index.html` - Has Supabase CDN script
- [ ] `supabase-config.js` - Has YOUR credentials (not placeholders)
- [ ] `supabase-schema.sql` - Used to create tables
- [ ] `japanese-learning.js` - Updated with async functions
- [ ] `.gitignore` - Contains `supabase-config.js` entry

---

## 🚨 **Common Mistakes**

Avoid these:

- ❌ Using the `service_role` key (use `anon public` key instead)
- ❌ Forgetting to run `supabase-schema.sql` in SQL Editor
- ❌ Not saving `supabase-config.js` after editing
- ❌ Having extra spaces/quotes in credential values
- ❌ Not waiting for Supabase project to finish setting up

---

## 🎉 **Success Indicators**

You'll know it's working when:

1. ✅ Console: `✓ Supabase connected successfully`
2. ✅ No errors when completing a quiz
3. ✅ Data appears in Supabase Table Editor
4. ✅ Progress loads when reopening the app
5. ✅ Settings persist across sessions

---

## 📞 **Need Help?**

If something's not working:

1. **Read**: `GET_STARTED.md` (step-by-step guide)
2. **Read**: `SUPABASE_SETUP.md` (detailed troubleshooting)
3. **Check**: Browser console for error messages
4. **Check**: Supabase Logs → API (see what requests are happening)
5. **Verify**: Your credentials are correct in `supabase-config.js`

---

**Once everything is checked, you're done!** 🎊

Your app now has:
- ☁️ Cloud data storage
- 💾 Automatic backups
- 📊 Progress tracking
- 📈 Quiz history
- 🔄 Cross-session persistence

がんばって！🇯🇵

