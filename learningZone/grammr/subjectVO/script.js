// ===== PASSWORD PROTECTION =====
const CORRECT_PASSWORD = 'alien123';

// Quiz Questions Array
const quizQuestions = [
{ id: 1, question: "In the sentence 'Riya eats mango', what is the subject?", assamese: "'Riya eats mango' বাক্যটোত Subject কোনটো?", options: ["Riya", "eats", "mango", "none"], correct: 0 },

{ id: 2, question: "In the sentence 'Riya eats mango', what is the verb?", assamese: "'Riya eats mango' বাক্যটোত Verb কোনটো?", options: ["Riya", "eats", "mango", "none"], correct: 1 },

{ id: 3, question: "In the sentence 'Riya eats mango', what is the object?", assamese: "'Riya eats mango' বাক্যটোত Object কোনটো?", options: ["Riya", "eats", "mango", "none"], correct: 2 },

{ id: 4, question: "Choose the correct subject in the sentence: 'The boy plays football.'", assamese: "'The boy plays football' বাক্যটোত Subject কোনটো?", options: ["boy", "plays", "football", "the"], correct: 0 },

{ id: 5, question: "Choose the verb in the sentence: 'The boy plays football.'", assamese: "'The boy plays football' বাক্যটোত Verb কোনটো?", options: ["boy", "plays", "football", "the"], correct: 1 },

{ id: 6, question: "Choose the object in the sentence: 'The boy plays football.'", assamese: "'The boy plays football' বাক্যটোত Object কোনটো?", options: ["boy", "plays", "football", "the"], correct: 2 },

{ id: 7, question: "Which word is the subject in 'The dog runs fast'?", assamese: "'The dog runs fast' বাক্যটোত Subject কোনটো?", options: ["dog", "runs", "fast", "the"], correct: 0 },

{ id: 8, question: "Which word is the verb in 'The dog runs fast'?", assamese: "'The dog runs fast' বাক্যটোত Verb কোনটো?", options: ["dog", "runs", "fast", "the"], correct: 1 },

{ id: 9, question: "Choose the correct verb: 'She ___ a book.'", assamese: "'She ___ a book' বাক্যটোত সঠিক Verb কোনটো?", options: ["read", "reads", "reading", "reader"], correct: 1 },

{ id: 10, question: "Choose the correct sentence.", assamese: "সঠিক বাক্যটো বাছনি কৰক।", options: ["He play cricket", "He plays cricket", "He playing cricket", "He played cricket now"], correct: 1 },

{ id: 11, question: "In 'They watch TV', what is the subject?", assamese: "'They watch TV' বাক্যটোত Subject কোনটো?", options: ["They", "watch", "TV", "none"], correct: 0 },

{ id: 12, question: "In 'They watch TV', what is the verb?", assamese: "'They watch TV' বাক্যটোত Verb কোনটো?", options: ["They", "watch", "TV", "none"], correct: 1 },

{ id: 13, question: "In 'They watch TV', what is the object?", assamese: "'They watch TV' বাক্যটোত Object কোনটো?", options: ["They", "watch", "TV", "none"], correct: 2 },

{ id: 14, question: "Choose the correct present tense.", assamese: "সঠিক Present Tense বাছনি কৰক।", options: ["She eat rice", "She eats rice", "She eating rice", "She eaten rice"], correct: 1 },

{ id: 15, question: "Choose the correct past tense.", assamese: "সঠিক Past Tense বাছনি কৰক।", options: ["He go to school", "He goes to school", "He went to school", "He going school"], correct: 2 },

{ id: 16, question: "Choose the correct future tense.", assamese: "সঠিক Future Tense বাছনি কৰক।", options: ["She will dance", "She danced", "She dancing", "She dance yesterday"], correct: 0 },

{ id: 17, question: "Identify the subject: 'My mother cooks food.'", assamese: "'My mother cooks food' বাক্যটোত Subject কোনটো?", options: ["mother", "cooks", "food", "my"], correct: 0 },

{ id: 18, question: "Identify the object: 'My mother cooks food.'", assamese: "'My mother cooks food' বাক্যটোত Object কোনটো?", options: ["mother", "cooks", "food", "my"], correct: 2 },

{ id: 19, question: "Choose the correct verb: 'The birds ___ in the sky.'", assamese: "'The birds ___ in the sky' বাক্যটোত সঠিক Verb কোনটো?", options: ["fly", "flies", "flying", "flown"], correct: 0 },

{ id: 20, question: "Choose the correct sentence.", assamese: "সঠিক বাক্যটো বাছনি কৰক।", options: ["She eat apples", "She eats apples", "She eating apples", "She eaten apples"], correct: 1 },

{ id: 21, question: "What is the subject in 'Rahul reads books'?", assamese: "'Rahul reads books' বাক্যটোত Subject কোনটো?", options: ["Rahul", "reads", "books", "none"], correct: 0 },

{ id: 22, question: "What is the object in 'Rahul reads books'?", assamese: "'Rahul reads books' বাক্যটোত Object কোনটো?", options: ["Rahul", "reads", "books", "none"], correct: 2 },

{ id: 23, question: "Choose the correct verb: 'The baby ___ milk.'", assamese: "'The baby ___ milk' বাক্যটোত সঠিক Verb কোনটো?", options: ["drink", "drinks", "drinking", "drank"], correct: 1 },

{ id: 24, question: "Choose the correct sentence.", assamese: "সঠিক বাক্যটো বাছনি কৰক।", options: ["They plays football", "They play football", "They playing football", "They played football now"], correct: 1 },

{ id: 25, question: "Which is the verb in 'The teacher teaches English'?", assamese: "'The teacher teaches English' বাক্যটোত Verb কোনটো?", options: ["teacher", "teaches", "English", "the"], correct: 1 },

{ id: 26, question: "Which is the object in 'The teacher teaches English'?", assamese: "'The teacher teaches English' বাক্যটোত Object কোনটো?", options: ["teacher", "teaches", "English", "the"], correct: 2 },

{ id: 27, question: "Choose the correct past tense.", assamese: "সঠিক Past Tense বাছনি কৰক।", options: ["She writes a letter", "She wrote a letter", "She writing a letter", "She write letter"], correct: 1 },

{ id: 28, question: "Choose the correct future tense.", assamese: "সঠিক Future Tense বাছনি কৰক।", options: ["I will go home", "I went home", "I going home", "I go yesterday"], correct: 0 },

{ id: 29, question: "In 'The cat drinks milk', what is the object?", assamese: "'The cat drinks milk' বাক্যটোত Object কোনটো?", options: ["cat", "drinks", "milk", "the"], correct: 2 },

{ id: 30, question: "Choose the correct sentence.", assamese: "সঠিক বাক্যটো বাছনি কৰক।", options: ["He run fast", "He runs fast", "He running fast", "He ran fast tomorrow"], correct: 1 }
];

