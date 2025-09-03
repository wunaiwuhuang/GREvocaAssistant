# 🎯 GRE Vocabulary Assistant

A powerful, browser-based vocabulary learning tool designed specifically for GRE preparation. This application uses advanced spaced repetition algorithms to help you master GRE vocabulary efficiently.

## ✨ Features

### 🔥 Core Functionality
- **Intelligent Spaced Repetition**: Uses scientifically-proven memory intervals (6 minutes → 30 minutes → 1 hour → 2 hours → 6 hours → 1 day → 3 days → 7 days → 14 days)
- **Adaptive Learning**: Word difficulty adjusts based on your performance
- **Progress Tracking**: Real-time statistics showing total words, mastered words, and words needing review
- **Mastery System**: Automatic promotion to "mastered" status when words reach the highest level

### 📚 Word Management
- **Easy Word Addition**: Simple interface to add English words with Chinese definitions
- **Comprehensive Word List**: View all words with their learning status, review count, and next review time
- **Flexible Controls**: Reset progress, delete words, or manually mark as mastered/unmastered
- **Smart Status Indicators**: Visual cues showing which words need immediate attention

### 💾 Data Management
- **Export/Import**: Full backup and restore functionality with JSON format
- **Merge Mode**: Import new words while keeping existing progress
- **Overwrite Mode**: Complete data replacement for fresh starts
- **Local Storage**: All data stored locally in your browser (no internet required after loading)

### 🎨 User Experience
- **Modern UI**: Beautiful gradient design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Keyboard Shortcuts**: 
  - **Review Mode**: `Space` (show meaning), `Y` (remembered), `N` (forgot), `S` (skip)
  - **Add Word Mode**: `Shift + Enter` (add word and focus back to input)
- **Real-time Updates**: Statistics and review status update automatically

## 🚀 Getting Started

### Download
📥 **[Download GRE Vocabulary Assistant](path/to/your/file/GREvocaAssistant.html)**

### Installation
1. Download the HTML file to your computer
2. Open it with any modern web browser (Chrome, Firefox, Safari, Edge)
3. No additional installation required!

### First Steps
1. **Add Words**: Go to the "添加单词" (Add Words) tab and start building your vocabulary
2. **Start Learning**: Switch to "开始复习" (Start Review) when you have words to review
3. **Track Progress**: Monitor your learning statistics in the dashboard

## 📖 How to Use

### Adding Words
1. Navigate to the **Add Words** tab
2. Enter the English word in the first field
3. Add the Chinese definition in the text area
4. Click "📚 添加单词" or use `Shift + Enter` shortcut
5. The word will be scheduled for review in 6 minutes

### Reviewing Words
1. Go to the **Start Review** tab
2. A random word needing review will be displayed
3. Try to recall the meaning, then click "💡 显示释义" or press `Space`
4. Choose your performance:
   - "✅ 记住了" (`Y`) - Promotes the word to the next level
   - "❌ 忘记了" (`N`) - Demotes the word to reinforce learning
   - "⭐ 跳过" (`S`) - Skip without affecting the word's status

### Managing Your Vocabulary
1. Use the **Word Management** tab to view all words
2. See detailed information: status, review count, level, next review time
3. Available actions for each word:
   - **Reset**: Start learning progress from beginning
   - **Delete**: Remove the word completely
   - **Mark/Unmark as Mastered**: Manual mastery control

### Backup and Restore
1. **Export Data**: 
   - Go to "数据备份" (Data Backup) tab
   - Click "下载备份文件" to save your progress
   - File includes timestamp for easy organization
2. **Import Data**:
   - Choose your backup file
   - Select **Merge Mode** to add new words while keeping existing data
   - Select **Overwrite Mode** to completely replace current data

## 🧠 Learning Algorithm

The application implements an optimized spaced repetition system:

### Memory Intervals
- **Level 0**: 6 minutes (0.1 hours)
- **Level 1**: 30 minutes (0.5 hours)  
- **Level 2**: 1 hour
- **Level 3**: 2 hours
- **Level 4**: 6 hours
- **Level 5**: 24 hours (1 day)
- **Level 6**: 72 hours (3 days)
- **Level 7**: 168 hours (7 days)
- **Level 8**: 336 hours (14 days) - **Mastered**

### Performance-Based Adjustment
- **Correct Answer**: Promotes word to next level, extending review interval
- **Incorrect Answer**: Demotes word by one level, requiring more frequent review
- **Mastery**: Words reaching level 8 are marked as mastered and require less frequent review

## 🔧 Technical Details

- **Technology**: Pure HTML5, CSS3, and JavaScript - no external dependencies
- **Storage**: Local browser storage (localStorage)
- **Compatibility**: Works in all modern browsers
- **Offline**: Fully functional without internet connection
- **File Size**: Lightweight single-file application

## 💡 Tips for Effective Learning

1. **Consistent Daily Practice**: Review words when they appear in your queue
2. **Honest Self-Assessment**: Mark words as "forgot" if you're not confident
3. **Regular Backups**: Export your progress weekly to avoid data loss
4. **Quality over Quantity**: Focus on truly understanding meanings rather than just memorizing
5. **Use Context**: Try to create sentences or associations with each word

## 🆘 Troubleshooting

### Common Issues
- **Words not appearing for review**: Check that you've waited for the scheduled review time
- **Lost data**: Always maintain regular backups using the export feature
- **Performance issues**: Clear browser cache if the app becomes slow

### Data Safety
- Data is stored locally in your browser
- Export regularly to prevent loss from browser updates or clearing data
- Consider saving backups to cloud storage (Google Drive, Dropbox, etc.)

## 🔄 Updates and Improvements

This is a standalone application that doesn't require updates. However, you can:
- Download newer versions when available
- Import your data to maintain progress across versions
- Suggest improvements for future releases

## 📄 License

This project is open for educational and personal use. Feel free to modify and distribute according to your needs.

---

**Happy Learning! 🎓 Master your GRE vocabulary with confidence!**