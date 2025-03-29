
// Expanded Question Database (Increase for more variety)
const questionBank = [
    {
        question: "What is the first step you should take when your Windows computer freezes?",
        options: [
            "Restart the computer immediately",
            "Open Task Manager to check for unresponsive programs",
            "Unplug the computer",
            "Run Disk Cleanup"
        ],
        correctAnswer: "Open Task Manager to check for unresponsive programs"
    },
    {
        question: "Which shortcut opens the Task Manager in Windows?",
        options: ["Ctrl + Alt + Delete", "Ctrl + Shift + Esc", "Alt + F4", "Windows + R"],
        correctAnswer: "Ctrl + Shift + Esc"
    },
    {
        question: "What does the 'End Task' button in Task Manager do?",
        options: [
            "Restarts the computer",
            "Closes an unresponsive application",
            "Opens a new program",
            "Logs you out of Windows"
        ],
        correctAnswer: "Closes an unresponsive application"
    },
    {
        question: "Which tab in Task Manager shows CPU and memory usage?",
        options: ["Processes", "Performance", "Services", "Users"],
        correctAnswer: "Performance"
    },
    {
        question: "What is Disk Cleanup used for in Windows?",
        options: [
            "Deleting installed programs",
            "Removing temporary files to free up space",
            "Formatting the hard drive",
            "Checking for viruses"
        ],
        correctAnswer: "Removing temporary files to free up space"
    },
    {
        question: "How can you access Disk Cleanup in Windows?",
        options: [
            "Type 'Disk Cleanup' in the Start menu search",
            "Press Ctrl + D",
            "Open Task Manager",
            "Right-click the desktop"
        ],
        correctAnswer: "Type 'Disk Cleanup' in the Start menu search"
    },
    {
        question: "What should you do if Windows fails to boot?",
        options: [
            "Reinstall Windows immediately",
            "Boot into Safe Mode to troubleshoot",
            "Delete system files",
            "Turn off the computer and wait"
        ],
        correctAnswer: "Boot into Safe Mode to troubleshoot"
    },
    {
        question: "Which key do you press during startup to access the boot menu?",
        options: ["F2", "F8", "F12", "Esc"],
        correctAnswer: "F12"
    },
    {
        question: "What does a 'Blue Screen of Death' (BSOD) indicate?",
        options: [
            "A minor software glitch",
            "A critical system error",
            "Low battery",
            "Internet disconnection"
        ],
        correctAnswer: "A critical system error"
    },
    {
        question: "Which tool can you use to check for corrupted system files?",
        options: ["Disk Cleanup", "System File Checker (SFC)", "Task Manager", "Device Manager"],
        correctAnswer: "System File Checker (SFC)"
    },
    {
        question: "How do you run System File Checker in Windows?",
        options: [
            "Open CMD and type 'sfc /scannow'",
            "Open Task Manager and select 'Scan'",
            "Run Disk Cleanup",
            "Restart the computer"
        ],
        correctAnswer: "Open CMD and type 'sfc /scannow'"
    },
    {
        question: "What does a high CPU usage in Task Manager indicate?",
        options: [
            "The computer is running normally",
            "A program is consuming too many resources",
            "The hard drive is full",
            "The internet is slow"
        ],
        correctAnswer: "A program is consuming too many resources"
    },
    {
        question: "Which of these is NOT a common cause of a slow Windows PC?",
        options: [
            "Too many startup programs",
            "Low disk space",
            "Outdated drivers",
            "A fast internet connection"
        ],
        correctAnswer: "A fast internet connection"
    },
    {
        question: "How can you disable unnecessary startup programs?",
        options: [
            "Use Task Manager's Startup tab",
            "Delete the program files",
            "Run Disk Cleanup",
            "Restart the computer"
        ],
        correctAnswer: "Use Task Manager's Startup tab"
    },
    {
        question: "What does the 'Disk Cleanup' tool remove by default?",
        options: [
            "Temporary internet files",
            "Installed applications",
            "System drivers",
            "Personal documents"
        ],
        correctAnswer: "Temporary internet files"
    },
    {
        question: "What should you do if a driver is causing crashes?",
        options: [
            "Uninstall and reinstall the driver via Device Manager",
            "Ignore the issue",
            "Delete system32 folder",
            "Run Disk Cleanup"
        ],
        correctAnswer: "Uninstall and reinstall the driver via Device Manager"
    },
    {
        question: "Which tool shows a list of all running services in Windows?",
        options: ["Task Manager", "Disk Cleanup", "Control Panel", "File Explorer"],
        correctAnswer: "Task Manager"
    },
    {
        question: "What does the 'Startup Impact' column in Task Manager indicate?",
        options: [
            "How much CPU a program uses",
            "How much a program slows down boot time",
            "How much disk space a program takes",
            "How often a program crashes"
        ],
        correctAnswer: "How much a program slows down boot time"
    },
    {
        question: "What is a common solution for a 'Not Responding' program?",
        options: [
            "End the task in Task Manager",
            "Unplug the computer",
            "Delete the program",
            "Run a virus scan"
        ],
        correctAnswer: "End the task in Task Manager"
    },
    {
        question: "Which command can you use to repair disk errors?",
        options: ["chkdsk", "diskpart", "format", "sfc"],
        correctAnswer: "chkdsk"
    },
    {
        question: "What does 'chkdsk /f' do?",
        options: [
            "Formats the disk",
            "Fixes file system errors",
            "Deletes temporary files",
            "Restarts the computer"
        ],
        correctAnswer: "Fixes file system errors"
    },
    {
        question: "How do you open the Run dialog box in Windows?",
        options: ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
        correctAnswer: "Windows + R"
    },
    {
        question: "What does the 'msconfig' command do?",
        options: [
            "Opens Task Manager",
            "Opens System Configuration",
            "Runs Disk Cleanup",
            "Restarts the PC"
        ],
        correctAnswer: "Opens System Configuration"
    },
    {
        question: "What should you check if your Windows PC is running out of storage?",
        options: [
            "Task Manager",
            "Disk Cleanup",
            "Internet speed",
            "CPU temperature"
        ],
        correctAnswer: "Disk Cleanup"
    },
    {
        question: "Which file type does Disk Cleanup commonly target?",
        options: [".exe", ".tmp", ".docx", ".mp3"],
        correctAnswer: ".tmp"
    },
    {
        question: "What does a yellow triangle in Device Manager indicate?",
        options: [
            "A device is working fine",
            "A driver issue or hardware problem",
            "A completed update",
            "A secure connection"
        ],
        correctAnswer: "A driver issue or hardware problem"
    },
    {
        question: "How can you update a driver in Windows?",
        options: [
            "Right-click the device in Device Manager and select 'Update Driver'",
            "Run Disk Cleanup",
            "Restart the computer",
            "Delete the driver"
        ],
        correctAnswer: "Right-click the device in Device Manager and select 'Update Driver'"
    },
    {
        question: "What is a common cause of random Windows restarts?",
        options: [
            "Overheating",
            "Too much free disk space",
            "Fast internet",
            "Updated drivers"
        ],
        correctAnswer: "Overheating"
    },
    {
        question: "Which Task Manager tab shows network usage?",
        options: ["Processes", "Performance", "App History", "Startup"],
        correctAnswer: "Performance"
    },
    {
        question: "What should you do if an application is using too much memory?",
        options: [
            "End the task in Task Manager",
            "Unplug the computer",
            "Delete system files",
            "Run Disk Cleanup"
        ],
        correctAnswer: "End the task in Task Manager"
    },
    {
        question: "What does 'defragmentation' do to a hard drive?",
        options: [
            "Deletes files",
            "Organizes fragmented data for better performance",
            "Formats the drive",
            "Installs new drivers"
        ],
        correctAnswer: "Organizes fragmented data for better performance"
    },
    {
        question: "Which tool can you use to defragment a drive?",
        options: [
            "Disk Cleanup",
            "Defragment and Optimize Drives",
            "Task Manager",
            "Device Manager"
        ],
        correctAnswer: "Defragment and Optimize Drives"
    },
    {
        question: "What is a common symptom of a failing hard drive?",
        options: [
            "Faster boot times",
            "Frequent crashes or slow performance",
            "Improved graphics",
            "Stable internet"
        ],
        correctAnswer: "Frequent crashes or slow performance"
    },
    {
        question: "What does the 'Services' tab in Task Manager show?",
        options: [
            "Running background processes",
            "Installed applications",
            "Disk usage",
            "Startup programs"
        ],
        correctAnswer: "Running background processes"
    },
    {
        question: "What should you do if Windows Update fails?",
        options: [
            "Run the Windows Update Troubleshooter",
            "Delete the update files",
            "Uninstall Windows",
            "Restart the router"
        ],
        correctAnswer: "Run the Windows Update Troubleshooter"
    },
    {
        question: "Which command checks for disk errors and repairs them?",
        options: ["chkdsk /r", "sfc /repair", "diskpart", "format /f"],
        correctAnswer: "chkdsk /r"
    },
    {
        question: "What does a red 'X' on a drive in File Explorer mean?",
        options: [
            "The drive is full",
            "The drive is disconnected or inaccessible",
            "The drive is optimized",
            "The drive is being scanned"
        ],
        correctAnswer: "The drive is disconnected or inaccessible"
    },
    {
        question: "What is the purpose of Safe Mode in Windows?",
        options: [
            "To run games faster",
            "To start Windows with minimal drivers for troubleshooting",
            "To install updates",
            "To clean the disk"
        ],
        correctAnswer: "To start Windows with minimal drivers for troubleshooting"
    },
    {
        question: "How do you boot into Safe Mode?",
        options: [
            "Press F8 during startup",
            "Run 'safeboot' in CMD",
            "Open Task Manager",
            "Unplug the computer"
        ],
        correctAnswer: "Press F8 during startup"
    },
    {
        question: "What does the 'Memory' column in Task Manager show?",
        options: [
            "CPU usage",
            "Amount of RAM used by a process",
            "Disk space",
            "Network speed"
        ],
        correctAnswer: "Amount of RAM used by a process"
    },
    {
        question: "What is a common fix for a slow internet connection on Windows?",
        options: [
            "Restart the router",
            "Run Disk Cleanup",
            "End all tasks",
            "Delete drivers"
        ],
        correctAnswer: "Restart the router"
    },
    {
        question: "What does the 'Disk' column in Task Manager indicate?",
        options: [
            "CPU usage",
            "Hard drive read/write activity",
            "Memory usage",
            "Network speed"
        ],
        correctAnswer: "Hard drive read/write activity"
    },
    {
        question: "Which option in Disk Cleanup removes old Windows installation files?",
        options: [
            "Temporary Files",
            "Previous Windows Installations",
            "Recycle Bin",
            "Thumbnails"
        ],
        correctAnswer: "Previous Windows Installations"
    },
    {
        question: "What should you do if a program won't uninstall?",
        options: [
            "Use 'Programs and Features' or a third-party uninstaller",
            "Delete the program folder",
            "Restart the computer",
            "Run Disk Cleanup"
        ],
        correctAnswer: "Use 'Programs and Features' or a third-party uninstaller"
    },
    {
        question: "What does a black screen on startup usually indicate?",
        options: [
            "A display or hardware issue",
            "A full hard drive",
            "A completed update",
            "A fast boot"
        ],
        correctAnswer: "A display or hardware issue"
    },
    {
        question: "What is the purpose of the 'Event Viewer' in Windows?",
        options: [
            "To clean the disk",
            "To view system logs and errors",
            "To manage startup programs",
            "To update drivers"
        ],
        correctAnswer: "To view system logs and errors"
    },
    {
        question: "What does '100% disk usage' in Task Manager suggest?",
        options: [
            "The hard drive is overloaded",
            "The CPU is overheating",
            "The RAM is full",
            "The network is down"
        ],
        correctAnswer: "The hard drive is overloaded"
    },
    {
        question: "Which tool can you use to rollback a problematic driver?",
        options: [
            "Device Manager",
            "Disk Cleanup",
            "Task Manager",
            "Control Panel"
        ],
        correctAnswer: "Device Manager"
    },
    {
        question: "What should you do if Windows is stuck on the loading screen?",
        options: [
            "Boot into Safe Mode or use Startup Repair",
            "Delete system files",
            "Run Disk Cleanup",
            "Uninstall Windows"
        ],
        correctAnswer: "Boot into Safe Mode or use Startup Repair"
    },
    {
        question: "What does the 'Users' tab in Task Manager display?",
        options: [
            "Logged-in user accounts and their resource usage",
            "Installed programs",
            "Disk space",
            "Network settings"
        ],
        correctAnswer: "Logged-in user accounts and their resource usage"
    }
];

