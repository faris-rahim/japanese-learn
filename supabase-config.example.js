// Supabase Configuration Example
// Copy this file to 'supabase-config.js' and fill in your actual credentials
// Get these from: https://app.supabase.com/project/_/settings/api

const SUPABASE_URL = 'https://xxxxxxxxxxxxx.supabase.co'; // Your Supabase project URL
const SUPABASE_ANON_KEY = 'your-anon-public-key-here'; // Your public anon key (safe to use in browser)

// Initialize Supabase client
let supabase;

try {
    if (typeof window.supabase !== 'undefined') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('✓ Supabase connected successfully');
    } else {
        console.error('Supabase library not loaded. Make sure the CDN script is included.');
    }
} catch (error) {
    console.error('Error initializing Supabase:', error);
}

// Database helper functions
const db = {
    // Get user's progress data
    async getProgress(userId) {
        try {
            const { data, error } = await supabase
                .from('user_progress')
                .select('*')
                .eq('user_id', userId)
                .single();
            
            if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
                throw error;
            }
            
            return data;
        } catch (error) {
            console.error('Error fetching progress:', error);
            return null;
        }
    },

    // Save or update user's progress
    async saveProgress(userId, progressData) {
        try {
            const { data, error } = await supabase
                .from('user_progress')
                .upsert({
                    user_id: userId,
                    hiragana_correct: progressData.hiragana.correct,
                    hiragana_total: progressData.hiragana.total,
                    katakana_correct: progressData.katakana.correct,
                    katakana_total: progressData.katakana.total,
                    vocabulary_correct: progressData.vocabulary.correct,
                    vocabulary_total: progressData.vocabulary.total,
                    total_questions: progressData.totalQuestions,
                    total_correct: progressData.totalCorrect,
                    streak: progressData.streak,
                    last_study_date: progressData.lastStudyDate,
                    updated_at: new Date().toISOString()
                }, {
                    onConflict: 'user_id'
                })
                .select();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error saving progress:', error);
            return null;
        }
    },

    // Get user's settings
    async getSettings(userId) {
        try {
            const { data, error } = await supabase
                .from('user_settings')
                .select('*')
                .eq('user_id', userId)
                .single();
            
            if (error && error.code !== 'PGRST116') {
                throw error;
            }
            
            return data;
        } catch (error) {
            console.error('Error fetching settings:', error);
            return null;
        }
    },

    // Save or update user's settings
    async saveSettings(userId, settingsData) {
        try {
            const { data, error } = await supabase
                .from('user_settings')
                .upsert({
                    user_id: userId,
                    questions_per_quiz: settingsData.questionsPerQuiz,
                    difficulty: settingsData.difficulty,
                    study_goal: settingsData.studyGoal,
                    updated_at: new Date().toISOString()
                }, {
                    onConflict: 'user_id'
                })
                .select();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error saving settings:', error);
            return null;
        }
    },

    // Log a quiz session
    async logQuizSession(userId, quizData) {
        try {
            const { data, error } = await supabase
                .from('quiz_sessions')
                .insert({
                    user_id: userId,
                    quiz_type: quizData.type,
                    score: quizData.score,
                    total_questions: quizData.total,
                    accuracy: (quizData.score / quizData.total) * 100,
                    completed_at: new Date().toISOString()
                })
                .select();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error logging quiz session:', error);
            return null;
        }
    },

    // Get quiz history
    async getQuizHistory(userId, limit = 10) {
        try {
            const { data, error } = await supabase
                .from('quiz_sessions')
                .select('*')
                .eq('user_id', userId)
                .order('completed_at', { ascending: false })
                .limit(limit);

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error fetching quiz history:', error);
            return [];
        }
    },

    // Authentication helpers
    async signUp(email, password) {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password
            });
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error signing up:', error);
            return null;
        }
    },

    async signIn(email, password) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error signing in:', error);
            return null;
        }
    },

    async signOut() {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            return true;
        } catch (error) {
            console.error('Error signing out:', error);
            return false;
        }
    },

    async getCurrentUser() {
        try {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) throw error;
            return user;
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    }
};

// Export for use in other scripts
window.db = db;

