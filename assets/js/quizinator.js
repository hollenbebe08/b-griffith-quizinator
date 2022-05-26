var startBtnEl = document.querySelector("#start");
var questionsToAskEl= document.querySelector("#questions-to-ask");
var formAnswerEl= document.querySelector("#answer-form");
var answerToQuestionsEl= document.querySelector("#answer-one, #answer-two, #answer-three, #answer-four");
// var timerEl = document.querySelector("timer");


//Objects for Questions and Answers
var questions = {
    question1: "What is not a JavaScript Primitive Data Type?",
    question2: "A JavaScript file has an extension of",
    question3: "Which of the following type of variables is visible everywhere in your JavaScript code?",
    question4: "which built-in method returns the calling string value converted to lower case?"
};

var answers = {
    answer1: {answer: "Array"},
    answer2: {answer: "js"},
    answer3: {answer: "global variable"},
    answer4: {answer: "toLowerCase()"}
};

//to access a question use this code, ex question1: questions.question2.answer
//for the above code the questions is referencing the object, and then question 2 is the nested object, and answer is referencing the answer inside of that object.

//questions Handler
var questionHandler = function() {
    //first question appears when the start button is clicked
    var questionItemEl = document.createElement("li");
    questionItemEl.className = "question-text";
    questionItemEl.textContent = (JSON.stringify(questions.question1));
    questionsToAskEl.appendChild(questionItemEl);

    //need the answers to appear with the question
    

    //if answer is correct, move onto next question
        //else, window alert "that is incorrect!"
    
    //loop to next question

    //need the timer to start and continue until it hits zero seconds or until all questions are answered

    //display scores and save to localStorage

    return questionHandler;
  };

  var answerHandler = function() {
      //answers appear when the questionHandler starts up and correspond with each question
      var answerItemEl= document.createElement("text");
      answerItemEl.className= "answer-btn";
      answerItemEl.textContent = "this is an answer";
      answerToQuestionsEl.appendChild(answerItemEl);

  };


//Event Listener to start the quiz
startBtnEl.addEventListener("click", questionHandler);
formAnswerEl.addEventListener("click", answerHandler);