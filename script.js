// An Array of objects is a collection of elements that individually hold a number of properties and values
// questions array contains question, options, and answer data
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

// Variables to help traverse the DOM
// document.getElementById returns a reference to the first object with the specified value of the ID attribute
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
const choiceAnswersEl = document.getElementById('choice-answers')

// .setAttribute sets the value of element's first attribute whose qualified name is qualifiedName to value
initialElement.setAttribute("style", "display: flex; justify-content: center; margin: 1em");
choiceAnswersEl.setAttribute("style", "display: flex; justify-content: center;")

// Function for starting the quiz
// .setAttribute('class', "hide") hides the startPage class so it won't appear during the quiz
function startQuiz() {
    startPage.setAttribute('class', "hide")
    // startPage.innerHTML = ""
    // .classList.remove('hide') removes the individual hide class from questionView so that questions and options appear once quiz starts
    questionStartElement.classList.remove('hide')
    //   startTimer(); calls startTimer function after quiz starts
    startTimer();
}

// let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value
let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 75;
let timerInterval;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

const timerElement = document.getElementById('timer');
console.log(timerElement)

timerElement.setAttribute("style", "position: relative; display: flex; flex-direction: row; justify-content: center");

// Function for starting timer from 75 seconds with time intervals between questions
function startTimer() {
    // setInterval() method repeatedly calls a function or executes a code snippet with a fixed time delay between each call
    timerInterval = setInterval(function () {
        // Sets timer to decrement
        timeRemaining--;
        timerElement.innerHTML = timeRemaining
        // Conditional for ending the game if timeRemaining hits 0
        if (timeRemaining <= 0) {
            gameOver();
        }
    }, 1000)

}

// Function for stopping the timer
function stopTimer() {
    //clearInterval() method cancels a timed, repeating action previously called to setInterval()
    clearInterval(timerInterval)
}

// Function for displaying each question in order
function displayQuestion() {
    // Variable sets the current question to its index number
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    // Turns optionsElement into string
    optionsElement.innerHTML = '';

    // For each current question's options, buttons are appended to check answers and move to next question
    // .forEach method performs the specified action for each element within an array
    currentQuestion.options.forEach((option, Index) => {
        // Variable creates button for each option
        const button = document.createElement('button');
        button.textContent = option;
        // .addEventListener appends an event listener for events whose type attribute value is type
        // After clicking each button for a question, a check answer function checks each option
        button.addEventListener('click', () => checkAnswer(option));
        // .appendChild method of the node interface adds a node to the end of the list of children of a specified parent node
        // Button is appended as a child element of optionsElement
        optionsElement.appendChild(button);
    });
}

// Function for checking each option as "correct" or "incorrect" with time subracted from "incorrect" answer
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    // If the selected option is strictly equal to the current question's answer, then the score is incremented
    if (selectedOption === currentQuestion.answer) {
        // increments the score
        score++;
        // removes hide class from CorrectChoice because answer is "correct"
        CorrectChoice.removeAttribute('class');
        IncorrectChoice.setAttribute('class', 'choice incorrect hide')
    }
    // If the selected option is not strictly equal to the current question's answer, then the timeRemaining is decremented by 15 seconds
    else {
        // removes hide class from IncorrectChoice because answer is "incorrect"
        IncorrectChoice.removeAttribute('class');
        CorrectChoice.setAttribute('class', 'choice correct hide')
        timeRemaining -= 15
        // If timeRemaining is less than 0 at any point with 15 second decrement, then timeRemaining = 0
        // Check prevents negative values from displaying
        if (timeRemaining < 0) {
            timeRemaining = 0;
        }
    }
    // increments the currentQuestionIndex by one index number
    currentQuestionIndex++;

    // If the currentQuestionIndex number is less than the length of the questions array, then displayQuestion(); is called to move onto next question
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
    // If the currentQuestionIndex number is greater than the length of the questions array, then showResult(); is called to end game
    else {
        showResult();
    }
}

// Function for ending the game, stopping the timer, and moving to initialInputView page
function showResult() {
    // Removes hide attribute from initialInputView element
    initialInputViewEl.classList.remove('hide')
    // Adds hide attribute to questionView element
    questionStartElement.classList.add('hide')
    stopTimer();
    // Calls renderLastRegistered (); function for final score
    renderLastRegistered();
}

// Function for ending the game if timer reaches 0
function gameOver() {
    // if timeRemaining is less than or equal to 0, then timeRemaining = 0
    if (timeRemaining <= 0) {
        timeRemaining = 0;
        stopTimer();
        showResult();
    }
}

// Function for displaying the last registered user's score
function renderLastRegistered() {
    // localStorage.getItem() retrieves the current value associated with the given key
    // scoreElement is retrieved from localStorage in a string
    var finalScore = localStorage.getItem('scoreElement');
    // Template literals are enclosed in backticks (`)
    // Template literals allow you to embed expressions directly within the string using placeholders, denoted by ${expression}
    // ${expression} is evaluated and replaced with corresponding value in the resulting string
    // ${timeRemaining} is converted to a string value
    scoreElement.textContent = `Your score: ${timeRemaining}`;
}

// Function for saving initialInputView page data to local storage
function saveInitial() {
    questionElement.textContent = 'Quiz Completed!';
    // Conditional for disabling submitButton to prevent further entries after submission
    if (submitButton.disabled) {
        return;
    }
    optionsElement.innerHTML = '';
    scoreElement.textContent = `Your score: ${timeRemaining}`;

    // Variable parses the retrieved localStorage "scoreElement" from a string into an object or array
    // .parse converts a JSON string into an object
    var highScores = JSON.parse(window.localStorage.getItem("scoreElement")) || [];

    // userInfo is an object with the initial input and score from user
    var userInfo = {
        initial: initialInputEl.value,
        score: timeRemaining,
    };

    // .push adds elements to the end of an array.  Takes in at least one parameter
    // userInfo is pushed into highScores object
    highScores.push(userInfo)
    // .setItem saves the value to the local storage
    // .stringify converts a value to JSON string
    // scoreElement and highScores string are saved to local storage
    localStorage.setItem("scoreElement", JSON.stringify(highScores));
    // Calls ScoresSection function
    ScoresSection()

    submitButton.disabled = true;
}

// Function for displaying ScoresSection with all locally stored user initials and scores
function ScoresSection() {
    // Remove hide attribute from AllScoresE1 to display AllScores
    AllScoresEl.classList.remove('hide')
    // initialInputViewEl.classList.add('hide')
    // AllScoresEl.classList.appendChild('li')
    // scoreElement is retrieved and parsed into an object or array
    var highScores = JSON.parse(window.localStorage.getItem("scoreElement")) || [];

    // for-loop runs as long as i is less than the length of highScores array
    // for-loop adds the highScores initial and highScores score each time loop is run
    for (let i = 0; i < highScores.length; i++) {
        // var liE1 is a created list item
        var liEl = document.createElement("li");
        // liE1 displayes template literal of stringed ${highScores[i].initial} and ${highScores[i].score}
        liEl.textContent = `${highScores[i].initial}, ${highScores[i].score}`;
        // liE1 is appended as a child element of HighScoresListEl ordered list
        HighScoresListEl.appendChild(liEl);
    }
}

// If submitButton is clicked, then saveInitial () is called
submitButton.addEventListener("click", saveInitial)

// If initialElement / start button is clicked, then startQuiz () is called
initialElement.addEventListener("click", startQuiz);

displayQuestion();