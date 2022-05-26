var startBtnEl = document.querySelector("#start");
var questionsToAskEl= document.querySelector("#questions-to-ask");
// var timerEl = document.querySelector("timer");


//Objects for Questions and Answers
// var questions = {
//     question1: {question:"question", answer: "answer"},
//     question2: {question: "question", answer: "answer"},
//     question3: {question: "question", answer: "answer"},
//     question4: {question: "question", answer: "answer"}
// };

//to access a question use this code, ex question1: questions.question2.answer
//for the above code the questions is referencing the object, and then question 2 is the nested object, and answer is referencing the answer inside of that object.

//questions Handler
var questionHandler = function() {
    var questionItemEl = document.createElement("li");
    questionItemEl.className = "question-text";
    questionItemEl.textContent = "This is the first question.";
    questionsToAskEl.appendChild(questionItemEl);
  };

//Timer function
// var timer = function() {
//     //when the questionHandler beings so does the timer countdown

//     //it starts at 40 seconds and goes until it reaches zero

//     //it stops when the last question's(question4) answer is clicked
//         //else, it stops at 40 seconds and alerts "You have run out of time!" and displays the score

//     timerEl.innerHTML = minutes + " : " + seconds
// };

//Event Listener to start the quiz
startBtnEl.addEventListener("click", questionHandler);