var taskIdCounter = 0;
var questionTextEl = document.querySelector("#question");
var answerFormEl= document.querySelector("#answer-form");
var buttonAnswerOneEl = document.querySelector("#answer-one");
var buttonAnswerTwoEl = document.querySelector("#answer-two")
var buttonAnswerThreeEl = document.querySelector("#answer-three")
var buttonAnswerFourEl = document.querySelector("#answer-four")


//question 1: Which is not a JavaScript Primitive Data Type?

//Arrays
var answersQuestionOne = [Number, String, Boolean, Array]; //the incorrect answer is array

//questions function

var questionHandler = function (event) {
    event.preventDefault();
    var questionInput = document.querySelector("h2[#'question-one']").value;
 
};

//answer function
// var answerQuestionEl = document.createElement("answer button");
// answerQuestionEl.textContent= "Answer 1";
// answerQuestionEl.className="btn-one";
// answerQuestionEl.setAttribute()//insert object here
// actioncontainerEl.appendchild(answerQuestionEl);
    
// }


//handlers

//event listeners
