const questions = [
    { question: "What is Tally primarily used for?", options: ["Graphic Design", "Accounting", "Programming", "Data Analysis"], correctAnswer: 1 },
    { question: "Which version of Tally is widely used?", options: ["Tally 6.3", "Tally 7.2", "Tally ERP 9", "Tally Prime"], correctAnswer: 3 },
    { question: "How can you create a new company in Tally?", options: ["Load Existing Company", "Create New Company", "Company Management", "New File"], correctAnswer: 1 },
    { question: "What is the default currency in Tally?", options: ["Dollar", "Pound", "INR", "Euro"], correctAnswer: 2 },
    { question: "Which key is used to open the Gateway of Tally?", options: ["F1", "F2", "F3", "F4"], correctAnswer: 0 },
    { question: "What is the primary function of the 'Vouchers' menu in Tally?", options: ["View Reports", "Record Transactions", "Manage Inventory", "Create Companies"], correctAnswer: 1 },
    { question: "Which shortcut key is used to display the Day Book in Tally?", options: ["F2", "F4", "F5", "F3"], correctAnswer: 3 },
    { question: "In Tally, what does a 'Ledger' refer to?", options: ["A financial statement", "A type of report", "An account for transactions", "A database entry"], correctAnswer: 2 },
    { question: "What does 'GST' stand for in Tally?", options: ["General Sales Tax", "Goods and Services Tax", "Government Sales Tax", "Global Service Tax"], correctAnswer: 1 },
    { question: "Which option allows you to view the profit & loss account?", options: ["Accounts Info", "Inventory Reports","Reports", "Tax Reports"], correctAnswer: 2 },
    { question: "What is the function of Tally's 'Inventory' feature?", options: ["Record expenses", "Manage payroll", "Create invoices","Track stock"], correctAnswer: 3 },
    { question: "Which editor can be used to prepare Tally reports?", options: ["Notepad", "Tally Editor", "Excel", "SAP"], correctAnswer: 1 },
    { question: "What is the shortcut to delete a voucher in Tally?", options: ["Alt+D", "Alt+R", "Alt+E", "Alt+S"], correctAnswer: 0 },
    { question: "What key is used to save a transaction in Tally?", options: ["F2", "F5", "Ctrl+A", "Ctrl+S"], correctAnswer: 2 },
    { question: "If you want to change the date in a voucher entry, what should you do?", options: ["Press F1", "Change it manually", "Press Ctrl+D", "Press F2"], correctAnswer: 3 },
    { question: "What feature helps in tax calculation in Tally?", options: ["Audit Report", "Tax Calculation Tool", "Auto Tax", "GST Filing Utility"], correctAnswer: 3 },
    { question: "What does 'Single Entry System' refer to in Tally?", options: ["Complete transaction entry", "Recording only one type of transaction", "Simple record keeping", "Incomplete records"], correctAnswer: 2 },
    { question: "In Tally, what is the purpose of 'Backup'?", options: ["To save power", "To keep data safe", "To delete records", "To create reports"], correctAnswer: 1 },
    { question: "What feature allows you to import/export data in Tally?", options: ["Data Transfer", "Data Synchronization", "Bulk Entry", "Gateway of Tally"], correctAnswer: 0 },
    { question: "Which report gives insight into outstanding receivables?", options: ["Trial Balance", "Outstanding Report", "Balance Sheet", "Cash Flow Statement"], correctAnswer: 1 },
    { question: "What is the purpose of the 'Petty Cash Book' in Tally?", options: ["Track fixed assets", "Manage revenue", "Prepare budgets", "Record small expenses"], correctAnswer: 3 },
    { question: "What does Tally's 'CST' feature manage?", options: ["Central Sales Tax", "Calculated Sales Tax", "Consumer Sales Tax", "Capital Sales Tax"], correctAnswer: 0 },
    { question: "Which Tally feature allows physical stock verification?", options: ["Reconciliation", "Inventory Management", "Stock Audit", "Trial Balance"], correctAnswer: 2 },
    { question: "What does the 'Repayment Voucher' in Tally represent?", options: ["Recording asset acquisition", "Recording loan repayments", "Recording sales", "Recording expenses"], correctAnswer: 1 },
    { question: "Which option in Tally allows you to generate an invoice?", options: ["Sales Voucher", "Purchase Voucher", "Journal Entry", "Payment Entry"], correctAnswer: 0 },
    { question: "Which of the following is NOT a primary feature of Tally?", options: ["Inventory Management", "Project Management", "Accounting", "Taxation"], correctAnswer: 1 },
    { question: "To view the account balance in Tally, what should you do?", options: ["Access Ledger", "View Trial Balance", "Check Balance Sheet", "All of the above"], correctAnswer: 3 },
    { question: "What is Tally's 'Stock Summary' report used for?", options: ["To view total liabilities", "To summarize inventory data", "To track sales figures", "To analyze expense patterns"], correctAnswer: 1 },
    { question: "Which shortcut key allows you to switch to another company?", options: ["F1", "F3",, "F2", "F4"], correctAnswer: 2 },
    { question: "What does Tally's 'Multi-Currency' feature allow you to do?", options: ["Store company data", "Access various reports", "Integrate with international banks","Record transactions in multiple currencies"], correctAnswer: 3 },
    { question: "Which report is essential for understanding financial performance over a period?", options: ["Balance Sheet", "Cash Book", "Stock Summary", "Ledger"], correctAnswer: 0 },
    { question: "What is the function of Tally's 'Cost Center' feature?", options: ["To manage debts", "To monitor expenses for specific projects", "To track inventory costs", "To create ledgers"], correctAnswer: 1 },
    { question: "What does 'Reversal of Entry' mean in Tally?", options: ["Editing a voucher", "Deleting a transaction", "Creating a new record", "Undoing a transaction"], correctAnswer: 3 },
    { question: "What is the key benefit of Tally's 'Grouping' feature?", options: ["Easier data entry", "Simplifies report generation", "Organizes account types", "Boosts software speed"], correctAnswer: 2 },
    { question: "To enable 'Inventory Management' in Tally, what must be done in company settings?", options: ["Activate the inventory option", "Set up liabilities", "Clear previous data", "Create a new gateway"], correctAnswer: 0 },
    { question: "What is the value added by Tally's 'Integrated Taxation'?", options: ["Automatic tax calculation", "Easier data entry", "Faster processing", "Improved graphics"], correctAnswer: 0 },
    { question: "What type of report can you generate using 'Sales Analysis'?", options: ["Product performance report", "Cash flow report", "Outstanding payments", "Vendor details"], correctAnswer: 0 },
    { question: "What feature would you use for budgeting in Tally?", options: ["Account Groups", "Cost Centers", "Stock Items", "Transaction Vouchers"], correctAnswer: 1 },
    { question: "Which option is used to manage fixed assets in Tally?", options: ["Inventory Module", "Purchase Module", "Fixed Assets Module", "Asset Management"], correctAnswer: 2 },
    { question: "How do you enable GST features in Tally?", options: ["Set up new company", "Enable GST option in settings", "Create vouchers", "Account for previous transactions"], correctAnswer: 1 },
    { question: "What is the function of 'Purchase Order' in Tally?", options: ["Record purchases", "Plan future purchases", "Track sales", "Manage inventory"], correctAnswer: 1 },
    { question: "What does the shortcut key 'Esc' do in Tally?", options: ["Save changes", "Delete entry", "Close Tally","Cancel current operation"], correctAnswer: 3 },
    { question: "When a voucher is modified in Tally, what does it affect?", options: ["Only the cash balance", "Overall transaction record", "Reports related to the voucher", "None of the above"], correctAnswer: 1 },
    { question: "What would you use a 'Sales Register' report for in Tally?", options: ["To track cash transactions", "To analyze sales data", "To manage vendor payments", "To view inventory levels"], correctAnswer: 1 },
    { question: "What does Tally primarily focus on?", options: ["Graphic Design", "Accounting", "Data Analysis", "Project Management"], correctAnswer: 1 },
    { question: "In Tally, how can you create a new company?", options: ["File > New Company", "Gateway of Tally > Create Company", "Accounts Info > Create Company", "Company Info > Create Company"], correctAnswer: 3 },
    { question: "What is a 'Ledger' in Tally?", options: ["A type of currency", "A tool for data entry", "An account for recording transactions", "A report generator"], correctAnswer: 2 },
    { question: "Which feature in Tally is used for managing inventory?", options: ["Payroll", "Inventory Management", "Ledger", "Balance Sheet"], correctAnswer: 1 },
    { question: "What does 'GST' stand for in the context of Tally?", options: ["General Service Technology", "Goods and Services Tax", "Global Sales Total", "General Savings Total"], correctAnswer: 1 },
    { question: "What is the function of the 'F2: Date' key in Tally?", options: ["Change the company's financial year", "Modifies the voucher date", "Adjusts the system date", "Displays the current date report"], correctAnswer: 1 },
    { question: "What is a 'Voucher' in Tally?", options: ["A type of report", "An inventory item", "A document recording a transaction", "A user permission setting"], correctAnswer: 2 },
    { question: "How do you back up data in Tally?", options: ["File > Backup", "Gateway of Tally > Backup", "Company Info > Backup", "Data Configuration > Backup"], correctAnswer: 2 },
    { question: "What is the shortcut key to view the balance sheet in Tally?", options: ["F1", "F2", "F3", "F4"], correctAnswer: 3 },
    { question: "What is the use of the 'F11: Features' option in Tally?", options: ["To change company information", "To access Tally's advanced features", "To check software updates", "To create a new ledger"], correctAnswer: 1 },
    { question: "In Tally, what is 'Direct Income'?", options: ["Income earned through non-business activities", "Income that affects the profit and loss directly", "Income from investments", "Income generated from sales"], correctAnswer: 1 },
    { question: "How do you activate GST in Tally?", options: ["Gateway of Tally > F11: Features > F3: Statutory", "Gateway of Tally > Accounts Info > GST", "Company Info > Create Company > Enable GST", "Gateway of Tally > Inventory Info > GST"], correctAnswer: 0 },
    { question: "What is a 'Group' in Tally?", options: ["A collection of ledgers", "A type of voucher", "A report format", "A company file"], correctAnswer: 0 },
    { question: "Which of these is a type of voucher in Tally?", options: ["Sales Order", "Purchase Order", "Receipt", "Invoice"], correctAnswer: 2 },
    { question: "What does the term 'Reconciling' refer to in Tally?", options: ["Adjusting entries for closing stock", "Ensuring the ledger balances match the bank statements", "Correcting errors in entries", "Balancing debits and credits"], correctAnswer: 1 },
    { question: "What is the shortcut key for duplicating a voucher in Tally?", options: ["Alt + 2", "Ctrl + 2", "Alt + D", "Ctrl + D"], correctAnswer: 0 },
    { question: "How do you generate a Profit & Loss statement in Tally?", options: ["Gateway of Tally > Display > Profit & Loss", "Gateway of Tally > Accounts Info > Profit & Loss", "Company Info > Profit & Loss", "Gateway of Tally > Balance Sheet > Profit & Loss"], correctAnswer: 0 },
    { question: "What is 'Cost Centre' in Tally?", options: ["A segment for tracking expenses and revenues", "A department within a company", "A tool for cost analysis", "A budgeting feature"], correctAnswer: 0 },
    { question: "How can you view the trial balance in Tally?", options: ["Gateway of Tally > Trial Balance", "Gateway of Tally > Display > Trial Balance", "Company Info > Trial Balance", "Accounts Info > Trial Balance"], correctAnswer: 1 },
        { question: "What does the shortcut Alt+C do?", options: ["Create a New Ledger", "Create a New Group", "Copy Text", "Create a New Company"], correctAnswer: 0 },
        { question: "Which feature in Tally is used to track stock movements?", options: ["Inventory Info", "Voucher Entry", "Stock Summary", "Statutory Info"], correctAnswer: 2 },
        { question: "In Tally, which shortcut opens the Day Book?", options: ["F4", "F5", "F6", "F2"], correctAnswer: 1 },
        { question: "What does the shortcut Ctrl+A do in Tally?", options: ["Save", "Cancel", "Accept", "Add Ledger"], correctAnswer: 2 },
        { question: "What is the function of the F2 key in Tally?", options: ["Change Date", "Select Company", "Save Report", "Switch to Calculator"], correctAnswer: 0 },
        { question: "Which feature in Tally is used to enter transactions?", options: ["Gateway of Tally", "Display", "Vouchers", "Account Info"], correctAnswer: 2 },
        { question: "What does F5 represent in Tally?", options: ["Payment Voucher", "Receipt Voucher", "Contra Voucher", "Sales Voucher"], correctAnswer: 0 },
        { question: "Which menu in Tally is used to generate balance sheet reports?", options: ["Gateway of Tally", "Display", "Account Info", "Inventory Info"], correctAnswer: 1 },
        { question: "What is the function of Ctrl+M in Tally?", options: ["Return to Tally Main Screen", "Open Multi-currency", "Open Calculator", "Exit Tally"], correctAnswer: 0 },
        { question: "What does the shortcut Alt+E do in Tally?", options: ["Import", "Edit Ledger", "Erase","Export"], correctAnswer: 3 },
        { question: "What is the purpose of the Ctrl+Enter shortcut?", options: ["Accept","Alter Master", "Cancel", "Copy"], correctAnswer: 1 },
        { question: "In Tally, what does the F8 key stand for?", options: ["Purchase Voucher", "Sales Voucher", "Receipt Voucher", "Payment Voucher"], correctAnswer: 1 },
        { question: "What does the shortcut Alt+D do in Tally?", options: ["Duplicate", "Display","Delete", "Close"], correctAnswer: 2 },
        { question: "Which shortcut in Tally opens the 'Accounting Voucher Creation' screen?", options: ["F9", "F7", "F4", "F5"], correctAnswer: 1 },
        { question: "What does F7 represent in Tally?", options: ["Journal Voucher", "Sales Voucher", "Payment Voucher", "Receipt Voucher"], correctAnswer: 0 },
        { question: "Which shortcut is used to create a ledger in Tally?", options: ["Ctrl+L", "Alt+N", "Ctrl+N","Alt+C"], correctAnswer: 3 },
        { question: "In Tally, what is F9 used for?", options: ["Sales Voucher", "Payment Voucher", "Contra Voucher","Purchase Voucher"], correctAnswer: 3 },
        { question: "Which menu option displays financial statements in Tally?", options: ["Account Info", "Inventory Info", "Statutory Info","Display"], correctAnswer: 3 },
        { question: "What is the use of the 'Group' feature in Tally?", options: ["Create Ledgers","Organize Ledgers",  "Enter Transactions", "Generate Reports"], correctAnswer: 1 },
        { question: "What does Alt+G do in Tally?", options: ["Group Company","Go to Report", "Go to Gateway", "Generate Report"], correctAnswer: 1 },
        { question: "In Tally, which key opens the ledger creation screen?", options: ["Alt+L", "Alt+C","Ctrl+C", "Ctrl+N"], correctAnswer: 1 },
        { question: "What does the shortcut Ctrl+L do in Tally?", options: ["Toggle Report Filters", "Log Out","Open Ledger", "Open Calculator"], correctAnswer: 2 },
        { question: "Which key combination opens a new company in Tally?", options: ["Alt+F3", "Ctrl+N", "F12", "Ctrl+Alt+N"], correctAnswer: 0 },
        { question: "In Tally, which option allows you to modify a ledger?", options: ["Edit", "Modify","Alter",  "Change"], correctAnswer: 2 },
        { question: "What does the F1 key open in Tally?", options: ["Select Company", "Reports", "Help", "Create Ledger"], correctAnswer: 0 },
        { question: "What does the shortcut Alt+R do in Tally?", options: ["Recalculate", "Receipt Entry", "Reverse Entry", "Create Report"], correctAnswer: 1 },
        { question: "In Tally, which shortcut key opens the profit and loss report?", options: ["Alt+F1", "F8", "F10", "F11"], correctAnswer: 2 },
        { question: "Which of the following can be managed in Tally?", options: ["Inventory", "Payroll", "Accounts", "All of the above"], correctAnswer: 3 },
        { question: "In Tally, which feature is used to manage tax compliance?", options: ["Statutory Info", "Inventory Info", "Accounts Info", "Display"], correctAnswer: 0 },
        { question: "What does the shortcut Alt+W do in Tally?", options: ["Open Stock Summary", "Create Purchase Voucher", "Switch to Calculator", "Write-Off Entry"], correctAnswer: 3 },
        { question: "Which report shows outstanding payables and receivables in Tally?", options: ["Balance Sheet", "Cash Flow", "Outstanding Report", "Profit and Loss"], correctAnswer: 2 },
        { question: "In Tally, what is the purpose of the 'Voucher Class' feature?", options: ["Automate Entries", "Export Data", "Create Groups", "Manage Ledgers"], correctAnswer: 0 },
        { question: "What is the use of Alt+F2 in Tally?", options: ["Change Period", "Change Date", "Add Voucher", "Close Period"], correctAnswer: 1 },
        { question: "What does the shortcut Alt+S do in Tally?", options: ["Create Stock Journal", "Save", "Display Summary", "Switch Company"], correctAnswer: 0 },
        { question: "What is 'Godown' in Tally?", options: ["Sales Ledger", "Voucher Type","Warehouse", "Company Group"], correctAnswer: 2 },
        // { question: "Which feature is used to print invoices in Tally?", options: ["Export","Print", "Reports", "Display"], correctAnswer: 1 },
        { question: "In Tally, what does 'Ctrl+R' do?", options: ["Refresh", "Recalculate", "Restart","Repeat"], correctAnswer: 3 },
        { question: "Which shortcut shows the balance sheet in Tally?", options: ["F1", "F12", "F10", "F9"], correctAnswer: 2 },
       
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