const questions = [
    { question: "What does the shortcut Ctrl+C do?", options: ["Copy", "Cut", "Paste", "Select All"], correctAnswer: 0 },
    { question: "What is the function of Ctrl+V?", options: ["Copy", "Paste", "Cut", "Undo"], correctAnswer: 1 },
    { question: "Which shortcut opens the Task Manager?", options: ["Ctrl+Alt+Delete", "Ctrl+Shift+Esc", "Alt+Tab", "Ctrl+Esc"], correctAnswer: 1 },
    { question: "What does Ctrl+X do?", options: ["Copy", "Cut", "Paste", "Delete"], correctAnswer: 1 },
    { question: "Which shortcut minimizes all windows?", options: ["Windows+D", "Alt+F4", "Ctrl+M", "Windows+M"], correctAnswer: 0 },
    { question: "What does the shortcut Alt+Tab do?", options: ["Switch to previous tab", "Open new tab", "Switch between open applications", "Close active window"], correctAnswer: 2 },
    { question: "To open the Run dialog, which shortcut is used?", options: ["Windows+R", "Ctrl+R", "Alt+R", "Shift+R"], correctAnswer: 0 },
    { question: "Which shortcut will display the desktop?", options: ["Windows+D", "Windows+M", "Alt+D", "Ctrl+D"], correctAnswer: 0 },
    { question: "What does Ctrl+Z do?", options: ["Redo", "Undo", "Save", "Open"], correctAnswer: 1 },
    { question: "Which shortcut is used to lock the computer?", options: ["Windows+L", "Ctrl+L", "Alt+L", "Shift+L"], correctAnswer: 0 },
    { question: "What does the shortcut Ctrl+A do?", options: ["Select All", "Deselect All", "Select None", "Copy All"], correctAnswer: 0 },
    { question: "Which shortcut opens File Explorer?", options: ["Windows+E", "Ctrl+E", "Alt+E", "Shift+E"], correctAnswer: 0 },
    { question: "What does Alt+F4 do?", options: ["Open File", "Close the active window", "Minimize all windows", "Open Task Manager"], correctAnswer: 1 },
    { question: "Which shortcut opens the settings window?", options: ["Windows+S", "Windows+I", "Ctrl+S", "Alt+S"], correctAnswer: 1 },
    { question: "What is the function of Ctrl+Y?", options: ["Redo", "Undo", "Save", "Close"], correctAnswer: 0 },
    { question: "To take a screenshot of the entire screen, you would use:", options: ["Print Screen", "Alt+Print Screen", "Ctrl+Print Screen", "Windows+Print Screen"], correctAnswer: 0 },
    { question: "What does Windows+M do?", options: ["Open Windows Media Player", "Minimize all windows", "Maximize all windows", "Open Mail"], correctAnswer: 1 },
    { question: "Which shortcut opens the Task View?", options: ["Windows+Tab", "Ctrl+Tab", "Alt+Tab", "Windows+T"], correctAnswer: 0 },
    { question: "Which shortcut is used to refresh the active window?", options: ["F5", "Ctrl+R", "Shift+F5", "Alt+R"], correctAnswer: 0 },
    { question: "What does Ctrl+F do?", options: ["Close", "Find", "Replace", "Undo"], correctAnswer: 1 },
    { question: "To open a new tab in most browsers, use:", options: ["Ctrl+T", "Alt+T", "Ctrl+N", "Ctrl+Shift+T"], correctAnswer: 0 },
    { question: "Which shortcut will open a new window?", options: ["Ctrl+N", "Windows+N", "Alt+N", "F2"], correctAnswer: 0 },
    { question: "What does Windows+X open?", options: ["Start Menu", "Quick Link Menu", "File Explorer", "Task Manager"], correctAnswer: 1 },
    { question: "To split a window into two side by side, you can use:", options: ["Win+Left/Right Arrow", "Alt+Arrow", "Ctrl+Arrow", "Tab+Arrow"], correctAnswer: 0 },
    { question: "What does Ctrl+P do?", options: ["Print", "Paste", "Open", "Save"], correctAnswer: 0 },
    { question: "Which shortcut opens the Help menu in most applications?", options: ["F1", "Ctrl+H", "Alt+H", "Shift+H"], correctAnswer: 0 },
    { question: "To zoom in on a webpage, you would use:", options: ["Ctrl+Plus", "Ctrl+Shift+Plus", "Windows+Plus", "Alt+Plus"], correctAnswer: 0 },
    { question: "What does Ctrl+Shift+N do in a file explorer?", options: ["Create a New Folder", "Open Settings", "Open Search", "Close Window"], correctAnswer: 0 },
    { question: "To switch between multiple desktops, you would use:", options: ["Windows+Ctrl+Left/Right Arrow", "Alt+Ctrl+Arrow", "Ctrl+Alt+Tab", "Windows+Tab"], correctAnswer: 0 },
    { question: "What does Windows+F do?", options: ["Open file properties", "Open feedback", "Open file explorer", "Open search"], correctAnswer: 1 },
    { question: "To start a search in the Start Menu, which shortcut is used?", options: ["Windows+S", "Alt+S", "Ctrl+S", "Shift+S"], correctAnswer: 0 },
    { question: "What does Ctrl+Shift+Esc do?", options: ["Open Task Manager", "Close Task Manager", "Switch applications", "Refresh"], correctAnswer: 0 },
    { question: "To open the notification center in Windows 10, you would use:", options: ["Windows+A", "Windows+N", "Windows+B", "Windows+C"], correctAnswer: 0 },
    { question: "Which shortcut closes the active tab in the browser?", options: ["Ctrl+W", "Alt+F4", "Ctrl+T", "Ctrl+Shift+T"], correctAnswer: 0 },
    { question: "What is the function of F2?", options: ["Rename selected item", "Open properties", "Refresh", "Cut"], correctAnswer: 0 },
    { question: "Which key combination help in selecting the address bar in browsers?", options: ["F6", "F5", "Ctrl+L", "Alt+D"], correctAnswer: 2 },
    { question: "To activate an application that is pinned to the taskbar, use:", options: ["Windows+Number key", "Ctrl+Number key", "Alt+Number key", "Shift+Number key"], correctAnswer: 0 },
    { question: "Which key combination will open the file properties?", options: ["Alt+Enter", "Ctrl+Enter", "Shift+Enter", "Windows+E"], correctAnswer: 0 },
    { question: "To save a document in an app, which shortcut is often used?", options: ["Ctrl+S", "Ctrl+D", "Ctrl+W", "Ctrl+P"], correctAnswer: 0 },
    { question: "What does the Alt+Space shortcut do?", options: ["Close application", "Open window menu", "Open file", "Refresh"], correctAnswer: 1 },
    { question: "To search for a file in File Explorer, you use:", options: ["Ctrl+F", "Alt+F", "Windows+F", "Shift+F"], correctAnswer: 0 },
    { question: "What does F11 do in most browsers?", options: ["Toggle full screen", "Open bookmarks", "Refresh page", "Zoom in"], correctAnswer: 0 },
    { question: "Which shortcut opens the Quick Access toolbar?", options: ["Alt+1", "F1", "Ctrl+1", "Shift+Q"], correctAnswer: 0 },
    { question: "What does Windows+Shift+S do?", options: ["Take a screenshot", "Open Snipping Tool", "Set focus on app", "Open settings"], correctAnswer: 0 },
    { question: "To paste copied content without formatting, which shortcut is used?", options: ["Ctrl+Shift+V", "Ctrl+Alt+V", "Ctrl+V", "Shift+V"], correctAnswer: 0 },
    { question: "What does Ctrl+Shift+P do in most browsers?", options: ["Open print dialog", "Open private browsing", "Open Preferences", "Open Plugins"], correctAnswer: 1 },
    { question: "What key combination is used to switch between open apps?", options: ["Alt+Tab", "Ctrl+Tab", "Windows+Tab", "Shift+Tab"], correctAnswer: 0 },
    { question: "Which key opens the browser's developer tools?", options: ["F12", "F5", "Ctrl+D", "Shift+F12"], correctAnswer: 0 },
    { question: "To remove the selected item without sending it to the Recycle Bin, you use:", options: ["Shift+Delete", "Alt+Delete", "Ctrl+Delete", "Windows+Delete"], correctAnswer: 0 },
    { question: "Which shortcut allows you to toggle between characters when typing?", options: ["Ctrl+Shift", "Alt+Shift", "Ctrl+Alt", "Shift"], correctAnswer: 1 },
    { question: "What is the function of Ctrl+Shift+Esc?", options: ["Open Task Manager", "Close window", "Reboot PC", "Lock screen"], correctAnswer: 0 },
    { question: "To open the browser's history, which shortcut is commonly used?", options: ["Ctrl+H", "Alt+H", "Shift+H", "Ctrl+S"], correctAnswer: 0 },
    { question: "What does the Windows+V shortcut do?", options: ["Open clipboard history", "Paste item", "Copy item", "Open file explorer"], correctAnswer: 0 },
    { question: "To open a new window in file explorer, you use:", options: ["Ctrl+N", "Ctrl+W", "Alt+N", "Windows+N"], correctAnswer: 0 },
    { question: "What does Windows+U open?", options: ["Settings", "Ease of Access Center", "File Explorer", "Applications"], correctAnswer: 1 },
    { question: "Which shortcut will start the Windows voice assistant?", options: ["Windows+C", "Windows+H", "Windows+A", "Ctrl+H"], correctAnswer: 1 },
    { question: "What does the F4 key do when using Alt?", options: ["Close active application", "Open application", "Switch applications", "Refresh"], correctAnswer: 0 },
    { question: "To quickly access the search bar in most apps, which shortcut is used?", options: ["Ctrl+F", "Alt+F", "Windows+F", "Shift+F"], correctAnswer: 0 },
    { question: "To toggle the display of the taskbar, you would use:", options: ["Windows+T", "Ctrl+T", "Alt+T", "Shift+T"], correctAnswer: 0 },
    { question: "What does Ctrl+Shift+N do in Windows Explorer?", options: ["Create a New Folder", "Open New Window", "Create New Document", "Minimize All Windows"], correctAnswer: 0 },
    { question: "To increase volume in Windows, which key combination is used?", options: ["Windows+Up Arrow", "Ctrl+Up Arrow", "Shift+Up Arrow", "Alt+Up Arrow"], correctAnswer: 0 },
    { question: "Which shortcut brings up the taskbar calendar?", options: ["Windows+T", "Windows+C", "Windows+E", "Ctrl+C"], correctAnswer: 0 },
    { question: "To open the settings for managing your notifications, which shortcut is traditionally used?", options: ["Windows+I", "Windows+N", "Windows+M", "Ctrl+I"], correctAnswer: 0 },
    { question: "What does the Windows+L shortcut do?", options: ["Lock the computer", "Open file explorer", "Open task view", "Dim the screen"], correctAnswer: 0 },
    { question: "Using which shortcut reconnects to the last network connection?", options: ["Windows+Shift+N", "Alt+Shift+N", "Windows+N", "Ctrl+N"], correctAnswer: 0 },  
    { question: "What is the function of Alt+F in most applications?", options: ["Open File menu", "Close application", "Refresh", "Open Help"], correctAnswer: 0 },
    { question: "Which key combination can be used to undo the last action?", options: ["Ctrl+Z", "Ctrl+Y", "Ctrl+U", "Shift+Z"], correctAnswer: 0 }


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