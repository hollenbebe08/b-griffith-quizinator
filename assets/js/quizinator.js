var taskIdCounter = 0;
var answerFormEl= document.querySelector("#answer-form");
var questionNumber = document.querySelector("#question-number");
var questionText = document.querySelector("#question-text");

//questions array
var questions = [
    {
        prompt: "Where is the correct place to insert a JavaScript?"
    }
];

//create array to save questions to localStorage
questionHandler = function(event) {
 for(i = 0; i < questions.length; i++) {
     var response = window.prompt(questions[i].prompt);
 }
};