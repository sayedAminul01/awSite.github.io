const questions = [
    { question: "Which of the following components was used in the first generation of computers?", options: ["Transistors", "Vacuum Tubes", "Microprocessors", "Integrated Circuits"], correctAnswer: 1 },
    { question: "The second generation of computers used which component?", options: ["Vacuum Tubes", "Integrated Circuits", "Transistors", "Microprocessors"], correctAnswer: 2 },
    { question: "Which of the following was the primary characteristic of third-generation computers?", options: ["Use of Vacuum Tubes", "Use of Transistors", "Use of Integrated Circuits", "Use of Microprocessors"], correctAnswer: 2 },
    { question: "What technology is associated with fourth-generation computers?", options: ["Vacuum Tubes", "Transistors", "Microprocessors", "Integrated Circuits"], correctAnswer: 2 },
    { question: "Fifth-generation computers are primarily based on which technology?", options: ["Artificial Intelligence", "Transistors", "Integrated Circuits", "Vacuum Tubes"], correctAnswer: 0 },
    { question: "Which generation introduced the use of personal computers?", options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"], correctAnswer: 3 },
    { question: "What replaced vacuum tubes in the second generation of computers?", options: ["Transistors", "Integrated Circuits", "Microprocessors", "Silicon Chips"], correctAnswer: 0 },
    { question: "Which generation is known for the development of natural language processing?", options: ["Third Generation", "Fourth Generation", "Fifth Generation", "Sixth Generation"], correctAnswer: 2 },
    { question: "The first programmable computer was invented during which generation?", options: ["First Generation", "Second Generation", "Third Generation", "Twelfth Generation"], correctAnswer: 0 },
    { question: "What technology began in the sixth generation of computers?", options: ["Quantum Computing", "Integrated Circuits", "Microprocessors", "Artificial Intelligence"], correctAnswer: 0 },
    { question: "Which component is a feature of seventh-generation computers?", options: ["AI and Machine Learning", "Vacuum Tubes", "Transistors", "Punch Cards"], correctAnswer: 0 },
    { question: "Which generation introduced the cloud computing paradigm?", options: ["Eighth Generation", "Ninth Generation", "Tenth Generation", "Eleventh Generation"], correctAnswer: 3 },
    { question: "The primary aim of the twelfth generation of computers is to enhance capabilities in what field?", options: ["Artificial Intelligence", "Data Processing", "User Interfaces", "Network Security"], correctAnswer: 0 },
    { question: "Which of the following programming languages was popular in third-generation computers?", options: ["Assembly Language", "COBOL", "Machine Code", "Basic"], correctAnswer: 1 },
    { question: "What technology is typically associated with the first generation of computers?", options: ["Artificial Intelligence", "Networking", "Vacuum Tubes", "Graphical User Interfaces"], correctAnswer: 2 },
    { question: "Which of the following devices was a significant innovation in fourth-generation computers?", options: ["Punched Cards", "Microprocessors", "Transistors", "Integrated Circuits"], correctAnswer: 1 },
    { question: "Which generation of computers is characterized by the widespread use of graphical user interfaces?", options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"], correctAnswer: 3 },
    { question: "The primary storage technology in the third generation was?", options: ["Magnetic Tape", "Hard Disk Drives", "Solid State Drives", "Punched Cards"], correctAnswer: 0 },
    { question: "During which generation did programming become more accessible due to high-level languages?", options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"], correctAnswer: 2 },
    { question: "The tenth generation primarily focuses on what type of computing?", options: ["Quantum Computing", "Classic Computing", "Cloud Computing", "Distributed Computing"], correctAnswer: 0 },
    { question: "What type of systems did sixth-generation computers enhance?", options: ["Control Systems", "Artificial Intelligence", "Supercomputers", "Microcomputers"], correctAnswer: 1 },
    { question: "Which generation significantly improved the speed of calculations?", options: ["First Generation", "Second Generation", "Third Generation", "Sixth Generation"], correctAnswer: 3 },
    { question: "What major advancement was made in the seventh generation?", options: ["Networking", "Miniaturization", "Artificial Intelligence", "Parallel Processing"], correctAnswer: 2 },
    { question: "Elon Musk's Neuralink represents advancements in which generation of computing?", options: ["Eleventh Generation", "Twelfth Generation", "Tenth Generation", "Ninth Generation"], correctAnswer: 1 },
    { question: "The primary characteristic of eighth-generation computers is their focus on?", options: ["Social Networking", "Advanced Analytics", "Artificial Intelligence", "Mobile Computing"], correctAnswer: 2 },
    { question: "What is the main component of systems in the ninth generation?", options: ["Vacuum Tubes", "Artificial Intelligence", "FPGAs", "Transistors"], correctAnswer: 2 },
    { question: "Which generation is noted for significant developments in data security?", options: ["Tenth Generation", "Eleventh Generation", "Twelfth Generation", "Ninth Generation"], correctAnswer: 1 },
    { question: "What was introduced in the eleventh generation of computers?", options: ["Quantum Computing", "Web 2.0", "Artificial Intelligence", "Big Data"], correctAnswer: 0 },
    { question: "Which of the following describes the sixth generation?", options: ["AI and IoT", "Distributed Systems", "Classic Computing", "Graphical Interfaces"], correctAnswer: 0 },
    { question: "Seventh-generation computers excel in?", options: ["Processing Power", "Connectivity", "Artificial Intelligence", "All of the above"], correctAnswer: 3 },
    { question: "What type of software is typically used in fourth-generation computers?", options: ["System Software", "Network Software", "Real-time Software", "Simulation Software"], correctAnswer: 0 },
    { question: "Which of the following is not a characteristic of the first generation of computers?", options: ["Large Size", "Low Power Efficiency", "Use of Microprocessors", "Use of Punched Cards"], correctAnswer: 2 },
    { question: "The main processing unit in fifth-generation computers is based on?", options: ["Neural Networks", "Fuzzy Logic", "Transistors", "Roman Numerals"], correctAnswer: 0 },
    { question: "Key advances in the eighth generation of computers include?", options: ["Parallel Processing", "AI", "Virtual Reality", "All of the above"], correctAnswer: 3 },
    { question: "Which generation focuses on intelligent agents?", options: ["Fifth Generation", "Tenth Generation", "Eleventh Generation", "Twelfth Generation"], correctAnswer: 0 },
    { question: "What feature defines the twelfth generation of computers?", options: ["AI", "Nanotechnology", "Ubiquitous Computing", "All of the above"], correctAnswer: 3 },
    { question: "Which generation first introduced distributed computing?", options: ["First Generation", "Third Generation", "Ninth Generation", "Tenth Generation"], correctAnswer: 2 },
    { question: "Which component is fundamental in microcomputers during the fourth generation?", options: ["Integrated Circuits", "Vacuum Tubes", "Punched Cards", "Hard Drives"], correctAnswer: 0 },
    { question: "Which generation is distinguished by the rise of big data?", options: ["Fifth Generation", "Twelfth Generation", "Tenth Generation", "Eleventh Generation"], correctAnswer: 1 },
    { question: "What innovation is prioritized in the ninth generation?", options: ["Interconnectivity", "Social Media", "Mobile Devices", "Quantum Supremacy"], correctAnswer: 3 },
    { question: "Which represents the key feature of the first generation of computers?", options: ["Artificial Intelligence", "Batch Processing", "Real-time Processing", "Interactive Computing"], correctAnswer: 1 },
    { question: "What does tenth generation computing focus on?", options: ["Game Development", "AI", "Quantum Mechanics", "All of the above"], correctAnswer: 2 },
    { question: "Which generation emphasizes user-friendly interfaces?", options: ["Second Generation", "Third Generation", "Fourth Generation", "Fifth Generation"], correctAnswer: 2 },
    { question: "The main storage devices used in seventh-generation computers are?", options: ["Magnetic Tapes", "Solid State Drives", "Optical Discs", "Punched Cards"], correctAnswer: 1 },
    { question: "What hallmark technology is associated with the twelfth generation?", options: ["Virtual Reality", "Quantum Computing", "Microservices", "Blockchain"], correctAnswer: 0 }
];




let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timeLeft = 600; // 10 minutes in seconds
let timerInterval;
let userName = "";

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const currentQuestionElement = document.getElementById('current-question');
const progressBar = document.querySelector('.progress-bar');
const timerElement = document.getElementById('timer');
const userNameInput = document.getElementById('user-name');
const userNameDisplay = document.getElementById('user-name-display');
const resultName = document.getElementById('result-name');
const motivationMessage = document.getElementById('motivation-message');

document.getElementById('start-button').addEventListener('click', startQuiz);
document.getElementById('restart-button').addEventListener('click', restartQuiz);

function startQuiz() {
userName = userNameInput.value.trim();
if (userName === "") {
    alert("Please enter your name before starting the quiz.");
    return;
}
startScreen.classList.add('hidden');
quizScreen.classList.remove('hidden');
userNameDisplay.textContent = userName;
displayQuestion();
startTimer();
}

function displayQuestion() {
const question = questions[currentQuestion];
let html = `
    <div class="question-container active mb-6">
        <h2 class="text-2xl font-semibold mb-4">${currentQuestion + 1}. ${question.question}</h2>
        <div class="space-y-2">
`;

question.options.forEach((option, index) => {
    html += `
        <div class="option p-3 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer transition-colors duration-200" data-index="${index}">
            ${option}
        </div>
    `;
});

html += `
        </div>
    </div>
`;

quizContainer.innerHTML = html;

const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', handleAnswer);
});

currentQuestionElement.textContent = currentQuestion + 1;
progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
}

function handleAnswer(e) {
const selectedAnswer = parseInt(e.target.dataset.index);
const correctAnswer = questions[currentQuestion].correctAnswer;

if (selectedAnswer === correctAnswer) {
    correctAnswers++;
    e.target.classList.add('bg-green-500', 'text-white');
} else {
    incorrectAnswers++;
    e.target.classList.add('bg-red-500', 'text-white');
    document.querySelector(`.option[data-index="${correctAnswer}"]`).classList.add('bg-green-500', 'text-white');
}

setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}, 1000);
}


