const game1 = new Hangman("car parts", 2);
let puzzle = document.createElement("p");
puzzle.textContent = game1.puzzle;
let gusses = document.createElement("p");
gusses.textContent = game1.statusMessage;
document.querySelector("body").appendChild(puzzle);
document.querySelector("body").appendChild(gusses);

window.addEventListener("keypress", function(e) {
	const guess = String.fromCharCode(e.charCode);
	game1.makeGuess(guess);
	puzzle.textContent = game1.puzzle;
	gusses.textContent = game1.statusMessage;
	document.querySelector("body").appendChild(puzzle);
	document.querySelector("body").appendChild(gusses);
});
