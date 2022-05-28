//variables for Start Button and Timer
var startBtnEl = document.querySelector("#start");
var timerBtnEl = document.querySelector("#timer");
var timer = 40;

//DOM Elements Q and A
var questionEl = document.querySelector("#questions-to-ask");
var answerOneButtonEl = document.querySelector("#answer-one");
var answerTwoButtonEl = document.querySelector("#answer-two");
var answerThreeButtonEl = document.querySelector("#answer-three");
var answerFourButtonEl = document.querySelector("#answer-four");

//question variable
var questions = ["What is not a JavaScript Primitive Data Type?",
 "A JavaScript file has an extension of", 
 "Which of the following type of variables is visible everywhere in your JavaScript code?", 
];

//answer variables
var answerOne = ["Array", "String", "Boolean", "Number"];
var answerTwo = ["html", "js", "jpg", "jsq"];
var answerThree = ["local variable", "script variable", "function variable", "global variable"];

//object for Q and A
var questionAnswersObj = [{
    question: "What is not a JavaScript Primitive Data Type?",
    answer: ["Array", "String", "Boolean", "Number"],
    correctAnswer: "Array",}, 
    { question: "A JavaScript file has an extension of",
        answer: ["html", "js", "jpg", "jsq"],
        correctAnswer: "js",
    },
    { question: "Which of the following type of variables is visible everywhere in your JavaScript code?",
        answer:["local variable", "script variable", "function variable", "global variable"],
        correctAnswer: "global variable"
    }];

    var currentIndex = 0;

//Main function to set the Q and A
function setQandA(){
    answerOneButtonEl.textContent= questionAnswersObj[currentIndex].answer[0];
    answerTwoButtonEl.textContent= questionAnswersObj[currentIndex]. answer [1];
    answerThreeButtonEl.textContent= questionAnswersObj[currentIndex].answer [2];
    answerFourButtonEl.textContent= questionAnswersObj[currentIndex].answer [3];
    questionEl.textContent= questions[currentIndex];
    currentIndex++;

    timerHandler();
};

var timerHandler = function() {
    if (timer > 0) {
        timer -= 1;
        document.querySelector("#timer").innerHTML = timer;
    } else if (timer < 0) {
        // alert("You've ran out of time!")
        clearInterval(startCountDown);
    }

    var startCountDown = setInterval(timerHandler, 1000);
};

//Event Listeners
startBtnEl.addEventListener("click", setQandA);
