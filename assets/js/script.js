// defining new variables using query selectors
let time = document.querySelector("p.myTime");
let timeRemaining = 75;
let score = document.querySelector("#myScore");
const instructions = document.querySelector("#instructions");
const questions = document.querySelector("#questions");
let questionEl = document.querySelector("#question");
let count = 0;
const correct = document.querySelector("#correct");
const quizEnd = document.querySelector("#end");
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
const submitBtn = document.querySelector("#enterScore");
// btns for score maintenance
const backBtn = document.querySelector("#backBtn");
const clearAllScoresBtn = document.querySelector("#clearAllScores");
const viewScrBtn = document.querySelector("#viewScores");

// Creating the question array to populate our answer buttons

const questionArr = [

    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. alerts", "2. booleans", "3. strings", "4. numbers"],
        correctAnswer: "1"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. parentheses", "2. square brackets", "3. quotes", "4. curly brackets"],
        correctAnswer: "1"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. booleans", "2. other arrays", "3. numbers and strings", "4. all of the above"],
        correctAnswer: "4"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. quotes", "2. curly brackets", "3. commmas", "4. parentheses"],
        correctAnswer: "1"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. console.log", "3. for loops", "4. terminal/bash"],
        correctAnswer: "2"
    }

]

// creating function to call the timer start

function timer() {
    let timeInterval = setInterval(function () {
       timeRemaining--;
        time.textContent = `Time:${timeRemaining}s`;

        if (timeRemaining === 0 || count === questionArr.length) {
            clearInterval(timeInterval);
            questions.style.display = "none"; 
            // questions.style.display = "none";
            quizEnd.style.display = "block";
            score.textContent = timeRemaining;
        }
    }, 1000);
}

// start quiz with timer and set up questions
function startQuiz() {
    instructions.style.display = "none";
    questions.style.display = "block";
    count = 0;

    timer();
    // takes total count of choices to prompt to next question
    setQuestion(count);
}

// creating function to set question to choice btn
function setQuestion(id) {
    if (id < questionArr.length) {
        questionEl.textContent = questionArr[id].question;
        choice1Btn.textContent = questionArr[id].answers[0];
        choice2Btn.textContent = questionArr[id].answers[1];
        choice3Btn.textContent = questionArr[id].answers[2];
        choice4Btn.textContent = questionArr[id].answers[3];
    }
}

// creating function to check if user choice is correct 
// prompting next question 
function checkChoice(event) {
    event.preventDefault();

    // display message alerting if user choice is correct
    correct.style.display = "block";
    let p = document.createElement("p");
    correct.appendChild(p);

    // fallback after 1 second
    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    // conditional checking if choice is correct
    if (questionArr[count].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (questionArr[count].correctAnswer !== event.target.value) {
        timeRemaining = timeRemaining - 10;
        p.textContent = "Wrong!";
    }

    // increment so the question array index is increased
    if (count < questionArr.length) {
        count++;
    }
    // call setQuestion function to populate next question on click event
    setQuestion(count);
}

function postScore(event) {
    event.preventDefault();

    quizEnd.style.display = "none";
    highScore.style.display = "block";

    let upperInit = initials.value.toUpperCase();
    scoreArr.push({ myInitials: upperInit, myScore: timeRemaining });

    // sort scores by amount greatest to least
    scoreArr = scoreArr.sort((a, b) => {
        if (a.myScore < b.myScore) {
          return 1;
        } else {
          return -1;
        }
      });
    
    topScores.innerHTML="";
    for (let i = 0; i < scoreArr.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreArr[i].myInitials}: ${scoreArr[i].myScore}`;
        topScores.append(li);
    }

    // Adding user scores to local storage
    addScores();
    showScores();

}

function addScores() {
    localStorage.setItem("scoreArr", JSON.stringify(scoreArr));
}

function showScores() {
    // Retrieve scores in localStorage
    // Parsing the JSON string of scores into object
    let storedScores = JSON.parse(localStorage.getItem("scoreArr"));

    // Retrieve array from localStorage, update the score array to it
    if (storedScores !== null) {
        scoreArr = storedScores;
    }
}

// clear all scores from score array
function clearScores() {
    localStorage.clear();
    topScores.innerHTML="";
}

// Start timer and display first question when click start quiz
startBtn.addEventListener("click", startQuiz);

// Check choices on choice btn selector
choiceClass.forEach(item => {
    item.addEventListener('click', checkChoice);
});

// Post Score via submit button on click
submitBtn.addEventListener("click", postScore);

// Go Back Button
backBtn.addEventListener("click", function () {
    highScore.style.display = "none";
    instructions.style.display = "block";
    timeRemaining = 75;
    time.textContent = `Time:${timeRemaining}s`;
});

// Clear the scores
clearAllScoresBtn.addEventListener("click", clearScores);

// Conditional to view or hide high score btn
viewScrBtn.addEventListener("click", function () {
    if (highScore.style.display === "none") {
        highScore.style.display = "block";
    } else if (highScore.style.display === "block") {
        highScore.style.display = "none";
    } else {
        return alert("There are no scores currently.");
    }
});





