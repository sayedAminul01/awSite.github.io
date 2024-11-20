const questions = [
    // Group 1 (1-4)
    { question: "Which command lists all files in the current directory?", options: ["ls", "cd", "pwd", "cp"], correctAnswer: 0 },
    { question: "What does the 'rm' command do?", options: ["Move files", "Rename files", "List files", "Remove files"], correctAnswer: 3 },
    { question: "What is the purpose of the 'cd' command in Linux?", options: ["Copy files", "Change directories", "Delete files", "List files"], correctAnswer: 1 },
    { question: "Which command displays the current working directory?", options: ["ls", "cd", "pwd", "rm"], correctAnswer: 2 },
    { question: "How do you display the contents of a text file?", options: ["mv", "cat", "ls", "cp"], correctAnswer: 1 },

    // Group 2 (5-8)
    { question: "What does the command 'chmod' change?", options: ["File content", "File name", "File type", "File permissions"], correctAnswer: 3 },
    { question: "Which command is used to copy files?", options: ["mv", "ls", "cp", "rm"], correctAnswer: 2 },
    { question: "What does the 'mkdir' command do?", options: ["Makes a directory", "Moves files", "Deletes files", "Lists files"], correctAnswer: 0 },

    // Group 3 (9-12)
    { question: "What does the command 'df' display?", options: ["File contents", "Process list", "Disk usage", "Memory usage"], correctAnswer: 2 },
    { question: "What does the 'ps' command do?", options: ["Lists processes", "Changes permissions", "Shows directories", "Pings servers"], correctAnswer: 0 },
    { question: "Which command compares two files?", options: ["cmp", "diff", "comm", "fc"], correctAnswer: 0 },
    { question: "Which command renames a file?", options: ["cp", "mv", "ls", "rm"], correctAnswer: 1 },

    // Group 4 (13-16)
    { question: "How do you check free memory in Linux?", options: ["mem", "top", "ps", "free"], correctAnswer: 3 },
    { question: "What does the 'touch' command do?", options: ["Removes files", "Copies files", "Lists files", "Creates files"], correctAnswer: 3 },
    { question: "What does the command 'kill' do?", options: ["Lists files", "Terminates processes", "Shows memory", "Copies files"], correctAnswer: 1 },
    { question: "Which symbol redirects output to a file?", options: ["<", "|", ">", "&"], correctAnswer: 2 },

    // Group 5 (17-20)
    { question: "What does 'grep' command do?", options: ["Lists files", "Searches patterns", "Shows processes", "Copies files"], correctAnswer: 1 },
    { question: "Which file contains user account information?", options: ["/etc/shadow", "/etc/group", "/etc/passwd", "/etc/users"], correctAnswer: 2 },
    { question: "What does 'sudo' allow a user to do?", options: ["List files", "Run as root", "Copy files", "Show processes"], correctAnswer: 1 },
    { question: "Which command changes file ownership?", options: ["chown", "chmod", "chgrp", "chattr"], correctAnswer: 0 },

    // Group 6 (21-24)
    { question: "What is the root user's home directory?", options: ["/home/root", "/usr/root", "/etc/root", "/root"], correctAnswer: 3 },
    { question: "Which command displays network configuration?", options: ["ifconfig", "netstat", "route", "ip"], correctAnswer: 0 },
    { question: "How do you search for a file in Linux?", options: ["search", "locate", "grep", "find"], correctAnswer: 3 },
    { question: "Which command lists open files?", options: ["openfiles", "files", "lsof", "psf"], correctAnswer: 2 },

    // Group 7 (25-28)
    { question: "What command shows disk usage by directory?", options: ["disk", "space", "df", "du"], correctAnswer: 3 },
    { question: "What is the purpose of /etc directory?", options: ["User files", "Configuration files", "System binaries", "Temporary files"], correctAnswer: 1 },
    { question: "What does 'uname -r' display?", options: ["User info", "System info", "Host info", "Kernel version"], correctAnswer: 3 },
    { question: "What does 'tar' command do?", options: ["Archives files", "Lists files", "Copies files", "Moves files"], correctAnswer: 0 },

    // Group 8 (29-32)
    { question: "Which command creates a symbolic link?", options: ["symlink", "link", "ln -s", "newlink"], correctAnswer: 2 },
    { question: "What is 'nano' in Linux?", options: ["Text editor", "File manager", "Process viewer", "Network tool"], correctAnswer: 0 },
    { question: "What does 'hostname' show?", options: ["IP address", "Domain name", "System name", "User name"], correctAnswer: 2 },
    { question: "Which command views system logs?", options: ["viewlog", "dmesg", "logview", "syslog"], correctAnswer: 1 },

    // Group 9 (33-36)
    { question: "Which command checks filesystem?", options: ["syscheck", "diskcheck", "fsck", "chkdsk"], correctAnswer: 2 },
    { question: "What does 'echo' command do?", options: ["Read text", "Display text", "Copy text", "Move text"], correctAnswer: 1 },
    { question: "What does 'ping' command test?", options: ["Network connectivity", "Disk speed", "Memory usage", "CPU load"], correctAnswer: 0 },
    { question: "Which command starts system services?", options: ["systemctl start", "service up", "init start", "daemon up"], correctAnswer: 0 },
    { question: "How do you become superuser?", options: ["admin", "root", "super", "su"], correctAnswer: 3 },

    // Group 10 (37-40)
    { question: "Which command shows current user?", options: ["whoami", "user", "who", "me"], correctAnswer: 0 },
    { question: "Which command displays network connections?", options: ["netinfo", "ipconfig", "ifconfig", "netstat"], correctAnswer: 3 },
    { question: "What is swap space used for?", options: ["File storage", "Temp files", "Virtual memory", "Log files"], correctAnswer: 2 },

    // Group 11 (41-44)
    { question: "Which command shows process memory usage?", options: ["free", "top", "ps", "mem"], correctAnswer: 1 },
    { question: "What clears the terminal screen?", options: ["cls", "clear", "clean", "clscreen"], correctAnswer: 1 },
    { question: "Which command shows file end?", options: ["end", "last", "tail", "EOF"], correctAnswer: 2 },
    { question: "What does 'man' command provide?", options: ["Management", "Maintenance", "Manifesto", "Manual"], correctAnswer: 3 },

    // Group 12 (45-48)
    { question: "What does 'passwd' command do?", options: ["Show password", "Change password", "Remove password", "List passwords"], correctAnswer: 1 },
    { question: "What compresses files in Linux?", options: ["compress", "zip", "archive", "gzip"], correctAnswer: 3 },
    { question: "Which key combination ends process?", options: ["Ctrl+X", "Ctrl+D", "Ctrl+C", "Ctrl+Z"], correctAnswer: 2 },
    { question: "Which command shows directory structure?", options: ["tree", "dir", "ls", "show"], correctAnswer: 0 },

    // Group 13 (49-52)
    { question: "Which command shows calendar?", options: ["cal", "date", "time", "day"], correctAnswer: 0 },
    { question: "What does 'locate' command do?", options: ["List files", "Find files", "Show files", "Copy files"], correctAnswer: 1 },
    { question: "What does 'which' command show?", options: ["File type", "File size", "File owner", "File location"], correctAnswer: 3 },

    { question: "Which directory holds system logs?", options: ["/usr/log", "/etc/log", "/var/log", "/log"], correctAnswer: 2 },
    // Group 14 (53-56)
    { question: "What does 'diff' command do?", options: ["Copy files", "Compare files", "Move files", "Delete files"], correctAnswer: 1 },
    { question: "Which command counts words?", options: ["count", "num", "wc", "words"], correctAnswer: 2 },
    { question: "What does 'less' command do?", options: ["Delete text", "Copy text", "Move text", "View text"], correctAnswer: 3 },
    { question: "Which command shows disk partitions?", options: ["fdisk -l", "part", "disk", "show"], correctAnswer: 0 },

    // Group 15 (57-60)
    { question: "Which command shows USB devices?", options: ["lsusb", "usb", "devices", "show"], correctAnswer: 0 },
    { question: "What does 'adduser' do?", options: ["Delete user", "Create user", "Modify user", "Show user"], correctAnswer: 1 },
    { question: "Which command creates archives?", options: ["zip", "compress", "tar", "archive"], correctAnswer: 2 },
    { question: "What does 'uniq' command show?", options: ["All lines", "Sort lines", "Count lines", "Unique lines"], correctAnswer: 3 },
    { question: "What does 'head' command show?", options: ["Last lines", "First lines", "Middle lines", "All lines"], correctAnswer: 1 },

    // Group 16 (61-64)
    { question: "Which command shows CPU info?", options: ["lscpu", "cpu", "proc", "system"], correctAnswer: 0 },
    { question: "Which command schedules tasks?", options: ["schedule", "task", "cron", "time"], correctAnswer: 2 },

    // Group 17 (65-68)
    { question: "What does 'chgrp' change?", options: ["User access", "File access", "Time access", "Group access"], correctAnswer: 3 },
    { question: "Which command shows PCI devices?", options: ["lspci", "pci", "devices", "hardware"], correctAnswer: 0 },
    { question: "Which command shows environment?", options: ["show", "vars", "env", "system"], correctAnswer: 2 },
    { question: "What does 'killall' affect?", options: ["One process", "Some processes", "Few processes", "All processes"], correctAnswer: 3 },

    // Group 18 (69-72)
    { question: "What does 'umount' do?", options: ["Create mount", "Unmount filesystem", "Show mounts", "List mounts"], correctAnswer: 1 },
    { question: "What does 'wget' do?", options: ["Send files", "Download files", "List files", "Delete files"], correctAnswer: 1 },
    { question: "Which key shows command history?", options: ["Up arrow", "Down arrow", "Left arrow", "Right arrow"], correctAnswer: 0 },
    { question: "Which command checks memory?", options: ["check", "meminfo", "free", "memory"], correctAnswer: 2 },
    { question: "What does 'rmdir' remove?", options: ["Files", "Links", "Archives", "Directories"], correctAnswer: 3 },

    // Group 19 (73-76)
    { question: "Which command shows file type?", options: ["what", "type", "file", "show"], correctAnswer: 2 },
    { question: "Which command shows block devices?", options: ["lsblk", "block", "devices", "show"], correctAnswer: 0 },
    { question: "What does 'at' command do?", options: ["Shows time", "Lists jobs", "Runs now", "Schedules jobs"], correctAnswer: 3 },
    { question: "What does 'usermod' do?", options: ["Create user", "Modify user", "Delete user", "Show user"], correctAnswer: 1 },

    // Group 20 (77-80)
    { question: "What does 'sort' do?", options: ["Count lines", "Sort lines", "Delete lines", "Copy lines"], correctAnswer: 1 },
    { question: "Which signal terminates process?", options: ["SIGTERM", "SIGKILL", "SIGSTOP", "SIGCONT"], correctAnswer: 0 },
    { question: "Which command shows load average?", options: ["load", "average", "uptime", "system"], correctAnswer: 2 },
    { question: "What does 'nl' command do?", options: ["New line", "Next line", "Null line", "Number lines"], correctAnswer: 3 },

    // Group 21 (81-84)
    { question: "Which directory holds temporary files?", options: ["/tmp", "/temp", "/t", "/temporary"], correctAnswer: 0 },
    { question: "Which command shows printer queue?", options: ["printers", "queue", "lpq", "print"], correctAnswer: 2 },
    { question: "What does 'tee' command do?", options: ["Delete output", "Split output", "Move output", "Join output"], correctAnswer: 1 },
    { question: "What does 'fmt' command do?", options: ["Delete text", "Copy text", "Move text", "Format text"], correctAnswer: 3 },

    // Group 22 (85-88)
    { question: "What does 'join' command do?", options: ["Split files", "Copy files", "Move files", "Merge files"], correctAnswer: 3 },
    { question: "Which command shows system time?", options: ["date", "time", "clock", "now"], correctAnswer: 0 },
    { question: "What does 'cut' command do?", options: ["Join fields", "Extract fields", "Delete fields", "Copy fields"], correctAnswer: 1 },
    { question: "Which command shows routing table?", options: ["routing", "path", "route", "network"], correctAnswer: 2 },

    // Group 23 (89-92)
    { question: "What does 'logger' do?", options: ["Delete logs", "Add log entries", "Show logs", "Clear logs"], correctAnswer: 1 },
    { question: "Which file sets system hostname?", options: ["/etc/hostname", "/etc/name", "/etc/host", "/etc/system"], correctAnswer: 0 },
    { question: "Which command shows shared memory?", options: ["memory", "shared", "ipcs", "show"], correctAnswer: 2 },
    { question: "What does 'expand' command do?", options: ["Compress text", "Delete spaces", "Remove tabs", "Convert tabs"], correctAnswer: 3 },

    { question: "Which command creates backup?", options: ["copy", "save", "backup", "archive"], correctAnswer: 2 },
    { question: "What does 'basename' show?", options: ["Directory name", "File name", "Full path", "Link name"], correctAnswer: 1 },
    { question: "Which command shows system messages?", options: ["dmesg", "messages", "syslog", "log"], correctAnswer: 0 },

    // Final Group 25 (97-100)
    { question: "What does 'sed' command do?", options: ["Sort text", "Copy text", "Move text", "Edit text"], correctAnswer: 3 }
    { question: "What does 'comm' command do?", options: ["Combine files", "Copy files", "Move files", "Compare files"], correctAnswer: 3 },
    { question: "What does 'ftp' command do?", options: ["Copy local", "Transfer files", "Move files", "Delete files"], correctAnswer: 1 },
    { question: "Which command displays file differences?", options: ["cmp", "comp", "diff", "compare"], correctAnswer: 2 },
    { question: "Which command executes commands periodically?", options: ["watch", "monitor", "observe", "track"], correctAnswer: 0 },
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
