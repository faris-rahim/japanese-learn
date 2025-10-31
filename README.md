# 🇯🇵 Japanese Learning Tracker

A beautiful, interactive web application for learning and tracking progress in Japanese language study, featuring Hiragana, Katakana, and vocabulary quizzes.

## 🌐 Live Demo

Visit the live website: [https://japaneselearn.netlify.app/](https://japaneselearn.netlify.app/)

## ✨ Features

### 📊 Dashboard
- Visual progress bars for Hiragana, Katakana, and Vocabulary
- Track total questions answered and accuracy rate
- Study streak counter to maintain consistency
- Real-time statistics updates

### 🎯 Quiz Modes
- **Hiragana Quiz** - Master all 46 basic hiragana characters
- **Katakana Quiz** - Practice katakana characters
- **Vocabulary Quiz** - Learn common Japanese phrases and words

### 📖 Study Guide
- Complete reference for all hiragana characters with romaji
- Complete reference for all katakana characters with romaji
- Vocabulary list with romaji pronunciation and English meanings

### ⚙️ Customization Settings
- Adjust number of questions per quiz (5-50)
- Select difficulty level (Beginner, Intermediate, Advanced)
- Set daily study goals
- Reset progress option

### 💾 Progress Tracking
- **Cloud sync** with Supabase database (optional)
- Automatic progress saving with localStorage backup
- Track correct answers and accuracy for each category
- Study streak tracking to maintain motivation
- Quiz history logging for detailed analytics

## 🎨 Design Features

- Beautiful sakura pink gradient background
- Smooth animations and transitions
- Animated progress bars with shimmer effects
- Responsive design for mobile and desktop
- Clean, modern UI with intuitive navigation

## 🚀 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with animations
- **JavaScript** - Interactive functionality
- **Supabase** - Cloud database for data persistence
- **LocalStorage** - Offline backup and fallback storage

## 📁 Project Structure

```
japanese-learn/
├── index.html                    # Main HTML file
├── japanese-learning.css         # Stylesheet
├── japanese-learning.js          # JavaScript functionality
├── supabase-config.js            # Supabase credentials (create from example)
├── supabase-config.example.js   # Example config file
├── supabase-schema.sql           # Database schema
├── SUPABASE_SETUP.md            # Supabase setup instructions
├── .gitignore                    # Git ignore file
└── README.md                     # Project documentation
```

## 🛠️ Local Development

### Basic Setup (localStorage only)

1. Clone the repository:
```bash
git clone https://github.com/faris-rahim/japanese-learn.git
```

2. Open `index.html` in your web browser

That's it! No build process or dependencies required. The app will work with localStorage only.

### Supabase Setup (Cloud Sync)

To enable cloud data persistence:

1. Follow the detailed instructions in [`SUPABASE_SETUP.md`](./SUPABASE_SETUP.md)
2. Quick summary:
   - Create a free Supabase account
   - Create a new project
   - Run the SQL schema from `supabase-schema.sql`
   - Copy `supabase-config.example.js` to `supabase-config.js`
   - Add your Supabase credentials
   - Reload the app

The app will automatically sync data to Supabase while maintaining localStorage as a backup.

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Faris Rahim**
- GitHub: [@faris-rahim](https://github.com/faris-rahim)

## 🌟 Acknowledgments

- Japanese language data curated for educational purposes
- Design inspired by modern web UI/UX principles

