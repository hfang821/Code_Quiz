//DOM APIs
var questionsEl = document.querySelector ("#questions");
var questionBtns = Array.from(document.querySelectorAll(".choicebtn"));
var startButton = document.querySelector("#start-btn");
var timerEl = document.querySelector("#countdown");
var submitBtn = document.querySelector("#submit");
var startScreen = document.getElementById("quiz-questions");
var correctScreen = document.getElementById("correct");
var wrongScreen = document.getElementById("incorrect");
var questionTitle = document.getElementById("question-title");
var choice0 = document.getElementById("choice0");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var endScreen = document.getElementById("endMsg");
var nextBtn = document.getElementById("nextQ");
var endScore = document.getElementById("finalScore");

//Quiz variables
let time = questions.length * 20; 
console.log(time);
let questionNumber=0;
let score = 0; 
var answer=[];
var chosen=[];
var questionIndex = 0;

for(let i=0; i < questions.length; i++) {
    answer.push(questions[i].answer);
 }
 console.log(answer);

function startQuiz() {
    //1. hide the start screen
    startScreen.classList.add("hide");
    //2. unhide the quiz question
    questionsEl.classList.remove("hide");
    //3. display each question in turn, Index[0] & the next button
    nextBtn.classList.remove("hide");
    displayTest();
}
//no need ()
startButton.addEventListener ("click", startQuiz);

function displayTest(){
    //1. grab the question-title element and insert current question tile
    questionTitle.innerHTML = questions[questionIndex].title;
    choice0.innerHTML = "A. " + questions[questionIndex].choices[0];
    choice1.innerHTML = "B. "+ questions[questionIndex].choices[1];
    choice2.innerHTML = "C. " + questions[questionIndex].choices[2];
    choice3.innerHTML = "D. " + questions[questionIndex].choices[3];
    nextBtn.innerHTML = "Next Question";

}

function nextQuestion () {
    //enter the next question
    console.log(chosen);
    if(!wrongScreen.classList.contains("hide")){
        wrongScreen.classList.add("hide");
    } 
    if(!correctScreen.classList.contains("hide")){
        correctScreen.classList.add("hide");
    }
    questionIndex ++;
    if(questionIndex > questions.length - 1) {
        endQuiz();
    }
    displayTest();
}

function validateAnswer0(){
    console.log('you have chosen A')
    chosen.push(questions[questionIndex].choices[0]);
    if(chosen[questionIndex]!=answer[questionIndex]){
        score-=10;
        wrongScreen.classList.remove("hide");

    } else {
        correctScreen.classList.remove("hide");
    }
    nextBtn.addEventListener ("click", nextQuestion);
}

function validateAnswer1(){
    console.log('you have chosen B')
    chosen.push(questions[questionIndex].choices[1]);
    if(chosen[questionIndex]!=answer[questionIndex]){
        score-=10;
        wrongScreen.classList.remove("hide");

    } else {
        correctScreen.classList.remove("hide");
    }
    nextBtn.addEventListener ("click", nextQuestion);
}

function validateAnswer2(){
    console.log('you have chosen C')
    chosen.push(questions[questionIndex].choices[2]);
    if(chosen[questionIndex]!=answer[questionIndex]){
        score-=10;
        wrongScreen.classList.remove("hide");

    } else {
        correctScreen.classList.remove("hide");
    }
    nextBtn.addEventListener ("click", nextQuestion);
}

function validateAnswer3(){
    console.log('you have chosen D')
    chosen.push(questions[questionIndex].choices[3]);
    if(chosen[questionIndex]!=answer[questionIndex]){
        score-=10;
        wrongScreen.classList.remove("hide");

    } else {
        correctScreen.classList.remove("hide");
    }
    nextBtn.addEventListener ("click", nextQuestion);
}

function endQuiz(){
    endScore.innerHTML = "Your score this time is " + (time + score);
    questionsEl.classList.add("hide");
    endScreen.classList.remove("hide");
    nextBtn.classList.add("hide");
    return;
}

for(let i = 0; i < questionBtns.length; i++) {
    var button = questionBtns[i];
choice0.addEventListener("click", validateAnswer0);
choice1.addEventListener("click", validateAnswer1);
choice2.addEventListener("click", validateAnswer2);
choice3.addEventListener("click", validateAnswer3);
}