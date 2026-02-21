// biology.js – SSC GD Biology MCQ Test (38 questions)

// ---------- BIOLOGY QUESTIONS FROM DOCUMENT ----------
const questionBank = [
    {
        question: "জীৱজগতৰ বৈচিত্ৰতা কিয় আশ্চৰ্যকৰ বুলি কোৱা হৈছে?",
        options: [
            "কেৱল বনাঞ্চলত দেখা যায়",
            "বিশাল প্ৰজাতি বৈচিত্ৰতাৰ বাবে",
            "সকলো জীৱ একে ধৰণৰ",
            "কেৱল পানীত থাকে"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "তলৰ কোনটো জীৱৰ প্ৰাকৃতিক আবাস নহয়?",
        options: [
            "শীতল পর্বতমালা",
            "মৰুভূমি",
            "গৰমপানীৰ উহঁ",
            "কংক্ৰিটৰ দেৱাল"
        ],
        correctAnswer: 3 // D
    },
    {
        question: "জীৱনৰ লক্ষ্য বা উদ্দেশ্য সন্দৰ্ভত প্ৰশ্নটো কেনে ধৰণৰ?",
        options: [
            "যুক্তিনিষ্ঠ তাত্ত্বিক প্ৰশ্ন",
            "গণিতীয় প্ৰশ্ন",
            "বাণিজ্যিক প্ৰশ্ন",
            "সামাজিক প্ৰশ্ন"
        ],
        correctAnswer: 0 // A
    },
    {
        question: "'বিপাক' (Metabolism) কিহৰ সৈতে সম্পৰ্কিত?",
        options: [
            "জীৱৰ ৰং",
            "জীৱৰ আভ্যন্তৰীণ ৰাসায়নিক প্ৰক্ৰিয়া",
            "জীৱৰ আকাৰ",
            "জীৱৰ নাম"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "Self-replication ৰ অৰ্থ কি?",
        options: [
            "নিজৰ আকাৰ সলনি কৰা",
            "নিজৰ দৰে পুনৰ সৃষ্টি কৰা",
            "নিজৰ ৰং সলনি কৰা",
            "স্থিৰ হৈ থকা"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "'জীৱ'ৰ সূত্ৰ উদ্ভাৱণ কৰিবলৈ আমি সাধাৰণতে কি লক্ষ্য কৰোঁ?",
        options: [
            "জীৱৰ ওজন",
            "জীৱৰ বাসস্থান",
            "জীৱসমূহে দেখুৱা চাৰিত্ৰিক বৈশিষ্ট্য",
            "জীৱৰ মূল্য"
        ],
        correctAnswer: 2 // C
    },
    {
        question: "'অংগৰোহ' (emergence) শব্দটো কিহৰ সৈতে জড়িত?",
        options: [
            "জড় পদাৰ্থ",
            "জীৱৰ বৈশিষ্ট্য",
            "পৰ্বত",
            "বালি"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "বহুকোষী জীৱত বৃদ্ধি কেনেকৈ হয়?",
        options: [
            "খোৱা",
            "কোষ বিভাজন",
            "শ্বাস",
            "চলন"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "উদ্ভিদত কোষ বিভাজন কেতিয়ালৈকে চলি থাকে?",
        options: [
            "শৈশৱত",
            "যৌৱনত",
            "সমগ্ৰ জীৱনকাল",
            "বাৰ্ধক্যত"
        ],
        correctAnswer: 2 // C
    },
    {
        question: "নতুন কোষে কি কৰে?",
        options: [
            "ৰং সলায়",
            "পুৰণা কোষৰ ঠাই পূৰ কৰে",
            "ওজন কমায়",
            "গতি বঢ়ায়"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "এককোষী জীৱৰ বৃদ্ধি কেনেকৈ ঘটে?",
        options: [
            "খোৱাৰ দ্বাৰা",
            "কোষ বিভাজনৰ দ্বাৰা",
            "শ্বাসৰ দ্বাৰা",
            "চলনৰ দ্বাৰা"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "এককোষী জীৱৰ বৃদ্ধি কেনেদৰে গণনা কৰা যায়?",
        options: [
            "চকুত",
            "মাপনীতে",
            "অনুবীক্ষণ যন্ত্ৰত",
            "তাপত"
        ],
        correctAnswer: 2 // C
    },
    {
        question: "উচ্চখাপৰ জীৱত বৃদ্ধি আৰু প্ৰজনন কেনে?",
        options: [
            "একে প্ৰক্ৰিয়া",
            "পৃথক প্ৰক্ৰিয়া",
            "নাই",
            "স্থিৰ"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "জীৱৰ বৃদ্ধি কেনেকৈ হয়?",
        options: [
            "বাহিৰৰ পৰা",
            "অভ্যন্তৰৰ পৰা",
            "বতাহত",
            "পানীত"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "বৃদ্ধি কিয় জীৱৰ একমাত্ৰ বৈশিষ্ট্য নহয়?",
        options: [
            "জড় পদাৰ্থতো বৃদ্ধি হয়",
            "জীৱ নাথাকে",
            "বৃদ্ধি নাই",
            "কোষ নাই"
        ],
        correctAnswer: 0 // A
    },
    {
        question: "বহুকোষী জীৱত প্ৰজনন কি?",
        options: [
            "চলন",
            "অপত্য সৃষ্টি",
            "শ্বাস",
            "গতি"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "প্ৰধান প্ৰজনন প্ৰক্ৰিয়া কোনটো?",
        options: [
            "অযৌন",
            "যৌন প্ৰজনন",
            "গতি",
            "মৃত্যু"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "ভেঁকুৰে কেনেকৈ বংশবৃদ্ধি কৰে?",
        options: [
            "ৰেণুৰ দ্বাৰা",
            "গতি",
            "শ্বাস",
            "পানী"
        ],
        correctAnswer: 0 // A
    },
    {
        question: "মুকু লোদ্‌গম (Budding) ক'ত দেখা যায়?",
        options: [
            "মানুহ",
            "হাইদ্রা",
            "পাহাৰ",
            "শিল"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "পুনৰ্জনন (Regeneration) ক'ত দেখা যায়?",
        options: [
            "প্লেনেৰিয়া",
            "মানুহ",
            "গছ",
            "বালি"
        ],
        correctAnswer: 0 // A
    },
    {
        question: "খণ্ডিতকৰণ (Fragmentation) ক'ত দেখা যায়?",
        options: [
            "ভেঁকুৰ",
            "পাহাৰ",
            "নদী",
            "শিল"
        ],
        correctAnswer: 0 // A
    },
    {
        question: "বেক্টেৰিয়াৰ বংশবৃদ্ধি কেনেকৈ হয়?",
        options: [
            "বিভাজনেৰে",
            "শ্বাসেৰে",
            "চলনেৰে",
            "পানীৰে"
        ],
        correctAnswer: 0 // A
    },
    {
        question: "এককোষী জীৱৰ ক্ষেত্ৰত বৃদ্ধি আৰু প্ৰজনন কি?",
        options: [
            "পৃথক",
            "একে অৰ্থৰ",
            "নাই",
            "অজানা"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "এককোষী জীৱৰ ক্ষেত্ৰত বৃদ্ধি আৰু প্ৰজননৰ পাৰ্থক্য কেনে?",
        options: [
            "স্পষ্ট",
            "সম্পূৰ্ণ ভিন্ন",
            "সুস্পষ্ট নহয়",
            "একেবাৰে নাই"
        ],
        correctAnswer: 2 // C
    },
    {
        question: "তলৰ কোনটো জীৱ প্ৰজনন নকৰা উদাহৰণ?",
        options: [
            "গছ",
            "খচ্চৰ (মিউল)",
            "মাছ",
            "বেক্টেৰিয়া"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "বিপাক কোনে সম্পাদন কৰে?",
        options: [
            "কেৱল উদ্ভিদ",
            "কেৱল প্ৰাণী",
            "সকলো জীৱ",
            "জড় পদাৰ্থ"
        ],
        correctAnswer: 2 // C
    },
    {
        question: "জীৱৰ এক সুনিৰ্দ্দিষ্ট বৈশিষ্ট্য কি?",
        options: [
            "পাথৰ",
            "কোষীয় সংগঠন",
            "ধূলি",
            "বালি"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "সকলো জীৱই কিহৰ প্ৰতি সঁহাৰি জনাব পাৰে?",
        options: [
            "কেৱল পানী",
            "পৰিবেশৰ উদ্দীপক",
            "কেৱল পোহৰ",
            "কেৱল শব্দ"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "জীৱৰ এক মুখ্য বৈশিষ্ট্য হিচাপে কিহক ধৰা হৈছে?",
        options: [
            "গতি",
            "সচেতনতা",
            "ৰং",
            "আকাৰ"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "যন্ত্ৰৰ সহায়ত হৃদপিণ্ড আৰু হাওঁফাওঁ চলাই ৰখা ৰোগীৰ সমস্যা কি?",
        options: [
            "শৰীৰ সুস্থ",
            "মস্তিষ্ক মৃত",
            "বেছি শক্তি",
            "গতি নাই"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "কলা (Tissue) ৰ গুণ ক'ৰ পৰা আহে?",
        options: [
            "এটা কোষৰ পৰা",
            "সকলো কোষৰ পাৰস্পৰিক ক্ৰিয়া",
            "ৰংৰ পৰা",
            "আকাৰৰ পৰা"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "কোষ অঙ্গানুৰ ধৰ্ম কিহৰ ফল?",
        options: [
            "এটা অণু",
            "আণৱিক উপাদানৰ পাৰস্পৰিক ক্ৰিয়া",
            "পানী",
            "বায়ু"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "পৃথিৱীত এতিয়ালৈকে জানিব পৰা জীৱৰ প্ৰায় কিমান প্ৰজাতি আছে?",
        options: [
            "10,000",
            "1.7--1.8 নিযুত",
            "500",
            "50 নিযুত"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "সকলো জীৱ প্ৰজাতিৰ সমষ্টিয়ে কি বুজায়?",
        options: [
            "পৰিবেশ",
            "জৈৱ বৈচিত্ৰতা",
            "জলবায়ু",
            "পাহাৰ"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "উদ্ভিদৰ নামকৰণৰ নিয়মাৱলী কিহত উল্লেখ আছে?",
        options: [
            "ICZN",
            "ICBN",
            "WHO",
            "UNESCO"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "প্ৰাণীৰ নামকৰণৰ নিয়মাৱলী কিহা?",
        options: [
            "ICBN",
            "ICZN",
            "DNA",
            "RNA"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "দ্বিপদ নামকৰণত প্ৰথম পদটো কি?",
        options: [
            "প্ৰজাতি",
            "গণ (Genus)",
            "পৰিৱেশ",
            "দেহ"
        ],
        correctAnswer: 1 // B
    },
    {
        question: "দ্বিপদ নামকৰণ পদ্ধতি সৰ্বপ্ৰথমে কোনে প্ৰচলন কৰে?",
        options: [
            "ডাৰউইন",
            "কেৰ'লাছ লিনিয়াছ",
            "নিউটন",
            "আইনষ্টাইন"
        ],
        correctAnswer: 1 // B
    }
];

// ---------- GLOBAL VARIABLES ----------
let questions = [];                // shuffled working copy
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timeLeft = 30 * 60;            // 30 minutes in seconds
let timerInterval;
let userName = "";
let canSelect = true;              // block multiple clicks during feedback

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.querySelector('.progress-bar');
const timerElement = document.getElementById('timer');
const userNameInput = document.getElementById('user-name');
const userNameDisplay = document.getElementById('user-name-display');
const resultName = document.getElementById('result-name');
const correctSpan = document.getElementById('correct-answers');
const incorrectSpan = document.getElementById('incorrect-answers');
const percentageSpan = document.getElementById('percentage');
const gradeSpan = document.getElementById('grade');
const motivationMsg = document.getElementById('motivation-message');

// Set total questions count (38)
totalQuestionsSpan.textContent = questionBank.length;

// ---------- DARK MODE TOGGLE ----------
const darkToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.remove('light');
    body.classList.add('dark');
} else {
    body.classList.add('light');
}

darkToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
    }
});

// ---------- SHUFFLE FUNCTION ----------
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ---------- START QUIZ ----------
document.getElementById('start-button').addEventListener('click', () => {
    userName = userNameInput.value.trim();
    if (userName === "") {
        alert("Please enter your name to begin.");
        return;
    }
    // Shuffle questions
    questions = shuffleArray([...questionBank]);
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    timeLeft = 30 * 60;
    canSelect = true;

    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    userNameDisplay.textContent = userName;
    displayQuestion();
    startTimer();
});

// ---------- DISPLAY CURRENT QUESTION ----------
function displayQuestion() {
    const q = questions[currentQuestion];
    let html = `
        <div class="question-container active mb-6">
            <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">${currentQuestion+1}. ${q.question}</h2>
            <div class="space-y-3">
    `;
    q.options.forEach((opt, idx) => {
        html += `
            <div class="option" data-index="${idx}">${opt}</div>
        `;
    });
    html += `</div></div>`;
    quizContainer.innerHTML = html;

    // Attach click listeners
    document.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', handleAnswer);
    });

    // Update progress
    currentQuestionSpan.textContent = currentQuestion + 1;
    progressBar.style.width = `${((currentQuestion) / questions.length) * 100}%`;
}

// ---------- HANDLE ANSWER CLICK ----------
function handleAnswer(e) {
    if (!canSelect) return;          // ignore if already answering
    canSelect = false;

    const selected = e.target;
    const selectedIdx = parseInt(selected.dataset.index);
    const correctIdx = questions[currentQuestion].correctAnswer;

    // Mark selected as wrong (red) and correct as green (if needed)
    selected.classList.add('wrong-highlight');
    if (selectedIdx !== correctIdx) {
        // Show correct answer
        document.querySelectorAll('.option')[correctIdx].classList.add('correct-highlight');
        incorrectAnswers++;
    } else {
        // Selected was correct
        selected.classList.remove('wrong-highlight');
        selected.classList.add('correct-highlight');
        correctAnswers++;
    }

    // Disable all options temporarily
    document.querySelectorAll('.option').forEach(opt => opt.classList.add('disabled'));

    // Move to next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
            canSelect = true;
        } else {
            // End of test
            showResults();
        }
    }, 1000);
}

// ---------- TIMER ----------
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // Auto-submit: force end
            if (quizScreen.classList.contains('hidden') === false) {
                showResults();
            }
        }
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerElement.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// ---------- RESULTS ----------
function showResults() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    resultName.textContent = userName;
    correctSpan.textContent = correctAnswers;
    incorrectSpan.textContent = incorrectAnswers;

    const total = questions.length;
    const percentage = (correctAnswers / total) * 100;
    percentageSpan.textContent = percentage.toFixed(1);

    let grade = '';
    if (percentage >= 80) grade = 'A (Excellent)';
    else if (percentage >= 60) grade = 'B (Good)';
    else if (percentage >= 40) grade = 'C (Average)';
    else grade = 'D (Needs Practice)';
    gradeSpan.textContent = grade;

    // Motivational message
    const name = userName;
    if (percentage >= 80) motivationMsg.textContent = `${name}, outstanding! Your biology knowledge is top‑notch.`;
    else if (percentage >= 60) motivationMsg.textContent = `Good job, ${name}! Keep practicing to reach excellence.`;
    else if (percentage >= 40) motivationMsg.textContent = `Keep going, ${name}! Every mistake teaches you something.`;
    else motivationMsg.textContent = `Don't give up, ${name}! Review the basics and try again – you'll improve.`;
}

// ---------- RESTART ----------
document.getElementById('restart-button').addEventListener('click', () => {
    clearInterval(timerInterval);
    resultContainer.classList.add('hidden');
    startScreen.classList.remove('hidden');
    userNameInput.value = '';
    // Reset everything
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    canSelect = true;
});