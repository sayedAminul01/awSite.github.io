const questions = [
    {
        question: "What is considered hardware in a computer system?",
        options: ["Operating System", "Word Processing Software", "Monitor", "Antivirus"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is software?",
        options: ["Keyboard", "RAM", "Microsoft Word", "Hard Disk"],
        correctAnswer: 2
    },
    {
        question: "Which component is responsible for processing data in a computer?",
        options: ["CPU", "RAM", "Monitor", "Mouse"],
        correctAnswer: 0
    },
    {
        question: "Which of these is an example of system software?",
        options: ["Photoshop", "Windows OS", "Google Chrome", "Microsoft Excel"],
        correctAnswer: 1
    },
    {
        question: "RAM stands for:",
        options: ["Readily Accessible Memory", "Random Access Memory", "Read And Modify", "Rapid Access Memory"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a type of hardware used for permanent data storage?",
        options: ["Hard Disk", "RAM", "Processor", "Motherboard"],
        correctAnswer: 0
    },
    {
        question: "The physical components of a computer system are called:",
        options: ["Software", "Data", "Firmware", "Hardware"],
        correctAnswer: 3
    },
    {
        question: "Software designed to manage the hardware and control other software is called:",
        options: ["Utility Software", "Application Software", "System Software", "Firmware"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is NOT hardware?",
        options: ["Motherboard", "Processor", "Antivirus", "RAM"],
        correctAnswer: 2
    },
    {
        question: "Which software allows the user to browse the web?",
        options: ["Windows", "Compiler", "Web Browser", "MS Paint"],
        correctAnswer: 2
    },
    {
        question: "What is firmware?",
        options: ["Software embedded into hardware", "A type of operating system", "Physical storage device", "A kind of virus"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a system software?",
        options: ["Linux", "Windows", "MS Word", "macOS"],
        correctAnswer: 2
    },
    {
        question: "Which device is used to input data into the computer?",
        options: ["Printer", "Monitor", "Keyboard", "CPU"],
        correctAnswer: 2
    },
    {
        question: "A collection of programs that manage and coordinate the hardware and software of a computer is called:",
        options: ["Application Software", "System Software", "Firmware", "Utility"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an input device?",
        options: ["Monitor", "Mouse", "Printer", "Speaker"],
        correctAnswer: 1
    },
    {
        question: "Which of the following stores the BIOS in a computer?",
        options: ["ROM", "RAM", "CPU", "Hard Disk"],
        correctAnswer: 0
    },
    {
        question: "The main circuit board in a computer is called:",
        options: ["Processor", "Motherboard", "RAM", "Hard Drive"],
        correctAnswer: 1
    },
    {
        question: "What does OS stand for in computing?",
        options: ["Operating System", "Open Software", "Output Service", "Optical Storage"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is an example of application software?",
        options: ["MS Word", "BIOS", "Device Driver", "Windows"],
        correctAnswer: 0
    },
    {
        question: "Which hardware component is also known as the 'brain' of the computer?",
        options: ["RAM", "CPU", "Hard Disk", "GPU"],
        correctAnswer: 1
    },
    {
        question: "Which software directly interacts with the hardware of a computer?",
        options: ["System Software", "Application Software", "Web Browser", "Text Editor"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is an example of system software?",
        options: ["Google Chrome", "Adobe Photoshop", "Windows 10", "Microsoft Excel"],
        correctAnswer: 2
    },
    {
        question: "Which hardware device provides long-term storage?",
        options: ["CPU", "RAM", "Hard Disk", "Cache"],
        correctAnswer: 2
    },
    {
        question: "What is the primary function of an operating system?",
        options: ["Editing documents", "Browsing the internet", "Managing hardware and software resources", "Compiling programs"],
        correctAnswer: 2
    },
    {
        question: "The software that is permanently stored in hardware is called:",
        options: ["Firmware", "Operating System", "Application Software", "Utility Software"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a peripheral device?",
        options: ["Keyboard", "Printer", "CPU", "Scanner"],
        correctAnswer: 2
    },
    {
        question: "What is a device driver?",
        options: ["Software that controls hardware devices", "A type of operating system", "A hardware component", "Software to access the internet"],
        correctAnswer: 0
    },
    {
        question: "Which memory is volatile?",
        options: ["ROM", "Hard Disk", "RAM", "BIOS"],
        correctAnswer: 2
    },
    {
        question: "Which of these is considered software?",
        options: ["RAM", "Mouse", "Antivirus", "Hard Drive"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is NOT an operating system?",
        options: ["Windows", "Linux", "Google Chrome", "macOS"],
        correctAnswer: 2
    },
    {
        question: "What type of software is Microsoft Office?",
        options: ["System Software", "Utility Software", "Application Software", "Firmware"],
        correctAnswer: 2
    },
    {
        question: "Which part of the computer system is responsible for running programs?",
        options: ["Operating System", "CPU", "ROM", "RAM"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a type of system software?",
        options: ["MS Word", "Linux OS", "VLC Player", "Adobe Illustrator"],
        correctAnswer: 1
    },
    {
        question: "Which of the following hardware is used for temporary data storage?",
        options: ["RAM", "Hard Disk", "Monitor", "Printer"],
        correctAnswer: 0
    },
    {
        question: "What does GUI stand for?",
        options: ["Graphical User Interface", "General User Interface", "Global User Interface", "Generalized Utility Interface"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT an example of application software?",
        options: ["MS Paint", "Windows 10", "Photoshop", "VLC Player"],
        correctAnswer: 1
    },
    {
        question: "A device that connects the computer to the internet is called:",
        options: ["CPU", "Router", "Monitor", "Hard Disk"],
        correctAnswer: 1
    },
    {
        question: "A touchpad is an input device commonly found in:",
        options: ["Desktops", "Laptops", "Monitors", "Printers"],
        correctAnswer: 1
    },
    {
        question: "Which component holds the operating system and application software when the computer is turned off?",
        options: ["RAM", "CPU", "Hard Drive", "ROM"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is a secondary storage device?",
        options: ["RAM", "Hard Drive", "Processor", "Monitor"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of utility software?",
        options: ["To assist with specific hardware tasks", "To write code", "To browse the internet", "To play media files"],
        correctAnswer: 0
    },
    {
        question: "Which of these is used to install and manage drivers in a computer system?",
        options: ["System Software", "BIOS", "Application Software", "Device Manager"],
        correctAnswer: 3
    },
    {
        question: "Which hardware is responsible for rendering graphics?",
        options: ["RAM", "CPU", "GPU", "SSD"],
        correctAnswer: 2
    },
    {
        question: "What type of software is used to run a virtual machine?",
        options: ["Application Software", "Hypervisor", "Firmware", "Web Browser"],
        correctAnswer: 1
    },
    {
        question: "What is an example of a utility software?",
        options: ["Disk Defragmenter", "MS Excel", "Microsoft Outlook", "Google Chrome"],
        correctAnswer: 0
    },
    {
        question: "The speed of the processor is measured in:",
        options: ["Hertz", "Bits", "Pixels", "Bytes"],
        correctAnswer: 0
    },
    {
        question: "Which of the following software allows a user to type text?",
        options: ["MS Word", "Disk Cleaner", "BIOS", "Device Driver"],
        correctAnswer: 0
    },
    {
        question: "What does SSD stand for?",
        options: ["Solid State Drive", "Software System Design", "Storage Software Disk", "Super Storage Disk"],
        correctAnswer: 0
    },
    {
        question: "Which part of the computer helps you see visual output?",
        options: ["Mouse", "Monitor", "Keyboard", "CPU"],
        correctAnswer: 1
    },
    {
        question: "Which software is essential for booting up a computer?",
        options: ["Operating System", "Antivirus", "Word Processor", "Database"],
        correctAnswer: 0
    }
];




let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timeLeft = 900; // 15 minutes in seconds
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



const motivationalQuotes = [
"Believe you can and you're halfway there.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"The only way to do great work is to love what you do.",
"Don't watch the clock; do what it does. Keep going.",
"The future belongs to those who believe in the beauty of their dreams.",
// ... Add 95 more quotes here ...
];

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