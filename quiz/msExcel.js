const questions = [
    { question: "What is the file extension for a standard Excel workbook?", options: [".xls", ".xlsx", ".xlsm", ".csv"], correctAnswer: 1 },
    { question: "Which function calculates the sum of a range of cells?", options: ["SUM()", "ADD()", "TOTAL()", "SUMMARIZE()"], correctAnswer: 0 },
    { question: "What does the VLOOKUP function do?", options: ["Searches for a value in a table", "Calculates a total", "Looks up a cell reference", "Formats data"], correctAnswer: 0 },
    { question: "What shortcut is used to save a workbook?", options: ["Ctrl+S", "Ctrl+N", "Ctrl+O", "Ctrl+W"], correctAnswer: 0 },
    { question: "How do you insert a new worksheet?", options: ["Ctrl+N", "Shift+F11", "Alt+W", "Ctrl+W"], correctAnswer: 1 },
    { question: "Which symbol is used to start a formula in Excel?", options: ["$", "#", "=", "@"], correctAnswer: 2 },
    { question: "What function returns the current date?", options: ["NOW()", "DATE()", "TODAY()", "CURRENT()"], correctAnswer: 2 },
    { question: "Which function would you use to find the average of a range of cells?", options: ["AVERAGE()", "MEAN()", "AVG()", "MEDIAN()"], correctAnswer: 0 },
    { question: "How can you format a cell as currency?", options: ["Right-click > Format Cells", "Home > Number Format", "Insert > Currency", "Data > Currency"], correctAnswer: 1 },
    { question: "What does the CONCATENATE function do?", options: ["Combines text from different cells", "Calculates total", "Finds maximum value", "Sorts data"], correctAnswer: 0 },
    { question: "What is the shortcut for opening the 'Format Cells' dialog?", options: ["Ctrl+1", "Alt+1", "Shift+1", "Ctrl+Shift+1"], correctAnswer: 0 },
    { question: "Which command is used to sort data in Excel?", options: ["Data > Sort", "Home > Sort", "View > Sort", "Insert > Sort"], correctAnswer: 0 },
    { question: "What does the IF function do?", options: ["Conditional logic", "Calculate averages", "Lookup data", "Count cells"], correctAnswer: 0 },
    { question: "How do you create a chart in Excel?", options: ["Insert > Chart", "Home > Chart", "Data > Chart", "View > Chart"], correctAnswer: 0 },
    { question: "Which file format allows macros to be saved?", options: [".xls", ".xlsx", ".xlsm", ".csv"], correctAnswer: 2 },
    { question: "What is the purpose of the Freeze Panes feature?", options: ["Lock rows or columns", "Merge cells", "Split screen", "Sort data"], correctAnswer: 0 },
    { question: "How do you input a formula in a cell?", options: ["Start with =", "Start with +", "Start with @", "Start with #"], correctAnswer: 0 },
    { question: "What does the COUNT function do?", options: ["Counts numeric entries", "Counts all entries", "Counts text entries", "Counts unique entries"], correctAnswer: 0 },
    { question: "In Excel, what does the average formula look like?", options: ["AVERAGE(A1:A10)", "AVG(A1:A10)", "MEAN(A1:A10)", "SUM(A1:A10)/10"], correctAnswer: 0 },
    { question: "What is the shortcut for creating a new workbook?", options: ["Ctrl+N", "Ctrl+W", "Ctrl+M", "Ctrl+Shift+N"], correctAnswer: 0 },
    { question: "How many columns are in a worksheet in Excel 2019?", options: ["256", "1024", "16384", "1048576"], correctAnswer: 2 },
    { question: "Which of the following functions is used to find the maximum number in a range?", options: ["MAX()", "HIGHEST()", "LARGE()", "TOP()"], correctAnswer: 0 },
    { question: "How do you reference a cell in another sheet?", options: ["SheetName!Cell", "Cell!SheetName", "SheetName:Cell", "Cell/SheetName"], correctAnswer: 0 },
    { question: "Which shortcut key is used to go to the next worksheet?", options: ["Ctrl+Page Up", "Ctrl+Page Down", "Alt+Page Up", "Shift+Page Down"], correctAnswer: 1 },
    { question: "What does the SUMIF function do?", options: ["Adds cells based on criteria", "Counts based on criteria", "Finds maximum based on criteria", "Finds average based on criteria"], correctAnswer: 0 },
    { question: "How do you remove duplicates from a range?", options: ["Data > Remove Duplicates", "Home > Remove Duplicates", "Insert > Remove Duplicates", "View > Remove Duplicates"], correctAnswer: 0 },
    { question: "What does the PMT function calculate?", options: ["Payment for a loan", "Total amount", "Interest rate", "Monthly savings"], correctAnswer: 0 },
    { question: "Which of the following is not a valid Excel function?", options: ["AVERAGEIF()", "SUMPRODUCT()", "COUNTIF()", "ADDIF()"], correctAnswer: 3 },
    { question: "Which task is accomplished using the Data Validation feature?", options: ["Restrict cell entries", "Sort data", "Format cells", "Create formulas"], correctAnswer: 0 },
    { question: "In Excel, what does F4 do?", options: ["Repeat last action", "Open Format Cells", "Insert column", "Delete cell"], correctAnswer: 0 },
    { question: "How do you start a new line within the same cell?", options: ["Alt+Enter", "Ctrl+Enter", "Shift+Enter", "Enter"], correctAnswer: 0 },
    { question: "What does the function TODAY() return?", options: ["Current date", "Current time", "Total days", "End of month"], correctAnswer: 0 },
    { question: "Which tab would you use to access PivotTables?", options: ["Insert", "Home", "Data", "View"], correctAnswer: 0 },
    { question: "What is the default alignment for text in Excel cells?", options: ["Left", "Right", "Center", "Justified"], correctAnswer: 0 },
    { question: "Which of the following would you use to find a specific text in a cell?", options: ["SEARCH()", "FIND()", "LOOKUP()", "MATCH()"], correctAnswer: 1 },
    { question: "What does the function LEN() return?", options: ["Length of text", "Sum of numbers", "Random number", "Date of entry"], correctAnswer: 0 },
    { question: "How do you protect a worksheet?", options: ["Review > Protect Sheet", "Home > Lock Sheet", "File > Protect", "View > Protect"], correctAnswer: 0 },
    { question: "Which function can return a value based on a logical test?", options: ["IF()", "SELECT()", "CHOOSE()", "FILTER()"], correctAnswer: 0 },
    { question: "To switch between two open workbooks, which shortcut is used?", options: ["Ctrl+Tab", "Ctrl+F6", "Alt+Tab", "Shift+F10"], correctAnswer: 1 },
    { question: "What function would you use to round a number to a specified number of digits?", options: ["ROUND()", "ROUNDDOWN()", "ROUNDUP()", "ALLROUND()"], correctAnswer: 0 },
    { question: "Which feature helps create a visual representation of data?", options: ["Charts", "Formulas", "Tables", "Cells"], correctAnswer: 0 },
    { question: "What is the shortcut key for inserting a function?", options: ["Shift+F3", "Ctrl+F3", "Alt+F3", "Ctrl+Shift+F3"], correctAnswer: 0 },
    { question: "How do you hide a worksheet?", options: ["Right-click > Hide", "Insert > Hide", "Data > Hide", "Home > Hide"], correctAnswer: 0 },
    { question: "What does the F1 key do in Excel?", options: ["Open Help", "Cancel operation", "Insert new sheet", "Open options"], correctAnswer: 0 },
    { question: "In Excel, what does the term 'cell reference' mean?", options: ["Address of a cell", "Data in a cell", "Formula in a cell", "Formatting of a cell"], correctAnswer: 0 },
    { question: "Which of the following is the correct syntax for a COUNTIF formula?", options: ["COUNTIF(range, criteria)", "COUNTIF(criteria, range)", "COUNTIF(range; criteria)", "COUNTIF(criteria; range)"], correctAnswer: 0 },
    { question: "How can you quickly fill a series of numbers?", options: ["Drag the fill handle", "Press Enter", "Right-click > Fill Series", "Use the Fill Series command"], correctAnswer: 0 },
    { question: "What does the ROUNDUP function do?", options: ["Rounds up to the nearest value", "Rounds down to the nearest value", "Rounds to the nearest whole number", "No rounding"], correctAnswer: 0 },
    { question: "How do you add comments to a cell?", options: ["Right-click > Insert Comment", "Insert > Comment", "Review > New Comment", "Data > Comment"], correctAnswer: 2 },
    { question: "What does the function NOW() return?", options: ["Current date and time", "Current date", "Current time", "Random time"], correctAnswer: 0 },
    { question: "How do you create a drop-down list in a cell?", options: ["Data > Data Validation", "Home > List", "Insert > List", "View > List"], correctAnswer: 0 },
    { question: "Which tab allows you to change the style of a table?", options: ["Table Design", "Home", "Insert", "Data"], correctAnswer: 0 },
    { question: "What does the function CONCAT() do?", options: ["Combines text strings", "Calculates total", "Formats numbers", "Finds maximum value"], correctAnswer: 0 },
    { question: "What is the maximum number of rows in Excel?", options: ["1048576", "65536", "32768", "16384"], correctAnswer: 0 },
    { question: "How can you access the 'Name Box' in Excel?", options: ["Select a cell", "Click on the box above row 1", "Use Alt+N", "Dashboard options"], correctAnswer: 1 },
    { question: "Which function would you use to calculate the standard deviation?", options: ["STDEV.S()", "AVG()", "DEVIATE()", "VAR()"], correctAnswer: 0 },
    { question: "What does the function ISBLANK() check for?", options: ["Empty cells", "Error values", "Text values", "Numeric values"], correctAnswer: 0 },
    { question: "How do you change the theme of an Excel workbook?", options: ["Page Layout > Themes", "Insert > Theme", "View > Themes", "Home > Themes"], correctAnswer: 0 },
    { question: "Which tool would you use to explore relationships in data visually?", options: ["PivotTable", "Filter", "Sort", "Data Validation"], correctAnswer: 0 },
    { question: "Which Excel feature allows you to analyze data with interactive tables?", options: ["PivotTable", "Data Table", "Table", "Chart"], correctAnswer: 0 },
    { question: "Which command removes all formats from a cell?", options: ["Clear Formats", "Delete", "Remove Styles", "Default Format"], correctAnswer: 0 },
    { question: "How do you transpose rows and columns?", options: ["Copy > Paste Special > Transpose", "Data > Transpose", "Home > Transpose", "Insert > Transpose"], correctAnswer: 0 },
    { question: "Which of the following is not a valid data type in Excel?", options: ["Text", "Number", "Currency", "Symbol"], correctAnswer: 3 },
    { question: "What is the purpose of a data table?", options: ["Display relationships", "Show data summary", "Analyze data impact", "All of the above"], correctAnswer: 3 },
    { question: "What can be used to create dashboards in Excel?", options: ["Charts", "Tables", "Slicers", "All of the above"], correctAnswer: 3 },
    { question: "How do you insert a hyperlink?", options: ["Insert > Link", "Insert > Hyperlink", "Home > Hyperlink", "Data > Link"], correctAnswer: 1 },
    { question: "Which function can be used to check if a value exists in a range?", options: ["MATCH()", "LOOKUP()", "SEARCH()", "CHOOSE()"], correctAnswer: 0 },
    { question: "What does the SUMPRODUCT function do?", options: ["Multiplies ranges and returns sum", "Counts products", "Calculates average of products", "None of the above"], correctAnswer: 0 },
    { question: "To quickly add a border to selected cells, you would use:", options: ["Home > Borders", "Insert > Borders", "Page Layout > Borders", "Data > Borders"], correctAnswer: 0 },
    { question: "How do you display formulas instead of values in cells?", options: ["Ctrl+`", "Ctrl+F", "Shift+F", "Alt+F"], correctAnswer: 0 },
    { question: "What is the maximum number of characters in a cell?", options: ["256", "1024", "32768", "65536"], correctAnswer: 2 },
    { question: "How do you format a cell to be bold?", options: ["Ctrl+B", "Shift+B", "Alt+B", "Format > Bold"], correctAnswer: 0 },
    { question: "Which option allows for quick calculations in the status bar?", options: ["Average", "Count", "Sum", "All of the above"], correctAnswer: 3 },
    { question: "How do you quickly navigate to the beginning of a worksheet?", options: ["Ctrl+Home", "Home", "Alt+Home", "Shift+Home"], correctAnswer: 0 },
    { question: "Which of the following is a logical function?", options: ["SUM()", "IF()", "AVERAGE()", "COUNT()"], correctAnswer: 1 },
    { question: "How do you change the orientation of a printed spreadsheet?", options: ["Page Layout > Orientation", "Insert > Orientation", "View > Orientation", "Home > Orientation"], correctAnswer: 0 },
    { question: "What does the function TEXT() do?", options: ["Formats a number to text", "Calculates text length", "Transposes text", "All of the above"], correctAnswer: 0 },
    { question: "Which function can determine the number of days between two dates?", options: ["DATEDIF()", "DAYS()", "DATEDAYS()", "DATE()"], correctAnswer: 1 },
    { question: "To bring up a context menu (right-click menu) in Excel, you use:", options: ["Right-click", "Shift+F10", "Ctrl+M", "Alt+M"], correctAnswer: 1 }

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