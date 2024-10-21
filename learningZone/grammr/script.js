const partsOfSpeech = ["Adverb", "Noun", "Pronoun", "Verb", "Adjective", "Preposition", "Conjunction", "Interjection"];

let mcqScore = 0;
let exampleScore = 0;
let gameScore = 0;
let currentSection = 'welcome';
let userName = '';

const mcqQuestions = [
    {
        question: "'She sings beautifully,' বাক্যটোৰ পৰা subject বিচাৰি উলিওৱা ?",
        options: ["She", "Sings", "Beautifully", "None of the above"],
        answer: 0
    },
    {
        question: "বাক্যটোৰ পৰা Verb বিচাৰি উলিওৱা ?, 'They play football'?",
        options: ["They", "Play", "Football", "All of the above"],
        answer: 1
    },
    {
        question: "বাক্যটোৰ পৰা Object বিচাৰি উলিওৱা,  'He drives a car.'",
        options: ["He", "Drives", "Car", "A"],
        answer: 2
    },
    {
        question: " 'We watched a movie,'এই বাক্যটোত কোৱা হৈছে আমি এটা ফিল্ম দিখিছিলো,  এই বাক্যটোত কোনটো অংশ 'দেখুওৱা' বুজাইছে?",
        options: ["Subject", "Object", "Verb", "Adjective"],
        answer: 2
    },
    {
        question: "বাক্যটোৰ পৰা subject বিচাৰি উলিওৱা ? 'The cat chased the mouse.'",
        options: ["Cat", "Mouse", "Chased", "The"],
        answer: 0
    },
    {
        question: "'I will call you tomorrow'?, বাক্যটোৰ পৰা Verb বিচাৰি উলিওৱা ?" ,
        options: ["Call", "You", "Tomorrow", "I"],
        answer: 0
    },
    {
        question: "'They built a house,' বাক্যটোৰ Object কি হয় ?",
        options: ["They", "Built", "House", "A"],
        answer: 2
    },
    {
        question: "বাক্যটোৰ Subject কি হয়  'John plays guitar'?",
        options: ["John", "Plays", "Guitar", "None of the above"],
        answer: 0
    },
    {
        question: "'She reads books every night,' এই বাক্যটোৰ কোনটো শব্দ Verb হয় '?",
        options: ["Reads", "She", "Books", "Night"],
        answer: 0
    },
    {
        question: "বাক্যটোৰ পৰা Object বিচাৰি উলিওৱা 'We bought new shoes yesterday.'",
        options: ["Bought", "We", "Shoes", "Yesterday"],
        answer: 2
    },
    {
        question: "বাক্যটোৰ Subject কি হয় , 'The children are playing in the park'?",
        options: ["Park", "Children", "Playing", "Are"],
        answer: 1
    },
    {
        question: "'I will meet you at the restaurant,' বাক্যটোৰ Verb কি হয় ?",
        options: ["Will", "Meet", "Restaurant", "You"],
        answer: 1
    },
    {
        question: "বাক্যটোৰ পৰা Object বিচাৰি উলিওৱা'They gave me a gift.'",
        options: ["They", "Me", "Gift", "Both Me and Gift"],
        answer: 3
    },
    {
        question: " 'The dog barked at the stranger', বাক্যটোৰ Object কি হয় ?",
        options: ["Barked", "Stranger", "Dog", "At"],
        answer: 2
    },
    {
        question: "In the sentence 'He teaches English,' বাক্যটোৰ Object কি হয় ?",
        options: ["He", "Teaches", "English", "None"],
        answer: 2
    },
    {
        question: "বাক্যটোৰ Verb কি হয় ?, 'They are swimming in the pool'",
        options: ["Are", "Swimming", "They", "Pool"],
        answer: 1
    },
    {
        question: "'We visited the museum last week,' বাক্যটোৰ Object কি হয় ?",
        options: ["Visited", "Museum", "We", "Week"],
        answer: 1
    },
    {
        question: "বাক্যটোৰ Subject কি হয় ?,'My brother likes to cook'",
        options: ["Cook", "My Brother", "Likes", "My"],
        answer: 1
    },
    {
        question: " 'She baked a cake for us,' বাক্যটোৰ কোনটো শব্দ Object হয়?",
        options: ["Baked", "Cake", "Us", "She"],
        answer: 1
    },
    {
        question: "বাক্যটোৰ পৰা Verb বিচাৰি উলিওৱা, 'They are watching a movie.'",
        options: ["Are", "Movie", "Watching", "They"],
        answer: 2
    },
    {
        question: "In the sentence 'He sent me a message,' এই বাক্যটোৰ  direct object কি হয় ?",
        options: ["He", "Me", "Message", "Sent"],
        answer: 2
    },
    {
        question: "বাক্যটোৰ কোনটো শব্দ Subject হয় ?, 'My friends are coming to the party'",
        options: ["My Friends", "Coming", "Party", "To"],
        answer: 0
    },
    {
        question: "'She loves reading books,' বাক্যটোৰ Verb কি?",
        options: ["Loves", "Books", "Reading", "She"],
        answer: 0
    },
    {
        question: "বাক্যটোৰ পৰা Object বিচাৰি উলিওৱা 'I gave her a bouquet.'",
        options: ["Bouquet", "Her", "I", "Gave"],
        answer: 0
    },
    {
        question: "বাক্যটোৰ Subject কি হয়, 'The students finished their homework'?",
        options: ["The Students", "Finished", "Homework", "Their"],
        answer: 0
    },
    {
        question: "'He is fixing the car,' বাক্যটোৰ Verb কি ?",
        options: ["Is", "Fixing", "Car", "He"],
        answer: 1
    },
    {
        question: "বাক্যটোৰ Object কি হয়  'I found my keys'?",
        options: ["Keys", "Found", "I", "My"],
        answer: 0
    },
    {
        question: "'We enjoy traveling during holidays,' বাক্যটোৰ Verb কি?",
        options: ["Enjoy", "Traveling", "Holidays", "We"],
        answer: 0
    },
    {
        question: "বাক্যটোৰ Subject কি হয় ?, 'The teacher explained the lesson'",
        options: ["Teacher", "Explained", "Lesson", "The"],
        answer: 0
    },
    {
        question: "In the sentence 'They offered us a ride,' বাক্যটোৰ Object কি হয় ?",
        options: ["Us", "Offered", "Ride", "Both Us and ride"],
        answer: 3
    }
];

