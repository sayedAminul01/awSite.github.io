const questions = [
    { question: "What does ROM stand for?", options: ["Read Only Memory", "Randomly Ordered Memory", "Readily Operable Memory", "Rapidly Organized Memory"], correctAnswer: 0 },
    { question: "Which type of ROM can be erased with ultraviolet light?", options: ["PROM", "EPROM", "Flash Memory", "RAM"], correctAnswer: 1 },
    { question: "Which type of memory cannot be modified after it is manufactured?", options: ["EPROM", "PROM", "ROM", "RAM"], correctAnswer: 2 },
    { question: "What is the primary purpose of cache memory?", options: ["Long-term storage", "To speed up data access", "To hold permanent data", "To store user settings"], correctAnswer: 1 },
    { question: "Which type of RAM is used for temporary data storage during processing?", options: ["SRAM", "DRAM", "ROM", "PROM"], correctAnswer: 1 },
    { question: "What does EPROM stand for?", options: ["Erasable Programmable Read Only Memory", "Electric Programmable Read Only Memory", "Electronic Permanent Read Only Memory", "Easily Programmable Read Only Memory"], correctAnswer: 0 },
    { question: "What is the characteristic of PROM?", options: ["It is rewriteable", "It can be programmed once", "It is volatile", "It is slower than RAM"], correctAnswer: 1 },
    { question: "What type of memory holds firmware for hardware devices?", options: ["Cache Memory", "ROM", "RAM", "HDD"], correctAnswer: 1 },
    { question: "Which memory type is fastest?", options: ["Cache", "RAM", "ROM", "Disk Storage"], correctAnswer: 0 },
    { question: "In memory hierarchy, which type is the most economically efficient for large data storage?", options: ["Cache Memory", "Solid State Drive", "HDD", "RAM"], correctAnswer: 2 },
    { question: "Which type of RAM does not need to be refreshed?", options: ["DRAM", "SRAM", "NAND", "Flash Memory"], correctAnswer: 1 },
    { question: "What is a common use for cache memory?", options: ["Storing permanent files", "Executing programs", "Storing frequently accessed data", "Backup storage"], correctAnswer: 2 },
    { question: "Which type of memory typically has the largest storage capacity?", options: ["Cache", "RAM", "SSD", "ROM"], correctAnswer: 2 },
    { question: "Where is cache memory located?", options: ["Between the CPU and RAM", "On the motherboard", "Within the hard drive", "Inside ROM modules"], correctAnswer: 0 },
    { question: "How is data lost in volatile memory?", options: ["When power is removed", "When data is overwritten", "When it is erased", "When the computer is shut down"], correctAnswer: 0 },
    { question: "What is the function of NVRAM?", options: ["Temporary storage", "Permanent storage", "Read on the fly", "Increased bandwidth"], correctAnswer: 1 },
    { question: "What is the main difference between SRAM and DRAM?", options: ["Speed", "Cost", "Volatility", "All of the above"], correctAnswer: 3 },
    { question: "What type of cache is built directly into the CPU?", options: ["L1 Cache", "L2 Cache", "L3 Cache", "Disk Cache"], correctAnswer: 0 },
    { question: "What type of memory is primarily used in embedded systems?", options: ["Flash Memory", "RAM", "Cache", "PROM"], correctAnswer: 0 },
    { question: "Which memory type can be programmed many times?", options: ["EPROM", "PROM", "RAM", "Flash Memory"], correctAnswer: 3 },
    { question: "What distinguishes ROM from RAM?", options: ["Speed", "Volatility", "Capacity", "Size"], correctAnswer: 1 },
    { question: "Which of the following is not a type of RAM?", options: ["SDRAM", "DRAM", "EPROM", "SRAM"], correctAnswer: 2 },
    { question: "Which hierarchy level has the lowest access speed?", options: ["Cache Memory", "RAM", "HDD", "Registers"], correctAnswer: 2 },
    { question: "What is the primary role of a Memory Management Unit (MMU)?", options: ["Manage disk space", "Translate virtual addresses to physical addresses", "Store firmware", "Speed up calculations"], correctAnswer: 1 },
    { question: "Which type of memory is typically used in computers for high-speed data access?", options: ["ROM", "HDD", "Cache", "Flash"], correctAnswer: 2 },
    { question: "In a memory hierarchy, what comes directly after cache memory?", options: ["RAM", "Hard Drive", "ROM", "SSD"], correctAnswer: 0 },
    { question: "What does the term 'write cycle' refer to?", options: ["The time taken to read data", "The process of storing data", "The speed of data transfer", "The method of data retrieval"], correctAnswer: 1 },
    { question: "Which component of memory typically operates at the fastest speeds?", options: ["Cache", "HDD", "RAM", "ROM"], correctAnswer: 0 },
    { question: "What does 'latency' refer to in memory terms?", options: ["Delay in data access", "Speed of data storage", "Volume of data stored", "Type of memory used"], correctAnswer: 0 },
    { question: "What is a common feature of EEPROM memory?", options: ["Volatile", "Can be electrically erased", "Cost-effective", "Has high density"], correctAnswer: 1 },
    { question: "What happens when a computer transitions to sleep mode?", options: ["Data moves to HDD", "Power to RAM is cut off", "Data is kept in RAM", "All tasks are halted"], correctAnswer: 2 },
    { question: "Which type of RAM is designed to be written to quickly?", options: ["Dynamic RAM", "Static RAM", "Magnetic RAM", "Flash RAM"], correctAnswer: 1 },
    { question: "What is a disadvantage of using DRAM?", options: ["Higher cost", "Requires constant refreshing", "Slower than SRAM", "None of the above"], correctAnswer: 1 },
    { question: "Which memory type is typically implemented in smart cards?", options: ["Flash Memory", "DRAM", "SRAM", "PROM"], correctAnswer: 0 },
    { question: "In which of the following scenarios is cache memory particularly useful?", options: ["Streaming movies", "Running applications", "Frequent file access", "Downloading files"], correctAnswer: 2 },
    { question: "Which memory type is used for permanent storage in a typical computer?", options: ["Cache", "RAM", "HDD", "ROM"], correctAnswer: 2 },
    { question: "What does 'cache hit' mean?", options: ["Data retrieved from RAM", "Data retrieved from the cache", "Data stored correctly", "Data not found in memory"], correctAnswer: 1 },
    { question: "Which memory type is used primarily for computer boot tasks?", options: ["ROM", "RAM", "Cache", "HDD"], correctAnswer: 0 },
    { question: "What is the disadvantage of using PROM?", options: ["Not reusable", "Low speed", "Volatile", "Requires power"], correctAnswer: 0 },
    { question: "What is typically stored in cache memory?", options: ["Frequently accessed data", "Operating System", "Permanent files", "User profiles"], correctAnswer: 0 },
    { question: "What does a dual in-line package (DIP) commonly refer to?", options: ["A form factor for ROM", "A motherboard layout", "A cache type", "A type of CPU"], correctAnswer: 0 },
    { question: "Which of the following is a feature of NVRAM?", options: ["Non-volatile", "Requires constant power", "Slower than DRAM", "Only used in embedded systems"], correctAnswer: 0 },
    { question: "What type of cache is usually slower but has larger storage capacity?", options: ["L1 Cache", "L3 Cache", "L2 Cache", "Memory Buffer"], correctAnswer: 2 },
    { question: "Which memory type is best for applications that require quick access?", options: ["HDD", "Flash Memory", "Cache", "ROM"], correctAnswer: 2 },
    { question: "What characterizes the structure of memory hierarchy?", options: ["Single layer", "Multi-layer", "Random structure", "Flat structure"], correctAnswer: 1 },
    { question: "What does 'DRAM’ require that SRAM does not?", options: ["Power", "Refresh cycles", "Longer circuits", "Higher costs"], correctAnswer: 1 },
    { question: "Which component allows data to move quickly between the CPU and RAM?", options: ["Address Bus", "Control Bus", "Data Bus", "Memory Bus"], correctAnswer: 2 },
    { question: "In which memory type is data stored in tiny capacitors?", options: ["SRAM", "Flash", "HDD", "DRAM"], correctAnswer: 3 },
    { question: "Which type of memory can be rewritten repeatedly and quickly?", options: ["PROM", "EPROM", "Flash", "ROM"], correctAnswer: 2 },
    { question: "Cache memory is fastest because it is usually located:", options: ["Off the motherboard", "In the CPU", "In RAM modules", "On the Hard Drive"], correctAnswer: 1 }

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
        return `${name}, জীৱনত যিমানেই অসফলতা লাভ কৰিবা এদিন তোমাৰ ভৱিষ্যত সিমানেই সফল হ’ব !`;
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
