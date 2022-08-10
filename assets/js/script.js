// defining new variables using query selectors
let time = document.querySelector("p.myTime");
let timeRemaining = 75;
let score = document.querySelector("#myScore");
let instructions = document.querySelector("#instructions");
let questions = document.querySelector("#questions");
let count = 0;
let correct = document.querySelector("#correct");
let quizEnd = document.querySelector("#end");
let initials = document.querySelector("#initials");

const highScore = document.querySelector("#highscores");
let topScores = document.querySelector("#top-scores");

// setting high score array to empty
let scoreArr = [];

// defining button elements for quiz questions using query selector
const startBtn = document.querySelector("#start");
const choiceClass = document.querySelectorAll("button.choiceBtn")
const choice1Btn = document.querySelector("#choice1");
const choice2Btn = document.querySelector("#choice2");
const choice3Btn = document.querySelector("#choice3");
const choice4Btn = document.querySelector("#choice4");
const submitBtn = document.querySelector("#enter-score");
// btns for score maintenance
const backBtn = document.querySelector("#backBtn");
const clearAllScoresBtn = document.querySelector("#clearAllScores");
const viewScrBtn = document.querySelector("#view-scores");

// Creating the question array to populate our answer buttons

const questionArr =[

    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. alerts", "2. booleans", "3. strings", "4. numbers"],
        correctAnswer: "2"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. parentheses", "2. square brackets", "3. quotes", "4. curly brackets"],
        correctAnswer: "3"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. booleans", "2. other arrays", "3. numbers and strings", "4. all of the above"],
        correctAnswer: "1"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. quotes", "2. curly brackets", "3. commmas", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. console.log", "3. for loops", "4. terminal/bash"],
        correctAnswer: "3"
    }

]

