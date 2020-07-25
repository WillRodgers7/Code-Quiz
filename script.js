// Set the date we're counting down to

//Timer
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds

	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("demo").innerHTML = seconds + "s ";

	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
}, 1000);




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
		// subtract time & enter intials, give high score

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
	}

}

// let's assign it to a button click
document.querySelector("#bigRed").addEventListener("click", startQuiz);