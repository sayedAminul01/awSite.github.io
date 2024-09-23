const questions = [
    {
        question: "Which of the following is an input device?",
        options: ["Monitor", "Printer", "Mouse", "Speaker"],
        correctAnswer: 2
    },
    {
        question: "Which device is primarily used for processing data?",
        options: ["RAM", "CPU", "Monitor", "Keyboard"],
        correctAnswer: 1
    },
    {
        question: "What is the main function of an output device?",
        options: ["To process data", "To input data", "To store data", "To display or present data"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is an example of an output device?",
        options: ["Keyboard", "Monitor", "Mouse", "Scanner"],
        correctAnswer: 1
    },
    {
        question: "The keyboard is classified as which type of device?",
        options: ["Input", "Output", "Processing", "Storage"],
        correctAnswer: 0
    },
    {
        question: "What is the function of a microphone in a computer system?",
        options: ["To display data", "To store data", "To input sound", "To process sound"],
        correctAnswer: 2
    },
    {
        question: "Which device can both input and output data?",
        options: ["Hard Drive", "Printer", "Monitor", "Touch Screen"],
        correctAnswer: 3
    },
    {
        question: "What is the role of the CPU in a computer system?",
        options: ["To process data", "To store data", "To input data", "To display data"],
        correctAnswer: 0
    },
    {
        question: "Which of these is not an input device?",
        options: ["Scanner", "Microphone", "Mouse", "Projector"],
        correctAnswer: 3
    },
    {
        question: "A digital camera is an example of:",
        options: ["Input device", "Output device", "Processing device", "Storage device"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a processing device?",
        options: ["Hard Disk", "Mouse", "CPU", "Printer"],
        correctAnswer: 2
    },
    {
        question: "What does a scanner do?",
        options: ["Prints data", "Inputs images or documents", "Processes data", "Outputs sound"],
        correctAnswer: 1
    },
    {
        question: "Which of these is an output device that produces sound?",
        options: ["Monitor", "Speaker", "Scanner", "Keyboard"],
        correctAnswer: 1
    },
    {
        question: "Which device is primarily used to display visual information?",
        options: ["CPU", "Monitor", "Mouse", "Printer"],
        correctAnswer: 1
    },
    {
        question: "Which device is used for inputting text?",
        options: ["Monitor", "Mouse", "Keyboard", "Printer"],
        correctAnswer: 2
    },
    {
        question: "A joystick is commonly used in which context?",
        options: ["Text editing", "Gaming", "Data entry", "Printing"],
        correctAnswer: 1
    },
    {
        question: "What type of device is a plotter?",
        options: ["Input", "Output", "Processing", "Storage"],
        correctAnswer: 1
    },
    {
        question: "Which of the following devices is used to input hand-drawn images or signatures?",
        options: ["Keyboard", "Light Pen", "Monitor", "Printer"],
        correctAnswer: 1
    },
    {
        question: "What is the function of a barcode reader?",
        options: ["To print barcodes", "To store barcodes", "To scan and input barcodes", "To display barcodes"],
        correctAnswer: 2
    },
    {
        question: "Which device is used to project images onto a large screen?",
        options: ["Printer", "Projector", "Monitor", "Mouse"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an example of a processing device?",
        options: ["Mouse", "CPU", "Scanner", "Monitor"],
        correctAnswer: 1
    },
    {
        question: "What does a graphics tablet do?",
        options: ["Outputs sound", "Processes data", "Allows drawing and image input", "Outputs visual data"],
        correctAnswer: 2
    },
    {
        question: "Which device converts printed documents into digital form?",
        options: ["Printer", "Monitor", "Scanner", "Keyboard"],
        correctAnswer: 2
    },
    {
        question: "What type of device is a printer?",
        options: ["Input", "Output", "Processing", "Storage"],
        correctAnswer: 1
    },
    {
        question: "Which device allows users to input choices by touching the screen?",
        options: ["Mouse", "Touch Screen", "Keyboard", "Printer"],
        correctAnswer: 1
    },
    {
        question: "A light pen is primarily used for:",
        options: ["Typing text", "Selecting items on a screen", "Printing documents", "Processing data"],
        correctAnswer: 1
    },
    {
        question: "Which of the following devices processes instructions and performs calculations?",
        options: ["Monitor", "CPU", "Mouse", "Printer"],
        correctAnswer: 1
    },
    {
        question: "Which device is used to input video into a computer?",
        options: ["Microphone", "Webcam", "Printer", "Projector"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT an output device?",
        options: ["Monitor", "Printer", "Speakers", "Keyboard"],
        correctAnswer: 3
    },
    {
        question: "Which input device is used to control the pointer on the screen?",
        options: ["Monitor", "Mouse", "Printer", "Speaker"],
        correctAnswer: 1
    },
    {
        question: "A QR code scanner is an example of:",
        options: ["Output device", "Input device", "Storage device", "Processing device"],
        correctAnswer: 1
    },
    {
        question: "What is the primary function of an output device?",
        options: ["To process data", "To store data", "To receive and display data", "To input data"],
        correctAnswer: 2
    },
    {
        question: "Which of these devices can be used to input data by pointing?",
        options: ["Scanner", "Mouse", "Printer", "Speaker"],
        correctAnswer: 1
    },
    {
        question: "Which device allows the user to write directly on the screen?",
        options: ["Keyboard", "Printer", "Stylus", "Monitor"],
        correctAnswer: 2
    },
    {
        question: "A touchscreen combines which two functions?",
        options: ["Input and storage", "Input and output", "Processing and output", "Storage and input"],
        correctAnswer: 1
    },
    {
        question: "Which device is primarily used for producing physical copies of digital documents?",
        options: ["Scanner", "Keyboard", "Printer", "Monitor"],
        correctAnswer: 2
    },
    {
        question: "What is the function of a speaker?",
        options: ["To process sound", "To output sound", "To input sound", "To store sound"],
        correctAnswer: 1
    },
    {
        question: "A webcam is classified as which type of device?",
        options: ["Output", "Input", "Storage", "Processing"],
        correctAnswer: 1
    },
    {
        question: "Which of the following devices is used for processing data?",
        options: ["RAM", "Mouse", "Speaker", "Monitor"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is an example of an input device?",
        options: ["Speaker", "CPU", "Keyboard", "Monitor"],
        correctAnswer: 2
    },
    {
        question: "A speaker outputs which type of data?",
        options: ["Audio", "Video", "Text", "Image"],
        correctAnswer: 0
    },
    {
        question: "Which of the following devices is both an input and output device?",
        options: ["Monitor", "Keyboard", "Printer", "Touch Screen"],
        correctAnswer: 3
    },
    {
        question: "What is the primary function of the Central Processing Unit (CPU)?",
        options: ["Store data", "Display data", "Input data", "Process data"],
        correctAnswer: 3
    },
    {
        question: "A scanner is an example of a(n):",
        options: ["Input device", "Output device", "Processing device", "Storage device"],
        correctAnswer: 0
    },
    {
        question: "Which device is used to output data in the form of images or text on paper?",
        options: ["Printer", "Monitor", "Speaker", "Mouse"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a primary function of an input device?",
        options: ["To display data", "To input data into the computer", "To process data", "To store data"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a device that both inputs and outputs information?",
        options: ["Touch Screen", "Scanner", "Printer", "Monitor"],
        correctAnswer: 0
    }
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