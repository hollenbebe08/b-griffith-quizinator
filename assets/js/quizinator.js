var startBtnEl = document.querySelector("#start");
var timerBtnEl = document.querySelector("#timer");
var questionsToAskEl= document.querySelector("#questions-to-ask");
var formAnswerEl= document.querySelector("#answer-form");
var answerToQuestionOneEl= document.querySelector("#answer-one");
var answerToQuestionTwoEl= document.querySelector("#answer-two");
var answerToQuestionThreeEl= document.querySelector("#answer-three");
var answerToQuestionFourEl= document.querySelector("#answer-four");
var currentQuestionIndex = 0;
var timer = 40;

// currentQuestionIndex++; //use this when you want to go onto the next question to make the question one index bigger

// var timerEl = document.querySelector("timer");


//Arrays for questions and answers
var questions = ["What is not a JavaScript Primitive Data Type?",
 "A JavaScript file has an extension of", 
 "Which of the following type of variables is visible everywhere in your JavaScript code?", 
];

// answers = [
questionOneAnswerArray= ["Array", "String", "Boolean", "Number"];
// ["html", "js", "jpg", "jsq"], 
// ["local variable", "script variable", "function variable", "global variable"],
// ];


//questions Handler
var questionHandler = function() {
    //create list item to hold the question text
    var questionItemEl = document.createElement("li");
    questionItemEl.className = "question-text";
    //add html content
    questionItemEl.innerHTML = "<li class= 'question-text'>" + JSON.stringify(questions[0]);
    //append the question to the document
    questionsToAskEl.appendChild(questionItemEl);

    if(questionItemEl = true) {
        answerHandler()
    };

    timerHandler();
    //need the answers to appear with the question
    

    //if answer is correct, move onto next question
        //else, window alert "that is incorrect!"
    
    //loop to next question

    //need the timer to start and continue until it hits zero seconds or until all questions are answered

    //display scores and save to localStorage
  };

  //answers appear when the questionHandler starts up and correspond with each question
  var answerHandler = function() {
        //when the start button is clicked, display both the question and the answers

      //add the html for answer Button One
      event.preventDefault();
      var answerBtnOneEl= document.createElement("li");
      answerBtnOneEl.innerHTML = questionOneAnswerArray[0];
      answerToQuestionOneEl.appendChild(answerBtnOneEl);

      //add the html for answer Button Two
      event.preventDefault();
      var answerBtnTwoEl= document.createElement("li");
      answerBtnTwoEl.innerHTML = questionOneAnswerArray[1];
      answerToQuestionTwoEl.appendChild(answerBtnTwoEl);

      //add the html for answer Button Three
      event.preventDefault();
      var answerBtnThreeEl= document.createElement("li");
      answerBtnThreeEl.innerHTML = questionOneAnswerArray[2];
      answerToQuestionThreeEl.appendChild(answerBtnThreeEl);

        //add the html for answer Button Four
        event.preventDefault();
        var answerBtnFourEl= document.createElement("li");
        answerBtnFourEl.innerHTML = questionOneAnswerArray[2];
        answerToQuestionFourEl.appendChild(answerBtnFourEl);
    };

    var timerHandler = function() {
        if (timer > 0) {
            timer -= 1;
            console.log(timer);
            document.querySelector("#timer").innerHTML = timer;
        } else if (--timer < 0) {
            clearInterval(startCountDown);
        } else {
            alert("You've ran out of time!")
        }

        var startCountDown = setInterval(timerHandler, 1000);
    };


//Event Listener to start the quiz
startBtnEl.addEventListener("click", questionHandler);