var taskIdCounter = 0;
var questionTextEl = document.querySelector("#questions");
var answerFormEl= document.querySelector("#answer-form");
var buttonAnswerOneEl = document.querySelector("#answer-one");
var buttonAnswerTwoEl = document.querySelector("#answer-two")
var buttonAnswerThreeEl = document.querySelector("#answer-three")
var buttonAnswerFourEl = document.querySelector("#answer-four")
var startQuiz = document.querySelector("#start");


//Arrays
var answersQuestionOne = [Number, String, Boolean, Array]; //the incorrect answer is array

//questions function

var questionHandler = function (event) {
    event.preventDefault();
    
};

//answer function
// var answerQuestionEl = document.createElement("answer button");
// answerQuestionEl.textContent= "Answer 1";
// answerQuestionEl.className="btn-one";
// answerQuestionEl.setAttribute()//insert object here
// actioncontainerEl.appendchild(answerQuestionEl);
    
// }



//Event Listener to start the quiz
startQuiz.addEventLister("click", questionHandler);
console.log(startQuiz);