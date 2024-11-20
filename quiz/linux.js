const questions = [
    { question: "Which command is used to list all files in the current directory?", options: ["ls", "cd", "pwd", "cp"], correctAnswer: 0 },
    { question: "What is the purpose of the 'cd' command in Linux?", options: ["To copy files", "To change directories", "To delete files", "To list files"], correctAnswer: 1 },
    { question: "Which command is used to display the current working directory?", options: ["ls", "cd", "pwd", "dir"], correctAnswer: 2 },
    { question: "What does the 'rm' command do?", options: ["Moves files", "Renames files", "Removes files", "Reads files"], correctAnswer: 2 },
    { question: "What does the 'mkdir' command do?", options: ["Makes a directory", "Moves files", "Deletes files", "Renames files"], correctAnswer: 0 },
    { question: "How do you display the contents of a text file?", options: ["cat", "rm", "ls", "mv"], correctAnswer: 0 },
    { question: "Which command is used to copy files?", options: ["mv", "cp", "rm", "cat"], correctAnswer: 1 },
    { question: "What does the command 'chmod' change?", options: ["File permissions", "File ownership", "File content", "File size"], correctAnswer: 0 },
    { question: "What does the 'ps' command do?", options: ["Lists running processes", "Shows directory contents", "Changes file permissions", "Pings a server"], correctAnswer: 0 },
    { question: "Which command is used to rename a file?", options: ["rename", "cp", "mv", "ls"], correctAnswer: 2 },
    { question: "Which command shows detailed information about the files in a directory?", options: ["ls", "ls -l", "cd", "pwd"], correctAnswer: 1 },
    { question: "What does the command 'df' display?", options: ["Disk usage", "File contents", "Memory usage", "CPU usage"], correctAnswer: 0 },
    { question: "How do you check free memory in Linux?", options: ["free", "df", "mem", "ls"], correctAnswer: 0 },
    { question: "Which command is used to compare the contents of two files?", options: ["cmp", "rm", "cp", "cat"], correctAnswer: 0 },
    { question: "What does the command 'kill' do?", options: ["Lists processes", "Terminates processes", "Copies processes", "Renames processes"], correctAnswer: 1 },
    { question: "Which symbol is used to redirect output to a file?", options: ["&", "|", ">", "<"], correctAnswer: 2 },
    { question: "What does the 'touch' command do?", options: ["Creates a file", "Copies a file", "Removes a file", "Renames a file"], correctAnswer: 0 },
    { question: "Which command is used to change file ownership?", options: ["chown", "chmod", "chgrp", "cp"], correctAnswer: 0 },
    { question: "What does 'grep' command do?", options: ["Copies files", "Searches for text patterns", "Displays system usage", "Lists files"], correctAnswer: 1 },
    { question: "Which file contains user account information?", options: ["/etc/passwd", "/etc/hosts", "/usr/bin", "/home/user"], correctAnswer: 0 },
    { question: "What is the root user's home directory?", options: ["/root", "/home", "/etc", "/usr"], correctAnswer: 0 },
    { question: "How do you view the manual of a command?", options: ["man", "info", "help", "cat"], correctAnswer: 0 },
    { question: "What does 'sudo' allow a user to do?", options: ["Run commands as root", "Copy files", "List files", "Rename files"], correctAnswer: 0 },
    { question: "Which command is used to display network configuration?", options: ["ifconfig", "netstat", "ping", "ftp"], correctAnswer: 0 },
    { question: "Which command lists open files?", options: ["lsof", "open", "ls", "df"], correctAnswer: 0 },
    { question: "How do you search for a file in Linux?", options: ["find", "search", "ls", "grep"], correctAnswer: 0 },
    { question: "What does 'tar' command do?", options: ["Creates compressed archives", "Deletes files", "Moves files", "Copies files"], correctAnswer: 0 },
    { question: "What is the purpose of the /etc directory?", options: ["Contains configuration files", "Contains user data", "Stores system logs", "Holds user binaries"], correctAnswer: 0 },
    { question: "Which command is used to create a symbolic link?", options: ["ln -s", "link", "symlink", "cp -s"], correctAnswer: 0 },
    { question: "Which command shows disk usage by directories?", options: ["du", "df", "ls", "fdisk"], correctAnswer: 0 },
    { question: "What is 'nano' in Linux?", options: ["Text editor", "Compiler", "Debugger", "Shell"], correctAnswer: 0 },
    { question: "Which command is used to view system logs?", options: ["dmesg", "logs", "view", "syslog"], correctAnswer: 0 },
    { question: "What does 'hostname' command show?", options: ["System's name", "User's name", "File's name", "Directory's name"], correctAnswer: 0 },
    { question: "What does 'uname -r' display?", options: ["Kernel version", "OS name", "Current user", "Home directory"], correctAnswer: 0 },
    { question: "Which command is used to reboot the system?", options: ["reboot", "shutdown", "halt", "restart"], correctAnswer: 0 },
    { question: "What does the command 'echo' do?", options: ["Displays text", "Copies text", "Removes text", "Searches text"], correctAnswer: 0 },
    { question: "Which command is used to check disk errors?", options: ["fsck", "df", "diskchk", "check"], correctAnswer: 0 },
    { question: "How do you switch to the root user in Linux?", options: ["su", "login", "root", "admin"], correctAnswer: 0 },
    { question: "What does 'ping' command do?", options: ["Tests network connection", "Lists open ports", "Displays CPU usage", "Checks disk space"], correctAnswer: 0 },
    { question: "Which command is used to view memory usage by processes?", options: ["top", "df", "ps", "mem"], correctAnswer: 0 },
    { question: "What is 'swap' space?", options: ["Virtual memory", "Temporary storage", "User space", "File space"], correctAnswer: 0 },
    { question: "Which command displays active network connections?", options: ["netstat", "ping", "ftp", "top"], correctAnswer: 0 },
    { question: "What is the maximum file size on a 32-bit system?", options: ["4 GB", "2 GB", "16 GB", "1 TB"], correctAnswer: 0 },
    { question: "What does 'ls -a' show?", options: ["All files including hidden", "Only directories", "Large files", "All directories"], correctAnswer: 0 },
    { question: "Which command is used to schedule tasks?", options: ["cron", "time", "schedule", "task"], correctAnswer: 0 },
    { question: "What is the default shell in most Linux distributions?", options: ["Bash", "Zsh", "Fish", "Ksh"], correctAnswer: 0 },
    { question: "Which command displays user information?", options: ["who", "whoami", "ls", "ps"], correctAnswer: 1 },
    { question: "What does 'chmod 755' do?", options: ["Sets file permissions", "Changes file ownership", "Moves files", "Renames files"], correctAnswer: 0 },
    { question: "How do you view system uptime?", options: ["uptime", "time", "sysinfo", "system"], correctAnswer: 0 },
    { question: "Which command deletes a directory?", options: ["rmdir", "rm -d", "rm -dir", "del"], correctAnswer: 0 },
    { question: "How do you exit the current shell?", options: ["exit", "quit", "close", "logout"], correctAnswer: 0 },
    { question: "What does 'history' command show?", options: ["Command history", "File history", "Directory history", "User history"], correctAnswer: 0 },
    { question: "Which key combination stops a process?", options: ["Ctrl+C", "Ctrl+Z", "Ctrl+X", "Ctrl+V"], correctAnswer: 0 },
    { question: "What does the command 'locate' do?", options: ["Finds files", "Copies files", "Deletes files", "Moves files"], correctAnswer: 0 },
    { question: "Which file contains the system boot log?", options: ["/var/log/boot.log", "/etc/boot.log", "/home/boot.log", "/usr/boot.log"], correctAnswer: 0 },
    { question: "What does 'sudo' stand for?", options: ["Super User Do", "System User Do", "Switch User Do", "Safe User Do"], correctAnswer: 0 },
    { question: "What is a 'daemon' in Linux?", options: ["Background process", "User command", "System file", "Text editor"], correctAnswer: 0 },
    
    { question: "Which command is used to view the contents of a file page by page?", options: ["more", "cat", "ls", "tail"], correctAnswer: 0 },
    { question: "What does the 'tail' command do?", options: ["Displays the last lines of a file", "Shows file permissions", "Copies the file", "Deletes the file"], correctAnswer: 0 },
    { question: "What is the function of 'ln' command in Linux?", options: ["Creates links", "Lists directories", "Changes permissions", "Compresses files"], correctAnswer: 0 },
    { question: "How do you terminate a running process by its ID?", options: ["kill <PID>", "stop <PID>", "halt <PID>", "terminate <PID>"], correctAnswer: 0 },
    { question: "Which command is used to modify file timestamps?", options: ["touch", "mtime", "chgrp", "settime"], correctAnswer: 0 },
    { question: "What does the command 'sort' do?", options: ["Sorts text in files", "Deletes files", "Finds text in files", "Counts lines in files"], correctAnswer: 0 },
    { question: "How do you count the lines, words, and characters in a file?", options: ["wc", "count", "ls -l", "char"], correctAnswer: 0 },
    { question: "Which command allows you to replace text within a file?", options: ["sed", "grep", "mv", "rm"], correctAnswer: 0 },
    { question: "How do you view hidden files in a directory?", options: ["ls -a", "ls -h", "show", "ls -l"], correctAnswer: 0 },
    { question: "What does 'useradd' command do?", options: ["Creates a new user account", "Deletes a user", "Lists user accounts", "Modifies user account"], correctAnswer: 0 },
    { question: "How do you compress a file with gzip?", options: ["gzip filename", "compress filename", "zip filename", "tar filename"], correctAnswer: 0 },
    { question: "Which command is used to monitor system performance?", options: ["top", "sys", "status", "perf"], correctAnswer: 0 },
    { question: "How do you stop a job and send it to the background?", options: ["Ctrl+Z", "Ctrl+C", "Ctrl+X", "Ctrl+A"], correctAnswer: 0 },
    { question: "Which command do you use to navigate to the home directory?", options: ["cd ~", "cd /", "cd home", "cd root"], correctAnswer: 0 },
    { question: "What does 'export' command do?", options: ["Sets environment variables", "Deletes environment variables", "Moves files", "Copies files"], correctAnswer: 0 },
    { question: "What does 'head' command display?", options: ["First few lines of a file", "Last few lines of a file", "Entire file", "Middle lines of a file"], correctAnswer: 0 },
    { question: "Which command is used to display user login attempts?", options: ["last", "history", "log", "whoami"], correctAnswer: 0 },
    { question: "How do you clear the terminal screen?", options: ["clear", "cls", "clr", "clean"], correctAnswer: 0 },
    { question: "What does 'df -h' display?", options: ["Human-readable disk usage", "Detailed file list", "Hidden files", "System uptime"], correctAnswer: 0 },
    { question: "What does 'alias' command do?", options: ["Creates shortcuts for commands", "Deletes commands", "Moves files", "Copies files"], correctAnswer: 0 },
    { question: "How do you edit a file with the vi editor?", options: ["vi filename", "edit filename", "cat filename", "view filename"], correctAnswer: 0 },
    { question: "What does the command 'passwd' do?", options: ["Changes user password", "Creates new user", "Deletes user", "Renames user"], correctAnswer: 0 },
    { question: "Which command is used to unmount a file system?", options: ["umount", "mount", "unmount", "dismount"], correctAnswer: 0 },
    { question: "How do you append text to a file?", options: ["echo 'text' >> file", "cat > file", "echo 'text' > file", "write 'text' file"], correctAnswer: 0 },
    { question: "Which command changes a user’s shell?", options: ["chsh", "change", "edit", "set"], correctAnswer: 0 },
    { question: "What does 'exit 0' indicate?", options: ["Successful execution", "Error occurred", "Exit with warning", "User logout"], correctAnswer: 0 },
    { question: "How do you display only unique lines in a file?", options: ["uniq", "sort", "grep", "diff"], correctAnswer: 0 },
    { question: "What does 'ping' measure?", options: ["Network latency", "CPU usage", "Memory usage", "Disk usage"], correctAnswer: 0 },
    { question: "Which file keeps track of all user login attempts?", options: ["/var/log/wtmp", "/var/log/user", "/etc/logs", "/home/logs"], correctAnswer: 0 },
    { question: "What does 'apt-get' command do?", options: ["Manages packages in Debian", "Displays directories", "Changes permissions", "Creates new files"], correctAnswer: 0 },
    { question: "How do you search for installed packages?", options: ["dpkg -l", "apt search", "pkg list", "install"], correctAnswer: 0 },
    { question: "Which command updates package lists?", options: ["apt update", "pkg install", "dpkg update", "apt-get remove"], correctAnswer: 0 },
    { question: "How do you start a service?", options: ["systemctl start", "service on", "init start", "svc on"], correctAnswer: 0 },
    { question: "How do you stop a service?", options: ["systemctl stop", "service off", "init stop", "svc off"], correctAnswer: 0 },
    { question: "What does the 'whoami' command output?", options: ["Current user name", "List of users", "Group of user", "Current directory"], correctAnswer: 0 },
    { question: "How do you lock a user account?", options: ["usermod -L", "passwd -l", "usermod -l", "chmod -L"], correctAnswer: 0 },
    { question: "What does 'diff' command do?", options: ["Compares files", "Copies files", "Deletes files", "Moves files"], correctAnswer: 0 },
    { question: "Which directory contains log files?", options: ["/var/log", "/usr/bin", "/home/log", "/tmp"], correctAnswer: 0 },
    { question: "What is the default location for user home directories?", options: ["/home", "/usr", "/var", "/root"], correctAnswer: 0 },
    { question: "Which command removes an empty directory?", options: ["rmdir", "rm", "delete", "del"], correctAnswer: 0 },
    { question: "What is the default port for SSH?", options: ["22", "80", "443", "25"], correctAnswer: 0 },
    { question: "What is the 'fstab' file used for?", options: ["Lists file systems", "Sets network configurations", "Defines user permissions", "Stores process logs"], correctAnswer: 0 },
    { question: "Which command displays CPU information?", options: ["lscpu", "cpuinfo", "cpu -v", "showcpu"], correctAnswer: 0 },
   
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
