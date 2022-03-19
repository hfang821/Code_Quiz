//DOM APIs
var questionsEl = document.querySelector ("#questions");
var questionBtns = Array.from(document.querySelectorAll(".choicebtn"));
var startButton = document.querySelector("#start-btn");
var timerEl = document.querySelector("#countdown");
var submitBtn = document.querySelector("#submit");
var startScreen = document.getElementById("quiz-questions");
var questionTitle = document.getElementById("question-title");
var choice0 = document.getElementById("choice0");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var endScreen = document.getElementById("endMsg");

//Quiz variables
let time = questions.length * 20; 
console.log(time);
let questionNumber=0;
let score = 0; 
var answer=[];
var questionIndex = 0;


function startQuiz() {
    //1. hide the start screen
    startScreen.classList.add("hide");
    //2. unhide the quiz question
    questionsEl.classList.remove("hide");
    //3. for loop to display each question in turn, Index[0]
    displayTest()
}
//no need ()
startButton. addEventListener ("click", startQuiz)

function displayTest(){
    //1. grab the question-title element and insert current question tile
    questionTitle.innerHTML = questions[questionIndex].title;
    choice0.innerHTML = "A. " + questions[questionIndex].choices[0];
    choice1.innerHTML = "B. "+ questions[questionIndex].choices[1];
    choice2.innerHTML = "C. " + questions[questionIndex].choices[2];
    choice3.innerHTML = "D. " + questions[questionIndex].choices[3];

}

function nextQuestion () {
    
    questionIndex ++;
    if(questionIndex > questions.length - 1) {
        alert("You are done.");
        questionsEl.classList.add("hide");
        endScreen.classList.remove("hide");
        return;

    }
    displayTest();
}


for(let i=0; i < questions.length; i++) {
   answer.push(questions[i].answer);
}


for(let i = 0; i < questionBtns.length; i++) {
    var button = questionBtns[i];
    button.addEventListener("click", nextQuestion)
}