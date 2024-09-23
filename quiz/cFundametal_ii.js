const questions = [
    {
        question: "Which of the following is a cloud computing model?",
        options: ["SaaS", "PaaS", "IaaS", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What is the primary purpose of a proxy server?",
        options: ["To filter requests", "To store data", "To speed up processing", "To enhance graphics"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a type of malware?",
        options: ["Virus", "Trojan", "Worm", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'HTML' stand for?",
        options: ["Hypertext Markup Language", "Hightext Markup Language", "Hyperlink and Text Markup Language", "Hypertext Multi Language"],
        correctAnswer: 0
    },
    {
        question: "What is the main function of a VPN?",
        options: ["To provide a secure connection over the internet", "To boost internet speed", "To store data", "To enhance graphics"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a non-relational database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correctAnswer: 0
    },
    {
        question: "What does the acronym 'GUI' stand for?",
        options: ["Graphical User Interface", "General User Interface", "Graphic Utility Interface", "General Utility Interface"],
        correctAnswer: 0
    },
    {
        question: "Which protocol is commonly used for secure data transmission?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of a web crawler?",
        options: ["To index web pages", "To enhance graphics", "To store data", "To manage traffic"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a key component of the Internet of Things (IoT)?",
        options: ["Sensors", "Protocols", "Cloud storage", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'SQL' stand for?",
        options: ["Structured Query Language", "Sequential Query Language", "Simple Query Language", "Standard Query Language"],
        correctAnswer: 0
    },
    {
        question: "What is a characteristic of a blockchain?",
        options: ["Decentralized", "Immutable", "Transparent", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is a common type of cybersecurity attack?",
        options: ["Phishing", "Ransomware", "Denial of Service", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What is the main function of an API?",
        options: ["To allow different software systems to communicate", "To enhance graphics", "To store data", "To boost internet speed"],
        correctAnswer: 0
    },
    {
        question: "What does the acronym 'SaaS' stand for?",
        options: ["Software as a Service", "System as a Service", "Software as a Solution", "System as a Solution"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is an example of a relational database?",
        options: ["PostgreSQL", "MongoDB", "Cassandra", "DynamoDB"],
        correctAnswer: 0
    },
    {
        question: "What is the primary purpose of a firewall?",
        options: ["To block unauthorized access", "To enhance graphics", "To store data", "To speed up processing"],
        correctAnswer: 0
    },
    {
        question: "What does the acronym 'ISP' stand for?",
        options: ["Internet Service Provider", "Integrated Service Provider", "Internal Service Provider", "Internet System Provider"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is used for version control?",
        options: ["Git", "GitHub", "Bitbucket", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of an SSL certificate?",
        options: ["To secure data transmitted over the internet", "To enhance graphics", "To speed up loading times", "To store data"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a type of machine learning?",
        options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'HTTP' stand for?",
        options: ["Hypertext Transfer Protocol", "Hyperlink Transfer Protocol", "Hypertext Transmission Protocol", "Hyperlink Transmission Protocol"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a key feature of responsive web design?",
        options: ["Fluid grids", "Flexible images", "Media queries", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'DLP' stand for in cybersecurity?",
        options: ["Data Loss Prevention", "Data Leakage Prevention", "Digital Loss Prevention", "Data Leakage Protocol"],
        correctAnswer: 0
    },
    {
        question: "What does the acronym 'VPN' stand for?",
        options: ["Virtual Private Network", "Virtual Public Network", "Variable Private Network", "Variable Public Network"],
        correctAnswer: 0
    },
    {
        question: "What is the main purpose of an algorithm?",
        options: ["To solve problems", "To store data", "To enhance performance", "To create applications"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a characteristic of a web application?",
        options: ["Runs in a web browser", "Requires internet access", "Can be accessed from any device", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'NFC' stand for?",
        options: ["Near Field Communication", "Network Field Communication", "Next Field Communication", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "What is the primary purpose of a content management system (CMS)?",
        options: ["To create and manage digital content", "To enhance security", "To store data", "To improve performance"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a benefit of using cloud computing?",
        options: ["Scalability", "Cost savings", "Accessibility", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'CSS' stand for?",
        options: ["Cascading Style Sheets", "Cascading Style System", "Computer Style Sheets", "Cascading Style Solutions"],
        correctAnswer: 0
    },
    {
        question: "What is the main function of a web host?",
        options: ["To store websites", "To enhance performance", "To manage databases", "To create applications"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is an example of a type of digital currency?",
        options: ["Bitcoin", "Ethereum", "Litecoin", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of an RSS feed?",
        options: ["To distribute web content", "To store data", "To enhance graphics", "To improve performance"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a type of phishing attack?",
        options: ["Spear phishing", "Whaling", "Vishing", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'DPI' stand for?",
        options: ["Dots Per Inch", "Data Per Inch", "Dots Per Index", "Data Per Index"],
        correctAnswer: 0
    },
    {
        question: "What is the primary purpose of an analytics tool?",
        options: ["To measure website performance", "To enhance graphics", "To store data", "To connect to the internet"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a characteristic of a mobile application?",
        options: ["Designed for mobile devices", "Requires internet access", "Can be downloaded from an app store", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'SEO' stand for?",
        options: ["Search Engine Optimization", "Social Engine Optimization", "Search Engine Operation", "Social Engine Operation"],
        correctAnswer: 0
    },
    {
        question: "What is the main function of a search engine optimization tool?",
        options: ["To improve website visibility", "To store data", "To create applications", "To enhance graphics"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is an example of a type of artificial intelligence?",
        options: ["Machine learning", "Natural language processing", "Computer vision", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'AR' stand for?",
        options: ["Augmented Reality", "Automatic Reality", "Advanced Reality", "Accessible Reality"],
        correctAnswer: 0
    },
    {
        question: "What is the primary purpose of a chatbot?",
        options: ["To interact with users", "To store data", "To enhance graphics", "To improve performance"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a common feature of a smartphone?",
        options: ["Touchscreen", "Camera", "Internet connectivity", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'ML' stand for?",
        options: ["Machine Learning", "Multimedia Learning", "Massive Learning", "Multi-layer Learning"],
        correctAnswer: 0
    },
    {
        question: "What is the main function of a digital wallet?",
        options: ["To store digital currency", "To enhance security", "To create applications", "To improve performance"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a common programming language for web development?",
        options: ["JavaScript", "HTML", "CSS", "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What does the acronym 'WIFI' stand for?",
        options: ["Wireless Fidelity", "Wide Fidelity", "Wireless Frequency", "Wide Frequency"],
        correctAnswer: 0
    },
    {
        question: "What is the primary purpose of a digital signature?",
        options: ["To verify the authenticity of a digital message", "To encrypt data", "To store data", "To enhance performance"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a common type of database query?",
        options: ["Select", "Insert", "Update", "All of the above"],
        correctAnswer: 3
    }

];




let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timeLeft = 1200; // 30 minutes in seconds
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