const questions = [
    {
        question: "Which of these values is a string?",
        options: ["true", "'33'", "33", "Howdy"],
        answer: "'33'"
    },
    {
        question: "Where is the correct place to insert JavaScript?",
        options: ["In the external file", "The head section", "The body section", "All of the above"],
        answer: "The body section"

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

const InitialsScores = [];


const initialElement = document.getElementById('initialView')
const startPage = document.querySelector('.startingView')
const questionStartElement = document.getElementById('questionView')
const CorrectChoice = document.getElementById('correct answer')
const IncorrectChoice = document.getElementById('incorrect answer')
const initialInputViewEl = document.getElementById('initialInputView')
const initialInputEl = document.getElementById('initial-input')
const submitButton = document.getElementById('submit-button')
const AllScoresEl = document.getElementById('All-Scores')
const HighScoresListEl = document.getElementById('High-Scores-List')

function startQuiz (){
startPage.setAttribute('class', "hide")
// startPage.innerHTML = ""
      questionStartElement.classList.remove('hide')
      startTimer();
    }

let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 75;
let timerInterval;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

const timerElement = document.getElementById('timer');
console.log(timerElement)

function startTimer(){
    timerInterval = setInterval(function (){
        timeRemaining--;
        timerElement.innerHTML = timeRemaining
        if(timeRemaining <= 0){
            gameOver();}
    },1000)
    
}

function stopTimer (){
    clearInterval(timerInterval)
}

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
        CorrectChoice.removeAttribute('class');
        IncorrectChoice.setAttribute('class','choice incorrect hide')
    }
    else{
        IncorrectChoice.removeAttribute('class');
        CorrectChoice.setAttribute('class','choice correct hide')
        timeRemaining -= 15
        if(timeRemaining < 0){
            timeRemaining = 0;
        }
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } 
    else {
        showResult();
    }
}

function showResult() {
    initialInputViewEl.classList.remove('hide')
    questionStartElement.classList.add('hide')
    stopTimer();
    
    renderLastRegistered();
}

function gameOver(){
    if (timeRemaining <= 0){
        timeRemaining = 0;
        stopTimer();
        showResult();
    }
}

function renderLastRegistered(){
    var finalScore = localStorage.getItem('scoreElement');
    scoreElement.textContent = `Your score: ${timeRemaining}`;
}
function saveInitial(){
    questionElement.textContent = 'Quiz Completed!';
    optionsElement.innerHTML = '';
    scoreElement.textContent = `Your score: ${timeRemaining}`;
    
    var highScores = JSON.parse(window.localStorage.getItem("scoreElement")) || [];

    var userInfo = {
        initial: initialInputEl.value ,
        score: timeRemaining,
    };

    highScores.push (userInfo)
    localStorage.setItem("scoreElement", JSON.stringify(highScores));
    ScoresSection()
}

function ScoresSection (){
    AllScoresEl.classList.remove('hide')
    // initialInputViewEl.classList.add('hide')
    // AllScoresEl.classList.appendChild('li')
    var highScores = JSON.parse(window.localStorage.getItem("scoreElement")) || [];
    
    for (let i = 0; i < highScores.length; i++){
        var liEl = document.createElement("li");
        liEl.textContent = `${highScores[i].initial}, ${highScores[i].score}`;
        HighScoresListEl.appendChild(liEl);
    }
}

submitButton.addEventListener("click", saveInitial)

initialElement.addEventListener("click", startQuiz);

displayQuestion();