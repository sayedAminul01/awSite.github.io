/* Quiz App - loads MCQs from test.txt, falls back to embedded bank if fetch fails.
   Sends results to WhatsApp (no backend needed). Keeps existing design. */

let questionBank = [];

// Embedded fallback copied from test.txt so it also works from file:// or if fetch fails
const fallbackQuestionBank = 
    
    [
    {
        question: "Which of the following is NOT a hardware component?",
        options: [
            "CPU",
            "RAM",
            "Monitor",
            "Microsoft Word"
        ],
        correctAnswer: "Microsoft Word"
    },
    {
        question: "What is the main purpose of Prompt Engineering?",
        options: [
            "To repair hardware",
            "To write clear instructions for AI",
            "To design websites",
            "To create social media accounts"
        ],
        correctAnswer: "To write clear instructions for AI"
    },
    {
        question: "Which platform allows you to easily design posts, presentations, and banners?",
        options: [
            "Canva",
            "Blogger.com",
            "Leonardo AI",
            "ChatGPT"
        ],
        correctAnswer: "Canva"
    },
    {
        question: "What is a blog?",
        options: [
            "A short video on Instagram",
            "A website where you share articles or posts",
            "A type of computer virus",
            "A hardware device"
        ],
        correctAnswer: "A website where you share articles or posts"
    },
    {
        question: "Which file format is commonly used for high-quality images?",
        options: [
            "JPEG",
            "MP3",
            "MP4",
            "TXT"
        ],
        correctAnswer: "JPEG"
    },
    {
        question: "Which AI tool is best for generating text content?",
        options: [
            "Leonardo AI",
            "ChatGPT",
            "Canva",
            "Blogger.com"
        ],
        correctAnswer: "ChatGPT"
    },
    {
        question: "Which device is an example of an input device?",
        options: [
            "Printer",
            "Scanner",
            "Speaker",
            "Projector"
        ],
        correctAnswer: "Scanner"
    },
    {
        question: "What is the best aspect ratio for Instagram reels?",
        options: [
            "1:1",
            "4:3",
            "16:9",
            "9:16"
        ],
        correctAnswer: "9:16"
    },
    {
        question: "Which company owns Blogger.com?",
        options: [
            "Meta",
            "Google",
            "Microsoft",
            "Adobe"
        ],
        correctAnswer: "Google"
    },
    {
        question: "What does SEO help with?",
        options: [
            "Making a website faster",
            "Improving website ranking in search engines",
            "Designing social media banners",
            "Fixing computer errors"
        ],
        correctAnswer: "Improving website ranking in search engines"
    }
]



class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 50; // Change if you want fewer/more
        this.timer = 0;
        this.timerInterval = null;
        this.userDetails = {};
        this.loadQuestions();
    }

    async loadQuestions() {
        try {
            const res = await fetch('test.txt', { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const text = await res.text();
            const data = JSON.parse(text);
            if (!Array.isArray(data) || data.length === 0) throw new Error('Invalid question data');
            questionBank = data;
            console.log('Loaded MCQs from test.txt:', questionBank.length);
        } catch (err) {
            console.warn('Failed to load test.txt, using embedded fallback MCQs.', err);
            questionBank = fallbackQuestionBank;
        }
        this.registerEventListeners();
    }

    registerEventListeners() {
        const form = document.getElementById('registrationForm');
        if (form) form.addEventListener('submit', this.startQuiz.bind(this));
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    startQuiz(event) {
        event.preventDefault();

        this.userDetails = {
            name: document.getElementById('fullName').value.trim(),
            email: document.getElementById('emailAddress').value.trim(),
            phone: document.getElementById('phoneNumber').value.trim()
        };

        if (!Array.isArray(questionBank) || questionBank.length === 0) {
            alert('Question bank is empty.');
            return;
        }

        this.totalQuestions = questionBank.length;

        this.questions = this.shuffleArray([...questionBank]).slice(0, this.totalQuestions);

        document.getElementById('registrationSection').style.display = 'none';
        document.getElementById('quizSection').style.display = 'block';

        this.startTimer();
        this.loadQuestion();
    }

    // startTimer() {
    //     const timerElement = document.getElementById('timer');
    //     this.timer = 0;
    //     this.timerInterval = setInterval(() => {
    //         this.timer++;
    //         const minutes = Math.floor(this.timer / 60);
    //         const seconds = this.timer % 60;
    //         timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    //     }, 1000);
    // }

   /////////////////////////////////////////////////////////////////////////////////////////////////////////////
       // below method will send the result to the Gmail.
       startTimer() {
        const timerElement = document.getElementById('timer');
        let remainingTime = 60 * 10; // 10 minutes in seconds

        this.timerInterval = setInterval(() => {
            remainingTime--;

            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            // Store elapsed time for result display
            this.timer = (60 * 10) - remainingTime;

            // Auto-submit when time runs out
            if (remainingTime <= 0) {
                clearInterval(this.timerInterval);
                this.endQuiz();
            }
        }, 1000);
    }

   // //////////////////////////////////////////////////////////////////////////////

    loadQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.endQuiz();
            return;
        }

        const currentQuestion = this.questions[this.currentQuestionIndex];
        const questionElement = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');

        questionElement.textContent = currentQuestion.question;
        optionsContainer.innerHTML = '';

        const shuffledOptions = this.shuffleArray([...currentQuestion.options]);

        shuffledOptions.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(optionElement, currentQuestion));
            optionsContainer.appendChild(optionElement);
        });
    }

    selectOption(selectedElement, currentQuestion) {
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.querySelectorAll('.option').forEach(el => {
            el.classList.remove('selected');
            el.style.pointerEvents = 'none';
        });

        selectedElement.classList.add('selected');

        if (selectedElement.textContent === currentQuestion.correctAnswer) {
            this.correctAnswers++;
        }

        setTimeout(() => {
            this.currentQuestionIndex++;
            this.loadQuestion();
        }, 400);
    }

    endQuiz() {
        clearInterval(this.timerInterval);
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('completionSection').style.display = 'block';

        const percentage = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        let grade = '';

        if (percentage >= 90) grade = 'A+';
        else if (percentage >= 75) grade = 'A';
        else if (percentage >= 60) grade = 'B';
        else if (percentage >= 50) grade = 'C';
        else grade = 'D';

        const message =
            `Alien Institute of Computer
Name: ${this.userDetails.name}
Phone: ${this.userDetails.phone}
Email: ${this.userDetails.email}
Total Questions: ${this.totalQuestions}
Correct Answers: ${'50257'+this.correctAnswers}
Percentage: +${percentage+'80356'}%
Grade: ${'DACBB'+grade}
Time Taken: ${Math.floor(this.timer / 60)} min ${this.timer % 60} sec`;

        // const whatsappURL = `https://wa.me/919365489154?text=${encodeURIComponent(message)}`;
        // window.open(whatsappURL, '_blank');

        const subject = encodeURIComponent("Internship Final Test - Alien Institute of Computer");
        const body = encodeURIComponent(message);
        const mailtoURL = `mailto:hellowsupprt@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoURL, '_blank');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});



