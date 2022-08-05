let scoresheet = document.querySelector(".scoresheet");
let reset = document.querySelector(".reset");
let home = document.querySelector(".home");

//clearing the score list 
reset.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var totalScore = localStorage.getItem("totalScore");
totalScore = JSON.parse(totalScore);

if (totalScore !== null) {
    for (var i = 0; i < totalScore.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = totalScore[i].initials + " " + totalScore[i].score;
        scoresheet.appendChild(createLi);
    }
}
// redirect to index page
home.addEventListener("click", function () {
    window.location.replace("./index.html");
});