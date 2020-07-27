// questions
const myQuestions = [{
		question: "What dose HTML Stand for?",
		answers: [
			"Hyper Text Markup Language",
			"Hyper Text Markdown Language",
			"Hold Turn Marketing Language",
			"Hyper Texting Modual Languages",
		],
		correctAnswer: "Hyper Text Markup Language"
	},

	{
		question: "The condition in an if / else statment is enclosed with ?",
		answers: [
			"Quotes",
			"Curly Brackets",
			"Parantheses",
			"Square Brackets",
		],
		correctAnswer: "Parantheses"
	},

	{
		question: "Arrays in javascript can be used to store?",
		answers: [
			"Numbers and Strings",
			"Other Arrays",
			"Booleans",
			"All of the Above",
		],
		correctAnswer: "All of the Above",
	},

	{
		question: "String Values must be closed within _____ when being assigned to varibles?",
		answers: [
			"Commas",
			"Curly Brackets",
			"Quotes",
			"Parantheses",
		],
		correctAnswer: "Curly Brackets",
	},

	{
		question: "Bootstrsp is which of the following?",
		answers: [
			"Language",
			"Command",
			"Workspace",
			"Framework",
		],
		correctAnswer: "Framework",
	},

	{
		question: "If you want to view your code on a web browser you should right click then select?",
		answers: [
			"Inspect",
			"Cast",
			"Back",
			"Reload",
		],
		correctAnswer: "Inspect",
	},

	{
		question: "Varribles are?",
		answers: [
			"Bullion",
			"Servers",
			"Placeholders",
			"Calls",
		],
		correctAnswer: "Placeholders",
	},
];

var countDownDate = 60;
var currentQuestionIndex = 0;
var screenDiv = document.querySelector("#screen");
var questionDiv = document.querySelector("#question-div");
var gameDiv = document.querySelector("#game");
var questionLine = document.getElementById("question");
var choicesLine = document.getElementById("choices");




// button start
function startQuiz() {
	console.log("Did I make it here?");
	var thisQuestion = myQuestions[currentQuestionIndex];
	console.log(thisQuestion)
	screenDiv.innerText = "";
	questionLine.textContent = thisQuestion.question;

	var x = setInterval(function () {
		countDownDate = countDownDate - 1;
		document.getElementById("demo").innerHTML = countDownDate + "s ";

		// If the count down is over, write some text
		if (countDownDate < 0) {
			clearInterval(x);
			document.getElementById("demo").innerHTML = "EXPIRED";
		}
	}, 1000);


	// create a for loop to list your questions:
	for (var i = 0; i < thisQuestion.answers.length; i++) {

		var answerChoice = document.createElement("button");
		answerChoice.setAttribute("value", thisQuestion.answers[i]);
		answerChoice.setAttribute("class", "choice");
		answerChoice.textContent = thisQuestion.answers[i];
		answerChoice.onclick = answerSelector;
		choicesLine.appendChild(answerChoice);

	}

}

// subtract time & enter intials, give high score
function answerSelector() {
	console.log("answer checker")
	if (this.value != myQuestions[currentQuestionIndex].correctAnswer) {
		console.log("incorrect");
		countDownDate = countDownDate - 10

		// enter intials, give high score

	} else {
		console.log("correct")

	}
	currentQuestionIndex++;
	nextQuestion();

}

// create a for loop to list your answers:
function nextQuestion() {
	choicesLine.textContent = "";
	var thisQuestion = myQuestions[currentQuestionIndex];
	questionLine.textContent = thisQuestion.question;

	for (var i = 0; i < thisQuestion.answers.length; i++) {

		var answerChoice = document.createElement("button");
		answerChoice.setAttribute("value", thisQuestion.answers[i]);
		answerChoice.setAttribute("class", "choice");
		answerChoice.textContent = thisQuestion.answers[i];
		answerChoice.onclick = answerSelector;
		choicesLine.appendChild(answerChoice);
		alert("Yout scored _ out of 8!")
		prompt("Please enter your name for the high score!")

	}

}

// let's assign it to a button click
document.querySelector("#bigRed").addEventListener("click", startQuiz);