class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 50; // Configurable number of questions
        this.timer = 0;
        this.timerInterval = null;
        this.userDetails = {};
        this.registerEventListeners();
    }

    registerEventListeners() {
        document.getElementById('registrationForm').addEventListener('submit', this.startQuiz.bind(this));
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    startQuiz(event) {
        event.preventDefault();
        
        // Capture user details
        this.userDetails = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('emailAddress').value,
            phone: document.getElementById('phoneNumber').value
        };

        // Select random questions
        this.questions = this.shuffleArray([...questionBank]).slice(0, this.totalQuestions);
        
        document.getElementById('registrationSection').style.display = 'none';
        document.getElementById('quizSection').style.display = 'block';
        
        this.startTimer();
        this.loadQuestion();
    }

    startTimer() {
        const timerElement = document.getElementById('timer');
        this.timer = 0;
        this.timerInterval = setInterval(() => {
            this.timer++;
            const minutes = Math.floor(this.timer / 60);
            const seconds = this.timer % 60;
            timerElement.textContent = `${
                minutes.toString().padStart(2, '0')
            }:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    loadQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.endQuiz();
            return;
        }

        const currentQuestion = this.questions[this.currentQuestionIndex];
        const questionElement = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');

        questionElement.textContent = currentQuestion.question;
        optionsContainer.innerHTML = '';

        // Shuffle options
        const shuffledOptions = this.shuffleArray([...currentQuestion.options]);

        shuffledOptions.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(optionElement, currentQuestion));
            optionsContainer.appendChild(optionElement);
        });
    }

    selectOption(selectedElement, currentQuestion) {
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.querySelectorAll('.option').forEach(el => {
            el.classList.remove('selected');
            el.style.pointerEvents = 'none';
        });

        selectedElement.classList.add('selected');

        // Check if selected option is correct
        if (selectedElement.textContent === currentQuestion.correctAnswer) {
            this.correctAnswers++;
        }

        // Move to next question automatically after a short delay
        setTimeout(() => {
            this.currentQuestionIndex++;
            this.loadQuestion();
        }, 500);
    }

    endQuiz() {
        clearInterval(this.timerInterval);
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('completionSection').style.display = 'block';

        // Calculate percentage
        const percentage = Math.round((this.correctAnswers / this.totalQuestions) * 100);

        // Prepare email content
        const emailContent = `
Subject: Alien Institute Computer Quiz Results

Dear ${this.userDetails.name},

Quiz Results:
- Name: ${this.userDetails.name}
- Email: ${this.userDetails.email}
- Phone: ${this.userDetails.phone}
- Total Questions: ${this.totalQuestions}
- Correct Answers: ${this.correctAnswers}
- Percentage: ${percentage}%
- Time Taken: ${Math.floor(this.timer / 60)} minutes ${this.timer % 60} seconds

Thank you for taking the Alien Institute Computer Quiz!

Best Regards,
Alien Institute of Computer
`;

        // Simulate email sending (replace with actual email service)
        this.sendEmail(this.userDetails.email, emailContent);
    }

    sendEmail(recipientEmail, content) {
        // This is a placeholder. In a real-world scenario, 
        // you would use a backend service to send emails
        console.log(`Sending email to ${recipientEmail}`);
        console.log(content);
        
        // Optional: You might want to use a service like EmailJS or a backend API
        // to actually send the email
        alert('Your quiz results have been processed and will be sent to your email.');
    }
}

// Initialize Quiz Application
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