function calculateGrade(percentage) {
if (percentage >= 80) return 'A';
if (percentage >= 60) return 'B';
if (percentage >= 40) return 'C';
return 'D';
}

function getGradeMessage(grade, name) {
switch (grade) {
    case 'A':
        return `Exceptional work, ${name}! Your grasp of computer science fundamentals is truly stellar. The Alien Institute of Computer Science is proud to have such a brilliant mind. Keep pushing the boundaries of technology!`;
    case 'B':
        return `Great job, ${name}! You've shown a strong understanding of CS concepts. The Alien Institute sees great potential in you. Keep exploring and you'll soon be creating groundbreaking algorithms!`;
    case 'C':
        return `Good effort, ${name}. You're on the right track in your CS journey at the Alien Institute. With more practice, you'll be decoding alien technologies in no time. Keep your curiosity alive!`;
    case 'D':
        return `${name}, you've taken the first steps in understanding CS at the Alien Institute. Remember, even alien software has bugs sometimes. Keep debugging your knowledge, and you'll unlock new programming dimensions!`;
    default:
        return `${name}, your CS journey at the Alien Institute is just beginning. Every great programmer started somewhere. With determination, you'll be writing interstellar code before you know it. The universe of programming awaits you!`;
}
}

function calculatePercentage() {
const totalQuestions = questions.length;
const positiveMarks = correctAnswers * 4; // 4 marks for each correct answer
const negativeMarks = incorrectAnswers * 1; // 1 negative mark for each incorrect answer
const totalMarks = positiveMarks - negativeMarks;
const maxMarks = totalQuestions * 4;
return (totalMarks / maxMarks) * 100;
}

