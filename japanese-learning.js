// Data structures
const hiraganaData = [
    { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, 
    { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' },
    { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, 
    { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' },
    { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, 
    { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' },
    { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, 
    { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' },
    { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, 
    { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' },
    { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, 
    { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' },
    { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, 
    { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' },
    { char: 'や', romaji: 'ya' }, { char: 'ゆ', romaji: 'yu' }, { char: 'よ', romaji: 'yo' },
    { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, 
    { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' },
    { char: 'わ', romaji: 'wa' }, { char: 'を', romaji: 'wo' }, { char: 'ん', romaji: 'n' }
];

const katakanaData = [
    { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' }, 
    { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' },
    { char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, 
    { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' },
    { char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' }, 
    { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' },
    { char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' }, 
    { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' },
    { char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' }, 
    { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' },
    { char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' }, 
    { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' },
    { char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' }, 
    { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' },
    { char: 'ヤ', romaji: 'ya' }, { char: 'ユ', romaji: 'yu' }, { char: 'ヨ', romaji: 'yo' },
    { char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' }, 
    { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' },
    { char: 'ワ', romaji: 'wa' }, { char: 'ヲ', romaji: 'wo' }, { char: 'ン', romaji: 'n' }
];

const vocabularyData = [
    { word: 'こんにちは', romaji: 'konnichiwa', meaning: 'Hello' },
    { word: 'ありがとう', romaji: 'arigatou', meaning: 'Thank you' },
    { word: 'さようなら', romaji: 'sayounara', meaning: 'Goodbye' },
    { word: 'おはよう', romaji: 'ohayou', meaning: 'Good morning' },
    { word: 'こんばんは', romaji: 'konbanwa', meaning: 'Good evening' },
    { word: 'すみません', romaji: 'sumimasen', meaning: 'Excuse me / Sorry' },
    { word: 'はい', romaji: 'hai', meaning: 'Yes' },
    { word: 'いいえ', romaji: 'iie', meaning: 'No' },
    { word: 'おねがいします', romaji: 'onegaishimasu', meaning: 'Please' },
    { word: 'わかりました', romaji: 'wakarimashita', meaning: 'I understand' },
    { word: 'せんせい', romaji: 'sensei', meaning: 'Teacher' },
    { word: 'がくせい', romaji: 'gakusei', meaning: 'Student' },
    { word: 'ともだち', romaji: 'tomodachi', meaning: 'Friend' },
    { word: 'かぞく', romaji: 'kazoku', meaning: 'Family' },
    { word: 'いえ', romaji: 'ie', meaning: 'House' },
    { word: 'みず', romaji: 'mizu', meaning: 'Water' },
    { word: 'たべもの', romaji: 'tabemono', meaning: 'Food' },
    { word: 'のみもの', romaji: 'nomimono', meaning: 'Drink' },
    { word: 'ほん', romaji: 'hon', meaning: 'Book' },
    { word: 'がっこう', romaji: 'gakkou', meaning: 'School' }
];

// Quiz state
let currentQuiz = {
    type: '',
    questions: [],
    currentIndex: 0,
    score: 0,
    total: 0,
    answered: false
};

// Progress tracking
let progress = {
    hiragana: { correct: 0, total: 0 },
    katakana: { correct: 0, total: 0 },
    vocabulary: { correct: 0, total: 0 },
    totalQuestions: 0,
    totalCorrect: 0,
    streak: 0,
    lastStudyDate: null
};

// Settings
let settings = {
    questionsPerQuiz: 10,
    difficulty: 'beginner',
    studyGoal: 20
};

// Current user ID (can be email, UUID, or anonymous ID)
let currentUserId = null;

// Initialize app
async function init() {
    // Check if user is authenticated
    if (supabase) {
        const user = await db.getCurrentUser();
        if (user) {
            currentUserId = user.id;
            console.log('Logged in user:', user.email);
        } else {
            // Use anonymous ID stored in localStorage
            currentUserId = localStorage.getItem('anonymousUserId');
            if (!currentUserId) {
                currentUserId = 'anon_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                localStorage.setItem('anonymousUserId', currentUserId);
            }
            console.log('Using anonymous mode');
        }
    } else {
        // Fallback to localStorage-only mode
        console.warn('Supabase not available, using localStorage only');
    }
    
    await loadProgress();
    await loadSettings();
    updateDashboard();
    populateStudyGuide();
}

// Tab switching
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Quiz functions
function startQuiz(type) {
    currentQuiz.type = type;
    currentQuiz.currentIndex = 0;
    currentQuiz.score = 0;
    currentQuiz.total = 0;
    currentQuiz.answered = false;

    let data;
    if (type === 'hiragana') data = hiraganaData;
    else if (type === 'katakana') data = katakanaData;
    else data = vocabularyData;

    // Shuffle and select questions
    currentQuiz.questions = shuffleArray([...data]).slice(0, settings.questionsPerQuiz);
    
    document.getElementById(`${type}-score`).textContent = '0';
    document.getElementById(`${type}-total`).textContent = settings.questionsPerQuiz;
    document.getElementById(`${type}-feedback`).style.display = 'none';
    
    showQuestion(type);
}

function showQuestion(type) {
    if (currentQuiz.currentIndex >= currentQuiz.questions.length) {
        endQuiz(type);
        return;
    }

    currentQuiz.answered = false;
    const question = currentQuiz.questions[currentQuiz.currentIndex];
    
    // Display question
    if (type === 'vocabulary') {
        document.getElementById(`${type}-question`).textContent = question.word;
    } else {
        document.getElementById(`${type}-question`).textContent = question.char;
    }

    // Generate options
    const correctAnswer = type === 'vocabulary' ? question.meaning : question.romaji;
    const options = generateOptions(type, correctAnswer);
    
    const optionsContainer = document.getElementById(`${type}-options`);
    optionsContainer.innerHTML = '';
    
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(type, option, correctAnswer);
        optionsContainer.appendChild(btn);
    });

    document.getElementById(`${type}-feedback`).style.display = 'none';
    document.getElementById(`${type}-next`).style.display = 'none';
}

function generateOptions(type, correctAnswer) {
    let allAnswers;
    if (type === 'vocabulary') {
        allAnswers = vocabularyData.map(v => v.meaning).filter(m => m !== correctAnswer);
    } else {
        const data = type === 'hiragana' ? hiraganaData : katakanaData;
        allAnswers = data.map(d => d.romaji).filter(r => r !== correctAnswer);
    }
    
    const wrongAnswers = shuffleArray(allAnswers).slice(0, 3);
    const options = [...wrongAnswers, correctAnswer];
    return shuffleArray(options);
}

function checkAnswer(type, selected, correct) {
    if (currentQuiz.answered) return;
    
    currentQuiz.answered = true;
    currentQuiz.total++;
    
    const isCorrect = selected === correct;
    if (isCorrect) currentQuiz.score++;

    // Update progress
    progress[type].total++;
    if (isCorrect) progress[type].correct++;
    progress.totalQuestions++;
    if (isCorrect) progress.totalCorrect++;

    // Visual feedback
    const buttons = document.getElementById(`${type}-options`).children;
    Array.from(buttons).forEach(btn => {
        btn.classList.add('disabled');
        if (btn.textContent === correct) {
            btn.classList.add('correct');
        } else if (btn.textContent === selected && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Show feedback
    const feedback = document.getElementById(`${type}-feedback`);
    feedback.style.display = 'block';
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.textContent = isCorrect ? '✓ Correct!' : `✗ Wrong! The correct answer is: ${correct}`;

    // Update score display
    document.getElementById(`${type}-score`).textContent = currentQuiz.score;

    // Show next button
    document.getElementById(`${type}-next`).style.display = 'inline-block';

    // Update streak
    updateStreak();
    saveProgress();
    updateDashboard();
}

function nextQuestion(type) {
    currentQuiz.currentIndex++;
    showQuestion(type);
}

async function endQuiz(type) {
    const feedback = document.getElementById(`${type}-feedback`);
    feedback.style.display = 'block';
    feedback.className = 'feedback correct';
    feedback.innerHTML = `
        <h3>Quiz Complete! 🎉</h3>
        <p>Your score: ${currentQuiz.score} / ${currentQuiz.total}</p>
        <p>Accuracy: ${Math.round((currentQuiz.score / currentQuiz.total) * 100)}%</p>
    `;
    
    document.getElementById(`${type}-options`).innerHTML = '';
    document.getElementById(`${type}-question`).textContent = '✓';
    document.getElementById(`${type}-next`).style.display = 'none';
    
    // Log quiz session to Supabase
    if (supabase && currentUserId) {
        await db.logQuizSession(currentUserId, {
            type: type,
            score: currentQuiz.score,
            total: currentQuiz.total
        });
    }
}

// Progress and dashboard
function updateDashboard() {
    // Calculate progress percentages
    const hiraganaPercent = progress.hiragana.total > 0 
        ? Math.round((progress.hiragana.correct / progress.hiragana.total) * 100) 
        : 0;
    const katakanaPercent = progress.katakana.total > 0 
        ? Math.round((progress.katakana.correct / progress.katakana.total) * 100) 
        : 0;
    const vocabularyPercent = progress.vocabulary.total > 0 
        ? Math.round((progress.vocabulary.correct / progress.vocabulary.total) * 100) 
        : 0;

    // Update progress bars
    updateProgressBar('hiragana', hiraganaPercent);
    updateProgressBar('katakana', katakanaPercent);
    updateProgressBar('vocabulary', vocabularyPercent);

    // Update stats
    document.getElementById('total-questions').textContent = progress.totalQuestions;
    document.getElementById('total-correct').textContent = progress.totalCorrect;
    
    const accuracyRate = progress.totalQuestions > 0 
        ? Math.round((progress.totalCorrect / progress.totalQuestions) * 100) 
        : 0;
    document.getElementById('accuracy-rate').textContent = accuracyRate + '%';
    document.getElementById('study-streak').textContent = progress.streak + ' days';
}

function updateProgressBar(type, percent) {
    document.getElementById(`${type}-progress`).style.width = percent + '%';
    document.getElementById(`${type}-percentage`).textContent = percent + '%';
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastStudy = progress.lastStudyDate;
    
    if (lastStudy === today) {
        return; // Already studied today
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastStudy === yesterday.toDateString()) {
        progress.streak++;
    } else if (lastStudy !== today) {
        progress.streak = 1;
    }
    
    progress.lastStudyDate = today;
}

// Study guide
function populateStudyGuide() {
    // Hiragana
    const hiraganaStudy = document.getElementById('hiragana-study');
    hiraganaStudy.innerHTML = hiraganaData.map(item => `
        <div class="study-item">
            <span class="japanese">${item.char}</span>
            <span class="romaji">${item.romaji}</span>
        </div>
    `).join('');

    // Katakana
    const katakanaStudy = document.getElementById('katakana-study');
    katakanaStudy.innerHTML = katakanaData.map(item => `
        <div class="study-item">
            <span class="japanese">${item.char}</span>
            <span class="romaji">${item.romaji}</span>
        </div>
    `).join('');

    // Vocabulary
    const vocabularyStudy = document.getElementById('vocabulary-study');
    vocabularyStudy.innerHTML = vocabularyData.map(item => `
        <div class="study-item">
            <div>
                <span class="japanese">${item.word}</span>
                <span class="romaji"> (${item.romaji})</span>
            </div>
            <span class="meaning">${item.meaning}</span>
        </div>
    `).join('');
}

// Settings
async function saveSettings() {
    settings.questionsPerQuiz = parseInt(document.getElementById('questions-per-quiz').value);
    settings.difficulty = document.getElementById('difficulty-level').value;
    settings.studyGoal = parseInt(document.getElementById('study-goal').value);
    
    // Save to localStorage as backup
    localStorage.setItem('japaneseSettings', JSON.stringify(settings));
    
    // Save to Supabase if available
    if (supabase && currentUserId) {
        await db.saveSettings(currentUserId, settings);
    }
}

async function loadSettings() {
    // Try loading from Supabase first
    if (supabase && currentUserId) {
        const savedSettings = await db.getSettings(currentUserId);
        if (savedSettings) {
            settings.questionsPerQuiz = savedSettings.questions_per_quiz;
            settings.difficulty = savedSettings.difficulty;
            settings.studyGoal = savedSettings.study_goal;
        } else {
            // Fall back to localStorage
            const localSaved = localStorage.getItem('japaneseSettings');
            if (localSaved) {
                settings = JSON.parse(localSaved);
            }
        }
    } else {
        // Use localStorage only
        const saved = localStorage.getItem('japaneseSettings');
        if (saved) {
            settings = JSON.parse(saved);
        }
    }
    
    // Update UI
    document.getElementById('questions-per-quiz').value = settings.questionsPerQuiz;
    document.getElementById('difficulty-level').value = settings.difficulty;
    document.getElementById('study-goal').value = settings.studyGoal;
}

async function resetProgress() {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
        progress = {
            hiragana: { correct: 0, total: 0 },
            katakana: { correct: 0, total: 0 },
            vocabulary: { correct: 0, total: 0 },
            totalQuestions: 0,
            totalCorrect: 0,
            streak: 0,
            lastStudyDate: null
        };
        await saveProgress();
        updateDashboard();
        alert('Progress has been reset!');
    }
}

// Storage
async function saveProgress() {
    // Save to localStorage as backup
    localStorage.setItem('japaneseProgress', JSON.stringify(progress));
    
    // Save to Supabase if available
    if (supabase && currentUserId) {
        await db.saveProgress(currentUserId, progress);
    }
}

async function loadProgress() {
    // Try loading from Supabase first
    if (supabase && currentUserId) {
        const savedProgress = await db.getProgress(currentUserId);
        if (savedProgress) {
            progress = {
                hiragana: {
                    correct: savedProgress.hiragana_correct || 0,
                    total: savedProgress.hiragana_total || 0
                },
                katakana: {
                    correct: savedProgress.katakana_correct || 0,
                    total: savedProgress.katakana_total || 0
                },
                vocabulary: {
                    correct: savedProgress.vocabulary_correct || 0,
                    total: savedProgress.vocabulary_total || 0
                },
                totalQuestions: savedProgress.total_questions || 0,
                totalCorrect: savedProgress.total_correct || 0,
                streak: savedProgress.streak || 0,
                lastStudyDate: savedProgress.last_study_date
            };
        } else {
            // Fall back to localStorage
            const localSaved = localStorage.getItem('japaneseProgress');
            if (localSaved) {
                progress = JSON.parse(localSaved);
            }
        }
    } else {
        // Use localStorage only
        const saved = localStorage.getItem('japaneseProgress');
        if (saved) {
            progress = JSON.parse(saved);
        }
    }
}

// Utility functions
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize on page load
window.onload = init;

