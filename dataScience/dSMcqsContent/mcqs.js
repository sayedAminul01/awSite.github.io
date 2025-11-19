// Questions array from the original file
const questions = [
{
    question: "What is Data Science?",
    options: [
        "A field about painting data",
        "A study of stars and planets",
        "A field that extracts insights from data using math, statistics, and programming",
        "A method to design websites"
    ],
    correctAnswer: 2
},
{
    question: "Which simple definition best describes Data Science?",
    options: [
        "A way to delete unwanted files",
        "The process of collecting, cleaning, analyzing, and interpreting data to make decisions",
        "A method to create animations",
        "A process to format computers"
    ],
    correctAnswer: 1
},
{
    question: "Why is Data Science important today?",
    options: [
        "Because data does not exist anywhere",
        "Because companies dislike using data",
        "Because data is everywhere and helps in making decisions",
        "Because it replaces mobile apps"
    ],
    correctAnswer: 2
},
{
    question: "Which of the following is a key step in Data Science?",
    options: [
        "Data dancing",
        "Data singing",
        "Data Collection",
        "Data printing"
    ],
    correctAnswer: 2
},
{
    question: "What takes up around 80% of a data scientist’s time?",
    options: [
        "Data Collection",
        "Data Cleaning",
        "Model Deployment",
        "Preparing presentations"
    ],
    correctAnswer: 1
},
{
    question: "What is Data Analysis?",
    options: [
        "Using statistical methods to find patterns and insights",
        "Installing apps on a computer",
        "Deleting corrupted files",
        "Designing social media posts"
    ],
    correctAnswer: 0
},
{
    question: "What is the purpose of Model Building in Data Science?",
    options: [
        "To make predictions using machine learning",
        "To build houses and structures",
        "To create 3D models",
        "To decorate websites"
    ],
    correctAnswer: 0
},
{
    question: "Where is Data Science used in entertainment?",
    options: [
        "Choosing the color of TV remotes",
        "Content recommendations on YouTube and Netflix",
        "Making cartoon characters talk",
        "Selecting songs randomly"
    ],
    correctAnswer: 1
},
{
    question: "Which of the following is an example of Data Science in finance?",
    options: [
        "Detecting fraudulent transactions",
        "Decorating office spaces",
        "Creating bank logos",
        "Printing bank passbooks"
    ],
    correctAnswer: 0
},
{
    question: "Which device category can be a source of data?",
    options: [
        "IoT devices",
        "Chalkboards",
        "Carpets",
        "Shoes"
    ],
    correctAnswer: 0
},
{
    question: "Why should you care about Data Science?",
    options: [
        "It is not useful for any industry",
        "It has high demand, great pay, and future scope",
        "It only works on old computers",
        "It is only used for gaming"
    ],
    correctAnswer: 1
},
{
    question: "Which of the following industries uses Data Science?",
    options: [
        "Healthcare",
        "Toy-making only",
        "Oil painting",
        "Only education"
    ],
    correctAnswer: 0
},
{
    question: "What is the role of Interpretation & Communication in Data Science?",
    options: [
        "To confuse people",
        "To present findings clearly for decision-making",
        "To translate languages",
        "To write novels"
    ],
    correctAnswer: 1
},
{
    question: "What is an example of Data Science in e-commerce?",
    options: [
        "Writing product reviews manually",
        "Personalized product recommendations",
        "Delivering products door-to-door",
        "Printing shipping labels"
    ],
    correctAnswer: 1
},
{
    question: "What is the average salary of a data scientist in India for experienced professionals?",
    options: [
        "₹1-2 LPA",
        "₹3-5 LPA",
        "₹10-30 LPA",
        "₹1 crore"
    ],
    correctAnswer: 2
}

];

// Motivational quotes for different grade levels
const motivationalQuotes = {
    A: [
    "Excellence comes from attitude—great job!",
    "Big achievements come from strong commitment. Well done!",
    "Your grasp of core data science concepts is impressive.",
    "Your ideas and understanding show real depth. Keep it up!",
    "Your success inspires others. Fantastic work!"
]
,
    B: [
    "Every expert starts as a beginner. You're progressing well!",
    "Growth comes from learning, and you're proving that daily.",
    "Small consistent efforts lead to big success. Great going!",
    "Knowledge is power—you're gaining more every day!",
    "A little extra effort makes you extraordinary. Keep pushing!"
]
,
    C: [
    "Every pro was once a beginner. Your journey is just starting.",
    "Success follows hard work—keep giving your best!",
    "Falling is normal; rising makes you stronger. Keep rising!",
    "Improvement every day matters more than perfection.",
    "Don’t worry about time—stay consistent and keep moving."
]
,
    D: [
    "Learning is yours forever—every step counts.",
    "Effort matters more than perfection. Keep trying!",
    "Showing up is courage. You did that—keep going.",
    "Success isn’t final; failure isn’t the end. Continue forward.",
    "Mistakes teach us—learn from this and move ahead."
]
};

// Variables
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timeLeft = 2400; // 40 minutes in seconds
let timerInterval;
let userName = "";

// DOM Elements
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
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const submitResultBtn = document.getElementById('submit-result');