// Application State
let appState = {
    currentStudent: null,
    currentQuestion: 0,
    answers: {},
    score: 0,
    shuffledQuestions: [],
    quizStartTime: null,
    timeRemaining: 30 * 60,
    answerSubmitted: false,
    isLoggedIn: false,
    autoAdvanceTimeout: null
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    attachLoginEventListeners();
});

// ===== LOGIN FUNCTIONALITY =====

function attachLoginEventListeners() {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');

    loginForm.addEventListener('submit', handleLogin);
    passwordToggle.addEventListener('click', togglePasswordVisibility);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin(e);
    });
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
}

function handleLogin(e) {
    e.preventDefault();
    const passwordInput = document.getElementById('password');
    const errorEl = document.getElementById('loginError');
    const password = passwordInput.value.trim();

    if (!password) {
        errorEl.textContent = 'Please enter the password';
        return;
    }

    if (password === CORRECT_PASSWORD) {
        appState.isLoggedIn = true;
        errorEl.textContent = '';
        transitionToQuiz();
    } else {
        errorEl.textContent = 'Invalid password. Please try again.';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function transitionToQuiz() {
    document.getElementById('loginScreen').classList.remove('active');
    
    const topHeader = document.getElementById('topHeader');
    const mainContainer = document.getElementById('mainContainer');
    
    topHeader.style.display = 'block';
    mainContainer.style.display = 'flex';

    loadLeaderboard();
    attachQuizEventListeners();
}

// ===== QUIZ EVENT LISTENERS =====

function attachQuizEventListeners() {
    document.getElementById('startBtn').addEventListener('click', startQuiz);
    document.getElementById('studentName').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startQuiz();
    });

    document.getElementById('exitBtn').addEventListener('click', confirmExit);

    document.getElementById('downloadCertBtn').addEventListener('click', downloadCertificate);
    document.getElementById('retakeBtn').addEventListener('click', resetQuiz);
    document.getElementById('viewLeaderBtn').addEventListener('click', showLeaderboard);

    document.getElementById('backFromLeaderBtn').addEventListener('click', () => {
        showScreen('resultsScreen');
    });
}