const summaryContent = `
    <ol>
        <li><strong>Subject (কৰ্তা):</strong> কোনো কামত যিজনে কোনো কাম সমাধা কৰে তাকেই Subject বোলে ।</li>
        <b> Subject সাধাৰণতে ক্ৰিয়াৰ (Verb) আগত দিয়া থাকে। </b> <br>
        
        <p>তলৰ 16 টা Sentences অৰ পৰা Subject উলিয়াই দেখুৱাই দিয়া হৈছে । 
        <ul>i. <u>I</u> eat rice. <u>(Subject: I)</u></ul>
        <ul>ii. <u>The cat</u> sleeps on the couch. <u>(Subject: The cat)</u></ul>
        <ul>iii. <u>She</u> was cooking dinner when I arrived. <u>(Subject: She)</u></ul> 
        <ul>iv. <u>They</u> have finished their homework. <u>(Subject: They)</u></ul> 
        <ul>v. <u>We</u> had been waiting for an hour when the bus finally came. <u>(Subject: We)</u></ul> 
        <ul>vi. <u>He</u> walked to the park yesterday. <u>(Subject: He)</u></ul> 
        <ul>vii. <u>John</u> is running in the park. <u>(Subject: John)</u></ul> 
        <ul>viii. <u>The students</u> have completed their assignments. <u>(Subject: The students)</u></ul> 
        <ul>ix. <u>My mother</u> is cooking dinner in the kitchen. <u>(Subject: My mother)</u></ul> 
        <ul>x. <u>The dog</u> chased the ball across the yard. <u>(Subject: The dog)</u></ul> 
        <ul>xi. <u>Sarah and I</u> are going to the movies. <u>(Subject: Sarah and I)</u></ul> 
        <ul>xii. <u>The sun</u> rises in the east. <u>(Subject: The sun)</u></ul> 
        <ul>xiii. <u>Her car</u> broke down on the highway. <u>(Subject: Her car)</u></ul> 
        <ul>xiv. <u>Tom's friends</u> are planning a surprise party. <u>(Subject: Tom's friends)</u></ul> 
        <ul>xv. <u>The flowers</u> bloom in spring. <u>(Subject: The flowers)</u></ul> 
        <ul>xvi. <u>Our team</u> will win the championship. <u>(Subject: Our team)</u></ul> 
        </p>

        <li><strong>Object (কৰ্ম):</strong> যাৰ ওপৰত কৰ্তাই তাৰ ক্ৰিয়াটো সম্পন্ন কৰে তাকেই Object বোলে।</li>
        <b>Object সাধাৰণতে main verb অৰ পিছত দিয়া থাকে।</b>
        <p>উদাহৰণঃ 
        <ul> i. She reads a <u>book</u> every night. <u>(Object: book)</u></ul>
<ul> ii. They play <u>football</u> on weekends. <u>(Object: football)</u></ul>
<ul> iii. I love <u>chocolate</u>. <u>(Object: chocolate)</u></ul>
<ul> iv. We need a <u>new computer</u>. <u>(Object: new computer)</u></ul>
<ul> v. He gives his friend a <u>gift</u>. <u>(Object: friend, gift)</u></ul>
<ul> vi. She bought a <u>dress</u> yesterday. <u>(Object: dress)</u></ul>
<ul> vii. They saw the <u>movie</u> last night. <u>(Object: movie)</u></ul>
<ul> viii. He fixed the <u>bike</u>. <u>(Object: bike)</u></ul>
<ul> ix. I found my <u>keys</u> in the kitchen. <u>(Object: keys)</u></ul>
<ul> x. We visited the <u>museum</u> last week. <u>(Object: museum)</u></ul>
<ul> xi. She will send the <u>email</u> tomorrow. <u>(Object: email)</u></ul>
<ul> xii. They will build a <u>house</u> next year. <u>(Object: house)</u></ul>
<ul> xiii. I will meet my <u>friend</u> at the cafe. <u>(Object: friend)</u></ul>
<ul> xiv. We will take the <u>train</u> to the city. <u>(Object: train)</u></ul>
<ul> xv. He will cook a <u>delicious meal</u> for dinner. <u>(Object: delicious meal)</u></ul>

        <br>
        <li><strong>Verb (ক্ৰিয়া):</strong> যিবোৰ শব্দই কোনো কাম কৰা বা হোৱা বুজায় সেইবোৰক Verb বোলে ।</li>

        উদাহৰণঃ
<ul> i. She <u>runs</u> every morning. <u>(Verb: runs)</u></ul>
<ul> ii. They <u>play</u> football on weekends. <u>(Verb: play)</u></ul>
<ul> iii. I <u>eat</u> breakfast at 8 AM. <u>(Verb: eat)</u></ul>
<ul> iv. We <u>study</u> English together. <u>(Verb: study)</u></ul>
<ul> v. He <u>drives</u> to work daily. <u>(Verb: drives)</u></ul>
<ul> vi. She <u>reads</u> a book every night. <u>(Verb: reads)</u></ul>
<ul> vii. They <u>dance</u> at the party. <u>(Verb: dance)</u></ul>
<ul> viii. He <u>writes</u> a letter to his friend. <u>(Verb: writes)</u></ul>
<ul> ix. I <u>drink</u> coffee in the morning. <u>(Verb: drink)</u></ul>
<ul> x. We <u>watch</u> movies on weekends. <u>(Verb: watch)</u></ul>
<ul> xi. She <u>sings</u> beautifully. <u>(Verb: sings)</u></ul>
<ul> xii. They <u>build</u> houses for the poor. <u>(Verb: build)</u></ul>
<ul> xiii. He <u>paints</u> landscapes as a hobby. <u>(Verb: paints)</u></ul>
<ul> xiv. I <u>learn</u> new skills every day. <u>(Verb: learn)</u></ul>
<ul> xv. We <u>exercise</u> in the gym regularly. <u>(Verb: exercise)</u></ul>

     
</ol>
<p><strong>এতিয়া তলত দিয়া Start MCQs Button অত  ক্লিক কৰি MCQs Test দিয়া । </strong></p>
<u>(কোনো Topics বা site issue থাকিলে Contact admin ASAP. )<u>
`;

