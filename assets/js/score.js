var scoreListEl = document.getElementById ("scoreList");
var clearListEl = document.getElementById ("clear");


function addScores (){

    var highscores = JSON.parse(window.localStorage.getItem("highscore"));

    console.log(highscores)

    highscores.sort(function(a,b){
        return b.score - a.score;
    });

    highscores.forEach(function(score){
        var liTag = document.createElement("li");
        liTag.innerHTML = score.initials + " : " + score.score;

        console.log(liTag);

        scoreListEl.append(liTag);
    });

}

function clearScore(){
    window.localStorage.removeItem("highscore");
    window.location.reload();
}

addScores();
clearListEl.addEventListener("click", clearScore);