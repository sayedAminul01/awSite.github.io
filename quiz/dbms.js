const questions = [
    { question: "What does DBMS stand for?", options: ["Database Management System", "Data Management System", "Database Mainframe System", "Data Binary Management System"], correctAnswer: 0 },
    { question: "Which of the following is not a type of database?", options: ["Relational", "Hierarchical", "Network", "String"], correctAnswer: 3 },
    { question: "In DBMS, what does SQL stand for?", options: ["Secure Query Language", "Simple Query Language", "System Query Language","Structured Query Language"], correctAnswer: 3 },
    { question: "Which type of key uniquely identifies each record in a table?", options: ["Foreign Key", "Candidate Key","Primary Key", "Composite Key"], correctAnswer: 2 },
    { question: "Which database model uses parent-child relationships?", options: ["Relational","Hierarchical", "Object-Oriented", "Network"], correctAnswer: 1 },
    { question: "What is the purpose of a Foreign Key?", options: ["To identify unique records", "To establish relationships between tables", "To index the table", "To sort data"], correctAnswer: 1 },
    { question: "Which of these operations is not part of CRUD?", options: ["Create", "Update", "Remove", "Delete"], correctAnswer: 2 },
    { question: "What does DDL stand for?", options: ["Database Design Language", "Data Directory Language", "Direct Database Language","Data Definition Language"], correctAnswer: 3 },
    { question: "Which command is used to delete all records from a table?", options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"], correctAnswer: 3 },
    { question: "What is a tuple in DBMS?", options: ["A column in a table", "A single row in a table", "A database schema", "A relationship between tables"], correctAnswer: 1 },
    { question: "Which of the following is not a type of SQL statement?", options: ["DCL", "DLL", "DML", "DQL"], correctAnswer: 1 },
    { question: "What does ACID stand for in databases?", options: ["Atomicity, Consistency, Isolation, Durability", "Atomicity, Connectivity, Isolation, Data", "Array, Consistency, Isolation, Database", "Atomicity, Consistency, Interaction, Durability"], correctAnswer: 0 },
    { question: "In which of these models is data organized in a tree structure?", options: ["Relational", "Object-Oriented","Hierarchical",  "Entity-Relationship"], correctAnswer: 2 },
    { question: "Which SQL keyword is used to sort data in ascending or descending order?", options: ["SORT","ORDER BY", "ARRANGE", "GROUP BY"], correctAnswer: 1 },
    { question: "Which SQL clause is used to filter records?", options: ["FILTER", "LIMIT","WHERE", "SORT"], correctAnswer: 2 },
    { question: "What is the purpose of normalization in databases?", options: ["To increase redundancy", "To create backup", "To optimize queries","To reduce redundancy" ], correctAnswer: 3 },
    { question: "Which of the following normal forms aims to eliminate transitive dependencies?", options: ["1NF", "2NF", "3NF", "BCNF"], correctAnswer: 2 },
    { question: "What does the SQL command 'JOIN' do?", options: ["Combines data from multiple tables", "Deletes data from a table", "Creates a new database", "Sorts data in a table"], correctAnswer: 0 },
    { question: "Which type of join returns only matching rows from both tables?", options: ["LEFT JOIN", "RIGHT JOIN","INNER JOIN", "OUTER JOIN"], correctAnswer: 2 },
    { question: "Which SQL function is used to get the current date?", options: ["NOW()", "GETDATE()", "CURRENT_DATE", "DATE()"], correctAnswer: 2 },
    { question: "What does the UNIQUE constraint ensure?", options: ["All values are the same", "All values are indexed", "All values are foreign keys","All values are different"], correctAnswer: 3 },
    { question: "Which SQL command is used to create a new table?", options: ["NEW TABLE", "INSERT TABLE", "MAKE TABLE","CREATE TABLE"], correctAnswer: 3 },
    { question: "Which term is used for columns in a database table?", options: ["Rows", "Fields", "Entries","Attributes"], correctAnswer: 3 },
    { question: "What is an index used for in a database?", options: ["To delete data","To speed up retrieval", "To manage transactions", "To perform joins"], correctAnswer: 1 },
    { question: "Which of the following is a popular open-source RDBMS?", options: ["MS Access", "Oracle","MySQL",  "Sybase"], correctAnswer: 2 },
    { question: "Which of the following is an example of a database management system?", options: ["Oracle", "Excel", "Notepad", "PowerPoint"], correctAnswer: 0 },
    { question: "Which command is used to permanently remove a table from a database?", options: ["DELETE","DROP", "REMOVE", "CLEAR"], correctAnswer: 1 },
    { question: "Which SQL clause is used to limit the number of records returned?", options: ["LIMIT", "REDUCE", "FILTER", "SORT"], correctAnswer: 0 },
    { question: "Which command is used to add new data into a database table?", options: ["UPDATE","INSERT", "ADD", "SELECT"], correctAnswer: 1 },
    { question: "In SQL, which clause is used to group rows that have the same values?", options: ["ORDER BY", "SORT","GROUP BY", "JOIN"], correctAnswer: 2 },
    { question: "Which of these is a NoSQL database?", options: ["Oracle", "PostgreSQL", "SQL Server","MongoDB"], correctAnswer: 3 },
    { question: "What does 'DDL' stand for?", options: ["Data Description Language","Data Definition Language", "Data Delete Language", "Data Defining Language"], correctAnswer: 1 },
    { question: "Which SQL command is used to modify existing data in a table?", options: ["INSERT", "MODIFY","UPDATE", "ALTER"], correctAnswer: 2 },
    { question: "Which command is used to undo a transaction in SQL?", options: ["UNDO", "ROLLBACK","CANCEL", "DELETE"], correctAnswer: 1 },
    { question: "What is a schema in a database?", options: ["A query language", "A command in SQL", "A type of data"], correctAnswer: 0 },
    { question: "In a relational database, what does each table represent?", options: ["An entity", "A function", "A schema", "A relationship"], correctAnswer: 0 },
    { question: "What is a record in a database?", options: ["A column in a table","A row in a table",  "A table", "A database"], correctAnswer: 1 },
    { question: "Which command is used to create a new database in SQL?", options: ["NEW DATABASE", "MAKE DATABASE", "CREATE DATABASE", "ADD DATABASE"], correctAnswer: 2 },
    { question: "What is a transaction in the context of DBMS?", options: ["A type of database","A sequence of operations", "A backup process", "A form of normalization"], correctAnswer: 1 },
    { question: "Which type of SQL command is SELECT?", options: ["DML","DQL", "DDL", "DCL"], correctAnswer: 1 },
    { question: "Which type of database uses tables, rows, and columns?", options: ["Hierarchical", "Object-oriented","Relational",  "Network"], correctAnswer: 2 },
    { question: "Which command in SQL is used to delete a database?", options: ["REMOVE DATABASE", "DROP DATABASE", "DELETE DATABASE", "CLEAR DATABASE"], correctAnswer: 1 },
    { question: "Which of these is a characteristic of NoSQL databases?", options: ["Tabular structure", "Fixed schema", "SQL-based","Schema-less"], correctAnswer: 3 },
    { question: "In SQL, what does the HAVING clause do?", options: ["Filters groups", "Filters individual rows", "Sorts data", "Limits data"], correctAnswer: 0 },
    { question: "Which command is used to grant privileges in SQL?", options: [ "ALLOW","GRANT", "PERMIT", "GIVE"], correctAnswer: 1 },
    { question: "Which keyword is used to remove duplicate records?", options: [ "UNIQUE", "REMOVE","DISTINCT", "DELETE"], correctAnswer: 2 },
    { question: "Which function returns the total number of rows?", options: ["COUNT()", "SUM()", "TOTAL()", "NUMBER()"], correctAnswer: 0 },
    { question: "What is a primary function of a DBMS?", options: ["Image processing", "Video streaming", "Data encryption only","Data storage and retrieval"], correctAnswer: 3 },
    { question: "Which of these is a property of relational databases?", options: ["Hierarchical structure","Relationships between tables", "Schema-less structure", "Data redundancy"], correctAnswer: 1 },
    { question: "In a relational model, rows are also called?", options: ["Attributes", "Cells", "Entities","Tuples"], correctAnswer: 3 },
    { question: "Which SQL keyword is used to add constraints?", options: ["LIMIT", "CONDITION","CONSTRAINT", "CHECK"], correctAnswer: 2 },
    { question: "What is the use of the SQL 'ALTER TABLE' command?", options: ["To modify a table structure", "To add data", "To delete records", "To backup data"], correctAnswer: 0 },

    { question: "What is a database?", options: ["A type of network", "A programming language", "An operating system","A collection of data"], correctAnswer: 3 },
    { question: "Which key is used to uniquely identify each record in a table?", options: ["Secondary Key", "Alternate Key","Primary Key", "Composite Key"], correctAnswer: 2},
    { question: "Which SQL keyword is used to remove records from a table?", options: ["REMOVE", "DELETE", "CLEAR", "DROP"], correctAnswer: 1 },
    { question: "What does DCL stand for in DBMS?", options: ["Database Control Language","Data Control Language",  "Data Collection Language", "Direct Control Language"], correctAnswer: 1 },
    { question: "Which language is used to interact with a database?", options: ["HTML", "CSS", "JavaScript","SQL"], correctAnswer: 3 },
    { question: "Which SQL keyword is used to change data in a table?", options: ["MODIFY", "CHANGE", "ALTER","UPDATE"], correctAnswer: 3 },
    { question: "In a DBMS, what is a view?", options: ["A backup", "A virtual table","A physical table", "A schema"], correctAnswer: 1 },
    { question: "What type of join returns all records from the left table and matching records from the right?", options: ["RIGHT JOIN", "INNER JOIN","LEFT JOIN",  "OUTER JOIN"], correctAnswer: 2 },
    { question: "Which of the following is a function of a database administrator?", options: ["Software development","Data backup",  "Network design", "Hardware maintenance"], correctAnswer: 1 },
    { question: "Which SQL statement is used to fetch data from a database?", options: ["FETCH", "SELECT","GET", "RETRIEVE"], correctAnswer: 1},
    { question: "In relational databases, what is a foreign key?", options: ["An alternative key", "A unique key", "A composite key","A reference to a primary key"], correctAnswer: 3},
    { question: "What does the SQL command COMMIT do?", options: ["Saves transaction changes", "Reverts changes", "Deletes records", "Sorts data"], correctAnswer: 0 },
    { question: "Which of these is used to describe the structure of a database?", options: ["Tuple", "Schema", "Key", "Attribute"], correctAnswer: 1 },
    { question: "What does RDBMS stand for?", options: ["Relational Database Management System", "Random Database Management System", "Remote Database Management System", "Rapid Database Management System"], correctAnswer: 0 },
    { question: "What does SQL 'GROUP BY' clause do?", options: ["Sorts data", "Deletes records","Groups rows with similar values", "Updates records"], correctAnswer: 2 },
    { question: "Which SQL keyword is used to retrieve unique records?", options: ["DISTINCT", "UNIQUE", "SINGLE", "LIMIT"], correctAnswer: 0 },
    { question: "What is the purpose of the 'ORDER BY' clause?", options: ["To sort results", "To delete records", "To join tables", "To filter records"], correctAnswer: 0 },
    { question: "Which of the following is a characteristic of a primary key?", options: ["It can be null", "It is redundant", "It is optional","It is unique"], correctAnswer: 3 },
    { question: "Which constraint ensures that no duplicate values are inserted in a column?", options: ["DEFAULT", "UNIQUE","FOREIGN KEY", "PRIMARY KEY"], correctAnswer: 1 },
    { question: "In a database, what is a 'NULL' value?", options: ["A zero value", "A duplicate value", "A missing or undefined value", "An error value"], correctAnswer: 2 },
    { question: "Which command in SQL removes all rows without deleting the table structure?", options: ["DELETE","TRUNCATE",  "DROP", "REMOVE"], correctAnswer: 1 },
    { question: "What does 'IS NOT NULL' check in SQL?", options: ["That a column has values", "That a column is empty", "That a column has a default value", "That a column has zero"], correctAnswer: 0 },
    { question: "What is a database transaction?", options: [ "A backup process", "An SQL command","A sequence of operations treated as a single unit", "A type of table"], correctAnswer: 2 },
    { question: "Which SQL statement is used to delete a table structure?", options: ["DELETE TABLE", "CLEAR TABLE", "DROP TABLE", "TRUNCATE TABLE"], correctAnswer: 2 },
    { question: "In a relational database, what is an entity?", options: ["A distinct object", "A type of database", "A SQL command", "A form of schema"], correctAnswer: 0 },
    { question: "Which of the following is NOT a NoSQL database?", options: ["MongoDB", "Cassandra","MySQL",  "CouchDB"], correctAnswer: 2},
    { question: "What does the term 'redundancy' mean in a database?", options: ["Unique data", "Duplicate data", "Indexed data", "Primary data"], correctAnswer: 1 },
    { question: "Which of these is a data manipulation language command?", options: ["CREATE", "ALTER", "GRANT","INSERT"], correctAnswer: 3 },
    { question: "What is data integrity?", options: ["Speed of retrieval","Accuracy and consistency of data", "Redundancy of data", "Size of data"], correctAnswer: 1 },
    { question: "What is the purpose of an ER diagram?", options: ["To execute SQL commands", "To program in SQL","To visually represent database structure",  "To backup databases"], correctAnswer: 2 },
    { question: "Which of these is a common NoSQL database model?", options: ["Tuple", "Entity", "Table","Document"], correctAnswer: 3 },
    { question: "What is the purpose of a composite key?", options: ["To create a backup", "To speed up queries", "To manage transactions","To uniquely identify records using multiple columns" ], correctAnswer: 3 },
    { question: "Which type of join returns all rows when there is a match in either table?", options: ["FULL OUTER JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN"], correctAnswer: 0 },
    { question: "What does the SQL constraint CHECK do?", options: ["Sets a default value", "Ensures a condition is true", "Ensures uniqueness", "Creates a relationship"], correctAnswer: 1 },
    { question: "What is a stored procedure?", options: ["A temporary table", "An SQL view","A precompiled set of SQL commands",  "A join operation"], correctAnswer: 2 },
    { question: "Which SQL function finds the minimum value?", options: ["LOWEST()","MIN()",  "SMALL()", "LIMIT()"], correctAnswer: 1 },
    { question: "Which SQL clause is used to rename a table?", options: ["MODIFY","RENAME",  "CHANGE", "ALTER"], correctAnswer: 1 },
    { question: "What is a clustered index?", options: ["An index on foreign key", "A temporary index", "A primary index on a table", "A unique index only"], correctAnswer: 2},
    { question: "What is an attribute in a database?", options: ["A row in a table","A column in a table", "A table itself", "A constraint"], correctAnswer: 1 },
    { question: "Which constraint restricts values in a column based on a condition?", options: ["CHECK", "UNIQUE", "PRIMARY KEY", "NOT NULL"], correctAnswer: 0 },
    { question: "Which SQL function is used to find the average of a column?", options: ["SUM()", "MEAN()", "COUNT()","AVG()"], correctAnswer: 3 },
    { question: "What is the purpose of the 'UNION' operator in SQL?", options: ["Updates records","Combines results of two SELECT statements", "Deletes records", "Sorts records"], correctAnswer: 1 },
    { question: "Which command in SQL creates an index?", options: ["CREATE INDEX", "INDEX CREATE", "ADD INDEX", "MAKE INDEX"], correctAnswer: 0 },
    { question: "Which of the following is a distributed NoSQL database?", options: ["MySQL", "Oracle", "Cassandra", "SQL Server"], correctAnswer: 2 },
    { question: "What is the purpose of the 'EXISTS' clause in SQL?", options: ["Checks if a subquery returns any rows", "Sorts records", "Deletes records", "Joins tables"], correctAnswer: 0 },
    { question: "Which SQL keyword is used to combine results from multiple queries?", options: ["JOIN", "MERGE","UNION",  "LINK"], correctAnswer: 2 },
    { question: "Which SQL function counts the number of non-null rows?", options: ["COUNT()", "SUM()", "LIST()", "TOTAL()"], correctAnswer: 0 },
    { question: "What is an E-R model?", options: ["Entity-Relational model", "Entry-Relationship model", "Entity-Referential model","Entity-Relationship model"], correctAnswer: 3},
    // { question: "What is the role of a foreign key?", options: ["To link tables", "To provide uniqueness", "To backup data", "To create views"], correctAnswer: 0 },
    // { question: "Which of the following is not a function in SQL?", options: ["REMOVE()", "COUNT()", "AVG()", "SUM()"], correctAnswer: 0 }
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