// Event Listeners
document.getElementById('start-button').addEventListener('click', startQuiz);
document.getElementById('restart-button').addEventListener('click', restartQuiz);
themeToggleBtn.addEventListener('click', toggleTheme);
submitResultBtn.addEventListener('click', submitResultToWhatsApp);

// Check for saved theme preference or set default
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.className = savedTheme;
}

// Toggle between light and dark themes
function toggleTheme() {
    const currentTheme = document.documentElement.className;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
    
    // Add animation effect
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 500);
}

// Start the quiz
function startQuiz() {
    userName = userNameInput.value.trim();
    if (userName === "") {
        // Animated shake effect for invalid input
        userNameInput.classList.add('shake-animation');
        setTimeout(() => {
            userNameInput.classList.remove('shake-animation');
        }, 500);
        
        // Show error message
        const errorMsg = document.createElement('p');
        errorMsg.textContent = "Please enter your name to continue";
        errorMsg.className = "error-message";
        
        // Remove any existing error message
        const existingError = document.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        userNameInput.parentNode.appendChild(errorMsg);
        return;
    }
    
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    userNameDisplay.textContent = userName;
    displayQuestion();
    startTimer();
}

// Display the current question
function displayQuestion() {
    const question = questions[currentQuestion];
    
    let html = `
        <div class="question-container">
            <h2 class="question-text">${currentQuestion + 1}. ${question.question}</h2>
            <div class="options">
    `;

    question.options.forEach((option, index) => {
        html += `
            <div class="option" data-index="${index}">
                ${option}
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    quizContainer.innerHTML = html;

    // Add event listeners to options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', handleAnswer);
    });

    // Update progress
    currentQuestionElement.textContent = currentQuestion + 1;
    progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
}

// Handle user's answer selection
function handleAnswer(e) {
    const selectedOption = e.target;
    const options = document.querySelectorAll('.option');
    
    // Disable all options to prevent multiple selections
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    const selectedAnswer = parseInt(selectedOption.dataset.index);
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
        selectedOption.classList.add('correct');
        
        // Add success sound effect
        playSound('correct');
    } else {
        incorrectAnswers++;
        selectedOption.classList.add('incorrect');
        options[correctAnswer].classList.add('correct');
        
        // Add error sound effect
        playSound('incorrect');
    }

    // Proceed to next question after delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

// Play sound effects
function playSound(type) {
    // This is a placeholder. You could implement actual sound effects
    // by creating audio elements and playing them
    console.log(`Playing ${type} sound`);
}

// Calculate the grade based on percentage
function calculateGrade(percentage) {
    if (percentage >= 80) return 'A';
    if (percentage >= 60) return 'B';
    if (percentage >= 40) return 'C';
    return 'D';
}

// Calculate percentage score with positive and negative marking
function calculatePercentage() {
    const totalQuestions = questions.length;
    const positiveMarks = correctAnswers * 4; // 4 marks for each correct answer
    const negativeMarks = incorrectAnswers * 1; // 1 negative mark for each incorrect answer
    const totalMarks = positiveMarks - negativeMarks;
    const maxMarks = totalQuestions * 4;
    const percentage = (totalMarks / maxMarks) * 100;
    
    // Ensure percentage is not negative
    return Math.max(0, percentage);
}

// Set motivational message based on percentage
function getMotivationalQuoteByPercentage(percentage) {
    let quotes;
    if (percentage >= 80) {
        quotes = motivationalQuotes.A; // Use quotes for grade A
    } else if (percentage >= 60) {
        quotes = motivationalQuotes.B; // Use quotes for grade B
    } else if (percentage >= 40) {
        quotes = motivationalQuotes.C; // Use quotes for grade C
    } else {
        quotes = motivationalQuotes.D; // Use quotes for grade D
    }

    // Select a random quote from the appropriate category
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Show the results screen
function showResults() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    resultName.textContent = userName;
    
    // Calculate results
    const percentage = calculatePercentage();
    
    // Set hidden result values (to be sent to WhatsApp)
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('incorrect-answers').textContent = incorrectAnswers;
    document.getElementById('percentage').textContent = percentage.toFixed(2);

    // Set motivational message based on percentage
    const quote = getMotivationalQuoteByPercentage(percentage);
    motivationMessage.textContent = quote;
}
// Submit results to WhatsApp
function submitResultToWhatsApp() {
    const phoneNumber = "9365489154";
    const name = userName;
    const correctAns = correctAnswers;
    const incorrectAns = incorrectAnswers;
    const percentage = document.getElementById('percentage').textContent;
    
    const message = `*Alien Institute ADCA Test Results*%0A
Name: ${name}%0A
Correct Answers: ${correctAns}%0A
Incorrect Answers: ${incorrectAns}%0A
Percentage: ${percentage}%25`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
}

// Reset and restart the quiz
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

// Start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        // Add visual indicators when time is running low
        if (timeLeft <= 300) { // Last 5 minutes
            timerElement.style.color = '#f59e0b';
        }
        
        if (timeLeft <= 60) { // Last minute
            timerElement.style.color = '#ef4444';
            timerElement.classList.add('pulse-fast');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

// Update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}