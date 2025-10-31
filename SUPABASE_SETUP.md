# Supabase Setup Guide for Japanese Learning Tracker

This guide will walk you through connecting your Japanese Learning Tracker to Supabase for cloud-based data storage.

## 🚀 Quick Start

### Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click **"New Project"**
4. Fill in:
   - **Name**: Japanese Learning Tracker
   - **Database Password**: (create a strong password)
   - **Region**: Choose closest to your location
5. Click **"Create new project"**
6. Wait 2-3 minutes for the project to be set up

### Step 2: Get Your API Credentials

1. In your Supabase project dashboard, click **"Settings"** (gear icon in sidebar)
2. Go to **"API"** section
3. You'll see two important values:
   - **Project URL** (e.g., `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")
4. Keep this page open - you'll need these values next

### Step 3: Configure Your Application

1. In your project folder, find the file `supabase-config.example.js`
2. Make a copy and rename it to `supabase-config.js`:
   ```bash
   cp supabase-config.example.js supabase-config.js
   ```
3. Open `supabase-config.js` and replace:
   ```javascript
   const SUPABASE_URL = 'https://xxxxxxxxxxxxx.supabase.co'; // Paste your Project URL
   const SUPABASE_ANON_KEY = 'your-anon-public-key-here'; // Paste your anon public key
   ```
4. Save the file

⚠️ **Important**: The `supabase-config.js` file is already in `.gitignore` to prevent accidentally committing your credentials.

### Step 4: Create Database Tables

1. In your Supabase dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Open the `supabase-schema.sql` file from your project folder
4. Copy all the SQL code and paste it into the Supabase SQL editor
5. Click **"Run"** (or press Ctrl+Enter / Cmd+Enter)
6. You should see a success message

This creates three tables:
- `user_progress` - stores learning progress
- `user_settings` - stores user preferences
- `quiz_sessions` - logs each quiz attempt

### Step 5: Test the Connection

1. Open `index.html` in your browser
2. Open the browser console (F12 or Right-click > Inspect > Console)
3. You should see: `✓ Supabase connected successfully`
4. If you see this, congratulations! Your app is now connected to Supabase 🎉

## 📊 How It Works

### Data Storage Strategy

The app uses a **dual storage approach**:
- **Primary**: Supabase (cloud database)
- **Backup**: localStorage (local browser storage)

This means:
- ✅ Your data syncs to the cloud automatically
- ✅ Works offline with localStorage fallback
- ✅ No data loss if Supabase is temporarily unavailable

### Anonymous vs Authenticated Users

**Anonymous Mode (Default)**
- App works immediately without sign-up
- Creates a unique anonymous ID stored locally
- Data syncs to Supabase with this ID
- Progress is tied to your browser

**Authenticated Mode (Optional)**
- Users can sign up with email/password
- Progress syncs across all devices
- More secure with proper user accounts

## 🔐 Security

### Row Level Security (RLS)

All tables have RLS policies enabled, which means:
- Users can only access their own data
- Anonymous users are restricted to their `anon_` prefixed IDs
- Malicious users cannot read or modify other users' data

### API Key Safety

- The **anon public key** is safe to use in the browser
- Never use the **service_role key** in client-side code
- The `.gitignore` file prevents accidental credential commits

## 📱 Features Enabled

Once connected to Supabase, you get:

1. **Cloud Sync** - Progress saved across sessions
2. **Quiz History** - Track all your quiz attempts
3. **Multi-device** - Use on any device (if authenticated)
4. **Backup** - localStorage fallback if offline
5. **Analytics Ready** - Quiz session logs for insights

## 🛠️ Advanced Configuration

### Enable User Authentication (Optional)

To add sign-up/sign-in functionality:

1. Add login UI to `index.html`
2. Use the authentication helpers in `supabase-config.js`:
   ```javascript
   // Sign up
   await db.signUp(email, password);
   
   // Sign in
   await db.signIn(email, password);
   
   // Sign out
   await db.signOut();
   ```

### Custom User Policies

To restrict anonymous access (production use):

1. Go to **"Authentication"** in Supabase dashboard
2. Enable **Email Auth**
3. Modify RLS policies in SQL Editor to remove `anon_` conditions:
   ```sql
   -- Example: Restrict to authenticated users only
   CREATE POLICY "Authenticated users only" ON user_progress
       FOR ALL
       USING (user_id = auth.uid()::text);
   ```

## 🔍 Monitoring & Debugging

### Check Database Contents

1. Go to **"Table Editor"** in Supabase dashboard
2. Select `user_progress`, `user_settings`, or `quiz_sessions`
3. View all stored data

### View API Logs

1. Go to **"Logs"** in Supabase dashboard
2. Select **"API"** logs
3. See all database requests in real-time

### Console Debugging

Open browser console to see:
- Connection status
- Database operation results
- Error messages if something fails

## 🆘 Troubleshooting

### "Supabase not connected" message

**Problem**: Console shows error about Supabase connection

**Solutions**:
1. Check that `supabase-config.js` exists (not just the example file)
2. Verify your `SUPABASE_URL` and `SUPABASE_ANON_KEY` are correct
3. Make sure `supabase-config.js` is loaded before `japanese-learning.js` in `index.html`

### "No rows returned" errors

**Problem**: Progress not loading from database

**Solutions**:
1. This is normal for first-time users (no data exists yet)
2. App will automatically create entries on first quiz completion
3. Check browser console for the anonymous user ID being used

### Data not syncing

**Problem**: Changes aren't appearing in Supabase dashboard

**Solutions**:
1. Check RLS policies are correctly configured
2. Verify the user ID matches between app and database
3. Look for errors in browser console
4. Check Supabase API logs for failed requests

### CORS errors

**Problem**: Browser blocks requests to Supabase

**Solutions**:
1. Supabase allows all origins by default for anon key
2. If using custom domain, add it in Supabase **Settings > API > CORS**
3. For local development, `file://` protocol may have issues - use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (npx)
   npx serve
   ```
   Then access via `http://localhost:8000`

## 📚 Database Schema Reference

### Table: user_progress
Stores cumulative learning progress.

| Column | Type | Description |
|--------|------|-------------|
| `user_id` | TEXT | Unique user identifier |
| `hiragana_correct` | INTEGER | Total correct hiragana answers |
| `hiragana_total` | INTEGER | Total hiragana questions attempted |
| `katakana_correct` | INTEGER | Total correct katakana answers |
| `katakana_total` | INTEGER | Total katakana questions attempted |
| `vocabulary_correct` | INTEGER | Total correct vocabulary answers |
| `vocabulary_total` | INTEGER | Total vocabulary questions attempted |
| `total_questions` | INTEGER | Total questions across all quizzes |
| `total_correct` | INTEGER | Total correct answers across all quizzes |
| `streak` | INTEGER | Current study streak in days |
| `last_study_date` | TEXT | Last date user studied |

### Table: user_settings
Stores user preferences.

| Column | Type | Description |
|--------|------|-------------|
| `user_id` | TEXT | Unique user identifier |
| `questions_per_quiz` | INTEGER | Number of questions per quiz (default: 10) |
| `difficulty` | TEXT | Difficulty level (beginner/intermediate/advanced) |
| `study_goal` | INTEGER | Daily study goal in minutes |

### Table: quiz_sessions
Logs individual quiz attempts.

| Column | Type | Description |
|--------|------|-------------|
| `user_id` | TEXT | Unique user identifier |
| `quiz_type` | TEXT | Type of quiz (hiragana/katakana/vocabulary) |
| `score` | INTEGER | Number of correct answers |
| `total_questions` | INTEGER | Total questions in this quiz |
| `accuracy` | DECIMAL | Percentage accuracy (calculated) |
| `completed_at` | TIMESTAMP | When the quiz was completed |

## 🎯 Next Steps

1. ✅ Test the app - complete a quiz and verify data appears in Supabase
2. 🔒 (Optional) Set up user authentication for multi-device sync
3. 📊 (Optional) Build analytics dashboard using `quiz_sessions` data
4. 🌐 (Optional) Deploy to Netlify, Vercel, or GitHub Pages
5. 📱 (Optional) Make it a PWA for mobile app experience

## 🤝 Need Help?

- **Supabase Docs**: [https://supabase.com/docs](https://supabase.com/docs)
- **Supabase Discord**: [https://discord.supabase.com](https://discord.supabase.com)
- **Database Issues**: Check the Supabase dashboard logs

Happy learning! 🇯🇵 がんばって！

