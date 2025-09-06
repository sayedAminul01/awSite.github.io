alienInstitute/
├── quiz.html          ← Main HTML file
├── styles.css         ← All CSS styles
├── app.js            ← Main JavaScript application
├── config.js         ← Quiz categories configuration
└── data/             ← Quiz questions folder
    ├── programming.js
    ├── technology.js
    └── computer-science.js




<!-- ////////////////////////////////////////////////// -->

🚀 How to Add New Subjects:
Step 1: Create Question File
Create data/your-subject.js:

const yourSubjectQuestions = [
    {
        question: "Your question here?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: 0  // Index of correct answer (0-3)
    }
    // Add more questions...
];


<!-- /////////////////////////////////// -->

Step 2: Add to Config
Edit config.js, add to categories array:

{
    id: 'your-subject',
    title: 'Your Subject Name',
    icon: '🎯',
    description: 'Subject description',
    dataFile: 'data/your-subject.js'
}

<!-- /////////////////////////////////// -->

Step 3: Add Script Tag
In quiz.html, add before app.js:

<script src="data/your-subject.js"></script>


<!-- /////////////////////////////////// -->

Step 4: Update App
In app.js, add to loadQuizData():

this.quizData = {
    'programming': programmingQuestions,
    'technology': technologyQuestions,
    'computer-science': computerScienceQuestions,
    'your-subject': yourSubjectQuestions  // Add this line same to data/file name/ array name.
};

<!-- /////////////////////////////////// -->
✅ Benefits of This Structure:
✅ Organized: Each subject has its own file

✅ Scalable: Easy to add new subjects

✅ Maintainable: Edit questions without touching main code

✅ Modular: Can reuse question files in other projects

✅ Clean: Separation of concerns

Open quiz.html in your browser to test the separated structure!



