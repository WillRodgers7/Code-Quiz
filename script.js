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
//blue element
var element = document.createElement("div");
element.style.cssText = "width 200px; height200px; background:blue";
element.textContent = "example";
element.onclick = function () {
	alert("Howdy");
};
document.body.appendChild(element);

// questions
var currentQuestionIndex = 0;

const myQuestions = [
	{
		question: "What dose HTML Stand for?",
		answers: {
			a: "Hyper Text Markup Language",
			b: "Hyper Text Markdown Language",
			c: "Hold Turn Marketing Language",
			d: "Hyper Texting Modual Languages",
		},
		correctAnswer: "a",
	},

	{
		question: "The condition in an if / else statment is enclosed with ?",
		answers: {
			a: "Quotes",
			b: "Curly Brackets",
			c: "Parantheses",
			d: "Square Brackets",
		},
		correctAnswer: "c",
	},

	{
		question: "Arrays in javascript can be used to store?",
		answers: {
			a: "Numbers and Strings",
			b: "Other Arrays",
			c: "Booleans",
			d: "All of the Above",
		},
		correctAnswer: "d",
	},

	{
		question:
			"String Values must be closed within _____ when being assigned to varibles?",
		answers: {
			a: "Commas",
			b: "Curly Brackets",
			c: "Quotes",
			d: "Parantheses",
		},
		correctAnswer: "b",
	},

	{
		question: "Bootstrsp is which of the following?",
		answers: {
			a: "Language",
			b: "Command",
			c: "Workspace",
			d: "Framework",
		},
		correctAnswer: "d",
	},

	{
		question:
			"If you want to view your code on a web browser you should right click then select?",
		answers: {
			a: "Inspect",
			b: "Cast",
			c: "Back",
			d: "Reload",
		},
		correctAnswer: "a",
	},

	{
		question: "Varribles are?",
		answers: {
			a: "Bullion",
			b: "Servers",
			c: "Placeholders",
			d: "Calls",
		},
		correctAnswer: "c",
	},
];

function startQuiz() {
	document.getElementsByTagName("screen")[0].innerHTML = "";
	document.body.innerHTML = "";
	nextQuestion();
}
function nextQuestion() {
	// clears DOM
	// makes an element for display question selected with currentQuestionIndex
	// makes elements for each choice
	// adds event listeners to each choice element that call nextQuestion on click
	// append question element and choice elements to DOM
	currentQuestionIndex++;
}
// instead of calling startQuiz right when the script runs
// startQuiz()
// let's assign it to a button click
document.querySelector("#bigRed").addEventListener("click", startQuiz);
