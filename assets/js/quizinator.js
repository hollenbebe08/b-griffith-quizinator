//variables for Start Button and Timer
var startBtnEl = document.querySelector("#start");
var timerBtnEl = document.querySelector("#timer");
var answerBtnsEl = document.querySelector(".answer-text");
var timerSeconds = 30;
var remainingTime = 0;
var score = 0;
var initialBtnEl = document.querySelector("#initials-btn");
var quizTimer = undefined;
var currentIndex = 0;

//DOM Elements Q and A
var questionEl = document.querySelector("#questions-to-ask");
var answerOneButtonEl = document.querySelector("#answer-one");
var answerTwoButtonEl = document.querySelector("#answer-two");
var answerThreeButtonEl = document.querySelector("#answer-three");
var answerFourButtonEl = document.querySelector("#answer-four");


//object for Q and A
var questionAnswersObj = [{
    question: "What is not a JavaScript Primitive Data Type?",
    answer: ["Array", "String", "Boolean", "Number"],
    correctAnswer: "Array",}, 
    { question: "A JavaScript file has an extension of",
        answer: ["HTML", "JS", "JPG", "JSQ"],
        correctAnswer: "JS",
    },
    { question: "Which of the following type of variables is visible everywhere in your JavaScript code?",
        answer:["Local Variable", "Script Variable", "Function Variable", "Global Variable"],
        correctAnswer: "Global Variable"
    }];

//Main function to set the Q and A
function startQuiz(){
    currentIndex = 0;
    score = 0;
    remainingTime = timerSeconds;
    document.getElementById("score-section").style.display="none";
    document.getElementById("question-section").style.display="block";
    document.getElementById("answer-section").style.display="block";
    document.getElementById("timer").style.display="block";
    document.getElementById("initials-input").value = "";
    document.querySelector("#timer").innerHTML = remainingTime;
    quizTimer = setInterval(timerHandler, 1000);
    setQandA();
};

function setQandA(){
    answerOneButtonEl.textContent= questionAnswersObj[currentIndex].answer[0];
    answerTwoButtonEl.textContent= questionAnswersObj[currentIndex]. answer [1];
    answerThreeButtonEl.textContent= questionAnswersObj[currentIndex].answer [2];
    answerFourButtonEl.textContent= questionAnswersObj[currentIndex].answer [3];
    questionEl.textContent= questionAnswersObj[currentIndex].question;
};

function checkAnswer(selectedAnswer){
    var correctAnswer = questionAnswersObj[currentIndex].correctAnswer;

    //check answer and increment score
    if(selectedAnswer === correctAnswer){
        alert("That's correct! You have earned 10 points!");
        score += 10;
    } else {
        alert("That's wrong! You have earned 0 points!");
        remainingTime -= 5;
    };

    //Increment question or finish
    if(currentIndex === questionAnswersObj.length-1){
        alert("Your score is " + score);
        finishQuiz();
    } else {
        currentIndex++;
        setQandA();
    };
};

function finishQuiz(){
    clearInterval(quizTimer);
    document.getElementById("score-section").style.display="block";
    document.getElementById("question-section").style.display="none";
    document.getElementById("answer-section").style.display="none";
    document.getElementById("timer").style.display="none";
};

function saveScore(){
    var initials = document.getElementById("initials-input").value;
    localStorage.setItem(score, initials);
    startQuiz();
};

var timerHandler = function() {
    if (remainingTime > 0) {
        remainingTime -= 1;
        document.querySelector("#timer").innerHTML = remainingTime;
    } else {
        clearInterval(quizTimer);
        alert("You've ran out of time!");
        finishQuiz();
    }
};

//Event Listeners
startBtnEl.addEventListener("click", startQuiz);
answerOneButtonEl.addEventListener("click", function(){
checkAnswer(answerOneButtonEl.textContent);
});
answerTwoButtonEl.addEventListener("click", function(){
    checkAnswer(answerTwoButtonEl.textContent);
    });
answerThreeButtonEl.addEventListener("click", function(){
    checkAnswer(answerThreeButtonEl.textContent);
    });
answerFourButtonEl.addEventListener("click", function(){
    checkAnswer(answerFourButtonEl.textContent);
    });
initialBtnEl.addEventListener("click", saveScore);