const questions = [
    { question: "What is the default file extension for Word documents?", options: [".doc", ".docx", ".txt", ".wps"], correctAnswer: 1 },
    { question: "Which shortcut is used to save a document?", options: ["Ctrl+S", "Ctrl+N", "Ctrl+P", "Ctrl+Z"], correctAnswer: 0 },
    { question: "How do you insert a picture in MS Word?", options: ["Home > Picture", "Layout > Picture", "Insert > Picture","View > Picture"], correctAnswer: 2 },
    { question: "What feature allows you to see the layout of the document?", options: ["Web Layout", "Outline", "Draft","Print Layout"], correctAnswer: 3 },
    { question: "What does the 'Home' tab in MS Word contain?", options: ["Insert options", "Editing tools", "Formatting tools", "All of the above"], correctAnswer: 3 },
    { question: "Which of the following is a valid way to create a new document?", options: ["All of the above","File > New", "Ctrl+N", "Shift+N"], correctAnswer: 0 },
    { question: "What is the shortcut to open a new document?", options: ["Ctrl+O", "Ctrl+N", "Ctrl+A", "Ctrl+T"], correctAnswer: 1 },
    { question: "Which tab would you use to create a table?", options: ["Insert", "Home", "Layout", "Design"], correctAnswer: 0 },
    { question: "What is the maximum number of columns you can insert in a Word document?", options: ["32", "64", "255", "63"], correctAnswer: 3 },
    { question: "Which feature allows you to check spelling and grammar?", options: ["Thesaurus", "Spell Check", "AutoCorrect", "Word Count"], correctAnswer: 1 },
    { question: "What is the default font size in Word 2016?", options: ["10 pt", "11 pt", "12 pt", "14 pt"], correctAnswer: 2 },
    { question: "How do you apply bold formatting?", options: ["Ctrl+B", "Ctrl+U", "Ctrl+I", "Ctrl+Y"], correctAnswer: 0 },
    { question: "Which of the following allows you to adjust margins?", options: ["Page Layout", "Design", "View", "Home"], correctAnswer: 0 },
    { question: "What is a Mail Merge?", options: ["Combining documents", "Creating labels", "Personalized letters", "All of the above"], correctAnswer: 3 },
    { question: "What does Ctrl+Z do?", options: ["Redo", "Undo", "Save", "Open"], correctAnswer: 1 },
    { question: "How can you add a hyperlink to a document?", options: ["Insert > Link", "Home > Hyperlink", "Insert > Hyperlink","Design > Link"], correctAnswer: 2 },
    { question: "What would you use to insert a page number?", options: ["Insert > Page Number", "Layout > Page Number", "Format > Page Number", "View > Page Number"], correctAnswer: 0 },
    { question: "What is the default margin in Word?", options: ["0.5 inches", "1 inch", "1.25 inches", "2 inches"], correctAnswer: 1 },
    { question: "Which of the following formats can you save a document as?", options: [".doc", ".pdf", ".txt", ".All of the above"], correctAnswer: 3 },
    { question: "To find and replace text, which option do you choose?", options: ["Ctrl+F", "Ctrl+R", "Ctrl+H", "Ctrl+I"], correctAnswer: 2 },
    { question: "Which feature allows you to create footnotes?", options: ["References", "Insert", "Home", "View"], correctAnswer: 0 },
    { question: "What is the purpose of the Status Bar?", options: ["Shows document properties", "Shows current page number", "Shows word count", "All of the above"], correctAnswer: 3 },
    { question: "What does Ctrl+P do?", options: ["Open document", "Close document", "Print document", "Save document"], correctAnswer: 2 },
    { question: "How do you format text as a heading?", options: ["Home > Heading", "Insert > Heading", "Design > Heading", "Page Layout > Heading"], correctAnswer: 0 },
    { question: "To view the Print Preview of the document, you can use:", options: ["Ctrl+Print", "Ctrl+P", "Ctrl+F12", "Alt+P"], correctAnswer: 1 },
    { question: "What is the purpose of the 'Indent' feature?", options: ["Decrease space before text", "Change text alignment","Increase space before text", "All of the above"], correctAnswer: 2 },
    { question: "Which shortcut key is used to check for spelling errors?", options: ["F7", "F5", "F10", "F12"], correctAnswer: 0 },
    { question: "What does the 'Paragraph' dialog box allow you to do?", options: ["Change text color", "Set line spacing", "Adjust margins", "All of the above"], correctAnswer: 1 },
    { question: "Which tab contains options for inserting shapes?", options: ["Design", "Home", "Layout","Insert"], correctAnswer: 3 },
    { question: "How can you change the page orientation?", options: ["Layout > Orientation", "Home > Orientation", "Design > Orientation", "Insert > Orientation"], correctAnswer: 0 },
    { question: "What is the purpose of the 'Track Changes' feature?", options: ["Change text color","Keep a record of edits", "Save document", "Undo changes"], correctAnswer: 1 },
    { question: "What makes a table of contents?", options: ["Footnotes", "Images", "Comments","Headings in the document"], correctAnswer: 3 },
    { question: "How can you split a table?", options: ["Select column > Layout > Split Table","Select row > Layout > Split Table", "Right-click > Split", "Insert > Split"], correctAnswer: 1 },
    { question: "Which command is used to center align text?", options: ["Ctrl+L", "Ctrl+R", "Ctrl+C", "Ctrl+E"], correctAnswer: 3 },
    { question: "What kind of files can be inserted into Word?", options: ["Images", "Videos", "Audio files", "All of the above"], correctAnswer: 3 },
    { question: "How do you create a text box?", options: ["Insert > Text Box", "Home > Text Box", "View > Text Box", "Layout > Text Box"], correctAnswer: 0 },
    { question: "Which toolbar would you use for drawing?", options: ["Formatting", "Drawing", "Shapes", "Design"], correctAnswer: 2 },
    { question: "What does 'Ctrl+F' do?", options: ["Replace text", "Close document","Find text", "Open document"], correctAnswer: 2 },
    { question: "In which tab can you apply styles?", options: ["Insert", "Review", "Layout","Home"], correctAnswer: 3 },
    { question: "What is the shortcut to insert a page break?", options: ["Shift+Enter", "Ctrl+Enter","Alt+Enter", "Enter"], correctAnswer: 1 },
    { question: "What is the default font of MS Word 2016?", options: ["Arial", "Times New Roman", "Calibri", "Verdana"], correctAnswer: 2 },
    { question: "Which tab will contain options for changing the page color?", options: ["Home", "Design", "Layout", "View"], correctAnswer: 1 },
    { question: "How do you quickly select a paragraph?", options: ["Click three times", "Double-click", "Ctrl+A", "Shift+Click"], correctAnswer: 0 },
    { question: "What does the 'Insert' tab allow you to do?", options: ["Insert files", "Insert images", "Insert shapes", "All of the above"], correctAnswer: 3 },
    { question: "Which of the following can be made into an automated macro?", options: ["Keyboard shortcuts", "Repetitive tasks", "Formatting tasks", "All of the above"], correctAnswer: 3 },
    { question: "To search for synonyms, you would use:", options: ["Thesaurus", "Word Count", "Spell Check", "Grammar Check"], correctAnswer: 0 },
    { question: "What does the 'View' menu do in Word?", options: ["Changes document settings", "Modifies page layout", "Adjusts how documents are displayed", "All of the above"], correctAnswer: 2 },
    { question: "Which tool helps you make charts in Word?", options: ["Home > Chart", "Layout > Chart", "Design > Chart","Insert > Chart"], correctAnswer: 3 },
    { question: "What is the shortcut for adding a comment?", options: ["Ctrl+Alt+C", "Ctrl+C","Alt+Shift+C", "Ctrl+M"], correctAnswer: 2 },
    { question: "How do you create numbered lists?", options: ["Insert > Numbering","Home > Numbering", "Layout > Numbering", "Design > Numbering"], correctAnswer: 1 },
    { question: "To increase the font size, you use:", options: ["Ctrl+Shift+>", "Ctrl+>", "Ctrl+Up", "Ctrl+Shift+Up"], correctAnswer: 0 },
    { question: "How do you switch the document view?", options: ["View > Switch", "Layout > View", "Home > Views", "View Tab"], correctAnswer: 3 },
    { question: "What does 'Ctrl+Shift+L' do?", options: ["Insert bullet point", "Center text", "Indent left", "Insert hyperlink"], correctAnswer: 0 },
    { question: "Which key combination is used for strikethrough formatting?", options: ["Ctrl+D", "Ctrl+T", "Alt+D", "Ctrl+E"], correctAnswer: 0 },
    { question: "What does 'Ctrl+K' do?", options: ["Insert hyperlink", "Cut", "Copy", "Paste"], correctAnswer: 0 },
    { question: "To add comments in a document can be done through which tab?", options: ["Insert", "Review", "Home", "Layout"], correctAnswer: 1 },
    { question: "Which feature in MS Word helps in organizing thoughts?", options: ["Concept Map", "Flowchart","Outline", "Image"], correctAnswer: 2 },
    { question: "Which option adjusts line spacing?", options: ["Layout > Spacing", "Home > Paragraph", "Design > Spacing", "View > Line"], correctAnswer: 1 },
    { question: "What is 'SmartArt' used for?", options: ["Text formatting", "Image editing", "File management","Visual representations of information"], correctAnswer: 3 },
    { question: "How do you align text to the right?", options: ["Ctrl+L", "Ctrl+C","Ctrl+R", "Ctrl+E"], correctAnswer: 2 },
    { question: "What is the purpose of 'Format Painter'?", options: ["To change text color","To copy formatting", "To insert tables", "To switch fonts"], correctAnswer: 1 },
    { question: "What can you use the 'Find' feature for?", options: ["Locate text", "Change formatting", "Insert images", "All of the above"], correctAnswer: 0 },
    { question: "Which of the following can you use to organize a long document?", options: ["Sections", "Headings", "Table of contents", "All of the above"], correctAnswer: 3 },
    { question: "How can you quick print a document?", options: ["Ctrl+Print", "Ctrl+Alt+P", "Ctrl+Shift+P", "Ctrl+P"], correctAnswer: 3 },
    { question: "What is the purpose of headers and footers?", options: ["To add links", "To insert text", "To include repeated information", "To create tables"], correctAnswer: 2 },
    { question: "To change the view of your document to outline, you would use:", options: ["View > Outline", "Layout > Outline", "Insert > Outline", "Home > Outline"], correctAnswer: 0 },
    { question: "What does 'Alt+Shift+D' do?", options: ["Insert date", "Insert time", "Insert document title", "Insert author name"], correctAnswer: 0 },
    { question: "How do you insert a page break?", options: ["Insert > Page Break", "Insert > Break", "Ctrl+Enter", "All of the above"], correctAnswer: 3 },
    { question: "To open the 'Format Cells' dialog box, you use:", options: ["Ctrl+1", "Ctrl+2", "Ctrl+3", "Ctrl+4"], correctAnswer: 0 },
    { question: "Which key will delete the character to the left of the cursor?", options: ["Delete", "Backspace", "Insert", "Ctrl+D"], correctAnswer: 1 },
    { question: "What is the purpose of the 'Office button' in earlier versions of Word?", options: ["File operations", "View options", "Insert operations", "Format operations"], correctAnswer: 0 },
    { question: "To review comments, which tab would you use?", options: ["Home", "Insert","Review", "View"], correctAnswer: 2 },
    { question: "What does 'Ctrl+Shift+>' do?", options: ["Decrease font size", "Double-space text", "Single-space text","Increase font size"], correctAnswer: 3 },
    { question: "To increase indent, which shortcut is used?", options: ["Ctrl+I","Ctrl+M", "Ctrl+N", "Ctrl+L"], correctAnswer: 1 },
    { question: "What does 'Alt+F8' do?", options: ["Insert symbols", " Open options","Run macros", "Refresh document"], correctAnswer: 2 },
    { question: "To underline text, which shortcut is used?", options: ["Ctrl+B", "Ctrl+I", "Ctrl+A","Ctrl+U"], correctAnswer: 3 },
    { question: "How do you access the Word options?", options: ["File > Options", "Home > Options", "View > Options", "Insert > Options"], correctAnswer: 0 },
    { question: "What does 'Ctrl+Space' do?", options: ["Apply character formatting", "Insert space", "Remove spaces","Clear character formatting"], correctAnswer: 3 },
    { question: "To create a bullet list, what do you use?", options: ["Insert > Bullets","Home > Bullets", "Review > Bullets", "Layout > Bullets"], correctAnswer: 1 },
    { question: "What is the use of 'Page Setup'?", options: ["Set page sizes", "Adjust margins", "Change orientation", "All of the above"], correctAnswer: 3 },
    { question: "To highlight text, which tool do you use?", options: ["Font Color", "Text Highlight Color", "Shading", "Background Color"], correctAnswer: 1 },
    { question: "What is the purpose of 'Word Count' feature?", options: ["Count characters", "Count words", "Count lines", "All of the above"], correctAnswer: 3 },
    { question: "To change the theme of a document, which tab do you visit?", options: ["Design", "Layout", "View", "Home"], correctAnswer: 0 },
    { question: "What does 'Ctrl+Shift+N' do?", options: ["Open new document", "Create a new folder", "Insert page break", "New style"], correctAnswer: 3 }


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