// maths.js – SSC GD Reasoning MCQ Test (30 questions)

// ---------- REASONING QUESTIONS FROM DOCUMENT ----------
const questionBank = [
    // Analogy (Q1-14) - first 10
    {
        question: "JFBW : FMXD :: KDZI : GKVP :: PRDY : ?",
        options: ["NRHX", "LYZF", "LAPD", "GRUESS"],
        correctAnswer: 1 // LYZF
    },
    {
        question: "EXISTENCE : SIXETECNE :: DIFFERENT : FFIDENTER :: INVENTIVE : ?",
        options: ["EVNINEVIT", "VEINNEVIT", "VENINEVIT", "ENVINVETI"],
        correctAnswer: 0 // EVNINEVIT
    },
    {
        question: "COMPLETE : COTEMPLE : POSITION : POONSITI : TROPICAL : ?",
        options: ["TRALPOIC", "TRALOPCI", "TRALOPIC", "TRLAOPIC"],
        correctAnswer: 2 // TRALOPIC
    },
    {
        question: "Exit : Leave : ?",
        options: ["Moat : Mote", "Select : Choose", "Start : End", "Fate : Fete"],
        correctAnswer: 1 // Select : Choose
    },
    {
        question: "17 : 69 :: ? : 109 :: 21 : 85",
        options: ["31", "37", "40", "27"],
        correctAnswer: 3 // 27
    },
    {
        question: "216 : 344 :: ? : 126 :: 27 : 65",
        options: ["68", "66", "70", "64"],
        correctAnswer: 3 // 64
    },
    {
        question: "I4D : G9F : L16S : J25U :: W64R : ?",
        options: ["T81U", "U81T", "U49T", "S49T"],
        correctAnswer: 1 // U81T
    },
    {
        question: "Seismology : Earthquake :: ?",
        options: ["आर्निथोलॉजी : पक्षियों", "कैनियोलॉजी : मांसपेशी", "पेडोलॉजी : पौधा", "एंटोमोलॉजी : अरिया"],
        correctAnswer: 0 // आर्निथोलॉजी : पक्षियों
    },
    {
        question: "Syphilis: Bacteria: Tinea pedis: ?",
        options: ["शैवाल/Algea", "प्रोटोजोआ/Protozoa", "कवक/Fungi", "विषाणु/Virus"],
        correctAnswer: 2 // कवक/Fungi
    },
    {
        question: "Just as 'hydrophobia' is related to 'water', similarly 'acrophobia' is related to ...?",
        options: ["परीक्षा", "खुली जगह", "ऊँचाई", "अंधकार"],
        correctAnswer: 2 // ऊँचाई
    },
    // Classification (Q8-14) - 7 questions
    {
        question: "Chrome, Firefox, Safari, Android",
        options: ["Chrome", "Firefox", "Safari", "Android"],
        correctAnswer: 3 // Android
    },
    {
        question: "Motherboard, RAM, Microsoft Word, CPU",
        options: ["Motherboard", "RAM", "Microsoft word", "CPU"],
        correctAnswer: 2 // Microsoft word
    },
    {
        question: "Artery, Vein, Capillary, Alveoli",
        options: ["Artery", "Vein", "Capillary", "Alveoli"],
        correctAnswer: 3 // Alveoli
    },
    {
        question: "JQM, LSP, OVS, NUR",
        options: ["JQM", "LSP", "OVS", "NUR"],
        correctAnswer: 0 // JQM
    },
    {
        question: "WUQ, XVS, YWT, ZXU",
        options: ["WUQ", "XVS", "YWT", "ZXU"],
        correctAnswer: 0 // WUQ
    },
    {
        question: "NNPT, KKNR, IIKO, SSUY",
        options: ["NNPT", "KKNR", "IIKO", "SSUY"],
        correctAnswer: 0 // NNPT
    },
    {
        question: "45 - 70, 75 - 12, 65 - 104, 90 - 144",
        options: ["45 - 70", "75 - 12", "65 - 104", "90 - 144"],
        correctAnswer: 0 // 45 - 70
    },
    // Coding Decoding (Q1-4) - 4 questions
    {
        question: "In a certain code language, 'LAND' be written as 'BLYJ' and 'BIRD' is written as 'BPGZ'. How will 'WAIT' be written?",
        options: ["RGYU", "RGUY", "YURG", "UYGR"],
        correctAnswer: 1 // RGUY
    },
    {
        question: "In a code language, 'DRIVE' is written as WIREV. How will MOBILE be written?",
        options: ["ANJORQ", "NLYROV", "NKSYRV", "NLZSUO"],
        correctAnswer: 1 // NLYROV
    },
    {
        question: "In a certain code language, 'SOLSTICE' is written as 'CEGVUNMU' and 'MAJESTY' is written as 'AVUCLYO'. How will 'INFLUENCE' be written?",
        options: ["KPHNTGPEG", "GEPGWNHOK", "CEPCSNHPG", "GALGTJDLK"],
        correctAnswer: 1 // GEPGWNHOK
    },
    {
        question: "In a code language, if PIGEON is coded as 11-18-20-22-12-13 and NEST is coded as 13-22-8-7, then how will WOODPECKER be coded?",
        options: [
            "3-11-11-22-10-21-23-15-21-8",
            "4-12-12-23-11-22-24-16-22-9",
            "4-11-11-23-11-21-24-15-21-9",
            "5-13-13-24-12-23-25-17-23-10"
        ],
        correctAnswer: 2 // 4-11-11-23-11-21-24-15-21-9
    },
    // Logical Sequence & Dictionary (Q1,2,6) - 3 questions
    {
        question: "1. नुस्वा 2. निदान 3. बीमारी 4. फॉलो-अप 5. स्वास्थ्य-लाभ",
        options: ["3,4,1,2,5", "1,2,5,3,4", "3,2,1,5,4", "2,3,1,4,5"],
        correctAnswer: 2 // 3,2,1,5,4
    },
    {
        question: "(1) बचपन (2) वयस्कता (3) शीशावास्था (4) बाल्यावस्था (5) बुद्धापा",
        options: ["3,4,1,5,2", "3,1,4,2,5", "3,1,4,5,2", "3,4,1,2,5"],
        correctAnswer: 1 // 3,1,4,2,5
    },
    {
        question: "(1) Incest (2) Inception (3) Incense (4) Incapacity (5) Incentive",
        options: ["4,5,3,2,1", "4,3,5,2,1", "5,3,2,1,4", "5,4,3,2,1"],
        correctAnswer: 1 // 4,3,5,2,1
    },
    // Blood Relation (Q1-3) - 3 questions
    {
        question: "P is the brother of R. R is the father of Q. S is the wife of Q. T is the daughter of S. How is P related to T?",
        options: ["पिता के पिता का भाई", "पिता का भाई", "पिता का पिता", "पिता"],
        correctAnswer: 1 // पिता का भाई
    },
    {
        question: "M is the brother of N. N is the father of O. O is the mother of P, who is married to Q. Q is the son of R. S is the father of N and is married to T. How is T related to O?",
        options: ["पिता की माँ", "माँ के पिता", "पिता", "माँ की माँ"],
        correctAnswer: 0 // पिता की माँ
    },
    {
        question: "Ravi and Raghu are brothers. Raju is Raghu's father. Shyam is Tushar's brother. Shyam is also Ravi's maternal uncle. How is Shyam related to Raju?",
        options: ["भाई", "साला", "पति", "पिता"],
        correctAnswer: 1 // साला
    },
    // Direction Sense (Q7-9) - 3 questions
    {
        question: "Vijay is standing on the terrace of his house. He sees the sun rising behind the church and setting behind a school. What is the direction of the church with respect to the school?",
        options: ["पूर्व", "दक्षिण", "परिचम", "उत्तर"],
        correctAnswer: 0 // पूर्व
    },
    {
        question: "If South-East becomes North, North-East becomes West and so on. What will South-West become?",
        options: ["उत्तर", "परिचम", "पूर्व", "दक्षिण"],
        correctAnswer: 2 // पूर्व
    },
    {
        question: "If 'North-East' is called the West, 'South-East' is called the North, 'South-West' is called the East and 'North-West' is called the South, then the South will be called.",
        options: ["पूर्व", "उत्तर-पूर्व", "दक्षिण-पूर्व", "दक्षिण"],
        correctAnswer: 1 // उत्तर-पूर्व
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

// Set total questions count (30)
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
    if (percentage >= 80) motivationMsg.textContent = `${name}, outstanding! Your reasoning skills are top‑notch.`;
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