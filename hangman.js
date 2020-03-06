class Hangman {
	constructor(word, remainingGusses) {
		this.word = word.toLowerCase().split("");
		this.remainingGusses = remainingGusses;
		this.gussedLetters = [];
		this.status = "playing";
	}
	calculateStatus() {
		const finished = this.word.every((letter) => {
			return this.gussedLetters.includes(letter) || letter === " ";
		});

		if (this.remainingGusses === 0) {
			this.status = "failed";
		} else if (finished) {
			this.status = "finished";
		} else {
			this.status = "playing";
		}
		return this.status;
	}

	get statusMessage() {
		if (this.calculateStatus() === "playing") {
			return `Gusses left: ${this.remainingGusses}`;
		} else if (this.calculateStatus() === "failed") {
			return `Nice try! The word was "${this.word.join("")}"`;
		} else {
			return "Great work! You gussed the word";
		}
	}
	get puzzle() {
		let puzzle = "";

		this.word.forEach((letter) => {
			if (this.gussedLetters.includes(letter) || letter === " ") {
				puzzle += letter;
			} else {
				puzzle = puzzle + "*";
			}
		});

		return puzzle;
	}
	makeGuess(guess) {
		guess = guess.toLowerCase();
		const isUnique = !this.gussedLetters.includes(guess);
		const isBadGuess = !this.word.includes(guess);

		if (this.status !== "playing") {
			return;
		}

		if (isUnique) {
			this.gussedLetters.push(guess);
		}

		if (isUnique && isBadGuess) {
			this.remainingGusses--;
		}
	}
}
