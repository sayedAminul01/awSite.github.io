const questions = [
    { question: "What does the abbreviation 'URL' stand for?", options: ["Universal Reference Locator", "Uniform Resource Locator", "Universal Resource Locator", "Uniform Reference Locator"], correctAnswer: 2 },
    { question: "What is the primary purpose of a web browser?", options: ["To store data", "To send emails", "To play videos", "To display web pages"], correctAnswer: 3 },
    { question: "Which web browser is developed by Google?", options: ["Firefox", "Chrome", "Safari", "Opera"], correctAnswer: 1 },
    { question: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transaction Protocol", "HyperText Transmission Protocol"], correctAnswer: 0 },
    { question: "Which of the following is a web browser?", options: ["Excel", "Mozilla Firefox", "Adobe Photoshop", "Microsoft Word"], correctAnswer: 1 },
    { question: "What is a bookmark in a web browser?", options: ["An online game", "A website saved for easy access", "A file type", "A shortcut key"], correctAnswer: 1 },
    { question: "What does 'HTTPS' provide that 'HTTP' does not?", options: ["Secure encryption", "Faster access", "Greater compatibility", "More features"], correctAnswer: 0 },
    { question: "Which web browser was originally created as part of the Netscape project?", options: ["Firefox", "Opera", "Internet Explorer", "Chrome"], correctAnswer: 0 },
    { question: "What is the function of an address bar in a web browser?", options: ["To show bookmarks", "To search for texts", "To display history", "To type website URLs"], correctAnswer: 3 },
    { question: "What is a 'cache' in web browsing?", options: ["None of the above", "A collection of bookmarks", "A storage for frequently accessed web pages", "A type of email storage"], correctAnswer: 2 },
    { question: "What does the shortcut Ctrl+T do in most web browsers?", options: ["Save the page", "Refresh the page", "Close tab", "Open new tab"], correctAnswer: 3 },
    { question: "What is 'Incognito Mode' in browsers?", options: ["A mode to speed up loading times", "A special mode for subscribers", "A way to browse the Internet privately", "A gaming mode"], correctAnswer: 2 },
    { question: "Which element is necessary in a URL?", options: ["A file path", "An IP address", "A port number", "A domain name"], correctAnswer: 3 },
    { question: "What is a web extension?", options: ["A software that adds functionality to a web browser", "Software for creating web pages", "An offline browser", "A tool for improving internet speed"], correctAnswer: 0 },
    { question: "What type of software is a web browser?", options: ["Firmware", "Utility software", "Operating system", "Application software"], correctAnswer: 3 },
    { question: "What is the function of the 'Back' button in a web browser?", options: ["To open a new tab", "To go to the previous web page", "To reload the current page", "To close the browser"], correctAnswer: 1 },
    { question: "Which browser uses the Gecko rendering engine?", options: ["Edge", "Chrome", "Safari", "Firefox"], correctAnswer: 3 },
    { question: "Which of the following can be used to clear a web browser's cache?", options: ["Control panel", "Browser settings", "Task manager", "Device manager"], correctAnswer: 1 },
    { question: "What is the default homepage for most browsers?", options: ["DuckDuckGo", "Yahoo", "Bing", "Google"], correctAnswer: 3 },
    { question: "Which browser is known for its privacy features?", options: ["Chrome", "Safari", "Firefox", "Edge"], correctAnswer: 2 },
    { question: "What does the term 'phishing' refer to in web browsing?", options: ["Attempting to steal sensitive information", "Downloading large files", "Watching videos online", "The act of fishing online"], correctAnswer: 0 },
    { question: "What is a 'web crawler'?", options: ["A type of ad blocker", "Software that indexes web content", "A compression tool", "A virus that infects browsers"], correctAnswer: 1 },
    { question: "What is 'Bookmarklet'?", options: ["A type of bookmark", "None of the above", "A small JavaScript program", "A web browser feature"], correctAnswer: 2 },
    { question: "Which browser is known for its integrated ad blocker?", options: ["Opera", "Chrome", "Firefox", "Edge"], correctAnswer: 0 },
    { question: "Which feature allows multiple web pages to be open in a single browser window?", options: ["Bookmarking", "Private browsing", "Tabbed browsing", "Web caching"], correctAnswer: 2 },
    { question: "What is the purpose of the 'Save As' feature in web browsers?", options: ["To save the current page", "To print the page", "To bookmark the page", "To view the source code"], correctAnswer: 0 },
    { question: "What does the ‘Favicon’ represent?", options: ["A page icon", "A brand icon", "A tab icon", "A file icon"], correctAnswer: 2 },
    { question: "Which browser is installed on Apple devices by default?", options: ["Safari", "Firefox", "Internet Explorer", "Chrome"], correctAnswer: 0 },
    { question: "What does 'DNS' stand for?", options: ["Digital Network Service", "Domain Network System", "Domain Name System", "Dynamic Name Server"], correctAnswer: 2 },
    { question: "Which feature of a browser allows viewing past visited web pages?", options: ["Cookies", "History", "Bookmarks", "Cache"], correctAnswer: 1 },
    { question: "What is the purpose of the 'Refresh' button in a web browser?", options: ["To clear the cache", "To bookmark the page", "To change the homepage", "To reload the current web page"], correctAnswer: 3 },
    { question: "Which protocol is used for secure connections?", options: ["HTTPS", "POP", "FTP", "HTTP"], correctAnswer: 0 },
    { question: "What is 'Cross-Site Scripting' (XSS)?", options: ["A type of browser extension", "A web page format", "A web security vulnerability", "An online database"], correctAnswer: 2 },
    { question: "What is the 'Inspect Element' feature used for?", options: ["To view the browser settings", "To inspect web page elements", "To clear history", "To change your internet speed"], correctAnswer: 1 },
    { question: "Which of the following is not a popular web browser?", options: ["Internet Explorer", "Mozilla Firefox", "Google Chrome", "Notepad"], correctAnswer: 3 },
    { question: "Which of the following browsers is open-source?", options: ["Edge", "Firefox", "Chrome", "Safari"], correctAnswer: 1 },
    { question: "What is 'WebRTC' used for?", options: ["Web pushing", "Browsing anonymously", "Audio and video communication", "Downloading files"], correctAnswer: 2 },
    { question: "What does 'Ad Blocker' do?", options: ["Enhances internet speed", "Blocks spam emails", "Cleans browser cache", "Prevents ads from being displayed"], correctAnswer: 3 },
    { question: "In web design, what does CSS stand for?", options: ["Central Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"], correctAnswer: 3 },
    { question: "Which browser feature helps to save web pages for offline access?", options: ["Session restoration", "Offline storage", "Bookmarks", "Favorites"], correctAnswer: 1 },
    { question: "What is the function of a 'Download Manager' in browsers?", options: ["To download videos only", "To manage multiple downloads", "To clear downloads", "To boost download speed"], correctAnswer: 1 },
    { question: "Which format is commonly used to display images on the web?", options: ["JPEG", "PDF", "CSV", "DOCX"], correctAnswer: 0 },
    { question: "What is a 'Proxy Server'?", options: ["A server that acts as an intermediary", "A caching server", "A detailed log server", "A private server for downloads"], correctAnswer: 1 },
    { question: "Which browser introduced 'Browsing Profiles'?", options: ["Chrome", "Safari", "Firefox", "Edge"], correctAnswer: 2 },
    { question: "Which browser feature allows users to view a web page as it was in the past?", options: ["History", "Wayback Machine", "Cache", "Archive"], correctAnswer: 1 },
    { question: "Which technology enables real-time communication in the browser without plugins?", options: ["WebRTC", "WebSockets", "HTML5", "JavaScript"], correctAnswer: 0 },
    { question: "What can the 'Zoom' feature in browsers do?", options: ["Enlarge or reduce webpage size", "Change font size only", "Enhance video quality", "Change color of the page"], correctAnswer: 0 },
    { 
        question: "What is the purpose of cookies in web browsers?", 
        options: ["To store website preferences", "To increase page load speed", "To store downloaded files", "To track internet speed"],correctAnswer: 0},
        { 
            question: "What is the primary purpose of the 'Alt' attribute in an <img> tag?", 
            options: ["To specify the image source", "To define the image size", "To provide alternative text for the image", "To set the image alignment"], 
            correctAnswer: 2 
        },
        { 
            question: "What does the 'border-box' value do in CSS box-sizing?", 
            options: ["Includes padding and border in the element's total width and height", "Excludes padding and border in the element's total width and height", "Only adds padding to the element's width", "Changes the box's border style"], 
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