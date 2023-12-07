const questions = [
    {
    question : "Which of these values is a string?",
    answers: [
        {text: "true", correct: false}, 
        {text: "'33'", correct: true}, 
        {text: "33", correct: false}, 
        {text: "Howdy", correct: false}, 
    ]
},
{
    question : "What is the correct way to store data within an array?",
    answers: [
        {text: "var names = [Andre, Karl, Rashida, Olivia]", correct: false}, 
        {text: "var names = ('Andre', 'Karl', 'Rashida', 'Olivia')", correct: false}, 
        {text: "var names = ['Andre', 'Karl', 'Rashida', 'Olivia']", correct: true}, 
        {text: "None of the above", correct: false}, 
    ]
},
{
    question : "Which method removes the last element in the array?",
    answers: [
        {text: "unshift()", correct: false}, 
        {text: "pop()", correct: true}, 
        {text: "push()", correct: false}, 
        {text: "slice()", correct: false}, 
    ]
},
{
    question : "How do you write an 'if' statement if 'i' is no greater than 30?",
    answers: [
        {text: "i <= 30", correct: true}, 
        {text: "i < 30", correct: false}, 
        {text: "i <> 30", correct: false}, 
        {text: "i => 30", correct: false}, 
    ]
},

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();