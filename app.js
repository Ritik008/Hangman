let words = [
	"Airport",
	"car parts",
	"cat",
	"Dog",
	"Clock",
	"Compass",
	"Computer",
	"Torch",
	"Swimming Pool",
	"Sun",
	"Software",
	"hardware",
	"Ice",
	"Game",
	"garden"
];
let random = words[Math.floor(Math.random() * words.length)];
const game1 = new Hangman(random, 5);
let puzzle = document.createElement("p");
puzzle.textContent = game1.puzzle;
let gusses = document.createElement("p");
gusses.textContent = game1.statusMessage;
document.querySelector(".game").appendChild(puzzle);
document.querySelector(".game").appendChild(gusses);

window.addEventListener("keypress", function(e) {
	const guess = String.fromCharCode(e.charCode);
	game1.makeGuess(guess);
	puzzle.textContent = game1.puzzle;
	gusses.textContent = game1.statusMessage;
	document.querySelector("game").appendChild(puzzle);
	document.querySelector("game").appendChild(gusses);
});