// ===== QUIZ FUNCTIONS =====

function startQuiz() {
    const nameInput = document.getElementById('studentName');
    const name = nameInput.value.trim();
    const errorEl = document.getElementById('nameError');

    if (!name) {
        errorEl.textContent = 'Please enter your name to continue';
        return;
    }

    if (name.length < 2) {
        errorEl.textContent = 'Name must be at least 2 characters long';
        return;
    }

    errorEl.textContent = '';
    appState.currentStudent = name;
    appState.shuffledQuestions = shuffleArray([...quizQuestions]);
    appState.answers = {};
    appState.score = 0;
    appState.currentQuestion = 0;
    appState.answerSubmitted = false;
    appState.quizStartTime = Date.now();
    appState.timeRemaining = 30 * 60;

    showScreen('quizScreen');
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const question = appState.shuffledQuestions[appState.currentQuestion];
    const totalQuestions = appState.shuffledQuestions.length;
    
    appState.answerSubmitted = false;

    document.getElementById('questionNumber').textContent = appState.currentQuestion + 1;
    document.getElementById('currentScore').textContent = appState.score;

    const progress = ((appState.currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionTranslation').textContent = `Assamese: ${question.assamese}`;

    document.getElementById('answerFeedback').classList.remove('show');
    document.getElementById('autoAdvanceMessage').classList.remove('show');

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionDiv);
    });

    window.scrollTo(0, 0);
}

