// Questions array from the original file
const questions = [
    {
        question: "What is a computer?",
        options: ["A device for cooking", "A device for processing data/A computer is an electronic device", "A musical instrument", "A type of vehicle"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an example of secondary memory?",
        options: ["RAM", "ROM", "Hard Disk", "Cache Memory"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is an example of primary memory?",
        options: ["Hard Disk", "RAM", "CD-ROM", "USB Drive"],
        correctAnswer: 1
    },
    {
        question: "What happens to the data stored in RAM when the computer is turned off?",
        options: ["It is saved permanently", "It gets erased", "It is transferred to ROM", "It becomes read-only"],
        correctAnswer: 1
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a type of computer?",
        options: ["Desktop", "Laptop", "Refrigerator", "Smartphone"],
        correctAnswer: 2
    },
    {
        question: "Which type of secondary storage has no moving parts and offers faster data access?",
        options: ["Hard Disk Drive (HDD)", "Solid State Drive (SSD)", "Floppy Disk", "Optical Disc"],
        correctAnswer: 1
    },
    {
        question: "How many bits are there in 1 byte?",
        options: ["4", "8", "16", "32"],
        correctAnswer: 1
    },
    {
        question: "Which device allows users to interact with a computer by pointing and clicking?",
        options: ["Printer", "Mouse", "Speaker", "Scanner"],
        correctAnswer: 1
    },
    {
        question: "What is the primary advantage of using a Solid State Drive (SSD) over a Hard Disk Drive (HDD)?",
        options: ["Lower cost", "Faster read/write speed", "More storage capacity", "More moving parts"],
        correctAnswer: 1
    },
    {
        question: "What is the main function of RAM in a computer?",
        options: ["To store permanent data", "To process graphics", "To temporarily store data for quick access", "To connect to the internet"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is a characteristic of ROM?",
        options: ["It is volatile", "It is used for temporary storage", "It stores firmware and system instructions", "It is faster than RAM"],
        correctAnswer: 2
    },
    {
        question: "Which secondary storage device is commonly used for portable data transfer?",
        options: ["RAM", "USB Drive", "Cache Memory", "Processor"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a primary function of a computer?",
        options: ["Cooking food", "Playing music only",  "Generating electricity","Processing and storing data"],
        correctAnswer: 3
    },
    {
        question: "Which type of memory is non-volatile?",
        options: ["RAM", "Cache Memory", "ROM", "Registers"],
        correctAnswer: 2
    },
    {
        question: "Which part of the computer is known as the 'brain'?",
        options: ["Monitor", "Keyboard", "Mouse","CPU"],
        correctAnswer: 3
    },
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Central Program Unit", "Computer Personal Unit", "Central Processor Utility"],
        correctAnswer: 0
    },
    {
        question: "If a file size is 5GB, how many MB is that?",
        options: ["5120 MB", "2048 MB", "10240 MB", "500 MB"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is an example of an input device?",
        options: ["Printer", "Monitor", "Speaker", "Keyboard"],
        correctAnswer: 3
    },
    {
        question: "Which of the following statements about secondary memory is TRUE?",
        options: ["It is volatile and loses data when power is off", "It is faster than primary memory", "It is used for long-term data storage", "It is smaller in capacity than RAM"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is the correct conversion?",
        options: ["1 KB = 100 bytes", "1 GB = 500 MB", "1 TB = 1024 MB", "1 MB = 1024 KB"],
        correctAnswer: 3
    },
    {
        question: "Which input device is commonly used for gaming?",
        options: ["Joystick", "Monitor", "Speaker", "Printer"],
        correctAnswer: 0
    },
    {
        question: "What is the function of a computer monitor?",
        options: ["Store data", "Process information", "Display visual output", "Capture images"],
        correctAnswer: 2
    },
    {
        question: "Which of the following correctly represents the data size from smallest to largest?",
        options: ["KB < MB < GB < TB", "MB < KB < GB < TB", "GB < KB < MB < TB", "TB < GB < MB < KB"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a basic component of a computer system?",
        options: ["Monitor", "Mouse", "Television", "Keyboard"],
        correctAnswer: 2
    },
    {
        question: "How many bits are there in 1 Kilobyte (KB)?",
        options: ["1024", "8192", "2048", "4096"],
        correctAnswer: 1
    },
    {
        question: "Which device is used to store data permanently?",
        options: ["RAM", "Hard Drive", "Processor", "Monitor"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an output device?",
        options: ["Mouse", "Keyboard", "Monitor", "Scanner"],
        correctAnswer: 2
    },
    {
        question: "How many Megabytes (MB) are there in 1 Gigabyte (GB)?",
        options: ["100 MB", "500 MB", "1024 MB", "2048 MB"],
        correctAnswer: 2
    },
    {
        question: "What is the primary function of a printer?",
        options: ["Input text", "Output printed documents", "Store data", "Process images"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is the largest unit of storage?",
        options: ["Megabyte (MB)", "Kilobyte (KB)", "Gigabyte (GB)", "Terabyte (TB)"],
        correctAnswer: 3
    },
    {
        question: "Which device provides audio output from a computer?",
        options: ["Scanner", "Speakers", "Mouse", "Keyboard"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an example of an operating system?",
        options: ["Windows", "Google", "Facebook", "Chrome"],
        correctAnswer: 0
    },
    {
        question: "Which type of computer is small, portable, and can be used anywhere?",
        options: ["Desktop", "Mainframe", "Laptop", "Supercomputer"],
        correctAnswer: 2
    },
    {
        question: "Which input device is primarily used to scan documents into digital format?",
        options: ["Microphone", "Scanner", "Mouse", "Printer"],
        correctAnswer: 1
    },
    {
        question: "Which device is used to capture sound and convert it into digital signals?",
        options: ["Speaker", "Microphone", "Monitor", "Projector"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an example of an output device?",
        options: ["Mouse", "Keyboard", "Monitor", "Scanner"],
        correctAnswer: 2
    },
    {
        question: "Which part of the computer allows you to move the cursor on the screen?",
        options: ["Keyboard", "Mouse", "Printer", "Monitor"],
        correctAnswer: 1
    },
    {
        question: "How many bytes are there in 1 KB (Kilobyte)?",
        options: ["1000", "1024", "2048", "512"],
        correctAnswer: 1
    },
    {
        question: "1 Megabyte (MB) is equal to how many Kilobytes (KB)?",
        options: ["100 KB", "512 KB", "1024 KB", "2048 KB"],
        correctAnswer: 2
    },
    {
        question: "Which of the following devices is used to print documents?",
        options: ["Monitor", "Printer", "Keyboard", "Mouse"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an input device?",
        options: ["Monitor", "Printer", "Mouse", "Speaker"],
        correctAnswer: 2
    },
    {
        question: "What type of device is a keyboard?",
        options: ["Input Device", "Output Device", "Storage Device", "Processing Device"],
        correctAnswer: 0
    },
    {
        question: "What is the full form of RAM?",
        options: ["Read Access Memory", "Random Access Memory", "Read-Only Memory", "Remote Access Memory"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT an example of a storage device?",
        options: ["USB Drive", "CD/DVD", "RAM", "Monitor"],
        correctAnswer: 3
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Microsoft", "Google", "Intel"],
        correctAnswer: 1
    },
    {
        question: "What does KB stand for in computer storage?",
        options: ["KiloByte", "KiloBit", "KiloBinary", "KiloBand"],
        correctAnswer: 0
    },
    {
        question: "What is the function of an antivirus program?",
        options: ["Increase processing speed", "Protect against viruses", "Improve internet speed", "Manage files"],
        correctAnswer: 1
    },
    {
        question: "Which component of a computer is responsible for executing instructions?",
        options: ["Hard drive", "RAM", "CPU", "Keyboard"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is an example of a web browser?",
        options: ["Windows", "Chrome", "Microsoft Word", "Photoshop"],
        correctAnswer: 1
    }
];

// Motivational quotes for different grade levels
const motivationalQuotes = {
    A: [
        "Excellence is not a skill. It's an attitude. Your stellar performance proves that!",
        "The height of your accomplishments will equal the depth of your convictions. Congratulations on your achievement!",
        "Your dedication to mastering computer science fundamentals is truly inspiring. The future of tech looks bright with minds like yours.",
        "Great minds discuss ideas, and your understanding of complex concepts shows you have a great mind indeed.",
        "Success isn't just about what you accomplish, but what you inspire others to do. Your excellence sets a high bar."
    ],
    B: [
        "The expert in anything was once a beginner. Your solid performance shows you're well on your way to expertise.",
        "Progress is impossible without change. Your willingness to learn and grow is evident in your results.",
        "Success is the sum of small efforts repeated day in and day out. Keep up the great work!",
        "Knowledge is power, and you're becoming more powerful every day. Great job on your test!",
        "The difference between ordinary and extraordinary is that little 'extra.' Keep pushing yourself forward."
    ],
    C: [
        "Every master was once a disaster. Your journey in computer science is just beginning.",
        "The only place where success comes before work is in the dictionary. Keep putting in the effort!",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. Keep rising!",
        "Continuous improvement is better than delayed perfection. You're on the right track.",
        "Don't watch the clock; do what it does. Keep going. Your perseverance will pay off."
    ],
    D: [
        "The beautiful thing about learning is that no one can take it away from you. Every step counts.",
        "It's not about perfect. It's about effort. When you bring that effort every day, that's where transformation happens.",
        "Sometimes the bravest and most important thing you can do is just show up. You showed up, and that matters.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "The only true mistake is the one from which we learn nothing. Use this as a stepping stone."
    ]
};

// Variables
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timeLeft = 2400; // 40 minutes in seconds
let timerInterval;
let userName = "";

// DOM Elements
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
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const submitResultBtn = document.getElementById('submit-result');

// Event Listeners
document.getElementById('start-button').addEventListener('click', startQuiz);
document.getElementById('restart-button').addEventListener('click', restartQuiz);
themeToggleBtn.addEventListener('click', toggleTheme);
submitResultBtn.addEventListener('click', submitResultToWhatsApp);

// Check for saved theme preference or set default
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.className = savedTheme;
}

// Toggle between light and dark themes
function toggleTheme() {
    const currentTheme = document.documentElement.className;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
    
    // Add animation effect
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 500);
}

// Start the quiz
function startQuiz() {
    userName = userNameInput.value.trim();
    if (userName === "") {
        // Animated shake effect for invalid input
        userNameInput.classList.add('shake-animation');
        setTimeout(() => {
            userNameInput.classList.remove('shake-animation');
        }, 500);
        
        // Show error message
        const errorMsg = document.createElement('p');
        errorMsg.textContent = "Please enter your name to continue";
        errorMsg.className = "error-message";
        
        // Remove any existing error message
        const existingError = document.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        userNameInput.parentNode.appendChild(errorMsg);
        return;
    }
    
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    userNameDisplay.textContent = userName;
    displayQuestion();
    startTimer();
}

// Display the current question
function displayQuestion() {
    const question = questions[currentQuestion];
    
    let html = `
        <div class="question-container">
            <h2 class="question-text">${currentQuestion + 1}. ${question.question}</h2>
            <div class="options">
    `;

    question.options.forEach((option, index) => {
        html += `
            <div class="option" data-index="${index}">
                ${option}
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    quizContainer.innerHTML = html;

    // Add event listeners to options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', handleAnswer);
    });

    // Update progress
    currentQuestionElement.textContent = currentQuestion + 1;
    progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
}

// Handle user's answer selection
function handleAnswer(e) {
    const selectedOption = e.target;
    const options = document.querySelectorAll('.option');
    
    // Disable all options to prevent multiple selections
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    const selectedAnswer = parseInt(selectedOption.dataset.index);
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
        selectedOption.classList.add('correct');
        
        // Add success sound effect
        playSound('correct');
    } else {
        incorrectAnswers++;
        selectedOption.classList.add('incorrect');
        options[correctAnswer].classList.add('correct');
        
        // Add error sound effect
        playSound('incorrect');
    }

    // Proceed to next question after delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

// Play sound effects
function playSound(type) {
    // This is a placeholder. You could implement actual sound effects
    // by creating audio elements and playing them
    console.log(`Playing ${type} sound`);
}

// Calculate the grade based on percentage
function calculateGrade(percentage) {
    if (percentage >= 80) return 'A';
    if (percentage >= 60) return 'B';
    if (percentage >= 40) return 'C';
    return 'D';
}

// Calculate percentage score with positive and negative marking
function calculatePercentage() {
    const totalQuestions = questions.length;
    const positiveMarks = correctAnswers * 4; // 4 marks for each correct answer
    const negativeMarks = incorrectAnswers * 1; // 1 negative mark for each incorrect answer
    const totalMarks = positiveMarks - negativeMarks;
    const maxMarks = totalQuestions * 4;
    const percentage = (totalMarks / maxMarks) * 100;
    
    // Ensure percentage is not negative
    return Math.max(0, percentage);
}

// Set motivational message based on percentage
function getMotivationalQuoteByPercentage(percentage) {
    let quotes;
    if (percentage >= 80) {
        quotes = motivationalQuotes.A; // Use quotes for grade A
    } else if (percentage >= 60) {
        quotes = motivationalQuotes.B; // Use quotes for grade B
    } else if (percentage >= 40) {
        quotes = motivationalQuotes.C; // Use quotes for grade C
    } else {
        quotes = motivationalQuotes.D; // Use quotes for grade D
    }

    // Select a random quote from the appropriate category
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Show the results screen
function showResults() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    resultName.textContent = userName;
    
    // Calculate results
    const percentage = calculatePercentage();
    
    // Set hidden result values (to be sent to WhatsApp)
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('incorrect-answers').textContent = incorrectAnswers;
    document.getElementById('percentage').textContent = percentage.toFixed(2);

    // Set motivational message based on percentage
    const quote = getMotivationalQuoteByPercentage(percentage);
    motivationMessage.textContent = quote;
}
// Submit results to WhatsApp
function submitResultToWhatsApp() {
    const phoneNumber = "9365489154";
    const name = userName;
    const correctAns = correctAnswers;
    const incorrectAns = incorrectAnswers;
    const percentage = document.getElementById('percentage').textContent;
    
    const message = `*Alien Institute ADCA Test Results*%0A
Name: ${name}%0A
Correct Answers: ${correctAns}%0A
Incorrect Answers: ${incorrectAns}%0A
Percentage: ${percentage}%25`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
}

// Reset and restart the quiz
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

// Start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        // Add visual indicators when time is running low
        if (timeLeft <= 300) { // Last 5 minutes
            timerElement.style.color = '#f59e0b';
        }
        
        if (timeLeft <= 60) { // Last minute
            timerElement.style.color = '#ef4444';
            timerElement.classList.add('pulse-fast');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

// Update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}