const objectContent = `



`


function startQuiz() {
    showSection('summary');
}

function startQuiz() {
    showSection('summary');
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    currentSection = sectionId;
    updateProgressBar();
}

function updateProgressBar() {
    const progress = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    let percentage;
    switch(currentSection) {
        case 'welcome':
            percentage = 0;
            break;
        case 'summary':
            percentage = 20;
            break;
        case 'mcq':
            percentage = 40;
            break;
        case 'examples':
            percentage = 60;
            break;
        case 'game':
            percentage = 80;
            break;
        case 'finalResults':
            percentage = 100;
            break;
    }
    progress.style.width = `${percentage}%`;
    progressText.textContent = `Progress: ${percentage}%`;
}

function generateMCQ() {
    const mcqContainer = document.getElementById('mcqQuestions');
    mcqContainer.innerHTML = '';
    mcqQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((option, i) => `
                <input type="radio" id="q${index}o${i}" name="q${index}" value="${i}">
                <label for="q${index}o${i}">${option}</label><br>
            `).join('')}
        `;
        mcqContainer.appendChild(questionDiv);
    });
}

function submitMCQ() {
    mcqScore = 0;
    mcqQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            mcqScore++;
        }
    });
    showFeedback(`You got ${mcqScore} out of ${mcqQuestions.length} correct!`);
    showSection('examples');
    generateExampleInputs();
}

function generateExampleInputs() {
    const exampleContainer = document.getElementById('exampleInputs');
    exampleContainer.innerHTML = '';
    partsOfSpeech.forEach(part => {
        const inputDiv = document.createElement('div');
        inputDiv.innerHTML = `
            <label for="${part.toLowerCase()}">${part}:</label><br>
            <input type="text" id="${part.toLowerCase()}" name="${part.toLowerCase()}" placeholder="Enter an example..."><br>
        `;
        exampleContainer.appendChild(inputDiv);
    });
}

function submitExamples() {
    exampleScore = 0;
    partsOfSpeech.forEach(part => {
        const input = document.getElementById(part.toLowerCase());
        if (input.value.trim() !== '') {
            exampleScore++;
        }
    });
    showFeedback(`You provided ${exampleScore} out of ${partsOfSpeech.length} examples!`);
    showSection('game');
}

let currentWord, currentAnswer;
let gameWords = [
    {word: "quickly", answer: "Adverb"},
    {word: "happiness", answer: "Noun"},
    {word: "they", answer: "Pronoun"},
    {word: "jump", answer: "Verb"},
    {word: "blue", answer: "Adjective"},
    {word: "on", answer: "Preposition"},
    {word: "and", answer: "Conjunction"},
    {word: "Wow!", answer: "Interjection"},

];

function startGame() {
    gameScore = 0;
    gameWords = shuffleArray(gameWords);
    nextGameWord();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function nextGameWord() {
    if (gameWords.length > 0) {
        const wordObj = gameWords.pop();
        currentWord = wordObj.word;
        currentAnswer = wordObj.answer;
        
        document.getElementById('word').textContent = currentWord;
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';
        
        shuffleArray(partsOfSpeech).forEach(part => {
            const button = document.createElement('button');
            button.textContent = part;
            button.onclick = () => checkAnswer(part);
            choicesContainer.appendChild(button);
        });
    } else {
        showFeedback(`Game over! You got ${gameScore} out of 8 correct!`);
        showResults();
    }
}

function checkAnswer(answer) {
    if (answer === currentAnswer) {
        gameScore++;
        showFeedback("Correct! Well done!", "success");
    } else {
        showFeedback(`Incorrect. The correct answer is ${currentAnswer}.`, "error");
    }
    setTimeout(nextGameWord, 1500);
}

function showResults() {
    const resultsDiv = document.getElementById('results');
    const totalScore = mcqScore + exampleScore + gameScore;
    const maxScore = mcqQuestions.length + partsOfSpeech.length + 8; // 8 is the number of game words
    const percentage = (totalScore / maxScore) * 100;

    resultsDiv.innerHTML = `
        <p>MCQ Score: ${mcqScore}/${mcqQuestions.length}</p>
        <p>Example Score: ${exampleScore}/${partsOfSpeech.length}</p>
        <p>Game Score: ${gameScore}/8</p>
        <p>Total Score: ${totalScore}/${maxScore} (${percentage.toFixed(2)}%)</p>
        <p>${getFeedback(percentage)}</p>
    `;

    const today = new Date();
    document.getElementById('completionDate').textContent = today.toDateString();
    
    showSection('finalResults');
}

function getFeedback(percentage) {
    if (percentage >= 90) return "Stellar performance! You're a true Grammar Galaxy explorer!";
    if (percentage >= 70) return "Great job, space cadet! You're well on your way to mastering the Grammar Galaxy!";
    if (percentage >= 50) return "Good effort! With more practice, you'll be navigating the Grammar Galaxy like a pro!";
    return "Keep exploring! The Grammar Galaxy has many wonders yet to discover!";
}

function showFeedback(message, type = "success") {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.textContent = message;
    feedbackDiv.className = `feedback show ${type}`;
    setTimeout(() => {
        feedbackDiv.classList.remove('show');
    }, 3000);
}

function restartQuiz() {
    mcqScore = 0;
    exampleScore = 0;
    gameScore = 0;
    gameWords = [
        {word: "quickly", answer: "Adverb"},
        {word: "happiness", answer: "Noun"},
        {word: "they", answer: "Pronoun"},
        {word: "jump", answer: "Verb"},
        {word: "blue", answer: "Adjective"},
        {word: "on", answer: "Preposition"},
        {word: "and", answer: "Conjunction"},
        {word: "Wow!", answer: "Interjection"}
    ];
    showSection('welcome');
}

function nextLesson() {
    // This function would typically load the next lesson.
    // For now, we'll just show an alert.
    alert("Great job! The next lesson is coming soon. Stay tuned for more Grammar Galaxy adventures!");
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('summaryContent').innerHTML = summaryContent;
    generateMCQ();
    // userName = prompt("Welcome, space explorer! What's your name?") || "Space Explorer";
    document.getElementById('userName').textContent = userName;
});



// ... (previous code remains unchanged) ...


function showResults() {
    const resultsDiv = document.getElementById('results');
    const performanceFeedbackDiv = document.getElementById('performanceFeedback');
    
    const mcqCorrect = mcqScore;
    const mcqIncorrect = mcqQuestions.length - mcqScore;
    
    const exampleCorrect = exampleScore;
    const exampleIncorrect = partsOfSpeech.length - exampleScore;
    
    const gameCorrect = gameScore;
    const gameIncorrect = 8 - gameScore; // 8 is the total number of game words

    const totalScore = mcqScore + exampleScore + gameScore;
    const maxScore = mcqQuestions.length + partsOfSpeech.length + 8;
    const percentage = (totalScore / maxScore) * 100;

    performanceFeedbackDiv.innerHTML = `<h3>${getPerformanceFeedback(percentage)}</h3>`;

    resultsDiv.innerHTML = `
        <h3>Detailed Scores:</h3>
        <p>MCQ Score: ${mcqScore}/${mcqQuestions.length} (Correct: ${mcqCorrect}, Incorrect: ${mcqIncorrect})</p>
        <p>Example Score: ${exampleScore}/${partsOfSpeech.length} (Correct: ${exampleCorrect}, Incorrect: ${exampleIncorrect})</p>
        <p>Game Score: ${gameScore}/8 (Correct: ${gameCorrect}, Incorrect: ${gameIncorrect})</p>
        <p>Total Score: ${totalScore}/${maxScore} (${percentage.toFixed(2)}%)</p>
    `;

    updateLearningProgress(percentage);
    showSection('finalResults');
}

function getPerformanceFeedback(percentage) {
    if (percentage >= 80) return "Excellent Learning";
    if (percentage >= 50) return "Little Improve";
    return "Poor Learning";
}

function updateLearningProgress(percentage) {
    const progressBar = document.getElementById('learningProgressBar');
    const progressText = document.getElementById('learningProgressText');
    
    progressBar.style.width = `${percentage}%`;
    
    let progressClass, progressMessage;
    if (percentage >= 80) {
        progressClass = 'excellent';
        progressMessage = 'Excellent Learning Progress';
    } else if (percentage >= 50) {
        progressClass = 'mid';
        progressMessage = 'Mid Learning Progress';
    } else {
        progressClass = 'poor';
        progressMessage = 'Poor Learning Progress';
    }
    
    progressBar.className = progressClass;
    progressText.textContent = progressMessage;
}

// ... (rest of the code remains unchanged) ...