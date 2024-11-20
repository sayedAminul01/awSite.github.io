const questions = [
    { question: "What is the shortcut for the 'Eyedropper Tool' in Photoshop?", options: ["I", "E", "P", "O"], correctAnswer: 1 },
    { question: "What is the shortcut for the 'Quick Selection Tool' in Photoshop?", options: ["W", "Q", "E", "R"], correctAnswer: 3 },
    { question: "What is the shortcut for the 'Lasso Tool' in Photoshop?", options: ["L", "M", "S", "C"], correctAnswer: 2 },
    { question: "What is the shortcut for the 'Move Tool' in Photoshop?", options: ["V", "M", "T", "B"], correctAnswer: 0 },
    { question: "What is the shortcut for the 'Brush Tool' in Photoshop?", options: ["B", "P", "M", "L"], correctAnswer: 2 },
    { question: "What is the shortcut for the 'Clone Stamp Tool' in Photoshop?", options: ["S", "C", "T", "B"], correctAnswer: 3 },
    { question: "What is the shortcut for the 'Crop Tool' in Photoshop?", options: ["C", "B", "L", "V"], correctAnswer: 0 },
    { question: "What is the shortcut for 'Edit in Camera Raw' in Photoshop?", options: ["Ctrl+Shift+A", "Ctrl+R", "Ctrl+Shift+E", "Ctrl+Shift+P"], correctAnswer: 2 },
    { question: "What is the shortcut for the 'Marquee Tool' in Photoshop?", options: ["M", "V", "L", "T"], correctAnswer: 1 },
    { question: "What is the shortcut for the 'Gradient Tool' in Photoshop?", options: ["G", "H", "F", "I"], correctAnswer: 0 },
    { question: "What is the shortcut for the 'Path Selection Tool' in Photoshop?", options: ["A", "B", "S", "T"], correctAnswer: 3 },
    { question: "What is the shortcut for the 'Pen Tool' in Photoshop?", options: ["P", "L", "M", "N"], correctAnswer: 2 },
    { question: "What is the shortcut for the 'Zoom Tool' in Photoshop?", options: ["Z", "X", "Y", "U"], correctAnswer: 0 },
    { question: "What is the shortcut for the 'Text Tool' in Photoshop?", options: ["T", "E", "P", "R"], correctAnswer: 1 },
    { question: "What is the shortcut for 'Undo' in Photoshop?", options: ["Ctrl+Z", "Ctrl+Y", "Ctrl+S", "Ctrl+X"], correctAnswer: 2 },
    { question: "What is the shortcut for 'Redo' in Photoshop?", options: ["Ctrl+Shift+Z", "Ctrl+Z", "Ctrl+Y", "Ctrl+X"], correctAnswer: 3 },
    { question: "What is the shortcut for 'Save As' in Photoshop?", options: ["Ctrl+Shift+S", "Ctrl+S", "Ctrl+A", "Ctrl+O"], correctAnswer: 0 },
    { question: "What is the shortcut for 'New Document' in Photoshop?", options: ["Ctrl+N", "Ctrl+M", "Ctrl+S", "Ctrl+O"], correctAnswer: 2 },
    { question: "What is the shortcut for the 'Hand Tool' in Photoshop?", options: ["H", "V", "B", "C"], correctAnswer: 1 },
    { question: "What is the shortcut for 'Open' in Photoshop?", options: ["Ctrl+O", "Ctrl+N", "Ctrl+M", "Ctrl+P"], correctAnswer: 1 },
    { question: "What is the shortcut for 'Print' in Photoshop?", options: ["Ctrl+P", "Ctrl+Q", "Ctrl+W", "Ctrl+E"], correctAnswer: 3 },
    { question: "What is the shortcut for 'Deselect All' in Photoshop?", options: ["Ctrl+D", "Ctrl+A", "Ctrl+Z", "Ctrl+X"], correctAnswer: 1 },
    { question: "What is the shortcut for 'Invert Selection' in Photoshop?", options: ["Ctrl+Shift+I", "Ctrl+I", "Ctrl+Alt+I", "Ctrl+Shift+A"], correctAnswer: 3 },
    { question: "What is the shortcut for 'Select All' in Photoshop?", options: ["Ctrl+A", "Ctrl+S", "Ctrl+X", "Ctrl+C"], correctAnswer: 0 },
    { question: "What is the shortcut for 'Feather' in Photoshop?", options: ["Shift+F6", "Ctrl+F6", "Shift+F5", "Ctrl+F5"], correctAnswer: 2 },
    { question: "What is the shortcut for 'Free Transform' in Photoshop?", options: ["Ctrl+T", "Ctrl+R", "Ctrl+Shift+T", "Ctrl+E"], correctAnswer: 1 },
    { question: "What is the shortcut for 'Fill' in Photoshop?", options: ["Shift+F5", "Ctrl+F5", "Shift+F6", "Ctrl+F6"], correctAnswer: 0 },
    { question: "What is the shortcut for 'Hide/Show Layers Panel' in Photoshop?", options: ["F7", "Ctrl+L", "Ctrl+H", "Ctrl+T"], correctAnswer: 3 },
    { question: "What is the shortcut for 'Hide/Show Grid' in Photoshop?", options: ["Ctrl+Shift+I", "Ctrl+'", "Ctrl+G", "Ctrl+T"], correctAnswer: 1 },
    { question: "What is the shortcut for 'Transform Selection' in Photoshop?", options: ["Ctrl+Shift+T", "Ctrl+T", "Ctrl+Shift+R", "Ctrl+R"], correctAnswer: 2 },
    { question: "What is the shortcut for 'Hide/Show Rulers' in Photoshop?", options: ["Ctrl+R", "Shift+R", "Alt+R", "Ctrl+T"], correctAnswer: 0 },
    { question: "What is the shortcut for 'Add a New Layer' in Photoshop?", options: ["Ctrl+Shift+N", "Ctrl+N", "Ctrl+L", "Ctrl+O"], correctAnswer: 3 },
    { question: "What is the shortcut for 'Duplicate Layer' in Photoshop?", options: ["Ctrl+J", "Ctrl+Shift+J", "Ctrl+D", "Ctrl+L"], correctAnswer: 2 },
    { question: "What is the shortcut for 'New Adjustment Layer' in Photoshop?", options: ["Ctrl+Alt+L", "Ctrl+Alt+Shift+L", "Ctrl+Shift+N", "Ctrl+N"], correctAnswer: 1 },
    { question: "What is the shortcut for 'Merge Layers' in Photoshop?", options: ["Ctrl+E", "Ctrl+M", "Ctrl+Shift+M", "Ctrl+Shift+E"], correctAnswer: 0 },
    { question: "What is the shortcut for 'Open Layer Style Dialog' in Photoshop?", options: ["Ctrl+Alt+L", "Ctrl+S", "Ctrl+Shift+L", "Ctrl+Shift+F"], correctAnswer: 2 },
    { question: "What is the shortcut for 'Layer Mask' in Photoshop?", options: ["Ctrl+Alt+Shift+N", "Ctrl+Alt+M", "Ctrl+Shift+M", "Ctrl+Shift+Alt+M"], correctAnswer: 0 },
    { question: "What is the shortcut for 'Brush Size' in Photoshop?", options: ["Alt+Right Click", "Ctrl+Right Click", "Shift+Left Click", "Alt+Left Click"], correctAnswer: 3 },
    { question: "What is the shortcut for 'Show/Hide Paths' in Photoshop?", options: ["Ctrl+H", "Ctrl+Shift+H", "Ctrl+P", "Ctrl+Alt+H"], correctAnswer: 2 },
    { question: "What is the shortcut for 'Activate the Previous Tool' in Photoshop?", options: ["Shift+Ctrl+Z", "Ctrl+Z", "Ctrl+Alt+Z", "Shift+Z"], correctAnswer: 3 },
    { question: "What is the shortcut for 'Switch Foreground and Background Colors' in Photoshop?", options: ["X", "C", "B", "Z"], correctAnswer: 1 },
    { question: "What is the shortcut for the 'Gradient Tool' in Photoshop?", options: ["G", "H", "F", "I"], correctAnswer: 0 },
    { question: "What is the shortcut for 'Fill with Background Color' in Photoshop?", options: ["Ctrl+Backspace", "Alt+Backspace", "Shift+Backspace", "Ctrl+Shift+Backspace"], correctAnswer: 3 },
    { question: "What is the shortcut for 'Invert Colors' in Photoshop?", options: ["Ctrl+I", "Ctrl+Alt+I", "Ctrl+Shift+I", "Ctrl+T"], correctAnswer: 1 },
    { question: "What is the shortcut for 'Fill with Foreground Color' in Photoshop?", options: ["Alt+Delete", "Shift+Delete", "Ctrl+Delete", "Ctrl+Alt+Delete"], correctAnswer: 2 },
    { question: "What is the shortcut for 'Edit in Camera Raw' in Photoshop?", options: ["Ctrl+Shift+A", "Ctrl+R", "Ctrl+Shift+E", "Ctrl+Shift+P"], correctAnswer: 2 },
    { question: "What is the shortcut for 'Fill Color' in Photoshop?", options: ["Shift+F5", "Ctrl+F5", "Alt+F5", "Ctrl+Shift+F5"], correctAnswer: 0 },
    { question: "What is the shortcut for 'Toggle Quick Mask' in Photoshop?", options: ["Q", "W", "E", "R"], correctAnswer: 0 },
    { question: "What is the shortcut for 'Auto-Align Layers' in Photoshop?", options: ["Ctrl+Shift+A", "Ctrl+Alt+T", "Ctrl+T", "Ctrl+Shift+M"], correctAnswer: 1 },
    { question: "What is the shortcut for 'Converting to Smart Object' in Photoshop?", options: ["Ctrl+Shift+S", "Ctrl+S", "Ctrl+Alt+S", "Ctrl+Shift+Alt+S"], correctAnswer: 3 }
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
        return `Exceptional work, ${name}! যি ব্যক্তিয়ে পৰিশ্ৰম কৰাত বিশ্বাস ৰাখে তেঁও কেতিয়াও নীয়তিৰ লেখনীত বিশ্বাস নকৰে ।!`;
    case 'B':
        return `Great job, ${name}! যদি তুমি সূৰ্যৰ দৰে জিলিকিব বিচাৰা তেন্তে তুমি সূৰ্যৰ দৰে জ্বলিব লাগিব।`;
    case 'C':
        return `Good effort, ${name}. আধা বাটৰ পৰা উভতি আহিলে একো লাভ নাই কাৰন উভতি আহোতে ইমানেই সময় লাগিব যিমান লক্ষ্য প্ৰাপ্তী পাওঁতে লাগিলহেতেন ।`;
    case 'D':
        return `${name}, জীৱনত যিমানেই অসফলতা লাভ কৰিব এদিন আপোনাৰ ভৱিষ্যত সিমানেই সফল হ’ব !– Mahezubin Saikia. `;
    default:
        return `${name}, অসফলতাই তোমাক কেতিয়াও স্পৰ্শ কৰিব নোৱাৰে যদিহে তুমি সফল হবলৈ একাগ্ৰতা আৰু অপ্ৰান্ চেষ্টা কৰা ।`;
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
