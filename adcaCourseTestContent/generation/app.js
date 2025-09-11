// Quiz Application
class QuizApp {
    constructor() {
        this.currentCategory = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = { correct: 0, incorrect: 0 };
        this.quizData = {};
        this.init();
    }

    init() {
        this.loadQuizData();
        this.setupEventListeners();
        this.setupTheme();
        this.generateCategories();
    }

    loadQuizData() {
        // Map question arrays to quiz data object
        this.quizData = {
            'gen_1': generation1,
            "gen_2": generation2,
            "gen_3": generation3,
            "gen_4": generation4
        };
    }

    generateCategories() {
        const container = document.getElementById('quizCategories');
        container.innerHTML = categories.map(cat => `
            <div class="category-card" data-category="${cat.id}">
                <div class="category-icon">${cat.icon}</div>
                <h3>${cat.title}</h3>
                <p>${cat.description}</p>
                <button class="start-btn">Start Quiz</button>
            </div>
        `).join('');
    }

    setupEventListeners() {
        // Category selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.category-card')) {
                const card = e.target.closest('.category-card');
                const category = card.dataset.category;
                this.startQuiz(category);
            }
            
            // Close mobile menu when clicking outside
            if (!e.target.closest('.navbar')) {
                this.closeMobileMenu();
            }
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Navigation buttons
        document.getElementById('nextBtn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('homeBtn').addEventListener('click', () => {
            this.goHome();
        });

        document.getElementById('tryAgainBtn').addEventListener('click', () => {
            this.tryAgain();
        });

        // Mobile menu toggle
        document.getElementById('mobileMenuToggle').addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMobileMenu();
        });

        // Navbar functions
        window.showHome = () => {
            this.goHome();
            this.closeMobileMenu();
        };
        window.showTests = () => {
            this.goHome();
            this.closeMobileMenu();
        };
        window.showAbout = () => {
            alert('About Alien Institute of Computer - Leading tech education platform');
            this.closeMobileMenu();
        };
        window.showContact = () => {
            alert('Contact: hellowsupprt@gmail.com | Phone: +91 9365489154');
            this.closeMobileMenu();
        };

        // Option selection
        document.addEventListener('change', (e) => {
            if (e.target.type === 'radio' && e.target.name === 'answer') {
                document.getElementById('nextBtn').disabled = false;
            }
        });
    }

    setupTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeToggle(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeToggle(newTheme);
    }

    updateThemeToggle(theme) {
        const toggle = document.getElementById('themeToggle');
        toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    startQuiz(category) {
        this.currentCategory = category;
        this.questions = this.shuffleArray([...this.quizData[category]]);
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = { correct: 0, incorrect: 0 };

        this.showScreen('quizScreen');
        this.displayQuestion();
        this.updateProgress();
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const nextBtn = document.getElementById('nextBtn');

        questionText.textContent = question.question;
        nextBtn.disabled = true;
        nextBtn.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Finish Quiz' : 'Next Question';

        // Shuffle options
        const shuffledOptions = question.options.map((option, index) => ({ option, originalIndex: index }));
        this.shuffleArray(shuffledOptions);

        optionsContainer.innerHTML = shuffledOptions.map((item, index) => `
            <div class="option">
                <input type="radio" name="answer" value="${item.originalIndex}" id="option${index}">
                <label for="option${index}">${item.option}</label>
            </div>
        `).join('');

        // Add click handlers
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => {
                const radio = option.querySelector('input[type="radio"]');
                radio.checked = true;
                
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                document.getElementById('nextBtn').disabled = false;
            });
        });

        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = this.questions.length;
    }

    nextQuestion() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) return;

        const userAnswer = parseInt(selectedAnswer.value);
        const correctAnswer = this.questions[this.currentQuestionIndex].correct;
        
        this.userAnswers.push(userAnswer);
        
        if (userAnswer === correctAnswer) {
            this.score.correct++;
        } else {
            this.score.incorrect++;
        }

        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
            this.updateProgress();
        } else {
            this.showResults();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
    }

    showResults() {
        const percentage = Math.round((this.score.correct / this.questions.length) * 100);

        document.getElementById('resultEmoji').textContent = this.getResultEmoji(percentage);
        document.getElementById('resultTitle').textContent = this.getResultTitle(percentage);
        document.getElementById('correctCount').textContent = this.score.correct;
        document.getElementById('incorrectCount').textContent = this.score.incorrect;
        document.getElementById('percentageScore').textContent = `${percentage}%`;

        this.showScreen('resultsScreen');
    }

    getResultEmoji(percentage) {
        if (percentage >= 90) return '🏆';
        if (percentage >= 80) return '🎉';
        if (percentage >= 70) return '👏';
        if (percentage >= 60) return '👍';
        return '😔';
    }

    getResultTitle(percentage) {
        if (percentage >= 90) return 'Outstanding!';
        if (percentage >= 80) return 'Excellent!';
        if (percentage >= 70) return 'Good Job!';
        if (percentage >= 60) return 'Well Done!';
        return 'Keep Trying!';
    }

    goHome() {
        this.showScreen('homeScreen');
    }

    tryAgain() {
        if (this.currentCategory) {
            this.startQuiz(this.currentCategory);
        } else {
            this.goHome();
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    toggleMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.getElementById('mobileMenuToggle');
        
        navLinks.classList.toggle('mobile-active');
        menuToggle.textContent = navLinks.classList.contains('mobile-active') ? '✕' : '☰';
    }

    closeMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.getElementById('mobileMenuToggle');
        
        if (navLinks.classList.contains('mobile-active')) {
            navLinks.classList.remove('mobile-active');
            menuToggle.textContent = '☰';
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});