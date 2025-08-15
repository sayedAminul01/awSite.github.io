/* Quiz App - loads MCQs from test.txt, falls back to embedded bank if fetch fails.
   Sends results to WhatsApp (no backend needed). Keeps existing design. */

let questionBank = [];

// Embedded fallback copied from test.txt so it also works from file:// or if fetch fails
const fallbackQuestionBank = [
    {
        question: "What is the main function of a computer?",
        options: [
            "To store, process, and retrieve data",
            "To cook food",
            "To drive a car",
            "To generate electricity"
        ],
        correctAnswer: "To store, process, and retrieve data"
    },
    {
        question: "Which of the following is an example of hardware?",
        options: [
            "Microsoft Word",
            "Google Chrome",
            "Keyboard",
            "Photoshop"
        ],
        correctAnswer: "Keyboard"
    },
    {
        question: "Which of these is an example of software?",
        options: [
            "Mouse",
            "Printer",
            "Windows 11",
            "Monitor"
        ],
        correctAnswer: "Windows 11"
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Central Printing Unit",
            "Central Program Utility",
            "Central Processing Utility"
        ],
        correctAnswer: "Central Processing Unit"
    },
    {
        question: "Which device is used to store large amounts of data permanently?",
        options: [
            "RAM",
            "Hard Drive",
            "CPU",
            "Keyboard"
        ],
        correctAnswer: "Hard Drive"
    },
    {
        question: "What is ChatGPT primarily used for?",
        options: [
            "Cooking",
            "Generating and understanding text",
            "Designing clothes",
            "Playing music"
        ],
        correctAnswer: "Generating and understanding text"
    },
    {
        question: "Which company created ChatGPT?",
        options: [
            "Google",
            "Microsoft",
            "OpenAI",
            "Adobe"
        ],
        correctAnswer: "OpenAI"
    },
    {
        question: "What is 'prompt engineering'?",
        options: [
            "Designing mechanical prompts",
            "Writing effective instructions for AI",
            "Fixing computer errors",
            "Engineering chat software"
        ],
        correctAnswer: "Writing effective instructions for AI"
    },
    {
        question: "Which tool is best known for creating presentations and social media designs?",
        options: [
            "Blogger.com",
            "Canva",
            "Leonardo AI",
            "ChatGPT"
        ],
        correctAnswer: "Canva"
    },
    {
        question: "What does Canva mainly help users do?",
        options: [
            "Create images and designs easily",
            "Code programs",
            "Host websites",
            "Play games"
        ],
        correctAnswer: "Create images and designs easily"
    },
    {
        question: "Leonardo AI is mainly used for:",
        options: [
            "Generating AI images",
            "Making spreadsheets",
            "Sending emails",
            "Hosting videos"
        ],
        correctAnswer: "Generating AI images"
    },
    {
        question: "Which of the following is an AI image generator?",
        options: [
            "Canva",
            "Leonardo AI",
            "Blogger",
            "Excel"
        ],
        correctAnswer: "Leonardo AI"
    },
    {
        question: "What is a 'reel' on social media?",
        options: [
            "A short video clip",
            "A podcast episode",
            "A blog post",
            "An audio file"
        ],
        correctAnswer: "A short video clip"
    },
    {
        question: "Which platform is most popular for creating and posting reels?",
        options: [
            "Facebook",
            "Instagram",
            "Blogger.com",
            "LinkedIn"
        ],
        correctAnswer: "Instagram"
    },
    {
        question: "Blogger.com is owned by which company?",
        options: [
            "Meta",
            "Google",
            "Microsoft",
            "Amazon"
        ],
        correctAnswer: "Google"
    },
    {
        question: "What is the main use of Blogger.com?",
        options: [
            "To create and publish blogs",
            "To make presentations",
            "To edit videos",
            "To generate AI images"
        ],
        correctAnswer: "To create and publish blogs"
    },
    {
        question: "Which of the following can help in making passive income?",
        options: [
            "Blogging",
            "YouTube channel",
            "Affiliate marketing",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "What is passive income?",
        options: [
            "Money earned with little ongoing effort",
            "Money from a full-time job",
            "Salary from office work",
            "Loan repayment"
        ],
        correctAnswer: "Money earned with little ongoing effort"
    },
    {
        question: "What is the meaning of 'online presence'?",
        options: [
            "Being online 24/7",
            "How people can find you or your brand online",
            "Having a big internet bill",
            "Owning a computer"
        ],
        correctAnswer: "How people can find you or your brand online"
    },
    {
        question: "Which is the first step to building an online presence?",
        options: [
            "Buying ads",
            "Creating a website or social media profile",
            "Making reels",
            "Hiring a marketing agency"
        ],
        correctAnswer: "Creating a website or social media profile"
    },
    {
        question: "Which is an example of hardware?",
        options: [
            "Monitor",
            "PowerPoint",
            "Google Docs",
            "MS Word"
        ],
        correctAnswer: "Monitor"
    },
    {
        question: "What does RAM stand for?",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Ready Access Machine",
            "Rapid Action Module"
        ],
        correctAnswer: "Random Access Memory"
    },
    {
        question: "Which type of memory is temporary and clears when the computer is turned off?",
        options: [
            "Hard Disk",
            "RAM",
            "SSD",
            "ROM"
        ],
        correctAnswer: "RAM"
    },
    {
        question: "Which device outputs sound from a computer?",
        options: [
            "Keyboard",
            "Speakers",
            "Mouse",
            "Monitor"
        ],
        correctAnswer: "Speakers"
    },
    {
        question: "Which of the following is an example of an input device?",
        options: [
            "Printer",
            "Scanner",
            "Monitor",
            "Speaker"
        ],
        correctAnswer: "Scanner"
    },
    {
        question: "Which AI tool is best for answering questions and generating content?",
        options: [
            "Leonardo AI",
            "Canva",
            "ChatGPT",
            "Blogger"
        ],
        correctAnswer: "ChatGPT"
    },
    {
        question: "Which AI tool is best for creating social media post templates?",
        options: [
            "Leonardo AI",
            "ChatGPT",
            "Canva",
            "Excel"
        ],
        correctAnswer: "Canva"
    },
    {
        question: "Which is NOT a blogging platform?",
        options: [
            "Blogger.com",
            "WordPress",
            "Instagram",
            "Medium"
        ],
        correctAnswer: "Instagram"
    },
    {
        question: "What should you focus on when creating prompts for AI?",
        options: [
            "Using complex words",
            "Clarity and detail",
            "Writing short and unclear text",
            "Adding random instructions"
        ],
        correctAnswer: "Clarity and detail"
    },
    {
        question: "What is an example of an online passive income source?",
        options: [
            "Creating and selling an online course",
            "Doing a part-time job",
            "Running errands",
            "Driving a taxi"
        ],
        correctAnswer: "Creating and selling an online course"
    },
    {
        question: "Which of these can help your blog reach more people?",
        options: [
            "SEO",
            "Ignoring keywords",
            "Posting randomly",
            "Avoiding images"
        ],
        correctAnswer: "SEO"
    },
    {
        question: "What is the main purpose of SEO?",
        options: [
            "To decorate a website",
            "To make a website faster",
            "To create videos",
            "To improve website ranking on search engines"
        ],
        correctAnswer: "To improve website ranking on search engines"
    },
    {
        question: "Which is the best format for reels on Instagram?",
        options: [
            "Horizontal",
            "Vertical",
            "Square",
            "Panorama"
        ],
        correctAnswer: "Vertical"
    },
    {
        question: "Which of these is a benefit of using Canva?",
        options: [
            "Free design templates",
            "AI image creation",
            "Easy drag-and-drop interface",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "Which tool allows AI-powered image creation?",
        options: [
            "ChatGPT",
            "Blogger.com",
            "Leonardo AI",
            "MS Word"
        ],
        correctAnswer: "Leonardo AI"
    },
    {
        question: "What is the benefit of a blog?",
        options: [
            "Sharing your knowledge online",
            "Building an audience",
            "Making passive income",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "Which of the following is a social media platform?",
        options: [
            "Google Docs",
            "MS Excel",
            "Instagram",
            "Notepad"
        ],
        correctAnswer: "Instagram"
    },
    {
        question: "What is the primary benefit of having an online presence?",
        options: [
            "Working offline",
            "Hiding from customers",
            "Reaching more people",
            "Spending more on ads"
        ],
        correctAnswer: "Reaching more people"
    },
    {
        question: "Which of the following is an example of cloud storage?",
        options: [
            "Google Drive",
            "RAM",
            "SSD",
            "Hard Disk"
        ],
        correctAnswer: "Google Drive"
    },
    {
        question: "Which tool is used to publish your own articles online?",
        options: [
            "Blogger.com",
            "Canva",
            "Leonardo AI",
            "Instagram"
        ],
        correctAnswer: "Blogger.com"
    },
    {
        question: "What is the benefit of using AI tools like ChatGPT?",
        options: [
            "Faster content creation",
            "Automated answers",
            "Idea generation",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "Which device connects your computer to the internet?",
        options: [
            "Router",
            "Printer",
            "Mouse",
            "Speaker"
        ],
        correctAnswer: "Router"
    },
    {
        question: "Which of the following is NOT an input device?",
        options: [
            "Keyboard",
            "Mouse",
            "Monitor",
            "Microphone"
        ],
        correctAnswer: "Monitor"
    },
    {
        question: "Which of these is necessary for making reels?",
        options: [
            "Camera or smartphone",
            "Cooking stove",
            "Printer",
            "Scanner"
        ],
        correctAnswer: "Camera or smartphone"
    },
    {
        question: "What does URL stand for?",
        options: [
            "Uniform Resource Locator",
            "Universal Resource Link",
            "Uniform Remote Link",
            "Universal Record Locator"
        ],
        correctAnswer: "Uniform Resource Locator"
    },
    {
        question: "Which is a free blogging platform?",
        options: [
            "Blogger.com",
            "Netflix",
            "Amazon",
            "Instagram"
        ],
        correctAnswer: "Blogger.com"
    },
    {
        question: "Which is an example of active income?",
        options: [
            "Salary from a job",
            "Earnings from a blog",
            "Affiliate commissions",
            "YouTube ad revenue"
        ],
        correctAnswer: "Salary from a job"
    },
    {
        question: "Which type of storage is faster?",
        options: [
            "SSD",
            "HDD",
            "CD-ROM",
            "Floppy disk"
        ],
        correctAnswer: "SSD"
    },
    {
        question: "Which is an important skill for online growth?",
        options: [
            "Consistency",
            "Random posting",
            "Ignoring analytics",
            "Avoiding engagement"
        ],
        correctAnswer: "Consistency"
    },
    {
        question: "Which of these is the correct order of steps to publish a blog post on Blogger.com?",
        options: [
            "Write post → Add images → Publish",
            "Publish → Write post → Add images",
            "Add images → Write post → Publish",
            "Publish → Add images → Write post"
        ],
        correctAnswer: "Write post → Add images → Publish"
    }
];

class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 50; // Change if you want fewer/more
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

    // // This below timer function shows how much time students takes to complete the test
    // startTimer() {
    //     const timerElement = document.getElementById('timer');
    //     this.timer = 0;
    //     this.timerInterval = setInterval(() => {
    //         this.timer++;
    //         const minutes = Math.floor(this.timer / 60);
    //         const seconds = this.timer % 60;
    //         timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    //     }, 1000);
    // }

    // This below timer function shows 1 hour time students takes to complete the test
    //     startTimer() {
    //     const timerElement = document.getElementById('timer');
    //     let remainingTime = 60 * 60; // 60 minutes in seconds

    //     this.timerInterval = setInterval(() => {
    //         remainingTime--;

    //         const minutes = Math.floor(remainingTime / 60);
    //         const seconds = remainingTime % 60;
    //         timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    //         // Store elapsed time for result display
    //         this.timer = (60 * 60) - remainingTime;

    //         // Auto-submit when time runs out
    //         if (remainingTime <= 0) {
    //             clearInterval(this.timerInterval);
    //             this.endQuiz();
    //         }
    //     }, 1000);
    // }
    // ////////////////////////xxxxxxx/////////////////////////////////////////////////


    // below method will send the result to the Gmail.

    startTimer() {
        const timerElement = document.getElementById('timer');
        let remainingTime = 60 * 60; // 60 minutes in seconds

        this.timerInterval = setInterval(() => {
            remainingTime--;

            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            // Store elapsed time for result display
            this.timer = (60 * 60) - remainingTime;

            // Auto-submit when time runs out
            if (remainingTime <= 0) {
                clearInterval(this.timerInterval);
                this.endQuiz();
            }
        }, 1000);
    }

    // ////////////////////////////////////////////////////////////////



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
        optionsContainer.querySelectorAll('.option').forEach(el => {
            el.classList.remove('selected');
            el.style.pointerEvents = 'none';
        });

        selectedElement.classList.add('selected');

        if (selectedElement.textContent === currentQuestion.correctAnswer) {
            this.correctAnswers++;
        }

        setTimeout(() => {
            this.currentQuestionIndex++;
            this.loadQuestion();
        }, 400);
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
Correct Answers: ${this.correctAnswers}
Percentage: +${percentage + '80356'}%
Grade: ${'DACBB' + grade}
Time Taken: ${Math.floor(this.timer / 60)} min ${this.timer % 60} sec`;

        // const whatsappURL = `https://wa.me/919365489154?text=${encodeURIComponent(message)}`;
        // window.open(whatsappURL, '_blank');

        const subject = encodeURIComponent("Internship Final Test - Alien Institute of Computer");
        const body = encodeURIComponent(message);
        const mailtoURL = `mailto:hellowsupprt@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoURL, '_blank');

    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
