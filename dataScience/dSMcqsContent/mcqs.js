/* Quiz App - loads MCQs from test.txt, falls back to embedded bank if fetch fails.
   Sends results to WhatsApp (no backend needed). Keeps existing design. */

let questionBank = [];

// Embedded fallback copied from test.txt so it also works from file:// or if fetch fails
const fallbackQuestionBank = [
    {
        question: "What is Data Science?",
        options: [
            "A field about painting data",
            "A study of stars and planets",
            "A field that extracts insights from data using math, statistics, and programming",
            "A method to design websites"
        ],
        correctAnswer: "A field that extracts insights from data using math, statistics, and programming"
    },
    {
        question: "Which simple definition best describes Data Science?",
        options: [
            "A way to delete unwanted files",
            "The process of collecting, cleaning, analyzing, and interpreting data to make decisions",
            "A method to create animations",
            "A process to format computers"
        ],
        correctAnswer: "The process of collecting, cleaning, analyzing, and interpreting data to make decisions"
    },
    {
        question: "Why is Data Science important today?",
        options: [
            "Because data does not exist anywhere",
            "Because companies dislike using data",
            "Because data is everywhere and helps in making decisions",
            "Because it replaces mobile apps"
        ],
        correctAnswer: "Because data is everywhere and helps in making decisions"
    },
    {
        question: "Which of the following is a key step in Data Science?",
        options: [
            "Data dancing",
            "Data singing",
            "Data Collection",
            "Data printing"
        ],
        correctAnswer: "Data Collection"
    },
    {
        question: "What takes up around 80% of a data scientist’s time?",
        options: [
            "Data Collection",
            "Data Cleaning",
            "Model Deployment",
            "Preparing presentations"
        ],
        correctAnswer: "Data Cleaning"
    },
    {
        question: "What is Data Analysis?",
        options: [
            "Using statistical methods to find patterns and insights",
            "Installing apps on a computer",
            "Deleting corrupted files",
            "Designing social media posts"
        ],
        correctAnswer: "Using statistical methods to find patterns and insights"
    },
    {
        question: "What is the purpose of Model Building in Data Science?",
        options: [
            "To make predictions using machine learning",
            "To build houses and structures",
            "To create 3D models",
            "To decorate websites"
        ],
        correctAnswer: "To make predictions using machine learning"
    },
    {
        question: "Where is Data Science used in entertainment?",
        options: [
            "Choosing the color of TV remotes",
            "Content recommendations on YouTube and Netflix",
            "Making cartoon characters talk",
            "Selecting songs randomly"
        ],
        correctAnswer: "Content recommendations on YouTube and Netflix"
    },
    {
        question: "Which of the following is an example of Data Science in finance?",
        options: [
            "Detecting fraudulent transactions",
            "Decorating office spaces",
            "Creating bank logos",
            "Printing bank passbooks"
        ],
        correctAnswer: "Detecting fraudulent transactions"
    },
    {
        question: "Which device category can be a source of data?",
        options: [
            "IoT devices",
            "Chalkboards",
            "Carpets",
            "Shoes"
        ],
        correctAnswer: "IoT devices"
    },
    {
        question: "Why should you care about Data Science?",
        options: [
            "It is not useful for any industry",
            "It has high demand, great pay, and future scope",
            "It only works on old computers",
            "It is only used for gaming"
        ],
        correctAnswer: "It has high demand, great pay, and future scope"
    },
    {
        question: "Which of the following industries uses Data Science?",
        options: [
            "Healthcare",
            "Toy-making only",
            "Oil painting",
            "Only education"
        ],
        correctAnswer: "Healthcare"
    },
    {
        question: "What is the role of Interpretation & Communication in Data Science?",
        options: [
            "To confuse people",
            "To present findings clearly for decision-making",
            "To translate languages",
            "To write novels"
        ],
        correctAnswer: "To present findings clearly for decision-making"
    },
    {
        question: "What is an example of Data Science in e-commerce?",
        options: [
            "Writing product reviews manually",
            "Personalized product recommendations",
            "Delivering products door-to-door",
            "Printing shipping labels"
        ],
        correctAnswer: "Personalized product recommendations"
    },

    {
        question: "What is the first step in a typical Data Science workflow?",
        options: [
            "Data Collection",
            "Model Deployment",
            "Feature Tuning",
            "Presentation Design"
        ],
        correctAnswer: "Data Collection"
    },
    {
        question: "What does 'cleaning data' usually involve?",
        options: [
            "Adding more errors",
            "Removing noise, fixing missing values, and correcting errors",
            "Deleting all data",
            "Turning data into images"
        ],
        correctAnswer: "Removing noise, fixing missing values, and correcting errors"
    },
    {
        question: "Which programming language is widely used in Data Science?",
        options: [
            "Python",
            "HTML",
            "CSS",
            "Scratch"
        ],
        correctAnswer: "Python"
    },
    {
        question: "What is machine learning mainly used for in Data Science?",
        options: [
            "Making predictions and finding patterns",
            "Cleaning computer screens",
            "Designing buildings",
            "Drawing cartoons"
        ],
        correctAnswer: "Making predictions and finding patterns"
    },
    {
        question: "Why do companies collect user data?",
        options: [
            "To make random decisions",
            "To improve products and personalize experience",
            "To increase storage costs",
            "To delete it later"
        ],
        correctAnswer: "To improve products and personalize experience"
    },
    {
        question: "Which example represents predictive analytics?",
        options: [
            "Forecasting tomorrow's weather",
            "Counting total website visitors",
            "Sorting a list alphabetically",
            "Measuring table height"
        ],
        correctAnswer: "Forecasting tomorrow's weather"
    },
    {
        question: "Which tool is commonly used for data visualization?",
        options: [
            "PowerPoint",
            "Matplotlib",
            "Notepad",
            "Paint"
        ],
        correctAnswer: "Matplotlib"
    },
    {
        question: "What does 'domain knowledge' mean in Data Science?",
        options: [
            "Knowing how to cook",
            "Understanding the specific field you're analyzing",
            "Learning new languages",
            "Downloading random apps"
        ],
        correctAnswer: "Understanding the specific field you're analyzing"
    },
    {
        question: "What is Big Data?",
        options: [
            "A small Excel file",
            "Data too large and complex for traditional tools",
            "Images stored on a phone",
            "Only video files"
        ],
        correctAnswer: "Data too large and complex for traditional tools"
    },
    {
        question: "Which of the following is an example of classification in machine learning?",
        options: [
            "Predicting whether an email is spam or not",
            "Calculating average age of users",
            "Sorting items by price",
            "Counting number of customers"
        ],
        correctAnswer: "Predicting whether an email is spam or not"
    },
    {
        question: "What is the main purpose of data visualization?",
        options: [
            "Make data easier to understand using charts and graphs",
            "Encrypt data",
            "Delete useless files",
            "Convert data into music"
        ],
        correctAnswer: "Make data easier to understand using charts and graphs"
    },
    {
        question: "Which of these is an example of unsupervised learning?",
        options: [
            "Grouping customers based on buying patterns",
            "Predicting exam marks",
            "Detecting fraud in transactions",
            "Forecasting stock prices"
        ],
        correctAnswer: "Grouping customers based on buying patterns"
    },
    {
        question: "What is the purpose of a dataset?",
        options: [
            "To store organized data that can be analyzed",
            "To delete unnecessary files",
            "To print documents",
            "To reduce computer speed"
        ],
        correctAnswer: "To store organized data that can be analyzed"
    },
    {
        question: "Why is data visualization important in communication?",
        options: [
            "It confuses people",
            "It helps present insights clearly and quickly",
            "It makes reports longer",
            "It hides mistakes"
        ],
        correctAnswer: "It helps present insights clearly and quickly"
    },
    {
        question: "Which is an example of Data Science in healthcare?",
        options: [
            "Coloring X-ray reports",
            "Predicting disease risks using patient data",
            "Making hospital posters",
            "Arranging chairs in hospitals"
        ],
        correctAnswer: "Predicting disease risks using patient data"
    },
   
    {
        question: "What is the average salary of a data scientist in India for experienced professionals?",
        options: [
            "₹1-2 LPA",
            "₹3-5 LPA",
            "₹10-30 LPA",
            "₹1 crore"
        ],
        correctAnswer: "₹10-30 LPA"
    }
];


