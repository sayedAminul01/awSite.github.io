const questions = [
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Processor Unifier", "Central Process Utility"],
            correctAnswer: 0
        },
        {
            question: "Which of the following is an input device?",
            options: ["Monitor", "Printer", "Keyboard", "Speaker"],
            correctAnswer: 2
        },
        {
            question: "Which part of the computer performs calculations and logical comparisons?",
            options: ["Hard Disk", "Monitor", "CPU", "RAM"],
            correctAnswer: 2
        },
        {
            question: "Which of the following is a non-volatile memory?",
            options: ["RAM", "ROM", "Cache Memory", "Registers"],
            correctAnswer: 1
        },
        {
            question: "Which device is used to display the output of a computer?",
            options: ["Printer", "Monitor", "Scanner", "Joystick"],
            correctAnswer: 1
        },
        {
            question: "What does RAM stand for?",
            options: ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Adjustable Memory"],
            correctAnswer: 0
        },
        {
            question: "Which part of the computer is responsible for executing instructions?",
            options: ["Hard Disk", "CPU", "RAM", "Monitor"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is an example of system software?",
            options: ["Microsoft Word", "Photoshop", "Windows Operating System", "Tally"],
            correctAnswer: 2
        },
        {
            question: "What is the function of an operating system?",
            options: ["Managing software", "Managing hardware", "Both a and b", "None of the above"],
            correctAnswer: 2
        },
        {
            question: "Which of the following is a primary storage device?",
            options: ["Hard Disk", "DVD", "RAM", "USB Drive"],
            correctAnswer: 2
        },
        {
            question: "Which of the following storage types is the fastest?",
            options: ["SSD", "HDD", "Floppy Disk", "CD-ROM"],
            correctAnswer: 0
        },
        {
            question: "What does BIOS stand for?",
            options: ["Basic Input/Output System", "Binary Input/Output System", "Basic Instruction Output System", "Binary Instruction Output System"],
            correctAnswer: 0
        },
        {
            question: "Which unit is responsible for controlling and coordinating the activities of a computer?",
            options: ["Control Unit", "Arithmetic Logic Unit", "Memory Unit", "Input Unit"],
            correctAnswer: 0
        },
        {
            question: "Which of the following is NOT a function of an operating system?",
            options: ["Memory Management", "File Management", "Virus Protection", "Process Management"],
            correctAnswer: 2
        },
        {
            question: "Which of the following is an example of an output device?",
            options: ["Mouse", "Monitor", "Scanner", "Keyboard"],
            correctAnswer: 1
        },
        {
            question: "What is the main function of a computer's ALU (Arithmetic Logic Unit)?",
            options: ["Performing arithmetic and logical operations", "Managing memory", "Controlling peripherals", "Storing data"],
            correctAnswer: 0
        },
        {
            question: "What is the full form of URL?",
            options: ["Uniform Resource Locator", "Unified Resource Locator", "Universal Resource Locator", "Unique Resource Locator"],
            correctAnswer: 0
        },
        {
            question: "Which of the following is used for permanent data storage?",
            options: ["RAM", "Cache Memory", "Hard Disk", "Registers"],
            correctAnswer: 2
        },
        {
            question: "What is the name of the software that allows hardware devices to communicate with the operating system?",
            options: ["Application Software", "Driver", "System Utility", "Firewall"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is a type of network?",
            options: ["LAN", "WAN", "MAN", "All of the above"],
            correctAnswer: 3
        },
        {
            question: "What does HTTP stand for?",
            options: ["Hyper Transfer Text Protocol", "Hyper Text Transfer Protocol", "Hyper Text Transport Protocol", "Hyper Textual Transfer Protocol"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is NOT an operating system?",
            options: ["Linux", "Windows", "MS Word", "macOS"],
            correctAnswer: 2
        },
        {
            question: "What does GUI stand for in computer terminology?",
            options: ["General User Interface", "Graphical User Interface", "Global User Interface", "Graphical Utility Interface"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is an example of volatile memory?",
            options: ["RAM", "ROM", "Hard Disk", "SSD"],
            correctAnswer: 0
        },
        {
            question: "What does SSD stand for?",
            options: ["Solid State Drive", "Super Storage Device", "Secure Storage Drive", "Solid Software Drive"],
            correctAnswer: 0
        },
        {
            question: "Which of the following is a unit of measurement for data storage?",
            options: ["Byte", "Hertz", "Bitrate", "Nanometer"],
            correctAnswer: 0
        },
        {
            question: "What is the main function of the motherboard in a computer?",
            options: ["Storing data", "Executing programs", "Connecting various components of the computer", "Displaying graphics"],
            correctAnswer: 2
        },
        {
            question: "Which protocol is used for email transmission?",
            options: ["FTP", "SMTP", "HTTP", "IP"],
            correctAnswer: 1
        },
        {
            question: "What is a computer virus?",
            options: ["A software that enhances computer speed", "A software program that infects a computer and disrupts its operation", "A type of hardware component", "None of the above"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is the main function of an antivirus software?",
            options: ["Memory management", "Defragmentation", "Virus detection and removal", "File compression"],
            correctAnswer: 2
        },
        {
            question: "What is the main function of a computer’s input device?",
            options: ["To process data", "To display data", "To send data to the computer", "To store data"],
            correctAnswer: 2
        },
        {
            question: "Which device is used to carry data from one computer to another?",
            options: ["Keyboard", "Flash Drive", "Mouse", "Monitor"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is an output device?",
            options: ["Monitor", "Keyboard", "Scanner", "Mouse"],
            correctAnswer: 0
        },
        {
            question: "What is the full form of RAM?",
            options: ["Read Access Memory", "Random Access Memory", "Read Action Memory", "Random Active Memory"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is a permanent storage device?",
            options: ["RAM", "ROM", "Hard Disk", "Cache"],
            correctAnswer: 2
        },
        {
            question: "Which part of the computer is used for long-term data storage?",
            options: ["RAM", "Hard Disk", "ROM", "Cache"],
            correctAnswer: 1
        },
        {
            question: "What is the main purpose of an operating system?",
            options: ["To manage software and hardware", "To connect to the internet", "To compile programs", "To run antivirus programs"],
            correctAnswer: 0
        },
        {
            question: "Which of the following is NOT an input device?",
            options: ["Printer", "Keyboard", "Mouse", "Scanner"],
            correctAnswer: 0
        },
        {
            question: "Which component is responsible for executing instructions in a computer?",
            options: ["Monitor", "CPU", "RAM", "Hard Disk"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is a volatile memory?",
            options: ["ROM", "RAM", "Hard Drive", "Flash Memory"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is an example of application software?",
            options: ["Windows", "Linux", "Microsoft Excel", "BIOS"],
            correctAnswer: 2
        },
        {
            question: "Which device is primarily used to convert digital signals to analog signals?",
            options: ["Monitor", "Modem", "RAM", "Hard Disk"],
            correctAnswer: 1
        },
        {
            question: "Which of the following defines an operating system?",
            options: ["It manages hardware resources", "It provides an environment for software to run", "It is a system software", "All of the above"],
            correctAnswer: 3
        },
        {
            question: "What does the abbreviation BIOS stand for?",
            options: ["Binary Input Output System", "Basic Input Output System", "Basic Integrated Output System", "Binary Integrated Operating System"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is a common programming language?",
            options: ["HTML", "Photoshop", "Windows", "Java"],
            correctAnswer: 3
        },
        {
            question: "What is the purpose of the 'Save As' command?",
            options: ["To delete a file", "To save a file with a new name or location", "To print a file", "To close a file"],
            correctAnswer: 1
        },
        {
            question: "Which of the following refers to the physical components of a computer?",
            options: ["Software", "Hardware", "Firmware", "Malware"],
            correctAnswer: 1
        },
        {
            question: "Which of the following is NOT a type of software?",
            options: ["Application Software", "System Software", "Network Software", "Human Software"],
            correctAnswer: 3
        },
        {
            question: "Which of the following is a characteristic of a mainframe computer?",
            options: ["Portable", "Small size", "High processing power", "Low cost"],
            correctAnswer: 2
        },
        {
            question: "What is the role of the CPU in a computer?",
            options: ["To store data", "To process data", "To display data", "To connect to the internet"],
            correctAnswer: 1
        },

];


 

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timeLeft = 1800; // 30 minutes in seconds
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
            return `${name}, your tech brilliance at the Alien Institute of Computer is just the beginning. Keep innovating, and the stars will follow!`;
        case 'B':
            return `${name}, your passion for CS is shining bright. The Alien Institute believes you’ll be coding galaxies soon!`;
        case 'C':
            return `${name}, great minds like yours unlock the future. Keep learning and the Alien Institute will watch you conquer tech universes!`;
        case 'D':
            return `${name}, you've taken the first steps in understanding CS at the Alien Institute of Computer. Remember, even alien software has bugs sometimes. Keep debugging your knowledge, and you'll unlock new programming dimensions!`;
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
