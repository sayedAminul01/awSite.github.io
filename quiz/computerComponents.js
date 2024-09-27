const questions = [
    { question: "Which component is considered the brain of the computer?", options: ["RAM", "CPU", "Hard Drive", "Motherboard"], correctAnswer: 1 },
    { question: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Readily Available Memory", "Randomly Accessed Module"], correctAnswer: 1 },
    { question: "Which storage device is used for permanent data storage?", options: ["RAM", "CPU", "SSD", "Cache"], correctAnswer: 2 },
    { question: "What is the purpose of the motherboard?", options: ["To process data", "To store data", "To connect all components", "To power the computer"], correctAnswer: 2 },
    { question: "Which component handles all the calculations in a computer?", options: ["Control Unit", "Arithmetic Logic Unit", "RAM", "Hard Drive"], correctAnswer: 1 },
    { question: "What type of memory is volatile?", options: ["ROM", "SSD", "HDD", "RAM"], correctAnswer: 3 },
    { question: "Which of the following is an output device?", options: ["Keyboard", "Mouse", "Monitor", "Scanner"], correctAnswer: 2 },
    { question: "Which component is responsible for booting up the computer?", options: ["Control Unit", "BIOS", "RAM", "Hard Drive"], correctAnswer: 1 },
    { question: "What does HDD stand for?", options: ["High Definition Drive", "Hard Disk Drive", "High Data Drive", "Hard Data Disk"], correctAnswer: 1 },
    { question: "Which type of RAM is used as cache memory?", options: ["DRAM", "SRAM", "Flash", "NVRAM"], correctAnswer: 1 },
    { question: "What connects the CPU to the other components of the computer?", options: ["Backplane", "Bus", "Cache", "ROM"], correctAnswer: 1 },
    { question: "Which component is a temporary storage area for data currently in use?", options: ["ROM", "SSD", "HDD", "RAM"], correctAnswer: 3 },
    { question: "What is the primary function of a power supply unit?", options: ["To store data", "To manage processes", "To convert AC to DC power", "To interface with peripherals"], correctAnswer: 2 },
    { question: "Which component helps improve the performance of the CPU?", options: ["GPU", "HDD", "RAM", "Power Supply"], correctAnswer: 0 },
    { question: "What type of software is used to operate computer hardware?", options: ["Application Software", "System Software", "Utility Software", "Network Software"], correctAnswer: 1 },
    { question: "Which component is not considered a basic part of a computer system?", options: ["CPU", "Motherboard", "Monitor", "Scanner"], correctAnswer: 3 },
    { question: "What is the purpose of a GPU?", options: ["To handle graphics processing", "To perform calculations", "To store data", "To connect devices"], correctAnswer: 0 },
    { question: "Which type of memory is non-volatile?", options: ["RAM", "Cache", "HDD", "Register"], correctAnswer: 2 },
    { question: "What component generates the heat in a computer?", options: ["CPU", "GPU", "Power Supply", "All of the above"], correctAnswer: 3 },
    { question: "Which type of connection is commonly used for external storage devices?", options: ["USB", "HDMI", "VGA", "DVI"], correctAnswer: 0 },
    { question: "What is the main purpose of input devices?", options: ["To display information", "To store data", "To allow the user to interact with the computer", "To manage power supply"], correctAnswer: 2 },
    { question: "Which of the following is a primary input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], correctAnswer: 2 },
    { question: "What type of display technology uses liquid crystals?", options: ["CRT", "LED", "LCD", "Plasma"], correctAnswer: 2 },
    { question: "What device converts digital signals to analog signals?", options: ["Modem", "Router", "Switch", "Repeater"], correctAnswer: 0 },
    { question: "Which hardware component is often referred to as the 'heart' of the computer?", options: ["Power Supply", "RAM", "CPU", "Motherboard"], correctAnswer: 2 },
    { question: "What technology allows for increased data transfer speeds in HDDs?", options: ["SSD", "RAID", "SATA", "USB"], correctAnswer: 1 },
    { question: "Which component is essential for network connectivity?", options: ["Sound Card", "Network Interface Card", "HDD", "Motherboard"], correctAnswer: 1 },
    { question: "What does BIOS stand for?", options: ["Basic Input Output System", "Binary Input Output System", "Basic Internal Operating System", "Binary Internal Operating System"], correctAnswer: 0 },
    { question: "Which device is best suited for archiving data?", options: ["RAM", "SSD", "HDD", "Cache"], correctAnswer: 2 },
    { question: "What memory type provides the fastest access speed?", options: ["SSD", "RAM", "Cache", "HDD"], correctAnswer: 2 },
    { question: "What is the purpose of the cooling system in a computer?", options: ["To increase speed", "To regulate temperature", "To boost memory", "To enhance graphics"], correctAnswer: 1 },
    { question: "Which component expands the capabilities of a computer?", options: ["RAM", "Peripheral Devices", "CPU", "BIOS"], correctAnswer: 1 },
    { question: "Which part of the computer is responsible for displaying information visually?", options: ["Display Adapter", "GPU", "Monitor", "All of the above"], correctAnswer: 3 },
    { question: "What type of enclosure houses the computer components?", options: ["Chassis", "Keyboard", "Monitor", "Mouse"], correctAnswer: 0 },
    { question: "Which type of data bus is typically 64 bits wide?", options: ["Address Bus", "Data Bus", "Control Bus", "Peripheral Bus"], correctAnswer: 1 },
    { question: "Which component can be upgraded to improve gaming performance?", options: ["Power Supply", "RAM", "GPU", "Motherboard"], correctAnswer: 2 },
    { question: "What type of interface is HDMI?", options: ["Audio", "Video", "Both audio and video", "Data"], correctAnswer: 2 },
    { question: "Which part of the computer provides the electrical circuits?", options: ["Motherboard", "Power Supply", "CPU", "BIOS"], correctAnswer: 0 },
    { question: "The speed of a CPU is measured in?", options: ["Bytes", "Megabytes", "Hertz", "Kilohertz"], correctAnswer: 2 },
    { question: "What type of storage is typically used in portable devices?", options: ["SSD", "HDD", "Optical Discs", "Flash Memory"], correctAnswer: 3 },
    { question: "Which component ensures that the data is safely transmitted?", options: ["Router", "Modem", "NIC", "All of the above"], correctAnswer: 3 },
    { question: "What does a sound card do?", options: ["Processes audio input and output", "Enhances video quality", "Increases RAM", "Manages peripherals"], correctAnswer: 0 },
    { question: "What is the purpose of a network switch?", options: ["To connect multiple devices", "To store data", "To process information", "To provide internet access"], correctAnswer: 0 },
    { question: "Which of the following components is essential for multi-tasking?", options: ["HDD", "RAM", "Motherboard", "Power Supply"], correctAnswer: 1 },
    { question: "What technology does a touch screen use?", options: ["Sensors", "Button Input", "Peripheral Connection", "Light Emission"], correctAnswer: 0 },
    { question: "Which card is specifically designed for video processing?", options: ["Network Card", "Sound Card", "Video Card", "Storage Card"], correctAnswer: 2 }

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