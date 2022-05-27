var startBtnEl = document.querySelector("#start");
var questionsToAskEl= document.querySelector("#questions-to-ask");
var formAnswerEl= document.querySelector("#answer-form");
var answerToQuestionsEl= document.querySelector("#answer-one");
var currentQuestionIndex = 0;
var currentAnswerIndex = 0;
// currentQuestionIndex++; //use this when you want to go onto the next question to make the question one index bigger

// var timerEl = document.querySelector("timer");


//Objects for Questions and Answers
var questions = ["What is not a JavaScript Primitive Data Type?",
 "A JavaScript file has an extension of", 
 "Which of the following type of variables is visible everywhere in your JavaScript code?", 
 "which built-in method returns the calling string value converted to lower case?"
];

answers = [
["Array", "String", "Boolean", "Number"], 
["html", "js", "jpg", "jsq"], 
["local variable", "script variable", "function variable", "global variable"],
["tolowercase", "tolowercase()", "toLowercase()", "toLowerCase()"]
];


//to access a question use this code, ex question1: questions.question2.answer
//for the above code the questions is referencing the object, and then question 2 is the nested object, and answer is referencing the answer inside of that object.

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


    //need the answers to appear with the question
    

    //if answer is correct, move onto next question
        //else, window alert "that is incorrect!"
    
    //loop to next question

    //need the timer to start and continue until it hits zero seconds or until all questions are answered

    //display scores and save to localStorage
  };

  //answers appear when the questionHandler starts up and correspond with each question
  var answerHandler = function() {
      //prevent the answers from disappearing
      event.preventDefault();
      //create list items for the answers to be entered into
      var answerItemEl= document.createElement("li");
      //add the html to each answer button
      answerItemEl.innerHTML = "<li class='answer-one'>" + answers[0];
      answerToQuestionsEl.appendChild(answerItemEl);

      //use a switch answer1, answer2, answer3, answer4 to execute what happens with each answer
//       switch(answers) {
//         case 1: answerItemEl.querySelector("click" = "Array"),
//             alert("That's correct!");
//             break;
//         case 2: answerItemEl.querySelector("click" = "js"),
//             alert("That's correct!");
//             break;
//         case 3: answerItemEl.querySelector("click" = "global variable"),
//             alert("That's correct!");
//             break;
//         case 4: answerItemEl.querySelector("click" = "toLowerCase()"),
//             alert("That's correct!");
//             break;
//       };
  };


//Event Listener to start the quiz
startBtnEl.addEventListener("click", questionHandler);
// formAnswerEl.addEventListener("click", answerHandler);