function showResults() {
clearInterval(timerInterval);
quizScreen.classList.add('hidden');
resultContainer.classList.remove('hidden');
resultName.textContent = userName;
document.getElementById('correct-answers').textContent = correctAnswers;
document.getElementById('incorrect-answers').textContent = incorrectAnswers;

const percentage = calculatePercentage();
const grade = calculateGrade(percentage);
document.getElementById('percentage').textContent = percentage.toFixed(2);
document.getElementById('grade').textContent = grade;

const gradeMessage = getGradeMessage(grade, userName);
motivationMessage.textContent = gradeMessage;
}

// ... (rest of the code remains the same) ...


function restartQuiz() {
currentQuestion = 0;
correctAnswers = 0;
incorrectAnswers = 0;
timeLeft = 1800;
clearInterval(timerInterval);
resultContainer.classList.add('hidden');
startScreen.classList.remove('hidden');
userNameInput.value = "";
}

function startTimer() {
timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showResults();
    }
}, 1000);
}

function formatTime(seconds) {
const minutes = Math.floor(seconds / 60);
const remainingSeconds = seconds % 60;
return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}



function calculatePercentage() {
const totalQuestions = questions.length;
const positiveMarks = correctAnswers * 4; // Assuming 4 marks for each correct answer
const negativeMarks = incorrectAnswers * 1; // Assuming 1 negative mark for each incorrect answer
const totalMarks = positiveMarks - negativeMarks;
const maxMarks = totalQuestions * 4;
return (totalMarks / maxMarks) * 100;
}

function getRandomMotivationalQuote(percentage) {
let quoteIndex;
if (percentage >= 80) {
    quoteIndex = Math.floor(Math.random() * 20); // First 20 quotes for high achievers
} else if (percentage >= 60) {
    quoteIndex = Math.floor(Math.random() * 20) + 20; // Next 20 quotes for good performance
} else if (percentage >= 40) {
    quoteIndex = Math.floor(Math.random() * 20) + 40; // Next 20 quotes for average performance
} else if (percentage >= 20) {
    quoteIndex = Math.floor(Math.random() * 20) + 60; // Next 20 quotes for below average performance
} else {
    quoteIndex = Math.floor(Math.random() * 20) + 80; // Last 20 quotes for low performance
}
return motivationalQuotes[quoteIndex];
}