class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 50;
        this.timer = 0;
        this.timerInterval = null;
        this.userDetails = {};
        this.loadQuestions();
    }

    async loadQuestions() {
        try {
            const res = await fetch('test.txt', { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const text = await res.text();
            const data = JSON.parse(text);
            if (!Array.isArray(data) || data.length === 0) throw new Error('Invalid question data');
            questionBank = data;
            console.log('Loaded MCQs from test.txt:', questionBank.length);
        } catch (err) {
            console.warn('Failed to load test.txt, using embedded fallback MCQs.', err);
            questionBank = fallbackQuestionBank;
        }
        this.registerEventListeners();
    }

    registerEventListeners() {
        const form = document.getElementById('registrationForm');
        if (form) form.addEventListener('submit', this.startQuiz.bind(this));
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

        this.userDetails = {
            name: document.getElementById('fullName').value.trim(),
            email: document.getElementById('emailAddress').value.trim(),
            phone: document.getElementById('phoneNumber').value.trim()
        };

        if (!Array.isArray(questionBank) || questionBank.length === 0) {
            alert('Question bank is empty.');
            return;
        }

        this.totalQuestions = questionBank.length;

        this.questions = this.shuffleArray([...questionBank]).slice(0, this.totalQuestions);

        document.getElementById('registrationSection').style.display = 'none';
        document.getElementById('quizSection').style.display = 'block';

        this.startTimer();
        this.loadQuestion();
    }

    startTimer() {
        const timerElement = document.getElementById('timer');
        let remainingTime = 60 * 60;

        this.timerInterval = setInterval(() => {
            remainingTime--;

            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            this.timer = (60 * 60) - remainingTime;

            if (remainingTime <= 0) {
                clearInterval(this.timerInterval);
                this.endQuiz();
            }
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
        const allOptions = optionsContainer.querySelectorAll('.option');

        let isCorrect = selectedElement.textContent === currentQuestion.correctAnswer;

        allOptions.forEach(el => {
            el.style.pointerEvents = 'none';
            
            if (el.textContent === currentQuestion.correctAnswer) {
                el.classList.add('correct');
            } else if (el === selectedElement && !isCorrect) {
                el.classList.add('incorrect');
            }
        });

        if (isCorrect) {
            this.correctAnswers++;
            selectedElement.classList.add('selected');
        }

        setTimeout(() => {
            this.currentQuestionIndex++;
            this.loadQuestion();
        }, 1000);
    }

    endQuiz() {
        clearInterval(this.timerInterval);
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('completionSection').style.display = 'block';

        const percentage = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        let grade = '';

        if (percentage >= 90) grade = 'A+';
        else if (percentage >= 75) grade = 'A';
        else if (percentage >= 60) grade = 'B';
        else if (percentage >= 50) grade = 'C';
        else grade = 'D';

        const message =
            `Alien Institute of Computer
Name: ${this.userDetails.name}
Phone: ${this.userDetails.phone}
Email: ${this.userDetails.email}
Total Questions: ${this.totalQuestions}
Correct Answers: ${'507'+this.correctAnswers+'97852432'}
Percentage: +${'5039'+percentage + '375480356'}%
Grade: ${'DABCDB' + grade+'ADBACBA'}
Time Taken: ${Math.floor(this.timer / 60)} min ${this.timer % 60} sec`;

        const subject = encodeURIComponent("Internship Final Test - Alien Institute of Computer");
        const body = encodeURIComponent(message);
        const mailtoURL = `mailto:hellowsupprt@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoURL, '_blank');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});