function selectAnswer(optionIndex) {
    if (appState.answerSubmitted) return;

    appState.answers[appState.currentQuestion] = optionIndex;
    appState.answerSubmitted = true;

    const question = appState.shuffledQuestions[appState.currentQuestion];
    const options = document.querySelectorAll('.option');
    const feedbackEl = document.getElementById('answerFeedback');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackText = document.getElementById('feedbackText');
    const isCorrect = optionIndex === question.correct;

    // Clear existing timeout
    if (appState.autoAdvanceTimeout) {
        clearTimeout(appState.autoAdvanceTimeout);
    }

    options.forEach((opt) => {
        opt.classList.add('disabled-option');
    });

    options.forEach((opt, idx) => {
        if (idx === question.correct) {
            opt.classList.add('correct');
        } else if (idx === optionIndex && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        appState.score++;
        document.getElementById('currentScore').textContent = appState.score;
        feedbackIcon.textContent = '✓';
        feedbackIcon.style.color = '#10b981';
        feedbackText.textContent = 'Correct! Well done!';
        feedbackEl.className = 'answer-feedback show correct';
    } else {
        feedbackIcon.textContent = '✗';
        feedbackIcon.style.color = '#ef4444';
        feedbackText.textContent = `Incorrect! Correct: ${question.options[question.correct]}`;
        feedbackEl.className = 'answer-feedback show incorrect';
    }

    const autoAdvanceMsg = document.getElementById('autoAdvanceMessage');
    autoAdvanceMsg.classList.add('show');

    // Auto-advance after 3 seconds
    appState.autoAdvanceTimeout = setTimeout(() => {
        const totalQuestions = appState.shuffledQuestions.length;
        if (appState.currentQuestion === totalQuestions - 1) {
            submitQuiz();
        } else {
            appState.currentQuestion++;
            displayQuestion();
        }
    }, 3000);
}

function submitQuiz() {
    clearInterval(window.timerInterval);
    calculateScore();
    displayResults();
    showScreen('resultsScreen');
}

function calculateScore() {
    appState.score = 0;
    appState.shuffledQuestions.forEach((question, index) => {
        if (appState.answers[index] === question.correct) {
            appState.score++;
        }
    });
}

function startTimer() {
    const timerEl = document.getElementById('timer');
    const timerProgress = document.getElementById('timerProgress');
    const totalTime = 30 * 60;

    window.timerInterval = setInterval(() => {
        appState.timeRemaining--;

        const minutes = Math.floor(appState.timeRemaining / 60);
        const seconds = appState.timeRemaining % 60;
        timerEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        // Update circular progress
        const progress = (appState.timeRemaining / totalTime) * 282.7;
        timerProgress.style.strokeDashoffset = progress;

        if (appState.timeRemaining <= 300) {
            timerEl.classList.add('warning');
        }
        if (appState.timeRemaining <= 60) {
            timerEl.classList.add('danger');
        }

        if (appState.timeRemaining <= 0) {
            clearInterval(window.timerInterval);
            alert('Time is up! Your quiz has been submitted.');
            submitQuiz();
        }
    }, 1000);
}

function displayResults() {
    const totalQuestions = appState.shuffledQuestions.length;
    const percentage = (appState.score / totalQuestions) * 100;
    const wrongAnswers = totalQuestions - appState.score;

    document.getElementById('finalScore').textContent = appState.score;
    document.getElementById('correctCount').textContent = appState.score;
    document.getElementById('wrongCount').textContent = wrongAnswers;
    document.getElementById('percentage').textContent = percentage.toFixed(1) + '%';

    const scholarshipInfo = getScholarshipInfo(appState.score);
    displayScholarshipBadge(scholarshipInfo);
    updateResultsMessage(scholarshipInfo);
}

function getScholarshipInfo(score) {
    if (score >= 24) {
        return { level: 'gold', title: '50% Scholarship', message: 'Congratulations! You have qualified for a 50% Scholarship.', emoji: '🏆' };
    } else if (score >= 18) {
        return { level: 'silver', title: '25% Scholarship', message: 'Great Performance! You have qualified for a 25% Scholarship.', emoji: '⭐' };
    } else {
        return { level: 'bronze', title: 'Participation Certificate', message: 'Thank you for participating! Keep practicing to improve.', emoji: '📜' };
    }
}

function displayScholarshipBadge(info) {
    const badge = document.getElementById('scholarshipBadge');
    badge.className = `scholarship-badge-large ${info.level}`;
    badge.innerHTML = `
        <div class="scholarship-icon">${info.emoji}</div>
        <h3>${info.title}</h3>
        <p>Alien School of Tech & Business</p>
    `;
    
    if (info.level === 'gold' || info.level === 'silver') {
        triggerConfetti();
    }
}

function updateResultsMessage(info) {
    document.getElementById('resultTitle').textContent = info.title;
    document.getElementById('resultMessage').textContent = info.message;
}

function triggerConfetti() {
    const container = document.getElementById('confetti');
    container.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -10 + 'px';
        confetti.style.backgroundColor = ['#6366f1', '#0ea5e9', '#10b981', '#fbbf24'][Math.floor(Math.random() * 4)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        container.appendChild(confetti);
    }

    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}

// ===== LEADERBOARD FUNCTIONS =====

function loadLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
    displayLeaderboardPreview(leaderboard);
}

function saveToLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
    const percentage = (appState.score / appState.shuffledQuestions.length) * 100;
    const scholarshipInfo = getScholarshipInfo(appState.score);

    leaderboard.push({
        name: appState.currentStudent,
        score: appState.score,
        percentage: percentage,
        scholarship: scholarshipInfo.title,
        level: scholarshipInfo.level,
        date: new Date().toLocaleDateString()
    });

    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard.splice(50);

    localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
    return leaderboard;
}

function displayLeaderboardPreview(leaderboard) {
    const preview = document.getElementById('previewLeaderboard');
    
    if (leaderboard.length === 0) {
        preview.innerHTML = '<p class="empty-message">Be the first to top the leaderboard!</p>';
        return;
    }

    preview.innerHTML = leaderboard.slice(0, 5).map((entry, idx) => `
        <div class="leaderboard-item">
            <span class="leaderboard-item-name">${idx + 1}. ${entry.name}</span>
            <span class="leaderboard-item-score">${entry.score}/30</span>
        </div>
    `).join('');
}

function showLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
    const leaderboardBody = document.getElementById('leaderboardBody');
    const emptyMsg = document.getElementById('emptyLeaderboard');

    if (leaderboard.length === 0) {
        leaderboardBody.innerHTML = '';
        emptyMsg.style.display = 'block';
        showScreen('leaderboardScreen');
        return;
    }

    emptyMsg.style.display = 'none';
    leaderboardBody.innerHTML = leaderboard.map((entry, idx) => {
        const medalClass = idx === 0 ? 'first' : idx === 1 ? 'second' : idx === 2 ? 'third' : '';
        return `
            <div class="leaderboard-row">
                <div class="leaderboard-rank ${medalClass}">${idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}</div>
                <div class="leaderboard-name">${entry.name}</div>
                <div class="leaderboard-score">${entry.score}</div>
                <div class="leaderboard-percentage">${entry.percentage.toFixed(1)}%</div>
            </div>
        `;
    }).join('');

    showScreen('leaderboardScreen');
}

// ===== CERTIFICATE GENERATION =====

function downloadCertificate() {
    const scholarshipInfo = getScholarshipInfo(appState.score);
    const percentage = (appState.score / appState.shuffledQuestions.length) * 100;

    const certificateContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate - ${appState.currentStudent}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #1a1f3a; padding: 20px; }
        .certificate { width: 100%; max-width: 900px; background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%); padding: 60px; border: 3px solid #6366f1; border-radius: 20px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2); text-align: center; }
        .certificate-title { font-size: 48px; font-weight: bold; margin-bottom: 20px; background: linear-gradient(135deg, #6366f1, #0ea5e9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .certificate-school { font-size: 28px; color: #1f2937; margin-bottom: 30px; font-weight: 600; }
        .certificate-body { margin: 40px 0; color: #4b5563; line-height: 1.8; }
        .student-name { font-size: 32px; font-weight: bold; color: #6366f1; text-decoration: underline; margin: 20px 0; }
        .certificate-achievement { background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(14, 165, 233, 0.1)); padding: 30px; border-radius: 15px; margin: 30px 0; border: 2px solid #6366f1; }
        .achievement-title { font-size: 24px; font-weight: 700; color: #6366f1; margin-bottom: 15px; }
        .achievement-details { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 30px; margin-top: 20px; }
        .detail-item { flex: 1; min-width: 200px; }
        .detail-label { font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
        .detail-value { font-size: 28px; font-weight: 700; color: #6366f1; }
        .emoji { font-size: 60px; margin: 20px 0; }
        @media print { body { background: white; } .certificate { border: 2px solid #6366f1; box-shadow: none; } }
    </style>
</head>
<body>
    <div class="certificate">
        <div class="emoji">${scholarshipInfo.emoji}</div>
        <div class="certificate-title">Certificate of Achievement</div>
        <div class="certificate-school">Alien School of Tech & Business</div>
        <div class="certificate-school" style="font-size: 18px; font-weight: normal; color: #6b7280;">Young Talent Entry Test</div>
        <div class="certificate-body">
            <p>This is to certify that</p>
            <div class="student-name">${appState.currentStudent}</div>
            <p>has successfully completed the Young Talent Entry Test</p>
            <p>and has demonstrated exceptional performance and commitment</p>
        </div>
        <div class="certificate-achievement">
            <div class="achievement-title">${scholarshipInfo.title}</div>
            <div class="achievement-details">
                <div class="detail-item">
                    <div class="detail-label">Score</div>
                    <div class="detail-value">${appState.score}/30</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Percentage</div>
                    <div class="detail-value">${percentage.toFixed(1)}%</div>
                </div>
            </div>
        </div>
        <div style="margin-top: 50px; padding-top: 30px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Issued on: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
    </div>
    <script>window.print();</script>
</body>
</html>
    `;

    const blob = new Blob([certificateContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Certificate_${appState.currentStudent.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ===== UTILITY FUNCTIONS =====

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

function resetQuiz() {
    saveToLeaderboard();
    document.getElementById('studentName').value = '';
    document.getElementById('nameError').textContent = '';
    showScreen('welcomeScreen');
    loadLeaderboard();
}

function confirmExit() {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
        clearInterval(window.timerInterval);
        if (appState.autoAdvanceTimeout) clearTimeout(appState.autoAdvanceTimeout);
        document.getElementById('studentName').value = '';
        showScreen('welcomeScreen');
    }
}