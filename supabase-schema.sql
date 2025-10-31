-- Supabase Database Schema for Japanese Learning Tracker
-- Run these SQL commands in your Supabase SQL Editor to create the necessary tables

-- ==================================================
-- TABLE: user_progress
-- Stores user learning progress for each quiz type
-- ==================================================
CREATE TABLE IF NOT EXISTS user_progress (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL UNIQUE,
    hiragana_correct INTEGER DEFAULT 0,
    hiragana_total INTEGER DEFAULT 0,
    katakana_correct INTEGER DEFAULT 0,
    katakana_total INTEGER DEFAULT 0,
    vocabulary_correct INTEGER DEFAULT 0,
    vocabulary_total INTEGER DEFAULT 0,
    total_questions INTEGER DEFAULT 0,
    total_correct INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    last_study_date TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for faster user lookups
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);

-- ==================================================
-- TABLE: user_settings
-- Stores user preferences and settings
-- ==================================================
CREATE TABLE IF NOT EXISTS user_settings (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL UNIQUE,
    questions_per_quiz INTEGER DEFAULT 10,
    difficulty TEXT DEFAULT 'beginner',
    study_goal INTEGER DEFAULT 20,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for faster user lookups
CREATE INDEX IF NOT EXISTS idx_user_settings_user_id ON user_settings(user_id);

-- ==================================================
-- TABLE: quiz_sessions
-- Logs individual quiz sessions for history tracking
-- ==================================================
CREATE TABLE IF NOT EXISTS quiz_sessions (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    quiz_type TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    accuracy DECIMAL(5,2),
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_user_id ON quiz_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_completed_at ON quiz_sessions(completed_at DESC);

-- ==================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- These policies ensure users can only access their own data
-- ==================================================

-- Enable RLS on all tables
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_sessions ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own progress
CREATE POLICY "Users can view own progress" ON user_progress
    FOR SELECT
    USING (
        user_id = auth.uid()::text 
        OR user_id = current_setting('request.jwt.claims', true)::json->>'sub'
        OR user_id LIKE 'anon_%'
    );

-- Policy: Users can insert their own progress
CREATE POLICY "Users can insert own progress" ON user_progress
    FOR INSERT
    WITH CHECK (
        user_id = auth.uid()::text 
        OR user_id = current_setting('request.jwt.claims', true)::json->>'sub'
        OR user_id LIKE 'anon_%'
    );

-- Policy: Users can update their own progress
CREATE POLICY "Users can update own progress" ON user_progress
    FOR UPDATE
    USING (
        user_id = auth.uid()::text 
        OR user_id = current_setting('request.jwt.claims', true)::json->>'sub'
        OR user_id LIKE 'anon_%'
    );

-- Policy: Users can view their own settings
CREATE POLICY "Users can view own settings" ON user_settings
    FOR SELECT
    USING (
        user_id = auth.uid()::text 
        OR user_id = current_setting('request.jwt.claims', true)::json->>'sub'
        OR user_id LIKE 'anon_%'
    );

-- Policy: Users can insert their own settings
CREATE POLICY "Users can insert own settings" ON user_settings
    FOR INSERT
    WITH CHECK (
        user_id = auth.uid()::text 
        OR user_id = current_setting('request.jwt.claims', true)::json->>'sub'
        OR user_id LIKE 'anon_%'
    );

-- Policy: Users can update their own settings
CREATE POLICY "Users can update own settings" ON user_settings
    FOR UPDATE
    USING (
        user_id = auth.uid()::text 
        OR user_id = current_setting('request.jwt.claims', true)::json->>'sub'
        OR user_id LIKE 'anon_%'
    );

-- Policy: Users can view their own quiz sessions
CREATE POLICY "Users can view own quiz sessions" ON quiz_sessions
    FOR SELECT
    USING (
        user_id = auth.uid()::text 
        OR user_id = current_setting('request.jwt.claims', true)::json->>'sub'
        OR user_id LIKE 'anon_%'
    );

-- Policy: Users can insert their own quiz sessions
CREATE POLICY "Users can insert own quiz sessions" ON quiz_sessions
    FOR INSERT
    WITH CHECK (
        user_id = auth.uid()::text 
        OR user_id = current_setting('request.jwt.claims', true)::json->>'sub'
        OR user_id LIKE 'anon_%'
    );

-- ==================================================
-- OPTIONAL: Add updated_at trigger function
-- Automatically updates the updated_at timestamp
-- ==================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for auto-updating updated_at
CREATE TRIGGER update_user_progress_updated_at 
    BEFORE UPDATE ON user_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_settings_updated_at 
    BEFORE UPDATE ON user_settings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ==================================================
-- NOTES FOR SETUP:
-- ==================================================
-- 1. Copy this entire SQL file
-- 2. Go to your Supabase project dashboard
-- 3. Navigate to: SQL Editor (in left sidebar)
-- 4. Click "New query"
-- 5. Paste this SQL and click "Run"
-- 6. All tables, indexes, and RLS policies will be created
--
-- The RLS policies allow:
-- - Authenticated users to access their own data (via auth.uid())
-- - Anonymous users to access data with 'anon_' prefixed IDs
--
-- For production use, you may want to tighten the anonymous access policies.

