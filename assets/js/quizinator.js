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
    questionEl.textContent= questions[currentIndex];
    currentIndex++;
};

// var questionsToAskEl= document.querySelector("#questions-to-ask");
// var currentQuestionIndex = 0;
// currentQuestionIndex++; //use this when you want to go onto the next question to make the question one index bigger

//variables for answers
// var answerToQuestionOneEl= document.querySelector("#answer-one");
// var answerToQuestionTwoEl= document.querySelector("#answer-two");
// var answerToQuestionThreeEl= document.querySelector("#answer-three");
// var answerToQuestionFourEl= document.querySelector("#answer-four");
// var formAnswerEl= document.querySelector("#answer-form");

//Answer Arrays
// questionOneAnswerArray= ["Array", "String", "Boolean", "Number"];
// questionTwoAnswerArray= ["html", "js", "jpg", "jsq"];
// questionThreeAnswerArray= ["local variable", "script variable", "function variable", "global variable"];


//questions Handler
// var questionHandler = function() {
//     //create list item to hold the question text
//     var questionItemEl = document.createElement("li");
//     questionItemEl.className = "question-text";
//     //add html content
//     questionItemEl.innerHTML = "<li class= 'question-text'>" + JSON.stringify(questions[0]);
//     //append the question to the document
//     questionsToAskEl.appendChild(questionItemEl);

//     //Answers appear with the questions
//     if(questionItemEl = true) {
//         answerHandler()
//     };
        //if answer is correct, move onto next question
    
        //else, window alert "that is incorrect!"
    
        //loop to next question

    //start the timer when questions start being asked
    // timerHandler();

    //display scores and save to localStorage
//   };

  //Answer Handler
//   var answerHandler = function() {
//         //when the start button is clicked, display both the question and the answers

//       //add the html for answer Button One
//       event.preventDefault();
//       var answerBtnOneEl= document.createElement("li");
//       answerBtnOneEl.innerHTML = questionOneAnswerArray[0];
//       answerToQuestionOneEl.appendChild(answerBtnOneEl);

//       //add the html for answer Button Two
//       event.preventDefault();
//       var answerBtnTwoEl= document.createElement("li");
//       answerBtnTwoEl.innerHTML = questionOneAnswerArray[1];
//       answerToQuestionTwoEl.appendChild(answerBtnTwoEl);

//       //add the html for answer Button Three
//       event.preventDefault();
//       var answerBtnThreeEl= document.createElement("li");
//       answerBtnThreeEl.innerHTML = questionOneAnswerArray[2];
//       answerToQuestionThreeEl.appendChild(answerBtnThreeEl);

//         //add the html for answer Button Four
//         event.preventDefault();
//         var answerBtnFourEl= document.createElement("li");
//         answerBtnFourEl.innerHTML = questionOneAnswerArray[2];
//         answerToQuestionFourEl.appendChild(answerBtnFourEl);

//         if(formAnswerEl = "clicked") {
//             console.log("the form was clicked!")
//         }

        //update questions in the array

    // };

    //scoreHandler
    // var scoreHandler = function() {

    //     //save score to local storage

    // };

    // //save score function
    // var saveScore = function() {
    //     localStorage.setItem("score");
    // };

    // var timerHandler = function() {
    //     if (timer > 0) {
    //         timer -= 1;
    //         document.querySelector("#timer").innerHTML = timer;
    //     } else if (timer < 0) {
    //         // alert("You've ran out of time!")
    //         clearInterval(startCountDown);
    //     }

    //     var startCountDown = setInterval(timerHandler, 1000);
    // };


//Event Listener to start the quiz
// startBtnEl.addEventListener("click", questionHandler);
// formAnswerEl.addEventListener("click", scoreHandler);