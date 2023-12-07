const questions = [
    {
        question: "Which of these values is a string?",
        options: ["true", "'33'", "33", "Howdy"],
        answer: "'33'"
    },
    {
        question: "What is the correct way to store data within an array?",
        options: ["var names = [Andre, Karl, Rashida, Olivia]", "var names = ('Andre', 'Karl', 'Rashida', 'Olivia')", 
        "var names = ['Andre', 'Karl', 'Rashida', 'Olivia']", "None of the above"],
        answer: "var names = ['Andre', 'Karl', 'Rashida', 'Olivia']"
    },
    {
        question: "Which method removes the last element in the array?",
        options: ["unshift()", "pop()", "push()", "slice()"],
        answer: "pop()"
    },
    {
        question: "How do you write an 'if' statement if 'i' is no greater than 30?",
        options: ["i <= 30", "i < 30", "i <> 30", "i => 30"],
        answer: "i <= 30"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, Index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = 'Quiz Completed!';
    optionsElement.innerHTML = '';
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
}

displayQuestion();