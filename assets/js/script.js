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
var initialEl = document.getElementById("initials");


//Quiz variables
let time = questions.length * 20; 
console.log(time);
let questionNumber=0;
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
    setInterval(timer, 1000);
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
    questionsEl.classList.remove("hide");
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

function timer () {
    if(questionIndex < questions.length){
    time--;
    timerEl.innerHTML = "Time: " + time + "s";
    } else {
        time=time;
        timerEl.innerHTML = "Score: " + time + ".";
    }
}

function validateAnswer0(){
    console.log('you have chosen A')
    chosen.push(questions[questionIndex].choices[0]);
    if(chosen[questionIndex]!=answer[questionIndex]){
        time-=10;
        wrongScreen.classList.remove("hide");
        questionsEl.classList.add("hide");

    } else {
        correctScreen.classList.remove("hide");
        questionsEl.classList.add("hide");
    }
    nextBtn.addEventListener ("click", nextQuestion);
}

function validateAnswer1(){
    console.log('you have chosen B')
    chosen.push(questions[questionIndex].choices[1]);
    if(chosen[questionIndex]!=answer[questionIndex]){
        time-=10;
        wrongScreen.classList.remove("hide");
        questionsEl.classList.add("hide");
    } else {
        correctScreen.classList.remove("hide");
        questionsEl.classList.add("hide");
    }

    nextBtn.addEventListener ("click", nextQuestion);
}

function validateAnswer2(){
    console.log('you have chosen C')
    chosen.push(questions[questionIndex].choices[2]);
    if(chosen[questionIndex]!=answer[questionIndex]){
        time-=10;
        wrongScreen.classList.remove("hide");
        questionsEl.classList.add("hide");
    } else {
        correctScreen.classList.remove("hide");
        questionsEl.classList.add("hide");
    }
    nextBtn.addEventListener ("click", nextQuestion);
}

function validateAnswer3(){
    console.log('you have chosen D')
    chosen.push(questions[questionIndex].choices[3]);
    if(chosen[questionIndex]!=answer[questionIndex]){
        time-=10;
        wrongScreen.classList.remove("hide");
        questionsEl.classList.add("hide");
    } else {
        correctScreen.classList.remove("hide");
        questionsEl.classList.add("hide");
    }
    nextBtn.addEventListener ("click", nextQuestion);
}

function endQuiz(){
    endScore.innerHTML = "Your score this time is " + time + ".";
    questionsEl.classList.add("hide");
    endScreen.classList.remove("hide");
    nextBtn.classList.add("hide");
    return;
}

function saveScore(){
    var initials = initialEl.value.trim();
    console.log(initials);
    if (initials === "") {
        window.alert("Please enter a valid initial!")
        return;
    } else {
        var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

        var ScoreObj = {
            score: time,
            initials: initials
        };

        highscore.push(ScoreObj);

        window.localStorage.setItem("highscore", JSON.stringify(highscore));

        window.location.href="scoreboard.html";
    }
}

submitBtn.addEventListener("click", saveScore);
choice1.addEventListener("click", validateAnswer1);
choice0.addEventListener("click", validateAnswer0);
choice2.addEventListener("click", validateAnswer2);
choice3.addEventListener("click", validateAnswer3);

