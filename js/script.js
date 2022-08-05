let allQuestion = [
    {
        title: "What is full form of CSS?",
        choices: ["Cascading Style Source", "Cascading Style Sheets", "Cascading Source Sheets", "Cascade Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "What is full form of HTML?",
        choices: ["HyperText Markup Language", "HyperText Markup List", "HyperText Makeup Language", "Hypertool Markup Language"],
        answer: "HyperText Markup Language"
    },
    {
        title: "What is full form of HTTP?",
        choices: ["Hypertext Transfer protocol", "Hypertext Testing Protocol", "Hypertext Transfer Print", "Hypertext testing Print"],
        answer: "Hypertext Transfer protocol"
    },
    {
        title: "which is not a datatype in Javascript?",
        choices: ["booolean", "integer", "string", "decimal"],
        answer: "decimal"
    },
    {
        title: "which operator can be used instead of if statement?",
        choices: ["Ternary", "spread", "conditional", "for each"],
        answer: "Ternary"
    }

];

const allQuestionDiv = document.querySelector("#questionsDiv");
const currentTime = document.querySelector(".currentTime");
const timer = document.querySelector(".startTime");
const unorderList = document.createElement("ul");

let penalty = 10;
let questionIndex = 0;
let remainingSeconds = 75;
let score = 0;
let interval = 0;

function render(questionIndex) {
    allQuestionDiv.innerHTML = "";
    unorderList.innerHTML = "";
    for (var i = 0; i < allQuestion.length; i++) {
        var userQuestion = allQuestion[questionIndex].title;
        var userChoices = allQuestion[questionIndex].choices;
        allQuestionDiv.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        allQuestionDiv.appendChild(unorderList);
        unorderList.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

timer.addEventListener("click", function () {
  if (interval === 0) {
    interval = setInterval(function () {
          remainingSeconds--;
          currentTime.textContent = "Time: " + remainingSeconds;
          if (remainingSeconds <= 0) {
              clearInterval(interval);
              allDone();
              currentTime.textContent = "Time's up!";
          }
      }, 1000);
  }
  render(questionIndex);
});


function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var messageDiv = document.createElement("div");
        messageDiv.setAttribute("class", "messageDiv");
        if (element.textContent == allQuestion[questionIndex].answer) {
            score++;
            messageDiv.textContent = "Right! The answer is:  " + allQuestion[questionIndex].answer;
        } else {
            remainingSeconds = remainingSeconds - penalty;
            messageDiv.textContent = "Wrong! The correct answer is:  " + allQuestion[questionIndex].answer;
        }

    } questionIndex++;
        if (questionIndex >= allQuestion.length) {
        allDone();
        messageDiv.textContent = "Quiz End!" + " " + "You got  " + score + "/" + allQuestion.length + " Correct!";
        } else {
        render(questionIndex);
    }
    allQuestionDiv.appendChild(messageDiv);

}
function allDone() {
  allQuestionDiv.innerHTML = "";
  currentTime.innerHTML = "";
  var createH1 = document.createElement("h1");
  createH1.setAttribute("class", "createH1");
  createH1.textContent = "Code Quiz Ends!"

  allQuestionDiv.appendChild(createH1);

  var para = document.createElement("p");
  para.setAttribute("class", "para");

  allQuestionDiv.appendChild(para);

  if (remainingSeconds >= 0) {
    var timeRemaining = remainingSeconds;
    var para2 = document.createElement("p");
    clearInterval(interval);
    para.textContent = "Your final score is: " + timeRemaining;
    allQuestionDiv.appendChild(para2);
  }

//  ********************************************** Label*************************************************
var createLabel = document.createElement("label");
createLabel.setAttribute("class", "createLabel");
createLabel.textContent = "Enter your initials: ";
questionsDiv.appendChild(createLabel);


//  ********************************************** input*************************************************
var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("class", "initials");
createInput.textContent = "";
allQuestionDiv.appendChild(createInput);


//  **********************************************submit*************************************************
  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("class", "submit");
  createSubmit.textContent = "submit";
  allQuestionDiv.appendChild(createSubmit);
  createSubmit.addEventListener("click", function () {
      var initials = createInput.value;

      if (initials !==null) {
          var finalScore = {
              initials: initials,
              score: timeRemaining
          }
          var totalScore = localStorage.getItem("totalScore");
          if (totalScore === null) {
            totalScore = [];
          } else {
            totalScore = JSON.parse(totalScore);
          }
          totalScore.push(finalScore);
          var newScore = JSON.stringify(totalScore);
          localStorage.setItem("totalScore", newScore);
          window.location.replace("./scoresheet.html");
      }
  });

}