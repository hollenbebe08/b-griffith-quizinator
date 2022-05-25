var taskIdCounter = 0;
var questionTextEl = document.querySelector("#questions");
var answerFormEl= document.querySelector("#answer-form");
var buttonAnswerOneEl = document.querySelector("#answer-one");
var buttonAnswerTwoEl = document.querySelector("#answer-two")
var buttonAnswerThreeEl = document.querySelector("#answer-three")
var buttonAnswerFourEl = document.querySelector("#answer-four")
var startQuiz = document.querySelector("#start");


//Objects for Questions and Answers

var questions = {
    question1: {question:"question", answer: "answer"},
    question2: {question: "question", answer: "answer"},
    question3: {question: "question", answer: "answer"},
    question4: {question: "question", answer: "answer"}
};

//to access a question use this code, ex question1: questions.question2.answer
//for the above code the questions is referencing the object, and then question 2 is the nested object, and answer is referencing the answer inside of that object.

//questions Handler
var questionHandler = function (event) {
    event.preventDefault();
    
};


//Event Listener to start the quiz
startQuiz.addEventLister("click", questionHandler);
console.log(startQuiz);